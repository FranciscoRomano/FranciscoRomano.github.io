/** Dependencies **********************************************************************************/
/// <reference path="webgl2.api.js" />
/// <reference path="webgl2.GLArray.js" />
/// <reference path="webgl2.GLType.js" />
/** Declarations **********************************************************************************/

class GLBuffer
{
    constructor(target, type)
    {
        // create buffer
        /** @type { WebGLBuffer } */ this.id = glCreateBuffer();
        /** @type { number      } */ this.itype = type;
        /** @type { number      } */ this.target = target;
        /** @type { number      } */ this.stride = 0;
    };
    
    Bind()
    {
        // bind buffer
        glBindBuffer(this.target, this.id);

        return this;
    };

    Draw(mode, size, offset, instances)
    {
        // check buffer target / type
        switch (this.target)
        {
            // draw array buffer instances
            case GL_ARRAY_BUFFER:
                glDrawArraysInstanced(mode, offset, size, instances);
                break;

            // draw element array buffer instances
            case GL_ELEMENT_ARRAY_BUFFER:
                glDrawElementsInstanced(mode, size, this.Type, offset, instances);
                break;

            // target buffer not implemented for drawing
            default:
                console.warn("not implemented!");
                break;
        }
        
        return this;
    };

    Unbind()
    {
        // unbind buffer
        glBindBuffer(this.target, NULL);

        return this;
    };

    SetSize(size, usage)
    {
        // create array from itype
        let data = new GLArray[this.itype](size * this.Size);

        // set array buffer data size
        glBufferData(this.target, data, usage);

        return this;
    };

    SetData(data, usage)
    {   
        // create array from itype
        data = new GLArray[this.itype](data);

        // set new array buffer data
        glBufferData(this.target, data, usage);

        return this;
    };

    SubData(offset, data)
    {
        // create array from itype
        data = new GLArray[this.itype](data);

        // set array buffer sub-data
        glBufferSubData(this.target, offset * this.Bytes, data);
        
        return this;
    };

    get Cols()
    {
        // get cols from buffer itype
        return GLType[this.itype].Cols;
    };

    get Rows()
    {
        // get rows from buffer itype
        return GLType[this.itype].Rows;
    };

    get Size()
    {
        // calculate buffer itype size
        return this.Cols * this.Rows;
    };

    get Type()
    {
        // get type from buffer itype
        return GLType[this.itype].Type;
    };

    get Bytes()
    {
        // get bytes from buffer itype
        return GLType[this.itype].Bytes;
    };
};

GLBuffer.Delete = (obj) => glDeleteBuffer(obj.id);

/**************************************************************************************************/