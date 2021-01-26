//~~ Dependencies ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
/// <reference path="webgl/webgl.GLAttrib.js"/>
/// <reference path="webgl/webgl.GLBuffer.js"/>
//~~ Declarations ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

class GeometryVertexBuffer extends GLBuffer
{
    constructor(index, type, usage)
    {
        // create array buffer
        super(GL_ARRAY_BUFFER, type, usage);

        // create attrib pointer
        this.attrib = new GLAttrib(index, type);
    };
    
    Enable(stride, offset)
    {
        // enable attrib pointer
        this.attrib.Enable(stride, offset);

        return this;
    };

    Disable()
    {
        // disable attrib pointer
        this.attrib.Disable();

        return this;
    };
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//