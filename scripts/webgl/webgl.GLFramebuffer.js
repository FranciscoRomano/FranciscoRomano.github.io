/** Dependencies **********************************************************************************/
/// <reference path="webgl.api.js" />
/// <reference path="webgl.GLShader.js" />
/** Declarations **********************************************************************************/

class GLFramebuffer
{
    constructor(target)
    {
        // create framebuffer
        /** @type { WebGLFramebuffer } */
        this.id = glCreateFramebuffer();
        /** @type { Number } */
        this.target = target;
    };

    Bind()
    {
        // bind framebuffer
        glBindFramebuffer(this.target, this.id);
        
        return this;
    };

    Unbind()
    {
        // unbind framebuffer
        glBindFramebuffer(this.target, NULL);

        return this;
    };

    Texture2D(attachment, texture, level)
    {
        // attach framebuffer texture 2d
        glFramebufferTexture2D(this.target, attachment, texture.target, texture.id, level);
        
        return this;
    };

    DrawBuffers(buffers)
    {
        // set draw buffers
        glDrawBuffers(buffers);

        // check framebuffer status
        switch (glCheckFramebufferStatus(this.target))
        {
            case GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                throw "GLFramebuffer :: INCOMPLETE ATTACHMENT";
            case GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                throw "GLFramebuffer :: INCOMPLETE DIMENSIONS";
            case GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                throw "GLFramebuffer :: INCOMPLETE MISSING ATTACHMENT";
            case GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE:
                throw "GLFramebuffer :: INCOMPLETE MULTISAMPLE";
            case GL_FRAMEBUFFER_UNSUPPORTED:
                throw "GLFramebuffer :: UNSUPPORTED";
            default:
                break;
        }
        
        return this;
    };

    Renderbuffer(attachment, renderbuffer)
    {
        // attach framebuffer renderbuffer
        glFramebufferRenderbuffer(this.target, attachment, renderbuffer.target, renderbuffer.id);
        
        return this;
    };

    TextureLayer(attachment, texture, level, layer)
    {
        // attach framebuffer texture layer
        glFramebufferTextureLayer(this.target, attachment, texture.id, level, layer);
        
        return this;
    };
};

GLFramebuffer.Delete = (obj) => glDeleteFramebuffer(obj.id);

/**************************************************************************************************/