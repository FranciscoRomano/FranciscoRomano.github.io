/** Dependencies **********************************************************************************/
/// <reference path="webgl.api.js" />
/// <reference path="webgl.GLType.js" />
/** Declarations **********************************************************************************/

class GLAttrib
{
    constructor(index, type)
    {
        // create attrib
        /** @type { Number } */
        this.itype = type;
        /** @type { Number } */
        this.index = index;
    };
    
    Enable(stride, offset)
    {
        // calculate row bytes
        const bytes = GLType[this.Type].Bytes * this.TypeCols;
        
        // iterate through each row
        for (let i = 0; i < this.TypeRows; i++)
        {
            // enable vertex attrib
            glEnableVertexAttribArray(this.index + i);
            glVertexAttribPointer(this.index + i, this.TypeCols, this.Type, false, stride, offset + (bytes * i));
        }

        return this;
    };
    
    Disable()
    {
        // iterate through each row
        for (let i = 0; i < this.TypeRows; i++)
        {
            // disable vertex attrib
            glDisableVertexAttribArray(this.index + i);
        }
        return this;
    };
    
    get Type()
    {
        // get type from attrib itype
        return GLType[this.itype].Type;
    };
    
    get TypeCols()
    {
        // get size from attrib itype
        return GLType[this.itype].Cols;
    };
    
    get TypeRows()
    {
        // get rows from attrib itype
        return GLType[this.itype].Rows;
    };
    
    get TypeBytes()
    {
        // get bytes from attrib itype
        return GLType[this.itype].Bytes;
    };
};

/**************************************************************************************************/