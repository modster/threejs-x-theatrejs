const dv=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}};dv();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oc="142",fv=0,Nu=1,pv=2,Zh=1,Jh=2,xs=3,bs=0,bn=1,Fr=2,mv=1,ui=0,Ir=1,zu=2,Uu=3,Bu=4,gv=5,Lr=100,_v=101,vv=102,ku=103,Vu=104,xv=200,yv=201,bv=202,Sv=203,Qh=204,ed=205,Mv=206,wv=207,Tv=208,Ev=209,Av=210,Cv=0,Pv=1,Dv=2,Ql=3,Lv=4,Rv=5,Iv=6,Ov=7,td=0,Fv=1,Nv=2,Wn=0,zv=1,Uv=2,Bv=3,kv=4,Vv=5,nd=300,Nr=301,zr=302,ec=303,tc=304,Fa=306,nc=1e3,yn=1001,ic=1002,$t=1003,Gu=1004,Hu=1005,hn=1006,Gv=1007,Na=1008,Qi=1009,Hv=1010,Wv=1011,id=1012,jv=1013,qi=1014,Xi=1015,Ss=1016,qv=1017,Xv=1018,Or=1020,$v=1021,Yv=1022,Cn=1023,Kv=1024,Zv=1025,Ki=1026,Ur=1027,Jv=1028,Qv=1029,e0=1030,t0=1031,n0=1033,yl=33776,bl=33777,Sl=33778,Ml=33779,Wu=35840,ju=35841,qu=35842,Xu=35843,i0=36196,$u=37492,Yu=37496,Ku=37808,Zu=37809,Ju=37810,Qu=37811,eh=37812,th=37813,nh=37814,ih=37815,rh=37816,sh=37817,ah=37818,oh=37819,lh=37820,ch=37821,uh=36492,er=3e3,gt=3001,r0=3200,s0=3201,rd=0,a0=1,Vn="srgb",$i="srgb-linear",wl=7680,o0=519,hh=35044,dh="300 es",rc=1035;class kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,u=r.length;a<u;a++)r[a].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tl=Math.PI/180,fh=180/Math.PI;function ws(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[o&255]+Ft[o>>8&255]+Ft[o>>16&255]+Ft[o>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function rn(o,e,t){return Math.max(e,Math.min(t,o))}function l0(o,e){return(o%e+e)%e}function El(o,e,t){return(1-t)*o+t*e}function ph(o){return(o&o-1)===0&&o!==0}function sc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*n-u*r+e.x,this.y=a*r+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fn{constructor(){fn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,a,u,l,d,h){const m=this.elements;return m[0]=e,m[1]=r,m[2]=l,m[3]=t,m[4]=a,m[5]=d,m[6]=n,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,u=n[0],l=n[3],d=n[6],h=n[1],m=n[4],_=n[7],v=n[2],y=n[5],w=n[8],x=r[0],p=r[3],T=r[6],R=r[1],F=r[4],P=r[7],L=r[2],U=r[5],V=r[8];return a[0]=u*x+l*R+d*L,a[3]=u*p+l*F+d*U,a[6]=u*T+l*P+d*V,a[1]=h*x+m*R+_*L,a[4]=h*p+m*F+_*U,a[7]=h*T+m*P+_*V,a[2]=v*x+y*R+w*L,a[5]=v*p+y*F+w*U,a[8]=v*T+y*P+w*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],l=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*l*h-n*a*m+n*l*d+r*a*h-r*u*d}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],l=e[5],d=e[6],h=e[7],m=e[8],_=m*u-l*h,v=l*d-m*a,y=h*a-u*d,w=t*_+n*v+r*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/w;return e[0]=_*x,e[1]=(r*h-m*n)*x,e[2]=(l*n-r*u)*x,e[3]=v*x,e[4]=(m*t-r*d)*x,e[5]=(r*a-l*t)*x,e[6]=y*x,e[7]=(n*d-h*t)*x,e[8]=(u*t-n*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,u,l){const d=Math.cos(a),h=Math.sin(a);return this.set(n*d,n*h,-n*(d*u+h*l)+u+e,-r*h,r*d,-r*(-h*u+d*l)+l+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,a=r[0],u=r[3],l=r[6],d=r[1],h=r[4],m=r[7];return r[0]=t*a+n*d,r[3]=t*u+n*h,r[6]=t*l+n*m,r[1]=-n*a+t*d,r[4]=-n*u+t*h,r[7]=-n*l+t*m,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function sd(o){for(let e=o.length-1;e>=0;--e)if(o[e]>65535)return!0;return!1}function Oa(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Zi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ra(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Al={[Vn]:{[$i]:Zi},[$i]:{[Vn]:Ra}},gn={legacyMode:!0,get workingColorSpace(){return $i},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Al[e]&&Al[e][t]!==void 0){const n=Al[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mt={r:0,g:0,b:0},_n={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Cl(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function da(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class st{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=$i){return this.r=e,this.g=t,this.b=n,gn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=$i){if(e=l0(e,1),t=rn(t,0,1),n=rn(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,u=2*n-a;this.r=Cl(u,a,e+1/3),this.g=Cl(u,a,e),this.b=Cl(u,a,e-1/3)}return gn.toWorkingColorSpace(this,r),this}setStyle(e,t=Vn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let a;const u=r[1],l=r[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,gn.toWorkingColorSpace(this,t),n(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,gn.toWorkingColorSpace(this,t),n(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l)){const d=parseFloat(a[1])/360,h=parseInt(a[2],10)/100,m=parseInt(a[3],10)/100;return n(a[4]),this.setHSL(d,h,m,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],u=a.length;if(u===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,gn.toWorkingColorSpace(this,t),this;if(u===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,gn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Vn){const n=ad[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return gn.fromWorkingColorSpace(da(this,Mt),e),rn(Mt.r*255,0,255)<<16^rn(Mt.g*255,0,255)<<8^rn(Mt.b*255,0,255)<<0}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$i){gn.fromWorkingColorSpace(da(this,Mt),t);const n=Mt.r,r=Mt.g,a=Mt.b,u=Math.max(n,r,a),l=Math.min(n,r,a);let d,h;const m=(l+u)/2;if(l===u)d=0,h=0;else{const _=u-l;switch(h=m<=.5?_/(u+l):_/(2-u-l),u){case n:d=(r-a)/_+(r<a?6:0);break;case r:d=(a-n)/_+2;break;case a:d=(n-r)/_+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=$i){return gn.fromWorkingColorSpace(da(this,Mt),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Vn){return gn.fromWorkingColorSpace(da(this,Mt),e),e!==Vn?`color(${e} ${Mt.r} ${Mt.g} ${Mt.b})`:`rgb(${Mt.r*255|0},${Mt.g*255|0},${Mt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(_n),_n.h+=e,_n.s+=t,_n.l+=n,this.setHSL(_n.h,_n.s,_n.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_n),e.getHSL(ha);const n=El(_n.h,ha.h,t),r=El(_n.s,ha.s,t),a=El(_n.l,ha.l,t);return this.setHSL(n,r,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}st.NAMES=ad;let _r;class od{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_r===void 0&&(_r=Oa("canvas")),_r.width=e.width,_r.height=e.height;const n=_r.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_r}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Oa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let u=0;u<a.length;u++)a[u]=Zi(a[u]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zi(t[n]/255)*255):t[n]=Zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ld{constructor(e=null){this.isSource=!0,this.uuid=ws(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let u=0,l=r.length;u<l;u++)r[u].isDataTexture?a.push(Pl(r[u].image)):a.push(Pl(r[u]))}else a=Pl(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Pl(o){return typeof HTMLImageElement!="undefined"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&o instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&o instanceof ImageBitmap?od.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let c0=0;class Sn extends kr{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,n=yn,r=yn,a=hn,u=Na,l=Cn,d=Qi,h=1,m=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=ws(),this.name="",this.source=new ld(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=u,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=d,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nc:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nc:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=nd;class wt{constructor(e=0,t=0,n=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*r+u[12]*a,this.y=u[1]*t+u[5]*n+u[9]*r+u[13]*a,this.z=u[2]*t+u[6]*n+u[10]*r+u[14]*a,this.w=u[3]*t+u[7]*n+u[11]*r+u[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const d=e.elements,h=d[0],m=d[4],_=d[8],v=d[1],y=d[5],w=d[9],x=d[2],p=d[6],T=d[10];if(Math.abs(m-v)<.01&&Math.abs(_-x)<.01&&Math.abs(w-p)<.01){if(Math.abs(m+v)<.1&&Math.abs(_+x)<.1&&Math.abs(w+p)<.1&&Math.abs(h+y+T-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(h+1)/2,P=(y+1)/2,L=(T+1)/2,U=(m+v)/4,V=(_+x)/4,A=(w+p)/4;return F>P&&F>L?F<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(F),r=U/n,a=V/n):P>L?P<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(P),n=U/r,a=A/r):L<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(L),n=V/a,r=A/a),this.set(n,r,a,t),this}let R=Math.sqrt((p-w)*(p-w)+(_-x)*(_-x)+(v-m)*(v-m));return Math.abs(R)<.001&&(R=1),this.x=(p-w)/R,this.y=(_-x)/R,this.z=(v-m)/R,this.w=Math.acos((h+y+T-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tr extends kr{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Sn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:hn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ld(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cd extends Sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class u0 extends Sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ts{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerp(e,t,n,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,r)}static slerpFlat(e,t,n,r,a,u,l){let d=n[r+0],h=n[r+1],m=n[r+2],_=n[r+3];const v=a[u+0],y=a[u+1],w=a[u+2],x=a[u+3];if(l===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=_;return}if(l===1){e[t+0]=v,e[t+1]=y,e[t+2]=w,e[t+3]=x;return}if(_!==x||d!==v||h!==y||m!==w){let p=1-l;const T=d*v+h*y+m*w+_*x,R=T>=0?1:-1,F=1-T*T;if(F>Number.EPSILON){const L=Math.sqrt(F),U=Math.atan2(L,T*R);p=Math.sin(p*U)/L,l=Math.sin(l*U)/L}const P=l*R;if(d=d*p+v*P,h=h*p+y*P,m=m*p+w*P,_=_*p+x*P,p===1-l){const L=1/Math.sqrt(d*d+h*h+m*m+_*_);d*=L,h*=L,m*=L,_*=L}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,r,a,u){const l=n[r],d=n[r+1],h=n[r+2],m=n[r+3],_=a[u],v=a[u+1],y=a[u+2],w=a[u+3];return e[t]=l*w+m*_+d*y-h*v,e[t+1]=d*w+m*v+h*_-l*y,e[t+2]=h*w+m*y+l*v-d*_,e[t+3]=m*w-l*_-d*v-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,r=e._y,a=e._z,u=e._order,l=Math.cos,d=Math.sin,h=l(n/2),m=l(r/2),_=l(a/2),v=d(n/2),y=d(r/2),w=d(a/2);switch(u){case"XYZ":this._x=v*m*_+h*y*w,this._y=h*y*_-v*m*w,this._z=h*m*w+v*y*_,this._w=h*m*_-v*y*w;break;case"YXZ":this._x=v*m*_+h*y*w,this._y=h*y*_-v*m*w,this._z=h*m*w-v*y*_,this._w=h*m*_+v*y*w;break;case"ZXY":this._x=v*m*_-h*y*w,this._y=h*y*_+v*m*w,this._z=h*m*w+v*y*_,this._w=h*m*_-v*y*w;break;case"ZYX":this._x=v*m*_-h*y*w,this._y=h*y*_+v*m*w,this._z=h*m*w-v*y*_,this._w=h*m*_+v*y*w;break;case"YZX":this._x=v*m*_+h*y*w,this._y=h*y*_+v*m*w,this._z=h*m*w-v*y*_,this._w=h*m*_-v*y*w;break;case"XZY":this._x=v*m*_-h*y*w,this._y=h*y*_-v*m*w,this._z=h*m*w+v*y*_,this._w=h*m*_+v*y*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],u=t[1],l=t[5],d=t[9],h=t[2],m=t[6],_=t[10],v=n+l+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(m-d)*y,this._y=(a-h)*y,this._z=(u-r)*y}else if(n>l&&n>_){const y=2*Math.sqrt(1+n-l-_);this._w=(m-d)/y,this._x=.25*y,this._y=(r+u)/y,this._z=(a+h)/y}else if(l>_){const y=2*Math.sqrt(1+l-n-_);this._w=(a-h)/y,this._x=(r+u)/y,this._y=.25*y,this._z=(d+m)/y}else{const y=2*Math.sqrt(1+_-n-l);this._w=(u-r)/y,this._x=(a+h)/y,this._y=(d+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,u=e._w,l=t._x,d=t._y,h=t._z,m=t._w;return this._x=n*m+u*l+r*h-a*d,this._y=r*m+u*d+a*l-n*h,this._z=a*m+u*h+n*d-r*l,this._w=u*m-n*l-r*d-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,u=this._w;let l=u*e._w+n*e._x+r*e._y+a*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=u,this._x=n,this._y=r,this._z=a,this;const d=1-l*l;if(d<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*n+t*this._x,this._y=y*r+t*this._y,this._z=y*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(d),m=Math.atan2(h,l),_=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=u*_+this._w*v,this._x=n*_+this._x*v,this._y=r*_+this._y*v,this._z=a*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,u=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*u,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*u,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,u=e.y,l=e.z,d=e.w,h=d*t+u*r-l*n,m=d*n+l*t-a*r,_=d*r+a*n-u*t,v=-a*t-u*n-l*r;return this.x=h*d+v*-a+m*-l-_*-u,this.y=m*d+v*-u+_*-a-h*-l,this.z=_*d+v*-l+h*-u-m*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,u=t.x,l=t.y,d=t.z;return this.x=r*d-a*l,this.y=a*u-n*d,this.z=n*l-r*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dl.copy(this).projectOnVector(e),this.sub(Dl)}reflect(e){return this.sub(Dl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dl=new B,mh=new Ts;class Es{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,a=-1/0,u=-1/0,l=-1/0;for(let d=0,h=e.length;d<h;d+=3){const m=e[d],_=e[d+1],v=e[d+2];m<t&&(t=m),_<n&&(n=_),v<r&&(r=v),m>a&&(a=m),_>u&&(u=_),v>l&&(l=v)}return this.min.set(t,n,r),this.max.set(a,u,l),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,a=-1/0,u=-1/0,l=-1/0;for(let d=0,h=e.count;d<h;d++){const m=e.getX(d),_=e.getY(d),v=e.getZ(d);m<t&&(t=m),_<n&&(n=_),v<r&&(r=v),m>a&&(a=m),_>u&&(u=_),v>l&&(l=v)}return this.min.set(t,n,r),this.max.set(a,u,l),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const a=n.attributes.position;for(let u=0,l=a.count;u<l;u++)ki.fromBufferAttribute(a,u).applyMatrix4(e.matrixWorld),this.expandByPoint(ki)}else n.boundingBox===null&&n.computeBoundingBox(),Ll.copy(n.boundingBox),Ll.applyMatrix4(e.matrixWorld),this.union(Ll);const r=e.children;for(let a=0,u=r.length;a<u;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),fa.subVectors(this.max,gs),vr.subVectors(e.a,gs),xr.subVectors(e.b,gs),yr.subVectors(e.c,gs),ii.subVectors(xr,vr),ri.subVectors(yr,xr),Vi.subVectors(vr,yr);let t=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-Vi.z,Vi.y,ii.z,0,-ii.x,ri.z,0,-ri.x,Vi.z,0,-Vi.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-Vi.y,Vi.x,0];return!Rl(t,vr,xr,yr,fa)||(t=[1,0,0,0,1,0,0,0,1],!Rl(t,vr,xr,yr,fa))?!1:(pa.crossVectors(ii,ri),t=[pa.x,pa.y,pa.z],Rl(t,vr,xr,yr,fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ki.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nn=[new B,new B,new B,new B,new B,new B,new B,new B],ki=new B,Ll=new Es,vr=new B,xr=new B,yr=new B,ii=new B,ri=new B,Vi=new B,gs=new B,fa=new B,pa=new B,Gi=new B;function Rl(o,e,t,n,r){for(let a=0,u=o.length-3;a<=u;a+=3){Gi.fromArray(o,a);const l=r.x*Math.abs(Gi.x)+r.y*Math.abs(Gi.y)+r.z*Math.abs(Gi.z),d=e.dot(Gi),h=t.dot(Gi),m=n.dot(Gi);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>l)return!1}return!0}const h0=new Es,gh=new B,ma=new B,Il=new B;class lc{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):h0.setFromPoints(e).getCenter(n);let r=0;for(let a=0,u=e.length;a<u;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Il.subVectors(e,this.center);const t=Il.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(Il.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?ma.set(0,0,1).multiplyScalar(e.radius):ma.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(gh.copy(e.center).add(ma)),this.expandByPoint(gh.copy(e.center).sub(ma)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new B,Ol=new B,ga=new B,si=new B,Fl=new B,_a=new B,Nl=new B;class d0{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.direction).multiplyScalar(t).add(this.origin),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ol.copy(e).add(t).multiplyScalar(.5),ga.copy(t).sub(e).normalize(),si.copy(this.origin).sub(Ol);const a=e.distanceTo(t)*.5,u=-this.direction.dot(ga),l=si.dot(this.direction),d=-si.dot(ga),h=si.lengthSq(),m=Math.abs(1-u*u);let _,v,y,w;if(m>0)if(_=u*d-l,v=u*l-d,w=a*m,_>=0)if(v>=-w)if(v<=w){const x=1/m;_*=x,v*=x,y=_*(_+u*v+2*l)+v*(u*_+v+2*d)+h}else v=a,_=Math.max(0,-(u*v+l)),y=-_*_+v*(v+2*d)+h;else v=-a,_=Math.max(0,-(u*v+l)),y=-_*_+v*(v+2*d)+h;else v<=-w?(_=Math.max(0,-(-u*a+l)),v=_>0?-a:Math.min(Math.max(-a,-d),a),y=-_*_+v*(v+2*d)+h):v<=w?(_=0,v=Math.min(Math.max(-a,-d),a),y=v*(v+2*d)+h):(_=Math.max(0,-(u*a+l)),v=_>0?a:Math.min(Math.max(-a,-d),a),y=-_*_+v*(v+2*d)+h);else v=u>0?-a:a,_=Math.max(0,-(u*v+l)),y=-_*_+v*(v+2*d)+h;return n&&n.copy(this.direction).multiplyScalar(_).add(this.origin),r&&r.copy(ga).multiplyScalar(v).add(Ol),y}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),r=zn.dot(zn)-n*n,a=e.radius*e.radius;if(r>a)return null;const u=Math.sqrt(a-r),l=n-u,d=n+u;return l<0&&d<0?null:l<0?this.at(d,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,u,l,d;const h=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(n=(e.min.x-v.x)*h,r=(e.max.x-v.x)*h):(n=(e.max.x-v.x)*h,r=(e.min.x-v.x)*h),m>=0?(a=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(a=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),n>u||a>r||((a>n||n!==n)&&(n=a),(u<r||r!==r)&&(r=u),_>=0?(l=(e.min.z-v.z)*_,d=(e.max.z-v.z)*_):(l=(e.max.z-v.z)*_,d=(e.min.z-v.z)*_),n>d||l>r)||((l>n||n!==n)&&(n=l),(d<r||r!==r)&&(r=d),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,r,a){Fl.subVectors(t,e),_a.subVectors(n,e),Nl.crossVectors(Fl,_a);let u=this.direction.dot(Nl),l;if(u>0){if(r)return null;l=1}else if(u<0)l=-1,u=-u;else return null;si.subVectors(this.origin,e);const d=l*this.direction.dot(_a.crossVectors(si,_a));if(d<0)return null;const h=l*this.direction.dot(Fl.cross(si));if(h<0||d+h>u)return null;const m=-l*si.dot(Nl);return m<0?null:this.at(m/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,a,u,l,d,h,m,_,v,y,w,x,p){const T=this.elements;return T[0]=e,T[4]=t,T[8]=n,T[12]=r,T[1]=a,T[5]=u,T[9]=l,T[13]=d,T[2]=h,T[6]=m,T[10]=_,T[14]=v,T[3]=y,T[7]=w,T[11]=x,T[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/br.setFromMatrixColumn(e,0).length(),a=1/br.setFromMatrixColumn(e,1).length(),u=1/br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,r=e.y,a=e.z,u=Math.cos(n),l=Math.sin(n),d=Math.cos(r),h=Math.sin(r),m=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const v=u*m,y=u*_,w=l*m,x=l*_;t[0]=d*m,t[4]=-d*_,t[8]=h,t[1]=y+w*h,t[5]=v-x*h,t[9]=-l*d,t[2]=x-v*h,t[6]=w+y*h,t[10]=u*d}else if(e.order==="YXZ"){const v=d*m,y=d*_,w=h*m,x=h*_;t[0]=v+x*l,t[4]=w*l-y,t[8]=u*h,t[1]=u*_,t[5]=u*m,t[9]=-l,t[2]=y*l-w,t[6]=x+v*l,t[10]=u*d}else if(e.order==="ZXY"){const v=d*m,y=d*_,w=h*m,x=h*_;t[0]=v-x*l,t[4]=-u*_,t[8]=w+y*l,t[1]=y+w*l,t[5]=u*m,t[9]=x-v*l,t[2]=-u*h,t[6]=l,t[10]=u*d}else if(e.order==="ZYX"){const v=u*m,y=u*_,w=l*m,x=l*_;t[0]=d*m,t[4]=w*h-y,t[8]=v*h+x,t[1]=d*_,t[5]=x*h+v,t[9]=y*h-w,t[2]=-h,t[6]=l*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,y=u*h,w=l*d,x=l*h;t[0]=d*m,t[4]=x-v*_,t[8]=w*_+y,t[1]=_,t[5]=u*m,t[9]=-l*m,t[2]=-h*m,t[6]=y*_+w,t[10]=v-x*_}else if(e.order==="XZY"){const v=u*d,y=u*h,w=l*d,x=l*h;t[0]=d*m,t[4]=-_,t[8]=h*m,t[1]=v*_+x,t[5]=u*m,t[9]=y*_-w,t[2]=w*_-y,t[6]=l*m,t[10]=x*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f0,e,p0)}lookAt(e,t,n){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ai.crossVectors(n,tn),ai.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ai.crossVectors(n,tn)),ai.normalize(),va.crossVectors(tn,ai),r[0]=ai.x,r[4]=va.x,r[8]=tn.x,r[1]=ai.y,r[5]=va.y,r[9]=tn.y,r[2]=ai.z,r[6]=va.z,r[10]=tn.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,u=n[0],l=n[4],d=n[8],h=n[12],m=n[1],_=n[5],v=n[9],y=n[13],w=n[2],x=n[6],p=n[10],T=n[14],R=n[3],F=n[7],P=n[11],L=n[15],U=r[0],V=r[4],A=r[8],N=r[12],ee=r[1],q=r[5],be=r[9],pe=r[13],G=r[2],K=r[6],J=r[10],se=r[14],ae=r[3],j=r[7],ie=r[11],le=r[15];return a[0]=u*U+l*ee+d*G+h*ae,a[4]=u*V+l*q+d*K+h*j,a[8]=u*A+l*be+d*J+h*ie,a[12]=u*N+l*pe+d*se+h*le,a[1]=m*U+_*ee+v*G+y*ae,a[5]=m*V+_*q+v*K+y*j,a[9]=m*A+_*be+v*J+y*ie,a[13]=m*N+_*pe+v*se+y*le,a[2]=w*U+x*ee+p*G+T*ae,a[6]=w*V+x*q+p*K+T*j,a[10]=w*A+x*be+p*J+T*ie,a[14]=w*N+x*pe+p*se+T*le,a[3]=R*U+F*ee+P*G+L*ae,a[7]=R*V+F*q+P*K+L*j,a[11]=R*A+F*be+P*J+L*ie,a[15]=R*N+F*pe+P*se+L*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],u=e[1],l=e[5],d=e[9],h=e[13],m=e[2],_=e[6],v=e[10],y=e[14],w=e[3],x=e[7],p=e[11],T=e[15];return w*(+a*d*_-r*h*_-a*l*v+n*h*v+r*l*y-n*d*y)+x*(+t*d*y-t*h*v+a*u*v-r*u*y+r*h*m-a*d*m)+p*(+t*h*_-t*l*y-a*u*_+n*u*y+a*l*m-n*h*m)+T*(-r*l*m-t*d*_+t*l*v+r*u*_-n*u*v+n*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],l=e[5],d=e[6],h=e[7],m=e[8],_=e[9],v=e[10],y=e[11],w=e[12],x=e[13],p=e[14],T=e[15],R=_*p*h-x*v*h+x*d*y-l*p*y-_*d*T+l*v*T,F=w*v*h-m*p*h-w*d*y+u*p*y+m*d*T-u*v*T,P=m*x*h-w*_*h+w*l*y-u*x*y-m*l*T+u*_*T,L=w*_*d-m*x*d-w*l*v+u*x*v+m*l*p-u*_*p,U=t*R+n*F+r*P+a*L;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/U;return e[0]=R*V,e[1]=(x*v*a-_*p*a-x*r*y+n*p*y+_*r*T-n*v*T)*V,e[2]=(l*p*a-x*d*a+x*r*h-n*p*h-l*r*T+n*d*T)*V,e[3]=(_*d*a-l*v*a-_*r*h+n*v*h+l*r*y-n*d*y)*V,e[4]=F*V,e[5]=(m*p*a-w*v*a+w*r*y-t*p*y-m*r*T+t*v*T)*V,e[6]=(w*d*a-u*p*a-w*r*h+t*p*h+u*r*T-t*d*T)*V,e[7]=(u*v*a-m*d*a+m*r*h-t*v*h-u*r*y+t*d*y)*V,e[8]=P*V,e[9]=(w*_*a-m*x*a-w*n*y+t*x*y+m*n*T-t*_*T)*V,e[10]=(u*x*a-w*l*a+w*n*h-t*x*h-u*n*T+t*l*T)*V,e[11]=(m*l*a-u*_*a-m*n*h+t*_*h+u*n*y-t*l*y)*V,e[12]=L*V,e[13]=(m*x*r-w*_*r+w*n*v-t*x*v-m*n*p+t*_*p)*V,e[14]=(w*l*r-u*x*r-w*n*d+t*x*d+u*n*p-t*l*p)*V,e[15]=(u*_*r-m*l*r+m*n*d-t*_*d-u*n*v+t*l*v)*V,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,u=e.x,l=e.y,d=e.z,h=a*u,m=a*l;return this.set(h*u+n,h*l-r*d,h*d+r*l,0,h*l+r*d,m*l+n,m*d-r*u,0,h*d-r*l,m*d+r*u,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,u){return this.set(1,n,a,0,e,1,u,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,u=t._y,l=t._z,d=t._w,h=a+a,m=u+u,_=l+l,v=a*h,y=a*m,w=a*_,x=u*m,p=u*_,T=l*_,R=d*h,F=d*m,P=d*_,L=n.x,U=n.y,V=n.z;return r[0]=(1-(x+T))*L,r[1]=(y+P)*L,r[2]=(w-F)*L,r[3]=0,r[4]=(y-P)*U,r[5]=(1-(v+T))*U,r[6]=(p+R)*U,r[7]=0,r[8]=(w+F)*V,r[9]=(p-R)*V,r[10]=(1-(v+x))*V,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=br.set(r[0],r[1],r[2]).length();const u=br.set(r[4],r[5],r[6]).length(),l=br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],vn.copy(this);const h=1/a,m=1/u,_=1/l;return vn.elements[0]*=h,vn.elements[1]*=h,vn.elements[2]*=h,vn.elements[4]*=m,vn.elements[5]*=m,vn.elements[6]*=m,vn.elements[8]*=_,vn.elements[9]*=_,vn.elements[10]*=_,t.setFromRotationMatrix(vn),n.x=a,n.y=u,n.z=l,this}makePerspective(e,t,n,r,a,u){u===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const l=this.elements,d=2*a/(t-e),h=2*a/(n-r),m=(t+e)/(t-e),_=(n+r)/(n-r),v=-(u+a)/(u-a),y=-2*u*a/(u-a);return l[0]=d,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=h,l[9]=_,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,u){const l=this.elements,d=1/(t-e),h=1/(n-r),m=1/(u-a),_=(t+e)*d,v=(n+r)*h,y=(u+a)*m;return l[0]=2*d,l[4]=0,l[8]=0,l[12]=-_,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=-2*m,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const br=new B,vn=new Tt,f0=new B(0,0,0),p0=new B(1,1,1),ai=new B,va=new B,tn=new B,_h=new Tt,vh=new Ts;class As{constructor(e=0,t=0,n=0,r=As.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],u=r[4],l=r[8],d=r[1],h=r[5],m=r[9],_=r[2],v=r[6],y=r[10];switch(t){case"XYZ":this._y=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(l,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(rn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-rn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(l,y));break;case"XZY":this._z=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _h.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_h,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vh.setFromEuler(this),this.setFromQuaternion(vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}As.DefaultOrder="XYZ";As.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ud{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let m0=0;const xh=new B,Sr=new Ts,Un=new Tt,xa=new B,_s=new B,g0=new B,_0=new Ts,yh=new B(1,0,0),bh=new B(0,1,0),Sh=new B(0,0,1),v0={type:"added"},Mh={type:"removed"};class Yt extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DefaultUp.clone();const e=new B,t=new As,n=new Ts,r=new B(1,1,1);function a(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new fn}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Yt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new ud,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(yh,e)}rotateY(e){return this.rotateOnAxis(bh,e)}rotateZ(e){return this.rotateOnAxis(Sh,e)}translateOnAxis(e,t){return xh.copy(e).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yh,e)}translateY(e){return this.translateOnAxis(bh,e)}translateZ(e){return this.translateOnAxis(Sh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xa.copy(e):xa.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(_s,xa,this.up):Un.lookAt(xa,_s,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),Sr.setFromRotationMatrix(Un),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(v0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Mh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,g0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,_0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,u=r.length;a<u;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(l,d){return l[d.uuid]===void 0&&(l[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const d=l.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const _=d[h];a(e.shapes,_)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let d=0,h=this.material.length;d<h;d++)l.push(a(e.materials,this.material[d]));r.material=l}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const d=this.animations[l];r.animations.push(a(e.animations,d))}}if(t){const l=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),_=u(e.shapes),v=u(e.skeletons),y=u(e.animations),w=u(e.nodes);l.length>0&&(n.geometries=l),d.length>0&&(n.materials=d),h.length>0&&(n.textures=h),m.length>0&&(n.images=m),_.length>0&&(n.shapes=_),v.length>0&&(n.skeletons=v),y.length>0&&(n.animations=y),w.length>0&&(n.nodes=w)}return n.object=r,n;function u(l){const d=[];for(const h in l){const m=l[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Yt.DefaultUp=new B(0,1,0);Yt.DefaultMatrixAutoUpdate=!0;const xn=new B,Bn=new B,zl=new B,kn=new B,Mr=new B,wr=new B,wh=new B,Ul=new B,Bl=new B,kl=new B;class Gn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xn.subVectors(e,t),r.cross(xn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){xn.subVectors(r,t),Bn.subVectors(n,t),zl.subVectors(e,t);const u=xn.dot(xn),l=xn.dot(Bn),d=xn.dot(zl),h=Bn.dot(Bn),m=Bn.dot(zl),_=u*h-l*l;if(_===0)return a.set(-2,-1,-1);const v=1/_,y=(h*d-l*m)*v,w=(u*m-l*d)*v;return a.set(1-y-w,w,y)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,kn),kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getUV(e,t,n,r,a,u,l,d){return this.getBarycoord(e,t,n,r,kn),d.set(0,0),d.addScaledVector(a,kn.x),d.addScaledVector(u,kn.y),d.addScaledVector(l,kn.z),d}static isFrontFacing(e,t,n,r){return xn.subVectors(n,t),Bn.subVectors(e,t),xn.cross(Bn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),xn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,a){return Gn.getUV(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let u,l;Mr.subVectors(r,n),wr.subVectors(a,n),Ul.subVectors(e,n);const d=Mr.dot(Ul),h=wr.dot(Ul);if(d<=0&&h<=0)return t.copy(n);Bl.subVectors(e,r);const m=Mr.dot(Bl),_=wr.dot(Bl);if(m>=0&&_<=m)return t.copy(r);const v=d*_-m*h;if(v<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(n).addScaledVector(Mr,u);kl.subVectors(e,a);const y=Mr.dot(kl),w=wr.dot(kl);if(w>=0&&y<=w)return t.copy(a);const x=y*h-d*w;if(x<=0&&h>=0&&w<=0)return l=h/(h-w),t.copy(n).addScaledVector(wr,l);const p=m*w-y*_;if(p<=0&&_-m>=0&&y-w>=0)return wh.subVectors(a,r),l=(_-m)/(_-m+(y-w)),t.copy(r).addScaledVector(wh,l);const T=1/(p+x+v);return u=x*T,l=v*T,t.copy(n).addScaledVector(Mr,u).addScaledVector(wr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let x0=0;class Cs extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=Ir,this.side=bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Qh,this.blendDst=ed,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ql,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wl,this.stencilZFail=wl,this.stencilZPass=wl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===mv;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(n.blending=this.blending),this.side!==bs&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(a){const u=[];for(const l in a){const d=a[l];delete d.metadata,u.push(d)}return u}if(t){const a=r(e.textures),u=r(e.images);a.length>0&&(n.textures=a),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hd extends Cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new B,ya=new tt;class Pn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=hh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let r=0,a=e.length;r<a;r++){let u=e[r];u===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),u=new st),t[n++]=u.r,t[n++]=u.g,t[n++]=u.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let r=0,a=e.length;r<a;r++){let u=e[r];u===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),u=new tt),t[n++]=u.x,t[n++]=u.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let r=0,a=e.length;r<a;r++){let u=e[r];u===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),u=new B),t[n++]=u.x,t[n++]=u.y,t[n++]=u.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let r=0,a=e.length;r<a;r++){let u=e[r];u===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),u=new wt),t[n++]=u.x,t[n++]=u.y,t[n++]=u.z,t[n++]=u.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class dd extends Pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fd extends Pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dn extends Pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let y0=0;const un=new Tt,Vl=new Yt,Tr=new B,nn=new Es,vs=new Es,Ct=new B;class hi extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sd(e)?fd:dd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new fn().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return Vl.lookAt(e),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Dn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];nn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const l=t[a];vs.setFromBufferAttribute(l),this.morphTargetsRelative?(Ct.addVectors(nn.min,vs.min),nn.expandByPoint(Ct),Ct.addVectors(nn.max,vs.max),nn.expandByPoint(Ct)):(nn.expandByPoint(vs.min),nn.expandByPoint(vs.max))}nn.getCenter(n);let r=0;for(let a=0,u=e.count;a<u;a++)Ct.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Ct));if(t)for(let a=0,u=t.length;a<u;a++){const l=t[a],d=this.morphTargetsRelative;for(let h=0,m=l.count;h<m;h++)Ct.fromBufferAttribute(l,h),d&&(Tr.fromBufferAttribute(e,h),Ct.add(Tr)),r=Math.max(r,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,u=t.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*l),4));const d=this.getAttribute("tangent").array,h=[],m=[];for(let ee=0;ee<l;ee++)h[ee]=new B,m[ee]=new B;const _=new B,v=new B,y=new B,w=new tt,x=new tt,p=new tt,T=new B,R=new B;function F(ee,q,be){_.fromArray(r,ee*3),v.fromArray(r,q*3),y.fromArray(r,be*3),w.fromArray(u,ee*2),x.fromArray(u,q*2),p.fromArray(u,be*2),v.sub(_),y.sub(_),x.sub(w),p.sub(w);const pe=1/(x.x*p.y-p.x*x.y);!isFinite(pe)||(T.copy(v).multiplyScalar(p.y).addScaledVector(y,-x.y).multiplyScalar(pe),R.copy(y).multiplyScalar(x.x).addScaledVector(v,-p.x).multiplyScalar(pe),h[ee].add(T),h[q].add(T),h[be].add(T),m[ee].add(R),m[q].add(R),m[be].add(R))}let P=this.groups;P.length===0&&(P=[{start:0,count:n.length}]);for(let ee=0,q=P.length;ee<q;++ee){const be=P[ee],pe=be.start,G=be.count;for(let K=pe,J=pe+G;K<J;K+=3)F(n[K+0],n[K+1],n[K+2])}const L=new B,U=new B,V=new B,A=new B;function N(ee){V.fromArray(a,ee*3),A.copy(V);const q=h[ee];L.copy(q),L.sub(V.multiplyScalar(V.dot(q))).normalize(),U.crossVectors(A,q);const pe=U.dot(m[ee])<0?-1:1;d[ee*4]=L.x,d[ee*4+1]=L.y,d[ee*4+2]=L.z,d[ee*4+3]=pe}for(let ee=0,q=P.length;ee<q;++ee){const be=P[ee],pe=be.start,G=be.count;for(let K=pe,J=pe+G;K<J;K+=3)N(n[K+0]),N(n[K+1]),N(n[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,y=n.count;v<y;v++)n.setXYZ(v,0,0,0);const r=new B,a=new B,u=new B,l=new B,d=new B,h=new B,m=new B,_=new B;if(e)for(let v=0,y=e.count;v<y;v+=3){const w=e.getX(v+0),x=e.getX(v+1),p=e.getX(v+2);r.fromBufferAttribute(t,w),a.fromBufferAttribute(t,x),u.fromBufferAttribute(t,p),m.subVectors(u,a),_.subVectors(r,a),m.cross(_),l.fromBufferAttribute(n,w),d.fromBufferAttribute(n,x),h.fromBufferAttribute(n,p),l.add(m),d.add(m),h.add(m),n.setXYZ(w,l.x,l.y,l.z),n.setXYZ(x,d.x,d.y,d.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let v=0,y=t.count;v<y;v+=3)r.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,a),_.subVectors(r,a),m.cross(_),n.setXYZ(v+0,m.x,m.y,m.z),n.setXYZ(v+1,m.x,m.y,m.z),n.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const r in n){if(e.attributes[r]===void 0)continue;const u=n[r].array,l=e.attributes[r],d=l.array,h=l.itemSize*t,m=Math.min(d.length,u.length-h);for(let _=0,v=h;_<m;_++,v++)u[v]=d[_]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(l,d){const h=l.array,m=l.itemSize,_=l.normalized,v=new h.constructor(d.length*m);let y=0,w=0;for(let x=0,p=d.length;x<p;x++){l.isInterleavedBufferAttribute?y=d[x]*l.data.stride+l.offset:y=d[x]*m;for(let T=0;T<m;T++)v[w++]=h[y++]}return new Pn(v,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hi,n=this.index.array,r=this.attributes;for(const l in r){const d=r[l],h=e(d,n);t.setAttribute(l,h)}const a=this.morphAttributes;for(const l in a){const d=[],h=a[l];for(let m=0,_=h.length;m<_;m++){const v=h[m],y=e(v,n);d.push(y)}t.morphAttributes[l]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let l=0,d=u.length;l<d;l++){const h=u[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const h=n[d];e.data.attributes[d]=h.toJSON(e.data)}const r={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let _=0,v=h.length;_<v;_++){const y=h[_];m.push(y.toJSON(e.data))}m.length>0&&(r[d]=m,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const m=r[h];this.setAttribute(h,m.clone(t))}const a=e.morphAttributes;for(const h in a){const m=[],_=a[h];for(let v=0,y=_.length;v<y;v++)m.push(_[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Th=new Tt,Er=new d0,Gl=new lc,oi=new B,li=new B,ci=new B,Hl=new B,Wl=new B,jl=new B,ba=new B,Sa=new B,Ma=new B,wa=new tt,Ta=new tt,Ea=new tt,ql=new B,Aa=new B;class Hn extends Yt{constructor(e=new hi,t=new hd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=r.length;a<u;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Gl.copy(n.boundingSphere),Gl.applyMatrix4(a),e.ray.intersectsSphere(Gl)===!1)||(Th.copy(a).invert(),Er.copy(e.ray).applyMatrix4(Th),n.boundingBox!==null&&Er.intersectsBox(n.boundingBox)===!1))return;let u;const l=n.index,d=n.attributes.position,h=n.morphAttributes.position,m=n.morphTargetsRelative,_=n.attributes.uv,v=n.attributes.uv2,y=n.groups,w=n.drawRange;if(l!==null)if(Array.isArray(r))for(let x=0,p=y.length;x<p;x++){const T=y[x],R=r[T.materialIndex],F=Math.max(T.start,w.start),P=Math.min(l.count,Math.min(T.start+T.count,w.start+w.count));for(let L=F,U=P;L<U;L+=3){const V=l.getX(L),A=l.getX(L+1),N=l.getX(L+2);u=Ca(this,R,e,Er,d,h,m,_,v,V,A,N),u&&(u.faceIndex=Math.floor(L/3),u.face.materialIndex=T.materialIndex,t.push(u))}}else{const x=Math.max(0,w.start),p=Math.min(l.count,w.start+w.count);for(let T=x,R=p;T<R;T+=3){const F=l.getX(T),P=l.getX(T+1),L=l.getX(T+2);u=Ca(this,r,e,Er,d,h,m,_,v,F,P,L),u&&(u.faceIndex=Math.floor(T/3),t.push(u))}}else if(d!==void 0)if(Array.isArray(r))for(let x=0,p=y.length;x<p;x++){const T=y[x],R=r[T.materialIndex],F=Math.max(T.start,w.start),P=Math.min(d.count,Math.min(T.start+T.count,w.start+w.count));for(let L=F,U=P;L<U;L+=3){const V=L,A=L+1,N=L+2;u=Ca(this,R,e,Er,d,h,m,_,v,V,A,N),u&&(u.faceIndex=Math.floor(L/3),u.face.materialIndex=T.materialIndex,t.push(u))}}else{const x=Math.max(0,w.start),p=Math.min(d.count,w.start+w.count);for(let T=x,R=p;T<R;T+=3){const F=T,P=T+1,L=T+2;u=Ca(this,r,e,Er,d,h,m,_,v,F,P,L),u&&(u.faceIndex=Math.floor(T/3),t.push(u))}}}}function b0(o,e,t,n,r,a,u,l){let d;if(e.side===bn?d=n.intersectTriangle(u,a,r,!0,l):d=n.intersectTriangle(r,a,u,e.side!==Fr,l),d===null)return null;Aa.copy(l),Aa.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(Aa);return h<t.near||h>t.far?null:{distance:h,point:Aa.clone(),object:o}}function Ca(o,e,t,n,r,a,u,l,d,h,m,_){oi.fromBufferAttribute(r,h),li.fromBufferAttribute(r,m),ci.fromBufferAttribute(r,_);const v=o.morphTargetInfluences;if(a&&v){ba.set(0,0,0),Sa.set(0,0,0),Ma.set(0,0,0);for(let w=0,x=a.length;w<x;w++){const p=v[w],T=a[w];p!==0&&(Hl.fromBufferAttribute(T,h),Wl.fromBufferAttribute(T,m),jl.fromBufferAttribute(T,_),u?(ba.addScaledVector(Hl,p),Sa.addScaledVector(Wl,p),Ma.addScaledVector(jl,p)):(ba.addScaledVector(Hl.sub(oi),p),Sa.addScaledVector(Wl.sub(li),p),Ma.addScaledVector(jl.sub(ci),p)))}oi.add(ba),li.add(Sa),ci.add(Ma)}o.isSkinnedMesh&&(o.boneTransform(h,oi),o.boneTransform(m,li),o.boneTransform(_,ci));const y=b0(o,e,t,n,oi,li,ci,ql);if(y){l&&(wa.fromBufferAttribute(l,h),Ta.fromBufferAttribute(l,m),Ea.fromBufferAttribute(l,_),y.uv=Gn.getUV(ql,oi,li,ci,wa,Ta,Ea,new tt)),d&&(wa.fromBufferAttribute(d,h),Ta.fromBufferAttribute(d,m),Ea.fromBufferAttribute(d,_),y.uv2=Gn.getUV(ql,oi,li,ci,wa,Ta,Ea,new tt));const w={a:h,b:m,c:_,normal:new B,materialIndex:0};Gn.getNormal(oi,li,ci,w.normal),y.face=w}return y}class Ps extends hi{constructor(e=1,t=1,n=1,r=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:u};const l=this;r=Math.floor(r),a=Math.floor(a),u=Math.floor(u);const d=[],h=[],m=[],_=[];let v=0,y=0;w("z","y","x",-1,-1,n,t,e,u,a,0),w("z","y","x",1,-1,n,t,-e,u,a,1),w("x","z","y",1,1,e,n,t,r,u,2),w("x","z","y",1,-1,e,n,-t,r,u,3),w("x","y","z",1,-1,e,t,n,r,a,4),w("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(d),this.setAttribute("position",new Dn(h,3)),this.setAttribute("normal",new Dn(m,3)),this.setAttribute("uv",new Dn(_,2));function w(x,p,T,R,F,P,L,U,V,A,N){const ee=P/V,q=L/A,be=P/2,pe=L/2,G=U/2,K=V+1,J=A+1;let se=0,ae=0;const j=new B;for(let ie=0;ie<J;ie++){const le=ie*q-pe;for(let oe=0;oe<K;oe++){const ce=oe*ee-be;j[x]=ce*R,j[p]=le*F,j[T]=G,h.push(j.x,j.y,j.z),j[x]=0,j[p]=0,j[T]=U>0?1:-1,m.push(j.x,j.y,j.z),_.push(oe/V),_.push(1-ie/A),se+=1}}for(let ie=0;ie<A;ie++)for(let le=0;le<V;le++){const oe=v+le+K*ie,ce=v+le+K*(ie+1),Se=v+(le+1)+K*(ie+1),De=v+(le+1)+K*ie;d.push(oe,ce,De),d.push(ce,Se,De),ae+=6}l.addGroup(y,ae,N),y+=ae,v+=se}}static fromJSON(e){return new Ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Br(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const r=o[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Nt(o){const e={};for(let t=0;t<o.length;t++){const n=Br(o[t]);for(const r in n)e[r]=n[r]}return e}const S0={clone:Br,merge:Nt};var M0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends Cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=M0,this.fragmentShader=w0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?t.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[r]={type:"m4",value:u.toArray()}:t.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pd extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class dn extends pd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fh*2*Math.atan(Math.tan(Tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tl*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;a+=u.offsetX*r/d,t-=u.offsetY*n/h,r*=u.width/d,n*=u.height/h}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ar=90,Cr=1;class T0 extends Yt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const r=new dn(Ar,Cr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new B(1,0,0)),this.add(r);const a=new dn(Ar,Cr,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new B(-1,0,0)),this.add(a);const u=new dn(Ar,Cr,e,t);u.layers=this.layers,u.up.set(0,0,1),u.lookAt(new B(0,1,0)),this.add(u);const l=new dn(Ar,Cr,e,t);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(new B(0,-1,0)),this.add(l);const d=new dn(Ar,Cr,e,t);d.layers=this.layers,d.up.set(0,-1,0),d.lookAt(new B(0,0,1)),this.add(d);const h=new dn(Ar,Cr,e,t);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new B(0,0,-1)),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,a,u,l,d,h]=this.children,m=e.getRenderTarget(),_=e.toneMapping,v=e.xr.enabled;e.toneMapping=Wn,e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,u),e.setRenderTarget(n,3),e.render(t,l),e.setRenderTarget(n,4),e.render(t,d),n.texture.generateMipmaps=y,e.setRenderTarget(n,5),e.render(t,h),e.setRenderTarget(m),e.toneMapping=_,e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class md extends Sn{constructor(e,t,n,r,a,u,l,d,h,m){e=e!==void 0?e:[],t=t!==void 0?t:Nr,super(e,t,n,r,a,u,l,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class E0 extends tr{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new md(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ps(5,5,5),a=new nr({name:"CubemapFromEquirect",uniforms:Br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:ui});a.uniforms.tEquirect.value=t;const u=new Hn(r,a),l=t.minFilter;return t.minFilter===Na&&(t.minFilter=hn),new T0(1,10,this).update(e,u),t.minFilter=l,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,r);e.setRenderTarget(a)}}const Xl=new B,A0=new B,C0=new fn;class Hi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Xl.subVectors(n,t).cross(A0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Xl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(n).multiplyScalar(a).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||C0.getNormalMatrix(e),r=this.coplanarPoint(Xl).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new lc,Pa=new B;class cc{constructor(e=new Hi,t=new Hi,n=new Hi,r=new Hi,a=new Hi,u=new Hi){this.planes=[e,t,n,r,a,u]}set(e,t,n,r,a,u){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(a),l[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],a=n[1],u=n[2],l=n[3],d=n[4],h=n[5],m=n[6],_=n[7],v=n[8],y=n[9],w=n[10],x=n[11],p=n[12],T=n[13],R=n[14],F=n[15];return t[0].setComponents(l-r,_-d,x-v,F-p).normalize(),t[1].setComponents(l+r,_+d,x+v,F+p).normalize(),t[2].setComponents(l+a,_+h,x+y,F+T).normalize(),t[3].setComponents(l-a,_-h,x-y,F-T).normalize(),t[4].setComponents(l-u,_-m,x-w,F-R).normalize(),t[5].setComponents(l+u,_+m,x+w,F+R).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Pa.x=r.normal.x>0?e.max.x:e.min.x,Pa.y=r.normal.y>0?e.max.y:e.min.y,Pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gd(){let o=null,e=!1,t=null,n=null;function r(a,u){t(a,u),n=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function P0(o,e){const t=e.isWebGL2,n=new WeakMap;function r(h,m){const _=h.array,v=h.usage,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,_,v),h.onUploadCallback();let w;if(_ instanceof Float32Array)w=5126;else if(_ instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)w=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=5123;else if(_ instanceof Int16Array)w=5122;else if(_ instanceof Uint32Array)w=5125;else if(_ instanceof Int32Array)w=5124;else if(_ instanceof Int8Array)w=5120;else if(_ instanceof Uint8Array)w=5121;else if(_ instanceof Uint8ClampedArray)w=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:y,type:w,bytesPerElement:_.BYTES_PER_ELEMENT,version:h.version}}function a(h,m,_){const v=m.array,y=m.updateRange;o.bindBuffer(_,h),y.count===-1?o.bufferSubData(_,0,v):(t?o.bufferSubData(_,y.offset*v.BYTES_PER_ELEMENT,v,y.offset,y.count):o.bufferSubData(_,y.offset*v.BYTES_PER_ELEMENT,v.subarray(y.offset,y.offset+y.count)),y.count=-1)}function u(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=n.get(h);m&&(o.deleteBuffer(m.buffer),n.delete(h))}function d(h,m){if(h.isGLBufferAttribute){const v=n.get(h);(!v||v.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const _=n.get(h);_===void 0?n.set(h,r(h,m)):_.version<h.version&&(a(_.buffer,h,m),_.version=h.version)}return{get:u,remove:l,update:d}}class uc extends hi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,u=t/2,l=Math.floor(n),d=Math.floor(r),h=l+1,m=d+1,_=e/l,v=t/d,y=[],w=[],x=[],p=[];for(let T=0;T<m;T++){const R=T*v-u;for(let F=0;F<h;F++){const P=F*_-a;w.push(P,-R,0),x.push(0,0,1),p.push(F/l),p.push(1-T/d)}}for(let T=0;T<d;T++)for(let R=0;R<l;R++){const F=R+h*T,P=R+h*(T+1),L=R+1+h*(T+1),U=R+1+h*T;y.push(F,P,U),y.push(P,L,U)}this.setIndex(y),this.setAttribute("position",new Dn(w,3)),this.setAttribute("normal",new Dn(x,3)),this.setAttribute("uv",new Dn(p,2))}static fromJSON(e){return new uc(e.width,e.height,e.widthSegments,e.heightSegments)}}var D0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,L0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,I0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,F0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N0="vec3 transformed = vec3( position );",z0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,B0=`#ifdef USE_IRIDESCENCE
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
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
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
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,k0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Y0=`#define PI 3.141592653589793
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
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,K0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,Z0=`vec3 transformedNormal = objectNormal;
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
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ix=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rx=`#ifdef USE_ENVMAP
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
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,sx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ax=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,px=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gx=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,_x=`uniform bool receiveShadow;
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
#endif`,vx=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Mx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,wx=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
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
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
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
}`,Tx=`
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Cx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Px=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Lx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ux=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bx=`#ifdef USE_MORPHNORMALS
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
#endif`,kx=`#ifdef USE_MORPHTARGETS
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
#endif`,Vx=`#ifdef USE_MORPHTARGETS
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
#endif`,Gx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Hx=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,$x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ey=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ty=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ny=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ry=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ay=`#ifdef USE_SHADOWMAP
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
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
#endif`,oy=`#ifdef USE_SHADOWMAP
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
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
#endif`,ly=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,cy=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
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
}`,uy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hy=`#ifdef USE_SKINNING
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
#endif`,dy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fy=`#ifdef USE_SKINNING
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
#endif`,py=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,my=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_y=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vy=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,xy=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,yy=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,by=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Sy=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,My=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,wy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ty=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ey=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ay=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cy=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dy=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ly=`#include <common>
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
}`,Ry=`#if DEPTH_PACKING == 3200
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
}`,Iy=`#define DISTANCE
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
}`,Oy=`#define DISTANCE
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
}`,Fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ny=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,By=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
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
}`,ky=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
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
}`,Vy=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gy=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
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
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`#define MATCAP
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
}`,Wy=`#define MATCAP
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
}`,jy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
}`,Xy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,$y=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
}`,Yy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,Ky=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
}`,Zy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,Jy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
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
}`,Qy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
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
}`,eb=`uniform vec3 diffuse;
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
}`,tb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ib=`uniform float rotation;
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
}`,rb=`uniform vec3 diffuse;
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
}`,qe={alphamap_fragment:D0,alphamap_pars_fragment:L0,alphatest_fragment:R0,alphatest_pars_fragment:I0,aomap_fragment:O0,aomap_pars_fragment:F0,begin_vertex:N0,beginnormal_vertex:z0,bsdfs:U0,iridescence_fragment:B0,bumpmap_pars_fragment:k0,clipping_planes_fragment:V0,clipping_planes_pars_fragment:G0,clipping_planes_pars_vertex:H0,clipping_planes_vertex:W0,color_fragment:j0,color_pars_fragment:q0,color_pars_vertex:X0,color_vertex:$0,common:Y0,cube_uv_reflection_fragment:K0,defaultnormal_vertex:Z0,displacementmap_pars_vertex:J0,displacementmap_vertex:Q0,emissivemap_fragment:ex,emissivemap_pars_fragment:tx,encodings_fragment:nx,encodings_pars_fragment:ix,envmap_fragment:rx,envmap_common_pars_fragment:sx,envmap_pars_fragment:ax,envmap_pars_vertex:ox,envmap_physical_pars_fragment:vx,envmap_vertex:lx,fog_vertex:cx,fog_pars_vertex:ux,fog_fragment:hx,fog_pars_fragment:dx,gradientmap_pars_fragment:fx,lightmap_fragment:px,lightmap_pars_fragment:mx,lights_lambert_vertex:gx,lights_pars_begin:_x,lights_toon_fragment:xx,lights_toon_pars_fragment:yx,lights_phong_fragment:bx,lights_phong_pars_fragment:Sx,lights_physical_fragment:Mx,lights_physical_pars_fragment:wx,lights_fragment_begin:Tx,lights_fragment_maps:Ex,lights_fragment_end:Ax,logdepthbuf_fragment:Cx,logdepthbuf_pars_fragment:Px,logdepthbuf_pars_vertex:Dx,logdepthbuf_vertex:Lx,map_fragment:Rx,map_pars_fragment:Ix,map_particle_fragment:Ox,map_particle_pars_fragment:Fx,metalnessmap_fragment:Nx,metalnessmap_pars_fragment:zx,morphcolor_vertex:Ux,morphnormal_vertex:Bx,morphtarget_pars_vertex:kx,morphtarget_vertex:Vx,normal_fragment_begin:Gx,normal_fragment_maps:Hx,normal_pars_fragment:Wx,normal_pars_vertex:jx,normal_vertex:qx,normalmap_pars_fragment:Xx,clearcoat_normal_fragment_begin:$x,clearcoat_normal_fragment_maps:Yx,clearcoat_pars_fragment:Kx,iridescence_pars_fragment:Zx,output_fragment:Jx,packing:Qx,premultiplied_alpha_fragment:ey,project_vertex:ty,dithering_fragment:ny,dithering_pars_fragment:iy,roughnessmap_fragment:ry,roughnessmap_pars_fragment:sy,shadowmap_pars_fragment:ay,shadowmap_pars_vertex:oy,shadowmap_vertex:ly,shadowmask_pars_fragment:cy,skinbase_vertex:uy,skinning_pars_vertex:hy,skinning_vertex:dy,skinnormal_vertex:fy,specularmap_fragment:py,specularmap_pars_fragment:my,tonemapping_fragment:gy,tonemapping_pars_fragment:_y,transmission_fragment:vy,transmission_pars_fragment:xy,uv_pars_fragment:yy,uv_pars_vertex:by,uv_vertex:Sy,uv2_pars_fragment:My,uv2_pars_vertex:wy,uv2_vertex:Ty,worldpos_vertex:Ey,background_vert:Ay,background_frag:Cy,cube_vert:Py,cube_frag:Dy,depth_vert:Ly,depth_frag:Ry,distanceRGBA_vert:Iy,distanceRGBA_frag:Oy,equirect_vert:Fy,equirect_frag:Ny,linedashed_vert:zy,linedashed_frag:Uy,meshbasic_vert:By,meshbasic_frag:ky,meshlambert_vert:Vy,meshlambert_frag:Gy,meshmatcap_vert:Hy,meshmatcap_frag:Wy,meshnormal_vert:jy,meshnormal_frag:qy,meshphong_vert:Xy,meshphong_frag:$y,meshphysical_vert:Yy,meshphysical_frag:Ky,meshtoon_vert:Zy,meshtoon_frag:Jy,points_vert:Qy,points_frag:eb,shadow_vert:tb,shadow_frag:nb,sprite_vert:ib,sprite_frag:rb},ve={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new fn},uv2Transform:{value:new fn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new fn}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new fn}}},En={basic:{uniforms:Nt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Nt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.fog,ve.lights,{emissive:{value:new st(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Nt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Nt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Nt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new st(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Nt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Nt([ve.points,ve.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Nt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Nt([ve.common,ve.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Nt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Nt([ve.sprite,ve.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new fn},t2D:{value:null}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},cube:{uniforms:Nt([ve.envmap,{opacity:{value:1}}]),vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Nt([ve.common,ve.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Nt([ve.lights,ve.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};En.physical={uniforms:Nt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new tt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};function sb(o,e,t,n,r,a){const u=new st(0);let l=r===!0?0:1,d,h,m=null,_=0,v=null;function y(x,p){let T=!1,R=p.isScene===!0?p.background:null;R&&R.isTexture&&(R=e.get(R));const F=o.xr,P=F.getSession&&F.getSession();P&&P.environmentBlendMode==="additive"&&(R=null),R===null?w(u,l):R&&R.isColor&&(w(R,1),T=!0),(o.autoClear||T)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),R&&(R.isCubeTexture||R.mapping===Fa)?(h===void 0&&(h=new Hn(new Ps(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:Br(En.cube.uniforms),vertexShader:En.cube.vertexShader,fragmentShader:En.cube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,U,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,(m!==R||_!==R.version||v!==o.toneMapping)&&(h.material.needsUpdate=!0,m=R,_=R.version,v=o.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new Hn(new uc(2,2),new nr({name:"BackgroundMaterial",uniforms:Br(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(d)),d.material.uniforms.t2D.value=R,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(m!==R||_!==R.version||v!==o.toneMapping)&&(d.material.needsUpdate=!0,m=R,_=R.version,v=o.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null))}function w(x,p){t.buffers.color.setClear(x.r,x.g,x.b,p,a)}return{getClearColor:function(){return u},setClearColor:function(x,p=1){u.set(x),l=p,w(u,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,w(u,l)},render:y}}function ab(o,e,t,n){const r=o.getParameter(34921),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),u=n.isWebGL2||a!==null,l={},d=p(null);let h=d,m=!1;function _(G,K,J,se,ae){let j=!1;if(u){const ie=x(se,J,K);h!==ie&&(h=ie,y(h.object)),j=T(G,se,J,ae),j&&R(G,se,J,ae)}else{const ie=K.wireframe===!0;(h.geometry!==se.id||h.program!==J.id||h.wireframe!==ie)&&(h.geometry=se.id,h.program=J.id,h.wireframe=ie,j=!0)}ae!==null&&t.update(ae,34963),(j||m)&&(m=!1,A(G,K,J,se),ae!==null&&o.bindBuffer(34963,t.get(ae).buffer))}function v(){return n.isWebGL2?o.createVertexArray():a.createVertexArrayOES()}function y(G){return n.isWebGL2?o.bindVertexArray(G):a.bindVertexArrayOES(G)}function w(G){return n.isWebGL2?o.deleteVertexArray(G):a.deleteVertexArrayOES(G)}function x(G,K,J){const se=J.wireframe===!0;let ae=l[G.id];ae===void 0&&(ae={},l[G.id]=ae);let j=ae[K.id];j===void 0&&(j={},ae[K.id]=j);let ie=j[se];return ie===void 0&&(ie=p(v()),j[se]=ie),ie}function p(G){const K=[],J=[],se=[];for(let ae=0;ae<r;ae++)K[ae]=0,J[ae]=0,se[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:J,attributeDivisors:se,object:G,attributes:{},index:null}}function T(G,K,J,se){const ae=h.attributes,j=K.attributes;let ie=0;const le=J.getAttributes();for(const oe in le)if(le[oe].location>=0){const Se=ae[oe];let De=j[oe];if(De===void 0&&(oe==="instanceMatrix"&&G.instanceMatrix&&(De=G.instanceMatrix),oe==="instanceColor"&&G.instanceColor&&(De=G.instanceColor)),Se===void 0||Se.attribute!==De||De&&Se.data!==De.data)return!0;ie++}return h.attributesNum!==ie||h.index!==se}function R(G,K,J,se){const ae={},j=K.attributes;let ie=0;const le=J.getAttributes();for(const oe in le)if(le[oe].location>=0){let Se=j[oe];Se===void 0&&(oe==="instanceMatrix"&&G.instanceMatrix&&(Se=G.instanceMatrix),oe==="instanceColor"&&G.instanceColor&&(Se=G.instanceColor));const De={};De.attribute=Se,Se&&Se.data&&(De.data=Se.data),ae[oe]=De,ie++}h.attributes=ae,h.attributesNum=ie,h.index=se}function F(){const G=h.newAttributes;for(let K=0,J=G.length;K<J;K++)G[K]=0}function P(G){L(G,0)}function L(G,K){const J=h.newAttributes,se=h.enabledAttributes,ae=h.attributeDivisors;J[G]=1,se[G]===0&&(o.enableVertexAttribArray(G),se[G]=1),ae[G]!==K&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,K),ae[G]=K)}function U(){const G=h.newAttributes,K=h.enabledAttributes;for(let J=0,se=K.length;J<se;J++)K[J]!==G[J]&&(o.disableVertexAttribArray(J),K[J]=0)}function V(G,K,J,se,ae,j){n.isWebGL2===!0&&(J===5124||J===5125)?o.vertexAttribIPointer(G,K,J,ae,j):o.vertexAttribPointer(G,K,J,se,ae,j)}function A(G,K,J,se){if(n.isWebGL2===!1&&(G.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;F();const ae=se.attributes,j=J.getAttributes(),ie=K.defaultAttributeValues;for(const le in j){const oe=j[le];if(oe.location>=0){let ce=ae[le];if(ce===void 0&&(le==="instanceMatrix"&&G.instanceMatrix&&(ce=G.instanceMatrix),le==="instanceColor"&&G.instanceColor&&(ce=G.instanceColor)),ce!==void 0){const Se=ce.normalized,De=ce.itemSize,Q=t.get(ce);if(Q===void 0)continue;const ft=Q.buffer,He=Q.type,ke=Q.bytesPerElement;if(ce.isInterleavedBufferAttribute){const xe=ce.data,et=xe.stride,je=ce.offset;if(xe.isInstancedInterleavedBuffer){for(let Fe=0;Fe<oe.locationSize;Fe++)L(oe.location+Fe,xe.meshPerAttribute);G.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Fe=0;Fe<oe.locationSize;Fe++)P(oe.location+Fe);o.bindBuffer(34962,ft);for(let Fe=0;Fe<oe.locationSize;Fe++)V(oe.location+Fe,De/oe.locationSize,He,Se,et*ke,(je+De/oe.locationSize*Fe)*ke)}else{if(ce.isInstancedBufferAttribute){for(let xe=0;xe<oe.locationSize;xe++)L(oe.location+xe,ce.meshPerAttribute);G.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let xe=0;xe<oe.locationSize;xe++)P(oe.location+xe);o.bindBuffer(34962,ft);for(let xe=0;xe<oe.locationSize;xe++)V(oe.location+xe,De/oe.locationSize,He,Se,De*ke,De/oe.locationSize*xe*ke)}}else if(ie!==void 0){const Se=ie[le];if(Se!==void 0)switch(Se.length){case 2:o.vertexAttrib2fv(oe.location,Se);break;case 3:o.vertexAttrib3fv(oe.location,Se);break;case 4:o.vertexAttrib4fv(oe.location,Se);break;default:o.vertexAttrib1fv(oe.location,Se)}}}}U()}function N(){be();for(const G in l){const K=l[G];for(const J in K){const se=K[J];for(const ae in se)w(se[ae].object),delete se[ae];delete K[J]}delete l[G]}}function ee(G){if(l[G.id]===void 0)return;const K=l[G.id];for(const J in K){const se=K[J];for(const ae in se)w(se[ae].object),delete se[ae];delete K[J]}delete l[G.id]}function q(G){for(const K in l){const J=l[K];if(J[G.id]===void 0)continue;const se=J[G.id];for(const ae in se)w(se[ae].object),delete se[ae];delete J[G.id]}}function be(){pe(),m=!0,h!==d&&(h=d,y(h.object))}function pe(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:_,reset:be,resetDefaultState:pe,dispose:N,releaseStatesOfGeometry:ee,releaseStatesOfProgram:q,initAttributes:F,enableAttribute:P,disableUnusedAttributes:U}}function ob(o,e,t,n){const r=n.isWebGL2;let a;function u(h){a=h}function l(h,m){o.drawArrays(a,h,m),t.update(m,a,1)}function d(h,m,_){if(_===0)return;let v,y;if(r)v=o,y="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[y](a,h,m,_),t.update(m,a,_)}this.setMode=u,this.render=l,this.renderInstances=d}function lb(o,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(V){if(V==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";V="mediump"}return V==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext!="undefined"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&o instanceof WebGL2ComputeRenderingContext;let l=t.precision!==void 0?t.precision:"highp";const d=a(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=u||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,_=o.getParameter(34930),v=o.getParameter(35660),y=o.getParameter(3379),w=o.getParameter(34076),x=o.getParameter(34921),p=o.getParameter(36347),T=o.getParameter(36348),R=o.getParameter(36349),F=v>0,P=u||e.has("OES_texture_float"),L=F&&P,U=u?o.getParameter(36183):0;return{isWebGL2:u,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:a,precision:l,logarithmicDepthBuffer:m,maxTextures:_,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:w,maxAttributes:x,maxVertexUniforms:p,maxVaryings:T,maxFragmentUniforms:R,vertexTextures:F,floatFragmentTextures:P,floatVertexTextures:L,maxSamples:U}}function cb(o){const e=this;let t=null,n=0,r=!1,a=!1;const u=new Hi,l=new fn,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v,y){const w=_.length!==0||v||n!==0||r;return r=v,t=m(_,y,0),n=_.length,w},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1,h()},this.setState=function(_,v,y){const w=_.clippingPlanes,x=_.clipIntersection,p=_.clipShadows,T=o.get(_);if(!r||w===null||w.length===0||a&&!p)a?m(null):h();else{const R=a?0:n,F=R*4;let P=T.clippingState||null;d.value=P,P=m(w,v,F,y);for(let L=0;L!==F;++L)P[L]=t[L];T.clippingState=P,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(_,v,y,w){const x=_!==null?_.length:0;let p=null;if(x!==0){if(p=d.value,w!==!0||p===null){const T=y+x*4,R=v.matrixWorldInverse;l.getNormalMatrix(R),(p===null||p.length<T)&&(p=new Float32Array(T));for(let F=0,P=y;F!==x;++F,P+=4)u.copy(_[F]).applyMatrix4(R,l),u.normal.toArray(p,P),p[P+3]=u.constant}d.value=p,d.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function ub(o){let e=new WeakMap;function t(u,l){return l===ec?u.mapping=Nr:l===tc&&(u.mapping=zr),u}function n(u){if(u&&u.isTexture&&u.isRenderTargetTexture===!1){const l=u.mapping;if(l===ec||l===tc)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new E0(d.height/2);return h.fromEquirectangularTexture(o,u),e.set(u,h),u.addEventListener("dispose",r),t(h.texture,u.mapping)}else return null}}return u}function r(u){const l=u.target;l.removeEventListener("dispose",r);const d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class _d extends pd{constructor(e=-1,t=1,n=1,r=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,u=n+e,l=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,u=a+h*this.view.width,l-=m*this.view.offsetY,d=l-m*this.view.height}this.projectionMatrix.makeOrthographic(a,u,l,d,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Rr=4,Eh=[.125,.215,.35,.446,.526,.582],ji=20,$l=new _d,Ah=new st;let Yl=null;const Wi=(1+Math.sqrt(5))/2,Dr=1/Wi,Ch=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Wi,Dr),new B(0,Wi,-Dr),new B(Dr,0,Wi),new B(-Dr,0,Wi),new B(Wi,Dr,0),new B(-Wi,Dr,0)];class Ph{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Yl=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yl),e.scissorTest=!1,Da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Nr||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Ss,format:Cn,encoding:er,depthBuffer:!1},r=Dh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hb(a)),this._blurMaterial=db(a,e,t)}return r}_compileMaterial(e){const t=new Hn(this._lodPlanes[0],e);this._renderer.compile(t,$l)}_sceneToCubeUV(e,t,n,r){const l=new dn(90,1,t,n),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,v=m.toneMapping;m.getClearColor(Ah),m.toneMapping=Wn,m.autoClear=!1;const y=new hd({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),w=new Hn(new Ps,y);let x=!1;const p=e.background;p?p.isColor&&(y.color.copy(p),e.background=null,x=!0):(y.color.copy(Ah),x=!0);for(let T=0;T<6;T++){const R=T%3;R===0?(l.up.set(0,d[T],0),l.lookAt(h[T],0,0)):R===1?(l.up.set(0,0,d[T]),l.lookAt(0,h[T],0)):(l.up.set(0,d[T],0),l.lookAt(0,0,h[T]));const F=this._cubeSize;Da(r,R*F,T>2?F:0,F,F),m.setRenderTarget(r),x&&m.render(w,l),m.render(e,l)}w.geometry.dispose(),w.material.dispose(),m.toneMapping=v,m.autoClear=_,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Nr||e.mapping===zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lh());const a=r?this._cubemapMaterial:this._equirectMaterial,u=new Hn(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=e;const d=this._cubeSize;Da(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(u,$l)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),u=Ch[(r-1)%Ch.length];this._blur(e,r-1,r,a,u)}t.autoClear=n}_blur(e,t,n,r,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,r,"latitudinal",a),this._halfBlur(u,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,u,l){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new Hn(this._lodPlanes[r],h),v=h.uniforms,y=this._sizeLods[n]-1,w=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*ji-1),x=a/w,p=isFinite(a)?1+Math.floor(m*x):ji;p>ji&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ji}`);const T=[];let R=0;for(let V=0;V<ji;++V){const A=V/x,N=Math.exp(-A*A/2);T.push(N),V===0?R+=N:V<p&&(R+=2*N)}for(let V=0;V<T.length;V++)T[V]=T[V]/R;v.envMap.value=e.texture,v.samples.value=p,v.weights.value=T,v.latitudinal.value=u==="latitudinal",l&&(v.poleAxis.value=l);const{_lodMax:F}=this;v.dTheta.value=w,v.mipInt.value=F-n;const P=this._sizeLods[r],L=3*P*(r>F-Rr?r-F+Rr:0),U=4*(this._cubeSize-P);Da(t,L,U,3*P,2*P),d.setRenderTarget(t),d.render(_,$l)}}function hb(o){const e=[],t=[],n=[];let r=o;const a=o-Rr+1+Eh.length;for(let u=0;u<a;u++){const l=Math.pow(2,r);t.push(l);let d=1/l;u>o-Rr?d=Eh[u-o+Rr-1]:u===0&&(d=0),n.push(d);const h=1/(l-2),m=-h,_=1+h,v=[m,m,_,m,_,_,m,m,_,_,m,_],y=6,w=6,x=3,p=2,T=1,R=new Float32Array(x*w*y),F=new Float32Array(p*w*y),P=new Float32Array(T*w*y);for(let U=0;U<y;U++){const V=U%3*2/3-1,A=U>2?0:-1,N=[V,A,0,V+2/3,A,0,V+2/3,A+1,0,V,A,0,V+2/3,A+1,0,V,A+1,0];R.set(N,x*w*U),F.set(v,p*w*U);const ee=[U,U,U,U,U,U];P.set(ee,T*w*U)}const L=new hi;L.setAttribute("position",new Pn(R,x)),L.setAttribute("uv",new Pn(F,p)),L.setAttribute("faceIndex",new Pn(P,T)),e.push(L),r>Rr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Dh(o,e,t){const n=new tr(o,e,t);return n.texture.mapping=Fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Da(o,e,t,n,r){o.viewport.set(e,t,n,r),o.scissor.set(e,t,n,r)}function db(o,e,t){const n=new Float32Array(ji),r=new B(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Lh(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Rh(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function hc(){return`

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
	`}function fb(o){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const d=l.mapping,h=d===ec||d===tc,m=d===Nr||d===zr;if(h||m)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let _=e.get(l);return t===null&&(t=new Ph(o)),_=h?t.fromEquirectangular(l,_):t.fromCubemap(l,_),e.set(l,_),_.texture}else{if(e.has(l))return e.get(l).texture;{const _=l.image;if(h&&_&&_.height>0||m&&_&&r(_)){t===null&&(t=new Ph(o));const v=h?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,v),l.addEventListener("dispose",a),v.texture}else return null}}}return l}function r(l){let d=0;const h=6;for(let m=0;m<h;m++)l[m]!==void 0&&d++;return d===h}function a(l){const d=l.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function pb(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function mb(o,e,t,n){const r={},a=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const w in v.attributes)e.remove(v.attributes[w]);v.removeEventListener("dispose",u),delete r[v.id];const y=a.get(v);y&&(e.remove(y),a.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function l(_,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,t.memory.geometries++),v}function d(_){const v=_.attributes;for(const w in v)e.update(v[w],34962);const y=_.morphAttributes;for(const w in y){const x=y[w];for(let p=0,T=x.length;p<T;p++)e.update(x[p],34962)}}function h(_){const v=[],y=_.index,w=_.attributes.position;let x=0;if(y!==null){const R=y.array;x=y.version;for(let F=0,P=R.length;F<P;F+=3){const L=R[F+0],U=R[F+1],V=R[F+2];v.push(L,U,U,V,V,L)}}else{const R=w.array;x=w.version;for(let F=0,P=R.length/3-1;F<P;F+=3){const L=F+0,U=F+1,V=F+2;v.push(L,U,U,V,V,L)}}const p=new(sd(v)?fd:dd)(v,1);p.version=x;const T=a.get(_);T&&e.remove(T),a.set(_,p)}function m(_){const v=a.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&h(_)}else h(_);return a.get(_)}return{get:l,update:d,getWireframeAttribute:m}}function gb(o,e,t,n){const r=n.isWebGL2;let a;function u(v){a=v}let l,d;function h(v){l=v.type,d=v.bytesPerElement}function m(v,y){o.drawElements(a,y,l,v*d),t.update(y,a,1)}function _(v,y,w){if(w===0)return;let x,p;if(r)x=o,p="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[p](a,y,l,v*d,w),t.update(y,a,w)}this.setMode=u,this.setIndex=h,this.render=m,this.renderInstances=_}function _b(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,u,l){switch(t.calls++,u){case 4:t.triangles+=l*(a/3);break;case 1:t.lines+=l*(a/2);break;case 3:t.lines+=l*(a-1);break;case 2:t.lines+=l*a;break;case 0:t.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function vb(o,e){return o[0]-e[0]}function xb(o,e){return Math.abs(e[1])-Math.abs(o[1])}function Kl(o,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),o.divideScalar(t)}function yb(o,e,t){const n={},r=new Float32Array(8),a=new WeakMap,u=new wt,l=[];for(let h=0;h<8;h++)l[h]=[h,0];function d(h,m,_,v){const y=h.morphTargetInfluences;if(e.isWebGL2===!0){const x=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,p=x!==void 0?x.length:0;let T=a.get(m);if(T===void 0||T.count!==p){let J=function(){G.dispose(),a.delete(m),m.removeEventListener("dispose",J)};var w=J;T!==void 0&&T.texture.dispose();const P=m.morphAttributes.position!==void 0,L=m.morphAttributes.normal!==void 0,U=m.morphAttributes.color!==void 0,V=m.morphAttributes.position||[],A=m.morphAttributes.normal||[],N=m.morphAttributes.color||[];let ee=0;P===!0&&(ee=1),L===!0&&(ee=2),U===!0&&(ee=3);let q=m.attributes.position.count*ee,be=1;q>e.maxTextureSize&&(be=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const pe=new Float32Array(q*be*4*p),G=new cd(pe,q,be,p);G.type=Xi,G.needsUpdate=!0;const K=ee*4;for(let se=0;se<p;se++){const ae=V[se],j=A[se],ie=N[se],le=q*be*4*se;for(let oe=0;oe<ae.count;oe++){const ce=oe*K;P===!0&&(u.fromBufferAttribute(ae,oe),ae.normalized===!0&&Kl(u,ae),pe[le+ce+0]=u.x,pe[le+ce+1]=u.y,pe[le+ce+2]=u.z,pe[le+ce+3]=0),L===!0&&(u.fromBufferAttribute(j,oe),j.normalized===!0&&Kl(u,j),pe[le+ce+4]=u.x,pe[le+ce+5]=u.y,pe[le+ce+6]=u.z,pe[le+ce+7]=0),U===!0&&(u.fromBufferAttribute(ie,oe),ie.normalized===!0&&Kl(u,ie),pe[le+ce+8]=u.x,pe[le+ce+9]=u.y,pe[le+ce+10]=u.z,pe[le+ce+11]=ie.itemSize===4?u.w:1)}}T={count:p,texture:G,size:new tt(q,be)},a.set(m,T),m.addEventListener("dispose",J)}let R=0;for(let P=0;P<y.length;P++)R+=y[P];const F=m.morphTargetsRelative?1:1-R;v.getUniforms().setValue(o,"morphTargetBaseInfluence",F),v.getUniforms().setValue(o,"morphTargetInfluences",y),v.getUniforms().setValue(o,"morphTargetsTexture",T.texture,t),v.getUniforms().setValue(o,"morphTargetsTextureSize",T.size)}else{const x=y===void 0?0:y.length;let p=n[m.id];if(p===void 0||p.length!==x){p=[];for(let L=0;L<x;L++)p[L]=[L,0];n[m.id]=p}for(let L=0;L<x;L++){const U=p[L];U[0]=L,U[1]=y[L]}p.sort(xb);for(let L=0;L<8;L++)L<x&&p[L][1]?(l[L][0]=p[L][0],l[L][1]=p[L][1]):(l[L][0]=Number.MAX_SAFE_INTEGER,l[L][1]=0);l.sort(vb);const T=m.morphAttributes.position,R=m.morphAttributes.normal;let F=0;for(let L=0;L<8;L++){const U=l[L],V=U[0],A=U[1];V!==Number.MAX_SAFE_INTEGER&&A?(T&&m.getAttribute("morphTarget"+L)!==T[V]&&m.setAttribute("morphTarget"+L,T[V]),R&&m.getAttribute("morphNormal"+L)!==R[V]&&m.setAttribute("morphNormal"+L,R[V]),r[L]=A,F+=A):(T&&m.hasAttribute("morphTarget"+L)===!0&&m.deleteAttribute("morphTarget"+L),R&&m.hasAttribute("morphNormal"+L)===!0&&m.deleteAttribute("morphNormal"+L),r[L]=0)}const P=m.morphTargetsRelative?1:1-F;v.getUniforms().setValue(o,"morphTargetBaseInfluence",P),v.getUniforms().setValue(o,"morphTargetInfluences",r)}}return{update:d}}function bb(o,e,t,n){let r=new WeakMap;function a(d){const h=n.render.frame,m=d.geometry,_=e.get(d,m);return r.get(_)!==h&&(e.update(_),r.set(_,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",l)===!1&&d.addEventListener("dispose",l),t.update(d.instanceMatrix,34962),d.instanceColor!==null&&t.update(d.instanceColor,34962)),_}function u(){r=new WeakMap}function l(d){const h=d.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:u}}const vd=new Sn,xd=new cd,yd=new u0,bd=new md,Ih=[],Oh=[],Fh=new Float32Array(16),Nh=new Float32Array(9),zh=new Float32Array(4);function Vr(o,e,t){const n=o[0];if(n<=0||n>0)return o;const r=e*t;let a=Ih[r];if(a===void 0&&(a=new Float32Array(r),Ih[r]=a),e!==0){n.toArray(a,0);for(let u=1,l=0;u!==e;++u)l+=t,o[u].toArray(a,l)}return a}function zt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function Ut(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function za(o,e){let t=Oh[e];t===void 0&&(t=new Int32Array(e),Oh[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Sb(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Mb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;o.uniform2fv(this.addr,e),Ut(t,e)}}function wb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;o.uniform3fv(this.addr,e),Ut(t,e)}}function Tb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;o.uniform4fv(this.addr,e),Ut(t,e)}}function Eb(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(zt(t,n))return;zh.set(n),o.uniformMatrix2fv(this.addr,!1,zh),Ut(t,n)}}function Ab(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(zt(t,n))return;Nh.set(n),o.uniformMatrix3fv(this.addr,!1,Nh),Ut(t,n)}}function Cb(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(zt(t,n))return;Fh.set(n),o.uniformMatrix4fv(this.addr,!1,Fh),Ut(t,n)}}function Pb(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Db(o,e){const t=this.cache;zt(t,e)||(o.uniform2iv(this.addr,e),Ut(t,e))}function Lb(o,e){const t=this.cache;zt(t,e)||(o.uniform3iv(this.addr,e),Ut(t,e))}function Rb(o,e){const t=this.cache;zt(t,e)||(o.uniform4iv(this.addr,e),Ut(t,e))}function Ib(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Ob(o,e){const t=this.cache;zt(t,e)||(o.uniform2uiv(this.addr,e),Ut(t,e))}function Fb(o,e){const t=this.cache;zt(t,e)||(o.uniform3uiv(this.addr,e),Ut(t,e))}function Nb(o,e){const t=this.cache;zt(t,e)||(o.uniform4uiv(this.addr,e),Ut(t,e))}function zb(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||vd,r)}function Ub(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||yd,r)}function Bb(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||bd,r)}function kb(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||xd,r)}function Vb(o){switch(o){case 5126:return Sb;case 35664:return Mb;case 35665:return wb;case 35666:return Tb;case 35674:return Eb;case 35675:return Ab;case 35676:return Cb;case 5124:case 35670:return Pb;case 35667:case 35671:return Db;case 35668:case 35672:return Lb;case 35669:case 35673:return Rb;case 5125:return Ib;case 36294:return Ob;case 36295:return Fb;case 36296:return Nb;case 35678:case 36198:case 36298:case 36306:case 35682:return zb;case 35679:case 36299:case 36307:return Ub;case 35680:case 36300:case 36308:case 36293:return Bb;case 36289:case 36303:case 36311:case 36292:return kb}}function Gb(o,e){o.uniform1fv(this.addr,e)}function Hb(o,e){const t=Vr(e,this.size,2);o.uniform2fv(this.addr,t)}function Wb(o,e){const t=Vr(e,this.size,3);o.uniform3fv(this.addr,t)}function jb(o,e){const t=Vr(e,this.size,4);o.uniform4fv(this.addr,t)}function qb(o,e){const t=Vr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Xb(o,e){const t=Vr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function $b(o,e){const t=Vr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Yb(o,e){o.uniform1iv(this.addr,e)}function Kb(o,e){o.uniform2iv(this.addr,e)}function Zb(o,e){o.uniform3iv(this.addr,e)}function Jb(o,e){o.uniform4iv(this.addr,e)}function Qb(o,e){o.uniform1uiv(this.addr,e)}function eS(o,e){o.uniform2uiv(this.addr,e)}function tS(o,e){o.uniform3uiv(this.addr,e)}function nS(o,e){o.uniform4uiv(this.addr,e)}function iS(o,e,t){const n=e.length,r=za(t,n);o.uniform1iv(this.addr,r);for(let a=0;a!==n;++a)t.setTexture2D(e[a]||vd,r[a])}function rS(o,e,t){const n=e.length,r=za(t,n);o.uniform1iv(this.addr,r);for(let a=0;a!==n;++a)t.setTexture3D(e[a]||yd,r[a])}function sS(o,e,t){const n=e.length,r=za(t,n);o.uniform1iv(this.addr,r);for(let a=0;a!==n;++a)t.setTextureCube(e[a]||bd,r[a])}function aS(o,e,t){const n=e.length,r=za(t,n);o.uniform1iv(this.addr,r);for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||xd,r[a])}function oS(o){switch(o){case 5126:return Gb;case 35664:return Hb;case 35665:return Wb;case 35666:return jb;case 35674:return qb;case 35675:return Xb;case 35676:return $b;case 5124:case 35670:return Yb;case 35667:case 35671:return Kb;case 35668:case 35672:return Zb;case 35669:case 35673:return Jb;case 5125:return Qb;case 36294:return eS;case 36295:return tS;case 36296:return nS;case 35678:case 36198:case 36298:case 36306:case 35682:return iS;case 35679:case 36299:case 36307:return rS;case 35680:case 36300:case 36308:case 36293:return sS;case 36289:case 36303:case 36311:case 36292:return aS}}class lS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Vb(t.type)}}class cS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=oS(t.type)}}class uS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,u=r.length;a!==u;++a){const l=r[a];l.setValue(e,t[l.id],n)}}}const Zl=/(\w+)(\])?(\[|\.)?/g;function Uh(o,e){o.seq.push(e),o.map[e.id]=e}function hS(o,e,t){const n=o.name,r=n.length;for(Zl.lastIndex=0;;){const a=Zl.exec(n),u=Zl.lastIndex;let l=a[1];const d=a[2]==="]",h=a[3];if(d&&(l=l|0),h===void 0||h==="["&&u+2===r){Uh(t,h===void 0?new lS(l,o,e):new cS(l,o,e));break}else{let _=t.map[l];_===void 0&&(_=new uS(l),Uh(t,_)),t=_}}}class Ia{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),u=e.getUniformLocation(t,a.name);hS(a,u,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,u=t.length;a!==u;++a){const l=t[a],d=n[l.id];d.needsUpdate!==!1&&l.setValue(e,d.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const u=e[r];u.id in t&&n.push(u)}return n}}function Bh(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let dS=0;function fS(o,e){const t=o.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=r;u<a;u++){const l=u+1;n.push(`${l===e?">":" "} ${l}: ${t[u]}`)}return n.join(`
`)}function pS(o){switch(o){case er:return["Linear","( value )"];case gt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function kh(o,e,t){const n=o.getShaderParameter(e,35713),r=o.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+fS(o.getShaderSource(e),u)}else return r}function mS(o,e){const t=pS(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function gS(o,e){let t;switch(e){case zv:t="Linear";break;case Uv:t="Reinhard";break;case Bv:t="OptimizedCineon";break;case kv:t="ACESFilmic";break;case Vv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _S(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ys).join(`
`)}function vS(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xS(o,e){const t={},n=o.getProgramParameter(e,35721);for(let r=0;r<n;r++){const a=o.getActiveAttrib(e,r),u=a.name;let l=1;a.type===35674&&(l=2),a.type===35675&&(l=3),a.type===35676&&(l=4),t[u]={type:a.type,location:o.getAttribLocation(e,u),locationSize:l}}return t}function ys(o){return o!==""}function Vh(o,e){return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gh(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(o){return o.replace(yS,bS)}function bS(o,e){const t=qe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ac(t)}const SS=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,MS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(o){return o.replace(MS,Sd).replace(SS,wS)}function wS(o,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Sd(o,e,t,n)}function Sd(o,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Wh(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TS(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Zh?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Jh?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===xs&&(e="SHADOWMAP_TYPE_VSM"),e}function ES(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Nr:case zr:e="ENVMAP_TYPE_CUBE";break;case Fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AS(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case zr:e="ENVMAP_MODE_REFRACTION";break}return e}function CS(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case td:e="ENVMAP_BLENDING_MULTIPLY";break;case Fv:e="ENVMAP_BLENDING_MIX";break;case Nv:e="ENVMAP_BLENDING_ADD";break}return e}function PS(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function DS(o,e,t,n){const r=o.getContext(),a=t.defines;let u=t.vertexShader,l=t.fragmentShader;const d=TS(t),h=ES(t),m=AS(t),_=CS(t),v=PS(t),y=t.isWebGL2?"":_S(t),w=vS(a),x=r.createProgram();let p,T,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[w].filter(ys).join(`
`),p.length>0&&(p+=`
`),T=[y,w].filter(ys).join(`
`),T.length>0&&(T+=`
`)):(p=[Wh(t),"#define SHADER_NAME "+t.shaderName,w,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),T=[y,Wh(t),"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Wn?gS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.encodings_pars_fragment,mS("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ys).join(`
`)),u=ac(u),u=Vh(u,t),u=Gh(u,t),l=ac(l),l=Vh(l,t),l=Gh(l,t),u=Hh(u),l=Hh(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,T=["#define varying in",t.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const F=R+p+u,P=R+T+l,L=Bh(r,35633,F),U=Bh(r,35632,P);if(r.attachShader(x,L),r.attachShader(x,U),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),o.debug.checkShaderErrors){const N=r.getProgramInfoLog(x).trim(),ee=r.getShaderInfoLog(L).trim(),q=r.getShaderInfoLog(U).trim();let be=!0,pe=!0;if(r.getProgramParameter(x,35714)===!1){be=!1;const G=kh(r,L,"vertex"),K=kh(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,35715)+`

Program Info Log: `+N+`
`+G+`
`+K)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(ee===""||q==="")&&(pe=!1);pe&&(this.diagnostics={runnable:be,programLog:N,vertexShader:{log:ee,prefix:p},fragmentShader:{log:q,prefix:T}})}r.deleteShader(L),r.deleteShader(U);let V;this.getUniforms=function(){return V===void 0&&(V=new Ia(r,x)),V};let A;return this.getAttributes=function(){return A===void 0&&(A=xS(r,x)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.name=t.shaderName,this.id=dS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=U,this}let LS=0;class RS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new IS(e);t.set(e,n)}return t.get(e)}}class IS{constructor(e){this.id=LS++,this.code=e,this.usedTimes=0}}function OS(o,e,t,n,r,a,u){const l=new ud,d=new RS,h=[],m=r.isWebGL2,_=r.logarithmicDepthBuffer,v=r.vertexTextures;let y=r.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(A,N,ee,q,be){const pe=q.fog,G=be.geometry,K=A.isMeshStandardMaterial?q.environment:null,J=(A.isMeshStandardMaterial?t:e).get(A.envMap||K),se=!!J&&J.mapping===Fa?J.image.height:null,ae=w[A.type];A.precision!==null&&(y=r.getMaxPrecision(A.precision),y!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const j=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ie=j!==void 0?j.length:0;let le=0;G.morphAttributes.position!==void 0&&(le=1),G.morphAttributes.normal!==void 0&&(le=2),G.morphAttributes.color!==void 0&&(le=3);let oe,ce,Se,De;if(ae){const et=En[ae];oe=et.vertexShader,ce=et.fragmentShader}else oe=A.vertexShader,ce=A.fragmentShader,d.update(A),Se=d.getVertexShaderID(A),De=d.getFragmentShaderID(A);const Q=o.getRenderTarget(),ft=A.alphaTest>0,He=A.clearcoat>0,ke=A.iridescence>0;return{isWebGL2:m,shaderID:ae,shaderName:A.type,vertexShader:oe,fragmentShader:ce,defines:A.defines,customVertexShaderID:Se,customFragmentShaderID:De,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,instancing:be.isInstancedMesh===!0,instancingColor:be.isInstancedMesh===!0&&be.instanceColor!==null,supportsVertexTextures:v,outputEncoding:Q===null?o.outputEncoding:Q.isXRRenderTarget===!0?Q.texture.encoding:er,map:!!A.map,matcap:!!A.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:se,lightMap:!!A.lightMap,aoMap:!!A.aoMap,emissiveMap:!!A.emissiveMap,bumpMap:!!A.bumpMap,normalMap:!!A.normalMap,objectSpaceNormalMap:A.normalMapType===a0,tangentSpaceNormalMap:A.normalMapType===rd,decodeVideoTexture:!!A.map&&A.map.isVideoTexture===!0&&A.map.encoding===gt,clearcoat:He,clearcoatMap:He&&!!A.clearcoatMap,clearcoatRoughnessMap:He&&!!A.clearcoatRoughnessMap,clearcoatNormalMap:He&&!!A.clearcoatNormalMap,iridescence:ke,iridescenceMap:ke&&!!A.iridescenceMap,iridescenceThicknessMap:ke&&!!A.iridescenceThicknessMap,displacementMap:!!A.displacementMap,roughnessMap:!!A.roughnessMap,metalnessMap:!!A.metalnessMap,specularMap:!!A.specularMap,specularIntensityMap:!!A.specularIntensityMap,specularColorMap:!!A.specularColorMap,opaque:A.transparent===!1&&A.blending===Ir,alphaMap:!!A.alphaMap,alphaTest:ft,gradientMap:!!A.gradientMap,sheen:A.sheen>0,sheenColorMap:!!A.sheenColorMap,sheenRoughnessMap:!!A.sheenRoughnessMap,transmission:A.transmission>0,transmissionMap:!!A.transmissionMap,thicknessMap:!!A.thicknessMap,combine:A.combine,vertexTangents:!!A.normalMap&&!!G.attributes.tangent,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUvs:!!A.map||!!A.bumpMap||!!A.normalMap||!!A.specularMap||!!A.alphaMap||!!A.emissiveMap||!!A.roughnessMap||!!A.metalnessMap||!!A.clearcoatMap||!!A.clearcoatRoughnessMap||!!A.clearcoatNormalMap||!!A.iridescenceMap||!!A.iridescenceThicknessMap||!!A.displacementMap||!!A.transmissionMap||!!A.thicknessMap||!!A.specularIntensityMap||!!A.specularColorMap||!!A.sheenColorMap||!!A.sheenRoughnessMap,uvsVertexOnly:!(!!A.map||!!A.bumpMap||!!A.normalMap||!!A.specularMap||!!A.alphaMap||!!A.emissiveMap||!!A.roughnessMap||!!A.metalnessMap||!!A.clearcoatNormalMap||!!A.iridescenceMap||!!A.iridescenceThicknessMap||A.transmission>0||!!A.transmissionMap||!!A.thicknessMap||!!A.specularIntensityMap||!!A.specularColorMap||A.sheen>0||!!A.sheenColorMap||!!A.sheenRoughnessMap)&&!!A.displacementMap,fog:!!pe,useFog:A.fog===!0,fogExp2:pe&&pe.isFogExp2,flatShading:!!A.flatShading,sizeAttenuation:A.sizeAttenuation,logarithmicDepthBuffer:_,skinning:be.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:le,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&ee.length>0,shadowMapType:o.shadowMap.type,toneMapping:A.toneMapped?o.toneMapping:Wn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Fr,flipSided:A.side===bn,useDepthPacking:!!A.depthPacking,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:A.extensions&&A.extensions.derivatives,extensionFragDepth:A.extensions&&A.extensions.fragDepth,extensionDrawBuffers:A.extensions&&A.extensions.drawBuffers,extensionShaderTextureLOD:A.extensions&&A.extensions.shaderTextureLOD,rendererExtensionFragDepth:m||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||n.has("EXT_shader_texture_lod"),customProgramCacheKey:A.customProgramCacheKey()}}function p(A){const N=[];if(A.shaderID?N.push(A.shaderID):(N.push(A.customVertexShaderID),N.push(A.customFragmentShaderID)),A.defines!==void 0)for(const ee in A.defines)N.push(ee),N.push(A.defines[ee]);return A.isRawShaderMaterial===!1&&(T(N,A),R(N,A),N.push(o.outputEncoding)),N.push(A.customProgramCacheKey),N.join()}function T(A,N){A.push(N.precision),A.push(N.outputEncoding),A.push(N.envMapMode),A.push(N.envMapCubeUVHeight),A.push(N.combine),A.push(N.vertexUvs),A.push(N.fogExp2),A.push(N.sizeAttenuation),A.push(N.morphTargetsCount),A.push(N.morphAttributeCount),A.push(N.numDirLights),A.push(N.numPointLights),A.push(N.numSpotLights),A.push(N.numHemiLights),A.push(N.numRectAreaLights),A.push(N.numDirLightShadows),A.push(N.numPointLightShadows),A.push(N.numSpotLightShadows),A.push(N.shadowMapType),A.push(N.toneMapping),A.push(N.numClippingPlanes),A.push(N.numClipIntersection),A.push(N.depthPacking)}function R(A,N){l.disableAll(),N.isWebGL2&&l.enable(0),N.supportsVertexTextures&&l.enable(1),N.instancing&&l.enable(2),N.instancingColor&&l.enable(3),N.map&&l.enable(4),N.matcap&&l.enable(5),N.envMap&&l.enable(6),N.lightMap&&l.enable(7),N.aoMap&&l.enable(8),N.emissiveMap&&l.enable(9),N.bumpMap&&l.enable(10),N.normalMap&&l.enable(11),N.objectSpaceNormalMap&&l.enable(12),N.tangentSpaceNormalMap&&l.enable(13),N.clearcoat&&l.enable(14),N.clearcoatMap&&l.enable(15),N.clearcoatRoughnessMap&&l.enable(16),N.clearcoatNormalMap&&l.enable(17),N.iridescence&&l.enable(18),N.iridescenceMap&&l.enable(19),N.iridescenceThicknessMap&&l.enable(20),N.displacementMap&&l.enable(21),N.specularMap&&l.enable(22),N.roughnessMap&&l.enable(23),N.metalnessMap&&l.enable(24),N.gradientMap&&l.enable(25),N.alphaMap&&l.enable(26),N.alphaTest&&l.enable(27),N.vertexColors&&l.enable(28),N.vertexAlphas&&l.enable(29),N.vertexUvs&&l.enable(30),N.vertexTangents&&l.enable(31),N.uvsVertexOnly&&l.enable(32),N.fog&&l.enable(33),A.push(l.mask),l.disableAll(),N.useFog&&l.enable(0),N.flatShading&&l.enable(1),N.logarithmicDepthBuffer&&l.enable(2),N.skinning&&l.enable(3),N.morphTargets&&l.enable(4),N.morphNormals&&l.enable(5),N.morphColors&&l.enable(6),N.premultipliedAlpha&&l.enable(7),N.shadowMapEnabled&&l.enable(8),N.physicallyCorrectLights&&l.enable(9),N.doubleSided&&l.enable(10),N.flipSided&&l.enable(11),N.useDepthPacking&&l.enable(12),N.dithering&&l.enable(13),N.specularIntensityMap&&l.enable(14),N.specularColorMap&&l.enable(15),N.transmission&&l.enable(16),N.transmissionMap&&l.enable(17),N.thicknessMap&&l.enable(18),N.sheen&&l.enable(19),N.sheenColorMap&&l.enable(20),N.sheenRoughnessMap&&l.enable(21),N.decodeVideoTexture&&l.enable(22),N.opaque&&l.enable(23),A.push(l.mask)}function F(A){const N=w[A.type];let ee;if(N){const q=En[N];ee=S0.clone(q.uniforms)}else ee=A.uniforms;return ee}function P(A,N){let ee;for(let q=0,be=h.length;q<be;q++){const pe=h[q];if(pe.cacheKey===N){ee=pe,++ee.usedTimes;break}}return ee===void 0&&(ee=new DS(o,N,A,a),h.push(ee)),ee}function L(A){if(--A.usedTimes===0){const N=h.indexOf(A);h[N]=h[h.length-1],h.pop(),A.destroy()}}function U(A){d.remove(A)}function V(){d.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:F,acquireProgram:P,releaseProgram:L,releaseShaderCache:U,programs:h,dispose:V}}function FS(){let o=new WeakMap;function e(a){let u=o.get(a);return u===void 0&&(u={},o.set(a,u)),u}function t(a){o.delete(a)}function n(a,u,l){o.get(a)[u]=l}function r(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function NS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function jh(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function qh(){const o=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function u(_,v,y,w,x,p){let T=o[e];return T===void 0?(T={id:_.id,object:_,geometry:v,material:y,groupOrder:w,renderOrder:_.renderOrder,z:x,group:p},o[e]=T):(T.id=_.id,T.object=_,T.geometry=v,T.material=y,T.groupOrder=w,T.renderOrder=_.renderOrder,T.z=x,T.group=p),e++,T}function l(_,v,y,w,x,p){const T=u(_,v,y,w,x,p);y.transmission>0?n.push(T):y.transparent===!0?r.push(T):t.push(T)}function d(_,v,y,w,x,p){const T=u(_,v,y,w,x,p);y.transmission>0?n.unshift(T):y.transparent===!0?r.unshift(T):t.unshift(T)}function h(_,v){t.length>1&&t.sort(_||NS),n.length>1&&n.sort(v||jh),r.length>1&&r.sort(v||jh)}function m(){for(let _=e,v=o.length;_<v;_++){const y=o[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:l,unshift:d,finish:m,sort:h}}function zS(){let o=new WeakMap;function e(n,r){let a;return o.has(n)===!1?(a=new qh,o.set(n,[a])):r>=o.get(n).length?(a=new qh,o.get(n).push(a)):a=o.get(n)[r],a}function t(){o=new WeakMap}return{get:e,dispose:t}}function US(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new st};break;case"SpotLight":t={position:new B,direction:new B,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new B,halfWidth:new B,halfHeight:new B};break}return o[e.id]=t,t}}}function BS(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let kS=0;function VS(o,e){return(e.castShadow?1:0)-(o.castShadow?1:0)}function GS(o,e){const t=new US,n=BS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let m=0;m<9;m++)r.probe.push(new B);const a=new B,u=new Tt,l=new Tt;function d(m,_){let v=0,y=0,w=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let x=0,p=0,T=0,R=0,F=0,P=0,L=0,U=0;m.sort(VS);const V=_!==!0?Math.PI:1;for(let N=0,ee=m.length;N<ee;N++){const q=m[N],be=q.color,pe=q.intensity,G=q.distance,K=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)v+=be.r*pe*V,y+=be.g*pe*V,w+=be.b*pe*V;else if(q.isLightProbe)for(let J=0;J<9;J++)r.probe[J].addScaledVector(q.sh.coefficients[J],pe);else if(q.isDirectionalLight){const J=t.get(q);if(J.color.copy(q.color).multiplyScalar(q.intensity*V),q.castShadow){const se=q.shadow,ae=n.get(q);ae.shadowBias=se.bias,ae.shadowNormalBias=se.normalBias,ae.shadowRadius=se.radius,ae.shadowMapSize=se.mapSize,r.directionalShadow[x]=ae,r.directionalShadowMap[x]=K,r.directionalShadowMatrix[x]=q.shadow.matrix,P++}r.directional[x]=J,x++}else if(q.isSpotLight){const J=t.get(q);if(J.position.setFromMatrixPosition(q.matrixWorld),J.color.copy(be).multiplyScalar(pe*V),J.distance=G,J.coneCos=Math.cos(q.angle),J.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),J.decay=q.decay,q.castShadow){const se=q.shadow,ae=n.get(q);ae.shadowBias=se.bias,ae.shadowNormalBias=se.normalBias,ae.shadowRadius=se.radius,ae.shadowMapSize=se.mapSize,r.spotShadow[T]=ae,r.spotShadowMap[T]=K,r.spotShadowMatrix[T]=q.shadow.matrix,U++}r.spot[T]=J,T++}else if(q.isRectAreaLight){const J=t.get(q);J.color.copy(be).multiplyScalar(pe),J.halfWidth.set(q.width*.5,0,0),J.halfHeight.set(0,q.height*.5,0),r.rectArea[R]=J,R++}else if(q.isPointLight){const J=t.get(q);if(J.color.copy(q.color).multiplyScalar(q.intensity*V),J.distance=q.distance,J.decay=q.decay,q.castShadow){const se=q.shadow,ae=n.get(q);ae.shadowBias=se.bias,ae.shadowNormalBias=se.normalBias,ae.shadowRadius=se.radius,ae.shadowMapSize=se.mapSize,ae.shadowCameraNear=se.camera.near,ae.shadowCameraFar=se.camera.far,r.pointShadow[p]=ae,r.pointShadowMap[p]=K,r.pointShadowMatrix[p]=q.shadow.matrix,L++}r.point[p]=J,p++}else if(q.isHemisphereLight){const J=t.get(q);J.skyColor.copy(q.color).multiplyScalar(pe*V),J.groundColor.copy(q.groundColor).multiplyScalar(pe*V),r.hemi[F]=J,F++}}R>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=v,r.ambient[1]=y,r.ambient[2]=w;const A=r.hash;(A.directionalLength!==x||A.pointLength!==p||A.spotLength!==T||A.rectAreaLength!==R||A.hemiLength!==F||A.numDirectionalShadows!==P||A.numPointShadows!==L||A.numSpotShadows!==U)&&(r.directional.length=x,r.spot.length=T,r.rectArea.length=R,r.point.length=p,r.hemi.length=F,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=L,r.spotShadowMatrix.length=U,A.directionalLength=x,A.pointLength=p,A.spotLength=T,A.rectAreaLength=R,A.hemiLength=F,A.numDirectionalShadows=P,A.numPointShadows=L,A.numSpotShadows=U,r.version=kS++)}function h(m,_){let v=0,y=0,w=0,x=0,p=0;const T=_.matrixWorldInverse;for(let R=0,F=m.length;R<F;R++){const P=m[R];if(P.isDirectionalLight){const L=r.directional[v];L.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(T),v++}else if(P.isSpotLight){const L=r.spot[w];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(T),L.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(T),w++}else if(P.isRectAreaLight){const L=r.rectArea[x];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(T),l.identity(),u.copy(P.matrixWorld),u.premultiply(T),l.extractRotation(u),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(l),L.halfHeight.applyMatrix4(l),x++}else if(P.isPointLight){const L=r.point[y];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(T),y++}else if(P.isHemisphereLight){const L=r.hemi[p];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(T),p++}}}return{setup:d,setupView:h,state:r}}function Xh(o,e){const t=new GS(o,e),n=[],r=[];function a(){n.length=0,r.length=0}function u(_){n.push(_)}function l(_){r.push(_)}function d(_){t.setup(n,_)}function h(_){t.setupView(n,_)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:d,setupLightsView:h,pushLight:u,pushShadow:l}}function HS(o,e){let t=new WeakMap;function n(a,u=0){let l;return t.has(a)===!1?(l=new Xh(o,e),t.set(a,[l])):u>=t.get(a).length?(l=new Xh(o,e),t.get(a).push(l)):l=t.get(a)[u],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class WS extends Cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jS extends Cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XS=`uniform sampler2D shadow_pass;
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
}`;function $S(o,e,t){let n=new cc;const r=new tt,a=new tt,u=new wt,l=new WS({depthPacking:s0}),d=new jS,h={},m=t.maxTextureSize,_={0:bn,1:bs,2:Fr},v=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:qS,fragmentShader:XS}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const w=new hi;w.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Hn(w,v),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zh,this.render=function(P,L,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const V=o.getRenderTarget(),A=o.getActiveCubeFace(),N=o.getActiveMipmapLevel(),ee=o.state;ee.setBlending(ui),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);for(let q=0,be=P.length;q<be;q++){const pe=P[q],G=pe.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const K=G.getFrameExtents();if(r.multiply(K),a.copy(G.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(a.x=Math.floor(m/K.x),r.x=a.x*K.x,G.mapSize.x=a.x),r.y>m&&(a.y=Math.floor(m/K.y),r.y=a.y*K.y,G.mapSize.y=a.y)),G.map===null){const se=this.type!==xs?{minFilter:$t,magFilter:$t}:{};G.map=new tr(r.x,r.y,se),G.map.texture.name=pe.name+".shadowMap",G.camera.updateProjectionMatrix()}o.setRenderTarget(G.map),o.clear();const J=G.getViewportCount();for(let se=0;se<J;se++){const ae=G.getViewport(se);u.set(a.x*ae.x,a.y*ae.y,a.x*ae.z,a.y*ae.w),ee.viewport(u),G.updateMatrices(pe,se),n=G.getFrustum(),F(L,U,G.camera,pe,this.type)}G.isPointLightShadow!==!0&&this.type===xs&&T(G,U),G.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(V,A,N)};function T(P,L){const U=e.update(x);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new tr(r.x,r.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(L,null,U,v,x,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(L,null,U,y,x,null)}function R(P,L,U,V,A,N){let ee=null;const q=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(q!==void 0?ee=q:ee=U.isPointLight===!0?d:l,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0){const be=ee.uuid,pe=L.uuid;let G=h[be];G===void 0&&(G={},h[be]=G);let K=G[pe];K===void 0&&(K=ee.clone(),G[pe]=K),ee=K}return ee.visible=L.visible,ee.wireframe=L.wireframe,N===xs?ee.side=L.shadowSide!==null?L.shadowSide:L.side:ee.side=L.shadowSide!==null?L.shadowSide:_[L.side],ee.alphaMap=L.alphaMap,ee.alphaTest=L.alphaTest,ee.clipShadows=L.clipShadows,ee.clippingPlanes=L.clippingPlanes,ee.clipIntersection=L.clipIntersection,ee.displacementMap=L.displacementMap,ee.displacementScale=L.displacementScale,ee.displacementBias=L.displacementBias,ee.wireframeLinewidth=L.wireframeLinewidth,ee.linewidth=L.linewidth,U.isPointLight===!0&&ee.isMeshDistanceMaterial===!0&&(ee.referencePosition.setFromMatrixPosition(U.matrixWorld),ee.nearDistance=V,ee.farDistance=A),ee}function F(P,L,U,V,A){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&A===xs)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);const q=e.update(P),be=P.material;if(Array.isArray(be)){const pe=q.groups;for(let G=0,K=pe.length;G<K;G++){const J=pe[G],se=be[J.materialIndex];if(se&&se.visible){const ae=R(P,se,V,U.near,U.far,A);o.renderBufferDirect(U,null,q,ae,P,J)}}}else if(be.visible){const pe=R(P,be,V,U.near,U.far,A);o.renderBufferDirect(U,null,q,pe,P,null)}}const ee=P.children;for(let q=0,be=ee.length;q<be;q++)F(ee[q],L,U,V,A)}}function YS(o,e,t){const n=t.isWebGL2;function r(){let O=!1;const ge=new wt;let me=null;const Ie=new wt(0,0,0,0);return{setMask:function(Te){me!==Te&&!O&&(o.colorMask(Te,Te,Te,Te),me=Te)},setLocked:function(Te){O=Te},setClear:function(Te,Oe,de,Le,Ye){Ye===!0&&(Te*=Le,Oe*=Le,de*=Le),ge.set(Te,Oe,de,Le),Ie.equals(ge)===!1&&(o.clearColor(Te,Oe,de,Le),Ie.copy(ge))},reset:function(){O=!1,me=null,Ie.set(-1,0,0,0)}}}function a(){let O=!1,ge=null,me=null,Ie=null;return{setTest:function(Te){Te?De(2929):Q(2929)},setMask:function(Te){ge!==Te&&!O&&(o.depthMask(Te),ge=Te)},setFunc:function(Te){if(me!==Te){if(Te)switch(Te){case Cv:o.depthFunc(512);break;case Pv:o.depthFunc(519);break;case Dv:o.depthFunc(513);break;case Ql:o.depthFunc(515);break;case Lv:o.depthFunc(514);break;case Rv:o.depthFunc(518);break;case Iv:o.depthFunc(516);break;case Ov:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);me=Te}},setLocked:function(Te){O=Te},setClear:function(Te){Ie!==Te&&(o.clearDepth(Te),Ie=Te)},reset:function(){O=!1,ge=null,me=null,Ie=null}}}function u(){let O=!1,ge=null,me=null,Ie=null,Te=null,Oe=null,de=null,Le=null,Ye=null;return{setTest:function(Je){O||(Je?De(2960):Q(2960))},setMask:function(Je){ge!==Je&&!O&&(o.stencilMask(Je),ge=Je)},setFunc:function(Je,bt,kt){(me!==Je||Ie!==bt||Te!==kt)&&(o.stencilFunc(Je,bt,kt),me=Je,Ie=bt,Te=kt)},setOp:function(Je,bt,kt){(Oe!==Je||de!==bt||Le!==kt)&&(o.stencilOp(Je,bt,kt),Oe=Je,de=bt,Le=kt)},setLocked:function(Je){O=Je},setClear:function(Je){Ye!==Je&&(o.clearStencil(Je),Ye=Je)},reset:function(){O=!1,ge=null,me=null,Ie=null,Te=null,Oe=null,de=null,Le=null,Ye=null}}}const l=new r,d=new a,h=new u;let m={},_={},v=new WeakMap,y=[],w=null,x=!1,p=null,T=null,R=null,F=null,P=null,L=null,U=null,V=!1,A=null,N=null,ee=null,q=null,be=null;const pe=o.getParameter(35661);let G=!1,K=0;const J=o.getParameter(7938);J.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(J)[1]),G=K>=1):J.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),G=K>=2);let se=null,ae={};const j=o.getParameter(3088),ie=o.getParameter(2978),le=new wt().fromArray(j),oe=new wt().fromArray(ie);function ce(O,ge,me){const Ie=new Uint8Array(4),Te=o.createTexture();o.bindTexture(O,Te),o.texParameteri(O,10241,9728),o.texParameteri(O,10240,9728);for(let Oe=0;Oe<me;Oe++)o.texImage2D(ge+Oe,0,6408,1,1,0,6408,5121,Ie);return Te}const Se={};Se[3553]=ce(3553,3553,1),Se[34067]=ce(34067,34069,6),l.setClear(0,0,0,1),d.setClear(1),h.setClear(0),De(2929),d.setFunc(Ql),_t(!1),Et(Nu),De(2884),je(ui);function De(O){m[O]!==!0&&(o.enable(O),m[O]=!0)}function Q(O){m[O]!==!1&&(o.disable(O),m[O]=!1)}function ft(O,ge){return _[O]!==ge?(o.bindFramebuffer(O,ge),_[O]=ge,n&&(O===36009&&(_[36160]=ge),O===36160&&(_[36009]=ge)),!0):!1}function He(O,ge){let me=y,Ie=!1;if(O)if(me=v.get(ge),me===void 0&&(me=[],v.set(ge,me)),O.isWebGLMultipleRenderTargets){const Te=O.texture;if(me.length!==Te.length||me[0]!==36064){for(let Oe=0,de=Te.length;Oe<de;Oe++)me[Oe]=36064+Oe;me.length=Te.length,Ie=!0}}else me[0]!==36064&&(me[0]=36064,Ie=!0);else me[0]!==1029&&(me[0]=1029,Ie=!0);Ie&&(t.isWebGL2?o.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function ke(O){return w!==O?(o.useProgram(O),w=O,!0):!1}const xe={[Lr]:32774,[_v]:32778,[vv]:32779};if(n)xe[ku]=32775,xe[Vu]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(xe[ku]=O.MIN_EXT,xe[Vu]=O.MAX_EXT)}const et={[xv]:0,[yv]:1,[bv]:768,[Qh]:770,[Av]:776,[Tv]:774,[Mv]:772,[Sv]:769,[ed]:771,[Ev]:775,[wv]:773};function je(O,ge,me,Ie,Te,Oe,de,Le){if(O===ui){x===!0&&(Q(3042),x=!1);return}if(x===!1&&(De(3042),x=!0),O!==gv){if(O!==p||Le!==V){if((T!==Lr||P!==Lr)&&(o.blendEquation(32774),T=Lr,P=Lr),Le)switch(O){case Ir:o.blendFuncSeparate(1,771,1,771);break;case zu:o.blendFunc(1,1);break;case Uu:o.blendFuncSeparate(0,769,0,1);break;case Bu:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ir:o.blendFuncSeparate(770,771,1,771);break;case zu:o.blendFunc(770,1);break;case Uu:o.blendFuncSeparate(0,769,0,1);break;case Bu:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}R=null,F=null,L=null,U=null,p=O,V=Le}return}Te=Te||ge,Oe=Oe||me,de=de||Ie,(ge!==T||Te!==P)&&(o.blendEquationSeparate(xe[ge],xe[Te]),T=ge,P=Te),(me!==R||Ie!==F||Oe!==L||de!==U)&&(o.blendFuncSeparate(et[me],et[Ie],et[Oe],et[de]),R=me,F=Ie,L=Oe,U=de),p=O,V=null}function Fe(O,ge){O.side===Fr?Q(2884):De(2884);let me=O.side===bn;ge&&(me=!me),_t(me),O.blending===Ir&&O.transparent===!1?je(ui):je(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),d.setFunc(O.depthFunc),d.setTest(O.depthTest),d.setMask(O.depthWrite),l.setMask(O.colorWrite);const Ie=O.stencilWrite;h.setTest(Ie),Ie&&(h.setMask(O.stencilWriteMask),h.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),h.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Bt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?De(32926):Q(32926)}function _t(O){A!==O&&(O?o.frontFace(2304):o.frontFace(2305),A=O)}function Et(O){O!==fv?(De(2884),O!==N&&(O===Nu?o.cullFace(1029):O===pv?o.cullFace(1028):o.cullFace(1032))):Q(2884),N=O}function Dt(O){O!==ee&&(G&&o.lineWidth(O),ee=O)}function Bt(O,ge,me){O?(De(32823),(q!==ge||be!==me)&&(o.polygonOffset(ge,me),q=ge,be=me)):Q(32823)}function pt(O){O?De(3089):Q(3089)}function Ze(O){O===void 0&&(O=33984+pe-1),se!==O&&(o.activeTexture(O),se=O)}function Kt(O,ge){se===null&&Ze();let me=ae[se];me===void 0&&(me={type:void 0,texture:void 0},ae[se]=me),(me.type!==O||me.texture!==ge)&&(o.bindTexture(O,ge||Se[O]),me.type=O,me.texture=ge)}function yt(){const O=ae[se];O!==void 0&&O.type!==void 0&&(o.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function D(){try{o.compressedTexImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function S(){try{o.texSubImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{o.texSubImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{o.texStorage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{o.texStorage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(){try{o.texImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{o.texImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(O){le.equals(O)===!1&&(o.scissor(O.x,O.y,O.z,O.w),le.copy(O))}function Ee(O){oe.equals(O)===!1&&(o.viewport(O.x,O.y,O.z,O.w),oe.copy(O))}function ye(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},se=null,ae={},_={},v=new WeakMap,y=[],w=null,x=!1,p=null,T=null,R=null,F=null,P=null,L=null,U=null,V=!1,A=null,N=null,ee=null,q=null,be=null,le.set(0,0,o.canvas.width,o.canvas.height),oe.set(0,0,o.canvas.width,o.canvas.height),l.reset(),d.reset(),h.reset()}return{buffers:{color:l,depth:d,stencil:h},enable:De,disable:Q,bindFramebuffer:ft,drawBuffers:He,useProgram:ke,setBlending:je,setMaterial:Fe,setFlipSided:_t,setCullFace:Et,setLineWidth:Dt,setPolygonOffset:Bt,setScissorTest:pt,activeTexture:Ze,bindTexture:Kt,unbindTexture:yt,compressedTexImage2D:D,texImage2D:Ue,texImage3D:Y,texStorage2D:fe,texStorage3D:Me,texSubImage2D:S,texSubImage3D:te,compressedTexSubImage2D:ue,scissor:Ae,viewport:Ee,reset:ye}}function KS(o,e,t,n,r,a,u){const l=r.isWebGL2,d=r.maxTextures,h=r.maxCubemapSize,m=r.maxTextureSize,_=r.maxSamples,v=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,y=/OculusBrowser/g.test(navigator.userAgent),w=new WeakMap;let x;const p=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(D,S){return T?new OffscreenCanvas(D,S):Oa("canvas")}function F(D,S,te,ue){let fe=1;if((D.width>ue||D.height>ue)&&(fe=ue/Math.max(D.width,D.height)),fe<1||S===!0)if(typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&D instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&D instanceof ImageBitmap){const Me=S?sc:Math.floor,Ue=Me(fe*D.width),Y=Me(fe*D.height);x===void 0&&(x=R(Ue,Y));const Ae=te?R(Ue,Y):x;return Ae.width=Ue,Ae.height=Y,Ae.getContext("2d").drawImage(D,0,0,Ue,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Ue+"x"+Y+")."),Ae}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function P(D){return ph(D.width)&&ph(D.height)}function L(D){return l?!1:D.wrapS!==yn||D.wrapT!==yn||D.minFilter!==$t&&D.minFilter!==hn}function U(D,S){return D.generateMipmaps&&S&&D.minFilter!==$t&&D.minFilter!==hn}function V(D){o.generateMipmap(D)}function A(D,S,te,ue,fe=!1){if(l===!1)return S;if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Me=S;return S===6403&&(te===5126&&(Me=33326),te===5131&&(Me=33325),te===5121&&(Me=33321)),S===33319&&(te===5126&&(Me=33328),te===5131&&(Me=33327),te===5121&&(Me=33323)),S===6408&&(te===5126&&(Me=34836),te===5131&&(Me=34842),te===5121&&(Me=ue===gt&&fe===!1?35907:32856),te===32819&&(Me=32854),te===32820&&(Me=32855)),(Me===33325||Me===33326||Me===33327||Me===33328||Me===34842||Me===34836)&&e.get("EXT_color_buffer_float"),Me}function N(D,S,te){return U(D,te)===!0||D.isFramebufferTexture&&D.minFilter!==$t&&D.minFilter!==hn?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function ee(D){return D===$t||D===Gu||D===Hu?9728:9729}function q(D){const S=D.target;S.removeEventListener("dispose",q),pe(S),S.isVideoTexture&&w.delete(S)}function be(D){const S=D.target;S.removeEventListener("dispose",be),K(S)}function pe(D){const S=n.get(D);if(S.__webglInit===void 0)return;const te=D.source,ue=p.get(te);if(ue){const fe=ue[S.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&G(D),Object.keys(ue).length===0&&p.delete(te)}n.remove(D)}function G(D){const S=n.get(D);o.deleteTexture(S.__webglTexture);const te=D.source,ue=p.get(te);delete ue[S.__cacheKey],u.memory.textures--}function K(D){const S=D.texture,te=n.get(D),ue=n.get(S);if(ue.__webglTexture!==void 0&&(o.deleteTexture(ue.__webglTexture),u.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++)o.deleteFramebuffer(te.__webglFramebuffer[fe]),te.__webglDepthbuffer&&o.deleteRenderbuffer(te.__webglDepthbuffer[fe]);else{if(o.deleteFramebuffer(te.__webglFramebuffer),te.__webglDepthbuffer&&o.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&o.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer)for(let fe=0;fe<te.__webglColorRenderbuffer.length;fe++)te.__webglColorRenderbuffer[fe]&&o.deleteRenderbuffer(te.__webglColorRenderbuffer[fe]);te.__webglDepthRenderbuffer&&o.deleteRenderbuffer(te.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let fe=0,Me=S.length;fe<Me;fe++){const Ue=n.get(S[fe]);Ue.__webglTexture&&(o.deleteTexture(Ue.__webglTexture),u.memory.textures--),n.remove(S[fe])}n.remove(S),n.remove(D)}let J=0;function se(){J=0}function ae(){const D=J;return D>=d&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+d),J+=1,D}function j(D){const S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.encoding),S.join()}function ie(D,S){const te=n.get(D);if(D.isVideoTexture&&Kt(D),D.isRenderTargetTexture===!1&&D.version>0&&te.__version!==D.version){const ue=D.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(te,D,S);return}}t.activeTexture(33984+S),t.bindTexture(3553,te.__webglTexture)}function le(D,S){const te=n.get(D);if(D.version>0&&te.__version!==D.version){He(te,D,S);return}t.activeTexture(33984+S),t.bindTexture(35866,te.__webglTexture)}function oe(D,S){const te=n.get(D);if(D.version>0&&te.__version!==D.version){He(te,D,S);return}t.activeTexture(33984+S),t.bindTexture(32879,te.__webglTexture)}function ce(D,S){const te=n.get(D);if(D.version>0&&te.__version!==D.version){ke(te,D,S);return}t.activeTexture(33984+S),t.bindTexture(34067,te.__webglTexture)}const Se={[nc]:10497,[yn]:33071,[ic]:33648},De={[$t]:9728,[Gu]:9984,[Hu]:9986,[hn]:9729,[Gv]:9985,[Na]:9987};function Q(D,S,te){if(te?(o.texParameteri(D,10242,Se[S.wrapS]),o.texParameteri(D,10243,Se[S.wrapT]),(D===32879||D===35866)&&o.texParameteri(D,32882,Se[S.wrapR]),o.texParameteri(D,10240,De[S.magFilter]),o.texParameteri(D,10241,De[S.minFilter])):(o.texParameteri(D,10242,33071),o.texParameteri(D,10243,33071),(D===32879||D===35866)&&o.texParameteri(D,32882,33071),(S.wrapS!==yn||S.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(D,10240,ee(S.magFilter)),o.texParameteri(D,10241,ee(S.minFilter)),S.minFilter!==$t&&S.minFilter!==hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(S.type===Xi&&e.has("OES_texture_float_linear")===!1||l===!1&&S.type===Ss&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(o.texParameterf(D,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function ft(D,S){let te=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",q));const ue=S.source;let fe=p.get(ue);fe===void 0&&(fe={},p.set(ue,fe));const Me=j(S);if(Me!==D.__cacheKey){fe[Me]===void 0&&(fe[Me]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,te=!0),fe[Me].usedTimes++;const Ue=fe[D.__cacheKey];Ue!==void 0&&(fe[D.__cacheKey].usedTimes--,Ue.usedTimes===0&&G(S)),D.__cacheKey=Me,D.__webglTexture=fe[Me].texture}return te}function He(D,S,te){let ue=3553;S.isDataArrayTexture&&(ue=35866),S.isData3DTexture&&(ue=32879);const fe=ft(D,S),Me=S.source;if(t.activeTexture(33984+te),t.bindTexture(ue,D.__webglTexture),Me.version!==Me.__currentVersion||fe===!0){o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const Ue=L(S)&&P(S.image)===!1;let Y=F(S.image,Ue,!1,m);Y=yt(S,Y);const Ae=P(Y)||l,Ee=a.convert(S.format,S.encoding);let ye=a.convert(S.type),O=A(S.internalFormat,Ee,ye,S.encoding,S.isVideoTexture);Q(ue,S,Ae);let ge;const me=S.mipmaps,Ie=l&&S.isVideoTexture!==!0,Te=Me.__currentVersion===void 0||fe===!0,Oe=N(S,Y,Ae);if(S.isDepthTexture)O=6402,l?S.type===Xi?O=36012:S.type===qi?O=33190:S.type===Or?O=35056:O=33189:S.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ki&&O===6402&&S.type!==id&&S.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=qi,ye=a.convert(S.type)),S.format===Ur&&O===6402&&(O=34041,S.type!==Or&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Or,ye=a.convert(S.type))),Te&&(Ie?t.texStorage2D(3553,1,O,Y.width,Y.height):t.texImage2D(3553,0,O,Y.width,Y.height,0,Ee,ye,null));else if(S.isDataTexture)if(me.length>0&&Ae){Ie&&Te&&t.texStorage2D(3553,Oe,O,me[0].width,me[0].height);for(let de=0,Le=me.length;de<Le;de++)ge=me[de],Ie?t.texSubImage2D(3553,de,0,0,ge.width,ge.height,Ee,ye,ge.data):t.texImage2D(3553,de,O,ge.width,ge.height,0,Ee,ye,ge.data);S.generateMipmaps=!1}else Ie?(Te&&t.texStorage2D(3553,Oe,O,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Y.width,Y.height,Ee,ye,Y.data)):t.texImage2D(3553,0,O,Y.width,Y.height,0,Ee,ye,Y.data);else if(S.isCompressedTexture){Ie&&Te&&t.texStorage2D(3553,Oe,O,me[0].width,me[0].height);for(let de=0,Le=me.length;de<Le;de++)ge=me[de],S.format!==Cn?Ee!==null?Ie?t.compressedTexSubImage2D(3553,de,0,0,ge.width,ge.height,Ee,ge.data):t.compressedTexImage2D(3553,de,O,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?t.texSubImage2D(3553,de,0,0,ge.width,ge.height,Ee,ye,ge.data):t.texImage2D(3553,de,O,ge.width,ge.height,0,Ee,ye,ge.data)}else if(S.isDataArrayTexture)Ie?(Te&&t.texStorage3D(35866,Oe,O,Y.width,Y.height,Y.depth),t.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,Ee,ye,Y.data)):t.texImage3D(35866,0,O,Y.width,Y.height,Y.depth,0,Ee,ye,Y.data);else if(S.isData3DTexture)Ie?(Te&&t.texStorage3D(32879,Oe,O,Y.width,Y.height,Y.depth),t.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,Ee,ye,Y.data)):t.texImage3D(32879,0,O,Y.width,Y.height,Y.depth,0,Ee,ye,Y.data);else if(S.isFramebufferTexture){if(Te)if(Ie)t.texStorage2D(3553,Oe,O,Y.width,Y.height);else{let de=Y.width,Le=Y.height;for(let Ye=0;Ye<Oe;Ye++)t.texImage2D(3553,Ye,O,de,Le,0,Ee,ye,null),de>>=1,Le>>=1}}else if(me.length>0&&Ae){Ie&&Te&&t.texStorage2D(3553,Oe,O,me[0].width,me[0].height);for(let de=0,Le=me.length;de<Le;de++)ge=me[de],Ie?t.texSubImage2D(3553,de,0,0,Ee,ye,ge):t.texImage2D(3553,de,O,Ee,ye,ge);S.generateMipmaps=!1}else Ie?(Te&&t.texStorage2D(3553,Oe,O,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Ee,ye,Y)):t.texImage2D(3553,0,O,Ee,ye,Y);U(S,Ae)&&V(ue),Me.__currentVersion=Me.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function ke(D,S,te){if(S.image.length!==6)return;const ue=ft(D,S),fe=S.source;if(t.activeTexture(33984+te),t.bindTexture(34067,D.__webglTexture),fe.version!==fe.__currentVersion||ue===!0){o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const Me=S.isCompressedTexture||S.image[0].isCompressedTexture,Ue=S.image[0]&&S.image[0].isDataTexture,Y=[];for(let de=0;de<6;de++)!Me&&!Ue?Y[de]=F(S.image[de],!1,!0,h):Y[de]=Ue?S.image[de].image:S.image[de],Y[de]=yt(S,Y[de]);const Ae=Y[0],Ee=P(Ae)||l,ye=a.convert(S.format,S.encoding),O=a.convert(S.type),ge=A(S.internalFormat,ye,O,S.encoding),me=l&&S.isVideoTexture!==!0,Ie=fe.__currentVersion===void 0||ue===!0;let Te=N(S,Ae,Ee);Q(34067,S,Ee);let Oe;if(Me){me&&Ie&&t.texStorage2D(34067,Te,ge,Ae.width,Ae.height);for(let de=0;de<6;de++){Oe=Y[de].mipmaps;for(let Le=0;Le<Oe.length;Le++){const Ye=Oe[Le];S.format!==Cn?ye!==null?me?t.compressedTexSubImage2D(34069+de,Le,0,0,Ye.width,Ye.height,ye,Ye.data):t.compressedTexImage2D(34069+de,Le,ge,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?t.texSubImage2D(34069+de,Le,0,0,Ye.width,Ye.height,ye,O,Ye.data):t.texImage2D(34069+de,Le,ge,Ye.width,Ye.height,0,ye,O,Ye.data)}}}else{Oe=S.mipmaps,me&&Ie&&(Oe.length>0&&Te++,t.texStorage2D(34067,Te,ge,Y[0].width,Y[0].height));for(let de=0;de<6;de++)if(Ue){me?t.texSubImage2D(34069+de,0,0,0,Y[de].width,Y[de].height,ye,O,Y[de].data):t.texImage2D(34069+de,0,ge,Y[de].width,Y[de].height,0,ye,O,Y[de].data);for(let Le=0;Le<Oe.length;Le++){const Je=Oe[Le].image[de].image;me?t.texSubImage2D(34069+de,Le+1,0,0,Je.width,Je.height,ye,O,Je.data):t.texImage2D(34069+de,Le+1,ge,Je.width,Je.height,0,ye,O,Je.data)}}else{me?t.texSubImage2D(34069+de,0,0,0,ye,O,Y[de]):t.texImage2D(34069+de,0,ge,ye,O,Y[de]);for(let Le=0;Le<Oe.length;Le++){const Ye=Oe[Le];me?t.texSubImage2D(34069+de,Le+1,0,0,ye,O,Ye.image[de]):t.texImage2D(34069+de,Le+1,ge,ye,O,Ye.image[de])}}}U(S,Ee)&&V(34067),fe.__currentVersion=fe.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function xe(D,S,te,ue,fe){const Me=a.convert(te.format,te.encoding),Ue=a.convert(te.type),Y=A(te.internalFormat,Me,Ue,te.encoding);n.get(S).__hasExternalTextures||(fe===32879||fe===35866?t.texImage3D(fe,0,Y,S.width,S.height,S.depth,0,Me,Ue,null):t.texImage2D(fe,0,Y,S.width,S.height,0,Me,Ue,null)),t.bindFramebuffer(36160,D),Ze(S)?v.framebufferTexture2DMultisampleEXT(36160,ue,fe,n.get(te).__webglTexture,0,pt(S)):o.framebufferTexture2D(36160,ue,fe,n.get(te).__webglTexture,0),t.bindFramebuffer(36160,null)}function et(D,S,te){if(o.bindRenderbuffer(36161,D),S.depthBuffer&&!S.stencilBuffer){let ue=33189;if(te||Ze(S)){const fe=S.depthTexture;fe&&fe.isDepthTexture&&(fe.type===Xi?ue=36012:fe.type===qi&&(ue=33190));const Me=pt(S);Ze(S)?v.renderbufferStorageMultisampleEXT(36161,Me,ue,S.width,S.height):o.renderbufferStorageMultisample(36161,Me,ue,S.width,S.height)}else o.renderbufferStorage(36161,ue,S.width,S.height);o.framebufferRenderbuffer(36160,36096,36161,D)}else if(S.depthBuffer&&S.stencilBuffer){const ue=pt(S);te&&Ze(S)===!1?o.renderbufferStorageMultisample(36161,ue,35056,S.width,S.height):Ze(S)?v.renderbufferStorageMultisampleEXT(36161,ue,35056,S.width,S.height):o.renderbufferStorage(36161,34041,S.width,S.height),o.framebufferRenderbuffer(36160,33306,36161,D)}else{const ue=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let fe=0;fe<ue.length;fe++){const Me=ue[fe],Ue=a.convert(Me.format,Me.encoding),Y=a.convert(Me.type),Ae=A(Me.internalFormat,Ue,Y,Me.encoding),Ee=pt(S);te&&Ze(S)===!1?o.renderbufferStorageMultisample(36161,Ee,Ae,S.width,S.height):Ze(S)?v.renderbufferStorageMultisampleEXT(36161,Ee,Ae,S.width,S.height):o.renderbufferStorage(36161,Ae,S.width,S.height)}}o.bindRenderbuffer(36161,null)}function je(D,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ie(S.depthTexture,0);const ue=n.get(S.depthTexture).__webglTexture,fe=pt(S);if(S.depthTexture.format===Ki)Ze(S)?v.framebufferTexture2DMultisampleEXT(36160,36096,3553,ue,0,fe):o.framebufferTexture2D(36160,36096,3553,ue,0);else if(S.depthTexture.format===Ur)Ze(S)?v.framebufferTexture2DMultisampleEXT(36160,33306,3553,ue,0,fe):o.framebufferTexture2D(36160,33306,3553,ue,0);else throw new Error("Unknown depthTexture format")}function Fe(D){const S=n.get(D),te=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!S.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");je(S.__webglFramebuffer,D)}else if(te){S.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(36160,S.__webglFramebuffer[ue]),S.__webglDepthbuffer[ue]=o.createRenderbuffer(),et(S.__webglDepthbuffer[ue],D,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),et(S.__webglDepthbuffer,D,!1);t.bindFramebuffer(36160,null)}function _t(D,S,te){const ue=n.get(D);S!==void 0&&xe(ue.__webglFramebuffer,D,D.texture,36064,3553),te!==void 0&&Fe(D)}function Et(D){const S=D.texture,te=n.get(D),ue=n.get(S);D.addEventListener("dispose",be),D.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=o.createTexture()),ue.__version=S.version,u.memory.textures++);const fe=D.isWebGLCubeRenderTarget===!0,Me=D.isWebGLMultipleRenderTargets===!0,Ue=P(D)||l;if(fe){te.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)te.__webglFramebuffer[Y]=o.createFramebuffer()}else{if(te.__webglFramebuffer=o.createFramebuffer(),Me)if(r.drawBuffers){const Y=D.texture;for(let Ae=0,Ee=Y.length;Ae<Ee;Ae++){const ye=n.get(Y[Ae]);ye.__webglTexture===void 0&&(ye.__webglTexture=o.createTexture(),u.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&D.samples>0&&Ze(D)===!1){const Y=Me?S:[S];te.__webglMultisampledFramebuffer=o.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,te.__webglMultisampledFramebuffer);for(let Ae=0;Ae<Y.length;Ae++){const Ee=Y[Ae];te.__webglColorRenderbuffer[Ae]=o.createRenderbuffer(),o.bindRenderbuffer(36161,te.__webglColorRenderbuffer[Ae]);const ye=a.convert(Ee.format,Ee.encoding),O=a.convert(Ee.type),ge=A(Ee.internalFormat,ye,O,Ee.encoding),me=pt(D);o.renderbufferStorageMultisample(36161,me,ge,D.width,D.height),o.framebufferRenderbuffer(36160,36064+Ae,36161,te.__webglColorRenderbuffer[Ae])}o.bindRenderbuffer(36161,null),D.depthBuffer&&(te.__webglDepthRenderbuffer=o.createRenderbuffer(),et(te.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(36160,null)}}if(fe){t.bindTexture(34067,ue.__webglTexture),Q(34067,S,Ue);for(let Y=0;Y<6;Y++)xe(te.__webglFramebuffer[Y],D,S,36064,34069+Y);U(S,Ue)&&V(34067),t.unbindTexture()}else if(Me){const Y=D.texture;for(let Ae=0,Ee=Y.length;Ae<Ee;Ae++){const ye=Y[Ae],O=n.get(ye);t.bindTexture(3553,O.__webglTexture),Q(3553,ye,Ue),xe(te.__webglFramebuffer,D,ye,36064+Ae,3553),U(ye,Ue)&&V(3553)}t.unbindTexture()}else{let Y=3553;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(l?Y=D.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Y,ue.__webglTexture),Q(Y,S,Ue),xe(te.__webglFramebuffer,D,S,36064,Y),U(S,Ue)&&V(Y),t.unbindTexture()}D.depthBuffer&&Fe(D)}function Dt(D){const S=P(D)||l,te=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let ue=0,fe=te.length;ue<fe;ue++){const Me=te[ue];if(U(Me,S)){const Ue=D.isWebGLCubeRenderTarget?34067:3553,Y=n.get(Me).__webglTexture;t.bindTexture(Ue,Y),V(Ue),t.unbindTexture()}}}function Bt(D){if(l&&D.samples>0&&Ze(D)===!1){const S=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],te=D.width,ue=D.height;let fe=16384;const Me=[],Ue=D.stencilBuffer?33306:36096,Y=n.get(D),Ae=D.isWebGLMultipleRenderTargets===!0;if(Ae)for(let Ee=0;Ee<S.length;Ee++)t.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+Ee,36161,null),t.bindFramebuffer(36160,Y.__webglFramebuffer),o.framebufferTexture2D(36009,36064+Ee,3553,null,0);t.bindFramebuffer(36008,Y.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Y.__webglFramebuffer);for(let Ee=0;Ee<S.length;Ee++){Me.push(36064+Ee),D.depthBuffer&&Me.push(Ue);const ye=Y.__ignoreDepthValues!==void 0?Y.__ignoreDepthValues:!1;if(ye===!1&&(D.depthBuffer&&(fe|=256),D.stencilBuffer&&(fe|=1024)),Ae&&o.framebufferRenderbuffer(36008,36064,36161,Y.__webglColorRenderbuffer[Ee]),ye===!0&&(o.invalidateFramebuffer(36008,[Ue]),o.invalidateFramebuffer(36009,[Ue])),Ae){const O=n.get(S[Ee]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,O,0)}o.blitFramebuffer(0,0,te,ue,0,0,te,ue,fe,9728),y&&o.invalidateFramebuffer(36008,Me)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Ae)for(let Ee=0;Ee<S.length;Ee++){t.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+Ee,36161,Y.__webglColorRenderbuffer[Ee]);const ye=n.get(S[Ee]).__webglTexture;t.bindFramebuffer(36160,Y.__webglFramebuffer),o.framebufferTexture2D(36009,36064+Ee,3553,ye,0)}t.bindFramebuffer(36009,Y.__webglMultisampledFramebuffer)}}function pt(D){return Math.min(_,D.samples)}function Ze(D){const S=n.get(D);return l&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Kt(D){const S=u.render.frame;w.get(D)!==S&&(w.set(D,S),D.update())}function yt(D,S){const te=D.encoding,ue=D.format,fe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===rc||te!==er&&(te===gt?l===!1?e.has("EXT_sRGB")===!0&&ue===Cn?(D.format=rc,D.minFilter=hn,D.generateMipmaps=!1):S=od.sRGBToLinear(S):(ue!==Cn||fe!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",te)),S}this.allocateTextureUnit=ae,this.resetTextureUnits=se,this.setTexture2D=ie,this.setTexture2DArray=le,this.setTexture3D=oe,this.setTextureCube=ce,this.rebindTextures=_t,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ze}function ZS(o,e,t){const n=t.isWebGL2;function r(a,u=null){let l;if(a===Qi)return 5121;if(a===qv)return 32819;if(a===Xv)return 32820;if(a===Hv)return 5120;if(a===Wv)return 5122;if(a===id)return 5123;if(a===jv)return 5124;if(a===qi)return 5125;if(a===Xi)return 5126;if(a===Ss)return n?5131:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(a===$v)return 6406;if(a===Cn)return 6408;if(a===Kv)return 6409;if(a===Zv)return 6410;if(a===Ki)return 6402;if(a===Ur)return 34041;if(a===Jv)return 6403;if(a===Yv)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===rc)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(a===Qv)return 36244;if(a===e0)return 33319;if(a===t0)return 33320;if(a===n0)return 36249;if(a===yl||a===bl||a===Sl||a===Ml)if(u===gt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===yl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Sl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ml)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===yl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===bl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Sl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ml)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Wu||a===ju||a===qu||a===Xu)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Wu)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ju)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===qu)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Xu)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===i0)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===$u||a===Yu)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===$u)return u===gt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Yu)return u===gt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ku||a===Zu||a===Ju||a===Qu||a===eh||a===th||a===nh||a===ih||a===rh||a===sh||a===ah||a===oh||a===lh||a===ch)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Ku)return u===gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Zu)return u===gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ju)return u===gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Qu)return u===gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===eh)return u===gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===th)return u===gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===nh)return u===gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ih)return u===gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===rh)return u===gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===sh)return u===gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ah)return u===gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===oh)return u===gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===lh)return u===gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===ch)return u===gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===uh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===uh)return u===gt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===Or?n?34042:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):o[a]!==void 0?o[a]:null}return{convert:r}}class JS extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class La extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QS={type:"move"};class Jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new La,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new La,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new La,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,u=null;const l=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n);if(h.joints[x.jointName]===void 0){const R=new La;R.matrixAutoUpdate=!1,R.visible=!1,h.joints[x.jointName]=R,h.add(R)}const T=h.joints[x.jointName];p!==null&&(T.matrix.fromArray(p.transform.matrix),T.matrix.decompose(T.position,T.rotation,T.scale),T.jointRadius=p.radius),T.visible=p!==null}const m=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=m.position.distanceTo(_.position),y=.02,w=.005;h.inputState.pinching&&v>y+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=y-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(QS)))}return l!==null&&(l.visible=r!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),this}}class eM extends Sn{constructor(e,t,n,r,a,u,l,d,h,m){if(m=m!==void 0?m:Ki,m!==Ki&&m!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&m===Ki&&(n=qi),n===void 0&&m===Ur&&(n=Or),super(null,r,a,u,l,d,m,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:$t,this.minFilter=d!==void 0?d:$t,this.flipY=!1,this.generateMipmaps=!1}}class tM extends kr{constructor(e,t){super();const n=this;let r=null,a=1,u=null,l="local-floor",d=null,h=null,m=null,_=null,v=null,y=null;const w=t.getContextAttributes();let x=null,p=null;const T=[],R=[],F=new dn;F.layers.enable(1),F.viewport=new wt;const P=new dn;P.layers.enable(2),P.viewport=new wt;const L=[F,P],U=new JS;U.layers.enable(1),U.layers.enable(2);let V=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=T[j];return ie===void 0&&(ie=new Jl,T[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=T[j];return ie===void 0&&(ie=new Jl,T[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=T[j];return ie===void 0&&(ie=new Jl,T[j]=ie),ie.getHandSpace()};function N(j){const ie=R.indexOf(j.inputSource);if(ie===-1)return;const le=T[ie];le!==void 0&&le.dispatchEvent({type:j.type,data:j.inputSource})}function ee(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",q);for(let j=0;j<T.length;j++){const ie=R[j];ie!==null&&(R[j]=null,T[j].disconnect(ie))}V=null,A=null,e.setRenderTarget(x),v=null,_=null,m=null,r=null,p=null,ae.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){l=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(j){d=j},this.getBaseLayer=function(){return _!==null?_:v},this.getBinding=function(){return m},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",q),w.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:r.renderState.layers===void 0?w.antialias:!0,alpha:w.alpha,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:v}),p=new tr(v.framebufferWidth,v.framebufferHeight,{format:Cn,type:Qi,encoding:e.outputEncoding})}else{let ie=null,le=null,oe=null;w.depth&&(oe=w.stencil?35056:33190,ie=w.stencil?Ur:Ki,le=w.stencil?Or:qi);const ce={colorFormat:32856,depthFormat:oe,scaleFactor:a};m=new XRWebGLBinding(r,t),_=m.createProjectionLayer(ce),r.updateRenderState({layers:[_]}),p=new tr(_.textureWidth,_.textureHeight,{format:Cn,type:Qi,depthTexture:new eM(_.textureWidth,_.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:w.stencil,encoding:e.outputEncoding,samples:w.antialias?4:0});const Se=e.properties.get(p);Se.__ignoreDepthValues=_.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),d=null,u=await r.requestReferenceSpace(l),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function q(j){for(let ie=0;ie<j.removed.length;ie++){const le=j.removed[ie],oe=R.indexOf(le);oe>=0&&(R[oe]=null,T[oe].dispatchEvent({type:"disconnected",data:le}))}for(let ie=0;ie<j.added.length;ie++){const le=j.added[ie];let oe=R.indexOf(le);if(oe===-1){for(let Se=0;Se<T.length;Se++)if(Se>=R.length){R.push(le),oe=Se;break}else if(R[Se]===null){R[Se]=le,oe=Se;break}if(oe===-1)break}const ce=T[oe];ce&&ce.dispatchEvent({type:"connected",data:le})}}const be=new B,pe=new B;function G(j,ie,le){be.setFromMatrixPosition(ie.matrixWorld),pe.setFromMatrixPosition(le.matrixWorld);const oe=be.distanceTo(pe),ce=ie.projectionMatrix.elements,Se=le.projectionMatrix.elements,De=ce[14]/(ce[10]-1),Q=ce[14]/(ce[10]+1),ft=(ce[9]+1)/ce[5],He=(ce[9]-1)/ce[5],ke=(ce[8]-1)/ce[0],xe=(Se[8]+1)/Se[0],et=De*ke,je=De*xe,Fe=oe/(-ke+xe),_t=Fe*-ke;ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(_t),j.translateZ(Fe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const Et=De+Fe,Dt=Q+Fe,Bt=et-_t,pt=je+(oe-_t),Ze=ft*Q/Dt*Et,Kt=He*Q/Dt*Et;j.projectionMatrix.makePerspective(Bt,pt,Ze,Kt,Et,Dt)}function K(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;U.near=P.near=F.near=j.near,U.far=P.far=F.far=j.far,(V!==U.near||A!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),V=U.near,A=U.far);const ie=j.parent,le=U.cameras;K(U,ie);for(let ce=0;ce<le.length;ce++)K(le[ce],ie);U.matrixWorld.decompose(U.position,U.quaternion,U.scale),j.position.copy(U.position),j.quaternion.copy(U.quaternion),j.scale.copy(U.scale),j.matrix.copy(U.matrix),j.matrixWorld.copy(U.matrixWorld);const oe=j.children;for(let ce=0,Se=oe.length;ce<Se;ce++)oe[ce].updateMatrixWorld(!0);le.length===2?G(U,F,P):U.projectionMatrix.copy(F.projectionMatrix)},this.getCamera=function(){return U},this.getFoveation=function(){if(_!==null)return _.fixedFoveation;if(v!==null)return v.fixedFoveation},this.setFoveation=function(j){_!==null&&(_.fixedFoveation=j),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=j)};let J=null;function se(j,ie){if(h=ie.getViewerPose(d||u),y=ie,h!==null){const le=h.views;v!==null&&(e.setRenderTargetFramebuffer(p,v.framebuffer),e.setRenderTarget(p));let oe=!1;le.length!==U.cameras.length&&(U.cameras.length=0,oe=!0);for(let ce=0;ce<le.length;ce++){const Se=le[ce];let De=null;if(v!==null)De=v.getViewport(Se);else{const ft=m.getViewSubImage(_,Se);De=ft.viewport,ce===0&&(e.setRenderTargetTextures(p,ft.colorTexture,_.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(p))}let Q=L[ce];Q===void 0&&(Q=new dn,Q.layers.enable(ce),Q.viewport=new wt,L[ce]=Q),Q.matrix.fromArray(Se.transform.matrix),Q.projectionMatrix.fromArray(Se.projectionMatrix),Q.viewport.set(De.x,De.y,De.width,De.height),ce===0&&U.matrix.copy(Q.matrix),oe===!0&&U.cameras.push(Q)}}for(let le=0;le<T.length;le++){const oe=R[le],ce=T[le];oe!==null&&ce!==void 0&&ce.update(oe,ie,d||u)}J&&J(j,ie),y=null}const ae=new gd;ae.setAnimationLoop(se),this.setAnimationLoop=function(j){J=j},this.dispose=function(){}}}function nM(o,e){function t(x,p){x.fogColor.value.copy(p.color),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function n(x,p,T,R,F){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(x,p):p.isMeshToonMaterial?(r(x,p),m(x,p)):p.isMeshPhongMaterial?(r(x,p),h(x,p)):p.isMeshStandardMaterial?(r(x,p),_(x,p),p.isMeshPhysicalMaterial&&v(x,p,F)):p.isMeshMatcapMaterial?(r(x,p),y(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),w(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&u(x,p)):p.isPointsMaterial?l(x,p,T,R):p.isSpriteMaterial?d(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map),p.alphaMap&&(x.alphaMap.value=p.alphaMap),p.bumpMap&&(x.bumpMap.value=p.bumpMap,x.bumpScale.value=p.bumpScale,p.side===bn&&(x.bumpScale.value*=-1)),p.displacementMap&&(x.displacementMap.value=p.displacementMap,x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap),p.normalMap&&(x.normalMap.value=p.normalMap,x.normalScale.value.copy(p.normalScale),p.side===bn&&x.normalScale.value.negate()),p.specularMap&&(x.specularMap.value=p.specularMap),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const T=e.get(p).envMap;if(T&&(x.envMap.value=T,x.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap){x.lightMap.value=p.lightMap;const P=o.physicallyCorrectLights!==!0?Math.PI:1;x.lightMapIntensity.value=p.lightMapIntensity*P}p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity);let R;p.map?R=p.map:p.specularMap?R=p.specularMap:p.displacementMap?R=p.displacementMap:p.normalMap?R=p.normalMap:p.bumpMap?R=p.bumpMap:p.roughnessMap?R=p.roughnessMap:p.metalnessMap?R=p.metalnessMap:p.alphaMap?R=p.alphaMap:p.emissiveMap?R=p.emissiveMap:p.clearcoatMap?R=p.clearcoatMap:p.clearcoatNormalMap?R=p.clearcoatNormalMap:p.clearcoatRoughnessMap?R=p.clearcoatRoughnessMap:p.iridescenceMap?R=p.iridescenceMap:p.iridescenceThicknessMap?R=p.iridescenceThicknessMap:p.specularIntensityMap?R=p.specularIntensityMap:p.specularColorMap?R=p.specularColorMap:p.transmissionMap?R=p.transmissionMap:p.thicknessMap?R=p.thicknessMap:p.sheenColorMap?R=p.sheenColorMap:p.sheenRoughnessMap&&(R=p.sheenRoughnessMap),R!==void 0&&(R.isWebGLRenderTarget&&(R=R.texture),R.matrixAutoUpdate===!0&&R.updateMatrix(),x.uvTransform.value.copy(R.matrix));let F;p.aoMap?F=p.aoMap:p.lightMap&&(F=p.lightMap),F!==void 0&&(F.isWebGLRenderTarget&&(F=F.texture),F.matrixAutoUpdate===!0&&F.updateMatrix(),x.uv2Transform.value.copy(F.matrix))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity}function u(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,T,R){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*T,x.scale.value=R*.5,p.map&&(x.map.value=p.map),p.alphaMap&&(x.alphaMap.value=p.alphaMap),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);let F;p.map?F=p.map:p.alphaMap&&(F=p.alphaMap),F!==void 0&&(F.matrixAutoUpdate===!0&&F.updateMatrix(),x.uvTransform.value.copy(F.matrix))}function d(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map),p.alphaMap&&(x.alphaMap.value=p.alphaMap),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);let T;p.map?T=p.map:p.alphaMap&&(T=p.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),x.uvTransform.value.copy(T.matrix))}function h(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function m(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function _(x,p){x.roughness.value=p.roughness,x.metalness.value=p.metalness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function v(x,p,T){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),x.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===bn&&x.clearcoatNormalScale.value.negate())),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap)}function y(x,p){p.matcap&&(x.matcap.value=p.matcap)}function w(x,p){x.referencePosition.value.copy(p.referencePosition),x.nearDistance.value=p.nearDistance,x.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function iM(){const o=Oa("canvas");return o.style.display="block",o}function Md(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:iM(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,r=o.stencil!==void 0?o.stencil:!0,a=o.antialias!==void 0?o.antialias:!1,u=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,l=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,d=o.powerPreference!==void 0?o.powerPreference:"default",h=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let m;t!==null?m=t.getContextAttributes().alpha:m=o.alpha!==void 0?o.alpha:!1;let _=null,v=null;const y=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=er,this.physicallyCorrectLights=!1,this.toneMapping=Wn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const x=this;let p=!1,T=0,R=0,F=null,P=-1,L=null;const U=new wt,V=new wt;let A=null,N=e.width,ee=e.height,q=1,be=null,pe=null;const G=new wt(0,0,N,ee),K=new wt(0,0,N,ee);let J=!1;const se=new cc;let ae=!1,j=!1,ie=null;const le=new Tt,oe=new tt,ce=new B,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return F===null?q:1}let Q=t;function ft(E,k){for(let $=0;$<E.length;$++){const H=E[$],re=e.getContext(H,k);if(re!==null)return re}return null}try{const E={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oc}`),e.addEventListener("webglcontextlost",O,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",me,!1),Q===null){const k=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&k.shift(),Q=ft(k,E),Q===null)throw ft(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let He,ke,xe,et,je,Fe,_t,Et,Dt,Bt,pt,Ze,Kt,yt,D,S,te,ue,fe,Me,Ue,Y,Ae;function Ee(){He=new pb(Q),ke=new lb(Q,He,o),He.init(ke),Y=new ZS(Q,He,ke),xe=new YS(Q,He,ke),et=new _b,je=new FS,Fe=new KS(Q,He,xe,je,ke,Y,et),_t=new ub(x),Et=new fb(x),Dt=new P0(Q,ke),Ae=new ab(Q,He,Dt,ke),Bt=new mb(Q,Dt,et,Ae),pt=new bb(Q,Bt,Dt,et),fe=new yb(Q,ke,Fe),S=new cb(je),Ze=new OS(x,_t,Et,He,ke,Ae,S),Kt=new nM(x,je),yt=new zS,D=new HS(He,ke),ue=new sb(x,_t,xe,pt,m,u),te=new $S(x,pt,ke),Me=new ob(Q,He,et,ke),Ue=new gb(Q,He,et,ke),et.programs=Ze.programs,x.capabilities=ke,x.extensions=He,x.properties=je,x.renderLists=yt,x.shadowMap=te,x.state=xe,x.info=et}Ee();const ye=new tM(x,Q);this.xr=ye,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const E=He.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=He.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(N,ee,!1))},this.getSize=function(E){return E.set(N,ee)},this.setSize=function(E,k,$){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,ee=k,e.width=Math.floor(E*q),e.height=Math.floor(k*q),$!==!1&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(N*q,ee*q).floor()},this.setDrawingBufferSize=function(E,k,$){N=E,ee=k,q=$,e.width=Math.floor(E*$),e.height=Math.floor(k*$),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(U)},this.getViewport=function(E){return E.copy(G)},this.setViewport=function(E,k,$,H){E.isVector4?G.set(E.x,E.y,E.z,E.w):G.set(E,k,$,H),xe.viewport(U.copy(G).multiplyScalar(q).floor())},this.getScissor=function(E){return E.copy(K)},this.setScissor=function(E,k,$,H){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,k,$,H),xe.scissor(V.copy(K).multiplyScalar(q).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(E){xe.setScissorTest(J=E)},this.setOpaqueSort=function(E){be=E},this.setTransparentSort=function(E){pe=E},this.getClearColor=function(E){return E.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(E=!0,k=!0,$=!0){let H=0;E&&(H|=16384),k&&(H|=256),$&&(H|=1024),Q.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",O,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",me,!1),yt.dispose(),D.dispose(),je.dispose(),_t.dispose(),Et.dispose(),pt.dispose(),Ae.dispose(),Ze.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Ye),ye.removeEventListener("sessionend",Je),ie&&(ie.dispose(),ie=null),bt.stop()};function O(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=et.autoReset,k=te.enabled,$=te.autoUpdate,H=te.needsUpdate,re=te.type;Ee(),et.autoReset=E,te.enabled=k,te.autoUpdate=$,te.needsUpdate=H,te.type=re}function me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ie(E){const k=E.target;k.removeEventListener("dispose",Ie),Te(k)}function Te(E){Oe(E),je.remove(E)}function Oe(E){const k=je.get(E).programs;k!==void 0&&(k.forEach(function($){Ze.releaseProgram($)}),E.isShaderMaterial&&Ze.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,$,H,re,Ne){k===null&&(k=Se);const Re=re.isMesh&&re.matrixWorld.determinant()<0,Ge=jr(E,k,$,H,re);xe.setMaterial(H,Re);let ze=$.index;const Qe=$.attributes.position;if(ze===null){if(Qe===void 0||Qe.count===0)return}else if(ze.count===0)return;let We=1;H.wireframe===!0&&(ze=Bt.getWireframeAttribute($),We=2),Ae.setup(re,H,Ge,$,ze);let Xe,at=Me;ze!==null&&(Xe=Dt.get(ze),at=Ue,at.setIndex(Xe));const pn=ze!==null?ze.count:Qe.count,Mn=$.drawRange.start*We,wn=$.drawRange.count*We,Gt=Ne!==null?Ne.start*We:0,Ke=Ne!==null?Ne.count*We:1/0,Tn=Math.max(Mn,Gt),ht=Math.min(pn,Mn+wn,Gt+Ke)-1,Ht=Math.max(0,ht-Tn+1);if(Ht!==0){if(re.isMesh)H.wireframe===!0?(xe.setLineWidth(H.wireframeLinewidth*De()),at.setMode(1)):at.setMode(4);else if(re.isLine){let Lt=H.linewidth;Lt===void 0&&(Lt=1),xe.setLineWidth(Lt*De()),re.isLineSegments?at.setMode(1):re.isLineLoop?at.setMode(2):at.setMode(3)}else re.isPoints?at.setMode(0):re.isSprite&&at.setMode(4);if(re.isInstancedMesh)at.renderInstances(Tn,Ht,re.count);else if($.isInstancedBufferGeometry){const Lt=Math.min($.instanceCount,$._maxInstanceCount);at.renderInstances(Tn,Ht,Lt)}else at.render(Tn,Ht)}},this.compile=function(E,k){v=D.get(E),v.init(),w.push(v),E.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),v.setupLights(x.physicallyCorrectLights),E.traverse(function($){const H=$.material;if(H)if(Array.isArray(H))for(let re=0;re<H.length;re++){const Ne=H[re];di(Ne,E,$)}else di(H,E,$)}),w.pop(),v=null};let de=null;function Le(E){de&&de(E)}function Ye(){bt.stop()}function Je(){bt.start()}const bt=new gd;bt.setAnimationLoop(Le),typeof self!="undefined"&&bt.setContext(self),this.setAnimationLoop=function(E){de=E,ye.setAnimationLoop(E),E===null?bt.stop():bt.start()},ye.addEventListener("sessionstart",Ye),ye.addEventListener("sessionend",Je),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(k),k=ye.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,k,F),v=D.get(E,w.length),v.init(),w.push(v),le.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),se.setFromProjectionMatrix(le),j=this.localClippingEnabled,ae=S.init(this.clippingPlanes,j,k),_=yt.get(E,y.length),_.init(),y.push(_),kt(E,k,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(be,pe),ae===!0&&S.beginShadows();const $=v.state.shadowsArray;if(te.render($,E,k),ae===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),ue.render(_,E),v.setupLights(x.physicallyCorrectLights),k.isArrayCamera){const H=k.cameras;for(let re=0,Ne=H.length;re<Ne;re++){const Re=H[re];ir(_,E,Re,Re.viewport)}}else ir(_,E,k);F!==null&&(Fe.updateMultisampleRenderTarget(F),Fe.updateRenderTargetMipmap(F)),E.isScene===!0&&E.onAfterRender(x,E,k),Ae.resetDefaultState(),P=-1,L=null,w.pop(),w.length>0?v=w[w.length-1]:v=null,y.pop(),y.length>0?_=y[y.length-1]:_=null};function kt(E,k,$,H){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)v.pushLight(E),E.castShadow&&v.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||se.intersectsSprite(E)){H&&ce.setFromMatrixPosition(E.matrixWorld).applyMatrix4(le);const Re=pt.update(E),Ge=E.material;Ge.visible&&_.push(E,Re,Ge,$,ce.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==et.render.frame&&(E.skeleton.update(),E.skeleton.frame=et.render.frame),!E.frustumCulled||se.intersectsObject(E))){H&&ce.setFromMatrixPosition(E.matrixWorld).applyMatrix4(le);const Re=pt.update(E),Ge=E.material;if(Array.isArray(Ge)){const ze=Re.groups;for(let Qe=0,We=ze.length;Qe<We;Qe++){const Xe=ze[Qe],at=Ge[Xe.materialIndex];at&&at.visible&&_.push(E,Re,at,$,ce.z,Xe)}}else Ge.visible&&_.push(E,Re,Ge,$,ce.z,null)}}const Ne=E.children;for(let Re=0,Ge=Ne.length;Re<Ge;Re++)kt(Ne[Re],k,$,H)}function ir(E,k,$,H){const re=E.opaque,Ne=E.transmissive,Re=E.transparent;v.setupLightsView($),Ne.length>0&&Hr(re,k,$),H&&xe.viewport(U.copy(H)),re.length>0&&Vt(re,k,$),Ne.length>0&&Vt(Ne,k,$),Re.length>0&&Vt(Re,k,$),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Hr(E,k,$){const H=ke.isWebGL2;ie===null&&(ie=new tr(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")?Ss:Qi,minFilter:Na,samples:H&&a===!0?4:0})),x.getDrawingBufferSize(oe),H?ie.setSize(oe.x,oe.y):ie.setSize(sc(oe.x),sc(oe.y));const re=x.getRenderTarget();x.setRenderTarget(ie),x.clear();const Ne=x.toneMapping;x.toneMapping=Wn,Vt(E,k,$),x.toneMapping=Ne,Fe.updateMultisampleRenderTarget(ie),Fe.updateRenderTargetMipmap(ie),x.setRenderTarget(re)}function Vt(E,k,$){const H=k.isScene===!0?k.overrideMaterial:null;for(let re=0,Ne=E.length;re<Ne;re++){const Re=E[re],Ge=Re.object,ze=Re.geometry,Qe=H===null?Re.material:H,We=Re.group;Ge.layers.test($.layers)&&Wr(Ge,k,$,ze,Qe,We)}}function Wr(E,k,$,H,re,Ne){E.onBeforeRender(x,k,$,H,re,Ne),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),re.onBeforeRender(x,k,$,H,E,Ne),re.transparent===!0&&re.side===Fr?(re.side=bn,re.needsUpdate=!0,x.renderBufferDirect($,k,H,re,E,Ne),re.side=bs,re.needsUpdate=!0,x.renderBufferDirect($,k,H,re,E,Ne),re.side=Fr):x.renderBufferDirect($,k,H,re,E,Ne),E.onAfterRender(x,k,$,H,re,Ne)}function di(E,k,$){k.isScene!==!0&&(k=Se);const H=je.get(E),re=v.state.lights,Ne=v.state.shadowsArray,Re=re.state.version,Ge=Ze.getParameters(E,re.state,Ne,k,$),ze=Ze.getProgramCacheKey(Ge);let Qe=H.programs;H.environment=E.isMeshStandardMaterial?k.environment:null,H.fog=k.fog,H.envMap=(E.isMeshStandardMaterial?Et:_t).get(E.envMap||H.environment),Qe===void 0&&(E.addEventListener("dispose",Ie),Qe=new Map,H.programs=Qe);let We=Qe.get(ze);if(We!==void 0){if(H.currentProgram===We&&H.lightsStateVersion===Re)return rr(E,Ge),We}else Ge.uniforms=Ze.getUniforms(E),E.onBuild($,Ge,x),E.onBeforeCompile(Ge,x),We=Ze.acquireProgram(Ge,ze),Qe.set(ze,We),H.uniforms=Ge.uniforms;const Xe=H.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Xe.clippingPlanes=S.uniform),rr(E,Ge),H.needsLights=Xr(E),H.lightsStateVersion=Re,H.needsLights&&(Xe.ambientLightColor.value=re.state.ambient,Xe.lightProbe.value=re.state.probe,Xe.directionalLights.value=re.state.directional,Xe.directionalLightShadows.value=re.state.directionalShadow,Xe.spotLights.value=re.state.spot,Xe.spotLightShadows.value=re.state.spotShadow,Xe.rectAreaLights.value=re.state.rectArea,Xe.ltc_1.value=re.state.rectAreaLTC1,Xe.ltc_2.value=re.state.rectAreaLTC2,Xe.pointLights.value=re.state.point,Xe.pointLightShadows.value=re.state.pointShadow,Xe.hemisphereLights.value=re.state.hemi,Xe.directionalShadowMap.value=re.state.directionalShadowMap,Xe.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Xe.spotShadowMap.value=re.state.spotShadowMap,Xe.spotShadowMatrix.value=re.state.spotShadowMatrix,Xe.pointShadowMap.value=re.state.pointShadowMap,Xe.pointShadowMatrix.value=re.state.pointShadowMatrix);const at=We.getUniforms(),pn=Ia.seqWithValue(at.seq,Xe);return H.currentProgram=We,H.uniformsList=pn,We}function rr(E,k){const $=je.get(E);$.outputEncoding=k.outputEncoding,$.instancing=k.instancing,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function jr(E,k,$,H,re){k.isScene!==!0&&(k=Se),Fe.resetTextureUnits();const Ne=k.fog,Re=H.isMeshStandardMaterial?k.environment:null,Ge=F===null?x.outputEncoding:F.isXRRenderTarget===!0?F.texture.encoding:er,ze=(H.isMeshStandardMaterial?Et:_t).get(H.envMap||Re),Qe=H.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,We=!!H.normalMap&&!!$.attributes.tangent,Xe=!!$.morphAttributes.position,at=!!$.morphAttributes.normal,pn=!!$.morphAttributes.color,Mn=H.toneMapped?x.toneMapping:Wn,wn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Gt=wn!==void 0?wn.length:0,Ke=je.get(H),Tn=v.state.lights;if(ae===!0&&(j===!0||E!==L)){const jt=E===L&&H.id===P;S.setState(H,E,jt)}let ht=!1;H.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Tn.state.version||Ke.outputEncoding!==Ge||re.isInstancedMesh&&Ke.instancing===!1||!re.isInstancedMesh&&Ke.instancing===!0||re.isSkinnedMesh&&Ke.skinning===!1||!re.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==ze||H.fog===!0&&Ke.fog!==Ne||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==S.numPlanes||Ke.numIntersection!==S.numIntersection)||Ke.vertexAlphas!==Qe||Ke.vertexTangents!==We||Ke.morphTargets!==Xe||Ke.morphNormals!==at||Ke.morphColors!==pn||Ke.toneMapping!==Mn||ke.isWebGL2===!0&&Ke.morphTargetsCount!==Gt)&&(ht=!0):(ht=!0,Ke.__version=H.version);let Ht=Ke.currentProgram;ht===!0&&(Ht=di(H,k,re));let Lt=!1,Ln=!1,fi=!1;const St=Ht.getUniforms(),Wt=Ke.uniforms;if(xe.useProgram(Ht.program)&&(Lt=!0,Ln=!0,fi=!0),H.id!==P&&(P=H.id,Ln=!0),Lt||L!==E){if(St.setValue(Q,"projectionMatrix",E.projectionMatrix),ke.logarithmicDepthBuffer&&St.setValue(Q,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),L!==E&&(L=E,Ln=!0,fi=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const jt=St.map.cameraPosition;jt!==void 0&&jt.setValue(Q,ce.setFromMatrixPosition(E.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&St.setValue(Q,"isOrthographic",E.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||re.isSkinnedMesh)&&St.setValue(Q,"viewMatrix",E.matrixWorldInverse)}if(re.isSkinnedMesh){St.setOptional(Q,re,"bindMatrix"),St.setOptional(Q,re,"bindMatrixInverse");const jt=re.skeleton;jt&&(ke.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),St.setValue(Q,"boneTexture",jt.boneTexture,Fe),St.setValue(Q,"boneTextureSize",jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const qn=$.morphAttributes;return(qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0&&ke.isWebGL2===!0)&&fe.update(re,$,H,Ht),(Ln||Ke.receiveShadow!==re.receiveShadow)&&(Ke.receiveShadow=re.receiveShadow,St.setValue(Q,"receiveShadow",re.receiveShadow)),Ln&&(St.setValue(Q,"toneMappingExposure",x.toneMappingExposure),Ke.needsLights&&qr(Wt,fi),Ne&&H.fog===!0&&Kt.refreshFogUniforms(Wt,Ne),Kt.refreshMaterialUniforms(Wt,H,q,ee,ie),Ia.upload(Q,Ke.uniformsList,Wt,Fe)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ia.upload(Q,Ke.uniformsList,Wt,Fe),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&St.setValue(Q,"center",re.center),St.setValue(Q,"modelViewMatrix",re.modelViewMatrix),St.setValue(Q,"normalMatrix",re.normalMatrix),St.setValue(Q,"modelMatrix",re.matrixWorld),Ht}function qr(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Xr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,k,$){je.get(E.texture).__webglTexture=k,je.get(E.depthTexture).__webglTexture=$;const H=je.get(E);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=$===void 0,H.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,k){const $=je.get(E);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,$=0){F=E,T=k,R=$;let H=!0;if(E){const ze=je.get(E);ze.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),H=!1):ze.__webglFramebuffer===void 0?Fe.setupRenderTarget(E):ze.__hasExternalTextures&&Fe.rebindTextures(E,je.get(E.texture).__webglTexture,je.get(E.depthTexture).__webglTexture)}let re=null,Ne=!1,Re=!1;if(E){const ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture)&&(Re=!0);const Qe=je.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(re=Qe[k],Ne=!0):ke.isWebGL2&&E.samples>0&&Fe.useMultisampledRTT(E)===!1?re=je.get(E).__webglMultisampledFramebuffer:re=Qe,U.copy(E.viewport),V.copy(E.scissor),A=E.scissorTest}else U.copy(G).multiplyScalar(q).floor(),V.copy(K).multiplyScalar(q).floor(),A=J;if(xe.bindFramebuffer(36160,re)&&ke.drawBuffers&&H&&xe.drawBuffers(E,re),xe.viewport(U),xe.scissor(V),xe.setScissorTest(A),Ne){const ze=je.get(E.texture);Q.framebufferTexture2D(36160,36064,34069+k,ze.__webglTexture,$)}else if(Re){const ze=je.get(E.texture),Qe=k||0;Q.framebufferTextureLayer(36160,36064,ze.__webglTexture,$||0,Qe)}P=-1},this.readRenderTargetPixels=function(E,k,$,H,re,Ne,Re){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=je.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Ge=Ge[Re]),Ge){xe.bindFramebuffer(36160,Ge);try{const ze=E.texture,Qe=ze.format,We=ze.type;if(Qe!==Cn&&Y.convert(Qe)!==Q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=We===Ss&&(He.has("EXT_color_buffer_half_float")||ke.isWebGL2&&He.has("EXT_color_buffer_float"));if(We!==Qi&&Y.convert(We)!==Q.getParameter(35738)&&!(We===Xi&&(ke.isWebGL2||He.has("OES_texture_float")||He.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-H&&$>=0&&$<=E.height-re&&Q.readPixels(k,$,H,re,Y.convert(Qe),Y.convert(We),Ne)}finally{const ze=F!==null?je.get(F).__webglFramebuffer:null;xe.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(E,k,$=0){const H=Math.pow(2,-$),re=Math.floor(k.image.width*H),Ne=Math.floor(k.image.height*H);Fe.setTexture2D(k,0),Q.copyTexSubImage2D(3553,$,0,0,E.x,E.y,re,Ne),xe.unbindTexture()},this.copyTextureToTexture=function(E,k,$,H=0){const re=k.image.width,Ne=k.image.height,Re=Y.convert($.format),Ge=Y.convert($.type);Fe.setTexture2D($,0),Q.pixelStorei(37440,$.flipY),Q.pixelStorei(37441,$.premultiplyAlpha),Q.pixelStorei(3317,$.unpackAlignment),k.isDataTexture?Q.texSubImage2D(3553,H,E.x,E.y,re,Ne,Re,Ge,k.image.data):k.isCompressedTexture?Q.compressedTexSubImage2D(3553,H,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,Re,k.mipmaps[0].data):Q.texSubImage2D(3553,H,E.x,E.y,Re,Ge,k.image),H===0&&$.generateMipmaps&&Q.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(E,k,$,H,re=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ne=E.max.x-E.min.x+1,Re=E.max.y-E.min.y+1,Ge=E.max.z-E.min.z+1,ze=Y.convert(H.format),Qe=Y.convert(H.type);let We;if(H.isData3DTexture)Fe.setTexture3D(H,0),We=32879;else if(H.isDataArrayTexture)Fe.setTexture2DArray(H,0),We=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(37440,H.flipY),Q.pixelStorei(37441,H.premultiplyAlpha),Q.pixelStorei(3317,H.unpackAlignment);const Xe=Q.getParameter(3314),at=Q.getParameter(32878),pn=Q.getParameter(3316),Mn=Q.getParameter(3315),wn=Q.getParameter(32877),Gt=$.isCompressedTexture?$.mipmaps[0]:$.image;Q.pixelStorei(3314,Gt.width),Q.pixelStorei(32878,Gt.height),Q.pixelStorei(3316,E.min.x),Q.pixelStorei(3315,E.min.y),Q.pixelStorei(32877,E.min.z),$.isDataTexture||$.isData3DTexture?Q.texSubImage3D(We,re,k.x,k.y,k.z,Ne,Re,Ge,ze,Qe,Gt.data):$.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Q.compressedTexSubImage3D(We,re,k.x,k.y,k.z,Ne,Re,Ge,ze,Gt.data)):Q.texSubImage3D(We,re,k.x,k.y,k.z,Ne,Re,Ge,ze,Qe,Gt),Q.pixelStorei(3314,Xe),Q.pixelStorei(32878,at),Q.pixelStorei(3316,pn),Q.pixelStorei(3315,Mn),Q.pixelStorei(32877,wn),re===0&&H.generateMipmaps&&Q.generateMipmap(We),xe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Fe.setTextureCube(E,0):E.isData3DTexture?Fe.setTexture3D(E,0):E.isDataArrayTexture?Fe.setTexture2DArray(E,0):Fe.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){T=0,R=0,F=null,xe.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class rM extends Md{}rM.prototype.isWebGL1Renderer=!0;class sM extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class dc extends hi{constructor(e=1,t=.4,n=64,r=8,a=2,u=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:a,q:u},n=Math.floor(n),r=Math.floor(r);const l=[],d=[],h=[],m=[],_=new B,v=new B,y=new B,w=new B,x=new B,p=new B,T=new B;for(let F=0;F<=n;++F){const P=F/n*a*Math.PI*2;R(P,a,u,e,y),R(P+.01,a,u,e,w),p.subVectors(w,y),T.addVectors(w,y),x.crossVectors(p,T),T.crossVectors(x,p),x.normalize(),T.normalize();for(let L=0;L<=r;++L){const U=L/r*Math.PI*2,V=-t*Math.cos(U),A=t*Math.sin(U);_.x=y.x+(V*T.x+A*x.x),_.y=y.y+(V*T.y+A*x.y),_.z=y.z+(V*T.z+A*x.z),d.push(_.x,_.y,_.z),v.subVectors(_,y).normalize(),h.push(v.x,v.y,v.z),m.push(F/n),m.push(L/r)}}for(let F=1;F<=n;F++)for(let P=1;P<=r;P++){const L=(r+1)*(F-1)+(P-1),U=(r+1)*F+(P-1),V=(r+1)*F+P,A=(r+1)*(F-1)+P;l.push(L,U,A),l.push(U,V,A)}this.setIndex(l),this.setAttribute("position",new Dn(d,3)),this.setAttribute("normal",new Dn(h,3)),this.setAttribute("uv",new Dn(m,2));function R(F,P,L,U,V){const A=Math.cos(F),N=Math.sin(F),ee=L/P*F,q=Math.cos(ee);V.x=U*(2+q)*.5*A,V.y=U*(2+q)*N*.5,V.z=U*Math.sin(ee)*.5}}static fromJSON(e){return new dc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class aM extends Cs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rd,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fc extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const $h=new Tt,Yh=new B,Kh=new B;class oM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cc,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yh),Kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kh),t.updateMatrixWorld(),$h.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lM extends oM{constructor(){super(new _d(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cM extends fc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DefaultUp),this.updateMatrix(),this.target=new Yt,this.shadow=new lM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class uM extends fc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hM extends fc{constructor(e,t,n=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);var An=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Pt={};(function(o){var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(g,M,I)=>M in g?e(g,M,{enumerable:!0,configurable:!0,writable:!0,value:I}):g[M]=I,d=(g,M)=>{for(var I in M||(M={}))a.call(M,I)&&l(g,I,M[I]);if(r)for(var I of r(M))u.call(M,I)&&l(g,I,M[I]);return g},h=(g,M)=>t(g,n(M)),m=g=>e(g,"__esModule",{value:!0}),_=(g,M)=>{m(g);for(var I in M)e(g,I,{get:M[I],enumerable:!0})};_(o,{AbstractDerivation:()=>Jn,Atom:()=>qs,Box:()=>cs,ConstantDerivation:()=>yi,DerivationFromSource:()=>ns,PointerProxy:()=>Fo,Ticker:()=>bi,getPointerParts:()=>as,isDerivation:()=>Zn,isPointer:()=>Rt,iterateAndCountTicks:()=>Xs,iterateOver:()=>Lo,pointer:()=>os,prism:()=>ea,val:()=>Po,valueDerivation:()=>xi});var v=Array.isArray,y=v,w=typeof An=="object"&&An&&An.Object===Object&&An,x=w,p=typeof self=="object"&&self&&self.Object===Object&&self,T=x||p||Function("return this")(),R=T,F=R.Symbol,P=F,L=Object.prototype,U=L.hasOwnProperty,V=L.toString,A=P?P.toStringTag:void 0;function N(g){var M=U.call(g,A),I=g[A];try{g[A]=void 0;var X=!0}catch{}var Ce=V.call(g);return X&&(M?g[A]=I:delete g[A]),Ce}var ee=N,q=Object.prototype,be=q.toString;function pe(g){return be.call(g)}var G=pe,K="[object Null]",J="[object Undefined]",se=P?P.toStringTag:void 0;function ae(g){return g==null?g===void 0?J:K:se&&se in Object(g)?ee(g):G(g)}var j=ae;function ie(g){return g!=null&&typeof g=="object"}var le=ie,oe="[object Symbol]";function ce(g){return typeof g=="symbol"||le(g)&&j(g)==oe}var Se=ce,De=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/;function ft(g,M){if(y(g))return!1;var I=typeof g;return I=="number"||I=="symbol"||I=="boolean"||g==null||Se(g)?!0:Q.test(g)||!De.test(g)||M!=null&&g in Object(M)}var He=ft;function ke(g){var M=typeof g;return g!=null&&(M=="object"||M=="function")}var xe=ke,et="[object AsyncFunction]",je="[object Function]",Fe="[object GeneratorFunction]",_t="[object Proxy]";function Et(g){if(!xe(g))return!1;var M=j(g);return M==je||M==Fe||M==et||M==_t}var Dt=Et,Bt=R["__core-js_shared__"],pt=Bt,Ze=function(){var g=/[^.]+$/.exec(pt&&pt.keys&&pt.keys.IE_PROTO||"");return g?"Symbol(src)_1."+g:""}();function Kt(g){return!!Ze&&Ze in g}var yt=Kt,D=Function.prototype,S=D.toString;function te(g){if(g!=null){try{return S.call(g)}catch{}try{return g+""}catch{}}return""}var ue=te,fe=/[\\^$.*+?()[\]{}|]/g,Me=/^\[object .+?Constructor\]$/,Ue=Function.prototype,Y=Object.prototype,Ae=Ue.toString,Ee=Y.hasOwnProperty,ye=RegExp("^"+Ae.call(Ee).replace(fe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function O(g){if(!xe(g)||yt(g))return!1;var M=Dt(g)?ye:Me;return M.test(ue(g))}var ge=O;function me(g,M){return g==null?void 0:g[M]}var Ie=me;function Te(g,M){var I=Ie(g,M);return ge(I)?I:void 0}var Oe=Te,de=Oe(Object,"create"),Le=de;function Ye(){this.__data__=Le?Le(null):{},this.size=0}var Je=Ye;function bt(g){var M=this.has(g)&&delete this.__data__[g];return this.size-=M?1:0,M}var kt=bt,ir="__lodash_hash_undefined__",Hr=Object.prototype,Vt=Hr.hasOwnProperty;function Wr(g){var M=this.__data__;if(Le){var I=M[g];return I===ir?void 0:I}return Vt.call(M,g)?M[g]:void 0}var di=Wr,rr=Object.prototype,jr=rr.hasOwnProperty;function qr(g){var M=this.__data__;return Le?M[g]!==void 0:jr.call(M,g)}var Xr=qr,E="__lodash_hash_undefined__";function k(g,M){var I=this.__data__;return this.size+=this.has(g)?0:1,I[g]=Le&&M===void 0?E:M,this}var $=k;function H(g){var M=-1,I=g==null?0:g.length;for(this.clear();++M<I;){var X=g[M];this.set(X[0],X[1])}}H.prototype.clear=Je,H.prototype.delete=kt,H.prototype.get=di,H.prototype.has=Xr,H.prototype.set=$;var re=H;function Ne(){this.__data__=[],this.size=0}var Re=Ne;function Ge(g,M){return g===M||g!==g&&M!==M}var ze=Ge;function Qe(g,M){for(var I=g.length;I--;)if(ze(g[I][0],M))return I;return-1}var We=Qe,Xe=Array.prototype,at=Xe.splice;function pn(g){var M=this.__data__,I=We(M,g);if(I<0)return!1;var X=M.length-1;return I==X?M.pop():at.call(M,I,1),--this.size,!0}var Mn=pn;function wn(g){var M=this.__data__,I=We(M,g);return I<0?void 0:M[I][1]}var Gt=wn;function Ke(g){return We(this.__data__,g)>-1}var Tn=Ke;function ht(g,M){var I=this.__data__,X=We(I,g);return X<0?(++this.size,I.push([g,M])):I[X][1]=M,this}var Ht=ht;function Lt(g){var M=-1,I=g==null?0:g.length;for(this.clear();++M<I;){var X=g[M];this.set(X[0],X[1])}}Lt.prototype.clear=Re,Lt.prototype.delete=Mn,Lt.prototype.get=Gt,Lt.prototype.has=Tn,Lt.prototype.set=Ht;var Ln=Lt,fi=Oe(R,"Map"),St=fi;function Wt(){this.size=0,this.__data__={hash:new re,map:new(St||Ln),string:new re}}var qn=Wt;function jt(g){var M=typeof g;return M=="string"||M=="number"||M=="symbol"||M=="boolean"?g!=="__proto__":g===null}var Ua=jt;function Ba(g,M){var I=g.__data__;return Ua(M)?I[typeof M=="string"?"string":"hash"]:I.map}var Xn=Ba;function ka(g){var M=Xn(this,g).delete(g);return this.size-=M?1:0,M}var sr=ka;function Va(g){return Xn(this,g).get(g)}var Ga=Va;function Ha(g){return Xn(this,g).has(g)}var Wa=Ha;function ja(g,M){var I=Xn(this,g),X=I.size;return I.set(g,M),this.size+=I.size==X?0:1,this}var qa=ja;function $n(g){var M=-1,I=g==null?0:g.length;for(this.clear();++M<I;){var X=g[M];this.set(X[0],X[1])}}$n.prototype.clear=qn,$n.prototype.delete=sr,$n.prototype.get=Ga,$n.prototype.has=Wa,$n.prototype.set=qa;var Ls=$n,Xa="Expected a function";function $r(g,M){if(typeof g!="function"||M!=null&&typeof M!="function")throw new TypeError(Xa);var I=function(){var X=arguments,Ce=M?M.apply(this,X):X[0],Ve=I.cache;if(Ve.has(Ce))return Ve.get(Ce);var At=g.apply(this,X);return I.cache=Ve.set(Ce,At)||Ve,At};return I.cache=new($r.Cache||Ls),I}$r.Cache=Ls;var Yn=$r,ar=500;function $a(g){var M=Yn(g,function(X){return I.size===ar&&I.clear(),X}),I=M.cache;return M}var pi=$a,Ya=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ka=/\\(\\)?/g,Za=pi(function(g){var M=[];return g.charCodeAt(0)===46&&M.push(""),g.replace(Ya,function(I,X,Ce,Ve){M.push(Ce?Ve.replace(Ka,"$1"):X||I)}),M}),Ja=Za;function Qa(g,M){for(var I=-1,X=g==null?0:g.length,Ce=Array(X);++I<X;)Ce[I]=M(g[I],I,g);return Ce}var or=Qa,eo=1/0,Rs=P?P.prototype:void 0,Is=Rs?Rs.toString:void 0;function Os(g){if(typeof g=="string")return g;if(y(g))return or(g,Os)+"";if(Se(g))return Is?Is.call(g):"";var M=g+"";return M=="0"&&1/g==-eo?"-0":M}var to=Os;function no(g){return g==null?"":to(g)}var io=no;function ro(g,M){return y(g)?g:He(g,M)?[g]:Ja(io(g))}var Kn=ro,lr=1/0;function so(g){if(typeof g=="string"||Se(g))return g;var M=g+"";return M=="0"&&1/g==-lr?"-0":M}var Yr=so;function ao(g,M){M=Kn(M,g);for(var I=0,X=M.length;g!=null&&I<X;)g=g[Yr(M[I++])];return I&&I==X?g:void 0}var oo=ao;function lo(g,M,I){var X=g==null?void 0:oo(g,M);return X===void 0?I:X}var co=lo;function uo(g,M){return function(I){return g(M(I))}}var ho=uo,fo=ho(Object.getPrototypeOf,Object),po=fo,mo="[object Object]",go=Function.prototype,_o=Object.prototype,Kr=go.toString,Fs=_o.hasOwnProperty,Ns=Kr.call(Object);function zs(g){if(!le(g)||j(g)!=mo)return!1;var M=po(g);if(M===null)return!0;var I=Fs.call(M,"constructor")&&M.constructor;return typeof I=="function"&&I instanceof I&&Kr.call(I)==Ns}var vo=zs;function Us(g){var M=g==null?0:g.length;return M?g[M-1]:void 0}var xo=Us,Zr=class{constructor(g){this._untapFromSourceTimeout=null,this._cb=M=>{for(const I of this._tappers.values())I(M)},this._lastTapperId=0,this._untapFromSource=null,this._props=g,this._tappers=new Map}_check(){this._untapFromSource?this._tappers.size===0&&this._scheduleToUntapFromSource():this._tappers.size!==0&&(this._untapFromSource=this._props.tapToSource(this._cb))}_scheduleToUntapFromSource(){this._untapFromSourceTimeout===null&&(this._untapFromSourceTimeout=setTimeout(()=>{this._untapFromSourceTimeout=null,this._tappers.size===0&&(this._untapFromSource(),this._untapFromSource=null)},0))}tap(g){const M=this._lastTapperId++;return this._tappers.set(M,g),this._check(),()=>{this._removeTapperById(M)}}_removeTapperById(g){this._tappers.delete(g),this._check()}},Jr=class{constructor(){this._lastTapperId=0,this._tappers=new Map,this.tappable=new Zr({tapToSource:g=>this._tap(g)})}_tap(g){var M;const I=this._lastTapperId++;return this._tappers.set(I,g),(M=this._onNumberOfTappersChangeListener)==null||M.call(this,this._tappers.size),()=>{this._removeTapperById(I)}}_removeTapperById(g){var M;const I=this._tappers.size;this._tappers.delete(g);const X=this._tappers.size;I!==X&&((M=this._onNumberOfTappersChangeListener)==null||M.call(this,X))}emit(g){for(const M of this._tappers.values())M(g)}hasTappers(){return this._tappers.size!==0}onNumberOfTappersChange(g){this._onNumberOfTappersChangeListener=g}},yo=class{constructor(g,M){return this._possiblyMarkAsStale=()=>{this._ticker.onThisOrNextTick(this._refresh)},this._refresh=()=>{const I=this._derivation.getValue();I===this._lastValue&&this._lastValueRecorded===!0||(this._lastValue=I,this._lastValueRecorded=!0,this._emitter.emit(I))},this._derivation=g,this._ticker=M,this._emitter=new Jr,this._emitter.onNumberOfTappersChange(()=>{this._reactToNumberOfTappersChange()}),this._hadTappers=!1,this._lastValueRecorded=!1,this._lastValue=void 0,this}_reactToNumberOfTappersChange(){const g=this._emitter.hasTappers();g!==this._hadTappers&&(this._hadTappers=g,g?this._derivation.addDependent(this._possiblyMarkAsStale):this._derivation.removeDependent(this._possiblyMarkAsStale))}tappable(){return this._emitter.tappable}},mi=class{constructor(g,M=!1){return this.dontEmitValues=M,this._possiblyMarkAsStale=()=>{this._emitter.emit(void 0)},this._derivation=g,this._emitter=new Jr,this._emitter.onNumberOfTappersChange(()=>{this._reactToNumberOfTappersChange()}),this._hadTappers=!1,this}_reactToNumberOfTappersChange(){const g=this._emitter.hasTappers();g!==this._hadTappers&&(this._hadTappers=g,g?this._derivation.addDependent(this._possiblyMarkAsStale):this._derivation.removeDependent(this._possiblyMarkAsStale))}tappable(){return this._emitter.tappable}};function Zn(g){return g&&g.isDerivation&&g.isDerivation===!0}var Qr;(function(g){g[g.none=0]="none",g[g.dep=1]="dep",g[g.inner=2]="inner"})(Qr||(Qr={}));var bo=()=>{class g extends Jn{constructor(I,X){return super(),this._depDerivation=I,this._fn=X,this._innerDerivation=void 0,this._staleDependency=1,this._addDependency(I),this}_recalculateHot(){const I=this._staleDependency;if(this._staleDependency=0,I===2)return this._innerDerivation.getValue();const X=this._fn(this._depDerivation.getValue());return Zn(X)?(this._innerDerivation=X,this._addDependency(X),X.getValue()):X}_recalculateCold(){const I=this._fn(this._depDerivation.getValue());return Zn(I)?I.getValue():I}_recalculate(){return this.isHot?this._recalculateHot():this._recalculateCold()}_reactToDependencyBecomingStale(I){const X=I===this._depDerivation?1:2;if(X===2&&I!==this._innerDerivation)throw Error("got a _reactToDependencyBecomingStale() from neither the dep nor the inner derivation");this._staleDependency===0?(this._staleDependency=X,X===1&&this._removeInnerDerivation()):this._staleDependency===1||X===1&&(this._staleDependency=1,this._removeInnerDerivation())}_removeInnerDerivation(){this._innerDerivation&&(this._removeDependency(this._innerDerivation),this._innerDerivation=void 0)}_keepHot(){this._staleDependency=1,this.getValue()}_becomeCold(){this._staleDependency=1,this._removeInnerDerivation()}}return g.displayName="flatMap",g},cr=void 0;function So(g,M){return cr||(cr=bo()),new cr(g,M)}var es=()=>class extends Jn{constructor(M,I){super(),this._dep=M,this._fn=I,this._addDependency(M)}_recalculate(){return this._fn(this._dep.getValue())}_reactToDependencyBecomingStale(){}},Zt=void 0;function Mo(g,M){return Zt||(Zt=es()),new Zt(g,M)}var ts=class{constructor(){this._head=void 0}peek(){return this._head&&this._head.data}pop(){const g=this._head;if(!!g)return this._head=g.next,g.data}push(g){const M={next:this._head,data:g};this._head=M}};function Bs(){const g=()=>{},M=new ts,I=g;return{type:"Dataverse_discoveryMechanism",startIgnoringDependencies:()=>{M.push(I)},stopIgnoringDependencies:()=>{M.peek()!==I||M.pop()},reportResolutionStart:ni=>{const hs=M.peek();hs&&hs(ni),M.push(I)},reportResolutionEnd:ni=>{M.pop()},pushCollector:ni=>{M.push(ni)},popCollector:ni=>{if(M.peek()!==ni)throw new Error("Popped collector is not on top of the stack");M.pop()}}}function ks(){const g="__dataverse_discoveryMechanism_sharedStack",M=typeof window!="undefined"?window:typeof An!="undefined"?An:{};if(M){const I=M[g];if(I&&typeof I=="object"&&I.type==="Dataverse_discoveryMechanism")return I;{const X=Bs();return M[g]=X,X}}else return Bs()}var{startIgnoringDependencies:gi,stopIgnoringDependencies:_i,reportResolutionEnd:wo,reportResolutionStart:To,pushCollector:Eo,popCollector:Ao}=ks(),Jn=class{constructor(){this.isDerivation=!0,this._didMarkDependentsAsStale=!1,this._isHot=!1,this._isFresh=!1,this._lastValue=void 0,this._dependents=new Set,this._dependencies=new Set,this._internal_markAsStale=g=>{if(this._reactToDependencyBecomingStale(g),!this._didMarkDependentsAsStale){this._didMarkDependentsAsStale=!0,this._isFresh=!1;for(const M of this._dependents)M(this)}}}get isHot(){return this._isHot}_addDependency(g){this._dependencies.has(g)||(this._dependencies.add(g),this._isHot&&g.addDependent(this._internal_markAsStale))}_removeDependency(g){!this._dependencies.has(g)||(this._dependencies.delete(g),this._isHot&&g.removeDependent(this._internal_markAsStale))}changes(g){return new yo(this,g).tappable()}changesWithoutValues(){return new mi(this).tappable()}keepHot(){return this.changesWithoutValues().tap(()=>{})}tapImmediate(g,M){const I=this.changes(g).tap(M);return M(this.getValue()),I}addDependent(g){const M=this._dependents.size>0;this._dependents.add(g);const I=this._dependents.size>0;M!==I&&this._reactToNumberOfDependentsChange()}removeDependent(g){const M=this._dependents.size>0;this._dependents.delete(g);const I=this._dependents.size>0;M!==I&&this._reactToNumberOfDependentsChange()}_markAsStale(g){this._internal_markAsStale(g)}getValue(){if(To(this),!this._isFresh){const g=this._recalculate();this._lastValue=g,this._isHot&&(this._isFresh=!0,this._didMarkDependentsAsStale=!1)}return wo(this),this._lastValue}_reactToNumberOfDependentsChange(){const g=this._dependents.size>0;if(g!==this._isHot)if(this._isHot=g,this._didMarkDependentsAsStale=!1,this._isFresh=!1,g){for(const M of this._dependencies)M.addDependent(this._internal_markAsStale);this._keepHot()}else{for(const M of this._dependencies)M.removeDependent(this._internal_markAsStale);this._becomeCold()}}_keepHot(){}_becomeCold(){}map(g){return Mo(this,g)}flatMap(g){return So(this,g)}},ur=()=>{},ns=class extends Jn{constructor(g,M){super(),this._tapToSource=g,this._getValueFromSource=M,this._untapFromChanges=ur,this._cachedValue=void 0,this._hasCachedValue=!1}_recalculate(){return this.isHot?(this._hasCachedValue||(this._cachedValue=this._getValueFromSource(),this._hasCachedValue=!0),this._cachedValue):this._getValueFromSource()}_keepHot(){this._hasCachedValue=!1,this._cachedValue=void 0,this._untapFromChanges=this._tapToSource(g=>{this._hasCachedValue=!0,this._cachedValue=g,this._markAsStale(this)})}_becomeCold(){this._untapFromChanges(),this._untapFromChanges=ur,this._hasCachedValue=!1,this._cachedValue=void 0}_reactToDependencyBecomingStale(){}},is=new WeakMap,Vs=new WeakMap,Gs=Symbol("pointerMeta"),rs={get(g,M){if(M===Gs)return is.get(g);let I=Vs.get(g);I||(I=new Map,Vs.set(g,I));const X=I.get(M);if(X!==void 0)return X;const Ce=is.get(g),Ve=Hs({root:Ce.root,path:[...Ce.path,M]});return I.set(M,Ve),Ve}},ss=g=>g[Gs],as=g=>{const{root:M,path:I}=ss(g);return{root:M,path:I}};function Hs(g){var M;const I={root:g.root,path:(M=g.path)!=null?M:[]},X={};return is.set(X,I),new Proxy(X,rs)}var os=Hs,Rt=g=>g&&!!ss(g);function Co(g,M,I){return M.length===0?I(g):hr(g,M,I)}var hr=(g,M,I)=>{if(M.length===0)return I(g);if(Array.isArray(g)){let[X,...Ce]=M;X=parseInt(String(X),10),isNaN(X)&&(X=0);const Ve=g[X],At=hr(Ve,Ce,I);if(Ve===At)return g;const ti=[...g];return ti.splice(X,1,At),ti}else if(typeof g=="object"&&g!==null){const[X,...Ce]=M,Ve=g[X],At=hr(Ve,Ce,I);return Ve===At?g:h(d({},g),{[X]:At})}else{const[X,...Ce]=M;return{[X]:hr(void 0,Ce,I)}}},Ws;(function(g){g[g.Dict=0]="Dict",g[g.Array=1]="Array",g[g.Other=2]="Other"})(Ws||(Ws={}));var dr=g=>Array.isArray(g)?1:vo(g)?0:2,js=(g,M,I=dr(g))=>I===0&&typeof M=="string"||I===1&&Rn(M)?g[M]:void 0,Rn=g=>{const M=typeof g=="number"?g:parseInt(g,10);return!isNaN(M)&&M>=0&&M<1/0&&(M|0)===M},vi=class{constructor(g,M){this._parent=g,this._path=M,this.children=new Map,this.identityChangeListeners=new Set}addIdentityChangeListener(g){this.identityChangeListeners.add(g)}removeIdentityChangeListener(g){this.identityChangeListeners.delete(g),this._checkForGC()}removeChild(g){this.children.delete(g),this._checkForGC()}getChild(g){return this.children.get(g)}getOrCreateChild(g){let M=this.children.get(g);return M||(M=M=new vi(this,this._path.concat([g])),this.children.set(g,M)),M}_checkForGC(){this.identityChangeListeners.size>0||this.children.size>0||this._parent&&this._parent.removeChild(xo(this._path))}},qs=class{constructor(g){this.$$isIdentityDerivationProvider=!0,this.reduceState=(M,I)=>{const X=Co(this.getState(),M,I);return this.setState(X),X},this._onPathValueChange=(M,I)=>{const X=this._getOrCreateScopeForPath(M);return X.identityChangeListeners.add(I),()=>{X.identityChangeListeners.delete(I)}},this._currentState=g,this._rootScope=new vi(void 0,[]),this.pointer=os({root:this,path:[]})}setState(g){const M=this._currentState;this._currentState=g,this._checkUpdates(this._rootScope,M,g)}getState(){return this._currentState}getIn(g){return g.length===0?this.getState():co(this.getState(),g)}setIn(g,M){return this.reduceState(g,()=>M)}_checkUpdates(g,M,I){if(M===I)return;for(const Ve of g.identityChangeListeners)Ve(I);if(g.children.size===0)return;const X=dr(M),Ce=dr(I);if(!(X===2&&X===Ce))for(const[Ve,At]of g.children){const ti=js(M,Ve,X),Ot=js(I,Ve,Ce);this._checkUpdates(At,ti,Ot)}}_getOrCreateScopeForPath(g){let M=this._rootScope;for(const I of g)M=M.getOrCreateChild(I);return M}getIdentityDerivation(g){return new ns(M=>this._onPathValueChange(g,M),()=>this.getIn(g))}},ls=new WeakMap,xi=g=>{const M=ss(g);let I=ls.get(M);if(!I){const X=M.root;if(!lt(X))throw new Error("Cannot run valueDerivation() on a pointer whose root is not an IdentityChangeProvider");const{path:Ce}=M;I=X.getIdentityDerivation(Ce),ls.set(M,I)}return I};function lt(g){return typeof g=="object"&&g!==null&&g.$$isIdentityDerivationProvider===!0}var Po=g=>Rt(g)?xi(g).getValue():Zn(g)?g.getValue():g,cs=class{constructor(g){this._value=g,this._emitter=new Jr,this._publicDerivation=new ns(M=>this._emitter.tappable.tap(M),this.get.bind(this))}set(g){g!==this._value&&(this._value=g,this._emitter.emit(g))}get(){return this._value}get derivation(){return this._publicDerivation}},yi=class extends Jn{constructor(g){return super(),this._v=g,this}_recalculate(){return this._v}_reactToDependencyBecomingStale(){}};function*Xs(g){let M;if(Rt(g))M=xi(g);else if(Zn(g))M=g;else throw new Error("Only pointers and derivations are supported");let I=0;const X=M.changesWithoutValues().tap(()=>{I++});try{for(;;){const Ce=I;I=0,yield{value:M.getValue(),ticks:Ce}}}finally{X()}}function Do(){const g=new bi;if(typeof window!="undefined"){const M=I=>{g.tick(I),window.requestAnimationFrame(M)};window.requestAnimationFrame(M)}else g.tick(0),setTimeout(()=>g.tick(1),0),console.log("@theatre/dataverse is running in a server rather than in a browser. We haven't gotten around to testing server-side rendering, so if something is working in the browser but not on the server, please file a bug: https://github.com/theatre-js/theatre/issues/new");return g}var Qn,bi=class{constructor(){this._ticking=!1,this._scheduledForThisOrNextTick=new Set,this._scheduledForNextTick=new Set,this._timeAtCurrentTick=0}static get raf(){return Qn||(Qn=Do()),Qn}onThisOrNextTick(g){this._scheduledForThisOrNextTick.add(g)}onNextTick(g){this._scheduledForNextTick.add(g)}offThisOrNextTick(g){this._scheduledForThisOrNextTick.delete(g)}offNextTick(g){this._scheduledForNextTick.delete(g)}get time(){return this._ticking?this._timeAtCurrentTick:performance.now()}tick(g=performance.now()){this._ticking=!0,this._timeAtCurrentTick=g;for(const M of this._scheduledForNextTick)this._scheduledForThisOrNextTick.add(M);this._scheduledForNextTick.clear(),this._tick(0),this._ticking=!1}_tick(g){const M=this.time;if(g>10&&console.warn("_tick() recursing for 10 times"),g>100)throw new Error("Maximum recursion limit for _tick()");const I=this._scheduledForThisOrNextTick;this._scheduledForThisOrNextTick=new Set;for(const X of I)X(M);if(this._scheduledForThisOrNextTick.size>0)return this._tick(g+1)}};function*Lo(g){let M;if(Rt(g))M=xi(g);else if(Zn(g))M=g;else throw new Error("Only pointers and derivations are supported");const I=new bi,X=M.changes(I).tap(Ce=>{});try{for(;;)I.tick(),yield M.getValue()}finally{X()}}var $s=()=>{},it=class extends Jn{constructor(g){super(),this._fn=g,this._cacheOfDendencyValues=new Map,this._possiblyStaleDeps=new Set,this._prismScope=new Si}_recalculate(){let g;if(this._possiblyStaleDeps.size>0){let X=!1;gi();for(const Ce of this._possiblyStaleDeps)if(this._cacheOfDendencyValues.get(Ce)!==Ce.getValue()){X=!0;break}if(_i(),this._possiblyStaleDeps.clear(),!X)return this._lastValue}const M=new Set;this._cacheOfDendencyValues.clear();const I=X=>{M.add(X),this._addDependency(X)};Eo(I),dt.push(this._prismScope);try{g=this._fn()}catch(X){console.error(X)}finally{dt.pop()!==this._prismScope&&console.warn("The Prism hook stack has slipped. This is a bug.")}Ao(I);for(const X of this._dependencies)M.has(X)||this._removeDependency(X);this._dependencies=M,gi();for(const X of M)this._cacheOfDendencyValues.set(X,X.getValue());return _i(),g}_reactToDependencyBecomingStale(g){this._possiblyStaleDeps.add(g)}_keepHot(){this._prismScope=new Si,gi(),this.getValue(),_i()}_becomeCold(){us(this._prismScope),this._prismScope=new Si}},Si=class{constructor(){this.isPrismScope=!0,this._subs={}}sub(g){return this._subs[g]||(this._subs[g]=new Si),this._subs[g]}get subs(){return this._subs}};function us(g){for(const M of Object.values(g.subs))us(M);ei(g)}function ei(g){const M=an.get(g);if(M)for(const I of M.values())Mi(I.cleanup,void 0);an.delete(g)}function Mi(g,M){try{return{value:g(),ok:!0}}catch(I){return setTimeout(function(){throw I}),{value:M,ok:!1}}}var dt=new ts,It=new WeakMap,an=new WeakMap,nt=new WeakMap;function mn(g,M){const I=dt.peek();if(!I)throw new Error("prism.ref() is called outside of a prism() call.");let X=It.get(I);X===void 0&&(X=new Map,It.set(I,X));let Ce=X.get(g);if(Ce!==void 0)return Ce;{const Ve={current:M};return X.set(g,Ve),Ve}}function Ys(g,M,I){const X=dt.peek();if(!X)throw new Error("prism.effect() is called outside of a prism() call.");let Ce=an.get(X);Ce===void 0&&(Ce=new Map,an.set(X,Ce));let Ve=Ce.get(g);Ve===void 0&&(Ve={cleanup:$s,deps:void 0},Ce.set(g,Ve)),Ks(Ve.deps,I)&&(Ve.cleanup(),gi(),Ve.cleanup=Mi(M,$s).value,_i(),Ve.deps=I)}function Ks(g,M){if(g===void 0||M===void 0)return!0;const I=g.length;if(I!==M.length)return!0;for(let X=0;X<I;X++)if(g[X]!==M[X])return!0;return!1}function Zs(g,M,I){const X=dt.peek();if(!X)throw new Error("prism.memo() is called outside of a prism() call.");let Ce=nt.get(X);Ce||(Ce=new Map,nt.set(X,Ce));let Ve=Ce.get(g);return Ve===void 0&&(Ve={cachedValue:null,deps:void 0},Ce.set(g,Ve)),Ks(Ve.deps,I)&&(gi(),Ve.cachedValue=Mi(M,void 0).value,_i(),Ve.deps=I),Ve.cachedValue}function Ro(g,M){const{b:I,setValue:X}=Jt.memo("state/"+g,()=>{const Ce=new cs(M);return{b:Ce,setValue:At=>Ce.set(At)}},[]);return[I.derivation.getValue(),X]}function Io(){if(!dt.peek())throw new Error("The parent function is called outside of a prism() call.")}function Oo(g,M){const I=dt.peek();if(!I)throw new Error("prism.scope() is called outside of a prism() call.");const X=I.sub(g);dt.push(X);const Ce=Mi(M,void 0).value;return dt.pop(),Ce}function Js(g,M,I){return Zs(g,()=>Jt(M),I).getValue()}function Qs(){return!!dt.peek()}var Jt=g=>new it(g);Jt.ref=mn,Jt.effect=Ys,Jt.memo=Zs,Jt.ensurePrism=Io,Jt.state=Ro,Jt.scope=Oo,Jt.sub=Js,Jt.inPrism=Qs;var ea=Jt,Fo=class{constructor(g){this.$$isIdentityDerivationProvider=!0,this._currentPointerBox=new cs(g),this.pointer=os({root:this,path:[]})}setPointer(g){this._currentPointerBox.set(g)}getIdentityDerivation(g){return this._currentPointerBox.derivation.flatMap(M=>{const I=g.reduce((X,Ce)=>X[Ce],M);return xi(I)})}}})(Pt);var Yi={exports:{}};(function(o,e){var t=Object.create,n=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,h=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,v=(i,s,c)=>s in i?n(i,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):i[s]=c,y=(i,s)=>{for(var c in s||(s={}))m.call(s,c)&&v(i,c,s[c]);if(d)for(var c of d(s))_.call(s,c)&&v(i,c,s[c]);return i},w=(i,s)=>r(i,u(s)),x=i=>n(i,"__esModule",{value:!0}),p=(i,s)=>function(){return s||(0,i[Object.keys(i)[0]])((s={exports:{}}).exports,s),s.exports},T=(i,s)=>{x(i);for(var c in s)n(i,c,{get:s[c],enumerable:!0})},R=(i,s,c)=>{if(s&&typeof s=="object"||typeof s=="function")for(let f of l(s))!m.call(i,f)&&f!=="default"&&n(i,f,{get:()=>s[f],enumerable:!(c=a(s,f))||c.enumerable});return i},F=i=>R(x(n(i!=null?t(h(i)):{},"default",i&&i.__esModule&&"default"in i?{get:()=>i.default,enumerable:!0}:{value:i,enumerable:!0})),i),P=(i,s,c)=>(v(i,typeof s!="symbol"?s+"":s,c),c),L=p({"../node_modules/timing-function/lib/UnitBezier.js"(i,s){s.exports=function(){function c(f,b,C,z){this.set(f,b,C,z)}return c.prototype.set=function(f,b,C,z){this._cx=3*f,this._bx=3*(C-f)-this._cx,this._ax=1-this._cx-this._bx,this._cy=3*b,this._by=3*(z-b)-this._cy,this._ay=1-this._cy-this._by},c.epsilon=1e-6,c.prototype._sampleCurveX=function(f){return((this._ax*f+this._bx)*f+this._cx)*f},c.prototype._sampleCurveY=function(f){return((this._ay*f+this._by)*f+this._cy)*f},c.prototype._sampleCurveDerivativeX=function(f){return(3*this._ax*f+2*this._bx)*f+this._cx},c.prototype._solveCurveX=function(f,b){var C,z,W,Z,ne,he;for(W=void 0,Z=void 0,ne=void 0,he=void 0,C=void 0,z=void 0,ne=f,z=0;z<8;){if(he=this._sampleCurveX(ne)-f,Math.abs(he)<b)return ne;if(C=this._sampleCurveDerivativeX(ne),Math.abs(C)<b)break;ne=ne-he/C,z++}if(W=0,Z=1,ne=f,ne<W)return W;if(ne>Z)return Z;for(;W<Z;){if(he=this._sampleCurveX(ne),Math.abs(he-f)<b)return ne;f>he?W=ne:Z=ne,ne=(Z-W)*.5+W}return ne},c.prototype.solve=function(f,b){return this._sampleCurveY(this._solveCurveX(f,b))},c.prototype.solveSimple=function(f){return this._sampleCurveY(this._solveCurveX(f,1e-6))},c}()}}),U=p({"../node_modules/levenshtein-edit-distance/index.js"(i,s){var c,f;c=[],f=[];function b(C,z,W){var Z,ne,he,_e,we,Be,Pe,$e;if(C===z)return 0;if(Z=C.length,ne=z.length,Z===0)return ne;if(ne===0)return Z;for(W&&(C=C.toLowerCase(),z=z.toLowerCase()),Pe=0;Pe<Z;)f[Pe]=C.charCodeAt(Pe),c[Pe]=++Pe;for($e=0;$e<ne;)for(he=z.charCodeAt($e),_e=we=$e++,Pe=-1;++Pe<Z;)Be=he===f[Pe]?we:we+1,we=c[Pe],c[Pe]=_e=we>_e?Be>_e?_e+1:Be:Be>we?we+1:Be;return _e}s.exports=b}}),V=p({"../node_modules/propose/propose.js"(i,s){var c=U();function f(){var b,C,z,W,Z,ne=0,he=arguments[0],_e=arguments[1],we=_e.length,Be=arguments[2];Be&&(W=Be.threshold,Z=Be.ignoreCase),W===void 0&&(W=0);for(var Pe=0;Pe<we;++Pe)Z?C=c(he,_e[Pe],!0):C=c(he,_e[Pe]),C>he.length?b=1-C/_e[Pe].length:b=1-C/he.length,b>ne&&(ne=b,z=_e[Pe]);return ne>=W?z:null}s.exports=f}}),A=p({"../node_modules/fast-deep-equal/index.js"(i,s){s.exports=function c(f,b){if(f===b)return!0;if(f&&b&&typeof f=="object"&&typeof b=="object"){if(f.constructor!==b.constructor)return!1;var C,z,W;if(Array.isArray(f)){if(C=f.length,C!=b.length)return!1;for(z=C;z--!==0;)if(!c(f[z],b[z]))return!1;return!0}if(f.constructor===RegExp)return f.source===b.source&&f.flags===b.flags;if(f.valueOf!==Object.prototype.valueOf)return f.valueOf()===b.valueOf();if(f.toString!==Object.prototype.toString)return f.toString()===b.toString();if(W=Object.keys(f),C=W.length,C!==Object.keys(b).length)return!1;for(z=C;z--!==0;)if(!Object.prototype.hasOwnProperty.call(b,W[z]))return!1;for(z=C;z--!==0;){var Z=W[z];if(!c(f[Z],b[Z]))return!1}return!0}return f!==f&&b!==b}}});T(e,{getProject:()=>Iu,onChange:()=>Ou,types:()=>Ko,val:()=>Fu});var N={};T(N,{getProject:()=>Iu,onChange:()=>Ou,types:()=>Ko,val:()=>Fu});var ee=F(Pt),q=class{constructor(){P(this,"atom",new ee.Atom({projects:{}}))}add(i,s){this.atom.reduceState(["projects",i],()=>s)}get(i){return this.atom.getState().projects[i]}has(i){return!!this.get(i)}},be=new q,pe=be,G=new WeakMap;function K(i){return G.get(i)}function J(i,s){G.set(i,s)}var se=[],ae=Array.isArray,j=ae,ie=typeof An=="object"&&An&&An.Object===Object&&An,le=ie,oe=typeof self=="object"&&self&&self.Object===Object&&self,ce=le||oe||Function("return this")(),Se=ce,De=Se.Symbol,Q=De,ft=Object.prototype,He=ft.hasOwnProperty,ke=ft.toString,xe=Q?Q.toStringTag:void 0;function et(i){var s=He.call(i,xe),c=i[xe];try{i[xe]=void 0;var f=!0}catch{}var b=ke.call(i);return f&&(s?i[xe]=c:delete i[xe]),b}var je=et,Fe=Object.prototype,_t=Fe.toString;function Et(i){return _t.call(i)}var Dt=Et,Bt="[object Null]",pt="[object Undefined]",Ze=Q?Q.toStringTag:void 0;function Kt(i){return i==null?i===void 0?pt:Bt:Ze&&Ze in Object(i)?je(i):Dt(i)}var yt=Kt;function D(i){return i!=null&&typeof i=="object"}var S=D,te="[object Symbol]";function ue(i){return typeof i=="symbol"||S(i)&&yt(i)==te}var fe=ue,Me=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ue=/^\w*$/;function Y(i,s){if(j(i))return!1;var c=typeof i;return c=="number"||c=="symbol"||c=="boolean"||i==null||fe(i)?!0:Ue.test(i)||!Me.test(i)||s!=null&&i in Object(s)}var Ae=Y;function Ee(i){var s=typeof i;return i!=null&&(s=="object"||s=="function")}var ye=Ee,O="[object AsyncFunction]",ge="[object Function]",me="[object GeneratorFunction]",Ie="[object Proxy]";function Te(i){if(!ye(i))return!1;var s=yt(i);return s==ge||s==me||s==O||s==Ie}var Oe=Te,de=Se["__core-js_shared__"],Le=de,Ye=function(){var i=/[^.]+$/.exec(Le&&Le.keys&&Le.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();function Je(i){return!!Ye&&Ye in i}var bt=Je,kt=Function.prototype,ir=kt.toString;function Hr(i){if(i!=null){try{return ir.call(i)}catch{}try{return i+""}catch{}}return""}var Vt=Hr,Wr=/[\\^$.*+?()[\]{}|]/g,di=/^\[object .+?Constructor\]$/,rr=Function.prototype,jr=Object.prototype,qr=rr.toString,Xr=jr.hasOwnProperty,E=RegExp("^"+qr.call(Xr).replace(Wr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function k(i){if(!ye(i)||bt(i))return!1;var s=Oe(i)?E:di;return s.test(Vt(i))}var $=k;function H(i,s){return i==null?void 0:i[s]}var re=H;function Ne(i,s){var c=re(i,s);return $(c)?c:void 0}var Re=Ne,Ge=Re(Object,"create"),ze=Ge;function Qe(){this.__data__=ze?ze(null):{},this.size=0}var We=Qe;function Xe(i){var s=this.has(i)&&delete this.__data__[i];return this.size-=s?1:0,s}var at=Xe,pn="__lodash_hash_undefined__",Mn=Object.prototype,wn=Mn.hasOwnProperty;function Gt(i){var s=this.__data__;if(ze){var c=s[i];return c===pn?void 0:c}return wn.call(s,i)?s[i]:void 0}var Ke=Gt,Tn=Object.prototype,ht=Tn.hasOwnProperty;function Ht(i){var s=this.__data__;return ze?s[i]!==void 0:ht.call(s,i)}var Lt=Ht,Ln="__lodash_hash_undefined__";function fi(i,s){var c=this.__data__;return this.size+=this.has(i)?0:1,c[i]=ze&&s===void 0?Ln:s,this}var St=fi;function Wt(i){var s=-1,c=i==null?0:i.length;for(this.clear();++s<c;){var f=i[s];this.set(f[0],f[1])}}Wt.prototype.clear=We,Wt.prototype.delete=at,Wt.prototype.get=Ke,Wt.prototype.has=Lt,Wt.prototype.set=St;var qn=Wt;function jt(){this.__data__=[],this.size=0}var Ua=jt;function Ba(i,s){return i===s||i!==i&&s!==s}var Xn=Ba;function ka(i,s){for(var c=i.length;c--;)if(Xn(i[c][0],s))return c;return-1}var sr=ka,Va=Array.prototype,Ga=Va.splice;function Ha(i){var s=this.__data__,c=sr(s,i);if(c<0)return!1;var f=s.length-1;return c==f?s.pop():Ga.call(s,c,1),--this.size,!0}var Wa=Ha;function ja(i){var s=this.__data__,c=sr(s,i);return c<0?void 0:s[c][1]}var qa=ja;function $n(i){return sr(this.__data__,i)>-1}var Ls=$n;function Xa(i,s){var c=this.__data__,f=sr(c,i);return f<0?(++this.size,c.push([i,s])):c[f][1]=s,this}var $r=Xa;function Yn(i){var s=-1,c=i==null?0:i.length;for(this.clear();++s<c;){var f=i[s];this.set(f[0],f[1])}}Yn.prototype.clear=Ua,Yn.prototype.delete=Wa,Yn.prototype.get=qa,Yn.prototype.has=Ls,Yn.prototype.set=$r;var ar=Yn,$a=Re(Se,"Map"),pi=$a;function Ya(){this.size=0,this.__data__={hash:new qn,map:new(pi||ar),string:new qn}}var Ka=Ya;function Za(i){var s=typeof i;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?i!=="__proto__":i===null}var Ja=Za;function Qa(i,s){var c=i.__data__;return Ja(s)?c[typeof s=="string"?"string":"hash"]:c.map}var or=Qa;function eo(i){var s=or(this,i).delete(i);return this.size-=s?1:0,s}var Rs=eo;function Is(i){return or(this,i).get(i)}var Os=Is;function to(i){return or(this,i).has(i)}var no=to;function io(i,s){var c=or(this,i),f=c.size;return c.set(i,s),this.size+=c.size==f?0:1,this}var ro=io;function Kn(i){var s=-1,c=i==null?0:i.length;for(this.clear();++s<c;){var f=i[s];this.set(f[0],f[1])}}Kn.prototype.clear=Ka,Kn.prototype.delete=Rs,Kn.prototype.get=Os,Kn.prototype.has=no,Kn.prototype.set=ro;var lr=Kn,so="Expected a function";function Yr(i,s){if(typeof i!="function"||s!=null&&typeof s!="function")throw new TypeError(so);var c=function(){var f=arguments,b=s?s.apply(this,f):f[0],C=c.cache;if(C.has(b))return C.get(b);var z=i.apply(this,f);return c.cache=C.set(b,z)||C,z};return c.cache=new(Yr.Cache||lr),c}Yr.Cache=lr;var ao=Yr,oo=500;function lo(i){var s=ao(i,function(f){return c.size===oo&&c.clear(),f}),c=s.cache;return s}var co=lo,uo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ho=/\\(\\)?/g,fo=co(function(i){var s=[];return i.charCodeAt(0)===46&&s.push(""),i.replace(uo,function(c,f,b,C){s.push(b?C.replace(ho,"$1"):f||c)}),s}),po=fo;function mo(i,s){for(var c=-1,f=i==null?0:i.length,b=Array(f);++c<f;)b[c]=s(i[c],c,i);return b}var go=mo,_o=1/0,Kr=Q?Q.prototype:void 0,Fs=Kr?Kr.toString:void 0;function Ns(i){if(typeof i=="string")return i;if(j(i))return go(i,Ns)+"";if(fe(i))return Fs?Fs.call(i):"";var s=i+"";return s=="0"&&1/i==-_o?"-0":s}var zs=Ns;function vo(i){return i==null?"":zs(i)}var Us=vo;function xo(i,s){return j(i)?i:Ae(i,s)?[i]:po(Us(i))}var Zr=xo,Jr=1/0;function yo(i){if(typeof i=="string"||fe(i))return i;var s=i+"";return s=="0"&&1/i==-Jr?"-0":s}var mi=yo;function Zn(i,s){s=Zr(s,i);for(var c=0,f=s.length;i!=null&&c<f;)i=i[mi(s[c++])];return c&&c==f?i:void 0}var Qr=Zn;function bo(i,s,c){var f=i==null?void 0:Qr(i,s);return f===void 0?c:f}var cr=bo;function So(i,s){return s.length===0?i:cr(i,s)}var es=class{constructor(){P(this,"_values",{})}get(i,s){if(this.has(i))return this._values[i];{const c=s();return this._values[i]=c,c}}has(i){return this._values.hasOwnProperty(i)}},Zt=F(Pt),Mo=function(){try{var i=Re(Object,"defineProperty");return i({},"",{}),i}catch{}}(),ts=Mo;function Bs(i,s,c){s=="__proto__"&&ts?ts(i,s,{configurable:!0,enumerable:!0,value:c,writable:!0}):i[s]=c}var ks=Bs,gi=Object.prototype,_i=gi.hasOwnProperty;function wo(i,s,c){var f=i[s];(!(_i.call(i,s)&&Xn(f,c))||c===void 0&&!(s in i))&&ks(i,s,c)}var To=wo,Eo=9007199254740991,Ao=/^(?:0|[1-9]\d*)$/;function Jn(i,s){var c=typeof i;return s=s==null?Eo:s,!!s&&(c=="number"||c!="symbol"&&Ao.test(i))&&i>-1&&i%1==0&&i<s}var ur=Jn;function ns(i,s,c,f){if(!ye(i))return i;s=Zr(s,i);for(var b=-1,C=s.length,z=C-1,W=i;W!=null&&++b<C;){var Z=mi(s[b]),ne=c;if(Z==="__proto__"||Z==="constructor"||Z==="prototype")return i;if(b!=z){var he=W[Z];ne=f?f(he,Z,W):void 0,ne===void 0&&(ne=ye(he)?he:ur(s[b+1])?[]:{})}To(W,Z,ne),W=W[Z]}return i}var is=ns;function Vs(i,s,c){return i==null?i:is(i,s,c)}var Gs=Vs,rs=new WeakMap;function ss(i){return as(i)}function as(i){if(rs.has(i))return rs.get(i);const s=i.type==="compound"?os(i):i.type==="enum"?Hs(i):i.default;return rs.set(i,s),s}function Hs(i){const s={$case:i.defaultCase};for(const[c,f]of Object.entries(i.cases))s[c]=as(f);return s}function os(i){const s={};for(const[c,f]of Object.entries(i.props))s[c]=as(f);return s}var Rt=F(Pt),Co=F(L());function hr(i,s,c){return(0,Rt.prism)(()=>{const f=(0,Rt.val)(s);return Rt.prism.memo("driver",()=>f?f.type==="BasicKeyframedTrack"?Ws(i,f,c):(i.logger.error("Track type not yet supported."),new Rt.ConstantDerivation(void 0)):new Rt.ConstantDerivation(void 0),[f]).getValue()})}function Ws(i,s,c){return(0,Rt.prism)(()=>{let f=Rt.prism.ref("state",{started:!1}),b=f.current;const C=c.getValue();return(!b.started||C<b.validFrom||b.validTo<=C)&&(f.current=b=js(i,c,s)),b.der.getValue()})}var dr=new Rt.ConstantDerivation(void 0);function js(i,s,c){const f=s.getValue();if(c.keyframes.length===0)return{started:!0,validFrom:-1/0,validTo:1/0,der:dr};let b=0;for(;;){const C=c.keyframes[b];if(!C)return Rn.error;const z=b===c.keyframes.length-1;if(f<C.position)return b===0?Rn.beforeFirstKeyframe(C):Rn.error;if(C.position===f)return z?Rn.lastKeyframe(C):Rn.between(C,c.keyframes[b+1],s);if(b===c.keyframes.length-1)return Rn.lastKeyframe(C);{const W=b+1;if(c.keyframes[W].position<=f){b=W;continue}else return Rn.between(C,c.keyframes[b+1],s)}}}var Rn={beforeFirstKeyframe(i){return{started:!0,validFrom:-1/0,validTo:i.position,der:new Rt.ConstantDerivation({left:i.value,progression:0})}},lastKeyframe(i){return{started:!0,validFrom:i.position,validTo:1/0,der:new Rt.ConstantDerivation({left:i.value,progression:0})}},between(i,s,c){if(!i.connectedRight)return{started:!0,validFrom:i.position,validTo:s.position,der:new Rt.ConstantDerivation({left:i.value,progression:0})};const f=new Co.default(i.handles[2],i.handles[3],s.handles[0],s.handles[1]),b=z=>(z-i.position)/(s.position-i.position),C=(0,Rt.prism)(()=>{const z=b(c.getValue()),W=f.solveSimple(z);return{left:i.value,right:s.value,progression:W}});return{started:!0,validFrom:i.position,validTo:s.position,der:C}},error:{started:!0,validFrom:-1/0,validTo:1/0,der:dr}};function vi(i,s,c){const b=c.get(i);if(b&&b.override===s)return b.merged;const C=y({},i);for(const z of Object.keys(s)){const W=s[z],Z=i[z];C[z]=typeof W=="object"&&typeof Z=="object"?vi(Z,W,c):W===void 0?Z:W}return c.set(i,{override:s,merged:C}),C}function qs(i,s){let c=i;for(const f of s)c=c[f];return c}var ls=F(Pt),xi=(i,s)=>{const c=ls.prism.memo(i,()=>new ls.Atom(s),[]);return c.setState(s),c},lt=F(Pt),Po=F(Pt),cs=Po.Ticker.raf,yi=cs,Xs=F(Pt),Do=class{constructor(i){P(this,"_cache",new es),J(this,i)}get type(){return"Theatre_SheetObject_PublicAPI"}get props(){return K(this).propsP}get sheet(){return K(this).sheet.publicApi}get project(){return K(this).sheet.project.publicApi}get address(){return y({},K(this).address)}_valuesDerivation(){return this._cache.get("onValuesChangeDerivation",()=>{const i=K(this);return(0,Xs.prism)(()=>(0,Xs.val)(i.getValues().getValue()))})}onValuesChange(i){return this._valuesDerivation().tapImmediate(yi,i)}get value(){return this._valuesDerivation().getValue()}set initialValue(i){K(this).setInitialValue(i)}};function Qn(i){return i.type==="compound"||i.type==="enum"}function bi(i,s){if(!i)return;const[c,...f]=s;if(c===void 0)return i;if(!Qn(i))return;const b=i.type==="enum"?i.cases[c]:i.props[c];return bi(b,f)}function Lo(i){return!Qn(i)}var $s=class{constructor(i,s,c){this.sheet=i,this.template=s,this.nativeObject=c,P(this,"$$isIdentityDerivationProvider",!0),P(this,"address"),P(this,"publicApi"),P(this,"_initialValue",new lt.Atom({})),P(this,"_cache",new es),P(this,"_logger"),P(this,"_internalUtilCtx"),this._logger=i._logger.named("SheetObject",s.address.objectKey),this._logger._trace("creating object"),this._internalUtilCtx={logger:this._logger.utilFor.internal()},this.address=w(y({},s.address),{sheetInstanceId:i.address.sheetInstanceId}),this.publicApi=new Do(this)}get type(){return"Theatre_SheetObject"}getValues(){return this._cache.get("getValues()",()=>(0,lt.prism)(()=>{const i=(0,lt.val)(this.template.getDefaultValues()),s=(0,lt.val)(this._initialValue.pointer),c=lt.prism.memo("withInitialCache",()=>new WeakMap,[]),f=vi(i,s,c),b=(0,lt.val)(this.template.getStaticValues()),C=lt.prism.memo("withStatics",()=>new WeakMap,[]);let W=vi(f,b,C),Z;{const he=lt.prism.memo("seq",()=>this.getSequencedValues(),[]),_e=lt.prism.memo("withSeqsCache",()=>new WeakMap,[]);Z=(0,lt.val)((0,lt.val)(he)),W=vi(W,Z,_e)}return xi("finalAtom",W).pointer}))}getValueByPointer(i){const s=(0,lt.val)(this.getValues()),{path:c}=(0,lt.getPointerParts)(i);return(0,lt.val)(qs(s,c))}getIdentityDerivation(i){return(0,lt.prism)(()=>{const s=(0,lt.val)(this.getValues());return(0,lt.val)(qs(s,i))})}getSequencedValues(){return(0,lt.prism)(()=>{const i=lt.prism.memo("tracksToProcess",()=>this.template.getArrayOfValidSequenceTracks(),[]),s=(0,lt.val)(i),c=new lt.Atom({});return lt.prism.effect("processTracks",()=>{const f=[];for(const{trackId:b,pathToProp:C}of s){const z=this._trackIdToDerivation(b),W=bi(this.template.config,C),Z=W.deserializeAndSanitize,ne=W.interpolate,he=()=>{const we=z.getValue();if(!we)return c.setIn(C,void 0);const Be=Z(we.left),Pe=Be===void 0?W.default:Be;if(we.right===void 0)return c.setIn(C,Pe);const $e=Z(we.right),ut=$e===void 0?W.default:$e;return c.setIn(C,ne(Pe,ut,we.progression))},_e=z.changesWithoutValues().tap(he);he(),f.push(_e)}return()=>{for(const b of f)b()}},s),c.pointer})}_trackIdToDerivation(i){const s=this.template.project.pointers.historic.sheetsById[this.address.sheetId].sequence.tracksByObject[this.address.objectKey].trackData[i],c=this.sheet.getSequence().positionDerivation;return hr(this._internalUtilCtx,s,c)}get propsP(){return this._cache.get("propsP",()=>(0,lt.pointer)({root:this,path:[]}))}validateValue(i,s){}setInitialValue(i){this.validateValue(this.propsP,i),this._initialValue.setState(i)}};function it(i){return function(c,f){return i(c,f())}}var Si;(function(i){i[i.GENERAL=1]="GENERAL",i[i.TODO=2]="TODO",i[i.TROUBLESHOOTING=4]="TROUBLESHOOTING"})(Si||(Si={}));var us;(function(i){i[i.INTERNAL=8]="INTERNAL",i[i.DEV=16]="DEV",i[i.PUBLIC=32]="PUBLIC"})(us||(us={}));var ei;(function(i){i[i.TRACE=64]="TRACE",i[i.DEBUG=128]="DEBUG",i[i.WARN=256]="WARN",i[i.ERROR=512]="ERROR"})(ei||(ei={}));var Mi;(function(i){i[i.ERROR_PUBLIC=545]="ERROR_PUBLIC",i[i.ERROR_DEV=529]="ERROR_DEV",i[i._HMM=524]="_HMM",i[i._TODO=522]="_TODO",i[i._ERROR=521]="_ERROR",i[i.WARN_PUBLIC=289]="WARN_PUBLIC",i[i.WARN_DEV=273]="WARN_DEV",i[i._KAPOW=268]="_KAPOW",i[i._WARN=265]="_WARN",i[i.DEBUG_DEV=145]="DEBUG_DEV",i[i._DEBUG=137]="_DEBUG",i[i.TRACE_DEV=81]="TRACE_DEV",i[i._TRACE=73]="_TRACE"})(Mi||(Mi={}));var dt={_hmm:It(524),_todo:It(522),_error:It(521),errorDev:It(529),errorPublic:It(545),_kapow:It(268),_warn:It(265),warnDev:It(273),warnPublic:It(289),_debug:It(137),debugDev:It(145),_trace:It(73),traceDev:It(81)};function It(i){return Object.freeze({audience:an(i,8)?"internal":an(i,16)?"dev":"public",category:an(i,4)?"troubleshooting":an(i,2)?"todo":"general",level:an(i,512)?512:an(i,256)?256:an(i,128)?128:64})}function an(i,s){return(i&s)===s}function nt(i,s){return((s&32)===32?!0:(s&16)===16?i.dev:(s&8)===8?i.internal:!1)&&i.min<=s}var mn={loggingConsoleStyle:!0,loggerConsoleStyle:!0,includes:Object.freeze({internal:!1,dev:!1,min:256}),filtered:function(){},include:function(){return{}},create:null,creatExt:null,named(i,s,c){return this.create({names:[...i.names,{name:s,key:c}]})},style:{bold:void 0,italic:void 0,cssMemo:new Map([["",""]]),collapseOnRE:/[a-z- ]+/g,color:void 0,collapsed(i){if(i.length<5)return i;const s=i.replace(this.collapseOnRE,"");return this.cssMemo.has(s)||this.cssMemo.set(s,this.css(i)),s},css(i){var s,c,f,b;const C=this.cssMemo.get(i);if(C)return C;let z=`color:${(c=(s=this.color)==null?void 0:s.call(this,i))!=null?c:`hsl(${(i.charCodeAt(0)+i.charCodeAt(i.length-1))%360}, 100%, 60%)`}`;return(f=this.bold)!=null&&f.test(i)&&(z+=";font-weight:600"),(b=this.italic)!=null&&b.test(i)&&(z+=";font-style:italic"),this.cssMemo.set(i,z),z}}};function Ys(i=console,s={}){const c=w(y({},mn),{includes:y({},mn.includes)}),f={styled:Ro.bind(c,i),noStyle:Oo.bind(c,i)},b=Zs.bind(c);function C(){return c.loggingConsoleStyle&&c.loggerConsoleStyle?f.styled:f.noStyle}return c.create=C(),{configureLogger(z){var W;z==="console"?(c.loggerConsoleStyle=mn.loggerConsoleStyle,c.create=C()):z.type==="console"?(c.loggerConsoleStyle=(W=z.style)!=null?W:mn.loggerConsoleStyle,c.create=C()):z.type==="keyed"?(c.creatExt=Z=>z.keyed(Z.names),c.create=b):z.type==="named"&&(c.creatExt=Ks.bind(null,z.named),c.create=b)},configureLogging(z){var W,Z,ne,he,_e;c.includes.dev=(W=z.dev)!=null?W:mn.includes.dev,c.includes.internal=(Z=z.internal)!=null?Z:mn.includes.internal,c.includes.min=(ne=z.min)!=null?ne:mn.includes.min,c.include=(he=z.include)!=null?he:mn.include,c.loggingConsoleStyle=(_e=z.consoleStyle)!=null?_e:mn.loggingConsoleStyle,c.create=C()},getLogger(){return c.create({names:[]})}}}function Ks(i,s){const c=[];for(let{name:f,key:b}of s.names)c.push(b==null?f:`${f} (${b})`);return i(c)}function Zs(i){const s=y(y({},this.includes),this.include(i)),c=this.filtered,f=this.named.bind(this,i),b=this.creatExt(i),C=nt(s,524),z=nt(s,522),W=nt(s,521),Z=nt(s,529),ne=nt(s,545),he=nt(s,265),_e=nt(s,268),we=nt(s,273),Be=nt(s,289),Pe=nt(s,137),$e=nt(s,145),ut=nt(s,73),rt=nt(s,81),mt=C?b.error.bind(b,dt._hmm):c.bind(i,524),Xt=z?b.error.bind(b,dt._todo):c.bind(i,522),ln=W?b.error.bind(b,dt._error):c.bind(i,521),cn=Z?b.error.bind(b,dt.errorDev):c.bind(i,529),Li=ne?b.error.bind(b,dt.errorPublic):c.bind(i,545),Ri=_e?b.warn.bind(b,dt._kapow):c.bind(i,268),Ii=he?b.warn.bind(b,dt._warn):c.bind(i,265),Oi=we?b.warn.bind(b,dt.warnDev):c.bind(i,273),Fi=Be?b.warn.bind(b,dt.warnPublic):c.bind(i,273),Ni=Pe?b.debug.bind(b,dt._debug):c.bind(i,137),zi=$e?b.debug.bind(b,dt.debugDev):c.bind(i,145),Ui=ut?b.trace.bind(b,dt._trace):c.bind(i,73),Bi=rt?b.trace.bind(b,dt.traceDev):c.bind(i,81),vt={_hmm:mt,_todo:Xt,_error:ln,errorDev:cn,errorPublic:Li,_kapow:Ri,_warn:Ii,warnDev:Oi,warnPublic:Fi,_debug:Ni,debugDev:zi,_trace:Ui,traceDev:Bi,lazy:{_hmm:C?it(mt):mt,_todo:z?it(Xt):Xt,_error:W?it(ln):ln,errorDev:Z?it(cn):cn,errorPublic:ne?it(Li):Li,_kapow:_e?it(Ri):Ri,_warn:he?it(Ii):Ii,warnDev:we?it(Oi):Oi,warnPublic:Be?it(Fi):Fi,_debug:Pe?it(Ni):Ni,debugDev:$e?it(zi):zi,_trace:ut?it(Ui):Ui,traceDev:rt?it(Bi):Bi},named:f,utilFor:{internal(){return{debug:vt._debug,error:vt._error,warn:vt._warn,trace:vt._trace,named(en,ot){return vt.named(en,ot).utilFor.internal()}}},dev(){return{debug:vt.debugDev,error:vt.errorDev,warn:vt.warnDev,trace:vt.traceDev,named(en,ot){return vt.named(en,ot).utilFor.dev()}}},public(){return{error:vt.errorPublic,warn:vt.warnPublic,debug(en,ot){vt._warn(`(public "debug" filtered out) ${en}`,ot)},trace(en,ot){vt._warn(`(public "trace" filtered out) ${en}`,ot)},named(en,ot){return vt.named(en,ot).utilFor.public()}}}}};return vt}function Ro(i,s){const c=y(y({},this.includes),this.include(s)),f=[];let b="";for(let Z=0;Z<s.names.length;Z++){const{name:ne,key:he}=s.names[Z];if(b+=` %c${ne}`,f.push(this.style.css(ne)),he!=null){const _e=`%c#${he}`;b+=_e,f.push(this.style.css(_e))}}const C=this.filtered,z=this.named.bind(this,s),W=[b,...f];return Js(C,s,c,i,W,Io(W),z)}function Io(i){const s=i.slice(0);for(let c=1;c<s.length;c++)s[c]+=";background-color:#e0005a;padding:2px;color:white";return s}function Oo(i,s){const c=y(y({},this.includes),this.include(s));let f="";for(let W=0;W<s.names.length;W++){const{name:Z,key:ne}=s.names[W];f+=` ${Z}`,ne!=null&&(f+=`#${ne}`)}const b=this.filtered,C=this.named.bind(this,s),z=[f];return Js(b,s,c,i,z,z,C)}function Js(i,s,c,f,b,C,z){const W=nt(c,524),Z=nt(c,522),ne=nt(c,521),he=nt(c,529),_e=nt(c,545),we=nt(c,265),Be=nt(c,268),Pe=nt(c,273),$e=nt(c,289),ut=nt(c,137),rt=nt(c,145),mt=nt(c,73),Xt=nt(c,81),ln=W?f.error.bind(f,...b):i.bind(s,524),cn=Z?f.error.bind(f,...b):i.bind(s,522),Li=ne?f.error.bind(f,...b):i.bind(s,521),Ri=he?f.error.bind(f,...b):i.bind(s,529),Ii=_e?f.error.bind(f,...b):i.bind(s,545),Oi=Be?f.warn.bind(f,...C):i.bind(s,268),Fi=we?f.warn.bind(f,...b):i.bind(s,265),Ni=Pe?f.warn.bind(f,...b):i.bind(s,273),zi=$e?f.warn.bind(f,...b):i.bind(s,273),Ui=ut?f.info.bind(f,...b):i.bind(s,137),Bi=rt?f.info.bind(f,...b):i.bind(s,145),vt=mt?f.debug.bind(f,...b):i.bind(s,73),en=Xt?f.debug.bind(f,...b):i.bind(s,81),ot={_hmm:ln,_todo:cn,_error:Li,errorDev:Ri,errorPublic:Ii,_kapow:Oi,_warn:Fi,warnDev:Ni,warnPublic:zi,_debug:Ui,debugDev:Bi,_trace:vt,traceDev:en,lazy:{_hmm:W?it(ln):ln,_todo:Z?it(cn):cn,_error:ne?it(Li):Li,errorDev:he?it(Ri):Ri,errorPublic:_e?it(Ii):Ii,_kapow:Be?it(Oi):Oi,_warn:we?it(Fi):Fi,warnDev:Pe?it(Ni):Ni,warnPublic:$e?it(zi):zi,_debug:ut?it(Ui):Ui,debugDev:rt?it(Bi):Bi,_trace:mt?it(vt):vt,traceDev:Xt?it(en):en},named:z,utilFor:{internal(){return{debug:ot._debug,error:ot._error,warn:ot._warn,trace:ot._trace,named(On,Fn){return ot.named(On,Fn).utilFor.internal()}}},dev(){return{debug:ot.debugDev,error:ot.errorDev,warn:ot.warnDev,trace:ot.traceDev,named(On,Fn){return ot.named(On,Fn).utilFor.dev()}}},public(){return{error:ot.errorPublic,warn:ot.warnPublic,debug(On,Fn){ot._warn(`(public "debug" filtered out) ${On}`,Fn)},trace(On,Fn){ot._warn(`(public "trace" filtered out) ${On}`,Fn)},named(On,Fn){return ot.named(On,Fn).utilFor.public()}}}}};return ot}var Qs=Ys(console,{_debug:function(){},_error:function(){}});Qs.configureLogging({dev:!0,min:ei.TRACE});var Jt=Qs.getLogger().named("Theatre.js (default logger)").utilFor.dev(),ea=new WeakMap;function Fo(i){const s=ea.get(i);if(s)return s;const c=new Map;return ea.set(i,c),g([],i,c),c}function g(i,s,c){for(const[f,b]of Object.entries(s.props))if(!Qn(b)){const C=[...i,f];c.set(JSON.stringify(C),c.size),M(C,b,c)}for(const[f,b]of Object.entries(s.props))if(Qn(b)){const C=[...i,f];c.set(JSON.stringify(C),c.size),M(C,b,c)}}function M(i,s,c){if(s.type==="compound")g(i,s,c);else{if(s.type==="enum")throw new Error("Enums aren't supported yet");c.set(JSON.stringify(i),c.size)}}var I=class{constructor(i,s,c,f){this.sheetTemplate=i,P(this,"address"),P(this,"type","Theatre_SheetObjectTemplate"),P(this,"_config"),P(this,"_cache",new es),P(this,"project"),this.address=w(y({},i.address),{objectKey:s}),this._config=new Zt.Atom(f),this.project=i.project}get config(){return this._config.getState()}createInstance(i,s,c){return this._config.setState(c),new $s(i,this,s)}overrideConfig(i){this._config.setState(i)}getDefaultValues(){return this._cache.get("getDefaultValues()",()=>(0,Zt.prism)(()=>{const i=(0,Zt.val)(this._config.pointer);return ss(i)}))}getStaticValues(){return this._cache.get("getDerivationOfStatics",()=>(0,Zt.prism)(()=>{var i;const s=this.sheetTemplate.project.pointers.historic.sheetsById[this.address.sheetId],c=(i=(0,Zt.val)(s.staticOverrides.byObject[this.address.objectKey]))!=null?i:{};return(0,Zt.val)(this._config.pointer).deserializeAndSanitize(c)||{}}))}getArrayOfValidSequenceTracks(){return this._cache.get("getArrayOfValidSequenceTracks",()=>(0,Zt.prism)(()=>{const i=this.project.pointers.historic.sheetsById[this.address.sheetId],s=(0,Zt.val)(i.sequence.tracksByObject[this.address.objectKey].trackIdByPropPath);if(!s)return se;const c=[];if(!s)return se;const f=Object.entries(s);for(const[C,z]of f){const W=X(C);if(!W)continue;const Z=bi(this.config,W);!(Z&&Lo(Z))||c.push({pathToProp:W,trackId:z})}const b=Fo(this.config);return c.sort((C,z)=>{const W=C.pathToProp,Z=z.pathToProp,ne=b.get(JSON.stringify(W)),he=b.get(JSON.stringify(Z));return ne>he?1:-1}),c.length===0?se:c}))}getMapOfValidSequenceTracks_forStudio(){return this._cache.get("getMapOfValidSequenceTracks_forStudio",()=>this.getArrayOfValidSequenceTracks().map(i=>{let s={};for(const{pathToProp:c,trackId:f}of i)Gs(s,c,f);return s}))}getDefaultsAtPointer(i){const{path:s}=(0,Zt.getPointerParts)(i),c=this.getDefaultValues().getValue();return So(c,s)}};function X(i){try{return JSON.parse(i)}catch{Jt.warn(`property ${JSON.stringify(i)} cannot be parsed. Skipping.`);return}}var Ce=F(Pt);F(V());var Ve=class extends Error{},At=class extends Ve{},ti=F(Pt),Ot=F(Pt),ni=/\s/;function hs(i){for(var s=i.length;s--&&ni.test(i.charAt(s)););return s}var Ad=hs,Cd=/^\s+/;function Pd(i){return i&&i.slice(0,Ad(i)+1).replace(Cd,"")}var Dd=Pd,mc=0/0,Ld=/^[-+]0x[0-9a-f]+$/i,Rd=/^0b[01]+$/i,Id=/^0o[0-7]+$/i,Od=parseInt;function Fd(i){if(typeof i=="number")return i;if(fe(i))return mc;if(ye(i)){var s=typeof i.valueOf=="function"?i.valueOf():i;i=ye(s)?s+"":s}if(typeof i!="string")return i===0?i:+i;i=Dd(i);var c=Rd.test(i);return c||Id.test(i)?Od(i.slice(2),c?2:8):Ld.test(i)?mc:+i}var ta=Fd,gc=1/0,Nd=17976931348623157e292;function zd(i){if(!i)return i===0?i:0;if(i=ta(i),i===gc||i===-gc){var s=i<0?-1:1;return s*Nd}return i===i?i:0}var Ud=zd;function Bd(i){var s=Ud(i),c=s%1;return s===s?c?s-c:s:0}var kd=Bd;function Vd(i){return i}var Gd=Vd,Hd=Re(Se,"WeakMap"),No=Hd,Wd=9007199254740991;function jd(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=Wd}var zo=jd;function qd(i){return i!=null&&zo(i.length)&&!Oe(i)}var Xd=qd,$d=Object.prototype;function Yd(i){var s=i&&i.constructor,c=typeof s=="function"&&s.prototype||$d;return i===c}var Kd=Yd;function Zd(i,s){for(var c=-1,f=Array(i);++c<i;)f[c]=s(c);return f}var Jd=Zd,Qd="[object Arguments]";function ef(i){return S(i)&&yt(i)==Qd}var _c=ef,vc=Object.prototype,tf=vc.hasOwnProperty,nf=vc.propertyIsEnumerable,rf=_c(function(){return arguments}())?_c:function(i){return S(i)&&tf.call(i,"callee")&&!nf.call(i,"callee")},xc=rf;function sf(){return!1}var af=sf,yc=e&&!e.nodeType&&e,bc=yc&&!0&&o&&!o.nodeType&&o,of=bc&&bc.exports===yc,Sc=of?Se.Buffer:void 0,lf=Sc?Sc.isBuffer:void 0,cf=lf||af,Uo=cf,uf="[object Arguments]",hf="[object Array]",df="[object Boolean]",ff="[object Date]",pf="[object Error]",mf="[object Function]",gf="[object Map]",_f="[object Number]",vf="[object Object]",xf="[object RegExp]",yf="[object Set]",bf="[object String]",Sf="[object WeakMap]",Mf="[object ArrayBuffer]",wf="[object DataView]",Tf="[object Float32Array]",Ef="[object Float64Array]",Af="[object Int8Array]",Cf="[object Int16Array]",Pf="[object Int32Array]",Df="[object Uint8Array]",Lf="[object Uint8ClampedArray]",Rf="[object Uint16Array]",If="[object Uint32Array]",ct={};ct[Tf]=ct[Ef]=ct[Af]=ct[Cf]=ct[Pf]=ct[Df]=ct[Lf]=ct[Rf]=ct[If]=!0,ct[uf]=ct[hf]=ct[Mf]=ct[df]=ct[wf]=ct[ff]=ct[pf]=ct[mf]=ct[gf]=ct[_f]=ct[vf]=ct[xf]=ct[yf]=ct[bf]=ct[Sf]=!1;function Of(i){return S(i)&&zo(i.length)&&!!ct[yt(i)]}var Ff=Of;function Nf(i){return function(s){return i(s)}}var zf=Nf,Mc=e&&!e.nodeType&&e,ds=Mc&&!0&&o&&!o.nodeType&&o,Uf=ds&&ds.exports===Mc,Bo=Uf&&le.process,Bf=function(){try{var i=ds&&ds.require&&ds.require("util").types;return i||Bo&&Bo.binding&&Bo.binding("util")}catch{}}(),wc=Bf,Tc=wc&&wc.isTypedArray,kf=Tc?zf(Tc):Ff,Ec=kf,Vf=Object.prototype,Gf=Vf.hasOwnProperty;function Hf(i,s){var c=j(i),f=!c&&xc(i),b=!c&&!f&&Uo(i),C=!c&&!f&&!b&&Ec(i),z=c||f||b||C,W=z?Jd(i.length,String):[],Z=W.length;for(var ne in i)(s||Gf.call(i,ne))&&!(z&&(ne=="length"||b&&(ne=="offset"||ne=="parent")||C&&(ne=="buffer"||ne=="byteLength"||ne=="byteOffset")||ur(ne,Z)))&&W.push(ne);return W}var Wf=Hf;function jf(i,s){return function(c){return i(s(c))}}var Ac=jf,qf=Ac(Object.keys,Object),Xf=qf,$f=Object.prototype,Yf=$f.hasOwnProperty;function Kf(i){if(!Kd(i))return Xf(i);var s=[];for(var c in Object(i))Yf.call(i,c)&&c!="constructor"&&s.push(c);return s}var Zf=Kf;function Jf(i){return Xd(i)?Wf(i):Zf(i)}var ko=Jf;function Qf(i,s){for(var c=-1,f=s.length,b=i.length;++c<f;)i[b+c]=s[c];return i}var ep=Qf,tp=Ac(Object.getPrototypeOf,Object),np=tp,ip="[object Object]",rp=Function.prototype,sp=Object.prototype,Cc=rp.toString,ap=sp.hasOwnProperty,op=Cc.call(Object);function lp(i){if(!S(i)||yt(i)!=ip)return!1;var s=np(i);if(s===null)return!0;var c=ap.call(s,"constructor")&&s.constructor;return typeof c=="function"&&c instanceof c&&Cc.call(c)==op}var cp=lp;function up(i,s,c){var f=-1,b=i.length;s<0&&(s=-s>b?0:b+s),c=c>b?b:c,c<0&&(c+=b),b=s>c?0:c-s>>>0,s>>>=0;for(var C=Array(b);++f<b;)C[f]=i[f+s];return C}var hp=up;function dp(i,s,c){var f=i.length;return c=c===void 0?f:c,!s&&c>=f?i:hp(i,s,c)}var fp=dp,pp="\\ud800-\\udfff",mp="\\u0300-\\u036f",gp="\\ufe20-\\ufe2f",_p="\\u20d0-\\u20ff",vp=mp+gp+_p,xp="\\ufe0e\\ufe0f",yp="\\u200d",bp=RegExp("["+yp+pp+vp+xp+"]");function Sp(i){return bp.test(i)}var Vo=Sp;function Mp(i){return i.split("")}var wp=Mp,Pc="\\ud800-\\udfff",Tp="\\u0300-\\u036f",Ep="\\ufe20-\\ufe2f",Ap="\\u20d0-\\u20ff",Cp=Tp+Ep+Ap,Pp="\\ufe0e\\ufe0f",Dp="["+Pc+"]",Go="["+Cp+"]",Ho="\\ud83c[\\udffb-\\udfff]",Lp="(?:"+Go+"|"+Ho+")",Dc="[^"+Pc+"]",Lc="(?:\\ud83c[\\udde6-\\uddff]){2}",Rc="[\\ud800-\\udbff][\\udc00-\\udfff]",Rp="\\u200d",Ic=Lp+"?",Oc="["+Pp+"]?",Ip="(?:"+Rp+"(?:"+[Dc,Lc,Rc].join("|")+")"+Oc+Ic+")*",Op=Oc+Ic+Ip,Fp="(?:"+[Dc+Go+"?",Go,Lc,Rc,Dp].join("|")+")",Np=RegExp(Ho+"(?="+Ho+")|"+Fp+Op,"g");function zp(i){return i.match(Np)||[]}var Up=zp;function Bp(i){return Vo(i)?Up(i):wp(i)}var kp=Bp;function Vp(i,s,c){return i===i&&(c!==void 0&&(i=i<=c?i:c),s!==void 0&&(i=i>=s?i:s)),i}var Gp=Vp;function Hp(i,s,c){return c===void 0&&(c=s,s=void 0),c!==void 0&&(c=ta(c),c=c===c?c:0),s!==void 0&&(s=ta(s),s=s===s?s:0),Gp(ta(i),s,c)}var Fc=Hp;function Wp(){this.__data__=new ar,this.size=0}var jp=Wp;function qp(i){var s=this.__data__,c=s.delete(i);return this.size=s.size,c}var Xp=qp;function $p(i){return this.__data__.get(i)}var Yp=$p;function Kp(i){return this.__data__.has(i)}var Zp=Kp,Jp=200;function Qp(i,s){var c=this.__data__;if(c instanceof ar){var f=c.__data__;if(!pi||f.length<Jp-1)return f.push([i,s]),this.size=++c.size,this;c=this.__data__=new lr(f)}return c.set(i,s),this.size=c.size,this}var em=Qp;function fr(i){var s=this.__data__=new ar(i);this.size=s.size}fr.prototype.clear=jp,fr.prototype.delete=Xp,fr.prototype.get=Yp,fr.prototype.has=Zp,fr.prototype.set=em;var na=fr;function tm(i,s){for(var c=-1,f=i==null?0:i.length,b=0,C=[];++c<f;){var z=i[c];s(z,c,i)&&(C[b++]=z)}return C}var nm=tm;function im(){return[]}var rm=im,sm=Object.prototype,am=sm.propertyIsEnumerable,Nc=Object.getOwnPropertySymbols,om=Nc?function(i){return i==null?[]:(i=Object(i),nm(Nc(i),function(s){return am.call(i,s)}))}:rm,lm=om;function cm(i,s,c){var f=s(i);return j(i)?f:ep(f,c(i))}var um=cm;function hm(i){return um(i,ko,lm)}var zc=hm,dm=Re(Se,"DataView"),Wo=dm,fm=Re(Se,"Promise"),jo=fm,pm=Re(Se,"Set"),qo=pm,Uc="[object Map]",mm="[object Object]",Bc="[object Promise]",kc="[object Set]",Vc="[object WeakMap]",Gc="[object DataView]",gm=Vt(Wo),_m=Vt(pi),vm=Vt(jo),xm=Vt(qo),ym=Vt(No),wi=yt;(Wo&&wi(new Wo(new ArrayBuffer(1)))!=Gc||pi&&wi(new pi)!=Uc||jo&&wi(jo.resolve())!=Bc||qo&&wi(new qo)!=kc||No&&wi(new No)!=Vc)&&(wi=function(i){var s=yt(i),c=s==mm?i.constructor:void 0,f=c?Vt(c):"";if(f)switch(f){case gm:return Gc;case _m:return Uc;case vm:return Bc;case xm:return kc;case ym:return Vc}return s});var Hc=wi,bm=Se.Uint8Array,Wc=bm,Sm="__lodash_hash_undefined__";function Mm(i){return this.__data__.set(i,Sm),this}var wm=Mm;function Tm(i){return this.__data__.has(i)}var Em=Tm;function ia(i){var s=-1,c=i==null?0:i.length;for(this.__data__=new lr;++s<c;)this.add(i[s])}ia.prototype.add=ia.prototype.push=wm,ia.prototype.has=Em;var Am=ia;function Cm(i,s){for(var c=-1,f=i==null?0:i.length;++c<f;)if(s(i[c],c,i))return!0;return!1}var Pm=Cm;function Dm(i,s){return i.has(s)}var Lm=Dm,Rm=1,Im=2;function Om(i,s,c,f,b,C){var z=c&Rm,W=i.length,Z=s.length;if(W!=Z&&!(z&&Z>W))return!1;var ne=C.get(i),he=C.get(s);if(ne&&he)return ne==s&&he==i;var _e=-1,we=!0,Be=c&Im?new Am:void 0;for(C.set(i,s),C.set(s,i);++_e<W;){var Pe=i[_e],$e=s[_e];if(f)var ut=z?f($e,Pe,_e,s,i,C):f(Pe,$e,_e,i,s,C);if(ut!==void 0){if(ut)continue;we=!1;break}if(Be){if(!Pm(s,function(rt,mt){if(!Lm(Be,mt)&&(Pe===rt||b(Pe,rt,c,f,C)))return Be.push(mt)})){we=!1;break}}else if(!(Pe===$e||b(Pe,$e,c,f,C))){we=!1;break}}return C.delete(i),C.delete(s),we}var jc=Om;function Fm(i){var s=-1,c=Array(i.size);return i.forEach(function(f,b){c[++s]=[b,f]}),c}var Nm=Fm;function zm(i){var s=-1,c=Array(i.size);return i.forEach(function(f){c[++s]=f}),c}var Um=zm,Bm=1,km=2,Vm="[object Boolean]",Gm="[object Date]",Hm="[object Error]",Wm="[object Map]",jm="[object Number]",qm="[object RegExp]",Xm="[object Set]",$m="[object String]",Ym="[object Symbol]",Km="[object ArrayBuffer]",Zm="[object DataView]",qc=Q?Q.prototype:void 0,Xo=qc?qc.valueOf:void 0;function Jm(i,s,c,f,b,C,z){switch(c){case Zm:if(i.byteLength!=s.byteLength||i.byteOffset!=s.byteOffset)return!1;i=i.buffer,s=s.buffer;case Km:return!(i.byteLength!=s.byteLength||!C(new Wc(i),new Wc(s)));case Vm:case Gm:case jm:return Xn(+i,+s);case Hm:return i.name==s.name&&i.message==s.message;case qm:case $m:return i==s+"";case Wm:var W=Nm;case Xm:var Z=f&Bm;if(W||(W=Um),i.size!=s.size&&!Z)return!1;var ne=z.get(i);if(ne)return ne==s;f|=km,z.set(i,s);var he=jc(W(i),W(s),f,b,C,z);return z.delete(i),he;case Ym:if(Xo)return Xo.call(i)==Xo.call(s)}return!1}var Qm=Jm,eg=1,tg=Object.prototype,ng=tg.hasOwnProperty;function ig(i,s,c,f,b,C){var z=c&eg,W=zc(i),Z=W.length,ne=zc(s),he=ne.length;if(Z!=he&&!z)return!1;for(var _e=Z;_e--;){var we=W[_e];if(!(z?we in s:ng.call(s,we)))return!1}var Be=C.get(i),Pe=C.get(s);if(Be&&Pe)return Be==s&&Pe==i;var $e=!0;C.set(i,s),C.set(s,i);for(var ut=z;++_e<Z;){we=W[_e];var rt=i[we],mt=s[we];if(f)var Xt=z?f(mt,rt,we,s,i,C):f(rt,mt,we,i,s,C);if(!(Xt===void 0?rt===mt||b(rt,mt,c,f,C):Xt)){$e=!1;break}ut||(ut=we=="constructor")}if($e&&!ut){var ln=i.constructor,cn=s.constructor;ln!=cn&&"constructor"in i&&"constructor"in s&&!(typeof ln=="function"&&ln instanceof ln&&typeof cn=="function"&&cn instanceof cn)&&($e=!1)}return C.delete(i),C.delete(s),$e}var rg=ig,sg=1,Xc="[object Arguments]",$c="[object Array]",ra="[object Object]",ag=Object.prototype,Yc=ag.hasOwnProperty;function og(i,s,c,f,b,C){var z=j(i),W=j(s),Z=z?$c:Hc(i),ne=W?$c:Hc(s);Z=Z==Xc?ra:Z,ne=ne==Xc?ra:ne;var he=Z==ra,_e=ne==ra,we=Z==ne;if(we&&Uo(i)){if(!Uo(s))return!1;z=!0,he=!1}if(we&&!he)return C||(C=new na),z||Ec(i)?jc(i,s,c,f,b,C):Qm(i,s,Z,c,f,b,C);if(!(c&sg)){var Be=he&&Yc.call(i,"__wrapped__"),Pe=_e&&Yc.call(s,"__wrapped__");if(Be||Pe){var $e=Be?i.value():i,ut=Pe?s.value():s;return C||(C=new na),b($e,ut,c,f,C)}}return we?(C||(C=new na),rg(i,s,c,f,b,C)):!1}var lg=og;function Kc(i,s,c,f,b){return i===s?!0:i==null||s==null||!S(i)&&!S(s)?i!==i&&s!==s:lg(i,s,c,f,Kc,b)}var Zc=Kc,cg=1,ug=2;function hg(i,s,c,f){var b=c.length,C=b,z=!f;if(i==null)return!C;for(i=Object(i);b--;){var W=c[b];if(z&&W[2]?W[1]!==i[W[0]]:!(W[0]in i))return!1}for(;++b<C;){W=c[b];var Z=W[0],ne=i[Z],he=W[1];if(z&&W[2]){if(ne===void 0&&!(Z in i))return!1}else{var _e=new na;if(f)var we=f(ne,he,Z,i,s,_e);if(!(we===void 0?Zc(he,ne,cg|ug,f,_e):we))return!1}}return!0}var dg=hg;function fg(i){return i===i&&!ye(i)}var Jc=fg;function pg(i){for(var s=ko(i),c=s.length;c--;){var f=s[c],b=i[f];s[c]=[f,b,Jc(b)]}return s}var mg=pg;function gg(i,s){return function(c){return c==null?!1:c[i]===s&&(s!==void 0||i in Object(c))}}var Qc=gg;function _g(i){var s=mg(i);return s.length==1&&s[0][2]?Qc(s[0][0],s[0][1]):function(c){return c===i||dg(c,i,s)}}var vg=_g;function xg(i,s){return i!=null&&s in Object(i)}var yg=xg;function bg(i,s,c){s=Zr(s,i);for(var f=-1,b=s.length,C=!1;++f<b;){var z=mi(s[f]);if(!(C=i!=null&&c(i,z)))break;i=i[z]}return C||++f!=b?C:(b=i==null?0:i.length,!!b&&zo(b)&&ur(z,b)&&(j(i)||xc(i)))}var Sg=bg;function Mg(i,s){return i!=null&&Sg(i,s,yg)}var wg=Mg,Tg=1,Eg=2;function Ag(i,s){return Ae(i)&&Jc(s)?Qc(mi(i),s):function(c){var f=cr(c,i);return f===void 0&&f===s?wg(c,i):Zc(s,f,Tg|Eg)}}var Cg=Ag;function Pg(i){return function(s){return s==null?void 0:s[i]}}var eu=Pg;function Dg(i){return function(s){return Qr(s,i)}}var Lg=Dg;function Rg(i){return Ae(i)?eu(mi(i)):Lg(i)}var Ig=Rg;function Og(i){return typeof i=="function"?i:i==null?Gd:typeof i=="object"?j(i)?Cg(i[0],i[1]):vg(i):Ig(i)}var Fg=Og;function Ng(i){return function(s,c,f){for(var b=-1,C=Object(s),z=f(s),W=z.length;W--;){var Z=z[i?W:++b];if(c(C[Z],Z,C)===!1)break}return s}}var zg=Ng,Ug=zg(),Bg=Ug;function kg(i,s){return i&&Bg(i,s,ko)}var Vg=kg;function Gg(i,s){var c={};return s=Fg(s),Vg(i,function(f,b,C){ks(c,b,s(f,b,C))}),c}var Hg=Gg,Wg=9007199254740991,jg=Math.floor;function qg(i,s){var c="";if(!i||s<1||s>Wg)return c;do s%2&&(c+=i),s=jg(s/2),s&&(i+=i);while(s);return c}var tu=qg,Xg=eu("length"),$g=Xg,nu="\\ud800-\\udfff",Yg="\\u0300-\\u036f",Kg="\\ufe20-\\ufe2f",Zg="\\u20d0-\\u20ff",Jg=Yg+Kg+Zg,Qg="\\ufe0e\\ufe0f",e_="["+nu+"]",$o="["+Jg+"]",Yo="\\ud83c[\\udffb-\\udfff]",t_="(?:"+$o+"|"+Yo+")",iu="[^"+nu+"]",ru="(?:\\ud83c[\\udde6-\\uddff]){2}",su="[\\ud800-\\udbff][\\udc00-\\udfff]",n_="\\u200d",au=t_+"?",ou="["+Qg+"]?",i_="(?:"+n_+"(?:"+[iu,ru,su].join("|")+")"+ou+au+")*",r_=ou+au+i_,s_="(?:"+[iu+$o+"?",$o,ru,su,e_].join("|")+")",lu=RegExp(Yo+"(?="+Yo+")|"+s_+r_,"g");function a_(i){for(var s=lu.lastIndex=0;lu.test(i);)++s;return s}var o_=a_;function l_(i){return Vo(i)?o_(i):$g(i)}var cu=l_,c_=Math.ceil;function u_(i,s){s=s===void 0?" ":zs(s);var c=s.length;if(c<2)return c?tu(s,i):s;var f=tu(s,c_(i/cu(s)));return Vo(s)?fp(kp(f),0,i).join(""):f.slice(0,i)}var h_=u_;function d_(i,s,c){i=Us(i),s=kd(s);var f=s?cu(i):0;return s&&f<s?h_(s-f,c)+i:i}var fs=d_;function pr(){let i,s;const c=new Promise((b,C)=>{i=z=>{b(z),f.status="resolved"},s=z=>{C(z),f.status="rejected"}}),f={resolve:i,reject:s,promise:c,status:"pending"};return f}var f_=()=>{},sa=f_,p_=F(Pt),m_=class{constructor(i){this._ticker=i,P(this,"_stopPlayCallback",sa),P(this,"_state",new p_.Atom({position:0,playing:!1})),P(this,"statePointer"),this.statePointer=this._state.pointer}destroy(){}pause(){this._stopPlayCallback(),this.playing=!1,this._stopPlayCallback=sa}gotoPosition(i){this._updatePositionInState(i)}_updatePositionInState(i){this._state.reduceState(["position"],()=>i)}getCurrentPosition(){return this._state.getState().position}get playing(){return this._state.getState().playing}set playing(i){this._state.setIn(["playing"],i)}play(i,s,c,f){this.playing&&this.pause(),this.playing=!0;const b=this._ticker,C=s[1]-s[0];{const we=this.getCurrentPosition();we<s[0]||we>s[1]?f==="normal"||f==="alternate"?this._updatePositionInState(s[0]):(f==="reverse"||f==="alternateReverse")&&this._updatePositionInState(s[1]):f==="normal"||f==="alternate"?we===s[1]&&this._updatePositionInState(s[0]):we===s[0]&&this._updatePositionInState(s[1])}const z=pr(),W=b.time,Z=C*i;let ne=this.getCurrentPosition()-s[0];(f==="reverse"||f==="alternateReverse")&&(ne=s[1]-this.getCurrentPosition());const he=we=>{const Pe=Math.max(we-W,0)/1e3,$e=Math.min(Pe*c+ne,Z);if($e!==Z){const ut=Math.floor($e/C);let rt=$e/C%1*C;if(f!=="normal")if(f==="reverse")rt=C-rt;else{const mt=ut%2===0;f==="alternate"?mt||(rt=C-rt):mt&&(rt=C-rt)}this._updatePositionInState(rt+s[0]),_e()}else{if(f==="normal")this._updatePositionInState(s[1]);else if(f==="reverse")this._updatePositionInState(s[0]);else{const ut=(i-1)%2===0;f==="alternate"?ut?this._updatePositionInState(s[1]):this._updatePositionInState(s[0]):ut?this._updatePositionInState(s[0]):this._updatePositionInState(s[1])}this.playing=!1,z.resolve(!0)}};this._stopPlayCallback=()=>{b.offThisOrNextTick(he),b.offNextTick(he),this.playing&&z.resolve(!1)};const _e=()=>b.onNextTick(he);return b.onThisOrNextTick(he),z.promise}playDynamicRange(i){this.playing&&this.pause(),this.playing=!0;const s=this._ticker,c=pr(),f=i.keepHot();c.promise.then(f,f);let b=s.time;const C=W=>{const Z=Math.max(W-b,0);b=W;const ne=Z/1e3,he=this.getCurrentPosition(),_e=i.getValue();if(he<_e[0]||he>_e[1])this.gotoPosition(_e[0]);else{let we=he+ne;we>_e[1]&&(we=_e[0]+(we-_e[1])),this.gotoPosition(we)}z()};this._stopPlayCallback=()=>{s.offThisOrNextTick(C),s.offNextTick(C),c.resolve(!1)};const z=()=>s.onNextTick(C);return s.onThisOrNextTick(C),c.promise}},g_=F(Pt),__=class{constructor(i,s,c,f){this._ticker=i,this._decodedBuffer=s,this._audioContext=c,this._nodeDestination=f,P(this,"_mainGain"),P(this,"_state",new g_.Atom({position:0,playing:!1})),P(this,"statePointer"),P(this,"_stopPlayCallback",sa),this.statePointer=this._state.pointer,this._mainGain=this._audioContext.createGain(),this._mainGain.connect(this._nodeDestination)}playDynamicRange(i){throw new Error("Method not implemented.")}get _playing(){return this._state.getState().playing}set _playing(i){this._state.setIn(["playing"],i)}destroy(){}pause(){this._stopPlayCallback(),this._playing=!1,this._stopPlayCallback=sa}gotoPosition(i){this._updatePositionInState(i)}_updatePositionInState(i){this._state.reduceState(["position"],()=>i)}getCurrentPosition(){return this._state.getState().position}play(i,s,c,f){this._playing&&this.pause(),this._playing=!0;const b=this._ticker;let C=this.getCurrentPosition();const z=s[1]-s[0];if(f!=="normal")throw new At(`Audio-controlled sequences can only be played in the "normal" direction. '${f}' given.`);C<s[0]||C>s[1]?this._updatePositionInState(s[0]):C===s[1]&&this._updatePositionInState(s[0]),C=this.getCurrentPosition();const W=pr(),Z=this._audioContext.createBufferSource();Z.buffer=this._decodedBuffer,Z.connect(this._mainGain),Z.playbackRate.value=c,i>1e3&&(console.warn("Audio-controlled sequences cannot have an iterationCount larger than 1000. It has been clamped to 1000."),i=1e3),i>1&&(Z.loop=!0,Z.loopStart=s[0],Z.loopEnd=s[1]);const ne=b.time;let he=C-s[0];const _e=z*i;Z.start(0,C,_e-he);const we=$e=>{const rt=Math.max($e-ne,0)/1e3,mt=Math.min(rt*c+he,_e);if(mt!==_e){let Xt=mt/z%1*z;this._updatePositionInState(Xt+s[0]),Pe()}else this._updatePositionInState(s[1]),this._playing=!1,Be(),W.resolve(!0)},Be=()=>{Z.stop(),Z.disconnect()};this._stopPlayCallback=()=>{Be(),b.offThisOrNextTick(we),b.offNextTick(we),this._playing&&W.resolve(!1)};const Pe=()=>b.onNextTick(we);return b.onThisOrNextTick(we),W.promise}},v_=class{get type(){return"Theatre_Sequence_PublicAPI"}constructor(i){J(this,i)}play(i){const s=K(this);if(s._project.isReady())return s.play(i);{const c=pr();return c.resolve(!0),c.promise}}pause(){K(this).pause()}get position(){return K(this).position}set position(i){K(this).position=i}async attachAudio(i){const{audioContext:s,destinationNode:c,decodedBuffer:f,gainNode:b}=await x_(i),C=new __(yi,f,s,b);return K(this).replacePlaybackController(C),{audioContext:s,destinationNode:c,decodedBuffer:f,gainNode:b}}get pointer(){return K(this).pointer}};async function x_(i){function s(){if(i.audioContext)return Promise.resolve(i.audioContext);const ne=new AudioContext;return ne.state==="running"||typeof window=="undefined"?Promise.resolve(ne):new Promise(he=>{const _e=()=>{ne.resume()},we=["mousedown","keydown","touchstart"],Be={capture:!0,passive:!1};we.forEach(Pe=>{window.addEventListener(Pe,_e,Be)}),ne.addEventListener("statechange",()=>{ne.state==="running"&&(we.forEach(Pe=>{window.removeEventListener(Pe,_e,Be)}),he(ne))})})}async function c(){if(i.source instanceof AudioBuffer)return i.source;const ne=pr();if(typeof i.source!="string")throw new Error("Error validating arguments to sequence.attachAudio(). args.source must either be a string or an instance of AudioBuffer.");let he;try{he=await fetch(i.source)}catch(Pe){throw console.error(Pe),new Error(`Could not fetch '${i.source}'. Network error logged above.`)}let _e;try{_e=await he.arrayBuffer()}catch(Pe){throw console.error(Pe),new Error(`Could not read '${i.source}' as an arrayBuffer.`)}(await f).decodeAudioData(_e,ne.resolve,ne.reject);let Be;try{Be=await ne.promise}catch(Pe){throw console.error(Pe),new Error(`Could not decode ${i.source} as an audio file.`)}return Be}const f=s(),b=c(),[C,z]=await Promise.all([f,b]),W=i.destinationNode||C.destination,Z=C.createGain();return Z.connect(W),{audioContext:C,decodedBuffer:z,gainNode:Z,destinationNode:W}}var y_=class{constructor(i,s,c,f,b){this._project=i,this._sheet=s,this._lengthD=c,this._subUnitsPerUnitD=f,P(this,"address"),P(this,"publicApi"),P(this,"_playbackControllerBox"),P(this,"_statePointerDerivation"),P(this,"_positionD"),P(this,"_positionFormatterD"),P(this,"_playableRangeD"),P(this,"pointer",(0,ti.pointer)({root:this,path:[]})),P(this,"$$isIdentityDerivationProvider",!0),P(this,"_logger"),P(this,"closestGridPosition",C=>{const z=this.subUnitsPerUnit,W=1/z;return parseFloat((Math.round(C/W)*W).toFixed(3))}),this._logger=i._logger.named("Sheet",s.address.sheetId).named("Instance",s.address.sheetInstanceId),this.address=w(y({},this._sheet.address),{sequenceName:"default"}),this.publicApi=new v_(this),this._playbackControllerBox=new Ot.Box(b!=null?b:new m_(yi)),this._statePointerDerivation=this._playbackControllerBox.derivation.map(C=>C.statePointer),this._positionD=this._statePointerDerivation.flatMap(C=>(0,Ot.valueDerivation)(C.position)),this._positionFormatterD=this._subUnitsPerUnitD.map(C=>new b_(C))}getIdentityDerivation(i){if(i.length===0)return(0,Ot.prism)(()=>({length:(0,Ot.val)(this.pointer.length),playing:(0,Ot.val)(this.pointer.playing),position:(0,Ot.val)(this.pointer.position)}));if(i.length>1)return(0,Ot.prism)(()=>{});const[s]=i;return s==="length"?this._lengthD:s==="position"?this._positionD:s==="playing"?(0,Ot.prism)(()=>(0,Ot.val)(this._statePointerDerivation.getValue().playing)):(0,Ot.prism)(()=>{})}get positionFormatter(){return this._positionFormatterD.getValue()}get derivationToStatePointer(){return this._statePointerDerivation}get length(){return this._lengthD.getValue()}get positionDerivation(){return this._positionD}get position(){return this._playbackControllerBox.get().getCurrentPosition()}get subUnitsPerUnit(){return this._subUnitsPerUnitD.getValue()}get positionSnappedToGrid(){return this.closestGridPosition(this.position)}set position(i){let s=i;this.pause(),s>this.length&&(s=this.length);const c=this.length;this._playbackControllerBox.get().gotoPosition(s>c?c:s)}getDurationCold(){return this._lengthD.getValue()}get playing(){return(0,Ot.val)(this._playbackControllerBox.get().statePointer.playing)}_makeRangeFromSequenceTemplate(){return(0,Ot.prism)(()=>[0,(0,Ot.val)(this._lengthD)])}playDynamicRange(i){return this._playbackControllerBox.get().playDynamicRange(i)}async play(i){const s=this.length,c=i&&i.range?i.range:[0,s],f=i&&typeof i.iterationCount=="number"?i.iterationCount:1,b=i&&typeof i.rate!="undefined"?i.rate:1,C=i&&i.direction?i.direction:"normal";return await this._play(f,[c[0],c[1]],b,C)}_play(i,s,c,f){return this._playbackControllerBox.get().play(i,s,c,f)}pause(){this._playbackControllerBox.get().pause()}replacePlaybackController(i){this.pause();const s=this._playbackControllerBox.get();this._playbackControllerBox.set(i);const c=s.getCurrentPosition();s.destroy(),i.gotoPosition(c)}},b_=class{constructor(i){this._fps=i}formatSubUnitForGrid(i){const s=i%1,c=1/this._fps;return Math.round(s/c)+"f"}formatFullUnitForGrid(i){let s=i,c="";s>=mr&&(c+=Math.floor(s/mr)+"h",s=s%mr),s>=Ei&&(c+=Math.floor(s/Ei)+"m",s=s%Ei),s>=Ti&&(c+=Math.floor(s/Ti)+"s",s=s%Ti);const f=1/this._fps;return s>=f&&(c+=Math.floor(s/f)+"f",s=s%f),c.length===0?"0s":c}formatForPlayhead(i){let s=i,c="";if(s>=mr){const b=Math.floor(s/mr);c+=fs(b.toString(),2,"0")+"h",s=s%mr}if(s>=Ei){const b=Math.floor(s/Ei);c+=fs(b.toString(),2,"0")+"m",s=s%Ei}else c.length>0&&(c+="00m");if(s>=Ti){const b=Math.floor(s/Ti);c+=fs(b.toString(),2,"0")+"s",s=s%Ti}else c+="00s";const f=1/this._fps;if(s>=f){const b=Math.round(s/f);c+=fs(b.toString(),2,"0")+"f",s=s%f}else s/f>.98?(c+=fs(1 .toString(),2,"0")+"f",s=s%f):c+="00f";return c.length===0?"00s00f":c}formatBasic(i){return i.toFixed(2)+"s"}},Ti=1,Ei=Ti*60,mr=Ei*60,Ko={};T(Ko,{boolean:()=>gu,compound:()=>Jo,number:()=>mu,rgba:()=>R_,string:()=>_u,stringLiteral:()=>z_});function uu(i,s){return i.length<=s?i:i.substr(0,s-3)+"..."}var S_=i=>typeof i=="string"?`string("${uu(i,10)}")`:typeof i=="number"?`number(${uu(String(i),10)})`:i===null?"null":i===void 0?"undefined":typeof i=="boolean"?String(i):Array.isArray(i)?"array":typeof i=="object"?"object":"unknown",hu=S_;function M_(i,{removeAlphaIfOpaque:s=!1}={}){const c=(i.a*255|256).toString(16).slice(1);return`#${(i.r*255|1<<8).toString(16).slice(1)+(i.g*255|1<<8).toString(16).slice(1)+(i.b*255|1<<8).toString(16).slice(1)+(s&&c==="ff"?"":c)}`}function Zo(i){return w(y({},i),{toString(){return M_(this,{removeAlphaIfOpaque:!0})}})}function w_(i){return Object.fromEntries(Object.entries(i).map(([s,c])=>[s,Fc(c,0,1)]))}function T_(i){function s(c){return c>=.0031308?1.055*c**(1/2.4)-.055:12.92*c}return w_({r:s(i.r),g:s(i.g),b:s(i.b),a:i.a})}function du(i){function s(c){return c>=.04045?((c+.055)/(1+.055))**2.4:c/12.92}return{r:s(i.r),g:s(i.g),b:s(i.b),a:i.a}}function fu(i){let s=.4122214708*i.r+.5363325363*i.g+.0514459929*i.b,c=.2119034982*i.r+.6806995451*i.g+.1073969566*i.b,f=.0883024619*i.r+.2817188376*i.g+.6299787005*i.b,b=Math.cbrt(s),C=Math.cbrt(c),z=Math.cbrt(f);return{L:.2104542553*b+.793617785*C-.0040720468*z,a:1.9779984951*b-2.428592205*C+.4505937099*z,b:.0259040371*b+.7827717662*C-.808675766*z,alpha:i.a}}function E_(i){let s=i.L+.3963377774*i.a+.2158037573*i.b,c=i.L-.1055613458*i.a-.0638541728*i.b,f=i.L-.0894841775*i.a-1.291485548*i.b,b=s*s*s,C=c*c*c,z=f*f*f;return{r:4.0767416621*b-3.3077115913*C+.2309699292*z,g:-1.2684380046*b+2.6097574011*C-.3413193965*z,b:-.0041960863*b-.7034186147*C+1.707614701*z,a:i.alpha}}var Ai=Symbol("TheatrePropType_Basic");function pu(i){return typeof i=="object"&&!!i&&i[Ai]==="TheatrePropType"}function A_(i){if(typeof i=="number")return mu(i);if(typeof i=="boolean")return gu(i);if(typeof i=="string")return _u(i);if(typeof i=="object"&&!!i){if(pu(i))return i;if(cp(i))return Jo(i);throw new At(`This value is not a valid prop type: ${hu(i)}`)}else throw new At(`This value is not a valid prop type: ${hu(i)}`)}function C_(i){const s={};for(const c of Object.keys(i)){const f=i[c];pu(f)?s[c]=f:s[c]=A_(f)}return s}var Jo=(i,s={})=>{const c=C_(i),f=new WeakMap;return{type:"compound",props:c,valueType:null,[Ai]:"TheatrePropType",label:s.label,default:Hg(c,C=>C.default),deserializeAndSanitize:C=>{if(typeof C!="object"||!C)return;if(f.has(C))return f.get(C);const z={};let W=!1;for(const[Z,ne]of Object.entries(c))if(Object.prototype.hasOwnProperty.call(C,Z)){const he=ne.deserializeAndSanitize(C[Z]);he!=null&&(W=!0,z[Z]=he)}if(f.set(C,z),W)return z}}},mu=(i,s={})=>{var c;return w(y({type:"number",valueType:0,default:i,[Ai]:"TheatrePropType"},s||{}),{label:s.label,nudgeFn:(c=s.nudgeFn)!=null?c:U_,nudgeMultiplier:typeof s.nudgeMultiplier=="number"?s.nudgeMultiplier:1,interpolate:L_,deserializeAndSanitize:P_(s.range)})},P_=i=>i?s=>{if(!!(typeof s=="number"&&isFinite(s)))return Fc(s,i[0],i[1])}:D_,D_=i=>typeof i=="number"&&isFinite(i)?i:void 0,L_=(i,s,c)=>i+c*(s-i),R_=(i={r:0,g:0,b:0,a:1},s={})=>{const c={};for(const f of["r","g","b","a"])c[f]=Math.min(Math.max(i[f],0),1);return{type:"rgba",valueType:null,default:Zo(c),[Ai]:"TheatrePropType",label:s.label,interpolate:O_,deserializeAndSanitize:I_}},I_=i=>{if(!i)return;let s=!0;for(const f of["r","g","b","a"])(!Object.prototype.hasOwnProperty.call(i,f)||typeof i[f]!="number")&&(s=!1);if(!s)return;const c={};for(const f of["r","g","b","a"])c[f]=Math.min(Math.max(i[f],0),1);return Zo(c)},O_=(i,s,c)=>{const f=fu(du(i)),b=fu(du(s)),C={L:(1-c)*f.L+c*b.L,a:(1-c)*f.a+c*b.a,b:(1-c)*f.b+c*b.b,alpha:(1-c)*f.alpha+c*b.alpha},z=T_(E_(C));return Zo(z)},gu=(i,s={})=>{var c;return{type:"boolean",default:i,valueType:null,[Ai]:"TheatrePropType",label:s.label,interpolate:(c=s.interpolate)!=null?c:Qo,deserializeAndSanitize:F_}},F_=i=>typeof i=="boolean"?i:void 0;function Qo(i){return i}var _u=(i,s={})=>{var c;return{type:"string",default:i,valueType:null,[Ai]:"TheatrePropType",label:s.label,interpolate:(c=s.interpolate)!=null?c:Qo,deserializeAndSanitize:N_}};function N_(i){return typeof i=="string"?i:void 0}function z_(i,s,c={}){var f,b;return{type:"stringLiteral",default:i,valuesAndLabels:y({},s),[Ai]:"TheatrePropType",valueType:null,as:(f=c.as)!=null?f:"menu",label:c.label,interpolate:(b=c.interpolate)!=null?b:Qo,deserializeAndSanitize(C){if(typeof C=="string"&&Object.prototype.hasOwnProperty.call(s,C))return C}}}var U_=({config:i,deltaX:s,deltaFraction:c,magnitude:f})=>{const{range:b}=i;return b?c*(b[1]-b[0])*f*i.nudgeMultiplier:s*f*i.nudgeMultiplier},B_=i=>i.replace(/^[\s\/]*/,"").replace(/[\s\/]*$/,"").replace(/\s*\/\s*/g," / ");function vu(i,s){return B_(i)}F(A());var k_=class{get type(){return"Theatre_Sheet_PublicAPI"}constructor(i){J(this,i)}object(i,s){const c=K(this),f=vu(i),b=c.getObject(f),C=null;if(b)return b.publicApi;{const z=Jo(s);return c.createObject(f,C,z).publicApi}}get sequence(){return K(this).getSequence().publicApi}get project(){return K(this).project.publicApi}get address(){return y({},K(this).address)}},el=F(Pt),V_=class{constructor(i,s){this.template=i,this.instanceId=s,P(this,"_objects",new el.Atom({})),P(this,"_sequence"),P(this,"address"),P(this,"publicApi"),P(this,"project"),P(this,"objectsP",this._objects.pointer),P(this,"type","Theatre_Sheet"),P(this,"_logger"),this._logger=i.project._logger.named("Sheet",s),this._logger._trace("creating sheet"),this.project=i.project,this.address=w(y({},i.address),{sheetInstanceId:this.instanceId}),this.publicApi=new k_(this)}createObject(i,s,c){const b=this.template.getObjectTemplate(i,s,c).createInstance(this,s,c);return this._objects.setIn([i],b),b}getObject(i){return this._objects.getState()[i]}getSequence(){if(!this._sequence){const i=(0,el.valueDerivation)(this.project.pointers.historic.sheetsById[this.address.sheetId].sequence.length).map(c=>typeof c=="number"?c:10),s=(0,el.valueDerivation)(this.project.pointers.historic.sheetsById[this.address.sheetId].sequence.subUnitsPerUnit).map(c=>typeof c=="number"?c:30);this._sequence=new y_(this.template.project,this,i,s)}return this._sequence}},G_=class{constructor(i,s){this.project=i,P(this,"type","Theatre_SheetTemplate"),P(this,"address"),P(this,"_instances",new Ce.Atom({})),P(this,"instancesP",this._instances.pointer),P(this,"_objectTemplates",new Ce.Atom({})),P(this,"objectTemplatesP",this._objectTemplates.pointer),this.address=w(y({},i.address),{sheetId:s})}getInstance(i){let s=this._instances.getState()[i];return s||(s=new V_(this,i),this._instances.setIn([i],s)),s}getObjectTemplate(i,s,c){let f=this._objectTemplates.getState()[i];return f||(f=new I(this,i,s,c),this._objectTemplates.setIn([i],f)),f}},tl=F(Pt),xu=F(Pt),H_=i=>new Promise(s=>setTimeout(s,i)),W_=H_;function on(i){for(var s=arguments.length,c=Array(s>1?s-1:0),f=1;f<s;f++)c[f-1]=arguments[f];throw Error("[Immer] minified error nr: "+i+(c.length?" "+c.map(function(b){return"'"+b+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Ci(i){return!!i&&!!i[qt]}function Pi(i){return!!i&&(function(s){if(!s||typeof s!="object")return!1;var c=Object.getPrototypeOf(s);if(c===null)return!0;var f=Object.hasOwnProperty.call(c,"constructor")&&c.constructor;return f===Object||typeof f=="function"&&Function.toString.call(f)===Q_}(i)||Array.isArray(i)||!!i[Pu]||!!i.constructor[Pu]||il(i)||rl(i))}function j_(i){return Ci(i)||on(23,i),i[qt].t}function ps(i,s,c){c===void 0&&(c=!1),gr(i)===0?(c?Object.keys:gl)(i).forEach(function(f){c&&typeof f=="symbol"||s(f,i[f],i)}):i.forEach(function(f,b){return s(b,f,i)})}function gr(i){var s=i[qt];return s?s.i>3?s.i-4:s.i:Array.isArray(i)?1:il(i)?2:rl(i)?3:0}function nl(i,s){return gr(i)===2?i.has(s):Object.prototype.hasOwnProperty.call(i,s)}function q_(i,s){return gr(i)===2?i.get(s):i[s]}function yu(i,s,c){var f=gr(i);f===2?i.set(s,c):f===3?(i.delete(s),i.add(c)):i[s]=c}function X_(i,s){return i===s?i!==0||1/i==1/s:i!=i&&s!=s}function il(i){return Z_&&i instanceof Map}function rl(i){return J_&&i instanceof Set}function Di(i){return i.o||i.t}function sl(i){if(Array.isArray(i))return Array.prototype.slice.call(i);var s=ev(i);delete s[qt];for(var c=gl(s),f=0;f<c.length;f++){var b=c[f],C=s[b];C.writable===!1&&(C.writable=!0,C.configurable=!0),(C.get||C.set)&&(s[b]={configurable:!0,writable:!0,enumerable:C.enumerable,value:i[b]})}return Object.create(Object.getPrototypeOf(i),s)}function al(i,s){return s===void 0&&(s=!1),ol(i)||Ci(i)||!Pi(i)||(gr(i)>1&&(i.set=i.add=i.clear=i.delete=$_),Object.freeze(i),s&&ps(i,function(c,f){return al(f,!0)},!0)),i}function $_(){on(2)}function ol(i){return i==null||typeof i!="object"||Object.isFrozen(i)}function In(i){var s=tv[i];return s||on(18,i),s}function bu(){return ms}function ll(i,s){s&&(In("Patches"),i.u=[],i.s=[],i.v=s)}function aa(i){cl(i),i.p.forEach(Y_),i.p=null}function cl(i){i===ms&&(ms=i.l)}function Su(i){return ms={p:[],l:ms,h:i,m:!0,_:0}}function Y_(i){var s=i[qt];s.i===0||s.i===1?s.j():s.O=!0}function ul(i,s){s._=s.p.length;var c=s.p[0],f=i!==void 0&&i!==c;return s.h.g||In("ES5").S(s,i,f),f?(c[qt].P&&(aa(s),on(4)),Pi(i)&&(i=oa(s,i),s.l||la(s,i)),s.u&&In("Patches").M(c[qt],i,s.u,s.s)):i=oa(s,c,[]),aa(s),s.u&&s.v(s.u,s.s),i!==Cu?i:void 0}function oa(i,s,c){if(ol(s))return s;var f=s[qt];if(!f)return ps(s,function(C,z){return Mu(i,f,s,C,z,c)},!0),s;if(f.A!==i)return s;if(!f.P)return la(i,f.t,!0),f.t;if(!f.I){f.I=!0,f.A._--;var b=f.i===4||f.i===5?f.o=sl(f.k):f.o;ps(f.i===3?new Set(b):b,function(C,z){return Mu(i,f,b,C,z,c)}),la(i,b,!1),c&&i.u&&In("Patches").R(f,c,i.u,i.s)}return f.o}function Mu(i,s,c,f,b,C){if(Ci(b)){var z=oa(i,b,C&&s&&s.i!==3&&!nl(s.D,f)?C.concat(f):void 0);if(yu(c,f,z),!Ci(z))return;i.m=!1}if(Pi(b)&&!ol(b)){if(!i.h.F&&i._<1)return;oa(i,b),s&&s.A.l||la(i,b)}}function la(i,s,c){c===void 0&&(c=!1),i.h.F&&i.m&&al(s,c)}function hl(i,s){var c=i[qt];return(c?Di(c):i)[s]}function wu(i,s){if(s in i)for(var c=Object.getPrototypeOf(i);c;){var f=Object.getOwnPropertyDescriptor(c,s);if(f)return f;c=Object.getPrototypeOf(c)}}function dl(i){i.P||(i.P=!0,i.l&&dl(i.l))}function fl(i){i.o||(i.o=sl(i.t))}function pl(i,s,c){var f=il(s)?In("MapSet").N(s,c):rl(s)?In("MapSet").T(s,c):i.g?function(b,C){var z=Array.isArray(b),W={i:z?1:0,A:C?C.A:bu(),P:!1,I:!1,D:{},l:C,t:b,k:null,o:null,j:null,C:!1},Z=W,ne=ca;z&&(Z=[W],ne=ua);var he=Proxy.revocable(Z,ne),_e=he.revoke,we=he.proxy;return W.k=we,W.j=_e,we}(s,c):In("ES5").J(s,c);return(c?c.A:bu()).p.push(f),f}function K_(i){return Ci(i)||on(22,i),function s(c){if(!Pi(c))return c;var f,b=c[qt],C=gr(c);if(b){if(!b.P&&(b.i<4||!In("ES5").K(b)))return b.t;b.I=!0,f=Tu(c,C),b.I=!1}else f=Tu(c,C);return ps(f,function(z,W){b&&q_(b.t,z)===W||yu(f,z,s(W))}),C===3?new Set(f):f}(i)}function Tu(i,s){switch(s){case 2:return new Map(i);case 3:return Array.from(i)}return sl(i)}var Eu,ms,ml=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",Z_=typeof Map!="undefined",J_=typeof Set!="undefined",Au=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",Cu=ml?Symbol.for("immer-nothing"):((Eu={})["immer-nothing"]=!0,Eu),Pu=ml?Symbol.for("immer-draftable"):"__$immer_draftable",qt=ml?Symbol.for("immer-state"):"__$immer_state",Q_=""+Object.prototype.constructor,gl=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(i){return Object.getOwnPropertyNames(i).concat(Object.getOwnPropertySymbols(i))}:Object.getOwnPropertyNames,ev=Object.getOwnPropertyDescriptors||function(i){var s={};return gl(i).forEach(function(c){s[c]=Object.getOwnPropertyDescriptor(i,c)}),s},tv={},ca={get:function(i,s){if(s===qt)return i;var c=Di(i);if(!nl(c,s))return function(b,C,z){var W,Z=wu(C,z);return Z?"value"in Z?Z.value:(W=Z.get)===null||W===void 0?void 0:W.call(b.k):void 0}(i,c,s);var f=c[s];return i.I||!Pi(f)?f:f===hl(i.t,s)?(fl(i),i.o[s]=pl(i.A.h,f,i)):f},has:function(i,s){return s in Di(i)},ownKeys:function(i){return Reflect.ownKeys(Di(i))},set:function(i,s,c){var f=wu(Di(i),s);if(f!=null&&f.set)return f.set.call(i.k,c),!0;if(!i.P){var b=hl(Di(i),s),C=b==null?void 0:b[qt];if(C&&C.t===c)return i.o[s]=c,i.D[s]=!1,!0;if(X_(c,b)&&(c!==void 0||nl(i.t,s)))return!0;fl(i),dl(i)}return i.o[s]===c&&typeof c!="number"&&(c!==void 0||s in i.o)||(i.o[s]=c,i.D[s]=!0,!0)},deleteProperty:function(i,s){return hl(i.t,s)!==void 0||s in i.t?(i.D[s]=!1,fl(i),dl(i)):delete i.D[s],i.o&&delete i.o[s],!0},getOwnPropertyDescriptor:function(i,s){var c=Di(i),f=Reflect.getOwnPropertyDescriptor(c,s);return f&&{writable:!0,configurable:i.i!==1||s!=="length",enumerable:f.enumerable,value:c[s]}},defineProperty:function(){on(11)},getPrototypeOf:function(i){return Object.getPrototypeOf(i.t)},setPrototypeOf:function(){on(12)}},ua={};ps(ca,function(i,s){ua[i]=function(){return arguments[0]=arguments[0][0],s.apply(this,arguments)}}),ua.deleteProperty=function(i,s){return ca.deleteProperty.call(this,i[0],s)},ua.set=function(i,s,c){return ca.set.call(this,i[0],s,c,i[0])};var nv=function(){function i(c){var f=this;this.g=Au,this.F=!0,this.produce=function(b,C,z){if(typeof b=="function"&&typeof C!="function"){var W=C;C=b;var Z=f;return function(Be){var Pe=this;Be===void 0&&(Be=W);for(var $e=arguments.length,ut=Array($e>1?$e-1:0),rt=1;rt<$e;rt++)ut[rt-1]=arguments[rt];return Z.produce(Be,function(mt){var Xt;return(Xt=C).call.apply(Xt,[Pe,mt].concat(ut))})}}var ne;if(typeof C!="function"&&on(6),z!==void 0&&typeof z!="function"&&on(7),Pi(b)){var he=Su(f),_e=pl(f,b,void 0),we=!0;try{ne=C(_e),we=!1}finally{we?aa(he):cl(he)}return typeof Promise!="undefined"&&ne instanceof Promise?ne.then(function(Be){return ll(he,z),ul(Be,he)},function(Be){throw aa(he),Be}):(ll(he,z),ul(ne,he))}if(!b||typeof b!="object")return(ne=C(b))===Cu?void 0:(ne===void 0&&(ne=b),f.F&&al(ne,!0),ne);on(21,b)},this.produceWithPatches=function(b,C){return typeof b=="function"?function(Z){for(var ne=arguments.length,he=Array(ne>1?ne-1:0),_e=1;_e<ne;_e++)he[_e-1]=arguments[_e];return f.produceWithPatches(Z,function(we){return b.apply(void 0,[we].concat(he))})}:[f.produce(b,C,function(Z,ne){z=Z,W=ne}),z,W];var z,W},typeof(c==null?void 0:c.useProxies)=="boolean"&&this.setUseProxies(c.useProxies),typeof(c==null?void 0:c.autoFreeze)=="boolean"&&this.setAutoFreeze(c.autoFreeze)}var s=i.prototype;return s.createDraft=function(c){Pi(c)||on(8),Ci(c)&&(c=K_(c));var f=Su(this),b=pl(this,c,void 0);return b[qt].C=!0,cl(f),b},s.finishDraft=function(c,f){var b=c&&c[qt],C=b.A;return ll(C,f),ul(void 0,C)},s.setAutoFreeze=function(c){this.F=c},s.setUseProxies=function(c){c&&!Au&&on(20),this.g=c},s.applyPatches=function(c,f){var b;for(b=f.length-1;b>=0;b--){var C=f[b];if(C.path.length===0&&C.op==="replace"){c=C.value;break}}var z=In("Patches").$;return Ci(c)?z(c,f):this.produce(c,function(W){return z(W,f.slice(b+1))})},i}(),Qt=new nv;Qt.produce,Qt.produceWithPatches.bind(Qt),Qt.setAutoFreeze.bind(Qt),Qt.setUseProxies.bind(Qt),Qt.applyPatches.bind(Qt),Qt.createDraft.bind(Qt),Qt.finishDraft.bind(Qt);var iv={currentProjectStateDefinitionVersion:"0.4.0"},_l=iv;async function rv(i,s,c){await W_(0),i.transaction(({drafts:f})=>{var b;const C=s.address.projectId;f.ephemeral.coreByProject[C]={lastExportedObject:null,loadingState:{type:"loading"}},f.ahistoric.coreByProject[C]={ahistoricStuff:""};function z(){f.ephemeral.coreByProject[C].loadingState={type:"loaded"},f.historic.coreByProject[C]={sheetsById:{},definitionVersion:_l.currentProjectStateDefinitionVersion,revisionHistory:[]}}function W(_e){f.ephemeral.coreByProject[C].loadingState={type:"loaded"},f.historic.coreByProject[C]=_e}function Z(){f.ephemeral.coreByProject[C].loadingState={type:"loaded"}}function ne(_e){f.ephemeral.coreByProject[C].loadingState={type:"browserStateIsNotBasedOnDiskState",onDiskState:_e}}const he=(b=j_(f.historic))==null?void 0:b.coreByProject[s.address.projectId];he?c&&he.revisionHistory.indexOf(c.revisionHistory[0])==-1?ne(c):Z():c?W(c):z()})}function Du(){}function Lu(i){var s,c;const f=(s=i==null?void 0:i.logging)!=null&&s.internal?(c=i.logging.min)!=null?c:ei.WARN:1/0,b=f<=ei.DEBUG,C=f<=ei.ERROR,z=Ys(void 0,{_debug:b?console.debug.bind(console,"_coreLogger(TheatreInternalLogger) debug"):Du,_error:C?console.error.bind(console,"_coreLogger(TheatreInternalLogger) error"):Du});if(i){const{logger:W,logging:Z}=i;W&&z.configureLogger(W),Z?z.configureLogging(Z):z.configureLogging({dev:!1})}return z.getLogger().named("Theatre")}var sv=class{constructor(i,s={},c){this.config=s,this.publicApi=c,P(this,"pointers"),P(this,"_pointerProxies"),P(this,"address"),P(this,"_readyDeferred"),P(this,"_sheetTemplates",new xu.Atom({})),P(this,"sheetTemplatesP",this._sheetTemplates.pointer),P(this,"_studio"),P(this,"type","Theatre_Project"),P(this,"_logger");var f;this._logger=Lu(s.experiments).named("Project",i),this._logger.traceDev("creating project"),this.address={projectId:i},this._logger._kapow('this is a "kapow"');const b=new xu.Atom({ahistoric:{ahistoricStuff:""},historic:(f=s.state)!=null?f:{sheetsById:{},definitionVersion:_l.currentProjectStateDefinitionVersion,revisionHistory:[]},ephemeral:{loadingState:{type:"loaded"},lastExportedObject:null}});this._pointerProxies={historic:new tl.PointerProxy(b.pointer.historic),ahistoric:new tl.PointerProxy(b.pointer.ahistoric),ephemeral:new tl.PointerProxy(b.pointer.ephemeral)},this.pointers={historic:this._pointerProxies.historic.pointer,ahistoric:this._pointerProxies.ahistoric.pointer,ephemeral:this._pointerProxies.ephemeral.pointer},pe.add(i,this),this._readyDeferred=pr(),s.state?setTimeout(()=>{this._studio||(this._readyDeferred.resolve(void 0),this._logger._trace("ready deferred resolved with no state"))},0):setTimeout(()=>{if(!this._studio)throw new Error(`Argument config.state in Theatre.getProject("${i}", config) is empty. This is fine while you are using @theatre/core along with @theatre/sutdio. But since @theatre/studio is not loaded, the state of project "${i}" will be empty.

To fix this, you need to add @theatre/studio into the bundle and export the projet's state. Learn how to do that at https://docs.theatrejs.com/in-depth/#exporting`)},1e3)}attachToStudio(i){if(this._studio){if(this._studio!==i)throw new Error(`Project ${this.address.projectId} is already attached to studio ${this._studio.address.studioId}`);this._logger.warnDev(`Project ${this.address.projectId} is already attached to studio ${this._studio.address.studioId}`);return}this._studio=i,i.initialized.then(async()=>{await rv(i,this,this.config.state),this._pointerProxies.historic.setPointer(i.atomP.historic.coreByProject[this.address.projectId]),this._pointerProxies.ahistoric.setPointer(i.atomP.ahistoric.coreByProject[this.address.projectId]),this._pointerProxies.ephemeral.setPointer(i.atomP.ephemeral.coreByProject[this.address.projectId]),this._readyDeferred.resolve(void 0)})}get isAttachedToStudio(){return!!this._studio}get ready(){return this._readyDeferred.promise}isReady(){return this._readyDeferred.status==="resolved"}getOrCreateSheet(i,s="default"){let c=this._sheetTemplates.getState()[i];return c||(c=new G_(this,i),this._sheetTemplates.setIn([i],c)),c.getInstance(s)}},av=class{get type(){return"Theatre_Project_PublicAPI"}constructor(i,s={}){J(this,new sv(i,s,this))}get ready(){return K(this).ready}get isReady(){return K(this).isReady()}get address(){return y({},K(this).address)}sheet(i,s="default"){const c=vu(i);return K(this).getOrCreateSheet(c,s).publicApi}};F(A());var Ru=F(Pt),vl=F(Pt);function Iu(i,s={}){const c=pe.get(i);if(c)return c.publicApi;const b=Lu(s.experiments).named("Project",i);return s.state?(lv(i,s.state),b._debug("deep validated config.state on disk")):b._debug("no config.state"),new av(i,s)}var ov=(i,s)=>{if(Array.isArray(s)||s==null||s.definitionVersion!==_l.currentProjectStateDefinitionVersion)throw new At(`Error validating conf.state in Theatre.getProject(${JSON.stringify(i)}, conf). The state seems to be formatted in a way that is unreadable to Theatre.js. Read more at https://docs.theatrejs.com`)},lv=(i,s)=>{ov(i,s)};function Ou(i,s){if((0,Ru.isPointer)(i))return(0,vl.valueDerivation)(i).tapImmediate(yi,s);if((0,vl.isDerivation)(i))return i.tapImmediate(yi,s);throw new Error("Called onChange(p) where p is neither a pointer nor a derivation.")}function Fu(i){if((0,Ru.isPointer)(i))return(0,vl.valueDerivation)(i).getValue();throw new Error("Called val(p) where p is not a pointer.")}var cv="__TheatreJS_StudioBundle",xl="__TheatreJS_CoreBundle",uv=class{constructor(){P(this,"_studio")}get type(){return"Theatre_CoreBundle"}get version(){return"0.5.0-rc.1"}getBitsForStudio(i,s){if(this._studio)throw new Error("@theatre/core is already attached to @theatre/studio");this._studio=i;const c={projectsP:pe.atom.pointer.projects,privateAPI:K,coreExports:N};s(c)}};hv();function hv(){if(typeof window=="undefined")return;const i=window[xl];if(typeof i!="undefined")throw typeof i=="object"&&i&&typeof i.version=="string"?new Error(`It seems that the module '@theatre/core' is loaded more than once. This could have two possible causes:
1. You might have two separate versions of theatre in node_modules.
2. Or this might be a bundling misconfiguration, in case you're using a bundler like Webpack/ESBuild/Rollup.

Note that it **is okay** to import '@theatre/core' multiple times. But those imports should point to the same module.`):new Error(`The variable window.${xl} seems to be already set by a module other than @theatre/core.`);const s=new uv;window[xl]=s;const c=window[cv];c&&c!==null&&c.type==="Theatre_StudioBundle"&&c.registerCoreBundle(s)}/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */})(Yi,Yi.exports);const dM={"Animated scene":{staticOverrides:{byObject:{"Torus Knot":{rotation:{z:0,y:0,x:0},wireframe:!1}}},sequence:{subUnitsPerUnit:30,length:3,type:"PositionalSequence",tracksByObject:{"Torus Knot":{trackData:{rVM9fvISsC:{type:"BasicKeyframedTrack",__debugName:'Torus Knot:["rotation","y"]',keyframes:[{id:"IXaZv1WgwK",position:0,connectedRight:!0,handles:[.5,1,.645,.045],value:0},{id:"V1i_Ve-dDz",position:3,connectedRight:!0,handles:[.355,1,.5,0],value:1}]},Q9IUK1iBde:{type:"BasicKeyframedTrack",__debugName:'Torus Knot:["rotation","x"]',keyframes:[{id:"CFjUByQoGL",position:0,connectedRight:!0,handles:[.5,1,.645,.045],value:0},{id:"6qCOzmWF9R",position:3,connectedRight:!0,handles:[.355,1,.5,0],value:1}]},GIF0kOR5zw:{type:"BasicKeyframedTrack",__debugName:'Torus Knot:["rotation","z"]',keyframes:[{id:"IQHb1DjSrE",position:0,connectedRight:!0,handles:[.5,1,.645,.045],value:0},{id:"vvKRX6cdlX",position:3,connectedRight:!0,handles:[.355,1,.5,0],value:1}]}},trackIdByPropPath:{'["rotation","y"]':"rVM9fvISsC",'["rotation","x"]':"Q9IUK1iBde",'["rotation","z"]':"GIF0kOR5zw"}}}}}},fM="0.4.0",pM=["qEWzrJ6ekcf9JPUN","Q9V6MzZNNPqzpB-0","Xw8QUUV086pGK5Pl","_5mNC6F_c_uzRdMY"];var mM={sheetsById:dM,definitionVersion:fM,revisionHistory:pM};const wd=Yi.exports.getProject("THREE.js x Theatre.js",{state:mM}),Td=wd.sheet("Animated scene"),Ms=new dn(70,window.innerWidth/window.innerHeight,10,200);Ms.position.z=50;const Gr=new sM,gM=new dc(10,3,300,16),pc=new aM;pc.color=new st("#049ef4");pc.roughness=.5;const Ji=new Hn(gM,pc);Ji.castShadow=!0;Ji.receiveShadow=!0;Gr.add(Ji);const _M=Td.object("Torus Knot",{rotation:Yi.exports.types.compound({x:Yi.exports.types.number(Ji.rotation.x,{range:[-2,2]}),y:Yi.exports.types.number(Ji.rotation.y,{range:[-2,2]}),z:Yi.exports.types.number(Ji.rotation.z,{range:[-2,2]})})});_M.onValuesChange(o=>{const{x:e,y:t,z:n}=o.rotation;Ji.rotation.set(e*Math.PI,t*Math.PI,n*Math.PI)});const vM=new uM("#ffffff",.5);Gr.add(vM);const sn=new cM("#ff0000");sn.intensity=30;sn.position.y=20;sn.position.z=20;sn.castShadow=!0;sn.shadow.mapSize.width=2048;sn.shadow.mapSize.height=2048;sn.shadow.camera.far=50;sn.shadow.camera.near=1;sn.shadow.camera.top=20;sn.shadow.camera.right=20;sn.shadow.camera.bottom=-20;sn.shadow.camera.left=-20;Gr.add(sn);const Ds=new hM("#ff0",1,50,50);Ds.position.z=10;Ds.position.y=-40;Ds.position.x=-20;Ds.lookAt(new B(0,0,0));Gr.add(Ds);const jn=new Md({antialias:!0});jn.shadowMap.enabled=!0;jn.shadowMap.type=Jh;jn.setSize(window.innerWidth,window.innerHeight);jn.setPixelRatio(Math.min(window.devicePixelRatio,2));jn.render(Gr,Ms);document.body.appendChild(jn.domElement);function Ed(){jn.render(Gr,Ms),window.requestAnimationFrame(Ed)}Ed();window.addEventListener("resize",function(){Ms.aspect=window.innerWidth/window.innerHeight,Ms.updateProjectionMatrix(),jn.setSize(window.innerWidth,window.innerHeight),jn.setPixelRatio(Math.min(window.devicePixelRatio,2))},!1);wd.ready.then(()=>Td.sequence.play({iterationCount:1/0}));
