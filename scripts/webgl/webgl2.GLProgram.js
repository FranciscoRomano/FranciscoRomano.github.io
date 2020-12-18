/** Dependencies **********************************************************************************/
/// <reference path="webgl2.api.js" />
/// <reference path="webgl2.GLShader.js" />
/** Declarations **********************************************************************************/

class GLProgram
{
    constructor()
    {
        // create program
        /** @type { WebGLProgram } */
        this.id = glCreateProgram();
    };

    Bind()
    {
        // bind program
        glUseProgram(this.id);
        
        return this;
    };

    Link(shaders = [])
    {
        // attach shaders to program
        shaders.forEach(shader => glAttachShader(this.id, shader.id));

        // link program
        glLinkProgram(this.id);

        // check link status
        if (!glGetProgramParameter(this.id, GL_LINK_STATUS))
        {
            // throw link info log
            throw "GLProgram Link :: " + glGetProgramInfoLog(this.id);
        }

        // validate program
        glValidateProgram(this.id);

        // check validate status
        if (!glGetProgramParameter(this.id, GL_VALIDATE_STATUS))
        {
            // throw validate info log
            throw "GLProgram Validate :: " + glGetProgramInfoLog(this.id);
        }

        // detach shaders to program
        shaders.forEach(shader => glDetachShader(this.id, shader.id));

        return this;
    };

    Unbind()
    {
        // unbind program
        glUseProgram(NULL);

        return this;
    };

    Attrib(name)
    {
        // get program attrib location
        return glGetAttribLocation(this.id, name);
    };

    Uniform(name)
    {
        // get program uniform location
        return glGetUniformLocation(this.id, name);
    };
};

GLProgram.Delete = (obj) => glDeleteProgram(obj.id);

/**************************************************************************************************/