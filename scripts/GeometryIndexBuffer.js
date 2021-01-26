//~~ Dependencies ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
/// <reference path="dom/JsElement.js"/>
/// <reference path="webgl/webgl.GLAttrib.js"/>
/// <reference path="webgl/webgl.GLBuffer.js"/>
//~~ Declarations ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

class GeometryIndexBuffer extends GLBuffer
{
    constructor(type, usage)
    {
        // create index buffer
        super(GL_ELEMENT_ARRAY_BUFFER, type, usage);
    };
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//