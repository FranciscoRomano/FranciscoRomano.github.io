/** Dependencies **********************************************************************************/
/// <reference path="webgl.api.js" />
/** Declarations **********************************************************************************/

let GLFormat = {};

// R format information
GLFormat[GL_R16F]     = { Type: GL_HALF_FLOAT,     Size: 1, Format: GL_RED         };
GLFormat[GL_R16I]     = { Type: GL_SHORT,          Size: 1, Format: GL_RED_INTEGER };
GLFormat[GL_R16UI]    = { Type: GL_UNSIGNED_SHORT, Size: 1, Format: GL_RED_INTEGER };
GLFormat[GL_R32F]     = { Type: GL_FLOAT,          Size: 1, Format: GL_RED         };
GLFormat[GL_R32I]     = { Type: GL_INT,            Size: 1, Format: GL_RED_INTEGER };
GLFormat[GL_R32UI]    = { Type: GL_UNSIGNED_INT,   Size: 1, Format: GL_RED_INTEGER };
GLFormat[GL_R8I]      = { Type: GL_BYTE,           Size: 1, Format: GL_RED_INTEGER };
GLFormat[GL_R8UI]     = { Type: GL_UNSIGNED_BYTE,  Size: 1, Format: GL_RED_INTEGER };
GLFormat[GL_R8]       = { Type: GL_UNSIGNED_BYTE,  Size: 1, Format: GL_RED         };
GLFormat[GL_R8_SNORM] = { Type: GL_BYTE,           Size: 1, Format: GL_RED         };
GLFormat[GL_RED]      = { Type: GL_UNSIGNED_BYTE,  Size: 1, Format: GL_RED         };

// RG format information
GLFormat[GL_RG16F]     = { Type: GL_HALF_FLOAT,     Size: 2, Format: GL_RG         };
GLFormat[GL_RG16I]     = { Type: GL_SHORT,          Size: 2, Format: GL_RG_INTEGER };
GLFormat[GL_RG16UI]    = { Type: GL_UNSIGNED_SHORT, Size: 2, Format: GL_RG_INTEGER };
GLFormat[GL_RG32F]     = { Type: GL_FLOAT,          Size: 2, Format: GL_RG         };
GLFormat[GL_RG32I]     = { Type: GL_INT,            Size: 2, Format: GL_RG_INTEGER };
GLFormat[GL_RG32UI]    = { Type: GL_UNSIGNED_INT,   Size: 2, Format: GL_RG_INTEGER };
GLFormat[GL_RG8I]      = { Type: GL_BYTE,           Size: 2, Format: GL_RG_INTEGER };
GLFormat[GL_RG8UI]     = { Type: GL_UNSIGNED_BYTE,  Size: 2, Format: GL_RG_INTEGER };
GLFormat[GL_RG8]       = { Type: GL_UNSIGNED_BYTE,  Size: 2, Format: GL_RG         };
GLFormat[GL_RG8_SNORM] = { Type: GL_BYTE,           Size: 2, Format: GL_RG         };
GLFormat[GL_RG]        = { Type: GL_UNSIGNED_BYTE,  Size: 2, Format: GL_RG         };

// RGB format information
GLFormat[GL_R11F_G11F_B10F] = { Type: GL_UNSIGNED_INT_10F_11F_11F_REV, Size: 3, Format: GL_RGB         };
GLFormat[GL_RGB16F]         = { Type: GL_HALF_FLOAT,                   Size: 3, Format: GL_RGB         };
GLFormat[GL_RGB16I]         = { Type: GL_SHORT,                        Size: 3, Format: GL_RGB_INTEGER };
GLFormat[GL_RGB16UI]        = { Type: GL_UNSIGNED_SHORT,               Size: 3, Format: GL_RGB_INTEGER };
GLFormat[GL_RGB32F]         = { Type: GL_FLOAT,                        Size: 3, Format: GL_RGB         };
GLFormat[GL_RGB32I]         = { Type: GL_INT,                          Size: 3, Format: GL_RGB_INTEGER };
GLFormat[GL_RGB32UI]        = { Type: GL_UNSIGNED_INT,                 Size: 3, Format: GL_RGB_INTEGER };
GLFormat[GL_RGB565]         = { Type: GL_UNSIGNED_SHORT_5_6_5,         Size: 3, Format: GL_RGB         };
GLFormat[GL_RGB8I]          = { Type: GL_BYTE,                         Size: 3, Format: GL_RGB_INTEGER };
GLFormat[GL_RGB8UI]         = { Type: GL_UNSIGNED_BYTE,                Size: 3, Format: GL_RGB_INTEGER };
GLFormat[GL_RGB8]           = { Type: GL_UNSIGNED_BYTE,                Size: 3, Format: GL_RGB         };
GLFormat[GL_RGB8_SNORM]     = { Type: GL_BYTE,                         Size: 3, Format: GL_RGB         };
GLFormat[GL_RGB9_E5]        = { Type: GL_UNSIGNED_INT_5_9_9_9_REV,     Size: 3, Format: GL_RGB         };
GLFormat[GL_RGB]            = { Type: GL_UNSIGNED_BYTE,                Size: 3, Format: GL_RGB         };
GLFormat[GL_SRGB8]          = { Type: GL_UNSIGNED_BYTE,                Size: 3, Format: GL_RGB         };

