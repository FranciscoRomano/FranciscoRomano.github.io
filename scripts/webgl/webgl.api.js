/** Dependencies **********************************************************************************/

// https://www.khronos.org/registry/OpenGL-Refpages/es3/

let WebGL = {
    // webgl context
    gl: null,
    // bind webgl context
    Bind: (gl) => WebGL.gl = gl,
    // initialize webgl context
    Init: (canvas, options) => WebGL.gl = canvas.getContext("webgl2", options),
};

/** Declarations **********************************************************************************/
/** Declarations **********************************************************************************/

// https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Standard_WebGL_1_constants

// C/C++ types
let NULL = null;

// clearing buffers
let GL_DEPTH_BUFFER_BIT = 0x00000100;
let GL_STENCIL_BUFFER_BIT = 0x00000400;
let GL_COLOR_BUFFER_BIT = 0x00004000;

// rendering primitives
let GL_POINTS = 0x0000;
let GL_LINES = 0x0001;
let GL_LINE_LOOP = 0x0002;
let GL_LINE_STRIP = 0x0003;
let GL_TRIANGLES = 0x0004;
let GL_TRIANGLE_STRIP = 0x0005;
let GL_TRIANGLE_FAN = 0x0006;

// blending modes
let GL_ZERO = 0;
let GL_ONE = 1;
let GL_SRC_COLOR = 0x0300;
let GL_ONE_MINUS_SRC_COLOR = 0x0301;
let GL_SRC_ALPHA = 0x0302;
let GL_ONE_MINUS_SRC_ALPHA = 0x0303;
let GL_DST_ALPHA = 0x0304;
let GL_ONE_MINUS_DST_ALPHA = 0x0305;
let GL_DST_COLOR = 0x0306;
let GL_ONE_MINUS_DST_COLOR = 0x0307;
let GL_SRC_ALPHA_SATURATE = 0x0308;
let GL_CONSTANT_COLOR = 0x8001;
let GL_ONE_MINUS_CONSTANT_COLOR = 0x8002;
let GL_CONSTANT_ALPHA = 0x8003;
let GL_ONE_MINUS_CONSTANT_ALPHA = 0x8004;

// blending equations
let GL_FUNC_ADD = 0x8006;
let GL_FUNC_SUBSTRACT = 0x800A;
let GL_FUNC_REVERSE_SUBTRACT = 0x800B;

// getting gl parameter information
let GL_BLEND_EQUATION = 0x8009;
let GL_BLEND_EQUATION_RGB = 0x8009;
let GL_BLEND_EQUATION_ALPHA = 0x883D;
let GL_BLEND_DST_RGB = 0x80C8;
let GL_BLEND_SRC_RGB = 0x80C9;
let GL_BLEND_DST_ALPHA = 0x80CA;
let GL_BLEND_SRC_ALPHA = 0x80CB;
let GL_BLEND_COLOR = 0x8005;
let GL_ARRAY_BUFFER_BINDING = 0x8894;
let GL_ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;
let GL_LINE_WIDTH = 0x0B21;
let GL_ALIASED_POINT_SIZE_RANGE = 0x846D;
let GL_ALIASED_LINE_WIDTH_RANGE = 0x846E;
let GL_CULL_FACE_MODE = 0x0B45;
let GL_FRONT_FACE = 0x0B46;
let GL_DEPTH_RANGE = 0x0B70;
let GL_DEPTH_WRITEMASK = 0x0B72;
let GL_DEPTH_CLEAR_VALUE = 0x0B73;
let GL_DEPTH_FUNC = 0x0B74;
let GL_STENCIL_CLEAR_VALUE = 0x0B91;
let GL_STENCIL_FUNC = 0x0B92;
let GL_STENCIL_FAIL = 0x0B94;
let GL_STENCIL_PASS_DEPTH_FAIL = 0x0B95;
let GL_STENCIL_PASS_DEPTH_PASS = 0x0B96;
let GL_STENCIL_REF = 0x0B97;
let GL_STENCIL_VALUE_MASK = 0x0B93;
let GL_STENCIL_WRITEMASK = 0x0B98;
let GL_STENCIL_BACK_FUNC = 0x8800;
let GL_STENCIL_BACK_FAIL = 0x8801;
let GL_STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;
let GL_STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;
let GL_STENCIL_BACK_REF = 0x8CA3;
let GL_STENCIL_BACK_VALUE_MASK = 0x8CA4;
let GL_STENCIL_BACK_WRITEMASK = 0x8CA5;
let GL_VIEWPORT = 0x0BA2;
let GL_SCISSOR_BOX = 0x0C10;
let GL_COLOR_CLEAR_VALUE = 0x0C22;
let GL_COLOR_WRITEMASK = 0x0C23;
let GL_UNPACK_ALIGNMENT = 0x0CF5;
let GL_PACK_ALIGNMENT = 0x0D05;
let GL_MAX_TEXTURE_SIZE = 0x0D33;
let GL_MAX_VIEWPORT_DIMS = 0x0D3A;
let GL_SUBPIXEL_BITS = 0x0D50;
let GL_RED_BITS = 0x0D52;
let GL_GREEN_BITS = 0x0D53;
let GL_BLUE_BITS = 0x0D54;
let GL_ALPHA_BITS = 0x0D55;
let GL_DEPTH_BITS = 0x0D56;
let GL_STENCIL_BITS = 0x0D57;
let GL_POLYGON_OFFSET_UNITS = 0x2A00;
let GL_POLYGON_OFFSET_FACTOR = 0x8038;
let GL_TEXTURE_BINDING_2D = 0x8069;
let GL_SAMPLE_BUFFERS = 0x80A8;
let GL_SAMPLES = 0x80A9;
let GL_SAMPLE_COVERAGE_VALUE = 0x80AA;
let GL_SAMPLE_COVERAGE_INVERT = 0x80AB;
let GL_COMPRESSED_TEXTURE_FORMATS = 0x86A3;
let GL_VENDOR = 0x1F00;
let GL_RENDERER = 0x1F01;
let GL_VERSION = 0x1F02;
let GL_IMPLEMENTATION_COLOR_READ_TYPE = 0x8B9A;
let GL_IMPLEMENTATION_COLOR_READ_FORMAT = 0x8B9B;
let GL_BROWSER_DEFAULT_WEBGL = 0x9244;

// buffers
let GL_STATIC_DRAW = 0x88E4;
let GL_STREAM_DRAW = 0x88E0;
let GL_DYNAMIC_DRAW = 0x88E8;
let GL_ARRAY_BUFFER = 0x8892;
let GL_ELEMENT_ARRAY_BUFFER = 0x8893;
let GL_BUFFER_SIZE = 0x8764;
let GL_BUFFER_USAGE = 0x8765;

// vertex attributes
let GL_CURRENT_VERTEX_ATTRIB = 0x8626;
let GL_VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;
let GL_VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;
let GL_VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;
let GL_VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;
let GL_VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886A;
let GL_VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;
let GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889F;

// culling
let GL_CULL_FACE = 0x0B44;
let GL_FRONT = 0x0404;
let GL_BACK = 0x0405;
let GL_FRONT_AND_BACK = 0x0408;

// enabling and disabling
let GL_BLEND = 0x0BE2;
let GL_DEPTH_TEST = 0x0B71;
let GL_DITHER = 0x0BD0;
let GL_POLYGON_OFFSET_FILL = 0x8037;
let GL_SAMPLE_ALPHA_TO_COVERAGE = 0x809E;
let GL_SAMPLE_COVERAGE = 0x80A0;
let GL_SCISSOR_TEST = 0x0C11;
let GL_STENCIL_TEST = 0x0B90;

// errors
let GL_NO_ERROR = 0;
let GL_INVALID_ENUM = 0x0500;
let GL_INVALID_VALUE = 0x0501;
let GL_INVALID_OPERATION = 0x0502;
let GL_OUT_OF_MEMORY = 0x0505;
let GL_CONTEXT_LOST_WEBGL = 0x9242;

