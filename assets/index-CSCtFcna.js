(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var xx={exports:{}},dd={},yx={exports:{}},rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu=Symbol.for("react.element"),UE=Symbol.for("react.portal"),NE=Symbol.for("react.fragment"),OE=Symbol.for("react.strict_mode"),FE=Symbol.for("react.profiler"),kE=Symbol.for("react.provider"),zE=Symbol.for("react.context"),BE=Symbol.for("react.forward_ref"),HE=Symbol.for("react.suspense"),VE=Symbol.for("react.memo"),GE=Symbol.for("react.lazy"),Rg=Symbol.iterator;function WE(n){return n===null||typeof n!="object"?null:(n=Rg&&n[Rg]||n["@@iterator"],typeof n=="function"?n:null)}var Sx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mx=Object.assign,Ex={};function sl(n,e,t){this.props=n,this.context=e,this.refs=Ex,this.updater=t||Sx}sl.prototype.isReactComponent={};sl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};sl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Tx(){}Tx.prototype=sl.prototype;function Zm(n,e,t){this.props=n,this.context=e,this.refs=Ex,this.updater=t||Sx}var Qm=Zm.prototype=new Tx;Qm.constructor=Zm;Mx(Qm,sl.prototype);Qm.isPureReactComponent=!0;var Pg=Array.isArray,wx=Object.prototype.hasOwnProperty,Jm={current:null},Ax={key:!0,ref:!0,__self:!0,__source:!0};function Cx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)wx.call(e,i)&&!Ax.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Fu,type:n,key:s,ref:o,props:r,_owner:Jm.current}}function XE(n,e){return{$$typeof:Fu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function e_(n){return typeof n=="object"&&n!==null&&n.$$typeof===Fu}function YE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var bg=/\/+/g;function zd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?YE(""+n.key):e.toString(36)}function Kc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Fu:case UE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+zd(o,0):i,Pg(r)?(t="",n!=null&&(t=n.replace(bg,"$&/")+"/"),Kc(r,e,t,"",function(u){return u})):r!=null&&(e_(r)&&(r=XE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(bg,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Pg(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+zd(s,a);o+=Kc(s,e,t,l,r)}else if(l=WE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+zd(s,a++),o+=Kc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ju(n,e,t){if(n==null)return n;var i=[],r=0;return Kc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function qE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Gn={current:null},Zc={transition:null},$E={ReactCurrentDispatcher:Gn,ReactCurrentBatchConfig:Zc,ReactCurrentOwner:Jm};function Rx(){throw Error("act(...) is not supported in production builds of React.")}rt.Children={map:ju,forEach:function(n,e,t){ju(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ju(n,function(){e++}),e},toArray:function(n){return ju(n,function(e){return e})||[]},only:function(n){if(!e_(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};rt.Component=sl;rt.Fragment=NE;rt.Profiler=FE;rt.PureComponent=Zm;rt.StrictMode=OE;rt.Suspense=HE;rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$E;rt.act=Rx;rt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Mx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)wx.call(e,l)&&!Ax.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Fu,type:n.type,key:r,ref:s,props:i,_owner:o}};rt.createContext=function(n){return n={$$typeof:zE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:kE,_context:n},n.Consumer=n};rt.createElement=Cx;rt.createFactory=function(n){var e=Cx.bind(null,n);return e.type=n,e};rt.createRef=function(){return{current:null}};rt.forwardRef=function(n){return{$$typeof:BE,render:n}};rt.isValidElement=e_;rt.lazy=function(n){return{$$typeof:GE,_payload:{_status:-1,_result:n},_init:qE}};rt.memo=function(n,e){return{$$typeof:VE,type:n,compare:e===void 0?null:e}};rt.startTransition=function(n){var e=Zc.transition;Zc.transition={};try{n()}finally{Zc.transition=e}};rt.unstable_act=Rx;rt.useCallback=function(n,e){return Gn.current.useCallback(n,e)};rt.useContext=function(n){return Gn.current.useContext(n)};rt.useDebugValue=function(){};rt.useDeferredValue=function(n){return Gn.current.useDeferredValue(n)};rt.useEffect=function(n,e){return Gn.current.useEffect(n,e)};rt.useId=function(){return Gn.current.useId()};rt.useImperativeHandle=function(n,e,t){return Gn.current.useImperativeHandle(n,e,t)};rt.useInsertionEffect=function(n,e){return Gn.current.useInsertionEffect(n,e)};rt.useLayoutEffect=function(n,e){return Gn.current.useLayoutEffect(n,e)};rt.useMemo=function(n,e){return Gn.current.useMemo(n,e)};rt.useReducer=function(n,e,t){return Gn.current.useReducer(n,e,t)};rt.useRef=function(n){return Gn.current.useRef(n)};rt.useState=function(n){return Gn.current.useState(n)};rt.useSyncExternalStore=function(n,e,t){return Gn.current.useSyncExternalStore(n,e,t)};rt.useTransition=function(){return Gn.current.useTransition()};rt.version="18.3.1";yx.exports=rt;var un=yx.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jE=un,KE=Symbol.for("react.element"),ZE=Symbol.for("react.fragment"),QE=Object.prototype.hasOwnProperty,JE=jE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,e1={key:!0,ref:!0,__self:!0,__source:!0};function Px(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)QE.call(e,i)&&!e1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:KE,type:n,key:s,ref:o,props:r,_owner:JE.current}}dd.Fragment=ZE;dd.jsx=Px;dd.jsxs=Px;xx.exports=dd;var Xe=xx.exports,bx={exports:{}},Ci={},Lx={exports:{}},Dx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,$){var P=I.length;I.push($);e:for(;0<P;){var ie=P-1>>>1,Me=I[ie];if(0<r(Me,$))I[ie]=$,I[P]=Me,P=ie;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var $=I[0],P=I.pop();if(P!==$){I[0]=P;e:for(var ie=0,Me=I.length,Ge=Me>>>1;ie<Ge;){var q=2*(ie+1)-1,ne=I[q],de=q+1,ue=I[de];if(0>r(ne,P))de<Me&&0>r(ue,ne)?(I[ie]=ue,I[de]=P,ie=de):(I[ie]=ne,I[q]=P,ie=q);else if(de<Me&&0>r(ue,P))I[ie]=ue,I[de]=P,ie=de;else break e}}return $}function r(I,$){var P=I.sortIndex-$.sortIndex;return P!==0?P:I.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var $=t(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=I)i(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=t(u)}}function y(I){if(_=!1,x(I),!g)if(t(l)!==null)g=!0,W(C);else{var $=t(u);$!==null&&B(y,$.startTime-I)}}function C(I,$){g=!1,_&&(_=!1,d(R),R=-1),p=!0;var P=f;try{for(x($),h=t(l);h!==null&&(!(h.expirationTime>$)||I&&!D());){var ie=h.callback;if(typeof ie=="function"){h.callback=null,f=h.priorityLevel;var Me=ie(h.expirationTime<=$);$=n.unstable_now(),typeof Me=="function"?h.callback=Me:h===t(l)&&i(l),x($)}else i(l);h=t(l)}if(h!==null)var Ge=!0;else{var q=t(u);q!==null&&B(y,q.startTime-$),Ge=!1}return Ge}finally{h=null,f=P,p=!1}}var w=!1,M=null,R=-1,E=5,S=-1;function D(){return!(n.unstable_now()-S<E)}function U(){if(M!==null){var I=n.unstable_now();S=I;var $=!0;try{$=M(!0,I)}finally{$?k():(w=!1,M=null)}}else w=!1}var k;if(typeof v=="function")k=function(){v(U)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,j=X.port2;X.port1.onmessage=U,k=function(){j.postMessage(null)}}else k=function(){m(U,0)};function W(I){M=I,w||(w=!0,k())}function B(I,$){R=m(function(){I(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,W(C))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var P=f;f=$;try{return I()}finally{f=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,$){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var P=f;f=I;try{return $()}finally{f=P}},n.unstable_scheduleCallback=function(I,$,P){var ie=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ie+P:ie):P=ie,I){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=P+Me,I={id:c++,callback:$,priorityLevel:I,startTime:P,expirationTime:Me,sortIndex:-1},P>ie?(I.sortIndex=P,e(u,I),t(l)===null&&I===t(u)&&(_?(d(R),R=-1):_=!0,B(y,P-ie))):(I.sortIndex=Me,e(l,I),g||p||(g=!0,W(C))),I},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(I){var $=f;return function(){var P=f;f=$;try{return I.apply(this,arguments)}finally{f=P}}}})(Dx);Lx.exports=Dx;var t1=Lx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n1=un,Ti=t1;function fe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ix=new Set,lu={};function Uo(n,e){Ba(n,e),Ba(n+"Capture",e)}function Ba(n,e){for(lu[n]=e,n=0;n<e.length;n++)Ix.add(e[n])}var Vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ep=Object.prototype.hasOwnProperty,i1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lg={},Dg={};function r1(n){return ep.call(Dg,n)?!0:ep.call(Lg,n)?!1:i1.test(n)?Dg[n]=!0:(Lg[n]=!0,!1)}function s1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function o1(n,e,t,i){if(e===null||typeof e>"u"||s1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Sn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Sn[n]=new Wn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Sn[e]=new Wn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Sn[n]=new Wn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Sn[n]=new Wn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Sn[n]=new Wn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Sn[n]=new Wn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Sn[n]=new Wn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Sn[n]=new Wn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Sn[n]=new Wn(n,5,!1,n.toLowerCase(),null,!1,!1)});var t_=/[\-:]([a-z])/g;function n_(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(t_,n_);Sn[e]=new Wn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(t_,n_);Sn[e]=new Wn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(t_,n_);Sn[e]=new Wn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Sn[n]=new Wn(n,1,!1,n.toLowerCase(),null,!1,!1)});Sn.xlinkHref=new Wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Sn[n]=new Wn(n,1,!1,n.toLowerCase(),null,!0,!0)});function i_(n,e,t,i){var r=Sn.hasOwnProperty(e)?Sn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(o1(e,t,r,i)&&(t=null),i||r===null?r1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Kr=n1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ku=Symbol.for("react.element"),la=Symbol.for("react.portal"),ua=Symbol.for("react.fragment"),r_=Symbol.for("react.strict_mode"),tp=Symbol.for("react.profiler"),Ux=Symbol.for("react.provider"),Nx=Symbol.for("react.context"),s_=Symbol.for("react.forward_ref"),np=Symbol.for("react.suspense"),ip=Symbol.for("react.suspense_list"),o_=Symbol.for("react.memo"),as=Symbol.for("react.lazy"),Ox=Symbol.for("react.offscreen"),Ig=Symbol.iterator;function cl(n){return n===null||typeof n!="object"?null:(n=Ig&&n[Ig]||n["@@iterator"],typeof n=="function"?n:null)}var Ht=Object.assign,Bd;function Rl(n){if(Bd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Bd=e&&e[1]||""}return`
`+Bd+n}var Hd=!1;function Vd(n,e){if(!n||Hd)return"";Hd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Rl(n):""}function a1(n){switch(n.tag){case 5:return Rl(n.type);case 16:return Rl("Lazy");case 13:return Rl("Suspense");case 19:return Rl("SuspenseList");case 0:case 2:case 15:return n=Vd(n.type,!1),n;case 11:return n=Vd(n.type.render,!1),n;case 1:return n=Vd(n.type,!0),n;default:return""}}function rp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ua:return"Fragment";case la:return"Portal";case tp:return"Profiler";case r_:return"StrictMode";case np:return"Suspense";case ip:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Nx:return(n.displayName||"Context")+".Consumer";case Ux:return(n._context.displayName||"Context")+".Provider";case s_:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case o_:return e=n.displayName||null,e!==null?e:rp(n.type)||"Memo";case as:e=n._payload,n=n._init;try{return rp(n(e))}catch{}}return null}function l1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rp(e);case 8:return e===r_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ds(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fx(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function u1(n){var e=Fx(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Zu(n){n._valueTracker||(n._valueTracker=u1(n))}function kx(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Fx(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Tf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function sp(n,e){var t=e.checked;return Ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Ug(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ds(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zx(n,e){e=e.checked,e!=null&&i_(n,"checked",e,!1)}function op(n,e){zx(n,e);var t=Ds(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?ap(n,e.type,t):e.hasOwnProperty("defaultValue")&&ap(n,e.type,Ds(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Ng(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function ap(n,e,t){(e!=="number"||Tf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Pl=Array.isArray;function Ta(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ds(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function lp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(fe(91));return Ht({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Og(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(fe(92));if(Pl(t)){if(1<t.length)throw Error(fe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ds(t)}}function Bx(n,e){var t=Ds(e.value),i=Ds(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Fg(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Hx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function up(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Hx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Qu,Vx=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Qu=Qu||document.createElement("div"),Qu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function uu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Bl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},c1=["Webkit","ms","Moz","O"];Object.keys(Bl).forEach(function(n){c1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Bl[e]=Bl[n]})});function Gx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Bl.hasOwnProperty(n)&&Bl[n]?(""+e).trim():e+"px"}function Wx(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Gx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var f1=Ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cp(n,e){if(e){if(f1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(fe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(fe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(fe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(fe(62))}}function fp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dp=null;function a_(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var hp=null,wa=null,Aa=null;function kg(n){if(n=Bu(n)){if(typeof hp!="function")throw Error(fe(280));var e=n.stateNode;e&&(e=gd(e),hp(n.stateNode,n.type,e))}}function Xx(n){wa?Aa?Aa.push(n):Aa=[n]:wa=n}function Yx(){if(wa){var n=wa,e=Aa;if(Aa=wa=null,kg(n),e)for(n=0;n<e.length;n++)kg(e[n])}}function qx(n,e){return n(e)}function $x(){}var Gd=!1;function jx(n,e,t){if(Gd)return n(e,t);Gd=!0;try{return qx(n,e,t)}finally{Gd=!1,(wa!==null||Aa!==null)&&($x(),Yx())}}function cu(n,e){var t=n.stateNode;if(t===null)return null;var i=gd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(fe(231,e,typeof t));return t}var pp=!1;if(Vr)try{var fl={};Object.defineProperty(fl,"passive",{get:function(){pp=!0}}),window.addEventListener("test",fl,fl),window.removeEventListener("test",fl,fl)}catch{pp=!1}function d1(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Hl=!1,wf=null,Af=!1,mp=null,h1={onError:function(n){Hl=!0,wf=n}};function p1(n,e,t,i,r,s,o,a,l){Hl=!1,wf=null,d1.apply(h1,arguments)}function m1(n,e,t,i,r,s,o,a,l){if(p1.apply(this,arguments),Hl){if(Hl){var u=wf;Hl=!1,wf=null}else throw Error(fe(198));Af||(Af=!0,mp=u)}}function No(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Kx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function zg(n){if(No(n)!==n)throw Error(fe(188))}function _1(n){var e=n.alternate;if(!e){if(e=No(n),e===null)throw Error(fe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return zg(r),n;if(s===i)return zg(r),e;s=s.sibling}throw Error(fe(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(fe(189))}}if(t.alternate!==i)throw Error(fe(190))}if(t.tag!==3)throw Error(fe(188));return t.stateNode.current===t?n:e}function Zx(n){return n=_1(n),n!==null?Qx(n):null}function Qx(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Qx(n);if(e!==null)return e;n=n.sibling}return null}var Jx=Ti.unstable_scheduleCallback,Bg=Ti.unstable_cancelCallback,g1=Ti.unstable_shouldYield,v1=Ti.unstable_requestPaint,Xt=Ti.unstable_now,x1=Ti.unstable_getCurrentPriorityLevel,l_=Ti.unstable_ImmediatePriority,ey=Ti.unstable_UserBlockingPriority,Cf=Ti.unstable_NormalPriority,y1=Ti.unstable_LowPriority,ty=Ti.unstable_IdlePriority,hd=null,gr=null;function S1(n){if(gr&&typeof gr.onCommitFiberRoot=="function")try{gr.onCommitFiberRoot(hd,n,void 0,(n.current.flags&128)===128)}catch{}}var nr=Math.clz32?Math.clz32:T1,M1=Math.log,E1=Math.LN2;function T1(n){return n>>>=0,n===0?32:31-(M1(n)/E1|0)|0}var Ju=64,ec=4194304;function bl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Rf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=bl(a):(s&=o,s!==0&&(i=bl(s)))}else o=t&~r,o!==0?i=bl(o):s!==0&&(i=bl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-nr(e),r=1<<t,i|=n[t],e&=~r;return i}function w1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-nr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=w1(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function _p(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ny(){var n=Ju;return Ju<<=1,!(Ju&4194240)&&(Ju=64),n}function Wd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ku(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-nr(e),n[e]=t}function C1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-nr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function u_(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-nr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var St=0;function iy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var ry,c_,sy,oy,ay,gp=!1,tc=[],xs=null,ys=null,Ss=null,fu=new Map,du=new Map,us=[],R1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hg(n,e){switch(n){case"focusin":case"focusout":xs=null;break;case"dragenter":case"dragleave":ys=null;break;case"mouseover":case"mouseout":Ss=null;break;case"pointerover":case"pointerout":fu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":du.delete(e.pointerId)}}function dl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Bu(e),e!==null&&c_(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function P1(n,e,t,i,r){switch(e){case"focusin":return xs=dl(xs,n,e,t,i,r),!0;case"dragenter":return ys=dl(ys,n,e,t,i,r),!0;case"mouseover":return Ss=dl(Ss,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return fu.set(s,dl(fu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,du.set(s,dl(du.get(s)||null,n,e,t,i,r)),!0}return!1}function ly(n){var e=ao(n.target);if(e!==null){var t=No(e);if(t!==null){if(e=t.tag,e===13){if(e=Kx(t),e!==null){n.blockedOn=e,ay(n.priority,function(){sy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Qc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=vp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);dp=i,t.target.dispatchEvent(i),dp=null}else return e=Bu(t),e!==null&&c_(e),n.blockedOn=t,!1;e.shift()}return!0}function Vg(n,e,t){Qc(n)&&t.delete(e)}function b1(){gp=!1,xs!==null&&Qc(xs)&&(xs=null),ys!==null&&Qc(ys)&&(ys=null),Ss!==null&&Qc(Ss)&&(Ss=null),fu.forEach(Vg),du.forEach(Vg)}function hl(n,e){n.blockedOn===e&&(n.blockedOn=null,gp||(gp=!0,Ti.unstable_scheduleCallback(Ti.unstable_NormalPriority,b1)))}function hu(n){function e(r){return hl(r,n)}if(0<tc.length){hl(tc[0],n);for(var t=1;t<tc.length;t++){var i=tc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(xs!==null&&hl(xs,n),ys!==null&&hl(ys,n),Ss!==null&&hl(Ss,n),fu.forEach(e),du.forEach(e),t=0;t<us.length;t++)i=us[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<us.length&&(t=us[0],t.blockedOn===null);)ly(t),t.blockedOn===null&&us.shift()}var Ca=Kr.ReactCurrentBatchConfig,Pf=!0;function L1(n,e,t,i){var r=St,s=Ca.transition;Ca.transition=null;try{St=1,f_(n,e,t,i)}finally{St=r,Ca.transition=s}}function D1(n,e,t,i){var r=St,s=Ca.transition;Ca.transition=null;try{St=4,f_(n,e,t,i)}finally{St=r,Ca.transition=s}}function f_(n,e,t,i){if(Pf){var r=vp(n,e,t,i);if(r===null)eh(n,e,i,bf,t),Hg(n,i);else if(P1(r,n,e,t,i))i.stopPropagation();else if(Hg(n,i),e&4&&-1<R1.indexOf(n)){for(;r!==null;){var s=Bu(r);if(s!==null&&ry(s),s=vp(n,e,t,i),s===null&&eh(n,e,i,bf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else eh(n,e,i,null,t)}}var bf=null;function vp(n,e,t,i){if(bf=null,n=a_(i),n=ao(n),n!==null)if(e=No(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Kx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return bf=n,null}function uy(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(x1()){case l_:return 1;case ey:return 4;case Cf:case y1:return 16;case ty:return 536870912;default:return 16}default:return 16}}var ds=null,d_=null,Jc=null;function cy(){if(Jc)return Jc;var n,e=d_,t=e.length,i,r="value"in ds?ds.value:ds.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Jc=r.slice(n,1<i?1-i:void 0)}function ef(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function nc(){return!0}function Gg(){return!1}function Ri(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?nc:Gg,this.isPropagationStopped=Gg,this}return Ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=nc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=nc)},persist:function(){},isPersistent:nc}),e}var ol={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},h_=Ri(ol),zu=Ht({},ol,{view:0,detail:0}),I1=Ri(zu),Xd,Yd,pl,pd=Ht({},zu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:p_,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==pl&&(pl&&n.type==="mousemove"?(Xd=n.screenX-pl.screenX,Yd=n.screenY-pl.screenY):Yd=Xd=0,pl=n),Xd)},movementY:function(n){return"movementY"in n?n.movementY:Yd}}),Wg=Ri(pd),U1=Ht({},pd,{dataTransfer:0}),N1=Ri(U1),O1=Ht({},zu,{relatedTarget:0}),qd=Ri(O1),F1=Ht({},ol,{animationName:0,elapsedTime:0,pseudoElement:0}),k1=Ri(F1),z1=Ht({},ol,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),B1=Ri(z1),H1=Ht({},ol,{data:0}),Xg=Ri(H1),V1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=W1[n])?!!e[n]:!1}function p_(){return X1}var Y1=Ht({},zu,{key:function(n){if(n.key){var e=V1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=ef(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?G1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:p_,charCode:function(n){return n.type==="keypress"?ef(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ef(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),q1=Ri(Y1),$1=Ht({},pd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yg=Ri($1),j1=Ht({},zu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:p_}),K1=Ri(j1),Z1=Ht({},ol,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q1=Ri(Z1),J1=Ht({},pd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),eT=Ri(J1),tT=[9,13,27,32],m_=Vr&&"CompositionEvent"in window,Vl=null;Vr&&"documentMode"in document&&(Vl=document.documentMode);var nT=Vr&&"TextEvent"in window&&!Vl,fy=Vr&&(!m_||Vl&&8<Vl&&11>=Vl),qg=" ",$g=!1;function dy(n,e){switch(n){case"keyup":return tT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ca=!1;function iT(n,e){switch(n){case"compositionend":return hy(e);case"keypress":return e.which!==32?null:($g=!0,qg);case"textInput":return n=e.data,n===qg&&$g?null:n;default:return null}}function rT(n,e){if(ca)return n==="compositionend"||!m_&&dy(n,e)?(n=cy(),Jc=d_=ds=null,ca=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fy&&e.locale!=="ko"?null:e.data;default:return null}}var sT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!sT[n.type]:e==="textarea"}function py(n,e,t,i){Xx(i),e=Lf(e,"onChange"),0<e.length&&(t=new h_("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Gl=null,pu=null;function oT(n){wy(n,0)}function md(n){var e=ha(n);if(kx(e))return n}function aT(n,e){if(n==="change")return e}var my=!1;if(Vr){var $d;if(Vr){var jd="oninput"in document;if(!jd){var Kg=document.createElement("div");Kg.setAttribute("oninput","return;"),jd=typeof Kg.oninput=="function"}$d=jd}else $d=!1;my=$d&&(!document.documentMode||9<document.documentMode)}function Zg(){Gl&&(Gl.detachEvent("onpropertychange",_y),pu=Gl=null)}function _y(n){if(n.propertyName==="value"&&md(pu)){var e=[];py(e,pu,n,a_(n)),jx(oT,e)}}function lT(n,e,t){n==="focusin"?(Zg(),Gl=e,pu=t,Gl.attachEvent("onpropertychange",_y)):n==="focusout"&&Zg()}function uT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return md(pu)}function cT(n,e){if(n==="click")return md(e)}function fT(n,e){if(n==="input"||n==="change")return md(e)}function dT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var rr=typeof Object.is=="function"?Object.is:dT;function mu(n,e){if(rr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ep.call(e,r)||!rr(n[r],e[r]))return!1}return!0}function Qg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Jg(n,e){var t=Qg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Qg(t)}}function gy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?gy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function vy(){for(var n=window,e=Tf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Tf(n.document)}return e}function __(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function hT(n){var e=vy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&gy(t.ownerDocument.documentElement,t)){if(i!==null&&__(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Jg(t,s);var o=Jg(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var pT=Vr&&"documentMode"in document&&11>=document.documentMode,fa=null,xp=null,Wl=null,yp=!1;function e0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;yp||fa==null||fa!==Tf(i)||(i=fa,"selectionStart"in i&&__(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wl&&mu(Wl,i)||(Wl=i,i=Lf(xp,"onSelect"),0<i.length&&(e=new h_("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=fa)))}function ic(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var da={animationend:ic("Animation","AnimationEnd"),animationiteration:ic("Animation","AnimationIteration"),animationstart:ic("Animation","AnimationStart"),transitionend:ic("Transition","TransitionEnd")},Kd={},xy={};Vr&&(xy=document.createElement("div").style,"AnimationEvent"in window||(delete da.animationend.animation,delete da.animationiteration.animation,delete da.animationstart.animation),"TransitionEvent"in window||delete da.transitionend.transition);function _d(n){if(Kd[n])return Kd[n];if(!da[n])return n;var e=da[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in xy)return Kd[n]=e[t];return n}var yy=_d("animationend"),Sy=_d("animationiteration"),My=_d("animationstart"),Ey=_d("transitionend"),Ty=new Map,t0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zs(n,e){Ty.set(n,e),Uo(e,[n])}for(var Zd=0;Zd<t0.length;Zd++){var Qd=t0[Zd],mT=Qd.toLowerCase(),_T=Qd[0].toUpperCase()+Qd.slice(1);zs(mT,"on"+_T)}zs(yy,"onAnimationEnd");zs(Sy,"onAnimationIteration");zs(My,"onAnimationStart");zs("dblclick","onDoubleClick");zs("focusin","onFocus");zs("focusout","onBlur");zs(Ey,"onTransitionEnd");Ba("onMouseEnter",["mouseout","mouseover"]);Ba("onMouseLeave",["mouseout","mouseover"]);Ba("onPointerEnter",["pointerout","pointerover"]);Ba("onPointerLeave",["pointerout","pointerover"]);Uo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Uo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Uo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Uo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Uo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Uo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ll));function n0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,m1(i,e,void 0,n),n.currentTarget=null}function wy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;n0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;n0(r,a,u),s=l}}}if(Af)throw n=mp,Af=!1,mp=null,n}function bt(n,e){var t=e[wp];t===void 0&&(t=e[wp]=new Set);var i=n+"__bubble";t.has(i)||(Ay(e,n,2,!1),t.add(i))}function Jd(n,e,t){var i=0;e&&(i|=4),Ay(t,n,i,e)}var rc="_reactListening"+Math.random().toString(36).slice(2);function _u(n){if(!n[rc]){n[rc]=!0,Ix.forEach(function(t){t!=="selectionchange"&&(gT.has(t)||Jd(t,!1,n),Jd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[rc]||(e[rc]=!0,Jd("selectionchange",!1,e))}}function Ay(n,e,t,i){switch(uy(e)){case 1:var r=L1;break;case 4:r=D1;break;default:r=f_}t=r.bind(null,e,t,n),r=void 0,!pp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function eh(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ao(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}jx(function(){var u=s,c=a_(t),h=[];e:{var f=Ty.get(n);if(f!==void 0){var p=h_,g=n;switch(n){case"keypress":if(ef(t)===0)break e;case"keydown":case"keyup":p=q1;break;case"focusin":g="focus",p=qd;break;case"focusout":g="blur",p=qd;break;case"beforeblur":case"afterblur":p=qd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Wg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=N1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=K1;break;case yy:case Sy:case My:p=k1;break;case Ey:p=Q1;break;case"scroll":p=I1;break;case"wheel":p=eT;break;case"copy":case"cut":case"paste":p=B1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Yg}var _=(e&4)!==0,m=!_&&n==="scroll",d=_?f!==null?f+"Capture":null:f;_=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,d!==null&&(y=cu(v,d),y!=null&&_.push(gu(v,y,x)))),m)break;v=v.return}0<_.length&&(f=new p(f,g,null,t,c),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==dp&&(g=t.relatedTarget||t.fromElement)&&(ao(g)||g[Gr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?ao(g):null,g!==null&&(m=No(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=Wg,y="onMouseLeave",d="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=Yg,y="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?f:ha(p),x=g==null?f:ha(g),f=new _(y,v+"leave",p,t,c),f.target=m,f.relatedTarget=x,y=null,ao(c)===u&&(_=new _(d,v+"enter",g,t,c),_.target=x,_.relatedTarget=m,y=_),m=y,p&&g)t:{for(_=p,d=g,v=0,x=_;x;x=ko(x))v++;for(x=0,y=d;y;y=ko(y))x++;for(;0<v-x;)_=ko(_),v--;for(;0<x-v;)d=ko(d),x--;for(;v--;){if(_===d||d!==null&&_===d.alternate)break t;_=ko(_),d=ko(d)}_=null}else _=null;p!==null&&i0(h,f,p,_,!1),g!==null&&m!==null&&i0(h,m,g,_,!0)}}e:{if(f=u?ha(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=aT;else if(jg(f))if(my)C=fT;else{C=uT;var w=lT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=cT);if(C&&(C=C(n,u))){py(h,C,t,c);break e}w&&w(n,f,u),n==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&ap(f,"number",f.value)}switch(w=u?ha(u):window,n){case"focusin":(jg(w)||w.contentEditable==="true")&&(fa=w,xp=u,Wl=null);break;case"focusout":Wl=xp=fa=null;break;case"mousedown":yp=!0;break;case"contextmenu":case"mouseup":case"dragend":yp=!1,e0(h,t,c);break;case"selectionchange":if(pT)break;case"keydown":case"keyup":e0(h,t,c)}var M;if(m_)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ca?dy(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(fy&&t.locale!=="ko"&&(ca||R!=="onCompositionStart"?R==="onCompositionEnd"&&ca&&(M=cy()):(ds=c,d_="value"in ds?ds.value:ds.textContent,ca=!0)),w=Lf(u,R),0<w.length&&(R=new Xg(R,n,null,t,c),h.push({event:R,listeners:w}),M?R.data=M:(M=hy(t),M!==null&&(R.data=M)))),(M=nT?iT(n,t):rT(n,t))&&(u=Lf(u,"onBeforeInput"),0<u.length&&(c=new Xg("onBeforeInput","beforeinput",null,t,c),h.push({event:c,listeners:u}),c.data=M))}wy(h,e)})}function gu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Lf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=cu(n,t),s!=null&&i.unshift(gu(n,s,r)),s=cu(n,e),s!=null&&i.push(gu(n,s,r))),n=n.return}return i}function ko(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function i0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=cu(t,s),l!=null&&o.unshift(gu(t,l,a))):r||(l=cu(t,s),l!=null&&o.push(gu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var vT=/\r\n?/g,xT=/\u0000|\uFFFD/g;function r0(n){return(typeof n=="string"?n:""+n).replace(vT,`
`).replace(xT,"")}function sc(n,e,t){if(e=r0(e),r0(n)!==e&&t)throw Error(fe(425))}function Df(){}var Sp=null,Mp=null;function Ep(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tp=typeof setTimeout=="function"?setTimeout:void 0,yT=typeof clearTimeout=="function"?clearTimeout:void 0,s0=typeof Promise=="function"?Promise:void 0,ST=typeof queueMicrotask=="function"?queueMicrotask:typeof s0<"u"?function(n){return s0.resolve(null).then(n).catch(MT)}:Tp;function MT(n){setTimeout(function(){throw n})}function th(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),hu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);hu(e)}function Ms(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function o0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var al=Math.random().toString(36).slice(2),fr="__reactFiber$"+al,vu="__reactProps$"+al,Gr="__reactContainer$"+al,wp="__reactEvents$"+al,ET="__reactListeners$"+al,TT="__reactHandles$"+al;function ao(n){var e=n[fr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Gr]||t[fr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=o0(n);n!==null;){if(t=n[fr])return t;n=o0(n)}return e}n=t,t=n.parentNode}return null}function Bu(n){return n=n[fr]||n[Gr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ha(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(fe(33))}function gd(n){return n[vu]||null}var Ap=[],pa=-1;function Bs(n){return{current:n}}function Dt(n){0>pa||(n.current=Ap[pa],Ap[pa]=null,pa--)}function Rt(n,e){pa++,Ap[pa]=n.current,n.current=e}var Is={},In=Bs(Is),Zn=Bs(!1),To=Is;function Ha(n,e){var t=n.type.contextTypes;if(!t)return Is;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Qn(n){return n=n.childContextTypes,n!=null}function If(){Dt(Zn),Dt(In)}function a0(n,e,t){if(In.current!==Is)throw Error(fe(168));Rt(In,e),Rt(Zn,t)}function Cy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(fe(108,l1(n)||"Unknown",r));return Ht({},t,i)}function Uf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Is,To=In.current,Rt(In,n),Rt(Zn,Zn.current),!0}function l0(n,e,t){var i=n.stateNode;if(!i)throw Error(fe(169));t?(n=Cy(n,e,To),i.__reactInternalMemoizedMergedChildContext=n,Dt(Zn),Dt(In),Rt(In,n)):Dt(Zn),Rt(Zn,t)}var Lr=null,vd=!1,nh=!1;function Ry(n){Lr===null?Lr=[n]:Lr.push(n)}function wT(n){vd=!0,Ry(n)}function Hs(){if(!nh&&Lr!==null){nh=!0;var n=0,e=St;try{var t=Lr;for(St=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Lr=null,vd=!1}catch(r){throw Lr!==null&&(Lr=Lr.slice(n+1)),Jx(l_,Hs),r}finally{St=e,nh=!1}}return null}var ma=[],_a=0,Nf=null,Of=0,Di=[],Ii=0,wo=null,Nr=1,Or="";function Qs(n,e){ma[_a++]=Of,ma[_a++]=Nf,Nf=n,Of=e}function Py(n,e,t){Di[Ii++]=Nr,Di[Ii++]=Or,Di[Ii++]=wo,wo=n;var i=Nr;n=Or;var r=32-nr(i)-1;i&=~(1<<r),t+=1;var s=32-nr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Nr=1<<32-nr(e)+r|t<<r|i,Or=s+n}else Nr=1<<s|t<<r|i,Or=n}function g_(n){n.return!==null&&(Qs(n,1),Py(n,1,0))}function v_(n){for(;n===Nf;)Nf=ma[--_a],ma[_a]=null,Of=ma[--_a],ma[_a]=null;for(;n===wo;)wo=Di[--Ii],Di[Ii]=null,Or=Di[--Ii],Di[Ii]=null,Nr=Di[--Ii],Di[Ii]=null}var Mi=null,vi=null,It=!1,Ji=null;function by(n,e){var t=Fi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function u0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Mi=n,vi=Ms(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Mi=n,vi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=wo!==null?{id:Nr,overflow:Or}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Fi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Mi=n,vi=null,!0):!1;default:return!1}}function Cp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Rp(n){if(It){var e=vi;if(e){var t=e;if(!u0(n,e)){if(Cp(n))throw Error(fe(418));e=Ms(t.nextSibling);var i=Mi;e&&u0(n,e)?by(i,t):(n.flags=n.flags&-4097|2,It=!1,Mi=n)}}else{if(Cp(n))throw Error(fe(418));n.flags=n.flags&-4097|2,It=!1,Mi=n}}}function c0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Mi=n}function oc(n){if(n!==Mi)return!1;if(!It)return c0(n),It=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Ep(n.type,n.memoizedProps)),e&&(e=vi)){if(Cp(n))throw Ly(),Error(fe(418));for(;e;)by(n,e),e=Ms(e.nextSibling)}if(c0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(fe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){vi=Ms(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}vi=null}}else vi=Mi?Ms(n.stateNode.nextSibling):null;return!0}function Ly(){for(var n=vi;n;)n=Ms(n.nextSibling)}function Va(){vi=Mi=null,It=!1}function x_(n){Ji===null?Ji=[n]:Ji.push(n)}var AT=Kr.ReactCurrentBatchConfig;function ml(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(fe(309));var i=t.stateNode}if(!i)throw Error(fe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(fe(284));if(!t._owner)throw Error(fe(290,n))}return n}function ac(n,e){throw n=Object.prototype.toString.call(e),Error(fe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function f0(n){var e=n._init;return e(n._payload)}function Dy(n){function e(d,v){if(n){var x=d.deletions;x===null?(d.deletions=[v],d.flags|=16):x.push(v)}}function t(d,v){if(!n)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=As(d,v),d.index=0,d.sibling=null,d}function s(d,v,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<v?(d.flags|=2,v):x):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,v,x,y){return v===null||v.tag!==6?(v=uh(x,d.mode,y),v.return=d,v):(v=r(v,x),v.return=d,v)}function l(d,v,x,y){var C=x.type;return C===ua?c(d,v,x.props.children,y,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===as&&f0(C)===v.type)?(y=r(v,x.props),y.ref=ml(d,v,x),y.return=d,y):(y=lf(x.type,x.key,x.props,null,d.mode,y),y.ref=ml(d,v,x),y.return=d,y)}function u(d,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=ch(x,d.mode,y),v.return=d,v):(v=r(v,x.children||[]),v.return=d,v)}function c(d,v,x,y,C){return v===null||v.tag!==7?(v=_o(x,d.mode,y,C),v.return=d,v):(v=r(v,x),v.return=d,v)}function h(d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=uh(""+v,d.mode,x),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ku:return x=lf(v.type,v.key,v.props,null,d.mode,x),x.ref=ml(d,null,v),x.return=d,x;case la:return v=ch(v,d.mode,x),v.return=d,v;case as:var y=v._init;return h(d,y(v._payload),x)}if(Pl(v)||cl(v))return v=_o(v,d.mode,x,null),v.return=d,v;ac(d,v)}return null}function f(d,v,x,y){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(d,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ku:return x.key===C?l(d,v,x,y):null;case la:return x.key===C?u(d,v,x,y):null;case as:return C=x._init,f(d,v,C(x._payload),y)}if(Pl(x)||cl(x))return C!==null?null:c(d,v,x,y,null);ac(d,x)}return null}function p(d,v,x,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(x)||null,a(v,d,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ku:return d=d.get(y.key===null?x:y.key)||null,l(v,d,y,C);case la:return d=d.get(y.key===null?x:y.key)||null,u(v,d,y,C);case as:var w=y._init;return p(d,v,x,w(y._payload),C)}if(Pl(y)||cl(y))return d=d.get(x)||null,c(v,d,y,C,null);ac(v,y)}return null}function g(d,v,x,y){for(var C=null,w=null,M=v,R=v=0,E=null;M!==null&&R<x.length;R++){M.index>R?(E=M,M=null):E=M.sibling;var S=f(d,M,x[R],y);if(S===null){M===null&&(M=E);break}n&&M&&S.alternate===null&&e(d,M),v=s(S,v,R),w===null?C=S:w.sibling=S,w=S,M=E}if(R===x.length)return t(d,M),It&&Qs(d,R),C;if(M===null){for(;R<x.length;R++)M=h(d,x[R],y),M!==null&&(v=s(M,v,R),w===null?C=M:w.sibling=M,w=M);return It&&Qs(d,R),C}for(M=i(d,M);R<x.length;R++)E=p(M,d,R,x[R],y),E!==null&&(n&&E.alternate!==null&&M.delete(E.key===null?R:E.key),v=s(E,v,R),w===null?C=E:w.sibling=E,w=E);return n&&M.forEach(function(D){return e(d,D)}),It&&Qs(d,R),C}function _(d,v,x,y){var C=cl(x);if(typeof C!="function")throw Error(fe(150));if(x=C.call(x),x==null)throw Error(fe(151));for(var w=C=null,M=v,R=v=0,E=null,S=x.next();M!==null&&!S.done;R++,S=x.next()){M.index>R?(E=M,M=null):E=M.sibling;var D=f(d,M,S.value,y);if(D===null){M===null&&(M=E);break}n&&M&&D.alternate===null&&e(d,M),v=s(D,v,R),w===null?C=D:w.sibling=D,w=D,M=E}if(S.done)return t(d,M),It&&Qs(d,R),C;if(M===null){for(;!S.done;R++,S=x.next())S=h(d,S.value,y),S!==null&&(v=s(S,v,R),w===null?C=S:w.sibling=S,w=S);return It&&Qs(d,R),C}for(M=i(d,M);!S.done;R++,S=x.next())S=p(M,d,R,S.value,y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?R:S.key),v=s(S,v,R),w===null?C=S:w.sibling=S,w=S);return n&&M.forEach(function(U){return e(d,U)}),It&&Qs(d,R),C}function m(d,v,x,y){if(typeof x=="object"&&x!==null&&x.type===ua&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ku:e:{for(var C=x.key,w=v;w!==null;){if(w.key===C){if(C=x.type,C===ua){if(w.tag===7){t(d,w.sibling),v=r(w,x.props.children),v.return=d,d=v;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===as&&f0(C)===w.type){t(d,w.sibling),v=r(w,x.props),v.ref=ml(d,w,x),v.return=d,d=v;break e}t(d,w);break}else e(d,w);w=w.sibling}x.type===ua?(v=_o(x.props.children,d.mode,y,x.key),v.return=d,d=v):(y=lf(x.type,x.key,x.props,null,d.mode,y),y.ref=ml(d,v,x),y.return=d,d=y)}return o(d);case la:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(d,v.sibling),v=r(v,x.children||[]),v.return=d,d=v;break e}else{t(d,v);break}else e(d,v);v=v.sibling}v=ch(x,d.mode,y),v.return=d,d=v}return o(d);case as:return w=x._init,m(d,v,w(x._payload),y)}if(Pl(x))return g(d,v,x,y);if(cl(x))return _(d,v,x,y);ac(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(d,v.sibling),v=r(v,x),v.return=d,d=v):(t(d,v),v=uh(x,d.mode,y),v.return=d,d=v),o(d)):t(d,v)}return m}var Ga=Dy(!0),Iy=Dy(!1),Ff=Bs(null),kf=null,ga=null,y_=null;function S_(){y_=ga=kf=null}function M_(n){var e=Ff.current;Dt(Ff),n._currentValue=e}function Pp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ra(n,e){kf=n,y_=ga=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Kn=!0),n.firstContext=null)}function Gi(n){var e=n._currentValue;if(y_!==n)if(n={context:n,memoizedValue:e,next:null},ga===null){if(kf===null)throw Error(fe(308));ga=n,kf.dependencies={lanes:0,firstContext:n}}else ga=ga.next=n;return e}var lo=null;function E_(n){lo===null?lo=[n]:lo.push(n)}function Uy(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,E_(e)):(t.next=r.next,r.next=t),e.interleaved=t,Wr(n,i)}function Wr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ls=!1;function T_(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ny(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Br(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Es(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ht&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Wr(n,t)}return r=i.interleaved,r===null?(e.next=e,E_(i)):(e.next=r.next,r.next=e),i.interleaved=e,Wr(n,t)}function tf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,u_(n,t)}}function d0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function zf(n,e,t,i){var r=n.updateQueue;ls=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(f=e,p=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){h=g.call(p,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(p,h,f):g,f==null)break e;h=Ht({},h,f);break e;case 2:ls=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Co|=o,n.lanes=o,n.memoizedState=h}}function h0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(fe(191,r));r.call(i)}}}var Hu={},vr=Bs(Hu),xu=Bs(Hu),yu=Bs(Hu);function uo(n){if(n===Hu)throw Error(fe(174));return n}function w_(n,e){switch(Rt(yu,e),Rt(xu,n),Rt(vr,Hu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:up(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=up(e,n)}Dt(vr),Rt(vr,e)}function Wa(){Dt(vr),Dt(xu),Dt(yu)}function Oy(n){uo(yu.current);var e=uo(vr.current),t=up(e,n.type);e!==t&&(Rt(xu,n),Rt(vr,t))}function A_(n){xu.current===n&&(Dt(vr),Dt(xu))}var Ft=Bs(0);function Bf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ih=[];function C_(){for(var n=0;n<ih.length;n++)ih[n]._workInProgressVersionPrimary=null;ih.length=0}var nf=Kr.ReactCurrentDispatcher,rh=Kr.ReactCurrentBatchConfig,Ao=0,Bt=null,nn=null,dn=null,Hf=!1,Xl=!1,Su=0,CT=0;function Mn(){throw Error(fe(321))}function R_(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!rr(n[t],e[t]))return!1;return!0}function P_(n,e,t,i,r,s){if(Ao=s,Bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nf.current=n===null||n.memoizedState===null?LT:DT,n=t(i,r),Xl){s=0;do{if(Xl=!1,Su=0,25<=s)throw Error(fe(301));s+=1,dn=nn=null,e.updateQueue=null,nf.current=IT,n=t(i,r)}while(Xl)}if(nf.current=Vf,e=nn!==null&&nn.next!==null,Ao=0,dn=nn=Bt=null,Hf=!1,e)throw Error(fe(300));return n}function b_(){var n=Su!==0;return Su=0,n}function or(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Bt.memoizedState=dn=n:dn=dn.next=n,dn}function Wi(){if(nn===null){var n=Bt.alternate;n=n!==null?n.memoizedState:null}else n=nn.next;var e=dn===null?Bt.memoizedState:dn.next;if(e!==null)dn=e,nn=n;else{if(n===null)throw Error(fe(310));nn=n,n={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},dn===null?Bt.memoizedState=dn=n:dn=dn.next=n}return dn}function Mu(n,e){return typeof e=="function"?e(n):e}function sh(n){var e=Wi(),t=e.queue;if(t===null)throw Error(fe(311));t.lastRenderedReducer=n;var i=nn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ao&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Bt.lanes|=c,Co|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,rr(i,e.memoizedState)||(Kn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Bt.lanes|=s,Co|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function oh(n){var e=Wi(),t=e.queue;if(t===null)throw Error(fe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);rr(s,e.memoizedState)||(Kn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Fy(){}function ky(n,e){var t=Bt,i=Wi(),r=e(),s=!rr(i.memoizedState,r);if(s&&(i.memoizedState=r,Kn=!0),i=i.queue,L_(Hy.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||dn!==null&&dn.memoizedState.tag&1){if(t.flags|=2048,Eu(9,By.bind(null,t,i,r,e),void 0,null),pn===null)throw Error(fe(349));Ao&30||zy(t,e,r)}return r}function zy(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Bt.updateQueue,e===null?(e={lastEffect:null,stores:null},Bt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function By(n,e,t,i){e.value=t,e.getSnapshot=i,Vy(e)&&Gy(n)}function Hy(n,e,t){return t(function(){Vy(e)&&Gy(n)})}function Vy(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!rr(n,t)}catch{return!0}}function Gy(n){var e=Wr(n,1);e!==null&&ir(e,n,1,-1)}function p0(n){var e=or();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mu,lastRenderedState:n},e.queue=n,n=n.dispatch=bT.bind(null,Bt,n),[e.memoizedState,n]}function Eu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Bt.updateQueue,e===null?(e={lastEffect:null,stores:null},Bt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Wy(){return Wi().memoizedState}function rf(n,e,t,i){var r=or();Bt.flags|=n,r.memoizedState=Eu(1|e,t,void 0,i===void 0?null:i)}function xd(n,e,t,i){var r=Wi();i=i===void 0?null:i;var s=void 0;if(nn!==null){var o=nn.memoizedState;if(s=o.destroy,i!==null&&R_(i,o.deps)){r.memoizedState=Eu(e,t,s,i);return}}Bt.flags|=n,r.memoizedState=Eu(1|e,t,s,i)}function m0(n,e){return rf(8390656,8,n,e)}function L_(n,e){return xd(2048,8,n,e)}function Xy(n,e){return xd(4,2,n,e)}function Yy(n,e){return xd(4,4,n,e)}function qy(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function $y(n,e,t){return t=t!=null?t.concat([n]):null,xd(4,4,qy.bind(null,e,n),t)}function D_(){}function jy(n,e){var t=Wi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&R_(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Ky(n,e){var t=Wi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&R_(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Zy(n,e,t){return Ao&21?(rr(t,e)||(t=ny(),Bt.lanes|=t,Co|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Kn=!0),n.memoizedState=t)}function RT(n,e){var t=St;St=t!==0&&4>t?t:4,n(!0);var i=rh.transition;rh.transition={};try{n(!1),e()}finally{St=t,rh.transition=i}}function Qy(){return Wi().memoizedState}function PT(n,e,t){var i=ws(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Jy(n))eS(e,t);else if(t=Uy(n,e,t,i),t!==null){var r=Vn();ir(t,n,i,r),tS(t,e,i)}}function bT(n,e,t){var i=ws(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Jy(n))eS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,rr(a,o)){var l=e.interleaved;l===null?(r.next=r,E_(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Uy(n,e,r,i),t!==null&&(r=Vn(),ir(t,n,i,r),tS(t,e,i))}}function Jy(n){var e=n.alternate;return n===Bt||e!==null&&e===Bt}function eS(n,e){Xl=Hf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function tS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,u_(n,t)}}var Vf={readContext:Gi,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},LT={readContext:Gi,useCallback:function(n,e){return or().memoizedState=[n,e===void 0?null:e],n},useContext:Gi,useEffect:m0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,rf(4194308,4,qy.bind(null,e,n),t)},useLayoutEffect:function(n,e){return rf(4194308,4,n,e)},useInsertionEffect:function(n,e){return rf(4,2,n,e)},useMemo:function(n,e){var t=or();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=or();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=PT.bind(null,Bt,n),[i.memoizedState,n]},useRef:function(n){var e=or();return n={current:n},e.memoizedState=n},useState:p0,useDebugValue:D_,useDeferredValue:function(n){return or().memoizedState=n},useTransition:function(){var n=p0(!1),e=n[0];return n=RT.bind(null,n[1]),or().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Bt,r=or();if(It){if(t===void 0)throw Error(fe(407));t=t()}else{if(t=e(),pn===null)throw Error(fe(349));Ao&30||zy(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,m0(Hy.bind(null,i,s,n),[n]),i.flags|=2048,Eu(9,By.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=or(),e=pn.identifierPrefix;if(It){var t=Or,i=Nr;t=(i&~(1<<32-nr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Su++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=CT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},DT={readContext:Gi,useCallback:jy,useContext:Gi,useEffect:L_,useImperativeHandle:$y,useInsertionEffect:Xy,useLayoutEffect:Yy,useMemo:Ky,useReducer:sh,useRef:Wy,useState:function(){return sh(Mu)},useDebugValue:D_,useDeferredValue:function(n){var e=Wi();return Zy(e,nn.memoizedState,n)},useTransition:function(){var n=sh(Mu)[0],e=Wi().memoizedState;return[n,e]},useMutableSource:Fy,useSyncExternalStore:ky,useId:Qy,unstable_isNewReconciler:!1},IT={readContext:Gi,useCallback:jy,useContext:Gi,useEffect:L_,useImperativeHandle:$y,useInsertionEffect:Xy,useLayoutEffect:Yy,useMemo:Ky,useReducer:oh,useRef:Wy,useState:function(){return oh(Mu)},useDebugValue:D_,useDeferredValue:function(n){var e=Wi();return nn===null?e.memoizedState=n:Zy(e,nn.memoizedState,n)},useTransition:function(){var n=oh(Mu)[0],e=Wi().memoizedState;return[n,e]},useMutableSource:Fy,useSyncExternalStore:ky,useId:Qy,unstable_isNewReconciler:!1};function Zi(n,e){if(n&&n.defaultProps){e=Ht({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function bp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Ht({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var yd={isMounted:function(n){return(n=n._reactInternals)?No(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Vn(),r=ws(n),s=Br(i,r);s.payload=e,t!=null&&(s.callback=t),e=Es(n,s,r),e!==null&&(ir(e,n,r,i),tf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Vn(),r=ws(n),s=Br(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Es(n,s,r),e!==null&&(ir(e,n,r,i),tf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Vn(),i=ws(n),r=Br(t,i);r.tag=2,e!=null&&(r.callback=e),e=Es(n,r,i),e!==null&&(ir(e,n,i,t),tf(e,n,i))}};function _0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!mu(t,i)||!mu(r,s):!0}function nS(n,e,t){var i=!1,r=Is,s=e.contextType;return typeof s=="object"&&s!==null?s=Gi(s):(r=Qn(e)?To:In.current,i=e.contextTypes,s=(i=i!=null)?Ha(n,r):Is),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yd,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function g0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&yd.enqueueReplaceState(e,e.state,null)}function Lp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},T_(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gi(s):(s=Qn(e)?To:In.current,r.context=Ha(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&yd.enqueueReplaceState(r,r.state,null),zf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Xa(n,e){try{var t="",i=e;do t+=a1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function ah(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Dp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var UT=typeof WeakMap=="function"?WeakMap:Map;function iS(n,e,t){t=Br(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Wf||(Wf=!0,Vp=i),Dp(n,e)},t}function rS(n,e,t){t=Br(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Dp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Dp(n,e),typeof i!="function"&&(Ts===null?Ts=new Set([this]):Ts.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function v0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new UT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=$T.bind(null,n,e,t),e.then(n,n))}function x0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function y0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Br(-1,1),e.tag=2,Es(t,e,1))),t.lanes|=1),n)}var NT=Kr.ReactCurrentOwner,Kn=!1;function kn(n,e,t,i){e.child=n===null?Iy(e,null,t,i):Ga(e,n.child,t,i)}function S0(n,e,t,i,r){t=t.render;var s=e.ref;return Ra(e,r),i=P_(n,e,t,i,s,r),t=b_(),n!==null&&!Kn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Xr(n,e,r)):(It&&t&&g_(e),e.flags|=1,kn(n,e,i,r),e.child)}function M0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!B_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,sS(n,e,s,i,r)):(n=lf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:mu,t(o,i)&&n.ref===e.ref)return Xr(n,e,r)}return e.flags|=1,n=As(s,i),n.ref=e.ref,n.return=e,e.child=n}function sS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(mu(s,i)&&n.ref===e.ref)if(Kn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Kn=!0);else return e.lanes=n.lanes,Xr(n,e,r)}return Ip(n,e,t,i,r)}function oS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Rt(xa,di),di|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Rt(xa,di),di|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Rt(xa,di),di|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Rt(xa,di),di|=i;return kn(n,e,r,t),e.child}function aS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Ip(n,e,t,i,r){var s=Qn(t)?To:In.current;return s=Ha(e,s),Ra(e,r),t=P_(n,e,t,i,s,r),i=b_(),n!==null&&!Kn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Xr(n,e,r)):(It&&i&&g_(e),e.flags|=1,kn(n,e,t,r),e.child)}function E0(n,e,t,i,r){if(Qn(t)){var s=!0;Uf(e)}else s=!1;if(Ra(e,r),e.stateNode===null)sf(n,e),nS(e,t,i),Lp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Gi(u):(u=Qn(t)?To:In.current,u=Ha(e,u));var c=t.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&g0(e,o,i,u),ls=!1;var f=e.memoizedState;o.state=f,zf(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Zn.current||ls?(typeof c=="function"&&(bp(e,t,c,i),l=e.memoizedState),(a=ls||_0(e,t,a,i,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ny(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Zi(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Gi(l):(l=Qn(t)?To:In.current,l=Ha(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&g0(e,o,i,l),ls=!1,f=e.memoizedState,o.state=f,zf(e,i,o,r);var g=e.memoizedState;a!==h||f!==g||Zn.current||ls?(typeof p=="function"&&(bp(e,t,p,i),g=e.memoizedState),(u=ls||_0(e,t,u,i,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Up(n,e,t,i,s,r)}function Up(n,e,t,i,r,s){aS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&l0(e,t,!1),Xr(n,e,s);i=e.stateNode,NT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ga(e,n.child,null,s),e.child=Ga(e,null,a,s)):kn(n,e,a,s),e.memoizedState=i.state,r&&l0(e,t,!0),e.child}function lS(n){var e=n.stateNode;e.pendingContext?a0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&a0(n,e.context,!1),w_(n,e.containerInfo)}function T0(n,e,t,i,r){return Va(),x_(r),e.flags|=256,kn(n,e,t,i),e.child}var Np={dehydrated:null,treeContext:null,retryLane:0};function Op(n){return{baseLanes:n,cachePool:null,transitions:null}}function uS(n,e,t){var i=e.pendingProps,r=Ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Rt(Ft,r&1),n===null)return Rp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ed(o,i,0,null),n=_o(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Op(t),e.memoizedState=Np,n):I_(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return OT(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=As(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=As(a,s):(s=_o(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Op(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Np,i}return s=n.child,n=s.sibling,i=As(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function I_(n,e){return e=Ed({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function lc(n,e,t,i){return i!==null&&x_(i),Ga(e,n.child,null,t),n=I_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function OT(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=ah(Error(fe(422))),lc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ed({mode:"visible",children:i.children},r,0,null),s=_o(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ga(e,n.child,null,o),e.child.memoizedState=Op(o),e.memoizedState=Np,s);if(!(e.mode&1))return lc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(fe(419)),i=ah(s,i,void 0),lc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Kn||a){if(i=pn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Wr(n,r),ir(i,n,r,-1))}return z_(),i=ah(Error(fe(421))),lc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=jT.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,vi=Ms(r.nextSibling),Mi=e,It=!0,Ji=null,n!==null&&(Di[Ii++]=Nr,Di[Ii++]=Or,Di[Ii++]=wo,Nr=n.id,Or=n.overflow,wo=e),e=I_(e,i.children),e.flags|=4096,e)}function w0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Pp(n.return,e,t)}function lh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function cS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(kn(n,e,i.children,t),i=Ft.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&w0(n,t,e);else if(n.tag===19)w0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Rt(Ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Bf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),lh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Bf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}lh(e,!0,t,null,s);break;case"together":lh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Xr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Co|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(fe(153));if(e.child!==null){for(n=e.child,t=As(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=As(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function FT(n,e,t){switch(e.tag){case 3:lS(e),Va();break;case 5:Oy(e);break;case 1:Qn(e.type)&&Uf(e);break;case 4:w_(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Rt(Ff,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Rt(Ft,Ft.current&1),e.flags|=128,null):t&e.child.childLanes?uS(n,e,t):(Rt(Ft,Ft.current&1),n=Xr(n,e,t),n!==null?n.sibling:null);Rt(Ft,Ft.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return cS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Rt(Ft,Ft.current),i)break;return null;case 22:case 23:return e.lanes=0,oS(n,e,t)}return Xr(n,e,t)}var fS,Fp,dS,hS;fS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Fp=function(){};dS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,uo(vr.current);var s=null;switch(t){case"input":r=sp(n,r),i=sp(n,i),s=[];break;case"select":r=Ht({},r,{value:void 0}),i=Ht({},i,{value:void 0}),s=[];break;case"textarea":r=lp(n,r),i=lp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Df)}cp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(lu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(lu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&bt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};hS=function(n,e,t,i){t!==i&&(e.flags|=4)};function _l(n,e){if(!It)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function En(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function kT(n,e,t){var i=e.pendingProps;switch(v_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(e),null;case 1:return Qn(e.type)&&If(),En(e),null;case 3:return i=e.stateNode,Wa(),Dt(Zn),Dt(In),C_(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(oc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ji!==null&&(Xp(Ji),Ji=null))),Fp(n,e),En(e),null;case 5:A_(e);var r=uo(yu.current);if(t=e.type,n!==null&&e.stateNode!=null)dS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(fe(166));return En(e),null}if(n=uo(vr.current),oc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[fr]=e,i[vu]=s,n=(e.mode&1)!==0,t){case"dialog":bt("cancel",i),bt("close",i);break;case"iframe":case"object":case"embed":bt("load",i);break;case"video":case"audio":for(r=0;r<Ll.length;r++)bt(Ll[r],i);break;case"source":bt("error",i);break;case"img":case"image":case"link":bt("error",i),bt("load",i);break;case"details":bt("toggle",i);break;case"input":Ug(i,s),bt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},bt("invalid",i);break;case"textarea":Og(i,s),bt("invalid",i)}cp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&sc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&sc(i.textContent,a,n),r=["children",""+a]):lu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&bt("scroll",i)}switch(t){case"input":Zu(i),Ng(i,s,!0);break;case"textarea":Zu(i),Fg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Df)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Hx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[fr]=e,n[vu]=i,fS(n,e,!1,!1),e.stateNode=n;e:{switch(o=fp(t,i),t){case"dialog":bt("cancel",n),bt("close",n),r=i;break;case"iframe":case"object":case"embed":bt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ll.length;r++)bt(Ll[r],n);r=i;break;case"source":bt("error",n),r=i;break;case"img":case"image":case"link":bt("error",n),bt("load",n),r=i;break;case"details":bt("toggle",n),r=i;break;case"input":Ug(n,i),r=sp(n,i),bt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Ht({},i,{value:void 0}),bt("invalid",n);break;case"textarea":Og(n,i),r=lp(n,i),bt("invalid",n);break;default:r=i}cp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Wx(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vx(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&uu(n,l):typeof l=="number"&&uu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(lu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&bt("scroll",n):l!=null&&i_(n,s,l,o))}switch(t){case"input":Zu(n),Ng(n,i,!1);break;case"textarea":Zu(n),Fg(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ds(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ta(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ta(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Df)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return En(e),null;case 6:if(n&&e.stateNode!=null)hS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(fe(166));if(t=uo(yu.current),uo(vr.current),oc(e)){if(i=e.stateNode,t=e.memoizedProps,i[fr]=e,(s=i.nodeValue!==t)&&(n=Mi,n!==null))switch(n.tag){case 3:sc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&sc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[fr]=e,e.stateNode=i}return En(e),null;case 13:if(Dt(Ft),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(It&&vi!==null&&e.mode&1&&!(e.flags&128))Ly(),Va(),e.flags|=98560,s=!1;else if(s=oc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(fe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(fe(317));s[fr]=e}else Va(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;En(e),s=!1}else Ji!==null&&(Xp(Ji),Ji=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ft.current&1?sn===0&&(sn=3):z_())),e.updateQueue!==null&&(e.flags|=4),En(e),null);case 4:return Wa(),Fp(n,e),n===null&&_u(e.stateNode.containerInfo),En(e),null;case 10:return M_(e.type._context),En(e),null;case 17:return Qn(e.type)&&If(),En(e),null;case 19:if(Dt(Ft),s=e.memoizedState,s===null)return En(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)_l(s,!1);else{if(sn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Bf(n),o!==null){for(e.flags|=128,_l(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Rt(Ft,Ft.current&1|2),e.child}n=n.sibling}s.tail!==null&&Xt()>Ya&&(e.flags|=128,i=!0,_l(s,!1),e.lanes=4194304)}else{if(!i)if(n=Bf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),_l(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!It)return En(e),null}else 2*Xt()-s.renderingStartTime>Ya&&t!==1073741824&&(e.flags|=128,i=!0,_l(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Xt(),e.sibling=null,t=Ft.current,Rt(Ft,i?t&1|2:t&1),e):(En(e),null);case 22:case 23:return k_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?di&1073741824&&(En(e),e.subtreeFlags&6&&(e.flags|=8192)):En(e),null;case 24:return null;case 25:return null}throw Error(fe(156,e.tag))}function zT(n,e){switch(v_(e),e.tag){case 1:return Qn(e.type)&&If(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Wa(),Dt(Zn),Dt(In),C_(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return A_(e),null;case 13:if(Dt(Ft),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(fe(340));Va()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Dt(Ft),null;case 4:return Wa(),null;case 10:return M_(e.type._context),null;case 22:case 23:return k_(),null;case 24:return null;default:return null}}var uc=!1,Rn=!1,BT=typeof WeakSet=="function"?WeakSet:Set,Re=null;function va(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Vt(n,e,i)}else t.current=null}function kp(n,e,t){try{t()}catch(i){Vt(n,e,i)}}var A0=!1;function HT(n,e){if(Sp=Pf,n=vy(),__(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=n,f=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Mp={focusedElem:n,selectionRange:t},Pf=!1,Re=e;Re!==null;)if(e=Re,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Re=n;else for(;Re!==null;){e=Re;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:Zi(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(fe(163))}}catch(y){Vt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}return g=A0,A0=!1,g}function Yl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&kp(e,t,s)}r=r.next}while(r!==i)}}function Sd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function zp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function pS(n){var e=n.alternate;e!==null&&(n.alternate=null,pS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[fr],delete e[vu],delete e[wp],delete e[ET],delete e[TT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function mS(n){return n.tag===5||n.tag===3||n.tag===4}function C0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||mS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Bp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Df));else if(i!==4&&(n=n.child,n!==null))for(Bp(n,e,t),n=n.sibling;n!==null;)Bp(n,e,t),n=n.sibling}function Hp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Hp(n,e,t),n=n.sibling;n!==null;)Hp(n,e,t),n=n.sibling}var gn=null,Qi=!1;function Jr(n,e,t){for(t=t.child;t!==null;)_S(n,e,t),t=t.sibling}function _S(n,e,t){if(gr&&typeof gr.onCommitFiberUnmount=="function")try{gr.onCommitFiberUnmount(hd,t)}catch{}switch(t.tag){case 5:Rn||va(t,e);case 6:var i=gn,r=Qi;gn=null,Jr(n,e,t),gn=i,Qi=r,gn!==null&&(Qi?(n=gn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):gn.removeChild(t.stateNode));break;case 18:gn!==null&&(Qi?(n=gn,t=t.stateNode,n.nodeType===8?th(n.parentNode,t):n.nodeType===1&&th(n,t),hu(n)):th(gn,t.stateNode));break;case 4:i=gn,r=Qi,gn=t.stateNode.containerInfo,Qi=!0,Jr(n,e,t),gn=i,Qi=r;break;case 0:case 11:case 14:case 15:if(!Rn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&kp(t,e,o),r=r.next}while(r!==i)}Jr(n,e,t);break;case 1:if(!Rn&&(va(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Vt(t,e,a)}Jr(n,e,t);break;case 21:Jr(n,e,t);break;case 22:t.mode&1?(Rn=(i=Rn)||t.memoizedState!==null,Jr(n,e,t),Rn=i):Jr(n,e,t);break;default:Jr(n,e,t)}}function R0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new BT),e.forEach(function(i){var r=KT.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Yi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:gn=a.stateNode,Qi=!1;break e;case 3:gn=a.stateNode.containerInfo,Qi=!0;break e;case 4:gn=a.stateNode.containerInfo,Qi=!0;break e}a=a.return}if(gn===null)throw Error(fe(160));_S(s,o,r),gn=null,Qi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)gS(e,n),e=e.sibling}function gS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Yi(e,n),sr(n),i&4){try{Yl(3,n,n.return),Sd(3,n)}catch(_){Vt(n,n.return,_)}try{Yl(5,n,n.return)}catch(_){Vt(n,n.return,_)}}break;case 1:Yi(e,n),sr(n),i&512&&t!==null&&va(t,t.return);break;case 5:if(Yi(e,n),sr(n),i&512&&t!==null&&va(t,t.return),n.flags&32){var r=n.stateNode;try{uu(r,"")}catch(_){Vt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&zx(r,s),fp(a,o);var u=fp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Wx(r,h):c==="dangerouslySetInnerHTML"?Vx(r,h):c==="children"?uu(r,h):i_(r,c,h,u)}switch(a){case"input":op(r,s);break;case"textarea":Bx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ta(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ta(r,!!s.multiple,s.defaultValue,!0):Ta(r,!!s.multiple,s.multiple?[]:"",!1))}r[vu]=s}catch(_){Vt(n,n.return,_)}}break;case 6:if(Yi(e,n),sr(n),i&4){if(n.stateNode===null)throw Error(fe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Vt(n,n.return,_)}}break;case 3:if(Yi(e,n),sr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{hu(e.containerInfo)}catch(_){Vt(n,n.return,_)}break;case 4:Yi(e,n),sr(n);break;case 13:Yi(e,n),sr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(O_=Xt())),i&4&&R0(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Rn=(u=Rn)||c,Yi(e,n),Rn=u):Yi(e,n),sr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Re=n,c=n.child;c!==null;){for(h=Re=c;Re!==null;){switch(f=Re,p=f.child,f.tag){case 0:case 11:case 14:case 15:Yl(4,f,f.return);break;case 1:va(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Vt(i,t,_)}}break;case 5:va(f,f.return);break;case 22:if(f.memoizedState!==null){b0(h);continue}}p!==null?(p.return=f,Re=p):b0(h)}c=c.sibling}e:for(c=null,h=n;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Gx("display",o))}catch(_){Vt(n,n.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){Vt(n,n.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Yi(e,n),sr(n),i&4&&R0(n);break;case 21:break;default:Yi(e,n),sr(n)}}function sr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(mS(t)){var i=t;break e}t=t.return}throw Error(fe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(uu(r,""),i.flags&=-33);var s=C0(n);Hp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=C0(n);Bp(n,a,o);break;default:throw Error(fe(161))}}catch(l){Vt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function VT(n,e,t){Re=n,vS(n)}function vS(n,e,t){for(var i=(n.mode&1)!==0;Re!==null;){var r=Re,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||uc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Rn;a=uc;var u=Rn;if(uc=o,(Rn=l)&&!u)for(Re=r;Re!==null;)o=Re,l=o.child,o.tag===22&&o.memoizedState!==null?L0(r):l!==null?(l.return=o,Re=l):L0(r);for(;s!==null;)Re=s,vS(s),s=s.sibling;Re=r,uc=a,Rn=u}P0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Re=s):P0(n)}}function P0(n){for(;Re!==null;){var e=Re;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Rn||Sd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Rn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Zi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&h0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}h0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&hu(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(fe(163))}Rn||e.flags&512&&zp(e)}catch(f){Vt(e,e.return,f)}}if(e===n){Re=null;break}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}}function b0(n){for(;Re!==null;){var e=Re;if(e===n){Re=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Re=t;break}Re=e.return}}function L0(n){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Sd(4,e)}catch(l){Vt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Vt(e,r,l)}}var s=e.return;try{zp(e)}catch(l){Vt(e,s,l)}break;case 5:var o=e.return;try{zp(e)}catch(l){Vt(e,o,l)}}}catch(l){Vt(e,e.return,l)}if(e===n){Re=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Re=a;break}Re=e.return}}var GT=Math.ceil,Gf=Kr.ReactCurrentDispatcher,U_=Kr.ReactCurrentOwner,Hi=Kr.ReactCurrentBatchConfig,ht=0,pn=null,Zt=null,xn=0,di=0,xa=Bs(0),sn=0,Tu=null,Co=0,Md=0,N_=0,ql=null,qn=null,O_=0,Ya=1/0,Pr=null,Wf=!1,Vp=null,Ts=null,cc=!1,hs=null,Xf=0,$l=0,Gp=null,of=-1,af=0;function Vn(){return ht&6?Xt():of!==-1?of:of=Xt()}function ws(n){return n.mode&1?ht&2&&xn!==0?xn&-xn:AT.transition!==null?(af===0&&(af=ny()),af):(n=St,n!==0||(n=window.event,n=n===void 0?16:uy(n.type)),n):1}function ir(n,e,t,i){if(50<$l)throw $l=0,Gp=null,Error(fe(185));ku(n,t,i),(!(ht&2)||n!==pn)&&(n===pn&&(!(ht&2)&&(Md|=t),sn===4&&cs(n,xn)),Jn(n,i),t===1&&ht===0&&!(e.mode&1)&&(Ya=Xt()+500,vd&&Hs()))}function Jn(n,e){var t=n.callbackNode;A1(n,e);var i=Rf(n,n===pn?xn:0);if(i===0)t!==null&&Bg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Bg(t),e===1)n.tag===0?wT(D0.bind(null,n)):Ry(D0.bind(null,n)),ST(function(){!(ht&6)&&Hs()}),t=null;else{switch(iy(i)){case 1:t=l_;break;case 4:t=ey;break;case 16:t=Cf;break;case 536870912:t=ty;break;default:t=Cf}t=AS(t,xS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function xS(n,e){if(of=-1,af=0,ht&6)throw Error(fe(327));var t=n.callbackNode;if(Pa()&&n.callbackNode!==t)return null;var i=Rf(n,n===pn?xn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Yf(n,i);else{e=i;var r=ht;ht|=2;var s=SS();(pn!==n||xn!==e)&&(Pr=null,Ya=Xt()+500,mo(n,e));do try{YT();break}catch(a){yS(n,a)}while(!0);S_(),Gf.current=s,ht=r,Zt!==null?e=0:(pn=null,xn=0,e=sn)}if(e!==0){if(e===2&&(r=_p(n),r!==0&&(i=r,e=Wp(n,r))),e===1)throw t=Tu,mo(n,0),cs(n,i),Jn(n,Xt()),t;if(e===6)cs(n,i);else{if(r=n.current.alternate,!(i&30)&&!WT(r)&&(e=Yf(n,i),e===2&&(s=_p(n),s!==0&&(i=s,e=Wp(n,s))),e===1))throw t=Tu,mo(n,0),cs(n,i),Jn(n,Xt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(fe(345));case 2:Js(n,qn,Pr);break;case 3:if(cs(n,i),(i&130023424)===i&&(e=O_+500-Xt(),10<e)){if(Rf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Vn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Tp(Js.bind(null,n,qn,Pr),e);break}Js(n,qn,Pr);break;case 4:if(cs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-nr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*GT(i/1960))-i,10<i){n.timeoutHandle=Tp(Js.bind(null,n,qn,Pr),i);break}Js(n,qn,Pr);break;case 5:Js(n,qn,Pr);break;default:throw Error(fe(329))}}}return Jn(n,Xt()),n.callbackNode===t?xS.bind(null,n):null}function Wp(n,e){var t=ql;return n.current.memoizedState.isDehydrated&&(mo(n,e).flags|=256),n=Yf(n,e),n!==2&&(e=qn,qn=t,e!==null&&Xp(e)),n}function Xp(n){qn===null?qn=n:qn.push.apply(qn,n)}function WT(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!rr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cs(n,e){for(e&=~N_,e&=~Md,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-nr(e),i=1<<t;n[t]=-1,e&=~i}}function D0(n){if(ht&6)throw Error(fe(327));Pa();var e=Rf(n,0);if(!(e&1))return Jn(n,Xt()),null;var t=Yf(n,e);if(n.tag!==0&&t===2){var i=_p(n);i!==0&&(e=i,t=Wp(n,i))}if(t===1)throw t=Tu,mo(n,0),cs(n,e),Jn(n,Xt()),t;if(t===6)throw Error(fe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Js(n,qn,Pr),Jn(n,Xt()),null}function F_(n,e){var t=ht;ht|=1;try{return n(e)}finally{ht=t,ht===0&&(Ya=Xt()+500,vd&&Hs())}}function Ro(n){hs!==null&&hs.tag===0&&!(ht&6)&&Pa();var e=ht;ht|=1;var t=Hi.transition,i=St;try{if(Hi.transition=null,St=1,n)return n()}finally{St=i,Hi.transition=t,ht=e,!(ht&6)&&Hs()}}function k_(){di=xa.current,Dt(xa)}function mo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,yT(t)),Zt!==null)for(t=Zt.return;t!==null;){var i=t;switch(v_(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&If();break;case 3:Wa(),Dt(Zn),Dt(In),C_();break;case 5:A_(i);break;case 4:Wa();break;case 13:Dt(Ft);break;case 19:Dt(Ft);break;case 10:M_(i.type._context);break;case 22:case 23:k_()}t=t.return}if(pn=n,Zt=n=As(n.current,null),xn=di=e,sn=0,Tu=null,N_=Md=Co=0,qn=ql=null,lo!==null){for(e=0;e<lo.length;e++)if(t=lo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}lo=null}return n}function yS(n,e){do{var t=Zt;try{if(S_(),nf.current=Vf,Hf){for(var i=Bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Hf=!1}if(Ao=0,dn=nn=Bt=null,Xl=!1,Su=0,U_.current=null,t===null||t.return===null){sn=1,Tu=e,Zt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=xn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=x0(o);if(p!==null){p.flags&=-257,y0(p,o,a,s,e),p.mode&1&&v0(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){v0(s,u,e),z_();break e}l=Error(fe(426))}}else if(It&&a.mode&1){var m=x0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),y0(m,o,a,s,e),x_(Xa(l,a));break e}}s=l=Xa(l,a),sn!==4&&(sn=2),ql===null?ql=[s]:ql.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=iS(s,l,e);d0(s,d);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ts===null||!Ts.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=rS(s,a,e);d0(s,y);break e}}s=s.return}while(s!==null)}ES(t)}catch(C){e=C,Zt===t&&t!==null&&(Zt=t=t.return);continue}break}while(!0)}function SS(){var n=Gf.current;return Gf.current=Vf,n===null?Vf:n}function z_(){(sn===0||sn===3||sn===2)&&(sn=4),pn===null||!(Co&268435455)&&!(Md&268435455)||cs(pn,xn)}function Yf(n,e){var t=ht;ht|=2;var i=SS();(pn!==n||xn!==e)&&(Pr=null,mo(n,e));do try{XT();break}catch(r){yS(n,r)}while(!0);if(S_(),ht=t,Gf.current=i,Zt!==null)throw Error(fe(261));return pn=null,xn=0,sn}function XT(){for(;Zt!==null;)MS(Zt)}function YT(){for(;Zt!==null&&!g1();)MS(Zt)}function MS(n){var e=wS(n.alternate,n,di);n.memoizedProps=n.pendingProps,e===null?ES(n):Zt=e,U_.current=null}function ES(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=zT(t,e),t!==null){t.flags&=32767,Zt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{sn=6,Zt=null;return}}else if(t=kT(t,e,di),t!==null){Zt=t;return}if(e=e.sibling,e!==null){Zt=e;return}Zt=e=n}while(e!==null);sn===0&&(sn=5)}function Js(n,e,t){var i=St,r=Hi.transition;try{Hi.transition=null,St=1,qT(n,e,t,i)}finally{Hi.transition=r,St=i}return null}function qT(n,e,t,i){do Pa();while(hs!==null);if(ht&6)throw Error(fe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(fe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(C1(n,s),n===pn&&(Zt=pn=null,xn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||cc||(cc=!0,AS(Cf,function(){return Pa(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Hi.transition,Hi.transition=null;var o=St;St=1;var a=ht;ht|=4,U_.current=null,HT(n,t),gS(t,n),hT(Mp),Pf=!!Sp,Mp=Sp=null,n.current=t,VT(t),v1(),ht=a,St=o,Hi.transition=s}else n.current=t;if(cc&&(cc=!1,hs=n,Xf=r),s=n.pendingLanes,s===0&&(Ts=null),S1(t.stateNode),Jn(n,Xt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Wf)throw Wf=!1,n=Vp,Vp=null,n;return Xf&1&&n.tag!==0&&Pa(),s=n.pendingLanes,s&1?n===Gp?$l++:($l=0,Gp=n):$l=0,Hs(),null}function Pa(){if(hs!==null){var n=iy(Xf),e=Hi.transition,t=St;try{if(Hi.transition=null,St=16>n?16:n,hs===null)var i=!1;else{if(n=hs,hs=null,Xf=0,ht&6)throw Error(fe(331));var r=ht;for(ht|=4,Re=n.current;Re!==null;){var s=Re,o=s.child;if(Re.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Re=u;Re!==null;){var c=Re;switch(c.tag){case 0:case 11:case 15:Yl(8,c,s)}var h=c.child;if(h!==null)h.return=c,Re=h;else for(;Re!==null;){c=Re;var f=c.sibling,p=c.return;if(pS(c),c===u){Re=null;break}if(f!==null){f.return=p,Re=f;break}Re=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Re=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Re=o;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Yl(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Re=d;break e}Re=s.return}}var v=n.current;for(Re=v;Re!==null;){o=Re;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Re=x;else e:for(o=v;Re!==null;){if(a=Re,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sd(9,a)}}catch(C){Vt(a,a.return,C)}if(a===o){Re=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Re=y;break e}Re=a.return}}if(ht=r,Hs(),gr&&typeof gr.onPostCommitFiberRoot=="function")try{gr.onPostCommitFiberRoot(hd,n)}catch{}i=!0}return i}finally{St=t,Hi.transition=e}}return!1}function I0(n,e,t){e=Xa(t,e),e=iS(n,e,1),n=Es(n,e,1),e=Vn(),n!==null&&(ku(n,1,e),Jn(n,e))}function Vt(n,e,t){if(n.tag===3)I0(n,n,t);else for(;e!==null;){if(e.tag===3){I0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ts===null||!Ts.has(i))){n=Xa(t,n),n=rS(e,n,1),e=Es(e,n,1),n=Vn(),e!==null&&(ku(e,1,n),Jn(e,n));break}}e=e.return}}function $T(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Vn(),n.pingedLanes|=n.suspendedLanes&t,pn===n&&(xn&t)===t&&(sn===4||sn===3&&(xn&130023424)===xn&&500>Xt()-O_?mo(n,0):N_|=t),Jn(n,e)}function TS(n,e){e===0&&(n.mode&1?(e=ec,ec<<=1,!(ec&130023424)&&(ec=4194304)):e=1);var t=Vn();n=Wr(n,e),n!==null&&(ku(n,e,t),Jn(n,t))}function jT(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),TS(n,t)}function KT(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(fe(314))}i!==null&&i.delete(e),TS(n,t)}var wS;wS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Zn.current)Kn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Kn=!1,FT(n,e,t);Kn=!!(n.flags&131072)}else Kn=!1,It&&e.flags&1048576&&Py(e,Of,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;sf(n,e),n=e.pendingProps;var r=Ha(e,In.current);Ra(e,t),r=P_(null,e,i,n,r,t);var s=b_();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qn(i)?(s=!0,Uf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,T_(e),r.updater=yd,e.stateNode=r,r._reactInternals=e,Lp(e,i,n,t),e=Up(null,e,i,!0,s,t)):(e.tag=0,It&&s&&g_(e),kn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(sf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=QT(i),n=Zi(i,n),r){case 0:e=Ip(null,e,i,n,t);break e;case 1:e=E0(null,e,i,n,t);break e;case 11:e=S0(null,e,i,n,t);break e;case 14:e=M0(null,e,i,Zi(i.type,n),t);break e}throw Error(fe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),Ip(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),E0(n,e,i,r,t);case 3:e:{if(lS(e),n===null)throw Error(fe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ny(n,e),zf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Xa(Error(fe(423)),e),e=T0(n,e,i,t,r);break e}else if(i!==r){r=Xa(Error(fe(424)),e),e=T0(n,e,i,t,r);break e}else for(vi=Ms(e.stateNode.containerInfo.firstChild),Mi=e,It=!0,Ji=null,t=Iy(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Va(),i===r){e=Xr(n,e,t);break e}kn(n,e,i,t)}e=e.child}return e;case 5:return Oy(e),n===null&&Rp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Ep(i,r)?o=null:s!==null&&Ep(i,s)&&(e.flags|=32),aS(n,e),kn(n,e,o,t),e.child;case 6:return n===null&&Rp(e),null;case 13:return uS(n,e,t);case 4:return w_(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ga(e,null,i,t):kn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),S0(n,e,i,r,t);case 7:return kn(n,e,e.pendingProps,t),e.child;case 8:return kn(n,e,e.pendingProps.children,t),e.child;case 12:return kn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Rt(Ff,i._currentValue),i._currentValue=o,s!==null)if(rr(s.value,o)){if(s.children===r.children&&!Zn.current){e=Xr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Br(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Pp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(fe(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Pp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ra(e,t),r=Gi(r),i=i(r),e.flags|=1,kn(n,e,i,t),e.child;case 14:return i=e.type,r=Zi(i,e.pendingProps),r=Zi(i.type,r),M0(n,e,i,r,t);case 15:return sS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),sf(n,e),e.tag=1,Qn(i)?(n=!0,Uf(e)):n=!1,Ra(e,t),nS(e,i,r),Lp(e,i,r,t),Up(null,e,i,!0,n,t);case 19:return cS(n,e,t);case 22:return oS(n,e,t)}throw Error(fe(156,e.tag))};function AS(n,e){return Jx(n,e)}function ZT(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fi(n,e,t,i){return new ZT(n,e,t,i)}function B_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function QT(n){if(typeof n=="function")return B_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===s_)return 11;if(n===o_)return 14}return 2}function As(n,e){var t=n.alternate;return t===null?(t=Fi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function lf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")B_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ua:return _o(t.children,r,s,e);case r_:o=8,r|=8;break;case tp:return n=Fi(12,t,e,r|2),n.elementType=tp,n.lanes=s,n;case np:return n=Fi(13,t,e,r),n.elementType=np,n.lanes=s,n;case ip:return n=Fi(19,t,e,r),n.elementType=ip,n.lanes=s,n;case Ox:return Ed(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Ux:o=10;break e;case Nx:o=9;break e;case s_:o=11;break e;case o_:o=14;break e;case as:o=16,i=null;break e}throw Error(fe(130,n==null?n:typeof n,""))}return e=Fi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function _o(n,e,t,i){return n=Fi(7,n,i,e),n.lanes=t,n}function Ed(n,e,t,i){return n=Fi(22,n,i,e),n.elementType=Ox,n.lanes=t,n.stateNode={isHidden:!1},n}function uh(n,e,t){return n=Fi(6,n,null,e),n.lanes=t,n}function ch(n,e,t){return e=Fi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function JT(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wd(0),this.expirationTimes=Wd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function H_(n,e,t,i,r,s,o,a,l){return n=new JT(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},T_(s),n}function ew(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:la,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function CS(n){if(!n)return Is;n=n._reactInternals;e:{if(No(n)!==n||n.tag!==1)throw Error(fe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(fe(171))}if(n.tag===1){var t=n.type;if(Qn(t))return Cy(n,t,e)}return e}function RS(n,e,t,i,r,s,o,a,l){return n=H_(t,i,!0,n,r,s,o,a,l),n.context=CS(null),t=n.current,i=Vn(),r=ws(t),s=Br(i,r),s.callback=e??null,Es(t,s,r),n.current.lanes=r,ku(n,r,i),Jn(n,i),n}function Td(n,e,t,i){var r=e.current,s=Vn(),o=ws(r);return t=CS(t),e.context===null?e.context=t:e.pendingContext=t,e=Br(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Es(r,e,o),n!==null&&(ir(n,r,o,s),tf(n,r,o)),o}function qf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function U0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function V_(n,e){U0(n,e),(n=n.alternate)&&U0(n,e)}function tw(){return null}var PS=typeof reportError=="function"?reportError:function(n){console.error(n)};function G_(n){this._internalRoot=n}wd.prototype.render=G_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(fe(409));Td(n,e,null,null)};wd.prototype.unmount=G_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ro(function(){Td(null,n,null,null)}),e[Gr]=null}};function wd(n){this._internalRoot=n}wd.prototype.unstable_scheduleHydration=function(n){if(n){var e=oy();n={blockedOn:null,target:n,priority:e};for(var t=0;t<us.length&&e!==0&&e<us[t].priority;t++);us.splice(t,0,n),t===0&&ly(n)}};function W_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ad(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function N0(){}function nw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=qf(o);s.call(u)}}var o=RS(e,i,n,0,null,!1,!1,"",N0);return n._reactRootContainer=o,n[Gr]=o.current,_u(n.nodeType===8?n.parentNode:n),Ro(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=qf(l);a.call(u)}}var l=H_(n,0,!1,null,null,!1,!1,"",N0);return n._reactRootContainer=l,n[Gr]=l.current,_u(n.nodeType===8?n.parentNode:n),Ro(function(){Td(e,l,t,i)}),l}function Cd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=qf(o);a.call(l)}}Td(e,o,n,r)}else o=nw(t,e,n,r,i);return qf(o)}ry=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=bl(e.pendingLanes);t!==0&&(u_(e,t|1),Jn(e,Xt()),!(ht&6)&&(Ya=Xt()+500,Hs()))}break;case 13:Ro(function(){var i=Wr(n,1);if(i!==null){var r=Vn();ir(i,n,1,r)}}),V_(n,1)}};c_=function(n){if(n.tag===13){var e=Wr(n,134217728);if(e!==null){var t=Vn();ir(e,n,134217728,t)}V_(n,134217728)}};sy=function(n){if(n.tag===13){var e=ws(n),t=Wr(n,e);if(t!==null){var i=Vn();ir(t,n,e,i)}V_(n,e)}};oy=function(){return St};ay=function(n,e){var t=St;try{return St=n,e()}finally{St=t}};hp=function(n,e,t){switch(e){case"input":if(op(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=gd(i);if(!r)throw Error(fe(90));kx(i),op(i,r)}}}break;case"textarea":Bx(n,t);break;case"select":e=t.value,e!=null&&Ta(n,!!t.multiple,e,!1)}};qx=F_;$x=Ro;var iw={usingClientEntryPoint:!1,Events:[Bu,ha,gd,Xx,Yx,F_]},gl={findFiberByHostInstance:ao,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rw={bundleType:gl.bundleType,version:gl.version,rendererPackageName:gl.rendererPackageName,rendererConfig:gl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Zx(n),n===null?null:n.stateNode},findFiberByHostInstance:gl.findFiberByHostInstance||tw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{hd=fc.inject(rw),gr=fc}catch{}}Ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iw;Ci.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!W_(e))throw Error(fe(200));return ew(n,e,null,t)};Ci.createRoot=function(n,e){if(!W_(n))throw Error(fe(299));var t=!1,i="",r=PS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=H_(n,1,!1,null,null,t,!1,i,r),n[Gr]=e.current,_u(n.nodeType===8?n.parentNode:n),new G_(e)};Ci.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(fe(188)):(n=Object.keys(n).join(","),Error(fe(268,n)));return n=Zx(e),n=n===null?null:n.stateNode,n};Ci.flushSync=function(n){return Ro(n)};Ci.hydrate=function(n,e,t){if(!Ad(e))throw Error(fe(200));return Cd(null,n,e,!0,t)};Ci.hydrateRoot=function(n,e,t){if(!W_(n))throw Error(fe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=PS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=RS(e,null,n,1,t??null,r,!1,s,o),n[Gr]=e.current,_u(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new wd(e)};Ci.render=function(n,e,t){if(!Ad(e))throw Error(fe(200));return Cd(null,n,e,!1,t)};Ci.unmountComponentAtNode=function(n){if(!Ad(n))throw Error(fe(40));return n._reactRootContainer?(Ro(function(){Cd(null,null,n,!1,function(){n._reactRootContainer=null,n[Gr]=null})}),!0):!1};Ci.unstable_batchedUpdates=F_;Ci.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Ad(t))throw Error(fe(200));if(n==null||n._reactInternals===void 0)throw Error(fe(38));return Cd(n,e,t,!1,i)};Ci.version="18.3.1-next-f1338f8080-20240426";function bS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bS)}catch(n){console.error(n)}}bS(),bx.exports=Ci;var sw=bx.exports,LS,O0=sw;LS=O0.createRoot,O0.hydrateRoot;function ow(){return Xe.jsxs("nav",{children:[Xe.jsx("div",{className:"logo",children:"NEBULA"}),Xe.jsxs("div",{className:"nav-links",children:[Xe.jsx("a",{href:"#product",children:"Product"}),Xe.jsx("a",{href:"#experiments",children:"Experiments"}),Xe.jsx("a",{href:"#system",children:"System"}),Xe.jsx("a",{href:"#about",children:"About"})]}),Xe.jsx("a",{href:"#start",className:"cta-button",children:"Get Started"})]})}function aw(){return Xe.jsx("section",{id:"hero",children:Xe.jsxs("div",{className:"section-content",children:[Xe.jsx("div",{className:"label",children:"Digital Flow System"}),Xe.jsx("h1",{children:"Shape the Flow."}),Xe.jsx("div",{className:"subtext",children:"A generative interface exploring data, motion and digital space."}),Xe.jsx("a",{href:"#explore",className:"cta-button",children:"Explore System"})]})})}function lw(){return Xe.jsx("section",{id:"convergence",children:Xe.jsxs("div",{className:"section-content",children:[Xe.jsx("h2",{children:"Everything Connects."}),Xe.jsx("div",{className:"description",children:"Complex systems become visible when motion, data and interaction move as one."})]})})}function uw(){return Xe.jsx("section",{id:"distortion",children:Xe.jsxs("div",{className:"section-content",children:[Xe.jsx("h2",{children:"Reality Is Fluid."}),Xe.jsx("div",{className:"description",children:"Interfaces should respond, adapt and evolve."})]})})}function cw(){return Xe.jsx("section",{id:"crossing",children:Xe.jsx("div",{className:"section-content",children:Xe.jsxs("h2",{children:["ONE SYSTEM.",Xe.jsx("br",{}),"INFINITE MOTION."]})})})}function fw(){return Xe.jsx("section",{id:"flow",children:Xe.jsxs("div",{className:"section-content",children:[Xe.jsx("h2",{children:"Built for the Future."}),Xe.jsx("div",{className:"description",children:"An experimental space where technology becomes motion."})]})})}function dw(){return Xe.jsx("section",{id:"final",children:Xe.jsxs("div",{className:"section-content",children:[Xe.jsx("h2",{children:"ENTER THE FLOW"}),Xe.jsx("a",{href:"#start",className:"cta-button",children:"Start Exploring"})]})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const X_="168",hw=0,F0=1,pw=2,DS=1,mw=2,Rr=3,Us=0,ei=1,Ir=2,Cs=0,ba=1,Yp=2,k0=3,z0=4,_w=5,so=100,gw=101,vw=102,xw=103,yw=104,Sw=200,Mw=201,Ew=202,Tw=203,qp=204,$p=205,ww=206,Aw=207,Cw=208,Rw=209,Pw=210,bw=211,Lw=212,Dw=213,Iw=214,Uw=0,Nw=1,Ow=2,$f=3,Fw=4,kw=5,zw=6,Bw=7,IS=0,Hw=1,Vw=2,Rs=0,Gw=1,Ww=2,Xw=3,Yw=4,qw=5,$w=6,jw=7,US=300,qa=301,$a=302,jp=303,Kp=304,Rd=306,Zp=1e3,co=1001,Qp=1002,ki=1003,Kw=1004,dc=1005,er=1006,fh=1007,fo=1008,Yr=1009,NS=1010,OS=1011,wu=1012,Y_=1013,Po=1014,Fr=1015,Vu=1016,q_=1017,$_=1018,ja=1020,FS=35902,kS=1021,zS=1022,tr=1023,BS=1024,HS=1025,La=1026,Ka=1027,VS=1028,j_=1029,GS=1030,K_=1031,Z_=1033,uf=33776,cf=33777,ff=33778,df=33779,Jp=35840,em=35841,tm=35842,nm=35843,im=36196,rm=37492,sm=37496,om=37808,am=37809,lm=37810,um=37811,cm=37812,fm=37813,dm=37814,hm=37815,pm=37816,mm=37817,_m=37818,gm=37819,vm=37820,xm=37821,hf=36492,ym=36494,Sm=36495,WS=36283,Mm=36284,Em=36285,Tm=36286,Zw=3200,Qw=3201,Jw=0,eA=1,fs="",ar="srgb",Vs="srgb-linear",Q_="display-p3",Pd="display-p3-linear",jf="linear",Lt="srgb",Kf="rec709",Zf="p3",zo=7680,B0=519,tA=512,nA=513,iA=514,XS=515,rA=516,sA=517,oA=518,aA=519,H0=35044,V0="300 es",kr=2e3,Qf=2001;class ll{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dh=Math.PI/180,wm=180/Math.PI;function Gu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function $n(n,e,t){return Math.max(e,Math.min(t,n))}function lA(n,e){return(n%e+e)%e}function hh(n,e,t){return(1-t)*n+t*e}function vl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class pt{constructor(e=0,t=0){pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,i,r,s,o,a,l,u){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],v=r[1],x=r[4],y=r[7],C=r[2],w=r[5],M=r[8];return s[0]=o*_+a*v+l*C,s[3]=o*m+a*x+l*w,s[6]=o*d+a*y+l*M,s[1]=u*_+c*v+h*C,s[4]=u*m+c*x+h*w,s[7]=u*d+c*y+h*M,s[2]=f*_+p*v+g*C,s[5]=f*m+p*x+g*w,s[8]=f*d+p*y+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,f=a*l-c*s,p=u*s-o*l,g=t*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ph.makeScale(e,t)),this}rotate(e){return this.premultiply(ph.makeRotation(-e)),this}translate(e,t){return this.premultiply(ph.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ph=new Qe;function YS(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Au(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function uA(){const n=Au("canvas");return n.style.display="block",n}const G0={};function jl(n){n in G0||(G0[n]=!0,console.warn(n))}function cA(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const W0=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),X0=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xl={[Vs]:{transfer:jf,primaries:Kf,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ar]:{transfer:Lt,primaries:Kf,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Pd]:{transfer:jf,primaries:Zf,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(X0),fromReference:n=>n.applyMatrix3(W0)},[Q_]:{transfer:Lt,primaries:Zf,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(X0),fromReference:n=>n.applyMatrix3(W0).convertLinearToSRGB()}},fA=new Set([Vs,Pd]),gt={enabled:!0,_workingColorSpace:Vs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!fA.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=xl[e].toReference,r=xl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return xl[n].primaries},getTransfer:function(n){return n===fs?jf:xl[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(xl[e].luminanceCoefficients)}};function Da(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Bo;class dA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bo===void 0&&(Bo=Au("canvas")),Bo.width=e.width,Bo.height=e.height;const i=Bo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Bo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Au("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Da(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Da(t[i]/255)*255):t[i]=Da(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hA=0;class qS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hA++}),this.uuid=Gu(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_h(r[o].image)):s.push(_h(r[o]))}else s=_h(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function _h(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pA=0;class Ln extends ll{constructor(e=Ln.DEFAULT_IMAGE,t=Ln.DEFAULT_MAPPING,i=co,r=co,s=er,o=fo,a=tr,l=Yr,u=Ln.DEFAULT_ANISOTROPY,c=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pA++}),this.uuid=Gu(),this.name="",this.source=new qS(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==US)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zp:e.x=e.x-Math.floor(e.x);break;case co:e.x=e.x<0?0:1;break;case Qp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zp:e.y=e.y-Math.floor(e.y);break;case co:e.y=e.y<0?0:1;break;case Qp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=US;Ln.DEFAULT_ANISOTROPY=1;class hn{constructor(e=0,t=0,i=0,r=1){hn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,C=(d+1)/2,w=(c+f)/4,M=(h+_)/4,R=(g+m)/4;return x>y&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=M/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=M/s,r=R/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mA extends ll{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:er,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qS(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bo extends mA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class $S extends Ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ki,this.minFilter=ki,this.wrapR=co,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _A extends Ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ki,this.minFilter=ki,this.wrapR=co,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wu{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||u!==p||c!==g){let m=1-a;const d=l*f+u*p+c*g+h*_,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const C=Math.sqrt(x),w=Math.atan2(C,d*v);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const y=a*v;if(l=l*m+f*y,u=u*m+p*y,c=c*m+g*y,h=h*m+_*y,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=C,u*=C,c*=C,h*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+c*h+l*p-u*f,e[t+1]=l*g+c*f+u*h-a*p,e[t+2]=u*g+c*p+a*f-l*h,e[t+3]=c*g-a*h-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"YXZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"ZXY":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"ZYX":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"YZX":this._x=f*c*h+u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h-f*p*g;break;case"XZY":this._x=f*c*h-u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($n(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Y0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Y0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gh.copy(this).projectOnVector(e),this.sub(gh)}reflect(e){return this.sub(gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gh=new Y,Y0=new Wu;class Xu{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qi):qi.fromBufferAttribute(s,o),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hc.copy(i.boundingBox)),hc.applyMatrix4(e.matrixWorld),this.union(hc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yl),pc.subVectors(this.max,yl),Ho.subVectors(e.a,yl),Vo.subVectors(e.b,yl),Go.subVectors(e.c,yl),es.subVectors(Vo,Ho),ts.subVectors(Go,Vo),Ws.subVectors(Ho,Go);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Ws.z,Ws.y,es.z,0,-es.x,ts.z,0,-ts.x,Ws.z,0,-Ws.x,-es.y,es.x,0,-ts.y,ts.x,0,-Ws.y,Ws.x,0];return!vh(t,Ho,Vo,Go,pc)||(t=[1,0,0,0,1,0,0,0,1],!vh(t,Ho,Vo,Go,pc))?!1:(mc.crossVectors(es,ts),t=[mc.x,mc.y,mc.z],vh(t,Ho,Vo,Go,pc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Er=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],qi=new Y,hc=new Xu,Ho=new Y,Vo=new Y,Go=new Y,es=new Y,ts=new Y,Ws=new Y,yl=new Y,pc=new Y,mc=new Y,Xs=new Y;function vh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Xs.fromArray(n,s);const a=r.x*Math.abs(Xs.x)+r.y*Math.abs(Xs.y)+r.z*Math.abs(Xs.z),l=e.dot(Xs),u=t.dot(Xs),c=i.dot(Xs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const gA=new Xu,Sl=new Y,xh=new Y;class bd{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):gA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sl.subVectors(e,this.center);const t=Sl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Sl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sl.copy(e.center).add(xh)),this.expandByPoint(Sl.copy(e.center).sub(xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tr=new Y,yh=new Y,_c=new Y,ns=new Y,Sh=new Y,gc=new Y,Mh=new Y;class jS{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tr.copy(this.origin).addScaledVector(this.direction,t),Tr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){yh.copy(e).add(t).multiplyScalar(.5),_c.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(yh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(_c),a=ns.dot(this.direction),l=-ns.dot(_c),u=ns.lengthSq(),c=Math.abs(1-o*o);let h,f,p,g;if(c>0)if(h=o*l-a,f=o*a-l,g=s*c,h>=0)if(f>=-g)if(f<=g){const _=1/c;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(yh).addScaledVector(_c,f),p}intersectSphere(e,t){Tr.subVectors(e.center,this.origin);const i=Tr.dot(this.direction),r=Tr.dot(Tr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Tr)!==null}intersectTriangle(e,t,i,r,s){Sh.subVectors(t,e),gc.subVectors(i,e),Mh.crossVectors(Sh,gc);let o=this.direction.dot(Mh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ns.subVectors(this.origin,e);const l=a*this.direction.dot(gc.crossVectors(ns,gc));if(l<0)return null;const u=a*this.direction.dot(Sh.cross(ns));if(u<0||l+u>o)return null;const c=-a*ns.dot(Mh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(e,t,i,r,s,o,a,l,u,c,h,f,p,g,_,m){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,h,f,p,g,_,m)}set(e,t,i,r,s,o,a,l,u,c,h,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Wo.setFromMatrixColumn(e,0).length(),s=1/Wo.setFromMatrixColumn(e,1).length(),o=1/Wo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*h,g=a*c,_=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=p+g*u,t[5]=f-_*u,t[9]=-a*l,t[2]=_-f*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*h,g=u*c,_=u*h;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*h,g=u*c,_=u*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*c,t[9]=_-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*h,g=a*c,_=a*h;t[0]=l*c,t[4]=g*u-p,t[8]=f*u+_,t[1]=l*h,t[5]=_*u+f,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=f*h+_,t[5]=o*c,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*c,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vA,e,xA)}lookAt(e,t,i){const r=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),is.crossVectors(i,ui),is.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),is.crossVectors(i,ui)),is.normalize(),vc.crossVectors(ui,is),r[0]=is.x,r[4]=vc.x,r[8]=ui.x,r[1]=is.y,r[5]=vc.y,r[9]=ui.y,r[2]=is.z,r[6]=vc.z,r[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],v=i[3],x=i[7],y=i[11],C=i[15],w=r[0],M=r[4],R=r[8],E=r[12],S=r[1],D=r[5],U=r[9],k=r[13],X=r[2],j=r[6],W=r[10],B=r[14],I=r[3],$=r[7],P=r[11],ie=r[15];return s[0]=o*w+a*S+l*X+u*I,s[4]=o*M+a*D+l*j+u*$,s[8]=o*R+a*U+l*W+u*P,s[12]=o*E+a*k+l*B+u*ie,s[1]=c*w+h*S+f*X+p*I,s[5]=c*M+h*D+f*j+p*$,s[9]=c*R+h*U+f*W+p*P,s[13]=c*E+h*k+f*B+p*ie,s[2]=g*w+_*S+m*X+d*I,s[6]=g*M+_*D+m*j+d*$,s[10]=g*R+_*U+m*W+d*P,s[14]=g*E+_*k+m*B+d*ie,s[3]=v*w+x*S+y*X+C*I,s[7]=v*M+x*D+y*j+C*$,s[11]=v*R+x*U+y*W+C*P,s[15]=v*E+x*k+y*B+C*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*l*h-r*u*h-s*a*f+i*u*f+r*a*p-i*l*p)+_*(+t*l*p-t*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+t*u*h-t*a*p-s*o*h+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-t*l*h+t*a*f+r*o*h-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],v=h*m*u-_*f*u+_*l*p-a*m*p-h*l*d+a*f*d,x=g*f*u-c*m*u-g*l*p+o*m*p+c*l*d-o*f*d,y=c*_*u-g*h*u+g*a*p-o*_*p-c*a*d+o*h*d,C=g*h*l-c*_*l-g*a*f+o*_*f+c*a*m-o*h*m,w=t*v+i*x+r*y+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=v*M,e[1]=(_*f*s-h*m*s-_*r*p+i*m*p+h*r*d-i*f*d)*M,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*d+i*l*d)*M,e[3]=(h*l*s-a*f*s-h*r*u+i*f*u+a*r*p-i*l*p)*M,e[4]=x*M,e[5]=(c*m*s-g*f*s+g*r*p-t*m*p-c*r*d+t*f*d)*M,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*d-t*l*d)*M,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*p+t*l*p)*M,e[8]=y*M,e[9]=(g*h*s-c*_*s-g*i*p+t*_*p+c*i*d-t*h*d)*M,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*d+t*a*d)*M,e[11]=(c*a*s-o*h*s-c*i*u+t*h*u+o*i*p-t*a*p)*M,e[12]=C*M,e[13]=(c*_*r-g*h*r+g*i*f-t*_*f-c*i*m+t*h*m)*M,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*M,e[15]=(o*h*r-c*a*r+c*i*l-t*h*l-o*i*f+t*a*f)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,f=s*u,p=s*c,g=s*h,_=o*c,m=o*h,d=a*h,v=l*u,x=l*c,y=l*h,C=i.x,w=i.y,M=i.z;return r[0]=(1-(_+d))*C,r[1]=(p+y)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(f+d))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+x)*M,r[9]=(m-v)*M,r[10]=(1-(f+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Wo.set(r[0],r[1],r[2]).length();const o=Wo.set(r[4],r[5],r[6]).length(),a=Wo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$i.copy(this);const u=1/s,c=1/o,h=1/a;return $i.elements[0]*=u,$i.elements[1]*=u,$i.elements[2]*=u,$i.elements[4]*=c,$i.elements[5]*=c,$i.elements[6]*=c,$i.elements[8]*=h,$i.elements[9]*=h,$i.elements[10]*=h,t.setFromRotationMatrix($i),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=kr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(a===kr)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Qf)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=kr){const l=this.elements,u=1/(t-e),c=1/(i-r),h=1/(o-s),f=(t+e)*u,p=(i+r)*c;let g,_;if(a===kr)g=(o+s)*h,_=-2*h;else if(a===Qf)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Wo=new Y,$i=new Qt,vA=new Y(0,0,0),xA=new Y(1,1,1),is=new Y,vc=new Y,ui=new Y,q0=new Qt,$0=new Wu;class qr{constructor(e=0,t=0,i=0,r=qr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin($n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$n(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($n(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$n(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin($n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return q0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(q0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $0.setFromEuler(this),this.setFromQuaternion($0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qr.DEFAULT_ORDER="XYZ";class KS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yA=0;const j0=new Y,Xo=new Wu,wr=new Qt,xc=new Y,Ml=new Y,SA=new Y,MA=new Wu,K0=new Y(1,0,0),Z0=new Y(0,1,0),Q0=new Y(0,0,1),J0={type:"added"},EA={type:"removed"},Yo={type:"childadded",child:null},Eh={type:"childremoved",child:null};class ti extends ll{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yA++}),this.uuid=Gu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const e=new Y,t=new qr,i=new Wu,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Qe}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new KS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xo.setFromAxisAngle(e,t),this.quaternion.multiply(Xo),this}rotateOnWorldAxis(e,t){return Xo.setFromAxisAngle(e,t),this.quaternion.premultiply(Xo),this}rotateX(e){return this.rotateOnAxis(K0,e)}rotateY(e){return this.rotateOnAxis(Z0,e)}rotateZ(e){return this.rotateOnAxis(Q0,e)}translateOnAxis(e,t){return j0.copy(e).applyQuaternion(this.quaternion),this.position.add(j0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(K0,e)}translateY(e){return this.translateOnAxis(Z0,e)}translateZ(e){return this.translateOnAxis(Q0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xc.copy(e):xc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wr.lookAt(Ml,xc,this.up):wr.lookAt(xc,Ml,this.up),this.quaternion.setFromRotationMatrix(wr),r&&(wr.extractRotation(r.matrixWorld),Xo.setFromRotationMatrix(wr),this.quaternion.premultiply(Xo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(J0),Yo.child=e,this.dispatchEvent(Yo),Yo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(EA),Eh.child=e,this.dispatchEvent(Eh),Eh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wr.multiply(e.parent.matrixWorld)),e.applyMatrix4(wr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(J0),Yo.child=e,this.dispatchEvent(Yo),Yo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,e,SA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,MA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ti.DEFAULT_UP=new Y(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ji=new Y,Ar=new Y,Th=new Y,Cr=new Y,qo=new Y,$o=new Y,ev=new Y,wh=new Y,Ah=new Y,Ch=new Y;class dr{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ji.subVectors(e,t),r.cross(ji);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ji.subVectors(r,t),Ar.subVectors(i,t),Th.subVectors(e,t);const o=ji.dot(ji),a=ji.dot(Ar),l=ji.dot(Th),u=Ar.dot(Ar),c=Ar.dot(Th),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(u*l-a*c)*f,g=(o*c-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Cr)===null?!1:Cr.x>=0&&Cr.y>=0&&Cr.x+Cr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Cr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cr.x),l.addScaledVector(o,Cr.y),l.addScaledVector(a,Cr.z),l)}static isFrontFacing(e,t,i,r){return ji.subVectors(i,t),Ar.subVectors(e,t),ji.cross(Ar).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),Ar.subVectors(this.a,this.b),ji.cross(Ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return dr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return dr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;qo.subVectors(r,i),$o.subVectors(s,i),wh.subVectors(e,i);const l=qo.dot(wh),u=$o.dot(wh);if(l<=0&&u<=0)return t.copy(i);Ah.subVectors(e,r);const c=qo.dot(Ah),h=$o.dot(Ah);if(c>=0&&h<=c)return t.copy(r);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(qo,o);Ch.subVectors(e,s);const p=qo.dot(Ch),g=$o.dot(Ch);if(g>=0&&p<=g)return t.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector($o,a);const m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return ev.subVectors(s,r),a=(h-c)/(h-c+(p-g)),t.copy(r).addScaledVector(ev,a);const d=1/(m+_+f);return o=_*d,a=f*d,t.copy(i).addScaledVector(qo,o).addScaledVector($o,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ZS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},yc={h:0,s:0,l:0};function Rh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class dt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ar){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=gt.workingColorSpace){if(e=lA(e,1),t=$n(t,0,1),i=$n(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Rh(o,s,e+1/3),this.g=Rh(o,s,e),this.b=Rh(o,s,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,t=ar){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ar){const i=ZS[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}copyLinearToSRGB(e){return this.r=mh(e.r),this.g=mh(e.g),this.b=mh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ar){return gt.fromWorkingColorSpace(wn.copy(this),e),Math.round($n(wn.r*255,0,255))*65536+Math.round($n(wn.g*255,0,255))*256+Math.round($n(wn.b*255,0,255))}getHexString(e=ar){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,s=wn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ar){gt.fromWorkingColorSpace(wn.copy(this),e);const t=wn.r,i=wn.g,r=wn.b;return e!==ar?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(yc);const i=hh(rs.h,yc.h,t),r=hh(rs.s,yc.s,t),s=hh(rs.l,yc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new dt;dt.NAMES=ZS;let TA=0;class Yu extends ll{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TA++}),this.uuid=Gu(),this.name="",this.type="Material",this.blending=ba,this.side=Us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qp,this.blendDst=$p,this.blendEquation=so,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=$f,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ba&&(i.blending=this.blending),this.side!==Us&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qp&&(i.blendSrc=this.blendSrc),this.blendDst!==$p&&(i.blendDst=this.blendDst),this.blendEquation!==so&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$f&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==B0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class QS extends Yu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qr,this.combine=IS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new Y,Sc=new pt;class xr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=H0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return jl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Sc.fromBufferAttribute(this,t),Sc.applyMatrix3(e),this.setXY(t,Sc.x,Sc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),r=Xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),r=Xn(r,this.array),s=Xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==H0&&(e.usage=this.usage),e}}class JS extends xr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class eM extends xr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xi extends xr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let wA=0;const bi=new Qt,Ph=new ti,jo=new Y,ci=new Xu,El=new Xu,ln=new Y;class Zr extends ll{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wA++}),this.uuid=Gu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(YS(e)?eM:JS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,i){return bi.makeTranslation(e,t,i),this.applyMatrix4(bi),this}scale(e,t,i){return bi.makeScale(e,t,i),this.applyMatrix4(bi),this}lookAt(e){return Ph.lookAt(e),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jo).negate(),this.translate(jo.x,jo.y,jo.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ci.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];El.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(ci.min,El.min),ci.expandByPoint(ln),ln.addVectors(ci.max,El.max),ci.expandByPoint(ln)):(ci.expandByPoint(El.min),ci.expandByPoint(El.max))}ci.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ln.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ln));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)ln.fromBufferAttribute(a,u),l&&(jo.fromBufferAttribute(e,u),ln.add(jo)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new Y,l[R]=new Y;const u=new Y,c=new Y,h=new Y,f=new pt,p=new pt,g=new pt,_=new Y,m=new Y;function d(R,E,S){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),c.sub(u),h.sub(u),p.sub(f),g.sub(f);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(D),a[R].add(_),a[E].add(_),a[S].add(_),l[R].add(m),l[E].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,E=v.length;R<E;++R){const S=v[R],D=S.start,U=S.count;for(let k=D,X=D+U;k<X;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new Y,y=new Y,C=new Y,w=new Y;function M(R){C.fromBufferAttribute(r,R),w.copy(C);const E=a[R];x.copy(E),x.sub(C.multiplyScalar(C.dot(E))).normalize(),y.crossVectors(w,E);const D=y.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,D)}for(let R=0,E=v.length;R<E;++R){const S=v[R],D=S.start,U=S.count;for(let k=D,X=D+U;k<X;k+=3)M(e.getX(k+0)),M(e.getX(k+1)),M(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,u=new Y,c=new Y,h=new Y;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let d=0;d<c;d++)f[g++]=u[p++]}return new xr(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tv=new Qt,Ys=new jS,Mc=new bd,nv=new Y,Ko=new Y,Zo=new Y,Qo=new Y,bh=new Y,Ec=new Y,Tc=new pt,wc=new pt,Ac=new pt,iv=new Y,rv=new Y,sv=new Y,Cc=new Y,Rc=new Y;class pr extends ti{constructor(e=new Zr,t=new QS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ec.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(bh.fromBufferAttribute(h,e),o?Ec.addScaledVector(bh,c):Ec.addScaledVector(bh.sub(t),c))}t.add(Ec)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mc.copy(i.boundingSphere),Mc.applyMatrix4(s),Ys.copy(e.ray).recast(e.near),!(Mc.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(Mc,nv)===null||Ys.origin.distanceToSquared(nv)>(e.far-e.near)**2))&&(tv.copy(s).invert(),Ys.copy(e.ray).applyMatrix4(tv),!(i.boundingBox!==null&&Ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){const w=a.getX(y),M=a.getX(y+1),R=a.getX(y+2);r=Pc(this,d,e,i,u,c,h,w,M,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=Pc(this,o,e,i,u,c,h,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){const w=y,M=y+1,R=y+2;r=Pc(this,d,e,i,u,c,h,w,M,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=m,x=m+1,y=m+2;r=Pc(this,o,e,i,u,c,h,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function AA(n,e,t,i,r,s,o,a){let l;if(e.side===ei?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Us,a),l===null)return null;Rc.copy(a),Rc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Rc);return u<t.near||u>t.far?null:{distance:u,point:Rc.clone(),object:n}}function Pc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Ko),n.getVertexPosition(l,Zo),n.getVertexPosition(u,Qo);const c=AA(n,e,t,i,Ko,Zo,Qo,Cc);if(c){r&&(Tc.fromBufferAttribute(r,a),wc.fromBufferAttribute(r,l),Ac.fromBufferAttribute(r,u),c.uv=dr.getInterpolation(Cc,Ko,Zo,Qo,Tc,wc,Ac,new pt)),s&&(Tc.fromBufferAttribute(s,a),wc.fromBufferAttribute(s,l),Ac.fromBufferAttribute(s,u),c.uv1=dr.getInterpolation(Cc,Ko,Zo,Qo,Tc,wc,Ac,new pt)),o&&(iv.fromBufferAttribute(o,a),rv.fromBufferAttribute(o,l),sv.fromBufferAttribute(o,u),c.normal=dr.getInterpolation(Cc,Ko,Zo,Qo,iv,rv,sv,new Y),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new Y,materialIndex:0};dr.getNormal(Ko,Zo,Qo,h.normal),c.face=h}return c}class qu extends Zr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xi(u,3)),this.setAttribute("normal",new xi(c,3)),this.setAttribute("uv",new xi(h,2));function g(_,m,d,v,x,y,C,w,M,R,E){const S=y/M,D=C/R,U=y/2,k=C/2,X=w/2,j=M+1,W=R+1;let B=0,I=0;const $=new Y;for(let P=0;P<W;P++){const ie=P*D-k;for(let Me=0;Me<j;Me++){const Ge=Me*S-U;$[_]=Ge*v,$[m]=ie*x,$[d]=X,u.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[d]=w>0?1:-1,c.push($.x,$.y,$.z),h.push(Me/M),h.push(1-P/R),B+=1}}for(let P=0;P<R;P++)for(let ie=0;ie<M;ie++){const Me=f+ie+j*P,Ge=f+ie+j*(P+1),q=f+(ie+1)+j*(P+1),ne=f+(ie+1)+j*P;l.push(Me,Ge,ne),l.push(Ge,q,ne),I+=6}a.addGroup(p,I,E),p+=I,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Za(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function On(n){const e={};for(let t=0;t<n.length;t++){const i=Za(n[t]);for(const r in i)e[r]=i[r]}return e}function CA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function tM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const RA={clone:Za,merge:On};var PA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends Yu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PA,this.fragmentShader=bA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Za(e.uniforms),this.uniformsGroups=CA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class nM extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=kr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ss=new Y,ov=new pt,av=new pt;class Ui extends nM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wm*2*Math.atan(Math.tan(dh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,t){return this.getViewBounds(e,ov,av),t.subVectors(av,ov)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jo=-90,ea=1;class LA extends ti{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ui(Jo,ea,e,t);r.layers=this.layers,this.add(r);const s=new Ui(Jo,ea,e,t);s.layers=this.layers,this.add(s);const o=new Ui(Jo,ea,e,t);o.layers=this.layers,this.add(o);const a=new Ui(Jo,ea,e,t);a.layers=this.layers,this.add(a);const l=new Ui(Jo,ea,e,t);l.layers=this.layers,this.add(l);const u=new Ui(Jo,ea,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===kr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qf)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class iM extends Ln{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:qa,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class DA extends bo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new iM(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:er}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qu(5,5,5),s=new Sr({name:"CubemapFromEquirect",uniforms:Za(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ei,blending:Cs});s.uniforms.tEquirect.value=t;const o=new pr(r,s),a=t.minFilter;return t.minFilter===fo&&(t.minFilter=er),new LA(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Lh=new Y,IA=new Y,UA=new Qe;class eo{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Lh.subVectors(i,t).cross(IA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Lh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||UA.getNormalMatrix(e),r=this.coplanarPoint(Lh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new bd,bc=new Y;class rM{constructor(e=new eo,t=new eo,i=new eo,r=new eo,s=new eo,o=new eo){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=kr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,f-u,m-p,y-d).normalize(),i[1].setComponents(l+s,f+u,m+p,y+d).normalize(),i[2].setComponents(l+o,f+c,m+g,y+v).normalize(),i[3].setComponents(l-o,f-c,m-g,y-v).normalize(),i[4].setComponents(l-a,f-h,m-_,y-x).normalize(),t===kr)i[5].setComponents(l+a,f+h,m+_,y+x).normalize();else if(t===Qf)i[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(bc.x=r.normal.x>0?e.max.x:e.min.x,bc.y=r.normal.y>0?e.max.y:e.min.y,bc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function NA(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,h=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l._updateRange,f=l.updateRanges;if(n.bindBuffer(u,a),h.count===-1&&f.length===0&&n.bufferSubData(u,0,c),f.length!==0){for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(u,h.offset*c.BYTES_PER_ELEMENT,c,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Qa extends Zr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<c;d++){const v=d*f-o;for(let x=0;x<u;x++){const y=x*h-s;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const x=v+u*d,y=v+u*(d+1),C=v+1+u*(d+1),w=v+1+u*d;p.push(x,y,w),p.push(y,C,w)}this.setIndex(p),this.setAttribute("position",new xi(g,3)),this.setAttribute("normal",new xi(_,3)),this.setAttribute("uv",new xi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.widthSegments,e.heightSegments)}}var OA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FA=`#ifdef USE_ALPHAHASH
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
#endif`,kA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VA=`#ifdef USE_AOMAP
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
#endif`,GA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WA=`#ifdef USE_BATCHING
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
#endif`,XA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$A=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jA=`#ifdef USE_IRIDESCENCE
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
#endif`,KA=`#ifdef USE_BUMPMAP
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
#endif`,ZA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,QA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rC=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sC=`#define PI 3.141592653589793
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
} // validated`,oC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,aC=`vec3 transformedNormal = objectNormal;
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
#endif`,lC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dC="gl_FragColor = linearToOutputTexel( gl_FragColor );",hC=`
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
}`,pC=`#ifdef USE_ENVMAP
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
#endif`,mC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_C=`#ifdef USE_ENVMAP
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
#endif`,gC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vC=`#ifdef USE_ENVMAP
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
#endif`,xC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EC=`#ifdef USE_GRADIENTMAP
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
}`,TC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CC=`uniform bool receiveShadow;
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
#endif`,RC=`#ifdef USE_ENVMAP
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
#endif`,PC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IC=`PhysicalMaterial material;
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
#endif`,UC=`struct PhysicalMaterial {
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
}`,NC=`
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
#endif`,OC=`#if defined( RE_IndirectDiffuse )
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
#endif`,FC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,XC=`#if defined( USE_POINTS_UV )
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
#endif`,YC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$C=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZC=`#ifdef USE_MORPHTARGETS
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
#endif`,QC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rR=`#ifdef USE_NORMALMAP
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
#endif`,sR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_R=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yR=`float getShadowMask() {
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
}`,SR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MR=`#ifdef USE_SKINNING
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
#endif`,ER=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TR=`#ifdef USE_SKINNING
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
#endif`,wR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,PR=`#ifdef USE_TRANSMISSION
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
#endif`,bR=`#ifdef USE_TRANSMISSION
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
#endif`,LR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OR=`uniform sampler2D t2D;
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
}`,FR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HR=`#include <common>
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
}`,VR=`#if DEPTH_PACKING == 3200
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
}`,GR=`#define DISTANCE
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
}`,WR=`#define DISTANCE
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
}`,XR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qR=`uniform float scale;
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
}`,$R=`uniform vec3 diffuse;
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
}`,jR=`#include <common>
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
}`,KR=`uniform vec3 diffuse;
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
}`,ZR=`#define LAMBERT
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
}`,QR=`#define LAMBERT
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
}`,JR=`#define MATCAP
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
}`,eP=`#define MATCAP
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
}`,tP=`#define NORMAL
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
}`,nP=`#define NORMAL
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
}`,iP=`#define PHONG
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
}`,rP=`#define PHONG
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
}`,sP=`#define STANDARD
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
}`,oP=`#define STANDARD
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
}`,aP=`#define TOON
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
}`,lP=`#define TOON
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
}`,uP=`uniform float size;
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
}`,cP=`uniform vec3 diffuse;
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
}`,fP=`#include <common>
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
}`,dP=`uniform vec3 color;
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
}`,hP=`uniform float rotation;
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
}`,pP=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:OA,alphahash_pars_fragment:FA,alphamap_fragment:kA,alphamap_pars_fragment:zA,alphatest_fragment:BA,alphatest_pars_fragment:HA,aomap_fragment:VA,aomap_pars_fragment:GA,batching_pars_vertex:WA,batching_vertex:XA,begin_vertex:YA,beginnormal_vertex:qA,bsdfs:$A,iridescence_fragment:jA,bumpmap_pars_fragment:KA,clipping_planes_fragment:ZA,clipping_planes_pars_fragment:QA,clipping_planes_pars_vertex:JA,clipping_planes_vertex:eC,color_fragment:tC,color_pars_fragment:nC,color_pars_vertex:iC,color_vertex:rC,common:sC,cube_uv_reflection_fragment:oC,defaultnormal_vertex:aC,displacementmap_pars_vertex:lC,displacementmap_vertex:uC,emissivemap_fragment:cC,emissivemap_pars_fragment:fC,colorspace_fragment:dC,colorspace_pars_fragment:hC,envmap_fragment:pC,envmap_common_pars_fragment:mC,envmap_pars_fragment:_C,envmap_pars_vertex:gC,envmap_physical_pars_fragment:RC,envmap_vertex:vC,fog_vertex:xC,fog_pars_vertex:yC,fog_fragment:SC,fog_pars_fragment:MC,gradientmap_pars_fragment:EC,lightmap_pars_fragment:TC,lights_lambert_fragment:wC,lights_lambert_pars_fragment:AC,lights_pars_begin:CC,lights_toon_fragment:PC,lights_toon_pars_fragment:bC,lights_phong_fragment:LC,lights_phong_pars_fragment:DC,lights_physical_fragment:IC,lights_physical_pars_fragment:UC,lights_fragment_begin:NC,lights_fragment_maps:OC,lights_fragment_end:FC,logdepthbuf_fragment:kC,logdepthbuf_pars_fragment:zC,logdepthbuf_pars_vertex:BC,logdepthbuf_vertex:HC,map_fragment:VC,map_pars_fragment:GC,map_particle_fragment:WC,map_particle_pars_fragment:XC,metalnessmap_fragment:YC,metalnessmap_pars_fragment:qC,morphinstance_vertex:$C,morphcolor_vertex:jC,morphnormal_vertex:KC,morphtarget_pars_vertex:ZC,morphtarget_vertex:QC,normal_fragment_begin:JC,normal_fragment_maps:eR,normal_pars_fragment:tR,normal_pars_vertex:nR,normal_vertex:iR,normalmap_pars_fragment:rR,clearcoat_normal_fragment_begin:sR,clearcoat_normal_fragment_maps:oR,clearcoat_pars_fragment:aR,iridescence_pars_fragment:lR,opaque_fragment:uR,packing:cR,premultiplied_alpha_fragment:fR,project_vertex:dR,dithering_fragment:hR,dithering_pars_fragment:pR,roughnessmap_fragment:mR,roughnessmap_pars_fragment:_R,shadowmap_pars_fragment:gR,shadowmap_pars_vertex:vR,shadowmap_vertex:xR,shadowmask_pars_fragment:yR,skinbase_vertex:SR,skinning_pars_vertex:MR,skinning_vertex:ER,skinnormal_vertex:TR,specularmap_fragment:wR,specularmap_pars_fragment:AR,tonemapping_fragment:CR,tonemapping_pars_fragment:RR,transmission_fragment:PR,transmission_pars_fragment:bR,uv_pars_fragment:LR,uv_pars_vertex:DR,uv_vertex:IR,worldpos_vertex:UR,background_vert:NR,background_frag:OR,backgroundCube_vert:FR,backgroundCube_frag:kR,cube_vert:zR,cube_frag:BR,depth_vert:HR,depth_frag:VR,distanceRGBA_vert:GR,distanceRGBA_frag:WR,equirect_vert:XR,equirect_frag:YR,linedashed_vert:qR,linedashed_frag:$R,meshbasic_vert:jR,meshbasic_frag:KR,meshlambert_vert:ZR,meshlambert_frag:QR,meshmatcap_vert:JR,meshmatcap_frag:eP,meshnormal_vert:tP,meshnormal_frag:nP,meshphong_vert:iP,meshphong_frag:rP,meshphysical_vert:sP,meshphysical_frag:oP,meshtoon_vert:aP,meshtoon_frag:lP,points_vert:uP,points_frag:cP,shadow_vert:fP,shadow_frag:dP,sprite_vert:hP,sprite_frag:pP},Se={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},cr={basic:{uniforms:On([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:On([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new dt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:On([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:On([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:On([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new dt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:On([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:On([Se.points,Se.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:On([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:On([Se.common,Se.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:On([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:On([Se.sprite,Se.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:On([Se.common,Se.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:On([Se.lights,Se.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};cr.physical={uniforms:On([cr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Lc={r:0,b:0,g:0},$s=new qr,mP=new Qt;function _P(n,e,t,i,r,s,o){const a=new dt(0);let l=s===!0?0:1,u,c,h=null,f=0,p=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const y=g(v);y===null?d(a,l):y&&y.isColor&&(d(y,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===Rd)?(c===void 0&&(c=new pr(new qu(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:Za(cr.backgroundCube.uniforms),vertexShader:cr.backgroundCube.vertexShader,fragmentShader:cr.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),$s.copy(x.backgroundRotation),$s.x*=-1,$s.y*=-1,$s.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($s.y*=-1,$s.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mP.makeRotationFromEuler($s)),c.material.toneMapped=gt.getTransfer(y.colorSpace)!==Lt,(h!==y||f!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new pr(new Qa(2,2),new Sr({name:"BackgroundMaterial",uniforms:Za(cr.background.uniforms),vertexShader:cr.background.vertexShader,fragmentShader:cr.background.fragmentShader,side:Us,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=gt.getTransfer(y.colorSpace)!==Lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function d(v,x){v.getRGB(Lc,tM(n)),i.buffers.color.setClear(Lc.r,Lc.g,Lc.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:_,addToRenderList:m}}function gP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,D,U,k,X){let j=!1;const W=h(k,U,D);s!==W&&(s=W,u(s.object)),j=p(S,k,U,X),j&&g(S,k,U,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(S,D,U,k),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function h(S,D,U){const k=U.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let j=X[D.id];j===void 0&&(j={},X[D.id]=j);let W=j[k];return W===void 0&&(W=f(l()),j[k]=W),W}function f(S){const D=[],U=[],k=[];for(let X=0;X<t;X++)D[X]=0,U[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:k,object:S,attributes:{},index:null}}function p(S,D,U,k){const X=s.attributes,j=D.attributes;let W=0;const B=U.getAttributes();for(const I in B)if(B[I].location>=0){const P=X[I];let ie=j[I];if(ie===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),P===void 0||P.attribute!==ie||ie&&P.data!==ie.data)return!0;W++}return s.attributesNum!==W||s.index!==k}function g(S,D,U,k){const X={},j=D.attributes;let W=0;const B=U.getAttributes();for(const I in B)if(B[I].location>=0){let P=j[I];P===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(P=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(P=S.instanceColor));const ie={};ie.attribute=P,P&&P.data&&(ie.data=P.data),X[I]=ie,W++}s.attributes=X,s.attributesNum=W,s.index=k}function _(){const S=s.newAttributes;for(let D=0,U=S.length;D<U;D++)S[D]=0}function m(S){d(S,0)}function d(S,D){const U=s.newAttributes,k=s.enabledAttributes,X=s.attributeDivisors;U[S]=1,k[S]===0&&(n.enableVertexAttribArray(S),k[S]=1),X[S]!==D&&(n.vertexAttribDivisor(S,D),X[S]=D)}function v(){const S=s.newAttributes,D=s.enabledAttributes;for(let U=0,k=D.length;U<k;U++)D[U]!==S[U]&&(n.disableVertexAttribArray(U),D[U]=0)}function x(S,D,U,k,X,j,W){W===!0?n.vertexAttribIPointer(S,D,U,X,j):n.vertexAttribPointer(S,D,U,k,X,j)}function y(S,D,U,k){_();const X=k.attributes,j=U.getAttributes(),W=D.defaultAttributeValues;for(const B in j){const I=j[B];if(I.location>=0){let $=X[B];if($===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){const P=$.normalized,ie=$.itemSize,Me=e.get($);if(Me===void 0)continue;const Ge=Me.buffer,q=Me.type,ne=Me.bytesPerElement,de=q===n.INT||q===n.UNSIGNED_INT||$.gpuType===Y_;if($.isInterleavedBufferAttribute){const ue=$.data,Pe=ue.stride,Ue=$.offset;if(ue.isInstancedInterleavedBuffer){for(let We=0;We<I.locationSize;We++)d(I.location+We,ue.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let We=0;We<I.locationSize;We++)m(I.location+We);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let We=0;We<I.locationSize;We++)x(I.location+We,ie/I.locationSize,q,P,Pe*ne,(Ue+ie/I.locationSize*We)*ne,de)}else{if($.isInstancedBufferAttribute){for(let ue=0;ue<I.locationSize;ue++)d(I.location+ue,$.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ue=0;ue<I.locationSize;ue++)m(I.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let ue=0;ue<I.locationSize;ue++)x(I.location+ue,ie/I.locationSize,q,P,ie*ne,ie/I.locationSize*ue*ne,de)}}else if(W!==void 0){const P=W[B];if(P!==void 0)switch(P.length){case 2:n.vertexAttrib2fv(I.location,P);break;case 3:n.vertexAttrib3fv(I.location,P);break;case 4:n.vertexAttrib4fv(I.location,P);break;default:n.vertexAttrib1fv(I.location,P)}}}}v()}function C(){R();for(const S in i){const D=i[S];for(const U in D){const k=D[U];for(const X in k)c(k[X].object),delete k[X];delete D[U]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const U in D){const k=D[U];for(const X in k)c(k[X].object),delete k[X];delete D[U]}delete i[S.id]}function M(S){for(const D in i){const U=i[D];if(U[S.id]===void 0)continue;const k=U[S.id];for(const X in k)c(k[X].object),delete k[X];delete U[S.id]}}function R(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function vP(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,h){h!==0&&(n.drawArraysInstanced(i,u,c,h),t.update(c,i,h))}function a(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let p=0;for(let g=0;g<h;g++)p+=c[g];t.update(p,i,1)}function l(u,c,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=c[_];for(let _=0;_<f.length;_++)t.update(g,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xP(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==tr&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const M=w===Vu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Yr&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Fr&&!M)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:y,maxSamples:C}}function yP(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new eo,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let y=d.clippingState||null;l.value=y,y=c(g,f,x,p);for(let C=0;C!==x;++C)y[C]=t[C];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,y=p;x!==_;++x,y+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function SP(n){let e=new WeakMap;function t(o,a){return a===jp?o.mapping=qa:a===Kp&&(o.mapping=$a),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===jp||a===Kp)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new DA(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class MP extends nM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ya=4,lv=[.125,.215,.35,.446,.526,.582],oo=20,Dh=new MP,uv=new dt;let Ih=null,Uh=0,Nh=0,Oh=!1;const to=(1+Math.sqrt(5))/2,ta=1/to,cv=[new Y(-to,ta,0),new Y(to,ta,0),new Y(-ta,0,to),new Y(ta,0,to),new Y(0,to,-ta),new Y(0,to,ta),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class fv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ih=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ih,Uh,Nh),this._renderer.xr.enabled=Oh,e.scissorTest=!1,Dc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qa||e.mapping===$a?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ih=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:er,minFilter:er,generateMipmaps:!1,type:Vu,format:tr,colorSpace:Vs,depthBuffer:!1},r=dv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=EP(s)),this._blurMaterial=TP(s,e,t)}return r}_compileMaterial(e){const t=new pr(this._lodPlanes[0],e);this._renderer.compile(t,Dh)}_sceneToCubeUV(e,t,i,r){const a=new Ui(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(uv),c.toneMapping=Rs,c.autoClear=!1;const p=new QS({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),g=new pr(new qu,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(uv),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const x=this._cubeSize;Dc(r,v*x,d>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===qa||e.mapping===$a;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new pr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Dc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Dh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=cv[(r-s-1)%cv.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new pr(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*oo-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):oo;m>oo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${oo}`);const d=[];let v=0;for(let M=0;M<oo;++M){const R=M/_,E=Math.exp(-R*R/2);d.push(E),M===0?v+=E:M<m&&(v+=2*E)}for(let M=0;M<d.length;M++)d[M]=d[M]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const y=this._sizeLods[r],C=3*y*(r>x-ya?r-x+ya:0),w=4*(this._cubeSize-y);Dc(t,C,w,3*y,2*y),l.setRenderTarget(t),l.render(h,Dh)}}function EP(n){const e=[],t=[],i=[];let r=n;const s=n-ya+1+lv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ya?l=lv[o-n+ya-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,R=w>2?0:-1,E=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];v.set(E,_*g*w),x.set(f,m*g*w);const S=[w,w,w,w,w,w];y.set(S,d*g*w)}const C=new Zr;C.setAttribute("position",new xr(v,_)),C.setAttribute("uv",new xr(x,m)),C.setAttribute("faceIndex",new xr(y,d)),e.push(C),r>ya&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function dv(n,e,t){const i=new bo(n,e,t);return i.texture.mapping=Rd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function TP(n,e,t){const i=new Float32Array(oo),r=new Y(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:oo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:J_(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function hv(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:J_(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function pv(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:J_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function J_(){return`

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
	`}function wP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===jp||l===Kp,c=l===qa||l===$a;if(u||c){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new fv(n)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new fv(n)),h=u?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function AP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&jl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function CP(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,y=v.length;x<y;x+=3){const C=v[x+0],w=v[x+1],M=v[x+2];f.push(C,w,w,M,M,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const C=x+0,w=x+1,M=x+2;f.push(C,w,w,M,M,C)}}else return;const m=new(YS(f)?eM:JS)(f,1);m.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function c(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function RP(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function u(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function c(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function h(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)u(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v];for(let v=0;v<_.length;v++)t.update(d,i,_[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function PP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function bP(n,e,t){const i=new WeakMap,r=new hn;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const M=new Float32Array(C*w*4*h),R=new $S(M,C,w,h);R.type=Fr,R.needsUpdate=!0;const E=y*4;for(let D=0;D<h;D++){const U=d[D],k=v[D],X=x[D],j=C*w*4*D;for(let W=0;W<U.count;W++){const B=W*E;g===!0&&(r.fromBufferAttribute(U,W),M[j+B+0]=r.x,M[j+B+1]=r.y,M[j+B+2]=r.z,M[j+B+3]=0),_===!0&&(r.fromBufferAttribute(k,W),M[j+B+4]=r.x,M[j+B+5]=r.y,M[j+B+6]=r.z,M[j+B+7]=0),m===!0&&(r.fromBufferAttribute(X,W),M[j+B+8]=r.x,M[j+B+9]=r.y,M[j+B+10]=r.z,M[j+B+11]=X.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new pt(C,w)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function LP(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class oM extends Ln{constructor(e,t,i,r,s,o,a,l,u,c=La){if(c!==La&&c!==Ka)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===La&&(i=Po),i===void 0&&c===Ka&&(i=ja),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ki,this.minFilter=l!==void 0?l:ki,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const aM=new Ln,mv=new oM(1,1),lM=new $S,uM=new _A,cM=new iM,_v=[],gv=[],vv=new Float32Array(16),xv=new Float32Array(9),yv=new Float32Array(4);function ul(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=_v[r];if(s===void 0&&(s=new Float32Array(r),_v[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function on(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function an(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ld(n,e){let t=gv[e];t===void 0&&(t=new Int32Array(e),gv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function DP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function IP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2fv(this.addr,e),an(t,e)}}function UP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;n.uniform3fv(this.addr,e),an(t,e)}}function NP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4fv(this.addr,e),an(t,e)}}function OP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;yv.set(i),n.uniformMatrix2fv(this.addr,!1,yv),an(t,i)}}function FP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;xv.set(i),n.uniformMatrix3fv(this.addr,!1,xv),an(t,i)}}function kP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;vv.set(i),n.uniformMatrix4fv(this.addr,!1,vv),an(t,i)}}function zP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function BP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2iv(this.addr,e),an(t,e)}}function HP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3iv(this.addr,e),an(t,e)}}function VP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4iv(this.addr,e),an(t,e)}}function GP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function WP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2uiv(this.addr,e),an(t,e)}}function XP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3uiv(this.addr,e),an(t,e)}}function YP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4uiv(this.addr,e),an(t,e)}}function qP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(mv.compareFunction=XS,s=mv):s=aM,t.setTexture2D(e||s,r)}function $P(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||uM,r)}function jP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||cM,r)}function KP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||lM,r)}function ZP(n){switch(n){case 5126:return DP;case 35664:return IP;case 35665:return UP;case 35666:return NP;case 35674:return OP;case 35675:return FP;case 35676:return kP;case 5124:case 35670:return zP;case 35667:case 35671:return BP;case 35668:case 35672:return HP;case 35669:case 35673:return VP;case 5125:return GP;case 36294:return WP;case 36295:return XP;case 36296:return YP;case 35678:case 36198:case 36298:case 36306:case 35682:return qP;case 35679:case 36299:case 36307:return $P;case 35680:case 36300:case 36308:case 36293:return jP;case 36289:case 36303:case 36311:case 36292:return KP}}function QP(n,e){n.uniform1fv(this.addr,e)}function JP(n,e){const t=ul(e,this.size,2);n.uniform2fv(this.addr,t)}function eb(n,e){const t=ul(e,this.size,3);n.uniform3fv(this.addr,t)}function tb(n,e){const t=ul(e,this.size,4);n.uniform4fv(this.addr,t)}function nb(n,e){const t=ul(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ib(n,e){const t=ul(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function rb(n,e){const t=ul(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sb(n,e){n.uniform1iv(this.addr,e)}function ob(n,e){n.uniform2iv(this.addr,e)}function ab(n,e){n.uniform3iv(this.addr,e)}function lb(n,e){n.uniform4iv(this.addr,e)}function ub(n,e){n.uniform1uiv(this.addr,e)}function cb(n,e){n.uniform2uiv(this.addr,e)}function fb(n,e){n.uniform3uiv(this.addr,e)}function db(n,e){n.uniform4uiv(this.addr,e)}function hb(n,e,t){const i=this.cache,r=e.length,s=Ld(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||aM,s[o])}function pb(n,e,t){const i=this.cache,r=e.length,s=Ld(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||uM,s[o])}function mb(n,e,t){const i=this.cache,r=e.length,s=Ld(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||cM,s[o])}function _b(n,e,t){const i=this.cache,r=e.length,s=Ld(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||lM,s[o])}function gb(n){switch(n){case 5126:return QP;case 35664:return JP;case 35665:return eb;case 35666:return tb;case 35674:return nb;case 35675:return ib;case 35676:return rb;case 5124:case 35670:return sb;case 35667:case 35671:return ob;case 35668:case 35672:return ab;case 35669:case 35673:return lb;case 5125:return ub;case 36294:return cb;case 36295:return fb;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return hb;case 35679:case 36299:case 36307:return pb;case 35680:case 36300:case 36308:case 36293:return mb;case 36289:case 36303:case 36311:case 36292:return _b}}class vb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ZP(t.type)}}class xb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gb(t.type)}}class yb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Fh=/(\w+)(\])?(\[|\.)?/g;function Sv(n,e){n.seq.push(e),n.map[e.id]=e}function Sb(n,e,t){const i=n.name,r=i.length;for(Fh.lastIndex=0;;){const s=Fh.exec(i),o=Fh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Sv(t,u===void 0?new vb(a,n,e):new xb(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new yb(a),Sv(t,h)),t=h}}}class pf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Sb(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Mv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Mb=37297;let Eb=0;function Tb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function wb(n){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(n);let i;switch(e===t?i="":e===Zf&&t===Kf?i="LinearDisplayP3ToLinearSRGB":e===Kf&&t===Zf&&(i="LinearSRGBToLinearDisplayP3"),n){case Vs:case Pd:return[i,"LinearTransferOETF"];case ar:case Q_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ev(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Tb(n.getShaderSource(e),o)}else return r}function Ab(n,e){const t=wb(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Cb(n,e){let t;switch(e){case Gw:t="Linear";break;case Ww:t="Reinhard";break;case Xw:t="Cineon";break;case Yw:t="ACESFilmic";break;case $w:t="AgX";break;case jw:t="Neutral";break;case qw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ic=new Y;function Rb(){gt.getLuminanceCoefficients(Ic);const n=Ic.x.toFixed(4),e=Ic.y.toFixed(4),t=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dl).join(`
`)}function bb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Lb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Dl(n){return n!==""}function Tv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Db=/^[ \t]*#include +<([\w\d./]+)>/gm;function Am(n){return n.replace(Db,Ub)}const Ib=new Map;function Ub(n,e){let t=Ze[e];if(t===void 0){const i=Ib.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Am(t)}const Nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Av(n){return n.replace(Nb,Ob)}function Ob(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cv(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Fb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===DS?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===mw?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rr&&(e="SHADOWMAP_TYPE_VSM"),e}function kb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qa:case $a:e="ENVMAP_TYPE_CUBE";break;case Rd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $a:e="ENVMAP_MODE_REFRACTION";break}return e}function Bb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case IS:e="ENVMAP_BLENDING_MULTIPLY";break;case Hw:e="ENVMAP_BLENDING_MIX";break;case Vw:e="ENVMAP_BLENDING_ADD";break}return e}function Hb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Vb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Fb(t),u=kb(t),c=zb(t),h=Bb(t),f=Hb(t),p=Pb(t),g=bb(s),_=r.createProgram();let m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Dl).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Dl).join(`
`),d.length>0&&(d+=`
`)):(m=[Cv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dl).join(`
`),d=[Cv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rs?"#define TONE_MAPPING":"",t.toneMapping!==Rs?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Rs?Cb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Ab("linearToOutputTexel",t.outputColorSpace),Rb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dl).join(`
`)),o=Am(o),o=Tv(o,t),o=wv(o,t),a=Am(a),a=Tv(a,t),a=wv(a,t),o=Av(o),a=Av(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===V0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===V0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=v+m+o,y=v+d+a,C=Mv(r,r.VERTEX_SHADER,x),w=Mv(r,r.FRAGMENT_SHADER,y);r.attachShader(_,C),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function M(D){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(C).trim(),X=r.getShaderInfoLog(w).trim();let j=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,w);else{const B=Ev(r,C,"vertex"),I=Ev(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+B+`
`+I)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(k===""||X==="")&&(W=!1);W&&(D.diagnostics={runnable:j,programLog:U,vertexShader:{log:k,prefix:m},fragmentShader:{log:X,prefix:d}})}r.deleteShader(C),r.deleteShader(w),R=new pf(r,_),E=Lb(r,_)}let R;this.getUniforms=function(){return R===void 0&&M(this),R};let E;this.getAttributes=function(){return E===void 0&&M(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,Mb)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Eb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let Gb=0;class Wb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Xb(e),t.set(e,i)),i}}class Xb{constructor(e){this.id=Gb++,this.code=e,this.usedTimes=0}}function Yb(n,e,t,i,r,s,o){const a=new KS,l=new Wb,u=new Set,c=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,S,D,U,k){const X=U.fog,j=k.geometry,W=E.isMeshStandardMaterial?U.environment:null,B=(E.isMeshStandardMaterial?t:e).get(E.envMap||W),I=B&&B.mapping===Rd?B.image.height:null,$=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const P=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ie=P!==void 0?P.length:0;let Me=0;j.morphAttributes.position!==void 0&&(Me=1),j.morphAttributes.normal!==void 0&&(Me=2),j.morphAttributes.color!==void 0&&(Me=3);let Ge,q,ne,de;if($){const ot=cr[$];Ge=ot.vertexShader,q=ot.fragmentShader}else Ge=E.vertexShader,q=E.fragmentShader,l.update(E),ne=l.getVertexShaderID(E),de=l.getFragmentShaderID(E);const ue=n.getRenderTarget(),Pe=k.isInstancedMesh===!0,Ue=k.isBatchedMesh===!0,We=!!E.map,Ke=!!E.matcap,b=!!B,he=!!E.aoMap,ge=!!E.lightMap,ye=!!E.bumpMap,ae=!!E.normalMap,z=!!E.displacementMap,Ee=!!E.emissiveMap,be=!!E.metalnessMap,L=!!E.roughnessMap,T=E.anisotropy>0,G=E.clearcoat>0,ee=E.dispersion>0,J=E.iridescence>0,K=E.sheen>0,De=E.transmission>0,oe=T&&!!E.anisotropyMap,pe=G&&!!E.clearcoatMap,Te=G&&!!E.clearcoatNormalMap,re=G&&!!E.clearcoatRoughnessMap,ce=J&&!!E.iridescenceMap,ke=J&&!!E.iridescenceThicknessMap,Ne=K&&!!E.sheenColorMap,me=K&&!!E.sheenRoughnessMap,He=!!E.specularMap,Ye=!!E.specularColorMap,st=!!E.specularIntensityMap,O=De&&!!E.transmissionMap,Q=De&&!!E.thicknessMap,te=!!E.gradientMap,Z=!!E.alphaMap,se=E.alphaTest>0,Ae=!!E.alphaHash,je=!!E.extensions;let vt=Rs;E.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(vt=n.toneMapping);const Et={shaderID:$,shaderType:E.type,shaderName:E.name,vertexShader:Ge,fragmentShader:q,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:de,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ue,batchingColor:Ue&&k._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&k.instanceColor!==null,instancingMorph:Pe&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Vs,alphaToCoverage:!!E.alphaToCoverage,map:We,matcap:Ke,envMap:b,envMapMode:b&&B.mapping,envMapCubeUVHeight:I,aoMap:he,lightMap:ge,bumpMap:ye,normalMap:ae,displacementMap:f&&z,emissiveMap:Ee,normalMapObjectSpace:ae&&E.normalMapType===eA,normalMapTangentSpace:ae&&E.normalMapType===Jw,metalnessMap:be,roughnessMap:L,anisotropy:T,anisotropyMap:oe,clearcoat:G,clearcoatMap:pe,clearcoatNormalMap:Te,clearcoatRoughnessMap:re,dispersion:ee,iridescence:J,iridescenceMap:ce,iridescenceThicknessMap:ke,sheen:K,sheenColorMap:Ne,sheenRoughnessMap:me,specularMap:He,specularColorMap:Ye,specularIntensityMap:st,transmission:De,transmissionMap:O,thicknessMap:Q,gradientMap:te,opaque:E.transparent===!1&&E.blending===ba&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:se,alphaHash:Ae,combine:E.combine,mapUv:We&&_(E.map.channel),aoMapUv:he&&_(E.aoMap.channel),lightMapUv:ge&&_(E.lightMap.channel),bumpMapUv:ye&&_(E.bumpMap.channel),normalMapUv:ae&&_(E.normalMap.channel),displacementMapUv:z&&_(E.displacementMap.channel),emissiveMapUv:Ee&&_(E.emissiveMap.channel),metalnessMapUv:be&&_(E.metalnessMap.channel),roughnessMapUv:L&&_(E.roughnessMap.channel),anisotropyMapUv:oe&&_(E.anisotropyMap.channel),clearcoatMapUv:pe&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Te&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(E.sheenRoughnessMap.channel),specularMapUv:He&&_(E.specularMap.channel),specularColorMapUv:Ye&&_(E.specularColorMap.channel),specularIntensityMapUv:st&&_(E.specularIntensityMap.channel),transmissionMapUv:O&&_(E.transmissionMap.channel),thicknessMapUv:Q&&_(E.thicknessMap.channel),alphaMapUv:Z&&_(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ae||T),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!j.attributes.uv&&(We||Z),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,decodeVideoTexture:We&&E.map.isVideoTexture===!0&&gt.getTransfer(E.map.colorSpace)===Lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ir,flipSided:E.side===ei,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:je&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&E.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Et.vertexUv1s=u.has(1),Et.vertexUv2s=u.has(2),Et.vertexUv3s=u.has(3),u.clear(),Et}function d(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)S.push(D),S.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(v(S,E),x(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function x(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),E.push(a.mask)}function y(E){const S=g[E.type];let D;if(S){const U=cr[S];D=RA.clone(U.uniforms)}else D=E.uniforms;return D}function C(E,S){let D;for(let U=0,k=c.length;U<k;U++){const X=c[U];if(X.cacheKey===S){D=X,++D.usedTimes;break}}return D===void 0&&(D=new Vb(n,S,E,s),c.push(D)),D}function w(E){if(--E.usedTimes===0){const S=c.indexOf(E);c[S]=c[c.length-1],c.pop(),E.destroy()}}function M(E){l.remove(E)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:C,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:R}}function qb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function $b(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Rv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Pv(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,p,g,_,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(h,f){t.length>1&&t.sort(h||$b),i.length>1&&i.sort(f||Rv),r.length>1&&r.sort(f||Rv)}function c(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function jb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Pv,n.set(i,[o])):r>=s.length?(o=new Pv,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Kb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new dt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function Zb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Qb=0;function Jb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function e2(n){const e=new Kb,t=Zb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Y);const r=new Y,s=new Qt,o=new Qt;function a(u){let c=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,v=0,x=0,y=0,C=0,w=0,M=0;u.sort(Jb);for(let E=0,S=u.length;E<S;E++){const D=u[E],U=D.color,k=D.intensity,X=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)c+=U.r*k,h+=U.g*k,f+=U.b*k;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],k);M++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const B=D.shadow,I=t.get(D);I.shadowIntensity=B.intensity,I.shadowBias=B.bias,I.shadowNormalBias=B.normalBias,I.shadowRadius=B.radius,I.shadowMapSize=B.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=D.shadow.matrix,v++}i.directional[p]=W,p++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(U).multiplyScalar(k),W.distance=X,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[_]=W;const B=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,B.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[_]=B.matrix,D.castShadow){const I=t.get(D);I.shadowIntensity=B.intensity,I.shadowBias=B.bias,I.shadowNormalBias=B.normalBias,I.shadowRadius=B.radius,I.shadowMapSize=B.mapSize,i.spotShadow[_]=I,i.spotShadowMap[_]=j,y++}_++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(U).multiplyScalar(k),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=W,m++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const B=D.shadow,I=t.get(D);I.shadowIntensity=B.intensity,I.shadowBias=B.bias,I.shadowNormalBias=B.normalBias,I.shadowRadius=B.radius,I.shadowMapSize=B.mapSize,I.shadowCameraNear=B.camera.near,I.shadowCameraFar=B.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=D.shadow.matrix,x++}i.point[g]=W,g++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(k),W.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[d]=W,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==C||R.numLightProbes!==M)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=M,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=C,R.numLightProbes=M,i.version=Qb++)}function l(u,c){let h=0,f=0,p=0,g=0,_=0;const m=c.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const x=u[d];if(x.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function bv(n){const e=new e2(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function t2(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new bv(n),e.set(r,[a])):s>=o.length?(a=new bv(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class n2 extends Yu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class i2 extends Yu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const r2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s2=`uniform sampler2D shadow_pass;
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
}`;function o2(n,e,t){let i=new rM;const r=new pt,s=new pt,o=new hn,a=new n2({depthPacking:Qw}),l=new i2,u={},c=t.maxTextureSize,h={[Us]:ei,[ei]:Us,[Ir]:Ir},f=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:r2,fragmentShader:s2}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Zr;g.setAttribute("position",new xr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pr(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=DS;let d=this.type;this.render=function(w,M,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Cs),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=d!==Rr&&this.type===Rr,X=d===Rr&&this.type!==Rr;for(let j=0,W=w.length;j<W;j++){const B=w[j],I=B.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const $=I.getFrameExtents();if(r.multiply($),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/$.x),r.x=s.x*$.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/$.y),r.y=s.y*$.y,I.mapSize.y=s.y)),I.map===null||k===!0||X===!0){const ie=this.type!==Rr?{minFilter:ki,magFilter:ki}:{};I.map!==null&&I.map.dispose(),I.map=new bo(r.x,r.y,ie),I.map.texture.name=B.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const P=I.getViewportCount();for(let ie=0;ie<P;ie++){const Me=I.getViewport(ie);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),U.viewport(o),I.updateMatrices(B,ie),i=I.getFrustum(),y(M,R,I.camera,B,this.type)}I.isPointLightShadow!==!0&&this.type===Rr&&v(I,R),I.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(E,S,D)};function v(w,M){const R=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new bo(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(M,null,R,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(M,null,R,p,_,null)}function x(w,M,R,E){let S=null;const D=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)S=D;else if(S=R.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const U=S.uuid,k=M.uuid;let X=u[U];X===void 0&&(X={},u[U]=X);let j=X[k];j===void 0&&(j=S.clone(),X[k]=j,M.addEventListener("dispose",C)),S=j}if(S.visible=M.visible,S.wireframe=M.wireframe,E===Rr?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:h[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=n.properties.get(S);U.light=R}return S}function y(w,M,R,E,S){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Rr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const k=e.update(w),X=w.material;if(Array.isArray(X)){const j=k.groups;for(let W=0,B=j.length;W<B;W++){const I=j[W],$=X[I.materialIndex];if($&&$.visible){const P=x(w,$,E,S);w.onBeforeShadow(n,w,M,R,k,P,I),n.renderBufferDirect(R,null,k,P,w,I),w.onAfterShadow(n,w,M,R,k,P,I)}}}else if(X.visible){const j=x(w,X,E,S);w.onBeforeShadow(n,w,M,R,k,j,null),n.renderBufferDirect(R,null,k,j,w,null),w.onAfterShadow(n,w,M,R,k,j,null)}}const U=w.children;for(let k=0,X=U.length;k<X;k++)y(U[k],M,R,E,S)}function C(w){w.target.removeEventListener("dispose",C);for(const R in u){const E=u[R],S=w.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function a2(n){function e(){let O=!1;const Q=new hn;let te=null;const Z=new hn(0,0,0,0);return{setMask:function(se){te!==se&&!O&&(n.colorMask(se,se,se,se),te=se)},setLocked:function(se){O=se},setClear:function(se,Ae,je,vt,Et){Et===!0&&(se*=vt,Ae*=vt,je*=vt),Q.set(se,Ae,je,vt),Z.equals(Q)===!1&&(n.clearColor(se,Ae,je,vt),Z.copy(Q))},reset:function(){O=!1,te=null,Z.set(-1,0,0,0)}}}function t(){let O=!1,Q=null,te=null,Z=null;return{setTest:function(se){se?de(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(se){Q!==se&&!O&&(n.depthMask(se),Q=se)},setFunc:function(se){if(te!==se){switch(se){case Uw:n.depthFunc(n.NEVER);break;case Nw:n.depthFunc(n.ALWAYS);break;case Ow:n.depthFunc(n.LESS);break;case $f:n.depthFunc(n.LEQUAL);break;case Fw:n.depthFunc(n.EQUAL);break;case kw:n.depthFunc(n.GEQUAL);break;case zw:n.depthFunc(n.GREATER);break;case Bw:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=se}},setLocked:function(se){O=se},setClear:function(se){Z!==se&&(n.clearDepth(se),Z=se)},reset:function(){O=!1,Q=null,te=null,Z=null}}}function i(){let O=!1,Q=null,te=null,Z=null,se=null,Ae=null,je=null,vt=null,Et=null;return{setTest:function(ot){O||(ot?de(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(ot){Q!==ot&&!O&&(n.stencilMask(ot),Q=ot)},setFunc:function(ot,Ve,Oe){(te!==ot||Z!==Ve||se!==Oe)&&(n.stencilFunc(ot,Ve,Oe),te=ot,Z=Ve,se=Oe)},setOp:function(ot,Ve,Oe){(Ae!==ot||je!==Ve||vt!==Oe)&&(n.stencilOp(ot,Ve,Oe),Ae=ot,je=Ve,vt=Oe)},setLocked:function(ot){O=ot},setClear:function(ot){Et!==ot&&(n.clearStencil(ot),Et=ot)},reset:function(){O=!1,Q=null,te=null,Z=null,se=null,Ae=null,je=null,vt=null,Et=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},h=new WeakMap,f=[],p=null,g=!1,_=null,m=null,d=null,v=null,x=null,y=null,C=null,w=new dt(0,0,0),M=0,R=!1,E=null,S=null,D=null,U=null,k=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,W=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),j=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),j=W>=2);let I=null,$={};const P=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),Me=new hn().fromArray(P),Ge=new hn().fromArray(ie);function q(O,Q,te,Z){const se=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(O,Ae),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<te;je++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(Q+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return Ae}const ne={};ne[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(n.DEPTH_TEST),s.setFunc($f),ye(!1),ae(F0),de(n.CULL_FACE),he(Cs);function de(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function ue(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function Pe(O,Q){return c[O]!==Q?(n.bindFramebuffer(O,Q),c[O]=Q,O===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=Q),O===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ue(O,Q){let te=f,Z=!1;if(O){te=h.get(Q),te===void 0&&(te=[],h.set(Q,te));const se=O.textures;if(te.length!==se.length||te[0]!==n.COLOR_ATTACHMENT0){for(let Ae=0,je=se.length;Ae<je;Ae++)te[Ae]=n.COLOR_ATTACHMENT0+Ae;te.length=se.length,Z=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,Z=!0);Z&&n.drawBuffers(te)}function We(O){return p!==O?(n.useProgram(O),p=O,!0):!1}const Ke={[so]:n.FUNC_ADD,[gw]:n.FUNC_SUBTRACT,[vw]:n.FUNC_REVERSE_SUBTRACT};Ke[xw]=n.MIN,Ke[yw]=n.MAX;const b={[Sw]:n.ZERO,[Mw]:n.ONE,[Ew]:n.SRC_COLOR,[qp]:n.SRC_ALPHA,[Pw]:n.SRC_ALPHA_SATURATE,[Cw]:n.DST_COLOR,[ww]:n.DST_ALPHA,[Tw]:n.ONE_MINUS_SRC_COLOR,[$p]:n.ONE_MINUS_SRC_ALPHA,[Rw]:n.ONE_MINUS_DST_COLOR,[Aw]:n.ONE_MINUS_DST_ALPHA,[bw]:n.CONSTANT_COLOR,[Lw]:n.ONE_MINUS_CONSTANT_COLOR,[Dw]:n.CONSTANT_ALPHA,[Iw]:n.ONE_MINUS_CONSTANT_ALPHA};function he(O,Q,te,Z,se,Ae,je,vt,Et,ot){if(O===Cs){g===!0&&(ue(n.BLEND),g=!1);return}if(g===!1&&(de(n.BLEND),g=!0),O!==_w){if(O!==_||ot!==R){if((m!==so||x!==so)&&(n.blendEquation(n.FUNC_ADD),m=so,x=so),ot)switch(O){case ba:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yp:n.blendFunc(n.ONE,n.ONE);break;case k0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case z0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ba:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case k0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case z0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}d=null,v=null,y=null,C=null,w.set(0,0,0),M=0,_=O,R=ot}return}se=se||Q,Ae=Ae||te,je=je||Z,(Q!==m||se!==x)&&(n.blendEquationSeparate(Ke[Q],Ke[se]),m=Q,x=se),(te!==d||Z!==v||Ae!==y||je!==C)&&(n.blendFuncSeparate(b[te],b[Z],b[Ae],b[je]),d=te,v=Z,y=Ae,C=je),(vt.equals(w)===!1||Et!==M)&&(n.blendColor(vt.r,vt.g,vt.b,Et),w.copy(vt),M=Et),_=O,R=!1}function ge(O,Q){O.side===Ir?ue(n.CULL_FACE):de(n.CULL_FACE);let te=O.side===ei;Q&&(te=!te),ye(te),O.blending===ba&&O.transparent===!1?he(Cs):he(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const Z=O.stencilWrite;o.setTest(Z),Z&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ee(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function ye(O){E!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),E=O)}function ae(O){O!==hw?(de(n.CULL_FACE),O!==S&&(O===F0?n.cullFace(n.BACK):O===pw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),S=O}function z(O){O!==D&&(j&&n.lineWidth(O),D=O)}function Ee(O,Q,te){O?(de(n.POLYGON_OFFSET_FILL),(U!==Q||k!==te)&&(n.polygonOffset(Q,te),U=Q,k=te)):ue(n.POLYGON_OFFSET_FILL)}function be(O){O?de(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function L(O){O===void 0&&(O=n.TEXTURE0+X-1),I!==O&&(n.activeTexture(O),I=O)}function T(O,Q,te){te===void 0&&(I===null?te=n.TEXTURE0+X-1:te=I);let Z=$[te];Z===void 0&&(Z={type:void 0,texture:void 0},$[te]=Z),(Z.type!==O||Z.texture!==Q)&&(I!==te&&(n.activeTexture(te),I=te),n.bindTexture(O,Q||ne[O]),Z.type=O,Z.texture=Q)}function G(){const O=$[I];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(O){Me.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Me.copy(O))}function me(O){Ge.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Ge.copy(O))}function He(O,Q){let te=l.get(Q);te===void 0&&(te=new WeakMap,l.set(Q,te));let Z=te.get(O);Z===void 0&&(Z=n.getUniformBlockIndex(Q,O.name),te.set(O,Z))}function Ye(O,Q){const Z=l.get(Q).get(O);a.get(Q)!==Z&&(n.uniformBlockBinding(Q,Z,O.__bindingPointIndex),a.set(Q,Z))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},I=null,$={},c={},h=new WeakMap,f=[],p=null,g=!1,_=null,m=null,d=null,v=null,x=null,y=null,C=null,w=new dt(0,0,0),M=0,R=!1,E=null,S=null,D=null,U=null,k=null,Me.set(0,0,n.canvas.width,n.canvas.height),Ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:ue,bindFramebuffer:Pe,drawBuffers:Ue,useProgram:We,setBlending:he,setMaterial:ge,setFlipSided:ye,setCullFace:ae,setLineWidth:z,setPolygonOffset:Ee,setScissorTest:be,activeTexture:L,bindTexture:T,unbindTexture:G,compressedTexImage2D:ee,compressedTexImage3D:J,texImage2D:ce,texImage3D:ke,updateUBOMapping:He,uniformBlockBinding:Ye,texStorage2D:Te,texStorage3D:re,texSubImage2D:K,texSubImage3D:De,compressedTexSubImage2D:oe,compressedTexSubImage3D:pe,scissor:Ne,viewport:me,reset:st}}function Lv(n,e,t,i){const r=l2(i);switch(t){case kS:return n*e;case BS:return n*e;case HS:return n*e*2;case VS:return n*e/r.components*r.byteLength;case j_:return n*e/r.components*r.byteLength;case GS:return n*e*2/r.components*r.byteLength;case K_:return n*e*2/r.components*r.byteLength;case zS:return n*e*3/r.components*r.byteLength;case tr:return n*e*4/r.components*r.byteLength;case Z_:return n*e*4/r.components*r.byteLength;case uf:case cf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ff:case df:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case em:case nm:return Math.max(n,16)*Math.max(e,8)/4;case Jp:case tm:return Math.max(n,8)*Math.max(e,8)/2;case im:case rm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case om:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case am:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case lm:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case um:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case cm:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case fm:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case dm:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hm:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case pm:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case mm:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case _m:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case gm:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case hf:case ym:case Sm:return Math.ceil(n/4)*Math.ceil(e/4)*16;case WS:case Mm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Em:case Tm:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function l2(n){switch(n){case Yr:case NS:return{byteLength:1,components:1};case wu:case OS:case Vu:return{byteLength:2,components:1};case q_:case $_:return{byteLength:2,components:4};case Po:case Y_:case Fr:return{byteLength:4,components:1};case FS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function u2(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new pt,c=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return p?new OffscreenCanvas(L,T):Au("canvas")}function _(L,T,G){let ee=1;const J=be(L);if((J.width>G||J.height>G)&&(ee=G/Math.max(J.width,J.height)),ee<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const K=Math.floor(ee*J.width),De=Math.floor(ee*J.height);h===void 0&&(h=g(K,De));const oe=T?g(K,De):h;return oe.width=K,oe.height=De,oe.getContext("2d").drawImage(L,0,0,K,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+De+")."),oe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==ki&&L.minFilter!==er}function d(L){n.generateMipmap(L)}function v(L,T,G,ee,J=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let K=T;if(T===n.RED&&(G===n.FLOAT&&(K=n.R32F),G===n.HALF_FLOAT&&(K=n.R16F),G===n.UNSIGNED_BYTE&&(K=n.R8)),T===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.R8UI),G===n.UNSIGNED_SHORT&&(K=n.R16UI),G===n.UNSIGNED_INT&&(K=n.R32UI),G===n.BYTE&&(K=n.R8I),G===n.SHORT&&(K=n.R16I),G===n.INT&&(K=n.R32I)),T===n.RG&&(G===n.FLOAT&&(K=n.RG32F),G===n.HALF_FLOAT&&(K=n.RG16F),G===n.UNSIGNED_BYTE&&(K=n.RG8)),T===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RG8UI),G===n.UNSIGNED_SHORT&&(K=n.RG16UI),G===n.UNSIGNED_INT&&(K=n.RG32UI),G===n.BYTE&&(K=n.RG8I),G===n.SHORT&&(K=n.RG16I),G===n.INT&&(K=n.RG32I)),T===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),T===n.RGBA){const De=J?jf:gt.getTransfer(ee);G===n.FLOAT&&(K=n.RGBA32F),G===n.HALF_FLOAT&&(K=n.RGBA16F),G===n.UNSIGNED_BYTE&&(K=De===Lt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(L,T){let G;return L?T===null||T===Po||T===ja?G=n.DEPTH24_STENCIL8:T===Fr?G=n.DEPTH32F_STENCIL8:T===wu&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Po||T===ja?G=n.DEPTH_COMPONENT24:T===Fr?G=n.DEPTH_COMPONENT32F:T===wu&&(G=n.DEPTH_COMPONENT16),G}function y(L,T){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==ki&&L.minFilter!==er?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function C(L){const T=L.target;T.removeEventListener("dispose",C),M(T),T.isVideoTexture&&c.delete(T)}function w(L){const T=L.target;T.removeEventListener("dispose",w),E(T)}function M(L){const T=i.get(L);if(T.__webglInit===void 0)return;const G=L.source,ee=f.get(G);if(ee){const J=ee[T.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(L),Object.keys(ee).length===0&&f.delete(G)}i.remove(L)}function R(L){const T=i.get(L);n.deleteTexture(T.__webglTexture);const G=L.source,ee=f.get(G);delete ee[T.__cacheKey],o.memory.textures--}function E(L){const T=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(T.__webglFramebuffer[ee]))for(let J=0;J<T.__webglFramebuffer[ee].length;J++)n.deleteFramebuffer(T.__webglFramebuffer[ee][J]);else n.deleteFramebuffer(T.__webglFramebuffer[ee]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let ee=0;ee<T.__webglFramebuffer.length;ee++)n.deleteFramebuffer(T.__webglFramebuffer[ee]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ee=0;ee<T.__webglColorRenderbuffer.length;ee++)T.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ee]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=L.textures;for(let ee=0,J=G.length;ee<J;ee++){const K=i.get(G[ee]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(G[ee])}i.remove(L)}let S=0;function D(){S=0}function U(){const L=S;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),S+=1,L}function k(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function X(L,T){const G=i.get(L);if(L.isVideoTexture&&z(L),L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){const ee=L.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(G,L,T);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+T)}function j(L,T){const G=i.get(L);if(L.version>0&&G.__version!==L.version){Ge(G,L,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+T)}function W(L,T){const G=i.get(L);if(L.version>0&&G.__version!==L.version){Ge(G,L,T);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+T)}function B(L,T){const G=i.get(L);if(L.version>0&&G.__version!==L.version){q(G,L,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+T)}const I={[Zp]:n.REPEAT,[co]:n.CLAMP_TO_EDGE,[Qp]:n.MIRRORED_REPEAT},$={[ki]:n.NEAREST,[Kw]:n.NEAREST_MIPMAP_NEAREST,[dc]:n.NEAREST_MIPMAP_LINEAR,[er]:n.LINEAR,[fh]:n.LINEAR_MIPMAP_NEAREST,[fo]:n.LINEAR_MIPMAP_LINEAR},P={[tA]:n.NEVER,[aA]:n.ALWAYS,[nA]:n.LESS,[XS]:n.LEQUAL,[iA]:n.EQUAL,[oA]:n.GEQUAL,[rA]:n.GREATER,[sA]:n.NOTEQUAL};function ie(L,T){if(T.type===Fr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===er||T.magFilter===fh||T.magFilter===dc||T.magFilter===fo||T.minFilter===er||T.minFilter===fh||T.minFilter===dc||T.minFilter===fo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,I[T.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,I[T.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,I[T.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,$[T.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,$[T.minFilter]),T.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,P[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ki||T.minFilter!==dc&&T.minFilter!==fo||T.type===Fr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Me(L,T){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",C));const ee=T.source;let J=f.get(ee);J===void 0&&(J={},f.set(ee,J));const K=k(T);if(K!==L.__cacheKey){J[K]===void 0&&(J[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),J[K].usedTimes++;const De=J[L.__cacheKey];De!==void 0&&(J[L.__cacheKey].usedTimes--,De.usedTimes===0&&R(T)),L.__cacheKey=K,L.__webglTexture=J[K].texture}return G}function Ge(L,T,G){let ee=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=n.TEXTURE_3D);const J=Me(L,T),K=T.source;t.bindTexture(ee,L.__webglTexture,n.TEXTURE0+G);const De=i.get(K);if(K.version!==De.__version||J===!0){t.activeTexture(n.TEXTURE0+G);const oe=gt.getPrimaries(gt.workingColorSpace),pe=T.colorSpace===fs?null:gt.getPrimaries(T.colorSpace),Te=T.colorSpace===fs||oe===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let re=_(T.image,!1,r.maxTextureSize);re=Ee(T,re);const ce=s.convert(T.format,T.colorSpace),ke=s.convert(T.type);let Ne=v(T.internalFormat,ce,ke,T.colorSpace,T.isVideoTexture);ie(ee,T);let me;const He=T.mipmaps,Ye=T.isVideoTexture!==!0,st=De.__version===void 0||J===!0,O=K.dataReady,Q=y(T,re);if(T.isDepthTexture)Ne=x(T.format===Ka,T.type),st&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,Ne,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Ne,re.width,re.height,0,ce,ke,null));else if(T.isDataTexture)if(He.length>0){Ye&&st&&t.texStorage2D(n.TEXTURE_2D,Q,Ne,He[0].width,He[0].height);for(let te=0,Z=He.length;te<Z;te++)me=He[te],Ye?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,me.width,me.height,ce,ke,me.data):t.texImage2D(n.TEXTURE_2D,te,Ne,me.width,me.height,0,ce,ke,me.data);T.generateMipmaps=!1}else Ye?(st&&t.texStorage2D(n.TEXTURE_2D,Q,Ne,re.width,re.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,ce,ke,re.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,re.width,re.height,0,ce,ke,re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ye&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Q,Ne,He[0].width,He[0].height,re.depth);for(let te=0,Z=He.length;te<Z;te++)if(me=He[te],T.format!==tr)if(ce!==null)if(Ye){if(O)if(T.layerUpdates.size>0){const se=Lv(me.width,me.height,T.format,T.type);for(const Ae of T.layerUpdates){const je=me.data.subarray(Ae*se/me.data.BYTES_PER_ELEMENT,(Ae+1)*se/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Ae,me.width,me.height,1,ce,je,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,me.width,me.height,re.depth,ce,me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Ne,me.width,me.height,re.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,me.width,me.height,re.depth,ce,ke,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Ne,me.width,me.height,re.depth,0,ce,ke,me.data)}else{Ye&&st&&t.texStorage2D(n.TEXTURE_2D,Q,Ne,He[0].width,He[0].height);for(let te=0,Z=He.length;te<Z;te++)me=He[te],T.format!==tr?ce!==null?Ye?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,me.width,me.height,ce,me.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Ne,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,me.width,me.height,ce,ke,me.data):t.texImage2D(n.TEXTURE_2D,te,Ne,me.width,me.height,0,ce,ke,me.data)}else if(T.isDataArrayTexture)if(Ye){if(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Q,Ne,re.width,re.height,re.depth),O)if(T.layerUpdates.size>0){const te=Lv(re.width,re.height,T.format,T.type);for(const Z of T.layerUpdates){const se=re.data.subarray(Z*te/re.data.BYTES_PER_ELEMENT,(Z+1)*te/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,re.width,re.height,1,ce,ke,se)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ce,ke,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,re.width,re.height,re.depth,0,ce,ke,re.data);else if(T.isData3DTexture)Ye?(st&&t.texStorage3D(n.TEXTURE_3D,Q,Ne,re.width,re.height,re.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ce,ke,re.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,re.width,re.height,re.depth,0,ce,ke,re.data);else if(T.isFramebufferTexture){if(st)if(Ye)t.texStorage2D(n.TEXTURE_2D,Q,Ne,re.width,re.height);else{let te=re.width,Z=re.height;for(let se=0;se<Q;se++)t.texImage2D(n.TEXTURE_2D,se,Ne,te,Z,0,ce,ke,null),te>>=1,Z>>=1}}else if(He.length>0){if(Ye&&st){const te=be(He[0]);t.texStorage2D(n.TEXTURE_2D,Q,Ne,te.width,te.height)}for(let te=0,Z=He.length;te<Z;te++)me=He[te],Ye?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ce,ke,me):t.texImage2D(n.TEXTURE_2D,te,Ne,ce,ke,me);T.generateMipmaps=!1}else if(Ye){if(st){const te=be(re);t.texStorage2D(n.TEXTURE_2D,Q,Ne,te.width,te.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,ke,re)}else t.texImage2D(n.TEXTURE_2D,0,Ne,ce,ke,re);m(T)&&d(ee),De.__version=K.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function q(L,T,G){if(T.image.length!==6)return;const ee=Me(L,T),J=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+G);const K=i.get(J);if(J.version!==K.__version||ee===!0){t.activeTexture(n.TEXTURE0+G);const De=gt.getPrimaries(gt.workingColorSpace),oe=T.colorSpace===fs?null:gt.getPrimaries(T.colorSpace),pe=T.colorSpace===fs||De===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Te=T.isCompressedTexture||T.image[0].isCompressedTexture,re=T.image[0]&&T.image[0].isDataTexture,ce=[];for(let Z=0;Z<6;Z++)!Te&&!re?ce[Z]=_(T.image[Z],!0,r.maxCubemapSize):ce[Z]=re?T.image[Z].image:T.image[Z],ce[Z]=Ee(T,ce[Z]);const ke=ce[0],Ne=s.convert(T.format,T.colorSpace),me=s.convert(T.type),He=v(T.internalFormat,Ne,me,T.colorSpace),Ye=T.isVideoTexture!==!0,st=K.__version===void 0||ee===!0,O=J.dataReady;let Q=y(T,ke);ie(n.TEXTURE_CUBE_MAP,T);let te;if(Te){Ye&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Q,He,ke.width,ke.height);for(let Z=0;Z<6;Z++){te=ce[Z].mipmaps;for(let se=0;se<te.length;se++){const Ae=te[se];T.format!==tr?Ne!==null?Ye?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,0,0,Ae.width,Ae.height,Ne,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,He,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,0,0,Ae.width,Ae.height,Ne,me,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,He,Ae.width,Ae.height,0,Ne,me,Ae.data)}}}else{if(te=T.mipmaps,Ye&&st){te.length>0&&Q++;const Z=be(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Q,He,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(re){Ye?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ce[Z].width,ce[Z].height,Ne,me,ce[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,ce[Z].width,ce[Z].height,0,Ne,me,ce[Z].data);for(let se=0;se<te.length;se++){const je=te[se].image[Z].image;Ye?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,0,0,je.width,je.height,Ne,me,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,He,je.width,je.height,0,Ne,me,je.data)}}else{Ye?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ne,me,ce[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,Ne,me,ce[Z]);for(let se=0;se<te.length;se++){const Ae=te[se];Ye?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,0,0,Ne,me,Ae.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,He,Ne,me,Ae.image[Z])}}}m(T)&&d(n.TEXTURE_CUBE_MAP),K.__version=J.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ne(L,T,G,ee,J,K){const De=s.convert(G.format,G.colorSpace),oe=s.convert(G.type),pe=v(G.internalFormat,De,oe,G.colorSpace);if(!i.get(T).__hasExternalTextures){const re=Math.max(1,T.width>>K),ce=Math.max(1,T.height>>K);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,K,pe,re,ce,T.depth,0,De,oe,null):t.texImage2D(J,K,pe,re,ce,0,De,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),ae(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,J,i.get(G).__webglTexture,0,ye(T)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,J,i.get(G).__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(L,T,G){if(n.bindRenderbuffer(n.RENDERBUFFER,L),T.depthBuffer){const ee=T.depthTexture,J=ee&&ee.isDepthTexture?ee.type:null,K=x(T.stencilBuffer,J),De=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=ye(T);ae(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,K,T.width,T.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,K,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,K,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,L)}else{const ee=T.textures;for(let J=0;J<ee.length;J++){const K=ee[J],De=s.convert(K.format,K.colorSpace),oe=s.convert(K.type),pe=v(K.internalFormat,De,oe,K.colorSpace),Te=ye(T);G&&ae(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,pe,T.width,T.height):ae(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,pe,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,pe,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),X(T.depthTexture,0);const ee=i.get(T.depthTexture).__webglTexture,J=ye(T);if(T.depthTexture.format===La)ae(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(T.depthTexture.format===Ka)ae(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Pe(L){const T=i.get(L),G=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ee=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ee){const J=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ee.removeEventListener("dispose",J)};ee.addEventListener("dispose",J),T.__depthDisposeCallback=J}T.__boundDepthTexture=ee}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ue(T.__webglFramebuffer,L)}else if(G){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]===void 0)T.__webglDepthbuffer[ee]=n.createRenderbuffer(),de(T.__webglDepthbuffer[ee],L,!1);else{const J=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=T.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,K)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),de(T.__webglDepthbuffer,L,!1);else{const ee=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(L,T,G){const ee=i.get(L);T!==void 0&&ne(ee.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Pe(L)}function We(L){const T=L.texture,G=i.get(L),ee=i.get(T);L.addEventListener("dispose",w);const J=L.textures,K=L.isWebGLCubeRenderTarget===!0,De=J.length>1;if(De||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=T.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let pe=0;pe<T.mipmaps.length;pe++)G.__webglFramebuffer[oe][pe]=n.createFramebuffer()}else G.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<T.mipmaps.length;oe++)G.__webglFramebuffer[oe]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(De)for(let oe=0,pe=J.length;oe<pe;oe++){const Te=i.get(J[oe]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&ae(L)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const pe=J[oe];G.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[oe]);const Te=s.convert(pe.format,pe.colorSpace),re=s.convert(pe.type),ce=v(pe.internalFormat,Te,re,pe.colorSpace,L.isXRRenderTarget===!0),ke=ye(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,ce,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,G.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),de(G.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),ie(n.TEXTURE_CUBE_MAP,T);for(let oe=0;oe<6;oe++)if(T.mipmaps&&T.mipmaps.length>0)for(let pe=0;pe<T.mipmaps.length;pe++)ne(G.__webglFramebuffer[oe][pe],L,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe);else ne(G.__webglFramebuffer[oe],L,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(T)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let oe=0,pe=J.length;oe<pe;oe++){const Te=J[oe],re=i.get(Te);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),ie(n.TEXTURE_2D,Te),ne(G.__webglFramebuffer,L,Te,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(Te)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(oe=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,ee.__webglTexture),ie(oe,T),T.mipmaps&&T.mipmaps.length>0)for(let pe=0;pe<T.mipmaps.length;pe++)ne(G.__webglFramebuffer[pe],L,T,n.COLOR_ATTACHMENT0,oe,pe);else ne(G.__webglFramebuffer,L,T,n.COLOR_ATTACHMENT0,oe,0);m(T)&&d(oe),t.unbindTexture()}L.depthBuffer&&Pe(L)}function Ke(L){const T=L.textures;for(let G=0,ee=T.length;G<ee;G++){const J=T[G];if(m(J)){const K=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,De=i.get(J).__webglTexture;t.bindTexture(K,De),d(K),t.unbindTexture()}}}const b=[],he=[];function ge(L){if(L.samples>0){if(ae(L)===!1){const T=L.textures,G=L.width,ee=L.height;let J=n.COLOR_BUFFER_BIT;const K=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(L),oe=T.length>1;if(oe)for(let pe=0;pe<T.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let pe=0;pe<T.length;pe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[pe]);const Te=i.get(T[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Te,0)}n.blitFramebuffer(0,0,G,ee,0,0,G,ee,J,n.NEAREST),l===!0&&(b.length=0,he.length=0,b.push(n.COLOR_ATTACHMENT0+pe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(b.push(K),he.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,he)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,b))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let pe=0;pe<T.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,De.__webglColorRenderbuffer[pe]);const Te=i.get(T[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,Te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function ye(L){return Math.min(r.maxSamples,L.samples)}function ae(L){const T=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function z(L){const T=o.render.frame;c.get(L)!==T&&(c.set(L,T),L.update())}function Ee(L,T){const G=L.colorSpace,ee=L.format,J=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==Vs&&G!==fs&&(gt.getTransfer(G)===Lt?(ee!==tr||J!==Yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}function be(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=j,this.setTexture3D=W,this.setTextureCube=B,this.rebindTextures=Ue,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ae}function c2(n,e){function t(i,r=fs){let s;const o=gt.getTransfer(r);if(i===Yr)return n.UNSIGNED_BYTE;if(i===q_)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$_)return n.UNSIGNED_SHORT_5_5_5_1;if(i===FS)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===NS)return n.BYTE;if(i===OS)return n.SHORT;if(i===wu)return n.UNSIGNED_SHORT;if(i===Y_)return n.INT;if(i===Po)return n.UNSIGNED_INT;if(i===Fr)return n.FLOAT;if(i===Vu)return n.HALF_FLOAT;if(i===kS)return n.ALPHA;if(i===zS)return n.RGB;if(i===tr)return n.RGBA;if(i===BS)return n.LUMINANCE;if(i===HS)return n.LUMINANCE_ALPHA;if(i===La)return n.DEPTH_COMPONENT;if(i===Ka)return n.DEPTH_STENCIL;if(i===VS)return n.RED;if(i===j_)return n.RED_INTEGER;if(i===GS)return n.RG;if(i===K_)return n.RG_INTEGER;if(i===Z_)return n.RGBA_INTEGER;if(i===uf||i===cf||i===ff||i===df)if(o===Lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===uf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ff)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===df)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===uf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ff)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===df)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jp||i===em||i===tm||i===nm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Jp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===em)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===im||i===rm||i===sm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===im||i===rm)return o===Lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===om||i===am||i===lm||i===um||i===cm||i===fm||i===dm||i===hm||i===pm||i===mm||i===_m||i===gm||i===vm||i===xm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===om)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===am)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===um)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_m)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hf||i===ym||i===Sm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===hf)return o===Lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ym)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sm)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===WS||i===Mm||i===Em||i===Tm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===hf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Mm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Em)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ja?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class f2 extends Ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Uc extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d2={type:"move"};class kh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Uc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const h2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p2=`
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

}`;class m2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ln,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Sr({vertexShader:h2,fragmentShader:p2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pr(new Qa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _2 extends ll{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,f=null,p=null,g=null;const _=new m2,m=t.getContextAttributes();let d=null,v=null;const x=[],y=[],C=new pt;let w=null;const M=new Ui;M.layers.enable(1),M.viewport=new hn;const R=new Ui;R.layers.enable(2),R.viewport=new hn;const E=[M,R],S=new f2;S.layers.enable(1),S.layers.enable(2);let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=x[q];return ne===void 0&&(ne=new kh,x[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=x[q];return ne===void 0&&(ne=new kh,x[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=x[q];return ne===void 0&&(ne=new kh,x[q]=ne),ne.getHandSpace()};function k(q){const ne=y.indexOf(q.inputSource);if(ne===-1)return;const de=x[ne];de!==void 0&&(de.update(q.inputSource,q.frame,u||o),de.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",j);for(let q=0;q<x.length;q++){const ne=y[q];ne!==null&&(y[q]=null,x[q].disconnect(ne))}D=null,U=null,_.reset(),e.setRenderTarget(d),p=null,f=null,h=null,r=null,v=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",X),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new bo(p.framebufferWidth,p.framebufferHeight,{format:tr,type:Yr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,de=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?Ka:La,de=m.stencil?ja:Po);const Pe={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new bo(f.textureWidth,f.textureHeight,{format:tr,type:Yr,depthTexture:new oM(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(q){for(let ne=0;ne<q.removed.length;ne++){const de=q.removed[ne],ue=y.indexOf(de);ue>=0&&(y[ue]=null,x[ue].disconnect(de))}for(let ne=0;ne<q.added.length;ne++){const de=q.added[ne];let ue=y.indexOf(de);if(ue===-1){for(let Ue=0;Ue<x.length;Ue++)if(Ue>=y.length){y.push(de),ue=Ue;break}else if(y[Ue]===null){y[Ue]=de,ue=Ue;break}if(ue===-1)break}const Pe=x[ue];Pe&&Pe.connect(de)}}const W=new Y,B=new Y;function I(q,ne,de){W.setFromMatrixPosition(ne.matrixWorld),B.setFromMatrixPosition(de.matrixWorld);const ue=W.distanceTo(B),Pe=ne.projectionMatrix.elements,Ue=de.projectionMatrix.elements,We=Pe[14]/(Pe[10]-1),Ke=Pe[14]/(Pe[10]+1),b=(Pe[9]+1)/Pe[5],he=(Pe[9]-1)/Pe[5],ge=(Pe[8]-1)/Pe[0],ye=(Ue[8]+1)/Ue[0],ae=We*ge,z=We*ye,Ee=ue/(-ge+ye),be=Ee*-ge;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(be),q.translateZ(Ee),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Pe[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const L=We+Ee,T=Ke+Ee,G=ae-be,ee=z+(ue-be),J=b*Ke/T*L,K=he*Ke/T*L;q.projectionMatrix.makePerspective(G,ee,J,K,L,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function $(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ne=q.near,de=q.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(de=_.depthFar)),S.near=R.near=M.near=ne,S.far=R.far=M.far=de,(D!==S.near||U!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,U=S.far);const ue=q.parent,Pe=S.cameras;$(S,ue);for(let Ue=0;Ue<Pe.length;Ue++)$(Pe[Ue],ue);Pe.length===2?I(S,M,R):S.projectionMatrix.copy(M.projectionMatrix),P(q,S,ue)};function P(q,ne,de){de===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(de.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=wm*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ie=null;function Me(q,ne){if(c=ne.getViewerPose(u||o),g=ne,c!==null){const de=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ue=!1;de.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let Ue=0;Ue<de.length;Ue++){const We=de[Ue];let Ke=null;if(p!==null)Ke=p.getViewport(We);else{const he=h.getViewSubImage(f,We);Ke=he.viewport,Ue===0&&(e.setRenderTargetTextures(v,he.colorTexture,f.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(v))}let b=E[Ue];b===void 0&&(b=new Ui,b.layers.enable(Ue),b.viewport=new hn,E[Ue]=b),b.matrix.fromArray(We.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.projectionMatrix.fromArray(We.projectionMatrix),b.projectionMatrixInverse.copy(b.projectionMatrix).invert(),b.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Ue===0&&(S.matrix.copy(b.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(b)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ue=h.getDepthInformation(de[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(e,Ue,r.renderState)}}for(let de=0;de<x.length;de++){const ue=y[de],Pe=x[de];ue!==null&&Pe!==void 0&&Pe.update(ue,ne,u||o)}ie&&ie(q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Ge=new sM;Ge.setAnimationLoop(Me),this.setAnimationLoop=function(q){ie=q},this.dispose=function(){}}}const js=new qr,g2=new Qt;function v2(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,tM(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,x):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ei&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ei&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,js.copy(y),js.x*=-1,js.y*=-1,js.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),m.envMapRotation.value.setFromMatrix4(g2.makeRotationFromEuler(js)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ei&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function x2(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(g(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(v,C);const w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function c(v){const x=h();v.__bindingPointIndex=x;const y=n.createBuffer(),C=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],y=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,M=y.length;w<M;w++){const R=Array.isArray(y[w])?y[w]:[y[w]];for(let E=0,S=R.length;E<S;E++){const D=R[E];if(p(D,w,E,C)===!0){const U=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let j=0;j<k.length;j++){const W=k[j],B=_(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,U+X,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,X),X+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,C){const w=v.value,M=x+"_"+y;if(C[M]===void 0)return typeof w=="number"||typeof w=="boolean"?C[M]=w:C[M]=w.clone(),!0;{const R=C[M];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return C[M]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(v){const x=v.uniforms;let y=0;const C=16;for(let M=0,R=x.length;M<R;M++){const E=Array.isArray(x[M])?x[M]:[x[M]];for(let S=0,D=E.length;S<D;S++){const U=E[S],k=Array.isArray(U.value)?U.value:[U.value];for(let X=0,j=k.length;X<j;X++){const W=k[X],B=_(W),I=y%C,$=I%B.boundary,P=I+$;y+=$,P!==0&&C-P<B.storage&&(y+=C-P),U.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=B.storage}}}const w=y%C;return w>0&&(y+=C-w),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class y2{constructor(e={}){const{canvas:t=uA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ar,this.toneMapping=Rs,this.toneMappingExposure=1;const x=this;let y=!1,C=0,w=0,M=null,R=-1,E=null;const S=new hn,D=new hn;let U=null;const k=new dt(0);let X=0,j=t.width,W=t.height,B=1,I=null,$=null;const P=new hn(0,0,j,W),ie=new hn(0,0,j,W);let Me=!1;const Ge=new rM;let q=!1,ne=!1;const de=new Qt,ue=new Y,Pe=new hn,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Ke(){return M===null?B:1}let b=i;function he(A,N){return t.getContext(A,N)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${X_}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",se,!1),b===null){const N="webgl2";if(b=he(N,A),b===null)throw he(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ge,ye,ae,z,Ee,be,L,T,G,ee,J,K,De,oe,pe,Te,re,ce,ke,Ne,me,He,Ye,st;function O(){ge=new AP(b),ge.init(),He=new c2(b,ge),ye=new xP(b,ge,e,He),ae=new a2(b),z=new PP(b),Ee=new qb,be=new u2(b,ge,ae,Ee,ye,He,z),L=new SP(x),T=new wP(x),G=new NA(b),Ye=new gP(b,G),ee=new CP(b,G,z,Ye),J=new LP(b,ee,G,z),ke=new bP(b,ye,be),Te=new yP(Ee),K=new Yb(x,L,T,ge,ye,Ye,Te),De=new v2(x,Ee),oe=new jb,pe=new t2(ge),ce=new _P(x,L,T,ae,J,f,l),re=new o2(x,J,ye),st=new x2(b,z,ye,ae),Ne=new vP(b,ge,z),me=new RP(b,ge,z),z.programs=K.programs,x.capabilities=ye,x.extensions=ge,x.properties=Ee,x.renderLists=oe,x.shadowMap=re,x.state=ae,x.info=z}O();const Q=new _2(x,b);this.xr=Q,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const A=ge.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ge.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(j,W,!1))},this.getSize=function(A){return A.set(j,W)},this.setSize=function(A,N,V=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,W=N,t.width=Math.floor(A*B),t.height=Math.floor(N*B),V===!0&&(t.style.width=A+"px",t.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(j*B,W*B).floor()},this.setDrawingBufferSize=function(A,N,V){j=A,W=N,B=V,t.width=Math.floor(A*V),t.height=Math.floor(N*V),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(P)},this.setViewport=function(A,N,V,H){A.isVector4?P.set(A.x,A.y,A.z,A.w):P.set(A,N,V,H),ae.viewport(S.copy(P).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,N,V,H){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,N,V,H),ae.scissor(D.copy(ie).multiplyScalar(B).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(A){ae.setScissorTest(Me=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(A=!0,N=!0,V=!0){let H=0;if(A){let F=!1;if(M!==null){const le=M.texture.format;F=le===Z_||le===K_||le===j_}if(F){const le=M.texture.type,xe=le===Yr||le===Po||le===wu||le===ja||le===q_||le===$_,Ce=ce.getClearColor(),ve=ce.getClearAlpha(),we=Ce.r,ze=Ce.g,Fe=Ce.b;xe?(p[0]=we,p[1]=ze,p[2]=Fe,p[3]=ve,b.clearBufferuiv(b.COLOR,0,p)):(g[0]=we,g[1]=ze,g[2]=Fe,g[3]=ve,b.clearBufferiv(b.COLOR,0,g))}else H|=b.COLOR_BUFFER_BIT}N&&(H|=b.DEPTH_BUFFER_BIT),V&&(H|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",se,!1),oe.dispose(),pe.dispose(),Ee.dispose(),L.dispose(),T.dispose(),J.dispose(),Ye.dispose(),st.dispose(),K.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Oe),Q.removeEventListener("sessionend",ut),_e.stop()};function te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=z.autoReset,N=re.enabled,V=re.autoUpdate,H=re.needsUpdate,F=re.type;O(),z.autoReset=A,re.enabled=N,re.autoUpdate=V,re.needsUpdate=H,re.type=F}function se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ae(A){const N=A.target;N.removeEventListener("dispose",Ae),je(N)}function je(A){vt(A),Ee.remove(A)}function vt(A){const N=Ee.get(A).programs;N!==void 0&&(N.forEach(function(V){K.releaseProgram(V)}),A.isShaderMaterial&&K.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,V,H,F,le){N===null&&(N=Ue);const xe=F.isMesh&&F.matrixWorld.determinant()<0,Ce=Ct(A,N,V,H,F);ae.setMaterial(H,xe);let ve=V.index,we=1;if(H.wireframe===!0){if(ve=ee.getWireframeAttribute(V),ve===void 0)return;we=2}const ze=V.drawRange,Fe=V.attributes.position;let ct=ze.start*we,Mt=(ze.start+ze.count)*we;le!==null&&(ct=Math.max(ct,le.start*we),Mt=Math.min(Mt,(le.start+le.count)*we)),ve!==null?(ct=Math.max(ct,0),Mt=Math.min(Mt,ve.count)):Fe!=null&&(ct=Math.max(ct,0),Mt=Math.min(Mt,Fe.count));const ft=Mt-ct;if(ft<0||ft===1/0)return;Ye.setup(F,H,Ce,V,ve);let en,at=Ne;if(ve!==null&&(en=G.get(ve),at=me,at.setIndex(en)),F.isMesh)H.wireframe===!0?(ae.setLineWidth(H.wireframeLinewidth*Ke()),at.setMode(b.LINES)):at.setMode(b.TRIANGLES);else if(F.isLine){let Ie=H.linewidth;Ie===void 0&&(Ie=1),ae.setLineWidth(Ie*Ke()),F.isLineSegments?at.setMode(b.LINES):F.isLineLoop?at.setMode(b.LINE_LOOP):at.setMode(b.LINE_STRIP)}else F.isPoints?at.setMode(b.POINTS):F.isSprite&&at.setMode(b.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)at.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))at.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ie=F._multiDrawStarts,_n=F._multiDrawCounts,mt=F._multiDrawCount,Xi=ve?G.get(ve).bytesPerElement:1,Fo=Ee.get(H).currentProgram.getUniforms();for(let li=0;li<mt;li++)Fo.setValue(b,"_gl_DrawID",li),at.render(Ie[li]/Xi,_n[li])}else if(F.isInstancedMesh)at.renderInstances(ct,ft,F.count);else if(V.isInstancedBufferGeometry){const Ie=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,_n=Math.min(V.instanceCount,Ie);at.renderInstances(ct,ft,_n)}else at.render(ct,ft)};function Et(A,N,V){A.transparent===!0&&A.side===Ir&&A.forceSinglePass===!1?(A.side=ei,A.needsUpdate=!0,At(A,N,V),A.side=Us,A.needsUpdate=!0,At(A,N,V),A.side=Ir):At(A,N,V)}this.compile=function(A,N,V=null){V===null&&(V=A),m=pe.get(V),m.init(N),v.push(m),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),A!==V&&A.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const H=new Set;return A.traverse(function(F){const le=F.material;if(le)if(Array.isArray(le))for(let xe=0;xe<le.length;xe++){const Ce=le[xe];Et(Ce,V,F),H.add(Ce)}else Et(le,V,F),H.add(le)}),v.pop(),m=null,H},this.compileAsync=function(A,N,V=null){const H=this.compile(A,N,V);return new Promise(F=>{function le(){if(H.forEach(function(xe){Ee.get(xe).currentProgram.isReady()&&H.delete(xe)}),H.size===0){F(A);return}setTimeout(le,10)}ge.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let ot=null;function Ve(A){ot&&ot(A)}function Oe(){_e.stop()}function ut(){_e.start()}const _e=new sM;_e.setAnimationLoop(Ve),typeof self<"u"&&_e.setContext(self),this.setAnimationLoop=function(A){ot=A,Q.setAnimationLoop(A),A===null?_e.stop():_e.start()},Q.addEventListener("sessionstart",Oe),Q.addEventListener("sessionend",ut),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(N),N=Q.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,N,M),m=pe.get(A,v.length),m.init(N),v.push(m),de.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ge.setFromProjectionMatrix(de),ne=this.localClippingEnabled,q=Te.init(this.clippingPlanes,ne),_=oe.get(A,d.length),_.init(),d.push(_),Q.enabled===!0&&Q.isPresenting===!0){const le=x.xr.getDepthSensingMesh();le!==null&&qe(le,N,-1/0,x.sortObjects)}qe(A,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(I,$),We=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,We&&ce.addToRenderList(_,A),this.info.render.frame++,q===!0&&Te.beginShadows();const V=m.state.shadowsArray;re.render(V,A,N),q===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,F=_.transmissive;if(m.setupLights(),N.isArrayCamera){const le=N.cameras;if(F.length>0)for(let xe=0,Ce=le.length;xe<Ce;xe++){const ve=le[xe];$e(H,F,A,ve)}We&&ce.render(A);for(let xe=0,Ce=le.length;xe<Ce;xe++){const ve=le[xe];Be(_,A,ve,ve.viewport)}}else F.length>0&&$e(H,F,A,N),We&&ce.render(A),Be(_,A,N);M!==null&&(be.updateMultisampleRenderTarget(M),be.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(x,A,N),Ye.resetDefaultState(),R=-1,E=null,v.pop(),v.length>0?(m=v[v.length-1],q===!0&&Te.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function qe(A,N,V,H){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ge.intersectsSprite(A)){H&&Pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);const xe=J.update(A),Ce=A.material;Ce.visible&&_.push(A,xe,Ce,V,Pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ge.intersectsObject(A))){const xe=J.update(A),Ce=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pe.copy(A.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Pe.copy(xe.boundingSphere.center)),Pe.applyMatrix4(A.matrixWorld).applyMatrix4(de)),Array.isArray(Ce)){const ve=xe.groups;for(let we=0,ze=ve.length;we<ze;we++){const Fe=ve[we],ct=Ce[Fe.materialIndex];ct&&ct.visible&&_.push(A,xe,ct,V,Pe.z,Fe)}}else Ce.visible&&_.push(A,xe,Ce,V,Pe.z,null)}}const le=A.children;for(let xe=0,Ce=le.length;xe<Ce;xe++)qe(le[xe],N,V,H)}function Be(A,N,V,H){const F=A.opaque,le=A.transmissive,xe=A.transparent;m.setupLightsView(V),q===!0&&Te.setGlobalState(x.clippingPlanes,V),H&&ae.viewport(S.copy(H)),F.length>0&&Nt(F,N,V),le.length>0&&Nt(le,N,V),xe.length>0&&Nt(xe,N,V),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function $e(A,N,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new bo(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?Vu:Yr,minFilter:fo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const le=m.state.transmissionRenderTarget[H.id],xe=H.viewport||S;le.setSize(xe.z,xe.w);const Ce=x.getRenderTarget();x.setRenderTarget(le),x.getClearColor(k),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),We&&ce.render(V);const ve=x.toneMapping;x.toneMapping=Rs;const we=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),q===!0&&Te.setGlobalState(x.clippingPlanes,H),Nt(A,V,H),be.updateMultisampleRenderTarget(le),be.updateRenderTargetMipmap(le),ge.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Fe=0,ct=N.length;Fe<ct;Fe++){const Mt=N[Fe],ft=Mt.object,en=Mt.geometry,at=Mt.material,Ie=Mt.group;if(at.side===Ir&&ft.layers.test(H.layers)){const _n=at.side;at.side=ei,at.needsUpdate=!0,tt(ft,V,H,en,at,Ie),at.side=_n,at.needsUpdate=!0,ze=!0}}ze===!0&&(be.updateMultisampleRenderTarget(le),be.updateRenderTargetMipmap(le))}x.setRenderTarget(Ce),x.setClearColor(k,X),we!==void 0&&(H.viewport=we),x.toneMapping=ve}function Nt(A,N,V){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,le=A.length;F<le;F++){const xe=A[F],Ce=xe.object,ve=xe.geometry,we=H===null?xe.material:H,ze=xe.group;Ce.layers.test(V.layers)&&tt(Ce,N,V,ve,we,ze)}}function tt(A,N,V,H,F,le){A.onBeforeRender(x,N,V,H,F,le),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(x,N,V,H,A,le),F.transparent===!0&&F.side===Ir&&F.forceSinglePass===!1?(F.side=ei,F.needsUpdate=!0,x.renderBufferDirect(V,N,H,F,A,le),F.side=Us,F.needsUpdate=!0,x.renderBufferDirect(V,N,H,F,A,le),F.side=Ir):x.renderBufferDirect(V,N,H,F,A,le),A.onAfterRender(x,N,V,H,F,le)}function At(A,N,V){N.isScene!==!0&&(N=Ue);const H=Ee.get(A),F=m.state.lights,le=m.state.shadowsArray,xe=F.state.version,Ce=K.getParameters(A,F.state,le,N,V),ve=K.getProgramCacheKey(Ce);let we=H.programs;H.environment=A.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(A.isMeshStandardMaterial?T:L).get(A.envMap||H.environment),H.envMapRotation=H.environment!==null&&A.envMap===null?N.environmentRotation:A.envMapRotation,we===void 0&&(A.addEventListener("dispose",Ae),we=new Map,H.programs=we);let ze=we.get(ve);if(ze!==void 0){if(H.currentProgram===ze&&H.lightsStateVersion===xe)return Pt(A,Ce),ze}else Ce.uniforms=K.getUniforms(A),A.onBeforeCompile(Ce,x),ze=K.acquireProgram(Ce,ve),we.set(ve,ze),H.uniforms=Ce.uniforms;const Fe=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=Te.uniform),Pt(A,Ce),H.needsLights=ai(A),H.lightsStateVersion=xe,H.needsLights&&(Fe.ambientLightColor.value=F.state.ambient,Fe.lightProbe.value=F.state.probe,Fe.directionalLights.value=F.state.directional,Fe.directionalLightShadows.value=F.state.directionalShadow,Fe.spotLights.value=F.state.spot,Fe.spotLightShadows.value=F.state.spotShadow,Fe.rectAreaLights.value=F.state.rectArea,Fe.ltc_1.value=F.state.rectAreaLTC1,Fe.ltc_2.value=F.state.rectAreaLTC2,Fe.pointLights.value=F.state.point,Fe.pointLightShadows.value=F.state.pointShadow,Fe.hemisphereLights.value=F.state.hemi,Fe.directionalShadowMap.value=F.state.directionalShadowMap,Fe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Fe.spotShadowMap.value=F.state.spotShadowMap,Fe.spotLightMatrix.value=F.state.spotLightMatrix,Fe.spotLightMap.value=F.state.spotLightMap,Fe.pointShadowMap.value=F.state.pointShadowMap,Fe.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=ze,H.uniformsList=null,ze}function Jt(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=pf.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function Pt(A,N){const V=Ee.get(A);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Ct(A,N,V,H,F){N.isScene!==!0&&(N=Ue),be.resetTextureUnits();const le=N.fog,xe=H.isMeshStandardMaterial?N.environment:null,Ce=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Vs,ve=(H.isMeshStandardMaterial?T:L).get(H.envMap||xe),we=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ze=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Fe=!!V.morphAttributes.position,ct=!!V.morphAttributes.normal,Mt=!!V.morphAttributes.color;let ft=Rs;H.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(ft=x.toneMapping);const en=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,at=en!==void 0?en.length:0,Ie=Ee.get(H),_n=m.state.lights;if(q===!0&&(ne===!0||A!==E)){const Pi=A===E&&H.id===R;Te.setState(H,A,Pi)}let mt=!1;H.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==_n.state.version||Ie.outputColorSpace!==Ce||F.isBatchedMesh&&Ie.batching===!1||!F.isBatchedMesh&&Ie.batching===!0||F.isBatchedMesh&&Ie.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ie.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ie.instancing===!1||!F.isInstancedMesh&&Ie.instancing===!0||F.isSkinnedMesh&&Ie.skinning===!1||!F.isSkinnedMesh&&Ie.skinning===!0||F.isInstancedMesh&&Ie.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ie.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ie.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ie.instancingMorph===!1&&F.morphTexture!==null||Ie.envMap!==ve||H.fog===!0&&Ie.fog!==le||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Te.numPlanes||Ie.numIntersection!==Te.numIntersection)||Ie.vertexAlphas!==we||Ie.vertexTangents!==ze||Ie.morphTargets!==Fe||Ie.morphNormals!==ct||Ie.morphColors!==Mt||Ie.toneMapping!==ft||Ie.morphTargetsCount!==at)&&(mt=!0):(mt=!0,Ie.__version=H.version);let Xi=Ie.currentProgram;mt===!0&&(Xi=At(H,N,F));let Fo=!1,li=!1,Od=!1;const qt=Xi.getUniforms(),Qr=Ie.uniforms;if(ae.useProgram(Xi.program)&&(Fo=!0,li=!0,Od=!0),H.id!==R&&(R=H.id,li=!0),Fo||E!==A){qt.setValue(b,"projectionMatrix",A.projectionMatrix),qt.setValue(b,"viewMatrix",A.matrixWorldInverse);const Pi=qt.map.cameraPosition;Pi!==void 0&&Pi.setValue(b,ue.setFromMatrixPosition(A.matrixWorld)),ye.logarithmicDepthBuffer&&qt.setValue(b,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&qt.setValue(b,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,li=!0,Od=!0)}if(F.isSkinnedMesh){qt.setOptional(b,F,"bindMatrix"),qt.setOptional(b,F,"bindMatrixInverse");const Pi=F.skeleton;Pi&&(Pi.boneTexture===null&&Pi.computeBoneTexture(),qt.setValue(b,"boneTexture",Pi.boneTexture,be))}F.isBatchedMesh&&(qt.setOptional(b,F,"batchingTexture"),qt.setValue(b,"batchingTexture",F._matricesTexture,be),qt.setOptional(b,F,"batchingIdTexture"),qt.setValue(b,"batchingIdTexture",F._indirectTexture,be),qt.setOptional(b,F,"batchingColorTexture"),F._colorsTexture!==null&&qt.setValue(b,"batchingColorTexture",F._colorsTexture,be));const Fd=V.morphAttributes;if((Fd.position!==void 0||Fd.normal!==void 0||Fd.color!==void 0)&&ke.update(F,V,Xi),(li||Ie.receiveShadow!==F.receiveShadow)&&(Ie.receiveShadow=F.receiveShadow,qt.setValue(b,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Qr.envMap.value=ve,Qr.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Qr.envMapIntensity.value=N.environmentIntensity),li&&(qt.setValue(b,"toneMappingExposure",x.toneMappingExposure),Ie.needsLights&&xt(Qr,Od),le&&H.fog===!0&&De.refreshFogUniforms(Qr,le),De.refreshMaterialUniforms(Qr,H,B,W,m.state.transmissionRenderTarget[A.id]),pf.upload(b,Jt(Ie),Qr,be)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(pf.upload(b,Jt(Ie),Qr,be),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&qt.setValue(b,"center",F.center),qt.setValue(b,"modelViewMatrix",F.modelViewMatrix),qt.setValue(b,"normalMatrix",F.normalMatrix),qt.setValue(b,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Pi=H.uniformsGroups;for(let kd=0,IE=Pi.length;kd<IE;kd++){const Cg=Pi[kd];st.update(Cg,Xi),st.bind(Cg,Xi)}}return Xi}function xt(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function ai(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,N,V){Ee.get(A.texture).__webglTexture=N,Ee.get(A.depthTexture).__webglTexture=V;const H=Ee.get(A);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,N){const V=Ee.get(A);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,V=0){M=A,C=N,w=V;let H=!0,F=null,le=!1,xe=!1;if(A){const ve=Ee.get(A);if(ve.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(b.FRAMEBUFFER,null),H=!1;else if(ve.__webglFramebuffer===void 0)be.setupRenderTarget(A);else if(ve.__hasExternalTextures)be.rebindTextures(A,Ee.get(A.texture).__webglTexture,Ee.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Fe=A.depthTexture;if(ve.__boundDepthTexture!==Fe){if(Fe!==null&&Ee.has(Fe)&&(A.width!==Fe.image.width||A.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(A)}}const we=A.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(xe=!0);const ze=Ee.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[N])?F=ze[N][V]:F=ze[N],le=!0):A.samples>0&&be.useMultisampledRTT(A)===!1?F=Ee.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?F=ze[V]:F=ze,S.copy(A.viewport),D.copy(A.scissor),U=A.scissorTest}else S.copy(P).multiplyScalar(B).floor(),D.copy(ie).multiplyScalar(B).floor(),U=Me;if(ae.bindFramebuffer(b.FRAMEBUFFER,F)&&H&&ae.drawBuffers(A,F),ae.viewport(S),ae.scissor(D),ae.setScissorTest(U),le){const ve=Ee.get(A.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,V)}else if(xe){const ve=Ee.get(A.texture),we=N||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,ve.__webglTexture,V||0,we)}R=-1},this.readRenderTargetPixels=function(A,N,V,H,F,le,xe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Ce=Ce[xe]),Ce){ae.bindFramebuffer(b.FRAMEBUFFER,Ce);try{const ve=A.texture,we=ve.format,ze=ve.type;if(!ye.textureFormatReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-H&&V>=0&&V<=A.height-F&&b.readPixels(N,V,H,F,He.convert(we),He.convert(ze),le)}finally{const ve=M!==null?Ee.get(M).__webglFramebuffer:null;ae.bindFramebuffer(b.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(A,N,V,H,F,le,xe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Ce=Ce[xe]),Ce){ae.bindFramebuffer(b.FRAMEBUFFER,Ce);try{const ve=A.texture,we=ve.format,ze=ve.type;if(!ye.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=A.width-H&&V>=0&&V<=A.height-F){const Fe=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Fe),b.bufferData(b.PIXEL_PACK_BUFFER,le.byteLength,b.STREAM_READ),b.readPixels(N,V,H,F,He.convert(we),He.convert(ze),0),b.flush();const ct=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);await cA(b,ct,4);try{b.bindBuffer(b.PIXEL_PACK_BUFFER,Fe),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,le)}finally{b.deleteBuffer(Fe),b.deleteSync(ct)}return le}}finally{const ve=M!==null?Ee.get(M).__webglFramebuffer:null;ae.bindFramebuffer(b.FRAMEBUFFER,ve)}}},this.copyFramebufferToTexture=function(A,N=null,V=0){A.isTexture!==!0&&(jl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,A=arguments[1]);const H=Math.pow(2,-V),F=Math.floor(A.image.width*H),le=Math.floor(A.image.height*H),xe=N!==null?N.x:0,Ce=N!==null?N.y:0;be.setTexture2D(A,0),b.copyTexSubImage2D(b.TEXTURE_2D,V,0,0,xe,Ce,F,le),ae.unbindTexture()},this.copyTextureToTexture=function(A,N,V=null,H=null,F=0){A.isTexture!==!0&&(jl("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1],N=arguments[2],F=arguments[3]||0,V=null);let le,xe,Ce,ve,we,ze;V!==null?(le=V.max.x-V.min.x,xe=V.max.y-V.min.y,Ce=V.min.x,ve=V.min.y):(le=A.image.width,xe=A.image.height,Ce=0,ve=0),H!==null?(we=H.x,ze=H.y):(we=0,ze=0);const Fe=He.convert(N.format),ct=He.convert(N.type);be.setTexture2D(N,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,N.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,N.unpackAlignment);const Mt=b.getParameter(b.UNPACK_ROW_LENGTH),ft=b.getParameter(b.UNPACK_IMAGE_HEIGHT),en=b.getParameter(b.UNPACK_SKIP_PIXELS),at=b.getParameter(b.UNPACK_SKIP_ROWS),Ie=b.getParameter(b.UNPACK_SKIP_IMAGES),_n=A.isCompressedTexture?A.mipmaps[F]:A.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,_n.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,_n.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ce),b.pixelStorei(b.UNPACK_SKIP_ROWS,ve),A.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,F,we,ze,le,xe,Fe,ct,_n.data):A.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,F,we,ze,_n.width,_n.height,Fe,_n.data):b.texSubImage2D(b.TEXTURE_2D,F,we,ze,le,xe,Fe,ct,_n),b.pixelStorei(b.UNPACK_ROW_LENGTH,Mt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ft),b.pixelStorei(b.UNPACK_SKIP_PIXELS,en),b.pixelStorei(b.UNPACK_SKIP_ROWS,at),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ie),F===0&&N.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),ae.unbindTexture()},this.copyTextureToTexture3D=function(A,N,V=null,H=null,F=0){A.isTexture!==!0&&(jl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,H=arguments[1]||null,A=arguments[2],N=arguments[3],F=arguments[4]||0);let le,xe,Ce,ve,we,ze,Fe,ct,Mt;const ft=A.isCompressedTexture?A.mipmaps[F]:A.image;V!==null?(le=V.max.x-V.min.x,xe=V.max.y-V.min.y,Ce=V.max.z-V.min.z,ve=V.min.x,we=V.min.y,ze=V.min.z):(le=ft.width,xe=ft.height,Ce=ft.depth,ve=0,we=0,ze=0),H!==null?(Fe=H.x,ct=H.y,Mt=H.z):(Fe=0,ct=0,Mt=0);const en=He.convert(N.format),at=He.convert(N.type);let Ie;if(N.isData3DTexture)be.setTexture3D(N,0),Ie=b.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)be.setTexture2DArray(N,0),Ie=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,N.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,N.unpackAlignment);const _n=b.getParameter(b.UNPACK_ROW_LENGTH),mt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Xi=b.getParameter(b.UNPACK_SKIP_PIXELS),Fo=b.getParameter(b.UNPACK_SKIP_ROWS),li=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,ft.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ft.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,ve),b.pixelStorei(b.UNPACK_SKIP_ROWS,we),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ze),A.isDataTexture||A.isData3DTexture?b.texSubImage3D(Ie,F,Fe,ct,Mt,le,xe,Ce,en,at,ft.data):N.isCompressedArrayTexture?b.compressedTexSubImage3D(Ie,F,Fe,ct,Mt,le,xe,Ce,en,ft.data):b.texSubImage3D(Ie,F,Fe,ct,Mt,le,xe,Ce,en,at,ft),b.pixelStorei(b.UNPACK_ROW_LENGTH,_n),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,mt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Xi),b.pixelStorei(b.UNPACK_SKIP_ROWS,Fo),b.pixelStorei(b.UNPACK_SKIP_IMAGES,li),F===0&&N.generateMipmaps&&b.generateMipmap(Ie),ae.unbindTexture()},this.initRenderTarget=function(A){Ee.get(A).__webglFramebuffer===void 0&&be.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?be.setTextureCube(A,0):A.isData3DTexture?be.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?be.setTexture2DArray(A,0):be.setTexture2D(A,0),ae.unbindTexture()},this.resetState=function(){C=0,w=0,M=null,ae.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Q_?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===Pd?"display-p3":"srgb"}}class S2 extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qr,this.environmentIntensity=1,this.environmentRotation=new qr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class M2 extends Yu{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jf=new Y,ed=new Y,Dv=new Qt,Tl=new jS,Nc=new bd,zh=new Y,Iv=new Y;class E2 extends ti{constructor(e=new Zr,t=new M2){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Jf.fromBufferAttribute(t,r-1),ed.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Jf.distanceTo(ed);e.setAttribute("lineDistance",new xi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nc.copy(i.boundingSphere),Nc.applyMatrix4(r),Nc.radius+=s,e.ray.intersectsSphere(Nc)===!1)return;Dv.copy(r).invert(),Tl.copy(e.ray).applyMatrix4(Dv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=u){const d=c.getX(_),v=c.getX(_+1),x=Oc(this,e,Tl,l,d,v);x&&t.push(x)}if(this.isLineLoop){const _=c.getX(g-1),m=c.getX(p),d=Oc(this,e,Tl,l,_,m);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=u){const d=Oc(this,e,Tl,l,_,_+1);d&&t.push(d)}if(this.isLineLoop){const _=Oc(this,e,Tl,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Oc(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(Jf.fromBufferAttribute(o,r),ed.fromBufferAttribute(o,s),t.distanceSqToSegment(Jf,ed,zh,Iv)>i)return;zh.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(zh);if(!(l<e.near||l>e.far))return{distance:l,point:Iv.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Uv=new Y,Nv=new Y;class T2 extends E2{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Uv.fromBufferAttribute(t,r),Nv.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Uv.distanceTo(Nv);e.setAttribute("lineDistance",new xi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class w2 extends Ln{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Ov={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class A2{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){const h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=u.length;h<f;h+=2){const p=u[h],g=u[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null}}}const C2=new A2;class eg{constructor(e){this.manager=e!==void 0?e:C2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}eg.DEFAULT_MATERIAL_NAME="__DEFAULT";class R2 extends eg{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ov.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Au("img");function l(){c(),Ov.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(h){c(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class P2 extends eg{constructor(e){super(e)}load(e,t,i,r){const s=new Ln,o=new R2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:X_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=X_);function br(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function fM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Cu={duration:.5,overwrite:!1,delay:0},tg,yn,Ut,zi=1e8,wt=1/zi,Cm=Math.PI*2,b2=Cm/4,L2=0,dM=Math.sqrt,D2=Math.cos,I2=Math.sin,mn=function(e){return typeof e=="string"},Gt=function(e){return typeof e=="function"},$r=function(e){return typeof e=="number"},ng=function(e){return typeof e>"u"},Mr=function(e){return typeof e=="object"},ni=function(e){return e!==!1},ig=function(){return typeof window<"u"},Fc=function(e){return Gt(e)||mn(e)},hM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dn=Array.isArray,U2=/random\([^)]+\)/g,N2=/,\s*/g,Fv=/(?:-?\.?\d|\.)+/gi,pM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Sa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Bh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,mM=/[+-]=-?[.\d]+/,O2=/[^,'"\[\]\s]+/gi,F2=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,lr,Rm,rg,wi={},td={},_M,gM=function(e){return(td=Ja(e,wi))&&oi},sg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ru=function(e,t){return!t&&console.warn(e)},vM=function(e,t){return e&&(wi[e]=t)&&td&&(td[e]=t)||wi},Pu=function(){return 0},k2={suppressEvents:!0,isStart:!0,kill:!1},mf={suppressEvents:!0,kill:!1},z2={suppressEvents:!0},og={},Ps=[],Pm={},xM,pi={},Hh={},kv=30,_f=[],ag="",lg=function(e){var t=e[0],i,r;if(Mr(t)||Gt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=_f.length;r--&&!_f[r].targetTest(t););i=_f[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new HM(e[r],i)))||e.splice(r,1);return e},go=function(e){return e._gsap||lg(Bi(e))[0]._gsap},yM=function(e,t,i){return(i=e[t])&&Gt(i)?e[t]():ng(i)&&e.getAttribute&&e.getAttribute(t)||i},ii=function(e,t){return(e=e.split(",")).forEach(t)||e},Wt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},Ia=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},B2=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},nd=function(){var e=Ps.length,t=Ps.slice(0),i,r;for(Pm={},Ps.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},ug=function(e){return!!(e._initted||e._startAt||e.add)},SM=function(e,t,i,r){Ps.length&&!yn&&nd(),e.render(t,i,!!(yn&&t<0&&ug(e))),Ps.length&&!yn&&nd()},MM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(O2).length<2?t:mn(e)?e.trim():e},EM=function(e){return e},Ai=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},H2=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ja=function(e,t){for(var i in t)e[i]=t[i];return e},zv=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Mr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},id=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Kl=function(e){var t=e.parent||kt,i=e.keyframes?H2(Dn(e.keyframes)):Ai;if(ni(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},V2=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},TM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Dd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ns=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},vo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},G2=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},bm=function(e,t,i,r){return e._startAt&&(yn?e._startAt.revert(mf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},W2=function n(e){return!e||e._ts&&n(e.parent)},Bv=function(e){return e._repeat?el(e._tTime,e=e.duration()+e._rDelay)*e:0},el=function(e,t){var i=Math.floor(e=Ot(e/t));return e&&i===e?i-1:i},rd=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Id=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},Ud=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ot(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Id(e),i._dirty||vo(i,e)),e},wM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=rd(e.rawTime(),t),(!t._dur||$u(0,t.totalDuration(),i)-t._tTime>wt)&&t.render(i,!0)),vo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-wt}},hr=function(e,t,i,r){return t.parent&&Ns(t),t._start=Ot(($r(i)?i:i||e!==kt?Li(e,i,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),TM(e,t,"_first","_last",e._sort?"_start":0),Lm(t)||(e._recent=t),r||wM(e,t),e._ts<0&&Ud(e,e._tTime),e},AM=function(e,t){return(wi.ScrollTrigger||sg("scrollTrigger",t))&&wi.ScrollTrigger.create(t,e)},CM=function(e,t,i,r,s){if(fg(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!yn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&xM!==_i.frame)return Ps.push(e),e._lazy=[s,r],1},X2=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Lm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Y2=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&X2(e)&&!(!e._initted&&Lm(e))||(e._ts<0||e._dp._ts<0)&&!Lm(e))?0:1,a=e._rDelay,l=0,u,c,h;if(a&&e._repeat&&(l=$u(0,e._tDur,t),c=el(l,a),e._yoyo&&c&1&&(o=1-o),c!==el(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||yn||r||e._zTime===wt||!t&&e._zTime){if(!e._initted&&CM(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?wt:0),i||(i=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&bm(e,t,i,!0),e._onUpdate&&!i&&yi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&yi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ns(e,1),!i&&!yn&&(yi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},q2=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},tl=function(e,t,i,r){var s=e._repeat,o=Ot(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ot(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Ud(e,e._tTime=e._tDur*a),e.parent&&Id(e),i||vo(e.parent,e),e},Hv=function(e){return e instanceof jn?vo(e):tl(e,e._dur)},$2={_start:0,endTime:Pu,totalDuration:Pu},Li=function n(e,t,i){var r=e.labels,s=e._recent||$2,o=e.duration()>=zi?s.endTime(!1):e._dur,a,l,u;return mn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Dn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Zl=function(e,t,i){var r=$r(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ni(l.vars.inherit)&&l.parent;o.immediateRender=ni(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Kt(t[0],o,t[s+1])},Gs=function(e,t){return e||e===0?t(e):t},$u=function(e,t,i){return i<e?e:i>t?t:i},Pn=function(e,t){return!mn(e)||!(t=F2.exec(e))?"":t[1]},j2=function(e,t,i){return Gs(i,function(r){return $u(e,t,r)})},Dm=[].slice,RM=function(e,t){return e&&Mr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Mr(e[0]))&&!e.nodeType&&e!==lr},K2=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return mn(r)&&!t||RM(r,1)?(s=i).push.apply(s,Bi(r)):i.push(r)})||i},Bi=function(e,t,i){return Ut&&!t&&Ut.selector?Ut.selector(e):mn(e)&&!i&&(Rm||!nl())?Dm.call((t||rg).querySelectorAll(e),0):Dn(e)?K2(e,i):RM(e)?Dm.call(e,0):e?[e]:[]},Im=function(e){return e=Bi(e)[0]||Ru("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Bi(t,i.querySelectorAll?i:i===e?Ru("Invalid scope")||rg.createElement("div"):e)}},PM=function(e){return e.sort(function(){return .5-Math.random()})},bM=function(e){if(Gt(e))return e;var t=Mr(e)?e:{each:e},i=xo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,h=r;return mn(r)?c=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],h=r[1]),function(f,p,g){var _=(g||t).length,m=o[_],d,v,x,y,C,w,M,R,E;if(!m){if(E=t.grid==="auto"?0:(t.grid||[1,zi])[1],!E){for(M=-zi;M<(M=g[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(m=o[_]=[],d=l?Math.min(E,_)*c-.5:r%E,v=E===zi?0:l?_*h/E-.5:r/E|0,M=0,R=zi,w=0;w<_;w++)x=w%E-d,y=v-(w/E|0),m[w]=C=u?Math.abs(u==="y"?y:x):dM(x*x+y*y),C>M&&(M=C),C<R&&(R=C);r==="random"&&PM(m),m.max=M-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(E>_?_-1:u?u==="y"?_/E:E:Math.max(E,_/E))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Pn(t.amount||t.each)||0,i=i&&_<0?uL(i):i}return _=(m[f]-m.min)/m.max||0,Ot(m.b+(i?i(_):_)*m.v)+m.u}},Um=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ot(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+($r(i)?0:Pn(i))}},LM=function(e,t){var i=Dn(e),r,s;return!i&&Mr(e)&&(r=i=e.radius||zi,e.values?(e=Bi(e.values),(s=!$r(e[0]))&&(r*=r)):e=Um(e.increment)),Gs(t,i?Gt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=zi,c=0,h=e.length,f,p;h--;)s?(f=e[h].x-a,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-a),f<u&&(u=f,c=h);return c=!r||u<=r?e[c]:o,s||c===o||$r(o)?c:c+Pn(o)}:Um(e))},DM=function(e,t,i,r){return Gs(Dn(e)?!t:i===!0?!!(i=0):!r,function(){return Dn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Z2=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Q2=function(e,t){return function(i){return e(parseFloat(i))+(t||Pn(i))}},J2=function(e,t,i){return UM(e,t,0,1,i)},IM=function(e,t,i){return Gs(i,function(r){return e[~~t(r)]})},eL=function n(e,t,i){var r=t-e;return Dn(e)?IM(e,n(0,e.length),t):Gs(i,function(s){return(r+(s-e)%r)%r+e})},tL=function n(e,t,i){var r=t-e,s=r*2;return Dn(e)?IM(e,n(0,e.length-1),t):Gs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},bu=function(e){return e.replace(U2,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(N2);return DM(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},UM=function(e,t,i,r,s){var o=t-e,a=r-i;return Gs(s,function(l){return i+((l-e)/o*a||0)})},nL=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=mn(e),a={},l,u,c,h,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Dn(e)&&!Dn(t)){for(c=[],h=e.length,f=h-2,u=1;u<h;u++)c.push(n(e[u-1],e[u]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return c[_](g-_)},i=t}else r||(e=Ja(Dn(e)?[]:{},e));if(!c){for(l in t)cg.call(a,e,l,"get",t[l]);s=function(g){return pg(g,a)||(o?e.p:e)}}}return Gs(i,s)},Vv=function(e,t,i){var r=e.labels,s=zi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},yi=function(e,t,i){var r=e.vars,s=r[t],o=Ut,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ps.length&&nd(),a&&(Ut=a),c=l?s.apply(u,l):s.call(u),Ut=o,c},Il=function(e){return Ns(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yn),e.progress()<1&&yi(e,"onInterrupt"),e},Ma,NM=[],OM=function(e){if(e)if(e=!e.name&&e.default||e,ig()||e.headless){var t=e.name,i=Gt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Pu,render:pg,add:cg,kill:xL,modifier:vL,rawVars:0},o={targetTest:0,get:0,getSetter:hg,aliases:{},register:0};if(nl(),e!==r){if(pi[t])return;Ai(r,Ai(id(e,s),o)),Ja(r.prototype,Ja(s,id(e,o))),pi[r.prop=t]=r,e.targetTest&&(_f.push(r),og[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}vM(t,r),e.register&&e.register(oi,r,ri)}else NM.push(e)},Tt=255,Ul={aqua:[0,Tt,Tt],lime:[0,Tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tt],navy:[0,0,128],white:[Tt,Tt,Tt],olive:[128,128,0],yellow:[Tt,Tt,0],orange:[Tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tt,0,0],pink:[Tt,192,203],cyan:[0,Tt,Tt],transparent:[Tt,Tt,Tt,0]},Vh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Tt+.5|0},FM=function(e,t,i){var r=e?$r(e)?[e>>16,e>>8&Tt,e&Tt]:0:Ul.black,s,o,a,l,u,c,h,f,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ul[e])r=Ul[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Tt,r&Tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Tt,e&Tt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Fv),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Vh(l+1/3,s,o),r[1]=Vh(l,s,o),r[2]=Vh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(pM),i&&r.length<4&&(r[3]=1),r}else r=e.match(Fv)||Ul.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Tt,o=r[1]/Tt,a=r[2]/Tt,h=Math.max(s,o,a),f=Math.min(s,o,a),c=(h+f)/2,h===f?l=u=0:(p=h-f,u=c>.5?p/(2-h-f):p/(h+f),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},kM=function(e){var t=[],i=[],r=-1;return e.split(bs).forEach(function(s){var o=s.match(Sa)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Gv=function(e,t,i){var r="",s=(e+r).match(bs),o=t?"hsla(":"rgba(",a=0,l,u,c,h;if(!s)return e;if(s=s.map(function(f){return(f=FM(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=kM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(bs,"1").split(Sa),h=u.length-1;a<h;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(bs),h=u.length-1;a<h;a++)r+=u[a]+s[a];return r+u[h]},bs=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ul)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),iL=/hsl[a]?\(/,zM=function(e){var t=e.join(" "),i;if(bs.lastIndex=0,bs.test(t))return i=iL.test(t),e[1]=Gv(e[1],i),e[0]=Gv(e[0],i,kM(e[1])),!0},Lu,_i=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,h,f,p,g=function _(m){var d=n()-r,v=m===!0,x,y,C,w;if((d>e||d<0)&&(i+=d-t),r+=d,C=r-i,x=C-o,(x>0||v)&&(w=++h.frame,f=C-h.time*1e3,h.time=C=C/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(_)),y)for(p=0;p<a.length;p++)a[p](C,f,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){_M&&(!Rm&&ig()&&(lr=Rm=window,rg=lr.document||{},wi.gsap=oi,(lr.gsapVersions||(lr.gsapVersions=[])).push(oi.version),gM(td||lr.GreenSockGlobals||!lr.gsap&&lr||{}),NM.forEach(OM)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),u=c||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Lu=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Lu=0,u=Pu},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,d,v){var x=d?function(y,C,w,M){m(y,C,w,M),h.remove(x)}:m;return h.remove(m),a[v?"unshift":"push"](x),nl(),x},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},h}(),nl=function(){return!Lu&&_i.wake()},lt={},rL=/^[\d.\-M][\d.\-,\s]/,sL=/["']/g,oL=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(sL,"").trim():+u,r=l.substr(a+1).trim();return t},aL=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},lL=function(e){var t=(e+"").split("("),i=lt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[oL(t[1])]:aL(e).split(",").map(MM)):lt._CE&&rL.test(e)?lt._CE("",e):i},uL=function(e){return function(t){return 1-e(1-t)}},xo=function(e,t){return e&&(Gt(e)?e:lt[e]||lL(e))||t},Oo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ii(e,function(a){lt[a]=wi[a]=s,lt[o=a.toLowerCase()]=i;for(var l in s)lt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[a+"."+l]=s[l]}),s},BM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Gh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Cm*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*I2((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:BM(a);return s=Cm/s,l.config=function(u,c){return n(e,u,c)},l},Wh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:BM(i);return r.config=function(s){return n(e,s)},r};ii("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Oo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;Oo("Elastic",Gh("in"),Gh("out"),Gh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Oo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Oo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Oo("Circ",function(n){return-(dM(1-n*n)-1)});Oo("Sine",function(n){return n===1?1:-D2(n*b2)+1});Oo("Back",Wh("in"),Wh("out"),Wh());lt.SteppedEase=lt.steps=wi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-wt;return function(a){return((r*$u(0,o,a)|0)+s)*i}}};Cu.ease=lt["quad.out"];ii("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return ag+=n+","+n+"Params,"});var HM=function(e,t){this.id=L2++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:yM,this.set=t?t.getSetter:hg},Du=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,tl(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),Lu||_i.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,tl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(nl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ud(this,i),!s._dp||s.parent||wM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&hr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===wt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),SM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Bv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Bv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?el(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?rd(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-wt?0:this._rts,this.totalTime($u(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Id(this),G2(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(nl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Ot(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&hr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ni(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?rd(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=z2);var r=yn;return yn=i,ug(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),yn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Hv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Hv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Li(this,i),ni(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ni(r)),this._dur||(this._zTime=-wt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-wt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Gt(i)?i:EM,l=function(){var c=r.then;r.then=null,s&&s(),Gt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Il(this)},n}();Ai(Du.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var jn=function(n){fM(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ni(i.sortChildren),kt&&hr(i.parent||kt,br(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&AM(br(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Zl(0,arguments,this),this},t.from=function(r,s,o){return Zl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Zl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Kl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Kt(r,s,Li(this,o),1),this},t.call=function(r,s,o){return hr(this,Kt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Kt(r,o,Li(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Kl(o).immediateRender=ni(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,h){return a.startAt=o,Kl(a).immediateRender=ni(a.immediateRender),this.staggerTo(r,s,a,l,u,c,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Ot(r),h=this._zTime<0!=r<0&&(this._initted||!u),f,p,g,_,m,d,v,x,y,C,w,M;if(this!==kt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||h){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,y=this._start,x=this._ts,d=!x,h&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=Ot(c%m),c===l?(_=this._repeat,f=u):(C=Ot(c/m),_=~~C,_&&_===C&&(f=u,_--),f>u&&(f=u)),C=el(this._tTime,m),!a&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),w&&_&1&&(f=u-f,M=1),_!==C&&!this._lock){var R=w&&C&1,E=R===(w&&_&1);if(_<C&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(M?0:Ot(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&yi(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,C=_),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,E&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=q2(this,Ot(a),Ot(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!C&&(yi(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!d){v=0,g&&(c+=this._zTime=-wt);break}}p=g}else{p=this._last;for(var S=r<0?r:f;p;){if(g=p._prev,(p._act||S<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,o||yn&&ug(p)),f!==this._time||!this._ts&&!d){v=0,g&&(c+=this._zTime=S?-wt:wt);break}}p=g}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-wt)._zTime=f>=a?1:-1,this._ts))return this._start=y,Id(this),this.render(r,s,o);this._onUpdate&&!s&&yi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ns(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(yi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if($r(s)||(s=Li(this,s,r)),!(r instanceof Du)){if(Dn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(mn(r))return this.addLabel(r,s);if(Gt(r))r=Kt.delayedCall(0,r);else return this}return this!==r?hr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-zi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Kt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return mn(r)?this.removeLabel(r):Gt(r)?this.killTweensOf(r):(r.parent===this&&Dd(this,r),r===this._recent&&(this._recent=this._last),vo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(_i.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Li(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Kt.delayedCall(0,s||Pu,o);return a.data="isPause",this._hasPause=1,hr(this,a,Li(this,r))},t.removePause=function(r){var s=this._first;for(r=Li(this,r);s;)s._start===r&&s.data==="isPause"&&Ns(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ps!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Bi(r),l=this._first,u=$r(s),c;l;)l instanceof Kt?B2(l._targets,a)&&(u?(!ps||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Li(o,r),l=s,u=l.startAt,c=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=Kt.to(o,Ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||wt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&tl(g,m,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ai({startAt:{time:Li(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Vv(this,Li(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Vv(this,Li(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Ot(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return vo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),vo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=zi,u,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,hr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Ot(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;tl(o,o===kt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(kt._ts&&(SM(kt,rd(r,kt)),xM=_i.frame),_i.frame>=kv){kv+=Ei.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&Ei.autoSleep&&_i._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||_i.sleep()}}},e}(Du);Ai(jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var cL=function(e,t,i,r,s,o,a){var l=new ri(this._pt,e,t,0,1,qM,null,s),u=0,c=0,h,f,p,g,_,m,d,v;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=bu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(Bh)||[];h=Bh.exec(r);)g=h[0],_=r.substring(u,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?Ia(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},u=Bh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(mM.test(r)||d)&&(l.e=0),this._pt=l,l},cg=function(e,t,i,r,s,o,a,l,u,c){Gt(r)&&(r=r(s||0,e,o));var h=e[t],f=i!=="get"?i:Gt(h)?u?e[t.indexOf("set")||!Gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,p=Gt(h)?u?mL:XM:dg,g;if(mn(r)&&(~r.indexOf("random(")&&(r=bu(r)),r.charAt(1)==="="&&(g=Ia(f,r)+(Pn(f)||0),(g||g===0)&&(r=g))),!c||f!==r||Nm)return!isNaN(f*r)&&r!==""?(g=new ri(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?gL:YM,0,p),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&sg(t,r),cL.call(this,e,t,f,r,p,l||Ei.stringFilter,u))},fL=function(e,t,i,r,s){if(Gt(e)&&(e=Ql(e,s,t,i,r)),!Mr(e)||e.style&&e.nodeType||Dn(e)||hM(e))return mn(e)?Ql(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Ql(e[a],s,t,i,r);return o},VM=function(e,t,i,r,s,o){var a,l,u,c;if(pi[e]&&(a=new pi[e]).init(s,a.rawVars?t[e]:fL(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ri(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Ma))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},ps,Nm,fg=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,h=r.yoyoEase,f=r.keyframes,p=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,d=e.parent,v=d&&d.data==="nested"?d.vars.targets:m,x=e._overwrite==="auto"&&!tg,y=e.timeline,C=r.easeReverse||h,w,M,R,E,S,D,U,k,X,j,W,B,I;if(y&&(!f||!s)&&(s="none"),e._ease=xo(s,Cu.ease),e._rEase=C&&(xo(C)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||f&&!r.stagger){if(k=m[0]?go(m[0]).harness:0,B=k&&r[k.prop],w=id(r,og),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!p?_.render(-1,!0):_.revert(c&&g?mf:k2),_._lazy=0),o){if(Ns(e._startAt=Kt.set(m,Ai({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&ni(l),startAt:null,delay:0,onUpdate:u&&function(){return yi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn||!a&&!p)&&e._startAt.revert(mf),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!_){if(t&&(a=!1),R=Ai({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ni(l),immediateRender:a,stagger:0,parent:d},w),B&&(R[k.prop]=B),Ns(e._startAt=Kt.set(m,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn?e._startAt.revert(mf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ni(l)||l&&!g,M=0;M<m.length;M++){if(S=m[M],U=S._gsap||lg(m)[M]._gsap,e._ptLookup[M]=j={},Pm[U.id]&&Ps.length&&nd(),W=v===m?M:v.indexOf(S),k&&(X=new k).init(S,B||w,e,W,v)!==!1&&(e._pt=E=new ri(e._pt,S,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function($){j[$]=E}),X.priority&&(D=1)),!k||B)for(R in w)pi[R]&&(X=VM(R,w,e,W,S,v))?X.priority&&(D=1):j[R]=E=cg.call(e,S,R,"get",w[R],W,v,0,r.stringFilter);e._op&&e._op[M]&&e.kill(S,e._op[M]),x&&e._pt&&(ps=e,kt.killTweensOf(S,j,e.globalTime(t)),I=!e.parent,ps=0),e._pt&&l&&(Pm[U.id]=1)}D&&$M(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!I,f&&t<=0&&y.render(zi,!0,!0)},dL=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Nm=1,e.vars[t]="+=0",fg(e,a),Nm=0,l?Ru(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)h=u[p],c=h._pt||h,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,h.e&&(h.e=Wt(i)+Pn(h.e)),h.b&&(h.b=c.s+Pn(h.b))},hL=function(e,t){var i=e[0]?go(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ja({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},pL=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Dn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ql=function(e,t,i,r,s){return Gt(e)?e.call(t,i,r,s):mn(e)&&~e.indexOf("random(")?bu(e):e},GM=ag+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",WM={};ii(GM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return WM[n]=1});var Kt=function(n){fM(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Kl(r))||this;var l=a.vars,u=l.duration,c=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=r.parent||kt,v=(Dn(i)||hM(i)?$r(i[0]):"length"in r)?[i]:Bi(i),x,y,C,w,M,R,E,S;if(a._targets=v.length?lg(v):Ru("GSAP target "+i+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||f||Fc(u)||Fc(c)){r=a.vars;var D=r.easeReverse||r.yoyoEase;if(x=a.timeline=new jn({data:"nested",defaults:_||{},targets:d&&d.data==="nested"?d.vars.targets:v}),x.kill(),x.parent=x._dp=br(a),x._start=0,f||Fc(u)||Fc(c)){if(w=v.length,E=f&&bM(f),Mr(f))for(M in f)~GM.indexOf(M)&&(S||(S={}),S[M]=f[M]);for(y=0;y<w;y++)C=id(r,WM),C.stagger=0,D&&(C.easeReverse=D),S&&Ja(C,S),R=v[y],C.duration=+Ql(u,br(a),y,R,v),C.delay=(+Ql(c,br(a),y,R,v)||0)-a._delay,!f&&w===1&&C.delay&&(a._delay=c=C.delay,a._start+=c,C.delay=0),x.to(R,C,E?E(y,R,v):0),x._ease=lt.none;x.duration()?u=c=0:a.timeline=0}else if(g){Kl(Ai(x.vars.defaults,{ease:"none"})),x._ease=xo(g.ease||r.ease||"none");var U=0,k,X,j;if(Dn(g))g.forEach(function(W){return x.to(v,W,">")}),x.duration();else{C={};for(M in g)M==="ease"||M==="easeEach"||pL(M,g[M],C,g.easeEach);for(M in C)for(k=C[M].sort(function(W,B){return W.t-B.t}),U=0,y=0;y<k.length;y++)X=k[y],j={ease:X.e,duration:(X.t-(y?k[y-1].t:0))/100*u},j[M]=X.v,x.to(v,j,U),U+=j.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return p===!0&&!tg&&(ps=br(a),kt.killTweensOf(v),ps=0),hr(d,br(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!u&&!g&&a._start===Ot(d._time)&&ni(h)&&W2(br(a))&&d.data!=="nested")&&(a._tTime=-wt,a.render(Math.max(0,-c)||0)),m&&AM(br(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,h=r>l-wt&&!c?l:r<wt?0:r,f,p,g,_,m,d,v,x;if(!u)Y2(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=h,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(f=Ot(h%_),h===l?(g=this._repeat,f=u):(m=Ot(h/_),g=~~m,g&&g===m?(f=u,g--):f>u&&(f=u)),d=this._yoyo&&g&1,d&&(f=u-f),m=el(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&this.vars.repeatRefresh&&!d&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ot(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(CM(this,c?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var C=y?a:u-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(y?-1:1)/C:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/u);if(this._from&&(this.ratio=v=1-v),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!m&&(yi(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&bm(this,r,s,o),yi(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&yi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&bm(this,r,!0,!0),(r||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ns(this,1),!s&&!(c&&!a)&&(h||a||d)&&(yi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Lu||_i.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||fg(this,u),c=this._ease(u/this._dur),dL(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Ud(this,0),this.parent||TM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Il(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ps&&ps.vars.overwrite!==!0)._first||Il(this),this.parent&&o!==this.timeline.totalDuration()&&tl(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Bi(r):a,u=this._ptLookup,c=this._pt,h,f,p,g,_,m,d;if((!s||s==="all")&&V2(a,l))return s==="all"&&(this._pt=0),Il(this);for(h=this._op=this._op||[],s!=="all"&&(mn(s)&&(_={},ii(s,function(v){return _[v]=1}),s=_),s=hL(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){f=u[d],s==="all"?(h[d]=s,g=f,p={}):(p=h[d]=h[d]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Dd(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&Il(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Zl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Zl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return kt.killTweensOf(r,s,o)},e}(Du);Ai(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ii("staggerTo,staggerFrom,staggerFromTo",function(n){Kt[n]=function(){var e=new jn,t=Dm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var dg=function(e,t,i){return e[t]=i},XM=function(e,t,i){return e[t](i)},mL=function(e,t,i,r){return e[t](r.fp,i)},_L=function(e,t,i){return e.setAttribute(t,i)},hg=function(e,t){return Gt(e[t])?XM:ng(e[t])&&e.setAttribute?_L:dg},YM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},gL=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},qM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},pg=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},vL=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},xL=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Dd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},yL=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},$M=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ri=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||YM,this.d=l||this,this.set=u||dg,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=yL,this.m=i,this.mt=s,this.tween=r},n}();ii(ag+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return og[n]=1});wi.TweenMax=wi.TweenLite=Kt;wi.TimelineLite=wi.TimelineMax=jn;kt=new jn({sortChildren:!1,defaults:Cu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ei.stringFilter=zM;var yo=[],gf={},SL=[],Wv=0,ML=0,Xh=function(e){return(gf[e]||SL).map(function(t){return t()})},Om=function(){var e=Date.now(),t=[];e-Wv>2&&(Xh("matchMediaInit"),yo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=lr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Xh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Wv=e,Xh("matchMedia"))},jM=function(){function n(t,i){this.selector=i&&Im(i),this.data=[],this._r=[],this.isReverted=!1,this.id=ML++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Gt(i)&&(s=r,r=i,i=Gt);var o=this,a=function(){var u=Ut,c=o.selector,h;return u&&u!==o&&u.data.push(o),s&&(o.selector=Im(s)),Ut=o,h=r.apply(o,arguments),Gt(h)&&o._r.push(h),Ut=u,o.selector=c,o.isReverted=!1,h};return o.last=a,i===Gt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ut;Ut=null,i(this),Ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Kt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof jn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Kt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=yo.length;o--;)yo[o].id===this.id&&yo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),EL=function(){function n(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Mr(i)||(i={matches:i});var o=new jM(0,s||this.scope),a=o.conditions={},l,u,c;Ut&&!o.selector&&(o.selector=Ut.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=lr.matchMedia(i[u]),l&&(yo.indexOf(o)<0&&yo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Om):l.addEventListener("change",Om)));return c&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),sd={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return OM(r)})},timeline:function(e){return new jn(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,i,r){mn(e)&&(e=Bi(e)[0]);var s=go(e||{}).get,o=i?EM:MM;return i==="native"&&(i=""),e&&(t?o((pi[t]&&pi[t].get||s)(e,t,i,r)):function(a,l,u){return o((pi[a]&&pi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Bi(e),e.length>1){var r=e.map(function(c){return oi.quickSetter(c,t,i)}),s=r.length;return function(c){for(var h=s;h--;)r[h](c)}}e=e[0]||{};var o=pi[t],a=go(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var h=new o;Ma._pt=0,h.init(e,i?c+i:c,Ma,0,[e]),h.render(1,h),Ma._pt&&pg(1,Ma)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=oi.to(e,Ai((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=xo(e.ease,Cu.ease)),zv(Cu,e||{})},config:function(e){return zv(Ei,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!pi[a]&&!wi[a]&&Ru(t+" effect requires "+a+" plugin.")}),Hh[t]=function(a,l,u){return i(Bi(a),Ai(l||{},s),u)},o&&(jn.prototype[t]=function(a,l,u){return this.add(Hh[t](a,Mr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){lt[e]=xo(t)},parseEase:function(e,t){return arguments.length?xo(e,t):lt},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new jn(e),r,s;for(i.smoothChildTiming=ni(e.smoothChildTiming),kt.remove(i),i._dp=0,i._time=i._tTime=kt._time,r=kt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Kt&&r.vars.onComplete===r._targets[0]))&&hr(i,r,r._start-r._delay),r=s;return hr(kt,i,0),i},context:function(e,t){return e?new jM(e,t):Ut},matchMedia:function(e){return new EL(e)},matchMediaRefresh:function(){return yo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Om()},addEventListener:function(e,t){var i=gf[e]||(gf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=gf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:eL,wrapYoyo:tL,distribute:bM,random:DM,snap:LM,normalize:J2,getUnit:Pn,clamp:j2,splitColor:FM,toArray:Bi,selector:Im,mapRange:UM,pipe:Z2,unitize:Q2,interpolate:nL,shuffle:PM},install:gM,effects:Hh,ticker:_i,updateRoot:jn.updateRoot,plugins:pi,globalTimeline:kt,core:{PropTween:ri,globals:vM,Tween:Kt,Timeline:jn,Animation:Du,getCache:go,_removeLinkedListItem:Dd,reverting:function(){return yn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return tg=e}}};ii("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return sd[n]=Kt[n]});_i.add(jn.updateRoot);Ma=sd.to({},{duration:0});var TL=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},wL=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=TL(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Yh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(mn(s)&&(l={},ii(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}wL(a,s)}}}},oi=sd.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)yn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Yh("roundProps",Um),Yh("modifiers"),Yh("snap",LM))||sd;Kt.version=jn.version=oi.version="3.15.0";_M=1;ig()&&nl();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xv,ms,Ua,mg,ho,Yv,_g,AL=function(){return typeof window<"u"},jr={},no=180/Math.PI,Na=Math.PI/180,na=Math.atan2,qv=1e8,gg=/([A-Z])/g,CL=/(left|right|width|margin|padding|x)/i,RL=/[\s,\(]\S/,mr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},PL=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},bL=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},LL=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},DL=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},KM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ZM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},IL=function(e,t,i){return e.style[t]=i},UL=function(e,t,i){return e.style.setProperty(t,i)},NL=function(e,t,i){return e._gsap[t]=i},OL=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},FL=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},kL=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},zt="transform",si=zt+"Origin",zL=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in jr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=mr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Dr(r,a)}):this.tfm[e]=o.x?o[e]:Dr(r,e),e===si&&(this.tfm.zOrigin=o.zOrigin);else return mr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(zt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(si,t,"")),e=zt}(s||t)&&this.props.push(e,t,s[e])},QM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},BL=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(gg,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=_g(),(!s||!s.isStart)&&!i[zt]&&(QM(i),r.zOrigin&&i[si]&&(i[si]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},JM=function(e,t){var i={target:e,props:[],revert:BL,save:zL};return e._gsap||oi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},eE,km=function(e,t){var i=ms.createElementNS?ms.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ms.createElement(e);return i&&i.style?i:ms.createElement(e)},Si=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(gg,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,il(t)||t,1)||""},$v="O,Moz,ms,Ms,Webkit".split(","),il=function(e,t,i){var r=t||ho,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!($v[o]+e in s););return o<0?null:(o===3?"ms":o>=0?$v[o]:"")+e},zm=function(){AL()&&window.document&&(Xv=window,ms=Xv.document,Ua=ms.documentElement,ho=km("div")||{style:{}},km("div"),zt=il(zt),si=zt+"Origin",ho.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",eE=!!il("perspective"),_g=oi.core.reverting,mg=1)},jv=function(e){var t=e.ownerSVGElement,i=km("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Ua.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Ua.removeChild(i),s},Kv=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},tE=function(e){var t,i;try{t=e.getBBox()}catch{t=jv(e),i=1}return t&&(t.width||t.height)||i||(t=jv(e)),t&&!t.width&&!t.x&&!t.y?{x:+Kv(e,["x","cx","x1"])||0,y:+Kv(e,["y","cy","y1"])||0,width:0,height:0}:t},nE=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&tE(e))},Os=function(e,t){if(t){var i=e.style,r;t in jr&&t!==si&&(t=zt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(gg,"-$1").toLowerCase())):i.removeAttribute(t)}},_s=function(e,t,i,r,s,o){var a=new ri(e._pt,t,i,0,1,o?ZM:KM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Zv={deg:1,rad:1,turn:1},HL={grid:1,flex:1},Fs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=ho.style,l=CL.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",p=r==="%",g,_,m,d;if(r===o||!s||Zv[r]||Zv[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),d=e.getCTM&&nE(e),(p||o==="%")&&(jr[t]||~t.indexOf("adius")))return g=d?e.getBBox()[l?"width":"height"]:e[c],Wt(p?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ms||!_.appendChild)&&(_=ms.body),m=_._gsap,m&&p&&m.width&&l&&m.time===_i.time&&!m.uncache)return Wt(s/m.width*h);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+r,g=e[c],v?e.style[t]=v:Os(e,t)}else(p||o==="%")&&!HL[Si(_,"display")]&&(a.position=Si(e,"position")),_===e&&(a.position="static"),_.appendChild(ho),g=ho[c],_.removeChild(ho),a.position="absolute";return l&&p&&(m=go(_),m.time=_i.time,m.width=_[c]),Wt(f?g*s/h:g&&s?h/g*s:0)},Dr=function(e,t,i,r){var s;return mg||zm(),t in mr&&t!=="transform"&&(t=mr[t],~t.indexOf(",")&&(t=t.split(",")[0])),jr[t]&&t!=="transform"?(s=Uu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ad(Si(e,si))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=od[t]&&od[t](e,t,i)||Si(e,t)||yM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Fs(e,t,s,i)+i:s},VL=function(e,t,i,r){if(!i||i==="none"){var s=il(t,e,1),o=s&&Si(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Si(e,"borderTopColor"))}var a=new ri(this._pt,e.style,t,0,1,qM),l=0,u=0,c,h,f,p,g,_,m,d,v,x,y,C;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Si(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Si(e,t)||r,_?e.style[t]=_:Os(e,t)),c=[i,r],zM(c),i=c[0],r=c[1],f=i.match(Sa)||[],C=r.match(Sa)||[],C.length){for(;h=Sa.exec(r);)m=h[0],v=r.substring(l,h.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=f[u++]||"")&&(p=parseFloat(_)||0,y=_.substr((p+"").length),m.charAt(1)==="="&&(m=Ia(p,m)+y),d=parseFloat(m),x=m.substr((d+"").length),l=Sa.lastIndex-x.length,x||(x=x||Ei.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=Fs(e,t,_,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:d-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?ZM:KM;return mM.test(r)&&(a.e=0),this._pt=a,a},Qv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},GL=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Qv[i]||i,t[1]=Qv[r]||r,t.join(" ")},WL=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],jr[a]&&(l=1,a=a==="transformOrigin"?si:zt),Os(i,a);l&&(Os(i,zt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Uu(i,1),o.uncache=1,QM(r)))}},od={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ri(e._pt,t,i,0,0,WL);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Iu=[1,0,0,1,0,0],iE={},rE=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Jv=function(e){var t=Si(e,zt);return rE(t)?Iu:t.substr(7).match(pM).map(Wt)},vg=function(e,t){var i=e._gsap||go(e),r=e.style,s=Jv(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Iu:s):(s===Iu&&!e.offsetParent&&e!==Ua&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Ua.appendChild(e)),s=Jv(e),l?r.display=l:Os(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ua.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Bm=function(e,t,i,r,s,o){var a=e._gsap,l=s||vg(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,C=parseFloat(x[1])||0,w,M,R,E;i?l!==Iu&&(M=p*m-g*_)&&(R=y*(m/M)+C*(-_/M)+(_*v-m*d)/M,E=y*(-g/M)+C*(p/M)-(p*v-g*d)/M,y=R,C=E):(w=tE(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),C=w.y+(~(x[1]||x[0]).indexOf("%")?C/100*w.height:C)),r||r!==!1&&a.smooth?(d=y-u,v=C-c,a.xOffset=h+(d*p+v*_)-d,a.yOffset=f+(d*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[si]="0px 0px",o&&(_s(o,a,"xOrigin",u,y),_s(o,a,"yOrigin",c,C),_s(o,a,"xOffset",h,a.xOffset),_s(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+C)},Uu=function(e,t){var i=e._gsap||new HM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Si(e,si)||"0",c,h,f,p,g,_,m,d,v,x,y,C,w,M,R,E,S,D,U,k,X,j,W,B,I,$,P,ie,Me,Ge,q,ne;return c=h=f=_=m=d=v=x=y=0,p=g=1,i.svg=!!(e.getCTM&&nE(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[zt]!=="none"?l[zt]:"")),r.scale=r.rotate=r.translate="none"),M=vg(e,i.svg),i.svg&&(i.uncache?(I=e.getBBox(),u=i.xOrigin-I.x+"px "+(i.yOrigin-I.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),Bm(e,B||u,!!B||i.originIsAbsolute,i.smooth!==!1,M)),C=i.xOrigin||0,w=i.yOrigin||0,M!==Iu&&(D=M[0],U=M[1],k=M[2],X=M[3],c=j=M[4],h=W=M[5],M.length===6?(p=Math.sqrt(D*D+U*U),g=Math.sqrt(X*X+k*k),_=D||U?na(U,D)*no:0,v=k||X?na(k,X)*no+_:0,v&&(g*=Math.abs(Math.cos(v*Na))),i.svg&&(c-=C-(C*D+w*k),h-=w-(C*U+w*X))):(ne=M[6],Ge=M[7],P=M[8],ie=M[9],Me=M[10],q=M[11],c=M[12],h=M[13],f=M[14],R=na(ne,Me),m=R*no,R&&(E=Math.cos(-R),S=Math.sin(-R),B=j*E+P*S,I=W*E+ie*S,$=ne*E+Me*S,P=j*-S+P*E,ie=W*-S+ie*E,Me=ne*-S+Me*E,q=Ge*-S+q*E,j=B,W=I,ne=$),R=na(-k,Me),d=R*no,R&&(E=Math.cos(-R),S=Math.sin(-R),B=D*E-P*S,I=U*E-ie*S,$=k*E-Me*S,q=X*S+q*E,D=B,U=I,k=$),R=na(U,D),_=R*no,R&&(E=Math.cos(R),S=Math.sin(R),B=D*E+U*S,I=j*E+W*S,U=U*E-D*S,W=W*E-j*S,D=B,j=I),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=Wt(Math.sqrt(D*D+U*U+k*k)),g=Wt(Math.sqrt(W*W+ne*ne)),R=na(j,W),v=Math.abs(R)>2e-4?R*no:0,y=q?1/(q<0?-q:q):0),i.svg&&(B=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!rE(Si(e,zt)),B&&e.setAttribute("transform",B))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Wt(p),i.scaleY=Wt(g),i.rotation=Wt(_)+a,i.rotationX=Wt(m)+a,i.rotationY=Wt(d)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[si]=ad(u)),i.xOffset=i.yOffset=0,i.force3D=Ei.force3D,i.renderTransform=i.svg?YL:eE?sE:XL,i.uncache=0,i},ad=function(e){return(e=e.split(" "))[0]+" "+e[1]},qh=function(e,t,i){var r=Pn(t);return Wt(parseFloat(t)+parseFloat(Fs(e,"x",i+"px",r)))+r},XL=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,sE(e,t)},Ks="0deg",wl="0px",Zs=") ",sE=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,h=i.rotationX,f=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,d=i.force3D,v=i.target,x=i.zOrigin,y="",C=d==="auto"&&e&&e!==1||d===!0;if(x&&(h!==Ks||c!==Ks)){var w=parseFloat(c)*Na,M=Math.sin(w),R=Math.cos(w),E;w=parseFloat(h)*Na,E=Math.cos(w),o=qh(v,o,M*E*-x),a=qh(v,a,-Math.sin(w)*-x),l=qh(v,l,R*E*-x+x)}m!==wl&&(y+="perspective("+m+Zs),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(C||o!==wl||a!==wl||l!==wl)&&(y+=l!==wl||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Zs),u!==Ks&&(y+="rotate("+u+Zs),c!==Ks&&(y+="rotateY("+c+Zs),h!==Ks&&(y+="rotateX("+h+Zs),(f!==Ks||p!==Ks)&&(y+="skew("+f+", "+p+Zs),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Zs),v.style[zt]=y||"translate(0, 0)"},YL=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,h=i.scaleX,f=i.scaleY,p=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,d=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),C,w,M,R,E;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Na,u*=Na,C=Math.cos(l)*h,w=Math.sin(l)*h,M=Math.sin(l-u)*-f,R=Math.cos(l-u)*f,u&&(c*=Na,E=Math.tan(u-c),E=Math.sqrt(1+E*E),M*=E,R*=E,c&&(E=Math.tan(c),E=Math.sqrt(1+E*E),C*=E,w*=E)),C=Wt(C),w=Wt(w),M=Wt(M),R=Wt(R)):(C=h,R=f,w=M=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Fs(p,"x",o,"px"),y=Fs(p,"y",a,"px")),(g||_||m||d)&&(x=Wt(x+g-(g*C+_*M)+m),y=Wt(y+_-(g*w+_*R)+d)),(r||s)&&(E=p.getBBox(),x=Wt(x+r/100*E.width),y=Wt(y+s/100*E.height)),E="matrix("+C+","+w+","+M+","+R+","+x+","+y+")",p.setAttribute("transform",E),v&&(p.style[zt]=E)},qL=function(e,t,i,r,s){var o=360,a=mn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?no:1),u=l-r,c=r+u+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),h==="cw"&&u<0?u=(u+o*qv)%o-~~(u/o)*o:h==="ccw"&&u>0&&(u=(u-o*qv)%o-~~(u/o)*o)),e._pt=f=new ri(e._pt,t,i,r,u,PL),f.e=c,f.u="deg",e._props.push(i),f},ex=function(e,t){for(var i in t)e[i]=t[i];return e},$L=function(e,t,i){var r=ex({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,h,f,p,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[zt]=t,a=Uu(i,1),Os(i,zt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[zt],o[zt]=t,a=Uu(i,1),o[zt]=u);for(l in jr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Pn(u),g=Pn(c),h=p!==g?Fs(i,l,u,g):parseFloat(u),f=parseFloat(c),e._pt=new ri(e._pt,a,l,h,f-h,Fm),e._pt.u=g||0,e._props.push(l));ex(a,r)};ii("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});od[e>1?"border"+n:n]=function(a,l,u,c,h){var f,p;if(arguments.length<4)return f=o.map(function(g){return Dr(a,g,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},o.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,p,h)}});var oE={name:"css",register:zm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,h,f,p,g,_,m,d,v,x,y,C,w,M,R,E;mg||zm(),this.styles=this.styles||JM(e),R=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(pi[_]&&VM(_,t,i,r,e,s)))){if(p=typeof c,g=od[_],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=bu(c)),g)g(this,e,_,c,i)&&(M=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",bs.lastIndex=0,bs.test(u)||(m=Pn(u),d=Pn(c),d?m!==d&&(u=Fs(e,_,u,d)+d):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],mn(u)&&~u.indexOf("random(")&&(u=bu(u)),Pn(u+"")||u==="auto"||(u+=Ei.units[_]||Pn(Dr(e,_))||""),(u+"").charAt(1)==="="&&(u=Dr(e,_))):u=Dr(e,_),f=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),h=parseFloat(c),_ in mr&&(_==="autoAlpha"&&(f===1&&Dr(e,"visibility")==="hidden"&&h&&(f=0),R.push("visibility",0,a.visibility),_s(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=mr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in jr,x){if(this.styles.save(_),E=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Si(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=c,c=Si(e,"perspective"),S?e.style.perspective=S:Os(e,"perspective")}h=parseFloat(c)}if(y||(C=e._gsap,C.renderTransform&&!t.parseTransform||Uu(e,t.parseTransform),w=t.smoothOrigin!==!1&&C.smooth,y=this._pt=new ri(this._pt,a,zt,0,1,C.renderTransform,C,0,-1),y.dep=1),_==="scale")this._pt=new ri(this._pt,C,"scaleY",C.scaleY,(v?Ia(C.scaleY,v+h):h)-C.scaleY||0,Fm),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(si,0,a[si]),c=GL(c),C.svg?Bm(e,c,0,w,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==C.zOrigin&&_s(this,C,"zOrigin",C.zOrigin,d),_s(this,a,_,ad(u),ad(c)));continue}else if(_==="svgOrigin"){Bm(e,c,1,w,0,this);continue}else if(_ in iE){qL(this,C,_,f,v?Ia(f,v+c):c);continue}else if(_==="smoothOrigin"){_s(this,C,"smooth",C.smooth,c);continue}else if(_==="force3D"){C[_]=c;continue}else if(_==="transform"){$L(this,c,e);continue}}else _ in a||(_=il(_)||_);if(x||(h||h===0)&&(f||f===0)&&!RL.test(c)&&_ in a)m=(u+"").substr((f+"").length),h||(h=0),d=Pn(c)||(_ in Ei.units?Ei.units[_]:m),m!==d&&(f=Fs(e,_,u,d)),this._pt=new ri(this._pt,x?C:a,_,f,(v?Ia(f,v+h):h)-f,!x&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?DL:Fm),this._pt.u=d||0,x&&E!==c?(this._pt.b=u,this._pt.e=E,this._pt.r=LL):m!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=bL);else if(_ in a)VL.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){sg(_,c);continue}x||(_ in a?R.push(_,0,a[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,u||e[_])),o.push(_)}}M&&$M(this)},render:function(e,t){if(t.tween._time||!_g())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Dr,aliases:mr,getSetter:function(e,t,i){var r=mr[t];return r&&r.indexOf(",")<0&&(t=r),t in jr&&t!==si&&(e._gsap.x||Dr(e,"x"))?i&&Yv===i?t==="scale"?OL:NL:(Yv=i||{})&&(t==="scale"?FL:kL):e.style&&!ng(e.style[t])?IL:~t.indexOf("-")?UL:hg(e,t)},core:{_removeProperty:Os,_getMatrix:vg}};oi.utils.checkPrefix=il;oi.core.getStyleSaver=JM;(function(n,e,t,i){var r=ii(n+","+e+","+t,function(s){jr[s]=1});ii(e,function(s){Ei.units[s]="deg",iE[s]=1}),mr[r[13]]=n+","+e,ii(i,function(s){var o=s.split(":");mr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ii("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ei.units[n]="px"});oi.registerPlugin(oE);var aE=oi.registerPlugin(oE)||oi;aE.core.Tween;function jL(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function KL(n,e,t){return e&&jL(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vn,vf,gi,gs,vs,Oa,lE,io,Fa,uE,zr,Ki,cE,fE=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},dE=1,Ea=[],it=[],yr=[],Jl=Date.now,Hm=function(e,t){return t},ZL=function(){var e=Fa.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,it),r.push.apply(r,yr),it=i,yr=r,Hm=function(o,a){return t[o](a)}},Ls=function(e,t){return~yr.indexOf(e)&&yr[yr.indexOf(e)+1][t]},eu=function(e){return!!~uE.indexOf(e)},Nn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Un=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},kc="scrollLeft",zc="scrollTop",Vm=function(){return zr&&zr.isPressed||it.cache++},ld=function(e,t){var i=function r(s){if(s||s===0){dE&&(gi.history.scrollRestoration="manual");var o=zr&&zr.isPressed;s=r.v=Math.round(s)||(zr&&zr.iOS?1:0),e(s),r.cacheID=it.cache,o&&Hm("ss",s)}else(t||it.cache!==r.cacheID||Hm("ref"))&&(r.cacheID=it.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Hn={s:kc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ld(function(n){return arguments.length?gi.scrollTo(n,rn.sc()):gi.pageXOffset||gs[kc]||vs[kc]||Oa[kc]||0})},rn={s:zc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Hn,sc:ld(function(n){return arguments.length?gi.scrollTo(Hn.sc(),n):gi.pageYOffset||gs[zc]||vs[zc]||Oa[zc]||0})},Yn=function(e,t){return(t&&t._ctx&&t._ctx.selector||vn.utils.toArray)(e)[0]||(typeof e=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},QL=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},ks=function(e,t){var i=t.s,r=t.sc;eu(e)&&(e=gs.scrollingElement||vs);var s=it.indexOf(e),o=r===rn.sc?1:2;!~s&&(s=it.push(e)-1),it[s+o]||Nn(e,"scroll",Vm);var a=it[s+o],l=a||(it[s+o]=ld(Ls(e,i),!0)||(eu(e)?r:ld(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=vn.getProperty(e,"scrollBehavior")==="smooth"),l},Gm=function(e,t,i){var r=e,s=e,o=Jl(),a=o,l=t||50,u=Math.max(500,l*3),c=function(g,_){var m=Jl();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},h=function(){s=r=i?0:r,a=o=0},f=function(g){var _=a,m=s,d=Jl();return(g||g===0)&&g!==r&&c(g),o===a||d-a>u?0:(r+(i?m:-m))/((i?d:o)-_)*1e3};return{update:c,reset:h,getVelocity:f}},Al=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},tx=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},hE=function(){Fa=vn.core.globals().ScrollTrigger,Fa&&Fa.core&&ZL()},pE=function(e){return vn=e||fE(),!vf&&vn&&typeof document<"u"&&document.body&&(gi=window,gs=document,vs=gs.documentElement,Oa=gs.body,uE=[gi,gs,vs,Oa],vn.utils.clamp,cE=vn.core.context||function(){},io="onpointerenter"in Oa?"pointer":"mouse",lE=Yt.isTouch=gi.matchMedia&&gi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in gi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ki=Yt.eventTypes=("ontouchstart"in vs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in vs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return dE=0},500),vf=1),Fa||hE(),vf};Hn.op=rn;it.cache=0;var Yt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){vf||pE(vn)||console.warn("Please gsap.registerPlugin(Observer)"),Fa||hE();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,h=i.onStop,f=i.onStopDelay,p=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,d=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,C=i.onRight,w=i.onLeft,M=i.onUp,R=i.onDown,E=i.onChangeX,S=i.onChangeY,D=i.onChange,U=i.onToggleX,k=i.onToggleY,X=i.onHover,j=i.onHoverEnd,W=i.onMove,B=i.ignoreCheck,I=i.isNormalizer,$=i.onGestureStart,P=i.onGestureEnd,ie=i.onWheel,Me=i.onEnable,Ge=i.onDisable,q=i.onClick,ne=i.scrollSpeed,de=i.capture,ue=i.allowClicks,Pe=i.lockAxis,Ue=i.onLockAxis;this.target=a=Yn(a)||vs,this.vars=i,p&&(p=vn.utils.toArray(p)),r=r||1e-9,s=s||0,g=g||1,ne=ne||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(gi.getComputedStyle(Oa).lineHeight)||22);var We,Ke,b,he,ge,ye,ae,z=this,Ee=0,be=0,L=i.passive||!c&&i.passive!==!1,T=ks(a,Hn),G=ks(a,rn),ee=T(),J=G(),K=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ki[0]==="pointerdown",De=eu(a),oe=a.ownerDocument||gs,pe=[0,0,0],Te=[0,0,0],re=0,ce=function(){return re=Jl()},ke=function(Oe,ut){return(z.event=Oe)&&p&&QL(Oe.target,p)||ut&&K&&Oe.pointerType!=="touch"||B&&B(Oe,ut)},Ne=function(){z._vx.reset(),z._vy.reset(),Ke.pause(),h&&h(z)},me=function(){var Oe=z.deltaX=tx(pe),ut=z.deltaY=tx(Te),_e=Math.abs(Oe)>=r,qe=Math.abs(ut)>=r;D&&(_e||qe)&&D(z,Oe,ut,pe,Te),_e&&(C&&z.deltaX>0&&C(z),w&&z.deltaX<0&&w(z),E&&E(z),U&&z.deltaX<0!=Ee<0&&U(z),Ee=z.deltaX,pe[0]=pe[1]=pe[2]=0),qe&&(R&&z.deltaY>0&&R(z),M&&z.deltaY<0&&M(z),S&&S(z),k&&z.deltaY<0!=be<0&&k(z),be=z.deltaY,Te[0]=Te[1]=Te[2]=0),(he||b)&&(W&&W(z),b&&(m&&b===1&&m(z),v&&v(z),b=0),he=!1),ye&&!(ye=!1)&&Ue&&Ue(z),ge&&(ie(z),ge=!1),We=0},He=function(Oe,ut,_e){pe[_e]+=Oe,Te[_e]+=ut,z._vx.update(Oe),z._vy.update(ut),u?We||(We=requestAnimationFrame(me)):me()},Ye=function(Oe,ut){Pe&&!ae&&(z.axis=ae=Math.abs(Oe)>Math.abs(ut)?"x":"y",ye=!0),ae!=="y"&&(pe[2]+=Oe,z._vx.update(Oe,!0)),ae!=="x"&&(Te[2]+=ut,z._vy.update(ut,!0)),u?We||(We=requestAnimationFrame(me)):me()},st=function(Oe){if(!ke(Oe,1)){Oe=Al(Oe,c);var ut=Oe.clientX,_e=Oe.clientY,qe=ut-z.x,Be=_e-z.y,$e=z.isDragging;z.x=ut,z.y=_e,($e||(qe||Be)&&(Math.abs(z.startX-ut)>=s||Math.abs(z.startY-_e)>=s))&&(b||(b=$e?2:1),$e||(z.isDragging=!0),Ye(qe,Be))}},O=z.onPress=function(Ve){ke(Ve,1)||Ve&&Ve.button||(z.axis=ae=null,Ke.pause(),z.isPressed=!0,Ve=Al(Ve),Ee=be=0,z.startX=z.x=Ve.clientX,z.startY=z.y=Ve.clientY,z._vx.reset(),z._vy.reset(),Nn(I?a:oe,Ki[1],st,L,!0),z.deltaX=z.deltaY=0,x&&x(z))},Q=z.onRelease=function(Ve){if(!ke(Ve,1)){Un(I?a:oe,Ki[1],st,!0);var Oe=!isNaN(z.y-z.startY),ut=z.isDragging,_e=ut&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),qe=Al(Ve);!_e&&Oe&&(z._vx.reset(),z._vy.reset(),c&&ue&&vn.delayedCall(.08,function(){if(Jl()-re>300&&!Ve.defaultPrevented){if(Ve.target.click)Ve.target.click();else if(oe.createEvent){var Be=oe.createEvent("MouseEvents");Be.initMouseEvent("click",!0,!0,gi,1,qe.screenX,qe.screenY,qe.clientX,qe.clientY,!1,!1,!1,!1,0,null),Ve.target.dispatchEvent(Be)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,h&&ut&&!I&&Ke.restart(!0),b&&me(),d&&ut&&d(z),y&&y(z,_e)}},te=function(Oe){return Oe.touches&&Oe.touches.length>1&&(z.isGesturing=!0)&&$(Oe,z.isDragging)},Z=function(){return(z.isGesturing=!1)||P(z)},se=function(Oe){if(!ke(Oe)){var ut=T(),_e=G();He((ut-ee)*ne,(_e-J)*ne,1),ee=ut,J=_e,h&&Ke.restart(!0)}},Ae=function(Oe){if(!ke(Oe)){Oe=Al(Oe,c),ie&&(ge=!0);var ut=(Oe.deltaMode===1?l:Oe.deltaMode===2?gi.innerHeight:1)*g;He(Oe.deltaX*ut,Oe.deltaY*ut,0),h&&!I&&Ke.restart(!0)}},je=function(Oe){if(!ke(Oe)){var ut=Oe.clientX,_e=Oe.clientY,qe=ut-z.x,Be=_e-z.y;z.x=ut,z.y=_e,he=!0,h&&Ke.restart(!0),(qe||Be)&&Ye(qe,Be)}},vt=function(Oe){z.event=Oe,X(z)},Et=function(Oe){z.event=Oe,j(z)},ot=function(Oe){return ke(Oe)||Al(Oe,c)&&q(z)};Ke=z._dc=vn.delayedCall(f||.25,Ne).pause(),z.deltaX=z.deltaY=0,z._vx=Gm(0,50,!0),z._vy=Gm(0,50,!0),z.scrollX=T,z.scrollY=G,z.isDragging=z.isGesturing=z.isPressed=!1,cE(this),z.enable=function(Ve){return z.isEnabled||(Nn(De?oe:a,"scroll",Vm),o.indexOf("scroll")>=0&&Nn(De?oe:a,"scroll",se,L,de),o.indexOf("wheel")>=0&&Nn(a,"wheel",Ae,L,de),(o.indexOf("touch")>=0&&lE||o.indexOf("pointer")>=0)&&(Nn(a,Ki[0],O,L,de),Nn(oe,Ki[2],Q),Nn(oe,Ki[3],Q),ue&&Nn(a,"click",ce,!0,!0),q&&Nn(a,"click",ot),$&&Nn(oe,"gesturestart",te),P&&Nn(oe,"gestureend",Z),X&&Nn(a,io+"enter",vt),j&&Nn(a,io+"leave",Et),W&&Nn(a,io+"move",je)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=he=b=!1,z._vx.reset(),z._vy.reset(),ee=T(),J=G(),Ve&&Ve.type&&O(Ve),Me&&Me(z)),z},z.disable=function(){z.isEnabled&&(Ea.filter(function(Ve){return Ve!==z&&eu(Ve.target)}).length||Un(De?oe:a,"scroll",Vm),z.isPressed&&(z._vx.reset(),z._vy.reset(),Un(I?a:oe,Ki[1],st,!0)),Un(De?oe:a,"scroll",se,de),Un(a,"wheel",Ae,de),Un(a,Ki[0],O,de),Un(oe,Ki[2],Q),Un(oe,Ki[3],Q),Un(a,"click",ce,!0),Un(a,"click",ot),Un(oe,"gesturestart",te),Un(oe,"gestureend",Z),Un(a,io+"enter",vt),Un(a,io+"leave",Et),Un(a,io+"move",je),z.isEnabled=z.isPressed=z.isDragging=!1,Ge&&Ge(z))},z.kill=z.revert=function(){z.disable();var Ve=Ea.indexOf(z);Ve>=0&&Ea.splice(Ve,1),zr===z&&(zr=0)},Ea.push(z),I&&eu(a)&&(zr=z),z.enable(_)},KL(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Yt.version="3.15.0";Yt.create=function(n){return new Yt(n)};Yt.register=pE;Yt.getAll=function(){return Ea.slice()};Yt.getById=function(n){return Ea.filter(function(e){return e.vars.id===n})[0]};fE()&&vn.registerPlugin(Yt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Le,oa,nt,yt,mi,_t,xg,ud,Nu,tu,Nl,Bc,An,Nd,Wm,zn,nx,ix,aa,mE,$h,_E,Fn,Xm,gE,vE,os,Ym,yg,ka,Sg,nu,qm,jh,Hc=1,Cn=Date.now,Kh=Cn(),Vi=0,Ol=0,rx=function(e,t,i){var r=hi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},sx=function(e,t){return t&&(!hi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},JL=function n(){return Ol&&requestAnimationFrame(n)},ox=function(){return Nd=1},ax=function(){return Nd=0},ur=function(e){return e},Fl=function(e){return Math.round(e*1e5)/1e5||0},xE=function(){return typeof window<"u"},yE=function(){return Le||xE()&&(Le=window.gsap)&&Le.registerPlugin&&Le},Lo=function(e){return!!~xg.indexOf(e)},SE=function(e){return(e==="Height"?Sg:nt["inner"+e])||mi["client"+e]||_t["client"+e]},ME=function(e){return Ls(e,"getBoundingClientRect")||(Lo(e)?function(){return Ef.width=nt.innerWidth,Ef.height=Sg,Ef}:function(){return Ur(e)})},eD=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Ls(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?SE(s):e["client"+s])||0}},tD=function(e,t){return!t||~yr.indexOf(e)?ME(e):function(){return Ef}},_r=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Ls(e,i))?o()-ME(e)()[s]:Lo(e)?(mi[i]||_t[i])-SE(r):e[i]-e["offset"+r])},Vc=function(e,t){for(var i=0;i<aa.length;i+=3)(!t||~t.indexOf(aa[i+1]))&&e(aa[i],aa[i+1],aa[i+2])},hi=function(e){return typeof e=="string"},bn=function(e){return typeof e=="function"},kl=function(e){return typeof e=="number"},ro=function(e){return typeof e=="object"},Cl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},ia=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},ra=Math.abs,EE="left",TE="top",Mg="right",Eg="bottom",So="width",Mo="height",iu="Right",ru="Left",su="Top",ou="Bottom",jt="padding",Ni="margin",rl="Width",Tg="Height",tn="px",Oi=function(e){return nt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},nD=function(e){var t=Oi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},lx=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Ur=function(e,t){var i=t&&Oi(e)[Wm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},cd=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},wE=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},iD=function(e){return function(t){return Le.utils.snap(wE(e),t)}},wg=function(e){var t=Le.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},rD=function(e){return function(t,i){return wg(wE(e))(t,i.direction)}},Gc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},fn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},cn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Wc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},ux={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Xc={toggleActions:"play",anticipatePin:0},fd={top:0,left:0,center:.5,bottom:1,right:1},xf=function(e,t){if(hi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in fd?fd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Yc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,h=s.fontSize,f=s.indent,p=s.fontWeight,g=yt.createElement("div"),_=Lo(i)||Ls(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,d=_?_t:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,x=v?u:c,y="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(r===rn?Mg:Eg)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,d.children[0]?d.insertBefore(g,d.children[0]):d.appendChild(g),g._offset=g["offset"+r.op.d2],yf(g,0,r,v),g},yf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+rl]=1,s["border"+a+rl]=0,s[i.p]=t+"px",Le.set(e,s)},Je=[],$m={},Ou,cx=function(){return Cn()-Vi>34&&(Ou||(Ou=requestAnimationFrame(Hr)))},sa=function(){(!Fn||!Fn.isPressed||Fn.startX>_t.clientWidth)&&(it.cache++,Fn?Ou||(Ou=requestAnimationFrame(Hr)):Hr(),Vi||Io("scrollStart"),Vi=Cn())},Zh=function(){vE=nt.innerWidth,gE=nt.innerHeight},zl=function(e){it.cache++,(e===!0||!An&&!_E&&!yt.fullscreenElement&&!yt.webkitFullscreenElement&&(!Xm||vE!==nt.innerWidth||Math.abs(nt.innerHeight-gE)>nt.innerHeight*.25))&&ud.restart(!0)},Do={},sD=[],AE=function n(){return cn(et,"scrollEnd",n)||po(!0)},Io=function(e){return Do[e]&&Do[e].map(function(t){return t()})||sD},fi=[],CE=function(e){for(var t=0;t<fi.length;t+=5)(!e||fi[t+4]&&fi[t+4].query===e)&&(fi[t].style.cssText=fi[t+1],fi[t].getBBox&&fi[t].setAttribute("transform",fi[t+2]||""),fi[t+3].uncache=1)},RE=function(){return it.forEach(function(e){return bn(e)&&++e.cacheID&&(e.rec=e())})},Ag=function(e,t){var i;for(zn=0;zn<Je.length;zn++)i=Je[zn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));nu=!0,t&&CE(t),t||Io("revert")},PE=function(e,t){it.cache++,(t||!Bn)&&it.forEach(function(i){return bn(i)&&i.cacheID++&&(i.rec=0)}),hi(e)&&(nt.history.scrollRestoration=yg=e)},Bn,Eo=0,fx,oD=function(){if(fx!==Eo){var e=fx=Eo;requestAnimationFrame(function(){return e===Eo&&po(!0)})}},bE=function(){_t.appendChild(ka),Sg=!Fn&&ka.offsetHeight||nt.innerHeight,_t.removeChild(ka)},dx=function(e){return Nu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},po=function(e,t){if(mi=yt.documentElement,_t=yt.body,xg=[nt,yt,mi,_t],Vi&&!e&&!nu){fn(et,"scrollEnd",AE);return}bE(),Bn=et.isRefreshing=!0,nu||RE();var i=Io("refreshInit");mE&&et.sort(),t||Ag(),it.forEach(function(r){bn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Je.slice(0).forEach(function(r){return r.refresh()}),nu=!1,Je.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),qm=1,dx(!0),Je.forEach(function(r){var s=_r(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),dx(!1),qm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),it.forEach(function(r){bn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),PE(yg,1),ud.pause(),Eo++,Bn=2,Hr(2),Je.forEach(function(r){return bn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Bn=et.isRefreshing=!1,Io("refresh")},jm=0,Sf=1,au,Hr=function(e){if(e===2||!Bn&&!nu){et.isUpdating=!0,au&&au.update(0);var t=Je.length,i=Cn(),r=i-Kh>=50,s=t&&Je[0].scroll();if(Sf=jm>s?-1:1,Bn||(jm=s),r&&(Vi&&!Nd&&i-Vi>200&&(Vi=0,Io("scrollEnd")),Nl=Kh,Kh=i),Sf<0){for(zn=t;zn-- >0;)Je[zn]&&Je[zn].update(0,r);Sf=1}else for(zn=0;zn<t;zn++)Je[zn]&&Je[zn].update(0,r);et.isUpdating=!1}Ou=0},Km=[EE,TE,Eg,Mg,Ni+ou,Ni+iu,Ni+su,Ni+ru,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Mf=Km.concat([So,Mo,"boxSizing","max"+rl,"max"+Tg,"position",Ni,jt,jt+su,jt+iu,jt+ou,jt+ru]),aD=function(e,t,i){za(i);var r=e._gsap;if(r.spacerIsNative)za(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Qh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Km.length,o=t.style,a=e.style,l;s--;)l=Km[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Eg]=a[Mg]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[So]=cd(e,Hn)+tn,o[Mo]=cd(e,rn)+tn,o[jt]=a[Ni]=a[TE]=a[EE]="0",za(r),a[So]=a["max"+rl]=i[So],a[Mo]=a["max"+Tg]=i[Mo],a[jt]=i[jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},lD=/([A-Z])/g,za=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Le.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(lD,"-$1").toLowerCase())}},qc=function(e){for(var t=Mf.length,i=e.style,r=[],s=0;s<t;s++)r.push(Mf[s],i[Mf[s]]);return r.t=e,r},uD=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Ef={left:0,top:0},hx=function(e,t,i,r,s,o,a,l,u,c,h,f,p,g){bn(e)&&(e=e(l)),hi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?xf("0"+e.substr(3),i):0));var _=p?p.time():0,m,d,v;if(p&&p.seek(0),isNaN(e)||(e=+e),kl(e))p&&(e=Le.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&yf(a,i,r,!0);else{bn(t)&&(t=t(l));var x=(e||"0").split(" "),y,C,w,M;v=Yn(t,l)||_t,y=Ur(v)||{},(!y||!y.left&&!y.top)&&Oi(v).display==="none"&&(M=v.style.display,v.style.display="block",y=Ur(v),M?v.style.display=M:v.style.removeProperty("display")),C=xf(x[0],y[r.d]),w=xf(x[1]||"0",i),e=y[r.p]-u[r.p]-c+C+s-w,a&&yf(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var R=e+i,E=o._isStart;m="scroll"+r.d2,yf(o,R,r,E&&R>20||!E&&(h?Math.max(_t[m],mi[m]):o.parentNode[m])<=R+1),h&&(u=Ur(a),h&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+tn))}return p&&v&&(m=Ur(v),p.seek(f),d=Ur(v),p._caScrollDist=m[r.p]-d[r.p],e=e/p._caScrollDist*f),p&&p.seek(_),p?e:Math.round(e)},cD=/(webkit|moz|length|cssText|inset)/i,px=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===_t){e._stOrig=s.cssText,a=Oi(e);for(o in a)!+o&&!cD.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Le.core.getCache(e).uncache=1,t.appendChild(e)}},LE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},$c=function(e,t,i){var r={};r[t.p]="+="+i,Le.set(e,r)},mx=function(e,t){var i=ks(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,h){var f=o.tween,p=l.onComplete,g={};u=u||i();var _=LE(i,u,function(){f.kill(),o.tween=0});return h=c&&h||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(u+c*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){it.cache++,o.tween&&Hr()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=Le.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},fn(e,"wheel",i.wheelHandler),et.isTouch&&fn(e,"touchmove",i.wheelHandler),s},et=function(){function n(t,i){oa||n.register(Le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ym(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ol){this.update=this.refresh=this.kill=ur;return}i=lx(hi(i)||kl(i)||i.nodeType?{trigger:i}:i,Xc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,h=s.scrub,f=s.trigger,p=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,d=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,C=s.pinReparent,w=s.pinSpacer,M=s.containerAnimation,R=s.fastScrollEnd,E=s.preventOverlaps,S=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Hn:rn,D=!h&&h!==0,U=Yn(i.scroller||nt),k=Le.core.getCache(U),X=Lo(U),j=("pinType"in i?i.pinType:Ls(U,"pinType")||X&&"fixed")==="fixed",W=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],B=D&&i.toggleActions.split(" "),I="markers"in i?i.markers:Xc.markers,$=X?0:parseFloat(Oi(U)["border"+S.p2+rl])||0,P=this,ie=i.onRefreshInit&&function(){return i.onRefreshInit(P)},Me=eD(U,X,S),Ge=tD(U,X),q=0,ne=0,de=0,ue=ks(U,S),Pe,Ue,We,Ke,b,he,ge,ye,ae,z,Ee,be,L,T,G,ee,J,K,De,oe,pe,Te,re,ce,ke,Ne,me,He,Ye,st,O,Q,te,Z,se,Ae,je,vt,Et;if(P._startClamp=P._endClamp=!1,P._dir=S,m*=45,P.scroller=U,P.scroll=M?M.time.bind(M):ue,Ke=ue(),P.vars=i,r=r||i.animation,"refreshPriority"in i&&(mE=1,i.refreshPriority===-9999&&(au=P)),k.tweenScroll=k.tweenScroll||{top:mx(U,rn),left:mx(U,Hn)},P.tweenTo=Pe=k.tweenScroll[S.p],P.scrubDuration=function(_e){te=kl(_e)&&_e,te?Q?Q.duration(_e):Q=Le.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:te,paused:!0,onComplete:function(){return d&&d(P)}}):(Q&&Q.progress(1).kill(),Q=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(h),st=0,l||(l=r.vars.id)),y&&((!ro(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in _t.style&&Le.set(X?[_t,mi]:U,{scrollBehavior:"auto"}),it.forEach(function(_e){return bn(_e)&&_e.target===(X?yt.scrollingElement||mi:U)&&(_e.smooth=!1)}),We=bn(y.snapTo)?y.snapTo:y.snapTo==="labels"?iD(r):y.snapTo==="labelsDirectional"?rD(r):y.directional!==!1?function(_e,qe){return wg(y.snapTo)(_e,Cn()-ne<500?0:qe.direction)}:Le.utils.snap(y.snapTo),Z=y.duration||{min:.1,max:2},Z=ro(Z)?tu(Z.min,Z.max):tu(Z,Z),se=Le.delayedCall(y.delay||te/2||.1,function(){var _e=ue(),qe=Cn()-ne<500,Be=Pe.tween;if((qe||Math.abs(P.getVelocity())<10)&&!Be&&!Nd&&q!==_e){var $e=(_e-he)/T,Nt=r&&!D?r.totalProgress():$e,tt=qe?0:(Nt-O)/(Cn()-Nl)*1e3||0,At=Le.utils.clamp(-$e,1-$e,ra(tt/2)*tt/.185),Jt=$e+(y.inertia===!1?0:At),Pt,Ct,xt=y,ai=xt.onStart,A=xt.onInterrupt,N=xt.onComplete;if(Pt=We(Jt,P),kl(Pt)||(Pt=Jt),Ct=Math.max(0,Math.round(he+Pt*T)),_e<=ge&&_e>=he&&Ct!==_e){if(Be&&!Be._initted&&Be.data<=ra(Ct-_e))return;y.inertia===!1&&(At=Pt-$e),Pe(Ct,{duration:Z(ra(Math.max(ra(Jt-Nt),ra(Pt-Nt))*.185/tt/.05||0)),ease:y.ease||"power3",data:ra(Ct-_e),onInterrupt:function(){return se.restart(!0)&&A&&ia(P,A)},onComplete:function(){P.update(),q=ue(),r&&!D&&(Q?Q.resetTo("totalProgress",Pt,r._tTime/r._tDur):r.progress(Pt)),st=O=r&&!D?r.totalProgress():P.progress,v&&v(P),N&&ia(P,N)}},_e,At*T,Ct-_e-At*T),ai&&ia(P,ai,Pe.tween)}}else P.isActive&&q!==_e&&se.restart(!0)}).pause()),l&&($m[l]=P),f=P.trigger=Yn(f||p!==!0&&p),Et=f&&f._gsap&&f._gsap.stRevert,Et&&(Et=Et(P)),p=p===!0?f:Yn(p),hi(a)&&(a={targets:f,className:a}),p&&(g===!1||g===Ni||(g=!g&&p.parentNode&&p.parentNode.style&&Oi(p.parentNode).display==="flex"?!1:jt),P.pin=p,Ue=Le.core.getCache(p),Ue.spacer?G=Ue.pinState:(w&&(w=Yn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ue.spacerIsNative=!!w,w&&(Ue.spacerState=qc(w))),Ue.spacer=K=w||yt.createElement("div"),K.classList.add("pin-spacer"),l&&K.classList.add("pin-spacer-"+l),Ue.pinState=G=qc(p)),i.force3D!==!1&&Le.set(p,{force3D:!0}),P.spacer=K=Ue.spacer,Ye=Oi(p),ce=Ye[g+S.os2],oe=Le.getProperty(p),pe=Le.quickSetter(p,S.a,tn),Qh(p,K,Ye),J=qc(p)),I){be=ro(I)?lx(I,ux):ux,z=Yc("scroller-start",l,U,S,be,0),Ee=Yc("scroller-end",l,U,S,be,0,z),De=z["offset"+S.op.d2];var ot=Yn(Ls(U,"content")||U);ye=this.markerStart=Yc("start",l,ot,S,be,De,0,M),ae=this.markerEnd=Yc("end",l,ot,S,be,De,0,M),M&&(vt=Le.quickSetter([ye,ae],S.a,tn)),!j&&!(yr.length&&Ls(U,"fixedMarkers")===!0)&&(nD(X?_t:U),Le.set([z,Ee],{force3D:!0}),Ne=Le.quickSetter(z,S.a,tn),He=Le.quickSetter(Ee,S.a,tn))}if(M){var Ve=M.vars.onUpdate,Oe=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){P.update(0,0,1),Ve&&Ve.apply(M,Oe||[])})}if(P.previous=function(){return Je[Je.indexOf(P)-1]},P.next=function(){return Je[Je.indexOf(P)+1]},P.revert=function(_e,qe){if(!qe)return P.kill(!0);var Be=_e!==!1||!P.enabled,$e=An;Be!==P.isReverted&&(Be&&(Ae=Math.max(ue(),P.scroll.rec||0),de=P.progress,je=r&&r.progress()),ye&&[ye,ae,z,Ee].forEach(function(Nt){return Nt.style.display=Be?"none":"block"}),Be&&(An=P,P.update(Be)),p&&(!C||!P.isActive)&&(Be?aD(p,K,G):Qh(p,K,Oi(p),ke)),Be||P.update(Be),An=$e,P.isReverted=Be)},P.refresh=function(_e,qe,Be,$e){if(!((An||!P.enabled)&&!qe)){if(p&&_e&&Vi){fn(n,"scrollEnd",AE);return}!Bn&&ie&&ie(P),An=P,Pe.tween&&!Be&&(Pe.tween.kill(),Pe.tween=0),Q&&Q.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Ie){return Ie.vars.immediateRender&&Ie.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Nt=Me(),tt=Ge(),At=M?M.duration():_r(U,S),Jt=T<=.01||!T,Pt=0,Ct=$e||0,xt=ro(Be)?Be.end:i.end,ai=i.endTrigger||f,A=ro(Be)?Be.start:i.start||(i.start===0||!f?0:p?"0 0":"0 100%"),N=P.pinnedContainer=i.pinnedContainer&&Yn(i.pinnedContainer,P),V=f&&Math.max(0,Je.indexOf(P))||0,H=V,F,le,xe,Ce,ve,we,ze,Fe,ct,Mt,ft,en,at;for(I&&ro(Be)&&(en=Le.getProperty(z,S.p),at=Le.getProperty(Ee,S.p));H-- >0;)we=Je[H],we.end||we.refresh(0,1)||(An=P),ze=we.pin,ze&&(ze===f||ze===p||ze===N)&&!we.isReverted&&(Mt||(Mt=[]),Mt.unshift(we),we.revert(!0,!0)),we!==Je[H]&&(V--,H--);for(bn(A)&&(A=A(P)),A=rx(A,"start",P),he=hx(A,f,Nt,S,ue(),ye,z,P,tt,$,j,At,M,P._startClamp&&"_startClamp")||(p?-.001:0),bn(xt)&&(xt=xt(P)),hi(xt)&&!xt.indexOf("+=")&&(~xt.indexOf(" ")?xt=(hi(A)?A.split(" ")[0]:"")+xt:(Pt=xf(xt.substr(2),Nt),xt=hi(A)?A:(M?Le.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,he):he)+Pt,ai=f)),xt=rx(xt,"end",P),ge=Math.max(he,hx(xt||(ai?"100% 0":At),ai,Nt,S,ue()+Pt,ae,Ee,P,tt,$,j,At,M,P._endClamp&&"_endClamp"))||-.001,Pt=0,H=V;H--;)we=Je[H]||{},ze=we.pin,ze&&we.start-we._pinPush<=he&&!M&&we.end>0&&(F=we.end-(P._startClamp?Math.max(0,we.start):we.start),(ze===f&&we.start-we._pinPush<he||ze===N)&&isNaN(A)&&(Pt+=F*(1-we.progress)),ze===p&&(Ct+=F));if(he+=Pt,ge+=Pt,P._startClamp&&(P._startClamp+=Pt),P._endClamp&&!Bn&&(P._endClamp=ge||-.001,ge=Math.min(ge,_r(U,S))),T=ge-he||(he-=.01)&&.001,Jt&&(de=Le.utils.clamp(0,1,Le.utils.normalize(he,ge,Ae))),P._pinPush=Ct,ye&&Pt&&(F={},F[S.a]="+="+Pt,N&&(F[S.p]="-="+ue()),Le.set([ye,ae],F)),p&&!(qm&&P.end>=_r(U,S)))F=Oi(p),Ce=S===rn,xe=ue(),Te=parseFloat(oe(S.a))+Ct,!At&&ge>1&&(ft=(X?yt.scrollingElement||mi:U).style,ft={style:ft,value:ft["overflow"+S.a.toUpperCase()]},X&&Oi(_t)["overflow"+S.a.toUpperCase()]!=="scroll"&&(ft.style["overflow"+S.a.toUpperCase()]="scroll")),Qh(p,K,F),J=qc(p),le=Ur(p,!0),Fe=j&&ks(U,Ce?Hn:rn)(),g?(ke=[g+S.os2,T+Ct+tn],ke.t=K,H=g===jt?cd(p,S)+T+Ct:0,H&&(ke.push(S.d,H+tn),K.style.flexBasis!=="auto"&&(K.style.flexBasis=H+tn)),za(ke),N&&Je.forEach(function(Ie){Ie.pin===N&&Ie.vars.pinSpacing!==!1&&(Ie._subPinOffset=!0)}),j&&ue(Ae)):(H=cd(p,S),H&&K.style.flexBasis!=="auto"&&(K.style.flexBasis=H+tn)),j&&(ve={top:le.top+(Ce?xe-he:Fe)+tn,left:le.left+(Ce?Fe:xe-he)+tn,boxSizing:"border-box",position:"fixed"},ve[So]=ve["max"+rl]=Math.ceil(le.width)+tn,ve[Mo]=ve["max"+Tg]=Math.ceil(le.height)+tn,ve[Ni]=ve[Ni+su]=ve[Ni+iu]=ve[Ni+ou]=ve[Ni+ru]="0",ve[jt]=F[jt],ve[jt+su]=F[jt+su],ve[jt+iu]=F[jt+iu],ve[jt+ou]=F[jt+ou],ve[jt+ru]=F[jt+ru],ee=uD(G,ve,C),Bn&&ue(0)),r?(ct=r._initted,$h(1),r.render(r.duration(),!0,!0),re=oe(S.a)-Te+T+Ct,me=Math.abs(T-re)>1,j&&me&&ee.splice(ee.length-2,2),r.render(0,!0,!0),ct||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),$h(0)):re=T,ft&&(ft.value?ft.style["overflow"+S.a.toUpperCase()]=ft.value:ft.style.removeProperty("overflow-"+S.a));else if(f&&ue()&&!M)for(le=f.parentNode;le&&le!==_t;)le._pinOffset&&(he-=le._pinOffset,ge-=le._pinOffset),le=le.parentNode;Mt&&Mt.forEach(function(Ie){return Ie.revert(!1,!0)}),P.start=he,P.end=ge,Ke=b=Bn?Ae:ue(),!M&&!Bn&&(Ke<Ae&&ue(Ae),P.scroll.rec=0),P.revert(!1,!0),ne=Cn(),se&&(q=-1,se.restart(!0)),An=0,r&&D&&(r._initted||je)&&r.progress()!==je&&r.progress(je||0,!0).render(r.time(),!0,!0),(Jt||de!==P.progress||M||_||r&&!r._initted)&&(r&&!D&&(r._initted||de||r.vars.immediateRender!==!1)&&r.totalProgress(M&&he<-.001&&!de?Le.utils.normalize(he,ge,0):de,!0),P.progress=Jt||(Ke-he)/T===de?0:de),p&&g&&(K._pinOffset=Math.round(P.progress*re)),Q&&Q.invalidate(),isNaN(en)||(en-=Le.getProperty(z,S.p),at-=Le.getProperty(Ee,S.p),$c(z,S,en),$c(ye,S,en-($e||0)),$c(Ee,S,at),$c(ae,S,at-($e||0))),Jt&&!Bn&&P.update(),c&&!Bn&&!L&&(L=!0,c(P),L=!1)}},P.getVelocity=function(){return(ue()-b)/(Cn()-Nl)*1e3||0},P.endAnimation=function(){Cl(P.callbackAnimation),r&&(Q?Q.progress(1):r.paused()?D||Cl(r,P.direction<0,1):Cl(r,r.reversed()))},P.labelToScroll=function(_e){return r&&r.labels&&(he||P.refresh()||he)+r.labels[_e]/r.duration()*T||0},P.getTrailing=function(_e){var qe=Je.indexOf(P),Be=P.direction>0?Je.slice(0,qe).reverse():Je.slice(qe+1);return(hi(_e)?Be.filter(function($e){return $e.vars.preventOverlaps===_e}):Be).filter(function($e){return P.direction>0?$e.end<=he:$e.start>=ge})},P.update=function(_e,qe,Be){if(!(M&&!Be&&!_e)){var $e=Bn===!0?Ae:P.scroll(),Nt=_e?0:($e-he)/T,tt=Nt<0?0:Nt>1?1:Nt||0,At=P.progress,Jt,Pt,Ct,xt,ai,A,N,V;if(qe&&(b=Ke,Ke=M?ue():$e,y&&(O=st,st=r&&!D?r.totalProgress():tt)),m&&p&&!An&&!Hc&&Vi&&(!tt&&he<$e+($e-b)/(Cn()-Nl)*m?tt=1e-4:tt===1&&ge>$e+($e-b)/(Cn()-Nl)*m&&(tt=.9999)),tt!==At&&P.enabled){if(Jt=P.isActive=!!tt&&tt<1,Pt=!!At&&At<1,A=Jt!==Pt,ai=A||!!tt!=!!At,P.direction=tt>At?1:-1,P.progress=tt,ai&&!An&&(Ct=tt&&!At?0:tt===1?1:At===1?2:3,D&&(xt=!A&&B[Ct+1]!=="none"&&B[Ct+1]||B[Ct],V=r&&(xt==="complete"||xt==="reset"||xt in r))),E&&(A||V)&&(V||h||!r)&&(bn(E)?E(P):P.getTrailing(E).forEach(function(xe){return xe.endAnimation()})),D||(Q&&!An&&!Hc?(Q._dp._time-Q._start!==Q._time&&Q.render(Q._dp._time-Q._start),Q.resetTo?Q.resetTo("totalProgress",tt,r._tTime/r._tDur):(Q.vars.totalProgress=tt,Q.invalidate().restart())):r&&r.totalProgress(tt,!!(An&&(ne||_e)))),p){if(_e&&g&&(K.style[g+S.os2]=ce),!j)pe(Fl(Te+re*tt));else if(ai){if(N=!_e&&tt>At&&ge+1>$e&&$e+1>=_r(U,S),C)if(!_e&&(Jt||N)){var H=Ur(p,!0),F=$e-he;px(p,_t,H.top+(S===rn?F:0)+tn,H.left+(S===rn?0:F)+tn)}else px(p,K);za(Jt||N?ee:J),me&&tt<1&&Jt||pe(Te+(tt===1&&!N?re:0))}}y&&!Pe.tween&&!An&&!Hc&&se.restart(!0),a&&(A||x&&tt&&(tt<1||!jh))&&Nu(a.targets).forEach(function(xe){return xe.classList[Jt||x?"add":"remove"](a.className)}),o&&!D&&!_e&&o(P),ai&&!An?(D&&(V&&(xt==="complete"?r.pause().totalProgress(1):xt==="reset"?r.restart(!0).pause():xt==="restart"?r.restart(!0):r[xt]()),o&&o(P)),(A||!jh)&&(u&&A&&ia(P,u),W[Ct]&&ia(P,W[Ct]),x&&(tt===1?P.kill(!1,1):W[Ct]=0),A||(Ct=tt===1?1:3,W[Ct]&&ia(P,W[Ct]))),R&&!Jt&&Math.abs(P.getVelocity())>(kl(R)?R:2500)&&(Cl(P.callbackAnimation),Q?Q.progress(1):Cl(r,xt==="reverse"?1:!tt,1))):D&&o&&!An&&o(P)}if(He){var le=M?$e/M.duration()*(M._caScrollDist||0):$e;Ne(le+(z._isFlipped?1:0)),He(le)}vt&&vt(-$e/M.duration()*(M._caScrollDist||0))}},P.enable=function(_e,qe){P.enabled||(P.enabled=!0,fn(U,"resize",zl),X||fn(U,"scroll",sa),ie&&fn(n,"refreshInit",ie),_e!==!1&&(P.progress=de=0,Ke=b=q=ue()),qe!==!1&&P.refresh())},P.getTween=function(_e){return _e&&Pe?Pe.tween:Q},P.setPositions=function(_e,qe,Be,$e){if(M){var Nt=M.scrollTrigger,tt=M.duration(),At=Nt.end-Nt.start;_e=Nt.start+At*_e/tt,qe=Nt.start+At*qe/tt}P.refresh(!1,!1,{start:sx(_e,Be&&!!P._startClamp),end:sx(qe,Be&&!!P._endClamp)},$e),P.update()},P.adjustPinSpacing=function(_e){if(ke&&_e){var qe=ke.indexOf(S.d)+1;ke[qe]=parseFloat(ke[qe])+_e+tn,ke[1]=parseFloat(ke[1])+_e+tn,za(ke)}},P.disable=function(_e,qe){if(_e!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,qe||Q&&Q.pause(),Ae=0,Ue&&(Ue.uncache=1),ie&&cn(n,"refreshInit",ie),se&&(se.pause(),Pe.tween&&Pe.tween.kill()&&(Pe.tween=0)),!X)){for(var Be=Je.length;Be--;)if(Je[Be].scroller===U&&Je[Be]!==P)return;cn(U,"resize",zl),X||cn(U,"scroll",sa)}},P.kill=function(_e,qe){P.disable(_e,qe),Q&&!qe&&Q.kill(),l&&delete $m[l];var Be=Je.indexOf(P);Be>=0&&Je.splice(Be,1),Be===zn&&Sf>0&&zn--,Be=0,Je.forEach(function($e){return $e.scroller===P.scroller&&(Be=1)}),Be||Bn||(P.scroll.rec=0),r&&(r.scrollTrigger=null,_e&&r.revert({kill:!1}),qe||r.kill()),ye&&[ye,ae,z,Ee].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),au===P&&(au=0),p&&(Ue&&(Ue.uncache=1),Be=0,Je.forEach(function($e){return $e.pin===p&&Be++}),Be||(Ue.spacer=0)),i.onKill&&i.onKill(P)},Je.push(P),P.enable(!1,!1),Et&&Et(P),r&&r.add&&!T){var ut=P.update;P.update=function(){P.update=ut,it.cache++,he||ge||P.refresh()},Le.delayedCall(.01,P.update),T=.01,he=ge=0}else P.refresh();p&&oD()},n.register=function(i){return oa||(Le=i||yE(),xE()&&window.document&&n.enable(),oa=Ol),oa},n.defaults=function(i){if(i)for(var r in i)Xc[r]=i[r];return Xc},n.disable=function(i,r){Ol=0,Je.forEach(function(o){return o[r?"kill":"disable"](i)}),cn(nt,"wheel",sa),cn(yt,"scroll",sa),clearInterval(Bc),cn(yt,"touchcancel",ur),cn(_t,"touchstart",ur),Gc(cn,yt,"pointerdown,touchstart,mousedown",ox),Gc(cn,yt,"pointerup,touchend,mouseup",ax),ud.kill(),Vc(cn);for(var s=0;s<it.length;s+=3)Wc(cn,it[s],it[s+1]),Wc(cn,it[s],it[s+2])},n.enable=function(){if(nt=window,yt=document,mi=yt.documentElement,_t=yt.body,Le){if(Nu=Le.utils.toArray,tu=Le.utils.clamp,Ym=Le.core.context||ur,$h=Le.core.suppressOverwrites||ur,yg=nt.history.scrollRestoration||"auto",jm=nt.pageYOffset||0,Le.core.globals("ScrollTrigger",n),_t){Ol=1,ka=document.createElement("div"),ka.style.height="100vh",ka.style.position="absolute",bE(),JL(),Yt.register(Le),n.isTouch=Yt.isTouch,os=Yt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Xm=Yt.isTouch===1,fn(nt,"wheel",sa),xg=[nt,yt,mi,_t],Le.matchMedia?(n.matchMedia=function(c){var h=Le.matchMedia(),f;for(f in c)h.add(f,c[f]);return h},Le.addEventListener("matchMediaInit",function(){RE(),Ag()}),Le.addEventListener("matchMediaRevert",function(){return CE()}),Le.addEventListener("matchMedia",function(){po(0,1),Io("matchMedia")}),Le.matchMedia().add("(orientation: portrait)",function(){return Zh(),Zh})):console.warn("Requires GSAP 3.11.0 or later"),Zh(),fn(yt,"scroll",sa);var i=_t.hasAttribute("style"),r=_t.style,s=r.borderTopStyle,o=Le.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Ur(_t),rn.m=Math.round(a.top+rn.sc())||0,Hn.m=Math.round(a.left+Hn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(_t.setAttribute("style",""),_t.removeAttribute("style")),Bc=setInterval(cx,250),Le.delayedCall(.5,function(){return Hc=0}),fn(yt,"touchcancel",ur),fn(_t,"touchstart",ur),Gc(fn,yt,"pointerdown,touchstart,mousedown",ox),Gc(fn,yt,"pointerup,touchend,mouseup",ax),Wm=Le.utils.checkPrefix("transform"),Mf.push(Wm),oa=Cn(),ud=Le.delayedCall(.2,po).pause(),aa=[yt,"visibilitychange",function(){var c=nt.innerWidth,h=nt.innerHeight;yt.hidden?(nx=c,ix=h):(nx!==c||ix!==h)&&zl()},yt,"DOMContentLoaded",po,nt,"load",po,nt,"resize",zl],Vc(fn),Je.forEach(function(c){return c.enable(0,1)}),l=0;l<it.length;l+=3)Wc(cn,it[l],it[l+1]),Wc(cn,it[l],it[l+2])}else if(yt){var u=function c(){n.enable(),yt.removeEventListener("DOMContentLoaded",c)};yt.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(jh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Bc)||(Bc=r)&&setInterval(cx,r),"ignoreMobileResize"in i&&(Xm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Vc(cn)||Vc(fn,i.autoRefreshEvents||"none"),_E=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Yn(i),o=it.indexOf(s),a=Lo(s);~o&&it.splice(o,a?6:2),r&&(a?yr.unshift(nt,r,_t,r,mi,r):yr.unshift(s,r))},n.clearMatchMedia=function(i){Je.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(hi(i)?Yn(i):i).getBoundingClientRect(),a=o[s?So:Mo]*r||0;return s?o.right-a>0&&o.left+a<nt.innerWidth:o.bottom-a>0&&o.top+a<nt.innerHeight},n.positionInViewport=function(i,r,s){hi(i)&&(i=Yn(i));var o=i.getBoundingClientRect(),a=o[s?So:Mo],l=r==null?a/2:r in fd?fd[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/nt.innerWidth:(o.top+l)/nt.innerHeight},n.killAll=function(i){if(Je.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Do.killAll||[];Do={},r.forEach(function(s){return s()})}},n}();et.version="3.15.0";et.saveStyles=function(n){return n?Nu(n).forEach(function(e){if(e&&e.style){var t=fi.indexOf(e);t>=0&&fi.splice(t,5),fi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Le.core.getCache(e),Ym())}}):fi};et.revert=function(n,e){return Ag(!n,e)};et.create=function(n,e){return new et(n,e)};et.refresh=function(n){return n?zl(!0):(oa||et.register())&&po(!0)};et.update=function(n){return++it.cache&&Hr(n===!0?2:0)};et.clearScrollMemory=PE;et.maxScroll=function(n,e){return _r(n,e?Hn:rn)};et.getScrollFunc=function(n,e){return ks(Yn(n),e?Hn:rn)};et.getById=function(n){return $m[n]};et.getAll=function(){return Je.filter(function(n){return n.vars.id!=="ScrollSmoother"})};et.isScrolling=function(){return!!Vi};et.snapDirectional=wg;et.addEventListener=function(n,e){var t=Do[n]||(Do[n]=[]);~t.indexOf(e)||t.push(e)};et.removeEventListener=function(n,e){var t=Do[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};et.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var h=[],f=[],p=Le.delayedCall(r,function(){c(h,f),h=[],f=[]}).pause();return function(g){h.length||p.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&bn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return bn(s)&&(s=s(),fn(et,"refresh",function(){return s=e.batchMax()})),Nu(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(et.create(u))}),t};var _x=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Jh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Yt.isTouch?" pinch-zoom":""):"none",e===mi&&n(_t,t)},jc={auto:1,scroll:1},fD=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Le.core.getCache(s),a=Cn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==_t&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(jc[(l=Oi(s)).overflowY]||jc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Lo(s)&&(jc[(l=Oi(s)).overflowY]||jc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},DE=function(e,t,i,r){return Yt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&fD,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&fn(yt,Yt.eventTypes[0],vx,!1,!0)},onDisable:function(){return cn(yt,Yt.eventTypes[0],vx,!0)}})},dD=/(input|label|select|textarea)/i,gx,vx=function(e){var t=dD.test(e.target.tagName);(t||gx)&&(e._gsapAllow=!0,gx=t)},hD=function(e){ro(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=Yn(e.target)||mi,c=Le.core.globals().ScrollSmoother,h=c&&c.get(),f=os&&(e.content&&Yn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),p=ks(u,rn),g=ks(u,Hn),_=1,m=(Yt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,d=0,v=bn(r)?function(){return r(a)}:function(){return r||2.8},x,y,C=DE(u,e.type,!0,s),w=function(){return y=!1},M=ur,R=ur,E=function(){l=_r(u,rn),R=tu(os?1:0,l),i&&(M=tu(0,_r(u,Hn))),x=Eo},S=function(){f._gsap.y=Fl(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},D=function(){if(y){requestAnimationFrame(w);var I=Fl(a.deltaY/2),$=R(p.v-I);if(f&&$!==p.v+p.offset){p.offset=$-p.v;var P=Fl((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",p.cacheID=it.cache,Hr()}return!0}p.offset&&S(),y=!0},U,k,X,j,W=function(){E(),U.isActive()&&U.vars.scrollY>l&&(p()>l?U.progress(1)&&p(l):U.resetTo("scrollY",l))};return f&&Le.set(f,{y:"+=0"}),e.ignoreCheck=function(B){return os&&B.type==="touchmove"&&D()||_>1.05&&B.type!=="touchstart"||a.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){y=!1;var B=_;_=Fl((nt.visualViewport&&nt.visualViewport.scale||1)/m),U.pause(),B!==_&&Jh(u,_>1.01?!0:i?!1:"x"),k=g(),X=p(),E(),x=Eo},e.onRelease=e.onGestureStart=function(B,I){if(p.offset&&S(),!I)j.restart(!0);else{it.cache++;var $=v(),P,ie;i&&(P=g(),ie=P+$*.05*-B.velocityX/.227,$*=_x(g,P,ie,_r(u,Hn)),U.vars.scrollX=M(ie)),P=p(),ie=P+$*.05*-B.velocityY/.227,$*=_x(p,P,ie,_r(u,rn)),U.vars.scrollY=R(ie),U.invalidate().duration($).play(.01),(os&&U.vars.scrollY>=l||P>=l-1)&&Le.to({},{onUpdate:W,duration:$})}o&&o(B)},e.onWheel=function(){U._ts&&U.pause(),Cn()-d>1e3&&(x=0,d=Cn())},e.onChange=function(B,I,$,P,ie){if(Eo!==x&&E(),I&&i&&g(M(P[2]===I?k+(B.startX-B.x):g()+I-P[1])),$){p.offset&&S();var Me=ie[2]===$,Ge=Me?X+B.startY-B.y:p()+$-ie[1],q=R(Ge);Me&&Ge!==q&&(X+=q-Ge),p(q)}($||I)&&Hr()},e.onEnable=function(){Jh(u,i?!1:"x"),et.addEventListener("refresh",W),fn(nt,"resize",W),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),C.enable()},e.onDisable=function(){Jh(u,!0),cn(nt,"resize",W),et.removeEventListener("refresh",W),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new Yt(e),a.iOS=os,os&&!p()&&p(1),os&&Le.ticker.add(ur),j=a._dc,U=Le.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:LE(p,p(),function(){return U.pause()})},onUpdate:Hr,onComplete:j.vars.onComplete}),a};et.sort=function(n){if(bn(n))return Je.sort(n);var e=nt.pageYOffset||0;return et.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+nt.innerHeight}),Je.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};et.observe=function(n){return new Yt(n)};et.normalizeScroll=function(n){if(typeof n>"u")return Fn;if(n===!0&&Fn)return Fn.enable();if(n===!1){Fn&&Fn.kill(),Fn=n;return}var e=n instanceof Yt?n:hD(n);return Fn&&Fn.target===e.target&&Fn.kill(),Lo(e.target)&&(Fn=e),e};et.core={_getVelocityProp:Gm,_inputObserver:DE,_scrollers:it,_proxies:yr,bridge:{ss:function(){Vi||Io("scrollStart"),Vi=Cn()},ref:function(){return An}}};yE()&&Le.registerPlugin(et);aE.registerPlugin(et);const pD=()=>{const n=un.useRef(null),e=un.useRef(null),t=un.useRef(null),i=un.useRef(null),r=un.useRef([]),s=un.useRef(null),o=un.useRef({x:0,y:0,targetX:0,targetY:0,hasMoved:!1}),a=un.useRef({current:0,target:0}),l=un.useRef(null),u=un.useRef({active:!1,progress:0,direction:1,startTime:0,duration:1.4}),c=un.useRef(-1),h=un.useRef(0),f=un.useRef(null),p=un.useRef({current:0,target:0}),g={fiberCount:160,segmentsPerFiber:150,waveWidth:35,waveHeight:12},_=window.matchMedia("(prefers-reduced-motion: reduce)").matches,m=(y,C,w)=>y+(C-y)*w,d=y=>y*y*(3-2*y),v=y=>1-Math.pow(1-y,3),x=(y,C)=>{const w=Math.floor(y),M=Math.floor(C),R=y-w,E=C-M,S=R*R*(3-2*R),D=E*E*(3-2*E),U=(B,I)=>{const $=Math.sin(B*374761393+I*668265263)*43758.5453;return $-Math.floor($)},k=U(w,M),X=U(w+1,M),j=U(w,M+1),W=U(w+1,M+1);return m(m(k,X,S),m(j,W,S),D)};return un.useEffect(()=>{if(!n.current)return;const y=new S2;e.current=y;const C=new Ui(60,window.innerWidth/window.innerHeight,.1,1e3);C.position.set(0,0,28),t.current=C;const w=new y2({antialias:!0,alpha:!0,powerPreference:"high-performance"});w.setSize(window.innerWidth,window.innerHeight),w.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.current.appendChild(w.domElement),i.current=w;const R=(()=>{const b=document.createElement("canvas");b.width=1920,b.height=1080;const he=b.getContext("2d"),ge=he.createLinearGradient(0,0,b.width,b.height);return ge.addColorStop(0,"#4a148c"),ge.addColorStop(.5,"#880e4f"),ge.addColorStop(1,"#1a237e"),he.fillStyle=ge,he.fillRect(0,0,b.width,b.height),new w2(b)})();new P2().load("/src/assets/portal-image.jpg",b=>{f.current&&(f.current.material.uniforms.uTexture.value=b,b.image&&f.current.material.uniforms.uImageResolution.value.set(b.image.width,b.image.height))},void 0,()=>{console.log("Portal image not found, using placeholder. Add your image to src/assets/portal-image.jpg")});const S=33,D=60*Math.PI/180,U=2*Math.tan(D/2)*S,k=window.innerWidth/window.innerHeight,X=U*k,j=new Qa(X,U),W=new Sr({uniforms:{uTexture:{value:R},uImageResolution:{value:new pt(1920,1080)},uMousePos:{value:new pt(0,0)},uMouseActive:{value:0},uInnerRadius:{value:3},uOuterRadius:{value:6},uResolution:{value:new pt(window.innerWidth,window.innerHeight)},uTime:{value:0}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1}),B=new pr(j,W);B.position.z=-5,y.add(B),f.current=B;class I{constructor(he,ge){this.index=he,this.totalFibers=ge,this.normalizedY=he/ge,this.baseY=(this.normalizedY-.5)*g.waveHeight,this.timeOffset=Math.random()*Math.PI*2,this.spatialOffset=Math.random()*50,this.speed=.7+Math.random()*.3;const ye=Math.random();ye<.4?this.color=new dt(9133302):ye<.7?this.color=new dt(10980346):ye<.92?this.color=new dt(8246268):this.color=new dt(12891645);const ae=Math.abs(this.normalizedY-.5)*2;this.baseOpacity=.5+(1-ae)*.4,this.depthLayer=Math.sin(this.normalizedY*Math.PI)*.5+.5,this.points=[],this.basePoints=[];for(let z=0;z<g.segmentsPerFiber;z++)this.points.push(new Y),this.basePoints.push(new Y)}calculateBasePositions(he,ge,ye){const ae=he*.2*this.speed,z=ge;let Ee=1/0;const be=m(1.8,2.8,.5+Math.sin(z*Math.PI*.4)*.5),L=m(1.5,2.2,d(Math.sin(z*Math.PI*.3)*.5+.5)),T=m(0,1,d(Math.min(z/2.5,1))),ee=Math.abs(z-2.4),J=Math.max(0,1-ee/1.5),De=Math.abs(z-3),oe=Math.max(0,1-De/2.5),pe=d(Math.max(0,Math.min((z-4.5)/1.2,1))),Te=d(Math.max(0,Math.min((z-5.5)/1.2,1)));for(let re=0;re<g.segmentsPerFiber;re++){const ce=re/g.segmentsPerFiber;let ke=(ce-.5)*g.waveWidth,Ne=this.baseY,me=this.depthLayer*1.5;const He=Math.sin(ce*Math.PI*L+ae+this.timeOffset)*be,Ye=Math.sin(ce*Math.PI*L*1.6+ae*.6+this.timeOffset+Math.PI/3)*be*.35;Ne+=He+Ye,me+=Math.sin(ce*Math.PI*2.5+ae*.5+this.timeOffset)*1.8;const st=.6,O=x(ce*st+this.spatialOffset,ae*.15+this.timeOffset*.1)*.5,Q=x(ce*st+this.spatialOffset+50,ae*.12+this.timeOffset*.1)*.4,te=x(ce*st+this.spatialOffset+100,ae*.18+this.timeOffset*.1)*.8;if(ke+=O,Ne+=Q,me+=te,T>0){const Z=Math.sin((ce-.5)*Math.PI*1.2)*4.5;Ne+=Z*T}if(J>0){const se=1-(1-Math.abs(ce-.5)*2)*.55*J;Ne*=se;const Ae=Math.sin(ce*Math.PI*2+ae*.4)*.8;me+=Ae*J}if(oe>0){const Z=(this.normalizedY-.5)*2,se=d(oe),Ae=Z*ce*7*se;Ne+=Ae;const je=Math.sin(ce*Math.PI*1.8+ae*.4)*2.5;me+=je*se;const vt=Math.cos(ce*Math.PI*2+ae*.3)*1.2;me+=vt*se*.5}if(pe>0){const Z=ce*4.5*pe;Ne+=Z-2.25*pe;const se=Math.sin(ce*Math.PI*2+ae+this.timeOffset)*1.5;Ne+=se*(1-pe*.4)}if(Te>0){Ne*=1+Te*.35;const Z=Math.sin(ce*Math.PI*1.6+ae*.4+this.timeOffset)*3.2;Ne+=Z*Te;const se=Math.sin(ce*Math.PI*2+ae*.35)*3;me+=se*Te}if(this.basePoints[re].set(ke,Ne,me),ye.active){const Z=ke-ye.x,se=Ne-ye.y,Ae=Math.sqrt(Z*Z+se*se);Ae<Ee&&(Ee=Ae)}}return Ee}applyDisplacementAndEnergy(he,ge,ye){for(let ae=0;ae<g.segmentsPerFiber;ae++){let z=this.basePoints[ae].x,Ee=this.basePoints[ae].y,be=this.basePoints[ae].z;if(he>0&&ge.active){const L=z-ge.x,T=Ee-ge.y,G=Math.sqrt(L*L+T*T);if(G<12){const J=d(1-G/12)*2.2*he,K=Math.atan2(T,L);z+=Math.cos(K)*J,Ee+=Math.sin(K)*J,be+=J*.5}}this.points[ae].set(z,Ee,be)}if(this.energyInfluence=0,ye.active){const z=(this.points.reduce((G,ee)=>G+ee.x,0)/this.points.length+g.waveWidth/2)/g.waveWidth,Ee=ye.direction>0?ye.progress:1-ye.progress,be=Math.abs(z-Ee),L=.15,T=.08;be<L&&(be<T?this.energyInfluence=d(1-be/T):this.energyInfluence=d(1-(be-T)/(L-T))*.6)}}}const $=[];for(let b=0;b<g.fiberCount;b++)$.push(new I(b,g.fiberCount));r.current=$;const P=new Zr,ie=[],Me=[],Ge=[],q=[];let ne=0;$.forEach(b=>{b.points.forEach((he,ge)=>{ie.push(he.x,he.y,he.z),Me.push(b.color.r,b.color.g,b.color.b);const ye=Math.sin(ge/g.segmentsPerFiber*Math.PI);Ge.push(b.baseOpacity*ye),ge<g.segmentsPerFiber-1&&q.push(ne,ne+1),ne++})}),P.setAttribute("position",new xi(ie,3)),P.setAttribute("color",new xi(Me,3)),P.setAttribute("opacity",new xi(Ge,1)),P.setAttribute("energyBoost",new xi(new Array(ie.length/3).fill(0),1)),P.setIndex(q);const de=new Sr({vertexShader:`
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
            vec3 energyColor = mix(glow, vec3(1.0, 0.95, 1.0), vEnergyBoost * 0.7);
            glow = energyColor * (1.0 + vEnergyBoost * 1.2);
          }

          float alpha = vOpacity * (0.75 + vEnergyBoost * 0.25);
          gl_FragColor = vec4(glow, alpha);
        }
      `,transparent:!0,blending:Yp,depthWrite:!1,vertexColors:!0}),ue=new T2(P,de);y.add(ue),s.current=ue;const Pe=b=>{o.current.hasMoved=!0,o.current.targetX=b.clientX/window.innerWidth*2-1,o.current.targetY=-(b.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",Pe);let Ue=0;et.create({trigger:"body",start:"top top",end:"bottom bottom",scrub:1.2,onUpdate:b=>{a.current.target=b.progress*6;const he=window.scrollY,ge=he>Ue?1:-1;Ue=he,h.current=ge;const ye=Math.floor(b.progress*6);if(ye!==c.current&&ye>=0&&ye<=5){const ae=u.current;ae.active||(ae.active=!0,ae.progress=0,ae.direction=ge,ae.startTime=Date.now()*.001),c.current=ye}}});const We=()=>{if(C.aspect=window.innerWidth/window.innerHeight,C.updateProjectionMatrix(),w.setSize(window.innerWidth,window.innerHeight),f.current){const he=60*Math.PI/180,ge=2*Math.tan(he/2)*33,ye=ge*C.aspect;f.current.geometry.dispose(),f.current.geometry=new Qa(ye,ge),f.current.material.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight)}};window.addEventListener("resize",We);const Ke=()=>{if(l.current=requestAnimationFrame(Ke),_){w.render(y,C);return}const b=Date.now()*.001,he=o.current,ge=a.current,ye=u.current,ae=f.current,z=p.current;if(ye.active){const Te=b-ye.startTime;ye.progress=Math.min(Te/ye.duration,1);const re=v(ye.progress);ye.progress=re,Te>=ye.duration&&(ye.active=!1,ye.progress=0)}ge.current=m(ge.current,ge.target,.12),he.x=m(he.x,he.targetX,.12),he.y=m(he.y,he.targetY,.12);const Ee=he.x*1.2,be=he.y*1.2;C.position.x=m(C.position.x,Ee,.06),C.position.y=m(C.position.y,be,.06),C.lookAt(0,0,0),C.updateMatrixWorld();const L=new Y(he.targetX,he.targetY,.5);L.unproject(C);const T=L.sub(C.position).normalize(),G=-C.position.z/T.z,ee=C.position.clone().add(T.multiplyScalar(G)),J={active:he.hasMoved,x:ee.x,y:ee.y};let K=1/0;$.forEach(Te=>{const re=Te.calculateBasePositions(b,ge.current,J);J.active&&re<K&&(K=re)});const De=3.5;let oe=0;if(J.active&&K<De){const Te=K/De;oe=1-d(Te)}z.current=oe;let pe=0;$.forEach(Te=>{Te.applyDisplacementAndEnergy(oe,J,ye),Te.points.forEach(re=>{const ce=pe*3;ue.geometry.attributes.position.array[ce]=re.x,ue.geometry.attributes.position.array[ce+1]=re.y,ue.geometry.attributes.position.array[ce+2]=re.z,ue.geometry.attributes.energyBoost.array[pe]=Te.energyInfluence,pe++})}),ue.geometry.attributes.position.needsUpdate=!0,ue.geometry.attributes.energyBoost.needsUpdate=!0,ae&&(ae.material.uniforms.uMousePos.value.set(J.x,J.y),ae.material.uniforms.uMouseActive.value=oe,ae.material.uniforms.uTime.value=b),w.render(y,C)};return Ke(),()=>{l.current&&cancelAnimationFrame(l.current),window.removeEventListener("mousemove",Pe),window.removeEventListener("resize",We),et.getAll().forEach(b=>b.kill()),n.current&&w.domElement&&n.current.removeChild(w.domElement),P.dispose(),de.dispose(),w.dispose()}},[]),Xe.jsx("div",{id:"canvas-container",ref:n})};function mD(){return Xe.jsxs(Xe.Fragment,{children:[Xe.jsx(pD,{}),Xe.jsx(ow,{}),Xe.jsxs("div",{className:"content",children:[Xe.jsx(aw,{}),Xe.jsx(lw,{}),Xe.jsx(uw,{}),Xe.jsx(cw,{}),Xe.jsx(fw,{}),Xe.jsx(dw,{})]})]})}LS(document.getElementById("root")).render(Xe.jsx(un.StrictMode,{children:Xe.jsx(mD,{})}));