// RGBA format information
GLFormat[GL_RGB10_A2UI]   = { Type: GL_UNSIGNED_INT_2_10_10_10_REV, Size: 4, Format: GL_RGBA_INTEGER };
GLFormat[GL_RGB10_A2]     = { Type: GL_UNSIGNED_INT_2_10_10_10_REV, Size: 4, Format: GL_RGBA         };
GLFormat[GL_RGB5_A1]      = { Type: GL_UNSIGNED_SHORT_5_5_5_1,      Size: 4, Format: GL_RGBA         };
GLFormat[GL_RGBA16F]      = { Type: GL_HALF_FLOAT,                  Size: 4, Format: GL_RGBA         };
GLFormat[GL_RGBA16I]      = { Type: GL_SHORT,                       Size: 4, Format: GL_RGBA_INTEGER };
GLFormat[GL_RGBA16UI]     = { Type: GL_UNSIGNED_SHORT,              Size: 4, Format: GL_RGBA_INTEGER };
GLFormat[GL_RGBA32F]      = { Type: GL_FLOAT,                       Size: 4, Format: GL_RGBA         };
GLFormat[GL_RGBA32I]      = { Type: GL_INT,                         Size: 4, Format: GL_RGBA_INTEGER };
GLFormat[GL_RGBA32UI]     = { Type: GL_UNSIGNED_INT,                Size: 4, Format: GL_RGBA_INTEGER };
GLFormat[GL_RGBA4]        = { Type: GL_UNSIGNED_SHORT_4_4_4_4,      Size: 4, Format: GL_RGBA         };
GLFormat[GL_RGBA8I]       = { Type: GL_BYTE,                        Size: 4, Format: GL_RGBA_INTEGER };
GLFormat[GL_RGBA8UI]      = { Type: GL_UNSIGNED_BYTE,               Size: 4, Format: GL_RGBA_INTEGER };
GLFormat[GL_RGBA8]        = { Type: GL_UNSIGNED_BYTE,               Size: 4, Format: GL_RGBA         };
GLFormat[GL_RGBA8_SNORM]  = { Type: GL_BYTE,                        Size: 4, Format: GL_RGBA         };
GLFormat[GL_RGBA]         = { Type: GL_UNSIGNED_BYTE,               Size: 4, Format: GL_RGBA         };
GLFormat[GL_SRGB8_ALPHA8] = { Type: GL_UNSIGNED_BYTE,               Size: 4, Format: GL_RGBA         };

// Custom format information
GLFormat[GL_ALPHA]              = { Type: GL_UNSIGNED_BYTE,                  Size: 1, Format: GL_ALPHA            };
GLFormat[GL_DEPTH24_STENCIL8]   = { Type: GL_UNSIGNED_INT_24_8,              Size: 1, Format: GL_DEPTH_STENCIL    };
GLFormat[GL_DEPTH32F_STENCIL8]  = { Type: GL_FLOAT_32_UNSIGNED_INT_24_8_REV, Size: 1, Format: GL_DEPTH_STENCIL    };
GLFormat[GL_DEPTH_COMPONENT16]  = { Type: GL_UNSIGNED_SHORT,                 Size: 1, Format: GL_DEPTH_COMPONENT  };
GLFormat[GL_DEPTH_COMPONENT24]  = { Type: GL_UNSIGNED_INT,                   Size: 1, Format: GL_DEPTH_COMPONENT  };
GLFormat[GL_DEPTH_COMPONENT32F] = { Type: GL_FLOAT,                          Size: 1, Format: GL_DEPTH_COMPONENT  };
GLFormat[GL_DEPTH_COMPONENT]    = { Type: GL_UNSIGNED_INT,                   Size: 1, Format: GL_DEPTH_COMPONENT  };
GLFormat[GL_DEPTH_STENCIL]      = { Type: GL_UNSIGNED_INT_24_8,              Size: 1, Format: GL_DEPTH_STENCIL    };
GLFormat[GL_LUMINANCE]          = { Type: GL_UNSIGNED_BYTE,                  Size: 1, Format: GL_LUMINANCE        };
GLFormat[GL_LUMINANCE_ALPHA]    = { Type: GL_UNSIGNED_BYTE,                  Size: 1, Format: GL_LUMINANCE_ALPHA  };

/**************************************************************************************************/