// front face directions
let GL_CW = 0x0900;
let GL_CCW = 0x0901;

// hints
let GL_DONT_CARE = 0x1100;
let GL_FASTEST = 0x1101;
let GL_NICEST = 0x1102;
let GL_GENERATE_MIPMAP_HINT = 0x8192;

// data types
let GL_BYTE = 0x1400;
let GL_UNSIGNED_BYTE = 0x1401;
let GL_SHORT = 0x1402;
let GL_UNSIGNED_SHORT = 0x1403;
let GL_INT = 0x1404;
let GL_UNSIGNED_INT = 0x1405;
let GL_FLOAT = 0x1406;

// pixel formats
let GL_DEPTH_COMPONENT = 0x1902;
let GL_ALPHA = 0x1906;
let GL_RGB = 0x1907;
let GL_RGBA = 0x1908;
let GL_LUMINANCE = 0x1909;
let GL_LUMINANCE_ALPHA = 0x190A;

// pixel types
//let GL_UNSIGNED_BYTE = 0x1401;
let GL_UNSIGNED_SHORT_4_4_4_4 = 0x8033;
let GL_UNSIGNED_SHORT_5_5_5_1 = 0x8034;
let GL_UNSIGNED_SHORT_5_6_5 = 0x8363;

// shaders
let GL_FRAGMENT_SHADER = 0x8B30;
let GL_VERTEX_SHADER = 0x8B31;
let GL_COMPILE_STATUS = 0x8B81;
let GL_DELETE_STATUS = 0x8B80;
let GL_LINK_STATUS = 0x8B82;
let GL_VALIDATE_STATUS = 0x8B83;
let GL_ATTACHED_SHADERS = 0x8B85;
let GL_ACTIVE_ATTRIBUTES = 0x8B89;
let GL_ACTIVE_UNIFORMS = 0x8B86;
let GL_MAX_VERTEX_ATTRIBS = 0x8869;
let GL_MAX_VERTEX_UNIFORM_VECTORS = 0x8DFB;
let GL_MAX_VARYING_VECTORS = 0x8DFC;
let GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4D;
let GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8B4C;
let GL_MAX_TEXTURE_IMAGE_UNITS = 0x8872;
let GL_MAX_FRAGMENT_UNIFORM_VECTORS = 0x8DFD;
let GL_SHADER_TYPE = 0x8B4F;
let GL_SHADING_LANGUAGE_VERSION = 0x8B8C;
let GL_CURRENT_PROGRAM = 0x8B8D;

// depth or stencil tests
let GL_NEVER = 0x0200;
let GL_ALWAYS = 0x0207;
let GL_LESS = 0x0201;
let GL_EQUAL = 0x0202;
let GL_LEQUAL = 0x0203;
let GL_GREATER = 0x0204;
let GL_GEQUAL = 0x0206;
let GL_NOTEQUAL = 0x0205;

// stencil actions
let GL_KEEP = 0x1E00;
let GL_REPLACE = 0x1E01;
let GL_INCR = 0x1E02;
let GL_DECR = 0x1E03;
let GL_INVERT = 0x150A;
let GL_INCR_WRAP = 0x8507;
let GL_DECR_WRAP = 0x8508;

// textures
let GL_NEAREST = 0x2600;
let GL_LINEAR = 0x2601;
let GL_NEAREST_MIPMAP_NEAREST = 0x2700;
let GL_LINEAR_MIPMAP_NEAREST = 0x2701;
let GL_NEAREST_MIPMAP_LINEAR = 0x2702;
let GL_LINEAR_MIPMAP_LINEAR = 0x2703;
let GL_TEXTURE_MAG_FILTER = 0x2800;
let GL_TEXTURE_MIN_FILTER = 0x2801;
let GL_TEXTURE_WRAP_S = 0x2802;
let GL_TEXTURE_WRAP_T = 0x2803;
let GL_TEXTURE_2D = 0x0DE1;
let GL_TEXTURE = 0x1702;
let GL_TEXTURE_CUBE_MAP = 0x8513;
let GL_TEXTURE_BINDING_CUBE_MAP = 0x8514;
let GL_TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
let GL_TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
let GL_TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
let GL_TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
let GL_TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
let GL_TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851A;
let GL_MAX_CUBE_MAP_TEXTURE_SIZE = 0x851C;
let GL_TEXTURE0 = 0x84C0;
let GL_TEXTURE1 = 0x84C1;
let GL_TEXTURE2 = 0x84C2;
let GL_TEXTURE3 = 0x84C3;
let GL_TEXTURE4 = 0x84C4;
let GL_TEXTURE5 = 0x84C5;
let GL_TEXTURE6 = 0x84C6;
let GL_TEXTURE7 = 0x84C7;
let GL_TEXTURE8 = 0x84C8;
let GL_TEXTURE9 = 0x84C9;
let GL_TEXTURE10 = 0x84CA;
let GL_TEXTURE11 = 0x84CB;
let GL_TEXTURE12 = 0x84CC;
let GL_TEXTURE13 = 0x84CD;
let GL_TEXTURE14 = 0x84CE;
let GL_TEXTURE15 = 0x84CF;
let GL_TEXTURE16 = 0x84D0;
let GL_TEXTURE17 = 0x84D1;
let GL_TEXTURE18 = 0x84D2;
let GL_TEXTURE19 = 0x84D3;
let GL_TEXTURE20 = 0x84D4;
let GL_TEXTURE21 = 0x84D5;
let GL_TEXTURE22 = 0x84D6;
let GL_TEXTURE23 = 0x84D7;
let GL_TEXTURE24 = 0x84D8;
let GL_TEXTURE25 = 0x84D9;
let GL_TEXTURE26 = 0x84DA;
let GL_TEXTURE27 = 0x84DB;
let GL_TEXTURE28 = 0x84DC;
let GL_TEXTURE29 = 0x84DD;
let GL_TEXTURE30 = 0x84DE;
let GL_TEXTURE31 = 0x84DF;
let GL_ACTIVE_TEXTURE = 0x84E0;
let GL_REPEAT = 0x2901;
let GL_CLAMP_TO_EDGE = 0x812F;
let GL_MIRRORED_REPEAT = 0x8370;

// uniform types
let GL_FLOAT_VEC2 = 0x8B50;
let GL_FLOAT_VEC3 = 0x8B51;
let GL_FLOAT_VEC4 = 0x8B52;
let GL_INT_VEC2 = 0x8B53;
let GL_INT_VEC3 = 0x8B54;
let GL_INT_VEC4 = 0x8B55;
let GL_BOOL = 0x8B56;
let GL_BOOL_VEC2 = 0x8B57;
let GL_BOOL_VEC3 = 0x8B58;
let GL_BOOL_VEC4 = 0x8B59;
let GL_FLOAT_MAT2 = 0x8B5A;
let GL_FLOAT_MAT3 = 0x8B5B;
let GL_FLOAT_MAT4 = 0x8B5C;
let GL_SAMPLER_2D = 0x8B5E;
let GL_SAMPLER_CUBE = 0x8B60;

// shader precision-specified types
let GL_LOW_FLOAT = 0x8DF0;
let GL_MEDIUM_FLOAT = 0x8DF1;
let GL_HIGH_FLOAT = 0x8DF2;
let GL_LOW_INT = 0x8DF3;
let GL_MEDIUM_INT = 0x8DF4;
let GL_HIGH_INT = 0x8DF5;

