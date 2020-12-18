/** Dependencies **********************************************************************************/
/// <reference path="float4.js" />
/** Declarations **********************************************************************************/

// float 4x4 class
class float4x4 extends Float32Array
{
    constructor(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)
    {
        super([ a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p ]);
    };
};

// float 4x4 getters & setters
Object.defineProperties(float4x4.prototype,{
    // 1x parameter swizzle
    "x0":{get(){return this[0x0];},set(v){this[0x0]=v;}},
    "x1":{get(){return this[0x1];},set(v){this[0x1]=v;}},
    "x2":{get(){return this[0x2];},set(v){this[0x2]=v;}},
    "x3":{get(){return this[0x3];},set(v){this[0x3]=v;}},
    "y0":{get(){return this[0x4];},set(v){this[0x4]=v;}},
    "y1":{get(){return this[0x5];},set(v){this[0x5]=v;}},
    "y2":{get(){return this[0x6];},set(v){this[0x6]=v;}},
    "y3":{get(){return this[0x7];},set(v){this[0x7]=v;}},
    "z0":{get(){return this[0x8];},set(v){this[0x8]=v;}},
    "z1":{get(){return this[0x9];},set(v){this[0x9]=v;}},
    "z2":{get(){return this[0xa];},set(v){this[0xa]=v;}},
    "z3":{get(){return this[0xb];},set(v){this[0xb]=v;}},
    "w0":{get(){return this[0xc];},set(v){this[0xc]=v;}},
    "w1":{get(){return this[0xd];},set(v){this[0xd]=v;}},
    "w2":{get(){return this[0xe];},set(v){this[0xe]=v;}},
    "w3":{get(){return this[0xf];},set(v){this[0xf]=v;}},
    // col parameter swizzle
    "c0":{get(){return new float4(this.x0,this.y0,this.z0,this.w0);},set(v){this.x0=v.x;this.y0=v.y;this.z0=v.z;this.w0=v.w;}},
    "c1":{get(){return new float4(this.x1,this.y1,this.z1,this.w1);},set(v){this.x1=v.x;this.y1=v.y;this.z1=v.z;this.w1=v.w;}},
    "c2":{get(){return new float4(this.x2,this.y2,this.z2,this.w2);},set(v){this.x2=v.x;this.y2=v.y;this.z2=v.z;this.w2=v.w;}},
    "c3":{get(){return new float4(this.x3,this.y3,this.z3,this.w3);},set(v){this.x3=v.x;this.y3=v.y;this.z3=v.z;this.w3=v.w;}},
    // row parameter swizzle
    "r0":{get(){return new float4(this.x0,this.x1,this.x2,this.x3);},set(v){this.x0=v.x;this.x1=v.y;this.x2=v.z;this.x3=v.w;}},
    "r1":{get(){return new float4(this.y0,this.y1,this.y2,this.y3);},set(v){this.y0=v.x;this.y1=v.y;this.y2=v.z;this.y3=v.w;}},
    "r2":{get(){return new float4(this.z0,this.z1,this.z2,this.z3);},set(v){this.z0=v.x;this.z1=v.y;this.z2=v.z;this.z3=v.w;}},
    "r3":{get(){return new float4(this.w0,this.w1,this.w2,this.w3);},set(v){this.w0=v.x;this.w1=v.y;this.w2=v.z;this.w3=v.w;}},
});

/**************************************************************************************************/