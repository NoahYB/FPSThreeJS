var ps=Object.defineProperty;var ds=(Q,A,I)=>A in Q?ps(Q,A,{enumerable:!0,configurable:!0,writable:!0,value:I}):Q[A]=I;var HE=(Q,A,I)=>(ds(Q,typeof A!="symbol"?A+"":A,I),I);import"./modulepreload-polyfill-3cfb730f.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $i="153",Ls=0,bo=1,Ys=2,ve=1,Ze=2,Zg=3,_g=0,$I=1,og=2,eC=0,DB=1,vo=2,Zo=3,Po=4,fs=5,eB=100,us=101,Hs=102,Wo=103,jo=104,ms=200,Ts=201,xs=202,Os=203,Pe=204,We=205,bs=206,vs=207,Zs=208,Ps=209,Ws=210,js=0,Vs=1,_s=2,Ji=3,Xs=4,zs=5,$s=6,AD=7,rE=0,ID=1,gD=2,Vg=0,CD=1,BD=2,QD=3,ED=4,iD=5,je=300,wB=301,GB=302,XQ=303,Fi=304,cE=306,DC=1e3,XI=1001,zQ=1002,LI=1003,Ri=1004,vQ=1005,_I=1006,Ve=1007,HC=1008,aC=1009,oD=1010,tD=1011,Ao=1012,_e=1013,oC=1014,Pg=1015,VB=1016,Xe=1017,ze=1018,LC=1020,eD=1021,tg=1023,aD=1024,sD=1025,YC=1026,SB=1027,DD=1028,$e=1029,nD=1030,Aa=1031,Ia=1033,mE=33776,TE=33777,xE=33778,OE=33779,Vo=35840,_o=35841,Xo=35842,zo=35843,hD=36196,$o=37492,At=37496,It=37808,gt=37809,Ct=37810,Bt=37811,Qt=37812,Et=37813,it=37814,ot=37815,tt=37816,et=37817,at=37818,st=37819,Dt=37820,nt=37821,bE=36492,rD=36283,ht=36284,rt=36285,ct=36286,_B=2300,kB=2301,vE=2302,wt=2400,Gt=2401,St=2402,cD=2500,wD=0,ga=1,qi=2,Ca=3e3,fC=3001,GD=3200,SD=3201,oQ=0,kD=1,uC="",NA="srgb",qg="srgb-linear",Ba="display-p3",ZE=7680,lD=519,yD=512,MD=513,UD=514,ND=515,KD=516,JD=517,FD=518,RD=519,pi=35044,kt="300 es",di=1035,Wg=2e3,$Q=2001;class xC{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const C=this._listeners[A];if(C!==void 0){const B=C.indexOf(I);B!==-1&&C.splice(B,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const C=g.slice(0);for(let B=0,E=C.length;B<E;B++)C[B].call(this,A);A.target=null}}}const mI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lt=1234567;const vB=Math.PI/180,lB=180/Math.PI;function Mg(){const Q=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(mI[Q&255]+mI[Q>>8&255]+mI[Q>>16&255]+mI[Q>>24&255]+"-"+mI[A&255]+mI[A>>8&255]+"-"+mI[A>>16&15|64]+mI[A>>24&255]+"-"+mI[I&63|128]+mI[I>>8&255]+"-"+mI[I>>16&255]+mI[I>>24&255]+mI[g&255]+mI[g>>8&255]+mI[g>>16&255]+mI[g>>24&255]).toLowerCase()}function YI(Q,A,I){return Math.max(A,Math.min(I,Q))}function Io(Q,A){return(Q%A+A)%A}function qD(Q,A,I,g,C){return g+(Q-A)*(C-g)/(I-A)}function pD(Q,A,I){return Q!==A?(I-Q)/(A-Q):0}function ZB(Q,A,I){return(1-I)*Q+I*A}function dD(Q,A,I,g){return ZB(Q,A,1-Math.exp(-I*g))}function LD(Q,A=1){return A-Math.abs(Io(Q,A*2)-A)}function YD(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*(3-2*Q))}function fD(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*Q*(Q*(Q*6-15)+10))}function uD(Q,A){return Q+Math.floor(Math.random()*(A-Q+1))}function HD(Q,A){return Q+Math.random()*(A-Q)}function mD(Q){return Q*(.5-Math.random())}function TD(Q){Q!==void 0&&(lt=Q);let A=lt+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function xD(Q){return Q*vB}function OD(Q){return Q*lB}function Li(Q){return(Q&Q-1)===0&&Q!==0}function Qa(Q){return Math.pow(2,Math.ceil(Math.log(Q)/Math.LN2))}function AE(Q){return Math.pow(2,Math.floor(Math.log(Q)/Math.LN2))}function bD(Q,A,I,g,C){const B=Math.cos,E=Math.sin,i=B(I/2),o=E(I/2),t=B((A+g)/2),e=E((A+g)/2),a=B((A-g)/2),s=E((A-g)/2),D=B((g-A)/2),c=E((g-A)/2);switch(C){case"XYX":Q.set(i*e,o*a,o*s,i*t);break;case"YZY":Q.set(o*s,i*e,o*a,i*t);break;case"ZXZ":Q.set(o*a,o*s,i*e,i*t);break;case"XZX":Q.set(i*e,o*c,o*D,i*t);break;case"YXY":Q.set(o*D,i*e,o*c,i*t);break;case"ZYZ":Q.set(o*c,o*D,i*e,i*t);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function jg(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint32Array:return Q/4294967295;case Uint16Array:return Q/65535;case Uint8Array:return Q/255;case Int32Array:return Math.max(Q/2147483647,-1);case Int16Array:return Math.max(Q/32767,-1);case Int8Array:return Math.max(Q/127,-1);default:throw new Error("Invalid component type.")}}function EI(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint32Array:return Math.round(Q*4294967295);case Uint16Array:return Math.round(Q*65535);case Uint8Array:return Math.round(Q*255);case Int32Array:return Math.round(Q*2147483647);case Int16Array:return Math.round(Q*32767);case Int8Array:return Math.round(Q*127);default:throw new Error("Invalid component type.")}}const lg={DEG2RAD:vB,RAD2DEG:lB,generateUUID:Mg,clamp:YI,euclideanModulo:Io,mapLinear:qD,inverseLerp:pD,lerp:ZB,damp:dD,pingpong:LD,smoothstep:YD,smootherstep:fD,randInt:uD,randFloat:HD,randFloatSpread:mD,seededRandom:TD,degToRad:xD,radToDeg:OD,isPowerOfTwo:Li,ceilPowerOfTwo:Qa,floorPowerOfTwo:AE,setQuaternionFromProperEuler:bD,normalize:EI,denormalize:jg};class xA{constructor(A=0,I=0){xA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(YI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),B=this.x-A.x,E=this.y-A.y;return this.x=B*g-E*C+A.x,this.y=B*C+E*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class TA{constructor(A,I,g,C,B,E,i,o,t){TA.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,C,B,E,i,o,t)}set(A,I,g,C,B,E,i,o,t){const e=this.elements;return e[0]=A,e[1]=C,e[2]=i,e[3]=I,e[4]=B,e[5]=o,e[6]=g,e[7]=E,e[8]=t,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,E=g[0],i=g[3],o=g[6],t=g[1],e=g[4],a=g[7],s=g[2],D=g[5],c=g[8],w=C[0],h=C[3],n=C[6],l=C[1],G=C[4],M=C[7],U=C[2],J=C[5],q=C[8];return B[0]=E*w+i*l+o*U,B[3]=E*h+i*G+o*J,B[6]=E*n+i*M+o*q,B[1]=t*w+e*l+a*U,B[4]=t*h+e*G+a*J,B[7]=t*n+e*M+a*q,B[2]=s*w+D*l+c*U,B[5]=s*h+D*G+c*J,B[8]=s*n+D*M+c*q,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],E=A[4],i=A[5],o=A[6],t=A[7],e=A[8];return I*E*e-I*i*t-g*B*e+g*i*o+C*B*t-C*E*o}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],E=A[4],i=A[5],o=A[6],t=A[7],e=A[8],a=e*E-i*t,s=i*o-e*B,D=t*B-E*o,c=I*a+g*s+C*D;if(c===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/c;return A[0]=a*w,A[1]=(C*t-e*g)*w,A[2]=(i*g-C*E)*w,A[3]=s*w,A[4]=(e*I-C*o)*w,A[5]=(C*B-i*I)*w,A[6]=D*w,A[7]=(g*o-t*I)*w,A[8]=(E*I-g*B)*w,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,B,E,i){const o=Math.cos(B),t=Math.sin(B);return this.set(g*o,g*t,-g*(o*E+t*i)+E+A,-C*t,C*o,-C*(-t*E+o*i)+i+I,0,0,1),this}scale(A,I){return this.premultiply(PE.makeScale(A,I)),this}rotate(A){return this.premultiply(PE.makeRotation(-A)),this}translate(A,I){return this.premultiply(PE.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const PE=new TA;function Ea(Q){for(let A=Q.length-1;A>=0;--A)if(Q[A]>=65535)return!0;return!1}function XB(Q){return document.createElementNS("http://www.w3.org/1999/xhtml",Q)}const yt={};function PB(Q){Q in yt||(yt[Q]=!0,console.warn(Q))}function nB(Q){return Q<.04045?Q*.0773993808:Math.pow(Q*.9478672986+.0521327014,2.4)}function WE(Q){return Q<.0031308?Q*12.92:1.055*Math.pow(Q,.41666)-.055}const vD=new TA().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ZD=new TA().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function PD(Q){return Q.convertSRGBToLinear().applyMatrix3(ZD)}function WD(Q){return Q.applyMatrix3(vD).convertLinearToSRGB()}const jD={[qg]:Q=>Q,[NA]:Q=>Q.convertSRGBToLinear(),[Ba]:PD},VD={[qg]:Q=>Q,[NA]:Q=>Q.convertLinearToSRGB(),[Ba]:WD},hg={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(Q){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!Q},get workingColorSpace(){return qg},set workingColorSpace(Q){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(Q,A,I){if(this.enabled===!1||A===I||!A||!I)return Q;const g=jD[A],C=VD[I];if(g===void 0||C===void 0)throw new Error(`Unsupported color space conversion, "${A}" to "${I}".`);return C(g(Q))},fromWorkingColorSpace:function(Q,A){return this.convert(Q,this.workingColorSpace,A)},toWorkingColorSpace:function(Q,A){return this.convert(Q,A,this.workingColorSpace)}};let bC;class ia{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{bC===void 0&&(bC=XB("canvas")),bC.width=A.width,bC.height=A.height;const g=bC.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=bC}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=XB("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),B=C.data;for(let E=0;E<B.length;E++)B[E]=nB(B[E]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(nB(I[g]/255)*255):I[g]=nB(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let _D=0;class oa{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_D++}),this.uuid=Mg(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let B;if(Array.isArray(C)){B=[];for(let E=0,i=C.length;E<i;E++)C[E].isDataTexture?B.push(jE(C[E].image)):B.push(jE(C[E]))}else B=jE(C);g.url=B}return I||(A.images[this.uuid]=g),g}}function jE(Q){return typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap?ia.getDataURL(Q):Q.data?{data:Array.from(Q.data),width:Q.width,height:Q.height,type:Q.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let XD=0;class KI extends xC{constructor(A=KI.DEFAULT_IMAGE,I=KI.DEFAULT_MAPPING,g=XI,C=XI,B=_I,E=HC,i=tg,o=aC,t=KI.DEFAULT_ANISOTROPY,e=uC){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XD++}),this.uuid=Mg(),this.name="",this.source=new oa(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=C,this.magFilter=B,this.minFilter=E,this.anisotropy=t,this.format=i,this.internalFormat=null,this.type=o,this.offset=new xA(0,0),this.repeat=new xA(1,1),this.center=new xA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new TA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof e=="string"?this.colorSpace=e:(PB("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fC?NA:uC),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==je)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case DC:A.x=A.x-Math.floor(A.x);break;case XI:A.x=A.x<0?0:1;break;case zQ:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case DC:A.y=A.y-Math.floor(A.y);break;case XI:A.y=A.y<0?0:1;break;case zQ:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return PB("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===NA?fC:Ca}set encoding(A){PB("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===fC?NA:uC}}KI.DEFAULT_IMAGE=null;KI.DEFAULT_MAPPING=je;KI.DEFAULT_ANISOTROPY=1;class II{constructor(A=0,I=0,g=0,C=1){II.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=this.w,E=A.elements;return this.x=E[0]*I+E[4]*g+E[8]*C+E[12]*B,this.y=E[1]*I+E[5]*g+E[9]*C+E[13]*B,this.z=E[2]*I+E[6]*g+E[10]*C+E[14]*B,this.w=E[3]*I+E[7]*g+E[11]*C+E[15]*B,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,B;const o=A.elements,t=o[0],e=o[4],a=o[8],s=o[1],D=o[5],c=o[9],w=o[2],h=o[6],n=o[10];if(Math.abs(e-s)<.01&&Math.abs(a-w)<.01&&Math.abs(c-h)<.01){if(Math.abs(e+s)<.1&&Math.abs(a+w)<.1&&Math.abs(c+h)<.1&&Math.abs(t+D+n-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const G=(t+1)/2,M=(D+1)/2,U=(n+1)/2,J=(e+s)/4,q=(a+w)/4,p=(c+h)/4;return G>M&&G>U?G<.01?(g=0,C=.707106781,B=.707106781):(g=Math.sqrt(G),C=J/g,B=q/g):M>U?M<.01?(g=.707106781,C=0,B=.707106781):(C=Math.sqrt(M),g=J/C,B=p/C):U<.01?(g=.707106781,C=.707106781,B=0):(B=Math.sqrt(U),g=q/B,C=p/B),this.set(g,C,B,I),this}let l=Math.sqrt((h-c)*(h-c)+(a-w)*(a-w)+(s-e)*(s-e));return Math.abs(l)<.001&&(l=1),this.x=(h-c)/l,this.y=(a-w)/l,this.z=(s-e)/l,this.w=Math.acos((t+D+n-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mC extends xC{constructor(A=1,I=1,g={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new II(0,0,A,I),this.scissorTest=!1,this.viewport=new II(0,0,A,I);const C={width:A,height:I,depth:1};g.encoding!==void 0&&(PB("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),g.colorSpace=g.encoding===fC?NA:uC),this.texture=new KI(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps!==void 0?g.generateMipmaps:!1,this.texture.internalFormat=g.internalFormat!==void 0?g.internalFormat:null,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:_I,this.depthBuffer=g.depthBuffer!==void 0?g.depthBuffer:!0,this.stencilBuffer=g.stencilBuffer!==void 0?g.stencilBuffer:!1,this.depthTexture=g.depthTexture!==void 0?g.depthTexture:null,this.samples=g.samples!==void 0?g.samples:0}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new oa(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ta extends KI{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=LI,this.minFilter=LI,this.wrapR=XI,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zD extends KI{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=LI,this.minFilter=LI,this.wrapR=XI,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sg{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,B,E,i){let o=g[C+0],t=g[C+1],e=g[C+2],a=g[C+3];const s=B[E+0],D=B[E+1],c=B[E+2],w=B[E+3];if(i===0){A[I+0]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a;return}if(i===1){A[I+0]=s,A[I+1]=D,A[I+2]=c,A[I+3]=w;return}if(a!==w||o!==s||t!==D||e!==c){let h=1-i;const n=o*s+t*D+e*c+a*w,l=n>=0?1:-1,G=1-n*n;if(G>Number.EPSILON){const U=Math.sqrt(G),J=Math.atan2(U,n*l);h=Math.sin(h*J)/U,i=Math.sin(i*J)/U}const M=i*l;if(o=o*h+s*M,t=t*h+D*M,e=e*h+c*M,a=a*h+w*M,h===1-i){const U=1/Math.sqrt(o*o+t*t+e*e+a*a);o*=U,t*=U,e*=U,a*=U}}A[I]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,C,B,E){const i=g[C],o=g[C+1],t=g[C+2],e=g[C+3],a=B[E],s=B[E+1],D=B[E+2],c=B[E+3];return A[I]=i*c+e*a+o*D-t*s,A[I+1]=o*c+e*s+t*a-i*D,A[I+2]=t*c+e*D+i*s-o*a,A[I+3]=e*c-i*a-o*s-t*D,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I){const g=A._x,C=A._y,B=A._z,E=A._order,i=Math.cos,o=Math.sin,t=i(g/2),e=i(C/2),a=i(B/2),s=o(g/2),D=o(C/2),c=o(B/2);switch(E){case"XYZ":this._x=s*e*a+t*D*c,this._y=t*D*a-s*e*c,this._z=t*e*c+s*D*a,this._w=t*e*a-s*D*c;break;case"YXZ":this._x=s*e*a+t*D*c,this._y=t*D*a-s*e*c,this._z=t*e*c-s*D*a,this._w=t*e*a+s*D*c;break;case"ZXY":this._x=s*e*a-t*D*c,this._y=t*D*a+s*e*c,this._z=t*e*c+s*D*a,this._w=t*e*a-s*D*c;break;case"ZYX":this._x=s*e*a-t*D*c,this._y=t*D*a+s*e*c,this._z=t*e*c-s*D*a,this._w=t*e*a+s*D*c;break;case"YZX":this._x=s*e*a+t*D*c,this._y=t*D*a+s*e*c,this._z=t*e*c-s*D*a,this._w=t*e*a-s*D*c;break;case"XZY":this._x=s*e*a-t*D*c,this._y=t*D*a-s*e*c,this._z=t*e*c+s*D*a,this._w=t*e*a+s*D*c;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+E)}return I!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],B=I[8],E=I[1],i=I[5],o=I[9],t=I[2],e=I[6],a=I[10],s=g+i+a;if(s>0){const D=.5/Math.sqrt(s+1);this._w=.25/D,this._x=(e-o)*D,this._y=(B-t)*D,this._z=(E-C)*D}else if(g>i&&g>a){const D=2*Math.sqrt(1+g-i-a);this._w=(e-o)/D,this._x=.25*D,this._y=(C+E)/D,this._z=(B+t)/D}else if(i>a){const D=2*Math.sqrt(1+i-g-a);this._w=(B-t)/D,this._x=(C+E)/D,this._y=.25*D,this._z=(o+e)/D}else{const D=2*Math.sqrt(1+a-g-i);this._w=(E-C)/D,this._x=(B+t)/D,this._y=(o+e)/D,this._z=.25*D}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(YI(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,B=A._z,E=A._w,i=I._x,o=I._y,t=I._z,e=I._w;return this._x=g*e+E*i+C*t-B*o,this._y=C*e+E*o+B*i-g*t,this._z=B*e+E*t+g*o-C*i,this._w=E*e-g*i-C*o-B*t,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,B=this._z,E=this._w;let i=E*A._w+g*A._x+C*A._y+B*A._z;if(i<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,i=-i):this.copy(A),i>=1)return this._w=E,this._x=g,this._y=C,this._z=B,this;const o=1-i*i;if(o<=Number.EPSILON){const D=1-I;return this._w=D*E+I*this._w,this._x=D*g+I*this._x,this._y=D*C+I*this._y,this._z=D*B+I*this._z,this.normalize(),this._onChangeCallback(),this}const t=Math.sqrt(o),e=Math.atan2(t,i),a=Math.sin((1-I)*e)/t,s=Math.sin(I*e)/t;return this._w=E*a+this._w*s,this._x=g*a+this._x*s,this._y=C*a+this._y*s,this._z=B*a+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),C=2*Math.PI*Math.random(),B=2*Math.PI*Math.random();return this.set(I*Math.cos(C),g*Math.sin(B),g*Math.cos(B),I*Math.sin(C))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(A=0,I=0,g=0){F.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(Mt.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(Mt.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6]*C,this.y=B[1]*I+B[4]*g+B[7]*C,this.z=B[2]*I+B[5]*g+B[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=A.elements,E=1/(B[3]*I+B[7]*g+B[11]*C+B[15]);return this.x=(B[0]*I+B[4]*g+B[8]*C+B[12])*E,this.y=(B[1]*I+B[5]*g+B[9]*C+B[13])*E,this.z=(B[2]*I+B[6]*g+B[10]*C+B[14])*E,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,B=A.x,E=A.y,i=A.z,o=A.w,t=o*I+E*C-i*g,e=o*g+i*I-B*C,a=o*C+B*g-E*I,s=-B*I-E*g-i*C;return this.x=t*o+s*-B+e*-i-a*-E,this.y=e*o+s*-E+a*-B-t*-i,this.z=a*o+s*-i+t*-E-e*-B,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[4]*g+B[8]*C,this.y=B[1]*I+B[5]*g+B[9]*C,this.z=B[2]*I+B[6]*g+B[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,B=A.z,E=I.x,i=I.y,o=I.z;return this.x=C*o-B*i,this.y=B*E-g*o,this.z=g*i-C*E,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return VE.copy(this).projectOnVector(A),this.sub(VE)}reflect(A){return this.sub(VE.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(YI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const VE=new F,Mt=new sg;class Ug{constructor(A=new F(1/0,1/0,1/0),I=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(mg.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(mg.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=mg.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){if(A.updateWorldMatrix(!1,!1),A.boundingBox!==void 0)A.boundingBox===null&&A.computeBoundingBox(),vC.copy(A.boundingBox),vC.applyMatrix4(A.matrixWorld),this.union(vC);else{const C=A.geometry;if(C!==void 0)if(I&&C.attributes!==void 0&&C.attributes.position!==void 0){const B=C.attributes.position;for(let E=0,i=B.count;E<i;E++)mg.fromBufferAttribute(B,E).applyMatrix4(A.matrixWorld),this.expandByPoint(mg)}else C.boundingBox===null&&C.computeBoundingBox(),vC.copy(C.boundingBox),vC.applyMatrix4(A.matrixWorld),this.union(vC)}const g=A.children;for(let C=0,B=g.length;C<B;C++)this.expandByObject(g[C],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,mg),mg.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(YB),rQ.subVectors(this.max,YB),ZC.subVectors(A.a,YB),PC.subVectors(A.b,YB),WC.subVectors(A.c,YB),$g.subVectors(PC,ZC),AC.subVectors(WC,PC),MC.subVectors(ZC,WC);let I=[0,-$g.z,$g.y,0,-AC.z,AC.y,0,-MC.z,MC.y,$g.z,0,-$g.x,AC.z,0,-AC.x,MC.z,0,-MC.x,-$g.y,$g.x,0,-AC.y,AC.x,0,-MC.y,MC.x,0];return!_E(I,ZC,PC,WC,rQ)||(I=[1,0,0,0,1,0,0,0,1],!_E(I,ZC,PC,WC,rQ))?!1:(cQ.crossVectors($g,AC),I=[cQ.x,cQ.y,cQ.z],_E(I,ZC,PC,WC,rQ))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,mg).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(mg).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(Hg[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),Hg[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),Hg[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),Hg[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),Hg[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),Hg[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),Hg[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),Hg[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(Hg),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const Hg=[new F,new F,new F,new F,new F,new F,new F,new F],mg=new F,vC=new Ug,ZC=new F,PC=new F,WC=new F,$g=new F,AC=new F,MC=new F,YB=new F,rQ=new F,cQ=new F,UC=new F;function _E(Q,A,I,g,C){for(let B=0,E=Q.length-3;B<=E;B+=3){UC.fromArray(Q,B);const i=C.x*Math.abs(UC.x)+C.y*Math.abs(UC.y)+C.z*Math.abs(UC.z),o=A.dot(UC),t=I.dot(UC),e=g.dot(UC);if(Math.max(-Math.max(o,t,e),Math.min(o,t,e))>i)return!1}return!0}const $D=new Ug,fB=new F,XE=new F;class Yg{constructor(A=new F,I=-1){this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):$D.setFromPoints(A).getCenter(g);let C=0;for(let B=0,E=A.length;B<E;B++)C=Math.max(C,g.distanceToSquared(A[B]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;fB.subVectors(A,this.center);const I=fB.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(fB,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(XE.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(fB.copy(A.center).add(XE)),this.expandByPoint(fB.copy(A.center).sub(XE))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tg=new F,zE=new F,wQ=new F,IC=new F,$E=new F,GQ=new F,Ai=new F;class wE{constructor(A=new F,I=new F(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,Tg)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=Tg.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(Tg.copy(this.origin).addScaledVector(this.direction,I),Tg.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){zE.copy(A).add(I).multiplyScalar(.5),wQ.copy(I).sub(A).normalize(),IC.copy(this.origin).sub(zE);const B=A.distanceTo(I)*.5,E=-this.direction.dot(wQ),i=IC.dot(this.direction),o=-IC.dot(wQ),t=IC.lengthSq(),e=Math.abs(1-E*E);let a,s,D,c;if(e>0)if(a=E*o-i,s=E*i-o,c=B*e,a>=0)if(s>=-c)if(s<=c){const w=1/e;a*=w,s*=w,D=a*(a+E*s+2*i)+s*(E*a+s+2*o)+t}else s=B,a=Math.max(0,-(E*s+i)),D=-a*a+s*(s+2*o)+t;else s=-B,a=Math.max(0,-(E*s+i)),D=-a*a+s*(s+2*o)+t;else s<=-c?(a=Math.max(0,-(-E*B+i)),s=a>0?-B:Math.min(Math.max(-B,-o),B),D=-a*a+s*(s+2*o)+t):s<=c?(a=0,s=Math.min(Math.max(-B,-o),B),D=s*(s+2*o)+t):(a=Math.max(0,-(E*B+i)),s=a>0?B:Math.min(Math.max(-B,-o),B),D=-a*a+s*(s+2*o)+t);else s=E>0?-B:B,a=Math.max(0,-(E*s+i)),D=-a*a+s*(s+2*o)+t;return g&&g.copy(this.origin).addScaledVector(this.direction,a),C&&C.copy(zE).addScaledVector(wQ,s),D}intersectSphere(A,I){Tg.subVectors(A.center,this.origin);const g=Tg.dot(this.direction),C=Tg.dot(Tg)-g*g,B=A.radius*A.radius;if(C>B)return null;const E=Math.sqrt(B-C),i=g-E,o=g+E;return o<0?null:i<0?this.at(o,I):this.at(i,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,B,E,i,o;const t=1/this.direction.x,e=1/this.direction.y,a=1/this.direction.z,s=this.origin;return t>=0?(g=(A.min.x-s.x)*t,C=(A.max.x-s.x)*t):(g=(A.max.x-s.x)*t,C=(A.min.x-s.x)*t),e>=0?(B=(A.min.y-s.y)*e,E=(A.max.y-s.y)*e):(B=(A.max.y-s.y)*e,E=(A.min.y-s.y)*e),g>E||B>C||((B>g||isNaN(g))&&(g=B),(E<C||isNaN(C))&&(C=E),a>=0?(i=(A.min.z-s.z)*a,o=(A.max.z-s.z)*a):(i=(A.max.z-s.z)*a,o=(A.min.z-s.z)*a),g>o||i>C)||((i>g||g!==g)&&(g=i),(o<C||C!==C)&&(C=o),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,Tg)!==null}intersectTriangle(A,I,g,C,B){$E.subVectors(I,A),GQ.subVectors(g,A),Ai.crossVectors($E,GQ);let E=this.direction.dot(Ai),i;if(E>0){if(C)return null;i=1}else if(E<0)i=-1,E=-E;else return null;IC.subVectors(this.origin,A);const o=i*this.direction.dot(GQ.crossVectors(IC,GQ));if(o<0)return null;const t=i*this.direction.dot($E.cross(IC));if(t<0||o+t>E)return null;const e=-i*IC.dot(Ai);return e<0?null:this.at(e/E,B)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class GA{constructor(A,I,g,C,B,E,i,o,t,e,a,s,D,c,w,h){GA.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,C,B,E,i,o,t,e,a,s,D,c,w,h)}set(A,I,g,C,B,E,i,o,t,e,a,s,D,c,w,h){const n=this.elements;return n[0]=A,n[4]=I,n[8]=g,n[12]=C,n[1]=B,n[5]=E,n[9]=i,n[13]=o,n[2]=t,n[6]=e,n[10]=a,n[14]=s,n[3]=D,n[7]=c,n[11]=w,n[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new GA().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/jC.setFromMatrixColumn(A,0).length(),B=1/jC.setFromMatrixColumn(A,1).length(),E=1/jC.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*B,I[5]=g[5]*B,I[6]=g[6]*B,I[7]=0,I[8]=g[8]*E,I[9]=g[9]*E,I[10]=g[10]*E,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,B=A.z,E=Math.cos(g),i=Math.sin(g),o=Math.cos(C),t=Math.sin(C),e=Math.cos(B),a=Math.sin(B);if(A.order==="XYZ"){const s=E*e,D=E*a,c=i*e,w=i*a;I[0]=o*e,I[4]=-o*a,I[8]=t,I[1]=D+c*t,I[5]=s-w*t,I[9]=-i*o,I[2]=w-s*t,I[6]=c+D*t,I[10]=E*o}else if(A.order==="YXZ"){const s=o*e,D=o*a,c=t*e,w=t*a;I[0]=s+w*i,I[4]=c*i-D,I[8]=E*t,I[1]=E*a,I[5]=E*e,I[9]=-i,I[2]=D*i-c,I[6]=w+s*i,I[10]=E*o}else if(A.order==="ZXY"){const s=o*e,D=o*a,c=t*e,w=t*a;I[0]=s-w*i,I[4]=-E*a,I[8]=c+D*i,I[1]=D+c*i,I[5]=E*e,I[9]=w-s*i,I[2]=-E*t,I[6]=i,I[10]=E*o}else if(A.order==="ZYX"){const s=E*e,D=E*a,c=i*e,w=i*a;I[0]=o*e,I[4]=c*t-D,I[8]=s*t+w,I[1]=o*a,I[5]=w*t+s,I[9]=D*t-c,I[2]=-t,I[6]=i*o,I[10]=E*o}else if(A.order==="YZX"){const s=E*o,D=E*t,c=i*o,w=i*t;I[0]=o*e,I[4]=w-s*a,I[8]=c*a+D,I[1]=a,I[5]=E*e,I[9]=-i*e,I[2]=-t*e,I[6]=D*a+c,I[10]=s-w*a}else if(A.order==="XZY"){const s=E*o,D=E*t,c=i*o,w=i*t;I[0]=o*e,I[4]=-a,I[8]=t*e,I[1]=s*a+w,I[5]=E*e,I[9]=D*a-c,I[2]=c*a-D,I[6]=i*e,I[10]=w*a+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(An,A,In)}lookAt(A,I,g){const C=this.elements;return Ig.subVectors(A,I),Ig.lengthSq()===0&&(Ig.z=1),Ig.normalize(),gC.crossVectors(g,Ig),gC.lengthSq()===0&&(Math.abs(g.z)===1?Ig.x+=1e-4:Ig.z+=1e-4,Ig.normalize(),gC.crossVectors(g,Ig)),gC.normalize(),SQ.crossVectors(Ig,gC),C[0]=gC.x,C[4]=SQ.x,C[8]=Ig.x,C[1]=gC.y,C[5]=SQ.y,C[9]=Ig.y,C[2]=gC.z,C[6]=SQ.z,C[10]=Ig.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,E=g[0],i=g[4],o=g[8],t=g[12],e=g[1],a=g[5],s=g[9],D=g[13],c=g[2],w=g[6],h=g[10],n=g[14],l=g[3],G=g[7],M=g[11],U=g[15],J=C[0],q=C[4],p=C[8],S=C[12],N=C[1],H=C[5],_=C[9],f=C[13],x=C[2],O=C[6],z=C[10],j=C[14],X=C[3],$=C[7],AA=C[11],DA=C[15];return B[0]=E*J+i*N+o*x+t*X,B[4]=E*q+i*H+o*O+t*$,B[8]=E*p+i*_+o*z+t*AA,B[12]=E*S+i*f+o*j+t*DA,B[1]=e*J+a*N+s*x+D*X,B[5]=e*q+a*H+s*O+D*$,B[9]=e*p+a*_+s*z+D*AA,B[13]=e*S+a*f+s*j+D*DA,B[2]=c*J+w*N+h*x+n*X,B[6]=c*q+w*H+h*O+n*$,B[10]=c*p+w*_+h*z+n*AA,B[14]=c*S+w*f+h*j+n*DA,B[3]=l*J+G*N+M*x+U*X,B[7]=l*q+G*H+M*O+U*$,B[11]=l*p+G*_+M*z+U*AA,B[15]=l*S+G*f+M*j+U*DA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],B=A[12],E=A[1],i=A[5],o=A[9],t=A[13],e=A[2],a=A[6],s=A[10],D=A[14],c=A[3],w=A[7],h=A[11],n=A[15];return c*(+B*o*a-C*t*a-B*i*s+g*t*s+C*i*D-g*o*D)+w*(+I*o*D-I*t*s+B*E*s-C*E*D+C*t*e-B*o*e)+h*(+I*t*a-I*i*D-B*E*a+g*E*D+B*i*e-g*t*e)+n*(-C*i*e-I*o*a+I*i*s+C*E*a-g*E*s+g*o*e)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],E=A[4],i=A[5],o=A[6],t=A[7],e=A[8],a=A[9],s=A[10],D=A[11],c=A[12],w=A[13],h=A[14],n=A[15],l=a*h*t-w*s*t+w*o*D-i*h*D-a*o*n+i*s*n,G=c*s*t-e*h*t-c*o*D+E*h*D+e*o*n-E*s*n,M=e*w*t-c*a*t+c*i*D-E*w*D-e*i*n+E*a*n,U=c*a*o-e*w*o-c*i*s+E*w*s+e*i*h-E*a*h,J=I*l+g*G+C*M+B*U;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/J;return A[0]=l*q,A[1]=(w*s*B-a*h*B-w*C*D+g*h*D+a*C*n-g*s*n)*q,A[2]=(i*h*B-w*o*B+w*C*t-g*h*t-i*C*n+g*o*n)*q,A[3]=(a*o*B-i*s*B-a*C*t+g*s*t+i*C*D-g*o*D)*q,A[4]=G*q,A[5]=(e*h*B-c*s*B+c*C*D-I*h*D-e*C*n+I*s*n)*q,A[6]=(c*o*B-E*h*B-c*C*t+I*h*t+E*C*n-I*o*n)*q,A[7]=(E*s*B-e*o*B+e*C*t-I*s*t-E*C*D+I*o*D)*q,A[8]=M*q,A[9]=(c*a*B-e*w*B-c*g*D+I*w*D+e*g*n-I*a*n)*q,A[10]=(E*w*B-c*i*B+c*g*t-I*w*t-E*g*n+I*i*n)*q,A[11]=(e*i*B-E*a*B-e*g*t+I*a*t+E*g*D-I*i*D)*q,A[12]=U*q,A[13]=(e*w*C-c*a*C+c*g*s-I*w*s-e*g*h+I*a*h)*q,A[14]=(c*i*C-E*w*C-c*g*o+I*w*o+E*g*h-I*i*h)*q,A[15]=(E*a*C-e*i*C+e*g*o-I*a*o-E*g*s+I*i*s)*q,this}scale(A){const I=this.elements,g=A.x,C=A.y,B=A.z;return I[0]*=g,I[4]*=C,I[8]*=B,I[1]*=g,I[5]*=C,I[9]*=B,I[2]*=g,I[6]*=C,I[10]*=B,I[3]*=g,I[7]*=C,I[11]*=B,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),B=1-g,E=A.x,i=A.y,o=A.z,t=B*E,e=B*i;return this.set(t*E+g,t*i-C*o,t*o+C*i,0,t*i+C*o,e*i+g,e*o-C*E,0,t*o-C*i,e*o+C*E,B*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,B,E){return this.set(1,g,B,0,A,1,E,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,B=I._x,E=I._y,i=I._z,o=I._w,t=B+B,e=E+E,a=i+i,s=B*t,D=B*e,c=B*a,w=E*e,h=E*a,n=i*a,l=o*t,G=o*e,M=o*a,U=g.x,J=g.y,q=g.z;return C[0]=(1-(w+n))*U,C[1]=(D+M)*U,C[2]=(c-G)*U,C[3]=0,C[4]=(D-M)*J,C[5]=(1-(s+n))*J,C[6]=(h+l)*J,C[7]=0,C[8]=(c+G)*q,C[9]=(h-l)*q,C[10]=(1-(s+w))*q,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let B=jC.set(C[0],C[1],C[2]).length();const E=jC.set(C[4],C[5],C[6]).length(),i=jC.set(C[8],C[9],C[10]).length();this.determinant()<0&&(B=-B),A.x=C[12],A.y=C[13],A.z=C[14],rg.copy(this);const t=1/B,e=1/E,a=1/i;return rg.elements[0]*=t,rg.elements[1]*=t,rg.elements[2]*=t,rg.elements[4]*=e,rg.elements[5]*=e,rg.elements[6]*=e,rg.elements[8]*=a,rg.elements[9]*=a,rg.elements[10]*=a,I.setFromRotationMatrix(rg),g.x=B,g.y=E,g.z=i,this}makePerspective(A,I,g,C,B,E,i=Wg){const o=this.elements,t=2*B/(I-A),e=2*B/(g-C),a=(I+A)/(I-A),s=(g+C)/(g-C);let D,c;if(i===Wg)D=-(E+B)/(E-B),c=-2*E*B/(E-B);else if(i===$Q)D=-E/(E-B),c=-E*B/(E-B);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+i);return o[0]=t,o[4]=0,o[8]=a,o[12]=0,o[1]=0,o[5]=e,o[9]=s,o[13]=0,o[2]=0,o[6]=0,o[10]=D,o[14]=c,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,C,B,E,i=Wg){const o=this.elements,t=1/(I-A),e=1/(g-C),a=1/(E-B),s=(I+A)*t,D=(g+C)*e;let c,w;if(i===Wg)c=(E+B)*a,w=-2*a;else if(i===$Q)c=B*a,w=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+i);return o[0]=2*t,o[4]=0,o[8]=0,o[12]=-s,o[1]=0,o[5]=2*e,o[9]=0,o[13]=-D,o[2]=0,o[6]=0,o[10]=w,o[14]=-c,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const jC=new F,rg=new GA,An=new F(0,0,0),In=new F(1,1,1),gC=new F,SQ=new F,Ig=new F,Ut=new GA,Nt=new sg;class zI{constructor(A=0,I=0,g=0,C=zI.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,B=C[0],E=C[4],i=C[8],o=C[1],t=C[5],e=C[9],a=C[2],s=C[6],D=C[10];switch(I){case"XYZ":this._y=Math.asin(YI(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-e,D),this._z=Math.atan2(-E,B)):(this._x=Math.atan2(s,t),this._z=0);break;case"YXZ":this._x=Math.asin(-YI(e,-1,1)),Math.abs(e)<.9999999?(this._y=Math.atan2(i,D),this._z=Math.atan2(o,t)):(this._y=Math.atan2(-a,B),this._z=0);break;case"ZXY":this._x=Math.asin(YI(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-a,D),this._z=Math.atan2(-E,t)):(this._y=0,this._z=Math.atan2(o,B));break;case"ZYX":this._y=Math.asin(-YI(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(s,D),this._z=Math.atan2(o,B)):(this._x=0,this._z=Math.atan2(-E,t));break;case"YZX":this._z=Math.asin(YI(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-e,t),this._y=Math.atan2(-a,B)):(this._x=0,this._y=Math.atan2(i,D));break;case"XZY":this._z=Math.asin(-YI(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(s,t),this._y=Math.atan2(i,B)):(this._x=Math.atan2(-e,D),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return Ut.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Ut,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return Nt.setFromEuler(this),this.setFromQuaternion(Nt,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zI.DEFAULT_ORDER="XYZ";class ea{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let gn=0;const Kt=new F,VC=new sg,xg=new GA,kQ=new F,uB=new F,Cn=new F,Bn=new sg,Jt=new F(1,0,0),Ft=new F(0,1,0),Rt=new F(0,0,1),Qn={type:"added"},qt={type:"removed"};class BI extends xC{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gn++}),this.uuid=Mg(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=BI.DEFAULT_UP.clone();const A=new F,I=new zI,g=new sg,C=new F(1,1,1);function B(){g.setFromEuler(I,!1)}function E(){I.setFromQuaternion(g,void 0,!1)}I._onChange(B),g._onChange(E),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new GA},normalMatrix:{value:new TA}}),this.matrix=new GA,this.matrixWorld=new GA,this.matrixAutoUpdate=BI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=BI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return VC.setFromAxisAngle(A,I),this.quaternion.multiply(VC),this}rotateOnWorldAxis(A,I){return VC.setFromAxisAngle(A,I),this.quaternion.premultiply(VC),this}rotateX(A){return this.rotateOnAxis(Jt,A)}rotateY(A){return this.rotateOnAxis(Ft,A)}rotateZ(A){return this.rotateOnAxis(Rt,A)}translateOnAxis(A,I){return Kt.copy(A).applyQuaternion(this.quaternion),this.position.add(Kt.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(Jt,A)}translateY(A){return this.translateOnAxis(Ft,A)}translateZ(A){return this.translateOnAxis(Rt,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(xg.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?kQ.copy(A):kQ.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),uB.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xg.lookAt(uB,kQ,this.up):xg.lookAt(kQ,uB,this.up),this.quaternion.setFromRotationMatrix(xg),C&&(xg.extractRotation(C.matrixWorld),VC.setFromRotationMatrix(xg),this.quaternion.premultiply(VC.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(Qn)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(qt)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const I=this.children[A];I.parent=null,I.dispatchEvent(qt)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),xg.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),xg.multiply(A.parent.matrixWorld)),A.applyMatrix4(xg),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const E=this.children[g].getObjectByProperty(A,I);if(E!==void 0)return E}}getObjectsByProperty(A,I){let g=[];this[A]===I&&g.push(this);for(let C=0,B=this.children.length;C<B;C++){const E=this.children[C].getObjectsByProperty(A,I);E.length>0&&(g=g.concat(E))}return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uB,A,Cn),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uB,Bn,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++){const B=I[g];(B.matrixWorldAutoUpdate===!0||A===!0)&&B.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const C=this.children;for(let B=0,E=C.length;B<E;B++){const i=C[B];i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),C.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON()));function B(i,o){return i[o.uuid]===void 0&&(i[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=B(A.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const o=i.shapes;if(Array.isArray(o))for(let t=0,e=o.length;t<e;t++){const a=o[t];B(A.shapes,a)}else B(A.shapes,o)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(B(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let o=0,t=this.material.length;o<t;o++)i.push(B(A.materials,this.material[o]));C.material=i}else C.material=B(A.materials,this.material);if(this.children.length>0){C.children=[];for(let i=0;i<this.children.length;i++)C.children.push(this.children[i].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let i=0;i<this.animations.length;i++){const o=this.animations[i];C.animations.push(B(A.animations,o))}}if(I){const i=E(A.geometries),o=E(A.materials),t=E(A.textures),e=E(A.images),a=E(A.shapes),s=E(A.skeletons),D=E(A.animations),c=E(A.nodes);i.length>0&&(g.geometries=i),o.length>0&&(g.materials=o),t.length>0&&(g.textures=t),e.length>0&&(g.images=e),a.length>0&&(g.shapes=a),s.length>0&&(g.skeletons=s),D.length>0&&(g.animations=D),c.length>0&&(g.nodes=c)}return g.object=C,g;function E(i){const o=[];for(const t in i){const e=i[t];delete e.metadata,o.push(e)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations,this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}BI.DEFAULT_UP=new F(0,1,0);BI.DEFAULT_MATRIX_AUTO_UPDATE=!0;BI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cg=new F,Og=new F,Ii=new F,bg=new F,_C=new F,XC=new F,pt=new F,gi=new F,Ci=new F,Bi=new F;let lQ=!1;class kg{constructor(A=new F,I=new F,g=new F){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),cg.subVectors(A,I),C.cross(cg);const B=C.lengthSq();return B>0?C.multiplyScalar(1/Math.sqrt(B)):C.set(0,0,0)}static getBarycoord(A,I,g,C,B){cg.subVectors(C,I),Og.subVectors(g,I),Ii.subVectors(A,I);const E=cg.dot(cg),i=cg.dot(Og),o=cg.dot(Ii),t=Og.dot(Og),e=Og.dot(Ii),a=E*t-i*i;if(a===0)return B.set(-2,-1,-1);const s=1/a,D=(t*o-i*e)*s,c=(E*e-i*o)*s;return B.set(1-D-c,c,D)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,bg),bg.x>=0&&bg.y>=0&&bg.x+bg.y<=1}static getUV(A,I,g,C,B,E,i,o){return lQ===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lQ=!0),this.getInterpolation(A,I,g,C,B,E,i,o)}static getInterpolation(A,I,g,C,B,E,i,o){return this.getBarycoord(A,I,g,C,bg),o.setScalar(0),o.addScaledVector(B,bg.x),o.addScaledVector(E,bg.y),o.addScaledVector(i,bg.z),o}static isFrontFacing(A,I,g,C){return cg.subVectors(g,I),Og.subVectors(A,I),cg.cross(Og).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return cg.subVectors(this.c,this.b),Og.subVectors(this.a,this.b),cg.cross(Og).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return kg.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return kg.getBarycoord(A,this.a,this.b,this.c,I)}getUV(A,I,g,C,B){return lQ===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lQ=!0),kg.getInterpolation(A,this.a,this.b,this.c,I,g,C,B)}getInterpolation(A,I,g,C,B){return kg.getInterpolation(A,this.a,this.b,this.c,I,g,C,B)}containsPoint(A){return kg.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return kg.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,B=this.c;let E,i;_C.subVectors(C,g),XC.subVectors(B,g),gi.subVectors(A,g);const o=_C.dot(gi),t=XC.dot(gi);if(o<=0&&t<=0)return I.copy(g);Ci.subVectors(A,C);const e=_C.dot(Ci),a=XC.dot(Ci);if(e>=0&&a<=e)return I.copy(C);const s=o*a-e*t;if(s<=0&&o>=0&&e<=0)return E=o/(o-e),I.copy(g).addScaledVector(_C,E);Bi.subVectors(A,B);const D=_C.dot(Bi),c=XC.dot(Bi);if(c>=0&&D<=c)return I.copy(B);const w=D*t-o*c;if(w<=0&&t>=0&&c<=0)return i=t/(t-c),I.copy(g).addScaledVector(XC,i);const h=e*c-D*a;if(h<=0&&a-e>=0&&D-c>=0)return pt.subVectors(B,C),i=(a-e)/(a-e+(D-c)),I.copy(C).addScaledVector(pt,i);const n=1/(h+w+s);return E=w*n,i=s*n,I.copy(g).addScaledVector(_C,E).addScaledVector(XC,i)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let En=0;class Bg extends xC{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:En++}),this.uuid=Mg(),this.name="",this.type="Material",this.blending=DB,this.side=_g,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Pe,this.blendDst=We,this.blendEquation=eB,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lD,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ZE,this.stencilZFail=ZE,this.stencilZPass=ZE,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const C=this[I];if(C===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==DB&&(g.blending=this.blending),this.side!==_g&&(g.side=this.side),this.vertexColors&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=this.transparent),g.depthFunc=this.depthFunc,g.depthTest=this.depthTest,g.depthWrite=this.depthWrite,g.colorWrite=this.colorWrite,g.stencilWrite=this.stencilWrite,g.stencilWriteMask=this.stencilWriteMask,g.stencilFunc=this.stencilFunc,g.stencilRef=this.stencilRef,g.stencilFuncMask=this.stencilFuncMask,g.stencilFail=this.stencilFail,g.stencilZFail=this.stencilZFail,g.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(g.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(g.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(g.wireframe=this.wireframe),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=this.flatShading),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(B){const E=[];for(const i in B){const o=B[i];delete o.metadata,E.push(o)}return E}if(I){const B=C(A.textures),E=C(A.images);B.length>0&&(g.textures=B),E.length>0&&(g.images=E)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let B=0;B!==C;++B)g[B]=I[B].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}const aa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wg={h:0,s:0,l:0},yQ={h:0,s:0,l:0};function Qi(Q,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?Q+(A-Q)*6*I:I<1/2?A:I<2/3?Q+(A-Q)*6*(2/3-I):Q}class hA{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const C=A;C&&C.isColor?this.copy(C):typeof C=="number"?this.setHex(C):typeof C=="string"&&this.setStyle(C)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=NA){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,hg.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=hg.workingColorSpace){return this.r=A,this.g=I,this.b=g,hg.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=hg.workingColorSpace){if(A=Io(A,1),I=YI(I,0,1),g=YI(g,0,1),I===0)this.r=this.g=this.b=g;else{const B=g<=.5?g*(1+I):g+I-g*I,E=2*g-B;this.r=Qi(E,B,A+1/3),this.g=Qi(E,B,A),this.b=Qi(E,B,A-1/3)}return hg.toWorkingColorSpace(this,C),this}setStyle(A,I=NA){function g(B){B!==void 0&&parseFloat(B)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let B;const E=C[1],i=C[2];switch(E){case"rgb":case"rgba":if(B=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(B[4]),this.setRGB(Math.min(255,parseInt(B[1],10))/255,Math.min(255,parseInt(B[2],10))/255,Math.min(255,parseInt(B[3],10))/255,I);if(B=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(B[4]),this.setRGB(Math.min(100,parseInt(B[1],10))/100,Math.min(100,parseInt(B[2],10))/100,Math.min(100,parseInt(B[3],10))/100,I);break;case"hsl":case"hsla":if(B=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(B[4]),this.setHSL(parseFloat(B[1])/360,parseFloat(B[2])/100,parseFloat(B[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const B=C[1],E=B.length;if(E===3)return this.setRGB(parseInt(B.charAt(0),16)/15,parseInt(B.charAt(1),16)/15,parseInt(B.charAt(2),16)/15,I);if(E===6)return this.setHex(parseInt(B,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=NA){const g=aa[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=nB(A.r),this.g=nB(A.g),this.b=nB(A.b),this}copyLinearToSRGB(A){return this.r=WE(A.r),this.g=WE(A.g),this.b=WE(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=NA){return hg.fromWorkingColorSpace(TI.copy(this),A),Math.round(YI(TI.r*255,0,255))*65536+Math.round(YI(TI.g*255,0,255))*256+Math.round(YI(TI.b*255,0,255))}getHexString(A=NA){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=hg.workingColorSpace){hg.fromWorkingColorSpace(TI.copy(this),I);const g=TI.r,C=TI.g,B=TI.b,E=Math.max(g,C,B),i=Math.min(g,C,B);let o,t;const e=(i+E)/2;if(i===E)o=0,t=0;else{const a=E-i;switch(t=e<=.5?a/(E+i):a/(2-E-i),E){case g:o=(C-B)/a+(C<B?6:0);break;case C:o=(B-g)/a+2;break;case B:o=(g-C)/a+4;break}o/=6}return A.h=o,A.s=t,A.l=e,A}getRGB(A,I=hg.workingColorSpace){return hg.fromWorkingColorSpace(TI.copy(this),I),A.r=TI.r,A.g=TI.g,A.b=TI.b,A}getStyle(A=NA){hg.fromWorkingColorSpace(TI.copy(this),A);const I=TI.r,g=TI.g,C=TI.b;return A!==NA?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL(wg),wg.h+=A,wg.s+=I,wg.l+=g,this.setHSL(wg.h,wg.s,wg.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(wg),A.getHSL(yQ);const g=ZB(wg.h,yQ.h,I),C=ZB(wg.s,yQ.s,I),B=ZB(wg.l,yQ.l,I);return this.setHSL(g,C,B),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,B=A.elements;return this.r=B[0]*I+B[3]*g+B[6]*C,this.g=B[1]*I+B[4]*g+B[7]*C,this.b=B[2]*I+B[5]*g+B[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const TI=new hA;hA.NAMES=aa;class PI extends Bg{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new hA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const yI=new F,MQ=new xA;class WI{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=pi,this.updateRange={offset:0,count:-1},this.gpuType=Pg,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,B=this.itemSize;C<B;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)MQ.fromBufferAttribute(this,I),MQ.applyMatrix3(A),this.setXY(I,MQ.x,MQ.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)yI.fromBufferAttribute(this,I),yI.applyMatrix3(A),this.setXYZ(I,yI.x,yI.y,yI.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)yI.fromBufferAttribute(this,I),yI.applyMatrix4(A),this.setXYZ(I,yI.x,yI.y,yI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)yI.fromBufferAttribute(this,I),yI.applyNormalMatrix(A),this.setXYZ(I,yI.x,yI.y,yI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)yI.fromBufferAttribute(this,I),yI.transformDirection(A),this.setXYZ(I,yI.x,yI.y,yI.z);return this}set(A,I=0){return this.array.set(A,I),this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=jg(I,this.array)),I}setX(A,I){return this.normalized&&(I=EI(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=jg(I,this.array)),I}setY(A,I){return this.normalized&&(I=EI(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=jg(I,this.array)),I}setZ(A,I){return this.normalized&&(I=EI(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=jg(I,this.array)),I}setW(A,I){return this.normalized&&(I=EI(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=EI(I,this.array),g=EI(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=EI(I,this.array),g=EI(g,this.array),C=EI(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,B){return A*=this.itemSize,this.normalized&&(I=EI(I,this.array),g=EI(g,this.array),C=EI(C,this.array),B=EI(B,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=B,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==pi&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class go extends WI{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class sa extends WI{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class SI extends WI{constructor(A,I,g){super(new Float32Array(A),I,g)}}let on=0;const Qg=new GA,Ei=new BI,zC=new F,gg=new Ug,HB=new Ug,dI=new F;class jI extends xC{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:on++}),this.uuid=Mg(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Ea(A)?sa:go)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const B=new TA().getNormalMatrix(A);g.applyNormalMatrix(B),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return Qg.makeRotationFromQuaternion(A),this.applyMatrix4(Qg),this}rotateX(A){return Qg.makeRotationX(A),this.applyMatrix4(Qg),this}rotateY(A){return Qg.makeRotationY(A),this.applyMatrix4(Qg),this}rotateZ(A){return Qg.makeRotationZ(A),this.applyMatrix4(Qg),this}translate(A,I,g){return Qg.makeTranslation(A,I,g),this.applyMatrix4(Qg),this}scale(A,I,g){return Qg.makeScale(A,I,g),this.applyMatrix4(Qg),this}lookAt(A){return Ei.lookAt(A),Ei.updateMatrix(),this.applyMatrix4(Ei.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zC).negate(),this.translate(zC.x,zC.y,zC.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const B=A[g];I.push(B.x,B.y,B.z||0)}return this.setAttribute("position",new SI(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ug);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const B=I[g];gg.setFromBufferAttribute(B),this.morphTargetsRelative?(dI.addVectors(this.boundingBox.min,gg.min),this.boundingBox.expandByPoint(dI),dI.addVectors(this.boundingBox.max,gg.max),this.boundingBox.expandByPoint(dI)):(this.boundingBox.expandByPoint(gg.min),this.boundingBox.expandByPoint(gg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yg);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(A){const g=this.boundingSphere.center;if(gg.setFromBufferAttribute(A),I)for(let B=0,E=I.length;B<E;B++){const i=I[B];HB.setFromBufferAttribute(i),this.morphTargetsRelative?(dI.addVectors(gg.min,HB.min),gg.expandByPoint(dI),dI.addVectors(gg.max,HB.max),gg.expandByPoint(dI)):(gg.expandByPoint(HB.min),gg.expandByPoint(HB.max))}gg.getCenter(g);let C=0;for(let B=0,E=A.count;B<E;B++)dI.fromBufferAttribute(A,B),C=Math.max(C,g.distanceToSquared(dI));if(I)for(let B=0,E=I.length;B<E;B++){const i=I[B],o=this.morphTargetsRelative;for(let t=0,e=i.count;t<e;t++)dI.fromBufferAttribute(i,t),o&&(zC.fromBufferAttribute(A,t),dI.add(zC)),C=Math.max(C,g.distanceToSquared(dI))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,C=I.position.array,B=I.normal.array,E=I.uv.array,i=C.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new WI(new Float32Array(4*i),4));const o=this.getAttribute("tangent").array,t=[],e=[];for(let N=0;N<i;N++)t[N]=new F,e[N]=new F;const a=new F,s=new F,D=new F,c=new xA,w=new xA,h=new xA,n=new F,l=new F;function G(N,H,_){a.fromArray(C,N*3),s.fromArray(C,H*3),D.fromArray(C,_*3),c.fromArray(E,N*2),w.fromArray(E,H*2),h.fromArray(E,_*2),s.sub(a),D.sub(a),w.sub(c),h.sub(c);const f=1/(w.x*h.y-h.x*w.y);isFinite(f)&&(n.copy(s).multiplyScalar(h.y).addScaledVector(D,-w.y).multiplyScalar(f),l.copy(D).multiplyScalar(w.x).addScaledVector(s,-h.x).multiplyScalar(f),t[N].add(n),t[H].add(n),t[_].add(n),e[N].add(l),e[H].add(l),e[_].add(l))}let M=this.groups;M.length===0&&(M=[{start:0,count:g.length}]);for(let N=0,H=M.length;N<H;++N){const _=M[N],f=_.start,x=_.count;for(let O=f,z=f+x;O<z;O+=3)G(g[O+0],g[O+1],g[O+2])}const U=new F,J=new F,q=new F,p=new F;function S(N){q.fromArray(B,N*3),p.copy(q);const H=t[N];U.copy(H),U.sub(q.multiplyScalar(q.dot(H))).normalize(),J.crossVectors(p,H);const f=J.dot(e[N])<0?-1:1;o[N*4]=U.x,o[N*4+1]=U.y,o[N*4+2]=U.z,o[N*4+3]=f}for(let N=0,H=M.length;N<H;++N){const _=M[N],f=_.start,x=_.count;for(let O=f,z=f+x;O<z;O+=3)S(g[O+0]),S(g[O+1]),S(g[O+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new WI(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,D=g.count;s<D;s++)g.setXYZ(s,0,0,0);const C=new F,B=new F,E=new F,i=new F,o=new F,t=new F,e=new F,a=new F;if(A)for(let s=0,D=A.count;s<D;s+=3){const c=A.getX(s+0),w=A.getX(s+1),h=A.getX(s+2);C.fromBufferAttribute(I,c),B.fromBufferAttribute(I,w),E.fromBufferAttribute(I,h),e.subVectors(E,B),a.subVectors(C,B),e.cross(a),i.fromBufferAttribute(g,c),o.fromBufferAttribute(g,w),t.fromBufferAttribute(g,h),i.add(e),o.add(e),t.add(e),g.setXYZ(c,i.x,i.y,i.z),g.setXYZ(w,o.x,o.y,o.z),g.setXYZ(h,t.x,t.y,t.z)}else for(let s=0,D=I.count;s<D;s+=3)C.fromBufferAttribute(I,s+0),B.fromBufferAttribute(I,s+1),E.fromBufferAttribute(I,s+2),e.subVectors(E,B),a.subVectors(C,B),e.cross(a),g.setXYZ(s+0,e.x,e.y,e.z),g.setXYZ(s+1,e.x,e.y,e.z),g.setXYZ(s+2,e.x,e.y,e.z);this.normalizeNormals(),g.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)dI.fromBufferAttribute(A,I),dI.normalize(),A.setXYZ(I,dI.x,dI.y,dI.z)}toNonIndexed(){function A(i,o){const t=i.array,e=i.itemSize,a=i.normalized,s=new t.constructor(o.length*e);let D=0,c=0;for(let w=0,h=o.length;w<h;w++){i.isInterleavedBufferAttribute?D=o[w]*i.data.stride+i.offset:D=o[w]*e;for(let n=0;n<e;n++)s[c++]=t[D++]}return new WI(s,e,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new jI,g=this.index.array,C=this.attributes;for(const i in C){const o=C[i],t=A(o,g);I.setAttribute(i,t)}const B=this.morphAttributes;for(const i in B){const o=[],t=B[i];for(let e=0,a=t.length;e<a;e++){const s=t[e],D=A(s,g);o.push(D)}I.morphAttributes[i]=o}I.morphTargetsRelative=this.morphTargetsRelative;const E=this.groups;for(let i=0,o=E.length;i<o;i++){const t=E[i];I.addGroup(t.start,t.count,t.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const t in o)o[t]!==void 0&&(A[t]=o[t]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const t=g[o];A.data.attributes[o]=t.toJSON(A.data)}const C={};let B=!1;for(const o in this.morphAttributes){const t=this.morphAttributes[o],e=[];for(let a=0,s=t.length;a<s;a++){const D=t[a];e.push(D.toJSON(A.data))}e.length>0&&(C[o]=e,B=!0)}B&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const E=this.groups;E.length>0&&(A.data.groups=JSON.parse(JSON.stringify(E)));const i=this.boundingSphere;return i!==null&&(A.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const t in C){const e=C[t];this.setAttribute(t,e.clone(I))}const B=A.morphAttributes;for(const t in B){const e=[],a=B[t];for(let s=0,D=a.length;s<D;s++)e.push(a[s].clone(I));this.morphAttributes[t]=e}this.morphTargetsRelative=A.morphTargetsRelative;const E=A.groups;for(let t=0,e=E.length;t<e;t++){const a=E[t];this.addGroup(a.start,a.count,a.materialIndex)}const i=A.boundingBox;i!==null&&(this.boundingBox=i.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dt=new GA,NC=new wE,UQ=new Yg,Lt=new F,$C=new F,AB=new F,IB=new F,ii=new F,NQ=new F,KQ=new xA,JQ=new xA,FQ=new xA,Yt=new F,ft=new F,ut=new F,RQ=new F,qQ=new F;class tI extends BI{constructor(A=new jI,I=new PI){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,E=C.length;B<E;B++){const i=C[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=B}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,B=g.morphAttributes.position,E=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const i=this.morphTargetInfluences;if(B&&i){NQ.set(0,0,0);for(let o=0,t=B.length;o<t;o++){const e=i[o],a=B[o];e!==0&&(ii.fromBufferAttribute(a,A),E?NQ.addScaledVector(ii,e):NQ.addScaledVector(ii.sub(I),e))}I.add(NQ)}return I}raycast(A,I){const g=this.geometry,C=this.material,B=this.matrixWorld;C!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),UQ.copy(g.boundingSphere),UQ.applyMatrix4(B),NC.copy(A.ray).recast(A.near),!(UQ.containsPoint(NC.origin)===!1&&(NC.intersectSphere(UQ,Lt)===null||NC.origin.distanceToSquared(Lt)>(A.far-A.near)**2))&&(dt.copy(B).invert(),NC.copy(A.ray).applyMatrix4(dt),!(g.boundingBox!==null&&NC.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,NC)))}_computeIntersections(A,I,g){let C;const B=this.geometry,E=this.material,i=B.index,o=B.attributes.position,t=B.attributes.uv,e=B.attributes.uv1,a=B.attributes.normal,s=B.groups,D=B.drawRange;if(i!==null)if(Array.isArray(E))for(let c=0,w=s.length;c<w;c++){const h=s[c],n=E[h.materialIndex],l=Math.max(h.start,D.start),G=Math.min(i.count,Math.min(h.start+h.count,D.start+D.count));for(let M=l,U=G;M<U;M+=3){const J=i.getX(M),q=i.getX(M+1),p=i.getX(M+2);C=pQ(this,n,A,g,t,e,a,J,q,p),C&&(C.faceIndex=Math.floor(M/3),C.face.materialIndex=h.materialIndex,I.push(C))}}else{const c=Math.max(0,D.start),w=Math.min(i.count,D.start+D.count);for(let h=c,n=w;h<n;h+=3){const l=i.getX(h),G=i.getX(h+1),M=i.getX(h+2);C=pQ(this,E,A,g,t,e,a,l,G,M),C&&(C.faceIndex=Math.floor(h/3),I.push(C))}}else if(o!==void 0)if(Array.isArray(E))for(let c=0,w=s.length;c<w;c++){const h=s[c],n=E[h.materialIndex],l=Math.max(h.start,D.start),G=Math.min(o.count,Math.min(h.start+h.count,D.start+D.count));for(let M=l,U=G;M<U;M+=3){const J=M,q=M+1,p=M+2;C=pQ(this,n,A,g,t,e,a,J,q,p),C&&(C.faceIndex=Math.floor(M/3),C.face.materialIndex=h.materialIndex,I.push(C))}}else{const c=Math.max(0,D.start),w=Math.min(o.count,D.start+D.count);for(let h=c,n=w;h<n;h+=3){const l=h,G=h+1,M=h+2;C=pQ(this,E,A,g,t,e,a,l,G,M),C&&(C.faceIndex=Math.floor(h/3),I.push(C))}}}}function tn(Q,A,I,g,C,B,E,i){let o;if(A.side===$I?o=g.intersectTriangle(E,B,C,!0,i):o=g.intersectTriangle(C,B,E,A.side===_g,i),o===null)return null;qQ.copy(i),qQ.applyMatrix4(Q.matrixWorld);const t=I.ray.origin.distanceTo(qQ);return t<I.near||t>I.far?null:{distance:t,point:qQ.clone(),object:Q}}function pQ(Q,A,I,g,C,B,E,i,o,t){Q.getVertexPosition(i,$C),Q.getVertexPosition(o,AB),Q.getVertexPosition(t,IB);const e=tn(Q,A,I,g,$C,AB,IB,RQ);if(e){C&&(KQ.fromBufferAttribute(C,i),JQ.fromBufferAttribute(C,o),FQ.fromBufferAttribute(C,t),e.uv=kg.getInterpolation(RQ,$C,AB,IB,KQ,JQ,FQ,new xA)),B&&(KQ.fromBufferAttribute(B,i),JQ.fromBufferAttribute(B,o),FQ.fromBufferAttribute(B,t),e.uv1=kg.getInterpolation(RQ,$C,AB,IB,KQ,JQ,FQ,new xA),e.uv2=e.uv1),E&&(Yt.fromBufferAttribute(E,i),ft.fromBufferAttribute(E,o),ut.fromBufferAttribute(E,t),e.normal=kg.getInterpolation(RQ,$C,AB,IB,Yt,ft,ut,new F),e.normal.dot(g.direction)>0&&e.normal.multiplyScalar(-1));const a={a:i,b:o,c:t,normal:new F,materialIndex:0};kg.getNormal($C,AB,IB,a.normal),e.face=a}return e}class yg extends jI{constructor(A=1,I=1,g=1,C=1,B=1,E=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:B,depthSegments:E};const i=this;C=Math.floor(C),B=Math.floor(B),E=Math.floor(E);const o=[],t=[],e=[],a=[];let s=0,D=0;c("z","y","x",-1,-1,g,I,A,E,B,0),c("z","y","x",1,-1,g,I,-A,E,B,1),c("x","z","y",1,1,A,g,I,C,E,2),c("x","z","y",1,-1,A,g,-I,C,E,3),c("x","y","z",1,-1,A,I,g,C,B,4),c("x","y","z",-1,-1,A,I,-g,C,B,5),this.setIndex(o),this.setAttribute("position",new SI(t,3)),this.setAttribute("normal",new SI(e,3)),this.setAttribute("uv",new SI(a,2));function c(w,h,n,l,G,M,U,J,q,p,S){const N=M/q,H=U/p,_=M/2,f=U/2,x=J/2,O=q+1,z=p+1;let j=0,X=0;const $=new F;for(let AA=0;AA<z;AA++){const DA=AA*H-f;for(let b=0;b<O;b++){const IA=b*N-_;$[w]=IA*l,$[h]=DA*G,$[n]=x,t.push($.x,$.y,$.z),$[w]=0,$[h]=0,$[n]=J>0?1:-1,e.push($.x,$.y,$.z),a.push(b/q),a.push(1-AA/p),j+=1}}for(let AA=0;AA<p;AA++)for(let DA=0;DA<q;DA++){const b=s+DA+O*AA,IA=s+DA+O*(AA+1),gA=s+(DA+1)+O*(AA+1),aA=s+(DA+1)+O*AA;o.push(b,IA,aA),o.push(IA,gA,aA),X+=6}i.addGroup(D,X,S),D+=X,s+=j}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new yg(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function yB(Q){const A={};for(const I in Q){A[I]={};for(const g in Q[I]){const C=Q[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?C.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function ZI(Q){const A={};for(let I=0;I<Q.length;I++){const g=yB(Q[I]);for(const C in g)A[C]=g[C]}return A}function en(Q){const A=[];for(let I=0;I<Q.length;I++)A.push(Q[I].clone());return A}function Da(Q){return Q.getRenderTarget()===null?Q.outputColorSpace:qg}const an={clone:yB,merge:ZI};var sn=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dn=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nC extends Bg{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sn,this.fragmentShader=Dn,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=yB(A.uniforms),this.uniformsGroups=en(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const E=this.uniforms[C].value;E&&E.isTexture?I.uniforms[C]={type:"t",value:E.toJSON(A).uuid}:E&&E.isColor?I.uniforms[C]={type:"c",value:E.getHex()}:E&&E.isVector2?I.uniforms[C]={type:"v2",value:E.toArray()}:E&&E.isVector3?I.uniforms[C]={type:"v3",value:E.toArray()}:E&&E.isVector4?I.uniforms[C]={type:"v4",value:E.toArray()}:E&&E.isMatrix3?I.uniforms[C]={type:"m3",value:E.toArray()}:E&&E.isMatrix4?I.uniforms[C]={type:"m4",value:E.toArray()}:I.uniforms[C]={value:E}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class na extends BI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new GA,this.projectionMatrix=new GA,this.projectionMatrixInverse=new GA,this.coordinateSystem=Wg}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(-I[8],-I[9],-I[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class xI extends na{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=lB*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(vB*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return lB*2*Math.atan(Math.tan(vB*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,I,g,C,B,E){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(vB*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,B=-.5*C;const E=this.view;if(this.view!==null&&this.view.enabled){const o=E.fullWidth,t=E.fullHeight;B+=E.offsetX*C/o,I-=E.offsetY*g/t,C*=E.width/o,g*=E.height/t}const i=this.filmOffset;i!==0&&(B+=A*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(B,B+C,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const gB=-90,CB=1;class nn extends BI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null;const C=new xI(gB,CB,A,I);C.layers=this.layers,this.add(C);const B=new xI(gB,CB,A,I);B.layers=this.layers,this.add(B);const E=new xI(gB,CB,A,I);E.layers=this.layers,this.add(E);const i=new xI(gB,CB,A,I);i.layers=this.layers,this.add(i);const o=new xI(gB,CB,A,I);o.layers=this.layers,this.add(o);const t=new xI(gB,CB,A,I);t.layers=this.layers,this.add(t)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,C,B,E,i,o]=I;for(const t of I)this.remove(t);if(A===Wg)g.up.set(0,1,0),g.lookAt(1,0,0),C.up.set(0,1,0),C.lookAt(-1,0,0),B.up.set(0,0,-1),B.lookAt(0,1,0),E.up.set(0,0,1),E.lookAt(0,-1,0),i.up.set(0,1,0),i.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===$Q)g.up.set(0,-1,0),g.lookAt(-1,0,0),C.up.set(0,-1,0),C.lookAt(1,0,0),B.up.set(0,0,1),B.lookAt(0,1,0),E.up.set(0,0,-1),E.lookAt(0,-1,0),i.up.set(0,-1,0),i.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const t of I)this.add(t),t.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const g=this.renderTarget;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[C,B,E,i,o,t]=this.children,e=A.getRenderTarget(),a=A.toneMapping,s=A.xr.enabled;A.toneMapping=Vg,A.xr.enabled=!1;const D=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0),A.render(I,C),A.setRenderTarget(g,1),A.render(I,B),A.setRenderTarget(g,2),A.render(I,E),A.setRenderTarget(g,3),A.render(I,i),A.setRenderTarget(g,4),A.render(I,o),g.texture.generateMipmaps=D,A.setRenderTarget(g,5),A.render(I,t),A.setRenderTarget(e),A.toneMapping=a,A.xr.enabled=s,g.texture.needsPMREMUpdate=!0}}class Co extends KI{constructor(A,I,g,C,B,E,i,o,t,e){A=A!==void 0?A:[],I=I!==void 0?I:wB,super(A,I,g,C,B,E,i,o,t,e),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class hn extends mC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];I.encoding!==void 0&&(PB("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),I.colorSpace=I.encoding===fC?NA:uC),this.texture=new Co(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:_I}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},C=new yg(5,5,5),B=new nC({name:"CubemapFromEquirect",uniforms:yB(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:$I,blending:eC});B.uniforms.tEquirect.value=I;const E=new tI(C,B),i=I.minFilter;return I.minFilter===HC&&(I.minFilter=_I),new nn(1,10,this).update(A,E),I.minFilter=i,E.geometry.dispose(),E.material.dispose(),this}clear(A,I,g,C){const B=A.getRenderTarget();for(let E=0;E<6;E++)A.setRenderTarget(this,E),A.clear(I,g,C);A.setRenderTarget(B)}}const oi=new F,rn=new F,cn=new TA;class RC{constructor(A=new F(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=oi.subVectors(g,I).cross(rn.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(oi),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const B=-(A.start.dot(this.normal)+this.constant)/C;return B<0||B>1?null:I.copy(A.start).addScaledVector(g,B)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||cn.getNormalMatrix(A),C=this.coplanarPoint(oi).applyMatrix4(A),B=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(B),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const KC=new Yg,dQ=new F;class Bo{constructor(A=new RC,I=new RC,g=new RC,C=new RC,B=new RC,E=new RC){this.planes=[A,I,g,C,B,E]}set(A,I,g,C,B,E){const i=this.planes;return i[0].copy(A),i[1].copy(I),i[2].copy(g),i[3].copy(C),i[4].copy(B),i[5].copy(E),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=Wg){const g=this.planes,C=A.elements,B=C[0],E=C[1],i=C[2],o=C[3],t=C[4],e=C[5],a=C[6],s=C[7],D=C[8],c=C[9],w=C[10],h=C[11],n=C[12],l=C[13],G=C[14],M=C[15];if(g[0].setComponents(o-B,s-t,h-D,M-n).normalize(),g[1].setComponents(o+B,s+t,h+D,M+n).normalize(),g[2].setComponents(o+E,s+e,h+c,M+l).normalize(),g[3].setComponents(o-E,s-e,h-c,M-l).normalize(),g[4].setComponents(o-i,s-a,h-w,M-G).normalize(),I===Wg)g[5].setComponents(o+i,s+a,h+w,M+G).normalize();else if(I===$Q)g[5].setComponents(i,a,w,G).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),KC.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),KC.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(KC)}intersectsSprite(A){return KC.center.set(0,0,0),KC.radius=.7071067811865476,KC.applyMatrix4(A.matrixWorld),this.intersectsSphere(KC)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let B=0;B<6;B++)if(I[B].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(dQ.x=C.normal.x>0?A.max.x:A.min.x,dQ.y=C.normal.y>0?A.max.y:A.min.y,dQ.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(dQ)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ha(){let Q=null,A=!1,I=null,g=null;function C(B,E){I(B,E),g=Q.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=Q.requestAnimationFrame(C),A=!0)},stop:function(){Q.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(B){I=B},setContext:function(B){Q=B}}}function wn(Q,A){const I=A.isWebGL2,g=new WeakMap;function C(t,e){const a=t.array,s=t.usage,D=Q.createBuffer();Q.bindBuffer(e,D),Q.bufferData(e,a,s),t.onUploadCallback();let c;if(a instanceof Float32Array)c=Q.FLOAT;else if(a instanceof Uint16Array)if(t.isFloat16BufferAttribute)if(I)c=Q.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else c=Q.UNSIGNED_SHORT;else if(a instanceof Int16Array)c=Q.SHORT;else if(a instanceof Uint32Array)c=Q.UNSIGNED_INT;else if(a instanceof Int32Array)c=Q.INT;else if(a instanceof Int8Array)c=Q.BYTE;else if(a instanceof Uint8Array)c=Q.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)c=Q.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:D,type:c,bytesPerElement:a.BYTES_PER_ELEMENT,version:t.version}}function B(t,e,a){const s=e.array,D=e.updateRange;Q.bindBuffer(a,t),D.count===-1?Q.bufferSubData(a,0,s):(I?Q.bufferSubData(a,D.offset*s.BYTES_PER_ELEMENT,s,D.offset,D.count):Q.bufferSubData(a,D.offset*s.BYTES_PER_ELEMENT,s.subarray(D.offset,D.offset+D.count)),D.count=-1),e.onUploadCallback()}function E(t){return t.isInterleavedBufferAttribute&&(t=t.data),g.get(t)}function i(t){t.isInterleavedBufferAttribute&&(t=t.data);const e=g.get(t);e&&(Q.deleteBuffer(e.buffer),g.delete(t))}function o(t,e){if(t.isGLBufferAttribute){const s=g.get(t);(!s||s.version<t.version)&&g.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version});return}t.isInterleavedBufferAttribute&&(t=t.data);const a=g.get(t);a===void 0?g.set(t,C(t,e)):a.version<t.version&&(B(a.buffer,t,e),a.version=t.version)}return{get:E,remove:i,update:o}}class zB extends jI{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const B=A/2,E=I/2,i=Math.floor(g),o=Math.floor(C),t=i+1,e=o+1,a=A/i,s=I/o,D=[],c=[],w=[],h=[];for(let n=0;n<e;n++){const l=n*s-E;for(let G=0;G<t;G++){const M=G*a-B;c.push(M,-l,0),w.push(0,0,1),h.push(G/i),h.push(1-n/o)}}for(let n=0;n<o;n++)for(let l=0;l<i;l++){const G=l+t*n,M=l+t*(n+1),U=l+1+t*(n+1),J=l+1+t*n;D.push(G,M,J),D.push(M,U,J)}this.setIndex(D),this.setAttribute("position",new SI(c,3)),this.setAttribute("normal",new SI(w,3)),this.setAttribute("uv",new SI(h,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new zB(A.width,A.height,A.widthSegments,A.heightSegments)}}var Gn=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sn=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kn=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ln=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yn=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mn=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Un="vec3 transformed = vec3( position );",Nn=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kn=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jn=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fn=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rn=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,qn=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pn=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dn=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ln=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yn=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fn=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,un=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hn=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mn=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tn=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xn=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,On=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bn=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vn=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zn="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pn=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wn=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jn=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vn=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_n=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xn=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zn=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$n=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ah=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ih=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ch=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ih=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,oh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,th=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ah=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,nh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ch=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,wh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lh=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,yh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Rh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ph=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,dh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,mh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Th=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Oh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ph=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_h=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Xh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$h=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ar=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ir=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,gr=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cr=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Br=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qr=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Er=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ir=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,or=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tr=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,er=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ar=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sr=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Dr=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nr=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hr=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rr=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cr=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wr=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gr=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sr=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kr=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,lr=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yr=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mr=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ur=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nr=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kr=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jr=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fr=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rr=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qr=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pr=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dr=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lr=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yr=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fr=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ur=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hr=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mr=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tr=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xr=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Or=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,br=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vr=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zr=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pr=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wr=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,mA={alphamap_fragment:Gn,alphamap_pars_fragment:Sn,alphatest_fragment:kn,alphatest_pars_fragment:ln,aomap_fragment:yn,aomap_pars_fragment:Mn,begin_vertex:Un,beginnormal_vertex:Nn,bsdfs:Kn,iridescence_fragment:Jn,bumpmap_pars_fragment:Fn,clipping_planes_fragment:Rn,clipping_planes_pars_fragment:qn,clipping_planes_pars_vertex:pn,clipping_planes_vertex:dn,color_fragment:Ln,color_pars_fragment:Yn,color_pars_vertex:fn,color_vertex:un,common:Hn,cube_uv_reflection_fragment:mn,defaultnormal_vertex:Tn,displacementmap_pars_vertex:xn,displacementmap_vertex:On,emissivemap_fragment:bn,emissivemap_pars_fragment:vn,encodings_fragment:Zn,encodings_pars_fragment:Pn,envmap_fragment:Wn,envmap_common_pars_fragment:jn,envmap_pars_fragment:Vn,envmap_pars_vertex:_n,envmap_physical_pars_fragment:oh,envmap_vertex:Xn,fog_vertex:zn,fog_pars_vertex:$n,fog_fragment:Ah,fog_pars_fragment:Ih,gradientmap_pars_fragment:gh,lightmap_fragment:Ch,lightmap_pars_fragment:Bh,lights_lambert_fragment:Qh,lights_lambert_pars_fragment:Eh,lights_pars_begin:ih,lights_toon_fragment:th,lights_toon_pars_fragment:eh,lights_phong_fragment:ah,lights_phong_pars_fragment:sh,lights_physical_fragment:Dh,lights_physical_pars_fragment:nh,lights_fragment_begin:hh,lights_fragment_maps:rh,lights_fragment_end:ch,logdepthbuf_fragment:wh,logdepthbuf_pars_fragment:Gh,logdepthbuf_pars_vertex:Sh,logdepthbuf_vertex:kh,map_fragment:lh,map_pars_fragment:yh,map_particle_fragment:Mh,map_particle_pars_fragment:Uh,metalnessmap_fragment:Nh,metalnessmap_pars_fragment:Kh,morphcolor_vertex:Jh,morphnormal_vertex:Fh,morphtarget_pars_vertex:Rh,morphtarget_vertex:qh,normal_fragment_begin:ph,normal_fragment_maps:dh,normal_pars_fragment:Lh,normal_pars_vertex:Yh,normal_vertex:fh,normalmap_pars_fragment:uh,clearcoat_normal_fragment_begin:Hh,clearcoat_normal_fragment_maps:mh,clearcoat_pars_fragment:Th,iridescence_pars_fragment:xh,output_fragment:Oh,packing:bh,premultiplied_alpha_fragment:vh,project_vertex:Zh,dithering_fragment:Ph,dithering_pars_fragment:Wh,roughnessmap_fragment:jh,roughnessmap_pars_fragment:Vh,shadowmap_pars_fragment:_h,shadowmap_pars_vertex:Xh,shadowmap_vertex:zh,shadowmask_pars_fragment:$h,skinbase_vertex:Ar,skinning_pars_vertex:Ir,skinning_vertex:gr,skinnormal_vertex:Cr,specularmap_fragment:Br,specularmap_pars_fragment:Qr,tonemapping_fragment:Er,tonemapping_pars_fragment:ir,transmission_fragment:or,transmission_pars_fragment:tr,uv_pars_fragment:er,uv_pars_vertex:ar,uv_vertex:sr,worldpos_vertex:Dr,background_vert:nr,background_frag:hr,backgroundCube_vert:rr,backgroundCube_frag:cr,cube_vert:wr,cube_frag:Gr,depth_vert:Sr,depth_frag:kr,distanceRGBA_vert:lr,distanceRGBA_frag:yr,equirect_vert:Mr,equirect_frag:Ur,linedashed_vert:Nr,linedashed_frag:Kr,meshbasic_vert:Jr,meshbasic_frag:Fr,meshlambert_vert:Rr,meshlambert_frag:qr,meshmatcap_vert:pr,meshmatcap_frag:dr,meshnormal_vert:Lr,meshnormal_frag:Yr,meshphong_vert:fr,meshphong_frag:ur,meshphysical_vert:Hr,meshphysical_frag:mr,meshtoon_vert:Tr,meshtoon_frag:xr,points_vert:Or,points_frag:br,shadow_vert:vr,shadow_frag:Zr,sprite_vert:Pr,sprite_frag:Wr},EA={common:{diffuse:{value:new hA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new TA},alphaMap:{value:null},alphaMapTransform:{value:new TA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new TA}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new TA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new TA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new TA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new TA},normalScale:{value:new xA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new TA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new TA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new TA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new TA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new hA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new hA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new TA},alphaTest:{value:0},uvTransform:{value:new TA}},sprite:{diffuse:{value:new hA(16777215)},opacity:{value:1},center:{value:new xA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new TA},alphaMap:{value:null},alphaMapTransform:{value:new TA},alphaTest:{value:0}}},Jg={basic:{uniforms:ZI([EA.common,EA.specularmap,EA.envmap,EA.aomap,EA.lightmap,EA.fog]),vertexShader:mA.meshbasic_vert,fragmentShader:mA.meshbasic_frag},lambert:{uniforms:ZI([EA.common,EA.specularmap,EA.envmap,EA.aomap,EA.lightmap,EA.emissivemap,EA.bumpmap,EA.normalmap,EA.displacementmap,EA.fog,EA.lights,{emissive:{value:new hA(0)}}]),vertexShader:mA.meshlambert_vert,fragmentShader:mA.meshlambert_frag},phong:{uniforms:ZI([EA.common,EA.specularmap,EA.envmap,EA.aomap,EA.lightmap,EA.emissivemap,EA.bumpmap,EA.normalmap,EA.displacementmap,EA.fog,EA.lights,{emissive:{value:new hA(0)},specular:{value:new hA(1118481)},shininess:{value:30}}]),vertexShader:mA.meshphong_vert,fragmentShader:mA.meshphong_frag},standard:{uniforms:ZI([EA.common,EA.envmap,EA.aomap,EA.lightmap,EA.emissivemap,EA.bumpmap,EA.normalmap,EA.displacementmap,EA.roughnessmap,EA.metalnessmap,EA.fog,EA.lights,{emissive:{value:new hA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mA.meshphysical_vert,fragmentShader:mA.meshphysical_frag},toon:{uniforms:ZI([EA.common,EA.aomap,EA.lightmap,EA.emissivemap,EA.bumpmap,EA.normalmap,EA.displacementmap,EA.gradientmap,EA.fog,EA.lights,{emissive:{value:new hA(0)}}]),vertexShader:mA.meshtoon_vert,fragmentShader:mA.meshtoon_frag},matcap:{uniforms:ZI([EA.common,EA.bumpmap,EA.normalmap,EA.displacementmap,EA.fog,{matcap:{value:null}}]),vertexShader:mA.meshmatcap_vert,fragmentShader:mA.meshmatcap_frag},points:{uniforms:ZI([EA.points,EA.fog]),vertexShader:mA.points_vert,fragmentShader:mA.points_frag},dashed:{uniforms:ZI([EA.common,EA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mA.linedashed_vert,fragmentShader:mA.linedashed_frag},depth:{uniforms:ZI([EA.common,EA.displacementmap]),vertexShader:mA.depth_vert,fragmentShader:mA.depth_frag},normal:{uniforms:ZI([EA.common,EA.bumpmap,EA.normalmap,EA.displacementmap,{opacity:{value:1}}]),vertexShader:mA.meshnormal_vert,fragmentShader:mA.meshnormal_frag},sprite:{uniforms:ZI([EA.sprite,EA.fog]),vertexShader:mA.sprite_vert,fragmentShader:mA.sprite_frag},background:{uniforms:{uvTransform:{value:new TA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mA.background_vert,fragmentShader:mA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:mA.backgroundCube_vert,fragmentShader:mA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mA.cube_vert,fragmentShader:mA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mA.equirect_vert,fragmentShader:mA.equirect_frag},distanceRGBA:{uniforms:ZI([EA.common,EA.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mA.distanceRGBA_vert,fragmentShader:mA.distanceRGBA_frag},shadow:{uniforms:ZI([EA.lights,EA.fog,{color:{value:new hA(0)},opacity:{value:1}}]),vertexShader:mA.shadow_vert,fragmentShader:mA.shadow_frag}};Jg.physical={uniforms:ZI([Jg.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new TA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new TA},clearcoatNormalScale:{value:new xA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new TA},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new TA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new TA},sheen:{value:0},sheenColor:{value:new hA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new TA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new TA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new TA},transmissionSamplerSize:{value:new xA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new TA},attenuationDistance:{value:0},attenuationColor:{value:new hA(0)},specularColor:{value:new hA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new TA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new TA},anisotropyVector:{value:new xA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new TA}}]),vertexShader:mA.meshphysical_vert,fragmentShader:mA.meshphysical_frag};const LQ={r:0,b:0,g:0};function jr(Q,A,I,g,C,B,E){const i=new hA(0);let o=B===!0?0:1,t,e,a=null,s=0,D=null;function c(h,n){let l=!1,G=n.isScene===!0?n.background:null;switch(G&&G.isTexture&&(G=(n.backgroundBlurriness>0?I:A).get(G)),G===null?w(i,o):G&&G.isColor&&(w(G,1),l=!0),Q.xr.getEnvironmentBlendMode()){case"opaque":l=!0;break;case"additive":g.buffers.color.setClear(0,0,0,1,E),l=!0;break;case"alpha-blend":g.buffers.color.setClear(0,0,0,0,E),l=!0;break}(Q.autoClear||l)&&Q.clear(Q.autoClearColor,Q.autoClearDepth,Q.autoClearStencil),G&&(G.isCubeTexture||G.mapping===cE)?(e===void 0&&(e=new tI(new yg(1,1,1),new nC({name:"BackgroundCubeMaterial",uniforms:yB(Jg.backgroundCube.uniforms),vertexShader:Jg.backgroundCube.vertexShader,fragmentShader:Jg.backgroundCube.fragmentShader,side:$I,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),e.geometry.deleteAttribute("uv"),e.onBeforeRender=function(J,q,p){this.matrixWorld.copyPosition(p.matrixWorld)},Object.defineProperty(e.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(e)),e.material.uniforms.envMap.value=G,e.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,e.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,e.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,e.material.toneMapped=G.colorSpace!==NA,(a!==G||s!==G.version||D!==Q.toneMapping)&&(e.material.needsUpdate=!0,a=G,s=G.version,D=Q.toneMapping),e.layers.enableAll(),h.unshift(e,e.geometry,e.material,0,0,null)):G&&G.isTexture&&(t===void 0&&(t=new tI(new zB(2,2),new nC({name:"BackgroundMaterial",uniforms:yB(Jg.background.uniforms),vertexShader:Jg.background.vertexShader,fragmentShader:Jg.background.fragmentShader,side:_g,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),Object.defineProperty(t.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(t)),t.material.uniforms.t2D.value=G,t.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,t.material.toneMapped=G.colorSpace!==NA,G.matrixAutoUpdate===!0&&G.updateMatrix(),t.material.uniforms.uvTransform.value.copy(G.matrix),(a!==G||s!==G.version||D!==Q.toneMapping)&&(t.material.needsUpdate=!0,a=G,s=G.version,D=Q.toneMapping),t.layers.enableAll(),h.unshift(t,t.geometry,t.material,0,0,null))}function w(h,n){h.getRGB(LQ,Da(Q)),g.buffers.color.setClear(LQ.r,LQ.g,LQ.b,n,E)}return{getClearColor:function(){return i},setClearColor:function(h,n=1){i.set(h),o=n,w(i,o)},getClearAlpha:function(){return o},setClearAlpha:function(h){o=h,w(i,o)},render:c}}function Vr(Q,A,I,g){const C=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),B=g.isWebGL2?null:A.get("OES_vertex_array_object"),E=g.isWebGL2||B!==null,i={},o=h(null);let t=o,e=!1;function a(x,O,z,j,X){let $=!1;if(E){const AA=w(j,z,O);t!==AA&&(t=AA,D(t.object)),$=n(x,j,z,X),$&&l(x,j,z,X)}else{const AA=O.wireframe===!0;(t.geometry!==j.id||t.program!==z.id||t.wireframe!==AA)&&(t.geometry=j.id,t.program=z.id,t.wireframe=AA,$=!0)}X!==null&&I.update(X,Q.ELEMENT_ARRAY_BUFFER),($||e)&&(e=!1,p(x,O,z,j),X!==null&&Q.bindBuffer(Q.ELEMENT_ARRAY_BUFFER,I.get(X).buffer))}function s(){return g.isWebGL2?Q.createVertexArray():B.createVertexArrayOES()}function D(x){return g.isWebGL2?Q.bindVertexArray(x):B.bindVertexArrayOES(x)}function c(x){return g.isWebGL2?Q.deleteVertexArray(x):B.deleteVertexArrayOES(x)}function w(x,O,z){const j=z.wireframe===!0;let X=i[x.id];X===void 0&&(X={},i[x.id]=X);let $=X[O.id];$===void 0&&($={},X[O.id]=$);let AA=$[j];return AA===void 0&&(AA=h(s()),$[j]=AA),AA}function h(x){const O=[],z=[],j=[];for(let X=0;X<C;X++)O[X]=0,z[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:j,object:x,attributes:{},index:null}}function n(x,O,z,j){const X=t.attributes,$=O.attributes;let AA=0;const DA=z.getAttributes();for(const b in DA)if(DA[b].location>=0){const gA=X[b];let aA=$[b];if(aA===void 0&&(b==="instanceMatrix"&&x.instanceMatrix&&(aA=x.instanceMatrix),b==="instanceColor"&&x.instanceColor&&(aA=x.instanceColor)),gA===void 0||gA.attribute!==aA||aA&&gA.data!==aA.data)return!0;AA++}return t.attributesNum!==AA||t.index!==j}function l(x,O,z,j){const X={},$=O.attributes;let AA=0;const DA=z.getAttributes();for(const b in DA)if(DA[b].location>=0){let gA=$[b];gA===void 0&&(b==="instanceMatrix"&&x.instanceMatrix&&(gA=x.instanceMatrix),b==="instanceColor"&&x.instanceColor&&(gA=x.instanceColor));const aA={};aA.attribute=gA,gA&&gA.data&&(aA.data=gA.data),X[b]=aA,AA++}t.attributes=X,t.attributesNum=AA,t.index=j}function G(){const x=t.newAttributes;for(let O=0,z=x.length;O<z;O++)x[O]=0}function M(x){U(x,0)}function U(x,O){const z=t.newAttributes,j=t.enabledAttributes,X=t.attributeDivisors;z[x]=1,j[x]===0&&(Q.enableVertexAttribArray(x),j[x]=1),X[x]!==O&&((g.isWebGL2?Q:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](x,O),X[x]=O)}function J(){const x=t.newAttributes,O=t.enabledAttributes;for(let z=0,j=O.length;z<j;z++)O[z]!==x[z]&&(Q.disableVertexAttribArray(z),O[z]=0)}function q(x,O,z,j,X,$,AA){AA===!0?Q.vertexAttribIPointer(x,O,z,X,$):Q.vertexAttribPointer(x,O,z,j,X,$)}function p(x,O,z,j){if(g.isWebGL2===!1&&(x.isInstancedMesh||j.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;G();const X=j.attributes,$=z.getAttributes(),AA=O.defaultAttributeValues;for(const DA in $){const b=$[DA];if(b.location>=0){let IA=X[DA];if(IA===void 0&&(DA==="instanceMatrix"&&x.instanceMatrix&&(IA=x.instanceMatrix),DA==="instanceColor"&&x.instanceColor&&(IA=x.instanceColor)),IA!==void 0){const gA=IA.normalized,aA=IA.itemSize,sA=I.get(IA);if(sA===void 0)continue;const kA=sA.buffer,YA=sA.type,RA=sA.bytesPerElement,qI=g.isWebGL2===!0&&(YA===Q.INT||YA===Q.UNSIGNED_INT||IA.gpuType===_e);if(IA.isInterleavedBufferAttribute){const _A=IA.data,m=_A.stride,fI=IA.offset;if(_A.isInstancedInterleavedBuffer){for(let JA=0;JA<b.locationSize;JA++)U(b.location+JA,_A.meshPerAttribute);x.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=_A.meshPerAttribute*_A.count)}else for(let JA=0;JA<b.locationSize;JA++)M(b.location+JA);Q.bindBuffer(Q.ARRAY_BUFFER,kA);for(let JA=0;JA<b.locationSize;JA++)q(b.location+JA,aA/b.locationSize,YA,gA,m*RA,(fI+aA/b.locationSize*JA)*RA,qI)}else{if(IA.isInstancedBufferAttribute){for(let _A=0;_A<b.locationSize;_A++)U(b.location+_A,IA.meshPerAttribute);x.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=IA.meshPerAttribute*IA.count)}else for(let _A=0;_A<b.locationSize;_A++)M(b.location+_A);Q.bindBuffer(Q.ARRAY_BUFFER,kA);for(let _A=0;_A<b.locationSize;_A++)q(b.location+_A,aA/b.locationSize,YA,gA,aA*RA,aA/b.locationSize*_A*RA,qI)}}else if(AA!==void 0){const gA=AA[DA];if(gA!==void 0)switch(gA.length){case 2:Q.vertexAttrib2fv(b.location,gA);break;case 3:Q.vertexAttrib3fv(b.location,gA);break;case 4:Q.vertexAttrib4fv(b.location,gA);break;default:Q.vertexAttrib1fv(b.location,gA)}}}}J()}function S(){_();for(const x in i){const O=i[x];for(const z in O){const j=O[z];for(const X in j)c(j[X].object),delete j[X];delete O[z]}delete i[x]}}function N(x){if(i[x.id]===void 0)return;const O=i[x.id];for(const z in O){const j=O[z];for(const X in j)c(j[X].object),delete j[X];delete O[z]}delete i[x.id]}function H(x){for(const O in i){const z=i[O];if(z[x.id]===void 0)continue;const j=z[x.id];for(const X in j)c(j[X].object),delete j[X];delete z[x.id]}}function _(){f(),e=!0,t!==o&&(t=o,D(t.object))}function f(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:_,resetDefaultState:f,dispose:S,releaseStatesOfGeometry:N,releaseStatesOfProgram:H,initAttributes:G,enableAttribute:M,disableUnusedAttributes:J}}function _r(Q,A,I,g){const C=g.isWebGL2;let B;function E(t){B=t}function i(t,e){Q.drawArrays(B,t,e),I.update(e,B,1)}function o(t,e,a){if(a===0)return;let s,D;if(C)s=Q,D="drawArraysInstanced";else if(s=A.get("ANGLE_instanced_arrays"),D="drawArraysInstancedANGLE",s===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}s[D](B,t,e,a),I.update(e,B,a)}this.setMode=E,this.render=i,this.renderInstances=o}function Xr(Q,A,I){let g;function C(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const q=A.get("EXT_texture_filter_anisotropic");g=Q.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function B(q){if(q==="highp"){if(Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.HIGH_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.HIGH_FLOAT).precision>0)return"highp";q="mediump"}return q==="mediump"&&Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.MEDIUM_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const E=typeof WebGL2RenderingContext<"u"&&Q.constructor.name==="WebGL2RenderingContext";let i=I.precision!==void 0?I.precision:"highp";const o=B(i);o!==i&&(console.warn("THREE.WebGLRenderer:",i,"not supported, using",o,"instead."),i=o);const t=E||A.has("WEBGL_draw_buffers"),e=I.logarithmicDepthBuffer===!0,a=Q.getParameter(Q.MAX_TEXTURE_IMAGE_UNITS),s=Q.getParameter(Q.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=Q.getParameter(Q.MAX_TEXTURE_SIZE),c=Q.getParameter(Q.MAX_CUBE_MAP_TEXTURE_SIZE),w=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),h=Q.getParameter(Q.MAX_VERTEX_UNIFORM_VECTORS),n=Q.getParameter(Q.MAX_VARYING_VECTORS),l=Q.getParameter(Q.MAX_FRAGMENT_UNIFORM_VECTORS),G=s>0,M=E||A.has("OES_texture_float"),U=G&&M,J=E?Q.getParameter(Q.MAX_SAMPLES):0;return{isWebGL2:E,drawBuffers:t,getMaxAnisotropy:C,getMaxPrecision:B,precision:i,logarithmicDepthBuffer:e,maxTextures:a,maxVertexTextures:s,maxTextureSize:D,maxCubemapSize:c,maxAttributes:w,maxVertexUniforms:h,maxVaryings:n,maxFragmentUniforms:l,vertexTextures:G,floatFragmentTextures:M,floatVertexTextures:U,maxSamples:J}}function zr(Q){const A=this;let I=null,g=0,C=!1,B=!1;const E=new RC,i=new TA,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,s){const D=a.length!==0||s||g!==0||C;return C=s,g=a.length,D},this.beginShadows=function(){B=!0,e(null)},this.endShadows=function(){B=!1},this.setGlobalState=function(a,s){I=e(a,s,0)},this.setState=function(a,s,D){const c=a.clippingPlanes,w=a.clipIntersection,h=a.clipShadows,n=Q.get(a);if(!C||c===null||c.length===0||B&&!h)B?e(null):t();else{const l=B?0:g,G=l*4;let M=n.clippingState||null;o.value=M,M=e(c,s,G,D);for(let U=0;U!==G;++U)M[U]=I[U];n.clippingState=M,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=l}};function t(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function e(a,s,D,c){const w=a!==null?a.length:0;let h=null;if(w!==0){if(h=o.value,c!==!0||h===null){const n=D+w*4,l=s.matrixWorldInverse;i.getNormalMatrix(l),(h===null||h.length<n)&&(h=new Float32Array(n));for(let G=0,M=D;G!==w;++G,M+=4)E.copy(a[G]).applyMatrix4(l,i),E.normal.toArray(h,M),h[M+3]=E.constant}o.value=h,o.needsUpdate=!0}return A.numPlanes=w,A.numIntersection=0,h}}function $r(Q){let A=new WeakMap;function I(E,i){return i===XQ?E.mapping=wB:i===Fi&&(E.mapping=GB),E}function g(E){if(E&&E.isTexture&&E.isRenderTargetTexture===!1){const i=E.mapping;if(i===XQ||i===Fi)if(A.has(E)){const o=A.get(E).texture;return I(o,E.mapping)}else{const o=E.image;if(o&&o.height>0){const t=new hn(o.height/2);return t.fromEquirectangularTexture(Q,E),A.set(E,t),E.addEventListener("dispose",C),I(t.texture,E.mapping)}else return null}}return E}function C(E){const i=E.target;i.removeEventListener("dispose",C);const o=A.get(i);o!==void 0&&(A.delete(i),o.dispose())}function B(){A=new WeakMap}return{get:g,dispose:B}}class GE extends na{constructor(A=-1,I=1,g=1,C=-1,B=.1,E=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=B,this.far=E,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,B,E){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let B=g-A,E=g+A,i=C+I,o=C-I;if(this.view!==null&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom;B+=t*this.view.offsetX,E=B+t*this.view.width,i-=e*this.view.offsetY,o=i-e*this.view.height}this.projectionMatrix.makeOrthographic(B,E,i,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const aB=4,Ht=[.125,.215,.35,.446,.526,.582],pC=20,ti=new GE,mt=new hA;let ei=null;const qC=(1+Math.sqrt(5))/2,BB=1/qC,Tt=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,qC,BB),new F(0,qC,-BB),new F(BB,0,qC),new F(-BB,0,qC),new F(qC,BB,0),new F(-qC,BB,0)];class xt{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){ei=this._renderer.getRenderTarget(),this._setSize(256);const B=this._allocateTargets();return B.depthBuffer=!0,this._sceneToCubeUV(A,g,C,B),I>0&&this._blur(B,0,0,I),this._applyPMREM(B),this._cleanup(B),B}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vt(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bt(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(ei),A.scissorTest=!1,YQ(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===wB||A.mapping===GB?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),ei=this._renderer.getRenderTarget();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:_I,minFilter:_I,generateMipmaps:!1,type:VB,format:tg,colorSpace:qg,depthBuffer:!1},C=Ot(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ot(A,I,g);const{_lodMax:B}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ac(B)),this._blurMaterial=Ic(B,A,I)}return C}_compileMaterial(A){const I=new tI(this._lodPlanes[0],A);this._renderer.compile(I,ti)}_sceneToCubeUV(A,I,g,C){const i=new xI(90,1,I,g),o=[1,-1,1,1,1,1],t=[1,1,1,-1,-1,-1],e=this._renderer,a=e.autoClear,s=e.toneMapping;e.getClearColor(mt),e.toneMapping=Vg,e.autoClear=!1;const D=new PI({name:"PMREM.Background",side:$I,depthWrite:!1,depthTest:!1}),c=new tI(new yg,D);let w=!1;const h=A.background;h?h.isColor&&(D.color.copy(h),A.background=null,w=!0):(D.color.copy(mt),w=!0);for(let n=0;n<6;n++){const l=n%3;l===0?(i.up.set(0,o[n],0),i.lookAt(t[n],0,0)):l===1?(i.up.set(0,0,o[n]),i.lookAt(0,t[n],0)):(i.up.set(0,o[n],0),i.lookAt(0,0,t[n]));const G=this._cubeSize;YQ(C,l*G,n>2?G:0,G,G),e.setRenderTarget(C),w&&e.render(c,i),e.render(A,i)}c.geometry.dispose(),c.material.dispose(),e.toneMapping=s,e.autoClear=a,A.background=h}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===wB||A.mapping===GB;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=vt()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bt());const B=C?this._cubemapMaterial:this._equirectMaterial,E=new tI(this._lodPlanes[0],B),i=B.uniforms;i.envMap.value=A;const o=this._cubeSize;YQ(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(E,ti)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let C=1;C<this._lodPlanes.length;C++){const B=Math.sqrt(this._sigmas[C]*this._sigmas[C]-this._sigmas[C-1]*this._sigmas[C-1]),E=Tt[(C-1)%Tt.length];this._blur(A,C-1,C,B,E)}I.autoClear=g}_blur(A,I,g,C,B){const E=this._pingPongRenderTarget;this._halfBlur(A,E,I,g,C,"latitudinal",B),this._halfBlur(E,A,g,g,C,"longitudinal",B)}_halfBlur(A,I,g,C,B,E,i){const o=this._renderer,t=this._blurMaterial;E!=="latitudinal"&&E!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const e=3,a=new tI(this._lodPlanes[C],t),s=t.uniforms,D=this._sizeLods[g]-1,c=isFinite(B)?Math.PI/(2*D):2*Math.PI/(2*pC-1),w=B/c,h=isFinite(B)?1+Math.floor(e*w):pC;h>pC&&console.warn(`sigmaRadians, ${B}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${pC}`);const n=[];let l=0;for(let q=0;q<pC;++q){const p=q/w,S=Math.exp(-p*p/2);n.push(S),q===0?l+=S:q<h&&(l+=2*S)}for(let q=0;q<n.length;q++)n[q]=n[q]/l;s.envMap.value=A.texture,s.samples.value=h,s.weights.value=n,s.latitudinal.value=E==="latitudinal",i&&(s.poleAxis.value=i);const{_lodMax:G}=this;s.dTheta.value=c,s.mipInt.value=G-g;const M=this._sizeLods[C],U=3*M*(C>G-aB?C-G+aB:0),J=4*(this._cubeSize-M);YQ(I,U,J,3*M,2*M),o.setRenderTarget(I),o.render(a,ti)}}function Ac(Q){const A=[],I=[],g=[];let C=Q;const B=Q-aB+1+Ht.length;for(let E=0;E<B;E++){const i=Math.pow(2,C);I.push(i);let o=1/i;E>Q-aB?o=Ht[E-Q+aB-1]:E===0&&(o=0),g.push(o);const t=1/(i-2),e=-t,a=1+t,s=[e,e,a,e,a,a,e,e,a,a,e,a],D=6,c=6,w=3,h=2,n=1,l=new Float32Array(w*c*D),G=new Float32Array(h*c*D),M=new Float32Array(n*c*D);for(let J=0;J<D;J++){const q=J%3*2/3-1,p=J>2?0:-1,S=[q,p,0,q+2/3,p,0,q+2/3,p+1,0,q,p,0,q+2/3,p+1,0,q,p+1,0];l.set(S,w*c*J),G.set(s,h*c*J);const N=[J,J,J,J,J,J];M.set(N,n*c*J)}const U=new jI;U.setAttribute("position",new WI(l,w)),U.setAttribute("uv",new WI(G,h)),U.setAttribute("faceIndex",new WI(M,n)),A.push(U),C>aB&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function Ot(Q,A,I){const g=new mC(Q,A,I);return g.texture.mapping=cE,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function YQ(Q,A,I,g,C){Q.viewport.set(A,I,g,C),Q.scissor.set(A,I,g,C)}function Ic(Q,A,I){const g=new Float32Array(pC),C=new F(0,1,0);return new nC({name:"SphericalGaussianBlur",defines:{n:pC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${Q}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:eC,depthTest:!1,depthWrite:!1})}function bt(){return new nC({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:eC,depthTest:!1,depthWrite:!1})}function vt(){return new nC({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:eC,depthTest:!1,depthWrite:!1})}function Qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gc(Q){let A=new WeakMap,I=null;function g(i){if(i&&i.isTexture){const o=i.mapping,t=o===XQ||o===Fi,e=o===wB||o===GB;if(t||e)if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let a=A.get(i);return I===null&&(I=new xt(Q)),a=t?I.fromEquirectangular(i,a):I.fromCubemap(i,a),A.set(i,a),a.texture}else{if(A.has(i))return A.get(i).texture;{const a=i.image;if(t&&a&&a.height>0||e&&a&&C(a)){I===null&&(I=new xt(Q));const s=t?I.fromEquirectangular(i):I.fromCubemap(i);return A.set(i,s),i.addEventListener("dispose",B),s.texture}else return null}}}return i}function C(i){let o=0;const t=6;for(let e=0;e<t;e++)i[e]!==void 0&&o++;return o===t}function B(i){const o=i.target;o.removeEventListener("dispose",B);const t=A.get(o);t!==void 0&&(A.delete(o),t.dispose())}function E(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:E}}function Cc(Q){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=Q.getExtension("WEBGL_depth_texture")||Q.getExtension("MOZ_WEBGL_depth_texture")||Q.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=Q.getExtension("EXT_texture_filter_anisotropic")||Q.getExtension("MOZ_EXT_texture_filter_anisotropic")||Q.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=Q.getExtension("WEBGL_compressed_texture_s3tc")||Q.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=Q.getExtension("WEBGL_compressed_texture_pvrtc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=Q.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?I("EXT_color_buffer_float"):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const C=I(g);return C===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function Bc(Q,A,I,g){const C={},B=new WeakMap;function E(a){const s=a.target;s.index!==null&&A.remove(s.index);for(const c in s.attributes)A.remove(s.attributes[c]);for(const c in s.morphAttributes){const w=s.morphAttributes[c];for(let h=0,n=w.length;h<n;h++)A.remove(w[h])}s.removeEventListener("dispose",E),delete C[s.id];const D=B.get(s);D&&(A.remove(D),B.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function i(a,s){return C[s.id]===!0||(s.addEventListener("dispose",E),C[s.id]=!0,I.memory.geometries++),s}function o(a){const s=a.attributes;for(const c in s)A.update(s[c],Q.ARRAY_BUFFER);const D=a.morphAttributes;for(const c in D){const w=D[c];for(let h=0,n=w.length;h<n;h++)A.update(w[h],Q.ARRAY_BUFFER)}}function t(a){const s=[],D=a.index,c=a.attributes.position;let w=0;if(D!==null){const l=D.array;w=D.version;for(let G=0,M=l.length;G<M;G+=3){const U=l[G+0],J=l[G+1],q=l[G+2];s.push(U,J,J,q,q,U)}}else{const l=c.array;w=c.version;for(let G=0,M=l.length/3-1;G<M;G+=3){const U=G+0,J=G+1,q=G+2;s.push(U,J,J,q,q,U)}}const h=new(Ea(s)?sa:go)(s,1);h.version=w;const n=B.get(a);n&&A.remove(n),B.set(a,h)}function e(a){const s=B.get(a);if(s){const D=a.index;D!==null&&s.version<D.version&&t(a)}else t(a);return B.get(a)}return{get:i,update:o,getWireframeAttribute:e}}function Qc(Q,A,I,g){const C=g.isWebGL2;let B;function E(s){B=s}let i,o;function t(s){i=s.type,o=s.bytesPerElement}function e(s,D){Q.drawElements(B,D,i,s*o),I.update(D,B,1)}function a(s,D,c){if(c===0)return;let w,h;if(C)w=Q,h="drawElementsInstanced";else if(w=A.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",w===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}w[h](B,D,i,s*o,c),I.update(D,B,c)}this.setMode=E,this.setIndex=t,this.render=e,this.renderInstances=a}function Ec(Q){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(B,E,i){switch(I.calls++,E){case Q.TRIANGLES:I.triangles+=i*(B/3);break;case Q.LINES:I.lines+=i*(B/2);break;case Q.LINE_STRIP:I.lines+=i*(B-1);break;case Q.LINE_LOOP:I.lines+=i*B;break;case Q.POINTS:I.points+=i*B;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",E);break}}function C(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function ic(Q,A){return Q[0]-A[0]}function oc(Q,A){return Math.abs(A[1])-Math.abs(Q[1])}function tc(Q,A,I){const g={},C=new Float32Array(8),B=new WeakMap,E=new II,i=[];for(let t=0;t<8;t++)i[t]=[t,0];function o(t,e,a){const s=t.morphTargetInfluences;if(A.isWebGL2===!0){const D=e.morphAttributes.position||e.morphAttributes.normal||e.morphAttributes.color,c=D!==void 0?D.length:0;let w=B.get(e);if(w===void 0||w.count!==c){let x=function(){_.dispose(),B.delete(e),e.removeEventListener("dispose",x)};w!==void 0&&w.texture.dispose();const l=e.morphAttributes.position!==void 0,G=e.morphAttributes.normal!==void 0,M=e.morphAttributes.color!==void 0,U=e.morphAttributes.position||[],J=e.morphAttributes.normal||[],q=e.morphAttributes.color||[];let p=0;l===!0&&(p=1),G===!0&&(p=2),M===!0&&(p=3);let S=e.attributes.position.count*p,N=1;S>A.maxTextureSize&&(N=Math.ceil(S/A.maxTextureSize),S=A.maxTextureSize);const H=new Float32Array(S*N*4*c),_=new ta(H,S,N,c);_.type=Pg,_.needsUpdate=!0;const f=p*4;for(let O=0;O<c;O++){const z=U[O],j=J[O],X=q[O],$=S*N*4*O;for(let AA=0;AA<z.count;AA++){const DA=AA*f;l===!0&&(E.fromBufferAttribute(z,AA),H[$+DA+0]=E.x,H[$+DA+1]=E.y,H[$+DA+2]=E.z,H[$+DA+3]=0),G===!0&&(E.fromBufferAttribute(j,AA),H[$+DA+4]=E.x,H[$+DA+5]=E.y,H[$+DA+6]=E.z,H[$+DA+7]=0),M===!0&&(E.fromBufferAttribute(X,AA),H[$+DA+8]=E.x,H[$+DA+9]=E.y,H[$+DA+10]=E.z,H[$+DA+11]=X.itemSize===4?E.w:1)}}w={count:c,texture:_,size:new xA(S,N)},B.set(e,w),e.addEventListener("dispose",x)}let h=0;for(let l=0;l<s.length;l++)h+=s[l];const n=e.morphTargetsRelative?1:1-h;a.getUniforms().setValue(Q,"morphTargetBaseInfluence",n),a.getUniforms().setValue(Q,"morphTargetInfluences",s),a.getUniforms().setValue(Q,"morphTargetsTexture",w.texture,I),a.getUniforms().setValue(Q,"morphTargetsTextureSize",w.size)}else{const D=s===void 0?0:s.length;let c=g[e.id];if(c===void 0||c.length!==D){c=[];for(let G=0;G<D;G++)c[G]=[G,0];g[e.id]=c}for(let G=0;G<D;G++){const M=c[G];M[0]=G,M[1]=s[G]}c.sort(oc);for(let G=0;G<8;G++)G<D&&c[G][1]?(i[G][0]=c[G][0],i[G][1]=c[G][1]):(i[G][0]=Number.MAX_SAFE_INTEGER,i[G][1]=0);i.sort(ic);const w=e.morphAttributes.position,h=e.morphAttributes.normal;let n=0;for(let G=0;G<8;G++){const M=i[G],U=M[0],J=M[1];U!==Number.MAX_SAFE_INTEGER&&J?(w&&e.getAttribute("morphTarget"+G)!==w[U]&&e.setAttribute("morphTarget"+G,w[U]),h&&e.getAttribute("morphNormal"+G)!==h[U]&&e.setAttribute("morphNormal"+G,h[U]),C[G]=J,n+=J):(w&&e.hasAttribute("morphTarget"+G)===!0&&e.deleteAttribute("morphTarget"+G),h&&e.hasAttribute("morphNormal"+G)===!0&&e.deleteAttribute("morphNormal"+G),C[G]=0)}const l=e.morphTargetsRelative?1:1-n;a.getUniforms().setValue(Q,"morphTargetBaseInfluence",l),a.getUniforms().setValue(Q,"morphTargetInfluences",C)}}return{update:o}}function ec(Q,A,I,g){let C=new WeakMap;function B(o){const t=g.render.frame,e=o.geometry,a=A.get(o,e);return C.get(a)!==t&&(A.update(a),C.set(a,t)),o.isInstancedMesh&&(o.hasEventListener("dispose",i)===!1&&o.addEventListener("dispose",i),I.update(o.instanceMatrix,Q.ARRAY_BUFFER),o.instanceColor!==null&&I.update(o.instanceColor,Q.ARRAY_BUFFER)),a}function E(){C=new WeakMap}function i(o){const t=o.target;t.removeEventListener("dispose",i),I.remove(t.instanceMatrix),t.instanceColor!==null&&I.remove(t.instanceColor)}return{update:B,dispose:E}}const ra=new KI,ca=new ta,wa=new zD,Ga=new Co,Zt=[],Pt=[],Wt=new Float32Array(16),jt=new Float32Array(9),Vt=new Float32Array(4);function RB(Q,A,I){const g=Q[0];if(g<=0||g>0)return Q;const C=A*I;let B=Zt[C];if(B===void 0&&(B=new Float32Array(C),Zt[C]=B),A!==0){g.toArray(B,0);for(let E=1,i=0;E!==A;++E)i+=I,Q[E].toArray(B,i)}return B}function JI(Q,A){if(Q.length!==A.length)return!1;for(let I=0,g=Q.length;I<g;I++)if(Q[I]!==A[I])return!1;return!0}function FI(Q,A){for(let I=0,g=A.length;I<g;I++)Q[I]=A[I]}function SE(Q,A){let I=Pt[A];I===void 0&&(I=new Int32Array(A),Pt[A]=I);for(let g=0;g!==A;++g)I[g]=Q.allocateTextureUnit();return I}function ac(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1f(this.addr,A),I[0]=A)}function sc(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(JI(I,A))return;Q.uniform2fv(this.addr,A),FI(I,A)}}function Dc(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(Q.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(JI(I,A))return;Q.uniform3fv(this.addr,A),FI(I,A)}}function nc(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(JI(I,A))return;Q.uniform4fv(this.addr,A),FI(I,A)}}function hc(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(JI(I,A))return;Q.uniformMatrix2fv(this.addr,!1,A),FI(I,A)}else{if(JI(I,g))return;Vt.set(g),Q.uniformMatrix2fv(this.addr,!1,Vt),FI(I,g)}}function rc(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(JI(I,A))return;Q.uniformMatrix3fv(this.addr,!1,A),FI(I,A)}else{if(JI(I,g))return;jt.set(g),Q.uniformMatrix3fv(this.addr,!1,jt),FI(I,g)}}function cc(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(JI(I,A))return;Q.uniformMatrix4fv(this.addr,!1,A),FI(I,A)}else{if(JI(I,g))return;Wt.set(g),Q.uniformMatrix4fv(this.addr,!1,Wt),FI(I,g)}}function wc(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1i(this.addr,A),I[0]=A)}function Gc(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(JI(I,A))return;Q.uniform2iv(this.addr,A),FI(I,A)}}function Sc(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(JI(I,A))return;Q.uniform3iv(this.addr,A),FI(I,A)}}function kc(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(JI(I,A))return;Q.uniform4iv(this.addr,A),FI(I,A)}}function lc(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1ui(this.addr,A),I[0]=A)}function yc(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(JI(I,A))return;Q.uniform2uiv(this.addr,A),FI(I,A)}}function Mc(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(JI(I,A))return;Q.uniform3uiv(this.addr,A),FI(I,A)}}function Uc(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(JI(I,A))return;Q.uniform4uiv(this.addr,A),FI(I,A)}}function Nc(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture2D(A||ra,C)}function Kc(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||wa,C)}function Jc(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||Ga,C)}function Fc(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||ca,C)}function Rc(Q){switch(Q){case 5126:return ac;case 35664:return sc;case 35665:return Dc;case 35666:return nc;case 35674:return hc;case 35675:return rc;case 35676:return cc;case 5124:case 35670:return wc;case 35667:case 35671:return Gc;case 35668:case 35672:return Sc;case 35669:case 35673:return kc;case 5125:return lc;case 36294:return yc;case 36295:return Mc;case 36296:return Uc;case 35678:case 36198:case 36298:case 36306:case 35682:return Nc;case 35679:case 36299:case 36307:return Kc;case 35680:case 36300:case 36308:case 36293:return Jc;case 36289:case 36303:case 36311:case 36292:return Fc}}function qc(Q,A){Q.uniform1fv(this.addr,A)}function pc(Q,A){const I=RB(A,this.size,2);Q.uniform2fv(this.addr,I)}function dc(Q,A){const I=RB(A,this.size,3);Q.uniform3fv(this.addr,I)}function Lc(Q,A){const I=RB(A,this.size,4);Q.uniform4fv(this.addr,I)}function Yc(Q,A){const I=RB(A,this.size,4);Q.uniformMatrix2fv(this.addr,!1,I)}function fc(Q,A){const I=RB(A,this.size,9);Q.uniformMatrix3fv(this.addr,!1,I)}function uc(Q,A){const I=RB(A,this.size,16);Q.uniformMatrix4fv(this.addr,!1,I)}function Hc(Q,A){Q.uniform1iv(this.addr,A)}function mc(Q,A){Q.uniform2iv(this.addr,A)}function Tc(Q,A){Q.uniform3iv(this.addr,A)}function xc(Q,A){Q.uniform4iv(this.addr,A)}function Oc(Q,A){Q.uniform1uiv(this.addr,A)}function bc(Q,A){Q.uniform2uiv(this.addr,A)}function vc(Q,A){Q.uniform3uiv(this.addr,A)}function Zc(Q,A){Q.uniform4uiv(this.addr,A)}function Pc(Q,A,I){const g=this.cache,C=A.length,B=SE(I,C);JI(g,B)||(Q.uniform1iv(this.addr,B),FI(g,B));for(let E=0;E!==C;++E)I.setTexture2D(A[E]||ra,B[E])}function Wc(Q,A,I){const g=this.cache,C=A.length,B=SE(I,C);JI(g,B)||(Q.uniform1iv(this.addr,B),FI(g,B));for(let E=0;E!==C;++E)I.setTexture3D(A[E]||wa,B[E])}function jc(Q,A,I){const g=this.cache,C=A.length,B=SE(I,C);JI(g,B)||(Q.uniform1iv(this.addr,B),FI(g,B));for(let E=0;E!==C;++E)I.setTextureCube(A[E]||Ga,B[E])}function Vc(Q,A,I){const g=this.cache,C=A.length,B=SE(I,C);JI(g,B)||(Q.uniform1iv(this.addr,B),FI(g,B));for(let E=0;E!==C;++E)I.setTexture2DArray(A[E]||ca,B[E])}function _c(Q){switch(Q){case 5126:return qc;case 35664:return pc;case 35665:return dc;case 35666:return Lc;case 35674:return Yc;case 35675:return fc;case 35676:return uc;case 5124:case 35670:return Hc;case 35667:case 35671:return mc;case 35668:case 35672:return Tc;case 35669:case 35673:return xc;case 5125:return Oc;case 36294:return bc;case 36295:return vc;case 36296:return Zc;case 35678:case 36198:case 36298:case 36306:case 35682:return Pc;case 35679:case 36299:case 36307:return Wc;case 35680:case 36300:case 36308:case 36293:return jc;case 36289:case 36303:case 36311:case 36292:return Vc}}class Xc{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.setValue=Rc(I.type)}}class zc{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.size=I.size,this.setValue=_c(I.type)}}class $c{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let B=0,E=C.length;B!==E;++B){const i=C[B];i.setValue(A,I[i.id],g)}}}const ai=/(\w+)(\])?(\[|\.)?/g;function _t(Q,A){Q.seq.push(A),Q.map[A.id]=A}function Aw(Q,A,I){const g=Q.name,C=g.length;for(ai.lastIndex=0;;){const B=ai.exec(g),E=ai.lastIndex;let i=B[1];const o=B[2]==="]",t=B[3];if(o&&(i=i|0),t===void 0||t==="["&&E+2===C){_t(I,t===void 0?new Xc(i,Q,A):new zc(i,Q,A));break}else{let a=I.map[i];a===void 0&&(a=new $c(i),_t(I,a)),I=a}}}class ZQ{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let C=0;C<g;++C){const B=A.getActiveUniform(I,C),E=A.getUniformLocation(I,B.name);Aw(B,E,this)}}setValue(A,I,g,C){const B=this.map[I];B!==void 0&&B.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let B=0,E=I.length;B!==E;++B){const i=I[B],o=g[i.id];o.needsUpdate!==!1&&i.setValue(A,o.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,B=A.length;C!==B;++C){const E=A[C];E.id in I&&g.push(E)}return g}}function Xt(Q,A,I){const g=Q.createShader(A);return Q.shaderSource(g,I),Q.compileShader(g),g}let Iw=0;function gw(Q,A){const I=Q.split(`
`),g=[],C=Math.max(A-6,0),B=Math.min(A+6,I.length);for(let E=C;E<B;E++){const i=E+1;g.push(`${i===A?">":" "} ${i}: ${I[E]}`)}return g.join(`
`)}function Cw(Q){switch(Q){case qg:return["Linear","( value )"];case NA:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",Q),["Linear","( value )"]}}function zt(Q,A,I){const g=Q.getShaderParameter(A,Q.COMPILE_STATUS),C=Q.getShaderInfoLog(A).trim();if(g&&C==="")return"";const B=/ERROR: 0:(\d+)/.exec(C);if(B){const E=parseInt(B[1]);return I.toUpperCase()+`

`+C+`

`+gw(Q.getShaderSource(A),E)}else return C}function Bw(Q,A){const I=Cw(A);return"vec4 "+Q+"( vec4 value ) { return LinearTo"+I[0]+I[1]+"; }"}function Qw(Q,A){let I;switch(A){case CD:I="Linear";break;case BD:I="Reinhard";break;case QD:I="OptimizedCineon";break;case ED:I="ACESFilmic";break;case iD:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+Q+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function Ew(Q){return[Q.extensionDerivatives||Q.envMapCubeUVHeight||Q.bumpMap||Q.normalMapTangentSpace||Q.clearcoatNormalMap||Q.flatShading||Q.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(Q.extensionFragDepth||Q.logarithmicDepthBuffer)&&Q.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",Q.extensionDrawBuffers&&Q.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(Q.extensionShaderTextureLOD||Q.envMap||Q.transmission)&&Q.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bB).join(`
`)}function iw(Q){const A=[];for(const I in Q){const g=Q[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function ow(Q,A){const I={},g=Q.getProgramParameter(A,Q.ACTIVE_ATTRIBUTES);for(let C=0;C<g;C++){const B=Q.getActiveAttrib(A,C),E=B.name;let i=1;B.type===Q.FLOAT_MAT2&&(i=2),B.type===Q.FLOAT_MAT3&&(i=3),B.type===Q.FLOAT_MAT4&&(i=4),I[E]={type:B.type,location:Q.getAttribLocation(A,E),locationSize:i}}return I}function bB(Q){return Q!==""}function $t(Q,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return Q.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function Ae(Q,A){return Q.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const tw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yi(Q){return Q.replace(tw,ew)}function ew(Q,A){const I=mA[A];if(I===void 0)throw new Error("Can not resolve #include <"+A+">");return Yi(I)}const aw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ie(Q){return Q.replace(aw,sw)}function sw(Q,A,I,g){let C="";for(let B=parseInt(A);B<parseInt(I);B++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+B+" ]").replace(/UNROLLED_LOOP_INDEX/g,B);return C}function ge(Q){let A="precision "+Q.precision+` float;
precision `+Q.precision+" int;";return Q.precision==="highp"?A+=`
#define HIGH_PRECISION`:Q.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:Q.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function Dw(Q){let A="SHADOWMAP_TYPE_BASIC";return Q.shadowMapType===ve?A="SHADOWMAP_TYPE_PCF":Q.shadowMapType===Ze?A="SHADOWMAP_TYPE_PCF_SOFT":Q.shadowMapType===Zg&&(A="SHADOWMAP_TYPE_VSM"),A}function nw(Q){let A="ENVMAP_TYPE_CUBE";if(Q.envMap)switch(Q.envMapMode){case wB:case GB:A="ENVMAP_TYPE_CUBE";break;case cE:A="ENVMAP_TYPE_CUBE_UV";break}return A}function hw(Q){let A="ENVMAP_MODE_REFLECTION";if(Q.envMap)switch(Q.envMapMode){case GB:A="ENVMAP_MODE_REFRACTION";break}return A}function rw(Q){let A="ENVMAP_BLENDING_NONE";if(Q.envMap)switch(Q.combine){case rE:A="ENVMAP_BLENDING_MULTIPLY";break;case ID:A="ENVMAP_BLENDING_MIX";break;case gD:A="ENVMAP_BLENDING_ADD";break}return A}function cw(Q){const A=Q.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function ww(Q,A,I,g){const C=Q.getContext(),B=I.defines;let E=I.vertexShader,i=I.fragmentShader;const o=Dw(I),t=nw(I),e=hw(I),a=rw(I),s=cw(I),D=I.isWebGL2?"":Ew(I),c=iw(B),w=C.createProgram();let h,n,l=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(h=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c].filter(bB).join(`
`),h.length>0&&(h+=`
`),n=[D,"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c].filter(bB).join(`
`),n.length>0&&(n+=`
`)):(h=[ge(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c,I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bB).join(`
`),n=[D,ge(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.envMap?"#define "+e:"",I.envMap?"#define "+a:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==Vg?"#define TONE_MAPPING":"",I.toneMapping!==Vg?mA.tonemapping_pars_fragment:"",I.toneMapping!==Vg?Qw("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",mA.encodings_pars_fragment,Bw("linearToOutputTexel",I.outputColorSpace),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(bB).join(`
`)),E=Yi(E),E=$t(E,I),E=Ae(E,I),i=Yi(i),i=$t(i,I),i=Ae(i,I),E=Ie(E),i=Ie(i),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(l=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,n=["#define varying in",I.glslVersion===kt?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===kt?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+n);const G=l+h+E,M=l+n+i,U=Xt(C,C.VERTEX_SHADER,G),J=Xt(C,C.FRAGMENT_SHADER,M);if(C.attachShader(w,U),C.attachShader(w,J),I.index0AttributeName!==void 0?C.bindAttribLocation(w,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(w,0,"position"),C.linkProgram(w),Q.debug.checkShaderErrors){const S=C.getProgramInfoLog(w).trim(),N=C.getShaderInfoLog(U).trim(),H=C.getShaderInfoLog(J).trim();let _=!0,f=!0;if(C.getProgramParameter(w,C.LINK_STATUS)===!1)if(_=!1,typeof Q.debug.onShaderError=="function")Q.debug.onShaderError(C,w,U,J);else{const x=zt(C,U,"vertex"),O=zt(C,J,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(w,C.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+x+`
`+O)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(N===""||H==="")&&(f=!1);f&&(this.diagnostics={runnable:_,programLog:S,vertexShader:{log:N,prefix:h},fragmentShader:{log:H,prefix:n}})}C.deleteShader(U),C.deleteShader(J);let q;this.getUniforms=function(){return q===void 0&&(q=new ZQ(C,w)),q};let p;return this.getAttributes=function(){return p===void 0&&(p=ow(C,w)),p},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(w),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=Iw++,this.cacheKey=A,this.usedTimes=1,this.program=w,this.vertexShader=U,this.fragmentShader=J,this}let Gw=0;class Sw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),B=this._getShaderStage(g),E=this._getShaderCacheForMaterial(A);return E.has(C)===!1&&(E.add(C),C.usedTimes++),E.has(B)===!1&&(E.add(B),B.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new kw(A),I.set(A,g)),g}}class kw{constructor(A){this.id=Gw++,this.code=A,this.usedTimes=0}}function lw(Q,A,I,g,C,B,E){const i=new ea,o=new Sw,t=[],e=C.isWebGL2,a=C.logarithmicDepthBuffer,s=C.vertexTextures;let D=C.precision;const c={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(S){return S===0?"uv":`uv${S}`}function h(S,N,H,_,f){const x=_.fog,O=f.geometry,z=S.isMeshStandardMaterial?_.environment:null,j=(S.isMeshStandardMaterial?I:A).get(S.envMap||z),X=j&&j.mapping===cE?j.image.height:null,$=c[S.type];S.precision!==null&&(D=C.getMaxPrecision(S.precision),D!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",D,"instead."));const AA=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,DA=AA!==void 0?AA.length:0;let b=0;O.morphAttributes.position!==void 0&&(b=1),O.morphAttributes.normal!==void 0&&(b=2),O.morphAttributes.color!==void 0&&(b=3);let IA,gA,aA,sA;if($){const kI=Jg[$];IA=kI.vertexShader,gA=kI.fragmentShader}else IA=S.vertexShader,gA=S.fragmentShader,o.update(S),aA=o.getVertexShaderID(S),sA=o.getFragmentShaderID(S);const kA=Q.getRenderTarget(),YA=f.isInstancedMesh===!0,RA=!!S.map,qI=!!S.matcap,_A=!!j,m=!!S.aoMap,fI=!!S.lightMap,JA=!!S.bumpMap,bA=!!S.normalMap,qA=!!S.displacementMap,eI=!!S.emissiveMap,jA=!!S.metalnessMap,fA=!!S.roughnessMap,QI=S.anisotropy>0,uI=S.clearcoat>0,HI=S.iridescence>0,K=S.sheen>0,k=S.transmission>0,P=QI&&!!S.anisotropyMap,CA=uI&&!!S.clearcoatMap,BA=uI&&!!S.clearcoatNormalMap,oA=uI&&!!S.clearcoatRoughnessMap,SA=HI&&!!S.iridescenceMap,tA=HI&&!!S.iridescenceThicknessMap,V=K&&!!S.sheenColorMap,yA=K&&!!S.sheenRoughnessMap,MA=!!S.specularMap,KA=!!S.specularColorMap,rA=!!S.specularIntensityMap,cA=k&&!!S.transmissionMap,vA=k&&!!S.thicknessMap,iI=!!S.gradientMap,d=!!S.alphaMap,iA=S.alphaTest>0,v=!!S.extensions,QA=!!O.attributes.uv1,eA=!!O.attributes.uv2,AI=!!O.attributes.uv3;return{isWebGL2:e,shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:IA,fragmentShader:gA,defines:S.defines,customVertexShaderID:aA,customFragmentShaderID:sA,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:D,instancing:YA,instancingColor:YA&&f.instanceColor!==null,supportsVertexTextures:s,outputColorSpace:kA===null?Q.outputColorSpace:kA.isXRRenderTarget===!0?kA.texture.colorSpace:qg,map:RA,matcap:qI,envMap:_A,envMapMode:_A&&j.mapping,envMapCubeUVHeight:X,aoMap:m,lightMap:fI,bumpMap:JA,normalMap:bA,displacementMap:s&&qA,emissiveMap:eI,normalMapObjectSpace:bA&&S.normalMapType===kD,normalMapTangentSpace:bA&&S.normalMapType===oQ,metalnessMap:jA,roughnessMap:fA,anisotropy:QI,anisotropyMap:P,clearcoat:uI,clearcoatMap:CA,clearcoatNormalMap:BA,clearcoatRoughnessMap:oA,iridescence:HI,iridescenceMap:SA,iridescenceThicknessMap:tA,sheen:K,sheenColorMap:V,sheenRoughnessMap:yA,specularMap:MA,specularColorMap:KA,specularIntensityMap:rA,transmission:k,transmissionMap:cA,thicknessMap:vA,gradientMap:iI,opaque:S.transparent===!1&&S.blending===DB,alphaMap:d,alphaTest:iA,combine:S.combine,mapUv:RA&&w(S.map.channel),aoMapUv:m&&w(S.aoMap.channel),lightMapUv:fI&&w(S.lightMap.channel),bumpMapUv:JA&&w(S.bumpMap.channel),normalMapUv:bA&&w(S.normalMap.channel),displacementMapUv:qA&&w(S.displacementMap.channel),emissiveMapUv:eI&&w(S.emissiveMap.channel),metalnessMapUv:jA&&w(S.metalnessMap.channel),roughnessMapUv:fA&&w(S.roughnessMap.channel),anisotropyMapUv:P&&w(S.anisotropyMap.channel),clearcoatMapUv:CA&&w(S.clearcoatMap.channel),clearcoatNormalMapUv:BA&&w(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oA&&w(S.clearcoatRoughnessMap.channel),iridescenceMapUv:SA&&w(S.iridescenceMap.channel),iridescenceThicknessMapUv:tA&&w(S.iridescenceThicknessMap.channel),sheenColorMapUv:V&&w(S.sheenColorMap.channel),sheenRoughnessMapUv:yA&&w(S.sheenRoughnessMap.channel),specularMapUv:MA&&w(S.specularMap.channel),specularColorMapUv:KA&&w(S.specularColorMap.channel),specularIntensityMapUv:rA&&w(S.specularIntensityMap.channel),transmissionMapUv:cA&&w(S.transmissionMap.channel),thicknessMapUv:vA&&w(S.thicknessMap.channel),alphaMapUv:d&&w(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(bA||QI),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:QA,vertexUv2s:eA,vertexUv3s:AI,pointsUvs:f.isPoints===!0&&!!O.attributes.uv&&(RA||d),fog:!!x,useFog:S.fog===!0,fogExp2:x&&x.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:a,skinning:f.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:DA,morphTextureStride:b,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numClippingPlanes:E.numPlanes,numClipIntersection:E.numIntersection,dithering:S.dithering,shadowMapEnabled:Q.shadowMap.enabled&&H.length>0,shadowMapType:Q.shadowMap.type,toneMapping:S.toneMapped?Q.toneMapping:Vg,useLegacyLights:Q.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===og,flipSided:S.side===$I,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:v&&S.extensions.derivatives===!0,extensionFragDepth:v&&S.extensions.fragDepth===!0,extensionDrawBuffers:v&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:v&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:e||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:e||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:e||g.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function n(S){const N=[];if(S.shaderID?N.push(S.shaderID):(N.push(S.customVertexShaderID),N.push(S.customFragmentShaderID)),S.defines!==void 0)for(const H in S.defines)N.push(H),N.push(S.defines[H]);return S.isRawShaderMaterial===!1&&(l(N,S),G(N,S),N.push(Q.outputColorSpace)),N.push(S.customProgramCacheKey),N.join()}function l(S,N){S.push(N.precision),S.push(N.outputColorSpace),S.push(N.envMapMode),S.push(N.envMapCubeUVHeight),S.push(N.mapUv),S.push(N.alphaMapUv),S.push(N.lightMapUv),S.push(N.aoMapUv),S.push(N.bumpMapUv),S.push(N.normalMapUv),S.push(N.displacementMapUv),S.push(N.emissiveMapUv),S.push(N.metalnessMapUv),S.push(N.roughnessMapUv),S.push(N.anisotropyMapUv),S.push(N.clearcoatMapUv),S.push(N.clearcoatNormalMapUv),S.push(N.clearcoatRoughnessMapUv),S.push(N.iridescenceMapUv),S.push(N.iridescenceThicknessMapUv),S.push(N.sheenColorMapUv),S.push(N.sheenRoughnessMapUv),S.push(N.specularMapUv),S.push(N.specularColorMapUv),S.push(N.specularIntensityMapUv),S.push(N.transmissionMapUv),S.push(N.thicknessMapUv),S.push(N.combine),S.push(N.fogExp2),S.push(N.sizeAttenuation),S.push(N.morphTargetsCount),S.push(N.morphAttributeCount),S.push(N.numDirLights),S.push(N.numPointLights),S.push(N.numSpotLights),S.push(N.numSpotLightMaps),S.push(N.numHemiLights),S.push(N.numRectAreaLights),S.push(N.numDirLightShadows),S.push(N.numPointLightShadows),S.push(N.numSpotLightShadows),S.push(N.numSpotLightShadowsWithMaps),S.push(N.shadowMapType),S.push(N.toneMapping),S.push(N.numClippingPlanes),S.push(N.numClipIntersection),S.push(N.depthPacking)}function G(S,N){i.disableAll(),N.isWebGL2&&i.enable(0),N.supportsVertexTextures&&i.enable(1),N.instancing&&i.enable(2),N.instancingColor&&i.enable(3),N.matcap&&i.enable(4),N.envMap&&i.enable(5),N.normalMapObjectSpace&&i.enable(6),N.normalMapTangentSpace&&i.enable(7),N.clearcoat&&i.enable(8),N.iridescence&&i.enable(9),N.alphaTest&&i.enable(10),N.vertexColors&&i.enable(11),N.vertexAlphas&&i.enable(12),N.vertexUv1s&&i.enable(13),N.vertexUv2s&&i.enable(14),N.vertexUv3s&&i.enable(15),N.vertexTangents&&i.enable(16),N.anisotropy&&i.enable(17),S.push(i.mask),i.disableAll(),N.fog&&i.enable(0),N.useFog&&i.enable(1),N.flatShading&&i.enable(2),N.logarithmicDepthBuffer&&i.enable(3),N.skinning&&i.enable(4),N.morphTargets&&i.enable(5),N.morphNormals&&i.enable(6),N.morphColors&&i.enable(7),N.premultipliedAlpha&&i.enable(8),N.shadowMapEnabled&&i.enable(9),N.useLegacyLights&&i.enable(10),N.doubleSided&&i.enable(11),N.flipSided&&i.enable(12),N.useDepthPacking&&i.enable(13),N.dithering&&i.enable(14),N.transmission&&i.enable(15),N.sheen&&i.enable(16),N.opaque&&i.enable(17),N.pointsUvs&&i.enable(18),S.push(i.mask)}function M(S){const N=c[S.type];let H;if(N){const _=Jg[N];H=an.clone(_.uniforms)}else H=S.uniforms;return H}function U(S,N){let H;for(let _=0,f=t.length;_<f;_++){const x=t[_];if(x.cacheKey===N){H=x,++H.usedTimes;break}}return H===void 0&&(H=new ww(Q,N,S,B),t.push(H)),H}function J(S){if(--S.usedTimes===0){const N=t.indexOf(S);t[N]=t[t.length-1],t.pop(),S.destroy()}}function q(S){o.remove(S)}function p(){o.dispose()}return{getParameters:h,getProgramCacheKey:n,getUniforms:M,acquireProgram:U,releaseProgram:J,releaseShaderCache:q,programs:t,dispose:p}}function yw(){let Q=new WeakMap;function A(B){let E=Q.get(B);return E===void 0&&(E={},Q.set(B,E)),E}function I(B){Q.delete(B)}function g(B,E,i){Q.get(B)[E]=i}function C(){Q=new WeakMap}return{get:A,remove:I,update:g,dispose:C}}function Mw(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.material.id!==A.material.id?Q.material.id-A.material.id:Q.z!==A.z?Q.z-A.z:Q.id-A.id}function Ce(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.z!==A.z?A.z-Q.z:Q.id-A.id}function Be(){const Q=[];let A=0;const I=[],g=[],C=[];function B(){A=0,I.length=0,g.length=0,C.length=0}function E(a,s,D,c,w,h){let n=Q[A];return n===void 0?(n={id:a.id,object:a,geometry:s,material:D,groupOrder:c,renderOrder:a.renderOrder,z:w,group:h},Q[A]=n):(n.id=a.id,n.object=a,n.geometry=s,n.material=D,n.groupOrder=c,n.renderOrder=a.renderOrder,n.z=w,n.group=h),A++,n}function i(a,s,D,c,w,h){const n=E(a,s,D,c,w,h);D.transmission>0?g.push(n):D.transparent===!0?C.push(n):I.push(n)}function o(a,s,D,c,w,h){const n=E(a,s,D,c,w,h);D.transmission>0?g.unshift(n):D.transparent===!0?C.unshift(n):I.unshift(n)}function t(a,s){I.length>1&&I.sort(a||Mw),g.length>1&&g.sort(s||Ce),C.length>1&&C.sort(s||Ce)}function e(){for(let a=A,s=Q.length;a<s;a++){const D=Q[a];if(D.id===null)break;D.id=null,D.object=null,D.geometry=null,D.material=null,D.group=null}}return{opaque:I,transmissive:g,transparent:C,init:B,push:i,unshift:o,finish:e,sort:t}}function Uw(){let Q=new WeakMap;function A(g,C){const B=Q.get(g);let E;return B===void 0?(E=new Be,Q.set(g,[E])):C>=B.length?(E=new Be,B.push(E)):E=B[C],E}function I(){Q=new WeakMap}return{get:A,dispose:I}}function Nw(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new F,color:new hA};break;case"SpotLight":I={position:new F,direction:new F,color:new hA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new F,color:new hA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new F,skyColor:new hA,groundColor:new hA};break;case"RectAreaLight":I={color:new hA,position:new F,halfWidth:new F,halfHeight:new F};break}return Q[A.id]=I,I}}}function Kw(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xA,shadowCameraNear:1,shadowCameraFar:1e3};break}return Q[A.id]=I,I}}}let Jw=0;function Fw(Q,A){return(A.castShadow?2:0)-(Q.castShadow?2:0)+(A.map?1:0)-(Q.map?1:0)}function Rw(Q,A){const I=new Nw,g=Kw(),C={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let e=0;e<9;e++)C.probe.push(new F);const B=new F,E=new GA,i=new GA;function o(e,a){let s=0,D=0,c=0;for(let H=0;H<9;H++)C.probe[H].set(0,0,0);let w=0,h=0,n=0,l=0,G=0,M=0,U=0,J=0,q=0,p=0;e.sort(Fw);const S=a===!0?Math.PI:1;for(let H=0,_=e.length;H<_;H++){const f=e[H],x=f.color,O=f.intensity,z=f.distance,j=f.shadow&&f.shadow.map?f.shadow.map.texture:null;if(f.isAmbientLight)s+=x.r*O*S,D+=x.g*O*S,c+=x.b*O*S;else if(f.isLightProbe)for(let X=0;X<9;X++)C.probe[X].addScaledVector(f.sh.coefficients[X],O);else if(f.isDirectionalLight){const X=I.get(f);if(X.color.copy(f.color).multiplyScalar(f.intensity*S),f.castShadow){const $=f.shadow,AA=g.get(f);AA.shadowBias=$.bias,AA.shadowNormalBias=$.normalBias,AA.shadowRadius=$.radius,AA.shadowMapSize=$.mapSize,C.directionalShadow[w]=AA,C.directionalShadowMap[w]=j,C.directionalShadowMatrix[w]=f.shadow.matrix,M++}C.directional[w]=X,w++}else if(f.isSpotLight){const X=I.get(f);X.position.setFromMatrixPosition(f.matrixWorld),X.color.copy(x).multiplyScalar(O*S),X.distance=z,X.coneCos=Math.cos(f.angle),X.penumbraCos=Math.cos(f.angle*(1-f.penumbra)),X.decay=f.decay,C.spot[n]=X;const $=f.shadow;if(f.map&&(C.spotLightMap[q]=f.map,q++,$.updateMatrices(f),f.castShadow&&p++),C.spotLightMatrix[n]=$.matrix,f.castShadow){const AA=g.get(f);AA.shadowBias=$.bias,AA.shadowNormalBias=$.normalBias,AA.shadowRadius=$.radius,AA.shadowMapSize=$.mapSize,C.spotShadow[n]=AA,C.spotShadowMap[n]=j,J++}n++}else if(f.isRectAreaLight){const X=I.get(f);X.color.copy(x).multiplyScalar(O),X.halfWidth.set(f.width*.5,0,0),X.halfHeight.set(0,f.height*.5,0),C.rectArea[l]=X,l++}else if(f.isPointLight){const X=I.get(f);if(X.color.copy(f.color).multiplyScalar(f.intensity*S),X.distance=f.distance,X.decay=f.decay,f.castShadow){const $=f.shadow,AA=g.get(f);AA.shadowBias=$.bias,AA.shadowNormalBias=$.normalBias,AA.shadowRadius=$.radius,AA.shadowMapSize=$.mapSize,AA.shadowCameraNear=$.camera.near,AA.shadowCameraFar=$.camera.far,C.pointShadow[h]=AA,C.pointShadowMap[h]=j,C.pointShadowMatrix[h]=f.shadow.matrix,U++}C.point[h]=X,h++}else if(f.isHemisphereLight){const X=I.get(f);X.skyColor.copy(f.color).multiplyScalar(O*S),X.groundColor.copy(f.groundColor).multiplyScalar(O*S),C.hemi[G]=X,G++}}l>0&&(A.isWebGL2||Q.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=EA.LTC_FLOAT_1,C.rectAreaLTC2=EA.LTC_FLOAT_2):Q.has("OES_texture_half_float_linear")===!0?(C.rectAreaLTC1=EA.LTC_HALF_1,C.rectAreaLTC2=EA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),C.ambient[0]=s,C.ambient[1]=D,C.ambient[2]=c;const N=C.hash;(N.directionalLength!==w||N.pointLength!==h||N.spotLength!==n||N.rectAreaLength!==l||N.hemiLength!==G||N.numDirectionalShadows!==M||N.numPointShadows!==U||N.numSpotShadows!==J||N.numSpotMaps!==q)&&(C.directional.length=w,C.spot.length=n,C.rectArea.length=l,C.point.length=h,C.hemi.length=G,C.directionalShadow.length=M,C.directionalShadowMap.length=M,C.pointShadow.length=U,C.pointShadowMap.length=U,C.spotShadow.length=J,C.spotShadowMap.length=J,C.directionalShadowMatrix.length=M,C.pointShadowMatrix.length=U,C.spotLightMatrix.length=J+q-p,C.spotLightMap.length=q,C.numSpotLightShadowsWithMaps=p,N.directionalLength=w,N.pointLength=h,N.spotLength=n,N.rectAreaLength=l,N.hemiLength=G,N.numDirectionalShadows=M,N.numPointShadows=U,N.numSpotShadows=J,N.numSpotMaps=q,C.version=Jw++)}function t(e,a){let s=0,D=0,c=0,w=0,h=0;const n=a.matrixWorldInverse;for(let l=0,G=e.length;l<G;l++){const M=e[l];if(M.isDirectionalLight){const U=C.directional[s];U.direction.setFromMatrixPosition(M.matrixWorld),B.setFromMatrixPosition(M.target.matrixWorld),U.direction.sub(B),U.direction.transformDirection(n),s++}else if(M.isSpotLight){const U=C.spot[c];U.position.setFromMatrixPosition(M.matrixWorld),U.position.applyMatrix4(n),U.direction.setFromMatrixPosition(M.matrixWorld),B.setFromMatrixPosition(M.target.matrixWorld),U.direction.sub(B),U.direction.transformDirection(n),c++}else if(M.isRectAreaLight){const U=C.rectArea[w];U.position.setFromMatrixPosition(M.matrixWorld),U.position.applyMatrix4(n),i.identity(),E.copy(M.matrixWorld),E.premultiply(n),i.extractRotation(E),U.halfWidth.set(M.width*.5,0,0),U.halfHeight.set(0,M.height*.5,0),U.halfWidth.applyMatrix4(i),U.halfHeight.applyMatrix4(i),w++}else if(M.isPointLight){const U=C.point[D];U.position.setFromMatrixPosition(M.matrixWorld),U.position.applyMatrix4(n),D++}else if(M.isHemisphereLight){const U=C.hemi[h];U.direction.setFromMatrixPosition(M.matrixWorld),U.direction.transformDirection(n),h++}}}return{setup:o,setupView:t,state:C}}function Qe(Q,A){const I=new Rw(Q,A),g=[],C=[];function B(){g.length=0,C.length=0}function E(a){g.push(a)}function i(a){C.push(a)}function o(a){I.setup(g,a)}function t(a){I.setupView(g,a)}return{init:B,state:{lightsArray:g,shadowsArray:C,lights:I},setupLights:o,setupLightsView:t,pushLight:E,pushShadow:i}}function qw(Q,A){let I=new WeakMap;function g(B,E=0){const i=I.get(B);let o;return i===void 0?(o=new Qe(Q,A),I.set(B,[o])):E>=i.length?(o=new Qe(Q,A),i.push(o)):o=i[E],o}function C(){I=new WeakMap}return{get:g,dispose:C}}class pw extends Bg{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class dw extends Bg{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const Lw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fw(Q,A,I){let g=new Bo;const C=new xA,B=new xA,E=new II,i=new pw({depthPacking:SD}),o=new dw,t={},e=I.maxTextureSize,a={[_g]:$I,[$I]:_g,[og]:og},s=new nC({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xA},radius:{value:4}},vertexShader:Lw,fragmentShader:Yw}),D=s.clone();D.defines.HORIZONTAL_PASS=1;const c=new jI;c.setAttribute("position",new WI(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new tI(c,s),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ve;let n=this.type;this.render=function(U,J,q){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||U.length===0)return;const p=Q.getRenderTarget(),S=Q.getActiveCubeFace(),N=Q.getActiveMipmapLevel(),H=Q.state;H.setBlending(eC),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const _=n!==Zg&&this.type===Zg,f=n===Zg&&this.type!==Zg;for(let x=0,O=U.length;x<O;x++){const z=U[x],j=z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;C.copy(j.mapSize);const X=j.getFrameExtents();if(C.multiply(X),B.copy(j.mapSize),(C.x>e||C.y>e)&&(C.x>e&&(B.x=Math.floor(e/X.x),C.x=B.x*X.x,j.mapSize.x=B.x),C.y>e&&(B.y=Math.floor(e/X.y),C.y=B.y*X.y,j.mapSize.y=B.y)),j.map===null||_===!0||f===!0){const AA=this.type!==Zg?{minFilter:LI,magFilter:LI}:{};j.map!==null&&j.map.dispose(),j.map=new mC(C.x,C.y,AA),j.map.texture.name=z.name+".shadowMap",j.camera.updateProjectionMatrix()}Q.setRenderTarget(j.map),Q.clear();const $=j.getViewportCount();for(let AA=0;AA<$;AA++){const DA=j.getViewport(AA);E.set(B.x*DA.x,B.y*DA.y,B.x*DA.z,B.y*DA.w),H.viewport(E),j.updateMatrices(z,AA),g=j.getFrustum(),M(J,q,j.camera,z,this.type)}j.isPointLightShadow!==!0&&this.type===Zg&&l(j,q),j.needsUpdate=!1}n=this.type,h.needsUpdate=!1,Q.setRenderTarget(p,S,N)};function l(U,J){const q=A.update(w);s.defines.VSM_SAMPLES!==U.blurSamples&&(s.defines.VSM_SAMPLES=U.blurSamples,D.defines.VSM_SAMPLES=U.blurSamples,s.needsUpdate=!0,D.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new mC(C.x,C.y)),s.uniforms.shadow_pass.value=U.map.texture,s.uniforms.resolution.value=U.mapSize,s.uniforms.radius.value=U.radius,Q.setRenderTarget(U.mapPass),Q.clear(),Q.renderBufferDirect(J,null,q,s,w,null),D.uniforms.shadow_pass.value=U.mapPass.texture,D.uniforms.resolution.value=U.mapSize,D.uniforms.radius.value=U.radius,Q.setRenderTarget(U.map),Q.clear(),Q.renderBufferDirect(J,null,q,D,w,null)}function G(U,J,q,p){let S=null;const N=q.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(N!==void 0)S=N;else if(S=q.isPointLight===!0?o:i,Q.localClippingEnabled&&J.clipShadows===!0&&Array.isArray(J.clippingPlanes)&&J.clippingPlanes.length!==0||J.displacementMap&&J.displacementScale!==0||J.alphaMap&&J.alphaTest>0||J.map&&J.alphaTest>0){const H=S.uuid,_=J.uuid;let f=t[H];f===void 0&&(f={},t[H]=f);let x=f[_];x===void 0&&(x=S.clone(),f[_]=x),S=x}if(S.visible=J.visible,S.wireframe=J.wireframe,p===Zg?S.side=J.shadowSide!==null?J.shadowSide:J.side:S.side=J.shadowSide!==null?J.shadowSide:a[J.side],S.alphaMap=J.alphaMap,S.alphaTest=J.alphaTest,S.map=J.map,S.clipShadows=J.clipShadows,S.clippingPlanes=J.clippingPlanes,S.clipIntersection=J.clipIntersection,S.displacementMap=J.displacementMap,S.displacementScale=J.displacementScale,S.displacementBias=J.displacementBias,S.wireframeLinewidth=J.wireframeLinewidth,S.linewidth=J.linewidth,q.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=Q.properties.get(S);H.light=q}return S}function M(U,J,q,p,S){if(U.visible===!1)return;if(U.layers.test(J.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&S===Zg)&&(!U.frustumCulled||g.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,U.matrixWorld);const _=A.update(U),f=U.material;if(Array.isArray(f)){const x=_.groups;for(let O=0,z=x.length;O<z;O++){const j=x[O],X=f[j.materialIndex];if(X&&X.visible){const $=G(U,X,p,S);Q.renderBufferDirect(q,null,_,$,U,j)}}}else if(f.visible){const x=G(U,f,p,S);Q.renderBufferDirect(q,null,_,x,U,null)}}const H=U.children;for(let _=0,f=H.length;_<f;_++)M(H[_],J,q,p,S)}}function uw(Q,A,I){const g=I.isWebGL2;function C(){let d=!1;const iA=new II;let v=null;const QA=new II(0,0,0,0);return{setMask:function(eA){v!==eA&&!d&&(Q.colorMask(eA,eA,eA,eA),v=eA)},setLocked:function(eA){d=eA},setClear:function(eA,AI,hI,kI,kC){kC===!0&&(eA*=kI,AI*=kI,hI*=kI),iA.set(eA,AI,hI,kI),QA.equals(iA)===!1&&(Q.clearColor(eA,AI,hI,kI),QA.copy(iA))},reset:function(){d=!1,v=null,QA.set(-1,0,0,0)}}}function B(){let d=!1,iA=null,v=null,QA=null;return{setTest:function(eA){eA?kA(Q.DEPTH_TEST):YA(Q.DEPTH_TEST)},setMask:function(eA){iA!==eA&&!d&&(Q.depthMask(eA),iA=eA)},setFunc:function(eA){if(v!==eA){switch(eA){case js:Q.depthFunc(Q.NEVER);break;case Vs:Q.depthFunc(Q.ALWAYS);break;case _s:Q.depthFunc(Q.LESS);break;case Ji:Q.depthFunc(Q.LEQUAL);break;case Xs:Q.depthFunc(Q.EQUAL);break;case zs:Q.depthFunc(Q.GEQUAL);break;case $s:Q.depthFunc(Q.GREATER);break;case AD:Q.depthFunc(Q.NOTEQUAL);break;default:Q.depthFunc(Q.LEQUAL)}v=eA}},setLocked:function(eA){d=eA},setClear:function(eA){QA!==eA&&(Q.clearDepth(eA),QA=eA)},reset:function(){d=!1,iA=null,v=null,QA=null}}}function E(){let d=!1,iA=null,v=null,QA=null,eA=null,AI=null,hI=null,kI=null,kC=null;return{setTest:function(rI){d||(rI?kA(Q.STENCIL_TEST):YA(Q.STENCIL_TEST))},setMask:function(rI){iA!==rI&&!d&&(Q.stencilMask(rI),iA=rI)},setFunc:function(rI,Ng,OI){(v!==rI||QA!==Ng||eA!==OI)&&(Q.stencilFunc(rI,Ng,OI),v=rI,QA=Ng,eA=OI)},setOp:function(rI,Ng,OI){(AI!==rI||hI!==Ng||kI!==OI)&&(Q.stencilOp(rI,Ng,OI),AI=rI,hI=Ng,kI=OI)},setLocked:function(rI){d=rI},setClear:function(rI){kC!==rI&&(Q.clearStencil(rI),kC=rI)},reset:function(){d=!1,iA=null,v=null,QA=null,eA=null,AI=null,hI=null,kI=null,kC=null}}}const i=new C,o=new B,t=new E,e=new WeakMap,a=new WeakMap;let s={},D={},c=new WeakMap,w=[],h=null,n=!1,l=null,G=null,M=null,U=null,J=null,q=null,p=null,S=!1,N=null,H=null,_=null,f=null,x=null;const O=Q.getParameter(Q.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,j=0;const X=Q.getParameter(Q.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=j>=2);let $=null,AA={};const DA=Q.getParameter(Q.SCISSOR_BOX),b=Q.getParameter(Q.VIEWPORT),IA=new II().fromArray(DA),gA=new II().fromArray(b);function aA(d,iA,v,QA){const eA=new Uint8Array(4),AI=Q.createTexture();Q.bindTexture(d,AI),Q.texParameteri(d,Q.TEXTURE_MIN_FILTER,Q.NEAREST),Q.texParameteri(d,Q.TEXTURE_MAG_FILTER,Q.NEAREST);for(let hI=0;hI<v;hI++)g&&(d===Q.TEXTURE_3D||d===Q.TEXTURE_2D_ARRAY)?Q.texImage3D(iA,0,Q.RGBA,1,1,QA,0,Q.RGBA,Q.UNSIGNED_BYTE,eA):Q.texImage2D(iA+hI,0,Q.RGBA,1,1,0,Q.RGBA,Q.UNSIGNED_BYTE,eA);return AI}const sA={};sA[Q.TEXTURE_2D]=aA(Q.TEXTURE_2D,Q.TEXTURE_2D,1),sA[Q.TEXTURE_CUBE_MAP]=aA(Q.TEXTURE_CUBE_MAP,Q.TEXTURE_CUBE_MAP_POSITIVE_X,6),g&&(sA[Q.TEXTURE_2D_ARRAY]=aA(Q.TEXTURE_2D_ARRAY,Q.TEXTURE_2D_ARRAY,1,1),sA[Q.TEXTURE_3D]=aA(Q.TEXTURE_3D,Q.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),o.setClear(1),t.setClear(0),kA(Q.DEPTH_TEST),o.setFunc(Ji),qA(!1),eI(bo),kA(Q.CULL_FACE),JA(eC);function kA(d){s[d]!==!0&&(Q.enable(d),s[d]=!0)}function YA(d){s[d]!==!1&&(Q.disable(d),s[d]=!1)}function RA(d,iA){return D[d]!==iA?(Q.bindFramebuffer(d,iA),D[d]=iA,g&&(d===Q.DRAW_FRAMEBUFFER&&(D[Q.FRAMEBUFFER]=iA),d===Q.FRAMEBUFFER&&(D[Q.DRAW_FRAMEBUFFER]=iA)),!0):!1}function qI(d,iA){let v=w,QA=!1;if(d)if(v=c.get(iA),v===void 0&&(v=[],c.set(iA,v)),d.isWebGLMultipleRenderTargets){const eA=d.texture;if(v.length!==eA.length||v[0]!==Q.COLOR_ATTACHMENT0){for(let AI=0,hI=eA.length;AI<hI;AI++)v[AI]=Q.COLOR_ATTACHMENT0+AI;v.length=eA.length,QA=!0}}else v[0]!==Q.COLOR_ATTACHMENT0&&(v[0]=Q.COLOR_ATTACHMENT0,QA=!0);else v[0]!==Q.BACK&&(v[0]=Q.BACK,QA=!0);QA&&(I.isWebGL2?Q.drawBuffers(v):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(v))}function _A(d){return h!==d?(Q.useProgram(d),h=d,!0):!1}const m={[eB]:Q.FUNC_ADD,[us]:Q.FUNC_SUBTRACT,[Hs]:Q.FUNC_REVERSE_SUBTRACT};if(g)m[Wo]=Q.MIN,m[jo]=Q.MAX;else{const d=A.get("EXT_blend_minmax");d!==null&&(m[Wo]=d.MIN_EXT,m[jo]=d.MAX_EXT)}const fI={[ms]:Q.ZERO,[Ts]:Q.ONE,[xs]:Q.SRC_COLOR,[Pe]:Q.SRC_ALPHA,[Ws]:Q.SRC_ALPHA_SATURATE,[Zs]:Q.DST_COLOR,[bs]:Q.DST_ALPHA,[Os]:Q.ONE_MINUS_SRC_COLOR,[We]:Q.ONE_MINUS_SRC_ALPHA,[Ps]:Q.ONE_MINUS_DST_COLOR,[vs]:Q.ONE_MINUS_DST_ALPHA};function JA(d,iA,v,QA,eA,AI,hI,kI){if(d===eC){n===!0&&(YA(Q.BLEND),n=!1);return}if(n===!1&&(kA(Q.BLEND),n=!0),d!==fs){if(d!==l||kI!==S){if((G!==eB||J!==eB)&&(Q.blendEquation(Q.FUNC_ADD),G=eB,J=eB),kI)switch(d){case DB:Q.blendFuncSeparate(Q.ONE,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA);break;case vo:Q.blendFunc(Q.ONE,Q.ONE);break;case Zo:Q.blendFuncSeparate(Q.ZERO,Q.ONE_MINUS_SRC_COLOR,Q.ZERO,Q.ONE);break;case Po:Q.blendFuncSeparate(Q.ZERO,Q.SRC_COLOR,Q.ZERO,Q.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",d);break}else switch(d){case DB:Q.blendFuncSeparate(Q.SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA);break;case vo:Q.blendFunc(Q.SRC_ALPHA,Q.ONE);break;case Zo:Q.blendFuncSeparate(Q.ZERO,Q.ONE_MINUS_SRC_COLOR,Q.ZERO,Q.ONE);break;case Po:Q.blendFunc(Q.ZERO,Q.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",d);break}M=null,U=null,q=null,p=null,l=d,S=kI}return}eA=eA||iA,AI=AI||v,hI=hI||QA,(iA!==G||eA!==J)&&(Q.blendEquationSeparate(m[iA],m[eA]),G=iA,J=eA),(v!==M||QA!==U||AI!==q||hI!==p)&&(Q.blendFuncSeparate(fI[v],fI[QA],fI[AI],fI[hI]),M=v,U=QA,q=AI,p=hI),l=d,S=!1}function bA(d,iA){d.side===og?YA(Q.CULL_FACE):kA(Q.CULL_FACE);let v=d.side===$I;iA&&(v=!v),qA(v),d.blending===DB&&d.transparent===!1?JA(eC):JA(d.blending,d.blendEquation,d.blendSrc,d.blendDst,d.blendEquationAlpha,d.blendSrcAlpha,d.blendDstAlpha,d.premultipliedAlpha),o.setFunc(d.depthFunc),o.setTest(d.depthTest),o.setMask(d.depthWrite),i.setMask(d.colorWrite);const QA=d.stencilWrite;t.setTest(QA),QA&&(t.setMask(d.stencilWriteMask),t.setFunc(d.stencilFunc,d.stencilRef,d.stencilFuncMask),t.setOp(d.stencilFail,d.stencilZFail,d.stencilZPass)),fA(d.polygonOffset,d.polygonOffsetFactor,d.polygonOffsetUnits),d.alphaToCoverage===!0?kA(Q.SAMPLE_ALPHA_TO_COVERAGE):YA(Q.SAMPLE_ALPHA_TO_COVERAGE)}function qA(d){N!==d&&(d?Q.frontFace(Q.CW):Q.frontFace(Q.CCW),N=d)}function eI(d){d!==Ls?(kA(Q.CULL_FACE),d!==H&&(d===bo?Q.cullFace(Q.BACK):d===Ys?Q.cullFace(Q.FRONT):Q.cullFace(Q.FRONT_AND_BACK))):YA(Q.CULL_FACE),H=d}function jA(d){d!==_&&(z&&Q.lineWidth(d),_=d)}function fA(d,iA,v){d?(kA(Q.POLYGON_OFFSET_FILL),(f!==iA||x!==v)&&(Q.polygonOffset(iA,v),f=iA,x=v)):YA(Q.POLYGON_OFFSET_FILL)}function QI(d){d?kA(Q.SCISSOR_TEST):YA(Q.SCISSOR_TEST)}function uI(d){d===void 0&&(d=Q.TEXTURE0+O-1),$!==d&&(Q.activeTexture(d),$=d)}function HI(d,iA,v){v===void 0&&($===null?v=Q.TEXTURE0+O-1:v=$);let QA=AA[v];QA===void 0&&(QA={type:void 0,texture:void 0},AA[v]=QA),(QA.type!==d||QA.texture!==iA)&&($!==v&&(Q.activeTexture(v),$=v),Q.bindTexture(d,iA||sA[d]),QA.type=d,QA.texture=iA)}function K(){const d=AA[$];d!==void 0&&d.type!==void 0&&(Q.bindTexture(d.type,null),d.type=void 0,d.texture=void 0)}function k(){try{Q.compressedTexImage2D.apply(Q,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function P(){try{Q.compressedTexImage3D.apply(Q,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function CA(){try{Q.texSubImage2D.apply(Q,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function BA(){try{Q.texSubImage3D.apply(Q,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function oA(){try{Q.compressedTexSubImage2D.apply(Q,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function SA(){try{Q.compressedTexSubImage3D.apply(Q,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function tA(){try{Q.texStorage2D.apply(Q,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function V(){try{Q.texStorage3D.apply(Q,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function yA(){try{Q.texImage2D.apply(Q,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function MA(){try{Q.texImage3D.apply(Q,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function KA(d){IA.equals(d)===!1&&(Q.scissor(d.x,d.y,d.z,d.w),IA.copy(d))}function rA(d){gA.equals(d)===!1&&(Q.viewport(d.x,d.y,d.z,d.w),gA.copy(d))}function cA(d,iA){let v=a.get(iA);v===void 0&&(v=new WeakMap,a.set(iA,v));let QA=v.get(d);QA===void 0&&(QA=Q.getUniformBlockIndex(iA,d.name),v.set(d,QA))}function vA(d,iA){const QA=a.get(iA).get(d);e.get(iA)!==QA&&(Q.uniformBlockBinding(iA,QA,d.__bindingPointIndex),e.set(iA,QA))}function iI(){Q.disable(Q.BLEND),Q.disable(Q.CULL_FACE),Q.disable(Q.DEPTH_TEST),Q.disable(Q.POLYGON_OFFSET_FILL),Q.disable(Q.SCISSOR_TEST),Q.disable(Q.STENCIL_TEST),Q.disable(Q.SAMPLE_ALPHA_TO_COVERAGE),Q.blendEquation(Q.FUNC_ADD),Q.blendFunc(Q.ONE,Q.ZERO),Q.blendFuncSeparate(Q.ONE,Q.ZERO,Q.ONE,Q.ZERO),Q.colorMask(!0,!0,!0,!0),Q.clearColor(0,0,0,0),Q.depthMask(!0),Q.depthFunc(Q.LESS),Q.clearDepth(1),Q.stencilMask(4294967295),Q.stencilFunc(Q.ALWAYS,0,4294967295),Q.stencilOp(Q.KEEP,Q.KEEP,Q.KEEP),Q.clearStencil(0),Q.cullFace(Q.BACK),Q.frontFace(Q.CCW),Q.polygonOffset(0,0),Q.activeTexture(Q.TEXTURE0),Q.bindFramebuffer(Q.FRAMEBUFFER,null),g===!0&&(Q.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null),Q.bindFramebuffer(Q.READ_FRAMEBUFFER,null)),Q.useProgram(null),Q.lineWidth(1),Q.scissor(0,0,Q.canvas.width,Q.canvas.height),Q.viewport(0,0,Q.canvas.width,Q.canvas.height),s={},$=null,AA={},D={},c=new WeakMap,w=[],h=null,n=!1,l=null,G=null,M=null,U=null,J=null,q=null,p=null,S=!1,N=null,H=null,_=null,f=null,x=null,IA.set(0,0,Q.canvas.width,Q.canvas.height),gA.set(0,0,Q.canvas.width,Q.canvas.height),i.reset(),o.reset(),t.reset()}return{buffers:{color:i,depth:o,stencil:t},enable:kA,disable:YA,bindFramebuffer:RA,drawBuffers:qI,useProgram:_A,setBlending:JA,setMaterial:bA,setFlipSided:qA,setCullFace:eI,setLineWidth:jA,setPolygonOffset:fA,setScissorTest:QI,activeTexture:uI,bindTexture:HI,unbindTexture:K,compressedTexImage2D:k,compressedTexImage3D:P,texImage2D:yA,texImage3D:MA,updateUBOMapping:cA,uniformBlockBinding:vA,texStorage2D:tA,texStorage3D:V,texSubImage2D:CA,texSubImage3D:BA,compressedTexSubImage2D:oA,compressedTexSubImage3D:SA,scissor:KA,viewport:rA,reset:iI}}function Hw(Q,A,I,g,C,B,E){const i=C.isWebGL2,o=C.maxTextures,t=C.maxCubemapSize,e=C.maxTextureSize,a=C.maxSamples,s=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,D=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let w;const h=new WeakMap;let n=!1;try{n=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function l(K,k){return n?new OffscreenCanvas(K,k):XB("canvas")}function G(K,k,P,CA){let BA=1;if((K.width>CA||K.height>CA)&&(BA=CA/Math.max(K.width,K.height)),BA<1||k===!0)if(typeof HTMLImageElement<"u"&&K instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&K instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&K instanceof ImageBitmap){const oA=k?AE:Math.floor,SA=oA(BA*K.width),tA=oA(BA*K.height);w===void 0&&(w=l(SA,tA));const V=P?l(SA,tA):w;return V.width=SA,V.height=tA,V.getContext("2d").drawImage(K,0,0,SA,tA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+SA+"x"+tA+")."),V}else return"data"in K&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),K;return K}function M(K){return Li(K.width)&&Li(K.height)}function U(K){return i?!1:K.wrapS!==XI||K.wrapT!==XI||K.minFilter!==LI&&K.minFilter!==_I}function J(K,k){return K.generateMipmaps&&k&&K.minFilter!==LI&&K.minFilter!==_I}function q(K){Q.generateMipmap(K)}function p(K,k,P,CA,BA=!1){if(i===!1)return k;if(K!==null){if(Q[K]!==void 0)return Q[K];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+K+"'")}let oA=k;return k===Q.RED&&(P===Q.FLOAT&&(oA=Q.R32F),P===Q.HALF_FLOAT&&(oA=Q.R16F),P===Q.UNSIGNED_BYTE&&(oA=Q.R8)),k===Q.RG&&(P===Q.FLOAT&&(oA=Q.RG32F),P===Q.HALF_FLOAT&&(oA=Q.RG16F),P===Q.UNSIGNED_BYTE&&(oA=Q.RG8)),k===Q.RGBA&&(P===Q.FLOAT&&(oA=Q.RGBA32F),P===Q.HALF_FLOAT&&(oA=Q.RGBA16F),P===Q.UNSIGNED_BYTE&&(oA=CA===NA&&BA===!1?Q.SRGB8_ALPHA8:Q.RGBA8),P===Q.UNSIGNED_SHORT_4_4_4_4&&(oA=Q.RGBA4),P===Q.UNSIGNED_SHORT_5_5_5_1&&(oA=Q.RGB5_A1)),(oA===Q.R16F||oA===Q.R32F||oA===Q.RG16F||oA===Q.RG32F||oA===Q.RGBA16F||oA===Q.RGBA32F)&&A.get("EXT_color_buffer_float"),oA}function S(K,k,P){return J(K,P)===!0||K.isFramebufferTexture&&K.minFilter!==LI&&K.minFilter!==_I?Math.log2(Math.max(k.width,k.height))+1:K.mipmaps!==void 0&&K.mipmaps.length>0?K.mipmaps.length:K.isCompressedTexture&&Array.isArray(K.image)?k.mipmaps.length:1}function N(K){return K===LI||K===Ri||K===vQ?Q.NEAREST:Q.LINEAR}function H(K){const k=K.target;k.removeEventListener("dispose",H),f(k),k.isVideoTexture&&c.delete(k)}function _(K){const k=K.target;k.removeEventListener("dispose",_),O(k)}function f(K){const k=g.get(K);if(k.__webglInit===void 0)return;const P=K.source,CA=h.get(P);if(CA){const BA=CA[k.__cacheKey];BA.usedTimes--,BA.usedTimes===0&&x(K),Object.keys(CA).length===0&&h.delete(P)}g.remove(K)}function x(K){const k=g.get(K);Q.deleteTexture(k.__webglTexture);const P=K.source,CA=h.get(P);delete CA[k.__cacheKey],E.memory.textures--}function O(K){const k=K.texture,P=g.get(K),CA=g.get(k);if(CA.__webglTexture!==void 0&&(Q.deleteTexture(CA.__webglTexture),E.memory.textures--),K.depthTexture&&K.depthTexture.dispose(),K.isWebGLCubeRenderTarget)for(let BA=0;BA<6;BA++)Q.deleteFramebuffer(P.__webglFramebuffer[BA]),P.__webglDepthbuffer&&Q.deleteRenderbuffer(P.__webglDepthbuffer[BA]);else{if(Q.deleteFramebuffer(P.__webglFramebuffer),P.__webglDepthbuffer&&Q.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&Q.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let BA=0;BA<P.__webglColorRenderbuffer.length;BA++)P.__webglColorRenderbuffer[BA]&&Q.deleteRenderbuffer(P.__webglColorRenderbuffer[BA]);P.__webglDepthRenderbuffer&&Q.deleteRenderbuffer(P.__webglDepthRenderbuffer)}if(K.isWebGLMultipleRenderTargets)for(let BA=0,oA=k.length;BA<oA;BA++){const SA=g.get(k[BA]);SA.__webglTexture&&(Q.deleteTexture(SA.__webglTexture),E.memory.textures--),g.remove(k[BA])}g.remove(k),g.remove(K)}let z=0;function j(){z=0}function X(){const K=z;return K>=o&&console.warn("THREE.WebGLTextures: Trying to use "+K+" texture units while this GPU supports only "+o),z+=1,K}function $(K){const k=[];return k.push(K.wrapS),k.push(K.wrapT),k.push(K.wrapR||0),k.push(K.magFilter),k.push(K.minFilter),k.push(K.anisotropy),k.push(K.internalFormat),k.push(K.format),k.push(K.type),k.push(K.generateMipmaps),k.push(K.premultiplyAlpha),k.push(K.flipY),k.push(K.unpackAlignment),k.push(K.colorSpace),k.join()}function AA(K,k){const P=g.get(K);if(K.isVideoTexture&&uI(K),K.isRenderTargetTexture===!1&&K.version>0&&P.__version!==K.version){const CA=K.image;if(CA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(CA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{RA(P,K,k);return}}I.bindTexture(Q.TEXTURE_2D,P.__webglTexture,Q.TEXTURE0+k)}function DA(K,k){const P=g.get(K);if(K.version>0&&P.__version!==K.version){RA(P,K,k);return}I.bindTexture(Q.TEXTURE_2D_ARRAY,P.__webglTexture,Q.TEXTURE0+k)}function b(K,k){const P=g.get(K);if(K.version>0&&P.__version!==K.version){RA(P,K,k);return}I.bindTexture(Q.TEXTURE_3D,P.__webglTexture,Q.TEXTURE0+k)}function IA(K,k){const P=g.get(K);if(K.version>0&&P.__version!==K.version){qI(P,K,k);return}I.bindTexture(Q.TEXTURE_CUBE_MAP,P.__webglTexture,Q.TEXTURE0+k)}const gA={[DC]:Q.REPEAT,[XI]:Q.CLAMP_TO_EDGE,[zQ]:Q.MIRRORED_REPEAT},aA={[LI]:Q.NEAREST,[Ri]:Q.NEAREST_MIPMAP_NEAREST,[vQ]:Q.NEAREST_MIPMAP_LINEAR,[_I]:Q.LINEAR,[Ve]:Q.LINEAR_MIPMAP_NEAREST,[HC]:Q.LINEAR_MIPMAP_LINEAR},sA={[yD]:Q.NEVER,[RD]:Q.ALWAYS,[MD]:Q.LESS,[ND]:Q.LEQUAL,[UD]:Q.EQUAL,[FD]:Q.GEQUAL,[KD]:Q.GREATER,[JD]:Q.NOTEQUAL};function kA(K,k,P){if(P?(Q.texParameteri(K,Q.TEXTURE_WRAP_S,gA[k.wrapS]),Q.texParameteri(K,Q.TEXTURE_WRAP_T,gA[k.wrapT]),(K===Q.TEXTURE_3D||K===Q.TEXTURE_2D_ARRAY)&&Q.texParameteri(K,Q.TEXTURE_WRAP_R,gA[k.wrapR]),Q.texParameteri(K,Q.TEXTURE_MAG_FILTER,aA[k.magFilter]),Q.texParameteri(K,Q.TEXTURE_MIN_FILTER,aA[k.minFilter])):(Q.texParameteri(K,Q.TEXTURE_WRAP_S,Q.CLAMP_TO_EDGE),Q.texParameteri(K,Q.TEXTURE_WRAP_T,Q.CLAMP_TO_EDGE),(K===Q.TEXTURE_3D||K===Q.TEXTURE_2D_ARRAY)&&Q.texParameteri(K,Q.TEXTURE_WRAP_R,Q.CLAMP_TO_EDGE),(k.wrapS!==XI||k.wrapT!==XI)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),Q.texParameteri(K,Q.TEXTURE_MAG_FILTER,N(k.magFilter)),Q.texParameteri(K,Q.TEXTURE_MIN_FILTER,N(k.minFilter)),k.minFilter!==LI&&k.minFilter!==_I&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),k.compareFunction&&(Q.texParameteri(K,Q.TEXTURE_COMPARE_MODE,Q.COMPARE_REF_TO_TEXTURE),Q.texParameteri(K,Q.TEXTURE_COMPARE_FUNC,sA[k.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){const CA=A.get("EXT_texture_filter_anisotropic");if(k.magFilter===LI||k.minFilter!==vQ&&k.minFilter!==HC||k.type===Pg&&A.has("OES_texture_float_linear")===!1||i===!1&&k.type===VB&&A.has("OES_texture_half_float_linear")===!1)return;(k.anisotropy>1||g.get(k).__currentAnisotropy)&&(Q.texParameterf(K,CA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,C.getMaxAnisotropy())),g.get(k).__currentAnisotropy=k.anisotropy)}}function YA(K,k){let P=!1;K.__webglInit===void 0&&(K.__webglInit=!0,k.addEventListener("dispose",H));const CA=k.source;let BA=h.get(CA);BA===void 0&&(BA={},h.set(CA,BA));const oA=$(k);if(oA!==K.__cacheKey){BA[oA]===void 0&&(BA[oA]={texture:Q.createTexture(),usedTimes:0},E.memory.textures++,P=!0),BA[oA].usedTimes++;const SA=BA[K.__cacheKey];SA!==void 0&&(BA[K.__cacheKey].usedTimes--,SA.usedTimes===0&&x(k)),K.__cacheKey=oA,K.__webglTexture=BA[oA].texture}return P}function RA(K,k,P){let CA=Q.TEXTURE_2D;(k.isDataArrayTexture||k.isCompressedArrayTexture)&&(CA=Q.TEXTURE_2D_ARRAY),k.isData3DTexture&&(CA=Q.TEXTURE_3D);const BA=YA(K,k),oA=k.source;I.bindTexture(CA,K.__webglTexture,Q.TEXTURE0+P);const SA=g.get(oA);if(oA.version!==SA.__version||BA===!0){I.activeTexture(Q.TEXTURE0+P),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,k.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,k.unpackAlignment),Q.pixelStorei(Q.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q.NONE);const tA=U(k)&&M(k.image)===!1;let V=G(k.image,tA,!1,e);V=HI(k,V);const yA=M(V)||i,MA=B.convert(k.format,k.colorSpace);let KA=B.convert(k.type),rA=p(k.internalFormat,MA,KA,k.colorSpace);kA(CA,k,yA);let cA;const vA=k.mipmaps,iI=i&&k.isVideoTexture!==!0,d=SA.__version===void 0||BA===!0,iA=S(k,V,yA);if(k.isDepthTexture)rA=Q.DEPTH_COMPONENT,i?k.type===Pg?rA=Q.DEPTH_COMPONENT32F:k.type===oC?rA=Q.DEPTH_COMPONENT24:k.type===LC?rA=Q.DEPTH24_STENCIL8:rA=Q.DEPTH_COMPONENT16:k.type===Pg&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),k.format===YC&&rA===Q.DEPTH_COMPONENT&&k.type!==Ao&&k.type!==oC&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),k.type=oC,KA=B.convert(k.type)),k.format===SB&&rA===Q.DEPTH_COMPONENT&&(rA=Q.DEPTH_STENCIL,k.type!==LC&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),k.type=LC,KA=B.convert(k.type))),d&&(iI?I.texStorage2D(Q.TEXTURE_2D,1,rA,V.width,V.height):I.texImage2D(Q.TEXTURE_2D,0,rA,V.width,V.height,0,MA,KA,null));else if(k.isDataTexture)if(vA.length>0&&yA){iI&&d&&I.texStorage2D(Q.TEXTURE_2D,iA,rA,vA[0].width,vA[0].height);for(let v=0,QA=vA.length;v<QA;v++)cA=vA[v],iI?I.texSubImage2D(Q.TEXTURE_2D,v,0,0,cA.width,cA.height,MA,KA,cA.data):I.texImage2D(Q.TEXTURE_2D,v,rA,cA.width,cA.height,0,MA,KA,cA.data);k.generateMipmaps=!1}else iI?(d&&I.texStorage2D(Q.TEXTURE_2D,iA,rA,V.width,V.height),I.texSubImage2D(Q.TEXTURE_2D,0,0,0,V.width,V.height,MA,KA,V.data)):I.texImage2D(Q.TEXTURE_2D,0,rA,V.width,V.height,0,MA,KA,V.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){iI&&d&&I.texStorage3D(Q.TEXTURE_2D_ARRAY,iA,rA,vA[0].width,vA[0].height,V.depth);for(let v=0,QA=vA.length;v<QA;v++)cA=vA[v],k.format!==tg?MA!==null?iI?I.compressedTexSubImage3D(Q.TEXTURE_2D_ARRAY,v,0,0,0,cA.width,cA.height,V.depth,MA,cA.data,0,0):I.compressedTexImage3D(Q.TEXTURE_2D_ARRAY,v,rA,cA.width,cA.height,V.depth,0,cA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):iI?I.texSubImage3D(Q.TEXTURE_2D_ARRAY,v,0,0,0,cA.width,cA.height,V.depth,MA,KA,cA.data):I.texImage3D(Q.TEXTURE_2D_ARRAY,v,rA,cA.width,cA.height,V.depth,0,MA,KA,cA.data)}else{iI&&d&&I.texStorage2D(Q.TEXTURE_2D,iA,rA,vA[0].width,vA[0].height);for(let v=0,QA=vA.length;v<QA;v++)cA=vA[v],k.format!==tg?MA!==null?iI?I.compressedTexSubImage2D(Q.TEXTURE_2D,v,0,0,cA.width,cA.height,MA,cA.data):I.compressedTexImage2D(Q.TEXTURE_2D,v,rA,cA.width,cA.height,0,cA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):iI?I.texSubImage2D(Q.TEXTURE_2D,v,0,0,cA.width,cA.height,MA,KA,cA.data):I.texImage2D(Q.TEXTURE_2D,v,rA,cA.width,cA.height,0,MA,KA,cA.data)}else if(k.isDataArrayTexture)iI?(d&&I.texStorage3D(Q.TEXTURE_2D_ARRAY,iA,rA,V.width,V.height,V.depth),I.texSubImage3D(Q.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,MA,KA,V.data)):I.texImage3D(Q.TEXTURE_2D_ARRAY,0,rA,V.width,V.height,V.depth,0,MA,KA,V.data);else if(k.isData3DTexture)iI?(d&&I.texStorage3D(Q.TEXTURE_3D,iA,rA,V.width,V.height,V.depth),I.texSubImage3D(Q.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,MA,KA,V.data)):I.texImage3D(Q.TEXTURE_3D,0,rA,V.width,V.height,V.depth,0,MA,KA,V.data);else if(k.isFramebufferTexture){if(d)if(iI)I.texStorage2D(Q.TEXTURE_2D,iA,rA,V.width,V.height);else{let v=V.width,QA=V.height;for(let eA=0;eA<iA;eA++)I.texImage2D(Q.TEXTURE_2D,eA,rA,v,QA,0,MA,KA,null),v>>=1,QA>>=1}}else if(vA.length>0&&yA){iI&&d&&I.texStorage2D(Q.TEXTURE_2D,iA,rA,vA[0].width,vA[0].height);for(let v=0,QA=vA.length;v<QA;v++)cA=vA[v],iI?I.texSubImage2D(Q.TEXTURE_2D,v,0,0,MA,KA,cA):I.texImage2D(Q.TEXTURE_2D,v,rA,MA,KA,cA);k.generateMipmaps=!1}else iI?(d&&I.texStorage2D(Q.TEXTURE_2D,iA,rA,V.width,V.height),I.texSubImage2D(Q.TEXTURE_2D,0,0,0,MA,KA,V)):I.texImage2D(Q.TEXTURE_2D,0,rA,MA,KA,V);J(k,yA)&&q(CA),SA.__version=oA.version,k.onUpdate&&k.onUpdate(k)}K.__version=k.version}function qI(K,k,P){if(k.image.length!==6)return;const CA=YA(K,k),BA=k.source;I.bindTexture(Q.TEXTURE_CUBE_MAP,K.__webglTexture,Q.TEXTURE0+P);const oA=g.get(BA);if(BA.version!==oA.__version||CA===!0){I.activeTexture(Q.TEXTURE0+P),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,k.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,k.unpackAlignment),Q.pixelStorei(Q.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q.NONE);const SA=k.isCompressedTexture||k.image[0].isCompressedTexture,tA=k.image[0]&&k.image[0].isDataTexture,V=[];for(let v=0;v<6;v++)!SA&&!tA?V[v]=G(k.image[v],!1,!0,t):V[v]=tA?k.image[v].image:k.image[v],V[v]=HI(k,V[v]);const yA=V[0],MA=M(yA)||i,KA=B.convert(k.format,k.colorSpace),rA=B.convert(k.type),cA=p(k.internalFormat,KA,rA,k.colorSpace),vA=i&&k.isVideoTexture!==!0,iI=oA.__version===void 0||CA===!0;let d=S(k,yA,MA);kA(Q.TEXTURE_CUBE_MAP,k,MA);let iA;if(SA){vA&&iI&&I.texStorage2D(Q.TEXTURE_CUBE_MAP,d,cA,yA.width,yA.height);for(let v=0;v<6;v++){iA=V[v].mipmaps;for(let QA=0;QA<iA.length;QA++){const eA=iA[QA];k.format!==tg?KA!==null?vA?I.compressedTexSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+v,QA,0,0,eA.width,eA.height,KA,eA.data):I.compressedTexImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+v,QA,cA,eA.width,eA.height,0,eA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):vA?I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+v,QA,0,0,eA.width,eA.height,KA,rA,eA.data):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+v,QA,cA,eA.width,eA.height,0,KA,rA,eA.data)}}}else{iA=k.mipmaps,vA&&iI&&(iA.length>0&&d++,I.texStorage2D(Q.TEXTURE_CUBE_MAP,d,cA,V[0].width,V[0].height));for(let v=0;v<6;v++)if(tA){vA?I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,0,0,V[v].width,V[v].height,KA,rA,V[v].data):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,cA,V[v].width,V[v].height,0,KA,rA,V[v].data);for(let QA=0;QA<iA.length;QA++){const AI=iA[QA].image[v].image;vA?I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+v,QA+1,0,0,AI.width,AI.height,KA,rA,AI.data):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+v,QA+1,cA,AI.width,AI.height,0,KA,rA,AI.data)}}else{vA?I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,0,0,KA,rA,V[v]):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,cA,KA,rA,V[v]);for(let QA=0;QA<iA.length;QA++){const eA=iA[QA];vA?I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+v,QA+1,0,0,KA,rA,eA.image[v]):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+v,QA+1,cA,KA,rA,eA.image[v])}}}J(k,MA)&&q(Q.TEXTURE_CUBE_MAP),oA.__version=BA.version,k.onUpdate&&k.onUpdate(k)}K.__version=k.version}function _A(K,k,P,CA,BA){const oA=B.convert(P.format,P.colorSpace),SA=B.convert(P.type),tA=p(P.internalFormat,oA,SA,P.colorSpace);g.get(k).__hasExternalTextures||(BA===Q.TEXTURE_3D||BA===Q.TEXTURE_2D_ARRAY?I.texImage3D(BA,0,tA,k.width,k.height,k.depth,0,oA,SA,null):I.texImage2D(BA,0,tA,k.width,k.height,0,oA,SA,null)),I.bindFramebuffer(Q.FRAMEBUFFER,K),QI(k)?s.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,CA,BA,g.get(P).__webglTexture,0,fA(k)):(BA===Q.TEXTURE_2D||BA>=Q.TEXTURE_CUBE_MAP_POSITIVE_X&&BA<=Q.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&Q.framebufferTexture2D(Q.FRAMEBUFFER,CA,BA,g.get(P).__webglTexture,0),I.bindFramebuffer(Q.FRAMEBUFFER,null)}function m(K,k,P){if(Q.bindRenderbuffer(Q.RENDERBUFFER,K),k.depthBuffer&&!k.stencilBuffer){let CA=Q.DEPTH_COMPONENT16;if(P||QI(k)){const BA=k.depthTexture;BA&&BA.isDepthTexture&&(BA.type===Pg?CA=Q.DEPTH_COMPONENT32F:BA.type===oC&&(CA=Q.DEPTH_COMPONENT24));const oA=fA(k);QI(k)?s.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,oA,CA,k.width,k.height):Q.renderbufferStorageMultisample(Q.RENDERBUFFER,oA,CA,k.width,k.height)}else Q.renderbufferStorage(Q.RENDERBUFFER,CA,k.width,k.height);Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.RENDERBUFFER,K)}else if(k.depthBuffer&&k.stencilBuffer){const CA=fA(k);P&&QI(k)===!1?Q.renderbufferStorageMultisample(Q.RENDERBUFFER,CA,Q.DEPTH24_STENCIL8,k.width,k.height):QI(k)?s.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,CA,Q.DEPTH24_STENCIL8,k.width,k.height):Q.renderbufferStorage(Q.RENDERBUFFER,Q.DEPTH_STENCIL,k.width,k.height),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.RENDERBUFFER,K)}else{const CA=k.isWebGLMultipleRenderTargets===!0?k.texture:[k.texture];for(let BA=0;BA<CA.length;BA++){const oA=CA[BA],SA=B.convert(oA.format,oA.colorSpace),tA=B.convert(oA.type),V=p(oA.internalFormat,SA,tA,oA.colorSpace),yA=fA(k);P&&QI(k)===!1?Q.renderbufferStorageMultisample(Q.RENDERBUFFER,yA,V,k.width,k.height):QI(k)?s.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,yA,V,k.width,k.height):Q.renderbufferStorage(Q.RENDERBUFFER,V,k.width,k.height)}}Q.bindRenderbuffer(Q.RENDERBUFFER,null)}function fI(K,k){if(k&&k.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(Q.FRAMEBUFFER,K),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(k.depthTexture).__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)&&(k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0),AA(k.depthTexture,0);const CA=g.get(k.depthTexture).__webglTexture,BA=fA(k);if(k.depthTexture.format===YC)QI(k)?s.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.TEXTURE_2D,CA,0,BA):Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.TEXTURE_2D,CA,0);else if(k.depthTexture.format===SB)QI(k)?s.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.TEXTURE_2D,CA,0,BA):Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.TEXTURE_2D,CA,0);else throw new Error("Unknown depthTexture format")}function JA(K){const k=g.get(K),P=K.isWebGLCubeRenderTarget===!0;if(K.depthTexture&&!k.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");fI(k.__webglFramebuffer,K)}else if(P){k.__webglDepthbuffer=[];for(let CA=0;CA<6;CA++)I.bindFramebuffer(Q.FRAMEBUFFER,k.__webglFramebuffer[CA]),k.__webglDepthbuffer[CA]=Q.createRenderbuffer(),m(k.__webglDepthbuffer[CA],K,!1)}else I.bindFramebuffer(Q.FRAMEBUFFER,k.__webglFramebuffer),k.__webglDepthbuffer=Q.createRenderbuffer(),m(k.__webglDepthbuffer,K,!1);I.bindFramebuffer(Q.FRAMEBUFFER,null)}function bA(K,k,P){const CA=g.get(K);k!==void 0&&_A(CA.__webglFramebuffer,K,K.texture,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D),P!==void 0&&JA(K)}function qA(K){const k=K.texture,P=g.get(K),CA=g.get(k);K.addEventListener("dispose",_),K.isWebGLMultipleRenderTargets!==!0&&(CA.__webglTexture===void 0&&(CA.__webglTexture=Q.createTexture()),CA.__version=k.version,E.memory.textures++);const BA=K.isWebGLCubeRenderTarget===!0,oA=K.isWebGLMultipleRenderTargets===!0,SA=M(K)||i;if(BA){P.__webglFramebuffer=[];for(let tA=0;tA<6;tA++)P.__webglFramebuffer[tA]=Q.createFramebuffer()}else{if(P.__webglFramebuffer=Q.createFramebuffer(),oA)if(C.drawBuffers){const tA=K.texture;for(let V=0,yA=tA.length;V<yA;V++){const MA=g.get(tA[V]);MA.__webglTexture===void 0&&(MA.__webglTexture=Q.createTexture(),E.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(i&&K.samples>0&&QI(K)===!1){const tA=oA?k:[k];P.__webglMultisampledFramebuffer=Q.createFramebuffer(),P.__webglColorRenderbuffer=[],I.bindFramebuffer(Q.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let V=0;V<tA.length;V++){const yA=tA[V];P.__webglColorRenderbuffer[V]=Q.createRenderbuffer(),Q.bindRenderbuffer(Q.RENDERBUFFER,P.__webglColorRenderbuffer[V]);const MA=B.convert(yA.format,yA.colorSpace),KA=B.convert(yA.type),rA=p(yA.internalFormat,MA,KA,yA.colorSpace,K.isXRRenderTarget===!0),cA=fA(K);Q.renderbufferStorageMultisample(Q.RENDERBUFFER,cA,rA,K.width,K.height),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+V,Q.RENDERBUFFER,P.__webglColorRenderbuffer[V])}Q.bindRenderbuffer(Q.RENDERBUFFER,null),K.depthBuffer&&(P.__webglDepthRenderbuffer=Q.createRenderbuffer(),m(P.__webglDepthRenderbuffer,K,!0)),I.bindFramebuffer(Q.FRAMEBUFFER,null)}}if(BA){I.bindTexture(Q.TEXTURE_CUBE_MAP,CA.__webglTexture),kA(Q.TEXTURE_CUBE_MAP,k,SA);for(let tA=0;tA<6;tA++)_A(P.__webglFramebuffer[tA],K,k,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+tA);J(k,SA)&&q(Q.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(oA){const tA=K.texture;for(let V=0,yA=tA.length;V<yA;V++){const MA=tA[V],KA=g.get(MA);I.bindTexture(Q.TEXTURE_2D,KA.__webglTexture),kA(Q.TEXTURE_2D,MA,SA),_A(P.__webglFramebuffer,K,MA,Q.COLOR_ATTACHMENT0+V,Q.TEXTURE_2D),J(MA,SA)&&q(Q.TEXTURE_2D)}I.unbindTexture()}else{let tA=Q.TEXTURE_2D;(K.isWebGL3DRenderTarget||K.isWebGLArrayRenderTarget)&&(i?tA=K.isWebGL3DRenderTarget?Q.TEXTURE_3D:Q.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),I.bindTexture(tA,CA.__webglTexture),kA(tA,k,SA),_A(P.__webglFramebuffer,K,k,Q.COLOR_ATTACHMENT0,tA),J(k,SA)&&q(tA),I.unbindTexture()}K.depthBuffer&&JA(K)}function eI(K){const k=M(K)||i,P=K.isWebGLMultipleRenderTargets===!0?K.texture:[K.texture];for(let CA=0,BA=P.length;CA<BA;CA++){const oA=P[CA];if(J(oA,k)){const SA=K.isWebGLCubeRenderTarget?Q.TEXTURE_CUBE_MAP:Q.TEXTURE_2D,tA=g.get(oA).__webglTexture;I.bindTexture(SA,tA),q(SA),I.unbindTexture()}}}function jA(K){if(i&&K.samples>0&&QI(K)===!1){const k=K.isWebGLMultipleRenderTargets?K.texture:[K.texture],P=K.width,CA=K.height;let BA=Q.COLOR_BUFFER_BIT;const oA=[],SA=K.stencilBuffer?Q.DEPTH_STENCIL_ATTACHMENT:Q.DEPTH_ATTACHMENT,tA=g.get(K),V=K.isWebGLMultipleRenderTargets===!0;if(V)for(let yA=0;yA<k.length;yA++)I.bindFramebuffer(Q.FRAMEBUFFER,tA.__webglMultisampledFramebuffer),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+yA,Q.RENDERBUFFER,null),I.bindFramebuffer(Q.FRAMEBUFFER,tA.__webglFramebuffer),Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0+yA,Q.TEXTURE_2D,null,0);I.bindFramebuffer(Q.READ_FRAMEBUFFER,tA.__webglMultisampledFramebuffer),I.bindFramebuffer(Q.DRAW_FRAMEBUFFER,tA.__webglFramebuffer);for(let yA=0;yA<k.length;yA++){oA.push(Q.COLOR_ATTACHMENT0+yA),K.depthBuffer&&oA.push(SA);const MA=tA.__ignoreDepthValues!==void 0?tA.__ignoreDepthValues:!1;if(MA===!1&&(K.depthBuffer&&(BA|=Q.DEPTH_BUFFER_BIT),K.stencilBuffer&&(BA|=Q.STENCIL_BUFFER_BIT)),V&&Q.framebufferRenderbuffer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.RENDERBUFFER,tA.__webglColorRenderbuffer[yA]),MA===!0&&(Q.invalidateFramebuffer(Q.READ_FRAMEBUFFER,[SA]),Q.invalidateFramebuffer(Q.DRAW_FRAMEBUFFER,[SA])),V){const KA=g.get(k[yA]).__webglTexture;Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,KA,0)}Q.blitFramebuffer(0,0,P,CA,0,0,P,CA,BA,Q.NEAREST),D&&Q.invalidateFramebuffer(Q.READ_FRAMEBUFFER,oA)}if(I.bindFramebuffer(Q.READ_FRAMEBUFFER,null),I.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null),V)for(let yA=0;yA<k.length;yA++){I.bindFramebuffer(Q.FRAMEBUFFER,tA.__webglMultisampledFramebuffer),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+yA,Q.RENDERBUFFER,tA.__webglColorRenderbuffer[yA]);const MA=g.get(k[yA]).__webglTexture;I.bindFramebuffer(Q.FRAMEBUFFER,tA.__webglFramebuffer),Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0+yA,Q.TEXTURE_2D,MA,0)}I.bindFramebuffer(Q.DRAW_FRAMEBUFFER,tA.__webglMultisampledFramebuffer)}}function fA(K){return Math.min(a,K.samples)}function QI(K){const k=g.get(K);return i&&K.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function uI(K){const k=E.render.frame;c.get(K)!==k&&(c.set(K,k),K.update())}function HI(K,k){const P=K.colorSpace,CA=K.format,BA=K.type;return K.isCompressedTexture===!0||K.format===di||P!==qg&&P!==uC&&(P===NA?i===!1?A.has("EXT_sRGB")===!0&&CA===tg?(K.format=di,K.minFilter=_I,K.generateMipmaps=!1):k=ia.sRGBToLinear(k):(CA!==tg||BA!==aC)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),k}this.allocateTextureUnit=X,this.resetTextureUnits=j,this.setTexture2D=AA,this.setTexture2DArray=DA,this.setTexture3D=b,this.setTextureCube=IA,this.rebindTextures=bA,this.setupRenderTarget=qA,this.updateRenderTargetMipmap=eI,this.updateMultisampleRenderTarget=jA,this.setupDepthRenderbuffer=JA,this.setupFrameBufferTexture=_A,this.useMultisampledRTT=QI}function mw(Q,A,I){const g=I.isWebGL2;function C(B,E=uC){let i;if(B===aC)return Q.UNSIGNED_BYTE;if(B===Xe)return Q.UNSIGNED_SHORT_4_4_4_4;if(B===ze)return Q.UNSIGNED_SHORT_5_5_5_1;if(B===oD)return Q.BYTE;if(B===tD)return Q.SHORT;if(B===Ao)return Q.UNSIGNED_SHORT;if(B===_e)return Q.INT;if(B===oC)return Q.UNSIGNED_INT;if(B===Pg)return Q.FLOAT;if(B===VB)return g?Q.HALF_FLOAT:(i=A.get("OES_texture_half_float"),i!==null?i.HALF_FLOAT_OES:null);if(B===eD)return Q.ALPHA;if(B===tg)return Q.RGBA;if(B===aD)return Q.LUMINANCE;if(B===sD)return Q.LUMINANCE_ALPHA;if(B===YC)return Q.DEPTH_COMPONENT;if(B===SB)return Q.DEPTH_STENCIL;if(B===di)return i=A.get("EXT_sRGB"),i!==null?i.SRGB_ALPHA_EXT:null;if(B===DD)return Q.RED;if(B===$e)return Q.RED_INTEGER;if(B===nD)return Q.RG;if(B===Aa)return Q.RG_INTEGER;if(B===Ia)return Q.RGBA_INTEGER;if(B===mE||B===TE||B===xE||B===OE)if(E===NA)if(i=A.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(B===mE)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(B===TE)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(B===xE)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(B===OE)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=A.get("WEBGL_compressed_texture_s3tc"),i!==null){if(B===mE)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(B===TE)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(B===xE)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(B===OE)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(B===Vo||B===_o||B===Xo||B===zo)if(i=A.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(B===Vo)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(B===_o)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(B===Xo)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(B===zo)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(B===hD)return i=A.get("WEBGL_compressed_texture_etc1"),i!==null?i.COMPRESSED_RGB_ETC1_WEBGL:null;if(B===$o||B===At)if(i=A.get("WEBGL_compressed_texture_etc"),i!==null){if(B===$o)return E===NA?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(B===At)return E===NA?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(B===It||B===gt||B===Ct||B===Bt||B===Qt||B===Et||B===it||B===ot||B===tt||B===et||B===at||B===st||B===Dt||B===nt)if(i=A.get("WEBGL_compressed_texture_astc"),i!==null){if(B===It)return E===NA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(B===gt)return E===NA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(B===Ct)return E===NA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(B===Bt)return E===NA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(B===Qt)return E===NA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(B===Et)return E===NA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(B===it)return E===NA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(B===ot)return E===NA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(B===tt)return E===NA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(B===et)return E===NA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(B===at)return E===NA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(B===st)return E===NA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(B===Dt)return E===NA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(B===nt)return E===NA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(B===bE)if(i=A.get("EXT_texture_compression_bptc"),i!==null){if(B===bE)return E===NA?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(B===rD||B===ht||B===rt||B===ct)if(i=A.get("EXT_texture_compression_rgtc"),i!==null){if(B===bE)return i.COMPRESSED_RED_RGTC1_EXT;if(B===ht)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(B===rt)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(B===ct)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return B===LC?g?Q.UNSIGNED_INT_24_8:(i=A.get("WEBGL_depth_texture"),i!==null?i.UNSIGNED_INT_24_8_WEBGL:null):Q[B]!==void 0?Q[B]:null}return{convert:C}}class Tw extends xI{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class Rg extends BI{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xw={type:"move"};class si{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rg,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rg,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rg,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,B=null,E=null;const i=this._targetRay,o=this._grip,t=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(t&&A.hand){E=!0;for(const w of A.hand.values()){const h=I.getJointPose(w,g),n=this._getHandJoint(t,w);h!==null&&(n.matrix.fromArray(h.transform.matrix),n.matrix.decompose(n.position,n.rotation,n.scale),n.matrixWorldNeedsUpdate=!0,n.jointRadius=h.radius),n.visible=h!==null}const e=t.joints["index-finger-tip"],a=t.joints["thumb-tip"],s=e.position.distanceTo(a.position),D=.02,c=.005;t.inputState.pinching&&s>D+c?(t.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!t.inputState.pinching&&s<=D-c&&(t.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(B=I.getPose(A.gripSpace,g),B!==null&&(o.matrix.fromArray(B.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,B.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(B.linearVelocity)):o.hasLinearVelocity=!1,B.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(B.angularVelocity)):o.hasAngularVelocity=!1));i!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&B!==null&&(C=B),C!==null&&(i.matrix.fromArray(C.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,C.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(C.linearVelocity)):i.hasLinearVelocity=!1,C.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(C.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(xw)))}return i!==null&&(i.visible=C!==null),o!==null&&(o.visible=B!==null),t!==null&&(t.visible=E!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new Rg;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}class Ow extends KI{constructor(A,I,g,C,B,E,i,o,t,e){if(e=e!==void 0?e:YC,e!==YC&&e!==SB)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&e===YC&&(g=oC),g===void 0&&e===SB&&(g=LC),super(null,C,B,E,i,o,e,g,t),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=i!==void 0?i:LI,this.minFilter=o!==void 0?o:LI,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}class bw extends xC{constructor(A,I){super();const g=this;let C=null,B=1,E=null,i="local-floor",o=1,t=null,e=null,a=null,s=null,D=null,c=null;const w=I.getContextAttributes();let h=null,n=null;const l=[],G=[];let M=null;const U=new xI;U.layers.enable(1),U.viewport=new II;const J=new xI;J.layers.enable(2),J.viewport=new II;const q=[U,J],p=new Tw;p.layers.enable(1),p.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(b){M=b},this.getController=function(b){let IA=l[b];return IA===void 0&&(IA=new si,l[b]=IA),IA.getTargetRaySpace()},this.getControllerGrip=function(b){let IA=l[b];return IA===void 0&&(IA=new si,l[b]=IA),IA.getGripSpace()},this.getHand=function(b){let IA=l[b];return IA===void 0&&(IA=new si,l[b]=IA),IA.getHandSpace()};function H(b){const IA=G.indexOf(b.inputSource);if(IA===-1)return;const gA=l[IA];gA!==void 0&&(gA.update(b.inputSource,b.frame,t||E),gA.dispatchEvent({type:b.type,data:b.inputSource}))}function _(){C.removeEventListener("select",H),C.removeEventListener("selectstart",H),C.removeEventListener("selectend",H),C.removeEventListener("squeeze",H),C.removeEventListener("squeezestart",H),C.removeEventListener("squeezeend",H),C.removeEventListener("end",_),C.removeEventListener("inputsourceschange",f);for(let b=0;b<l.length;b++){const IA=G[b];IA!==null&&(G[b]=null,l[b].disconnect(IA))}S=null,N=null,A.setRenderTarget(h),D=null,s=null,a=null,C=null,n=null,DA.stop(),g.isPresenting=!1,g.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(b){B=b,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(b){i=b,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return t||E},this.setReferenceSpace=function(b){t=b},this.getBaseLayer=function(){return s!==null?s:D},this.getBinding=function(){return a},this.getFrame=function(){return c},this.getSession=function(){return C},this.setSession=async function(b){if(C=b,C!==null){if(h=A.getRenderTarget(),C.addEventListener("select",H),C.addEventListener("selectstart",H),C.addEventListener("selectend",H),C.addEventListener("squeeze",H),C.addEventListener("squeezestart",H),C.addEventListener("squeezeend",H),C.addEventListener("end",_),C.addEventListener("inputsourceschange",f),w.xrCompatible!==!0&&await I.makeXRCompatible(),C.renderState.layers===void 0||A.capabilities.isWebGL2===!1){const IA={antialias:C.renderState.layers===void 0?w.antialias:!0,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:B};D=new XRWebGLLayer(C,I,IA),C.updateRenderState({baseLayer:D}),n=new mC(D.framebufferWidth,D.framebufferHeight,{format:tg,type:aC,colorSpace:A.outputColorSpace,stencilBuffer:w.stencil})}else{let IA=null,gA=null,aA=null;w.depth&&(aA=w.stencil?I.DEPTH24_STENCIL8:I.DEPTH_COMPONENT24,IA=w.stencil?SB:YC,gA=w.stencil?LC:oC);const sA={colorFormat:I.RGBA8,depthFormat:aA,scaleFactor:B};a=new XRWebGLBinding(C,I),s=a.createProjectionLayer(sA),C.updateRenderState({layers:[s]}),n=new mC(s.textureWidth,s.textureHeight,{format:tg,type:aC,depthTexture:new Ow(s.textureWidth,s.textureHeight,gA,void 0,void 0,void 0,void 0,void 0,void 0,IA),stencilBuffer:w.stencil,colorSpace:A.outputColorSpace,samples:w.antialias?4:0});const kA=A.properties.get(n);kA.__ignoreDepthValues=s.ignoreDepthValues}n.isXRRenderTarget=!0,this.setFoveation(o),t=null,E=await C.requestReferenceSpace(i),DA.setContext(C),DA.start(),g.isPresenting=!0,g.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(C!==null)return C.environmentBlendMode};function f(b){for(let IA=0;IA<b.removed.length;IA++){const gA=b.removed[IA],aA=G.indexOf(gA);aA>=0&&(G[aA]=null,l[aA].disconnect(gA))}for(let IA=0;IA<b.added.length;IA++){const gA=b.added[IA];let aA=G.indexOf(gA);if(aA===-1){for(let kA=0;kA<l.length;kA++)if(kA>=G.length){G.push(gA),aA=kA;break}else if(G[kA]===null){G[kA]=gA,aA=kA;break}if(aA===-1)break}const sA=l[aA];sA&&sA.connect(gA)}}const x=new F,O=new F;function z(b,IA,gA){x.setFromMatrixPosition(IA.matrixWorld),O.setFromMatrixPosition(gA.matrixWorld);const aA=x.distanceTo(O),sA=IA.projectionMatrix.elements,kA=gA.projectionMatrix.elements,YA=sA[14]/(sA[10]-1),RA=sA[14]/(sA[10]+1),qI=(sA[9]+1)/sA[5],_A=(sA[9]-1)/sA[5],m=(sA[8]-1)/sA[0],fI=(kA[8]+1)/kA[0],JA=YA*m,bA=YA*fI,qA=aA/(-m+fI),eI=qA*-m;IA.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(eI),b.translateZ(qA),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert();const jA=YA+qA,fA=RA+qA,QI=JA-eI,uI=bA+(aA-eI),HI=qI*RA/fA*jA,K=_A*RA/fA*jA;b.projectionMatrix.makePerspective(QI,uI,HI,K,jA,fA),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}function j(b,IA){IA===null?b.matrixWorld.copy(b.matrix):b.matrixWorld.multiplyMatrices(IA.matrixWorld,b.matrix),b.matrixWorldInverse.copy(b.matrixWorld).invert()}this.updateCameraXR=function(b){if(C===null)return b;M&&(b=M),p.near=J.near=U.near=b.near,p.far=J.far=U.far=b.far,(S!==p.near||N!==p.far)&&(C.updateRenderState({depthNear:p.near,depthFar:p.far}),S=p.near,N=p.far);const IA=b.parent,gA=p.cameras;j(p,IA);for(let aA=0;aA<gA.length;aA++)j(gA[aA],IA);return gA.length===2?z(p,U,J):p.projectionMatrix.copy(U.projectionMatrix),M&&X(p,IA),p};function X(b,IA){const gA=M;IA===null?gA.matrix.copy(b.matrixWorld):(gA.matrix.copy(IA.matrixWorld),gA.matrix.invert(),gA.matrix.multiply(b.matrixWorld)),gA.matrix.decompose(gA.position,gA.quaternion,gA.scale),gA.updateMatrixWorld(!0);const aA=gA.children;for(let sA=0,kA=aA.length;sA<kA;sA++)aA[sA].updateMatrixWorld(!0);gA.projectionMatrix.copy(b.projectionMatrix),gA.projectionMatrixInverse.copy(b.projectionMatrixInverse),gA.isPerspectiveCamera&&(gA.fov=lB*2*Math.atan(1/gA.projectionMatrix.elements[5]),gA.zoom=1)}this.getFoveation=function(){if(!(s===null&&D===null))return o},this.setFoveation=function(b){o=b,s!==null&&(s.fixedFoveation=b),D!==null&&D.fixedFoveation!==void 0&&(D.fixedFoveation=b)};let $=null;function AA(b,IA){if(e=IA.getViewerPose(t||E),c=IA,e!==null){const gA=e.views;D!==null&&(A.setRenderTargetFramebuffer(n,D.framebuffer),A.setRenderTarget(n));let aA=!1;gA.length!==p.cameras.length&&(p.cameras.length=0,aA=!0);for(let sA=0;sA<gA.length;sA++){const kA=gA[sA];let YA=null;if(D!==null)YA=D.getViewport(kA);else{const qI=a.getViewSubImage(s,kA);YA=qI.viewport,sA===0&&(A.setRenderTargetTextures(n,qI.colorTexture,s.ignoreDepthValues?void 0:qI.depthStencilTexture),A.setRenderTarget(n))}let RA=q[sA];RA===void 0&&(RA=new xI,RA.layers.enable(sA),RA.viewport=new II,q[sA]=RA),RA.matrix.fromArray(kA.transform.matrix),RA.matrix.decompose(RA.position,RA.quaternion,RA.scale),RA.projectionMatrix.fromArray(kA.projectionMatrix),RA.projectionMatrixInverse.copy(RA.projectionMatrix).invert(),RA.viewport.set(YA.x,YA.y,YA.width,YA.height),sA===0&&(p.matrix.copy(RA.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale)),aA===!0&&p.cameras.push(RA)}}for(let gA=0;gA<l.length;gA++){const aA=G[gA],sA=l[gA];aA!==null&&sA!==void 0&&sA.update(aA,IA,t||E)}$&&$(b,IA),IA.detectedPlanes&&g.dispatchEvent({type:"planesdetected",data:IA}),c=null}const DA=new ha;DA.setAnimationLoop(AA),this.setAnimationLoop=function(b){$=b},this.dispose=function(){}}}function vw(Q,A){function I(h,n){h.matrixAutoUpdate===!0&&h.updateMatrix(),n.value.copy(h.matrix)}function g(h,n){n.color.getRGB(h.fogColor.value,Da(Q)),n.isFog?(h.fogNear.value=n.near,h.fogFar.value=n.far):n.isFogExp2&&(h.fogDensity.value=n.density)}function C(h,n,l,G,M){n.isMeshBasicMaterial||n.isMeshLambertMaterial?B(h,n):n.isMeshToonMaterial?(B(h,n),a(h,n)):n.isMeshPhongMaterial?(B(h,n),e(h,n)):n.isMeshStandardMaterial?(B(h,n),s(h,n),n.isMeshPhysicalMaterial&&D(h,n,M)):n.isMeshMatcapMaterial?(B(h,n),c(h,n)):n.isMeshDepthMaterial?B(h,n):n.isMeshDistanceMaterial?(B(h,n),w(h,n)):n.isMeshNormalMaterial?B(h,n):n.isLineBasicMaterial?(E(h,n),n.isLineDashedMaterial&&i(h,n)):n.isPointsMaterial?o(h,n,l,G):n.isSpriteMaterial?t(h,n):n.isShadowMaterial?(h.color.value.copy(n.color),h.opacity.value=n.opacity):n.isShaderMaterial&&(n.uniformsNeedUpdate=!1)}function B(h,n){h.opacity.value=n.opacity,n.color&&h.diffuse.value.copy(n.color),n.emissive&&h.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),n.map&&(h.map.value=n.map,I(n.map,h.mapTransform)),n.alphaMap&&(h.alphaMap.value=n.alphaMap,I(n.alphaMap,h.alphaMapTransform)),n.bumpMap&&(h.bumpMap.value=n.bumpMap,I(n.bumpMap,h.bumpMapTransform),h.bumpScale.value=n.bumpScale,n.side===$I&&(h.bumpScale.value*=-1)),n.normalMap&&(h.normalMap.value=n.normalMap,I(n.normalMap,h.normalMapTransform),h.normalScale.value.copy(n.normalScale),n.side===$I&&h.normalScale.value.negate()),n.displacementMap&&(h.displacementMap.value=n.displacementMap,I(n.displacementMap,h.displacementMapTransform),h.displacementScale.value=n.displacementScale,h.displacementBias.value=n.displacementBias),n.emissiveMap&&(h.emissiveMap.value=n.emissiveMap,I(n.emissiveMap,h.emissiveMapTransform)),n.specularMap&&(h.specularMap.value=n.specularMap,I(n.specularMap,h.specularMapTransform)),n.alphaTest>0&&(h.alphaTest.value=n.alphaTest);const l=A.get(n).envMap;if(l&&(h.envMap.value=l,h.flipEnvMap.value=l.isCubeTexture&&l.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=n.reflectivity,h.ior.value=n.ior,h.refractionRatio.value=n.refractionRatio),n.lightMap){h.lightMap.value=n.lightMap;const G=Q.useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=n.lightMapIntensity*G,I(n.lightMap,h.lightMapTransform)}n.aoMap&&(h.aoMap.value=n.aoMap,h.aoMapIntensity.value=n.aoMapIntensity,I(n.aoMap,h.aoMapTransform))}function E(h,n){h.diffuse.value.copy(n.color),h.opacity.value=n.opacity,n.map&&(h.map.value=n.map,I(n.map,h.mapTransform))}function i(h,n){h.dashSize.value=n.dashSize,h.totalSize.value=n.dashSize+n.gapSize,h.scale.value=n.scale}function o(h,n,l,G){h.diffuse.value.copy(n.color),h.opacity.value=n.opacity,h.size.value=n.size*l,h.scale.value=G*.5,n.map&&(h.map.value=n.map,I(n.map,h.uvTransform)),n.alphaMap&&(h.alphaMap.value=n.alphaMap,I(n.alphaMap,h.alphaMapTransform)),n.alphaTest>0&&(h.alphaTest.value=n.alphaTest)}function t(h,n){h.diffuse.value.copy(n.color),h.opacity.value=n.opacity,h.rotation.value=n.rotation,n.map&&(h.map.value=n.map,I(n.map,h.mapTransform)),n.alphaMap&&(h.alphaMap.value=n.alphaMap,I(n.alphaMap,h.alphaMapTransform)),n.alphaTest>0&&(h.alphaTest.value=n.alphaTest)}function e(h,n){h.specular.value.copy(n.specular),h.shininess.value=Math.max(n.shininess,1e-4)}function a(h,n){n.gradientMap&&(h.gradientMap.value=n.gradientMap)}function s(h,n){h.metalness.value=n.metalness,n.metalnessMap&&(h.metalnessMap.value=n.metalnessMap,I(n.metalnessMap,h.metalnessMapTransform)),h.roughness.value=n.roughness,n.roughnessMap&&(h.roughnessMap.value=n.roughnessMap,I(n.roughnessMap,h.roughnessMapTransform)),A.get(n).envMap&&(h.envMapIntensity.value=n.envMapIntensity)}function D(h,n,l){h.ior.value=n.ior,n.sheen>0&&(h.sheenColor.value.copy(n.sheenColor).multiplyScalar(n.sheen),h.sheenRoughness.value=n.sheenRoughness,n.sheenColorMap&&(h.sheenColorMap.value=n.sheenColorMap,I(n.sheenColorMap,h.sheenColorMapTransform)),n.sheenRoughnessMap&&(h.sheenRoughnessMap.value=n.sheenRoughnessMap,I(n.sheenRoughnessMap,h.sheenRoughnessMapTransform))),n.clearcoat>0&&(h.clearcoat.value=n.clearcoat,h.clearcoatRoughness.value=n.clearcoatRoughness,n.clearcoatMap&&(h.clearcoatMap.value=n.clearcoatMap,I(n.clearcoatMap,h.clearcoatMapTransform)),n.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=n.clearcoatRoughnessMap,I(n.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),n.clearcoatNormalMap&&(h.clearcoatNormalMap.value=n.clearcoatNormalMap,I(n.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(n.clearcoatNormalScale),n.side===$I&&h.clearcoatNormalScale.value.negate())),n.iridescence>0&&(h.iridescence.value=n.iridescence,h.iridescenceIOR.value=n.iridescenceIOR,h.iridescenceThicknessMinimum.value=n.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=n.iridescenceThicknessRange[1],n.iridescenceMap&&(h.iridescenceMap.value=n.iridescenceMap,I(n.iridescenceMap,h.iridescenceMapTransform)),n.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=n.iridescenceThicknessMap,I(n.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),n.transmission>0&&(h.transmission.value=n.transmission,h.transmissionSamplerMap.value=l.texture,h.transmissionSamplerSize.value.set(l.width,l.height),n.transmissionMap&&(h.transmissionMap.value=n.transmissionMap,I(n.transmissionMap,h.transmissionMapTransform)),h.thickness.value=n.thickness,n.thicknessMap&&(h.thicknessMap.value=n.thicknessMap,I(n.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=n.attenuationDistance,h.attenuationColor.value.copy(n.attenuationColor)),n.anisotropy>0&&(h.anisotropyVector.value.set(n.anisotropy*Math.cos(n.anisotropyRotation),n.anisotropy*Math.sin(n.anisotropyRotation)),n.anisotropyMap&&(h.anisotropyMap.value=n.anisotropyMap,I(n.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=n.specularIntensity,h.specularColor.value.copy(n.specularColor),n.specularColorMap&&(h.specularColorMap.value=n.specularColorMap,I(n.specularColorMap,h.specularColorMapTransform)),n.specularIntensityMap&&(h.specularIntensityMap.value=n.specularIntensityMap,I(n.specularIntensityMap,h.specularIntensityMapTransform))}function c(h,n){n.matcap&&(h.matcap.value=n.matcap)}function w(h,n){const l=A.get(n).light;h.referencePosition.value.setFromMatrixPosition(l.matrixWorld),h.nearDistance.value=l.shadow.camera.near,h.farDistance.value=l.shadow.camera.far}return{refreshFogUniforms:g,refreshMaterialUniforms:C}}function Zw(Q,A,I,g){let C={},B={},E=[];const i=I.isWebGL2?Q.getParameter(Q.MAX_UNIFORM_BUFFER_BINDINGS):0;function o(l,G){const M=G.program;g.uniformBlockBinding(l,M)}function t(l,G){let M=C[l.id];M===void 0&&(c(l),M=e(l),C[l.id]=M,l.addEventListener("dispose",h));const U=G.program;g.updateUBOMapping(l,U);const J=A.render.frame;B[l.id]!==J&&(s(l),B[l.id]=J)}function e(l){const G=a();l.__bindingPointIndex=G;const M=Q.createBuffer(),U=l.__size,J=l.usage;return Q.bindBuffer(Q.UNIFORM_BUFFER,M),Q.bufferData(Q.UNIFORM_BUFFER,U,J),Q.bindBuffer(Q.UNIFORM_BUFFER,null),Q.bindBufferBase(Q.UNIFORM_BUFFER,G,M),M}function a(){for(let l=0;l<i;l++)if(E.indexOf(l)===-1)return E.push(l),l;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function s(l){const G=C[l.id],M=l.uniforms,U=l.__cache;Q.bindBuffer(Q.UNIFORM_BUFFER,G);for(let J=0,q=M.length;J<q;J++){const p=M[J];if(D(p,J,U)===!0){const S=p.__offset,N=Array.isArray(p.value)?p.value:[p.value];let H=0;for(let _=0;_<N.length;_++){const f=N[_],x=w(f);typeof f=="number"?(p.__data[0]=f,Q.bufferSubData(Q.UNIFORM_BUFFER,S+H,p.__data)):f.isMatrix3?(p.__data[0]=f.elements[0],p.__data[1]=f.elements[1],p.__data[2]=f.elements[2],p.__data[3]=f.elements[0],p.__data[4]=f.elements[3],p.__data[5]=f.elements[4],p.__data[6]=f.elements[5],p.__data[7]=f.elements[0],p.__data[8]=f.elements[6],p.__data[9]=f.elements[7],p.__data[10]=f.elements[8],p.__data[11]=f.elements[0]):(f.toArray(p.__data,H),H+=x.storage/Float32Array.BYTES_PER_ELEMENT)}Q.bufferSubData(Q.UNIFORM_BUFFER,S,p.__data)}}Q.bindBuffer(Q.UNIFORM_BUFFER,null)}function D(l,G,M){const U=l.value;if(M[G]===void 0){if(typeof U=="number")M[G]=U;else{const J=Array.isArray(U)?U:[U],q=[];for(let p=0;p<J.length;p++)q.push(J[p].clone());M[G]=q}return!0}else if(typeof U=="number"){if(M[G]!==U)return M[G]=U,!0}else{const J=Array.isArray(M[G])?M[G]:[M[G]],q=Array.isArray(U)?U:[U];for(let p=0;p<J.length;p++){const S=J[p];if(S.equals(q[p])===!1)return S.copy(q[p]),!0}}return!1}function c(l){const G=l.uniforms;let M=0;const U=16;let J=0;for(let q=0,p=G.length;q<p;q++){const S=G[q],N={boundary:0,storage:0},H=Array.isArray(S.value)?S.value:[S.value];for(let _=0,f=H.length;_<f;_++){const x=H[_],O=w(x);N.boundary+=O.boundary,N.storage+=O.storage}if(S.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,q>0){J=M%U;const _=U-J;J!==0&&_-N.boundary<0&&(M+=U-J,S.__offset=M)}M+=N.storage}return J=M%U,J>0&&(M+=U-J),l.__size=M,l.__cache={},this}function w(l){const G={boundary:0,storage:0};return typeof l=="number"?(G.boundary=4,G.storage=4):l.isVector2?(G.boundary=8,G.storage=8):l.isVector3||l.isColor?(G.boundary=16,G.storage=12):l.isVector4?(G.boundary=16,G.storage=16):l.isMatrix3?(G.boundary=48,G.storage=48):l.isMatrix4?(G.boundary=64,G.storage=64):l.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",l),G}function h(l){const G=l.target;G.removeEventListener("dispose",h);const M=E.indexOf(G.__bindingPointIndex);E.splice(M,1),Q.deleteBuffer(C[G.id]),delete C[G.id],delete B[G.id]}function n(){for(const l in C)Q.deleteBuffer(C[l]);E=[],C={},B={}}return{bind:o,update:t,dispose:n}}function Pw(){const Q=XB("canvas");return Q.style.display="block",Q}class Sa{constructor(A={}){const{canvas:I=Pw(),context:g=null,depth:C=!0,stencil:B=!0,alpha:E=!1,antialias:i=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:t=!1,powerPreference:e="default",failIfMajorPerformanceCaveat:a=!1}=A;this.isWebGLRenderer=!0;let s;g!==null?s=g.getContextAttributes().alpha:s=E;const D=new Uint32Array(4),c=new Int32Array(4);let w=null,h=null;const n=[],l=[];this.domElement=I,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=NA,this.useLegacyLights=!0,this.toneMapping=Vg,this.toneMappingExposure=1;const G=this;let M=!1,U=0,J=0,q=null,p=-1,S=null;const N=new II,H=new II;let _=null;const f=new hA(0);let x=0,O=I.width,z=I.height,j=1,X=null,$=null;const AA=new II(0,0,O,z),DA=new II(0,0,O,z);let b=!1;const IA=new Bo;let gA=!1,aA=!1,sA=null;const kA=new GA,YA=new xA,RA=new F,qI={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _A(){return q===null?j:1}let m=g;function fI(y,T){for(let Z=0;Z<y.length;Z++){const u=y[Z],W=I.getContext(u,T);if(W!==null)return W}return null}try{const y={alpha:!0,depth:C,stencil:B,antialias:i,premultipliedAlpha:o,preserveDrawingBuffer:t,powerPreference:e,failIfMajorPerformanceCaveat:a};if("setAttribute"in I&&I.setAttribute("data-engine",`three.js r${$i}`),I.addEventListener("webglcontextlost",iA,!1),I.addEventListener("webglcontextrestored",v,!1),I.addEventListener("webglcontextcreationerror",QA,!1),m===null){const T=["webgl2","webgl","experimental-webgl"];if(G.isWebGL1Renderer===!0&&T.shift(),m=fI(T,y),m===null)throw fI(T)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}m instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),m.getShaderPrecisionFormat===void 0&&(m.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let JA,bA,qA,eI,jA,fA,QI,uI,HI,K,k,P,CA,BA,oA,SA,tA,V,yA,MA,KA,rA,cA,vA;function iI(){JA=new Cc(m),bA=new Xr(m,JA,A),JA.init(bA),rA=new mw(m,JA,bA),qA=new uw(m,JA,bA),eI=new Ec(m),jA=new yw,fA=new Hw(m,JA,qA,jA,bA,rA,eI),QI=new $r(G),uI=new gc(G),HI=new wn(m,bA),cA=new Vr(m,JA,HI,bA),K=new Bc(m,HI,eI,cA),k=new ec(m,K,HI,eI),yA=new tc(m,bA,fA),SA=new zr(jA),P=new lw(G,QI,uI,JA,bA,cA,SA),CA=new vw(G,jA),BA=new Uw,oA=new qw(JA,bA),V=new jr(G,QI,uI,qA,k,s,o),tA=new fw(G,k,bA),vA=new Zw(m,eI,bA,qA),MA=new _r(m,JA,eI,bA),KA=new Qc(m,JA,eI,bA),eI.programs=P.programs,G.capabilities=bA,G.extensions=JA,G.properties=jA,G.renderLists=BA,G.shadowMap=tA,G.state=qA,G.info=eI}iI();const d=new bw(G,m);this.xr=d,this.getContext=function(){return m},this.getContextAttributes=function(){return m.getContextAttributes()},this.forceContextLoss=function(){const y=JA.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=JA.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(y){y!==void 0&&(j=y,this.setSize(O,z,!1))},this.getSize=function(y){return y.set(O,z)},this.setSize=function(y,T,Z=!0){if(d.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=y,z=T,I.width=Math.floor(y*j),I.height=Math.floor(T*j),Z===!0&&(I.style.width=y+"px",I.style.height=T+"px"),this.setViewport(0,0,y,T)},this.getDrawingBufferSize=function(y){return y.set(O*j,z*j).floor()},this.setDrawingBufferSize=function(y,T,Z){O=y,z=T,j=Z,I.width=Math.floor(y*Z),I.height=Math.floor(T*Z),this.setViewport(0,0,y,T)},this.getCurrentViewport=function(y){return y.copy(N)},this.getViewport=function(y){return y.copy(AA)},this.setViewport=function(y,T,Z,u){y.isVector4?AA.set(y.x,y.y,y.z,y.w):AA.set(y,T,Z,u),qA.viewport(N.copy(AA).multiplyScalar(j).floor())},this.getScissor=function(y){return y.copy(DA)},this.setScissor=function(y,T,Z,u){y.isVector4?DA.set(y.x,y.y,y.z,y.w):DA.set(y,T,Z,u),qA.scissor(H.copy(DA).multiplyScalar(j).floor())},this.getScissorTest=function(){return b},this.setScissorTest=function(y){qA.setScissorTest(b=y)},this.setOpaqueSort=function(y){X=y},this.setTransparentSort=function(y){$=y},this.getClearColor=function(y){return y.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(y=!0,T=!0,Z=!0){let u=0;if(y){let W=!1;if(q!==null){const nA=q.texture.format;W=nA===Ia||nA===Aa||nA===$e}if(W){const nA=q.texture.type,UA=nA===aC||nA===oC||nA===Ao||nA===LC||nA===Xe||nA===ze,FA=V.getClearColor(),pA=V.getClearAlpha(),ZA=FA.r,dA=FA.g,uA=FA.b,aI=jA.get(q).__webglFramebuffer;UA?(D[0]=ZA,D[1]=dA,D[2]=uA,D[3]=pA,m.clearBufferuiv(m.COLOR,aI,D)):(c[0]=ZA,c[1]=dA,c[2]=uA,c[3]=pA,m.clearBufferiv(m.COLOR,aI,c))}else u|=m.COLOR_BUFFER_BIT}T&&(u|=m.DEPTH_BUFFER_BIT),Z&&(u|=m.STENCIL_BUFFER_BIT),m.clear(u)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){I.removeEventListener("webglcontextlost",iA,!1),I.removeEventListener("webglcontextrestored",v,!1),I.removeEventListener("webglcontextcreationerror",QA,!1),BA.dispose(),oA.dispose(),jA.dispose(),QI.dispose(),uI.dispose(),k.dispose(),cA.dispose(),vA.dispose(),P.dispose(),d.dispose(),d.removeEventListener("sessionstart",rI),d.removeEventListener("sessionend",Ng),sA&&(sA.dispose(),sA=null),OI.stop()};function iA(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function v(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const y=eI.autoReset,T=tA.enabled,Z=tA.autoUpdate,u=tA.needsUpdate,W=tA.type;iI(),eI.autoReset=y,tA.enabled=T,tA.autoUpdate=Z,tA.needsUpdate=u,tA.type=W}function QA(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function eA(y){const T=y.target;T.removeEventListener("dispose",eA),AI(T)}function AI(y){hI(y),jA.remove(y)}function hI(y){const T=jA.get(y).programs;T!==void 0&&(T.forEach(function(Z){P.releaseProgram(Z)}),y.isShaderMaterial&&P.releaseShaderCache(y))}this.renderBufferDirect=function(y,T,Z,u,W,nA){T===null&&(T=qI);const UA=W.isMesh&&W.matrixWorld.determinant()<0,FA=Js(y,T,Z,u,W);qA.setMaterial(u,UA);let pA=Z.index,ZA=1;u.wireframe===!0&&(pA=K.getWireframeAttribute(Z),ZA=2);const dA=Z.drawRange,uA=Z.attributes.position;let aI=dA.start*ZA,wI=(dA.start+dA.count)*ZA;nA!==null&&(aI=Math.max(aI,nA.start*ZA),wI=Math.min(wI,(nA.start+nA.count)*ZA)),pA!==null?(aI=Math.max(aI,0),wI=Math.min(wI,pA.count)):uA!=null&&(aI=Math.max(aI,0),wI=Math.min(wI,uA.count));const ng=wI-aI;if(ng<0||ng===1/0)return;cA.setup(W,u,FA,Z,pA);let ug,lI=MA;if(pA!==null&&(ug=HI.get(pA),lI=KA,lI.setIndex(ug)),W.isMesh)u.wireframe===!0?(qA.setLineWidth(u.wireframeLinewidth*_A()),lI.setMode(m.LINES)):lI.setMode(m.TRIANGLES);else if(W.isLine){let XA=u.linewidth;XA===void 0&&(XA=1),qA.setLineWidth(XA*_A()),W.isLineSegments?lI.setMode(m.LINES):W.isLineLoop?lI.setMode(m.LINE_LOOP):lI.setMode(m.LINE_STRIP)}else W.isPoints?lI.setMode(m.POINTS):W.isSprite&&lI.setMode(m.TRIANGLES);if(W.isInstancedMesh)lI.renderInstances(aI,ng,W.count);else if(Z.isInstancedBufferGeometry){const XA=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,LE=Math.min(Z.instanceCount,XA);lI.renderInstances(aI,ng,LE)}else lI.render(aI,ng)},this.compile=function(y,T){function Z(u,W,nA){u.transparent===!0&&u.side===og&&u.forceSinglePass===!1?(u.side=$I,u.needsUpdate=!0,hQ(u,W,nA),u.side=_g,u.needsUpdate=!0,hQ(u,W,nA),u.side=og):hQ(u,W,nA)}h=oA.get(y),h.init(),l.push(h),y.traverseVisible(function(u){u.isLight&&u.layers.test(T.layers)&&(h.pushLight(u),u.castShadow&&h.pushShadow(u))}),h.setupLights(G.useLegacyLights),y.traverse(function(u){const W=u.material;if(W)if(Array.isArray(W))for(let nA=0;nA<W.length;nA++){const UA=W[nA];Z(UA,y,u)}else Z(W,y,u)}),l.pop(),h=null};let kI=null;function kC(y){kI&&kI(y)}function rI(){OI.stop()}function Ng(){OI.start()}const OI=new ha;OI.setAnimationLoop(kC),typeof self<"u"&&OI.setContext(self),this.setAnimationLoop=function(y){kI=y,d.setAnimationLoop(y),y===null?OI.stop():OI.start()},d.addEventListener("sessionstart",rI),d.addEventListener("sessionend",Ng),this.render=function(y,T){if(T!==void 0&&T.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),T.parent===null&&T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),d.enabled===!0&&d.isPresenting===!0&&(T=d.updateCameraXR(T)),y.isScene===!0&&y.onBeforeRender(G,y,T,q),h=oA.get(y,l.length),h.init(),l.push(h),kA.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),IA.setFromProjectionMatrix(kA),aA=this.localClippingEnabled,gA=SA.init(this.clippingPlanes,aA),w=BA.get(y,n.length),w.init(),n.push(w),uo(y,T,0,G.sortObjects),w.finish(),G.sortObjects===!0&&w.sort(X,$),gA===!0&&SA.beginShadows();const Z=h.state.shadowsArray;if(tA.render(Z,y,T),gA===!0&&SA.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,V.render(w,y),h.setupLights(G.useLegacyLights),T.isArrayCamera){const u=T.cameras;for(let W=0,nA=u.length;W<nA;W++){const UA=u[W];Ho(w,y,UA,UA.viewport)}}else Ho(w,y,T);q!==null&&(fA.updateMultisampleRenderTarget(q),fA.updateRenderTargetMipmap(q)),y.isScene===!0&&y.onAfterRender(G,y,T),cA.resetDefaultState(),p=-1,S=null,l.pop(),l.length>0?h=l[l.length-1]:h=null,n.pop(),n.length>0?w=n[n.length-1]:w=null};function uo(y,T,Z,u){if(y.visible===!1)return;if(y.layers.test(T.layers)){if(y.isGroup)Z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(T);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||IA.intersectsSprite(y)){u&&RA.setFromMatrixPosition(y.matrixWorld).applyMatrix4(kA);const UA=k.update(y),FA=y.material;FA.visible&&w.push(y,UA,FA,Z,RA.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||IA.intersectsObject(y))){y.isSkinnedMesh&&y.skeleton.frame!==eI.render.frame&&(y.skeleton.update(),y.skeleton.frame=eI.render.frame);const UA=k.update(y),FA=y.material;if(u&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),RA.copy(y.boundingSphere.center)):(UA.boundingSphere===null&&UA.computeBoundingSphere(),RA.copy(UA.boundingSphere.center)),RA.applyMatrix4(y.matrixWorld).applyMatrix4(kA)),Array.isArray(FA)){const pA=UA.groups;for(let ZA=0,dA=pA.length;ZA<dA;ZA++){const uA=pA[ZA],aI=FA[uA.materialIndex];aI&&aI.visible&&w.push(y,UA,aI,Z,RA.z,uA)}}else FA.visible&&w.push(y,UA,FA,Z,RA.z,null)}}const nA=y.children;for(let UA=0,FA=nA.length;UA<FA;UA++)uo(nA[UA],T,Z,u)}function Ho(y,T,Z,u){const W=y.opaque,nA=y.transmissive,UA=y.transparent;h.setupLightsView(Z),gA===!0&&SA.setGlobalState(G.clippingPlanes,Z),nA.length>0&&Ks(W,nA,T,Z),u&&qA.viewport(N.copy(u)),W.length>0&&nQ(W,T,Z),nA.length>0&&nQ(nA,T,Z),UA.length>0&&nQ(UA,T,Z),qA.buffers.depth.setTest(!0),qA.buffers.depth.setMask(!0),qA.buffers.color.setMask(!0),qA.setPolygonOffset(!1)}function Ks(y,T,Z,u){const W=bA.isWebGL2;sA===null&&(sA=new mC(1,1,{generateMipmaps:!0,type:JA.has("EXT_color_buffer_half_float")?VB:aC,minFilter:HC,samples:W&&i===!0?4:0})),G.getDrawingBufferSize(YA),W?sA.setSize(YA.x,YA.y):sA.setSize(AE(YA.x),AE(YA.y));const nA=G.getRenderTarget();G.setRenderTarget(sA),G.getClearColor(f),x=G.getClearAlpha(),x<1&&G.setClearColor(16777215,.5),G.clear();const UA=G.toneMapping;G.toneMapping=Vg,nQ(y,Z,u),fA.updateMultisampleRenderTarget(sA),fA.updateRenderTargetMipmap(sA);let FA=!1;for(let pA=0,ZA=T.length;pA<ZA;pA++){const dA=T[pA],uA=dA.object,aI=dA.geometry,wI=dA.material,ng=dA.group;if(wI.side===og&&uA.layers.test(u.layers)){const ug=wI.side;wI.side=$I,wI.needsUpdate=!0,mo(uA,Z,u,aI,wI,ng),wI.side=ug,wI.needsUpdate=!0,FA=!0}}FA===!0&&(fA.updateMultisampleRenderTarget(sA),fA.updateRenderTargetMipmap(sA)),G.setRenderTarget(nA),G.setClearColor(f,x),G.toneMapping=UA}function nQ(y,T,Z){const u=T.isScene===!0?T.overrideMaterial:null;for(let W=0,nA=y.length;W<nA;W++){const UA=y[W],FA=UA.object,pA=UA.geometry,ZA=u===null?UA.material:u,dA=UA.group;FA.layers.test(Z.layers)&&mo(FA,T,Z,pA,ZA,dA)}}function mo(y,T,Z,u,W,nA){y.onBeforeRender(G,T,Z,u,W,nA),y.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),W.onBeforeRender(G,T,Z,u,y,nA),W.transparent===!0&&W.side===og&&W.forceSinglePass===!1?(W.side=$I,W.needsUpdate=!0,G.renderBufferDirect(Z,T,u,W,y,nA),W.side=_g,W.needsUpdate=!0,G.renderBufferDirect(Z,T,u,W,y,nA),W.side=og):G.renderBufferDirect(Z,T,u,W,y,nA),y.onAfterRender(G,T,Z,u,W,nA)}function hQ(y,T,Z){T.isScene!==!0&&(T=qI);const u=jA.get(y),W=h.state.lights,nA=h.state.shadowsArray,UA=W.state.version,FA=P.getParameters(y,W.state,nA,T,Z),pA=P.getProgramCacheKey(FA);let ZA=u.programs;u.environment=y.isMeshStandardMaterial?T.environment:null,u.fog=T.fog,u.envMap=(y.isMeshStandardMaterial?uI:QI).get(y.envMap||u.environment),ZA===void 0&&(y.addEventListener("dispose",eA),ZA=new Map,u.programs=ZA);let dA=ZA.get(pA);if(dA!==void 0){if(u.currentProgram===dA&&u.lightsStateVersion===UA)return To(y,FA),dA}else FA.uniforms=P.getUniforms(y),y.onBuild(Z,FA,G),y.onBeforeCompile(FA,G),dA=P.acquireProgram(FA,pA),ZA.set(pA,dA),u.uniforms=FA.uniforms;const uA=u.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(uA.clippingPlanes=SA.uniform),To(y,FA),u.needsLights=Rs(y),u.lightsStateVersion=UA,u.needsLights&&(uA.ambientLightColor.value=W.state.ambient,uA.lightProbe.value=W.state.probe,uA.directionalLights.value=W.state.directional,uA.directionalLightShadows.value=W.state.directionalShadow,uA.spotLights.value=W.state.spot,uA.spotLightShadows.value=W.state.spotShadow,uA.rectAreaLights.value=W.state.rectArea,uA.ltc_1.value=W.state.rectAreaLTC1,uA.ltc_2.value=W.state.rectAreaLTC2,uA.pointLights.value=W.state.point,uA.pointLightShadows.value=W.state.pointShadow,uA.hemisphereLights.value=W.state.hemi,uA.directionalShadowMap.value=W.state.directionalShadowMap,uA.directionalShadowMatrix.value=W.state.directionalShadowMatrix,uA.spotShadowMap.value=W.state.spotShadowMap,uA.spotLightMatrix.value=W.state.spotLightMatrix,uA.spotLightMap.value=W.state.spotLightMap,uA.pointShadowMap.value=W.state.pointShadowMap,uA.pointShadowMatrix.value=W.state.pointShadowMatrix);const aI=dA.getUniforms(),wI=ZQ.seqWithValue(aI.seq,uA);return u.currentProgram=dA,u.uniformsList=wI,dA}function To(y,T){const Z=jA.get(y);Z.outputColorSpace=T.outputColorSpace,Z.instancing=T.instancing,Z.skinning=T.skinning,Z.morphTargets=T.morphTargets,Z.morphNormals=T.morphNormals,Z.morphColors=T.morphColors,Z.morphTargetsCount=T.morphTargetsCount,Z.numClippingPlanes=T.numClippingPlanes,Z.numIntersection=T.numClipIntersection,Z.vertexAlphas=T.vertexAlphas,Z.vertexTangents=T.vertexTangents,Z.toneMapping=T.toneMapping}function Js(y,T,Z,u,W){T.isScene!==!0&&(T=qI),fA.resetTextureUnits();const nA=T.fog,UA=u.isMeshStandardMaterial?T.environment:null,FA=q===null?G.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:qg,pA=(u.isMeshStandardMaterial?uI:QI).get(u.envMap||UA),ZA=u.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,dA=!!Z.attributes.tangent&&(!!u.normalMap||u.anisotropy>0),uA=!!Z.morphAttributes.position,aI=!!Z.morphAttributes.normal,wI=!!Z.morphAttributes.color,ng=u.toneMapped?G.toneMapping:Vg,ug=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,lI=ug!==void 0?ug.length:0,XA=jA.get(u),LE=h.state.lights;if(gA===!0&&(aA===!0||y!==S)){const Ag=y===S&&u.id===p;SA.setState(u,y,Ag)}let pI=!1;u.version===XA.__version?(XA.needsLights&&XA.lightsStateVersion!==LE.state.version||XA.outputColorSpace!==FA||W.isInstancedMesh&&XA.instancing===!1||!W.isInstancedMesh&&XA.instancing===!0||W.isSkinnedMesh&&XA.skinning===!1||!W.isSkinnedMesh&&XA.skinning===!0||XA.envMap!==pA||u.fog===!0&&XA.fog!==nA||XA.numClippingPlanes!==void 0&&(XA.numClippingPlanes!==SA.numPlanes||XA.numIntersection!==SA.numIntersection)||XA.vertexAlphas!==ZA||XA.vertexTangents!==dA||XA.morphTargets!==uA||XA.morphNormals!==aI||XA.morphColors!==wI||XA.toneMapping!==ng||bA.isWebGL2===!0&&XA.morphTargetsCount!==lI)&&(pI=!0):(pI=!0,XA.__version=u.version);let lC=XA.currentProgram;pI===!0&&(lC=hQ(u,T,W));let xo=!1,LB=!1,YE=!1;const bI=lC.getUniforms(),yC=XA.uniforms;if(qA.useProgram(lC.program)&&(xo=!0,LB=!0,YE=!0),u.id!==p&&(p=u.id,LB=!0),xo||S!==y){if(bI.setValue(m,"projectionMatrix",y.projectionMatrix),bA.logarithmicDepthBuffer&&bI.setValue(m,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),S!==y&&(S=y,LB=!0,YE=!0),u.isShaderMaterial||u.isMeshPhongMaterial||u.isMeshToonMaterial||u.isMeshStandardMaterial||u.envMap){const Ag=bI.map.cameraPosition;Ag!==void 0&&Ag.setValue(m,RA.setFromMatrixPosition(y.matrixWorld))}(u.isMeshPhongMaterial||u.isMeshToonMaterial||u.isMeshLambertMaterial||u.isMeshBasicMaterial||u.isMeshStandardMaterial||u.isShaderMaterial)&&bI.setValue(m,"isOrthographic",y.isOrthographicCamera===!0),(u.isMeshPhongMaterial||u.isMeshToonMaterial||u.isMeshLambertMaterial||u.isMeshBasicMaterial||u.isMeshStandardMaterial||u.isShaderMaterial||u.isShadowMaterial||W.isSkinnedMesh)&&bI.setValue(m,"viewMatrix",y.matrixWorldInverse)}if(W.isSkinnedMesh){bI.setOptional(m,W,"bindMatrix"),bI.setOptional(m,W,"bindMatrixInverse");const Ag=W.skeleton;Ag&&(bA.floatVertexTextures?(Ag.boneTexture===null&&Ag.computeBoneTexture(),bI.setValue(m,"boneTexture",Ag.boneTexture,fA),bI.setValue(m,"boneTextureSize",Ag.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fE=Z.morphAttributes;if((fE.position!==void 0||fE.normal!==void 0||fE.color!==void 0&&bA.isWebGL2===!0)&&yA.update(W,Z,lC),(LB||XA.receiveShadow!==W.receiveShadow)&&(XA.receiveShadow=W.receiveShadow,bI.setValue(m,"receiveShadow",W.receiveShadow)),u.isMeshGouraudMaterial&&u.envMap!==null&&(yC.envMap.value=pA,yC.flipEnvMap.value=pA.isCubeTexture&&pA.isRenderTargetTexture===!1?-1:1),LB&&(bI.setValue(m,"toneMappingExposure",G.toneMappingExposure),XA.needsLights&&Fs(yC,YE),nA&&u.fog===!0&&CA.refreshFogUniforms(yC,nA),CA.refreshMaterialUniforms(yC,u,j,z,sA),ZQ.upload(m,XA.uniformsList,yC,fA)),u.isShaderMaterial&&u.uniformsNeedUpdate===!0&&(ZQ.upload(m,XA.uniformsList,yC,fA),u.uniformsNeedUpdate=!1),u.isSpriteMaterial&&bI.setValue(m,"center",W.center),bI.setValue(m,"modelViewMatrix",W.modelViewMatrix),bI.setValue(m,"normalMatrix",W.normalMatrix),bI.setValue(m,"modelMatrix",W.matrixWorld),u.isShaderMaterial||u.isRawShaderMaterial){const Ag=u.uniformsGroups;for(let uE=0,qs=Ag.length;uE<qs;uE++)if(bA.isWebGL2){const Oo=Ag[uE];vA.update(Oo,lC),vA.bind(Oo,lC)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return lC}function Fs(y,T){y.ambientLightColor.needsUpdate=T,y.lightProbe.needsUpdate=T,y.directionalLights.needsUpdate=T,y.directionalLightShadows.needsUpdate=T,y.pointLights.needsUpdate=T,y.pointLightShadows.needsUpdate=T,y.spotLights.needsUpdate=T,y.spotLightShadows.needsUpdate=T,y.rectAreaLights.needsUpdate=T,y.hemisphereLights.needsUpdate=T}function Rs(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(y,T,Z){jA.get(y.texture).__webglTexture=T,jA.get(y.depthTexture).__webglTexture=Z;const u=jA.get(y);u.__hasExternalTextures=!0,u.__hasExternalTextures&&(u.__autoAllocateDepthBuffer=Z===void 0,u.__autoAllocateDepthBuffer||JA.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),u.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,T){const Z=jA.get(y);Z.__webglFramebuffer=T,Z.__useDefaultFramebuffer=T===void 0},this.setRenderTarget=function(y,T=0,Z=0){q=y,U=T,J=Z;let u=!0,W=null,nA=!1,UA=!1;if(y){const pA=jA.get(y);pA.__useDefaultFramebuffer!==void 0?(qA.bindFramebuffer(m.FRAMEBUFFER,null),u=!1):pA.__webglFramebuffer===void 0?fA.setupRenderTarget(y):pA.__hasExternalTextures&&fA.rebindTextures(y,jA.get(y.texture).__webglTexture,jA.get(y.depthTexture).__webglTexture);const ZA=y.texture;(ZA.isData3DTexture||ZA.isDataArrayTexture||ZA.isCompressedArrayTexture)&&(UA=!0);const dA=jA.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(W=dA[T],nA=!0):bA.isWebGL2&&y.samples>0&&fA.useMultisampledRTT(y)===!1?W=jA.get(y).__webglMultisampledFramebuffer:W=dA,N.copy(y.viewport),H.copy(y.scissor),_=y.scissorTest}else N.copy(AA).multiplyScalar(j).floor(),H.copy(DA).multiplyScalar(j).floor(),_=b;if(qA.bindFramebuffer(m.FRAMEBUFFER,W)&&bA.drawBuffers&&u&&qA.drawBuffers(y,W),qA.viewport(N),qA.scissor(H),qA.setScissorTest(_),nA){const pA=jA.get(y.texture);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_CUBE_MAP_POSITIVE_X+T,pA.__webglTexture,Z)}else if(UA){const pA=jA.get(y.texture),ZA=T||0;m.framebufferTextureLayer(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,pA.__webglTexture,Z||0,ZA)}p=-1},this.readRenderTargetPixels=function(y,T,Z,u,W,nA,UA){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let FA=jA.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&UA!==void 0&&(FA=FA[UA]),FA){qA.bindFramebuffer(m.FRAMEBUFFER,FA);try{const pA=y.texture,ZA=pA.format,dA=pA.type;if(ZA!==tg&&rA.convert(ZA)!==m.getParameter(m.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const uA=dA===VB&&(JA.has("EXT_color_buffer_half_float")||bA.isWebGL2&&JA.has("EXT_color_buffer_float"));if(dA!==aC&&rA.convert(dA)!==m.getParameter(m.IMPLEMENTATION_COLOR_READ_TYPE)&&!(dA===Pg&&(bA.isWebGL2||JA.has("OES_texture_float")||JA.has("WEBGL_color_buffer_float")))&&!uA){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}T>=0&&T<=y.width-u&&Z>=0&&Z<=y.height-W&&m.readPixels(T,Z,u,W,rA.convert(ZA),rA.convert(dA),nA)}finally{const pA=q!==null?jA.get(q).__webglFramebuffer:null;qA.bindFramebuffer(m.FRAMEBUFFER,pA)}}},this.copyFramebufferToTexture=function(y,T,Z=0){const u=Math.pow(2,-Z),W=Math.floor(T.image.width*u),nA=Math.floor(T.image.height*u);fA.setTexture2D(T,0),m.copyTexSubImage2D(m.TEXTURE_2D,Z,0,0,y.x,y.y,W,nA),qA.unbindTexture()},this.copyTextureToTexture=function(y,T,Z,u=0){const W=T.image.width,nA=T.image.height,UA=rA.convert(Z.format),FA=rA.convert(Z.type);fA.setTexture2D(Z,0),m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,Z.flipY),m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),m.pixelStorei(m.UNPACK_ALIGNMENT,Z.unpackAlignment),T.isDataTexture?m.texSubImage2D(m.TEXTURE_2D,u,y.x,y.y,W,nA,UA,FA,T.image.data):T.isCompressedTexture?m.compressedTexSubImage2D(m.TEXTURE_2D,u,y.x,y.y,T.mipmaps[0].width,T.mipmaps[0].height,UA,T.mipmaps[0].data):m.texSubImage2D(m.TEXTURE_2D,u,y.x,y.y,UA,FA,T.image),u===0&&Z.generateMipmaps&&m.generateMipmap(m.TEXTURE_2D),qA.unbindTexture()},this.copyTextureToTexture3D=function(y,T,Z,u,W=0){if(G.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const nA=y.max.x-y.min.x+1,UA=y.max.y-y.min.y+1,FA=y.max.z-y.min.z+1,pA=rA.convert(u.format),ZA=rA.convert(u.type);let dA;if(u.isData3DTexture)fA.setTexture3D(u,0),dA=m.TEXTURE_3D;else if(u.isDataArrayTexture)fA.setTexture2DArray(u,0),dA=m.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,u.flipY),m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),m.pixelStorei(m.UNPACK_ALIGNMENT,u.unpackAlignment);const uA=m.getParameter(m.UNPACK_ROW_LENGTH),aI=m.getParameter(m.UNPACK_IMAGE_HEIGHT),wI=m.getParameter(m.UNPACK_SKIP_PIXELS),ng=m.getParameter(m.UNPACK_SKIP_ROWS),ug=m.getParameter(m.UNPACK_SKIP_IMAGES),lI=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;m.pixelStorei(m.UNPACK_ROW_LENGTH,lI.width),m.pixelStorei(m.UNPACK_IMAGE_HEIGHT,lI.height),m.pixelStorei(m.UNPACK_SKIP_PIXELS,y.min.x),m.pixelStorei(m.UNPACK_SKIP_ROWS,y.min.y),m.pixelStorei(m.UNPACK_SKIP_IMAGES,y.min.z),Z.isDataTexture||Z.isData3DTexture?m.texSubImage3D(dA,W,T.x,T.y,T.z,nA,UA,FA,pA,ZA,lI.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),m.compressedTexSubImage3D(dA,W,T.x,T.y,T.z,nA,UA,FA,pA,lI.data)):m.texSubImage3D(dA,W,T.x,T.y,T.z,nA,UA,FA,pA,ZA,lI),m.pixelStorei(m.UNPACK_ROW_LENGTH,uA),m.pixelStorei(m.UNPACK_IMAGE_HEIGHT,aI),m.pixelStorei(m.UNPACK_SKIP_PIXELS,wI),m.pixelStorei(m.UNPACK_SKIP_ROWS,ng),m.pixelStorei(m.UNPACK_SKIP_IMAGES,ug),W===0&&u.generateMipmaps&&m.generateMipmap(dA),qA.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?fA.setTextureCube(y,0):y.isData3DTexture?fA.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?fA.setTexture2DArray(y,0):fA.setTexture2D(y,0),qA.unbindTexture()},this.resetState=function(){U=0,J=0,q=null,qA.reset(),cA.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wg}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(A){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!A}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===NA?fC:Ca}set outputEncoding(A){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=A===fC?NA:qg}}class Ww extends Sa{}Ww.prototype.isWebGL1Renderer=!0;class jw extends BI{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,I){return super.copy(A,I),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const I=super.toJSON(A);return this.fog!==null&&(I.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(I.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(I.object.backgroundIntensity=this.backgroundIntensity),I}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(A){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=A}}class Vw{constructor(A,I){this.isInterleavedBuffer=!0,this.array=A,this.stride=I,this.count=A!==void 0?A.length/I:0,this.usage=pi,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Mg()}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.array=new A.array.constructor(A.array),this.count=A.count,this.stride=A.stride,this.usage=A.usage,this}copyAt(A,I,g){A*=this.stride,g*=I.stride;for(let C=0,B=this.stride;C<B;C++)this.array[A+C]=I.array[g+C];return this}set(A,I=0){return this.array.set(A,I),this}clone(A){A.arrayBuffers===void 0&&(A.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mg()),A.arrayBuffers[this.array.buffer._uuid]===void 0&&(A.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const I=new this.array.constructor(A.arrayBuffers[this.array.buffer._uuid]),g=new this.constructor(I,this.stride);return g.setUsage(this.usage),g}onUpload(A){return this.onUploadCallback=A,this}toJSON(A){return A.arrayBuffers===void 0&&(A.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mg()),A.arrayBuffers[this.array.buffer._uuid]===void 0&&(A.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const vI=new F;class Eo{constructor(A,I,g,C=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=A,this.itemSize=I,this.offset=g,this.normalized=C}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(A){this.data.needsUpdate=A}applyMatrix4(A){for(let I=0,g=this.data.count;I<g;I++)vI.fromBufferAttribute(this,I),vI.applyMatrix4(A),this.setXYZ(I,vI.x,vI.y,vI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)vI.fromBufferAttribute(this,I),vI.applyNormalMatrix(A),this.setXYZ(I,vI.x,vI.y,vI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)vI.fromBufferAttribute(this,I),vI.transformDirection(A),this.setXYZ(I,vI.x,vI.y,vI.z);return this}setX(A,I){return this.normalized&&(I=EI(I,this.array)),this.data.array[A*this.data.stride+this.offset]=I,this}setY(A,I){return this.normalized&&(I=EI(I,this.array)),this.data.array[A*this.data.stride+this.offset+1]=I,this}setZ(A,I){return this.normalized&&(I=EI(I,this.array)),this.data.array[A*this.data.stride+this.offset+2]=I,this}setW(A,I){return this.normalized&&(I=EI(I,this.array)),this.data.array[A*this.data.stride+this.offset+3]=I,this}getX(A){let I=this.data.array[A*this.data.stride+this.offset];return this.normalized&&(I=jg(I,this.array)),I}getY(A){let I=this.data.array[A*this.data.stride+this.offset+1];return this.normalized&&(I=jg(I,this.array)),I}getZ(A){let I=this.data.array[A*this.data.stride+this.offset+2];return this.normalized&&(I=jg(I,this.array)),I}getW(A){let I=this.data.array[A*this.data.stride+this.offset+3];return this.normalized&&(I=jg(I,this.array)),I}setXY(A,I,g){return A=A*this.data.stride+this.offset,this.normalized&&(I=EI(I,this.array),g=EI(g,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this}setXYZ(A,I,g,C){return A=A*this.data.stride+this.offset,this.normalized&&(I=EI(I,this.array),g=EI(g,this.array),C=EI(C,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this.data.array[A+2]=C,this}setXYZW(A,I,g,C,B){return A=A*this.data.stride+this.offset,this.normalized&&(I=EI(I,this.array),g=EI(g,this.array),C=EI(C,this.array),B=EI(B,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this.data.array[A+2]=C,this.data.array[A+3]=B,this}clone(A){if(A===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const I=[];for(let g=0;g<this.count;g++){const C=g*this.data.stride+this.offset;for(let B=0;B<this.itemSize;B++)I.push(this.data.array[C+B])}return new WI(new this.array.constructor(I),this.itemSize,this.normalized)}else return A.interleavedBuffers===void 0&&(A.interleavedBuffers={}),A.interleavedBuffers[this.data.uuid]===void 0&&(A.interleavedBuffers[this.data.uuid]=this.data.clone(A)),new Eo(A.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(A){if(A===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const I=[];for(let g=0;g<this.count;g++){const C=g*this.data.stride+this.offset;for(let B=0;B<this.itemSize;B++)I.push(this.data.array[C+B])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:I,normalized:this.normalized}}else return A.interleavedBuffers===void 0&&(A.interleavedBuffers={}),A.interleavedBuffers[this.data.uuid]===void 0&&(A.interleavedBuffers[this.data.uuid]=this.data.toJSON(A)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ee=new F,ie=new II,oe=new II,_w=new F,te=new GA,QB=new F,Di=new Yg,ee=new GA,ni=new wE;class ka extends tI{constructor(A,I){super(A,I),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new GA,this.bindMatrixInverse=new GA,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const A=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ug),this.boundingBox.makeEmpty();const I=A.getAttribute("position");for(let g=0;g<I.count;g++)QB.fromBufferAttribute(I,g),this.applyBoneTransform(g,QB),this.boundingBox.expandByPoint(QB)}computeBoundingSphere(){const A=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yg),this.boundingSphere.makeEmpty();const I=A.getAttribute("position");for(let g=0;g<I.count;g++)QB.fromBufferAttribute(I,g),this.applyBoneTransform(g,QB),this.boundingSphere.expandByPoint(QB)}copy(A,I){return super.copy(A,I),this.bindMode=A.bindMode,this.bindMatrix.copy(A.bindMatrix),this.bindMatrixInverse.copy(A.bindMatrixInverse),this.skeleton=A.skeleton,A.boundingBox!==null&&(this.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(this.boundingSphere=A.boundingSphere.clone()),this}raycast(A,I){const g=this.material,C=this.matrixWorld;g!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Di.copy(this.boundingSphere),Di.applyMatrix4(C),A.ray.intersectsSphere(Di)!==!1&&(ee.copy(C).invert(),ni.copy(A.ray).applyMatrix4(ee),!(this.boundingBox!==null&&ni.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(A,I,ni)))}getVertexPosition(A,I){return super.getVertexPosition(A,I),this.applyBoneTransform(A,I),I}bind(A,I){this.skeleton=A,I===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),I=this.matrixWorld),this.bindMatrix.copy(I),this.bindMatrixInverse.copy(I).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const A=new II,I=this.geometry.attributes.skinWeight;for(let g=0,C=I.count;g<C;g++){A.fromBufferAttribute(I,g);const B=1/A.manhattanLength();B!==1/0?A.multiplyScalar(B):A.set(1,0,0,0),I.setXYZW(g,A.x,A.y,A.z,A.w)}}updateMatrixWorld(A){super.updateMatrixWorld(A),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(A,I){const g=this.skeleton,C=this.geometry;ie.fromBufferAttribute(C.attributes.skinIndex,A),oe.fromBufferAttribute(C.attributes.skinWeight,A),Ee.copy(I).applyMatrix4(this.bindMatrix),I.set(0,0,0);for(let B=0;B<4;B++){const E=oe.getComponent(B);if(E!==0){const i=ie.getComponent(B);te.multiplyMatrices(g.bones[i].matrixWorld,g.boneInverses[i]),I.addScaledVector(_w.copy(Ee).applyMatrix4(te),E)}}return I.applyMatrix4(this.bindMatrixInverse)}boneTransform(A,I){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(A,I)}}class IE extends BI{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xw extends KI{constructor(A=null,I=1,g=1,C,B,E,i,o,t=LI,e=LI,a,s){super(null,E,i,o,t,e,C,B,a,s),this.isDataTexture=!0,this.image={data:A,width:I,height:g},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ae=new GA,zw=new GA;class kE{constructor(A=[],I=[]){this.uuid=Mg(),this.bones=A.slice(0),this.boneInverses=I,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const A=this.bones,I=this.boneInverses;if(this.boneMatrices=new Float32Array(A.length*16),I.length===0)this.calculateInverses();else if(A.length!==I.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let g=0,C=this.bones.length;g<C;g++)this.boneInverses.push(new GA)}}calculateInverses(){this.boneInverses.length=0;for(let A=0,I=this.bones.length;A<I;A++){const g=new GA;this.bones[A]&&g.copy(this.bones[A].matrixWorld).invert(),this.boneInverses.push(g)}}pose(){for(let A=0,I=this.bones.length;A<I;A++){const g=this.bones[A];g&&g.matrixWorld.copy(this.boneInverses[A]).invert()}for(let A=0,I=this.bones.length;A<I;A++){const g=this.bones[A];g&&(g.parent&&g.parent.isBone?(g.matrix.copy(g.parent.matrixWorld).invert(),g.matrix.multiply(g.matrixWorld)):g.matrix.copy(g.matrixWorld),g.matrix.decompose(g.position,g.quaternion,g.scale))}}update(){const A=this.bones,I=this.boneInverses,g=this.boneMatrices,C=this.boneTexture;for(let B=0,E=A.length;B<E;B++){const i=A[B]?A[B].matrixWorld:zw;ae.multiplyMatrices(i,I[B]),ae.toArray(g,B*16)}C!==null&&(C.needsUpdate=!0)}clone(){return new kE(this.bones,this.boneInverses)}computeBoneTexture(){let A=Math.sqrt(this.bones.length*4);A=Qa(A),A=Math.max(A,4);const I=new Float32Array(A*A*4);I.set(this.boneMatrices);const g=new Xw(I,A,A,tg,Pg);return g.needsUpdate=!0,this.boneMatrices=I,this.boneTexture=g,this.boneTextureSize=A,this}getBoneByName(A){for(let I=0,g=this.bones.length;I<g;I++){const C=this.bones[I];if(C.name===A)return C}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(A,I){this.uuid=A.uuid;for(let g=0,C=A.bones.length;g<C;g++){const B=A.bones[g];let E=I[B];E===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",B),E=new IE),this.bones.push(E),this.boneInverses.push(new GA().fromArray(A.boneInverses[g]))}return this.init(),this}toJSON(){const A={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};A.uuid=this.uuid;const I=this.bones,g=this.boneInverses;for(let C=0,B=I.length;C<B;C++){const E=I[C];A.bones.push(E.uuid);const i=g[C];A.boneInverses.push(i.toArray())}return A}}class se extends WI{constructor(A,I,g,C=1){super(A,I,g),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=C}copy(A){return super.copy(A),this.meshPerAttribute=A.meshPerAttribute,this}toJSON(){const A=super.toJSON();return A.meshPerAttribute=this.meshPerAttribute,A.isInstancedBufferAttribute=!0,A}}const EB=new GA,De=new GA,fQ=[],ne=new Ug,$w=new GA,mB=new tI,TB=new Yg;class AG extends tI{constructor(A,I,g){super(A,I),this.isInstancedMesh=!0,this.instanceMatrix=new se(new Float32Array(g*16),16),this.instanceColor=null,this.count=g,this.boundingBox=null,this.boundingSphere=null;for(let C=0;C<g;C++)this.setMatrixAt(C,$w)}computeBoundingBox(){const A=this.geometry,I=this.count;this.boundingBox===null&&(this.boundingBox=new Ug),A.boundingBox===null&&A.computeBoundingBox(),this.boundingBox.makeEmpty();for(let g=0;g<I;g++)this.getMatrixAt(g,EB),ne.copy(A.boundingBox).applyMatrix4(EB),this.boundingBox.union(ne)}computeBoundingSphere(){const A=this.geometry,I=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yg),A.boundingSphere===null&&A.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let g=0;g<I;g++)this.getMatrixAt(g,EB),TB.copy(A.boundingSphere).applyMatrix4(EB),this.boundingSphere.union(TB)}copy(A,I){return super.copy(A,I),this.instanceMatrix.copy(A.instanceMatrix),A.instanceColor!==null&&(this.instanceColor=A.instanceColor.clone()),this.count=A.count,A.boundingBox!==null&&(this.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(this.boundingSphere=A.boundingSphere.clone()),this}getColorAt(A,I){I.fromArray(this.instanceColor.array,A*3)}getMatrixAt(A,I){I.fromArray(this.instanceMatrix.array,A*16)}raycast(A,I){const g=this.matrixWorld,C=this.count;if(mB.geometry=this.geometry,mB.material=this.material,mB.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),TB.copy(this.boundingSphere),TB.applyMatrix4(g),A.ray.intersectsSphere(TB)!==!1))for(let B=0;B<C;B++){this.getMatrixAt(B,EB),De.multiplyMatrices(g,EB),mB.matrixWorld=De,mB.raycast(A,fQ);for(let E=0,i=fQ.length;E<i;E++){const o=fQ[E];o.instanceId=B,o.object=this,I.push(o)}fQ.length=0}}setColorAt(A,I){this.instanceColor===null&&(this.instanceColor=new se(new Float32Array(this.instanceMatrix.count*3),3)),I.toArray(this.instanceColor.array,A*3)}setMatrixAt(A,I){I.toArray(this.instanceMatrix.array,A*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class io extends Bg{constructor(A){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new hA(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.linewidth=A.linewidth,this.linecap=A.linecap,this.linejoin=A.linejoin,this.fog=A.fog,this}}const he=new F,re=new F,ce=new GA,hi=new wE,uQ=new Yg;class lE extends BI{constructor(A=new jI,I=new io){super(),this.isLine=!0,this.type="Line",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),this.material=A.material,this.geometry=A.geometry,this}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[0];for(let C=1,B=I.count;C<B;C++)he.fromBufferAttribute(I,C-1),re.fromBufferAttribute(I,C),g[C]=g[C-1],g[C]+=he.distanceTo(re);A.setAttribute("lineDistance",new SI(g,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(A,I){const g=this.geometry,C=this.matrixWorld,B=A.params.Line.threshold,E=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),uQ.copy(g.boundingSphere),uQ.applyMatrix4(C),uQ.radius+=B,A.ray.intersectsSphere(uQ)===!1)return;ce.copy(C).invert(),hi.copy(A.ray).applyMatrix4(ce);const i=B/((this.scale.x+this.scale.y+this.scale.z)/3),o=i*i,t=new F,e=new F,a=new F,s=new F,D=this.isLineSegments?2:1,c=g.index,h=g.attributes.position;if(c!==null){const n=Math.max(0,E.start),l=Math.min(c.count,E.start+E.count);for(let G=n,M=l-1;G<M;G+=D){const U=c.getX(G),J=c.getX(G+1);if(t.fromBufferAttribute(h,U),e.fromBufferAttribute(h,J),hi.distanceSqToSegment(t,e,s,a)>o)continue;s.applyMatrix4(this.matrixWorld);const p=A.ray.origin.distanceTo(s);p<A.near||p>A.far||I.push({distance:p,point:a.clone().applyMatrix4(this.matrixWorld),index:G,face:null,faceIndex:null,object:this})}}else{const n=Math.max(0,E.start),l=Math.min(h.count,E.start+E.count);for(let G=n,M=l-1;G<M;G+=D){if(t.fromBufferAttribute(h,G),e.fromBufferAttribute(h,G+1),hi.distanceSqToSegment(t,e,s,a)>o)continue;s.applyMatrix4(this.matrixWorld);const J=A.ray.origin.distanceTo(s);J<A.near||J>A.far||I.push({distance:J,point:a.clone().applyMatrix4(this.matrixWorld),index:G,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,E=C.length;B<E;B++){const i=C[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=B}}}}}const we=new F,Ge=new F;class IG extends lE{constructor(A,I){super(A,I),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[];for(let C=0,B=I.count;C<B;C+=2)we.fromBufferAttribute(I,C),Ge.fromBufferAttribute(I,C+1),g[C]=C===0?0:g[C-1],g[C+1]=g[C]+we.distanceTo(Ge);A.setAttribute("lineDistance",new SI(g,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gG extends lE{constructor(A,I){super(A,I),this.isLineLoop=!0,this.type="LineLoop"}}class la extends Bg{constructor(A){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new hA(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.alphaMap=A.alphaMap,this.size=A.size,this.sizeAttenuation=A.sizeAttenuation,this.fog=A.fog,this}}const Se=new GA,fi=new wE,HQ=new Yg,mQ=new F;class CG extends BI{constructor(A=new jI,I=new la){super(),this.isPoints=!0,this.type="Points",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),this.material=A.material,this.geometry=A.geometry,this}raycast(A,I){const g=this.geometry,C=this.matrixWorld,B=A.params.Points.threshold,E=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),HQ.copy(g.boundingSphere),HQ.applyMatrix4(C),HQ.radius+=B,A.ray.intersectsSphere(HQ)===!1)return;Se.copy(C).invert(),fi.copy(A.ray).applyMatrix4(Se);const i=B/((this.scale.x+this.scale.y+this.scale.z)/3),o=i*i,t=g.index,a=g.attributes.position;if(t!==null){const s=Math.max(0,E.start),D=Math.min(t.count,E.start+E.count);for(let c=s,w=D;c<w;c++){const h=t.getX(c);mQ.fromBufferAttribute(a,h),ke(mQ,h,o,C,A,I,this)}}else{const s=Math.max(0,E.start),D=Math.min(a.count,E.start+E.count);for(let c=s,w=D;c<w;c++)mQ.fromBufferAttribute(a,c),ke(mQ,c,o,C,A,I,this)}}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,E=C.length;B<E;B++){const i=C[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=B}}}}}function ke(Q,A,I,g,C,B,E){const i=fi.distanceSqToPoint(Q);if(i<I){const o=new F;fi.closestPointToPoint(Q,o),o.applyMatrix4(g);const t=C.ray.origin.distanceTo(o);if(t<C.near||t>C.far)return;B.push({distance:t,distanceToRay:Math.sqrt(i),point:o,index:A,face:null,object:E})}}class BG{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(A,I){const g=this.getUtoTmapping(A);return this.getPoint(g,I)}getPoints(A=5){const I=[];for(let g=0;g<=A;g++)I.push(this.getPoint(g/A));return I}getSpacedPoints(A=5){const I=[];for(let g=0;g<=A;g++)I.push(this.getPointAt(g/A));return I}getLength(){const A=this.getLengths();return A[A.length-1]}getLengths(A=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===A+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const I=[];let g,C=this.getPoint(0),B=0;I.push(0);for(let E=1;E<=A;E++)g=this.getPoint(E/A),B+=g.distanceTo(C),I.push(B),C=g;return this.cacheArcLengths=I,I}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(A,I){const g=this.getLengths();let C=0;const B=g.length;let E;I?E=I:E=A*g[B-1];let i=0,o=B-1,t;for(;i<=o;)if(C=Math.floor(i+(o-i)/2),t=g[C]-E,t<0)i=C+1;else if(t>0)o=C-1;else{o=C;break}if(C=o,g[C]===E)return C/(B-1);const e=g[C],s=g[C+1]-e,D=(E-e)/s;return(C+D)/(B-1)}getTangent(A,I){let C=A-1e-4,B=A+1e-4;C<0&&(C=0),B>1&&(B=1);const E=this.getPoint(C),i=this.getPoint(B),o=I||(E.isVector2?new xA:new F);return o.copy(i).sub(E).normalize(),o}getTangentAt(A,I){const g=this.getUtoTmapping(A);return this.getTangent(g,I)}computeFrenetFrames(A,I){const g=new F,C=[],B=[],E=[],i=new F,o=new GA;for(let D=0;D<=A;D++){const c=D/A;C[D]=this.getTangentAt(c,new F)}B[0]=new F,E[0]=new F;let t=Number.MAX_VALUE;const e=Math.abs(C[0].x),a=Math.abs(C[0].y),s=Math.abs(C[0].z);e<=t&&(t=e,g.set(1,0,0)),a<=t&&(t=a,g.set(0,1,0)),s<=t&&g.set(0,0,1),i.crossVectors(C[0],g).normalize(),B[0].crossVectors(C[0],i),E[0].crossVectors(C[0],B[0]);for(let D=1;D<=A;D++){if(B[D]=B[D-1].clone(),E[D]=E[D-1].clone(),i.crossVectors(C[D-1],C[D]),i.length()>Number.EPSILON){i.normalize();const c=Math.acos(YI(C[D-1].dot(C[D]),-1,1));B[D].applyMatrix4(o.makeRotationAxis(i,c))}E[D].crossVectors(C[D],B[D])}if(I===!0){let D=Math.acos(YI(B[0].dot(B[A]),-1,1));D/=A,C[0].dot(i.crossVectors(B[0],B[A]))>0&&(D=-D);for(let c=1;c<=A;c++)B[c].applyMatrix4(o.makeRotationAxis(C[c],D*c)),E[c].crossVectors(C[c],B[c])}return{tangents:C,normals:B,binormals:E}}clone(){return new this.constructor().copy(this)}copy(A){return this.arcLengthDivisions=A.arcLengthDivisions,this}toJSON(){const A={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return A.arcLengthDivisions=this.arcLengthDivisions,A.type=this.type,A}fromJSON(A){return this.arcLengthDivisions=A.arcLengthDivisions,this}}class gE extends jI{constructor(A=1,I=1,g=1,C=32,B=1,E=!1,i=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:A,radiusBottom:I,height:g,radialSegments:C,heightSegments:B,openEnded:E,thetaStart:i,thetaLength:o};const t=this;C=Math.floor(C),B=Math.floor(B);const e=[],a=[],s=[],D=[];let c=0;const w=[],h=g/2;let n=0;l(),E===!1&&(A>0&&G(!0),I>0&&G(!1)),this.setIndex(e),this.setAttribute("position",new SI(a,3)),this.setAttribute("normal",new SI(s,3)),this.setAttribute("uv",new SI(D,2));function l(){const M=new F,U=new F;let J=0;const q=(I-A)/g;for(let p=0;p<=B;p++){const S=[],N=p/B,H=N*(I-A)+A;for(let _=0;_<=C;_++){const f=_/C,x=f*o+i,O=Math.sin(x),z=Math.cos(x);U.x=H*O,U.y=-N*g+h,U.z=H*z,a.push(U.x,U.y,U.z),M.set(O,q,z).normalize(),s.push(M.x,M.y,M.z),D.push(f,1-N),S.push(c++)}w.push(S)}for(let p=0;p<C;p++)for(let S=0;S<B;S++){const N=w[S][p],H=w[S+1][p],_=w[S+1][p+1],f=w[S][p+1];e.push(N,H,f),e.push(H,_,f),J+=6}t.addGroup(n,J,0),n+=J}function G(M){const U=c,J=new xA,q=new F;let p=0;const S=M===!0?A:I,N=M===!0?1:-1;for(let _=1;_<=C;_++)a.push(0,h*N,0),s.push(0,N,0),D.push(.5,.5),c++;const H=c;for(let _=0;_<=C;_++){const x=_/C*o+i,O=Math.cos(x),z=Math.sin(x);q.x=S*z,q.y=h*N,q.z=S*O,a.push(q.x,q.y,q.z),s.push(0,N,0),J.x=O*.5+.5,J.y=z*.5*N+.5,D.push(J.x,J.y),c++}for(let _=0;_<C;_++){const f=U+_,x=H+_;M===!0?e.push(x,x+1,f):e.push(x+1,x,f),p+=3}t.addGroup(n,p,M===!0?1:2),n+=p}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new gE(A.radiusTop,A.radiusBottom,A.height,A.radialSegments,A.heightSegments,A.openEnded,A.thetaStart,A.thetaLength)}}class $B extends jI{constructor(A=1,I=32,g=16,C=0,B=Math.PI*2,E=0,i=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:A,widthSegments:I,heightSegments:g,phiStart:C,phiLength:B,thetaStart:E,thetaLength:i},I=Math.max(3,Math.floor(I)),g=Math.max(2,Math.floor(g));const o=Math.min(E+i,Math.PI);let t=0;const e=[],a=new F,s=new F,D=[],c=[],w=[],h=[];for(let n=0;n<=g;n++){const l=[],G=n/g;let M=0;n===0&&E===0?M=.5/I:n===g&&o===Math.PI&&(M=-.5/I);for(let U=0;U<=I;U++){const J=U/I;a.x=-A*Math.cos(C+J*B)*Math.sin(E+G*i),a.y=A*Math.cos(E+G*i),a.z=A*Math.sin(C+J*B)*Math.sin(E+G*i),c.push(a.x,a.y,a.z),s.copy(a).normalize(),w.push(s.x,s.y,s.z),h.push(J+M,1-G),l.push(t++)}e.push(l)}for(let n=0;n<g;n++)for(let l=0;l<I;l++){const G=e[n][l+1],M=e[n][l],U=e[n+1][l],J=e[n+1][l+1];(n!==0||E>0)&&D.push(G,M,J),(n!==g-1||o<Math.PI)&&D.push(M,U,J)}this.setIndex(D),this.setAttribute("position",new SI(c,3)),this.setAttribute("normal",new SI(w,3)),this.setAttribute("uv",new SI(h,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new $B(A.radius,A.widthSegments,A.heightSegments,A.phiStart,A.phiLength,A.thetaStart,A.thetaLength)}}class oo extends Bg{constructor(A){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new hA(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new hA(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oQ,this.normalScale=new xA(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.defines={STANDARD:""},this.color.copy(A.color),this.roughness=A.roughness,this.metalness=A.metalness,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.roughnessMap=A.roughnessMap,this.metalnessMap=A.metalnessMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapIntensity=A.envMapIntensity,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}class SC extends oo{constructor(A){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xA(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return YI(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(I){this.ior=(1+.4*I)/(1-.4*I)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new hA(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new hA(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new hA(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(A)}get anisotropy(){return this._anisotropy}set anisotropy(A){this._anisotropy>0!=A>0&&this.version++,this._anisotropy=A}get clearcoat(){return this._clearcoat}set clearcoat(A){this._clearcoat>0!=A>0&&this.version++,this._clearcoat=A}get iridescence(){return this._iridescence}set iridescence(A){this._iridescence>0!=A>0&&this.version++,this._iridescence=A}get sheen(){return this._sheen}set sheen(A){this._sheen>0!=A>0&&this.version++,this._sheen=A}get transmission(){return this._transmission}set transmission(A){this._transmission>0!=A>0&&this.version++,this._transmission=A}copy(A){return super.copy(A),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=A.anisotropy,this.anisotropyRotation=A.anisotropyRotation,this.anisotropyMap=A.anisotropyMap,this.clearcoat=A.clearcoat,this.clearcoatMap=A.clearcoatMap,this.clearcoatRoughness=A.clearcoatRoughness,this.clearcoatRoughnessMap=A.clearcoatRoughnessMap,this.clearcoatNormalMap=A.clearcoatNormalMap,this.clearcoatNormalScale.copy(A.clearcoatNormalScale),this.ior=A.ior,this.iridescence=A.iridescence,this.iridescenceMap=A.iridescenceMap,this.iridescenceIOR=A.iridescenceIOR,this.iridescenceThicknessRange=[...A.iridescenceThicknessRange],this.iridescenceThicknessMap=A.iridescenceThicknessMap,this.sheen=A.sheen,this.sheenColor.copy(A.sheenColor),this.sheenColorMap=A.sheenColorMap,this.sheenRoughness=A.sheenRoughness,this.sheenRoughnessMap=A.sheenRoughnessMap,this.transmission=A.transmission,this.transmissionMap=A.transmissionMap,this.thickness=A.thickness,this.thicknessMap=A.thicknessMap,this.attenuationDistance=A.attenuationDistance,this.attenuationColor.copy(A.attenuationColor),this.specularIntensity=A.specularIntensity,this.specularIntensityMap=A.specularIntensityMap,this.specularColor.copy(A.specularColor),this.specularColorMap=A.specularColorMap,this}}class hB extends Bg{constructor(A){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new hA(16777215),this.specular=new hA(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new hA(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oQ,this.normalScale=new xA(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.specular.copy(A.specular),this.shininess=A.shininess,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}class le extends Bg{constructor(A){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new hA(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new hA(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oQ,this.normalScale=new xA(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.gradientMap=A.gradientMap,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.alphaMap=A.alphaMap,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}class to extends Bg{constructor(A){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new hA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new hA(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oQ,this.normalScale=new xA(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}function CC(Q,A,I){return ya(Q)?new Q.constructor(Q.subarray(A,I!==void 0?I:Q.length)):Q.slice(A,I)}function TQ(Q,A,I){return!Q||!I&&Q.constructor===A?Q:typeof A.BYTES_PER_ELEMENT=="number"?new A(Q):Array.prototype.slice.call(Q)}function ya(Q){return ArrayBuffer.isView(Q)&&!(Q instanceof DataView)}function QG(Q){function A(C,B){return Q[C]-Q[B]}const I=Q.length,g=new Array(I);for(let C=0;C!==I;++C)g[C]=C;return g.sort(A),g}function ye(Q,A,I){const g=Q.length,C=new Q.constructor(g);for(let B=0,E=0;E!==g;++B){const i=I[B]*A;for(let o=0;o!==A;++o)C[E++]=Q[i+o]}return C}function Ma(Q,A,I,g){let C=1,B=Q[0];for(;B!==void 0&&B[g]===void 0;)B=Q[C++];if(B===void 0)return;let E=B[g];if(E!==void 0)if(Array.isArray(E))do E=B[g],E!==void 0&&(A.push(B.time),I.push.apply(I,E)),B=Q[C++];while(B!==void 0);else if(E.toArray!==void 0)do E=B[g],E!==void 0&&(A.push(B.time),E.toArray(I,I.length)),B=Q[C++];while(B!==void 0);else do E=B[g],E!==void 0&&(A.push(B.time),I.push(E)),B=Q[C++];while(B!==void 0)}class tQ{constructor(A,I,g,C){this.parameterPositions=A,this._cachedIndex=0,this.resultBuffer=C!==void 0?C:new I.constructor(g),this.sampleValues=I,this.valueSize=g,this.settings=null,this.DefaultSettings_={}}evaluate(A){const I=this.parameterPositions;let g=this._cachedIndex,C=I[g],B=I[g-1];g:{A:{let E;I:{C:if(!(A<C)){for(let i=g+2;;){if(C===void 0){if(A<B)break C;return g=I.length,this._cachedIndex=g,this.copySampleValue_(g-1)}if(g===i)break;if(B=C,C=I[++g],A<C)break A}E=I.length;break I}if(!(A>=B)){const i=I[1];A<i&&(g=2,B=i);for(let o=g-2;;){if(B===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(g===o)break;if(C=B,B=I[--g-1],A>=B)break A}E=g,g=0;break I}break g}for(;g<E;){const i=g+E>>>1;A<I[i]?E=i:g=i+1}if(C=I[g],B=I[g-1],B===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(C===void 0)return g=I.length,this._cachedIndex=g,this.copySampleValue_(g-1)}this._cachedIndex=g,this.intervalChanged_(g,B,C)}return this.interpolate_(g,B,A,C)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(A){const I=this.resultBuffer,g=this.sampleValues,C=this.valueSize,B=A*C;for(let E=0;E!==C;++E)I[E]=g[B+E];return I}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class EG extends tQ{constructor(A,I,g,C){super(A,I,g,C),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wt,endingEnd:wt}}intervalChanged_(A,I,g){const C=this.parameterPositions;let B=A-2,E=A+1,i=C[B],o=C[E];if(i===void 0)switch(this.getSettings_().endingStart){case Gt:B=A,i=2*I-g;break;case St:B=C.length-2,i=I+C[B]-C[B+1];break;default:B=A,i=g}if(o===void 0)switch(this.getSettings_().endingEnd){case Gt:E=A,o=2*g-I;break;case St:E=1,o=g+C[1]-C[0];break;default:E=A-1,o=I}const t=(g-I)*.5,e=this.valueSize;this._weightPrev=t/(I-i),this._weightNext=t/(o-g),this._offsetPrev=B*e,this._offsetNext=E*e}interpolate_(A,I,g,C){const B=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=A*i,t=o-i,e=this._offsetPrev,a=this._offsetNext,s=this._weightPrev,D=this._weightNext,c=(g-I)/(C-I),w=c*c,h=w*c,n=-s*h+2*s*w-s*c,l=(1+s)*h+(-1.5-2*s)*w+(-.5+s)*c+1,G=(-1-D)*h+(1.5+D)*w+.5*c,M=D*h-D*w;for(let U=0;U!==i;++U)B[U]=n*E[e+U]+l*E[t+U]+G*E[o+U]+M*E[a+U];return B}}class iG extends tQ{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A,I,g,C){const B=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=A*i,t=o-i,e=(g-I)/(C-I),a=1-e;for(let s=0;s!==i;++s)B[s]=E[t+s]*a+E[o+s]*e;return B}}class oG extends tQ{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A){return this.copySampleValue_(A-1)}}class fg{constructor(A,I,g,C){if(A===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(I===void 0||I.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+A);this.name=A,this.times=TQ(I,this.TimeBufferType),this.values=TQ(g,this.ValueBufferType),this.setInterpolation(C||this.DefaultInterpolation)}static toJSON(A){const I=A.constructor;let g;if(I.toJSON!==this.toJSON)g=I.toJSON(A);else{g={name:A.name,times:TQ(A.times,Array),values:TQ(A.values,Array)};const C=A.getInterpolation();C!==A.DefaultInterpolation&&(g.interpolation=C)}return g.type=A.ValueTypeName,g}InterpolantFactoryMethodDiscrete(A){return new oG(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodLinear(A){return new iG(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodSmooth(A){return new EG(this.times,this.values,this.getValueSize(),A)}setInterpolation(A){let I;switch(A){case _B:I=this.InterpolantFactoryMethodDiscrete;break;case kB:I=this.InterpolantFactoryMethodLinear;break;case vE:I=this.InterpolantFactoryMethodSmooth;break}if(I===void 0){const g="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(A!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(g);return console.warn("THREE.KeyframeTrack:",g),this}return this.createInterpolant=I,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _B;case this.InterpolantFactoryMethodLinear:return kB;case this.InterpolantFactoryMethodSmooth:return vE}}getValueSize(){return this.values.length/this.times.length}shift(A){if(A!==0){const I=this.times;for(let g=0,C=I.length;g!==C;++g)I[g]+=A}return this}scale(A){if(A!==1){const I=this.times;for(let g=0,C=I.length;g!==C;++g)I[g]*=A}return this}trim(A,I){const g=this.times,C=g.length;let B=0,E=C-1;for(;B!==C&&g[B]<A;)++B;for(;E!==-1&&g[E]>I;)--E;if(++E,B!==0||E!==C){B>=E&&(E=Math.max(E,1),B=E-1);const i=this.getValueSize();this.times=CC(g,B,E),this.values=CC(this.values,B*i,E*i)}return this}validate(){let A=!0;const I=this.getValueSize();I-Math.floor(I)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),A=!1);const g=this.times,C=this.values,B=g.length;B===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),A=!1);let E=null;for(let i=0;i!==B;i++){const o=g[i];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,i,o),A=!1;break}if(E!==null&&E>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,i,o,E),A=!1;break}E=o}if(C!==void 0&&ya(C))for(let i=0,o=C.length;i!==o;++i){const t=C[i];if(isNaN(t)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,i,t),A=!1;break}}return A}optimize(){const A=CC(this.times),I=CC(this.values),g=this.getValueSize(),C=this.getInterpolation()===vE,B=A.length-1;let E=1;for(let i=1;i<B;++i){let o=!1;const t=A[i],e=A[i+1];if(t!==e&&(i!==1||t!==A[0]))if(C)o=!0;else{const a=i*g,s=a-g,D=a+g;for(let c=0;c!==g;++c){const w=I[a+c];if(w!==I[s+c]||w!==I[D+c]){o=!0;break}}}if(o){if(i!==E){A[E]=A[i];const a=i*g,s=E*g;for(let D=0;D!==g;++D)I[s+D]=I[a+D]}++E}}if(B>0){A[E]=A[B];for(let i=B*g,o=E*g,t=0;t!==g;++t)I[o+t]=I[i+t];++E}return E!==A.length?(this.times=CC(A,0,E),this.values=CC(I,0,E*g)):(this.times=A,this.values=I),this}clone(){const A=CC(this.times,0),I=CC(this.values,0),g=this.constructor,C=new g(this.name,A,I);return C.createInterpolant=this.createInterpolant,C}}fg.prototype.TimeBufferType=Float32Array;fg.prototype.ValueBufferType=Float32Array;fg.prototype.DefaultInterpolation=kB;class qB extends fg{}qB.prototype.ValueTypeName="bool";qB.prototype.ValueBufferType=Array;qB.prototype.DefaultInterpolation=_B;qB.prototype.InterpolantFactoryMethodLinear=void 0;qB.prototype.InterpolantFactoryMethodSmooth=void 0;class Ua extends fg{}Ua.prototype.ValueTypeName="color";class MB extends fg{}MB.prototype.ValueTypeName="number";class tG extends tQ{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A,I,g,C){const B=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=(g-I)/(C-I);let t=A*i;for(let e=t+i;t!==e;t+=4)sg.slerpFlat(B,0,E,t-i,E,t,o);return B}}class hC extends fg{InterpolantFactoryMethodLinear(A){return new tG(this.times,this.values,this.getValueSize(),A)}}hC.prototype.ValueTypeName="quaternion";hC.prototype.DefaultInterpolation=kB;hC.prototype.InterpolantFactoryMethodSmooth=void 0;class pB extends fg{}pB.prototype.ValueTypeName="string";pB.prototype.ValueBufferType=Array;pB.prototype.DefaultInterpolation=_B;pB.prototype.InterpolantFactoryMethodLinear=void 0;pB.prototype.InterpolantFactoryMethodSmooth=void 0;class UB extends fg{}UB.prototype.ValueTypeName="vector";class Na{constructor(A,I=-1,g,C=cD){this.name=A,this.tracks=g,this.duration=I,this.blendMode=C,this.uuid=Mg(),this.duration<0&&this.resetDuration()}static parse(A){const I=[],g=A.tracks,C=1/(A.fps||1);for(let E=0,i=g.length;E!==i;++E)I.push(aG(g[E]).scale(C));const B=new this(A.name,A.duration,I,A.blendMode);return B.uuid=A.uuid,B}static toJSON(A){const I=[],g=A.tracks,C={name:A.name,duration:A.duration,tracks:I,uuid:A.uuid,blendMode:A.blendMode};for(let B=0,E=g.length;B!==E;++B)I.push(fg.toJSON(g[B]));return C}static CreateFromMorphTargetSequence(A,I,g,C){const B=I.length,E=[];for(let i=0;i<B;i++){let o=[],t=[];o.push((i+B-1)%B,i,(i+1)%B),t.push(0,1,0);const e=QG(o);o=ye(o,1,e),t=ye(t,1,e),!C&&o[0]===0&&(o.push(B),t.push(t[0])),E.push(new MB(".morphTargetInfluences["+I[i].name+"]",o,t).scale(1/g))}return new this(A,-1,E)}static findByName(A,I){let g=A;if(!Array.isArray(A)){const C=A;g=C.geometry&&C.geometry.animations||C.animations}for(let C=0;C<g.length;C++)if(g[C].name===I)return g[C];return null}static CreateClipsFromMorphTargetSequences(A,I,g){const C={},B=/^([\w-]*?)([\d]+)$/;for(let i=0,o=A.length;i<o;i++){const t=A[i],e=t.name.match(B);if(e&&e.length>1){const a=e[1];let s=C[a];s||(C[a]=s=[]),s.push(t)}}const E=[];for(const i in C)E.push(this.CreateFromMorphTargetSequence(i,C[i],I,g));return E}static parseAnimation(A,I){if(!A)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const g=function(a,s,D,c,w){if(D.length!==0){const h=[],n=[];Ma(D,h,n,c),h.length!==0&&w.push(new a(s,h,n))}},C=[],B=A.name||"default",E=A.fps||30,i=A.blendMode;let o=A.length||-1;const t=A.hierarchy||[];for(let a=0;a<t.length;a++){const s=t[a].keys;if(!(!s||s.length===0))if(s[0].morphTargets){const D={};let c;for(c=0;c<s.length;c++)if(s[c].morphTargets)for(let w=0;w<s[c].morphTargets.length;w++)D[s[c].morphTargets[w]]=-1;for(const w in D){const h=[],n=[];for(let l=0;l!==s[c].morphTargets.length;++l){const G=s[c];h.push(G.time),n.push(G.morphTarget===w?1:0)}C.push(new MB(".morphTargetInfluence["+w+"]",h,n))}o=D.length*E}else{const D=".bones["+I[a].name+"]";g(UB,D+".position",s,"pos",C),g(hC,D+".quaternion",s,"rot",C),g(UB,D+".scale",s,"scl",C)}}return C.length===0?null:new this(B,o,C,i)}resetDuration(){const A=this.tracks;let I=0;for(let g=0,C=A.length;g!==C;++g){const B=this.tracks[g];I=Math.max(I,B.times[B.times.length-1])}return this.duration=I,this}trim(){for(let A=0;A<this.tracks.length;A++)this.tracks[A].trim(0,this.duration);return this}validate(){let A=!0;for(let I=0;I<this.tracks.length;I++)A=A&&this.tracks[I].validate();return A}optimize(){for(let A=0;A<this.tracks.length;A++)this.tracks[A].optimize();return this}clone(){const A=[];for(let I=0;I<this.tracks.length;I++)A.push(this.tracks[I].clone());return new this.constructor(this.name,this.duration,A,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function eG(Q){switch(Q.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return MB;case"vector":case"vector2":case"vector3":case"vector4":return UB;case"color":return Ua;case"quaternion":return hC;case"bool":case"boolean":return qB;case"string":return pB}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+Q)}function aG(Q){if(Q.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const A=eG(Q.type);if(Q.times===void 0){const I=[],g=[];Ma(Q.keys,I,g,"value"),Q.times=I,Q.values=g}return A.parse!==void 0?A.parse(Q):new A(Q.name,Q.times,Q.values,Q.interpolation)}const NB={enabled:!1,files:{},add:function(Q,A){this.enabled!==!1&&(this.files[Q]=A)},get:function(Q){if(this.enabled!==!1)return this.files[Q]},remove:function(Q){delete this.files[Q]},clear:function(){this.files={}}};class ui{constructor(A,I,g){const C=this;let B=!1,E=0,i=0,o;const t=[];this.onStart=void 0,this.onLoad=A,this.onProgress=I,this.onError=g,this.itemStart=function(e){i++,B===!1&&C.onStart!==void 0&&C.onStart(e,E,i),B=!0},this.itemEnd=function(e){E++,C.onProgress!==void 0&&C.onProgress(e,E,i),E===i&&(B=!1,C.onLoad!==void 0&&C.onLoad())},this.itemError=function(e){C.onError!==void 0&&C.onError(e)},this.resolveURL=function(e){return o?o(e):e},this.setURLModifier=function(e){return o=e,this},this.addHandler=function(e,a){return t.push(e,a),this},this.removeHandler=function(e){const a=t.indexOf(e);return a!==-1&&t.splice(a,2),this},this.getHandler=function(e){for(let a=0,s=t.length;a<s;a+=2){const D=t[a],c=t[a+1];if(D.global&&(D.lastIndex=0),D.test(e))return c}return null}}}const sG=new ui;class OC{constructor(A){this.manager=A!==void 0?A:sG,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(A,I){const g=this;return new Promise(function(C,B){g.load(A,C,I,B)})}parse(){}setCrossOrigin(A){return this.crossOrigin=A,this}setWithCredentials(A){return this.withCredentials=A,this}setPath(A){return this.path=A,this}setResourcePath(A){return this.resourcePath=A,this}setRequestHeader(A){return this.requestHeader=A,this}}const vg={};class DG extends Error{constructor(A,I){super(A),this.response=I}}class eo extends OC{constructor(A){super(A)}load(A,I,g,C){A===void 0&&(A=""),this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const B=NB.get(A);if(B!==void 0)return this.manager.itemStart(A),setTimeout(()=>{I&&I(B),this.manager.itemEnd(A)},0),B;if(vg[A]!==void 0){vg[A].push({onLoad:I,onProgress:g,onError:C});return}vg[A]=[],vg[A].push({onLoad:I,onProgress:g,onError:C});const E=new Request(A,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),i=this.mimeType,o=this.responseType;fetch(E).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||t.body===void 0||t.body.getReader===void 0)return t;const e=vg[A],a=t.body.getReader(),s=t.headers.get("Content-Length")||t.headers.get("X-File-Size"),D=s?parseInt(s):0,c=D!==0;let w=0;const h=new ReadableStream({start(n){l();function l(){a.read().then(({done:G,value:M})=>{if(G)n.close();else{w+=M.byteLength;const U=new ProgressEvent("progress",{lengthComputable:c,loaded:w,total:D});for(let J=0,q=e.length;J<q;J++){const p=e[J];p.onProgress&&p.onProgress(U)}n.enqueue(M),l()}})}}});return new Response(h)}else throw new DG(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(t=>{switch(o){case"arraybuffer":return t.arrayBuffer();case"blob":return t.blob();case"document":return t.text().then(e=>new DOMParser().parseFromString(e,i));case"json":return t.json();default:if(i===void 0)return t.text();{const a=/charset="?([^;"\s]*)"?/i.exec(i),s=a&&a[1]?a[1].toLowerCase():void 0,D=new TextDecoder(s);return t.arrayBuffer().then(c=>D.decode(c))}}}).then(t=>{NB.add(A,t);const e=vg[A];delete vg[A];for(let a=0,s=e.length;a<s;a++){const D=e[a];D.onLoad&&D.onLoad(t)}}).catch(t=>{const e=vg[A];if(e===void 0)throw this.manager.itemError(A),t;delete vg[A];for(let a=0,s=e.length;a<s;a++){const D=e[a];D.onError&&D.onError(t)}this.manager.itemError(A)}).finally(()=>{this.manager.itemEnd(A)}),this.manager.itemStart(A)}setResponseType(A){return this.responseType=A,this}setMimeType(A){return this.mimeType=A,this}}class Ka extends OC{constructor(A){super(A)}load(A,I,g,C){this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const B=this,E=NB.get(A);if(E!==void 0)return B.manager.itemStart(A),setTimeout(function(){I&&I(E),B.manager.itemEnd(A)},0),E;const i=XB("img");function o(){e(),NB.add(A,this),I&&I(this),B.manager.itemEnd(A)}function t(a){e(),C&&C(a),B.manager.itemError(A),B.manager.itemEnd(A)}function e(){i.removeEventListener("load",o,!1),i.removeEventListener("error",t,!1)}return i.addEventListener("load",o,!1),i.addEventListener("error",t,!1),A.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(i.crossOrigin=this.crossOrigin),B.manager.itemStart(A),i.src=A,i}}class Me extends OC{constructor(A){super(A)}load(A,I,g,C){const B=new Co;B.colorSpace=NA;const E=new Ka(this.manager);E.setCrossOrigin(this.crossOrigin),E.setPath(this.path);let i=0;function o(t){E.load(A[t],function(e){B.images[t]=e,i++,i===6&&(B.needsUpdate=!0,I&&I(B))},void 0,C)}for(let t=0;t<A.length;++t)o(t);return B}}class rB extends OC{constructor(A){super(A)}load(A,I,g,C){const B=new KI,E=new Ka(this.manager);return E.setCrossOrigin(this.crossOrigin),E.setPath(this.path),E.load(A,function(i){B.image=i,B.needsUpdate=!0,I!==void 0&&I(B)},g,C),B}}class yE extends BI{constructor(A,I=1){super(),this.isLight=!0,this.type="Light",this.color=new hA(A),this.intensity=I}dispose(){}copy(A,I){return super.copy(A,I),this.color.copy(A.color),this.intensity=A.intensity,this}toJSON(A){const I=super.toJSON(A);return I.object.color=this.color.getHex(),I.object.intensity=this.intensity,this.groundColor!==void 0&&(I.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(I.object.distance=this.distance),this.angle!==void 0&&(I.object.angle=this.angle),this.decay!==void 0&&(I.object.decay=this.decay),this.penumbra!==void 0&&(I.object.penumbra=this.penumbra),this.shadow!==void 0&&(I.object.shadow=this.shadow.toJSON()),I}}const ri=new GA,Ue=new F,Ne=new F;class ao{constructor(A){this.camera=A,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xA(512,512),this.map=null,this.mapPass=null,this.matrix=new GA,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bo,this._frameExtents=new xA(1,1),this._viewportCount=1,this._viewports=[new II(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(A){const I=this.camera,g=this.matrix;Ue.setFromMatrixPosition(A.matrixWorld),I.position.copy(Ue),Ne.setFromMatrixPosition(A.target.matrixWorld),I.lookAt(Ne),I.updateMatrixWorld(),ri.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ri),g.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),g.multiply(ri)}getViewport(A){return this._viewports[A]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(A){return this.camera=A.camera.clone(),this.bias=A.bias,this.radius=A.radius,this.mapSize.copy(A.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const A={};return this.bias!==0&&(A.bias=this.bias),this.normalBias!==0&&(A.normalBias=this.normalBias),this.radius!==1&&(A.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(A.mapSize=this.mapSize.toArray()),A.camera=this.camera.toJSON(!1).object,delete A.camera.matrix,A}}class nG extends ao{constructor(){super(new xI(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(A){const I=this.camera,g=lB*2*A.angle*this.focus,C=this.mapSize.width/this.mapSize.height,B=A.distance||I.far;(g!==I.fov||C!==I.aspect||B!==I.far)&&(I.fov=g,I.aspect=C,I.far=B,I.updateProjectionMatrix()),super.updateMatrices(A)}copy(A){return super.copy(A),this.focus=A.focus,this}}class Ja extends yE{constructor(A,I,g=0,C=Math.PI/3,B=0,E=2){super(A,I),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(BI.DEFAULT_UP),this.updateMatrix(),this.target=new BI,this.distance=g,this.angle=C,this.penumbra=B,this.decay=E,this.map=null,this.shadow=new nG}get power(){return this.intensity*Math.PI}set power(A){this.intensity=A/Math.PI}dispose(){this.shadow.dispose()}copy(A,I){return super.copy(A,I),this.distance=A.distance,this.angle=A.angle,this.penumbra=A.penumbra,this.decay=A.decay,this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}const Ke=new GA,xB=new F,ci=new F;class hG extends ao{constructor(){super(new xI(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xA(4,2),this._viewportCount=6,this._viewports=[new II(2,1,1,1),new II(0,1,1,1),new II(3,1,1,1),new II(1,1,1,1),new II(3,0,1,1),new II(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(A,I=0){const g=this.camera,C=this.matrix,B=A.distance||g.far;B!==g.far&&(g.far=B,g.updateProjectionMatrix()),xB.setFromMatrixPosition(A.matrixWorld),g.position.copy(xB),ci.copy(g.position),ci.add(this._cubeDirections[I]),g.up.copy(this._cubeUps[I]),g.lookAt(ci),g.updateMatrixWorld(),C.makeTranslation(-xB.x,-xB.y,-xB.z),Ke.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ke)}}class CE extends yE{constructor(A,I,g=0,C=2){super(A,I),this.isPointLight=!0,this.type="PointLight",this.distance=g,this.decay=C,this.shadow=new hG}get power(){return this.intensity*4*Math.PI}set power(A){this.intensity=A/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(A,I){return super.copy(A,I),this.distance=A.distance,this.decay=A.decay,this.shadow=A.shadow.clone(),this}}class rG extends ao{constructor(){super(new GE(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fa extends yE{constructor(A,I){super(A,I),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(BI.DEFAULT_UP),this.updateMatrix(),this.target=new BI,this.shadow=new rG}dispose(){this.shadow.dispose()}copy(A){return super.copy(A),this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}class Ra extends yE{constructor(A,I){super(A,I),this.isAmbientLight=!0,this.type="AmbientLight"}}class BE{static decodeText(A){if(typeof TextDecoder<"u")return new TextDecoder().decode(A);let I="";for(let g=0,C=A.length;g<C;g++)I+=String.fromCharCode(A[g]);try{return decodeURIComponent(escape(I))}catch{return I}}static extractUrlBase(A){const I=A.lastIndexOf("/");return I===-1?"./":A.slice(0,I+1)}static resolveURL(A,I){return typeof A!="string"||A===""?"":(/^https?:\/\//i.test(I)&&/^\//.test(A)&&(I=I.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(A)||/^data:.*,.*$/i.test(A)||/^blob:.*$/i.test(A)?A:I+A)}}class cG extends OC{constructor(A){super(A),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(A){return this.options=A,this}load(A,I,g,C){A===void 0&&(A=""),this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const B=this,E=NB.get(A);if(E!==void 0)return B.manager.itemStart(A),setTimeout(function(){I&&I(E),B.manager.itemEnd(A)},0),E;const i={};i.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",i.headers=this.requestHeader,fetch(A,i).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,Object.assign(B.options,{colorSpaceConversion:"none"}))}).then(function(o){NB.add(A,o),I&&I(o),B.manager.itemEnd(A)}).catch(function(o){C&&C(o),B.manager.itemError(A),B.manager.itemEnd(A)}),B.manager.itemStart(A)}}class wG{constructor(A=!0){this.autoStart=A,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Je(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let A=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const I=Je();A=(I-this.oldTime)/1e3,this.oldTime=I,this.elapsedTime+=A}return A}}function Je(){return(typeof performance>"u"?Date:performance).now()}const so="\\[\\]\\.:\\/",GG=new RegExp("["+so+"]","g"),Do="[^"+so+"]",SG="[^"+so.replace("\\.","")+"]",kG=/((?:WC+[\/:])*)/.source.replace("WC",Do),lG=/(WCOD+)?/.source.replace("WCOD",SG),yG=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Do),MG=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Do),UG=new RegExp("^"+kG+lG+yG+MG+"$"),NG=["material","materials","bones","map"];class KG{constructor(A,I,g){const C=g||zA.parseTrackName(I);this._targetGroup=A,this._bindings=A.subscribe_(I,C)}getValue(A,I){this.bind();const g=this._targetGroup.nCachedObjects_,C=this._bindings[g];C!==void 0&&C.getValue(A,I)}setValue(A,I){const g=this._bindings;for(let C=this._targetGroup.nCachedObjects_,B=g.length;C!==B;++C)g[C].setValue(A,I)}bind(){const A=this._bindings;for(let I=this._targetGroup.nCachedObjects_,g=A.length;I!==g;++I)A[I].bind()}unbind(){const A=this._bindings;for(let I=this._targetGroup.nCachedObjects_,g=A.length;I!==g;++I)A[I].unbind()}}class zA{constructor(A,I,g){this.path=I,this.parsedPath=g||zA.parseTrackName(I),this.node=zA.findNode(A,this.parsedPath.nodeName),this.rootNode=A,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(A,I,g){return A&&A.isAnimationObjectGroup?new zA.Composite(A,I,g):new zA(A,I,g)}static sanitizeNodeName(A){return A.replace(/\s/g,"_").replace(GG,"")}static parseTrackName(A){const I=UG.exec(A);if(I===null)throw new Error("PropertyBinding: Cannot parse trackName: "+A);const g={nodeName:I[2],objectName:I[3],objectIndex:I[4],propertyName:I[5],propertyIndex:I[6]},C=g.nodeName&&g.nodeName.lastIndexOf(".");if(C!==void 0&&C!==-1){const B=g.nodeName.substring(C+1);NG.indexOf(B)!==-1&&(g.nodeName=g.nodeName.substring(0,C),g.objectName=B)}if(g.propertyName===null||g.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+A);return g}static findNode(A,I){if(I===void 0||I===""||I==="."||I===-1||I===A.name||I===A.uuid)return A;if(A.skeleton){const g=A.skeleton.getBoneByName(I);if(g!==void 0)return g}if(A.children){const g=function(B){for(let E=0;E<B.length;E++){const i=B[E];if(i.name===I||i.uuid===I)return i;const o=g(i.children);if(o)return o}return null},C=g(A.children);if(C)return C}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(A,I){A[I]=this.targetObject[this.propertyName]}_getValue_array(A,I){const g=this.resolvedProperty;for(let C=0,B=g.length;C!==B;++C)A[I++]=g[C]}_getValue_arrayElement(A,I){A[I]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(A,I){this.resolvedProperty.toArray(A,I)}_setValue_direct(A,I){this.targetObject[this.propertyName]=A[I]}_setValue_direct_setNeedsUpdate(A,I){this.targetObject[this.propertyName]=A[I],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(A,I){this.targetObject[this.propertyName]=A[I],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(A,I){const g=this.resolvedProperty;for(let C=0,B=g.length;C!==B;++C)g[C]=A[I++]}_setValue_array_setNeedsUpdate(A,I){const g=this.resolvedProperty;for(let C=0,B=g.length;C!==B;++C)g[C]=A[I++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(A,I){const g=this.resolvedProperty;for(let C=0,B=g.length;C!==B;++C)g[C]=A[I++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(A,I){this.resolvedProperty[this.propertyIndex]=A[I]}_setValue_arrayElement_setNeedsUpdate(A,I){this.resolvedProperty[this.propertyIndex]=A[I],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(A,I){this.resolvedProperty[this.propertyIndex]=A[I],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(A,I){this.resolvedProperty.fromArray(A,I)}_setValue_fromArray_setNeedsUpdate(A,I){this.resolvedProperty.fromArray(A,I),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(A,I){this.resolvedProperty.fromArray(A,I),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(A,I){this.bind(),this.getValue(A,I)}_setValue_unbound(A,I){this.bind(),this.setValue(A,I)}bind(){let A=this.node;const I=this.parsedPath,g=I.objectName,C=I.propertyName;let B=I.propertyIndex;if(A||(A=zA.findNode(this.rootNode,I.nodeName),this.node=A),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!A){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(g){let t=I.objectIndex;switch(g){case"materials":if(!A.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}A=A.material.materials;break;case"bones":if(!A.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}A=A.skeleton.bones;for(let e=0;e<A.length;e++)if(A[e].name===t){t=e;break}break;case"map":if("map"in A){A=A.map;break}if(!A.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}A=A.material.map;break;default:if(A[g]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}A=A[g]}if(t!==void 0){if(A[t]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,A);return}A=A[t]}}const E=A[C];if(E===void 0){const t=I.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+t+"."+C+" but it wasn't found.",A);return}let i=this.Versioning.None;this.targetObject=A,A.needsUpdate!==void 0?i=this.Versioning.NeedsUpdate:A.matrixWorldNeedsUpdate!==void 0&&(i=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(B!==void 0){if(C==="morphTargetInfluences"){if(!A.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!A.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}A.morphTargetDictionary[B]!==void 0&&(B=A.morphTargetDictionary[B])}o=this.BindingType.ArrayElement,this.resolvedProperty=E,this.propertyIndex=B}else E.fromArray!==void 0&&E.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=E):Array.isArray(E)?(o=this.BindingType.EntireArray,this.resolvedProperty=E):this.propertyName=C;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][i]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}zA.Composite=KG;zA.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zA.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zA.prototype.GetterByBindingType=[zA.prototype._getValue_direct,zA.prototype._getValue_array,zA.prototype._getValue_arrayElement,zA.prototype._getValue_toArray];zA.prototype.SetterByBindingTypeAndVersioning=[[zA.prototype._setValue_direct,zA.prototype._setValue_direct_setNeedsUpdate,zA.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zA.prototype._setValue_array,zA.prototype._setValue_array_setNeedsUpdate,zA.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zA.prototype._setValue_arrayElement,zA.prototype._setValue_arrayElement_setNeedsUpdate,zA.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zA.prototype._setValue_fromArray,zA.prototype._setValue_fromArray_setNeedsUpdate,zA.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$i}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$i);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Fe=function(Q){return URL.createObjectURL(new Blob([Q],{type:"text/javascript"}))};try{URL.revokeObjectURL(Fe(""))}catch{Fe=function(A){return"data:application/javascript;charset=UTF-8,"+encodeURI(A)}}var eg=Uint8Array,tC=Uint16Array,Hi=Uint32Array,qa=new eg([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),pa=new eg([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),JG=new eg([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),da=function(Q,A){for(var I=new tC(31),g=0;g<31;++g)I[g]=A+=1<<Q[g-1];for(var C=new Hi(I[30]),g=1;g<30;++g)for(var B=I[g];B<I[g+1];++B)C[B]=B-I[g]<<5|g;return[I,C]},La=da(qa,2),Ya=La[0],FG=La[1];Ya[28]=258,FG[258]=28;var RG=da(pa,0),qG=RG[0],mi=new tC(32768);for(var sI=0;sI<32768;++sI){var BC=(sI&43690)>>>1|(sI&21845)<<1;BC=(BC&52428)>>>2|(BC&13107)<<2,BC=(BC&61680)>>>4|(BC&3855)<<4,mi[sI]=((BC&65280)>>>8|(BC&255)<<8)>>>1}var WB=function(Q,A,I){for(var g=Q.length,C=0,B=new tC(A);C<g;++C)++B[Q[C]-1];var E=new tC(A);for(C=0;C<A;++C)E[C]=E[C-1]+B[C-1]<<1;var i;if(I){i=new tC(1<<A);var o=15-A;for(C=0;C<g;++C)if(Q[C])for(var t=C<<4|Q[C],e=A-Q[C],a=E[Q[C]-1]++<<e,s=a|(1<<e)-1;a<=s;++a)i[mi[a]>>>o]=t}else for(i=new tC(g),C=0;C<g;++C)Q[C]&&(i[C]=mi[E[Q[C]-1]++]>>>15-Q[C]);return i},eQ=new eg(288);for(var sI=0;sI<144;++sI)eQ[sI]=8;for(var sI=144;sI<256;++sI)eQ[sI]=9;for(var sI=256;sI<280;++sI)eQ[sI]=7;for(var sI=280;sI<288;++sI)eQ[sI]=8;var fa=new eg(32);for(var sI=0;sI<32;++sI)fa[sI]=5;var pG=WB(eQ,9,1),dG=WB(fa,5,1),wi=function(Q){for(var A=Q[0],I=1;I<Q.length;++I)Q[I]>A&&(A=Q[I]);return A},Gg=function(Q,A,I){var g=A/8|0;return(Q[g]|Q[g+1]<<8)>>(A&7)&I},Gi=function(Q,A){var I=A/8|0;return(Q[I]|Q[I+1]<<8|Q[I+2]<<16)>>(A&7)},LG=function(Q){return(Q/8|0)+(Q&7&&1)},YG=function(Q,A,I){(A==null||A<0)&&(A=0),(I==null||I>Q.length)&&(I=Q.length);var g=new(Q instanceof tC?tC:Q instanceof Hi?Hi:eg)(I-A);return g.set(Q.subarray(A,I)),g},fG=function(Q,A,I){var g=Q.length;if(!g||I&&!I.l&&g<5)return A||new eg(0);var C=!A||I,B=!I||I.i;I||(I={}),A||(A=new eg(g*3));var E=function(sA){var kA=A.length;if(sA>kA){var YA=new eg(Math.max(kA*2,sA));YA.set(A),A=YA}},i=I.f||0,o=I.p||0,t=I.b||0,e=I.l,a=I.d,s=I.m,D=I.n,c=g*8;do{if(!e){I.f=i=Gg(Q,o,1);var w=Gg(Q,o+1,3);if(o+=3,w)if(w==1)e=pG,a=dG,s=9,D=5;else if(w==2){var G=Gg(Q,o,31)+257,M=Gg(Q,o+10,15)+4,U=G+Gg(Q,o+5,31)+1;o+=14;for(var J=new eg(U),q=new eg(19),p=0;p<M;++p)q[JG[p]]=Gg(Q,o+p*3,7);o+=M*3;for(var S=wi(q),N=(1<<S)-1,H=WB(q,S,1),p=0;p<U;){var _=H[Gg(Q,o,N)];o+=_&15;var h=_>>>4;if(h<16)J[p++]=h;else{var f=0,x=0;for(h==16?(x=3+Gg(Q,o,3),o+=2,f=J[p-1]):h==17?(x=3+Gg(Q,o,7),o+=3):h==18&&(x=11+Gg(Q,o,127),o+=7);x--;)J[p++]=f}}var O=J.subarray(0,G),z=J.subarray(G);s=wi(O),D=wi(z),e=WB(O,s,1),a=WB(z,D,1)}else throw"invalid block type";else{var h=LG(o)+4,n=Q[h-4]|Q[h-3]<<8,l=h+n;if(l>g){if(B)throw"unexpected EOF";break}C&&E(t+n),A.set(Q.subarray(h,l),t),I.b=t+=n,I.p=o=l*8;continue}if(o>c){if(B)throw"unexpected EOF";break}}C&&E(t+131072);for(var j=(1<<s)-1,X=(1<<D)-1,$=o;;$=o){var f=e[Gi(Q,o)&j],AA=f>>>4;if(o+=f&15,o>c){if(B)throw"unexpected EOF";break}if(!f)throw"invalid length/literal";if(AA<256)A[t++]=AA;else if(AA==256){$=o,e=null;break}else{var DA=AA-254;if(AA>264){var p=AA-257,b=qa[p];DA=Gg(Q,o,(1<<b)-1)+Ya[p],o+=b}var IA=a[Gi(Q,o)&X],gA=IA>>>4;if(!IA)throw"invalid distance";o+=IA&15;var z=qG[gA];if(gA>3){var b=pa[gA];z+=Gi(Q,o)&(1<<b)-1,o+=b}if(o>c){if(B)throw"unexpected EOF";break}C&&E(t+131072);for(var aA=t+DA;t<aA;t+=4)A[t]=A[t-z],A[t+1]=A[t+1-z],A[t+2]=A[t+2-z],A[t+3]=A[t+3-z];t=aA}}I.l=e,I.p=$,I.b=t,e&&(i=1,I.m=s,I.d=a,I.n=D)}while(!i);return t==A.length?A:YG(A,0,t)},uG=new eg(0),HG=function(Q){if((Q[0]&15)!=8||Q[0]>>>4>7||(Q[0]<<8|Q[1])%31)throw"invalid zlib data";if(Q[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function mG(Q,A){return fG((HG(Q),Q.subarray(2,-4)),A)}var TG=typeof TextDecoder<"u"&&new TextDecoder,xG=0;try{TG.decode(uG,{stream:!0}),xG=1}catch{}function ua(Q,A,I){const g=I.length-Q-1;if(A>=I[g])return g-1;if(A<=I[Q])return Q;let C=Q,B=g,E=Math.floor((C+B)/2);for(;A<I[E]||A>=I[E+1];)A<I[E]?B=E:C=E,E=Math.floor((C+B)/2);return E}function OG(Q,A,I,g){const C=[],B=[],E=[];C[0]=1;for(let i=1;i<=I;++i){B[i]=A-g[Q+1-i],E[i]=g[Q+i]-A;let o=0;for(let t=0;t<i;++t){const e=E[t+1],a=B[i-t],s=C[t]/(e+a);C[t]=o+e*s,o=a*s}C[i]=o}return C}function bG(Q,A,I,g){const C=ua(Q,g,A),B=OG(C,g,Q,A),E=new II(0,0,0,0);for(let i=0;i<=Q;++i){const o=I[C-Q+i],t=B[i],e=o.w*t;E.x+=o.x*e,E.y+=o.y*e,E.z+=o.z*e,E.w+=o.w*t}return E}function vG(Q,A,I,g,C){const B=[];for(let a=0;a<=I;++a)B[a]=0;const E=[];for(let a=0;a<=g;++a)E[a]=B.slice(0);const i=[];for(let a=0;a<=I;++a)i[a]=B.slice(0);i[0][0]=1;const o=B.slice(0),t=B.slice(0);for(let a=1;a<=I;++a){o[a]=A-C[Q+1-a],t[a]=C[Q+a]-A;let s=0;for(let D=0;D<a;++D){const c=t[D+1],w=o[a-D];i[a][D]=c+w;const h=i[D][a-1]/i[a][D];i[D][a]=s+c*h,s=w*h}i[a][a]=s}for(let a=0;a<=I;++a)E[0][a]=i[a][I];for(let a=0;a<=I;++a){let s=0,D=1;const c=[];for(let w=0;w<=I;++w)c[w]=B.slice(0);c[0][0]=1;for(let w=1;w<=g;++w){let h=0;const n=a-w,l=I-w;a>=w&&(c[D][0]=c[s][0]/i[l+1][n],h=c[D][0]*i[n][l]);const G=n>=-1?1:-n,M=a-1<=l?w-1:I-a;for(let J=G;J<=M;++J)c[D][J]=(c[s][J]-c[s][J-1])/i[l+1][n+J],h+=c[D][J]*i[n+J][l];a<=l&&(c[D][w]=-c[s][w-1]/i[l+1][a],h+=c[D][w]*i[a][l]),E[w][a]=h;const U=s;s=D,D=U}}let e=I;for(let a=1;a<=g;++a){for(let s=0;s<=I;++s)E[a][s]*=e;e*=I-a}return E}function ZG(Q,A,I,g,C){const B=C<Q?C:Q,E=[],i=ua(Q,g,A),o=vG(i,g,Q,B,A),t=[];for(let e=0;e<I.length;++e){const a=I[e].clone(),s=a.w;a.x*=s,a.y*=s,a.z*=s,t[e]=a}for(let e=0;e<=B;++e){const a=t[i-Q].clone().multiplyScalar(o[e][0]);for(let s=1;s<=Q;++s)a.add(t[i-Q+s].clone().multiplyScalar(o[e][s]));E[e]=a}for(let e=B+1;e<=C+1;++e)E[e]=new II(0,0,0);return E}function PG(Q,A){let I=1;for(let C=2;C<=Q;++C)I*=C;let g=1;for(let C=2;C<=A;++C)g*=C;for(let C=2;C<=Q-A;++C)g*=C;return I/g}function WG(Q){const A=Q.length,I=[],g=[];for(let B=0;B<A;++B){const E=Q[B];I[B]=new F(E.x,E.y,E.z),g[B]=E.w}const C=[];for(let B=0;B<A;++B){const E=I[B].clone();for(let i=1;i<=B;++i)E.sub(C[B-i].clone().multiplyScalar(PG(B,i)*g[i]));C[B]=E.divideScalar(g[0])}return C}function jG(Q,A,I,g,C){const B=ZG(Q,A,I,g,C);return WG(B)}class VG extends BG{constructor(A,I,g,C,B){super(),this.degree=A,this.knots=I,this.controlPoints=[],this.startKnot=C||0,this.endKnot=B||this.knots.length-1;for(let E=0;E<g.length;++E){const i=g[E];this.controlPoints[E]=new II(i.x,i.y,i.z,i.w)}}getPoint(A,I=new F){const g=I,C=this.knots[this.startKnot]+A*(this.knots[this.endKnot]-this.knots[this.startKnot]),B=bG(this.degree,this.knots,this.controlPoints,C);return B.w!==1&&B.divideScalar(B.w),g.set(B.x,B.y,B.z)}getTangent(A,I=new F){const g=I,C=this.knots[0]+A*(this.knots[this.knots.length-1]-this.knots[0]),B=jG(this.degree,this.knots,this.controlPoints,C,1);return g.copy(B[1]).normalize(),g}}let PA,GI,VI;class Ha extends OC{constructor(A){super(A)}load(A,I,g,C){const B=this,E=B.path===""?BE.extractUrlBase(A):B.path,i=new eo(this.manager);i.setPath(B.path),i.setResponseType("arraybuffer"),i.setRequestHeader(B.requestHeader),i.setWithCredentials(B.withCredentials),i.load(A,function(o){try{I(B.parse(o,E))}catch(t){C?C(t):console.error(t),B.manager.itemError(A)}},g,C)}parse(A,I){if(IS(A))PA=new AS().parse(A);else{const C=Oa(A);if(!gS(C))throw new Error("THREE.FBXLoader: Unknown format.");if(qe(C)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+qe(C));PA=new $G().parse(C)}const g=new rB(this.manager).setPath(this.resourcePath||I).setCrossOrigin(this.crossOrigin);return new _G(g,this.manager).parse(PA)}}class _G{constructor(A,I){this.textureLoader=A,this.manager=I}parse(){GI=this.parseConnections();const A=this.parseImages(),I=this.parseTextures(A),g=this.parseMaterials(I),C=this.parseDeformers(),B=new XG().parse(C);return this.parseScene(C,B,g),VI}parseConnections(){const A=new Map;return"Connections"in PA&&PA.Connections.connections.forEach(function(g){const C=g[0],B=g[1],E=g[2];A.has(C)||A.set(C,{parents:[],children:[]});const i={ID:B,relationship:E};A.get(C).parents.push(i),A.has(B)||A.set(B,{parents:[],children:[]});const o={ID:C,relationship:E};A.get(B).children.push(o)}),A}parseImages(){const A={},I={};if("Video"in PA.Objects){const g=PA.Objects.Video;for(const C in g){const B=g[C],E=parseInt(C);if(A[E]=B.RelativeFilename||B.Filename,"Content"in B){const i=B.Content instanceof ArrayBuffer&&B.Content.byteLength>0,o=typeof B.Content=="string"&&B.Content!=="";if(i||o){const t=this.parseImage(g[C]);I[B.RelativeFilename||B.Filename]=t}}}}for(const g in A){const C=A[g];I[C]!==void 0?A[g]=I[C]:A[g]=A[g].split("\\").pop()}return A}parseImage(A){const I=A.Content,g=A.RelativeFilename||A.Filename,C=g.slice(g.lastIndexOf(".")+1).toLowerCase();let B;switch(C){case"bmp":B="image/bmp";break;case"jpg":case"jpeg":B="image/jpeg";break;case"png":B="image/png";break;case"tif":B="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",g),B="image/tga";break;default:console.warn('FBXLoader: Image type "'+C+'" is not supported.');return}if(typeof I=="string")return"data:"+B+";base64,"+I;{const E=new Uint8Array(I);return window.URL.createObjectURL(new Blob([E],{type:B}))}}parseTextures(A){const I=new Map;if("Texture"in PA.Objects){const g=PA.Objects.Texture;for(const C in g){const B=this.parseTexture(g[C],A);I.set(parseInt(C),B)}}return I}parseTexture(A,I){const g=this.loadTexture(A,I);g.ID=A.id,g.name=A.attrName;const C=A.WrapModeU,B=A.WrapModeV,E=C!==void 0?C.value:0,i=B!==void 0?B.value:0;if(g.wrapS=E===0?DC:XI,g.wrapT=i===0?DC:XI,"Scaling"in A){const o=A.Scaling.value;g.repeat.x=o[0],g.repeat.y=o[1]}if("Translation"in A){const o=A.Translation.value;g.offset.x=o[0],g.offset.y=o[1]}return g}loadTexture(A,I){let g;const C=this.textureLoader.path,B=GI.get(A.id).children;B!==void 0&&B.length>0&&I[B[0].ID]!==void 0&&(g=I[B[0].ID],(g.indexOf("blob:")===0||g.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let E;const i=A.FileName.slice(-3).toLowerCase();if(i==="tga"){const o=this.manager.getHandler(".tga");o===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",A.RelativeFilename),E=new KI):(o.setPath(this.textureLoader.path),E=o.load(g))}else i==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",A.RelativeFilename),E=new KI):E=this.textureLoader.load(g);return this.textureLoader.setPath(C),E}parseMaterials(A){const I=new Map;if("Material"in PA.Objects){const g=PA.Objects.Material;for(const C in g){const B=this.parseMaterial(g[C],A);B!==null&&I.set(parseInt(C),B)}}return I}parseMaterial(A,I){const g=A.id,C=A.attrName;let B=A.ShadingModel;if(typeof B=="object"&&(B=B.value),!GI.has(g))return null;const E=this.parseParameters(A,I,g);let i;switch(B.toLowerCase()){case"phong":i=new hB;break;case"lambert":i=new to;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',B),i=new hB;break}return i.setValues(E),i.name=C,i}parseParameters(A,I,g){const C={};A.BumpFactor&&(C.bumpScale=A.BumpFactor.value),A.Diffuse?C.color=new hA().fromArray(A.Diffuse.value).convertSRGBToLinear():A.DiffuseColor&&(A.DiffuseColor.type==="Color"||A.DiffuseColor.type==="ColorRGB")&&(C.color=new hA().fromArray(A.DiffuseColor.value).convertSRGBToLinear()),A.DisplacementFactor&&(C.displacementScale=A.DisplacementFactor.value),A.Emissive?C.emissive=new hA().fromArray(A.Emissive.value).convertSRGBToLinear():A.EmissiveColor&&(A.EmissiveColor.type==="Color"||A.EmissiveColor.type==="ColorRGB")&&(C.emissive=new hA().fromArray(A.EmissiveColor.value).convertSRGBToLinear()),A.EmissiveFactor&&(C.emissiveIntensity=parseFloat(A.EmissiveFactor.value)),A.Opacity&&(C.opacity=parseFloat(A.Opacity.value)),C.opacity<1&&(C.transparent=!0),A.ReflectionFactor&&(C.reflectivity=A.ReflectionFactor.value),A.Shininess&&(C.shininess=A.Shininess.value),A.Specular?C.specular=new hA().fromArray(A.Specular.value).convertSRGBToLinear():A.SpecularColor&&A.SpecularColor.type==="Color"&&(C.specular=new hA().fromArray(A.SpecularColor.value).convertSRGBToLinear());const B=this;return GI.get(g).children.forEach(function(E){const i=E.relationship;switch(i){case"Bump":C.bumpMap=B.getTexture(I,E.ID);break;case"Maya|TEX_ao_map":C.aoMap=B.getTexture(I,E.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":C.map=B.getTexture(I,E.ID),C.map!==void 0&&(C.map.colorSpace=NA);break;case"DisplacementColor":C.displacementMap=B.getTexture(I,E.ID);break;case"EmissiveColor":C.emissiveMap=B.getTexture(I,E.ID),C.emissiveMap!==void 0&&(C.emissiveMap.colorSpace=NA);break;case"NormalMap":case"Maya|TEX_normal_map":C.normalMap=B.getTexture(I,E.ID);break;case"ReflectionColor":C.envMap=B.getTexture(I,E.ID),C.envMap!==void 0&&(C.envMap.mapping=XQ,C.envMap.colorSpace=NA);break;case"SpecularColor":C.specularMap=B.getTexture(I,E.ID),C.specularMap!==void 0&&(C.specularMap.colorSpace=NA);break;case"TransparentColor":case"TransparencyFactor":C.alphaMap=B.getTexture(I,E.ID),C.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",i);break}}),C}getTexture(A,I){return"LayeredTexture"in PA.Objects&&I in PA.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),I=GI.get(I).children[0].ID),A.get(I)}parseDeformers(){const A={},I={};if("Deformer"in PA.Objects){const g=PA.Objects.Deformer;for(const C in g){const B=g[C],E=GI.get(parseInt(C));if(B.attrType==="Skin"){const i=this.parseSkeleton(E,g);i.ID=C,E.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),i.geometryID=E.parents[0].ID,A[C]=i}else if(B.attrType==="BlendShape"){const i={id:C};i.rawTargets=this.parseMorphTargets(E,g),i.id=C,E.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),I[C]=i}}}return{skeletons:A,morphTargets:I}}parseSkeleton(A,I){const g=[];return A.children.forEach(function(C){const B=I[C.ID];if(B.attrType!=="Cluster")return;const E={ID:C.ID,indices:[],weights:[],transformLink:new GA().fromArray(B.TransformLink.a)};"Indexes"in B&&(E.indices=B.Indexes.a,E.weights=B.Weights.a),g.push(E)}),{rawBones:g,bones:[]}}parseMorphTargets(A,I){const g=[];for(let C=0;C<A.children.length;C++){const B=A.children[C],E=I[B.ID],i={name:E.attrName,initialWeight:E.DeformPercent,id:E.id,fullWeights:E.FullWeights.a};if(E.attrType!=="BlendShapeChannel")return;i.geoID=GI.get(parseInt(B.ID)).children.filter(function(o){return o.relationship===void 0})[0].ID,g.push(i)}return g}parseScene(A,I,g){VI=new Rg;const C=this.parseModels(A.skeletons,I,g),B=PA.Objects.Model,E=this;C.forEach(function(o){const t=B[o.ID];E.setLookAtProperties(o,t),GI.get(o.ID).parents.forEach(function(a){const s=C.get(a.ID);s!==void 0&&s.add(o)}),o.parent===null&&VI.add(o)}),this.bindSkeleton(A.skeletons,I,C),this.createAmbientLight(),VI.traverse(function(o){if(o.userData.transformData){o.parent&&(o.userData.transformData.parentMatrix=o.parent.matrix,o.userData.transformData.parentMatrixWorld=o.parent.matrixWorld);const t=Ta(o.userData.transformData);o.applyMatrix4(t),o.updateWorldMatrix()}});const i=new zG().parse();VI.children.length===1&&VI.children[0].isGroup&&(VI.children[0].animations=i,VI=VI.children[0]),VI.animations=i}parseModels(A,I,g){const C=new Map,B=PA.Objects.Model;for(const E in B){const i=parseInt(E),o=B[E],t=GI.get(i);let e=this.buildSkeleton(t,A,i,o.attrName);if(!e){switch(o.attrType){case"Camera":e=this.createCamera(t);break;case"Light":e=this.createLight(t);break;case"Mesh":e=this.createMesh(t,I,g);break;case"NurbsCurve":e=this.createCurve(t,I);break;case"LimbNode":case"Root":e=new IE;break;case"Null":default:e=new Rg;break}e.name=o.attrName?zA.sanitizeNodeName(o.attrName):"",e.ID=i}this.getTransformData(e,o),C.set(i,e)}return C}buildSkeleton(A,I,g,C){let B=null;return A.parents.forEach(function(E){for(const i in I){const o=I[i];o.rawBones.forEach(function(t,e){if(t.ID===E.ID){const a=B;B=new IE,B.matrixWorld.copy(t.transformLink),B.name=C?zA.sanitizeNodeName(C):"",B.ID=g,o.bones[e]=B,a!==null&&B.add(a)}})}}),B}createCamera(A){let I,g;if(A.children.forEach(function(C){const B=PA.Objects.NodeAttribute[C.ID];B!==void 0&&(g=B)}),g===void 0)I=new BI;else{let C=0;g.CameraProjectionType!==void 0&&g.CameraProjectionType.value===1&&(C=1);let B=1;g.NearPlane!==void 0&&(B=g.NearPlane.value/1e3);let E=1e3;g.FarPlane!==void 0&&(E=g.FarPlane.value/1e3);let i=window.innerWidth,o=window.innerHeight;g.AspectWidth!==void 0&&g.AspectHeight!==void 0&&(i=g.AspectWidth.value,o=g.AspectHeight.value);const t=i/o;let e=45;g.FieldOfView!==void 0&&(e=g.FieldOfView.value);const a=g.FocalLength?g.FocalLength.value:null;switch(C){case 0:I=new xI(e,t,B,E),a!==null&&I.setFocalLength(a);break;case 1:I=new GE(-i/2,i/2,o/2,-o/2,B,E);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+C+"."),I=new BI;break}}return I}createLight(A){let I,g;if(A.children.forEach(function(C){const B=PA.Objects.NodeAttribute[C.ID];B!==void 0&&(g=B)}),g===void 0)I=new BI;else{let C;g.LightType===void 0?C=0:C=g.LightType.value;let B=16777215;g.Color!==void 0&&(B=new hA().fromArray(g.Color.value).convertSRGBToLinear());let E=g.Intensity===void 0?1:g.Intensity.value/100;g.CastLightOnObject!==void 0&&g.CastLightOnObject.value===0&&(E=0);let i=0;g.FarAttenuationEnd!==void 0&&(g.EnableFarAttenuation!==void 0&&g.EnableFarAttenuation.value===0?i=0:i=g.FarAttenuationEnd.value);const o=1;switch(C){case 0:I=new CE(B,E,i,o);break;case 1:I=new Fa(B,E);break;case 2:let t=Math.PI/3;g.InnerAngle!==void 0&&(t=lg.degToRad(g.InnerAngle.value));let e=0;g.OuterAngle!==void 0&&(e=lg.degToRad(g.OuterAngle.value),e=Math.max(e,1)),I=new Ja(B,E,i,t,e,o);break;default:console.warn("THREE.FBXLoader: Unknown light type "+g.LightType.value+", defaulting to a PointLight."),I=new CE(B,E);break}g.CastShadows!==void 0&&g.CastShadows.value===1&&(I.castShadow=!0)}return I}createMesh(A,I,g){let C,B=null,E=null;const i=[];return A.children.forEach(function(o){I.has(o.ID)&&(B=I.get(o.ID)),g.has(o.ID)&&i.push(g.get(o.ID))}),i.length>1?E=i:i.length>0?E=i[0]:(E=new hB({color:13421772}),i.push(E)),"color"in B.attributes&&i.forEach(function(o){o.vertexColors=!0}),B.FBX_Deformer?(C=new ka(B,E),C.normalizeSkinWeights()):C=new tI(B,E),C}createCurve(A,I){const g=A.children.reduce(function(B,E){return I.has(E.ID)&&(B=I.get(E.ID)),B},null),C=new io({color:3342591,linewidth:1});return new lE(g,C)}getTransformData(A,I){const g={};"InheritType"in I&&(g.inheritType=parseInt(I.InheritType.value)),"RotationOrder"in I?g.eulerOrder=xa(I.RotationOrder.value):g.eulerOrder="ZYX","Lcl_Translation"in I&&(g.translation=I.Lcl_Translation.value),"PreRotation"in I&&(g.preRotation=I.PreRotation.value),"Lcl_Rotation"in I&&(g.rotation=I.Lcl_Rotation.value),"PostRotation"in I&&(g.postRotation=I.PostRotation.value),"Lcl_Scaling"in I&&(g.scale=I.Lcl_Scaling.value),"ScalingOffset"in I&&(g.scalingOffset=I.ScalingOffset.value),"ScalingPivot"in I&&(g.scalingPivot=I.ScalingPivot.value),"RotationOffset"in I&&(g.rotationOffset=I.RotationOffset.value),"RotationPivot"in I&&(g.rotationPivot=I.RotationPivot.value),A.userData.transformData=g}setLookAtProperties(A,I){"LookAtProperty"in I&&GI.get(A.ID).children.forEach(function(C){if(C.relationship==="LookAtProperty"){const B=PA.Objects.Model[C.ID];if("Lcl_Translation"in B){const E=B.Lcl_Translation.value;A.target!==void 0?(A.target.position.fromArray(E),VI.add(A.target)):A.lookAt(new F().fromArray(E))}}})}bindSkeleton(A,I,g){const C=this.parsePoseNodes();for(const B in A){const E=A[B];GI.get(parseInt(E.ID)).parents.forEach(function(o){if(I.has(o.ID)){const t=o.ID;GI.get(t).parents.forEach(function(a){g.has(a.ID)&&g.get(a.ID).bind(new kE(E.bones),C[a.ID])})}})}}parsePoseNodes(){const A={};if("Pose"in PA.Objects){const I=PA.Objects.Pose;for(const g in I)if(I[g].attrType==="BindPose"&&I[g].NbPoseNodes>0){const C=I[g].PoseNode;Array.isArray(C)?C.forEach(function(B){A[B.Node]=new GA().fromArray(B.Matrix.a)}):A[C.Node]=new GA().fromArray(C.Matrix.a)}}return A}createAmbientLight(){if("GlobalSettings"in PA&&"AmbientColor"in PA.GlobalSettings){const A=PA.GlobalSettings.AmbientColor.value,I=A[0],g=A[1],C=A[2];if(I!==0||g!==0||C!==0){const B=new hA(I,g,C).convertSRGBToLinear();VI.add(new Ra(B,1))}}}}class XG{constructor(){this.negativeMaterialIndices=!1}parse(A){const I=new Map;if("Geometry"in PA.Objects){const g=PA.Objects.Geometry;for(const C in g){const B=GI.get(parseInt(C)),E=this.parseGeometry(B,g[C],A);I.set(parseInt(C),E)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),I}parseGeometry(A,I,g){switch(I.attrType){case"Mesh":return this.parseMeshGeometry(A,I,g);case"NurbsCurve":return this.parseNurbsGeometry(I)}}parseMeshGeometry(A,I,g){const C=g.skeletons,B=[],E=A.parents.map(function(a){return PA.Objects.Model[a.ID]});if(E.length===0)return;const i=A.children.reduce(function(a,s){return C[s.ID]!==void 0&&(a=C[s.ID]),a},null);A.children.forEach(function(a){g.morphTargets[a.ID]!==void 0&&B.push(g.morphTargets[a.ID])});const o=E[0],t={};"RotationOrder"in o&&(t.eulerOrder=xa(o.RotationOrder.value)),"InheritType"in o&&(t.inheritType=parseInt(o.InheritType.value)),"GeometricTranslation"in o&&(t.translation=o.GeometricTranslation.value),"GeometricRotation"in o&&(t.rotation=o.GeometricRotation.value),"GeometricScaling"in o&&(t.scale=o.GeometricScaling.value);const e=Ta(t);return this.genGeometry(I,i,B,e)}genGeometry(A,I,g,C){const B=new jI;A.attrName&&(B.name=A.attrName);const E=this.parseGeoNode(A,I),i=this.genBuffers(E),o=new SI(i.vertex,3);if(o.applyMatrix4(C),B.setAttribute("position",o),i.colors.length>0&&B.setAttribute("color",new SI(i.colors,3)),I&&(B.setAttribute("skinIndex",new go(i.weightsIndices,4)),B.setAttribute("skinWeight",new SI(i.vertexWeights,4)),B.FBX_Deformer=I),i.normal.length>0){const t=new TA().getNormalMatrix(C),e=new SI(i.normal,3);e.applyNormalMatrix(t),B.setAttribute("normal",e)}if(i.uvs.forEach(function(t,e){const a=e===0?"uv":`uv${e}`;B.setAttribute(a,new SI(i.uvs[e],2))}),E.material&&E.material.mappingType!=="AllSame"){let t=i.materialIndex[0],e=0;if(i.materialIndex.forEach(function(a,s){a!==t&&(B.addGroup(e,s-e,t),t=a,e=s)}),B.groups.length>0){const a=B.groups[B.groups.length-1],s=a.start+a.count;s!==i.materialIndex.length&&B.addGroup(s,i.materialIndex.length-s,t)}B.groups.length===0&&B.addGroup(0,i.materialIndex.length,i.materialIndex[0])}return this.addMorphTargets(B,A,g,C),B}parseGeoNode(A,I){const g={};if(g.vertexPositions=A.Vertices!==void 0?A.Vertices.a:[],g.vertexIndices=A.PolygonVertexIndex!==void 0?A.PolygonVertexIndex.a:[],A.LayerElementColor&&(g.color=this.parseVertexColors(A.LayerElementColor[0])),A.LayerElementMaterial&&(g.material=this.parseMaterialIndices(A.LayerElementMaterial[0])),A.LayerElementNormal&&(g.normal=this.parseNormals(A.LayerElementNormal[0])),A.LayerElementUV){g.uv=[];let C=0;for(;A.LayerElementUV[C];)A.LayerElementUV[C].UV&&g.uv.push(this.parseUVs(A.LayerElementUV[C])),C++}return g.weightTable={},I!==null&&(g.skeleton=I,I.rawBones.forEach(function(C,B){C.indices.forEach(function(E,i){g.weightTable[E]===void 0&&(g.weightTable[E]=[]),g.weightTable[E].push({id:B,weight:C.weights[i]})})})),g}genBuffers(A){const I={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let g=0,C=0,B=!1,E=[],i=[],o=[],t=[],e=[],a=[];const s=this;return A.vertexIndices.forEach(function(D,c){let w,h=!1;D<0&&(D=D^-1,h=!0);let n=[],l=[];if(E.push(D*3,D*3+1,D*3+2),A.color){const G=xQ(c,g,D,A.color);o.push(G[0],G[1],G[2])}if(A.skeleton){if(A.weightTable[D]!==void 0&&A.weightTable[D].forEach(function(G){l.push(G.weight),n.push(G.id)}),l.length>4){B||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),B=!0);const G=[0,0,0,0],M=[0,0,0,0];l.forEach(function(U,J){let q=U,p=n[J];M.forEach(function(S,N,H){if(q>S){H[N]=q,q=S;const _=G[N];G[N]=p,p=_}})}),n=G,l=M}for(;l.length<4;)l.push(0),n.push(0);for(let G=0;G<4;++G)e.push(l[G]),a.push(n[G])}if(A.normal){const G=xQ(c,g,D,A.normal);i.push(G[0],G[1],G[2])}A.material&&A.material.mappingType!=="AllSame"&&(w=xQ(c,g,D,A.material)[0],w<0&&(s.negativeMaterialIndices=!0,w=0)),A.uv&&A.uv.forEach(function(G,M){const U=xQ(c,g,D,G);t[M]===void 0&&(t[M]=[]),t[M].push(U[0]),t[M].push(U[1])}),C++,h&&(C>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),s.genFace(I,A,E,w,i,o,t,e,a,C),g++,C=0,E=[],i=[],o=[],t=[],e=[],a=[])}),I}genFace(A,I,g,C,B,E,i,o,t,e){for(let a=2;a<e;a++)A.vertex.push(I.vertexPositions[g[0]]),A.vertex.push(I.vertexPositions[g[1]]),A.vertex.push(I.vertexPositions[g[2]]),A.vertex.push(I.vertexPositions[g[(a-1)*3]]),A.vertex.push(I.vertexPositions[g[(a-1)*3+1]]),A.vertex.push(I.vertexPositions[g[(a-1)*3+2]]),A.vertex.push(I.vertexPositions[g[a*3]]),A.vertex.push(I.vertexPositions[g[a*3+1]]),A.vertex.push(I.vertexPositions[g[a*3+2]]),I.skeleton&&(A.vertexWeights.push(o[0]),A.vertexWeights.push(o[1]),A.vertexWeights.push(o[2]),A.vertexWeights.push(o[3]),A.vertexWeights.push(o[(a-1)*4]),A.vertexWeights.push(o[(a-1)*4+1]),A.vertexWeights.push(o[(a-1)*4+2]),A.vertexWeights.push(o[(a-1)*4+3]),A.vertexWeights.push(o[a*4]),A.vertexWeights.push(o[a*4+1]),A.vertexWeights.push(o[a*4+2]),A.vertexWeights.push(o[a*4+3]),A.weightsIndices.push(t[0]),A.weightsIndices.push(t[1]),A.weightsIndices.push(t[2]),A.weightsIndices.push(t[3]),A.weightsIndices.push(t[(a-1)*4]),A.weightsIndices.push(t[(a-1)*4+1]),A.weightsIndices.push(t[(a-1)*4+2]),A.weightsIndices.push(t[(a-1)*4+3]),A.weightsIndices.push(t[a*4]),A.weightsIndices.push(t[a*4+1]),A.weightsIndices.push(t[a*4+2]),A.weightsIndices.push(t[a*4+3])),I.color&&(A.colors.push(E[0]),A.colors.push(E[1]),A.colors.push(E[2]),A.colors.push(E[(a-1)*3]),A.colors.push(E[(a-1)*3+1]),A.colors.push(E[(a-1)*3+2]),A.colors.push(E[a*3]),A.colors.push(E[a*3+1]),A.colors.push(E[a*3+2])),I.material&&I.material.mappingType!=="AllSame"&&(A.materialIndex.push(C),A.materialIndex.push(C),A.materialIndex.push(C)),I.normal&&(A.normal.push(B[0]),A.normal.push(B[1]),A.normal.push(B[2]),A.normal.push(B[(a-1)*3]),A.normal.push(B[(a-1)*3+1]),A.normal.push(B[(a-1)*3+2]),A.normal.push(B[a*3]),A.normal.push(B[a*3+1]),A.normal.push(B[a*3+2])),I.uv&&I.uv.forEach(function(s,D){A.uvs[D]===void 0&&(A.uvs[D]=[]),A.uvs[D].push(i[D][0]),A.uvs[D].push(i[D][1]),A.uvs[D].push(i[D][(a-1)*2]),A.uvs[D].push(i[D][(a-1)*2+1]),A.uvs[D].push(i[D][a*2]),A.uvs[D].push(i[D][a*2+1])})}addMorphTargets(A,I,g,C){if(g.length===0)return;A.morphTargetsRelative=!0,A.morphAttributes.position=[];const B=this;g.forEach(function(E){E.rawTargets.forEach(function(i){const o=PA.Objects.Geometry[i.geoID];o!==void 0&&B.genMorphGeometry(A,I,o,C,i.name)})})}genMorphGeometry(A,I,g,C,B){const E=I.PolygonVertexIndex!==void 0?I.PolygonVertexIndex.a:[],i=g.Vertices!==void 0?g.Vertices.a:[],o=g.Indexes!==void 0?g.Indexes.a:[],t=A.attributes.position.count*3,e=new Float32Array(t);for(let c=0;c<o.length;c++){const w=o[c]*3;e[w]=i[c*3],e[w+1]=i[c*3+1],e[w+2]=i[c*3+2]}const a={vertexIndices:E,vertexPositions:e},s=this.genBuffers(a),D=new SI(s.vertex,3);D.name=B||g.attrName,D.applyMatrix4(C),A.morphAttributes.position.push(D)}parseNormals(A){const I=A.MappingInformationType,g=A.ReferenceInformationType,C=A.Normals.a;let B=[];return g==="IndexToDirect"&&("NormalIndex"in A?B=A.NormalIndex.a:"NormalsIndex"in A&&(B=A.NormalsIndex.a)),{dataSize:3,buffer:C,indices:B,mappingType:I,referenceType:g}}parseUVs(A){const I=A.MappingInformationType,g=A.ReferenceInformationType,C=A.UV.a;let B=[];return g==="IndexToDirect"&&(B=A.UVIndex.a),{dataSize:2,buffer:C,indices:B,mappingType:I,referenceType:g}}parseVertexColors(A){const I=A.MappingInformationType,g=A.ReferenceInformationType,C=A.Colors.a;let B=[];g==="IndexToDirect"&&(B=A.ColorIndex.a);for(let E=0,i=new hA;E<C.length;E+=4)i.fromArray(C,E).convertSRGBToLinear().toArray(C,E);return{dataSize:4,buffer:C,indices:B,mappingType:I,referenceType:g}}parseMaterialIndices(A){const I=A.MappingInformationType,g=A.ReferenceInformationType;if(I==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:g};const C=A.Materials.a,B=[];for(let E=0;E<C.length;++E)B.push(E);return{dataSize:1,buffer:C,indices:B,mappingType:I,referenceType:g}}parseNurbsGeometry(A){const I=parseInt(A.Order);if(isNaN(I))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",A.Order,A.id),new jI;const g=I-1,C=A.KnotVector.a,B=[],E=A.Points.a;for(let a=0,s=E.length;a<s;a+=4)B.push(new II().fromArray(E,a));let i,o;if(A.Form==="Closed")B.push(B[0]);else if(A.Form==="Periodic"){i=g,o=C.length-1-i;for(let a=0;a<g;++a)B.push(B[a])}const e=new VG(g,C,B,i,o).getPoints(B.length*12);return new jI().setFromPoints(e)}}class zG{parse(){const A=[],I=this.parseClips();if(I!==void 0)for(const g in I){const C=I[g],B=this.addClip(C);A.push(B)}return A}parseClips(){if(PA.Objects.AnimationCurve===void 0)return;const A=this.parseAnimationCurveNodes();this.parseAnimationCurves(A);const I=this.parseAnimationLayers(A);return this.parseAnimStacks(I)}parseAnimationCurveNodes(){const A=PA.Objects.AnimationCurveNode,I=new Map;for(const g in A){const C=A[g];if(C.attrName.match(/S|R|T|DeformPercent/)!==null){const B={id:C.id,attr:C.attrName,curves:{}};I.set(B.id,B)}}return I}parseAnimationCurves(A){const I=PA.Objects.AnimationCurve;for(const g in I){const C={id:I[g].id,times:I[g].KeyTime.a.map(CS),values:I[g].KeyValueFloat.a},B=GI.get(C.id);if(B!==void 0){const E=B.parents[0].ID,i=B.parents[0].relationship;i.match(/X/)?A.get(E).curves.x=C:i.match(/Y/)?A.get(E).curves.y=C:i.match(/Z/)?A.get(E).curves.z=C:i.match(/DeformPercent/)&&A.has(E)&&(A.get(E).curves.morph=C)}}}parseAnimationLayers(A){const I=PA.Objects.AnimationLayer,g=new Map;for(const C in I){const B=[],E=GI.get(parseInt(C));E!==void 0&&(E.children.forEach(function(o,t){if(A.has(o.ID)){const e=A.get(o.ID);if(e.curves.x!==void 0||e.curves.y!==void 0||e.curves.z!==void 0){if(B[t]===void 0){const a=GI.get(o.ID).parents.filter(function(s){return s.relationship!==void 0})[0].ID;if(a!==void 0){const s=PA.Objects.Model[a.toString()];if(s===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",o);return}const D={modelName:s.attrName?zA.sanitizeNodeName(s.attrName):"",ID:s.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};VI.traverse(function(c){c.ID===s.id&&(D.transform=c.matrix,c.userData.transformData&&(D.eulerOrder=c.userData.transformData.eulerOrder))}),D.transform||(D.transform=new GA),"PreRotation"in s&&(D.preRotation=s.PreRotation.value),"PostRotation"in s&&(D.postRotation=s.PostRotation.value),B[t]=D}}B[t]&&(B[t][e.attr]=e)}else if(e.curves.morph!==void 0){if(B[t]===void 0){const a=GI.get(o.ID).parents.filter(function(n){return n.relationship!==void 0})[0].ID,s=GI.get(a).parents[0].ID,D=GI.get(s).parents[0].ID,c=GI.get(D).parents[0].ID,w=PA.Objects.Model[c],h={modelName:w.attrName?zA.sanitizeNodeName(w.attrName):"",morphName:PA.Objects.Deformer[a].attrName};B[t]=h}B[t][e.attr]=e}}}),g.set(parseInt(C),B))}return g}parseAnimStacks(A){const I=PA.Objects.AnimationStack,g={};for(const C in I){const B=GI.get(parseInt(C)).children;B.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const E=A.get(B[0].ID);g[C]={name:I[C].attrName,layer:E}}return g}addClip(A){let I=[];const g=this;return A.layer.forEach(function(C){I=I.concat(g.generateTracks(C))}),new Na(A.name,-1,I)}generateTracks(A){const I=[];let g=new F,C=new sg,B=new F;if(A.transform&&A.transform.decompose(g,C,B),g=g.toArray(),C=new zI().setFromQuaternion(C,A.eulerOrder).toArray(),B=B.toArray(),A.T!==void 0&&Object.keys(A.T.curves).length>0){const E=this.generateVectorTrack(A.modelName,A.T.curves,g,"position");E!==void 0&&I.push(E)}if(A.R!==void 0&&Object.keys(A.R.curves).length>0){const E=this.generateRotationTrack(A.modelName,A.R.curves,C,A.preRotation,A.postRotation,A.eulerOrder);E!==void 0&&I.push(E)}if(A.S!==void 0&&Object.keys(A.S.curves).length>0){const E=this.generateVectorTrack(A.modelName,A.S.curves,B,"scale");E!==void 0&&I.push(E)}if(A.DeformPercent!==void 0){const E=this.generateMorphTrack(A);E!==void 0&&I.push(E)}return I}generateVectorTrack(A,I,g,C){const B=this.getTimesForAllAxes(I),E=this.getKeyframeTrackValues(B,I,g);return new UB(A+"."+C,B,E)}generateRotationTrack(A,I,g,C,B,E){I.x!==void 0&&(this.interpolateRotations(I.x),I.x.values=I.x.values.map(lg.degToRad)),I.y!==void 0&&(this.interpolateRotations(I.y),I.y.values=I.y.values.map(lg.degToRad)),I.z!==void 0&&(this.interpolateRotations(I.z),I.z.values=I.z.values.map(lg.degToRad));const i=this.getTimesForAllAxes(I),o=this.getKeyframeTrackValues(i,I,g);C!==void 0&&(C=C.map(lg.degToRad),C.push(E),C=new zI().fromArray(C),C=new sg().setFromEuler(C)),B!==void 0&&(B=B.map(lg.degToRad),B.push(E),B=new zI().fromArray(B),B=new sg().setFromEuler(B).invert());const t=new sg,e=new zI,a=[];for(let s=0;s<o.length;s+=3)e.set(o[s],o[s+1],o[s+2],E),t.setFromEuler(e),C!==void 0&&t.premultiply(C),B!==void 0&&t.multiply(B),t.toArray(a,s/3*4);return new hC(A+".quaternion",i,a)}generateMorphTrack(A){const I=A.DeformPercent.curves.morph,g=I.values.map(function(B){return B/100}),C=VI.getObjectByName(A.modelName).morphTargetDictionary[A.morphName];return new MB(A.modelName+".morphTargetInfluences["+C+"]",I.times,g)}getTimesForAllAxes(A){let I=[];if(A.x!==void 0&&(I=I.concat(A.x.times)),A.y!==void 0&&(I=I.concat(A.y.times)),A.z!==void 0&&(I=I.concat(A.z.times)),I=I.sort(function(g,C){return g-C}),I.length>1){let g=1,C=I[0];for(let B=1;B<I.length;B++){const E=I[B];E!==C&&(I[g]=E,C=E,g++)}I=I.slice(0,g)}return I}getKeyframeTrackValues(A,I,g){const C=g,B=[];let E=-1,i=-1,o=-1;return A.forEach(function(t){if(I.x&&(E=I.x.times.indexOf(t)),I.y&&(i=I.y.times.indexOf(t)),I.z&&(o=I.z.times.indexOf(t)),E!==-1){const e=I.x.values[E];B.push(e),C[0]=e}else B.push(C[0]);if(i!==-1){const e=I.y.values[i];B.push(e),C[1]=e}else B.push(C[1]);if(o!==-1){const e=I.z.values[o];B.push(e),C[2]=e}else B.push(C[2])}),B}interpolateRotations(A){for(let I=1;I<A.values.length;I++){const g=A.values[I-1],C=A.values[I]-g,B=Math.abs(C);if(B>=180){const E=B/180,i=C/E;let o=g+i;const t=A.times[I-1],a=(A.times[I]-t)/E;let s=t+a;const D=[],c=[];for(;s<A.times[I];)D.push(s),s+=a,c.push(o),o+=i;A.times=pe(A.times,I,D),A.values=pe(A.values,I,c)}}}}class $G{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(A){this.nodeStack.push(A),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(A,I){this.currentProp=A,this.currentPropName=I}parse(A){this.currentIndent=0,this.allNodes=new ma,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const I=this,g=A.split(/[\r\n]+/);return g.forEach(function(C,B){const E=C.match(/^[\s\t]*;/),i=C.match(/^[\s\t]*$/);if(E||i)return;const o=C.match("^\\t{"+I.currentIndent+"}(\\w+):(.*){",""),t=C.match("^\\t{"+I.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),e=C.match("^\\t{"+(I.currentIndent-1)+"}}");o?I.parseNodeBegin(C,o):t?I.parseNodeProperty(C,t,g[++B]):e?I.popStack():C.match(/^[^\s\t}]/)&&I.parseNodePropertyContinued(C)}),this.allNodes}parseNodeBegin(A,I){const g=I[1].trim().replace(/^"/,"").replace(/"$/,""),C=I[2].split(",").map(function(o){return o.trim().replace(/^"/,"").replace(/"$/,"")}),B={name:g},E=this.parseNodeAttr(C),i=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(g,B):g in i?(g==="PoseNode"?i.PoseNode.push(B):i[g].id!==void 0&&(i[g]={},i[g][i[g].id]=i[g]),E.id!==""&&(i[g][E.id]=B)):typeof E.id=="number"?(i[g]={},i[g][E.id]=B):g!=="Properties70"&&(g==="PoseNode"?i[g]=[B]:i[g]=B),typeof E.id=="number"&&(B.id=E.id),E.name!==""&&(B.attrName=E.name),E.type!==""&&(B.attrType=E.type),this.pushStack(B)}parseNodeAttr(A){let I=A[0];A[0]!==""&&(I=parseInt(A[0]),isNaN(I)&&(I=A[0]));let g="",C="";return A.length>1&&(g=A[1].replace(/^(\w+)::/,""),C=A[2]),{id:I,name:g,type:C}}parseNodeProperty(A,I,g){let C=I[1].replace(/^"/,"").replace(/"$/,"").trim(),B=I[2].replace(/^"/,"").replace(/"$/,"").trim();C==="Content"&&B===","&&(B=g.replace(/"/g,"").replace(/,$/,"").trim());const E=this.getCurrentNode();if(E.name==="Properties70"){this.parseNodeSpecialProperty(A,C,B);return}if(C==="C"){const o=B.split(",").slice(1),t=parseInt(o[0]),e=parseInt(o[1]);let a=B.split(",").slice(3);a=a.map(function(s){return s.trim().replace(/^"/,"")}),C="connections",B=[t,e],QS(B,a),E[C]===void 0&&(E[C]=[])}C==="Node"&&(E.id=B),C in E&&Array.isArray(E[C])?E[C].push(B):C!=="a"?E[C]=B:E.a=B,this.setCurrentProp(E,C),C==="a"&&B.slice(-1)!==","&&(E.a=ki(B))}parseNodePropertyContinued(A){const I=this.getCurrentNode();I.a+=A,A.slice(-1)!==","&&(I.a=ki(I.a))}parseNodeSpecialProperty(A,I,g){const C=g.split('",').map(function(e){return e.trim().replace(/^\"/,"").replace(/\s/,"_")}),B=C[0],E=C[1],i=C[2],o=C[3];let t=C[4];switch(E){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":t=parseFloat(t);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":t=ki(t);break}this.getPrevNode()[B]={type:E,type2:i,flag:o,value:t},this.setCurrentProp(this.getPrevNode(),B)}}class AS{parse(A){const I=new Re(A);I.skip(23);const g=I.getUint32();if(g<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+g);const C=new ma;for(;!this.endOfContent(I);){const B=this.parseNode(I,g);B!==null&&C.add(B.name,B)}return C}endOfContent(A){return A.size()%16===0?(A.getOffset()+160+16&-16)>=A.size():A.getOffset()+160+16>=A.size()}parseNode(A,I){const g={},C=I>=7500?A.getUint64():A.getUint32(),B=I>=7500?A.getUint64():A.getUint32();I>=7500?A.getUint64():A.getUint32();const E=A.getUint8(),i=A.getString(E);if(C===0)return null;const o=[];for(let s=0;s<B;s++)o.push(this.parseProperty(A));const t=o.length>0?o[0]:"",e=o.length>1?o[1]:"",a=o.length>2?o[2]:"";for(g.singleProperty=B===1&&A.getOffset()===C;C>A.getOffset();){const s=this.parseNode(A,I);s!==null&&this.parseSubNode(i,g,s)}return g.propertyList=o,typeof t=="number"&&(g.id=t),e!==""&&(g.attrName=e),a!==""&&(g.attrType=a),i!==""&&(g.name=i),g}parseSubNode(A,I,g){if(g.singleProperty===!0){const C=g.propertyList[0];Array.isArray(C)?(I[g.name]=g,g.a=C):I[g.name]=C}else if(A==="Connections"&&g.name==="C"){const C=[];g.propertyList.forEach(function(B,E){E!==0&&C.push(B)}),I.connections===void 0&&(I.connections=[]),I.connections.push(C)}else if(g.name==="Properties70")Object.keys(g).forEach(function(B){I[B]=g[B]});else if(A==="Properties70"&&g.name==="P"){let C=g.propertyList[0],B=g.propertyList[1];const E=g.propertyList[2],i=g.propertyList[3];let o;C.indexOf("Lcl ")===0&&(C=C.replace("Lcl ","Lcl_")),B.indexOf("Lcl ")===0&&(B=B.replace("Lcl ","Lcl_")),B==="Color"||B==="ColorRGB"||B==="Vector"||B==="Vector3D"||B.indexOf("Lcl_")===0?o=[g.propertyList[4],g.propertyList[5],g.propertyList[6]]:o=g.propertyList[4],I[C]={type:B,type2:E,flag:i,value:o}}else I[g.name]===void 0?typeof g.id=="number"?(I[g.name]={},I[g.name][g.id]=g):I[g.name]=g:g.name==="PoseNode"?(Array.isArray(I[g.name])||(I[g.name]=[I[g.name]]),I[g.name].push(g)):I[g.name][g.id]===void 0&&(I[g.name][g.id]=g)}parseProperty(A){const I=A.getString(1);let g;switch(I){case"C":return A.getBoolean();case"D":return A.getFloat64();case"F":return A.getFloat32();case"I":return A.getInt32();case"L":return A.getInt64();case"R":return g=A.getUint32(),A.getArrayBuffer(g);case"S":return g=A.getUint32(),A.getString(g);case"Y":return A.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const C=A.getUint32(),B=A.getUint32(),E=A.getUint32();if(B===0)switch(I){case"b":case"c":return A.getBooleanArray(C);case"d":return A.getFloat64Array(C);case"f":return A.getFloat32Array(C);case"i":return A.getInt32Array(C);case"l":return A.getInt64Array(C)}const i=mG(new Uint8Array(A.getArrayBuffer(E))),o=new Re(i.buffer);switch(I){case"b":case"c":return o.getBooleanArray(C);case"d":return o.getFloat64Array(C);case"f":return o.getFloat32Array(C);case"i":return o.getInt32Array(C);case"l":return o.getInt64Array(C)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+I)}}}class Re{constructor(A,I){this.dv=new DataView(A),this.offset=0,this.littleEndian=I!==void 0?I:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(A){this.offset+=A}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(A){const I=[];for(let g=0;g<A;g++)I.push(this.getBoolean());return I}getUint8(){const A=this.dv.getUint8(this.offset);return this.offset+=1,A}getInt16(){const A=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,A}getInt32(){const A=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,A}getInt32Array(A){const I=[];for(let g=0;g<A;g++)I.push(this.getInt32());return I}getUint32(){const A=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,A}getInt64(){let A,I;return this.littleEndian?(A=this.getUint32(),I=this.getUint32()):(I=this.getUint32(),A=this.getUint32()),I&2147483648?(I=~I&4294967295,A=~A&4294967295,A===4294967295&&(I=I+1&4294967295),A=A+1&4294967295,-(I*4294967296+A)):I*4294967296+A}getInt64Array(A){const I=[];for(let g=0;g<A;g++)I.push(this.getInt64());return I}getUint64(){let A,I;return this.littleEndian?(A=this.getUint32(),I=this.getUint32()):(I=this.getUint32(),A=this.getUint32()),I*4294967296+A}getFloat32(){const A=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,A}getFloat32Array(A){const I=[];for(let g=0;g<A;g++)I.push(this.getFloat32());return I}getFloat64(){const A=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,A}getFloat64Array(A){const I=[];for(let g=0;g<A;g++)I.push(this.getFloat64());return I}getArrayBuffer(A){const I=this.dv.buffer.slice(this.offset,this.offset+A);return this.offset+=A,I}getString(A){const I=this.offset;let g=new Uint8Array(this.dv.buffer,I,A);this.skip(A);const C=g.indexOf(0);return C>=0&&(g=new Uint8Array(this.dv.buffer,I,C)),this._textDecoder.decode(g)}}class ma{add(A,I){this[A]=I}}function IS(Q){const A="Kaydara FBX Binary  \0";return Q.byteLength>=A.length&&A===Oa(Q,0,A.length)}function gS(Q){const A=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let I=0;function g(C){const B=Q[C-1];return Q=Q.slice(I+C),I++,B}for(let C=0;C<A.length;++C)if(g(1)===A[C])return!1;return!0}function qe(Q){const A=/FBXVersion: (\d+)/,I=Q.match(A);if(I)return parseInt(I[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function CS(Q){return Q/46186158e3}const BS=[];function xQ(Q,A,I,g){let C;switch(g.mappingType){case"ByPolygonVertex":C=Q;break;case"ByPolygon":C=A;break;case"ByVertice":C=I;break;case"AllSame":C=g.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+g.mappingType)}g.referenceType==="IndexToDirect"&&(C=g.indices[C]);const B=C*g.dataSize,E=B+g.dataSize;return ES(BS,g.buffer,B,E)}const Si=new zI,iB=new F;function Ta(Q){const A=new GA,I=new GA,g=new GA,C=new GA,B=new GA,E=new GA,i=new GA,o=new GA,t=new GA,e=new GA,a=new GA,s=new GA,D=Q.inheritType?Q.inheritType:0;if(Q.translation&&A.setPosition(iB.fromArray(Q.translation)),Q.preRotation){const N=Q.preRotation.map(lg.degToRad);N.push(Q.eulerOrder||zI.DEFAULT_ORDER),I.makeRotationFromEuler(Si.fromArray(N))}if(Q.rotation){const N=Q.rotation.map(lg.degToRad);N.push(Q.eulerOrder||zI.DEFAULT_ORDER),g.makeRotationFromEuler(Si.fromArray(N))}if(Q.postRotation){const N=Q.postRotation.map(lg.degToRad);N.push(Q.eulerOrder||zI.DEFAULT_ORDER),C.makeRotationFromEuler(Si.fromArray(N)),C.invert()}Q.scale&&B.scale(iB.fromArray(Q.scale)),Q.scalingOffset&&i.setPosition(iB.fromArray(Q.scalingOffset)),Q.scalingPivot&&E.setPosition(iB.fromArray(Q.scalingPivot)),Q.rotationOffset&&o.setPosition(iB.fromArray(Q.rotationOffset)),Q.rotationPivot&&t.setPosition(iB.fromArray(Q.rotationPivot)),Q.parentMatrixWorld&&(a.copy(Q.parentMatrix),e.copy(Q.parentMatrixWorld));const c=I.clone().multiply(g).multiply(C),w=new GA;w.extractRotation(e);const h=new GA;h.copyPosition(e);const n=h.clone().invert().multiply(e),l=w.clone().invert().multiply(n),G=B,M=new GA;if(D===0)M.copy(w).multiply(c).multiply(l).multiply(G);else if(D===1)M.copy(w).multiply(l).multiply(c).multiply(G);else{const H=new GA().scale(new F().setFromMatrixScale(a)).clone().invert(),_=l.clone().multiply(H);M.copy(w).multiply(c).multiply(_).multiply(G)}const U=t.clone().invert(),J=E.clone().invert();let q=A.clone().multiply(o).multiply(t).multiply(I).multiply(g).multiply(C).multiply(U).multiply(i).multiply(E).multiply(B).multiply(J);const p=new GA().copyPosition(q),S=e.clone().multiply(p);return s.copyPosition(S),q=s.clone().multiply(M),q.premultiply(e.invert()),q}function xa(Q){Q=Q||0;const A=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return Q===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),A[0]):A[Q]}function ki(Q){return Q.split(",").map(function(I){return parseFloat(I)})}function Oa(Q,A,I){return A===void 0&&(A=0),I===void 0&&(I=Q.byteLength),new TextDecoder().decode(new Uint8Array(Q,A,I))}function QS(Q,A){for(let I=0,g=Q.length,C=A.length;I<C;I++,g++)Q[g]=A[I]}function ES(Q,A,I,g){for(let C=I,B=0;C<g;C++,B++)Q[B]=A[C];return Q}function pe(Q,A,I){return Q.slice(0,A).concat(I).concat(Q.slice(A))}function de(Q,A){if(A===wD)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),Q;if(A===qi||A===ga){let I=Q.getIndex();if(I===null){const E=[],i=Q.getAttribute("position");if(i!==void 0){for(let o=0;o<i.count;o++)E.push(o);Q.setIndex(E),I=Q.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),Q}const g=I.count-2,C=[];if(A===qi)for(let E=1;E<=g;E++)C.push(I.getX(0)),C.push(I.getX(E)),C.push(I.getX(E+1));else for(let E=0;E<g;E++)E%2===0?(C.push(I.getX(E)),C.push(I.getX(E+1)),C.push(I.getX(E+2))):(C.push(I.getX(E+2)),C.push(I.getX(E+1)),C.push(I.getX(E)));C.length/3!==g&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const B=Q.clone();return B.setIndex(C),B.clearGroups(),B}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",A),Q}class iS extends OC{constructor(A){super(A),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(I){return new sS(I)}),this.register(function(I){return new SS(I)}),this.register(function(I){return new kS(I)}),this.register(function(I){return new lS(I)}),this.register(function(I){return new nS(I)}),this.register(function(I){return new hS(I)}),this.register(function(I){return new rS(I)}),this.register(function(I){return new cS(I)}),this.register(function(I){return new aS(I)}),this.register(function(I){return new wS(I)}),this.register(function(I){return new DS(I)}),this.register(function(I){return new GS(I)}),this.register(function(I){return new tS(I)}),this.register(function(I){return new yS(I)}),this.register(function(I){return new MS(I)})}load(A,I,g,C){const B=this;let E;this.resourcePath!==""?E=this.resourcePath:this.path!==""?E=this.path:E=BE.extractUrlBase(A),this.manager.itemStart(A);const i=function(t){C?C(t):console.error(t),B.manager.itemError(A),B.manager.itemEnd(A)},o=new eo(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(A,function(t){try{B.parse(t,E,function(e){I(e),B.manager.itemEnd(A)},i)}catch(e){i(e)}},g,i)}setDRACOLoader(A){return this.dracoLoader=A,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(A){return this.ktx2Loader=A,this}setMeshoptDecoder(A){return this.meshoptDecoder=A,this}register(A){return this.pluginCallbacks.indexOf(A)===-1&&this.pluginCallbacks.push(A),this}unregister(A){return this.pluginCallbacks.indexOf(A)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(A),1),this}parse(A,I,g,C){let B;const E={},i={},o=new TextDecoder;if(typeof A=="string")B=JSON.parse(A);else if(A instanceof ArrayBuffer)if(o.decode(new Uint8Array(A,0,4))===ba){try{E[VA.KHR_BINARY_GLTF]=new US(A)}catch(a){C&&C(a);return}B=JSON.parse(E[VA.KHR_BINARY_GLTF].content)}else B=JSON.parse(o.decode(A));else B=A;if(B.asset===void 0||B.asset.version[0]<2){C&&C(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const t=new HS(B,{path:I||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});t.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){const a=this.pluginCallbacks[e](t);i[a.name]=a,E[a.name]=!0}if(B.extensionsUsed)for(let e=0;e<B.extensionsUsed.length;++e){const a=B.extensionsUsed[e],s=B.extensionsRequired||[];switch(a){case VA.KHR_MATERIALS_UNLIT:E[a]=new eS;break;case VA.KHR_DRACO_MESH_COMPRESSION:E[a]=new NS(B,this.dracoLoader);break;case VA.KHR_TEXTURE_TRANSFORM:E[a]=new KS;break;case VA.KHR_MESH_QUANTIZATION:E[a]=new JS;break;default:s.indexOf(a)>=0&&i[a]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+a+'".')}}t.setExtensions(E),t.setPlugins(i),t.parse(g,C)}parseAsync(A,I){const g=this;return new Promise(function(C,B){g.parse(A,I,C,B)})}}function oS(){let Q={};return{get:function(A){return Q[A]},add:function(A,I){Q[A]=I},remove:function(A){delete Q[A]},removeAll:function(){Q={}}}}const VA={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class tS{constructor(A){this.parser=A,this.name=VA.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const A=this.parser,I=this.parser.json.nodes||[];for(let g=0,C=I.length;g<C;g++){const B=I[g];B.extensions&&B.extensions[this.name]&&B.extensions[this.name].light!==void 0&&A._addNodeRef(this.cache,B.extensions[this.name].light)}}_loadLight(A){const I=this.parser,g="light:"+A;let C=I.cache.get(g);if(C)return C;const B=I.json,o=((B.extensions&&B.extensions[this.name]||{}).lights||[])[A];let t;const e=new hA(16777215);o.color!==void 0&&e.fromArray(o.color);const a=o.range!==void 0?o.range:0;switch(o.type){case"directional":t=new Fa(e),t.target.position.set(0,0,-1),t.add(t.target);break;case"point":t=new CE(e),t.distance=a;break;case"spot":t=new Ja(e),t.distance=a,o.spot=o.spot||{},o.spot.innerConeAngle=o.spot.innerConeAngle!==void 0?o.spot.innerConeAngle:0,o.spot.outerConeAngle=o.spot.outerConeAngle!==void 0?o.spot.outerConeAngle:Math.PI/4,t.angle=o.spot.outerConeAngle,t.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,t.target.position.set(0,0,-1),t.add(t.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}return t.position.set(0,0,0),t.decay=2,iC(t,o),o.intensity!==void 0&&(t.intensity=o.intensity),t.name=I.createUniqueName(o.name||"light_"+A),C=Promise.resolve(t),I.cache.add(g,C),C}getDependency(A,I){if(A==="light")return this._loadLight(I)}createNodeAttachment(A){const I=this,g=this.parser,B=g.json.nodes[A],i=(B.extensions&&B.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(o){return g._getNodeRef(I.cache,i,o)})}}class eS{constructor(){this.name=VA.KHR_MATERIALS_UNLIT}getMaterialType(){return PI}extendParams(A,I,g){const C=[];A.color=new hA(1,1,1),A.opacity=1;const B=I.pbrMetallicRoughness;if(B){if(Array.isArray(B.baseColorFactor)){const E=B.baseColorFactor;A.color.fromArray(E),A.opacity=E[3]}B.baseColorTexture!==void 0&&C.push(g.assignTexture(A,"map",B.baseColorTexture,NA))}return Promise.all(C)}}class aS{constructor(A){this.parser=A,this.name=VA.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(A,I){const C=this.parser.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=C.extensions[this.name].emissiveStrength;return B!==void 0&&(I.emissiveIntensity=B),Promise.resolve()}}class sS{constructor(A){this.parser=A,this.name=VA.KHR_MATERIALS_CLEARCOAT}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:SC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[],E=C.extensions[this.name];if(E.clearcoatFactor!==void 0&&(I.clearcoat=E.clearcoatFactor),E.clearcoatTexture!==void 0&&B.push(g.assignTexture(I,"clearcoatMap",E.clearcoatTexture)),E.clearcoatRoughnessFactor!==void 0&&(I.clearcoatRoughness=E.clearcoatRoughnessFactor),E.clearcoatRoughnessTexture!==void 0&&B.push(g.assignTexture(I,"clearcoatRoughnessMap",E.clearcoatRoughnessTexture)),E.clearcoatNormalTexture!==void 0&&(B.push(g.assignTexture(I,"clearcoatNormalMap",E.clearcoatNormalTexture)),E.clearcoatNormalTexture.scale!==void 0)){const i=E.clearcoatNormalTexture.scale;I.clearcoatNormalScale=new xA(i,i)}return Promise.all(B)}}class DS{constructor(A){this.parser=A,this.name=VA.KHR_MATERIALS_IRIDESCENCE}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:SC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[],E=C.extensions[this.name];return E.iridescenceFactor!==void 0&&(I.iridescence=E.iridescenceFactor),E.iridescenceTexture!==void 0&&B.push(g.assignTexture(I,"iridescenceMap",E.iridescenceTexture)),E.iridescenceIor!==void 0&&(I.iridescenceIOR=E.iridescenceIor),I.iridescenceThicknessRange===void 0&&(I.iridescenceThicknessRange=[100,400]),E.iridescenceThicknessMinimum!==void 0&&(I.iridescenceThicknessRange[0]=E.iridescenceThicknessMinimum),E.iridescenceThicknessMaximum!==void 0&&(I.iridescenceThicknessRange[1]=E.iridescenceThicknessMaximum),E.iridescenceThicknessTexture!==void 0&&B.push(g.assignTexture(I,"iridescenceThicknessMap",E.iridescenceThicknessTexture)),Promise.all(B)}}class nS{constructor(A){this.parser=A,this.name=VA.KHR_MATERIALS_SHEEN}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:SC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[];I.sheenColor=new hA(0,0,0),I.sheenRoughness=0,I.sheen=1;const E=C.extensions[this.name];return E.sheenColorFactor!==void 0&&I.sheenColor.fromArray(E.sheenColorFactor),E.sheenRoughnessFactor!==void 0&&(I.sheenRoughness=E.sheenRoughnessFactor),E.sheenColorTexture!==void 0&&B.push(g.assignTexture(I,"sheenColorMap",E.sheenColorTexture,NA)),E.sheenRoughnessTexture!==void 0&&B.push(g.assignTexture(I,"sheenRoughnessMap",E.sheenRoughnessTexture)),Promise.all(B)}}class hS{constructor(A){this.parser=A,this.name=VA.KHR_MATERIALS_TRANSMISSION}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:SC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[],E=C.extensions[this.name];return E.transmissionFactor!==void 0&&(I.transmission=E.transmissionFactor),E.transmissionTexture!==void 0&&B.push(g.assignTexture(I,"transmissionMap",E.transmissionTexture)),Promise.all(B)}}class rS{constructor(A){this.parser=A,this.name=VA.KHR_MATERIALS_VOLUME}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:SC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[],E=C.extensions[this.name];I.thickness=E.thicknessFactor!==void 0?E.thicknessFactor:0,E.thicknessTexture!==void 0&&B.push(g.assignTexture(I,"thicknessMap",E.thicknessTexture)),I.attenuationDistance=E.attenuationDistance||1/0;const i=E.attenuationColor||[1,1,1];return I.attenuationColor=new hA(i[0],i[1],i[2]),Promise.all(B)}}class cS{constructor(A){this.parser=A,this.name=VA.KHR_MATERIALS_IOR}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:SC}extendMaterialParams(A,I){const C=this.parser.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=C.extensions[this.name];return I.ior=B.ior!==void 0?B.ior:1.5,Promise.resolve()}}class wS{constructor(A){this.parser=A,this.name=VA.KHR_MATERIALS_SPECULAR}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:SC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[],E=C.extensions[this.name];I.specularIntensity=E.specularFactor!==void 0?E.specularFactor:1,E.specularTexture!==void 0&&B.push(g.assignTexture(I,"specularIntensityMap",E.specularTexture));const i=E.specularColorFactor||[1,1,1];return I.specularColor=new hA(i[0],i[1],i[2]),E.specularColorTexture!==void 0&&B.push(g.assignTexture(I,"specularColorMap",E.specularColorTexture,NA)),Promise.all(B)}}class GS{constructor(A){this.parser=A,this.name=VA.KHR_MATERIALS_ANISOTROPY}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:SC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[],E=C.extensions[this.name];return E.anisotropyStrength!==void 0&&(I.anisotropy=E.anisotropyStrength),E.anisotropyRotation!==void 0&&(I.anisotropyRotation=E.anisotropyRotation),E.anisotropyTexture!==void 0&&B.push(g.assignTexture(I,"anisotropyMap",E.anisotropyTexture)),Promise.all(B)}}class SS{constructor(A){this.parser=A,this.name=VA.KHR_TEXTURE_BASISU}loadTexture(A){const I=this.parser,g=I.json,C=g.textures[A];if(!C.extensions||!C.extensions[this.name])return null;const B=C.extensions[this.name],E=I.options.ktx2Loader;if(!E){if(g.extensionsRequired&&g.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return I.loadTextureImage(A,B.source,E)}}class kS{constructor(A){this.parser=A,this.name=VA.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(A){const I=this.name,g=this.parser,C=g.json,B=C.textures[A];if(!B.extensions||!B.extensions[I])return null;const E=B.extensions[I],i=C.images[E.source];let o=g.textureLoader;if(i.uri){const t=g.options.manager.getHandler(i.uri);t!==null&&(o=t)}return this.detectSupport().then(function(t){if(t)return g.loadTextureImage(A,E.source,o);if(C.extensionsRequired&&C.extensionsRequired.indexOf(I)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return g.loadTexture(A)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(A){const I=new Image;I.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",I.onload=I.onerror=function(){A(I.height===1)}})),this.isSupported}}class lS{constructor(A){this.parser=A,this.name=VA.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(A){const I=this.name,g=this.parser,C=g.json,B=C.textures[A];if(!B.extensions||!B.extensions[I])return null;const E=B.extensions[I],i=C.images[E.source];let o=g.textureLoader;if(i.uri){const t=g.options.manager.getHandler(i.uri);t!==null&&(o=t)}return this.detectSupport().then(function(t){if(t)return g.loadTextureImage(A,E.source,o);if(C.extensionsRequired&&C.extensionsRequired.indexOf(I)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return g.loadTexture(A)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(A){const I=new Image;I.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",I.onload=I.onerror=function(){A(I.height===1)}})),this.isSupported}}class yS{constructor(A){this.name=VA.EXT_MESHOPT_COMPRESSION,this.parser=A}loadBufferView(A){const I=this.parser.json,g=I.bufferViews[A];if(g.extensions&&g.extensions[this.name]){const C=g.extensions[this.name],B=this.parser.getDependency("buffer",C.buffer),E=this.parser.options.meshoptDecoder;if(!E||!E.supported){if(I.extensionsRequired&&I.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return B.then(function(i){const o=C.byteOffset||0,t=C.byteLength||0,e=C.count,a=C.byteStride,s=new Uint8Array(i,o,t);return E.decodeGltfBufferAsync?E.decodeGltfBufferAsync(e,a,s,C.mode,C.filter).then(function(D){return D.buffer}):E.ready.then(function(){const D=new ArrayBuffer(e*a);return E.decodeGltfBuffer(new Uint8Array(D),e,a,s,C.mode,C.filter),D})})}else return null}}class MS{constructor(A){this.name=VA.EXT_MESH_GPU_INSTANCING,this.parser=A}createNodeMesh(A){const I=this.parser.json,g=I.nodes[A];if(!g.extensions||!g.extensions[this.name]||g.mesh===void 0)return null;const C=I.meshes[g.mesh];for(const t of C.primitives)if(t.mode!==ig.TRIANGLES&&t.mode!==ig.TRIANGLE_STRIP&&t.mode!==ig.TRIANGLE_FAN&&t.mode!==void 0)return null;const E=g.extensions[this.name].attributes,i=[],o={};for(const t in E)i.push(this.parser.getDependency("accessor",E[t]).then(e=>(o[t]=e,o[t])));return i.length<1?null:(i.push(this.parser.createNodeMesh(A)),Promise.all(i).then(t=>{const e=t.pop(),a=e.isGroup?e.children:[e],s=t[0].count,D=[];for(const c of a){const w=new GA,h=new F,n=new sg,l=new F(1,1,1),G=new AG(c.geometry,c.material,s);for(let M=0;M<s;M++)o.TRANSLATION&&h.fromBufferAttribute(o.TRANSLATION,M),o.ROTATION&&n.fromBufferAttribute(o.ROTATION,M),o.SCALE&&l.fromBufferAttribute(o.SCALE,M),G.setMatrixAt(M,w.compose(h,n,l));for(const M in o)M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&c.geometry.setAttribute(M,o[M]);BI.prototype.copy.call(G,c),this.parser.assignFinalMaterial(G),D.push(G)}return e.isGroup?(e.clear(),e.add(...D),e):D[0]}))}}const ba="glTF",OB=12,Le={JSON:1313821514,BIN:5130562};class US{constructor(A){this.name=VA.KHR_BINARY_GLTF,this.content=null,this.body=null;const I=new DataView(A,0,OB),g=new TextDecoder;if(this.header={magic:g.decode(new Uint8Array(A.slice(0,4))),version:I.getUint32(4,!0),length:I.getUint32(8,!0)},this.header.magic!==ba)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const C=this.header.length-OB,B=new DataView(A,OB);let E=0;for(;E<C;){const i=B.getUint32(E,!0);E+=4;const o=B.getUint32(E,!0);if(E+=4,o===Le.JSON){const t=new Uint8Array(A,OB+E,i);this.content=g.decode(t)}else if(o===Le.BIN){const t=OB+E;this.body=A.slice(t,t+i)}E+=i}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class NS{constructor(A,I){if(!I)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=VA.KHR_DRACO_MESH_COMPRESSION,this.json=A,this.dracoLoader=I,this.dracoLoader.preload()}decodePrimitive(A,I){const g=this.json,C=this.dracoLoader,B=A.extensions[this.name].bufferView,E=A.extensions[this.name].attributes,i={},o={},t={};for(const e in E){const a=Ti[e]||e.toLowerCase();i[a]=E[e]}for(const e in A.attributes){const a=Ti[e]||e.toLowerCase();if(E[e]!==void 0){const s=g.accessors[A.attributes[e]],D=cB[s.componentType];t[a]=D.name,o[a]=s.normalized===!0}}return I.getDependency("bufferView",B).then(function(e){return new Promise(function(a){C.decodeDracoFile(e,function(s){for(const D in s.attributes){const c=s.attributes[D],w=o[D];w!==void 0&&(c.normalized=w)}a(s)},i,t)})})}}class KS{constructor(){this.name=VA.KHR_TEXTURE_TRANSFORM}extendTexture(A,I){return(I.texCoord===void 0||I.texCoord===A.channel)&&I.offset===void 0&&I.rotation===void 0&&I.scale===void 0||(A=A.clone(),I.texCoord!==void 0&&(A.channel=I.texCoord),I.offset!==void 0&&A.offset.fromArray(I.offset),I.rotation!==void 0&&(A.rotation=I.rotation),I.scale!==void 0&&A.repeat.fromArray(I.scale),A.needsUpdate=!0),A}}class JS{constructor(){this.name=VA.KHR_MESH_QUANTIZATION}}class va extends tQ{constructor(A,I,g,C){super(A,I,g,C)}copySampleValue_(A){const I=this.resultBuffer,g=this.sampleValues,C=this.valueSize,B=A*C*3+C;for(let E=0;E!==C;E++)I[E]=g[B+E];return I}interpolate_(A,I,g,C){const B=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=i*2,t=i*3,e=C-I,a=(g-I)/e,s=a*a,D=s*a,c=A*t,w=c-t,h=-2*D+3*s,n=D-s,l=1-h,G=n-s+a;for(let M=0;M!==i;M++){const U=E[w+M+i],J=E[w+M+o]*e,q=E[c+M+i],p=E[c+M]*e;B[M]=l*U+G*J+h*q+n*p}return B}}const FS=new sg;class RS extends va{interpolate_(A,I,g,C){const B=super.interpolate_(A,I,g,C);return FS.fromArray(B).normalize().toArray(B),B}}const ig={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},cB={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ye={9728:LI,9729:_I,9984:Ri,9985:Ve,9986:vQ,9987:HC},fe={33071:XI,33648:zQ,10497:DC},li={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ti={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},QC={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qS={CUBICSPLINE:void 0,LINEAR:kB,STEP:_B},yi={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pS(Q){return Q.DefaultMaterial===void 0&&(Q.DefaultMaterial=new oo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_g})),Q.DefaultMaterial}function JC(Q,A,I){for(const g in I.extensions)Q[g]===void 0&&(A.userData.gltfExtensions=A.userData.gltfExtensions||{},A.userData.gltfExtensions[g]=I.extensions[g])}function iC(Q,A){A.extras!==void 0&&(typeof A.extras=="object"?Object.assign(Q.userData,A.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+A.extras))}function dS(Q,A,I){let g=!1,C=!1,B=!1;for(let t=0,e=A.length;t<e;t++){const a=A[t];if(a.POSITION!==void 0&&(g=!0),a.NORMAL!==void 0&&(C=!0),a.COLOR_0!==void 0&&(B=!0),g&&C&&B)break}if(!g&&!C&&!B)return Promise.resolve(Q);const E=[],i=[],o=[];for(let t=0,e=A.length;t<e;t++){const a=A[t];if(g){const s=a.POSITION!==void 0?I.getDependency("accessor",a.POSITION):Q.attributes.position;E.push(s)}if(C){const s=a.NORMAL!==void 0?I.getDependency("accessor",a.NORMAL):Q.attributes.normal;i.push(s)}if(B){const s=a.COLOR_0!==void 0?I.getDependency("accessor",a.COLOR_0):Q.attributes.color;o.push(s)}}return Promise.all([Promise.all(E),Promise.all(i),Promise.all(o)]).then(function(t){const e=t[0],a=t[1],s=t[2];return g&&(Q.morphAttributes.position=e),C&&(Q.morphAttributes.normal=a),B&&(Q.morphAttributes.color=s),Q.morphTargetsRelative=!0,Q})}function LS(Q,A){if(Q.updateMorphTargets(),A.weights!==void 0)for(let I=0,g=A.weights.length;I<g;I++)Q.morphTargetInfluences[I]=A.weights[I];if(A.extras&&Array.isArray(A.extras.targetNames)){const I=A.extras.targetNames;if(Q.morphTargetInfluences.length===I.length){Q.morphTargetDictionary={};for(let g=0,C=I.length;g<C;g++)Q.morphTargetDictionary[I[g]]=g}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function YS(Q){let A;const I=Q.extensions&&Q.extensions[VA.KHR_DRACO_MESH_COMPRESSION];if(I?A="draco:"+I.bufferView+":"+I.indices+":"+Mi(I.attributes):A=Q.indices+":"+Mi(Q.attributes)+":"+Q.mode,Q.targets!==void 0)for(let g=0,C=Q.targets.length;g<C;g++)A+=":"+Mi(Q.targets[g]);return A}function Mi(Q){let A="";const I=Object.keys(Q).sort();for(let g=0,C=I.length;g<C;g++)A+=I[g]+":"+Q[I[g]]+";";return A}function xi(Q){switch(Q){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fS(Q){return Q.search(/\.jpe?g($|\?)/i)>0||Q.search(/^data\:image\/jpeg/)===0?"image/jpeg":Q.search(/\.webp($|\?)/i)>0||Q.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const uS=new GA;class HS{constructor(A={},I={}){this.json=A,this.extensions={},this.plugins={},this.options=I,this.cache=new oS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let g=!1,C=!1,B=-1;typeof navigator<"u"&&(g=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,C=navigator.userAgent.indexOf("Firefox")>-1,B=C?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||g||C&&B<98?this.textureLoader=new rB(this.options.manager):this.textureLoader=new cG(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new eo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(A){this.extensions=A}setPlugins(A){this.plugins=A}parse(A,I){const g=this,C=this.json,B=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(E){return E._markDefs&&E._markDefs()}),Promise.all(this._invokeAll(function(E){return E.beforeRoot&&E.beforeRoot()})).then(function(){return Promise.all([g.getDependencies("scene"),g.getDependencies("animation"),g.getDependencies("camera")])}).then(function(E){const i={scene:E[0][C.scene||0],scenes:E[0],animations:E[1],cameras:E[2],asset:C.asset,parser:g,userData:{}};JC(B,i,C),iC(i,C),Promise.all(g._invokeAll(function(o){return o.afterRoot&&o.afterRoot(i)})).then(function(){A(i)})}).catch(I)}_markDefs(){const A=this.json.nodes||[],I=this.json.skins||[],g=this.json.meshes||[];for(let C=0,B=I.length;C<B;C++){const E=I[C].joints;for(let i=0,o=E.length;i<o;i++)A[E[i]].isBone=!0}for(let C=0,B=A.length;C<B;C++){const E=A[C];E.mesh!==void 0&&(this._addNodeRef(this.meshCache,E.mesh),E.skin!==void 0&&(g[E.mesh].isSkinnedMesh=!0)),E.camera!==void 0&&this._addNodeRef(this.cameraCache,E.camera)}}_addNodeRef(A,I){I!==void 0&&(A.refs[I]===void 0&&(A.refs[I]=A.uses[I]=0),A.refs[I]++)}_getNodeRef(A,I,g){if(A.refs[I]<=1)return g;const C=g.clone(),B=(E,i)=>{const o=this.associations.get(E);o!=null&&this.associations.set(i,o);for(const[t,e]of E.children.entries())B(e,i.children[t])};return B(g,C),C.name+="_instance_"+A.uses[I]++,C}_invokeOne(A){const I=Object.values(this.plugins);I.push(this);for(let g=0;g<I.length;g++){const C=A(I[g]);if(C)return C}return null}_invokeAll(A){const I=Object.values(this.plugins);I.unshift(this);const g=[];for(let C=0;C<I.length;C++){const B=A(I[C]);B&&g.push(B)}return g}getDependency(A,I){const g=A+":"+I;let C=this.cache.get(g);if(!C){switch(A){case"scene":C=this.loadScene(I);break;case"node":C=this._invokeOne(function(B){return B.loadNode&&B.loadNode(I)});break;case"mesh":C=this._invokeOne(function(B){return B.loadMesh&&B.loadMesh(I)});break;case"accessor":C=this.loadAccessor(I);break;case"bufferView":C=this._invokeOne(function(B){return B.loadBufferView&&B.loadBufferView(I)});break;case"buffer":C=this.loadBuffer(I);break;case"material":C=this._invokeOne(function(B){return B.loadMaterial&&B.loadMaterial(I)});break;case"texture":C=this._invokeOne(function(B){return B.loadTexture&&B.loadTexture(I)});break;case"skin":C=this.loadSkin(I);break;case"animation":C=this._invokeOne(function(B){return B.loadAnimation&&B.loadAnimation(I)});break;case"camera":C=this.loadCamera(I);break;default:if(C=this._invokeOne(function(B){return B!=this&&B.getDependency&&B.getDependency(A,I)}),!C)throw new Error("Unknown type: "+A);break}this.cache.add(g,C)}return C}getDependencies(A){let I=this.cache.get(A);if(!I){const g=this,C=this.json[A+(A==="mesh"?"es":"s")]||[];I=Promise.all(C.map(function(B,E){return g.getDependency(A,E)})),this.cache.add(A,I)}return I}loadBuffer(A){const I=this.json.buffers[A],g=this.fileLoader;if(I.type&&I.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+I.type+" buffer type is not supported.");if(I.uri===void 0&&A===0)return Promise.resolve(this.extensions[VA.KHR_BINARY_GLTF].body);const C=this.options;return new Promise(function(B,E){g.load(BE.resolveURL(I.uri,C.path),B,void 0,function(){E(new Error('THREE.GLTFLoader: Failed to load buffer "'+I.uri+'".'))})})}loadBufferView(A){const I=this.json.bufferViews[A];return this.getDependency("buffer",I.buffer).then(function(g){const C=I.byteLength||0,B=I.byteOffset||0;return g.slice(B,B+C)})}loadAccessor(A){const I=this,g=this.json,C=this.json.accessors[A];if(C.bufferView===void 0&&C.sparse===void 0){const E=li[C.type],i=cB[C.componentType],o=C.normalized===!0,t=new i(C.count*E);return Promise.resolve(new WI(t,E,o))}const B=[];return C.bufferView!==void 0?B.push(this.getDependency("bufferView",C.bufferView)):B.push(null),C.sparse!==void 0&&(B.push(this.getDependency("bufferView",C.sparse.indices.bufferView)),B.push(this.getDependency("bufferView",C.sparse.values.bufferView))),Promise.all(B).then(function(E){const i=E[0],o=li[C.type],t=cB[C.componentType],e=t.BYTES_PER_ELEMENT,a=e*o,s=C.byteOffset||0,D=C.bufferView!==void 0?g.bufferViews[C.bufferView].byteStride:void 0,c=C.normalized===!0;let w,h;if(D&&D!==a){const n=Math.floor(s/D),l="InterleavedBuffer:"+C.bufferView+":"+C.componentType+":"+n+":"+C.count;let G=I.cache.get(l);G||(w=new t(i,n*D,C.count*D/e),G=new Vw(w,D/e),I.cache.add(l,G)),h=new Eo(G,o,s%D/e,c)}else i===null?w=new t(C.count*o):w=new t(i,s,C.count*o),h=new WI(w,o,c);if(C.sparse!==void 0){const n=li.SCALAR,l=cB[C.sparse.indices.componentType],G=C.sparse.indices.byteOffset||0,M=C.sparse.values.byteOffset||0,U=new l(E[1],G,C.sparse.count*n),J=new t(E[2],M,C.sparse.count*o);i!==null&&(h=new WI(h.array.slice(),h.itemSize,h.normalized));for(let q=0,p=U.length;q<p;q++){const S=U[q];if(h.setX(S,J[q*o]),o>=2&&h.setY(S,J[q*o+1]),o>=3&&h.setZ(S,J[q*o+2]),o>=4&&h.setW(S,J[q*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return h})}loadTexture(A){const I=this.json,g=this.options,B=I.textures[A].source,E=I.images[B];let i=this.textureLoader;if(E.uri){const o=g.manager.getHandler(E.uri);o!==null&&(i=o)}return this.loadTextureImage(A,B,i)}loadTextureImage(A,I,g){const C=this,B=this.json,E=B.textures[A],i=B.images[I],o=(i.uri||i.bufferView)+":"+E.sampler;if(this.textureCache[o])return this.textureCache[o];const t=this.loadImageSource(I,g).then(function(e){e.flipY=!1,e.name=E.name||i.name||"",e.name===""&&typeof i.uri=="string"&&i.uri.startsWith("data:image/")===!1&&(e.name=i.uri);const s=(B.samplers||{})[E.sampler]||{};return e.magFilter=Ye[s.magFilter]||_I,e.minFilter=Ye[s.minFilter]||HC,e.wrapS=fe[s.wrapS]||DC,e.wrapT=fe[s.wrapT]||DC,C.associations.set(e,{textures:A}),e}).catch(function(){return null});return this.textureCache[o]=t,t}loadImageSource(A,I){const g=this,C=this.json,B=this.options;if(this.sourceCache[A]!==void 0)return this.sourceCache[A].then(a=>a.clone());const E=C.images[A],i=self.URL||self.webkitURL;let o=E.uri||"",t=!1;if(E.bufferView!==void 0)o=g.getDependency("bufferView",E.bufferView).then(function(a){t=!0;const s=new Blob([a],{type:E.mimeType});return o=i.createObjectURL(s),o});else if(E.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+A+" is missing URI and bufferView");const e=Promise.resolve(o).then(function(a){return new Promise(function(s,D){let c=s;I.isImageBitmapLoader===!0&&(c=function(w){const h=new KI(w);h.needsUpdate=!0,s(h)}),I.load(BE.resolveURL(a,B.path),c,void 0,D)})}).then(function(a){return t===!0&&i.revokeObjectURL(o),a.userData.mimeType=E.mimeType||fS(E.uri),a}).catch(function(a){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),a});return this.sourceCache[A]=e,e}assignTexture(A,I,g,C){const B=this;return this.getDependency("texture",g.index).then(function(E){if(!E)return null;if(g.texCoord!==void 0&&g.texCoord>0&&(E=E.clone(),E.channel=g.texCoord),B.extensions[VA.KHR_TEXTURE_TRANSFORM]){const i=g.extensions!==void 0?g.extensions[VA.KHR_TEXTURE_TRANSFORM]:void 0;if(i){const o=B.associations.get(E);E=B.extensions[VA.KHR_TEXTURE_TRANSFORM].extendTexture(E,i),B.associations.set(E,o)}}return C!==void 0&&(E.colorSpace=C),A[I]=E,E})}assignFinalMaterial(A){const I=A.geometry;let g=A.material;const C=I.attributes.tangent===void 0,B=I.attributes.color!==void 0,E=I.attributes.normal===void 0;if(A.isPoints){const i="PointsMaterial:"+g.uuid;let o=this.cache.get(i);o||(o=new la,Bg.prototype.copy.call(o,g),o.color.copy(g.color),o.map=g.map,o.sizeAttenuation=!1,this.cache.add(i,o)),g=o}else if(A.isLine){const i="LineBasicMaterial:"+g.uuid;let o=this.cache.get(i);o||(o=new io,Bg.prototype.copy.call(o,g),o.color.copy(g.color),o.map=g.map,this.cache.add(i,o)),g=o}if(C||B||E){let i="ClonedMaterial:"+g.uuid+":";C&&(i+="derivative-tangents:"),B&&(i+="vertex-colors:"),E&&(i+="flat-shading:");let o=this.cache.get(i);o||(o=g.clone(),B&&(o.vertexColors=!0),E&&(o.flatShading=!0),C&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(i,o),this.associations.set(o,this.associations.get(g))),g=o}A.material=g}getMaterialType(){return oo}loadMaterial(A){const I=this,g=this.json,C=this.extensions,B=g.materials[A];let E;const i={},o=B.extensions||{},t=[];if(o[VA.KHR_MATERIALS_UNLIT]){const a=C[VA.KHR_MATERIALS_UNLIT];E=a.getMaterialType(),t.push(a.extendParams(i,B,I))}else{const a=B.pbrMetallicRoughness||{};if(i.color=new hA(1,1,1),i.opacity=1,Array.isArray(a.baseColorFactor)){const s=a.baseColorFactor;i.color.fromArray(s),i.opacity=s[3]}a.baseColorTexture!==void 0&&t.push(I.assignTexture(i,"map",a.baseColorTexture,NA)),i.metalness=a.metallicFactor!==void 0?a.metallicFactor:1,i.roughness=a.roughnessFactor!==void 0?a.roughnessFactor:1,a.metallicRoughnessTexture!==void 0&&(t.push(I.assignTexture(i,"metalnessMap",a.metallicRoughnessTexture)),t.push(I.assignTexture(i,"roughnessMap",a.metallicRoughnessTexture))),E=this._invokeOne(function(s){return s.getMaterialType&&s.getMaterialType(A)}),t.push(Promise.all(this._invokeAll(function(s){return s.extendMaterialParams&&s.extendMaterialParams(A,i)})))}B.doubleSided===!0&&(i.side=og);const e=B.alphaMode||yi.OPAQUE;if(e===yi.BLEND?(i.transparent=!0,i.depthWrite=!1):(i.transparent=!1,e===yi.MASK&&(i.alphaTest=B.alphaCutoff!==void 0?B.alphaCutoff:.5)),B.normalTexture!==void 0&&E!==PI&&(t.push(I.assignTexture(i,"normalMap",B.normalTexture)),i.normalScale=new xA(1,1),B.normalTexture.scale!==void 0)){const a=B.normalTexture.scale;i.normalScale.set(a,a)}return B.occlusionTexture!==void 0&&E!==PI&&(t.push(I.assignTexture(i,"aoMap",B.occlusionTexture)),B.occlusionTexture.strength!==void 0&&(i.aoMapIntensity=B.occlusionTexture.strength)),B.emissiveFactor!==void 0&&E!==PI&&(i.emissive=new hA().fromArray(B.emissiveFactor)),B.emissiveTexture!==void 0&&E!==PI&&t.push(I.assignTexture(i,"emissiveMap",B.emissiveTexture,NA)),Promise.all(t).then(function(){const a=new E(i);return B.name&&(a.name=B.name),iC(a,B),I.associations.set(a,{materials:A}),B.extensions&&JC(C,a,B),a})}createUniqueName(A){const I=zA.sanitizeNodeName(A||"");return I in this.nodeNamesUsed?I+"_"+ ++this.nodeNamesUsed[I]:(this.nodeNamesUsed[I]=0,I)}loadGeometries(A){const I=this,g=this.extensions,C=this.primitiveCache;function B(i){return g[VA.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(i,I).then(function(o){return ue(o,i,I)})}const E=[];for(let i=0,o=A.length;i<o;i++){const t=A[i],e=YS(t),a=C[e];if(a)E.push(a.promise);else{let s;t.extensions&&t.extensions[VA.KHR_DRACO_MESH_COMPRESSION]?s=B(t):s=ue(new jI,t,I),C[e]={primitive:t,promise:s},E.push(s)}}return Promise.all(E)}loadMesh(A){const I=this,g=this.json,C=this.extensions,B=g.meshes[A],E=B.primitives,i=[];for(let o=0,t=E.length;o<t;o++){const e=E[o].material===void 0?pS(this.cache):this.getDependency("material",E[o].material);i.push(e)}return i.push(I.loadGeometries(E)),Promise.all(i).then(function(o){const t=o.slice(0,o.length-1),e=o[o.length-1],a=[];for(let D=0,c=e.length;D<c;D++){const w=e[D],h=E[D];let n;const l=t[D];if(h.mode===ig.TRIANGLES||h.mode===ig.TRIANGLE_STRIP||h.mode===ig.TRIANGLE_FAN||h.mode===void 0)n=B.isSkinnedMesh===!0?new ka(w,l):new tI(w,l),n.isSkinnedMesh===!0&&n.normalizeSkinWeights(),h.mode===ig.TRIANGLE_STRIP?n.geometry=de(n.geometry,ga):h.mode===ig.TRIANGLE_FAN&&(n.geometry=de(n.geometry,qi));else if(h.mode===ig.LINES)n=new IG(w,l);else if(h.mode===ig.LINE_STRIP)n=new lE(w,l);else if(h.mode===ig.LINE_LOOP)n=new gG(w,l);else if(h.mode===ig.POINTS)n=new CG(w,l);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+h.mode);Object.keys(n.geometry.morphAttributes).length>0&&LS(n,B),n.name=I.createUniqueName(B.name||"mesh_"+A),iC(n,B),h.extensions&&JC(C,n,h),I.assignFinalMaterial(n),a.push(n)}for(let D=0,c=a.length;D<c;D++)I.associations.set(a[D],{meshes:A,primitives:D});if(a.length===1)return B.extensions&&JC(C,a[0],B),a[0];const s=new Rg;B.extensions&&JC(C,s,B),I.associations.set(s,{meshes:A});for(let D=0,c=a.length;D<c;D++)s.add(a[D]);return s})}loadCamera(A){let I;const g=this.json.cameras[A],C=g[g.type];if(!C){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return g.type==="perspective"?I=new xI(lg.radToDeg(C.yfov),C.aspectRatio||1,C.znear||1,C.zfar||2e6):g.type==="orthographic"&&(I=new GE(-C.xmag,C.xmag,C.ymag,-C.ymag,C.znear,C.zfar)),g.name&&(I.name=this.createUniqueName(g.name)),iC(I,g),Promise.resolve(I)}loadSkin(A){const I=this.json.skins[A],g=[];for(let C=0,B=I.joints.length;C<B;C++)g.push(this._loadNodeShallow(I.joints[C]));return I.inverseBindMatrices!==void 0?g.push(this.getDependency("accessor",I.inverseBindMatrices)):g.push(null),Promise.all(g).then(function(C){const B=C.pop(),E=C,i=[],o=[];for(let t=0,e=E.length;t<e;t++){const a=E[t];if(a){i.push(a);const s=new GA;B!==null&&s.fromArray(B.array,t*16),o.push(s)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',I.joints[t])}return new kE(i,o)})}loadAnimation(A){const g=this.json.animations[A],C=g.name?g.name:"animation_"+A,B=[],E=[],i=[],o=[],t=[];for(let e=0,a=g.channels.length;e<a;e++){const s=g.channels[e],D=g.samplers[s.sampler],c=s.target,w=c.node,h=g.parameters!==void 0?g.parameters[D.input]:D.input,n=g.parameters!==void 0?g.parameters[D.output]:D.output;c.node!==void 0&&(B.push(this.getDependency("node",w)),E.push(this.getDependency("accessor",h)),i.push(this.getDependency("accessor",n)),o.push(D),t.push(c))}return Promise.all([Promise.all(B),Promise.all(E),Promise.all(i),Promise.all(o),Promise.all(t)]).then(function(e){const a=e[0],s=e[1],D=e[2],c=e[3],w=e[4],h=[];for(let n=0,l=a.length;n<l;n++){const G=a[n],M=s[n],U=D[n],J=c[n],q=w[n];if(G===void 0)continue;G.updateMatrix();let p;switch(QC[q.path]){case QC.weights:p=MB;break;case QC.rotation:p=hC;break;case QC.position:case QC.scale:default:p=UB;break}const S=G.name?G.name:G.uuid,N=J.interpolation!==void 0?qS[J.interpolation]:kB,H=[];QC[q.path]===QC.weights?G.traverse(function(f){f.morphTargetInfluences&&H.push(f.name?f.name:f.uuid)}):H.push(S);let _=U.array;if(U.normalized){const f=xi(_.constructor),x=new Float32Array(_.length);for(let O=0,z=_.length;O<z;O++)x[O]=_[O]*f;_=x}for(let f=0,x=H.length;f<x;f++){const O=new p(H[f]+"."+QC[q.path],M.array,_,N);J.interpolation==="CUBICSPLINE"&&(O.createInterpolant=function(j){const X=this instanceof hC?RS:va;return new X(this.times,this.values,this.getValueSize()/3,j)},O.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),h.push(O)}}return new Na(C,void 0,h)})}createNodeMesh(A){const I=this.json,g=this,C=I.nodes[A];return C.mesh===void 0?null:g.getDependency("mesh",C.mesh).then(function(B){const E=g._getNodeRef(g.meshCache,C.mesh,B);return C.weights!==void 0&&E.traverse(function(i){if(i.isMesh)for(let o=0,t=C.weights.length;o<t;o++)i.morphTargetInfluences[o]=C.weights[o]}),E})}loadNode(A){const I=this.json,g=this,C=I.nodes[A],B=g._loadNodeShallow(A),E=[],i=C.children||[];for(let t=0,e=i.length;t<e;t++)E.push(g.getDependency("node",i[t]));const o=C.skin===void 0?Promise.resolve(null):g.getDependency("skin",C.skin);return Promise.all([B,Promise.all(E),o]).then(function(t){const e=t[0],a=t[1],s=t[2];s!==null&&e.traverse(function(D){D.isSkinnedMesh&&D.bind(s,uS)});for(let D=0,c=a.length;D<c;D++)e.add(a[D]);return e})}_loadNodeShallow(A){const I=this.json,g=this.extensions,C=this;if(this.nodeCache[A]!==void 0)return this.nodeCache[A];const B=I.nodes[A],E=B.name?C.createUniqueName(B.name):"",i=[],o=C._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(A)});return o&&i.push(o),B.camera!==void 0&&i.push(C.getDependency("camera",B.camera).then(function(t){return C._getNodeRef(C.cameraCache,B.camera,t)})),C._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(A)}).forEach(function(t){i.push(t)}),this.nodeCache[A]=Promise.all(i).then(function(t){let e;if(B.isBone===!0?e=new IE:t.length>1?e=new Rg:t.length===1?e=t[0]:e=new BI,e!==t[0])for(let a=0,s=t.length;a<s;a++)e.add(t[a]);if(B.name&&(e.userData.name=B.name,e.name=E),iC(e,B),B.extensions&&JC(g,e,B),B.matrix!==void 0){const a=new GA;a.fromArray(B.matrix),e.applyMatrix4(a)}else B.translation!==void 0&&e.position.fromArray(B.translation),B.rotation!==void 0&&e.quaternion.fromArray(B.rotation),B.scale!==void 0&&e.scale.fromArray(B.scale);return C.associations.has(e)||C.associations.set(e,{}),C.associations.get(e).nodes=A,e}),this.nodeCache[A]}loadScene(A){const I=this.extensions,g=this.json.scenes[A],C=this,B=new Rg;g.name&&(B.name=C.createUniqueName(g.name)),iC(B,g),g.extensions&&JC(I,B,g);const E=g.nodes||[],i=[];for(let o=0,t=E.length;o<t;o++)i.push(C.getDependency("node",E[o]));return Promise.all(i).then(function(o){for(let e=0,a=o.length;e<a;e++)B.add(o[e]);const t=e=>{const a=new Map;for(const[s,D]of C.associations)(s instanceof Bg||s instanceof KI)&&a.set(s,D);return e.traverse(s=>{const D=C.associations.get(s);D!=null&&a.set(s,D)}),a};return C.associations=t(B),B})}}function mS(Q,A,I){const g=A.attributes,C=new Ug;if(g.POSITION!==void 0){const i=I.json.accessors[g.POSITION],o=i.min,t=i.max;if(o!==void 0&&t!==void 0){if(C.set(new F(o[0],o[1],o[2]),new F(t[0],t[1],t[2])),i.normalized){const e=xi(cB[i.componentType]);C.min.multiplyScalar(e),C.max.multiplyScalar(e)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const B=A.targets;if(B!==void 0){const i=new F,o=new F;for(let t=0,e=B.length;t<e;t++){const a=B[t];if(a.POSITION!==void 0){const s=I.json.accessors[a.POSITION],D=s.min,c=s.max;if(D!==void 0&&c!==void 0){if(o.setX(Math.max(Math.abs(D[0]),Math.abs(c[0]))),o.setY(Math.max(Math.abs(D[1]),Math.abs(c[1]))),o.setZ(Math.max(Math.abs(D[2]),Math.abs(c[2]))),s.normalized){const w=xi(cB[s.componentType]);o.multiplyScalar(w)}i.max(o)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}C.expandByVector(i)}Q.boundingBox=C;const E=new Yg;C.getCenter(E.center),E.radius=C.min.distanceTo(C.max)/2,Q.boundingSphere=E}function ue(Q,A,I){const g=A.attributes,C=[];function B(E,i){return I.getDependency("accessor",E).then(function(o){Q.setAttribute(i,o)})}for(const E in g){const i=Ti[E]||E.toLowerCase();i in Q.attributes||C.push(B(g[E],i))}if(A.indices!==void 0&&!Q.index){const E=I.getDependency("accessor",A.indices).then(function(i){Q.setIndex(i)});C.push(E)}return iC(Q,A),mS(Q,A,I),Promise.all(C).then(function(){return A.targets!==void 0?dS(Q,A.targets,I):Q})}class TS{constructor(){this.walking=new Audio("Audio/walkingsoft.mp3"),this.walking.loop=!0}music(){}hit(){this.play("Audio/shoot.mp3",!1,.8*TUNABLE_.volume)}shoot(){this.play("Audio/hit.mp3",!1,.1*TUNABLE_VARIABLES.volume)}startWalking(){}stopWalking(){}play(A,I,g){const C=new Audio(A);C.loop=I,C.volume=g,C.play()}}function He(Q){const A={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"},I=/[&<>"'/]/ig;return Q.replace(I,g=>A[g])}class xS{constructor(A){const{movementSpeed:I,playerName:g,jumpHeight:C,FOV:B,gravity:E,volume:i,sensitivity:o,teamKillEnabled:t,thirdPerson:e,health:a,respawnTime:s,headShotDamage:D,shotDamage:c}=A;this.variableNames=["movementSpeed","playerName","jumpHeight","FOV","gravity","volume","sensitivity","thirdPerson","health","respawnTime","headShotDamage","shotDamage"],this.set={movementSpeed:this.setMovementSpeed,playerName:this.setPlayerName,jumpHeight:this.setJumpHeight,FOV:this.setFOV,gravity:this.setGravity,volume:this.setVolume,sensitivity:this.setSensitivity,thirdPerson:this.setThirdPerson,health:this.setHealth,respawnTime:this.setRespawnTime,headShotDamage:this.setHeadShotDamage,shotDamage:this.setShotDamage},this.movementSpeed=I,this.playerName=g,this.jumpHeight=C,this.FOV=B,this.gravity=E,this.volume=i,this.sensitivity=o,this.teamKillEnabled=t,this.thirdPerson=e,this.health=a,this.respawnTime=s,this.headShotDamage=D,this.shotDamage=c}setThirdPerson(A){const I=A==="true";LA.thirdPerson=I}setRespawnTime(A){if(A===""||isNaN(A))return!1;LA.respawnTime=A}setHeadShotDamage(A){if(A===""||isNaN(A))return!1;LA.headShotDamage=A}setShotDamage(A){if(A===""||isNaN(A))return!1;LA.shotDamage=A}setHealth(A){if(A===""||isNaN(A))return!1;LA.health=A}setSensitivity(A){if(A===""||isNaN(A))return!1;LA.sensitivity=A}setFOV(A){if(A===""||isNaN(A))return!1;LA.FOV=A,camera&&(camera.fov=A,camera.updateProjectionMatrix())}setPlayerName(A){if(A==="")return!1;const I=He(A);LA.playerName=He(I)}setJumpHeight(A){if(A===""||isNaN(A))return!1;LA.jumpHeight=A}setGravity(A){if(A===""||isNaN(A))return!1;LA.gravity=A}setVolume(A){if(A===""||isNaN(A))return!1;LA.volume=A/100}setMovementSpeed(A){if(A===""||isNaN(A))return!1;LA.movementSpeed=A,player&&(player.movementSpeed=A)}}const{TUNABLE_VARIABLES:LA}=new xS({movementSpeed:40,playerName:"Donut",jumpHeight:40,FOV:120,gravity:.025,volume:.5,sensitivity:1.75,teamKillEnabled:!1,thirdPerson:!1,health:100,headShotDamage:40,shotDamage:30,respawnTime:3});function OS(){const Q=new xI(LA.FOV,window.innerWidth/window.innerHeight,.1,1e4);return Q.position.z=5,Q.position.y+=.7,Q.fov=120,Q.updateProjectionMatrix(),Q.rotateY(180*Math.PI/180),Q.position.y-=1,Q}function bS(){const Q=new Sa;return Q.shadowMap.enabled=!0,Q.shadowMap.type=Ze,Q.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(Q.domElement),Q}function vS(Q){const A=new CE("white",.4);A.position.set(30,100,0),A.rotateZ(3.14/4),A.shadowMapWidth=4096,A.shadowMapHeight=4096,A.castShadow=!0,Q.add(A);const I=new Ra("white",.5);Q.add(I)}function Ui(){return new Date().getTime()}function ZS(Q,A,I,g){let C=Math.random(),B=Math.random(),E=2*Math.PI*C,i=Math.acos(2*B-1),o=Q+g*Math.sin(i)*Math.cos(E),t=A+g*Math.sin(i)*Math.sin(E),e=I+g*Math.cos(i);return new F(o,t,e)}function PS(Q,A,I){const g=new yg(Q.x*2,Q.y*2,Q.z*2),C=new PI({color:"green",wireframe:!0}),B=new tI(g,C);B.position.copy(A),B.quaternion.copy(I),Dg.scene.add(B)}function Za(Q){const A=new F(0,0,0);return Q.getSize(A).multiplyScalar(.5),A}class WS{constructor(A,I,g,C){this.scene=I,this.gltfLoader=C,this.RAPIER=A,this.physicsWorld=g,this.spawnLocations=[],this.levelObjects=[],this.levelBBOX=[],this.center=new Rg,this.loadBackgroundColor(),this.loadStars(100),this.loadLevelObj()}loadCameraTexture(){const A=new rB;this.scene.background=A.load("Textures/original.png")}loadBackgroundColor(){new rB,this.scene.background=new hA("rgba(0,10,10)")}loadStars(A){for(let I=0;I<A;I++){const g=Math.max(100,1e3*Math.random()),C=ZS(0,0,0,g),B=new $B(1,10,10),E=new PI({color:"#28ebdb"}),i=new tI(B,E);i.position.copy(C),i.scale.setScalar(Math.random()),this.center.add(i)}this.scene.add(this.center)}loadSkySphere(){const A=new $B(1e3,25,25),g=new rB().load("Textures/sky.jpeg"),C=new hB({map:g,side:BackSide}),B=new tI(A,C);B.rotateZ(Math.PI/2),this.scene.add(B)}loadSkyBox(){this.scene.background=new Me().setPath("Textures/interstellar_skybox/").load(["xpos.png","xneg.png","ypos.png","yneg.png","zpos.png","zneg.png"])}loadSkyBox2(){this.scene.background=new Me().setPath("Textures/SkyboxTextures/").load(["lf.png","rt.png","up.png","dn.png","ft.png","bk.png"])}loadComplexLevel(){const A=new zB(30,30),I=new hB({color:"#564E58",side:og}),g=new tI(A,I);this.object=g,g.rotateX(Math.PI/2),this.scene.add(g),this.levelObjects.push(g);const C=new yg(5,5,5),B=new hB({color:"#904E55"}),E=new tI(C,B);this.levelObjects.push(E),this.scene.add(E)}loadSimpleLevel(){const A=new zB(1e3,1e3),I=new to({color:2453773,side:og}),g=new tI(A,I);this.object=g,this.levelObjects.push(g),g.rotateX(Math.PI/2),this.scene.add(g)}loadLevelObj(){this.gltfLoader.load("Models/Map3.gltf",A=>{this.object=A.scene,A.scene.updateMatrixWorld(!0),this.object.traverse(I=>{if(I.isMesh)if(I.name==="Ground"&&(I.receiveShadow=!0,I.castShadow=!1),I.name.startsWith("Spawn"))this.spawnLocations.push(I.position);else{I.geometry.computeBoundingBox(),I.updateMatrixWorld(!0);let g=Za(I.geometry.boundingBox);g.x*=I.scale.x,g.y*=I.scale.y,g.z*=I.scale.z;let C=new this.RAPIER.ColliderDesc(new this.RAPIER.Cuboid(g.x,g.y,g.z)).setTranslation(I.position.x,I.position.y,I.position.z).setRotation(I.quaternion).setFriction(.1).setCollisionGroups(65543);this.physicsWorld.createCollider(C)}}),this.scene.add(this.object)},function(A){console.log(A.loaded/A.total*100+"% loaded")},function(A){console.log("An error happened")})}update(A){this.center.rotateY(.01*A)}}class Oi{constructor(){this.html=document.getElementById("HUD"),this.healthBar=document.getElementById("healthBar"),this.respawnScreen=document.getElementById("respawnScreen")}updateHealthBar(A){this.healthBar.style.width=A/LA.health*30+"%"}hideHUD(){this.html.style.display="none"}showHUD(){this.html.style.display="block"}static hideHUD(){document.getElementById("HUD").style.display="none"}static showHUD(){document.getElementById("HUD").style.display="block"}hideHealthBar(){this.healthBar.style.display="none"}showHealthBar(){this.healthBar.style.display="block"}hideRespawnScreen(){this.respawnScreen.style.display="none"}showRespawnScreen(){this.respawnScreen.style.display="block"}respawnTimer(A){this.respawnScreen.innerHTML="Respawning... "+Math.round(A)}onRespawn(){this.showHealthBar(),this.hideRespawnScreen()}onDeath(){this.hideHealthBar(),this.showRespawnScreen()}}class Pa{constructor(A){this.player=A,this.inventory=[],this.pointer=0}add(A){this.inventory.length===0&&(A.pickedUp=!0,this.inventory.push(A),this.equippedItem=A)}next(A){this.pointer++,player.scene.remove(this.inventory[this.pointer].model),this.pointer===this.inventory.length&&(this.pointer=0),player.gunBarrel=this.inventory[this.pointer].model,player.rightArm.add(player.gunBarrel)}}class me{constructor(A,I){HE(this,"gunBarrel",new BI);HE(this,"head",new BI);this.id=A,this.inventory=new Pa,I&&(this.itemToAdd=I),this.velocity=new F(0,0,0),this.health=LA.health,this.spawnedEntities=[],this.score=0,this.loadModel()}loadModel(){const A=new to({color:"purple"});new Ha().load("Models/PossibleCharacter2.fbx",I=>{this.object=I,I.scale.setScalar(.007),I.c=this,I.isEnemy=!0,I.traverse(g=>{g.c=this,g.isEnemy=!0,g.isMesh&&(g.material=A,g.castShadow=!0),g.name==="Cube.001"&&(this.head=g),g.name==="RightShoulder"&&(this.rightArm=g,this.itemToAdd&&(this.inventory.add(this.itemToAdd),this.itemToAdd.pickedUpByConnectedPlayer(this.id))),g.isMesh&&(g.castShadow=!0)}),hE().add(I)},I=>1+1,I=>console.log(I))}setPos(A){this.object&&this.object.position.copy(A)}setVelocity(A){this.object&&this.velocity.copy(A)}setTeam(A){const I=dE();this.team=A,I.updateScores(!0)}setEquippedWeapon(A){this.inventory.add(A)}setQuaternion(A){this.object&&this.object.rotation.copy(A)}moveRightArm(A){if(!this.rightArm)return;const I=new F(A.x,A.y,A.z);this.rightArm.lookAt(I.multiplyScalar(300)),this.rightArm.rotateX(-Math.PI/180*90)}shoot(A){new F(A.x,A.y,A.z),this.shooting=!0,this.gunBarrel.updateMatrixWorld(!0);let I=new F;this.gunBarrel.getWorldPosition(I),this.spawnedEntities.push(bullet),this.shooting=!0}moveForward(A){let I=new F;I.setFromMatrixColumn(this.object.matrix,0),I.crossVectors(this.object.up,I),this.object.position.addScaledVector(I,A)}moveRight(A){let I=new F;I.setFromMatrixColumn(this.object.matrix,0),this.object.position.addScaledVector(I,A)}setLookQuaternion(A){this.head&&this.head.rotation.copy(A)}setHealth(A){this.health=A}move(){this.object.position.y+=this.velocity.y,this.moveForward(this.velocity.z),this.moveRight(this.velocity.x)}update(A){this.object&&this.spawnedEntities.forEach(I=>I.update?I.update(A):console.log("no update function"))}}class jS{constructor(A,I,g,C){this.webSocketHandler=C,this.type=A,this.parent=void 0,this.model=void 0,this.iconSrc=`Icons/${A}.png`,this.pickedUp=!1,this.id=I,this.position=g}pickedUpByConnectedPlayer(A){this.pickedup=!0;let I=new F;this.heldBy=this.webSocketHandler.connectedPlayers[A],this.heldBy.rightArm.getWorldPosition(I),this.model.position.copy(I)}update(){if(!this.model)return;if(this.pickedUp){let I=new F;this.heldBy.rightArm.getWorldPosition(I),this.model.position.copy(I),this.allignItem();return}const A=zg();this.intersectsPlayer(A)?(this.model.rotation.y=0,document.getElementById("equipedItem").append(this.iconElement),this.webSocketHandler.sendMessage({action:"ITEM_PICKUP",itemId:this.id}),this.heldBy=A,A.inventory.add(this)):this.model.rotation.y+=.01}fire(){}spawn(){}spawnRocket(){}directionalVelocity(){this.model.updateMatrixWorld(!0);let A=new F(0,0,0);return TC().getWorldDirection(A),A}intersectsPlayer(A){return A?A.object.position.distanceTo(this.model.position)<this.pickupRadius:!1}allignItem(){let A=new F(0,0,0);TC().getWorldDirection(A),this.model.lookAt(A.multiplyScalar(1e10)),this.model.rotateX(Math.PI/180*90)}}class Te extends jS{constructor(A="Rocket",I,g,C){super(A="Rocket",I,g,C),this.RAPIER=Us(),this.physicsWorld=Ns(),this.rocketGeometry=new yg(1,1,1),this.rocketMaterial=new PI({color:16711680}),this.projectiles=[],this.explosions=[],this.explosionTexture=new rB().load("../Icons/explosion.png"),this.coolDownTimer=0}fire(A){if(super.fire(),this.coolDownTimer>0)return;this.coolDownTimer=4,this.model.material.color=new hA("red");const I=zg();this.heldBy===I&&this.webSocketHandler.sendMessage({action:"PROJECTILE_DATA",projectileVelocity:this.directionalVelocity(),itemId:this.id});const g=new tI(this.rocketGeometry,this.rocketMaterial);let C=new this.RAPIER.RigidBodyDesc(this.RAPIER.RigidBodyType.Dynamic).setTranslation(...this.model.position).setRotation(this.model.quaternion).setGravityScale(3);const B=this.physicsWorld.createRigidBody(C);let E=this.RAPIER.ColliderDesc.cuboid(1,1,1).setDensity(1.3).setFriction(.1).setCollisionGroups(262145);this.physicsWorld.createCollider(E,B),this.projectiles.push({mesh:g,rigidBody:B}),g.position.copy(this.model.position),g.geometry.computeBoundingBox(),hE().add(g),g.userData.velocity=A?new F(A.x,A.y,A.z):this.directionalVelocity();const i=g.userData.velocity;B.addForce(i.multiplyScalar(2e3),!0),A||I.characterController.velocity.add(i.multiply(new F(1e-4,-5e-4,1e-4)));const o=new Ug;o.setFromObject(g),g.userData.bbox=o}update(){this.coolDownTimer-=.05,this.coolDownTimer<0&&this.model&&(this.model.material.color=new hA(4473924)),super.update(),this.projectiles=this.projectiles.filter(A=>(A.mesh.position.copy(A.rigidBody.translation()),!0)),this.explosions=this.explosions.filter(A=>(A.material.uniforms.time.value+=.02,A.material.uniforms.time.value<1?!0:(this.scene.remove(A),!1)))}explosion(A){const I=zg(),g=new nC({uniforms:{time:{value:0},uColor:{value:new hA("red")},tExplosion:{type:"t",value:this.explosionTexture}},vertexShader:this.shader(!0),fragmentShader:this.shader(!1)}),C=new $B(1,32,16),B=new tI(C,g);this.scene.add(B),this.explosions.push(B),B.position.copy(A),I.explosionDamage(A,this.heldBy,10)}spawn(){super.spawn(),this.pickupRadius=10,this.iconElement=document.createElement("img"),this.iconElement.src=this.iconSrc,this.iconElement.classList.add("icon"),this.model=this.createRocketLauncher(),this.model.position.copy(this.position),this.model.position.y+=5,this.bbox=new Ug,this.bbox.setFromObject(this.model)}createRocketLauncher(){let A=new yg(10,10,10),I=new PI({color:new hA("Blue")}),g=new tI(A,I);g.position.copy(new F(0,5,0)),g.geometry.computeBoundingBox();const C=new gE(.2,.2,1,32),B=new PI({color:4473924}),E=new tI(C,B),i=new gE(.08,.08,.5,32),o=new PI({color:8947848}),t=new tI(i,o);t.position.y=.75;const e=new yg(.1,.1,.1),a=new PI({color:2236962}),s=new tI(e,a);s.position.y=.9;const D=new yg(.1,.4,.2),c=new PI({color:6710886}),w=new tI(D,c);return w.position.y=.4,E.add(s),E.add(t),E.add(w),E.rotateZ(-Math.PI/2),E.scale.set(4,4,4),E.position.y+=8,hE().add(E),E}shader(A){return A?`   
                varying vec3 vNormal;
                varying vec3 vUv; 
                uniform float time;
                varying float noise;
                ${classic3D()}
                float turbulence( vec3 p ) {

                    float w = 100.0;
                    float t = -.65;
                  
                    for (float f = 1.0 ; f <= 10.0 ; f++ ){
                      float power = pow( 2.0, f );
                      t += abs( pnoise( vec3( power * p ), vec3( 10.0, 10.0, 10.0 ) ) / power );
                    }
                  
                    return t;
                }

                void main() {
                    vUv = position; 
                    vNormal = normalize(normalMatrix * normal); 
                    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);

                    // get a turbulent 3d noise using the normal, normal to high freq
                    noise = 10.0 *  -.10 * turbulence( .5 * normal + time);
                    // get a 3d noise using the position, low frequency
                    float b = 5.0 * pnoise( 0.05 * position + vec3( 2.0 * time ), vec3( 100.0 ) );
                    // compose both noises
                    float displacement = noise * 40.0;

                    vec3 newPosition = position + normal * (displacement * time);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
                } `:`
                #include <common>
                #include <lights_pars_begin>
                uniform vec3 uColor;
                uniform float time;
                varying vec3 vNormal;
                varying float noise;
                uniform sampler2D tExplosion;

                float random( vec3 scale, float seed ){
                    return fract( sin( dot( gl_FragCoord.xyz + seed, scale ) ) * 43758.5453 + seed ) ;
                }

                void main() {
                    // get a random offset
                    float r = .01 * random( vec3( 12.9898, 78.233, 151.7182 ), 0.0 );
                    // lookup vertically in the texture, using noise and offset
                    // to get the right RGB colour
                    vec2 tPos = vec2( 0, 1.3 * noise + r );
                    vec4 color = texture2D( tExplosion, tPos );
                  
                    gl_FragColor = vec4( color.rgb, 1.0 );