// framebuffers and renderbuffers
let GL_FRAMEBUFFER = 0x8D40;
let GL_RENDERBUFFER = 0x8D41;
let GL_RGBA4 = 0x8056;
let GL_RGB5_A1 = 0x8057;
let GL_RGB565 = 0x8D62;
let GL_DEPTH_COMPONENT16 = 0x81A5;
let GL_STENCIL_INDEX = 0x1901;
let GL_STENCIL_INDEX8 = 0x8D48;
let GL_DEPTH_STENCIL = 0x84F9;
let GL_RENDERBUFFER_WIDTH = 0x8D42;
let GL_RENDERBUFFER_HEIGHT = 0x8D43;
let GL_RENDERBUFFER_INTERNAL_FORMAT = 0x8D44;
let GL_RENDERBUFFER_RED_SIZE = 0x8D50;
let GL_RENDERBUFFER_GREEN_SIZE = 0x8D51;
let GL_RENDERBUFFER_BLUE_SIZE = 0x8D52;
let GL_RENDERBUFFER_ALPHA_SIZE = 0x8D53;
let GL_RENDERBUFFER_DEPTH_SIZE = 0x8D54;
let GL_RENDERBUFFER_STENCIL_SIZE = 0x8D55;
let GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8CD0;
let GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8CD1;
let GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8CD2;
let GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8CD3;
let GL_COLOR_ATTACHMENT0 = 0x8CE0;
let GL_DEPTH_ATTACHMENT = 0x8D00;
let GL_STENCIL_ATTACHMENT = 0x8D20;
let GL_DEPTH_STENCIL_ATTACHMENT = 0x821A;
let GL_NONE = 0;
let GL_FRAMEBUFFER_COMPLETE = 0x8CD5;
let GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8CD6;
let GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7;
let GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8CD9;
let GL_FRAMEBUFFER_UNSUPPORTED = 0x8CDD;
let GL_FRAMEBUFFER_BINDING = 0x8CA6;
let GL_RENDERBUFFER_BINDING = 0x8CA7;
let GL_MAX_RENDERBUFFER_SIZE = 0x84E8;
let GL_INVALID_FRAMEBUFFER_OPERATION = 0x0506;

// pixel storage modes
let GL_UNPACK_FLIP_Y_WEBGL = 0x9240;
let GL_UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
let GL_UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;

// https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext

// viewing and clipping
function glScissor(x, y, width, height) { return WebGL.gl.scissor(...arguments); };
function glViewport(x, y, width, height) { return WebGL.gl.viewport(...arguments); };

// state information
function glActiveTexture(texture) { return WebGL.gl.activeTexture(...arguments); };
function glBlendColor(red, green, blue, alpha) { return WebGL.gl.blendColor(...arguments); };
function glBlendEquation(mode) { return WebGL.gl.blendEquation(...arguments); };
function glBlendEquationSeparate(modeRGB, modeAlpha) { return WebGL.gl.blendEquationSeparate(...arguments); };
function glBlendFunc(sfactor, dfactor) { return WebGL.gl.blendFunc(...arguments); };
function glBlendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha) { return WebGL.gl.blendFuncSeparate(...arguments); };
function glClearColor(red, green, blue, alpha) { return WebGL.gl.clearColor(...arguments); };
function glClearDepth(depth) { return WebGL.gl.clearDepth(...arguments); };
function glClearStencil(s) { return WebGL.gl.clearStencil(...arguments); };
function glColorMask(red, green, blue, alpha) { return WebGL.gl.colorMask(...arguments); };
function glCullFace(mode) { return WebGL.gl.cullFace(...arguments); };
function glDepthFunc(func) { return WebGL.gl.depthFunc(...arguments); };
function glDepthMask(flag) { return WebGL.gl.depthMask(...arguments); };
function glDepthRange(zNear, zFar) { return WebGL.gl.depthRange(...arguments); };
function glDisable(cap) { return WebGL.gl.disable(...arguments); };
function glEnable(cap) { return WebGL.gl.enable(...arguments); };
function glFrontFace(mode) { return WebGL.gl.frontFace(...arguments); };
function glGetParameter(pname) { return WebGL.gl.getParameter(...arguments); };
function glGetError() { return WebGL.gl.getError(...arguments); };
function glHint(target, mode) { return WebGL.gl.hint(...arguments); };
function glIsEnabled(cap) { return WebGL.gl.isEnabled(...arguments); };
function glLineWidth(width) { return WebGL.gl.lineWidth(...arguments); };
function glPixelStorei(pname, param) { return WebGL.gl.pixelStorei(...arguments); };
function glPolygonOffset(factor, units) { return WebGL.gl.polygonOffset(...arguments); };
function glSampleCoverage(value, invert) { return WebGL.gl.sampleCoverage(...arguments); };
function glStencilFunc(func, ref, mask) { return WebGL.gl.stencilFunc(...arguments); };
function glStencilFuncSeparate(face, func, ref, mask) { return WebGL.gl.stencilFuncSeparate(...arguments); };
function glStencilMask(mask) { return WebGL.gl.stencilMask(...arguments); };
function glStencilMaskSeparate(face, mask) { return WebGL.gl.stencilMaskSeparate(...arguments); };
function glStencilOp(fail, zfail, zpass) { return WebGL.gl.stencilOp(...arguments); };
function glStencilOpSeparate(face, fail, zfail, zpass) { return WebGL.gl.stencilOpSeparate(...arguments); };

// buffers
function glBindBuffer(target, buffer) { return WebGL.gl.bindBuffer(...arguments); };
function glBufferData(target, size, usage) { return WebGL.gl.bufferData(...arguments); };
function glBufferData(target, srcData, usage) { return WebGL.gl.bufferData(...arguments); };
function glBufferSubData(target, offset, srcData) { return WebGL.gl.bufferSubData(...arguments); };
function glCreateBuffer() { return WebGL.gl.createBuffer(...arguments); };
function glDeleteBuffer(buffer) { return WebGL.gl.deleteBuffer(...arguments); };
function glGetBufferParameter(target, pname) { return WebGL.gl.getBufferParameter(...arguments); };
function glIsBuffer(buffer) { return WebGL.gl.isBuffer(...arguments); };

// framebuffers
function glBindFramebuffer(target, framebuffer) { return WebGL.gl.bindFramebuffer(...arguments); };
function glCheckFramebufferStatus(target) { return WebGL.gl.checkFramebufferStatus(...arguments); };
function glCreateFramebuffer() { return WebGL.gl.createFramebuffer(...arguments); };
function glDeleteFramebuffer(framebuffer) { return WebGL.gl.deleteFramebuffer(...arguments); };
function glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) { return WebGL.gl.framebufferRenderbuffer(...arguments); };
function glFramebufferTexture2D(target, attachment, textarget, texture, level) { return WebGL.gl.framebufferTexture2D(...arguments); };
function glGetFramebufferAttachmentParameter(target, attachment, pname) { return WebGL.gl.getFramebufferAttachmentParameter(...arguments); };
function glIsFramebuffer(framebuffer) { return WebGL.gl.isFramebuffer(...arguments); };
function glReadPixels(x, y, width, height, format, type, pixels) { return WebGL.gl.readPixels(...arguments); };

// renderbuffers
function glBindRenderbuffer(target, renderbuffer) { return WebGL.gl.bindRenderbuffer(...arguments); };
function glCreateRenderbuffer() { return WebGL.gl.createRenderbuffer(...arguments); };
function glDeleteRenderbuffer(renderbuffer) { return WebGL.gl.deleteRenderbuffer(...arguments); };
function glGetRenderbufferParameter(target, pname) { return WebGL.gl.getRenderbufferParameter(...arguments); };
function glIsRenderbuffer(renderbuffer) { return WebGL.gl.isRenderbuffer(...arguments); };
function glRenderbufferStorage(target, internalFormat, width, height) { return WebGL.gl.renderbufferStorage(...arguments); };

