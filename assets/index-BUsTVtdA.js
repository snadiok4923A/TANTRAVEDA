(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var $x={exports:{}},Td={},qx={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qu=Symbol.for("react.element"),dE=Symbol.for("react.portal"),hE=Symbol.for("react.fragment"),pE=Symbol.for("react.strict_mode"),mE=Symbol.for("react.profiler"),gE=Symbol.for("react.provider"),_E=Symbol.for("react.context"),vE=Symbol.for("react.forward_ref"),xE=Symbol.for("react.suspense"),yE=Symbol.for("react.memo"),SE=Symbol.for("react.lazy"),q_=Symbol.iterator;function ME(n){return n===null||typeof n!="object"?null:(n=q_&&n[q_]||n["@@iterator"],typeof n=="function"?n:null)}var Kx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zx=Object.assign,Qx={};function xl(n,e,t){this.props=n,this.context=e,this.refs=Qx,this.updater=t||Kx}xl.prototype.isReactComponent={};xl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};xl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Jx(){}Jx.prototype=xl.prototype;function pg(n,e,t){this.props=n,this.context=e,this.refs=Qx,this.updater=t||Kx}var mg=pg.prototype=new Jx;mg.constructor=pg;Zx(mg,xl.prototype);mg.isPureReactComponent=!0;var K_=Array.isArray,ey=Object.prototype.hasOwnProperty,gg={current:null},ty={key:!0,ref:!0,__self:!0,__source:!0};function ny(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ey.call(e,i)&&!ty.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Qu,type:n,key:s,ref:o,props:r,_owner:gg.current}}function EE(n,e){return{$$typeof:Qu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function _g(n){return typeof n=="object"&&n!==null&&n.$$typeof===Qu}function wE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Z_=/\/+/g;function Jd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?wE(""+n.key):e.toString(36)}function df(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Qu:case dE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Jd(o,0):i,K_(r)?(t="",n!=null&&(t=n.replace(Z_,"$&/")+"/"),df(r,e,t,"",function(u){return u})):r!=null&&(_g(r)&&(r=EE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Z_,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",K_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Jd(s,a);o+=df(s,e,t,l,r)}else if(l=ME(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Jd(s,a++),o+=df(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function lc(n,e,t){if(n==null)return n;var i=[],r=0;return df(n,i,"","",function(s){return e.call(t,s,r++)}),i}function TE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var qn={current:null},hf={transition:null},AE={ReactCurrentDispatcher:qn,ReactCurrentBatchConfig:hf,ReactCurrentOwner:gg};function iy(){throw Error("act(...) is not supported in production builds of React.")}at.Children={map:lc,forEach:function(n,e,t){lc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return lc(n,function(){e++}),e},toArray:function(n){return lc(n,function(e){return e})||[]},only:function(n){if(!_g(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};at.Component=xl;at.Fragment=hE;at.Profiler=mE;at.PureComponent=pg;at.StrictMode=pE;at.Suspense=xE;at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AE;at.act=iy;at.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Zx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gg.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)ey.call(e,l)&&!ty.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Qu,type:n.type,key:r,ref:s,props:i,_owner:o}};at.createContext=function(n){return n={$$typeof:_E,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:gE,_context:n},n.Consumer=n};at.createElement=ny;at.createFactory=function(n){var e=ny.bind(null,n);return e.type=n,e};at.createRef=function(){return{current:null}};at.forwardRef=function(n){return{$$typeof:vE,render:n}};at.isValidElement=_g;at.lazy=function(n){return{$$typeof:SE,_payload:{_status:-1,_result:n},_init:TE}};at.memo=function(n,e){return{$$typeof:yE,type:n,compare:e===void 0?null:e}};at.startTransition=function(n){var e=hf.transition;hf.transition={};try{n()}finally{hf.transition=e}};at.unstable_act=iy;at.useCallback=function(n,e){return qn.current.useCallback(n,e)};at.useContext=function(n){return qn.current.useContext(n)};at.useDebugValue=function(){};at.useDeferredValue=function(n){return qn.current.useDeferredValue(n)};at.useEffect=function(n,e){return qn.current.useEffect(n,e)};at.useId=function(){return qn.current.useId()};at.useImperativeHandle=function(n,e,t){return qn.current.useImperativeHandle(n,e,t)};at.useInsertionEffect=function(n,e){return qn.current.useInsertionEffect(n,e)};at.useLayoutEffect=function(n,e){return qn.current.useLayoutEffect(n,e)};at.useMemo=function(n,e){return qn.current.useMemo(n,e)};at.useReducer=function(n,e,t){return qn.current.useReducer(n,e,t)};at.useRef=function(n){return qn.current.useRef(n)};at.useState=function(n){return qn.current.useState(n)};at.useSyncExternalStore=function(n,e,t){return qn.current.useSyncExternalStore(n,e,t)};at.useTransition=function(){return qn.current.useTransition()};at.version="18.3.1";qx.exports=at;var je=qx.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CE=je,RE=Symbol.for("react.element"),bE=Symbol.for("react.fragment"),PE=Object.prototype.hasOwnProperty,LE=CE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DE={key:!0,ref:!0,__self:!0,__source:!0};function ry(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)PE.call(e,i)&&!DE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:RE,type:n,key:s,ref:o,props:r,_owner:LE.current}}Td.Fragment=bE;Td.jsx=ry;Td.jsxs=ry;$x.exports=Td;var I=$x.exports,sy={exports:{}},Li={},oy={exports:{}},ay={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,Q){var b=N.length;N.push(Q);e:for(;0<b;){var re=b-1>>>1,Te=N[re];if(0<r(Te,Q))N[re]=Q,N[b]=Te,b=re;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var Q=N[0],b=N.pop();if(b!==Q){N[0]=b;e:for(var re=0,Te=N.length,$e=Te>>>1;re<$e;){var $=2*(re+1)-1,ie=N[$],he=$+1,fe=N[he];if(0>r(ie,b))he<Te&&0>r(fe,ie)?(N[re]=fe,N[he]=b,re=he):(N[re]=ie,N[$]=b,re=$);else if(he<Te&&0>r(fe,b))N[re]=fe,N[he]=b,re=he;else break e}}return Q}function r(N,Q){var b=N.sortIndex-Q.sortIndex;return b!==0?b:N.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,_=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var Q=t(u);Q!==null;){if(Q.callback===null)i(u);else if(Q.startTime<=N)i(u),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=t(u)}}function S(N){if(g=!1,x(N),!_)if(t(l)!==null)_=!0,j(C);else{var Q=t(u);Q!==null&&V(S,Q.startTime-N)}}function C(N,Q){_=!1,g&&(g=!1,h(R),R=-1),p=!0;var b=f;try{for(x(Q),d=t(l);d!==null&&(!(d.expirationTime>Q)||N&&!D());){var re=d.callback;if(typeof re=="function"){d.callback=null,f=d.priorityLevel;var Te=re(d.expirationTime<=Q);Q=n.unstable_now(),typeof Te=="function"?d.callback=Te:d===t(l)&&i(l),x(Q)}else i(l);d=t(l)}if(d!==null)var $e=!0;else{var $=t(u);$!==null&&V(S,$.startTime-Q),$e=!1}return $e}finally{d=null,f=b,p=!1}}var T=!1,y=null,R=-1,E=5,M=-1;function D(){return!(n.unstable_now()-M<E)}function F(){if(y!==null){var N=n.unstable_now();M=N;var Q=!0;try{Q=y(!0,N)}finally{Q?z():(T=!1,y=null)}}else T=!1}var z;if(typeof v=="function")z=function(){v(F)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,K=Y.port2;Y.port1.onmessage=F,z=function(){K.postMessage(null)}}else z=function(){m(F,0)};function j(N){y=N,T||(T=!0,z())}function V(N,Q){R=m(function(){N(n.unstable_now())},Q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,j(C))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(f){case 1:case 2:case 3:var Q=3;break;default:Q=f}var b=f;f=Q;try{return N()}finally{f=b}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,Q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var b=f;f=N;try{return Q()}finally{f=b}},n.unstable_scheduleCallback=function(N,Q,b){var re=n.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?re+b:re):b=re,N){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=b+Te,N={id:c++,callback:Q,priorityLevel:N,startTime:b,expirationTime:Te,sortIndex:-1},b>re?(N.sortIndex=b,e(u,N),t(l)===null&&N===t(u)&&(g?(h(R),R=-1):g=!0,V(S,b-re))):(N.sortIndex=Te,e(l,N),_||p||(_=!0,j(C))),N},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(N){var Q=f;return function(){var b=f;f=Q;try{return N.apply(this,arguments)}finally{f=b}}}})(ay);oy.exports=ay;var NE=oy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IE=je,Ri=NE;function de(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ly=new Set,Mu={};function Yo(n,e){el(n,e),el(n+"Capture",e)}function el(n,e){for(Mu[n]=e,n=0;n<e.length;n++)ly.add(e[n])}var Qr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mp=Object.prototype.hasOwnProperty,UE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Q_={},J_={};function OE(n){return mp.call(J_,n)?!0:mp.call(Q_,n)?!1:UE.test(n)?J_[n]=!0:(Q_[n]=!0,!1)}function FE(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function kE(n,e,t,i){if(e===null||typeof e>"u"||FE(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Tn[n]=new Kn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Tn[e]=new Kn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Tn[n]=new Kn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Tn[n]=new Kn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Tn[n]=new Kn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Tn[n]=new Kn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Tn[n]=new Kn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Tn[n]=new Kn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Tn[n]=new Kn(n,5,!1,n.toLowerCase(),null,!1,!1)});var vg=/[\-:]([a-z])/g;function xg(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(vg,xg);Tn[e]=new Kn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(vg,xg);Tn[e]=new Kn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(vg,xg);Tn[e]=new Kn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Tn[n]=new Kn(n,1,!1,n.toLowerCase(),null,!1,!1)});Tn.xlinkHref=new Kn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Tn[n]=new Kn(n,1,!1,n.toLowerCase(),null,!0,!0)});function yg(n,e,t,i){var r=Tn.hasOwnProperty(e)?Tn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kE(e,t,r,i)&&(t=null),i||r===null?OE(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var os=IE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uc=Symbol.for("react.element"),Sa=Symbol.for("react.portal"),Ma=Symbol.for("react.fragment"),Sg=Symbol.for("react.strict_mode"),gp=Symbol.for("react.profiler"),uy=Symbol.for("react.provider"),cy=Symbol.for("react.context"),Mg=Symbol.for("react.forward_ref"),_p=Symbol.for("react.suspense"),vp=Symbol.for("react.suspense_list"),Eg=Symbol.for("react.memo"),_s=Symbol.for("react.lazy"),fy=Symbol.for("react.offscreen"),e0=Symbol.iterator;function wl(n){return n===null||typeof n!="object"?null:(n=e0&&n[e0]||n["@@iterator"],typeof n=="function"?n:null)}var Wt=Object.assign,eh;function Bl(n){if(eh===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);eh=e&&e[1]||""}return`
`+eh+n}var th=!1;function nh(n,e){if(!n||th)return"";th=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{th=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Bl(n):""}function zE(n){switch(n.tag){case 5:return Bl(n.type);case 16:return Bl("Lazy");case 13:return Bl("Suspense");case 19:return Bl("SuspenseList");case 0:case 2:case 15:return n=nh(n.type,!1),n;case 11:return n=nh(n.type.render,!1),n;case 1:return n=nh(n.type,!0),n;default:return""}}function xp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ma:return"Fragment";case Sa:return"Portal";case gp:return"Profiler";case Sg:return"StrictMode";case _p:return"Suspense";case vp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case cy:return(n.displayName||"Context")+".Consumer";case uy:return(n._context.displayName||"Context")+".Provider";case Mg:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Eg:return e=n.displayName||null,e!==null?e:xp(n.type)||"Memo";case _s:e=n._payload,n=n._init;try{return xp(n(e))}catch{}}return null}function BE(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xp(e);case 8:return e===Sg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function dy(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function HE(n){var e=dy(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function cc(n){n._valueTracker||(n._valueTracker=HE(n))}function hy(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=dy(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function zf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function yp(n,e){var t=e.checked;return Wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function t0(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Gs(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function py(n,e){e=e.checked,e!=null&&yg(n,"checked",e,!1)}function Sp(n,e){py(n,e);var t=Gs(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Mp(n,e.type,t):e.hasOwnProperty("defaultValue")&&Mp(n,e.type,Gs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function n0(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Mp(n,e,t){(e!=="number"||zf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Hl=Array.isArray;function Fa(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Gs(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Ep(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return Wt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function i0(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(de(92));if(Hl(t)){if(1<t.length)throw Error(de(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Gs(t)}}function my(n,e){var t=Gs(e.value),i=Gs(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function r0(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function gy(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?gy(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fc,_y=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(fc=fc||document.createElement("div"),fc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Eu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ql={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},VE=["Webkit","ms","Moz","O"];Object.keys(Ql).forEach(function(n){VE.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ql[e]=Ql[n]})});function vy(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ql.hasOwnProperty(n)&&Ql[n]?(""+e).trim():e+"px"}function xy(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=vy(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var GE=Wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tp(n,e){if(e){if(GE[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function Ap(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cp=null;function wg(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Rp=null,ka=null,za=null;function s0(n){if(n=tc(n)){if(typeof Rp!="function")throw Error(de(280));var e=n.stateNode;e&&(e=Pd(e),Rp(n.stateNode,n.type,e))}}function yy(n){ka?za?za.push(n):za=[n]:ka=n}function Sy(){if(ka){var n=ka,e=za;if(za=ka=null,s0(n),e)for(n=0;n<e.length;n++)s0(e[n])}}function My(n,e){return n(e)}function Ey(){}var ih=!1;function wy(n,e,t){if(ih)return n(e,t);ih=!0;try{return My(n,e,t)}finally{ih=!1,(ka!==null||za!==null)&&(Ey(),Sy())}}function wu(n,e){var t=n.stateNode;if(t===null)return null;var i=Pd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(de(231,e,typeof t));return t}var bp=!1;if(Qr)try{var Tl={};Object.defineProperty(Tl,"passive",{get:function(){bp=!0}}),window.addEventListener("test",Tl,Tl),window.removeEventListener("test",Tl,Tl)}catch{bp=!1}function WE(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Jl=!1,Bf=null,Hf=!1,Pp=null,XE={onError:function(n){Jl=!0,Bf=n}};function jE(n,e,t,i,r,s,o,a,l){Jl=!1,Bf=null,WE.apply(XE,arguments)}function YE(n,e,t,i,r,s,o,a,l){if(jE.apply(this,arguments),Jl){if(Jl){var u=Bf;Jl=!1,Bf=null}else throw Error(de(198));Hf||(Hf=!0,Pp=u)}}function $o(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Ty(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function o0(n){if($o(n)!==n)throw Error(de(188))}function $E(n){var e=n.alternate;if(!e){if(e=$o(n),e===null)throw Error(de(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return o0(r),n;if(s===i)return o0(r),e;s=s.sibling}throw Error(de(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(de(189))}}if(t.alternate!==i)throw Error(de(190))}if(t.tag!==3)throw Error(de(188));return t.stateNode.current===t?n:e}function Ay(n){return n=$E(n),n!==null?Cy(n):null}function Cy(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Cy(n);if(e!==null)return e;n=n.sibling}return null}var Ry=Ri.unstable_scheduleCallback,a0=Ri.unstable_cancelCallback,qE=Ri.unstable_shouldYield,KE=Ri.unstable_requestPaint,$t=Ri.unstable_now,ZE=Ri.unstable_getCurrentPriorityLevel,Tg=Ri.unstable_ImmediatePriority,by=Ri.unstable_UserBlockingPriority,Vf=Ri.unstable_NormalPriority,QE=Ri.unstable_LowPriority,Py=Ri.unstable_IdlePriority,Ad=null,Ar=null;function JE(n){if(Ar&&typeof Ar.onCommitFiberRoot=="function")try{Ar.onCommitFiberRoot(Ad,n,void 0,(n.current.flags&128)===128)}catch{}}var ur=Math.clz32?Math.clz32:nw,ew=Math.log,tw=Math.LN2;function nw(n){return n>>>=0,n===0?32:31-(ew(n)/tw|0)|0}var dc=64,hc=4194304;function Vl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Gf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Vl(a):(s&=o,s!==0&&(i=Vl(s)))}else o=t&~r,o!==0?i=Vl(o):s!==0&&(i=Vl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ur(e),r=1<<t,i|=n[t],e&=~r;return i}function iw(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rw(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ur(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=iw(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Lp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ly(){var n=dc;return dc<<=1,!(dc&4194240)&&(dc=64),n}function rh(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ju(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ur(e),n[e]=t}function sw(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ur(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Ag(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ur(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var wt=0;function Dy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ny,Cg,Iy,Uy,Oy,Dp=!1,pc=[],Ps=null,Ls=null,Ds=null,Tu=new Map,Au=new Map,xs=[],ow="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function l0(n,e){switch(n){case"focusin":case"focusout":Ps=null;break;case"dragenter":case"dragleave":Ls=null;break;case"mouseover":case"mouseout":Ds=null;break;case"pointerover":case"pointerout":Tu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Au.delete(e.pointerId)}}function Al(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=tc(e),e!==null&&Cg(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function aw(n,e,t,i,r){switch(e){case"focusin":return Ps=Al(Ps,n,e,t,i,r),!0;case"dragenter":return Ls=Al(Ls,n,e,t,i,r),!0;case"mouseover":return Ds=Al(Ds,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Tu.set(s,Al(Tu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Au.set(s,Al(Au.get(s)||null,n,e,t,i,r)),!0}return!1}function Fy(n){var e=yo(n.target);if(e!==null){var t=$o(e);if(t!==null){if(e=t.tag,e===13){if(e=Ty(t),e!==null){n.blockedOn=e,Oy(n.priority,function(){Iy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function pf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Np(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Cp=i,t.target.dispatchEvent(i),Cp=null}else return e=tc(t),e!==null&&Cg(e),n.blockedOn=t,!1;e.shift()}return!0}function u0(n,e,t){pf(n)&&t.delete(e)}function lw(){Dp=!1,Ps!==null&&pf(Ps)&&(Ps=null),Ls!==null&&pf(Ls)&&(Ls=null),Ds!==null&&pf(Ds)&&(Ds=null),Tu.forEach(u0),Au.forEach(u0)}function Cl(n,e){n.blockedOn===e&&(n.blockedOn=null,Dp||(Dp=!0,Ri.unstable_scheduleCallback(Ri.unstable_NormalPriority,lw)))}function Cu(n){function e(r){return Cl(r,n)}if(0<pc.length){Cl(pc[0],n);for(var t=1;t<pc.length;t++){var i=pc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ps!==null&&Cl(Ps,n),Ls!==null&&Cl(Ls,n),Ds!==null&&Cl(Ds,n),Tu.forEach(e),Au.forEach(e),t=0;t<xs.length;t++)i=xs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<xs.length&&(t=xs[0],t.blockedOn===null);)Fy(t),t.blockedOn===null&&xs.shift()}var Ba=os.ReactCurrentBatchConfig,Wf=!0;function uw(n,e,t,i){var r=wt,s=Ba.transition;Ba.transition=null;try{wt=1,Rg(n,e,t,i)}finally{wt=r,Ba.transition=s}}function cw(n,e,t,i){var r=wt,s=Ba.transition;Ba.transition=null;try{wt=4,Rg(n,e,t,i)}finally{wt=r,Ba.transition=s}}function Rg(n,e,t,i){if(Wf){var r=Np(n,e,t,i);if(r===null)ph(n,e,i,Xf,t),l0(n,i);else if(aw(r,n,e,t,i))i.stopPropagation();else if(l0(n,i),e&4&&-1<ow.indexOf(n)){for(;r!==null;){var s=tc(r);if(s!==null&&Ny(s),s=Np(n,e,t,i),s===null&&ph(n,e,i,Xf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else ph(n,e,i,null,t)}}var Xf=null;function Np(n,e,t,i){if(Xf=null,n=wg(i),n=yo(n),n!==null)if(e=$o(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Ty(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Xf=n,null}function ky(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ZE()){case Tg:return 1;case by:return 4;case Vf:case QE:return 16;case Py:return 536870912;default:return 16}default:return 16}}var Ms=null,bg=null,mf=null;function zy(){if(mf)return mf;var n,e=bg,t=e.length,i,r="value"in Ms?Ms.value:Ms.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return mf=r.slice(n,1<i?1-i:void 0)}function gf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function mc(){return!0}function c0(){return!1}function Di(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?mc:c0,this.isPropagationStopped=c0,this}return Wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=mc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=mc)},persist:function(){},isPersistent:mc}),e}var yl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pg=Di(yl),ec=Wt({},yl,{view:0,detail:0}),fw=Di(ec),sh,oh,Rl,Cd=Wt({},ec,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lg,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Rl&&(Rl&&n.type==="mousemove"?(sh=n.screenX-Rl.screenX,oh=n.screenY-Rl.screenY):oh=sh=0,Rl=n),sh)},movementY:function(n){return"movementY"in n?n.movementY:oh}}),f0=Di(Cd),dw=Wt({},Cd,{dataTransfer:0}),hw=Di(dw),pw=Wt({},ec,{relatedTarget:0}),ah=Di(pw),mw=Wt({},yl,{animationName:0,elapsedTime:0,pseudoElement:0}),gw=Di(mw),_w=Wt({},yl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),vw=Di(_w),xw=Wt({},yl,{data:0}),d0=Di(xw),yw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ew(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Mw[n])?!!e[n]:!1}function Lg(){return Ew}var ww=Wt({},ec,{key:function(n){if(n.key){var e=yw[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=gf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Sw[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lg,charCode:function(n){return n.type==="keypress"?gf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?gf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Tw=Di(ww),Aw=Wt({},Cd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),h0=Di(Aw),Cw=Wt({},ec,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lg}),Rw=Di(Cw),bw=Wt({},yl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pw=Di(bw),Lw=Wt({},Cd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Dw=Di(Lw),Nw=[9,13,27,32],Dg=Qr&&"CompositionEvent"in window,eu=null;Qr&&"documentMode"in document&&(eu=document.documentMode);var Iw=Qr&&"TextEvent"in window&&!eu,By=Qr&&(!Dg||eu&&8<eu&&11>=eu),p0=" ",m0=!1;function Hy(n,e){switch(n){case"keyup":return Nw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ea=!1;function Uw(n,e){switch(n){case"compositionend":return Vy(e);case"keypress":return e.which!==32?null:(m0=!0,p0);case"textInput":return n=e.data,n===p0&&m0?null:n;default:return null}}function Ow(n,e){if(Ea)return n==="compositionend"||!Dg&&Hy(n,e)?(n=zy(),mf=bg=Ms=null,Ea=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return By&&e.locale!=="ko"?null:e.data;default:return null}}var Fw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function g0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Fw[n.type]:e==="textarea"}function Gy(n,e,t,i){yy(i),e=jf(e,"onChange"),0<e.length&&(t=new Pg("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var tu=null,Ru=null;function kw(n){eS(n,0)}function Rd(n){var e=Aa(n);if(hy(e))return n}function zw(n,e){if(n==="change")return e}var Wy=!1;if(Qr){var lh;if(Qr){var uh="oninput"in document;if(!uh){var _0=document.createElement("div");_0.setAttribute("oninput","return;"),uh=typeof _0.oninput=="function"}lh=uh}else lh=!1;Wy=lh&&(!document.documentMode||9<document.documentMode)}function v0(){tu&&(tu.detachEvent("onpropertychange",Xy),Ru=tu=null)}function Xy(n){if(n.propertyName==="value"&&Rd(Ru)){var e=[];Gy(e,Ru,n,wg(n)),wy(kw,e)}}function Bw(n,e,t){n==="focusin"?(v0(),tu=e,Ru=t,tu.attachEvent("onpropertychange",Xy)):n==="focusout"&&v0()}function Hw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Rd(Ru)}function Vw(n,e){if(n==="click")return Rd(e)}function Gw(n,e){if(n==="input"||n==="change")return Rd(e)}function Ww(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var dr=typeof Object.is=="function"?Object.is:Ww;function bu(n,e){if(dr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!mp.call(e,r)||!dr(n[r],e[r]))return!1}return!0}function x0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function y0(n,e){var t=x0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=x0(t)}}function jy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?jy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Yy(){for(var n=window,e=zf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=zf(n.document)}return e}function Ng(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Xw(n){var e=Yy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&jy(t.ownerDocument.documentElement,t)){if(i!==null&&Ng(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=y0(t,s);var o=y0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var jw=Qr&&"documentMode"in document&&11>=document.documentMode,wa=null,Ip=null,nu=null,Up=!1;function S0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Up||wa==null||wa!==zf(i)||(i=wa,"selectionStart"in i&&Ng(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),nu&&bu(nu,i)||(nu=i,i=jf(Ip,"onSelect"),0<i.length&&(e=new Pg("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=wa)))}function gc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ta={animationend:gc("Animation","AnimationEnd"),animationiteration:gc("Animation","AnimationIteration"),animationstart:gc("Animation","AnimationStart"),transitionend:gc("Transition","TransitionEnd")},ch={},$y={};Qr&&($y=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function bd(n){if(ch[n])return ch[n];if(!Ta[n])return n;var e=Ta[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in $y)return ch[n]=e[t];return n}var qy=bd("animationend"),Ky=bd("animationiteration"),Zy=bd("animationstart"),Qy=bd("transitionend"),Jy=new Map,M0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ks(n,e){Jy.set(n,e),Yo(e,[n])}for(var fh=0;fh<M0.length;fh++){var dh=M0[fh],Yw=dh.toLowerCase(),$w=dh[0].toUpperCase()+dh.slice(1);Ks(Yw,"on"+$w)}Ks(qy,"onAnimationEnd");Ks(Ky,"onAnimationIteration");Ks(Zy,"onAnimationStart");Ks("dblclick","onDoubleClick");Ks("focusin","onFocus");Ks("focusout","onBlur");Ks(Qy,"onTransitionEnd");el("onMouseEnter",["mouseout","mouseover"]);el("onMouseLeave",["mouseout","mouseover"]);el("onPointerEnter",["pointerout","pointerover"]);el("onPointerLeave",["pointerout","pointerover"]);Yo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gl));function E0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,YE(i,e,void 0,n),n.currentTarget=null}function eS(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;E0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;E0(r,a,u),s=l}}}if(Hf)throw n=Pp,Hf=!1,Pp=null,n}function Dt(n,e){var t=e[Bp];t===void 0&&(t=e[Bp]=new Set);var i=n+"__bubble";t.has(i)||(tS(e,n,2,!1),t.add(i))}function hh(n,e,t){var i=0;e&&(i|=4),tS(t,n,i,e)}var _c="_reactListening"+Math.random().toString(36).slice(2);function Pu(n){if(!n[_c]){n[_c]=!0,ly.forEach(function(t){t!=="selectionchange"&&(qw.has(t)||hh(t,!1,n),hh(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[_c]||(e[_c]=!0,hh("selectionchange",!1,e))}}function tS(n,e,t,i){switch(ky(e)){case 1:var r=uw;break;case 4:r=cw;break;default:r=Rg}t=r.bind(null,e,t,n),r=void 0,!bp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function ph(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=yo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}wy(function(){var u=s,c=wg(t),d=[];e:{var f=Jy.get(n);if(f!==void 0){var p=Pg,_=n;switch(n){case"keypress":if(gf(t)===0)break e;case"keydown":case"keyup":p=Tw;break;case"focusin":_="focus",p=ah;break;case"focusout":_="blur",p=ah;break;case"beforeblur":case"afterblur":p=ah;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=f0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=hw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Rw;break;case qy:case Ky:case Zy:p=gw;break;case Qy:p=Pw;break;case"scroll":p=fw;break;case"wheel":p=Dw;break;case"copy":case"cut":case"paste":p=vw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=h0}var g=(e&4)!==0,m=!g&&n==="scroll",h=g?f!==null?f+"Capture":null:f;g=[];for(var v=u,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=wu(v,h),S!=null&&g.push(Lu(v,S,x)))),m)break;v=v.return}0<g.length&&(f=new p(f,_,null,t,c),d.push({event:f,listeners:g}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Cp&&(_=t.relatedTarget||t.fromElement)&&(yo(_)||_[Jr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?yo(_):null,_!==null&&(m=$o(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(g=f0,S="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(g=h0,S="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:Aa(p),x=_==null?f:Aa(_),f=new g(S,v+"leave",p,t,c),f.target=m,f.relatedTarget=x,S=null,yo(c)===u&&(g=new g(h,v+"enter",_,t,c),g.target=x,g.relatedTarget=m,S=g),m=S,p&&_)t:{for(g=p,h=_,v=0,x=g;x;x=Zo(x))v++;for(x=0,S=h;S;S=Zo(S))x++;for(;0<v-x;)g=Zo(g),v--;for(;0<x-v;)h=Zo(h),x--;for(;v--;){if(g===h||h!==null&&g===h.alternate)break t;g=Zo(g),h=Zo(h)}g=null}else g=null;p!==null&&w0(d,f,p,g,!1),_!==null&&m!==null&&w0(d,m,_,g,!0)}}e:{if(f=u?Aa(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=zw;else if(g0(f))if(Wy)C=Gw;else{C=Hw;var T=Bw}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Vw);if(C&&(C=C(n,u))){Gy(d,C,t,c);break e}T&&T(n,f,u),n==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Mp(f,"number",f.value)}switch(T=u?Aa(u):window,n){case"focusin":(g0(T)||T.contentEditable==="true")&&(wa=T,Ip=u,nu=null);break;case"focusout":nu=Ip=wa=null;break;case"mousedown":Up=!0;break;case"contextmenu":case"mouseup":case"dragend":Up=!1,S0(d,t,c);break;case"selectionchange":if(jw)break;case"keydown":case"keyup":S0(d,t,c)}var y;if(Dg)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ea?Hy(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(By&&t.locale!=="ko"&&(Ea||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ea&&(y=zy()):(Ms=c,bg="value"in Ms?Ms.value:Ms.textContent,Ea=!0)),T=jf(u,R),0<T.length&&(R=new d0(R,n,null,t,c),d.push({event:R,listeners:T}),y?R.data=y:(y=Vy(t),y!==null&&(R.data=y)))),(y=Iw?Uw(n,t):Ow(n,t))&&(u=jf(u,"onBeforeInput"),0<u.length&&(c=new d0("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=y))}eS(d,e)})}function Lu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function jf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=wu(n,t),s!=null&&i.unshift(Lu(n,s,r)),s=wu(n,e),s!=null&&i.push(Lu(n,s,r))),n=n.return}return i}function Zo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function w0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=wu(t,s),l!=null&&o.unshift(Lu(t,l,a))):r||(l=wu(t,s),l!=null&&o.push(Lu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Kw=/\r\n?/g,Zw=/\u0000|\uFFFD/g;function T0(n){return(typeof n=="string"?n:""+n).replace(Kw,`
`).replace(Zw,"")}function vc(n,e,t){if(e=T0(e),T0(n)!==e&&t)throw Error(de(425))}function Yf(){}var Op=null,Fp=null;function kp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zp=typeof setTimeout=="function"?setTimeout:void 0,Qw=typeof clearTimeout=="function"?clearTimeout:void 0,A0=typeof Promise=="function"?Promise:void 0,Jw=typeof queueMicrotask=="function"?queueMicrotask:typeof A0<"u"?function(n){return A0.resolve(null).then(n).catch(eT)}:zp;function eT(n){setTimeout(function(){throw n})}function mh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Cu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Cu(e)}function Ns(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function C0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Sl=Math.random().toString(36).slice(2),xr="__reactFiber$"+Sl,Du="__reactProps$"+Sl,Jr="__reactContainer$"+Sl,Bp="__reactEvents$"+Sl,tT="__reactListeners$"+Sl,nT="__reactHandles$"+Sl;function yo(n){var e=n[xr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Jr]||t[xr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=C0(n);n!==null;){if(t=n[xr])return t;n=C0(n)}return e}n=t,t=n.parentNode}return null}function tc(n){return n=n[xr]||n[Jr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Aa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(de(33))}function Pd(n){return n[Du]||null}var Hp=[],Ca=-1;function Zs(n){return{current:n}}function It(n){0>Ca||(n.current=Hp[Ca],Hp[Ca]=null,Ca--)}function Pt(n,e){Ca++,Hp[Ca]=n.current,n.current=e}var Ws={},kn=Zs(Ws),ni=Zs(!1),Fo=Ws;function tl(n,e){var t=n.type.contextTypes;if(!t)return Ws;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ii(n){return n=n.childContextTypes,n!=null}function $f(){It(ni),It(kn)}function R0(n,e,t){if(kn.current!==Ws)throw Error(de(168));Pt(kn,e),Pt(ni,t)}function nS(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,BE(n)||"Unknown",r));return Wt({},t,i)}function qf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ws,Fo=kn.current,Pt(kn,n),Pt(ni,ni.current),!0}function b0(n,e,t){var i=n.stateNode;if(!i)throw Error(de(169));t?(n=nS(n,e,Fo),i.__reactInternalMemoizedMergedChildContext=n,It(ni),It(kn),Pt(kn,n)):It(ni),Pt(ni,t)}var Br=null,Ld=!1,gh=!1;function iS(n){Br===null?Br=[n]:Br.push(n)}function iT(n){Ld=!0,iS(n)}function Qs(){if(!gh&&Br!==null){gh=!0;var n=0,e=wt;try{var t=Br;for(wt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Br=null,Ld=!1}catch(r){throw Br!==null&&(Br=Br.slice(n+1)),Ry(Tg,Qs),r}finally{wt=e,gh=!1}}return null}var Ra=[],ba=0,Kf=null,Zf=0,Oi=[],Fi=0,ko=null,Wr=1,Xr="";function co(n,e){Ra[ba++]=Zf,Ra[ba++]=Kf,Kf=n,Zf=e}function rS(n,e,t){Oi[Fi++]=Wr,Oi[Fi++]=Xr,Oi[Fi++]=ko,ko=n;var i=Wr;n=Xr;var r=32-ur(i)-1;i&=~(1<<r),t+=1;var s=32-ur(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Wr=1<<32-ur(e)+r|t<<r|i,Xr=s+n}else Wr=1<<s|t<<r|i,Xr=n}function Ig(n){n.return!==null&&(co(n,1),rS(n,1,0))}function Ug(n){for(;n===Kf;)Kf=Ra[--ba],Ra[ba]=null,Zf=Ra[--ba],Ra[ba]=null;for(;n===ko;)ko=Oi[--Fi],Oi[Fi]=null,Xr=Oi[--Fi],Oi[Fi]=null,Wr=Oi[--Fi],Oi[Fi]=null}var Ti=null,Mi=null,Ut=!1,rr=null;function sS(n,e){var t=Hi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function P0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Ti=n,Mi=Ns(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Ti=n,Mi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ko!==null?{id:Wr,overflow:Xr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Hi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Ti=n,Mi=null,!0):!1;default:return!1}}function Vp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Gp(n){if(Ut){var e=Mi;if(e){var t=e;if(!P0(n,e)){if(Vp(n))throw Error(de(418));e=Ns(t.nextSibling);var i=Ti;e&&P0(n,e)?sS(i,t):(n.flags=n.flags&-4097|2,Ut=!1,Ti=n)}}else{if(Vp(n))throw Error(de(418));n.flags=n.flags&-4097|2,Ut=!1,Ti=n}}}function L0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ti=n}function xc(n){if(n!==Ti)return!1;if(!Ut)return L0(n),Ut=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!kp(n.type,n.memoizedProps)),e&&(e=Mi)){if(Vp(n))throw oS(),Error(de(418));for(;e;)sS(n,e),e=Ns(e.nextSibling)}if(L0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(de(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Mi=Ns(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Mi=null}}else Mi=Ti?Ns(n.stateNode.nextSibling):null;return!0}function oS(){for(var n=Mi;n;)n=Ns(n.nextSibling)}function nl(){Mi=Ti=null,Ut=!1}function Og(n){rr===null?rr=[n]:rr.push(n)}var rT=os.ReactCurrentBatchConfig;function bl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(de(309));var i=t.stateNode}if(!i)throw Error(de(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(de(284));if(!t._owner)throw Error(de(290,n))}return n}function yc(n,e){throw n=Object.prototype.toString.call(e),Error(de(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function D0(n){var e=n._init;return e(n._payload)}function aS(n){function e(h,v){if(n){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Fs(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,x,S){return v===null||v.tag!==6?(v=Eh(x,h.mode,S),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,S){var C=x.type;return C===Ma?c(h,v,x.props.children,S,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_s&&D0(C)===v.type)?(S=r(v,x.props),S.ref=bl(h,v,x),S.return=h,S):(S=Ef(x.type,x.key,x.props,null,h.mode,S),S.ref=bl(h,v,x),S.return=h,S)}function u(h,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=wh(x,h.mode,S),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function c(h,v,x,S,C){return v===null||v.tag!==7?(v=Ro(x,h.mode,S,C),v.return=h,v):(v=r(v,x),v.return=h,v)}function d(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Eh(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case uc:return x=Ef(v.type,v.key,v.props,null,h.mode,x),x.ref=bl(h,null,v),x.return=h,x;case Sa:return v=wh(v,h.mode,x),v.return=h,v;case _s:var S=v._init;return d(h,S(v._payload),x)}if(Hl(v)||wl(v))return v=Ro(v,h.mode,x,null),v.return=h,v;yc(h,v)}return null}function f(h,v,x,S){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(h,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case uc:return x.key===C?l(h,v,x,S):null;case Sa:return x.key===C?u(h,v,x,S):null;case _s:return C=x._init,f(h,v,C(x._payload),S)}if(Hl(x)||wl(x))return C!==null?null:c(h,v,x,S,null);yc(h,x)}return null}function p(h,v,x,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,a(v,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case uc:return h=h.get(S.key===null?x:S.key)||null,l(v,h,S,C);case Sa:return h=h.get(S.key===null?x:S.key)||null,u(v,h,S,C);case _s:var T=S._init;return p(h,v,x,T(S._payload),C)}if(Hl(S)||wl(S))return h=h.get(x)||null,c(v,h,S,C,null);yc(v,S)}return null}function _(h,v,x,S){for(var C=null,T=null,y=v,R=v=0,E=null;y!==null&&R<x.length;R++){y.index>R?(E=y,y=null):E=y.sibling;var M=f(h,y,x[R],S);if(M===null){y===null&&(y=E);break}n&&y&&M.alternate===null&&e(h,y),v=s(M,v,R),T===null?C=M:T.sibling=M,T=M,y=E}if(R===x.length)return t(h,y),Ut&&co(h,R),C;if(y===null){for(;R<x.length;R++)y=d(h,x[R],S),y!==null&&(v=s(y,v,R),T===null?C=y:T.sibling=y,T=y);return Ut&&co(h,R),C}for(y=i(h,y);R<x.length;R++)E=p(y,h,R,x[R],S),E!==null&&(n&&E.alternate!==null&&y.delete(E.key===null?R:E.key),v=s(E,v,R),T===null?C=E:T.sibling=E,T=E);return n&&y.forEach(function(D){return e(h,D)}),Ut&&co(h,R),C}function g(h,v,x,S){var C=wl(x);if(typeof C!="function")throw Error(de(150));if(x=C.call(x),x==null)throw Error(de(151));for(var T=C=null,y=v,R=v=0,E=null,M=x.next();y!==null&&!M.done;R++,M=x.next()){y.index>R?(E=y,y=null):E=y.sibling;var D=f(h,y,M.value,S);if(D===null){y===null&&(y=E);break}n&&y&&D.alternate===null&&e(h,y),v=s(D,v,R),T===null?C=D:T.sibling=D,T=D,y=E}if(M.done)return t(h,y),Ut&&co(h,R),C;if(y===null){for(;!M.done;R++,M=x.next())M=d(h,M.value,S),M!==null&&(v=s(M,v,R),T===null?C=M:T.sibling=M,T=M);return Ut&&co(h,R),C}for(y=i(h,y);!M.done;R++,M=x.next())M=p(y,h,R,M.value,S),M!==null&&(n&&M.alternate!==null&&y.delete(M.key===null?R:M.key),v=s(M,v,R),T===null?C=M:T.sibling=M,T=M);return n&&y.forEach(function(F){return e(h,F)}),Ut&&co(h,R),C}function m(h,v,x,S){if(typeof x=="object"&&x!==null&&x.type===Ma&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case uc:e:{for(var C=x.key,T=v;T!==null;){if(T.key===C){if(C=x.type,C===Ma){if(T.tag===7){t(h,T.sibling),v=r(T,x.props.children),v.return=h,h=v;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_s&&D0(C)===T.type){t(h,T.sibling),v=r(T,x.props),v.ref=bl(h,T,x),v.return=h,h=v;break e}t(h,T);break}else e(h,T);T=T.sibling}x.type===Ma?(v=Ro(x.props.children,h.mode,S,x.key),v.return=h,h=v):(S=Ef(x.type,x.key,x.props,null,h.mode,S),S.ref=bl(h,v,x),S.return=h,h=S)}return o(h);case Sa:e:{for(T=x.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=wh(x,h.mode,S),v.return=h,h=v}return o(h);case _s:return T=x._init,m(h,v,T(x._payload),S)}if(Hl(x))return _(h,v,x,S);if(wl(x))return g(h,v,x,S);yc(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,x),v.return=h,h=v):(t(h,v),v=Eh(x,h.mode,S),v.return=h,h=v),o(h)):t(h,v)}return m}var il=aS(!0),lS=aS(!1),Qf=Zs(null),Jf=null,Pa=null,Fg=null;function kg(){Fg=Pa=Jf=null}function zg(n){var e=Qf.current;It(Qf),n._currentValue=e}function Wp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ha(n,e){Jf=n,Fg=Pa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(ti=!0),n.firstContext=null)}function Yi(n){var e=n._currentValue;if(Fg!==n)if(n={context:n,memoizedValue:e,next:null},Pa===null){if(Jf===null)throw Error(de(308));Pa=n,Jf.dependencies={lanes:0,firstContext:n}}else Pa=Pa.next=n;return e}var So=null;function Bg(n){So===null?So=[n]:So.push(n)}function uS(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Bg(e)):(t.next=r.next,r.next=t),e.interleaved=t,es(n,i)}function es(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var vs=!1;function Hg(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cS(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function qr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Is(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,mt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,es(n,t)}return r=i.interleaved,r===null?(e.next=e,Bg(i)):(e.next=r.next,r.next=e),i.interleaved=e,es(n,t)}function _f(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ag(n,t)}}function N0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function ed(n,e,t,i){var r=n.updateQueue;vs=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,g=a;switch(f=e,p=t,g.tag){case 1:if(_=g.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=Wt({},d,f);break e;case 2:vs=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Bo|=o,n.lanes=o,n.memoizedState=d}}function I0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var nc={},Cr=Zs(nc),Nu=Zs(nc),Iu=Zs(nc);function Mo(n){if(n===nc)throw Error(de(174));return n}function Vg(n,e){switch(Pt(Iu,e),Pt(Nu,n),Pt(Cr,nc),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=wp(e,n)}It(Cr),Pt(Cr,e)}function rl(){It(Cr),It(Nu),It(Iu)}function fS(n){Mo(Iu.current);var e=Mo(Cr.current),t=wp(e,n.type);e!==t&&(Pt(Nu,n),Pt(Cr,t))}function Gg(n){Nu.current===n&&(It(Cr),It(Nu))}var zt=Zs(0);function td(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _h=[];function Wg(){for(var n=0;n<_h.length;n++)_h[n]._workInProgressVersionPrimary=null;_h.length=0}var vf=os.ReactCurrentDispatcher,vh=os.ReactCurrentBatchConfig,zo=0,Gt=null,on=null,pn=null,nd=!1,iu=!1,Uu=0,sT=0;function An(){throw Error(de(321))}function Xg(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!dr(n[t],e[t]))return!1;return!0}function jg(n,e,t,i,r,s){if(zo=s,Gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vf.current=n===null||n.memoizedState===null?uT:cT,n=t(i,r),iu){s=0;do{if(iu=!1,Uu=0,25<=s)throw Error(de(301));s+=1,pn=on=null,e.updateQueue=null,vf.current=fT,n=t(i,r)}while(iu)}if(vf.current=id,e=on!==null&&on.next!==null,zo=0,pn=on=Gt=null,nd=!1,e)throw Error(de(300));return n}function Yg(){var n=Uu!==0;return Uu=0,n}function gr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Gt.memoizedState=pn=n:pn=pn.next=n,pn}function $i(){if(on===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=on.next;var e=pn===null?Gt.memoizedState:pn.next;if(e!==null)pn=e,on=n;else{if(n===null)throw Error(de(310));on=n,n={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},pn===null?Gt.memoizedState=pn=n:pn=pn.next=n}return pn}function Ou(n,e){return typeof e=="function"?e(n):e}function xh(n){var e=$i(),t=e.queue;if(t===null)throw Error(de(311));t.lastRenderedReducer=n;var i=on,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((zo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Gt.lanes|=c,Bo|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,dr(i,e.memoizedState)||(ti=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Gt.lanes|=s,Bo|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function yh(n){var e=$i(),t=e.queue;if(t===null)throw Error(de(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);dr(s,e.memoizedState)||(ti=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function dS(){}function hS(n,e){var t=Gt,i=$i(),r=e(),s=!dr(i.memoizedState,r);if(s&&(i.memoizedState=r,ti=!0),i=i.queue,$g(gS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||pn!==null&&pn.memoizedState.tag&1){if(t.flags|=2048,Fu(9,mS.bind(null,t,i,r,e),void 0,null),mn===null)throw Error(de(349));zo&30||pS(t,e,r)}return r}function pS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Gt.updateQueue,e===null?(e={lastEffect:null,stores:null},Gt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function mS(n,e,t,i){e.value=t,e.getSnapshot=i,_S(e)&&vS(n)}function gS(n,e,t){return t(function(){_S(e)&&vS(n)})}function _S(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!dr(n,t)}catch{return!0}}function vS(n){var e=es(n,1);e!==null&&cr(e,n,1,-1)}function U0(n){var e=gr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ou,lastRenderedState:n},e.queue=n,n=n.dispatch=lT.bind(null,Gt,n),[e.memoizedState,n]}function Fu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Gt.updateQueue,e===null?(e={lastEffect:null,stores:null},Gt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function xS(){return $i().memoizedState}function xf(n,e,t,i){var r=gr();Gt.flags|=n,r.memoizedState=Fu(1|e,t,void 0,i===void 0?null:i)}function Dd(n,e,t,i){var r=$i();i=i===void 0?null:i;var s=void 0;if(on!==null){var o=on.memoizedState;if(s=o.destroy,i!==null&&Xg(i,o.deps)){r.memoizedState=Fu(e,t,s,i);return}}Gt.flags|=n,r.memoizedState=Fu(1|e,t,s,i)}function O0(n,e){return xf(8390656,8,n,e)}function $g(n,e){return Dd(2048,8,n,e)}function yS(n,e){return Dd(4,2,n,e)}function SS(n,e){return Dd(4,4,n,e)}function MS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function ES(n,e,t){return t=t!=null?t.concat([n]):null,Dd(4,4,MS.bind(null,e,n),t)}function qg(){}function wS(n,e){var t=$i();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Xg(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function TS(n,e){var t=$i();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Xg(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function AS(n,e,t){return zo&21?(dr(t,e)||(t=Ly(),Gt.lanes|=t,Bo|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,ti=!0),n.memoizedState=t)}function oT(n,e){var t=wt;wt=t!==0&&4>t?t:4,n(!0);var i=vh.transition;vh.transition={};try{n(!1),e()}finally{wt=t,vh.transition=i}}function CS(){return $i().memoizedState}function aT(n,e,t){var i=Os(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},RS(n))bS(e,t);else if(t=uS(n,e,t,i),t!==null){var r=$n();cr(t,n,i,r),PS(t,e,i)}}function lT(n,e,t){var i=Os(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(RS(n))bS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,dr(a,o)){var l=e.interleaved;l===null?(r.next=r,Bg(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=uS(n,e,r,i),t!==null&&(r=$n(),cr(t,n,i,r),PS(t,e,i))}}function RS(n){var e=n.alternate;return n===Gt||e!==null&&e===Gt}function bS(n,e){iu=nd=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function PS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ag(n,t)}}var id={readContext:Yi,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},uT={readContext:Yi,useCallback:function(n,e){return gr().memoizedState=[n,e===void 0?null:e],n},useContext:Yi,useEffect:O0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,xf(4194308,4,MS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return xf(4194308,4,n,e)},useInsertionEffect:function(n,e){return xf(4,2,n,e)},useMemo:function(n,e){var t=gr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=gr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=aT.bind(null,Gt,n),[i.memoizedState,n]},useRef:function(n){var e=gr();return n={current:n},e.memoizedState=n},useState:U0,useDebugValue:qg,useDeferredValue:function(n){return gr().memoizedState=n},useTransition:function(){var n=U0(!1),e=n[0];return n=oT.bind(null,n[1]),gr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Gt,r=gr();if(Ut){if(t===void 0)throw Error(de(407));t=t()}else{if(t=e(),mn===null)throw Error(de(349));zo&30||pS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,O0(gS.bind(null,i,s,n),[n]),i.flags|=2048,Fu(9,mS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=gr(),e=mn.identifierPrefix;if(Ut){var t=Xr,i=Wr;t=(i&~(1<<32-ur(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Uu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=sT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},cT={readContext:Yi,useCallback:wS,useContext:Yi,useEffect:$g,useImperativeHandle:ES,useInsertionEffect:yS,useLayoutEffect:SS,useMemo:TS,useReducer:xh,useRef:xS,useState:function(){return xh(Ou)},useDebugValue:qg,useDeferredValue:function(n){var e=$i();return AS(e,on.memoizedState,n)},useTransition:function(){var n=xh(Ou)[0],e=$i().memoizedState;return[n,e]},useMutableSource:dS,useSyncExternalStore:hS,useId:CS,unstable_isNewReconciler:!1},fT={readContext:Yi,useCallback:wS,useContext:Yi,useEffect:$g,useImperativeHandle:ES,useInsertionEffect:yS,useLayoutEffect:SS,useMemo:TS,useReducer:yh,useRef:xS,useState:function(){return yh(Ou)},useDebugValue:qg,useDeferredValue:function(n){var e=$i();return on===null?e.memoizedState=n:AS(e,on.memoizedState,n)},useTransition:function(){var n=yh(Ou)[0],e=$i().memoizedState;return[n,e]},useMutableSource:dS,useSyncExternalStore:hS,useId:CS,unstable_isNewReconciler:!1};function tr(n,e){if(n&&n.defaultProps){e=Wt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Xp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Wt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Nd={isMounted:function(n){return(n=n._reactInternals)?$o(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=$n(),r=Os(n),s=qr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Is(n,s,r),e!==null&&(cr(e,n,r,i),_f(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=$n(),r=Os(n),s=qr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Is(n,s,r),e!==null&&(cr(e,n,r,i),_f(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=$n(),i=Os(n),r=qr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Is(n,r,i),e!==null&&(cr(e,n,i,t),_f(e,n,i))}};function F0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!bu(t,i)||!bu(r,s):!0}function LS(n,e,t){var i=!1,r=Ws,s=e.contextType;return typeof s=="object"&&s!==null?s=Yi(s):(r=ii(e)?Fo:kn.current,i=e.contextTypes,s=(i=i!=null)?tl(n,r):Ws),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nd,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function k0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Nd.enqueueReplaceState(e,e.state,null)}function jp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Hg(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Yi(s):(s=ii(e)?Fo:kn.current,r.context=tl(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Nd.enqueueReplaceState(r,r.state,null),ed(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function sl(n,e){try{var t="",i=e;do t+=zE(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Sh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Yp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var dT=typeof WeakMap=="function"?WeakMap:Map;function DS(n,e,t){t=qr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){sd||(sd=!0,im=i),Yp(n,e)},t}function NS(n,e,t){t=qr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Yp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Yp(n,e),typeof i!="function"&&(Us===null?Us=new Set([this]):Us.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function z0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new dT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=AT.bind(null,n,e,t),e.then(n,n))}function B0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function H0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=qr(-1,1),e.tag=2,Is(t,e,1))),t.lanes|=1),n)}var hT=os.ReactCurrentOwner,ti=!1;function Wn(n,e,t,i){e.child=n===null?lS(e,null,t,i):il(e,n.child,t,i)}function V0(n,e,t,i,r){t=t.render;var s=e.ref;return Ha(e,r),i=jg(n,e,t,i,s,r),t=Yg(),n!==null&&!ti?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ts(n,e,r)):(Ut&&t&&Ig(e),e.flags|=1,Wn(n,e,i,r),e.child)}function G0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!i_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,IS(n,e,s,i,r)):(n=Ef(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:bu,t(o,i)&&n.ref===e.ref)return ts(n,e,r)}return e.flags|=1,n=Fs(s,i),n.ref=e.ref,n.return=e,e.child=n}function IS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(bu(s,i)&&n.ref===e.ref)if(ti=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(ti=!0);else return e.lanes=n.lanes,ts(n,e,r)}return $p(n,e,t,i,r)}function US(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(Da,gi),gi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Pt(Da,gi),gi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Pt(Da,gi),gi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Pt(Da,gi),gi|=i;return Wn(n,e,r,t),e.child}function OS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function $p(n,e,t,i,r){var s=ii(t)?Fo:kn.current;return s=tl(e,s),Ha(e,r),t=jg(n,e,t,i,s,r),i=Yg(),n!==null&&!ti?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ts(n,e,r)):(Ut&&i&&Ig(e),e.flags|=1,Wn(n,e,t,r),e.child)}function W0(n,e,t,i,r){if(ii(t)){var s=!0;qf(e)}else s=!1;if(Ha(e,r),e.stateNode===null)yf(n,e),LS(e,t,i),jp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Yi(u):(u=ii(t)?Fo:kn.current,u=tl(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&k0(e,o,i,u),vs=!1;var f=e.memoizedState;o.state=f,ed(e,i,o,r),l=e.memoizedState,a!==i||f!==l||ni.current||vs?(typeof c=="function"&&(Xp(e,t,c,i),l=e.memoizedState),(a=vs||F0(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,cS(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:tr(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Yi(l):(l=ii(t)?Fo:kn.current,l=tl(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&k0(e,o,i,l),vs=!1,f=e.memoizedState,o.state=f,ed(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||ni.current||vs?(typeof p=="function"&&(Xp(e,t,p,i),_=e.memoizedState),(u=vs||F0(e,t,u,i,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return qp(n,e,t,i,s,r)}function qp(n,e,t,i,r,s){OS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&b0(e,t,!1),ts(n,e,s);i=e.stateNode,hT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=il(e,n.child,null,s),e.child=il(e,null,a,s)):Wn(n,e,a,s),e.memoizedState=i.state,r&&b0(e,t,!0),e.child}function FS(n){var e=n.stateNode;e.pendingContext?R0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&R0(n,e.context,!1),Vg(n,e.containerInfo)}function X0(n,e,t,i,r){return nl(),Og(r),e.flags|=256,Wn(n,e,t,i),e.child}var Kp={dehydrated:null,treeContext:null,retryLane:0};function Zp(n){return{baseLanes:n,cachePool:null,transitions:null}}function kS(n,e,t){var i=e.pendingProps,r=zt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Pt(zt,r&1),n===null)return Gp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Od(o,i,0,null),n=Ro(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Zp(t),e.memoizedState=Kp,n):Kg(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return pT(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Fs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Fs(a,s):(s=Ro(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Zp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Kp,i}return s=n.child,n=s.sibling,i=Fs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Kg(n,e){return e=Od({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Sc(n,e,t,i){return i!==null&&Og(i),il(e,n.child,null,t),n=Kg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function pT(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Sh(Error(de(422))),Sc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Od({mode:"visible",children:i.children},r,0,null),s=Ro(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&il(e,n.child,null,o),e.child.memoizedState=Zp(o),e.memoizedState=Kp,s);if(!(e.mode&1))return Sc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(de(419)),i=Sh(s,i,void 0),Sc(n,e,o,i)}if(a=(o&n.childLanes)!==0,ti||a){if(i=mn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,es(n,r),cr(i,n,r,-1))}return n_(),i=Sh(Error(de(421))),Sc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=CT.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Mi=Ns(r.nextSibling),Ti=e,Ut=!0,rr=null,n!==null&&(Oi[Fi++]=Wr,Oi[Fi++]=Xr,Oi[Fi++]=ko,Wr=n.id,Xr=n.overflow,ko=e),e=Kg(e,i.children),e.flags|=4096,e)}function j0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Wp(n.return,e,t)}function Mh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function zS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wn(n,e,i.children,t),i=zt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&j0(n,t,e);else if(n.tag===19)j0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Pt(zt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&td(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Mh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&td(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Mh(e,!0,t,null,s);break;case"together":Mh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ts(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Bo|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(de(153));if(e.child!==null){for(n=e.child,t=Fs(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Fs(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function mT(n,e,t){switch(e.tag){case 3:FS(e),nl();break;case 5:fS(e);break;case 1:ii(e.type)&&qf(e);break;case 4:Vg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Pt(Qf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Pt(zt,zt.current&1),e.flags|=128,null):t&e.child.childLanes?kS(n,e,t):(Pt(zt,zt.current&1),n=ts(n,e,t),n!==null?n.sibling:null);Pt(zt,zt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return zS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Pt(zt,zt.current),i)break;return null;case 22:case 23:return e.lanes=0,US(n,e,t)}return ts(n,e,t)}var BS,Qp,HS,VS;BS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Qp=function(){};HS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Mo(Cr.current);var s=null;switch(t){case"input":r=yp(n,r),i=yp(n,i),s=[];break;case"select":r=Wt({},r,{value:void 0}),i=Wt({},i,{value:void 0}),s=[];break;case"textarea":r=Ep(n,r),i=Ep(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Yf)}Tp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Mu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Mu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Dt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};VS=function(n,e,t,i){t!==i&&(e.flags|=4)};function Pl(n,e){if(!Ut)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Cn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function gT(n,e,t){var i=e.pendingProps;switch(Ug(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cn(e),null;case 1:return ii(e.type)&&$f(),Cn(e),null;case 3:return i=e.stateNode,rl(),It(ni),It(kn),Wg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(xc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rr!==null&&(om(rr),rr=null))),Qp(n,e),Cn(e),null;case 5:Gg(e);var r=Mo(Iu.current);if(t=e.type,n!==null&&e.stateNode!=null)HS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return Cn(e),null}if(n=Mo(Cr.current),xc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[xr]=e,i[Du]=s,n=(e.mode&1)!==0,t){case"dialog":Dt("cancel",i),Dt("close",i);break;case"iframe":case"object":case"embed":Dt("load",i);break;case"video":case"audio":for(r=0;r<Gl.length;r++)Dt(Gl[r],i);break;case"source":Dt("error",i);break;case"img":case"image":case"link":Dt("error",i),Dt("load",i);break;case"details":Dt("toggle",i);break;case"input":t0(i,s),Dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Dt("invalid",i);break;case"textarea":i0(i,s),Dt("invalid",i)}Tp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&vc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&vc(i.textContent,a,n),r=["children",""+a]):Mu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Dt("scroll",i)}switch(t){case"input":cc(i),n0(i,s,!0);break;case"textarea":cc(i),r0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Yf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=gy(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[xr]=e,n[Du]=i,BS(n,e,!1,!1),e.stateNode=n;e:{switch(o=Ap(t,i),t){case"dialog":Dt("cancel",n),Dt("close",n),r=i;break;case"iframe":case"object":case"embed":Dt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Gl.length;r++)Dt(Gl[r],n);r=i;break;case"source":Dt("error",n),r=i;break;case"img":case"image":case"link":Dt("error",n),Dt("load",n),r=i;break;case"details":Dt("toggle",n),r=i;break;case"input":t0(n,i),r=yp(n,i),Dt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Wt({},i,{value:void 0}),Dt("invalid",n);break;case"textarea":i0(n,i),r=Ep(n,i),Dt("invalid",n);break;default:r=i}Tp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?xy(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_y(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Eu(n,l):typeof l=="number"&&Eu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Mu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Dt("scroll",n):l!=null&&yg(n,s,l,o))}switch(t){case"input":cc(n),n0(n,i,!1);break;case"textarea":cc(n),r0(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Gs(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Fa(n,!!i.multiple,s,!1):i.defaultValue!=null&&Fa(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Yf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Cn(e),null;case 6:if(n&&e.stateNode!=null)VS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(t=Mo(Iu.current),Mo(Cr.current),xc(e)){if(i=e.stateNode,t=e.memoizedProps,i[xr]=e,(s=i.nodeValue!==t)&&(n=Ti,n!==null))switch(n.tag){case 3:vc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&vc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[xr]=e,e.stateNode=i}return Cn(e),null;case 13:if(It(zt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ut&&Mi!==null&&e.mode&1&&!(e.flags&128))oS(),nl(),e.flags|=98560,s=!1;else if(s=xc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(de(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(de(317));s[xr]=e}else nl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Cn(e),s=!1}else rr!==null&&(om(rr),rr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||zt.current&1?ln===0&&(ln=3):n_())),e.updateQueue!==null&&(e.flags|=4),Cn(e),null);case 4:return rl(),Qp(n,e),n===null&&Pu(e.stateNode.containerInfo),Cn(e),null;case 10:return zg(e.type._context),Cn(e),null;case 17:return ii(e.type)&&$f(),Cn(e),null;case 19:if(It(zt),s=e.memoizedState,s===null)return Cn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Pl(s,!1);else{if(ln!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=td(n),o!==null){for(e.flags|=128,Pl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Pt(zt,zt.current&1|2),e.child}n=n.sibling}s.tail!==null&&$t()>ol&&(e.flags|=128,i=!0,Pl(s,!1),e.lanes=4194304)}else{if(!i)if(n=td(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Pl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ut)return Cn(e),null}else 2*$t()-s.renderingStartTime>ol&&t!==1073741824&&(e.flags|=128,i=!0,Pl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=$t(),e.sibling=null,t=zt.current,Pt(zt,i?t&1|2:t&1),e):(Cn(e),null);case 22:case 23:return t_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gi&1073741824&&(Cn(e),e.subtreeFlags&6&&(e.flags|=8192)):Cn(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function _T(n,e){switch(Ug(e),e.tag){case 1:return ii(e.type)&&$f(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return rl(),It(ni),It(kn),Wg(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Gg(e),null;case 13:if(It(zt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(de(340));nl()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return It(zt),null;case 4:return rl(),null;case 10:return zg(e.type._context),null;case 22:case 23:return t_(),null;case 24:return null;default:return null}}var Mc=!1,Dn=!1,vT=typeof WeakSet=="function"?WeakSet:Set,Le=null;function La(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Xt(n,e,i)}else t.current=null}function Jp(n,e,t){try{t()}catch(i){Xt(n,e,i)}}var Y0=!1;function xT(n,e){if(Op=Wf,n=Yy(),Ng(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fp={focusedElem:n,selectionRange:t},Wf=!1,Le=e;Le!==null;)if(e=Le,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Le=n;else for(;Le!==null;){e=Le;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,m=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:tr(e.type,g),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(S){Xt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Le=n;break}Le=e.return}return _=Y0,Y0=!1,_}function ru(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Jp(e,t,s)}r=r.next}while(r!==i)}}function Id(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function em(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function GS(n){var e=n.alternate;e!==null&&(n.alternate=null,GS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[xr],delete e[Du],delete e[Bp],delete e[tT],delete e[nT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function WS(n){return n.tag===5||n.tag===3||n.tag===4}function $0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||WS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function tm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Yf));else if(i!==4&&(n=n.child,n!==null))for(tm(n,e,t),n=n.sibling;n!==null;)tm(n,e,t),n=n.sibling}function nm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(nm(n,e,t),n=n.sibling;n!==null;)nm(n,e,t),n=n.sibling}var yn=null,nr=!1;function us(n,e,t){for(t=t.child;t!==null;)XS(n,e,t),t=t.sibling}function XS(n,e,t){if(Ar&&typeof Ar.onCommitFiberUnmount=="function")try{Ar.onCommitFiberUnmount(Ad,t)}catch{}switch(t.tag){case 5:Dn||La(t,e);case 6:var i=yn,r=nr;yn=null,us(n,e,t),yn=i,nr=r,yn!==null&&(nr?(n=yn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):yn.removeChild(t.stateNode));break;case 18:yn!==null&&(nr?(n=yn,t=t.stateNode,n.nodeType===8?mh(n.parentNode,t):n.nodeType===1&&mh(n,t),Cu(n)):mh(yn,t.stateNode));break;case 4:i=yn,r=nr,yn=t.stateNode.containerInfo,nr=!0,us(n,e,t),yn=i,nr=r;break;case 0:case 11:case 14:case 15:if(!Dn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jp(t,e,o),r=r.next}while(r!==i)}us(n,e,t);break;case 1:if(!Dn&&(La(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Xt(t,e,a)}us(n,e,t);break;case 21:us(n,e,t);break;case 22:t.mode&1?(Dn=(i=Dn)||t.memoizedState!==null,us(n,e,t),Dn=i):us(n,e,t);break;default:us(n,e,t)}}function q0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new vT),e.forEach(function(i){var r=RT.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Ki(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:yn=a.stateNode,nr=!1;break e;case 3:yn=a.stateNode.containerInfo,nr=!0;break e;case 4:yn=a.stateNode.containerInfo,nr=!0;break e}a=a.return}if(yn===null)throw Error(de(160));XS(s,o,r),yn=null,nr=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Xt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jS(e,n),e=e.sibling}function jS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ki(e,n),hr(n),i&4){try{ru(3,n,n.return),Id(3,n)}catch(g){Xt(n,n.return,g)}try{ru(5,n,n.return)}catch(g){Xt(n,n.return,g)}}break;case 1:Ki(e,n),hr(n),i&512&&t!==null&&La(t,t.return);break;case 5:if(Ki(e,n),hr(n),i&512&&t!==null&&La(t,t.return),n.flags&32){var r=n.stateNode;try{Eu(r,"")}catch(g){Xt(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&py(r,s),Ap(a,o);var u=Ap(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?xy(r,d):c==="dangerouslySetInnerHTML"?_y(r,d):c==="children"?Eu(r,d):yg(r,c,d,u)}switch(a){case"input":Sp(r,s);break;case"textarea":my(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Fa(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Fa(r,!!s.multiple,s.defaultValue,!0):Fa(r,!!s.multiple,s.multiple?[]:"",!1))}r[Du]=s}catch(g){Xt(n,n.return,g)}}break;case 6:if(Ki(e,n),hr(n),i&4){if(n.stateNode===null)throw Error(de(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){Xt(n,n.return,g)}}break;case 3:if(Ki(e,n),hr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Cu(e.containerInfo)}catch(g){Xt(n,n.return,g)}break;case 4:Ki(e,n),hr(n);break;case 13:Ki(e,n),hr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Jg=$t())),i&4&&q0(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Dn=(u=Dn)||c,Ki(e,n),Dn=u):Ki(e,n),hr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Le=n,c=n.child;c!==null;){for(d=Le=c;Le!==null;){switch(f=Le,p=f.child,f.tag){case 0:case 11:case 14:case 15:ru(4,f,f.return);break;case 1:La(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){Xt(i,t,g)}}break;case 5:La(f,f.return);break;case 22:if(f.memoizedState!==null){Z0(d);continue}}p!==null?(p.return=f,Le=p):Z0(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=vy("display",o))}catch(g){Xt(n,n.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){Xt(n,n.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ki(e,n),hr(n),i&4&&q0(n);break;case 21:break;default:Ki(e,n),hr(n)}}function hr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(WS(t)){var i=t;break e}t=t.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Eu(r,""),i.flags&=-33);var s=$0(n);nm(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=$0(n);tm(n,a,o);break;default:throw Error(de(161))}}catch(l){Xt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function yT(n,e,t){Le=n,YS(n)}function YS(n,e,t){for(var i=(n.mode&1)!==0;Le!==null;){var r=Le,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Mc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Dn;a=Mc;var u=Dn;if(Mc=o,(Dn=l)&&!u)for(Le=r;Le!==null;)o=Le,l=o.child,o.tag===22&&o.memoizedState!==null?Q0(r):l!==null?(l.return=o,Le=l):Q0(r);for(;s!==null;)Le=s,YS(s),s=s.sibling;Le=r,Mc=a,Dn=u}K0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Le=s):K0(n)}}function K0(n){for(;Le!==null;){var e=Le;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Dn||Id(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Dn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:tr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&I0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}I0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Cu(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}Dn||e.flags&512&&em(e)}catch(f){Xt(e,e.return,f)}}if(e===n){Le=null;break}if(t=e.sibling,t!==null){t.return=e.return,Le=t;break}Le=e.return}}function Z0(n){for(;Le!==null;){var e=Le;if(e===n){Le=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Le=t;break}Le=e.return}}function Q0(n){for(;Le!==null;){var e=Le;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Id(4,e)}catch(l){Xt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Xt(e,r,l)}}var s=e.return;try{em(e)}catch(l){Xt(e,s,l)}break;case 5:var o=e.return;try{em(e)}catch(l){Xt(e,o,l)}}}catch(l){Xt(e,e.return,l)}if(e===n){Le=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Le=a;break}Le=e.return}}var ST=Math.ceil,rd=os.ReactCurrentDispatcher,Zg=os.ReactCurrentOwner,Xi=os.ReactCurrentBatchConfig,mt=0,mn=null,en=null,En=0,gi=0,Da=Zs(0),ln=0,ku=null,Bo=0,Ud=0,Qg=0,su=null,Qn=null,Jg=0,ol=1/0,kr=null,sd=!1,im=null,Us=null,Ec=!1,Es=null,od=0,ou=0,rm=null,Sf=-1,Mf=0;function $n(){return mt&6?$t():Sf!==-1?Sf:Sf=$t()}function Os(n){return n.mode&1?mt&2&&En!==0?En&-En:rT.transition!==null?(Mf===0&&(Mf=Ly()),Mf):(n=wt,n!==0||(n=window.event,n=n===void 0?16:ky(n.type)),n):1}function cr(n,e,t,i){if(50<ou)throw ou=0,rm=null,Error(de(185));Ju(n,t,i),(!(mt&2)||n!==mn)&&(n===mn&&(!(mt&2)&&(Ud|=t),ln===4&&ys(n,En)),ri(n,i),t===1&&mt===0&&!(e.mode&1)&&(ol=$t()+500,Ld&&Qs()))}function ri(n,e){var t=n.callbackNode;rw(n,e);var i=Gf(n,n===mn?En:0);if(i===0)t!==null&&a0(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&a0(t),e===1)n.tag===0?iT(J0.bind(null,n)):iS(J0.bind(null,n)),Jw(function(){!(mt&6)&&Qs()}),t=null;else{switch(Dy(i)){case 1:t=Tg;break;case 4:t=by;break;case 16:t=Vf;break;case 536870912:t=Py;break;default:t=Vf}t=tM(t,$S.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function $S(n,e){if(Sf=-1,Mf=0,mt&6)throw Error(de(327));var t=n.callbackNode;if(Va()&&n.callbackNode!==t)return null;var i=Gf(n,n===mn?En:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=ad(n,i);else{e=i;var r=mt;mt|=2;var s=KS();(mn!==n||En!==e)&&(kr=null,ol=$t()+500,Co(n,e));do try{wT();break}catch(a){qS(n,a)}while(!0);kg(),rd.current=s,mt=r,en!==null?e=0:(mn=null,En=0,e=ln)}if(e!==0){if(e===2&&(r=Lp(n),r!==0&&(i=r,e=sm(n,r))),e===1)throw t=ku,Co(n,0),ys(n,i),ri(n,$t()),t;if(e===6)ys(n,i);else{if(r=n.current.alternate,!(i&30)&&!MT(r)&&(e=ad(n,i),e===2&&(s=Lp(n),s!==0&&(i=s,e=sm(n,s))),e===1))throw t=ku,Co(n,0),ys(n,i),ri(n,$t()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:fo(n,Qn,kr);break;case 3:if(ys(n,i),(i&130023424)===i&&(e=Jg+500-$t(),10<e)){if(Gf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){$n(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=zp(fo.bind(null,n,Qn,kr),e);break}fo(n,Qn,kr);break;case 4:if(ys(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ur(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=$t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ST(i/1960))-i,10<i){n.timeoutHandle=zp(fo.bind(null,n,Qn,kr),i);break}fo(n,Qn,kr);break;case 5:fo(n,Qn,kr);break;default:throw Error(de(329))}}}return ri(n,$t()),n.callbackNode===t?$S.bind(null,n):null}function sm(n,e){var t=su;return n.current.memoizedState.isDehydrated&&(Co(n,e).flags|=256),n=ad(n,e),n!==2&&(e=Qn,Qn=t,e!==null&&om(e)),n}function om(n){Qn===null?Qn=n:Qn.push.apply(Qn,n)}function MT(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!dr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ys(n,e){for(e&=~Qg,e&=~Ud,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ur(e),i=1<<t;n[t]=-1,e&=~i}}function J0(n){if(mt&6)throw Error(de(327));Va();var e=Gf(n,0);if(!(e&1))return ri(n,$t()),null;var t=ad(n,e);if(n.tag!==0&&t===2){var i=Lp(n);i!==0&&(e=i,t=sm(n,i))}if(t===1)throw t=ku,Co(n,0),ys(n,e),ri(n,$t()),t;if(t===6)throw Error(de(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,fo(n,Qn,kr),ri(n,$t()),null}function e_(n,e){var t=mt;mt|=1;try{return n(e)}finally{mt=t,mt===0&&(ol=$t()+500,Ld&&Qs())}}function Ho(n){Es!==null&&Es.tag===0&&!(mt&6)&&Va();var e=mt;mt|=1;var t=Xi.transition,i=wt;try{if(Xi.transition=null,wt=1,n)return n()}finally{wt=i,Xi.transition=t,mt=e,!(mt&6)&&Qs()}}function t_(){gi=Da.current,It(Da)}function Co(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Qw(t)),en!==null)for(t=en.return;t!==null;){var i=t;switch(Ug(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&$f();break;case 3:rl(),It(ni),It(kn),Wg();break;case 5:Gg(i);break;case 4:rl();break;case 13:It(zt);break;case 19:It(zt);break;case 10:zg(i.type._context);break;case 22:case 23:t_()}t=t.return}if(mn=n,en=n=Fs(n.current,null),En=gi=e,ln=0,ku=null,Qg=Ud=Bo=0,Qn=su=null,So!==null){for(e=0;e<So.length;e++)if(t=So[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}So=null}return n}function qS(n,e){do{var t=en;try{if(kg(),vf.current=id,nd){for(var i=Gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}nd=!1}if(zo=0,pn=on=Gt=null,iu=!1,Uu=0,Zg.current=null,t===null||t.return===null){ln=1,ku=e,en=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=En,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=B0(o);if(p!==null){p.flags&=-257,H0(p,o,a,s,e),p.mode&1&&z0(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){z0(s,u,e),n_();break e}l=Error(de(426))}}else if(Ut&&a.mode&1){var m=B0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),H0(m,o,a,s,e),Og(sl(l,a));break e}}s=l=sl(l,a),ln!==4&&(ln=2),su===null?su=[s]:su.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=DS(s,l,e);N0(s,h);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Us===null||!Us.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=NS(s,a,e);N0(s,S);break e}}s=s.return}while(s!==null)}QS(t)}catch(C){e=C,en===t&&t!==null&&(en=t=t.return);continue}break}while(!0)}function KS(){var n=rd.current;return rd.current=id,n===null?id:n}function n_(){(ln===0||ln===3||ln===2)&&(ln=4),mn===null||!(Bo&268435455)&&!(Ud&268435455)||ys(mn,En)}function ad(n,e){var t=mt;mt|=2;var i=KS();(mn!==n||En!==e)&&(kr=null,Co(n,e));do try{ET();break}catch(r){qS(n,r)}while(!0);if(kg(),mt=t,rd.current=i,en!==null)throw Error(de(261));return mn=null,En=0,ln}function ET(){for(;en!==null;)ZS(en)}function wT(){for(;en!==null&&!qE();)ZS(en)}function ZS(n){var e=eM(n.alternate,n,gi);n.memoizedProps=n.pendingProps,e===null?QS(n):en=e,Zg.current=null}function QS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=_T(t,e),t!==null){t.flags&=32767,en=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ln=6,en=null;return}}else if(t=gT(t,e,gi),t!==null){en=t;return}if(e=e.sibling,e!==null){en=e;return}en=e=n}while(e!==null);ln===0&&(ln=5)}function fo(n,e,t){var i=wt,r=Xi.transition;try{Xi.transition=null,wt=1,TT(n,e,t,i)}finally{Xi.transition=r,wt=i}return null}function TT(n,e,t,i){do Va();while(Es!==null);if(mt&6)throw Error(de(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(de(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(sw(n,s),n===mn&&(en=mn=null,En=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ec||(Ec=!0,tM(Vf,function(){return Va(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Xi.transition,Xi.transition=null;var o=wt;wt=1;var a=mt;mt|=4,Zg.current=null,xT(n,t),jS(t,n),Xw(Fp),Wf=!!Op,Fp=Op=null,n.current=t,yT(t),KE(),mt=a,wt=o,Xi.transition=s}else n.current=t;if(Ec&&(Ec=!1,Es=n,od=r),s=n.pendingLanes,s===0&&(Us=null),JE(t.stateNode),ri(n,$t()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(sd)throw sd=!1,n=im,im=null,n;return od&1&&n.tag!==0&&Va(),s=n.pendingLanes,s&1?n===rm?ou++:(ou=0,rm=n):ou=0,Qs(),null}function Va(){if(Es!==null){var n=Dy(od),e=Xi.transition,t=wt;try{if(Xi.transition=null,wt=16>n?16:n,Es===null)var i=!1;else{if(n=Es,Es=null,od=0,mt&6)throw Error(de(331));var r=mt;for(mt|=4,Le=n.current;Le!==null;){var s=Le,o=s.child;if(Le.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Le=u;Le!==null;){var c=Le;switch(c.tag){case 0:case 11:case 15:ru(8,c,s)}var d=c.child;if(d!==null)d.return=c,Le=d;else for(;Le!==null;){c=Le;var f=c.sibling,p=c.return;if(GS(c),c===u){Le=null;break}if(f!==null){f.return=p,Le=f;break}Le=p}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Le=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Le=o;else e:for(;Le!==null;){if(s=Le,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ru(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Le=h;break e}Le=s.return}}var v=n.current;for(Le=v;Le!==null;){o=Le;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Le=x;else e:for(o=v;Le!==null;){if(a=Le,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Id(9,a)}}catch(C){Xt(a,a.return,C)}if(a===o){Le=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Le=S;break e}Le=a.return}}if(mt=r,Qs(),Ar&&typeof Ar.onPostCommitFiberRoot=="function")try{Ar.onPostCommitFiberRoot(Ad,n)}catch{}i=!0}return i}finally{wt=t,Xi.transition=e}}return!1}function ev(n,e,t){e=sl(t,e),e=DS(n,e,1),n=Is(n,e,1),e=$n(),n!==null&&(Ju(n,1,e),ri(n,e))}function Xt(n,e,t){if(n.tag===3)ev(n,n,t);else for(;e!==null;){if(e.tag===3){ev(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Us===null||!Us.has(i))){n=sl(t,n),n=NS(e,n,1),e=Is(e,n,1),n=$n(),e!==null&&(Ju(e,1,n),ri(e,n));break}}e=e.return}}function AT(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=$n(),n.pingedLanes|=n.suspendedLanes&t,mn===n&&(En&t)===t&&(ln===4||ln===3&&(En&130023424)===En&&500>$t()-Jg?Co(n,0):Qg|=t),ri(n,e)}function JS(n,e){e===0&&(n.mode&1?(e=hc,hc<<=1,!(hc&130023424)&&(hc=4194304)):e=1);var t=$n();n=es(n,e),n!==null&&(Ju(n,e,t),ri(n,t))}function CT(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),JS(n,t)}function RT(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),JS(n,t)}var eM;eM=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||ni.current)ti=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return ti=!1,mT(n,e,t);ti=!!(n.flags&131072)}else ti=!1,Ut&&e.flags&1048576&&rS(e,Zf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yf(n,e),n=e.pendingProps;var r=tl(e,kn.current);Ha(e,t),r=jg(null,e,i,n,r,t);var s=Yg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ii(i)?(s=!0,qf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Hg(e),r.updater=Nd,e.stateNode=r,r._reactInternals=e,jp(e,i,n,t),e=qp(null,e,i,!0,s,t)):(e.tag=0,Ut&&s&&Ig(e),Wn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(yf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=PT(i),n=tr(i,n),r){case 0:e=$p(null,e,i,n,t);break e;case 1:e=W0(null,e,i,n,t);break e;case 11:e=V0(null,e,i,n,t);break e;case 14:e=G0(null,e,i,tr(i.type,n),t);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:tr(i,r),$p(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:tr(i,r),W0(n,e,i,r,t);case 3:e:{if(FS(e),n===null)throw Error(de(387));i=e.pendingProps,s=e.memoizedState,r=s.element,cS(n,e),ed(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=sl(Error(de(423)),e),e=X0(n,e,i,t,r);break e}else if(i!==r){r=sl(Error(de(424)),e),e=X0(n,e,i,t,r);break e}else for(Mi=Ns(e.stateNode.containerInfo.firstChild),Ti=e,Ut=!0,rr=null,t=lS(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(nl(),i===r){e=ts(n,e,t);break e}Wn(n,e,i,t)}e=e.child}return e;case 5:return fS(e),n===null&&Gp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,kp(i,r)?o=null:s!==null&&kp(i,s)&&(e.flags|=32),OS(n,e),Wn(n,e,o,t),e.child;case 6:return n===null&&Gp(e),null;case 13:return kS(n,e,t);case 4:return Vg(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=il(e,null,i,t):Wn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:tr(i,r),V0(n,e,i,r,t);case 7:return Wn(n,e,e.pendingProps,t),e.child;case 8:return Wn(n,e,e.pendingProps.children,t),e.child;case 12:return Wn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Pt(Qf,i._currentValue),i._currentValue=o,s!==null)if(dr(s.value,o)){if(s.children===r.children&&!ni.current){e=ts(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=qr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Wp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(de(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Wp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ha(e,t),r=Yi(r),i=i(r),e.flags|=1,Wn(n,e,i,t),e.child;case 14:return i=e.type,r=tr(i,e.pendingProps),r=tr(i.type,r),G0(n,e,i,r,t);case 15:return IS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:tr(i,r),yf(n,e),e.tag=1,ii(i)?(n=!0,qf(e)):n=!1,Ha(e,t),LS(e,i,r),jp(e,i,r,t),qp(null,e,i,!0,n,t);case 19:return zS(n,e,t);case 22:return US(n,e,t)}throw Error(de(156,e.tag))};function tM(n,e){return Ry(n,e)}function bT(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hi(n,e,t,i){return new bT(n,e,t,i)}function i_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function PT(n){if(typeof n=="function")return i_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Mg)return 11;if(n===Eg)return 14}return 2}function Fs(n,e){var t=n.alternate;return t===null?(t=Hi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ef(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")i_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ma:return Ro(t.children,r,s,e);case Sg:o=8,r|=8;break;case gp:return n=Hi(12,t,e,r|2),n.elementType=gp,n.lanes=s,n;case _p:return n=Hi(13,t,e,r),n.elementType=_p,n.lanes=s,n;case vp:return n=Hi(19,t,e,r),n.elementType=vp,n.lanes=s,n;case fy:return Od(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case uy:o=10;break e;case cy:o=9;break e;case Mg:o=11;break e;case Eg:o=14;break e;case _s:o=16,i=null;break e}throw Error(de(130,n==null?n:typeof n,""))}return e=Hi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Ro(n,e,t,i){return n=Hi(7,n,i,e),n.lanes=t,n}function Od(n,e,t,i){return n=Hi(22,n,i,e),n.elementType=fy,n.lanes=t,n.stateNode={isHidden:!1},n}function Eh(n,e,t){return n=Hi(6,n,null,e),n.lanes=t,n}function wh(n,e,t){return e=Hi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function LT(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rh(0),this.expirationTimes=rh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rh(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function r_(n,e,t,i,r,s,o,a,l){return n=new LT(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hg(s),n}function DT(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function nM(n){if(!n)return Ws;n=n._reactInternals;e:{if($o(n)!==n||n.tag!==1)throw Error(de(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ii(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(n.tag===1){var t=n.type;if(ii(t))return nS(n,t,e)}return e}function iM(n,e,t,i,r,s,o,a,l){return n=r_(t,i,!0,n,r,s,o,a,l),n.context=nM(null),t=n.current,i=$n(),r=Os(t),s=qr(i,r),s.callback=e??null,Is(t,s,r),n.current.lanes=r,Ju(n,r,i),ri(n,i),n}function Fd(n,e,t,i){var r=e.current,s=$n(),o=Os(r);return t=nM(t),e.context===null?e.context=t:e.pendingContext=t,e=qr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Is(r,e,o),n!==null&&(cr(n,r,o,s),_f(n,r,o)),o}function ld(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function tv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function s_(n,e){tv(n,e),(n=n.alternate)&&tv(n,e)}function NT(){return null}var rM=typeof reportError=="function"?reportError:function(n){console.error(n)};function o_(n){this._internalRoot=n}kd.prototype.render=o_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(de(409));Fd(n,e,null,null)};kd.prototype.unmount=o_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ho(function(){Fd(null,n,null,null)}),e[Jr]=null}};function kd(n){this._internalRoot=n}kd.prototype.unstable_scheduleHydration=function(n){if(n){var e=Uy();n={blockedOn:null,target:n,priority:e};for(var t=0;t<xs.length&&e!==0&&e<xs[t].priority;t++);xs.splice(t,0,n),t===0&&Fy(n)}};function a_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function zd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function nv(){}function IT(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ld(o);s.call(u)}}var o=iM(e,i,n,0,null,!1,!1,"",nv);return n._reactRootContainer=o,n[Jr]=o.current,Pu(n.nodeType===8?n.parentNode:n),Ho(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=ld(l);a.call(u)}}var l=r_(n,0,!1,null,null,!1,!1,"",nv);return n._reactRootContainer=l,n[Jr]=l.current,Pu(n.nodeType===8?n.parentNode:n),Ho(function(){Fd(e,l,t,i)}),l}function Bd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ld(o);a.call(l)}}Fd(e,o,n,r)}else o=IT(t,e,n,r,i);return ld(o)}Ny=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Vl(e.pendingLanes);t!==0&&(Ag(e,t|1),ri(e,$t()),!(mt&6)&&(ol=$t()+500,Qs()))}break;case 13:Ho(function(){var i=es(n,1);if(i!==null){var r=$n();cr(i,n,1,r)}}),s_(n,1)}};Cg=function(n){if(n.tag===13){var e=es(n,134217728);if(e!==null){var t=$n();cr(e,n,134217728,t)}s_(n,134217728)}};Iy=function(n){if(n.tag===13){var e=Os(n),t=es(n,e);if(t!==null){var i=$n();cr(t,n,e,i)}s_(n,e)}};Uy=function(){return wt};Oy=function(n,e){var t=wt;try{return wt=n,e()}finally{wt=t}};Rp=function(n,e,t){switch(e){case"input":if(Sp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Pd(i);if(!r)throw Error(de(90));hy(i),Sp(i,r)}}}break;case"textarea":my(n,t);break;case"select":e=t.value,e!=null&&Fa(n,!!t.multiple,e,!1)}};My=e_;Ey=Ho;var UT={usingClientEntryPoint:!1,Events:[tc,Aa,Pd,yy,Sy,e_]},Ll={findFiberByHostInstance:yo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},OT={bundleType:Ll.bundleType,version:Ll.version,rendererPackageName:Ll.rendererPackageName,rendererConfig:Ll.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:os.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ay(n),n===null?null:n.stateNode},findFiberByHostInstance:Ll.findFiberByHostInstance||NT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wc.isDisabled&&wc.supportsFiber)try{Ad=wc.inject(OT),Ar=wc}catch{}}Li.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UT;Li.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a_(e))throw Error(de(200));return DT(n,e,null,t)};Li.createRoot=function(n,e){if(!a_(n))throw Error(de(299));var t=!1,i="",r=rM;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=r_(n,1,!1,null,null,t,!1,i,r),n[Jr]=e.current,Pu(n.nodeType===8?n.parentNode:n),new o_(e)};Li.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(de(188)):(n=Object.keys(n).join(","),Error(de(268,n)));return n=Ay(e),n=n===null?null:n.stateNode,n};Li.flushSync=function(n){return Ho(n)};Li.hydrate=function(n,e,t){if(!zd(e))throw Error(de(200));return Bd(null,n,e,!0,t)};Li.hydrateRoot=function(n,e,t){if(!a_(n))throw Error(de(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=rM;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=iM(e,null,n,1,t??null,r,!1,s,o),n[Jr]=e.current,Pu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new kd(e)};Li.render=function(n,e,t){if(!zd(e))throw Error(de(200));return Bd(null,n,e,!1,t)};Li.unmountComponentAtNode=function(n){if(!zd(n))throw Error(de(40));return n._reactRootContainer?(Ho(function(){Bd(null,null,n,!1,function(){n._reactRootContainer=null,n[Jr]=null})}),!0):!1};Li.unstable_batchedUpdates=e_;Li.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!zd(t))throw Error(de(200));if(n==null||n._reactInternals===void 0)throw Error(de(38));return Bd(n,e,t,!1,i)};Li.version="18.3.1-next-f1338f8080-20240426";function sM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sM)}catch(n){console.error(n)}}sM(),sy.exports=Li;var FT=sy.exports,oM,iv=FT;oM=iv.createRoot,iv.hydrateRoot;const aM=je.createContext(null),Th="/TANTRAVEDA/",au=Th.endsWith("/")?Th:`${Th}/`;function rv(n){let e=n||"/";return window.location.hash&&window.location.hash.startsWith("#/")?e=window.location.hash.slice(1):au!=="/"&&e.startsWith(au)&&(e=e.slice(au.length-1)),e.length>1&&e.endsWith("/")&&(e=e.slice(0,-1)),e||"/"}function kT(n){const e=n.startsWith("/")?n:`/${n}`;return`${au}#${e}`}function zT({children:n}){const[e,t]=je.useState(()=>rv(window.location.pathname));je.useEffect(()=>{const r=()=>{const s=rv(window.location.pathname);t(s),window.scrollTo(0,0)};return window.addEventListener("hashchange",r),r(),()=>window.removeEventListener("hashchange",r)},[]);const i=je.useCallback((r,s={})=>{const o=r.startsWith("/")?r:`/${r}`,a=`#${o}`;s.replace?window.location.replace(a):window.location.hash=a,t(o),s.preventScrollReset||window.scrollTo({top:0,behavior:"instant"})},[]);return I.jsx(aM.Provider,{value:{currentPath:e,navigate:i,baseUrl:au},children:n})}function Hd(){const n=je.useContext(aM);if(!n)throw new Error("useRouter must be used within a RouterProvider");return n}function lM(){const{navigate:n}=Hd();return n}function sv({to:n,children:e,className:t="",style:i={},onClick:r,...s}){const{navigate:o,currentPath:a}=Hd(),l=a===n,u=c=>{c.preventDefault(),r&&r(c),o(n)};return I.jsx("a",{href:kT(n),onClick:u,className:`${t} ${l?"active":""}`.trim(),style:i,...s,children:e})}function BT(){const{currentPath:n,navigate:e}=Hd(),t=n==="/",i=o=>{o.preventDefault(),e("/")},r=(o,a)=>{t||(o.preventDefault(),e("/"),setTimeout(()=>{const l=document.querySelector(a);l&&l.scrollIntoView({behavior:"smooth"})},100))},s=o=>{o.preventDefault(),e("/start")};return I.jsxs("nav",{children:[I.jsx("div",{className:"logo",onClick:i,style:{cursor:"pointer"},role:"button",tabIndex:0,children:"T A N T R A V E D A"}),I.jsxs("div",{className:"nav-links",children:[I.jsx("a",{href:"#hero",onClick:o=>r(o,"#hero"),children:"Product"}),I.jsx("a",{href:"#convergence",onClick:o=>r(o,"#convergence"),children:"Experiments"}),I.jsx("a",{href:"#distortion",onClick:o=>r(o,"#distortion"),children:"System"}),I.jsx("a",{href:"#final",onClick:o=>r(o,"#final"),children:"About"})]}),I.jsx("a",{href:"#start",className:`cta-button ${n.startsWith("/start")?"active":""}`,onClick:s,children:"Get Started"})]})}const am=new Set;let ov=!1;function HT(){if(ov)return;ov=!0;const n=()=>{const e=window.innerHeight||document.documentElement.clientHeight;for(const t of am)!t.el||!t.el.isConnected||t.update(e);requestAnimationFrame(n)};requestAnimationFrame(n)}function VT(n,e,t){return Math.max(e,Math.min(t,n))}function GT(n){const e=VT(n,0,1);return e*e*(3-2*e)}function WT(n){if(n.dataset.linesLocked==="true")return;if(n.dataset.linesLocked="true",n.querySelector("br")){n.style.whiteSpace="nowrap";return}const e=n.innerText;if(!e||e.trim()==="")return;const t=e.split(" ");n.innerHTML="";const i=[];t.forEach((a,l)=>{const u=document.createElement("span");u.textContent=a+(l<t.length-1?" ":""),n.appendChild(u),i.push(u)});let r=-1;const s=[];let o=[];i.forEach(a=>{r===-1?(r=a.offsetTop,o.push(a)):a.offsetTop>r+5?(s.push(o),o=[a],r=a.offsetTop):o.push(a)}),s.push(o),n.innerHTML="",s.forEach((a,l)=>{const u=document.createElement("span");u.style.whiteSpace="nowrap",a.forEach(c=>u.appendChild(c)),n.appendChild(u),l<s.length-1&&n.appendChild(document.createElement("br"))})}function Er(n={}){const e=je.useRef(null);return je.useEffect(()=>{const t=e.current;if(!t)return;let i=null;if(["H1","H2","H3"].includes(t.tagName)){WT(t),HT();const r=n.letterSpacingEnd!==void 0?n.letterSpacingEnd:.15,s=n.letterSpacingStart!==void 0?n.letterSpacingStart:-.02,o=a=>{const l=t.getBoundingClientRect(),c=(l.top+l.height/2)/a,d=GT(c),f=s+(r-s)*d;t.style.letterSpacing=`${f.toFixed(4)}em`};i={el:t,update:o},am.add(i),o(window.innerHeight||document.documentElement.clientHeight)}return()=>{i&&am.delete(i)}},[n.letterSpacingStart,n.letterSpacingEnd]),{ref:t=>{e.current=t}}}function XT(){const n=Er({letterSpacingStart:-.02,letterSpacingEnd:.04}),e=Er({letterSpacingStart:-.03,letterSpacingEnd:.03}),t=Er({letterSpacingStart:-.01,letterSpacingEnd:.03}),i=Er({letterSpacingStart:0,letterSpacingEnd:.04});return I.jsx("section",{id:"hero",children:I.jsxs("div",{className:"section-content",children:[I.jsx("div",{className:"label",...n,children:"T A N T R A V E D A"}),I.jsx("h1",{...e,children:"Shape the Flow."}),I.jsx("div",{className:"subtext",...t,children:"Explore the Infinite. Learn Without Limits."}),I.jsx("a",{href:"#explore",className:"cta-button",...i,children:"EXPLORE SYSTEM"})]})})}function jT(){const n=Er({letterSpacingStart:-.02,letterSpacingEnd:.04});return I.jsx("section",{id:"convergence",children:I.jsx("div",{className:"section-content",children:I.jsx("h2",{...n,children:"Everything Connects."})})})}function YT(){const n=Er({letterSpacingStart:-.03,letterSpacingEnd:.04});return I.jsx("section",{id:"distortion",children:I.jsx("div",{className:"section-content",children:I.jsx("h2",{...n,children:"Beyond Knowledge."})})})}function $T(){const n=Er({letterSpacingStart:-.04,letterSpacingEnd:.04});return I.jsx("section",{id:"crossing",children:I.jsx("div",{className:"section-content",children:I.jsxs("h2",{...n,children:["ONE SYSTEM.",I.jsx("br",{}),"INFINITE MOTION."]})})})}function qT(){const n=Er({letterSpacingStart:-.02,letterSpacingEnd:.04});return I.jsx("section",{id:"flow",children:I.jsx("div",{className:"section-content",children:I.jsx("h2",{...n,children:"Meet The Future.."})})})}function KT(){const n=lM(),e=Er({letterSpacingStart:-.03,letterSpacingEnd:.04}),t=Er({letterSpacingStart:0,letterSpacingEnd:.04}),i=r=>{r.preventDefault(),n("/start")};return I.jsx("section",{id:"final",children:I.jsxs("div",{className:"section-content",children:[I.jsx("h2",{...e,children:"ENTER THE FLOW"}),I.jsx("a",{href:"#start",className:"cta-button",onClick:i,...t,children:"Start Exploring"})]})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const l_="168",ZT=0,av=1,QT=2,uM=1,JT=2,Fr=3,Xs=0,si=1,Vr=2,ks=0,Ga=1,lm=2,lv=3,uv=4,eA=5,vo=100,tA=101,nA=102,iA=103,rA=104,sA=200,oA=201,aA=202,lA=203,um=204,cm=205,uA=206,cA=207,fA=208,dA=209,hA=210,pA=211,mA=212,gA=213,_A=214,vA=0,xA=1,yA=2,ud=3,SA=4,MA=5,EA=6,wA=7,cM=0,TA=1,AA=2,zs=0,CA=1,RA=2,bA=3,PA=4,LA=5,DA=6,NA=7,fM=300,al=301,ll=302,fm=303,dm=304,Vd=306,hm=1e3,Eo=1001,pm=1002,Vi=1003,IA=1004,Tc=1005,sr=1006,Ah=1007,wo=1008,ns=1009,dM=1010,hM=1011,zu=1012,u_=1013,Vo=1014,jr=1015,ic=1016,c_=1017,f_=1018,ul=1020,pM=35902,mM=1021,gM=1022,ar=1023,_M=1024,vM=1025,Wa=1026,cl=1027,xM=1028,d_=1029,yM=1030,h_=1031,p_=1033,wf=33776,Tf=33777,Af=33778,Cf=33779,mm=35840,gm=35841,_m=35842,vm=35843,xm=36196,ym=37492,Sm=37496,Mm=37808,Em=37809,wm=37810,Tm=37811,Am=37812,Cm=37813,Rm=37814,bm=37815,Pm=37816,Lm=37817,Dm=37818,Nm=37819,Im=37820,Um=37821,Rf=36492,Om=36494,Fm=36495,SM=36283,km=36284,zm=36285,Bm=36286,UA=3200,OA=3201,FA=0,kA=1,Ss="",ir="srgb",Js="srgb-linear",m_="display-p3",Gd="display-p3-linear",cd="linear",Nt="srgb",fd="rec709",dd="p3",Qo=7680,cv=519,zA=512,BA=513,HA=514,MM=515,VA=516,GA=517,WA=518,XA=519,Hm=35044,fv="300 es",Yr=2e3,hd=2001;class Ml{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dv=1234567;const lu=Math.PI/180,Bu=180/Math.PI;function Kr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function Nn(n,e,t){return Math.max(e,Math.min(t,n))}function g_(n,e){return(n%e+e)%e}function jA(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function YA(n,e,t){return n!==e?(t-n)/(e-n):0}function uu(n,e,t){return(1-t)*n+t*e}function $A(n,e,t,i){return uu(n,e,1-Math.exp(-t*i))}function qA(n,e=1){return e-Math.abs(g_(n,e*2)-e)}function KA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ZA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function QA(n,e){return n+Math.floor(Math.random()*(e-n+1))}function JA(n,e){return n+Math.random()*(e-n)}function eC(n){return n*(.5-Math.random())}function tC(n){n!==void 0&&(dv=n);let e=dv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nC(n){return n*lu}function iC(n){return n*Bu}function rC(n){return(n&n-1)===0&&n!==0}function sC(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function oC(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function aC(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*d,l*f,a*u);break;case"YZY":n.set(l*f,a*c,l*d,a*u);break;case"ZXZ":n.set(l*d,l*f,a*c,a*u);break;case"XZX":n.set(a*c,l*_,l*p,a*u);break;case"YXY":n.set(l*p,a*c,l*_,a*u);break;case"ZYZ":n.set(l*_,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function or(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Et(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const lC={DEG2RAD:lu,RAD2DEG:Bu,generateUUID:Kr,clamp:Nn,euclideanModulo:g_,mapLinear:jA,inverseLerp:YA,lerp:uu,damp:$A,pingpong:qA,smoothstep:KA,smootherstep:ZA,randInt:QA,randFloat:JA,randFloatSpread:eC,seededRandom:tC,degToRad:nC,radToDeg:iC,isPowerOfTwo:rC,ceilPowerOfTwo:sC,floorPowerOfTwo:oC,setQuaternionFromProperEuler:aC,normalize:Et,denormalize:or};class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,i,r,s,o,a,l,u){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],_=i[8],g=r[0],m=r[3],h=r[6],v=r[1],x=r[4],S=r[7],C=r[2],T=r[5],y=r[8];return s[0]=o*g+a*v+l*C,s[3]=o*m+a*x+l*T,s[6]=o*h+a*S+l*y,s[1]=u*g+c*v+d*C,s[4]=u*m+c*x+d*T,s[7]=u*h+c*S+d*y,s[2]=f*g+p*v+_*C,s[5]=f*m+p*x+_*T,s[8]=f*h+p*S+_*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,p=u*s-o*l,_=t*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=f*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ch.makeScale(e,t)),this}rotate(e){return this.premultiply(Ch.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ch.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ch=new et;function EM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Hu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function uC(){const n=Hu("canvas");return n.style.display="block",n}const hv={};function Xa(n){n in hv||(hv[n]=!0,console.warn(n))}function cC(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const pv=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mv=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Dl={[Js]:{transfer:cd,primaries:fd,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ir]:{transfer:Nt,primaries:fd,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Gd]:{transfer:cd,primaries:dd,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(mv),fromReference:n=>n.applyMatrix3(pv)},[m_]:{transfer:Nt,primaries:dd,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(mv),fromReference:n=>n.applyMatrix3(pv).convertLinearToSRGB()}},fC=new Set([Js,Gd]),xt={enabled:!0,_workingColorSpace:Js,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!fC.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Dl[e].toReference,r=Dl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Dl[n].primaries},getTransfer:function(n){return n===Ss?cd:Dl[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Dl[e].luminanceCoefficients)}};function ja(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Jo;class dC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jo===void 0&&(Jo=Hu("canvas")),Jo.width=e.width,Jo.height=e.height;const i=Jo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Jo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ja(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ja(t[i]/255)*255):t[i]=ja(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hC=0;class wM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hC++}),this.uuid=Kr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bh(r[o].image)):s.push(bh(r[o]))}else s=bh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function bh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pC=0;class On extends Ml{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,i=Eo,r=Eo,s=sr,o=wo,a=ar,l=ns,u=On.DEFAULT_ANISOTROPY,c=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pC++}),this.uuid=Kr(),this.name="",this.source=new wM(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hm:e.x=e.x-Math.floor(e.x);break;case Eo:e.x=e.x<0?0:1;break;case pm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hm:e.y=e.y-Math.floor(e.y);break;case Eo:e.y=e.y<0?0:1;break;case pm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=fM;On.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,i=0,r=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],_=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(p+1)/2,C=(h+1)/2,T=(c+f)/4,y=(d+g)/4,R=(_+m)/4;return x>S&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=y/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=y/s,r=R/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-g)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mC extends Ml{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new On(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wM(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Go extends mC{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class TM extends On{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vi,this.minFilter=Vi,this.wrapR=Eo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gC extends On{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vi,this.minFilter=Vi,this.wrapR=Eo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rc{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==f||u!==p||c!==_){let m=1-a;const h=l*f+u*p+c*_+d*g,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,h*v);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const S=a*v;if(l=l*m+f*S,u=u*m+p*S,c=c*m+_*S,d=d*m+g*S,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=C,u*=C,c*=C,d*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*d+l*p-u*f,e[t+1]=l*_+c*f+u*d-a*p,e[t+2]=u*_+c*p+a*f-l*d,e[t+3]=c*_-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"YXZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"ZXY":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"ZYX":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"YZX":this._x=f*c*d+u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d-f*p*_;break;case"XZY":this._x=f*c*d-u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ph.copy(this).projectOnVector(e),this.sub(Ph)}reflect(e){return this.sub(Ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ph=new W,gv=new rc;class eo{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zi):Zi.fromBufferAttribute(s,o),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ac.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ac.copy(i.boundingBox)),Ac.applyMatrix4(e.matrixWorld),this.union(Ac)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nl),Cc.subVectors(this.max,Nl),ea.subVectors(e.a,Nl),ta.subVectors(e.b,Nl),na.subVectors(e.c,Nl),cs.subVectors(ta,ea),fs.subVectors(na,ta),no.subVectors(ea,na);let t=[0,-cs.z,cs.y,0,-fs.z,fs.y,0,-no.z,no.y,cs.z,0,-cs.x,fs.z,0,-fs.x,no.z,0,-no.x,-cs.y,cs.x,0,-fs.y,fs.x,0,-no.y,no.x,0];return!Lh(t,ea,ta,na,Cc)||(t=[1,0,0,0,1,0,0,0,1],!Lh(t,ea,ta,na,Cc))?!1:(Rc.crossVectors(cs,fs),t=[Rc.x,Rc.y,Rc.z],Lh(t,ea,ta,na,Cc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dr=[new W,new W,new W,new W,new W,new W,new W,new W],Zi=new W,Ac=new eo,ea=new W,ta=new W,na=new W,cs=new W,fs=new W,no=new W,Nl=new W,Cc=new W,Rc=new W,io=new W;function Lh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){io.fromArray(n,s);const a=r.x*Math.abs(io.x)+r.y*Math.abs(io.y)+r.z*Math.abs(io.z),l=e.dot(io),u=t.dot(io),c=i.dot(io);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const _C=new eo,Il=new W,Dh=new W;class sc{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_C.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Il.subVectors(e,this.center);const t=Il.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Il,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Il.copy(e.center).add(Dh)),this.expandByPoint(Il.copy(e.center).sub(Dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nr=new W,Nh=new W,bc=new W,ds=new W,Ih=new W,Pc=new W,Uh=new W;class vC{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nr.copy(this.origin).addScaledVector(this.direction,t),Nr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Nh.copy(e).add(t).multiplyScalar(.5),bc.copy(t).sub(e).normalize(),ds.copy(this.origin).sub(Nh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(bc),a=ds.dot(this.direction),l=-ds.dot(bc),u=ds.lengthSq(),c=Math.abs(1-o*o);let d,f,p,_;if(c>0)if(d=o*l-a,f=o*a-l,_=s*c,d>=0)if(f>=-_)if(f<=_){const g=1/c;d*=g,f*=g,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Nh).addScaledVector(bc,f),p}intersectSphere(e,t){Nr.subVectors(e.center,this.origin);const i=Nr.dot(this.direction),r=Nr.dot(Nr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Nr)!==null}intersectTriangle(e,t,i,r,s){Ih.subVectors(t,e),Pc.subVectors(i,e),Uh.crossVectors(Ih,Pc);let o=this.direction.dot(Uh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ds.subVectors(this.origin,e);const l=a*this.direction.dot(Pc.crossVectors(ds,Pc));if(l<0)return null;const u=a*this.direction.dot(Ih.cross(ds));if(u<0||l+u>o)return null;const c=-a*ds.dot(Uh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m)}set(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ia.setFromMatrixColumn(e,0).length(),s=1/ia.setFromMatrixColumn(e,1).length(),o=1/ia.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*d,_=a*c,g=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+_*u,t[5]=f-g*u,t[9]=-a*l,t[2]=g-f*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,_=u*c,g=u*d;t[0]=f+g*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,_=u*c,g=u*d;t[0]=f-g*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=g-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*d,_=a*c,g=a*d;t[0]=l*c,t[4]=_*u-p,t[8]=f*u+g,t[1]=l*d,t[5]=g*u+f,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=g-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+g,t[5]=o*c,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*c,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xC,e,yC)}lookAt(e,t,i){const r=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),hs.crossVectors(i,hi),hs.lengthSq()===0&&(Math.abs(i.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),hs.crossVectors(i,hi)),hs.normalize(),Lc.crossVectors(hi,hs),r[0]=hs.x,r[4]=Lc.x,r[8]=hi.x,r[1]=hs.y,r[5]=Lc.y,r[9]=hi.y,r[2]=hs.z,r[6]=Lc.z,r[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],_=i[2],g=i[6],m=i[10],h=i[14],v=i[3],x=i[7],S=i[11],C=i[15],T=r[0],y=r[4],R=r[8],E=r[12],M=r[1],D=r[5],F=r[9],z=r[13],Y=r[2],K=r[6],j=r[10],V=r[14],N=r[3],Q=r[7],b=r[11],re=r[15];return s[0]=o*T+a*M+l*Y+u*N,s[4]=o*y+a*D+l*K+u*Q,s[8]=o*R+a*F+l*j+u*b,s[12]=o*E+a*z+l*V+u*re,s[1]=c*T+d*M+f*Y+p*N,s[5]=c*y+d*D+f*K+p*Q,s[9]=c*R+d*F+f*j+p*b,s[13]=c*E+d*z+f*V+p*re,s[2]=_*T+g*M+m*Y+h*N,s[6]=_*y+g*D+m*K+h*Q,s[10]=_*R+g*F+m*j+h*b,s[14]=_*E+g*z+m*V+h*re,s[3]=v*T+x*M+S*Y+C*N,s[7]=v*y+x*D+S*K+C*Q,s[11]=v*R+x*F+S*j+C*b,s[15]=v*E+x*z+S*V+C*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],_=e[3],g=e[7],m=e[11],h=e[15];return _*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*p-i*l*p)+g*(+t*l*p-t*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],_=e[12],g=e[13],m=e[14],h=e[15],v=d*m*u-g*f*u+g*l*p-a*m*p-d*l*h+a*f*h,x=_*f*u-c*m*u-_*l*p+o*m*p+c*l*h-o*f*h,S=c*g*u-_*d*u+_*a*p-o*g*p-c*a*h+o*d*h,C=_*d*l-c*g*l-_*a*f+o*g*f+c*a*m-o*d*m,T=t*v+i*x+r*S+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/T;return e[0]=v*y,e[1]=(g*f*s-d*m*s-g*r*p+i*m*p+d*r*h-i*f*h)*y,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*h+i*l*h)*y,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*p-i*l*p)*y,e[4]=x*y,e[5]=(c*m*s-_*f*s+_*r*p-t*m*p-c*r*h+t*f*h)*y,e[6]=(_*l*s-o*m*s-_*r*u+t*m*u+o*r*h-t*l*h)*y,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*p+t*l*p)*y,e[8]=S*y,e[9]=(_*d*s-c*g*s-_*i*p+t*g*p+c*i*h-t*d*h)*y,e[10]=(o*g*s-_*a*s+_*i*u-t*g*u-o*i*h+t*a*h)*y,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*y,e[12]=C*y,e[13]=(c*g*r-_*d*r+_*i*f-t*g*f-c*i*m+t*d*m)*y,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*m-t*a*m)*y,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*y,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,p=s*c,_=s*d,g=o*c,m=o*d,h=a*d,v=l*u,x=l*c,S=l*d,C=i.x,T=i.y,y=i.z;return r[0]=(1-(g+h))*C,r[1]=(p+S)*C,r[2]=(_-x)*C,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(f+h))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(_+x)*y,r[9]=(m-v)*y,r[10]=(1-(f+g))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ia.set(r[0],r[1],r[2]).length();const o=ia.set(r[4],r[5],r[6]).length(),a=ia.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qi.copy(this);const u=1/s,c=1/o,d=1/a;return Qi.elements[0]*=u,Qi.elements[1]*=u,Qi.elements[2]*=u,Qi.elements[4]*=c,Qi.elements[5]*=c,Qi.elements[6]*=c,Qi.elements[8]*=d,Qi.elements[9]*=d,Qi.elements[10]*=d,t.setFromRotationMatrix(Qi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Yr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,_;if(a===Yr)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===hd)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Yr){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),f=(t+e)*u,p=(i+r)*c;let _,g;if(a===Yr)_=(o+s)*d,g=-2*d;else if(a===hd)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ia=new W,Qi=new tn,xC=new W(0,0,0),yC=new W(1,1,1),hs=new W,Lc=new W,hi=new W,_v=new tn,vv=new rc;class is{constructor(e=0,t=0,i=0,r=is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _v.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_v,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vv.setFromEuler(this),this.setFromQuaternion(vv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class AM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let SC=0;const xv=new W,ra=new rc,Ir=new tn,Dc=new W,Ul=new W,MC=new W,EC=new rc,yv=new W(1,0,0),Sv=new W(0,1,0),Mv=new W(0,0,1),Ev={type:"added"},wC={type:"removed"},sa={type:"childadded",child:null},Oh={type:"childremoved",child:null};class Ai extends Ml{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SC++}),this.uuid=Kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ai.DEFAULT_UP.clone();const e=new W,t=new is,i=new rc,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tn},normalMatrix:{value:new et}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new AM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ra.setFromAxisAngle(e,t),this.quaternion.multiply(ra),this}rotateOnWorldAxis(e,t){return ra.setFromAxisAngle(e,t),this.quaternion.premultiply(ra),this}rotateX(e){return this.rotateOnAxis(yv,e)}rotateY(e){return this.rotateOnAxis(Sv,e)}rotateZ(e){return this.rotateOnAxis(Mv,e)}translateOnAxis(e,t){return xv.copy(e).applyQuaternion(this.quaternion),this.position.add(xv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yv,e)}translateY(e){return this.translateOnAxis(Sv,e)}translateZ(e){return this.translateOnAxis(Mv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ir.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Dc.copy(e):Dc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ul.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ir.lookAt(Ul,Dc,this.up):Ir.lookAt(Dc,Ul,this.up),this.quaternion.setFromRotationMatrix(Ir),r&&(Ir.extractRotation(r.matrixWorld),ra.setFromRotationMatrix(Ir),this.quaternion.premultiply(ra.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ev),sa.child=e,this.dispatchEvent(sa),sa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wC),Oh.child=e,this.dispatchEvent(Oh),Oh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ev),sa.child=e,this.dispatchEvent(sa),sa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,e,MC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,EC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ai.DEFAULT_UP=new W(0,1,0);Ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ji=new W,Ur=new W,Fh=new W,Or=new W,oa=new W,aa=new W,wv=new W,kh=new W,zh=new W,Bh=new W;class yr{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ji.subVectors(e,t),r.cross(Ji);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ji.subVectors(r,t),Ur.subVectors(i,t),Fh.subVectors(e,t);const o=Ji.dot(Ji),a=Ji.dot(Ur),l=Ji.dot(Fh),u=Ur.dot(Ur),c=Ur.dot(Fh),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-a*c)*f,_=(o*c-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Or)===null?!1:Or.x>=0&&Or.y>=0&&Or.x+Or.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Or)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Or.x),l.addScaledVector(o,Or.y),l.addScaledVector(a,Or.z),l)}static isFrontFacing(e,t,i,r){return Ji.subVectors(i,t),Ur.subVectors(e,t),Ji.cross(Ur).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ji.subVectors(this.c,this.b),Ur.subVectors(this.a,this.b),Ji.cross(Ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return yr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return yr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;oa.subVectors(r,i),aa.subVectors(s,i),kh.subVectors(e,i);const l=oa.dot(kh),u=aa.dot(kh);if(l<=0&&u<=0)return t.copy(i);zh.subVectors(e,r);const c=oa.dot(zh),d=aa.dot(zh);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(oa,o);Bh.subVectors(e,s);const p=oa.dot(Bh),_=aa.dot(Bh);if(_>=0&&p<=_)return t.copy(s);const g=p*u-l*_;if(g<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(aa,a);const m=c*_-p*d;if(m<=0&&d-c>=0&&p-_>=0)return wv.subVectors(s,r),a=(d-c)/(d-c+(p-_)),t.copy(r).addScaledVector(wv,a);const h=1/(m+g+f);return o=g*h,a=f*h,t.copy(i).addScaledVector(oa,o).addScaledVector(aa,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const CM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function Hh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class gt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ir){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=g_(e,1),t=Nn(t,0,1),i=Nn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Hh(o,s,e+1/3),this.g=Hh(o,s,e),this.b=Hh(o,s,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,t=ir){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ir){const i=CM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ja(e.r),this.g=ja(e.g),this.b=ja(e.b),this}copyLinearToSRGB(e){return this.r=Rh(e.r),this.g=Rh(e.g),this.b=Rh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ir){return xt.fromWorkingColorSpace(bn.copy(this),e),Math.round(Nn(bn.r*255,0,255))*65536+Math.round(Nn(bn.g*255,0,255))*256+Math.round(Nn(bn.b*255,0,255))}getHexString(e=ir){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(bn.copy(this),t);const i=bn.r,r=bn.g,s=bn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=ir){xt.fromWorkingColorSpace(bn.copy(this),e);const t=bn.r,i=bn.g,r=bn.b;return e!==ir?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+t,ps.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ps),e.getHSL(Nc);const i=uu(ps.h,Nc.h,t),r=uu(ps.s,Nc.s,t),s=uu(ps.l,Nc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new gt;gt.NAMES=CM;let TC=0;class Wd extends Ml{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TC++}),this.uuid=Kr(),this.name="",this.type="Material",this.blending=Ga,this.side=Xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=um,this.blendDst=cm,this.blendEquation=vo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=ud,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qo,this.stencilZFail=Qo,this.stencilZPass=Qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ga&&(i.blending=this.blending),this.side!==Xs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==um&&(i.blendSrc=this.blendSrc),this.blendDst!==cm&&(i.blendDst=this.blendDst),this.blendEquation!==vo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ud&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class RM extends Wd{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=cM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new W,Ic=new ft;class fr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=jr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Xa("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ic.fromBufferAttribute(this,t),Ic.applyMatrix3(e),this.setXY(t,Ic.x,Ic.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=or(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=or(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=or(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=or(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),r=Et(r,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hm&&(e.usage=this.usage),e}}class bM extends fr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class PM extends fr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Rr extends fr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let AC=0;const Ii=new tn,Vh=new Ai,la=new W,pi=new eo,Ol=new eo,fn=new W;class as extends Ml{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AC++}),this.uuid=Kr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(EM(e)?PM:bM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,t,i){return Ii.makeTranslation(e,t,i),this.applyMatrix4(Ii),this}scale(e,t,i){return Ii.makeScale(e,t,i),this.applyMatrix4(Ii),this}lookAt(e){return Vh.lookAt(e),Vh.updateMatrix(),this.applyMatrix4(Vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(la).negate(),this.translate(la.x,la.y,la.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Rr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];pi.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ol.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(pi.min,Ol.min),pi.expandByPoint(fn),fn.addVectors(pi.max,Ol.max),pi.expandByPoint(fn)):(pi.expandByPoint(Ol.min),pi.expandByPoint(Ol.max))}pi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)fn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(fn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)fn.fromBufferAttribute(a,u),l&&(la.fromBufferAttribute(e,u),fn.add(la)),r=Math.max(r,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new W,l[R]=new W;const u=new W,c=new W,d=new W,f=new ft,p=new ft,_=new ft,g=new W,m=new W;function h(R,E,M){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,M),c.sub(u),d.sub(u),p.sub(f),_.sub(f);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(g.copy(c).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(D),a[R].add(g),a[E].add(g),a[M].add(g),l[R].add(m),l[E].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,E=v.length;R<E;++R){const M=v[R],D=M.start,F=M.count;for(let z=D,Y=D+F;z<Y;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new W,S=new W,C=new W,T=new W;function y(R){C.fromBufferAttribute(r,R),T.copy(C);const E=a[R];x.copy(E),x.sub(C.multiplyScalar(C.dot(E))).normalize(),S.crossVectors(T,E);const D=S.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,D)}for(let R=0,E=v.length;R<E;++R){const M=v[R],D=M.start,F=M.count;for(let z=D,Y=D+F;z<Y;z+=3)y(e.getX(z+0)),y(e.getX(z+1)),y(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,u=new W,c=new W,d=new W;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let h=0;h<c;h++)f[_++]=u[p++]}return new fr(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new as,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tv=new tn,ro=new vC,Uc=new sc,Av=new W,ua=new W,ca=new W,fa=new W,Gh=new W,Oc=new W,Fc=new ft,kc=new ft,zc=new ft,Cv=new W,Rv=new W,bv=new W,Bc=new W,Hc=new W;class lr extends Ai{constructor(e=new as,t=new RM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Oc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Gh.fromBufferAttribute(d,e),o?Oc.addScaledVector(Gh,c):Oc.addScaledVector(Gh.sub(t),c))}t.add(Oc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uc.copy(i.boundingSphere),Uc.applyMatrix4(s),ro.copy(e.ray).recast(e.near),!(Uc.containsPoint(ro.origin)===!1&&(ro.intersectSphere(Uc,Av)===null||ro.origin.distanceToSquared(Av)>(e.far-e.near)**2))&&(Tv.copy(s).invert(),ro.copy(e.ray).applyMatrix4(Tv),!(i.boundingBox!==null&&ro.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ro)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,C=x;S<C;S+=3){const T=a.getX(S),y=a.getX(S+1),R=a.getX(S+2);r=Vc(this,h,e,i,u,c,d,T,y,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const v=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=Vc(this,o,e,i,u,c,d,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,C=x;S<C;S+=3){const T=S,y=S+1,R=S+2;r=Vc(this,h,e,i,u,c,d,T,y,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const v=m,x=m+1,S=m+2;r=Vc(this,o,e,i,u,c,d,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function CC(n,e,t,i,r,s,o,a){let l;if(e.side===si?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Xs,a),l===null)return null;Hc.copy(a),Hc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Hc);return u<t.near||u>t.far?null:{distance:u,point:Hc.clone(),object:n}}function Vc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,ua),n.getVertexPosition(l,ca),n.getVertexPosition(u,fa);const c=CC(n,e,t,i,ua,ca,fa,Bc);if(c){r&&(Fc.fromBufferAttribute(r,a),kc.fromBufferAttribute(r,l),zc.fromBufferAttribute(r,u),c.uv=yr.getInterpolation(Bc,ua,ca,fa,Fc,kc,zc,new ft)),s&&(Fc.fromBufferAttribute(s,a),kc.fromBufferAttribute(s,l),zc.fromBufferAttribute(s,u),c.uv1=yr.getInterpolation(Bc,ua,ca,fa,Fc,kc,zc,new ft)),o&&(Cv.fromBufferAttribute(o,a),Rv.fromBufferAttribute(o,l),bv.fromBufferAttribute(o,u),c.normal=yr.getInterpolation(Bc,ua,ca,fa,Cv,Rv,bv,new W),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new W,materialIndex:0};yr.getNormal(ua,ca,fa,d.normal),c.face=d}return c}class oc extends as{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Rr(u,3)),this.setAttribute("normal",new Rr(c,3)),this.setAttribute("uv",new Rr(d,2));function _(g,m,h,v,x,S,C,T,y,R,E){const M=S/y,D=C/R,F=S/2,z=C/2,Y=T/2,K=y+1,j=R+1;let V=0,N=0;const Q=new W;for(let b=0;b<j;b++){const re=b*D-z;for(let Te=0;Te<K;Te++){const $e=Te*M-F;Q[g]=$e*v,Q[m]=re*x,Q[h]=Y,u.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[h]=T>0?1:-1,c.push(Q.x,Q.y,Q.z),d.push(Te/y),d.push(1-b/R),V+=1}}for(let b=0;b<R;b++)for(let re=0;re<y;re++){const Te=f+re+K*b,$e=f+re+K*(b+1),$=f+(re+1)+K*(b+1),ie=f+(re+1)+K*b;l.push(Te,$e,ie),l.push($e,$,ie),N+=6}a.addGroup(p,N,E),p+=N,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Vn(n){const e={};for(let t=0;t<n.length;t++){const i=fl(n[t]);for(const r in i)e[r]=i[r]}return e}function RC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function LM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const __={clone:fl,merge:Vn};var bC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pr extends Wd{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bC,this.fragmentShader=PC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fl(e.uniforms),this.uniformsGroups=RC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class DM extends Ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Yr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ms=new W,Pv=new ft,Lv=new ft;class ki extends DM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bu*2*Math.atan(Math.tan(lu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,t){return this.getViewBounds(e,Pv,Lv),t.subVectors(Lv,Pv)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const da=-90,ha=1;class LC extends Ai{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ki(da,ha,e,t);r.layers=this.layers,this.add(r);const s=new ki(da,ha,e,t);s.layers=this.layers,this.add(s);const o=new ki(da,ha,e,t);o.layers=this.layers,this.add(o);const a=new ki(da,ha,e,t);a.layers=this.layers,this.add(a);const l=new ki(da,ha,e,t);l.layers=this.layers,this.add(l);const u=new ki(da,ha,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Yr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hd)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class NM extends On{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:al,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class DC extends Go{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new NM(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new oc(5,5,5),s=new Pr({name:"CubemapFromEquirect",uniforms:fl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:si,blending:ks});s.uniforms.tEquirect.value=t;const o=new lr(r,s),a=t.minFilter;return t.minFilter===wo&&(t.minFilter=sr),new LC(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Wh=new W,NC=new W,IC=new et;class ho{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Wh.subVectors(i,t).cross(NC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||IC.getNormalMatrix(e),r=this.coplanarPoint(Wh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const so=new sc,Gc=new W;class IM{constructor(e=new ho,t=new ho,i=new ho,r=new ho,s=new ho,o=new ho){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],h=r[12],v=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,f-u,m-p,S-h).normalize(),i[1].setComponents(l+s,f+u,m+p,S+h).normalize(),i[2].setComponents(l+o,f+c,m+_,S+v).normalize(),i[3].setComponents(l-o,f-c,m-_,S-v).normalize(),i[4].setComponents(l-a,f-d,m-g,S-x).normalize(),t===Yr)i[5].setComponents(l+a,f+d,m+g,S+x).normalize();else if(t===hd)i[5].setComponents(a,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),so.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),so.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(so)}intersectsSprite(e){return so.center.set(0,0,0),so.radius=.7071067811865476,so.applyMatrix4(e.matrixWorld),this.intersectsSphere(so)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Gc.x=r.normal.x>0?e.max.x:e.min.x,Gc.y=r.normal.y>0?e.max.y:e.min.y,Gc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function UM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function UC(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l._updateRange,f=l.updateRanges;if(n.bindBuffer(u,a),d.count===-1&&f.length===0&&n.bufferSubData(u,0,c),f.length!==0){for(let p=0,_=f.length;p<_;p++){const g=f[p];n.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(u,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class dl extends as{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,p=[],_=[],g=[],m=[];for(let h=0;h<c;h++){const v=h*f-o;for(let x=0;x<u;x++){const S=x*d-s;_.push(S,-v,0),g.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const x=v+u*h,S=v+u*(h+1),C=v+1+u*(h+1),T=v+1+u*h;p.push(x,S,T),p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new Rr(_,3)),this.setAttribute("normal",new Rr(g,3)),this.setAttribute("uv",new Rr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.width,e.height,e.widthSegments,e.heightSegments)}}var OC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FC=`#ifdef USE_ALPHAHASH
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
#endif`,kC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VC=`#ifdef USE_AOMAP
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
#endif`,GC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,XC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$C=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qC=`#ifdef USE_IRIDESCENCE
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
#endif`,KC=`#ifdef USE_BUMPMAP
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
#endif`,ZC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,QC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sR=`#define PI 3.141592653589793
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
} // validated`,oR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,aR=`vec3 transformedNormal = objectNormal;
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
#endif`,lR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dR="gl_FragColor = linearToOutputTexel( gl_FragColor );",hR=`
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
}`,pR=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,mR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gR=`#ifdef USE_ENVMAP
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
#endif`,_R=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vR=`#ifdef USE_ENVMAP
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
#endif`,xR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ER=`#ifdef USE_GRADIENTMAP
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
}`,wR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CR=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,RR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,bR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NR=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,IR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,UR=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,OR=`#if defined( RE_IndirectDiffuse )
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
#endif`,FR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,XR=`#if defined( USE_POINTS_UV )
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
#endif`,jR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$R=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,QR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ib=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rb=`#ifdef USE_NORMALMAP
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
#endif`,sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ob=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ab=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ub=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,fb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,db=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_b=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mb=`#ifdef USE_SKINNING
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
#endif`,Eb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wb=`#ifdef USE_SKINNING
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
#endif`,Tb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ab=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rb=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bb=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pb=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ib=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ub=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ob=`uniform sampler2D t2D;
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
}`,Fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hb=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Vb=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gb=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Wb=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$b=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qb=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Kb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Zb=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Qb=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Jb=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,e2=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,t2=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,n2=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,i2=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,r2=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,s2=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,o2=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,a2=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,l2=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,u2=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,c2=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,f2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,d2=`uniform vec3 color;
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
}`,h2=`uniform float rotation;
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
}`,p2=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Je={alphahash_fragment:OC,alphahash_pars_fragment:FC,alphamap_fragment:kC,alphamap_pars_fragment:zC,alphatest_fragment:BC,alphatest_pars_fragment:HC,aomap_fragment:VC,aomap_pars_fragment:GC,batching_pars_vertex:WC,batching_vertex:XC,begin_vertex:jC,beginnormal_vertex:YC,bsdfs:$C,iridescence_fragment:qC,bumpmap_pars_fragment:KC,clipping_planes_fragment:ZC,clipping_planes_pars_fragment:QC,clipping_planes_pars_vertex:JC,clipping_planes_vertex:eR,color_fragment:tR,color_pars_fragment:nR,color_pars_vertex:iR,color_vertex:rR,common:sR,cube_uv_reflection_fragment:oR,defaultnormal_vertex:aR,displacementmap_pars_vertex:lR,displacementmap_vertex:uR,emissivemap_fragment:cR,emissivemap_pars_fragment:fR,colorspace_fragment:dR,colorspace_pars_fragment:hR,envmap_fragment:pR,envmap_common_pars_fragment:mR,envmap_pars_fragment:gR,envmap_pars_vertex:_R,envmap_physical_pars_fragment:RR,envmap_vertex:vR,fog_vertex:xR,fog_pars_vertex:yR,fog_fragment:SR,fog_pars_fragment:MR,gradientmap_pars_fragment:ER,lightmap_pars_fragment:wR,lights_lambert_fragment:TR,lights_lambert_pars_fragment:AR,lights_pars_begin:CR,lights_toon_fragment:bR,lights_toon_pars_fragment:PR,lights_phong_fragment:LR,lights_phong_pars_fragment:DR,lights_physical_fragment:NR,lights_physical_pars_fragment:IR,lights_fragment_begin:UR,lights_fragment_maps:OR,lights_fragment_end:FR,logdepthbuf_fragment:kR,logdepthbuf_pars_fragment:zR,logdepthbuf_pars_vertex:BR,logdepthbuf_vertex:HR,map_fragment:VR,map_pars_fragment:GR,map_particle_fragment:WR,map_particle_pars_fragment:XR,metalnessmap_fragment:jR,metalnessmap_pars_fragment:YR,morphinstance_vertex:$R,morphcolor_vertex:qR,morphnormal_vertex:KR,morphtarget_pars_vertex:ZR,morphtarget_vertex:QR,normal_fragment_begin:JR,normal_fragment_maps:eb,normal_pars_fragment:tb,normal_pars_vertex:nb,normal_vertex:ib,normalmap_pars_fragment:rb,clearcoat_normal_fragment_begin:sb,clearcoat_normal_fragment_maps:ob,clearcoat_pars_fragment:ab,iridescence_pars_fragment:lb,opaque_fragment:ub,packing:cb,premultiplied_alpha_fragment:fb,project_vertex:db,dithering_fragment:hb,dithering_pars_fragment:pb,roughnessmap_fragment:mb,roughnessmap_pars_fragment:gb,shadowmap_pars_fragment:_b,shadowmap_pars_vertex:vb,shadowmap_vertex:xb,shadowmask_pars_fragment:yb,skinbase_vertex:Sb,skinning_pars_vertex:Mb,skinning_vertex:Eb,skinnormal_vertex:wb,specularmap_fragment:Tb,specularmap_pars_fragment:Ab,tonemapping_fragment:Cb,tonemapping_pars_fragment:Rb,transmission_fragment:bb,transmission_pars_fragment:Pb,uv_pars_fragment:Lb,uv_pars_vertex:Db,uv_vertex:Nb,worldpos_vertex:Ib,background_vert:Ub,background_frag:Ob,backgroundCube_vert:Fb,backgroundCube_frag:kb,cube_vert:zb,cube_frag:Bb,depth_vert:Hb,depth_frag:Vb,distanceRGBA_vert:Gb,distanceRGBA_frag:Wb,equirect_vert:Xb,equirect_frag:jb,linedashed_vert:Yb,linedashed_frag:$b,meshbasic_vert:qb,meshbasic_frag:Kb,meshlambert_vert:Zb,meshlambert_frag:Qb,meshmatcap_vert:Jb,meshmatcap_frag:e2,meshnormal_vert:t2,meshnormal_frag:n2,meshphong_vert:i2,meshphong_frag:r2,meshphysical_vert:s2,meshphysical_frag:o2,meshtoon_vert:a2,meshtoon_frag:l2,points_vert:u2,points_frag:c2,shadow_vert:f2,shadow_frag:d2,sprite_vert:h2,sprite_frag:p2},ye={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Jn={basic:{uniforms:Vn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Vn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new gt(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Vn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Vn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Vn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new gt(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Vn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Vn([ye.points,ye.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Vn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Vn([ye.common,ye.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Vn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Vn([ye.sprite,ye.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Vn([ye.common,ye.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Vn([ye.lights,ye.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Jn.physical={uniforms:Vn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Wc={r:0,b:0,g:0},oo=new is,m2=new tn;function g2(n,e,t,i,r,s,o){const a=new gt(0);let l=s===!0?0:1,u,c,d=null,f=0,p=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function g(v){let x=!1;const S=_(v);S===null?h(a,l):S&&S.isColor&&(h(S,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){const S=_(x);S&&(S.isCubeTexture||S.mapping===Vd)?(c===void 0&&(c=new lr(new oc(1,1,1),new Pr({name:"BackgroundCubeMaterial",uniforms:fl(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),oo.copy(x.backgroundRotation),oo.x*=-1,oo.y*=-1,oo.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(oo.y*=-1,oo.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(m2.makeRotationFromEuler(oo)),c.material.toneMapped=xt.getTransfer(S.colorSpace)!==Nt,(d!==S||f!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new lr(new dl(2,2),new Pr({name:"BackgroundMaterial",uniforms:fl(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Xs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=xt.getTransfer(S.colorSpace)!==Nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function h(v,x){v.getRGB(Wc,LM(n)),i.buffers.color.setClear(Wc.r,Wc.g,Wc.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:g,addToRenderList:m}}function _2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,D,F,z,Y){let K=!1;const j=d(z,F,D);s!==j&&(s=j,u(s.object)),K=p(M,z,F,Y),K&&_(M,z,F,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(M,D,F,z),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function u(M){return n.bindVertexArray(M)}function c(M){return n.deleteVertexArray(M)}function d(M,D,F){const z=F.wireframe===!0;let Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let K=Y[D.id];K===void 0&&(K={},Y[D.id]=K);let j=K[z];return j===void 0&&(j=f(l()),K[z]=j),j}function f(M){const D=[],F=[],z=[];for(let Y=0;Y<t;Y++)D[Y]=0,F[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,D,F,z){const Y=s.attributes,K=D.attributes;let j=0;const V=F.getAttributes();for(const N in V)if(V[N].location>=0){const b=Y[N];let re=K[N];if(re===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),b===void 0||b.attribute!==re||re&&b.data!==re.data)return!0;j++}return s.attributesNum!==j||s.index!==z}function _(M,D,F,z){const Y={},K=D.attributes;let j=0;const V=F.getAttributes();for(const N in V)if(V[N].location>=0){let b=K[N];b===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(b=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(b=M.instanceColor));const re={};re.attribute=b,b&&b.data&&(re.data=b.data),Y[N]=re,j++}s.attributes=Y,s.attributesNum=j,s.index=z}function g(){const M=s.newAttributes;for(let D=0,F=M.length;D<F;D++)M[D]=0}function m(M){h(M,0)}function h(M,D){const F=s.newAttributes,z=s.enabledAttributes,Y=s.attributeDivisors;F[M]=1,z[M]===0&&(n.enableVertexAttribArray(M),z[M]=1),Y[M]!==D&&(n.vertexAttribDivisor(M,D),Y[M]=D)}function v(){const M=s.newAttributes,D=s.enabledAttributes;for(let F=0,z=D.length;F<z;F++)D[F]!==M[F]&&(n.disableVertexAttribArray(F),D[F]=0)}function x(M,D,F,z,Y,K,j){j===!0?n.vertexAttribIPointer(M,D,F,Y,K):n.vertexAttribPointer(M,D,F,z,Y,K)}function S(M,D,F,z){g();const Y=z.attributes,K=F.getAttributes(),j=D.defaultAttributeValues;for(const V in K){const N=K[V];if(N.location>=0){let Q=Y[V];if(Q===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const b=Q.normalized,re=Q.itemSize,Te=e.get(Q);if(Te===void 0)continue;const $e=Te.buffer,$=Te.type,ie=Te.bytesPerElement,he=$===n.INT||$===n.UNSIGNED_INT||Q.gpuType===u_;if(Q.isInterleavedBufferAttribute){const fe=Q.data,De=fe.stride,le=Q.offset;if(fe.isInstancedInterleavedBuffer){for(let ve=0;ve<N.locationSize;ve++)h(N.location+ve,fe.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ve=0;ve<N.locationSize;ve++)m(N.location+ve);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let ve=0;ve<N.locationSize;ve++)x(N.location+ve,re/N.locationSize,$,b,De*ie,(le+re/N.locationSize*ve)*ie,he)}else{if(Q.isInstancedBufferAttribute){for(let fe=0;fe<N.locationSize;fe++)h(N.location+fe,Q.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let fe=0;fe<N.locationSize;fe++)m(N.location+fe);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let fe=0;fe<N.locationSize;fe++)x(N.location+fe,re/N.locationSize,$,b,re*ie,re/N.locationSize*fe*ie,he)}}else if(j!==void 0){const b=j[V];if(b!==void 0)switch(b.length){case 2:n.vertexAttrib2fv(N.location,b);break;case 3:n.vertexAttrib3fv(N.location,b);break;case 4:n.vertexAttrib4fv(N.location,b);break;default:n.vertexAttrib1fv(N.location,b)}}}}v()}function C(){R();for(const M in i){const D=i[M];for(const F in D){const z=D[F];for(const Y in z)c(z[Y].object),delete z[Y];delete D[F]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const F in D){const z=D[F];for(const Y in z)c(z[Y].object),delete z[Y];delete D[F]}delete i[M.id]}function y(M){for(const D in i){const F=i[D];if(F[M.id]===void 0)continue;const z=F[M.id];for(const Y in z)c(z[Y].object),delete z[Y];delete F[M.id]}}function R(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:y,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function v2(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,d){d!==0&&(n.drawArraysInstanced(i,u,c,d),t.update(c,i,d))}function a(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let p=0;for(let _=0;_<d;_++)p+=c[_];t.update(p,i,1)}function l(u,c,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],c[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=c[g];for(let g=0;g<f.length;g++)t.update(_,i,f[g])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function x2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==ar&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const y=T===ic&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ns&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==jr&&!y)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:S,maxSamples:C}}function y2(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ho,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let S=h.clippingState||null;l.value=S,S=c(_,f,x,p);for(let C=0;C!==x;++C)S[C]=t[C];h.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const h=p+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,S=p;x!==g;++x,S+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function S2(n){let e=new WeakMap;function t(o,a){return a===fm?o.mapping=al:a===dm&&(o.mapping=ll),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===fm||a===dm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new DC(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class M2 extends DM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Na=4,Dv=[.125,.215,.35,.446,.526,.582],xo=20,Xh=new M2,Nv=new gt;let jh=null,Yh=0,$h=0,qh=!1;const po=(1+Math.sqrt(5))/2,pa=1/po,Iv=[new W(-po,pa,0),new W(po,pa,0),new W(-pa,0,po),new W(pa,0,po),new W(0,po,-pa),new W(0,po,pa),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Uv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){jh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jh,Yh,$h),this._renderer.xr.enabled=qh,e.scissorTest=!1,Xc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===al||e.mapping===ll?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sr,minFilter:sr,generateMipmaps:!1,type:ic,format:ar,colorSpace:Js,depthBuffer:!1},r=Ov(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ov(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E2(s)),this._blurMaterial=w2(s,e,t)}return r}_compileMaterial(e){const t=new lr(this._lodPlanes[0],e);this._renderer.compile(t,Xh)}_sceneToCubeUV(e,t,i,r){const a=new ki(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Nv),c.toneMapping=zs,c.autoClear=!1;const p=new RM({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1}),_=new lr(new oc,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Nv),g=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const x=this._cubeSize;Xc(r,v*x,h>2?x:0,x,x),c.setRenderTarget(r),g&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===al||e.mapping===ll;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new lr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Xc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Xh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Iv[(r-s-1)%Iv.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new lr(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xo-1),g=s/_,m=isFinite(s)?1+Math.floor(c*g):xo;m>xo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xo}`);const h=[];let v=0;for(let y=0;y<xo;++y){const R=y/g,E=Math.exp(-R*R/2);h.push(E),y===0?v+=E:y<m&&(v+=2*E)}for(let y=0;y<h.length;y++)h[y]=h[y]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const S=this._sizeLods[r],C=3*S*(r>x-Na?r-x+Na:0),T=4*(this._cubeSize-S);Xc(t,C,T,3*S,2*S),l.setRenderTarget(t),l.render(d,Xh)}}function E2(n){const e=[],t=[],i=[];let r=n;const s=n-Na+1+Dv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Na?l=Dv[o-n+Na-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,_=6,g=3,m=2,h=1,v=new Float32Array(g*_*p),x=new Float32Array(m*_*p),S=new Float32Array(h*_*p);for(let T=0;T<p;T++){const y=T%3*2/3-1,R=T>2?0:-1,E=[y,R,0,y+2/3,R,0,y+2/3,R+1,0,y,R,0,y+2/3,R+1,0,y,R+1,0];v.set(E,g*_*T),x.set(f,m*_*T);const M=[T,T,T,T,T,T];S.set(M,h*_*T)}const C=new as;C.setAttribute("position",new fr(v,g)),C.setAttribute("uv",new fr(x,m)),C.setAttribute("faceIndex",new fr(S,h)),e.push(C),r>Na&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ov(n,e,t){const i=new Go(n,e,t);return i.texture.mapping=Vd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function w2(n,e,t){const i=new Float32Array(xo),r=new W(0,1,0);return new Pr({name:"SphericalGaussianBlur",defines:{n:xo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:v_(),fragmentShader:`

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
		`,blending:ks,depthTest:!1,depthWrite:!1})}function Fv(){return new Pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:v_(),fragmentShader:`

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
		`,blending:ks,depthTest:!1,depthWrite:!1})}function kv(){return new Pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:v_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ks,depthTest:!1,depthWrite:!1})}function v_(){return`

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
	`}function T2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===fm||l===dm,c=l===al||l===ll;if(u||c){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Uv(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new Uv(n)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function A2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Xa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function C2(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,h=g.length;m<h;m++)e.remove(g[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,h=g.length;m<h;m++)e.update(g[m],n.ARRAY_BUFFER)}}function u(d){const f=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let x=0,S=v.length;x<S;x+=3){const C=v[x+0],T=v[x+1],y=v[x+2];f.push(C,T,T,y,y,C)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const C=x+0,T=x+1,y=x+2;f.push(C,T,T,y,y,C)}}else return;const m=new(EM(f)?PM:bM)(f,1);m.version=g;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function R2(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function u(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,f*o,_),t.update(p,i,_))}function c(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];t.update(m,i,1)}function d(f,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)u(f[h]/o,p[h],g[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,g,0,_);let h=0;for(let v=0;v<_;v++)h+=p[v];for(let v=0;v<g.length;v++)t.update(h,i,g[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function b2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function P2(n,e,t){const i=new WeakMap,r=new Ht;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const y=new Float32Array(C*T*4*d),R=new TM(y,C,T,d);R.type=jr,R.needsUpdate=!0;const E=S*4;for(let D=0;D<d;D++){const F=h[D],z=v[D],Y=x[D],K=C*T*4*D;for(let j=0;j<F.count;j++){const V=j*E;_===!0&&(r.fromBufferAttribute(F,j),y[K+V+0]=r.x,y[K+V+1]=r.y,y[K+V+2]=r.z,y[K+V+3]=0),g===!0&&(r.fromBufferAttribute(z,j),y[K+V+4]=r.x,y[K+V+5]=r.y,y[K+V+6]=r.z,y[K+V+7]=0),m===!0&&(r.fromBufferAttribute(Y,j),y[K+V+8]=r.x,y[K+V+9]=r.y,y[K+V+10]=r.z,y[K+V+11]=Y.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new ft(C,T)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function L2(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class OM extends On{constructor(e,t,i,r,s,o,a,l,u,c=Wa){if(c!==Wa&&c!==cl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Wa&&(i=Vo),i===void 0&&c===cl&&(i=ul),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vi,this.minFilter=l!==void 0?l:Vi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const FM=new On,zv=new OM(1,1),kM=new TM,zM=new gC,BM=new NM,Bv=[],Hv=[],Vv=new Float32Array(16),Gv=new Float32Array(9),Wv=new Float32Array(4);function El(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Bv[r];if(s===void 0&&(s=new Float32Array(r),Bv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function un(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function cn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xd(n,e){let t=Hv[e];t===void 0&&(t=new Int32Array(e),Hv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function D2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function N2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2fv(this.addr,e),cn(t,e)}}function I2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;n.uniform3fv(this.addr,e),cn(t,e)}}function U2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4fv(this.addr,e),cn(t,e)}}function O2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(un(t,i))return;Wv.set(i),n.uniformMatrix2fv(this.addr,!1,Wv),cn(t,i)}}function F2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(un(t,i))return;Gv.set(i),n.uniformMatrix3fv(this.addr,!1,Gv),cn(t,i)}}function k2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(un(t,i))return;Vv.set(i),n.uniformMatrix4fv(this.addr,!1,Vv),cn(t,i)}}function z2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function B2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2iv(this.addr,e),cn(t,e)}}function H2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3iv(this.addr,e),cn(t,e)}}function V2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4iv(this.addr,e),cn(t,e)}}function G2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function W2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2uiv(this.addr,e),cn(t,e)}}function X2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3uiv(this.addr,e),cn(t,e)}}function j2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4uiv(this.addr,e),cn(t,e)}}function Y2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(zv.compareFunction=MM,s=zv):s=FM,t.setTexture2D(e||s,r)}function $2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||zM,r)}function q2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||BM,r)}function K2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||kM,r)}function Z2(n){switch(n){case 5126:return D2;case 35664:return N2;case 35665:return I2;case 35666:return U2;case 35674:return O2;case 35675:return F2;case 35676:return k2;case 5124:case 35670:return z2;case 35667:case 35671:return B2;case 35668:case 35672:return H2;case 35669:case 35673:return V2;case 5125:return G2;case 36294:return W2;case 36295:return X2;case 36296:return j2;case 35678:case 36198:case 36298:case 36306:case 35682:return Y2;case 35679:case 36299:case 36307:return $2;case 35680:case 36300:case 36308:case 36293:return q2;case 36289:case 36303:case 36311:case 36292:return K2}}function Q2(n,e){n.uniform1fv(this.addr,e)}function J2(n,e){const t=El(e,this.size,2);n.uniform2fv(this.addr,t)}function eP(n,e){const t=El(e,this.size,3);n.uniform3fv(this.addr,t)}function tP(n,e){const t=El(e,this.size,4);n.uniform4fv(this.addr,t)}function nP(n,e){const t=El(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function iP(n,e){const t=El(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function rP(n,e){const t=El(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sP(n,e){n.uniform1iv(this.addr,e)}function oP(n,e){n.uniform2iv(this.addr,e)}function aP(n,e){n.uniform3iv(this.addr,e)}function lP(n,e){n.uniform4iv(this.addr,e)}function uP(n,e){n.uniform1uiv(this.addr,e)}function cP(n,e){n.uniform2uiv(this.addr,e)}function fP(n,e){n.uniform3uiv(this.addr,e)}function dP(n,e){n.uniform4uiv(this.addr,e)}function hP(n,e,t){const i=this.cache,r=e.length,s=Xd(t,r);un(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||FM,s[o])}function pP(n,e,t){const i=this.cache,r=e.length,s=Xd(t,r);un(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zM,s[o])}function mP(n,e,t){const i=this.cache,r=e.length,s=Xd(t,r);un(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||BM,s[o])}function gP(n,e,t){const i=this.cache,r=e.length,s=Xd(t,r);un(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||kM,s[o])}function _P(n){switch(n){case 5126:return Q2;case 35664:return J2;case 35665:return eP;case 35666:return tP;case 35674:return nP;case 35675:return iP;case 35676:return rP;case 5124:case 35670:return sP;case 35667:case 35671:return oP;case 35668:case 35672:return aP;case 35669:case 35673:return lP;case 5125:return uP;case 36294:return cP;case 36295:return fP;case 36296:return dP;case 35678:case 36198:case 36298:case 36306:case 35682:return hP;case 35679:case 36299:case 36307:return pP;case 35680:case 36300:case 36308:case 36293:return mP;case 36289:case 36303:case 36311:case 36292:return gP}}class vP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Z2(t.type)}}class xP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_P(t.type)}}class yP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Kh=/(\w+)(\])?(\[|\.)?/g;function Xv(n,e){n.seq.push(e),n.map[e.id]=e}function SP(n,e,t){const i=n.name,r=i.length;for(Kh.lastIndex=0;;){const s=Kh.exec(i),o=Kh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Xv(t,u===void 0?new vP(a,n,e):new xP(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new yP(a),Xv(t,d)),t=d}}}class bf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);SP(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function jv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const MP=37297;let EP=0;function wP(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function TP(n){const e=xt.getPrimaries(xt.workingColorSpace),t=xt.getPrimaries(n);let i;switch(e===t?i="":e===dd&&t===fd?i="LinearDisplayP3ToLinearSRGB":e===fd&&t===dd&&(i="LinearSRGBToLinearDisplayP3"),n){case Js:case Gd:return[i,"LinearTransferOETF"];case ir:case m_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Yv(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+wP(n.getShaderSource(e),o)}else return r}function AP(n,e){const t=TP(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function CP(n,e){let t;switch(e){case CA:t="Linear";break;case RA:t="Reinhard";break;case bA:t="Cineon";break;case PA:t="ACESFilmic";break;case DA:t="AgX";break;case NA:t="Neutral";break;case LA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jc=new W;function RP(){xt.getLuminanceCoefficients(jc);const n=jc.x.toFixed(4),e=jc.y.toFixed(4),t=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wl).join(`
`)}function PP(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function LP(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Wl(n){return n!==""}function $v(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vm(n){return n.replace(DP,IP)}const NP=new Map;function IP(n,e){let t=Je[e];if(t===void 0){const i=NP.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vm(t)}const UP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kv(n){return n.replace(UP,OP)}function OP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zv(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function FP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===JT?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fr&&(e="SHADOWMAP_TYPE_VSM"),e}function kP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case al:case ll:e="ENVMAP_TYPE_CUBE";break;case Vd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ll:e="ENVMAP_MODE_REFRACTION";break}return e}function BP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cM:e="ENVMAP_BLENDING_MULTIPLY";break;case TA:e="ENVMAP_BLENDING_MIX";break;case AA:e="ENVMAP_BLENDING_ADD";break}return e}function HP(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function VP(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=FP(t),u=kP(t),c=zP(t),d=BP(t),f=HP(t),p=bP(t),_=PP(s),g=r.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wl).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wl).join(`
`),h.length>0&&(h+=`
`)):(m=[Zv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wl).join(`
`),h=[Zv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zs?"#define TONE_MAPPING":"",t.toneMapping!==zs?Je.tonemapping_pars_fragment:"",t.toneMapping!==zs?CP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,AP("linearToOutputTexel",t.outputColorSpace),RP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wl).join(`
`)),o=Vm(o),o=$v(o,t),o=qv(o,t),a=Vm(a),a=$v(a,t),a=qv(a,t),o=Kv(o),a=Kv(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===fv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+m+o,S=v+h+a,C=jv(r,r.VERTEX_SHADER,x),T=jv(r,r.FRAGMENT_SHADER,S);r.attachShader(g,C),r.attachShader(g,T),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function y(D){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(g).trim(),z=r.getShaderInfoLog(C).trim(),Y=r.getShaderInfoLog(T).trim();let K=!0,j=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,C,T);else{const V=Yv(r,C,"vertex"),N=Yv(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+V+`
`+N)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(z===""||Y==="")&&(j=!1);j&&(D.diagnostics={runnable:K,programLog:F,vertexShader:{log:z,prefix:m},fragmentShader:{log:Y,prefix:h}})}r.deleteShader(C),r.deleteShader(T),R=new bf(r,g),E=LP(r,g)}let R;this.getUniforms=function(){return R===void 0&&y(this),R};let E;this.getAttributes=function(){return E===void 0&&y(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,MP)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=EP++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=T,this}let GP=0;class WP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new XP(e),t.set(e,i)),i}}class XP{constructor(e){this.id=GP++,this.code=e,this.usedTimes=0}}function jP(n,e,t,i,r,s,o){const a=new AM,l=new WP,u=new Set,c=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,M,D,F,z){const Y=F.fog,K=z.geometry,j=E.isMeshStandardMaterial?F.environment:null,V=(E.isMeshStandardMaterial?t:e).get(E.envMap||j),N=V&&V.mapping===Vd?V.image.height:null,Q=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const b=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,re=b!==void 0?b.length:0;let Te=0;K.morphAttributes.position!==void 0&&(Te=1),K.morphAttributes.normal!==void 0&&(Te=2),K.morphAttributes.color!==void 0&&(Te=3);let $e,$,ie,he;if(Q){const Ze=Jn[Q];$e=Ze.vertexShader,$=Ze.fragmentShader}else $e=E.vertexShader,$=E.fragmentShader,l.update(E),ie=l.getVertexShaderID(E),he=l.getFragmentShaderID(E);const fe=n.getRenderTarget(),De=z.isInstancedMesh===!0,le=z.isBatchedMesh===!0,ve=!!E.map,Ce=!!E.matcap,P=!!V,ce=!!E.aoMap,we=!!E.lightMap,We=!!E.bumpMap,Ee=!!E.normalMap,B=!!E.displacementMap,Re=!!E.emissiveMap,ke=!!E.metalnessMap,L=!!E.roughnessMap,w=E.anisotropy>0,G=E.clearcoat>0,ee=E.dispersion>0,J=E.iridescence>0,Z=E.sheen>0,pe=E.transmission>0,se=w&&!!E.anisotropyMap,me=G&&!!E.clearcoatMap,Ue=G&&!!E.clearcoatNormalMap,oe=G&&!!E.clearcoatRoughnessMap,ge=J&&!!E.iridescenceMap,Oe=J&&!!E.iridescenceThicknessMap,He=Z&&!!E.sheenColorMap,_e=Z&&!!E.sheenRoughnessMap,Be=!!E.specularMap,Ye=!!E.specularColorMap,ot=!!E.specularIntensityMap,U=pe&&!!E.transmissionMap,q=pe&&!!E.thicknessMap,te=!!E.gradientMap,ne=!!E.alphaMap,ae=E.alphaTest>0,Ae=!!E.alphaHash,qe=!!E.extensions;let yt=zs;E.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(yt=n.toneMapping);const lt={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:$e,fragmentShader:$,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:he,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:le,batchingColor:le&&z._colorsTexture!==null,instancing:De,instancingColor:De&&z.instanceColor!==null,instancingMorph:De&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Js,alphaToCoverage:!!E.alphaToCoverage,map:ve,matcap:Ce,envMap:P,envMapMode:P&&V.mapping,envMapCubeUVHeight:N,aoMap:ce,lightMap:we,bumpMap:We,normalMap:Ee,displacementMap:f&&B,emissiveMap:Re,normalMapObjectSpace:Ee&&E.normalMapType===kA,normalMapTangentSpace:Ee&&E.normalMapType===FA,metalnessMap:ke,roughnessMap:L,anisotropy:w,anisotropyMap:se,clearcoat:G,clearcoatMap:me,clearcoatNormalMap:Ue,clearcoatRoughnessMap:oe,dispersion:ee,iridescence:J,iridescenceMap:ge,iridescenceThicknessMap:Oe,sheen:Z,sheenColorMap:He,sheenRoughnessMap:_e,specularMap:Be,specularColorMap:Ye,specularIntensityMap:ot,transmission:pe,transmissionMap:U,thicknessMap:q,gradientMap:te,opaque:E.transparent===!1&&E.blending===Ga&&E.alphaToCoverage===!1,alphaMap:ne,alphaTest:ae,alphaHash:Ae,combine:E.combine,mapUv:ve&&g(E.map.channel),aoMapUv:ce&&g(E.aoMap.channel),lightMapUv:we&&g(E.lightMap.channel),bumpMapUv:We&&g(E.bumpMap.channel),normalMapUv:Ee&&g(E.normalMap.channel),displacementMapUv:B&&g(E.displacementMap.channel),emissiveMapUv:Re&&g(E.emissiveMap.channel),metalnessMapUv:ke&&g(E.metalnessMap.channel),roughnessMapUv:L&&g(E.roughnessMap.channel),anisotropyMapUv:se&&g(E.anisotropyMap.channel),clearcoatMapUv:me&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:He&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(E.sheenRoughnessMap.channel),specularMapUv:Be&&g(E.specularMap.channel),specularColorMapUv:Ye&&g(E.specularColorMap.channel),specularIntensityMapUv:ot&&g(E.specularIntensityMap.channel),transmissionMapUv:U&&g(E.transmissionMap.channel),thicknessMapUv:q&&g(E.thicknessMap.channel),alphaMapUv:ne&&g(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ee||w),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(ve||ne),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Te,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:yt,decodeVideoTexture:ve&&E.map.isVideoTexture===!0&&xt.getTransfer(E.map.colorSpace)===Nt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Vr,flipSided:E.side===si,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:qe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&E.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return lt.vertexUv1s=u.has(1),lt.vertexUv2s=u.has(2),lt.vertexUv3s=u.has(3),u.clear(),lt}function h(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)M.push(D),M.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(v(M,E),x(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function x(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),E.push(a.mask)}function S(E){const M=_[E.type];let D;if(M){const F=Jn[M];D=__.clone(F.uniforms)}else D=E.uniforms;return D}function C(E,M){let D;for(let F=0,z=c.length;F<z;F++){const Y=c[F];if(Y.cacheKey===M){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new VP(n,M,E,s),c.push(D)),D}function T(E){if(--E.usedTimes===0){const M=c.indexOf(E);c[M]=c[c.length-1],c.pop(),E.destroy()}}function y(E){l.remove(E)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:C,releaseProgram:T,releaseShaderCache:y,programs:c,dispose:R}}function YP(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function $P(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Jv(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,_,g,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=g,h.group=m),e++,h}function a(d,f,p,_,g,m){const h=o(d,f,p,_,g,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,_,g,m){const h=o(d,f,p,_,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(d,f){t.length>1&&t.sort(d||$P),i.length>1&&i.sort(f||Qv),r.length>1&&r.sort(f||Qv)}function c(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function qP(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Jv,n.set(i,[o])):r>=s.length?(o=new Jv,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function KP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new gt};break;case"SpotLight":t={position:new W,direction:new W,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function ZP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let QP=0;function JP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function eL(n){const e=new KP,t=ZP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new W);const r=new W,s=new tn,o=new tn;function a(u){let c=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,g=0,m=0,h=0,v=0,x=0,S=0,C=0,T=0,y=0;u.sort(JP);for(let E=0,M=u.length;E<M;E++){const D=u[E],F=D.color,z=D.intensity,Y=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)c+=F.r*z,d+=F.g*z,f+=F.b*z;else if(D.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(D.sh.coefficients[j],z);y++}else if(D.isDirectionalLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const V=D.shadow,N=t.get(D);N.shadowIntensity=V.intensity,N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize=V.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=D.shadow.matrix,v++}i.directional[p]=j,p++}else if(D.isSpotLight){const j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(F).multiplyScalar(z),j.distance=Y,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,i.spot[g]=j;const V=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,V.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[g]=V.matrix,D.castShadow){const N=t.get(D);N.shadowIntensity=V.intensity,N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize=V.mapSize,i.spotShadow[g]=N,i.spotShadowMap[g]=K,S++}g++}else if(D.isRectAreaLight){const j=e.get(D);j.color.copy(F).multiplyScalar(z),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=j,m++}else if(D.isPointLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){const V=D.shadow,N=t.get(D);N.shadowIntensity=V.intensity,N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize=V.mapSize,N.shadowCameraNear=V.camera.near,N.shadowCameraFar=V.camera.far,i.pointShadow[_]=N,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=D.shadow.matrix,x++}i.point[_]=j,_++}else if(D.isHemisphereLight){const j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(z),j.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[h]=j,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==h||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==S||R.numSpotMaps!==C||R.numLightProbes!==y)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=y,R.directionalLength=p,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=h,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=S,R.numSpotMaps=C,R.numLightProbes=y,i.version=QP++)}function l(u,c){let d=0,f=0,p=0,_=0,g=0;const m=c.matrixWorldInverse;for(let h=0,v=u.length;h<v;h++){const x=u[h];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function ex(n){const e=new eL(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function tL(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ex(n),e.set(r,[a])):s>=o.length?(a=new ex(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class nL extends Wd{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=UA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iL extends Wd{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sL=`uniform sampler2D shadow_pass;
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
}`;function oL(n,e,t){let i=new IM;const r=new ft,s=new ft,o=new Ht,a=new nL({depthPacking:OA}),l=new iL,u={},c=t.maxTextureSize,d={[Xs]:si,[si]:Xs,[Vr]:Vr},f=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:rL,fragmentShader:sL}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new as;_.setAttribute("position",new fr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new lr(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uM;let h=this.type;this.render=function(T,y,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ks),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=h!==Fr&&this.type===Fr,Y=h===Fr&&this.type!==Fr;for(let K=0,j=T.length;K<j;K++){const V=T[K],N=V.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const Q=N.getFrameExtents();if(r.multiply(Q),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/Q.x),r.x=s.x*Q.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/Q.y),r.y=s.y*Q.y,N.mapSize.y=s.y)),N.map===null||z===!0||Y===!0){const re=this.type!==Fr?{minFilter:Vi,magFilter:Vi}:{};N.map!==null&&N.map.dispose(),N.map=new Go(r.x,r.y,re),N.map.texture.name=V.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const b=N.getViewportCount();for(let re=0;re<b;re++){const Te=N.getViewport(re);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),F.viewport(o),N.updateMatrices(V,re),i=N.getFrustum(),S(y,R,N.camera,V,this.type)}N.isPointLightShadow!==!0&&this.type===Fr&&v(N,R),N.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,D)};function v(T,y){const R=e.update(g);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Go(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(y,null,R,f,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(y,null,R,p,g,null)}function x(T,y,R,E){let M=null;const D=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)M=D;else if(M=R.isPointLight===!0?l:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const F=M.uuid,z=y.uuid;let Y=u[F];Y===void 0&&(Y={},u[F]=Y);let K=Y[z];K===void 0&&(K=M.clone(),Y[z]=K,y.addEventListener("dispose",C)),M=K}if(M.visible=y.visible,M.wireframe=y.wireframe,E===Fr?M.side=y.shadowSide!==null?y.shadowSide:y.side:M.side=y.shadowSide!==null?y.shadowSide:d[y.side],M.alphaMap=y.alphaMap,M.alphaTest=y.alphaTest,M.map=y.map,M.clipShadows=y.clipShadows,M.clippingPlanes=y.clippingPlanes,M.clipIntersection=y.clipIntersection,M.displacementMap=y.displacementMap,M.displacementScale=y.displacementScale,M.displacementBias=y.displacementBias,M.wireframeLinewidth=y.wireframeLinewidth,M.linewidth=y.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=n.properties.get(M);F.light=R}return M}function S(T,y,R,E,M){if(T.visible===!1)return;if(T.layers.test(y.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Fr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const z=e.update(T),Y=T.material;if(Array.isArray(Y)){const K=z.groups;for(let j=0,V=K.length;j<V;j++){const N=K[j],Q=Y[N.materialIndex];if(Q&&Q.visible){const b=x(T,Q,E,M);T.onBeforeShadow(n,T,y,R,z,b,N),n.renderBufferDirect(R,null,z,b,T,N),T.onAfterShadow(n,T,y,R,z,b,N)}}}else if(Y.visible){const K=x(T,Y,E,M);T.onBeforeShadow(n,T,y,R,z,K,null),n.renderBufferDirect(R,null,z,K,T,null),T.onAfterShadow(n,T,y,R,z,K,null)}}const F=T.children;for(let z=0,Y=F.length;z<Y;z++)S(F[z],y,R,E,M)}function C(T){T.target.removeEventListener("dispose",C);for(const R in u){const E=u[R],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function aL(n){function e(){let U=!1;const q=new Ht;let te=null;const ne=new Ht(0,0,0,0);return{setMask:function(ae){te!==ae&&!U&&(n.colorMask(ae,ae,ae,ae),te=ae)},setLocked:function(ae){U=ae},setClear:function(ae,Ae,qe,yt,lt){lt===!0&&(ae*=yt,Ae*=yt,qe*=yt),q.set(ae,Ae,qe,yt),ne.equals(q)===!1&&(n.clearColor(ae,Ae,qe,yt),ne.copy(q))},reset:function(){U=!1,te=null,ne.set(-1,0,0,0)}}}function t(){let U=!1,q=null,te=null,ne=null;return{setTest:function(ae){ae?he(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(ae){q!==ae&&!U&&(n.depthMask(ae),q=ae)},setFunc:function(ae){if(te!==ae){switch(ae){case vA:n.depthFunc(n.NEVER);break;case xA:n.depthFunc(n.ALWAYS);break;case yA:n.depthFunc(n.LESS);break;case ud:n.depthFunc(n.LEQUAL);break;case SA:n.depthFunc(n.EQUAL);break;case MA:n.depthFunc(n.GEQUAL);break;case EA:n.depthFunc(n.GREATER);break;case wA:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=ae}},setLocked:function(ae){U=ae},setClear:function(ae){ne!==ae&&(n.clearDepth(ae),ne=ae)},reset:function(){U=!1,q=null,te=null,ne=null}}}function i(){let U=!1,q=null,te=null,ne=null,ae=null,Ae=null,qe=null,yt=null,lt=null;return{setTest:function(Ze){U||(Ze?he(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(Ze){q!==Ze&&!U&&(n.stencilMask(Ze),q=Ze)},setFunc:function(Ze,Ge,Fe){(te!==Ze||ne!==Ge||ae!==Fe)&&(n.stencilFunc(Ze,Ge,Fe),te=Ze,ne=Ge,ae=Fe)},setOp:function(Ze,Ge,Fe){(Ae!==Ze||qe!==Ge||yt!==Fe)&&(n.stencilOp(Ze,Ge,Fe),Ae=Ze,qe=Ge,yt=Fe)},setLocked:function(Ze){U=Ze},setClear:function(Ze){lt!==Ze&&(n.clearStencil(Ze),lt=Ze)},reset:function(){U=!1,q=null,te=null,ne=null,ae=null,Ae=null,qe=null,yt=null,lt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,h=null,v=null,x=null,S=null,C=null,T=new gt(0,0,0),y=0,R=!1,E=null,M=null,D=null,F=null,z=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,j=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),K=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),K=j>=2);let N=null,Q={};const b=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),Te=new Ht().fromArray(b),$e=new Ht().fromArray(re);function $(U,q,te,ne){const ae=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(U,Ae),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<te;qe++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(q,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(q+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return Ae}const ie={};ie[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(n.DEPTH_TEST),s.setFunc(ud),We(!1),Ee(av),he(n.CULL_FACE),ce(ks);function he(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function fe(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function De(U,q){return c[U]!==q?(n.bindFramebuffer(U,q),c[U]=q,U===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=q),U===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=q),!0):!1}function le(U,q){let te=f,ne=!1;if(U){te=d.get(q),te===void 0&&(te=[],d.set(q,te));const ae=U.textures;if(te.length!==ae.length||te[0]!==n.COLOR_ATTACHMENT0){for(let Ae=0,qe=ae.length;Ae<qe;Ae++)te[Ae]=n.COLOR_ATTACHMENT0+Ae;te.length=ae.length,ne=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ne=!0);ne&&n.drawBuffers(te)}function ve(U){return p!==U?(n.useProgram(U),p=U,!0):!1}const Ce={[vo]:n.FUNC_ADD,[tA]:n.FUNC_SUBTRACT,[nA]:n.FUNC_REVERSE_SUBTRACT};Ce[iA]=n.MIN,Ce[rA]=n.MAX;const P={[sA]:n.ZERO,[oA]:n.ONE,[aA]:n.SRC_COLOR,[um]:n.SRC_ALPHA,[hA]:n.SRC_ALPHA_SATURATE,[fA]:n.DST_COLOR,[uA]:n.DST_ALPHA,[lA]:n.ONE_MINUS_SRC_COLOR,[cm]:n.ONE_MINUS_SRC_ALPHA,[dA]:n.ONE_MINUS_DST_COLOR,[cA]:n.ONE_MINUS_DST_ALPHA,[pA]:n.CONSTANT_COLOR,[mA]:n.ONE_MINUS_CONSTANT_COLOR,[gA]:n.CONSTANT_ALPHA,[_A]:n.ONE_MINUS_CONSTANT_ALPHA};function ce(U,q,te,ne,ae,Ae,qe,yt,lt,Ze){if(U===ks){_===!0&&(fe(n.BLEND),_=!1);return}if(_===!1&&(he(n.BLEND),_=!0),U!==eA){if(U!==g||Ze!==R){if((m!==vo||x!==vo)&&(n.blendEquation(n.FUNC_ADD),m=vo,x=vo),Ze)switch(U){case Ga:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lm:n.blendFunc(n.ONE,n.ONE);break;case lv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ga:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lm:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case lv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}h=null,v=null,S=null,C=null,T.set(0,0,0),y=0,g=U,R=Ze}return}ae=ae||q,Ae=Ae||te,qe=qe||ne,(q!==m||ae!==x)&&(n.blendEquationSeparate(Ce[q],Ce[ae]),m=q,x=ae),(te!==h||ne!==v||Ae!==S||qe!==C)&&(n.blendFuncSeparate(P[te],P[ne],P[Ae],P[qe]),h=te,v=ne,S=Ae,C=qe),(yt.equals(T)===!1||lt!==y)&&(n.blendColor(yt.r,yt.g,yt.b,lt),T.copy(yt),y=lt),g=U,R=!1}function we(U,q){U.side===Vr?fe(n.CULL_FACE):he(n.CULL_FACE);let te=U.side===si;q&&(te=!te),We(te),U.blending===Ga&&U.transparent===!1?ce(ks):ce(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const ne=U.stencilWrite;o.setTest(ne),ne&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Re(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(U){E!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),E=U)}function Ee(U){U!==ZT?(he(n.CULL_FACE),U!==M&&(U===av?n.cullFace(n.BACK):U===QT?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),M=U}function B(U){U!==D&&(K&&n.lineWidth(U),D=U)}function Re(U,q,te){U?(he(n.POLYGON_OFFSET_FILL),(F!==q||z!==te)&&(n.polygonOffset(q,te),F=q,z=te)):fe(n.POLYGON_OFFSET_FILL)}function ke(U){U?he(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function L(U){U===void 0&&(U=n.TEXTURE0+Y-1),N!==U&&(n.activeTexture(U),N=U)}function w(U,q,te){te===void 0&&(N===null?te=n.TEXTURE0+Y-1:te=N);let ne=Q[te];ne===void 0&&(ne={type:void 0,texture:void 0},Q[te]=ne),(ne.type!==U||ne.texture!==q)&&(N!==te&&(n.activeTexture(te),N=te),n.bindTexture(U,q||ie[U]),ne.type=U,ne.texture=q)}function G(){const U=Q[N];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(U){Te.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Te.copy(U))}function _e(U){$e.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),$e.copy(U))}function Be(U,q){let te=l.get(q);te===void 0&&(te=new WeakMap,l.set(q,te));let ne=te.get(U);ne===void 0&&(ne=n.getUniformBlockIndex(q,U.name),te.set(U,ne))}function Ye(U,q){const ne=l.get(q).get(U);a.get(q)!==ne&&(n.uniformBlockBinding(q,ne,U.__bindingPointIndex),a.set(q,ne))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},N=null,Q={},c={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,h=null,v=null,x=null,S=null,C=null,T=new gt(0,0,0),y=0,R=!1,E=null,M=null,D=null,F=null,z=null,Te.set(0,0,n.canvas.width,n.canvas.height),$e.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:he,disable:fe,bindFramebuffer:De,drawBuffers:le,useProgram:ve,setBlending:ce,setMaterial:we,setFlipSided:We,setCullFace:Ee,setLineWidth:B,setPolygonOffset:Re,setScissorTest:ke,activeTexture:L,bindTexture:w,unbindTexture:G,compressedTexImage2D:ee,compressedTexImage3D:J,texImage2D:ge,texImage3D:Oe,updateUBOMapping:Be,uniformBlockBinding:Ye,texStorage2D:Ue,texStorage3D:oe,texSubImage2D:Z,texSubImage3D:pe,compressedTexSubImage2D:se,compressedTexSubImage3D:me,scissor:He,viewport:_e,reset:ot}}function tx(n,e,t,i){const r=lL(i);switch(t){case mM:return n*e;case _M:return n*e;case vM:return n*e*2;case xM:return n*e/r.components*r.byteLength;case d_:return n*e/r.components*r.byteLength;case yM:return n*e*2/r.components*r.byteLength;case h_:return n*e*2/r.components*r.byteLength;case gM:return n*e*3/r.components*r.byteLength;case ar:return n*e*4/r.components*r.byteLength;case p_:return n*e*4/r.components*r.byteLength;case wf:case Tf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Af:case Cf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gm:case vm:return Math.max(n,16)*Math.max(e,8)/4;case mm:case _m:return Math.max(n,8)*Math.max(e,8)/2;case xm:case ym:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Em:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case wm:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Tm:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Am:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Cm:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Rm:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bm:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Pm:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Lm:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Dm:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Nm:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Im:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Um:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Rf:case Om:case Fm:return Math.ceil(n/4)*Math.ceil(e/4)*16;case SM:case km:return Math.ceil(n/4)*Math.ceil(e/4)*8;case zm:case Bm:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lL(n){switch(n){case ns:case dM:return{byteLength:1,components:1};case zu:case hM:case ic:return{byteLength:2,components:1};case c_:case f_:return{byteLength:2,components:4};case Vo:case u_:case jr:return{byteLength:4,components:1};case pM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function uL(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ft,c=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,w){return p?new OffscreenCanvas(L,w):Hu("canvas")}function g(L,w,G){let ee=1;const J=ke(L);if((J.width>G||J.height>G)&&(ee=G/Math.max(J.width,J.height)),ee<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Z=Math.floor(ee*J.width),pe=Math.floor(ee*J.height);d===void 0&&(d=_(Z,pe));const se=w?_(Z,pe):d;return se.width=Z,se.height=pe,se.getContext("2d").drawImage(L,0,0,Z,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+pe+")."),se}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==Vi&&L.minFilter!==sr}function h(L){n.generateMipmap(L)}function v(L,w,G,ee,J=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Z=w;if(w===n.RED&&(G===n.FLOAT&&(Z=n.R32F),G===n.HALF_FLOAT&&(Z=n.R16F),G===n.UNSIGNED_BYTE&&(Z=n.R8)),w===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.R8UI),G===n.UNSIGNED_SHORT&&(Z=n.R16UI),G===n.UNSIGNED_INT&&(Z=n.R32UI),G===n.BYTE&&(Z=n.R8I),G===n.SHORT&&(Z=n.R16I),G===n.INT&&(Z=n.R32I)),w===n.RG&&(G===n.FLOAT&&(Z=n.RG32F),G===n.HALF_FLOAT&&(Z=n.RG16F),G===n.UNSIGNED_BYTE&&(Z=n.RG8)),w===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.RG8UI),G===n.UNSIGNED_SHORT&&(Z=n.RG16UI),G===n.UNSIGNED_INT&&(Z=n.RG32UI),G===n.BYTE&&(Z=n.RG8I),G===n.SHORT&&(Z=n.RG16I),G===n.INT&&(Z=n.RG32I)),w===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),w===n.RGBA){const pe=J?cd:xt.getTransfer(ee);G===n.FLOAT&&(Z=n.RGBA32F),G===n.HALF_FLOAT&&(Z=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Z=pe===Nt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(L,w){let G;return L?w===null||w===Vo||w===ul?G=n.DEPTH24_STENCIL8:w===jr?G=n.DEPTH32F_STENCIL8:w===zu&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Vo||w===ul?G=n.DEPTH_COMPONENT24:w===jr?G=n.DEPTH_COMPONENT32F:w===zu&&(G=n.DEPTH_COMPONENT16),G}function S(L,w){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Vi&&L.minFilter!==sr?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function C(L){const w=L.target;w.removeEventListener("dispose",C),y(w),w.isVideoTexture&&c.delete(w)}function T(L){const w=L.target;w.removeEventListener("dispose",T),E(w)}function y(L){const w=i.get(L);if(w.__webglInit===void 0)return;const G=L.source,ee=f.get(G);if(ee){const J=ee[w.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(L),Object.keys(ee).length===0&&f.delete(G)}i.remove(L)}function R(L){const w=i.get(L);n.deleteTexture(w.__webglTexture);const G=L.source,ee=f.get(G);delete ee[w.__cacheKey],o.memory.textures--}function E(L){const w=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(w.__webglFramebuffer[ee]))for(let J=0;J<w.__webglFramebuffer[ee].length;J++)n.deleteFramebuffer(w.__webglFramebuffer[ee][J]);else n.deleteFramebuffer(w.__webglFramebuffer[ee]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let ee=0;ee<w.__webglFramebuffer.length;ee++)n.deleteFramebuffer(w.__webglFramebuffer[ee]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ee=0;ee<w.__webglColorRenderbuffer.length;ee++)w.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ee]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=L.textures;for(let ee=0,J=G.length;ee<J;ee++){const Z=i.get(G[ee]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(G[ee])}i.remove(L)}let M=0;function D(){M=0}function F(){const L=M;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),M+=1,L}function z(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function Y(L,w){const G=i.get(L);if(L.isVideoTexture&&B(L),L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){const ee=L.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$e(G,L,w);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+w)}function K(L,w){const G=i.get(L);if(L.version>0&&G.__version!==L.version){$e(G,L,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+w)}function j(L,w){const G=i.get(L);if(L.version>0&&G.__version!==L.version){$e(G,L,w);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+w)}function V(L,w){const G=i.get(L);if(L.version>0&&G.__version!==L.version){$(G,L,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+w)}const N={[hm]:n.REPEAT,[Eo]:n.CLAMP_TO_EDGE,[pm]:n.MIRRORED_REPEAT},Q={[Vi]:n.NEAREST,[IA]:n.NEAREST_MIPMAP_NEAREST,[Tc]:n.NEAREST_MIPMAP_LINEAR,[sr]:n.LINEAR,[Ah]:n.LINEAR_MIPMAP_NEAREST,[wo]:n.LINEAR_MIPMAP_LINEAR},b={[zA]:n.NEVER,[XA]:n.ALWAYS,[BA]:n.LESS,[MM]:n.LEQUAL,[HA]:n.EQUAL,[WA]:n.GEQUAL,[VA]:n.GREATER,[GA]:n.NOTEQUAL};function re(L,w){if(w.type===jr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===sr||w.magFilter===Ah||w.magFilter===Tc||w.magFilter===wo||w.minFilter===sr||w.minFilter===Ah||w.minFilter===Tc||w.minFilter===wo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,N[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,N[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,N[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,Q[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,Q[w.minFilter]),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,b[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Vi||w.minFilter!==Tc&&w.minFilter!==wo||w.type===jr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Te(L,w){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",C));const ee=w.source;let J=f.get(ee);J===void 0&&(J={},f.set(ee,J));const Z=z(w);if(Z!==L.__cacheKey){J[Z]===void 0&&(J[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),J[Z].usedTimes++;const pe=J[L.__cacheKey];pe!==void 0&&(J[L.__cacheKey].usedTimes--,pe.usedTimes===0&&R(w)),L.__cacheKey=Z,L.__webglTexture=J[Z].texture}return G}function $e(L,w,G){let ee=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=n.TEXTURE_3D);const J=Te(L,w),Z=w.source;t.bindTexture(ee,L.__webglTexture,n.TEXTURE0+G);const pe=i.get(Z);if(Z.version!==pe.__version||J===!0){t.activeTexture(n.TEXTURE0+G);const se=xt.getPrimaries(xt.workingColorSpace),me=w.colorSpace===Ss?null:xt.getPrimaries(w.colorSpace),Ue=w.colorSpace===Ss||se===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let oe=g(w.image,!1,r.maxTextureSize);oe=Re(w,oe);const ge=s.convert(w.format,w.colorSpace),Oe=s.convert(w.type);let He=v(w.internalFormat,ge,Oe,w.colorSpace,w.isVideoTexture);re(ee,w);let _e;const Be=w.mipmaps,Ye=w.isVideoTexture!==!0,ot=pe.__version===void 0||J===!0,U=Z.dataReady,q=S(w,oe);if(w.isDepthTexture)He=x(w.format===cl,w.type),ot&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,He,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,He,oe.width,oe.height,0,ge,Oe,null));else if(w.isDataTexture)if(Be.length>0){Ye&&ot&&t.texStorage2D(n.TEXTURE_2D,q,He,Be[0].width,Be[0].height);for(let te=0,ne=Be.length;te<ne;te++)_e=Be[te],Ye?U&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,_e.width,_e.height,ge,Oe,_e.data):t.texImage2D(n.TEXTURE_2D,te,He,_e.width,_e.height,0,ge,Oe,_e.data);w.generateMipmaps=!1}else Ye?(ot&&t.texStorage2D(n.TEXTURE_2D,q,He,oe.width,oe.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,ge,Oe,oe.data)):t.texImage2D(n.TEXTURE_2D,0,He,oe.width,oe.height,0,ge,Oe,oe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ye&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,q,He,Be[0].width,Be[0].height,oe.depth);for(let te=0,ne=Be.length;te<ne;te++)if(_e=Be[te],w.format!==ar)if(ge!==null)if(Ye){if(U)if(w.layerUpdates.size>0){const ae=tx(_e.width,_e.height,w.format,w.type);for(const Ae of w.layerUpdates){const qe=_e.data.subarray(Ae*ae/_e.data.BYTES_PER_ELEMENT,(Ae+1)*ae/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Ae,_e.width,_e.height,1,ge,qe,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,_e.width,_e.height,oe.depth,ge,_e.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,He,_e.width,_e.height,oe.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,_e.width,_e.height,oe.depth,ge,Oe,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,He,_e.width,_e.height,oe.depth,0,ge,Oe,_e.data)}else{Ye&&ot&&t.texStorage2D(n.TEXTURE_2D,q,He,Be[0].width,Be[0].height);for(let te=0,ne=Be.length;te<ne;te++)_e=Be[te],w.format!==ar?ge!==null?Ye?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,te,He,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?U&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,_e.width,_e.height,ge,Oe,_e.data):t.texImage2D(n.TEXTURE_2D,te,He,_e.width,_e.height,0,ge,Oe,_e.data)}else if(w.isDataArrayTexture)if(Ye){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,q,He,oe.width,oe.height,oe.depth),U)if(w.layerUpdates.size>0){const te=tx(oe.width,oe.height,w.format,w.type);for(const ne of w.layerUpdates){const ae=oe.data.subarray(ne*te/oe.data.BYTES_PER_ELEMENT,(ne+1)*te/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,oe.width,oe.height,1,ge,Oe,ae)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ge,Oe,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,He,oe.width,oe.height,oe.depth,0,ge,Oe,oe.data);else if(w.isData3DTexture)Ye?(ot&&t.texStorage3D(n.TEXTURE_3D,q,He,oe.width,oe.height,oe.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ge,Oe,oe.data)):t.texImage3D(n.TEXTURE_3D,0,He,oe.width,oe.height,oe.depth,0,ge,Oe,oe.data);else if(w.isFramebufferTexture){if(ot)if(Ye)t.texStorage2D(n.TEXTURE_2D,q,He,oe.width,oe.height);else{let te=oe.width,ne=oe.height;for(let ae=0;ae<q;ae++)t.texImage2D(n.TEXTURE_2D,ae,He,te,ne,0,ge,Oe,null),te>>=1,ne>>=1}}else if(Be.length>0){if(Ye&&ot){const te=ke(Be[0]);t.texStorage2D(n.TEXTURE_2D,q,He,te.width,te.height)}for(let te=0,ne=Be.length;te<ne;te++)_e=Be[te],Ye?U&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ge,Oe,_e):t.texImage2D(n.TEXTURE_2D,te,He,ge,Oe,_e);w.generateMipmaps=!1}else if(Ye){if(ot){const te=ke(oe);t.texStorage2D(n.TEXTURE_2D,q,He,te.width,te.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Oe,oe)}else t.texImage2D(n.TEXTURE_2D,0,He,ge,Oe,oe);m(w)&&h(ee),pe.__version=Z.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function $(L,w,G){if(w.image.length!==6)return;const ee=Te(L,w),J=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+G);const Z=i.get(J);if(J.version!==Z.__version||ee===!0){t.activeTexture(n.TEXTURE0+G);const pe=xt.getPrimaries(xt.workingColorSpace),se=w.colorSpace===Ss?null:xt.getPrimaries(w.colorSpace),me=w.colorSpace===Ss||pe===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ue=w.isCompressedTexture||w.image[0].isCompressedTexture,oe=w.image[0]&&w.image[0].isDataTexture,ge=[];for(let ne=0;ne<6;ne++)!Ue&&!oe?ge[ne]=g(w.image[ne],!0,r.maxCubemapSize):ge[ne]=oe?w.image[ne].image:w.image[ne],ge[ne]=Re(w,ge[ne]);const Oe=ge[0],He=s.convert(w.format,w.colorSpace),_e=s.convert(w.type),Be=v(w.internalFormat,He,_e,w.colorSpace),Ye=w.isVideoTexture!==!0,ot=Z.__version===void 0||ee===!0,U=J.dataReady;let q=S(w,Oe);re(n.TEXTURE_CUBE_MAP,w);let te;if(Ue){Ye&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,q,Be,Oe.width,Oe.height);for(let ne=0;ne<6;ne++){te=ge[ne].mipmaps;for(let ae=0;ae<te.length;ae++){const Ae=te[ae];w.format!==ar?He!==null?Ye?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ae,0,0,Ae.width,Ae.height,He,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ae,Be,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ae,0,0,Ae.width,Ae.height,He,_e,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ae,Be,Ae.width,Ae.height,0,He,_e,Ae.data)}}}else{if(te=w.mipmaps,Ye&&ot){te.length>0&&q++;const ne=ke(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,q,Be,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(oe){Ye?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ge[ne].width,ge[ne].height,He,_e,ge[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Be,ge[ne].width,ge[ne].height,0,He,_e,ge[ne].data);for(let ae=0;ae<te.length;ae++){const qe=te[ae].image[ne].image;Ye?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ae+1,0,0,qe.width,qe.height,He,_e,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ae+1,Be,qe.width,qe.height,0,He,_e,qe.data)}}else{Ye?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,He,_e,ge[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Be,He,_e,ge[ne]);for(let ae=0;ae<te.length;ae++){const Ae=te[ae];Ye?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ae+1,0,0,He,_e,Ae.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ae+1,Be,He,_e,Ae.image[ne])}}}m(w)&&h(n.TEXTURE_CUBE_MAP),Z.__version=J.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ie(L,w,G,ee,J,Z){const pe=s.convert(G.format,G.colorSpace),se=s.convert(G.type),me=v(G.internalFormat,pe,se,G.colorSpace);if(!i.get(w).__hasExternalTextures){const oe=Math.max(1,w.width>>Z),ge=Math.max(1,w.height>>Z);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,Z,me,oe,ge,w.depth,0,pe,se,null):t.texImage2D(J,Z,me,oe,ge,0,pe,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Ee(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,J,i.get(G).__webglTexture,0,We(w)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,J,i.get(G).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(L,w,G){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer){const ee=w.depthTexture,J=ee&&ee.isDepthTexture?ee.type:null,Z=x(w.stencilBuffer,J),pe=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=We(w);Ee(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,Z,w.width,w.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,Z,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Z,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,L)}else{const ee=w.textures;for(let J=0;J<ee.length;J++){const Z=ee[J],pe=s.convert(Z.format,Z.colorSpace),se=s.convert(Z.type),me=v(Z.internalFormat,pe,se,Z.colorSpace),Ue=We(w);G&&Ee(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,me,w.width,w.height):Ee(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,me,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,me,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Y(w.depthTexture,0);const ee=i.get(w.depthTexture).__webglTexture,J=We(w);if(w.depthTexture.format===Wa)Ee(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(w.depthTexture.format===cl)Ee(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function De(L){const w=i.get(L),G=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const ee=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ee){const J=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ee.removeEventListener("dispose",J)};ee.addEventListener("dispose",J),w.__depthDisposeCallback=J}w.__boundDepthTexture=ee}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");fe(w.__webglFramebuffer,L)}else if(G){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]===void 0)w.__webglDepthbuffer[ee]=n.createRenderbuffer(),he(w.__webglDepthbuffer[ee],L,!1);else{const J=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),he(w.__webglDepthbuffer,L,!1);else{const ee=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(L,w,G){const ee=i.get(L);w!==void 0&&ie(ee.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&De(L)}function ve(L){const w=L.texture,G=i.get(L),ee=i.get(w);L.addEventListener("dispose",T);const J=L.textures,Z=L.isWebGLCubeRenderTarget===!0,pe=J.length>1;if(pe||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=w.version,o.memory.textures++),Z){G.__webglFramebuffer=[];for(let se=0;se<6;se++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[se]=[];for(let me=0;me<w.mipmaps.length;me++)G.__webglFramebuffer[se][me]=n.createFramebuffer()}else G.__webglFramebuffer[se]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let se=0;se<w.mipmaps.length;se++)G.__webglFramebuffer[se]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(pe)for(let se=0,me=J.length;se<me;se++){const Ue=i.get(J[se]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&Ee(L)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let se=0;se<J.length;se++){const me=J[se];G.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[se]);const Ue=s.convert(me.format,me.colorSpace),oe=s.convert(me.type),ge=v(me.internalFormat,Ue,oe,me.colorSpace,L.isXRRenderTarget===!0),Oe=We(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,ge,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,G.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),he(G.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),re(n.TEXTURE_CUBE_MAP,w);for(let se=0;se<6;se++)if(w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)ie(G.__webglFramebuffer[se][me],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me);else ie(G.__webglFramebuffer[se],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(w)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let se=0,me=J.length;se<me;se++){const Ue=J[se],oe=i.get(Ue);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),re(n.TEXTURE_2D,Ue),ie(G.__webglFramebuffer,L,Ue,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,0),m(Ue)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(se=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,ee.__webglTexture),re(se,w),w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)ie(G.__webglFramebuffer[me],L,w,n.COLOR_ATTACHMENT0,se,me);else ie(G.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,se,0);m(w)&&h(se),t.unbindTexture()}L.depthBuffer&&De(L)}function Ce(L){const w=L.textures;for(let G=0,ee=w.length;G<ee;G++){const J=w[G];if(m(J)){const Z=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,pe=i.get(J).__webglTexture;t.bindTexture(Z,pe),h(Z),t.unbindTexture()}}}const P=[],ce=[];function we(L){if(L.samples>0){if(Ee(L)===!1){const w=L.textures,G=L.width,ee=L.height;let J=n.COLOR_BUFFER_BIT;const Z=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(L),se=w.length>1;if(se)for(let me=0;me<w.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let me=0;me<w.length;me++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const Ue=i.get(w[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,G,ee,0,0,G,ee,J,n.NEAREST),l===!0&&(P.length=0,ce.length=0,P.push(n.COLOR_ATTACHMENT0+me),L.depthBuffer&&L.resolveDepthBuffer===!1&&(P.push(Z),ce.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ce)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let me=0;me<w.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const Ue=i.get(w[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const w=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function We(L){return Math.min(r.maxSamples,L.samples)}function Ee(L){const w=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function B(L){const w=o.render.frame;c.get(L)!==w&&(c.set(L,w),L.update())}function Re(L,w){const G=L.colorSpace,ee=L.format,J=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==Js&&G!==Ss&&(xt.getTransfer(G)===Nt?(ee!==ar||J!==ns)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function ke(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.setTexture2D=Y,this.setTexture2DArray=K,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=le,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Ee}function cL(n,e){function t(i,r=Ss){let s;const o=xt.getTransfer(r);if(i===ns)return n.UNSIGNED_BYTE;if(i===c_)return n.UNSIGNED_SHORT_4_4_4_4;if(i===f_)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dM)return n.BYTE;if(i===hM)return n.SHORT;if(i===zu)return n.UNSIGNED_SHORT;if(i===u_)return n.INT;if(i===Vo)return n.UNSIGNED_INT;if(i===jr)return n.FLOAT;if(i===ic)return n.HALF_FLOAT;if(i===mM)return n.ALPHA;if(i===gM)return n.RGB;if(i===ar)return n.RGBA;if(i===_M)return n.LUMINANCE;if(i===vM)return n.LUMINANCE_ALPHA;if(i===Wa)return n.DEPTH_COMPONENT;if(i===cl)return n.DEPTH_STENCIL;if(i===xM)return n.RED;if(i===d_)return n.RED_INTEGER;if(i===yM)return n.RG;if(i===h_)return n.RG_INTEGER;if(i===p_)return n.RGBA_INTEGER;if(i===wf||i===Tf||i===Af||i===Cf)if(o===Nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===wf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Af)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===wf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Af)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mm||i===gm||i===_m||i===vm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===mm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_m)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xm||i===ym||i===Sm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xm||i===ym)return o===Nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Sm)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mm||i===Em||i===wm||i===Tm||i===Am||i===Cm||i===Rm||i===bm||i===Pm||i===Lm||i===Dm||i===Nm||i===Im||i===Um)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Mm)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Em)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wm)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tm)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Am)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cm)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rm)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bm)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pm)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lm)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dm)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nm)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Im)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Um)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rf||i===Om||i===Fm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Rf)return o===Nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Om)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fm)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===SM||i===km||i===zm||i===Bm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Rf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===km)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ul?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class fL extends ki{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yc extends Ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dL={type:"move"};class Zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),h=this._getHandJoint(u,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dL)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Yc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const hL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new On,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Pr({vertexShader:hL,fragmentShader:pL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lr(new dl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gL extends Ml{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,_=null;const g=new mL,m=t.getContextAttributes();let h=null,v=null;const x=[],S=[],C=new ft;let T=null;const y=new ki;y.layers.enable(1),y.viewport=new Ht;const R=new ki;R.layers.enable(2),R.viewport=new Ht;const E=[y,R],M=new fL;M.layers.enable(1),M.layers.enable(2);let D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=x[$];return ie===void 0&&(ie=new Zh,x[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=x[$];return ie===void 0&&(ie=new Zh,x[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=x[$];return ie===void 0&&(ie=new Zh,x[$]=ie),ie.getHandSpace()};function z($){const ie=S.indexOf($.inputSource);if(ie===-1)return;const he=x[ie];he!==void 0&&(he.update($.inputSource,$.frame,u||o),he.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",K);for(let $=0;$<x.length;$++){const ie=S[$];ie!==null&&(S[$]=null,x[$].disconnect(ie))}D=null,F=null,g.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,v=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Go(p.framebufferWidth,p.framebufferHeight,{format:ar,type:ns,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,he=null,fe=null;m.depth&&(fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?cl:Wa,he=m.stencil?ul:Vo);const De={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Go(f.textureWidth,f.textureHeight,{format:ar,type:ns,depthTexture:new OM(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K($){for(let ie=0;ie<$.removed.length;ie++){const he=$.removed[ie],fe=S.indexOf(he);fe>=0&&(S[fe]=null,x[fe].disconnect(he))}for(let ie=0;ie<$.added.length;ie++){const he=$.added[ie];let fe=S.indexOf(he);if(fe===-1){for(let le=0;le<x.length;le++)if(le>=S.length){S.push(he),fe=le;break}else if(S[le]===null){S[le]=he,fe=le;break}if(fe===-1)break}const De=x[fe];De&&De.connect(he)}}const j=new W,V=new W;function N($,ie,he){j.setFromMatrixPosition(ie.matrixWorld),V.setFromMatrixPosition(he.matrixWorld);const fe=j.distanceTo(V),De=ie.projectionMatrix.elements,le=he.projectionMatrix.elements,ve=De[14]/(De[10]-1),Ce=De[14]/(De[10]+1),P=(De[9]+1)/De[5],ce=(De[9]-1)/De[5],we=(De[8]-1)/De[0],We=(le[8]+1)/le[0],Ee=ve*we,B=ve*We,Re=fe/(-we+We),ke=Re*-we;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ke),$.translateZ(Re),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),De[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const L=ve+Re,w=Ce+Re,G=Ee-ke,ee=B+(fe-ke),J=P*Ce/w*L,Z=ce*Ce/w*L;$.projectionMatrix.makePerspective(G,ee,J,Z,L,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Q($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ie=$.near,he=$.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(he=g.depthFar)),M.near=R.near=y.near=ie,M.far=R.far=y.far=he,(D!==M.near||F!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,F=M.far);const fe=$.parent,De=M.cameras;Q(M,fe);for(let le=0;le<De.length;le++)Q(De[le],fe);De.length===2?N(M,y,R):M.projectionMatrix.copy(y.projectionMatrix),b($,M,fe)};function b($,ie,he){he===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(he.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Bu*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let re=null;function Te($,ie){if(c=ie.getViewerPose(u||o),_=ie,c!==null){const he=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let fe=!1;he.length!==M.cameras.length&&(M.cameras.length=0,fe=!0);for(let le=0;le<he.length;le++){const ve=he[le];let Ce=null;if(p!==null)Ce=p.getViewport(ve);else{const ce=d.getViewSubImage(f,ve);Ce=ce.viewport,le===0&&(e.setRenderTargetTextures(v,ce.colorTexture,f.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(v))}let P=E[le];P===void 0&&(P=new ki,P.layers.enable(le),P.viewport=new Ht,E[le]=P),P.matrix.fromArray(ve.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(ve.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),le===0&&(M.matrix.copy(P.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),fe===!0&&M.cameras.push(P)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const le=d.getDepthInformation(he[0]);le&&le.isValid&&le.texture&&g.init(e,le,r.renderState)}}for(let he=0;he<x.length;he++){const fe=S[he],De=x[he];fe!==null&&De!==void 0&&De.update(fe,ie,u||o)}re&&re($,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),_=null}const $e=new UM;$e.setAnimationLoop(Te),this.setAnimationLoop=function($){re=$},this.dispose=function(){}}}const ao=new is,_L=new tn;function vL(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,LM(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,x,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,x):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===si&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===si&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),x=v.envMap,S=v.envMapRotation;x&&(m.envMap.value=x,ao.copy(S),ao.x*=-1,ao.y*=-1,ao.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ao.y*=-1,ao.z*=-1),m.envMapRotation.value.setFromMatrix4(_L.makeRotationFromEuler(ao)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===si&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xL(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function u(v,x){let S=r[v.id];S===void 0&&(_(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(v,C);const T=e.render.frame;s[v.id]!==T&&(f(v),s[v.id]=T)}function c(v){const x=d();v.__bindingPointIndex=x;const S=n.createBuffer(),C=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],S=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,y=S.length;T<y;T++){const R=Array.isArray(S[T])?S[T]:[S[T]];for(let E=0,M=R.length;E<M;E++){const D=R[E];if(p(D,T,E,C)===!0){const F=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let K=0;K<z.length;K++){const j=z[K],V=g(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,F+Y,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,Y),Y+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,S,C){const T=v.value,y=x+"_"+S;if(C[y]===void 0)return typeof T=="number"||typeof T=="boolean"?C[y]=T:C[y]=T.clone(),!0;{const R=C[y];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return C[y]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function _(v){const x=v.uniforms;let S=0;const C=16;for(let y=0,R=x.length;y<R;y++){const E=Array.isArray(x[y])?x[y]:[x[y]];for(let M=0,D=E.length;M<D;M++){const F=E[M],z=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,K=z.length;Y<K;Y++){const j=z[Y],V=g(j),N=S%C,Q=N%V.boundary,b=N+Q;S+=Q,b!==0&&C-b<V.storage&&(S+=C-b),F.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=V.storage}}}const T=S%C;return T>0&&(S+=C-T),v.__size=S,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class yL{constructor(e={}){const{canvas:t=uC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ir,this.toneMapping=zs,this.toneMappingExposure=1;const x=this;let S=!1,C=0,T=0,y=null,R=-1,E=null;const M=new Ht,D=new Ht;let F=null;const z=new gt(0);let Y=0,K=t.width,j=t.height,V=1,N=null,Q=null;const b=new Ht(0,0,K,j),re=new Ht(0,0,K,j);let Te=!1;const $e=new IM;let $=!1,ie=!1;const he=new tn,fe=new W,De=new Ht,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function Ce(){return y===null?V:1}let P=i;function ce(A,O){return t.getContext(A,O)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${l_}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",ae,!1),P===null){const O="webgl2";if(P=ce(O,A),P===null)throw ce(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let we,We,Ee,B,Re,ke,L,w,G,ee,J,Z,pe,se,me,Ue,oe,ge,Oe,He,_e,Be,Ye,ot;function U(){we=new A2(P),we.init(),Be=new cL(P,we),We=new x2(P,we,e,Be),Ee=new aL(P),B=new b2(P),Re=new YP,ke=new uL(P,we,Ee,Re,We,Be,B),L=new S2(x),w=new T2(x),G=new UC(P),Ye=new _2(P,G),ee=new C2(P,G,B,Ye),J=new L2(P,ee,G,B),Oe=new P2(P,We,ke),Ue=new y2(Re),Z=new jP(x,L,w,we,We,Ye,Ue),pe=new vL(x,Re),se=new qP,me=new tL(we),ge=new g2(x,L,w,Ee,J,f,l),oe=new oL(x,J,We),ot=new xL(P,B,We,Ee),He=new v2(P,we,B),_e=new R2(P,we,B),B.programs=Z.programs,x.capabilities=We,x.extensions=we,x.properties=Re,x.renderLists=se,x.shadowMap=oe,x.state=Ee,x.info=B}U();const q=new gL(x,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const A=we.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=we.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(K,j,!1))},this.getSize=function(A){return A.set(K,j)},this.setSize=function(A,O,X=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,j=O,t.width=Math.floor(A*V),t.height=Math.floor(O*V),X===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(K*V,j*V).floor()},this.setDrawingBufferSize=function(A,O,X){K=A,j=O,V=X,t.width=Math.floor(A*X),t.height=Math.floor(O*X),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(b)},this.setViewport=function(A,O,X,H){A.isVector4?b.set(A.x,A.y,A.z,A.w):b.set(A,O,X,H),Ee.viewport(M.copy(b).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,O,X,H){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,O,X,H),Ee.scissor(D.copy(re).multiplyScalar(V).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(A){Ee.setScissorTest(Te=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){Q=A},this.getClearColor=function(A){return A.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(A=!0,O=!0,X=!0){let H=0;if(A){let k=!1;if(y!==null){const ue=y.texture.format;k=ue===p_||ue===h_||ue===d_}if(k){const ue=y.texture.type,Me=ue===ns||ue===Vo||ue===zu||ue===ul||ue===c_||ue===f_,Pe=ge.getClearColor(),Se=ge.getClearAlpha(),be=Pe.r,Ve=Pe.g,ze=Pe.b;Me?(p[0]=be,p[1]=Ve,p[2]=ze,p[3]=Se,P.clearBufferuiv(P.COLOR,0,p)):(_[0]=be,_[1]=Ve,_[2]=ze,_[3]=Se,P.clearBufferiv(P.COLOR,0,_))}else H|=P.COLOR_BUFFER_BIT}O&&(H|=P.DEPTH_BUFFER_BIT),X&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),se.dispose(),me.dispose(),Re.dispose(),L.dispose(),w.dispose(),J.dispose(),Ye.dispose(),ot.dispose(),Z.dispose(),q.dispose(),q.removeEventListener("sessionstart",Fe),q.removeEventListener("sessionend",ut),xe.stop()};function te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=B.autoReset,O=oe.enabled,X=oe.autoUpdate,H=oe.needsUpdate,k=oe.type;U(),B.autoReset=A,oe.enabled=O,oe.autoUpdate=X,oe.needsUpdate=H,oe.type=k}function ae(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ae(A){const O=A.target;O.removeEventListener("dispose",Ae),qe(O)}function qe(A){yt(A),Re.remove(A)}function yt(A){const O=Re.get(A).programs;O!==void 0&&(O.forEach(function(X){Z.releaseProgram(X)}),A.isShaderMaterial&&Z.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,X,H,k,ue){O===null&&(O=le);const Me=k.isMesh&&k.matrixWorld.determinant()<0,Pe=bt(A,O,X,H,k);Ee.setMaterial(H,Me);let Se=X.index,be=1;if(H.wireframe===!0){if(Se=ee.getWireframeAttribute(X),Se===void 0)return;be=2}const Ve=X.drawRange,ze=X.attributes.position;let ht=Ve.start*be,Tt=(Ve.start+Ve.count)*be;ue!==null&&(ht=Math.max(ht,ue.start*be),Tt=Math.min(Tt,(ue.start+ue.count)*be)),Se!==null?(ht=Math.max(ht,0),Tt=Math.min(Tt,Se.count)):ze!=null&&(ht=Math.max(ht,0),Tt=Math.min(Tt,ze.count));const pt=Tt-ht;if(pt<0||pt===1/0)return;Ye.setup(k,H,Pe,X,Se);let rn,ct=He;if(Se!==null&&(rn=G.get(Se),ct=_e,ct.setIndex(rn)),k.isMesh)H.wireframe===!0?(Ee.setLineWidth(H.wireframeLinewidth*Ce()),ct.setMode(P.LINES)):ct.setMode(P.TRIANGLES);else if(k.isLine){let Ie=H.linewidth;Ie===void 0&&(Ie=1),Ee.setLineWidth(Ie*Ce()),k.isLineSegments?ct.setMode(P.LINES):k.isLineLoop?ct.setMode(P.LINE_LOOP):ct.setMode(P.LINE_STRIP)}else k.isPoints?ct.setMode(P.POINTS):k.isSprite&&ct.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ct.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))ct.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ie=k._multiDrawStarts,_n=k._multiDrawCounts,_t=k._multiDrawCount,qi=Se?G.get(Se).bytesPerElement:1,Ko=Re.get(H).currentProgram.getUniforms();for(let di=0;di<_t;di++)Ko.setValue(P,"_gl_DrawID",di),ct.render(Ie[di]/qi,_n[di])}else if(k.isInstancedMesh)ct.renderInstances(ht,pt,k.count);else if(X.isInstancedBufferGeometry){const Ie=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,_n=Math.min(X.instanceCount,Ie);ct.renderInstances(ht,pt,_n)}else ct.render(ht,pt)};function lt(A,O,X){A.transparent===!0&&A.side===Vr&&A.forceSinglePass===!1?(A.side=si,A.needsUpdate=!0,Rt(A,O,X),A.side=Xs,A.needsUpdate=!0,Rt(A,O,X),A.side=Vr):Rt(A,O,X)}this.compile=function(A,O,X=null){X===null&&(X=A),m=me.get(X),m.init(O),v.push(m),X.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),A!==X&&A.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const H=new Set;return A.traverse(function(k){const ue=k.material;if(ue)if(Array.isArray(ue))for(let Me=0;Me<ue.length;Me++){const Pe=ue[Me];lt(Pe,X,k),H.add(Pe)}else lt(ue,X,k),H.add(ue)}),v.pop(),m=null,H},this.compileAsync=function(A,O,X=null){const H=this.compile(A,O,X);return new Promise(k=>{function ue(){if(H.forEach(function(Me){Re.get(Me).currentProgram.isReady()&&H.delete(Me)}),H.size===0){k(A);return}setTimeout(ue,10)}we.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ze=null;function Ge(A){Ze&&Ze(A)}function Fe(){xe.stop()}function ut(){xe.start()}const xe=new UM;xe.setAnimationLoop(Ge),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(A){Ze=A,q.setAnimationLoop(A),A===null?xe.stop():xe.start()},q.addEventListener("sessionstart",Fe),q.addEventListener("sessionend",ut),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,O,y),m=me.get(A,v.length),m.init(O),v.push(m),he.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$e.setFromProjectionMatrix(he),ie=this.localClippingEnabled,$=Ue.init(this.clippingPlanes,ie),g=se.get(A,h.length),g.init(),h.push(g),q.enabled===!0&&q.isPresenting===!0){const ue=x.xr.getDepthSensingMesh();ue!==null&&Ke(ue,O,-1/0,x.sortObjects)}Ke(A,O,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(N,Q),ve=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,ve&&ge.addToRenderList(g,A),this.info.render.frame++,$===!0&&Ue.beginShadows();const X=m.state.shadowsArray;oe.render(X,A,O),$===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,k=g.transmissive;if(m.setupLights(),O.isArrayCamera){const ue=O.cameras;if(k.length>0)for(let Me=0,Pe=ue.length;Me<Pe;Me++){const Se=ue[Me];Qe(H,k,A,Se)}ve&&ge.render(A);for(let Me=0,Pe=ue.length;Me<Pe;Me++){const Se=ue[Me];Xe(g,A,Se,Se.viewport)}}else k.length>0&&Qe(H,k,A,O),ve&&ge.render(A),Xe(g,A,O);y!==null&&(ke.updateMultisampleRenderTarget(y),ke.updateRenderTargetMipmap(y)),A.isScene===!0&&A.onAfterRender(x,A,O),Ye.resetDefaultState(),R=-1,E=null,v.pop(),v.length>0?(m=v[v.length-1],$===!0&&Ue.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function Ke(A,O,X,H){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$e.intersectsSprite(A)){H&&De.setFromMatrixPosition(A.matrixWorld).applyMatrix4(he);const Me=J.update(A),Pe=A.material;Pe.visible&&g.push(A,Me,Pe,X,De.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$e.intersectsObject(A))){const Me=J.update(A),Pe=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),De.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),De.copy(Me.boundingSphere.center)),De.applyMatrix4(A.matrixWorld).applyMatrix4(he)),Array.isArray(Pe)){const Se=Me.groups;for(let be=0,Ve=Se.length;be<Ve;be++){const ze=Se[be],ht=Pe[ze.materialIndex];ht&&ht.visible&&g.push(A,Me,ht,X,De.z,ze)}}else Pe.visible&&g.push(A,Me,Pe,X,De.z,null)}}const ue=A.children;for(let Me=0,Pe=ue.length;Me<Pe;Me++)Ke(ue[Me],O,X,H)}function Xe(A,O,X,H){const k=A.opaque,ue=A.transmissive,Me=A.transparent;m.setupLightsView(X),$===!0&&Ue.setGlobalState(x.clippingPlanes,X),H&&Ee.viewport(M.copy(H)),k.length>0&&Ft(k,O,X),ue.length>0&&Ft(ue,O,X),Me.length>0&&Ft(Me,O,X),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Qe(A,O,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Go(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float")?ic:ns,minFilter:wo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const ue=m.state.transmissionRenderTarget[H.id],Me=H.viewport||M;ue.setSize(Me.z,Me.w);const Pe=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(z),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),ve&&ge.render(X);const Se=x.toneMapping;x.toneMapping=zs;const be=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),$===!0&&Ue.setGlobalState(x.clippingPlanes,H),Ft(A,X,H),ke.updateMultisampleRenderTarget(ue),ke.updateRenderTargetMipmap(ue),we.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let ze=0,ht=O.length;ze<ht;ze++){const Tt=O[ze],pt=Tt.object,rn=Tt.geometry,ct=Tt.material,Ie=Tt.group;if(ct.side===Vr&&pt.layers.test(H.layers)){const _n=ct.side;ct.side=si,ct.needsUpdate=!0,it(pt,X,H,rn,ct,Ie),ct.side=_n,ct.needsUpdate=!0,Ve=!0}}Ve===!0&&(ke.updateMultisampleRenderTarget(ue),ke.updateRenderTargetMipmap(ue))}x.setRenderTarget(Pe),x.setClearColor(z,Y),be!==void 0&&(H.viewport=be),x.toneMapping=Se}function Ft(A,O,X){const H=O.isScene===!0?O.overrideMaterial:null;for(let k=0,ue=A.length;k<ue;k++){const Me=A[k],Pe=Me.object,Se=Me.geometry,be=H===null?Me.material:H,Ve=Me.group;Pe.layers.test(X.layers)&&it(Pe,O,X,Se,be,Ve)}}function it(A,O,X,H,k,ue){A.onBeforeRender(x,O,X,H,k,ue),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(x,O,X,H,A,ue),k.transparent===!0&&k.side===Vr&&k.forceSinglePass===!1?(k.side=si,k.needsUpdate=!0,x.renderBufferDirect(X,O,H,k,A,ue),k.side=Xs,k.needsUpdate=!0,x.renderBufferDirect(X,O,H,k,A,ue),k.side=Vr):x.renderBufferDirect(X,O,H,k,A,ue),A.onAfterRender(x,O,X,H,k,ue)}function Rt(A,O,X){O.isScene!==!0&&(O=le);const H=Re.get(A),k=m.state.lights,ue=m.state.shadowsArray,Me=k.state.version,Pe=Z.getParameters(A,k.state,ue,O,X),Se=Z.getProgramCacheKey(Pe);let be=H.programs;H.environment=A.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(A.isMeshStandardMaterial?w:L).get(A.envMap||H.environment),H.envMapRotation=H.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,be===void 0&&(A.addEventListener("dispose",Ae),be=new Map,H.programs=be);let Ve=be.get(Se);if(Ve!==void 0){if(H.currentProgram===Ve&&H.lightsStateVersion===Me)return Lt(A,Pe),Ve}else Pe.uniforms=Z.getUniforms(A),A.onBeforeCompile(Pe,x),Ve=Z.acquireProgram(Pe,Se),be.set(Se,Ve),H.uniforms=Pe.uniforms;const ze=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=Ue.uniform),Lt(A,Pe),H.needsLights=fi(A),H.lightsStateVersion=Me,H.needsLights&&(ze.ambientLightColor.value=k.state.ambient,ze.lightProbe.value=k.state.probe,ze.directionalLights.value=k.state.directional,ze.directionalLightShadows.value=k.state.directionalShadow,ze.spotLights.value=k.state.spot,ze.spotLightShadows.value=k.state.spotShadow,ze.rectAreaLights.value=k.state.rectArea,ze.ltc_1.value=k.state.rectAreaLTC1,ze.ltc_2.value=k.state.rectAreaLTC2,ze.pointLights.value=k.state.point,ze.pointLightShadows.value=k.state.pointShadow,ze.hemisphereLights.value=k.state.hemi,ze.directionalShadowMap.value=k.state.directionalShadowMap,ze.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ze.spotShadowMap.value=k.state.spotShadowMap,ze.spotLightMatrix.value=k.state.spotLightMatrix,ze.spotLightMap.value=k.state.spotLightMap,ze.pointShadowMap.value=k.state.pointShadowMap,ze.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Ve,H.uniformsList=null,Ve}function nn(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=bf.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Lt(A,O){const X=Re.get(A);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function bt(A,O,X,H,k){O.isScene!==!0&&(O=le),ke.resetTextureUnits();const ue=O.fog,Me=H.isMeshStandardMaterial?O.environment:null,Pe=y===null?x.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Js,Se=(H.isMeshStandardMaterial?w:L).get(H.envMap||Me),be=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ve=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ze=!!X.morphAttributes.position,ht=!!X.morphAttributes.normal,Tt=!!X.morphAttributes.color;let pt=zs;H.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(pt=x.toneMapping);const rn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ct=rn!==void 0?rn.length:0,Ie=Re.get(H),_n=m.state.lights;if($===!0&&(ie===!0||A!==E)){const Ni=A===E&&H.id===R;Ue.setState(H,A,Ni)}let _t=!1;H.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==_n.state.version||Ie.outputColorSpace!==Pe||k.isBatchedMesh&&Ie.batching===!1||!k.isBatchedMesh&&Ie.batching===!0||k.isBatchedMesh&&Ie.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ie.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ie.instancing===!1||!k.isInstancedMesh&&Ie.instancing===!0||k.isSkinnedMesh&&Ie.skinning===!1||!k.isSkinnedMesh&&Ie.skinning===!0||k.isInstancedMesh&&Ie.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ie.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ie.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ie.instancingMorph===!1&&k.morphTexture!==null||Ie.envMap!==Se||H.fog===!0&&Ie.fog!==ue||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Ue.numPlanes||Ie.numIntersection!==Ue.numIntersection)||Ie.vertexAlphas!==be||Ie.vertexTangents!==Ve||Ie.morphTargets!==ze||Ie.morphNormals!==ht||Ie.morphColors!==Tt||Ie.toneMapping!==pt||Ie.morphTargetsCount!==ct)&&(_t=!0):(_t=!0,Ie.__version=H.version);let qi=Ie.currentProgram;_t===!0&&(qi=Rt(H,O,k));let Ko=!1,di=!1,Kd=!1;const Kt=qi.getUniforms(),ls=Ie.uniforms;if(Ee.useProgram(qi.program)&&(Ko=!0,di=!0,Kd=!0),H.id!==R&&(R=H.id,di=!0),Ko||E!==A){Kt.setValue(P,"projectionMatrix",A.projectionMatrix),Kt.setValue(P,"viewMatrix",A.matrixWorldInverse);const Ni=Kt.map.cameraPosition;Ni!==void 0&&Ni.setValue(P,fe.setFromMatrixPosition(A.matrixWorld)),We.logarithmicDepthBuffer&&Kt.setValue(P,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Kt.setValue(P,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,di=!0,Kd=!0)}if(k.isSkinnedMesh){Kt.setOptional(P,k,"bindMatrix"),Kt.setOptional(P,k,"bindMatrixInverse");const Ni=k.skeleton;Ni&&(Ni.boneTexture===null&&Ni.computeBoneTexture(),Kt.setValue(P,"boneTexture",Ni.boneTexture,ke))}k.isBatchedMesh&&(Kt.setOptional(P,k,"batchingTexture"),Kt.setValue(P,"batchingTexture",k._matricesTexture,ke),Kt.setOptional(P,k,"batchingIdTexture"),Kt.setValue(P,"batchingIdTexture",k._indirectTexture,ke),Kt.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&Kt.setValue(P,"batchingColorTexture",k._colorsTexture,ke));const Zd=X.morphAttributes;if((Zd.position!==void 0||Zd.normal!==void 0||Zd.color!==void 0)&&Oe.update(k,X,qi),(di||Ie.receiveShadow!==k.receiveShadow)&&(Ie.receiveShadow=k.receiveShadow,Kt.setValue(P,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ls.envMap.value=Se,ls.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(ls.envMapIntensity.value=O.environmentIntensity),di&&(Kt.setValue(P,"toneMappingExposure",x.toneMappingExposure),Ie.needsLights&&St(ls,Kd),ue&&H.fog===!0&&pe.refreshFogUniforms(ls,ue),pe.refreshMaterialUniforms(ls,H,V,j,m.state.transmissionRenderTarget[A.id]),bf.upload(P,nn(Ie),ls,ke)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(bf.upload(P,nn(Ie),ls,ke),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Kt.setValue(P,"center",k.center),Kt.setValue(P,"modelViewMatrix",k.modelViewMatrix),Kt.setValue(P,"normalMatrix",k.normalMatrix),Kt.setValue(P,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ni=H.uniformsGroups;for(let Qd=0,fE=Ni.length;Qd<fE;Qd++){const $_=Ni[Qd];ot.update($_,qi),ot.bind($_,qi)}}return qi}function St(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function fi(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(A,O,X){Re.get(A.texture).__webglTexture=O,Re.get(A.depthTexture).__webglTexture=X;const H=Re.get(A);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=X===void 0,H.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){const X=Re.get(A);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,X=0){y=A,C=O,T=X;let H=!0,k=null,ue=!1,Me=!1;if(A){const Se=Re.get(A);if(Se.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(Se.__webglFramebuffer===void 0)ke.setupRenderTarget(A);else if(Se.__hasExternalTextures)ke.rebindTextures(A,Re.get(A.texture).__webglTexture,Re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ze=A.depthTexture;if(Se.__boundDepthTexture!==ze){if(ze!==null&&Re.has(ze)&&(A.width!==ze.image.width||A.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(A)}}const be=A.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(Me=!0);const Ve=Re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[O])?k=Ve[O][X]:k=Ve[O],ue=!0):A.samples>0&&ke.useMultisampledRTT(A)===!1?k=Re.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?k=Ve[X]:k=Ve,M.copy(A.viewport),D.copy(A.scissor),F=A.scissorTest}else M.copy(b).multiplyScalar(V).floor(),D.copy(re).multiplyScalar(V).floor(),F=Te;if(Ee.bindFramebuffer(P.FRAMEBUFFER,k)&&H&&Ee.drawBuffers(A,k),Ee.viewport(M),Ee.scissor(D),Ee.setScissorTest(F),ue){const Se=Re.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,Se.__webglTexture,X)}else if(Me){const Se=Re.get(A.texture),be=O||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.__webglTexture,X||0,be)}R=-1},this.readRenderTargetPixels=function(A,O,X,H,k,ue,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Pe=Pe[Me]),Pe){Ee.bindFramebuffer(P.FRAMEBUFFER,Pe);try{const Se=A.texture,be=Se.format,Ve=Se.type;if(!We.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-H&&X>=0&&X<=A.height-k&&P.readPixels(O,X,H,k,Be.convert(be),Be.convert(Ve),ue)}finally{const Se=y!==null?Re.get(y).__webglFramebuffer:null;Ee.bindFramebuffer(P.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(A,O,X,H,k,ue,Me){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Pe=Pe[Me]),Pe){Ee.bindFramebuffer(P.FRAMEBUFFER,Pe);try{const Se=A.texture,be=Se.format,Ve=Se.type;if(!We.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=A.width-H&&X>=0&&X<=A.height-k){const ze=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ze),P.bufferData(P.PIXEL_PACK_BUFFER,ue.byteLength,P.STREAM_READ),P.readPixels(O,X,H,k,Be.convert(be),Be.convert(Ve),0),P.flush();const ht=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await cC(P,ht,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,ze),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ue)}finally{P.deleteBuffer(ze),P.deleteSync(ht)}return ue}}finally{const Se=y!==null?Re.get(y).__webglFramebuffer:null;Ee.bindFramebuffer(P.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(A,O=null,X=0){A.isTexture!==!0&&(Xa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,A=arguments[1]);const H=Math.pow(2,-X),k=Math.floor(A.image.width*H),ue=Math.floor(A.image.height*H),Me=O!==null?O.x:0,Pe=O!==null?O.y:0;ke.setTexture2D(A,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,Me,Pe,k,ue),Ee.unbindTexture()},this.copyTextureToTexture=function(A,O,X=null,H=null,k=0){A.isTexture!==!0&&(Xa("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1],O=arguments[2],k=arguments[3]||0,X=null);let ue,Me,Pe,Se,be,Ve;X!==null?(ue=X.max.x-X.min.x,Me=X.max.y-X.min.y,Pe=X.min.x,Se=X.min.y):(ue=A.image.width,Me=A.image.height,Pe=0,Se=0),H!==null?(be=H.x,Ve=H.y):(be=0,Ve=0);const ze=Be.convert(O.format),ht=Be.convert(O.type);ke.setTexture2D(O,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const Tt=P.getParameter(P.UNPACK_ROW_LENGTH),pt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),rn=P.getParameter(P.UNPACK_SKIP_PIXELS),ct=P.getParameter(P.UNPACK_SKIP_ROWS),Ie=P.getParameter(P.UNPACK_SKIP_IMAGES),_n=A.isCompressedTexture?A.mipmaps[k]:A.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,_n.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_n.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Pe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Se),A.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,k,be,Ve,ue,Me,ze,ht,_n.data):A.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,k,be,Ve,_n.width,_n.height,ze,_n.data):P.texSubImage2D(P.TEXTURE_2D,k,be,Ve,ue,Me,ze,ht,_n),P.pixelStorei(P.UNPACK_ROW_LENGTH,Tt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,rn),P.pixelStorei(P.UNPACK_SKIP_ROWS,ct),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ie),k===0&&O.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(A,O,X=null,H=null,k=0){A.isTexture!==!0&&(Xa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,H=arguments[1]||null,A=arguments[2],O=arguments[3],k=arguments[4]||0);let ue,Me,Pe,Se,be,Ve,ze,ht,Tt;const pt=A.isCompressedTexture?A.mipmaps[k]:A.image;X!==null?(ue=X.max.x-X.min.x,Me=X.max.y-X.min.y,Pe=X.max.z-X.min.z,Se=X.min.x,be=X.min.y,Ve=X.min.z):(ue=pt.width,Me=pt.height,Pe=pt.depth,Se=0,be=0,Ve=0),H!==null?(ze=H.x,ht=H.y,Tt=H.z):(ze=0,ht=0,Tt=0);const rn=Be.convert(O.format),ct=Be.convert(O.type);let Ie;if(O.isData3DTexture)ke.setTexture3D(O,0),Ie=P.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)ke.setTexture2DArray(O,0),Ie=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const _n=P.getParameter(P.UNPACK_ROW_LENGTH),_t=P.getParameter(P.UNPACK_IMAGE_HEIGHT),qi=P.getParameter(P.UNPACK_SKIP_PIXELS),Ko=P.getParameter(P.UNPACK_SKIP_ROWS),di=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,pt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Se),P.pixelStorei(P.UNPACK_SKIP_ROWS,be),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ve),A.isDataTexture||A.isData3DTexture?P.texSubImage3D(Ie,k,ze,ht,Tt,ue,Me,Pe,rn,ct,pt.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Ie,k,ze,ht,Tt,ue,Me,Pe,rn,pt.data):P.texSubImage3D(Ie,k,ze,ht,Tt,ue,Me,Pe,rn,ct,pt),P.pixelStorei(P.UNPACK_ROW_LENGTH,_n),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_t),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ko),P.pixelStorei(P.UNPACK_SKIP_IMAGES,di),k===0&&O.generateMipmaps&&P.generateMipmap(Ie),Ee.unbindTexture()},this.initRenderTarget=function(A){Re.get(A).__webglFramebuffer===void 0&&ke.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ke.setTextureCube(A,0):A.isData3DTexture?ke.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ke.setTexture2DArray(A,0):ke.setTexture2D(A,0),Ee.unbindTexture()},this.resetState=function(){C=0,T=0,y=null,Ee.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===m_?"display-p3":"srgb",t.unpackColorSpace=xt.workingColorSpace===Gd?"display-p3":"srgb"}}class SL extends Ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new is,this.environmentIntensity=1,this.environmentRotation=new is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ML{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Kr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Xa("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new W;class ws{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=or(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Et(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=or(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=or(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=or(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=or(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),r=Et(r,this.array),s=Et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new fr(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ws(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class EL extends On{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wL extends as{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new W,s=new W;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let u=0,c=l.length;u<c;++u){const d=l[u],f=d.start,p=d.count;for(let _=f,g=f+p;_<g;_+=3)for(let m=0;m<3;m++){const h=a.getX(_+m),v=a.getX(_+(m+1)%3);r.fromBufferAttribute(o,h),s.fromBufferAttribute(o,v),nx(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let u=0;u<3;u++){const c=3*a+u,d=3*a+(u+1)%3;r.fromBufferAttribute(o,c),s.fromBufferAttribute(o,d),nx(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Rr(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function nx(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}const ix={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class TL{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const p=u[d],_=u[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null}}}const AL=new TL;class x_{constructor(e){this.manager=e!==void 0?e:AL,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}x_.DEFAULT_MATERIAL_NAME="__DEFAULT";class CL extends x_{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ix.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Hu("img");function l(){c(),ix.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class RL extends x_{constructor(e){super(e)}load(e,t,i,r){const s=new On,o=new CL(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class bL extends as{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Gm extends ML{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const rx=new W,$c=new W;class PL{constructor(e=new W,t=new W){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){rx.subVectors(e,this.start),$c.subVectors(this.end,this.start);const i=$c.dot($c);let s=$c.dot(rx)/i;return t&&(s=Nn(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:l_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=l_);const sx=new eo,qc=new W;class HM extends bL{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Rr(e,3)),this.setAttribute("uv",new Rr(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Gm(t,6,1);return this.setAttribute("instanceStart",new ws(i,3,0)),this.setAttribute("instanceEnd",new ws(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Gm(t,6,1);return this.setAttribute("instanceColorStart",new ws(i,3,0)),this.setAttribute("instanceColorEnd",new ws(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new wL(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),sx.setFromBufferAttribute(t),this.boundingBox.union(sx))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sc),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)qc.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qc)),qc.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(qc));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}ye.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ft(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Jn.line={uniforms:__.merge([ye.common,ye.fog,ye.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class y_ extends Pr{constructor(e){super({type:"LineMaterial",uniforms:__.clone(Jn.line.uniforms),vertexShader:Jn.line.vertexShader,fragmentShader:Jn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Qh=new Ht,ox=new W,ax=new W,vn=new Ht,xn=new Ht,pr=new Ht,Jh=new W,ep=new tn,Sn=new PL,lx=new W,Kc=new eo,Zc=new sc,mr=new Ht;let Sr,bo;function ux(n,e,t){return mr.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),mr.multiplyScalar(1/mr.w),mr.x=bo/t.width,mr.y=bo/t.height,mr.applyMatrix4(n.projectionMatrixInverse),mr.multiplyScalar(1/mr.w),Math.abs(Math.max(mr.x,mr.y))}function LL(n,e){const t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,l=o;a<l;a++){Sn.start.fromBufferAttribute(r,a),Sn.end.fromBufferAttribute(s,a),Sn.applyMatrix4(t);const u=new W,c=new W;Sr.distanceSqToSegment(Sn.start,Sn.end,c,u),c.distanceTo(u)<bo*.5&&e.push({point:c,pointOnLine:u,distance:Sr.origin.distanceTo(c),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function DL(n,e,t){const i=e.projectionMatrix,s=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,u=a.attributes.instanceEnd,c=Math.min(a.instanceCount,l.count),d=-e.near;Sr.at(1,pr),pr.w=1,pr.applyMatrix4(e.matrixWorldInverse),pr.applyMatrix4(i),pr.multiplyScalar(1/pr.w),pr.x*=s.x/2,pr.y*=s.y/2,pr.z=0,Jh.copy(pr),ep.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,p=c;f<p;f++){if(vn.fromBufferAttribute(l,f),xn.fromBufferAttribute(u,f),vn.w=1,xn.w=1,vn.applyMatrix4(ep),xn.applyMatrix4(ep),vn.z>d&&xn.z>d)continue;if(vn.z>d){const x=vn.z-xn.z,S=(vn.z-d)/x;vn.lerp(xn,S)}else if(xn.z>d){const x=xn.z-vn.z,S=(xn.z-d)/x;xn.lerp(vn,S)}vn.applyMatrix4(i),xn.applyMatrix4(i),vn.multiplyScalar(1/vn.w),xn.multiplyScalar(1/xn.w),vn.x*=s.x/2,vn.y*=s.y/2,xn.x*=s.x/2,xn.y*=s.y/2,Sn.start.copy(vn),Sn.start.z=0,Sn.end.copy(xn),Sn.end.z=0;const g=Sn.closestPointToPointParameter(Jh,!0);Sn.at(g,lx);const m=lC.lerp(vn.z,xn.z,g),h=m>=-1&&m<=1,v=Jh.distanceTo(lx)<bo*.5;if(h&&v){Sn.start.fromBufferAttribute(l,f),Sn.end.fromBufferAttribute(u,f),Sn.start.applyMatrix4(o),Sn.end.applyMatrix4(o);const x=new W,S=new W;Sr.distanceSqToSegment(Sn.start,Sn.end,S,x),t.push({point:S,pointOnLine:x,distance:Sr.origin.distanceTo(S),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}class NL extends lr{constructor(e=new HM,t=new y_({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)ox.fromBufferAttribute(t,o),ax.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+ox.distanceTo(ax);const s=new Gm(r,2,1);return e.setAttribute("instanceDistanceStart",new ws(s,1,0)),e.setAttribute("instanceDistanceEnd",new ws(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Sr=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;bo=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),Zc.copy(a.boundingSphere).applyMatrix4(o);let u;if(i)u=bo*.5;else{const d=Math.max(r.near,Zc.distanceToPoint(Sr.origin));u=ux(r,d,l.resolution)}if(Zc.radius+=u,Sr.intersectsSphere(Zc)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Kc.copy(a.boundingBox).applyMatrix4(o);let c;if(i)c=bo*.5;else{const d=Math.max(r.near,Kc.distanceToPoint(Sr.origin));c=ux(r,d,l.resolution)}Kc.expandByScalar(c),Sr.intersectsBox(Kc)!==!1&&(i?LL(this,t):DL(this,r,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Qh),this.material.uniforms.resolution.value.set(Qh.z,Qh.w))}}class VM extends HM{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setPositions(i),this}setColors(e){const t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setColors(i),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class IL extends NL{constructor(e=new VM,t=new y_({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}function zr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function GM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ci={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Vu={duration:.5,overwrite:!1,delay:0},S_,wn,Ot,Gi=1e8,Ct=1/Gi,Wm=Math.PI*2,UL=Wm/4,OL=0,WM=Math.sqrt,FL=Math.cos,kL=Math.sin,gn=function(e){return typeof e=="string"},jt=function(e){return typeof e=="function"},rs=function(e){return typeof e=="number"},M_=function(e){return typeof e>"u"},Lr=function(e){return typeof e=="object"},oi=function(e){return e!==!1},E_=function(){return typeof window<"u"},Qc=function(e){return jt(e)||gn(e)},XM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Fn=Array.isArray,zL=/random\([^)]+\)/g,BL=/,\s*/g,cx=/(?:-?\.?\d|\.)+/gi,jM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ia=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,tp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,YM=/[+-]=-?[.\d]+/,HL=/[^,'"\[\]\s]+/gi,VL=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Bt,_r,Xm,w_,bi={},pd={},$M,qM=function(e){return(pd=hl(e,bi))&&ci},T_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Gu=function(e,t){return!t&&console.warn(e)},KM=function(e,t){return e&&(bi[e]=t)&&pd&&(pd[e]=t)||bi},Wu=function(){return 0},GL={suppressEvents:!0,isStart:!0,kill:!1},Pf={suppressEvents:!0,kill:!1},WL={suppressEvents:!0},A_={},Bs=[],jm={},ZM,vi={},np={},fx=30,Lf=[],C_="",R_=function(e){var t=e[0],i,r;if(Lr(t)||jt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Lf.length;r--&&!Lf[r].targetTest(t););i=Lf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new x1(e[r],i)))||e.splice(r,1);return e},Po=function(e){return e._gsap||R_(Wi(e))[0]._gsap},QM=function(e,t,i){return(i=e[t])&&jt(i)?e[t]():M_(i)&&e.getAttribute&&e.getAttribute(t)||i},ai=function(e,t){return(e=e.split(",")).forEach(t)||e},Yt=function(e){return Math.round(e*1e5)/1e5||0},kt=function(e){return Math.round(e*1e7)/1e7||0},Ya=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},XL=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},md=function(){var e=Bs.length,t=Bs.slice(0),i,r;for(jm={},Bs.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},b_=function(e){return!!(e._initted||e._startAt||e.add)},JM=function(e,t,i,r){Bs.length&&!wn&&md(),e.render(t,i,!!(wn&&t<0&&b_(e))),Bs.length&&!wn&&md()},e1=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(HL).length<2?t:gn(e)?e.trim():e},t1=function(e){return e},Pi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},jL=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},hl=function(e,t){for(var i in t)e[i]=t[i];return e},dx=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Lr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},gd=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},cu=function(e){var t=e.parent||Bt,i=e.keyframes?jL(Fn(e.keyframes)):Pi;if(oi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},YL=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},n1=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},jd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},js=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Lo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},$L=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ym=function(e,t,i,r){return e._startAt&&(wn?e._startAt.revert(Pf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},qL=function n(e){return!e||e._ts&&n(e.parent)},hx=function(e){return e._repeat?pl(e._tTime,e=e.duration()+e._rDelay)*e:0},pl=function(e,t){var i=Math.floor(e=kt(e/t));return e&&i===e?i-1:i},_d=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Yd=function(e){return e._end=kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ct)||0))},$d=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=kt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Yd(e),i._dirty||Lo(i,e)),e},i1=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=_d(e.rawTime(),t),(!t._dur||ac(0,t.totalDuration(),i)-t._tTime>Ct)&&t.render(i,!0)),Lo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Ct}},Mr=function(e,t,i,r){return t.parent&&js(t),t._start=kt((rs(i)?i:i||e!==Bt?Ui(e,i,t):e._time)+t._delay),t._end=kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),n1(e,t,"_first","_last",e._sort?"_start":0),$m(t)||(e._recent=t),r||i1(e,t),e._ts<0&&$d(e,e._tTime),e},r1=function(e,t){return(bi.ScrollTrigger||T_("scrollTrigger",t))&&bi.ScrollTrigger.create(t,e)},s1=function(e,t,i,r,s){if(L_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!wn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ZM!==yi.frame)return Bs.push(e),e._lazy=[s,r],1},KL=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},$m=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ZL=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&KL(e)&&!(!e._initted&&$m(e))||(e._ts<0||e._dp._ts<0)&&!$m(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=ac(0,e._tDur,t),c=pl(l,a),e._yoyo&&c&1&&(o=1-o),c!==pl(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||wn||r||e._zTime===Ct||!t&&e._zTime){if(!e._initted&&s1(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Ct:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Ym(e,t,i,!0),e._onUpdate&&!i&&Ei(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ei(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&js(e,1),!i&&!wn&&(Ei(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},QL=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ml=function(e,t,i,r){var s=e._repeat,o=kt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:kt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&$d(e,e._tTime=e._tDur*a),e.parent&&Yd(e),i||Lo(e.parent,e),e},px=function(e){return e instanceof ei?Lo(e):ml(e,e._dur)},JL={_start:0,endTime:Wu,totalDuration:Wu},Ui=function n(e,t,i){var r=e.labels,s=e._recent||JL,o=e.duration()>=Gi?s.endTime(!1):e._dur,a,l,u;return gn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Fn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},fu=function(e,t,i){var r=rs(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=oi(l.vars.inherit)&&l.parent;o.immediateRender=oi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Jt(t[0],o,t[s+1])},to=function(e,t){return e||e===0?t(e):t},ac=function(e,t,i){return i<e?e:i>t?t:i},In=function(e,t){return!gn(e)||!(t=VL.exec(e))?"":t[1]},eD=function(e,t,i){return to(i,function(r){return ac(e,t,r)})},qm=[].slice,o1=function(e,t){return e&&Lr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Lr(e[0]))&&!e.nodeType&&e!==_r},tD=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return gn(r)&&!t||o1(r,1)?(s=i).push.apply(s,Wi(r)):i.push(r)})||i},Wi=function(e,t,i){return Ot&&!t&&Ot.selector?Ot.selector(e):gn(e)&&!i&&(Xm||!gl())?qm.call((t||w_).querySelectorAll(e),0):Fn(e)?tD(e,i):o1(e)?qm.call(e,0):e?[e]:[]},Km=function(e){return e=Wi(e)[0]||Gu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Wi(t,i.querySelectorAll?i:i===e?Gu("Invalid scope")||w_.createElement("div"):e)}},a1=function(e){return e.sort(function(){return .5-Math.random()})},l1=function(e){if(jt(e))return e;var t=Lr(e)?e:{each:e},i=Do(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return gn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(f,p,_){var g=(_||t).length,m=o[g],h,v,x,S,C,T,y,R,E;if(!m){if(E=t.grid==="auto"?0:(t.grid||[1,Gi])[1],!E){for(y=-Gi;y<(y=_[E++].getBoundingClientRect().left)&&E<g;);E<g&&E--}for(m=o[g]=[],h=l?Math.min(E,g)*c-.5:r%E,v=E===Gi?0:l?g*d/E-.5:r/E|0,y=0,R=Gi,T=0;T<g;T++)x=T%E-h,S=v-(T/E|0),m[T]=C=u?Math.abs(u==="y"?S:x):WM(x*x+S*S),C>y&&(y=C),C<R&&(R=C);r==="random"&&a1(m),m.max=y-R,m.min=R,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(E>g?g-1:u?u==="y"?g/E:E:Math.max(E,g/E))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=In(t.amount||t.each)||0,i=i&&g<0?pD(i):i}return g=(m[f]-m.min)/m.max||0,kt(m.b+(i?i(g):g)*m.v)+m.u}},Zm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=kt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(rs(i)?0:In(i))}},u1=function(e,t){var i=Fn(e),r,s;return!i&&Lr(e)&&(r=i=e.radius||Gi,e.values?(e=Wi(e.values),(s=!rs(e[0]))&&(r*=r)):e=Zm(e.increment)),to(t,i?jt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Gi,c=0,d=e.length,f,p;d--;)s?(f=e[d].x-a,p=e[d].y-l,f=f*f+p*p):f=Math.abs(e[d]-a),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:o,s||c===o||rs(o)?c:c+In(o)}:Zm(e))},c1=function(e,t,i,r){return to(Fn(e)?!t:i===!0?!!(i=0):!r,function(){return Fn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},nD=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},iD=function(e,t){return function(i){return e(parseFloat(i))+(t||In(i))}},rD=function(e,t,i){return d1(e,t,0,1,i)},f1=function(e,t,i){return to(i,function(r){return e[~~t(r)]})},sD=function n(e,t,i){var r=t-e;return Fn(e)?f1(e,n(0,e.length),t):to(i,function(s){return(r+(s-e)%r)%r+e})},oD=function n(e,t,i){var r=t-e,s=r*2;return Fn(e)?f1(e,n(0,e.length-1),t):to(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Xu=function(e){return e.replace(zL,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(BL);return c1(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},d1=function(e,t,i,r,s){var o=t-e,a=r-i;return to(s,function(l){return i+((l-e)/o*a||0)})},aD=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=gn(e),a={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Fn(e)&&!Fn(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(_){_*=d;var g=Math.min(f,~~_);return c[g](_-g)},i=t}else r||(e=hl(Fn(e)?[]:{},e));if(!c){for(l in t)P_.call(a,e,l,"get",t[l]);s=function(_){return I_(_,a)||(o?e.p:e)}}}return to(i,s)},mx=function(e,t,i){var r=e.labels,s=Gi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ei=function(e,t,i){var r=e.vars,s=r[t],o=Ot,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Bs.length&&md(),a&&(Ot=a),c=l?s.apply(u,l):s.call(u),Ot=o,c},Xl=function(e){return js(e),e.scrollTrigger&&e.scrollTrigger.kill(!!wn),e.progress()<1&&Ei(e,"onInterrupt"),e},Ua,h1=[],p1=function(e){if(e)if(e=!e.name&&e.default||e,E_()||e.headless){var t=e.name,i=jt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Wu,render:I_,add:P_,kill:wD,modifier:ED,rawVars:0},o={targetTest:0,get:0,getSetter:N_,aliases:{},register:0};if(gl(),e!==r){if(vi[t])return;Pi(r,Pi(gd(e,s),o)),hl(r.prototype,hl(s,gd(e,o))),vi[r.prop=t]=r,e.targetTest&&(Lf.push(r),A_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}KM(t,r),e.register&&e.register(ci,r,li)}else h1.push(e)},At=255,jl={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},ip=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*At+.5|0},m1=function(e,t,i){var r=e?rs(e)?[e>>16,e>>8&At,e&At]:0:jl.black,s,o,a,l,u,c,d,f,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),jl[e])r=jl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&At,r&At,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&At,e&At]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(cx),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=ip(l+1/3,s,o),r[1]=ip(l,s,o),r[2]=ip(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(jM),i&&r.length<4&&(r[3]=1),r}else r=e.match(cx)||jl.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/At,o=r[1]/At,a=r[2]/At,d=Math.max(s,o,a),f=Math.min(s,o,a),c=(d+f)/2,d===f?l=u=0:(p=d-f,u=c>.5?p/(2-d-f):p/(d+f),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},g1=function(e){var t=[],i=[],r=-1;return e.split(Hs).forEach(function(s){var o=s.match(Ia)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},gx=function(e,t,i){var r="",s=(e+r).match(Hs),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=m1(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=g1(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Hs,"1").split(Ia),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Hs),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Hs=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in jl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),lD=/hsl[a]?\(/,_1=function(e){var t=e.join(" "),i;if(Hs.lastIndex=0,Hs.test(t))return i=lD.test(t),e[1]=gx(e[1],i),e[0]=gx(e[0],i,g1(e[1])),!0},ju,yi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,f,p,_=function g(m){var h=n()-r,v=m===!0,x,S,C,T;if((h>e||h<0)&&(i+=h-t),r+=h,C=r-i,x=C-o,(x>0||v)&&(T=++d.frame,f=C-d.time*1e3,d.time=C=C/1e3,o+=x+(x>=s?4:s-x),S=1),v||(l=u(g)),S)for(p=0;p<a.length;p++)a[p](C,f,T,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){$M&&(!Xm&&E_()&&(_r=Xm=window,w_=_r.document||{},bi.gsap=ci,(_r.gsapVersions||(_r.gsapVersions=[])).push(ci.version),qM(pd||_r.GreenSockGlobals||!_r.gsap&&_r||{}),h1.forEach(p1)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},ju=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),ju=0,u=Wu},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,h,v){var x=h?function(S,C,T,y){m(S,C,T,y),d.remove(x)}:m;return d.remove(m),a[v?"unshift":"push"](x),gl(),x},remove:function(m,h){~(h=a.indexOf(m))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},d}(),gl=function(){return!ju&&yi.wake()},dt={},uD=/^[\d.\-M][\d.\-,\s]/,cD=/["']/g,fD=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(cD,"").trim():+u,r=l.substr(a+1).trim();return t},dD=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},hD=function(e){var t=(e+"").split("("),i=dt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[fD(t[1])]:dD(e).split(",").map(e1)):dt._CE&&uD.test(e)?dt._CE("",e):i},pD=function(e){return function(t){return 1-e(1-t)}},Do=function(e,t){return e&&(jt(e)?e:dt[e]||hD(e))||t},qo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ai(e,function(a){dt[a]=bi[a]=s,dt[o=a.toLowerCase()]=i;for(var l in s)dt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=dt[a+"."+l]=s[l]}),s},v1=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},rp=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Wm*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*kL((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:v1(a);return s=Wm/s,l.config=function(u,c){return n(e,u,c)},l},sp=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:v1(i);return r.config=function(s){return n(e,s)},r};ai("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;qo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});dt.Linear.easeNone=dt.none=dt.Linear.easeIn;qo("Elastic",rp("in"),rp("out"),rp());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};qo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);qo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});qo("Circ",function(n){return-(WM(1-n*n)-1)});qo("Sine",function(n){return n===1?1:-FL(n*UL)+1});qo("Back",sp("in"),sp("out"),sp());dt.SteppedEase=dt.steps=bi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Ct;return function(a){return((r*ac(0,o,a)|0)+s)*i}}};Vu.ease=dt["quad.out"];ai("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return C_+=n+","+n+"Params,"});var x1=function(e,t){this.id=OL++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:QM,this.set=t?t.getSetter:N_},Yu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ml(this,+t.duration,1,1),this.data=t.data,Ot&&(this._ctx=Ot,Ot.data.push(this)),ju||yi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ml(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(gl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for($d(this,i),!s._dp||s.parent||i1(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Mr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ct||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),JM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+hx(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+hx(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?pl(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Ct?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?_d(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Ct?0:this._rts,this.totalTime(ac(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Yd(this),$L(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(gl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ct&&(this._tTime-=Ct)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=kt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Mr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(oi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_d(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=WL);var r=wn;return wn=i,b_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),wn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,px(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,px(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ui(this,i),oi(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,oi(r)),this._dur||(this._zTime=-Ct),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ct,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Ct)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=jt(i)?i:t1,l=function(){var c=r.then;r.then=null,s&&s(),jt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Xl(this)},n}();Pi(Yu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ct,_prom:0,_ps:!1,_rts:1});var ei=function(n){GM(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=oi(i.sortChildren),Bt&&Mr(i.parent||Bt,zr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&r1(zr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return fu(0,arguments,this),this},t.from=function(r,s,o){return fu(1,arguments,this),this},t.fromTo=function(r,s,o,a){return fu(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,cu(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Jt(r,s,Ui(this,o),1),this},t.call=function(r,s,o){return Mr(this,Jt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Jt(r,o,Ui(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,cu(o).immediateRender=oi(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,cu(a).immediateRender=oi(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:kt(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,p,_,g,m,h,v,x,S,C,T,y;if(this!==Bt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,S=this._start,x=this._ts,h=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=kt(c%m),c===l?(g=this._repeat,f=u):(C=kt(c/m),g=~~C,g&&g===C&&(f=u,g--),f>u&&(f=u)),C=pl(this._tTime,m),!a&&this._tTime&&C!==g&&this._tTime-C*m-this._dur<=0&&(C=g),T&&g&1&&(f=u-f,y=1),g!==C&&!this._lock){var R=T&&C&1,E=R===(T&&g&1);if(g<C&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(y?0:kt(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Ei(this,"onRepeat"),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,C=g),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,E&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!h)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=QL(this,kt(a),kt(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!C&&(Ei(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=-Ct);break}}p=_}else{p=this._last;for(var M=r<0?r:f;p;){if(_=p._prev,(p._act||M<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(M-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(M-p._start)*p._ts,s,o||wn&&b_(p)),f!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=M?-Ct:Ct);break}}p=_}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-Ct)._zTime=f>=a?1:-1,this._ts))return this._start=S,Yd(this),this.render(r,s,o);this._onUpdate&&!s&&Ei(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&js(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Ei(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(rs(s)||(s=Ui(this,s,r)),!(r instanceof Yu)){if(Fn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(gn(r))return this.addLabel(r,s);if(jt(r))r=Jt.delayedCall(0,r);else return this}return this!==r?Mr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Gi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Jt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return gn(r)?this.removeLabel(r):jt(r)?this.killTweensOf(r):(r.parent===this&&jd(this,r),r===this._recent&&(this._recent=this._last),Lo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=kt(yi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ui(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Jt.delayedCall(0,s||Wu,o);return a.data="isPause",this._hasPause=1,Mr(this,a,Ui(this,r))},t.removePause=function(r){var s=this._first;for(r=Ui(this,r);s;)s._start===r&&s.data==="isPause"&&js(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Ts!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Wi(r),l=this._first,u=rs(s),c;l;)l instanceof Jt?XL(l._targets,a)&&(u?(!Ts||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ui(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,p,_=Jt.to(o,Pi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Ct,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==m&&ml(_,m,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Pi({startAt:{time:Ui(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),mx(this,Ui(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),mx(this,Ui(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ct)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=kt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Lo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Lo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Gi,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Mr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=kt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;ml(o,o===Bt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Bt._ts&&(JM(Bt,_d(r,Bt)),ZM=yi.frame),yi.frame>=fx){fx+=Ci.autoSleep||120;var s=Bt._first;if((!s||!s._ts)&&Ci.autoSleep&&yi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||yi.sleep()}}},e}(Yu);Pi(ei.prototype,{_lock:0,_hasPause:0,_forcing:0});var mD=function(e,t,i,r,s,o,a){var l=new li(this._pt,e,t,0,1,T1,null,s),u=0,c=0,d,f,p,_,g,m,h,v;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Xu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(tp)||[];d=tp.exec(r);)_=d[0],g=r.substring(u,d.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:_.charAt(1)==="="?Ya(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},u=tp.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(YM.test(r)||h)&&(l.e=0),this._pt=l,l},P_=function(e,t,i,r,s,o,a,l,u,c){jt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:jt(d)?u?e[t.indexOf("set")||!jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=jt(d)?u?yD:E1:D_,_;if(gn(r)&&(~r.indexOf("random(")&&(r=Xu(r)),r.charAt(1)==="="&&(_=Ya(f,r)+(In(f)||0),(_||_===0)&&(r=_))),!c||f!==r||Qm)return!isNaN(f*r)&&r!==""?(_=new li(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?MD:w1,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!d&&!(t in e)&&T_(t,r),mD.call(this,e,t,f,r,p,l||Ci.stringFilter,u))},gD=function(e,t,i,r,s){if(jt(e)&&(e=du(e,s,t,i,r)),!Lr(e)||e.style&&e.nodeType||Fn(e)||XM(e))return gn(e)?du(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=du(e[a],s,t,i,r);return o},y1=function(e,t,i,r,s,o){var a,l,u,c;if(vi[e]&&(a=new vi[e]).init(s,a.rawVars?t[e]:gD(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new li(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Ua))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Ts,Qm,L_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,h=e.parent,v=h&&h.data==="nested"?h.vars.targets:m,x=e._overwrite==="auto"&&!S_,S=e.timeline,C=r.easeReverse||d,T,y,R,E,M,D,F,z,Y,K,j,V,N;if(S&&(!f||!s)&&(s="none"),e._ease=Do(s,Vu.ease),e._rEase=C&&(Do(C)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||f&&!r.stagger){if(z=m[0]?Po(m[0]).harness:0,V=z&&r[z.prop],T=gd(r,A_),g&&(g._zTime<0&&g.progress(1),t<0&&c&&a&&!p?g.render(-1,!0):g.revert(c&&_?Pf:GL),g._lazy=0),o){if(js(e._startAt=Jt.set(m,Pi({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!g&&oi(l),startAt:null,delay:0,onUpdate:u&&function(){return Ei(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn||!a&&!p)&&e._startAt.revert(Pf),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!g){if(t&&(a=!1),R=Pi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&oi(l),immediateRender:a,stagger:0,parent:h},T),V&&(R[z.prop]=V),js(e._startAt=Jt.set(m,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn?e._startAt.revert(Pf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Ct,Ct);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&oi(l)||l&&!_,y=0;y<m.length;y++){if(M=m[y],F=M._gsap||R_(m)[y]._gsap,e._ptLookup[y]=K={},jm[F.id]&&Bs.length&&md(),j=v===m?y:v.indexOf(M),z&&(Y=new z).init(M,V||T,e,j,v)!==!1&&(e._pt=E=new li(e._pt,M,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(Q){K[Q]=E}),Y.priority&&(D=1)),!z||V)for(R in T)vi[R]&&(Y=y1(R,T,e,j,M,v))?Y.priority&&(D=1):K[R]=E=P_.call(e,M,R,"get",T[R],j,v,0,r.stringFilter);e._op&&e._op[y]&&e.kill(M,e._op[y]),x&&e._pt&&(Ts=e,Bt.killTweensOf(M,K,e.globalTime(t)),N=!e.parent,Ts=0),e._pt&&l&&(jm[F.id]=1)}D&&A1(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!N,f&&t<=0&&S.render(Gi,!0,!0)},_D=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Qm=1,e.vars[t]="+=0",L_(e,a),Qm=0,l?Gu(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=Yt(i)+In(d.e)),d.b&&(d.b=c.s+In(d.b))},vD=function(e,t){var i=e[0]?Po(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=hl({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},xD=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Fn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},du=function(e,t,i,r,s){return jt(e)?e.call(t,i,r,s):gn(e)&&~e.indexOf("random(")?Xu(e):e},S1=C_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",M1={};ai(S1+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return M1[n]=1});var Jt=function(n){GM(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:cu(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,h=r.parent||Bt,v=(Fn(i)||XM(i)?rs(i[0]):"length"in r)?[i]:Wi(i),x,S,C,T,y,R,E,M;if(a._targets=v.length?R_(v):Gu("GSAP target "+i+" not found. https://gsap.com",!Ci.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||f||Qc(u)||Qc(c)){r=a.vars;var D=r.easeReverse||r.yoyoEase;if(x=a.timeline=new ei({data:"nested",defaults:g||{},targets:h&&h.data==="nested"?h.vars.targets:v}),x.kill(),x.parent=x._dp=zr(a),x._start=0,f||Qc(u)||Qc(c)){if(T=v.length,E=f&&l1(f),Lr(f))for(y in f)~S1.indexOf(y)&&(M||(M={}),M[y]=f[y]);for(S=0;S<T;S++)C=gd(r,M1),C.stagger=0,D&&(C.easeReverse=D),M&&hl(C,M),R=v[S],C.duration=+du(u,zr(a),S,R,v),C.delay=(+du(c,zr(a),S,R,v)||0)-a._delay,!f&&T===1&&C.delay&&(a._delay=c=C.delay,a._start+=c,C.delay=0),x.to(R,C,E?E(S,R,v):0),x._ease=dt.none;x.duration()?u=c=0:a.timeline=0}else if(_){cu(Pi(x.vars.defaults,{ease:"none"})),x._ease=Do(_.ease||r.ease||"none");var F=0,z,Y,K;if(Fn(_))_.forEach(function(j){return x.to(v,j,">")}),x.duration();else{C={};for(y in _)y==="ease"||y==="easeEach"||xD(y,_[y],C,_.easeEach);for(y in C)for(z=C[y].sort(function(j,V){return j.t-V.t}),F=0,S=0;S<z.length;S++)Y=z[S],K={ease:Y.e,duration:(Y.t-(S?z[S-1].t:0))/100*u},K[y]=Y.v,x.to(v,K,F),F+=K.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return p===!0&&!S_&&(Ts=zr(a),Bt.killTweensOf(v),Ts=0),Mr(h,zr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!_&&a._start===kt(h._time)&&oi(d)&&qL(zr(a))&&h.data!=="nested")&&(a._tTime=-Ct,a.render(Math.max(0,-c)||0)),m&&r1(zr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-Ct&&!c?l:r<Ct?0:r,f,p,_,g,m,h,v,x;if(!u)ZL(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,x=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(f=kt(d%g),d===l?(_=this._repeat,f=u):(m=kt(d/g),_=~~m,_&&_===m?(f=u,_--):f>u&&(f=u)),h=this._yoyo&&_&1,h&&(f=u-f),m=pl(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=d,this;_!==m&&this.vars.repeatRefresh&&!h&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(kt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(s1(this,c?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=f<a;if(S!==this._inv){var C=S?a:u-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(S?-1:1)/C:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/u);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(Ei(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Ym(this,r,s,o),Ei(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Ei(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Ym(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&js(this,1),!s&&!(c&&!a)&&(d||a||h)&&(Ei(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){ju||yi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||L_(this,u),c=this._ease(u/this._dur),_D(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):($d(this,0),this.parent||n1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Xl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!wn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ts&&Ts.vars.overwrite!==!0)._first||Xl(this),this.parent&&o!==this.timeline.totalDuration()&&ml(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Wi(r):a,u=this._ptLookup,c=this._pt,d,f,p,_,g,m,h;if((!s||s==="all")&&YL(a,l))return s==="all"&&(this._pt=0),Xl(this);for(d=this._op=this._op||[],s!=="all"&&(gn(s)&&(g={},ai(s,function(v){return g[v]=1}),s=g),s=vD(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){f=u[h],s==="all"?(d[h]=s,_=f,p={}):(p=d[h]=d[h]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&jd(this,m,"_pt"),delete f[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&Xl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return fu(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return fu(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Bt.killTweensOf(r,s,o)},e}(Yu);Pi(Jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ai("staggerTo,staggerFrom,staggerFromTo",function(n){Jt[n]=function(){var e=new ei,t=qm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var D_=function(e,t,i){return e[t]=i},E1=function(e,t,i){return e[t](i)},yD=function(e,t,i,r){return e[t](r.fp,i)},SD=function(e,t,i){return e.setAttribute(t,i)},N_=function(e,t){return jt(e[t])?E1:M_(e[t])&&e.setAttribute?SD:D_},w1=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},MD=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},T1=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},I_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},ED=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},wD=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?jd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},TD=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},A1=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},li=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||w1,this.d=l||this,this.set=u||D_,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=TD,this.m=i,this.mt=s,this.tween=r},n}();ai(C_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return A_[n]=1});bi.TweenMax=bi.TweenLite=Jt;bi.TimelineLite=bi.TimelineMax=ei;Bt=new ei({sortChildren:!1,defaults:Vu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ci.stringFilter=_1;var No=[],Df={},AD=[],_x=0,CD=0,op=function(e){return(Df[e]||AD).map(function(t){return t()})},Jm=function(){var e=Date.now(),t=[];e-_x>2&&(op("matchMediaInit"),No.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=_r.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),op("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),_x=e,op("matchMedia"))},C1=function(){function n(t,i){this.selector=i&&Km(i),this.data=[],this._r=[],this.isReverted=!1,this.id=CD++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){jt(i)&&(s=r,r=i,i=jt);var o=this,a=function(){var u=Ot,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=Km(s)),Ot=o,d=r.apply(o,arguments),jt(d)&&o._r.push(d),Ot=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===jt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ot;Ot=null,i(this),Ot=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Jt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof ei?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Jt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=No.length;o--;)No[o].id===this.id&&No.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),RD=function(){function n(t){this.contexts=[],this.scope=t,Ot&&Ot.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Lr(i)||(i={matches:i});var o=new C1(0,s||this.scope),a=o.conditions={},l,u,c;Ot&&!o.selector&&(o.selector=Ot.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=_r.matchMedia(i[u]),l&&(No.indexOf(o)<0&&No.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Jm):l.addEventListener("change",Jm)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),vd={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return p1(r)})},timeline:function(e){return new ei(e)},getTweensOf:function(e,t){return Bt.getTweensOf(e,t)},getProperty:function(e,t,i,r){gn(e)&&(e=Wi(e)[0]);var s=Po(e||{}).get,o=i?t1:e1;return i==="native"&&(i=""),e&&(t?o((vi[t]&&vi[t].get||s)(e,t,i,r)):function(a,l,u){return o((vi[a]&&vi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Wi(e),e.length>1){var r=e.map(function(c){return ci.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=vi[t],a=Po(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;Ua._pt=0,d.init(e,i?c+i:c,Ua,0,[e]),d.render(1,d),Ua._pt&&I_(1,Ua)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=ci.to(e,Pi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Do(e.ease,Vu.ease)),dx(Vu,e||{})},config:function(e){return dx(Ci,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!vi[a]&&!bi[a]&&Gu(t+" effect requires "+a+" plugin.")}),np[t]=function(a,l,u){return i(Wi(a),Pi(l||{},s),u)},o&&(ei.prototype[t]=function(a,l,u){return this.add(np[t](a,Lr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){dt[e]=Do(t)},parseEase:function(e,t){return arguments.length?Do(e,t):dt},getById:function(e){return Bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ei(e),r,s;for(i.smoothChildTiming=oi(e.smoothChildTiming),Bt.remove(i),i._dp=0,i._time=i._tTime=Bt._time,r=Bt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Jt&&r.vars.onComplete===r._targets[0]))&&Mr(i,r,r._start-r._delay),r=s;return Mr(Bt,i,0),i},context:function(e,t){return e?new C1(e,t):Ot},matchMedia:function(e){return new RD(e)},matchMediaRefresh:function(){return No.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Jm()},addEventListener:function(e,t){var i=Df[e]||(Df[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Df[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:sD,wrapYoyo:oD,distribute:l1,random:c1,snap:u1,normalize:rD,getUnit:In,clamp:eD,splitColor:m1,toArray:Wi,selector:Km,mapRange:d1,pipe:nD,unitize:iD,interpolate:aD,shuffle:a1},install:qM,effects:np,ticker:yi,updateRoot:ei.updateRoot,plugins:vi,globalTimeline:Bt,core:{PropTween:li,globals:KM,Tween:Jt,Timeline:ei,Animation:Yu,getCache:Po,_removeLinkedListItem:jd,reverting:function(){return wn},context:function(e){return e&&Ot&&(Ot.data.push(e),e._ctx=Ot),Ot},suppressOverwrites:function(e){return S_=e}}};ai("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return vd[n]=Jt[n]});yi.add(ei.updateRoot);Ua=vd.to({},{duration:0});var bD=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},PD=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=bD(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},ap=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(gn(s)&&(l={},ai(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}PD(a,s)}}}},ci=vd.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)wn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},ap("roundProps",Zm),ap("modifiers"),ap("snap",u1))||vd;Jt.version=ei.version=ci.version="3.15.0";$M=1;E_()&&gl();dt.Power0;dt.Power1;dt.Power2;dt.Power3;dt.Power4;dt.Linear;dt.Quad;dt.Cubic;dt.Quart;dt.Quint;dt.Strong;dt.Elastic;dt.Back;dt.SteppedEase;dt.Bounce;dt.Sine;dt.Expo;dt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vx,As,$a,U_,To,xx,O_,LD=function(){return typeof window<"u"},ss={},mo=180/Math.PI,qa=Math.PI/180,ma=Math.atan2,yx=1e8,F_=/([A-Z])/g,DD=/(left|right|width|margin|padding|x)/i,ND=/[\s,\(]\S/,wr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},eg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ID=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},UD=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},OD=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},FD=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},R1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},b1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},kD=function(e,t,i){return e.style[t]=i},zD=function(e,t,i){return e.style.setProperty(t,i)},BD=function(e,t,i){return e._gsap[t]=i},HD=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},VD=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},GD=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Vt="transform",ui=Vt+"Origin",WD=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in ss&&s){if(this.tfm=this.tfm||{},e!=="transform")e=wr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Hr(r,a)}):this.tfm[e]=o.x?o[e]:Hr(r,e),e===ui&&(this.tfm.zOrigin=o.zOrigin);else return wr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Vt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ui,t,"")),e=Vt}(s||t)&&this.props.push(e,t,s[e])},P1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},XD=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(F_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=O_(),(!s||!s.isStart)&&!i[Vt]&&(P1(i),r.zOrigin&&i[ui]&&(i[ui]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},L1=function(e,t){var i={target:e,props:[],revert:XD,save:WD};return e._gsap||ci.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},D1,tg=function(e,t){var i=As.createElementNS?As.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):As.createElement(e);return i&&i.style?i:As.createElement(e)},wi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(F_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,_l(t)||t,1)||""},Sx="O,Moz,ms,Ms,Webkit".split(","),_l=function(e,t,i){var r=t||To,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Sx[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Sx[o]:"")+e},ng=function(){LD()&&window.document&&(vx=window,As=vx.document,$a=As.documentElement,To=tg("div")||{style:{}},tg("div"),Vt=_l(Vt),ui=Vt+"Origin",To.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",D1=!!_l("perspective"),O_=ci.core.reverting,U_=1)},Mx=function(e){var t=e.ownerSVGElement,i=tg("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),$a.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),$a.removeChild(i),s},Ex=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},N1=function(e){var t,i;try{t=e.getBBox()}catch{t=Mx(e),i=1}return t&&(t.width||t.height)||i||(t=Mx(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ex(e,["x","cx","x1"])||0,y:+Ex(e,["y","cy","y1"])||0,width:0,height:0}:t},I1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&N1(e))},Ys=function(e,t){if(t){var i=e.style,r;t in ss&&t!==ui&&(t=Vt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(F_,"-$1").toLowerCase())):i.removeAttribute(t)}},Cs=function(e,t,i,r,s,o){var a=new li(e._pt,t,i,0,1,o?b1:R1);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},wx={deg:1,rad:1,turn:1},jD={grid:1,flex:1},$s=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=To.style,l=DD.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",_,g,m,h;if(r===o||!s||wx[r]||wx[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),h=e.getCTM&&I1(e),(p||o==="%")&&(ss[t]||~t.indexOf("adius")))return _=h?e.getBBox()[l?"width":"height"]:e[c],Yt(p?s/_*d:s/100*_);if(a[l?"width":"height"]=d+(f?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===As||!g.appendChild)&&(g=As.body),m=g._gsap,m&&p&&m.width&&l&&m.time===yi.time&&!m.uncache)return Yt(s/m.width*d);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,_=e[c],v?e.style[t]=v:Ys(e,t)}else(p||o==="%")&&!jD[wi(g,"display")]&&(a.position=wi(e,"position")),g===e&&(a.position="static"),g.appendChild(To),_=To[c],g.removeChild(To),a.position="absolute";return l&&p&&(m=Po(g),m.time=yi.time,m.width=g[c]),Yt(f?_*s/d:_&&s?d/_*s:0)},Hr=function(e,t,i,r){var s;return U_||ng(),t in wr&&t!=="transform"&&(t=wr[t],~t.indexOf(",")&&(t=t.split(",")[0])),ss[t]&&t!=="transform"?(s=qu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:yd(wi(e,ui))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=xd[t]&&xd[t](e,t,i)||wi(e,t)||QM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?$s(e,t,s,i)+i:s},YD=function(e,t,i,r){if(!i||i==="none"){var s=_l(t,e,1),o=s&&wi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=wi(e,"borderTopColor"))}var a=new li(this._pt,e.style,t,0,1,T1),l=0,u=0,c,d,f,p,_,g,m,h,v,x,S,C;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=wi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=wi(e,t)||r,g?e.style[t]=g:Ys(e,t)),c=[i,r],_1(c),i=c[0],r=c[1],f=i.match(Ia)||[],C=r.match(Ia)||[],C.length){for(;d=Ia.exec(r);)m=d[0],v=r.substring(l,d.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=f[u++]||"")&&(p=parseFloat(g)||0,S=g.substr((p+"").length),m.charAt(1)==="="&&(m=Ya(p,m)+S),h=parseFloat(m),x=m.substr((h+"").length),l=Ia.lastIndex-x.length,x||(x=x||Ci.units[t]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(p=$s(e,t,g,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:h-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?b1:R1;return YM.test(r)&&(a.e=0),this._pt=a,a},Tx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},$D=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Tx[i]||i,t[1]=Tx[r]||r,t.join(" ")},qD=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],ss[a]&&(l=1,a=a==="transformOrigin"?ui:Vt),Ys(i,a);l&&(Ys(i,Vt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",qu(i,1),o.uncache=1,P1(r)))}},xd={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new li(e._pt,t,i,0,0,qD);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},$u=[1,0,0,1,0,0],U1={},O1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ax=function(e){var t=wi(e,Vt);return O1(t)?$u:t.substr(7).match(jM).map(Yt)},k_=function(e,t){var i=e._gsap||Po(e),r=e.style,s=Ax(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?$u:s):(s===$u&&!e.offsetParent&&e!==$a&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,$a.appendChild(e)),s=Ax(e),l?r.display=l:Ys(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):$a.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ig=function(e,t,i,r,s,o){var a=e._gsap,l=s||k_(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],h=l[4],v=l[5],x=t.split(" "),S=parseFloat(x[0])||0,C=parseFloat(x[1])||0,T,y,R,E;i?l!==$u&&(y=p*m-_*g)&&(R=S*(m/y)+C*(-g/y)+(g*v-m*h)/y,E=S*(-_/y)+C*(p/y)-(p*v-_*h)/y,S=R,C=E):(T=N1(e),S=T.x+(~x[0].indexOf("%")?S/100*T.width:S),C=T.y+(~(x[1]||x[0]).indexOf("%")?C/100*T.height:C)),r||r!==!1&&a.smooth?(h=S-u,v=C-c,a.xOffset=d+(h*p+v*g)-h,a.yOffset=f+(h*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ui]="0px 0px",o&&(Cs(o,a,"xOrigin",u,S),Cs(o,a,"yOrigin",c,C),Cs(o,a,"xOffset",d,a.xOffset),Cs(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+C)},qu=function(e,t){var i=e._gsap||new x1(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=wi(e,ui)||"0",c,d,f,p,_,g,m,h,v,x,S,C,T,y,R,E,M,D,F,z,Y,K,j,V,N,Q,b,re,Te,$e,$,ie;return c=d=f=g=m=h=v=x=S=0,p=_=1,i.svg=!!(e.getCTM&&I1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Vt]!=="none"?l[Vt]:"")),r.scale=r.rotate=r.translate="none"),y=k_(e,i.svg),i.svg&&(i.uncache?(N=e.getBBox(),u=i.xOrigin-N.x+"px "+(i.yOrigin-N.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),ig(e,V||u,!!V||i.originIsAbsolute,i.smooth!==!1,y)),C=i.xOrigin||0,T=i.yOrigin||0,y!==$u&&(D=y[0],F=y[1],z=y[2],Y=y[3],c=K=y[4],d=j=y[5],y.length===6?(p=Math.sqrt(D*D+F*F),_=Math.sqrt(Y*Y+z*z),g=D||F?ma(F,D)*mo:0,v=z||Y?ma(z,Y)*mo+g:0,v&&(_*=Math.abs(Math.cos(v*qa))),i.svg&&(c-=C-(C*D+T*z),d-=T-(C*F+T*Y))):(ie=y[6],$e=y[7],b=y[8],re=y[9],Te=y[10],$=y[11],c=y[12],d=y[13],f=y[14],R=ma(ie,Te),m=R*mo,R&&(E=Math.cos(-R),M=Math.sin(-R),V=K*E+b*M,N=j*E+re*M,Q=ie*E+Te*M,b=K*-M+b*E,re=j*-M+re*E,Te=ie*-M+Te*E,$=$e*-M+$*E,K=V,j=N,ie=Q),R=ma(-z,Te),h=R*mo,R&&(E=Math.cos(-R),M=Math.sin(-R),V=D*E-b*M,N=F*E-re*M,Q=z*E-Te*M,$=Y*M+$*E,D=V,F=N,z=Q),R=ma(F,D),g=R*mo,R&&(E=Math.cos(R),M=Math.sin(R),V=D*E+F*M,N=K*E+j*M,F=F*E-D*M,j=j*E-K*M,D=V,K=N),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,h=180-h),p=Yt(Math.sqrt(D*D+F*F+z*z)),_=Yt(Math.sqrt(j*j+ie*ie)),R=ma(K,j),v=Math.abs(R)>2e-4?R*mo:0,S=$?1/($<0?-$:$):0),i.svg&&(V=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!O1(wi(e,Vt)),V&&e.setAttribute("transform",V))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Yt(p),i.scaleY=Yt(_),i.rotation=Yt(g)+a,i.rotationX=Yt(m)+a,i.rotationY=Yt(h)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ui]=yd(u)),i.xOffset=i.yOffset=0,i.force3D=Ci.force3D,i.renderTransform=i.svg?ZD:D1?F1:KD,i.uncache=0,i},yd=function(e){return(e=e.split(" "))[0]+" "+e[1]},lp=function(e,t,i){var r=In(t);return Yt(parseFloat(t)+parseFloat($s(e,"x",i+"px",r)))+r},KD=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,F1(e,t)},lo="0deg",Fl="0px",uo=") ",F1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,h=i.force3D,v=i.target,x=i.zOrigin,S="",C=h==="auto"&&e&&e!==1||h===!0;if(x&&(d!==lo||c!==lo)){var T=parseFloat(c)*qa,y=Math.sin(T),R=Math.cos(T),E;T=parseFloat(d)*qa,E=Math.cos(T),o=lp(v,o,y*E*-x),a=lp(v,a,-Math.sin(T)*-x),l=lp(v,l,R*E*-x+x)}m!==Fl&&(S+="perspective("+m+uo),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(C||o!==Fl||a!==Fl||l!==Fl)&&(S+=l!==Fl||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+uo),u!==lo&&(S+="rotate("+u+uo),c!==lo&&(S+="rotateY("+c+uo),d!==lo&&(S+="rotateX("+d+uo),(f!==lo||p!==lo)&&(S+="skew("+f+", "+p+uo),(_!==1||g!==1)&&(S+="scale("+_+", "+g+uo),v.style[Vt]=S||"translate(0, 0)"},ZD=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,h=i.yOffset,v=i.forceCSS,x=parseFloat(o),S=parseFloat(a),C,T,y,R,E;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=qa,u*=qa,C=Math.cos(l)*d,T=Math.sin(l)*d,y=Math.sin(l-u)*-f,R=Math.cos(l-u)*f,u&&(c*=qa,E=Math.tan(u-c),E=Math.sqrt(1+E*E),y*=E,R*=E,c&&(E=Math.tan(c),E=Math.sqrt(1+E*E),C*=E,T*=E)),C=Yt(C),T=Yt(T),y=Yt(y),R=Yt(R)):(C=d,R=f,T=y=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=$s(p,"x",o,"px"),S=$s(p,"y",a,"px")),(_||g||m||h)&&(x=Yt(x+_-(_*C+g*y)+m),S=Yt(S+g-(_*T+g*R)+h)),(r||s)&&(E=p.getBBox(),x=Yt(x+r/100*E.width),S=Yt(S+s/100*E.height)),E="matrix("+C+","+T+","+y+","+R+","+x+","+S+")",p.setAttribute("transform",E),v&&(p.style[Vt]=E)},QD=function(e,t,i,r,s){var o=360,a=gn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?mo:1),u=l-r,c=r+u+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*yx)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*yx)%o-~~(u/o)*o)),e._pt=f=new li(e._pt,t,i,r,u,ID),f.e=c,f.u="deg",e._props.push(i),f},Cx=function(e,t){for(var i in t)e[i]=t[i];return e},JD=function(e,t,i){var r=Cx({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,f,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Vt]=t,a=qu(i,1),Ys(i,Vt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Vt],o[Vt]=t,a=qu(i,1),o[Vt]=u);for(l in ss)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=In(u),_=In(c),d=p!==_?$s(i,l,u,_):parseFloat(u),f=parseFloat(c),e._pt=new li(e._pt,a,l,d,f-d,eg),e._pt.u=_||0,e._props.push(l));Cx(a,r)};ai("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});xd[e>1?"border"+n:n]=function(a,l,u,c,d){var f,p;if(arguments.length<4)return f=o.map(function(_){return Hr(a,_,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},o.forEach(function(_,g){return p[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,p,d)}});var k1={name:"css",register:ng,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,f,p,_,g,m,h,v,x,S,C,T,y,R,E;U_||ng(),this.styles=this.styles||L1(e),R=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(vi[g]&&y1(g,t,i,r,e,s)))){if(p=typeof c,_=xd[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Xu(c)),_)_(this,e,g,c,i)&&(y=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",Hs.lastIndex=0,Hs.test(u)||(m=In(u),h=In(c),h?m!==h&&(u=$s(e,g,u,h)+h):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),R.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],gn(u)&&~u.indexOf("random(")&&(u=Xu(u)),In(u+"")||u==="auto"||(u+=Ci.units[g]||In(Hr(e,g))||""),(u+"").charAt(1)==="="&&(u=Hr(e,g))):u=Hr(e,g),f=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),d=parseFloat(c),g in wr&&(g==="autoAlpha"&&(f===1&&Hr(e,"visibility")==="hidden"&&d&&(f=0),R.push("visibility",0,a.visibility),Cs(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=wr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in ss,x){if(this.styles.save(g),E=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=wi(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=c,c=wi(e,"perspective"),M?e.style.perspective=M:Ys(e,"perspective")}d=parseFloat(c)}if(S||(C=e._gsap,C.renderTransform&&!t.parseTransform||qu(e,t.parseTransform),T=t.smoothOrigin!==!1&&C.smooth,S=this._pt=new li(this._pt,a,Vt,0,1,C.renderTransform,C,0,-1),S.dep=1),g==="scale")this._pt=new li(this._pt,C,"scaleY",C.scaleY,(v?Ya(C.scaleY,v+d):d)-C.scaleY||0,eg),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(ui,0,a[ui]),c=$D(c),C.svg?ig(e,c,0,T,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==C.zOrigin&&Cs(this,C,"zOrigin",C.zOrigin,h),Cs(this,a,g,yd(u),yd(c)));continue}else if(g==="svgOrigin"){ig(e,c,1,T,0,this);continue}else if(g in U1){QD(this,C,g,f,v?Ya(f,v+c):c);continue}else if(g==="smoothOrigin"){Cs(this,C,"smooth",C.smooth,c);continue}else if(g==="force3D"){C[g]=c;continue}else if(g==="transform"){JD(this,c,e);continue}}else g in a||(g=_l(g)||g);if(x||(d||d===0)&&(f||f===0)&&!ND.test(c)&&g in a)m=(u+"").substr((f+"").length),d||(d=0),h=In(c)||(g in Ci.units?Ci.units[g]:m),m!==h&&(f=$s(e,g,u,h)),this._pt=new li(this._pt,x?C:a,g,f,(v?Ya(f,v+d):d)-f,!x&&(h==="px"||g==="zIndex")&&t.autoRound!==!1?FD:eg),this._pt.u=h||0,x&&E!==c?(this._pt.b=u,this._pt.e=E,this._pt.r=OD):m!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=UD);else if(g in a)YD.call(this,e,g,u,v?v+c:c);else if(g in e)this.add(e,g,u||e[g],v?v+c:c,r,s);else if(g!=="parseTransform"){T_(g,c);continue}x||(g in a?R.push(g,0,a[g]):typeof e[g]=="function"?R.push(g,2,e[g]()):R.push(g,1,u||e[g])),o.push(g)}}y&&A1(this)},render:function(e,t){if(t.tween._time||!O_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Hr,aliases:wr,getSetter:function(e,t,i){var r=wr[t];return r&&r.indexOf(",")<0&&(t=r),t in ss&&t!==ui&&(e._gsap.x||Hr(e,"x"))?i&&xx===i?t==="scale"?HD:BD:(xx=i||{})&&(t==="scale"?VD:GD):e.style&&!M_(e.style[t])?kD:~t.indexOf("-")?zD:N_(e,t)},core:{_removeProperty:Ys,_getMatrix:k_}};ci.utils.checkPrefix=_l;ci.core.getStyleSaver=L1;(function(n,e,t,i){var r=ai(n+","+e+","+t,function(s){ss[s]=1});ai(e,function(s){Ci.units[s]="deg",U1[s]=1}),wr[r[13]]=n+","+e,ai(i,function(s){var o=s.split(":");wr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ai("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ci.units[n]="px"});ci.registerPlugin(k1);var z1=ci.registerPlugin(k1)||ci;z1.core.Tween;function e3(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function t3(n,e,t){return e&&e3(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mn,Nf,Si,Rs,bs,Ka,B1,go,Za,H1,$r,er,V1,G1=function(){return Mn||typeof window<"u"&&(Mn=window.gsap)&&Mn.registerPlugin&&Mn},W1=1,Oa=[],st=[],br=[],hu=Date.now,rg=function(e,t){return t},n3=function(){var e=Za.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,st),r.push.apply(r,br),st=i,br=r,rg=function(o,a){return t[o](a)}},Vs=function(e,t){return~br.indexOf(e)&&br[br.indexOf(e)+1][t]},pu=function(e){return!!~H1.indexOf(e)},Hn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Bn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Jc="scrollLeft",ef="scrollTop",sg=function(){return $r&&$r.isPressed||st.cache++},Sd=function(e,t){var i=function r(s){if(s||s===0){W1&&(Si.history.scrollRestoration="manual");var o=$r&&$r.isPressed;s=r.v=Math.round(s)||($r&&$r.iOS?1:0),e(s),r.cacheID=st.cache,o&&rg("ss",s)}else(t||st.cache!==r.cacheID||rg("ref"))&&(r.cacheID=st.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Yn={s:Jc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Sd(function(n){return arguments.length?Si.scrollTo(n,an.sc()):Si.pageXOffset||Rs[Jc]||bs[Jc]||Ka[Jc]||0})},an={s:ef,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Yn,sc:Sd(function(n){return arguments.length?Si.scrollTo(Yn.sc(),n):Si.pageYOffset||Rs[ef]||bs[ef]||Ka[ef]||0})},Zn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Mn.utils.toArray)(e)[0]||(typeof e=="string"&&Mn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},i3=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},qs=function(e,t){var i=t.s,r=t.sc;pu(e)&&(e=Rs.scrollingElement||bs);var s=st.indexOf(e),o=r===an.sc?1:2;!~s&&(s=st.push(e)-1),st[s+o]||Hn(e,"scroll",sg);var a=st[s+o],l=a||(st[s+o]=Sd(Vs(e,i),!0)||(pu(e)?r:Sd(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=Mn.getProperty(e,"scrollBehavior")==="smooth"),l},og=function(e,t,i){var r=e,s=e,o=hu(),a=o,l=t||50,u=Math.max(500,l*3),c=function(_,g){var m=hu();g||m-o>l?(s=r,r=_,a=o,o=m):i?r+=_:r=s+(_-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(_){var g=a,m=s,h=hu();return(_||_===0)&&_!==r&&c(_),o===a||h-a>u?0:(r+(i?m:-m))/((i?h:o)-g)*1e3};return{update:c,reset:d,getVelocity:f}},kl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Rx=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},X1=function(){Za=Mn.core.globals().ScrollTrigger,Za&&Za.core&&n3()},j1=function(e){return Mn=e||G1(),!Nf&&Mn&&typeof document<"u"&&document.body&&(Si=window,Rs=document,bs=Rs.documentElement,Ka=Rs.body,H1=[Si,Rs,bs,Ka],Mn.utils.clamp,V1=Mn.core.context||function(){},go="onpointerenter"in Ka?"pointer":"mouse",B1=qt.isTouch=Si.matchMedia&&Si.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Si||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,er=qt.eventTypes=("ontouchstart"in bs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in bs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return W1=0},500),Nf=1),Za||X1(),Nf};Yn.op=an;st.cache=0;var qt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Nf||j1(Mn)||console.warn("Please gsap.registerPlugin(Observer)"),Za||X1();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,f=i.onStopDelay,p=i.ignore,_=i.wheelSpeed,g=i.event,m=i.onDragStart,h=i.onDragEnd,v=i.onDrag,x=i.onPress,S=i.onRelease,C=i.onRight,T=i.onLeft,y=i.onUp,R=i.onDown,E=i.onChangeX,M=i.onChangeY,D=i.onChange,F=i.onToggleX,z=i.onToggleY,Y=i.onHover,K=i.onHoverEnd,j=i.onMove,V=i.ignoreCheck,N=i.isNormalizer,Q=i.onGestureStart,b=i.onGestureEnd,re=i.onWheel,Te=i.onEnable,$e=i.onDisable,$=i.onClick,ie=i.scrollSpeed,he=i.capture,fe=i.allowClicks,De=i.lockAxis,le=i.onLockAxis;this.target=a=Zn(a)||bs,this.vars=i,p&&(p=Mn.utils.toArray(p)),r=r||1e-9,s=s||0,_=_||1,ie=ie||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(Si.getComputedStyle(Ka).lineHeight)||22);var ve,Ce,P,ce,we,We,Ee,B=this,Re=0,ke=0,L=i.passive||!c&&i.passive!==!1,w=qs(a,Yn),G=qs(a,an),ee=w(),J=G(),Z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&er[0]==="pointerdown",pe=pu(a),se=a.ownerDocument||Rs,me=[0,0,0],Ue=[0,0,0],oe=0,ge=function(){return oe=hu()},Oe=function(Fe,ut){return(B.event=Fe)&&p&&i3(Fe.target,p)||ut&&Z&&Fe.pointerType!=="touch"||V&&V(Fe,ut)},He=function(){B._vx.reset(),B._vy.reset(),Ce.pause(),d&&d(B)},_e=function(){var Fe=B.deltaX=Rx(me),ut=B.deltaY=Rx(Ue),xe=Math.abs(Fe)>=r,Ke=Math.abs(ut)>=r;D&&(xe||Ke)&&D(B,Fe,ut,me,Ue),xe&&(C&&B.deltaX>0&&C(B),T&&B.deltaX<0&&T(B),E&&E(B),F&&B.deltaX<0!=Re<0&&F(B),Re=B.deltaX,me[0]=me[1]=me[2]=0),Ke&&(R&&B.deltaY>0&&R(B),y&&B.deltaY<0&&y(B),M&&M(B),z&&B.deltaY<0!=ke<0&&z(B),ke=B.deltaY,Ue[0]=Ue[1]=Ue[2]=0),(ce||P)&&(j&&j(B),P&&(m&&P===1&&m(B),v&&v(B),P=0),ce=!1),We&&!(We=!1)&&le&&le(B),we&&(re(B),we=!1),ve=0},Be=function(Fe,ut,xe){me[xe]+=Fe,Ue[xe]+=ut,B._vx.update(Fe),B._vy.update(ut),u?ve||(ve=requestAnimationFrame(_e)):_e()},Ye=function(Fe,ut){De&&!Ee&&(B.axis=Ee=Math.abs(Fe)>Math.abs(ut)?"x":"y",We=!0),Ee!=="y"&&(me[2]+=Fe,B._vx.update(Fe,!0)),Ee!=="x"&&(Ue[2]+=ut,B._vy.update(ut,!0)),u?ve||(ve=requestAnimationFrame(_e)):_e()},ot=function(Fe){if(!Oe(Fe,1)){Fe=kl(Fe,c);var ut=Fe.clientX,xe=Fe.clientY,Ke=ut-B.x,Xe=xe-B.y,Qe=B.isDragging;B.x=ut,B.y=xe,(Qe||(Ke||Xe)&&(Math.abs(B.startX-ut)>=s||Math.abs(B.startY-xe)>=s))&&(P||(P=Qe?2:1),Qe||(B.isDragging=!0),Ye(Ke,Xe))}},U=B.onPress=function(Ge){Oe(Ge,1)||Ge&&Ge.button||(B.axis=Ee=null,Ce.pause(),B.isPressed=!0,Ge=kl(Ge),Re=ke=0,B.startX=B.x=Ge.clientX,B.startY=B.y=Ge.clientY,B._vx.reset(),B._vy.reset(),Hn(N?a:se,er[1],ot,L,!0),B.deltaX=B.deltaY=0,x&&x(B))},q=B.onRelease=function(Ge){if(!Oe(Ge,1)){Bn(N?a:se,er[1],ot,!0);var Fe=!isNaN(B.y-B.startY),ut=B.isDragging,xe=ut&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),Ke=kl(Ge);!xe&&Fe&&(B._vx.reset(),B._vy.reset(),c&&fe&&Mn.delayedCall(.08,function(){if(hu()-oe>300&&!Ge.defaultPrevented){if(Ge.target.click)Ge.target.click();else if(se.createEvent){var Xe=se.createEvent("MouseEvents");Xe.initMouseEvent("click",!0,!0,Si,1,Ke.screenX,Ke.screenY,Ke.clientX,Ke.clientY,!1,!1,!1,!1,0,null),Ge.target.dispatchEvent(Xe)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,d&&ut&&!N&&Ce.restart(!0),P&&_e(),h&&ut&&h(B),S&&S(B,xe)}},te=function(Fe){return Fe.touches&&Fe.touches.length>1&&(B.isGesturing=!0)&&Q(Fe,B.isDragging)},ne=function(){return(B.isGesturing=!1)||b(B)},ae=function(Fe){if(!Oe(Fe)){var ut=w(),xe=G();Be((ut-ee)*ie,(xe-J)*ie,1),ee=ut,J=xe,d&&Ce.restart(!0)}},Ae=function(Fe){if(!Oe(Fe)){Fe=kl(Fe,c),re&&(we=!0);var ut=(Fe.deltaMode===1?l:Fe.deltaMode===2?Si.innerHeight:1)*_;Be(Fe.deltaX*ut,Fe.deltaY*ut,0),d&&!N&&Ce.restart(!0)}},qe=function(Fe){if(!Oe(Fe)){var ut=Fe.clientX,xe=Fe.clientY,Ke=ut-B.x,Xe=xe-B.y;B.x=ut,B.y=xe,ce=!0,d&&Ce.restart(!0),(Ke||Xe)&&Ye(Ke,Xe)}},yt=function(Fe){B.event=Fe,Y(B)},lt=function(Fe){B.event=Fe,K(B)},Ze=function(Fe){return Oe(Fe)||kl(Fe,c)&&$(B)};Ce=B._dc=Mn.delayedCall(f||.25,He).pause(),B.deltaX=B.deltaY=0,B._vx=og(0,50,!0),B._vy=og(0,50,!0),B.scrollX=w,B.scrollY=G,B.isDragging=B.isGesturing=B.isPressed=!1,V1(this),B.enable=function(Ge){return B.isEnabled||(Hn(pe?se:a,"scroll",sg),o.indexOf("scroll")>=0&&Hn(pe?se:a,"scroll",ae,L,he),o.indexOf("wheel")>=0&&Hn(a,"wheel",Ae,L,he),(o.indexOf("touch")>=0&&B1||o.indexOf("pointer")>=0)&&(Hn(a,er[0],U,L,he),Hn(se,er[2],q),Hn(se,er[3],q),fe&&Hn(a,"click",ge,!0,!0),$&&Hn(a,"click",Ze),Q&&Hn(se,"gesturestart",te),b&&Hn(se,"gestureend",ne),Y&&Hn(a,go+"enter",yt),K&&Hn(a,go+"leave",lt),j&&Hn(a,go+"move",qe)),B.isEnabled=!0,B.isDragging=B.isGesturing=B.isPressed=ce=P=!1,B._vx.reset(),B._vy.reset(),ee=w(),J=G(),Ge&&Ge.type&&U(Ge),Te&&Te(B)),B},B.disable=function(){B.isEnabled&&(Oa.filter(function(Ge){return Ge!==B&&pu(Ge.target)}).length||Bn(pe?se:a,"scroll",sg),B.isPressed&&(B._vx.reset(),B._vy.reset(),Bn(N?a:se,er[1],ot,!0)),Bn(pe?se:a,"scroll",ae,he),Bn(a,"wheel",Ae,he),Bn(a,er[0],U,he),Bn(se,er[2],q),Bn(se,er[3],q),Bn(a,"click",ge,!0),Bn(a,"click",Ze),Bn(se,"gesturestart",te),Bn(se,"gestureend",ne),Bn(a,go+"enter",yt),Bn(a,go+"leave",lt),Bn(a,go+"move",qe),B.isEnabled=B.isPressed=B.isDragging=!1,$e&&$e(B))},B.kill=B.revert=function(){B.disable();var Ge=Oa.indexOf(B);Ge>=0&&Oa.splice(Ge,1),$r===B&&($r=0)},Oa.push(B),N&&pu(a)&&($r=B),B.enable(g)},t3(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();qt.version="3.15.0";qt.create=function(n){return new qt(n)};qt.register=j1;qt.getAll=function(){return Oa.slice()};qt.getById=function(n){return Oa.filter(function(e){return e.vars.id===n})[0]};G1()&&Mn.registerPlugin(qt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ne,xa,rt,Mt,xi,vt,z_,Md,Ku,mu,Yl,tf,Pn,qd,ag,Xn,bx,Px,ya,Y1,up,$1,Gn,lg,q1,K1,gs,ug,B_,Qa,H_,gu,cg,cp,nf=1,Ln=Date.now,fp=Ln(),ji=0,$l=0,Lx=function(e,t,i){var r=_i(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Dx=function(e,t){return t&&(!_i(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},r3=function n(){return $l&&requestAnimationFrame(n)},Nx=function(){return qd=1},Ix=function(){return qd=0},vr=function(e){return e},ql=function(e){return Math.round(e*1e5)/1e5||0},Z1=function(){return typeof window<"u"},Q1=function(){return Ne||Z1()&&(Ne=window.gsap)&&Ne.registerPlugin&&Ne},Wo=function(e){return!!~z_.indexOf(e)},J1=function(e){return(e==="Height"?H_:rt["inner"+e])||xi["client"+e]||vt["client"+e]},eE=function(e){return Vs(e,"getBoundingClientRect")||(Wo(e)?function(){return kf.width=rt.innerWidth,kf.height=H_,kf}:function(){return Gr(e)})},s3=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Vs(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?J1(s):e["client"+s])||0}},o3=function(e,t){return!t||~br.indexOf(e)?eE(e):function(){return kf}},Tr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Vs(e,i))?o()-eE(e)()[s]:Wo(e)?(xi[i]||vt[i])-J1(r):e[i]-e["offset"+r])},rf=function(e,t){for(var i=0;i<ya.length;i+=3)(!t||~t.indexOf(ya[i+1]))&&e(ya[i],ya[i+1],ya[i+2])},_i=function(e){return typeof e=="string"},Un=function(e){return typeof e=="function"},Kl=function(e){return typeof e=="number"},_o=function(e){return typeof e=="object"},zl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},ga=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},_a=Math.abs,tE="left",nE="top",V_="right",G_="bottom",Io="width",Uo="height",_u="Right",vu="Left",xu="Top",yu="Bottom",Qt="padding",zi="margin",vl="Width",W_="Height",sn="px",Bi=function(e){return rt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},a3=function(e){var t=Bi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Ux=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Gr=function(e,t){var i=t&&Bi(e)[ag]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ne.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},Ed=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},iE=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},l3=function(e){return function(t){return Ne.utils.snap(iE(e),t)}},X_=function(e){var t=Ne.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},u3=function(e){return function(t,i){return X_(iE(e))(t,i.direction)}},sf=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},hn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},dn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},of=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Ox={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},af={toggleActions:"play",anticipatePin:0},wd={top:0,left:0,center:.5,bottom:1,right:1},If=function(e,t){if(_i(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in wd?wd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},lf=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,f=s.indent,p=s.fontWeight,_=Mt.createElement("div"),g=Wo(i)||Vs(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,h=g?vt:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,x=v?u:c,S="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(S+=(r===an?V_:G_)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=S,_.innerText=t||t===0?e+"-"+t:e,h.children[0]?h.insertBefore(_,h.children[0]):h.appendChild(_),_._offset=_["offset"+r.op.d2],Uf(_,0,r,v),_},Uf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+vl]=1,s["border"+a+vl]=0,s[i.p]=t+"px",Ne.set(e,s)},nt=[],fg={},Zu,Fx=function(){return Ln()-ji>34&&(Zu||(Zu=requestAnimationFrame(Zr)))},va=function(){(!Gn||!Gn.isPressed||Gn.startX>vt.clientWidth)&&(st.cache++,Gn?Zu||(Zu=requestAnimationFrame(Zr)):Zr(),ji||jo("scrollStart"),ji=Ln())},dp=function(){K1=rt.innerWidth,q1=rt.innerHeight},Zl=function(e){st.cache++,(e===!0||!Pn&&!$1&&!Mt.fullscreenElement&&!Mt.webkitFullscreenElement&&(!lg||K1!==rt.innerWidth||Math.abs(rt.innerHeight-q1)>rt.innerHeight*.25))&&Md.restart(!0)},Xo={},c3=[],rE=function n(){return dn(tt,"scrollEnd",n)||Ao(!0)},jo=function(e){return Xo[e]&&Xo[e].map(function(t){return t()})||c3},mi=[],sE=function(e){for(var t=0;t<mi.length;t+=5)(!e||mi[t+4]&&mi[t+4].query===e)&&(mi[t].style.cssText=mi[t+1],mi[t].getBBox&&mi[t].setAttribute("transform",mi[t+2]||""),mi[t+3].uncache=1)},oE=function(){return st.forEach(function(e){return Un(e)&&++e.cacheID&&(e.rec=e())})},j_=function(e,t){var i;for(Xn=0;Xn<nt.length;Xn++)i=nt[Xn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));gu=!0,t&&sE(t),t||jo("revert")},aE=function(e,t){st.cache++,(t||!jn)&&st.forEach(function(i){return Un(i)&&i.cacheID++&&(i.rec=0)}),_i(e)&&(rt.history.scrollRestoration=B_=e)},jn,Oo=0,kx,f3=function(){if(kx!==Oo){var e=kx=Oo;requestAnimationFrame(function(){return e===Oo&&Ao(!0)})}},lE=function(){vt.appendChild(Qa),H_=!Gn&&Qa.offsetHeight||rt.innerHeight,vt.removeChild(Qa)},zx=function(e){return Ku(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ao=function(e,t){if(xi=Mt.documentElement,vt=Mt.body,z_=[rt,Mt,xi,vt],ji&&!e&&!gu){hn(tt,"scrollEnd",rE);return}lE(),jn=tt.isRefreshing=!0,gu||oE();var i=jo("refreshInit");Y1&&tt.sort(),t||j_(),st.forEach(function(r){Un(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),nt.slice(0).forEach(function(r){return r.refresh()}),gu=!1,nt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),cg=1,zx(!0),nt.forEach(function(r){var s=Tr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),zx(!1),cg=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),st.forEach(function(r){Un(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),aE(B_,1),Md.pause(),Oo++,jn=2,Zr(2),nt.forEach(function(r){return Un(r.vars.onRefresh)&&r.vars.onRefresh(r)}),jn=tt.isRefreshing=!1,jo("refresh")},dg=0,Of=1,Su,Zr=function(e){if(e===2||!jn&&!gu){tt.isUpdating=!0,Su&&Su.update(0);var t=nt.length,i=Ln(),r=i-fp>=50,s=t&&nt[0].scroll();if(Of=dg>s?-1:1,jn||(dg=s),r&&(ji&&!qd&&i-ji>200&&(ji=0,jo("scrollEnd")),Yl=fp,fp=i),Of<0){for(Xn=t;Xn-- >0;)nt[Xn]&&nt[Xn].update(0,r);Of=1}else for(Xn=0;Xn<t;Xn++)nt[Xn]&&nt[Xn].update(0,r);tt.isUpdating=!1}Zu=0},hg=[tE,nE,G_,V_,zi+yu,zi+_u,zi+xu,zi+vu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ff=hg.concat([Io,Uo,"boxSizing","max"+vl,"max"+W_,"position",zi,Qt,Qt+xu,Qt+_u,Qt+yu,Qt+vu]),d3=function(e,t,i){Ja(i);var r=e._gsap;if(r.spacerIsNative)Ja(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},hp=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=hg.length,o=t.style,a=e.style,l;s--;)l=hg[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[G_]=a[V_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Io]=Ed(e,Yn)+sn,o[Uo]=Ed(e,an)+sn,o[Qt]=a[zi]=a[nE]=a[tE]="0",Ja(r),a[Io]=a["max"+vl]=i[Io],a[Uo]=a["max"+W_]=i[Uo],a[Qt]=i[Qt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},h3=/([A-Z])/g,Ja=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ne.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(h3,"-$1").toLowerCase())}},uf=function(e){for(var t=Ff.length,i=e.style,r=[],s=0;s<t;s++)r.push(Ff[s],i[Ff[s]]);return r.t=e,r},p3=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},kf={left:0,top:0},Bx=function(e,t,i,r,s,o,a,l,u,c,d,f,p,_){Un(e)&&(e=e(l)),_i(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?If("0"+e.substr(3),i):0));var g=p?p.time():0,m,h,v;if(p&&p.seek(0),isNaN(e)||(e=+e),Kl(e))p&&(e=Ne.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&Uf(a,i,r,!0);else{Un(t)&&(t=t(l));var x=(e||"0").split(" "),S,C,T,y;v=Zn(t,l)||vt,S=Gr(v)||{},(!S||!S.left&&!S.top)&&Bi(v).display==="none"&&(y=v.style.display,v.style.display="block",S=Gr(v),y?v.style.display=y:v.style.removeProperty("display")),C=If(x[0],S[r.d]),T=If(x[1]||"0",i),e=S[r.p]-u[r.p]-c+C+s-T,a&&Uf(a,T,r,i-T<20||a._isStart&&T>20),i-=i-T}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var R=e+i,E=o._isStart;m="scroll"+r.d2,Uf(o,R,r,E&&R>20||!E&&(d?Math.max(vt[m],xi[m]):o.parentNode[m])<=R+1),d&&(u=Gr(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+sn))}return p&&v&&(m=Gr(v),p.seek(f),h=Gr(v),p._caScrollDist=m[r.p]-h[r.p],e=e/p._caScrollDist*f),p&&p.seek(g),p?e:Math.round(e)},m3=/(webkit|moz|length|cssText|inset)/i,Hx=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===vt){e._stOrig=s.cssText,a=Bi(e);for(o in a)!+o&&!m3.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ne.core.getCache(e).uncache=1,t.appendChild(e)}},uE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},cf=function(e,t,i){var r={};r[t.p]="+="+i,Ne.set(e,r)},Vx=function(e,t){var i=qs(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var f=o.tween,p=l.onComplete,_={};u=u||i();var g=uE(i,u,function(){f.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(u+c*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){st.cache++,o.tween&&Zr()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=Ne.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},hn(e,"wheel",i.wheelHandler),tt.isTouch&&hn(e,"touchmove",i.wheelHandler),s},tt=function(){function n(t,i){xa||n.register(Ne)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ug(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!$l){this.update=this.refresh=this.kill=vr;return}i=Ux(_i(i)||Kl(i)||i.nodeType?{trigger:i}:i,af);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,f=s.trigger,p=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,h=s.onScrubComplete,v=s.onSnapComplete,x=s.once,S=s.snap,C=s.pinReparent,T=s.pinSpacer,y=s.containerAnimation,R=s.fastScrollEnd,E=s.preventOverlaps,M=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Yn:an,D=!d&&d!==0,F=Zn(i.scroller||rt),z=Ne.core.getCache(F),Y=Wo(F),K=("pinType"in i?i.pinType:Vs(F,"pinType")||Y&&"fixed")==="fixed",j=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],V=D&&i.toggleActions.split(" "),N="markers"in i?i.markers:af.markers,Q=Y?0:parseFloat(Bi(F)["border"+M.p2+vl])||0,b=this,re=i.onRefreshInit&&function(){return i.onRefreshInit(b)},Te=s3(F,Y,M),$e=o3(F,Y),$=0,ie=0,he=0,fe=qs(F,M),De,le,ve,Ce,P,ce,we,We,Ee,B,Re,ke,L,w,G,ee,J,Z,pe,se,me,Ue,oe,ge,Oe,He,_e,Be,Ye,ot,U,q,te,ne,ae,Ae,qe,yt,lt;if(b._startClamp=b._endClamp=!1,b._dir=M,m*=45,b.scroller=F,b.scroll=y?y.time.bind(y):fe,Ce=fe(),b.vars=i,r=r||i.animation,"refreshPriority"in i&&(Y1=1,i.refreshPriority===-9999&&(Su=b)),z.tweenScroll=z.tweenScroll||{top:Vx(F,an),left:Vx(F,Yn)},b.tweenTo=De=z.tweenScroll[M.p],b.scrubDuration=function(xe){te=Kl(xe)&&xe,te?q?q.duration(xe):q=Ne.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:te,paused:!0,onComplete:function(){return h&&h(b)}}):(q&&q.progress(1).kill(),q=0)},r&&(r.vars.lazy=!1,r._initted&&!b.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),b.animation=r.pause(),r.scrollTrigger=b,b.scrubDuration(d),ot=0,l||(l=r.vars.id)),S&&((!_o(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in vt.style&&Ne.set(Y?[vt,xi]:F,{scrollBehavior:"auto"}),st.forEach(function(xe){return Un(xe)&&xe.target===(Y?Mt.scrollingElement||xi:F)&&(xe.smooth=!1)}),ve=Un(S.snapTo)?S.snapTo:S.snapTo==="labels"?l3(r):S.snapTo==="labelsDirectional"?u3(r):S.directional!==!1?function(xe,Ke){return X_(S.snapTo)(xe,Ln()-ie<500?0:Ke.direction)}:Ne.utils.snap(S.snapTo),ne=S.duration||{min:.1,max:2},ne=_o(ne)?mu(ne.min,ne.max):mu(ne,ne),ae=Ne.delayedCall(S.delay||te/2||.1,function(){var xe=fe(),Ke=Ln()-ie<500,Xe=De.tween;if((Ke||Math.abs(b.getVelocity())<10)&&!Xe&&!qd&&$!==xe){var Qe=(xe-ce)/w,Ft=r&&!D?r.totalProgress():Qe,it=Ke?0:(Ft-U)/(Ln()-Yl)*1e3||0,Rt=Ne.utils.clamp(-Qe,1-Qe,_a(it/2)*it/.185),nn=Qe+(S.inertia===!1?0:Rt),Lt,bt,St=S,fi=St.onStart,A=St.onInterrupt,O=St.onComplete;if(Lt=ve(nn,b),Kl(Lt)||(Lt=nn),bt=Math.max(0,Math.round(ce+Lt*w)),xe<=we&&xe>=ce&&bt!==xe){if(Xe&&!Xe._initted&&Xe.data<=_a(bt-xe))return;S.inertia===!1&&(Rt=Lt-Qe),De(bt,{duration:ne(_a(Math.max(_a(nn-Ft),_a(Lt-Ft))*.185/it/.05||0)),ease:S.ease||"power3",data:_a(bt-xe),onInterrupt:function(){return ae.restart(!0)&&A&&ga(b,A)},onComplete:function(){b.update(),$=fe(),r&&!D&&(q?q.resetTo("totalProgress",Lt,r._tTime/r._tDur):r.progress(Lt)),ot=U=r&&!D?r.totalProgress():b.progress,v&&v(b),O&&ga(b,O)}},xe,Rt*w,bt-xe-Rt*w),fi&&ga(b,fi,De.tween)}}else b.isActive&&$!==xe&&ae.restart(!0)}).pause()),l&&(fg[l]=b),f=b.trigger=Zn(f||p!==!0&&p),lt=f&&f._gsap&&f._gsap.stRevert,lt&&(lt=lt(b)),p=p===!0?f:Zn(p),_i(a)&&(a={targets:f,className:a}),p&&(_===!1||_===zi||(_=!_&&p.parentNode&&p.parentNode.style&&Bi(p.parentNode).display==="flex"?!1:Qt),b.pin=p,le=Ne.core.getCache(p),le.spacer?G=le.pinState:(T&&(T=Zn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),le.spacerIsNative=!!T,T&&(le.spacerState=uf(T))),le.spacer=Z=T||Mt.createElement("div"),Z.classList.add("pin-spacer"),l&&Z.classList.add("pin-spacer-"+l),le.pinState=G=uf(p)),i.force3D!==!1&&Ne.set(p,{force3D:!0}),b.spacer=Z=le.spacer,Ye=Bi(p),ge=Ye[_+M.os2],se=Ne.getProperty(p),me=Ne.quickSetter(p,M.a,sn),hp(p,Z,Ye),J=uf(p)),N){ke=_o(N)?Ux(N,Ox):Ox,B=lf("scroller-start",l,F,M,ke,0),Re=lf("scroller-end",l,F,M,ke,0,B),pe=B["offset"+M.op.d2];var Ze=Zn(Vs(F,"content")||F);We=this.markerStart=lf("start",l,Ze,M,ke,pe,0,y),Ee=this.markerEnd=lf("end",l,Ze,M,ke,pe,0,y),y&&(yt=Ne.quickSetter([We,Ee],M.a,sn)),!K&&!(br.length&&Vs(F,"fixedMarkers")===!0)&&(a3(Y?vt:F),Ne.set([B,Re],{force3D:!0}),He=Ne.quickSetter(B,M.a,sn),Be=Ne.quickSetter(Re,M.a,sn))}if(y){var Ge=y.vars.onUpdate,Fe=y.vars.onUpdateParams;y.eventCallback("onUpdate",function(){b.update(0,0,1),Ge&&Ge.apply(y,Fe||[])})}if(b.previous=function(){return nt[nt.indexOf(b)-1]},b.next=function(){return nt[nt.indexOf(b)+1]},b.revert=function(xe,Ke){if(!Ke)return b.kill(!0);var Xe=xe!==!1||!b.enabled,Qe=Pn;Xe!==b.isReverted&&(Xe&&(Ae=Math.max(fe(),b.scroll.rec||0),he=b.progress,qe=r&&r.progress()),We&&[We,Ee,B,Re].forEach(function(Ft){return Ft.style.display=Xe?"none":"block"}),Xe&&(Pn=b,b.update(Xe)),p&&(!C||!b.isActive)&&(Xe?d3(p,Z,G):hp(p,Z,Bi(p),Oe)),Xe||b.update(Xe),Pn=Qe,b.isReverted=Xe)},b.refresh=function(xe,Ke,Xe,Qe){if(!((Pn||!b.enabled)&&!Ke)){if(p&&xe&&ji){hn(n,"scrollEnd",rE);return}!jn&&re&&re(b),Pn=b,De.tween&&!Xe&&(De.tween.kill(),De.tween=0),q&&q.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Ie){return Ie.vars.immediateRender&&Ie.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),b.isReverted||b.revert(!0,!0),b._subPinOffset=!1;var Ft=Te(),it=$e(),Rt=y?y.duration():Tr(F,M),nn=w<=.01||!w,Lt=0,bt=Qe||0,St=_o(Xe)?Xe.end:i.end,fi=i.endTrigger||f,A=_o(Xe)?Xe.start:i.start||(i.start===0||!f?0:p?"0 0":"0 100%"),O=b.pinnedContainer=i.pinnedContainer&&Zn(i.pinnedContainer,b),X=f&&Math.max(0,nt.indexOf(b))||0,H=X,k,ue,Me,Pe,Se,be,Ve,ze,ht,Tt,pt,rn,ct;for(N&&_o(Xe)&&(rn=Ne.getProperty(B,M.p),ct=Ne.getProperty(Re,M.p));H-- >0;)be=nt[H],be.end||be.refresh(0,1)||(Pn=b),Ve=be.pin,Ve&&(Ve===f||Ve===p||Ve===O)&&!be.isReverted&&(Tt||(Tt=[]),Tt.unshift(be),be.revert(!0,!0)),be!==nt[H]&&(X--,H--);for(Un(A)&&(A=A(b)),A=Lx(A,"start",b),ce=Bx(A,f,Ft,M,fe(),We,B,b,it,Q,K,Rt,y,b._startClamp&&"_startClamp")||(p?-.001:0),Un(St)&&(St=St(b)),_i(St)&&!St.indexOf("+=")&&(~St.indexOf(" ")?St=(_i(A)?A.split(" ")[0]:"")+St:(Lt=If(St.substr(2),Ft),St=_i(A)?A:(y?Ne.utils.mapRange(0,y.duration(),y.scrollTrigger.start,y.scrollTrigger.end,ce):ce)+Lt,fi=f)),St=Lx(St,"end",b),we=Math.max(ce,Bx(St||(fi?"100% 0":Rt),fi,Ft,M,fe()+Lt,Ee,Re,b,it,Q,K,Rt,y,b._endClamp&&"_endClamp"))||-.001,Lt=0,H=X;H--;)be=nt[H]||{},Ve=be.pin,Ve&&be.start-be._pinPush<=ce&&!y&&be.end>0&&(k=be.end-(b._startClamp?Math.max(0,be.start):be.start),(Ve===f&&be.start-be._pinPush<ce||Ve===O)&&isNaN(A)&&(Lt+=k*(1-be.progress)),Ve===p&&(bt+=k));if(ce+=Lt,we+=Lt,b._startClamp&&(b._startClamp+=Lt),b._endClamp&&!jn&&(b._endClamp=we||-.001,we=Math.min(we,Tr(F,M))),w=we-ce||(ce-=.01)&&.001,nn&&(he=Ne.utils.clamp(0,1,Ne.utils.normalize(ce,we,Ae))),b._pinPush=bt,We&&Lt&&(k={},k[M.a]="+="+Lt,O&&(k[M.p]="-="+fe()),Ne.set([We,Ee],k)),p&&!(cg&&b.end>=Tr(F,M)))k=Bi(p),Pe=M===an,Me=fe(),Ue=parseFloat(se(M.a))+bt,!Rt&&we>1&&(pt=(Y?Mt.scrollingElement||xi:F).style,pt={style:pt,value:pt["overflow"+M.a.toUpperCase()]},Y&&Bi(vt)["overflow"+M.a.toUpperCase()]!=="scroll"&&(pt.style["overflow"+M.a.toUpperCase()]="scroll")),hp(p,Z,k),J=uf(p),ue=Gr(p,!0),ze=K&&qs(F,Pe?Yn:an)(),_?(Oe=[_+M.os2,w+bt+sn],Oe.t=Z,H=_===Qt?Ed(p,M)+w+bt:0,H&&(Oe.push(M.d,H+sn),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=H+sn)),Ja(Oe),O&&nt.forEach(function(Ie){Ie.pin===O&&Ie.vars.pinSpacing!==!1&&(Ie._subPinOffset=!0)}),K&&fe(Ae)):(H=Ed(p,M),H&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=H+sn)),K&&(Se={top:ue.top+(Pe?Me-ce:ze)+sn,left:ue.left+(Pe?ze:Me-ce)+sn,boxSizing:"border-box",position:"fixed"},Se[Io]=Se["max"+vl]=Math.ceil(ue.width)+sn,Se[Uo]=Se["max"+W_]=Math.ceil(ue.height)+sn,Se[zi]=Se[zi+xu]=Se[zi+_u]=Se[zi+yu]=Se[zi+vu]="0",Se[Qt]=k[Qt],Se[Qt+xu]=k[Qt+xu],Se[Qt+_u]=k[Qt+_u],Se[Qt+yu]=k[Qt+yu],Se[Qt+vu]=k[Qt+vu],ee=p3(G,Se,C),jn&&fe(0)),r?(ht=r._initted,up(1),r.render(r.duration(),!0,!0),oe=se(M.a)-Ue+w+bt,_e=Math.abs(w-oe)>1,K&&_e&&ee.splice(ee.length-2,2),r.render(0,!0,!0),ht||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),up(0)):oe=w,pt&&(pt.value?pt.style["overflow"+M.a.toUpperCase()]=pt.value:pt.style.removeProperty("overflow-"+M.a));else if(f&&fe()&&!y)for(ue=f.parentNode;ue&&ue!==vt;)ue._pinOffset&&(ce-=ue._pinOffset,we-=ue._pinOffset),ue=ue.parentNode;Tt&&Tt.forEach(function(Ie){return Ie.revert(!1,!0)}),b.start=ce,b.end=we,Ce=P=jn?Ae:fe(),!y&&!jn&&(Ce<Ae&&fe(Ae),b.scroll.rec=0),b.revert(!1,!0),ie=Ln(),ae&&($=-1,ae.restart(!0)),Pn=0,r&&D&&(r._initted||qe)&&r.progress()!==qe&&r.progress(qe||0,!0).render(r.time(),!0,!0),(nn||he!==b.progress||y||g||r&&!r._initted)&&(r&&!D&&(r._initted||he||r.vars.immediateRender!==!1)&&r.totalProgress(y&&ce<-.001&&!he?Ne.utils.normalize(ce,we,0):he,!0),b.progress=nn||(Ce-ce)/w===he?0:he),p&&_&&(Z._pinOffset=Math.round(b.progress*oe)),q&&q.invalidate(),isNaN(rn)||(rn-=Ne.getProperty(B,M.p),ct-=Ne.getProperty(Re,M.p),cf(B,M,rn),cf(We,M,rn-(Qe||0)),cf(Re,M,ct),cf(Ee,M,ct-(Qe||0))),nn&&!jn&&b.update(),c&&!jn&&!L&&(L=!0,c(b),L=!1)}},b.getVelocity=function(){return(fe()-P)/(Ln()-Yl)*1e3||0},b.endAnimation=function(){zl(b.callbackAnimation),r&&(q?q.progress(1):r.paused()?D||zl(r,b.direction<0,1):zl(r,r.reversed()))},b.labelToScroll=function(xe){return r&&r.labels&&(ce||b.refresh()||ce)+r.labels[xe]/r.duration()*w||0},b.getTrailing=function(xe){var Ke=nt.indexOf(b),Xe=b.direction>0?nt.slice(0,Ke).reverse():nt.slice(Ke+1);return(_i(xe)?Xe.filter(function(Qe){return Qe.vars.preventOverlaps===xe}):Xe).filter(function(Qe){return b.direction>0?Qe.end<=ce:Qe.start>=we})},b.update=function(xe,Ke,Xe){if(!(y&&!Xe&&!xe)){var Qe=jn===!0?Ae:b.scroll(),Ft=xe?0:(Qe-ce)/w,it=Ft<0?0:Ft>1?1:Ft||0,Rt=b.progress,nn,Lt,bt,St,fi,A,O,X;if(Ke&&(P=Ce,Ce=y?fe():Qe,S&&(U=ot,ot=r&&!D?r.totalProgress():it)),m&&p&&!Pn&&!nf&&ji&&(!it&&ce<Qe+(Qe-P)/(Ln()-Yl)*m?it=1e-4:it===1&&we>Qe+(Qe-P)/(Ln()-Yl)*m&&(it=.9999)),it!==Rt&&b.enabled){if(nn=b.isActive=!!it&&it<1,Lt=!!Rt&&Rt<1,A=nn!==Lt,fi=A||!!it!=!!Rt,b.direction=it>Rt?1:-1,b.progress=it,fi&&!Pn&&(bt=it&&!Rt?0:it===1?1:Rt===1?2:3,D&&(St=!A&&V[bt+1]!=="none"&&V[bt+1]||V[bt],X=r&&(St==="complete"||St==="reset"||St in r))),E&&(A||X)&&(X||d||!r)&&(Un(E)?E(b):b.getTrailing(E).forEach(function(Me){return Me.endAnimation()})),D||(q&&!Pn&&!nf?(q._dp._time-q._start!==q._time&&q.render(q._dp._time-q._start),q.resetTo?q.resetTo("totalProgress",it,r._tTime/r._tDur):(q.vars.totalProgress=it,q.invalidate().restart())):r&&r.totalProgress(it,!!(Pn&&(ie||xe)))),p){if(xe&&_&&(Z.style[_+M.os2]=ge),!K)me(ql(Ue+oe*it));else if(fi){if(O=!xe&&it>Rt&&we+1>Qe&&Qe+1>=Tr(F,M),C)if(!xe&&(nn||O)){var H=Gr(p,!0),k=Qe-ce;Hx(p,vt,H.top+(M===an?k:0)+sn,H.left+(M===an?0:k)+sn)}else Hx(p,Z);Ja(nn||O?ee:J),_e&&it<1&&nn||me(Ue+(it===1&&!O?oe:0))}}S&&!De.tween&&!Pn&&!nf&&ae.restart(!0),a&&(A||x&&it&&(it<1||!cp))&&Ku(a.targets).forEach(function(Me){return Me.classList[nn||x?"add":"remove"](a.className)}),o&&!D&&!xe&&o(b),fi&&!Pn?(D&&(X&&(St==="complete"?r.pause().totalProgress(1):St==="reset"?r.restart(!0).pause():St==="restart"?r.restart(!0):r[St]()),o&&o(b)),(A||!cp)&&(u&&A&&ga(b,u),j[bt]&&ga(b,j[bt]),x&&(it===1?b.kill(!1,1):j[bt]=0),A||(bt=it===1?1:3,j[bt]&&ga(b,j[bt]))),R&&!nn&&Math.abs(b.getVelocity())>(Kl(R)?R:2500)&&(zl(b.callbackAnimation),q?q.progress(1):zl(r,St==="reverse"?1:!it,1))):D&&o&&!Pn&&o(b)}if(Be){var ue=y?Qe/y.duration()*(y._caScrollDist||0):Qe;He(ue+(B._isFlipped?1:0)),Be(ue)}yt&&yt(-Qe/y.duration()*(y._caScrollDist||0))}},b.enable=function(xe,Ke){b.enabled||(b.enabled=!0,hn(F,"resize",Zl),Y||hn(F,"scroll",va),re&&hn(n,"refreshInit",re),xe!==!1&&(b.progress=he=0,Ce=P=$=fe()),Ke!==!1&&b.refresh())},b.getTween=function(xe){return xe&&De?De.tween:q},b.setPositions=function(xe,Ke,Xe,Qe){if(y){var Ft=y.scrollTrigger,it=y.duration(),Rt=Ft.end-Ft.start;xe=Ft.start+Rt*xe/it,Ke=Ft.start+Rt*Ke/it}b.refresh(!1,!1,{start:Dx(xe,Xe&&!!b._startClamp),end:Dx(Ke,Xe&&!!b._endClamp)},Qe),b.update()},b.adjustPinSpacing=function(xe){if(Oe&&xe){var Ke=Oe.indexOf(M.d)+1;Oe[Ke]=parseFloat(Oe[Ke])+xe+sn,Oe[1]=parseFloat(Oe[1])+xe+sn,Ja(Oe)}},b.disable=function(xe,Ke){if(xe!==!1&&b.revert(!0,!0),b.enabled&&(b.enabled=b.isActive=!1,Ke||q&&q.pause(),Ae=0,le&&(le.uncache=1),re&&dn(n,"refreshInit",re),ae&&(ae.pause(),De.tween&&De.tween.kill()&&(De.tween=0)),!Y)){for(var Xe=nt.length;Xe--;)if(nt[Xe].scroller===F&&nt[Xe]!==b)return;dn(F,"resize",Zl),Y||dn(F,"scroll",va)}},b.kill=function(xe,Ke){b.disable(xe,Ke),q&&!Ke&&q.kill(),l&&delete fg[l];var Xe=nt.indexOf(b);Xe>=0&&nt.splice(Xe,1),Xe===Xn&&Of>0&&Xn--,Xe=0,nt.forEach(function(Qe){return Qe.scroller===b.scroller&&(Xe=1)}),Xe||jn||(b.scroll.rec=0),r&&(r.scrollTrigger=null,xe&&r.revert({kill:!1}),Ke||r.kill()),We&&[We,Ee,B,Re].forEach(function(Qe){return Qe.parentNode&&Qe.parentNode.removeChild(Qe)}),Su===b&&(Su=0),p&&(le&&(le.uncache=1),Xe=0,nt.forEach(function(Qe){return Qe.pin===p&&Xe++}),Xe||(le.spacer=0)),i.onKill&&i.onKill(b)},nt.push(b),b.enable(!1,!1),lt&&lt(b),r&&r.add&&!w){var ut=b.update;b.update=function(){b.update=ut,st.cache++,ce||we||b.refresh()},Ne.delayedCall(.01,b.update),w=.01,ce=we=0}else b.refresh();p&&f3()},n.register=function(i){return xa||(Ne=i||Q1(),Z1()&&window.document&&n.enable(),xa=$l),xa},n.defaults=function(i){if(i)for(var r in i)af[r]=i[r];return af},n.disable=function(i,r){$l=0,nt.forEach(function(o){return o[r?"kill":"disable"](i)}),dn(rt,"wheel",va),dn(Mt,"scroll",va),clearInterval(tf),dn(Mt,"touchcancel",vr),dn(vt,"touchstart",vr),sf(dn,Mt,"pointerdown,touchstart,mousedown",Nx),sf(dn,Mt,"pointerup,touchend,mouseup",Ix),Md.kill(),rf(dn);for(var s=0;s<st.length;s+=3)of(dn,st[s],st[s+1]),of(dn,st[s],st[s+2])},n.enable=function(){if(rt=window,Mt=document,xi=Mt.documentElement,vt=Mt.body,Ne){if(Ku=Ne.utils.toArray,mu=Ne.utils.clamp,ug=Ne.core.context||vr,up=Ne.core.suppressOverwrites||vr,B_=rt.history.scrollRestoration||"auto",dg=rt.pageYOffset||0,Ne.core.globals("ScrollTrigger",n),vt){$l=1,Qa=document.createElement("div"),Qa.style.height="100vh",Qa.style.position="absolute",lE(),r3(),qt.register(Ne),n.isTouch=qt.isTouch,gs=qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),lg=qt.isTouch===1,hn(rt,"wheel",va),z_=[rt,Mt,xi,vt],Ne.matchMedia?(n.matchMedia=function(c){var d=Ne.matchMedia(),f;for(f in c)d.add(f,c[f]);return d},Ne.addEventListener("matchMediaInit",function(){oE(),j_()}),Ne.addEventListener("matchMediaRevert",function(){return sE()}),Ne.addEventListener("matchMedia",function(){Ao(0,1),jo("matchMedia")}),Ne.matchMedia().add("(orientation: portrait)",function(){return dp(),dp})):console.warn("Requires GSAP 3.11.0 or later"),dp(),hn(Mt,"scroll",va);var i=vt.hasAttribute("style"),r=vt.style,s=r.borderTopStyle,o=Ne.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Gr(vt),an.m=Math.round(a.top+an.sc())||0,Yn.m=Math.round(a.left+Yn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(vt.setAttribute("style",""),vt.removeAttribute("style")),tf=setInterval(Fx,250),Ne.delayedCall(.5,function(){return nf=0}),hn(Mt,"touchcancel",vr),hn(vt,"touchstart",vr),sf(hn,Mt,"pointerdown,touchstart,mousedown",Nx),sf(hn,Mt,"pointerup,touchend,mouseup",Ix),ag=Ne.utils.checkPrefix("transform"),Ff.push(ag),xa=Ln(),Md=Ne.delayedCall(.2,Ao).pause(),ya=[Mt,"visibilitychange",function(){var c=rt.innerWidth,d=rt.innerHeight;Mt.hidden?(bx=c,Px=d):(bx!==c||Px!==d)&&Zl()},Mt,"DOMContentLoaded",Ao,rt,"load",Ao,rt,"resize",Zl],rf(hn),nt.forEach(function(c){return c.enable(0,1)}),l=0;l<st.length;l+=3)of(dn,st[l],st[l+1]),of(dn,st[l],st[l+2])}else if(Mt){var u=function c(){n.enable(),Mt.removeEventListener("DOMContentLoaded",c)};Mt.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(cp=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(tf)||(tf=r)&&setInterval(Fx,r),"ignoreMobileResize"in i&&(lg=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(rf(dn)||rf(hn,i.autoRefreshEvents||"none"),$1=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Zn(i),o=st.indexOf(s),a=Wo(s);~o&&st.splice(o,a?6:2),r&&(a?br.unshift(rt,r,vt,r,xi,r):br.unshift(s,r))},n.clearMatchMedia=function(i){nt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(_i(i)?Zn(i):i).getBoundingClientRect(),a=o[s?Io:Uo]*r||0;return s?o.right-a>0&&o.left+a<rt.innerWidth:o.bottom-a>0&&o.top+a<rt.innerHeight},n.positionInViewport=function(i,r,s){_i(i)&&(i=Zn(i));var o=i.getBoundingClientRect(),a=o[s?Io:Uo],l=r==null?a/2:r in wd?wd[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/rt.innerWidth:(o.top+l)/rt.innerHeight},n.killAll=function(i){if(nt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Xo.killAll||[];Xo={},r.forEach(function(s){return s()})}},n}();tt.version="3.15.0";tt.saveStyles=function(n){return n?Ku(n).forEach(function(e){if(e&&e.style){var t=mi.indexOf(e);t>=0&&mi.splice(t,5),mi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ne.core.getCache(e),ug())}}):mi};tt.revert=function(n,e){return j_(!n,e)};tt.create=function(n,e){return new tt(n,e)};tt.refresh=function(n){return n?Zl(!0):(xa||tt.register())&&Ao(!0)};tt.update=function(n){return++st.cache&&Zr(n===!0?2:0)};tt.clearScrollMemory=aE;tt.maxScroll=function(n,e){return Tr(n,e?Yn:an)};tt.getScrollFunc=function(n,e){return qs(Zn(n),e?Yn:an)};tt.getById=function(n){return fg[n]};tt.getAll=function(){return nt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};tt.isScrolling=function(){return!!ji};tt.snapDirectional=X_;tt.addEventListener=function(n,e){var t=Xo[n]||(Xo[n]=[]);~t.indexOf(e)||t.push(e)};tt.removeEventListener=function(n,e){var t=Xo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};tt.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],f=[],p=Ne.delayedCall(r,function(){c(d,f),d=[],f=[]}).pause();return function(_){d.length||p.restart(!0),d.push(_.trigger),f.push(_),s<=d.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Un(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Un(s)&&(s=s(),hn(tt,"refresh",function(){return s=e.batchMax()})),Ku(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(tt.create(u))}),t};var Gx=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},pp=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(qt.isTouch?" pinch-zoom":""):"none",e===xi&&n(vt,t)},ff={auto:1,scroll:1},g3=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ne.core.getCache(s),a=Ln(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==vt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ff[(l=Bi(s)).overflowY]||ff[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Wo(s)&&(ff[(l=Bi(s)).overflowY]||ff[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},cE=function(e,t,i,r){return qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&g3,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&hn(Mt,qt.eventTypes[0],Xx,!1,!0)},onDisable:function(){return dn(Mt,qt.eventTypes[0],Xx,!0)}})},_3=/(input|label|select|textarea)/i,Wx,Xx=function(e){var t=_3.test(e.target.tagName);(t||Wx)&&(e._gsapAllow=!0,Wx=t)},v3=function(e){_o(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=Zn(e.target)||xi,c=Ne.core.globals().ScrollSmoother,d=c&&c.get(),f=gs&&(e.content&&Zn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=qs(u,an),_=qs(u,Yn),g=1,m=(qt.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,h=0,v=Un(r)?function(){return r(a)}:function(){return r||2.8},x,S,C=cE(u,e.type,!0,s),T=function(){return S=!1},y=vr,R=vr,E=function(){l=Tr(u,an),R=mu(gs?1:0,l),i&&(y=mu(0,Tr(u,Yn))),x=Oo},M=function(){f._gsap.y=ql(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},D=function(){if(S){requestAnimationFrame(T);var N=ql(a.deltaY/2),Q=R(p.v-N);if(f&&Q!==p.v+p.offset){p.offset=Q-p.v;var b=ql((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+b+", 0, 1)",f._gsap.y=b+"px",p.cacheID=st.cache,Zr()}return!0}p.offset&&M(),S=!0},F,z,Y,K,j=function(){E(),F.isActive()&&F.vars.scrollY>l&&(p()>l?F.progress(1)&&p(l):F.resetTo("scrollY",l))};return f&&Ne.set(f,{y:"+=0"}),e.ignoreCheck=function(V){return gs&&V.type==="touchmove"&&D()||g>1.05&&V.type!=="touchstart"||a.isGesturing||V.touches&&V.touches.length>1},e.onPress=function(){S=!1;var V=g;g=ql((rt.visualViewport&&rt.visualViewport.scale||1)/m),F.pause(),V!==g&&pp(u,g>1.01?!0:i?!1:"x"),z=_(),Y=p(),E(),x=Oo},e.onRelease=e.onGestureStart=function(V,N){if(p.offset&&M(),!N)K.restart(!0);else{st.cache++;var Q=v(),b,re;i&&(b=_(),re=b+Q*.05*-V.velocityX/.227,Q*=Gx(_,b,re,Tr(u,Yn)),F.vars.scrollX=y(re)),b=p(),re=b+Q*.05*-V.velocityY/.227,Q*=Gx(p,b,re,Tr(u,an)),F.vars.scrollY=R(re),F.invalidate().duration(Q).play(.01),(gs&&F.vars.scrollY>=l||b>=l-1)&&Ne.to({},{onUpdate:j,duration:Q})}o&&o(V)},e.onWheel=function(){F._ts&&F.pause(),Ln()-h>1e3&&(x=0,h=Ln())},e.onChange=function(V,N,Q,b,re){if(Oo!==x&&E(),N&&i&&_(y(b[2]===N?z+(V.startX-V.x):_()+N-b[1])),Q){p.offset&&M();var Te=re[2]===Q,$e=Te?Y+V.startY-V.y:p()+Q-re[1],$=R($e);Te&&$e!==$&&(Y+=$-$e),p($)}(Q||N)&&Zr()},e.onEnable=function(){pp(u,i?!1:"x"),tt.addEventListener("refresh",j),hn(rt,"resize",j),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=_.smooth=!1),C.enable()},e.onDisable=function(){pp(u,!0),dn(rt,"resize",j),tt.removeEventListener("refresh",j),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new qt(e),a.iOS=gs,gs&&!p()&&p(1),gs&&Ne.ticker.add(vr),K=a._dc,F=Ne.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:uE(p,p(),function(){return F.pause()})},onUpdate:Zr,onComplete:K.vars.onComplete}),a};tt.sort=function(n){if(Un(n))return nt.sort(n);var e=rt.pageYOffset||0;return tt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+rt.innerHeight}),nt.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};tt.observe=function(n){return new qt(n)};tt.normalizeScroll=function(n){if(typeof n>"u")return Gn;if(n===!0&&Gn)return Gn.enable();if(n===!1){Gn&&Gn.kill(),Gn=n;return}var e=n instanceof qt?n:v3(n);return Gn&&Gn.target===e.target&&Gn.kill(),Wo(e.target)&&(Gn=e),e};tt.core={_getVelocityProp:og,_inputObserver:cE,_scrollers:st,_proxies:br,bridge:{ss:function(){ji||jo("scrollStart"),ji=Ln()},ref:function(){return Pn}}};Q1()&&Ne.registerPlugin(tt);const x3="/TANTRAVEDA/assets/portal-image-Bsyt2sr3.jpg";z1.registerPlugin(tt);const y3=()=>{const n=je.useRef(null),e=je.useRef(null),t=je.useRef(null),i=je.useRef(null),r=je.useRef([]),s=je.useRef([]),o=je.useRef({x:0,y:0,targetX:0,targetY:0,hasMoved:!1}),a=je.useRef({current:0,target:0}),l=je.useRef(null),u=je.useRef({active:!1,progress:0,direction:1,startTime:0,duration:1.4}),c=je.useRef(-1),d=je.useRef(0),f=je.useRef(null),p=je.useRef({current:0,target:0}),_={fiberCount:160,segmentsPerFiber:150,waveWidth:30,waveHeight:7},g=window.matchMedia("(prefers-reduced-motion: reduce)").matches,m=(C,T,y)=>C+(T-C)*y,h=C=>C*C*(3-2*C),v=C=>1-Math.pow(1-C,3),x=C=>C*C*C*(C*(C*6-15)+10),S=(C,T)=>{const y=Math.floor(C),R=Math.floor(T),E=C-y,M=T-R,D=E*E*(3-2*E),F=M*M*(3-2*M),z=(N,Q)=>{const b=Math.sin(N*374761393+Q*668265263)*43758.5453;return b-Math.floor(b)},Y=z(y,R),K=z(y+1,R),j=z(y,R+1),V=z(y+1,R+1);return m(m(Y,K,D),m(j,V,D),F)};return je.useEffect(()=>{if(!n.current)return;const C=new SL;e.current=C;const T=new ki(60,window.innerWidth/window.innerHeight,.1,1e3);T.position.set(0,0,28),t.current=T;const y=new yL({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});y.setSize(window.innerWidth,window.innerHeight),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.outputColorSpace=ir,n.current.appendChild(y.domElement),i.current=y;const E=(()=>{const le=document.createElement("canvas");le.width=1920,le.height=1080;const ve=le.getContext("2d"),Ce=ve.createLinearGradient(0,0,le.width,le.height);return Ce.addColorStop(0,"#4a148c"),Ce.addColorStop(.5,"#880e4f"),Ce.addColorStop(1,"#1a237e"),ve.fillStyle=Ce,ve.fillRect(0,0,le.width,le.height),new EL(le)})();new RL().load(x3,le=>{f.current&&(f.current.material.uniforms.uTexture.value=le,le.image&&f.current.material.uniforms.uImageResolution.value.set(le.image.width,le.image.height))},void 0,()=>{console.log("Portal image not found, using placeholder.")});const D=33,F=60*Math.PI/180,z=2*Math.tan(F/2)*D,Y=window.innerWidth/window.innerHeight,K=z*Y,j=new dl(K,z),V=new Pr({uniforms:{uTexture:{value:E},uImageResolution:{value:new ft(1920,1080)},uMousePos:{value:new ft(0,0)},uMouseActive:{value:0},uInnerRadius:{value:3},uOuterRadius:{value:6},uResolution:{value:new ft(window.innerWidth,window.innerHeight)},uTime:{value:0}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vPosition;

        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uTexture;
        uniform vec2 uImageResolution;
        uniform vec2 uMousePos;
        uniform float uMouseActive;
        uniform float uInnerRadius;
        uniform float uOuterRadius;
        uniform vec2 uResolution;
        uniform float uTime;

        varying vec2 vUv;
        varying vec3 vPosition;

        // Smooth step function
        float smootherstep(float edge0, float edge1, float x) {
          float t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
          return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
        }

        void main() {
          // Distance from mouse position
          float dist = distance(vPosition.xy, uMousePos);

          // Only reveal inside inner radius
          float revealStrength = 0.0;

          if (dist < uInnerRadius && uMouseActive > 0.5) {
            // Smooth radial falloff from center to inner edge
            float normalizedDist = dist / uInnerRadius;
            revealStrength = 1.0 - smootherstep(0.0, 1.0, normalizedDist);

            // Background size cover logic
            float planeAspect = uResolution.x / uResolution.y;
            float imageAspect = uImageResolution.x / uImageResolution.y;
            
            vec2 coverUv = vUv;
            if (planeAspect < imageAspect) {
               float scale = planeAspect / imageAspect;
               coverUv.x = (coverUv.x - 0.5) * scale + 0.5;
            } else {
               float scale = imageAspect / planeAspect;
               coverUv.y = (coverUv.y - 0.5) * scale + 0.5;
            }

            // Subtle radial distortion (gravitational lens effect)
            vec2 direction = vPosition.xy - uMousePos;
            float distortAmount = revealStrength * 0.15;
            vec2 distortedUv = coverUv + direction * distortAmount * 0.02;

            // Add subtle swirl
            float angle = atan(direction.y, direction.x);
            float swirl = normalizedDist * 0.3 * sin(uTime * 0.5);
            float cosA = cos(swirl);
            float sinA = sin(swirl);
            vec2 rotatedDir = vec2(
              direction.x * cosA - direction.y * sinA,
              direction.x * sinA + direction.y * cosA
            );
            distortedUv += rotatedDir * 0.01 * revealStrength;

            // Sample texture with distortion
            vec4 texColor = texture2D(uTexture, distortedUv);

            // Apply reveal with subtle opacity (25-35%)
            float opacity = revealStrength * 0.3 * uMouseActive;

            gl_FragColor = vec4(texColor.rgb, opacity);
          } else {
            // Completely invisible outside inner radius
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
          }
        }
      `,transparent:!0,depthWrite:!1}),N=new lr(j,V);N.position.z=-5,C.add(N),f.current=N;class Q{constructor(ve,Ce){this.index=ve,this.totalFibers=Ce,this.normalizedY=ve/Ce,this.baseY=(this.normalizedY-.5)*_.waveHeight,this.timeOffset=Math.random()*Math.PI*2,this.spatialOffset=Math.random()*50,this.speed=.7+Math.random()*.3;const P=Math.random();P<.4?this.color=new gt(9133302):P<.7?this.color=new gt(10980346):P<.92?this.color=new gt(8246268):this.color=new gt(12891645);const ce=Math.abs(this.normalizedY-.5)*2;this.baseOpacity=.5+(1-ce)*.4,this.depthLayer=Math.sin(this.normalizedY*Math.PI)*.5+.5,this.points=[],this.basePoints=[];for(let we=0;we<_.segmentsPerFiber;we++)this.points.push(new W),this.basePoints.push(new W)}calculateBasePositions(ve,Ce,P){const ce=ve*.2*this.speed,we=Ce;let We=1/0;const Ee=Math.floor(we),B=Math.min(Ee+1,6),Re=we-Ee,ke=x(Math.max(0,Math.min(Re,1))),L=ee=>{const J=m(1.2,1.8,.5+Math.sin(ee*Math.PI*.4)*.5),Z=m(1.5,2.2,h(Math.sin(ee*Math.PI*.3)*.5+.5)),pe=x(Math.max(0,Math.min(ee/2.5,1))),Ue=Math.abs(ee-2.4)/1.5,oe=1-x(Math.max(0,Math.min(Ue,1))),He=Math.abs(ee-3)/2.5,_e=1-x(Math.max(0,Math.min(He,1))),Be=x(Math.max(0,Math.min((ee-4.5)/1.2,1))),Ye=x(Math.max(0,Math.min((ee-5.5)/1.2,1)));return{baseAmplitude:J,waveFrequency:Z,verticalBend:pe,convergeStrength:oe,crossStrength:_e,diagonalStrength:Be,expansionStrength:Ye}},w=L(Ee),G=L(B);for(let ee=0;ee<_.segmentsPerFiber;ee++){const J=ee/_.segmentsPerFiber,Z=.6,pe=S(J*Z+this.spatialOffset,ce*.15+this.timeOffset*.1)*.5,se=S(J*Z+this.spatialOffset+50,ce*.12+this.timeOffset*.1)*.25,me=S(J*Z+this.spatialOffset+100,ce*.18+this.timeOffset*.1)*.8;let Ue=0,oe=0,ge=0,Oe=0,He=0,_e=0;const Be=(q,te)=>{let ne=(J-.5)*_.waveWidth,ae=this.baseY,Ae=this.depthLayer*1.5;const qe=Math.sin(J*Math.PI*q.waveFrequency+ce+this.timeOffset)*q.baseAmplitude,yt=Math.sin(J*Math.PI*q.waveFrequency*1.6+ce*.6+this.timeOffset+Math.PI/3)*q.baseAmplitude*.35;if(ae+=qe+yt,Ae+=Math.sin(J*Math.PI*2.5+ce*.5+this.timeOffset)*1.8,ne+=pe,ae+=se,Ae+=me,q.verticalBend>0){const lt=Math.sin((J-.5)*Math.PI*1.2)*2.8;ae+=lt*q.verticalBend}if(q.convergeStrength>0){const Ze=1-(1-Math.abs(J-.5)*2)*.55*q.convergeStrength;ae*=Ze;const Ge=Math.sin(J*Math.PI*2+ce*.4)*.8;Ae+=Ge*q.convergeStrength}if(q.crossStrength>0){const lt=(this.normalizedY-.5)*2,Ze=h(q.crossStrength),Ge=lt*J*4.5*Ze;ae+=Ge;const Fe=Math.sin(J*Math.PI*1.8+ce*.4)*2.5;Ae+=Fe*Ze;const ut=Math.cos(J*Math.PI*2+ce*.3)*1.2;Ae+=ut*Ze*.5}if(q.diagonalStrength>0){const lt=J*3*q.diagonalStrength;ae+=lt-1.5*q.diagonalStrength;const Ze=Math.sin(J*Math.PI*2+ce+this.timeOffset)*1.5;ae+=Ze*(1-q.diagonalStrength*.4)}if(q.expansionStrength>0){ae*=1+q.expansionStrength*.2;const lt=Math.sin(J*Math.PI*1.6+ce*.4+this.timeOffset)*2;ae+=lt*q.expansionStrength;const Ze=Math.sin(J*Math.PI*2+ce*.35)*3;Ae+=Ze*q.expansionStrength}te?(Ue=ne,oe=ae,ge=Ae):(Oe=ne,He=ae,_e=Ae)};Be(w,!0),Be(G,!1);const Ye=m(Ue,Oe,ke),ot=m(oe,He,ke),U=m(ge,_e,ke);if(this.basePoints[ee].set(Ye,ot,U),P.active){const q=Ye-P.x,te=ot-P.y,ne=Math.sqrt(q*q+te*te);ne<We&&(We=ne)}}return We}applyDisplacementAndEnergy(ve,Ce,P){for(let ce=0;ce<_.segmentsPerFiber;ce++){let we=this.basePoints[ce].x,We=this.basePoints[ce].y,Ee=this.basePoints[ce].z;if(ve>0&&Ce.active){const B=we-Ce.x,Re=We-Ce.y,ke=Math.sqrt(B*B+Re*Re);if(ke<12){const w=h(1-ke/12)*2.2*ve,G=Math.atan2(Re,B);we+=Math.cos(G)*w,We+=Math.sin(G)*w,Ee+=w*.5}}this.points[ce].set(we,We,Ee)}}}const b=[];for(let le=0;le<_.fiberCount;le++)b.push(new Q(le,_.fiberCount));r.current=b;const re=[],Te=(le,ve,Ce=0)=>{const P=Math.sin(ve/(_.segmentsPerFiber-1)*Math.PI),ce=le.baseOpacity*P*(1+Ce*.65),we=Ce*.35;return[(le.color.r*(1-we)+we)*ce,(le.color.g*(1-we)+we*.95)*ce,(le.color.b*(1-we)+we)*ce]},$e=new y_({color:16777215,vertexColors:!0,transparent:!0,opacity:.92,blending:lm,depthWrite:!1,linewidth:.72,worldUnits:!1,alphaToCoverage:!0,resolution:new ft(window.innerWidth,window.innerHeight)}),$=b.map(le=>{const ve=new VM,Ce=[],P=[];le.points.forEach((we,We)=>{Ce.push(we.x,we.y,we.z),P.push(...Te(le,We))}),ve.setPositions(Ce),ve.setColors(P),re.push(ve);const ce=new IL(ve,$e);return ce.computeLineDistances(),ce.frustumCulled=!1,C.add(ce),ce});s.current=$;const ie=le=>{o.current.hasMoved=!0,o.current.targetX=le.clientX/window.innerWidth*2-1,o.current.targetY=-(le.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",ie);let he=0;tt.create({trigger:"body",start:"top top",end:"bottom bottom",scrub:1.2,onUpdate:le=>{a.current.target=le.progress*6;const ve=window.scrollY,Ce=ve>he?1:-1;he=ve,d.current=Ce;const P=Math.floor(le.progress*6);if(P!==c.current&&P>=0&&P<=5){const ce=u.current;ce.active||(ce.active=!0,ce.progress=0,ce.direction=Ce,ce.startTime=Date.now()*.001),c.current=P}}});const fe=()=>{if(T.aspect=window.innerWidth/window.innerHeight,T.updateProjectionMatrix(),y.setSize(window.innerWidth,window.innerHeight),$e.resolution.set(window.innerWidth,window.innerHeight),f.current){const ve=60*Math.PI/180,Ce=2*Math.tan(ve/2)*33,P=Ce*T.aspect;f.current.geometry.dispose(),f.current.geometry=new dl(P,Ce),f.current.material.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight)}};window.addEventListener("resize",fe);const De=()=>{if(l.current=requestAnimationFrame(De),g){y.render(C,T);return}const le=Date.now()*.001,ve=o.current,Ce=a.current,P=u.current,ce=f.current,we=p.current;if(P.active){const Z=le-P.startTime;P.progress=Math.min(Z/P.duration,1);const pe=v(P.progress);P.progress=pe,Z>=P.duration&&(P.active=!1,P.progress=0)}Ce.current=m(Ce.current,Ce.target,.12),ve.x=m(ve.x,ve.targetX,.12),ve.y=m(ve.y,ve.targetY,.12);const We=ve.x*1.2,Ee=ve.y*1.2;T.position.x=m(T.position.x,We,.06),T.position.y=m(T.position.y,Ee,.06),T.lookAt(0,0,0),T.updateMatrixWorld();const B=new W(ve.targetX,ve.targetY,.5);B.unproject(T);const Re=B.sub(T.position).normalize(),ke=-T.position.z/Re.z,L=T.position.clone().add(Re.multiplyScalar(ke)),w={active:ve.hasMoved,x:L.x,y:L.y};let G=1/0;b.forEach(Z=>{const pe=Z.calculateBasePositions(le,Ce.current,w);w.active&&pe<G&&(G=pe)});const ee=3.5;let J=0;if(w.active&&G<ee){const Z=G/ee;J=1-h(Z)}we.current=J,b.forEach(Z=>{Z.applyDisplacementAndEnergy(J,w,P);const pe=$[Z.index].geometry;for(let se=0;se<Z.points.length-1;se++){const me=Z.points[se],Ue=Z.points[se+1],oe=se*3,ge=se*3;pe.attributes.instanceStart.array[oe]=me.x,pe.attributes.instanceStart.array[oe+1]=me.y,pe.attributes.instanceStart.array[oe+2]=me.z,pe.attributes.instanceEnd.array[oe]=Ue.x,pe.attributes.instanceEnd.array[oe+1]=Ue.y,pe.attributes.instanceEnd.array[oe+2]=Ue.z;let Oe=0,He=0;if(P.active){const Ye=ot=>{const U=ot/(_.segmentsPerFiber-1),te=(P.direction>0?P.progress:1-P.progress)*1.3-.15,ne=U-te,Ae=(P.direction>0?ne<0:ne>0)?.08:.03;let qe=Math.exp(-(Math.abs(ne)**2)/(Ae*Ae));return P.direction>0&&te>.9?qe*=Math.max(0,1-(te-.9)/.15):P.direction<0&&te<.1&&(qe*=Math.max(0,(te+.05)/.15)),qe};Oe=Ye(se),He=Ye(se+1)}const _e=Te(Z,se,Oe),Be=Te(Z,se+1,He);pe.attributes.instanceColorStart.array[ge]=_e[0],pe.attributes.instanceColorStart.array[ge+1]=_e[1],pe.attributes.instanceColorStart.array[ge+2]=_e[2],pe.attributes.instanceColorEnd.array[ge]=Be[0],pe.attributes.instanceColorEnd.array[ge+1]=Be[1],pe.attributes.instanceColorEnd.array[ge+2]=Be[2]}pe.attributes.instanceStart.needsUpdate=!0,pe.attributes.instanceEnd.needsUpdate=!0,pe.attributes.instanceColorStart.needsUpdate=!0,pe.attributes.instanceColorEnd.needsUpdate=!0}),ce&&(ce.material.uniforms.uMousePos.value.set(w.x,w.y),ce.material.uniforms.uMouseActive.value=J,ce.material.uniforms.uTime.value=le),y.render(C,T)};return De(),()=>{l.current&&cancelAnimationFrame(l.current),window.removeEventListener("mousemove",ie),window.removeEventListener("resize",fe),tt.getAll().forEach(le=>le.kill()),n.current&&y.domElement&&n.current.removeChild(y.domElement),re.forEach(le=>le.dispose()),$e.dispose(),y.dispose()}},[]),I.jsx("div",{id:"canvas-container",ref:n})},Y_=[{id:"software",number:"01",title:"SOFTWARE & APPS",route:"/start/software",tagline:"Open-Source Engines & Creative Toolkits",description:"High-performance creative suites, developer utilities, neural workstations, and standalone systems curated for boundary-pushing digital creators.",accentColor:"#a78bfa",secondaryAccent:"#8b5cf6",glowColor:"rgba(167, 139, 250, 0.45)",gradient:"linear-gradient(135deg, rgba(167, 139, 250, 0.16) 0%, rgba(139, 92, 246, 0.04) 100%)",tags:["DEV TOOLS","CREATIVE APPS","UTILITIES","OPEN ACCESS"],stats:{items:"420+ Tools",updated:"Realtime Sync",access:"100% Free"},resources:[{id:"vscode",title:"Visual Studio Code",type:"file",description:"Stable Windows installer for the extensible code editor.",url:"https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user",fileType:"EXE",fileSize:"Latest build",youtube:[{title:"VS Code Tips & Tricks",videoId:"RZqNXpr7g4g"},{title:"VS Code Extensions Guide",videoId:"xRfVY2R2C2Q"}]},{id:"chrome",title:"Google Chrome",type:"file",description:"Direct Windows installer for the current Chrome release.",url:"https://dl.google.com/chrome/install/chrome_installer.exe",fileType:"EXE",fileSize:"Latest build"},{id:"blender-hub",title:"Blender Download Hub",type:"link",description:"Open-source 3D creation suite and release archive.",url:"https://www.blender.org/download/",youtube:[{title:"Blender 3.0 — New Features",videoId:"JZIFWEY3l6k"},{title:"Blender Beginner Tutorial",videoId:"TPrnSACiTJ4"},{title:"Blender Geometry Nodes",videoId:"X5aW9Qxh5WQ"}]},{id:"github",title:"GitHub",type:"link",description:"Discover, share, and build open-source software.",url:"https://github.com/"},{id:"unsplash",title:"Unsplash",type:"link",description:"High-resolution photography for creative and commercial projects.",url:"https://unsplash.com/"},{id:"nasa-images",title:"NASA Image and Video Library",type:"link",description:"Search NASA's public archive of images, audio, and video.",url:"https://images.nasa.gov/"},{id:"mdn",title:"MDN Web Docs",type:"link",description:"Reference documentation for web technologies and standards.",url:"https://developer.mozilla.org/"},{id:"internet-archive",title:"Internet Archive",type:"link",description:"A public-domain and Creative Commons film collection.",url:"https://archive.org/details/feature_films"},{id:"adobe",title:"Adobe",type:"link",description:"Creative software and digital solutions for creators.",url:"https://www.adobe.com/"},{id:"figma",title:"Figma",type:"link",description:"Browser-based design tool for collaborative UI/UX work.",url:"https://www.figma.com/"},{id:"premiere-pro",title:"Adobe Premiere Pro",type:"file",description:"Industry-leading video editing software for professionals.",url:"https://adobe.com/products/premiere.html",fileType:"APP",fileSize:"Download"},{id:"after-effects",title:"Adobe After Effects",type:"file",description:"Motion graphics and visual effects creation software.",url:"https://adobe.com/products/aftereffects.html",fileType:"APP",fileSize:"Download"},{id:"python",title:"Python",type:"file",description:"High-level programming language for general-purpose development.",url:"https://www.python.org/downloads/",fileType:"PKG",fileSize:"Latest"},{id:"davinci-resolve",title:"DaVinci Resolve",type:"file",description:"Professional video editing and color grading software.",url:"https://www.blackmagicdesign.com/products/davinciresolve/",fileType:"APP",fileSize:"Download"},{id:"blender",title:"Blender",type:"file",description:"Open-source 3D creation suite and release archive.",url:"https://www.blender.org/download/",fileType:"APP",fileSize:"Download"}]},{id:"education",number:"02",title:"EDUCATION",route:"/start/education",tagline:"Deep Archives, Papers & Masterclasses",description:"Unrestricted repositories of advanced technical documentation, algorithmic blueprints, generative architecture masterclasses, and computational physics papers.",accentColor:"#38bdf8",secondaryAccent:"#0ea5e9",glowColor:"rgba(56, 189, 248, 0.45)",gradient:"linear-gradient(135deg, rgba(56, 189, 248, 0.16) 0%, rgba(14, 165, 233, 0.04) 100%)",tags:["RESEARCH PAPERS","MASTERCLASSES","BLUEPRINTS","KNOWLEDGE BASE"],stats:{items:"1,280+ Archives",updated:"Weekly Drops",access:"100% Free"},resources:[{id:"free-programming-books",title:"Free Programming Books",type:"file",description:"Community-maintained index of free programming books and courses.",url:"https://raw.githubusercontent.com/EbookFoundation/free-programming-books/main/books/free-programming-books.md",fileType:"MD",fileSize:"Repository file",youtube:[{title:"Python Full Course for Beginners",videoId:"_uQrJ0TkZlc"},{title:"JavaScript Full Course",videoId:"W6NZfCO5SIk"}]},{id:"python-gitignore",title:"Python Gitignore Template",type:"file",description:"A practical starting template for Python projects and virtual environments.",url:"https://raw.githubusercontent.com/github/gitignore/main/Python.gitignore",fileType:"GITIGNORE",fileSize:"Repository file"},{id:"mdn",title:"MDN Web Docs",type:"link",description:"Reference documentation for web technologies and standards.",url:"https://developer.mozilla.org/",youtube:[{title:"MDN Web Docs Tutorial",videoId:"G3e-cpL7ofc"}]},{id:"freecodecamp",title:"freeCodeCamp",type:"link",description:"Free project-based programming lessons and certifications.",url:"https://www.freecodecamp.org/",youtube:[{title:"freeCodeCamp Python Course",videoId:"rfscVS0vtbw"},{title:"freeCodeCamp JS Course",videoId:"jS4aFq5-91M"}]}]},{id:"movies",number:"03",title:"MOVIES",route:"/start/movies",tagline:"Visionary Cinema & Sci-Fi Archives",description:"A cinematic vault of groundbreaking independent cinema, experimental sci-fi journeys, visual essays, and remastered avant-garde documentaries.",accentColor:"#e879f9",secondaryAccent:"#d946ef",glowColor:"rgba(232, 121, 249, 0.45)",gradient:"linear-gradient(135deg, rgba(232, 121, 249, 0.16) 0%, rgba(217, 70, 239, 0.04) 100%)",tags:["4K CINEMA","SCI-FI DOCS","SHORT FILMS","EXPERIMENTS"],stats:{items:"340+ Films",updated:"Bi-Weekly",access:"100% Free"},resources:[{id:"big-buck-bunny",title:"Big Buck Bunny",type:"file",description:"Open movie source file for studying animation and production pipelines.",url:"https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_720p_stereo.avi",fileType:"AVI",fileSize:"720p"},{id:"sintel-trailer",title:"Sintel Trailer",type:"file",description:"High-resolution trailer asset from the Blender open movie project.",url:"https://download.blender.org/sintel/trailer/Sintel.Trailer.1080p.mp4",fileType:"MP4",fileSize:"1080p"},{id:"archive-films",title:"Internet Archive Feature Films",type:"link",description:"A public-domain and Creative Commons film collection.",url:"https://archive.org/details/feature_films",youtube:[{title:"Solaris — Mosfilm",videoId:"Z8ZhQPaw4rE"},{title:"Stalker — Mosfilm",videoId:"m5nL2xJ8K9w"}]},{id:"blender-movies",title:"Blender Open Movies",type:"link",description:"Open-source films, assets, and production files from Blender.",url:"https://www.blender.org/open-movies/",youtube:[{title:"Spring — Blender Open Movie",videoId:"WhWc3b3KfQs"},{title:"Sprite Fright — Blender",videoId:"Fh5g8k9J0L2"}]}]},{id:"images",number:"04",title:"IMAGES",route:"/start/images",tagline:"Ultra-Res Art, Textures & Celestial Captures",description:"Pristine 8K raw captures, procedural seamless textures, cinematic backdrop art, and astral telescopic imagery primed for visual production.",accentColor:"#fbbf24",secondaryAccent:"#f59e0b",glowColor:"rgba(251, 191, 36, 0.45)",gradient:"linear-gradient(135deg, rgba(251, 191, 36, 0.16) 0%, rgba(245, 158, 11, 0.04) 100%)",tags:["8K TEXTURES","CELESTIAL RAW","CONCEPT ART","FREE COMMERCIAL"],stats:{items:"18,500+ Assets",updated:"Daily Pipeline",access:"100% Free"},resources:[{id:"hubble-deep-field",title:"Hubble Ultra Deep Field",type:"file",description:"A high-resolution celestial reference image for visual research.",url:"https://upload.wikimedia.org/wikipedia/commons/6/68/Hubble_ultra_deep_field.jpg",fileType:"JPG",fileSize:"High resolution"},{id:"landscape-reference",title:"Landscape Reference Frame",type:"file",description:"A large-format landscape image for composition and color studies.",url:"https://picsum.photos/id/1015/3840/2160",fileType:"JPG",fileSize:"3840 × 2160"},{id:"unsplash",title:"Unsplash",type:"link",description:"High-resolution photography for creative and commercial projects.",url:"https://unsplash.com/",youtube:[{title:"Milky Way Photography Tutorial",videoId:"PQ6YSwBGbC0"},{title:"Landscape Photography Tips",videoId:"K8vL2mN1pQ4"}]},{id:"nasa-images",title:"NASA Image and Video Library",type:"link",description:"Search NASA's public archive of images, audio, and video.",url:"https://images.nasa.gov/",youtube:[{title:"NASA Image Processing",videoId:"R9xL3mN8pQ2"}]}]},{id:"videos",number:"05",title:"VIDEOS",route:"/start/videos",tagline:"VFX Overlays, Motion Graphics & Visual Loops",description:"Seamless 60FPS motion loops, volumetric light overlays, alpha-channel visual effects, and dynamic particle systems built for editors and VJs.",accentColor:"#34d399",secondaryAccent:"#10b981",glowColor:"rgba(52, 211, 153, 0.45)",gradient:"linear-gradient(135deg, rgba(52, 211, 153, 0.16) 0%, rgba(16, 185, 129, 0.04) 100%)",tags:["60FPS LOOPS","VFX PLATES","ALPHA CHANNEL","PRORES 422"],stats:{items:"3,100+ Loops",updated:"Weekly Release",access:"100% Free"},resources:[{id:"big-buck-bunny-sample",title:"Big Buck Bunny Sample",type:"file",description:"A compact MP4 sample for testing playback and edit pipelines.",url:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",fileType:"MP4",fileSize:"Sample"},{id:"bigger-blazes",title:"For Bigger Blazes Sample",type:"file",description:"A short sample clip for motion and color workflow testing.",url:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",fileType:"MP4",fileSize:"Sample"},{id:"mixkit",title:"Mixkit Free Stock Video",type:"link",description:"Royalty-free video clips and motion assets for editors.",url:"https://mixkit.co/free-stock-video/",youtube:[{title:"CapCut Video Editing Full Course",videoId:"qfHX2cNA4MY"},{title:"DaVinci Resolve Tutorial",videoId:"G3vK2mN9pQ1"}]},{id:"pexels-videos",title:"Pexels Videos",type:"link",description:"Free stock videos contributed by creators worldwide.",url:"https://www.pexels.com/videos/",youtube:[{title:"Pexels Video Search Guide",videoId:"X5vL8mN2pQ7"}]}]},{id:"sfx",number:"06",title:"SFX",route:"/start/sfx",tagline:"Spatial Audio, Cinematic Hits & Synthesizers",description:"Uncompressed 24-bit 96kHz spatial sound effects, sub-bass braams, modular synth patches, dark futuristic ambiences, and acoustic Foley.",accentColor:"#c084fc",secondaryAccent:"#a855f7",glowColor:"rgba(192, 132, 252, 0.45)",gradient:"linear-gradient(135deg, rgba(192, 132, 252, 0.16) 0%, rgba(168, 85, 247, 0.04) 100%)",tags:["SPATIAL SFX","96KHZ / 24-BIT","SYNTH PRESETS","CINEMATIC HITS"],stats:{items:"9,400+ Sounds",updated:"Weekly Bundles",access:"100% Free"},resources:[{id:"interface-button",title:"Interface Button",type:"file",description:"A clean UI click suitable for futuristic interface design.",url:"https://www.soundjay.com/buttons/sounds/button-1.mp3",fileType:"MP3",fileSize:"Short sample"},{id:"rain-atmosphere",title:"Rain Atmosphere",type:"file",description:"A compact rain recording for ambience and mixing studies.",url:"https://www.soundjay.com/nature/sounds/rain-01.mp3",fileType:"MP3",fileSize:"Short sample"},{id:"bbc-sfx",title:"BBC Sound Effects",type:"link",description:"Explore the BBC's public sound-effects archive.",url:"https://sound-effects.bbcrewind.co.uk/",youtube:[{title:"Sound Design Masterclass",videoId:"UOMMyu__FTM"},{title:"Foley Art Tutorial",videoId:"V8xL3mN9pQ5"}]},{id:"freesound",title:"Freesound",type:"link",description:"A collaborative database of Creative Commons audio samples.",url:"https://freesound.org/",youtube:[{title:"Freesound Tutorial",videoId:"Z7xL2mN8pQ3"}]}]}];function S3(n){return Y_.find(e=>e.id.toLowerCase()===n.toLowerCase())}const M3="https://res.cloudinary.com/eev7ddsv/video/upload/v1789069854/0910.mp4";function E3({category:n,index:e,isHovered:t,isDimmed:i,onHover:r,onLeave:s,onClick:o,viewMode:a="deck"}){const l={"--card-accent":n.accentColor,"--card-secondary":n.secondaryAccent,"--card-glow":n.glowColor,"--card-gradient":n.gradient},u=M3,c=d=>{d.preventDefault(),o(n)};return I.jsxs("div",{className:`category-card ${t?"is-hovered":""} ${i?"sibling-dimmed":""}`,style:l,onMouseEnter:()=>r(n.id),onMouseLeave:s,onClick:c,role:"button",tabIndex:0,"aria-label":`Explore ${n.title}`,onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),o(n))},children:[I.jsxs(I.Fragment,{children:[I.jsx("video",{className:"card-video-bg",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-hidden":"true",children:I.jsx("source",{src:u,type:"video/mp4"})}),I.jsx("div",{className:"card-video-overlay","aria-hidden":"true"})]}),I.jsx("span",{className:"corner-bracket corner-tl","aria-hidden":"true"}),I.jsx("span",{className:"corner-bracket corner-tr","aria-hidden":"true"}),I.jsx("span",{className:"corner-bracket corner-bl","aria-hidden":"true"}),I.jsx("span",{className:"corner-bracket corner-br","aria-hidden":"true"}),I.jsx("div",{className:"card-ambient-light","aria-hidden":"true"}),I.jsxs("div",{className:"card-top-block",children:[I.jsx("div",{className:"card-top-row",children:I.jsx("span",{className:"card-index",children:n.number})}),I.jsx("h3",{className:"card-title",children:n.title})]}),I.jsx("div",{className:"card-spacer","aria-hidden":"true"}),I.jsx("div",{className:"card-footer",children:I.jsxs("div",{className:"card-action-btn",children:[I.jsx("span",{children:"Enter"}),I.jsx("span",{className:"card-action-arrow",children:"→"})]})})]})}function w3({categories:n,onSelectCategory:e}){const[t,i]=je.useState(null),r=s=>{e(s)};return I.jsx("div",{className:"card-deck-stage",children:I.jsx("div",{className:"deck-scene",children:n.map((s,o)=>{const a=t===s.id,l=t!==null&&!a;return I.jsxs("div",{className:`card-layer ${a?"card-layer-hovered":""}`,style:{"--layer-index":o},children:[I.jsx(E3,{category:s,index:o,isHovered:a,isDimmed:l,onHover:i,onLeave:()=>i(null),onClick:r,viewMode:"deck"}),I.jsx("div",{className:`card-reflection ${a?"card-reflection-active":""}`,"aria-hidden":"true"})]},s.id)})})})}function jx({resource:n,onClick:e,accentColor:t,glowColor:i,variant:r}){const s=r==="file";return I.jsxs("button",{className:"compact-resource-card",onClick:()=>e(n),style:{"--resource-accent":t,"--resource-glow":i},"aria-label":`View ${n.title} details`,children:[I.jsxs("div",{className:"compact-resource-body",children:[I.jsx("h4",{className:"compact-resource-title",children:n.title}),n.description&&I.jsx("p",{className:"compact-resource-desc",children:n.description})]}),I.jsx("div",{className:"compact-resource-action",children:s?I.jsx("button",{className:"compact-action-btn",onClick:o=>{o.stopPropagation();const a=document.createElement("a");a.href=n.url,a.target="_blank",a.rel="noopener noreferrer",a.download=n.title,document.body.appendChild(a),a.click(),document.body.removeChild(a)},"aria-label":`Download ${n.title}`,children:I.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),I.jsx("polyline",{points:"7 10 12 15 17 10"}),I.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]})}):I.jsx("button",{className:"compact-action-btn",onClick:o=>{o.stopPropagation(),window.open(n.url,"_blank","noopener,noreferrer")},"aria-label":`Open ${n.title}`,children:I.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),I.jsx("polyline",{points:"15 3 21 3 21 9"}),I.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})})})]})}function T3({category:n,isOpen:e,onClose:t,onResourceClick:i}){const r=je.useRef(null),s=je.useRef(null),o=je.useRef(null),a=je.useRef(null),l=je.useRef(!1),u=je.useRef(!1),c=je.useRef(0),d=je.useRef(0);je.useEffect(()=>{var y;if(e){a.current=document.activeElement,document.body.style.overflow="hidden",document.body.style.touchAction="none";const R=E=>{E.key==="Escape"&&t()};return document.addEventListener("keydown",R),(y=r.current)==null||y.focus(),()=>{var E;document.body.style.overflow="",document.body.style.touchAction="",document.removeEventListener("keydown",R),(E=a.current)==null||E.focus()}}},[e,t]);const f=y=>{y.target===y.currentTarget&&t()},p=y=>je.useCallback(R=>{if(R.deltaY!==0){const E=y.current;if(!E)return;E.scrollWidth>E.clientWidth&&(R.preventDefault(),E.scrollLeft+=R.deltaY)}},[]),_=(y,R)=>E=>{var M;E.button===0&&(R.current=!0,c.current=E.clientX,d.current=((M=y.current)==null?void 0:M.scrollLeft)||0,y.current.style.cursor="grabbing",y.current.style.scrollBehavior="auto")},g=(y,R)=>E=>{if(!R.current)return;E.preventDefault();const M=(E.clientX-c.current)*1.5;y.current.scrollLeft=d.current-M},m=(y,R)=>()=>{R.current&&(R.current=!1,y.current.style.cursor="grab",y.current.style.scrollBehavior="smooth")},h=(y,R)=>E=>{var M;R.current=!0,c.current=E.touches[0].clientX,d.current=((M=y.current)==null?void 0:M.scrollLeft)||0,y.current.style.scrollBehavior="auto"},v=(y,R)=>E=>{if(!R.current)return;const M=(E.touches[0].clientX-c.current)*1.5;y.current.scrollLeft=d.current-M},x=(y,R)=>()=>{R.current&&(R.current=!1,y.current.style.scrollBehavior="smooth")};if(!e||!n)return null;const S={"--cat-accent":n.accentColor,"--cat-secondary":n.secondaryAccent,"--cat-glow":n.glowColor},C=n.resources.filter(y=>y.type==="file"),T=n.resources.filter(y=>y.type==="link");return I.jsx("div",{className:"category-window-backdrop",onClick:f,role:"dialog","aria-modal":"true","aria-labelledby":"category-window-title",children:I.jsxs("div",{ref:r,className:"category-window",style:S,tabIndex:-1,onClick:y=>y.stopPropagation(),children:[I.jsx("div",{className:"category-window-glow","aria-hidden":"true"}),I.jsxs("header",{className:"category-window-header",children:[I.jsxs("div",{className:"category-window-title-block",children:[I.jsxs("span",{className:"category-window-number",children:["// ",n.number]}),I.jsx("h2",{id:"category-window-title",className:"category-window-title",children:n.title})]}),I.jsx("button",{className:"category-window-close",onClick:t,"aria-label":"Close category window",type:"button",children:I.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),I.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),I.jsx("div",{className:"category-window-divider","aria-hidden":"true"}),I.jsxs("div",{className:"category-window-body",children:[T.length>0&&I.jsxs("section",{className:"category-window-panel","aria-labelledby":"links-panel-heading",children:[I.jsx("header",{className:"category-window-panel-header",children:I.jsx("span",{id:"links-panel-heading",className:"category-window-panel-title",children:"LINKS"})}),I.jsx("div",{ref:o,className:"category-window-panel-viewport",onWheel:p(o),onMouseDown:_(o,u),onMouseMove:g(o,u),onMouseUp:m(o,u),onMouseLeave:m(o,u),onTouchStart:h(o,u),onTouchMove:v(o,u),onTouchEnd:x(o,u),style:{cursor:"grab"},children:I.jsx("div",{className:"category-window-panel-row",children:T.map((y,R)=>I.jsx(jx,{resource:y,onClick:i,accentColor:n.accentColor,glowColor:n.glowColor,variant:"link"},y.id||R))})})]}),C.length>0&&I.jsxs("section",{className:"category-window-panel","aria-labelledby":"files-panel-heading",children:[I.jsx("header",{className:"category-window-panel-header",children:I.jsx("span",{id:"files-panel-heading",className:"category-window-panel-title",children:"FILES"})}),I.jsx("div",{ref:s,className:"category-window-panel-viewport",onWheel:p(s),onMouseDown:_(s,l),onMouseMove:g(s,l),onMouseUp:m(s,l),onMouseLeave:m(s,l),onTouchStart:h(s,l),onTouchMove:v(s,l),onTouchEnd:x(s,l),style:{cursor:"grab"},children:I.jsx("div",{className:"category-window-panel-row",children:C.map((y,R)=>I.jsx(jx,{resource:y,onClick:i,accentColor:n.accentColor,glowColor:n.glowColor,variant:"file"},y.id||R))})})]}),C.length===0&&T.length===0&&I.jsxs("div",{className:"category-window-empty",children:[I.jsx("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:I.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),I.jsx("p",{children:"No resources available for this category yet."})]})]})]})})}function A3({video:n,onClick:e,accentColor:t,glowColor:i}){const r=`https://img.youtube.com/vi/${n.videoId}/hqdefault.jpg`,s=`https://www.youtube.com/watch?v=${n.videoId}`,o=a=>{a.preventDefault(),a.stopPropagation(),e&&e(n),window.open(s,"_blank","noopener,noreferrer")};return I.jsxs("button",{className:"youtube-thumbnail",onClick:o,style:{"--yt-accent":t,"--yt-glow":i},"aria-label":`Watch ${n.title} on YouTube`,children:[I.jsx("img",{src:r,alt:`${n.title} thumbnail`,loading:"lazy","aria-hidden":"true"}),I.jsx("div",{className:"youtube-play-overlay","aria-hidden":"true",children:I.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:I.jsx("path",{d:"M8 5v14l11-7z"})})}),I.jsxs("span",{className:"youtube-duration","aria-hidden":"true",children:[I.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[I.jsx("circle",{cx:"12",cy:"12",r:"10"}),I.jsx("polyline",{points:"12 6 12 12 16 14"})]}),n.duration||"Video"]})]})}function C3({resource:n,category:e,isOpen:t,onClose:i,onBack:r}){const s=je.useRef(null),o=je.useRef(null),a=je.useRef(null),l=je.useRef(!1),u=je.useRef(0),c=je.useRef(0);je.useEffect(()=>{var y;if(t){a.current=document.activeElement,(y=s.current)==null||y.focus();const R=E=>{E.key==="Escape"&&r()};return document.addEventListener("keydown",R),()=>{var E;document.removeEventListener("keydown",R),(E=a.current)==null||E.focus()}}},[t,r]);const d=y=>{y.target===y.currentTarget&&r()},f=je.useCallback(y=>{y.deltaY!==0&&(y.preventDefault(),o.current.scrollBy({left:y.deltaY,behavior:"auto"}))},[]),p=y=>{y.button===0&&(l.current=!0,u.current=y.clientX,c.current=o.current.scrollLeft,o.current.style.cursor="grabbing",o.current.style.scrollBehavior="auto")},_=y=>{if(!l.current)return;y.preventDefault();const R=(y.clientX-u.current)*1.5;o.current.scrollLeft=c.current-R},g=()=>{l.current&&(l.current=!1,o.current.style.cursor="grab",o.current.style.scrollBehavior="smooth")},m=y=>{l.current=!0,u.current=y.touches[0].clientX,c.current=o.current.scrollLeft,o.current.style.scrollBehavior="auto"},h=y=>{if(!l.current)return;const R=(y.touches[0].clientX-u.current)*1.5;o.current.scrollLeft=c.current-R},v=()=>{l.current&&(l.current=!1,o.current.style.scrollBehavior="smooth")};if(!t||!n||!e)return null;const x=n.type==="file",S=n.youtube&&n.youtube.length>0,C={"--cat-accent":e.accentColor,"--cat-secondary":e.secondaryAccent,"--cat-glow":e.glowColor},T=y=>{if(y.preventDefault(),y.stopPropagation(),x){const R=document.createElement("a");R.href=n.url,R.target="_blank",R.rel="noopener noreferrer",R.download=n.title,document.body.appendChild(R),R.click(),document.body.removeChild(R)}else window.open(n.url,"_blank","noopener,noreferrer")};return t?I.jsx("div",{className:"resource-detail-backdrop",onClick:d,role:"dialog","aria-modal":"true","aria-labelledby":"resource-detail-title",children:I.jsxs("div",{ref:s,className:"resource-detail-window",style:C,tabIndex:-1,onClick:y=>y.stopPropagation(),children:[I.jsx("div",{className:"resource-detail-glow","aria-hidden":"true"}),I.jsxs("header",{className:"resource-detail-header",children:[I.jsx("button",{className:"resource-detail-back",onClick:r,"aria-label":"Back to category",type:"button",children:I.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),I.jsx("polyline",{points:"12 19 5 12 12 5"})]})}),I.jsxs("div",{className:"resource-detail-title-block",children:[I.jsx("span",{className:"resource-detail-type",children:x?"FILE":"LINK"}),I.jsx("h2",{id:"resource-detail-title",className:"resource-detail-title",children:n.title})]}),I.jsx("button",{className:"resource-detail-close",onClick:i,"aria-label":"Close detail window",type:"button",children:I.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),I.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),I.jsx("div",{className:"resource-detail-divider","aria-hidden":"true"}),I.jsxs("div",{className:"resource-detail-content",children:[n.description&&I.jsx("p",{className:"resource-detail-desc",children:n.description}),x&&n.fileType&&I.jsxs("div",{className:"resource-detail-meta",children:[I.jsx("span",{className:"resource-detail-filetype",children:n.fileType}),n.fileSize&&I.jsx("span",{className:"resource-detail-filesize",children:n.fileSize})]}),!x&&I.jsx("div",{className:"resource-detail-meta",children:I.jsx("span",{className:"resource-detail-domain",children:new URL(n.url).hostname.replace("www.","")})}),I.jsx("button",{className:"resource-detail-action",onClick:T,style:{"--action-accent":e.accentColor,"--action-glow":e.glowColor},children:x?I.jsxs(I.Fragment,{children:[I.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),I.jsx("polyline",{points:"7 10 12 15 17 10"}),I.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),I.jsx("span",{children:"DOWNLOAD"})]}):I.jsxs(I.Fragment,{children:[I.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),I.jsx("polyline",{points:"15 3 21 3 21 9"}),I.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),I.jsx("span",{children:"OPEN WEBSITE"})]})}),S&&I.jsxs("section",{className:"resource-detail-youtube","aria-labelledby":"youtube-heading",children:[I.jsx("h3",{id:"youtube-heading",className:"resource-detail-section-title",children:"Related Videos"}),I.jsx("div",{ref:o,className:"resource-detail-youtube-row",onWheel:f,onMouseDown:p,onMouseMove:_,onMouseUp:g,onMouseLeave:g,onTouchStart:m,onTouchMove:h,onTouchEnd:v,style:{cursor:"grab"},children:n.youtube.map((y,R)=>I.jsx(A3,{video:y,accentColor:e.accentColor,glowColor:e.glowColor},R))})]})]})]})}):null}function Yx(){const[n,e]=je.useState(""),[t,i]=je.useState(null),[r,s]=je.useState(!1),[o,a]=je.useState(null),[l,u]=je.useState(!1),c=je.useCallback(m=>{i(m),s(!0)},[]),d=je.useCallback(()=>{s(!1),i(null),a(null),u(!1)},[]),f=je.useCallback(m=>{a(m),u(!0)},[]),p=je.useCallback(()=>{u(!1),a(null)},[]),_=je.useCallback(()=>{u(!1),a(null)},[]),g=Y_.filter(m=>m.title.toLowerCase().includes(n.toLowerCase()));return I.jsxs("div",{className:"explore-container",children:[I.jsx("div",{className:"explore-backdrop","aria-hidden":"true"}),I.jsxs("div",{className:"search-wrapper",children:[I.jsx("span",{className:"search-icon","aria-hidden":"true",children:"🔍"}),I.jsx("input",{className:"search-input",type:"text",placeholder:"Search categories...",value:n,onChange:m=>e(m.target.value),"aria-label":"Search categories"})]}),I.jsx(w3,{categories:g,onSelectCategory:c}),t&&I.jsx(T3,{category:t,isOpen:r,onClose:d,onResourceClick:f}),o&&t&&I.jsx(C3,{resource:o,category:t,isOpen:l,onClose:p,onBack:_})]})}function R3({categoryId:n}){const e=lM(),t=S3(n)||Y_[0],i={"--cat-accent":t.accentColor,"--cat-secondary":t.secondaryAccent,"--cat-glow":t.glowColor};return I.jsxs("div",{className:"category-page-wrapper",style:i,children:[I.jsx("div",{className:"explore-backdrop","aria-hidden":"true"}),I.jsxs("div",{className:"category-nav-bar",children:[I.jsxs("button",{type:"button",className:"back-to-explore-btn",onClick:()=>e("/start"),children:[I.jsx("span",{children:"←"}),I.jsx("span",{children:"Back to Explore"})]}),I.jsxs("div",{className:"category-breadcrumbs",children:[I.jsx(sv,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Home"}),I.jsx("span",{className:"breadcrumb-separator",children:"/"}),I.jsx(sv,{to:"/start",style:{color:"inherit",textDecoration:"none"},children:"Explore"}),I.jsx("span",{className:"breadcrumb-separator",children:"/"}),I.jsx("span",{className:"breadcrumb-active",children:t.title})]})]}),I.jsxs("section",{className:"category-hero",children:[I.jsx("div",{className:"category-hero-ambient","aria-hidden":"true"}),I.jsxs("div",{className:"category-hero-header",children:[I.jsxs("span",{className:"category-num-badge",children:["// ",t.number]}),I.jsx("span",{className:"card-status-pill",children:t.stats.access})]}),I.jsx("h1",{className:"category-hero-title",children:t.title}),I.jsx("p",{className:"category-hero-tagline",children:t.tagline}),I.jsx("p",{className:"category-hero-desc",children:t.description}),I.jsxs("div",{className:"category-metrics-bar",children:[I.jsxs("div",{className:"category-metric-box",children:[I.jsx("span",{className:"metric-number",children:t.stats.items}),I.jsx("span",{className:"metric-name",children:"Curated Repository"})]}),I.jsxs("div",{className:"category-metric-box",children:[I.jsx("span",{className:"metric-number",children:t.stats.updated}),I.jsx("span",{className:"metric-name",children:"Release Frequency"})]}),I.jsxs("div",{className:"category-metric-box",children:[I.jsx("span",{className:"metric-number",children:t.stats.access}),I.jsx("span",{className:"metric-name",children:"License Type"})]})]})]}),I.jsxs("section",{className:"category-content-section",children:[I.jsxs("div",{className:"content-section-title-bar",children:[I.jsx("h2",{className:"content-section-title",children:"CURATED RELEASES"}),I.jsx("span",{className:"content-status-indicator",children:"● LIVE INDEX ACTIVE"})]}),I.jsx("div",{className:"category-resource-grid",children:t.previewItems.map((r,s)=>I.jsxs("div",{className:"resource-module-card",children:[I.jsxs("div",{className:"resource-module-top",children:[I.jsx("span",{className:"resource-module-version",children:r.version}),I.jsx("span",{className:"module-access-badge",children:"UNRESTRICTED"})]}),I.jsx("h3",{className:"resource-module-title",children:r.name}),I.jsx("p",{className:"resource-module-desc",children:r.desc}),I.jsxs("div",{className:"resource-module-action",children:[I.jsx("span",{className:"card-stat-label",children:"Available Direct"}),I.jsx("span",{className:"module-action-link",children:"Access Asset →"})]})]},s))})]})]})}function b3(){const{currentPath:n}=Hd();je.useEffect(()=>{const s=setTimeout(()=>{tt.refresh()},150);return()=>clearTimeout(s)},[n]);const e=n==="/"||n==="",t=n==="/start",i=n.startsWith("/start/"),r=i?n.replace("/start/","").split("/")[0]:"";return I.jsxs(I.Fragment,{children:[I.jsx(y3,{}),e&&I.jsx(BT,{}),e&&I.jsxs("div",{className:"content",children:[I.jsx(XT,{}),I.jsx(jT,{}),I.jsx(YT,{}),I.jsx($T,{}),I.jsx(qT,{}),I.jsx(KT,{})]}),t&&I.jsx(Yx,{}),i&&I.jsx(R3,{categoryId:r}),!e&&!t&&!i&&I.jsx(Yx,{})]})}function P3(){return I.jsx(zT,{children:I.jsx(b3,{})})}oM(document.getElementById("root")).render(I.jsx(je.StrictMode,{children:I.jsx(P3,{})}));
