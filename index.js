//https://iquilezles.org/www/articles/smoothvoronoi/smoothvoronoi.htm
//https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
//https://catlikecoding.com/unity/tutorials/flow/waves/
//https://github.com/dli?tab=repositories
//https://useplink.com/en/
/// <reference path="scripts/dom/JsElement.js"/>
/// <reference path="scripts/dom/JsEventGroup.js"/>
/// <reference path="scripts/dom/JsEventInterval.js"/>
/// <reference path="scripts/dom/JsEventListener.js"/>
/// <reference path="scripts/dom/JsEventTimeout.js"/>
/// <reference path="scripts/maths/float2.js"/>
/// <reference path="scripts/maths/float3.js"/>
/// <reference path="scripts/maths/float4.js"/>
/// <reference path="scripts/webgl/webgl.api.js"/>
/// <reference path="scripts/webgl/webgl.GLArray.js"/>
/// <reference path="scripts/webgl/webgl.GLBuffer.js"/>
/// <reference path="scripts/webgl/webgl.GLProgram.js"/>
/// <reference path="scripts/webgl/webgl.GLShader.js"/>
/// <reference path="scripts/webgl/webgl.GLType.js"/>
/// <reference path="scripts/GeometryGrid.js"/>
/// <reference path="scripts/GeometryIndexBuffer.js"/>
/// <reference path="scripts/GeometryVertexBuffer.js"/>
/// <reference path="scripts/JsCanvas.js"/>
/// <reference path="scripts/JsCanvasWebGL.js"/>

const VSOURCE = `#version 100

attribute vec2 position;

uniform mat4 transform;
uniform mat4 projection;

void main()
{
    gl_Position = vec4(position.xy, 0.0, 1.0);
}`;