// textures
function glBindTexture(target, texture) { return WebGL.gl.bindTexture(...arguments); };
function glCompressedTexImage2D(target, level, internalformat, width, height, border, pixels) { return WebGL.gl.compressedTexImage2D(...arguments); };
function glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, pixels) { return WebGL.gl.compressedTexSubImage2D(...arguments); };
function glCopyTexImage2D(target, level, internalformat, x, y, width, height, border) { return WebGL.gl.copyTexImage2D(...arguments); };
function glCopyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height) { return WebGL.gl.copyTexSubImage2D(...arguments); };
function glCreateTexture() { return WebGL.gl.createTexture(...arguments); };
function glDeleteTexture(texture) { return WebGL.gl.deleteTexture(...arguments); };
function glGenerateMipmap(target) { return WebGL.gl.generateMipmap(...arguments); };
function glGetTexParameter(target, pname) { return WebGL.gl.getTexParameter(...arguments); };
function glIsTexture(texture) { return WebGL.gl.isTexture(...arguments); };
function glTexImage2D(target, level, internalformat, width, height, border, format, type, pixels) { return WebGL.gl.texImage2D(...arguments); };
function glTexImage2D(target, level, internalformat, format, type, pixels) { return WebGL.gl.texImage2D(...arguments); };
function glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) { return WebGL.gl.texSubImage2D(...arguments); };
function glTexSubImage2D(target, level, xoffset, yoffset, format, type, pixels) { return WebGL.gl.texSubImage2D(...arguments); };
function glTexParameterf(target, pname, param) { return WebGL.gl.texParameterf(...arguments); };
function glTexParameteri(target, pname, param) { return WebGL.gl.texParameteri(...arguments); };

// programs and shaders
function glAttachShader(program, shader) { return WebGL.gl.attachShader(...arguments); };
function glBindAttribLocation(program, index, name) { return WebGL.gl.bindAttribLocation(...arguments); };
function glCompileShader(shader) { return WebGL.gl.compileShader(...arguments); };
function glCreateProgram() { return WebGL.gl.createProgram(...arguments); };
function glCreateShader(type) { return WebGL.gl.createShader(...arguments); };
function glDeleteProgram(program) { return WebGL.gl.deleteProgram(...arguments); };
function glDeleteShader(shader) { return WebGL.gl.deleteShader(...arguments); };
function glDetachShader(program, shader) { return WebGL.gl.detachShader(...arguments); };
function glGetAttachedShaders(program) { return WebGL.gl.getAttachedShaders(...arguments); };
function glGetProgramParameter(program, pname) { return WebGL.gl.getProgramParameter(...arguments); };
function glGetProgramInfoLog(program) { return WebGL.gl.getProgramInfoLog(...arguments); };
function glGetShaderParameter(shader, pname) { return WebGL.gl.getShaderParameter(...arguments); };
function glGetShaderPrecisionFormat(shaderType, precisionType) { return WebGL.gl.getShaderPrecisionFormat(...arguments); };
function glGetShaderInfoLog(shader) { return WebGL.gl.getShaderInfoLog(...arguments); };
function glGetShaderSource(shader) { return WebGL.gl.getShaderSource(...arguments); };
function glIsProgram(program) { return WebGL.gl.isProgram(...arguments); };
function glIsShader(shader) { return WebGL.gl.isShader(...arguments); };
function glLinkProgram(program) { return WebGL.gl.linkProgram(...arguments); };
function glShaderSource(shader, source) { return WebGL.gl.shaderSource(...arguments); };
function glUseProgram(program) { return WebGL.gl.useProgram(...arguments); };
function glValidateProgram(program) { return WebGL.gl.validateProgram(...arguments); };

// uniforms and attributes
function glDisableVertexAttribArray(index) { return WebGL.gl.disableVertexAttribArray(...arguments); };
function glEnableVertexAttribArray(index) { return WebGL.gl.enableVertexAttribArray(...arguments); };
function glGetActiveAttrib(program, index) { return WebGL.gl.getActiveAttrib(...arguments); };
function glGetActiveUniform(program, index) { return WebGL.gl.getActiveUniform(...arguments); };
function glGetAttribLocation(program, name) { return WebGL.gl.getAttribLocation(...arguments); };
function glGetUniform(program, location) { return WebGL.gl.getUniform(...arguments); };
function glGetUniformLocation(program, name) { return WebGL.gl.getUniformLocation(...arguments); };
function glGetVertexAttrib(index, pname) { return WebGL.gl.getVertexAttrib(...arguments); };
function glGetVertexAttribOffset(index, pname) { return WebGL.gl.getVertexAttribOffset(...arguments); };
function glUniform1f(location, v0) { return WebGL.gl.uniform1f(...arguments); };
function glUniform2f(location, v0, v1) { return WebGL.gl.uniform2f(...arguments); };
function glUniform3f(location, v0, v1, v2) { return WebGL.gl.uniform3f(...arguments); };
function glUniform4f(location, v0, v1, v2, v3) { return WebGL.gl.uniform4f(...arguments); };
function glUniform1i(location, v0) { return WebGL.gl.uniform1i(...arguments); };
function glUniform2i(location, v0, v1) { return WebGL.gl.uniform2i(...arguments); };
function glUniform3i(location, v0, v1, v2) { return WebGL.gl.uniform3i(...arguments); };
function glUniform4i(location, v0, v1, v2, v3) { return WebGL.gl.uniform4i(...arguments); };
function glUniform1iv(location, value) { return WebGL.gl.uniform1iv(...arguments); };
function glUniform2iv(location, value) { return WebGL.gl.uniform2iv(...arguments); };
function glUniform3iv(location, value) { return WebGL.gl.uniform3iv(...arguments); };
function glUniform4iv(location, value) { return WebGL.gl.uniform4iv(...arguments); };
function glUniform1fv(location, value) { return WebGL.gl.uniform1fv(...arguments); };
function glUniform2fv(location, value) { return WebGL.gl.uniform2fv(...arguments); };
function glUniform3fv(location, value) { return WebGL.gl.uniform3fv(...arguments); };
function glUniform4fv(location, value) { return WebGL.gl.uniform4fv(...arguments); };
function glUniformMatrix2fv(location, transpose, value) { return WebGL.gl.uniformMatrix2fv(...arguments); };
function glUniformMatrix3fv(location, transpose, value) { return WebGL.gl.uniformMatrix3fv(...arguments); };
function glUniformMatrix4fv(location, transpose, value) { return WebGL.gl.uniformMatrix4fv(...arguments); };
function glVertexAttrib1f(index, v0) { return WebGL.gl.vertexAttrib1f(...arguments); };
function glVertexAttrib2f(index, v0, v1) { return WebGL.gl.vertexAttrib2f(...arguments); };
function glVertexAttrib3f(index, v0, v1, v2) { return WebGL.gl.vertexAttrib3f(...arguments); };
function glVertexAttrib4f(index, v0, v1, v2, v3) { return WebGL.gl.vertexAttrib4f(...arguments); };
function glVertexAttrib1fv(index, value) { return WebGL.gl.vertexAttrib1fv(...arguments); };
function glVertexAttrib2fv(index, value) { return WebGL.gl.vertexAttrib2fv(...arguments); };
function glVertexAttrib3fv(index, value) { return WebGL.gl.vertexAttrib3fv(...arguments); };
function glVertexAttrib4fv(index, value) { return WebGL.gl.vertexAttrib4fv(...arguments); };
function glVertexAttribPointer(index, size, type, normalized, stride, offset) { return WebGL.gl.vertexAttribPointer(...arguments); };

// drawing buffers
function glClear(mask) { return WebGL.gl.clear(...arguments); };
function glDrawArrays(mode, first, count) { return WebGL.gl.drawArrays(...arguments); };
function glDrawElements(mode, count, type, offset) { return WebGL.gl.drawElements(...arguments); };
function glFinish() { return WebGL.gl.finish(...arguments); };
function glFlush() { return WebGL.gl.flush(...arguments); };

// working with extensions
function glGetSupportedExtensions() { return WebGL.gl.getSupportedExtensions(...arguments); };
function glGetExtension(name) { return WebGL.gl.getExtension(...arguments); };

