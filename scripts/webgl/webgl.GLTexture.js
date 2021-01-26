/** Dependencies **********************************************************************************/
/// <reference path="webgl.api.js" />
/// <reference path="webgl.GLArray.js" />
/// <reference path="webgl.GLFormat.js" />
/** Declarations **********************************************************************************/

class GLTexture
{    
    constructor(target, format)
    {
        // create texture
        /** @type { WebGLTexture } */
        this.id = glCreateTexture();
        /** @type { Number } */
        this.target = target;
        /** @type { Number } */
        this.iformat = format;
    };
    
    Bind()
    {
        // bind texture
        glBindTexture(this.target, this.id);

        return this;
    };

    Unbind()
    {
        // unbind texture
        glBindTexture(this.target, NULL);

        return this;
    };

    Storei(name, value)
    {
        // set pixel storage parameter
        glPixelStorei(name, value);

        return this;
    };

    Parameter(name)
    {
        // get texture parameter
        return glGetTexParameter(this.target, name);
    };

    Parameterf(name, value)
    {
        // set texture float parameter
        glTexParameterf(this.target, name, value);
        
        return this;
    }

    Parameteri(name, value)
    {
        // set texture integer parameter
        glTexParameteri(this.target, name, value);

        return this;
    };

    GenerateMipmap()
    {
        // generate texture mip-map
        glGenerateMipmap(this.target);

        return this;
    };

    get Size()
    {
        // get size from texture iformat
        return GLFormat[this.iformat].Size;
    };

    get Type()
    {
        // get type from texture iformat
        return GLFormat[this.iformat].Type;
    };

    get Format()
    {
        // get format from texture iformat
        return GLFormat[this.iformat].Format;
    };

    get Length()
    {
        // calculate 2d texture buffer length
        return this.width * this.height * this.Size;
    };
};

GLTexture.Delete = (obj) => glDeleteTexture(obj.id);

/** Class Extensions ******************************************************************************/

class GLTexture2D extends GLTexture
{    
    constructor(format, width, height)
    {
        // create texture 2d
        super(GL_TEXTURE_2D, format);
        /** @type { Number } */
        this.width = width;
        /** @type { Number } */
        this.height = height;

        // configure texture 2d
        this.Bind();
        this.Storei(GL_UNPACK_ALIGNMENT, 1);
        glTexImage2D(GL_TEXTURE_2D, 0, format, width, height, 0, this.Format, this.Type, NULL);
        this.Parameteri(GL_TEXTURE_MIN_FILTER, GL_NEAREST);
        this.Parameteri(GL_TEXTURE_MAG_FILTER, GL_NEAREST);
        this.Parameteri(GL_TEXTURE_WRAP_S, GL_CLAMP_TO_EDGE);
        this.Parameteri(GL_TEXTURE_WRAP_T, GL_CLAMP_TO_EDGE);
        this.Unbind();
    };

    SetData(x, y, width, height, pixels)
    {
        // create appropriate array
        pixels = pixels ? new GLArray[this.Type](pixels) : NULL;

        // set texture 2d pixel region
        glTexSubImage2D(GL_TEXTURE_2D, 0, x, y, width, height, this.Format, this.Type, pixels);

        return this;
    };
};

/**************************************************************************************************/