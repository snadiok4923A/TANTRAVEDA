(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Mx={exports:{}},hd={},Ex={exports:{}},lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ku=Symbol.for("react.element"),FE=Symbol.for("react.portal"),kE=Symbol.for("react.fragment"),zE=Symbol.for("react.strict_mode"),BE=Symbol.for("react.profiler"),HE=Symbol.for("react.provider"),VE=Symbol.for("react.context"),GE=Symbol.for("react.forward_ref"),WE=Symbol.for("react.suspense"),XE=Symbol.for("react.memo"),YE=Symbol.for("react.lazy"),b_=Symbol.iterator;function qE(n){return n===null||typeof n!="object"?null:(n=b_&&n[b_]||n["@@iterator"],typeof n=="function"?n:null)}var Tx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wx=Object.assign,Ax={};function ol(n,e,t){this.props=n,this.context=e,this.refs=Ax,this.updater=t||Tx}ol.prototype.isReactComponent={};ol.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ol.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Cx(){}Cx.prototype=ol.prototype;function Jm(n,e,t){this.props=n,this.context=e,this.refs=Ax,this.updater=t||Tx}var eg=Jm.prototype=new Cx;eg.constructor=Jm;wx(eg,ol.prototype);eg.isPureReactComponent=!0;var L_=Array.isArray,Rx=Object.prototype.hasOwnProperty,tg={current:null},Px={key:!0,ref:!0,__self:!0,__source:!0};function bx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Rx.call(e,i)&&!Px.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ku,type:n,key:s,ref:o,props:r,_owner:tg.current}}function $E(n,e){return{$$typeof:ku,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function ng(n){return typeof n=="object"&&n!==null&&n.$$typeof===ku}function jE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var D_=/\/+/g;function Bd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?jE(""+n.key):e.toString(36)}function Zc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ku:case FE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Bd(o,0):i,L_(r)?(t="",n!=null&&(t=n.replace(D_,"$&/")+"/"),Zc(r,e,t,"",function(u){return u})):r!=null&&(ng(r)&&(r=$E(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(D_,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",L_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Bd(s,a);o+=Zc(s,e,t,l,r)}else if(l=qE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Bd(s,a++),o+=Zc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ku(n,e,t){if(n==null)return n;var i=[],r=0;return Zc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function KE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Gn={current:null},Qc={transition:null},ZE={ReactCurrentDispatcher:Gn,ReactCurrentBatchConfig:Qc,ReactCurrentOwner:tg};function Lx(){throw Error("act(...) is not supported in production builds of React.")}lt.Children={map:Ku,forEach:function(n,e,t){Ku(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ku(n,function(){e++}),e},toArray:function(n){return Ku(n,function(e){return e})||[]},only:function(n){if(!ng(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};lt.Component=ol;lt.Fragment=kE;lt.Profiler=BE;lt.PureComponent=Jm;lt.StrictMode=zE;lt.Suspense=WE;lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZE;lt.act=Lx;lt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=wx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=tg.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Rx.call(e,l)&&!Px.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ku,type:n.type,key:r,ref:s,props:i,_owner:o}};lt.createContext=function(n){return n={$$typeof:VE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:HE,_context:n},n.Consumer=n};lt.createElement=bx;lt.createFactory=function(n){var e=bx.bind(null,n);return e.type=n,e};lt.createRef=function(){return{current:null}};lt.forwardRef=function(n){return{$$typeof:GE,render:n}};lt.isValidElement=ng;lt.lazy=function(n){return{$$typeof:YE,_payload:{_status:-1,_result:n},_init:KE}};lt.memo=function(n,e){return{$$typeof:XE,type:n,compare:e===void 0?null:e}};lt.startTransition=function(n){var e=Qc.transition;Qc.transition={};try{n()}finally{Qc.transition=e}};lt.unstable_act=Lx;lt.useCallback=function(n,e){return Gn.current.useCallback(n,e)};lt.useContext=function(n){return Gn.current.useContext(n)};lt.useDebugValue=function(){};lt.useDeferredValue=function(n){return Gn.current.useDeferredValue(n)};lt.useEffect=function(n,e){return Gn.current.useEffect(n,e)};lt.useId=function(){return Gn.current.useId()};lt.useImperativeHandle=function(n,e,t){return Gn.current.useImperativeHandle(n,e,t)};lt.useInsertionEffect=function(n,e){return Gn.current.useInsertionEffect(n,e)};lt.useLayoutEffect=function(n,e){return Gn.current.useLayoutEffect(n,e)};lt.useMemo=function(n,e){return Gn.current.useMemo(n,e)};lt.useReducer=function(n,e,t){return Gn.current.useReducer(n,e,t)};lt.useRef=function(n){return Gn.current.useRef(n)};lt.useState=function(n){return Gn.current.useState(n)};lt.useSyncExternalStore=function(n,e,t){return Gn.current.useSyncExternalStore(n,e,t)};lt.useTransition=function(){return Gn.current.useTransition()};lt.version="18.3.1";Ex.exports=lt;var jt=Ex.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QE=jt,JE=Symbol.for("react.element"),e1=Symbol.for("react.fragment"),t1=Object.prototype.hasOwnProperty,n1=QE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i1={key:!0,ref:!0,__self:!0,__source:!0};function Dx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)t1.call(e,i)&&!i1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:JE,type:n,key:s,ref:o,props:r,_owner:n1.current}}hd.Fragment=e1;hd.jsx=Dx;hd.jsxs=Dx;Mx.exports=hd;var Ke=Mx.exports,Ix={exports:{}},Ci={},Ux={exports:{}},Nx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,j){var P=I.length;I.push(j);e:for(;0<P;){var ne=P-1>>>1,Me=I[ne];if(0<r(Me,j))I[ne]=j,I[P]=Me,P=ne;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var j=I[0],P=I.pop();if(P!==j){I[0]=P;e:for(var ne=0,Me=I.length,Ye=Me>>>1;ne<Ye;){var q=2*(ne+1)-1,ie=I[q],pe=q+1,ce=I[pe];if(0>r(ie,P))pe<Me&&0>r(ce,ie)?(I[ne]=ce,I[pe]=P,ne=pe):(I[ne]=ie,I[q]=P,ne=q);else if(pe<Me&&0>r(ce,P))I[ne]=ce,I[pe]=P,ne=pe;else break e}}return j}function r(I,j){var P=I.sortIndex-j.sortIndex;return P!==0?P:I.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,_=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var j=t(u);j!==null;){if(j.callback===null)i(u);else if(j.startTime<=I)i(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=t(u)}}function y(I){if(g=!1,x(I),!_)if(t(l)!==null)_=!0,W(C);else{var j=t(u);j!==null&&H(y,j.startTime-I)}}function C(I,j){_=!1,g&&(g=!1,h(R),R=-1),p=!0;var P=f;try{for(x(j),d=t(l);d!==null&&(!(d.expirationTime>j)||I&&!L());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var Me=ne(d.expirationTime<=j);j=n.unstable_now(),typeof Me=="function"?d.callback=Me:d===t(l)&&i(l),x(j)}else i(l);d=t(l)}if(d!==null)var Ye=!0;else{var q=t(u);q!==null&&H(y,q.startTime-j),Ye=!1}return Ye}finally{d=null,f=P,p=!1}}var w=!1,M=null,R=-1,E=5,S=-1;function L(){return!(n.unstable_now()-S<E)}function O(){if(M!==null){var I=n.unstable_now();S=I;var j=!0;try{j=M(!0,I)}finally{j?z():(w=!1,M=null)}}else w=!1}var z;if(typeof v=="function")z=function(){v(O)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,$=X.port2;X.port1.onmessage=O,z=function(){$.postMessage(null)}}else z=function(){m(O,0)};function W(I){M=I,w||(w=!0,z())}function H(I,j){R=m(function(){I(n.unstable_now())},j)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,W(C))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var P=f;f=j;try{return I()}finally{f=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,j){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var P=f;f=I;try{return j()}finally{f=P}},n.unstable_scheduleCallback=function(I,j,P){var ne=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ne+P:ne):P=ne,I){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=P+Me,I={id:c++,callback:j,priorityLevel:I,startTime:P,expirationTime:Me,sortIndex:-1},P>ne?(I.sortIndex=P,e(u,I),t(l)===null&&I===t(u)&&(g?(h(R),R=-1):g=!0,H(y,P-ne))):(I.sortIndex=Me,e(l,I),_||p||(_=!0,W(C))),I},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(I){var j=f;return function(){var P=f;f=j;try{return I.apply(this,arguments)}finally{f=P}}}})(Nx);Ux.exports=Nx;var r1=Ux.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s1=jt,Ti=r1;function fe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ox=new Set,uu={};function No(n,e){Ha(n,e),Ha(n+"Capture",e)}function Ha(n,e){for(uu[n]=e,n=0;n<e.length;n++)Ox.add(e[n])}var Gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tp=Object.prototype.hasOwnProperty,o1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I_={},U_={};function a1(n){return tp.call(U_,n)?!0:tp.call(I_,n)?!1:o1.test(n)?U_[n]=!0:(I_[n]=!0,!1)}function l1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function u1(n,e,t,i){if(e===null||typeof e>"u"||l1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Sn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Sn[n]=new Wn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Sn[e]=new Wn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Sn[n]=new Wn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Sn[n]=new Wn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Sn[n]=new Wn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Sn[n]=new Wn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Sn[n]=new Wn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Sn[n]=new Wn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Sn[n]=new Wn(n,5,!1,n.toLowerCase(),null,!1,!1)});var ig=/[\-:]([a-z])/g;function rg(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(ig,rg);Sn[e]=new Wn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(ig,rg);Sn[e]=new Wn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(ig,rg);Sn[e]=new Wn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Sn[n]=new Wn(n,1,!1,n.toLowerCase(),null,!1,!1)});Sn.xlinkHref=new Wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Sn[n]=new Wn(n,1,!1,n.toLowerCase(),null,!0,!0)});function sg(n,e,t,i){var r=Sn.hasOwnProperty(e)?Sn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(u1(e,t,r,i)&&(t=null),i||r===null?a1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Zr=s1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zu=Symbol.for("react.element"),ua=Symbol.for("react.portal"),ca=Symbol.for("react.fragment"),og=Symbol.for("react.strict_mode"),np=Symbol.for("react.profiler"),Fx=Symbol.for("react.provider"),kx=Symbol.for("react.context"),ag=Symbol.for("react.forward_ref"),ip=Symbol.for("react.suspense"),rp=Symbol.for("react.suspense_list"),lg=Symbol.for("react.memo"),ls=Symbol.for("react.lazy"),zx=Symbol.for("react.offscreen"),N_=Symbol.iterator;function fl(n){return n===null||typeof n!="object"?null:(n=N_&&n[N_]||n["@@iterator"],typeof n=="function"?n:null)}var Ht=Object.assign,Hd;function Pl(n){if(Hd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Hd=e&&e[1]||""}return`
`+Hd+n}var Vd=!1;function Gd(n,e){if(!n||Vd)return"";Vd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Vd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Pl(n):""}function c1(n){switch(n.tag){case 5:return Pl(n.type);case 16:return Pl("Lazy");case 13:return Pl("Suspense");case 19:return Pl("SuspenseList");case 0:case 2:case 15:return n=Gd(n.type,!1),n;case 11:return n=Gd(n.type.render,!1),n;case 1:return n=Gd(n.type,!0),n;default:return""}}function sp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ca:return"Fragment";case ua:return"Portal";case np:return"Profiler";case og:return"StrictMode";case ip:return"Suspense";case rp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case kx:return(n.displayName||"Context")+".Consumer";case Fx:return(n._context.displayName||"Context")+".Provider";case ag:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case lg:return e=n.displayName||null,e!==null?e:sp(n.type)||"Memo";case ls:e=n._payload,n=n._init;try{return sp(n(e))}catch{}}return null}function f1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sp(e);case 8:return e===og?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Is(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Bx(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function d1(n){var e=Bx(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Qu(n){n._valueTracker||(n._valueTracker=d1(n))}function Hx(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Bx(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function wf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function op(n,e){var t=e.checked;return Ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function O_(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Is(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Vx(n,e){e=e.checked,e!=null&&sg(n,"checked",e,!1)}function ap(n,e){Vx(n,e);var t=Is(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?lp(n,e.type,t):e.hasOwnProperty("defaultValue")&&lp(n,e.type,Is(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function F_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function lp(n,e,t){(e!=="number"||wf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var bl=Array.isArray;function wa(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Is(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function up(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(fe(91));return Ht({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function k_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(fe(92));if(bl(t)){if(1<t.length)throw Error(fe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Is(t)}}function Gx(n,e){var t=Is(e.value),i=Is(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function z_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Wx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Wx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ju,Xx=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ju=Ju||document.createElement("div"),Ju.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ju.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function cu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Hl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},h1=["Webkit","ms","Moz","O"];Object.keys(Hl).forEach(function(n){h1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Hl[e]=Hl[n]})});function Yx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Hl.hasOwnProperty(n)&&Hl[n]?(""+e).trim():e+"px"}function qx(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Yx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var p1=Ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fp(n,e){if(e){if(p1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(fe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(fe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(fe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(fe(62))}}function dp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hp=null;function ug(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var pp=null,Aa=null,Ca=null;function B_(n){if(n=Hu(n)){if(typeof pp!="function")throw Error(fe(280));var e=n.stateNode;e&&(e=vd(e),pp(n.stateNode,n.type,e))}}function $x(n){Aa?Ca?Ca.push(n):Ca=[n]:Aa=n}function jx(){if(Aa){var n=Aa,e=Ca;if(Ca=Aa=null,B_(n),e)for(n=0;n<e.length;n++)B_(e[n])}}function Kx(n,e){return n(e)}function Zx(){}var Wd=!1;function Qx(n,e,t){if(Wd)return n(e,t);Wd=!0;try{return Kx(n,e,t)}finally{Wd=!1,(Aa!==null||Ca!==null)&&(Zx(),jx())}}function fu(n,e){var t=n.stateNode;if(t===null)return null;var i=vd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(fe(231,e,typeof t));return t}var mp=!1;if(Gr)try{var dl={};Object.defineProperty(dl,"passive",{get:function(){mp=!0}}),window.addEventListener("test",dl,dl),window.removeEventListener("test",dl,dl)}catch{mp=!1}function m1(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Vl=!1,Af=null,Cf=!1,gp=null,g1={onError:function(n){Vl=!0,Af=n}};function _1(n,e,t,i,r,s,o,a,l){Vl=!1,Af=null,m1.apply(g1,arguments)}function v1(n,e,t,i,r,s,o,a,l){if(_1.apply(this,arguments),Vl){if(Vl){var u=Af;Vl=!1,Af=null}else throw Error(fe(198));Cf||(Cf=!0,gp=u)}}function Oo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Jx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function H_(n){if(Oo(n)!==n)throw Error(fe(188))}function x1(n){var e=n.alternate;if(!e){if(e=Oo(n),e===null)throw Error(fe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return H_(r),n;if(s===i)return H_(r),e;s=s.sibling}throw Error(fe(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(fe(189))}}if(t.alternate!==i)throw Error(fe(190))}if(t.tag!==3)throw Error(fe(188));return t.stateNode.current===t?n:e}function ey(n){return n=x1(n),n!==null?ty(n):null}function ty(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=ty(n);if(e!==null)return e;n=n.sibling}return null}var ny=Ti.unstable_scheduleCallback,V_=Ti.unstable_cancelCallback,y1=Ti.unstable_shouldYield,S1=Ti.unstable_requestPaint,Xt=Ti.unstable_now,M1=Ti.unstable_getCurrentPriorityLevel,cg=Ti.unstable_ImmediatePriority,iy=Ti.unstable_UserBlockingPriority,Rf=Ti.unstable_NormalPriority,E1=Ti.unstable_LowPriority,ry=Ti.unstable_IdlePriority,pd=null,vr=null;function T1(n){if(vr&&typeof vr.onCommitFiberRoot=="function")try{vr.onCommitFiberRoot(pd,n,void 0,(n.current.flags&128)===128)}catch{}}var nr=Math.clz32?Math.clz32:C1,w1=Math.log,A1=Math.LN2;function C1(n){return n>>>=0,n===0?32:31-(w1(n)/A1|0)|0}var ec=64,tc=4194304;function Ll(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Pf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ll(a):(s&=o,s!==0&&(i=Ll(s)))}else o=t&~r,o!==0?i=Ll(o):s!==0&&(i=Ll(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-nr(e),r=1<<t,i|=n[t],e&=~r;return i}function R1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-nr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=R1(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function _p(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function sy(){var n=ec;return ec<<=1,!(ec&4194240)&&(ec=64),n}function Xd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function zu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-nr(e),n[e]=t}function b1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-nr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function fg(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-nr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Mt=0;function oy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var ay,dg,ly,uy,cy,vp=!1,nc=[],ys=null,Ss=null,Ms=null,du=new Map,hu=new Map,cs=[],L1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function G_(n,e){switch(n){case"focusin":case"focusout":ys=null;break;case"dragenter":case"dragleave":Ss=null;break;case"mouseover":case"mouseout":Ms=null;break;case"pointerover":case"pointerout":du.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":hu.delete(e.pointerId)}}function hl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Hu(e),e!==null&&dg(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function D1(n,e,t,i,r){switch(e){case"focusin":return ys=hl(ys,n,e,t,i,r),!0;case"dragenter":return Ss=hl(Ss,n,e,t,i,r),!0;case"mouseover":return Ms=hl(Ms,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return du.set(s,hl(du.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,hu.set(s,hl(hu.get(s)||null,n,e,t,i,r)),!0}return!1}function fy(n){var e=lo(n.target);if(e!==null){var t=Oo(e);if(t!==null){if(e=t.tag,e===13){if(e=Jx(t),e!==null){n.blockedOn=e,cy(n.priority,function(){ly(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Jc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=xp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);hp=i,t.target.dispatchEvent(i),hp=null}else return e=Hu(t),e!==null&&dg(e),n.blockedOn=t,!1;e.shift()}return!0}function W_(n,e,t){Jc(n)&&t.delete(e)}function I1(){vp=!1,ys!==null&&Jc(ys)&&(ys=null),Ss!==null&&Jc(Ss)&&(Ss=null),Ms!==null&&Jc(Ms)&&(Ms=null),du.forEach(W_),hu.forEach(W_)}function pl(n,e){n.blockedOn===e&&(n.blockedOn=null,vp||(vp=!0,Ti.unstable_scheduleCallback(Ti.unstable_NormalPriority,I1)))}function pu(n){function e(r){return pl(r,n)}if(0<nc.length){pl(nc[0],n);for(var t=1;t<nc.length;t++){var i=nc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ys!==null&&pl(ys,n),Ss!==null&&pl(Ss,n),Ms!==null&&pl(Ms,n),du.forEach(e),hu.forEach(e),t=0;t<cs.length;t++)i=cs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<cs.length&&(t=cs[0],t.blockedOn===null);)fy(t),t.blockedOn===null&&cs.shift()}var Ra=Zr.ReactCurrentBatchConfig,bf=!0;function U1(n,e,t,i){var r=Mt,s=Ra.transition;Ra.transition=null;try{Mt=1,hg(n,e,t,i)}finally{Mt=r,Ra.transition=s}}function N1(n,e,t,i){var r=Mt,s=Ra.transition;Ra.transition=null;try{Mt=4,hg(n,e,t,i)}finally{Mt=r,Ra.transition=s}}function hg(n,e,t,i){if(bf){var r=xp(n,e,t,i);if(r===null)th(n,e,i,Lf,t),G_(n,i);else if(D1(r,n,e,t,i))i.stopPropagation();else if(G_(n,i),e&4&&-1<L1.indexOf(n)){for(;r!==null;){var s=Hu(r);if(s!==null&&ay(s),s=xp(n,e,t,i),s===null&&th(n,e,i,Lf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else th(n,e,i,null,t)}}var Lf=null;function xp(n,e,t,i){if(Lf=null,n=ug(i),n=lo(n),n!==null)if(e=Oo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Jx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Lf=n,null}function dy(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(M1()){case cg:return 1;case iy:return 4;case Rf:case E1:return 16;case ry:return 536870912;default:return 16}default:return 16}}var hs=null,pg=null,ef=null;function hy(){if(ef)return ef;var n,e=pg,t=e.length,i,r="value"in hs?hs.value:hs.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return ef=r.slice(n,1<i?1-i:void 0)}function tf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ic(){return!0}function X_(){return!1}function Ri(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ic:X_,this.isPropagationStopped=X_,this}return Ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ic)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ic)},persist:function(){},isPersistent:ic}),e}var al={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mg=Ri(al),Bu=Ht({},al,{view:0,detail:0}),O1=Ri(Bu),Yd,qd,ml,md=Ht({},Bu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gg,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ml&&(ml&&n.type==="mousemove"?(Yd=n.screenX-ml.screenX,qd=n.screenY-ml.screenY):qd=Yd=0,ml=n),Yd)},movementY:function(n){return"movementY"in n?n.movementY:qd}}),Y_=Ri(md),F1=Ht({},md,{dataTransfer:0}),k1=Ri(F1),z1=Ht({},Bu,{relatedTarget:0}),$d=Ri(z1),B1=Ht({},al,{animationName:0,elapsedTime:0,pseudoElement:0}),H1=Ri(B1),V1=Ht({},al,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),G1=Ri(V1),W1=Ht({},al,{data:0}),q_=Ri(W1),X1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=q1[n])?!!e[n]:!1}function gg(){return $1}var j1=Ht({},Bu,{key:function(n){if(n.key){var e=X1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=tf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Y1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gg,charCode:function(n){return n.type==="keypress"?tf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?tf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),K1=Ri(j1),Z1=Ht({},md,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$_=Ri(Z1),Q1=Ht({},Bu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gg}),J1=Ri(Q1),eT=Ht({},al,{propertyName:0,elapsedTime:0,pseudoElement:0}),tT=Ri(eT),nT=Ht({},md,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),iT=Ri(nT),rT=[9,13,27,32],_g=Gr&&"CompositionEvent"in window,Gl=null;Gr&&"documentMode"in document&&(Gl=document.documentMode);var sT=Gr&&"TextEvent"in window&&!Gl,py=Gr&&(!_g||Gl&&8<Gl&&11>=Gl),j_=" ",K_=!1;function my(n,e){switch(n){case"keyup":return rT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fa=!1;function oT(n,e){switch(n){case"compositionend":return gy(e);case"keypress":return e.which!==32?null:(K_=!0,j_);case"textInput":return n=e.data,n===j_&&K_?null:n;default:return null}}function aT(n,e){if(fa)return n==="compositionend"||!_g&&my(n,e)?(n=hy(),ef=pg=hs=null,fa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return py&&e.locale!=="ko"?null:e.data;default:return null}}var lT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Z_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!lT[n.type]:e==="textarea"}function _y(n,e,t,i){$x(i),e=Df(e,"onChange"),0<e.length&&(t=new mg("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Wl=null,mu=null;function uT(n){Ry(n,0)}function gd(n){var e=pa(n);if(Hx(e))return n}function cT(n,e){if(n==="change")return e}var vy=!1;if(Gr){var jd;if(Gr){var Kd="oninput"in document;if(!Kd){var Q_=document.createElement("div");Q_.setAttribute("oninput","return;"),Kd=typeof Q_.oninput=="function"}jd=Kd}else jd=!1;vy=jd&&(!document.documentMode||9<document.documentMode)}function J_(){Wl&&(Wl.detachEvent("onpropertychange",xy),mu=Wl=null)}function xy(n){if(n.propertyName==="value"&&gd(mu)){var e=[];_y(e,mu,n,ug(n)),Qx(uT,e)}}function fT(n,e,t){n==="focusin"?(J_(),Wl=e,mu=t,Wl.attachEvent("onpropertychange",xy)):n==="focusout"&&J_()}function dT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return gd(mu)}function hT(n,e){if(n==="click")return gd(e)}function pT(n,e){if(n==="input"||n==="change")return gd(e)}function mT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var rr=typeof Object.is=="function"?Object.is:mT;function gu(n,e){if(rr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!tp.call(e,r)||!rr(n[r],e[r]))return!1}return!0}function e0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function t0(n,e){var t=e0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=e0(t)}}function yy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?yy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Sy(){for(var n=window,e=wf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=wf(n.document)}return e}function vg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function gT(n){var e=Sy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&yy(t.ownerDocument.documentElement,t)){if(i!==null&&vg(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=t0(t,s);var o=t0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var _T=Gr&&"documentMode"in document&&11>=document.documentMode,da=null,yp=null,Xl=null,Sp=!1;function n0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Sp||da==null||da!==wf(i)||(i=da,"selectionStart"in i&&vg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xl&&gu(Xl,i)||(Xl=i,i=Df(yp,"onSelect"),0<i.length&&(e=new mg("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=da)))}function rc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ha={animationend:rc("Animation","AnimationEnd"),animationiteration:rc("Animation","AnimationIteration"),animationstart:rc("Animation","AnimationStart"),transitionend:rc("Transition","TransitionEnd")},Zd={},My={};Gr&&(My=document.createElement("div").style,"AnimationEvent"in window||(delete ha.animationend.animation,delete ha.animationiteration.animation,delete ha.animationstart.animation),"TransitionEvent"in window||delete ha.transitionend.transition);function _d(n){if(Zd[n])return Zd[n];if(!ha[n])return n;var e=ha[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in My)return Zd[n]=e[t];return n}var Ey=_d("animationend"),Ty=_d("animationiteration"),wy=_d("animationstart"),Ay=_d("transitionend"),Cy=new Map,i0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bs(n,e){Cy.set(n,e),No(e,[n])}for(var Qd=0;Qd<i0.length;Qd++){var Jd=i0[Qd],vT=Jd.toLowerCase(),xT=Jd[0].toUpperCase()+Jd.slice(1);Bs(vT,"on"+xT)}Bs(Ey,"onAnimationEnd");Bs(Ty,"onAnimationIteration");Bs(wy,"onAnimationStart");Bs("dblclick","onDoubleClick");Bs("focusin","onFocus");Bs("focusout","onBlur");Bs(Ay,"onTransitionEnd");Ha("onMouseEnter",["mouseout","mouseover"]);Ha("onMouseLeave",["mouseout","mouseover"]);Ha("onPointerEnter",["pointerout","pointerover"]);Ha("onPointerLeave",["pointerout","pointerover"]);No("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));No("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));No("onBeforeInput",["compositionend","keypress","textInput","paste"]);No("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));No("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));No("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dl));function r0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,v1(i,e,void 0,n),n.currentTarget=null}function Ry(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;r0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;r0(r,a,u),s=l}}}if(Cf)throw n=gp,Cf=!1,gp=null,n}function bt(n,e){var t=e[Ap];t===void 0&&(t=e[Ap]=new Set);var i=n+"__bubble";t.has(i)||(Py(e,n,2,!1),t.add(i))}function eh(n,e,t){var i=0;e&&(i|=4),Py(t,n,i,e)}var sc="_reactListening"+Math.random().toString(36).slice(2);function _u(n){if(!n[sc]){n[sc]=!0,Ox.forEach(function(t){t!=="selectionchange"&&(yT.has(t)||eh(t,!1,n),eh(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[sc]||(e[sc]=!0,eh("selectionchange",!1,e))}}function Py(n,e,t,i){switch(dy(e)){case 1:var r=U1;break;case 4:r=N1;break;default:r=hg}t=r.bind(null,e,t,n),r=void 0,!mp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function th(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=lo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Qx(function(){var u=s,c=ug(t),d=[];e:{var f=Cy.get(n);if(f!==void 0){var p=mg,_=n;switch(n){case"keypress":if(tf(t)===0)break e;case"keydown":case"keyup":p=K1;break;case"focusin":_="focus",p=$d;break;case"focusout":_="blur",p=$d;break;case"beforeblur":case"afterblur":p=$d;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Y_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=k1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=J1;break;case Ey:case Ty:case wy:p=H1;break;case Ay:p=tT;break;case"scroll":p=O1;break;case"wheel":p=iT;break;case"copy":case"cut":case"paste":p=G1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=$_}var g=(e&4)!==0,m=!g&&n==="scroll",h=g?f!==null?f+"Capture":null:f;g=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,h!==null&&(y=fu(v,h),y!=null&&g.push(vu(v,y,x)))),m)break;v=v.return}0<g.length&&(f=new p(f,_,null,t,c),d.push({event:f,listeners:g}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==hp&&(_=t.relatedTarget||t.fromElement)&&(lo(_)||_[Wr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?lo(_):null,_!==null&&(m=Oo(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(g=Y_,y="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(g=$_,y="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:pa(p),x=_==null?f:pa(_),f=new g(y,v+"leave",p,t,c),f.target=m,f.relatedTarget=x,y=null,lo(c)===u&&(g=new g(h,v+"enter",_,t,c),g.target=x,g.relatedTarget=m,y=g),m=y,p&&_)t:{for(g=p,h=_,v=0,x=g;x;x=zo(x))v++;for(x=0,y=h;y;y=zo(y))x++;for(;0<v-x;)g=zo(g),v--;for(;0<x-v;)h=zo(h),x--;for(;v--;){if(g===h||h!==null&&g===h.alternate)break t;g=zo(g),h=zo(h)}g=null}else g=null;p!==null&&s0(d,f,p,g,!1),_!==null&&m!==null&&s0(d,m,_,g,!0)}}e:{if(f=u?pa(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=cT;else if(Z_(f))if(vy)C=pT;else{C=dT;var w=fT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=hT);if(C&&(C=C(n,u))){_y(d,C,t,c);break e}w&&w(n,f,u),n==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&lp(f,"number",f.value)}switch(w=u?pa(u):window,n){case"focusin":(Z_(w)||w.contentEditable==="true")&&(da=w,yp=u,Xl=null);break;case"focusout":Xl=yp=da=null;break;case"mousedown":Sp=!0;break;case"contextmenu":case"mouseup":case"dragend":Sp=!1,n0(d,t,c);break;case"selectionchange":if(_T)break;case"keydown":case"keyup":n0(d,t,c)}var M;if(_g)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else fa?my(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(py&&t.locale!=="ko"&&(fa||R!=="onCompositionStart"?R==="onCompositionEnd"&&fa&&(M=hy()):(hs=c,pg="value"in hs?hs.value:hs.textContent,fa=!0)),w=Df(u,R),0<w.length&&(R=new q_(R,n,null,t,c),d.push({event:R,listeners:w}),M?R.data=M:(M=gy(t),M!==null&&(R.data=M)))),(M=sT?oT(n,t):aT(n,t))&&(u=Df(u,"onBeforeInput"),0<u.length&&(c=new q_("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=M))}Ry(d,e)})}function vu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Df(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=fu(n,t),s!=null&&i.unshift(vu(n,s,r)),s=fu(n,e),s!=null&&i.push(vu(n,s,r))),n=n.return}return i}function zo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function s0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=fu(t,s),l!=null&&o.unshift(vu(t,l,a))):r||(l=fu(t,s),l!=null&&o.push(vu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var ST=/\r\n?/g,MT=/\u0000|\uFFFD/g;function o0(n){return(typeof n=="string"?n:""+n).replace(ST,`
`).replace(MT,"")}function oc(n,e,t){if(e=o0(e),o0(n)!==e&&t)throw Error(fe(425))}function If(){}var Mp=null,Ep=null;function Tp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wp=typeof setTimeout=="function"?setTimeout:void 0,ET=typeof clearTimeout=="function"?clearTimeout:void 0,a0=typeof Promise=="function"?Promise:void 0,TT=typeof queueMicrotask=="function"?queueMicrotask:typeof a0<"u"?function(n){return a0.resolve(null).then(n).catch(wT)}:wp;function wT(n){setTimeout(function(){throw n})}function nh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),pu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);pu(e)}function Es(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function l0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ll=Math.random().toString(36).slice(2),fr="__reactFiber$"+ll,xu="__reactProps$"+ll,Wr="__reactContainer$"+ll,Ap="__reactEvents$"+ll,AT="__reactListeners$"+ll,CT="__reactHandles$"+ll;function lo(n){var e=n[fr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Wr]||t[fr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=l0(n);n!==null;){if(t=n[fr])return t;n=l0(n)}return e}n=t,t=n.parentNode}return null}function Hu(n){return n=n[fr]||n[Wr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function pa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(fe(33))}function vd(n){return n[xu]||null}var Cp=[],ma=-1;function Hs(n){return{current:n}}function Dt(n){0>ma||(n.current=Cp[ma],Cp[ma]=null,ma--)}function Rt(n,e){ma++,Cp[ma]=n.current,n.current=e}var Us={},In=Hs(Us),Zn=Hs(!1),wo=Us;function Va(n,e){var t=n.type.contextTypes;if(!t)return Us;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Qn(n){return n=n.childContextTypes,n!=null}function Uf(){Dt(Zn),Dt(In)}function u0(n,e,t){if(In.current!==Us)throw Error(fe(168));Rt(In,e),Rt(Zn,t)}function by(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(fe(108,f1(n)||"Unknown",r));return Ht({},t,i)}function Nf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Us,wo=In.current,Rt(In,n),Rt(Zn,Zn.current),!0}function c0(n,e,t){var i=n.stateNode;if(!i)throw Error(fe(169));t?(n=by(n,e,wo),i.__reactInternalMemoizedMergedChildContext=n,Dt(Zn),Dt(In),Rt(In,n)):Dt(Zn),Rt(Zn,t)}var Dr=null,xd=!1,ih=!1;function Ly(n){Dr===null?Dr=[n]:Dr.push(n)}function RT(n){xd=!0,Ly(n)}function Vs(){if(!ih&&Dr!==null){ih=!0;var n=0,e=Mt;try{var t=Dr;for(Mt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Dr=null,xd=!1}catch(r){throw Dr!==null&&(Dr=Dr.slice(n+1)),ny(cg,Vs),r}finally{Mt=e,ih=!1}}return null}var ga=[],_a=0,Of=null,Ff=0,Di=[],Ii=0,Ao=null,Or=1,Fr="";function Js(n,e){ga[_a++]=Ff,ga[_a++]=Of,Of=n,Ff=e}function Dy(n,e,t){Di[Ii++]=Or,Di[Ii++]=Fr,Di[Ii++]=Ao,Ao=n;var i=Or;n=Fr;var r=32-nr(i)-1;i&=~(1<<r),t+=1;var s=32-nr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Or=1<<32-nr(e)+r|t<<r|i,Fr=s+n}else Or=1<<s|t<<r|i,Fr=n}function xg(n){n.return!==null&&(Js(n,1),Dy(n,1,0))}function yg(n){for(;n===Of;)Of=ga[--_a],ga[_a]=null,Ff=ga[--_a],ga[_a]=null;for(;n===Ao;)Ao=Di[--Ii],Di[Ii]=null,Fr=Di[--Ii],Di[Ii]=null,Or=Di[--Ii],Di[Ii]=null}var Mi=null,vi=null,It=!1,Ji=null;function Iy(n,e){var t=Fi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function f0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Mi=n,vi=Es(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Mi=n,vi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ao!==null?{id:Or,overflow:Fr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Fi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Mi=n,vi=null,!0):!1;default:return!1}}function Rp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Pp(n){if(It){var e=vi;if(e){var t=e;if(!f0(n,e)){if(Rp(n))throw Error(fe(418));e=Es(t.nextSibling);var i=Mi;e&&f0(n,e)?Iy(i,t):(n.flags=n.flags&-4097|2,It=!1,Mi=n)}}else{if(Rp(n))throw Error(fe(418));n.flags=n.flags&-4097|2,It=!1,Mi=n}}}function d0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Mi=n}function ac(n){if(n!==Mi)return!1;if(!It)return d0(n),It=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Tp(n.type,n.memoizedProps)),e&&(e=vi)){if(Rp(n))throw Uy(),Error(fe(418));for(;e;)Iy(n,e),e=Es(e.nextSibling)}if(d0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(fe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){vi=Es(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}vi=null}}else vi=Mi?Es(n.stateNode.nextSibling):null;return!0}function Uy(){for(var n=vi;n;)n=Es(n.nextSibling)}function Ga(){vi=Mi=null,It=!1}function Sg(n){Ji===null?Ji=[n]:Ji.push(n)}var PT=Zr.ReactCurrentBatchConfig;function gl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(fe(309));var i=t.stateNode}if(!i)throw Error(fe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(fe(284));if(!t._owner)throw Error(fe(290,n))}return n}function lc(n,e){throw n=Object.prototype.toString.call(e),Error(fe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function h0(n){var e=n._init;return e(n._payload)}function Ny(n){function e(h,v){if(n){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Cs(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,x,y){return v===null||v.tag!==6?(v=ch(x,h.mode,y),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,y){var C=x.type;return C===ca?c(h,v,x.props.children,y,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ls&&h0(C)===v.type)?(y=r(v,x.props),y.ref=gl(h,v,x),y.return=h,y):(y=uf(x.type,x.key,x.props,null,h.mode,y),y.ref=gl(h,v,x),y.return=h,y)}function u(h,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=fh(x,h.mode,y),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function c(h,v,x,y,C){return v===null||v.tag!==7?(v=_o(x,h.mode,y,C),v.return=h,v):(v=r(v,x),v.return=h,v)}function d(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ch(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Zu:return x=uf(v.type,v.key,v.props,null,h.mode,x),x.ref=gl(h,null,v),x.return=h,x;case ua:return v=fh(v,h.mode,x),v.return=h,v;case ls:var y=v._init;return d(h,y(v._payload),x)}if(bl(v)||fl(v))return v=_o(v,h.mode,x,null),v.return=h,v;lc(h,v)}return null}function f(h,v,x,y){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(h,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Zu:return x.key===C?l(h,v,x,y):null;case ua:return x.key===C?u(h,v,x,y):null;case ls:return C=x._init,f(h,v,C(x._payload),y)}if(bl(x)||fl(x))return C!==null?null:c(h,v,x,y,null);lc(h,x)}return null}function p(h,v,x,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(x)||null,a(v,h,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Zu:return h=h.get(y.key===null?x:y.key)||null,l(v,h,y,C);case ua:return h=h.get(y.key===null?x:y.key)||null,u(v,h,y,C);case ls:var w=y._init;return p(h,v,x,w(y._payload),C)}if(bl(y)||fl(y))return h=h.get(x)||null,c(v,h,y,C,null);lc(v,y)}return null}function _(h,v,x,y){for(var C=null,w=null,M=v,R=v=0,E=null;M!==null&&R<x.length;R++){M.index>R?(E=M,M=null):E=M.sibling;var S=f(h,M,x[R],y);if(S===null){M===null&&(M=E);break}n&&M&&S.alternate===null&&e(h,M),v=s(S,v,R),w===null?C=S:w.sibling=S,w=S,M=E}if(R===x.length)return t(h,M),It&&Js(h,R),C;if(M===null){for(;R<x.length;R++)M=d(h,x[R],y),M!==null&&(v=s(M,v,R),w===null?C=M:w.sibling=M,w=M);return It&&Js(h,R),C}for(M=i(h,M);R<x.length;R++)E=p(M,h,R,x[R],y),E!==null&&(n&&E.alternate!==null&&M.delete(E.key===null?R:E.key),v=s(E,v,R),w===null?C=E:w.sibling=E,w=E);return n&&M.forEach(function(L){return e(h,L)}),It&&Js(h,R),C}function g(h,v,x,y){var C=fl(x);if(typeof C!="function")throw Error(fe(150));if(x=C.call(x),x==null)throw Error(fe(151));for(var w=C=null,M=v,R=v=0,E=null,S=x.next();M!==null&&!S.done;R++,S=x.next()){M.index>R?(E=M,M=null):E=M.sibling;var L=f(h,M,S.value,y);if(L===null){M===null&&(M=E);break}n&&M&&L.alternate===null&&e(h,M),v=s(L,v,R),w===null?C=L:w.sibling=L,w=L,M=E}if(S.done)return t(h,M),It&&Js(h,R),C;if(M===null){for(;!S.done;R++,S=x.next())S=d(h,S.value,y),S!==null&&(v=s(S,v,R),w===null?C=S:w.sibling=S,w=S);return It&&Js(h,R),C}for(M=i(h,M);!S.done;R++,S=x.next())S=p(M,h,R,S.value,y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?R:S.key),v=s(S,v,R),w===null?C=S:w.sibling=S,w=S);return n&&M.forEach(function(O){return e(h,O)}),It&&Js(h,R),C}function m(h,v,x,y){if(typeof x=="object"&&x!==null&&x.type===ca&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Zu:e:{for(var C=x.key,w=v;w!==null;){if(w.key===C){if(C=x.type,C===ca){if(w.tag===7){t(h,w.sibling),v=r(w,x.props.children),v.return=h,h=v;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ls&&h0(C)===w.type){t(h,w.sibling),v=r(w,x.props),v.ref=gl(h,w,x),v.return=h,h=v;break e}t(h,w);break}else e(h,w);w=w.sibling}x.type===ca?(v=_o(x.props.children,h.mode,y,x.key),v.return=h,h=v):(y=uf(x.type,x.key,x.props,null,h.mode,y),y.ref=gl(h,v,x),y.return=h,h=y)}return o(h);case ua:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=fh(x,h.mode,y),v.return=h,h=v}return o(h);case ls:return w=x._init,m(h,v,w(x._payload),y)}if(bl(x))return _(h,v,x,y);if(fl(x))return g(h,v,x,y);lc(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,x),v.return=h,h=v):(t(h,v),v=ch(x,h.mode,y),v.return=h,h=v),o(h)):t(h,v)}return m}var Wa=Ny(!0),Oy=Ny(!1),kf=Hs(null),zf=null,va=null,Mg=null;function Eg(){Mg=va=zf=null}function Tg(n){var e=kf.current;Dt(kf),n._currentValue=e}function bp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Pa(n,e){zf=n,Mg=va=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Kn=!0),n.firstContext=null)}function Gi(n){var e=n._currentValue;if(Mg!==n)if(n={context:n,memoizedValue:e,next:null},va===null){if(zf===null)throw Error(fe(308));va=n,zf.dependencies={lanes:0,firstContext:n}}else va=va.next=n;return e}var uo=null;function wg(n){uo===null?uo=[n]:uo.push(n)}function Fy(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,wg(e)):(t.next=r.next,r.next=t),e.interleaved=t,Xr(n,i)}function Xr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var us=!1;function Ag(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ky(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Hr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ts(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,mt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xr(n,t)}return r=i.interleaved,r===null?(e.next=e,wg(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xr(n,t)}function nf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,fg(n,t)}}function p0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Bf(n,e,t,i){var r=n.updateQueue;us=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,g=a;switch(f=e,p=t,g.tag){case 1:if(_=g.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=Ht({},d,f);break e;case 2:us=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ro|=o,n.lanes=o,n.memoizedState=d}}function m0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(fe(191,r));r.call(i)}}}var Vu={},xr=Hs(Vu),yu=Hs(Vu),Su=Hs(Vu);function co(n){if(n===Vu)throw Error(fe(174));return n}function Cg(n,e){switch(Rt(Su,e),Rt(yu,n),Rt(xr,Vu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=cp(e,n)}Dt(xr),Rt(xr,e)}function Xa(){Dt(xr),Dt(yu),Dt(Su)}function zy(n){co(Su.current);var e=co(xr.current),t=cp(e,n.type);e!==t&&(Rt(yu,n),Rt(xr,t))}function Rg(n){yu.current===n&&(Dt(xr),Dt(yu))}var Ft=Hs(0);function Hf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rh=[];function Pg(){for(var n=0;n<rh.length;n++)rh[n]._workInProgressVersionPrimary=null;rh.length=0}var rf=Zr.ReactCurrentDispatcher,sh=Zr.ReactCurrentBatchConfig,Co=0,Bt=null,rn=null,dn=null,Vf=!1,Yl=!1,Mu=0,bT=0;function Mn(){throw Error(fe(321))}function bg(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!rr(n[t],e[t]))return!1;return!0}function Lg(n,e,t,i,r,s){if(Co=s,Bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rf.current=n===null||n.memoizedState===null?UT:NT,n=t(i,r),Yl){s=0;do{if(Yl=!1,Mu=0,25<=s)throw Error(fe(301));s+=1,dn=rn=null,e.updateQueue=null,rf.current=OT,n=t(i,r)}while(Yl)}if(rf.current=Gf,e=rn!==null&&rn.next!==null,Co=0,dn=rn=Bt=null,Vf=!1,e)throw Error(fe(300));return n}function Dg(){var n=Mu!==0;return Mu=0,n}function or(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Bt.memoizedState=dn=n:dn=dn.next=n,dn}function Wi(){if(rn===null){var n=Bt.alternate;n=n!==null?n.memoizedState:null}else n=rn.next;var e=dn===null?Bt.memoizedState:dn.next;if(e!==null)dn=e,rn=n;else{if(n===null)throw Error(fe(310));rn=n,n={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},dn===null?Bt.memoizedState=dn=n:dn=dn.next=n}return dn}function Eu(n,e){return typeof e=="function"?e(n):e}function oh(n){var e=Wi(),t=e.queue;if(t===null)throw Error(fe(311));t.lastRenderedReducer=n;var i=rn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Co&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Bt.lanes|=c,Ro|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,rr(i,e.memoizedState)||(Kn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Bt.lanes|=s,Ro|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ah(n){var e=Wi(),t=e.queue;if(t===null)throw Error(fe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);rr(s,e.memoizedState)||(Kn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function By(){}function Hy(n,e){var t=Bt,i=Wi(),r=e(),s=!rr(i.memoizedState,r);if(s&&(i.memoizedState=r,Kn=!0),i=i.queue,Ig(Wy.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||dn!==null&&dn.memoizedState.tag&1){if(t.flags|=2048,Tu(9,Gy.bind(null,t,i,r,e),void 0,null),pn===null)throw Error(fe(349));Co&30||Vy(t,e,r)}return r}function Vy(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Bt.updateQueue,e===null?(e={lastEffect:null,stores:null},Bt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Gy(n,e,t,i){e.value=t,e.getSnapshot=i,Xy(e)&&Yy(n)}function Wy(n,e,t){return t(function(){Xy(e)&&Yy(n)})}function Xy(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!rr(n,t)}catch{return!0}}function Yy(n){var e=Xr(n,1);e!==null&&ir(e,n,1,-1)}function g0(n){var e=or();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eu,lastRenderedState:n},e.queue=n,n=n.dispatch=IT.bind(null,Bt,n),[e.memoizedState,n]}function Tu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Bt.updateQueue,e===null?(e={lastEffect:null,stores:null},Bt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function qy(){return Wi().memoizedState}function sf(n,e,t,i){var r=or();Bt.flags|=n,r.memoizedState=Tu(1|e,t,void 0,i===void 0?null:i)}function yd(n,e,t,i){var r=Wi();i=i===void 0?null:i;var s=void 0;if(rn!==null){var o=rn.memoizedState;if(s=o.destroy,i!==null&&bg(i,o.deps)){r.memoizedState=Tu(e,t,s,i);return}}Bt.flags|=n,r.memoizedState=Tu(1|e,t,s,i)}function _0(n,e){return sf(8390656,8,n,e)}function Ig(n,e){return yd(2048,8,n,e)}function $y(n,e){return yd(4,2,n,e)}function jy(n,e){return yd(4,4,n,e)}function Ky(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Zy(n,e,t){return t=t!=null?t.concat([n]):null,yd(4,4,Ky.bind(null,e,n),t)}function Ug(){}function Qy(n,e){var t=Wi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&bg(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Jy(n,e){var t=Wi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&bg(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function eS(n,e,t){return Co&21?(rr(t,e)||(t=sy(),Bt.lanes|=t,Ro|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Kn=!0),n.memoizedState=t)}function LT(n,e){var t=Mt;Mt=t!==0&&4>t?t:4,n(!0);var i=sh.transition;sh.transition={};try{n(!1),e()}finally{Mt=t,sh.transition=i}}function tS(){return Wi().memoizedState}function DT(n,e,t){var i=As(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},nS(n))iS(e,t);else if(t=Fy(n,e,t,i),t!==null){var r=Vn();ir(t,n,i,r),rS(t,e,i)}}function IT(n,e,t){var i=As(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(nS(n))iS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,rr(a,o)){var l=e.interleaved;l===null?(r.next=r,wg(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Fy(n,e,r,i),t!==null&&(r=Vn(),ir(t,n,i,r),rS(t,e,i))}}function nS(n){var e=n.alternate;return n===Bt||e!==null&&e===Bt}function iS(n,e){Yl=Vf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function rS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,fg(n,t)}}var Gf={readContext:Gi,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},UT={readContext:Gi,useCallback:function(n,e){return or().memoizedState=[n,e===void 0?null:e],n},useContext:Gi,useEffect:_0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,sf(4194308,4,Ky.bind(null,e,n),t)},useLayoutEffect:function(n,e){return sf(4194308,4,n,e)},useInsertionEffect:function(n,e){return sf(4,2,n,e)},useMemo:function(n,e){var t=or();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=or();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=DT.bind(null,Bt,n),[i.memoizedState,n]},useRef:function(n){var e=or();return n={current:n},e.memoizedState=n},useState:g0,useDebugValue:Ug,useDeferredValue:function(n){return or().memoizedState=n},useTransition:function(){var n=g0(!1),e=n[0];return n=LT.bind(null,n[1]),or().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Bt,r=or();if(It){if(t===void 0)throw Error(fe(407));t=t()}else{if(t=e(),pn===null)throw Error(fe(349));Co&30||Vy(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,_0(Wy.bind(null,i,s,n),[n]),i.flags|=2048,Tu(9,Gy.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=or(),e=pn.identifierPrefix;if(It){var t=Fr,i=Or;t=(i&~(1<<32-nr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Mu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=bT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},NT={readContext:Gi,useCallback:Qy,useContext:Gi,useEffect:Ig,useImperativeHandle:Zy,useInsertionEffect:$y,useLayoutEffect:jy,useMemo:Jy,useReducer:oh,useRef:qy,useState:function(){return oh(Eu)},useDebugValue:Ug,useDeferredValue:function(n){var e=Wi();return eS(e,rn.memoizedState,n)},useTransition:function(){var n=oh(Eu)[0],e=Wi().memoizedState;return[n,e]},useMutableSource:By,useSyncExternalStore:Hy,useId:tS,unstable_isNewReconciler:!1},OT={readContext:Gi,useCallback:Qy,useContext:Gi,useEffect:Ig,useImperativeHandle:Zy,useInsertionEffect:$y,useLayoutEffect:jy,useMemo:Jy,useReducer:ah,useRef:qy,useState:function(){return ah(Eu)},useDebugValue:Ug,useDeferredValue:function(n){var e=Wi();return rn===null?e.memoizedState=n:eS(e,rn.memoizedState,n)},useTransition:function(){var n=ah(Eu)[0],e=Wi().memoizedState;return[n,e]},useMutableSource:By,useSyncExternalStore:Hy,useId:tS,unstable_isNewReconciler:!1};function Zi(n,e){if(n&&n.defaultProps){e=Ht({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Lp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Ht({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Sd={isMounted:function(n){return(n=n._reactInternals)?Oo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Vn(),r=As(n),s=Hr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ts(n,s,r),e!==null&&(ir(e,n,r,i),nf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Vn(),r=As(n),s=Hr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ts(n,s,r),e!==null&&(ir(e,n,r,i),nf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Vn(),i=As(n),r=Hr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ts(n,r,i),e!==null&&(ir(e,n,i,t),nf(e,n,i))}};function v0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!gu(t,i)||!gu(r,s):!0}function sS(n,e,t){var i=!1,r=Us,s=e.contextType;return typeof s=="object"&&s!==null?s=Gi(s):(r=Qn(e)?wo:In.current,i=e.contextTypes,s=(i=i!=null)?Va(n,r):Us),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sd,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function x0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Sd.enqueueReplaceState(e,e.state,null)}function Dp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Ag(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gi(s):(s=Qn(e)?wo:In.current,r.context=Va(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Sd.enqueueReplaceState(r,r.state,null),Bf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ya(n,e){try{var t="",i=e;do t+=c1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function lh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Ip(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var FT=typeof WeakMap=="function"?WeakMap:Map;function oS(n,e,t){t=Hr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Xf||(Xf=!0,Gp=i),Ip(n,e)},t}function aS(n,e,t){t=Hr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Ip(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Ip(n,e),typeof i!="function"&&(ws===null?ws=new Set([this]):ws.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function y0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new FT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=ZT.bind(null,n,e,t),e.then(n,n))}function S0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function M0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Hr(-1,1),e.tag=2,Ts(t,e,1))),t.lanes|=1),n)}var kT=Zr.ReactCurrentOwner,Kn=!1;function kn(n,e,t,i){e.child=n===null?Oy(e,null,t,i):Wa(e,n.child,t,i)}function E0(n,e,t,i,r){t=t.render;var s=e.ref;return Pa(e,r),i=Lg(n,e,t,i,s,r),t=Dg(),n!==null&&!Kn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Yr(n,e,r)):(It&&t&&xg(e),e.flags|=1,kn(n,e,i,r),e.child)}function T0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Vg(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,lS(n,e,s,i,r)):(n=uf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:gu,t(o,i)&&n.ref===e.ref)return Yr(n,e,r)}return e.flags|=1,n=Cs(s,i),n.ref=e.ref,n.return=e,e.child=n}function lS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(gu(s,i)&&n.ref===e.ref)if(Kn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Kn=!0);else return e.lanes=n.lanes,Yr(n,e,r)}return Up(n,e,t,i,r)}function uS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Rt(ya,di),di|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Rt(ya,di),di|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Rt(ya,di),di|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Rt(ya,di),di|=i;return kn(n,e,r,t),e.child}function cS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Up(n,e,t,i,r){var s=Qn(t)?wo:In.current;return s=Va(e,s),Pa(e,r),t=Lg(n,e,t,i,s,r),i=Dg(),n!==null&&!Kn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Yr(n,e,r)):(It&&i&&xg(e),e.flags|=1,kn(n,e,t,r),e.child)}function w0(n,e,t,i,r){if(Qn(t)){var s=!0;Nf(e)}else s=!1;if(Pa(e,r),e.stateNode===null)of(n,e),sS(e,t,i),Dp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Gi(u):(u=Qn(t)?wo:In.current,u=Va(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&x0(e,o,i,u),us=!1;var f=e.memoizedState;o.state=f,Bf(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Zn.current||us?(typeof c=="function"&&(Lp(e,t,c,i),l=e.memoizedState),(a=us||v0(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,ky(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Zi(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Gi(l):(l=Qn(t)?wo:In.current,l=Va(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&x0(e,o,i,l),us=!1,f=e.memoizedState,o.state=f,Bf(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||Zn.current||us?(typeof p=="function"&&(Lp(e,t,p,i),_=e.memoizedState),(u=us||v0(e,t,u,i,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Np(n,e,t,i,s,r)}function Np(n,e,t,i,r,s){cS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&c0(e,t,!1),Yr(n,e,s);i=e.stateNode,kT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Wa(e,n.child,null,s),e.child=Wa(e,null,a,s)):kn(n,e,a,s),e.memoizedState=i.state,r&&c0(e,t,!0),e.child}function fS(n){var e=n.stateNode;e.pendingContext?u0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&u0(n,e.context,!1),Cg(n,e.containerInfo)}function A0(n,e,t,i,r){return Ga(),Sg(r),e.flags|=256,kn(n,e,t,i),e.child}var Op={dehydrated:null,treeContext:null,retryLane:0};function Fp(n){return{baseLanes:n,cachePool:null,transitions:null}}function dS(n,e,t){var i=e.pendingProps,r=Ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Rt(Ft,r&1),n===null)return Pp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Td(o,i,0,null),n=_o(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Fp(t),e.memoizedState=Op,n):Ng(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return zT(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Cs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Cs(a,s):(s=_o(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Fp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Op,i}return s=n.child,n=s.sibling,i=Cs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Ng(n,e){return e=Td({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function uc(n,e,t,i){return i!==null&&Sg(i),Wa(e,n.child,null,t),n=Ng(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function zT(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=lh(Error(fe(422))),uc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Td({mode:"visible",children:i.children},r,0,null),s=_o(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Wa(e,n.child,null,o),e.child.memoizedState=Fp(o),e.memoizedState=Op,s);if(!(e.mode&1))return uc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(fe(419)),i=lh(s,i,void 0),uc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Kn||a){if(i=pn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xr(n,r),ir(i,n,r,-1))}return Hg(),i=lh(Error(fe(421))),uc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=QT.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,vi=Es(r.nextSibling),Mi=e,It=!0,Ji=null,n!==null&&(Di[Ii++]=Or,Di[Ii++]=Fr,Di[Ii++]=Ao,Or=n.id,Fr=n.overflow,Ao=e),e=Ng(e,i.children),e.flags|=4096,e)}function C0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),bp(n.return,e,t)}function uh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function hS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(kn(n,e,i.children,t),i=Ft.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&C0(n,t,e);else if(n.tag===19)C0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Rt(Ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Hf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),uh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Hf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}uh(e,!0,t,null,s);break;case"together":uh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function of(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Yr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ro|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(fe(153));if(e.child!==null){for(n=e.child,t=Cs(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Cs(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function BT(n,e,t){switch(e.tag){case 3:fS(e),Ga();break;case 5:zy(e);break;case 1:Qn(e.type)&&Nf(e);break;case 4:Cg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Rt(kf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Rt(Ft,Ft.current&1),e.flags|=128,null):t&e.child.childLanes?dS(n,e,t):(Rt(Ft,Ft.current&1),n=Yr(n,e,t),n!==null?n.sibling:null);Rt(Ft,Ft.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return hS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Rt(Ft,Ft.current),i)break;return null;case 22:case 23:return e.lanes=0,uS(n,e,t)}return Yr(n,e,t)}var pS,kp,mS,gS;pS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};kp=function(){};mS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,co(xr.current);var s=null;switch(t){case"input":r=op(n,r),i=op(n,i),s=[];break;case"select":r=Ht({},r,{value:void 0}),i=Ht({},i,{value:void 0}),s=[];break;case"textarea":r=up(n,r),i=up(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=If)}fp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(uu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(uu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&bt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};gS=function(n,e,t,i){t!==i&&(e.flags|=4)};function _l(n,e){if(!It)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function En(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function HT(n,e,t){var i=e.pendingProps;switch(yg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(e),null;case 1:return Qn(e.type)&&Uf(),En(e),null;case 3:return i=e.stateNode,Xa(),Dt(Zn),Dt(In),Pg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ac(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ji!==null&&(Yp(Ji),Ji=null))),kp(n,e),En(e),null;case 5:Rg(e);var r=co(Su.current);if(t=e.type,n!==null&&e.stateNode!=null)mS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(fe(166));return En(e),null}if(n=co(xr.current),ac(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[fr]=e,i[xu]=s,n=(e.mode&1)!==0,t){case"dialog":bt("cancel",i),bt("close",i);break;case"iframe":case"object":case"embed":bt("load",i);break;case"video":case"audio":for(r=0;r<Dl.length;r++)bt(Dl[r],i);break;case"source":bt("error",i);break;case"img":case"image":case"link":bt("error",i),bt("load",i);break;case"details":bt("toggle",i);break;case"input":O_(i,s),bt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},bt("invalid",i);break;case"textarea":k_(i,s),bt("invalid",i)}fp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&oc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&oc(i.textContent,a,n),r=["children",""+a]):uu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&bt("scroll",i)}switch(t){case"input":Qu(i),F_(i,s,!0);break;case"textarea":Qu(i),z_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=If)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Wx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[fr]=e,n[xu]=i,pS(n,e,!1,!1),e.stateNode=n;e:{switch(o=dp(t,i),t){case"dialog":bt("cancel",n),bt("close",n),r=i;break;case"iframe":case"object":case"embed":bt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Dl.length;r++)bt(Dl[r],n);r=i;break;case"source":bt("error",n),r=i;break;case"img":case"image":case"link":bt("error",n),bt("load",n),r=i;break;case"details":bt("toggle",n),r=i;break;case"input":O_(n,i),r=op(n,i),bt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Ht({},i,{value:void 0}),bt("invalid",n);break;case"textarea":k_(n,i),r=up(n,i),bt("invalid",n);break;default:r=i}fp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?qx(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xx(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&cu(n,l):typeof l=="number"&&cu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(uu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&bt("scroll",n):l!=null&&sg(n,s,l,o))}switch(t){case"input":Qu(n),F_(n,i,!1);break;case"textarea":Qu(n),z_(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Is(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?wa(n,!!i.multiple,s,!1):i.defaultValue!=null&&wa(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=If)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return En(e),null;case 6:if(n&&e.stateNode!=null)gS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(fe(166));if(t=co(Su.current),co(xr.current),ac(e)){if(i=e.stateNode,t=e.memoizedProps,i[fr]=e,(s=i.nodeValue!==t)&&(n=Mi,n!==null))switch(n.tag){case 3:oc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&oc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[fr]=e,e.stateNode=i}return En(e),null;case 13:if(Dt(Ft),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(It&&vi!==null&&e.mode&1&&!(e.flags&128))Uy(),Ga(),e.flags|=98560,s=!1;else if(s=ac(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(fe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(fe(317));s[fr]=e}else Ga(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;En(e),s=!1}else Ji!==null&&(Yp(Ji),Ji=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ft.current&1?on===0&&(on=3):Hg())),e.updateQueue!==null&&(e.flags|=4),En(e),null);case 4:return Xa(),kp(n,e),n===null&&_u(e.stateNode.containerInfo),En(e),null;case 10:return Tg(e.type._context),En(e),null;case 17:return Qn(e.type)&&Uf(),En(e),null;case 19:if(Dt(Ft),s=e.memoizedState,s===null)return En(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)_l(s,!1);else{if(on!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Hf(n),o!==null){for(e.flags|=128,_l(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Rt(Ft,Ft.current&1|2),e.child}n=n.sibling}s.tail!==null&&Xt()>qa&&(e.flags|=128,i=!0,_l(s,!1),e.lanes=4194304)}else{if(!i)if(n=Hf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),_l(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!It)return En(e),null}else 2*Xt()-s.renderingStartTime>qa&&t!==1073741824&&(e.flags|=128,i=!0,_l(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Xt(),e.sibling=null,t=Ft.current,Rt(Ft,i?t&1|2:t&1),e):(En(e),null);case 22:case 23:return Bg(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?di&1073741824&&(En(e),e.subtreeFlags&6&&(e.flags|=8192)):En(e),null;case 24:return null;case 25:return null}throw Error(fe(156,e.tag))}function VT(n,e){switch(yg(e),e.tag){case 1:return Qn(e.type)&&Uf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Xa(),Dt(Zn),Dt(In),Pg(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Rg(e),null;case 13:if(Dt(Ft),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(fe(340));Ga()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Dt(Ft),null;case 4:return Xa(),null;case 10:return Tg(e.type._context),null;case 22:case 23:return Bg(),null;case 24:return null;default:return null}}var cc=!1,Rn=!1,GT=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function xa(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Vt(n,e,i)}else t.current=null}function zp(n,e,t){try{t()}catch(i){Vt(n,e,i)}}var R0=!1;function WT(n,e){if(Mp=bf,n=Sy(),vg(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ep={focusedElem:n,selectionRange:t},bf=!1,Pe=e;Pe!==null;)if(e=Pe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Pe=n;else for(;Pe!==null;){e=Pe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,m=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:Zi(e.type,g),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(fe(163))}}catch(y){Vt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}return _=R0,R0=!1,_}function ql(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&zp(e,t,s)}r=r.next}while(r!==i)}}function Md(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Bp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function _S(n){var e=n.alternate;e!==null&&(n.alternate=null,_S(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[fr],delete e[xu],delete e[Ap],delete e[AT],delete e[CT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function vS(n){return n.tag===5||n.tag===3||n.tag===4}function P0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||vS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Hp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=If));else if(i!==4&&(n=n.child,n!==null))for(Hp(n,e,t),n=n.sibling;n!==null;)Hp(n,e,t),n=n.sibling}function Vp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Vp(n,e,t),n=n.sibling;n!==null;)Vp(n,e,t),n=n.sibling}var _n=null,Qi=!1;function es(n,e,t){for(t=t.child;t!==null;)xS(n,e,t),t=t.sibling}function xS(n,e,t){if(vr&&typeof vr.onCommitFiberUnmount=="function")try{vr.onCommitFiberUnmount(pd,t)}catch{}switch(t.tag){case 5:Rn||xa(t,e);case 6:var i=_n,r=Qi;_n=null,es(n,e,t),_n=i,Qi=r,_n!==null&&(Qi?(n=_n,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):_n.removeChild(t.stateNode));break;case 18:_n!==null&&(Qi?(n=_n,t=t.stateNode,n.nodeType===8?nh(n.parentNode,t):n.nodeType===1&&nh(n,t),pu(n)):nh(_n,t.stateNode));break;case 4:i=_n,r=Qi,_n=t.stateNode.containerInfo,Qi=!0,es(n,e,t),_n=i,Qi=r;break;case 0:case 11:case 14:case 15:if(!Rn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zp(t,e,o),r=r.next}while(r!==i)}es(n,e,t);break;case 1:if(!Rn&&(xa(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Vt(t,e,a)}es(n,e,t);break;case 21:es(n,e,t);break;case 22:t.mode&1?(Rn=(i=Rn)||t.memoizedState!==null,es(n,e,t),Rn=i):es(n,e,t);break;default:es(n,e,t)}}function b0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new GT),e.forEach(function(i){var r=JT.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Yi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:_n=a.stateNode,Qi=!1;break e;case 3:_n=a.stateNode.containerInfo,Qi=!0;break e;case 4:_n=a.stateNode.containerInfo,Qi=!0;break e}a=a.return}if(_n===null)throw Error(fe(160));xS(s,o,r),_n=null,Qi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yS(e,n),e=e.sibling}function yS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Yi(e,n),sr(n),i&4){try{ql(3,n,n.return),Md(3,n)}catch(g){Vt(n,n.return,g)}try{ql(5,n,n.return)}catch(g){Vt(n,n.return,g)}}break;case 1:Yi(e,n),sr(n),i&512&&t!==null&&xa(t,t.return);break;case 5:if(Yi(e,n),sr(n),i&512&&t!==null&&xa(t,t.return),n.flags&32){var r=n.stateNode;try{cu(r,"")}catch(g){Vt(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Vx(r,s),dp(a,o);var u=dp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?qx(r,d):c==="dangerouslySetInnerHTML"?Xx(r,d):c==="children"?cu(r,d):sg(r,c,d,u)}switch(a){case"input":ap(r,s);break;case"textarea":Gx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?wa(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?wa(r,!!s.multiple,s.defaultValue,!0):wa(r,!!s.multiple,s.multiple?[]:"",!1))}r[xu]=s}catch(g){Vt(n,n.return,g)}}break;case 6:if(Yi(e,n),sr(n),i&4){if(n.stateNode===null)throw Error(fe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){Vt(n,n.return,g)}}break;case 3:if(Yi(e,n),sr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{pu(e.containerInfo)}catch(g){Vt(n,n.return,g)}break;case 4:Yi(e,n),sr(n);break;case 13:Yi(e,n),sr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(kg=Xt())),i&4&&b0(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Rn=(u=Rn)||c,Yi(e,n),Rn=u):Yi(e,n),sr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Pe=n,c=n.child;c!==null;){for(d=Pe=c;Pe!==null;){switch(f=Pe,p=f.child,f.tag){case 0:case 11:case 14:case 15:ql(4,f,f.return);break;case 1:xa(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){Vt(i,t,g)}}break;case 5:xa(f,f.return);break;case 22:if(f.memoizedState!==null){D0(d);continue}}p!==null?(p.return=f,Pe=p):D0(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Yx("display",o))}catch(g){Vt(n,n.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){Vt(n,n.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Yi(e,n),sr(n),i&4&&b0(n);break;case 21:break;default:Yi(e,n),sr(n)}}function sr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(vS(t)){var i=t;break e}t=t.return}throw Error(fe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(cu(r,""),i.flags&=-33);var s=P0(n);Vp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=P0(n);Hp(n,a,o);break;default:throw Error(fe(161))}}catch(l){Vt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function XT(n,e,t){Pe=n,SS(n)}function SS(n,e,t){for(var i=(n.mode&1)!==0;Pe!==null;){var r=Pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||cc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Rn;a=cc;var u=Rn;if(cc=o,(Rn=l)&&!u)for(Pe=r;Pe!==null;)o=Pe,l=o.child,o.tag===22&&o.memoizedState!==null?I0(r):l!==null?(l.return=o,Pe=l):I0(r);for(;s!==null;)Pe=s,SS(s),s=s.sibling;Pe=r,cc=a,Rn=u}L0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Pe=s):L0(n)}}function L0(n){for(;Pe!==null;){var e=Pe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Rn||Md(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Rn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Zi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&m0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}m0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&pu(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(fe(163))}Rn||e.flags&512&&Bp(e)}catch(f){Vt(e,e.return,f)}}if(e===n){Pe=null;break}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}}function D0(n){for(;Pe!==null;){var e=Pe;if(e===n){Pe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Pe=t;break}Pe=e.return}}function I0(n){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Md(4,e)}catch(l){Vt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Vt(e,r,l)}}var s=e.return;try{Bp(e)}catch(l){Vt(e,s,l)}break;case 5:var o=e.return;try{Bp(e)}catch(l){Vt(e,o,l)}}}catch(l){Vt(e,e.return,l)}if(e===n){Pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Pe=a;break}Pe=e.return}}var YT=Math.ceil,Wf=Zr.ReactCurrentDispatcher,Og=Zr.ReactCurrentOwner,Hi=Zr.ReactCurrentBatchConfig,mt=0,pn=null,Qt=null,xn=0,di=0,ya=Hs(0),on=0,wu=null,Ro=0,Ed=0,Fg=0,$l=null,qn=null,kg=0,qa=1/0,br=null,Xf=!1,Gp=null,ws=null,fc=!1,ps=null,Yf=0,jl=0,Wp=null,af=-1,lf=0;function Vn(){return mt&6?Xt():af!==-1?af:af=Xt()}function As(n){return n.mode&1?mt&2&&xn!==0?xn&-xn:PT.transition!==null?(lf===0&&(lf=sy()),lf):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:dy(n.type)),n):1}function ir(n,e,t,i){if(50<jl)throw jl=0,Wp=null,Error(fe(185));zu(n,t,i),(!(mt&2)||n!==pn)&&(n===pn&&(!(mt&2)&&(Ed|=t),on===4&&fs(n,xn)),Jn(n,i),t===1&&mt===0&&!(e.mode&1)&&(qa=Xt()+500,xd&&Vs()))}function Jn(n,e){var t=n.callbackNode;P1(n,e);var i=Pf(n,n===pn?xn:0);if(i===0)t!==null&&V_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&V_(t),e===1)n.tag===0?RT(U0.bind(null,n)):Ly(U0.bind(null,n)),TT(function(){!(mt&6)&&Vs()}),t=null;else{switch(oy(i)){case 1:t=cg;break;case 4:t=iy;break;case 16:t=Rf;break;case 536870912:t=ry;break;default:t=Rf}t=PS(t,MS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function MS(n,e){if(af=-1,lf=0,mt&6)throw Error(fe(327));var t=n.callbackNode;if(ba()&&n.callbackNode!==t)return null;var i=Pf(n,n===pn?xn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=qf(n,i);else{e=i;var r=mt;mt|=2;var s=TS();(pn!==n||xn!==e)&&(br=null,qa=Xt()+500,go(n,e));do try{jT();break}catch(a){ES(n,a)}while(!0);Eg(),Wf.current=s,mt=r,Qt!==null?e=0:(pn=null,xn=0,e=on)}if(e!==0){if(e===2&&(r=_p(n),r!==0&&(i=r,e=Xp(n,r))),e===1)throw t=wu,go(n,0),fs(n,i),Jn(n,Xt()),t;if(e===6)fs(n,i);else{if(r=n.current.alternate,!(i&30)&&!qT(r)&&(e=qf(n,i),e===2&&(s=_p(n),s!==0&&(i=s,e=Xp(n,s))),e===1))throw t=wu,go(n,0),fs(n,i),Jn(n,Xt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(fe(345));case 2:eo(n,qn,br);break;case 3:if(fs(n,i),(i&130023424)===i&&(e=kg+500-Xt(),10<e)){if(Pf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Vn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=wp(eo.bind(null,n,qn,br),e);break}eo(n,qn,br);break;case 4:if(fs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-nr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*YT(i/1960))-i,10<i){n.timeoutHandle=wp(eo.bind(null,n,qn,br),i);break}eo(n,qn,br);break;case 5:eo(n,qn,br);break;default:throw Error(fe(329))}}}return Jn(n,Xt()),n.callbackNode===t?MS.bind(null,n):null}function Xp(n,e){var t=$l;return n.current.memoizedState.isDehydrated&&(go(n,e).flags|=256),n=qf(n,e),n!==2&&(e=qn,qn=t,e!==null&&Yp(e)),n}function Yp(n){qn===null?qn=n:qn.push.apply(qn,n)}function qT(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!rr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fs(n,e){for(e&=~Fg,e&=~Ed,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-nr(e),i=1<<t;n[t]=-1,e&=~i}}function U0(n){if(mt&6)throw Error(fe(327));ba();var e=Pf(n,0);if(!(e&1))return Jn(n,Xt()),null;var t=qf(n,e);if(n.tag!==0&&t===2){var i=_p(n);i!==0&&(e=i,t=Xp(n,i))}if(t===1)throw t=wu,go(n,0),fs(n,e),Jn(n,Xt()),t;if(t===6)throw Error(fe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,eo(n,qn,br),Jn(n,Xt()),null}function zg(n,e){var t=mt;mt|=1;try{return n(e)}finally{mt=t,mt===0&&(qa=Xt()+500,xd&&Vs())}}function Po(n){ps!==null&&ps.tag===0&&!(mt&6)&&ba();var e=mt;mt|=1;var t=Hi.transition,i=Mt;try{if(Hi.transition=null,Mt=1,n)return n()}finally{Mt=i,Hi.transition=t,mt=e,!(mt&6)&&Vs()}}function Bg(){di=ya.current,Dt(ya)}function go(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,ET(t)),Qt!==null)for(t=Qt.return;t!==null;){var i=t;switch(yg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Uf();break;case 3:Xa(),Dt(Zn),Dt(In),Pg();break;case 5:Rg(i);break;case 4:Xa();break;case 13:Dt(Ft);break;case 19:Dt(Ft);break;case 10:Tg(i.type._context);break;case 22:case 23:Bg()}t=t.return}if(pn=n,Qt=n=Cs(n.current,null),xn=di=e,on=0,wu=null,Fg=Ed=Ro=0,qn=$l=null,uo!==null){for(e=0;e<uo.length;e++)if(t=uo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}uo=null}return n}function ES(n,e){do{var t=Qt;try{if(Eg(),rf.current=Gf,Vf){for(var i=Bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vf=!1}if(Co=0,dn=rn=Bt=null,Yl=!1,Mu=0,Og.current=null,t===null||t.return===null){on=1,wu=e,Qt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=xn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=S0(o);if(p!==null){p.flags&=-257,M0(p,o,a,s,e),p.mode&1&&y0(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){y0(s,u,e),Hg();break e}l=Error(fe(426))}}else if(It&&a.mode&1){var m=S0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),M0(m,o,a,s,e),Sg(Ya(l,a));break e}}s=l=Ya(l,a),on!==4&&(on=2),$l===null?$l=[s]:$l.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=oS(s,l,e);p0(s,h);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ws===null||!ws.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=aS(s,a,e);p0(s,y);break e}}s=s.return}while(s!==null)}AS(t)}catch(C){e=C,Qt===t&&t!==null&&(Qt=t=t.return);continue}break}while(!0)}function TS(){var n=Wf.current;return Wf.current=Gf,n===null?Gf:n}function Hg(){(on===0||on===3||on===2)&&(on=4),pn===null||!(Ro&268435455)&&!(Ed&268435455)||fs(pn,xn)}function qf(n,e){var t=mt;mt|=2;var i=TS();(pn!==n||xn!==e)&&(br=null,go(n,e));do try{$T();break}catch(r){ES(n,r)}while(!0);if(Eg(),mt=t,Wf.current=i,Qt!==null)throw Error(fe(261));return pn=null,xn=0,on}function $T(){for(;Qt!==null;)wS(Qt)}function jT(){for(;Qt!==null&&!y1();)wS(Qt)}function wS(n){var e=RS(n.alternate,n,di);n.memoizedProps=n.pendingProps,e===null?AS(n):Qt=e,Og.current=null}function AS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=VT(t,e),t!==null){t.flags&=32767,Qt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{on=6,Qt=null;return}}else if(t=HT(t,e,di),t!==null){Qt=t;return}if(e=e.sibling,e!==null){Qt=e;return}Qt=e=n}while(e!==null);on===0&&(on=5)}function eo(n,e,t){var i=Mt,r=Hi.transition;try{Hi.transition=null,Mt=1,KT(n,e,t,i)}finally{Hi.transition=r,Mt=i}return null}function KT(n,e,t,i){do ba();while(ps!==null);if(mt&6)throw Error(fe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(fe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(b1(n,s),n===pn&&(Qt=pn=null,xn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||fc||(fc=!0,PS(Rf,function(){return ba(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Hi.transition,Hi.transition=null;var o=Mt;Mt=1;var a=mt;mt|=4,Og.current=null,WT(n,t),yS(t,n),gT(Ep),bf=!!Mp,Ep=Mp=null,n.current=t,XT(t),S1(),mt=a,Mt=o,Hi.transition=s}else n.current=t;if(fc&&(fc=!1,ps=n,Yf=r),s=n.pendingLanes,s===0&&(ws=null),T1(t.stateNode),Jn(n,Xt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Xf)throw Xf=!1,n=Gp,Gp=null,n;return Yf&1&&n.tag!==0&&ba(),s=n.pendingLanes,s&1?n===Wp?jl++:(jl=0,Wp=n):jl=0,Vs(),null}function ba(){if(ps!==null){var n=oy(Yf),e=Hi.transition,t=Mt;try{if(Hi.transition=null,Mt=16>n?16:n,ps===null)var i=!1;else{if(n=ps,ps=null,Yf=0,mt&6)throw Error(fe(331));var r=mt;for(mt|=4,Pe=n.current;Pe!==null;){var s=Pe,o=s.child;if(Pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Pe=u;Pe!==null;){var c=Pe;switch(c.tag){case 0:case 11:case 15:ql(8,c,s)}var d=c.child;if(d!==null)d.return=c,Pe=d;else for(;Pe!==null;){c=Pe;var f=c.sibling,p=c.return;if(_S(c),c===u){Pe=null;break}if(f!==null){f.return=p,Pe=f;break}Pe=p}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Pe=o;else e:for(;Pe!==null;){if(s=Pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ql(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Pe=h;break e}Pe=s.return}}var v=n.current;for(Pe=v;Pe!==null;){o=Pe;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Pe=x;else e:for(o=v;Pe!==null;){if(a=Pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Md(9,a)}}catch(C){Vt(a,a.return,C)}if(a===o){Pe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Pe=y;break e}Pe=a.return}}if(mt=r,Vs(),vr&&typeof vr.onPostCommitFiberRoot=="function")try{vr.onPostCommitFiberRoot(pd,n)}catch{}i=!0}return i}finally{Mt=t,Hi.transition=e}}return!1}function N0(n,e,t){e=Ya(t,e),e=oS(n,e,1),n=Ts(n,e,1),e=Vn(),n!==null&&(zu(n,1,e),Jn(n,e))}function Vt(n,e,t){if(n.tag===3)N0(n,n,t);else for(;e!==null;){if(e.tag===3){N0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ws===null||!ws.has(i))){n=Ya(t,n),n=aS(e,n,1),e=Ts(e,n,1),n=Vn(),e!==null&&(zu(e,1,n),Jn(e,n));break}}e=e.return}}function ZT(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Vn(),n.pingedLanes|=n.suspendedLanes&t,pn===n&&(xn&t)===t&&(on===4||on===3&&(xn&130023424)===xn&&500>Xt()-kg?go(n,0):Fg|=t),Jn(n,e)}function CS(n,e){e===0&&(n.mode&1?(e=tc,tc<<=1,!(tc&130023424)&&(tc=4194304)):e=1);var t=Vn();n=Xr(n,e),n!==null&&(zu(n,e,t),Jn(n,t))}function QT(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),CS(n,t)}function JT(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(fe(314))}i!==null&&i.delete(e),CS(n,t)}var RS;RS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Zn.current)Kn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Kn=!1,BT(n,e,t);Kn=!!(n.flags&131072)}else Kn=!1,It&&e.flags&1048576&&Dy(e,Ff,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;of(n,e),n=e.pendingProps;var r=Va(e,In.current);Pa(e,t),r=Lg(null,e,i,n,r,t);var s=Dg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qn(i)?(s=!0,Nf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ag(e),r.updater=Sd,e.stateNode=r,r._reactInternals=e,Dp(e,i,n,t),e=Np(null,e,i,!0,s,t)):(e.tag=0,It&&s&&xg(e),kn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(of(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=tw(i),n=Zi(i,n),r){case 0:e=Up(null,e,i,n,t);break e;case 1:e=w0(null,e,i,n,t);break e;case 11:e=E0(null,e,i,n,t);break e;case 14:e=T0(null,e,i,Zi(i.type,n),t);break e}throw Error(fe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),Up(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),w0(n,e,i,r,t);case 3:e:{if(fS(e),n===null)throw Error(fe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ky(n,e),Bf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ya(Error(fe(423)),e),e=A0(n,e,i,t,r);break e}else if(i!==r){r=Ya(Error(fe(424)),e),e=A0(n,e,i,t,r);break e}else for(vi=Es(e.stateNode.containerInfo.firstChild),Mi=e,It=!0,Ji=null,t=Oy(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ga(),i===r){e=Yr(n,e,t);break e}kn(n,e,i,t)}e=e.child}return e;case 5:return zy(e),n===null&&Pp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Tp(i,r)?o=null:s!==null&&Tp(i,s)&&(e.flags|=32),cS(n,e),kn(n,e,o,t),e.child;case 6:return n===null&&Pp(e),null;case 13:return dS(n,e,t);case 4:return Cg(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Wa(e,null,i,t):kn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),E0(n,e,i,r,t);case 7:return kn(n,e,e.pendingProps,t),e.child;case 8:return kn(n,e,e.pendingProps.children,t),e.child;case 12:return kn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Rt(kf,i._currentValue),i._currentValue=o,s!==null)if(rr(s.value,o)){if(s.children===r.children&&!Zn.current){e=Yr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Hr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),bp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(fe(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),bp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Pa(e,t),r=Gi(r),i=i(r),e.flags|=1,kn(n,e,i,t),e.child;case 14:return i=e.type,r=Zi(i,e.pendingProps),r=Zi(i.type,r),T0(n,e,i,r,t);case 15:return lS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),of(n,e),e.tag=1,Qn(i)?(n=!0,Nf(e)):n=!1,Pa(e,t),sS(e,i,r),Dp(e,i,r,t),Np(null,e,i,!0,n,t);case 19:return hS(n,e,t);case 22:return uS(n,e,t)}throw Error(fe(156,e.tag))};function PS(n,e){return ny(n,e)}function ew(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fi(n,e,t,i){return new ew(n,e,t,i)}function Vg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function tw(n){if(typeof n=="function")return Vg(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ag)return 11;if(n===lg)return 14}return 2}function Cs(n,e){var t=n.alternate;return t===null?(t=Fi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function uf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Vg(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ca:return _o(t.children,r,s,e);case og:o=8,r|=8;break;case np:return n=Fi(12,t,e,r|2),n.elementType=np,n.lanes=s,n;case ip:return n=Fi(13,t,e,r),n.elementType=ip,n.lanes=s,n;case rp:return n=Fi(19,t,e,r),n.elementType=rp,n.lanes=s,n;case zx:return Td(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Fx:o=10;break e;case kx:o=9;break e;case ag:o=11;break e;case lg:o=14;break e;case ls:o=16,i=null;break e}throw Error(fe(130,n==null?n:typeof n,""))}return e=Fi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function _o(n,e,t,i){return n=Fi(7,n,i,e),n.lanes=t,n}function Td(n,e,t,i){return n=Fi(22,n,i,e),n.elementType=zx,n.lanes=t,n.stateNode={isHidden:!1},n}function ch(n,e,t){return n=Fi(6,n,null,e),n.lanes=t,n}function fh(n,e,t){return e=Fi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function nw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xd(0),this.expirationTimes=Xd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Gg(n,e,t,i,r,s,o,a,l){return n=new nw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ag(s),n}function iw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ua,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function bS(n){if(!n)return Us;n=n._reactInternals;e:{if(Oo(n)!==n||n.tag!==1)throw Error(fe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(fe(171))}if(n.tag===1){var t=n.type;if(Qn(t))return by(n,t,e)}return e}function LS(n,e,t,i,r,s,o,a,l){return n=Gg(t,i,!0,n,r,s,o,a,l),n.context=bS(null),t=n.current,i=Vn(),r=As(t),s=Hr(i,r),s.callback=e??null,Ts(t,s,r),n.current.lanes=r,zu(n,r,i),Jn(n,i),n}function wd(n,e,t,i){var r=e.current,s=Vn(),o=As(r);return t=bS(t),e.context===null?e.context=t:e.pendingContext=t,e=Hr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ts(r,e,o),n!==null&&(ir(n,r,o,s),nf(n,r,o)),o}function $f(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function O0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Wg(n,e){O0(n,e),(n=n.alternate)&&O0(n,e)}function rw(){return null}var DS=typeof reportError=="function"?reportError:function(n){console.error(n)};function Xg(n){this._internalRoot=n}Ad.prototype.render=Xg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(fe(409));wd(n,e,null,null)};Ad.prototype.unmount=Xg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Po(function(){wd(null,n,null,null)}),e[Wr]=null}};function Ad(n){this._internalRoot=n}Ad.prototype.unstable_scheduleHydration=function(n){if(n){var e=uy();n={blockedOn:null,target:n,priority:e};for(var t=0;t<cs.length&&e!==0&&e<cs[t].priority;t++);cs.splice(t,0,n),t===0&&fy(n)}};function Yg(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Cd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function F0(){}function sw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=$f(o);s.call(u)}}var o=LS(e,i,n,0,null,!1,!1,"",F0);return n._reactRootContainer=o,n[Wr]=o.current,_u(n.nodeType===8?n.parentNode:n),Po(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=$f(l);a.call(u)}}var l=Gg(n,0,!1,null,null,!1,!1,"",F0);return n._reactRootContainer=l,n[Wr]=l.current,_u(n.nodeType===8?n.parentNode:n),Po(function(){wd(e,l,t,i)}),l}function Rd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=$f(o);a.call(l)}}wd(e,o,n,r)}else o=sw(t,e,n,r,i);return $f(o)}ay=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ll(e.pendingLanes);t!==0&&(fg(e,t|1),Jn(e,Xt()),!(mt&6)&&(qa=Xt()+500,Vs()))}break;case 13:Po(function(){var i=Xr(n,1);if(i!==null){var r=Vn();ir(i,n,1,r)}}),Wg(n,1)}};dg=function(n){if(n.tag===13){var e=Xr(n,134217728);if(e!==null){var t=Vn();ir(e,n,134217728,t)}Wg(n,134217728)}};ly=function(n){if(n.tag===13){var e=As(n),t=Xr(n,e);if(t!==null){var i=Vn();ir(t,n,e,i)}Wg(n,e)}};uy=function(){return Mt};cy=function(n,e){var t=Mt;try{return Mt=n,e()}finally{Mt=t}};pp=function(n,e,t){switch(e){case"input":if(ap(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=vd(i);if(!r)throw Error(fe(90));Hx(i),ap(i,r)}}}break;case"textarea":Gx(n,t);break;case"select":e=t.value,e!=null&&wa(n,!!t.multiple,e,!1)}};Kx=zg;Zx=Po;var ow={usingClientEntryPoint:!1,Events:[Hu,pa,vd,$x,jx,zg]},vl={findFiberByHostInstance:lo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aw={bundleType:vl.bundleType,version:vl.version,rendererPackageName:vl.rendererPackageName,rendererConfig:vl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ey(n),n===null?null:n.stateNode},findFiberByHostInstance:vl.findFiberByHostInstance||rw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{pd=dc.inject(aw),vr=dc}catch{}}Ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ow;Ci.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yg(e))throw Error(fe(200));return iw(n,e,null,t)};Ci.createRoot=function(n,e){if(!Yg(n))throw Error(fe(299));var t=!1,i="",r=DS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Gg(n,1,!1,null,null,t,!1,i,r),n[Wr]=e.current,_u(n.nodeType===8?n.parentNode:n),new Xg(e)};Ci.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(fe(188)):(n=Object.keys(n).join(","),Error(fe(268,n)));return n=ey(e),n=n===null?null:n.stateNode,n};Ci.flushSync=function(n){return Po(n)};Ci.hydrate=function(n,e,t){if(!Cd(e))throw Error(fe(200));return Rd(null,n,e,!0,t)};Ci.hydrateRoot=function(n,e,t){if(!Yg(n))throw Error(fe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=DS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=LS(e,null,n,1,t??null,r,!1,s,o),n[Wr]=e.current,_u(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ad(e)};Ci.render=function(n,e,t){if(!Cd(e))throw Error(fe(200));return Rd(null,n,e,!1,t)};Ci.unmountComponentAtNode=function(n){if(!Cd(n))throw Error(fe(40));return n._reactRootContainer?(Po(function(){Rd(null,null,n,!1,function(){n._reactRootContainer=null,n[Wr]=null})}),!0):!1};Ci.unstable_batchedUpdates=zg;Ci.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Cd(t))throw Error(fe(200));if(n==null||n._reactInternals===void 0)throw Error(fe(38));return Rd(n,e,t,!1,i)};Ci.version="18.3.1-next-f1338f8080-20240426";function IS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(IS)}catch(n){console.error(n)}}IS(),Ix.exports=Ci;var lw=Ix.exports,US,k0=lw;US=k0.createRoot,k0.hydrateRoot;function uw(){return Ke.jsxs("nav",{children:[Ke.jsx("div",{className:"logo",children:"T A N T R A V E D A"}),Ke.jsxs("div",{className:"nav-links",children:[Ke.jsx("a",{href:"#product",children:"Product"}),Ke.jsx("a",{href:"#experiments",children:"Experiments"}),Ke.jsx("a",{href:"#system",children:"System"}),Ke.jsx("a",{href:"#about",children:"About"})]}),Ke.jsx("a",{href:"#start",className:"cta-button",children:"Get Started"})]})}const qp=new Set;let z0=!1;function cw(){if(z0)return;z0=!0;const n=()=>{const e=window.innerHeight||document.documentElement.clientHeight;for(const t of qp)!t.el||!t.el.isConnected||t.update(e);requestAnimationFrame(n)};requestAnimationFrame(n)}function fw(n,e,t){return Math.max(e,Math.min(t,n))}function dw(n){const e=fw(n,0,1);return e*e*(3-2*e)}function hw(n){if(n.dataset.linesLocked==="true")return;if(n.dataset.linesLocked="true",n.querySelector("br")){n.style.whiteSpace="nowrap";return}const e=n.innerText;if(!e||e.trim()==="")return;const t=e.split(" ");n.innerHTML="";const i=[];t.forEach((a,l)=>{const u=document.createElement("span");u.textContent=a+(l<t.length-1?" ":""),n.appendChild(u),i.push(u)});let r=-1;const s=[];let o=[];i.forEach(a=>{r===-1?(r=a.offsetTop,o.push(a)):a.offsetTop>r+5?(s.push(o),o=[a],r=a.offsetTop):o.push(a)}),s.push(o),n.innerHTML="",s.forEach((a,l)=>{const u=document.createElement("span");u.style.whiteSpace="nowrap",a.forEach(c=>u.appendChild(c)),n.appendChild(u),l<s.length-1&&n.appendChild(document.createElement("br"))})}function pr(n={}){const e=jt.useRef(null);return jt.useEffect(()=>{const t=e.current;if(!t)return;let i=null;if(["H1","H2","H3"].includes(t.tagName)){hw(t),cw();const r=n.letterSpacingEnd!==void 0?n.letterSpacingEnd:.15,s=n.letterSpacingStart!==void 0?n.letterSpacingStart:-.02,o=a=>{const l=t.getBoundingClientRect(),c=(l.top+l.height/2)/a,d=dw(c),f=s+(r-s)*d;t.style.letterSpacing=`${f.toFixed(4)}em`};i={el:t,update:o},qp.add(i),o(window.innerHeight||document.documentElement.clientHeight)}return()=>{i&&qp.delete(i)}},[n.letterSpacingStart,n.letterSpacingEnd]),{ref:t=>{e.current=t}}}function pw(){const n=pr({letterSpacingStart:-.02,letterSpacingEnd:.1}),e=pr({letterSpacingStart:-.03,letterSpacingEnd:.15}),t=pr({letterSpacingStart:-.01,letterSpacingEnd:.08}),i=pr({letterSpacingStart:0,letterSpacingEnd:.08});return Ke.jsx("section",{id:"hero",children:Ke.jsxs("div",{className:"section-content",children:[Ke.jsx("div",{className:"label",...n,children:"T A N T R A V E D A"}),Ke.jsx("h1",{...e,children:"Shape the Flow."}),Ke.jsx("div",{className:"subtext",...t,children:"Explore the Infinite. Learn Without Limits."}),Ke.jsx("a",{href:"#explore",className:"cta-button",...i,children:"EXPLORE SYSTEM"})]})})}function mw(){const n=pr({letterSpacingStart:0,letterSpacingEnd:.12});return Ke.jsx("section",{id:"convergence",children:Ke.jsx("div",{className:"section-content",children:Ke.jsx("h2",{...n,children:"Everything Connects."})})})}function gw(){const n=pr({letterSpacingStart:-.02,letterSpacingEnd:.1});return Ke.jsx("section",{id:"distortion",children:Ke.jsx("div",{className:"section-content",children:Ke.jsx("h2",{...n,children:"Beyond Knowledge."})})})}function _w(){const n=pr({letterSpacingStart:-.03,letterSpacingEnd:.14});return Ke.jsx("section",{id:"crossing",children:Ke.jsx("div",{className:"section-content",children:Ke.jsxs("h2",{...n,children:["ONE SYSTEM.",Ke.jsx("br",{}),"INFINITE MOTION."]})})})}function vw(){const n=pr({letterSpacingStart:0,letterSpacingEnd:.1});return Ke.jsx("section",{id:"flow",children:Ke.jsx("div",{className:"section-content",children:Ke.jsx("h2",{...n,children:"Meet The Future.."})})})}function xw(){const n=pr({letterSpacingStart:-.01,letterSpacingEnd:.12}),e=pr({letterSpacingStart:0,letterSpacingEnd:.08});return Ke.jsx("section",{id:"final",children:Ke.jsxs("div",{className:"section-content",children:[Ke.jsx("h2",{...n,children:"ENTER THE FLOW"}),Ke.jsx("a",{href:"#start",className:"cta-button",...e,children:"Start Exploring"})]})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qg="168",yw=0,B0=1,Sw=2,NS=1,Mw=2,Pr=3,Ns=0,ei=1,Ur=2,Rs=0,La=1,$p=2,H0=3,V0=4,Ew=5,oo=100,Tw=101,ww=102,Aw=103,Cw=104,Rw=200,Pw=201,bw=202,Lw=203,jp=204,Kp=205,Dw=206,Iw=207,Uw=208,Nw=209,Ow=210,Fw=211,kw=212,zw=213,Bw=214,Hw=0,Vw=1,Gw=2,jf=3,Ww=4,Xw=5,Yw=6,qw=7,OS=0,$w=1,jw=2,Ps=0,Kw=1,Zw=2,Qw=3,Jw=4,eA=5,tA=6,nA=7,FS=300,$a=301,ja=302,Zp=303,Qp=304,Pd=306,Jp=1e3,fo=1001,em=1002,ki=1003,iA=1004,hc=1005,er=1006,dh=1007,ho=1008,qr=1009,kS=1010,zS=1011,Au=1012,$g=1013,bo=1014,kr=1015,Gu=1016,jg=1017,Kg=1018,Ka=1020,BS=35902,HS=1021,VS=1022,tr=1023,GS=1024,WS=1025,Da=1026,Za=1027,XS=1028,Zg=1029,YS=1030,Qg=1031,Jg=1033,cf=33776,ff=33777,df=33778,hf=33779,tm=35840,nm=35841,im=35842,rm=35843,sm=36196,om=37492,am=37496,lm=37808,um=37809,cm=37810,fm=37811,dm=37812,hm=37813,pm=37814,mm=37815,gm=37816,_m=37817,vm=37818,xm=37819,ym=37820,Sm=37821,pf=36492,Mm=36494,Em=36495,qS=36283,Tm=36284,wm=36285,Am=36286,rA=3200,sA=3201,oA=0,aA=1,ds="",ar="srgb",Gs="srgb-linear",e_="display-p3",bd="display-p3-linear",Kf="linear",Lt="srgb",Zf="rec709",Qf="p3",Bo=7680,G0=519,lA=512,uA=513,cA=514,$S=515,fA=516,dA=517,hA=518,pA=519,W0=35044,X0="300 es",zr=2e3,Jf=2001;class ul{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hh=Math.PI/180,Cm=180/Math.PI;function Wu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function $n(n,e,t){return Math.max(e,Math.min(t,n))}function mA(n,e){return(n%e+e)%e}function ph(n,e,t){return(1-t)*n+t*e}function xl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class gt{constructor(e=0,t=0){gt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,i,r,s,o,a,l,u){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],_=i[8],g=r[0],m=r[3],h=r[6],v=r[1],x=r[4],y=r[7],C=r[2],w=r[5],M=r[8];return s[0]=o*g+a*v+l*C,s[3]=o*m+a*x+l*w,s[6]=o*h+a*y+l*M,s[1]=u*g+c*v+d*C,s[4]=u*m+c*x+d*w,s[7]=u*h+c*y+d*M,s[2]=f*g+p*v+_*C,s[5]=f*m+p*x+_*w,s[8]=f*h+p*y+_*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,p=u*s-o*l,_=t*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=f*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mh.makeScale(e,t)),this}rotate(e){return this.premultiply(mh.makeRotation(-e)),this}translate(e,t){return this.premultiply(mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mh=new tt;function jS(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Cu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function gA(){const n=Cu("canvas");return n.style.display="block",n}const Y0={};function Kl(n){n in Y0||(Y0[n]=!0,console.warn(n))}function _A(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const q0=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$0=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yl={[Gs]:{transfer:Kf,primaries:Zf,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ar]:{transfer:Lt,primaries:Zf,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[bd]:{transfer:Kf,primaries:Qf,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3($0),fromReference:n=>n.applyMatrix3(q0)},[e_]:{transfer:Lt,primaries:Qf,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3($0),fromReference:n=>n.applyMatrix3(q0).convertLinearToSRGB()}},vA=new Set([Gs,bd]),xt={enabled:!0,_workingColorSpace:Gs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!vA.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=yl[e].toReference,r=yl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return yl[n].primaries},getTransfer:function(n){return n===ds?Kf:yl[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(yl[e].luminanceCoefficients)}};function Ia(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function gh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ho;class xA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ho===void 0&&(Ho=Cu("canvas")),Ho.width=e.width,Ho.height=e.height;const i=Ho.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ho}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ia(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ia(t[i]/255)*255):t[i]=Ia(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yA=0;class KS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yA++}),this.uuid=Wu(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_h(r[o].image)):s.push(_h(r[o]))}else s=_h(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function _h(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SA=0;class Ln extends ul{constructor(e=Ln.DEFAULT_IMAGE,t=Ln.DEFAULT_MAPPING,i=fo,r=fo,s=er,o=ho,a=tr,l=qr,u=Ln.DEFAULT_ANISOTROPY,c=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SA++}),this.uuid=Wu(),this.name="",this.source=new KS(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==FS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jp:e.x=e.x-Math.floor(e.x);break;case fo:e.x=e.x<0?0:1;break;case em:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jp:e.y=e.y-Math.floor(e.y);break;case fo:e.y=e.y<0?0:1;break;case em:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=FS;Ln.DEFAULT_ANISOTROPY=1;class hn{constructor(e=0,t=0,i=0,r=1){hn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],_=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,C=(h+1)/2,w=(c+f)/4,M=(d+g)/4,R=(_+m)/4;return x>y&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=M/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=M/s,r=R/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-g)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MA extends ul{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:er,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new KS(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lo extends MA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ZS extends Ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ki,this.minFilter=ki,this.wrapR=fo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class EA extends Ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ki,this.minFilter=ki,this.wrapR=fo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xu{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==f||u!==p||c!==_){let m=1-a;const h=l*f+u*p+c*_+d*g,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const C=Math.sqrt(x),w=Math.atan2(C,h*v);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const y=a*v;if(l=l*m+f*y,u=u*m+p*y,c=c*m+_*y,d=d*m+g*y,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=C,u*=C,c*=C,d*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*d+l*p-u*f,e[t+1]=l*_+c*f+u*d-a*p,e[t+2]=u*_+c*p+a*f-l*d,e[t+3]=c*_-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"YXZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"ZXY":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"ZYX":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"YZX":this._x=f*c*d+u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d-f*p*_;break;case"XZY":this._x=f*c*d-u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($n(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(j0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(j0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vh.copy(this).projectOnVector(e),this.sub(vh)}reflect(e){return this.sub(vh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vh=new Y,j0=new Xu;class Yu{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qi):qi.fromBufferAttribute(s,o),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pc.copy(i.boundingBox)),pc.applyMatrix4(e.matrixWorld),this.union(pc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sl),mc.subVectors(this.max,Sl),Vo.subVectors(e.a,Sl),Go.subVectors(e.b,Sl),Wo.subVectors(e.c,Sl),ts.subVectors(Go,Vo),ns.subVectors(Wo,Go),Xs.subVectors(Vo,Wo);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Xs.z,Xs.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Xs.z,0,-Xs.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Xs.y,Xs.x,0];return!xh(t,Vo,Go,Wo,mc)||(t=[1,0,0,0,1,0,0,0,1],!xh(t,Vo,Go,Wo,mc))?!1:(gc.crossVectors(ts,ns),t=[gc.x,gc.y,gc.z],xh(t,Vo,Go,Wo,mc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],qi=new Y,pc=new Yu,Vo=new Y,Go=new Y,Wo=new Y,ts=new Y,ns=new Y,Xs=new Y,Sl=new Y,mc=new Y,gc=new Y,Ys=new Y;function xh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ys.fromArray(n,s);const a=r.x*Math.abs(Ys.x)+r.y*Math.abs(Ys.y)+r.z*Math.abs(Ys.z),l=e.dot(Ys),u=t.dot(Ys),c=i.dot(Ys);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const TA=new Yu,Ml=new Y,yh=new Y;class Ld{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):TA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ml.subVectors(e,this.center);const t=Ml.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ml,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ml.copy(e.center).add(yh)),this.expandByPoint(Ml.copy(e.center).sub(yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wr=new Y,Sh=new Y,_c=new Y,is=new Y,Mh=new Y,vc=new Y,Eh=new Y;class QS{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wr.copy(this.origin).addScaledVector(this.direction,t),wr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Sh.copy(e).add(t).multiplyScalar(.5),_c.copy(t).sub(e).normalize(),is.copy(this.origin).sub(Sh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(_c),a=is.dot(this.direction),l=-is.dot(_c),u=is.lengthSq(),c=Math.abs(1-o*o);let d,f,p,_;if(c>0)if(d=o*l-a,f=o*a-l,_=s*c,d>=0)if(f>=-_)if(f<=_){const g=1/c;d*=g,f*=g,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Sh).addScaledVector(_c,f),p}intersectSphere(e,t){wr.subVectors(e.center,this.origin);const i=wr.dot(this.direction),r=wr.dot(wr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wr)!==null}intersectTriangle(e,t,i,r,s){Mh.subVectors(t,e),vc.subVectors(i,e),Eh.crossVectors(Mh,vc);let o=this.direction.dot(Eh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;is.subVectors(this.origin,e);const l=a*this.direction.dot(vc.crossVectors(is,vc));if(l<0)return null;const u=a*this.direction.dot(Mh.cross(is));if(u<0||l+u>o)return null;const c=-a*is.dot(Eh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m)}set(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Xo.setFromMatrixColumn(e,0).length(),s=1/Xo.setFromMatrixColumn(e,1).length(),o=1/Xo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*d,_=a*c,g=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+_*u,t[5]=f-g*u,t[9]=-a*l,t[2]=g-f*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,_=u*c,g=u*d;t[0]=f+g*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,_=u*c,g=u*d;t[0]=f-g*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=g-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*d,_=a*c,g=a*d;t[0]=l*c,t[4]=_*u-p,t[8]=f*u+g,t[1]=l*d,t[5]=g*u+f,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=g-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+g,t[5]=o*c,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*c,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wA,e,AA)}lookAt(e,t,i){const r=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),rs.crossVectors(i,ui),rs.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),rs.crossVectors(i,ui)),rs.normalize(),xc.crossVectors(ui,rs),r[0]=rs.x,r[4]=xc.x,r[8]=ui.x,r[1]=rs.y,r[5]=xc.y,r[9]=ui.y,r[2]=rs.z,r[6]=xc.z,r[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],_=i[2],g=i[6],m=i[10],h=i[14],v=i[3],x=i[7],y=i[11],C=i[15],w=r[0],M=r[4],R=r[8],E=r[12],S=r[1],L=r[5],O=r[9],z=r[13],X=r[2],$=r[6],W=r[10],H=r[14],I=r[3],j=r[7],P=r[11],ne=r[15];return s[0]=o*w+a*S+l*X+u*I,s[4]=o*M+a*L+l*$+u*j,s[8]=o*R+a*O+l*W+u*P,s[12]=o*E+a*z+l*H+u*ne,s[1]=c*w+d*S+f*X+p*I,s[5]=c*M+d*L+f*$+p*j,s[9]=c*R+d*O+f*W+p*P,s[13]=c*E+d*z+f*H+p*ne,s[2]=_*w+g*S+m*X+h*I,s[6]=_*M+g*L+m*$+h*j,s[10]=_*R+g*O+m*W+h*P,s[14]=_*E+g*z+m*H+h*ne,s[3]=v*w+x*S+y*X+C*I,s[7]=v*M+x*L+y*$+C*j,s[11]=v*R+x*O+y*W+C*P,s[15]=v*E+x*z+y*H+C*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],_=e[3],g=e[7],m=e[11],h=e[15];return _*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*p-i*l*p)+g*(+t*l*p-t*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],_=e[12],g=e[13],m=e[14],h=e[15],v=d*m*u-g*f*u+g*l*p-a*m*p-d*l*h+a*f*h,x=_*f*u-c*m*u-_*l*p+o*m*p+c*l*h-o*f*h,y=c*g*u-_*d*u+_*a*p-o*g*p-c*a*h+o*d*h,C=_*d*l-c*g*l-_*a*f+o*g*f+c*a*m-o*d*m,w=t*v+i*x+r*y+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=v*M,e[1]=(g*f*s-d*m*s-g*r*p+i*m*p+d*r*h-i*f*h)*M,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*h+i*l*h)*M,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*p-i*l*p)*M,e[4]=x*M,e[5]=(c*m*s-_*f*s+_*r*p-t*m*p-c*r*h+t*f*h)*M,e[6]=(_*l*s-o*m*s-_*r*u+t*m*u+o*r*h-t*l*h)*M,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*p+t*l*p)*M,e[8]=y*M,e[9]=(_*d*s-c*g*s-_*i*p+t*g*p+c*i*h-t*d*h)*M,e[10]=(o*g*s-_*a*s+_*i*u-t*g*u-o*i*h+t*a*h)*M,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*M,e[12]=C*M,e[13]=(c*g*r-_*d*r+_*i*f-t*g*f-c*i*m+t*d*m)*M,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*m-t*a*m)*M,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,p=s*c,_=s*d,g=o*c,m=o*d,h=a*d,v=l*u,x=l*c,y=l*d,C=i.x,w=i.y,M=i.z;return r[0]=(1-(g+h))*C,r[1]=(p+y)*C,r[2]=(_-x)*C,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(f+h))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(_+x)*M,r[9]=(m-v)*M,r[10]=(1-(f+g))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Xo.set(r[0],r[1],r[2]).length();const o=Xo.set(r[4],r[5],r[6]).length(),a=Xo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$i.copy(this);const u=1/s,c=1/o,d=1/a;return $i.elements[0]*=u,$i.elements[1]*=u,$i.elements[2]*=u,$i.elements[4]*=c,$i.elements[5]*=c,$i.elements[6]*=c,$i.elements[8]*=d,$i.elements[9]*=d,$i.elements[10]*=d,t.setFromRotationMatrix($i),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=zr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,_;if(a===zr)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Jf)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=zr){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),f=(t+e)*u,p=(i+r)*c;let _,g;if(a===zr)_=(o+s)*d,g=-2*d;else if(a===Jf)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xo=new Y,$i=new Jt,wA=new Y(0,0,0),AA=new Y(1,1,1),rs=new Y,xc=new Y,ui=new Y,K0=new Jt,Z0=new Xu;class $r{constructor(e=0,t=0,i=0,r=$r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin($n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$n(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($n(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$n(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin($n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return K0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(K0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Z0.setFromEuler(this),this.setFromQuaternion(Z0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$r.DEFAULT_ORDER="XYZ";class JS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let CA=0;const Q0=new Y,Yo=new Xu,Ar=new Jt,yc=new Y,El=new Y,RA=new Y,PA=new Xu,J0=new Y(1,0,0),ev=new Y(0,1,0),tv=new Y(0,0,1),nv={type:"added"},bA={type:"removed"},qo={type:"childadded",child:null},Th={type:"childremoved",child:null};class ti extends ul{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CA++}),this.uuid=Wu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const e=new Y,t=new $r,i=new Xu,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new tt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new JS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yo.setFromAxisAngle(e,t),this.quaternion.multiply(Yo),this}rotateOnWorldAxis(e,t){return Yo.setFromAxisAngle(e,t),this.quaternion.premultiply(Yo),this}rotateX(e){return this.rotateOnAxis(J0,e)}rotateY(e){return this.rotateOnAxis(ev,e)}rotateZ(e){return this.rotateOnAxis(tv,e)}translateOnAxis(e,t){return Q0.copy(e).applyQuaternion(this.quaternion),this.position.add(Q0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(J0,e)}translateY(e){return this.translateOnAxis(ev,e)}translateZ(e){return this.translateOnAxis(tv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ar.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?yc.copy(e):yc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),El.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ar.lookAt(El,yc,this.up):Ar.lookAt(yc,El,this.up),this.quaternion.setFromRotationMatrix(Ar),r&&(Ar.extractRotation(r.matrixWorld),Yo.setFromRotationMatrix(Ar),this.quaternion.premultiply(Yo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nv),qo.child=e,this.dispatchEvent(qo),qo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bA),Th.child=e,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nv),qo.child=e,this.dispatchEvent(qo),qo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,e,RA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,PA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ti.DEFAULT_UP=new Y(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ji=new Y,Cr=new Y,wh=new Y,Rr=new Y,$o=new Y,jo=new Y,iv=new Y,Ah=new Y,Ch=new Y,Rh=new Y;class dr{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ji.subVectors(e,t),r.cross(ji);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ji.subVectors(r,t),Cr.subVectors(i,t),wh.subVectors(e,t);const o=ji.dot(ji),a=ji.dot(Cr),l=ji.dot(wh),u=Cr.dot(Cr),c=Cr.dot(wh),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-a*c)*f,_=(o*c-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Rr)===null?!1:Rr.x>=0&&Rr.y>=0&&Rr.x+Rr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Rr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rr.x),l.addScaledVector(o,Rr.y),l.addScaledVector(a,Rr.z),l)}static isFrontFacing(e,t,i,r){return ji.subVectors(i,t),Cr.subVectors(e,t),ji.cross(Cr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),Cr.subVectors(this.a,this.b),ji.cross(Cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return dr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return dr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;$o.subVectors(r,i),jo.subVectors(s,i),Ah.subVectors(e,i);const l=$o.dot(Ah),u=jo.dot(Ah);if(l<=0&&u<=0)return t.copy(i);Ch.subVectors(e,r);const c=$o.dot(Ch),d=jo.dot(Ch);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector($o,o);Rh.subVectors(e,s);const p=$o.dot(Rh),_=jo.dot(Rh);if(_>=0&&p<=_)return t.copy(s);const g=p*u-l*_;if(g<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(jo,a);const m=c*_-p*d;if(m<=0&&d-c>=0&&p-_>=0)return iv.subVectors(s,r),a=(d-c)/(d-c+(p-_)),t.copy(r).addScaledVector(iv,a);const h=1/(m+g+f);return o=g*h,a=f*h,t.copy(i).addScaledVector($o,o).addScaledVector(jo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const eM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Ph(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ar){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=mA(e,1),t=$n(t,0,1),i=$n(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ph(o,s,e+1/3),this.g=Ph(o,s,e),this.b=Ph(o,s,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,t=ar){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ar){const i=eM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}copyLinearToSRGB(e){return this.r=gh(e.r),this.g=gh(e.g),this.b=gh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ar){return xt.fromWorkingColorSpace(wn.copy(this),e),Math.round($n(wn.r*255,0,255))*65536+Math.round($n(wn.g*255,0,255))*256+Math.round($n(wn.b*255,0,255))}getHexString(e=ar){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,s=wn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ar){xt.fromWorkingColorSpace(wn.copy(this),e);const t=wn.r,i=wn.g,r=wn.b;return e!==ar?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Sc);const i=ph(ss.h,Sc.h,t),r=ph(ss.s,Sc.s,t),s=ph(ss.l,Sc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new pt;pt.NAMES=eM;let LA=0;class qu extends ul{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LA++}),this.uuid=Wu(),this.name="",this.type="Material",this.blending=La,this.side=Ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jp,this.blendDst=Kp,this.blendEquation=oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=jf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=G0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bo,this.stencilZFail=Bo,this.stencilZPass=Bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==La&&(i.blending=this.blending),this.side!==Ns&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jp&&(i.blendSrc=this.blendSrc),this.blendDst!==Kp&&(i.blendDst=this.blendDst),this.blendEquation!==oo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jf&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==G0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tM extends qu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=OS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new Y,Mc=new gt;class yr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=W0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Kl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mc.fromBufferAttribute(this,t),Mc.applyMatrix3(e),this.setXY(t,Mc.x,Mc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),r=Xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),r=Xn(r,this.array),s=Xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==W0&&(e.usage=this.usage),e}}class nM extends yr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class iM extends yr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xi extends yr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let DA=0;const bi=new Jt,bh=new ti,Ko=new Y,ci=new Yu,Tl=new Yu,un=new Y;class Qr extends ul{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DA++}),this.uuid=Wu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jS(e)?iM:nM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,i){return bi.makeTranslation(e,t,i),this.applyMatrix4(bi),this}scale(e,t,i){return bi.makeScale(e,t,i),this.applyMatrix4(bi),this}lookAt(e){return bh.lookAt(e),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ko).negate(),this.translate(Ko.x,Ko.y,Ko.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ci.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ld);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Tl.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(ci.min,Tl.min),ci.expandByPoint(un),un.addVectors(ci.max,Tl.max),ci.expandByPoint(un)):(ci.expandByPoint(Tl.min),ci.expandByPoint(Tl.max))}ci.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)un.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(un));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)un.fromBufferAttribute(a,u),l&&(Ko.fromBufferAttribute(e,u),un.add(Ko)),r=Math.max(r,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new Y,l[R]=new Y;const u=new Y,c=new Y,d=new Y,f=new gt,p=new gt,_=new gt,g=new Y,m=new Y;function h(R,E,S){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,S),c.sub(u),d.sub(u),p.sub(f),_.sub(f);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(g.copy(c).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(L),a[R].add(g),a[E].add(g),a[S].add(g),l[R].add(m),l[E].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,E=v.length;R<E;++R){const S=v[R],L=S.start,O=S.count;for(let z=L,X=L+O;z<X;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new Y,y=new Y,C=new Y,w=new Y;function M(R){C.fromBufferAttribute(r,R),w.copy(C);const E=a[R];x.copy(E),x.sub(C.multiplyScalar(C.dot(E))).normalize(),y.crossVectors(w,E);const L=y.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,L)}for(let R=0,E=v.length;R<E;++R){const S=v[R],L=S.start,O=S.count;for(let z=L,X=L+O;z<X;z+=3)M(e.getX(z+0)),M(e.getX(z+1)),M(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,u=new Y,c=new Y,d=new Y;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let h=0;h<c;h++)f[_++]=u[p++]}return new yr(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rv=new Jt,qs=new QS,Ec=new Ld,sv=new Y,Zo=new Y,Qo=new Y,Jo=new Y,Lh=new Y,Tc=new Y,wc=new gt,Ac=new gt,Cc=new gt,ov=new Y,av=new Y,lv=new Y,Rc=new Y,Pc=new Y;class mr extends ti{constructor(e=new Qr,t=new tM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Tc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Lh.fromBufferAttribute(d,e),o?Tc.addScaledVector(Lh,c):Tc.addScaledVector(Lh.sub(t),c))}t.add(Tc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ec.copy(i.boundingSphere),Ec.applyMatrix4(s),qs.copy(e.ray).recast(e.near),!(Ec.containsPoint(qs.origin)===!1&&(qs.intersectSphere(Ec,sv)===null||qs.origin.distanceToSquared(sv)>(e.far-e.near)**2))&&(rv.copy(s).invert(),qs.copy(e.ray).applyMatrix4(rv),!(i.boundingBox!==null&&qs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){const w=a.getX(y),M=a.getX(y+1),R=a.getX(y+2);r=bc(this,h,e,i,u,c,d,w,M,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=bc(this,o,e,i,u,c,d,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){const w=y,M=y+1,R=y+2;r=bc(this,h,e,i,u,c,d,w,M,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const v=m,x=m+1,y=m+2;r=bc(this,o,e,i,u,c,d,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function IA(n,e,t,i,r,s,o,a){let l;if(e.side===ei?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ns,a),l===null)return null;Pc.copy(a),Pc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Pc);return u<t.near||u>t.far?null:{distance:u,point:Pc.clone(),object:n}}function bc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Zo),n.getVertexPosition(l,Qo),n.getVertexPosition(u,Jo);const c=IA(n,e,t,i,Zo,Qo,Jo,Rc);if(c){r&&(wc.fromBufferAttribute(r,a),Ac.fromBufferAttribute(r,l),Cc.fromBufferAttribute(r,u),c.uv=dr.getInterpolation(Rc,Zo,Qo,Jo,wc,Ac,Cc,new gt)),s&&(wc.fromBufferAttribute(s,a),Ac.fromBufferAttribute(s,l),Cc.fromBufferAttribute(s,u),c.uv1=dr.getInterpolation(Rc,Zo,Qo,Jo,wc,Ac,Cc,new gt)),o&&(ov.fromBufferAttribute(o,a),av.fromBufferAttribute(o,l),lv.fromBufferAttribute(o,u),c.normal=dr.getInterpolation(Rc,Zo,Qo,Jo,ov,av,lv,new Y),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new Y,materialIndex:0};dr.getNormal(Zo,Qo,Jo,d.normal),c.face=d}return c}class $u extends Qr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xi(u,3)),this.setAttribute("normal",new xi(c,3)),this.setAttribute("uv",new xi(d,2));function _(g,m,h,v,x,y,C,w,M,R,E){const S=y/M,L=C/R,O=y/2,z=C/2,X=w/2,$=M+1,W=R+1;let H=0,I=0;const j=new Y;for(let P=0;P<W;P++){const ne=P*L-z;for(let Me=0;Me<$;Me++){const Ye=Me*S-O;j[g]=Ye*v,j[m]=ne*x,j[h]=X,u.push(j.x,j.y,j.z),j[g]=0,j[m]=0,j[h]=w>0?1:-1,c.push(j.x,j.y,j.z),d.push(Me/M),d.push(1-P/R),H+=1}}for(let P=0;P<R;P++)for(let ne=0;ne<M;ne++){const Me=f+ne+$*P,Ye=f+ne+$*(P+1),q=f+(ne+1)+$*(P+1),ie=f+(ne+1)+$*P;l.push(Me,Ye,ie),l.push(Ye,q,ie),I+=6}a.addGroup(p,I,E),p+=I,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $u(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function On(n){const e={};for(let t=0;t<n.length;t++){const i=Qa(n[t]);for(const r in i)e[r]=i[r]}return e}function UA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function rM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const NA={clone:Qa,merge:On};var OA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends qu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OA,this.fragmentShader=FA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qa(e.uniforms),this.uniformsGroups=UA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class sM extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=zr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const os=new Y,uv=new gt,cv=new gt;class Ui extends sM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cm*2*Math.atan(Math.tan(hh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,uv,cv),t.subVectors(cv,uv)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ea=-90,ta=1;class kA extends ti{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ui(ea,ta,e,t);r.layers=this.layers,this.add(r);const s=new Ui(ea,ta,e,t);s.layers=this.layers,this.add(s);const o=new Ui(ea,ta,e,t);o.layers=this.layers,this.add(o);const a=new Ui(ea,ta,e,t);a.layers=this.layers,this.add(a);const l=new Ui(ea,ta,e,t);l.layers=this.layers,this.add(l);const u=new Ui(ea,ta,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===zr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jf)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class oM extends Ln{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:$a,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zA extends Lo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new oM(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:er}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $u(5,5,5),s=new Mr({name:"CubemapFromEquirect",uniforms:Qa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ei,blending:Rs});s.uniforms.tEquirect.value=t;const o=new mr(r,s),a=t.minFilter;return t.minFilter===ho&&(t.minFilter=er),new kA(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Dh=new Y,BA=new Y,HA=new tt;class to{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Dh.subVectors(i,t).cross(BA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Dh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||HA.getNormalMatrix(e),r=this.coplanarPoint(Dh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $s=new Ld,Lc=new Y;class aM{constructor(e=new to,t=new to,i=new to,r=new to,s=new to,o=new to){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],h=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,f-u,m-p,y-h).normalize(),i[1].setComponents(l+s,f+u,m+p,y+h).normalize(),i[2].setComponents(l+o,f+c,m+_,y+v).normalize(),i[3].setComponents(l-o,f-c,m-_,y-v).normalize(),i[4].setComponents(l-a,f-d,m-g,y-x).normalize(),t===zr)i[5].setComponents(l+a,f+d,m+g,y+x).normalize();else if(t===Jf)i[5].setComponents(a,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(e){return $s.center.set(0,0,0),$s.radius=.7071067811865476,$s.applyMatrix4(e.matrixWorld),this.intersectsSphere($s)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Lc.x=r.normal.x>0?e.max.x:e.min.x,Lc.y=r.normal.y>0?e.max.y:e.min.y,Lc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function VA(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l._updateRange,f=l.updateRanges;if(n.bindBuffer(u,a),d.count===-1&&f.length===0&&n.bufferSubData(u,0,c),f.length!==0){for(let p=0,_=f.length;p<_;p++){const g=f[p];n.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(u,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Ja extends Qr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,p=[],_=[],g=[],m=[];for(let h=0;h<c;h++){const v=h*f-o;for(let x=0;x<u;x++){const y=x*d-s;_.push(y,-v,0),g.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const x=v+u*h,y=v+u*(h+1),C=v+1+u*(h+1),w=v+1+u*h;p.push(x,y,w),p.push(y,C,w)}this.setIndex(p),this.setAttribute("position",new xi(_,3)),this.setAttribute("normal",new xi(g,3)),this.setAttribute("uv",new xi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.widthSegments,e.heightSegments)}}var GA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WA=`#ifdef USE_ALPHAHASH
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
#endif`,XA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$A=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jA=`#ifdef USE_AOMAP
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
#endif`,KA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZA=`#ifdef USE_BATCHING
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
#endif`,QA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nC=`#ifdef USE_IRIDESCENCE
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
#endif`,iC=`#ifdef USE_BUMPMAP
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
#endif`,rC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fC=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dC=`#define PI 3.141592653589793
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
} // validated`,hC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pC=`vec3 transformedNormal = objectNormal;
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
#endif`,mC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_C=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xC="gl_FragColor = linearToOutputTexel( gl_FragColor );",yC=`
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
}`,SC=`#ifdef USE_ENVMAP
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
#endif`,MC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,EC=`#ifdef USE_ENVMAP
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
#endif`,TC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wC=`#ifdef USE_ENVMAP
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
#endif`,AC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bC=`#ifdef USE_GRADIENTMAP
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
}`,LC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UC=`uniform bool receiveShadow;
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
#endif`,NC=`#ifdef USE_ENVMAP
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
#endif`,OC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BC=`PhysicalMaterial material;
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
#endif`,HC=`struct PhysicalMaterial {
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
}`,VC=`
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
#endif`,GC=`#if defined( RE_IndirectDiffuse )
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
#endif`,WC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$C=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QC=`#if defined( USE_POINTS_UV )
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
#endif`,JC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rR=`#ifdef USE_MORPHTARGETS
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
#endif`,sR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fR=`#ifdef USE_NORMALMAP
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
#endif`,dR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_R=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ER=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,CR=`float getShadowMask() {
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
}`,RR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PR=`#ifdef USE_SKINNING
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
#endif`,bR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LR=`#ifdef USE_SKINNING
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
#endif`,DR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,OR=`#ifdef USE_TRANSMISSION
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
#endif`,FR=`#ifdef USE_TRANSMISSION
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
#endif`,kR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GR=`uniform sampler2D t2D;
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
}`,WR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,YR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$R=`#include <common>
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
}`,jR=`#if DEPTH_PACKING == 3200
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
}`,KR=`#define DISTANCE
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
}`,ZR=`#define DISTANCE
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
}`,QR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eP=`uniform float scale;
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
}`,tP=`uniform vec3 diffuse;
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
}`,nP=`#include <common>
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
}`,iP=`uniform vec3 diffuse;
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
}`,rP=`#define LAMBERT
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
}`,sP=`#define LAMBERT
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
}`,oP=`#define MATCAP
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
}`,aP=`#define MATCAP
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
}`,lP=`#define NORMAL
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
}`,uP=`#define NORMAL
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
}`,cP=`#define PHONG
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
}`,fP=`#define PHONG
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
}`,dP=`#define STANDARD
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
}`,hP=`#define STANDARD
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
}`,pP=`#define TOON
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
}`,mP=`#define TOON
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
}`,gP=`uniform float size;
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
}`,_P=`uniform vec3 diffuse;
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
}`,vP=`#include <common>
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
}`,xP=`uniform vec3 color;
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
}`,yP=`uniform float rotation;
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
}`,SP=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:GA,alphahash_pars_fragment:WA,alphamap_fragment:XA,alphamap_pars_fragment:YA,alphatest_fragment:qA,alphatest_pars_fragment:$A,aomap_fragment:jA,aomap_pars_fragment:KA,batching_pars_vertex:ZA,batching_vertex:QA,begin_vertex:JA,beginnormal_vertex:eC,bsdfs:tC,iridescence_fragment:nC,bumpmap_pars_fragment:iC,clipping_planes_fragment:rC,clipping_planes_pars_fragment:sC,clipping_planes_pars_vertex:oC,clipping_planes_vertex:aC,color_fragment:lC,color_pars_fragment:uC,color_pars_vertex:cC,color_vertex:fC,common:dC,cube_uv_reflection_fragment:hC,defaultnormal_vertex:pC,displacementmap_pars_vertex:mC,displacementmap_vertex:gC,emissivemap_fragment:_C,emissivemap_pars_fragment:vC,colorspace_fragment:xC,colorspace_pars_fragment:yC,envmap_fragment:SC,envmap_common_pars_fragment:MC,envmap_pars_fragment:EC,envmap_pars_vertex:TC,envmap_physical_pars_fragment:NC,envmap_vertex:wC,fog_vertex:AC,fog_pars_vertex:CC,fog_fragment:RC,fog_pars_fragment:PC,gradientmap_pars_fragment:bC,lightmap_pars_fragment:LC,lights_lambert_fragment:DC,lights_lambert_pars_fragment:IC,lights_pars_begin:UC,lights_toon_fragment:OC,lights_toon_pars_fragment:FC,lights_phong_fragment:kC,lights_phong_pars_fragment:zC,lights_physical_fragment:BC,lights_physical_pars_fragment:HC,lights_fragment_begin:VC,lights_fragment_maps:GC,lights_fragment_end:WC,logdepthbuf_fragment:XC,logdepthbuf_pars_fragment:YC,logdepthbuf_pars_vertex:qC,logdepthbuf_vertex:$C,map_fragment:jC,map_pars_fragment:KC,map_particle_fragment:ZC,map_particle_pars_fragment:QC,metalnessmap_fragment:JC,metalnessmap_pars_fragment:eR,morphinstance_vertex:tR,morphcolor_vertex:nR,morphnormal_vertex:iR,morphtarget_pars_vertex:rR,morphtarget_vertex:sR,normal_fragment_begin:oR,normal_fragment_maps:aR,normal_pars_fragment:lR,normal_pars_vertex:uR,normal_vertex:cR,normalmap_pars_fragment:fR,clearcoat_normal_fragment_begin:dR,clearcoat_normal_fragment_maps:hR,clearcoat_pars_fragment:pR,iridescence_pars_fragment:mR,opaque_fragment:gR,packing:_R,premultiplied_alpha_fragment:vR,project_vertex:xR,dithering_fragment:yR,dithering_pars_fragment:SR,roughnessmap_fragment:MR,roughnessmap_pars_fragment:ER,shadowmap_pars_fragment:TR,shadowmap_pars_vertex:wR,shadowmap_vertex:AR,shadowmask_pars_fragment:CR,skinbase_vertex:RR,skinning_pars_vertex:PR,skinning_vertex:bR,skinnormal_vertex:LR,specularmap_fragment:DR,specularmap_pars_fragment:IR,tonemapping_fragment:UR,tonemapping_pars_fragment:NR,transmission_fragment:OR,transmission_pars_fragment:FR,uv_pars_fragment:kR,uv_pars_vertex:zR,uv_vertex:BR,worldpos_vertex:HR,background_vert:VR,background_frag:GR,backgroundCube_vert:WR,backgroundCube_frag:XR,cube_vert:YR,cube_frag:qR,depth_vert:$R,depth_frag:jR,distanceRGBA_vert:KR,distanceRGBA_frag:ZR,equirect_vert:QR,equirect_frag:JR,linedashed_vert:eP,linedashed_frag:tP,meshbasic_vert:nP,meshbasic_frag:iP,meshlambert_vert:rP,meshlambert_frag:sP,meshmatcap_vert:oP,meshmatcap_frag:aP,meshnormal_vert:lP,meshnormal_frag:uP,meshphong_vert:cP,meshphong_frag:fP,meshphysical_vert:dP,meshphysical_frag:hP,meshtoon_vert:pP,meshtoon_frag:mP,points_vert:gP,points_frag:_P,shadow_vert:vP,shadow_frag:xP,sprite_vert:yP,sprite_frag:SP},Se={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},cr={basic:{uniforms:On([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:On([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new pt(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:On([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:On([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:On([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new pt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:On([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:On([Se.points,Se.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:On([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:On([Se.common,Se.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:On([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:On([Se.sprite,Se.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:On([Se.common,Se.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:On([Se.lights,Se.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};cr.physical={uniforms:On([cr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Dc={r:0,b:0,g:0},js=new $r,MP=new Jt;function EP(n,e,t,i,r,s,o){const a=new pt(0);let l=s===!0?0:1,u,c,d=null,f=0,p=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function g(v){let x=!1;const y=_(v);y===null?h(a,l):y&&y.isColor&&(h(y,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){const y=_(x);y&&(y.isCubeTexture||y.mapping===Pd)?(c===void 0&&(c=new mr(new $u(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:Qa(cr.backgroundCube.uniforms),vertexShader:cr.backgroundCube.vertexShader,fragmentShader:cr.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),js.copy(x.backgroundRotation),js.x*=-1,js.y*=-1,js.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(MP.makeRotationFromEuler(js)),c.material.toneMapped=xt.getTransfer(y.colorSpace)!==Lt,(d!==y||f!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new mr(new Ja(2,2),new Mr({name:"BackgroundMaterial",uniforms:Qa(cr.background.uniforms),vertexShader:cr.background.vertexShader,fragmentShader:cr.background.fragmentShader,side:Ns,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=xt.getTransfer(y.colorSpace)!==Lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function h(v,x){v.getRGB(Dc,rM(n)),i.buffers.color.setClear(Dc.r,Dc.g,Dc.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:g,addToRenderList:m}}function TP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,L,O,z,X){let $=!1;const W=d(z,O,L);s!==W&&(s=W,u(s.object)),$=p(S,z,O,X),$&&_(S,z,O,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(S,L,O,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function d(S,L,O){const z=O.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let $=X[L.id];$===void 0&&($={},X[L.id]=$);let W=$[z];return W===void 0&&(W=f(l()),$[z]=W),W}function f(S){const L=[],O=[],z=[];for(let X=0;X<t;X++)L[X]=0,O[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,L,O,z){const X=s.attributes,$=L.attributes;let W=0;const H=O.getAttributes();for(const I in H)if(H[I].location>=0){const P=X[I];let ne=$[I];if(ne===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),P===void 0||P.attribute!==ne||ne&&P.data!==ne.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function _(S,L,O,z){const X={},$=L.attributes;let W=0;const H=O.getAttributes();for(const I in H)if(H[I].location>=0){let P=$[I];P===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(P=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(P=S.instanceColor));const ne={};ne.attribute=P,P&&P.data&&(ne.data=P.data),X[I]=ne,W++}s.attributes=X,s.attributesNum=W,s.index=z}function g(){const S=s.newAttributes;for(let L=0,O=S.length;L<O;L++)S[L]=0}function m(S){h(S,0)}function h(S,L){const O=s.newAttributes,z=s.enabledAttributes,X=s.attributeDivisors;O[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),X[S]!==L&&(n.vertexAttribDivisor(S,L),X[S]=L)}function v(){const S=s.newAttributes,L=s.enabledAttributes;for(let O=0,z=L.length;O<z;O++)L[O]!==S[O]&&(n.disableVertexAttribArray(O),L[O]=0)}function x(S,L,O,z,X,$,W){W===!0?n.vertexAttribIPointer(S,L,O,X,$):n.vertexAttribPointer(S,L,O,z,X,$)}function y(S,L,O,z){g();const X=z.attributes,$=O.getAttributes(),W=L.defaultAttributeValues;for(const H in $){const I=$[H];if(I.location>=0){let j=X[H];if(j===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(j=S.instanceColor)),j!==void 0){const P=j.normalized,ne=j.itemSize,Me=e.get(j);if(Me===void 0)continue;const Ye=Me.buffer,q=Me.type,ie=Me.bytesPerElement,pe=q===n.INT||q===n.UNSIGNED_INT||j.gpuType===$g;if(j.isInterleavedBufferAttribute){const ce=j.data,Ee=ce.stride,Ie=j.offset;if(ce.isInstancedInterleavedBuffer){for(let qe=0;qe<I.locationSize;qe++)h(I.location+qe,ce.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let qe=0;qe<I.locationSize;qe++)m(I.location+qe);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let qe=0;qe<I.locationSize;qe++)x(I.location+qe,ne/I.locationSize,q,P,Ee*ie,(Ie+ne/I.locationSize*qe)*ie,pe)}else{if(j.isInstancedBufferAttribute){for(let ce=0;ce<I.locationSize;ce++)h(I.location+ce,j.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ce=0;ce<I.locationSize;ce++)m(I.location+ce);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let ce=0;ce<I.locationSize;ce++)x(I.location+ce,ne/I.locationSize,q,P,ne*ie,ne/I.locationSize*ce*ie,pe)}}else if(W!==void 0){const P=W[H];if(P!==void 0)switch(P.length){case 2:n.vertexAttrib2fv(I.location,P);break;case 3:n.vertexAttrib3fv(I.location,P);break;case 4:n.vertexAttrib4fv(I.location,P);break;default:n.vertexAttrib1fv(I.location,P)}}}}v()}function C(){R();for(const S in i){const L=i[S];for(const O in L){const z=L[O];for(const X in z)c(z[X].object),delete z[X];delete L[O]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const O in L){const z=L[O];for(const X in z)c(z[X].object),delete z[X];delete L[O]}delete i[S.id]}function M(S){for(const L in i){const O=i[L];if(O[S.id]===void 0)continue;const z=O[S.id];for(const X in z)c(z[X].object),delete z[X];delete O[S.id]}}function R(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:M,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function wP(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,d){d!==0&&(n.drawArraysInstanced(i,u,c,d),t.update(c,i,d))}function a(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let p=0;for(let _=0;_<d;_++)p+=c[_];t.update(p,i,1)}function l(u,c,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],c[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=c[g];for(let g=0;g<f.length;g++)t.update(_,i,f[g])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function AP(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==tr&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const M=w===Gu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==qr&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==kr&&!M)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:y,maxSamples:C}}function CP(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new to,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let y=h.clippingState||null;l.value=y,y=c(_,f,x,p);for(let C=0;C!==x;++C)y[C]=t[C];h.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const h=p+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,y=p;x!==g;++x,y+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function RP(n){let e=new WeakMap;function t(o,a){return a===Zp?o.mapping=$a:a===Qp&&(o.mapping=ja),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zp||a===Qp)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new zA(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class PP extends sM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Sa=4,fv=[.125,.215,.35,.446,.526,.582],ao=20,Ih=new PP,dv=new pt;let Uh=null,Nh=0,Oh=0,Fh=!1;const no=(1+Math.sqrt(5))/2,na=1/no,hv=[new Y(-no,na,0),new Y(no,na,0),new Y(-na,0,no),new Y(na,0,no),new Y(0,no,-na),new Y(0,no,na),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class pv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Uh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uh,Nh,Oh),this._renderer.xr.enabled=Fh,e.scissorTest=!1,Ic(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$a||e.mapping===ja?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:er,minFilter:er,generateMipmaps:!1,type:Gu,format:tr,colorSpace:Gs,depthBuffer:!1},r=mv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bP(s)),this._blurMaterial=LP(s,e,t)}return r}_compileMaterial(e){const t=new mr(this._lodPlanes[0],e);this._renderer.compile(t,Ih)}_sceneToCubeUV(e,t,i,r){const a=new Ui(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(dv),c.toneMapping=Ps,c.autoClear=!1;const p=new tM({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),_=new mr(new $u,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(dv),g=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const x=this._cubeSize;Ic(r,v*x,h>2?x:0,x,x),c.setRenderTarget(r),g&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===$a||e.mapping===ja;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_v()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new mr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ic(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ih)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=hv[(r-s-1)%hv.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new mr(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ao-1),g=s/_,m=isFinite(s)?1+Math.floor(c*g):ao;m>ao&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ao}`);const h=[];let v=0;for(let M=0;M<ao;++M){const R=M/g,E=Math.exp(-R*R/2);h.push(E),M===0?v+=E:M<m&&(v+=2*E)}for(let M=0;M<h.length;M++)h[M]=h[M]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const y=this._sizeLods[r],C=3*y*(r>x-Sa?r-x+Sa:0),w=4*(this._cubeSize-y);Ic(t,C,w,3*y,2*y),l.setRenderTarget(t),l.render(d,Ih)}}function bP(n){const e=[],t=[],i=[];let r=n;const s=n-Sa+1+fv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Sa?l=fv[o-n+Sa-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,_=6,g=3,m=2,h=1,v=new Float32Array(g*_*p),x=new Float32Array(m*_*p),y=new Float32Array(h*_*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,R=w>2?0:-1,E=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];v.set(E,g*_*w),x.set(f,m*_*w);const S=[w,w,w,w,w,w];y.set(S,h*_*w)}const C=new Qr;C.setAttribute("position",new yr(v,g)),C.setAttribute("uv",new yr(x,m)),C.setAttribute("faceIndex",new yr(y,h)),e.push(C),r>Sa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function mv(n,e,t){const i=new Lo(n,e,t);return i.texture.mapping=Pd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ic(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function LP(n,e,t){const i=new Float32Array(ao),r=new Y(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:ao,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:t_(),fragmentShader:`

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
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function gv(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:t_(),fragmentShader:`

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
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function _v(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:t_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function t_(){return`

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
	`}function DP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Zp||l===Qp,c=l===$a||l===ja;if(u||c){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new pv(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new pv(n)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function IP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Kl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function UP(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,h=g.length;m<h;m++)e.remove(g[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,h=g.length;m<h;m++)e.update(g[m],n.ARRAY_BUFFER)}}function u(d){const f=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let x=0,y=v.length;x<y;x+=3){const C=v[x+0],w=v[x+1],M=v[x+2];f.push(C,w,w,M,M,C)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const C=x+0,w=x+1,M=x+2;f.push(C,w,w,M,M,C)}}else return;const m=new(jS(f)?iM:nM)(f,1);m.version=g;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function NP(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function u(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,f*o,_),t.update(p,i,_))}function c(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];t.update(m,i,1)}function d(f,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)u(f[h]/o,p[h],g[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,g,0,_);let h=0;for(let v=0;v<_;v++)h+=p[v];for(let v=0;v<g.length;v++)t.update(h,i,g[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function OP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function FP(n,e,t){const i=new WeakMap,r=new hn;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),g===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const M=new Float32Array(C*w*4*d),R=new ZS(M,C,w,d);R.type=kr,R.needsUpdate=!0;const E=y*4;for(let L=0;L<d;L++){const O=h[L],z=v[L],X=x[L],$=C*w*4*L;for(let W=0;W<O.count;W++){const H=W*E;_===!0&&(r.fromBufferAttribute(O,W),M[$+H+0]=r.x,M[$+H+1]=r.y,M[$+H+2]=r.z,M[$+H+3]=0),g===!0&&(r.fromBufferAttribute(z,W),M[$+H+4]=r.x,M[$+H+5]=r.y,M[$+H+6]=r.z,M[$+H+7]=0),m===!0&&(r.fromBufferAttribute(X,W),M[$+H+8]=r.x,M[$+H+9]=r.y,M[$+H+10]=r.z,M[$+H+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new gt(C,w)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function kP(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class uM extends Ln{constructor(e,t,i,r,s,o,a,l,u,c=Da){if(c!==Da&&c!==Za)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Da&&(i=bo),i===void 0&&c===Za&&(i=Ka),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ki,this.minFilter=l!==void 0?l:ki,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const cM=new Ln,vv=new uM(1,1),fM=new ZS,dM=new EA,hM=new oM,xv=[],yv=[],Sv=new Float32Array(16),Mv=new Float32Array(9),Ev=new Float32Array(4);function cl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=xv[r];if(s===void 0&&(s=new Float32Array(r),xv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ln(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Dd(n,e){let t=yv[e];t===void 0&&(t=new Int32Array(e),yv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function BP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),ln(t,e)}}function HP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),ln(t,e)}}function VP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),ln(t,e)}}function GP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;Ev.set(i),n.uniformMatrix2fv(this.addr,!1,Ev),ln(t,i)}}function WP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;Mv.set(i),n.uniformMatrix3fv(this.addr,!1,Mv),ln(t,i)}}function XP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;Sv.set(i),n.uniformMatrix4fv(this.addr,!1,Sv),ln(t,i)}}function YP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),ln(t,e)}}function $P(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),ln(t,e)}}function jP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),ln(t,e)}}function KP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ZP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),ln(t,e)}}function QP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),ln(t,e)}}function JP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),ln(t,e)}}function eb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(vv.compareFunction=$S,s=vv):s=cM,t.setTexture2D(e||s,r)}function tb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||dM,r)}function nb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||hM,r)}function ib(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||fM,r)}function rb(n){switch(n){case 5126:return zP;case 35664:return BP;case 35665:return HP;case 35666:return VP;case 35674:return GP;case 35675:return WP;case 35676:return XP;case 5124:case 35670:return YP;case 35667:case 35671:return qP;case 35668:case 35672:return $P;case 35669:case 35673:return jP;case 5125:return KP;case 36294:return ZP;case 36295:return QP;case 36296:return JP;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return nb;case 36289:case 36303:case 36311:case 36292:return ib}}function sb(n,e){n.uniform1fv(this.addr,e)}function ob(n,e){const t=cl(e,this.size,2);n.uniform2fv(this.addr,t)}function ab(n,e){const t=cl(e,this.size,3);n.uniform3fv(this.addr,t)}function lb(n,e){const t=cl(e,this.size,4);n.uniform4fv(this.addr,t)}function ub(n,e){const t=cl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cb(n,e){const t=cl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fb(n,e){const t=cl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function db(n,e){n.uniform1iv(this.addr,e)}function hb(n,e){n.uniform2iv(this.addr,e)}function pb(n,e){n.uniform3iv(this.addr,e)}function mb(n,e){n.uniform4iv(this.addr,e)}function gb(n,e){n.uniform1uiv(this.addr,e)}function _b(n,e){n.uniform2uiv(this.addr,e)}function vb(n,e){n.uniform3uiv(this.addr,e)}function xb(n,e){n.uniform4uiv(this.addr,e)}function yb(n,e,t){const i=this.cache,r=e.length,s=Dd(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||cM,s[o])}function Sb(n,e,t){const i=this.cache,r=e.length,s=Dd(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||dM,s[o])}function Mb(n,e,t){const i=this.cache,r=e.length,s=Dd(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||hM,s[o])}function Eb(n,e,t){const i=this.cache,r=e.length,s=Dd(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||fM,s[o])}function Tb(n){switch(n){case 5126:return sb;case 35664:return ob;case 35665:return ab;case 35666:return lb;case 35674:return ub;case 35675:return cb;case 35676:return fb;case 5124:case 35670:return db;case 35667:case 35671:return hb;case 35668:case 35672:return pb;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return _b;case 36295:return vb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return Sb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return Eb}}class wb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=rb(t.type)}}class Ab{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tb(t.type)}}class Cb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const kh=/(\w+)(\])?(\[|\.)?/g;function Tv(n,e){n.seq.push(e),n.map[e.id]=e}function Rb(n,e,t){const i=n.name,r=i.length;for(kh.lastIndex=0;;){const s=kh.exec(i),o=kh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Tv(t,u===void 0?new wb(a,n,e):new Ab(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Cb(a),Tv(t,d)),t=d}}}class mf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Rb(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function wv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Pb=37297;let bb=0;function Lb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Db(n){const e=xt.getPrimaries(xt.workingColorSpace),t=xt.getPrimaries(n);let i;switch(e===t?i="":e===Qf&&t===Zf?i="LinearDisplayP3ToLinearSRGB":e===Zf&&t===Qf&&(i="LinearSRGBToLinearDisplayP3"),n){case Gs:case bd:return[i,"LinearTransferOETF"];case ar:case e_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Av(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Lb(n.getShaderSource(e),o)}else return r}function Ib(n,e){const t=Db(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ub(n,e){let t;switch(e){case Kw:t="Linear";break;case Zw:t="Reinhard";break;case Qw:t="Cineon";break;case Jw:t="ACESFilmic";break;case tA:t="AgX";break;case nA:t="Neutral";break;case eA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Uc=new Y;function Nb(){xt.getLuminanceCoefficients(Uc);const n=Uc.x.toFixed(4),e=Uc.y.toFixed(4),t=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ob(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Il).join(`
`)}function Fb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Il(n){return n!==""}function Cv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rm(n){return n.replace(zb,Hb)}const Bb=new Map;function Hb(n,e){let t=et[e];if(t===void 0){const i=Bb.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rm(t)}const Vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pv(n){return n.replace(Vb,Gb)}function Gb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bv(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Wb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===NS?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Mw?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pr&&(e="SHADOWMAP_TYPE_VSM"),e}function Xb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $a:case ja:e="ENVMAP_TYPE_CUBE";break;case Pd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ja:e="ENVMAP_MODE_REFRACTION";break}return e}function qb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case OS:e="ENVMAP_BLENDING_MULTIPLY";break;case $w:e="ENVMAP_BLENDING_MIX";break;case jw:e="ENVMAP_BLENDING_ADD";break}return e}function $b(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function jb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Wb(t),u=Xb(t),c=Yb(t),d=qb(t),f=$b(t),p=Ob(t),_=Fb(s),g=r.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Il).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Il).join(`
`),h.length>0&&(h+=`
`)):(m=[bv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Il).join(`
`),h=[bv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ps?"#define TONE_MAPPING":"",t.toneMapping!==Ps?et.tonemapping_pars_fragment:"",t.toneMapping!==Ps?Ub("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Ib("linearToOutputTexel",t.outputColorSpace),Nb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Il).join(`
`)),o=Rm(o),o=Cv(o,t),o=Rv(o,t),a=Rm(a),a=Cv(a,t),a=Rv(a,t),o=Pv(o),a=Pv(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===X0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===X0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+m+o,y=v+h+a,C=wv(r,r.VERTEX_SHADER,x),w=wv(r,r.FRAGMENT_SHADER,y);r.attachShader(g,C),r.attachShader(g,w),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function M(L){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(g).trim(),z=r.getShaderInfoLog(C).trim(),X=r.getShaderInfoLog(w).trim();let $=!0,W=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,C,w);else{const H=Av(r,C,"vertex"),I=Av(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+H+`
`+I)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||X==="")&&(W=!1);W&&(L.diagnostics={runnable:$,programLog:O,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:h}})}r.deleteShader(C),r.deleteShader(w),R=new mf(r,g),E=kb(r,g)}let R;this.getUniforms=function(){return R===void 0&&M(this),R};let E;this.getAttributes=function(){return E===void 0&&M(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(g,Pb)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bb++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=w,this}let Kb=0;class Zb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Qb(e),t.set(e,i)),i}}class Qb{constructor(e){this.id=Kb++,this.code=e,this.usedTimes=0}}function Jb(n,e,t,i,r,s,o){const a=new JS,l=new Zb,u=new Set,c=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,S,L,O,z){const X=O.fog,$=z.geometry,W=E.isMeshStandardMaterial?O.environment:null,H=(E.isMeshStandardMaterial?t:e).get(E.envMap||W),I=H&&H.mapping===Pd?H.image.height:null,j=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const P=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ne=P!==void 0?P.length:0;let Me=0;$.morphAttributes.position!==void 0&&(Me=1),$.morphAttributes.normal!==void 0&&(Me=2),$.morphAttributes.color!==void 0&&(Me=3);let Ye,q,ie,pe;if(j){const je=cr[j];Ye=je.vertexShader,q=je.fragmentShader}else Ye=E.vertexShader,q=E.fragmentShader,l.update(E),ie=l.getVertexShaderID(E),pe=l.getFragmentShaderID(E);const ce=n.getRenderTarget(),Ee=z.isInstancedMesh===!0,Ie=z.isBatchedMesh===!0,qe=!!E.map,Je=!!E.matcap,D=!!H,de=!!E.aoMap,ge=!!E.lightMap,Te=!!E.bumpMap,oe=!!E.normalMap,F=!!E.displacementMap,we=!!E.emissiveMap,Ue=!!E.metalnessMap,b=!!E.roughnessMap,T=E.anisotropy>0,V=E.clearcoat>0,J=E.dispersion>0,te=E.iridescence>0,K=E.sheen>0,Ae=E.transmission>0,re=T&&!!E.anisotropyMap,ae=V&&!!E.clearcoatMap,De=V&&!!E.clearcoatNormalMap,se=V&&!!E.clearcoatRoughnessMap,_e=te&&!!E.iridescenceMap,Oe=te&&!!E.iridescenceThicknessMap,ke=K&&!!E.sheenColorMap,ve=K&&!!E.sheenRoughnessMap,He=!!E.specularMap,We=!!E.specularColorMap,Ze=!!E.specularIntensityMap,U=Ae&&!!E.transmissionMap,Z=Ae&&!!E.thicknessMap,Q=!!E.gradientMap,ee=!!E.alphaMap,ue=E.alphaTest>0,me=!!E.alphaHash,Xe=!!E.extensions;let ft=Ps;E.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ft=n.toneMapping);const nt={shaderID:j,shaderType:E.type,shaderName:E.name,vertexShader:Ye,fragmentShader:q,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:pe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&z._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&z.instanceColor!==null,instancingMorph:Ee&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Gs,alphaToCoverage:!!E.alphaToCoverage,map:qe,matcap:Je,envMap:D,envMapMode:D&&H.mapping,envMapCubeUVHeight:I,aoMap:de,lightMap:ge,bumpMap:Te,normalMap:oe,displacementMap:f&&F,emissiveMap:we,normalMapObjectSpace:oe&&E.normalMapType===aA,normalMapTangentSpace:oe&&E.normalMapType===oA,metalnessMap:Ue,roughnessMap:b,anisotropy:T,anisotropyMap:re,clearcoat:V,clearcoatMap:ae,clearcoatNormalMap:De,clearcoatRoughnessMap:se,dispersion:J,iridescence:te,iridescenceMap:_e,iridescenceThicknessMap:Oe,sheen:K,sheenColorMap:ke,sheenRoughnessMap:ve,specularMap:He,specularColorMap:We,specularIntensityMap:Ze,transmission:Ae,transmissionMap:U,thicknessMap:Z,gradientMap:Q,opaque:E.transparent===!1&&E.blending===La&&E.alphaToCoverage===!1,alphaMap:ee,alphaTest:ue,alphaHash:me,combine:E.combine,mapUv:qe&&g(E.map.channel),aoMapUv:de&&g(E.aoMap.channel),lightMapUv:ge&&g(E.lightMap.channel),bumpMapUv:Te&&g(E.bumpMap.channel),normalMapUv:oe&&g(E.normalMap.channel),displacementMapUv:F&&g(E.displacementMap.channel),emissiveMapUv:we&&g(E.emissiveMap.channel),metalnessMapUv:Ue&&g(E.metalnessMap.channel),roughnessMapUv:b&&g(E.roughnessMap.channel),anisotropyMapUv:re&&g(E.anisotropyMap.channel),clearcoatMapUv:ae&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:De&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(E.sheenRoughnessMap.channel),specularMapUv:He&&g(E.specularMap.channel),specularColorMapUv:We&&g(E.specularColorMap.channel),specularIntensityMapUv:Ze&&g(E.specularIntensityMap.channel),transmissionMapUv:U&&g(E.transmissionMap.channel),thicknessMapUv:Z&&g(E.thicknessMap.channel),alphaMapUv:ee&&g(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(oe||T),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(qe||ee),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ft,decodeVideoTexture:qe&&E.map.isVideoTexture===!0&&xt.getTransfer(E.map.colorSpace)===Lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ur,flipSided:E.side===ei,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Xe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&E.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return nt.vertexUv1s=u.has(1),nt.vertexUv2s=u.has(2),nt.vertexUv3s=u.has(3),u.clear(),nt}function h(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)S.push(L),S.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(v(S,E),x(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function x(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),E.push(a.mask)}function y(E){const S=_[E.type];let L;if(S){const O=cr[S];L=NA.clone(O.uniforms)}else L=E.uniforms;return L}function C(E,S){let L;for(let O=0,z=c.length;O<z;O++){const X=c[O];if(X.cacheKey===S){L=X,++L.usedTimes;break}}return L===void 0&&(L=new jb(n,S,E,s),c.push(L)),L}function w(E){if(--E.usedTimes===0){const S=c.indexOf(E);c[S]=c[c.length-1],c.pop(),E.destroy()}}function M(E){l.remove(E)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:C,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:R}}function e2(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function t2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Lv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Dv(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,_,g,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=g,h.group=m),e++,h}function a(d,f,p,_,g,m){const h=o(d,f,p,_,g,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,_,g,m){const h=o(d,f,p,_,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(d,f){t.length>1&&t.sort(d||t2),i.length>1&&i.sort(f||Lv),r.length>1&&r.sort(f||Lv)}function c(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function n2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Dv,n.set(i,[o])):r>=s.length?(o=new Dv,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function i2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new pt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function r2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let s2=0;function o2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function a2(n){const e=new i2,t=r2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Y);const r=new Y,s=new Jt,o=new Jt;function a(u){let c=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,g=0,m=0,h=0,v=0,x=0,y=0,C=0,w=0,M=0;u.sort(o2);for(let E=0,S=u.length;E<S;E++){const L=u[E],O=L.color,z=L.intensity,X=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=O.r*z,d+=O.g*z,f+=O.b*z;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],z);M++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,I=t.get(L);I.shadowIntensity=H.intensity,I.shadowBias=H.bias,I.shadowNormalBias=H.normalBias,I.shadowRadius=H.radius,I.shadowMapSize=H.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=W,p++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(O).multiplyScalar(z),W.distance=X,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[g]=W;const H=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,H.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[g]=H.matrix,L.castShadow){const I=t.get(L);I.shadowIntensity=H.intensity,I.shadowBias=H.bias,I.shadowNormalBias=H.normalBias,I.shadowRadius=H.radius,I.shadowMapSize=H.mapSize,i.spotShadow[g]=I,i.spotShadowMap[g]=$,y++}g++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(O).multiplyScalar(z),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=W,m++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const H=L.shadow,I=t.get(L);I.shadowIntensity=H.intensity,I.shadowBias=H.bias,I.shadowNormalBias=H.normalBias,I.shadowRadius=H.radius,I.shadowMapSize=H.mapSize,I.shadowCameraNear=H.camera.near,I.shadowCameraFar=H.camera.far,i.pointShadow[_]=I,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=L.shadow.matrix,x++}i.point[_]=W,_++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(z),W.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[h]=W,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==h||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==C||R.numLightProbes!==M)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=M,R.directionalLength=p,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=h,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=C,R.numLightProbes=M,i.version=s2++)}function l(u,c){let d=0,f=0,p=0,_=0,g=0;const m=c.matrixWorldInverse;for(let h=0,v=u.length;h<v;h++){const x=u[h];if(x.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=i.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function Iv(n){const e=new a2(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function l2(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Iv(n),e.set(r,[a])):s>=o.length?(a=new Iv(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class u2 extends qu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c2 extends qu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const f2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d2=`uniform sampler2D shadow_pass;
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
}`;function h2(n,e,t){let i=new aM;const r=new gt,s=new gt,o=new hn,a=new u2({depthPacking:sA}),l=new c2,u={},c=t.maxTextureSize,d={[Ns]:ei,[ei]:Ns,[Ur]:Ur},f=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:f2,fragmentShader:d2}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Qr;_.setAttribute("position",new yr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new mr(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=NS;let h=this.type;this.render=function(w,M,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Rs),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=h!==Pr&&this.type===Pr,X=h===Pr&&this.type!==Pr;for(let $=0,W=w.length;$<W;$++){const H=w[$],I=H.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const j=I.getFrameExtents();if(r.multiply(j),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/j.x),r.x=s.x*j.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/j.y),r.y=s.y*j.y,I.mapSize.y=s.y)),I.map===null||z===!0||X===!0){const ne=this.type!==Pr?{minFilter:ki,magFilter:ki}:{};I.map!==null&&I.map.dispose(),I.map=new Lo(r.x,r.y,ne),I.map.texture.name=H.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const P=I.getViewportCount();for(let ne=0;ne<P;ne++){const Me=I.getViewport(ne);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),O.viewport(o),I.updateMatrices(H,ne),i=I.getFrustum(),y(M,R,I.camera,H,this.type)}I.isPointLightShadow!==!0&&this.type===Pr&&v(I,R),I.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(E,S,L)};function v(w,M){const R=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Lo(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(M,null,R,f,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(M,null,R,p,g,null)}function x(w,M,R,E){let S=null;const L=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)S=L;else if(S=R.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const O=S.uuid,z=M.uuid;let X=u[O];X===void 0&&(X={},u[O]=X);let $=X[z];$===void 0&&($=S.clone(),X[z]=$,M.addEventListener("dispose",C)),S=$}if(S.visible=M.visible,S.wireframe=M.wireframe,E===Pr?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:d[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=n.properties.get(S);O.light=R}return S}function y(w,M,R,E,S){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Pr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const z=e.update(w),X=w.material;if(Array.isArray(X)){const $=z.groups;for(let W=0,H=$.length;W<H;W++){const I=$[W],j=X[I.materialIndex];if(j&&j.visible){const P=x(w,j,E,S);w.onBeforeShadow(n,w,M,R,z,P,I),n.renderBufferDirect(R,null,z,P,w,I),w.onAfterShadow(n,w,M,R,z,P,I)}}}else if(X.visible){const $=x(w,X,E,S);w.onBeforeShadow(n,w,M,R,z,$,null),n.renderBufferDirect(R,null,z,$,w,null),w.onAfterShadow(n,w,M,R,z,$,null)}}const O=w.children;for(let z=0,X=O.length;z<X;z++)y(O[z],M,R,E,S)}function C(w){w.target.removeEventListener("dispose",C);for(const R in u){const E=u[R],S=w.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function p2(n){function e(){let U=!1;const Z=new hn;let Q=null;const ee=new hn(0,0,0,0);return{setMask:function(ue){Q!==ue&&!U&&(n.colorMask(ue,ue,ue,ue),Q=ue)},setLocked:function(ue){U=ue},setClear:function(ue,me,Xe,ft,nt){nt===!0&&(ue*=ft,me*=ft,Xe*=ft),Z.set(ue,me,Xe,ft),ee.equals(Z)===!1&&(n.clearColor(ue,me,Xe,ft),ee.copy(Z))},reset:function(){U=!1,Q=null,ee.set(-1,0,0,0)}}}function t(){let U=!1,Z=null,Q=null,ee=null;return{setTest:function(ue){ue?pe(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function(ue){Z!==ue&&!U&&(n.depthMask(ue),Z=ue)},setFunc:function(ue){if(Q!==ue){switch(ue){case Hw:n.depthFunc(n.NEVER);break;case Vw:n.depthFunc(n.ALWAYS);break;case Gw:n.depthFunc(n.LESS);break;case jf:n.depthFunc(n.LEQUAL);break;case Ww:n.depthFunc(n.EQUAL);break;case Xw:n.depthFunc(n.GEQUAL);break;case Yw:n.depthFunc(n.GREATER);break;case qw:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=ue}},setLocked:function(ue){U=ue},setClear:function(ue){ee!==ue&&(n.clearDepth(ue),ee=ue)},reset:function(){U=!1,Z=null,Q=null,ee=null}}}function i(){let U=!1,Z=null,Q=null,ee=null,ue=null,me=null,Xe=null,ft=null,nt=null;return{setTest:function(je){U||(je?pe(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(je){Z!==je&&!U&&(n.stencilMask(je),Z=je)},setFunc:function(je,Ve,Ne){(Q!==je||ee!==Ve||ue!==Ne)&&(n.stencilFunc(je,Ve,Ne),Q=je,ee=Ve,ue=Ne)},setOp:function(je,Ve,Ne){(me!==je||Xe!==Ve||ft!==Ne)&&(n.stencilOp(je,Ve,Ne),me=je,Xe=Ve,ft=Ne)},setLocked:function(je){U=je},setClear:function(je){nt!==je&&(n.clearStencil(je),nt=je)},reset:function(){U=!1,Z=null,Q=null,ee=null,ue=null,me=null,Xe=null,ft=null,nt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,h=null,v=null,x=null,y=null,C=null,w=new pt(0,0,0),M=0,R=!1,E=null,S=null,L=null,O=null,z=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,W=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(H)[1]),$=W>=1):H.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),$=W>=2);let I=null,j={};const P=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),Me=new hn().fromArray(P),Ye=new hn().fromArray(ne);function q(U,Z,Q,ee){const ue=new Uint8Array(4),me=n.createTexture();n.bindTexture(U,me),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<Q;Xe++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Z,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(Z+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return me}const ie={};ie[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),pe(n.DEPTH_TEST),s.setFunc(jf),Te(!1),oe(B0),pe(n.CULL_FACE),de(Rs);function pe(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function ce(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Ee(U,Z){return c[U]!==Z?(n.bindFramebuffer(U,Z),c[U]=Z,U===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=Z),U===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=Z),!0):!1}function Ie(U,Z){let Q=f,ee=!1;if(U){Q=d.get(Z),Q===void 0&&(Q=[],d.set(Z,Q));const ue=U.textures;if(Q.length!==ue.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Xe=ue.length;me<Xe;me++)Q[me]=n.COLOR_ATTACHMENT0+me;Q.length=ue.length,ee=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,ee=!0);ee&&n.drawBuffers(Q)}function qe(U){return p!==U?(n.useProgram(U),p=U,!0):!1}const Je={[oo]:n.FUNC_ADD,[Tw]:n.FUNC_SUBTRACT,[ww]:n.FUNC_REVERSE_SUBTRACT};Je[Aw]=n.MIN,Je[Cw]=n.MAX;const D={[Rw]:n.ZERO,[Pw]:n.ONE,[bw]:n.SRC_COLOR,[jp]:n.SRC_ALPHA,[Ow]:n.SRC_ALPHA_SATURATE,[Uw]:n.DST_COLOR,[Dw]:n.DST_ALPHA,[Lw]:n.ONE_MINUS_SRC_COLOR,[Kp]:n.ONE_MINUS_SRC_ALPHA,[Nw]:n.ONE_MINUS_DST_COLOR,[Iw]:n.ONE_MINUS_DST_ALPHA,[Fw]:n.CONSTANT_COLOR,[kw]:n.ONE_MINUS_CONSTANT_COLOR,[zw]:n.CONSTANT_ALPHA,[Bw]:n.ONE_MINUS_CONSTANT_ALPHA};function de(U,Z,Q,ee,ue,me,Xe,ft,nt,je){if(U===Rs){_===!0&&(ce(n.BLEND),_=!1);return}if(_===!1&&(pe(n.BLEND),_=!0),U!==Ew){if(U!==g||je!==R){if((m!==oo||x!==oo)&&(n.blendEquation(n.FUNC_ADD),m=oo,x=oo),je)switch(U){case La:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $p:n.blendFunc(n.ONE,n.ONE);break;case H0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case V0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case La:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $p:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case H0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case V0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}h=null,v=null,y=null,C=null,w.set(0,0,0),M=0,g=U,R=je}return}ue=ue||Z,me=me||Q,Xe=Xe||ee,(Z!==m||ue!==x)&&(n.blendEquationSeparate(Je[Z],Je[ue]),m=Z,x=ue),(Q!==h||ee!==v||me!==y||Xe!==C)&&(n.blendFuncSeparate(D[Q],D[ee],D[me],D[Xe]),h=Q,v=ee,y=me,C=Xe),(ft.equals(w)===!1||nt!==M)&&(n.blendColor(ft.r,ft.g,ft.b,nt),w.copy(ft),M=nt),g=U,R=!1}function ge(U,Z){U.side===Ur?ce(n.CULL_FACE):pe(n.CULL_FACE);let Q=U.side===ei;Z&&(Q=!Q),Te(Q),U.blending===La&&U.transparent===!1?de(Rs):de(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const ee=U.stencilWrite;o.setTest(ee),ee&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),we(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Te(U){E!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),E=U)}function oe(U){U!==yw?(pe(n.CULL_FACE),U!==S&&(U===B0?n.cullFace(n.BACK):U===Sw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),S=U}function F(U){U!==L&&($&&n.lineWidth(U),L=U)}function we(U,Z,Q){U?(pe(n.POLYGON_OFFSET_FILL),(O!==Z||z!==Q)&&(n.polygonOffset(Z,Q),O=Z,z=Q)):ce(n.POLYGON_OFFSET_FILL)}function Ue(U){U?pe(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function b(U){U===void 0&&(U=n.TEXTURE0+X-1),I!==U&&(n.activeTexture(U),I=U)}function T(U,Z,Q){Q===void 0&&(I===null?Q=n.TEXTURE0+X-1:Q=I);let ee=j[Q];ee===void 0&&(ee={type:void 0,texture:void 0},j[Q]=ee),(ee.type!==U||ee.texture!==Z)&&(I!==Q&&(n.activeTexture(Q),I=Q),n.bindTexture(U,Z||ie[U]),ee.type=U,ee.texture=Z)}function V(){const U=j[I];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(U){Me.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Me.copy(U))}function ve(U){Ye.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Ye.copy(U))}function He(U,Z){let Q=l.get(Z);Q===void 0&&(Q=new WeakMap,l.set(Z,Q));let ee=Q.get(U);ee===void 0&&(ee=n.getUniformBlockIndex(Z,U.name),Q.set(U,ee))}function We(U,Z){const ee=l.get(Z).get(U);a.get(Z)!==ee&&(n.uniformBlockBinding(Z,ee,U.__bindingPointIndex),a.set(Z,ee))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},I=null,j={},c={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,h=null,v=null,x=null,y=null,C=null,w=new pt(0,0,0),M=0,R=!1,E=null,S=null,L=null,O=null,z=null,Me.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:pe,disable:ce,bindFramebuffer:Ee,drawBuffers:Ie,useProgram:qe,setBlending:de,setMaterial:ge,setFlipSided:Te,setCullFace:oe,setLineWidth:F,setPolygonOffset:we,setScissorTest:Ue,activeTexture:b,bindTexture:T,unbindTexture:V,compressedTexImage2D:J,compressedTexImage3D:te,texImage2D:_e,texImage3D:Oe,updateUBOMapping:He,uniformBlockBinding:We,texStorage2D:De,texStorage3D:se,texSubImage2D:K,texSubImage3D:Ae,compressedTexSubImage2D:re,compressedTexSubImage3D:ae,scissor:ke,viewport:ve,reset:Ze}}function Uv(n,e,t,i){const r=m2(i);switch(t){case HS:return n*e;case GS:return n*e;case WS:return n*e*2;case XS:return n*e/r.components*r.byteLength;case Zg:return n*e/r.components*r.byteLength;case YS:return n*e*2/r.components*r.byteLength;case Qg:return n*e*2/r.components*r.byteLength;case VS:return n*e*3/r.components*r.byteLength;case tr:return n*e*4/r.components*r.byteLength;case Jg:return n*e*4/r.components*r.byteLength;case cf:case ff:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case df:case hf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nm:case rm:return Math.max(n,16)*Math.max(e,8)/4;case tm:case im:return Math.max(n,8)*Math.max(e,8)/2;case sm:case om:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case am:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case um:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case cm:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case fm:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case dm:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case hm:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case pm:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case mm:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case gm:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _m:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case vm:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case xm:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ym:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Sm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case pf:case Mm:case Em:return Math.ceil(n/4)*Math.ceil(e/4)*16;case qS:case Tm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case wm:case Am:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function m2(n){switch(n){case qr:case kS:return{byteLength:1,components:1};case Au:case zS:case Gu:return{byteLength:2,components:1};case jg:case Kg:return{byteLength:2,components:4};case bo:case $g:case kr:return{byteLength:4,components:1};case BS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function g2(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new gt,c=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,T){return p?new OffscreenCanvas(b,T):Cu("canvas")}function g(b,T,V){let J=1;const te=Ue(b);if((te.width>V||te.height>V)&&(J=V/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const K=Math.floor(J*te.width),Ae=Math.floor(J*te.height);d===void 0&&(d=_(K,Ae));const re=T?_(K,Ae):d;return re.width=K,re.height=Ae,re.getContext("2d").drawImage(b,0,0,K,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+Ae+")."),re}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==ki&&b.minFilter!==er}function h(b){n.generateMipmap(b)}function v(b,T,V,J,te=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let K=T;if(T===n.RED&&(V===n.FLOAT&&(K=n.R32F),V===n.HALF_FLOAT&&(K=n.R16F),V===n.UNSIGNED_BYTE&&(K=n.R8)),T===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.R8UI),V===n.UNSIGNED_SHORT&&(K=n.R16UI),V===n.UNSIGNED_INT&&(K=n.R32UI),V===n.BYTE&&(K=n.R8I),V===n.SHORT&&(K=n.R16I),V===n.INT&&(K=n.R32I)),T===n.RG&&(V===n.FLOAT&&(K=n.RG32F),V===n.HALF_FLOAT&&(K=n.RG16F),V===n.UNSIGNED_BYTE&&(K=n.RG8)),T===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RG8UI),V===n.UNSIGNED_SHORT&&(K=n.RG16UI),V===n.UNSIGNED_INT&&(K=n.RG32UI),V===n.BYTE&&(K=n.RG8I),V===n.SHORT&&(K=n.RG16I),V===n.INT&&(K=n.RG32I)),T===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),T===n.RGBA){const Ae=te?Kf:xt.getTransfer(J);V===n.FLOAT&&(K=n.RGBA32F),V===n.HALF_FLOAT&&(K=n.RGBA16F),V===n.UNSIGNED_BYTE&&(K=Ae===Lt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(b,T){let V;return b?T===null||T===bo||T===Ka?V=n.DEPTH24_STENCIL8:T===kr?V=n.DEPTH32F_STENCIL8:T===Au&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===bo||T===Ka?V=n.DEPTH_COMPONENT24:T===kr?V=n.DEPTH_COMPONENT32F:T===Au&&(V=n.DEPTH_COMPONENT16),V}function y(b,T){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==ki&&b.minFilter!==er?Math.log2(Math.max(T.width,T.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?T.mipmaps.length:1}function C(b){const T=b.target;T.removeEventListener("dispose",C),M(T),T.isVideoTexture&&c.delete(T)}function w(b){const T=b.target;T.removeEventListener("dispose",w),E(T)}function M(b){const T=i.get(b);if(T.__webglInit===void 0)return;const V=b.source,J=f.get(V);if(J){const te=J[T.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(b),Object.keys(J).length===0&&f.delete(V)}i.remove(b)}function R(b){const T=i.get(b);n.deleteTexture(T.__webglTexture);const V=b.source,J=f.get(V);delete J[T.__cacheKey],o.memory.textures--}function E(b){const T=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let te=0;te<T.__webglFramebuffer[J].length;te++)n.deleteFramebuffer(T.__webglFramebuffer[J][te]);else n.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)n.deleteFramebuffer(T.__webglFramebuffer[J]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=b.textures;for(let J=0,te=V.length;J<te;J++){const K=i.get(V[J]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(V[J])}i.remove(b)}let S=0;function L(){S=0}function O(){const b=S;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),S+=1,b}function z(b){const T=[];return T.push(b.wrapS),T.push(b.wrapT),T.push(b.wrapR||0),T.push(b.magFilter),T.push(b.minFilter),T.push(b.anisotropy),T.push(b.internalFormat),T.push(b.format),T.push(b.type),T.push(b.generateMipmaps),T.push(b.premultiplyAlpha),T.push(b.flipY),T.push(b.unpackAlignment),T.push(b.colorSpace),T.join()}function X(b,T){const V=i.get(b);if(b.isVideoTexture&&F(b),b.isRenderTargetTexture===!1&&b.version>0&&V.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(V,b,T);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+T)}function $(b,T){const V=i.get(b);if(b.version>0&&V.__version!==b.version){Ye(V,b,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+T)}function W(b,T){const V=i.get(b);if(b.version>0&&V.__version!==b.version){Ye(V,b,T);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+T)}function H(b,T){const V=i.get(b);if(b.version>0&&V.__version!==b.version){q(V,b,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+T)}const I={[Jp]:n.REPEAT,[fo]:n.CLAMP_TO_EDGE,[em]:n.MIRRORED_REPEAT},j={[ki]:n.NEAREST,[iA]:n.NEAREST_MIPMAP_NEAREST,[hc]:n.NEAREST_MIPMAP_LINEAR,[er]:n.LINEAR,[dh]:n.LINEAR_MIPMAP_NEAREST,[ho]:n.LINEAR_MIPMAP_LINEAR},P={[lA]:n.NEVER,[pA]:n.ALWAYS,[uA]:n.LESS,[$S]:n.LEQUAL,[cA]:n.EQUAL,[hA]:n.GEQUAL,[fA]:n.GREATER,[dA]:n.NOTEQUAL};function ne(b,T){if(T.type===kr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===er||T.magFilter===dh||T.magFilter===hc||T.magFilter===ho||T.minFilter===er||T.minFilter===dh||T.minFilter===hc||T.minFilter===ho)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,I[T.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,I[T.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,I[T.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,j[T.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,j[T.minFilter]),T.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,P[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ki||T.minFilter!==hc&&T.minFilter!==ho||T.type===kr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Me(b,T){let V=!1;b.__webglInit===void 0&&(b.__webglInit=!0,T.addEventListener("dispose",C));const J=T.source;let te=f.get(J);te===void 0&&(te={},f.set(J,te));const K=z(T);if(K!==b.__cacheKey){te[K]===void 0&&(te[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),te[K].usedTimes++;const Ae=te[b.__cacheKey];Ae!==void 0&&(te[b.__cacheKey].usedTimes--,Ae.usedTimes===0&&R(T)),b.__cacheKey=K,b.__webglTexture=te[K].texture}return V}function Ye(b,T,V){let J=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=n.TEXTURE_3D);const te=Me(b,T),K=T.source;t.bindTexture(J,b.__webglTexture,n.TEXTURE0+V);const Ae=i.get(K);if(K.version!==Ae.__version||te===!0){t.activeTexture(n.TEXTURE0+V);const re=xt.getPrimaries(xt.workingColorSpace),ae=T.colorSpace===ds?null:xt.getPrimaries(T.colorSpace),De=T.colorSpace===ds||re===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let se=g(T.image,!1,r.maxTextureSize);se=we(T,se);const _e=s.convert(T.format,T.colorSpace),Oe=s.convert(T.type);let ke=v(T.internalFormat,_e,Oe,T.colorSpace,T.isVideoTexture);ne(J,T);let ve;const He=T.mipmaps,We=T.isVideoTexture!==!0,Ze=Ae.__version===void 0||te===!0,U=K.dataReady,Z=y(T,se);if(T.isDepthTexture)ke=x(T.format===Za,T.type),Ze&&(We?t.texStorage2D(n.TEXTURE_2D,1,ke,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,ke,se.width,se.height,0,_e,Oe,null));else if(T.isDataTexture)if(He.length>0){We&&Ze&&t.texStorage2D(n.TEXTURE_2D,Z,ke,He[0].width,He[0].height);for(let Q=0,ee=He.length;Q<ee;Q++)ve=He[Q],We?U&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ve.width,ve.height,_e,Oe,ve.data):t.texImage2D(n.TEXTURE_2D,Q,ke,ve.width,ve.height,0,_e,Oe,ve.data);T.generateMipmaps=!1}else We?(Ze&&t.texStorage2D(n.TEXTURE_2D,Z,ke,se.width,se.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,_e,Oe,se.data)):t.texImage2D(n.TEXTURE_2D,0,ke,se.width,se.height,0,_e,Oe,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){We&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Z,ke,He[0].width,He[0].height,se.depth);for(let Q=0,ee=He.length;Q<ee;Q++)if(ve=He[Q],T.format!==tr)if(_e!==null)if(We){if(U)if(T.layerUpdates.size>0){const ue=Uv(ve.width,ve.height,T.format,T.type);for(const me of T.layerUpdates){const Xe=ve.data.subarray(me*ue/ve.data.BYTES_PER_ELEMENT,(me+1)*ue/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,me,ve.width,ve.height,1,_e,Xe,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ve.width,ve.height,se.depth,_e,ve.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,ke,ve.width,ve.height,se.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ve.width,ve.height,se.depth,_e,Oe,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,ke,ve.width,ve.height,se.depth,0,_e,Oe,ve.data)}else{We&&Ze&&t.texStorage2D(n.TEXTURE_2D,Z,ke,He[0].width,He[0].height);for(let Q=0,ee=He.length;Q<ee;Q++)ve=He[Q],T.format!==tr?_e!==null?We?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ve.width,ve.height,_e,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,ke,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?U&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ve.width,ve.height,_e,Oe,ve.data):t.texImage2D(n.TEXTURE_2D,Q,ke,ve.width,ve.height,0,_e,Oe,ve.data)}else if(T.isDataArrayTexture)if(We){if(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Z,ke,se.width,se.height,se.depth),U)if(T.layerUpdates.size>0){const Q=Uv(se.width,se.height,T.format,T.type);for(const ee of T.layerUpdates){const ue=se.data.subarray(ee*Q/se.data.BYTES_PER_ELEMENT,(ee+1)*Q/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,_e,Oe,ue)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,_e,Oe,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,se.width,se.height,se.depth,0,_e,Oe,se.data);else if(T.isData3DTexture)We?(Ze&&t.texStorage3D(n.TEXTURE_3D,Z,ke,se.width,se.height,se.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,_e,Oe,se.data)):t.texImage3D(n.TEXTURE_3D,0,ke,se.width,se.height,se.depth,0,_e,Oe,se.data);else if(T.isFramebufferTexture){if(Ze)if(We)t.texStorage2D(n.TEXTURE_2D,Z,ke,se.width,se.height);else{let Q=se.width,ee=se.height;for(let ue=0;ue<Z;ue++)t.texImage2D(n.TEXTURE_2D,ue,ke,Q,ee,0,_e,Oe,null),Q>>=1,ee>>=1}}else if(He.length>0){if(We&&Ze){const Q=Ue(He[0]);t.texStorage2D(n.TEXTURE_2D,Z,ke,Q.width,Q.height)}for(let Q=0,ee=He.length;Q<ee;Q++)ve=He[Q],We?U&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,_e,Oe,ve):t.texImage2D(n.TEXTURE_2D,Q,ke,_e,Oe,ve);T.generateMipmaps=!1}else if(We){if(Ze){const Q=Ue(se);t.texStorage2D(n.TEXTURE_2D,Z,ke,Q.width,Q.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Oe,se)}else t.texImage2D(n.TEXTURE_2D,0,ke,_e,Oe,se);m(T)&&h(J),Ae.__version=K.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function q(b,T,V){if(T.image.length!==6)return;const J=Me(b,T),te=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+V);const K=i.get(te);if(te.version!==K.__version||J===!0){t.activeTexture(n.TEXTURE0+V);const Ae=xt.getPrimaries(xt.workingColorSpace),re=T.colorSpace===ds?null:xt.getPrimaries(T.colorSpace),ae=T.colorSpace===ds||Ae===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const De=T.isCompressedTexture||T.image[0].isCompressedTexture,se=T.image[0]&&T.image[0].isDataTexture,_e=[];for(let ee=0;ee<6;ee++)!De&&!se?_e[ee]=g(T.image[ee],!0,r.maxCubemapSize):_e[ee]=se?T.image[ee].image:T.image[ee],_e[ee]=we(T,_e[ee]);const Oe=_e[0],ke=s.convert(T.format,T.colorSpace),ve=s.convert(T.type),He=v(T.internalFormat,ke,ve,T.colorSpace),We=T.isVideoTexture!==!0,Ze=K.__version===void 0||J===!0,U=te.dataReady;let Z=y(T,Oe);ne(n.TEXTURE_CUBE_MAP,T);let Q;if(De){We&&Ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Z,He,Oe.width,Oe.height);for(let ee=0;ee<6;ee++){Q=_e[ee].mipmaps;for(let ue=0;ue<Q.length;ue++){const me=Q[ue];T.format!==tr?ke!==null?We?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,0,0,me.width,me.height,ke,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,He,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,0,0,me.width,me.height,ke,ve,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,He,me.width,me.height,0,ke,ve,me.data)}}}else{if(Q=T.mipmaps,We&&Ze){Q.length>0&&Z++;const ee=Ue(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Z,He,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){We?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,_e[ee].width,_e[ee].height,ke,ve,_e[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,He,_e[ee].width,_e[ee].height,0,ke,ve,_e[ee].data);for(let ue=0;ue<Q.length;ue++){const Xe=Q[ue].image[ee].image;We?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,0,0,Xe.width,Xe.height,ke,ve,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,He,Xe.width,Xe.height,0,ke,ve,Xe.data)}}else{We?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ke,ve,_e[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,He,ke,ve,_e[ee]);for(let ue=0;ue<Q.length;ue++){const me=Q[ue];We?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,0,0,ke,ve,me.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,He,ke,ve,me.image[ee])}}}m(T)&&h(n.TEXTURE_CUBE_MAP),K.__version=te.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function ie(b,T,V,J,te,K){const Ae=s.convert(V.format,V.colorSpace),re=s.convert(V.type),ae=v(V.internalFormat,Ae,re,V.colorSpace);if(!i.get(T).__hasExternalTextures){const se=Math.max(1,T.width>>K),_e=Math.max(1,T.height>>K);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,K,ae,se,_e,T.depth,0,Ae,re,null):t.texImage2D(te,K,ae,se,_e,0,Ae,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),oe(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,te,i.get(V).__webglTexture,0,Te(T)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,te,i.get(V).__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(b,T,V){if(n.bindRenderbuffer(n.RENDERBUFFER,b),T.depthBuffer){const J=T.depthTexture,te=J&&J.isDepthTexture?J.type:null,K=x(T.stencilBuffer,te),Ae=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=Te(T);oe(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,K,T.width,T.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,K,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,K,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,b)}else{const J=T.textures;for(let te=0;te<J.length;te++){const K=J[te],Ae=s.convert(K.format,K.colorSpace),re=s.convert(K.type),ae=v(K.internalFormat,Ae,re,K.colorSpace),De=Te(T);V&&oe(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,ae,T.width,T.height):oe(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,ae,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ae,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(b,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),X(T.depthTexture,0);const J=i.get(T.depthTexture).__webglTexture,te=Te(T);if(T.depthTexture.format===Da)oe(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(T.depthTexture.format===Za)oe(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ee(b){const T=i.get(b),V=b.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==b.depthTexture){const J=b.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),J){const te=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),T.__depthDisposeCallback=te}T.__boundDepthTexture=J}if(b.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ce(T.__webglFramebuffer,b)}else if(V){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]===void 0)T.__webglDepthbuffer[J]=n.createRenderbuffer(),pe(T.__webglDepthbuffer[J],b,!1);else{const te=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=T.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,K)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),pe(T.__webglDepthbuffer,b,!1);else{const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(b,T,V){const J=i.get(b);T!==void 0&&ie(J.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Ee(b)}function qe(b){const T=b.texture,V=i.get(b),J=i.get(T);b.addEventListener("dispose",w);const te=b.textures,K=b.isWebGLCubeRenderTarget===!0,Ae=te.length>1;if(Ae||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=T.version,o.memory.textures++),K){V.__webglFramebuffer=[];for(let re=0;re<6;re++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[re]=[];for(let ae=0;ae<T.mipmaps.length;ae++)V.__webglFramebuffer[re][ae]=n.createFramebuffer()}else V.__webglFramebuffer[re]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let re=0;re<T.mipmaps.length;re++)V.__webglFramebuffer[re]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let re=0,ae=te.length;re<ae;re++){const De=i.get(te[re]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&oe(b)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let re=0;re<te.length;re++){const ae=te[re];V.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[re]);const De=s.convert(ae.format,ae.colorSpace),se=s.convert(ae.type),_e=v(ae.internalFormat,De,se,ae.colorSpace,b.isXRRenderTarget===!0),Oe=Te(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,_e,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,V.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(V.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ne(n.TEXTURE_CUBE_MAP,T);for(let re=0;re<6;re++)if(T.mipmaps&&T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)ie(V.__webglFramebuffer[re][ae],b,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ae);else ie(V.__webglFramebuffer[re],b,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(T)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let re=0,ae=te.length;re<ae;re++){const De=te[re],se=i.get(De);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),ne(n.TEXTURE_2D,De),ie(V.__webglFramebuffer,b,De,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),m(De)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(re=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,J.__webglTexture),ne(re,T),T.mipmaps&&T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)ie(V.__webglFramebuffer[ae],b,T,n.COLOR_ATTACHMENT0,re,ae);else ie(V.__webglFramebuffer,b,T,n.COLOR_ATTACHMENT0,re,0);m(T)&&h(re),t.unbindTexture()}b.depthBuffer&&Ee(b)}function Je(b){const T=b.textures;for(let V=0,J=T.length;V<J;V++){const te=T[V];if(m(te)){const K=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ae=i.get(te).__webglTexture;t.bindTexture(K,Ae),h(K),t.unbindTexture()}}}const D=[],de=[];function ge(b){if(b.samples>0){if(oe(b)===!1){const T=b.textures,V=b.width,J=b.height;let te=n.COLOR_BUFFER_BIT;const K=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(b),re=T.length>1;if(re)for(let ae=0;ae<T.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ae=0;ae<T.length;ae++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[ae]);const De=i.get(T[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,De,0)}n.blitFramebuffer(0,0,V,J,0,0,V,J,te,n.NEAREST),l===!0&&(D.length=0,de.length=0,D.push(n.COLOR_ATTACHMENT0+ae),b.depthBuffer&&b.resolveDepthBuffer===!1&&(D.push(K),de.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,de)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let ae=0;ae<T.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[ae]);const De=i.get(T[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,De,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const T=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Te(b){return Math.min(r.maxSamples,b.samples)}function oe(b){const T=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function F(b){const T=o.render.frame;c.get(b)!==T&&(c.set(b,T),b.update())}function we(b,T){const V=b.colorSpace,J=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||V!==Gs&&V!==ds&&(xt.getTransfer(V)===Lt?(J!==tr||te!==qr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}function Ue(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=L,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=W,this.setTextureCube=H,this.rebindTextures=Ie,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=oe}function _2(n,e){function t(i,r=ds){let s;const o=xt.getTransfer(r);if(i===qr)return n.UNSIGNED_BYTE;if(i===jg)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kg)return n.UNSIGNED_SHORT_5_5_5_1;if(i===BS)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kS)return n.BYTE;if(i===zS)return n.SHORT;if(i===Au)return n.UNSIGNED_SHORT;if(i===$g)return n.INT;if(i===bo)return n.UNSIGNED_INT;if(i===kr)return n.FLOAT;if(i===Gu)return n.HALF_FLOAT;if(i===HS)return n.ALPHA;if(i===VS)return n.RGB;if(i===tr)return n.RGBA;if(i===GS)return n.LUMINANCE;if(i===WS)return n.LUMINANCE_ALPHA;if(i===Da)return n.DEPTH_COMPONENT;if(i===Za)return n.DEPTH_STENCIL;if(i===XS)return n.RED;if(i===Zg)return n.RED_INTEGER;if(i===YS)return n.RG;if(i===Qg)return n.RG_INTEGER;if(i===Jg)return n.RGBA_INTEGER;if(i===cf||i===ff||i===df||i===hf)if(o===Lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===cf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ff)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===df)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===cf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ff)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===df)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tm||i===nm||i===im||i===rm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===tm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===im)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sm||i===om||i===am)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===sm||i===om)return o===Lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===am)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===lm||i===um||i===cm||i===fm||i===dm||i===hm||i===pm||i===mm||i===gm||i===_m||i===vm||i===xm||i===ym||i===Sm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===lm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===um)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_m)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ym)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pf||i===Mm||i===Em)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===pf)return o===Lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mm)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Em)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qS||i===Tm||i===wm||i===Am)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===pf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Tm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Am)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ka?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class v2 extends Ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Nc extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x2={type:"move"};class zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),h=this._getHandJoint(u,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Nc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const y2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S2=`
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

}`;class M2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ln,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Mr({vertexShader:y2,fragmentShader:S2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mr(new Ja(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E2 extends ul{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,_=null;const g=new M2,m=t.getContextAttributes();let h=null,v=null;const x=[],y=[],C=new gt;let w=null;const M=new Ui;M.layers.enable(1),M.viewport=new hn;const R=new Ui;R.layers.enable(2),R.viewport=new hn;const E=[M,R],S=new v2;S.layers.enable(1),S.layers.enable(2);let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=x[q];return ie===void 0&&(ie=new zh,x[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=x[q];return ie===void 0&&(ie=new zh,x[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=x[q];return ie===void 0&&(ie=new zh,x[q]=ie),ie.getHandSpace()};function z(q){const ie=y.indexOf(q.inputSource);if(ie===-1)return;const pe=x[ie];pe!==void 0&&(pe.update(q.inputSource,q.frame,u||o),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",$);for(let q=0;q<x.length;q++){const ie=y[q];ie!==null&&(y[q]=null,x[q].disconnect(ie))}L=null,O=null,g.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,v=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",X),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Lo(p.framebufferWidth,p.framebufferHeight,{format:tr,type:qr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,pe=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?Za:Da,pe=m.stencil?Ka:bo);const Ee={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Ee),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Lo(f.textureWidth,f.textureHeight,{format:tr,type:qr,depthTexture:new uM(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(q){for(let ie=0;ie<q.removed.length;ie++){const pe=q.removed[ie],ce=y.indexOf(pe);ce>=0&&(y[ce]=null,x[ce].disconnect(pe))}for(let ie=0;ie<q.added.length;ie++){const pe=q.added[ie];let ce=y.indexOf(pe);if(ce===-1){for(let Ie=0;Ie<x.length;Ie++)if(Ie>=y.length){y.push(pe),ce=Ie;break}else if(y[Ie]===null){y[Ie]=pe,ce=Ie;break}if(ce===-1)break}const Ee=x[ce];Ee&&Ee.connect(pe)}}const W=new Y,H=new Y;function I(q,ie,pe){W.setFromMatrixPosition(ie.matrixWorld),H.setFromMatrixPosition(pe.matrixWorld);const ce=W.distanceTo(H),Ee=ie.projectionMatrix.elements,Ie=pe.projectionMatrix.elements,qe=Ee[14]/(Ee[10]-1),Je=Ee[14]/(Ee[10]+1),D=(Ee[9]+1)/Ee[5],de=(Ee[9]-1)/Ee[5],ge=(Ee[8]-1)/Ee[0],Te=(Ie[8]+1)/Ie[0],oe=qe*ge,F=qe*Te,we=ce/(-ge+Te),Ue=we*-ge;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ue),q.translateZ(we),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ee[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const b=qe+we,T=Je+we,V=oe-Ue,J=F+(ce-Ue),te=D*Je/T*b,K=de*Je/T*b;q.projectionMatrix.makePerspective(V,J,te,K,b,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function j(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ie=q.near,pe=q.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(pe=g.depthFar)),S.near=R.near=M.near=ie,S.far=R.far=M.far=pe,(L!==S.near||O!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,O=S.far);const ce=q.parent,Ee=S.cameras;j(S,ce);for(let Ie=0;Ie<Ee.length;Ie++)j(Ee[Ie],ce);Ee.length===2?I(S,M,R):S.projectionMatrix.copy(M.projectionMatrix),P(q,S,ce)};function P(q,ie,pe){pe===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Cm*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let ne=null;function Me(q,ie){if(c=ie.getViewerPose(u||o),_=ie,c!==null){const pe=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ce=!1;pe.length!==S.cameras.length&&(S.cameras.length=0,ce=!0);for(let Ie=0;Ie<pe.length;Ie++){const qe=pe[Ie];let Je=null;if(p!==null)Je=p.getViewport(qe);else{const de=d.getViewSubImage(f,qe);Je=de.viewport,Ie===0&&(e.setRenderTargetTextures(v,de.colorTexture,f.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(v))}let D=E[Ie];D===void 0&&(D=new Ui,D.layers.enable(Ie),D.viewport=new hn,E[Ie]=D),D.matrix.fromArray(qe.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(qe.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Je.x,Je.y,Je.width,Je.height),Ie===0&&(S.matrix.copy(D.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ce===!0&&S.cameras.push(D)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const Ie=d.getDepthInformation(pe[0]);Ie&&Ie.isValid&&Ie.texture&&g.init(e,Ie,r.renderState)}}for(let pe=0;pe<x.length;pe++){const ce=y[pe],Ee=x[pe];ce!==null&&Ee!==void 0&&Ee.update(ce,ie,u||o)}ne&&ne(q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),_=null}const Ye=new lM;Ye.setAnimationLoop(Me),this.setAnimationLoop=function(q){ne=q},this.dispose=function(){}}}const Ks=new $r,T2=new Jt;function w2(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,rM(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,x,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,x):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ei&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ei&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,Ks.copy(y),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),m.envMapRotation.value.setFromMatrix4(T2.makeRotationFromEuler(Ks)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ei&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function A2(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(_(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(v,C);const w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function c(v){const x=d();v.__bindingPointIndex=x;const y=n.createBuffer(),C=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],y=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,M=y.length;w<M;w++){const R=Array.isArray(y[w])?y[w]:[y[w]];for(let E=0,S=R.length;E<S;E++){const L=R[E];if(p(L,w,E,C)===!0){const O=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let $=0;$<z.length;$++){const W=z[$],H=g(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,O+X,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,X),X+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,C){const w=v.value,M=x+"_"+y;if(C[M]===void 0)return typeof w=="number"||typeof w=="boolean"?C[M]=w:C[M]=w.clone(),!0;{const R=C[M];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return C[M]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function _(v){const x=v.uniforms;let y=0;const C=16;for(let M=0,R=x.length;M<R;M++){const E=Array.isArray(x[M])?x[M]:[x[M]];for(let S=0,L=E.length;S<L;S++){const O=E[S],z=Array.isArray(O.value)?O.value:[O.value];for(let X=0,$=z.length;X<$;X++){const W=z[X],H=g(W),I=y%C,j=I%H.boundary,P=I+j;y+=j,P!==0&&C-P<H.storage&&(y+=C-P),O.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=H.storage}}}const w=y%C;return w>0&&(y+=C-w),v.__size=y,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class C2{constructor(e={}){const{canvas:t=gA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ar,this.toneMapping=Ps,this.toneMappingExposure=1;const x=this;let y=!1,C=0,w=0,M=null,R=-1,E=null;const S=new hn,L=new hn;let O=null;const z=new pt(0);let X=0,$=t.width,W=t.height,H=1,I=null,j=null;const P=new hn(0,0,$,W),ne=new hn(0,0,$,W);let Me=!1;const Ye=new aM;let q=!1,ie=!1;const pe=new Jt,ce=new Y,Ee=new hn,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Je(){return M===null?H:1}let D=i;function de(A,N){return t.getContext(A,N)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qg}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",ue,!1),D===null){const N="webgl2";if(D=de(N,A),D===null)throw de(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ge,Te,oe,F,we,Ue,b,T,V,J,te,K,Ae,re,ae,De,se,_e,Oe,ke,ve,He,We,Ze;function U(){ge=new IP(D),ge.init(),He=new _2(D,ge),Te=new AP(D,ge,e,He),oe=new p2(D),F=new OP(D),we=new e2,Ue=new g2(D,ge,oe,we,Te,He,F),b=new RP(x),T=new DP(x),V=new VA(D),We=new TP(D,V),J=new UP(D,V,F,We),te=new kP(D,J,V,F),Oe=new FP(D,Te,Ue),De=new CP(we),K=new Jb(x,b,T,ge,Te,We,De),Ae=new w2(x,we),re=new n2,ae=new l2(ge),_e=new EP(x,b,T,oe,te,f,l),se=new h2(x,te,Te),Ze=new A2(D,F,Te,oe),ke=new wP(D,ge,F),ve=new NP(D,ge,F),F.programs=K.programs,x.capabilities=Te,x.extensions=ge,x.properties=we,x.renderLists=re,x.shadowMap=se,x.state=oe,x.info=F}U();const Z=new E2(x,D);this.xr=Z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=ge.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ge.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize($,W,!1))},this.getSize=function(A){return A.set($,W)},this.setSize=function(A,N,G=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,W=N,t.width=Math.floor(A*H),t.height=Math.floor(N*H),G===!0&&(t.style.width=A+"px",t.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set($*H,W*H).floor()},this.setDrawingBufferSize=function(A,N,G){$=A,W=N,H=G,t.width=Math.floor(A*G),t.height=Math.floor(N*G),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(P)},this.setViewport=function(A,N,G,B){A.isVector4?P.set(A.x,A.y,A.z,A.w):P.set(A,N,G,B),oe.viewport(S.copy(P).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,N,G,B){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,N,G,B),oe.scissor(L.copy(ne).multiplyScalar(H).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(A){oe.setScissorTest(Me=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){j=A},this.getClearColor=function(A){return A.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(A=!0,N=!0,G=!0){let B=0;if(A){let k=!1;if(M!==null){const le=M.texture.format;k=le===Jg||le===Qg||le===Zg}if(k){const le=M.texture.type,ye=le===qr||le===bo||le===Au||le===Ka||le===jg||le===Kg,Re=_e.getClearColor(),xe=_e.getClearAlpha(),Ce=Re.r,Be=Re.g,Fe=Re.b;ye?(p[0]=Ce,p[1]=Be,p[2]=Fe,p[3]=xe,D.clearBufferuiv(D.COLOR,0,p)):(_[0]=Ce,_[1]=Be,_[2]=Fe,_[3]=xe,D.clearBufferiv(D.COLOR,0,_))}else B|=D.COLOR_BUFFER_BIT}N&&(B|=D.DEPTH_BUFFER_BIT),G&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),re.dispose(),ae.dispose(),we.dispose(),b.dispose(),T.dispose(),te.dispose(),We.dispose(),Ze.dispose(),K.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Ne),Z.removeEventListener("sessionend",Qe),he.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=F.autoReset,N=se.enabled,G=se.autoUpdate,B=se.needsUpdate,k=se.type;U(),F.autoReset=A,se.enabled=N,se.autoUpdate=G,se.needsUpdate=B,se.type=k}function ue(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function me(A){const N=A.target;N.removeEventListener("dispose",me),Xe(N)}function Xe(A){ft(A),we.remove(A)}function ft(A){const N=we.get(A).programs;N!==void 0&&(N.forEach(function(G){K.releaseProgram(G)}),A.isShaderMaterial&&K.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,G,B,k,le){N===null&&(N=Ie);const ye=k.isMesh&&k.matrixWorld.determinant()<0,Re=Ct(A,N,G,B,k);oe.setMaterial(B,ye);let xe=G.index,Ce=1;if(B.wireframe===!0){if(xe=J.getWireframeAttribute(G),xe===void 0)return;Ce=2}const Be=G.drawRange,Fe=G.attributes.position;let dt=Be.start*Ce,Et=(Be.start+Be.count)*Ce;le!==null&&(dt=Math.max(dt,le.start*Ce),Et=Math.min(Et,(le.start+le.count)*Ce)),xe!==null?(dt=Math.max(dt,0),Et=Math.min(Et,xe.count)):Fe!=null&&(dt=Math.max(dt,0),Et=Math.min(Et,Fe.count));const ht=Et-dt;if(ht<0||ht===1/0)return;We.setup(k,B,Re,G,xe);let tn,ut=ke;if(xe!==null&&(tn=V.get(xe),ut=ve,ut.setIndex(tn)),k.isMesh)B.wireframe===!0?(oe.setLineWidth(B.wireframeLinewidth*Je()),ut.setMode(D.LINES)):ut.setMode(D.TRIANGLES);else if(k.isLine){let Le=B.linewidth;Le===void 0&&(Le=1),oe.setLineWidth(Le*Je()),k.isLineSegments?ut.setMode(D.LINES):k.isLineLoop?ut.setMode(D.LINE_LOOP):ut.setMode(D.LINE_STRIP)}else k.isPoints?ut.setMode(D.POINTS):k.isSprite&&ut.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ut.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))ut.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Le=k._multiDrawStarts,gn=k._multiDrawCounts,_t=k._multiDrawCount,Xi=xe?V.get(xe).bytesPerElement:1,ko=we.get(B).currentProgram.getUniforms();for(let li=0;li<_t;li++)ko.setValue(D,"_gl_DrawID",li),ut.render(Le[li]/Xi,gn[li])}else if(k.isInstancedMesh)ut.renderInstances(dt,ht,k.count);else if(G.isInstancedBufferGeometry){const Le=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,gn=Math.min(G.instanceCount,Le);ut.renderInstances(dt,ht,gn)}else ut.render(dt,ht)};function nt(A,N,G){A.transparent===!0&&A.side===Ur&&A.forceSinglePass===!1?(A.side=ei,A.needsUpdate=!0,At(A,N,G),A.side=Ns,A.needsUpdate=!0,At(A,N,G),A.side=Ur):At(A,N,G)}this.compile=function(A,N,G=null){G===null&&(G=A),m=ae.get(G),m.init(N),v.push(m),G.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),A!==G&&A.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const B=new Set;return A.traverse(function(k){const le=k.material;if(le)if(Array.isArray(le))for(let ye=0;ye<le.length;ye++){const Re=le[ye];nt(Re,G,k),B.add(Re)}else nt(le,G,k),B.add(le)}),v.pop(),m=null,B},this.compileAsync=function(A,N,G=null){const B=this.compile(A,N,G);return new Promise(k=>{function le(){if(B.forEach(function(ye){we.get(ye).currentProgram.isReady()&&B.delete(ye)}),B.size===0){k(A);return}setTimeout(le,10)}ge.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let je=null;function Ve(A){je&&je(A)}function Ne(){he.stop()}function Qe(){he.start()}const he=new lM;he.setAnimationLoop(Ve),typeof self<"u"&&he.setContext(self),this.setAnimationLoop=function(A){je=A,Z.setAnimationLoop(A),A===null?he.stop():he.start()},Z.addEventListener("sessionstart",Ne),Z.addEventListener("sessionend",Qe),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(N),N=Z.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,N,M),m=ae.get(A,v.length),m.init(N),v.push(m),pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ye.setFromProjectionMatrix(pe),ie=this.localClippingEnabled,q=De.init(this.clippingPlanes,ie),g=re.get(A,h.length),g.init(),h.push(g),Z.enabled===!0&&Z.isPresenting===!0){const le=x.xr.getDepthSensingMesh();le!==null&&Ge(le,N,-1/0,x.sortObjects)}Ge(A,N,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(I,j),qe=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,qe&&_e.addToRenderList(g,A),this.info.render.frame++,q===!0&&De.beginShadows();const G=m.state.shadowsArray;se.render(G,A,N),q===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=g.opaque,k=g.transmissive;if(m.setupLights(),N.isArrayCamera){const le=N.cameras;if(k.length>0)for(let ye=0,Re=le.length;ye<Re;ye++){const xe=le[ye];$e(B,k,A,xe)}qe&&_e.render(A);for(let ye=0,Re=le.length;ye<Re;ye++){const xe=le[ye];ze(g,A,xe,xe.viewport)}}else k.length>0&&$e(B,k,A,N),qe&&_e.render(A),ze(g,A,N);M!==null&&(Ue.updateMultisampleRenderTarget(M),Ue.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(x,A,N),We.resetDefaultState(),R=-1,E=null,v.pop(),v.length>0?(m=v[v.length-1],q===!0&&De.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function Ge(A,N,G,B){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ye.intersectsSprite(A)){B&&Ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pe);const ye=te.update(A),Re=A.material;Re.visible&&g.push(A,ye,Re,G,Ee.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ye.intersectsObject(A))){const ye=te.update(A),Re=A.material;if(B&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ee.copy(A.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ee.copy(ye.boundingSphere.center)),Ee.applyMatrix4(A.matrixWorld).applyMatrix4(pe)),Array.isArray(Re)){const xe=ye.groups;for(let Ce=0,Be=xe.length;Ce<Be;Ce++){const Fe=xe[Ce],dt=Re[Fe.materialIndex];dt&&dt.visible&&g.push(A,ye,dt,G,Ee.z,Fe)}}else Re.visible&&g.push(A,ye,Re,G,Ee.z,null)}}const le=A.children;for(let ye=0,Re=le.length;ye<Re;ye++)Ge(le[ye],N,G,B)}function ze(A,N,G,B){const k=A.opaque,le=A.transmissive,ye=A.transparent;m.setupLightsView(G),q===!0&&De.setGlobalState(x.clippingPlanes,G),B&&oe.viewport(S.copy(B)),k.length>0&&Nt(k,N,G),le.length>0&&Nt(le,N,G),ye.length>0&&Nt(ye,N,G),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function $e(A,N,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new Lo(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?Gu:qr,minFilter:ho,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const le=m.state.transmissionRenderTarget[B.id],ye=B.viewport||S;le.setSize(ye.z,ye.w);const Re=x.getRenderTarget();x.setRenderTarget(le),x.getClearColor(z),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),qe&&_e.render(G);const xe=x.toneMapping;x.toneMapping=Ps;const Ce=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),q===!0&&De.setGlobalState(x.clippingPlanes,B),Nt(A,G,B),Ue.updateMultisampleRenderTarget(le),Ue.updateRenderTargetMipmap(le),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Fe=0,dt=N.length;Fe<dt;Fe++){const Et=N[Fe],ht=Et.object,tn=Et.geometry,ut=Et.material,Le=Et.group;if(ut.side===Ur&&ht.layers.test(B.layers)){const gn=ut.side;ut.side=ei,ut.needsUpdate=!0,st(ht,G,B,tn,ut,Le),ut.side=gn,ut.needsUpdate=!0,Be=!0}}Be===!0&&(Ue.updateMultisampleRenderTarget(le),Ue.updateRenderTargetMipmap(le))}x.setRenderTarget(Re),x.setClearColor(z,X),Ce!==void 0&&(B.viewport=Ce),x.toneMapping=xe}function Nt(A,N,G){const B=N.isScene===!0?N.overrideMaterial:null;for(let k=0,le=A.length;k<le;k++){const ye=A[k],Re=ye.object,xe=ye.geometry,Ce=B===null?ye.material:B,Be=ye.group;Re.layers.test(G.layers)&&st(Re,N,G,xe,Ce,Be)}}function st(A,N,G,B,k,le){A.onBeforeRender(x,N,G,B,k,le),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(x,N,G,B,A,le),k.transparent===!0&&k.side===Ur&&k.forceSinglePass===!1?(k.side=ei,k.needsUpdate=!0,x.renderBufferDirect(G,N,B,k,A,le),k.side=Ns,k.needsUpdate=!0,x.renderBufferDirect(G,N,B,k,A,le),k.side=Ur):x.renderBufferDirect(G,N,B,k,A,le),A.onAfterRender(x,N,G,B,k,le)}function At(A,N,G){N.isScene!==!0&&(N=Ie);const B=we.get(A),k=m.state.lights,le=m.state.shadowsArray,ye=k.state.version,Re=K.getParameters(A,k.state,le,N,G),xe=K.getProgramCacheKey(Re);let Ce=B.programs;B.environment=A.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(A.isMeshStandardMaterial?T:b).get(A.envMap||B.environment),B.envMapRotation=B.environment!==null&&A.envMap===null?N.environmentRotation:A.envMapRotation,Ce===void 0&&(A.addEventListener("dispose",me),Ce=new Map,B.programs=Ce);let Be=Ce.get(xe);if(Be!==void 0){if(B.currentProgram===Be&&B.lightsStateVersion===ye)return Pt(A,Re),Be}else Re.uniforms=K.getUniforms(A),A.onBeforeCompile(Re,x),Be=K.acquireProgram(Re,xe),Ce.set(xe,Be),B.uniforms=Re.uniforms;const Fe=B.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=De.uniform),Pt(A,Re),B.needsLights=ai(A),B.lightsStateVersion=ye,B.needsLights&&(Fe.ambientLightColor.value=k.state.ambient,Fe.lightProbe.value=k.state.probe,Fe.directionalLights.value=k.state.directional,Fe.directionalLightShadows.value=k.state.directionalShadow,Fe.spotLights.value=k.state.spot,Fe.spotLightShadows.value=k.state.spotShadow,Fe.rectAreaLights.value=k.state.rectArea,Fe.ltc_1.value=k.state.rectAreaLTC1,Fe.ltc_2.value=k.state.rectAreaLTC2,Fe.pointLights.value=k.state.point,Fe.pointLightShadows.value=k.state.pointShadow,Fe.hemisphereLights.value=k.state.hemi,Fe.directionalShadowMap.value=k.state.directionalShadowMap,Fe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Fe.spotShadowMap.value=k.state.spotShadowMap,Fe.spotLightMatrix.value=k.state.spotLightMatrix,Fe.spotLightMap.value=k.state.spotLightMap,Fe.pointShadowMap.value=k.state.pointShadowMap,Fe.pointShadowMatrix.value=k.state.pointShadowMatrix),B.currentProgram=Be,B.uniformsList=null,Be}function en(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=mf.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function Pt(A,N){const G=we.get(A);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Ct(A,N,G,B,k){N.isScene!==!0&&(N=Ie),Ue.resetTextureUnits();const le=N.fog,ye=B.isMeshStandardMaterial?N.environment:null,Re=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Gs,xe=(B.isMeshStandardMaterial?T:b).get(B.envMap||ye),Ce=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Be=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Fe=!!G.morphAttributes.position,dt=!!G.morphAttributes.normal,Et=!!G.morphAttributes.color;let ht=Ps;B.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(ht=x.toneMapping);const tn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ut=tn!==void 0?tn.length:0,Le=we.get(B),gn=m.state.lights;if(q===!0&&(ie===!0||A!==E)){const Pi=A===E&&B.id===R;De.setState(B,A,Pi)}let _t=!1;B.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==gn.state.version||Le.outputColorSpace!==Re||k.isBatchedMesh&&Le.batching===!1||!k.isBatchedMesh&&Le.batching===!0||k.isBatchedMesh&&Le.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Le.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Le.instancing===!1||!k.isInstancedMesh&&Le.instancing===!0||k.isSkinnedMesh&&Le.skinning===!1||!k.isSkinnedMesh&&Le.skinning===!0||k.isInstancedMesh&&Le.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Le.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Le.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Le.instancingMorph===!1&&k.morphTexture!==null||Le.envMap!==xe||B.fog===!0&&Le.fog!==le||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==De.numPlanes||Le.numIntersection!==De.numIntersection)||Le.vertexAlphas!==Ce||Le.vertexTangents!==Be||Le.morphTargets!==Fe||Le.morphNormals!==dt||Le.morphColors!==Et||Le.toneMapping!==ht||Le.morphTargetsCount!==ut)&&(_t=!0):(_t=!0,Le.__version=B.version);let Xi=Le.currentProgram;_t===!0&&(Xi=At(B,N,k));let ko=!1,li=!1,Fd=!1;const qt=Xi.getUniforms(),Jr=Le.uniforms;if(oe.useProgram(Xi.program)&&(ko=!0,li=!0,Fd=!0),B.id!==R&&(R=B.id,li=!0),ko||E!==A){qt.setValue(D,"projectionMatrix",A.projectionMatrix),qt.setValue(D,"viewMatrix",A.matrixWorldInverse);const Pi=qt.map.cameraPosition;Pi!==void 0&&Pi.setValue(D,ce.setFromMatrixPosition(A.matrixWorld)),Te.logarithmicDepthBuffer&&qt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&qt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,li=!0,Fd=!0)}if(k.isSkinnedMesh){qt.setOptional(D,k,"bindMatrix"),qt.setOptional(D,k,"bindMatrixInverse");const Pi=k.skeleton;Pi&&(Pi.boneTexture===null&&Pi.computeBoneTexture(),qt.setValue(D,"boneTexture",Pi.boneTexture,Ue))}k.isBatchedMesh&&(qt.setOptional(D,k,"batchingTexture"),qt.setValue(D,"batchingTexture",k._matricesTexture,Ue),qt.setOptional(D,k,"batchingIdTexture"),qt.setValue(D,"batchingIdTexture",k._indirectTexture,Ue),qt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&qt.setValue(D,"batchingColorTexture",k._colorsTexture,Ue));const kd=G.morphAttributes;if((kd.position!==void 0||kd.normal!==void 0||kd.color!==void 0)&&Oe.update(k,G,Xi),(li||Le.receiveShadow!==k.receiveShadow)&&(Le.receiveShadow=k.receiveShadow,qt.setValue(D,"receiveShadow",k.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Jr.envMap.value=xe,Jr.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&N.environment!==null&&(Jr.envMapIntensity.value=N.environmentIntensity),li&&(qt.setValue(D,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&yt(Jr,Fd),le&&B.fog===!0&&Ae.refreshFogUniforms(Jr,le),Ae.refreshMaterialUniforms(Jr,B,H,W,m.state.transmissionRenderTarget[A.id]),mf.upload(D,en(Le),Jr,Ue)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(mf.upload(D,en(Le),Jr,Ue),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&qt.setValue(D,"center",k.center),qt.setValue(D,"modelViewMatrix",k.modelViewMatrix),qt.setValue(D,"normalMatrix",k.normalMatrix),qt.setValue(D,"modelMatrix",k.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Pi=B.uniformsGroups;for(let zd=0,OE=Pi.length;zd<OE;zd++){const P_=Pi[zd];Ze.update(P_,Xi),Ze.bind(P_,Xi)}}return Xi}function yt(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function ai(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,N,G){we.get(A.texture).__webglTexture=N,we.get(A.depthTexture).__webglTexture=G;const B=we.get(A);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=G===void 0,B.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,N){const G=we.get(A);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,G=0){M=A,C=N,w=G;let B=!0,k=null,le=!1,ye=!1;if(A){const xe=we.get(A);if(xe.__useDefaultFramebuffer!==void 0)oe.bindFramebuffer(D.FRAMEBUFFER,null),B=!1;else if(xe.__webglFramebuffer===void 0)Ue.setupRenderTarget(A);else if(xe.__hasExternalTextures)Ue.rebindTextures(A,we.get(A.texture).__webglTexture,we.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Fe=A.depthTexture;if(xe.__boundDepthTexture!==Fe){if(Fe!==null&&we.has(Fe)&&(A.width!==Fe.image.width||A.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(A)}}const Ce=A.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ye=!0);const Be=we.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[N])?k=Be[N][G]:k=Be[N],le=!0):A.samples>0&&Ue.useMultisampledRTT(A)===!1?k=we.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?k=Be[G]:k=Be,S.copy(A.viewport),L.copy(A.scissor),O=A.scissorTest}else S.copy(P).multiplyScalar(H).floor(),L.copy(ne).multiplyScalar(H).floor(),O=Me;if(oe.bindFramebuffer(D.FRAMEBUFFER,k)&&B&&oe.drawBuffers(A,k),oe.viewport(S),oe.scissor(L),oe.setScissorTest(O),le){const xe=we.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,G)}else if(ye){const xe=we.get(A.texture),Ce=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,xe.__webglTexture,G||0,Ce)}R=-1},this.readRenderTargetPixels=function(A,N,G,B,k,le,ye){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=we.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re){oe.bindFramebuffer(D.FRAMEBUFFER,Re);try{const xe=A.texture,Ce=xe.format,Be=xe.type;if(!Te.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-B&&G>=0&&G<=A.height-k&&D.readPixels(N,G,B,k,He.convert(Ce),He.convert(Be),le)}finally{const xe=M!==null?we.get(M).__webglFramebuffer:null;oe.bindFramebuffer(D.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(A,N,G,B,k,le,ye){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=we.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re){oe.bindFramebuffer(D.FRAMEBUFFER,Re);try{const xe=A.texture,Ce=xe.format,Be=xe.type;if(!Te.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=A.width-B&&G>=0&&G<=A.height-k){const Fe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Fe),D.bufferData(D.PIXEL_PACK_BUFFER,le.byteLength,D.STREAM_READ),D.readPixels(N,G,B,k,He.convert(Ce),He.convert(Be),0),D.flush();const dt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await _A(D,dt,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Fe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,le)}finally{D.deleteBuffer(Fe),D.deleteSync(dt)}return le}}finally{const xe=M!==null?we.get(M).__webglFramebuffer:null;oe.bindFramebuffer(D.FRAMEBUFFER,xe)}}},this.copyFramebufferToTexture=function(A,N=null,G=0){A.isTexture!==!0&&(Kl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,A=arguments[1]);const B=Math.pow(2,-G),k=Math.floor(A.image.width*B),le=Math.floor(A.image.height*B),ye=N!==null?N.x:0,Re=N!==null?N.y:0;Ue.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,ye,Re,k,le),oe.unbindTexture()},this.copyTextureToTexture=function(A,N,G=null,B=null,k=0){A.isTexture!==!0&&(Kl("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1],N=arguments[2],k=arguments[3]||0,G=null);let le,ye,Re,xe,Ce,Be;G!==null?(le=G.max.x-G.min.x,ye=G.max.y-G.min.y,Re=G.min.x,xe=G.min.y):(le=A.image.width,ye=A.image.height,Re=0,xe=0),B!==null?(Ce=B.x,Be=B.y):(Ce=0,Be=0);const Fe=He.convert(N.format),dt=He.convert(N.type);Ue.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Et=D.getParameter(D.UNPACK_ROW_LENGTH),ht=D.getParameter(D.UNPACK_IMAGE_HEIGHT),tn=D.getParameter(D.UNPACK_SKIP_PIXELS),ut=D.getParameter(D.UNPACK_SKIP_ROWS),Le=D.getParameter(D.UNPACK_SKIP_IMAGES),gn=A.isCompressedTexture?A.mipmaps[k]:A.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,gn.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gn.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Re),D.pixelStorei(D.UNPACK_SKIP_ROWS,xe),A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,Ce,Be,le,ye,Fe,dt,gn.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,Ce,Be,gn.width,gn.height,Fe,gn.data):D.texSubImage2D(D.TEXTURE_2D,k,Ce,Be,le,ye,Fe,dt,gn),D.pixelStorei(D.UNPACK_ROW_LENGTH,Et),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht),D.pixelStorei(D.UNPACK_SKIP_PIXELS,tn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ut),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le),k===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),oe.unbindTexture()},this.copyTextureToTexture3D=function(A,N,G=null,B=null,k=0){A.isTexture!==!0&&(Kl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,B=arguments[1]||null,A=arguments[2],N=arguments[3],k=arguments[4]||0);let le,ye,Re,xe,Ce,Be,Fe,dt,Et;const ht=A.isCompressedTexture?A.mipmaps[k]:A.image;G!==null?(le=G.max.x-G.min.x,ye=G.max.y-G.min.y,Re=G.max.z-G.min.z,xe=G.min.x,Ce=G.min.y,Be=G.min.z):(le=ht.width,ye=ht.height,Re=ht.depth,xe=0,Ce=0,Be=0),B!==null?(Fe=B.x,dt=B.y,Et=B.z):(Fe=0,dt=0,Et=0);const tn=He.convert(N.format),ut=He.convert(N.type);let Le;if(N.isData3DTexture)Ue.setTexture3D(N,0),Le=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Ue.setTexture2DArray(N,0),Le=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const gn=D.getParameter(D.UNPACK_ROW_LENGTH),_t=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Xi=D.getParameter(D.UNPACK_SKIP_PIXELS),ko=D.getParameter(D.UNPACK_SKIP_ROWS),li=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ht.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ce),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Be),A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Le,k,Fe,dt,Et,le,ye,Re,tn,ut,ht.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Le,k,Fe,dt,Et,le,ye,Re,tn,ht.data):D.texSubImage3D(Le,k,Fe,dt,Et,le,ye,Re,tn,ut,ht),D.pixelStorei(D.UNPACK_ROW_LENGTH,gn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xi),D.pixelStorei(D.UNPACK_SKIP_ROWS,ko),D.pixelStorei(D.UNPACK_SKIP_IMAGES,li),k===0&&N.generateMipmaps&&D.generateMipmap(Le),oe.unbindTexture()},this.initRenderTarget=function(A){we.get(A).__webglFramebuffer===void 0&&Ue.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ue.setTextureCube(A,0):A.isData3DTexture?Ue.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ue.setTexture2DArray(A,0):Ue.setTexture2D(A,0),oe.unbindTexture()},this.resetState=function(){C=0,w=0,M=null,oe.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===e_?"display-p3":"srgb",t.unpackColorSpace=xt.workingColorSpace===bd?"display-p3":"srgb"}}class R2 extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentIntensity=1,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class P2 extends qu{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ed=new Y,td=new Y,Nv=new Jt,wl=new QS,Oc=new Ld,Bh=new Y,Ov=new Y;class b2 extends ti{constructor(e=new Qr,t=new P2){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ed.fromBufferAttribute(t,r-1),td.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ed.distanceTo(td);e.setAttribute("lineDistance",new xi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oc.copy(i.boundingSphere),Oc.applyMatrix4(r),Oc.radius+=s,e.ray.intersectsSphere(Oc)===!1)return;Nv.copy(r).invert(),wl.copy(e.ray).applyMatrix4(Nv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),_=Math.min(c.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=u){const h=c.getX(g),v=c.getX(g+1),x=Fc(this,e,wl,l,h,v);x&&t.push(x)}if(this.isLineLoop){const g=c.getX(_-1),m=c.getX(p),h=Fc(this,e,wl,l,g,m);h&&t.push(h)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=u){const h=Fc(this,e,wl,l,g,g+1);h&&t.push(h)}if(this.isLineLoop){const g=Fc(this,e,wl,l,_-1,p);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fc(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(ed.fromBufferAttribute(o,r),td.fromBufferAttribute(o,s),t.distanceSqToSegment(ed,td,Bh,Ov)>i)return;Bh.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Bh);if(!(l<e.near||l>e.far))return{distance:l,point:Ov.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Fv=new Y,kv=new Y;class L2 extends b2{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Fv.fromBufferAttribute(t,r),kv.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Fv.distanceTo(kv);e.setAttribute("lineDistance",new xi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class D2 extends Ln{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}const zv={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class I2{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const p=u[d],_=u[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null}}}const U2=new I2;class n_{constructor(e){this.manager=e!==void 0?e:U2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}n_.DEFAULT_MATERIAL_NAME="__DEFAULT";class N2 extends n_{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=zv.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Cu("img");function l(){c(),zv.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class O2 extends n_{constructor(e){super(e)}load(e,t,i,r){const s=new Ln,o=new N2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qg);function Lr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function pM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ru={duration:.5,overwrite:!1,delay:0},i_,yn,Ut,zi=1e8,wt=1/zi,Pm=Math.PI*2,F2=Pm/4,k2=0,mM=Math.sqrt,z2=Math.cos,B2=Math.sin,mn=function(e){return typeof e=="string"},Gt=function(e){return typeof e=="function"},jr=function(e){return typeof e=="number"},r_=function(e){return typeof e>"u"},Er=function(e){return typeof e=="object"},ni=function(e){return e!==!1},s_=function(){return typeof window<"u"},kc=function(e){return Gt(e)||mn(e)},gM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dn=Array.isArray,H2=/random\([^)]+\)/g,V2=/,\s*/g,Bv=/(?:-?\.?\d|\.)+/gi,_M=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ma=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Hh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,vM=/[+-]=-?[.\d]+/,G2=/[^,'"\[\]\s]+/gi,W2=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,lr,bm,o_,wi={},nd={},xM,yM=function(e){return(nd=el(e,wi))&&oi},a_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Pu=function(e,t){return!t&&console.warn(e)},SM=function(e,t){return e&&(wi[e]=t)&&nd&&(nd[e]=t)||wi},bu=function(){return 0},X2={suppressEvents:!0,isStart:!0,kill:!1},gf={suppressEvents:!0,kill:!1},Y2={suppressEvents:!0},l_={},bs=[],Lm={},MM,pi={},Vh={},Hv=30,_f=[],u_="",c_=function(e){var t=e[0],i,r;if(Er(t)||Gt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=_f.length;r--&&!_f[r].targetTest(t););i=_f[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new WM(e[r],i)))||e.splice(r,1);return e},vo=function(e){return e._gsap||c_(Bi(e))[0]._gsap},EM=function(e,t,i){return(i=e[t])&&Gt(i)?e[t]():r_(i)&&e.getAttribute&&e.getAttribute(t)||i},ii=function(e,t){return(e=e.split(",")).forEach(t)||e},Wt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},Ua=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},q2=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},id=function(){var e=bs.length,t=bs.slice(0),i,r;for(Lm={},bs.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},f_=function(e){return!!(e._initted||e._startAt||e.add)},TM=function(e,t,i,r){bs.length&&!yn&&id(),e.render(t,i,!!(yn&&t<0&&f_(e))),bs.length&&!yn&&id()},wM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(G2).length<2?t:mn(e)?e.trim():e},AM=function(e){return e},Ai=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},$2=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},el=function(e,t){for(var i in t)e[i]=t[i];return e},Vv=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Er(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},rd=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Zl=function(e){var t=e.parent||kt,i=e.keyframes?$2(Dn(e.keyframes)):Ai;if(ni(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},j2=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},CM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Id=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Os=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},xo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},K2=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Dm=function(e,t,i,r){return e._startAt&&(yn?e._startAt.revert(gf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Z2=function n(e){return!e||e._ts&&n(e.parent)},Gv=function(e){return e._repeat?tl(e._tTime,e=e.duration()+e._rDelay)*e:0},tl=function(e,t){var i=Math.floor(e=Ot(e/t));return e&&i===e?i-1:i},sd=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ud=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},Nd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ot(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ud(e),i._dirty||xo(i,e)),e},RM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=sd(e.rawTime(),t),(!t._dur||ju(0,t.totalDuration(),i)-t._tTime>wt)&&t.render(i,!0)),xo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-wt}},hr=function(e,t,i,r){return t.parent&&Os(t),t._start=Ot((jr(i)?i:i||e!==kt?Li(e,i,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),CM(e,t,"_first","_last",e._sort?"_start":0),Im(t)||(e._recent=t),r||RM(e,t),e._ts<0&&Nd(e,e._tTime),e},PM=function(e,t){return(wi.ScrollTrigger||a_("scrollTrigger",t))&&wi.ScrollTrigger.create(t,e)},bM=function(e,t,i,r,s){if(h_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!yn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&MM!==gi.frame)return bs.push(e),e._lazy=[s,r],1},Q2=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Im=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},J2=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&Q2(e)&&!(!e._initted&&Im(e))||(e._ts<0||e._dp._ts<0)&&!Im(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=ju(0,e._tDur,t),c=tl(l,a),e._yoyo&&c&1&&(o=1-o),c!==tl(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||yn||r||e._zTime===wt||!t&&e._zTime){if(!e._initted&&bM(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?wt:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Dm(e,t,i,!0),e._onUpdate&&!i&&yi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&yi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Os(e,1),!i&&!yn&&(yi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},eL=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},nl=function(e,t,i,r){var s=e._repeat,o=Ot(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ot(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Nd(e,e._tTime=e._tDur*a),e.parent&&Ud(e),i||xo(e.parent,e),e},Wv=function(e){return e instanceof jn?xo(e):nl(e,e._dur)},tL={_start:0,endTime:bu,totalDuration:bu},Li=function n(e,t,i){var r=e.labels,s=e._recent||tL,o=e.duration()>=zi?s.endTime(!1):e._dur,a,l,u;return mn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Dn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Ql=function(e,t,i){var r=jr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ni(l.vars.inherit)&&l.parent;o.immediateRender=ni(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Zt(t[0],o,t[s+1])},Ws=function(e,t){return e||e===0?t(e):t},ju=function(e,t,i){return i<e?e:i>t?t:i},Pn=function(e,t){return!mn(e)||!(t=W2.exec(e))?"":t[1]},nL=function(e,t,i){return Ws(i,function(r){return ju(e,t,r)})},Um=[].slice,LM=function(e,t){return e&&Er(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Er(e[0]))&&!e.nodeType&&e!==lr},iL=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return mn(r)&&!t||LM(r,1)?(s=i).push.apply(s,Bi(r)):i.push(r)})||i},Bi=function(e,t,i){return Ut&&!t&&Ut.selector?Ut.selector(e):mn(e)&&!i&&(bm||!il())?Um.call((t||o_).querySelectorAll(e),0):Dn(e)?iL(e,i):LM(e)?Um.call(e,0):e?[e]:[]},Nm=function(e){return e=Bi(e)[0]||Pu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Bi(t,i.querySelectorAll?i:i===e?Pu("Invalid scope")||o_.createElement("div"):e)}},DM=function(e){return e.sort(function(){return .5-Math.random()})},IM=function(e){if(Gt(e))return e;var t=Er(e)?e:{each:e},i=yo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return mn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(f,p,_){var g=(_||t).length,m=o[g],h,v,x,y,C,w,M,R,E;if(!m){if(E=t.grid==="auto"?0:(t.grid||[1,zi])[1],!E){for(M=-zi;M<(M=_[E++].getBoundingClientRect().left)&&E<g;);E<g&&E--}for(m=o[g]=[],h=l?Math.min(E,g)*c-.5:r%E,v=E===zi?0:l?g*d/E-.5:r/E|0,M=0,R=zi,w=0;w<g;w++)x=w%E-h,y=v-(w/E|0),m[w]=C=u?Math.abs(u==="y"?y:x):mM(x*x+y*y),C>M&&(M=C),C<R&&(R=C);r==="random"&&DM(m),m.max=M-R,m.min=R,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(E>g?g-1:u?u==="y"?g/E:E:Math.max(E,g/E))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Pn(t.amount||t.each)||0,i=i&&g<0?gL(i):i}return g=(m[f]-m.min)/m.max||0,Ot(m.b+(i?i(g):g)*m.v)+m.u}},Om=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ot(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(jr(i)?0:Pn(i))}},UM=function(e,t){var i=Dn(e),r,s;return!i&&Er(e)&&(r=i=e.radius||zi,e.values?(e=Bi(e.values),(s=!jr(e[0]))&&(r*=r)):e=Om(e.increment)),Ws(t,i?Gt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=zi,c=0,d=e.length,f,p;d--;)s?(f=e[d].x-a,p=e[d].y-l,f=f*f+p*p):f=Math.abs(e[d]-a),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:o,s||c===o||jr(o)?c:c+Pn(o)}:Om(e))},NM=function(e,t,i,r){return Ws(Dn(e)?!t:i===!0?!!(i=0):!r,function(){return Dn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},rL=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},sL=function(e,t){return function(i){return e(parseFloat(i))+(t||Pn(i))}},oL=function(e,t,i){return FM(e,t,0,1,i)},OM=function(e,t,i){return Ws(i,function(r){return e[~~t(r)]})},aL=function n(e,t,i){var r=t-e;return Dn(e)?OM(e,n(0,e.length),t):Ws(i,function(s){return(r+(s-e)%r)%r+e})},lL=function n(e,t,i){var r=t-e,s=r*2;return Dn(e)?OM(e,n(0,e.length-1),t):Ws(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Lu=function(e){return e.replace(H2,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(V2);return NM(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},FM=function(e,t,i,r,s){var o=t-e,a=r-i;return Ws(s,function(l){return i+((l-e)/o*a||0)})},uL=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=mn(e),a={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Dn(e)&&!Dn(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(_){_*=d;var g=Math.min(f,~~_);return c[g](_-g)},i=t}else r||(e=el(Dn(e)?[]:{},e));if(!c){for(l in t)d_.call(a,e,l,"get",t[l]);s=function(_){return g_(_,a)||(o?e.p:e)}}}return Ws(i,s)},Xv=function(e,t,i){var r=e.labels,s=zi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},yi=function(e,t,i){var r=e.vars,s=r[t],o=Ut,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&bs.length&&id(),a&&(Ut=a),c=l?s.apply(u,l):s.call(u),Ut=o,c},Ul=function(e){return Os(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yn),e.progress()<1&&yi(e,"onInterrupt"),e},Ea,kM=[],zM=function(e){if(e)if(e=!e.name&&e.default||e,s_()||e.headless){var t=e.name,i=Gt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:bu,render:g_,add:d_,kill:AL,modifier:wL,rawVars:0},o={targetTest:0,get:0,getSetter:m_,aliases:{},register:0};if(il(),e!==r){if(pi[t])return;Ai(r,Ai(rd(e,s),o)),el(r.prototype,el(s,rd(e,o))),pi[r.prop=t]=r,e.targetTest&&(_f.push(r),l_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}SM(t,r),e.register&&e.register(oi,r,ri)}else kM.push(e)},Tt=255,Nl={aqua:[0,Tt,Tt],lime:[0,Tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tt],navy:[0,0,128],white:[Tt,Tt,Tt],olive:[128,128,0],yellow:[Tt,Tt,0],orange:[Tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tt,0,0],pink:[Tt,192,203],cyan:[0,Tt,Tt],transparent:[Tt,Tt,Tt,0]},Gh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Tt+.5|0},BM=function(e,t,i){var r=e?jr(e)?[e>>16,e>>8&Tt,e&Tt]:0:Nl.black,s,o,a,l,u,c,d,f,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Nl[e])r=Nl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Tt,r&Tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Tt,e&Tt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(Bv),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Gh(l+1/3,s,o),r[1]=Gh(l,s,o),r[2]=Gh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(_M),i&&r.length<4&&(r[3]=1),r}else r=e.match(Bv)||Nl.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/Tt,o=r[1]/Tt,a=r[2]/Tt,d=Math.max(s,o,a),f=Math.min(s,o,a),c=(d+f)/2,d===f?l=u=0:(p=d-f,u=c>.5?p/(2-d-f):p/(d+f),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},HM=function(e){var t=[],i=[],r=-1;return e.split(Ls).forEach(function(s){var o=s.match(Ma)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Yv=function(e,t,i){var r="",s=(e+r).match(Ls),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=BM(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=HM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Ls,"1").split(Ma),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Ls),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Ls=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Nl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),cL=/hsl[a]?\(/,VM=function(e){var t=e.join(" "),i;if(Ls.lastIndex=0,Ls.test(t))return i=cL.test(t),e[1]=Yv(e[1],i),e[0]=Yv(e[0],i,HM(e[1])),!0},Du,gi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,f,p,_=function g(m){var h=n()-r,v=m===!0,x,y,C,w;if((h>e||h<0)&&(i+=h-t),r+=h,C=r-i,x=C-o,(x>0||v)&&(w=++d.frame,f=C-d.time*1e3,d.time=C=C/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(g)),y)for(p=0;p<a.length;p++)a[p](C,f,w,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){xM&&(!bm&&s_()&&(lr=bm=window,o_=lr.document||{},wi.gsap=oi,(lr.gsapVersions||(lr.gsapVersions=[])).push(oi.version),yM(nd||lr.GreenSockGlobals||!lr.gsap&&lr||{}),kM.forEach(zM)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Du=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Du=0,u=bu},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,h,v){var x=h?function(y,C,w,M){m(y,C,w,M),d.remove(x)}:m;return d.remove(m),a[v?"unshift":"push"](x),il(),x},remove:function(m,h){~(h=a.indexOf(m))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},d}(),il=function(){return!Du&&gi.wake()},ct={},fL=/^[\d.\-M][\d.\-,\s]/,dL=/["']/g,hL=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(dL,"").trim():+u,r=l.substr(a+1).trim();return t},pL=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},mL=function(e){var t=(e+"").split("("),i=ct[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[hL(t[1])]:pL(e).split(",").map(wM)):ct._CE&&fL.test(e)?ct._CE("",e):i},gL=function(e){return function(t){return 1-e(1-t)}},yo=function(e,t){return e&&(Gt(e)?e:ct[e]||mL(e))||t},Fo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ii(e,function(a){ct[a]=wi[a]=s,ct[o=a.toLowerCase()]=i;for(var l in s)ct[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[a+"."+l]=s[l]}),s},GM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Wh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Pm*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*B2((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:GM(a);return s=Pm/s,l.config=function(u,c){return n(e,u,c)},l},Xh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:GM(i);return r.config=function(s){return n(e,s)},r};ii("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Fo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;Fo("Elastic",Wh("in"),Wh("out"),Wh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Fo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Fo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Fo("Circ",function(n){return-(mM(1-n*n)-1)});Fo("Sine",function(n){return n===1?1:-z2(n*F2)+1});Fo("Back",Xh("in"),Xh("out"),Xh());ct.SteppedEase=ct.steps=wi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-wt;return function(a){return((r*ju(0,o,a)|0)+s)*i}}};Ru.ease=ct["quad.out"];ii("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return u_+=n+","+n+"Params,"});var WM=function(e,t){this.id=k2++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:EM,this.set=t?t.getSetter:m_},Iu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,nl(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),Du||gi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,nl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(il(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Nd(this,i),!s._dp||s.parent||RM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&hr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===wt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),TM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Gv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Gv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?tl(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?sd(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-wt?0:this._rts,this.totalTime(ju(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Ud(this),K2(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(il(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Ot(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&hr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ni(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?sd(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Y2);var r=yn;return yn=i,f_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),yn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Wv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Wv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Li(this,i),ni(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ni(r)),this._dur||(this._zTime=-wt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-wt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Gt(i)?i:AM,l=function(){var c=r.then;r.then=null,s&&s(),Gt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Ul(this)},n}();Ai(Iu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var jn=function(n){pM(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ni(i.sortChildren),kt&&hr(i.parent||kt,Lr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&PM(Lr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ql(0,arguments,this),this},t.from=function(r,s,o){return Ql(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ql(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Zl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Zt(r,s,Li(this,o),1),this},t.call=function(r,s,o){return hr(this,Zt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Zt(r,o,Li(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Zl(o).immediateRender=ni(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,Zl(a).immediateRender=ni(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Ot(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,p,_,g,m,h,v,x,y,C,w,M;if(this!==kt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,y=this._start,x=this._ts,h=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=Ot(c%m),c===l?(g=this._repeat,f=u):(C=Ot(c/m),g=~~C,g&&g===C&&(f=u,g--),f>u&&(f=u)),C=tl(this._tTime,m),!a&&this._tTime&&C!==g&&this._tTime-C*m-this._dur<=0&&(C=g),w&&g&1&&(f=u-f,M=1),g!==C&&!this._lock){var R=w&&C&1,E=R===(w&&g&1);if(g<C&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(M?0:Ot(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&yi(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,C=g),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,E&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!h)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=eL(this,Ot(a),Ot(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!C&&(yi(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=-wt);break}}p=_}else{p=this._last;for(var S=r<0?r:f;p;){if(_=p._prev,(p._act||S<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,o||yn&&f_(p)),f!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=S?-wt:wt);break}}p=_}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-wt)._zTime=f>=a?1:-1,this._ts))return this._start=y,Ud(this),this.render(r,s,o);this._onUpdate&&!s&&yi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Os(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(yi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(jr(s)||(s=Li(this,s,r)),!(r instanceof Iu)){if(Dn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(mn(r))return this.addLabel(r,s);if(Gt(r))r=Zt.delayedCall(0,r);else return this}return this!==r?hr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-zi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Zt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return mn(r)?this.removeLabel(r):Gt(r)?this.killTweensOf(r):(r.parent===this&&Id(this,r),r===this._recent&&(this._recent=this._last),xo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(gi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Li(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Zt.delayedCall(0,s||bu,o);return a.data="isPause",this._hasPause=1,hr(this,a,Li(this,r))},t.removePause=function(r){var s=this._first;for(r=Li(this,r);s;)s._start===r&&s.data==="isPause"&&Os(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ms!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Bi(r),l=this._first,u=jr(s),c;l;)l instanceof Zt?q2(l._targets,a)&&(u?(!ms||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Li(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,p,_=Zt.to(o,Ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||wt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==m&&nl(_,m,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ai({startAt:{time:Li(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Xv(this,Li(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Xv(this,Li(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Ot(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return xo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),xo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=zi,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,hr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ot(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;nl(o,o===kt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(kt._ts&&(TM(kt,sd(r,kt)),MM=gi.frame),gi.frame>=Hv){Hv+=Ei.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&Ei.autoSleep&&gi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||gi.sleep()}}},e}(Iu);Ai(jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var _L=function(e,t,i,r,s,o,a){var l=new ri(this._pt,e,t,0,1,KM,null,s),u=0,c=0,d,f,p,_,g,m,h,v;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Lu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(Hh)||[];d=Hh.exec(r);)_=d[0],g=r.substring(u,d.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:_.charAt(1)==="="?Ua(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},u=Hh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(vM.test(r)||h)&&(l.e=0),this._pt=l,l},d_=function(e,t,i,r,s,o,a,l,u,c){Gt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:Gt(d)?u?e[t.indexOf("set")||!Gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=Gt(d)?u?ML:$M:p_,_;if(mn(r)&&(~r.indexOf("random(")&&(r=Lu(r)),r.charAt(1)==="="&&(_=Ua(f,r)+(Pn(f)||0),(_||_===0)&&(r=_))),!c||f!==r||Fm)return!isNaN(f*r)&&r!==""?(_=new ri(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?TL:jM,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!d&&!(t in e)&&a_(t,r),_L.call(this,e,t,f,r,p,l||Ei.stringFilter,u))},vL=function(e,t,i,r,s){if(Gt(e)&&(e=Jl(e,s,t,i,r)),!Er(e)||e.style&&e.nodeType||Dn(e)||gM(e))return mn(e)?Jl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Jl(e[a],s,t,i,r);return o},XM=function(e,t,i,r,s,o){var a,l,u,c;if(pi[e]&&(a=new pi[e]).init(s,a.rawVars?t[e]:vL(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ri(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Ea))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},ms,Fm,h_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,h=e.parent,v=h&&h.data==="nested"?h.vars.targets:m,x=e._overwrite==="auto"&&!i_,y=e.timeline,C=r.easeReverse||d,w,M,R,E,S,L,O,z,X,$,W,H,I;if(y&&(!f||!s)&&(s="none"),e._ease=yo(s,Ru.ease),e._rEase=C&&(yo(C)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||f&&!r.stagger){if(z=m[0]?vo(m[0]).harness:0,H=z&&r[z.prop],w=rd(r,l_),g&&(g._zTime<0&&g.progress(1),t<0&&c&&a&&!p?g.render(-1,!0):g.revert(c&&_?gf:X2),g._lazy=0),o){if(Os(e._startAt=Zt.set(m,Ai({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!g&&ni(l),startAt:null,delay:0,onUpdate:u&&function(){return yi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn||!a&&!p)&&e._startAt.revert(gf),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!g){if(t&&(a=!1),R=Ai({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ni(l),immediateRender:a,stagger:0,parent:h},w),H&&(R[z.prop]=H),Os(e._startAt=Zt.set(m,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn?e._startAt.revert(gf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&ni(l)||l&&!_,M=0;M<m.length;M++){if(S=m[M],O=S._gsap||c_(m)[M]._gsap,e._ptLookup[M]=$={},Lm[O.id]&&bs.length&&id(),W=v===m?M:v.indexOf(S),z&&(X=new z).init(S,H||w,e,W,v)!==!1&&(e._pt=E=new ri(e._pt,S,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(j){$[j]=E}),X.priority&&(L=1)),!z||H)for(R in w)pi[R]&&(X=XM(R,w,e,W,S,v))?X.priority&&(L=1):$[R]=E=d_.call(e,S,R,"get",w[R],W,v,0,r.stringFilter);e._op&&e._op[M]&&e.kill(S,e._op[M]),x&&e._pt&&(ms=e,kt.killTweensOf(S,$,e.globalTime(t)),I=!e.parent,ms=0),e._pt&&l&&(Lm[O.id]=1)}L&&ZM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!I,f&&t<=0&&y.render(zi,!0,!0)},xL=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Fm=1,e.vars[t]="+=0",h_(e,a),Fm=0,l?Pu(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=Wt(i)+Pn(d.e)),d.b&&(d.b=c.s+Pn(d.b))},yL=function(e,t){var i=e[0]?vo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=el({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},SL=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Dn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Jl=function(e,t,i,r,s){return Gt(e)?e.call(t,i,r,s):mn(e)&&~e.indexOf("random(")?Lu(e):e},YM=u_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",qM={};ii(YM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return qM[n]=1});var Zt=function(n){pM(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Zl(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,h=r.parent||kt,v=(Dn(i)||gM(i)?jr(i[0]):"length"in r)?[i]:Bi(i),x,y,C,w,M,R,E,S;if(a._targets=v.length?c_(v):Pu("GSAP target "+i+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||f||kc(u)||kc(c)){r=a.vars;var L=r.easeReverse||r.yoyoEase;if(x=a.timeline=new jn({data:"nested",defaults:g||{},targets:h&&h.data==="nested"?h.vars.targets:v}),x.kill(),x.parent=x._dp=Lr(a),x._start=0,f||kc(u)||kc(c)){if(w=v.length,E=f&&IM(f),Er(f))for(M in f)~YM.indexOf(M)&&(S||(S={}),S[M]=f[M]);for(y=0;y<w;y++)C=rd(r,qM),C.stagger=0,L&&(C.easeReverse=L),S&&el(C,S),R=v[y],C.duration=+Jl(u,Lr(a),y,R,v),C.delay=(+Jl(c,Lr(a),y,R,v)||0)-a._delay,!f&&w===1&&C.delay&&(a._delay=c=C.delay,a._start+=c,C.delay=0),x.to(R,C,E?E(y,R,v):0),x._ease=ct.none;x.duration()?u=c=0:a.timeline=0}else if(_){Zl(Ai(x.vars.defaults,{ease:"none"})),x._ease=yo(_.ease||r.ease||"none");var O=0,z,X,$;if(Dn(_))_.forEach(function(W){return x.to(v,W,">")}),x.duration();else{C={};for(M in _)M==="ease"||M==="easeEach"||SL(M,_[M],C,_.easeEach);for(M in C)for(z=C[M].sort(function(W,H){return W.t-H.t}),O=0,y=0;y<z.length;y++)X=z[y],$={ease:X.e,duration:(X.t-(y?z[y-1].t:0))/100*u},$[M]=X.v,x.to(v,$,O),O+=$.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return p===!0&&!i_&&(ms=Lr(a),kt.killTweensOf(v),ms=0),hr(h,Lr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!_&&a._start===Ot(h._time)&&ni(d)&&Z2(Lr(a))&&h.data!=="nested")&&(a._tTime=-wt,a.render(Math.max(0,-c)||0)),m&&PM(Lr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-wt&&!c?l:r<wt?0:r,f,p,_,g,m,h,v,x;if(!u)J2(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,x=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(f=Ot(d%g),d===l?(_=this._repeat,f=u):(m=Ot(d/g),_=~~m,_&&_===m?(f=u,_--):f>u&&(f=u)),h=this._yoyo&&_&1,h&&(f=u-f),m=tl(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=d,this;_!==m&&this.vars.repeatRefresh&&!h&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Ot(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(bM(this,c?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var C=y?a:u-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(y?-1:1)/C:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/u);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(yi(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Dm(this,r,s,o),yi(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&yi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Dm(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Os(this,1),!s&&!(c&&!a)&&(d||a||h)&&(yi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Du||gi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||h_(this,u),c=this._ease(u/this._dur),xL(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Nd(this,0),this.parent||CM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ul(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ms&&ms.vars.overwrite!==!0)._first||Ul(this),this.parent&&o!==this.timeline.totalDuration()&&nl(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Bi(r):a,u=this._ptLookup,c=this._pt,d,f,p,_,g,m,h;if((!s||s==="all")&&j2(a,l))return s==="all"&&(this._pt=0),Ul(this);for(d=this._op=this._op||[],s!=="all"&&(mn(s)&&(g={},ii(s,function(v){return g[v]=1}),s=g),s=yL(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){f=u[h],s==="all"?(d[h]=s,_=f,p={}):(p=d[h]=d[h]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Id(this,m,"_pt"),delete f[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&Ul(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ql(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ql(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return kt.killTweensOf(r,s,o)},e}(Iu);Ai(Zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ii("staggerTo,staggerFrom,staggerFromTo",function(n){Zt[n]=function(){var e=new jn,t=Um.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var p_=function(e,t,i){return e[t]=i},$M=function(e,t,i){return e[t](i)},ML=function(e,t,i,r){return e[t](r.fp,i)},EL=function(e,t,i){return e.setAttribute(t,i)},m_=function(e,t){return Gt(e[t])?$M:r_(e[t])&&e.setAttribute?EL:p_},jM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},TL=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},KM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},g_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},wL=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},AL=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Id(this,t,"_pt"):t.dep||(i=1),t=r;return!i},CL=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},ZM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ri=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||jM,this.d=l||this,this.set=u||p_,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=CL,this.m=i,this.mt=s,this.tween=r},n}();ii(u_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return l_[n]=1});wi.TweenMax=wi.TweenLite=Zt;wi.TimelineLite=wi.TimelineMax=jn;kt=new jn({sortChildren:!1,defaults:Ru,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ei.stringFilter=VM;var So=[],vf={},RL=[],qv=0,PL=0,Yh=function(e){return(vf[e]||RL).map(function(t){return t()})},km=function(){var e=Date.now(),t=[];e-qv>2&&(Yh("matchMediaInit"),So.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=lr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Yh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),qv=e,Yh("matchMedia"))},QM=function(){function n(t,i){this.selector=i&&Nm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=PL++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Gt(i)&&(s=r,r=i,i=Gt);var o=this,a=function(){var u=Ut,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=Nm(s)),Ut=o,d=r.apply(o,arguments),Gt(d)&&o._r.push(d),Ut=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===Gt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ut;Ut=null,i(this),Ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Zt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof jn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Zt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=So.length;o--;)So[o].id===this.id&&So.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),bL=function(){function n(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Er(i)||(i={matches:i});var o=new QM(0,s||this.scope),a=o.conditions={},l,u,c;Ut&&!o.selector&&(o.selector=Ut.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=lr.matchMedia(i[u]),l&&(So.indexOf(o)<0&&So.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(km):l.addEventListener("change",km)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),od={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return zM(r)})},timeline:function(e){return new jn(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,i,r){mn(e)&&(e=Bi(e)[0]);var s=vo(e||{}).get,o=i?AM:wM;return i==="native"&&(i=""),e&&(t?o((pi[t]&&pi[t].get||s)(e,t,i,r)):function(a,l,u){return o((pi[a]&&pi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Bi(e),e.length>1){var r=e.map(function(c){return oi.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=pi[t],a=vo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;Ea._pt=0,d.init(e,i?c+i:c,Ea,0,[e]),d.render(1,d),Ea._pt&&g_(1,Ea)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=oi.to(e,Ai((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=yo(e.ease,Ru.ease)),Vv(Ru,e||{})},config:function(e){return Vv(Ei,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!pi[a]&&!wi[a]&&Pu(t+" effect requires "+a+" plugin.")}),Vh[t]=function(a,l,u){return i(Bi(a),Ai(l||{},s),u)},o&&(jn.prototype[t]=function(a,l,u){return this.add(Vh[t](a,Er(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ct[e]=yo(t)},parseEase:function(e,t){return arguments.length?yo(e,t):ct},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new jn(e),r,s;for(i.smoothChildTiming=ni(e.smoothChildTiming),kt.remove(i),i._dp=0,i._time=i._tTime=kt._time,r=kt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Zt&&r.vars.onComplete===r._targets[0]))&&hr(i,r,r._start-r._delay),r=s;return hr(kt,i,0),i},context:function(e,t){return e?new QM(e,t):Ut},matchMedia:function(e){return new bL(e)},matchMediaRefresh:function(){return So.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||km()},addEventListener:function(e,t){var i=vf[e]||(vf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=vf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:aL,wrapYoyo:lL,distribute:IM,random:NM,snap:UM,normalize:oL,getUnit:Pn,clamp:nL,splitColor:BM,toArray:Bi,selector:Nm,mapRange:FM,pipe:rL,unitize:sL,interpolate:uL,shuffle:DM},install:yM,effects:Vh,ticker:gi,updateRoot:jn.updateRoot,plugins:pi,globalTimeline:kt,core:{PropTween:ri,globals:SM,Tween:Zt,Timeline:jn,Animation:Iu,getCache:vo,_removeLinkedListItem:Id,reverting:function(){return yn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return i_=e}}};ii("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return od[n]=Zt[n]});gi.add(jn.updateRoot);Ea=od.to({},{duration:0});var LL=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},DL=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=LL(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},qh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(mn(s)&&(l={},ii(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}DL(a,s)}}}},oi=od.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)yn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},qh("roundProps",Om),qh("modifiers"),qh("snap",UM))||od;Zt.version=jn.version=oi.version="3.15.0";xM=1;s_()&&il();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var $v,gs,Na,__,po,jv,v_,IL=function(){return typeof window<"u"},Kr={},io=180/Math.PI,Oa=Math.PI/180,ia=Math.atan2,Kv=1e8,x_=/([A-Z])/g,UL=/(left|right|width|margin|padding|x)/i,NL=/[\s,\(]\S/,gr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},OL=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},FL=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},kL=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},zL=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},JM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},eE=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},BL=function(e,t,i){return e.style[t]=i},HL=function(e,t,i){return e.style.setProperty(t,i)},VL=function(e,t,i){return e._gsap[t]=i},GL=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},WL=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},XL=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},zt="transform",si=zt+"Origin",YL=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Kr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=gr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Ir(r,a)}):this.tfm[e]=o.x?o[e]:Ir(r,e),e===si&&(this.tfm.zOrigin=o.zOrigin);else return gr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(zt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(si,t,"")),e=zt}(s||t)&&this.props.push(e,t,s[e])},tE=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},qL=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(x_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=v_(),(!s||!s.isStart)&&!i[zt]&&(tE(i),r.zOrigin&&i[si]&&(i[si]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},nE=function(e,t){var i={target:e,props:[],revert:qL,save:YL};return e._gsap||oi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},iE,Bm=function(e,t){var i=gs.createElementNS?gs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):gs.createElement(e);return i&&i.style?i:gs.createElement(e)},Si=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(x_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,rl(t)||t,1)||""},Zv="O,Moz,ms,Ms,Webkit".split(","),rl=function(e,t,i){var r=t||po,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Zv[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Zv[o]:"")+e},Hm=function(){IL()&&window.document&&($v=window,gs=$v.document,Na=gs.documentElement,po=Bm("div")||{style:{}},Bm("div"),zt=rl(zt),si=zt+"Origin",po.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",iE=!!rl("perspective"),v_=oi.core.reverting,__=1)},Qv=function(e){var t=e.ownerSVGElement,i=Bm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Na.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Na.removeChild(i),s},Jv=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},rE=function(e){var t,i;try{t=e.getBBox()}catch{t=Qv(e),i=1}return t&&(t.width||t.height)||i||(t=Qv(e)),t&&!t.width&&!t.x&&!t.y?{x:+Jv(e,["x","cx","x1"])||0,y:+Jv(e,["y","cy","y1"])||0,width:0,height:0}:t},sE=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&rE(e))},Fs=function(e,t){if(t){var i=e.style,r;t in Kr&&t!==si&&(t=zt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(x_,"-$1").toLowerCase())):i.removeAttribute(t)}},_s=function(e,t,i,r,s,o){var a=new ri(e._pt,t,i,0,1,o?eE:JM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},ex={deg:1,rad:1,turn:1},$L={grid:1,flex:1},ks=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=po.style,l=UL.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",_,g,m,h;if(r===o||!s||ex[r]||ex[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),h=e.getCTM&&sE(e),(p||o==="%")&&(Kr[t]||~t.indexOf("adius")))return _=h?e.getBBox()[l?"width":"height"]:e[c],Wt(p?s/_*d:s/100*_);if(a[l?"width":"height"]=d+(f?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===gs||!g.appendChild)&&(g=gs.body),m=g._gsap,m&&p&&m.width&&l&&m.time===gi.time&&!m.uncache)return Wt(s/m.width*d);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,_=e[c],v?e.style[t]=v:Fs(e,t)}else(p||o==="%")&&!$L[Si(g,"display")]&&(a.position=Si(e,"position")),g===e&&(a.position="static"),g.appendChild(po),_=po[c],g.removeChild(po),a.position="absolute";return l&&p&&(m=vo(g),m.time=gi.time,m.width=g[c]),Wt(f?_*s/d:_&&s?d/_*s:0)},Ir=function(e,t,i,r){var s;return __||Hm(),t in gr&&t!=="transform"&&(t=gr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Kr[t]&&t!=="transform"?(s=Nu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ld(Si(e,si))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ad[t]&&ad[t](e,t,i)||Si(e,t)||EM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?ks(e,t,s,i)+i:s},jL=function(e,t,i,r){if(!i||i==="none"){var s=rl(t,e,1),o=s&&Si(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Si(e,"borderTopColor"))}var a=new ri(this._pt,e.style,t,0,1,KM),l=0,u=0,c,d,f,p,_,g,m,h,v,x,y,C;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Si(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Si(e,t)||r,g?e.style[t]=g:Fs(e,t)),c=[i,r],VM(c),i=c[0],r=c[1],f=i.match(Ma)||[],C=r.match(Ma)||[],C.length){for(;d=Ma.exec(r);)m=d[0],v=r.substring(l,d.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=f[u++]||"")&&(p=parseFloat(g)||0,y=g.substr((p+"").length),m.charAt(1)==="="&&(m=Ua(p,m)+y),h=parseFloat(m),x=m.substr((h+"").length),l=Ma.lastIndex-x.length,x||(x=x||Ei.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=ks(e,t,g,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:h-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?eE:JM;return vM.test(r)&&(a.e=0),this._pt=a,a},tx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},KL=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=tx[i]||i,t[1]=tx[r]||r,t.join(" ")},ZL=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Kr[a]&&(l=1,a=a==="transformOrigin"?si:zt),Fs(i,a);l&&(Fs(i,zt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Nu(i,1),o.uncache=1,tE(r)))}},ad={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ri(e._pt,t,i,0,0,ZL);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Uu=[1,0,0,1,0,0],oE={},aE=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},nx=function(e){var t=Si(e,zt);return aE(t)?Uu:t.substr(7).match(_M).map(Wt)},y_=function(e,t){var i=e._gsap||vo(e),r=e.style,s=nx(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Uu:s):(s===Uu&&!e.offsetParent&&e!==Na&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Na.appendChild(e)),s=nx(e),l?r.display=l:Fs(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Na.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Vm=function(e,t,i,r,s,o){var a=e._gsap,l=s||y_(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],h=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,C=parseFloat(x[1])||0,w,M,R,E;i?l!==Uu&&(M=p*m-_*g)&&(R=y*(m/M)+C*(-g/M)+(g*v-m*h)/M,E=y*(-_/M)+C*(p/M)-(p*v-_*h)/M,y=R,C=E):(w=rE(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),C=w.y+(~(x[1]||x[0]).indexOf("%")?C/100*w.height:C)),r||r!==!1&&a.smooth?(h=y-u,v=C-c,a.xOffset=d+(h*p+v*g)-h,a.yOffset=f+(h*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[si]="0px 0px",o&&(_s(o,a,"xOrigin",u,y),_s(o,a,"yOrigin",c,C),_s(o,a,"xOffset",d,a.xOffset),_s(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+C)},Nu=function(e,t){var i=e._gsap||new WM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Si(e,si)||"0",c,d,f,p,_,g,m,h,v,x,y,C,w,M,R,E,S,L,O,z,X,$,W,H,I,j,P,ne,Me,Ye,q,ie;return c=d=f=g=m=h=v=x=y=0,p=_=1,i.svg=!!(e.getCTM&&sE(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[zt]!=="none"?l[zt]:"")),r.scale=r.rotate=r.translate="none"),M=y_(e,i.svg),i.svg&&(i.uncache?(I=e.getBBox(),u=i.xOrigin-I.x+"px "+(i.yOrigin-I.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),Vm(e,H||u,!!H||i.originIsAbsolute,i.smooth!==!1,M)),C=i.xOrigin||0,w=i.yOrigin||0,M!==Uu&&(L=M[0],O=M[1],z=M[2],X=M[3],c=$=M[4],d=W=M[5],M.length===6?(p=Math.sqrt(L*L+O*O),_=Math.sqrt(X*X+z*z),g=L||O?ia(O,L)*io:0,v=z||X?ia(z,X)*io+g:0,v&&(_*=Math.abs(Math.cos(v*Oa))),i.svg&&(c-=C-(C*L+w*z),d-=w-(C*O+w*X))):(ie=M[6],Ye=M[7],P=M[8],ne=M[9],Me=M[10],q=M[11],c=M[12],d=M[13],f=M[14],R=ia(ie,Me),m=R*io,R&&(E=Math.cos(-R),S=Math.sin(-R),H=$*E+P*S,I=W*E+ne*S,j=ie*E+Me*S,P=$*-S+P*E,ne=W*-S+ne*E,Me=ie*-S+Me*E,q=Ye*-S+q*E,$=H,W=I,ie=j),R=ia(-z,Me),h=R*io,R&&(E=Math.cos(-R),S=Math.sin(-R),H=L*E-P*S,I=O*E-ne*S,j=z*E-Me*S,q=X*S+q*E,L=H,O=I,z=j),R=ia(O,L),g=R*io,R&&(E=Math.cos(R),S=Math.sin(R),H=L*E+O*S,I=$*E+W*S,O=O*E-L*S,W=W*E-$*S,L=H,$=I),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,h=180-h),p=Wt(Math.sqrt(L*L+O*O+z*z)),_=Wt(Math.sqrt(W*W+ie*ie)),R=ia($,W),v=Math.abs(R)>2e-4?R*io:0,y=q?1/(q<0?-q:q):0),i.svg&&(H=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!aE(Si(e,zt)),H&&e.setAttribute("transform",H))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Wt(p),i.scaleY=Wt(_),i.rotation=Wt(g)+a,i.rotationX=Wt(m)+a,i.rotationY=Wt(h)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[si]=ld(u)),i.xOffset=i.yOffset=0,i.force3D=Ei.force3D,i.renderTransform=i.svg?JL:iE?lE:QL,i.uncache=0,i},ld=function(e){return(e=e.split(" "))[0]+" "+e[1]},$h=function(e,t,i){var r=Pn(t);return Wt(parseFloat(t)+parseFloat(ks(e,"x",i+"px",r)))+r},QL=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,lE(e,t)},Zs="0deg",Al="0px",Qs=") ",lE=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,h=i.force3D,v=i.target,x=i.zOrigin,y="",C=h==="auto"&&e&&e!==1||h===!0;if(x&&(d!==Zs||c!==Zs)){var w=parseFloat(c)*Oa,M=Math.sin(w),R=Math.cos(w),E;w=parseFloat(d)*Oa,E=Math.cos(w),o=$h(v,o,M*E*-x),a=$h(v,a,-Math.sin(w)*-x),l=$h(v,l,R*E*-x+x)}m!==Al&&(y+="perspective("+m+Qs),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(C||o!==Al||a!==Al||l!==Al)&&(y+=l!==Al||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Qs),u!==Zs&&(y+="rotate("+u+Qs),c!==Zs&&(y+="rotateY("+c+Qs),d!==Zs&&(y+="rotateX("+d+Qs),(f!==Zs||p!==Zs)&&(y+="skew("+f+", "+p+Qs),(_!==1||g!==1)&&(y+="scale("+_+", "+g+Qs),v.style[zt]=y||"translate(0, 0)"},JL=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,h=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),C,w,M,R,E;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Oa,u*=Oa,C=Math.cos(l)*d,w=Math.sin(l)*d,M=Math.sin(l-u)*-f,R=Math.cos(l-u)*f,u&&(c*=Oa,E=Math.tan(u-c),E=Math.sqrt(1+E*E),M*=E,R*=E,c&&(E=Math.tan(c),E=Math.sqrt(1+E*E),C*=E,w*=E)),C=Wt(C),w=Wt(w),M=Wt(M),R=Wt(R)):(C=d,R=f,w=M=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=ks(p,"x",o,"px"),y=ks(p,"y",a,"px")),(_||g||m||h)&&(x=Wt(x+_-(_*C+g*M)+m),y=Wt(y+g-(_*w+g*R)+h)),(r||s)&&(E=p.getBBox(),x=Wt(x+r/100*E.width),y=Wt(y+s/100*E.height)),E="matrix("+C+","+w+","+M+","+R+","+x+","+y+")",p.setAttribute("transform",E),v&&(p.style[zt]=E)},eD=function(e,t,i,r,s){var o=360,a=mn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?io:1),u=l-r,c=r+u+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*Kv)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*Kv)%o-~~(u/o)*o)),e._pt=f=new ri(e._pt,t,i,r,u,OL),f.e=c,f.u="deg",e._props.push(i),f},ix=function(e,t){for(var i in t)e[i]=t[i];return e},tD=function(e,t,i){var r=ix({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,f,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[zt]=t,a=Nu(i,1),Fs(i,zt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[zt],o[zt]=t,a=Nu(i,1),o[zt]=u);for(l in Kr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Pn(u),_=Pn(c),d=p!==_?ks(i,l,u,_):parseFloat(u),f=parseFloat(c),e._pt=new ri(e._pt,a,l,d,f-d,zm),e._pt.u=_||0,e._props.push(l));ix(a,r)};ii("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});ad[e>1?"border"+n:n]=function(a,l,u,c,d){var f,p;if(arguments.length<4)return f=o.map(function(_){return Ir(a,_,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},o.forEach(function(_,g){return p[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,p,d)}});var uE={name:"css",register:Hm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,f,p,_,g,m,h,v,x,y,C,w,M,R,E;__||Hm(),this.styles=this.styles||nE(e),R=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(pi[g]&&XM(g,t,i,r,e,s)))){if(p=typeof c,_=ad[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Lu(c)),_)_(this,e,g,c,i)&&(M=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",Ls.lastIndex=0,Ls.test(u)||(m=Pn(u),h=Pn(c),h?m!==h&&(u=ks(e,g,u,h)+h):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),R.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],mn(u)&&~u.indexOf("random(")&&(u=Lu(u)),Pn(u+"")||u==="auto"||(u+=Ei.units[g]||Pn(Ir(e,g))||""),(u+"").charAt(1)==="="&&(u=Ir(e,g))):u=Ir(e,g),f=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),d=parseFloat(c),g in gr&&(g==="autoAlpha"&&(f===1&&Ir(e,"visibility")==="hidden"&&d&&(f=0),R.push("visibility",0,a.visibility),_s(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=gr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Kr,x){if(this.styles.save(g),E=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Si(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=c,c=Si(e,"perspective"),S?e.style.perspective=S:Fs(e,"perspective")}d=parseFloat(c)}if(y||(C=e._gsap,C.renderTransform&&!t.parseTransform||Nu(e,t.parseTransform),w=t.smoothOrigin!==!1&&C.smooth,y=this._pt=new ri(this._pt,a,zt,0,1,C.renderTransform,C,0,-1),y.dep=1),g==="scale")this._pt=new ri(this._pt,C,"scaleY",C.scaleY,(v?Ua(C.scaleY,v+d):d)-C.scaleY||0,zm),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(si,0,a[si]),c=KL(c),C.svg?Vm(e,c,0,w,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==C.zOrigin&&_s(this,C,"zOrigin",C.zOrigin,h),_s(this,a,g,ld(u),ld(c)));continue}else if(g==="svgOrigin"){Vm(e,c,1,w,0,this);continue}else if(g in oE){eD(this,C,g,f,v?Ua(f,v+c):c);continue}else if(g==="smoothOrigin"){_s(this,C,"smooth",C.smooth,c);continue}else if(g==="force3D"){C[g]=c;continue}else if(g==="transform"){tD(this,c,e);continue}}else g in a||(g=rl(g)||g);if(x||(d||d===0)&&(f||f===0)&&!NL.test(c)&&g in a)m=(u+"").substr((f+"").length),d||(d=0),h=Pn(c)||(g in Ei.units?Ei.units[g]:m),m!==h&&(f=ks(e,g,u,h)),this._pt=new ri(this._pt,x?C:a,g,f,(v?Ua(f,v+d):d)-f,!x&&(h==="px"||g==="zIndex")&&t.autoRound!==!1?zL:zm),this._pt.u=h||0,x&&E!==c?(this._pt.b=u,this._pt.e=E,this._pt.r=kL):m!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=FL);else if(g in a)jL.call(this,e,g,u,v?v+c:c);else if(g in e)this.add(e,g,u||e[g],v?v+c:c,r,s);else if(g!=="parseTransform"){a_(g,c);continue}x||(g in a?R.push(g,0,a[g]):typeof e[g]=="function"?R.push(g,2,e[g]()):R.push(g,1,u||e[g])),o.push(g)}}M&&ZM(this)},render:function(e,t){if(t.tween._time||!v_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Ir,aliases:gr,getSetter:function(e,t,i){var r=gr[t];return r&&r.indexOf(",")<0&&(t=r),t in Kr&&t!==si&&(e._gsap.x||Ir(e,"x"))?i&&jv===i?t==="scale"?GL:VL:(jv=i||{})&&(t==="scale"?WL:XL):e.style&&!r_(e.style[t])?BL:~t.indexOf("-")?HL:m_(e,t)},core:{_removeProperty:Fs,_getMatrix:y_}};oi.utils.checkPrefix=rl;oi.core.getStyleSaver=nE;(function(n,e,t,i){var r=ii(n+","+e+","+t,function(s){Kr[s]=1});ii(e,function(s){Ei.units[s]="deg",oE[s]=1}),gr[r[13]]=n+","+e,ii(i,function(s){var o=s.split(":");gr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ii("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ei.units[n]="px"});oi.registerPlugin(uE);var cE=oi.registerPlugin(uE)||oi;cE.core.Tween;function nD(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function iD(n,e,t){return e&&nD(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vn,xf,_i,vs,xs,Fa,fE,ro,ka,dE,Br,Ki,hE,pE=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},mE=1,Ta=[],at=[],Sr=[],eu=Date.now,Gm=function(e,t){return t},rD=function(){var e=ka.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,at),r.push.apply(r,Sr),at=i,Sr=r,Gm=function(o,a){return t[o](a)}},Ds=function(e,t){return~Sr.indexOf(e)&&Sr[Sr.indexOf(e)+1][t]},tu=function(e){return!!~dE.indexOf(e)},Nn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Un=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},zc="scrollLeft",Bc="scrollTop",Wm=function(){return Br&&Br.isPressed||at.cache++},ud=function(e,t){var i=function r(s){if(s||s===0){mE&&(_i.history.scrollRestoration="manual");var o=Br&&Br.isPressed;s=r.v=Math.round(s)||(Br&&Br.iOS?1:0),e(s),r.cacheID=at.cache,o&&Gm("ss",s)}else(t||at.cache!==r.cacheID||Gm("ref"))&&(r.cacheID=at.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Hn={s:zc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ud(function(n){return arguments.length?_i.scrollTo(n,sn.sc()):_i.pageXOffset||vs[zc]||xs[zc]||Fa[zc]||0})},sn={s:Bc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Hn,sc:ud(function(n){return arguments.length?_i.scrollTo(Hn.sc(),n):_i.pageYOffset||vs[Bc]||xs[Bc]||Fa[Bc]||0})},Yn=function(e,t){return(t&&t._ctx&&t._ctx.selector||vn.utils.toArray)(e)[0]||(typeof e=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},sD=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},zs=function(e,t){var i=t.s,r=t.sc;tu(e)&&(e=vs.scrollingElement||xs);var s=at.indexOf(e),o=r===sn.sc?1:2;!~s&&(s=at.push(e)-1),at[s+o]||Nn(e,"scroll",Wm);var a=at[s+o],l=a||(at[s+o]=ud(Ds(e,i),!0)||(tu(e)?r:ud(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=vn.getProperty(e,"scrollBehavior")==="smooth"),l},Xm=function(e,t,i){var r=e,s=e,o=eu(),a=o,l=t||50,u=Math.max(500,l*3),c=function(_,g){var m=eu();g||m-o>l?(s=r,r=_,a=o,o=m):i?r+=_:r=s+(_-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(_){var g=a,m=s,h=eu();return(_||_===0)&&_!==r&&c(_),o===a||h-a>u?0:(r+(i?m:-m))/((i?h:o)-g)*1e3};return{update:c,reset:d,getVelocity:f}},Cl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},rx=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},gE=function(){ka=vn.core.globals().ScrollTrigger,ka&&ka.core&&rD()},_E=function(e){return vn=e||pE(),!xf&&vn&&typeof document<"u"&&document.body&&(_i=window,vs=document,xs=vs.documentElement,Fa=vs.body,dE=[_i,vs,xs,Fa],vn.utils.clamp,hE=vn.core.context||function(){},ro="onpointerenter"in Fa?"pointer":"mouse",fE=Yt.isTouch=_i.matchMedia&&_i.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in _i||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ki=Yt.eventTypes=("ontouchstart"in xs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in xs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return mE=0},500),xf=1),ka||gE(),xf};Hn.op=sn;at.cache=0;var Yt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){xf||_E(vn)||console.warn("Please gsap.registerPlugin(Observer)"),ka||gE();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,f=i.onStopDelay,p=i.ignore,_=i.wheelSpeed,g=i.event,m=i.onDragStart,h=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,C=i.onRight,w=i.onLeft,M=i.onUp,R=i.onDown,E=i.onChangeX,S=i.onChangeY,L=i.onChange,O=i.onToggleX,z=i.onToggleY,X=i.onHover,$=i.onHoverEnd,W=i.onMove,H=i.ignoreCheck,I=i.isNormalizer,j=i.onGestureStart,P=i.onGestureEnd,ne=i.onWheel,Me=i.onEnable,Ye=i.onDisable,q=i.onClick,ie=i.scrollSpeed,pe=i.capture,ce=i.allowClicks,Ee=i.lockAxis,Ie=i.onLockAxis;this.target=a=Yn(a)||xs,this.vars=i,p&&(p=vn.utils.toArray(p)),r=r||1e-9,s=s||0,_=_||1,ie=ie||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(_i.getComputedStyle(Fa).lineHeight)||22);var qe,Je,D,de,ge,Te,oe,F=this,we=0,Ue=0,b=i.passive||!c&&i.passive!==!1,T=zs(a,Hn),V=zs(a,sn),J=T(),te=V(),K=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ki[0]==="pointerdown",Ae=tu(a),re=a.ownerDocument||vs,ae=[0,0,0],De=[0,0,0],se=0,_e=function(){return se=eu()},Oe=function(Ne,Qe){return(F.event=Ne)&&p&&sD(Ne.target,p)||Qe&&K&&Ne.pointerType!=="touch"||H&&H(Ne,Qe)},ke=function(){F._vx.reset(),F._vy.reset(),Je.pause(),d&&d(F)},ve=function(){var Ne=F.deltaX=rx(ae),Qe=F.deltaY=rx(De),he=Math.abs(Ne)>=r,Ge=Math.abs(Qe)>=r;L&&(he||Ge)&&L(F,Ne,Qe,ae,De),he&&(C&&F.deltaX>0&&C(F),w&&F.deltaX<0&&w(F),E&&E(F),O&&F.deltaX<0!=we<0&&O(F),we=F.deltaX,ae[0]=ae[1]=ae[2]=0),Ge&&(R&&F.deltaY>0&&R(F),M&&F.deltaY<0&&M(F),S&&S(F),z&&F.deltaY<0!=Ue<0&&z(F),Ue=F.deltaY,De[0]=De[1]=De[2]=0),(de||D)&&(W&&W(F),D&&(m&&D===1&&m(F),v&&v(F),D=0),de=!1),Te&&!(Te=!1)&&Ie&&Ie(F),ge&&(ne(F),ge=!1),qe=0},He=function(Ne,Qe,he){ae[he]+=Ne,De[he]+=Qe,F._vx.update(Ne),F._vy.update(Qe),u?qe||(qe=requestAnimationFrame(ve)):ve()},We=function(Ne,Qe){Ee&&!oe&&(F.axis=oe=Math.abs(Ne)>Math.abs(Qe)?"x":"y",Te=!0),oe!=="y"&&(ae[2]+=Ne,F._vx.update(Ne,!0)),oe!=="x"&&(De[2]+=Qe,F._vy.update(Qe,!0)),u?qe||(qe=requestAnimationFrame(ve)):ve()},Ze=function(Ne){if(!Oe(Ne,1)){Ne=Cl(Ne,c);var Qe=Ne.clientX,he=Ne.clientY,Ge=Qe-F.x,ze=he-F.y,$e=F.isDragging;F.x=Qe,F.y=he,($e||(Ge||ze)&&(Math.abs(F.startX-Qe)>=s||Math.abs(F.startY-he)>=s))&&(D||(D=$e?2:1),$e||(F.isDragging=!0),We(Ge,ze))}},U=F.onPress=function(Ve){Oe(Ve,1)||Ve&&Ve.button||(F.axis=oe=null,Je.pause(),F.isPressed=!0,Ve=Cl(Ve),we=Ue=0,F.startX=F.x=Ve.clientX,F.startY=F.y=Ve.clientY,F._vx.reset(),F._vy.reset(),Nn(I?a:re,Ki[1],Ze,b,!0),F.deltaX=F.deltaY=0,x&&x(F))},Z=F.onRelease=function(Ve){if(!Oe(Ve,1)){Un(I?a:re,Ki[1],Ze,!0);var Ne=!isNaN(F.y-F.startY),Qe=F.isDragging,he=Qe&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),Ge=Cl(Ve);!he&&Ne&&(F._vx.reset(),F._vy.reset(),c&&ce&&vn.delayedCall(.08,function(){if(eu()-se>300&&!Ve.defaultPrevented){if(Ve.target.click)Ve.target.click();else if(re.createEvent){var ze=re.createEvent("MouseEvents");ze.initMouseEvent("click",!0,!0,_i,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),Ve.target.dispatchEvent(ze)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,d&&Qe&&!I&&Je.restart(!0),D&&ve(),h&&Qe&&h(F),y&&y(F,he)}},Q=function(Ne){return Ne.touches&&Ne.touches.length>1&&(F.isGesturing=!0)&&j(Ne,F.isDragging)},ee=function(){return(F.isGesturing=!1)||P(F)},ue=function(Ne){if(!Oe(Ne)){var Qe=T(),he=V();He((Qe-J)*ie,(he-te)*ie,1),J=Qe,te=he,d&&Je.restart(!0)}},me=function(Ne){if(!Oe(Ne)){Ne=Cl(Ne,c),ne&&(ge=!0);var Qe=(Ne.deltaMode===1?l:Ne.deltaMode===2?_i.innerHeight:1)*_;He(Ne.deltaX*Qe,Ne.deltaY*Qe,0),d&&!I&&Je.restart(!0)}},Xe=function(Ne){if(!Oe(Ne)){var Qe=Ne.clientX,he=Ne.clientY,Ge=Qe-F.x,ze=he-F.y;F.x=Qe,F.y=he,de=!0,d&&Je.restart(!0),(Ge||ze)&&We(Ge,ze)}},ft=function(Ne){F.event=Ne,X(F)},nt=function(Ne){F.event=Ne,$(F)},je=function(Ne){return Oe(Ne)||Cl(Ne,c)&&q(F)};Je=F._dc=vn.delayedCall(f||.25,ke).pause(),F.deltaX=F.deltaY=0,F._vx=Xm(0,50,!0),F._vy=Xm(0,50,!0),F.scrollX=T,F.scrollY=V,F.isDragging=F.isGesturing=F.isPressed=!1,hE(this),F.enable=function(Ve){return F.isEnabled||(Nn(Ae?re:a,"scroll",Wm),o.indexOf("scroll")>=0&&Nn(Ae?re:a,"scroll",ue,b,pe),o.indexOf("wheel")>=0&&Nn(a,"wheel",me,b,pe),(o.indexOf("touch")>=0&&fE||o.indexOf("pointer")>=0)&&(Nn(a,Ki[0],U,b,pe),Nn(re,Ki[2],Z),Nn(re,Ki[3],Z),ce&&Nn(a,"click",_e,!0,!0),q&&Nn(a,"click",je),j&&Nn(re,"gesturestart",Q),P&&Nn(re,"gestureend",ee),X&&Nn(a,ro+"enter",ft),$&&Nn(a,ro+"leave",nt),W&&Nn(a,ro+"move",Xe)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=de=D=!1,F._vx.reset(),F._vy.reset(),J=T(),te=V(),Ve&&Ve.type&&U(Ve),Me&&Me(F)),F},F.disable=function(){F.isEnabled&&(Ta.filter(function(Ve){return Ve!==F&&tu(Ve.target)}).length||Un(Ae?re:a,"scroll",Wm),F.isPressed&&(F._vx.reset(),F._vy.reset(),Un(I?a:re,Ki[1],Ze,!0)),Un(Ae?re:a,"scroll",ue,pe),Un(a,"wheel",me,pe),Un(a,Ki[0],U,pe),Un(re,Ki[2],Z),Un(re,Ki[3],Z),Un(a,"click",_e,!0),Un(a,"click",je),Un(re,"gesturestart",Q),Un(re,"gestureend",ee),Un(a,ro+"enter",ft),Un(a,ro+"leave",nt),Un(a,ro+"move",Xe),F.isEnabled=F.isPressed=F.isDragging=!1,Ye&&Ye(F))},F.kill=F.revert=function(){F.disable();var Ve=Ta.indexOf(F);Ve>=0&&Ta.splice(Ve,1),Br===F&&(Br=0)},Ta.push(F),I&&tu(a)&&(Br=F),F.enable(g)},iD(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Yt.version="3.15.0";Yt.create=function(n){return new Yt(n)};Yt.register=_E;Yt.getAll=function(){return Ta.slice()};Yt.getById=function(n){return Ta.filter(function(e){return e.vars.id===n})[0]};pE()&&vn.registerPlugin(Yt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var be,aa,ot,St,mi,vt,S_,cd,Ou,nu,Ol,Hc,An,Od,Ym,zn,sx,ox,la,vE,jh,xE,Fn,qm,yE,SE,as,$m,M_,za,E_,iu,jm,Kh,Vc=1,Cn=Date.now,Zh=Cn(),Vi=0,Fl=0,ax=function(e,t,i){var r=hi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},lx=function(e,t){return t&&(!hi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},oD=function n(){return Fl&&requestAnimationFrame(n)},ux=function(){return Od=1},cx=function(){return Od=0},ur=function(e){return e},kl=function(e){return Math.round(e*1e5)/1e5||0},ME=function(){return typeof window<"u"},EE=function(){return be||ME()&&(be=window.gsap)&&be.registerPlugin&&be},Do=function(e){return!!~S_.indexOf(e)},TE=function(e){return(e==="Height"?E_:ot["inner"+e])||mi["client"+e]||vt["client"+e]},wE=function(e){return Ds(e,"getBoundingClientRect")||(Do(e)?function(){return Tf.width=ot.innerWidth,Tf.height=E_,Tf}:function(){return Nr(e)})},aD=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Ds(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?TE(s):e["client"+s])||0}},lD=function(e,t){return!t||~Sr.indexOf(e)?wE(e):function(){return Tf}},_r=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Ds(e,i))?o()-wE(e)()[s]:Do(e)?(mi[i]||vt[i])-TE(r):e[i]-e["offset"+r])},Gc=function(e,t){for(var i=0;i<la.length;i+=3)(!t||~t.indexOf(la[i+1]))&&e(la[i],la[i+1],la[i+2])},hi=function(e){return typeof e=="string"},bn=function(e){return typeof e=="function"},zl=function(e){return typeof e=="number"},so=function(e){return typeof e=="object"},Rl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},ra=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},sa=Math.abs,AE="left",CE="top",T_="right",w_="bottom",Mo="width",Eo="height",ru="Right",su="Left",ou="Top",au="Bottom",Kt="padding",Ni="margin",sl="Width",A_="Height",nn="px",Oi=function(e){return ot.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},uD=function(e){var t=Oi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},fx=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Nr=function(e,t){var i=t&&Oi(e)[Ym]!=="matrix(1, 0, 0, 1, 0, 0)"&&be.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},fd=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},RE=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},cD=function(e){return function(t){return be.utils.snap(RE(e),t)}},C_=function(e){var t=be.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},fD=function(e){return function(t,i){return C_(RE(e))(t,i.direction)}},Wc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},fn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},cn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Xc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},dx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Yc={toggleActions:"play",anticipatePin:0},dd={top:0,left:0,center:.5,bottom:1,right:1},yf=function(e,t){if(hi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in dd?dd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},qc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,f=s.indent,p=s.fontWeight,_=St.createElement("div"),g=Do(i)||Ds(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,h=g?vt:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,x=v?u:c,y="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(y+=(r===sn?T_:w_)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,h.children[0]?h.insertBefore(_,h.children[0]):h.appendChild(_),_._offset=_["offset"+r.op.d2],Sf(_,0,r,v),_},Sf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+sl]=1,s["border"+a+sl]=0,s[i.p]=t+"px",be.set(e,s)},it=[],Km={},Fu,hx=function(){return Cn()-Vi>34&&(Fu||(Fu=requestAnimationFrame(Vr)))},oa=function(){(!Fn||!Fn.isPressed||Fn.startX>vt.clientWidth)&&(at.cache++,Fn?Fu||(Fu=requestAnimationFrame(Vr)):Vr(),Vi||Uo("scrollStart"),Vi=Cn())},Qh=function(){SE=ot.innerWidth,yE=ot.innerHeight},Bl=function(e){at.cache++,(e===!0||!An&&!xE&&!St.fullscreenElement&&!St.webkitFullscreenElement&&(!qm||SE!==ot.innerWidth||Math.abs(ot.innerHeight-yE)>ot.innerHeight*.25))&&cd.restart(!0)},Io={},dD=[],PE=function n(){return cn(rt,"scrollEnd",n)||mo(!0)},Uo=function(e){return Io[e]&&Io[e].map(function(t){return t()})||dD},fi=[],bE=function(e){for(var t=0;t<fi.length;t+=5)(!e||fi[t+4]&&fi[t+4].query===e)&&(fi[t].style.cssText=fi[t+1],fi[t].getBBox&&fi[t].setAttribute("transform",fi[t+2]||""),fi[t+3].uncache=1)},LE=function(){return at.forEach(function(e){return bn(e)&&++e.cacheID&&(e.rec=e())})},R_=function(e,t){var i;for(zn=0;zn<it.length;zn++)i=it[zn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));iu=!0,t&&bE(t),t||Uo("revert")},DE=function(e,t){at.cache++,(t||!Bn)&&at.forEach(function(i){return bn(i)&&i.cacheID++&&(i.rec=0)}),hi(e)&&(ot.history.scrollRestoration=M_=e)},Bn,To=0,px,hD=function(){if(px!==To){var e=px=To;requestAnimationFrame(function(){return e===To&&mo(!0)})}},IE=function(){vt.appendChild(za),E_=!Fn&&za.offsetHeight||ot.innerHeight,vt.removeChild(za)},mx=function(e){return Ou(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},mo=function(e,t){if(mi=St.documentElement,vt=St.body,S_=[ot,St,mi,vt],Vi&&!e&&!iu){fn(rt,"scrollEnd",PE);return}IE(),Bn=rt.isRefreshing=!0,iu||LE();var i=Uo("refreshInit");vE&&rt.sort(),t||R_(),at.forEach(function(r){bn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),it.slice(0).forEach(function(r){return r.refresh()}),iu=!1,it.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),jm=1,mx(!0),it.forEach(function(r){var s=_r(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),mx(!1),jm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),at.forEach(function(r){bn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),DE(M_,1),cd.pause(),To++,Bn=2,Vr(2),it.forEach(function(r){return bn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Bn=rt.isRefreshing=!1,Uo("refresh")},Zm=0,Mf=1,lu,Vr=function(e){if(e===2||!Bn&&!iu){rt.isUpdating=!0,lu&&lu.update(0);var t=it.length,i=Cn(),r=i-Zh>=50,s=t&&it[0].scroll();if(Mf=Zm>s?-1:1,Bn||(Zm=s),r&&(Vi&&!Od&&i-Vi>200&&(Vi=0,Uo("scrollEnd")),Ol=Zh,Zh=i),Mf<0){for(zn=t;zn-- >0;)it[zn]&&it[zn].update(0,r);Mf=1}else for(zn=0;zn<t;zn++)it[zn]&&it[zn].update(0,r);rt.isUpdating=!1}Fu=0},Qm=[AE,CE,w_,T_,Ni+au,Ni+ru,Ni+ou,Ni+su,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ef=Qm.concat([Mo,Eo,"boxSizing","max"+sl,"max"+A_,"position",Ni,Kt,Kt+ou,Kt+ru,Kt+au,Kt+su]),pD=function(e,t,i){Ba(i);var r=e._gsap;if(r.spacerIsNative)Ba(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Jh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Qm.length,o=t.style,a=e.style,l;s--;)l=Qm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[w_]=a[T_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Mo]=fd(e,Hn)+nn,o[Eo]=fd(e,sn)+nn,o[Kt]=a[Ni]=a[CE]=a[AE]="0",Ba(r),a[Mo]=a["max"+sl]=i[Mo],a[Eo]=a["max"+A_]=i[Eo],a[Kt]=i[Kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},mD=/([A-Z])/g,Ba=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||be.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(mD,"-$1").toLowerCase())}},$c=function(e){for(var t=Ef.length,i=e.style,r=[],s=0;s<t;s++)r.push(Ef[s],i[Ef[s]]);return r.t=e,r},gD=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Tf={left:0,top:0},gx=function(e,t,i,r,s,o,a,l,u,c,d,f,p,_){bn(e)&&(e=e(l)),hi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?yf("0"+e.substr(3),i):0));var g=p?p.time():0,m,h,v;if(p&&p.seek(0),isNaN(e)||(e=+e),zl(e))p&&(e=be.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&Sf(a,i,r,!0);else{bn(t)&&(t=t(l));var x=(e||"0").split(" "),y,C,w,M;v=Yn(t,l)||vt,y=Nr(v)||{},(!y||!y.left&&!y.top)&&Oi(v).display==="none"&&(M=v.style.display,v.style.display="block",y=Nr(v),M?v.style.display=M:v.style.removeProperty("display")),C=yf(x[0],y[r.d]),w=yf(x[1]||"0",i),e=y[r.p]-u[r.p]-c+C+s-w,a&&Sf(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var R=e+i,E=o._isStart;m="scroll"+r.d2,Sf(o,R,r,E&&R>20||!E&&(d?Math.max(vt[m],mi[m]):o.parentNode[m])<=R+1),d&&(u=Nr(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+nn))}return p&&v&&(m=Nr(v),p.seek(f),h=Nr(v),p._caScrollDist=m[r.p]-h[r.p],e=e/p._caScrollDist*f),p&&p.seek(g),p?e:Math.round(e)},_D=/(webkit|moz|length|cssText|inset)/i,_x=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===vt){e._stOrig=s.cssText,a=Oi(e);for(o in a)!+o&&!_D.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;be.core.getCache(e).uncache=1,t.appendChild(e)}},UE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},jc=function(e,t,i){var r={};r[t.p]="+="+i,be.set(e,r)},vx=function(e,t){var i=zs(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var f=o.tween,p=l.onComplete,_={};u=u||i();var g=UE(i,u,function(){f.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(u+c*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){at.cache++,o.tween&&Vr()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=be.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},fn(e,"wheel",i.wheelHandler),rt.isTouch&&fn(e,"touchmove",i.wheelHandler),s},rt=function(){function n(t,i){aa||n.register(be)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),$m(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Fl){this.update=this.refresh=this.kill=ur;return}i=fx(hi(i)||zl(i)||i.nodeType?{trigger:i}:i,Yc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,f=s.trigger,p=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,h=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,C=s.pinReparent,w=s.pinSpacer,M=s.containerAnimation,R=s.fastScrollEnd,E=s.preventOverlaps,S=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Hn:sn,L=!d&&d!==0,O=Yn(i.scroller||ot),z=be.core.getCache(O),X=Do(O),$=("pinType"in i?i.pinType:Ds(O,"pinType")||X&&"fixed")==="fixed",W=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],H=L&&i.toggleActions.split(" "),I="markers"in i?i.markers:Yc.markers,j=X?0:parseFloat(Oi(O)["border"+S.p2+sl])||0,P=this,ne=i.onRefreshInit&&function(){return i.onRefreshInit(P)},Me=aD(O,X,S),Ye=lD(O,X),q=0,ie=0,pe=0,ce=zs(O,S),Ee,Ie,qe,Je,D,de,ge,Te,oe,F,we,Ue,b,T,V,J,te,K,Ae,re,ae,De,se,_e,Oe,ke,ve,He,We,Ze,U,Z,Q,ee,ue,me,Xe,ft,nt;if(P._startClamp=P._endClamp=!1,P._dir=S,m*=45,P.scroller=O,P.scroll=M?M.time.bind(M):ce,Je=ce(),P.vars=i,r=r||i.animation,"refreshPriority"in i&&(vE=1,i.refreshPriority===-9999&&(lu=P)),z.tweenScroll=z.tweenScroll||{top:vx(O,sn),left:vx(O,Hn)},P.tweenTo=Ee=z.tweenScroll[S.p],P.scrubDuration=function(he){Q=zl(he)&&he,Q?Z?Z.duration(he):Z=be.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Q,paused:!0,onComplete:function(){return h&&h(P)}}):(Z&&Z.progress(1).kill(),Z=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(d),Ze=0,l||(l=r.vars.id)),y&&((!so(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in vt.style&&be.set(X?[vt,mi]:O,{scrollBehavior:"auto"}),at.forEach(function(he){return bn(he)&&he.target===(X?St.scrollingElement||mi:O)&&(he.smooth=!1)}),qe=bn(y.snapTo)?y.snapTo:y.snapTo==="labels"?cD(r):y.snapTo==="labelsDirectional"?fD(r):y.directional!==!1?function(he,Ge){return C_(y.snapTo)(he,Cn()-ie<500?0:Ge.direction)}:be.utils.snap(y.snapTo),ee=y.duration||{min:.1,max:2},ee=so(ee)?nu(ee.min,ee.max):nu(ee,ee),ue=be.delayedCall(y.delay||Q/2||.1,function(){var he=ce(),Ge=Cn()-ie<500,ze=Ee.tween;if((Ge||Math.abs(P.getVelocity())<10)&&!ze&&!Od&&q!==he){var $e=(he-de)/T,Nt=r&&!L?r.totalProgress():$e,st=Ge?0:(Nt-U)/(Cn()-Ol)*1e3||0,At=be.utils.clamp(-$e,1-$e,sa(st/2)*st/.185),en=$e+(y.inertia===!1?0:At),Pt,Ct,yt=y,ai=yt.onStart,A=yt.onInterrupt,N=yt.onComplete;if(Pt=qe(en,P),zl(Pt)||(Pt=en),Ct=Math.max(0,Math.round(de+Pt*T)),he<=ge&&he>=de&&Ct!==he){if(ze&&!ze._initted&&ze.data<=sa(Ct-he))return;y.inertia===!1&&(At=Pt-$e),Ee(Ct,{duration:ee(sa(Math.max(sa(en-Nt),sa(Pt-Nt))*.185/st/.05||0)),ease:y.ease||"power3",data:sa(Ct-he),onInterrupt:function(){return ue.restart(!0)&&A&&ra(P,A)},onComplete:function(){P.update(),q=ce(),r&&!L&&(Z?Z.resetTo("totalProgress",Pt,r._tTime/r._tDur):r.progress(Pt)),Ze=U=r&&!L?r.totalProgress():P.progress,v&&v(P),N&&ra(P,N)}},he,At*T,Ct-he-At*T),ai&&ra(P,ai,Ee.tween)}}else P.isActive&&q!==he&&ue.restart(!0)}).pause()),l&&(Km[l]=P),f=P.trigger=Yn(f||p!==!0&&p),nt=f&&f._gsap&&f._gsap.stRevert,nt&&(nt=nt(P)),p=p===!0?f:Yn(p),hi(a)&&(a={targets:f,className:a}),p&&(_===!1||_===Ni||(_=!_&&p.parentNode&&p.parentNode.style&&Oi(p.parentNode).display==="flex"?!1:Kt),P.pin=p,Ie=be.core.getCache(p),Ie.spacer?V=Ie.pinState:(w&&(w=Yn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ie.spacerIsNative=!!w,w&&(Ie.spacerState=$c(w))),Ie.spacer=K=w||St.createElement("div"),K.classList.add("pin-spacer"),l&&K.classList.add("pin-spacer-"+l),Ie.pinState=V=$c(p)),i.force3D!==!1&&be.set(p,{force3D:!0}),P.spacer=K=Ie.spacer,We=Oi(p),_e=We[_+S.os2],re=be.getProperty(p),ae=be.quickSetter(p,S.a,nn),Jh(p,K,We),te=$c(p)),I){Ue=so(I)?fx(I,dx):dx,F=qc("scroller-start",l,O,S,Ue,0),we=qc("scroller-end",l,O,S,Ue,0,F),Ae=F["offset"+S.op.d2];var je=Yn(Ds(O,"content")||O);Te=this.markerStart=qc("start",l,je,S,Ue,Ae,0,M),oe=this.markerEnd=qc("end",l,je,S,Ue,Ae,0,M),M&&(ft=be.quickSetter([Te,oe],S.a,nn)),!$&&!(Sr.length&&Ds(O,"fixedMarkers")===!0)&&(uD(X?vt:O),be.set([F,we],{force3D:!0}),ke=be.quickSetter(F,S.a,nn),He=be.quickSetter(we,S.a,nn))}if(M){var Ve=M.vars.onUpdate,Ne=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){P.update(0,0,1),Ve&&Ve.apply(M,Ne||[])})}if(P.previous=function(){return it[it.indexOf(P)-1]},P.next=function(){return it[it.indexOf(P)+1]},P.revert=function(he,Ge){if(!Ge)return P.kill(!0);var ze=he!==!1||!P.enabled,$e=An;ze!==P.isReverted&&(ze&&(me=Math.max(ce(),P.scroll.rec||0),pe=P.progress,Xe=r&&r.progress()),Te&&[Te,oe,F,we].forEach(function(Nt){return Nt.style.display=ze?"none":"block"}),ze&&(An=P,P.update(ze)),p&&(!C||!P.isActive)&&(ze?pD(p,K,V):Jh(p,K,Oi(p),Oe)),ze||P.update(ze),An=$e,P.isReverted=ze)},P.refresh=function(he,Ge,ze,$e){if(!((An||!P.enabled)&&!Ge)){if(p&&he&&Vi){fn(n,"scrollEnd",PE);return}!Bn&&ne&&ne(P),An=P,Ee.tween&&!ze&&(Ee.tween.kill(),Ee.tween=0),Z&&Z.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Le){return Le.vars.immediateRender&&Le.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Nt=Me(),st=Ye(),At=M?M.duration():_r(O,S),en=T<=.01||!T,Pt=0,Ct=$e||0,yt=so(ze)?ze.end:i.end,ai=i.endTrigger||f,A=so(ze)?ze.start:i.start||(i.start===0||!f?0:p?"0 0":"0 100%"),N=P.pinnedContainer=i.pinnedContainer&&Yn(i.pinnedContainer,P),G=f&&Math.max(0,it.indexOf(P))||0,B=G,k,le,ye,Re,xe,Ce,Be,Fe,dt,Et,ht,tn,ut;for(I&&so(ze)&&(tn=be.getProperty(F,S.p),ut=be.getProperty(we,S.p));B-- >0;)Ce=it[B],Ce.end||Ce.refresh(0,1)||(An=P),Be=Ce.pin,Be&&(Be===f||Be===p||Be===N)&&!Ce.isReverted&&(Et||(Et=[]),Et.unshift(Ce),Ce.revert(!0,!0)),Ce!==it[B]&&(G--,B--);for(bn(A)&&(A=A(P)),A=ax(A,"start",P),de=gx(A,f,Nt,S,ce(),Te,F,P,st,j,$,At,M,P._startClamp&&"_startClamp")||(p?-.001:0),bn(yt)&&(yt=yt(P)),hi(yt)&&!yt.indexOf("+=")&&(~yt.indexOf(" ")?yt=(hi(A)?A.split(" ")[0]:"")+yt:(Pt=yf(yt.substr(2),Nt),yt=hi(A)?A:(M?be.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,de):de)+Pt,ai=f)),yt=ax(yt,"end",P),ge=Math.max(de,gx(yt||(ai?"100% 0":At),ai,Nt,S,ce()+Pt,oe,we,P,st,j,$,At,M,P._endClamp&&"_endClamp"))||-.001,Pt=0,B=G;B--;)Ce=it[B]||{},Be=Ce.pin,Be&&Ce.start-Ce._pinPush<=de&&!M&&Ce.end>0&&(k=Ce.end-(P._startClamp?Math.max(0,Ce.start):Ce.start),(Be===f&&Ce.start-Ce._pinPush<de||Be===N)&&isNaN(A)&&(Pt+=k*(1-Ce.progress)),Be===p&&(Ct+=k));if(de+=Pt,ge+=Pt,P._startClamp&&(P._startClamp+=Pt),P._endClamp&&!Bn&&(P._endClamp=ge||-.001,ge=Math.min(ge,_r(O,S))),T=ge-de||(de-=.01)&&.001,en&&(pe=be.utils.clamp(0,1,be.utils.normalize(de,ge,me))),P._pinPush=Ct,Te&&Pt&&(k={},k[S.a]="+="+Pt,N&&(k[S.p]="-="+ce()),be.set([Te,oe],k)),p&&!(jm&&P.end>=_r(O,S)))k=Oi(p),Re=S===sn,ye=ce(),De=parseFloat(re(S.a))+Ct,!At&&ge>1&&(ht=(X?St.scrollingElement||mi:O).style,ht={style:ht,value:ht["overflow"+S.a.toUpperCase()]},X&&Oi(vt)["overflow"+S.a.toUpperCase()]!=="scroll"&&(ht.style["overflow"+S.a.toUpperCase()]="scroll")),Jh(p,K,k),te=$c(p),le=Nr(p,!0),Fe=$&&zs(O,Re?Hn:sn)(),_?(Oe=[_+S.os2,T+Ct+nn],Oe.t=K,B=_===Kt?fd(p,S)+T+Ct:0,B&&(Oe.push(S.d,B+nn),K.style.flexBasis!=="auto"&&(K.style.flexBasis=B+nn)),Ba(Oe),N&&it.forEach(function(Le){Le.pin===N&&Le.vars.pinSpacing!==!1&&(Le._subPinOffset=!0)}),$&&ce(me)):(B=fd(p,S),B&&K.style.flexBasis!=="auto"&&(K.style.flexBasis=B+nn)),$&&(xe={top:le.top+(Re?ye-de:Fe)+nn,left:le.left+(Re?Fe:ye-de)+nn,boxSizing:"border-box",position:"fixed"},xe[Mo]=xe["max"+sl]=Math.ceil(le.width)+nn,xe[Eo]=xe["max"+A_]=Math.ceil(le.height)+nn,xe[Ni]=xe[Ni+ou]=xe[Ni+ru]=xe[Ni+au]=xe[Ni+su]="0",xe[Kt]=k[Kt],xe[Kt+ou]=k[Kt+ou],xe[Kt+ru]=k[Kt+ru],xe[Kt+au]=k[Kt+au],xe[Kt+su]=k[Kt+su],J=gD(V,xe,C),Bn&&ce(0)),r?(dt=r._initted,jh(1),r.render(r.duration(),!0,!0),se=re(S.a)-De+T+Ct,ve=Math.abs(T-se)>1,$&&ve&&J.splice(J.length-2,2),r.render(0,!0,!0),dt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),jh(0)):se=T,ht&&(ht.value?ht.style["overflow"+S.a.toUpperCase()]=ht.value:ht.style.removeProperty("overflow-"+S.a));else if(f&&ce()&&!M)for(le=f.parentNode;le&&le!==vt;)le._pinOffset&&(de-=le._pinOffset,ge-=le._pinOffset),le=le.parentNode;Et&&Et.forEach(function(Le){return Le.revert(!1,!0)}),P.start=de,P.end=ge,Je=D=Bn?me:ce(),!M&&!Bn&&(Je<me&&ce(me),P.scroll.rec=0),P.revert(!1,!0),ie=Cn(),ue&&(q=-1,ue.restart(!0)),An=0,r&&L&&(r._initted||Xe)&&r.progress()!==Xe&&r.progress(Xe||0,!0).render(r.time(),!0,!0),(en||pe!==P.progress||M||g||r&&!r._initted)&&(r&&!L&&(r._initted||pe||r.vars.immediateRender!==!1)&&r.totalProgress(M&&de<-.001&&!pe?be.utils.normalize(de,ge,0):pe,!0),P.progress=en||(Je-de)/T===pe?0:pe),p&&_&&(K._pinOffset=Math.round(P.progress*se)),Z&&Z.invalidate(),isNaN(tn)||(tn-=be.getProperty(F,S.p),ut-=be.getProperty(we,S.p),jc(F,S,tn),jc(Te,S,tn-($e||0)),jc(we,S,ut),jc(oe,S,ut-($e||0))),en&&!Bn&&P.update(),c&&!Bn&&!b&&(b=!0,c(P),b=!1)}},P.getVelocity=function(){return(ce()-D)/(Cn()-Ol)*1e3||0},P.endAnimation=function(){Rl(P.callbackAnimation),r&&(Z?Z.progress(1):r.paused()?L||Rl(r,P.direction<0,1):Rl(r,r.reversed()))},P.labelToScroll=function(he){return r&&r.labels&&(de||P.refresh()||de)+r.labels[he]/r.duration()*T||0},P.getTrailing=function(he){var Ge=it.indexOf(P),ze=P.direction>0?it.slice(0,Ge).reverse():it.slice(Ge+1);return(hi(he)?ze.filter(function($e){return $e.vars.preventOverlaps===he}):ze).filter(function($e){return P.direction>0?$e.end<=de:$e.start>=ge})},P.update=function(he,Ge,ze){if(!(M&&!ze&&!he)){var $e=Bn===!0?me:P.scroll(),Nt=he?0:($e-de)/T,st=Nt<0?0:Nt>1?1:Nt||0,At=P.progress,en,Pt,Ct,yt,ai,A,N,G;if(Ge&&(D=Je,Je=M?ce():$e,y&&(U=Ze,Ze=r&&!L?r.totalProgress():st)),m&&p&&!An&&!Vc&&Vi&&(!st&&de<$e+($e-D)/(Cn()-Ol)*m?st=1e-4:st===1&&ge>$e+($e-D)/(Cn()-Ol)*m&&(st=.9999)),st!==At&&P.enabled){if(en=P.isActive=!!st&&st<1,Pt=!!At&&At<1,A=en!==Pt,ai=A||!!st!=!!At,P.direction=st>At?1:-1,P.progress=st,ai&&!An&&(Ct=st&&!At?0:st===1?1:At===1?2:3,L&&(yt=!A&&H[Ct+1]!=="none"&&H[Ct+1]||H[Ct],G=r&&(yt==="complete"||yt==="reset"||yt in r))),E&&(A||G)&&(G||d||!r)&&(bn(E)?E(P):P.getTrailing(E).forEach(function(ye){return ye.endAnimation()})),L||(Z&&!An&&!Vc?(Z._dp._time-Z._start!==Z._time&&Z.render(Z._dp._time-Z._start),Z.resetTo?Z.resetTo("totalProgress",st,r._tTime/r._tDur):(Z.vars.totalProgress=st,Z.invalidate().restart())):r&&r.totalProgress(st,!!(An&&(ie||he)))),p){if(he&&_&&(K.style[_+S.os2]=_e),!$)ae(kl(De+se*st));else if(ai){if(N=!he&&st>At&&ge+1>$e&&$e+1>=_r(O,S),C)if(!he&&(en||N)){var B=Nr(p,!0),k=$e-de;_x(p,vt,B.top+(S===sn?k:0)+nn,B.left+(S===sn?0:k)+nn)}else _x(p,K);Ba(en||N?J:te),ve&&st<1&&en||ae(De+(st===1&&!N?se:0))}}y&&!Ee.tween&&!An&&!Vc&&ue.restart(!0),a&&(A||x&&st&&(st<1||!Kh))&&Ou(a.targets).forEach(function(ye){return ye.classList[en||x?"add":"remove"](a.className)}),o&&!L&&!he&&o(P),ai&&!An?(L&&(G&&(yt==="complete"?r.pause().totalProgress(1):yt==="reset"?r.restart(!0).pause():yt==="restart"?r.restart(!0):r[yt]()),o&&o(P)),(A||!Kh)&&(u&&A&&ra(P,u),W[Ct]&&ra(P,W[Ct]),x&&(st===1?P.kill(!1,1):W[Ct]=0),A||(Ct=st===1?1:3,W[Ct]&&ra(P,W[Ct]))),R&&!en&&Math.abs(P.getVelocity())>(zl(R)?R:2500)&&(Rl(P.callbackAnimation),Z?Z.progress(1):Rl(r,yt==="reverse"?1:!st,1))):L&&o&&!An&&o(P)}if(He){var le=M?$e/M.duration()*(M._caScrollDist||0):$e;ke(le+(F._isFlipped?1:0)),He(le)}ft&&ft(-$e/M.duration()*(M._caScrollDist||0))}},P.enable=function(he,Ge){P.enabled||(P.enabled=!0,fn(O,"resize",Bl),X||fn(O,"scroll",oa),ne&&fn(n,"refreshInit",ne),he!==!1&&(P.progress=pe=0,Je=D=q=ce()),Ge!==!1&&P.refresh())},P.getTween=function(he){return he&&Ee?Ee.tween:Z},P.setPositions=function(he,Ge,ze,$e){if(M){var Nt=M.scrollTrigger,st=M.duration(),At=Nt.end-Nt.start;he=Nt.start+At*he/st,Ge=Nt.start+At*Ge/st}P.refresh(!1,!1,{start:lx(he,ze&&!!P._startClamp),end:lx(Ge,ze&&!!P._endClamp)},$e),P.update()},P.adjustPinSpacing=function(he){if(Oe&&he){var Ge=Oe.indexOf(S.d)+1;Oe[Ge]=parseFloat(Oe[Ge])+he+nn,Oe[1]=parseFloat(Oe[1])+he+nn,Ba(Oe)}},P.disable=function(he,Ge){if(he!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Ge||Z&&Z.pause(),me=0,Ie&&(Ie.uncache=1),ne&&cn(n,"refreshInit",ne),ue&&(ue.pause(),Ee.tween&&Ee.tween.kill()&&(Ee.tween=0)),!X)){for(var ze=it.length;ze--;)if(it[ze].scroller===O&&it[ze]!==P)return;cn(O,"resize",Bl),X||cn(O,"scroll",oa)}},P.kill=function(he,Ge){P.disable(he,Ge),Z&&!Ge&&Z.kill(),l&&delete Km[l];var ze=it.indexOf(P);ze>=0&&it.splice(ze,1),ze===zn&&Mf>0&&zn--,ze=0,it.forEach(function($e){return $e.scroller===P.scroller&&(ze=1)}),ze||Bn||(P.scroll.rec=0),r&&(r.scrollTrigger=null,he&&r.revert({kill:!1}),Ge||r.kill()),Te&&[Te,oe,F,we].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),lu===P&&(lu=0),p&&(Ie&&(Ie.uncache=1),ze=0,it.forEach(function($e){return $e.pin===p&&ze++}),ze||(Ie.spacer=0)),i.onKill&&i.onKill(P)},it.push(P),P.enable(!1,!1),nt&&nt(P),r&&r.add&&!T){var Qe=P.update;P.update=function(){P.update=Qe,at.cache++,de||ge||P.refresh()},be.delayedCall(.01,P.update),T=.01,de=ge=0}else P.refresh();p&&hD()},n.register=function(i){return aa||(be=i||EE(),ME()&&window.document&&n.enable(),aa=Fl),aa},n.defaults=function(i){if(i)for(var r in i)Yc[r]=i[r];return Yc},n.disable=function(i,r){Fl=0,it.forEach(function(o){return o[r?"kill":"disable"](i)}),cn(ot,"wheel",oa),cn(St,"scroll",oa),clearInterval(Hc),cn(St,"touchcancel",ur),cn(vt,"touchstart",ur),Wc(cn,St,"pointerdown,touchstart,mousedown",ux),Wc(cn,St,"pointerup,touchend,mouseup",cx),cd.kill(),Gc(cn);for(var s=0;s<at.length;s+=3)Xc(cn,at[s],at[s+1]),Xc(cn,at[s],at[s+2])},n.enable=function(){if(ot=window,St=document,mi=St.documentElement,vt=St.body,be){if(Ou=be.utils.toArray,nu=be.utils.clamp,$m=be.core.context||ur,jh=be.core.suppressOverwrites||ur,M_=ot.history.scrollRestoration||"auto",Zm=ot.pageYOffset||0,be.core.globals("ScrollTrigger",n),vt){Fl=1,za=document.createElement("div"),za.style.height="100vh",za.style.position="absolute",IE(),oD(),Yt.register(be),n.isTouch=Yt.isTouch,as=Yt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),qm=Yt.isTouch===1,fn(ot,"wheel",oa),S_=[ot,St,mi,vt],be.matchMedia?(n.matchMedia=function(c){var d=be.matchMedia(),f;for(f in c)d.add(f,c[f]);return d},be.addEventListener("matchMediaInit",function(){LE(),R_()}),be.addEventListener("matchMediaRevert",function(){return bE()}),be.addEventListener("matchMedia",function(){mo(0,1),Uo("matchMedia")}),be.matchMedia().add("(orientation: portrait)",function(){return Qh(),Qh})):console.warn("Requires GSAP 3.11.0 or later"),Qh(),fn(St,"scroll",oa);var i=vt.hasAttribute("style"),r=vt.style,s=r.borderTopStyle,o=be.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Nr(vt),sn.m=Math.round(a.top+sn.sc())||0,Hn.m=Math.round(a.left+Hn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(vt.setAttribute("style",""),vt.removeAttribute("style")),Hc=setInterval(hx,250),be.delayedCall(.5,function(){return Vc=0}),fn(St,"touchcancel",ur),fn(vt,"touchstart",ur),Wc(fn,St,"pointerdown,touchstart,mousedown",ux),Wc(fn,St,"pointerup,touchend,mouseup",cx),Ym=be.utils.checkPrefix("transform"),Ef.push(Ym),aa=Cn(),cd=be.delayedCall(.2,mo).pause(),la=[St,"visibilitychange",function(){var c=ot.innerWidth,d=ot.innerHeight;St.hidden?(sx=c,ox=d):(sx!==c||ox!==d)&&Bl()},St,"DOMContentLoaded",mo,ot,"load",mo,ot,"resize",Bl],Gc(fn),it.forEach(function(c){return c.enable(0,1)}),l=0;l<at.length;l+=3)Xc(cn,at[l],at[l+1]),Xc(cn,at[l],at[l+2])}else if(St){var u=function c(){n.enable(),St.removeEventListener("DOMContentLoaded",c)};St.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(Kh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Hc)||(Hc=r)&&setInterval(hx,r),"ignoreMobileResize"in i&&(qm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Gc(cn)||Gc(fn,i.autoRefreshEvents||"none"),xE=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Yn(i),o=at.indexOf(s),a=Do(s);~o&&at.splice(o,a?6:2),r&&(a?Sr.unshift(ot,r,vt,r,mi,r):Sr.unshift(s,r))},n.clearMatchMedia=function(i){it.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(hi(i)?Yn(i):i).getBoundingClientRect(),a=o[s?Mo:Eo]*r||0;return s?o.right-a>0&&o.left+a<ot.innerWidth:o.bottom-a>0&&o.top+a<ot.innerHeight},n.positionInViewport=function(i,r,s){hi(i)&&(i=Yn(i));var o=i.getBoundingClientRect(),a=o[s?Mo:Eo],l=r==null?a/2:r in dd?dd[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ot.innerWidth:(o.top+l)/ot.innerHeight},n.killAll=function(i){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Io.killAll||[];Io={},r.forEach(function(s){return s()})}},n}();rt.version="3.15.0";rt.saveStyles=function(n){return n?Ou(n).forEach(function(e){if(e&&e.style){var t=fi.indexOf(e);t>=0&&fi.splice(t,5),fi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),be.core.getCache(e),$m())}}):fi};rt.revert=function(n,e){return R_(!n,e)};rt.create=function(n,e){return new rt(n,e)};rt.refresh=function(n){return n?Bl(!0):(aa||rt.register())&&mo(!0)};rt.update=function(n){return++at.cache&&Vr(n===!0?2:0)};rt.clearScrollMemory=DE;rt.maxScroll=function(n,e){return _r(n,e?Hn:sn)};rt.getScrollFunc=function(n,e){return zs(Yn(n),e?Hn:sn)};rt.getById=function(n){return Km[n]};rt.getAll=function(){return it.filter(function(n){return n.vars.id!=="ScrollSmoother"})};rt.isScrolling=function(){return!!Vi};rt.snapDirectional=C_;rt.addEventListener=function(n,e){var t=Io[n]||(Io[n]=[]);~t.indexOf(e)||t.push(e)};rt.removeEventListener=function(n,e){var t=Io[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};rt.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],f=[],p=be.delayedCall(r,function(){c(d,f),d=[],f=[]}).pause();return function(_){d.length||p.restart(!0),d.push(_.trigger),f.push(_),s<=d.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&bn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return bn(s)&&(s=s(),fn(rt,"refresh",function(){return s=e.batchMax()})),Ou(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(rt.create(u))}),t};var xx=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},ep=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Yt.isTouch?" pinch-zoom":""):"none",e===mi&&n(vt,t)},Kc={auto:1,scroll:1},vD=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||be.core.getCache(s),a=Cn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==vt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Kc[(l=Oi(s)).overflowY]||Kc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Do(s)&&(Kc[(l=Oi(s)).overflowY]||Kc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},NE=function(e,t,i,r){return Yt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&vD,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&fn(St,Yt.eventTypes[0],Sx,!1,!0)},onDisable:function(){return cn(St,Yt.eventTypes[0],Sx,!0)}})},xD=/(input|label|select|textarea)/i,yx,Sx=function(e){var t=xD.test(e.target.tagName);(t||yx)&&(e._gsapAllow=!0,yx=t)},yD=function(e){so(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=Yn(e.target)||mi,c=be.core.globals().ScrollSmoother,d=c&&c.get(),f=as&&(e.content&&Yn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=zs(u,sn),_=zs(u,Hn),g=1,m=(Yt.isTouch&&ot.visualViewport?ot.visualViewport.scale*ot.visualViewport.width:ot.outerWidth)/ot.innerWidth,h=0,v=bn(r)?function(){return r(a)}:function(){return r||2.8},x,y,C=NE(u,e.type,!0,s),w=function(){return y=!1},M=ur,R=ur,E=function(){l=_r(u,sn),R=nu(as?1:0,l),i&&(M=nu(0,_r(u,Hn))),x=To},S=function(){f._gsap.y=kl(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},L=function(){if(y){requestAnimationFrame(w);var I=kl(a.deltaY/2),j=R(p.v-I);if(f&&j!==p.v+p.offset){p.offset=j-p.v;var P=kl((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",p.cacheID=at.cache,Vr()}return!0}p.offset&&S(),y=!0},O,z,X,$,W=function(){E(),O.isActive()&&O.vars.scrollY>l&&(p()>l?O.progress(1)&&p(l):O.resetTo("scrollY",l))};return f&&be.set(f,{y:"+=0"}),e.ignoreCheck=function(H){return as&&H.type==="touchmove"&&L()||g>1.05&&H.type!=="touchstart"||a.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){y=!1;var H=g;g=kl((ot.visualViewport&&ot.visualViewport.scale||1)/m),O.pause(),H!==g&&ep(u,g>1.01?!0:i?!1:"x"),z=_(),X=p(),E(),x=To},e.onRelease=e.onGestureStart=function(H,I){if(p.offset&&S(),!I)$.restart(!0);else{at.cache++;var j=v(),P,ne;i&&(P=_(),ne=P+j*.05*-H.velocityX/.227,j*=xx(_,P,ne,_r(u,Hn)),O.vars.scrollX=M(ne)),P=p(),ne=P+j*.05*-H.velocityY/.227,j*=xx(p,P,ne,_r(u,sn)),O.vars.scrollY=R(ne),O.invalidate().duration(j).play(.01),(as&&O.vars.scrollY>=l||P>=l-1)&&be.to({},{onUpdate:W,duration:j})}o&&o(H)},e.onWheel=function(){O._ts&&O.pause(),Cn()-h>1e3&&(x=0,h=Cn())},e.onChange=function(H,I,j,P,ne){if(To!==x&&E(),I&&i&&_(M(P[2]===I?z+(H.startX-H.x):_()+I-P[1])),j){p.offset&&S();var Me=ne[2]===j,Ye=Me?X+H.startY-H.y:p()+j-ne[1],q=R(Ye);Me&&Ye!==q&&(X+=q-Ye),p(q)}(j||I)&&Vr()},e.onEnable=function(){ep(u,i?!1:"x"),rt.addEventListener("refresh",W),fn(ot,"resize",W),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=_.smooth=!1),C.enable()},e.onDisable=function(){ep(u,!0),cn(ot,"resize",W),rt.removeEventListener("refresh",W),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new Yt(e),a.iOS=as,as&&!p()&&p(1),as&&be.ticker.add(ur),$=a._dc,O=be.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:UE(p,p(),function(){return O.pause()})},onUpdate:Vr,onComplete:$.vars.onComplete}),a};rt.sort=function(n){if(bn(n))return it.sort(n);var e=ot.pageYOffset||0;return rt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ot.innerHeight}),it.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};rt.observe=function(n){return new Yt(n)};rt.normalizeScroll=function(n){if(typeof n>"u")return Fn;if(n===!0&&Fn)return Fn.enable();if(n===!1){Fn&&Fn.kill(),Fn=n;return}var e=n instanceof Yt?n:yD(n);return Fn&&Fn.target===e.target&&Fn.kill(),Do(e.target)&&(Fn=e),e};rt.core={_getVelocityProp:Xm,_inputObserver:NE,_scrollers:at,_proxies:Sr,bridge:{ss:function(){Vi||Uo("scrollStart"),Vi=Cn()},ref:function(){return An}}};EE()&&be.registerPlugin(rt);const SD="/TANTRAVEDA/assets/portal-image-Bsyt2sr3.jpg";cE.registerPlugin(rt);const MD=()=>{const n=jt.useRef(null),e=jt.useRef(null),t=jt.useRef(null),i=jt.useRef(null),r=jt.useRef([]),s=jt.useRef(null),o=jt.useRef({x:0,y:0,targetX:0,targetY:0,hasMoved:!1}),a=jt.useRef({current:0,target:0}),l=jt.useRef(null),u=jt.useRef({active:!1,progress:0,direction:1,startTime:0,duration:1.4}),c=jt.useRef(-1),d=jt.useRef(0),f=jt.useRef(null),p=jt.useRef({current:0,target:0}),_={fiberCount:160,segmentsPerFiber:150,waveWidth:30,waveHeight:7},g=window.matchMedia("(prefers-reduced-motion: reduce)").matches,m=(C,w,M)=>C+(w-C)*M,h=C=>C*C*(3-2*C),v=C=>1-Math.pow(1-C,3),x=C=>C*C*C*(C*(C*6-15)+10),y=(C,w)=>{const M=Math.floor(C),R=Math.floor(w),E=C-M,S=w-R,L=E*E*(3-2*E),O=S*S*(3-2*S),z=(I,j)=>{const P=Math.sin(I*374761393+j*668265263)*43758.5453;return P-Math.floor(P)},X=z(M,R),$=z(M+1,R),W=z(M,R+1),H=z(M+1,R+1);return m(m(X,$,L),m(W,H,L),O)};return jt.useEffect(()=>{if(!n.current)return;const C=new R2;e.current=C;const w=new Ui(60,window.innerWidth/window.innerHeight,.1,1e3);w.position.set(0,0,28),t.current=w;const M=new C2({antialias:!0,alpha:!0,powerPreference:"high-performance"});M.setSize(window.innerWidth,window.innerHeight),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.current.appendChild(M.domElement),i.current=M;const E=(()=>{const de=document.createElement("canvas");de.width=1920,de.height=1080;const ge=de.getContext("2d"),Te=ge.createLinearGradient(0,0,de.width,de.height);return Te.addColorStop(0,"#4a148c"),Te.addColorStop(.5,"#880e4f"),Te.addColorStop(1,"#1a237e"),ge.fillStyle=Te,ge.fillRect(0,0,de.width,de.height),new D2(de)})();new O2().load(SD,de=>{f.current&&(f.current.material.uniforms.uTexture.value=de,de.image&&f.current.material.uniforms.uImageResolution.value.set(de.image.width,de.image.height))},void 0,()=>{console.log("Portal image not found, using placeholder.")});const L=33,O=60*Math.PI/180,z=2*Math.tan(O/2)*L,X=window.innerWidth/window.innerHeight,$=z*X,W=new Ja($,z),H=new Mr({uniforms:{uTexture:{value:E},uImageResolution:{value:new gt(1920,1080)},uMousePos:{value:new gt(0,0)},uMouseActive:{value:0},uInnerRadius:{value:3},uOuterRadius:{value:6},uResolution:{value:new gt(window.innerWidth,window.innerHeight)},uTime:{value:0}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1}),I=new mr(W,H);I.position.z=-5,C.add(I),f.current=I;class j{constructor(ge,Te){this.index=ge,this.totalFibers=Te,this.normalizedY=ge/Te,this.baseY=(this.normalizedY-.5)*_.waveHeight,this.timeOffset=Math.random()*Math.PI*2,this.spatialOffset=Math.random()*50,this.speed=.7+Math.random()*.3;const oe=Math.random();oe<.4?this.color=new pt(9133302):oe<.7?this.color=new pt(10980346):oe<.92?this.color=new pt(8246268):this.color=new pt(12891645);const F=Math.abs(this.normalizedY-.5)*2;this.baseOpacity=.5+(1-F)*.4,this.depthLayer=Math.sin(this.normalizedY*Math.PI)*.5+.5,this.points=[],this.basePoints=[];for(let we=0;we<_.segmentsPerFiber;we++)this.points.push(new Y),this.basePoints.push(new Y)}calculateBasePositions(ge,Te,oe){const F=ge*.2*this.speed,we=Te;let Ue=1/0;const b=Math.floor(we),T=Math.min(b+1,6),V=we-b,J=x(Math.max(0,Math.min(V,1))),te=re=>{const ae=m(1.2,1.8,.5+Math.sin(re*Math.PI*.4)*.5),De=m(1.5,2.2,h(Math.sin(re*Math.PI*.3)*.5+.5)),se=x(Math.max(0,Math.min(re/2.5,1))),ke=Math.abs(re-2.4)/1.5,ve=1-x(Math.max(0,Math.min(ke,1))),Ze=Math.abs(re-3)/2.5,U=1-x(Math.max(0,Math.min(Ze,1))),Z=x(Math.max(0,Math.min((re-4.5)/1.2,1))),Q=x(Math.max(0,Math.min((re-5.5)/1.2,1)));return{baseAmplitude:ae,waveFrequency:De,verticalBend:se,convergeStrength:ve,crossStrength:U,diagonalStrength:Z,expansionStrength:Q}},K=te(b),Ae=te(T);for(let re=0;re<_.segmentsPerFiber;re++){const ae=re/_.segmentsPerFiber,De=.6,se=y(ae*De+this.spatialOffset,F*.15+this.timeOffset*.1)*.5,_e=y(ae*De+this.spatialOffset+50,F*.12+this.timeOffset*.1)*.25,Oe=y(ae*De+this.spatialOffset+100,F*.18+this.timeOffset*.1)*.8;let ke=0,ve=0,He=0,We=0,Ze=0,U=0;const Z=(me,Xe)=>{let ft=(ae-.5)*_.waveWidth,nt=this.baseY,je=this.depthLayer*1.5;const Ve=Math.sin(ae*Math.PI*me.waveFrequency+F+this.timeOffset)*me.baseAmplitude,Ne=Math.sin(ae*Math.PI*me.waveFrequency*1.6+F*.6+this.timeOffset+Math.PI/3)*me.baseAmplitude*.35;if(nt+=Ve+Ne,je+=Math.sin(ae*Math.PI*2.5+F*.5+this.timeOffset)*1.8,ft+=se,nt+=_e,je+=Oe,me.verticalBend>0){const Qe=Math.sin((ae-.5)*Math.PI*1.2)*2.8;nt+=Qe*me.verticalBend}if(me.convergeStrength>0){const he=1-(1-Math.abs(ae-.5)*2)*.55*me.convergeStrength;nt*=he;const Ge=Math.sin(ae*Math.PI*2+F*.4)*.8;je+=Ge*me.convergeStrength}if(me.crossStrength>0){const Qe=(this.normalizedY-.5)*2,he=h(me.crossStrength),Ge=Qe*ae*4.5*he;nt+=Ge;const ze=Math.sin(ae*Math.PI*1.8+F*.4)*2.5;je+=ze*he;const $e=Math.cos(ae*Math.PI*2+F*.3)*1.2;je+=$e*he*.5}if(me.diagonalStrength>0){const Qe=ae*3*me.diagonalStrength;nt+=Qe-1.5*me.diagonalStrength;const he=Math.sin(ae*Math.PI*2+F+this.timeOffset)*1.5;nt+=he*(1-me.diagonalStrength*.4)}if(me.expansionStrength>0){nt*=1+me.expansionStrength*.2;const Qe=Math.sin(ae*Math.PI*1.6+F*.4+this.timeOffset)*2;nt+=Qe*me.expansionStrength;const he=Math.sin(ae*Math.PI*2+F*.35)*3;je+=he*me.expansionStrength}Xe?(ke=ft,ve=nt,He=je):(We=ft,Ze=nt,U=je)};Z(K,!0),Z(Ae,!1);const Q=m(ke,We,J),ee=m(ve,Ze,J),ue=m(He,U,J);if(this.basePoints[re].set(Q,ee,ue),oe.active){const me=Q-oe.x,Xe=ee-oe.y,ft=Math.sqrt(me*me+Xe*Xe);ft<Ue&&(Ue=ft)}}return Ue}applyDisplacementAndEnergy(ge,Te,oe){for(let F=0;F<_.segmentsPerFiber;F++){let we=this.basePoints[F].x,Ue=this.basePoints[F].y,b=this.basePoints[F].z;if(ge>0&&Te.active){const T=we-Te.x,V=Ue-Te.y,J=Math.sqrt(T*T+V*V);if(J<12){const K=h(1-J/12)*2.2*ge,Ae=Math.atan2(V,T);we+=Math.cos(Ae)*K,Ue+=Math.sin(Ae)*K,b+=K*.5}}this.points[F].set(we,Ue,b)}}}const P=[];for(let de=0;de<_.fiberCount;de++)P.push(new j(de,_.fiberCount));r.current=P;const ne=new Qr,Me=[],Ye=[],q=[],ie=[];let pe=0;P.forEach(de=>{de.points.forEach((ge,Te)=>{Me.push(ge.x,ge.y,ge.z),Ye.push(de.color.r,de.color.g,de.color.b);const oe=Math.sin(Te/_.segmentsPerFiber*Math.PI);q.push(de.baseOpacity*oe),Te<_.segmentsPerFiber-1&&ie.push(pe,pe+1),pe++})}),ne.setAttribute("position",new xi(Me,3)),ne.setAttribute("color",new xi(Ye,3)),ne.setAttribute("opacity",new xi(q,1)),ne.setAttribute("energyBoost",new xi(new Array(Me.length/3).fill(0),1)),ne.setIndex(ie);const ce=new Mr({vertexShader:`
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
      `,transparent:!0,blending:$p,depthWrite:!1,vertexColors:!0}),Ee=new L2(ne,ce);C.add(Ee),s.current=Ee;const Ie=de=>{o.current.hasMoved=!0,o.current.targetX=de.clientX/window.innerWidth*2-1,o.current.targetY=-(de.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",Ie);let qe=0;rt.create({trigger:"body",start:"top top",end:"bottom bottom",scrub:1.2,onUpdate:de=>{a.current.target=de.progress*6;const ge=window.scrollY,Te=ge>qe?1:-1;qe=ge,d.current=Te;const oe=Math.floor(de.progress*6);if(oe!==c.current&&oe>=0&&oe<=5){const F=u.current;F.active||(F.active=!0,F.progress=0,F.direction=Te,F.startTime=Date.now()*.001),c.current=oe}}});const Je=()=>{if(w.aspect=window.innerWidth/window.innerHeight,w.updateProjectionMatrix(),M.setSize(window.innerWidth,window.innerHeight),f.current){const ge=60*Math.PI/180,Te=2*Math.tan(ge/2)*33,oe=Te*w.aspect;f.current.geometry.dispose(),f.current.geometry=new Ja(oe,Te),f.current.material.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight)}};window.addEventListener("resize",Je);const D=()=>{if(l.current=requestAnimationFrame(D),g){M.render(C,w);return}const de=Date.now()*.001,ge=o.current,Te=a.current,oe=u.current,F=f.current,we=p.current;if(oe.active){const se=de-oe.startTime;oe.progress=Math.min(se/oe.duration,1);const _e=v(oe.progress);oe.progress=_e,se>=oe.duration&&(oe.active=!1,oe.progress=0)}Te.current=m(Te.current,Te.target,.12),ge.x=m(ge.x,ge.targetX,.12),ge.y=m(ge.y,ge.targetY,.12);const Ue=ge.x*1.2,b=ge.y*1.2;w.position.x=m(w.position.x,Ue,.06),w.position.y=m(w.position.y,b,.06),w.lookAt(0,0,0),w.updateMatrixWorld();const T=new Y(ge.targetX,ge.targetY,.5);T.unproject(w);const V=T.sub(w.position).normalize(),J=-w.position.z/V.z,te=w.position.clone().add(V.multiplyScalar(J)),K={active:ge.hasMoved,x:te.x,y:te.y};let Ae=1/0;P.forEach(se=>{const _e=se.calculateBasePositions(de,Te.current,K);K.active&&_e<Ae&&(Ae=_e)});const re=3.5;let ae=0;if(K.active&&Ae<re){const se=Ae/re;ae=1-h(se)}we.current=ae;let De=0;P.forEach(se=>{se.applyDisplacementAndEnergy(ae,K,oe),se.points.forEach((_e,Oe)=>{const ke=De*3;Ee.geometry.attributes.position.array[ke]=_e.x,Ee.geometry.attributes.position.array[ke+1]=_e.y,Ee.geometry.attributes.position.array[ke+2]=_e.z;let ve=0;if(oe.active){const He=Oe/(_.segmentsPerFiber-1),Ze=(oe.direction>0?oe.progress:1-oe.progress)*1.3-.15,U=He-Ze,Z=oe.direction>0?U<0:U>0,Q=Math.abs(U),me=Z?.08:.03;if(ve=Math.exp(-(Q*Q)/(me*me)),oe.direction>0){if(Ze>.9){const Xe=Math.max(0,1-(Ze-.9)/.15);ve*=Xe}}else if(Ze<.1){const Xe=Math.max(0,(Ze+.05)/.15);ve*=Xe}}Ee.geometry.attributes.energyBoost.array[De]=ve,De++})}),Ee.geometry.attributes.position.needsUpdate=!0,Ee.geometry.attributes.energyBoost.needsUpdate=!0,F&&(F.material.uniforms.uMousePos.value.set(K.x,K.y),F.material.uniforms.uMouseActive.value=ae,F.material.uniforms.uTime.value=de),M.render(C,w)};return D(),()=>{l.current&&cancelAnimationFrame(l.current),window.removeEventListener("mousemove",Ie),window.removeEventListener("resize",Je),rt.getAll().forEach(de=>de.kill()),n.current&&M.domElement&&n.current.removeChild(M.domElement),ne.dispose(),ce.dispose(),M.dispose()}},[]),Ke.jsx("div",{id:"canvas-container",ref:n})};function ED(){return Ke.jsxs(Ke.Fragment,{children:[Ke.jsx(MD,{}),Ke.jsx(uw,{}),Ke.jsxs("div",{className:"content",children:[Ke.jsx(pw,{}),Ke.jsx(mw,{}),Ke.jsx(gw,{}),Ke.jsx(_w,{}),Ke.jsx(vw,{}),Ke.jsx(xw,{})]})]})}US(document.getElementById("root")).render(Ke.jsx(jt.StrictMode,{children:Ke.jsx(ED,{})}));