// https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Additional_constants_defined_WebGL_2

// getting gl parameter information
let GL_READ_BUFFER = 0x0C02;
let GL_UNPACK_ROW_LENGTH = 0x0CF2;
let GL_UNPACK_SKIP_ROWS = 0x0CF3;
let GL_UNPACK_SKIP_PIXELS = 0x0CF4;
let GL_PACK_ROW_LENGTH = 0x0D02;
let GL_PACK_SKIP_ROWS = 0x0D03;
let GL_PACK_SKIP_PIXELS = 0x0D04;
let GL_TEXTURE_BINDING_3D = 0x806A;
let GL_UNPACK_SKIP_IMAGES = 0x806D;
let GL_UNPACK_IMAGE_HEIGHT = 0x806E;
let GL_MAX_3D_TEXTURE_SIZE = 0x8073;
let GL_MAX_ELEMENTS_VERTICES = 0x80E8;
let GL_MAX_ELEMENTS_INDICES = 0x80E9;
let GL_MAX_TEXTURE_LOD_BIAS = 0x84FD;
let GL_MAX_FRAGMENT_UNIFORM_COMPONENTS = 0x8B49;
let GL_MAX_VERTEX_UNIFORM_COMPONENTS = 0x8B4A;
let GL_MAX_ARRAY_TEXTURE_LAYERS = 0x88FF;
let GL_MIN_PROGRAM_TEXEL_OFFSET = 0x8904;
let GL_MAX_PROGRAM_TEXEL_OFFSET = 0x8905;
let GL_MAX_VARYING_COMPONENTS = 0x8B4B;
let GL_FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8B8B;
let GL_RASTERIZER_DISCARD = 0x8C89;
let GL_VERTEX_ARRAY_BINDING = 0x85B5;
let GL_MAX_VERTEX_OUTPUT_COMPONENTS = 0x9122;
let GL_MAX_FRAGMENT_INPUT_COMPONENTS = 0x9125;
let GL_MAX_SERVER_WAIT_TIMEOUT = 0x9111;
let GL_MAX_ELEMENT_INDEX = 0x8D6B;

// textures
let GL_RED = 0x1903;
let GL_RGB8 = 0x8051;
let GL_RGBA8 = 0x8058;
let GL_RGB10_A2 = 0x8059;
let GL_TEXTURE_3D = 0x806F;
let GL_TEXTURE_WRAP_R = 0x8072;
let GL_TEXTURE_MIN_LOD = 0x813A;
let GL_TEXTURE_MAX_LOD = 0x813B;
let GL_TEXTURE_BASE_LEVEL = 0x813C;
let GL_TEXTURE_MAX_LEVEL = 0x813D;
let GL_TEXTURE_COMPARE_MODE = 0x884C;
let GL_TEXTURE_COMPARE_FUNC = 0x884D;
let GL_SRGB = 0x8C40;
let GL_SRGB8 = 0x8C41;
let GL_SRGB8_ALPHA8 = 0x8C43;
let GL_COMPARE_REF_TO_TEXTURE = 0x884E;
let GL_RGBA32F = 0x8814;
let GL_RGB32F = 0x8815;
let GL_RGBA16F = 0x881A;
let GL_RGB16F = 0x881B;
let GL_TEXTURE_2D_ARRAY = 0x8C1A;
let GL_TEXTURE_BINDING_2D_ARRAY = 0x8C1D;
let GL_R11F_G11F_B10F = 0x8C3A;
let GL_RGB9_E5 = 0x8C3D;
let GL_RGBA32UI = 0x8D70;
let GL_RGB32UI = 0x8D71;
let GL_RGBA16UI = 0x8D76;
let GL_RGB16UI = 0x8D77;
let GL_RGBA8UI = 0x8D7C;
let GL_RGB8UI = 0x8D7D;
let GL_RGBA32I = 0x8D82;
let GL_RGB32I = 0x8D83;
let GL_RGBA16I = 0x8D88;
let GL_RGB16I = 0x8D89;
let GL_RGBA8I = 0x8D8E;
let GL_RGB8I = 0x8D8F;
let GL_RED_INTEGER = 0x8D94;
let GL_RGB_INTEGER = 0x8D98;
let GL_RGBA_INTEGER = 0x8D99;
let GL_R8 = 0x8229;
let GL_RG8 = 0x822B;
let GL_R16F = 0x822D;
let GL_R32F = 0x822E;
let GL_RG16F = 0x822F;
let GL_RG32F = 0x8230;
let GL_R8I = 0x8231;
let GL_R8UI = 0x8232;
let GL_R16I = 0x8233;
let GL_R16UI = 0x8234;
let GL_R32I = 0x8235;
let GL_R32UI = 0x8236;
let GL_RG8I = 0x8237;
let GL_RG8UI = 0x8238;
let GL_RG16I = 0x8239;
let GL_RG16UI = 0x823A;
let GL_RG32I = 0x823B;
let GL_RG32UI = 0x823C;
let GL_R8_SNORM = 0x8F94;
let GL_RG8_SNORM = 0x8F95;
let GL_RGB8_SNORM = 0x8F96;
let GL_RGBA8_SNORM = 0x8F97;
let GL_RGB10_A2UI = 0x906F;
let GL_TEXTURE_IMMUTABLE_FORMAT = 0x912F;
let GL_TEXTURE_IMMUTABLE_LEVELS = 0x82DF;

// pixel types
let GL_UNSIGNED_INT_2_10_10_10_REV = 0x8368;
let GL_UNSIGNED_INT_10F_11F_11F_REV = 0x8C3B;
let GL_UNSIGNED_INT_5_9_9_9_REV = 0x8C3E;
let GL_FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8DAD;
let GL_UNSIGNED_INT_24_8 = 0x84FA;
let GL_HALF_FLOAT = 0x140B;
let GL_RG = 0x8227;
let GL_RG_INTEGER = 0x8228;
let GL_INT_2_10_10_10_REV = 0x8D9F;

// queries
let GL_CURRENT_QUERY = 0x8865;
let GL_QUERY_RESULT = 0x8866;
let GL_QUERY_RESULT_AVAILABLE = 0x8867;
let GL_ANY_SAMPLES_PASSED = 0x8C2F;
let GL_ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8D6A;

// draw buffers
let GL_MAX_DRAW_BUFFERS = 0x8824;
let GL_DRAW_BUFFER0 = 0x8825;
let GL_DRAW_BUFFER1 = 0x8826;
let GL_DRAW_BUFFER2 = 0x8827;
let GL_DRAW_BUFFER3 = 0x8828;
let GL_DRAW_BUFFER4 = 0x8829;
let GL_DRAW_BUFFER5 = 0x882A;
let GL_DRAW_BUFFER6 = 0x882B;
let GL_DRAW_BUFFER7 = 0x882C;
let GL_DRAW_BUFFER8 = 0x882D;
let GL_DRAW_BUFFER9 = 0x882E;
let GL_DRAW_BUFFER10 = 0x882F;
let GL_DRAW_BUFFER11 = 0x8830;
let GL_DRAW_BUFFER12 = 0x8831;
let GL_DRAW_BUFFER13 = 0x8832;
let GL_DRAW_BUFFER14 = 0x8833;
let GL_DRAW_BUFFER15 = 0x8834;
let GL_MAX_COLOR_ATTACHMENTS = 0x8CDF;
let GL_COLOR_ATTACHMENT1 = 0x8CE1;
let GL_COLOR_ATTACHMENT2 = 0x8CE2;
let GL_COLOR_ATTACHMENT3 = 0x8CE3;
let GL_COLOR_ATTACHMENT4 = 0x8CE4;
let GL_COLOR_ATTACHMENT5 = 0x8CE5;
let GL_COLOR_ATTACHMENT6 = 0x8CE6;
let GL_COLOR_ATTACHMENT7 = 0x8CE7;
let GL_COLOR_ATTACHMENT8 = 0x8CE8;
let GL_COLOR_ATTACHMENT9 = 0x8CE9;
let GL_COLOR_ATTACHMENT10 = 0x8CEA;
let GL_COLOR_ATTACHMENT11 = 0x8CEB;
let GL_COLOR_ATTACHMENT12 = 0x8CEC;
let GL_COLOR_ATTACHMENT13 = 0x8CED;
let GL_COLOR_ATTACHMENT14 = 0x8CEE;
let GL_COLOR_ATTACHMENT15 = 0x8CEF;

