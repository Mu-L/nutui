var p=Object.defineProperty;var c=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var E=(u,t,o)=>t in u?p(u,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[t]=o,r=(u,t)=>{for(var o in t||(t={}))v.call(t,o)&&E(u,o,t[o]);if(c)for(var o of c(t))B.call(t,o)&&E(u,o,t[o]);return u};import{c as _}from"./mobile.c7226cb8.js";import{_ as A}from"./index.17098d96.js";import{a as f,A as D,r as C,e as h,j as i,k as e,g as d,o as b,l,t as T}from"./vendor.bdd0d543.js";const{createDemo:w}=_("collapse"),U=w({setup(u,t){const o=f({active1:[1,"2"],active2:1,active3:1,active4:1,active5:1,title1:"\u6807\u98981",title2:"\u6807\u98982",title3:"\u6807\u98983",subTitle:"\u526F\u6807\u9898"});return r({change:F=>{console.log(`\u70B9\u51FB\u4E86name\u662F${F}\u7684\u9762\u677F`)}},D(o))}}),g={class:"demo full"},N=d("h2",null,"\u57FA\u672C\u7528\u6CD5",-1),V=l(" NutUI\u662F\u4E00\u5957\u62E5\u6709\u4EAC\u4E1C\u98CE\u683C\u7684\u8F7B\u91CF\u7EA7\u7684 Vue \u7EC4\u4EF6\u5E93 "),$=l(" \u5728\u4EA7\u54C1\u7684\u529F\u80FD\u3001\u4F53\u9A8C\u3001\u6613\u7528\u6027\u548C\u7075\u6D3B\u6027\u7B49\u5404\u4E2A\u65B9\u9762\u505A\u4E86\u5168\u9762\u7684\u5347\u7EA7\uFF01 "),j=d("h2",null,"\u65E0icon\u6837\u5F0F",-1),I=l(" \u5F15\u5165Vue3\u65B0\u7279\u6027 Composition API\u3001Teleport\u3001Emits \u7B49 "),k=l(" \u5168\u9762\u4F7F\u7528 TypeScipt "),y=d("h2",null,"\u624B\u98CE\u7434",-1),P=l(" \u57FA\u4E8E\u4EAC\u4E1C\u8BBE\u8BA1\u8BED\u8A00\u4F53\u7CFB\uFF0C\u6784\u5EFA\u573A\u666F "),S=l(" \u63D0\u9AD8\u754C\u2FAF\u7684\u6A21\u5757\u5316\u901A\u7528\u7A0B\u5EA6 "),z=l(" \u91C7\u7528\u7EC4\u5408\u5F0F API Composition \u8BED\u6CD5\u91CD\u6784\uFF0C\u7ED3\u6784\u6E05\u6670\uFF0C\u529F\u80FD\u6A21\u5757\u5316 "),R=d("h2",null,"\u81EA\u5B9A\u4E49\u6298\u53E0\u56FE\u6807",-1),q=l(" \u6587\u672C\u6D4B\u8BD5 "),G=l(" NUTUI3.0\u91CD\u65B0\u601D\u8003\u5176\u5185\u5728\u7684\u4E00\u81F4\u6027\u548C\u53EF\u7EC4\u5408\u6027 "),H=l(" \u63D0\u2FBC\u4EA7\u7814\u8F93\u51FA\u5BF9\u63A5\u7684\u6548\u7387\uFF0C\u964D\u4F4E\u8F93\u51FA\u5DE5\u4F5C\u91CF "),J=d("h2",null,"\u81EA\u5B9A\u4E49\u6807\u9898\u56FE\u6807",-1),K=l(" \u7EC4\u4EF6 emits \u4E8B\u4EF6\u5355\u72EC\u63D0\u53D6\uFF0C\u589E\u5F3A\u4EE3\u7801\u53EF\u8BFB\u6027 "),L=l(" \u4F7F\u7528 Teleport \u65B0\u7279\u6027\u91CD\u6784\u6302\u8F7D\u7C7B\u7EC4\u4EF6 ");function M(u,t,o,m,F,O){const a=C("nut-collapse-item"),s=C("nut-collapse");return b(),h("div",g,[N,i(s,{active:u.active1,"onUpdate:active":t[0]||(t[0]=n=>u.active1=n),icon:"down-arrow"},{default:e(()=>[i(a,{name:1},{mTitle:e(()=>[l(T(u.title1),1)]),default:e(()=>[V]),_:1}),i(a,{title:u.title2,name:2},{default:e(()=>[$]),_:1},8,["title"]),i(a,{title:u.title3,name:3,disabled:""},null,8,["title"])]),_:1},8,["active"]),j,i(s,{active:u.active4,"onUpdate:active":t[1]||(t[1]=n=>u.active4=n),accordion:!0},{default:e(()=>[i(a,{title:u.title1,name:1},{default:e(()=>[I]),_:1},8,["title"]),i(a,{title:u.title2,name:2},{default:e(()=>[k]),_:1},8,["title"])]),_:1},8,["active"]),y,i(s,{active:u.active2,"onUpdate:active":t[2]||(t[2]=n=>u.active2=n),accordion:!0,icon:"down-arrow"},{default:e(()=>[i(a,{title:u.title1,name:1},{default:e(()=>[P]),_:1},8,["title"]),i(a,{title:u.title2,name:2,"sub-title":u.subTitle},{default:e(()=>[S]),_:1},8,["title","sub-title"]),i(a,{title:u.title3,name:3},{default:e(()=>[z]),_:1},8,["title"])]),_:1},8,["active"]),R,i(s,{active:u.active3,"onUpdate:active":t[3]||(t[3]=n=>u.active3=n),accordion:!0,icon:"arrow-right2",rotate:"90"},{default:e(()=>[i(a,{title:u.title1,name:1},{sTitle:e(()=>[q]),default:e(()=>[G]),_:1},8,["title"]),i(a,{title:u.title2,name:2,"sub-title":"\u6587\u672C\u5185\u5BB9"},{default:e(()=>[H]),_:1},8,["title"])]),_:1},8,["active"]),J,i(s,{active:u.active5,"onUpdate:active":t[4]||(t[4]=n=>u.active5=n),"title-icon":"issue","title-icon-color":"red","title-icon-size":"20px","title-icon-position":"left",icon:"down-arrow",accordion:!0},{default:e(()=>[i(a,{title:u.title1,name:1},{default:e(()=>[K]),_:1},8,["title"]),i(a,{title:u.title2,name:2,"sub-title":"\u6587\u672C\u5185\u5BB9"},{default:e(()=>[L]),_:1},8,["title"])]),_:1},8,["active"])])}var Z=A(U,[["render",M]]);export{Z as default};
