var m=Object.defineProperty,_=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var d=(e,o,t)=>o in e?m(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,i=(e,o)=>{for(var t in o||(o={}))h.call(o,t)&&d(e,t,o[t]);if(c)for(var t of c(o))v.call(o,t)&&d(e,t,o[t]);return e},l=(e,o)=>_(e,f(o));import{c as C}from"./mobile.de4f4bd6.js";import{_ as B}from"./index.8db4fe0c.js";import{a as E,r as g,e as S,g as s,j as p,B as y,C as k,o as b}from"./vendor.bd251973.js";const{createDemo:j}=C("signature"),A=j({props:{},setup(){const e=E({lineWidth:4,strokeStyle:"green"}),o=(t,r)=>{let n=document.createElement("img");n.src=r,document.querySelector(".demo1").appendChild(n)};return l(i({},e),{confirm:o})}}),u=e=>(y("data-v-c5e4da9c"),e=e(),k(),e),F={class:"demo"},I=u(()=>s("h2",null,"\u57FA\u7840\u7528\u6CD5",-1)),W=u(()=>s("p",{class:"demo-tips demo1"},"Tips: \u70B9\u51FB\u786E\u8BA4\u6309\u94AE,\u4E0B\u65B9\u663E\u793A\u7B7E\u540D\u56FE\u7247",-1)),$=u(()=>s("h2",null,"\u4FEE\u6539\u989C\u8272\u548C\u7B7E\u5B57\u7C97\u7EC6",-1));function D(e,o,t,r,n,N){const a=g("nut-signature");return b(),S("div",F,[I,s("div",null,[p(a,{onConfirm:e.confirm,onClear:e.clear},null,8,["onConfirm","onClear"]),W]),$,s("div",null,[p(a,{lineWidth:e.lineWidth,strokeStyle:e.strokeStyle},null,8,["lineWidth","strokeStyle"])])])}var T=B(A,[["render",D],["__scopeId","data-v-c5e4da9c"]]);export{T as default};