// samplers
let GL_SAMPLER_3D = 0x8B5F;
let GL_SAMPLER_2D_SHADOW = 0x8B62;
let GL_SAMPLER_2D_ARRAY = 0x8DC1;
let GL_SAMPLER_2D_ARRAY_SHADOW = 0x8DC4;
let GL_SAMPLER_CUBE_SHADOW = 0x8DC5;
let GL_INT_SAMPLER_2D = 0x8DCA;
let GL_INT_SAMPLER_3D = 0x8DCB;
let GL_INT_SAMPLER_CUBE = 0x8DCC;
let GL_INT_SAMPLER_2D_ARRAY = 0x8DCF;
let GL_UNSIGNED_INT_SAMPLER_2D = 0x8DD2;
let GL_UNSIGNED_INT_SAMPLER_3D = 0x8DD3;
let GL_UNSIGNED_INT_SAMPLER_CUBE = 0x8DD4;
let GL_UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8DD7;
let GL_MAX_SAMPLES = 0x8D57;
let GL_SAMPLER_BINDING = 0x8919;

// buffers
let GL_PIXEL_PACK_BUFFER = 0x88EB;
let GL_PIXEL_UNPACK_BUFFER = 0x88EC;
let GL_PIXEL_PACK_BUFFER_BINDING = 0x88ED;
let GL_PIXEL_UNPACK_BUFFER_BINDING = 0x88EF;
let GL_COPY_READ_BUFFER = 0x8F36;
let GL_COPY_WRITE_BUFFER = 0x8F37;
let GL_COPY_READ_BUFFER_BINDING = 0x8F36;
let GL_COPY_WRITE_BUFFER_BINDING = 0x8F37;

// data types
let GL_FLOAT_MAT2x3 = 0x8B65;
let GL_FLOAT_MAT2x4 = 0x8B66;
let GL_FLOAT_MAT3x2 = 0x8B67;
let GL_FLOAT_MAT3x4 = 0x8B68;
let GL_FLOAT_MAT4x2 = 0x8B69;
let GL_FLOAT_MAT4x3 = 0x8B6A;
let GL_UNSIGNED_INT_VEC2 = 0x8DC6;
let GL_UNSIGNED_INT_VEC3 = 0x8DC7;
let GL_UNSIGNED_INT_VEC4 = 0x8DC8;
let GL_UNSIGNED_NORMALIZED = 0x8C17;
let GL_SIGNED_NORMALIZED = 0x8F9C;

// vertex attributes
let GL_VERTEX_ATTRIB_ARRAY_INTEGER = 0x88FD;
let GL_VERTEX_ATTRIB_ARRAY_DIVISOR = 0x88FE;

// transform feedback
let GL_TRANSFORM_FEEDBACK_BUFFER_MODE = 0x8C7F;
let GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 0x8C80;
let GL_TRANSFORM_FEEDBACK_VARYINGS = 0x8C83;
let GL_TRANSFORM_FEEDBACK_BUFFER_START = 0x8C84;
let GL_TRANSFORM_FEEDBACK_BUFFER_SIZE = 0x8C85;
let GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 0x8C88;
let GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 0x8C8A;
let GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 0x8C8B;
let GL_INTERLEAVED_ATTRIBS = 0x8C8C;
let GL_SEPARATE_ATTRIBS = 0x8C8D;
let GL_TRANSFORM_FEEDBACK_BUFFER = 0x8C8E;
let GL_TRANSFORM_FEEDBACK_BUFFER_BINDING = 0x8C8F;
let GL_TRANSFORM_FEEDBACK = 0x8E22;
let GL_TRANSFORM_FEEDBACK_PAUSED = 0x8E23;
let GL_TRANSFORM_FEEDBACK_ACTIVE = 0x8E24;
let GL_TRANSFORM_FEEDBACK_BINDING = 0x8E25;

// framebuffers and renderbuffers
let GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 0x8210;
let GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 0x8211;
let GL_FRAMEBUFFER_ATTACHMENT_RED_SIZE = 0x8212;
let GL_FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 0x8213;
let GL_FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 0x8214;
let GL_FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 0x8215;
let GL_FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 0x8216;
let GL_FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 0x8217;
let GL_FRAMEBUFFER_DEFAULT = 0x8218;
let GL_DEPTH24_STENCIL8 = 0x88F0;
let GL_DRAW_FRAMEBUFFER_BINDING = 0x8CA6;
let GL_READ_FRAMEBUFFER = 0x8CA8;
let GL_DRAW_FRAMEBUFFER = 0x8CA9;
let GL_READ_FRAMEBUFFER_BINDING = 0x8CAA;
let GL_RENDERBUFFER_SAMPLES = 0x8CAB;
let GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 0x8CD4;
let GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 0x8D56;

// uniforms
let GL_UNIFORM_BUFFER = 0x8A11;
let GL_UNIFORM_BUFFER_BINDING = 0x8A28;
let GL_UNIFORM_BUFFER_START = 0x8A29;
let GL_UNIFORM_BUFFER_SIZE = 0x8A2A;
let GL_MAX_VERTEX_UNIFORM_BLOCKS = 0x8A2B;
let GL_MAX_FRAGMENT_UNIFORM_BLOCKS = 0x8A2D;
let GL_MAX_COMBINED_UNIFORM_BLOCKS = 0x8A2E;
let GL_MAX_UNIFORM_BUFFER_BINDINGS = 0x8A2F;
let GL_MAX_UNIFORM_BLOCK_SIZE = 0x8A30;
let GL_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 0x8A31;
let GL_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 0x8A33;
let GL_UNIFORM_BUFFER_OFFSET_ALIGNMENT = 0x8A34;
let GL_ACTIVE_UNIFORM_BLOCKS = 0x8A36;
let GL_UNIFORM_TYPE = 0x8A37;
let GL_UNIFORM_SIZE = 0x8A38;
let GL_UNIFORM_BLOCK_INDEX = 0x8A3A;
let GL_UNIFORM_OFFSET = 0x8A3B;
let GL_UNIFORM_ARRAY_STRIDE = 0x8A3C;
let GL_UNIFORM_MATRIX_STRIDE = 0x8A3D;
let GL_UNIFORM_IS_ROW_MAJOR = 0x8A3E;
let GL_UNIFORM_BLOCK_BINDING = 0x8A3F;
let GL_UNIFORM_BLOCK_DATA_SIZE = 0x8A40;
let GL_UNIFORM_BLOCK_ACTIVE_UNIFORMS = 0x8A42;
let GL_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8A43;
let GL_UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8A44;
let GL_UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8A46;

// sync objects
let GL_OBJECT_TYPE = 0x9112;
let GL_SYNC_CONDITION = 0x9113;
let GL_SYNC_STATUS = 0x9114;
let GL_SYNC_FLAGS = 0x9115;
let GL_SYNC_FENCE = 0x9116;
let GL_SYNC_GPU_COMMANDS_COMPLETE = 0x9117;
let GL_UNSIGNALED = 0x9118;
let GL_SIGNALED = 0x9119;
let GL_ALREADY_SIGNALED = 0x911A;
let GL_TIMEOUT_EXPIRED = 0x911B;
let GL_CONDITION_SATISFIED = 0x911C;
let GL_WAIT_FAILED = 0x911D;
let GL_SYNC_FLUSH_COMMANDS_BIT = 0x00000001;

