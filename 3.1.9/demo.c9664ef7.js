import{c as p}from"./mobile.23345c18.js";import{_ as m}from"./index.a4934cc9.js";import{m as t,r,e as i,j as d,k as f,g as a,B as D,C as v,o as C}from"./vendor.bd251973.js";const{createDemo:E}=p("barrage"),b=E({props:{},setup(){const u=t(""),e=t(null);let o=t(["\u753B\u7F8E\u4E0D\u770B","\u4E0D\u660E\u89C9\u5389","\u559C\u5927\u666E\u5954","\u7537\u9ED8\u5973\u6CEA","\u7D2F\u89C9\u4E0D\u7231","\u7237\u9752\u7ED3-"]);function n(){let s=Math.random();e.value.add("\u968F\u673A\u2014\u2014"+String(s).substr(2,10))}return{inputVal:u,danmu:e,list:o,addDanmu:n}}}),h=u=>(D("data-v-7fc5c86a"),u=u(),v(),u),B={class:"demo"},g=h(()=>a("h2",null,"\u57FA\u7840\u7528\u6CD5",-1)),F={class:"test"};function A(u,e,o,n,s,j){const c=r("nut-barrage"),l=r("nut-cell");return C(),i("div",B,[g,d(l,null,{default:f(()=>[d(c,{ref:"danmu",danmu:u.list},null,8,["danmu"])]),_:1}),a("div",F,[a("button",{onClick:e[0]||(e[0]=(..._)=>u.addDanmu&&u.addDanmu(..._)),class:"add nut-button--primary"},"\u968F\u673A\u6DFB\u52A0")])])}var $=m(b,[["render",A],["__scopeId","data-v-7fc5c86a"]]);export{$ as default};
