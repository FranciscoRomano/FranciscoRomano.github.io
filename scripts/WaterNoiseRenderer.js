//~~ Dependencies ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
/// <reference path="webgl/webgl.api.js"/>
/// <reference path="webgl/webgl.GLProgram.js"/>
/// <reference path="webgl/webgl.GLTexture.js"/>
//https://github.com/dli/waves/blob/master/simulation.js
//~~ Declarations ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

class WaterNoiseRenderer
{
    constructor(width, height)
    {
        // create program
        this.fshader = new GLShader(GL_FRAGMENT_SHADER).Compile(WaterRenderer.FSHADER);
        this.vshader = new GLShader(GL_VERTEX_SHADER).Compile(WaterRenderer.VSHADER);
        this.program = new GLProgram().Compile([ this.vshader, this.fshader ]);
        this.u_uniform

        // create framebuffer
        this.framebuffer = new GLFramebuffer(GL_FRAMEBUFFER);
        this.framebuffer.Bind();
        
        // create framebuffer textures
        this.a_texture = new GLTexture2D(GL_R32F, width, height);
        this.framebuffer.Texture2D(GL_COLOR_ATTACHMENT0, this.a_texture, 0);
    };

    Bind()
    {
        WebGL.Bind(this.ctx_webgl);
        return this;
    };
};

WaterRenderer.VSHADER = `#version 100

attribute vec3

void main()
{
    
}`;

WaterRenderer.FSHADER = `#version 100
precision mediump float;

attribute vec3

void main()
{

}`;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//