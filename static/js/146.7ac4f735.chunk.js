/*! For license information please see 146.7ac4f735.chunk.js.LICENSE.txt */
(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[146],{2146:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>L});var o=n(5043),r=n(3003);const s="user_container__h9de8",i="user_photo__VDqGc",l="user_button__wZdTD",a="user_userData__0E-wI",c="user_name__RjEMD",u="user_country__o8+te",p="user_status__kdR6S",f="user_id__I57SC";var d=n(5475),g=n(579);const h=e=>{let{userId:t,name:n,photoUser:o,followed:r,followingProgress:h,unFollowUser:m,followUser:v}=e;return(0,g.jsxs)("div",{className:s,children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:i,children:(0,g.jsx)(d.k2,{to:"/profile/"+t,children:(0,g.jsx)("img",{src:o,alt:"#"})})}),(0,g.jsx)("div",{className:l,children:r?(0,g.jsx)("button",{disabled:h.some((e=>e===t)),onClick:()=>{m(t)},children:"Un follow"}):(0,g.jsx)("button",{disabled:h.some((e=>e===t)),onClick:()=>{v(t)},children:"Follow "})})]}),(0,g.jsxs)("div",{className:a,children:[(0,g.jsx)("div",{className:c,children:n}),(0,g.jsx)("div",{className:p,children:"yo"}),(0,g.jsx)("div",{className:u,children:"Russia"}),(0,g.jsxs)("div",{className:f,children:["ID: ",t]})]})]})};var m=n(3357);const v="paginatorWithHooks_selected__UgrOW",y="paginatorWithHooks_pages__sU7QC",w="paginatorWithHooks_pageNumber__GL0xX";var j=n(8139),x=n.n(j);const _=e=>{let{currentPage:t,totalItemsCount:n,pageSize:r,portionSize:s=10,onPageChange:i}=e,l=Math.ceil(n/r),a=[];for(let o=1;o<=l;o+=1)a.push(o);let c=Math.ceil(l/s),[u,p]=(0,o.useState)(1),f=(u-1)*s+1,d=u*s;return(0,g.jsxs)("div",{className:y,children:[u>1&&(0,g.jsx)("button",{onClick:()=>{p(u-1)},children:"PREV"}),a.filter((e=>e>=f&&e<=d)).map((e=>(0,g.jsx)("span",{className:x()({[v]:t===e},w),onClick:()=>{i(e)},children:e},e))),c>u&&(0,g.jsx)("button",{onClick:()=>{p(u+1)},children:"NEXT"})]})};var P=n(9527);const C=e=>{let{currentPage:t,totalItemsCount:n,pageSize:o,portionSize:r,onPageChange:s,users:i,setCurrentPage:l,isFetching:a,followingProgress:c,followUser:u,unFollowUser:p}=e;return(0,g.jsxs)("div",{children:[a?(0,g.jsx)(P.A,{}):null," ",(0,g.jsx)(_,{currentPage:t,setCurrentPage:l,totalItemsCount:n,pageSize:o,portionSize:r,onPageChange:s}),(0,g.jsx)("div",{children:i.map((e=>(0,g.jsx)(h,{userId:e.id,name:e.name,followed:e.followed,photoUser:null!=e.photos.small?e.photos.small:m,followingProgress:c,followUser:u,unFollowUser:p},e.id)))})]})};var b=n(76),S=n(3923),z=n(7938);n(9526);function k(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected a function, instead received ".concat(typeof e);if("function"!==typeof e)throw new TypeError(t)}var U=e=>Array.isArray(e)?e:[e];function N(e){const t=Array.isArray(e[0])?e[0]:e;return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected all items to be functions, instead received the following types: ";if(!e.every((e=>"function"===typeof e))){const n=e.map((e=>"function"===typeof e?"function ".concat(e.name||"unnamed","()"):typeof e)).join(", ");throw new TypeError("".concat(t,"[").concat(n,"]"))}}(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}Symbol(),Object.getPrototypeOf({});var R="undefined"!==typeof WeakRef?WeakRef:class{constructor(e){this.value=e}deref(){return this.value}},F=0,O=1;function A(){return{s:F,v:void 0,o:null,p:null}}function I(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=A();const{resultEqualityCheck:o}=t;let r,s=0;function i(){let t=n;const{length:i}=arguments;for(let e=0,n=i;e<n;e++){const n=arguments[e];if("function"===typeof n||"object"===typeof n&&null!==n){let e=t.o;null===e&&(t.o=e=new WeakMap);const o=e.get(n);void 0===o?(t=A(),e.set(n,t)):t=o}else{let e=t.p;null===e&&(t.p=e=new Map);const o=e.get(n);void 0===o?(t=A(),e.set(n,t)):t=o}}const l=t;let a;if(t.s===O)a=t.v;else if(a=e.apply(null,arguments),s++,o){var c,u,p;const e=null!==(c=null===(u=r)||void 0===u||null===(p=u.deref)||void 0===p?void 0:p.call(u))&&void 0!==c?c:r;null!=e&&o(e,a)&&(a=e,0!==s&&s--);r="object"===typeof a&&null!==a||"function"===typeof a?new R(a):a}return l.s=O,l.v=a,a}return i.clearCache=()=>{n=A(),i.resetResultsCount()},i.resultsCount=()=>s,i.resetResultsCount=()=>{s=0},i}function M(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];const r="function"===typeof e?{memoize:e,memoizeOptions:n}:e,s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];let o,s=0,i=0,l={},a=t.pop();"object"===typeof a&&(l=a,a=t.pop()),k(a,"createSelector expects an output function after the inputs, but received: [".concat(typeof a,"]"));const c={...r,...l},{memoize:u,memoizeOptions:p=[],argsMemoize:f=I,argsMemoizeOptions:d=[],devModeChecks:g={}}=c,h=U(p),m=U(d),v=N(t),y=u((function(){return s++,a.apply(null,arguments)}),...h);const w=f((function(){i++;const e=function(e,t){const n=[],{length:o}=e;for(let r=0;r<o;r++)n.push(e[r].apply(null,t));return n}(v,arguments);return o=y.apply(null,e),o}),...m);return Object.assign(w,{resultFunc:a,memoizedResultFunc:y,dependencies:v,dependencyRecomputations:()=>i,resetDependencyRecomputations:()=>{i=0},lastResult:()=>o,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:u,argsMemoize:f})};return Object.assign(s,{withTypes:()=>s}),s}var E=M(I),T=Object.assign((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected an object, instead received ".concat(typeof e);if("object"!==typeof e)throw new TypeError(t)}(e,"createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ".concat(typeof e));const n=Object.keys(e),o=t(n.map((t=>e[t])),(function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.reduce(((e,t,o)=>(e[n[o]]=t,e)),{})}));return o}),{withTypes:()=>T});const D=e=>e.usersPage.users,W=e=>e.usersPage.pageSize,q=e=>e.usersPage.portionSize,H=e=>e.usersPage.totalItemsCount,V=e=>e.usersPage.currentPage,G=e=>e.usersPage.isFetching,X=e=>e.usersPage.followingProgress;E(D,(e=>e.filter((e=>!0)))),E(D,W,((e,t)=>e.filter((e=>!0))));class Z extends o.Component{constructor(){super(...arguments),this.onPageChange=e=>{const{setCurrentPage:t,pageSize:n,requestUsers:o}=this.props;t(e),o(e,n)}}componentDidMount(){const{currentPage:e,pageSize:t,requestUsers:n}=this.props;n(e,t)}render(){return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(C,{...this.props,onPageChange:this.onPageChange})})}}const L=(0,S.Zz)((0,r.Ng)((e=>({users:D(e),pageSize:W(e),portionSize:q(e),totalItemsCount:H(e),currentPage:V(e),isFetching:G(e),followingProgress:X(e)})),{follow:z.e6,unFollow:z.PY,setCurrentPage:z.Tm,requestUsers:z.AI,unFollowUser:z.yo,followUser:z.pV}),b.$)(Z)},8139:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,s(n)))}return e}function s(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)o.call(e,n)&&e[n]&&(t=i(t,n));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=146.7ac4f735.chunk.js.map