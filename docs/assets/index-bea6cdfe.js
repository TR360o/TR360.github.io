(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pc="158",cm=0,wu=1,um=2,Yf=1,Kf=2,li=3,pi=0,nn=1,jn=2,Ni=0,es=1,Ru=2,Cu=3,Pu=4,hm=5,sr=100,fm=101,dm=102,Lu=103,Du=104,pm=200,mm=201,gm=202,_m=203,ql=204,jl=205,vm=206,xm=207,ym=208,Mm=209,Sm=210,Tm=211,Em=212,bm=213,Am=214,wm=0,Rm=1,Cm=2,aa=3,Pm=4,Lm=5,Dm=6,Im=7,ba=0,Um=1,Om=2,Fi=0,Nm=1,Fm=2,Bm=3,km=4,zm=5,Iu="attached",Hm="detached",Zf=300,as=301,ls=302,la=303,Yl=304,Aa=306,Hi=1e3,tn=1001,ca=1002,Lt=1003,Kl=1004,ta=1005,en=1006,Jf=1007,gr=1008,Bi=1009,Gm=1010,Vm=1011,Lc=1012,$f=1013,Li=1014,hi=1015,Ys=1016,Qf=1017,ed=1018,cr=1020,Wm=1021,bn=1023,Xm=1024,qm=1025,ur=1026,cs=1027,jm=1028,td=1029,Ym=1030,nd=1031,id=1033,Xa=33776,qa=33777,ja=33778,Ya=33779,Uu=35840,Ou=35841,Nu=35842,Fu=35843,Km=36196,Bu=37492,ku=37496,zu=37808,Hu=37809,Gu=37810,Vu=37811,Wu=37812,Xu=37813,qu=37814,ju=37815,Yu=37816,Ku=37817,Zu=37818,Ju=37819,$u=37820,Qu=37821,Ka=36492,eh=36494,th=36495,Zm=36283,nh=36284,ih=36285,rh=36286,Ks=2300,us=2301,Za=2302,sh=2400,oh=2401,ah=2402,Jm=2500,$m=0,rd=1,Zl=2,sd=3e3,hr=3001,Qm=3200,eg=3201,ao=0,tg=1,An="",Ze="srgb",Ut="srgb-linear",Dc="display-p3",wa="display-p3-linear",ua="linear",at="srgb",ha="rec709",fa="p3",Cr=7680,lh=519,ng=512,ig=513,rg=514,sg=515,og=516,ag=517,lg=518,cg=519,Jl=35044,ch="300 es",$l=1035,fi=2e3,da=2001;class ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uh=1234567;const ks=Math.PI/180,hs=180/Math.PI;function In(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[s&255]+kt[s>>8&255]+kt[s>>16&255]+kt[s>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Dt(s,e,t){return Math.max(e,Math.min(t,s))}function Ic(s,e){return(s%e+e)%e}function ug(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function hg(s,e,t){return s!==e?(t-s)/(e-s):0}function zs(s,e,t){return(1-t)*s+t*e}function fg(s,e,t,n){return zs(s,e,1-Math.exp(-t*n))}function dg(s,e=1){return e-Math.abs(Ic(s,e*2)-e)}function pg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function mg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function gg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function _g(s,e){return s+Math.random()*(e-s)}function vg(s){return s*(.5-Math.random())}function xg(s){s!==void 0&&(uh=s);let e=uh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yg(s){return s*ks}function Mg(s){return s*hs}function Ql(s){return(s&s-1)===0&&s!==0}function od(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function pa(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Sg(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*_,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*_,a*c);break;case"ZYZ":s.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const zn={DEG2RAD:ks,RAD2DEG:hs,generateUUID:In,clamp:Dt,euclideanModulo:Ic,mapLinear:ug,inverseLerp:hg,lerp:zs,damp:fg,pingpong:dg,smoothstep:pg,smootherstep:mg,randInt:gg,randFloat:_g,randFloatSpread:vg,seededRandom:xg,degToRad:yg,radToDeg:Mg,isPowerOfTwo:Ql,ceilPowerOfTwo:od,floorPowerOfTwo:pa,setQuaternionFromProperEuler:Sg,normalize:nt,denormalize:Yn};class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,i,r,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],y=i[1],v=i[4],x=i[7],S=i[2],b=i[5],E=i[8];return r[0]=o*g+a*y+l*S,r[3]=o*p+a*v+l*b,r[6]=o*m+a*x+l*E,r[1]=c*g+u*y+h*S,r[4]=c*p+u*v+h*b,r[7]=c*m+u*x+h*E,r[2]=f*g+d*y+_*S,r[5]=f*p+d*v+_*b,r[8]=f*m+d*x+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ja.makeScale(e,t)),this}rotate(e){return this.premultiply(Ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ja=new He;function ad(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Zs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Tg(){const s=Zs("canvas");return s.style.display="block",s}const hh={};function Hs(s){s in hh||(hh[s]=!0,console.warn(s))}const fh=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dh=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_o={[Ut]:{transfer:ua,primaries:ha,toReference:s=>s,fromReference:s=>s},[Ze]:{transfer:at,primaries:ha,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[wa]:{transfer:ua,primaries:fa,toReference:s=>s.applyMatrix3(dh),fromReference:s=>s.applyMatrix3(fh)},[Dc]:{transfer:at,primaries:fa,toReference:s=>s.convertSRGBToLinear().applyMatrix3(dh),fromReference:s=>s.applyMatrix3(fh).convertLinearToSRGB()}},Eg=new Set([Ut,wa]),et={enabled:!0,_workingColorSpace:Ut,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Eg.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=_o[e].toReference,i=_o[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return _o[s].primaries},getTransfer:function(s){return s===An?ua:_o[s].transfer}};function ts(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $a(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Pr;class ld{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pr===void 0&&(Pr=Zs("canvas")),Pr.width=e.width,Pr.height=e.height;const n=Pr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ts(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ts(t[n]/255)*255):t[n]=ts(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bg=0;class cd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=In(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Qa(i[o].image)):r.push(Qa(i[o]))}else r=Qa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Qa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ld.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ag=0;class bt extends ys{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=tn,i=tn,r=en,o=gr,a=bn,l=Bi,c=bt.DEFAULT_ANISOTROPY,u=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=In(),this.name="",this.source=new cd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===hr?Ze:An),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hi:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hi:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ze?hr:sd}set encoding(e){Hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===hr?Ze:An}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Zf;bt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,i=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(d+1)/2,S=(m+1)/2,b=(u+f)/4,E=(h+g)/4,C=(_+p)/4;return v>x&&v>S?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=b/n,r=E/n):x>S?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=b/i,r=C/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=E/r,i=C/r),this.set(n,i,r,t),this}let y=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(h-g)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wg extends ys{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Hs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===hr?Ze:An),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _r extends wg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ud extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rg extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let p=1-a;const m=l*f+c*d+u*_+h*g,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const S=Math.sqrt(v),b=Math.atan2(S,m*y);p=Math.sin(p*b)/S,a=Math.sin(a*b)/S}const x=a*y;if(l=l*p+f*x,c=c*p+d*x,u=u*p+_*x,h=h*p+g*x,p===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ph.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const el=new L,ph=new Rn;class _i{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vo.copy(n.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),xo.subVectors(this.max,ws),Lr.subVectors(e.a,ws),Dr.subVectors(e.b,ws),Ir.subVectors(e.c,ws),xi.subVectors(Dr,Lr),yi.subVectors(Ir,Dr),Ki.subVectors(Lr,Ir);let t=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Ki.z,Ki.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Ki.z,0,-Ki.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Ki.y,Ki.x,0];return!tl(t,Lr,Dr,Ir,xo)||(t=[1,0,0,0,1,0,0,0,1],!tl(t,Lr,Dr,Ir,xo))?!1:(yo.crossVectors(xi,yi),t=[yo.x,yo.y,yo.z],tl(t,Lr,Dr,Ir,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new L,new L,new L,new L,new L,new L,new L,new L],On=new L,vo=new _i,Lr=new L,Dr=new L,Ir=new L,xi=new L,yi=new L,Ki=new L,ws=new L,xo=new L,yo=new L,Zi=new L;function tl(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Zi.fromArray(s,r);const a=i.x*Math.abs(Zi.x)+i.y*Math.abs(Zi.y)+i.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),u=n.dot(Zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Cg=new _i,Rs=new L,nl=new L;class Qn{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Cg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);const t=Rs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Rs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(nl)),this.expandByPoint(Rs.copy(e.center).sub(nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new L,il=new L,Mo=new L,Mi=new L,rl=new L,So=new L,sl=new L;class lo{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){il.copy(e).add(t).multiplyScalar(.5),Mo.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(il);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Mo),a=Mi.dot(this.direction),l=-Mi.dot(Mo),c=Mi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(il).addScaledVector(Mo,f),d}intersectSphere(e,t){ii.subVectors(e.center,this.origin);const n=ii.dot(this.direction),i=ii.dot(ii)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,i,r){rl.subVectors(t,e),So.subVectors(n,e),sl.crossVectors(rl,So);let o=this.direction.dot(sl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(So.crossVectors(Mi,So));if(l<0)return null;const c=a*this.direction.dot(rl.cross(Mi));if(c<0||l+c>o)return null;const u=-a*Mi.dot(sl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(e,t,n,i,r,o,a,l,c,u,h,f,d,_,g,p){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,d,_,g,p)}set(e,t,n,i,r,o,a,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ur.setFromMatrixColumn(e,0).length(),r=1/Ur.setFromMatrixColumn(e,1).length(),o=1/Ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pg,e,Lg)}lookAt(e,t,n){const i=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Si.crossVectors(n,fn),Si.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Si.crossVectors(n,fn)),Si.normalize(),To.crossVectors(fn,Si),i[0]=Si.x,i[4]=To.x,i[8]=fn.x,i[1]=Si.y,i[5]=To.y,i[9]=fn.y,i[2]=Si.z,i[6]=To.z,i[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],y=n[3],v=n[7],x=n[11],S=n[15],b=i[0],E=i[4],C=i[8],M=i[12],A=i[1],N=i[5],X=i[9],q=i[13],D=i[2],F=i[6],z=i[10],G=i[14],$=i[3],Z=i[7],Y=i[11],U=i[15];return r[0]=o*b+a*A+l*D+c*$,r[4]=o*E+a*N+l*F+c*Z,r[8]=o*C+a*X+l*z+c*Y,r[12]=o*M+a*q+l*G+c*U,r[1]=u*b+h*A+f*D+d*$,r[5]=u*E+h*N+f*F+d*Z,r[9]=u*C+h*X+f*z+d*Y,r[13]=u*M+h*q+f*G+d*U,r[2]=_*b+g*A+p*D+m*$,r[6]=_*E+g*N+p*F+m*Z,r[10]=_*C+g*X+p*z+m*Y,r[14]=_*M+g*q+p*G+m*U,r[3]=y*b+v*A+x*D+S*$,r[7]=y*E+v*N+x*F+S*Z,r[11]=y*C+v*X+x*z+S*Y,r[15]=y*M+v*q+x*G+S*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+g*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+p*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],y=h*p*c-g*f*c+g*l*d-a*p*d-h*l*m+a*f*m,v=_*f*c-u*p*c-_*l*d+o*p*d+u*l*m-o*f*m,x=u*g*c-_*h*c+_*a*d-o*g*d-u*a*m+o*h*m,S=_*h*l-u*g*l-_*a*f+o*g*f+u*a*p-o*h*p,b=t*y+n*v+i*x+r*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=y*E,e[1]=(g*f*r-h*p*r-g*i*d+n*p*d+h*i*m-n*f*m)*E,e[2]=(a*p*r-g*l*r+g*i*c-n*p*c-a*i*m+n*l*m)*E,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*E,e[4]=v*E,e[5]=(u*p*r-_*f*r+_*i*d-t*p*d-u*i*m+t*f*m)*E,e[6]=(_*l*r-o*p*r-_*i*c+t*p*c+o*i*m-t*l*m)*E,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*d+t*l*d)*E,e[8]=x*E,e[9]=(_*h*r-u*g*r-_*n*d+t*g*d+u*n*m-t*h*m)*E,e[10]=(o*g*r-_*a*r+_*n*c-t*g*c-o*n*m+t*a*m)*E,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*E,e[12]=S*E,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*p+t*h*p)*E,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*p-t*a*p)*E,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,_=r*h,g=o*u,p=o*h,m=a*h,y=l*c,v=l*u,x=l*h,S=n.x,b=n.y,E=n.z;return i[0]=(1-(g+m))*S,i[1]=(d+x)*S,i[2]=(_-v)*S,i[3]=0,i[4]=(d-x)*b,i[5]=(1-(f+m))*b,i[6]=(p+y)*b,i[7]=0,i[8]=(_+v)*E,i[9]=(p-y)*E,i[10]=(1-(f+g))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ur.set(i[0],i[1],i[2]).length();const o=Ur.set(i[4],i[5],i[6]).length(),a=Ur.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Nn.copy(this);const c=1/r,u=1/o,h=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,t.setFromRotationMatrix(Nn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=fi){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(a===fi)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===da)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=fi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),f=(t+e)*c,d=(n+i)*u;let _,g;if(a===fi)_=(o+r)*h,g=-2*h;else if(a===da)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ur=new L,Nn=new xe,Pg=new L(0,0,0),Lg=new L(1,1,1),Si=new L,To=new L,fn=new L,mh=new xe,gh=new Rn;class Cn{constructor(e=0,t=0,n=0,i=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gh.setFromEuler(this),this.setFromQuaternion(gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class Uc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dg=0;const _h=new L,Or=new Rn,ri=new xe,Eo=new L,Cs=new L,Ig=new L,Ug=new Rn,vh=new L(1,0,0),xh=new L(0,1,0),yh=new L(0,0,1),Og={type:"added"},Ng={type:"removed"};class ot extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DEFAULT_UP.clone();const e=new L,t=new Cn,n=new Rn,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xe},normalMatrix:{value:new He}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(vh,e)}rotateY(e){return this.rotateOnAxis(xh,e)}rotateZ(e){return this.rotateOnAxis(yh,e)}translateOnAxis(e,t){return _h.copy(e).applyQuaternion(this.quaternion),this.position.add(_h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vh,e)}translateY(e){return this.translateOnAxis(xh,e)}translateZ(e){return this.translateOnAxis(yh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Eo.copy(e):Eo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Cs,Eo,this.up):ri.lookAt(Eo,Cs,this.up),this.quaternion.setFromRotationMatrix(ri),i&&(ri.extractRotation(i.matrixWorld),Or.setFromRotationMatrix(ri),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Og)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ng)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,Ig),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Ug,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ot.DEFAULT_UP=new L(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new L,si=new L,ol=new L,oi=new L,Nr=new L,Fr=new L,Mh=new L,al=new L,ll=new L,cl=new L;let bo=!1;class kn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Fn.subVectors(e,t),i.cross(Fn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Fn.subVectors(i,t),si.subVectors(n,t),ol.subVectors(e,t);const o=Fn.dot(Fn),a=Fn.dot(si),l=Fn.dot(ol),c=si.dot(si),u=si.dot(ol),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,oi),oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getUV(e,t,n,i,r,o,a,l){return bo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bo=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,oi),l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l}static isFrontFacing(e,t,n,i){return Fn.subVectors(n,t),si.subVectors(e,t),Fn.cross(si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Fn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return bo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bo=!0),kn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return kn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Nr.subVectors(i,n),Fr.subVectors(r,n),al.subVectors(e,n);const l=Nr.dot(al),c=Fr.dot(al);if(l<=0&&c<=0)return t.copy(n);ll.subVectors(e,i);const u=Nr.dot(ll),h=Fr.dot(ll);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Nr,o);cl.subVectors(e,r);const d=Nr.dot(cl),_=Fr.dot(cl);if(_>=0&&d<=_)return t.copy(r);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Fr,a);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return Mh.subVectors(r,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(Mh,a);const m=1/(p+g+f);return o=g*m,a=f*m,t.copy(n).addScaledVector(Nr,o).addScaledVector(Fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function ul(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=Ic(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ul(o,r,e+1/3),this.g=ul(o,r,e),this.b=ul(o,r,e-1/3)}return et.toWorkingColorSpace(this,i),this}setStyle(e,t=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ze){const n=hd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=$a(e.r),this.g=$a(e.g),this.b=$a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ze){return et.fromWorkingColorSpace(zt.copy(this),e),Math.round(Dt(zt.r*255,0,255))*65536+Math.round(Dt(zt.g*255,0,255))*256+Math.round(Dt(zt.b*255,0,255))}getHexString(e=Ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,i=zt.g,r=zt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Ze){et.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,i=zt.b;return e!==Ze?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(Ao);const n=zs(Ti.h,Ao.h,t),i=zs(Ti.s,Ao.s,t),r=zs(Ti.l,Ao.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new ye;ye.NAMES=hd;let Fg=0;class _n extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=In(),this.name="",this.type="Material",this.blending=es,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ql,this.blendDst=jl,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ql&&(n.blendSrc=this.blendSrc),this.blendDst!==jl&&(n.blendDst=this.blendDst),this.blendEquation!==sr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==aa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class di extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new L,wo=new se;class Nt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jl,this.updateRange={offset:0,count:-1},this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wo.fromBufferAttribute(this,t),wo.applyMatrix3(e),this.setXY(t,wo.x,wo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Oc extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fd extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bg=0;const Sn=new xe,hl=new ot,Br=new L,dn=new _i,Ps=new _i,Pt=new L;class Ft extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ad(e)?fd:Oc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return hl.lookAt(e),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(dn.min,Ps.min),dn.expandByPoint(Pt),Pt.addVectors(dn.max,Ps.max),dn.expandByPoint(Pt)):(dn.expandByPoint(Ps.min),dn.expandByPoint(Ps.max))}dn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Pt.fromBufferAttribute(a,c),l&&(Br.fromBufferAttribute(e,c),Pt.add(Br)),i=Math.max(i,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new L,u[A]=new L;const h=new L,f=new L,d=new L,_=new se,g=new se,p=new se,m=new L,y=new L;function v(A,N,X){h.fromArray(i,A*3),f.fromArray(i,N*3),d.fromArray(i,X*3),_.fromArray(o,A*2),g.fromArray(o,N*2),p.fromArray(o,X*2),f.sub(h),d.sub(h),g.sub(_),p.sub(_);const q=1/(g.x*p.y-p.x*g.y);isFinite(q)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(d,-g.y).multiplyScalar(q),y.copy(d).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(q),c[A].add(m),c[N].add(m),c[X].add(m),u[A].add(y),u[N].add(y),u[X].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let A=0,N=x.length;A<N;++A){const X=x[A],q=X.start,D=X.count;for(let F=q,z=q+D;F<z;F+=3)v(n[F+0],n[F+1],n[F+2])}const S=new L,b=new L,E=new L,C=new L;function M(A){E.fromArray(r,A*3),C.copy(E);const N=c[A];S.copy(N),S.sub(E.multiplyScalar(E.dot(N))).normalize(),b.crossVectors(C,N);const q=b.dot(u[A])<0?-1:1;l[A*4]=S.x,l[A*4+1]=S.y,l[A*4+2]=S.z,l[A*4+3]=q}for(let A=0,N=x.length;A<N;++A){const X=x[A],q=X.start,D=X.count;for(let F=q,z=q+D;F<z;F+=3)M(n[F+0]),M(n[F+1]),M(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new Nt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sh=new xe,Ji=new lo,Ro=new Qn,Th=new L,kr=new L,zr=new L,Hr=new L,fl=new L,Co=new L,Po=new se,Lo=new se,Do=new se,Eh=new L,bh=new L,Ah=new L,Io=new L,Uo=new L;class gt extends ot{constructor(e=new Ft,t=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(fl.fromBufferAttribute(h,e),o?Co.addScaledVector(fl,u):Co.addScaledVector(fl.sub(t),u))}t.add(Co)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(r),Ji.copy(e.ray).recast(e.near),!(Ro.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Ro,Th)===null||Ji.origin.distanceToSquared(Th)>(e.far-e.near)**2))&&(Sh.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(Sh),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=y,S=v;x<S;x+=3){const b=a.getX(x),E=a.getX(x+1),C=a.getX(x+2);i=Oo(this,m,e,n,c,u,h,b,E,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const y=a.getX(p),v=a.getX(p+1),x=a.getX(p+2);i=Oo(this,o,e,n,c,u,h,y,v,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=y,S=v;x<S;x+=3){const b=x,E=x+1,C=x+2;i=Oo(this,m,e,n,c,u,h,b,E,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const y=p,v=p+1,x=p+2;i=Oo(this,o,e,n,c,u,h,y,v,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function kg(s,e,t,n,i,r,o,a){let l;if(e.side===nn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===pi,a),l===null)return null;Uo.copy(a),Uo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Uo);return c<t.near||c>t.far?null:{distance:c,point:Uo.clone(),object:s}}function Oo(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,kr),s.getVertexPosition(l,zr),s.getVertexPosition(c,Hr);const u=kg(s,e,t,n,kr,zr,Hr,Io);if(u){i&&(Po.fromBufferAttribute(i,a),Lo.fromBufferAttribute(i,l),Do.fromBufferAttribute(i,c),u.uv=kn.getInterpolation(Io,kr,zr,Hr,Po,Lo,Do,new se)),r&&(Po.fromBufferAttribute(r,a),Lo.fromBufferAttribute(r,l),Do.fromBufferAttribute(r,c),u.uv1=kn.getInterpolation(Io,kr,zr,Hr,Po,Lo,Do,new se),u.uv2=u.uv1),o&&(Eh.fromBufferAttribute(o,a),bh.fromBufferAttribute(o,l),Ah.fromBufferAttribute(o,c),u.normal=kn.getInterpolation(Io,kr,zr,Hr,Eh,bh,Ah,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new L,materialIndex:0};kn.getNormal(kr,zr,Hr,h.normal),u.face=h}return u}class Ms extends Ft{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(h,2));function _(g,p,m,y,v,x,S,b,E,C,M){const A=x/E,N=S/C,X=x/2,q=S/2,D=b/2,F=E+1,z=C+1;let G=0,$=0;const Z=new L;for(let Y=0;Y<z;Y++){const U=Y*N-q;for(let B=0;B<F;B++){const ce=B*A-X;Z[g]=ce*y,Z[p]=U*v,Z[m]=D,c.push(Z.x,Z.y,Z.z),Z[g]=0,Z[p]=0,Z[m]=b>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(B/E),h.push(1-Y/C),G+=1}}for(let Y=0;Y<C;Y++)for(let U=0;U<E;U++){const B=f+U+F*Y,ce=f+U+F*(Y+1),ae=f+(U+1)+F*(Y+1),fe=f+(U+1)+F*Y;l.push(B,ce,fe),l.push(ce,ae,fe),$+=6}a.addGroup(d,$,M),d+=$,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Kt(s){const e={};for(let t=0;t<s.length;t++){const n=fs(s[t]);for(const i in n)e[i]=n[i]}return e}function zg(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function dd(s){return s.getRenderTarget()===null?s.outputColorSpace:et.workingColorSpace}const Hg={clone:fs,merge:Kt};var Gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vr extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gg,this.fragmentShader=Vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=zg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pd extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ht extends pd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ks*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gr=-90,Vr=1;class Wg extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ht(Gr,Vr,e,t);i.layers=this.layers,this.add(i);const r=new Ht(Gr,Vr,e,t);r.layers=this.layers,this.add(r);const o=new Ht(Gr,Vr,e,t);o.layers=this.layers,this.add(o);const a=new Ht(Gr,Vr,e,t);a.layers=this.layers,this.add(a);const l=new Ht(Gr,Vr,e,t);l.layers=this.layers,this.add(l);const c=new Ht(Gr,Vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===da)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class md extends bt{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:as,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xg extends _r{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Hs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===hr?Ze:An),this.texture=new md(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ms(5,5,5),r=new vr({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Ni});r.uniforms.tEquirect.value=t;const o=new gt(i,r),a=t.minFilter;return t.minFilter===gr&&(t.minFilter=en),new Wg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const dl=new L,qg=new L,jg=new He;class nr{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=dl.subVectors(n,t).cross(qg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(dl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jg.getNormalMatrix(e),i=this.coplanarPoint(dl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new Qn,No=new L;class Nc{constructor(e=new nr,t=new nr,n=new nr,i=new nr,r=new nr,o=new nr){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fi){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],y=i[13],v=i[14],x=i[15];if(n[0].setComponents(l-r,f-c,p-d,x-m).normalize(),n[1].setComponents(l+r,f+c,p+d,x+m).normalize(),n[2].setComponents(l+o,f+u,p+_,x+y).normalize(),n[3].setComponents(l-o,f-u,p-_,x-y).normalize(),n[4].setComponents(l-a,f-h,p-g,x-v).normalize(),t===fi)n[5].setComponents(l+a,f+h,p+g,x+v).normalize();else if(t===da)n[5].setComponents(a,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(No.x=i.normal.x>0?e.max.x:e.min.x,No.y=i.normal.y>0?e.max.y:e.min.y,No.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Yg(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;s.bindBuffer(h,c),d.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Fc extends Ft{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const y=m*f-o;for(let v=0;v<c;v++){const x=v*h-r;_.push(x,-y,0),g.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const v=y+c*m,x=y+c*(m+1),S=y+1+c*(m+1),b=y+1+c*m;d.push(v,x,b),d.push(x,S,b)}this.setIndex(d),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(g,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$g=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,e_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,n_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,s_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,o_=`#ifdef USE_IRIDESCENCE
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
#endif`,a_=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,g_=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,__=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v_=`vec3 transformedNormal = objectNormal;
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
#endif`,x_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T_="gl_FragColor = linearToOutputTexel( gl_FragColor );",E_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,b_=`#ifdef USE_ENVMAP
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
#endif`,A_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w_=`#ifdef USE_ENVMAP
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
#endif`,R_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C_=`#ifdef USE_ENVMAP
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
#endif`,P_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U_=`#ifdef USE_GRADIENTMAP
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
}`,O_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,N_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,z_=`#ifdef USE_ENVMAP
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
#endif`,H_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#endif`,q_=`struct PhysicalMaterial {
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,j_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Y_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,K_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Q_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,e0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,i0=`#if defined( USE_POINTS_UV )
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
#endif`,r0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a0=`#ifdef USE_MORPHNORMALS
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
#endif`,l0=`#ifdef USE_MORPHTARGETS
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
#endif`,c0=`#ifdef USE_MORPHTARGETS
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
#endif`,u0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,h0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m0=`#ifdef USE_NORMALMAP
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
#endif`,g0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,S0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L0=`float getShadowMask() {
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
}`,D0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,U0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O0=`#ifdef USE_SKINNING
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
#endif`,N0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z0=`#ifdef USE_TRANSMISSION
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
#endif`,H0=`#ifdef USE_TRANSMISSION
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <colorspace_fragment>
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`#include <common>
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
}`,Q0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ev=`#define DISTANCE
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
}`,tv=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rv=`uniform float scale;
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
}`,sv=`uniform vec3 diffuse;
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ov=`#include <common>
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
}`,av=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lv=`#define LAMBERT
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
}`,cv=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`#define MATCAP
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
}`,hv=`#define MATCAP
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`#define NORMAL
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
}`,dv=`#define NORMAL
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
}`,pv=`#define PHONG
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
}`,mv=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gv=`#define STANDARD
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
}`,_v=`#define STANDARD
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vv=`#define TOON
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
}`,xv=`#define TOON
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yv=`uniform float size;
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
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sv=`#include <common>
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
}`,Tv=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ev=`uniform float rotation;
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
}`,bv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Kg,alphahash_pars_fragment:Zg,alphamap_fragment:Jg,alphamap_pars_fragment:$g,alphatest_fragment:Qg,alphatest_pars_fragment:e_,aomap_fragment:t_,aomap_pars_fragment:n_,begin_vertex:i_,beginnormal_vertex:r_,bsdfs:s_,iridescence_fragment:o_,bumpmap_pars_fragment:a_,clipping_planes_fragment:l_,clipping_planes_pars_fragment:c_,clipping_planes_pars_vertex:u_,clipping_planes_vertex:h_,color_fragment:f_,color_pars_fragment:d_,color_pars_vertex:p_,color_vertex:m_,common:g_,cube_uv_reflection_fragment:__,defaultnormal_vertex:v_,displacementmap_pars_vertex:x_,displacementmap_vertex:y_,emissivemap_fragment:M_,emissivemap_pars_fragment:S_,colorspace_fragment:T_,colorspace_pars_fragment:E_,envmap_fragment:b_,envmap_common_pars_fragment:A_,envmap_pars_fragment:w_,envmap_pars_vertex:R_,envmap_physical_pars_fragment:z_,envmap_vertex:C_,fog_vertex:P_,fog_pars_vertex:L_,fog_fragment:D_,fog_pars_fragment:I_,gradientmap_pars_fragment:U_,lightmap_fragment:O_,lightmap_pars_fragment:N_,lights_lambert_fragment:F_,lights_lambert_pars_fragment:B_,lights_pars_begin:k_,lights_toon_fragment:H_,lights_toon_pars_fragment:G_,lights_phong_fragment:V_,lights_phong_pars_fragment:W_,lights_physical_fragment:X_,lights_physical_pars_fragment:q_,lights_fragment_begin:j_,lights_fragment_maps:Y_,lights_fragment_end:K_,logdepthbuf_fragment:Z_,logdepthbuf_pars_fragment:J_,logdepthbuf_pars_vertex:$_,logdepthbuf_vertex:Q_,map_fragment:e0,map_pars_fragment:t0,map_particle_fragment:n0,map_particle_pars_fragment:i0,metalnessmap_fragment:r0,metalnessmap_pars_fragment:s0,morphcolor_vertex:o0,morphnormal_vertex:a0,morphtarget_pars_vertex:l0,morphtarget_vertex:c0,normal_fragment_begin:u0,normal_fragment_maps:h0,normal_pars_fragment:f0,normal_pars_vertex:d0,normal_vertex:p0,normalmap_pars_fragment:m0,clearcoat_normal_fragment_begin:g0,clearcoat_normal_fragment_maps:_0,clearcoat_pars_fragment:v0,iridescence_pars_fragment:x0,opaque_fragment:y0,packing:M0,premultiplied_alpha_fragment:S0,project_vertex:T0,dithering_fragment:E0,dithering_pars_fragment:b0,roughnessmap_fragment:A0,roughnessmap_pars_fragment:w0,shadowmap_pars_fragment:R0,shadowmap_pars_vertex:C0,shadowmap_vertex:P0,shadowmask_pars_fragment:L0,skinbase_vertex:D0,skinning_pars_vertex:I0,skinning_vertex:U0,skinnormal_vertex:O0,specularmap_fragment:N0,specularmap_pars_fragment:F0,tonemapping_fragment:B0,tonemapping_pars_fragment:k0,transmission_fragment:z0,transmission_pars_fragment:H0,uv_pars_fragment:G0,uv_pars_vertex:V0,uv_vertex:W0,worldpos_vertex:X0,background_vert:q0,background_frag:j0,backgroundCube_vert:Y0,backgroundCube_frag:K0,cube_vert:Z0,cube_frag:J0,depth_vert:$0,depth_frag:Q0,distanceRGBA_vert:ev,distanceRGBA_frag:tv,equirect_vert:nv,equirect_frag:iv,linedashed_vert:rv,linedashed_frag:sv,meshbasic_vert:ov,meshbasic_frag:av,meshlambert_vert:lv,meshlambert_frag:cv,meshmatcap_vert:uv,meshmatcap_frag:hv,meshnormal_vert:fv,meshnormal_frag:dv,meshphong_vert:pv,meshphong_frag:mv,meshphysical_vert:gv,meshphysical_frag:_v,meshtoon_vert:vv,meshtoon_frag:xv,points_vert:yv,points_frag:Mv,shadow_vert:Sv,shadow_frag:Tv,sprite_vert:Ev,sprite_frag:bv},he={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},qn={basic:{uniforms:Kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ye(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Kt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Kt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new ye(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Kt([he.points,he.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Kt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Kt([he.common,he.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Kt([he.sprite,he.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Kt([he.common,he.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Kt([he.lights,he.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};qn.physical={uniforms:Kt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Fo={r:0,b:0,g:0};function Av(s,e,t,n,i,r,o){const a=new ye(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function _(p,m){let y=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),y=!0);const x=s.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Aa)?(u===void 0&&(u=new gt(new Ms(1,1,1),new vr({name:"BackgroundCubeMaterial",uniforms:fs(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=et.getTransfer(v.colorSpace)!==at,(h!==v||f!==v.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new gt(new Fc(2,2),new vr({name:"BackgroundMaterial",uniforms:fs(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=et.getTransfer(v.colorSpace)!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,m){p.getRGB(Fo,dd(s)),n.buffers.color.setClear(Fo.r,Fo.g,Fo.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function wv(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function h(D,F,z,G,$){let Z=!1;if(o){const Y=g(G,z,F);c!==Y&&(c=Y,d(c.object)),Z=m(D,G,z,$),Z&&y(D,G,z,$)}else{const Y=F.wireframe===!0;(c.geometry!==G.id||c.program!==z.id||c.wireframe!==Y)&&(c.geometry=G.id,c.program=z.id,c.wireframe=Y,Z=!0)}$!==null&&t.update($,s.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,C(D,F,z,G),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function _(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function g(D,F,z){const G=z.wireframe===!0;let $=a[D.id];$===void 0&&($={},a[D.id]=$);let Z=$[F.id];Z===void 0&&(Z={},$[F.id]=Z);let Y=Z[G];return Y===void 0&&(Y=p(f()),Z[G]=Y),Y}function p(D){const F=[],z=[],G=[];for(let $=0;$<i;$++)F[$]=0,z[$]=0,G[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:G,object:D,attributes:{},index:null}}function m(D,F,z,G){const $=c.attributes,Z=F.attributes;let Y=0;const U=z.getAttributes();for(const B in U)if(U[B].location>=0){const ae=$[B];let fe=Z[B];if(fe===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor)),ae===void 0||ae.attribute!==fe||fe&&ae.data!==fe.data)return!0;Y++}return c.attributesNum!==Y||c.index!==G}function y(D,F,z,G){const $={},Z=F.attributes;let Y=0;const U=z.getAttributes();for(const B in U)if(U[B].location>=0){let ae=Z[B];ae===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor));const fe={};fe.attribute=ae,ae&&ae.data&&(fe.data=ae.data),$[B]=fe,Y++}c.attributes=$,c.attributesNum=Y,c.index=G}function v(){const D=c.newAttributes;for(let F=0,z=D.length;F<z;F++)D[F]=0}function x(D){S(D,0)}function S(D,F){const z=c.newAttributes,G=c.enabledAttributes,$=c.attributeDivisors;z[D]=1,G[D]===0&&(s.enableVertexAttribArray(D),G[D]=1),$[D]!==F&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,F),$[D]=F)}function b(){const D=c.newAttributes,F=c.enabledAttributes;for(let z=0,G=F.length;z<G;z++)F[z]!==D[z]&&(s.disableVertexAttribArray(z),F[z]=0)}function E(D,F,z,G,$,Z,Y){Y===!0?s.vertexAttribIPointer(D,F,z,$,Z):s.vertexAttribPointer(D,F,z,G,$,Z)}function C(D,F,z,G){if(n.isWebGL2===!1&&(D.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const $=G.attributes,Z=z.getAttributes(),Y=F.defaultAttributeValues;for(const U in Z){const B=Z[U];if(B.location>=0){let ce=$[U];if(ce===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor)),ce!==void 0){const ae=ce.normalized,fe=ce.itemSize,Ee=t.get(ce);if(Ee===void 0)continue;const we=Ee.buffer,be=Ee.type,Oe=Ee.bytesPerElement,Ke=n.isWebGL2===!0&&(be===s.INT||be===s.UNSIGNED_INT||ce.gpuType===$f);if(ce.isInterleavedBufferAttribute){const Re=ce.data,P=Re.stride,ue=ce.offset;if(Re.isInstancedInterleavedBuffer){for(let K=0;K<B.locationSize;K++)S(B.location+K,Re.meshPerAttribute);D.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let K=0;K<B.locationSize;K++)x(B.location+K);s.bindBuffer(s.ARRAY_BUFFER,we);for(let K=0;K<B.locationSize;K++)E(B.location+K,fe/B.locationSize,be,ae,P*Oe,(ue+fe/B.locationSize*K)*Oe,Ke)}else{if(ce.isInstancedBufferAttribute){for(let Re=0;Re<B.locationSize;Re++)S(B.location+Re,ce.meshPerAttribute);D.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Re=0;Re<B.locationSize;Re++)x(B.location+Re);s.bindBuffer(s.ARRAY_BUFFER,we);for(let Re=0;Re<B.locationSize;Re++)E(B.location+Re,fe/B.locationSize,be,ae,fe*Oe,fe/B.locationSize*Re*Oe,Ke)}}else if(Y!==void 0){const ae=Y[U];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(B.location,ae);break;case 3:s.vertexAttrib3fv(B.location,ae);break;case 4:s.vertexAttrib4fv(B.location,ae);break;default:s.vertexAttrib1fv(B.location,ae)}}}}b()}function M(){X();for(const D in a){const F=a[D];for(const z in F){const G=F[z];for(const $ in G)_(G[$].object),delete G[$];delete F[z]}delete a[D]}}function A(D){if(a[D.id]===void 0)return;const F=a[D.id];for(const z in F){const G=F[z];for(const $ in G)_(G[$].object),delete G[$];delete F[z]}delete a[D.id]}function N(D){for(const F in a){const z=a[F];if(z[D.id]===void 0)continue;const G=z[D.id];for(const $ in G)_(G[$].object),delete G[$];delete z[D.id]}}function X(){q(),u=!0,c!==l&&(c=l,d(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:q,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:x,disableUnusedAttributes:b}}function Rv(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=s,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Cv(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,x=o||e.has("OES_texture_float"),S=v&&x,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:S,maxSamples:b}}function Pv(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new nr,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=s.get(h);if(!i||_===null||_.length===0||r&&!p)r?u(null):c();else{const y=r?0:n,v=y*4;let x=m.clippingState||null;l.value=x,x=u(_,f,v,d);for(let S=0;S!==v;++S)x[S]=t[S];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,x=d;v!==g;++v,x+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Lv(s){let e=new WeakMap;function t(o,a){return a===la?o.mapping=as:a===Yl&&(o.mapping=ls),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===la||a===Yl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Xg(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ra extends pd{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zr=4,wh=[.125,.215,.35,.446,.526,.582],or=20,pl=new Ra,Rh=new ye;let ml=null,gl=0,_l=0;const ir=(1+Math.sqrt(5))/2,Wr=1/ir,Ch=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,ir,Wr),new L(0,ir,-Wr),new L(Wr,0,ir),new L(-Wr,0,ir),new L(ir,Wr,0),new L(-ir,Wr,0)];class Ph{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ml,gl,_l),e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Ys,format:bn,colorSpace:Ut,depthBuffer:!1},i=Lh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dv(r)),this._blurMaterial=Iv(r,e,t)}return i}_compileMaterial(e){const t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,pl)}_sceneToCubeUV(e,t,n,i){const a=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Rh),u.toneMapping=Fi,u.autoClear=!1;const d=new di({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new gt(new Ms,d);let g=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,g=!0):(d.color.copy(Rh),g=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;Bo(i,y*v,m>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===as||e.mapping===ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Bo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,pl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ch[(i-1)%Ch.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new gt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*or-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):or;p>or&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${or}`);const m=[];let y=0;for(let E=0;E<or;++E){const C=E/g,M=Math.exp(-C*C/2);m.push(M),E===0?y+=M:E<p&&(y+=2*M)}for(let E=0;E<m.length;E++)m[E]=m[E]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const x=this._sizeLods[i],S=3*x*(i>v-Zr?i-v+Zr:0),b=4*(this._cubeSize-x);Bo(t,S,b,3*x,2*x),l.setRenderTarget(t),l.render(h,pl)}}function Dv(s){const e=[],t=[],n=[];let i=s;const r=s-Zr+1+wh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Zr?l=wh[o-s+Zr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,y=new Float32Array(g*_*d),v=new Float32Array(p*_*d),x=new Float32Array(m*_*d);for(let b=0;b<d;b++){const E=b%3*2/3-1,C=b>2?0:-1,M=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];y.set(M,g*_*b),v.set(f,p*_*b);const A=[b,b,b,b,b,b];x.set(A,m*_*b)}const S=new Ft;S.setAttribute("position",new Nt(y,g)),S.setAttribute("uv",new Nt(v,p)),S.setAttribute("faceIndex",new Nt(x,m)),e.push(S),i>Zr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lh(s,e,t){const n=new _r(s,e,t);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Iv(s,e,t){const n=new Float32Array(or),i=new L(0,1,0);return new vr({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Dh(){return new vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Ih(){return new vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Bc(){return`

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
	`}function Uv(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===la||l===Yl,u=l===as||l===ls;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Ph(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Ph(s));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ov(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Nv(s,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],s.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let v=0,x=y.length;v<x;v+=3){const S=y[v+0],b=y[v+1],E=y[v+2];f.push(S,b,b,E,E,S)}}else if(_!==void 0){const y=_.array;g=_.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const S=v+0,b=v+1,E=v+2;f.push(S,b,b,E,E,S)}}else return;const p=new(ad(f)?fd:Oc)(f,1);p.version=g;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Fv(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){s.drawElements(r,d,a,f*l),t.update(d,r,1)}function h(f,d,_){if(_===0)return;let g,p;if(i)g=s,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,d,a,f*l,_),t.update(d,r,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Bv(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function kv(s,e){return s[0]-e[0]}function zv(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Hv(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new Qe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let p=r.get(u);if(p===void 0||p.count!==g){let F=function(){q.dispose(),r.delete(u),u.removeEventListener("dispose",F)};var d=F;p!==void 0&&p.texture.dispose();const v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),S===!0&&(M=3);let A=u.attributes.position.count*M,N=1;A>e.maxTextureSize&&(N=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const X=new Float32Array(A*N*4*g),q=new ud(X,A,N,g);q.type=hi,q.needsUpdate=!0;const D=M*4;for(let z=0;z<g;z++){const G=b[z],$=E[z],Z=C[z],Y=A*N*4*z;for(let U=0;U<G.count;U++){const B=U*D;v===!0&&(o.fromBufferAttribute(G,U),X[Y+B+0]=o.x,X[Y+B+1]=o.y,X[Y+B+2]=o.z,X[Y+B+3]=0),x===!0&&(o.fromBufferAttribute($,U),X[Y+B+4]=o.x,X[Y+B+5]=o.y,X[Y+B+6]=o.z,X[Y+B+7]=0),S===!0&&(o.fromBufferAttribute(Z,U),X[Y+B+8]=o.x,X[Y+B+9]=o.y,X[Y+B+10]=o.z,X[Y+B+11]=Z.itemSize===4?o.w:1)}}p={count:g,texture:q,size:new se(A,N)},r.set(u,p),u.addEventListener("dispose",F)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];const y=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",y),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let x=0;x<_;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<_;x++){const S=g[x];S[0]=x,S[1]=f[x]}g.sort(zv);for(let x=0;x<8;x++)x<_&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(kv);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const S=a[x],b=S[0],E=S[1];b!==Number.MAX_SAFE_INTEGER&&E?(p&&u.getAttribute("morphTarget"+x)!==p[b]&&u.setAttribute("morphTarget"+x,p[b]),m&&u.getAttribute("morphNormal"+x)!==m[b]&&u.setAttribute("morphNormal"+x,m[b]),i[x]=E,y+=E):(p&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const v=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(s,"morphTargetBaseInfluence",v),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Gv(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const _d=new bt,vd=new ud,xd=new Rg,yd=new md,Uh=[],Oh=[],Nh=new Float32Array(16),Fh=new Float32Array(9),Bh=new Float32Array(4);function Ss(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Uh[i];if(r===void 0&&(r=new Float32Array(i),Uh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function wt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Rt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ca(s,e){let t=Oh[e];t===void 0&&(t=new Int32Array(e),Oh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Vv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Wv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2fv(this.addr,e),Rt(t,e)}}function Xv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;s.uniform3fv(this.addr,e),Rt(t,e)}}function qv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4fv(this.addr,e),Rt(t,e)}}function jv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;Bh.set(n),s.uniformMatrix2fv(this.addr,!1,Bh),Rt(t,n)}}function Yv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;Fh.set(n),s.uniformMatrix3fv(this.addr,!1,Fh),Rt(t,n)}}function Kv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;Nh.set(n),s.uniformMatrix4fv(this.addr,!1,Nh),Rt(t,n)}}function Zv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Jv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2iv(this.addr,e),Rt(t,e)}}function $v(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3iv(this.addr,e),Rt(t,e)}}function Qv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4iv(this.addr,e),Rt(t,e)}}function ex(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function tx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2uiv(this.addr,e),Rt(t,e)}}function nx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3uiv(this.addr,e),Rt(t,e)}}function ix(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4uiv(this.addr,e),Rt(t,e)}}function rx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||_d,i)}function sx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xd,i)}function ox(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||yd,i)}function ax(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vd,i)}function lx(s){switch(s){case 5126:return Vv;case 35664:return Wv;case 35665:return Xv;case 35666:return qv;case 35674:return jv;case 35675:return Yv;case 35676:return Kv;case 5124:case 35670:return Zv;case 35667:case 35671:return Jv;case 35668:case 35672:return $v;case 35669:case 35673:return Qv;case 5125:return ex;case 36294:return tx;case 36295:return nx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return ax}}function cx(s,e){s.uniform1fv(this.addr,e)}function ux(s,e){const t=Ss(e,this.size,2);s.uniform2fv(this.addr,t)}function hx(s,e){const t=Ss(e,this.size,3);s.uniform3fv(this.addr,t)}function fx(s,e){const t=Ss(e,this.size,4);s.uniform4fv(this.addr,t)}function dx(s,e){const t=Ss(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function px(s,e){const t=Ss(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function mx(s,e){const t=Ss(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function gx(s,e){s.uniform1iv(this.addr,e)}function _x(s,e){s.uniform2iv(this.addr,e)}function vx(s,e){s.uniform3iv(this.addr,e)}function xx(s,e){s.uniform4iv(this.addr,e)}function yx(s,e){s.uniform1uiv(this.addr,e)}function Mx(s,e){s.uniform2uiv(this.addr,e)}function Sx(s,e){s.uniform3uiv(this.addr,e)}function Tx(s,e){s.uniform4uiv(this.addr,e)}function Ex(s,e,t){const n=this.cache,i=e.length,r=Ca(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||_d,r[o])}function bx(s,e,t){const n=this.cache,i=e.length,r=Ca(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||xd,r[o])}function Ax(s,e,t){const n=this.cache,i=e.length,r=Ca(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||yd,r[o])}function wx(s,e,t){const n=this.cache,i=e.length,r=Ca(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||vd,r[o])}function Rx(s){switch(s){case 5126:return cx;case 35664:return ux;case 35665:return hx;case 35666:return fx;case 35674:return dx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return _x;case 35668:case 35672:return vx;case 35669:case 35673:return xx;case 5125:return yx;case 36294:return Mx;case 36295:return Sx;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return wx}}class Cx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=lx(t.type)}}class Px{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Rx(t.type)}}class Lx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const vl=/(\w+)(\])?(\[|\.)?/g;function kh(s,e){s.seq.push(e),s.map[e.id]=e}function Dx(s,e,t){const n=s.name,i=n.length;for(vl.lastIndex=0;;){const r=vl.exec(n),o=vl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){kh(t,c===void 0?new Cx(a,s,e):new Px(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Lx(a),kh(t,h)),t=h}}}class na{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Dx(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function zh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Ix=37297;let Ux=0;function Ox(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Nx(s){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(s);let n;switch(e===t?n="":e===fa&&t===ha?n="LinearDisplayP3ToLinearSRGB":e===ha&&t===fa&&(n="LinearSRGBToLinearDisplayP3"),s){case Ut:case wa:return[n,"LinearTransferOETF"];case Ze:case Dc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Hh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Ox(s.getShaderSource(e),o)}else return i}function Fx(s,e){const t=Nx(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Bx(s,e){let t;switch(e){case Nm:t="Linear";break;case Fm:t="Reinhard";break;case Bm:t="OptimizedCineon";break;case km:t="ACESFilmic";break;case zm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kx(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ns).join(`
`)}function zx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ns(s){return s!==""}function Gh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(s){return s.replace(Gx,Wx)}const Vx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Wx(s,e){let t=ke[e];if(t===void 0){const n=Vx.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ec(t)}const Xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wh(s){return s.replace(Xx,qx)}function qx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Xh(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Yf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Kf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function Yx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case as:case ls:e="ENVMAP_TYPE_CUBE";break;case Aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function Zx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ba:e="ENVMAP_BLENDING_MULTIPLY";break;case Um:e="ENVMAP_BLENDING_MIX";break;case Om:e="ENVMAP_BLENDING_ADD";break}return e}function Jx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function $x(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=jx(t),c=Yx(t),u=Kx(t),h=Zx(t),f=Jx(t),d=t.isWebGL2?"":kx(t),_=zx(r),g=i.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ns).join(`
`),p.length>0&&(p+=`
`),m=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ns).join(`
`),m.length>0&&(m+=`
`)):(p=[Xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),m=[d,Xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?ke.tonemapping_pars_fragment:"",t.toneMapping!==Fi?Bx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Fx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),o=ec(o),o=Gh(o,t),o=Vh(o,t),a=ec(a),a=Gh(a,t),a=Vh(a,t),o=Wh(o),a=Wh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=y+p+o,x=y+m+a,S=zh(i,i.VERTEX_SHADER,v),b=zh(i,i.FRAGMENT_SHADER,x);i.attachShader(g,S),i.attachShader(g,b),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(N){if(s.debug.checkShaderErrors){const X=i.getProgramInfoLog(g).trim(),q=i.getShaderInfoLog(S).trim(),D=i.getShaderInfoLog(b).trim();let F=!0,z=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,S,b);else{const G=Hh(i,S,"vertex"),$=Hh(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+G+`
`+$)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(q===""||D==="")&&(z=!1);z&&(N.diagnostics={runnable:F,programLog:X,vertexShader:{log:q,prefix:p},fragmentShader:{log:D,prefix:m}})}i.deleteShader(S),i.deleteShader(b),C=new na(i,g),M=Hx(i,g)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(g,Ix)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ux++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=b,this}let Qx=0;class ey{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ty(e),t.set(e,n)),n}}class ty{constructor(e){this.id=Qx++,this.code=e,this.usedTimes=0}}function ny(s,e,t,n,i,r,o){const a=new Uc,l=new ey,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function p(M,A,N,X,q){const D=X.fog,F=q.geometry,z=M.isMeshStandardMaterial?X.environment:null,G=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),$=G&&G.mapping===Aa?G.image.height:null,Z=_[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const Y=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,U=Y!==void 0?Y.length:0;let B=0;F.morphAttributes.position!==void 0&&(B=1),F.morphAttributes.normal!==void 0&&(B=2),F.morphAttributes.color!==void 0&&(B=3);let ce,ae,fe,Ee;if(Z){const Mt=qn[Z];ce=Mt.vertexShader,ae=Mt.fragmentShader}else ce=M.vertexShader,ae=M.fragmentShader,l.update(M),fe=l.getVertexShaderID(M),Ee=l.getFragmentShaderID(M);const we=s.getRenderTarget(),be=q.isInstancedMesh===!0,Oe=!!M.map,Ke=!!M.matcap,Re=!!G,P=!!M.aoMap,ue=!!M.lightMap,K=!!M.bumpMap,ee=!!M.normalMap,J=!!M.displacementMap,Te=!!M.emissiveMap,me=!!M.metalnessMap,ve=!!M.roughnessMap,Ue=M.anisotropy>0,Ve=M.clearcoat>0,pt=M.iridescence>0,R=M.sheen>0,T=M.transmission>0,k=Ue&&!!M.anisotropyMap,te=Ve&&!!M.clearcoatMap,Q=Ve&&!!M.clearcoatNormalMap,ne=Ve&&!!M.clearcoatRoughnessMap,Me=pt&&!!M.iridescenceMap,oe=pt&&!!M.iridescenceThicknessMap,de=R&&!!M.sheenColorMap,Le=R&&!!M.sheenRoughnessMap,Je=!!M.specularMap,ie=!!M.specularColorMap,tt=!!M.specularIntensityMap,Ne=T&&!!M.transmissionMap,De=T&&!!M.thicknessMap,Ae=!!M.gradientMap,_e=!!M.alphaMap,je=M.alphaTest>0,I=!!M.alphaHash,pe=!!M.extensions,re=!!F.attributes.uv1,j=!!F.attributes.uv2,le=!!F.attributes.uv3;let Ce=Fi;return M.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Ce=s.toneMapping),{isWebGL2:u,shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:ce,fragmentShader:ae,defines:M.defines,customVertexShaderID:fe,customFragmentShaderID:Ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,instancing:be,instancingColor:be&&q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:we===null?s.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Ut,map:Oe,matcap:Ke,envMap:Re,envMapMode:Re&&G.mapping,envMapCubeUVHeight:$,aoMap:P,lightMap:ue,bumpMap:K,normalMap:ee,displacementMap:f&&J,emissiveMap:Te,normalMapObjectSpace:ee&&M.normalMapType===tg,normalMapTangentSpace:ee&&M.normalMapType===ao,metalnessMap:me,roughnessMap:ve,anisotropy:Ue,anisotropyMap:k,clearcoat:Ve,clearcoatMap:te,clearcoatNormalMap:Q,clearcoatRoughnessMap:ne,iridescence:pt,iridescenceMap:Me,iridescenceThicknessMap:oe,sheen:R,sheenColorMap:de,sheenRoughnessMap:Le,specularMap:Je,specularColorMap:ie,specularIntensityMap:tt,transmission:T,transmissionMap:Ne,thicknessMap:De,gradientMap:Ae,opaque:M.transparent===!1&&M.blending===es,alphaMap:_e,alphaTest:je,alphaHash:I,combine:M.combine,mapUv:Oe&&g(M.map.channel),aoMapUv:P&&g(M.aoMap.channel),lightMapUv:ue&&g(M.lightMap.channel),bumpMapUv:K&&g(M.bumpMap.channel),normalMapUv:ee&&g(M.normalMap.channel),displacementMapUv:J&&g(M.displacementMap.channel),emissiveMapUv:Te&&g(M.emissiveMap.channel),metalnessMapUv:me&&g(M.metalnessMap.channel),roughnessMapUv:ve&&g(M.roughnessMap.channel),anisotropyMapUv:k&&g(M.anisotropyMap.channel),clearcoatMapUv:te&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Q&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:de&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Le&&g(M.sheenRoughnessMap.channel),specularMapUv:Je&&g(M.specularMap.channel),specularColorMapUv:ie&&g(M.specularColorMap.channel),specularIntensityMapUv:tt&&g(M.specularIntensityMap.channel),transmissionMapUv:Ne&&g(M.transmissionMap.channel),thicknessMapUv:De&&g(M.thicknessMap.channel),alphaMapUv:_e&&g(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ee||Ue),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:re,vertexUv2s:j,vertexUv3s:le,pointsUvs:q.isPoints===!0&&!!F.attributes.uv&&(Oe||_e),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:B,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ce,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Oe&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===at,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===jn,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:pe&&M.extensions.derivatives===!0,extensionFragDepth:pe&&M.extensions.fragDepth===!0,extensionDrawBuffers:pe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)A.push(N),A.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(y(A,M),v(A,M),A.push(s.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function y(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function v(M,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function x(M){const A=_[M.type];let N;if(A){const X=qn[A];N=Hg.clone(X.uniforms)}else N=M.uniforms;return N}function S(M,A){let N;for(let X=0,q=c.length;X<q;X++){const D=c[X];if(D.cacheKey===A){N=D,++N.usedTimes;break}}return N===void 0&&(N=new $x(s,A,M,r),c.push(N)),N}function b(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:S,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:C}}function iy(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function ry(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function qh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function jh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,p){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},s[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),e++,m}function a(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||ry),n.length>1&&n.sort(f||qh),i.length>1&&i.sort(f||qh)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function sy(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new jh,s.set(n,[o])):i>=r.length?(o=new jh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function oy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ye};break;case"SpotLight":t={position:new L,direction:new L,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function ay(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ly=0;function cy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function uy(s,e){const t=new oy,n=ay(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new L);const r=new L,o=new xe,a=new xe;function l(u,h){let f=0,d=0,_=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let g=0,p=0,m=0,y=0,v=0,x=0,S=0,b=0,E=0,C=0,M=0;u.sort(cy);const A=h===!0?Math.PI:1;for(let X=0,q=u.length;X<q;X++){const D=u[X],F=D.color,z=D.intensity,G=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=F.r*z*A,d+=F.g*z*A,_+=F.b*z*A;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(D.sh.coefficients[Z],z);M++}else if(D.isDirectionalLight){const Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const Y=D.shadow,U=n.get(D);U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,i.directionalShadow[g]=U,i.directionalShadowMap[g]=$,i.directionalShadowMatrix[g]=D.shadow.matrix,x++}i.directional[g]=Z,g++}else if(D.isSpotLight){const Z=t.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(F).multiplyScalar(z*A),Z.distance=G,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,i.spot[m]=Z;const Y=D.shadow;if(D.map&&(i.spotLightMap[E]=D.map,E++,Y.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[m]=Y.matrix,D.castShadow){const U=n.get(D);U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,i.spotShadow[m]=U,i.spotShadowMap[m]=$,b++}m++}else if(D.isRectAreaLight){const Z=t.get(D);Z.color.copy(F).multiplyScalar(z),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),i.rectArea[y]=Z,y++}else if(D.isPointLight){const Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity*A),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const Y=D.shadow,U=n.get(D);U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,U.shadowCameraNear=Y.camera.near,U.shadowCameraFar=Y.camera.far,i.pointShadow[p]=U,i.pointShadowMap[p]=$,i.pointShadowMatrix[p]=D.shadow.matrix,S++}i.point[p]=Z,p++}else if(D.isHemisphereLight){const Z=t.get(D);Z.skyColor.copy(D.color).multiplyScalar(z*A),Z.groundColor.copy(D.groundColor).multiplyScalar(z*A),i.hemi[v]=Z,v++}}y>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=_;const N=i.hash;(N.directionalLength!==g||N.pointLength!==p||N.spotLength!==m||N.rectAreaLength!==y||N.hemiLength!==v||N.numDirectionalShadows!==x||N.numPointShadows!==S||N.numSpotShadows!==b||N.numSpotMaps!==E||N.numLightProbes!==M)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=y,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=b+E-C,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=M,N.directionalLength=g,N.pointLength=p,N.spotLength=m,N.rectAreaLength=y,N.hemiLength=v,N.numDirectionalShadows=x,N.numPointShadows=S,N.numSpotShadows=b,N.numSpotMaps=E,N.numLightProbes=M,i.version=ly++)}function c(u,h){let f=0,d=0,_=0,g=0,p=0;const m=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const x=u[y];if(x.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(x.isSpotLight){const S=i.spot[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),_++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),a.identity(),o.copy(x.matrixWorld),o.premultiply(m),a.extractRotation(o),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const S=i.hemi[p];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function Yh(s,e){const t=new uy(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function hy(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Yh(s,e),t.set(r,[l])):o>=a.length?(l=new Yh(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class fy extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dy extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const py=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,my=`uniform sampler2D shadow_pass;
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
}`;function gy(s,e,t){let n=new Nc;const i=new se,r=new se,o=new Qe,a=new fy({depthPacking:eg}),l=new dy,c={},u=t.maxTextureSize,h={[pi]:nn,[nn]:pi,[jn]:jn},f=new vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:py,fragmentShader:my}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Ft;_.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new gt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yf;let m=this.type;this.render=function(S,b,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const C=s.getRenderTarget(),M=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Ni),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const X=m!==li&&this.type===li,q=m===li&&this.type!==li;for(let D=0,F=S.length;D<F;D++){const z=S[D],G=z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const $=G.getFrameExtents();if(i.multiply($),r.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/$.x),i.x=r.x*$.x,G.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/$.y),i.y=r.y*$.y,G.mapSize.y=r.y)),G.map===null||X===!0||q===!0){const Y=this.type!==li?{minFilter:Lt,magFilter:Lt}:{};G.map!==null&&G.map.dispose(),G.map=new _r(i.x,i.y,Y),G.map.texture.name=z.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const Z=G.getViewportCount();for(let Y=0;Y<Z;Y++){const U=G.getViewport(Y);o.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),N.viewport(o),G.updateMatrices(z,Y),n=G.getFrustum(),x(b,E,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===li&&y(G,E),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(C,M,A)};function y(S,b){const E=e.update(g);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new _r(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(b,null,E,f,g,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(b,null,E,d,g,null)}function v(S,b,E,C){let M=null;const A=E.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)M=A;else if(M=E.isPointLight===!0?l:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const N=M.uuid,X=b.uuid;let q=c[N];q===void 0&&(q={},c[N]=q);let D=q[X];D===void 0&&(D=M.clone(),q[X]=D),M=D}if(M.visible=b.visible,M.wireframe=b.wireframe,C===li?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:h[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,E.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=s.properties.get(M);N.light=E}return M}function x(S,b,E,C,M){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===li)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,S.matrixWorld);const X=e.update(S),q=S.material;if(Array.isArray(q)){const D=X.groups;for(let F=0,z=D.length;F<z;F++){const G=D[F],$=q[G.materialIndex];if($&&$.visible){const Z=v(S,$,C,M);s.renderBufferDirect(E,null,X,Z,S,G)}}}else if(q.visible){const D=v(S,q,C,M);s.renderBufferDirect(E,null,X,D,S,null)}}const N=S.children;for(let X=0,q=N.length;X<q;X++)x(N[X],b,E,C,M)}}function _y(s,e,t){const n=t.isWebGL2;function i(){let I=!1;const pe=new Qe;let re=null;const j=new Qe(0,0,0,0);return{setMask:function(le){re!==le&&!I&&(s.colorMask(le,le,le,le),re=le)},setLocked:function(le){I=le},setClear:function(le,Ce,$e,Mt,Mn){Mn===!0&&(le*=Mt,Ce*=Mt,$e*=Mt),pe.set(le,Ce,$e,Mt),j.equals(pe)===!1&&(s.clearColor(le,Ce,$e,Mt),j.copy(pe))},reset:function(){I=!1,re=null,j.set(-1,0,0,0)}}}function r(){let I=!1,pe=null,re=null,j=null;return{setTest:function(le){le?Oe(s.DEPTH_TEST):Ke(s.DEPTH_TEST)},setMask:function(le){pe!==le&&!I&&(s.depthMask(le),pe=le)},setFunc:function(le){if(re!==le){switch(le){case wm:s.depthFunc(s.NEVER);break;case Rm:s.depthFunc(s.ALWAYS);break;case Cm:s.depthFunc(s.LESS);break;case aa:s.depthFunc(s.LEQUAL);break;case Pm:s.depthFunc(s.EQUAL);break;case Lm:s.depthFunc(s.GEQUAL);break;case Dm:s.depthFunc(s.GREATER);break;case Im:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}re=le}},setLocked:function(le){I=le},setClear:function(le){j!==le&&(s.clearDepth(le),j=le)},reset:function(){I=!1,pe=null,re=null,j=null}}}function o(){let I=!1,pe=null,re=null,j=null,le=null,Ce=null,$e=null,Mt=null,Mn=null;return{setTest:function(rt){I||(rt?Oe(s.STENCIL_TEST):Ke(s.STENCIL_TEST))},setMask:function(rt){pe!==rt&&!I&&(s.stencilMask(rt),pe=rt)},setFunc:function(rt,qt,Wn){(re!==rt||j!==qt||le!==Wn)&&(s.stencilFunc(rt,qt,Wn),re=rt,j=qt,le=Wn)},setOp:function(rt,qt,Wn){(Ce!==rt||$e!==qt||Mt!==Wn)&&(s.stencilOp(rt,qt,Wn),Ce=rt,$e=qt,Mt=Wn)},setLocked:function(rt){I=rt},setClear:function(rt){Mn!==rt&&(s.clearStencil(rt),Mn=rt)},reset:function(){I=!1,pe=null,re=null,j=null,le=null,Ce=null,$e=null,Mt=null,Mn=null}}}const a=new i,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},_=new WeakMap,g=[],p=null,m=!1,y=null,v=null,x=null,S=null,b=null,E=null,C=null,M=new ye(0,0,0),A=0,N=!1,X=null,q=null,D=null,F=null,z=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Z=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=Z>=2);let U=null,B={};const ce=s.getParameter(s.SCISSOR_BOX),ae=s.getParameter(s.VIEWPORT),fe=new Qe().fromArray(ce),Ee=new Qe().fromArray(ae);function we(I,pe,re,j){const le=new Uint8Array(4),Ce=s.createTexture();s.bindTexture(I,Ce),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<re;$e++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(pe,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,le):s.texImage2D(pe+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,le);return Ce}const be={};be[s.TEXTURE_2D]=we(s.TEXTURE_2D,s.TEXTURE_2D,1),be[s.TEXTURE_CUBE_MAP]=we(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(be[s.TEXTURE_2D_ARRAY]=we(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),be[s.TEXTURE_3D]=we(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(s.DEPTH_TEST),l.setFunc(aa),me(!1),ve(wu),Oe(s.CULL_FACE),J(Ni);function Oe(I){f[I]!==!0&&(s.enable(I),f[I]=!0)}function Ke(I){f[I]!==!1&&(s.disable(I),f[I]=!1)}function Re(I,pe){return d[I]!==pe?(s.bindFramebuffer(I,pe),d[I]=pe,n&&(I===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=pe),I===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=pe)),!0):!1}function P(I,pe){let re=g,j=!1;if(I)if(re=_.get(pe),re===void 0&&(re=[],_.set(pe,re)),I.isWebGLMultipleRenderTargets){const le=I.texture;if(re.length!==le.length||re[0]!==s.COLOR_ATTACHMENT0){for(let Ce=0,$e=le.length;Ce<$e;Ce++)re[Ce]=s.COLOR_ATTACHMENT0+Ce;re.length=le.length,j=!0}}else re[0]!==s.COLOR_ATTACHMENT0&&(re[0]=s.COLOR_ATTACHMENT0,j=!0);else re[0]!==s.BACK&&(re[0]=s.BACK,j=!0);j&&(t.isWebGL2?s.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function ue(I){return p!==I?(s.useProgram(I),p=I,!0):!1}const K={[sr]:s.FUNC_ADD,[fm]:s.FUNC_SUBTRACT,[dm]:s.FUNC_REVERSE_SUBTRACT};if(n)K[Lu]=s.MIN,K[Du]=s.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(K[Lu]=I.MIN_EXT,K[Du]=I.MAX_EXT)}const ee={[pm]:s.ZERO,[mm]:s.ONE,[gm]:s.SRC_COLOR,[ql]:s.SRC_ALPHA,[Sm]:s.SRC_ALPHA_SATURATE,[ym]:s.DST_COLOR,[vm]:s.DST_ALPHA,[_m]:s.ONE_MINUS_SRC_COLOR,[jl]:s.ONE_MINUS_SRC_ALPHA,[Mm]:s.ONE_MINUS_DST_COLOR,[xm]:s.ONE_MINUS_DST_ALPHA,[Tm]:s.CONSTANT_COLOR,[Em]:s.ONE_MINUS_CONSTANT_COLOR,[bm]:s.CONSTANT_ALPHA,[Am]:s.ONE_MINUS_CONSTANT_ALPHA};function J(I,pe,re,j,le,Ce,$e,Mt,Mn,rt){if(I===Ni){m===!0&&(Ke(s.BLEND),m=!1);return}if(m===!1&&(Oe(s.BLEND),m=!0),I!==hm){if(I!==y||rt!==N){if((v!==sr||b!==sr)&&(s.blendEquation(s.FUNC_ADD),v=sr,b=sr),rt)switch(I){case es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ru:s.blendFunc(s.ONE,s.ONE);break;case Cu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Pu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ru:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Cu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Pu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,S=null,E=null,C=null,M.set(0,0,0),A=0,y=I,N=rt}return}le=le||pe,Ce=Ce||re,$e=$e||j,(pe!==v||le!==b)&&(s.blendEquationSeparate(K[pe],K[le]),v=pe,b=le),(re!==x||j!==S||Ce!==E||$e!==C)&&(s.blendFuncSeparate(ee[re],ee[j],ee[Ce],ee[$e]),x=re,S=j,E=Ce,C=$e),(Mt.equals(M)===!1||Mn!==A)&&(s.blendColor(Mt.r,Mt.g,Mt.b,Mn),M.copy(Mt),A=Mn),y=I,N=!1}function Te(I,pe){I.side===jn?Ke(s.CULL_FACE):Oe(s.CULL_FACE);let re=I.side===nn;pe&&(re=!re),me(re),I.blending===es&&I.transparent===!1?J(Ni):J(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const j=I.stencilWrite;c.setTest(j),j&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ve(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Oe(s.SAMPLE_ALPHA_TO_COVERAGE):Ke(s.SAMPLE_ALPHA_TO_COVERAGE)}function me(I){X!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),X=I)}function ve(I){I!==cm?(Oe(s.CULL_FACE),I!==q&&(I===wu?s.cullFace(s.BACK):I===um?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ke(s.CULL_FACE),q=I}function Ue(I){I!==D&&($&&s.lineWidth(I),D=I)}function Ve(I,pe,re){I?(Oe(s.POLYGON_OFFSET_FILL),(F!==pe||z!==re)&&(s.polygonOffset(pe,re),F=pe,z=re)):Ke(s.POLYGON_OFFSET_FILL)}function pt(I){I?Oe(s.SCISSOR_TEST):Ke(s.SCISSOR_TEST)}function R(I){I===void 0&&(I=s.TEXTURE0+G-1),U!==I&&(s.activeTexture(I),U=I)}function T(I,pe,re){re===void 0&&(U===null?re=s.TEXTURE0+G-1:re=U);let j=B[re];j===void 0&&(j={type:void 0,texture:void 0},B[re]=j),(j.type!==I||j.texture!==pe)&&(U!==re&&(s.activeTexture(re),U=re),s.bindTexture(I,pe||be[I]),j.type=I,j.texture=pe)}function k(){const I=B[U];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function te(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Je(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(I){fe.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),fe.copy(I))}function De(I){Ee.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Ee.copy(I))}function Ae(I,pe){let re=h.get(pe);re===void 0&&(re=new WeakMap,h.set(pe,re));let j=re.get(I);j===void 0&&(j=s.getUniformBlockIndex(pe,I.name),re.set(I,j))}function _e(I,pe){const j=h.get(pe).get(I);u.get(pe)!==j&&(s.uniformBlockBinding(pe,j,I.__bindingPointIndex),u.set(pe,j))}function je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},U=null,B={},d={},_=new WeakMap,g=[],p=null,m=!1,y=null,v=null,x=null,S=null,b=null,E=null,C=null,M=new ye(0,0,0),A=0,N=!1,X=null,q=null,D=null,F=null,z=null,fe.set(0,0,s.canvas.width,s.canvas.height),Ee.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Oe,disable:Ke,bindFramebuffer:Re,drawBuffers:P,useProgram:ue,setBlending:J,setMaterial:Te,setFlipSided:me,setCullFace:ve,setLineWidth:Ue,setPolygonOffset:Ve,setScissorTest:pt,activeTexture:R,bindTexture:T,unbindTexture:k,compressedTexImage2D:te,compressedTexImage3D:Q,texImage2D:ie,texImage3D:tt,updateUBOMapping:Ae,uniformBlockBinding:_e,texStorage2D:Le,texStorage3D:Je,texSubImage2D:ne,texSubImage3D:Me,compressedTexSubImage2D:oe,compressedTexSubImage3D:de,scissor:Ne,viewport:De,reset:je}}function vy(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,T){return m?new OffscreenCanvas(R,T):Zs("canvas")}function v(R,T,k,te){let Q=1;if((R.width>te||R.height>te)&&(Q=te/Math.max(R.width,R.height)),Q<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ne=T?pa:Math.floor,Me=ne(Q*R.width),oe=ne(Q*R.height);g===void 0&&(g=y(Me,oe));const de=k?y(Me,oe):g;return de.width=Me,de.height=oe,de.getContext("2d").drawImage(R,0,0,Me,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Me+"x"+oe+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function x(R){return Ql(R.width)&&Ql(R.height)}function S(R){return a?!1:R.wrapS!==tn||R.wrapT!==tn||R.minFilter!==Lt&&R.minFilter!==en}function b(R,T){return R.generateMipmaps&&T&&R.minFilter!==Lt&&R.minFilter!==en}function E(R){s.generateMipmap(R)}function C(R,T,k,te,Q=!1){if(a===!1)return T;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ne=T;if(T===s.RED&&(k===s.FLOAT&&(ne=s.R32F),k===s.HALF_FLOAT&&(ne=s.R16F),k===s.UNSIGNED_BYTE&&(ne=s.R8)),T===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(ne=s.R8UI),k===s.UNSIGNED_SHORT&&(ne=s.R16UI),k===s.UNSIGNED_INT&&(ne=s.R32UI),k===s.BYTE&&(ne=s.R8I),k===s.SHORT&&(ne=s.R16I),k===s.INT&&(ne=s.R32I)),T===s.RG&&(k===s.FLOAT&&(ne=s.RG32F),k===s.HALF_FLOAT&&(ne=s.RG16F),k===s.UNSIGNED_BYTE&&(ne=s.RG8)),T===s.RGBA){const Me=Q?ua:et.getTransfer(te);k===s.FLOAT&&(ne=s.RGBA32F),k===s.HALF_FLOAT&&(ne=s.RGBA16F),k===s.UNSIGNED_BYTE&&(ne=Me===at?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function M(R,T,k){return b(R,k)===!0||R.isFramebufferTexture&&R.minFilter!==Lt&&R.minFilter!==en?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function A(R){return R===Lt||R===Kl||R===ta?s.NEAREST:s.LINEAR}function N(R){const T=R.target;T.removeEventListener("dispose",N),q(T),T.isVideoTexture&&_.delete(T)}function X(R){const T=R.target;T.removeEventListener("dispose",X),F(T)}function q(R){const T=n.get(R);if(T.__webglInit===void 0)return;const k=R.source,te=p.get(k);if(te){const Q=te[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&D(R),Object.keys(te).length===0&&p.delete(k)}n.remove(R)}function D(R){const T=n.get(R);s.deleteTexture(T.__webglTexture);const k=R.source,te=p.get(k);delete te[T.__cacheKey],o.memory.textures--}function F(R){const T=R.texture,k=n.get(R),te=n.get(T);if(te.__webglTexture!==void 0&&(s.deleteTexture(te.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(k.__webglFramebuffer[Q]))for(let ne=0;ne<k.__webglFramebuffer[Q].length;ne++)s.deleteFramebuffer(k.__webglFramebuffer[Q][ne]);else s.deleteFramebuffer(k.__webglFramebuffer[Q]);k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[Q])}else{if(Array.isArray(k.__webglFramebuffer))for(let Q=0;Q<k.__webglFramebuffer.length;Q++)s.deleteFramebuffer(k.__webglFramebuffer[Q]);else s.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let Q=0;Q<k.__webglColorRenderbuffer.length;Q++)k.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[Q]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let Q=0,ne=T.length;Q<ne;Q++){const Me=n.get(T[Q]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(T[Q])}n.remove(T),n.remove(R)}let z=0;function G(){z=0}function $(){const R=z;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),z+=1,R}function Z(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function Y(R,T){const k=n.get(R);if(R.isVideoTexture&&Ve(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(k,R,T);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+T)}function U(R,T){const k=n.get(R);if(R.version>0&&k.__version!==R.version){Oe(k,R,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+T)}function B(R,T){const k=n.get(R);if(R.version>0&&k.__version!==R.version){Oe(k,R,T);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+T)}function ce(R,T){const k=n.get(R);if(R.version>0&&k.__version!==R.version){Ke(k,R,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+T)}const ae={[Hi]:s.REPEAT,[tn]:s.CLAMP_TO_EDGE,[ca]:s.MIRRORED_REPEAT},fe={[Lt]:s.NEAREST,[Kl]:s.NEAREST_MIPMAP_NEAREST,[ta]:s.NEAREST_MIPMAP_LINEAR,[en]:s.LINEAR,[Jf]:s.LINEAR_MIPMAP_NEAREST,[gr]:s.LINEAR_MIPMAP_LINEAR},Ee={[ng]:s.NEVER,[cg]:s.ALWAYS,[ig]:s.LESS,[sg]:s.LEQUAL,[rg]:s.EQUAL,[lg]:s.GEQUAL,[og]:s.GREATER,[ag]:s.NOTEQUAL};function we(R,T,k){if(k?(s.texParameteri(R,s.TEXTURE_WRAP_S,ae[T.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ae[T.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ae[T.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,fe[T.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,fe[T.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==tn||T.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,A(T.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,A(T.minFilter)),T.minFilter!==Lt&&T.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Ee[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Lt||T.minFilter!==ta&&T.minFilter!==gr||T.type===hi&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===Ys&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(s.texParameterf(R,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function be(R,T){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",N));const te=T.source;let Q=p.get(te);Q===void 0&&(Q={},p.set(te,Q));const ne=Z(T);if(ne!==R.__cacheKey){Q[ne]===void 0&&(Q[ne]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[ne].usedTimes++;const Me=Q[R.__cacheKey];Me!==void 0&&(Q[R.__cacheKey].usedTimes--,Me.usedTimes===0&&D(T)),R.__cacheKey=ne,R.__webglTexture=Q[ne].texture}return k}function Oe(R,T,k){let te=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=s.TEXTURE_3D);const Q=be(R,T),ne=T.source;t.bindTexture(te,R.__webglTexture,s.TEXTURE0+k);const Me=n.get(ne);if(ne.version!==Me.__version||Q===!0){t.activeTexture(s.TEXTURE0+k);const oe=et.getPrimaries(et.workingColorSpace),de=T.colorSpace===An?null:et.getPrimaries(T.colorSpace),Le=T.colorSpace===An||oe===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Je=S(T)&&x(T.image)===!1;let ie=v(T.image,Je,!1,u);ie=pt(T,ie);const tt=x(ie)||a,Ne=r.convert(T.format,T.colorSpace);let De=r.convert(T.type),Ae=C(T.internalFormat,Ne,De,T.colorSpace,T.isVideoTexture);we(te,T,tt);let _e;const je=T.mipmaps,I=a&&T.isVideoTexture!==!0,pe=Me.__version===void 0||Q===!0,re=M(T,ie,tt);if(T.isDepthTexture)Ae=s.DEPTH_COMPONENT,a?T.type===hi?Ae=s.DEPTH_COMPONENT32F:T.type===Li?Ae=s.DEPTH_COMPONENT24:T.type===cr?Ae=s.DEPTH24_STENCIL8:Ae=s.DEPTH_COMPONENT16:T.type===hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ur&&Ae===s.DEPTH_COMPONENT&&T.type!==Lc&&T.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Li,De=r.convert(T.type)),T.format===cs&&Ae===s.DEPTH_COMPONENT&&(Ae=s.DEPTH_STENCIL,T.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=cr,De=r.convert(T.type))),pe&&(I?t.texStorage2D(s.TEXTURE_2D,1,Ae,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,Ae,ie.width,ie.height,0,Ne,De,null));else if(T.isDataTexture)if(je.length>0&&tt){I&&pe&&t.texStorage2D(s.TEXTURE_2D,re,Ae,je[0].width,je[0].height);for(let j=0,le=je.length;j<le;j++)_e=je[j],I?t.texSubImage2D(s.TEXTURE_2D,j,0,0,_e.width,_e.height,Ne,De,_e.data):t.texImage2D(s.TEXTURE_2D,j,Ae,_e.width,_e.height,0,Ne,De,_e.data);T.generateMipmaps=!1}else I?(pe&&t.texStorage2D(s.TEXTURE_2D,re,Ae,ie.width,ie.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie.width,ie.height,Ne,De,ie.data)):t.texImage2D(s.TEXTURE_2D,0,Ae,ie.width,ie.height,0,Ne,De,ie.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){I&&pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,re,Ae,je[0].width,je[0].height,ie.depth);for(let j=0,le=je.length;j<le;j++)_e=je[j],T.format!==bn?Ne!==null?I?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,ie.depth,Ne,_e.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,Ae,_e.width,_e.height,ie.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,ie.depth,Ne,De,_e.data):t.texImage3D(s.TEXTURE_2D_ARRAY,j,Ae,_e.width,_e.height,ie.depth,0,Ne,De,_e.data)}else{I&&pe&&t.texStorage2D(s.TEXTURE_2D,re,Ae,je[0].width,je[0].height);for(let j=0,le=je.length;j<le;j++)_e=je[j],T.format!==bn?Ne!==null?I?t.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,_e.width,_e.height,Ne,_e.data):t.compressedTexImage2D(s.TEXTURE_2D,j,Ae,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage2D(s.TEXTURE_2D,j,0,0,_e.width,_e.height,Ne,De,_e.data):t.texImage2D(s.TEXTURE_2D,j,Ae,_e.width,_e.height,0,Ne,De,_e.data)}else if(T.isDataArrayTexture)I?(pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,re,Ae,ie.width,ie.height,ie.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ne,De,ie.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,ie.width,ie.height,ie.depth,0,Ne,De,ie.data);else if(T.isData3DTexture)I?(pe&&t.texStorage3D(s.TEXTURE_3D,re,Ae,ie.width,ie.height,ie.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ne,De,ie.data)):t.texImage3D(s.TEXTURE_3D,0,Ae,ie.width,ie.height,ie.depth,0,Ne,De,ie.data);else if(T.isFramebufferTexture){if(pe)if(I)t.texStorage2D(s.TEXTURE_2D,re,Ae,ie.width,ie.height);else{let j=ie.width,le=ie.height;for(let Ce=0;Ce<re;Ce++)t.texImage2D(s.TEXTURE_2D,Ce,Ae,j,le,0,Ne,De,null),j>>=1,le>>=1}}else if(je.length>0&&tt){I&&pe&&t.texStorage2D(s.TEXTURE_2D,re,Ae,je[0].width,je[0].height);for(let j=0,le=je.length;j<le;j++)_e=je[j],I?t.texSubImage2D(s.TEXTURE_2D,j,0,0,Ne,De,_e):t.texImage2D(s.TEXTURE_2D,j,Ae,Ne,De,_e);T.generateMipmaps=!1}else I?(pe&&t.texStorage2D(s.TEXTURE_2D,re,Ae,ie.width,ie.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ne,De,ie)):t.texImage2D(s.TEXTURE_2D,0,Ae,Ne,De,ie);b(T,tt)&&E(te),Me.__version=ne.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Ke(R,T,k){if(T.image.length!==6)return;const te=be(R,T),Q=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);const ne=n.get(Q);if(Q.version!==ne.__version||te===!0){t.activeTexture(s.TEXTURE0+k);const Me=et.getPrimaries(et.workingColorSpace),oe=T.colorSpace===An?null:et.getPrimaries(T.colorSpace),de=T.colorSpace===An||Me===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Le=T.isCompressedTexture||T.image[0].isCompressedTexture,Je=T.image[0]&&T.image[0].isDataTexture,ie=[];for(let j=0;j<6;j++)!Le&&!Je?ie[j]=v(T.image[j],!1,!0,c):ie[j]=Je?T.image[j].image:T.image[j],ie[j]=pt(T,ie[j]);const tt=ie[0],Ne=x(tt)||a,De=r.convert(T.format,T.colorSpace),Ae=r.convert(T.type),_e=C(T.internalFormat,De,Ae,T.colorSpace),je=a&&T.isVideoTexture!==!0,I=ne.__version===void 0||te===!0;let pe=M(T,tt,Ne);we(s.TEXTURE_CUBE_MAP,T,Ne);let re;if(Le){je&&I&&t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,_e,tt.width,tt.height);for(let j=0;j<6;j++){re=ie[j].mipmaps;for(let le=0;le<re.length;le++){const Ce=re[le];T.format!==bn?De!==null?je?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,0,0,Ce.width,Ce.height,De,Ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,_e,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,0,0,Ce.width,Ce.height,De,Ae,Ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,_e,Ce.width,Ce.height,0,De,Ae,Ce.data)}}}else{re=T.mipmaps,je&&I&&(re.length>0&&pe++,t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,_e,ie[0].width,ie[0].height));for(let j=0;j<6;j++)if(Je){je?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ie[j].width,ie[j].height,De,Ae,ie[j].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,_e,ie[j].width,ie[j].height,0,De,Ae,ie[j].data);for(let le=0;le<re.length;le++){const $e=re[le].image[j].image;je?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,0,0,$e.width,$e.height,De,Ae,$e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,_e,$e.width,$e.height,0,De,Ae,$e.data)}}else{je?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,De,Ae,ie[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,_e,De,Ae,ie[j]);for(let le=0;le<re.length;le++){const Ce=re[le];je?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,0,0,De,Ae,Ce.image[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,_e,De,Ae,Ce.image[j])}}}b(T,Ne)&&E(s.TEXTURE_CUBE_MAP),ne.__version=Q.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Re(R,T,k,te,Q,ne){const Me=r.convert(k.format,k.colorSpace),oe=r.convert(k.type),de=C(k.internalFormat,Me,oe,k.colorSpace);if(!n.get(T).__hasExternalTextures){const Je=Math.max(1,T.width>>ne),ie=Math.max(1,T.height>>ne);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,ne,de,Je,ie,T.depth,0,Me,oe,null):t.texImage2D(Q,ne,de,Je,ie,0,Me,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),Ue(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,Q,n.get(k).__webglTexture,0,ve(T)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,Q,n.get(k).__webglTexture,ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function P(R,T,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let te=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(k||Ue(T)){const Q=T.depthTexture;Q&&Q.isDepthTexture&&(Q.type===hi?te=s.DEPTH_COMPONENT32F:Q.type===Li&&(te=s.DEPTH_COMPONENT24));const ne=ve(T);Ue(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,te,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,te,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,te,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const te=ve(T);k&&Ue(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,te,s.DEPTH24_STENCIL8,T.width,T.height):Ue(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{const te=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Q=0;Q<te.length;Q++){const ne=te[Q],Me=r.convert(ne.format,ne.colorSpace),oe=r.convert(ne.type),de=C(ne.internalFormat,Me,oe,ne.colorSpace),Le=ve(T);k&&Ue(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,de,T.width,T.height):Ue(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,de,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,de,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ue(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Y(T.depthTexture,0);const te=n.get(T.depthTexture).__webglTexture,Q=ve(T);if(T.depthTexture.format===ur)Ue(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(T.depthTexture.format===cs)Ue(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function K(R){const T=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ue(T.__webglFramebuffer,R)}else if(k){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]=s.createRenderbuffer(),P(T.__webglDepthbuffer[te],R,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),P(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ee(R,T,k){const te=n.get(R);T!==void 0&&Re(te.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&K(R)}function J(R){const T=R.texture,k=n.get(R),te=n.get(T);R.addEventListener("dispose",X),R.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=T.version,o.memory.textures++);const Q=R.isWebGLCubeRenderTarget===!0,ne=R.isWebGLMultipleRenderTargets===!0,Me=x(R)||a;if(Q){k.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer[oe]=[];for(let de=0;de<T.mipmaps.length;de++)k.__webglFramebuffer[oe][de]=s.createFramebuffer()}else k.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer=[];for(let oe=0;oe<T.mipmaps.length;oe++)k.__webglFramebuffer[oe]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(ne)if(i.drawBuffers){const oe=R.texture;for(let de=0,Le=oe.length;de<Le;de++){const Je=n.get(oe[de]);Je.__webglTexture===void 0&&(Je.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Ue(R)===!1){const oe=ne?T:[T];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let de=0;de<oe.length;de++){const Le=oe[de];k.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[de]);const Je=r.convert(Le.format,Le.colorSpace),ie=r.convert(Le.type),tt=C(Le.internalFormat,Je,ie,Le.colorSpace,R.isXRRenderTarget===!0),Ne=ve(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,tt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,k.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),P(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),we(s.TEXTURE_CUBE_MAP,T,Me);for(let oe=0;oe<6;oe++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)Re(k.__webglFramebuffer[oe][de],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de);else Re(k.__webglFramebuffer[oe],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);b(T,Me)&&E(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const oe=R.texture;for(let de=0,Le=oe.length;de<Le;de++){const Je=oe[de],ie=n.get(Je);t.bindTexture(s.TEXTURE_2D,ie.__webglTexture),we(s.TEXTURE_2D,Je,Me),Re(k.__webglFramebuffer,R,Je,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,0),b(Je,Me)&&E(s.TEXTURE_2D)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?oe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,te.__webglTexture),we(oe,T,Me),a&&T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)Re(k.__webglFramebuffer[de],R,T,s.COLOR_ATTACHMENT0,oe,de);else Re(k.__webglFramebuffer,R,T,s.COLOR_ATTACHMENT0,oe,0);b(T,Me)&&E(oe),t.unbindTexture()}R.depthBuffer&&K(R)}function Te(R){const T=x(R)||a,k=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let te=0,Q=k.length;te<Q;te++){const ne=k[te];if(b(ne,T)){const Me=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,oe=n.get(ne).__webglTexture;t.bindTexture(Me,oe),E(Me),t.unbindTexture()}}}function me(R){if(a&&R.samples>0&&Ue(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],k=R.width,te=R.height;let Q=s.COLOR_BUFFER_BIT;const ne=[],Me=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=n.get(R),de=R.isWebGLMultipleRenderTargets===!0;if(de)for(let Le=0;Le<T.length;Le++)t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Le=0;Le<T.length;Le++){ne.push(s.COLOR_ATTACHMENT0+Le),R.depthBuffer&&ne.push(Me);const Je=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Je===!1&&(R.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),de&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,oe.__webglColorRenderbuffer[Le]),Je===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Me]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Me])),de){const ie=n.get(T[Le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ie,0)}s.blitFramebuffer(0,0,k,te,0,0,k,te,Q,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let Le=0;Le<T.length;Le++){t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,oe.__webglColorRenderbuffer[Le]);const Je=n.get(T[Le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,Je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function ve(R){return Math.min(h,R.samples)}function Ue(R){const T=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ve(R){const T=o.render.frame;_.get(R)!==T&&(_.set(R,T),R.update())}function pt(R,T){const k=R.colorSpace,te=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===$l||k!==Ut&&k!==An&&(et.getTransfer(k)===at?a===!1?e.has("EXT_sRGB")===!0&&te===bn?(R.format=$l,R.minFilter=en,R.generateMipmaps=!1):T=ld.sRGBToLinear(T):(te!==bn||Q!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),T}this.allocateTextureUnit=$,this.resetTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=U,this.setTexture3D=B,this.setTextureCube=ce,this.rebindTextures=ee,this.setupRenderTarget=J,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Ue}function xy(s,e,t){const n=t.isWebGL2;function i(r,o=An){let a;const l=et.getTransfer(o);if(r===Bi)return s.UNSIGNED_BYTE;if(r===Qf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ed)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Gm)return s.BYTE;if(r===Vm)return s.SHORT;if(r===Lc)return s.UNSIGNED_SHORT;if(r===$f)return s.INT;if(r===Li)return s.UNSIGNED_INT;if(r===hi)return s.FLOAT;if(r===Ys)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Wm)return s.ALPHA;if(r===bn)return s.RGBA;if(r===Xm)return s.LUMINANCE;if(r===qm)return s.LUMINANCE_ALPHA;if(r===ur)return s.DEPTH_COMPONENT;if(r===cs)return s.DEPTH_STENCIL;if(r===$l)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===jm)return s.RED;if(r===td)return s.RED_INTEGER;if(r===Ym)return s.RG;if(r===nd)return s.RG_INTEGER;if(r===id)return s.RGBA_INTEGER;if(r===Xa||r===qa||r===ja||r===Ya)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Xa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Xa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ja)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ya)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Uu||r===Ou||r===Nu||r===Fu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Uu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ou)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Km)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Bu||r===ku)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Bu)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ku)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zu||r===Hu||r===Gu||r===Vu||r===Wu||r===Xu||r===qu||r===ju||r===Yu||r===Ku||r===Zu||r===Ju||r===$u||r===Qu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===zu)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hu)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gu)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vu)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wu)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xu)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qu)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ju)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yu)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ku)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zu)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ju)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$u)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qu)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ka||r===eh||r===th)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ka)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===eh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===th)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Zm||r===nh||r===ih||r===rh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ka)return a.COMPRESSED_RED_RGTC1_EXT;if(r===nh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ih)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===rh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===cr?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class yy extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pn extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const My={type:"move"};class xl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(My)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Sy extends bt{constructor(e,t,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:ur,u!==ur&&u!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ur&&(n=Li),n===void 0&&u===cs&&(n=cr),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ty extends ys{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=t.getContextAttributes();let p=null,m=null;const y=[],v=[],x=new Ht;x.layers.enable(1),x.viewport=new Qe;const S=new Ht;S.layers.enable(2),S.viewport=new Qe;const b=[x,S],E=new yy;E.layers.enable(1),E.layers.enable(2);let C=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let B=y[U];return B===void 0&&(B=new xl,y[U]=B),B.getTargetRaySpace()},this.getControllerGrip=function(U){let B=y[U];return B===void 0&&(B=new xl,y[U]=B),B.getGripSpace()},this.getHand=function(U){let B=y[U];return B===void 0&&(B=new xl,y[U]=B),B.getHandSpace()};function A(U){const B=v.indexOf(U.inputSource);if(B===-1)return;const ce=y[B];ce!==void 0&&(ce.update(U.inputSource,U.frame,c||o),ce.dispatchEvent({type:U.type,data:U.inputSource}))}function N(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",X);for(let U=0;U<y.length;U++){const B=v[U];B!==null&&(v[U]=null,y[U].disconnect(B))}C=null,M=null,e.setRenderTarget(p),d=null,f=null,h=null,i=null,m=null,Y.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",N),i.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,B),i.updateRenderState({baseLayer:d}),m=new _r(d.framebufferWidth,d.framebufferHeight,{format:bn,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let B=null,ce=null,ae=null;g.depth&&(ae=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,B=g.stencil?cs:ur,ce=g.stencil?cr:Li);const fe={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(fe),i.updateRenderState({layers:[f]}),m=new _r(f.textureWidth,f.textureHeight,{format:bn,type:Bi,depthTexture:new Sy(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ee=e.properties.get(m);Ee.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Y.setContext(i),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function X(U){for(let B=0;B<U.removed.length;B++){const ce=U.removed[B],ae=v.indexOf(ce);ae>=0&&(v[ae]=null,y[ae].disconnect(ce))}for(let B=0;B<U.added.length;B++){const ce=U.added[B];let ae=v.indexOf(ce);if(ae===-1){for(let Ee=0;Ee<y.length;Ee++)if(Ee>=v.length){v.push(ce),ae=Ee;break}else if(v[Ee]===null){v[Ee]=ce,ae=Ee;break}if(ae===-1)break}const fe=y[ae];fe&&fe.connect(ce)}}const q=new L,D=new L;function F(U,B,ce){q.setFromMatrixPosition(B.matrixWorld),D.setFromMatrixPosition(ce.matrixWorld);const ae=q.distanceTo(D),fe=B.projectionMatrix.elements,Ee=ce.projectionMatrix.elements,we=fe[14]/(fe[10]-1),be=fe[14]/(fe[10]+1),Oe=(fe[9]+1)/fe[5],Ke=(fe[9]-1)/fe[5],Re=(fe[8]-1)/fe[0],P=(Ee[8]+1)/Ee[0],ue=we*Re,K=we*P,ee=ae/(-Re+P),J=ee*-Re;B.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(J),U.translateZ(ee),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const Te=we+ee,me=be+ee,ve=ue-J,Ue=K+(ae-J),Ve=Oe*be/me*Te,pt=Ke*be/me*Te;U.projectionMatrix.makePerspective(ve,Ue,Ve,pt,Te,me),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function z(U,B){B===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(B.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;E.near=S.near=x.near=U.near,E.far=S.far=x.far=U.far,(C!==E.near||M!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,M=E.far);const B=U.parent,ce=E.cameras;z(E,B);for(let ae=0;ae<ce.length;ae++)z(ce[ae],B);ce.length===2?F(E,x,S):E.projectionMatrix.copy(x.projectionMatrix),G(U,E,B)};function G(U,B,ce){ce===null?U.matrix.copy(B.matrixWorld):(U.matrix.copy(ce.matrixWorld),U.matrix.invert(),U.matrix.multiply(B.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(B.projectionMatrix),U.projectionMatrixInverse.copy(B.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=hs*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(U){l=U,f!==null&&(f.fixedFoveation=U),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=U)};let $=null;function Z(U,B){if(u=B.getViewerPose(c||o),_=B,u!==null){const ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let ae=!1;ce.length!==E.cameras.length&&(E.cameras.length=0,ae=!0);for(let fe=0;fe<ce.length;fe++){const Ee=ce[fe];let we=null;if(d!==null)we=d.getViewport(Ee);else{const Oe=h.getViewSubImage(f,Ee);we=Oe.viewport,fe===0&&(e.setRenderTargetTextures(m,Oe.colorTexture,f.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(m))}let be=b[fe];be===void 0&&(be=new Ht,be.layers.enable(fe),be.viewport=new Qe,b[fe]=be),be.matrix.fromArray(Ee.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Ee.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(we.x,we.y,we.width,we.height),fe===0&&(E.matrix.copy(be.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ae===!0&&E.cameras.push(be)}}for(let ce=0;ce<y.length;ce++){const ae=v[ce],fe=y[ce];ae!==null&&fe!==void 0&&fe.update(ae,B,c||o)}$&&$(U,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),_=null}const Y=new gd;Y.setAnimationLoop(Z),this.setAnimationLoop=function(U){$=U},this.dispose=function(){}}}function Ey(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,dd(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,v,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===nn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===nn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function by(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const x=v.program;n.uniformBlockBinding(y,x)}function c(y,v){let x=i[y.id];x===void 0&&(_(y),x=u(y),i[y.id]=x,y.addEventListener("dispose",p));const S=v.program;n.updateUBOMapping(y,S);const b=e.render.frame;r[y.id]!==b&&(f(y),r[y.id]=b)}function u(y){const v=h();y.__bindingPointIndex=v;const x=s.createBuffer(),S=y.__size,b=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,S,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=i[y.id],x=y.uniforms,S=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,E=x.length;b<E;b++){const C=x[b];if(d(C,b,S)===!0){const M=C.__offset,A=Array.isArray(C.value)?C.value:[C.value];let N=0;for(let X=0;X<A.length;X++){const q=A[X],D=g(q);typeof q=="number"?(C.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,M+N,C.__data)):q.isMatrix3?(C.__data[0]=q.elements[0],C.__data[1]=q.elements[1],C.__data[2]=q.elements[2],C.__data[3]=q.elements[0],C.__data[4]=q.elements[3],C.__data[5]=q.elements[4],C.__data[6]=q.elements[5],C.__data[7]=q.elements[0],C.__data[8]=q.elements[6],C.__data[9]=q.elements[7],C.__data[10]=q.elements[8],C.__data[11]=q.elements[0]):(q.toArray(C.__data,N),N+=D.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,M,C.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,v,x){const S=y.value;if(x[v]===void 0){if(typeof S=="number")x[v]=S;else{const b=Array.isArray(S)?S:[S],E=[];for(let C=0;C<b.length;C++)E.push(b[C].clone());x[v]=E}return!0}else if(typeof S=="number"){if(x[v]!==S)return x[v]=S,!0}else{const b=Array.isArray(x[v])?x[v]:[x[v]],E=Array.isArray(S)?S:[S];for(let C=0;C<b.length;C++){const M=b[C];if(M.equals(E[C])===!1)return M.copy(E[C]),!0}}return!1}function _(y){const v=y.uniforms;let x=0;const S=16;let b=0;for(let E=0,C=v.length;E<C;E++){const M=v[E],A={boundary:0,storage:0},N=Array.isArray(M.value)?M.value:[M.value];for(let X=0,q=N.length;X<q;X++){const D=N[X],F=g(D);A.boundary+=F.boundary,A.storage+=F.storage}if(M.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,E>0){b=x%S;const X=S-b;b!==0&&X-A.boundary<0&&(x+=S-b,M.__offset=x)}x+=A.storage}return b=x%S,b>0&&(x+=S-b),y.__size=x,y.__cache={},this}function g(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class Md{constructor(e={}){const{canvas:t=Tg(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this._useLegacyLights=!1,this.toneMapping=Fi,this.toneMappingExposure=1;const v=this;let x=!1,S=0,b=0,E=null,C=-1,M=null;const A=new Qe,N=new Qe;let X=null;const q=new ye(0);let D=0,F=t.width,z=t.height,G=1,$=null,Z=null;const Y=new Qe(0,0,F,z),U=new Qe(0,0,F,z);let B=!1;const ce=new Nc;let ae=!1,fe=!1,Ee=null;const we=new xe,be=new se,Oe=new L,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return E===null?G:1}let P=n;function ue(w,O){for(let H=0;H<w.length;H++){const V=w[H],W=t.getContext(V,O);if(W!==null)return W}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pc}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",pe,!1),P===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),P=ue(O,w),P===null)throw ue(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let K,ee,J,Te,me,ve,Ue,Ve,pt,R,T,k,te,Q,ne,Me,oe,de,Le,Je,ie,tt,Ne,De;function Ae(){K=new Ov(P),ee=new Cv(P,K,e),K.init(ee),tt=new xy(P,K,ee),J=new _y(P,K,ee),Te=new Bv(P),me=new iy,ve=new vy(P,K,J,me,ee,tt,Te),Ue=new Lv(v),Ve=new Uv(v),pt=new Yg(P,ee),Ne=new wv(P,K,pt,ee),R=new Nv(P,pt,Te,Ne),T=new Gv(P,R,pt,Te),Le=new Hv(P,ee,ve),Me=new Pv(me),k=new ny(v,Ue,Ve,K,ee,Ne,Me),te=new Ey(v,me),Q=new sy,ne=new hy(K,ee),de=new Av(v,Ue,Ve,J,T,f,l),oe=new gy(v,T,ee),De=new by(P,Te,ee,J),Je=new Rv(P,K,Te,ee),ie=new Fv(P,K,Te,ee),Te.programs=k.programs,v.capabilities=ee,v.extensions=K,v.properties=me,v.renderLists=Q,v.shadowMap=oe,v.state=J,v.info=Te}Ae();const _e=new Ty(v,P);this.xr=_e,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=K.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=K.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(F,z,!1))},this.getSize=function(w){return w.set(F,z)},this.setSize=function(w,O,H=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,z=O,t.width=Math.floor(w*G),t.height=Math.floor(O*G),H===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(F*G,z*G).floor()},this.setDrawingBufferSize=function(w,O,H){F=w,z=O,G=H,t.width=Math.floor(w*H),t.height=Math.floor(O*H),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(Y)},this.setViewport=function(w,O,H,V){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,O,H,V),J.viewport(A.copy(Y).multiplyScalar(G).floor())},this.getScissor=function(w){return w.copy(U)},this.setScissor=function(w,O,H,V){w.isVector4?U.set(w.x,w.y,w.z,w.w):U.set(w,O,H,V),J.scissor(N.copy(U).multiplyScalar(G).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(w){J.setScissorTest(B=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(w=!0,O=!0,H=!0){let V=0;if(w){let W=!1;if(E!==null){const ge=E.texture.format;W=ge===id||ge===nd||ge===td}if(W){const ge=E.texture.type,Se=ge===Bi||ge===Li||ge===Lc||ge===cr||ge===Qf||ge===ed,Pe=de.getClearColor(),Ie=de.getClearAlpha(),ze=Pe.r,Fe=Pe.g,Be=Pe.b;Se?(d[0]=ze,d[1]=Fe,d[2]=Be,d[3]=Ie,P.clearBufferuiv(P.COLOR,0,d)):(_[0]=ze,_[1]=Fe,_[2]=Be,_[3]=Ie,P.clearBufferiv(P.COLOR,0,_))}else V|=P.COLOR_BUFFER_BIT}O&&(V|=P.DEPTH_BUFFER_BIT),H&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Q.dispose(),ne.dispose(),me.dispose(),Ue.dispose(),Ve.dispose(),T.dispose(),Ne.dispose(),De.dispose(),k.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Mn),_e.removeEventListener("sessionend",rt),Ee&&(Ee.dispose(),Ee=null),qt.stop()};function je(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=Te.autoReset,O=oe.enabled,H=oe.autoUpdate,V=oe.needsUpdate,W=oe.type;Ae(),Te.autoReset=w,oe.enabled=O,oe.autoUpdate=H,oe.needsUpdate=V,oe.type=W}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function re(w){const O=w.target;O.removeEventListener("dispose",re),j(O)}function j(w){le(w),me.remove(w)}function le(w){const O=me.get(w).programs;O!==void 0&&(O.forEach(function(H){k.releaseProgram(H)}),w.isShaderMaterial&&k.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,H,V,W,ge){O===null&&(O=Ke);const Se=W.isMesh&&W.matrixWorld.determinant()<0,Pe=sm(w,O,H,V,W);J.setMaterial(V,Se);let Ie=H.index,ze=1;if(V.wireframe===!0){if(Ie=R.getWireframeAttribute(H),Ie===void 0)return;ze=2}const Fe=H.drawRange,Be=H.attributes.position;let vt=Fe.start*ze,un=(Fe.start+Fe.count)*ze;ge!==null&&(vt=Math.max(vt,ge.start*ze),un=Math.min(un,(ge.start+ge.count)*ze)),Ie!==null?(vt=Math.max(vt,0),un=Math.min(un,Ie.count)):Be!=null&&(vt=Math.max(vt,0),un=Math.min(un,Be.count));const Ct=un-vt;if(Ct<0||Ct===1/0)return;Ne.setup(W,V,Pe,H,Ie);let ti,mt=Je;if(Ie!==null&&(ti=pt.get(Ie),mt=ie,mt.setIndex(ti)),W.isMesh)V.wireframe===!0?(J.setLineWidth(V.wireframeLinewidth*Re()),mt.setMode(P.LINES)):mt.setMode(P.TRIANGLES);else if(W.isLine){let We=V.linewidth;We===void 0&&(We=1),J.setLineWidth(We*Re()),W.isLineSegments?mt.setMode(P.LINES):W.isLineLoop?mt.setMode(P.LINE_LOOP):mt.setMode(P.LINE_STRIP)}else W.isPoints?mt.setMode(P.POINTS):W.isSprite&&mt.setMode(P.TRIANGLES);if(W.isInstancedMesh)mt.renderInstances(vt,Ct,W.count);else if(H.isInstancedBufferGeometry){const We=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ha=Math.min(H.instanceCount,We);mt.renderInstances(vt,Ct,Ha)}else mt.render(vt,Ct)};function Ce(w,O,H){w.transparent===!0&&w.side===jn&&w.forceSinglePass===!1?(w.side=nn,w.needsUpdate=!0,go(w,O,H),w.side=pi,w.needsUpdate=!0,go(w,O,H),w.side=jn):go(w,O,H)}this.compile=function(w,O,H=null){H===null&&(H=w),p=ne.get(H),p.init(),y.push(p),H.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),w!==H&&w.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(v._useLegacyLights);const V=new Set;return w.traverse(function(W){const ge=W.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){const Pe=ge[Se];Ce(Pe,H,W),V.add(Pe)}else Ce(ge,H,W),V.add(ge)}),y.pop(),p=null,V},this.compileAsync=function(w,O,H=null){const V=this.compile(w,O,H);return new Promise(W=>{function ge(){if(V.forEach(function(Se){me.get(Se).currentProgram.isReady()&&V.delete(Se)}),V.size===0){W(w);return}setTimeout(ge,10)}K.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let $e=null;function Mt(w){$e&&$e(w)}function Mn(){qt.stop()}function rt(){qt.start()}const qt=new gd;qt.setAnimationLoop(Mt),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(w){$e=w,_e.setAnimationLoop(w),w===null?qt.stop():qt.start()},_e.addEventListener("sessionstart",Mn),_e.addEventListener("sessionend",rt),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(O),O=_e.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,E),p=ne.get(w,y.length),p.init(),y.push(p),we.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ce.setFromProjectionMatrix(we),fe=this.localClippingEnabled,ae=Me.init(this.clippingPlanes,fe),g=Q.get(w,m.length),g.init(),m.push(g),Wn(w,O,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort($,Z),this.info.render.frame++,ae===!0&&Me.beginShadows();const H=p.state.shadowsArray;if(oe.render(H,w,O),ae===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),de.render(g,w),p.setupLights(v._useLegacyLights),O.isArrayCamera){const V=O.cameras;for(let W=0,ge=V.length;W<ge;W++){const Se=V[W];Mu(g,w,Se,Se.viewport)}}else Mu(g,w,O);E!==null&&(ve.updateMultisampleRenderTarget(E),ve.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(v,w,O),Ne.resetDefaultState(),C=-1,M=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Wn(w,O,H,V){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ce.intersectsSprite(w)){V&&Oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(we);const Se=T.update(w),Pe=w.material;Pe.visible&&g.push(w,Se,Pe,H,Oe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ce.intersectsObject(w))){const Se=T.update(w),Pe=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Oe.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Oe.copy(Se.boundingSphere.center)),Oe.applyMatrix4(w.matrixWorld).applyMatrix4(we)),Array.isArray(Pe)){const Ie=Se.groups;for(let ze=0,Fe=Ie.length;ze<Fe;ze++){const Be=Ie[ze],vt=Pe[Be.materialIndex];vt&&vt.visible&&g.push(w,Se,vt,H,Oe.z,Be)}}else Pe.visible&&g.push(w,Se,Pe,H,Oe.z,null)}}const ge=w.children;for(let Se=0,Pe=ge.length;Se<Pe;Se++)Wn(ge[Se],O,H,V)}function Mu(w,O,H,V){const W=w.opaque,ge=w.transmissive,Se=w.transparent;p.setupLightsView(H),ae===!0&&Me.setGlobalState(v.clippingPlanes,H),ge.length>0&&rm(W,ge,O,H),V&&J.viewport(A.copy(V)),W.length>0&&mo(W,O,H),ge.length>0&&mo(ge,O,H),Se.length>0&&mo(Se,O,H),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function rm(w,O,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const ge=ee.isWebGL2;Ee===null&&(Ee=new _r(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?Ys:Bi,minFilter:gr,samples:ge?4:0})),v.getDrawingBufferSize(be),ge?Ee.setSize(be.x,be.y):Ee.setSize(pa(be.x),pa(be.y));const Se=v.getRenderTarget();v.setRenderTarget(Ee),v.getClearColor(q),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Pe=v.toneMapping;v.toneMapping=Fi,mo(w,H,V),ve.updateMultisampleRenderTarget(Ee),ve.updateRenderTargetMipmap(Ee);let Ie=!1;for(let ze=0,Fe=O.length;ze<Fe;ze++){const Be=O[ze],vt=Be.object,un=Be.geometry,Ct=Be.material,ti=Be.group;if(Ct.side===jn&&vt.layers.test(V.layers)){const mt=Ct.side;Ct.side=nn,Ct.needsUpdate=!0,Su(vt,H,V,un,Ct,ti),Ct.side=mt,Ct.needsUpdate=!0,Ie=!0}}Ie===!0&&(ve.updateMultisampleRenderTarget(Ee),ve.updateRenderTargetMipmap(Ee)),v.setRenderTarget(Se),v.setClearColor(q,D),v.toneMapping=Pe}function mo(w,O,H){const V=O.isScene===!0?O.overrideMaterial:null;for(let W=0,ge=w.length;W<ge;W++){const Se=w[W],Pe=Se.object,Ie=Se.geometry,ze=V===null?Se.material:V,Fe=Se.group;Pe.layers.test(H.layers)&&Su(Pe,O,H,Ie,ze,Fe)}}function Su(w,O,H,V,W,ge){w.onBeforeRender(v,O,H,V,W,ge),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(v,O,H,V,w,ge),W.transparent===!0&&W.side===jn&&W.forceSinglePass===!1?(W.side=nn,W.needsUpdate=!0,v.renderBufferDirect(H,O,V,W,w,ge),W.side=pi,W.needsUpdate=!0,v.renderBufferDirect(H,O,V,W,w,ge),W.side=jn):v.renderBufferDirect(H,O,V,W,w,ge),w.onAfterRender(v,O,H,V,W,ge)}function go(w,O,H){O.isScene!==!0&&(O=Ke);const V=me.get(w),W=p.state.lights,ge=p.state.shadowsArray,Se=W.state.version,Pe=k.getParameters(w,W.state,ge,O,H),Ie=k.getProgramCacheKey(Pe);let ze=V.programs;V.environment=w.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(w.isMeshStandardMaterial?Ve:Ue).get(w.envMap||V.environment),ze===void 0&&(w.addEventListener("dispose",re),ze=new Map,V.programs=ze);let Fe=ze.get(Ie);if(Fe!==void 0){if(V.currentProgram===Fe&&V.lightsStateVersion===Se)return Eu(w,Pe),Fe}else Pe.uniforms=k.getUniforms(w),w.onBuild(H,Pe,v),w.onBeforeCompile(Pe,v),Fe=k.acquireProgram(Pe,Ie),ze.set(Ie,Fe),V.uniforms=Pe.uniforms;const Be=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=Me.uniform),Eu(w,Pe),V.needsLights=am(w),V.lightsStateVersion=Se,V.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.directionalShadowMap.value=W.state.directionalShadowMap,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotShadowMap.value=W.state.spotShadowMap,Be.spotLightMatrix.value=W.state.spotLightMatrix,Be.spotLightMap.value=W.state.spotLightMap,Be.pointShadowMap.value=W.state.pointShadowMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix),V.currentProgram=Fe,V.uniformsList=null,Fe}function Tu(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=na.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Eu(w,O){const H=me.get(w);H.outputColorSpace=O.outputColorSpace,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function sm(w,O,H,V,W){O.isScene!==!0&&(O=Ke),ve.resetTextureUnits();const ge=O.fog,Se=V.isMeshStandardMaterial?O.environment:null,Pe=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ut,Ie=(V.isMeshStandardMaterial?Ve:Ue).get(V.envMap||Se),ze=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Fe=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Be=!!H.morphAttributes.position,vt=!!H.morphAttributes.normal,un=!!H.morphAttributes.color;let Ct=Fi;V.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ct=v.toneMapping);const ti=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,mt=ti!==void 0?ti.length:0,We=me.get(V),Ha=p.state.lights;if(ae===!0&&(fe===!0||w!==M)){const hn=w===M&&V.id===C;Me.setState(V,w,hn)}let St=!1;V.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Ha.state.version||We.outputColorSpace!==Pe||W.isInstancedMesh&&We.instancing===!1||!W.isInstancedMesh&&We.instancing===!0||W.isSkinnedMesh&&We.skinning===!1||!W.isSkinnedMesh&&We.skinning===!0||W.isInstancedMesh&&We.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&We.instancingColor===!1&&W.instanceColor!==null||We.envMap!==Ie||V.fog===!0&&We.fog!==ge||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Me.numPlanes||We.numIntersection!==Me.numIntersection)||We.vertexAlphas!==ze||We.vertexTangents!==Fe||We.morphTargets!==Be||We.morphNormals!==vt||We.morphColors!==un||We.toneMapping!==Ct||ee.isWebGL2===!0&&We.morphTargetsCount!==mt)&&(St=!0):(St=!0,We.__version=V.version);let ji=We.currentProgram;St===!0&&(ji=go(V,O,W));let bu=!1,As=!1,Ga=!1;const jt=ji.getUniforms(),Yi=We.uniforms;if(J.useProgram(ji.program)&&(bu=!0,As=!0,Ga=!0),V.id!==C&&(C=V.id,As=!0),bu||M!==w){jt.setValue(P,"projectionMatrix",w.projectionMatrix),jt.setValue(P,"viewMatrix",w.matrixWorldInverse);const hn=jt.map.cameraPosition;hn!==void 0&&hn.setValue(P,Oe.setFromMatrixPosition(w.matrixWorld)),ee.logarithmicDepthBuffer&&jt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&jt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,As=!0,Ga=!0)}if(W.isSkinnedMesh){jt.setOptional(P,W,"bindMatrix"),jt.setOptional(P,W,"bindMatrixInverse");const hn=W.skeleton;hn&&(ee.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),jt.setValue(P,"boneTexture",hn.boneTexture,ve),jt.setValue(P,"boneTextureSize",hn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Va=H.morphAttributes;if((Va.position!==void 0||Va.normal!==void 0||Va.color!==void 0&&ee.isWebGL2===!0)&&Le.update(W,H,ji),(As||We.receiveShadow!==W.receiveShadow)&&(We.receiveShadow=W.receiveShadow,jt.setValue(P,"receiveShadow",W.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Yi.envMap.value=Ie,Yi.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),As&&(jt.setValue(P,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&om(Yi,Ga),ge&&V.fog===!0&&te.refreshFogUniforms(Yi,ge),te.refreshMaterialUniforms(Yi,V,G,z,Ee),na.upload(P,Tu(We),Yi,ve)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(na.upload(P,Tu(We),Yi,ve),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&jt.setValue(P,"center",W.center),jt.setValue(P,"modelViewMatrix",W.modelViewMatrix),jt.setValue(P,"normalMatrix",W.normalMatrix),jt.setValue(P,"modelMatrix",W.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const hn=V.uniformsGroups;for(let Wa=0,lm=hn.length;Wa<lm;Wa++)if(ee.isWebGL2){const Au=hn[Wa];De.update(Au,ji),De.bind(Au,ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ji}function om(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function am(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,O,H){me.get(w.texture).__webglTexture=O,me.get(w.depthTexture).__webglTexture=H;const V=me.get(w);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,O){const H=me.get(w);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,H=0){E=w,S=O,b=H;let V=!0,W=null,ge=!1,Se=!1;if(w){const Ie=me.get(w);Ie.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(P.FRAMEBUFFER,null),V=!1):Ie.__webglFramebuffer===void 0?ve.setupRenderTarget(w):Ie.__hasExternalTextures&&ve.rebindTextures(w,me.get(w.texture).__webglTexture,me.get(w.depthTexture).__webglTexture);const ze=w.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Se=!0);const Fe=me.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Fe[O])?W=Fe[O][H]:W=Fe[O],ge=!0):ee.isWebGL2&&w.samples>0&&ve.useMultisampledRTT(w)===!1?W=me.get(w).__webglMultisampledFramebuffer:Array.isArray(Fe)?W=Fe[H]:W=Fe,A.copy(w.viewport),N.copy(w.scissor),X=w.scissorTest}else A.copy(Y).multiplyScalar(G).floor(),N.copy(U).multiplyScalar(G).floor(),X=B;if(J.bindFramebuffer(P.FRAMEBUFFER,W)&&ee.drawBuffers&&V&&J.drawBuffers(w,W),J.viewport(A),J.scissor(N),J.setScissorTest(X),ge){const Ie=me.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ie.__webglTexture,H)}else if(Se){const Ie=me.get(w.texture),ze=O||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ie.__webglTexture,H||0,ze)}C=-1},this.readRenderTargetPixels=function(w,O,H,V,W,ge,Se){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Pe=Pe[Se]),Pe){J.bindFramebuffer(P.FRAMEBUFFER,Pe);try{const Ie=w.texture,ze=Ie.format,Fe=Ie.type;if(ze!==bn&&tt.convert(ze)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Fe===Ys&&(K.has("EXT_color_buffer_half_float")||ee.isWebGL2&&K.has("EXT_color_buffer_float"));if(Fe!==Bi&&tt.convert(Fe)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===hi&&(ee.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-V&&H>=0&&H<=w.height-W&&P.readPixels(O,H,V,W,tt.convert(ze),tt.convert(Fe),ge)}finally{const Ie=E!==null?me.get(E).__webglFramebuffer:null;J.bindFramebuffer(P.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(w,O,H=0){const V=Math.pow(2,-H),W=Math.floor(O.image.width*V),ge=Math.floor(O.image.height*V);ve.setTexture2D(O,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,w.x,w.y,W,ge),J.unbindTexture()},this.copyTextureToTexture=function(w,O,H,V=0){const W=O.image.width,ge=O.image.height,Se=tt.convert(H.format),Pe=tt.convert(H.type);ve.setTexture2D(H,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,H.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,H.unpackAlignment),O.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,V,w.x,w.y,W,ge,Se,Pe,O.image.data):O.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,V,w.x,w.y,O.mipmaps[0].width,O.mipmaps[0].height,Se,O.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,V,w.x,w.y,Se,Pe,O.image),V===0&&H.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(w,O,H,V,W=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=w.max.x-w.min.x+1,Se=w.max.y-w.min.y+1,Pe=w.max.z-w.min.z+1,Ie=tt.convert(V.format),ze=tt.convert(V.type);let Fe;if(V.isData3DTexture)ve.setTexture3D(V,0),Fe=P.TEXTURE_3D;else if(V.isDataArrayTexture)ve.setTexture2DArray(V,0),Fe=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,V.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,V.unpackAlignment);const Be=P.getParameter(P.UNPACK_ROW_LENGTH),vt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),un=P.getParameter(P.UNPACK_SKIP_PIXELS),Ct=P.getParameter(P.UNPACK_SKIP_ROWS),ti=P.getParameter(P.UNPACK_SKIP_IMAGES),mt=H.isCompressedTexture?H.mipmaps[0]:H.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,w.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,w.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,w.min.z),H.isDataTexture||H.isData3DTexture?P.texSubImage3D(Fe,W,O.x,O.y,O.z,ge,Se,Pe,Ie,ze,mt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Fe,W,O.x,O.y,O.z,ge,Se,Pe,Ie,mt.data)):P.texSubImage3D(Fe,W,O.x,O.y,O.z,ge,Se,Pe,Ie,ze,mt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Be),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,vt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,un),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ct),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ti),W===0&&V.generateMipmaps&&P.generateMipmap(Fe),J.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?ve.setTextureCube(w,0):w.isData3DTexture?ve.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ve.setTexture2DArray(w,0):ve.setTexture2D(w,0),J.unbindTexture()},this.resetState=function(){S=0,b=0,E=null,J.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Dc?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===wa?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ze?hr:sd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===hr?Ze:Ut}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ay extends Md{}Ay.prototype.isWebGL1Renderer=!0;class wy extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ry{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new L;class kc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new kc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Kh=new L,Zh=new Qe,Jh=new Qe,Cy=new L,$h=new xe,ko=new L,yl=new Qn,Qh=new xe,Ml=new lo;class Sd extends gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Iu,this.bindMatrix=new xe,this.bindMatrixInverse=new xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _i),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ko),this.boundingBox.expandByPoint(ko)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ko),this.boundingSphere.expandByPoint(ko)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yl.copy(this.boundingSphere),yl.applyMatrix4(i),e.ray.intersectsSphere(yl)!==!1&&(Qh.copy(i).invert(),Ml.copy(e.ray).applyMatrix4(Qh),!(this.boundingBox!==null&&Ml.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ml)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Iu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Zh.fromBufferAttribute(i.attributes.skinIndex,e),Jh.fromBufferAttribute(i.attributes.skinWeight,e),Kh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Jh.getComponent(r);if(o!==0){const a=Zh.getComponent(r);$h.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Cy.copy(Kh).applyMatrix4($h),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class ma extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Py extends bt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Lt,u=Lt,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ef=new xe,Ly=new xe;class Pa{constructor(e=[],t=[]){this.uuid=In(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Ly;ef.multiplyMatrices(a,t[r]),ef.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Pa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=od(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Py(t,e,e,bn,hi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ma),this.bones.push(o),this.boneInverses.push(new xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class tc extends Nt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xr=new xe,tf=new xe,zo=[],nf=new _i,Dy=new xe,Ls=new gt,Ds=new Qn;class Iy extends gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new tc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Dy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xr),nf.copy(e.boundingBox).applyMatrix4(Xr),this.boundingBox.union(nf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xr),Ds.copy(e.boundingSphere).applyMatrix4(Xr),this.boundingSphere.union(Ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(n),e.ray.intersectsSphere(Ds)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Xr),tf.multiplyMatrices(n,Xr),Ls.matrixWorld=tf,Ls.raycast(e,zo);for(let o=0,a=zo.length;o<a;o++){const l=zo[o];l.instanceId=r,l.object=this,t.push(l)}zo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new tc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class zc extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rf=new L,sf=new L,of=new xe,Sl=new lo,Ho=new Qn;class La extends ot{constructor(e=new Ft,t=new zc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)rf.fromBufferAttribute(t,i-1),sf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=rf.distanceTo(sf);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(i),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;of.copy(i).invert(),Sl.copy(e.ray).applyMatrix4(of);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,u=new L,h=new L,f=new L,d=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const m=Math.max(0,o.start),y=Math.min(_.count,o.start+o.count);for(let v=m,x=y-1;v<x;v+=d){const S=_.getX(v),b=_.getX(v+1);if(c.fromBufferAttribute(p,S),u.fromBufferAttribute(p,b),Sl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let v=m,x=y-1;v<x;v+=d){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),Sl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const af=new L,lf=new L;class Uy extends La{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)af.fromBufferAttribute(t,i),lf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+af.distanceTo(lf);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Oy extends La{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Td extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cf=new xe,nc=new lo,Go=new Qn,Vo=new L;class Ny extends ot{constructor(e=new Ft,t=new Td){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(i),Go.radius+=r,e.ray.intersectsSphere(Go)===!1)return;cf.copy(i).invert(),nc.copy(e.ray).applyMatrix4(cf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const p=c.getX(_);Vo.fromBufferAttribute(h,p),uf(Vo,p,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)Vo.fromBufferAttribute(h,_),uf(Vo,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function uf(s,e,t,n,i,r,o){const a=nc.distanceSqToPoint(s);if(a<t){const l=new L;nc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new se:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,i=[],r=[],o=[],a=new L,l=new xe;for(let d=0;d<=e;d++){const _=d/e;i[d]=this.getTangentAt(_,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Dt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Dt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],d*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Hc extends Vn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new se,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Fy extends Hc{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Gc(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Wo=new L,Tl=new Gc,El=new Gc,bl=new Gc;class By extends Vn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Wo.subVectors(i[0],i[1]).add(i[0]),c=Wo);const h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Wo.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Wo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),Tl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,g,p),El.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,g,p),bl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,g,p)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),El.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),bl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Tl.calc(l),El.calc(l),bl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function hf(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function ky(s,e){const t=1-s;return t*t*e}function zy(s,e){return 2*(1-s)*s*e}function Hy(s,e){return s*s*e}function Gs(s,e,t,n){return ky(s,e)+zy(s,t)+Hy(s,n)}function Gy(s,e){const t=1-s;return t*t*t*e}function Vy(s,e){const t=1-s;return 3*t*t*s*e}function Wy(s,e){return 3*(1-s)*s*s*e}function Xy(s,e){return s*s*s*e}function Vs(s,e,t,n,i){return Gy(s,e)+Vy(s,t)+Wy(s,n)+Xy(s,i)}class Ed extends Vn{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vs(e,i.x,r.x,o.x,a.x),Vs(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qy extends Vn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vs(e,i.x,r.x,o.x,a.x),Vs(e,i.y,r.y,o.y,a.y),Vs(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bd extends Vn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jy extends Vn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ad extends Vn{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Gs(e,i.x,r.x,o.x),Gs(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yy extends Vn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Gs(e,i.x,r.x,o.x),Gs(e,i.y,r.y,o.y),Gs(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wd extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(hf(a,l.x,c.x,u.x,h.x),hf(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new se().fromArray(i))}return this}}var ic=Object.freeze({__proto__:null,ArcCurve:Fy,CatmullRomCurve3:By,CubicBezierCurve:Ed,CubicBezierCurve3:qy,EllipseCurve:Hc,LineCurve:bd,LineCurve3:jy,QuadraticBezierCurve:Ad,QuadraticBezierCurve3:Yy,SplineCurve:wd});class Ky extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ic[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ic[i.type]().fromJSON(i))}return this}}class rc extends Ky{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new bd(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Ad(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Ed(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new wd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new Hc(e,t,n,i,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ia extends rc{constructor(e){super(e),this.uuid=In(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new rc().fromJSON(i))}return this}}const Zy={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Rd(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(n&&(r=tM(s,e,r,t)),s.length>80*t){a=c=s[0],l=u=s[1];for(let _=t;_<i;_+=t)h=s[_],f=s[_+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Js(r,o,t,a,l,d,0),o}};function Rd(s,e,t,n,i){let r,o;if(i===fM(s,e,t,n)>0)for(r=e;r<t;r+=n)o=ff(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=ff(r,s[r],s[r+1],o);return o&&Da(o,o.next)&&(Qs(o),o=o.next),o}function xr(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Da(t,t.next)||ft(t.prev,t,t.next)===0)){if(Qs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Js(s,e,t,n,i,r,o){if(!s)return;!o&&r&&oM(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?$y(s,n,i,r):Jy(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Qs(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Qy(xr(s),e,t),Js(s,e,t,n,i,r,2)):o===2&&eM(s,e,t,n,i,r):Js(xr(s),e,t,n,i,r,1);break}}}function Jy(s){const e=s.prev,t=s,n=s.next;if(ft(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&Jr(i,a,r,l,o,c,_.x,_.y)&&ft(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function $y(s,e,t,n){const i=s.prev,r=s,o=s.next;if(ft(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,g=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,m=sc(d,_,e,t,n),y=sc(g,p,e,t,n);let v=s.prevZ,x=s.nextZ;for(;v&&v.z>=m&&x&&x.z<=y;){if(v.x>=d&&v.x<=g&&v.y>=_&&v.y<=p&&v!==i&&v!==o&&Jr(a,u,l,h,c,f,v.x,v.y)&&ft(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=g&&x.y>=_&&x.y<=p&&x!==i&&x!==o&&Jr(a,u,l,h,c,f,x.x,x.y)&&ft(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=g&&v.y>=_&&v.y<=p&&v!==i&&v!==o&&Jr(a,u,l,h,c,f,v.x,v.y)&&ft(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=g&&x.y>=_&&x.y<=p&&x!==i&&x!==o&&Jr(a,u,l,h,c,f,x.x,x.y)&&ft(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Qy(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Da(i,r)&&Cd(i,n,n.next,r)&&$s(i,r)&&$s(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Qs(n),Qs(n.next),n=s=r),n=n.next}while(n!==s);return xr(n)}function eM(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cM(o,a)){let l=Pd(o,a);o=xr(o,o.next),l=xr(l,l.next),Js(o,e,t,n,i,r,0),Js(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function tM(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Rd(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(lM(c));for(i.sort(nM),r=0;r<i.length;r++)t=iM(i[r],t);return t}function nM(s,e){return s.x-e.x}function iM(s,e){const t=rM(s,e);if(!t)return e;const n=Pd(t,s);return xr(n,n.next),xr(t,t.next)}function rM(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Jr(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),$s(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&sM(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function sM(s,e){return ft(s.prev,s,e.prev)<0&&ft(e.next,s,s.next)<0}function oM(s,e,t,n){let i=s;do i.z===0&&(i.z=sc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,aM(i)}function aM(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function sc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function lM(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Jr(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function cM(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!uM(s,e)&&($s(s,e)&&$s(e,s)&&hM(s,e)&&(ft(s.prev,s,e.prev)||ft(s,e.prev,e))||Da(s,e)&&ft(s.prev,s,s.next)>0&&ft(e.prev,e,e.next)>0)}function ft(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Da(s,e){return s.x===e.x&&s.y===e.y}function Cd(s,e,t,n){const i=qo(ft(s,e,t)),r=qo(ft(s,e,n)),o=qo(ft(t,n,s)),a=qo(ft(t,n,e));return!!(i!==r&&o!==a||i===0&&Xo(s,t,e)||r===0&&Xo(s,n,e)||o===0&&Xo(t,s,n)||a===0&&Xo(t,e,n))}function Xo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function qo(s){return s>0?1:s<0?-1:0}function uM(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Cd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function $s(s,e){return ft(s.prev,s,s.next)<0?ft(s,e,s.next)>=0&&ft(s,s.prev,e)>=0:ft(s,e,s.prev)<0||ft(s,s.next,e)<0}function hM(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Pd(s,e){const t=new oc(s.i,s.x,s.y),n=new oc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ff(s,e,t,n){const i=new oc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function oc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fM(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class ns{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return ns.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];df(e),pf(n,e);let o=e.length;t.forEach(df);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,pf(n,t[l]);const a=Zy.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function df(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function pf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Vc extends Ft{constructor(e=new ia([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ht(i,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:dM;let v,x=!1,S,b,E,C;m&&(v=m.getSpacedPoints(u),x=!0,f=!1,S=m.computeFrenetFrames(u,!1),b=new L,E=new L,C=new L),f||(p=0,d=0,_=0,g=0);const M=a.extractPoints(c);let A=M.shape;const N=M.holes;if(!ns.isClockWise(A)){A=A.reverse();for(let P=0,ue=N.length;P<ue;P++){const K=N[P];ns.isClockWise(K)&&(N[P]=K.reverse())}}const q=ns.triangulateShape(A,N),D=A;for(let P=0,ue=N.length;P<ue;P++){const K=N[P];A=A.concat(K)}function F(P,ue,K){return ue||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(ue,K)}const z=A.length,G=q.length;function $(P,ue,K){let ee,J,Te;const me=P.x-ue.x,ve=P.y-ue.y,Ue=K.x-P.x,Ve=K.y-P.y,pt=me*me+ve*ve,R=me*Ve-ve*Ue;if(Math.abs(R)>Number.EPSILON){const T=Math.sqrt(pt),k=Math.sqrt(Ue*Ue+Ve*Ve),te=ue.x-ve/T,Q=ue.y+me/T,ne=K.x-Ve/k,Me=K.y+Ue/k,oe=((ne-te)*Ve-(Me-Q)*Ue)/(me*Ve-ve*Ue);ee=te+me*oe-P.x,J=Q+ve*oe-P.y;const de=ee*ee+J*J;if(de<=2)return new se(ee,J);Te=Math.sqrt(de/2)}else{let T=!1;me>Number.EPSILON?Ue>Number.EPSILON&&(T=!0):me<-Number.EPSILON?Ue<-Number.EPSILON&&(T=!0):Math.sign(ve)===Math.sign(Ve)&&(T=!0),T?(ee=-ve,J=me,Te=Math.sqrt(pt)):(ee=me,J=ve,Te=Math.sqrt(pt/2))}return new se(ee/Te,J/Te)}const Z=[];for(let P=0,ue=D.length,K=ue-1,ee=P+1;P<ue;P++,K++,ee++)K===ue&&(K=0),ee===ue&&(ee=0),Z[P]=$(D[P],D[K],D[ee]);const Y=[];let U,B=Z.concat();for(let P=0,ue=N.length;P<ue;P++){const K=N[P];U=[];for(let ee=0,J=K.length,Te=J-1,me=ee+1;ee<J;ee++,Te++,me++)Te===J&&(Te=0),me===J&&(me=0),U[ee]=$(K[ee],K[Te],K[me]);Y.push(U),B=B.concat(U)}for(let P=0;P<p;P++){const ue=P/p,K=d*Math.cos(ue*Math.PI/2),ee=_*Math.sin(ue*Math.PI/2)+g;for(let J=0,Te=D.length;J<Te;J++){const me=F(D[J],Z[J],ee);we(me.x,me.y,-K)}for(let J=0,Te=N.length;J<Te;J++){const me=N[J];U=Y[J];for(let ve=0,Ue=me.length;ve<Ue;ve++){const Ve=F(me[ve],U[ve],ee);we(Ve.x,Ve.y,-K)}}}const ce=_+g;for(let P=0;P<z;P++){const ue=f?F(A[P],B[P],ce):A[P];x?(E.copy(S.normals[0]).multiplyScalar(ue.x),b.copy(S.binormals[0]).multiplyScalar(ue.y),C.copy(v[0]).add(E).add(b),we(C.x,C.y,C.z)):we(ue.x,ue.y,0)}for(let P=1;P<=u;P++)for(let ue=0;ue<z;ue++){const K=f?F(A[ue],B[ue],ce):A[ue];x?(E.copy(S.normals[P]).multiplyScalar(K.x),b.copy(S.binormals[P]).multiplyScalar(K.y),C.copy(v[P]).add(E).add(b),we(C.x,C.y,C.z)):we(K.x,K.y,h/u*P)}for(let P=p-1;P>=0;P--){const ue=P/p,K=d*Math.cos(ue*Math.PI/2),ee=_*Math.sin(ue*Math.PI/2)+g;for(let J=0,Te=D.length;J<Te;J++){const me=F(D[J],Z[J],ee);we(me.x,me.y,h+K)}for(let J=0,Te=N.length;J<Te;J++){const me=N[J];U=Y[J];for(let ve=0,Ue=me.length;ve<Ue;ve++){const Ve=F(me[ve],U[ve],ee);x?we(Ve.x,Ve.y+v[u-1].y,v[u-1].x+K):we(Ve.x,Ve.y,h+K)}}}ae(),fe();function ae(){const P=i.length/3;if(f){let ue=0,K=z*ue;for(let ee=0;ee<G;ee++){const J=q[ee];be(J[2]+K,J[1]+K,J[0]+K)}ue=u+p*2,K=z*ue;for(let ee=0;ee<G;ee++){const J=q[ee];be(J[0]+K,J[1]+K,J[2]+K)}}else{for(let ue=0;ue<G;ue++){const K=q[ue];be(K[2],K[1],K[0])}for(let ue=0;ue<G;ue++){const K=q[ue];be(K[0]+z*u,K[1]+z*u,K[2]+z*u)}}n.addGroup(P,i.length/3-P,0)}function fe(){const P=i.length/3;let ue=0;Ee(D,ue),ue+=D.length;for(let K=0,ee=N.length;K<ee;K++){const J=N[K];Ee(J,ue),ue+=J.length}n.addGroup(P,i.length/3-P,1)}function Ee(P,ue){let K=P.length;for(;--K>=0;){const ee=K;let J=K-1;J<0&&(J=P.length-1);for(let Te=0,me=u+p*2;Te<me;Te++){const ve=z*Te,Ue=z*(Te+1),Ve=ue+ee+ve,pt=ue+J+ve,R=ue+J+Ue,T=ue+ee+Ue;Oe(Ve,pt,R,T)}}}function we(P,ue,K){l.push(P),l.push(ue),l.push(K)}function be(P,ue,K){Ke(P),Ke(ue),Ke(K);const ee=i.length/3,J=y.generateTopUV(n,i,ee-3,ee-2,ee-1);Re(J[0]),Re(J[1]),Re(J[2])}function Oe(P,ue,K,ee){Ke(P),Ke(ue),Ke(ee),Ke(ue),Ke(K),Ke(ee);const J=i.length/3,Te=y.generateSideWallUV(n,i,J-6,J-3,J-2,J-1);Re(Te[0]),Re(Te[1]),Re(Te[3]),Re(Te[1]),Re(Te[2]),Re(Te[3])}function Ke(P){i.push(l[P*3+0]),i.push(l[P*3+1]),i.push(l[P*3+2])}function Re(P){r.push(P.x),r.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return pM(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ic[i.type]().fromJSON(i)),new Vc(n,e.options)}}const dM={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new se(r,o),new se(a,l),new se(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],_=e[i*3+2],g=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new se(o,1-l),new se(c,1-h),new se(f,1-_),new se(g,1-m)]:[new se(a,1-l),new se(u,1-h),new se(d,1-_),new se(p,1-m)]}};function pM(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Wc extends Ft{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new L,f=new L,d=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const y=[],v=m/n;let x=0;m===0&&o===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){const b=S/t;h.x=-e*Math.cos(i+b*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(i+b*r)*Math.sin(o+v*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),p.push(b+x,1-v),y.push(c++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){const v=u[m][y+1],x=u[m][y],S=u[m+1][y],b=u[m+1][y+1];(m!==0||o>0)&&d.push(v,x,b),(m!==n-1||l<Math.PI)&&d.push(x,S,b)}this.setIndex(d),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(g,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ia extends Ft{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new L,h=new L,f=new L;for(let d=0;d<=n;d++)for(let _=0;_<=i;_++){const g=_/i*r,p=d/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(g),h.y=(e+t*Math.cos(p))*Math.sin(g),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let _=1;_<=i;_++){const g=(i+1)*d+_-1,p=(i+1)*(d-1)+_-1,m=(i+1)*(d-1)+_,y=(i+1)*d+_;o.push(g,p,y),o.push(p,m,y)}this.setIndex(o),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Xc extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xi extends Xc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Al extends _n{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ye(16777215),this.specular=new ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mM extends _n{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class br extends _n{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ye(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}function jo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function gM(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function _M(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function mf(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Ld(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class co{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class vM extends co{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sh,endingEnd:sh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case oh:r=e,a=2*t-n;break;case ah:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case oh:o=e,l=2*n-t;break;case ah:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,p=g*_,m=-f*p+2*f*g-f*_,y=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*_+1,v=(-1-d)*p+(1.5+d)*g+.5*_,x=d*p-d*g;for(let S=0;S!==a;++S)r[S]=m*o[u+S]+y*o[c+S]+v*o[l+S]+x*o[h+S];return r}}class xM extends co{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class yM extends co{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ei{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jo(t,this.TimeBufferType),this.values=jo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:jo(e.times,Array),values:jo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ks:t=this.InterpolantFactoryMethodDiscrete;break;case us:t=this.InterpolantFactoryMethodLinear;break;case Za:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return us;case this.InterpolantFactoryMethodSmooth:return Za}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&gM(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Za,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=us;class Ts extends ei{}Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Ks;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Dd extends ei{}Dd.prototype.ValueTypeName="color";class yr extends ei{}yr.prototype.ValueTypeName="number";class MM extends co{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Rn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Gi extends ei{InterpolantFactoryMethodLinear(e){return new MM(this.times,this.values,this.getValueSize(),e)}}Gi.prototype.ValueTypeName="quaternion";Gi.prototype.DefaultInterpolation=us;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class Es extends ei{}Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Ks;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;class Mr extends ei{}Mr.prototype.ValueTypeName="vector";class Id{constructor(e,t=-1,n,i=Jm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=In(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(TM(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ei.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=_M(l);l=mf(l,1,u),c=mf(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new yr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,g){if(d.length!==0){const p=[],m=[];Ld(d,p,m,_),p.length!==0&&g.push(new h(f,p,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const p=[],m=[];for(let y=0;y!==f[_].morphTargets.length;++y){const v=f[_];p.push(v.time),m.push(v.morphTarget===g?1:0)}i.push(new yr(".morphTargetInfluence["+g+"]",p,m))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(Mr,d+".position",f,"pos",i),n(Gi,d+".quaternion",f,"rot",i),n(Mr,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function SM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return yr;case"vector":case"vector2":case"vector3":case"vector4":return Mr;case"color":return Dd;case"quaternion":return Gi;case"bool":case"boolean":return Ts;case"string":return Es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function TM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=SM(s.type);if(s.times===void 0){const t=[],n=[];Ld(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ds={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class EM{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const bM=new EM;class Hn{constructor(e){this.manager=e!==void 0?e:bM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Hn.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class AM extends Error{constructor(e,t){super(e),this.response=t}}class ps extends Hn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ds.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:n,onError:i});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ai[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,_=d!==0;let g=0;const p=new ReadableStream({start(m){y();function y(){h.read().then(({done:v,value:x})=>{if(v)m.close();else{g+=x.byteLength;const S=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let b=0,E=u.length;b<E;b++){const C=u[b];C.onProgress&&C.onProgress(S)}m.enqueue(x),y()}})}}});return new Response(p)}else throw new AM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{ds.add(e,c);const u=ai[e];delete ai[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=ai[e];if(u===void 0)throw this.manager.itemError(e),c;delete ai[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class wM extends Hn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ds.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Zs("img");function l(){u(),ds.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Ua extends Hn{constructor(e){super(e)}load(e,t,n,i){const r=new bt,o=new wM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Oa extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const wl=new xe,gf=new L,_f=new L;class qc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nc,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gf.setFromMatrixPosition(e.matrixWorld),t.position.copy(gf),_f.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_f),t.updateMatrixWorld(),wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class RM extends qc{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=hs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ud extends Oa{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new RM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const vf=new xe,Is=new L,Rl=new L;class CM extends qc{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Is.setFromMatrixPosition(e.matrixWorld),n.position.copy(Is),Rl.copy(n.position),Rl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Rl),n.updateMatrixWorld(),i.makeTranslation(-Is.x,-Is.y,-Is.z),vf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vf)}}class ac extends Oa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new CM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class PM extends qc{constructor(){super(new Ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jc extends Oa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new PM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Od extends Oa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ga{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class LM extends Hn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ds.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){ds.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class DM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=xf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function xf(){return(typeof performance>"u"?Date:performance).now()}const Yc="\\[\\]\\.:\\/",IM=new RegExp("["+Yc+"]","g"),Kc="[^"+Yc+"]",UM="[^"+Yc.replace("\\.","")+"]",OM=/((?:WC+[\/:])*)/.source.replace("WC",Kc),NM=/(WCOD+)?/.source.replace("WCOD",UM),FM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc),BM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc),kM=new RegExp("^"+OM+NM+FM+BM+"$"),zM=["material","materials","bones","map"];class HM{constructor(e,t,n){const i=n||Ye.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ye{constructor(e,t,n){this.path=t,this.parsedPath=n||Ye.parseTrackName(t),this.node=Ye.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ye.Composite(e,t,n):new Ye(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(IM,"")}static parseTrackName(e){const t=kM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);zM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ye.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ye.Composite=HM;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Nd{constructor(e,t,n=0,i=1/0){this.ray=new lo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Uc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return lc(e,this,n,t),n.sort(yf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)lc(e[i],this,n,t);return n.sort(yf),n}}function yf(s,e){return s.distance-e.distance}function lc(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)lc(i[r],e,t,!0)}}class GM{constructor(){this.type="ShapePath",this.color=new ye,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new rc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const y=[];for(let v=0,x=m.length;v<x;v++){const S=m[v],b=new ia;b.curves=S.curves,y.push(b)}return y}function n(m,y){const v=y.length;let x=!1;for(let S=v-1,b=0;b<v;S=b++){let E=y[S],C=y[b],M=C.x-E.x,A=C.y-E.y;if(Math.abs(A)>Number.EPSILON){if(A<0&&(E=y[b],M=-M,C=y[S],A=-A),m.y<E.y||m.y>C.y)continue;if(m.y===E.y){if(m.x===E.x)return!0}else{const N=A*(m.x-E.x)-M*(m.y-E.y);if(N===0)return!0;if(N<0)continue;x=!x}}else{if(m.y!==E.y)continue;if(C.x<=m.x&&m.x<=E.x||E.x<=m.x&&m.x<=C.x)return!0}}return x}const i=ns.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new ia,l.curves=a.curves,c.push(l),c;let u=!i(r[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],_=0,g;f[_]=void 0,d[_]=[];for(let m=0,y=r.length;m<y;m++)a=r[m],g=a.getPoints(),o=i(g),o=e?!o:o,o?(!u&&f[_]&&_++,f[_]={s:new ia,p:g},f[_].s.curves=a.curves,u&&_++,d[_]=[]):d[_].push({h:a,p:g[0]});if(!f[0])return t(r);if(f.length>1){let m=!1,y=0;for(let v=0,x=f.length;v<x;v++)h[v]=[];for(let v=0,x=f.length;v<x;v++){const S=d[v];for(let b=0;b<S.length;b++){const E=S[b];let C=!0;for(let M=0;M<f.length;M++)n(E.p,f[M].p)&&(v!==M&&y++,C?(C=!1,h[M].push(E)):m=!0);C&&h[v].push(E)}}y>0&&m===!1&&(d=h)}let p;for(let m=0,y=f.length;m<y;m++){l=f[m].s,c.push(l),p=d[m];for(let v=0,x=p.length;v<x;v++)l.holes.push(p[v].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pc);class Na extends Hn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new ps(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=r.parse(JSON.parse(a));t&&t(l)},n,i)}parse(e){return new VM(e)}}class VM{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=WM(e,t,this.data);for(let r=0,o=i.length;r<o;r++)n.push(...i[r].toShapes());return n}}function WM(s,e,t){const n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=r;else{const h=XM(u,i,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function XM(s,e,t,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new GM;let a,l,c,u,h,f,d,_;if(r.o){const g=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,m=g.length;p<m;)switch(g[p++]){case"m":a=g[p++]*e+t,l=g[p++]*e+n,o.moveTo(a,l);break;case"l":a=g[p++]*e+t,l=g[p++]*e+n,o.lineTo(a,l);break;case"q":c=g[p++]*e+t,u=g[p++]*e+n,h=g[p++]*e+t,f=g[p++]*e+n,o.quadraticCurveTo(h,f,c,u);break;case"b":c=g[p++]*e+t,u=g[p++]*e+n,h=g[p++]*e+t,f=g[p++]*e+n,d=g[p++]*e+t,_=g[p++]*e+n,o.bezierCurveTo(h,f,d,_,c,u);break}}return{offsetX:r.ha*e,path:o}}class uo extends Vc{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}function Mf(s,e){if(e===$m)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Zl||e===rd){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Zl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class qM extends Hn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new JM(t)}),this.register(function(t){return new sS(t)}),this.register(function(t){return new oS(t)}),this.register(function(t){return new aS(t)}),this.register(function(t){return new QM(t)}),this.register(function(t){return new eS(t)}),this.register(function(t){return new tS(t)}),this.register(function(t){return new nS(t)}),this.register(function(t){return new ZM(t)}),this.register(function(t){return new iS(t)}),this.register(function(t){return new $M(t)}),this.register(function(t){return new rS(t)}),this.register(function(t){return new YM(t)}),this.register(function(t){return new lS(t)}),this.register(function(t){return new cS(t)})}load(e,t,n,i){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=ga.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ps(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Fd){try{o[Xe.KHR_BINARY_GLTF]=new uS(e)}catch(h){i&&i(h);return}r=JSON.parse(o[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new TS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Xe.KHR_MATERIALS_UNLIT:o[h]=new KM;break;case Xe.KHR_DRACO_MESH_COMPRESSION:o[h]=new hS(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:o[h]=new fS;break;case Xe.KHR_MESH_QUANTIZATION:o[h]=new dS;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function jM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class YM{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new ye(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ut);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new jc(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ac(u),c.distance=h;break;case"spot":c=new Ud(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ai(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class KM{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return di}extendParams(e,t,n){const i=[];e.color=new ye(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ut),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ze))}return Promise.all(i)}}class ZM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class JM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(a,a)}return Promise.all(r)}}class $M{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class QM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ut)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ze)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class eS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class tS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ye().setRGB(a[0],a[1],a[2],Ut),Promise.all(r)}}class nS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class iS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ye().setRGB(a[0],a[1],a[2],Ut),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ze)),Promise.all(r)}}class rS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class sS{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class oS{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class aS{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class lS{constructor(e){this.name=Xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class cS{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==En.TRIANGLES&&c.mode!==En.TRIANGLE_STRIP&&c.mode!==En.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const _ of h){const g=new xe,p=new L,m=new Rn,y=new L(1,1,1),v=new Iy(_.geometry,_.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),v.setMatrixAt(x,g.compose(p,m,y));for(const x in l)if(x==="_COLOR_0"){const S=l[x];v.instanceColor=new tc(S.array,S.itemSize,S.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,l[x]);ot.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Fd="glTF",Us=12,Sf={JSON:1313821514,BIN:5130562};class uS{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Us),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Fd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Us,r=new DataView(e,Us);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Sf.JSON){const c=new Uint8Array(e,Us+o,a);this.content=n.decode(c)}else if(l===Sf.BIN){const c=Us+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class hS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=cc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=cc[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=is[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const _=f.attributes[d],g=l[d];g!==void 0&&(_.normalized=g)}h(f)},a,c)})})}}class fS{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class dS{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class Bd extends co{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*c,g=_-c,p=-2*d+3*f,m=d-f,y=1-p,v=m-f+h;for(let x=0;x!==a;x++){const S=o[g+x+a],b=o[g+x+l]*u,E=o[_+x+a],C=o[_+x]*u;r[x]=y*S+v*b+p*E+m*C}return r}}const pS=new Rn;class mS extends Bd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return pS.fromArray(r).normalize().toArray(r),r}}const En={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},is={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Tf={9728:Lt,9729:en,9984:Kl,9985:Jf,9986:ta,9987:gr},Ef={33071:tn,33648:ca,10497:Hi},Cl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gS={CUBICSPLINE:void 0,LINEAR:us,STEP:Ks},Pl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _S(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Xc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pi})),s.DefaultMaterial}function Qi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ai(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vS(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function xS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yS(s){let e;const t=s.extensions&&s.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ll(t.attributes):e=s.indices+":"+Ll(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ll(s.targets[n]);return e}function Ll(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function uc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function MS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const SS=new xe;class TS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new jM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Ua(this.options.manager):this.textureLoader=new LM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ps(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Qi(r,a,i),Ai(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(ga.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Cl[i.type],a=is[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Nt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Cl[i.type],c=is[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,p;if(d&&d!==h){const m=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let v=t.cache.get(y);v||(g=new c(a,m*d,i.count*d/u),v=new Ry(g,d/u),t.cache.add(y,v)),p=new kc(v,l,f%d/u,_)}else a===null?g=new c(i.count*l):g=new c(a,f,i.count*l),p=new Nt(g,l,_);if(i.sparse!==void 0){const m=Cl.SCALAR,y=is[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,S=new y(o[1],v,i.sparse.count*m),b=new c(o[2],x,i.sparse.count*l);a!==null&&(p=new Nt(p.array.slice(),p.itemSize,p.normalized));for(let E=0,C=S.length;E<C;E++){const M=S[E];if(p.setX(M,b[E*l]),l>=2&&p.setY(M,b[E*l+1]),l>=3&&p.setZ(M,b[E*l+2]),l>=4&&p.setW(M,b[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Tf[f.magFilter]||en,u.minFilter=Tf[f.minFilter]||gr,u.wrapS=Ef[f.wrapS]||Hi,u.wrapT=Ef[f.wrapT]||Hi,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const p=new bt(g);p.needsUpdate=!0,f(p)}),t.load(ga.resolveURL(h,r.path),_,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||MS(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Td,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new zc,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Xc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){const h=i[Xe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new ye(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Ut),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ze)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=jn);const u=r.alphaMode||Pl.OPAQUE;if(u===Pl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Pl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==di&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new se(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==di&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==di){const h=r.emissiveFactor;a.emissive=new ye().setRGB(h[0],h[1],h[2],Ut)}return r.emissiveTexture!==void 0&&o!==di&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ze)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Ai(h,r),t.associations.set(h,{materials:e}),r.extensions&&Qi(i,h,r),h})}createUniqueName(e){const t=Ye.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return bf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=yS(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=bf(new Ft,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?_S(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],p=o[d];let m;const y=c[d];if(p.mode===En.TRIANGLES||p.mode===En.TRIANGLE_STRIP||p.mode===En.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Sd(g,y):new gt(g,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===En.TRIANGLE_STRIP?m.geometry=Mf(m.geometry,rd):p.mode===En.TRIANGLE_FAN&&(m.geometry=Mf(m.geometry,Zl));else if(p.mode===En.LINES)m=new Uy(g,y);else if(p.mode===En.LINE_STRIP)m=new La(g,y);else if(p.mode===En.LINE_LOOP)m=new Oy(g,y);else if(p.mode===En.POINTS)m=new Ny(g,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&xS(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Ai(m,r),p.extensions&&Qi(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Qi(i,h[0],r),h[0];const f=new Pn;r.extensions&&Qi(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(zn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ra(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ai(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new xe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Pa(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],_=i.samplers[d.sampler],g=d.target,p=g.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,y=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],_=h[2],g=h[3],p=h[4],m=[];for(let y=0,v=f.length;y<v;y++){const x=f[y],S=d[y],b=_[y],E=g[y],C=p[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const M=n._createAnimationTracks(x,S,b,E,C);if(M)for(let A=0;A<M.length;A++)m.push(M[A])}return new Id(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,SS)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new ma:c.length>1?u=new Pn:c.length===1?u=c[0]:u=new ot,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ai(u,r),r.extensions&&Qi(n,u,r),r.matrix!==void 0){const h=new xe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Pn;n.name&&(r.name=i.createUniqueName(n.name)),Ai(r,n),n.extensions&&Qi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof _n||f instanceof bt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Ei[r.path]===Ei.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Ei[r.path]){case Ei.weights:c=yr;break;case Ei.rotation:c=Gi;break;case Ei.position:case Ei.scale:c=Mr;break;default:switch(n.itemSize){case 1:c=yr;break;case 2:case 3:default:c=Mr;break}break}const u=i.interpolation!==void 0?gS[i.interpolation]:us,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const _=new c(l[f]+"."+Ei[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=uc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Gi?mS:Bd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ES(s,e,t){const n=e.attributes,i=new _i;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const u=uc(is[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,l=new L;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=uc(is[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Qn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function bf(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=cc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return et.workingColorSpace!==Ut&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),Ai(s,e),ES(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?vS(s,e.targets,t):s})}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Af=function(s){return URL.createObjectURL(new Blob([s],{type:"text/javascript"}))};try{URL.revokeObjectURL(Af(""))}catch{Af=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var wn=Uint8Array,Di=Uint16Array,hc=Uint32Array,kd=new wn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),zd=new wn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),bS=new wn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Hd=function(s,e){for(var t=new Di(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new hc(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return[t,i]},Gd=Hd(kd,2),Vd=Gd[0],AS=Gd[1];Vd[28]=258,AS[258]=28;var wS=Hd(zd,0),RS=wS[0],fc=new Di(32768);for(var lt=0;lt<32768;++lt){var bi=(lt&43690)>>>1|(lt&21845)<<1;bi=(bi&52428)>>>2|(bi&13107)<<2,bi=(bi&61680)>>>4|(bi&3855)<<4,fc[lt]=((bi&65280)>>>8|(bi&255)<<8)>>>1}var Ws=function(s,e,t){for(var n=s.length,i=0,r=new Di(e);i<n;++i)++r[s[i]-1];var o=new Di(e);for(i=0;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(t){a=new Di(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],u=e-s[i],h=o[s[i]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[fc[h]>>>l]=c}else for(a=new Di(n),i=0;i<n;++i)s[i]&&(a[i]=fc[o[s[i]-1]++]>>>15-s[i]);return a},ho=new wn(288);for(var lt=0;lt<144;++lt)ho[lt]=8;for(var lt=144;lt<256;++lt)ho[lt]=9;for(var lt=256;lt<280;++lt)ho[lt]=7;for(var lt=280;lt<288;++lt)ho[lt]=8;var Wd=new wn(32);for(var lt=0;lt<32;++lt)Wd[lt]=5;var CS=Ws(ho,9,1),PS=Ws(Wd,5,1),Dl=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},Bn=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},Il=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},LS=function(s){return(s/8|0)+(s&7&&1)},DS=function(s,e,t){(e==null||e<0)&&(e=0),(t==null||t>s.length)&&(t=s.length);var n=new(s instanceof Di?Di:s instanceof hc?hc:wn)(t-e);return n.set(s.subarray(e,t)),n},IS=function(s,e,t){var n=s.length;if(!n||t&&!t.l&&n<5)return e||new wn(0);var i=!e||t,r=!t||t.i;t||(t={}),e||(e=new wn(n*3));var o=function(Ee){var we=e.length;if(Ee>we){var be=new wn(Math.max(we*2,Ee));be.set(e),e=be}},a=t.f||0,l=t.p||0,c=t.b||0,u=t.l,h=t.d,f=t.m,d=t.n,_=n*8;do{if(!u){t.f=a=Bn(s,l,1);var g=Bn(s,l+1,3);if(l+=3,g)if(g==1)u=CS,h=PS,f=9,d=5;else if(g==2){var v=Bn(s,l,31)+257,x=Bn(s,l+10,15)+4,S=v+Bn(s,l+5,31)+1;l+=14;for(var b=new wn(S),E=new wn(19),C=0;C<x;++C)E[bS[C]]=Bn(s,l+C*3,7);l+=x*3;for(var M=Dl(E),A=(1<<M)-1,N=Ws(E,M,1),C=0;C<S;){var X=N[Bn(s,l,A)];l+=X&15;var p=X>>>4;if(p<16)b[C++]=p;else{var q=0,D=0;for(p==16?(D=3+Bn(s,l,3),l+=2,q=b[C-1]):p==17?(D=3+Bn(s,l,7),l+=3):p==18&&(D=11+Bn(s,l,127),l+=7);D--;)b[C++]=q}}var F=b.subarray(0,v),z=b.subarray(v);f=Dl(F),d=Dl(z),u=Ws(F,f,1),h=Ws(z,d,1)}else throw"invalid block type";else{var p=LS(l)+4,m=s[p-4]|s[p-3]<<8,y=p+m;if(y>n){if(r)throw"unexpected EOF";break}i&&o(c+m),e.set(s.subarray(p,y),c),t.b=c+=m,t.p=l=y*8;continue}if(l>_){if(r)throw"unexpected EOF";break}}i&&o(c+131072);for(var G=(1<<f)-1,$=(1<<d)-1,Z=l;;Z=l){var q=u[Il(s,l)&G],Y=q>>>4;if(l+=q&15,l>_){if(r)throw"unexpected EOF";break}if(!q)throw"invalid length/literal";if(Y<256)e[c++]=Y;else if(Y==256){Z=l,u=null;break}else{var U=Y-254;if(Y>264){var C=Y-257,B=kd[C];U=Bn(s,l,(1<<B)-1)+Vd[C],l+=B}var ce=h[Il(s,l)&$],ae=ce>>>4;if(!ce)throw"invalid distance";l+=ce&15;var z=RS[ae];if(ae>3){var B=zd[ae];z+=Il(s,l)&(1<<B)-1,l+=B}if(l>_){if(r)throw"unexpected EOF";break}i&&o(c+131072);for(var fe=c+U;c<fe;c+=4)e[c]=e[c-z],e[c+1]=e[c+1-z],e[c+2]=e[c+2-z],e[c+3]=e[c+3-z];c=fe}}t.l=u,t.p=Z,t.b=c,u&&(a=1,t.m=f,t.d=h,t.n=d)}while(!a);return c==e.length?e:DS(e,0,c)},US=new wn(0),OS=function(s){if((s[0]&15)!=8||s[0]>>>4>7||(s[0]<<8|s[1])%31)throw"invalid zlib data";if(s[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function NS(s,e){return IS((OS(s),s.subarray(2,-4)),e)}var FS=typeof TextDecoder<"u"&&new TextDecoder,BS=0;try{FS.decode(US,{stream:!0}),BS=1}catch{}function Xd(s,e,t){const n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let i=s,r=n,o=Math.floor((i+r)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?r=o:i=o,o=Math.floor((i+r)/2);return o}function kS(s,e,t,n){const i=[],r=[],o=[];i[0]=1;for(let a=1;a<=t;++a){r[a]=e-n[s+1-a],o[a]=n[s+a]-e;let l=0;for(let c=0;c<a;++c){const u=o[c+1],h=r[a-c],f=i[c]/(u+h);i[c]=l+u*f,l=h*f}i[a]=l}return i}function zS(s,e,t,n){const i=Xd(s,n,e),r=kS(i,n,s,e),o=new Qe(0,0,0,0);for(let a=0;a<=s;++a){const l=t[i-s+a],c=r[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function HS(s,e,t,n,i){const r=[];for(let h=0;h<=t;++h)r[h]=0;const o=[];for(let h=0;h<=n;++h)o[h]=r.slice(0);const a=[];for(let h=0;h<=t;++h)a[h]=r.slice(0);a[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let h=1;h<=t;++h){l[h]=e-i[s+1-h],c[h]=i[s+h]-e;let f=0;for(let d=0;d<h;++d){const _=c[d+1],g=l[h-d];a[h][d]=_+g;const p=a[d][h-1]/a[h][d];a[d][h]=f+_*p,f=g*p}a[h][h]=f}for(let h=0;h<=t;++h)o[0][h]=a[h][t];for(let h=0;h<=t;++h){let f=0,d=1;const _=[];for(let g=0;g<=t;++g)_[g]=r.slice(0);_[0][0]=1;for(let g=1;g<=n;++g){let p=0;const m=h-g,y=t-g;h>=g&&(_[d][0]=_[f][0]/a[y+1][m],p=_[d][0]*a[m][y]);const v=m>=-1?1:-m,x=h-1<=y?g-1:t-h;for(let b=v;b<=x;++b)_[d][b]=(_[f][b]-_[f][b-1])/a[y+1][m+b],p+=_[d][b]*a[m+b][y];h<=y&&(_[d][g]=-_[f][g-1]/a[y+1][h],p+=_[d][g]*a[h][y]),o[g][h]=p;const S=f;f=d,d=S}}let u=t;for(let h=1;h<=n;++h){for(let f=0;f<=t;++f)o[h][f]*=u;u*=t-h}return o}function GS(s,e,t,n,i){const r=i<s?i:s,o=[],a=Xd(s,n,e),l=HS(a,n,s,r,e),c=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),f=h.w;h.x*=f,h.y*=f,h.z*=f,c[u]=h}for(let u=0;u<=r;++u){const h=c[a-s].clone().multiplyScalar(l[u][0]);for(let f=1;f<=s;++f)h.add(c[a-s+f].clone().multiplyScalar(l[u][f]));o[u]=h}for(let u=r+1;u<=i+1;++u)o[u]=new Qe(0,0,0);return o}function VS(s,e){let t=1;for(let i=2;i<=s;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=s-e;++i)n*=i;return t/n}function WS(s){const e=s.length,t=[],n=[];for(let r=0;r<e;++r){const o=s[r];t[r]=new L(o.x,o.y,o.z),n[r]=o.w}const i=[];for(let r=0;r<e;++r){const o=t[r].clone();for(let a=1;a<=r;++a)o.sub(i[r-a].clone().multiplyScalar(VS(r,a)*n[a]));i[r]=o.divideScalar(n[0])}return i}function XS(s,e,t,n,i){const r=GS(s,e,t,n,i);return WS(r)}class qS extends Vn{constructor(e,t,n,i,r){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||this.knots.length-1;for(let o=0;o<n.length;++o){const a=n[o];this.controlPoints[o]=new Qe(a.x,a.y,a.z,a.w)}}getPoint(e,t=new L){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=zS(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new L){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=XS(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}}let Ge,xt,Qt;class jS extends Hn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=r.path===""?ga.extractUrlBase(e):r.path,a=new ps(this.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e,t){if(QS(e))Ge=new $S().parse(e);else{const i=Kd(e);if(!eT(i))throw new Error("THREE.FBXLoader: Unknown format.");if(Rf(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Rf(i));Ge=new JS().parse(i)}const n=new Ua(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new YS(n,this.manager).parse(Ge)}}class YS{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){xt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new KS().parse(i);return this.parseScene(i,r,n),Qt}parseConnections(){const e=new Map;return"Connections"in Ge&&Ge.Connections.connections.forEach(function(n){const i=n[0],r=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:r,relationship:o};e.get(i).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:i,relationship:o};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Ge.Objects){const n=Ge.Objects.Video;for(const i in n){const r=n[i],o=parseInt(i);if(e[o]=r.RelativeFilename||r.Filename,"Content"in r){const a=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(a||l){const c=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in Ge.Objects){const n=Ge.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,r=e.WrapModeV,o=i!==void 0?i.value:0,a=r!==void 0?r.value:0;if(n.wrapS=o===0?Hi:tn,n.wrapT=a===0?Hi:tn,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const i=this.textureLoader.path,r=xt.get(e.id).children;r!==void 0&&r.length>0&&t[r[0].ID]!==void 0&&(n=t[r[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const a=e.FileName.slice(-3).toLowerCase();if(a==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),o=new bt):(l.setPath(this.textureLoader.path),o=l.load(n))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),o=new bt):o=this.textureLoader.load(n);return this.textureLoader.setPath(i),o}parseMaterials(e){const t=new Map;if("Material"in Ge.Objects){const n=Ge.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!xt.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(r.toLowerCase()){case"phong":a=new Al;break;case"lambert":a=new mM;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),a=new Al;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=new ye().fromArray(e.Diffuse.value).convertSRGBToLinear():e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=new ye().fromArray(e.DiffuseColor.value).convertSRGBToLinear()),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=new ye().fromArray(e.Emissive.value).convertSRGBToLinear():e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=new ye().fromArray(e.EmissiveColor.value).convertSRGBToLinear()),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=new ye().fromArray(e.Specular.value).convertSRGBToLinear():e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=new ye().fromArray(e.SpecularColor.value).convertSRGBToLinear());const r=this;return xt.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=r.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,o.ID),i.map!==void 0&&(i.map.colorSpace=Ze);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=Ze);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=la,i.envMap.colorSpace=Ze);break;case"SpecularColor":i.specularMap=r.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=Ze);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in Ge.Objects&&t in Ge.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=xt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Ge.Objects){const n=Ge.Objects.Deformer;for(const i in n){const r=n[i],o=xt.get(parseInt(i));if(r.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(r.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const r=t[i.ID];if(r.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new xe().fromArray(r.TransformLink.a)};"Indexes"in r&&(o.indices=r.Indexes.a,o.weights=r.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const r=e.children[i],o=t[r.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=xt.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){Qt=new Pn;const i=this.parseModels(e.skeletons,t,n),r=Ge.Objects.Model,o=this;i.forEach(function(l){const c=r[l.ID];o.setLookAtProperties(l,c),xt.get(l.ID).parents.forEach(function(h){const f=i.get(h.ID);f!==void 0&&f.add(l)}),l.parent===null&&Qt.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.createAmbientLight(),Qt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=jd(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new ZS().parse();Qt.children.length===1&&Qt.children[0].isGroup&&(Qt.children[0].animations=a,Qt=Qt.children[0]),Qt.animations=a}parseModels(e,t,n){const i=new Map,r=Ge.Objects.Model;for(const o in r){const a=parseInt(o),l=r[o],c=xt.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new ma;break;case"Null":default:u=new Pn;break}u.name=l.attrName?Ye.sanitizeNodeName(l.attrName):"",u.userData.originalName=l.attrName,u.ID=a}this.getTransformData(u,l),i.set(a,u)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const h=r;r=new ma,r.matrixWorld.copy(c.transformLink),r.name=i?Ye.sanitizeNodeName(i):"",r.userData.originalName=i,r.ID=n,l.bones[u]=r,h!==null&&r.add(h)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){const r=Ge.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new ot;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new Ht(u,c,r,o),h!==null&&t.setFocalLength(h);break;case 1:t=new Ra(-a/2,a/2,l/2,-l/2,r,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new ot;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const r=Ge.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new ot;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=new ye().fromArray(n.Color.value).convertSRGBToLinear());let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new ac(r,o,a,l);break;case 1:t=new jc(r,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=zn.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=zn.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new Ud(r,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new ac(r,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new Al({name:Hn.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in r.attributes&&a.forEach(function(l){l.vertexColors=!0}),r.FBX_Deformer?(i=new Sd(r,o),i.normalizeSkinWeights()):i=new gt(r,o),i}createCurve(e,t){const n=e.children.reduce(function(r,o){return t.has(o.ID)&&(r=t.get(o.ID)),r},null),i=new zc({name:Hn.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new La(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Yd(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&xt.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=Ge.Objects.Model[i.ID];if("Lcl_Translation"in r){const o=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),Qt.add(e.target)):e.lookAt(new L().fromArray(o))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const r in e){const o=e[r];xt.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;xt.get(c).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new Pa(o.bones),i[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Ge.Objects){const t=Ge.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new xe().fromArray(r.Matrix.a)}):e[i.Node]=new xe().fromArray(i.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in Ge&&"AmbientColor"in Ge.GlobalSettings){const e=Ge.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const r=new ye(t,n,i).convertSRGBToLinear();Qt.add(new Od(r,1))}}}}class KS{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in Ge.Objects){const n=Ge.Objects.Geometry;for(const i in n){const r=xt.get(parseInt(i)),o=this.parseGeometry(r,n[i],e);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,r=[],o=e.parents.map(function(h){return Ge.Objects.Model[h.ID]});if(o.length===0)return;const a=e.children.reduce(function(h,f){return i[f.ID]!==void 0&&(h=i[f.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&r.push(n.morphTargets[h.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Yd(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=jd(c);return this.genGeometry(t,a,r,u)}genGeometry(e,t,n,i){const r=new Ft;e.attrName&&(r.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new ht(a.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),a.colors.length>0&&r.setAttribute("color",new ht(a.colors,3)),t&&(r.setAttribute("skinIndex",new Oc(a.weightsIndices,4)),r.setAttribute("skinWeight",new ht(a.vertexWeights,4)),r.FBX_Deformer=t),a.normal.length>0){const c=new He().getNormalMatrix(i),u=new ht(a.normal,3);u.applyNormalMatrix(c),r.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){const h=u===0?"uv":`uv${u}`;r.setAttribute(h,new ht(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(h,f){h!==c&&(r.addGroup(u,f-u,c),c=h,u=f)}),r.groups.length>0){const h=r.groups[r.groups.length-1],f=h.start+h.count;f!==a.materialIndex.length&&r.addGroup(f,a.materialIndex.length-f,c)}r.groups.length===0&&r.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:r,weight:i.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,o=[],a=[],l=[],c=[],u=[],h=[];const f=this;return e.vertexIndices.forEach(function(d,_){let g,p=!1;d<0&&(d=d^-1,p=!0);let m=[],y=[];if(o.push(d*3,d*3+1,d*3+2),e.color){const v=Yo(_,n,d,e.color);l.push(v[0],v[1],v[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(v){y.push(v.weight),m.push(v.id)}),y.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const v=[0,0,0,0],x=[0,0,0,0];y.forEach(function(S,b){let E=S,C=m[b];x.forEach(function(M,A,N){if(E>M){N[A]=E,E=M;const X=v[A];v[A]=C,C=X}})}),m=v,y=x}for(;y.length<4;)y.push(0),m.push(0);for(let v=0;v<4;++v)u.push(y[v]),h.push(m[v])}if(e.normal){const v=Yo(_,n,d,e.normal);a.push(v[0],v[1],v[2])}e.material&&e.material.mappingType!=="AllSame"&&(g=Yo(_,n,d,e.material)[0],g<0&&(f.negativeMaterialIndices=!0,g=0)),e.uv&&e.uv.forEach(function(v,x){const S=Yo(_,n,d,v);c[x]===void 0&&(c[x]=[]),c[x].push(S[0]),c[x].push(S[1])}),i++,p&&(i>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),f.genFace(t,e,o,g,a,l,c,u,h,i),n++,i=0,o=[],a=[],l=[],c=[],u=[],h=[])}),t}genFace(e,t,n,i,r,o,a,l,c,u){for(let h=2;h<u;h++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(h-1)*3]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+2]]),e.vertex.push(t.vertexPositions[n[h*3]]),e.vertex.push(t.vertexPositions[n[h*3+1]]),e.vertex.push(t.vertexPositions[n[h*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(h-1)*4]),e.vertexWeights.push(l[(h-1)*4+1]),e.vertexWeights.push(l[(h-1)*4+2]),e.vertexWeights.push(l[(h-1)*4+3]),e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(h-1)*4]),e.weightsIndices.push(c[(h-1)*4+1]),e.weightsIndices.push(c[(h-1)*4+2]),e.weightsIndices.push(c[(h-1)*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3])),t.color&&(e.colors.push(o[0]),e.colors.push(o[1]),e.colors.push(o[2]),e.colors.push(o[(h-1)*3]),e.colors.push(o[(h-1)*3+1]),e.colors.push(o[(h-1)*3+2]),e.colors.push(o[h*3]),e.colors.push(o[h*3+1]),e.colors.push(o[h*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[0]),e.normal.push(r[1]),e.normal.push(r[2]),e.normal.push(r[(h-1)*3]),e.normal.push(r[(h-1)*3+1]),e.normal.push(r[(h-1)*3+2]),e.normal.push(r[h*3]),e.normal.push(r[h*3+1]),e.normal.push(r[h*3+2])),t.uv&&t.uv.forEach(function(f,d){e.uvs[d]===void 0&&(e.uvs[d]=[]),e.uvs[d].push(a[d][0]),e.uvs[d].push(a[d][1]),e.uvs[d].push(a[d][(h-1)*2]),e.uvs[d].push(a[d][(h-1)*2+1]),e.uvs[d].push(a[d][h*2]),e.uvs[d].push(a[d][h*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=Ge.Objects.Geometry[a.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,i,a.name)})})}genMorphGeometry(e,t,n,i,r){const o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],a=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,u=new Float32Array(c);for(let _=0;_<l.length;_++){const g=l[_]*3;u[g]=a[_*3],u[g+1]=a[_*3+1],u[g+2]=a[_*3+2]}const h={vertexIndices:o,vertexPositions:u},f=this.genBuffers(h),d=new ht(f.vertex,3);d.name=r||n.attrName,d.applyMatrix4(i),e.morphAttributes.position.push(d)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let o=0,a=new ye;o<i.length;o+=4)a.fromArray(i,o).convertSRGBToLinear().toArray(i,o);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,r=[];for(let o=0;o<i.length;++o)r.push(o);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Ft;const n=t-1,i=e.KnotVector.a,r=[],o=e.Points.a;for(let h=0,f=o.length;h<f;h+=4)r.push(new Qe().fromArray(o,h));let a,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){a=n,l=i.length-1-a;for(let h=0;h<n;++h)r.push(r[h])}const u=new qS(n,i,r,a,l).getPoints(r.length*12);return new Ft().setFromPoints(u)}}class ZS{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(Ge.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Ge.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=Ge.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(tT),values:t[n].KeyValueFloat.a},r=xt.get(i.id);if(r!==void 0){const o=r.parents[0].ID,a=r.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){const t=Ge.Objects.AnimationLayer,n=new Map;for(const i in t){const r=[],o=xt.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(r[c]===void 0){const h=xt.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(h!==void 0){const f=Ge.Objects.Model[h.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const d={modelName:f.attrName?Ye.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Qt.traverse(function(_){_.ID===f.id&&(d.transform=_.matrix,_.userData.transformData&&(d.eulerOrder=_.userData.transformData.eulerOrder))}),d.transform||(d.transform=new xe),"PreRotation"in f&&(d.preRotation=f.PreRotation.value),"PostRotation"in f&&(d.postRotation=f.PostRotation.value),r[c]=d}}r[c]&&(r[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(r[c]===void 0){const h=xt.get(l.ID).parents.filter(function(m){return m.relationship!==void 0})[0].ID,f=xt.get(h).parents[0].ID,d=xt.get(f).parents[0].ID,_=xt.get(d).parents[0].ID,g=Ge.Objects.Model[_],p={modelName:g.attrName?Ye.sanitizeNodeName(g.attrName):"",morphName:Ge.Objects.Deformer[h].attrName};r[c]=p}r[c][u.attr]=u}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){const t=Ge.Objects.AnimationStack,n={};for(const i in t){const r=xt.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new Id(e.name,-1,t)}generateTracks(e){const t=[];let n=new L,i=new Rn,r=new L;if(e.transform&&e.transform.decompose(n,i,r),n=n.toArray(),i=new Cn().setFromQuaternion(i,e.eulerOrder).toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");o!==void 0&&t.push(o)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const o=this.generateRotationTrack(e.modelName,e.R.curves,i,e.preRotation,e.postRotation,e.eulerOrder);o!==void 0&&t.push(o)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.S.curves,r,"scale");o!==void 0&&t.push(o)}if(e.DeformPercent!==void 0){const o=this.generateMorphTrack(e);o!==void 0&&t.push(o)}return t}generateVectorTrack(e,t,n,i){const r=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(r,t,n);return new Mr(e+"."+i,r,o)}generateRotationTrack(e,t,n,i,r,o){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(zn.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(zn.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(zn.degToRad));const a=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(a,t,n);i!==void 0&&(i=i.map(zn.degToRad),i.push(o),i=new Cn().fromArray(i),i=new Rn().setFromEuler(i)),r!==void 0&&(r=r.map(zn.degToRad),r.push(o),r=new Cn().fromArray(r),r=new Rn().setFromEuler(r).invert());const c=new Rn,u=new Cn,h=[];for(let f=0;f<l.length;f+=3)u.set(l[f],l[f+1],l[f+2],o),c.setFromEuler(u),i!==void 0&&c.premultiply(i),r!==void 0&&c.multiply(r),c.toArray(h,f/3*4);return new Gi(e+".quaternion",a,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=Qt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new yr(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){const o=t[r];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,r=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];r.push(u),i[0]=u}else r.push(i[0]);if(a!==-1){const u=t.y.values[a];r.push(u),i[1]=u}else r.push(i[1]);if(l!==-1){const u=t.z.values[l];r.push(u),i[2]=u}else r.push(i[2])}),r}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],i=e.values[t]-n,r=Math.abs(i);if(r>=180){const o=r/180,a=i/o;let l=n+a;const c=e.times[t-1],h=(e.times[t]-c)/o;let f=c+h;const d=[],_=[];for(;f<e.times[t];)d.push(f),f+=h,_.push(l),l+=a;e.times=Cf(e.times,t,d),e.values=Cf(e.values,t,_)}}}}class JS{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new qd,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++r]):u?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in a?(n==="PoseNode"?a.PoseNode.push(r):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=r)):typeof o.id=="number"?(a[n]={},a[n][o.id]=r):n!=="Properties70"&&(n==="PoseNode"?a[n]=[r]:a[n]=r),typeof o.id=="number"&&(r.id=o.id),o.name!==""&&(r.attrName=o.name),o.type!==""&&(r.attrType=o.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=r.split(",").slice(3);h=h.map(function(f){return f.trim().replace(/^"/,"")}),i="connections",r=[c,u],iT(r,h),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=r),i in o&&Array.isArray(o[i])?o[i].push(r):i!=="a"?o[i]=r:o.a=r,this.setCurrentProp(o,i),i==="a"&&r.slice(-1)!==","&&(o.a=Ol(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Ol(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],o=i[1],a=i[2],l=i[3];let c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Ol(c);break}this.getPrevNode()[r]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class $S{parse(e){const t=new wf(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new qd;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(i===0)return null;const l=[];for(let f=0;f<r;f++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(a,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,o){o!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:r,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),r=e.getUint32(),o=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const a=NS(new Uint8Array(e.getArrayBuffer(o))),l=new wf(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class wf{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class qd{add(e,t){this[e]=t}}function QS(s){const e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===Kd(s,0,e.length)}function eT(s){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function Rf(s){const e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function tT(s){return s/46186158e3}const nT=[];function Yo(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,o=r+n.dataSize;return rT(nT,n.buffer,r,o)}const Ul=new Cn,qr=new L;function jd(s){const e=new xe,t=new xe,n=new xe,i=new xe,r=new xe,o=new xe,a=new xe,l=new xe,c=new xe,u=new xe,h=new xe,f=new xe,d=s.inheritType?s.inheritType:0;if(s.translation&&e.setPosition(qr.fromArray(s.translation)),s.preRotation){const A=s.preRotation.map(zn.degToRad);A.push(s.eulerOrder||Cn.DEFAULT_ORDER),t.makeRotationFromEuler(Ul.fromArray(A))}if(s.rotation){const A=s.rotation.map(zn.degToRad);A.push(s.eulerOrder||Cn.DEFAULT_ORDER),n.makeRotationFromEuler(Ul.fromArray(A))}if(s.postRotation){const A=s.postRotation.map(zn.degToRad);A.push(s.eulerOrder||Cn.DEFAULT_ORDER),i.makeRotationFromEuler(Ul.fromArray(A)),i.invert()}s.scale&&r.scale(qr.fromArray(s.scale)),s.scalingOffset&&a.setPosition(qr.fromArray(s.scalingOffset)),s.scalingPivot&&o.setPosition(qr.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(qr.fromArray(s.rotationOffset)),s.rotationPivot&&c.setPosition(qr.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(h.copy(s.parentMatrix),u.copy(s.parentMatrixWorld));const _=t.clone().multiply(n).multiply(i),g=new xe;g.extractRotation(u);const p=new xe;p.copyPosition(u);const m=p.clone().invert().multiply(u),y=g.clone().invert().multiply(m),v=r,x=new xe;if(d===0)x.copy(g).multiply(_).multiply(y).multiply(v);else if(d===1)x.copy(g).multiply(y).multiply(_).multiply(v);else{const N=new xe().scale(new L().setFromMatrixScale(h)).clone().invert(),X=y.clone().multiply(N);x.copy(g).multiply(_).multiply(X).multiply(v)}const S=c.clone().invert(),b=o.clone().invert();let E=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(S).multiply(a).multiply(o).multiply(r).multiply(b);const C=new xe().copyPosition(E),M=u.clone().multiply(C);return f.copyPosition(M),E=f.clone().multiply(x),E.premultiply(u.invert()),E}function Yd(s){s=s||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function Ol(s){return s.split(",").map(function(t){return parseFloat(t)})}function Kd(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function iT(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function rT(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}function Cf(s,e,t){return s.slice(0,e).concat(t).concat(s.slice(e))}var Pf=class{target;name;intersected;wasIntersected=!1;distance;constructor(s,e){this.target=s,this.name=e,this.intersected=!1,this.distance=0}},$t=class{type;cancelBubble;originalEvent;coords=new se(0,0);distance=0;intersected=!1;constructor(s,e=null){this.cancelBubble=!1,this.type=s,this.originalEvent=e}stopPropagation(){this.cancelBubble=!0}},sT=class{renderer;camera;domElement;bindEventsOnBodyElement;autoAdd;scene;mouse;supportsPointerEvents;interactiveObjects;closestObject;raycaster;treatTouchEventsAsMouseEvents;constructor(s,e,t,n){this.renderer=s,this.camera=e,this.domElement=t,this.bindEventsOnBodyElement=n&&typeof n.bindEventsOnBodyElement<"u"?n.bindEventsOnBodyElement:!0,this.scene=n&&typeof n.scene<"u"?n.scene:null,this.scene&&(this.scene.onBeforeRender=()=>{this.autoAdd&&this.scene!==null&&this.scene.traverse(i=>{this.add(i),i.addEventListener("removed",r=>{this.remove(r.target)})}),this.update()}),this.autoAdd=n&&typeof n.autoAdd<"u"?n.autoAdd:!1,this.autoAdd&&this.scene===null&&console.error("Attention: Options.scene needs to be set when using options.autoAdd"),this.mouse=new se(-1,1),this.supportsPointerEvents=!!window.PointerEvent,this.interactiveObjects=[],this.closestObject=null,this.raycaster=new Nd,t.addEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?t.ownerDocument.addEventListener("pointermove",this.onDocumentPointerMove):t.addEventListener("pointermove",this.onDocumentPointerMove),t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?t.ownerDocument.addEventListener("mousemove",this.onDocumentMouseMove):t.addEventListener("mousemove",this.onDocumentMouseMove),t.addEventListener("mousedown",this.onMouseDown),t.addEventListener("mouseup",this.onMouseUp),t.addEventListener("touchstart",this.onTouchStart,{passive:!0}),t.addEventListener("touchmove",this.onTouchMove,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.treatTouchEventsAsMouseEvents=!0}dispose=()=>{this.domElement.removeEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("pointermove",this.onDocumentPointerMove):this.domElement.removeEventListener("pointermove",this.onDocumentPointerMove),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("mousemove",this.onDocumentMouseMove):this.domElement.removeEventListener("mousemove",this.onDocumentMouseMove),this.domElement.removeEventListener("mousedown",this.onMouseDown),this.domElement.removeEventListener("mouseup",this.onMouseUp),this.domElement.removeEventListener("touchstart",this.onTouchStart),this.domElement.removeEventListener("touchmove",this.onTouchMove),this.domElement.removeEventListener("touchend",this.onTouchEnd)};add=(s,e=[])=>{if(s&&!this.interactiveObjects.find(t=>t.target===s))if(e.length>0)e.forEach(t=>{let n=s.getObjectByName(t);if(n){let i=new Pf(n,t);this.interactiveObjects.push(i)}});else{let t=new Pf(s,s.name);this.interactiveObjects.push(t)}};remove=(s,e=[])=>{!s||(e.length>0?e.forEach(t=>{let n=s.getObjectByName(t);n&&(this.interactiveObjects=this.interactiveObjects.filter(i=>i.target!==n))}):this.interactiveObjects=this.interactiveObjects.filter(t=>t.target!==s))};update=()=>{this.raycaster.setFromCamera(this.mouse,this.camera),this.interactiveObjects.forEach(n=>{n.target&&this.checkIntersection(n)}),this.interactiveObjects.sort(function(n,i){return n.distance-i.distance});let s=this.interactiveObjects.find(n=>n.intersected)??null;if(s!=this.closestObject){if(this.closestObject){let n=new $t("mouseout");this.dispatch(this.closestObject,n)}if(s){let n=new $t("mouseover");this.dispatch(s,n)}this.closestObject=s}let e;this.interactiveObjects.forEach(n=>{!n.intersected&&n.wasIntersected&&(e||(e=new $t("mouseleave")),this.dispatch(n,e))});let t;this.interactiveObjects.forEach(n=>{n.intersected&&!n.wasIntersected&&(t||(t=new $t("mouseenter")),this.dispatch(n,t))})};checkIntersection=s=>{let e=this.raycaster.intersectObjects([s.target],!0);if(s.wasIntersected=s.intersected,e.length>0){let t=e[0].distance;e.forEach(n=>{n.distance<t&&(t=n.distance)}),s.intersected=!0,s.distance=t}else s.intersected=!1};onDocumentMouseMove=s=>{this.mapPositionToPoint(this.mouse,s.clientX,s.clientY);let e=new $t("mousemove",s);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};onDocumentPointerMove=s=>{this.mapPositionToPoint(this.mouse,s.clientX,s.clientY);let e=new $t("pointermove",s);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};onTouchMove=s=>{s.touches.length>0&&this.mapPositionToPoint(this.mouse,s.touches[0].clientX,s.touches[0].clientY);let e=new $t(this.treatTouchEventsAsMouseEvents?"mousemove":"touchmove",s);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};onMouseClick=s=>{this.update();let e=new $t("click",s);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})};onMouseDown=s=>{this.mapPositionToPoint(this.mouse,s.clientX,s.clientY),this.update();let e=new $t("mousedown",s);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})};onPointerDown=s=>{this.mapPositionToPoint(this.mouse,s.clientX,s.clientY),this.update();let e=new $t("pointerdown",s);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})};onTouchStart=s=>{s.touches.length>0&&this.mapPositionToPoint(this.mouse,s.touches[0].clientX,s.touches[0].clientY),this.update();let e=new $t(this.treatTouchEventsAsMouseEvents?"mousedown":"touchstart",s);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})};onMouseUp=s=>{let e=new $t("mouseup",s);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};onPointerUp=s=>{let e=new $t("pointerup",s);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};onTouchEnd=s=>{s.touches.length>0&&this.mapPositionToPoint(this.mouse,s.touches[0].clientX,s.touches[0].clientY),this.update();let e=new $t(this.treatTouchEventsAsMouseEvents?"mouseup":"touchend",s);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};dispatch=(s,e)=>{s.target&&!e.cancelBubble&&(e.coords=this.mouse,e.distance=s.distance,e.intersected=s.intersected,s.target.dispatchEvent(e))};mapPositionToPoint=(s,e,t)=>{let n=this.renderer.domElement.getBoundingClientRect();s.x=(e-n.left)/n.width*2-1,s.y=-((t-n.top)/n.height)*2+1}};const Nl=new WeakMap;class oT extends Hn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new ps(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n){this.decodeDracoFile(e,t,null,null,Ze).catch(n)}decodeDracoFile(e,t,n,i,r=Ut){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Nl.has(e)){const l=Nl.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Nl.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Ft;e.index&&t.setIndex(new Nt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,l=new Nt(o,a);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Ze)return;const n=new ye;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new ps(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=aT.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function aT(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const d=t(h,f,new Int8Array(l),c),_=d.attributes.map(g=>g.array.buffer);d.index&&_.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},_)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{h.destroy(f)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,d;const _=a.GetEncodedGeometryType(l);if(_===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,f);else if(_===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const g={index:null,attributes:[]};for(const p in u){const m=self[h[p]];let y,v;if(c.useUniqueIDs)v=u[p],y=a.GetAttributeByUniqueId(f,v);else{if(v=a.GetAttributeId(f,o[u[p]]),v===-1)continue;y=a.GetAttribute(f,v)}const x=i(o,a,f,p,m,y);p==="color"&&(x.vertexColorSpace=c.vertexColorSpace),g.attributes.push(x)}return _===o.TRIANGULAR_MESH&&(g.index=n(o,a,f)),o.destroy(f),g}function n(o,a,l){const u=l.num_faces()*3,h=u*4,f=o._malloc(h);a.GetTrianglesUInt32Array(l,h,f);const d=new Uint32Array(o.HEAPF32.buffer,f,u).slice();return o._free(f),{array:d,itemSize:1}}function i(o,a,l,c,u,h){const f=h.num_components(),_=l.num_points()*f,g=_*u.BYTES_PER_ELEMENT,p=r(o,u),m=o._malloc(g);a.GetAttributeDataArrayForAllPoints(l,h,p,g,m);const y=new u(o.HEAPF32.buffer,m,_).slice();return o._free(m),{name:c,array:y,itemSize:f}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function ci(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Zd(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ms={duration:.5,overwrite:!1,delay:0},Zc,Vt,ct,Ln=1e8,st=1/Ln,dc=Math.PI*2,lT=dc/4,cT=0,Jd=Math.sqrt,uT=Math.cos,hT=Math.sin,Ot=function(e){return typeof e=="string"},_t=function(e){return typeof e=="function"},mi=function(e){return typeof e=="number"},Jc=function(e){return typeof e>"u"},$n=function(e){return typeof e=="object"},rn=function(e){return e!==!1},$c=function(){return typeof window<"u"},Ko=function(e){return _t(e)||Ot(e)},$d=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wt=Array.isArray,pc=/(?:-?\.?\d|\.)+/gi,Qd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$r=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ep=/[+-]=-?[.\d]+/,tp=/[^,'"\[\]\s]+/gi,fT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ut,Xn,mc,Qc,xn={},_a={},np,ip=function(e){return(_a=Sr(e,xn))&&ln},eu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},eo=function(e,t){return!t&&console.warn(e)},rp=function(e,t){return e&&(xn[e]=t)&&_a&&(_a[e]=t)||xn},to=function(){return 0},dT={suppressEvents:!0,isStart:!0,kill:!1},ra={suppressEvents:!0,kill:!1},pT={suppressEvents:!0},tu={},ki=[],gc={},sp,pn={},Bl={},Lf=30,sa=[],nu="",iu=function(e){var t=e[0],n,i;if($n(t)||_t(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=sa.length;i--&&!sa[i].targetTest(t););n=sa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Cp(e[i],n)))||e.splice(i,1);return e},fr=function(e){return e._gsap||iu(Dn(e))[0]._gsap},op=function(e,t,n){return(n=e[t])&&_t(n)?e[t]():Jc(n)&&e.getAttribute&&e.getAttribute(t)||n},sn=function(e,t){return(e=e.split(",")).forEach(t)||e},yt=function(e){return Math.round(e*1e5)/1e5||0},It=function(e){return Math.round(e*1e7)/1e7||0},rs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},mT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},va=function(){var e=ki.length,t=ki.slice(0),n,i;for(gc={},ki.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ap=function(e,t,n,i){ki.length&&!Vt&&va(),e.render(t,n,i||Vt&&t<0&&(e._initted||e._startAt)),ki.length&&!Vt&&va()},lp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(tp).length<2?t:Ot(e)?e.trim():e},cp=function(e){return e},Un=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},gT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Sr=function(e,t){for(var n in t)e[n]=t[n];return e},Df=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=$n(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},xa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Xs=function(e){var t=e.parent||ut,n=e.keyframes?gT(Wt(e.keyframes)):Un;if(rn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},_T=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},up=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Fa=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Vi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},dr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},vT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_c=function(e,t,n,i){return e._startAt&&(Vt?e._startAt.revert(ra):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},xT=function s(e){return!e||e._ts&&s(e.parent)},If=function(e){return e._repeat?gs(e._tTime,e=e.duration()+e._rDelay)*e:0},gs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ya=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ba=function(e){return e._end=It(e._start+(e._tDur/Math.abs(e._ts||e._rts||st)||0))},ka=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=It(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ba(e),n._dirty||dr(n,e)),e},hp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ya(e.rawTime(),t),(!t._dur||fo(0,t.totalDuration(),n)-t._tTime>st)&&t.render(n,!0)),dr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-st}},Kn=function(e,t,n,i){return t.parent&&Vi(t),t._start=It((mi(n)?n:n||e!==ut?Tn(e,n,t):e._time)+t._delay),t._end=It(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),up(e,t,"_first","_last",e._sort?"_start":0),vc(t)||(e._recent=t),i||hp(e,t),e._ts<0&&ka(e,e._tTime),e},fp=function(e,t){return(xn.ScrollTrigger||eu("scrollTrigger",t))&&xn.ScrollTrigger.create(t,e)},dp=function(e,t,n,i,r){if(su(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Vt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&sp!==mn.frame)return ki.push(e),e._lazy=[r,i],1},yT=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},vc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},MT=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&yT(e)&&!(!e._initted&&vc(e))||(e._ts<0||e._dp._ts<0)&&!vc(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=fo(0,e._tDur,t),u=gs(l,a),e._yoyo&&u&1&&(o=1-o),u!==gs(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Vt||i||e._zTime===st||!t&&e._zTime){if(!e._initted&&dp(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?st:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&_c(e,t,n,!0),e._onUpdate&&!n&&gn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&gn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Vi(e,1),!n&&!Vt&&(gn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ST=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},_s=function(e,t,n,i){var r=e._repeat,o=It(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:It(o*(r+1)+e._rDelay*r):o,a>0&&!i&&ka(e,e._tTime=e._tDur*a),e.parent&&Ba(e),n||dr(e.parent,e),e},Uf=function(e){return e instanceof Zt?dr(e):_s(e,e._dur)},TT={_start:0,endTime:to,totalDuration:to},Tn=function s(e,t,n){var i=e.labels,r=e._recent||TT,o=e.duration()>=Ln?r.endTime(!1):e._dur,a,l,c;return Ot(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Wt(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},qs=function(e,t,n){var i=mi(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=rn(l.vars.inherit)&&l.parent;o.immediateRender=rn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Et(t[0],o,t[r+1])},qi=function(e,t){return e||e===0?t(e):t},fo=function(e,t,n){return n<e?e:n>t?t:n},Gt=function(e,t){return!Ot(e)||!(t=fT.exec(e))?"":t[1]},ET=function(e,t,n){return qi(n,function(i){return fo(e,t,i)})},xc=[].slice,pp=function(e,t){return e&&$n(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&$n(e[0]))&&!e.nodeType&&e!==Xn},bT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Ot(i)&&!t||pp(i,1)?(r=n).push.apply(r,Dn(i)):n.push(i)})||n},Dn=function(e,t,n){return ct&&!t&&ct.selector?ct.selector(e):Ot(e)&&!n&&(mc||!vs())?xc.call((t||Qc).querySelectorAll(e),0):Wt(e)?bT(e,n):pp(e)?xc.call(e,0):e?[e]:[]},yc=function(e){return e=Dn(e)[0]||eo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Dn(t,n.querySelectorAll?n:n===e?eo("Invalid scope")||Qc.createElement("div"):e)}},mp=function(e){return e.sort(function(){return .5-Math.random()})},gp=function(e){if(_t(e))return e;var t=$n(e)?e:{each:e},n=pr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Ot(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,p=o[g],m,y,v,x,S,b,E,C,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,Ln])[1],!M){for(E=-Ln;E<(E=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(p=o[g]=[],m=l?Math.min(M,g)*u-.5:i%M,y=M===Ln?0:l?g*h/M-.5:i/M|0,E=0,C=Ln,b=0;b<g;b++)v=b%M-m,x=y-(b/M|0),p[b]=S=c?Math.abs(c==="y"?x:v):Jd(v*v+x*x),S>E&&(E=S),S<C&&(C=S);i==="random"&&mp(p),p.max=E-C,p.min=C,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),p.b=g<0?r-g:r,p.u=Gt(t.amount||t.each)||0,n=n&&g<0?Ap(n):n}return g=(p[f]-p.min)/p.max||0,It(p.b+(n?n(g):g)*p.v)+p.u}},Mc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=It(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(mi(n)?0:Gt(n))}},_p=function(e,t){var n=Wt(e),i,r;return!n&&$n(e)&&(i=n=e.radius||Ln,e.values?(e=Dn(e.values),(r=!mi(e[0]))&&(i*=i)):e=Mc(e.increment)),qi(t,n?_t(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Ln,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,r||u===o||mi(o)?u:u+Gt(o)}:Mc(e))},vp=function(e,t,n,i){return qi(Wt(e)?!t:n===!0?!!(n=0):!i,function(){return Wt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},AT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},wT=function(e,t){return function(n){return e(parseFloat(n))+(t||Gt(n))}},RT=function(e,t,n){return yp(e,t,0,1,n)},xp=function(e,t,n){return qi(n,function(i){return e[~~t(i)]})},CT=function s(e,t,n){var i=t-e;return Wt(e)?xp(e,s(0,e.length),t):qi(n,function(r){return(i+(r-e)%i)%i+e})},PT=function s(e,t,n){var i=t-e,r=i*2;return Wt(e)?xp(e,s(0,e.length-1),t):qi(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},no=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?tp:pc),n+=e.substr(t,i-t)+vp(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},yp=function(e,t,n,i,r){var o=t-e,a=i-n;return qi(r,function(l){return n+((l-e)/o*a||0)})},LT=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=Ot(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Wt(e)&&!Wt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=Sr(Wt(e)?[]:{},e));if(!u){for(l in t)ru.call(a,e,l,"get",t[l]);r=function(_){return lu(_,a)||(o?e.p:e)}}}return qi(n,r)},Of=function(e,t,n){var i=e.labels,r=Ln,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},gn=function(e,t,n){var i=e.vars,r=i[t],o=ct,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&ki.length&&va(),a&&(ct=a),u=l?r.apply(c,l):r.call(c),ct=o,u},Fs=function(e){return Vi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Vt),e.progress()<1&&gn(e,"onInterrupt"),e},Qr,Mp=[],Sp=function(e){if(e)if(e=!e.name&&e.default||e,$c()||e.headless){var t=e.name,n=_t(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:to,render:lu,add:ru,kill:jT,modifier:qT,rawVars:0},o={targetTest:0,get:0,getSetter:au,aliases:{},register:0};if(vs(),e!==i){if(pn[t])return;Un(i,Un(xa(e,r),o)),Sr(i.prototype,Sr(r,xa(e,o))),pn[i.prop=t]=i,e.targetTest&&(sa.push(i),tu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}rp(t,i),e.register&&e.register(ln,i,on)}else Mp.push(e)},it=255,Bs={aqua:[0,it,it],lime:[0,it,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,it],navy:[0,0,128],white:[it,it,it],olive:[128,128,0],yellow:[it,it,0],orange:[it,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[it,0,0],pink:[it,192,203],cyan:[0,it,it],transparent:[it,it,it,0]},kl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*it+.5|0},Tp=function(e,t,n){var i=e?mi(e)?[e>>16,e>>8&it,e&it]:0:Bs.black,r,o,a,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Bs[e])i=Bs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&it,i&it,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&it,e&it]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(pc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=kl(l+1/3,r,o),i[1]=kl(l,r,o),i[2]=kl(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Qd),n&&i.length<4&&(i[3]=1),i}else i=e.match(pc)||Bs.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/it,o=i[1]/it,a=i[2]/it,h=Math.max(r,o,a),f=Math.min(r,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(o-a)/d+(o<a?6:0):h===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Ep=function(e){var t=[],n=[],i=-1;return e.split(zi).forEach(function(r){var o=r.match($r)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Nf=function(e,t,n){var i="",r=(e+i).match(zi),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Tp(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Ep(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(zi,"1").split($r),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(zi),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},zi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Bs)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),DT=/hsl[a]?\(/,bp=function(e){var t=e.join(" "),n;if(zi.lastIndex=0,zi.test(t))return n=DT.test(t),e[1]=Nf(e[1],n),e[0]=Nf(e[0],n,Ep(e[1])),!0},io,mn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,h,f,d,_=function g(p){var m=s()-i,y=p===!0,v,x,S,b;if((m>e||m<0)&&(n+=m-t),i+=m,S=i-n,v=S-o,(v>0||y)&&(b=++h.frame,f=S-h.time*1e3,h.time=S=S/1e3,o+=v+(v>=r?4:r-v),x=1),y||(l=c(g)),x)for(d=0;d<a.length;d++)a[d](S,f,b,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){np&&(!mc&&$c()&&(Xn=mc=window,Qc=Xn.document||{},xn.gsap=ln,(Xn.gsapVersions||(Xn.gsapVersions=[])).push(ln.version),ip(_a||Xn.GreenSockGlobals||!Xn.gsap&&Xn||{}),Mp.forEach(Sp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},io=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),io=0,c=to},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),o=h.time*1e3+r},add:function(p,m,y){var v=m?function(x,S,b,E){p(x,S,b,E),h.remove(v)}:p;return h.remove(p),a[y?"unshift":"push"](v),vs(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h}(),vs=function(){return!io&&mn.wake()},qe={},IT=/^[\d.\-M][\d.\-,\s]/,UT=/["']/g,OT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(UT,"").trim():+c,i=l.substr(a+1).trim();return t},NT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},FT=function(e){var t=(e+"").split("("),n=qe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[OT(t[1])]:NT(e).split(",").map(lp)):qe._CE&&IT.test(e)?qe._CE("",e):n},Ap=function(e){return function(t){return 1-e(1-t)}},wp=function s(e,t){for(var n=e._first,i;n;)n instanceof Zt?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},pr=function(e,t){return e&&(_t(e)?e:qe[e]||FT(e))||t},Ar=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return sn(e,function(a){qe[a]=xn[a]=r,qe[o=a.toLowerCase()]=n;for(var l in r)qe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qe[a+"."+l]=r[l]}),r},Rp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},zl=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/dc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*hT((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Rp(a);return r=dc/r,l.config=function(c,u){return s(e,c,u)},l},Hl=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Rp(n);return i.config=function(r){return s(e,r)},i};sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Ar(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});qe.Linear.easeNone=qe.none=qe.Linear.easeIn;Ar("Elastic",zl("in"),zl("out"),zl());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Ar("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Ar("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Ar("Circ",function(s){return-(Jd(1-s*s)-1)});Ar("Sine",function(s){return s===1?1:-uT(s*lT)+1});Ar("Back",Hl("in"),Hl("out"),Hl());qe.SteppedEase=qe.steps=xn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-st;return function(a){return((i*fo(0,o,a)|0)+r)*n}}};ms.ease=qe["quad.out"];sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return nu+=s+","+s+"Params,"});var Cp=function(e,t){this.id=cT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:op,this.set=t?t.getSetter:au},ro=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,_s(this,+t.duration,1,1),this.data=t.data,ct&&(this._ctx=ct,ct.data.push(this)),io||mn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,_s(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(vs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ka(this,n),!r._dp||r.parent||hp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Kn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===st||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ap(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+If(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+If(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?gs(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-st?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ya(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-st?0:this._rts,this.totalTime(fo(-Math.abs(this._delay),this._tDur,r),i!==!1),Ba(this),vT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(vs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==st&&(this._tTime-=st)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Kn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(rn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ya(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=pT);var i=Vt;return Vt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Vt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Uf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Uf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Tn(this,n),rn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,rn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-st:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-st,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-st)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=_t(n)?n:cp,a=function(){var c=i.then;i.then=null,_t(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Fs(this)},s}();Un(ro.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-st,_prom:0,_ps:!1,_rts:1});var Zt=function(s){Zd(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=rn(n.sortChildren),ut&&Kn(n.parent||ut,ci(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&fp(ci(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return qs(0,arguments,this),this},t.from=function(i,r,o){return qs(1,arguments,this),this},t.fromTo=function(i,r,o,a){return qs(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,Xs(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Et(i,r,Tn(this,o),1),this},t.call=function(i,r,o){return Kn(this,Et.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Et(i,o,Tn(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,Xs(o).immediateRender=rn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,h){return a.startAt=o,Xs(a).immediateRender=rn(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:It(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,p,m,y,v,x,S,b,E;if(this!==ut&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,x=this._start,v=this._ts,m=!v,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(f=It(u%p),u===l?(g=this._repeat,f=c):(g=~~(u/p),g&&g===u/p&&(f=c,g--),f>c&&(f=c)),S=gs(this._tTime,p),!a&&this._tTime&&S!==g&&this._tTime-S*p-this._dur<=0&&(S=g),b&&g&1&&(f=c-f,E=1),g!==S&&!this._lock){var C=b&&S&1,M=C===(b&&g&1);if(g<S&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(E?0:It(g*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&gn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;wp(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=ST(this,It(a),It(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!r&&!g&&(gn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=-st);break}}d=_}else{d=this._last;for(var A=i<0?i:f;d;){if(_=d._prev,(d._act||A<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(A-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(A-d._start)*d._ts,r,o||Vt&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=A?-st:st);break}}d=_}}if(y&&!r&&(this.pause(),y.render(f>=a?0:-st)._zTime=f>=a?1:-1,this._ts))return this._start=x,Ba(this),this.render(i,r,o);this._onUpdate&&!r&&gn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Vi(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(gn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(mi(r)||(r=Tn(this,r,i)),!(i instanceof ro)){if(Wt(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Ot(i))return this.addLabel(i,r);if(_t(i))i=Et.delayedCall(0,i);else return this}return this!==i?Kn(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ln);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Et?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return Ot(i)?this.removeLabel(i):_t(i)?this.killTweensOf(i):(Fa(this,i),i===this._recent&&(this._recent=this._last),dr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=It(mn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Tn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Et.delayedCall(0,r||to,o);return a.data="isPause",this._hasPause=1,Kn(this,a,Tn(this,i))},t.removePause=function(i){var r=this._first;for(i=Tn(this,i);r;)r._start===i&&r.data==="isPause"&&Vi(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ii!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=Dn(i),l=this._first,c=mi(r),u;l;)l instanceof Et?mT(l._targets,a)&&(c?(!Ii||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=Tn(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Et.to(o,Un({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||st,onStart:function(){if(o.pause(),!d){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&_s(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Un({startAt:{time:Tn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Of(this,Tn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Of(this,Tn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+st)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return dr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),dr(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=Ln,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Kn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;_s(o,o===ut&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(ut._ts&&(ap(ut,ya(i,ut)),sp=mn.frame),mn.frame>=Lf){Lf+=vn.autoSleep||120;var r=ut._first;if((!r||!r._ts)&&vn.autoSleep&&mn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||mn.sleep()}}},e}(ro);Un(Zt.prototype,{_lock:0,_hasPause:0,_forcing:0});var BT=function(e,t,n,i,r,o,a){var l=new on(this._pt,e,t,0,1,Op,null,r),c=0,u=0,h,f,d,_,g,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=no(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),f=n.match(Fl)||[];h=Fl.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?rs(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=Fl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(ep.test(i)||m)&&(l.e=0),this._pt=l,l},ru=function(e,t,n,i,r,o,a,l,c,u){_t(i)&&(i=i(r||0,e,o));var h=e[t],f=n!=="get"?n:_t(h)?c?e[t.indexOf("set")||!_t(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=_t(h)?c?VT:Ip:ou,_;if(Ot(i)&&(~i.indexOf("random(")&&(i=no(i)),i.charAt(1)==="="&&(_=rs(f,i)+(Gt(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Sc)return!isNaN(f*i)&&i!==""?(_=new on(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?XT:Up,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&eu(t,i),BT.call(this,e,t,f,i,d,l||vn.stringFilter,c))},kT=function(e,t,n,i,r){if(_t(e)&&(e=js(e,r,t,n,i)),!$n(e)||e.style&&e.nodeType||Wt(e)||$d(e))return Ot(e)?js(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=js(e[a],r,t,n,i);return o},Pp=function(e,t,n,i,r,o){var a,l,c,u;if(pn[e]&&(a=new pn[e]).init(r,a.rawVars?t[e]:kT(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new on(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Qr))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ii,Sc,su=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!Zc,x=e.timeline,S,b,E,C,M,A,N,X,q,D,F,z,G;if(x&&(!f||!r)&&(r="none"),e._ease=pr(r,ms.ease),e._yEase=h?Ap(pr(h===!0?r:h,ms.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!x&&!!i.runBackwards,!x||f&&!i.stagger){if(X=p[0]?fr(p[0]).harness:0,z=X&&i[X.prop],S=xa(i,tu),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?ra:dT),g._lazy=0),o){if(Vi(e._startAt=Et.set(p,Un({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&rn(l),startAt:null,delay:0,onUpdate:c&&function(){return gn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt||!a&&!d)&&e._startAt.revert(ra),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),E=Un({overwrite:!1,data:"isFromStart",lazy:a&&!g&&rn(l),immediateRender:a,stagger:0,parent:m},S),z&&(E[X.prop]=z),Vi(e._startAt=Et.set(p,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt?e._startAt.revert(ra):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,st,st);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&rn(l)||l&&!_,b=0;b<p.length;b++){if(M=p[b],N=M._gsap||iu(p)[b]._gsap,e._ptLookup[b]=D={},gc[N.id]&&ki.length&&va(),F=y===p?b:y.indexOf(M),X&&(q=new X).init(M,z||S,e,F,y)!==!1&&(e._pt=C=new on(e._pt,M,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function($){D[$]=C}),q.priority&&(A=1)),!X||z)for(E in S)pn[E]&&(q=Pp(E,S,e,F,M,y))?q.priority&&(A=1):D[E]=C=ru.call(e,M,E,"get",S[E],F,y,0,i.stringFilter);e._op&&e._op[b]&&e.kill(M,e._op[b]),v&&e._pt&&(Ii=e,ut.killTweensOf(M,D,e.globalTime(t)),G=!e.parent,Ii=0),e._pt&&l&&(gc[N.id]=1)}A&&Np(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,f&&t<=0&&x.render(Ln,!0,!0)},zT=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Sc=1,e.vars[t]="+=0",su(e,a),Sc=0,l?eo(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=yt(n)+Gt(h.e)),h.b&&(h.b=u.s+Gt(h.b))},HT=function(e,t){var n=e[0]?fr(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=Sr({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},GT=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(Wt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},js=function(e,t,n,i,r){return _t(e)?e.call(t,n,i,r):Ot(e)&&~e.indexOf("random(")?no(e):e},Lp=nu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Dp={};sn(Lp+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Dp[s]=1});var Et=function(s){Zd(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Xs(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=i.parent||ut,v=(Wt(n)||$d(n)?mi(n[0]):"length"in i)?[n]:Dn(n),x,S,b,E,C,M,A,N;if(a._targets=v.length?iu(v):eo("GSAP target "+n+" not found. https://gsap.com",!vn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||Ko(c)||Ko(u)){if(i=a.vars,x=a.timeline=new Zt({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:v}),x.kill(),x.parent=x._dp=ci(a),x._start=0,f||Ko(c)||Ko(u)){if(E=v.length,A=f&&gp(f),$n(f))for(C in f)~Lp.indexOf(C)&&(N||(N={}),N[C]=f[C]);for(S=0;S<E;S++)b=xa(i,Dp),b.stagger=0,m&&(b.yoyoEase=m),N&&Sr(b,N),M=v[S],b.duration=+js(c,ci(a),S,M,v),b.delay=(+js(u,ci(a),S,M,v)||0)-a._delay,!f&&E===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),x.to(M,b,A?A(S,M,v):0),x._ease=qe.none;x.duration()?c=u=0:a.timeline=0}else if(_){Xs(Un(x.vars.defaults,{ease:"none"})),x._ease=pr(_.ease||i.ease||"none");var X=0,q,D,F;if(Wt(_))_.forEach(function(z){return x.to(v,z,">")}),x.duration();else{b={};for(C in _)C==="ease"||C==="easeEach"||GT(C,_[C],b,_.easeEach);for(C in b)for(q=b[C].sort(function(z,G){return z.t-G.t}),X=0,S=0;S<q.length;S++)D=q[S],F={ease:D.e,duration:(D.t-(S?q[S-1].t:0))/100*c},F[C]=D.v,x.to(v,F,X),X+=F.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!Zc&&(Ii=ci(a),ut.killTweensOf(v),Ii=0),Kn(y,ci(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===It(y._time)&&rn(h)&&xT(ci(a))&&y.data!=="nested")&&(a._tTime=-st,a.render(Math.max(0,-u)||0)),p&&fp(ci(a),p),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-st&&!u?l:i<st?0:i,f,d,_,g,p,m,y,v,x;if(!c)MT(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,o);if(f=It(h%g),h===l?(_=this._repeat,f=c):(_=~~(h/g),_&&_===It(h/g)&&(f=c,_--),f>c&&(f=c)),m=this._yoyo&&_&1,m&&(x=this._yEase,f=c-f),p=gs(this._tTime,g),f===a&&!o&&this._initted&&_===p)return this._tTime=h,this;_!==p&&(v&&this._yEase&&wp(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(It(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(dp(this,u?i:f,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(x||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!a&&!r&&!_&&(gn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&_c(this,i,r,o),gn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&gn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&_c(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Vi(this,1),!r&&!(u&&!a)&&(h||a||m)&&(gn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){io||mn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||su(this,c),u=this._ease(c/this._dur),zT(this,i,r,o,a,u,c,l)?this.resetTo(i,r,o,a,1):(ka(this,0),this.parent||up(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Fs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Ii&&Ii.vars.overwrite!==!0)._first||Fs(this),this.parent&&o!==this.timeline.totalDuration()&&_s(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Dn(i):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!r||r==="all")&&_T(a,l))return r==="all"&&(this._pt=0),Fs(this);for(h=this._op=this._op||[],r!=="all"&&(Ot(r)&&(g={},sn(r,function(y){return g[y]=1}),r=g),r=HT(a,r)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],r==="all"?(h[m]=r,_=f,d={}):(d=h[m]=h[m]||{},_=r);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Fa(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Fs(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return qs(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return qs(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return ut.killTweensOf(i,r,o)},e}(ro);Un(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});sn("staggerTo,staggerFrom,staggerFromTo",function(s){Et[s]=function(){var e=new Zt,t=xc.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var ou=function(e,t,n){return e[t]=n},Ip=function(e,t,n){return e[t](n)},VT=function(e,t,n,i){return e[t](i.fp,n)},WT=function(e,t,n){return e.setAttribute(t,n)},au=function(e,t){return _t(e[t])?Ip:Jc(e[t])&&e.setAttribute?WT:ou},Up=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},XT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Op=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},lu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},qT=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},jT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Fa(this,t,"_pt"):t.dep||(n=1),t=i;return!n},YT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Np=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},on=function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Up,this.d=l||this,this.set=c||ou,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=YT,this.m=n,this.mt=r,this.tween=i},s}();sn(nu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return tu[s]=1});xn.TweenMax=xn.TweenLite=Et;xn.TimelineLite=xn.TimelineMax=Zt;ut=new Zt({sortChildren:!1,defaults:ms,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});vn.stringFilter=bp;var mr=[],oa={},KT=[],Ff=0,ZT=0,Gl=function(e){return(oa[e]||KT).map(function(t){return t()})},Tc=function(){var e=Date.now(),t=[];e-Ff>2&&(Gl("matchMediaInit"),mr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Xn.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Gl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ff=e,Gl("matchMedia"))},Fp=function(){function s(t,n){this.selector=n&&yc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ZT++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){_t(n)&&(r=i,i=n,n=_t);var o=this,a=function(){var c=ct,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=yc(r)),ct=o,h=i.apply(o,arguments),_t(h)&&o._r.push(h),ct=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===_t?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=ct;ct=null,n(this),ct=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Et&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Zt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Et)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=mr.length;o--;)mr[o].id===this.id&&mr.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),JT=function(){function s(t){this.contexts=[],this.scope=t,ct&&ct.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){$n(n)||(n={matches:n});var o=new Fp(0,r||this.scope),a=o.conditions={},l,c,u;ct&&!o.selector&&(o.selector=ct.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Xn.matchMedia(n[c]),l&&(mr.indexOf(o)<0&&mr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Tc):l.addEventListener("change",Tc)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Ma={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Sp(i)})},timeline:function(e){return new Zt(e)},getTweensOf:function(e,t){return ut.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ot(e)&&(e=Dn(e)[0]);var r=fr(e||{}).get,o=n?cp:lp;return n==="native"&&(n=""),e&&(t?o((pn[t]&&pn[t].get||r)(e,t,n,i)):function(a,l,c){return o((pn[a]&&pn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Dn(e),e.length>1){var i=e.map(function(u){return ln.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=pn[t],a=fr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Qr._pt=0,h.init(e,n?u+n:u,Qr,0,[e]),h.render(1,h),Qr._pt&&lu(1,Qr)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=ln.to(e,Sr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=pr(e.ease,ms.ease)),Df(ms,e||{})},config:function(e){return Df(vn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!pn[a]&&!xn[a]&&eo(t+" effect requires "+a+" plugin.")}),Bl[t]=function(a,l,c){return n(Dn(a),Un(l||{},r),c)},o&&(Zt.prototype[t]=function(a,l,c){return this.add(Bl[t](a,$n(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){qe[e]=pr(t)},parseEase:function(e,t){return arguments.length?pr(e,t):qe},getById:function(e){return ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Zt(e),i,r;for(n.smoothChildTiming=rn(e.smoothChildTiming),ut.remove(n),n._dp=0,n._time=n._tTime=ut._time,i=ut._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Et&&i.vars.onComplete===i._targets[0]))&&Kn(n,i,i._start-i._delay),i=r;return Kn(ut,n,0),n},context:function(e,t){return e?new Fp(e,t):ct},matchMedia:function(e){return new JT(e)},matchMediaRefresh:function(){return mr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Tc()},addEventListener:function(e,t){var n=oa[e]||(oa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=oa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:CT,wrapYoyo:PT,distribute:gp,random:vp,snap:_p,normalize:RT,getUnit:Gt,clamp:ET,splitColor:Tp,toArray:Dn,selector:yc,mapRange:yp,pipe:AT,unitize:wT,interpolate:LT,shuffle:mp},install:ip,effects:Bl,ticker:mn,updateRoot:Zt.updateRoot,plugins:pn,globalTimeline:ut,core:{PropTween:on,globals:rp,Tween:Et,Timeline:Zt,Animation:ro,getCache:fr,_removeLinkedListItem:Fa,reverting:function(){return Vt},context:function(e){return e&&ct&&(ct.data.push(e),e._ctx=ct),ct},suppressOverwrites:function(e){return Zc=e}}};sn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Ma[s]=Et[s]});mn.add(Zt.updateRoot);Qr=Ma.to({},{duration:0});var $T=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},QT=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=$T(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},Vl=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(Ot(r)&&(l={},sn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}QT(a,r)}}}},ln=Ma.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Vt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Vl("roundProps",Mc),Vl("modifiers"),Vl("snap",_p))||Ma;Et.version=Zt.version=ln.version="3.12.5";np=1;$c()&&vs();qe.Power0;qe.Power1;qe.Power2;qe.Power3;qe.Power4;qe.Linear;qe.Quad;qe.Cubic;qe.Quart;qe.Quint;qe.Strong;qe.Elastic;qe.Back;qe.SteppedEase;qe.Bounce;qe.Sine;qe.Expo;qe.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Bf,Ui,ss,cu,ar,kf,uu,eE=function(){return typeof window<"u"},gi={},rr=180/Math.PI,os=Math.PI/180,jr=Math.atan2,zf=1e8,hu=/([A-Z])/g,tE=/(left|right|width|margin|padding|x)/i,nE=/[\s,\(]\S/,Zn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ec=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},iE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},sE=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Bp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},kp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},oE=function(e,t,n){return e.style[t]=n},aE=function(e,t,n){return e.style.setProperty(t,n)},lE=function(e,t,n){return e._gsap[t]=n},cE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},uE=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},hE=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},dt="transform",an=dt+"Origin",fE=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in gi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Zn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ui(i,a)}):this.tfm[e]=o.x?o[e]:ui(i,e),e===an&&(this.tfm.zOrigin=o.zOrigin);else return Zn.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(dt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(an,t,"")),e=dt}(r||t)&&this.props.push(e,t,r[e])},zp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},dE=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(hu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=uu(),(!r||!r.isStart)&&!n[dt]&&(zp(n),i.zOrigin&&n[an]&&(n[an]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Hp=function(e,t){var n={target:e,props:[],revert:dE,save:fE};return e._gsap||ln.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Gp,bc=function(e,t){var n=Ui.createElementNS?Ui.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ui.createElement(e);return n&&n.style?n:Ui.createElement(e)},Jn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(hu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,xs(t)||t,1)||""},Hf="O,Moz,ms,Ms,Webkit".split(","),xs=function(e,t,n){var i=t||ar,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Hf[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Hf[o]:"")+e},Ac=function(){eE()&&window.document&&(Bf=window,Ui=Bf.document,ss=Ui.documentElement,ar=bc("div")||{style:{}},bc("div"),dt=xs(dt),an=dt+"Origin",ar.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Gp=!!xs("perspective"),uu=ln.core.reverting,cu=1)},Wl=function s(e){var t=bc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(ss.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ss.removeChild(t),this.style.cssText=r,o},Gf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Vp=function(e){var t;try{t=e.getBBox()}catch{t=Wl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Wl||(t=Wl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Gf(e,["x","cx","x1"])||0,y:+Gf(e,["y","cy","y1"])||0,width:0,height:0}:t},Wp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Vp(e))},Tr=function(e,t){if(t){var n=e.style,i;t in gi&&t!==an&&(t=dt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(hu,"-$1").toLowerCase())):n.removeAttribute(t)}},Oi=function(e,t,n,i,r,o){var a=new on(e._pt,t,n,0,1,o?kp:Bp);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Vf={deg:1,rad:1,turn:1},pE={grid:1,flex:1},Wi=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=ar.style,l=tE.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,p,m;if(i===o||!r||Vf[i]||Vf[o])return r;if(o!=="px"&&!f&&(r=s(e,t,n,"px")),m=e.getCTM&&Wp(e),(d||o==="%")&&(gi[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],yt(d?r/_*h:r/100*_);if(a[l?"width":"height"]=h+(f?o:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Ui||!g.appendChild)&&(g=Ui.body),p=g._gsap,p&&d&&p.width&&l&&p.time===mn.time&&!p.uncache)return yt(r/p.width*h);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+i,_=e[u],y?e.style[t]=y:Tr(e,t)}else(d||o==="%")&&!pE[Jn(g,"display")]&&(a.position=Jn(e,"position")),g===e&&(a.position="static"),g.appendChild(ar),_=ar[u],g.removeChild(ar),a.position="absolute";return l&&d&&(p=fr(g),p.time=mn.time,p.width=g[u]),yt(f?_*r/h:_&&r?h/_*r:0)},ui=function(e,t,n,i){var r;return cu||Ac(),t in Zn&&t!=="transform"&&(t=Zn[t],~t.indexOf(",")&&(t=t.split(",")[0])),gi[t]&&t!=="transform"?(r=oo(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ta(Jn(e,an))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Sa[t]&&Sa[t](e,t,n)||Jn(e,t)||op(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Wi(e,t,r,n)+n:r},mE=function(e,t,n,i){if(!n||n==="none"){var r=xs(t,e,1),o=r&&Jn(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Jn(e,"borderTopColor"))}var a=new on(this._pt,e.style,t,0,1,Op),l=0,c=0,u,h,f,d,_,g,p,m,y,v,x,S;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=Jn(e,t)||i,g?e.style[t]=g:Tr(e,t)),u=[n,i],bp(u),n=u[0],i=u[1],f=n.match($r)||[],S=i.match($r)||[],S.length){for(;h=$r.exec(i);)p=h[0],y=i.substring(l,h.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),p.charAt(1)==="="&&(p=rs(d,p)+x),m=parseFloat(p),v=p.substr((m+"").length),l=$r.lastIndex-v.length,v||(v=v||vn.units[t]||x,l===i.length&&(i+=v,a.e+=v)),x!==v&&(d=Wi(e,t,g,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?kp:Bp;return ep.test(i)&&(a.e=0),this._pt=a,a},Wf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},gE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Wf[n]||n,t[1]=Wf[i]||i,t.join(" ")},_E=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],gi[a]&&(l=1,a=a==="transformOrigin"?an:dt),Tr(n,a);l&&(Tr(n,dt),o&&(o.svg&&n.removeAttribute("transform"),oo(n,1),o.uncache=1,zp(i)))}},Sa={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new on(e._pt,t,n,0,0,_E);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},so=[1,0,0,1,0,0],Xp={},qp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Xf=function(e){var t=Jn(e,dt);return qp(t)?so:t.substr(7).match(Qd).map(yt)},fu=function(e,t){var n=e._gsap||fr(e),i=e.style,r=Xf(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?so:r):(r===so&&!e.offsetParent&&e!==ss&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,ss.appendChild(e)),r=Xf(e),l?i.display=l:Tr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ss.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},wc=function(e,t,n,i,r,o){var a=e._gsap,l=r||fu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],y=l[5],v=t.split(" "),x=parseFloat(v[0])||0,S=parseFloat(v[1])||0,b,E,C,M;n?l!==so&&(E=d*p-_*g)&&(C=x*(p/E)+S*(-g/E)+(g*y-p*m)/E,M=x*(-_/E)+S*(d/E)-(d*y-_*m)/E,x=C,S=M):(b=Vp(e),x=b.x+(~v[0].indexOf("%")?x/100*b.width:x),S=b.y+(~(v[1]||v[0]).indexOf("%")?S/100*b.height:S)),i||i!==!1&&a.smooth?(m=x-c,y=S-u,a.xOffset=h+(m*d+y*g)-m,a.yOffset=f+(m*_+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=S,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[an]="0px 0px",o&&(Oi(o,a,"xOrigin",c,x),Oi(o,a,"yOrigin",u,S),Oi(o,a,"xOffset",h,a.xOffset),Oi(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+S)},oo=function(e,t){var n=e._gsap||new Cp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Jn(e,an)||"0",u,h,f,d,_,g,p,m,y,v,x,S,b,E,C,M,A,N,X,q,D,F,z,G,$,Z,Y,U,B,ce,ae,fe;return u=h=f=g=p=m=y=v=x=0,d=_=1,n.svg=!!(e.getCTM&&Wp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[dt]!=="none"?l[dt]:"")),i.scale=i.rotate=i.translate="none"),E=fu(e,n.svg),n.svg&&(n.uncache?($=e.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),wc(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,E)),S=n.xOrigin||0,b=n.yOrigin||0,E!==so&&(N=E[0],X=E[1],q=E[2],D=E[3],u=F=E[4],h=z=E[5],E.length===6?(d=Math.sqrt(N*N+X*X),_=Math.sqrt(D*D+q*q),g=N||X?jr(X,N)*rr:0,y=q||D?jr(q,D)*rr+g:0,y&&(_*=Math.abs(Math.cos(y*os))),n.svg&&(u-=S-(S*N+b*q),h-=b-(S*X+b*D))):(fe=E[6],ce=E[7],Y=E[8],U=E[9],B=E[10],ae=E[11],u=E[12],h=E[13],f=E[14],C=jr(fe,B),p=C*rr,C&&(M=Math.cos(-C),A=Math.sin(-C),G=F*M+Y*A,$=z*M+U*A,Z=fe*M+B*A,Y=F*-A+Y*M,U=z*-A+U*M,B=fe*-A+B*M,ae=ce*-A+ae*M,F=G,z=$,fe=Z),C=jr(-q,B),m=C*rr,C&&(M=Math.cos(-C),A=Math.sin(-C),G=N*M-Y*A,$=X*M-U*A,Z=q*M-B*A,ae=D*A+ae*M,N=G,X=$,q=Z),C=jr(X,N),g=C*rr,C&&(M=Math.cos(C),A=Math.sin(C),G=N*M+X*A,$=F*M+z*A,X=X*M-N*A,z=z*M-F*A,N=G,F=$),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=yt(Math.sqrt(N*N+X*X+q*q)),_=yt(Math.sqrt(z*z+fe*fe)),C=jr(F,z),y=Math.abs(C)>2e-4?C*rr:0,x=ae?1/(ae<0?-ae:ae):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!qp(Jn(e,dt)),G&&e.setAttribute("transform",G))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(d*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=yt(d),n.scaleY=yt(_),n.rotation=yt(g)+a,n.rotationX=yt(p)+a,n.rotationY=yt(m)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[an]=Ta(c)),n.xOffset=n.yOffset=0,n.force3D=vn.force3D,n.renderTransform=n.svg?xE:Gp?jp:vE,n.uncache=0,n},Ta=function(e){return(e=e.split(" "))[0]+" "+e[1]},Xl=function(e,t,n){var i=Gt(t);return yt(parseFloat(t)+parseFloat(Wi(e,"x",n+"px",i)))+i},vE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,jp(e,t)},er="0deg",Os="0px",tr=") ",jp=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,v=n.zOrigin,x="",S=m==="auto"&&e&&e!==1||m===!0;if(v&&(h!==er||u!==er)){var b=parseFloat(u)*os,E=Math.sin(b),C=Math.cos(b),M;b=parseFloat(h)*os,M=Math.cos(b),o=Xl(y,o,E*M*-v),a=Xl(y,a,-Math.sin(b)*-v),l=Xl(y,l,C*M*-v+v)}p!==Os&&(x+="perspective("+p+tr),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(S||o!==Os||a!==Os||l!==Os)&&(x+=l!==Os||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+tr),c!==er&&(x+="rotate("+c+tr),u!==er&&(x+="rotateY("+u+tr),h!==er&&(x+="rotateX("+h+tr),(f!==er||d!==er)&&(x+="skew("+f+", "+d+tr),(_!==1||g!==1)&&(x+="scale("+_+", "+g+tr),y.style[dt]=x||"translate(0, 0)"},xE=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,v=parseFloat(o),x=parseFloat(a),S,b,E,C,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=os,c*=os,S=Math.cos(l)*h,b=Math.sin(l)*h,E=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=os,M=Math.tan(c-u),M=Math.sqrt(1+M*M),E*=M,C*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),S*=M,b*=M)),S=yt(S),b=yt(b),E=yt(E),C=yt(C)):(S=h,C=f,b=E=0),(v&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(v=Wi(d,"x",o,"px"),x=Wi(d,"y",a,"px")),(_||g||p||m)&&(v=yt(v+_-(_*S+g*E)+p),x=yt(x+g-(_*b+g*C)+m)),(i||r)&&(M=d.getBBox(),v=yt(v+i/100*M.width),x=yt(x+r/100*M.height)),M="matrix("+S+","+b+","+E+","+C+","+v+","+x+")",d.setAttribute("transform",M),y&&(d.style[dt]=M)},yE=function(e,t,n,i,r){var o=360,a=Ot(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?rr:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*zf)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*zf)%o-~~(c/o)*o)),e._pt=f=new on(e._pt,t,n,i,c,iE),f.e=u,f.u="deg",e._props.push(n),f},qf=function(e,t){for(var n in t)e[n]=t[n];return e},ME=function(e,t,n){var i=qf({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[dt]=t,a=oo(n,1),Tr(n,dt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[dt],o[dt]=t,a=oo(n,1),o[dt]=c);for(l in gi)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(d=Gt(c),_=Gt(u),h=d!==_?Wi(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new on(e._pt,a,l,h,f-h,Ec),e._pt.u=_||0,e._props.push(l));qf(a,i)};sn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Sa[e>1?"border"+s:s]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return ui(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var Yp={name:"css",register:Ac,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,p,m,y,v,x,S,b,E,C;cu||Ac(),this.styles=this.styles||Hp(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(pn[g]&&Pp(g,t,n,i,e,r)))){if(d=typeof u,_=Sa[g],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=no(u)),_)_(this,e,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",zi.lastIndex=0,zi.test(c)||(p=Gt(c),m=Gt(u)),m?p!==m&&(c=Wi(e,g,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,i,r,0,0,g),o.push(g),C.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],Ot(c)&&~c.indexOf("random(")&&(c=no(c)),Gt(c+"")||c==="auto"||(c+=vn.units[g]||Gt(ui(e,g))||""),(c+"").charAt(1)==="="&&(c=ui(e,g))):c=ui(e,g),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),g in Zn&&(g==="autoAlpha"&&(f===1&&ui(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,a.visibility),Oi(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Zn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in gi,v){if(this.styles.save(g),x||(S=e._gsap,S.renderTransform&&!t.parseTransform||oo(e,t.parseTransform),b=t.smoothOrigin!==!1&&S.smooth,x=this._pt=new on(this._pt,a,dt,0,1,S.renderTransform,S,0,-1),x.dep=1),g==="scale")this._pt=new on(this._pt,S,"scaleY",S.scaleY,(y?rs(S.scaleY,y+h):h)-S.scaleY||0,Ec),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(an,0,a[an]),u=gE(u),S.svg?wc(e,u,0,b,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==S.zOrigin&&Oi(this,S,"zOrigin",S.zOrigin,m),Oi(this,a,g,Ta(c),Ta(u)));continue}else if(g==="svgOrigin"){wc(e,u,1,b,0,this);continue}else if(g in Xp){yE(this,S,g,f,y?rs(f,y+u):u);continue}else if(g==="smoothOrigin"){Oi(this,S,"smooth",S.smooth,u);continue}else if(g==="force3D"){S[g]=u;continue}else if(g==="transform"){ME(this,u,e);continue}}else g in a||(g=xs(g)||g);if(v||(h||h===0)&&(f||f===0)&&!nE.test(u)&&g in a)p=(c+"").substr((f+"").length),h||(h=0),m=Gt(u)||(g in vn.units?vn.units[g]:p),p!==m&&(f=Wi(e,g,c,m)),this._pt=new on(this._pt,v?S:a,g,f,(y?rs(f,y+h):h)-f,!v&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?sE:Ec),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=rE);else if(g in a)mE.call(this,e,g,c,y?y+u:u);else if(g in e)this.add(e,g,c||e[g],y?y+u:u,i,r);else if(g!=="parseTransform"){eu(g,u);continue}v||(g in a?C.push(g,0,a[g]):C.push(g,1,c||e[g])),o.push(g)}}E&&Np(this)},render:function(e,t){if(t.tween._time||!uu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ui,aliases:Zn,getSetter:function(e,t,n){var i=Zn[t];return i&&i.indexOf(",")<0&&(t=i),t in gi&&t!==an&&(e._gsap.x||ui(e,"x"))?n&&kf===n?t==="scale"?cE:lE:(kf=n||{})&&(t==="scale"?uE:hE):e.style&&!Jc(e.style[t])?oE:~t.indexOf("-")?aE:au(e,t)},core:{_removeProperty:Tr,_getMatrix:fu}};ln.utils.checkPrefix=xs;ln.core.getStyleSaver=Hp;(function(s,e,t,n){var i=sn(s+","+e+","+t,function(r){gi[r]=1});sn(e,function(r){vn.units[r]="deg",Xp[r]=1}),Zn[i[13]]=s+","+e,sn(n,function(r){var o=r.split(":");Zn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){vn.units[s]="px"});ln.registerPlugin(Yp);var yn=ln.registerPlugin(Yp)||ln;yn.core.Tween;const Jt=new wy,Xt=new Ht(75,window.innerWidth/window.innerHeight,.1,1e3),Gn=new Md({canvas:document.querySelector("#bg")});Gn.outputColorSpace=Ze;Gn.setPixelRatio(window.devicePixelRatio);Gn.setSize(window.innerWidth,window.innerHeight);Gn.shadowMap.enabled=!0;Gn.shadowMap.type=Kf;document.body.appendChild(Gn.domElement);const Er=new sT(Gn,Xt,Gn.domElement);var du=-35,pu=.2,Kp=-97,Zp=-120,Jp=-20,$p=0,Qp=-160;const mu=new oT;mu.setDecoderPath("/draco/");console.log(mu);const wr=new qM;wr.setDRACOLoader(mu);let lr=null,Zo=!1;wr.load("tomato/tomato.glb",s=>{lr=s.scene,s.scene.scale.set(100,100,100),s.scene.rotateX(Math.PI/3),s.scene.position.set(Jp,Kp+2,0),Jt.add(s.scene),lr&&(lr.addEventListener("click",()=>po("tomatoObject")),document.addEventListener("mousemove",SE),Er.add(lr))},s=>{console.log(s.loaded/s.total*100+"% loaded tom")},s=>{console.log(s)});function SE(s){At.x=s.clientX/window.innerWidth*2-1,At.y=-(s.clientY/window.innerHeight)*2+1,Bt.setFromCamera(At,Xt),Bt.intersectObject(lr).length>0?Zo||(yn.to(lr.position,{y:"+=1",duration:.2}),Zo=!0):Zo&&(yn.to(lr.position,{y:"-=1",duration:.2,delay:.2}),Zo=!1)}let wi=null,Jo=!1;wr.load("blender/books.glb",function(s){wi=s.scene,s.scene.scale.set(2.7,2.7,2.7),s.scene.position.set($p+10,Zp,0),Jt.add(wi),wi&&(wi.addEventListener("click",()=>po("blenderObject")),document.addEventListener("mousemove",TE),Er.add(wi))},function(s){console.log(s.loaded/s.total*100+"% loaded")},function(s){console.log("An error happened")});function TE(s){At.x=s.clientX/window.innerWidth*2-1,At.y=-(s.clientY/window.innerHeight)*2+1,Bt.setFromCamera(At,Xt),Bt.intersectObject(wi).length>0?Jo||(yn.to(wi.position,{y:"+=1",duration:.2}),Jo=!0):Jo&&(yn.to(wi.position,{y:"-=1",duration:.2,delay:.2}),Jo=!1)}new jS;let Ri=null,$o=!1;wr.load("envelope/brief.glb",s=>{Ri=s.scene,s.scene.scale.set(3,3,3),s.scene.rotateY(Math.PI/-2),s.scene.position.set(Jp+8,Zp+4,0),Jt.add(Ri),Ri&&(Ri.addEventListener("click",()=>po("envelopeObject")),document.addEventListener("mousemove",EE),Er.add(Ri))},s=>{console.log(s.loaded/s.total*100+"% loaded brief")},s=>{console.log(s)});function EE(s){At.x=s.clientX/window.innerWidth*2-1,At.y=-(s.clientY/window.innerHeight)*2+1,Bt.setFromCamera(At,Xt),Bt.intersectObject(Ri).length>0?$o||(yn.to(Ri.position,{y:"+=1",duration:.2}),$o=!0):$o&&(yn.to(Ri.position,{y:"-=1",duration:.2,delay:.2}),$o=!1)}let Ci=null,Qo=!1;wr.load("fractal/fractal23.glb",s=>{Ci=s.scene,s.scene.scale.set(80,80,60),s.scene.rotateY(Math.PI/8),s.scene.position.set(20,-93,0),Jt.add(Ci),Ci&&(Ci.addEventListener("click",()=>po("fractalObject")),document.addEventListener("mousemove",bE),Er.add(Ci))},s=>{console.log(s.loaded/s.total*100+"% loaded fractal")},s=>{console.log(s)});function bE(s){console.log("Mouse moved over fractal"),At.x=s.clientX/window.innerWidth*2-1,At.y=-(s.clientY/window.innerHeight)*2+1,Bt.setFromCamera(At,Xt),Bt.intersectObject(Ci).length>0?Qo||(yn.to(Ci.position,{y:"+=1",duration:.2}),Qo=!0):Qo&&(yn.to(Ci.position,{y:"-=1",duration:.2,delay:.2}),Qo=!1)}let Pi=null,ea=!1;wr.load("insulin/insulinpen.glb",s=>{Pi=s.scene,s.scene.scale.set(.35,.35,.35),s.scene.rotateZ(Math.PI/-4),s.scene.rotateX(Math.PI/2),s.scene.position.set($p-2,Kp+3,0),Jt.add(Pi),Pi&&(Pi.addEventListener("click",()=>po("insulinObject")),document.addEventListener("mousemove",AE),Er.add(Pi))},s=>{console.log(s.loaded/s.total*100+"% loaded pen")},s=>{console.log(s)});function AE(s){At.x=s.clientX/window.innerWidth*2-1,At.y=-(s.clientY/window.innerHeight)*2+1,Bt.setFromCamera(At,Xt),Bt.intersectObject(Pi).length>0?ea||(yn.to(Pi.position,{y:"+=1",duration:.2}),ea=!0):ea&&(yn.to(Pi.position,{y:"-=1",duration:.2,delay:.2}),ea=!1)}const Bt=new Nd,At=new se;document.addEventListener("mousemove",wE,!1);function wE(s){At.x=s.clientX/window.innerWidth*2-1,At.y=-(s.clientY/window.innerHeight)*2+1,Bt.setFromCamera(At,Xt);const e=Bt.intersectObjects(Jt.children,!0);if(Jt.traverse(t=>{t.isMesh&&(t.material.opacity=0)}),e.length>0){const t=e[0].object;t.isMesh&&(t.material.opacity=1)}}const RE=new Od(16777215,1.7);Jt.add(RE);const vi=new jc(16777215,1.5);vi.castShadow=!0;vi.shadow.mapSize.set(1024,1024);vi.shadow.camera.far=15;vi.shadow.camera.left=-7;vi.shadow.camera.top=7;vi.shadow.camera.right=7;vi.shadow.camera.bottom=-7;vi.position.set(-5,5,0);Jt.add(vi);const gu=new Ua,Rr=gu.load("/textures/matcaps/16.png"),CE=gu.load("/textures/matcaps/3.png");CE.colorSpace=Ze;Rr.colorSpace=Ze;new br({matcap:Rr});const em=gu.load("/textures/matcaps/14.png");em.colorSpace=Ze;const cn=new Pn;cn.position.y=0;cn.position.z=0;cn.position.x=0;Jt.add(cn);const _u=new Pn;cn.position.y=0;cn.position.z=0;cn.position.x=0;Jt.add(_u);const vu=new Pn;cn.position.y=0;cn.position.z=0;cn.position.x=0;Jt.add(vu);let Rc;const za=new Na;za.load("/fonts/Manrope_Bold.json",s=>{const e=new uo("Welcome t    my space",{font:s,size:5,height:.1,curveSegments:6,bevelEnabled:!0,bevelThickness:.6,bevelSize:.3,bevelOffset:0,bevelSegments:4});e.center();const t=new br({matcap:Rr});Rc=new gt(e,t),cn.add(Rc)});const PE=new Na;PE.load("/fonts/Quicksand_Medium_Regular.json",s=>{const e=new uo("I'm Thika, a Multimedia Design student",{font:s,size:2,height:.4,curveSegments:6,bevelEnabled:!0,bevelThickness:.3,bevelSize:.1,bevelOffset:0,bevelSegments:4}),t=new br({matcap:em}),n=new gt(e,t);n.position.copy(Rc.position),n.position.y=-10,e.center(),cn.add(n)});const LE=new Wc(.2,48,48),DE=new di({color:16777215}),IE=250;for(let s=0;s<IE;s++){const e=new gt(LE,DE);e.position.x=(Math.random()-.5)*600,e.position.y=(Math.random()-.5)*1500,e.position.z=(Math.random()-.5)*600,e.rotation.x=Math.random()*Math.PI,e.rotation.y=Math.random()*Math.PI;const t=Math.random()*2;e.scale.set(t,t,t),Jt.add(e)}const UE=new Ia(1.3,.8,20,16),tm=new br({matcap:Rr}),Ea=new gt(UE,tm);Ea.position.x=1.75;cn.add(Ea);const OE=new Ia(2,1,14,3),bs=new gt(OE,tm);bs.position.y=-15;bs.position.x=0;bs.position.z=0;bs.rotation.z=Math.PI/1.2;cn.add(bs);new Na;za.load("/fonts/Manrope_Bold.json",s=>{const e=new uo("About Me",{font:s,size:3,height:.4,curveSegments:6,bevelEnabled:!0,bevelThickness:pu,bevelSize:.1,bevelOffset:0,bevelSegments:4}),t=new br({matcap:Rr}),n=new gt(e,t);n.position.y=-35,n.position.x=du,_u.add(n)});new Na;za.load("/fonts/Manrope_Bold.json",s=>{const e=new uo("Works",{font:s,size:3,height:.4,curveSegments:6,bevelEnabled:!0,bevelThickness:pu,bevelSize:.1,bevelOffset:0,bevelSegments:4}),t=new br({matcap:Rr}),n=new gt(e,t);n.position.y=-75,n.position.x=du,vu.add(n)});const NE=new Ua().load("/thika/thikaCube.png");var FE=new Ms(25,25,.1),BE=new di({map:NE}),xu=new gt(FE,BE);_u.add(xu);xu.position.y=-51;za.load("/fonts/Manrope_Bold.json",s=>{const e=new uo("contact",{font:s,size:3,height:.4,curveSegments:6,bevelEnabled:!0,bevelThickness:pu,bevelSize:.1,bevelOffset:0,bevelSegments:4}),t=new br({matcap:Rr}),n=new gt(e,t);n.position.y=-150,n.position.x=du,vu.add(n)});const Yr={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Yr.width=window.innerWidth,Yr.height=window.innerHeight,Xt.aspect=Yr.width/Yr.height,Xt.updateProjectionMatrix(),Gn.setSize(Yr.width,Yr.height),Gn.setPixelRatio(Math.min(window.devicePixelRatio,2))});Xt.position.z=5;var kE=.05,Cc=0,zE=45;function HE(){Cc=window.scrollY*kE}const GE=30;Xt.position.z=GE;let jf=0;function nm(){const s=window.scrollY,e=s-jf;Xt.position.y-=e*.05,jf=s}window.addEventListener("scroll",HE);document.body.onscroll=nm;nm();const Kr=new XMLHttpRequest;function po(s){const e=document.querySelector("#modal"),t=document.querySelector("#modal-content");Kr.open("GET","/popups/"+s.toLowerCase()+".html",!0),Kr.onreadystatechange=function(){if(Kr.readyState===4&&Kr.status===200){const n=Kr.responseText;t.innerHTML=n,document.body.classList.add("modal-open"),e.showModal()}},Kr.send()}function VE(s,e,t){let n=new se;n.x=t.clientX/window.innerWidth*2-1,n.y=-(t.clientY/window.innerHeight)*2+1,Bt.setFromCamera(n,Xt),Bt.intersectObject(s).length>0&&e()}modal.addEventListener("close",function(){document.body.classList.remove("modal-open")});function yu(s,e,t,n){wr.load(s,function(i){let r=i.scene;r.scale.set(t.x,t.y,t.z),r.position.set(e.x,e.y,e.z),Jt.add(r),Er.add(r),Er.update(),document.addEventListener("click",function(o){VE(r,n,o)}),document.addEventListener("mousemove",function(o){WE(r,o)})},function(i){},function(i){})}yu("linkedIn/link33.glb",{x:-40,y:Qp,z:0},{x:1.5,y:1.5,z:.75},XE);yu("instagram/insta2.glb",{x:-22,y:Qp,z:0},{x:1.5,y:1.5,z:.75},qE);yu("whats/whatsapp.glb",{x:-17,y:-152,z:0},{x:1.5,y:1.5,z:1},jE);function WE(s,e){let t=new se;t.x=e.clientX/window.innerWidth*2-1,t.y=-(e.clientY/window.innerHeight)*2+1,Bt.setFromCamera(t,Xt),Bt.intersectObject(s).length>0?s.userData.isHovered||(yn.to(s.position,{y:"+=1",duration:.2}),s.userData.isHovered=!0):s.userData.isHovered&&(yn.to(s.position,{y:"-=1",duration:.2,delay:.2}),s.userData.isHovered=!1)}function XE(){window.open("https://www.linkedin.com/in/thika-rudolph-0579a81b5/","_blank")}function qE(){window.open("https://www.instagram.com/thika_rudolph?igsh=NmV2c2pqdHI4Ym53","_blank")}function jE(){window.open("https://wa.me/31613021018?text=Hi%20there!%20Feel%20free%20to%20message%20me%20any%20time%20if%20you%20have%20any%20questions!","_blank")}const YE=new DM,im=()=>{const s=YE.getElapsedTime();Bt.setFromCamera(At,Xt),Gn.render(Jt,Xt),window.requestAnimationFrame(im),Ea.rotation.x+=.01,Ea.rotation.y+=.01;const e=2,t=.005;bs.position.y+=Math.sin(s*e)*t,Cc<zE&&(xu.position.x=60-Cc)};im();
//# sourceMappingURL=index-bea6cdfe.js.map
