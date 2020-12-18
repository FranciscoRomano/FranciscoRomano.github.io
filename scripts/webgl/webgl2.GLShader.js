/** Dependencies **********************************************************************************/
/// <reference path="webgl2.api.js"/>
/** Declarations **********************************************************************************/

class GLShader
{
    constructor(type)
    {
        // create shader
        /** @type { WebGLShader } */
        this.id = glCreateShader(type);
        /** @type { Number } */
        this.type = type;
    };

    Compile(source)
    {
        // set shader source
        glShaderSource(this.id, source);

        // compile shader source
        glCompileShader(this.id);

        // check compilation status
        if (!glGetShaderParameter(this.id, GL_COMPILE_STATUS)) switch (this.type)
        {
            // throw vertex shader compilation error
            case GL_VERTEX_SHADER:
                throw "GL_VERTEX_SHADER_" + glGetShaderInfoLog(this.id);

            // throw fragment shader compilation error
            case GL_FRAGMENT_SHADER:
                throw "GL_FRAGMENT_SHADER_" + glGetShaderInfoLog(this.id);

            // DEFAULT : throw default shader compilation error
            default:
                throw glGetShaderInfoLog(this.id);
        }

        return this;
    };
};

GLShader.Delete = (obj) => glDeleteShader(obj.id);

/**************************************************************************************************/