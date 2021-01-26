/** Dependencies **********************************************************************************/
/// <reference path="webgl.api.js" />
/// <reference path="webgl.GLArray.js" />
/// <reference path="webgl.GLType.js" />
/** Declarations **********************************************************************************/

class GLBuffer
{
    constructor(target, type, usage)
    {
        // create buffer
        /** @type { WebGLBuffer } */
        this.id = glCreateBuffer();
        /** @type { Number } */
        this.itype = type;
        /** @type { Number } */
        this.usage = usage;
        /** @type { Number } */
        this.target = target; 
    };
    
    Bind()
    {
        // bind buffer
        glBindBuffer(this.target, this.id);

        return this;
    };

    Unbind()
    {
        // unbind buffer
        glBindBuffer(this.target, NULL);

        return this;
    };

    SetData(data)
    {
        // create array by type
        data = new GLArray[this.itype](data);

        // set array buffer data
        glBufferData(this.target, data, this.usage);
        
        return this;
    };

    SetSize(size)
    {
        // set buffer data size
        glBufferData(this.target, size * this.TypeBytes, this.usage);

        return this;
    };

    SubData(offset, data)
    {
        // create array by type
        data = new GLArray[this.itype](data);

        // set array buffer sub-data
        glBufferSubData(this.target, offset * this.TypeBytes, data);
        
        return this;
    };

    get Type()
    {
        // get type from buffer itype
        return GLType[this.itype].Type;
    };

    get TypeSize()
    {
        // get size from buffer itype
        return GLType[this.itype].Size;
    };

    get TypeBytes()
    {
        // get bytes from buffer itype
        return GLType[this.itype].Bytes;
    };
};

GLBuffer.Delete = (obj) => glDeleteBuffer(obj.id);

/** Class Extensions ******************************************************************************/

class GLArrayBuffer extends GLBuffer
{
    constructor(type, usage)
    {
        // create array buffer
        super(GL_ARRAY_BUFFER, type, usage);
    };
    
    Draw(mode, size, offset, instances)
    {
        // check for instances
        if (!(instances > 1))
        {
            // draw array buffer
            glDrawArrays(mode, size * this.TypeSize, this.Type, offset * this.TypeBytes);
        }
        else
        {
            // draw array buffer instances
            glDrawArraysInstanced(mode, size * this.TypeSize, this.Type, offset * this.TypeBytes, instances);
        }

        return this;
    };
};

class GLElementArrayBuffer extends GLBuffer
{
    constructor(type, usage)
    {
        // create element array buffer
        super(GL_ELEMENT_ARRAY_BUFFER, type, usage);
    };
    
    Draw(mode, size, offset, instances)
    {
        // check for instances
        if (!(instances > 1))
        {
            // draw element array buffer
            glDrawElements(mode, size * this.TypeSize, this.Type, offset * this.TypeBytes);
        }
        else
        {
            // draw element array buffer instances
            glDrawElementsInstanced(mode, size * this.TypeSize, this.Type, offset * this.TypeBytes, instances);
        }

        return this;
    };
};


/**************************************************************************************************/