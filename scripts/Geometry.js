//~~ Dependencies ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
/// <reference path="dom/JsElement.js"/>
/// <reference path="webgl/webgl.GLAttrib.js"/>
//~~ Declarations ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

class Geometry
{
    constructor()
    {
        // create array buffer
        this.vbo = new GLArrayBuffer(GL_FLOAT_VEC2, 4, GL_STATIC_DRAW);
        this.vbo.Bind().SetData(0, [ -1,-1,-1, 1, 1, 1, 1,-1 ]).Unbind();

        // create element array buffer
        this.ibo = new GLElementArrayBuffer(GL_UNSIGNED_INT, 10, GL_STATIC_DRAW);
        this.ibo.Bind().SetData(0, [
            0, 1, 2, 3, // triangles
            0, 1, 2, 0, 3, 2, // lines
        ]).Unbind();

        // create required vertex attribs
        this.a_position = new GLAttrib(0, GL_FLOAT_VEC2);
    };
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//