// miscellanious constants
let GL_COLOR = 0x1800;
let GL_DEPTH = 0x1801;
let GL_STENCIL = 0x1802;
let GL_MIN = 0x8007;
let GL_MAX = 0x8008;
let GL_DEPTH_COMPONENT24 = 0x81A6;
let GL_STREAM_READ = 0x88E1;
let GL_STREAM_COPY = 0x88E2;
let GL_STATIC_READ = 0x88E5;
let GL_STATIC_COPY = 0x88E6;
let GL_DYNAMIC_READ = 0x88E9;
let GL_DYNAMIC_COPY = 0x88EA;
let GL_DEPTH_COMPONENT32F = 0x8CAC;
let GL_DEPTH32F_STENCIL8 = 0x8CAD;
let GL_INVALID_INDEX = 0xFFFFFFFF;
let GL_TIMEOUT_IGNORED = -1;
let GL_MAX_CLIENT_WAIT_TIMEOUT_WEBGL = 0x9247;

// https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext

// state information
function glGetIndexedParameter(target, index) { return WebGL.gl.getIndexedParameter(...arguments); };

// buffers
function glBufferData(target, srcData, usage, srcOffset, length) { return WebGL.gl.bufferData(...arguments); };
function glBufferSubData(target, dstByteOffset, srcData, srcOffset, length) { return WebGL.gl.bufferSubData(...arguments); };
function glCopyBufferSubData(readTarget, writeTarget, readOffset, writeOffset, size) { return WebGL.gl.copyBufferSubData(...arguments); };
function glGetBufferSubData(target, srcByteOffset, dstData, dstOffset, length) { return WebGL.gl.getBufferSubData(...arguments); };

// framebuffers
function glBlitFramebuffer(srcX0, srcY0, srcX1, srcY1, dstX0, dstY0, dstX1, dstY1, mask, filter) { return WebGL.gl.blitFramebuffer(...arguments); };
function glFramebufferTextureLayer(target, attachment, texture, level, layer) { return WebGL.gl.framebufferTextureLayer(...arguments); };
function glInvalidateFramebuffer(target, attachments) { return WebGL.gl.invalidateFramebuffer(...arguments); };
function glInvalidateSubFramebuffer(target, attachments, x, y, width, height) { return WebGL.gl.invalidateSubFramebuffer(...arguments); };
function glReadBuffer(src) { return WebGL.gl.readBuffer(...arguments); };
function glReadPixels(x, y, width, height, format, type, offset) { return WebGL.gl.readPixels(...arguments); };
function glReadPixels(x, y, width, height, format, type, pixels, dstOffset) { return WebGL.gl.readPixels(...arguments); };

// renderbuffers
function glGetInternalformatParameter(target, internalformat, pname) { return WebGL.gl.getInternalformatParameter(...arguments); };
function glRenderbufferStorageMultisample(target, samples, internalFormat, width, height) { return WebGL.gl.renderbufferStorageMultisample(...arguments); };

// textures
function glTexStorage2D(target, levels, internalformat, width, height) { return WebGL.gl.texStorage2D(...arguments); };
function glTexStorage3D(target, levels, internalformat, width, height, depth) { return WebGL.gl.texStorage3D(...arguments); };
function glTexImage2D(target, level, internalformat, width, height, border, format, type, offset) { return WebGL.gl.texImage2D(...arguments); };
function glTexImage2D(target, level, internalformat, width, height, border, format, type, source) { return WebGL.gl.texImage2D(...arguments); };
function glTexImage2D(target, level, internalformat, width, height, border, format, type, srcData, srcOffset) { return WebGL.gl.texImage2D(...arguments); };
function glTexImage3D(target, level, internalformat, width, height, depth, border, format, type, offset) { return WebGL.gl.texImage3D(...arguments); };
function glTexImage3D(target, level, internalformat, width, height, depth, border, format, type, source) { return WebGL.gl.texImage3D(...arguments); };
function glTexImage3D(target, level, internalformat, width, height, depth, border, format, type, srcData, srcOffset) { return WebGL.gl.texImage3D(...arguments); };
function glTexSubImage2D(target, level, xoffset, yoffset, format, type, offset) { return WebGL.gl.texSubImage2D(...arguments); };
function glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, source) { return WebGL.gl.texSubImage2D(...arguments); };
function glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, srcData, srcOffset) { return WebGL.gl.texSubImage2D(...arguments); };
function glTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, offset) { return WebGL.gl.texSubImage3D(...arguments); };
function glTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, source) { return WebGL.gl.texSubImage3D(...arguments); };
function glTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData, srcOffset) { return WebGL.gl.texSubImage3D(...arguments); };
function glCopyTexSubImage3D(target, level, xoffset, yoffset, zoffset, x, y, width, height) { return WebGL.gl.copyTexSubImage3D(...arguments); };
function glCompressedTexImage2D(target, level, internalformat, width, height, border, imageSize, offset) { return WebGL.gl.compressedTexImage2D(...arguments); };
function glCompressedTexImage2D(target, level, internalformat, width, height, border, srcData, srcOffset, srcLengthOverride) { return WebGL.gl.compressedTexImage2D(...arguments); };
function glCompressedTexImage3D(target, level, internalformat, width, height, depth, border, imageSize, offset) { return WebGL.gl.compressedTexImage3D(...arguments); };
function glCompressedTexImage3D(target, level, internalformat, width, height, depth, border, srcData, srcOffset, srcLengthOverride) { return WebGL.gl.compressedTexImage3D(...arguments); };
function glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, offset) { return WebGL.gl.compressedTexSubImage2D(...arguments); };
function glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, srcData, srcOffset, srcLengthOverride) { return WebGL.gl.compressedTexSubImage2D(...arguments); };
function glCompressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, offset) { return WebGL.gl.compressedTexSubImage3D(...arguments); };
function glCompressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, srcData, srcOffset, srcLengthOverride) { return WebGL.gl.compressedTexSubImage3D(...arguments); };

// programs and shaders
function glGetFragDataLocation(program, name) { return WebGL.gl.getFragDataLocation(...arguments); };

