/*! For license information please see 36.cd7c44b8.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[36],{36:function(t,e,r){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function a(){a=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(O){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new C(n||[]);return o(i,"_invoke",{value:x(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=f;var d={};function p(){}function m(){}function v(){}var y={};l(y,c,(function(){return this}));var g=Object.getPrototypeOf,_=g&&g(g(L([])));_&&_!==e&&r.call(_,c)&&(y=_);var w=v.prototype=p.prototype=Object.create(y);function S(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function a(o,i,c,s){var u=h(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==n(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){a("next",t,c,s)}),(function(t){a("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return a("throw",t,c,s)}))}s(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){a(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function x(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var a=h(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function L(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=v,o(w,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:m,configurable:!0}),m.displayName=l(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},S(b.prototype),l(b.prototype,s,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new b(f(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(w),l(w,u,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=L,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function o(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,a)}r.r(e),r.d(e,{default:function(){return A}});var i=r(152),c=r(791),s="Contact_container__AZjRr",u="Contact_form__xzNGe",l="Contact_input__JdjPS",f="Contact_dark-input__pXcJ3",h="Contact_name__v4n85",d="Contact_text-area__xU4Jw",p="Contact_dark-text-area__aSj9d",m="Contact_success__CiDfC",v="Contact_dark-success__CHaUC",y="Contact_error__ak0dC",g="Contact_dark-error__v46-L",_="Contact_form-button__iA+-e",w="Contact_dark-form-button__vjzhI",S="EmailStatus_container__OsNKD",b="EmailStatus_sending__Du9Jv",x="EmailStatus_loading-spinner__HLknj",E="EmailStatus_loading-spinner-hidden__nDhqX",N={_origin:"https://api.emailjs.com"},j=function(t,e,r){if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};function C(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,e||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}function L(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,C(n.key),n)}}function k(t,e,r){return e&&L(t.prototype,e),r&&L(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var O=k((function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"})),T=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(n,a){var o=new XMLHttpRequest;o.addEventListener("load",(function(t){var e=t.target,r=new O(e);200===r.status||"OK"===r.text?n(r):a(r)})),o.addEventListener("error",(function(t){var e=t.target;a(new O(e))})),o.open("POST",N._origin+t,!0),Object.keys(r).forEach((function(t){o.setRequestHeader(t,r[t])})),o.send(e)}))},D=function(t,e,r,n){var a=n||N._userID,o=function(t){var e;if(!(e="string"===typeof t?document.querySelector(t):t)||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e}(r);j(a,t,e);var i=new FormData(o);return i.append("lib_version","3.10.0"),i.append("service_id",t),i.append("template_id",e),i.append("user_id",a),T("/api/v1.0/email/send-form",i)},I=r(444),P=function(t){var e=(0,c.useState)(""),r=(0,i.Z)(e,2),n=r[0],a=r[1],o=(0,c.useState)(!1),s=(0,i.Z)(o,2),u=s[0],l=s[1],f=t(n);return{enteredValue:n,valueIsValid:f,hasError:!f&&u,inputChangeHandler:function(t){a(t.target.value)},validateOnBlurHandler:function(t){l(!0)},reset:function(){a(""),l(!1)}}},G=r(2),H=r(184),F=function(t){return(0,H.jsxs)("div",{className:S,children:[(0,H.jsx)("span",{className:t.className,children:t.status}),(0,H.jsx)("img",{src:t.img.src||"",alt:t.img.alt||"",className:t.img.className})]})},U=r(830),V="ErrorMessage_invalid__yJ1Tb",q="ErrorMessage_dark-invalid__5s+6s",Z=function(t){var e="dark"===(0,c.useContext)(G.Z).theme;return(0,H.jsx)("span",{className:"".concat(V," ").concat(e?q:""),children:t.message})},R={isSending:!1,sendSuccessful:null},B={reducer:function(t,e){switch(e.type){case"SENDING":return{isSending:!0,sendSuccessful:t.sendSuccessful};case"NOT_SENDING":return{isSending:!1,sendSuccessful:t.sendSuccessful};case"SEND_SUCCESSFUL":return{isSending:t.isSending,sendSuccessful:!0};case"SEND_UNSUCCESSFUL":return{isSending:t.isSending,sendSuccessful:!1};default:return R}},defaultState:R},J=function(t){return""!==t},M=function(t){return t.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)},A=function(t){var e=B.reducer,r=B.defaultState,n=(0,c.useReducer)(e,r),S=(0,i.Z)(n,2),N=S[0],j=S[1],C=(0,c.useState)(!1),L=(0,i.Z)(C,2),k=L[0],O=L[1],T=(0,c.useState)(),V=(0,i.Z)(T,2),q=V[0],R=V[1],A="dark"===(0,c.useContext)(G.Z).theme,K=P(J),X=K.enteredValue,Y=K.valueIsValid,z=K.hasError,Q=K.inputChangeHandler,W=K.validateOnBlurHandler,$=K.reset,tt=P(J&&M),et=tt.enteredValue,rt=tt.valueIsValid,nt=tt.hasError,at=tt.inputChangeHandler,ot=tt.validateOnBlurHandler,it=tt.reset,ct=P(J),st=ct.enteredValue,ut=ct.valueIsValid,lt=ct.hasError,ft=ct.inputChangeHandler,ht=ct.validateOnBlurHandler,dt=ct.reset,pt=(0,c.useRef)(),mt=(0,c.useRef)(),vt=(0,c.useRef)(),yt=(0,c.useRef)(),gt=Y&&rt&&ut,_t=function(){var t,e=(t=a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),R(null),t.prev=2,gt){t.next=6;break}return Y?rt?ut||yt.current.focus():vt.current.focus():mt.current.focus(),t.abrupt("return");case 6:return j({type:"SENDING"}),t.next=9,D("service_nuurigj","template_gpqj79d",pt.current,"JioaKW-iFHKYcmt6F");case 9:if("200"===t.sent.status){t.next=12;break}throw new Error("Could not successfully send email.");case 12:j({type:"SEND_SUCCESSFUL"}),j({type:"NOT_SENDING"}),O(!1),t.next=23;break;case 17:t.prev=17,t.t0=t.catch(2),R(t.t0.text),j({type:"NOT_SENDING"}),j({type:"SEND_UNSUCCESSFUL"}),O(!1);case 23:$(),it(),dt();case 26:case"end":return t.stop()}}),t,null,[[2,17]])})),function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function c(t){o(i,n,a,c,s,"next",t)}function s(t){o(i,n,a,c,s,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){O(!0)}),[]);var wt,St=N.isSending,bt=(N.sendSuccessful,"".concat(l," ").concat(h," ").concat(A?f:""));return St?wt=(0,H.jsx)(F,{status:"Sending...",className:b,img:{src:U,alt:"Loading Spinner",className:x}}):k||q?!k&&q&&(wt=(0,H.jsx)(F,{status:q,className:"".concat(y," ").concat(A?g:""),img:{className:E}})):wt=(0,H.jsx)(F,{status:"Email sent successfully!",className:"".concat(m," ").concat(A?v:""),img:{className:E}}),(0,H.jsxs)("div",{className:s,children:[(0,H.jsx)(I.Z,{title:"Contact",style:{"margin-left":20}}),(0,H.jsxs)("form",{onSubmit:_t,ref:pt,className:u,children:[(0,H.jsx)("input",{type:"text",placeholder:"Name",name:"name",onChange:Q,onBlur:W,className:bt,ref:mt,value:X}),z&&(0,H.jsx)(Z,{message:"*Name is required"}),(0,H.jsx)("input",{type:"email",placeholder:"Email",name:"email",onChange:at,onBlur:ot,className:"".concat(l," ").concat(A?f:""),ref:vt,value:et}),nt&&(0,H.jsx)(Z,{message:"*Invalid Email"}),(0,H.jsx)("textarea",{placeholder:"Message",name:"message",rows:"10",onChange:ft,onBlur:ht,className:"".concat(d," ").concat(A?p:""),ref:yt,value:st}),lt&&(0,H.jsx)(Z,{message:"*Message is required"}),wt,(0,H.jsx)("button",{type:"submit",className:"".concat(_," ").concat(A?w:""),children:"Let's Chat"})]})]})}},444:function(t,e,r){r.d(e,{Z:function(){return o}});r(791);var n="Title_title__B4JrQ",a=r(184),o=function(t){return(0,a.jsx)("h2",{className:n,style:t.style,children:t.title})}}}]);
//# sourceMappingURL=36.cd7c44b8.chunk.js.map