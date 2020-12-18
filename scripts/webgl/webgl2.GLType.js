/** Dependencies **********************************************************************************/
/// <reference path="webgl2.api.js" />
/** Declarations **********************************************************************************/
let GLType = {};

// type information
GLType[GL_BOOL]                          = { Type: GL_BOOL,           Cols: 1, Rows: 1, Bytes: 1,  Token: "bool"                 };
GLType[GL_BOOL_VEC2]                     = { Type: GL_BOOL,           Cols: 2, Rows: 1, Bytes: 2,  Token: "bvec2"                };
GLType[GL_BOOL_VEC3]                     = { Type: GL_BOOL,           Cols: 3, Rows: 1, Bytes: 3,  Token: "bvec3"                };
GLType[GL_BOOL_VEC4]                     = { Type: GL_BOOL,           Cols: 4, Rows: 1, Bytes: 4,  Token: "bvec4"                };
GLType[GL_BYTE]                          = { Type: GL_BYTE,           Cols: 1, Rows: 1, Bytes: 1,  Token: "int"                  };
GLType[GL_FLOAT]                         = { Type: GL_FLOAT,          Cols: 1, Rows: 1, Bytes: 4,  Token: "float"                };
GLType[GL_FLOAT_MAT2]                    = { Type: GL_FLOAT,          Cols: 2, Rows: 2, Bytes: 16, Token: "mat2"                 };
GLType[GL_FLOAT_MAT2x3]                  = { Type: GL_FLOAT,          Cols: 2, Rows: 3, Bytes: 24, Token: "mat2x3"               };
GLType[GL_FLOAT_MAT2x4]                  = { Type: GL_FLOAT,          Cols: 2, Rows: 4, Bytes: 32, Token: "mat2x4"               };
GLType[GL_FLOAT_MAT3]                    = { Type: GL_FLOAT,          Cols: 3, Rows: 3, Bytes: 36, Token: "mat3"                 };
GLType[GL_FLOAT_MAT3x2]                  = { Type: GL_FLOAT,          Cols: 3, Rows: 2, Bytes: 24, Token: "mat3x2"               };
GLType[GL_FLOAT_MAT3x4]                  = { Type: GL_FLOAT,          Cols: 3, Rows: 4, Bytes: 48, Token: "mat3x4"               };
GLType[GL_FLOAT_MAT4]                    = { Type: GL_FLOAT,          Cols: 4, Rows: 4, Bytes: 64, Token: "mat4"                 };
GLType[GL_FLOAT_MAT4x2]                  = { Type: GL_FLOAT,          Cols: 4, Rows: 2, Bytes: 32, Token: "mat4x2"               };
GLType[GL_FLOAT_MAT4x3]                  = { Type: GL_FLOAT,          Cols: 4, Rows: 3, Bytes: 48, Token: "mat4x3"               };
GLType[GL_FLOAT_VEC2]                    = { Type: GL_FLOAT,          Cols: 2, Rows: 1, Bytes: 8,  Token: "vec2"                 };
GLType[GL_FLOAT_VEC3]                    = { Type: GL_FLOAT,          Cols: 3, Rows: 1, Bytes: 12, Token: "vec3"                 };
GLType[GL_FLOAT_VEC4]                    = { Type: GL_FLOAT,          Cols: 4, Rows: 1, Bytes: 16, Token: "vec4"                 };
GLType[GL_INT]                           = { Type: GL_INT,            Cols: 1, Rows: 1, Bytes: 4,  Token: "int"                  };
GLType[GL_INT_SAMPLER_2D]                = { Type: GL_INT,            Cols: 1, Rows: 1, Bytes: 4,  Token: "isampler2D"           };
GLType[GL_INT_SAMPLER_2D_ARRAY]          = { Type: GL_INT,            Cols: 1, Rows: 1, Bytes: 4,  Token: "isampler2DArray"      };
GLType[GL_INT_SAMPLER_3D]                = { Type: GL_INT,            Cols: 1, Rows: 1, Bytes: 4,  Token: "isampler3D"           };
GLType[GL_INT_SAMPLER_CUBE]              = { Type: GL_INT,            Cols: 1, Rows: 1, Bytes: 4,  Token: "isamplerCube"         };
GLType[GL_INT_VEC2]                      = { Type: GL_INT,            Cols: 2, Rows: 1, Bytes: 8,  Token: "ivec2"                };
GLType[GL_INT_VEC3]                      = { Type: GL_INT,            Cols: 3, Rows: 1, Bytes: 12, Token: "ivec3"                };
GLType[GL_INT_VEC4]                      = { Type: GL_INT,            Cols: 4, Rows: 1, Bytes: 16, Token: "ivec4"                };
GLType[GL_SAMPLER_2D]                    = { Type: GL_INT,            Cols: 1, Rows: 1, Bytes: 4,  Token: "sampler2D"            };
GLType[GL_SAMPLER_2D_ARRAY]              = { Type: GL_INT,            Cols: 1, Rows: 1, Bytes: 4,  Token: "sampler2DArray"       };
GLType[GL_SAMPLER_2D_ARRAY_SHADOW]       = { Type: GL_INT,            Cols: 1, Rows: 1, Bytes: 4,  Token: "sampler2DArrayShadow" };
GLType[GL_SAMPLER_2D_SHADOW]             = { Type: GL_INT,            Cols: 1, Rows: 1, Bytes: 4,  Token: "sampler2DShadow"      };
GLType[GL_SAMPLER_3D]                    = { Type: GL_INT,            Cols: 1, Rows: 1, Bytes: 4,  Token: "sampler3D"            };
GLType[GL_SAMPLER_CUBE]                  = { Type: GL_INT,            Cols: 1, Rows: 1, Bytes: 4,  Token: "samplerCube"          };
GLType[GL_SAMPLER_CUBE_SHADOW]           = { Type: GL_INT,            Cols: 1, Rows: 1, Bytes: 4,  Token: "samplerCubeShadow"    };
GLType[GL_SHORT]                         = { Type: GL_SHORT,          Cols: 1, Rows: 1, Bytes: 2,  Token: "int"                  };
GLType[GL_UNSIGNED_BYTE]                 = { Type: GL_UNSIGNED_BYTE,  Cols: 1, Rows: 1, Bytes: 1,  Token: "uint"                 };
GLType[GL_UNSIGNED_INT]                  = { Type: GL_UNSIGNED_INT,   Cols: 1, Rows: 1, Bytes: 4,  Token: "uint"                 };
GLType[GL_UNSIGNED_INT_SAMPLER_2D]       = { Type: GL_INT,            Cols: 1, Rows: 1, Bytes: 4,  Token: "usampler2D"           };
GLType[GL_UNSIGNED_INT_SAMPLER_2D_ARRAY] = { Type: GL_INT,            Cols: 1, Rows: 1, Bytes: 4,  Token: "usampler2DArray"      };
GLType[GL_UNSIGNED_INT_SAMPLER_3D]       = { Type: GL_INT,            Cols: 1, Rows: 1, Bytes: 4,  Token: "usampler3D"           };
GLType[GL_UNSIGNED_INT_SAMPLER_CUBE]     = { Type: GL_INT,            Cols: 1, Rows: 1, Bytes: 4,  Token: "usamplerCube"         };
GLType[GL_UNSIGNED_INT_VEC2]             = { Type: GL_UNSIGNED_INT,   Cols: 2, Rows: 1, Bytes: 8,  Token: "uvec2"                };
GLType[GL_UNSIGNED_INT_VEC3]             = { Type: GL_UNSIGNED_INT,   Cols: 3, Rows: 1, Bytes: 12, Token: "uvec3"                };
GLType[GL_UNSIGNED_INT_VEC4]             = { Type: GL_UNSIGNED_INT,   Cols: 4, Rows: 1, Bytes: 16, Token: "uvec4"                };
GLType[GL_UNSIGNED_SHORT]                = { Type: GL_UNSIGNED_SHORT, Cols: 1, Rows: 1, Bytes: 2,  Token: "uint"                 };

/**************************************************************************************************/