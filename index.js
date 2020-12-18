//https://iquilezles.org/www/articles/smoothvoronoi/smoothvoronoi.htm
//https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
//https://catlikecoding.com/unity/tutorials/flow/waves/

//https://useplink.com/en/
/// <reference path="scripts/dom/JsElement.js"/>
/// <reference path="scripts/dom/JsEventGroup.js"/>
/// <reference path="scripts/dom/JsEventInterval.js"/>
/// <reference path="scripts/dom/JsEventListener.js"/>
/// <reference path="scripts/dom/JsEventTimeout.js"/>
/// <reference path="scripts/maths/float2.js"/>
/// <reference path="scripts/maths/float3.js"/>
/// <reference path="scripts/maths/float4.js"/>
/// <reference path="scripts/webgl/webgl2.api.js"/>
/// <reference path="scripts/webgl/webgl2.GLArray.js"/>
/// <reference path="scripts/webgl/webgl2.GLBuffer.js"/>
/// <reference path="scripts/webgl/webgl2.GLProgram.js"/>
/// <reference path="scripts/webgl/webgl2.GLShader.js"/>
/// <reference path="scripts/webgl/webgl2.GLType.js"/>
/// <reference path="scripts/GeometryGrid.js"/>
/// <reference path="scripts/JsCanvas.js"/>
/// <reference path="scripts/JsCanvasWebGL.js"/>

const VSOURCE = `#version 100

attribute vec2 position;

varying vec2 f_uv;
varying vec3 f_point;

uniform float time;
uniform mat4 transform;
uniform mat4 projection;

vec3 hash3(vec2 p)
{
    vec3 q = vec3(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)), dot(p,vec2(419.2,371.9)));
	return fract(sin(q)*43758.5453);
}

float iqnoise(in vec2 x, float u, float v)
{
    vec2 p = floor(x);
    vec2 f = fract(x);
		
	float k = 1.0+63.0*pow(1.0-v,4.0);
	
	float va = 0.0;
	float wt = 0.0;
    for( int j=-2; j<=2; j++ )
    for( int i=-2; i<=2; i++ )
    {
        vec2 g = vec2( float(i),float(j) );
		vec3 o = hash3( p + g )*vec3(u,u,1.0);
		vec2 r = g - f + o.xy;
		float d = dot(r,r);
		float ww = pow( 1.0-smoothstep(0.0,1.414,sqrt(d)), k );
		va += o.z*ww;
		wt += ww;
    }
	
    return va/wt;
}

void main()
{
    f_uv = (position.xy + 1.0) / 2.0;
    float height = 0.0;
    height += iqnoise((f_uv * 256.0) + vec2(0.6, 0.4) * time * 1.0, 1.0, 1.0) * 0.02;
    height /= 1.0;


    f_point = vec3(position.x * 2.0, position.y * 2.0, height);
    gl_Position = transform * vec4(f_point.xyz, 1.0);
    gl_Position.w = -gl_Position.z;
}`;

const FSOURCE = `#version 100
precision mediump float;

varying vec2 f_uv;
varying vec3 f_point;

void main()
{
    vec3 color1 = vec3(f_uv, 1.0);
    vec3 color2 = vec3(1.0 - f_uv, 1.0);

    vec3 pattern = vec3(0.2, 0.6, 0.8);

    gl_FragColor = vec4(mix(color1, color2, f_point.z * 20.0) * pattern, 1.0);
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
    canvas.Style.position = "absolute";
    canvas.Style.transform = "translate(-50%, -50%)";
    canvas.Style.border = "4px solid #fff";

    let vshader = new GLShader(GL_VERTEX_SHADER).Compile(VSOURCE);
    let fshader = new GLShader(GL_FRAGMENT_SHADER).Compile(FSOURCE);
    let program = new GLProgram().Link([ vshader, fshader ]);

    let grid = new GeometryGrid(256, 256);

    let old_time = Date.now();

    const size_w = canvas.Width;
    const size_h = canvas.Height;
    
    new JsEventInterval(() => {
        
        program.Bind();
        canvas.Width = window.innerWidth;
        canvas.Height = window.innerHeight;
        glViewport(0, 0, canvas.Width, canvas.Height);
        glClearColor(225 / 255, 1.0, 1.0, 1.0);
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT | GL_STENCIL_BUFFER_BIT);
        glUniform1f(program.Uniform("time"), (Date.now() - old_time) / 1000.0);
        glUniformMatrix4fv(program.Uniform("transform"), false, MulFloat4x4s([
            Translate(0.0, 0.0, -0.3),
            MulFloat4x4s([
                RotateX(0.6),
            ]),
        ]));
        
        const AR = window.innerWidth / window.innerHeight;
        glUniformMatrix4fv(program.Uniform("projection"), false, Perspective(
            Math.PI * 0.5,
            Math.min(AR, 1.0 - AR),
            0.1,
            1000
        ));
        grid.Draw();
        program.Unbind();

    }, 1000.0 / 60.0).Bind();


    body.AppendChild(canvas);

}).Bind();