const FSOURCE = `#version 100
precision mediump float;
precision mediump int;
//https://www.shadertoy.com/view/3scfD7

uniform float time;
uniform vec2 u_screen_size;

#define DRAG_MULT 0.048
#define ITERATIONS_RAYMARCH 13
#define ITERATIONS_NORMAL 13
#define Time (time)
#define Resolution (u_screen_size.xy)


vec2 wavedx(vec2 position, vec2 direction, float speed, float frequency, float timeshift) {
    float x = dot(direction, position) * frequency + timeshift * speed;
    float wave = exp(sin(x) - 1.0);
    float dx = wave * cos(x);
    return vec2(wave, -dx);
}

float getwaves(vec2 position, int iterations){
	float iter = 0.0;
    float phase = 6.0;
    float speed = 2.0;
    float weight = 1.0;
    float w = 0.0;
    float ws = 0.0;

    const int MAX_ITERATIONS = 100;

    for(int i=0;i<MAX_ITERATIONS;i++){
        vec2 p = vec2(sin(iter), cos(iter));
        vec2 res = wavedx(position, p, speed, phase, Time);
        position += normalize(p) * res.y * weight * DRAG_MULT;
        w += res.x * weight;
        iter += 12.0;
        ws += weight;
        weight = mix(weight, 0.0, 0.2);
        phase *= 1.18;
        speed *= 1.07;
    }
    return w / ws;
}

float raymarchwater(vec3 camera, vec3 start, vec3 end, float depth){
    vec3 pos = start;
    float h = 0.0;
    float hupper = depth;
    float hlower = 0.0;
    vec2 zer = vec2(0.0);
    vec3 dir = normalize(end - start);
    float eps = 0.01;

    //const int MAX_ITERATIONS = 318;
    const int MAX_ITERATIONS = 32;

    for(int i = 0; i < MAX_ITERATIONS; i++)
    {
        h = getwaves(pos.xz * 0.1, ITERATIONS_RAYMARCH/int(1.0+length(pos/100.0))) * depth - depth;
        float dist_pos = distance(pos, camera);
        if(h + eps*dist_pos > pos.y) {
            return dist_pos;
        }
        pos += dir * (pos.y - h);
        eps *= 1.01;
    }
    return -1.0;
}

float H = 0.0;
vec3 normal(vec2 pos, float e, float depth){
    vec2 ex = vec2(e, 0);
    H = getwaves(pos.xy * 0.1, ITERATIONS_NORMAL) * depth;
    vec3 a = vec3(pos.x, H, pos.y);
    return normalize(cross(normalize(a-vec3(pos.x - e, getwaves(pos.xy * 0.1 - ex.xy * 0.1, ITERATIONS_NORMAL) * depth, pos.y)), 
                           normalize(a-vec3(pos.x, getwaves(pos.xy * 0.1 + ex.yx * 0.1, ITERATIONS_NORMAL) * depth, pos.y + e))));
}
mat3 rotmat(vec3 axis, float angle)
{
	axis = normalize(axis);
	float s = sin(angle);
	float c = cos(angle);
	float oc = 1.0 - c;
	return mat3(oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s, 
	oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s, 
	oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c);
}

vec3 getRay(vec2 uv){
    uv = (uv * 2.0 - 1.0) * vec2(Resolution.x / Resolution.y, 1.0);
	vec3 proj = normalize(vec3(uv.x, uv.y, 1.0) + vec3(uv.x, uv.y, -1.0) * pow(length(uv), 2.0) * 0.05);	
    if(Resolution.x < 400.0) return proj;
	vec3 ray = rotmat(vec3(0.0, -1.0, 0.0), 3.0 * (2.0 - 1.0)) * proj;
    return ray.xyz;
}

float intersectPlane(vec3 origin, vec3 direction, vec3 point, vec3 normal)
{ 
    return clamp(dot(point - origin, normal) / dot(direction, normal), -1.0, 9991999.0); 
}

vec3 extra_cheap_atmosphere(vec3 raydir, vec3 sundir){
	sundir.y = max(sundir.y, -0.07);
	float special_trick = 1.0 / (raydir.y * 1.0 + 0.1);
	float special_trick2 = 1.0 / (sundir.y * 11.0 + 1.0);
	float raysundt = pow(abs(dot(sundir, raydir)), 2.0);
	float sundt = pow(max(0.0, dot(sundir, raydir)), 8.0);
	float mymie = sundt * special_trick * 0.2;
	vec3 suncolor = mix(vec3(1.0), max(vec3(0.0), vec3(1.0) - vec3(5.5, 13.0, 22.4) / 22.4), special_trick2);
	vec3 bluesky= vec3(5.5, 13.0, 22.4) / 22.4 * suncolor;
	vec3 bluesky2 = max(vec3(0.0), bluesky - vec3(5.5, 13.0, 22.4) * 0.002 * (special_trick + -6.0 * sundir.y * sundir.y));
	bluesky2 *= special_trick * (0.24 + raysundt * 0.24);
	return bluesky2 * (1.0 + 1.0 * pow(1.0 - raydir.y, 3.0)) + mymie * suncolor;
} 
vec3 getatm(vec3 ray){
 	return extra_cheap_atmosphere(ray, normalize(vec3(1.0))) * 0.5;
    
}

float sun(vec3 ray){
 	vec3 sd = normalize(vec3(1.0));   
    return pow(max(0.0, dot(ray, sd)), 528.0) * 110.0;
}
vec3 aces_tonemap(vec3 color){	
	mat3 m1 = mat3(
        0.59719, 0.07600, 0.02840,
        0.35458, 0.90834, 0.13383,
        0.04823, 0.01566, 0.83777
	);
	mat3 m2 = mat3(
        1.60475, -0.10208, -0.00327,
        -0.53108,  1.10813, -0.07276,
        -0.07367, -0.00605,  1.07602
	);
	vec3 v = m1 * color;    
	vec3 a = v * (v + 0.0245786) - 0.000090537;
	vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
	return pow(clamp(m2 * (a / b), 0.0, 1.0), vec3(1.0 / 2.2));	
}

void main()
{
    vec2 uv = gl_FragCoord.xy / u_screen_size;

    float waterdepth = 2.1;
	vec3 wfloor = vec3(0.0, -waterdepth, 0.0);
	vec3 wceil = vec3(0.0, 0.0, 0.0);
	vec3 orig = vec3(0.0, 2.0, 0.0);
	vec3 ray = getRay(uv);
	float hihit = intersectPlane(orig, ray, wceil, vec3(0.0, 1.0, 0.0));
    if(ray.y >= -0.01){
        vec3 C = getatm(ray) * 2.0;
        //tonemapping
    	C = aces_tonemap(C);
        gl_FragColor = vec4( C,1.0);   
        return;
    }
	float lohit = intersectPlane(orig, ray, wfloor, vec3(0.0, 1.0, 0.0));
    vec3 hipos = orig + ray * hihit;
    vec3 lopos = orig + ray * lohit;
	float dist = raymarchwater(orig, hipos, lopos, waterdepth);
    vec3 pos = orig + ray * dist;

	vec3 N = normal(pos.xz, 0.001, waterdepth);
    vec2 velocity = N.xz * (1.0 - N.y);
    N = mix(vec3(0.0, 1.0, 0.0), N, 1.0 / (dist * dist * 0.01 + 1.0));
    vec3 R = reflect(ray, N);
    float fresnel = (0.04 + (1.0-0.04)*(pow(1.0 - max(0.0, dot(-N, ray)), 5.0)));
	
    vec3 C = fresnel * getatm(R) * 2.0;
    //tonemapping
    C = aces_tonemap(C);
    
    gl_FragColor = vec4(C,1.0);
}`;

function Perspective(fov, ar, n, f)
{
    let tf = 1.0 / Math.tan(fov / 2.0);
    let ri = 1.0 / (n - f);
    return new float4x4(
        tf/ar,  0,        0, 0,
            0, tf,        0, 0,
            0,  0, (n+f)*ri,-1,
            0,  0, n*f*ri*2, 0
    );
};

function Translate(x, y, z)
{
    return new float4x4(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        x, y, z, 1
    );
};

