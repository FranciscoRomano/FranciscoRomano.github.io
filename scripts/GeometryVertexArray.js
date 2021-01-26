//~~ Dependencies ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
/// <reference path="GeometryVertexBuffer.js"/>
//~~ Declarations ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

class GeometryVertexArray
{
    constructor()
    {
        /** @type { Number } */
        this.stride = 0;
        /** @type { Number[] } */
        this.offsets = [];
        /** @type { GeometryVertexBuffer[] } */
        this.buffers = [];
    };

    Bind()
    {
        let offset = 0;

        // iterate through each buffer
        this.buffers.forEach(buffer => {

            buffer.Bind();

            buffer.Enable(this.stride, offset);

            offset += buffer.TypeBytes();

        })
    };

    Buffer(type, )
};

GeometryVertexArray.REGISTERED_NAMES = {};
GeometryVertexArray.REGISTERED_ATTRIBS = [];

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//