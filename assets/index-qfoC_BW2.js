(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qr="160",Io=0,gs=1,No=2,ka=1,Fo=2,Kt=3,un=0,St=1,jt=2,on=0,Kn=1,vs=2,xs=3,Ms=4,Oo=5,Sn=100,Bo=101,zo=102,Ss=103,Es=104,Go=200,Ho=201,Vo=202,ko=203,kr=204,Wr=205,Wo=206,Xo=207,qo=208,Yo=209,Ko=210,jo=211,Zo=212,$o=213,Jo=214,Qo=0,ec=1,tc=2,qi=3,nc=4,ic=5,rc=6,sc=7,Wa=0,ac=1,oc=2,cn=0,cc=1,lc=2,uc=3,hc=4,fc=5,dc=6,Xa=300,Zn=301,$n=302,Xr=303,qr=304,Qi=306,Yr=1e3,Nt=1001,Kr=1002,vt=1003,ys=1004,ur=1005,Ct=1006,pc=1007,di=1008,ln=1009,mc=1010,_c=1011,es=1012,qa=1013,sn=1014,an=1015,pi=1016,Ya=1017,Ka=1018,yn=1020,gc=1021,Ft=1023,vc=1024,xc=1025,Tn=1026,Jn=1027,Mc=1028,ja=1029,Sc=1030,Za=1031,$a=1033,hr=33776,fr=33777,dr=33778,pr=33779,Ts=35840,As=35841,bs=35842,ws=35843,Ja=36196,Rs=37492,Cs=37496,Ls=37808,Ps=37809,Us=37810,Ds=37811,Is=37812,Ns=37813,Fs=37814,Os=37815,Bs=37816,zs=37817,Gs=37818,Hs=37819,Vs=37820,ks=37821,mr=36492,Ws=36494,Xs=36495,Ec=36283,qs=36284,Ys=36285,Ks=36286,Qa=3e3,An=3001,yc=3200,Tc=3201,eo=0,Ac=1,Lt="",ct="srgb",Jt="srgb-linear",ts="display-p3",er="display-p3-linear",Yi="linear",Ke="srgb",Ki="rec709",ji="p3",Ln=7680,js=519,bc=512,wc=513,Rc=514,to=515,Cc=516,Lc=517,Pc=518,Uc=519,Zs=35044,$s="300 es",jr=1035,Zt=2e3,Zi=2001;class ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_r=Math.PI/180,$i=180/Math.PI;function mi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ut[i&255]+ut[i>>8&255]+ut[i>>16&255]+ut[i>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[n&255]+ut[n>>8&255]+ut[n>>16&255]+ut[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function Dc(i,e){return(i%e+e)%e}function gr(i,e,t){return(1-t)*i+t*e}function Js(i){return(i&i-1)===0&&i!==0}function Zr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,n,r,s,o,a,c,l){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],p=n[2],m=n[5],M=n[8],g=r[0],d=r[3],u=r[6],A=r[1],v=r[4],T=r[7],C=r[2],w=r[5],b=r[8];return s[0]=o*g+a*A+c*C,s[3]=o*d+a*v+c*w,s[6]=o*u+a*T+c*b,s[1]=l*g+h*A+f*C,s[4]=l*d+h*v+f*w,s[7]=l*u+h*T+f*b,s[2]=p*g+m*A+M*C,s[5]=p*d+m*v+M*w,s[8]=p*u+m*T+M*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,p=a*c-h*s,m=l*s-o*c,M=t*f+n*p+r*m;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/M;return e[0]=f*g,e[1]=(r*l-h*n)*g,e[2]=(a*n-r*o)*g,e[3]=p*g,e[4]=(h*t-r*c)*g,e[5]=(r*s-a*t)*g,e[6]=m*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vr.makeScale(e,t)),this}rotate(e){return this.premultiply(vr.makeRotation(-e)),this}translate(e,t){return this.premultiply(vr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vr=new Oe;function no(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ji(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ic(){const i=Ji("canvas");return i.style.display="block",i}const Qs={};function hi(i){i in Qs||(Qs[i]=!0,console.warn(i))}const ea=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ta=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Si={[Jt]:{transfer:Yi,primaries:Ki,toReference:i=>i,fromReference:i=>i},[ct]:{transfer:Ke,primaries:Ki,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[er]:{transfer:Yi,primaries:ji,toReference:i=>i.applyMatrix3(ta),fromReference:i=>i.applyMatrix3(ea)},[ts]:{transfer:Ke,primaries:ji,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ta),fromReference:i=>i.applyMatrix3(ea).convertLinearToSRGB()}},Nc=new Set([Jt,er]),We={enabled:!0,_workingColorSpace:Jt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Nc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Si[e].toReference,r=Si[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Si[i].primaries},getTransfer:function(i){return i===Lt?Yi:Si[i].transfer}};function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Pn;class io{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pn===void 0&&(Pn=Ji("canvas")),Pn.width=e.width,Pn.height=e.height;const n=Pn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ji("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=jn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fc=0;class ro{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=mi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mr(r[o].image)):s.push(Mr(r[o]))}else s=Mr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Mr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?io.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Oc=0;class bt extends ti{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=Nt,r=Nt,s=Ct,o=di,a=Ft,c=ln,l=bt.DEFAULT_ANISOTROPY,h=Lt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=mi(),this.name="",this.source=new ro(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===An?ct:Lt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yr:e.x=e.x-Math.floor(e.x);break;case Nt:e.x=e.x<0?0:1;break;case Kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yr:e.y=e.y-Math.floor(e.y);break;case Nt:e.y=e.y<0?0:1;break;case Kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ct?An:Qa}set encoding(e){hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===An?ct:Lt}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Xa;bt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],h=c[4],f=c[8],p=c[1],m=c[5],M=c[9],g=c[2],d=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-g)<.01&&Math.abs(M-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+g)<.1&&Math.abs(M+d)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,T=(m+1)/2,C=(u+1)/2,w=(h+p)/4,b=(f+g)/4,B=(M+d)/4;return v>T&&v>C?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=w/n,s=b/n):T>C?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=w/r,s=B/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=b/s,r=B/s),this.set(n,r,s,t),this}let A=Math.sqrt((d-M)*(d-M)+(f-g)*(f-g)+(p-h)*(p-h));return Math.abs(A)<.001&&(A=1),this.x=(d-M)/A,this.y=(f-g)/A,this.z=(p-h)/A,this.w=Math.acos((l+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bc extends ti{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(hi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===An?ct:Lt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new bt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ro(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends Bc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class so extends bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zc extends bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _i{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],f=n[r+3];const p=s[o+0],m=s[o+1],M=s[o+2],g=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=M,e[t+3]=g;return}if(f!==g||c!==p||l!==m||h!==M){let d=1-a;const u=c*p+l*m+h*M+f*g,A=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const C=Math.sqrt(v),w=Math.atan2(C,u*A);d=Math.sin(d*w)/C,a=Math.sin(a*w)/C}const T=a*A;if(c=c*d+p*T,l=l*d+m*T,h=h*d+M*T,f=f*d+g*T,d===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=C,l*=C,h*=C,f*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],f=s[o],p=s[o+1],m=s[o+2],M=s[o+3];return e[t]=a*M+h*f+c*m-l*p,e[t+1]=c*M+h*p+l*f-a*m,e[t+2]=l*M+h*m+a*p-c*f,e[t+3]=h*M-a*f-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),f=a(s/2),p=c(n/2),m=c(r/2),M=c(s/2);switch(o){case"XYZ":this._x=p*h*f+l*m*M,this._y=l*m*f-p*h*M,this._z=l*h*M+p*m*f,this._w=l*h*f-p*m*M;break;case"YXZ":this._x=p*h*f+l*m*M,this._y=l*m*f-p*h*M,this._z=l*h*M-p*m*f,this._w=l*h*f+p*m*M;break;case"ZXY":this._x=p*h*f-l*m*M,this._y=l*m*f+p*h*M,this._z=l*h*M+p*m*f,this._w=l*h*f-p*m*M;break;case"ZYX":this._x=p*h*f-l*m*M,this._y=l*m*f+p*h*M,this._z=l*h*M-p*m*f,this._w=l*h*f+p*m*M;break;case"YZX":this._x=p*h*f+l*m*M,this._y=l*m*f+p*h*M,this._z=l*h*M-p*m*f,this._w=l*h*f-p*m*M;break;case"XZY":this._x=p*h*f-l*m*M,this._y=l*m*f-p*h*M,this._z=l*h*M+p*m*f,this._w=l*h*f+p*m*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],p=n+a+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(na.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(na.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),h=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+c*l+o*f-a*h,this.y=n+c*h+a*l-s*f,this.z=r+c*f+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sr.copy(this).projectOnVector(e),this.sub(Sr)}reflect(e){return this.sub(Sr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sr=new U,na=new _i;class gi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pt):Pt.fromBufferAttribute(s,o),Pt.applyMatrix4(e.matrixWorld),this.expandByPoint(Pt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ei.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ei.copy(n.boundingBox)),Ei.applyMatrix4(e.matrixWorld),this.union(Ei)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pt),Pt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ai),yi.subVectors(this.max,ai),Un.subVectors(e.a,ai),Dn.subVectors(e.b,ai),In.subVectors(e.c,ai),Qt.subVectors(Dn,Un),en.subVectors(In,Dn),mn.subVectors(Un,In);let t=[0,-Qt.z,Qt.y,0,-en.z,en.y,0,-mn.z,mn.y,Qt.z,0,-Qt.x,en.z,0,-en.x,mn.z,0,-mn.x,-Qt.y,Qt.x,0,-en.y,en.x,0,-mn.y,mn.x,0];return!Er(t,Un,Dn,In,yi)||(t=[1,0,0,0,1,0,0,0,1],!Er(t,Un,Dn,In,yi))?!1:(Ti.crossVectors(Qt,en),t=[Ti.x,Ti.y,Ti.z],Er(t,Un,Dn,In,yi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kt=[new U,new U,new U,new U,new U,new U,new U,new U],Pt=new U,Ei=new gi,Un=new U,Dn=new U,In=new U,Qt=new U,en=new U,mn=new U,ai=new U,yi=new U,Ti=new U,_n=new U;function Er(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){_n.fromArray(i,s);const a=r.x*Math.abs(_n.x)+r.y*Math.abs(_n.y)+r.z*Math.abs(_n.z),c=e.dot(_n),l=t.dot(_n),h=n.dot(_n);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Gc=new gi,oi=new U,yr=new U;class ns{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oi.subVectors(e,this.center);const t=oi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(oi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oi.copy(e.center).add(yr)),this.expandByPoint(oi.copy(e.center).sub(yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wt=new U,Tr=new U,Ai=new U,tn=new U,Ar=new U,bi=new U,br=new U;class Hc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wt.copy(this.origin).addScaledVector(this.direction,t),Wt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Tr.copy(e).add(t).multiplyScalar(.5),Ai.copy(t).sub(e).normalize(),tn.copy(this.origin).sub(Tr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ai),a=tn.dot(this.direction),c=-tn.dot(Ai),l=tn.lengthSq(),h=Math.abs(1-o*o);let f,p,m,M;if(h>0)if(f=o*c-a,p=o*a-c,M=s*h,f>=0)if(p>=-M)if(p<=M){const g=1/h;f*=g,p*=g,m=f*(f+o*p+2*a)+p*(o*f+p+2*c)+l}else p=s,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*c)+l;else p=-s,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*c)+l;else p<=-M?(f=Math.max(0,-(-o*s+a)),p=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+p*(p+2*c)+l):p<=M?(f=0,p=Math.min(Math.max(-s,-c),s),m=p*(p+2*c)+l):(f=Math.max(0,-(o*s+a)),p=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+p*(p+2*c)+l);else p=o>0?-s:s,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Tr).addScaledVector(Ai,p),m}intersectSphere(e,t){Wt.subVectors(e.center,this.origin);const n=Wt.dot(this.direction),r=Wt.dot(Wt)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),h>=0?(s=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Wt)!==null}intersectTriangle(e,t,n,r,s){Ar.subVectors(t,e),bi.subVectors(n,e),br.crossVectors(Ar,bi);let o=this.direction.dot(br),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;tn.subVectors(this.origin,e);const c=a*this.direction.dot(bi.crossVectors(tn,bi));if(c<0)return null;const l=a*this.direction.dot(Ar.cross(tn));if(l<0||c+l>o)return null;const h=-a*tn.dot(br);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,r,s,o,a,c,l,h,f,p,m,M,g,d){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,h,f,p,m,M,g,d)}set(e,t,n,r,s,o,a,c,l,h,f,p,m,M,g,d){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=p,u[3]=m,u[7]=M,u[11]=g,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Nn.setFromMatrixColumn(e,0).length(),s=1/Nn.setFromMatrixColumn(e,1).length(),o=1/Nn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=o*h,m=o*f,M=a*h,g=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=m+M*l,t[5]=p-g*l,t[9]=-a*c,t[2]=g-p*l,t[6]=M+m*l,t[10]=o*c}else if(e.order==="YXZ"){const p=c*h,m=c*f,M=l*h,g=l*f;t[0]=p+g*a,t[4]=M*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-M,t[6]=g+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*h,m=c*f,M=l*h,g=l*f;t[0]=p-g*a,t[4]=-o*f,t[8]=M+m*a,t[1]=m+M*a,t[5]=o*h,t[9]=g-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*h,m=o*f,M=a*h,g=a*f;t[0]=c*h,t[4]=M*l-m,t[8]=p*l+g,t[1]=c*f,t[5]=g*l+p,t[9]=m*l-M,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,m=o*l,M=a*c,g=a*l;t[0]=c*h,t[4]=g-p*f,t[8]=M*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*f+M,t[10]=p-g*f}else if(e.order==="XZY"){const p=o*c,m=o*l,M=a*c,g=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=p*f+g,t[5]=o*h,t[9]=m*f-M,t[2]=M*f-m,t[6]=a*h,t[10]=g*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vc,e,kc)}lookAt(e,t,n){const r=this.elements;return yt.subVectors(e,t),yt.lengthSq()===0&&(yt.z=1),yt.normalize(),nn.crossVectors(n,yt),nn.lengthSq()===0&&(Math.abs(n.z)===1?yt.x+=1e-4:yt.z+=1e-4,yt.normalize(),nn.crossVectors(n,yt)),nn.normalize(),wi.crossVectors(yt,nn),r[0]=nn.x,r[4]=wi.x,r[8]=yt.x,r[1]=nn.y,r[5]=wi.y,r[9]=yt.y,r[2]=nn.z,r[6]=wi.z,r[10]=yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],p=n[9],m=n[13],M=n[2],g=n[6],d=n[10],u=n[14],A=n[3],v=n[7],T=n[11],C=n[15],w=r[0],b=r[4],B=r[8],x=r[12],E=r[1],G=r[5],H=r[9],Q=r[13],L=r[2],O=r[6],k=r[10],q=r[14],W=r[3],X=r[7],Y=r[11],ee=r[15];return s[0]=o*w+a*E+c*L+l*W,s[4]=o*b+a*G+c*O+l*X,s[8]=o*B+a*H+c*k+l*Y,s[12]=o*x+a*Q+c*q+l*ee,s[1]=h*w+f*E+p*L+m*W,s[5]=h*b+f*G+p*O+m*X,s[9]=h*B+f*H+p*k+m*Y,s[13]=h*x+f*Q+p*q+m*ee,s[2]=M*w+g*E+d*L+u*W,s[6]=M*b+g*G+d*O+u*X,s[10]=M*B+g*H+d*k+u*Y,s[14]=M*x+g*Q+d*q+u*ee,s[3]=A*w+v*E+T*L+C*W,s[7]=A*b+v*G+T*O+C*X,s[11]=A*B+v*H+T*k+C*Y,s[15]=A*x+v*Q+T*q+C*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],p=e[10],m=e[14],M=e[3],g=e[7],d=e[11],u=e[15];return M*(+s*c*f-r*l*f-s*a*p+n*l*p+r*a*m-n*c*m)+g*(+t*c*m-t*l*p+s*o*p-r*o*m+r*l*h-s*c*h)+d*(+t*l*f-t*a*m-s*o*f+n*o*m+s*a*h-n*l*h)+u*(-r*a*h-t*c*f+t*a*p+r*o*f-n*o*p+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],p=e[10],m=e[11],M=e[12],g=e[13],d=e[14],u=e[15],A=f*d*l-g*p*l+g*c*m-a*d*m-f*c*u+a*p*u,v=M*p*l-h*d*l-M*c*m+o*d*m+h*c*u-o*p*u,T=h*g*l-M*f*l+M*a*m-o*g*m-h*a*u+o*f*u,C=M*f*c-h*g*c-M*a*p+o*g*p+h*a*d-o*f*d,w=t*A+n*v+r*T+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=A*b,e[1]=(g*p*s-f*d*s-g*r*m+n*d*m+f*r*u-n*p*u)*b,e[2]=(a*d*s-g*c*s+g*r*l-n*d*l-a*r*u+n*c*u)*b,e[3]=(f*c*s-a*p*s-f*r*l+n*p*l+a*r*m-n*c*m)*b,e[4]=v*b,e[5]=(h*d*s-M*p*s+M*r*m-t*d*m-h*r*u+t*p*u)*b,e[6]=(M*c*s-o*d*s-M*r*l+t*d*l+o*r*u-t*c*u)*b,e[7]=(o*p*s-h*c*s+h*r*l-t*p*l-o*r*m+t*c*m)*b,e[8]=T*b,e[9]=(M*f*s-h*g*s-M*n*m+t*g*m+h*n*u-t*f*u)*b,e[10]=(o*g*s-M*a*s+M*n*l-t*g*l-o*n*u+t*a*u)*b,e[11]=(h*a*s-o*f*s-h*n*l+t*f*l+o*n*m-t*a*m)*b,e[12]=C*b,e[13]=(h*g*r-M*f*r+M*n*p-t*g*p-h*n*d+t*f*d)*b,e[14]=(M*a*r-o*g*r-M*n*c+t*g*c+o*n*d-t*a*d)*b,e[15]=(o*f*r-h*a*r+h*n*c-t*f*c-o*n*p+t*a*p)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,f=a+a,p=s*l,m=s*h,M=s*f,g=o*h,d=o*f,u=a*f,A=c*l,v=c*h,T=c*f,C=n.x,w=n.y,b=n.z;return r[0]=(1-(g+u))*C,r[1]=(m+T)*C,r[2]=(M-v)*C,r[3]=0,r[4]=(m-T)*w,r[5]=(1-(p+u))*w,r[6]=(d+A)*w,r[7]=0,r[8]=(M+v)*b,r[9]=(d-A)*b,r[10]=(1-(p+g))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Nn.set(r[0],r[1],r[2]).length();const o=Nn.set(r[4],r[5],r[6]).length(),a=Nn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ut.copy(this);const l=1/s,h=1/o,f=1/a;return Ut.elements[0]*=l,Ut.elements[1]*=l,Ut.elements[2]*=l,Ut.elements[4]*=h,Ut.elements[5]*=h,Ut.elements[6]*=h,Ut.elements[8]*=f,Ut.elements[9]*=f,Ut.elements[10]*=f,t.setFromRotationMatrix(Ut),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Zt){const c=this.elements,l=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r);let m,M;if(a===Zt)m=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===Zi)m=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Zt){const c=this.elements,l=1/(t-e),h=1/(n-r),f=1/(o-s),p=(t+e)*l,m=(n+r)*h;let M,g;if(a===Zt)M=(o+s)*f,g=-2*f;else if(a===Zi)M=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=g,c[14]=-M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Nn=new U,Ut=new tt,Vc=new U(0,0,0),kc=new U(1,1,1),nn=new U,wi=new U,yt=new U,ia=new tt,ra=new _i;class tr{constructor(e=0,t=0,n=0,r=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],f=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ia.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ia,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ra.setFromEuler(this),this.setFromQuaternion(ra,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class ao{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wc=0;const sa=new U,Fn=new _i,Xt=new tt,Ri=new U,ci=new U,Xc=new U,qc=new _i,aa=new U(1,0,0),oa=new U(0,1,0),ca=new U(0,0,1),Yc={type:"added"},Kc={type:"removed"};class ft extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new U,t=new tr,n=new _i,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new Oe}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fn.setFromAxisAngle(e,t),this.quaternion.multiply(Fn),this}rotateOnWorldAxis(e,t){return Fn.setFromAxisAngle(e,t),this.quaternion.premultiply(Fn),this}rotateX(e){return this.rotateOnAxis(aa,e)}rotateY(e){return this.rotateOnAxis(oa,e)}rotateZ(e){return this.rotateOnAxis(ca,e)}translateOnAxis(e,t){return sa.copy(e).applyQuaternion(this.quaternion),this.position.add(sa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(aa,e)}translateY(e){return this.translateOnAxis(oa,e)}translateZ(e){return this.translateOnAxis(ca,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ri.copy(e):Ri.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xt.lookAt(ci,Ri,this.up):Xt.lookAt(Ri,ci,this.up),this.quaternion.setFromRotationMatrix(Xt),r&&(Xt.extractRotation(r.matrixWorld),Fn.setFromRotationMatrix(Xt),this.quaternion.premultiply(Fn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Yc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ci,e,Xc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ci,qc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),p=o(e.skeletons),m=o(e.animations),M=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),M.length>0&&(n.nodes=M)}return n.object=r,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ft.DEFAULT_UP=new U(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dt=new U,qt=new U,wr=new U,Yt=new U,On=new U,Bn=new U,la=new U,Rr=new U,Cr=new U,Lr=new U;let Ci=!1;class It{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Dt.subVectors(e,t),r.cross(Dt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Dt.subVectors(r,t),qt.subVectors(n,t),wr.subVectors(e,t);const o=Dt.dot(Dt),a=Dt.dot(qt),c=Dt.dot(wr),l=qt.dot(qt),h=qt.dot(wr),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const p=1/f,m=(l*c-a*h)*p,M=(o*h-a*c)*p;return s.set(1-m-M,M,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Yt)===null?!1:Yt.x>=0&&Yt.y>=0&&Yt.x+Yt.y<=1}static getUV(e,t,n,r,s,o,a,c){return Ci===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ci=!0),this.getInterpolation(e,t,n,r,s,o,a,c)}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Yt)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Yt.x),c.addScaledVector(o,Yt.y),c.addScaledVector(a,Yt.z),c)}static isFrontFacing(e,t,n,r){return Dt.subVectors(n,t),qt.subVectors(e,t),Dt.cross(qt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dt.subVectors(this.c,this.b),qt.subVectors(this.a,this.b),Dt.cross(qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return It.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return It.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Ci===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ci=!0),It.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return It.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return It.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return It.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;On.subVectors(r,n),Bn.subVectors(s,n),Rr.subVectors(e,n);const c=On.dot(Rr),l=Bn.dot(Rr);if(c<=0&&l<=0)return t.copy(n);Cr.subVectors(e,r);const h=On.dot(Cr),f=Bn.dot(Cr);if(h>=0&&f<=h)return t.copy(r);const p=c*f-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(On,o);Lr.subVectors(e,s);const m=On.dot(Lr),M=Bn.dot(Lr);if(M>=0&&m<=M)return t.copy(s);const g=m*l-c*M;if(g<=0&&l>=0&&M<=0)return a=l/(l-M),t.copy(n).addScaledVector(Bn,a);const d=h*M-m*f;if(d<=0&&f-h>=0&&m-M>=0)return la.subVectors(s,r),a=(f-h)/(f-h+(m-M)),t.copy(r).addScaledVector(la,a);const u=1/(d+g+p);return o=g*u,a=p*u,t.copy(n).addScaledVector(On,o).addScaledVector(Bn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rn={h:0,s:0,l:0},Li={h:0,s:0,l:0};function Pr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=We.workingColorSpace){if(e=Dc(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Pr(o,s,e+1/3),this.g=Pr(o,s,e),this.b=Pr(o,s,e-1/3)}return We.toWorkingColorSpace(this,r),this}setStyle(e,t=ct){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){const n=oo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return We.fromWorkingColorSpace(ht.copy(this),e),Math.round(Mt(ht.r*255,0,255))*65536+Math.round(Mt(ht.g*255,0,255))*256+Math.round(Mt(ht.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(ht.copy(this),t);const n=ht.r,r=ht.g,s=ht.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(ht.copy(this),t),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=ct){We.fromWorkingColorSpace(ht.copy(this),e);const t=ht.r,n=ht.g,r=ht.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(rn),this.setHSL(rn.h+e,rn.s+t,rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rn),e.getHSL(Li);const n=gr(rn.h,Li.h,t),r=gr(rn.s,Li.s,t),s=gr(rn.l,Li.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ht=new ze;ze.NAMES=oo;let jc=0;class vi extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Kn,this.side=un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kr,this.blendDst=Wr,this.blendEquation=Sn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=js,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ln,this.stencilZFail=Ln,this.stencilZPass=Ln,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Kn&&(n.blending=this.blending),this.side!==un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kr&&(n.blendSrc=this.blendSrc),this.blendDst!==Wr&&(n.blendDst=this.blendDst),this.blendEquation!==Sn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==js&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ln&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ln&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ln&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class co extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const et=new U,Pi=new Ge;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pi.fromBufferAttribute(this,t),Pi.applyMatrix3(e),this.setXY(t,Pi.x,Pi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix3(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zs&&(e.usage=this.usage),e}}class lo extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class uo extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zc=0;const Rt=new tt,Ur=new ft,zn=new U,Tt=new gi,li=new gi,at=new U;class Ht extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zc++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(no(e)?uo:lo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Oe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rt.makeRotationFromQuaternion(e),this.applyMatrix4(Rt),this}rotateX(e){return Rt.makeRotationX(e),this.applyMatrix4(Rt),this}rotateY(e){return Rt.makeRotationY(e),this.applyMatrix4(Rt),this}rotateZ(e){return Rt.makeRotationZ(e),this.applyMatrix4(Rt),this}translate(e,t,n){return Rt.makeTranslation(e,t,n),this.applyMatrix4(Rt),this}scale(e,t,n){return Rt.makeScale(e,t,n),this.applyMatrix4(Rt),this}lookAt(e){return Ur.lookAt(e),Ur.updateMatrix(),this.applyMatrix4(Ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zn).negate(),this.translate(zn.x,zn.y,zn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Tt.setFromBufferAttribute(s),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,Tt.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,Tt.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint(Tt.min),this.boundingBox.expandByPoint(Tt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Tt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];li.setFromBufferAttribute(a),this.morphTargetsRelative?(at.addVectors(Tt.min,li.min),Tt.expandByPoint(at),at.addVectors(Tt.max,li.max),Tt.expandByPoint(at)):(Tt.expandByPoint(li.min),Tt.expandByPoint(li.max))}Tt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)at.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(at));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)at.fromBufferAttribute(a,l),c&&(zn.fromBufferAttribute(e,l),at.add(zn)),r=Math.max(r,n.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<a;E++)l[E]=new U,h[E]=new U;const f=new U,p=new U,m=new U,M=new Ge,g=new Ge,d=new Ge,u=new U,A=new U;function v(E,G,H){f.fromArray(r,E*3),p.fromArray(r,G*3),m.fromArray(r,H*3),M.fromArray(o,E*2),g.fromArray(o,G*2),d.fromArray(o,H*2),p.sub(f),m.sub(f),g.sub(M),d.sub(M);const Q=1/(g.x*d.y-d.x*g.y);isFinite(Q)&&(u.copy(p).multiplyScalar(d.y).addScaledVector(m,-g.y).multiplyScalar(Q),A.copy(m).multiplyScalar(g.x).addScaledVector(p,-d.x).multiplyScalar(Q),l[E].add(u),l[G].add(u),l[H].add(u),h[E].add(A),h[G].add(A),h[H].add(A))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let E=0,G=T.length;E<G;++E){const H=T[E],Q=H.start,L=H.count;for(let O=Q,k=Q+L;O<k;O+=3)v(n[O+0],n[O+1],n[O+2])}const C=new U,w=new U,b=new U,B=new U;function x(E){b.fromArray(s,E*3),B.copy(b);const G=l[E];C.copy(G),C.sub(b.multiplyScalar(b.dot(G))).normalize(),w.crossVectors(B,G);const Q=w.dot(h[E])<0?-1:1;c[E*4]=C.x,c[E*4+1]=C.y,c[E*4+2]=C.z,c[E*4+3]=Q}for(let E=0,G=T.length;E<G;++E){const H=T[E],Q=H.start,L=H.count;for(let O=Q,k=Q+L;O<k;O+=3)x(n[O+0]),x(n[O+1]),x(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new U,s=new U,o=new U,a=new U,c=new U,l=new U,h=new U,f=new U;if(e)for(let p=0,m=e.count;p<m;p+=3){const M=e.getX(p+0),g=e.getX(p+1),d=e.getX(p+2);r.fromBufferAttribute(t,M),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,d),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(n,M),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),a.add(h),c.add(h),l.add(h),n.setXYZ(M,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)at.fromBufferAttribute(e,t),at.normalize(),e.setXYZ(t,at.x,at.y,at.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,f=a.normalized,p=new l.constructor(c.length*h);let m=0,M=0;for(let g=0,d=c.length;g<d;g++){a.isInterleavedBufferAttribute?m=c[g]*a.data.stride+a.offset:m=c[g]*h;for(let u=0;u<h;u++)p[M++]=l[m++]}return new Gt(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,f=l.length;h<f;h++){const p=l[h],m=e(p,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,p=l.length;f<p;f++){const m=l[f];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],f=s[l];for(let p=0,m=f.length;p<m;p++)h.push(f[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ua=new tt,gn=new Hc,Ui=new ns,ha=new U,Gn=new U,Hn=new U,Vn=new U,Dr=new U,Di=new U,Ii=new Ge,Ni=new Ge,Fi=new Ge,fa=new U,da=new U,pa=new U,Oi=new U,Bi=new U;class $t extends ft{constructor(e=new Ht,t=new co){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Di.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],f=s[c];h!==0&&(Dr.fromBufferAttribute(f,e),o?Di.addScaledVector(Dr,h):Di.addScaledVector(Dr.sub(t),h))}t.add(Di)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ui.copy(n.boundingSphere),Ui.applyMatrix4(s),gn.copy(e.ray).recast(e.near),!(Ui.containsPoint(gn.origin)===!1&&(gn.intersectSphere(Ui,ha)===null||gn.origin.distanceToSquared(ha)>(e.far-e.near)**2))&&(ua.copy(s).invert(),gn.copy(e.ray).applyMatrix4(ua),!(n.boundingBox!==null&&gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let M=0,g=p.length;M<g;M++){const d=p[M],u=o[d.materialIndex],A=Math.max(d.start,m.start),v=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let T=A,C=v;T<C;T+=3){const w=a.getX(T),b=a.getX(T+1),B=a.getX(T+2);r=zi(this,u,e,n,l,h,f,w,b,B),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const M=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let d=M,u=g;d<u;d+=3){const A=a.getX(d),v=a.getX(d+1),T=a.getX(d+2);r=zi(this,o,e,n,l,h,f,A,v,T),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let M=0,g=p.length;M<g;M++){const d=p[M],u=o[d.materialIndex],A=Math.max(d.start,m.start),v=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let T=A,C=v;T<C;T+=3){const w=T,b=T+1,B=T+2;r=zi(this,u,e,n,l,h,f,w,b,B),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const M=Math.max(0,m.start),g=Math.min(c.count,m.start+m.count);for(let d=M,u=g;d<u;d+=3){const A=d,v=d+1,T=d+2;r=zi(this,o,e,n,l,h,f,A,v,T),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function $c(i,e,t,n,r,s,o,a){let c;if(e.side===St?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===un,a),c===null)return null;Bi.copy(a),Bi.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Bi);return l<t.near||l>t.far?null:{distance:l,point:Bi.clone(),object:i}}function zi(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,Gn),i.getVertexPosition(c,Hn),i.getVertexPosition(l,Vn);const h=$c(i,e,t,n,Gn,Hn,Vn,Oi);if(h){r&&(Ii.fromBufferAttribute(r,a),Ni.fromBufferAttribute(r,c),Fi.fromBufferAttribute(r,l),h.uv=It.getInterpolation(Oi,Gn,Hn,Vn,Ii,Ni,Fi,new Ge)),s&&(Ii.fromBufferAttribute(s,a),Ni.fromBufferAttribute(s,c),Fi.fromBufferAttribute(s,l),h.uv1=It.getInterpolation(Oi,Gn,Hn,Vn,Ii,Ni,Fi,new Ge),h.uv2=h.uv1),o&&(fa.fromBufferAttribute(o,a),da.fromBufferAttribute(o,c),pa.fromBufferAttribute(o,l),h.normal=It.getInterpolation(Oi,Gn,Hn,Vn,fa,da,pa,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new U,materialIndex:0};It.getNormal(Gn,Hn,Vn,f.normal),h.face=f}return h}class ni extends Ht{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],f=[];let p=0,m=0;M("z","y","x",-1,-1,n,t,e,o,s,0),M("z","y","x",1,-1,n,t,-e,o,s,1),M("x","z","y",1,1,e,n,t,r,o,2),M("x","z","y",1,-1,e,n,-t,r,o,3),M("x","y","z",1,-1,e,t,n,r,s,4),M("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2));function M(g,d,u,A,v,T,C,w,b,B,x){const E=T/b,G=C/B,H=T/2,Q=C/2,L=w/2,O=b+1,k=B+1;let q=0,W=0;const X=new U;for(let Y=0;Y<k;Y++){const ee=Y*G-Q;for(let te=0;te<O;te++){const V=te*E-H;X[g]=V*A,X[d]=ee*v,X[u]=L,l.push(X.x,X.y,X.z),X[g]=0,X[d]=0,X[u]=w>0?1:-1,h.push(X.x,X.y,X.z),f.push(te/b),f.push(1-Y/B),q+=1}}for(let Y=0;Y<B;Y++)for(let ee=0;ee<b;ee++){const te=p+ee+O*Y,V=p+ee+O*(Y+1),K=p+(ee+1)+O*(Y+1),oe=p+(ee+1)+O*Y;c.push(te,V,oe),c.push(V,K,oe),W+=6}a.addGroup(m,W,x),m+=W,p+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qn(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function gt(i){const e={};for(let t=0;t<i.length;t++){const n=Qn(i[t]);for(const r in n)e[r]=n[r]}return e}function Jc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ho(i){return i.getRenderTarget()===null?i.outputColorSpace:We.workingColorSpace}const Qc={clone:Qn,merge:gt};var el=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=el,this.fragmentShader=tl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qn(e.uniforms),this.uniformsGroups=Jc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fo extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Zt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class At extends fo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$i*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_r*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const kn=-90,Wn=1;class nl extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new At(kn,Wn,e,t);r.layers=this.layers,this.add(r);const s=new At(kn,Wn,e,t);s.layers=this.layers,this.add(s);const o=new At(kn,Wn,e,t);o.layers=this.layers,this.add(o);const a=new At(kn,Wn,e,t);a.layers=this.layers,this.add(a);const c=new At(kn,Wn,e,t);c.layers=this.layers,this.add(c);const l=new At(kn,Wn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Zt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Zi)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(f,p,m),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class po extends bt{constructor(e,t,n,r,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Zn,super(e,t,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class il extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(hi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===An?ct:Lt),this.texture=new po(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ni(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:Qn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:St,blending:on});s.uniforms.tEquirect.value=t;const o=new $t(r,s),a=t.minFilter;return t.minFilter===di&&(t.minFilter=Ct),new nl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Ir=new U,rl=new U,sl=new Oe;class xn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ir.subVectors(n,t).cross(rl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ir),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sl.getNormalMatrix(e),r=this.coplanarPoint(Ir).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vn=new ns,Gi=new U;class is{constructor(e=new xn,t=new xn,n=new xn,r=new xn,s=new xn,o=new xn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zt){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],f=r[6],p=r[7],m=r[8],M=r[9],g=r[10],d=r[11],u=r[12],A=r[13],v=r[14],T=r[15];if(n[0].setComponents(c-s,p-l,d-m,T-u).normalize(),n[1].setComponents(c+s,p+l,d+m,T+u).normalize(),n[2].setComponents(c+o,p+h,d+M,T+A).normalize(),n[3].setComponents(c-o,p-h,d-M,T-A).normalize(),n[4].setComponents(c-a,p-f,d-g,T-v).normalize(),t===Zt)n[5].setComponents(c+a,p+f,d+g,T+v).normalize();else if(t===Zi)n[5].setComponents(a,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vn)}intersectsSprite(e){return vn.center.set(0,0,0),vn.radius=.7071067811865476,vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(vn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Gi.x=r.normal.x>0?e.max.x:e.min.x,Gi.y=r.normal.y>0?e.max.y:e.min.y,Gi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mo(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function al(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,h){const f=l.array,p=l.usage,m=f.byteLength,M=i.createBuffer();i.bindBuffer(h,M),i.bufferData(h,f,p),l.onUploadCallback();let g;if(f instanceof Float32Array)g=i.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=i.SHORT;else if(f instanceof Uint32Array)g=i.UNSIGNED_INT;else if(f instanceof Int32Array)g=i.INT;else if(f instanceof Int8Array)g=i.BYTE;else if(f instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:M,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,h,f){const p=h.array,m=h._updateRange,M=h.updateRanges;if(i.bindBuffer(f,l),m.count===-1&&M.length===0&&i.bufferSubData(f,0,p),M.length!==0){for(let g=0,d=M.length;g<d;g++){const u=M[g];t?i.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):i.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const p=n.get(l);(!p||p.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);if(f===void 0)n.set(l,r(l,h));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,l,h),f.version=l.version}}return{get:o,remove:a,update:c}}class rs extends Ht{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,f=e/a,p=t/c,m=[],M=[],g=[],d=[];for(let u=0;u<h;u++){const A=u*p-o;for(let v=0;v<l;v++){const T=v*f-s;M.push(T,-A,0),g.push(0,0,1),d.push(v/a),d.push(1-u/c)}}for(let u=0;u<c;u++)for(let A=0;A<a;A++){const v=A+l*u,T=A+l*(u+1),C=A+1+l*(u+1),w=A+1+l*u;m.push(v,T,w),m.push(T,C,w)}this.setIndex(m),this.setAttribute("position",new dt(M,3)),this.setAttribute("normal",new dt(g,3)),this.setAttribute("uv",new dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.widthSegments,e.heightSegments)}}var ol=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cl=`#ifdef USE_ALPHAHASH
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
#endif`,ll=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ul=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dl=`#ifdef USE_AOMAP
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
#endif`,pl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ml=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_l=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xl=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ml=`#ifdef USE_IRIDESCENCE
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
#endif`,Sl=`#ifdef USE_BUMPMAP
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
#endif`,El=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Al=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ll=`#define PI 3.141592653589793
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
} // validated`,Pl=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Ul=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Il=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ol="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bl=`
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
}`,zl=`#ifdef USE_ENVMAP
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
#endif`,Gl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hl=`#ifdef USE_ENVMAP
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
#endif`,Vl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kl=`#ifdef USE_ENVMAP
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
#endif`,Wl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ql=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kl=`#ifdef USE_GRADIENTMAP
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
}`,jl=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$l=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ql=`uniform bool receiveShadow;
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
#endif`,eu=`#ifdef USE_ENVMAP
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
#endif`,tu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ru=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,su=`PhysicalMaterial material;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,au=`struct PhysicalMaterial {
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
}`,ou=`
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
#endif`,cu=`#if defined( RE_IndirectDiffuse )
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
#endif`,lu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,du=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_u=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gu=`#if defined( USE_POINTS_UV )
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
#endif`,vu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Su=`#ifdef USE_MORPHNORMALS
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
#endif`,Eu=`#ifdef USE_MORPHTARGETS
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
#endif`,yu=`#ifdef USE_MORPHTARGETS
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
#endif`,Tu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Au=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ru=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cu=`#ifdef USE_NORMALMAP
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
#endif`,Lu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Du=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ou=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ku=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xu=`float getShadowMask() {
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
}`,qu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ku=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ju=`#ifdef USE_SKINNING
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
#endif`,Zu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$u=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ju=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qu=`#ifndef saturate
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eh=`#ifdef USE_TRANSMISSION
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
#endif`,th=`#ifdef USE_TRANSMISSION
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
#endif`,nh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ih=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ah=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oh=`uniform sampler2D t2D;
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
}`,ch=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,dh=`#if DEPTH_PACKING == 3200
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
}`,ph=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,mh=`#define DISTANCE
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
}`,_h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vh=`uniform float scale;
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
}`,xh=`uniform vec3 diffuse;
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
}`,Mh=`#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Sh=`uniform vec3 diffuse;
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
}`,Eh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,yh=`#define LAMBERT
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
}`,Th=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Ah=`#define MATCAP
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
}`,bh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,wh=`#define NORMAL
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
}`,Rh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Ch=`#define PHONG
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
}`,Lh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Ph=`#define STANDARD
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
}`,Uh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Dh=`#define TOON
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
}`,Ih=`uniform float size;
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
}`,Nh=`uniform vec3 diffuse;
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
}`,Fh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
}`,Oh=`uniform vec3 color;
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
}`,Bh=`uniform float rotation;
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
}`,zh=`uniform vec3 diffuse;
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
}`,Pe={alphahash_fragment:ol,alphahash_pars_fragment:cl,alphamap_fragment:ll,alphamap_pars_fragment:ul,alphatest_fragment:hl,alphatest_pars_fragment:fl,aomap_fragment:dl,aomap_pars_fragment:pl,batching_pars_vertex:ml,batching_vertex:_l,begin_vertex:gl,beginnormal_vertex:vl,bsdfs:xl,iridescence_fragment:Ml,bumpmap_pars_fragment:Sl,clipping_planes_fragment:El,clipping_planes_pars_fragment:yl,clipping_planes_pars_vertex:Tl,clipping_planes_vertex:Al,color_fragment:bl,color_pars_fragment:wl,color_pars_vertex:Rl,color_vertex:Cl,common:Ll,cube_uv_reflection_fragment:Pl,defaultnormal_vertex:Ul,displacementmap_pars_vertex:Dl,displacementmap_vertex:Il,emissivemap_fragment:Nl,emissivemap_pars_fragment:Fl,colorspace_fragment:Ol,colorspace_pars_fragment:Bl,envmap_fragment:zl,envmap_common_pars_fragment:Gl,envmap_pars_fragment:Hl,envmap_pars_vertex:Vl,envmap_physical_pars_fragment:eu,envmap_vertex:kl,fog_vertex:Wl,fog_pars_vertex:Xl,fog_fragment:ql,fog_pars_fragment:Yl,gradientmap_pars_fragment:Kl,lightmap_fragment:jl,lightmap_pars_fragment:Zl,lights_lambert_fragment:$l,lights_lambert_pars_fragment:Jl,lights_pars_begin:Ql,lights_toon_fragment:tu,lights_toon_pars_fragment:nu,lights_phong_fragment:iu,lights_phong_pars_fragment:ru,lights_physical_fragment:su,lights_physical_pars_fragment:au,lights_fragment_begin:ou,lights_fragment_maps:cu,lights_fragment_end:lu,logdepthbuf_fragment:uu,logdepthbuf_pars_fragment:hu,logdepthbuf_pars_vertex:fu,logdepthbuf_vertex:du,map_fragment:pu,map_pars_fragment:mu,map_particle_fragment:_u,map_particle_pars_fragment:gu,metalnessmap_fragment:vu,metalnessmap_pars_fragment:xu,morphcolor_vertex:Mu,morphnormal_vertex:Su,morphtarget_pars_vertex:Eu,morphtarget_vertex:yu,normal_fragment_begin:Tu,normal_fragment_maps:Au,normal_pars_fragment:bu,normal_pars_vertex:wu,normal_vertex:Ru,normalmap_pars_fragment:Cu,clearcoat_normal_fragment_begin:Lu,clearcoat_normal_fragment_maps:Pu,clearcoat_pars_fragment:Uu,iridescence_pars_fragment:Du,opaque_fragment:Iu,packing:Nu,premultiplied_alpha_fragment:Fu,project_vertex:Ou,dithering_fragment:Bu,dithering_pars_fragment:zu,roughnessmap_fragment:Gu,roughnessmap_pars_fragment:Hu,shadowmap_pars_fragment:Vu,shadowmap_pars_vertex:ku,shadowmap_vertex:Wu,shadowmask_pars_fragment:Xu,skinbase_vertex:qu,skinning_pars_vertex:Yu,skinning_vertex:Ku,skinnormal_vertex:ju,specularmap_fragment:Zu,specularmap_pars_fragment:$u,tonemapping_fragment:Ju,tonemapping_pars_fragment:Qu,transmission_fragment:eh,transmission_pars_fragment:th,uv_pars_fragment:nh,uv_pars_vertex:ih,uv_vertex:rh,worldpos_vertex:sh,background_vert:ah,background_frag:oh,backgroundCube_vert:ch,backgroundCube_frag:lh,cube_vert:uh,cube_frag:hh,depth_vert:fh,depth_frag:dh,distanceRGBA_vert:ph,distanceRGBA_frag:mh,equirect_vert:_h,equirect_frag:gh,linedashed_vert:vh,linedashed_frag:xh,meshbasic_vert:Mh,meshbasic_frag:Sh,meshlambert_vert:Eh,meshlambert_frag:yh,meshmatcap_vert:Th,meshmatcap_frag:Ah,meshnormal_vert:bh,meshnormal_frag:wh,meshphong_vert:Rh,meshphong_frag:Ch,meshphysical_vert:Lh,meshphysical_frag:Ph,meshtoon_vert:Uh,meshtoon_frag:Dh,points_vert:Ih,points_frag:Nh,shadow_vert:Fh,shadow_frag:Oh,sprite_vert:Bh,sprite_frag:zh},ie={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Bt={basic:{uniforms:gt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:gt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ze(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:gt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:gt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:gt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new ze(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:gt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:gt([ie.points,ie.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:gt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:gt([ie.common,ie.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:gt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:gt([ie.sprite,ie.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:gt([ie.common,ie.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:gt([ie.lights,ie.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Bt.physical={uniforms:gt([Bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const Hi={r:0,b:0,g:0};function Gh(i,e,t,n,r,s,o){const a=new ze(0);let c=s===!0?0:1,l,h,f=null,p=0,m=null;function M(d,u){let A=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,c):v&&v.isColor&&(g(v,1),A=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Qi)?(h===void 0&&(h=new $t(new ni(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Qn(Bt.backgroundCube.uniforms),vertexShader:Bt.backgroundCube.vertexShader,fragmentShader:Bt.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=We.getTransfer(v.colorSpace)!==Ke,(f!==v||p!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=v,p=v.version,m=i.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new $t(new rs(2,2),new Cn({name:"BackgroundMaterial",uniforms:Qn(Bt.background.uniforms),vertexShader:Bt.background.vertexShader,fragmentShader:Bt.background.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=We.getTransfer(v.colorSpace)!==Ke,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||p!==v.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,p=v.version,m=i.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function g(d,u){d.getRGB(Hi,ho(i)),n.buffers.color.setClear(Hi.r,Hi.g,Hi.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(d,u=1){a.set(d),c=u,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,g(a,c)},render:M}}function Hh(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=d(null);let l=c,h=!1;function f(L,O,k,q,W){let X=!1;if(o){const Y=g(q,k,O);l!==Y&&(l=Y,m(l.object)),X=u(L,q,k,W),X&&A(L,q,k,W)}else{const Y=O.wireframe===!0;(l.geometry!==q.id||l.program!==k.id||l.wireframe!==Y)&&(l.geometry=q.id,l.program=k.id,l.wireframe=Y,X=!0)}W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,B(L,O,k,q),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function p(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(L){return n.isWebGL2?i.bindVertexArray(L):s.bindVertexArrayOES(L)}function M(L){return n.isWebGL2?i.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function g(L,O,k){const q=k.wireframe===!0;let W=a[L.id];W===void 0&&(W={},a[L.id]=W);let X=W[O.id];X===void 0&&(X={},W[O.id]=X);let Y=X[q];return Y===void 0&&(Y=d(p()),X[q]=Y),Y}function d(L){const O=[],k=[],q=[];for(let W=0;W<r;W++)O[W]=0,k[W]=0,q[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:q,object:L,attributes:{},index:null}}function u(L,O,k,q){const W=l.attributes,X=O.attributes;let Y=0;const ee=k.getAttributes();for(const te in ee)if(ee[te].location>=0){const K=W[te];let oe=X[te];if(oe===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),K===void 0||K.attribute!==oe||oe&&K.data!==oe.data)return!0;Y++}return l.attributesNum!==Y||l.index!==q}function A(L,O,k,q){const W={},X=O.attributes;let Y=0;const ee=k.getAttributes();for(const te in ee)if(ee[te].location>=0){let K=X[te];K===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const oe={};oe.attribute=K,K&&K.data&&(oe.data=K.data),W[te]=oe,Y++}l.attributes=W,l.attributesNum=Y,l.index=q}function v(){const L=l.newAttributes;for(let O=0,k=L.length;O<k;O++)L[O]=0}function T(L){C(L,0)}function C(L,O){const k=l.newAttributes,q=l.enabledAttributes,W=l.attributeDivisors;k[L]=1,q[L]===0&&(i.enableVertexAttribArray(L),q[L]=1),W[L]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),W[L]=O)}function w(){const L=l.newAttributes,O=l.enabledAttributes;for(let k=0,q=O.length;k<q;k++)O[k]!==L[k]&&(i.disableVertexAttribArray(k),O[k]=0)}function b(L,O,k,q,W,X,Y){Y===!0?i.vertexAttribIPointer(L,O,k,W,X):i.vertexAttribPointer(L,O,k,q,W,X)}function B(L,O,k,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=q.attributes,X=k.getAttributes(),Y=O.defaultAttributeValues;for(const ee in X){const te=X[ee];if(te.location>=0){let V=W[ee];if(V===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){const K=V.normalized,oe=V.itemSize,me=t.get(V);if(me===void 0)continue;const pe=me.buffer,we=me.type,Ce=me.bytesPerElement,Se=n.isWebGL2===!0&&(we===i.INT||we===i.UNSIGNED_INT||V.gpuType===qa);if(V.isInterleavedBufferAttribute){const He=V.data,D=He.stride,pt=V.offset;if(He.isInstancedInterleavedBuffer){for(let ge=0;ge<te.locationSize;ge++)C(te.location+ge,He.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let ge=0;ge<te.locationSize;ge++)T(te.location+ge);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let ge=0;ge<te.locationSize;ge++)b(te.location+ge,oe/te.locationSize,we,K,D*Ce,(pt+oe/te.locationSize*ge)*Ce,Se)}else{if(V.isInstancedBufferAttribute){for(let He=0;He<te.locationSize;He++)C(te.location+He,V.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let He=0;He<te.locationSize;He++)T(te.location+He);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let He=0;He<te.locationSize;He++)b(te.location+He,oe/te.locationSize,we,K,oe*Ce,oe/te.locationSize*He*Ce,Se)}}else if(Y!==void 0){const K=Y[ee];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(te.location,K);break;case 3:i.vertexAttrib3fv(te.location,K);break;case 4:i.vertexAttrib4fv(te.location,K);break;default:i.vertexAttrib1fv(te.location,K)}}}}w()}function x(){H();for(const L in a){const O=a[L];for(const k in O){const q=O[k];for(const W in q)M(q[W].object),delete q[W];delete O[k]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const O=a[L.id];for(const k in O){const q=O[k];for(const W in q)M(q[W].object),delete q[W];delete O[k]}delete a[L.id]}function G(L){for(const O in a){const k=a[O];if(k[L.id]===void 0)continue;const q=k[L.id];for(const W in q)M(q[W].object),delete q[W];delete k[L.id]}}function H(){Q(),h=!0,l!==c&&(l=c,m(l.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:H,resetDefaultState:Q,dispose:x,releaseStatesOfGeometry:E,releaseStatesOfProgram:G,initAttributes:v,enableAttribute:T,disableUnusedAttributes:w}}function Vh(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}function a(h,f){i.drawArrays(s,h,f),t.update(f,s,1)}function c(h,f,p){if(p===0)return;let m,M;if(r)m=i,M="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[M](s,h,f,p),t.update(f,s,p)}function l(h,f,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let M=0;M<p;M++)this.render(h[M],f[M]);else{m.multiDrawArraysWEBGL(s,h,0,f,0,p);let M=0;for(let g=0;g<p;g++)M+=f[g];t.update(M,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function kh(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,T=o||e.has("OES_texture_float"),C=v&&T,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:d,maxVaryings:u,maxFragmentUniforms:A,vertexTextures:v,floatFragmentTextures:T,floatVertexTextures:C,maxSamples:w}}function Wh(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new xn,a=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||n!==0||r;return r=p,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,m){const M=f.clippingPlanes,g=f.clipIntersection,d=f.clipShadows,u=i.get(f);if(!r||M===null||M.length===0||s&&!d)s?h(null):l();else{const A=s?0:n,v=A*4;let T=u.clippingState||null;c.value=T,T=h(M,p,v,m);for(let C=0;C!==v;++C)T[C]=t[C];u.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,p,m,M){const g=f!==null?f.length:0;let d=null;if(g!==0){if(d=c.value,M!==!0||d===null){const u=m+g*4,A=p.matrixWorldInverse;a.getNormalMatrix(A),(d===null||d.length<u)&&(d=new Float32Array(u));for(let v=0,T=m;v!==g;++v,T+=4)o.copy(f[v]).applyMatrix4(A,a),o.normal.toArray(d,T),d[T+3]=o.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,d}}function Xh(i){let e=new WeakMap;function t(o,a){return a===Xr?o.mapping=Zn:a===qr&&(o.mapping=$n),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xr||a===qr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new il(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class qh extends fo{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qn=4,ma=[.125,.215,.35,.446,.526,.582],En=20,Nr=new qh,_a=new ze;let Fr=null,Or=0,Br=0;const Mn=(1+Math.sqrt(5))/2,Xn=1/Mn,ga=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Mn,Xn),new U(0,Mn,-Xn),new U(Xn,0,Mn),new U(-Xn,0,Mn),new U(Mn,Xn,0),new U(-Mn,Xn,0)];class va{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ma(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fr,Or,Br),e.scissorTest=!1,Vi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zn||e.mapping===$n?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:pi,format:Ft,colorSpace:Jt,depthBuffer:!1},r=xa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yh(s)),this._blurMaterial=Kh(s,e,t)}return r}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,n,r){const a=new At(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(_a),h.toneMapping=cn,h.autoClear=!1;const m=new co({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),M=new $t(new ni,m);let g=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,g=!0):(m.color.copy(_a),g=!0);for(let u=0;u<6;u++){const A=u%3;A===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):A===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));const v=this._cubeSize;Vi(r,A*v,u>2?v:0,v,v),h.setRenderTarget(r),g&&h.render(M,a),h.render(e,a)}M.geometry.dispose(),M.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Zn||e.mapping===$n;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ma());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Vi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Nr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ga[(r-1)%ga.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new $t(this._lodPlanes[r],l),p=l.uniforms,m=this._sizeLods[n]-1,M=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*En-1),g=s/M,d=isFinite(s)?1+Math.floor(h*g):En;d>En&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${En}`);const u=[];let A=0;for(let b=0;b<En;++b){const B=b/g,x=Math.exp(-B*B/2);u.push(x),b===0?A+=x:b<d&&(A+=2*x)}for(let b=0;b<u.length;b++)u[b]=u[b]/A;p.envMap.value=e.texture,p.samples.value=d,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:v}=this;p.dTheta.value=M,p.mipInt.value=v-n;const T=this._sizeLods[r],C=3*T*(r>v-qn?r-v+qn:0),w=4*(this._cubeSize-T);Vi(t,C,w,3*T,2*T),c.setRenderTarget(t),c.render(f,Nr)}}function Yh(i){const e=[],t=[],n=[];let r=i;const s=i-qn+1+ma.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-qn?c=ma[o-i+qn-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,f=1+l,p=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,M=6,g=3,d=2,u=1,A=new Float32Array(g*M*m),v=new Float32Array(d*M*m),T=new Float32Array(u*M*m);for(let w=0;w<m;w++){const b=w%3*2/3-1,B=w>2?0:-1,x=[b,B,0,b+2/3,B,0,b+2/3,B+1,0,b,B,0,b+2/3,B+1,0,b,B+1,0];A.set(x,g*M*w),v.set(p,d*M*w);const E=[w,w,w,w,w,w];T.set(E,u*M*w)}const C=new Ht;C.setAttribute("position",new Gt(A,g)),C.setAttribute("uv",new Gt(v,d)),C.setAttribute("faceIndex",new Gt(T,u)),e.push(C),r>qn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xa(i,e,t){const n=new Rn(i,e,t);return n.texture.mapping=Qi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Kh(i,e,t){const n=new Float32Array(En),r=new U(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:En,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ss(),fragmentShader:`

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
		`,blending:on,depthTest:!1,depthWrite:!1})}function Ma(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ss(),fragmentShader:`

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
		`,blending:on,depthTest:!1,depthWrite:!1})}function Sa(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function ss(){return`

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
	`}function jh(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Xr||c===qr,h=c===Zn||c===$n;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new va(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||h&&f&&r(f)){t===null&&(t=new va(i));const p=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Zh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function $h(i,e,t,n){const r={},s=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const M in p.attributes)e.remove(p.attributes[M]);for(const M in p.morphAttributes){const g=p.morphAttributes[M];for(let d=0,u=g.length;d<u;d++)e.remove(g[d])}p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function c(f){const p=f.attributes;for(const M in p)e.update(p[M],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const M in m){const g=m[M];for(let d=0,u=g.length;d<u;d++)e.update(g[d],i.ARRAY_BUFFER)}}function l(f){const p=[],m=f.index,M=f.attributes.position;let g=0;if(m!==null){const A=m.array;g=m.version;for(let v=0,T=A.length;v<T;v+=3){const C=A[v+0],w=A[v+1],b=A[v+2];p.push(C,w,w,b,b,C)}}else if(M!==void 0){const A=M.array;g=M.version;for(let v=0,T=A.length/3-1;v<T;v+=3){const C=v+0,w=v+1,b=v+2;p.push(C,w,w,b,b,C)}}else return;const d=new(no(p)?uo:lo)(p,1);d.version=g;const u=s.get(f);u&&e.remove(u),s.set(f,d)}function h(f){const p=s.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function Jh(i,e,t,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,M){i.drawElements(s,M,a,m*c),t.update(M,s,1)}function f(m,M,g){if(g===0)return;let d,u;if(r)d=i,u="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[u](s,M,a,m*c,g),t.update(M,s,g)}function p(m,M,g){if(g===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<g;u++)this.render(m[u]/c,M[u]);else{d.multiDrawElementsWEBGL(s,M,0,a,m,0,g);let u=0;for(let A=0;A<g;A++)u+=M[A];t.update(u,s,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function Qh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ef(i,e){return i[0]-e[0]}function tf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function nf(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new ot,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,f){const p=l.morphTargetInfluences;if(e.isWebGL2===!0){const M=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=M!==void 0?M.length:0;let d=s.get(h);if(d===void 0||d.count!==g){let O=function(){Q.dispose(),s.delete(h),h.removeEventListener("dispose",O)};var m=O;d!==void 0&&d.texture.dispose();const v=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let x=0;v===!0&&(x=1),T===!0&&(x=2),C===!0&&(x=3);let E=h.attributes.position.count*x,G=1;E>e.maxTextureSize&&(G=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const H=new Float32Array(E*G*4*g),Q=new so(H,E,G,g);Q.type=an,Q.needsUpdate=!0;const L=x*4;for(let k=0;k<g;k++){const q=w[k],W=b[k],X=B[k],Y=E*G*4*k;for(let ee=0;ee<q.count;ee++){const te=ee*L;v===!0&&(o.fromBufferAttribute(q,ee),H[Y+te+0]=o.x,H[Y+te+1]=o.y,H[Y+te+2]=o.z,H[Y+te+3]=0),T===!0&&(o.fromBufferAttribute(W,ee),H[Y+te+4]=o.x,H[Y+te+5]=o.y,H[Y+te+6]=o.z,H[Y+te+7]=0),C===!0&&(o.fromBufferAttribute(X,ee),H[Y+te+8]=o.x,H[Y+te+9]=o.y,H[Y+te+10]=o.z,H[Y+te+11]=X.itemSize===4?o.w:1)}}d={count:g,texture:Q,size:new Ge(E,G)},s.set(h,d),h.addEventListener("dispose",O)}let u=0;for(let v=0;v<p.length;v++)u+=p[v];const A=h.morphTargetsRelative?1:1-u;f.getUniforms().setValue(i,"morphTargetBaseInfluence",A),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}else{const M=p===void 0?0:p.length;let g=n[h.id];if(g===void 0||g.length!==M){g=[];for(let T=0;T<M;T++)g[T]=[T,0];n[h.id]=g}for(let T=0;T<M;T++){const C=g[T];C[0]=T,C[1]=p[T]}g.sort(tf);for(let T=0;T<8;T++)T<M&&g[T][1]?(a[T][0]=g[T][0],a[T][1]=g[T][1]):(a[T][0]=Number.MAX_SAFE_INTEGER,a[T][1]=0);a.sort(ef);const d=h.morphAttributes.position,u=h.morphAttributes.normal;let A=0;for(let T=0;T<8;T++){const C=a[T],w=C[0],b=C[1];w!==Number.MAX_SAFE_INTEGER&&b?(d&&h.getAttribute("morphTarget"+T)!==d[w]&&h.setAttribute("morphTarget"+T,d[w]),u&&h.getAttribute("morphNormal"+T)!==u[w]&&h.setAttribute("morphNormal"+T,u[w]),r[T]=b,A+=b):(d&&h.hasAttribute("morphTarget"+T)===!0&&h.deleteAttribute("morphTarget"+T),u&&h.hasAttribute("morphNormal"+T)===!0&&h.deleteAttribute("morphNormal"+T),r[T]=0)}const v=h.morphTargetsRelative?1:1-A;f.getUniforms().setValue(i,"morphTargetBaseInfluence",v),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function rf(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class _o extends bt{constructor(e,t,n,r,s,o,a,c,l,h){if(h=h!==void 0?h:Tn,h!==Tn&&h!==Jn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Tn&&(n=sn),n===void 0&&h===Jn&&(n=yn),super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:vt,this.minFilter=c!==void 0?c:vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const go=new bt,vo=new _o(1,1);vo.compareFunction=to;const xo=new so,Mo=new zc,So=new po,Ea=[],ya=[],Ta=new Float32Array(16),Aa=new Float32Array(9),ba=new Float32Array(4);function ii(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ea[r];if(s===void 0&&(s=new Float32Array(r),Ea[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function it(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nr(i,e){let t=ya[e];t===void 0&&(t=new Int32Array(e),ya[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function sf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;i.uniform2fv(this.addr,e),it(t,e)}}function of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nt(t,e))return;i.uniform3fv(this.addr,e),it(t,e)}}function cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;i.uniform4fv(this.addr,e),it(t,e)}}function lf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;ba.set(n),i.uniformMatrix2fv(this.addr,!1,ba),it(t,n)}}function uf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;Aa.set(n),i.uniformMatrix3fv(this.addr,!1,Aa),it(t,n)}}function hf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;Ta.set(n),i.uniformMatrix4fv(this.addr,!1,Ta),it(t,n)}}function ff(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;i.uniform2iv(this.addr,e),it(t,e)}}function pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;i.uniform3iv(this.addr,e),it(t,e)}}function mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;i.uniform4iv(this.addr,e),it(t,e)}}function _f(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;i.uniform2uiv(this.addr,e),it(t,e)}}function vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;i.uniform3uiv(this.addr,e),it(t,e)}}function xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;i.uniform4uiv(this.addr,e),it(t,e)}}function Mf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?vo:go;t.setTexture2D(e||s,r)}function Sf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Mo,r)}function Ef(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||So,r)}function yf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||xo,r)}function Tf(i){switch(i){case 5126:return sf;case 35664:return af;case 35665:return of;case 35666:return cf;case 35674:return lf;case 35675:return uf;case 35676:return hf;case 5124:case 35670:return ff;case 35667:case 35671:return df;case 35668:case 35672:return pf;case 35669:case 35673:return mf;case 5125:return _f;case 36294:return gf;case 36295:return vf;case 36296:return xf;case 35678:case 36198:case 36298:case 36306:case 35682:return Mf;case 35679:case 36299:case 36307:return Sf;case 35680:case 36300:case 36308:case 36293:return Ef;case 36289:case 36303:case 36311:case 36292:return yf}}function Af(i,e){i.uniform1fv(this.addr,e)}function bf(i,e){const t=ii(e,this.size,2);i.uniform2fv(this.addr,t)}function wf(i,e){const t=ii(e,this.size,3);i.uniform3fv(this.addr,t)}function Rf(i,e){const t=ii(e,this.size,4);i.uniform4fv(this.addr,t)}function Cf(i,e){const t=ii(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Lf(i,e){const t=ii(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Pf(i,e){const t=ii(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Uf(i,e){i.uniform1iv(this.addr,e)}function Df(i,e){i.uniform2iv(this.addr,e)}function If(i,e){i.uniform3iv(this.addr,e)}function Nf(i,e){i.uniform4iv(this.addr,e)}function Ff(i,e){i.uniform1uiv(this.addr,e)}function Of(i,e){i.uniform2uiv(this.addr,e)}function Bf(i,e){i.uniform3uiv(this.addr,e)}function zf(i,e){i.uniform4uiv(this.addr,e)}function Gf(i,e,t){const n=this.cache,r=e.length,s=nr(t,r);nt(n,s)||(i.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||go,s[o])}function Hf(i,e,t){const n=this.cache,r=e.length,s=nr(t,r);nt(n,s)||(i.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Mo,s[o])}function Vf(i,e,t){const n=this.cache,r=e.length,s=nr(t,r);nt(n,s)||(i.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||So,s[o])}function kf(i,e,t){const n=this.cache,r=e.length,s=nr(t,r);nt(n,s)||(i.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||xo,s[o])}function Wf(i){switch(i){case 5126:return Af;case 35664:return bf;case 35665:return wf;case 35666:return Rf;case 35674:return Cf;case 35675:return Lf;case 35676:return Pf;case 5124:case 35670:return Uf;case 35667:case 35671:return Df;case 35668:case 35672:return If;case 35669:case 35673:return Nf;case 5125:return Ff;case 36294:return Of;case 36295:return Bf;case 36296:return zf;case 35678:case 36198:case 36298:case 36306:case 35682:return Gf;case 35679:case 36299:case 36307:return Hf;case 35680:case 36300:case 36308:case 36293:return Vf;case 36289:case 36303:case 36311:case 36292:return kf}}class Xf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Tf(t.type)}}class qf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wf(t.type)}}class Yf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const zr=/(\w+)(\])?(\[|\.)?/g;function wa(i,e){i.seq.push(e),i.map[e.id]=e}function Kf(i,e,t){const n=i.name,r=n.length;for(zr.lastIndex=0;;){const s=zr.exec(n),o=zr.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){wa(t,l===void 0?new Xf(a,i,e):new qf(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Yf(a),wa(t,f)),t=f}}}class Xi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Kf(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ra(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const jf=37297;let Zf=0;function $f(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Jf(i){const e=We.getPrimaries(We.workingColorSpace),t=We.getPrimaries(i);let n;switch(e===t?n="":e===ji&&t===Ki?n="LinearDisplayP3ToLinearSRGB":e===Ki&&t===ji&&(n="LinearSRGBToLinearDisplayP3"),i){case Jt:case er:return[n,"LinearTransferOETF"];case ct:case ts:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ca(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+$f(i.getShaderSource(e),o)}else return r}function Qf(i,e){const t=Jf(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ed(i,e){let t;switch(e){case cc:t="Linear";break;case lc:t="Reinhard";break;case uc:t="OptimizedCineon";break;case hc:t="ACESFilmic";break;case dc:t="AgX";break;case fc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function td(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yn).join(`
`)}function nd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Yn).join(`
`)}function id(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rd(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Yn(i){return i!==""}function La(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sd=/^[ \t]*#include +<([\w\d./]+)>/gm;function $r(i){return i.replace(sd,od)}const ad=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function od(i,e){let t=Pe[e];if(t===void 0){const n=ad.get(e);if(n!==void 0)t=Pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $r(t)}const cd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ua(i){return i.replace(cd,ld)}function ld(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Da(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ud(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ka?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kt&&(e="SHADOWMAP_TYPE_VSM"),e}function hd(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zn:case $n:e="ENVMAP_TYPE_CUBE";break;case Qi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fd(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $n:e="ENVMAP_MODE_REFRACTION";break}return e}function dd(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wa:e="ENVMAP_BLENDING_MULTIPLY";break;case ac:e="ENVMAP_BLENDING_MIX";break;case oc:e="ENVMAP_BLENDING_ADD";break}return e}function pd(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function md(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ud(t),l=hd(t),h=fd(t),f=dd(t),p=pd(t),m=t.isWebGL2?"":td(t),M=nd(t),g=id(s),d=r.createProgram();let u,A,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yn).join(`
`),u.length>0&&(u+=`
`),A=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yn).join(`
`),A.length>0&&(A+=`
`)):(u=[Da(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yn).join(`
`),A=[m,Da(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cn?"#define TONE_MAPPING":"",t.toneMapping!==cn?Pe.tonemapping_pars_fragment:"",t.toneMapping!==cn?ed("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,Qf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yn).join(`
`)),o=$r(o),o=La(o,t),o=Pa(o,t),a=$r(a),a=La(a,t),a=Pa(a,t),o=Ua(o),a=Ua(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[M,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,A=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===$s?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$s?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const T=v+u+o,C=v+A+a,w=Ra(r,r.VERTEX_SHADER,T),b=Ra(r,r.FRAGMENT_SHADER,C);r.attachShader(d,w),r.attachShader(d,b),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d);function B(H){if(i.debug.checkShaderErrors){const Q=r.getProgramInfoLog(d).trim(),L=r.getShaderInfoLog(w).trim(),O=r.getShaderInfoLog(b).trim();let k=!0,q=!0;if(r.getProgramParameter(d,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,d,w,b);else{const W=Ca(r,w,"vertex"),X=Ca(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,r.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+W+`
`+X)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(L===""||O==="")&&(q=!1);q&&(H.diagnostics={runnable:k,programLog:Q,vertexShader:{log:L,prefix:u},fragmentShader:{log:O,prefix:A}})}r.deleteShader(w),r.deleteShader(b),x=new Xi(r,d),E=rd(r,d)}let x;this.getUniforms=function(){return x===void 0&&B(this),x};let E;this.getAttributes=function(){return E===void 0&&B(this),E};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(d,jf)),G},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zf++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=w,this.fragmentShader=b,this}let _d=0;class gd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vd(e),t.set(e,n)),n}}class vd{constructor(e){this.id=_d++,this.code=e,this.usedTimes=0}}function xd(i,e,t,n,r,s,o){const a=new ao,c=new gd,l=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===0?"uv":`uv${x}`}function d(x,E,G,H,Q){const L=H.fog,O=Q.geometry,k=x.isMeshStandardMaterial?H.environment:null,q=(x.isMeshStandardMaterial?t:e).get(x.envMap||k),W=q&&q.mapping===Qi?q.image.height:null,X=M[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const Y=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=Y!==void 0?Y.length:0;let te=0;O.morphAttributes.position!==void 0&&(te=1),O.morphAttributes.normal!==void 0&&(te=2),O.morphAttributes.color!==void 0&&(te=3);let V,K,oe,me;if(X){const mt=Bt[X];V=mt.vertexShader,K=mt.fragmentShader}else V=x.vertexShader,K=x.fragmentShader,c.update(x),oe=c.getVertexShaderID(x),me=c.getFragmentShaderID(x);const pe=i.getRenderTarget(),we=Q.isInstancedMesh===!0,Ce=Q.isBatchedMesh===!0,Se=!!x.map,He=!!x.matcap,D=!!q,pt=!!x.aoMap,ge=!!x.lightMap,Ae=!!x.bumpMap,he=!!x.normalMap,je=!!x.displacementMap,Ue=!!x.emissiveMap,y=!!x.metalnessMap,_=!!x.roughnessMap,N=x.anisotropy>0,$=x.clearcoat>0,Z=x.iridescence>0,J=x.sheen>0,fe=x.transmission>0,ae=N&&!!x.anisotropyMap,le=$&&!!x.clearcoatMap,Me=$&&!!x.clearcoatNormalMap,De=$&&!!x.clearcoatRoughnessMap,j=Z&&!!x.iridescenceMap,ke=Z&&!!x.iridescenceThicknessMap,Be=J&&!!x.sheenColorMap,Te=J&&!!x.sheenRoughnessMap,_e=!!x.specularMap,ue=!!x.specularColorMap,Le=!!x.specularIntensityMap,Ve=fe&&!!x.transmissionMap,$e=fe&&!!x.thicknessMap,Ne=!!x.gradientMap,ne=!!x.alphaMap,R=x.alphaTest>0,re=!!x.alphaHash,se=!!x.extensions,Ee=!!O.attributes.uv1,ve=!!O.attributes.uv2,Xe=!!O.attributes.uv3;let qe=cn;return x.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(qe=i.toneMapping),{isWebGL2:h,shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:K,defines:x.defines,customVertexShaderID:oe,customFragmentShaderID:me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Ce,instancing:we,instancingColor:we&&Q.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Jt,map:Se,matcap:He,envMap:D,envMapMode:D&&q.mapping,envMapCubeUVHeight:W,aoMap:pt,lightMap:ge,bumpMap:Ae,normalMap:he,displacementMap:p&&je,emissiveMap:Ue,normalMapObjectSpace:he&&x.normalMapType===Ac,normalMapTangentSpace:he&&x.normalMapType===eo,metalnessMap:y,roughnessMap:_,anisotropy:N,anisotropyMap:ae,clearcoat:$,clearcoatMap:le,clearcoatNormalMap:Me,clearcoatRoughnessMap:De,iridescence:Z,iridescenceMap:j,iridescenceThicknessMap:ke,sheen:J,sheenColorMap:Be,sheenRoughnessMap:Te,specularMap:_e,specularColorMap:ue,specularIntensityMap:Le,transmission:fe,transmissionMap:Ve,thicknessMap:$e,gradientMap:Ne,opaque:x.transparent===!1&&x.blending===Kn,alphaMap:ne,alphaTest:R,alphaHash:re,combine:x.combine,mapUv:Se&&g(x.map.channel),aoMapUv:pt&&g(x.aoMap.channel),lightMapUv:ge&&g(x.lightMap.channel),bumpMapUv:Ae&&g(x.bumpMap.channel),normalMapUv:he&&g(x.normalMap.channel),displacementMapUv:je&&g(x.displacementMap.channel),emissiveMapUv:Ue&&g(x.emissiveMap.channel),metalnessMapUv:y&&g(x.metalnessMap.channel),roughnessMapUv:_&&g(x.roughnessMap.channel),anisotropyMapUv:ae&&g(x.anisotropyMap.channel),clearcoatMapUv:le&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Me&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(x.sheenRoughnessMap.channel),specularMapUv:_e&&g(x.specularMap.channel),specularColorMapUv:ue&&g(x.specularColorMap.channel),specularIntensityMapUv:Le&&g(x.specularIntensityMap.channel),transmissionMapUv:Ve&&g(x.transmissionMap.channel),thicknessMapUv:$e&&g(x.thicknessMap.channel),alphaMapUv:ne&&g(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(he||N),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ee,vertexUv2s:ve,vertexUv3s:Xe,pointsUvs:Q.isPoints===!0&&!!O.attributes.uv&&(Se||ne),fog:!!L,useFog:x.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:te,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Se&&x.map.isVideoTexture===!0&&We.getTransfer(x.map.colorSpace)===Ke,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===jt,flipSided:x.side===St,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:se&&x.extensions.derivatives===!0,extensionFragDepth:se&&x.extensions.fragDepth===!0,extensionDrawBuffers:se&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function u(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const G in x.defines)E.push(G),E.push(x.defines[G]);return x.isRawShaderMaterial===!1&&(A(E,x),v(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function A(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function v(x,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function T(x){const E=M[x.type];let G;if(E){const H=Bt[E];G=Qc.clone(H.uniforms)}else G=x.uniforms;return G}function C(x,E){let G;for(let H=0,Q=l.length;H<Q;H++){const L=l[H];if(L.cacheKey===E){G=L,++G.usedTimes;break}}return G===void 0&&(G=new md(i,E,x,s),l.push(G)),G}function w(x){if(--x.usedTimes===0){const E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),x.destroy()}}function b(x){c.remove(x)}function B(){c.dispose()}return{getParameters:d,getProgramCacheKey:u,getUniforms:T,acquireProgram:C,releaseProgram:w,releaseShaderCache:b,programs:l,dispose:B}}function Md(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Sd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ia(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Na(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,p,m,M,g,d){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:m,groupOrder:M,renderOrder:f.renderOrder,z:g,group:d},i[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=m,u.groupOrder=M,u.renderOrder=f.renderOrder,u.z=g,u.group=d),e++,u}function a(f,p,m,M,g,d){const u=o(f,p,m,M,g,d);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function c(f,p,m,M,g,d){const u=o(f,p,m,M,g,d);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function l(f,p){t.length>1&&t.sort(f||Sd),n.length>1&&n.sort(p||Ia),r.length>1&&r.sort(p||Ia)}function h(){for(let f=e,p=i.length;f<p;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function Ed(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Na,i.set(n,[o])):r>=s.length?(o=new Na,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function yd(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ze};break;case"SpotLight":t={position:new U,direction:new U,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Td(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ad=0;function bd(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wd(i,e){const t=new yd,n=Td(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new U);const s=new U,o=new tt,a=new tt;function c(h,f){let p=0,m=0,M=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let g=0,d=0,u=0,A=0,v=0,T=0,C=0,w=0,b=0,B=0,x=0;h.sort(bd);const E=f===!0?Math.PI:1;for(let H=0,Q=h.length;H<Q;H++){const L=h[H],O=L.color,k=L.intensity,q=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=O.r*k*E,m+=O.g*k*E,M+=O.b*k*E;else if(L.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(L.sh.coefficients[X],k);x++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const Y=L.shadow,ee=n.get(L);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,r.directionalShadow[g]=ee,r.directionalShadowMap[g]=W,r.directionalShadowMatrix[g]=L.shadow.matrix,T++}r.directional[g]=X,g++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(O).multiplyScalar(k*E),X.distance=q,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,r.spot[u]=X;const Y=L.shadow;if(L.map&&(r.spotLightMap[b]=L.map,b++,Y.updateMatrices(L),L.castShadow&&B++),r.spotLightMatrix[u]=Y.matrix,L.castShadow){const ee=n.get(L);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,r.spotShadow[u]=ee,r.spotShadowMap[u]=W,w++}u++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(O).multiplyScalar(k),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),r.rectArea[A]=X,A++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*E),X.distance=L.distance,X.decay=L.decay,L.castShadow){const Y=L.shadow,ee=n.get(L);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,ee.shadowCameraNear=Y.camera.near,ee.shadowCameraFar=Y.camera.far,r.pointShadow[d]=ee,r.pointShadowMap[d]=W,r.pointShadowMatrix[d]=L.shadow.matrix,C++}r.point[d]=X,d++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(k*E),X.groundColor.copy(L.groundColor).multiplyScalar(k*E),r.hemi[v]=X,v++}}A>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=M;const G=r.hash;(G.directionalLength!==g||G.pointLength!==d||G.spotLength!==u||G.rectAreaLength!==A||G.hemiLength!==v||G.numDirectionalShadows!==T||G.numPointShadows!==C||G.numSpotShadows!==w||G.numSpotMaps!==b||G.numLightProbes!==x)&&(r.directional.length=g,r.spot.length=u,r.rectArea.length=A,r.point.length=d,r.hemi.length=v,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=w+b-B,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=x,G.directionalLength=g,G.pointLength=d,G.spotLength=u,G.rectAreaLength=A,G.hemiLength=v,G.numDirectionalShadows=T,G.numPointShadows=C,G.numSpotShadows=w,G.numSpotMaps=b,G.numLightProbes=x,r.version=Ad++)}function l(h,f){let p=0,m=0,M=0,g=0,d=0;const u=f.matrixWorldInverse;for(let A=0,v=h.length;A<v;A++){const T=h[A];if(T.isDirectionalLight){const C=r.directional[p];C.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),p++}else if(T.isSpotLight){const C=r.spot[M];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),M++}else if(T.isRectAreaLight){const C=r.rectArea[g];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(u),a.identity(),o.copy(T.matrixWorld),o.premultiply(u),a.extractRotation(o),C.halfWidth.set(T.width*.5,0,0),C.halfHeight.set(0,T.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const C=r.point[m];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(u),m++}else if(T.isHemisphereLight){const C=r.hemi[d];C.direction.setFromMatrixPosition(T.matrixWorld),C.direction.transformDirection(u),d++}}}return{setup:c,setupView:l,state:r}}function Fa(i,e){const t=new wd(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Rd(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new Fa(i,e),t.set(s,[c])):o>=a.length?(c=new Fa(i,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class Cd extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ld extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ud=`uniform sampler2D shadow_pass;
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
}`;function Dd(i,e,t){let n=new is;const r=new Ge,s=new Ge,o=new ot,a=new Cd({depthPacking:Tc}),c=new Ld,l={},h=t.maxTextureSize,f={[un]:St,[St]:un,[jt]:jt},p=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Pd,fragmentShader:Ud}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const M=new Ht;M.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new $t(M,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ka;let u=this.type;this.render=function(w,b,B){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;const x=i.getRenderTarget(),E=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),H=i.state;H.setBlending(on),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Q=u!==Kt&&this.type===Kt,L=u===Kt&&this.type!==Kt;for(let O=0,k=w.length;O<k;O++){const q=w[O],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const X=W.getFrameExtents();if(r.multiply(X),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/X.x),r.x=s.x*X.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/X.y),r.y=s.y*X.y,W.mapSize.y=s.y)),W.map===null||Q===!0||L===!0){const ee=this.type!==Kt?{minFilter:vt,magFilter:vt}:{};W.map!==null&&W.map.dispose(),W.map=new Rn(r.x,r.y,ee),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const Y=W.getViewportCount();for(let ee=0;ee<Y;ee++){const te=W.getViewport(ee);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),H.viewport(o),W.updateMatrices(q,ee),n=W.getFrustum(),T(b,B,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Kt&&A(W,B),W.needsUpdate=!1}u=this.type,d.needsUpdate=!1,i.setRenderTarget(x,E,G)};function A(w,b){const B=e.update(g);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Rn(r.x,r.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,B,p,g,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,B,m,g,null)}function v(w,b,B,x){let E=null;const G=B.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(G!==void 0)E=G;else if(E=B.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const H=E.uuid,Q=b.uuid;let L=l[H];L===void 0&&(L={},l[H]=L);let O=L[Q];O===void 0&&(O=E.clone(),L[Q]=O,b.addEventListener("dispose",C)),E=O}if(E.visible=b.visible,E.wireframe=b.wireframe,x===Kt?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:f[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,B.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const H=i.properties.get(E);H.light=B}return E}function T(w,b,B,x,E){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Kt)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld);const Q=e.update(w),L=w.material;if(Array.isArray(L)){const O=Q.groups;for(let k=0,q=O.length;k<q;k++){const W=O[k],X=L[W.materialIndex];if(X&&X.visible){const Y=v(w,X,x,E);w.onBeforeShadow(i,w,b,B,Q,Y,W),i.renderBufferDirect(B,null,Q,Y,w,W),w.onAfterShadow(i,w,b,B,Q,Y,W)}}}else if(L.visible){const O=v(w,L,x,E);w.onBeforeShadow(i,w,b,B,Q,O,null),i.renderBufferDirect(B,null,Q,O,w,null),w.onAfterShadow(i,w,b,B,Q,O,null)}}const H=w.children;for(let Q=0,L=H.length;Q<L;Q++)T(H[Q],b,B,x,E)}function C(w){w.target.removeEventListener("dispose",C);for(const B in l){const x=l[B],E=w.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}function Id(i,e,t){const n=t.isWebGL2;function r(){let R=!1;const re=new ot;let se=null;const Ee=new ot(0,0,0,0);return{setMask:function(ve){se!==ve&&!R&&(i.colorMask(ve,ve,ve,ve),se=ve)},setLocked:function(ve){R=ve},setClear:function(ve,Xe,qe,rt,mt){mt===!0&&(ve*=rt,Xe*=rt,qe*=rt),re.set(ve,Xe,qe,rt),Ee.equals(re)===!1&&(i.clearColor(ve,Xe,qe,rt),Ee.copy(re))},reset:function(){R=!1,se=null,Ee.set(-1,0,0,0)}}}function s(){let R=!1,re=null,se=null,Ee=null;return{setTest:function(ve){ve?Ce(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(ve){re!==ve&&!R&&(i.depthMask(ve),re=ve)},setFunc:function(ve){if(se!==ve){switch(ve){case Qo:i.depthFunc(i.NEVER);break;case ec:i.depthFunc(i.ALWAYS);break;case tc:i.depthFunc(i.LESS);break;case qi:i.depthFunc(i.LEQUAL);break;case nc:i.depthFunc(i.EQUAL);break;case ic:i.depthFunc(i.GEQUAL);break;case rc:i.depthFunc(i.GREATER);break;case sc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=ve}},setLocked:function(ve){R=ve},setClear:function(ve){Ee!==ve&&(i.clearDepth(ve),Ee=ve)},reset:function(){R=!1,re=null,se=null,Ee=null}}}function o(){let R=!1,re=null,se=null,Ee=null,ve=null,Xe=null,qe=null,rt=null,mt=null;return{setTest:function(Ye){R||(Ye?Ce(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(Ye){re!==Ye&&!R&&(i.stencilMask(Ye),re=Ye)},setFunc:function(Ye,_t,Ot){(se!==Ye||Ee!==_t||ve!==Ot)&&(i.stencilFunc(Ye,_t,Ot),se=Ye,Ee=_t,ve=Ot)},setOp:function(Ye,_t,Ot){(Xe!==Ye||qe!==_t||rt!==Ot)&&(i.stencilOp(Ye,_t,Ot),Xe=Ye,qe=_t,rt=Ot)},setLocked:function(Ye){R=Ye},setClear:function(Ye){mt!==Ye&&(i.clearStencil(Ye),mt=Ye)},reset:function(){R=!1,re=null,se=null,Ee=null,ve=null,Xe=null,qe=null,rt=null,mt=null}}}const a=new r,c=new s,l=new o,h=new WeakMap,f=new WeakMap;let p={},m={},M=new WeakMap,g=[],d=null,u=!1,A=null,v=null,T=null,C=null,w=null,b=null,B=null,x=new ze(0,0,0),E=0,G=!1,H=null,Q=null,L=null,O=null,k=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=X>=2);let ee=null,te={};const V=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),oe=new ot().fromArray(V),me=new ot().fromArray(K);function pe(R,re,se,Ee){const ve=new Uint8Array(4),Xe=i.createTexture();i.bindTexture(R,Xe),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<se;qe++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(re,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(re+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return Xe}const we={};we[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(we[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ce(i.DEPTH_TEST),c.setFunc(qi),Ue(!1),y(gs),Ce(i.CULL_FACE),he(on);function Ce(R){p[R]!==!0&&(i.enable(R),p[R]=!0)}function Se(R){p[R]!==!1&&(i.disable(R),p[R]=!1)}function He(R,re){return m[R]!==re?(i.bindFramebuffer(R,re),m[R]=re,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=re),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=re)),!0):!1}function D(R,re){let se=g,Ee=!1;if(R)if(se=M.get(re),se===void 0&&(se=[],M.set(re,se)),R.isWebGLMultipleRenderTargets){const ve=R.texture;if(se.length!==ve.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Xe=0,qe=ve.length;Xe<qe;Xe++)se[Xe]=i.COLOR_ATTACHMENT0+Xe;se.length=ve.length,Ee=!0}}else se[0]!==i.COLOR_ATTACHMENT0&&(se[0]=i.COLOR_ATTACHMENT0,Ee=!0);else se[0]!==i.BACK&&(se[0]=i.BACK,Ee=!0);Ee&&(t.isWebGL2?i.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function pt(R){return d!==R?(i.useProgram(R),d=R,!0):!1}const ge={[Sn]:i.FUNC_ADD,[Bo]:i.FUNC_SUBTRACT,[zo]:i.FUNC_REVERSE_SUBTRACT};if(n)ge[Ss]=i.MIN,ge[Es]=i.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(ge[Ss]=R.MIN_EXT,ge[Es]=R.MAX_EXT)}const Ae={[Go]:i.ZERO,[Ho]:i.ONE,[Vo]:i.SRC_COLOR,[kr]:i.SRC_ALPHA,[Ko]:i.SRC_ALPHA_SATURATE,[qo]:i.DST_COLOR,[Wo]:i.DST_ALPHA,[ko]:i.ONE_MINUS_SRC_COLOR,[Wr]:i.ONE_MINUS_SRC_ALPHA,[Yo]:i.ONE_MINUS_DST_COLOR,[Xo]:i.ONE_MINUS_DST_ALPHA,[jo]:i.CONSTANT_COLOR,[Zo]:i.ONE_MINUS_CONSTANT_COLOR,[$o]:i.CONSTANT_ALPHA,[Jo]:i.ONE_MINUS_CONSTANT_ALPHA};function he(R,re,se,Ee,ve,Xe,qe,rt,mt,Ye){if(R===on){u===!0&&(Se(i.BLEND),u=!1);return}if(u===!1&&(Ce(i.BLEND),u=!0),R!==Oo){if(R!==A||Ye!==G){if((v!==Sn||w!==Sn)&&(i.blendEquation(i.FUNC_ADD),v=Sn,w=Sn),Ye)switch(R){case Kn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vs:i.blendFunc(i.ONE,i.ONE);break;case xs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ms:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Kn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ms:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}T=null,C=null,b=null,B=null,x.set(0,0,0),E=0,A=R,G=Ye}return}ve=ve||re,Xe=Xe||se,qe=qe||Ee,(re!==v||ve!==w)&&(i.blendEquationSeparate(ge[re],ge[ve]),v=re,w=ve),(se!==T||Ee!==C||Xe!==b||qe!==B)&&(i.blendFuncSeparate(Ae[se],Ae[Ee],Ae[Xe],Ae[qe]),T=se,C=Ee,b=Xe,B=qe),(rt.equals(x)===!1||mt!==E)&&(i.blendColor(rt.r,rt.g,rt.b,mt),x.copy(rt),E=mt),A=R,G=!1}function je(R,re){R.side===jt?Se(i.CULL_FACE):Ce(i.CULL_FACE);let se=R.side===St;re&&(se=!se),Ue(se),R.blending===Kn&&R.transparent===!1?he(on):he(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),a.setMask(R.colorWrite);const Ee=R.stencilWrite;l.setTest(Ee),Ee&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),N(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ce(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(R){H!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),H=R)}function y(R){R!==Io?(Ce(i.CULL_FACE),R!==Q&&(R===gs?i.cullFace(i.BACK):R===No?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),Q=R}function _(R){R!==L&&(W&&i.lineWidth(R),L=R)}function N(R,re,se){R?(Ce(i.POLYGON_OFFSET_FILL),(O!==re||k!==se)&&(i.polygonOffset(re,se),O=re,k=se)):Se(i.POLYGON_OFFSET_FILL)}function $(R){R?Ce(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function Z(R){R===void 0&&(R=i.TEXTURE0+q-1),ee!==R&&(i.activeTexture(R),ee=R)}function J(R,re,se){se===void 0&&(ee===null?se=i.TEXTURE0+q-1:se=ee);let Ee=te[se];Ee===void 0&&(Ee={type:void 0,texture:void 0},te[se]=Ee),(Ee.type!==R||Ee.texture!==re)&&(ee!==se&&(i.activeTexture(se),ee=se),i.bindTexture(R,re||we[R]),Ee.type=R,Ee.texture=re)}function fe(){const R=te[ee];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function De(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ke(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Be(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Le(R){oe.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),oe.copy(R))}function Ve(R){me.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),me.copy(R))}function $e(R,re){let se=f.get(re);se===void 0&&(se=new WeakMap,f.set(re,se));let Ee=se.get(R);Ee===void 0&&(Ee=i.getUniformBlockIndex(re,R.name),se.set(R,Ee))}function Ne(R,re){const Ee=f.get(re).get(R);h.get(re)!==Ee&&(i.uniformBlockBinding(re,Ee,R.__bindingPointIndex),h.set(re,Ee))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ee=null,te={},m={},M=new WeakMap,g=[],d=null,u=!1,A=null,v=null,T=null,C=null,w=null,b=null,B=null,x=new ze(0,0,0),E=0,G=!1,H=null,Q=null,L=null,O=null,k=null,oe.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ce,disable:Se,bindFramebuffer:He,drawBuffers:D,useProgram:pt,setBlending:he,setMaterial:je,setFlipSided:Ue,setCullFace:y,setLineWidth:_,setPolygonOffset:N,setScissorTest:$,activeTexture:Z,bindTexture:J,unbindTexture:fe,compressedTexImage2D:ae,compressedTexImage3D:le,texImage2D:_e,texImage3D:ue,updateUBOMapping:$e,uniformBlockBinding:Ne,texStorage2D:Be,texStorage3D:Te,texSubImage2D:Me,texSubImage3D:De,compressedTexSubImage2D:j,compressedTexSubImage3D:ke,scissor:Le,viewport:Ve,reset:ne}}function Nd(i,e,t,n,r,s,o){const a=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(y,_){return m?new OffscreenCanvas(y,_):Ji("canvas")}function g(y,_,N,$){let Z=1;if((y.width>$||y.height>$)&&(Z=$/Math.max(y.width,y.height)),Z<1||_===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const J=_?Zr:Math.floor,fe=J(Z*y.width),ae=J(Z*y.height);f===void 0&&(f=M(fe,ae));const le=N?M(fe,ae):f;return le.width=fe,le.height=ae,le.getContext("2d").drawImage(y,0,0,fe,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+fe+"x"+ae+")."),le}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function d(y){return Js(y.width)&&Js(y.height)}function u(y){return a?!1:y.wrapS!==Nt||y.wrapT!==Nt||y.minFilter!==vt&&y.minFilter!==Ct}function A(y,_){return y.generateMipmaps&&_&&y.minFilter!==vt&&y.minFilter!==Ct}function v(y){i.generateMipmap(y)}function T(y,_,N,$,Z=!1){if(a===!1)return _;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let J=_;if(_===i.RED&&(N===i.FLOAT&&(J=i.R32F),N===i.HALF_FLOAT&&(J=i.R16F),N===i.UNSIGNED_BYTE&&(J=i.R8)),_===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(J=i.R8UI),N===i.UNSIGNED_SHORT&&(J=i.R16UI),N===i.UNSIGNED_INT&&(J=i.R32UI),N===i.BYTE&&(J=i.R8I),N===i.SHORT&&(J=i.R16I),N===i.INT&&(J=i.R32I)),_===i.RG&&(N===i.FLOAT&&(J=i.RG32F),N===i.HALF_FLOAT&&(J=i.RG16F),N===i.UNSIGNED_BYTE&&(J=i.RG8)),_===i.RGBA){const fe=Z?Yi:We.getTransfer($);N===i.FLOAT&&(J=i.RGBA32F),N===i.HALF_FLOAT&&(J=i.RGBA16F),N===i.UNSIGNED_BYTE&&(J=fe===Ke?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function C(y,_,N){return A(y,N)===!0||y.isFramebufferTexture&&y.minFilter!==vt&&y.minFilter!==Ct?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function w(y){return y===vt||y===ys||y===ur?i.NEAREST:i.LINEAR}function b(y){const _=y.target;_.removeEventListener("dispose",b),x(_),_.isVideoTexture&&h.delete(_)}function B(y){const _=y.target;_.removeEventListener("dispose",B),G(_)}function x(y){const _=n.get(y);if(_.__webglInit===void 0)return;const N=y.source,$=p.get(N);if($){const Z=$[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(y),Object.keys($).length===0&&p.delete(N)}n.remove(y)}function E(y){const _=n.get(y);i.deleteTexture(_.__webglTexture);const N=y.source,$=p.get(N);delete $[_.__cacheKey],o.memory.textures--}function G(y){const _=y.texture,N=n.get(y),$=n.get(_);if($.__webglTexture!==void 0&&(i.deleteTexture($.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(N.__webglFramebuffer[Z]))for(let J=0;J<N.__webglFramebuffer[Z].length;J++)i.deleteFramebuffer(N.__webglFramebuffer[Z][J]);else i.deleteFramebuffer(N.__webglFramebuffer[Z]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[Z])}else{if(Array.isArray(N.__webglFramebuffer))for(let Z=0;Z<N.__webglFramebuffer.length;Z++)i.deleteFramebuffer(N.__webglFramebuffer[Z]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Z=0;Z<N.__webglColorRenderbuffer.length;Z++)N.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[Z]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let Z=0,J=_.length;Z<J;Z++){const fe=n.get(_[Z]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(_[Z])}n.remove(_),n.remove(y)}let H=0;function Q(){H=0}function L(){const y=H;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),H+=1,y}function O(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function k(y,_){const N=n.get(y);if(y.isVideoTexture&&je(y),y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){const $=y.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(N,y,_);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+_)}function q(y,_){const N=n.get(y);if(y.version>0&&N.__version!==y.version){oe(N,y,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+_)}function W(y,_){const N=n.get(y);if(y.version>0&&N.__version!==y.version){oe(N,y,_);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+_)}function X(y,_){const N=n.get(y);if(y.version>0&&N.__version!==y.version){me(N,y,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+_)}const Y={[Yr]:i.REPEAT,[Nt]:i.CLAMP_TO_EDGE,[Kr]:i.MIRRORED_REPEAT},ee={[vt]:i.NEAREST,[ys]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[Ct]:i.LINEAR,[pc]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},te={[bc]:i.NEVER,[Uc]:i.ALWAYS,[wc]:i.LESS,[to]:i.LEQUAL,[Rc]:i.EQUAL,[Pc]:i.GEQUAL,[Cc]:i.GREATER,[Lc]:i.NOTEQUAL};function V(y,_,N){if(N?(i.texParameteri(y,i.TEXTURE_WRAP_S,Y[_.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,Y[_.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,Y[_.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,ee[_.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,ee[_.minFilter])):(i.texParameteri(y,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(y,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==Nt||_.wrapT!==Nt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,i.TEXTURE_MAG_FILTER,w(_.magFilter)),i.texParameteri(y,i.TEXTURE_MIN_FILTER,w(_.minFilter)),_.minFilter!==vt&&_.minFilter!==Ct&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,te[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===vt||_.minFilter!==ur&&_.minFilter!==di||_.type===an&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===pi&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(y,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function K(y,_){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",b));const $=_.source;let Z=p.get($);Z===void 0&&(Z={},p.set($,Z));const J=O(_);if(J!==y.__cacheKey){Z[J]===void 0&&(Z[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),Z[J].usedTimes++;const fe=Z[y.__cacheKey];fe!==void 0&&(Z[y.__cacheKey].usedTimes--,fe.usedTimes===0&&E(_)),y.__cacheKey=J,y.__webglTexture=Z[J].texture}return N}function oe(y,_,N){let $=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=i.TEXTURE_3D);const Z=K(y,_),J=_.source;t.bindTexture($,y.__webglTexture,i.TEXTURE0+N);const fe=n.get(J);if(J.version!==fe.__version||Z===!0){t.activeTexture(i.TEXTURE0+N);const ae=We.getPrimaries(We.workingColorSpace),le=_.colorSpace===Lt?null:We.getPrimaries(_.colorSpace),Me=_.colorSpace===Lt||ae===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const De=u(_)&&d(_.image)===!1;let j=g(_.image,De,!1,r.maxTextureSize);j=Ue(_,j);const ke=d(j)||a,Be=s.convert(_.format,_.colorSpace);let Te=s.convert(_.type),_e=T(_.internalFormat,Be,Te,_.colorSpace,_.isVideoTexture);V($,_,ke);let ue;const Le=_.mipmaps,Ve=a&&_.isVideoTexture!==!0&&_e!==Ja,$e=fe.__version===void 0||Z===!0,Ne=C(_,j,ke);if(_.isDepthTexture)_e=i.DEPTH_COMPONENT,a?_.type===an?_e=i.DEPTH_COMPONENT32F:_.type===sn?_e=i.DEPTH_COMPONENT24:_.type===yn?_e=i.DEPTH24_STENCIL8:_e=i.DEPTH_COMPONENT16:_.type===an&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Tn&&_e===i.DEPTH_COMPONENT&&_.type!==es&&_.type!==sn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=sn,Te=s.convert(_.type)),_.format===Jn&&_e===i.DEPTH_COMPONENT&&(_e=i.DEPTH_STENCIL,_.type!==yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=yn,Te=s.convert(_.type))),$e&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,_e,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,_e,j.width,j.height,0,Be,Te,null));else if(_.isDataTexture)if(Le.length>0&&ke){Ve&&$e&&t.texStorage2D(i.TEXTURE_2D,Ne,_e,Le[0].width,Le[0].height);for(let ne=0,R=Le.length;ne<R;ne++)ue=Le[ne],Ve?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ue.width,ue.height,Be,Te,ue.data):t.texImage2D(i.TEXTURE_2D,ne,_e,ue.width,ue.height,0,Be,Te,ue.data);_.generateMipmaps=!1}else Ve?($e&&t.texStorage2D(i.TEXTURE_2D,Ne,_e,j.width,j.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,Be,Te,j.data)):t.texImage2D(i.TEXTURE_2D,0,_e,j.width,j.height,0,Be,Te,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ve&&$e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,_e,Le[0].width,Le[0].height,j.depth);for(let ne=0,R=Le.length;ne<R;ne++)ue=Le[ne],_.format!==Ft?Be!==null?Ve?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,j.depth,Be,ue.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,_e,ue.width,ue.height,j.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,j.depth,Be,Te,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,_e,ue.width,ue.height,j.depth,0,Be,Te,ue.data)}else{Ve&&$e&&t.texStorage2D(i.TEXTURE_2D,Ne,_e,Le[0].width,Le[0].height);for(let ne=0,R=Le.length;ne<R;ne++)ue=Le[ne],_.format!==Ft?Be!==null?Ve?t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,ue.width,ue.height,Be,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,_e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ue.width,ue.height,Be,Te,ue.data):t.texImage2D(i.TEXTURE_2D,ne,_e,ue.width,ue.height,0,Be,Te,ue.data)}else if(_.isDataArrayTexture)Ve?($e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,_e,j.width,j.height,j.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Be,Te,j.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,j.width,j.height,j.depth,0,Be,Te,j.data);else if(_.isData3DTexture)Ve?($e&&t.texStorage3D(i.TEXTURE_3D,Ne,_e,j.width,j.height,j.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Be,Te,j.data)):t.texImage3D(i.TEXTURE_3D,0,_e,j.width,j.height,j.depth,0,Be,Te,j.data);else if(_.isFramebufferTexture){if($e)if(Ve)t.texStorage2D(i.TEXTURE_2D,Ne,_e,j.width,j.height);else{let ne=j.width,R=j.height;for(let re=0;re<Ne;re++)t.texImage2D(i.TEXTURE_2D,re,_e,ne,R,0,Be,Te,null),ne>>=1,R>>=1}}else if(Le.length>0&&ke){Ve&&$e&&t.texStorage2D(i.TEXTURE_2D,Ne,_e,Le[0].width,Le[0].height);for(let ne=0,R=Le.length;ne<R;ne++)ue=Le[ne],Ve?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Be,Te,ue):t.texImage2D(i.TEXTURE_2D,ne,_e,Be,Te,ue);_.generateMipmaps=!1}else Ve?($e&&t.texStorage2D(i.TEXTURE_2D,Ne,_e,j.width,j.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Be,Te,j)):t.texImage2D(i.TEXTURE_2D,0,_e,Be,Te,j);A(_,ke)&&v($),fe.__version=J.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function me(y,_,N){if(_.image.length!==6)return;const $=K(y,_),Z=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+N);const J=n.get(Z);if(Z.version!==J.__version||$===!0){t.activeTexture(i.TEXTURE0+N);const fe=We.getPrimaries(We.workingColorSpace),ae=_.colorSpace===Lt?null:We.getPrimaries(_.colorSpace),le=_.colorSpace===Lt||fe===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Me=_.isCompressedTexture||_.image[0].isCompressedTexture,De=_.image[0]&&_.image[0].isDataTexture,j=[];for(let ne=0;ne<6;ne++)!Me&&!De?j[ne]=g(_.image[ne],!1,!0,r.maxCubemapSize):j[ne]=De?_.image[ne].image:_.image[ne],j[ne]=Ue(_,j[ne]);const ke=j[0],Be=d(ke)||a,Te=s.convert(_.format,_.colorSpace),_e=s.convert(_.type),ue=T(_.internalFormat,Te,_e,_.colorSpace),Le=a&&_.isVideoTexture!==!0,Ve=J.__version===void 0||$===!0;let $e=C(_,ke,Be);V(i.TEXTURE_CUBE_MAP,_,Be);let Ne;if(Me){Le&&Ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,$e,ue,ke.width,ke.height);for(let ne=0;ne<6;ne++){Ne=j[ne].mipmaps;for(let R=0;R<Ne.length;R++){const re=Ne[R];_.format!==Ft?Te!==null?Le?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,0,0,re.width,re.height,Te,re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,ue,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,0,0,re.width,re.height,Te,_e,re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,ue,re.width,re.height,0,Te,_e,re.data)}}}else{Ne=_.mipmaps,Le&&Ve&&(Ne.length>0&&$e++,t.texStorage2D(i.TEXTURE_CUBE_MAP,$e,ue,j[0].width,j[0].height));for(let ne=0;ne<6;ne++)if(De){Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,j[ne].width,j[ne].height,Te,_e,j[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,j[ne].width,j[ne].height,0,Te,_e,j[ne].data);for(let R=0;R<Ne.length;R++){const se=Ne[R].image[ne].image;Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,0,0,se.width,se.height,Te,_e,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,ue,se.width,se.height,0,Te,_e,se.data)}}else{Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Te,_e,j[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,Te,_e,j[ne]);for(let R=0;R<Ne.length;R++){const re=Ne[R];Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,0,0,Te,_e,re.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,ue,Te,_e,re.image[ne])}}}A(_,Be)&&v(i.TEXTURE_CUBE_MAP),J.__version=Z.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function pe(y,_,N,$,Z,J){const fe=s.convert(N.format,N.colorSpace),ae=s.convert(N.type),le=T(N.internalFormat,fe,ae,N.colorSpace);if(!n.get(_).__hasExternalTextures){const De=Math.max(1,_.width>>J),j=Math.max(1,_.height>>J);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,J,le,De,j,_.depth,0,fe,ae,null):t.texImage2D(Z,J,le,De,j,0,fe,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),he(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Z,n.get(N).__webglTexture,0,Ae(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Z,n.get(N).__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(y,_,N){if(i.bindRenderbuffer(i.RENDERBUFFER,y),_.depthBuffer&&!_.stencilBuffer){let $=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||he(_)){const Z=_.depthTexture;Z&&Z.isDepthTexture&&(Z.type===an?$=i.DEPTH_COMPONENT32F:Z.type===sn&&($=i.DEPTH_COMPONENT24));const J=Ae(_);he(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,$,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,$,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,$,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,y)}else if(_.depthBuffer&&_.stencilBuffer){const $=Ae(_);N&&he(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,_.width,_.height):he(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,y)}else{const $=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let Z=0;Z<$.length;Z++){const J=$[Z],fe=s.convert(J.format,J.colorSpace),ae=s.convert(J.type),le=T(J.internalFormat,fe,ae,J.colorSpace),Me=Ae(_);N&&he(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,le,_.width,_.height):he(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,le,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,le,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k(_.depthTexture,0);const $=n.get(_.depthTexture).__webglTexture,Z=Ae(_);if(_.depthTexture.format===Tn)he(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(_.depthTexture.format===Jn)he(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Se(y){const _=n.get(y),N=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ce(_.__webglFramebuffer,y)}else if(N){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]=i.createRenderbuffer(),we(_.__webglDepthbuffer[$],y,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),we(_.__webglDepthbuffer,y,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(y,_,N){const $=n.get(y);_!==void 0&&pe($.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Se(y)}function D(y){const _=y.texture,N=n.get(y),$=n.get(_);y.addEventListener("dispose",B),y.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=_.version,o.memory.textures++);const Z=y.isWebGLCubeRenderTarget===!0,J=y.isWebGLMultipleRenderTargets===!0,fe=d(y)||a;if(Z){N.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[ae]=[];for(let le=0;le<_.mipmaps.length;le++)N.__webglFramebuffer[ae][le]=i.createFramebuffer()}else N.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)N.__webglFramebuffer[ae]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(J)if(r.drawBuffers){const ae=y.texture;for(let le=0,Me=ae.length;le<Me;le++){const De=n.get(ae[le]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&he(y)===!1){const ae=J?_:[_];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let le=0;le<ae.length;le++){const Me=ae[le];N.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[le]);const De=s.convert(Me.format,Me.colorSpace),j=s.convert(Me.type),ke=T(Me.internalFormat,De,j,Me.colorSpace,y.isXRRenderTarget===!0),Be=Ae(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,ke,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,N.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),we(N.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),V(i.TEXTURE_CUBE_MAP,_,fe);for(let ae=0;ae<6;ae++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)pe(N.__webglFramebuffer[ae][le],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,le);else pe(N.__webglFramebuffer[ae],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);A(_,fe)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){const ae=y.texture;for(let le=0,Me=ae.length;le<Me;le++){const De=ae[le],j=n.get(De);t.bindTexture(i.TEXTURE_2D,j.__webglTexture),V(i.TEXTURE_2D,De,fe),pe(N.__webglFramebuffer,y,De,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),A(De,fe)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?ae=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,$.__webglTexture),V(ae,_,fe),a&&_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)pe(N.__webglFramebuffer[le],y,_,i.COLOR_ATTACHMENT0,ae,le);else pe(N.__webglFramebuffer,y,_,i.COLOR_ATTACHMENT0,ae,0);A(_,fe)&&v(ae),t.unbindTexture()}y.depthBuffer&&Se(y)}function pt(y){const _=d(y)||a,N=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let $=0,Z=N.length;$<Z;$++){const J=N[$];if(A(J,_)){const fe=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ae=n.get(J).__webglTexture;t.bindTexture(fe,ae),v(fe),t.unbindTexture()}}}function ge(y){if(a&&y.samples>0&&he(y)===!1){const _=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],N=y.width,$=y.height;let Z=i.COLOR_BUFFER_BIT;const J=[],fe=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(y),le=y.isWebGLMultipleRenderTargets===!0;if(le)for(let Me=0;Me<_.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Me=0;Me<_.length;Me++){J.push(i.COLOR_ATTACHMENT0+Me),y.depthBuffer&&J.push(fe);const De=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(De===!1&&(y.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),le&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Me]),De===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[fe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[fe])),le){const j=n.get(_[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,N,$,0,0,N,$,Z,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Me=0;Me<_.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Me]);const De=n.get(_[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Ae(y){return Math.min(r.maxSamples,y.samples)}function he(y){const _=n.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function je(y){const _=o.render.frame;h.get(y)!==_&&(h.set(y,_),y.update())}function Ue(y,_){const N=y.colorSpace,$=y.format,Z=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===jr||N!==Jt&&N!==Lt&&(We.getTransfer(N)===Ke?a===!1?e.has("EXT_sRGB")===!0&&$===Ft?(y.format=jr,y.minFilter=Ct,y.generateMipmaps=!1):_=io.sRGBToLinear(_):($!==Ft||Z!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}this.allocateTextureUnit=L,this.resetTextureUnits=Q,this.setTexture2D=k,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=He,this.setupRenderTarget=D,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=he}function Fd(i,e,t){const n=t.isWebGL2;function r(s,o=Lt){let a;const c=We.getTransfer(o);if(s===ln)return i.UNSIGNED_BYTE;if(s===Ya)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Ka)return i.UNSIGNED_SHORT_5_5_5_1;if(s===mc)return i.BYTE;if(s===_c)return i.SHORT;if(s===es)return i.UNSIGNED_SHORT;if(s===qa)return i.INT;if(s===sn)return i.UNSIGNED_INT;if(s===an)return i.FLOAT;if(s===pi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===gc)return i.ALPHA;if(s===Ft)return i.RGBA;if(s===vc)return i.LUMINANCE;if(s===xc)return i.LUMINANCE_ALPHA;if(s===Tn)return i.DEPTH_COMPONENT;if(s===Jn)return i.DEPTH_STENCIL;if(s===jr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Mc)return i.RED;if(s===ja)return i.RED_INTEGER;if(s===Sc)return i.RG;if(s===Za)return i.RG_INTEGER;if(s===$a)return i.RGBA_INTEGER;if(s===hr||s===fr||s===dr||s===pr)if(c===Ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===hr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===dr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===hr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===dr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===pr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ts||s===As||s===bs||s===ws)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ts)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===As)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ws)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ja)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Rs||s===Cs)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Rs)return c===Ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Cs)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ls||s===Ps||s===Us||s===Ds||s===Is||s===Ns||s===Fs||s===Os||s===Bs||s===zs||s===Gs||s===Hs||s===Vs||s===ks)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ls)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ps)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Us)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ds)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Is)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ns)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fs)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Os)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bs)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zs)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gs)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Hs)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vs)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ks)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===mr||s===Ws||s===Xs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===mr)return c===Ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ws)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xs)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ec||s===qs||s===Ys||s===Ks)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===mr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===qs)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ys)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ks)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===yn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Od extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ui extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bd={type:"move"};class Gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const d=t.getJointPose(g,n),u=this._getHandJoint(l,g);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=h.position.distanceTo(f.position),m=.02,M=.005;l.inputState.pinching&&p>m+M?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-M&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bd)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class zd extends ti{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,p=null,m=null,M=null;const g=t.getContextAttributes();let d=null,u=null;const A=[],v=[],T=new Ge;let C=null;const w=new At;w.layers.enable(1),w.viewport=new ot;const b=new At;b.layers.enable(2),b.viewport=new ot;const B=[w,b],x=new Od;x.layers.enable(1),x.layers.enable(2);let E=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=A[V];return K===void 0&&(K=new Gr,A[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=A[V];return K===void 0&&(K=new Gr,A[V]=K),K.getGripSpace()},this.getHand=function(V){let K=A[V];return K===void 0&&(K=new Gr,A[V]=K),K.getHandSpace()};function H(V){const K=v.indexOf(V.inputSource);if(K===-1)return;const oe=A[K];oe!==void 0&&(oe.update(V.inputSource,V.frame,l||o),oe.dispatchEvent({type:V.type,data:V.inputSource}))}function Q(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",L);for(let V=0;V<A.length;V++){const K=v[V];K!==null&&(v[V]=null,A[V].disconnect(K))}E=null,G=null,e.setRenderTarget(d),m=null,p=null,f=null,r=null,u=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Rn(m.framebufferWidth,m.framebufferHeight,{format:Ft,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,oe=null,me=null;g.depth&&(me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Jn:Tn,oe=g.stencil?yn:sn);const pe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};f=new XRWebGLBinding(r,t),p=f.createProjectionLayer(pe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),u=new Rn(p.textureWidth,p.textureHeight,{format:Ft,type:ln,depthTexture:new _o(p.textureWidth,p.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const we=e.properties.get(u);we.__ignoreDepthValues=p.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),te.setContext(r),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(V){for(let K=0;K<V.removed.length;K++){const oe=V.removed[K],me=v.indexOf(oe);me>=0&&(v[me]=null,A[me].disconnect(oe))}for(let K=0;K<V.added.length;K++){const oe=V.added[K];let me=v.indexOf(oe);if(me===-1){for(let we=0;we<A.length;we++)if(we>=v.length){v.push(oe),me=we;break}else if(v[we]===null){v[we]=oe,me=we;break}if(me===-1)break}const pe=A[me];pe&&pe.connect(oe)}}const O=new U,k=new U;function q(V,K,oe){O.setFromMatrixPosition(K.matrixWorld),k.setFromMatrixPosition(oe.matrixWorld);const me=O.distanceTo(k),pe=K.projectionMatrix.elements,we=oe.projectionMatrix.elements,Ce=pe[14]/(pe[10]-1),Se=pe[14]/(pe[10]+1),He=(pe[9]+1)/pe[5],D=(pe[9]-1)/pe[5],pt=(pe[8]-1)/pe[0],ge=(we[8]+1)/we[0],Ae=Ce*pt,he=Ce*ge,je=me/(-pt+ge),Ue=je*-pt;K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ue),V.translateZ(je),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const y=Ce+je,_=Se+je,N=Ae-Ue,$=he+(me-Ue),Z=He*Se/_*y,J=D*Se/_*y;V.projectionMatrix.makePerspective(N,$,Z,J,y,_),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function W(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;x.near=b.near=w.near=V.near,x.far=b.far=w.far=V.far,(E!==x.near||G!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,G=x.far);const K=V.parent,oe=x.cameras;W(x,K);for(let me=0;me<oe.length;me++)W(oe[me],K);oe.length===2?q(x,w,b):x.projectionMatrix.copy(w.projectionMatrix),X(V,x,K)};function X(V,K,oe){oe===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(oe.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=$i*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(V){c=V,p!==null&&(p.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let Y=null;function ee(V,K){if(h=K.getViewerPose(l||o),M=K,h!==null){const oe=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let me=!1;oe.length!==x.cameras.length&&(x.cameras.length=0,me=!0);for(let pe=0;pe<oe.length;pe++){const we=oe[pe];let Ce=null;if(m!==null)Ce=m.getViewport(we);else{const He=f.getViewSubImage(p,we);Ce=He.viewport,pe===0&&(e.setRenderTargetTextures(u,He.colorTexture,p.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(u))}let Se=B[pe];Se===void 0&&(Se=new At,Se.layers.enable(pe),Se.viewport=new ot,B[pe]=Se),Se.matrix.fromArray(we.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(we.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),pe===0&&(x.matrix.copy(Se.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),me===!0&&x.cameras.push(Se)}}for(let oe=0;oe<A.length;oe++){const me=v[oe],pe=A[oe];me!==null&&pe!==void 0&&pe.update(me,K,l||o)}Y&&Y(V,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),M=null}const te=new mo;te.setAnimationLoop(ee),this.setAnimationLoop=function(V){Y=V},this.dispose=function(){}}}function Gd(i,e){function t(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function n(d,u){u.color.getRGB(d.fogColor.value,ho(i)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function r(d,u,A,v,T){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(d,u):u.isMeshToonMaterial?(s(d,u),f(d,u)):u.isMeshPhongMaterial?(s(d,u),h(d,u)):u.isMeshStandardMaterial?(s(d,u),p(d,u),u.isMeshPhysicalMaterial&&m(d,u,T)):u.isMeshMatcapMaterial?(s(d,u),M(d,u)):u.isMeshDepthMaterial?s(d,u):u.isMeshDistanceMaterial?(s(d,u),g(d,u)):u.isMeshNormalMaterial?s(d,u):u.isLineBasicMaterial?(o(d,u),u.isLineDashedMaterial&&a(d,u)):u.isPointsMaterial?c(d,u,A,v):u.isSpriteMaterial?l(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,t(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===St&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,t(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===St&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,t(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,t(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);const A=e.get(u).envMap;if(A&&(d.envMap.value=A,d.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap){d.lightMap.value=u.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=u.lightMapIntensity*v,t(u.lightMap,d.lightMapTransform)}u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,d.aoMapTransform))}function o(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform))}function a(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function c(d,u,A,v){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*A,d.scale.value=v*.5,u.map&&(d.map.value=u.map,t(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function l(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function h(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function f(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function p(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,d.roughnessMapTransform)),e.get(u).envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function m(d,u,A){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===St&&d.clearcoatNormalScale.value.negate())),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=A.texture,d.transmissionSamplerSize.value.set(A.width,A.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,d.specularIntensityMapTransform))}function M(d,u){u.matcap&&(d.matcap.value=u.matcap)}function g(d,u){const A=e.get(u).light;d.referencePosition.value.setFromMatrixPosition(A.matrixWorld),d.nearDistance.value=A.shadow.camera.near,d.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Hd(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(A,v){const T=v.program;n.uniformBlockBinding(A,T)}function l(A,v){let T=r[A.id];T===void 0&&(M(A),T=h(A),r[A.id]=T,A.addEventListener("dispose",d));const C=v.program;n.updateUBOMapping(A,C);const w=e.render.frame;s[A.id]!==w&&(p(A),s[A.id]=w)}function h(A){const v=f();A.__bindingPointIndex=v;const T=i.createBuffer(),C=A.__size,w=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,T),T}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(A){const v=r[A.id],T=A.uniforms,C=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,b=T.length;w<b;w++){const B=Array.isArray(T[w])?T[w]:[T[w]];for(let x=0,E=B.length;x<E;x++){const G=B[x];if(m(G,w,x,C)===!0){const H=G.__offset,Q=Array.isArray(G.value)?G.value:[G.value];let L=0;for(let O=0;O<Q.length;O++){const k=Q[O],q=g(k);typeof k=="number"||typeof k=="boolean"?(G.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,H+L,G.__data)):k.isMatrix3?(G.__data[0]=k.elements[0],G.__data[1]=k.elements[1],G.__data[2]=k.elements[2],G.__data[3]=0,G.__data[4]=k.elements[3],G.__data[5]=k.elements[4],G.__data[6]=k.elements[5],G.__data[7]=0,G.__data[8]=k.elements[6],G.__data[9]=k.elements[7],G.__data[10]=k.elements[8],G.__data[11]=0):(k.toArray(G.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,G.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,v,T,C){const w=A.value,b=v+"_"+T;if(C[b]===void 0)return typeof w=="number"||typeof w=="boolean"?C[b]=w:C[b]=w.clone(),!0;{const B=C[b];if(typeof w=="number"||typeof w=="boolean"){if(B!==w)return C[b]=w,!0}else if(B.equals(w)===!1)return B.copy(w),!0}return!1}function M(A){const v=A.uniforms;let T=0;const C=16;for(let b=0,B=v.length;b<B;b++){const x=Array.isArray(v[b])?v[b]:[v[b]];for(let E=0,G=x.length;E<G;E++){const H=x[E],Q=Array.isArray(H.value)?H.value:[H.value];for(let L=0,O=Q.length;L<O;L++){const k=Q[L],q=g(k),W=T%C;W!==0&&C-W<q.boundary&&(T+=C-W),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=T,T+=q.storage}}}const w=T%C;return w>0&&(T+=C-w),A.__size=T,A.__cache={},this}function g(A){const v={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(v.boundary=4,v.storage=4):A.isVector2?(v.boundary=8,v.storage=8):A.isVector3||A.isColor?(v.boundary=16,v.storage=12):A.isVector4?(v.boundary=16,v.storage=16):A.isMatrix3?(v.boundary=48,v.storage=48):A.isMatrix4?(v.boundary=64,v.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),v}function d(A){const v=A.target;v.removeEventListener("dispose",d);const T=o.indexOf(v.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const A in r)i.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:c,update:l,dispose:u}}class Eo{constructor(e={}){const{canvas:t=Ic(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;const m=new Uint32Array(4),M=new Int32Array(4);let g=null,d=null;const u=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ct,this._useLegacyLights=!1,this.toneMapping=cn,this.toneMappingExposure=1;const v=this;let T=!1,C=0,w=0,b=null,B=-1,x=null;const E=new ot,G=new ot;let H=null;const Q=new ze(0);let L=0,O=t.width,k=t.height,q=1,W=null,X=null;const Y=new ot(0,0,O,k),ee=new ot(0,0,O,k);let te=!1;const V=new is;let K=!1,oe=!1,me=null;const pe=new tt,we=new Ge,Ce=new U,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return b===null?q:1}let D=n;function pt(S,P){for(let F=0;F<S.length;F++){const z=S[F],I=t.getContext(z,P);if(I!==null)return I}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qr}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",re,!1),D===null){const P=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&P.shift(),D=pt(P,S),D===null)throw pt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ge,Ae,he,je,Ue,y,_,N,$,Z,J,fe,ae,le,Me,De,j,ke,Be,Te,_e,ue,Le,Ve;function $e(){ge=new Zh(D),Ae=new kh(D,ge,e),ge.init(Ae),ue=new Fd(D,ge,Ae),he=new Id(D,ge,Ae),je=new Qh(D),Ue=new Md,y=new Nd(D,ge,he,Ue,Ae,ue,je),_=new Xh(v),N=new jh(v),$=new al(D,Ae),Le=new Hh(D,ge,$,Ae),Z=new $h(D,$,je,Le),J=new rf(D,Z,$,je),Be=new nf(D,Ae,y),De=new Wh(Ue),fe=new xd(v,_,N,ge,Ae,Le,De),ae=new Gd(v,Ue),le=new Ed,Me=new Rd(ge,Ae),ke=new Gh(v,_,N,he,J,p,c),j=new Dd(v,J,Ae),Ve=new Hd(D,je,Ae,he),Te=new Vh(D,ge,je,Ae),_e=new Jh(D,ge,je,Ae),je.programs=fe.programs,v.capabilities=Ae,v.extensions=ge,v.properties=Ue,v.renderLists=le,v.shadowMap=j,v.state=he,v.info=je}$e();const Ne=new zd(v,D);this.xr=Ne,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=ge.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ge.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(O,k,!1))},this.getSize=function(S){return S.set(O,k)},this.setSize=function(S,P,F=!0){if(Ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,k=P,t.width=Math.floor(S*q),t.height=Math.floor(P*q),F===!0&&(t.style.width=S+"px",t.style.height=P+"px"),this.setViewport(0,0,S,P)},this.getDrawingBufferSize=function(S){return S.set(O*q,k*q).floor()},this.setDrawingBufferSize=function(S,P,F){O=S,k=P,q=F,t.width=Math.floor(S*F),t.height=Math.floor(P*F),this.setViewport(0,0,S,P)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(Y)},this.setViewport=function(S,P,F,z){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,P,F,z),he.viewport(E.copy(Y).multiplyScalar(q).floor())},this.getScissor=function(S){return S.copy(ee)},this.setScissor=function(S,P,F,z){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,P,F,z),he.scissor(G.copy(ee).multiplyScalar(q).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(S){he.setScissorTest(te=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(S=!0,P=!0,F=!0){let z=0;if(S){let I=!1;if(b!==null){const ce=b.texture.format;I=ce===$a||ce===Za||ce===ja}if(I){const ce=b.texture.type,de=ce===ln||ce===sn||ce===es||ce===yn||ce===Ya||ce===Ka,xe=ke.getClearColor(),ye=ke.getClearAlpha(),Ie=xe.r,be=xe.g,Re=xe.b;de?(m[0]=Ie,m[1]=be,m[2]=Re,m[3]=ye,D.clearBufferuiv(D.COLOR,0,m)):(M[0]=Ie,M[1]=be,M[2]=Re,M[3]=ye,D.clearBufferiv(D.COLOR,0,M))}else z|=D.COLOR_BUFFER_BIT}P&&(z|=D.DEPTH_BUFFER_BIT),F&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",re,!1),le.dispose(),Me.dispose(),Ue.dispose(),_.dispose(),N.dispose(),J.dispose(),Le.dispose(),Ve.dispose(),fe.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",mt),Ne.removeEventListener("sessionend",Ye),me&&(me.dispose(),me=null),_t.stop()};function ne(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=je.autoReset,P=j.enabled,F=j.autoUpdate,z=j.needsUpdate,I=j.type;$e(),je.autoReset=S,j.enabled=P,j.autoUpdate=F,j.needsUpdate=z,j.type=I}function re(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function se(S){const P=S.target;P.removeEventListener("dispose",se),Ee(P)}function Ee(S){ve(S),Ue.remove(S)}function ve(S){const P=Ue.get(S).programs;P!==void 0&&(P.forEach(function(F){fe.releaseProgram(F)}),S.isShaderMaterial&&fe.releaseShaderCache(S))}this.renderBufferDirect=function(S,P,F,z,I,ce){P===null&&(P=Se);const de=I.isMesh&&I.matrixWorld.determinant()<0,xe=Lo(S,P,F,z,I);he.setMaterial(z,de);let ye=F.index,Ie=1;if(z.wireframe===!0){if(ye=Z.getWireframeAttribute(F),ye===void 0)return;Ie=2}const be=F.drawRange,Re=F.attributes.position;let Qe=be.start*Ie,Et=(be.start+be.count)*Ie;ce!==null&&(Qe=Math.max(Qe,ce.start*Ie),Et=Math.min(Et,(ce.start+ce.count)*Ie)),ye!==null?(Qe=Math.max(Qe,0),Et=Math.min(Et,ye.count)):Re!=null&&(Qe=Math.max(Qe,0),Et=Math.min(Et,Re.count));const st=Et-Qe;if(st<0||st===1/0)return;Le.setup(I,z,xe,F,ye);let Vt,Ze=Te;if(ye!==null&&(Vt=$.get(ye),Ze=_e,Ze.setIndex(Vt)),I.isMesh)z.wireframe===!0?(he.setLineWidth(z.wireframeLinewidth*He()),Ze.setMode(D.LINES)):Ze.setMode(D.TRIANGLES);else if(I.isLine){let Fe=z.linewidth;Fe===void 0&&(Fe=1),he.setLineWidth(Fe*He()),I.isLineSegments?Ze.setMode(D.LINES):I.isLineLoop?Ze.setMode(D.LINE_LOOP):Ze.setMode(D.LINE_STRIP)}else I.isPoints?Ze.setMode(D.POINTS):I.isSprite&&Ze.setMode(D.TRIANGLES);if(I.isBatchedMesh)Ze.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)Ze.renderInstances(Qe,st,I.count);else if(F.isInstancedBufferGeometry){const Fe=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,ar=Math.min(F.instanceCount,Fe);Ze.renderInstances(Qe,st,ar)}else Ze.render(Qe,st)};function Xe(S,P,F){S.transparent===!0&&S.side===jt&&S.forceSinglePass===!1?(S.side=St,S.needsUpdate=!0,Mi(S,P,F),S.side=un,S.needsUpdate=!0,Mi(S,P,F),S.side=jt):Mi(S,P,F)}this.compile=function(S,P,F=null){F===null&&(F=S),d=Me.get(F),d.init(),A.push(d),F.traverseVisible(function(I){I.isLight&&I.layers.test(P.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),S!==F&&S.traverseVisible(function(I){I.isLight&&I.layers.test(P.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights(v._useLegacyLights);const z=new Set;return S.traverse(function(I){const ce=I.material;if(ce)if(Array.isArray(ce))for(let de=0;de<ce.length;de++){const xe=ce[de];Xe(xe,F,I),z.add(xe)}else Xe(ce,F,I),z.add(ce)}),A.pop(),d=null,z},this.compileAsync=function(S,P,F=null){const z=this.compile(S,P,F);return new Promise(I=>{function ce(){if(z.forEach(function(de){Ue.get(de).currentProgram.isReady()&&z.delete(de)}),z.size===0){I(S);return}setTimeout(ce,10)}ge.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let qe=null;function rt(S){qe&&qe(S)}function mt(){_t.stop()}function Ye(){_t.start()}const _t=new mo;_t.setAnimationLoop(rt),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(S){qe=S,Ne.setAnimationLoop(S),S===null?_t.stop():_t.start()},Ne.addEventListener("sessionstart",mt),Ne.addEventListener("sessionend",Ye),this.render=function(S,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(P),P=Ne.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,P,b),d=Me.get(S,A.length),d.init(),A.push(d),pe.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),V.setFromProjectionMatrix(pe),oe=this.localClippingEnabled,K=De.init(this.clippingPlanes,oe),g=le.get(S,u.length),g.init(),u.push(g),Ot(S,P,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(W,X),this.info.render.frame++,K===!0&&De.beginShadows();const F=d.state.shadowsArray;if(j.render(F,S,P),K===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),ke.render(g,S),d.setupLights(v._useLegacyLights),P.isArrayCamera){const z=P.cameras;for(let I=0,ce=z.length;I<ce;I++){const de=z[I];hs(g,S,de,de.viewport)}}else hs(g,S,P);b!==null&&(y.updateMultisampleRenderTarget(b),y.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(v,S,P),Le.resetDefaultState(),B=-1,x=null,A.pop(),A.length>0?d=A[A.length-1]:d=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function Ot(S,P,F,z){if(S.visible===!1)return;if(S.layers.test(P.layers)){if(S.isGroup)F=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(P);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||V.intersectsSprite(S)){z&&Ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(pe);const de=J.update(S),xe=S.material;xe.visible&&g.push(S,de,xe,F,Ce.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||V.intersectsObject(S))){const de=J.update(S),xe=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ce.copy(S.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ce.copy(de.boundingSphere.center)),Ce.applyMatrix4(S.matrixWorld).applyMatrix4(pe)),Array.isArray(xe)){const ye=de.groups;for(let Ie=0,be=ye.length;Ie<be;Ie++){const Re=ye[Ie],Qe=xe[Re.materialIndex];Qe&&Qe.visible&&g.push(S,de,Qe,F,Ce.z,Re)}}else xe.visible&&g.push(S,de,xe,F,Ce.z,null)}}const ce=S.children;for(let de=0,xe=ce.length;de<xe;de++)Ot(ce[de],P,F,z)}function hs(S,P,F,z){const I=S.opaque,ce=S.transmissive,de=S.transparent;d.setupLightsView(F),K===!0&&De.setGlobalState(v.clippingPlanes,F),ce.length>0&&Co(I,ce,P,F),z&&he.viewport(E.copy(z)),I.length>0&&xi(I,P,F),ce.length>0&&xi(ce,P,F),de.length>0&&xi(de,P,F),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Co(S,P,F,z){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const ce=Ae.isWebGL2;me===null&&(me=new Rn(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?pi:ln,minFilter:di,samples:ce?4:0})),v.getDrawingBufferSize(we),ce?me.setSize(we.x,we.y):me.setSize(Zr(we.x),Zr(we.y));const de=v.getRenderTarget();v.setRenderTarget(me),v.getClearColor(Q),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const xe=v.toneMapping;v.toneMapping=cn,xi(S,F,z),y.updateMultisampleRenderTarget(me),y.updateRenderTargetMipmap(me);let ye=!1;for(let Ie=0,be=P.length;Ie<be;Ie++){const Re=P[Ie],Qe=Re.object,Et=Re.geometry,st=Re.material,Vt=Re.group;if(st.side===jt&&Qe.layers.test(z.layers)){const Ze=st.side;st.side=St,st.needsUpdate=!0,fs(Qe,F,z,Et,st,Vt),st.side=Ze,st.needsUpdate=!0,ye=!0}}ye===!0&&(y.updateMultisampleRenderTarget(me),y.updateRenderTargetMipmap(me)),v.setRenderTarget(de),v.setClearColor(Q,L),v.toneMapping=xe}function xi(S,P,F){const z=P.isScene===!0?P.overrideMaterial:null;for(let I=0,ce=S.length;I<ce;I++){const de=S[I],xe=de.object,ye=de.geometry,Ie=z===null?de.material:z,be=de.group;xe.layers.test(F.layers)&&fs(xe,P,F,ye,Ie,be)}}function fs(S,P,F,z,I,ce){S.onBeforeRender(v,P,F,z,I,ce),S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),I.onBeforeRender(v,P,F,z,S,ce),I.transparent===!0&&I.side===jt&&I.forceSinglePass===!1?(I.side=St,I.needsUpdate=!0,v.renderBufferDirect(F,P,z,I,S,ce),I.side=un,I.needsUpdate=!0,v.renderBufferDirect(F,P,z,I,S,ce),I.side=jt):v.renderBufferDirect(F,P,z,I,S,ce),S.onAfterRender(v,P,F,z,I,ce)}function Mi(S,P,F){P.isScene!==!0&&(P=Se);const z=Ue.get(S),I=d.state.lights,ce=d.state.shadowsArray,de=I.state.version,xe=fe.getParameters(S,I.state,ce,P,F),ye=fe.getProgramCacheKey(xe);let Ie=z.programs;z.environment=S.isMeshStandardMaterial?P.environment:null,z.fog=P.fog,z.envMap=(S.isMeshStandardMaterial?N:_).get(S.envMap||z.environment),Ie===void 0&&(S.addEventListener("dispose",se),Ie=new Map,z.programs=Ie);let be=Ie.get(ye);if(be!==void 0){if(z.currentProgram===be&&z.lightsStateVersion===de)return ps(S,xe),be}else xe.uniforms=fe.getUniforms(S),S.onBuild(F,xe,v),S.onBeforeCompile(xe,v),be=fe.acquireProgram(xe,ye),Ie.set(ye,be),z.uniforms=xe.uniforms;const Re=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Re.clippingPlanes=De.uniform),ps(S,xe),z.needsLights=Uo(S),z.lightsStateVersion=de,z.needsLights&&(Re.ambientLightColor.value=I.state.ambient,Re.lightProbe.value=I.state.probe,Re.directionalLights.value=I.state.directional,Re.directionalLightShadows.value=I.state.directionalShadow,Re.spotLights.value=I.state.spot,Re.spotLightShadows.value=I.state.spotShadow,Re.rectAreaLights.value=I.state.rectArea,Re.ltc_1.value=I.state.rectAreaLTC1,Re.ltc_2.value=I.state.rectAreaLTC2,Re.pointLights.value=I.state.point,Re.pointLightShadows.value=I.state.pointShadow,Re.hemisphereLights.value=I.state.hemi,Re.directionalShadowMap.value=I.state.directionalShadowMap,Re.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Re.spotShadowMap.value=I.state.spotShadowMap,Re.spotLightMatrix.value=I.state.spotLightMatrix,Re.spotLightMap.value=I.state.spotLightMap,Re.pointShadowMap.value=I.state.pointShadowMap,Re.pointShadowMatrix.value=I.state.pointShadowMatrix),z.currentProgram=be,z.uniformsList=null,be}function ds(S){if(S.uniformsList===null){const P=S.currentProgram.getUniforms();S.uniformsList=Xi.seqWithValue(P.seq,S.uniforms)}return S.uniformsList}function ps(S,P){const F=Ue.get(S);F.outputColorSpace=P.outputColorSpace,F.batching=P.batching,F.instancing=P.instancing,F.instancingColor=P.instancingColor,F.skinning=P.skinning,F.morphTargets=P.morphTargets,F.morphNormals=P.morphNormals,F.morphColors=P.morphColors,F.morphTargetsCount=P.morphTargetsCount,F.numClippingPlanes=P.numClippingPlanes,F.numIntersection=P.numClipIntersection,F.vertexAlphas=P.vertexAlphas,F.vertexTangents=P.vertexTangents,F.toneMapping=P.toneMapping}function Lo(S,P,F,z,I){P.isScene!==!0&&(P=Se),y.resetTextureUnits();const ce=P.fog,de=z.isMeshStandardMaterial?P.environment:null,xe=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Jt,ye=(z.isMeshStandardMaterial?N:_).get(z.envMap||de),Ie=z.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,be=!!F.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Re=!!F.morphAttributes.position,Qe=!!F.morphAttributes.normal,Et=!!F.morphAttributes.color;let st=cn;z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(st=v.toneMapping);const Vt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ze=Vt!==void 0?Vt.length:0,Fe=Ue.get(z),ar=d.state.lights;if(K===!0&&(oe===!0||S!==x)){const wt=S===x&&z.id===B;De.setState(z,S,wt)}let Je=!1;z.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==ar.state.version||Fe.outputColorSpace!==xe||I.isBatchedMesh&&Fe.batching===!1||!I.isBatchedMesh&&Fe.batching===!0||I.isInstancedMesh&&Fe.instancing===!1||!I.isInstancedMesh&&Fe.instancing===!0||I.isSkinnedMesh&&Fe.skinning===!1||!I.isSkinnedMesh&&Fe.skinning===!0||I.isInstancedMesh&&Fe.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Fe.instancingColor===!1&&I.instanceColor!==null||Fe.envMap!==ye||z.fog===!0&&Fe.fog!==ce||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==De.numPlanes||Fe.numIntersection!==De.numIntersection)||Fe.vertexAlphas!==Ie||Fe.vertexTangents!==be||Fe.morphTargets!==Re||Fe.morphNormals!==Qe||Fe.morphColors!==Et||Fe.toneMapping!==st||Ae.isWebGL2===!0&&Fe.morphTargetsCount!==Ze)&&(Je=!0):(Je=!0,Fe.__version=z.version);let dn=Fe.currentProgram;Je===!0&&(dn=Mi(z,P,I));let ms=!1,ri=!1,or=!1;const lt=dn.getUniforms(),pn=Fe.uniforms;if(he.useProgram(dn.program)&&(ms=!0,ri=!0,or=!0),z.id!==B&&(B=z.id,ri=!0),ms||x!==S){lt.setValue(D,"projectionMatrix",S.projectionMatrix),lt.setValue(D,"viewMatrix",S.matrixWorldInverse);const wt=lt.map.cameraPosition;wt!==void 0&&wt.setValue(D,Ce.setFromMatrixPosition(S.matrixWorld)),Ae.logarithmicDepthBuffer&&lt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&lt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,ri=!0,or=!0)}if(I.isSkinnedMesh){lt.setOptional(D,I,"bindMatrix"),lt.setOptional(D,I,"bindMatrixInverse");const wt=I.skeleton;wt&&(Ae.floatVertexTextures?(wt.boneTexture===null&&wt.computeBoneTexture(),lt.setValue(D,"boneTexture",wt.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}I.isBatchedMesh&&(lt.setOptional(D,I,"batchingTexture"),lt.setValue(D,"batchingTexture",I._matricesTexture,y));const cr=F.morphAttributes;if((cr.position!==void 0||cr.normal!==void 0||cr.color!==void 0&&Ae.isWebGL2===!0)&&Be.update(I,F,dn),(ri||Fe.receiveShadow!==I.receiveShadow)&&(Fe.receiveShadow=I.receiveShadow,lt.setValue(D,"receiveShadow",I.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(pn.envMap.value=ye,pn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),ri&&(lt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&Po(pn,or),ce&&z.fog===!0&&ae.refreshFogUniforms(pn,ce),ae.refreshMaterialUniforms(pn,z,q,k,me),Xi.upload(D,ds(Fe),pn,y)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Xi.upload(D,ds(Fe),pn,y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&lt.setValue(D,"center",I.center),lt.setValue(D,"modelViewMatrix",I.modelViewMatrix),lt.setValue(D,"normalMatrix",I.normalMatrix),lt.setValue(D,"modelMatrix",I.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const wt=z.uniformsGroups;for(let lr=0,Do=wt.length;lr<Do;lr++)if(Ae.isWebGL2){const _s=wt[lr];Ve.update(_s,dn),Ve.bind(_s,dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return dn}function Po(S,P){S.ambientLightColor.needsUpdate=P,S.lightProbe.needsUpdate=P,S.directionalLights.needsUpdate=P,S.directionalLightShadows.needsUpdate=P,S.pointLights.needsUpdate=P,S.pointLightShadows.needsUpdate=P,S.spotLights.needsUpdate=P,S.spotLightShadows.needsUpdate=P,S.rectAreaLights.needsUpdate=P,S.hemisphereLights.needsUpdate=P}function Uo(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,P,F){Ue.get(S.texture).__webglTexture=P,Ue.get(S.depthTexture).__webglTexture=F;const z=Ue.get(S);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=F===void 0,z.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,P){const F=Ue.get(S);F.__webglFramebuffer=P,F.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(S,P=0,F=0){b=S,C=P,w=F;let z=!0,I=null,ce=!1,de=!1;if(S){const ye=Ue.get(S);ye.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(D.FRAMEBUFFER,null),z=!1):ye.__webglFramebuffer===void 0?y.setupRenderTarget(S):ye.__hasExternalTextures&&y.rebindTextures(S,Ue.get(S.texture).__webglTexture,Ue.get(S.depthTexture).__webglTexture);const Ie=S.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(de=!0);const be=Ue.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(be[P])?I=be[P][F]:I=be[P],ce=!0):Ae.isWebGL2&&S.samples>0&&y.useMultisampledRTT(S)===!1?I=Ue.get(S).__webglMultisampledFramebuffer:Array.isArray(be)?I=be[F]:I=be,E.copy(S.viewport),G.copy(S.scissor),H=S.scissorTest}else E.copy(Y).multiplyScalar(q).floor(),G.copy(ee).multiplyScalar(q).floor(),H=te;if(he.bindFramebuffer(D.FRAMEBUFFER,I)&&Ae.drawBuffers&&z&&he.drawBuffers(S,I),he.viewport(E),he.scissor(G),he.setScissorTest(H),ce){const ye=Ue.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,ye.__webglTexture,F)}else if(de){const ye=Ue.get(S.texture),Ie=P||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.__webglTexture,F||0,Ie)}B=-1},this.readRenderTargetPixels=function(S,P,F,z,I,ce,de){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ue.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&de!==void 0&&(xe=xe[de]),xe){he.bindFramebuffer(D.FRAMEBUFFER,xe);try{const ye=S.texture,Ie=ye.format,be=ye.type;if(Ie!==Ft&&ue.convert(Ie)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=be===pi&&(ge.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&ge.has("EXT_color_buffer_float"));if(be!==ln&&ue.convert(be)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(be===an&&(Ae.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=S.width-z&&F>=0&&F<=S.height-I&&D.readPixels(P,F,z,I,ue.convert(Ie),ue.convert(be),ce)}finally{const ye=b!==null?Ue.get(b).__webglFramebuffer:null;he.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(S,P,F=0){const z=Math.pow(2,-F),I=Math.floor(P.image.width*z),ce=Math.floor(P.image.height*z);y.setTexture2D(P,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,S.x,S.y,I,ce),he.unbindTexture()},this.copyTextureToTexture=function(S,P,F,z=0){const I=P.image.width,ce=P.image.height,de=ue.convert(F.format),xe=ue.convert(F.type);y.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment),P.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,S.x,S.y,I,ce,de,xe,P.image.data):P.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,S.x,S.y,P.mipmaps[0].width,P.mipmaps[0].height,de,P.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,z,S.x,S.y,de,xe,P.image),z===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(S,P,F,z,I=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=S.max.x-S.min.x+1,de=S.max.y-S.min.y+1,xe=S.max.z-S.min.z+1,ye=ue.convert(z.format),Ie=ue.convert(z.type);let be;if(z.isData3DTexture)y.setTexture3D(z,0),be=D.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)y.setTexture2DArray(z,0),be=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const Re=D.getParameter(D.UNPACK_ROW_LENGTH),Qe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Et=D.getParameter(D.UNPACK_SKIP_PIXELS),st=D.getParameter(D.UNPACK_SKIP_ROWS),Vt=D.getParameter(D.UNPACK_SKIP_IMAGES),Ze=F.isCompressedTexture?F.mipmaps[I]:F.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ze.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ze.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,S.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,S.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,S.min.z),F.isDataTexture||F.isData3DTexture?D.texSubImage3D(be,I,P.x,P.y,P.z,ce,de,xe,ye,Ie,Ze.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(be,I,P.x,P.y,P.z,ce,de,xe,ye,Ze.data)):D.texSubImage3D(be,I,P.x,P.y,P.z,ce,de,xe,ye,Ie,Ze),D.pixelStorei(D.UNPACK_ROW_LENGTH,Re),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Et),D.pixelStorei(D.UNPACK_SKIP_ROWS,st),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Vt),I===0&&z.generateMipmaps&&D.generateMipmap(be),he.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?y.setTextureCube(S,0):S.isData3DTexture?y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?y.setTexture2DArray(S,0):y.setTexture2D(S,0),he.unbindTexture()},this.resetState=function(){C=0,w=0,b=null,he.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ts?"display-p3":"srgb",t.unpackColorSpace=We.workingColorSpace===er?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ct?An:Qa}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===An?ct:Jt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Vd extends Eo{}Vd.prototype.isWebGL1Renderer=!0;class as{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new as(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class kd extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class os extends Ht{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],p=[],m=[];let M=0;const g=[],d=n/2;let u=0;A(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(p,3)),this.setAttribute("uv",new dt(m,2));function A(){const T=new U,C=new U;let w=0;const b=(t-e)/n;for(let B=0;B<=s;B++){const x=[],E=B/s,G=E*(t-e)+e;for(let H=0;H<=r;H++){const Q=H/r,L=Q*c+a,O=Math.sin(L),k=Math.cos(L);C.x=G*O,C.y=-E*n+d,C.z=G*k,f.push(C.x,C.y,C.z),T.set(O,b,k).normalize(),p.push(T.x,T.y,T.z),m.push(Q,1-E),x.push(M++)}g.push(x)}for(let B=0;B<r;B++)for(let x=0;x<s;x++){const E=g[x][B],G=g[x+1][B],H=g[x+1][B+1],Q=g[x][B+1];h.push(E,G,Q),h.push(G,H,Q),w+=6}l.addGroup(u,w,0),u+=w}function v(T){const C=M,w=new Ge,b=new U;let B=0;const x=T===!0?e:t,E=T===!0?1:-1;for(let H=1;H<=r;H++)f.push(0,d*E,0),p.push(0,E,0),m.push(.5,.5),M++;const G=M;for(let H=0;H<=r;H++){const L=H/r*c+a,O=Math.cos(L),k=Math.sin(L);b.x=x*k,b.y=d*E,b.z=x*O,f.push(b.x,b.y,b.z),p.push(0,E,0),w.x=O*.5+.5,w.y=k*.5*E+.5,m.push(w.x,w.y),M++}for(let H=0;H<r;H++){const Q=C+H,L=G+H;T===!0?h.push(L,L+1,Q):h.push(L+1,L,Q),B+=3}l.addGroup(u,B,T===!0?1:2),u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cs extends Ht{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),l(n),h(),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(s.slice(),3)),this.setAttribute("uv",new dt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(A){const v=new U,T=new U,C=new U;for(let w=0;w<t.length;w+=3)m(t[w+0],v),m(t[w+1],T),m(t[w+2],C),c(v,T,C,A)}function c(A,v,T,C){const w=C+1,b=[];for(let B=0;B<=w;B++){b[B]=[];const x=A.clone().lerp(T,B/w),E=v.clone().lerp(T,B/w),G=w-B;for(let H=0;H<=G;H++)H===0&&B===w?b[B][H]=x:b[B][H]=x.clone().lerp(E,H/G)}for(let B=0;B<w;B++)for(let x=0;x<2*(w-B)-1;x++){const E=Math.floor(x/2);x%2===0?(p(b[B][E+1]),p(b[B+1][E]),p(b[B][E])):(p(b[B][E+1]),p(b[B+1][E+1]),p(b[B+1][E]))}}function l(A){const v=new U;for(let T=0;T<s.length;T+=3)v.x=s[T+0],v.y=s[T+1],v.z=s[T+2],v.normalize().multiplyScalar(A),s[T+0]=v.x,s[T+1]=v.y,s[T+2]=v.z}function h(){const A=new U;for(let v=0;v<s.length;v+=3){A.x=s[v+0],A.y=s[v+1],A.z=s[v+2];const T=d(A)/2/Math.PI+.5,C=u(A)/Math.PI+.5;o.push(T,1-C)}M(),f()}function f(){for(let A=0;A<o.length;A+=6){const v=o[A+0],T=o[A+2],C=o[A+4],w=Math.max(v,T,C),b=Math.min(v,T,C);w>.9&&b<.1&&(v<.2&&(o[A+0]+=1),T<.2&&(o[A+2]+=1),C<.2&&(o[A+4]+=1))}}function p(A){s.push(A.x,A.y,A.z)}function m(A,v){const T=A*3;v.x=e[T+0],v.y=e[T+1],v.z=e[T+2]}function M(){const A=new U,v=new U,T=new U,C=new U,w=new Ge,b=new Ge,B=new Ge;for(let x=0,E=0;x<s.length;x+=9,E+=6){A.set(s[x+0],s[x+1],s[x+2]),v.set(s[x+3],s[x+4],s[x+5]),T.set(s[x+6],s[x+7],s[x+8]),w.set(o[E+0],o[E+1]),b.set(o[E+2],o[E+3]),B.set(o[E+4],o[E+5]),C.copy(A).add(v).add(T).divideScalar(3);const G=d(C);g(w,E+0,A,G),g(b,E+2,v,G),g(B,E+4,T,G)}}function g(A,v,T,C){C<0&&A.x===1&&(o[v]=A.x-1),T.x===0&&T.z===0&&(o[v]=C/2/Math.PI+.5)}function d(A){return Math.atan2(A.z,-A.x)}function u(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.vertices,e.indices,e.radius,e.details)}}class ls extends cs{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ls(e.radius,e.detail)}}class us extends Ht{constructor(e=1,t=.4,n=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:o},n=Math.floor(n),r=Math.floor(r);const a=[],c=[],l=[],h=[],f=new U,p=new U,m=new U,M=new U,g=new U,d=new U,u=new U;for(let v=0;v<=n;++v){const T=v/n*s*Math.PI*2;A(T,s,o,e,m),A(T+.01,s,o,e,M),d.subVectors(M,m),u.addVectors(M,m),g.crossVectors(d,u),u.crossVectors(g,d),g.normalize(),u.normalize();for(let C=0;C<=r;++C){const w=C/r*Math.PI*2,b=-t*Math.cos(w),B=t*Math.sin(w);f.x=m.x+(b*u.x+B*g.x),f.y=m.y+(b*u.y+B*g.y),f.z=m.z+(b*u.z+B*g.z),c.push(f.x,f.y,f.z),p.subVectors(f,m).normalize(),l.push(p.x,p.y,p.z),h.push(v/n),h.push(C/r)}}for(let v=1;v<=n;v++)for(let T=1;T<=r;T++){const C=(r+1)*(v-1)+(T-1),w=(r+1)*v+(T-1),b=(r+1)*v+T,B=(r+1)*(v-1)+T;a.push(C,w,B),a.push(w,b,B)}this.setIndex(a),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(h,2));function A(v,T,C,w,b){const B=Math.cos(v),x=Math.sin(v),E=C/T*v,G=Math.cos(E);b.x=w*(2+G)*.5*B,b.y=w*(2+G)*x*.5,b.z=w*Math.sin(E)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Wd extends vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yo extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Hr=new tt,Oa=new U,Ba=new U;class Xd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new is,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Oa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oa),Ba.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ba),t.updateMatrixWorld(),Hr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qd extends Xd{constructor(){super(new At(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=$i*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Yd extends yo{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new qd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kd extends yo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qr);const ir=[{name:"Vaso Dinastia Ming",isAnachronistic:!1,isMystical:!1,isFake:!0,description:"Um vaso azul e branco. A porcelana parece autêntica, mas a marca na base parece... moderna.",color:3426654,shape:"torusKnot"},{name:"Relógio de Bolso Vitoriano",isAnachronistic:!0,isMystical:!1,isFake:!1,description:"Um relógio ornamentado. O tique-tique é hipnotizante.",color:9807270,shape:"cylinder"},{name:"Estatueta de Jade",isAnachronistic:!1,isMystical:!0,isFake:!1,description:"Uma pequena estátua de jade. Dizem que ela sussurra à noite.",color:2600544,shape:"octahedron"}];let fi=0,Jr=0;document.getElementById("game-canvas");const hn=document.getElementById("container-objeto"),fn=new kd;fn.background=new ze(789518);fn.fog=new as(789518,5,15);const ei=new At(45,hn.clientWidth/hn.clientHeight,.1,1e3);ei.position.z=5;const rr=new Eo({antialias:!0});rr.setSize(hn.clientWidth,hn.clientHeight);hn.appendChild(rr.domElement);const jd=new Kd(4210752,1.5);fn.add(jd);const zt=new Yd(16777215,10);zt.position.set(0,5,5);zt.angle=Math.PI/6;zt.penumbra=.5;zt.decay=2;zt.distance=20;fn.add(zt);const bn=new ui;fn.add(bn);let wn=null;function To(i){const e=ir[i];bn.clear();let t;switch(e.shape){case"torusKnot":t=new us(1,.3,100,16);break;case"cylinder":t=new os(1,1,.2,32);break;case"octahedron":t=new ls(1.2);break;default:t=new ni(1.5,1.5,1.5)}const n=new Wd({color:e.color,metalness:.7,roughness:.2,emissive:0});wn=new $t(t,n),bn.add(wn),bn.rotation.set(0,0,0),document.querySelector(".ui-manual h2").innerText=e.name,document.getElementById("check-anacronismo").checked=!1,document.getElementById("check-mistico").checked=!1,document.getElementById("check-falso").checked=!1}let sr=!1,Vr={x:0,y:0};const za=.005;hn.addEventListener("mousedown",i=>{sr=!0});window.addEventListener("mouseup",()=>{sr=!1});window.addEventListener("mousemove",i=>{if(sr&&wn){const e=i.clientX-Vr.x,t=i.clientY-Vr.y;bn.rotation.y+=e*za,bn.rotation.x+=t*za}Vr={x:i.clientX,y:i.clientY}});const Ga=document.getElementById("btn-loupe"),Ha=document.getElementById("btn-uv");let ki=!1,Wi=!1;Ga.addEventListener("click",()=>{ki=!ki,Ga.classList.toggle("active",ki);const i=ki?3:5,e=ei.position.z,t=500,n=performance.now();function r(s){const o=s-n,a=Math.min(o/t,1),c=1-Math.pow(1-a,3);ei.position.z=e+(i-e)*c,a<1&&requestAnimationFrame(r)}requestAnimationFrame(r)});Ha.addEventListener("click",()=>{Wi=!Wi,Ha.classList.toggle("active",Wi);const i=ir[fi];Wi?(fn.background=new ze(327696),zt.color.set(8913151),zt.intensity=20,i.isMystical&&(wn.material.emissive.set(65484),wn.material.emissiveIntensity=4)):(fn.background=new ze(789518),zt.color.set(16777215),zt.intensity=10,wn.material.emissive.set(0))});const Zd=document.getElementById("btn-finalizar"),Ao=document.getElementById("feedback-modal"),bo=document.getElementById("feedback-title"),wo=document.getElementById("feedback-score"),Va=document.getElementById("btn-next"),$d=document.querySelector(".ui-manual");Zd.addEventListener("click",()=>{const i=document.createElement("div");i.className="stamp-reveal",i.innerText="VERIFICADO",$d.appendChild(i),setTimeout(()=>{const e=ir[fi],t=document.getElementById("check-anacronismo").checked,n=document.getElementById("check-mistico").checked,r=document.getElementById("check-falso").checked;let s=0;t===e.isAnachronistic&&(s+=10),n===e.isMystical&&(s+=10),r===e.isFake&&(s+=10),Jr+=s,bo.innerText=s===30?"Perfeito!":s>10?"Bom Trabalho":"Falhou",wo.innerText=`Você marcou ${s}/30 pontos neste artefato. Pontuação Total: ${Jr}`,Ao.classList.remove("hidden"),i.remove()},1e3)});Va.addEventListener("click",()=>{fi++,fi>=ir.length?(bo.innerText="Fim do Expediente",wo.innerText=`Você completou sua curadoria. Pontuação Total Final: ${Jr}`,Va.style.display="none"):(To(fi),Ao.classList.add("hidden"))});window.addEventListener("resize",()=>{const i=hn.clientWidth,e=hn.clientHeight;rr.setSize(i,e),ei.aspect=i/e,ei.updateProjectionMatrix()});To(0);function Ro(){requestAnimationFrame(Ro),!sr&&wn&&(bn.rotation.y+=.002),rr.render(fn,ei)}Ro();