function RotateX(a)
{
    const sin = Math.sin(a);
    const cos = Math.cos(a);
    return new float4x4(
        1.0, 0.0, 0.0, 0.0,
        0.0, cos,-sin, 0.0,
        0.0, sin, cos, 0.0,
        0.0, 0.0, 0.0, 1.0,
    );
};

function RotateY(a)
{
    const sin = Math.sin(a);
    const cos = Math.cos(a);
    return new float4x4(
        cos, 0.0, sin, 0.0,
        0.0, 1.0, 0.0, 0.0,
       -sin, 0.0, cos, 0.0,
        0.0, 0.0, 0.0, 1.0,
    );
};

function RotateZ(a)
{
    const sin = Math.sin(a);
    const cos = Math.cos(a);
    return new float4x4(
        cos,-sin, 0.0, 0.0,
        sin, cos, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        0.0, 0.0, 0.0, 1.0,
    );
};

function Dot(a, b)
{
    return (a.x * b.x) + (a.y * b.y) + (a.z * b.z) + (a.w * b.w);
};

function MulFloat4x4(a,b)
{
    return new float4x4(
        Dot(a.c0,b.r0),Dot(a.c1,b.r0),Dot(a.c2,b.r0),Dot(a.c3,b.r0),
        Dot(a.c0,b.r1),Dot(a.c1,b.r1),Dot(a.c2,b.r1),Dot(a.c3,b.r1),
        Dot(a.c0,b.r2),Dot(a.c1,b.r2),Dot(a.c2,b.r2),Dot(a.c3,b.r2),
        Dot(a.c0,b.r3),Dot(a.c1,b.r3),Dot(a.c2,b.r3),Dot(a.c3,b.r3),
    );
};

function MulFloat4x4s(n)
{
    for (let i = 1; i < n.length; i++)
    {
        n[0] = MulFloat4x4(n[0], n[i]);
    }

    return n[0];
};

new JsEventListener(document, 'touchstart', (e) => {
    e.preventDefault();
    e.stopPropagation();
}).Bind();

new JsEventListener(document, 'touchmove', (e) => {
    e.preventDefault();
    e.stopPropagation();
}).Bind();

new JsEventListener(window, "load", function(e)
{
    let body = new JsElement(document.body);
    let canvas = new JsCanvasWebGL(window.innerWidth, window.innerHeight);
    canvas.Style.top = "50%";
    canvas.Style.left = "50%";
    canvas.Style.width = "100%";
    canvas.Style.height = "100%";
    canvas.Style.position = "absolute";
    canvas.Style.transform = "translate(-50%, -50%)";
    canvas.Style.border = "4px solid #fff";

    let vshader = new GLShader(GL_VERTEX_SHADER).Compile(VSOURCE);
    let fshader = new GLShader(GL_FRAGMENT_SHADER).Compile(FSOURCE);
    let program = new GLProgram().Compile([ vshader, fshader ]);

    

    let grid = new GeometryGrid(1, 1);


    //let grid = new GeometryGrid(512, 512);
    //let quad = new GeometryQuad();

    // let ibo = new GeometryIndexBuffer(GL_UNSIGNED_INT, GL_STATIC_DRAW);
    // ibo.Bind().SetData([ 0, 1, 2, 3 ]).Unbind();

    // let vbo = new GeometryVertexBuffer(0, GL_FLOAT_VEC2, GL_STATIC_DRAW);
    // vbo.Bind().SetData([ -1,-1,-1, 1, 1, 1, 1,-1 ]).Unbind();

    let old_time = Date.now();
    
    new JsEventInterval(() => {
        
        program.Bind();
        canvas.Width = window.innerWidth;
        canvas.Height = window.innerHeight;
        glViewport(0, 0, canvas.Width, canvas.Height);
        //glClearColor(225 / 255, 1.0, 1.0, 1.0);
        //glClearColor(0.9, 1.0, 1.0, 1.0);
        glClearColor(0.0, 0.0, 0.0, 0.0);
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT | GL_STENCIL_BUFFER_BIT);
        glUniform1f(program.Uniform("time"), (Date.now() - old_time) / 1000.0);
        glUniform2f(program.Uniform("u_screen_size"), canvas.Width, canvas.Height);
        glUniformMatrix4fv(program.Uniform("transform"), false, MulFloat4x4s([ Translate(0.0, -0.1, -0.3), RotateX(0.6) ]));
        
        const AR = window.innerWidth / window.innerHeight;
        glUniformMatrix4fv(program.Uniform("projection"), false, Perspective(
            Math.PI * 0.5,
            Math.max(AR, 1.0 - AR),
            0.1,
            1000
        ));

        grid.Draw();

        // vbo.Bind().Enable(0, 0);

        // ibo.Bind();
        // glDrawElements(GL_TRIANGLE_FAN, 4, GL_UNSIGNED_INT, 0);
        // ibo.Unbind();

        // vbo.Unbind().Disable();

        program.Unbind();

    }, 1000.0 / 60.0).Bind();


    body.AppendChild(canvas);

}).Bind();