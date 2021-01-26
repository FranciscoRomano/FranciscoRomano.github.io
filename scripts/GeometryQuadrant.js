//~~ Dependencies ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
/// <reference path="dom/JsElement.js"/>
/// <reference path="webgl/webgl.GLAttrib.js"/>
//~~ Declarations ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

class GeometryQuadrant
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

    DrawLines()
    {
        // bind array buffer
        this.vbo.Bind();
        this.a_position.Enable(0, 0, 0);
        
        // bind element array buffer
        this.ibo.Bind();
        this.ibo.Draw(GL_LINE_STRIP, 6, 4);

        // unbind all array buffer objects
        this.ibo.Unbind();
        this.a_position.Disable();
        this.vbo.Unbind();

        return this;
    };

    DrawTriangles()
    {
        // bind array buffer
        this.vbo.Bind();
        this.a_position.Enable(0, 0, 0);
        
        // bind element array buffer
        this.ibo.Bind();
        this.ibo.Draw(GL_TRIANGLE_FAN, 4, 0);

        // unbind all array buffer objects
        this.ibo.Unbind();
        this.a_position.Disable();
        this.vbo.Unbind();

        return this;
    };
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//