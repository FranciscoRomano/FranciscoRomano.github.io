/** Dependencies **********************************************************************************/
/// <reference path="webgl.api.js" />
/** Declarations **********************************************************************************/

let GLArray = {};

// type array constructor
GLArray[GL_BOOL]                          = Int8Array;
GLArray[GL_BOOL_VEC2]                     = Int8Array;
GLArray[GL_BOOL_VEC3]                     = Int8Array;
GLArray[GL_BOOL_VEC4]                     = Int8Array;
GLArray[GL_BYTE]                          = Int8Array;
GLArray[GL_FLOAT]                         = Float32Array;
GLArray[GL_FLOAT_MAT2]                    = Float32Array;
GLArray[GL_FLOAT_MAT2x3]                  = Float32Array;
GLArray[GL_FLOAT_MAT2x4]                  = Float32Array;
GLArray[GL_FLOAT_MAT3]                    = Float32Array;
GLArray[GL_FLOAT_MAT3x2]                  = Float32Array;
GLArray[GL_FLOAT_MAT3x4]                  = Float32Array;
GLArray[GL_FLOAT_MAT4]                    = Float32Array;
GLArray[GL_FLOAT_MAT4x2]                  = Float32Array;
GLArray[GL_FLOAT_MAT4x3]                  = Float32Array;
GLArray[GL_FLOAT_VEC2]                    = Float32Array;
GLArray[GL_FLOAT_VEC3]                    = Float32Array;
GLArray[GL_FLOAT_VEC4]                    = Float32Array;
GLArray[GL_INT]                           = Int32Array;
GLArray[GL_INT_SAMPLER_2D]                = Int32Array;
GLArray[GL_INT_SAMPLER_2D_ARRAY]          = Int32Array;
GLArray[GL_INT_SAMPLER_3D]                = Int32Array;
GLArray[GL_INT_SAMPLER_CUBE]              = Int32Array;
GLArray[GL_INT_VEC2]                      = Int32Array;
GLArray[GL_INT_VEC3]                      = Int32Array;
GLArray[GL_INT_VEC4]                      = Int32Array;
GLArray[GL_SAMPLER_2D]                    = Int32Array;
GLArray[GL_SAMPLER_2D_ARRAY]              = Int32Array;
GLArray[GL_SAMPLER_2D_ARRAY_SHADOW]       = Int32Array;
GLArray[GL_SAMPLER_2D_SHADOW]             = Int32Array;
GLArray[GL_SAMPLER_3D]                    = Int32Array;
GLArray[GL_SAMPLER_CUBE]                  = Int32Array;
GLArray[GL_SAMPLER_CUBE_SHADOW]           = Int32Array;
GLArray[GL_SHORT]                         = Int16Array;
GLArray[GL_UNSIGNED_BYTE]                 = Uint8Array;
GLArray[GL_UNSIGNED_INT]                  = Uint32Array;
GLArray[GL_UNSIGNED_INT_SAMPLER_2D]       = Uint32Array;
GLArray[GL_UNSIGNED_INT_SAMPLER_2D_ARRAY] = Uint32Array;
GLArray[GL_UNSIGNED_INT_SAMPLER_3D]       = Uint32Array;
GLArray[GL_UNSIGNED_INT_SAMPLER_CUBE]     = Uint32Array;
GLArray[GL_UNSIGNED_INT_VEC2]             = Uint32Array;
GLArray[GL_UNSIGNED_INT_VEC3]             = Uint32Array;
GLArray[GL_UNSIGNED_INT_VEC4]             = Uint32Array;
GLArray[GL_UNSIGNED_SHORT]                = Uint16Array;

// R format array constructor
GLArray[GL_R16F]     = Uint16Array;
GLArray[GL_R16I]     = Int16Array;
GLArray[GL_R16UI]    = Uint16Array;
GLArray[GL_R32F]     = Float32Array;
GLArray[GL_R32I]     = Int32Array;
GLArray[GL_R32UI]    = Uint32Array;
GLArray[GL_R8I]      = Int8Array;
GLArray[GL_R8UI]     = Uint8Array;
GLArray[GL_R8]       = Uint8Array;
GLArray[GL_R8_SNORM] = Int8Array;
GLArray[GL_RED]      = Uint8Array;

// RG format array constructor
GLArray[GL_RG16F]     = Uint16Array;
GLArray[GL_RG16I]     = Int16Array;
GLArray[GL_RG16UI]    = Uint16Array;
GLArray[GL_RG32F]     = Float32Array;
GLArray[GL_RG32I]     = Int32Array;
GLArray[GL_RG32UI]    = Uint32Array;
GLArray[GL_RG8I]      = Int8Array;
GLArray[GL_RG8UI]     = Uint8Array;
GLArray[GL_RG8]       = Uint8Array;
GLArray[GL_RG8_SNORM] = Int8Array;
GLArray[GL_RG]        = Uint8Array;

// RGB format array constructor
GLArray[GL_R11F_G11F_B10F] = Uint32Array;
GLArray[GL_RGB16F]         = Uint16Array;
GLArray[GL_RGB16I]         = Int16Array;
GLArray[GL_RGB16UI]        = Uint16Array;
GLArray[GL_RGB32F]         = Float32Array;
GLArray[GL_RGB32I]         = Int32Array;
GLArray[GL_RGB32UI]        = Uint32Array;
GLArray[GL_RGB565]         = Uint16Array;
GLArray[GL_RGB8I]          = Int8Array;
GLArray[GL_RGB8UI]         = Uint8Array;
GLArray[GL_RGB8]           = Uint8Array;
GLArray[GL_RGB8_SNORM]     = Int8Array;
GLArray[GL_RGB9_E5]        = Uint32Array;
GLArray[GL_RGB]            = Uint8Array;
GLArray[GL_SRGB8]          = Uint8Array;

// RGBA format array constructor
GLArray[GL_RGB10_A2UI]   = Uint32Array;
GLArray[GL_RGB10_A2]     = Uint32Array;
GLArray[GL_RGB5_A1]      = Uint16Array;
GLArray[GL_RGBA16F]      = Uint16Array;
GLArray[GL_RGBA16I]      = Int16Array;
GLArray[GL_RGBA16UI]     = Uint16Array;
GLArray[GL_RGBA32F]      = Float32Array;
GLArray[GL_RGBA32I]      = Int32Array;
GLArray[GL_RGBA32UI]     = Uint32Array;
GLArray[GL_RGBA4]        = Uint16Array;
GLArray[GL_RGBA8I]       = Int8Array;
GLArray[GL_RGBA8UI]      = Uint8Array;
GLArray[GL_RGBA8]        = Uint8Array;
GLArray[GL_RGBA8_SNORM]  = Int8Array;
GLArray[GL_RGBA]         = Uint8Array;
GLArray[GL_SRGB8_ALPHA8] = Uint8Array;

// Custom format array constructor
GLArray[GL_ALPHA]              = Uint8Array;
GLArray[GL_DEPTH24_STENCIL8]   = Uint32Array;
GLArray[GL_DEPTH32F_STENCIL8]  = Float32Array;
GLArray[GL_DEPTH_COMPONENT16]  = Uint16Array;
GLArray[GL_DEPTH_COMPONENT24]  = Uint32Array;
GLArray[GL_DEPTH_COMPONENT32F] = Float32Array;
GLArray[GL_DEPTH_COMPONENT]    = Uint32Array;
GLArray[GL_DEPTH_STENCIL]      = Uint32Array;
GLArray[GL_LUMINANCE]          = Uint8Array;
GLArray[GL_LUMINANCE_ALPHA]    = Uint8Array;

/**************************************************************************************************/