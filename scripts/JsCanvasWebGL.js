//~~ Dependencies ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
/// <reference path="webgl/webgl.api.js"/>
/// <reference path="JsCanvas.js"/>
//~~ Declarations ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

class JsCanvasWebGL extends JsCanvas
{
    constructor(width, height)
    {
        // create webgl canvas element
        super(width, height);
        this.ctx_webgl = WebGL.Init(this.Element);
        glGetSupportedExtensions().forEach(e => glGetExtension(e));
        glEnable(GL_STENCIL_TEST);
        glEnable(GL_DEPTH_TEST);
        glEnable(GL_CULL_FACE);
        glCullFace(GL_BACK);
        glFrontFace(GL_CW);
        glStencilFunc(GL_ALWAYS, 0, 0xFF);
        glStencilOp(GL_INCR, GL_INCR, GL_INCR);
        glViewport(0, 0, width, height);
        glClearColor(0, 0, 0, 0);
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT | GL_STENCIL_BUFFER_BIT);
    };

    Bind()
    {
        WebGL.Bind(this.ctx_webgl);
        return this;
    };
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//