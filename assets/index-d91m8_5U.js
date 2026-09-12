(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var bx={exports:{}},pd={},Px={exports:{}},ut={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bu=Symbol.for("react.element"),j1=Symbol.for("react.portal"),Y1=Symbol.for("react.fragment"),$1=Symbol.for("react.strict_mode"),q1=Symbol.for("react.profiler"),K1=Symbol.for("react.provider"),Z1=Symbol.for("react.context"),Q1=Symbol.for("react.forward_ref"),J1=Symbol.for("react.suspense"),eE=Symbol.for("react.memo"),tE=Symbol.for("react.lazy"),I_=Symbol.iterator;function nE(n){return n===null||typeof n!="object"?null:(n=I_&&n[I_]||n["@@iterator"],typeof n=="function"?n:null)}var Lx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dx=Object.assign,Nx={};function ol(n,e,t){this.props=n,this.context=e,this.refs=Nx,this.updater=t||Lx}ol.prototype.isReactComponent={};ol.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ol.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Ix(){}Ix.prototype=ol.prototype;function ng(n,e,t){this.props=n,this.context=e,this.refs=Nx,this.updater=t||Lx}var ig=ng.prototype=new Ix;ig.constructor=ng;Dx(ig,ol.prototype);ig.isPureReactComponent=!0;var U_=Array.isArray,Ux=Object.prototype.hasOwnProperty,rg={current:null},Fx={key:!0,ref:!0,__self:!0,__source:!0};function Ox(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ux.call(e,i)&&!Fx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Bu,type:n,key:s,ref:o,props:r,_owner:rg.current}}function iE(n,e){return{$$typeof:Bu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function sg(n){return typeof n=="object"&&n!==null&&n.$$typeof===Bu}function rE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var F_=/\/+/g;function Vd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?rE(""+n.key):e.toString(36)}function Qc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Bu:case j1:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Vd(o,0):i,U_(r)?(t="",n!=null&&(t=n.replace(F_,"$&/")+"/"),Qc(r,e,t,"",function(u){return u})):r!=null&&(sg(r)&&(r=iE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(F_,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",U_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Vd(s,a);o+=Qc(s,e,t,l,r)}else if(l=nE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Vd(s,a++),o+=Qc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Zu(n,e,t){if(n==null)return n;var i=[],r=0;return Qc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function sE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Gn={current:null},Jc={transition:null},oE={ReactCurrentDispatcher:Gn,ReactCurrentBatchConfig:Jc,ReactCurrentOwner:rg};function kx(){throw Error("act(...) is not supported in production builds of React.")}ut.Children={map:Zu,forEach:function(n,e,t){Zu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Zu(n,function(){e++}),e},toArray:function(n){return Zu(n,function(e){return e})||[]},only:function(n){if(!sg(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ut.Component=ol;ut.Fragment=Y1;ut.Profiler=q1;ut.PureComponent=ng;ut.StrictMode=$1;ut.Suspense=J1;ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oE;ut.act=kx;ut.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Dx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rg.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Ux.call(e,l)&&!Fx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Bu,type:n.type,key:r,ref:s,props:i,_owner:o}};ut.createContext=function(n){return n={$$typeof:Z1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:K1,_context:n},n.Consumer=n};ut.createElement=Ox;ut.createFactory=function(n){var e=Ox.bind(null,n);return e.type=n,e};ut.createRef=function(){return{current:null}};ut.forwardRef=function(n){return{$$typeof:Q1,render:n}};ut.isValidElement=sg;ut.lazy=function(n){return{$$typeof:tE,_payload:{_status:-1,_result:n},_init:sE}};ut.memo=function(n,e){return{$$typeof:eE,type:n,compare:e===void 0?null:e}};ut.startTransition=function(n){var e=Jc.transition;Jc.transition={};try{n()}finally{Jc.transition=e}};ut.unstable_act=kx;ut.useCallback=function(n,e){return Gn.current.useCallback(n,e)};ut.useContext=function(n){return Gn.current.useContext(n)};ut.useDebugValue=function(){};ut.useDeferredValue=function(n){return Gn.current.useDeferredValue(n)};ut.useEffect=function(n,e){return Gn.current.useEffect(n,e)};ut.useId=function(){return Gn.current.useId()};ut.useImperativeHandle=function(n,e,t){return Gn.current.useImperativeHandle(n,e,t)};ut.useInsertionEffect=function(n,e){return Gn.current.useInsertionEffect(n,e)};ut.useLayoutEffect=function(n,e){return Gn.current.useLayoutEffect(n,e)};ut.useMemo=function(n,e){return Gn.current.useMemo(n,e)};ut.useReducer=function(n,e,t){return Gn.current.useReducer(n,e,t)};ut.useRef=function(n){return Gn.current.useRef(n)};ut.useState=function(n){return Gn.current.useState(n)};ut.useSyncExternalStore=function(n,e,t){return Gn.current.useSyncExternalStore(n,e,t)};ut.useTransition=function(){return Gn.current.useTransition()};ut.version="18.3.1";Px.exports=ut;var We=Px.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aE=We,lE=Symbol.for("react.element"),uE=Symbol.for("react.fragment"),cE=Object.prototype.hasOwnProperty,fE=aE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dE={key:!0,ref:!0,__self:!0,__source:!0};function Bx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)cE.call(e,i)&&!dE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:lE,type:n,key:s,ref:o,props:r,_owner:fE.current}}pd.Fragment=uE;pd.jsx=Bx;pd.jsxs=Bx;bx.exports=pd;var I=bx.exports,zx={exports:{}},Ci={},Hx={exports:{}},Vx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,K){var b=N.length;N.push(K);e:for(;0<b;){var ie=b-1>>>1,Ee=N[ie];if(0<r(Ee,K))N[ie]=K,N[b]=Ee,b=ie;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var K=N[0],b=N.pop();if(b!==K){N[0]=b;e:for(var ie=0,Ee=N.length,$e=Ee>>>1;ie<$e;){var $=2*(ie+1)-1,re=N[$],me=$+1,fe=N[me];if(0>r(re,b))me<Ee&&0>r(fe,re)?(N[ie]=fe,N[me]=b,ie=me):(N[ie]=re,N[$]=b,ie=$);else if(me<Ee&&0>r(fe,b))N[ie]=fe,N[me]=b,ie=me;else break e}}return K}function r(N,K){var b=N.sortIndex-K.sortIndex;return b!==0?b:N.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,_=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var K=t(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=N)i(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=t(u)}}function y(N){if(g=!1,v(N),!_)if(t(l)!==null)_=!0,X(C);else{var K=t(u);K!==null&&V(y,K.startTime-N)}}function C(N,K){_=!1,g&&(g=!1,h(R),R=-1),p=!0;var b=f;try{for(v(K),d=t(l);d!==null&&(!(d.expirationTime>K)||N&&!L());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,f=d.priorityLevel;var Ee=ie(d.expirationTime<=K);K=n.unstable_now(),typeof Ee=="function"?d.callback=Ee:d===t(l)&&i(l),v(K)}else i(l);d=t(l)}if(d!==null)var $e=!0;else{var $=t(u);$!==null&&V(y,$.startTime-K),$e=!1}return $e}finally{d=null,f=b,p=!1}}var w=!1,M=null,R=-1,E=5,S=-1;function L(){return!(n.unstable_now()-S<E)}function O(){if(M!==null){var N=n.unstable_now();S=N;var K=!0;try{K=M(!0,N)}finally{K?z():(w=!1,M=null)}}else w=!1}var z;if(typeof x=="function")z=function(){x(O)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,q=j.port2;j.port1.onmessage=O,z=function(){q.postMessage(null)}}else z=function(){m(O,0)};function X(N){M=N,w||(w=!0,z())}function V(N,K){R=m(function(){N(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,X(C))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var b=f;f=K;try{return N()}finally{f=b}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,K){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var b=f;f=N;try{return K()}finally{f=b}},n.unstable_scheduleCallback=function(N,K,b){var ie=n.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?ie+b:ie):b=ie,N){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=b+Ee,N={id:c++,callback:K,priorityLevel:N,startTime:b,expirationTime:Ee,sortIndex:-1},b>ie?(N.sortIndex=b,e(u,N),t(l)===null&&N===t(u)&&(g?(h(R),R=-1):g=!0,V(y,b-ie))):(N.sortIndex=Ee,e(l,N),_||p||(_=!0,X(C))),N},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(N){var K=f;return function(){var b=f;f=K;try{return N.apply(this,arguments)}finally{f=b}}}})(Vx);Hx.exports=Vx;var hE=Hx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pE=We,Ti=hE;function de(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gx=new Set,cu={};function Uo(n,e){Ha(n,e),Ha(n+"Capture",e)}function Ha(n,e){for(cu[n]=e,n=0;n<e.length;n++)Gx.add(e[n])}var Gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rp=Object.prototype.hasOwnProperty,mE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,O_={},k_={};function gE(n){return rp.call(k_,n)?!0:rp.call(O_,n)?!1:mE.test(n)?k_[n]=!0:(O_[n]=!0,!1)}function _E(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function vE(n,e,t,i){if(e===null||typeof e>"u"||_E(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Sn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Sn[n]=new Wn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Sn[e]=new Wn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Sn[n]=new Wn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Sn[n]=new Wn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Sn[n]=new Wn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Sn[n]=new Wn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Sn[n]=new Wn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Sn[n]=new Wn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Sn[n]=new Wn(n,5,!1,n.toLowerCase(),null,!1,!1)});var og=/[\-:]([a-z])/g;function ag(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(og,ag);Sn[e]=new Wn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(og,ag);Sn[e]=new Wn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(og,ag);Sn[e]=new Wn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Sn[n]=new Wn(n,1,!1,n.toLowerCase(),null,!1,!1)});Sn.xlinkHref=new Wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Sn[n]=new Wn(n,1,!1,n.toLowerCase(),null,!0,!0)});function lg(n,e,t,i){var r=Sn.hasOwnProperty(e)?Sn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vE(e,t,r,i)&&(t=null),i||r===null?gE(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Zr=pE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qu=Symbol.for("react.element"),ua=Symbol.for("react.portal"),ca=Symbol.for("react.fragment"),ug=Symbol.for("react.strict_mode"),sp=Symbol.for("react.profiler"),Wx=Symbol.for("react.provider"),Xx=Symbol.for("react.context"),cg=Symbol.for("react.forward_ref"),op=Symbol.for("react.suspense"),ap=Symbol.for("react.suspense_list"),fg=Symbol.for("react.memo"),ls=Symbol.for("react.lazy"),jx=Symbol.for("react.offscreen"),B_=Symbol.iterator;function fl(n){return n===null||typeof n!="object"?null:(n=B_&&n[B_]||n["@@iterator"],typeof n=="function"?n:null)}var Vt=Object.assign,Gd;function bl(n){if(Gd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Gd=e&&e[1]||""}return`
`+Gd+n}var Wd=!1;function Xd(n,e){if(!n||Wd)return"";Wd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Wd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?bl(n):""}function xE(n){switch(n.tag){case 5:return bl(n.type);case 16:return bl("Lazy");case 13:return bl("Suspense");case 19:return bl("SuspenseList");case 0:case 2:case 15:return n=Xd(n.type,!1),n;case 11:return n=Xd(n.type.render,!1),n;case 1:return n=Xd(n.type,!0),n;default:return""}}function lp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ca:return"Fragment";case ua:return"Portal";case sp:return"Profiler";case ug:return"StrictMode";case op:return"Suspense";case ap:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Xx:return(n.displayName||"Context")+".Consumer";case Wx:return(n._context.displayName||"Context")+".Provider";case cg:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fg:return e=n.displayName||null,e!==null?e:lp(n.type)||"Memo";case ls:e=n._payload,n=n._init;try{return lp(n(e))}catch{}}return null}function yE(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lp(e);case 8:return e===ug?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ns(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Yx(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function SE(n){var e=Yx(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ju(n){n._valueTracker||(n._valueTracker=SE(n))}function $x(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Yx(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Af(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function up(n,e){var t=e.checked;return Vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function z_(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ns(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qx(n,e){e=e.checked,e!=null&&lg(n,"checked",e,!1)}function cp(n,e){qx(n,e);var t=Ns(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?fp(n,e.type,t):e.hasOwnProperty("defaultValue")&&fp(n,e.type,Ns(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function H_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function fp(n,e,t){(e!=="number"||Af(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Pl=Array.isArray;function wa(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ns(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function dp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return Vt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function V_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(de(92));if(Pl(t)){if(1<t.length)throw Error(de(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ns(t)}}function Kx(n,e){var t=Ns(e.value),i=Ns(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function G_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Zx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Zx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ec,Qx=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ec=ec||document.createElement("div"),ec.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ec.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function fu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Hl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ME=["Webkit","ms","Moz","O"];Object.keys(Hl).forEach(function(n){ME.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Hl[e]=Hl[n]})});function Jx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Hl.hasOwnProperty(n)&&Hl[n]?(""+e).trim():e+"px"}function ey(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Jx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var EE=Vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pp(n,e){if(e){if(EE[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function mp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gp=null;function dg(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var _p=null,Aa=null,Ca=null;function W_(n){if(n=Vu(n)){if(typeof _p!="function")throw Error(de(280));var e=n.stateNode;e&&(e=xd(e),_p(n.stateNode,n.type,e))}}function ty(n){Aa?Ca?Ca.push(n):Ca=[n]:Aa=n}function ny(){if(Aa){var n=Aa,e=Ca;if(Ca=Aa=null,W_(n),e)for(n=0;n<e.length;n++)W_(e[n])}}function iy(n,e){return n(e)}function ry(){}var jd=!1;function sy(n,e,t){if(jd)return n(e,t);jd=!0;try{return iy(n,e,t)}finally{jd=!1,(Aa!==null||Ca!==null)&&(ry(),ny())}}function du(n,e){var t=n.stateNode;if(t===null)return null;var i=xd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(de(231,e,typeof t));return t}var vp=!1;if(Gr)try{var dl={};Object.defineProperty(dl,"passive",{get:function(){vp=!0}}),window.addEventListener("test",dl,dl),window.removeEventListener("test",dl,dl)}catch{vp=!1}function TE(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Vl=!1,Cf=null,Rf=!1,xp=null,wE={onError:function(n){Vl=!0,Cf=n}};function AE(n,e,t,i,r,s,o,a,l){Vl=!1,Cf=null,TE.apply(wE,arguments)}function CE(n,e,t,i,r,s,o,a,l){if(AE.apply(this,arguments),Vl){if(Vl){var u=Cf;Vl=!1,Cf=null}else throw Error(de(198));Rf||(Rf=!0,xp=u)}}function Fo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function oy(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function X_(n){if(Fo(n)!==n)throw Error(de(188))}function RE(n){var e=n.alternate;if(!e){if(e=Fo(n),e===null)throw Error(de(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return X_(r),n;if(s===i)return X_(r),e;s=s.sibling}throw Error(de(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(de(189))}}if(t.alternate!==i)throw Error(de(190))}if(t.tag!==3)throw Error(de(188));return t.stateNode.current===t?n:e}function ay(n){return n=RE(n),n!==null?ly(n):null}function ly(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=ly(n);if(e!==null)return e;n=n.sibling}return null}var uy=Ti.unstable_scheduleCallback,j_=Ti.unstable_cancelCallback,bE=Ti.unstable_shouldYield,PE=Ti.unstable_requestPaint,jt=Ti.unstable_now,LE=Ti.unstable_getCurrentPriorityLevel,hg=Ti.unstable_ImmediatePriority,cy=Ti.unstable_UserBlockingPriority,bf=Ti.unstable_NormalPriority,DE=Ti.unstable_LowPriority,fy=Ti.unstable_IdlePriority,md=null,vr=null;function NE(n){if(vr&&typeof vr.onCommitFiberRoot=="function")try{vr.onCommitFiberRoot(md,n,void 0,(n.current.flags&128)===128)}catch{}}var nr=Math.clz32?Math.clz32:FE,IE=Math.log,UE=Math.LN2;function FE(n){return n>>>=0,n===0?32:31-(IE(n)/UE|0)|0}var tc=64,nc=4194304;function Ll(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Pf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ll(a):(s&=o,s!==0&&(i=Ll(s)))}else o=t&~r,o!==0?i=Ll(o):s!==0&&(i=Ll(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-nr(e),r=1<<t,i|=n[t],e&=~r;return i}function OE(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kE(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-nr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=OE(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function yp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function dy(){var n=tc;return tc<<=1,!(tc&4194240)&&(tc=64),n}function Yd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function zu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-nr(e),n[e]=t}function BE(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-nr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function pg(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-nr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Et=0;function hy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var py,mg,my,gy,_y,Sp=!1,ic=[],ys=null,Ss=null,Ms=null,hu=new Map,pu=new Map,cs=[],zE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Y_(n,e){switch(n){case"focusin":case"focusout":ys=null;break;case"dragenter":case"dragleave":Ss=null;break;case"mouseover":case"mouseout":Ms=null;break;case"pointerover":case"pointerout":hu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pu.delete(e.pointerId)}}function hl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Vu(e),e!==null&&mg(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function HE(n,e,t,i,r){switch(e){case"focusin":return ys=hl(ys,n,e,t,i,r),!0;case"dragenter":return Ss=hl(Ss,n,e,t,i,r),!0;case"mouseover":return Ms=hl(Ms,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return hu.set(s,hl(hu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,pu.set(s,hl(pu.get(s)||null,n,e,t,i,r)),!0}return!1}function vy(n){var e=lo(n.target);if(e!==null){var t=Fo(e);if(t!==null){if(e=t.tag,e===13){if(e=oy(t),e!==null){n.blockedOn=e,_y(n.priority,function(){my(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ef(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Mp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);gp=i,t.target.dispatchEvent(i),gp=null}else return e=Vu(t),e!==null&&mg(e),n.blockedOn=t,!1;e.shift()}return!0}function $_(n,e,t){ef(n)&&t.delete(e)}function VE(){Sp=!1,ys!==null&&ef(ys)&&(ys=null),Ss!==null&&ef(Ss)&&(Ss=null),Ms!==null&&ef(Ms)&&(Ms=null),hu.forEach($_),pu.forEach($_)}function pl(n,e){n.blockedOn===e&&(n.blockedOn=null,Sp||(Sp=!0,Ti.unstable_scheduleCallback(Ti.unstable_NormalPriority,VE)))}function mu(n){function e(r){return pl(r,n)}if(0<ic.length){pl(ic[0],n);for(var t=1;t<ic.length;t++){var i=ic[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ys!==null&&pl(ys,n),Ss!==null&&pl(Ss,n),Ms!==null&&pl(Ms,n),hu.forEach(e),pu.forEach(e),t=0;t<cs.length;t++)i=cs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<cs.length&&(t=cs[0],t.blockedOn===null);)vy(t),t.blockedOn===null&&cs.shift()}var Ra=Zr.ReactCurrentBatchConfig,Lf=!0;function GE(n,e,t,i){var r=Et,s=Ra.transition;Ra.transition=null;try{Et=1,gg(n,e,t,i)}finally{Et=r,Ra.transition=s}}function WE(n,e,t,i){var r=Et,s=Ra.transition;Ra.transition=null;try{Et=4,gg(n,e,t,i)}finally{Et=r,Ra.transition=s}}function gg(n,e,t,i){if(Lf){var r=Mp(n,e,t,i);if(r===null)ih(n,e,i,Df,t),Y_(n,i);else if(HE(r,n,e,t,i))i.stopPropagation();else if(Y_(n,i),e&4&&-1<zE.indexOf(n)){for(;r!==null;){var s=Vu(r);if(s!==null&&py(s),s=Mp(n,e,t,i),s===null&&ih(n,e,i,Df,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else ih(n,e,i,null,t)}}var Df=null;function Mp(n,e,t,i){if(Df=null,n=dg(i),n=lo(n),n!==null)if(e=Fo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=oy(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Df=n,null}function xy(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LE()){case hg:return 1;case cy:return 4;case bf:case DE:return 16;case fy:return 536870912;default:return 16}default:return 16}}var hs=null,_g=null,tf=null;function yy(){if(tf)return tf;var n,e=_g,t=e.length,i,r="value"in hs?hs.value:hs.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return tf=r.slice(n,1<i?1-i:void 0)}function nf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function rc(){return!0}function q_(){return!1}function Ri(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rc:q_,this.isPropagationStopped=q_,this}return Vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=rc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=rc)},persist:function(){},isPersistent:rc}),e}var al={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vg=Ri(al),Hu=Vt({},al,{view:0,detail:0}),XE=Ri(Hu),$d,qd,ml,gd=Vt({},Hu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xg,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ml&&(ml&&n.type==="mousemove"?($d=n.screenX-ml.screenX,qd=n.screenY-ml.screenY):qd=$d=0,ml=n),$d)},movementY:function(n){return"movementY"in n?n.movementY:qd}}),K_=Ri(gd),jE=Vt({},gd,{dataTransfer:0}),YE=Ri(jE),$E=Vt({},Hu,{relatedTarget:0}),Kd=Ri($E),qE=Vt({},al,{animationName:0,elapsedTime:0,pseudoElement:0}),KE=Ri(qE),ZE=Vt({},al,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),QE=Ri(ZE),JE=Vt({},al,{data:0}),Z_=Ri(JE),eT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iT(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=nT[n])?!!e[n]:!1}function xg(){return iT}var rT=Vt({},Hu,{key:function(n){if(n.key){var e=eT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=nf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?tT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xg,charCode:function(n){return n.type==="keypress"?nf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?nf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),sT=Ri(rT),oT=Vt({},gd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Q_=Ri(oT),aT=Vt({},Hu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xg}),lT=Ri(aT),uT=Vt({},al,{propertyName:0,elapsedTime:0,pseudoElement:0}),cT=Ri(uT),fT=Vt({},gd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),dT=Ri(fT),hT=[9,13,27,32],yg=Gr&&"CompositionEvent"in window,Gl=null;Gr&&"documentMode"in document&&(Gl=document.documentMode);var pT=Gr&&"TextEvent"in window&&!Gl,Sy=Gr&&(!yg||Gl&&8<Gl&&11>=Gl),J_=" ",e0=!1;function My(n,e){switch(n){case"keyup":return hT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ey(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fa=!1;function mT(n,e){switch(n){case"compositionend":return Ey(e);case"keypress":return e.which!==32?null:(e0=!0,J_);case"textInput":return n=e.data,n===J_&&e0?null:n;default:return null}}function gT(n,e){if(fa)return n==="compositionend"||!yg&&My(n,e)?(n=yy(),tf=_g=hs=null,fa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sy&&e.locale!=="ko"?null:e.data;default:return null}}var _T={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function t0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!_T[n.type]:e==="textarea"}function Ty(n,e,t,i){ty(i),e=Nf(e,"onChange"),0<e.length&&(t=new vg("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Wl=null,gu=null;function vT(n){Uy(n,0)}function _d(n){var e=pa(n);if($x(e))return n}function xT(n,e){if(n==="change")return e}var wy=!1;if(Gr){var Zd;if(Gr){var Qd="oninput"in document;if(!Qd){var n0=document.createElement("div");n0.setAttribute("oninput","return;"),Qd=typeof n0.oninput=="function"}Zd=Qd}else Zd=!1;wy=Zd&&(!document.documentMode||9<document.documentMode)}function i0(){Wl&&(Wl.detachEvent("onpropertychange",Ay),gu=Wl=null)}function Ay(n){if(n.propertyName==="value"&&_d(gu)){var e=[];Ty(e,gu,n,dg(n)),sy(vT,e)}}function yT(n,e,t){n==="focusin"?(i0(),Wl=e,gu=t,Wl.attachEvent("onpropertychange",Ay)):n==="focusout"&&i0()}function ST(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return _d(gu)}function MT(n,e){if(n==="click")return _d(e)}function ET(n,e){if(n==="input"||n==="change")return _d(e)}function TT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var rr=typeof Object.is=="function"?Object.is:TT;function _u(n,e){if(rr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!rp.call(e,r)||!rr(n[r],e[r]))return!1}return!0}function r0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function s0(n,e){var t=r0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=r0(t)}}function Cy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Cy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Ry(){for(var n=window,e=Af();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Af(n.document)}return e}function Sg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function wT(n){var e=Ry(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Cy(t.ownerDocument.documentElement,t)){if(i!==null&&Sg(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=s0(t,s);var o=s0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var AT=Gr&&"documentMode"in document&&11>=document.documentMode,da=null,Ep=null,Xl=null,Tp=!1;function o0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Tp||da==null||da!==Af(i)||(i=da,"selectionStart"in i&&Sg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xl&&_u(Xl,i)||(Xl=i,i=Nf(Ep,"onSelect"),0<i.length&&(e=new vg("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=da)))}function sc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ha={animationend:sc("Animation","AnimationEnd"),animationiteration:sc("Animation","AnimationIteration"),animationstart:sc("Animation","AnimationStart"),transitionend:sc("Transition","TransitionEnd")},Jd={},by={};Gr&&(by=document.createElement("div").style,"AnimationEvent"in window||(delete ha.animationend.animation,delete ha.animationiteration.animation,delete ha.animationstart.animation),"TransitionEvent"in window||delete ha.transitionend.transition);function vd(n){if(Jd[n])return Jd[n];if(!ha[n])return n;var e=ha[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in by)return Jd[n]=e[t];return n}var Py=vd("animationend"),Ly=vd("animationiteration"),Dy=vd("animationstart"),Ny=vd("transitionend"),Iy=new Map,a0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zs(n,e){Iy.set(n,e),Uo(e,[n])}for(var eh=0;eh<a0.length;eh++){var th=a0[eh],CT=th.toLowerCase(),RT=th[0].toUpperCase()+th.slice(1);zs(CT,"on"+RT)}zs(Py,"onAnimationEnd");zs(Ly,"onAnimationIteration");zs(Dy,"onAnimationStart");zs("dblclick","onDoubleClick");zs("focusin","onFocus");zs("focusout","onBlur");zs(Ny,"onTransitionEnd");Ha("onMouseEnter",["mouseout","mouseover"]);Ha("onMouseLeave",["mouseout","mouseover"]);Ha("onPointerEnter",["pointerout","pointerover"]);Ha("onPointerLeave",["pointerout","pointerover"]);Uo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Uo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Uo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Uo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Uo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Uo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dl));function l0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,CE(i,e,void 0,n),n.currentTarget=null}function Uy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;l0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;l0(r,a,u),s=l}}}if(Rf)throw n=xp,Rf=!1,xp=null,n}function Lt(n,e){var t=e[bp];t===void 0&&(t=e[bp]=new Set);var i=n+"__bubble";t.has(i)||(Fy(e,n,2,!1),t.add(i))}function nh(n,e,t){var i=0;e&&(i|=4),Fy(t,n,i,e)}var oc="_reactListening"+Math.random().toString(36).slice(2);function vu(n){if(!n[oc]){n[oc]=!0,Gx.forEach(function(t){t!=="selectionchange"&&(bT.has(t)||nh(t,!1,n),nh(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[oc]||(e[oc]=!0,nh("selectionchange",!1,e))}}function Fy(n,e,t,i){switch(xy(e)){case 1:var r=GE;break;case 4:r=WE;break;default:r=gg}t=r.bind(null,e,t,n),r=void 0,!vp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function ih(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=lo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}sy(function(){var u=s,c=dg(t),d=[];e:{var f=Iy.get(n);if(f!==void 0){var p=vg,_=n;switch(n){case"keypress":if(nf(t)===0)break e;case"keydown":case"keyup":p=sT;break;case"focusin":_="focus",p=Kd;break;case"focusout":_="blur",p=Kd;break;case"beforeblur":case"afterblur":p=Kd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=K_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=YE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=lT;break;case Py:case Ly:case Dy:p=KE;break;case Ny:p=cT;break;case"scroll":p=XE;break;case"wheel":p=dT;break;case"copy":case"cut":case"paste":p=QE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Q_}var g=(e&4)!==0,m=!g&&n==="scroll",h=g?f!==null?f+"Capture":null:f;g=[];for(var x=u,v;x!==null;){v=x;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,h!==null&&(y=du(x,h),y!=null&&g.push(xu(x,y,v)))),m)break;x=x.return}0<g.length&&(f=new p(f,_,null,t,c),d.push({event:f,listeners:g}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==gp&&(_=t.relatedTarget||t.fromElement)&&(lo(_)||_[Wr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?lo(_):null,_!==null&&(m=Fo(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(g=K_,y="onMouseLeave",h="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(g=Q_,y="onPointerLeave",h="onPointerEnter",x="pointer"),m=p==null?f:pa(p),v=_==null?f:pa(_),f=new g(y,x+"leave",p,t,c),f.target=m,f.relatedTarget=v,y=null,lo(c)===u&&(g=new g(h,x+"enter",_,t,c),g.target=v,g.relatedTarget=m,y=g),m=y,p&&_)t:{for(g=p,h=_,x=0,v=g;v;v=Bo(v))x++;for(v=0,y=h;y;y=Bo(y))v++;for(;0<x-v;)g=Bo(g),x--;for(;0<v-x;)h=Bo(h),v--;for(;x--;){if(g===h||h!==null&&g===h.alternate)break t;g=Bo(g),h=Bo(h)}g=null}else g=null;p!==null&&u0(d,f,p,g,!1),_!==null&&m!==null&&u0(d,m,_,g,!0)}}e:{if(f=u?pa(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=xT;else if(t0(f))if(wy)C=ET;else{C=ST;var w=yT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=MT);if(C&&(C=C(n,u))){Ty(d,C,t,c);break e}w&&w(n,f,u),n==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&fp(f,"number",f.value)}switch(w=u?pa(u):window,n){case"focusin":(t0(w)||w.contentEditable==="true")&&(da=w,Ep=u,Xl=null);break;case"focusout":Xl=Ep=da=null;break;case"mousedown":Tp=!0;break;case"contextmenu":case"mouseup":case"dragend":Tp=!1,o0(d,t,c);break;case"selectionchange":if(AT)break;case"keydown":case"keyup":o0(d,t,c)}var M;if(yg)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else fa?My(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(Sy&&t.locale!=="ko"&&(fa||R!=="onCompositionStart"?R==="onCompositionEnd"&&fa&&(M=yy()):(hs=c,_g="value"in hs?hs.value:hs.textContent,fa=!0)),w=Nf(u,R),0<w.length&&(R=new Z_(R,n,null,t,c),d.push({event:R,listeners:w}),M?R.data=M:(M=Ey(t),M!==null&&(R.data=M)))),(M=pT?mT(n,t):gT(n,t))&&(u=Nf(u,"onBeforeInput"),0<u.length&&(c=new Z_("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=M))}Uy(d,e)})}function xu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Nf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=du(n,t),s!=null&&i.unshift(xu(n,s,r)),s=du(n,e),s!=null&&i.push(xu(n,s,r))),n=n.return}return i}function Bo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function u0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=du(t,s),l!=null&&o.unshift(xu(t,l,a))):r||(l=du(t,s),l!=null&&o.push(xu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var PT=/\r\n?/g,LT=/\u0000|\uFFFD/g;function c0(n){return(typeof n=="string"?n:""+n).replace(PT,`
`).replace(LT,"")}function ac(n,e,t){if(e=c0(e),c0(n)!==e&&t)throw Error(de(425))}function If(){}var wp=null,Ap=null;function Cp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rp=typeof setTimeout=="function"?setTimeout:void 0,DT=typeof clearTimeout=="function"?clearTimeout:void 0,f0=typeof Promise=="function"?Promise:void 0,NT=typeof queueMicrotask=="function"?queueMicrotask:typeof f0<"u"?function(n){return f0.resolve(null).then(n).catch(IT)}:Rp;function IT(n){setTimeout(function(){throw n})}function rh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),mu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);mu(e)}function Es(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function d0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ll=Math.random().toString(36).slice(2),fr="__reactFiber$"+ll,yu="__reactProps$"+ll,Wr="__reactContainer$"+ll,bp="__reactEvents$"+ll,UT="__reactListeners$"+ll,FT="__reactHandles$"+ll;function lo(n){var e=n[fr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Wr]||t[fr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=d0(n);n!==null;){if(t=n[fr])return t;n=d0(n)}return e}n=t,t=n.parentNode}return null}function Vu(n){return n=n[fr]||n[Wr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function pa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(de(33))}function xd(n){return n[yu]||null}var Pp=[],ma=-1;function Hs(n){return{current:n}}function Nt(n){0>ma||(n.current=Pp[ma],Pp[ma]=null,ma--)}function bt(n,e){ma++,Pp[ma]=n.current,n.current=e}var Is={},Nn=Hs(Is),Zn=Hs(!1),wo=Is;function Va(n,e){var t=n.type.contextTypes;if(!t)return Is;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Qn(n){return n=n.childContextTypes,n!=null}function Uf(){Nt(Zn),Nt(Nn)}function h0(n,e,t){if(Nn.current!==Is)throw Error(de(168));bt(Nn,e),bt(Zn,t)}function Oy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,yE(n)||"Unknown",r));return Vt({},t,i)}function Ff(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Is,wo=Nn.current,bt(Nn,n),bt(Zn,Zn.current),!0}function p0(n,e,t){var i=n.stateNode;if(!i)throw Error(de(169));t?(n=Oy(n,e,wo),i.__reactInternalMemoizedMergedChildContext=n,Nt(Zn),Nt(Nn),bt(Nn,n)):Nt(Zn),bt(Zn,t)}var Dr=null,yd=!1,sh=!1;function ky(n){Dr===null?Dr=[n]:Dr.push(n)}function OT(n){yd=!0,ky(n)}function Vs(){if(!sh&&Dr!==null){sh=!0;var n=0,e=Et;try{var t=Dr;for(Et=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Dr=null,yd=!1}catch(r){throw Dr!==null&&(Dr=Dr.slice(n+1)),uy(hg,Vs),r}finally{Et=e,sh=!1}}return null}var ga=[],_a=0,Of=null,kf=0,Di=[],Ni=0,Ao=null,Fr=1,Or="";function Js(n,e){ga[_a++]=kf,ga[_a++]=Of,Of=n,kf=e}function By(n,e,t){Di[Ni++]=Fr,Di[Ni++]=Or,Di[Ni++]=Ao,Ao=n;var i=Fr;n=Or;var r=32-nr(i)-1;i&=~(1<<r),t+=1;var s=32-nr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Fr=1<<32-nr(e)+r|t<<r|i,Or=s+n}else Fr=1<<s|t<<r|i,Or=n}function Mg(n){n.return!==null&&(Js(n,1),By(n,1,0))}function Eg(n){for(;n===Of;)Of=ga[--_a],ga[_a]=null,kf=ga[--_a],ga[_a]=null;for(;n===Ao;)Ao=Di[--Ni],Di[Ni]=null,Or=Di[--Ni],Di[Ni]=null,Fr=Di[--Ni],Di[Ni]=null}var Mi=null,vi=null,It=!1,Ji=null;function zy(n,e){var t=Oi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function m0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Mi=n,vi=Es(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Mi=n,vi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ao!==null?{id:Fr,overflow:Or}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Oi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Mi=n,vi=null,!0):!1;default:return!1}}function Lp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Dp(n){if(It){var e=vi;if(e){var t=e;if(!m0(n,e)){if(Lp(n))throw Error(de(418));e=Es(t.nextSibling);var i=Mi;e&&m0(n,e)?zy(i,t):(n.flags=n.flags&-4097|2,It=!1,Mi=n)}}else{if(Lp(n))throw Error(de(418));n.flags=n.flags&-4097|2,It=!1,Mi=n}}}function g0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Mi=n}function lc(n){if(n!==Mi)return!1;if(!It)return g0(n),It=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Cp(n.type,n.memoizedProps)),e&&(e=vi)){if(Lp(n))throw Hy(),Error(de(418));for(;e;)zy(n,e),e=Es(e.nextSibling)}if(g0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(de(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){vi=Es(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}vi=null}}else vi=Mi?Es(n.stateNode.nextSibling):null;return!0}function Hy(){for(var n=vi;n;)n=Es(n.nextSibling)}function Ga(){vi=Mi=null,It=!1}function Tg(n){Ji===null?Ji=[n]:Ji.push(n)}var kT=Zr.ReactCurrentBatchConfig;function gl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(de(309));var i=t.stateNode}if(!i)throw Error(de(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(de(284));if(!t._owner)throw Error(de(290,n))}return n}function uc(n,e){throw n=Object.prototype.toString.call(e),Error(de(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function _0(n){var e=n._init;return e(n._payload)}function Vy(n){function e(h,x){if(n){var v=h.deletions;v===null?(h.deletions=[x],h.flags|=16):v.push(x)}}function t(h,x){if(!n)return null;for(;x!==null;)e(h,x),x=x.sibling;return null}function i(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function r(h,x){return h=Cs(h,x),h.index=0,h.sibling=null,h}function s(h,x,v){return h.index=v,n?(v=h.alternate,v!==null?(v=v.index,v<x?(h.flags|=2,x):v):(h.flags|=2,x)):(h.flags|=1048576,x)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,x,v,y){return x===null||x.tag!==6?(x=dh(v,h.mode,y),x.return=h,x):(x=r(x,v),x.return=h,x)}function l(h,x,v,y){var C=v.type;return C===ca?c(h,x,v.props.children,y,v.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ls&&_0(C)===x.type)?(y=r(x,v.props),y.ref=gl(h,x,v),y.return=h,y):(y=cf(v.type,v.key,v.props,null,h.mode,y),y.ref=gl(h,x,v),y.return=h,y)}function u(h,x,v,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=hh(v,h.mode,y),x.return=h,x):(x=r(x,v.children||[]),x.return=h,x)}function c(h,x,v,y,C){return x===null||x.tag!==7?(x=_o(v,h.mode,y,C),x.return=h,x):(x=r(x,v),x.return=h,x)}function d(h,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=dh(""+x,h.mode,v),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Qu:return v=cf(x.type,x.key,x.props,null,h.mode,v),v.ref=gl(h,null,x),v.return=h,v;case ua:return x=hh(x,h.mode,v),x.return=h,x;case ls:var y=x._init;return d(h,y(x._payload),v)}if(Pl(x)||fl(x))return x=_o(x,h.mode,v,null),x.return=h,x;uc(h,x)}return null}function f(h,x,v,y){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(h,x,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qu:return v.key===C?l(h,x,v,y):null;case ua:return v.key===C?u(h,x,v,y):null;case ls:return C=v._init,f(h,x,C(v._payload),y)}if(Pl(v)||fl(v))return C!==null?null:c(h,x,v,y,null);uc(h,v)}return null}function p(h,x,v,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(v)||null,a(x,h,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Qu:return h=h.get(y.key===null?v:y.key)||null,l(x,h,y,C);case ua:return h=h.get(y.key===null?v:y.key)||null,u(x,h,y,C);case ls:var w=y._init;return p(h,x,v,w(y._payload),C)}if(Pl(y)||fl(y))return h=h.get(v)||null,c(x,h,y,C,null);uc(x,y)}return null}function _(h,x,v,y){for(var C=null,w=null,M=x,R=x=0,E=null;M!==null&&R<v.length;R++){M.index>R?(E=M,M=null):E=M.sibling;var S=f(h,M,v[R],y);if(S===null){M===null&&(M=E);break}n&&M&&S.alternate===null&&e(h,M),x=s(S,x,R),w===null?C=S:w.sibling=S,w=S,M=E}if(R===v.length)return t(h,M),It&&Js(h,R),C;if(M===null){for(;R<v.length;R++)M=d(h,v[R],y),M!==null&&(x=s(M,x,R),w===null?C=M:w.sibling=M,w=M);return It&&Js(h,R),C}for(M=i(h,M);R<v.length;R++)E=p(M,h,R,v[R],y),E!==null&&(n&&E.alternate!==null&&M.delete(E.key===null?R:E.key),x=s(E,x,R),w===null?C=E:w.sibling=E,w=E);return n&&M.forEach(function(L){return e(h,L)}),It&&Js(h,R),C}function g(h,x,v,y){var C=fl(v);if(typeof C!="function")throw Error(de(150));if(v=C.call(v),v==null)throw Error(de(151));for(var w=C=null,M=x,R=x=0,E=null,S=v.next();M!==null&&!S.done;R++,S=v.next()){M.index>R?(E=M,M=null):E=M.sibling;var L=f(h,M,S.value,y);if(L===null){M===null&&(M=E);break}n&&M&&L.alternate===null&&e(h,M),x=s(L,x,R),w===null?C=L:w.sibling=L,w=L,M=E}if(S.done)return t(h,M),It&&Js(h,R),C;if(M===null){for(;!S.done;R++,S=v.next())S=d(h,S.value,y),S!==null&&(x=s(S,x,R),w===null?C=S:w.sibling=S,w=S);return It&&Js(h,R),C}for(M=i(h,M);!S.done;R++,S=v.next())S=p(M,h,R,S.value,y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?R:S.key),x=s(S,x,R),w===null?C=S:w.sibling=S,w=S);return n&&M.forEach(function(O){return e(h,O)}),It&&Js(h,R),C}function m(h,x,v,y){if(typeof v=="object"&&v!==null&&v.type===ca&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Qu:e:{for(var C=v.key,w=x;w!==null;){if(w.key===C){if(C=v.type,C===ca){if(w.tag===7){t(h,w.sibling),x=r(w,v.props.children),x.return=h,h=x;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ls&&_0(C)===w.type){t(h,w.sibling),x=r(w,v.props),x.ref=gl(h,w,v),x.return=h,h=x;break e}t(h,w);break}else e(h,w);w=w.sibling}v.type===ca?(x=_o(v.props.children,h.mode,y,v.key),x.return=h,h=x):(y=cf(v.type,v.key,v.props,null,h.mode,y),y.ref=gl(h,x,v),y.return=h,h=y)}return o(h);case ua:e:{for(w=v.key;x!==null;){if(x.key===w)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){t(h,x.sibling),x=r(x,v.children||[]),x.return=h,h=x;break e}else{t(h,x);break}else e(h,x);x=x.sibling}x=hh(v,h.mode,y),x.return=h,h=x}return o(h);case ls:return w=v._init,m(h,x,w(v._payload),y)}if(Pl(v))return _(h,x,v,y);if(fl(v))return g(h,x,v,y);uc(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(t(h,x.sibling),x=r(x,v),x.return=h,h=x):(t(h,x),x=dh(v,h.mode,y),x.return=h,h=x),o(h)):t(h,x)}return m}var Wa=Vy(!0),Gy=Vy(!1),Bf=Hs(null),zf=null,va=null,wg=null;function Ag(){wg=va=zf=null}function Cg(n){var e=Bf.current;Nt(Bf),n._currentValue=e}function Np(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ba(n,e){zf=n,wg=va=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Kn=!0),n.firstContext=null)}function Gi(n){var e=n._currentValue;if(wg!==n)if(n={context:n,memoizedValue:e,next:null},va===null){if(zf===null)throw Error(de(308));va=n,zf.dependencies={lanes:0,firstContext:n}}else va=va.next=n;return e}var uo=null;function Rg(n){uo===null?uo=[n]:uo.push(n)}function Wy(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Rg(e)):(t.next=r.next,r.next=t),e.interleaved=t,Xr(n,i)}function Xr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var us=!1;function bg(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xy(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Hr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ts(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,gt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xr(n,t)}return r=i.interleaved,r===null?(e.next=e,Rg(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xr(n,t)}function rf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,pg(n,t)}}function v0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Hf(n,e,t,i){var r=n.updateQueue;us=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,g=a;switch(f=e,p=t,g.tag){case 1:if(_=g.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=Vt({},d,f);break e;case 2:us=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ro|=o,n.lanes=o,n.memoizedState=d}}function x0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var Gu={},xr=Hs(Gu),Su=Hs(Gu),Mu=Hs(Gu);function co(n){if(n===Gu)throw Error(de(174));return n}function Pg(n,e){switch(bt(Mu,e),bt(Su,n),bt(xr,Gu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=hp(e,n)}Nt(xr),bt(xr,e)}function Xa(){Nt(xr),Nt(Su),Nt(Mu)}function jy(n){co(Mu.current);var e=co(xr.current),t=hp(e,n.type);e!==t&&(bt(Su,n),bt(xr,t))}function Lg(n){Su.current===n&&(Nt(xr),Nt(Su))}var kt=Hs(0);function Vf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oh=[];function Dg(){for(var n=0;n<oh.length;n++)oh[n]._workInProgressVersionPrimary=null;oh.length=0}var sf=Zr.ReactCurrentDispatcher,ah=Zr.ReactCurrentBatchConfig,Co=0,Ht=null,rn=null,dn=null,Gf=!1,jl=!1,Eu=0,BT=0;function Mn(){throw Error(de(321))}function Ng(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!rr(n[t],e[t]))return!1;return!0}function Ig(n,e,t,i,r,s){if(Co=s,Ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sf.current=n===null||n.memoizedState===null?GT:WT,n=t(i,r),jl){s=0;do{if(jl=!1,Eu=0,25<=s)throw Error(de(301));s+=1,dn=rn=null,e.updateQueue=null,sf.current=XT,n=t(i,r)}while(jl)}if(sf.current=Wf,e=rn!==null&&rn.next!==null,Co=0,dn=rn=Ht=null,Gf=!1,e)throw Error(de(300));return n}function Ug(){var n=Eu!==0;return Eu=0,n}function or(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Ht.memoizedState=dn=n:dn=dn.next=n,dn}function Wi(){if(rn===null){var n=Ht.alternate;n=n!==null?n.memoizedState:null}else n=rn.next;var e=dn===null?Ht.memoizedState:dn.next;if(e!==null)dn=e,rn=n;else{if(n===null)throw Error(de(310));rn=n,n={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},dn===null?Ht.memoizedState=dn=n:dn=dn.next=n}return dn}function Tu(n,e){return typeof e=="function"?e(n):e}function lh(n){var e=Wi(),t=e.queue;if(t===null)throw Error(de(311));t.lastRenderedReducer=n;var i=rn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Co&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Ht.lanes|=c,Ro|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,rr(i,e.memoizedState)||(Kn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ht.lanes|=s,Ro|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function uh(n){var e=Wi(),t=e.queue;if(t===null)throw Error(de(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);rr(s,e.memoizedState)||(Kn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Yy(){}function $y(n,e){var t=Ht,i=Wi(),r=e(),s=!rr(i.memoizedState,r);if(s&&(i.memoizedState=r,Kn=!0),i=i.queue,Fg(Zy.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||dn!==null&&dn.memoizedState.tag&1){if(t.flags|=2048,wu(9,Ky.bind(null,t,i,r,e),void 0,null),pn===null)throw Error(de(349));Co&30||qy(t,e,r)}return r}function qy(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ht.updateQueue,e===null?(e={lastEffect:null,stores:null},Ht.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Ky(n,e,t,i){e.value=t,e.getSnapshot=i,Qy(e)&&Jy(n)}function Zy(n,e,t){return t(function(){Qy(e)&&Jy(n)})}function Qy(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!rr(n,t)}catch{return!0}}function Jy(n){var e=Xr(n,1);e!==null&&ir(e,n,1,-1)}function y0(n){var e=or();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tu,lastRenderedState:n},e.queue=n,n=n.dispatch=VT.bind(null,Ht,n),[e.memoizedState,n]}function wu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ht.updateQueue,e===null?(e={lastEffect:null,stores:null},Ht.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function eS(){return Wi().memoizedState}function of(n,e,t,i){var r=or();Ht.flags|=n,r.memoizedState=wu(1|e,t,void 0,i===void 0?null:i)}function Sd(n,e,t,i){var r=Wi();i=i===void 0?null:i;var s=void 0;if(rn!==null){var o=rn.memoizedState;if(s=o.destroy,i!==null&&Ng(i,o.deps)){r.memoizedState=wu(e,t,s,i);return}}Ht.flags|=n,r.memoizedState=wu(1|e,t,s,i)}function S0(n,e){return of(8390656,8,n,e)}function Fg(n,e){return Sd(2048,8,n,e)}function tS(n,e){return Sd(4,2,n,e)}function nS(n,e){return Sd(4,4,n,e)}function iS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function rS(n,e,t){return t=t!=null?t.concat([n]):null,Sd(4,4,iS.bind(null,e,n),t)}function Og(){}function sS(n,e){var t=Wi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ng(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function oS(n,e){var t=Wi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ng(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function aS(n,e,t){return Co&21?(rr(t,e)||(t=dy(),Ht.lanes|=t,Ro|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Kn=!0),n.memoizedState=t)}function zT(n,e){var t=Et;Et=t!==0&&4>t?t:4,n(!0);var i=ah.transition;ah.transition={};try{n(!1),e()}finally{Et=t,ah.transition=i}}function lS(){return Wi().memoizedState}function HT(n,e,t){var i=As(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},uS(n))cS(e,t);else if(t=Wy(n,e,t,i),t!==null){var r=Vn();ir(t,n,i,r),fS(t,e,i)}}function VT(n,e,t){var i=As(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(uS(n))cS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,rr(a,o)){var l=e.interleaved;l===null?(r.next=r,Rg(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Wy(n,e,r,i),t!==null&&(r=Vn(),ir(t,n,i,r),fS(t,e,i))}}function uS(n){var e=n.alternate;return n===Ht||e!==null&&e===Ht}function cS(n,e){jl=Gf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function fS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,pg(n,t)}}var Wf={readContext:Gi,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},GT={readContext:Gi,useCallback:function(n,e){return or().memoizedState=[n,e===void 0?null:e],n},useContext:Gi,useEffect:S0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,of(4194308,4,iS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return of(4194308,4,n,e)},useInsertionEffect:function(n,e){return of(4,2,n,e)},useMemo:function(n,e){var t=or();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=or();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=HT.bind(null,Ht,n),[i.memoizedState,n]},useRef:function(n){var e=or();return n={current:n},e.memoizedState=n},useState:y0,useDebugValue:Og,useDeferredValue:function(n){return or().memoizedState=n},useTransition:function(){var n=y0(!1),e=n[0];return n=zT.bind(null,n[1]),or().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ht,r=or();if(It){if(t===void 0)throw Error(de(407));t=t()}else{if(t=e(),pn===null)throw Error(de(349));Co&30||qy(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,S0(Zy.bind(null,i,s,n),[n]),i.flags|=2048,wu(9,Ky.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=or(),e=pn.identifierPrefix;if(It){var t=Or,i=Fr;t=(i&~(1<<32-nr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Eu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=BT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},WT={readContext:Gi,useCallback:sS,useContext:Gi,useEffect:Fg,useImperativeHandle:rS,useInsertionEffect:tS,useLayoutEffect:nS,useMemo:oS,useReducer:lh,useRef:eS,useState:function(){return lh(Tu)},useDebugValue:Og,useDeferredValue:function(n){var e=Wi();return aS(e,rn.memoizedState,n)},useTransition:function(){var n=lh(Tu)[0],e=Wi().memoizedState;return[n,e]},useMutableSource:Yy,useSyncExternalStore:$y,useId:lS,unstable_isNewReconciler:!1},XT={readContext:Gi,useCallback:sS,useContext:Gi,useEffect:Fg,useImperativeHandle:rS,useInsertionEffect:tS,useLayoutEffect:nS,useMemo:oS,useReducer:uh,useRef:eS,useState:function(){return uh(Tu)},useDebugValue:Og,useDeferredValue:function(n){var e=Wi();return rn===null?e.memoizedState=n:aS(e,rn.memoizedState,n)},useTransition:function(){var n=uh(Tu)[0],e=Wi().memoizedState;return[n,e]},useMutableSource:Yy,useSyncExternalStore:$y,useId:lS,unstable_isNewReconciler:!1};function Zi(n,e){if(n&&n.defaultProps){e=Vt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Ip(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Vt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Md={isMounted:function(n){return(n=n._reactInternals)?Fo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Vn(),r=As(n),s=Hr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ts(n,s,r),e!==null&&(ir(e,n,r,i),rf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Vn(),r=As(n),s=Hr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ts(n,s,r),e!==null&&(ir(e,n,r,i),rf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Vn(),i=As(n),r=Hr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ts(n,r,i),e!==null&&(ir(e,n,i,t),rf(e,n,i))}};function M0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!_u(t,i)||!_u(r,s):!0}function dS(n,e,t){var i=!1,r=Is,s=e.contextType;return typeof s=="object"&&s!==null?s=Gi(s):(r=Qn(e)?wo:Nn.current,i=e.contextTypes,s=(i=i!=null)?Va(n,r):Is),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Md,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function E0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Md.enqueueReplaceState(e,e.state,null)}function Up(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},bg(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gi(s):(s=Qn(e)?wo:Nn.current,r.context=Va(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ip(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Md.enqueueReplaceState(r,r.state,null),Hf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ja(n,e){try{var t="",i=e;do t+=xE(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function ch(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Fp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var jT=typeof WeakMap=="function"?WeakMap:Map;function hS(n,e,t){t=Hr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){jf||(jf=!0,jp=i),Fp(n,e)},t}function pS(n,e,t){t=Hr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Fp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Fp(n,e),typeof i!="function"&&(ws===null?ws=new Set([this]):ws.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function T0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new jT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=ow.bind(null,n,e,t),e.then(n,n))}function w0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function A0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Hr(-1,1),e.tag=2,Ts(t,e,1))),t.lanes|=1),n)}var YT=Zr.ReactCurrentOwner,Kn=!1;function kn(n,e,t,i){e.child=n===null?Gy(e,null,t,i):Wa(e,n.child,t,i)}function C0(n,e,t,i,r){t=t.render;var s=e.ref;return ba(e,r),i=Ig(n,e,t,i,s,r),t=Ug(),n!==null&&!Kn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,jr(n,e,r)):(It&&t&&Mg(e),e.flags|=1,kn(n,e,i,r),e.child)}function R0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Xg(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,mS(n,e,s,i,r)):(n=cf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:_u,t(o,i)&&n.ref===e.ref)return jr(n,e,r)}return e.flags|=1,n=Cs(s,i),n.ref=e.ref,n.return=e,e.child=n}function mS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(_u(s,i)&&n.ref===e.ref)if(Kn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Kn=!0);else return e.lanes=n.lanes,jr(n,e,r)}return Op(n,e,t,i,r)}function gS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(ya,di),di|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,bt(ya,di),di|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,bt(ya,di),di|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,bt(ya,di),di|=i;return kn(n,e,r,t),e.child}function _S(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Op(n,e,t,i,r){var s=Qn(t)?wo:Nn.current;return s=Va(e,s),ba(e,r),t=Ig(n,e,t,i,s,r),i=Ug(),n!==null&&!Kn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,jr(n,e,r)):(It&&i&&Mg(e),e.flags|=1,kn(n,e,t,r),e.child)}function b0(n,e,t,i,r){if(Qn(t)){var s=!0;Ff(e)}else s=!1;if(ba(e,r),e.stateNode===null)af(n,e),dS(e,t,i),Up(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Gi(u):(u=Qn(t)?wo:Nn.current,u=Va(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&E0(e,o,i,u),us=!1;var f=e.memoizedState;o.state=f,Hf(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Zn.current||us?(typeof c=="function"&&(Ip(e,t,c,i),l=e.memoizedState),(a=us||M0(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Xy(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Zi(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Gi(l):(l=Qn(t)?wo:Nn.current,l=Va(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&E0(e,o,i,l),us=!1,f=e.memoizedState,o.state=f,Hf(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||Zn.current||us?(typeof p=="function"&&(Ip(e,t,p,i),_=e.memoizedState),(u=us||M0(e,t,u,i,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return kp(n,e,t,i,s,r)}function kp(n,e,t,i,r,s){_S(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&p0(e,t,!1),jr(n,e,s);i=e.stateNode,YT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Wa(e,n.child,null,s),e.child=Wa(e,null,a,s)):kn(n,e,a,s),e.memoizedState=i.state,r&&p0(e,t,!0),e.child}function vS(n){var e=n.stateNode;e.pendingContext?h0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&h0(n,e.context,!1),Pg(n,e.containerInfo)}function P0(n,e,t,i,r){return Ga(),Tg(r),e.flags|=256,kn(n,e,t,i),e.child}var Bp={dehydrated:null,treeContext:null,retryLane:0};function zp(n){return{baseLanes:n,cachePool:null,transitions:null}}function xS(n,e,t){var i=e.pendingProps,r=kt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),bt(kt,r&1),n===null)return Dp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wd(o,i,0,null),n=_o(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=zp(t),e.memoizedState=Bp,n):kg(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return $T(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Cs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Cs(a,s):(s=_o(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?zp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Bp,i}return s=n.child,n=s.sibling,i=Cs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function kg(n,e){return e=wd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function cc(n,e,t,i){return i!==null&&Tg(i),Wa(e,n.child,null,t),n=kg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function $T(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=ch(Error(de(422))),cc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=wd({mode:"visible",children:i.children},r,0,null),s=_o(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Wa(e,n.child,null,o),e.child.memoizedState=zp(o),e.memoizedState=Bp,s);if(!(e.mode&1))return cc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(de(419)),i=ch(s,i,void 0),cc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Kn||a){if(i=pn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xr(n,r),ir(i,n,r,-1))}return Wg(),i=ch(Error(de(421))),cc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=aw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,vi=Es(r.nextSibling),Mi=e,It=!0,Ji=null,n!==null&&(Di[Ni++]=Fr,Di[Ni++]=Or,Di[Ni++]=Ao,Fr=n.id,Or=n.overflow,Ao=e),e=kg(e,i.children),e.flags|=4096,e)}function L0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Np(n.return,e,t)}function fh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function yS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(kn(n,e,i.children,t),i=kt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&L0(n,t,e);else if(n.tag===19)L0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(bt(kt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Vf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),fh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Vf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}fh(e,!0,t,null,s);break;case"together":fh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function af(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function jr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ro|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(de(153));if(e.child!==null){for(n=e.child,t=Cs(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Cs(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function qT(n,e,t){switch(e.tag){case 3:vS(e),Ga();break;case 5:jy(e);break;case 1:Qn(e.type)&&Ff(e);break;case 4:Pg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;bt(Bf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(bt(kt,kt.current&1),e.flags|=128,null):t&e.child.childLanes?xS(n,e,t):(bt(kt,kt.current&1),n=jr(n,e,t),n!==null?n.sibling:null);bt(kt,kt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return yS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),bt(kt,kt.current),i)break;return null;case 22:case 23:return e.lanes=0,gS(n,e,t)}return jr(n,e,t)}var SS,Hp,MS,ES;SS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Hp=function(){};MS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,co(xr.current);var s=null;switch(t){case"input":r=up(n,r),i=up(n,i),s=[];break;case"select":r=Vt({},r,{value:void 0}),i=Vt({},i,{value:void 0}),s=[];break;case"textarea":r=dp(n,r),i=dp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=If)}pp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(cu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(cu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Lt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ES=function(n,e,t,i){t!==i&&(e.flags|=4)};function _l(n,e){if(!It)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function En(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function KT(n,e,t){var i=e.pendingProps;switch(Eg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(e),null;case 1:return Qn(e.type)&&Uf(),En(e),null;case 3:return i=e.stateNode,Xa(),Nt(Zn),Nt(Nn),Dg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(lc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ji!==null&&(qp(Ji),Ji=null))),Hp(n,e),En(e),null;case 5:Lg(e);var r=co(Mu.current);if(t=e.type,n!==null&&e.stateNode!=null)MS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return En(e),null}if(n=co(xr.current),lc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[fr]=e,i[yu]=s,n=(e.mode&1)!==0,t){case"dialog":Lt("cancel",i),Lt("close",i);break;case"iframe":case"object":case"embed":Lt("load",i);break;case"video":case"audio":for(r=0;r<Dl.length;r++)Lt(Dl[r],i);break;case"source":Lt("error",i);break;case"img":case"image":case"link":Lt("error",i),Lt("load",i);break;case"details":Lt("toggle",i);break;case"input":z_(i,s),Lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Lt("invalid",i);break;case"textarea":V_(i,s),Lt("invalid",i)}pp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ac(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ac(i.textContent,a,n),r=["children",""+a]):cu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Lt("scroll",i)}switch(t){case"input":Ju(i),H_(i,s,!0);break;case"textarea":Ju(i),G_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=If)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Zx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[fr]=e,n[yu]=i,SS(n,e,!1,!1),e.stateNode=n;e:{switch(o=mp(t,i),t){case"dialog":Lt("cancel",n),Lt("close",n),r=i;break;case"iframe":case"object":case"embed":Lt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Dl.length;r++)Lt(Dl[r],n);r=i;break;case"source":Lt("error",n),r=i;break;case"img":case"image":case"link":Lt("error",n),Lt("load",n),r=i;break;case"details":Lt("toggle",n),r=i;break;case"input":z_(n,i),r=up(n,i),Lt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Vt({},i,{value:void 0}),Lt("invalid",n);break;case"textarea":V_(n,i),r=dp(n,i),Lt("invalid",n);break;default:r=i}pp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ey(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qx(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&fu(n,l):typeof l=="number"&&fu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(cu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Lt("scroll",n):l!=null&&lg(n,s,l,o))}switch(t){case"input":Ju(n),H_(n,i,!1);break;case"textarea":Ju(n),G_(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ns(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?wa(n,!!i.multiple,s,!1):i.defaultValue!=null&&wa(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=If)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return En(e),null;case 6:if(n&&e.stateNode!=null)ES(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(t=co(Mu.current),co(xr.current),lc(e)){if(i=e.stateNode,t=e.memoizedProps,i[fr]=e,(s=i.nodeValue!==t)&&(n=Mi,n!==null))switch(n.tag){case 3:ac(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ac(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[fr]=e,e.stateNode=i}return En(e),null;case 13:if(Nt(kt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(It&&vi!==null&&e.mode&1&&!(e.flags&128))Hy(),Ga(),e.flags|=98560,s=!1;else if(s=lc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(de(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(de(317));s[fr]=e}else Ga(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;En(e),s=!1}else Ji!==null&&(qp(Ji),Ji=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||kt.current&1?on===0&&(on=3):Wg())),e.updateQueue!==null&&(e.flags|=4),En(e),null);case 4:return Xa(),Hp(n,e),n===null&&vu(e.stateNode.containerInfo),En(e),null;case 10:return Cg(e.type._context),En(e),null;case 17:return Qn(e.type)&&Uf(),En(e),null;case 19:if(Nt(kt),s=e.memoizedState,s===null)return En(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)_l(s,!1);else{if(on!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Vf(n),o!==null){for(e.flags|=128,_l(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return bt(kt,kt.current&1|2),e.child}n=n.sibling}s.tail!==null&&jt()>Ya&&(e.flags|=128,i=!0,_l(s,!1),e.lanes=4194304)}else{if(!i)if(n=Vf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),_l(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!It)return En(e),null}else 2*jt()-s.renderingStartTime>Ya&&t!==1073741824&&(e.flags|=128,i=!0,_l(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=jt(),e.sibling=null,t=kt.current,bt(kt,i?t&1|2:t&1),e):(En(e),null);case 22:case 23:return Gg(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?di&1073741824&&(En(e),e.subtreeFlags&6&&(e.flags|=8192)):En(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function ZT(n,e){switch(Eg(e),e.tag){case 1:return Qn(e.type)&&Uf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Xa(),Nt(Zn),Nt(Nn),Dg(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Lg(e),null;case 13:if(Nt(kt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(de(340));Ga()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Nt(kt),null;case 4:return Xa(),null;case 10:return Cg(e.type._context),null;case 22:case 23:return Gg(),null;case 24:return null;default:return null}}var fc=!1,Rn=!1,QT=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function xa(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Gt(n,e,i)}else t.current=null}function Vp(n,e,t){try{t()}catch(i){Gt(n,e,i)}}var D0=!1;function JT(n,e){if(wp=Lf,n=Ry(),Sg(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ap={focusedElem:n,selectionRange:t},Lf=!1,Pe=e;Pe!==null;)if(e=Pe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Pe=n;else for(;Pe!==null;){e=Pe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,m=_.memoizedState,h=e.stateNode,x=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:Zi(e.type,g),m);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(y){Gt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}return _=D0,D0=!1,_}function Yl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Vp(e,t,s)}r=r.next}while(r!==i)}}function Ed(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Gp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function TS(n){var e=n.alternate;e!==null&&(n.alternate=null,TS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[fr],delete e[yu],delete e[bp],delete e[UT],delete e[FT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function wS(n){return n.tag===5||n.tag===3||n.tag===4}function N0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||wS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Wp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=If));else if(i!==4&&(n=n.child,n!==null))for(Wp(n,e,t),n=n.sibling;n!==null;)Wp(n,e,t),n=n.sibling}function Xp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Xp(n,e,t),n=n.sibling;n!==null;)Xp(n,e,t),n=n.sibling}var _n=null,Qi=!1;function es(n,e,t){for(t=t.child;t!==null;)AS(n,e,t),t=t.sibling}function AS(n,e,t){if(vr&&typeof vr.onCommitFiberUnmount=="function")try{vr.onCommitFiberUnmount(md,t)}catch{}switch(t.tag){case 5:Rn||xa(t,e);case 6:var i=_n,r=Qi;_n=null,es(n,e,t),_n=i,Qi=r,_n!==null&&(Qi?(n=_n,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):_n.removeChild(t.stateNode));break;case 18:_n!==null&&(Qi?(n=_n,t=t.stateNode,n.nodeType===8?rh(n.parentNode,t):n.nodeType===1&&rh(n,t),mu(n)):rh(_n,t.stateNode));break;case 4:i=_n,r=Qi,_n=t.stateNode.containerInfo,Qi=!0,es(n,e,t),_n=i,Qi=r;break;case 0:case 11:case 14:case 15:if(!Rn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vp(t,e,o),r=r.next}while(r!==i)}es(n,e,t);break;case 1:if(!Rn&&(xa(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Gt(t,e,a)}es(n,e,t);break;case 21:es(n,e,t);break;case 22:t.mode&1?(Rn=(i=Rn)||t.memoizedState!==null,es(n,e,t),Rn=i):es(n,e,t);break;default:es(n,e,t)}}function I0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new QT),e.forEach(function(i){var r=lw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ji(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:_n=a.stateNode,Qi=!1;break e;case 3:_n=a.stateNode.containerInfo,Qi=!0;break e;case 4:_n=a.stateNode.containerInfo,Qi=!0;break e}a=a.return}if(_n===null)throw Error(de(160));AS(s,o,r),_n=null,Qi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Gt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)CS(e,n),e=e.sibling}function CS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ji(e,n),sr(n),i&4){try{Yl(3,n,n.return),Ed(3,n)}catch(g){Gt(n,n.return,g)}try{Yl(5,n,n.return)}catch(g){Gt(n,n.return,g)}}break;case 1:ji(e,n),sr(n),i&512&&t!==null&&xa(t,t.return);break;case 5:if(ji(e,n),sr(n),i&512&&t!==null&&xa(t,t.return),n.flags&32){var r=n.stateNode;try{fu(r,"")}catch(g){Gt(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&qx(r,s),mp(a,o);var u=mp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?ey(r,d):c==="dangerouslySetInnerHTML"?Qx(r,d):c==="children"?fu(r,d):lg(r,c,d,u)}switch(a){case"input":cp(r,s);break;case"textarea":Kx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?wa(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?wa(r,!!s.multiple,s.defaultValue,!0):wa(r,!!s.multiple,s.multiple?[]:"",!1))}r[yu]=s}catch(g){Gt(n,n.return,g)}}break;case 6:if(ji(e,n),sr(n),i&4){if(n.stateNode===null)throw Error(de(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){Gt(n,n.return,g)}}break;case 3:if(ji(e,n),sr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{mu(e.containerInfo)}catch(g){Gt(n,n.return,g)}break;case 4:ji(e,n),sr(n);break;case 13:ji(e,n),sr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Hg=jt())),i&4&&I0(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Rn=(u=Rn)||c,ji(e,n),Rn=u):ji(e,n),sr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Pe=n,c=n.child;c!==null;){for(d=Pe=c;Pe!==null;){switch(f=Pe,p=f.child,f.tag){case 0:case 11:case 14:case 15:Yl(4,f,f.return);break;case 1:xa(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){Gt(i,t,g)}}break;case 5:xa(f,f.return);break;case 22:if(f.memoizedState!==null){F0(d);continue}}p!==null?(p.return=f,Pe=p):F0(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Jx("display",o))}catch(g){Gt(n,n.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){Gt(n,n.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ji(e,n),sr(n),i&4&&I0(n);break;case 21:break;default:ji(e,n),sr(n)}}function sr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(wS(t)){var i=t;break e}t=t.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(fu(r,""),i.flags&=-33);var s=N0(n);Xp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=N0(n);Wp(n,a,o);break;default:throw Error(de(161))}}catch(l){Gt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function ew(n,e,t){Pe=n,RS(n)}function RS(n,e,t){for(var i=(n.mode&1)!==0;Pe!==null;){var r=Pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||fc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Rn;a=fc;var u=Rn;if(fc=o,(Rn=l)&&!u)for(Pe=r;Pe!==null;)o=Pe,l=o.child,o.tag===22&&o.memoizedState!==null?O0(r):l!==null?(l.return=o,Pe=l):O0(r);for(;s!==null;)Pe=s,RS(s),s=s.sibling;Pe=r,fc=a,Rn=u}U0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Pe=s):U0(n)}}function U0(n){for(;Pe!==null;){var e=Pe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Rn||Ed(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Rn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Zi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&x0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}x0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&mu(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}Rn||e.flags&512&&Gp(e)}catch(f){Gt(e,e.return,f)}}if(e===n){Pe=null;break}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}}function F0(n){for(;Pe!==null;){var e=Pe;if(e===n){Pe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Pe=t;break}Pe=e.return}}function O0(n){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Ed(4,e)}catch(l){Gt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Gt(e,r,l)}}var s=e.return;try{Gp(e)}catch(l){Gt(e,s,l)}break;case 5:var o=e.return;try{Gp(e)}catch(l){Gt(e,o,l)}}}catch(l){Gt(e,e.return,l)}if(e===n){Pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Pe=a;break}Pe=e.return}}var tw=Math.ceil,Xf=Zr.ReactCurrentDispatcher,Bg=Zr.ReactCurrentOwner,Hi=Zr.ReactCurrentBatchConfig,gt=0,pn=null,Qt=null,xn=0,di=0,ya=Hs(0),on=0,Au=null,Ro=0,Td=0,zg=0,$l=null,Yn=null,Hg=0,Ya=1/0,Pr=null,jf=!1,jp=null,ws=null,dc=!1,ps=null,Yf=0,ql=0,Yp=null,lf=-1,uf=0;function Vn(){return gt&6?jt():lf!==-1?lf:lf=jt()}function As(n){return n.mode&1?gt&2&&xn!==0?xn&-xn:kT.transition!==null?(uf===0&&(uf=dy()),uf):(n=Et,n!==0||(n=window.event,n=n===void 0?16:xy(n.type)),n):1}function ir(n,e,t,i){if(50<ql)throw ql=0,Yp=null,Error(de(185));zu(n,t,i),(!(gt&2)||n!==pn)&&(n===pn&&(!(gt&2)&&(Td|=t),on===4&&fs(n,xn)),Jn(n,i),t===1&&gt===0&&!(e.mode&1)&&(Ya=jt()+500,yd&&Vs()))}function Jn(n,e){var t=n.callbackNode;kE(n,e);var i=Pf(n,n===pn?xn:0);if(i===0)t!==null&&j_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&j_(t),e===1)n.tag===0?OT(k0.bind(null,n)):ky(k0.bind(null,n)),NT(function(){!(gt&6)&&Vs()}),t=null;else{switch(hy(i)){case 1:t=hg;break;case 4:t=cy;break;case 16:t=bf;break;case 536870912:t=fy;break;default:t=bf}t=FS(t,bS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function bS(n,e){if(lf=-1,uf=0,gt&6)throw Error(de(327));var t=n.callbackNode;if(Pa()&&n.callbackNode!==t)return null;var i=Pf(n,n===pn?xn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=$f(n,i);else{e=i;var r=gt;gt|=2;var s=LS();(pn!==n||xn!==e)&&(Pr=null,Ya=jt()+500,go(n,e));do try{rw();break}catch(a){PS(n,a)}while(!0);Ag(),Xf.current=s,gt=r,Qt!==null?e=0:(pn=null,xn=0,e=on)}if(e!==0){if(e===2&&(r=yp(n),r!==0&&(i=r,e=$p(n,r))),e===1)throw t=Au,go(n,0),fs(n,i),Jn(n,jt()),t;if(e===6)fs(n,i);else{if(r=n.current.alternate,!(i&30)&&!nw(r)&&(e=$f(n,i),e===2&&(s=yp(n),s!==0&&(i=s,e=$p(n,s))),e===1))throw t=Au,go(n,0),fs(n,i),Jn(n,jt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:eo(n,Yn,Pr);break;case 3:if(fs(n,i),(i&130023424)===i&&(e=Hg+500-jt(),10<e)){if(Pf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Vn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Rp(eo.bind(null,n,Yn,Pr),e);break}eo(n,Yn,Pr);break;case 4:if(fs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-nr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=jt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*tw(i/1960))-i,10<i){n.timeoutHandle=Rp(eo.bind(null,n,Yn,Pr),i);break}eo(n,Yn,Pr);break;case 5:eo(n,Yn,Pr);break;default:throw Error(de(329))}}}return Jn(n,jt()),n.callbackNode===t?bS.bind(null,n):null}function $p(n,e){var t=$l;return n.current.memoizedState.isDehydrated&&(go(n,e).flags|=256),n=$f(n,e),n!==2&&(e=Yn,Yn=t,e!==null&&qp(e)),n}function qp(n){Yn===null?Yn=n:Yn.push.apply(Yn,n)}function nw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!rr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fs(n,e){for(e&=~zg,e&=~Td,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-nr(e),i=1<<t;n[t]=-1,e&=~i}}function k0(n){if(gt&6)throw Error(de(327));Pa();var e=Pf(n,0);if(!(e&1))return Jn(n,jt()),null;var t=$f(n,e);if(n.tag!==0&&t===2){var i=yp(n);i!==0&&(e=i,t=$p(n,i))}if(t===1)throw t=Au,go(n,0),fs(n,e),Jn(n,jt()),t;if(t===6)throw Error(de(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,eo(n,Yn,Pr),Jn(n,jt()),null}function Vg(n,e){var t=gt;gt|=1;try{return n(e)}finally{gt=t,gt===0&&(Ya=jt()+500,yd&&Vs())}}function bo(n){ps!==null&&ps.tag===0&&!(gt&6)&&Pa();var e=gt;gt|=1;var t=Hi.transition,i=Et;try{if(Hi.transition=null,Et=1,n)return n()}finally{Et=i,Hi.transition=t,gt=e,!(gt&6)&&Vs()}}function Gg(){di=ya.current,Nt(ya)}function go(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,DT(t)),Qt!==null)for(t=Qt.return;t!==null;){var i=t;switch(Eg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Uf();break;case 3:Xa(),Nt(Zn),Nt(Nn),Dg();break;case 5:Lg(i);break;case 4:Xa();break;case 13:Nt(kt);break;case 19:Nt(kt);break;case 10:Cg(i.type._context);break;case 22:case 23:Gg()}t=t.return}if(pn=n,Qt=n=Cs(n.current,null),xn=di=e,on=0,Au=null,zg=Td=Ro=0,Yn=$l=null,uo!==null){for(e=0;e<uo.length;e++)if(t=uo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}uo=null}return n}function PS(n,e){do{var t=Qt;try{if(Ag(),sf.current=Wf,Gf){for(var i=Ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Gf=!1}if(Co=0,dn=rn=Ht=null,jl=!1,Eu=0,Bg.current=null,t===null||t.return===null){on=1,Au=e,Qt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=xn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=w0(o);if(p!==null){p.flags&=-257,A0(p,o,a,s,e),p.mode&1&&T0(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){T0(s,u,e),Wg();break e}l=Error(de(426))}}else if(It&&a.mode&1){var m=w0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),A0(m,o,a,s,e),Tg(ja(l,a));break e}}s=l=ja(l,a),on!==4&&(on=2),$l===null?$l=[s]:$l.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=hS(s,l,e);v0(s,h);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ws===null||!ws.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=pS(s,a,e);v0(s,y);break e}}s=s.return}while(s!==null)}NS(t)}catch(C){e=C,Qt===t&&t!==null&&(Qt=t=t.return);continue}break}while(!0)}function LS(){var n=Xf.current;return Xf.current=Wf,n===null?Wf:n}function Wg(){(on===0||on===3||on===2)&&(on=4),pn===null||!(Ro&268435455)&&!(Td&268435455)||fs(pn,xn)}function $f(n,e){var t=gt;gt|=2;var i=LS();(pn!==n||xn!==e)&&(Pr=null,go(n,e));do try{iw();break}catch(r){PS(n,r)}while(!0);if(Ag(),gt=t,Xf.current=i,Qt!==null)throw Error(de(261));return pn=null,xn=0,on}function iw(){for(;Qt!==null;)DS(Qt)}function rw(){for(;Qt!==null&&!bE();)DS(Qt)}function DS(n){var e=US(n.alternate,n,di);n.memoizedProps=n.pendingProps,e===null?NS(n):Qt=e,Bg.current=null}function NS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=ZT(t,e),t!==null){t.flags&=32767,Qt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{on=6,Qt=null;return}}else if(t=KT(t,e,di),t!==null){Qt=t;return}if(e=e.sibling,e!==null){Qt=e;return}Qt=e=n}while(e!==null);on===0&&(on=5)}function eo(n,e,t){var i=Et,r=Hi.transition;try{Hi.transition=null,Et=1,sw(n,e,t,i)}finally{Hi.transition=r,Et=i}return null}function sw(n,e,t,i){do Pa();while(ps!==null);if(gt&6)throw Error(de(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(de(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(BE(n,s),n===pn&&(Qt=pn=null,xn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||dc||(dc=!0,FS(bf,function(){return Pa(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Hi.transition,Hi.transition=null;var o=Et;Et=1;var a=gt;gt|=4,Bg.current=null,JT(n,t),CS(t,n),wT(Ap),Lf=!!wp,Ap=wp=null,n.current=t,ew(t),PE(),gt=a,Et=o,Hi.transition=s}else n.current=t;if(dc&&(dc=!1,ps=n,Yf=r),s=n.pendingLanes,s===0&&(ws=null),NE(t.stateNode),Jn(n,jt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(jf)throw jf=!1,n=jp,jp=null,n;return Yf&1&&n.tag!==0&&Pa(),s=n.pendingLanes,s&1?n===Yp?ql++:(ql=0,Yp=n):ql=0,Vs(),null}function Pa(){if(ps!==null){var n=hy(Yf),e=Hi.transition,t=Et;try{if(Hi.transition=null,Et=16>n?16:n,ps===null)var i=!1;else{if(n=ps,ps=null,Yf=0,gt&6)throw Error(de(331));var r=gt;for(gt|=4,Pe=n.current;Pe!==null;){var s=Pe,o=s.child;if(Pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Pe=u;Pe!==null;){var c=Pe;switch(c.tag){case 0:case 11:case 15:Yl(8,c,s)}var d=c.child;if(d!==null)d.return=c,Pe=d;else for(;Pe!==null;){c=Pe;var f=c.sibling,p=c.return;if(TS(c),c===u){Pe=null;break}if(f!==null){f.return=p,Pe=f;break}Pe=p}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Pe=o;else e:for(;Pe!==null;){if(s=Pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Yl(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Pe=h;break e}Pe=s.return}}var x=n.current;for(Pe=x;Pe!==null;){o=Pe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Pe=v;else e:for(o=x;Pe!==null;){if(a=Pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ed(9,a)}}catch(C){Gt(a,a.return,C)}if(a===o){Pe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Pe=y;break e}Pe=a.return}}if(gt=r,Vs(),vr&&typeof vr.onPostCommitFiberRoot=="function")try{vr.onPostCommitFiberRoot(md,n)}catch{}i=!0}return i}finally{Et=t,Hi.transition=e}}return!1}function B0(n,e,t){e=ja(t,e),e=hS(n,e,1),n=Ts(n,e,1),e=Vn(),n!==null&&(zu(n,1,e),Jn(n,e))}function Gt(n,e,t){if(n.tag===3)B0(n,n,t);else for(;e!==null;){if(e.tag===3){B0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ws===null||!ws.has(i))){n=ja(t,n),n=pS(e,n,1),e=Ts(e,n,1),n=Vn(),e!==null&&(zu(e,1,n),Jn(e,n));break}}e=e.return}}function ow(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Vn(),n.pingedLanes|=n.suspendedLanes&t,pn===n&&(xn&t)===t&&(on===4||on===3&&(xn&130023424)===xn&&500>jt()-Hg?go(n,0):zg|=t),Jn(n,e)}function IS(n,e){e===0&&(n.mode&1?(e=nc,nc<<=1,!(nc&130023424)&&(nc=4194304)):e=1);var t=Vn();n=Xr(n,e),n!==null&&(zu(n,e,t),Jn(n,t))}function aw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),IS(n,t)}function lw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),IS(n,t)}var US;US=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Zn.current)Kn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Kn=!1,qT(n,e,t);Kn=!!(n.flags&131072)}else Kn=!1,It&&e.flags&1048576&&By(e,kf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;af(n,e),n=e.pendingProps;var r=Va(e,Nn.current);ba(e,t),r=Ig(null,e,i,n,r,t);var s=Ug();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qn(i)?(s=!0,Ff(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bg(e),r.updater=Md,e.stateNode=r,r._reactInternals=e,Up(e,i,n,t),e=kp(null,e,i,!0,s,t)):(e.tag=0,It&&s&&Mg(e),kn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(af(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=cw(i),n=Zi(i,n),r){case 0:e=Op(null,e,i,n,t);break e;case 1:e=b0(null,e,i,n,t);break e;case 11:e=C0(null,e,i,n,t);break e;case 14:e=R0(null,e,i,Zi(i.type,n),t);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),Op(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),b0(n,e,i,r,t);case 3:e:{if(vS(e),n===null)throw Error(de(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Xy(n,e),Hf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ja(Error(de(423)),e),e=P0(n,e,i,t,r);break e}else if(i!==r){r=ja(Error(de(424)),e),e=P0(n,e,i,t,r);break e}else for(vi=Es(e.stateNode.containerInfo.firstChild),Mi=e,It=!0,Ji=null,t=Gy(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ga(),i===r){e=jr(n,e,t);break e}kn(n,e,i,t)}e=e.child}return e;case 5:return jy(e),n===null&&Dp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Cp(i,r)?o=null:s!==null&&Cp(i,s)&&(e.flags|=32),_S(n,e),kn(n,e,o,t),e.child;case 6:return n===null&&Dp(e),null;case 13:return xS(n,e,t);case 4:return Pg(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Wa(e,null,i,t):kn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),C0(n,e,i,r,t);case 7:return kn(n,e,e.pendingProps,t),e.child;case 8:return kn(n,e,e.pendingProps.children,t),e.child;case 12:return kn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,bt(Bf,i._currentValue),i._currentValue=o,s!==null)if(rr(s.value,o)){if(s.children===r.children&&!Zn.current){e=jr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Hr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Np(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(de(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Np(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ba(e,t),r=Gi(r),i=i(r),e.flags|=1,kn(n,e,i,t),e.child;case 14:return i=e.type,r=Zi(i,e.pendingProps),r=Zi(i.type,r),R0(n,e,i,r,t);case 15:return mS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),af(n,e),e.tag=1,Qn(i)?(n=!0,Ff(e)):n=!1,ba(e,t),dS(e,i,r),Up(e,i,r,t),kp(null,e,i,!0,n,t);case 19:return yS(n,e,t);case 22:return gS(n,e,t)}throw Error(de(156,e.tag))};function FS(n,e){return uy(n,e)}function uw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oi(n,e,t,i){return new uw(n,e,t,i)}function Xg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function cw(n){if(typeof n=="function")return Xg(n)?1:0;if(n!=null){if(n=n.$$typeof,n===cg)return 11;if(n===fg)return 14}return 2}function Cs(n,e){var t=n.alternate;return t===null?(t=Oi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function cf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Xg(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ca:return _o(t.children,r,s,e);case ug:o=8,r|=8;break;case sp:return n=Oi(12,t,e,r|2),n.elementType=sp,n.lanes=s,n;case op:return n=Oi(13,t,e,r),n.elementType=op,n.lanes=s,n;case ap:return n=Oi(19,t,e,r),n.elementType=ap,n.lanes=s,n;case jx:return wd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Wx:o=10;break e;case Xx:o=9;break e;case cg:o=11;break e;case fg:o=14;break e;case ls:o=16,i=null;break e}throw Error(de(130,n==null?n:typeof n,""))}return e=Oi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function _o(n,e,t,i){return n=Oi(7,n,i,e),n.lanes=t,n}function wd(n,e,t,i){return n=Oi(22,n,i,e),n.elementType=jx,n.lanes=t,n.stateNode={isHidden:!1},n}function dh(n,e,t){return n=Oi(6,n,null,e),n.lanes=t,n}function hh(n,e,t){return e=Oi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function fw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yd(0),this.expirationTimes=Yd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function jg(n,e,t,i,r,s,o,a,l){return n=new fw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Oi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},bg(s),n}function dw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ua,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function OS(n){if(!n)return Is;n=n._reactInternals;e:{if(Fo(n)!==n||n.tag!==1)throw Error(de(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(n.tag===1){var t=n.type;if(Qn(t))return Oy(n,t,e)}return e}function kS(n,e,t,i,r,s,o,a,l){return n=jg(t,i,!0,n,r,s,o,a,l),n.context=OS(null),t=n.current,i=Vn(),r=As(t),s=Hr(i,r),s.callback=e??null,Ts(t,s,r),n.current.lanes=r,zu(n,r,i),Jn(n,i),n}function Ad(n,e,t,i){var r=e.current,s=Vn(),o=As(r);return t=OS(t),e.context===null?e.context=t:e.pendingContext=t,e=Hr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ts(r,e,o),n!==null&&(ir(n,r,o,s),rf(n,r,o)),o}function qf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function z0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Yg(n,e){z0(n,e),(n=n.alternate)&&z0(n,e)}function hw(){return null}var BS=typeof reportError=="function"?reportError:function(n){console.error(n)};function $g(n){this._internalRoot=n}Cd.prototype.render=$g.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(de(409));Ad(n,e,null,null)};Cd.prototype.unmount=$g.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;bo(function(){Ad(null,n,null,null)}),e[Wr]=null}};function Cd(n){this._internalRoot=n}Cd.prototype.unstable_scheduleHydration=function(n){if(n){var e=gy();n={blockedOn:null,target:n,priority:e};for(var t=0;t<cs.length&&e!==0&&e<cs[t].priority;t++);cs.splice(t,0,n),t===0&&vy(n)}};function qg(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Rd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function H0(){}function pw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=qf(o);s.call(u)}}var o=kS(e,i,n,0,null,!1,!1,"",H0);return n._reactRootContainer=o,n[Wr]=o.current,vu(n.nodeType===8?n.parentNode:n),bo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=qf(l);a.call(u)}}var l=jg(n,0,!1,null,null,!1,!1,"",H0);return n._reactRootContainer=l,n[Wr]=l.current,vu(n.nodeType===8?n.parentNode:n),bo(function(){Ad(e,l,t,i)}),l}function bd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=qf(o);a.call(l)}}Ad(e,o,n,r)}else o=pw(t,e,n,r,i);return qf(o)}py=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ll(e.pendingLanes);t!==0&&(pg(e,t|1),Jn(e,jt()),!(gt&6)&&(Ya=jt()+500,Vs()))}break;case 13:bo(function(){var i=Xr(n,1);if(i!==null){var r=Vn();ir(i,n,1,r)}}),Yg(n,1)}};mg=function(n){if(n.tag===13){var e=Xr(n,134217728);if(e!==null){var t=Vn();ir(e,n,134217728,t)}Yg(n,134217728)}};my=function(n){if(n.tag===13){var e=As(n),t=Xr(n,e);if(t!==null){var i=Vn();ir(t,n,e,i)}Yg(n,e)}};gy=function(){return Et};_y=function(n,e){var t=Et;try{return Et=n,e()}finally{Et=t}};_p=function(n,e,t){switch(e){case"input":if(cp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=xd(i);if(!r)throw Error(de(90));$x(i),cp(i,r)}}}break;case"textarea":Kx(n,t);break;case"select":e=t.value,e!=null&&wa(n,!!t.multiple,e,!1)}};iy=Vg;ry=bo;var mw={usingClientEntryPoint:!1,Events:[Vu,pa,xd,ty,ny,Vg]},vl={findFiberByHostInstance:lo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gw={bundleType:vl.bundleType,version:vl.version,rendererPackageName:vl.rendererPackageName,rendererConfig:vl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ay(n),n===null?null:n.stateNode},findFiberByHostInstance:vl.findFiberByHostInstance||hw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{md=hc.inject(gw),vr=hc}catch{}}Ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mw;Ci.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qg(e))throw Error(de(200));return dw(n,e,null,t)};Ci.createRoot=function(n,e){if(!qg(n))throw Error(de(299));var t=!1,i="",r=BS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=jg(n,1,!1,null,null,t,!1,i,r),n[Wr]=e.current,vu(n.nodeType===8?n.parentNode:n),new $g(e)};Ci.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(de(188)):(n=Object.keys(n).join(","),Error(de(268,n)));return n=ay(e),n=n===null?null:n.stateNode,n};Ci.flushSync=function(n){return bo(n)};Ci.hydrate=function(n,e,t){if(!Rd(e))throw Error(de(200));return bd(null,n,e,!0,t)};Ci.hydrateRoot=function(n,e,t){if(!qg(n))throw Error(de(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=BS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=kS(e,null,n,1,t??null,r,!1,s,o),n[Wr]=e.current,vu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Cd(e)};Ci.render=function(n,e,t){if(!Rd(e))throw Error(de(200));return bd(null,n,e,!1,t)};Ci.unmountComponentAtNode=function(n){if(!Rd(n))throw Error(de(40));return n._reactRootContainer?(bo(function(){bd(null,null,n,!1,function(){n._reactRootContainer=null,n[Wr]=null})}),!0):!1};Ci.unstable_batchedUpdates=Vg;Ci.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Rd(t))throw Error(de(200));if(n==null||n._reactInternals===void 0)throw Error(de(38));return bd(n,e,t,!1,i)};Ci.version="18.3.1-next-f1338f8080-20240426";function zS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zS)}catch(n){console.error(n)}}zS(),zx.exports=Ci;var _w=zx.exports,HS,V0=_w;HS=V0.createRoot,V0.hydrateRoot;const VS=We.createContext(null),ph="/TANTRAVEDA/",Kl=ph.endsWith("/")?ph:`${ph}/`;function G0(n){let e=n||"/";return window.location.hash&&window.location.hash.startsWith("#/")?e=window.location.hash.slice(1):Kl!=="/"&&e.startsWith(Kl)&&(e=e.slice(Kl.length-1)),e.length>1&&e.endsWith("/")&&(e=e.slice(0,-1)),e||"/"}function vw(n){const e=n.startsWith("/")?n:`/${n}`;return`${Kl}#${e}`}function xw({children:n}){const[e,t]=We.useState(()=>G0(window.location.pathname));We.useEffect(()=>{const r=()=>{const s=G0(window.location.pathname);t(s),window.scrollTo(0,0)};return window.addEventListener("hashchange",r),r(),()=>window.removeEventListener("hashchange",r)},[]);const i=We.useCallback((r,s={})=>{const o=r.startsWith("/")?r:`/${r}`,a=`#${o}`;s.replace?window.location.replace(a):window.location.hash=a,t(o),s.preventScrollReset||window.scrollTo({top:0,behavior:"instant"})},[]);return I.jsx(VS.Provider,{value:{currentPath:e,navigate:i,baseUrl:Kl},children:n})}function Pd(){const n=We.useContext(VS);if(!n)throw new Error("useRouter must be used within a RouterProvider");return n}function GS(){const{navigate:n}=Pd();return n}function W0({to:n,children:e,className:t="",style:i={},onClick:r,...s}){const{navigate:o,currentPath:a}=Pd(),l=a===n,u=c=>{c.preventDefault(),r&&r(c),o(n)};return I.jsx("a",{href:vw(n),onClick:u,className:`${t} ${l?"active":""}`.trim(),style:i,...s,children:e})}function yw(){const{currentPath:n,navigate:e}=Pd(),t=n==="/",i=o=>{o.preventDefault(),e("/")},r=(o,a)=>{t||(o.preventDefault(),e("/"),setTimeout(()=>{const l=document.querySelector(a);l&&l.scrollIntoView({behavior:"smooth"})},100))},s=o=>{o.preventDefault(),e("/start")};return I.jsxs("nav",{children:[I.jsx("div",{className:"logo",onClick:i,style:{cursor:"pointer"},role:"button",tabIndex:0,children:"T A N T R A V E D A"}),I.jsxs("div",{className:"nav-links",children:[I.jsx("a",{href:"#hero",onClick:o=>r(o,"#hero"),children:"Product"}),I.jsx("a",{href:"#convergence",onClick:o=>r(o,"#convergence"),children:"Experiments"}),I.jsx("a",{href:"#distortion",onClick:o=>r(o,"#distortion"),children:"System"}),I.jsx("a",{href:"#final",onClick:o=>r(o,"#final"),children:"About"})]}),I.jsx("a",{href:"#start",className:`cta-button ${n.startsWith("/start")?"active":""}`,onClick:s,children:"Get Started"})]})}const Kp=new Set;let X0=!1;function Sw(){if(X0)return;X0=!0;const n=()=>{const e=window.innerHeight||document.documentElement.clientHeight;for(const t of Kp)!t.el||!t.el.isConnected||t.update(e);requestAnimationFrame(n)};requestAnimationFrame(n)}function Mw(n,e,t){return Math.max(e,Math.min(t,n))}function Ew(n){const e=Mw(n,0,1);return e*e*(3-2*e)}function Tw(n){if(n.dataset.linesLocked==="true")return;if(n.dataset.linesLocked="true",n.querySelector("br")){n.style.whiteSpace="nowrap";return}const e=n.innerText;if(!e||e.trim()==="")return;const t=e.split(" ");n.innerHTML="";const i=[];t.forEach((a,l)=>{const u=document.createElement("span");u.textContent=a+(l<t.length-1?" ":""),n.appendChild(u),i.push(u)});let r=-1;const s=[];let o=[];i.forEach(a=>{r===-1?(r=a.offsetTop,o.push(a)):a.offsetTop>r+5?(s.push(o),o=[a],r=a.offsetTop):o.push(a)}),s.push(o),n.innerHTML="",s.forEach((a,l)=>{const u=document.createElement("span");u.style.whiteSpace="nowrap",a.forEach(c=>u.appendChild(c)),n.appendChild(u),l<s.length-1&&n.appendChild(document.createElement("br"))})}function pr(n={}){const e=We.useRef(null);return We.useEffect(()=>{const t=e.current;if(!t)return;let i=null;if(["H1","H2","H3"].includes(t.tagName)){Tw(t),Sw();const r=n.letterSpacingEnd!==void 0?n.letterSpacingEnd:.15,s=n.letterSpacingStart!==void 0?n.letterSpacingStart:-.02,o=a=>{const l=t.getBoundingClientRect(),c=(l.top+l.height/2)/a,d=Ew(c),f=s+(r-s)*d;t.style.letterSpacing=`${f.toFixed(4)}em`};i={el:t,update:o},Kp.add(i),o(window.innerHeight||document.documentElement.clientHeight)}return()=>{i&&Kp.delete(i)}},[n.letterSpacingStart,n.letterSpacingEnd]),{ref:t=>{e.current=t}}}function ww(){const n=pr({letterSpacingStart:-.02,letterSpacingEnd:.1}),e=pr({letterSpacingStart:-.03,letterSpacingEnd:.15}),t=pr({letterSpacingStart:-.01,letterSpacingEnd:.08}),i=pr({letterSpacingStart:0,letterSpacingEnd:.08});return I.jsx("section",{id:"hero",children:I.jsxs("div",{className:"section-content",children:[I.jsx("div",{className:"label",...n,children:"T A N T R A V E D A"}),I.jsx("h1",{...e,children:"Shape the Flow."}),I.jsx("div",{className:"subtext",...t,children:"Explore the Infinite. Learn Without Limits."}),I.jsx("a",{href:"#explore",className:"cta-button",...i,children:"EXPLORE SYSTEM"})]})})}function Aw(){const n=pr({letterSpacingStart:0,letterSpacingEnd:.12});return I.jsx("section",{id:"convergence",children:I.jsx("div",{className:"section-content",children:I.jsx("h2",{...n,children:"Everything Connects."})})})}function Cw(){const n=pr({letterSpacingStart:-.02,letterSpacingEnd:.1});return I.jsx("section",{id:"distortion",children:I.jsx("div",{className:"section-content",children:I.jsx("h2",{...n,children:"Beyond Knowledge."})})})}function Rw(){const n=pr({letterSpacingStart:-.03,letterSpacingEnd:.14});return I.jsx("section",{id:"crossing",children:I.jsx("div",{className:"section-content",children:I.jsxs("h2",{...n,children:["ONE SYSTEM.",I.jsx("br",{}),"INFINITE MOTION."]})})})}function bw(){const n=pr({letterSpacingStart:0,letterSpacingEnd:.1});return I.jsx("section",{id:"flow",children:I.jsx("div",{className:"section-content",children:I.jsx("h2",{...n,children:"Meet The Future.."})})})}function Pw(){const n=GS(),e=pr({letterSpacingStart:-.01,letterSpacingEnd:.12}),t=pr({letterSpacingStart:0,letterSpacingEnd:.08}),i=r=>{r.preventDefault(),n("/start")};return I.jsx("section",{id:"final",children:I.jsxs("div",{className:"section-content",children:[I.jsx("h2",{...e,children:"ENTER THE FLOW"}),I.jsx("a",{href:"#start",className:"cta-button",onClick:i,...t,children:"Start Exploring"})]})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kg="168",Lw=0,j0=1,Dw=2,WS=1,Nw=2,br=3,Us=0,ei=1,Ir=2,Rs=0,La=1,Zp=2,Y0=3,$0=4,Iw=5,oo=100,Uw=101,Fw=102,Ow=103,kw=104,Bw=200,zw=201,Hw=202,Vw=203,Qp=204,Jp=205,Gw=206,Ww=207,Xw=208,jw=209,Yw=210,$w=211,qw=212,Kw=213,Zw=214,Qw=0,Jw=1,eA=2,Kf=3,tA=4,nA=5,iA=6,rA=7,XS=0,sA=1,oA=2,bs=0,aA=1,lA=2,uA=3,cA=4,fA=5,dA=6,hA=7,jS=300,$a=301,qa=302,em=303,tm=304,Ld=306,nm=1e3,fo=1001,im=1002,ki=1003,pA=1004,pc=1005,er=1006,mh=1007,ho=1008,Yr=1009,YS=1010,$S=1011,Cu=1012,Zg=1013,Po=1014,kr=1015,Wu=1016,Qg=1017,Jg=1018,Ka=1020,qS=35902,KS=1021,ZS=1022,tr=1023,QS=1024,JS=1025,Da=1026,Za=1027,eM=1028,e_=1029,tM=1030,t_=1031,n_=1033,ff=33776,df=33777,hf=33778,pf=33779,rm=35840,sm=35841,om=35842,am=35843,lm=36196,um=37492,cm=37496,fm=37808,dm=37809,hm=37810,pm=37811,mm=37812,gm=37813,_m=37814,vm=37815,xm=37816,ym=37817,Sm=37818,Mm=37819,Em=37820,Tm=37821,mf=36492,wm=36494,Am=36495,nM=36283,Cm=36284,Rm=36285,bm=36286,mA=3200,gA=3201,_A=0,vA=1,ds="",ar="srgb",Gs="srgb-linear",i_="display-p3",Dd="display-p3-linear",Zf="linear",Dt="srgb",Qf="rec709",Jf="p3",zo=7680,q0=519,xA=512,yA=513,SA=514,iM=515,MA=516,EA=517,TA=518,wA=519,K0=35044,Z0="300 es",Br=2e3,ed=2001;class ul{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gh=Math.PI/180,Pm=180/Math.PI;function Xu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function $n(n,e,t){return Math.max(e,Math.min(t,n))}function AA(n,e){return(n%e+e)%e}function _h(n,e,t){return(1-t)*n+t*e}function xl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,t=0){_t.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,i,r,s,o,a,l,u){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],_=i[8],g=r[0],m=r[3],h=r[6],x=r[1],v=r[4],y=r[7],C=r[2],w=r[5],M=r[8];return s[0]=o*g+a*x+l*C,s[3]=o*m+a*v+l*w,s[6]=o*h+a*y+l*M,s[1]=u*g+c*x+d*C,s[4]=u*m+c*v+d*w,s[7]=u*h+c*y+d*M,s[2]=f*g+p*x+_*C,s[5]=f*m+p*v+_*w,s[8]=f*h+p*y+_*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,p=u*s-o*l,_=t*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=f*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vh.makeScale(e,t)),this}rotate(e){return this.premultiply(vh.makeRotation(-e)),this}translate(e,t){return this.premultiply(vh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vh=new nt;function rM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ru(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function CA(){const n=Ru("canvas");return n.style.display="block",n}const Q0={};function Zl(n){n in Q0||(Q0[n]=!0,console.warn(n))}function RA(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const J0=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ev=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yl={[Gs]:{transfer:Zf,primaries:Qf,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ar]:{transfer:Dt,primaries:Qf,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Dd]:{transfer:Zf,primaries:Jf,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(ev),fromReference:n=>n.applyMatrix3(J0)},[i_]:{transfer:Dt,primaries:Jf,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(ev),fromReference:n=>n.applyMatrix3(J0).convertLinearToSRGB()}},bA=new Set([Gs,Dd]),yt={enabled:!0,_workingColorSpace:Gs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!bA.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=yl[e].toReference,r=yl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return yl[n].primaries},getTransfer:function(n){return n===ds?Zf:yl[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(yl[e].luminanceCoefficients)}};function Na(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ho;class PA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ho===void 0&&(Ho=Ru("canvas")),Ho.width=e.width,Ho.height=e.height;const i=Ho.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ho}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ru("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Na(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Na(t[i]/255)*255):t[i]=Na(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LA=0;class sM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LA++}),this.uuid=Xu(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yh(r[o].image)):s.push(yh(r[o]))}else s=yh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function yh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?PA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let DA=0;class Ln extends ul{constructor(e=Ln.DEFAULT_IMAGE,t=Ln.DEFAULT_MAPPING,i=fo,r=fo,s=er,o=ho,a=tr,l=Yr,u=Ln.DEFAULT_ANISOTROPY,c=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DA++}),this.uuid=Xu(),this.name="",this.source=new sM(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nm:e.x=e.x-Math.floor(e.x);break;case fo:e.x=e.x<0?0:1;break;case im:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nm:e.y=e.y-Math.floor(e.y);break;case fo:e.y=e.y<0?0:1;break;case im:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=jS;Ln.DEFAULT_ANISOTROPY=1;class hn{constructor(e=0,t=0,i=0,r=1){hn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],_=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,y=(p+1)/2,C=(h+1)/2,w=(c+f)/4,M=(d+g)/4,R=(_+m)/4;return v>y&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=w/i,s=M/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=M/s,r=R/s),this.set(i,r,s,t),this}let x=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(f-c)*(f-c));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(d-g)/x,this.z=(f-c)/x,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NA extends ul{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:er,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sM(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lo extends NA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class oM extends Ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ki,this.minFilter=ki,this.wrapR=fo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class IA extends Ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ki,this.minFilter=ki,this.wrapR=fo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ju{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==f||u!==p||c!==_){let m=1-a;const h=l*f+u*p+c*_+d*g,x=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const C=Math.sqrt(v),w=Math.atan2(C,h*x);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const y=a*x;if(l=l*m+f*y,u=u*m+p*y,c=c*m+_*y,d=d*m+g*y,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=C,u*=C,c*=C,d*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*d+l*p-u*f,e[t+1]=l*_+c*f+u*d-a*p,e[t+2]=u*_+c*p+a*f-l*d,e[t+3]=c*_-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"YXZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"ZXY":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"ZYX":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"YZX":this._x=f*c*d+u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d-f*p*_;break;case"XZY":this._x=f*c*d-u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($n(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sh.copy(this).projectOnVector(e),this.sub(Sh)}reflect(e){return this.sub(Sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sh=new Y,tv=new ju;class Yu{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yi):Yi.fromBufferAttribute(s,o),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mc.copy(i.boundingBox)),mc.applyMatrix4(e.matrixWorld),this.union(mc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sl),gc.subVectors(this.max,Sl),Vo.subVectors(e.a,Sl),Go.subVectors(e.b,Sl),Wo.subVectors(e.c,Sl),ts.subVectors(Go,Vo),ns.subVectors(Wo,Go),Xs.subVectors(Vo,Wo);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Xs.z,Xs.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Xs.z,0,-Xs.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Xs.y,Xs.x,0];return!Mh(t,Vo,Go,Wo,gc)||(t=[1,0,0,0,1,0,0,0,1],!Mh(t,Vo,Go,Wo,gc))?!1:(_c.crossVectors(ts,ns),t=[_c.x,_c.y,_c.z],Mh(t,Vo,Go,Wo,gc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Yi=new Y,mc=new Yu,Vo=new Y,Go=new Y,Wo=new Y,ts=new Y,ns=new Y,Xs=new Y,Sl=new Y,gc=new Y,_c=new Y,js=new Y;function Mh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){js.fromArray(n,s);const a=r.x*Math.abs(js.x)+r.y*Math.abs(js.y)+r.z*Math.abs(js.z),l=e.dot(js),u=t.dot(js),c=i.dot(js);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const UA=new Yu,Ml=new Y,Eh=new Y;class Nd{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):UA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ml.subVectors(e,this.center);const t=Ml.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ml,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ml.copy(e.center).add(Eh)),this.expandByPoint(Ml.copy(e.center).sub(Eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wr=new Y,Th=new Y,vc=new Y,is=new Y,wh=new Y,xc=new Y,Ah=new Y;class aM{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wr.copy(this.origin).addScaledVector(this.direction,t),wr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Th.copy(e).add(t).multiplyScalar(.5),vc.copy(t).sub(e).normalize(),is.copy(this.origin).sub(Th);const s=e.distanceTo(t)*.5,o=-this.direction.dot(vc),a=is.dot(this.direction),l=-is.dot(vc),u=is.lengthSq(),c=Math.abs(1-o*o);let d,f,p,_;if(c>0)if(d=o*l-a,f=o*a-l,_=s*c,d>=0)if(f>=-_)if(f<=_){const g=1/c;d*=g,f*=g,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Th).addScaledVector(vc,f),p}intersectSphere(e,t){wr.subVectors(e.center,this.origin);const i=wr.dot(this.direction),r=wr.dot(wr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wr)!==null}intersectTriangle(e,t,i,r,s){wh.subVectors(t,e),xc.subVectors(i,e),Ah.crossVectors(wh,xc);let o=this.direction.dot(Ah),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;is.subVectors(this.origin,e);const l=a*this.direction.dot(xc.crossVectors(is,xc));if(l<0)return null;const u=a*this.direction.dot(wh.cross(is));if(u<0||l+u>o)return null;const c=-a*is.dot(Ah);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m)}set(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Xo.setFromMatrixColumn(e,0).length(),s=1/Xo.setFromMatrixColumn(e,1).length(),o=1/Xo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*d,_=a*c,g=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+_*u,t[5]=f-g*u,t[9]=-a*l,t[2]=g-f*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,_=u*c,g=u*d;t[0]=f+g*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,_=u*c,g=u*d;t[0]=f-g*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=g-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*d,_=a*c,g=a*d;t[0]=l*c,t[4]=_*u-p,t[8]=f*u+g,t[1]=l*d,t[5]=g*u+f,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=g-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+g,t[5]=o*c,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*c,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FA,e,OA)}lookAt(e,t,i){const r=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),rs.crossVectors(i,ui),rs.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),rs.crossVectors(i,ui)),rs.normalize(),yc.crossVectors(ui,rs),r[0]=rs.x,r[4]=yc.x,r[8]=ui.x,r[1]=rs.y,r[5]=yc.y,r[9]=ui.y,r[2]=rs.z,r[6]=yc.z,r[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],_=i[2],g=i[6],m=i[10],h=i[14],x=i[3],v=i[7],y=i[11],C=i[15],w=r[0],M=r[4],R=r[8],E=r[12],S=r[1],L=r[5],O=r[9],z=r[13],j=r[2],q=r[6],X=r[10],V=r[14],N=r[3],K=r[7],b=r[11],ie=r[15];return s[0]=o*w+a*S+l*j+u*N,s[4]=o*M+a*L+l*q+u*K,s[8]=o*R+a*O+l*X+u*b,s[12]=o*E+a*z+l*V+u*ie,s[1]=c*w+d*S+f*j+p*N,s[5]=c*M+d*L+f*q+p*K,s[9]=c*R+d*O+f*X+p*b,s[13]=c*E+d*z+f*V+p*ie,s[2]=_*w+g*S+m*j+h*N,s[6]=_*M+g*L+m*q+h*K,s[10]=_*R+g*O+m*X+h*b,s[14]=_*E+g*z+m*V+h*ie,s[3]=x*w+v*S+y*j+C*N,s[7]=x*M+v*L+y*q+C*K,s[11]=x*R+v*O+y*X+C*b,s[15]=x*E+v*z+y*V+C*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],_=e[3],g=e[7],m=e[11],h=e[15];return _*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*p-i*l*p)+g*(+t*l*p-t*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],_=e[12],g=e[13],m=e[14],h=e[15],x=d*m*u-g*f*u+g*l*p-a*m*p-d*l*h+a*f*h,v=_*f*u-c*m*u-_*l*p+o*m*p+c*l*h-o*f*h,y=c*g*u-_*d*u+_*a*p-o*g*p-c*a*h+o*d*h,C=_*d*l-c*g*l-_*a*f+o*g*f+c*a*m-o*d*m,w=t*x+i*v+r*y+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=x*M,e[1]=(g*f*s-d*m*s-g*r*p+i*m*p+d*r*h-i*f*h)*M,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*h+i*l*h)*M,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*p-i*l*p)*M,e[4]=v*M,e[5]=(c*m*s-_*f*s+_*r*p-t*m*p-c*r*h+t*f*h)*M,e[6]=(_*l*s-o*m*s-_*r*u+t*m*u+o*r*h-t*l*h)*M,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*p+t*l*p)*M,e[8]=y*M,e[9]=(_*d*s-c*g*s-_*i*p+t*g*p+c*i*h-t*d*h)*M,e[10]=(o*g*s-_*a*s+_*i*u-t*g*u-o*i*h+t*a*h)*M,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*M,e[12]=C*M,e[13]=(c*g*r-_*d*r+_*i*f-t*g*f-c*i*m+t*d*m)*M,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*m-t*a*m)*M,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,p=s*c,_=s*d,g=o*c,m=o*d,h=a*d,x=l*u,v=l*c,y=l*d,C=i.x,w=i.y,M=i.z;return r[0]=(1-(g+h))*C,r[1]=(p+y)*C,r[2]=(_-v)*C,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(f+h))*w,r[6]=(m+x)*w,r[7]=0,r[8]=(_+v)*M,r[9]=(m-x)*M,r[10]=(1-(f+g))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Xo.set(r[0],r[1],r[2]).length();const o=Xo.set(r[4],r[5],r[6]).length(),a=Xo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$i.copy(this);const u=1/s,c=1/o,d=1/a;return $i.elements[0]*=u,$i.elements[1]*=u,$i.elements[2]*=u,$i.elements[4]*=c,$i.elements[5]*=c,$i.elements[6]*=c,$i.elements[8]*=d,$i.elements[9]*=d,$i.elements[10]*=d,t.setFromRotationMatrix($i),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Br){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,_;if(a===Br)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ed)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Br){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),f=(t+e)*u,p=(i+r)*c;let _,g;if(a===Br)_=(o+s)*d,g=-2*d;else if(a===ed)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xo=new Y,$i=new Jt,FA=new Y(0,0,0),OA=new Y(1,1,1),rs=new Y,yc=new Y,ui=new Y,nv=new Jt,iv=new ju;class $r{constructor(e=0,t=0,i=0,r=$r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin($n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$n(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($n(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$n(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin($n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return iv.setFromEuler(this),this.setFromQuaternion(iv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$r.DEFAULT_ORDER="XYZ";class lM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kA=0;const rv=new Y,jo=new ju,Ar=new Jt,Sc=new Y,El=new Y,BA=new Y,zA=new ju,sv=new Y(1,0,0),ov=new Y(0,1,0),av=new Y(0,0,1),lv={type:"added"},HA={type:"removed"},Yo={type:"childadded",child:null},Ch={type:"childremoved",child:null};class ti extends ul{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kA++}),this.uuid=Xu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const e=new Y,t=new $r,i=new ju,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new nt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jo.setFromAxisAngle(e,t),this.quaternion.multiply(jo),this}rotateOnWorldAxis(e,t){return jo.setFromAxisAngle(e,t),this.quaternion.premultiply(jo),this}rotateX(e){return this.rotateOnAxis(sv,e)}rotateY(e){return this.rotateOnAxis(ov,e)}rotateZ(e){return this.rotateOnAxis(av,e)}translateOnAxis(e,t){return rv.copy(e).applyQuaternion(this.quaternion),this.position.add(rv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sv,e)}translateY(e){return this.translateOnAxis(ov,e)}translateZ(e){return this.translateOnAxis(av,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ar.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sc.copy(e):Sc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),El.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ar.lookAt(El,Sc,this.up):Ar.lookAt(Sc,El,this.up),this.quaternion.setFromRotationMatrix(Ar),r&&(Ar.extractRotation(r.matrixWorld),jo.setFromRotationMatrix(Ar),this.quaternion.premultiply(jo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lv),Yo.child=e,this.dispatchEvent(Yo),Yo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(HA),Ch.child=e,this.dispatchEvent(Ch),Ch.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lv),Yo.child=e,this.dispatchEvent(Yo),Yo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,e,BA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,zA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ti.DEFAULT_UP=new Y(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qi=new Y,Cr=new Y,Rh=new Y,Rr=new Y,$o=new Y,qo=new Y,uv=new Y,bh=new Y,Ph=new Y,Lh=new Y;class dr{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qi.subVectors(e,t),r.cross(qi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qi.subVectors(r,t),Cr.subVectors(i,t),Rh.subVectors(e,t);const o=qi.dot(qi),a=qi.dot(Cr),l=qi.dot(Rh),u=Cr.dot(Cr),c=Cr.dot(Rh),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-a*c)*f,_=(o*c-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Rr)===null?!1:Rr.x>=0&&Rr.y>=0&&Rr.x+Rr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Rr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rr.x),l.addScaledVector(o,Rr.y),l.addScaledVector(a,Rr.z),l)}static isFrontFacing(e,t,i,r){return qi.subVectors(i,t),Cr.subVectors(e,t),qi.cross(Cr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),Cr.subVectors(this.a,this.b),qi.cross(Cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return dr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return dr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;$o.subVectors(r,i),qo.subVectors(s,i),bh.subVectors(e,i);const l=$o.dot(bh),u=qo.dot(bh);if(l<=0&&u<=0)return t.copy(i);Ph.subVectors(e,r);const c=$o.dot(Ph),d=qo.dot(Ph);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector($o,o);Lh.subVectors(e,s);const p=$o.dot(Lh),_=qo.dot(Lh);if(_>=0&&p<=_)return t.copy(s);const g=p*u-l*_;if(g<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(qo,a);const m=c*_-p*d;if(m<=0&&d-c>=0&&p-_>=0)return uv.subVectors(s,r),a=(d-c)/(d-c+(p-_)),t.copy(r).addScaledVector(uv,a);const h=1/(m+g+f);return o=g*h,a=f*h,t.copy(i).addScaledVector($o,o).addScaledVector(qo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function Dh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ar){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=yt.workingColorSpace){if(e=AA(e,1),t=$n(t,0,1),i=$n(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Dh(o,s,e+1/3),this.g=Dh(o,s,e),this.b=Dh(o,s,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=ar){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ar){const i=uM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}copyLinearToSRGB(e){return this.r=xh(e.r),this.g=xh(e.g),this.b=xh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ar){return yt.fromWorkingColorSpace(wn.copy(this),e),Math.round($n(wn.r*255,0,255))*65536+Math.round($n(wn.g*255,0,255))*256+Math.round($n(wn.b*255,0,255))}getHexString(e=ar){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,s=wn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ar){yt.fromWorkingColorSpace(wn.copy(this),e);const t=wn.r,i=wn.g,r=wn.b;return e!==ar?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Mc);const i=_h(ss.h,Mc.h,t),r=_h(ss.s,Mc.s,t),s=_h(ss.l,Mc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new mt;mt.NAMES=uM;let VA=0;class $u extends ul{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VA++}),this.uuid=Xu(),this.name="",this.type="Material",this.blending=La,this.side=Us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qp,this.blendDst=Jp,this.blendEquation=oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Kf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=q0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==La&&(i.blending=this.blending),this.side!==Us&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qp&&(i.blendSrc=this.blendSrc),this.blendDst!==Jp&&(i.blendDst=this.blendDst),this.blendEquation!==oo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Kf&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==q0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class cM extends $u{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=XS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new Y,Ec=new _t;class yr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=K0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Zl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ec.fromBufferAttribute(this,t),Ec.applyMatrix3(e),this.setXY(t,Ec.x,Ec.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),r=Xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),r=Xn(r,this.array),s=Xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==K0&&(e.usage=this.usage),e}}class fM extends yr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class dM extends yr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xi extends yr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let GA=0;const Pi=new Jt,Nh=new ti,Ko=new Y,ci=new Yu,Tl=new Yu,un=new Y;class Qr extends ul{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GA++}),this.uuid=Xu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rM(e)?dM:fM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,t,i){return Pi.makeTranslation(e,t,i),this.applyMatrix4(Pi),this}scale(e,t,i){return Pi.makeScale(e,t,i),this.applyMatrix4(Pi),this}lookAt(e){return Nh.lookAt(e),Nh.updateMatrix(),this.applyMatrix4(Nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ko).negate(),this.translate(Ko.x,Ko.y,Ko.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ci.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Tl.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(ci.min,Tl.min),ci.expandByPoint(un),un.addVectors(ci.max,Tl.max),ci.expandByPoint(un)):(ci.expandByPoint(Tl.min),ci.expandByPoint(Tl.max))}ci.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)un.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(un));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)un.fromBufferAttribute(a,u),l&&(Ko.fromBufferAttribute(e,u),un.add(Ko)),r=Math.max(r,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new Y,l[R]=new Y;const u=new Y,c=new Y,d=new Y,f=new _t,p=new _t,_=new _t,g=new Y,m=new Y;function h(R,E,S){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,S),c.sub(u),d.sub(u),p.sub(f),_.sub(f);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(g.copy(c).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(L),a[R].add(g),a[E].add(g),a[S].add(g),l[R].add(m),l[E].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,E=x.length;R<E;++R){const S=x[R],L=S.start,O=S.count;for(let z=L,j=L+O;z<j;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const v=new Y,y=new Y,C=new Y,w=new Y;function M(R){C.fromBufferAttribute(r,R),w.copy(C);const E=a[R];v.copy(E),v.sub(C.multiplyScalar(C.dot(E))).normalize(),y.crossVectors(w,E);const L=y.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,L)}for(let R=0,E=x.length;R<E;++R){const S=x[R],L=S.start,O=S.count;for(let z=L,j=L+O;z<j;z+=3)M(e.getX(z+0)),M(e.getX(z+1)),M(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,u=new Y,c=new Y,d=new Y;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let h=0;h<c;h++)f[_++]=u[p++]}return new yr(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cv=new Jt,Ys=new aM,Tc=new Nd,fv=new Y,Zo=new Y,Qo=new Y,Jo=new Y,Ih=new Y,wc=new Y,Ac=new _t,Cc=new _t,Rc=new _t,dv=new Y,hv=new Y,pv=new Y,bc=new Y,Pc=new Y;class mr extends ti{constructor(e=new Qr,t=new cM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){wc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Ih.fromBufferAttribute(d,e),o?wc.addScaledVector(Ih,c):wc.addScaledVector(Ih.sub(t),c))}t.add(wc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tc.copy(i.boundingSphere),Tc.applyMatrix4(s),Ys.copy(e.ray).recast(e.near),!(Tc.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(Tc,fv)===null||Ys.origin.distanceToSquared(fv)>(e.far-e.near)**2))&&(cv.copy(s).invert(),Ys.copy(e.ray).applyMatrix4(cv),!(i.boundingBox!==null&&Ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],h=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,C=v;y<C;y+=3){const w=a.getX(y),M=a.getX(y+1),R=a.getX(y+2);r=Lc(this,h,e,i,u,c,d,w,M,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const x=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Lc(this,o,e,i,u,c,d,x,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],h=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,C=v;y<C;y+=3){const w=y,M=y+1,R=y+2;r=Lc(this,h,e,i,u,c,d,w,M,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const x=m,v=m+1,y=m+2;r=Lc(this,o,e,i,u,c,d,x,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function WA(n,e,t,i,r,s,o,a){let l;if(e.side===ei?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Us,a),l===null)return null;Pc.copy(a),Pc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Pc);return u<t.near||u>t.far?null:{distance:u,point:Pc.clone(),object:n}}function Lc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Zo),n.getVertexPosition(l,Qo),n.getVertexPosition(u,Jo);const c=WA(n,e,t,i,Zo,Qo,Jo,bc);if(c){r&&(Ac.fromBufferAttribute(r,a),Cc.fromBufferAttribute(r,l),Rc.fromBufferAttribute(r,u),c.uv=dr.getInterpolation(bc,Zo,Qo,Jo,Ac,Cc,Rc,new _t)),s&&(Ac.fromBufferAttribute(s,a),Cc.fromBufferAttribute(s,l),Rc.fromBufferAttribute(s,u),c.uv1=dr.getInterpolation(bc,Zo,Qo,Jo,Ac,Cc,Rc,new _t)),o&&(dv.fromBufferAttribute(o,a),hv.fromBufferAttribute(o,l),pv.fromBufferAttribute(o,u),c.normal=dr.getInterpolation(bc,Zo,Qo,Jo,dv,hv,pv,new Y),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new Y,materialIndex:0};dr.getNormal(Zo,Qo,Jo,d.normal),c.face=d}return c}class qu extends Qr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xi(u,3)),this.setAttribute("normal",new xi(c,3)),this.setAttribute("uv",new xi(d,2));function _(g,m,h,x,v,y,C,w,M,R,E){const S=y/M,L=C/R,O=y/2,z=C/2,j=w/2,q=M+1,X=R+1;let V=0,N=0;const K=new Y;for(let b=0;b<X;b++){const ie=b*L-z;for(let Ee=0;Ee<q;Ee++){const $e=Ee*S-O;K[g]=$e*x,K[m]=ie*v,K[h]=j,u.push(K.x,K.y,K.z),K[g]=0,K[m]=0,K[h]=w>0?1:-1,c.push(K.x,K.y,K.z),d.push(Ee/M),d.push(1-b/R),V+=1}}for(let b=0;b<R;b++)for(let ie=0;ie<M;ie++){const Ee=f+ie+q*b,$e=f+ie+q*(b+1),$=f+(ie+1)+q*(b+1),re=f+(ie+1)+q*b;l.push(Ee,$e,re),l.push($e,$,re),N+=6}a.addGroup(p,N,E),p+=N,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Fn(n){const e={};for(let t=0;t<n.length;t++){const i=Qa(n[t]);for(const r in i)e[r]=i[r]}return e}function XA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const jA={clone:Qa,merge:Fn};var YA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$A=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends $u{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YA,this.fragmentShader=$A,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qa(e.uniforms),this.uniformsGroups=XA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class pM extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Br}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const os=new Y,mv=new _t,gv=new _t;class Ii extends pM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pm*2*Math.atan(Math.tan(gh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,mv,gv),t.subVectors(gv,mv)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ea=-90,ta=1;class qA extends ti{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ii(ea,ta,e,t);r.layers=this.layers,this.add(r);const s=new Ii(ea,ta,e,t);s.layers=this.layers,this.add(s);const o=new Ii(ea,ta,e,t);o.layers=this.layers,this.add(o);const a=new Ii(ea,ta,e,t);a.layers=this.layers,this.add(a);const l=new Ii(ea,ta,e,t);l.layers=this.layers,this.add(l);const u=new Ii(ea,ta,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Br)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ed)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class mM extends Ln{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:$a,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KA extends Lo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new mM(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:er}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qu(5,5,5),s=new Mr({name:"CubemapFromEquirect",uniforms:Qa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ei,blending:Rs});s.uniforms.tEquirect.value=t;const o=new mr(r,s),a=t.minFilter;return t.minFilter===ho&&(t.minFilter=er),new qA(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Uh=new Y,ZA=new Y,QA=new nt;class to{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Uh.subVectors(i,t).cross(ZA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Uh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||QA.getNormalMatrix(e),r=this.coplanarPoint(Uh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $s=new Nd,Dc=new Y;class gM{constructor(e=new to,t=new to,i=new to,r=new to,s=new to,o=new to){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Br){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],h=r[12],x=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,f-u,m-p,y-h).normalize(),i[1].setComponents(l+s,f+u,m+p,y+h).normalize(),i[2].setComponents(l+o,f+c,m+_,y+x).normalize(),i[3].setComponents(l-o,f-c,m-_,y-x).normalize(),i[4].setComponents(l-a,f-d,m-g,y-v).normalize(),t===Br)i[5].setComponents(l+a,f+d,m+g,y+v).normalize();else if(t===ed)i[5].setComponents(a,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(e){return $s.center.set(0,0,0),$s.radius=.7071067811865476,$s.applyMatrix4(e.matrixWorld),this.intersectsSphere($s)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Dc.x=r.normal.x>0?e.max.x:e.min.x,Dc.y=r.normal.y>0?e.max.y:e.min.y,Dc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _M(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function JA(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l._updateRange,f=l.updateRanges;if(n.bindBuffer(u,a),d.count===-1&&f.length===0&&n.bufferSubData(u,0,c),f.length!==0){for(let p=0,_=f.length;p<_;p++){const g=f[p];n.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(u,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Ja extends Qr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,p=[],_=[],g=[],m=[];for(let h=0;h<c;h++){const x=h*f-o;for(let v=0;v<u;v++){const y=v*d-s;_.push(y,-x,0),g.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<a;x++){const v=x+u*h,y=x+u*(h+1),C=x+1+u*(h+1),w=x+1+u*h;p.push(v,y,w),p.push(y,C,w)}this.setIndex(p),this.setAttribute("position",new xi(_,3)),this.setAttribute("normal",new xi(g,3)),this.setAttribute("uv",new xi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.widthSegments,e.heightSegments)}}var eC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tC=`#ifdef USE_ALPHAHASH
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
#endif`,nC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oC=`#ifdef USE_AOMAP
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
#endif`,aC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lC=`#ifdef USE_BATCHING
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
#endif`,uC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hC=`#ifdef USE_IRIDESCENCE
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
#endif`,pC=`#ifdef USE_BUMPMAP
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
#endif`,mC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_C=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,MC=`#if defined( USE_COLOR_ALPHA )
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
#endif`,EC=`#define PI 3.141592653589793
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
} // validated`,TC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wC=`vec3 transformedNormal = objectNormal;
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
#endif`,AC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PC="gl_FragColor = linearToOutputTexel( gl_FragColor );",LC=`
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
}`,DC=`#ifdef USE_ENVMAP
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
#endif`,NC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IC=`#ifdef USE_ENVMAP
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
#endif`,UC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FC=`#ifdef USE_ENVMAP
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
#endif`,OC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HC=`#ifdef USE_GRADIENTMAP
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
}`,VC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XC=`uniform bool receiveShadow;
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
#endif`,jC=`#ifdef USE_ENVMAP
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
#endif`,YC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$C=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZC=`PhysicalMaterial material;
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
#endif`,QC=`struct PhysicalMaterial {
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
}`,JC=`
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
#endif`,eR=`#if defined( RE_IndirectDiffuse )
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
#endif`,tR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uR=`#if defined( USE_POINTS_UV )
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
#endif`,cR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mR=`#ifdef USE_MORPHTARGETS
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
#endif`,gR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_R=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MR=`#ifdef USE_NORMALMAP
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
#endif`,ER=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kR=`float getShadowMask() {
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
}`,BR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zR=`#ifdef USE_SKINNING
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
#endif`,HR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VR=`#ifdef USE_SKINNING
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
#endif`,GR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YR=`#ifdef USE_TRANSMISSION
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
#endif`,$R=`#ifdef USE_TRANSMISSION
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
#endif`,qR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eb=`uniform sampler2D t2D;
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
}`,tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sb=`#include <common>
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
}`,ob=`#if DEPTH_PACKING == 3200
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
}`,ab=`#define DISTANCE
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
}`,lb=`#define DISTANCE
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
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`uniform float scale;
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
}`,db=`uniform vec3 diffuse;
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
}`,hb=`#include <common>
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
}`,pb=`uniform vec3 diffuse;
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
}`,mb=`#define LAMBERT
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
}`,gb=`#define LAMBERT
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
}`,_b=`#define MATCAP
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
}`,vb=`#define MATCAP
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
}`,xb=`#define NORMAL
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
}`,yb=`#define NORMAL
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
}`,Sb=`#define PHONG
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
}`,Mb=`#define PHONG
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
}`,Eb=`#define STANDARD
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
}`,Tb=`#define STANDARD
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
}`,wb=`#define TOON
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
}`,Ab=`#define TOON
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
}`,Cb=`uniform float size;
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
}`,Rb=`uniform vec3 diffuse;
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
}`,bb=`#include <common>
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
}`,Pb=`uniform vec3 color;
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
}`,Lb=`uniform float rotation;
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
}`,Db=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:eC,alphahash_pars_fragment:tC,alphamap_fragment:nC,alphamap_pars_fragment:iC,alphatest_fragment:rC,alphatest_pars_fragment:sC,aomap_fragment:oC,aomap_pars_fragment:aC,batching_pars_vertex:lC,batching_vertex:uC,begin_vertex:cC,beginnormal_vertex:fC,bsdfs:dC,iridescence_fragment:hC,bumpmap_pars_fragment:pC,clipping_planes_fragment:mC,clipping_planes_pars_fragment:gC,clipping_planes_pars_vertex:_C,clipping_planes_vertex:vC,color_fragment:xC,color_pars_fragment:yC,color_pars_vertex:SC,color_vertex:MC,common:EC,cube_uv_reflection_fragment:TC,defaultnormal_vertex:wC,displacementmap_pars_vertex:AC,displacementmap_vertex:CC,emissivemap_fragment:RC,emissivemap_pars_fragment:bC,colorspace_fragment:PC,colorspace_pars_fragment:LC,envmap_fragment:DC,envmap_common_pars_fragment:NC,envmap_pars_fragment:IC,envmap_pars_vertex:UC,envmap_physical_pars_fragment:jC,envmap_vertex:FC,fog_vertex:OC,fog_pars_vertex:kC,fog_fragment:BC,fog_pars_fragment:zC,gradientmap_pars_fragment:HC,lightmap_pars_fragment:VC,lights_lambert_fragment:GC,lights_lambert_pars_fragment:WC,lights_pars_begin:XC,lights_toon_fragment:YC,lights_toon_pars_fragment:$C,lights_phong_fragment:qC,lights_phong_pars_fragment:KC,lights_physical_fragment:ZC,lights_physical_pars_fragment:QC,lights_fragment_begin:JC,lights_fragment_maps:eR,lights_fragment_end:tR,logdepthbuf_fragment:nR,logdepthbuf_pars_fragment:iR,logdepthbuf_pars_vertex:rR,logdepthbuf_vertex:sR,map_fragment:oR,map_pars_fragment:aR,map_particle_fragment:lR,map_particle_pars_fragment:uR,metalnessmap_fragment:cR,metalnessmap_pars_fragment:fR,morphinstance_vertex:dR,morphcolor_vertex:hR,morphnormal_vertex:pR,morphtarget_pars_vertex:mR,morphtarget_vertex:gR,normal_fragment_begin:_R,normal_fragment_maps:vR,normal_pars_fragment:xR,normal_pars_vertex:yR,normal_vertex:SR,normalmap_pars_fragment:MR,clearcoat_normal_fragment_begin:ER,clearcoat_normal_fragment_maps:TR,clearcoat_pars_fragment:wR,iridescence_pars_fragment:AR,opaque_fragment:CR,packing:RR,premultiplied_alpha_fragment:bR,project_vertex:PR,dithering_fragment:LR,dithering_pars_fragment:DR,roughnessmap_fragment:NR,roughnessmap_pars_fragment:IR,shadowmap_pars_fragment:UR,shadowmap_pars_vertex:FR,shadowmap_vertex:OR,shadowmask_pars_fragment:kR,skinbase_vertex:BR,skinning_pars_vertex:zR,skinning_vertex:HR,skinnormal_vertex:VR,specularmap_fragment:GR,specularmap_pars_fragment:WR,tonemapping_fragment:XR,tonemapping_pars_fragment:jR,transmission_fragment:YR,transmission_pars_fragment:$R,uv_pars_fragment:qR,uv_pars_vertex:KR,uv_vertex:ZR,worldpos_vertex:QR,background_vert:JR,background_frag:eb,backgroundCube_vert:tb,backgroundCube_frag:nb,cube_vert:ib,cube_frag:rb,depth_vert:sb,depth_frag:ob,distanceRGBA_vert:ab,distanceRGBA_frag:lb,equirect_vert:ub,equirect_frag:cb,linedashed_vert:fb,linedashed_frag:db,meshbasic_vert:hb,meshbasic_frag:pb,meshlambert_vert:mb,meshlambert_frag:gb,meshmatcap_vert:_b,meshmatcap_frag:vb,meshnormal_vert:xb,meshnormal_frag:yb,meshphong_vert:Sb,meshphong_frag:Mb,meshphysical_vert:Eb,meshphysical_frag:Tb,meshtoon_vert:wb,meshtoon_frag:Ab,points_vert:Cb,points_frag:Rb,shadow_vert:bb,shadow_frag:Pb,sprite_vert:Lb,sprite_frag:Db},Me={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},cr={basic:{uniforms:Fn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Fn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new mt(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Fn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Fn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Fn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new mt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Fn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Fn([Me.points,Me.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Fn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Fn([Me.common,Me.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Fn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Fn([Me.sprite,Me.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Fn([Me.common,Me.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Fn([Me.lights,Me.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};cr.physical={uniforms:Fn([cr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Nc={r:0,b:0,g:0},qs=new $r,Nb=new Jt;function Ib(n,e,t,i,r,s,o){const a=new mt(0);let l=s===!0?0:1,u,c,d=null,f=0,p=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function g(x){let v=!1;const y=_(x);y===null?h(a,l):y&&y.isColor&&(h(y,1),v=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,v){const y=_(v);y&&(y.isCubeTexture||y.mapping===Ld)?(c===void 0&&(c=new mr(new qu(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:Qa(cr.backgroundCube.uniforms),vertexShader:cr.backgroundCube.vertexShader,fragmentShader:cr.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),qs.copy(v.backgroundRotation),qs.x*=-1,qs.y*=-1,qs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Nb.makeRotationFromEuler(qs)),c.material.toneMapped=yt.getTransfer(y.colorSpace)!==Dt,(d!==y||f!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,p=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new mr(new Ja(2,2),new Mr({name:"BackgroundMaterial",uniforms:Qa(cr.background.uniforms),vertexShader:cr.background.vertexShader,fragmentShader:cr.background.fragmentShader,side:Us,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=yt.getTransfer(y.colorSpace)!==Dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,p=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function h(x,v){x.getRGB(Nc,hM(n)),i.buffers.color.setClear(Nc.r,Nc.g,Nc.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(a,l)},render:g,addToRenderList:m}}function Ub(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,L,O,z,j){let q=!1;const X=d(z,O,L);s!==X&&(s=X,u(s.object)),q=p(S,z,O,j),q&&_(S,z,O,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(S,L,O,z),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function d(S,L,O){const z=O.wireframe===!0;let j=i[S.id];j===void 0&&(j={},i[S.id]=j);let q=j[L.id];q===void 0&&(q={},j[L.id]=q);let X=q[z];return X===void 0&&(X=f(l()),q[z]=X),X}function f(S){const L=[],O=[],z=[];for(let j=0;j<t;j++)L[j]=0,O[j]=0,z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,L,O,z){const j=s.attributes,q=L.attributes;let X=0;const V=O.getAttributes();for(const N in V)if(V[N].location>=0){const b=j[N];let ie=q[N];if(ie===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),b===void 0||b.attribute!==ie||ie&&b.data!==ie.data)return!0;X++}return s.attributesNum!==X||s.index!==z}function _(S,L,O,z){const j={},q=L.attributes;let X=0;const V=O.getAttributes();for(const N in V)if(V[N].location>=0){let b=q[N];b===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(b=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(b=S.instanceColor));const ie={};ie.attribute=b,b&&b.data&&(ie.data=b.data),j[N]=ie,X++}s.attributes=j,s.attributesNum=X,s.index=z}function g(){const S=s.newAttributes;for(let L=0,O=S.length;L<O;L++)S[L]=0}function m(S){h(S,0)}function h(S,L){const O=s.newAttributes,z=s.enabledAttributes,j=s.attributeDivisors;O[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),j[S]!==L&&(n.vertexAttribDivisor(S,L),j[S]=L)}function x(){const S=s.newAttributes,L=s.enabledAttributes;for(let O=0,z=L.length;O<z;O++)L[O]!==S[O]&&(n.disableVertexAttribArray(O),L[O]=0)}function v(S,L,O,z,j,q,X){X===!0?n.vertexAttribIPointer(S,L,O,j,q):n.vertexAttribPointer(S,L,O,z,j,q)}function y(S,L,O,z){g();const j=z.attributes,q=O.getAttributes(),X=L.defaultAttributeValues;for(const V in q){const N=q[V];if(N.location>=0){let K=j[V];if(K===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const b=K.normalized,ie=K.itemSize,Ee=e.get(K);if(Ee===void 0)continue;const $e=Ee.buffer,$=Ee.type,re=Ee.bytesPerElement,me=$===n.INT||$===n.UNSIGNED_INT||K.gpuType===Zg;if(K.isInterleavedBufferAttribute){const fe=K.data,Te=fe.stride,Ie=K.offset;if(fe.isInstancedInterleavedBuffer){for(let qe=0;qe<N.locationSize;qe++)h(N.location+qe,fe.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let qe=0;qe<N.locationSize;qe++)m(N.location+qe);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let qe=0;qe<N.locationSize;qe++)v(N.location+qe,ie/N.locationSize,$,b,Te*re,(Ie+ie/N.locationSize*qe)*re,me)}else{if(K.isInstancedBufferAttribute){for(let fe=0;fe<N.locationSize;fe++)h(N.location+fe,K.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let fe=0;fe<N.locationSize;fe++)m(N.location+fe);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let fe=0;fe<N.locationSize;fe++)v(N.location+fe,ie/N.locationSize,$,b,ie*re,ie/N.locationSize*fe*re,me)}}else if(X!==void 0){const b=X[V];if(b!==void 0)switch(b.length){case 2:n.vertexAttrib2fv(N.location,b);break;case 3:n.vertexAttrib3fv(N.location,b);break;case 4:n.vertexAttrib4fv(N.location,b);break;default:n.vertexAttrib1fv(N.location,b)}}}}x()}function C(){R();for(const S in i){const L=i[S];for(const O in L){const z=L[O];for(const j in z)c(z[j].object),delete z[j];delete L[O]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const O in L){const z=L[O];for(const j in z)c(z[j].object),delete z[j];delete L[O]}delete i[S.id]}function M(S){for(const L in i){const O=i[L];if(O[S.id]===void 0)continue;const z=O[S.id];for(const j in z)c(z[j].object),delete z[j];delete O[S.id]}}function R(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:M,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function Fb(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,d){d!==0&&(n.drawArraysInstanced(i,u,c,d),t.update(c,i,d))}function a(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let p=0;for(let _=0;_<d;_++)p+=c[_];t.update(p,i,1)}function l(u,c,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],c[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=c[g];for(let g=0;g<f.length;g++)t.update(_,i,f[g])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ob(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==tr&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const M=w===Wu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Yr&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==kr&&!M)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:h,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:y,maxSamples:C}}function kb(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new to,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const x=s?0:i,v=x*4;let y=h.clippingState||null;l.value=y,y=c(_,f,v,p);for(let C=0;C!==v;++C)y[C]=t[C];h.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const h=p+g*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,y=p;v!==g;++v,y+=4)o.copy(d[v]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Bb(n){let e=new WeakMap;function t(o,a){return a===em?o.mapping=$a:a===tm&&(o.mapping=qa),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===em||a===tm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new KA(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class zb extends pM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Sa=4,_v=[.125,.215,.35,.446,.526,.582],ao=20,Fh=new zb,vv=new mt;let Oh=null,kh=0,Bh=0,zh=!1;const no=(1+Math.sqrt(5))/2,na=1/no,xv=[new Y(-no,na,0),new Y(no,na,0),new Y(-na,0,no),new Y(na,0,no),new Y(0,no,-na),new Y(0,no,na),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class yv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Oh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oh,kh,Bh),this._renderer.xr.enabled=zh,e.scissorTest=!1,Ic(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$a||e.mapping===qa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:er,minFilter:er,generateMipmaps:!1,type:Wu,format:tr,colorSpace:Gs,depthBuffer:!1},r=Sv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hb(s)),this._blurMaterial=Vb(s,e,t)}return r}_compileMaterial(e){const t=new mr(this._lodPlanes[0],e);this._renderer.compile(t,Fh)}_sceneToCubeUV(e,t,i,r){const a=new Ii(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(vv),c.toneMapping=bs,c.autoClear=!1;const p=new cM({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),_=new mr(new qu,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(vv),g=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):x===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const v=this._cubeSize;Ic(r,x*v,h>2?v:0,v,v),c.setRenderTarget(r),g&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===$a||e.mapping===qa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new mr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ic(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Fh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xv[(r-s-1)%xv.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new mr(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ao-1),g=s/_,m=isFinite(s)?1+Math.floor(c*g):ao;m>ao&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ao}`);const h=[];let x=0;for(let M=0;M<ao;++M){const R=M/g,E=Math.exp(-R*R/2);h.push(E),M===0?x+=E:M<m&&(x+=2*E)}for(let M=0;M<h.length;M++)h[M]=h[M]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const y=this._sizeLods[r],C=3*y*(r>v-Sa?r-v+Sa:0),w=4*(this._cubeSize-y);Ic(t,C,w,3*y,2*y),l.setRenderTarget(t),l.render(d,Fh)}}function Hb(n){const e=[],t=[],i=[];let r=n;const s=n-Sa+1+_v.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Sa?l=_v[o-n+Sa-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,_=6,g=3,m=2,h=1,x=new Float32Array(g*_*p),v=new Float32Array(m*_*p),y=new Float32Array(h*_*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,R=w>2?0:-1,E=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];x.set(E,g*_*w),v.set(f,m*_*w);const S=[w,w,w,w,w,w];y.set(S,h*_*w)}const C=new Qr;C.setAttribute("position",new yr(x,g)),C.setAttribute("uv",new yr(v,m)),C.setAttribute("faceIndex",new yr(y,h)),e.push(C),r>Sa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Sv(n,e,t){const i=new Lo(n,e,t);return i.texture.mapping=Ld,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ic(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Vb(n,e,t){const i=new Float32Array(ao),r=new Y(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:ao,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:r_(),fragmentShader:`

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
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function Mv(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:r_(),fragmentShader:`

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
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function Ev(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:r_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function r_(){return`

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
	`}function Gb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===em||l===tm,c=l===$a||l===qa;if(u||c){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new yv(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new yv(n)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Wb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Zl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Xb(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,h=g.length;m<h;m++)e.remove(g[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,h=g.length;m<h;m++)e.update(g[m],n.ARRAY_BUFFER)}}function u(d){const f=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let v=0,y=x.length;v<y;v+=3){const C=x[v+0],w=x[v+1],M=x[v+2];f.push(C,w,w,M,M,C)}}else if(_!==void 0){const x=_.array;g=_.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const C=v+0,w=v+1,M=v+2;f.push(C,w,w,M,M,C)}}else return;const m=new(rM(f)?dM:fM)(f,1);m.version=g;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function jb(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function u(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,f*o,_),t.update(p,i,_))}function c(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];t.update(m,i,1)}function d(f,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)u(f[h]/o,p[h],g[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,g,0,_);let h=0;for(let x=0;x<_;x++)h+=p[x];for(let x=0;x<g.length;x++)t.update(h,i,g[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function Yb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function $b(n,e,t){const i=new WeakMap,r=new hn;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),g===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const M=new Float32Array(C*w*4*d),R=new oM(M,C,w,d);R.type=kr,R.needsUpdate=!0;const E=y*4;for(let L=0;L<d;L++){const O=h[L],z=x[L],j=v[L],q=C*w*4*L;for(let X=0;X<O.count;X++){const V=X*E;_===!0&&(r.fromBufferAttribute(O,X),M[q+V+0]=r.x,M[q+V+1]=r.y,M[q+V+2]=r.z,M[q+V+3]=0),g===!0&&(r.fromBufferAttribute(z,X),M[q+V+4]=r.x,M[q+V+5]=r.y,M[q+V+6]=r.z,M[q+V+7]=0),m===!0&&(r.fromBufferAttribute(j,X),M[q+V+8]=r.x,M[q+V+9]=r.y,M[q+V+10]=r.z,M[q+V+11]=j.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new _t(C,w)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function qb(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class vM extends Ln{constructor(e,t,i,r,s,o,a,l,u,c=Da){if(c!==Da&&c!==Za)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Da&&(i=Po),i===void 0&&c===Za&&(i=Ka),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ki,this.minFilter=l!==void 0?l:ki,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const xM=new Ln,Tv=new vM(1,1),yM=new oM,SM=new IA,MM=new mM,wv=[],Av=[],Cv=new Float32Array(16),Rv=new Float32Array(9),bv=new Float32Array(4);function cl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=wv[r];if(s===void 0&&(s=new Float32Array(r),wv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ln(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Id(n,e){let t=Av[e];t===void 0&&(t=new Int32Array(e),Av[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Kb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),ln(t,e)}}function Qb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),ln(t,e)}}function Jb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),ln(t,e)}}function eP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;bv.set(i),n.uniformMatrix2fv(this.addr,!1,bv),ln(t,i)}}function tP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;Rv.set(i),n.uniformMatrix3fv(this.addr,!1,Rv),ln(t,i)}}function nP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;Cv.set(i),n.uniformMatrix4fv(this.addr,!1,Cv),ln(t,i)}}function iP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),ln(t,e)}}function sP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),ln(t,e)}}function oP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),ln(t,e)}}function aP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function lP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),ln(t,e)}}function uP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),ln(t,e)}}function cP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),ln(t,e)}}function fP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Tv.compareFunction=iM,s=Tv):s=xM,t.setTexture2D(e||s,r)}function dP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||SM,r)}function hP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||MM,r)}function pP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||yM,r)}function mP(n){switch(n){case 5126:return Kb;case 35664:return Zb;case 35665:return Qb;case 35666:return Jb;case 35674:return eP;case 35675:return tP;case 35676:return nP;case 5124:case 35670:return iP;case 35667:case 35671:return rP;case 35668:case 35672:return sP;case 35669:case 35673:return oP;case 5125:return aP;case 36294:return lP;case 36295:return uP;case 36296:return cP;case 35678:case 36198:case 36298:case 36306:case 35682:return fP;case 35679:case 36299:case 36307:return dP;case 35680:case 36300:case 36308:case 36293:return hP;case 36289:case 36303:case 36311:case 36292:return pP}}function gP(n,e){n.uniform1fv(this.addr,e)}function _P(n,e){const t=cl(e,this.size,2);n.uniform2fv(this.addr,t)}function vP(n,e){const t=cl(e,this.size,3);n.uniform3fv(this.addr,t)}function xP(n,e){const t=cl(e,this.size,4);n.uniform4fv(this.addr,t)}function yP(n,e){const t=cl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function SP(n,e){const t=cl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function MP(n,e){const t=cl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function EP(n,e){n.uniform1iv(this.addr,e)}function TP(n,e){n.uniform2iv(this.addr,e)}function wP(n,e){n.uniform3iv(this.addr,e)}function AP(n,e){n.uniform4iv(this.addr,e)}function CP(n,e){n.uniform1uiv(this.addr,e)}function RP(n,e){n.uniform2uiv(this.addr,e)}function bP(n,e){n.uniform3uiv(this.addr,e)}function PP(n,e){n.uniform4uiv(this.addr,e)}function LP(n,e,t){const i=this.cache,r=e.length,s=Id(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||xM,s[o])}function DP(n,e,t){const i=this.cache,r=e.length,s=Id(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||SM,s[o])}function NP(n,e,t){const i=this.cache,r=e.length,s=Id(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||MM,s[o])}function IP(n,e,t){const i=this.cache,r=e.length,s=Id(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||yM,s[o])}function UP(n){switch(n){case 5126:return gP;case 35664:return _P;case 35665:return vP;case 35666:return xP;case 35674:return yP;case 35675:return SP;case 35676:return MP;case 5124:case 35670:return EP;case 35667:case 35671:return TP;case 35668:case 35672:return wP;case 35669:case 35673:return AP;case 5125:return CP;case 36294:return RP;case 36295:return bP;case 36296:return PP;case 35678:case 36198:case 36298:case 36306:case 35682:return LP;case 35679:case 36299:case 36307:return DP;case 35680:case 36300:case 36308:case 36293:return NP;case 36289:case 36303:case 36311:case 36292:return IP}}class FP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mP(t.type)}}class OP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=UP(t.type)}}class kP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Hh=/(\w+)(\])?(\[|\.)?/g;function Pv(n,e){n.seq.push(e),n.map[e.id]=e}function BP(n,e,t){const i=n.name,r=i.length;for(Hh.lastIndex=0;;){const s=Hh.exec(i),o=Hh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Pv(t,u===void 0?new FP(a,n,e):new OP(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new kP(a),Pv(t,d)),t=d}}}class gf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);BP(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Lv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const zP=37297;let HP=0;function VP(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function GP(n){const e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(n);let i;switch(e===t?i="":e===Jf&&t===Qf?i="LinearDisplayP3ToLinearSRGB":e===Qf&&t===Jf&&(i="LinearSRGBToLinearDisplayP3"),n){case Gs:case Dd:return[i,"LinearTransferOETF"];case ar:case i_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Dv(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+VP(n.getShaderSource(e),o)}else return r}function WP(n,e){const t=GP(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function XP(n,e){let t;switch(e){case aA:t="Linear";break;case lA:t="Reinhard";break;case uA:t="Cineon";break;case cA:t="ACESFilmic";break;case dA:t="AgX";break;case hA:t="Neutral";break;case fA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Uc=new Y;function jP(){yt.getLuminanceCoefficients(Uc);const n=Uc.x.toFixed(4),e=Uc.y.toFixed(4),t=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nl).join(`
`)}function $P(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qP(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Nl(n){return n!==""}function Nv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Iv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lm(n){return n.replace(KP,QP)}const ZP=new Map;function QP(n,e){let t=tt[e];if(t===void 0){const i=ZP.get(e);if(i!==void 0)t=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lm(t)}const JP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uv(n){return n.replace(JP,e2)}function e2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fv(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function t2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===WS?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Nw?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===br&&(e="SHADOWMAP_TYPE_VSM"),e}function n2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $a:case qa:e="ENVMAP_TYPE_CUBE";break;case Ld:e="ENVMAP_TYPE_CUBE_UV";break}return e}function i2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qa:e="ENVMAP_MODE_REFRACTION";break}return e}function r2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case XS:e="ENVMAP_BLENDING_MULTIPLY";break;case sA:e="ENVMAP_BLENDING_MIX";break;case oA:e="ENVMAP_BLENDING_ADD";break}return e}function s2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function o2(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=t2(t),u=n2(t),c=i2(t),d=r2(t),f=s2(t),p=YP(t),_=$P(s),g=r.createProgram();let m,h,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Nl).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Nl).join(`
`),h.length>0&&(h+=`
`)):(m=[Fv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nl).join(`
`),h=[Fv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bs?"#define TONE_MAPPING":"",t.toneMapping!==bs?tt.tonemapping_pars_fragment:"",t.toneMapping!==bs?XP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,WP("linearToOutputTexel",t.outputColorSpace),jP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nl).join(`
`)),o=Lm(o),o=Nv(o,t),o=Iv(o,t),a=Lm(a),a=Nv(a,t),a=Iv(a,t),o=Uv(o),a=Uv(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Z0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Z0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=x+m+o,y=x+h+a,C=Lv(r,r.VERTEX_SHADER,v),w=Lv(r,r.FRAGMENT_SHADER,y);r.attachShader(g,C),r.attachShader(g,w),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function M(L){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(g).trim(),z=r.getShaderInfoLog(C).trim(),j=r.getShaderInfoLog(w).trim();let q=!0,X=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,C,w);else{const V=Dv(r,C,"vertex"),N=Dv(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+V+`
`+N)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||j==="")&&(X=!1);X&&(L.diagnostics={runnable:q,programLog:O,vertexShader:{log:z,prefix:m},fragmentShader:{log:j,prefix:h}})}r.deleteShader(C),r.deleteShader(w),R=new gf(r,g),E=qP(r,g)}let R;this.getUniforms=function(){return R===void 0&&M(this),R};let E;this.getAttributes=function(){return E===void 0&&M(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(g,zP)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HP++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=w,this}let a2=0;class l2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new u2(e),t.set(e,i)),i}}class u2{constructor(e){this.id=a2++,this.code=e,this.usedTimes=0}}function c2(n,e,t,i,r,s,o){const a=new lM,l=new l2,u=new Set,c=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,S,L,O,z){const j=O.fog,q=z.geometry,X=E.isMeshStandardMaterial?O.environment:null,V=(E.isMeshStandardMaterial?t:e).get(E.envMap||X),N=V&&V.mapping===Ld?V.image.height:null,K=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const b=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ie=b!==void 0?b.length:0;let Ee=0;q.morphAttributes.position!==void 0&&(Ee=1),q.morphAttributes.normal!==void 0&&(Ee=2),q.morphAttributes.color!==void 0&&(Ee=3);let $e,$,re,me;if(K){const Ze=cr[K];$e=Ze.vertexShader,$=Ze.fragmentShader}else $e=E.vertexShader,$=E.fragmentShader,l.update(E),re=l.getVertexShaderID(E),me=l.getFragmentShaderID(E);const fe=n.getRenderTarget(),Te=z.isInstancedMesh===!0,Ie=z.isBatchedMesh===!0,qe=!!E.map,et=!!E.matcap,D=!!V,he=!!E.aoMap,_e=!!E.lightMap,we=!!E.bumpMap,ae=!!E.normalMap,k=!!E.displacementMap,Ae=!!E.emissiveMap,Ue=!!E.metalnessMap,P=!!E.roughnessMap,T=E.anisotropy>0,G=E.clearcoat>0,ee=E.dispersion>0,ne=E.iridescence>0,Z=E.sheen>0,Ce=E.transmission>0,se=T&&!!E.anisotropyMap,le=G&&!!E.clearcoatMap,Ne=G&&!!E.clearcoatNormalMap,oe=G&&!!E.clearcoatRoughnessMap,ve=ne&&!!E.iridescenceMap,Oe=ne&&!!E.iridescenceThicknessMap,Be=Z&&!!E.sheenColorMap,xe=Z&&!!E.sheenRoughnessMap,Ve=!!E.specularMap,je=!!E.specularColorMap,Qe=!!E.specularIntensityMap,U=Ce&&!!E.transmissionMap,Q=Ce&&!!E.thicknessMap,J=!!E.gradientMap,te=!!E.alphaMap,ce=E.alphaTest>0,ge=!!E.alphaHash,Ye=!!E.extensions;let dt=bs;E.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(dt=n.toneMapping);const rt={shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:$e,fragmentShader:$,defines:E.defines,customVertexShaderID:re,customFragmentShaderID:me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&z._colorsTexture!==null,instancing:Te,instancingColor:Te&&z.instanceColor!==null,instancingMorph:Te&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Gs,alphaToCoverage:!!E.alphaToCoverage,map:qe,matcap:et,envMap:D,envMapMode:D&&V.mapping,envMapCubeUVHeight:N,aoMap:he,lightMap:_e,bumpMap:we,normalMap:ae,displacementMap:f&&k,emissiveMap:Ae,normalMapObjectSpace:ae&&E.normalMapType===vA,normalMapTangentSpace:ae&&E.normalMapType===_A,metalnessMap:Ue,roughnessMap:P,anisotropy:T,anisotropyMap:se,clearcoat:G,clearcoatMap:le,clearcoatNormalMap:Ne,clearcoatRoughnessMap:oe,dispersion:ee,iridescence:ne,iridescenceMap:ve,iridescenceThicknessMap:Oe,sheen:Z,sheenColorMap:Be,sheenRoughnessMap:xe,specularMap:Ve,specularColorMap:je,specularIntensityMap:Qe,transmission:Ce,transmissionMap:U,thicknessMap:Q,gradientMap:J,opaque:E.transparent===!1&&E.blending===La&&E.alphaToCoverage===!1,alphaMap:te,alphaTest:ce,alphaHash:ge,combine:E.combine,mapUv:qe&&g(E.map.channel),aoMapUv:he&&g(E.aoMap.channel),lightMapUv:_e&&g(E.lightMap.channel),bumpMapUv:we&&g(E.bumpMap.channel),normalMapUv:ae&&g(E.normalMap.channel),displacementMapUv:k&&g(E.displacementMap.channel),emissiveMapUv:Ae&&g(E.emissiveMap.channel),metalnessMapUv:Ue&&g(E.metalnessMap.channel),roughnessMapUv:P&&g(E.roughnessMap.channel),anisotropyMapUv:se&&g(E.anisotropyMap.channel),clearcoatMapUv:le&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(E.sheenRoughnessMap.channel),specularMapUv:Ve&&g(E.specularMap.channel),specularColorMapUv:je&&g(E.specularColorMap.channel),specularIntensityMapUv:Qe&&g(E.specularIntensityMap.channel),transmissionMapUv:U&&g(E.transmissionMap.channel),thicknessMapUv:Q&&g(E.thicknessMap.channel),alphaMapUv:te&&g(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ae||T),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!q.attributes.uv&&(qe||te),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:z.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Ee,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,decodeVideoTexture:qe&&E.map.isVideoTexture===!0&&yt.getTransfer(E.map.colorSpace)===Dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ir,flipSided:E.side===ei,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ye&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&E.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return rt.vertexUv1s=u.has(1),rt.vertexUv2s=u.has(2),rt.vertexUv3s=u.has(3),u.clear(),rt}function h(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)S.push(L),S.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(x(S,E),v(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function x(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function v(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),E.push(a.mask)}function y(E){const S=_[E.type];let L;if(S){const O=cr[S];L=jA.clone(O.uniforms)}else L=E.uniforms;return L}function C(E,S){let L;for(let O=0,z=c.length;O<z;O++){const j=c[O];if(j.cacheKey===S){L=j,++L.usedTimes;break}}return L===void 0&&(L=new o2(n,S,E,s),c.push(L)),L}function w(E){if(--E.usedTimes===0){const S=c.indexOf(E);c[S]=c[c.length-1],c.pop(),E.destroy()}}function M(E){l.remove(E)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:C,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:R}}function f2(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function d2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ov(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function kv(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,_,g,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=g,h.group=m),e++,h}function a(d,f,p,_,g,m){const h=o(d,f,p,_,g,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,_,g,m){const h=o(d,f,p,_,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(d,f){t.length>1&&t.sort(d||d2),i.length>1&&i.sort(f||Ov),r.length>1&&r.sort(f||Ov)}function c(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function h2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new kv,n.set(i,[o])):r>=s.length?(o=new kv,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function p2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new mt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function m2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let g2=0;function _2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function v2(n){const e=new p2,t=m2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Y);const r=new Y,s=new Jt,o=new Jt;function a(u){let c=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,g=0,m=0,h=0,x=0,v=0,y=0,C=0,w=0,M=0;u.sort(_2);for(let E=0,S=u.length;E<S;E++){const L=u[E],O=L.color,z=L.intensity,j=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=O.r*z,d+=O.g*z,f+=O.b*z;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],z);M++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const V=L.shadow,N=t.get(L);N.shadowIntensity=V.intensity,N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize=V.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=L.shadow.matrix,x++}i.directional[p]=X,p++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(O).multiplyScalar(z),X.distance=j,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[g]=X;const V=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,V.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[g]=V.matrix,L.castShadow){const N=t.get(L);N.shadowIntensity=V.intensity,N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize=V.mapSize,i.spotShadow[g]=N,i.spotShadowMap[g]=q,y++}g++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(O).multiplyScalar(z),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=X,m++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const V=L.shadow,N=t.get(L);N.shadowIntensity=V.intensity,N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize=V.mapSize,N.shadowCameraNear=V.camera.near,N.shadowCameraFar=V.camera.far,i.pointShadow[_]=N,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=L.shadow.matrix,v++}i.point[_]=X,_++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(z),X.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[h]=X,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==h||R.numDirectionalShadows!==x||R.numPointShadows!==v||R.numSpotShadows!==y||R.numSpotMaps!==C||R.numLightProbes!==M)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=M,R.directionalLength=p,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=h,R.numDirectionalShadows=x,R.numPointShadows=v,R.numSpotShadows=y,R.numSpotMaps=C,R.numLightProbes=M,i.version=g2++)}function l(u,c){let d=0,f=0,p=0,_=0,g=0;const m=c.matrixWorldInverse;for(let h=0,x=u.length;h<x;h++){const v=u[h];if(v.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const y=i.hemi[g];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function Bv(n){const e=new v2(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function x2(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Bv(n),e.set(r,[a])):s>=o.length?(a=new Bv(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class y2 extends $u{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class S2 extends $u{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const M2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E2=`uniform sampler2D shadow_pass;
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
}`;function T2(n,e,t){let i=new gM;const r=new _t,s=new _t,o=new hn,a=new y2({depthPacking:gA}),l=new S2,u={},c=t.maxTextureSize,d={[Us]:ei,[ei]:Us,[Ir]:Ir},f=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:M2,fragmentShader:E2}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Qr;_.setAttribute("position",new yr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new mr(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=WS;let h=this.type;this.render=function(w,M,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Rs),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=h!==br&&this.type===br,j=h===br&&this.type!==br;for(let q=0,X=w.length;q<X;q++){const V=w[q],N=V.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const K=N.getFrameExtents();if(r.multiply(K),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/K.x),r.x=s.x*K.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/K.y),r.y=s.y*K.y,N.mapSize.y=s.y)),N.map===null||z===!0||j===!0){const ie=this.type!==br?{minFilter:ki,magFilter:ki}:{};N.map!==null&&N.map.dispose(),N.map=new Lo(r.x,r.y,ie),N.map.texture.name=V.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const b=N.getViewportCount();for(let ie=0;ie<b;ie++){const Ee=N.getViewport(ie);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),O.viewport(o),N.updateMatrices(V,ie),i=N.getFrustum(),y(M,R,N.camera,V,this.type)}N.isPointLightShadow!==!0&&this.type===br&&x(N,R),N.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(E,S,L)};function x(w,M){const R=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Lo(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(M,null,R,f,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(M,null,R,p,g,null)}function v(w,M,R,E){let S=null;const L=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)S=L;else if(S=R.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const O=S.uuid,z=M.uuid;let j=u[O];j===void 0&&(j={},u[O]=j);let q=j[z];q===void 0&&(q=S.clone(),j[z]=q,M.addEventListener("dispose",C)),S=q}if(S.visible=M.visible,S.wireframe=M.wireframe,E===br?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:d[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=n.properties.get(S);O.light=R}return S}function y(w,M,R,E,S){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===br)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const z=e.update(w),j=w.material;if(Array.isArray(j)){const q=z.groups;for(let X=0,V=q.length;X<V;X++){const N=q[X],K=j[N.materialIndex];if(K&&K.visible){const b=v(w,K,E,S);w.onBeforeShadow(n,w,M,R,z,b,N),n.renderBufferDirect(R,null,z,b,w,N),w.onAfterShadow(n,w,M,R,z,b,N)}}}else if(j.visible){const q=v(w,j,E,S);w.onBeforeShadow(n,w,M,R,z,q,null),n.renderBufferDirect(R,null,z,q,w,null),w.onAfterShadow(n,w,M,R,z,q,null)}}const O=w.children;for(let z=0,j=O.length;z<j;z++)y(O[z],M,R,E,S)}function C(w){w.target.removeEventListener("dispose",C);for(const R in u){const E=u[R],S=w.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function w2(n){function e(){let U=!1;const Q=new hn;let J=null;const te=new hn(0,0,0,0);return{setMask:function(ce){J!==ce&&!U&&(n.colorMask(ce,ce,ce,ce),J=ce)},setLocked:function(ce){U=ce},setClear:function(ce,ge,Ye,dt,rt){rt===!0&&(ce*=dt,ge*=dt,Ye*=dt),Q.set(ce,ge,Ye,dt),te.equals(Q)===!1&&(n.clearColor(ce,ge,Ye,dt),te.copy(Q))},reset:function(){U=!1,J=null,te.set(-1,0,0,0)}}}function t(){let U=!1,Q=null,J=null,te=null;return{setTest:function(ce){ce?me(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(ce){Q!==ce&&!U&&(n.depthMask(ce),Q=ce)},setFunc:function(ce){if(J!==ce){switch(ce){case Qw:n.depthFunc(n.NEVER);break;case Jw:n.depthFunc(n.ALWAYS);break;case eA:n.depthFunc(n.LESS);break;case Kf:n.depthFunc(n.LEQUAL);break;case tA:n.depthFunc(n.EQUAL);break;case nA:n.depthFunc(n.GEQUAL);break;case iA:n.depthFunc(n.GREATER);break;case rA:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=ce}},setLocked:function(ce){U=ce},setClear:function(ce){te!==ce&&(n.clearDepth(ce),te=ce)},reset:function(){U=!1,Q=null,J=null,te=null}}}function i(){let U=!1,Q=null,J=null,te=null,ce=null,ge=null,Ye=null,dt=null,rt=null;return{setTest:function(Ze){U||(Ze?me(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(Ze){Q!==Ze&&!U&&(n.stencilMask(Ze),Q=Ze)},setFunc:function(Ze,Ge,Fe){(J!==Ze||te!==Ge||ce!==Fe)&&(n.stencilFunc(Ze,Ge,Fe),J=Ze,te=Ge,ce=Fe)},setOp:function(Ze,Ge,Fe){(ge!==Ze||Ye!==Ge||dt!==Fe)&&(n.stencilOp(Ze,Ge,Fe),ge=Ze,Ye=Ge,dt=Fe)},setLocked:function(Ze){U=Ze},setClear:function(Ze){rt!==Ze&&(n.clearStencil(Ze),rt=Ze)},reset:function(){U=!1,Q=null,J=null,te=null,ce=null,ge=null,Ye=null,dt=null,rt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,h=null,x=null,v=null,y=null,C=null,w=new mt(0,0,0),M=0,R=!1,E=null,S=null,L=null,O=null,z=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,X=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=X>=2);let N=null,K={};const b=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),Ee=new hn().fromArray(b),$e=new hn().fromArray(ie);function $(U,Q,J,te){const ce=new Uint8Array(4),ge=n.createTexture();n.bindTexture(U,ge),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<J;Ye++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(Q+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return ge}const re={};re[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(n.DEPTH_TEST),s.setFunc(Kf),we(!1),ae(j0),me(n.CULL_FACE),he(Rs);function me(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function fe(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Te(U,Q){return c[U]!==Q?(n.bindFramebuffer(U,Q),c[U]=Q,U===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=Q),U===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ie(U,Q){let J=f,te=!1;if(U){J=d.get(Q),J===void 0&&(J=[],d.set(Q,J));const ce=U.textures;if(J.length!==ce.length||J[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,Ye=ce.length;ge<Ye;ge++)J[ge]=n.COLOR_ATTACHMENT0+ge;J.length=ce.length,te=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,te=!0);te&&n.drawBuffers(J)}function qe(U){return p!==U?(n.useProgram(U),p=U,!0):!1}const et={[oo]:n.FUNC_ADD,[Uw]:n.FUNC_SUBTRACT,[Fw]:n.FUNC_REVERSE_SUBTRACT};et[Ow]=n.MIN,et[kw]=n.MAX;const D={[Bw]:n.ZERO,[zw]:n.ONE,[Hw]:n.SRC_COLOR,[Qp]:n.SRC_ALPHA,[Yw]:n.SRC_ALPHA_SATURATE,[Xw]:n.DST_COLOR,[Gw]:n.DST_ALPHA,[Vw]:n.ONE_MINUS_SRC_COLOR,[Jp]:n.ONE_MINUS_SRC_ALPHA,[jw]:n.ONE_MINUS_DST_COLOR,[Ww]:n.ONE_MINUS_DST_ALPHA,[$w]:n.CONSTANT_COLOR,[qw]:n.ONE_MINUS_CONSTANT_COLOR,[Kw]:n.CONSTANT_ALPHA,[Zw]:n.ONE_MINUS_CONSTANT_ALPHA};function he(U,Q,J,te,ce,ge,Ye,dt,rt,Ze){if(U===Rs){_===!0&&(fe(n.BLEND),_=!1);return}if(_===!1&&(me(n.BLEND),_=!0),U!==Iw){if(U!==g||Ze!==R){if((m!==oo||v!==oo)&&(n.blendEquation(n.FUNC_ADD),m=oo,v=oo),Ze)switch(U){case La:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zp:n.blendFunc(n.ONE,n.ONE);break;case Y0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case La:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Y0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}h=null,x=null,y=null,C=null,w.set(0,0,0),M=0,g=U,R=Ze}return}ce=ce||Q,ge=ge||J,Ye=Ye||te,(Q!==m||ce!==v)&&(n.blendEquationSeparate(et[Q],et[ce]),m=Q,v=ce),(J!==h||te!==x||ge!==y||Ye!==C)&&(n.blendFuncSeparate(D[J],D[te],D[ge],D[Ye]),h=J,x=te,y=ge,C=Ye),(dt.equals(w)===!1||rt!==M)&&(n.blendColor(dt.r,dt.g,dt.b,rt),w.copy(dt),M=rt),g=U,R=!1}function _e(U,Q){U.side===Ir?fe(n.CULL_FACE):me(n.CULL_FACE);let J=U.side===ei;Q&&(J=!J),we(J),U.blending===La&&U.transparent===!1?he(Rs):he(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const te=U.stencilWrite;o.setTest(te),te&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function we(U){E!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),E=U)}function ae(U){U!==Lw?(me(n.CULL_FACE),U!==S&&(U===j0?n.cullFace(n.BACK):U===Dw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),S=U}function k(U){U!==L&&(q&&n.lineWidth(U),L=U)}function Ae(U,Q,J){U?(me(n.POLYGON_OFFSET_FILL),(O!==Q||z!==J)&&(n.polygonOffset(Q,J),O=Q,z=J)):fe(n.POLYGON_OFFSET_FILL)}function Ue(U){U?me(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function P(U){U===void 0&&(U=n.TEXTURE0+j-1),N!==U&&(n.activeTexture(U),N=U)}function T(U,Q,J){J===void 0&&(N===null?J=n.TEXTURE0+j-1:J=N);let te=K[J];te===void 0&&(te={type:void 0,texture:void 0},K[J]=te),(te.type!==U||te.texture!==Q)&&(N!==J&&(n.activeTexture(J),N=J),n.bindTexture(U,Q||re[U]),te.type=U,te.texture=Q)}function G(){const U=K[N];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(U){Ee.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ee.copy(U))}function xe(U){$e.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),$e.copy(U))}function Ve(U,Q){let J=l.get(Q);J===void 0&&(J=new WeakMap,l.set(Q,J));let te=J.get(U);te===void 0&&(te=n.getUniformBlockIndex(Q,U.name),J.set(U,te))}function je(U,Q){const te=l.get(Q).get(U);a.get(Q)!==te&&(n.uniformBlockBinding(Q,te,U.__bindingPointIndex),a.set(Q,te))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},N=null,K={},c={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,h=null,x=null,v=null,y=null,C=null,w=new mt(0,0,0),M=0,R=!1,E=null,S=null,L=null,O=null,z=null,Ee.set(0,0,n.canvas.width,n.canvas.height),$e.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:me,disable:fe,bindFramebuffer:Te,drawBuffers:Ie,useProgram:qe,setBlending:he,setMaterial:_e,setFlipSided:we,setCullFace:ae,setLineWidth:k,setPolygonOffset:Ae,setScissorTest:Ue,activeTexture:P,bindTexture:T,unbindTexture:G,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:ve,texImage3D:Oe,updateUBOMapping:Ve,uniformBlockBinding:je,texStorage2D:Ne,texStorage3D:oe,texSubImage2D:Z,texSubImage3D:Ce,compressedTexSubImage2D:se,compressedTexSubImage3D:le,scissor:Be,viewport:xe,reset:Qe}}function zv(n,e,t,i){const r=A2(i);switch(t){case KS:return n*e;case QS:return n*e;case JS:return n*e*2;case eM:return n*e/r.components*r.byteLength;case e_:return n*e/r.components*r.byteLength;case tM:return n*e*2/r.components*r.byteLength;case t_:return n*e*2/r.components*r.byteLength;case ZS:return n*e*3/r.components*r.byteLength;case tr:return n*e*4/r.components*r.byteLength;case n_:return n*e*4/r.components*r.byteLength;case ff:case df:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hf:case pf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sm:case am:return Math.max(n,16)*Math.max(e,8)/4;case rm:case om:return Math.max(n,8)*Math.max(e,8)/2;case lm:case um:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case cm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dm:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case hm:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pm:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case mm:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gm:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _m:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case vm:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xm:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ym:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Sm:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Mm:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Em:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Tm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case mf:case wm:case Am:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nM:case Cm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Rm:case bm:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function A2(n){switch(n){case Yr:case YS:return{byteLength:1,components:1};case Cu:case $S:case Wu:return{byteLength:2,components:1};case Qg:case Jg:return{byteLength:2,components:4};case Po:case Zg:case kr:return{byteLength:4,components:1};case qS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function C2(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new _t,c=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,T){return p?new OffscreenCanvas(P,T):Ru("canvas")}function g(P,T,G){let ee=1;const ne=Ue(P);if((ne.width>G||ne.height>G)&&(ee=G/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Z=Math.floor(ee*ne.width),Ce=Math.floor(ee*ne.height);d===void 0&&(d=_(Z,Ce));const se=T?_(Z,Ce):d;return se.width=Z,se.height=Ce,se.getContext("2d").drawImage(P,0,0,Z,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Z+"x"+Ce+")."),se}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==ki&&P.minFilter!==er}function h(P){n.generateMipmap(P)}function x(P,T,G,ee,ne=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=T;if(T===n.RED&&(G===n.FLOAT&&(Z=n.R32F),G===n.HALF_FLOAT&&(Z=n.R16F),G===n.UNSIGNED_BYTE&&(Z=n.R8)),T===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.R8UI),G===n.UNSIGNED_SHORT&&(Z=n.R16UI),G===n.UNSIGNED_INT&&(Z=n.R32UI),G===n.BYTE&&(Z=n.R8I),G===n.SHORT&&(Z=n.R16I),G===n.INT&&(Z=n.R32I)),T===n.RG&&(G===n.FLOAT&&(Z=n.RG32F),G===n.HALF_FLOAT&&(Z=n.RG16F),G===n.UNSIGNED_BYTE&&(Z=n.RG8)),T===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.RG8UI),G===n.UNSIGNED_SHORT&&(Z=n.RG16UI),G===n.UNSIGNED_INT&&(Z=n.RG32UI),G===n.BYTE&&(Z=n.RG8I),G===n.SHORT&&(Z=n.RG16I),G===n.INT&&(Z=n.RG32I)),T===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),T===n.RGBA){const Ce=ne?Zf:yt.getTransfer(ee);G===n.FLOAT&&(Z=n.RGBA32F),G===n.HALF_FLOAT&&(Z=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Z=Ce===Dt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(P,T){let G;return P?T===null||T===Po||T===Ka?G=n.DEPTH24_STENCIL8:T===kr?G=n.DEPTH32F_STENCIL8:T===Cu&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Po||T===Ka?G=n.DEPTH_COMPONENT24:T===kr?G=n.DEPTH_COMPONENT32F:T===Cu&&(G=n.DEPTH_COMPONENT16),G}function y(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==ki&&P.minFilter!==er?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function C(P){const T=P.target;T.removeEventListener("dispose",C),M(T),T.isVideoTexture&&c.delete(T)}function w(P){const T=P.target;T.removeEventListener("dispose",w),E(T)}function M(P){const T=i.get(P);if(T.__webglInit===void 0)return;const G=P.source,ee=f.get(G);if(ee){const ne=ee[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(P),Object.keys(ee).length===0&&f.delete(G)}i.remove(P)}function R(P){const T=i.get(P);n.deleteTexture(T.__webglTexture);const G=P.source,ee=f.get(G);delete ee[T.__cacheKey],o.memory.textures--}function E(P){const T=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(T.__webglFramebuffer[ee]))for(let ne=0;ne<T.__webglFramebuffer[ee].length;ne++)n.deleteFramebuffer(T.__webglFramebuffer[ee][ne]);else n.deleteFramebuffer(T.__webglFramebuffer[ee]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let ee=0;ee<T.__webglFramebuffer.length;ee++)n.deleteFramebuffer(T.__webglFramebuffer[ee]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ee=0;ee<T.__webglColorRenderbuffer.length;ee++)T.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ee]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=P.textures;for(let ee=0,ne=G.length;ee<ne;ee++){const Z=i.get(G[ee]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(G[ee])}i.remove(P)}let S=0;function L(){S=0}function O(){const P=S;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),S+=1,P}function z(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function j(P,T){const G=i.get(P);if(P.isVideoTexture&&k(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$e(G,P,T);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+T)}function q(P,T){const G=i.get(P);if(P.version>0&&G.__version!==P.version){$e(G,P,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+T)}function X(P,T){const G=i.get(P);if(P.version>0&&G.__version!==P.version){$e(G,P,T);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+T)}function V(P,T){const G=i.get(P);if(P.version>0&&G.__version!==P.version){$(G,P,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+T)}const N={[nm]:n.REPEAT,[fo]:n.CLAMP_TO_EDGE,[im]:n.MIRRORED_REPEAT},K={[ki]:n.NEAREST,[pA]:n.NEAREST_MIPMAP_NEAREST,[pc]:n.NEAREST_MIPMAP_LINEAR,[er]:n.LINEAR,[mh]:n.LINEAR_MIPMAP_NEAREST,[ho]:n.LINEAR_MIPMAP_LINEAR},b={[xA]:n.NEVER,[wA]:n.ALWAYS,[yA]:n.LESS,[iM]:n.LEQUAL,[SA]:n.EQUAL,[TA]:n.GEQUAL,[MA]:n.GREATER,[EA]:n.NOTEQUAL};function ie(P,T){if(T.type===kr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===er||T.magFilter===mh||T.magFilter===pc||T.magFilter===ho||T.minFilter===er||T.minFilter===mh||T.minFilter===pc||T.minFilter===ho)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,N[T.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,N[T.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,N[T.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,K[T.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,K[T.minFilter]),T.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,b[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ki||T.minFilter!==pc&&T.minFilter!==ho||T.type===kr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Ee(P,T){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",C));const ee=T.source;let ne=f.get(ee);ne===void 0&&(ne={},f.set(ee,ne));const Z=z(T);if(Z!==P.__cacheKey){ne[Z]===void 0&&(ne[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ne[Z].usedTimes++;const Ce=ne[P.__cacheKey];Ce!==void 0&&(ne[P.__cacheKey].usedTimes--,Ce.usedTimes===0&&R(T)),P.__cacheKey=Z,P.__webglTexture=ne[Z].texture}return G}function $e(P,T,G){let ee=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=n.TEXTURE_3D);const ne=Ee(P,T),Z=T.source;t.bindTexture(ee,P.__webglTexture,n.TEXTURE0+G);const Ce=i.get(Z);if(Z.version!==Ce.__version||ne===!0){t.activeTexture(n.TEXTURE0+G);const se=yt.getPrimaries(yt.workingColorSpace),le=T.colorSpace===ds?null:yt.getPrimaries(T.colorSpace),Ne=T.colorSpace===ds||se===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let oe=g(T.image,!1,r.maxTextureSize);oe=Ae(T,oe);const ve=s.convert(T.format,T.colorSpace),Oe=s.convert(T.type);let Be=x(T.internalFormat,ve,Oe,T.colorSpace,T.isVideoTexture);ie(ee,T);let xe;const Ve=T.mipmaps,je=T.isVideoTexture!==!0,Qe=Ce.__version===void 0||ne===!0,U=Z.dataReady,Q=y(T,oe);if(T.isDepthTexture)Be=v(T.format===Za,T.type),Qe&&(je?t.texStorage2D(n.TEXTURE_2D,1,Be,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Be,oe.width,oe.height,0,ve,Oe,null));else if(T.isDataTexture)if(Ve.length>0){je&&Qe&&t.texStorage2D(n.TEXTURE_2D,Q,Be,Ve[0].width,Ve[0].height);for(let J=0,te=Ve.length;J<te;J++)xe=Ve[J],je?U&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,xe.width,xe.height,ve,Oe,xe.data):t.texImage2D(n.TEXTURE_2D,J,Be,xe.width,xe.height,0,ve,Oe,xe.data);T.generateMipmaps=!1}else je?(Qe&&t.texStorage2D(n.TEXTURE_2D,Q,Be,oe.width,oe.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,ve,Oe,oe.data)):t.texImage2D(n.TEXTURE_2D,0,Be,oe.width,oe.height,0,ve,Oe,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){je&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Q,Be,Ve[0].width,Ve[0].height,oe.depth);for(let J=0,te=Ve.length;J<te;J++)if(xe=Ve[J],T.format!==tr)if(ve!==null)if(je){if(U)if(T.layerUpdates.size>0){const ce=zv(xe.width,xe.height,T.format,T.type);for(const ge of T.layerUpdates){const Ye=xe.data.subarray(ge*ce/xe.data.BYTES_PER_ELEMENT,(ge+1)*ce/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,ge,xe.width,xe.height,1,ve,Ye,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,xe.width,xe.height,oe.depth,ve,xe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Be,xe.width,xe.height,oe.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,xe.width,xe.height,oe.depth,ve,Oe,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Be,xe.width,xe.height,oe.depth,0,ve,Oe,xe.data)}else{je&&Qe&&t.texStorage2D(n.TEXTURE_2D,Q,Be,Ve[0].width,Ve[0].height);for(let J=0,te=Ve.length;J<te;J++)xe=Ve[J],T.format!==tr?ve!==null?je?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,xe.width,xe.height,ve,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Be,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?U&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,xe.width,xe.height,ve,Oe,xe.data):t.texImage2D(n.TEXTURE_2D,J,Be,xe.width,xe.height,0,ve,Oe,xe.data)}else if(T.isDataArrayTexture)if(je){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Q,Be,oe.width,oe.height,oe.depth),U)if(T.layerUpdates.size>0){const J=zv(oe.width,oe.height,T.format,T.type);for(const te of T.layerUpdates){const ce=oe.data.subarray(te*J/oe.data.BYTES_PER_ELEMENT,(te+1)*J/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,oe.width,oe.height,1,ve,Oe,ce)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ve,Oe,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,oe.width,oe.height,oe.depth,0,ve,Oe,oe.data);else if(T.isData3DTexture)je?(Qe&&t.texStorage3D(n.TEXTURE_3D,Q,Be,oe.width,oe.height,oe.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ve,Oe,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Be,oe.width,oe.height,oe.depth,0,ve,Oe,oe.data);else if(T.isFramebufferTexture){if(Qe)if(je)t.texStorage2D(n.TEXTURE_2D,Q,Be,oe.width,oe.height);else{let J=oe.width,te=oe.height;for(let ce=0;ce<Q;ce++)t.texImage2D(n.TEXTURE_2D,ce,Be,J,te,0,ve,Oe,null),J>>=1,te>>=1}}else if(Ve.length>0){if(je&&Qe){const J=Ue(Ve[0]);t.texStorage2D(n.TEXTURE_2D,Q,Be,J.width,J.height)}for(let J=0,te=Ve.length;J<te;J++)xe=Ve[J],je?U&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ve,Oe,xe):t.texImage2D(n.TEXTURE_2D,J,Be,ve,Oe,xe);T.generateMipmaps=!1}else if(je){if(Qe){const J=Ue(oe);t.texStorage2D(n.TEXTURE_2D,Q,Be,J.width,J.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Oe,oe)}else t.texImage2D(n.TEXTURE_2D,0,Be,ve,Oe,oe);m(T)&&h(ee),Ce.__version=Z.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function $(P,T,G){if(T.image.length!==6)return;const ee=Ee(P,T),ne=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);const Z=i.get(ne);if(ne.version!==Z.__version||ee===!0){t.activeTexture(n.TEXTURE0+G);const Ce=yt.getPrimaries(yt.workingColorSpace),se=T.colorSpace===ds?null:yt.getPrimaries(T.colorSpace),le=T.colorSpace===ds||Ce===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Ne=T.isCompressedTexture||T.image[0].isCompressedTexture,oe=T.image[0]&&T.image[0].isDataTexture,ve=[];for(let te=0;te<6;te++)!Ne&&!oe?ve[te]=g(T.image[te],!0,r.maxCubemapSize):ve[te]=oe?T.image[te].image:T.image[te],ve[te]=Ae(T,ve[te]);const Oe=ve[0],Be=s.convert(T.format,T.colorSpace),xe=s.convert(T.type),Ve=x(T.internalFormat,Be,xe,T.colorSpace),je=T.isVideoTexture!==!0,Qe=Z.__version===void 0||ee===!0,U=ne.dataReady;let Q=y(T,Oe);ie(n.TEXTURE_CUBE_MAP,T);let J;if(Ne){je&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Q,Ve,Oe.width,Oe.height);for(let te=0;te<6;te++){J=ve[te].mipmaps;for(let ce=0;ce<J.length;ce++){const ge=J[ce];T.format!==tr?Be!==null?je?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce,0,0,ge.width,ge.height,Be,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce,Ve,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce,0,0,ge.width,ge.height,Be,xe,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce,Ve,ge.width,ge.height,0,Be,xe,ge.data)}}}else{if(J=T.mipmaps,je&&Qe){J.length>0&&Q++;const te=Ue(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Q,Ve,te.width,te.height)}for(let te=0;te<6;te++)if(oe){je?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ve[te].width,ve[te].height,Be,xe,ve[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ve,ve[te].width,ve[te].height,0,Be,xe,ve[te].data);for(let ce=0;ce<J.length;ce++){const Ye=J[ce].image[te].image;je?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce+1,0,0,Ye.width,Ye.height,Be,xe,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce+1,Ve,Ye.width,Ye.height,0,Be,xe,Ye.data)}}else{je?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Be,xe,ve[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ve,Be,xe,ve[te]);for(let ce=0;ce<J.length;ce++){const ge=J[ce];je?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce+1,0,0,Be,xe,ge.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce+1,Ve,Be,xe,ge.image[te])}}}m(T)&&h(n.TEXTURE_CUBE_MAP),Z.__version=ne.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function re(P,T,G,ee,ne,Z){const Ce=s.convert(G.format,G.colorSpace),se=s.convert(G.type),le=x(G.internalFormat,Ce,se,G.colorSpace);if(!i.get(T).__hasExternalTextures){const oe=Math.max(1,T.width>>Z),ve=Math.max(1,T.height>>Z);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,Z,le,oe,ve,T.depth,0,Ce,se,null):t.texImage2D(ne,Z,le,oe,ve,0,Ce,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),ae(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,ne,i.get(G).__webglTexture,0,we(T)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,ne,i.get(G).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(P,T,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),T.depthBuffer){const ee=T.depthTexture,ne=ee&&ee.isDepthTexture?ee.type:null,Z=v(T.stencilBuffer,ne),Ce=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=we(T);ae(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,Z,T.width,T.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,Z,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Z,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,P)}else{const ee=T.textures;for(let ne=0;ne<ee.length;ne++){const Z=ee[ne],Ce=s.convert(Z.format,Z.colorSpace),se=s.convert(Z.type),le=x(Z.internalFormat,Ce,se,Z.colorSpace),Ne=we(T);G&&ae(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,le,T.width,T.height):ae(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,le,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,le,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j(T.depthTexture,0);const ee=i.get(T.depthTexture).__webglTexture,ne=we(T);if(T.depthTexture.format===Da)ae(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(T.depthTexture.format===Za)ae(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Te(P){const T=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const ee=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ee){const ne=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ee.removeEventListener("dispose",ne)};ee.addEventListener("dispose",ne),T.__depthDisposeCallback=ne}T.__boundDepthTexture=ee}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");fe(T.__webglFramebuffer,P)}else if(G){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]===void 0)T.__webglDepthbuffer[ee]=n.createRenderbuffer(),me(T.__webglDepthbuffer[ee],P,!1);else{const ne=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),me(T.__webglDepthbuffer,P,!1);else{const ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ne)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(P,T,G){const ee=i.get(P);T!==void 0&&re(ee.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Te(P)}function qe(P){const T=P.texture,G=i.get(P),ee=i.get(T);P.addEventListener("dispose",w);const ne=P.textures,Z=P.isWebGLCubeRenderTarget===!0,Ce=ne.length>1;if(Ce||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=T.version,o.memory.textures++),Z){G.__webglFramebuffer=[];for(let se=0;se<6;se++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[se]=[];for(let le=0;le<T.mipmaps.length;le++)G.__webglFramebuffer[se][le]=n.createFramebuffer()}else G.__webglFramebuffer[se]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let se=0;se<T.mipmaps.length;se++)G.__webglFramebuffer[se]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let se=0,le=ne.length;se<le;se++){const Ne=i.get(ne[se]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&ae(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let se=0;se<ne.length;se++){const le=ne[se];G.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[se]);const Ne=s.convert(le.format,le.colorSpace),oe=s.convert(le.type),ve=x(le.internalFormat,Ne,oe,le.colorSpace,P.isXRRenderTarget===!0),Oe=we(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,ve,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,G.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),me(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),ie(n.TEXTURE_CUBE_MAP,T);for(let se=0;se<6;se++)if(T.mipmaps&&T.mipmaps.length>0)for(let le=0;le<T.mipmaps.length;le++)re(G.__webglFramebuffer[se][le],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,le);else re(G.__webglFramebuffer[se],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(T)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let se=0,le=ne.length;se<le;se++){const Ne=ne[se],oe=i.get(Ne);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),ie(n.TEXTURE_2D,Ne),re(G.__webglFramebuffer,P,Ne,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,0),m(Ne)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(se=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,ee.__webglTexture),ie(se,T),T.mipmaps&&T.mipmaps.length>0)for(let le=0;le<T.mipmaps.length;le++)re(G.__webglFramebuffer[le],P,T,n.COLOR_ATTACHMENT0,se,le);else re(G.__webglFramebuffer,P,T,n.COLOR_ATTACHMENT0,se,0);m(T)&&h(se),t.unbindTexture()}P.depthBuffer&&Te(P)}function et(P){const T=P.textures;for(let G=0,ee=T.length;G<ee;G++){const ne=T[G];if(m(ne)){const Z=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ce=i.get(ne).__webglTexture;t.bindTexture(Z,Ce),h(Z),t.unbindTexture()}}}const D=[],he=[];function _e(P){if(P.samples>0){if(ae(P)===!1){const T=P.textures,G=P.width,ee=P.height;let ne=n.COLOR_BUFFER_BIT;const Z=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(P),se=T.length>1;if(se)for(let le=0;le<T.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let le=0;le<T.length;le++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[le]);const Ne=i.get(T[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ne,0)}n.blitFramebuffer(0,0,G,ee,0,0,G,ee,ne,n.NEAREST),l===!0&&(D.length=0,he.length=0,D.push(n.COLOR_ATTACHMENT0+le),P.depthBuffer&&P.resolveDepthBuffer===!1&&(D.push(Z),he.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,he)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let le=0;le<T.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[le]);const Ne=i.get(T[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function we(P){return Math.min(r.maxSamples,P.samples)}function ae(P){const T=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function k(P){const T=o.render.frame;c.get(P)!==T&&(c.set(P,T),P.update())}function Ae(P,T){const G=P.colorSpace,ee=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Gs&&G!==ds&&(yt.getTransfer(G)===Dt?(ee!==tr||ne!==Yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}function Ue(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=L,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=Ie,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=re,this.useMultisampledRTT=ae}function R2(n,e){function t(i,r=ds){let s;const o=yt.getTransfer(r);if(i===Yr)return n.UNSIGNED_BYTE;if(i===Qg)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Jg)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qS)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===YS)return n.BYTE;if(i===$S)return n.SHORT;if(i===Cu)return n.UNSIGNED_SHORT;if(i===Zg)return n.INT;if(i===Po)return n.UNSIGNED_INT;if(i===kr)return n.FLOAT;if(i===Wu)return n.HALF_FLOAT;if(i===KS)return n.ALPHA;if(i===ZS)return n.RGB;if(i===tr)return n.RGBA;if(i===QS)return n.LUMINANCE;if(i===JS)return n.LUMINANCE_ALPHA;if(i===Da)return n.DEPTH_COMPONENT;if(i===Za)return n.DEPTH_STENCIL;if(i===eM)return n.RED;if(i===e_)return n.RED_INTEGER;if(i===tM)return n.RG;if(i===t_)return n.RG_INTEGER;if(i===n_)return n.RGBA_INTEGER;if(i===ff||i===df||i===hf||i===pf)if(o===Dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ff)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===df)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ff)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===df)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rm||i===sm||i===om||i===am)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===rm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===om)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===am)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lm||i===um||i===cm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lm||i===um)return o===Dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===cm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fm||i===dm||i===hm||i===pm||i===mm||i===gm||i===_m||i===vm||i===xm||i===ym||i===Sm||i===Mm||i===Em||i===Tm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_m)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ym)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Em)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mf||i===wm||i===Am)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===mf)return o===Dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wm)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Am)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nM||i===Cm||i===Rm||i===bm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===mf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Cm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ka?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class b2 extends Ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fc extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P2={type:"move"};class Vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),h=this._getHandJoint(u,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(P2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const L2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D2=`
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

}`;class N2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ln,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Mr({vertexShader:L2,fragmentShader:D2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mr(new Ja(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I2 extends ul{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,_=null;const g=new N2,m=t.getContextAttributes();let h=null,x=null;const v=[],y=[],C=new _t;let w=null;const M=new Ii;M.layers.enable(1),M.viewport=new hn;const R=new Ii;R.layers.enable(2),R.viewport=new hn;const E=[M,R],S=new b2;S.layers.enable(1),S.layers.enable(2);let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let re=v[$];return re===void 0&&(re=new Vh,v[$]=re),re.getTargetRaySpace()},this.getControllerGrip=function($){let re=v[$];return re===void 0&&(re=new Vh,v[$]=re),re.getGripSpace()},this.getHand=function($){let re=v[$];return re===void 0&&(re=new Vh,v[$]=re),re.getHandSpace()};function z($){const re=y.indexOf($.inputSource);if(re===-1)return;const me=v[re];me!==void 0&&(me.update($.inputSource,$.frame,u||o),me.dispatchEvent({type:$.type,data:$.inputSource}))}function j(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",q);for(let $=0;$<v.length;$++){const re=y[$];re!==null&&(y[$]=null,v[$].disconnect(re))}L=null,O=null,g.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,x=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",j),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Lo(p.framebufferWidth,p.framebufferHeight,{format:tr,type:Yr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,me=null,fe=null;m.depth&&(fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=m.stencil?Za:Da,me=m.stencil?Ka:Po);const Te={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Te),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Lo(f.textureWidth,f.textureHeight,{format:tr,type:Yr,depthTexture:new vM(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q($){for(let re=0;re<$.removed.length;re++){const me=$.removed[re],fe=y.indexOf(me);fe>=0&&(y[fe]=null,v[fe].disconnect(me))}for(let re=0;re<$.added.length;re++){const me=$.added[re];let fe=y.indexOf(me);if(fe===-1){for(let Ie=0;Ie<v.length;Ie++)if(Ie>=y.length){y.push(me),fe=Ie;break}else if(y[Ie]===null){y[Ie]=me,fe=Ie;break}if(fe===-1)break}const Te=v[fe];Te&&Te.connect(me)}}const X=new Y,V=new Y;function N($,re,me){X.setFromMatrixPosition(re.matrixWorld),V.setFromMatrixPosition(me.matrixWorld);const fe=X.distanceTo(V),Te=re.projectionMatrix.elements,Ie=me.projectionMatrix.elements,qe=Te[14]/(Te[10]-1),et=Te[14]/(Te[10]+1),D=(Te[9]+1)/Te[5],he=(Te[9]-1)/Te[5],_e=(Te[8]-1)/Te[0],we=(Ie[8]+1)/Ie[0],ae=qe*_e,k=qe*we,Ae=fe/(-_e+we),Ue=Ae*-_e;if(re.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ue),$.translateZ(Ae),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Te[10]===-1)$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const P=qe+Ae,T=et+Ae,G=ae-Ue,ee=k+(fe-Ue),ne=D*et/T*P,Z=he*et/T*P;$.projectionMatrix.makePerspective(G,ee,ne,Z,P,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function K($,re){re===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(re.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let re=$.near,me=$.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(me=g.depthFar)),S.near=R.near=M.near=re,S.far=R.far=M.far=me,(L!==S.near||O!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,O=S.far);const fe=$.parent,Te=S.cameras;K(S,fe);for(let Ie=0;Ie<Te.length;Ie++)K(Te[Ie],fe);Te.length===2?N(S,M,R):S.projectionMatrix.copy(M.projectionMatrix),b($,S,fe)};function b($,re,me){me===null?$.matrix.copy(re.matrixWorld):($.matrix.copy(me.matrixWorld),$.matrix.invert(),$.matrix.multiply(re.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Pm*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let ie=null;function Ee($,re){if(c=re.getViewerPose(u||o),_=re,c!==null){const me=c.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let fe=!1;me.length!==S.cameras.length&&(S.cameras.length=0,fe=!0);for(let Ie=0;Ie<me.length;Ie++){const qe=me[Ie];let et=null;if(p!==null)et=p.getViewport(qe);else{const he=d.getViewSubImage(f,qe);et=he.viewport,Ie===0&&(e.setRenderTargetTextures(x,he.colorTexture,f.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(x))}let D=E[Ie];D===void 0&&(D=new Ii,D.layers.enable(Ie),D.viewport=new hn,E[Ie]=D),D.matrix.fromArray(qe.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(qe.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(et.x,et.y,et.width,et.height),Ie===0&&(S.matrix.copy(D.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),fe===!0&&S.cameras.push(D)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ie=d.getDepthInformation(me[0]);Ie&&Ie.isValid&&Ie.texture&&g.init(e,Ie,r.renderState)}}for(let me=0;me<v.length;me++){const fe=y[me],Te=v[me];fe!==null&&Te!==void 0&&Te.update(fe,re,u||o)}ie&&ie($,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),_=null}const $e=new _M;$e.setAnimationLoop(Ee),this.setAnimationLoop=function($){ie=$},this.dispose=function(){}}}const Ks=new $r,U2=new Jt;function F2(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,hM(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,x,v,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,x,v):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ei&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ei&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=e.get(h),v=x.envMap,y=x.envMapRotation;v&&(m.envMap.value=v,Ks.copy(y),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),m.envMapRotation.value.setFromMatrix4(U2.makeRotationFromEuler(Ks)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=v*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ei&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const x=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function O2(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const y=v.program;i.uniformBlockBinding(x,y)}function u(x,v){let y=r[x.id];y===void 0&&(_(x),y=c(x),r[x.id]=y,x.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(x,C);const w=e.render.frame;s[x.id]!==w&&(f(x),s[x.id]=w)}function c(x){const v=d();x.__bindingPointIndex=v;const y=n.createBuffer(),C=x.__size,w=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=r[x.id],y=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let w=0,M=y.length;w<M;w++){const R=Array.isArray(y[w])?y[w]:[y[w]];for(let E=0,S=R.length;E<S;E++){const L=R[E];if(p(L,w,E,C)===!0){const O=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let q=0;q<z.length;q++){const X=z[q],V=g(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,O+j,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,j),j+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,v,y,C){const w=x.value,M=v+"_"+y;if(C[M]===void 0)return typeof w=="number"||typeof w=="boolean"?C[M]=w:C[M]=w.clone(),!0;{const R=C[M];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return C[M]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function _(x){const v=x.uniforms;let y=0;const C=16;for(let M=0,R=v.length;M<R;M++){const E=Array.isArray(v[M])?v[M]:[v[M]];for(let S=0,L=E.length;S<L;S++){const O=E[S],z=Array.isArray(O.value)?O.value:[O.value];for(let j=0,q=z.length;j<q;j++){const X=z[j],V=g(X),N=y%C,K=N%V.boundary,b=N+K;y+=K,b!==0&&C-b<V.storage&&(y+=C-b),O.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=V.storage}}}const w=y%C;return w>0&&(y+=C-w),x.__size=y,x.__cache={},this}function g(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class k2{constructor(e={}){const{canvas:t=CA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const h=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ar,this.toneMapping=bs,this.toneMappingExposure=1;const v=this;let y=!1,C=0,w=0,M=null,R=-1,E=null;const S=new hn,L=new hn;let O=null;const z=new mt(0);let j=0,q=t.width,X=t.height,V=1,N=null,K=null;const b=new hn(0,0,q,X),ie=new hn(0,0,q,X);let Ee=!1;const $e=new gM;let $=!1,re=!1;const me=new Jt,fe=new Y,Te=new hn,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function et(){return M===null?V:1}let D=i;function he(A,F){return t.getContext(A,F)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kg}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",ce,!1),D===null){const F="webgl2";if(D=he(F,A),D===null)throw he(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _e,we,ae,k,Ae,Ue,P,T,G,ee,ne,Z,Ce,se,le,Ne,oe,ve,Oe,Be,xe,Ve,je,Qe;function U(){_e=new Wb(D),_e.init(),Ve=new R2(D,_e),we=new Ob(D,_e,e,Ve),ae=new w2(D),k=new Yb(D),Ae=new f2,Ue=new C2(D,_e,ae,Ae,we,Ve,k),P=new Bb(v),T=new Gb(v),G=new JA(D),je=new Ub(D,G),ee=new Xb(D,G,k,je),ne=new qb(D,ee,G,k),Oe=new $b(D,we,Ue),Ne=new kb(Ae),Z=new c2(v,P,T,_e,we,je,Ne),Ce=new F2(v,Ae),se=new h2,le=new x2(_e),ve=new Ib(v,P,T,ae,ne,f,l),oe=new T2(v,ne,we),Qe=new O2(D,k,we,ae),Be=new Fb(D,_e,k),xe=new jb(D,_e,k),k.programs=Z.programs,v.capabilities=we,v.extensions=_e,v.properties=Ae,v.renderLists=se,v.shadowMap=oe,v.state=ae,v.info=k}U();const Q=new I2(v,D);this.xr=Q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=_e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(q,X,!1))},this.getSize=function(A){return A.set(q,X)},this.setSize=function(A,F,W=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,X=F,t.width=Math.floor(A*V),t.height=Math.floor(F*V),W===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(q*V,X*V).floor()},this.setDrawingBufferSize=function(A,F,W){q=A,X=F,V=W,t.width=Math.floor(A*W),t.height=Math.floor(F*W),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(b)},this.setViewport=function(A,F,W,H){A.isVector4?b.set(A.x,A.y,A.z,A.w):b.set(A,F,W,H),ae.viewport(S.copy(b).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,F,W,H){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,F,W,H),ae.scissor(L.copy(ie).multiplyScalar(V).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(A){ae.setScissorTest(Ee=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(A=!0,F=!0,W=!0){let H=0;if(A){let B=!1;if(M!==null){const ue=M.texture.format;B=ue===n_||ue===t_||ue===e_}if(B){const ue=M.texture.type,Se=ue===Yr||ue===Po||ue===Cu||ue===Ka||ue===Qg||ue===Jg,be=ve.getClearColor(),ye=ve.getClearAlpha(),Re=be.r,He=be.g,ke=be.b;Se?(p[0]=Re,p[1]=He,p[2]=ke,p[3]=ye,D.clearBufferuiv(D.COLOR,0,p)):(_[0]=Re,_[1]=He,_[2]=ke,_[3]=ye,D.clearBufferiv(D.COLOR,0,_))}else H|=D.COLOR_BUFFER_BIT}F&&(H|=D.DEPTH_BUFFER_BIT),W&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),se.dispose(),le.dispose(),Ae.dispose(),P.dispose(),T.dispose(),ne.dispose(),je.dispose(),Qe.dispose(),Z.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Fe),Q.removeEventListener("sessionend",Je),pe.stop()};function J(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=k.autoReset,F=oe.enabled,W=oe.autoUpdate,H=oe.needsUpdate,B=oe.type;U(),k.autoReset=A,oe.enabled=F,oe.autoUpdate=W,oe.needsUpdate=H,oe.type=B}function ce(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ge(A){const F=A.target;F.removeEventListener("dispose",ge),Ye(F)}function Ye(A){dt(A),Ae.remove(A)}function dt(A){const F=Ae.get(A).programs;F!==void 0&&(F.forEach(function(W){Z.releaseProgram(W)}),A.isShaderMaterial&&Z.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,W,H,B,ue){F===null&&(F=Ie);const Se=B.isMesh&&B.matrixWorld.determinant()<0,be=Rt(A,F,W,H,B);ae.setMaterial(H,Se);let ye=W.index,Re=1;if(H.wireframe===!0){if(ye=ee.getWireframeAttribute(W),ye===void 0)return;Re=2}const He=W.drawRange,ke=W.attributes.position;let ht=He.start*Re,Tt=(He.start+He.count)*Re;ue!==null&&(ht=Math.max(ht,ue.start*Re),Tt=Math.min(Tt,(ue.start+ue.count)*Re)),ye!==null?(ht=Math.max(ht,0),Tt=Math.min(Tt,ye.count)):ke!=null&&(ht=Math.max(ht,0),Tt=Math.min(Tt,ke.count));const pt=Tt-ht;if(pt<0||pt===1/0)return;je.setup(B,H,be,W,ye);let tn,ct=Be;if(ye!==null&&(tn=G.get(ye),ct=xe,ct.setIndex(tn)),B.isMesh)H.wireframe===!0?(ae.setLineWidth(H.wireframeLinewidth*et()),ct.setMode(D.LINES)):ct.setMode(D.TRIANGLES);else if(B.isLine){let De=H.linewidth;De===void 0&&(De=1),ae.setLineWidth(De*et()),B.isLineSegments?ct.setMode(D.LINES):B.isLineLoop?ct.setMode(D.LINE_LOOP):ct.setMode(D.LINE_STRIP)}else B.isPoints?ct.setMode(D.POINTS):B.isSprite&&ct.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ct.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))ct.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const De=B._multiDrawStarts,gn=B._multiDrawCounts,vt=B._multiDrawCount,Xi=ye?G.get(ye).bytesPerElement:1,ko=Ae.get(H).currentProgram.getUniforms();for(let li=0;li<vt;li++)ko.setValue(D,"_gl_DrawID",li),ct.render(De[li]/Xi,gn[li])}else if(B.isInstancedMesh)ct.renderInstances(ht,pt,B.count);else if(W.isInstancedBufferGeometry){const De=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,gn=Math.min(W.instanceCount,De);ct.renderInstances(ht,pt,gn)}else ct.render(ht,pt)};function rt(A,F,W){A.transparent===!0&&A.side===Ir&&A.forceSinglePass===!1?(A.side=ei,A.needsUpdate=!0,Ct(A,F,W),A.side=Us,A.needsUpdate=!0,Ct(A,F,W),A.side=Ir):Ct(A,F,W)}this.compile=function(A,F,W=null){W===null&&(W=A),m=le.get(W),m.init(F),x.push(m),W.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),A!==W&&A.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const H=new Set;return A.traverse(function(B){const ue=B.material;if(ue)if(Array.isArray(ue))for(let Se=0;Se<ue.length;Se++){const be=ue[Se];rt(be,W,B),H.add(be)}else rt(ue,W,B),H.add(ue)}),x.pop(),m=null,H},this.compileAsync=function(A,F,W=null){const H=this.compile(A,F,W);return new Promise(B=>{function ue(){if(H.forEach(function(Se){Ae.get(Se).currentProgram.isReady()&&H.delete(Se)}),H.size===0){B(A);return}setTimeout(ue,10)}_e.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ze=null;function Ge(A){Ze&&Ze(A)}function Fe(){pe.stop()}function Je(){pe.start()}const pe=new _M;pe.setAnimationLoop(Ge),typeof self<"u"&&pe.setContext(self),this.setAnimationLoop=function(A){Ze=A,Q.setAnimationLoop(A),A===null?pe.stop():pe.start()},Q.addEventListener("sessionstart",Fe),Q.addEventListener("sessionend",Je),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(F),F=Q.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,F,M),m=le.get(A,x.length),m.init(F),x.push(m),me.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$e.setFromProjectionMatrix(me),re=this.localClippingEnabled,$=Ne.init(this.clippingPlanes,re),g=se.get(A,h.length),g.init(),h.push(g),Q.enabled===!0&&Q.isPresenting===!0){const ue=v.xr.getDepthSensingMesh();ue!==null&&Xe(ue,F,-1/0,v.sortObjects)}Xe(A,F,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(N,K),qe=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,qe&&ve.addToRenderList(g,A),this.info.render.frame++,$===!0&&Ne.beginShadows();const W=m.state.shadowsArray;oe.render(W,A,F),$===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,B=g.transmissive;if(m.setupLights(),F.isArrayCamera){const ue=F.cameras;if(B.length>0)for(let Se=0,be=ue.length;Se<be;Se++){const ye=ue[Se];Ke(H,B,A,ye)}qe&&ve.render(A);for(let Se=0,be=ue.length;Se<be;Se++){const ye=ue[Se];ze(g,A,ye,ye.viewport)}}else B.length>0&&Ke(H,B,A,F),qe&&ve.render(A),ze(g,A,F);M!==null&&(Ue.updateMultisampleRenderTarget(M),Ue.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(v,A,F),je.resetDefaultState(),R=-1,E=null,x.pop(),x.length>0?(m=x[x.length-1],$===!0&&Ne.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function Xe(A,F,W,H){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$e.intersectsSprite(A)){H&&Te.setFromMatrixPosition(A.matrixWorld).applyMatrix4(me);const Se=ne.update(A),be=A.material;be.visible&&g.push(A,Se,be,W,Te.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$e.intersectsObject(A))){const Se=ne.update(A),be=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Te.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Te.copy(Se.boundingSphere.center)),Te.applyMatrix4(A.matrixWorld).applyMatrix4(me)),Array.isArray(be)){const ye=Se.groups;for(let Re=0,He=ye.length;Re<He;Re++){const ke=ye[Re],ht=be[ke.materialIndex];ht&&ht.visible&&g.push(A,Se,ht,W,Te.z,ke)}}else be.visible&&g.push(A,Se,be,W,Te.z,null)}}const ue=A.children;for(let Se=0,be=ue.length;Se<be;Se++)Xe(ue[Se],F,W,H)}function ze(A,F,W,H){const B=A.opaque,ue=A.transmissive,Se=A.transparent;m.setupLightsView(W),$===!0&&Ne.setGlobalState(v.clippingPlanes,W),H&&ae.viewport(S.copy(H)),B.length>0&&Ft(B,F,W),ue.length>0&&Ft(ue,F,W),Se.length>0&&Ft(Se,F,W),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Ke(A,F,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Lo(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float")?Wu:Yr,minFilter:ho,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const ue=m.state.transmissionRenderTarget[H.id],Se=H.viewport||S;ue.setSize(Se.z,Se.w);const be=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(z),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),qe&&ve.render(W);const ye=v.toneMapping;v.toneMapping=bs;const Re=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),$===!0&&Ne.setGlobalState(v.clippingPlanes,H),Ft(A,W,H),Ue.updateMultisampleRenderTarget(ue),Ue.updateRenderTargetMipmap(ue),_e.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let ke=0,ht=F.length;ke<ht;ke++){const Tt=F[ke],pt=Tt.object,tn=Tt.geometry,ct=Tt.material,De=Tt.group;if(ct.side===Ir&&pt.layers.test(H.layers)){const gn=ct.side;ct.side=ei,ct.needsUpdate=!0,ot(pt,W,H,tn,ct,De),ct.side=gn,ct.needsUpdate=!0,He=!0}}He===!0&&(Ue.updateMultisampleRenderTarget(ue),Ue.updateRenderTargetMipmap(ue))}v.setRenderTarget(be),v.setClearColor(z,j),Re!==void 0&&(H.viewport=Re),v.toneMapping=ye}function Ft(A,F,W){const H=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ue=A.length;B<ue;B++){const Se=A[B],be=Se.object,ye=Se.geometry,Re=H===null?Se.material:H,He=Se.group;be.layers.test(W.layers)&&ot(be,F,W,ye,Re,He)}}function ot(A,F,W,H,B,ue){A.onBeforeRender(v,F,W,H,B,ue),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(v,F,W,H,A,ue),B.transparent===!0&&B.side===Ir&&B.forceSinglePass===!1?(B.side=ei,B.needsUpdate=!0,v.renderBufferDirect(W,F,H,B,A,ue),B.side=Us,B.needsUpdate=!0,v.renderBufferDirect(W,F,H,B,A,ue),B.side=Ir):v.renderBufferDirect(W,F,H,B,A,ue),A.onAfterRender(v,F,W,H,B,ue)}function Ct(A,F,W){F.isScene!==!0&&(F=Ie);const H=Ae.get(A),B=m.state.lights,ue=m.state.shadowsArray,Se=B.state.version,be=Z.getParameters(A,B.state,ue,F,W),ye=Z.getProgramCacheKey(be);let Re=H.programs;H.environment=A.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(A.isMeshStandardMaterial?T:P).get(A.envMap||H.environment),H.envMapRotation=H.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Re===void 0&&(A.addEventListener("dispose",ge),Re=new Map,H.programs=Re);let He=Re.get(ye);if(He!==void 0){if(H.currentProgram===He&&H.lightsStateVersion===Se)return Pt(A,be),He}else be.uniforms=Z.getUniforms(A),A.onBeforeCompile(be,v),He=Z.acquireProgram(be,ye),Re.set(ye,He),H.uniforms=be.uniforms;const ke=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=Ne.uniform),Pt(A,be),H.needsLights=ai(A),H.lightsStateVersion=Se,H.needsLights&&(ke.ambientLightColor.value=B.state.ambient,ke.lightProbe.value=B.state.probe,ke.directionalLights.value=B.state.directional,ke.directionalLightShadows.value=B.state.directionalShadow,ke.spotLights.value=B.state.spot,ke.spotLightShadows.value=B.state.spotShadow,ke.rectAreaLights.value=B.state.rectArea,ke.ltc_1.value=B.state.rectAreaLTC1,ke.ltc_2.value=B.state.rectAreaLTC2,ke.pointLights.value=B.state.point,ke.pointLightShadows.value=B.state.pointShadow,ke.hemisphereLights.value=B.state.hemi,ke.directionalShadowMap.value=B.state.directionalShadowMap,ke.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ke.spotShadowMap.value=B.state.spotShadowMap,ke.spotLightMatrix.value=B.state.spotLightMatrix,ke.spotLightMap.value=B.state.spotLightMap,ke.pointShadowMap.value=B.state.pointShadowMap,ke.pointShadowMatrix.value=B.state.pointShadowMatrix),H.currentProgram=He,H.uniformsList=null,He}function en(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=gf.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Pt(A,F){const W=Ae.get(A);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Rt(A,F,W,H,B){F.isScene!==!0&&(F=Ie),Ue.resetTextureUnits();const ue=F.fog,Se=H.isMeshStandardMaterial?F.environment:null,be=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Gs,ye=(H.isMeshStandardMaterial?T:P).get(H.envMap||Se),Re=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,He=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ke=!!W.morphAttributes.position,ht=!!W.morphAttributes.normal,Tt=!!W.morphAttributes.color;let pt=bs;H.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(pt=v.toneMapping);const tn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ct=tn!==void 0?tn.length:0,De=Ae.get(H),gn=m.state.lights;if($===!0&&(re===!0||A!==E)){const bi=A===E&&H.id===R;Ne.setState(H,A,bi)}let vt=!1;H.version===De.__version?(De.needsLights&&De.lightsStateVersion!==gn.state.version||De.outputColorSpace!==be||B.isBatchedMesh&&De.batching===!1||!B.isBatchedMesh&&De.batching===!0||B.isBatchedMesh&&De.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&De.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&De.instancing===!1||!B.isInstancedMesh&&De.instancing===!0||B.isSkinnedMesh&&De.skinning===!1||!B.isSkinnedMesh&&De.skinning===!0||B.isInstancedMesh&&De.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&De.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&De.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&De.instancingMorph===!1&&B.morphTexture!==null||De.envMap!==ye||H.fog===!0&&De.fog!==ue||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Ne.numPlanes||De.numIntersection!==Ne.numIntersection)||De.vertexAlphas!==Re||De.vertexTangents!==He||De.morphTargets!==ke||De.morphNormals!==ht||De.morphColors!==Tt||De.toneMapping!==pt||De.morphTargetsCount!==ct)&&(vt=!0):(vt=!0,De.__version=H.version);let Xi=De.currentProgram;vt===!0&&(Xi=Ct(H,F,B));let ko=!1,li=!1,Bd=!1;const $t=Xi.getUniforms(),Jr=De.uniforms;if(ae.useProgram(Xi.program)&&(ko=!0,li=!0,Bd=!0),H.id!==R&&(R=H.id,li=!0),ko||E!==A){$t.setValue(D,"projectionMatrix",A.projectionMatrix),$t.setValue(D,"viewMatrix",A.matrixWorldInverse);const bi=$t.map.cameraPosition;bi!==void 0&&bi.setValue(D,fe.setFromMatrixPosition(A.matrixWorld)),we.logarithmicDepthBuffer&&$t.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&$t.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,li=!0,Bd=!0)}if(B.isSkinnedMesh){$t.setOptional(D,B,"bindMatrix"),$t.setOptional(D,B,"bindMatrixInverse");const bi=B.skeleton;bi&&(bi.boneTexture===null&&bi.computeBoneTexture(),$t.setValue(D,"boneTexture",bi.boneTexture,Ue))}B.isBatchedMesh&&($t.setOptional(D,B,"batchingTexture"),$t.setValue(D,"batchingTexture",B._matricesTexture,Ue),$t.setOptional(D,B,"batchingIdTexture"),$t.setValue(D,"batchingIdTexture",B._indirectTexture,Ue),$t.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&$t.setValue(D,"batchingColorTexture",B._colorsTexture,Ue));const zd=W.morphAttributes;if((zd.position!==void 0||zd.normal!==void 0||zd.color!==void 0)&&Oe.update(B,W,Xi),(li||De.receiveShadow!==B.receiveShadow)&&(De.receiveShadow=B.receiveShadow,$t.setValue(D,"receiveShadow",B.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Jr.envMap.value=ye,Jr.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(Jr.envMapIntensity.value=F.environmentIntensity),li&&($t.setValue(D,"toneMappingExposure",v.toneMappingExposure),De.needsLights&&St(Jr,Bd),ue&&H.fog===!0&&Ce.refreshFogUniforms(Jr,ue),Ce.refreshMaterialUniforms(Jr,H,V,X,m.state.transmissionRenderTarget[A.id]),gf.upload(D,en(De),Jr,Ue)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(gf.upload(D,en(De),Jr,Ue),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&$t.setValue(D,"center",B.center),$t.setValue(D,"modelViewMatrix",B.modelViewMatrix),$t.setValue(D,"normalMatrix",B.normalMatrix),$t.setValue(D,"modelMatrix",B.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const bi=H.uniformsGroups;for(let Hd=0,X1=bi.length;Hd<X1;Hd++){const N_=bi[Hd];Qe.update(N_,Xi),Qe.bind(N_,Xi)}}return Xi}function St(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function ai(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,F,W){Ae.get(A.texture).__webglTexture=F,Ae.get(A.depthTexture).__webglTexture=W;const H=Ae.get(A);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=W===void 0,H.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const W=Ae.get(A);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,W=0){M=A,C=F,w=W;let H=!0,B=null,ue=!1,Se=!1;if(A){const ye=Ae.get(A);if(ye.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(ye.__webglFramebuffer===void 0)Ue.setupRenderTarget(A);else if(ye.__hasExternalTextures)Ue.rebindTextures(A,Ae.get(A.texture).__webglTexture,Ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ke=A.depthTexture;if(ye.__boundDepthTexture!==ke){if(ke!==null&&Ae.has(ke)&&(A.width!==ke.image.width||A.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(A)}}const Re=A.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Se=!0);const He=Ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[F])?B=He[F][W]:B=He[F],ue=!0):A.samples>0&&Ue.useMultisampledRTT(A)===!1?B=Ae.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?B=He[W]:B=He,S.copy(A.viewport),L.copy(A.scissor),O=A.scissorTest}else S.copy(b).multiplyScalar(V).floor(),L.copy(ie).multiplyScalar(V).floor(),O=Ee;if(ae.bindFramebuffer(D.FRAMEBUFFER,B)&&H&&ae.drawBuffers(A,B),ae.viewport(S),ae.scissor(L),ae.setScissorTest(O),ue){const ye=Ae.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,ye.__webglTexture,W)}else if(Se){const ye=Ae.get(A.texture),Re=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.__webglTexture,W||0,Re)}R=-1},this.readRenderTargetPixels=function(A,F,W,H,B,ue,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){ae.bindFramebuffer(D.FRAMEBUFFER,be);try{const ye=A.texture,Re=ye.format,He=ye.type;if(!we.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-H&&W>=0&&W<=A.height-B&&D.readPixels(F,W,H,B,Ve.convert(Re),Ve.convert(He),ue)}finally{const ye=M!==null?Ae.get(M).__webglFramebuffer:null;ae.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(A,F,W,H,B,ue,Se){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){ae.bindFramebuffer(D.FRAMEBUFFER,be);try{const ye=A.texture,Re=ye.format,He=ye.type;if(!we.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-H&&W>=0&&W<=A.height-B){const ke=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ke),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(F,W,H,B,Ve.convert(Re),Ve.convert(He),0),D.flush();const ht=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await RA(D,ht,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,ke),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue)}finally{D.deleteBuffer(ke),D.deleteSync(ht)}return ue}}finally{const ye=M!==null?Ae.get(M).__webglFramebuffer:null;ae.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(A,F=null,W=0){A.isTexture!==!0&&(Zl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);const H=Math.pow(2,-W),B=Math.floor(A.image.width*H),ue=Math.floor(A.image.height*H),Se=F!==null?F.x:0,be=F!==null?F.y:0;Ue.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,Se,be,B,ue),ae.unbindTexture()},this.copyTextureToTexture=function(A,F,W=null,H=null,B=0){A.isTexture!==!0&&(Zl("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1],F=arguments[2],B=arguments[3]||0,W=null);let ue,Se,be,ye,Re,He;W!==null?(ue=W.max.x-W.min.x,Se=W.max.y-W.min.y,be=W.min.x,ye=W.min.y):(ue=A.image.width,Se=A.image.height,be=0,ye=0),H!==null?(Re=H.x,He=H.y):(Re=0,He=0);const ke=Ve.convert(F.format),ht=Ve.convert(F.type);Ue.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Tt=D.getParameter(D.UNPACK_ROW_LENGTH),pt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),tn=D.getParameter(D.UNPACK_SKIP_PIXELS),ct=D.getParameter(D.UNPACK_SKIP_ROWS),De=D.getParameter(D.UNPACK_SKIP_IMAGES),gn=A.isCompressedTexture?A.mipmaps[B]:A.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,gn.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gn.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,be),D.pixelStorei(D.UNPACK_SKIP_ROWS,ye),A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,Re,He,ue,Se,ke,ht,gn.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,Re,He,gn.width,gn.height,ke,gn.data):D.texSubImage2D(D.TEXTURE_2D,B,Re,He,ue,Se,ke,ht,gn),D.pixelStorei(D.UNPACK_ROW_LENGTH,Tt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,tn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ct),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De),B===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ae.unbindTexture()},this.copyTextureToTexture3D=function(A,F,W=null,H=null,B=0){A.isTexture!==!0&&(Zl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,H=arguments[1]||null,A=arguments[2],F=arguments[3],B=arguments[4]||0);let ue,Se,be,ye,Re,He,ke,ht,Tt;const pt=A.isCompressedTexture?A.mipmaps[B]:A.image;W!==null?(ue=W.max.x-W.min.x,Se=W.max.y-W.min.y,be=W.max.z-W.min.z,ye=W.min.x,Re=W.min.y,He=W.min.z):(ue=pt.width,Se=pt.height,be=pt.depth,ye=0,Re=0,He=0),H!==null?(ke=H.x,ht=H.y,Tt=H.z):(ke=0,ht=0,Tt=0);const tn=Ve.convert(F.format),ct=Ve.convert(F.type);let De;if(F.isData3DTexture)Ue.setTexture3D(F,0),De=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Ue.setTexture2DArray(F,0),De=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const gn=D.getParameter(D.UNPACK_ROW_LENGTH),vt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Xi=D.getParameter(D.UNPACK_SKIP_PIXELS),ko=D.getParameter(D.UNPACK_SKIP_ROWS),li=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,Re),D.pixelStorei(D.UNPACK_SKIP_IMAGES,He),A.isDataTexture||A.isData3DTexture?D.texSubImage3D(De,B,ke,ht,Tt,ue,Se,be,tn,ct,pt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(De,B,ke,ht,Tt,ue,Se,be,tn,pt.data):D.texSubImage3D(De,B,ke,ht,Tt,ue,Se,be,tn,ct,pt),D.pixelStorei(D.UNPACK_ROW_LENGTH,gn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,vt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xi),D.pixelStorei(D.UNPACK_SKIP_ROWS,ko),D.pixelStorei(D.UNPACK_SKIP_IMAGES,li),B===0&&F.generateMipmaps&&D.generateMipmap(De),ae.unbindTexture()},this.initRenderTarget=function(A){Ae.get(A).__webglFramebuffer===void 0&&Ue.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ue.setTextureCube(A,0):A.isData3DTexture?Ue.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ue.setTexture2DArray(A,0):Ue.setTexture2D(A,0),ae.unbindTexture()},this.resetState=function(){C=0,w=0,M=null,ae.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Br}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===i_?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===Dd?"display-p3":"srgb"}}class B2 extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentIntensity=1,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class z2 extends $u{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const td=new Y,nd=new Y,Hv=new Jt,wl=new aM,Oc=new Nd,Gh=new Y,Vv=new Y;class H2 extends ti{constructor(e=new Qr,t=new z2){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)td.fromBufferAttribute(t,r-1),nd.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=td.distanceTo(nd);e.setAttribute("lineDistance",new xi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oc.copy(i.boundingSphere),Oc.applyMatrix4(r),Oc.radius+=s,e.ray.intersectsSphere(Oc)===!1)return;Hv.copy(r).invert(),wl.copy(e.ray).applyMatrix4(Hv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),_=Math.min(c.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=u){const h=c.getX(g),x=c.getX(g+1),v=kc(this,e,wl,l,h,x);v&&t.push(v)}if(this.isLineLoop){const g=c.getX(_-1),m=c.getX(p),h=kc(this,e,wl,l,g,m);h&&t.push(h)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=u){const h=kc(this,e,wl,l,g,g+1);h&&t.push(h)}if(this.isLineLoop){const g=kc(this,e,wl,l,_-1,p);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function kc(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(td.fromBufferAttribute(o,r),nd.fromBufferAttribute(o,s),t.distanceSqToSegment(td,nd,Gh,Vv)>i)return;Gh.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Gh);if(!(l<e.near||l>e.far))return{distance:l,point:Vv.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Gv=new Y,Wv=new Y;class V2 extends H2{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Gv.fromBufferAttribute(t,r),Wv.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Gv.distanceTo(Wv);e.setAttribute("lineDistance",new xi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class G2 extends Ln{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Xv={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class W2{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const p=u[d],_=u[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null}}}const X2=new W2;class s_{constructor(e){this.manager=e!==void 0?e:X2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}s_.DEFAULT_MATERIAL_NAME="__DEFAULT";class j2 extends s_{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Xv.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ru("img");function l(){c(),Xv.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Y2 extends s_{constructor(e){super(e)}load(e,t,i,r){const s=new Ln,o=new j2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kg);function Lr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function EM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},bu={duration:.5,overwrite:!1,delay:0},o_,yn,Ut,Bi=1e8,At=1/Bi,Dm=Math.PI*2,$2=Dm/4,q2=0,TM=Math.sqrt,K2=Math.cos,Z2=Math.sin,mn=function(e){return typeof e=="string"},Wt=function(e){return typeof e=="function"},qr=function(e){return typeof e=="number"},a_=function(e){return typeof e>"u"},Er=function(e){return typeof e=="object"},ni=function(e){return e!==!1},l_=function(){return typeof window<"u"},Bc=function(e){return Wt(e)||mn(e)},wM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dn=Array.isArray,Q2=/random\([^)]+\)/g,J2=/,\s*/g,jv=/(?:-?\.?\d|\.)+/gi,AM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ma=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Wh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,CM=/[+-]=-?[.\d]+/,eL=/[^,'"\[\]\s]+/gi,tL=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Bt,lr,Nm,u_,wi={},id={},RM,bM=function(e){return(id=el(e,wi))&&oi},c_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Pu=function(e,t){return!t&&console.warn(e)},PM=function(e,t){return e&&(wi[e]=t)&&id&&(id[e]=t)||wi},Lu=function(){return 0},nL={suppressEvents:!0,isStart:!0,kill:!1},_f={suppressEvents:!0,kill:!1},iL={suppressEvents:!0},f_={},Ps=[],Im={},LM,pi={},Xh={},Yv=30,vf=[],d_="",h_=function(e){var t=e[0],i,r;if(Er(t)||Wt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=vf.length;r--&&!vf[r].targetTest(t););i=vf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new JM(e[r],i)))||e.splice(r,1);return e},vo=function(e){return e._gsap||h_(zi(e))[0]._gsap},DM=function(e,t,i){return(i=e[t])&&Wt(i)?e[t]():a_(i)&&e.getAttribute&&e.getAttribute(t)||i},ii=function(e,t){return(e=e.split(",")).forEach(t)||e},Xt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},Ia=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},rL=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},rd=function(){var e=Ps.length,t=Ps.slice(0),i,r;for(Im={},Ps.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},p_=function(e){return!!(e._initted||e._startAt||e.add)},NM=function(e,t,i,r){Ps.length&&!yn&&rd(),e.render(t,i,!!(yn&&t<0&&p_(e))),Ps.length&&!yn&&rd()},IM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(eL).length<2?t:mn(e)?e.trim():e},UM=function(e){return e},Ai=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},sL=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},el=function(e,t){for(var i in t)e[i]=t[i];return e},$v=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Er(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},sd=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Ql=function(e){var t=e.parent||Bt,i=e.keyframes?sL(Dn(e.keyframes)):Ai;if(ni(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},oL=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},FM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Ud=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Fs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},xo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},aL=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Um=function(e,t,i,r){return e._startAt&&(yn?e._startAt.revert(_f):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},lL=function n(e){return!e||e._ts&&n(e.parent)},qv=function(e){return e._repeat?tl(e._tTime,e=e.duration()+e._rDelay)*e:0},tl=function(e,t){var i=Math.floor(e=Ot(e/t));return e&&i===e?i-1:i},od=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Fd=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||At)||0))},Od=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ot(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Fd(e),i._dirty||xo(i,e)),e},OM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=od(e.rawTime(),t),(!t._dur||Ku(0,t.totalDuration(),i)-t._tTime>At)&&t.render(i,!0)),xo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-At}},hr=function(e,t,i,r){return t.parent&&Fs(t),t._start=Ot((qr(i)?i:i||e!==Bt?Li(e,i,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),FM(e,t,"_first","_last",e._sort?"_start":0),Fm(t)||(e._recent=t),r||OM(e,t),e._ts<0&&Od(e,e._tTime),e},kM=function(e,t){return(wi.ScrollTrigger||c_("scrollTrigger",t))&&wi.ScrollTrigger.create(t,e)},BM=function(e,t,i,r,s){if(g_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!yn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&LM!==gi.frame)return Ps.push(e),e._lazy=[s,r],1},uL=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Fm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},cL=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&uL(e)&&!(!e._initted&&Fm(e))||(e._ts<0||e._dp._ts<0)&&!Fm(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=Ku(0,e._tDur,t),c=tl(l,a),e._yoyo&&c&1&&(o=1-o),c!==tl(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||yn||r||e._zTime===At||!t&&e._zTime){if(!e._initted&&BM(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?At:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Um(e,t,i,!0),e._onUpdate&&!i&&yi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&yi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Fs(e,1),!i&&!yn&&(yi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},fL=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},nl=function(e,t,i,r){var s=e._repeat,o=Ot(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ot(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Od(e,e._tTime=e._tDur*a),e.parent&&Fd(e),i||xo(e.parent,e),e},Kv=function(e){return e instanceof qn?xo(e):nl(e,e._dur)},dL={_start:0,endTime:Lu,totalDuration:Lu},Li=function n(e,t,i){var r=e.labels,s=e._recent||dL,o=e.duration()>=Bi?s.endTime(!1):e._dur,a,l,u;return mn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Dn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Jl=function(e,t,i){var r=qr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ni(l.vars.inherit)&&l.parent;o.immediateRender=ni(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Zt(t[0],o,t[s+1])},Ws=function(e,t){return e||e===0?t(e):t},Ku=function(e,t,i){return i<e?e:i>t?t:i},bn=function(e,t){return!mn(e)||!(t=tL.exec(e))?"":t[1]},hL=function(e,t,i){return Ws(i,function(r){return Ku(e,t,r)})},Om=[].slice,zM=function(e,t){return e&&Er(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Er(e[0]))&&!e.nodeType&&e!==lr},pL=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return mn(r)&&!t||zM(r,1)?(s=i).push.apply(s,zi(r)):i.push(r)})||i},zi=function(e,t,i){return Ut&&!t&&Ut.selector?Ut.selector(e):mn(e)&&!i&&(Nm||!il())?Om.call((t||u_).querySelectorAll(e),0):Dn(e)?pL(e,i):zM(e)?Om.call(e,0):e?[e]:[]},km=function(e){return e=zi(e)[0]||Pu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return zi(t,i.querySelectorAll?i:i===e?Pu("Invalid scope")||u_.createElement("div"):e)}},HM=function(e){return e.sort(function(){return .5-Math.random()})},VM=function(e){if(Wt(e))return e;var t=Er(e)?e:{each:e},i=yo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return mn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(f,p,_){var g=(_||t).length,m=o[g],h,x,v,y,C,w,M,R,E;if(!m){if(E=t.grid==="auto"?0:(t.grid||[1,Bi])[1],!E){for(M=-Bi;M<(M=_[E++].getBoundingClientRect().left)&&E<g;);E<g&&E--}for(m=o[g]=[],h=l?Math.min(E,g)*c-.5:r%E,x=E===Bi?0:l?g*d/E-.5:r/E|0,M=0,R=Bi,w=0;w<g;w++)v=w%E-h,y=x-(w/E|0),m[w]=C=u?Math.abs(u==="y"?y:v):TM(v*v+y*y),C>M&&(M=C),C<R&&(R=C);r==="random"&&HM(m),m.max=M-R,m.min=R,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(E>g?g-1:u?u==="y"?g/E:E:Math.max(E,g/E))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=bn(t.amount||t.each)||0,i=i&&g<0?CL(i):i}return g=(m[f]-m.min)/m.max||0,Ot(m.b+(i?i(g):g)*m.v)+m.u}},Bm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ot(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(qr(i)?0:bn(i))}},GM=function(e,t){var i=Dn(e),r,s;return!i&&Er(e)&&(r=i=e.radius||Bi,e.values?(e=zi(e.values),(s=!qr(e[0]))&&(r*=r)):e=Bm(e.increment)),Ws(t,i?Wt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Bi,c=0,d=e.length,f,p;d--;)s?(f=e[d].x-a,p=e[d].y-l,f=f*f+p*p):f=Math.abs(e[d]-a),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:o,s||c===o||qr(o)?c:c+bn(o)}:Bm(e))},WM=function(e,t,i,r){return Ws(Dn(e)?!t:i===!0?!!(i=0):!r,function(){return Dn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},mL=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},gL=function(e,t){return function(i){return e(parseFloat(i))+(t||bn(i))}},_L=function(e,t,i){return jM(e,t,0,1,i)},XM=function(e,t,i){return Ws(i,function(r){return e[~~t(r)]})},vL=function n(e,t,i){var r=t-e;return Dn(e)?XM(e,n(0,e.length),t):Ws(i,function(s){return(r+(s-e)%r)%r+e})},xL=function n(e,t,i){var r=t-e,s=r*2;return Dn(e)?XM(e,n(0,e.length-1),t):Ws(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Du=function(e){return e.replace(Q2,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(J2);return WM(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},jM=function(e,t,i,r,s){var o=t-e,a=r-i;return Ws(s,function(l){return i+((l-e)/o*a||0)})},yL=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=mn(e),a={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Dn(e)&&!Dn(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(_){_*=d;var g=Math.min(f,~~_);return c[g](_-g)},i=t}else r||(e=el(Dn(e)?[]:{},e));if(!c){for(l in t)m_.call(a,e,l,"get",t[l]);s=function(_){return x_(_,a)||(o?e.p:e)}}}return Ws(i,s)},Zv=function(e,t,i){var r=e.labels,s=Bi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},yi=function(e,t,i){var r=e.vars,s=r[t],o=Ut,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ps.length&&rd(),a&&(Ut=a),c=l?s.apply(u,l):s.call(u),Ut=o,c},Il=function(e){return Fs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yn),e.progress()<1&&yi(e,"onInterrupt"),e},Ea,YM=[],$M=function(e){if(e)if(e=!e.name&&e.default||e,l_()||e.headless){var t=e.name,i=Wt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Lu,render:x_,add:m_,kill:OL,modifier:FL,rawVars:0},o={targetTest:0,get:0,getSetter:v_,aliases:{},register:0};if(il(),e!==r){if(pi[t])return;Ai(r,Ai(sd(e,s),o)),el(r.prototype,el(s,sd(e,o))),pi[r.prop=t]=r,e.targetTest&&(vf.push(r),f_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}PM(t,r),e.register&&e.register(oi,r,ri)}else YM.push(e)},wt=255,Ul={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},jh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*wt+.5|0},qM=function(e,t,i){var r=e?qr(e)?[e>>16,e>>8&wt,e&wt]:0:Ul.black,s,o,a,l,u,c,d,f,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ul[e])r=Ul[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&wt,r&wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&wt,e&wt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(jv),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=jh(l+1/3,s,o),r[1]=jh(l,s,o),r[2]=jh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(AM),i&&r.length<4&&(r[3]=1),r}else r=e.match(jv)||Ul.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/wt,o=r[1]/wt,a=r[2]/wt,d=Math.max(s,o,a),f=Math.min(s,o,a),c=(d+f)/2,d===f?l=u=0:(p=d-f,u=c>.5?p/(2-d-f):p/(d+f),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},KM=function(e){var t=[],i=[],r=-1;return e.split(Ls).forEach(function(s){var o=s.match(Ma)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Qv=function(e,t,i){var r="",s=(e+r).match(Ls),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=qM(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=KM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Ls,"1").split(Ma),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Ls),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Ls=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ul)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),SL=/hsl[a]?\(/,ZM=function(e){var t=e.join(" "),i;if(Ls.lastIndex=0,Ls.test(t))return i=SL.test(t),e[1]=Qv(e[1],i),e[0]=Qv(e[0],i,KM(e[1])),!0},Nu,gi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,f,p,_=function g(m){var h=n()-r,x=m===!0,v,y,C,w;if((h>e||h<0)&&(i+=h-t),r+=h,C=r-i,v=C-o,(v>0||x)&&(w=++d.frame,f=C-d.time*1e3,d.time=C=C/1e3,o+=v+(v>=s?4:s-v),y=1),x||(l=u(g)),y)for(p=0;p<a.length;p++)a[p](C,f,w,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){RM&&(!Nm&&l_()&&(lr=Nm=window,u_=lr.document||{},wi.gsap=oi,(lr.gsapVersions||(lr.gsapVersions=[])).push(oi.version),bM(id||lr.GreenSockGlobals||!lr.gsap&&lr||{}),YM.forEach($M)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Nu=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Nu=0,u=Lu},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,h,x){var v=h?function(y,C,w,M){m(y,C,w,M),d.remove(v)}:m;return d.remove(m),a[x?"unshift":"push"](v),il(),v},remove:function(m,h){~(h=a.indexOf(m))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},d}(),il=function(){return!Nu&&gi.wake()},ft={},ML=/^[\d.\-M][\d.\-,\s]/,EL=/["']/g,TL=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(EL,"").trim():+u,r=l.substr(a+1).trim();return t},wL=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},AL=function(e){var t=(e+"").split("("),i=ft[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[TL(t[1])]:wL(e).split(",").map(IM)):ft._CE&&ML.test(e)?ft._CE("",e):i},CL=function(e){return function(t){return 1-e(1-t)}},yo=function(e,t){return e&&(Wt(e)?e:ft[e]||AL(e))||t},Oo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ii(e,function(a){ft[a]=wi[a]=s,ft[o=a.toLowerCase()]=i;for(var l in s)ft[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[a+"."+l]=s[l]}),s},QM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Yh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Dm*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*Z2((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:QM(a);return s=Dm/s,l.config=function(u,c){return n(e,u,c)},l},$h=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:QM(i);return r.config=function(s){return n(e,s)},r};ii("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Oo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;Oo("Elastic",Yh("in"),Yh("out"),Yh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Oo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Oo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Oo("Circ",function(n){return-(TM(1-n*n)-1)});Oo("Sine",function(n){return n===1?1:-K2(n*$2)+1});Oo("Back",$h("in"),$h("out"),$h());ft.SteppedEase=ft.steps=wi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-At;return function(a){return((r*Ku(0,o,a)|0)+s)*i}}};bu.ease=ft["quad.out"];ii("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return d_+=n+","+n+"Params,"});var JM=function(e,t){this.id=q2++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:DM,this.set=t?t.getSetter:v_},Iu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,nl(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),Nu||gi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,nl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(il(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Od(this,i),!s._dp||s.parent||OM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&hr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===At||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),NM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+qv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+qv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?tl(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-At?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?od(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-At?0:this._rts,this.totalTime(Ku(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Fd(this),aL(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(il(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==At&&(this._tTime-=At)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Ot(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&hr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ni(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?od(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=iL);var r=yn;return yn=i,p_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),yn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Kv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Kv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Li(this,i),ni(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ni(r)),this._dur||(this._zTime=-At),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-At:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-At,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-At)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Wt(i)?i:UM,l=function(){var c=r.then;r.then=null,s&&s(),Wt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Il(this)},n}();Ai(Iu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-At,_prom:0,_ps:!1,_rts:1});var qn=function(n){EM(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ni(i.sortChildren),Bt&&hr(i.parent||Bt,Lr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&kM(Lr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Jl(0,arguments,this),this},t.from=function(r,s,o){return Jl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Jl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Ql(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Zt(r,s,Li(this,o),1),this},t.call=function(r,s,o){return hr(this,Zt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Zt(r,o,Li(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Ql(o).immediateRender=ni(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,Ql(a).immediateRender=ni(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Ot(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,p,_,g,m,h,x,v,y,C,w,M;if(this!==Bt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,y=this._start,v=this._ts,h=!v,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=Ot(c%m),c===l?(g=this._repeat,f=u):(C=Ot(c/m),g=~~C,g&&g===C&&(f=u,g--),f>u&&(f=u)),C=tl(this._tTime,m),!a&&this._tTime&&C!==g&&this._tTime-C*m-this._dur<=0&&(C=g),w&&g&1&&(f=u-f,M=1),g!==C&&!this._lock){var R=w&&C&1,E=R===(w&&g&1);if(g<C&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(M?0:Ot(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&yi(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,C=g),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,E&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!h)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=fL(this,Ot(a),Ot(f)),x&&(c-=f-(f=x._start))),this._tTime=c,this._time=f,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!C&&(yi(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&x!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!h){x=0,_&&(c+=this._zTime=-At);break}}p=_}else{p=this._last;for(var S=r<0?r:f;p;){if(_=p._prev,(p._act||S<=p._end)&&p._ts&&x!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,o||yn&&p_(p)),f!==this._time||!this._ts&&!h){x=0,_&&(c+=this._zTime=S?-At:At);break}}p=_}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-At)._zTime=f>=a?1:-1,this._ts))return this._start=y,Fd(this),this.render(r,s,o);this._onUpdate&&!s&&yi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Fs(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(yi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(qr(s)||(s=Li(this,s,r)),!(r instanceof Iu)){if(Dn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(mn(r))return this.addLabel(r,s);if(Wt(r))r=Zt.delayedCall(0,r);else return this}return this!==r?hr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Bi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Zt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return mn(r)?this.removeLabel(r):Wt(r)?this.killTweensOf(r):(r.parent===this&&Ud(this,r),r===this._recent&&(this._recent=this._last),xo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(gi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Li(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Zt.delayedCall(0,s||Lu,o);return a.data="isPause",this._hasPause=1,hr(this,a,Li(this,r))},t.removePause=function(r){var s=this._first;for(r=Li(this,r);s;)s._start===r&&s.data==="isPause"&&Fs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ms!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=zi(r),l=this._first,u=qr(s),c;l;)l instanceof Zt?rL(l._targets,a)&&(u?(!ms||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Li(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,p,_=Zt.to(o,Ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||At,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==m&&nl(_,m,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ai({startAt:{time:Li(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Zv(this,Li(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Zv(this,Li(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+At)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Ot(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return xo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),xo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Bi,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,hr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ot(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;nl(o,o===Bt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Bt._ts&&(NM(Bt,od(r,Bt)),LM=gi.frame),gi.frame>=Yv){Yv+=Ei.autoSleep||120;var s=Bt._first;if((!s||!s._ts)&&Ei.autoSleep&&gi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||gi.sleep()}}},e}(Iu);Ai(qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var RL=function(e,t,i,r,s,o,a){var l=new ri(this._pt,e,t,0,1,s1,null,s),u=0,c=0,d,f,p,_,g,m,h,x;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Du(r)),o&&(x=[i,r],o(x,e,t),i=x[0],r=x[1]),f=i.match(Wh)||[];d=Wh.exec(r);)_=d[0],g=r.substring(u,d.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:_.charAt(1)==="="?Ia(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},u=Wh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(CM.test(r)||h)&&(l.e=0),this._pt=l,l},m_=function(e,t,i,r,s,o,a,l,u,c){Wt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:Wt(d)?u?e[t.indexOf("set")||!Wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=Wt(d)?u?NL:i1:__,_;if(mn(r)&&(~r.indexOf("random(")&&(r=Du(r)),r.charAt(1)==="="&&(_=Ia(f,r)+(bn(f)||0),(_||_===0)&&(r=_))),!c||f!==r||zm)return!isNaN(f*r)&&r!==""?(_=new ri(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?UL:r1,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!d&&!(t in e)&&c_(t,r),RL.call(this,e,t,f,r,p,l||Ei.stringFilter,u))},bL=function(e,t,i,r,s){if(Wt(e)&&(e=eu(e,s,t,i,r)),!Er(e)||e.style&&e.nodeType||Dn(e)||wM(e))return mn(e)?eu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=eu(e[a],s,t,i,r);return o},e1=function(e,t,i,r,s,o){var a,l,u,c;if(pi[e]&&(a=new pi[e]).init(s,a.rawVars?t[e]:bL(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ri(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Ea))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},ms,zm,g_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,h=e.parent,x=h&&h.data==="nested"?h.vars.targets:m,v=e._overwrite==="auto"&&!o_,y=e.timeline,C=r.easeReverse||d,w,M,R,E,S,L,O,z,j,q,X,V,N;if(y&&(!f||!s)&&(s="none"),e._ease=yo(s,bu.ease),e._rEase=C&&(yo(C)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||f&&!r.stagger){if(z=m[0]?vo(m[0]).harness:0,V=z&&r[z.prop],w=sd(r,f_),g&&(g._zTime<0&&g.progress(1),t<0&&c&&a&&!p?g.render(-1,!0):g.revert(c&&_?_f:nL),g._lazy=0),o){if(Fs(e._startAt=Zt.set(m,Ai({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!g&&ni(l),startAt:null,delay:0,onUpdate:u&&function(){return yi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn||!a&&!p)&&e._startAt.revert(_f),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!g){if(t&&(a=!1),R=Ai({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ni(l),immediateRender:a,stagger:0,parent:h},w),V&&(R[z.prop]=V),Fs(e._startAt=Zt.set(m,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn?e._startAt.revert(_f):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,At,At);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&ni(l)||l&&!_,M=0;M<m.length;M++){if(S=m[M],O=S._gsap||h_(m)[M]._gsap,e._ptLookup[M]=q={},Im[O.id]&&Ps.length&&rd(),X=x===m?M:x.indexOf(S),z&&(j=new z).init(S,V||w,e,X,x)!==!1&&(e._pt=E=new ri(e._pt,S,j.name,0,1,j.render,j,0,j.priority),j._props.forEach(function(K){q[K]=E}),j.priority&&(L=1)),!z||V)for(R in w)pi[R]&&(j=e1(R,w,e,X,S,x))?j.priority&&(L=1):q[R]=E=m_.call(e,S,R,"get",w[R],X,x,0,r.stringFilter);e._op&&e._op[M]&&e.kill(S,e._op[M]),v&&e._pt&&(ms=e,Bt.killTweensOf(S,q,e.globalTime(t)),N=!e.parent,ms=0),e._pt&&l&&(Im[O.id]=1)}L&&o1(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!N,f&&t<=0&&y.render(Bi,!0,!0)},PL=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return zm=1,e.vars[t]="+=0",g_(e,a),zm=0,l?Pu(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=Xt(i)+bn(d.e)),d.b&&(d.b=c.s+bn(d.b))},LL=function(e,t){var i=e[0]?vo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=el({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},DL=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Dn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},eu=function(e,t,i,r,s){return Wt(e)?e.call(t,i,r,s):mn(e)&&~e.indexOf("random(")?Du(e):e},t1=d_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",n1={};ii(t1+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return n1[n]=1});var Zt=function(n){EM(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Ql(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,h=r.parent||Bt,x=(Dn(i)||wM(i)?qr(i[0]):"length"in r)?[i]:zi(i),v,y,C,w,M,R,E,S;if(a._targets=x.length?h_(x):Pu("GSAP target "+i+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||f||Bc(u)||Bc(c)){r=a.vars;var L=r.easeReverse||r.yoyoEase;if(v=a.timeline=new qn({data:"nested",defaults:g||{},targets:h&&h.data==="nested"?h.vars.targets:x}),v.kill(),v.parent=v._dp=Lr(a),v._start=0,f||Bc(u)||Bc(c)){if(w=x.length,E=f&&VM(f),Er(f))for(M in f)~t1.indexOf(M)&&(S||(S={}),S[M]=f[M]);for(y=0;y<w;y++)C=sd(r,n1),C.stagger=0,L&&(C.easeReverse=L),S&&el(C,S),R=x[y],C.duration=+eu(u,Lr(a),y,R,x),C.delay=(+eu(c,Lr(a),y,R,x)||0)-a._delay,!f&&w===1&&C.delay&&(a._delay=c=C.delay,a._start+=c,C.delay=0),v.to(R,C,E?E(y,R,x):0),v._ease=ft.none;v.duration()?u=c=0:a.timeline=0}else if(_){Ql(Ai(v.vars.defaults,{ease:"none"})),v._ease=yo(_.ease||r.ease||"none");var O=0,z,j,q;if(Dn(_))_.forEach(function(X){return v.to(x,X,">")}),v.duration();else{C={};for(M in _)M==="ease"||M==="easeEach"||DL(M,_[M],C,_.easeEach);for(M in C)for(z=C[M].sort(function(X,V){return X.t-V.t}),O=0,y=0;y<z.length;y++)j=z[y],q={ease:j.e,duration:(j.t-(y?z[y-1].t:0))/100*u},q[M]=j.v,v.to(x,q,O),O+=q.duration;v.duration()<u&&v.to({},{duration:u-v.duration()})}}u||a.duration(u=v.duration())}else a.timeline=0;return p===!0&&!o_&&(ms=Lr(a),Bt.killTweensOf(x),ms=0),hr(h,Lr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!_&&a._start===Ot(h._time)&&ni(d)&&lL(Lr(a))&&h.data!=="nested")&&(a._tTime=-At,a.render(Math.max(0,-c)||0)),m&&kM(Lr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-At&&!c?l:r<At?0:r,f,p,_,g,m,h,x,v;if(!u)cL(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,v=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(f=Ot(d%g),d===l?(_=this._repeat,f=u):(m=Ot(d/g),_=~~m,_&&_===m?(f=u,_--):f>u&&(f=u)),h=this._yoyo&&_&1,h&&(f=u-f),m=tl(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=d,this;_!==m&&this.vars.repeatRefresh&&!h&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Ot(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(BM(this,c?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var C=y?a:u-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(y?-1:1)/C:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(f/u);if(this._from&&(this.ratio=x=1-x),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(yi(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(x,p.d),p=p._next;v&&v.render(r<0?r:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Um(this,r,s,o),yi(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&yi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Um(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Fs(this,1),!s&&!(c&&!a)&&(d||a||h)&&(yi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Nu||gi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||g_(this,u),c=this._ease(u/this._dur),PL(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Od(this,0),this.parent||FM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Il(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ms&&ms.vars.overwrite!==!0)._first||Il(this),this.parent&&o!==this.timeline.totalDuration()&&nl(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?zi(r):a,u=this._ptLookup,c=this._pt,d,f,p,_,g,m,h;if((!s||s==="all")&&oL(a,l))return s==="all"&&(this._pt=0),Il(this);for(d=this._op=this._op||[],s!=="all"&&(mn(s)&&(g={},ii(s,function(x){return g[x]=1}),s=g),s=LL(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){f=u[h],s==="all"?(d[h]=s,_=f,p={}):(p=d[h]=d[h]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Ud(this,m,"_pt"),delete f[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&Il(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Jl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Jl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Bt.killTweensOf(r,s,o)},e}(Iu);Ai(Zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ii("staggerTo,staggerFrom,staggerFromTo",function(n){Zt[n]=function(){var e=new qn,t=Om.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var __=function(e,t,i){return e[t]=i},i1=function(e,t,i){return e[t](i)},NL=function(e,t,i,r){return e[t](r.fp,i)},IL=function(e,t,i){return e.setAttribute(t,i)},v_=function(e,t){return Wt(e[t])?i1:a_(e[t])&&e.setAttribute?IL:__},r1=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},UL=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},s1=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},x_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},FL=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},OL=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ud(this,t,"_pt"):t.dep||(i=1),t=r;return!i},kL=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},o1=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ri=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||r1,this.d=l||this,this.set=u||__,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=kL,this.m=i,this.mt=s,this.tween=r},n}();ii(d_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return f_[n]=1});wi.TweenMax=wi.TweenLite=Zt;wi.TimelineLite=wi.TimelineMax=qn;Bt=new qn({sortChildren:!1,defaults:bu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ei.stringFilter=ZM;var So=[],xf={},BL=[],Jv=0,zL=0,qh=function(e){return(xf[e]||BL).map(function(t){return t()})},Hm=function(){var e=Date.now(),t=[];e-Jv>2&&(qh("matchMediaInit"),So.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=lr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),qh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Jv=e,qh("matchMedia"))},a1=function(){function n(t,i){this.selector=i&&km(i),this.data=[],this._r=[],this.isReverted=!1,this.id=zL++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Wt(i)&&(s=r,r=i,i=Wt);var o=this,a=function(){var u=Ut,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=km(s)),Ut=o,d=r.apply(o,arguments),Wt(d)&&o._r.push(d),Ut=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===Wt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ut;Ut=null,i(this),Ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Zt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof qn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Zt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=So.length;o--;)So[o].id===this.id&&So.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),HL=function(){function n(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Er(i)||(i={matches:i});var o=new a1(0,s||this.scope),a=o.conditions={},l,u,c;Ut&&!o.selector&&(o.selector=Ut.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=lr.matchMedia(i[u]),l&&(So.indexOf(o)<0&&So.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Hm):l.addEventListener("change",Hm)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),ad={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return $M(r)})},timeline:function(e){return new qn(e)},getTweensOf:function(e,t){return Bt.getTweensOf(e,t)},getProperty:function(e,t,i,r){mn(e)&&(e=zi(e)[0]);var s=vo(e||{}).get,o=i?UM:IM;return i==="native"&&(i=""),e&&(t?o((pi[t]&&pi[t].get||s)(e,t,i,r)):function(a,l,u){return o((pi[a]&&pi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=zi(e),e.length>1){var r=e.map(function(c){return oi.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=pi[t],a=vo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;Ea._pt=0,d.init(e,i?c+i:c,Ea,0,[e]),d.render(1,d),Ea._pt&&x_(1,Ea)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=oi.to(e,Ai((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=yo(e.ease,bu.ease)),$v(bu,e||{})},config:function(e){return $v(Ei,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!pi[a]&&!wi[a]&&Pu(t+" effect requires "+a+" plugin.")}),Xh[t]=function(a,l,u){return i(zi(a),Ai(l||{},s),u)},o&&(qn.prototype[t]=function(a,l,u){return this.add(Xh[t](a,Er(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ft[e]=yo(t)},parseEase:function(e,t){return arguments.length?yo(e,t):ft},getById:function(e){return Bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new qn(e),r,s;for(i.smoothChildTiming=ni(e.smoothChildTiming),Bt.remove(i),i._dp=0,i._time=i._tTime=Bt._time,r=Bt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Zt&&r.vars.onComplete===r._targets[0]))&&hr(i,r,r._start-r._delay),r=s;return hr(Bt,i,0),i},context:function(e,t){return e?new a1(e,t):Ut},matchMedia:function(e){return new HL(e)},matchMediaRefresh:function(){return So.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Hm()},addEventListener:function(e,t){var i=xf[e]||(xf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=xf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:vL,wrapYoyo:xL,distribute:VM,random:WM,snap:GM,normalize:_L,getUnit:bn,clamp:hL,splitColor:qM,toArray:zi,selector:km,mapRange:jM,pipe:mL,unitize:gL,interpolate:yL,shuffle:HM},install:bM,effects:Xh,ticker:gi,updateRoot:qn.updateRoot,plugins:pi,globalTimeline:Bt,core:{PropTween:ri,globals:PM,Tween:Zt,Timeline:qn,Animation:Iu,getCache:vo,_removeLinkedListItem:Ud,reverting:function(){return yn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return o_=e}}};ii("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return ad[n]=Zt[n]});gi.add(qn.updateRoot);Ea=ad.to({},{duration:0});var VL=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},GL=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=VL(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Kh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(mn(s)&&(l={},ii(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}GL(a,s)}}}},oi=ad.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)yn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Kh("roundProps",Bm),Kh("modifiers"),Kh("snap",GM))||ad;Zt.version=qn.version=oi.version="3.15.0";RM=1;l_()&&il();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ex,gs,Ua,y_,po,tx,S_,WL=function(){return typeof window<"u"},Kr={},io=180/Math.PI,Fa=Math.PI/180,ia=Math.atan2,nx=1e8,M_=/([A-Z])/g,XL=/(left|right|width|margin|padding|x)/i,jL=/[\s,\(]\S/,gr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},YL=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$L=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},qL=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},KL=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},l1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},u1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ZL=function(e,t,i){return e.style[t]=i},QL=function(e,t,i){return e.style.setProperty(t,i)},JL=function(e,t,i){return e._gsap[t]=i},eD=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},tD=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},nD=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},zt="transform",si=zt+"Origin",iD=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Kr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=gr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Nr(r,a)}):this.tfm[e]=o.x?o[e]:Nr(r,e),e===si&&(this.tfm.zOrigin=o.zOrigin);else return gr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(zt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(si,t,"")),e=zt}(s||t)&&this.props.push(e,t,s[e])},c1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},rD=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(M_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=S_(),(!s||!s.isStart)&&!i[zt]&&(c1(i),r.zOrigin&&i[si]&&(i[si]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},f1=function(e,t){var i={target:e,props:[],revert:rD,save:iD};return e._gsap||oi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},d1,Gm=function(e,t){var i=gs.createElementNS?gs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):gs.createElement(e);return i&&i.style?i:gs.createElement(e)},Si=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(M_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,rl(t)||t,1)||""},ix="O,Moz,ms,Ms,Webkit".split(","),rl=function(e,t,i){var r=t||po,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ix[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ix[o]:"")+e},Wm=function(){WL()&&window.document&&(ex=window,gs=ex.document,Ua=gs.documentElement,po=Gm("div")||{style:{}},Gm("div"),zt=rl(zt),si=zt+"Origin",po.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",d1=!!rl("perspective"),S_=oi.core.reverting,y_=1)},rx=function(e){var t=e.ownerSVGElement,i=Gm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Ua.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Ua.removeChild(i),s},sx=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},h1=function(e){var t,i;try{t=e.getBBox()}catch{t=rx(e),i=1}return t&&(t.width||t.height)||i||(t=rx(e)),t&&!t.width&&!t.x&&!t.y?{x:+sx(e,["x","cx","x1"])||0,y:+sx(e,["y","cy","y1"])||0,width:0,height:0}:t},p1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&h1(e))},Os=function(e,t){if(t){var i=e.style,r;t in Kr&&t!==si&&(t=zt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(M_,"-$1").toLowerCase())):i.removeAttribute(t)}},_s=function(e,t,i,r,s,o){var a=new ri(e._pt,t,i,0,1,o?u1:l1);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},ox={deg:1,rad:1,turn:1},sD={grid:1,flex:1},ks=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=po.style,l=XL.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",_,g,m,h;if(r===o||!s||ox[r]||ox[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),h=e.getCTM&&p1(e),(p||o==="%")&&(Kr[t]||~t.indexOf("adius")))return _=h?e.getBBox()[l?"width":"height"]:e[c],Xt(p?s/_*d:s/100*_);if(a[l?"width":"height"]=d+(f?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===gs||!g.appendChild)&&(g=gs.body),m=g._gsap,m&&p&&m.width&&l&&m.time===gi.time&&!m.uncache)return Xt(s/m.width*d);if(p&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=d+r,_=e[c],x?e.style[t]=x:Os(e,t)}else(p||o==="%")&&!sD[Si(g,"display")]&&(a.position=Si(e,"position")),g===e&&(a.position="static"),g.appendChild(po),_=po[c],g.removeChild(po),a.position="absolute";return l&&p&&(m=vo(g),m.time=gi.time,m.width=g[c]),Xt(f?_*s/d:_&&s?d/_*s:0)},Nr=function(e,t,i,r){var s;return y_||Wm(),t in gr&&t!=="transform"&&(t=gr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Kr[t]&&t!=="transform"?(s=Fu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ud(Si(e,si))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ld[t]&&ld[t](e,t,i)||Si(e,t)||DM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?ks(e,t,s,i)+i:s},oD=function(e,t,i,r){if(!i||i==="none"){var s=rl(t,e,1),o=s&&Si(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Si(e,"borderTopColor"))}var a=new ri(this._pt,e.style,t,0,1,s1),l=0,u=0,c,d,f,p,_,g,m,h,x,v,y,C;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Si(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Si(e,t)||r,g?e.style[t]=g:Os(e,t)),c=[i,r],ZM(c),i=c[0],r=c[1],f=i.match(Ma)||[],C=r.match(Ma)||[],C.length){for(;d=Ma.exec(r);)m=d[0],x=r.substring(l,d.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),m!==(g=f[u++]||"")&&(p=parseFloat(g)||0,y=g.substr((p+"").length),m.charAt(1)==="="&&(m=Ia(p,m)+y),h=parseFloat(m),v=m.substr((h+"").length),l=Ma.lastIndex-v.length,v||(v=v||Ei.units[t]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(p=ks(e,t,g,v)||0),a._pt={_next:a._pt,p:x||u===1?x:",",s:p,c:h-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?u1:l1;return CM.test(r)&&(a.e=0),this._pt=a,a},ax={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},aD=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=ax[i]||i,t[1]=ax[r]||r,t.join(" ")},lD=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Kr[a]&&(l=1,a=a==="transformOrigin"?si:zt),Os(i,a);l&&(Os(i,zt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Fu(i,1),o.uncache=1,c1(r)))}},ld={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ri(e._pt,t,i,0,0,lD);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Uu=[1,0,0,1,0,0],m1={},g1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},lx=function(e){var t=Si(e,zt);return g1(t)?Uu:t.substr(7).match(AM).map(Xt)},E_=function(e,t){var i=e._gsap||vo(e),r=e.style,s=lx(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Uu:s):(s===Uu&&!e.offsetParent&&e!==Ua&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Ua.appendChild(e)),s=lx(e),l?r.display=l:Os(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ua.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Xm=function(e,t,i,r,s,o){var a=e._gsap,l=s||E_(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],h=l[4],x=l[5],v=t.split(" "),y=parseFloat(v[0])||0,C=parseFloat(v[1])||0,w,M,R,E;i?l!==Uu&&(M=p*m-_*g)&&(R=y*(m/M)+C*(-g/M)+(g*x-m*h)/M,E=y*(-_/M)+C*(p/M)-(p*x-_*h)/M,y=R,C=E):(w=h1(e),y=w.x+(~v[0].indexOf("%")?y/100*w.width:y),C=w.y+(~(v[1]||v[0]).indexOf("%")?C/100*w.height:C)),r||r!==!1&&a.smooth?(h=y-u,x=C-c,a.xOffset=d+(h*p+x*g)-h,a.yOffset=f+(h*_+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[si]="0px 0px",o&&(_s(o,a,"xOrigin",u,y),_s(o,a,"yOrigin",c,C),_s(o,a,"xOffset",d,a.xOffset),_s(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+C)},Fu=function(e,t){var i=e._gsap||new JM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Si(e,si)||"0",c,d,f,p,_,g,m,h,x,v,y,C,w,M,R,E,S,L,O,z,j,q,X,V,N,K,b,ie,Ee,$e,$,re;return c=d=f=g=m=h=x=v=y=0,p=_=1,i.svg=!!(e.getCTM&&p1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[zt]!=="none"?l[zt]:"")),r.scale=r.rotate=r.translate="none"),M=E_(e,i.svg),i.svg&&(i.uncache?(N=e.getBBox(),u=i.xOrigin-N.x+"px "+(i.yOrigin-N.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),Xm(e,V||u,!!V||i.originIsAbsolute,i.smooth!==!1,M)),C=i.xOrigin||0,w=i.yOrigin||0,M!==Uu&&(L=M[0],O=M[1],z=M[2],j=M[3],c=q=M[4],d=X=M[5],M.length===6?(p=Math.sqrt(L*L+O*O),_=Math.sqrt(j*j+z*z),g=L||O?ia(O,L)*io:0,x=z||j?ia(z,j)*io+g:0,x&&(_*=Math.abs(Math.cos(x*Fa))),i.svg&&(c-=C-(C*L+w*z),d-=w-(C*O+w*j))):(re=M[6],$e=M[7],b=M[8],ie=M[9],Ee=M[10],$=M[11],c=M[12],d=M[13],f=M[14],R=ia(re,Ee),m=R*io,R&&(E=Math.cos(-R),S=Math.sin(-R),V=q*E+b*S,N=X*E+ie*S,K=re*E+Ee*S,b=q*-S+b*E,ie=X*-S+ie*E,Ee=re*-S+Ee*E,$=$e*-S+$*E,q=V,X=N,re=K),R=ia(-z,Ee),h=R*io,R&&(E=Math.cos(-R),S=Math.sin(-R),V=L*E-b*S,N=O*E-ie*S,K=z*E-Ee*S,$=j*S+$*E,L=V,O=N,z=K),R=ia(O,L),g=R*io,R&&(E=Math.cos(R),S=Math.sin(R),V=L*E+O*S,N=q*E+X*S,O=O*E-L*S,X=X*E-q*S,L=V,q=N),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,h=180-h),p=Xt(Math.sqrt(L*L+O*O+z*z)),_=Xt(Math.sqrt(X*X+re*re)),R=ia(q,X),x=Math.abs(R)>2e-4?R*io:0,y=$?1/($<0?-$:$):0),i.svg&&(V=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!g1(Si(e,zt)),V&&e.setAttribute("transform",V))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(p*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Xt(p),i.scaleY=Xt(_),i.rotation=Xt(g)+a,i.rotationX=Xt(m)+a,i.rotationY=Xt(h)+a,i.skewX=x+a,i.skewY=v+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[si]=ud(u)),i.xOffset=i.yOffset=0,i.force3D=Ei.force3D,i.renderTransform=i.svg?cD:d1?_1:uD,i.uncache=0,i},ud=function(e){return(e=e.split(" "))[0]+" "+e[1]},Zh=function(e,t,i){var r=bn(t);return Xt(parseFloat(t)+parseFloat(ks(e,"x",i+"px",r)))+r},uD=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,_1(e,t)},Zs="0deg",Al="0px",Qs=") ",_1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,h=i.force3D,x=i.target,v=i.zOrigin,y="",C=h==="auto"&&e&&e!==1||h===!0;if(v&&(d!==Zs||c!==Zs)){var w=parseFloat(c)*Fa,M=Math.sin(w),R=Math.cos(w),E;w=parseFloat(d)*Fa,E=Math.cos(w),o=Zh(x,o,M*E*-v),a=Zh(x,a,-Math.sin(w)*-v),l=Zh(x,l,R*E*-v+v)}m!==Al&&(y+="perspective("+m+Qs),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(C||o!==Al||a!==Al||l!==Al)&&(y+=l!==Al||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Qs),u!==Zs&&(y+="rotate("+u+Qs),c!==Zs&&(y+="rotateY("+c+Qs),d!==Zs&&(y+="rotateX("+d+Qs),(f!==Zs||p!==Zs)&&(y+="skew("+f+", "+p+Qs),(_!==1||g!==1)&&(y+="scale("+_+", "+g+Qs),x.style[zt]=y||"translate(0, 0)"},cD=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,h=i.yOffset,x=i.forceCSS,v=parseFloat(o),y=parseFloat(a),C,w,M,R,E;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Fa,u*=Fa,C=Math.cos(l)*d,w=Math.sin(l)*d,M=Math.sin(l-u)*-f,R=Math.cos(l-u)*f,u&&(c*=Fa,E=Math.tan(u-c),E=Math.sqrt(1+E*E),M*=E,R*=E,c&&(E=Math.tan(c),E=Math.sqrt(1+E*E),C*=E,w*=E)),C=Xt(C),w=Xt(w),M=Xt(M),R=Xt(R)):(C=d,R=f,w=M=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=ks(p,"x",o,"px"),y=ks(p,"y",a,"px")),(_||g||m||h)&&(v=Xt(v+_-(_*C+g*M)+m),y=Xt(y+g-(_*w+g*R)+h)),(r||s)&&(E=p.getBBox(),v=Xt(v+r/100*E.width),y=Xt(y+s/100*E.height)),E="matrix("+C+","+w+","+M+","+R+","+v+","+y+")",p.setAttribute("transform",E),x&&(p.style[zt]=E)},fD=function(e,t,i,r,s){var o=360,a=mn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?io:1),u=l-r,c=r+u+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*nx)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*nx)%o-~~(u/o)*o)),e._pt=f=new ri(e._pt,t,i,r,u,YL),f.e=c,f.u="deg",e._props.push(i),f},ux=function(e,t){for(var i in t)e[i]=t[i];return e},dD=function(e,t,i){var r=ux({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,f,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[zt]=t,a=Fu(i,1),Os(i,zt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[zt],o[zt]=t,a=Fu(i,1),o[zt]=u);for(l in Kr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=bn(u),_=bn(c),d=p!==_?ks(i,l,u,_):parseFloat(u),f=parseFloat(c),e._pt=new ri(e._pt,a,l,d,f-d,Vm),e._pt.u=_||0,e._props.push(l));ux(a,r)};ii("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});ld[e>1?"border"+n:n]=function(a,l,u,c,d){var f,p;if(arguments.length<4)return f=o.map(function(_){return Nr(a,_,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},o.forEach(function(_,g){return p[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,p,d)}});var v1={name:"css",register:Wm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,f,p,_,g,m,h,x,v,y,C,w,M,R,E;y_||Wm(),this.styles=this.styles||f1(e),R=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(pi[g]&&e1(g,t,i,r,e,s)))){if(p=typeof c,_=ld[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Du(c)),_)_(this,e,g,c,i)&&(M=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",Ls.lastIndex=0,Ls.test(u)||(m=bn(u),h=bn(c),h?m!==h&&(u=ks(e,g,u,h)+h):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),R.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],mn(u)&&~u.indexOf("random(")&&(u=Du(u)),bn(u+"")||u==="auto"||(u+=Ei.units[g]||bn(Nr(e,g))||""),(u+"").charAt(1)==="="&&(u=Nr(e,g))):u=Nr(e,g),f=parseFloat(u),x=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),x&&(c=c.substr(2)),d=parseFloat(c),g in gr&&(g==="autoAlpha"&&(f===1&&Nr(e,"visibility")==="hidden"&&d&&(f=0),R.push("visibility",0,a.visibility),_s(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=gr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Kr,v){if(this.styles.save(g),E=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Si(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=c,c=Si(e,"perspective"),S?e.style.perspective=S:Os(e,"perspective")}d=parseFloat(c)}if(y||(C=e._gsap,C.renderTransform&&!t.parseTransform||Fu(e,t.parseTransform),w=t.smoothOrigin!==!1&&C.smooth,y=this._pt=new ri(this._pt,a,zt,0,1,C.renderTransform,C,0,-1),y.dep=1),g==="scale")this._pt=new ri(this._pt,C,"scaleY",C.scaleY,(x?Ia(C.scaleY,x+d):d)-C.scaleY||0,Vm),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(si,0,a[si]),c=aD(c),C.svg?Xm(e,c,0,w,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==C.zOrigin&&_s(this,C,"zOrigin",C.zOrigin,h),_s(this,a,g,ud(u),ud(c)));continue}else if(g==="svgOrigin"){Xm(e,c,1,w,0,this);continue}else if(g in m1){fD(this,C,g,f,x?Ia(f,x+c):c);continue}else if(g==="smoothOrigin"){_s(this,C,"smooth",C.smooth,c);continue}else if(g==="force3D"){C[g]=c;continue}else if(g==="transform"){dD(this,c,e);continue}}else g in a||(g=rl(g)||g);if(v||(d||d===0)&&(f||f===0)&&!jL.test(c)&&g in a)m=(u+"").substr((f+"").length),d||(d=0),h=bn(c)||(g in Ei.units?Ei.units[g]:m),m!==h&&(f=ks(e,g,u,h)),this._pt=new ri(this._pt,v?C:a,g,f,(x?Ia(f,x+d):d)-f,!v&&(h==="px"||g==="zIndex")&&t.autoRound!==!1?KL:Vm),this._pt.u=h||0,v&&E!==c?(this._pt.b=u,this._pt.e=E,this._pt.r=qL):m!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=$L);else if(g in a)oD.call(this,e,g,u,x?x+c:c);else if(g in e)this.add(e,g,u||e[g],x?x+c:c,r,s);else if(g!=="parseTransform"){c_(g,c);continue}v||(g in a?R.push(g,0,a[g]):typeof e[g]=="function"?R.push(g,2,e[g]()):R.push(g,1,u||e[g])),o.push(g)}}M&&o1(this)},render:function(e,t){if(t.tween._time||!S_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Nr,aliases:gr,getSetter:function(e,t,i){var r=gr[t];return r&&r.indexOf(",")<0&&(t=r),t in Kr&&t!==si&&(e._gsap.x||Nr(e,"x"))?i&&tx===i?t==="scale"?eD:JL:(tx=i||{})&&(t==="scale"?tD:nD):e.style&&!a_(e.style[t])?ZL:~t.indexOf("-")?QL:v_(e,t)},core:{_removeProperty:Os,_getMatrix:E_}};oi.utils.checkPrefix=rl;oi.core.getStyleSaver=f1;(function(n,e,t,i){var r=ii(n+","+e+","+t,function(s){Kr[s]=1});ii(e,function(s){Ei.units[s]="deg",m1[s]=1}),gr[r[13]]=n+","+e,ii(i,function(s){var o=s.split(":");gr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ii("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ei.units[n]="px"});oi.registerPlugin(v1);var x1=oi.registerPlugin(v1)||oi;x1.core.Tween;function hD(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function pD(n,e,t){return e&&hD(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vn,yf,_i,vs,xs,Oa,y1,ro,ka,S1,zr,Ki,M1,E1=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},T1=1,Ta=[],lt=[],Sr=[],tu=Date.now,jm=function(e,t){return t},mD=function(){var e=ka.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,lt),r.push.apply(r,Sr),lt=i,Sr=r,jm=function(o,a){return t[o](a)}},Ds=function(e,t){return~Sr.indexOf(e)&&Sr[Sr.indexOf(e)+1][t]},nu=function(e){return!!~S1.indexOf(e)},Un=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},In=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},zc="scrollLeft",Hc="scrollTop",Ym=function(){return zr&&zr.isPressed||lt.cache++},cd=function(e,t){var i=function r(s){if(s||s===0){T1&&(_i.history.scrollRestoration="manual");var o=zr&&zr.isPressed;s=r.v=Math.round(s)||(zr&&zr.iOS?1:0),e(s),r.cacheID=lt.cache,o&&jm("ss",s)}else(t||lt.cache!==r.cacheID||jm("ref"))&&(r.cacheID=lt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Hn={s:zc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:cd(function(n){return arguments.length?_i.scrollTo(n,sn.sc()):_i.pageXOffset||vs[zc]||xs[zc]||Oa[zc]||0})},sn={s:Hc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Hn,sc:cd(function(n){return arguments.length?_i.scrollTo(Hn.sc(),n):_i.pageYOffset||vs[Hc]||xs[Hc]||Oa[Hc]||0})},jn=function(e,t){return(t&&t._ctx&&t._ctx.selector||vn.utils.toArray)(e)[0]||(typeof e=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},gD=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Bs=function(e,t){var i=t.s,r=t.sc;nu(e)&&(e=vs.scrollingElement||xs);var s=lt.indexOf(e),o=r===sn.sc?1:2;!~s&&(s=lt.push(e)-1),lt[s+o]||Un(e,"scroll",Ym);var a=lt[s+o],l=a||(lt[s+o]=cd(Ds(e,i),!0)||(nu(e)?r:cd(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=vn.getProperty(e,"scrollBehavior")==="smooth"),l},$m=function(e,t,i){var r=e,s=e,o=tu(),a=o,l=t||50,u=Math.max(500,l*3),c=function(_,g){var m=tu();g||m-o>l?(s=r,r=_,a=o,o=m):i?r+=_:r=s+(_-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(_){var g=a,m=s,h=tu();return(_||_===0)&&_!==r&&c(_),o===a||h-a>u?0:(r+(i?m:-m))/((i?h:o)-g)*1e3};return{update:c,reset:d,getVelocity:f}},Cl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},cx=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},w1=function(){ka=vn.core.globals().ScrollTrigger,ka&&ka.core&&mD()},A1=function(e){return vn=e||E1(),!yf&&vn&&typeof document<"u"&&document.body&&(_i=window,vs=document,xs=vs.documentElement,Oa=vs.body,S1=[_i,vs,xs,Oa],vn.utils.clamp,M1=vn.core.context||function(){},ro="onpointerenter"in Oa?"pointer":"mouse",y1=Yt.isTouch=_i.matchMedia&&_i.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in _i||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ki=Yt.eventTypes=("ontouchstart"in xs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in xs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return T1=0},500),yf=1),ka||w1(),yf};Hn.op=sn;lt.cache=0;var Yt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){yf||A1(vn)||console.warn("Please gsap.registerPlugin(Observer)"),ka||w1();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,f=i.onStopDelay,p=i.ignore,_=i.wheelSpeed,g=i.event,m=i.onDragStart,h=i.onDragEnd,x=i.onDrag,v=i.onPress,y=i.onRelease,C=i.onRight,w=i.onLeft,M=i.onUp,R=i.onDown,E=i.onChangeX,S=i.onChangeY,L=i.onChange,O=i.onToggleX,z=i.onToggleY,j=i.onHover,q=i.onHoverEnd,X=i.onMove,V=i.ignoreCheck,N=i.isNormalizer,K=i.onGestureStart,b=i.onGestureEnd,ie=i.onWheel,Ee=i.onEnable,$e=i.onDisable,$=i.onClick,re=i.scrollSpeed,me=i.capture,fe=i.allowClicks,Te=i.lockAxis,Ie=i.onLockAxis;this.target=a=jn(a)||xs,this.vars=i,p&&(p=vn.utils.toArray(p)),r=r||1e-9,s=s||0,_=_||1,re=re||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(_i.getComputedStyle(Oa).lineHeight)||22);var qe,et,D,he,_e,we,ae,k=this,Ae=0,Ue=0,P=i.passive||!c&&i.passive!==!1,T=Bs(a,Hn),G=Bs(a,sn),ee=T(),ne=G(),Z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ki[0]==="pointerdown",Ce=nu(a),se=a.ownerDocument||vs,le=[0,0,0],Ne=[0,0,0],oe=0,ve=function(){return oe=tu()},Oe=function(Fe,Je){return(k.event=Fe)&&p&&gD(Fe.target,p)||Je&&Z&&Fe.pointerType!=="touch"||V&&V(Fe,Je)},Be=function(){k._vx.reset(),k._vy.reset(),et.pause(),d&&d(k)},xe=function(){var Fe=k.deltaX=cx(le),Je=k.deltaY=cx(Ne),pe=Math.abs(Fe)>=r,Xe=Math.abs(Je)>=r;L&&(pe||Xe)&&L(k,Fe,Je,le,Ne),pe&&(C&&k.deltaX>0&&C(k),w&&k.deltaX<0&&w(k),E&&E(k),O&&k.deltaX<0!=Ae<0&&O(k),Ae=k.deltaX,le[0]=le[1]=le[2]=0),Xe&&(R&&k.deltaY>0&&R(k),M&&k.deltaY<0&&M(k),S&&S(k),z&&k.deltaY<0!=Ue<0&&z(k),Ue=k.deltaY,Ne[0]=Ne[1]=Ne[2]=0),(he||D)&&(X&&X(k),D&&(m&&D===1&&m(k),x&&x(k),D=0),he=!1),we&&!(we=!1)&&Ie&&Ie(k),_e&&(ie(k),_e=!1),qe=0},Ve=function(Fe,Je,pe){le[pe]+=Fe,Ne[pe]+=Je,k._vx.update(Fe),k._vy.update(Je),u?qe||(qe=requestAnimationFrame(xe)):xe()},je=function(Fe,Je){Te&&!ae&&(k.axis=ae=Math.abs(Fe)>Math.abs(Je)?"x":"y",we=!0),ae!=="y"&&(le[2]+=Fe,k._vx.update(Fe,!0)),ae!=="x"&&(Ne[2]+=Je,k._vy.update(Je,!0)),u?qe||(qe=requestAnimationFrame(xe)):xe()},Qe=function(Fe){if(!Oe(Fe,1)){Fe=Cl(Fe,c);var Je=Fe.clientX,pe=Fe.clientY,Xe=Je-k.x,ze=pe-k.y,Ke=k.isDragging;k.x=Je,k.y=pe,(Ke||(Xe||ze)&&(Math.abs(k.startX-Je)>=s||Math.abs(k.startY-pe)>=s))&&(D||(D=Ke?2:1),Ke||(k.isDragging=!0),je(Xe,ze))}},U=k.onPress=function(Ge){Oe(Ge,1)||Ge&&Ge.button||(k.axis=ae=null,et.pause(),k.isPressed=!0,Ge=Cl(Ge),Ae=Ue=0,k.startX=k.x=Ge.clientX,k.startY=k.y=Ge.clientY,k._vx.reset(),k._vy.reset(),Un(N?a:se,Ki[1],Qe,P,!0),k.deltaX=k.deltaY=0,v&&v(k))},Q=k.onRelease=function(Ge){if(!Oe(Ge,1)){In(N?a:se,Ki[1],Qe,!0);var Fe=!isNaN(k.y-k.startY),Je=k.isDragging,pe=Je&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),Xe=Cl(Ge);!pe&&Fe&&(k._vx.reset(),k._vy.reset(),c&&fe&&vn.delayedCall(.08,function(){if(tu()-oe>300&&!Ge.defaultPrevented){if(Ge.target.click)Ge.target.click();else if(se.createEvent){var ze=se.createEvent("MouseEvents");ze.initMouseEvent("click",!0,!0,_i,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),Ge.target.dispatchEvent(ze)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,d&&Je&&!N&&et.restart(!0),D&&xe(),h&&Je&&h(k),y&&y(k,pe)}},J=function(Fe){return Fe.touches&&Fe.touches.length>1&&(k.isGesturing=!0)&&K(Fe,k.isDragging)},te=function(){return(k.isGesturing=!1)||b(k)},ce=function(Fe){if(!Oe(Fe)){var Je=T(),pe=G();Ve((Je-ee)*re,(pe-ne)*re,1),ee=Je,ne=pe,d&&et.restart(!0)}},ge=function(Fe){if(!Oe(Fe)){Fe=Cl(Fe,c),ie&&(_e=!0);var Je=(Fe.deltaMode===1?l:Fe.deltaMode===2?_i.innerHeight:1)*_;Ve(Fe.deltaX*Je,Fe.deltaY*Je,0),d&&!N&&et.restart(!0)}},Ye=function(Fe){if(!Oe(Fe)){var Je=Fe.clientX,pe=Fe.clientY,Xe=Je-k.x,ze=pe-k.y;k.x=Je,k.y=pe,he=!0,d&&et.restart(!0),(Xe||ze)&&je(Xe,ze)}},dt=function(Fe){k.event=Fe,j(k)},rt=function(Fe){k.event=Fe,q(k)},Ze=function(Fe){return Oe(Fe)||Cl(Fe,c)&&$(k)};et=k._dc=vn.delayedCall(f||.25,Be).pause(),k.deltaX=k.deltaY=0,k._vx=$m(0,50,!0),k._vy=$m(0,50,!0),k.scrollX=T,k.scrollY=G,k.isDragging=k.isGesturing=k.isPressed=!1,M1(this),k.enable=function(Ge){return k.isEnabled||(Un(Ce?se:a,"scroll",Ym),o.indexOf("scroll")>=0&&Un(Ce?se:a,"scroll",ce,P,me),o.indexOf("wheel")>=0&&Un(a,"wheel",ge,P,me),(o.indexOf("touch")>=0&&y1||o.indexOf("pointer")>=0)&&(Un(a,Ki[0],U,P,me),Un(se,Ki[2],Q),Un(se,Ki[3],Q),fe&&Un(a,"click",ve,!0,!0),$&&Un(a,"click",Ze),K&&Un(se,"gesturestart",J),b&&Un(se,"gestureend",te),j&&Un(a,ro+"enter",dt),q&&Un(a,ro+"leave",rt),X&&Un(a,ro+"move",Ye)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=he=D=!1,k._vx.reset(),k._vy.reset(),ee=T(),ne=G(),Ge&&Ge.type&&U(Ge),Ee&&Ee(k)),k},k.disable=function(){k.isEnabled&&(Ta.filter(function(Ge){return Ge!==k&&nu(Ge.target)}).length||In(Ce?se:a,"scroll",Ym),k.isPressed&&(k._vx.reset(),k._vy.reset(),In(N?a:se,Ki[1],Qe,!0)),In(Ce?se:a,"scroll",ce,me),In(a,"wheel",ge,me),In(a,Ki[0],U,me),In(se,Ki[2],Q),In(se,Ki[3],Q),In(a,"click",ve,!0),In(a,"click",Ze),In(se,"gesturestart",J),In(se,"gestureend",te),In(a,ro+"enter",dt),In(a,ro+"leave",rt),In(a,ro+"move",Ye),k.isEnabled=k.isPressed=k.isDragging=!1,$e&&$e(k))},k.kill=k.revert=function(){k.disable();var Ge=Ta.indexOf(k);Ge>=0&&Ta.splice(Ge,1),zr===k&&(zr=0)},Ta.push(k),N&&nu(a)&&(zr=k),k.enable(g)},pD(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Yt.version="3.15.0";Yt.create=function(n){return new Yt(n)};Yt.register=A1;Yt.getAll=function(){return Ta.slice()};Yt.getById=function(n){return Ta.filter(function(e){return e.vars.id===n})[0]};E1()&&vn.registerPlugin(Yt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Le,aa,at,Mt,mi,xt,T_,fd,Ou,iu,Fl,Vc,An,kd,qm,Bn,fx,dx,la,C1,Qh,R1,On,Km,b1,P1,as,Zm,w_,Ba,A_,ru,Qm,Jh,Gc=1,Cn=Date.now,ep=Cn(),Vi=0,Ol=0,hx=function(e,t,i){var r=hi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},px=function(e,t){return t&&(!hi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},_D=function n(){return Ol&&requestAnimationFrame(n)},mx=function(){return kd=1},gx=function(){return kd=0},ur=function(e){return e},kl=function(e){return Math.round(e*1e5)/1e5||0},L1=function(){return typeof window<"u"},D1=function(){return Le||L1()&&(Le=window.gsap)&&Le.registerPlugin&&Le},Do=function(e){return!!~T_.indexOf(e)},N1=function(e){return(e==="Height"?A_:at["inner"+e])||mi["client"+e]||xt["client"+e]},I1=function(e){return Ds(e,"getBoundingClientRect")||(Do(e)?function(){return wf.width=at.innerWidth,wf.height=A_,wf}:function(){return Ur(e)})},vD=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Ds(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?N1(s):e["client"+s])||0}},xD=function(e,t){return!t||~Sr.indexOf(e)?I1(e):function(){return wf}},_r=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Ds(e,i))?o()-I1(e)()[s]:Do(e)?(mi[i]||xt[i])-N1(r):e[i]-e["offset"+r])},Wc=function(e,t){for(var i=0;i<la.length;i+=3)(!t||~t.indexOf(la[i+1]))&&e(la[i],la[i+1],la[i+2])},hi=function(e){return typeof e=="string"},Pn=function(e){return typeof e=="function"},Bl=function(e){return typeof e=="number"},so=function(e){return typeof e=="object"},Rl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},ra=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},sa=Math.abs,U1="left",F1="top",C_="right",R_="bottom",Mo="width",Eo="height",su="Right",ou="Left",au="Top",lu="Bottom",Kt="padding",Ui="margin",sl="Width",b_="Height",nn="px",Fi=function(e){return at.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},yD=function(e){var t=Fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},_x=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Ur=function(e,t){var i=t&&Fi(e)[qm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},dd=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},O1=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},SD=function(e){return function(t){return Le.utils.snap(O1(e),t)}},P_=function(e){var t=Le.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},MD=function(e){return function(t,i){return P_(O1(e))(t,i.direction)}},Xc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},fn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},cn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},jc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},vx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Yc={toggleActions:"play",anticipatePin:0},hd={top:0,left:0,center:.5,bottom:1,right:1},Sf=function(e,t){if(hi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in hd?hd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},$c=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,f=s.indent,p=s.fontWeight,_=Mt.createElement("div"),g=Do(i)||Ds(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,h=g?xt:i.tagName==="IFRAME"?i.contentDocument.body:i,x=e.indexOf("start")!==-1,v=x?u:c,y="border-color:"+v+";font-size:"+d+";color:"+v+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(y+=(r===sn?C_:R_)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=x,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,h.children[0]?h.insertBefore(_,h.children[0]):h.appendChild(_),_._offset=_["offset"+r.op.d2],Mf(_,0,r,x),_},Mf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+sl]=1,s["border"+a+sl]=0,s[i.p]=t+"px",Le.set(e,s)},st=[],Jm={},ku,xx=function(){return Cn()-Vi>34&&(ku||(ku=requestAnimationFrame(Vr)))},oa=function(){(!On||!On.isPressed||On.startX>xt.clientWidth)&&(lt.cache++,On?ku||(ku=requestAnimationFrame(Vr)):Vr(),Vi||Io("scrollStart"),Vi=Cn())},tp=function(){P1=at.innerWidth,b1=at.innerHeight},zl=function(e){lt.cache++,(e===!0||!An&&!R1&&!Mt.fullscreenElement&&!Mt.webkitFullscreenElement&&(!Km||P1!==at.innerWidth||Math.abs(at.innerHeight-b1)>at.innerHeight*.25))&&fd.restart(!0)},No={},ED=[],k1=function n(){return cn(it,"scrollEnd",n)||mo(!0)},Io=function(e){return No[e]&&No[e].map(function(t){return t()})||ED},fi=[],B1=function(e){for(var t=0;t<fi.length;t+=5)(!e||fi[t+4]&&fi[t+4].query===e)&&(fi[t].style.cssText=fi[t+1],fi[t].getBBox&&fi[t].setAttribute("transform",fi[t+2]||""),fi[t+3].uncache=1)},z1=function(){return lt.forEach(function(e){return Pn(e)&&++e.cacheID&&(e.rec=e())})},L_=function(e,t){var i;for(Bn=0;Bn<st.length;Bn++)i=st[Bn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));ru=!0,t&&B1(t),t||Io("revert")},H1=function(e,t){lt.cache++,(t||!zn)&&lt.forEach(function(i){return Pn(i)&&i.cacheID++&&(i.rec=0)}),hi(e)&&(at.history.scrollRestoration=w_=e)},zn,To=0,yx,TD=function(){if(yx!==To){var e=yx=To;requestAnimationFrame(function(){return e===To&&mo(!0)})}},V1=function(){xt.appendChild(Ba),A_=!On&&Ba.offsetHeight||at.innerHeight,xt.removeChild(Ba)},Sx=function(e){return Ou(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},mo=function(e,t){if(mi=Mt.documentElement,xt=Mt.body,T_=[at,Mt,mi,xt],Vi&&!e&&!ru){fn(it,"scrollEnd",k1);return}V1(),zn=it.isRefreshing=!0,ru||z1();var i=Io("refreshInit");C1&&it.sort(),t||L_(),lt.forEach(function(r){Pn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),st.slice(0).forEach(function(r){return r.refresh()}),ru=!1,st.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Qm=1,Sx(!0),st.forEach(function(r){var s=_r(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Sx(!1),Qm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),lt.forEach(function(r){Pn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),H1(w_,1),fd.pause(),To++,zn=2,Vr(2),st.forEach(function(r){return Pn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),zn=it.isRefreshing=!1,Io("refresh")},eg=0,Ef=1,uu,Vr=function(e){if(e===2||!zn&&!ru){it.isUpdating=!0,uu&&uu.update(0);var t=st.length,i=Cn(),r=i-ep>=50,s=t&&st[0].scroll();if(Ef=eg>s?-1:1,zn||(eg=s),r&&(Vi&&!kd&&i-Vi>200&&(Vi=0,Io("scrollEnd")),Fl=ep,ep=i),Ef<0){for(Bn=t;Bn-- >0;)st[Bn]&&st[Bn].update(0,r);Ef=1}else for(Bn=0;Bn<t;Bn++)st[Bn]&&st[Bn].update(0,r);it.isUpdating=!1}ku=0},tg=[U1,F1,R_,C_,Ui+lu,Ui+su,Ui+au,Ui+ou,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Tf=tg.concat([Mo,Eo,"boxSizing","max"+sl,"max"+b_,"position",Ui,Kt,Kt+au,Kt+su,Kt+lu,Kt+ou]),wD=function(e,t,i){za(i);var r=e._gsap;if(r.spacerIsNative)za(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},np=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=tg.length,o=t.style,a=e.style,l;s--;)l=tg[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[R_]=a[C_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Mo]=dd(e,Hn)+nn,o[Eo]=dd(e,sn)+nn,o[Kt]=a[Ui]=a[F1]=a[U1]="0",za(r),a[Mo]=a["max"+sl]=i[Mo],a[Eo]=a["max"+b_]=i[Eo],a[Kt]=i[Kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},AD=/([A-Z])/g,za=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Le.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(AD,"-$1").toLowerCase())}},qc=function(e){for(var t=Tf.length,i=e.style,r=[],s=0;s<t;s++)r.push(Tf[s],i[Tf[s]]);return r.t=e,r},CD=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},wf={left:0,top:0},Mx=function(e,t,i,r,s,o,a,l,u,c,d,f,p,_){Pn(e)&&(e=e(l)),hi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Sf("0"+e.substr(3),i):0));var g=p?p.time():0,m,h,x;if(p&&p.seek(0),isNaN(e)||(e=+e),Bl(e))p&&(e=Le.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&Mf(a,i,r,!0);else{Pn(t)&&(t=t(l));var v=(e||"0").split(" "),y,C,w,M;x=jn(t,l)||xt,y=Ur(x)||{},(!y||!y.left&&!y.top)&&Fi(x).display==="none"&&(M=x.style.display,x.style.display="block",y=Ur(x),M?x.style.display=M:x.style.removeProperty("display")),C=Sf(v[0],y[r.d]),w=Sf(v[1]||"0",i),e=y[r.p]-u[r.p]-c+C+s-w,a&&Mf(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var R=e+i,E=o._isStart;m="scroll"+r.d2,Mf(o,R,r,E&&R>20||!E&&(d?Math.max(xt[m],mi[m]):o.parentNode[m])<=R+1),d&&(u=Ur(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+nn))}return p&&x&&(m=Ur(x),p.seek(f),h=Ur(x),p._caScrollDist=m[r.p]-h[r.p],e=e/p._caScrollDist*f),p&&p.seek(g),p?e:Math.round(e)},RD=/(webkit|moz|length|cssText|inset)/i,Ex=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===xt){e._stOrig=s.cssText,a=Fi(e);for(o in a)!+o&&!RD.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Le.core.getCache(e).uncache=1,t.appendChild(e)}},G1=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Kc=function(e,t,i){var r={};r[t.p]="+="+i,Le.set(e,r)},Tx=function(e,t){var i=Bs(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var f=o.tween,p=l.onComplete,_={};u=u||i();var g=G1(i,u,function(){f.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(u+c*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){lt.cache++,o.tween&&Vr()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=Le.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},fn(e,"wheel",i.wheelHandler),it.isTouch&&fn(e,"touchmove",i.wheelHandler),s},it=function(){function n(t,i){aa||n.register(Le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Zm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ol){this.update=this.refresh=this.kill=ur;return}i=_x(hi(i)||Bl(i)||i.nodeType?{trigger:i}:i,Yc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,f=s.trigger,p=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,h=s.onScrubComplete,x=s.onSnapComplete,v=s.once,y=s.snap,C=s.pinReparent,w=s.pinSpacer,M=s.containerAnimation,R=s.fastScrollEnd,E=s.preventOverlaps,S=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Hn:sn,L=!d&&d!==0,O=jn(i.scroller||at),z=Le.core.getCache(O),j=Do(O),q=("pinType"in i?i.pinType:Ds(O,"pinType")||j&&"fixed")==="fixed",X=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],V=L&&i.toggleActions.split(" "),N="markers"in i?i.markers:Yc.markers,K=j?0:parseFloat(Fi(O)["border"+S.p2+sl])||0,b=this,ie=i.onRefreshInit&&function(){return i.onRefreshInit(b)},Ee=vD(O,j,S),$e=xD(O,j),$=0,re=0,me=0,fe=Bs(O,S),Te,Ie,qe,et,D,he,_e,we,ae,k,Ae,Ue,P,T,G,ee,ne,Z,Ce,se,le,Ne,oe,ve,Oe,Be,xe,Ve,je,Qe,U,Q,J,te,ce,ge,Ye,dt,rt;if(b._startClamp=b._endClamp=!1,b._dir=S,m*=45,b.scroller=O,b.scroll=M?M.time.bind(M):fe,et=fe(),b.vars=i,r=r||i.animation,"refreshPriority"in i&&(C1=1,i.refreshPriority===-9999&&(uu=b)),z.tweenScroll=z.tweenScroll||{top:Tx(O,sn),left:Tx(O,Hn)},b.tweenTo=Te=z.tweenScroll[S.p],b.scrubDuration=function(pe){J=Bl(pe)&&pe,J?Q?Q.duration(pe):Q=Le.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:J,paused:!0,onComplete:function(){return h&&h(b)}}):(Q&&Q.progress(1).kill(),Q=0)},r&&(r.vars.lazy=!1,r._initted&&!b.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),b.animation=r.pause(),r.scrollTrigger=b,b.scrubDuration(d),Qe=0,l||(l=r.vars.id)),y&&((!so(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in xt.style&&Le.set(j?[xt,mi]:O,{scrollBehavior:"auto"}),lt.forEach(function(pe){return Pn(pe)&&pe.target===(j?Mt.scrollingElement||mi:O)&&(pe.smooth=!1)}),qe=Pn(y.snapTo)?y.snapTo:y.snapTo==="labels"?SD(r):y.snapTo==="labelsDirectional"?MD(r):y.directional!==!1?function(pe,Xe){return P_(y.snapTo)(pe,Cn()-re<500?0:Xe.direction)}:Le.utils.snap(y.snapTo),te=y.duration||{min:.1,max:2},te=so(te)?iu(te.min,te.max):iu(te,te),ce=Le.delayedCall(y.delay||J/2||.1,function(){var pe=fe(),Xe=Cn()-re<500,ze=Te.tween;if((Xe||Math.abs(b.getVelocity())<10)&&!ze&&!kd&&$!==pe){var Ke=(pe-he)/T,Ft=r&&!L?r.totalProgress():Ke,ot=Xe?0:(Ft-U)/(Cn()-Fl)*1e3||0,Ct=Le.utils.clamp(-Ke,1-Ke,sa(ot/2)*ot/.185),en=Ke+(y.inertia===!1?0:Ct),Pt,Rt,St=y,ai=St.onStart,A=St.onInterrupt,F=St.onComplete;if(Pt=qe(en,b),Bl(Pt)||(Pt=en),Rt=Math.max(0,Math.round(he+Pt*T)),pe<=_e&&pe>=he&&Rt!==pe){if(ze&&!ze._initted&&ze.data<=sa(Rt-pe))return;y.inertia===!1&&(Ct=Pt-Ke),Te(Rt,{duration:te(sa(Math.max(sa(en-Ft),sa(Pt-Ft))*.185/ot/.05||0)),ease:y.ease||"power3",data:sa(Rt-pe),onInterrupt:function(){return ce.restart(!0)&&A&&ra(b,A)},onComplete:function(){b.update(),$=fe(),r&&!L&&(Q?Q.resetTo("totalProgress",Pt,r._tTime/r._tDur):r.progress(Pt)),Qe=U=r&&!L?r.totalProgress():b.progress,x&&x(b),F&&ra(b,F)}},pe,Ct*T,Rt-pe-Ct*T),ai&&ra(b,ai,Te.tween)}}else b.isActive&&$!==pe&&ce.restart(!0)}).pause()),l&&(Jm[l]=b),f=b.trigger=jn(f||p!==!0&&p),rt=f&&f._gsap&&f._gsap.stRevert,rt&&(rt=rt(b)),p=p===!0?f:jn(p),hi(a)&&(a={targets:f,className:a}),p&&(_===!1||_===Ui||(_=!_&&p.parentNode&&p.parentNode.style&&Fi(p.parentNode).display==="flex"?!1:Kt),b.pin=p,Ie=Le.core.getCache(p),Ie.spacer?G=Ie.pinState:(w&&(w=jn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ie.spacerIsNative=!!w,w&&(Ie.spacerState=qc(w))),Ie.spacer=Z=w||Mt.createElement("div"),Z.classList.add("pin-spacer"),l&&Z.classList.add("pin-spacer-"+l),Ie.pinState=G=qc(p)),i.force3D!==!1&&Le.set(p,{force3D:!0}),b.spacer=Z=Ie.spacer,je=Fi(p),ve=je[_+S.os2],se=Le.getProperty(p),le=Le.quickSetter(p,S.a,nn),np(p,Z,je),ne=qc(p)),N){Ue=so(N)?_x(N,vx):vx,k=$c("scroller-start",l,O,S,Ue,0),Ae=$c("scroller-end",l,O,S,Ue,0,k),Ce=k["offset"+S.op.d2];var Ze=jn(Ds(O,"content")||O);we=this.markerStart=$c("start",l,Ze,S,Ue,Ce,0,M),ae=this.markerEnd=$c("end",l,Ze,S,Ue,Ce,0,M),M&&(dt=Le.quickSetter([we,ae],S.a,nn)),!q&&!(Sr.length&&Ds(O,"fixedMarkers")===!0)&&(yD(j?xt:O),Le.set([k,Ae],{force3D:!0}),Be=Le.quickSetter(k,S.a,nn),Ve=Le.quickSetter(Ae,S.a,nn))}if(M){var Ge=M.vars.onUpdate,Fe=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){b.update(0,0,1),Ge&&Ge.apply(M,Fe||[])})}if(b.previous=function(){return st[st.indexOf(b)-1]},b.next=function(){return st[st.indexOf(b)+1]},b.revert=function(pe,Xe){if(!Xe)return b.kill(!0);var ze=pe!==!1||!b.enabled,Ke=An;ze!==b.isReverted&&(ze&&(ge=Math.max(fe(),b.scroll.rec||0),me=b.progress,Ye=r&&r.progress()),we&&[we,ae,k,Ae].forEach(function(Ft){return Ft.style.display=ze?"none":"block"}),ze&&(An=b,b.update(ze)),p&&(!C||!b.isActive)&&(ze?wD(p,Z,G):np(p,Z,Fi(p),Oe)),ze||b.update(ze),An=Ke,b.isReverted=ze)},b.refresh=function(pe,Xe,ze,Ke){if(!((An||!b.enabled)&&!Xe)){if(p&&pe&&Vi){fn(n,"scrollEnd",k1);return}!zn&&ie&&ie(b),An=b,Te.tween&&!ze&&(Te.tween.kill(),Te.tween=0),Q&&Q.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(De){return De.vars.immediateRender&&De.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),b.isReverted||b.revert(!0,!0),b._subPinOffset=!1;var Ft=Ee(),ot=$e(),Ct=M?M.duration():_r(O,S),en=T<=.01||!T,Pt=0,Rt=Ke||0,St=so(ze)?ze.end:i.end,ai=i.endTrigger||f,A=so(ze)?ze.start:i.start||(i.start===0||!f?0:p?"0 0":"0 100%"),F=b.pinnedContainer=i.pinnedContainer&&jn(i.pinnedContainer,b),W=f&&Math.max(0,st.indexOf(b))||0,H=W,B,ue,Se,be,ye,Re,He,ke,ht,Tt,pt,tn,ct;for(N&&so(ze)&&(tn=Le.getProperty(k,S.p),ct=Le.getProperty(Ae,S.p));H-- >0;)Re=st[H],Re.end||Re.refresh(0,1)||(An=b),He=Re.pin,He&&(He===f||He===p||He===F)&&!Re.isReverted&&(Tt||(Tt=[]),Tt.unshift(Re),Re.revert(!0,!0)),Re!==st[H]&&(W--,H--);for(Pn(A)&&(A=A(b)),A=hx(A,"start",b),he=Mx(A,f,Ft,S,fe(),we,k,b,ot,K,q,Ct,M,b._startClamp&&"_startClamp")||(p?-.001:0),Pn(St)&&(St=St(b)),hi(St)&&!St.indexOf("+=")&&(~St.indexOf(" ")?St=(hi(A)?A.split(" ")[0]:"")+St:(Pt=Sf(St.substr(2),Ft),St=hi(A)?A:(M?Le.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,he):he)+Pt,ai=f)),St=hx(St,"end",b),_e=Math.max(he,Mx(St||(ai?"100% 0":Ct),ai,Ft,S,fe()+Pt,ae,Ae,b,ot,K,q,Ct,M,b._endClamp&&"_endClamp"))||-.001,Pt=0,H=W;H--;)Re=st[H]||{},He=Re.pin,He&&Re.start-Re._pinPush<=he&&!M&&Re.end>0&&(B=Re.end-(b._startClamp?Math.max(0,Re.start):Re.start),(He===f&&Re.start-Re._pinPush<he||He===F)&&isNaN(A)&&(Pt+=B*(1-Re.progress)),He===p&&(Rt+=B));if(he+=Pt,_e+=Pt,b._startClamp&&(b._startClamp+=Pt),b._endClamp&&!zn&&(b._endClamp=_e||-.001,_e=Math.min(_e,_r(O,S))),T=_e-he||(he-=.01)&&.001,en&&(me=Le.utils.clamp(0,1,Le.utils.normalize(he,_e,ge))),b._pinPush=Rt,we&&Pt&&(B={},B[S.a]="+="+Pt,F&&(B[S.p]="-="+fe()),Le.set([we,ae],B)),p&&!(Qm&&b.end>=_r(O,S)))B=Fi(p),be=S===sn,Se=fe(),Ne=parseFloat(se(S.a))+Rt,!Ct&&_e>1&&(pt=(j?Mt.scrollingElement||mi:O).style,pt={style:pt,value:pt["overflow"+S.a.toUpperCase()]},j&&Fi(xt)["overflow"+S.a.toUpperCase()]!=="scroll"&&(pt.style["overflow"+S.a.toUpperCase()]="scroll")),np(p,Z,B),ne=qc(p),ue=Ur(p,!0),ke=q&&Bs(O,be?Hn:sn)(),_?(Oe=[_+S.os2,T+Rt+nn],Oe.t=Z,H=_===Kt?dd(p,S)+T+Rt:0,H&&(Oe.push(S.d,H+nn),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=H+nn)),za(Oe),F&&st.forEach(function(De){De.pin===F&&De.vars.pinSpacing!==!1&&(De._subPinOffset=!0)}),q&&fe(ge)):(H=dd(p,S),H&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=H+nn)),q&&(ye={top:ue.top+(be?Se-he:ke)+nn,left:ue.left+(be?ke:Se-he)+nn,boxSizing:"border-box",position:"fixed"},ye[Mo]=ye["max"+sl]=Math.ceil(ue.width)+nn,ye[Eo]=ye["max"+b_]=Math.ceil(ue.height)+nn,ye[Ui]=ye[Ui+au]=ye[Ui+su]=ye[Ui+lu]=ye[Ui+ou]="0",ye[Kt]=B[Kt],ye[Kt+au]=B[Kt+au],ye[Kt+su]=B[Kt+su],ye[Kt+lu]=B[Kt+lu],ye[Kt+ou]=B[Kt+ou],ee=CD(G,ye,C),zn&&fe(0)),r?(ht=r._initted,Qh(1),r.render(r.duration(),!0,!0),oe=se(S.a)-Ne+T+Rt,xe=Math.abs(T-oe)>1,q&&xe&&ee.splice(ee.length-2,2),r.render(0,!0,!0),ht||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Qh(0)):oe=T,pt&&(pt.value?pt.style["overflow"+S.a.toUpperCase()]=pt.value:pt.style.removeProperty("overflow-"+S.a));else if(f&&fe()&&!M)for(ue=f.parentNode;ue&&ue!==xt;)ue._pinOffset&&(he-=ue._pinOffset,_e-=ue._pinOffset),ue=ue.parentNode;Tt&&Tt.forEach(function(De){return De.revert(!1,!0)}),b.start=he,b.end=_e,et=D=zn?ge:fe(),!M&&!zn&&(et<ge&&fe(ge),b.scroll.rec=0),b.revert(!1,!0),re=Cn(),ce&&($=-1,ce.restart(!0)),An=0,r&&L&&(r._initted||Ye)&&r.progress()!==Ye&&r.progress(Ye||0,!0).render(r.time(),!0,!0),(en||me!==b.progress||M||g||r&&!r._initted)&&(r&&!L&&(r._initted||me||r.vars.immediateRender!==!1)&&r.totalProgress(M&&he<-.001&&!me?Le.utils.normalize(he,_e,0):me,!0),b.progress=en||(et-he)/T===me?0:me),p&&_&&(Z._pinOffset=Math.round(b.progress*oe)),Q&&Q.invalidate(),isNaN(tn)||(tn-=Le.getProperty(k,S.p),ct-=Le.getProperty(Ae,S.p),Kc(k,S,tn),Kc(we,S,tn-(Ke||0)),Kc(Ae,S,ct),Kc(ae,S,ct-(Ke||0))),en&&!zn&&b.update(),c&&!zn&&!P&&(P=!0,c(b),P=!1)}},b.getVelocity=function(){return(fe()-D)/(Cn()-Fl)*1e3||0},b.endAnimation=function(){Rl(b.callbackAnimation),r&&(Q?Q.progress(1):r.paused()?L||Rl(r,b.direction<0,1):Rl(r,r.reversed()))},b.labelToScroll=function(pe){return r&&r.labels&&(he||b.refresh()||he)+r.labels[pe]/r.duration()*T||0},b.getTrailing=function(pe){var Xe=st.indexOf(b),ze=b.direction>0?st.slice(0,Xe).reverse():st.slice(Xe+1);return(hi(pe)?ze.filter(function(Ke){return Ke.vars.preventOverlaps===pe}):ze).filter(function(Ke){return b.direction>0?Ke.end<=he:Ke.start>=_e})},b.update=function(pe,Xe,ze){if(!(M&&!ze&&!pe)){var Ke=zn===!0?ge:b.scroll(),Ft=pe?0:(Ke-he)/T,ot=Ft<0?0:Ft>1?1:Ft||0,Ct=b.progress,en,Pt,Rt,St,ai,A,F,W;if(Xe&&(D=et,et=M?fe():Ke,y&&(U=Qe,Qe=r&&!L?r.totalProgress():ot)),m&&p&&!An&&!Gc&&Vi&&(!ot&&he<Ke+(Ke-D)/(Cn()-Fl)*m?ot=1e-4:ot===1&&_e>Ke+(Ke-D)/(Cn()-Fl)*m&&(ot=.9999)),ot!==Ct&&b.enabled){if(en=b.isActive=!!ot&&ot<1,Pt=!!Ct&&Ct<1,A=en!==Pt,ai=A||!!ot!=!!Ct,b.direction=ot>Ct?1:-1,b.progress=ot,ai&&!An&&(Rt=ot&&!Ct?0:ot===1?1:Ct===1?2:3,L&&(St=!A&&V[Rt+1]!=="none"&&V[Rt+1]||V[Rt],W=r&&(St==="complete"||St==="reset"||St in r))),E&&(A||W)&&(W||d||!r)&&(Pn(E)?E(b):b.getTrailing(E).forEach(function(Se){return Se.endAnimation()})),L||(Q&&!An&&!Gc?(Q._dp._time-Q._start!==Q._time&&Q.render(Q._dp._time-Q._start),Q.resetTo?Q.resetTo("totalProgress",ot,r._tTime/r._tDur):(Q.vars.totalProgress=ot,Q.invalidate().restart())):r&&r.totalProgress(ot,!!(An&&(re||pe)))),p){if(pe&&_&&(Z.style[_+S.os2]=ve),!q)le(kl(Ne+oe*ot));else if(ai){if(F=!pe&&ot>Ct&&_e+1>Ke&&Ke+1>=_r(O,S),C)if(!pe&&(en||F)){var H=Ur(p,!0),B=Ke-he;Ex(p,xt,H.top+(S===sn?B:0)+nn,H.left+(S===sn?0:B)+nn)}else Ex(p,Z);za(en||F?ee:ne),xe&&ot<1&&en||le(Ne+(ot===1&&!F?oe:0))}}y&&!Te.tween&&!An&&!Gc&&ce.restart(!0),a&&(A||v&&ot&&(ot<1||!Jh))&&Ou(a.targets).forEach(function(Se){return Se.classList[en||v?"add":"remove"](a.className)}),o&&!L&&!pe&&o(b),ai&&!An?(L&&(W&&(St==="complete"?r.pause().totalProgress(1):St==="reset"?r.restart(!0).pause():St==="restart"?r.restart(!0):r[St]()),o&&o(b)),(A||!Jh)&&(u&&A&&ra(b,u),X[Rt]&&ra(b,X[Rt]),v&&(ot===1?b.kill(!1,1):X[Rt]=0),A||(Rt=ot===1?1:3,X[Rt]&&ra(b,X[Rt]))),R&&!en&&Math.abs(b.getVelocity())>(Bl(R)?R:2500)&&(Rl(b.callbackAnimation),Q?Q.progress(1):Rl(r,St==="reverse"?1:!ot,1))):L&&o&&!An&&o(b)}if(Ve){var ue=M?Ke/M.duration()*(M._caScrollDist||0):Ke;Be(ue+(k._isFlipped?1:0)),Ve(ue)}dt&&dt(-Ke/M.duration()*(M._caScrollDist||0))}},b.enable=function(pe,Xe){b.enabled||(b.enabled=!0,fn(O,"resize",zl),j||fn(O,"scroll",oa),ie&&fn(n,"refreshInit",ie),pe!==!1&&(b.progress=me=0,et=D=$=fe()),Xe!==!1&&b.refresh())},b.getTween=function(pe){return pe&&Te?Te.tween:Q},b.setPositions=function(pe,Xe,ze,Ke){if(M){var Ft=M.scrollTrigger,ot=M.duration(),Ct=Ft.end-Ft.start;pe=Ft.start+Ct*pe/ot,Xe=Ft.start+Ct*Xe/ot}b.refresh(!1,!1,{start:px(pe,ze&&!!b._startClamp),end:px(Xe,ze&&!!b._endClamp)},Ke),b.update()},b.adjustPinSpacing=function(pe){if(Oe&&pe){var Xe=Oe.indexOf(S.d)+1;Oe[Xe]=parseFloat(Oe[Xe])+pe+nn,Oe[1]=parseFloat(Oe[1])+pe+nn,za(Oe)}},b.disable=function(pe,Xe){if(pe!==!1&&b.revert(!0,!0),b.enabled&&(b.enabled=b.isActive=!1,Xe||Q&&Q.pause(),ge=0,Ie&&(Ie.uncache=1),ie&&cn(n,"refreshInit",ie),ce&&(ce.pause(),Te.tween&&Te.tween.kill()&&(Te.tween=0)),!j)){for(var ze=st.length;ze--;)if(st[ze].scroller===O&&st[ze]!==b)return;cn(O,"resize",zl),j||cn(O,"scroll",oa)}},b.kill=function(pe,Xe){b.disable(pe,Xe),Q&&!Xe&&Q.kill(),l&&delete Jm[l];var ze=st.indexOf(b);ze>=0&&st.splice(ze,1),ze===Bn&&Ef>0&&Bn--,ze=0,st.forEach(function(Ke){return Ke.scroller===b.scroller&&(ze=1)}),ze||zn||(b.scroll.rec=0),r&&(r.scrollTrigger=null,pe&&r.revert({kill:!1}),Xe||r.kill()),we&&[we,ae,k,Ae].forEach(function(Ke){return Ke.parentNode&&Ke.parentNode.removeChild(Ke)}),uu===b&&(uu=0),p&&(Ie&&(Ie.uncache=1),ze=0,st.forEach(function(Ke){return Ke.pin===p&&ze++}),ze||(Ie.spacer=0)),i.onKill&&i.onKill(b)},st.push(b),b.enable(!1,!1),rt&&rt(b),r&&r.add&&!T){var Je=b.update;b.update=function(){b.update=Je,lt.cache++,he||_e||b.refresh()},Le.delayedCall(.01,b.update),T=.01,he=_e=0}else b.refresh();p&&TD()},n.register=function(i){return aa||(Le=i||D1(),L1()&&window.document&&n.enable(),aa=Ol),aa},n.defaults=function(i){if(i)for(var r in i)Yc[r]=i[r];return Yc},n.disable=function(i,r){Ol=0,st.forEach(function(o){return o[r?"kill":"disable"](i)}),cn(at,"wheel",oa),cn(Mt,"scroll",oa),clearInterval(Vc),cn(Mt,"touchcancel",ur),cn(xt,"touchstart",ur),Xc(cn,Mt,"pointerdown,touchstart,mousedown",mx),Xc(cn,Mt,"pointerup,touchend,mouseup",gx),fd.kill(),Wc(cn);for(var s=0;s<lt.length;s+=3)jc(cn,lt[s],lt[s+1]),jc(cn,lt[s],lt[s+2])},n.enable=function(){if(at=window,Mt=document,mi=Mt.documentElement,xt=Mt.body,Le){if(Ou=Le.utils.toArray,iu=Le.utils.clamp,Zm=Le.core.context||ur,Qh=Le.core.suppressOverwrites||ur,w_=at.history.scrollRestoration||"auto",eg=at.pageYOffset||0,Le.core.globals("ScrollTrigger",n),xt){Ol=1,Ba=document.createElement("div"),Ba.style.height="100vh",Ba.style.position="absolute",V1(),_D(),Yt.register(Le),n.isTouch=Yt.isTouch,as=Yt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Km=Yt.isTouch===1,fn(at,"wheel",oa),T_=[at,Mt,mi,xt],Le.matchMedia?(n.matchMedia=function(c){var d=Le.matchMedia(),f;for(f in c)d.add(f,c[f]);return d},Le.addEventListener("matchMediaInit",function(){z1(),L_()}),Le.addEventListener("matchMediaRevert",function(){return B1()}),Le.addEventListener("matchMedia",function(){mo(0,1),Io("matchMedia")}),Le.matchMedia().add("(orientation: portrait)",function(){return tp(),tp})):console.warn("Requires GSAP 3.11.0 or later"),tp(),fn(Mt,"scroll",oa);var i=xt.hasAttribute("style"),r=xt.style,s=r.borderTopStyle,o=Le.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Ur(xt),sn.m=Math.round(a.top+sn.sc())||0,Hn.m=Math.round(a.left+Hn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(xt.setAttribute("style",""),xt.removeAttribute("style")),Vc=setInterval(xx,250),Le.delayedCall(.5,function(){return Gc=0}),fn(Mt,"touchcancel",ur),fn(xt,"touchstart",ur),Xc(fn,Mt,"pointerdown,touchstart,mousedown",mx),Xc(fn,Mt,"pointerup,touchend,mouseup",gx),qm=Le.utils.checkPrefix("transform"),Tf.push(qm),aa=Cn(),fd=Le.delayedCall(.2,mo).pause(),la=[Mt,"visibilitychange",function(){var c=at.innerWidth,d=at.innerHeight;Mt.hidden?(fx=c,dx=d):(fx!==c||dx!==d)&&zl()},Mt,"DOMContentLoaded",mo,at,"load",mo,at,"resize",zl],Wc(fn),st.forEach(function(c){return c.enable(0,1)}),l=0;l<lt.length;l+=3)jc(cn,lt[l],lt[l+1]),jc(cn,lt[l],lt[l+2])}else if(Mt){var u=function c(){n.enable(),Mt.removeEventListener("DOMContentLoaded",c)};Mt.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(Jh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Vc)||(Vc=r)&&setInterval(xx,r),"ignoreMobileResize"in i&&(Km=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Wc(cn)||Wc(fn,i.autoRefreshEvents||"none"),R1=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=jn(i),o=lt.indexOf(s),a=Do(s);~o&&lt.splice(o,a?6:2),r&&(a?Sr.unshift(at,r,xt,r,mi,r):Sr.unshift(s,r))},n.clearMatchMedia=function(i){st.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(hi(i)?jn(i):i).getBoundingClientRect(),a=o[s?Mo:Eo]*r||0;return s?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},n.positionInViewport=function(i,r,s){hi(i)&&(i=jn(i));var o=i.getBoundingClientRect(),a=o[s?Mo:Eo],l=r==null?a/2:r in hd?hd[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/at.innerWidth:(o.top+l)/at.innerHeight},n.killAll=function(i){if(st.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=No.killAll||[];No={},r.forEach(function(s){return s()})}},n}();it.version="3.15.0";it.saveStyles=function(n){return n?Ou(n).forEach(function(e){if(e&&e.style){var t=fi.indexOf(e);t>=0&&fi.splice(t,5),fi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Le.core.getCache(e),Zm())}}):fi};it.revert=function(n,e){return L_(!n,e)};it.create=function(n,e){return new it(n,e)};it.refresh=function(n){return n?zl(!0):(aa||it.register())&&mo(!0)};it.update=function(n){return++lt.cache&&Vr(n===!0?2:0)};it.clearScrollMemory=H1;it.maxScroll=function(n,e){return _r(n,e?Hn:sn)};it.getScrollFunc=function(n,e){return Bs(jn(n),e?Hn:sn)};it.getById=function(n){return Jm[n]};it.getAll=function(){return st.filter(function(n){return n.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!Vi};it.snapDirectional=P_;it.addEventListener=function(n,e){var t=No[n]||(No[n]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(n,e){var t=No[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};it.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],f=[],p=Le.delayedCall(r,function(){c(d,f),d=[],f=[]}).pause();return function(_){d.length||p.restart(!0),d.push(_.trigger),f.push(_),s<=d.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Pn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Pn(s)&&(s=s(),fn(it,"refresh",function(){return s=e.batchMax()})),Ou(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(it.create(u))}),t};var wx=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},ip=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Yt.isTouch?" pinch-zoom":""):"none",e===mi&&n(xt,t)},Zc={auto:1,scroll:1},bD=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Le.core.getCache(s),a=Cn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Zc[(l=Fi(s)).overflowY]||Zc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Do(s)&&(Zc[(l=Fi(s)).overflowY]||Zc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},W1=function(e,t,i,r){return Yt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&bD,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&fn(Mt,Yt.eventTypes[0],Cx,!1,!0)},onDisable:function(){return cn(Mt,Yt.eventTypes[0],Cx,!0)}})},PD=/(input|label|select|textarea)/i,Ax,Cx=function(e){var t=PD.test(e.target.tagName);(t||Ax)&&(e._gsapAllow=!0,Ax=t)},LD=function(e){so(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=jn(e.target)||mi,c=Le.core.globals().ScrollSmoother,d=c&&c.get(),f=as&&(e.content&&jn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=Bs(u,sn),_=Bs(u,Hn),g=1,m=(Yt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,h=0,x=Pn(r)?function(){return r(a)}:function(){return r||2.8},v,y,C=W1(u,e.type,!0,s),w=function(){return y=!1},M=ur,R=ur,E=function(){l=_r(u,sn),R=iu(as?1:0,l),i&&(M=iu(0,_r(u,Hn))),v=To},S=function(){f._gsap.y=kl(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},L=function(){if(y){requestAnimationFrame(w);var N=kl(a.deltaY/2),K=R(p.v-N);if(f&&K!==p.v+p.offset){p.offset=K-p.v;var b=kl((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+b+", 0, 1)",f._gsap.y=b+"px",p.cacheID=lt.cache,Vr()}return!0}p.offset&&S(),y=!0},O,z,j,q,X=function(){E(),O.isActive()&&O.vars.scrollY>l&&(p()>l?O.progress(1)&&p(l):O.resetTo("scrollY",l))};return f&&Le.set(f,{y:"+=0"}),e.ignoreCheck=function(V){return as&&V.type==="touchmove"&&L()||g>1.05&&V.type!=="touchstart"||a.isGesturing||V.touches&&V.touches.length>1},e.onPress=function(){y=!1;var V=g;g=kl((at.visualViewport&&at.visualViewport.scale||1)/m),O.pause(),V!==g&&ip(u,g>1.01?!0:i?!1:"x"),z=_(),j=p(),E(),v=To},e.onRelease=e.onGestureStart=function(V,N){if(p.offset&&S(),!N)q.restart(!0);else{lt.cache++;var K=x(),b,ie;i&&(b=_(),ie=b+K*.05*-V.velocityX/.227,K*=wx(_,b,ie,_r(u,Hn)),O.vars.scrollX=M(ie)),b=p(),ie=b+K*.05*-V.velocityY/.227,K*=wx(p,b,ie,_r(u,sn)),O.vars.scrollY=R(ie),O.invalidate().duration(K).play(.01),(as&&O.vars.scrollY>=l||b>=l-1)&&Le.to({},{onUpdate:X,duration:K})}o&&o(V)},e.onWheel=function(){O._ts&&O.pause(),Cn()-h>1e3&&(v=0,h=Cn())},e.onChange=function(V,N,K,b,ie){if(To!==v&&E(),N&&i&&_(M(b[2]===N?z+(V.startX-V.x):_()+N-b[1])),K){p.offset&&S();var Ee=ie[2]===K,$e=Ee?j+V.startY-V.y:p()+K-ie[1],$=R($e);Ee&&$e!==$&&(j+=$-$e),p($)}(K||N)&&Vr()},e.onEnable=function(){ip(u,i?!1:"x"),it.addEventListener("refresh",X),fn(at,"resize",X),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=_.smooth=!1),C.enable()},e.onDisable=function(){ip(u,!0),cn(at,"resize",X),it.removeEventListener("refresh",X),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new Yt(e),a.iOS=as,as&&!p()&&p(1),as&&Le.ticker.add(ur),q=a._dc,O=Le.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:G1(p,p(),function(){return O.pause()})},onUpdate:Vr,onComplete:q.vars.onComplete}),a};it.sort=function(n){if(Pn(n))return st.sort(n);var e=at.pageYOffset||0;return it.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),st.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};it.observe=function(n){return new Yt(n)};it.normalizeScroll=function(n){if(typeof n>"u")return On;if(n===!0&&On)return On.enable();if(n===!1){On&&On.kill(),On=n;return}var e=n instanceof Yt?n:LD(n);return On&&On.target===e.target&&On.kill(),Do(e.target)&&(On=e),e};it.core={_getVelocityProp:$m,_inputObserver:W1,_scrollers:lt,_proxies:Sr,bridge:{ss:function(){Vi||Io("scrollStart"),Vi=Cn()},ref:function(){return An}}};D1()&&Le.registerPlugin(it);const DD="/TANTRAVEDA/assets/portal-image-Bsyt2sr3.jpg";x1.registerPlugin(it);const ND=()=>{const n=We.useRef(null),e=We.useRef(null),t=We.useRef(null),i=We.useRef(null),r=We.useRef([]),s=We.useRef(null),o=We.useRef({x:0,y:0,targetX:0,targetY:0,hasMoved:!1}),a=We.useRef({current:0,target:0}),l=We.useRef(null),u=We.useRef({active:!1,progress:0,direction:1,startTime:0,duration:1.4}),c=We.useRef(-1),d=We.useRef(0),f=We.useRef(null),p=We.useRef({current:0,target:0}),_={fiberCount:160,segmentsPerFiber:150,waveWidth:30,waveHeight:7},g=window.matchMedia("(prefers-reduced-motion: reduce)").matches,m=(C,w,M)=>C+(w-C)*M,h=C=>C*C*(3-2*C),x=C=>1-Math.pow(1-C,3),v=C=>C*C*C*(C*(C*6-15)+10),y=(C,w)=>{const M=Math.floor(C),R=Math.floor(w),E=C-M,S=w-R,L=E*E*(3-2*E),O=S*S*(3-2*S),z=(N,K)=>{const b=Math.sin(N*374761393+K*668265263)*43758.5453;return b-Math.floor(b)},j=z(M,R),q=z(M+1,R),X=z(M,R+1),V=z(M+1,R+1);return m(m(j,q,L),m(X,V,L),O)};return We.useEffect(()=>{if(!n.current)return;const C=new B2;e.current=C;const w=new Ii(60,window.innerWidth/window.innerHeight,.1,1e3);w.position.set(0,0,28),t.current=w;const M=new k2({antialias:!0,alpha:!0,powerPreference:"high-performance"});M.setSize(window.innerWidth,window.innerHeight),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.current.appendChild(M.domElement),i.current=M;const E=(()=>{const he=document.createElement("canvas");he.width=1920,he.height=1080;const _e=he.getContext("2d"),we=_e.createLinearGradient(0,0,he.width,he.height);return we.addColorStop(0,"#4a148c"),we.addColorStop(.5,"#880e4f"),we.addColorStop(1,"#1a237e"),_e.fillStyle=we,_e.fillRect(0,0,he.width,he.height),new G2(he)})();new Y2().load(DD,he=>{f.current&&(f.current.material.uniforms.uTexture.value=he,he.image&&f.current.material.uniforms.uImageResolution.value.set(he.image.width,he.image.height))},void 0,()=>{console.log("Portal image not found, using placeholder.")});const L=33,O=60*Math.PI/180,z=2*Math.tan(O/2)*L,j=window.innerWidth/window.innerHeight,q=z*j,X=new Ja(q,z),V=new Mr({uniforms:{uTexture:{value:E},uImageResolution:{value:new _t(1920,1080)},uMousePos:{value:new _t(0,0)},uMouseActive:{value:0},uInnerRadius:{value:3},uOuterRadius:{value:6},uResolution:{value:new _t(window.innerWidth,window.innerHeight)},uTime:{value:0}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1}),N=new mr(X,V);N.position.z=-5,C.add(N),f.current=N;class K{constructor(_e,we){this.index=_e,this.totalFibers=we,this.normalizedY=_e/we,this.baseY=(this.normalizedY-.5)*_.waveHeight,this.timeOffset=Math.random()*Math.PI*2,this.spatialOffset=Math.random()*50,this.speed=.7+Math.random()*.3;const ae=Math.random();ae<.4?this.color=new mt(9133302):ae<.7?this.color=new mt(10980346):ae<.92?this.color=new mt(8246268):this.color=new mt(12891645);const k=Math.abs(this.normalizedY-.5)*2;this.baseOpacity=.5+(1-k)*.4,this.depthLayer=Math.sin(this.normalizedY*Math.PI)*.5+.5,this.points=[],this.basePoints=[];for(let Ae=0;Ae<_.segmentsPerFiber;Ae++)this.points.push(new Y),this.basePoints.push(new Y)}calculateBasePositions(_e,we,ae){const k=_e*.2*this.speed,Ae=we;let Ue=1/0;const P=Math.floor(Ae),T=Math.min(P+1,6),G=Ae-P,ee=v(Math.max(0,Math.min(G,1))),ne=se=>{const le=m(1.2,1.8,.5+Math.sin(se*Math.PI*.4)*.5),Ne=m(1.5,2.2,h(Math.sin(se*Math.PI*.3)*.5+.5)),oe=v(Math.max(0,Math.min(se/2.5,1))),Be=Math.abs(se-2.4)/1.5,xe=1-v(Math.max(0,Math.min(Be,1))),Qe=Math.abs(se-3)/2.5,U=1-v(Math.max(0,Math.min(Qe,1))),Q=v(Math.max(0,Math.min((se-4.5)/1.2,1))),J=v(Math.max(0,Math.min((se-5.5)/1.2,1)));return{baseAmplitude:le,waveFrequency:Ne,verticalBend:oe,convergeStrength:xe,crossStrength:U,diagonalStrength:Q,expansionStrength:J}},Z=ne(P),Ce=ne(T);for(let se=0;se<_.segmentsPerFiber;se++){const le=se/_.segmentsPerFiber,Ne=.6,oe=y(le*Ne+this.spatialOffset,k*.15+this.timeOffset*.1)*.5,ve=y(le*Ne+this.spatialOffset+50,k*.12+this.timeOffset*.1)*.25,Oe=y(le*Ne+this.spatialOffset+100,k*.18+this.timeOffset*.1)*.8;let Be=0,xe=0,Ve=0,je=0,Qe=0,U=0;const Q=(ge,Ye)=>{let dt=(le-.5)*_.waveWidth,rt=this.baseY,Ze=this.depthLayer*1.5;const Ge=Math.sin(le*Math.PI*ge.waveFrequency+k+this.timeOffset)*ge.baseAmplitude,Fe=Math.sin(le*Math.PI*ge.waveFrequency*1.6+k*.6+this.timeOffset+Math.PI/3)*ge.baseAmplitude*.35;if(rt+=Ge+Fe,Ze+=Math.sin(le*Math.PI*2.5+k*.5+this.timeOffset)*1.8,dt+=oe,rt+=ve,Ze+=Oe,ge.verticalBend>0){const Je=Math.sin((le-.5)*Math.PI*1.2)*2.8;rt+=Je*ge.verticalBend}if(ge.convergeStrength>0){const pe=1-(1-Math.abs(le-.5)*2)*.55*ge.convergeStrength;rt*=pe;const Xe=Math.sin(le*Math.PI*2+k*.4)*.8;Ze+=Xe*ge.convergeStrength}if(ge.crossStrength>0){const Je=(this.normalizedY-.5)*2,pe=h(ge.crossStrength),Xe=Je*le*4.5*pe;rt+=Xe;const ze=Math.sin(le*Math.PI*1.8+k*.4)*2.5;Ze+=ze*pe;const Ke=Math.cos(le*Math.PI*2+k*.3)*1.2;Ze+=Ke*pe*.5}if(ge.diagonalStrength>0){const Je=le*3*ge.diagonalStrength;rt+=Je-1.5*ge.diagonalStrength;const pe=Math.sin(le*Math.PI*2+k+this.timeOffset)*1.5;rt+=pe*(1-ge.diagonalStrength*.4)}if(ge.expansionStrength>0){rt*=1+ge.expansionStrength*.2;const Je=Math.sin(le*Math.PI*1.6+k*.4+this.timeOffset)*2;rt+=Je*ge.expansionStrength;const pe=Math.sin(le*Math.PI*2+k*.35)*3;Ze+=pe*ge.expansionStrength}Ye?(Be=dt,xe=rt,Ve=Ze):(je=dt,Qe=rt,U=Ze)};Q(Z,!0),Q(Ce,!1);const J=m(Be,je,ee),te=m(xe,Qe,ee),ce=m(Ve,U,ee);if(this.basePoints[se].set(J,te,ce),ae.active){const ge=J-ae.x,Ye=te-ae.y,dt=Math.sqrt(ge*ge+Ye*Ye);dt<Ue&&(Ue=dt)}}return Ue}applyDisplacementAndEnergy(_e,we,ae){for(let k=0;k<_.segmentsPerFiber;k++){let Ae=this.basePoints[k].x,Ue=this.basePoints[k].y,P=this.basePoints[k].z;if(_e>0&&we.active){const T=Ae-we.x,G=Ue-we.y,ee=Math.sqrt(T*T+G*G);if(ee<12){const Z=h(1-ee/12)*2.2*_e,Ce=Math.atan2(G,T);Ae+=Math.cos(Ce)*Z,Ue+=Math.sin(Ce)*Z,P+=Z*.5}}this.points[k].set(Ae,Ue,P)}}}const b=[];for(let he=0;he<_.fiberCount;he++)b.push(new K(he,_.fiberCount));r.current=b;const ie=new Qr,Ee=[],$e=[],$=[],re=[];let me=0;b.forEach(he=>{he.points.forEach((_e,we)=>{Ee.push(_e.x,_e.y,_e.z),$e.push(he.color.r,he.color.g,he.color.b);const ae=Math.sin(we/_.segmentsPerFiber*Math.PI);$.push(he.baseOpacity*ae),we<_.segmentsPerFiber-1&&re.push(me,me+1),me++})}),ie.setAttribute("position",new xi(Ee,3)),ie.setAttribute("color",new xi($e,3)),ie.setAttribute("opacity",new xi($,1)),ie.setAttribute("energyBoost",new xi(new Array(Ee.length/3).fill(0),1)),ie.setIndex(re);const fe=new Mr({vertexShader:`
        attribute float opacity;
        attribute float energyBoost;
        varying vec3 vColor;
        varying float vOpacity;
        varying float vEnergyBoost;

        void main() {
          vColor = color;
          vOpacity = opacity;
          vEnergyBoost = energyBoost;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vOpacity;
        varying float vEnergyBoost;

        void main() {
          // Base glow
          vec3 glow = vColor * 1.8;

          // Energy pulse boost
          if (vEnergyBoost > 0.0) {
            // Brighten towards white-lavender
            vec3 energyColor = mix(glow, vec3(1.0, 0.95, 1.0), vEnergyBoost * 0.55);
            glow = energyColor * (1.0 + vEnergyBoost * 0.7);
          }

          float alpha = vOpacity * (0.75 + vEnergyBoost * 0.18);
          gl_FragColor = vec4(glow, alpha);
        }
      `,transparent:!0,blending:Zp,depthWrite:!1,vertexColors:!0}),Te=new V2(ie,fe);C.add(Te),s.current=Te;const Ie=he=>{o.current.hasMoved=!0,o.current.targetX=he.clientX/window.innerWidth*2-1,o.current.targetY=-(he.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",Ie);let qe=0;it.create({trigger:"body",start:"top top",end:"bottom bottom",scrub:1.2,onUpdate:he=>{a.current.target=he.progress*6;const _e=window.scrollY,we=_e>qe?1:-1;qe=_e,d.current=we;const ae=Math.floor(he.progress*6);if(ae!==c.current&&ae>=0&&ae<=5){const k=u.current;k.active||(k.active=!0,k.progress=0,k.direction=we,k.startTime=Date.now()*.001),c.current=ae}}});const et=()=>{if(w.aspect=window.innerWidth/window.innerHeight,w.updateProjectionMatrix(),M.setSize(window.innerWidth,window.innerHeight),f.current){const _e=60*Math.PI/180,we=2*Math.tan(_e/2)*33,ae=we*w.aspect;f.current.geometry.dispose(),f.current.geometry=new Ja(ae,we),f.current.material.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight)}};window.addEventListener("resize",et);const D=()=>{if(l.current=requestAnimationFrame(D),g){M.render(C,w);return}const he=Date.now()*.001,_e=o.current,we=a.current,ae=u.current,k=f.current,Ae=p.current;if(ae.active){const oe=he-ae.startTime;ae.progress=Math.min(oe/ae.duration,1);const ve=x(ae.progress);ae.progress=ve,oe>=ae.duration&&(ae.active=!1,ae.progress=0)}we.current=m(we.current,we.target,.12),_e.x=m(_e.x,_e.targetX,.12),_e.y=m(_e.y,_e.targetY,.12);const Ue=_e.x*1.2,P=_e.y*1.2;w.position.x=m(w.position.x,Ue,.06),w.position.y=m(w.position.y,P,.06),w.lookAt(0,0,0),w.updateMatrixWorld();const T=new Y(_e.targetX,_e.targetY,.5);T.unproject(w);const G=T.sub(w.position).normalize(),ee=-w.position.z/G.z,ne=w.position.clone().add(G.multiplyScalar(ee)),Z={active:_e.hasMoved,x:ne.x,y:ne.y};let Ce=1/0;b.forEach(oe=>{const ve=oe.calculateBasePositions(he,we.current,Z);Z.active&&ve<Ce&&(Ce=ve)});const se=3.5;let le=0;if(Z.active&&Ce<se){const oe=Ce/se;le=1-h(oe)}Ae.current=le;let Ne=0;b.forEach(oe=>{oe.applyDisplacementAndEnergy(le,Z,ae),oe.points.forEach((ve,Oe)=>{const Be=Ne*3;Te.geometry.attributes.position.array[Be]=ve.x,Te.geometry.attributes.position.array[Be+1]=ve.y,Te.geometry.attributes.position.array[Be+2]=ve.z;let xe=0;if(ae.active){const Ve=Oe/(_.segmentsPerFiber-1),Qe=(ae.direction>0?ae.progress:1-ae.progress)*1.3-.15,U=Ve-Qe,Q=ae.direction>0?U<0:U>0,J=Math.abs(U),ge=Q?.08:.03;if(xe=Math.exp(-(J*J)/(ge*ge)),ae.direction>0){if(Qe>.9){const Ye=Math.max(0,1-(Qe-.9)/.15);xe*=Ye}}else if(Qe<.1){const Ye=Math.max(0,(Qe+.05)/.15);xe*=Ye}}Te.geometry.attributes.energyBoost.array[Ne]=xe,Ne++})}),Te.geometry.attributes.position.needsUpdate=!0,Te.geometry.attributes.energyBoost.needsUpdate=!0,k&&(k.material.uniforms.uMousePos.value.set(Z.x,Z.y),k.material.uniforms.uMouseActive.value=le,k.material.uniforms.uTime.value=he),M.render(C,w)};return D(),()=>{l.current&&cancelAnimationFrame(l.current),window.removeEventListener("mousemove",Ie),window.removeEventListener("resize",et),it.getAll().forEach(he=>he.kill()),n.current&&M.domElement&&n.current.removeChild(M.domElement),ie.dispose(),fe.dispose(),M.dispose()}},[]),I.jsx("div",{id:"canvas-container",ref:n})},D_=[{id:"software",number:"01",title:"SOFTWARE & APPS",route:"/start/software",tagline:"Open-Source Engines & Creative Toolkits",description:"High-performance creative suites, developer utilities, neural workstations, and standalone systems curated for boundary-pushing digital creators.",accentColor:"#a78bfa",secondaryAccent:"#8b5cf6",glowColor:"rgba(167, 139, 250, 0.45)",gradient:"linear-gradient(135deg, rgba(167, 139, 250, 0.16) 0%, rgba(139, 92, 246, 0.04) 100%)",tags:["DEV TOOLS","CREATIVE APPS","UTILITIES","OPEN ACCESS"],stats:{items:"420+ Tools",updated:"Realtime Sync",access:"100% Free"},resources:[{id:"vscode",title:"Visual Studio Code",type:"file",description:"Stable Windows installer for the extensible code editor.",url:"https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user",fileType:"EXE",fileSize:"Latest build",youtube:[{title:"VS Code Tips & Tricks",videoId:"RZqNXpr7g4g"},{title:"VS Code Extensions Guide",videoId:"xRfVY2R2C2Q"}]},{id:"chrome",title:"Google Chrome",type:"file",description:"Direct Windows installer for the current Chrome release.",url:"https://dl.google.com/chrome/install/chrome_installer.exe",fileType:"EXE",fileSize:"Latest build"},{id:"blender-hub",title:"Blender Download Hub",type:"link",description:"Open-source 3D creation suite and release archive.",url:"https://www.blender.org/download/",youtube:[{title:"Blender 3.0 — New Features",videoId:"JZIFWEY3l6k"},{title:"Blender Beginner Tutorial",videoId:"TPrnSACiTJ4"},{title:"Blender Geometry Nodes",videoId:"X5aW9Qxh5WQ"}]},{id:"github",title:"GitHub",type:"link",description:"Discover, share, and build open-source software.",url:"https://github.com/"}]},{id:"education",number:"02",title:"EDUCATION",route:"/start/education",tagline:"Deep Archives, Papers & Masterclasses",description:"Unrestricted repositories of advanced technical documentation, algorithmic blueprints, generative architecture masterclasses, and computational physics papers.",accentColor:"#38bdf8",secondaryAccent:"#0ea5e9",glowColor:"rgba(56, 189, 248, 0.45)",gradient:"linear-gradient(135deg, rgba(56, 189, 248, 0.16) 0%, rgba(14, 165, 233, 0.04) 100%)",tags:["RESEARCH PAPERS","MASTERCLASSES","BLUEPRINTS","KNOWLEDGE BASE"],stats:{items:"1,280+ Archives",updated:"Weekly Drops",access:"100% Free"},resources:[{id:"free-programming-books",title:"Free Programming Books",type:"file",description:"Community-maintained index of free programming books and courses.",url:"https://raw.githubusercontent.com/EbookFoundation/free-programming-books/main/books/free-programming-books.md",fileType:"MD",fileSize:"Repository file",youtube:[{title:"Python Full Course for Beginners",videoId:"_uQrJ0TkZlc"},{title:"JavaScript Full Course",videoId:"W6NZfCO5SIk"}]},{id:"python-gitignore",title:"Python Gitignore Template",type:"file",description:"A practical starting template for Python projects and virtual environments.",url:"https://raw.githubusercontent.com/github/gitignore/main/Python.gitignore",fileType:"GITIGNORE",fileSize:"Repository file"},{id:"mdn",title:"MDN Web Docs",type:"link",description:"Reference documentation for web technologies and standards.",url:"https://developer.mozilla.org/",youtube:[{title:"MDN Web Docs Tutorial",videoId:"G3e-cpL7ofc"}]},{id:"freecodecamp",title:"freeCodeCamp",type:"link",description:"Free project-based programming lessons and certifications.",url:"https://www.freecodecamp.org/",youtube:[{title:"freeCodeCamp Python Course",videoId:"rfscVS0vtbw"},{title:"freeCodeCamp JS Course",videoId:"jS4aFq5-91M"}]}]},{id:"movies",number:"03",title:"MOVIES",route:"/start/movies",tagline:"Visionary Cinema & Sci-Fi Archives",description:"A cinematic vault of groundbreaking independent cinema, experimental sci-fi journeys, visual essays, and remastered avant-garde documentaries.",accentColor:"#e879f9",secondaryAccent:"#d946ef",glowColor:"rgba(232, 121, 249, 0.45)",gradient:"linear-gradient(135deg, rgba(232, 121, 249, 0.16) 0%, rgba(217, 70, 239, 0.04) 100%)",tags:["4K CINEMA","SCI-FI DOCS","SHORT FILMS","EXPERIMENTS"],stats:{items:"340+ Films",updated:"Bi-Weekly",access:"100% Free"},resources:[{id:"big-buck-bunny",title:"Big Buck Bunny",type:"file",description:"Open movie source file for studying animation and production pipelines.",url:"https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_720p_stereo.avi",fileType:"AVI",fileSize:"720p"},{id:"sintel-trailer",title:"Sintel Trailer",type:"file",description:"High-resolution trailer asset from the Blender open movie project.",url:"https://download.blender.org/sintel/trailer/Sintel.Trailer.1080p.mp4",fileType:"MP4",fileSize:"1080p"},{id:"archive-films",title:"Internet Archive Feature Films",type:"link",description:"A public-domain and Creative Commons film collection.",url:"https://archive.org/details/feature_films",youtube:[{title:"Solaris — Mosfilm",videoId:"Z8ZhQPaw4rE"},{title:"Stalker — Mosfilm",videoId:"m5nL2xJ8K9w"}]},{id:"blender-movies",title:"Blender Open Movies",type:"link",description:"Open-source films, assets, and production files from Blender.",url:"https://www.blender.org/open-movies/",youtube:[{title:"Spring — Blender Open Movie",videoId:"WhWc3b3KfQs"},{title:"Sprite Fright — Blender",videoId:"Fh5g8k9J0L2"}]}]},{id:"images",number:"04",title:"IMAGES",route:"/start/images",tagline:"Ultra-Res Art, Textures & Celestial Captures",description:"Pristine 8K raw captures, procedural seamless textures, cinematic backdrop art, and astral telescopic imagery primed for visual production.",accentColor:"#fbbf24",secondaryAccent:"#f59e0b",glowColor:"rgba(251, 191, 36, 0.45)",gradient:"linear-gradient(135deg, rgba(251, 191, 36, 0.16) 0%, rgba(245, 158, 11, 0.04) 100%)",tags:["8K TEXTURES","CELESTIAL RAW","CONCEPT ART","FREE COMMERCIAL"],stats:{items:"18,500+ Assets",updated:"Daily Pipeline",access:"100% Free"},resources:[{id:"hubble-deep-field",title:"Hubble Ultra Deep Field",type:"file",description:"A high-resolution celestial reference image for visual research.",url:"https://upload.wikimedia.org/wikipedia/commons/6/68/Hubble_ultra_deep_field.jpg",fileType:"JPG",fileSize:"High resolution"},{id:"landscape-reference",title:"Landscape Reference Frame",type:"file",description:"A large-format landscape image for composition and color studies.",url:"https://picsum.photos/id/1015/3840/2160",fileType:"JPG",fileSize:"3840 × 2160"},{id:"unsplash",title:"Unsplash",type:"link",description:"High-resolution photography for creative and commercial projects.",url:"https://unsplash.com/",youtube:[{title:"Milky Way Photography Tutorial",videoId:"PQ6YSwBGbC0"},{title:"Landscape Photography Tips",videoId:"K8vL2mN1pQ4"}]},{id:"nasa-images",title:"NASA Image and Video Library",type:"link",description:"Search NASA's public archive of images, audio, and video.",url:"https://images.nasa.gov/",youtube:[{title:"NASA Image Processing",videoId:"R9xL3mN8pQ2"}]}]},{id:"videos",number:"05",title:"VIDEOS",route:"/start/videos",tagline:"VFX Overlays, Motion Graphics & Visual Loops",description:"Seamless 60FPS motion loops, volumetric light overlays, alpha-channel visual effects, and dynamic particle systems built for editors and VJs.",accentColor:"#34d399",secondaryAccent:"#10b981",glowColor:"rgba(52, 211, 153, 0.45)",gradient:"linear-gradient(135deg, rgba(52, 211, 153, 0.16) 0%, rgba(16, 185, 129, 0.04) 100%)",tags:["60FPS LOOPS","VFX PLATES","ALPHA CHANNEL","PRORES 422"],stats:{items:"3,100+ Loops",updated:"Weekly Release",access:"100% Free"},resources:[{id:"big-buck-bunny-sample",title:"Big Buck Bunny Sample",type:"file",description:"A compact MP4 sample for testing playback and edit pipelines.",url:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",fileType:"MP4",fileSize:"Sample"},{id:"bigger-blazes",title:"For Bigger Blazes Sample",type:"file",description:"A short sample clip for motion and color workflow testing.",url:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",fileType:"MP4",fileSize:"Sample"},{id:"mixkit",title:"Mixkit Free Stock Video",type:"link",description:"Royalty-free video clips and motion assets for editors.",url:"https://mixkit.co/free-stock-video/",youtube:[{title:"CapCut Video Editing Full Course",videoId:"qfHX2cNA4MY"},{title:"DaVinci Resolve Tutorial",videoId:"G3vK2mN9pQ1"}]},{id:"pexels-videos",title:"Pexels Videos",type:"link",description:"Free stock videos contributed by creators worldwide.",url:"https://www.pexels.com/videos/",youtube:[{title:"Pexels Video Search Guide",videoId:"X5vL8mN2pQ7"}]}]},{id:"sfx",number:"06",title:"SFX",route:"/start/sfx",tagline:"Spatial Audio, Cinematic Hits & Synthesizers",description:"Uncompressed 24-bit 96kHz spatial sound effects, sub-bass braams, modular synth patches, dark futuristic ambiences, and acoustic Foley.",accentColor:"#c084fc",secondaryAccent:"#a855f7",glowColor:"rgba(192, 132, 252, 0.45)",gradient:"linear-gradient(135deg, rgba(192, 132, 252, 0.16) 0%, rgba(168, 85, 247, 0.04) 100%)",tags:["SPATIAL SFX","96KHZ / 24-BIT","SYNTH PRESETS","CINEMATIC HITS"],stats:{items:"9,400+ Sounds",updated:"Weekly Bundles",access:"100% Free"},resources:[{id:"interface-button",title:"Interface Button",type:"file",description:"A clean UI click suitable for futuristic interface design.",url:"https://www.soundjay.com/buttons/sounds/button-1.mp3",fileType:"MP3",fileSize:"Short sample"},{id:"rain-atmosphere",title:"Rain Atmosphere",type:"file",description:"A compact rain recording for ambience and mixing studies.",url:"https://www.soundjay.com/nature/sounds/rain-01.mp3",fileType:"MP3",fileSize:"Short sample"},{id:"bbc-sfx",title:"BBC Sound Effects",type:"link",description:"Explore the BBC's public sound-effects archive.",url:"https://sound-effects.bbcrewind.co.uk/",youtube:[{title:"Sound Design Masterclass",videoId:"UOMMyu__FTM"},{title:"Foley Art Tutorial",videoId:"V8xL3mN9pQ5"}]},{id:"freesound",title:"Freesound",type:"link",description:"A collaborative database of Creative Commons audio samples.",url:"https://freesound.org/",youtube:[{title:"Freesound Tutorial",videoId:"Z7xL2mN8pQ3"}]}]}];function ID(n){return D_.find(e=>e.id.toLowerCase()===n.toLowerCase())}const UD="https://res.cloudinary.com/eev7ddsv/video/upload/v1789069854/0910.mp4";function FD({category:n,index:e,isHovered:t,isDimmed:i,onHover:r,onLeave:s,onClick:o,viewMode:a="deck"}){const l={"--card-accent":n.accentColor,"--card-secondary":n.secondaryAccent,"--card-glow":n.glowColor,"--card-gradient":n.gradient},u=UD,c=d=>{d.preventDefault(),o(n)};return I.jsxs("div",{className:`category-card ${t?"is-hovered":""} ${i?"sibling-dimmed":""}`,style:l,onMouseEnter:()=>r(n.id),onMouseLeave:s,onClick:c,role:"button",tabIndex:0,"aria-label":`Explore ${n.title}`,onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),o(n))},children:[I.jsxs(I.Fragment,{children:[I.jsx("video",{className:"card-video-bg",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-hidden":"true",children:I.jsx("source",{src:u,type:"video/mp4"})}),I.jsx("div",{className:"card-video-overlay","aria-hidden":"true"})]}),I.jsx("span",{className:"corner-bracket corner-tl","aria-hidden":"true"}),I.jsx("span",{className:"corner-bracket corner-tr","aria-hidden":"true"}),I.jsx("span",{className:"corner-bracket corner-bl","aria-hidden":"true"}),I.jsx("span",{className:"corner-bracket corner-br","aria-hidden":"true"}),I.jsx("div",{className:"card-ambient-light","aria-hidden":"true"}),I.jsxs("div",{className:"card-top-block",children:[I.jsx("div",{className:"card-top-row",children:I.jsx("span",{className:"card-index",children:n.number})}),I.jsx("h3",{className:"card-title",children:n.title})]}),I.jsx("div",{className:"card-spacer","aria-hidden":"true"}),I.jsx("div",{className:"card-footer",children:I.jsxs("div",{className:"card-action-btn",children:[I.jsx("span",{children:"Enter"}),I.jsx("span",{className:"card-action-arrow",children:"→"})]})})]})}function OD({categories:n,onSelectCategory:e}){const[t,i]=We.useState(null),r=s=>{e(s)};return I.jsx("div",{className:"card-deck-stage",children:I.jsx("div",{className:"deck-scene",children:n.map((s,o)=>{const a=t===s.id,l=t!==null&&!a;return I.jsxs("div",{className:`card-layer ${a?"card-layer-hovered":""}`,style:{"--layer-index":o},children:[I.jsx(FD,{category:s,index:o,isHovered:a,isDimmed:l,onHover:i,onLeave:()=>i(null),onClick:r,viewMode:"deck"}),I.jsx("div",{className:`card-reflection ${a?"card-reflection-active":""}`,"aria-hidden":"true"})]},s.id)})})})}function kD({resource:n,onClick:e,accentColor:t,glowColor:i}){const r=n.type==="file";return I.jsxs("button",{className:"resource-card",onClick:()=>e(n),style:{"--resource-accent":t,"--resource-glow":i},"aria-label":`View ${n.title} details`,children:[I.jsx("div",{className:`resource-card-icon ${r?"file-icon":"link-icon"}`,"aria-hidden":"true",children:r?I.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[I.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),I.jsx("polyline",{points:"14 2 14 8 20 8"}),I.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),I.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"})]}):I.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[I.jsx("circle",{cx:"12",cy:"12",r:"10"}),I.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),I.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]})}),I.jsxs("div",{className:"resource-card-info",children:[I.jsx("h4",{className:"resource-card-title",children:n.title}),n.description&&I.jsx("p",{className:"resource-card-desc",children:n.description}),r&&n.fileType&&I.jsxs("span",{className:"resource-card-type",children:[n.fileType," · ",n.fileSize]}),!r&&I.jsx("span",{className:"resource-card-type",children:new URL(n.url).hostname.replace("www.","")})]}),I.jsx("div",{className:"resource-card-action","aria-hidden":"true",children:r?I.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[I.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),I.jsx("polyline",{points:"7 10 12 15 17 10"}),I.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}):I.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[I.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),I.jsx("polyline",{points:"15 3 21 3 21 9"}),I.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})})]})}function BD({category:n,isOpen:e,onClose:t,onResourceClick:i}){const r=We.useRef(null),s=We.useRef(null),o=We.useRef(null),a=We.useRef(!1),l=We.useRef(0),u=We.useRef(0);We.useEffect(()=>{var v;if(e){o.current=document.activeElement,document.body.style.overflow="hidden",document.body.style.touchAction="none";const y=C=>{C.key==="Escape"&&t()};return document.addEventListener("keydown",y),(v=r.current)==null||v.focus(),()=>{var C;document.body.style.overflow="",document.body.style.touchAction="",document.removeEventListener("keydown",y),(C=o.current)==null||C.focus()}}},[e,t]);const c=v=>{v.target===v.currentTarget&&t()},d=We.useCallback(v=>{v.deltaY!==0&&(v.preventDefault(),s.current.scrollBy({left:v.deltaY,behavior:"auto"}))},[]),f=v=>{v.button===0&&(a.current=!0,l.current=v.clientX,u.current=s.current.scrollLeft,s.current.style.cursor="grabbing",s.current.style.scrollBehavior="auto")},p=v=>{if(!a.current)return;v.preventDefault();const y=(v.clientX-l.current)*1.5;s.current.scrollLeft=u.current-y},_=()=>{a.current&&(a.current=!1,s.current.style.cursor="grab",s.current.style.scrollBehavior="smooth")},g=v=>{a.current=!0,l.current=v.touches[0].clientX,u.current=s.current.scrollLeft,s.current.style.scrollBehavior="auto"},m=v=>{if(!a.current)return;const y=(v.touches[0].clientX-l.current)*1.5;s.current.scrollLeft=u.current-y},h=()=>{a.current&&(a.current=!1,s.current.style.scrollBehavior="smooth")};if(!e||!n)return null;const x={"--cat-accent":n.accentColor,"--cat-secondary":n.secondaryAccent,"--cat-glow":n.glowColor};return I.jsx("div",{className:"category-window-backdrop",onClick:c,role:"dialog","aria-modal":"true","aria-labelledby":"category-window-title",children:I.jsxs("div",{ref:r,className:"category-window",style:x,tabIndex:-1,onClick:v=>v.stopPropagation(),children:[I.jsx("div",{className:"category-window-glow","aria-hidden":"true"}),I.jsxs("header",{className:"category-window-header",children:[I.jsxs("div",{className:"category-window-title-block",children:[I.jsxs("span",{className:"category-window-number",children:["// ",n.number]}),I.jsx("h2",{id:"category-window-title",className:"category-window-title",children:n.title})]}),I.jsx("button",{className:"category-window-close",onClick:t,"aria-label":"Close category window",type:"button",children:I.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),I.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),I.jsx("div",{className:"category-window-divider","aria-hidden":"true"}),I.jsx("div",{ref:s,className:"category-window-resources",onWheel:d,onMouseDown:f,onMouseMove:p,onMouseUp:_,onMouseLeave:_,onTouchStart:g,onTouchMove:m,onTouchEnd:h,style:{cursor:"grab"},children:n.resources.map((v,y)=>I.jsx(kD,{resource:v,onClick:i,accentColor:n.accentColor,glowColor:n.glowColor},v.id||y))})]})})}function zD({video:n,onClick:e,accentColor:t,glowColor:i}){const r=`https://img.youtube.com/vi/${n.videoId}/hqdefault.jpg`,s=`https://www.youtube.com/watch?v=${n.videoId}`,o=a=>{a.preventDefault(),a.stopPropagation(),e&&e(n),window.open(s,"_blank","noopener,noreferrer")};return I.jsxs("button",{className:"youtube-thumbnail",onClick:o,style:{"--yt-accent":t,"--yt-glow":i},"aria-label":`Watch ${n.title} on YouTube`,children:[I.jsx("img",{src:r,alt:`${n.title} thumbnail`,loading:"lazy","aria-hidden":"true"}),I.jsx("div",{className:"youtube-play-overlay","aria-hidden":"true",children:I.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:I.jsx("path",{d:"M8 5v14l11-7z"})})}),I.jsxs("span",{className:"youtube-duration","aria-hidden":"true",children:[I.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[I.jsx("circle",{cx:"12",cy:"12",r:"10"}),I.jsx("polyline",{points:"12 6 12 12 16 14"})]}),n.duration||"Video"]})]})}function HD({resource:n,category:e,isOpen:t,onClose:i,onBack:r}){const s=We.useRef(null),o=We.useRef(null),a=We.useRef(null),l=We.useRef(!1),u=We.useRef(0),c=We.useRef(0);We.useEffect(()=>{var M;if(t){a.current=document.activeElement,(M=s.current)==null||M.focus();const R=E=>{E.key==="Escape"&&r()};return document.addEventListener("keydown",R),()=>{var E;document.removeEventListener("keydown",R),(E=a.current)==null||E.focus()}}},[t,r]);const d=M=>{M.target===M.currentTarget&&r()},f=We.useCallback(M=>{M.deltaY!==0&&(M.preventDefault(),o.current.scrollBy({left:M.deltaY,behavior:"auto"}))},[]),p=M=>{M.button===0&&(l.current=!0,u.current=M.clientX,c.current=o.current.scrollLeft,o.current.style.cursor="grabbing",o.current.style.scrollBehavior="auto")},_=M=>{if(!l.current)return;M.preventDefault();const R=(M.clientX-u.current)*1.5;o.current.scrollLeft=c.current-R},g=()=>{l.current&&(l.current=!1,o.current.style.cursor="grab",o.current.style.scrollBehavior="smooth")},m=M=>{l.current=!0,u.current=M.touches[0].clientX,c.current=o.current.scrollLeft,o.current.style.scrollBehavior="auto"},h=M=>{if(!l.current)return;const R=(M.touches[0].clientX-u.current)*1.5;o.current.scrollLeft=c.current-R},x=()=>{l.current&&(l.current=!1,o.current.style.scrollBehavior="smooth")};if(!t||!n||!e)return null;const v=n.type==="file",y=n.youtube&&n.youtube.length>0,C={"--cat-accent":e.accentColor,"--cat-secondary":e.secondaryAccent,"--cat-glow":e.glowColor},w=M=>{if(M.preventDefault(),M.stopPropagation(),v){const R=document.createElement("a");R.href=n.url,R.target="_blank",R.rel="noopener noreferrer",R.download=n.title,document.body.appendChild(R),R.click(),document.body.removeChild(R)}else window.open(n.url,"_blank","noopener,noreferrer")};return t?I.jsx("div",{className:"resource-detail-backdrop",onClick:d,role:"dialog","aria-modal":"true","aria-labelledby":"resource-detail-title",children:I.jsxs("div",{ref:s,className:"resource-detail-window",style:C,tabIndex:-1,onClick:M=>M.stopPropagation(),children:[I.jsx("div",{className:"resource-detail-glow","aria-hidden":"true"}),I.jsxs("header",{className:"resource-detail-header",children:[I.jsx("button",{className:"resource-detail-back",onClick:r,"aria-label":"Back to category",type:"button",children:I.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),I.jsx("polyline",{points:"12 19 5 12 12 5"})]})}),I.jsxs("div",{className:"resource-detail-title-block",children:[I.jsx("span",{className:"resource-detail-type",children:v?"FILE":"LINK"}),I.jsx("h2",{id:"resource-detail-title",className:"resource-detail-title",children:n.title})]}),I.jsx("button",{className:"resource-detail-close",onClick:i,"aria-label":"Close detail window",type:"button",children:I.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),I.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),I.jsx("div",{className:"resource-detail-divider","aria-hidden":"true"}),I.jsxs("div",{className:"resource-detail-content",children:[n.description&&I.jsx("p",{className:"resource-detail-desc",children:n.description}),v&&n.fileType&&I.jsxs("div",{className:"resource-detail-meta",children:[I.jsx("span",{className:"resource-detail-filetype",children:n.fileType}),n.fileSize&&I.jsx("span",{className:"resource-detail-filesize",children:n.fileSize})]}),!v&&I.jsx("div",{className:"resource-detail-meta",children:I.jsx("span",{className:"resource-detail-domain",children:new URL(n.url).hostname.replace("www.","")})}),I.jsx("button",{className:"resource-detail-action",onClick:w,style:{"--action-accent":e.accentColor,"--action-glow":e.glowColor},children:v?I.jsxs(I.Fragment,{children:[I.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),I.jsx("polyline",{points:"7 10 12 15 17 10"}),I.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),I.jsx("span",{children:"DOWNLOAD"})]}):I.jsxs(I.Fragment,{children:[I.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[I.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),I.jsx("polyline",{points:"15 3 21 3 21 9"}),I.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),I.jsx("span",{children:"OPEN WEBSITE"})]})}),y&&I.jsxs("section",{className:"resource-detail-youtube","aria-labelledby":"youtube-heading",children:[I.jsx("h3",{id:"youtube-heading",className:"resource-detail-section-title",children:"Related Videos"}),I.jsx("div",{ref:o,className:"resource-detail-youtube-row",onWheel:f,onMouseDown:p,onMouseMove:_,onMouseUp:g,onMouseLeave:g,onTouchStart:m,onTouchMove:h,onTouchEnd:x,style:{cursor:"grab"},children:n.youtube.map((M,R)=>I.jsx(zD,{video:M,accentColor:e.accentColor,glowColor:e.glowColor},R))})]})]})]})}):null}function Rx(){const[n,e]=We.useState(""),[t,i]=We.useState(null),[r,s]=We.useState(!1),[o,a]=We.useState(null),[l,u]=We.useState(!1),c=We.useCallback(m=>{i(m),s(!0)},[]),d=We.useCallback(()=>{s(!1),i(null),a(null),u(!1)},[]),f=We.useCallback(m=>{a(m),u(!0)},[]),p=We.useCallback(()=>{u(!1),a(null)},[]),_=We.useCallback(()=>{u(!1),a(null)},[]),g=D_.filter(m=>m.title.toLowerCase().includes(n.toLowerCase()));return I.jsxs("div",{className:"explore-container",children:[I.jsx("div",{className:"explore-backdrop","aria-hidden":"true"}),I.jsxs("div",{className:"search-wrapper",children:[I.jsx("span",{className:"search-icon","aria-hidden":"true",children:"🔍"}),I.jsx("input",{className:"search-input",type:"text",placeholder:"Search categories...",value:n,onChange:m=>e(m.target.value),"aria-label":"Search categories"})]}),I.jsx(OD,{categories:g,onSelectCategory:c}),t&&I.jsx(BD,{category:t,isOpen:r,onClose:d,onResourceClick:f}),o&&t&&I.jsx(HD,{resource:o,category:t,isOpen:l,onClose:p,onBack:_})]})}function VD({categoryId:n}){const e=GS(),t=ID(n)||D_[0],i={"--cat-accent":t.accentColor,"--cat-secondary":t.secondaryAccent,"--cat-glow":t.glowColor};return I.jsxs("div",{className:"category-page-wrapper",style:i,children:[I.jsx("div",{className:"explore-backdrop","aria-hidden":"true"}),I.jsxs("div",{className:"category-nav-bar",children:[I.jsxs("button",{type:"button",className:"back-to-explore-btn",onClick:()=>e("/start"),children:[I.jsx("span",{children:"←"}),I.jsx("span",{children:"Back to Explore"})]}),I.jsxs("div",{className:"category-breadcrumbs",children:[I.jsx(W0,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Home"}),I.jsx("span",{className:"breadcrumb-separator",children:"/"}),I.jsx(W0,{to:"/start",style:{color:"inherit",textDecoration:"none"},children:"Explore"}),I.jsx("span",{className:"breadcrumb-separator",children:"/"}),I.jsx("span",{className:"breadcrumb-active",children:t.title})]})]}),I.jsxs("section",{className:"category-hero",children:[I.jsx("div",{className:"category-hero-ambient","aria-hidden":"true"}),I.jsxs("div",{className:"category-hero-header",children:[I.jsxs("span",{className:"category-num-badge",children:["// ",t.number]}),I.jsx("span",{className:"card-status-pill",children:t.stats.access})]}),I.jsx("h1",{className:"category-hero-title",children:t.title}),I.jsx("p",{className:"category-hero-tagline",children:t.tagline}),I.jsx("p",{className:"category-hero-desc",children:t.description}),I.jsxs("div",{className:"category-metrics-bar",children:[I.jsxs("div",{className:"category-metric-box",children:[I.jsx("span",{className:"metric-number",children:t.stats.items}),I.jsx("span",{className:"metric-name",children:"Curated Repository"})]}),I.jsxs("div",{className:"category-metric-box",children:[I.jsx("span",{className:"metric-number",children:t.stats.updated}),I.jsx("span",{className:"metric-name",children:"Release Frequency"})]}),I.jsxs("div",{className:"category-metric-box",children:[I.jsx("span",{className:"metric-number",children:t.stats.access}),I.jsx("span",{className:"metric-name",children:"License Type"})]})]})]}),I.jsxs("section",{className:"category-content-section",children:[I.jsxs("div",{className:"content-section-title-bar",children:[I.jsx("h2",{className:"content-section-title",children:"CURATED RELEASES"}),I.jsx("span",{className:"content-status-indicator",children:"● LIVE INDEX ACTIVE"})]}),I.jsx("div",{className:"category-resource-grid",children:t.previewItems.map((r,s)=>I.jsxs("div",{className:"resource-module-card",children:[I.jsxs("div",{className:"resource-module-top",children:[I.jsx("span",{className:"resource-module-version",children:r.version}),I.jsx("span",{className:"module-access-badge",children:"UNRESTRICTED"})]}),I.jsx("h3",{className:"resource-module-title",children:r.name}),I.jsx("p",{className:"resource-module-desc",children:r.desc}),I.jsxs("div",{className:"resource-module-action",children:[I.jsx("span",{className:"card-stat-label",children:"Available Direct"}),I.jsx("span",{className:"module-action-link",children:"Access Asset →"})]})]},s))})]})]})}function GD(){const{currentPath:n}=Pd();We.useEffect(()=>{const s=setTimeout(()=>{it.refresh()},150);return()=>clearTimeout(s)},[n]);const e=n==="/"||n==="",t=n==="/start",i=n.startsWith("/start/"),r=i?n.replace("/start/","").split("/")[0]:"";return I.jsxs(I.Fragment,{children:[I.jsx(ND,{}),e&&I.jsx(yw,{}),e&&I.jsxs("div",{className:"content",children:[I.jsx(ww,{}),I.jsx(Aw,{}),I.jsx(Cw,{}),I.jsx(Rw,{}),I.jsx(bw,{}),I.jsx(Pw,{})]}),t&&I.jsx(Rx,{}),i&&I.jsx(VD,{categoryId:r}),!e&&!t&&!i&&I.jsx(Rx,{})]})}function WD(){return I.jsx(xw,{children:I.jsx(GD,{})})}HS(document.getElementById("root")).render(I.jsx(We.StrictMode,{children:I.jsx(WD,{})}));