// uniforms and attributes
function glUniform1ui(location, v0) { return WebGL.gl.uniform1ui(...arguments); };
function glUniform2ui(location, v0, v1) { return WebGL.gl.uniform2ui(...arguments); };
function glUniform3ui(location, v0, v1, v2) { return WebGL.gl.uniform3ui(...arguments); };
function glUniform4ui(location, v0, v1, v2, v3) { return WebGL.gl.uniform4ui(...arguments); };
function glUniform1fv(location, data, srcOffset, srcLength) { return WebGL.gl.uniform1fv(...arguments); };
function glUniform2fv(location, data, srcOffset, srcLength) { return WebGL.gl.uniform2fv(...arguments); };
function glUniform3fv(location, data, srcOffset, srcLength) { return WebGL.gl.uniform3fv(...arguments); };
function glUniform4fv(location, data, srcOffset, srcLength) { return WebGL.gl.uniform4fv(...arguments); };
function glUniform1iv(location, data, srcOffset, srcLength) { return WebGL.gl.uniform1iv(...arguments); };
function glUniform2iv(location, data, srcOffset, srcLength) { return WebGL.gl.uniform2iv(...arguments); };
function glUniform3iv(location, data, srcOffset, srcLength) { return WebGL.gl.uniform3iv(...arguments); };
function glUniform4iv(location, data, srcOffset, srcLength) { return WebGL.gl.uniform4iv(...arguments); };
function glUniform1uiv(location, data, srcOffset, srcLength) { return WebGL.gl.uniform1uiv(...arguments); };
function glUniform2uiv(location, data, srcOffset, srcLength) { return WebGL.gl.uniform2uiv(...arguments); };
function glUniform3uiv(location, data, srcOffset, srcLength) { return WebGL.gl.uniform3uiv(...arguments); };
function glUniform4uiv(location, data, srcOffset, srcLength) { return WebGL.gl.uniform4uiv(...arguments); };
function glUniformMatrix2fv(location, transpose, data, srcOffset, srcLength) { return WebGL.gl.uniformMatrix2fv(...arguments); };
function glUniformMatrix3fv(location, transpose, data, srcOffset, srcLength) { return WebGL.gl.uniformMatrix3fv(...arguments); };
function glUniformMatrix4fv(location, transpose, data, srcOffset, srcLength) { return WebGL.gl.uniformMatrix4fv(...arguments); };
function glUniformMatrix2x3fv(location, transpose, data, srcOffset, srcLength) { return WebGL.gl.uniformMatrix2x3fv(...arguments); };
function glUniformMatrix2x4fv(location, transpose, data, srcOffset, srcLength) { return WebGL.gl.uniformMatrix2x4fv(...arguments); };
function glUniformMatrix3x2fv(location, transpose, data, srcOffset, srcLength) { return WebGL.gl.uniformMatrix3x2fv(...arguments); };
function glUniformMatrix3x4fv(location, transpose, data, srcOffset, srcLength) { return WebGL.gl.uniformMatrix3x4fv(...arguments); };
function glUniformMatrix4x2fv(location, transpose, data, srcOffset, srcLength) { return WebGL.gl.uniformMatrix4x2fv(...arguments); };
function glUniformMatrix4x3fv(location, transpose, data, srcOffset, srcLength) { return WebGL.gl.uniformMatrix4x3fv(...arguments); };
function glVertexAttribI4i(index, v0, v1, v2, v3) { return WebGL.gl.vertexAttribI4i(...arguments); };
function glVertexAttribI4ui(index, v0, v1, v2, v3) { return WebGL.gl.vertexAttribI4ui(...arguments); };
function glVertexAttribI4iv(index, value) { return WebGL.gl.vertexAttribI4iv(...arguments); };
function glVertexAttribI4uiv(index, value) { return WebGL.gl.vertexAttribI4uiv(...arguments); };
function glVertexAttribIPointer(index, size, type, stride, offset) { return WebGL.gl.vertexAttribIPointer(...arguments); };

// drawing buffers
function glVertexAttribDivisor(index, divisor) { return WebGL.gl.vertexAttribDivisor(...arguments); };
function glDrawArraysInstanced(mode, first, count, instanceCount) { return WebGL.gl.drawArraysInstanced(...arguments); };
function glDrawElementsInstanced(mode, count, type, offset, instanceCount) { return WebGL.gl.drawElementsInstanced(...arguments); };
function glDrawRangeElements(mode, start, end, count, type, offset) { return WebGL.gl.drawRangeElements(...arguments); };
function glDrawBuffers(buffers) { return WebGL.gl.drawBuffers(...arguments); };
function glClearBufferfv(buffer, drawbuffer, values, srcOffset) { return WebGL.gl.clearBufferfv(...arguments); };
function glClearBufferiv(buffer, drawbuffer, values, srcOffset) { return WebGL.gl.clearBufferiv(...arguments); };
function glClearBufferuiv(buffer, drawbuffer, values, srcOffset) { return WebGL.gl.clearBufferuiv(...arguments); };
function glClearBufferfi(buffer, drawbuffer, depth, stencil) { return WebGL.gl.clearBufferfi(...arguments); };

// query objects
function glCreateQuery() { return WebGL.gl.createQuery(...arguments); };
function glDeleteQuery(query) { return WebGL.gl.deleteQuery(...arguments); };
function glIsQuery(query) { return WebGL.gl.isQuery(...arguments); };
function glBeginQuery(target, query) { return WebGL.gl.beginQuery(...arguments); };
function glEndQuery(target) { return WebGL.gl.endQuery(...arguments); };
function glGetQuery(target, pname) { return WebGL.gl.getQuery(...arguments); };
function glGetQueryParameter(query, pname) { return WebGL.gl.getQueryParameter(...arguments); };

// sampler objects
function glCreateSampler() { return WebGL.gl.createSampler(...arguments); };
function glDeleteSampler(sampler) { return WebGL.gl.deleteSampler(...arguments); };
function glBindSampler(unit, sampler) { return WebGL.gl.bindSampler(...arguments); };
function glIsSampler(sampler) { return WebGL.gl.isSampler(...arguments); };
function glSamplerParameteri(sampler, pname, param) { return WebGL.gl.samplerParameteri(...arguments); };
function glSamplerParameterf(sampler, pname, param) { return WebGL.gl.samplerParameterf(...arguments); };
function glGetSamplerParameter(sampler, pname) { return WebGL.gl.getSamplerParameter(...arguments); };

// sync objects
function glFenceSync(condition, flags) { return WebGL.gl.fenceSync(...arguments); };
function glIsSync(sync) { return WebGL.gl.isSync(...arguments); };
function glDeleteSync(sync) { return WebGL.gl.deleteSync(...arguments); };
function glClientWaitSync(sync, flags, timeout) { return WebGL.gl.clientWaitSync(...arguments); };
function glWaitSync(sync, flags, timeout) { return WebGL.gl.waitSync(...arguments); };
function glGetSyncParameter(sync, pname) { return WebGL.gl.getSyncParameter(...arguments); };

// transform feedback
function glCreateTransformFeedback() { return WebGL.gl.createTransformFeedback(...arguments); };
function glDeleteTransformFeedback(transformFeedback) { return WebGL.gl.deleteTransformFeedback(...arguments); };
function glIsTransformFeedback(transformFeedback) { return WebGL.gl.isTransformFeedback(...arguments); };
function glBindTransformFeedback(target, transformFeedback) { return WebGL.gl.bindTransformFeedback(...arguments); };
function glBeginTransformFeedback(primitiveMode) { return WebGL.gl.beginTransformFeedback(...arguments); };
function glEndTransformFeedback() { return WebGL.gl.endTransformFeedback(...arguments); };
function glTransformFeedbackVaryings(program, varyings, bufferMode) { return WebGL.gl.transformFeedbackVaryings(...arguments); };
function glGetTransformFeedbackVarying(program, index) { return WebGL.gl.getTransformFeedbackVarying(...arguments); };
function glPauseTransformFeedback() { return WebGL.gl.pauseTransformFeedback(...arguments); };
function glResumeTransformFeedback() { return WebGL.gl.resumeTransformFeedback(...arguments); };

// uniform buffer objects
function glBindBufferBase(target, index, buffer) { return WebGL.gl.bindBufferBase(...arguments); };
function glBindBufferRange(target, index, buffer, offset, size) { return WebGL.gl.bindBufferRange(...arguments); };
function glGetUniformIndices(program, uniformNames) { return WebGL.gl.getUniformIndices(...arguments); };
function glGetActiveUniforms(program, uniformIndices, pname) { return WebGL.gl.getActiveUniforms(...arguments); };
function glGetUniformBlockIndex(program, uniformBlockName) { return WebGL.gl.getUniformBlockIndex(...arguments); };
function glGetActiveUniformBlockParameter(program, uniformBlockIndex, pname) { return WebGL.gl.getActiveUniformBlockParameter(...arguments); };
function glGetActiveUniformBlockName(program, uniformBlockIndex) { return WebGL.gl.getActiveUniformBlockName(...arguments); };
function glUniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding) { return WebGL.gl.uniformBlockBinding(...arguments); };

// vertex array objects
function glCreateVertexArray() { return WebGL.gl.createVertexArray(...arguments); };
function glDeleteVertexArray(vertexArray) { return WebGL.gl.deleteVertexArray(...arguments); };
function glIsVertexArray(vertexArray) { return WebGL.gl.isVertexArray(...arguments); };
function glBindVertexArray(vertexArray) { return WebGL.gl.bindVertexArray(...arguments); };

/**************************************************************************************************/