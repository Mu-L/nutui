var D=Object.defineProperty;var f=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var g=(e,s,n)=>s in e?D(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,p=(e,s)=>{for(var n in s||(s={}))k.call(s,n)&&g(e,n,s[n]);if(f)for(var n of f(s))N.call(s,n)&&g(e,n,s[n]);return e};import{c as b}from"./mobile.4f9c1c24.js";import{_ as F}from"./index.25a44c2e.js";import{a as h,m as I,A as w,r as v,e as S,j as l,B as M,C as U,g as E,o as j}from"./vendor.36d75c4a.js";const{createDemo:$}=b("address"),O=$({props:{},setup(){const e=h({province:[{id:1,name:"\u5317\u4EAC"},{id:2,name:"\u5E7F\u897F"},{id:3,name:"\u6C5F\u897F"},{id:4,name:"\u56DB\u5DDD"},{id:5,name:"\u6D59\u6C5F"}],city:[{id:7,name:"\u671D\u9633\u533A"},{id:8,name:"\u5D07\u6587\u533A"},{id:9,name:"\u660C\u5E73\u533A"},{id:6,name:"\u77F3\u666F\u5C71\u533A"},{id:3,name:"\u516B\u91CC\u5E84\u8857\u9053"},{id:9,name:"\u5317\u82D1"}],country:[{id:3,name:"\u516B\u91CC\u5E84\u8857\u9053"},{id:9,name:"\u5317\u82D1"},{id:4,name:"\u5E38\u8425\u4E61"}],town:[]}),s=h({normal:!1,normal2:!1,exist:!1,customImg:!1,other:!1}),n=h({selectedIcon:"heart-fill",defaultIcon:"heart1",closeBtnIcon:"close",backBtnIcon:"left"}),y=I([{id:1,addressDetail:"",cityName:"\u6B21\u6E20\u9547",countyName:"\u901A\u5DDE\u533A",provinceName:"\u5317\u4EAC\u5E02",selectedAddress:!0,townName:"",name:"\u63A2\u63A2\u9C7C",phone:"182****1718"},{id:2,addressDetail:"",cityName:"\u9493\u9C7C\u5C9B\u5168\u533A",countyName:"",provinceName:"\u9493\u9C7C\u5C9B",selectedAddress:!1,townName:"",name:"\u63A2\u63A2\u9C7C",phone:"182****1718"},{id:3,addressDetail:"\u4EAC\u4E1C\u5927\u53A6",cityName:"\u5927\u5174\u533A",countyName:"\u79D1\u521B\u5341\u4E00\u885718\u53F7\u9662",provinceName:"\u5317\u4EAC\u5E02",selectedAddress:!1,townName:"",name:"\u63A2\u63A2\u9C7C",phone:"182****1718"}]),t=h({one:"\u8BF7\u9009\u62E9\u5730\u5740",two:"\u8BF7\u9009\u62E9\u5730\u5740",three:"\u8BF7\u9009\u62E9\u5730\u5740",four:"\u8BF7\u9009\u62E9\u5730\u5740",five:"\u8BF7\u9009\u62E9\u5730\u5740"});return p(p(p(p({showAddress:()=>{s.normal=!s.normal},showAddress2:()=>{s.normal2=!s.normal2},showPopup:s,onChange:(o,d)=>{e[o.next].length<1&&(s[d]=!1)},close1:o=>{console.log(o),t.one=o.data.addressStr},showAddressExist:()=>{s.exist=!0},close2:o=>{if(console.log(o),o.type=="exist"){const{provinceName:d,cityName:i,countyName:c,townName:m,addressDetail:C}=o.data;t.two=d+i+c+m+C}else t.two=o.data.addressStr},close5:o=>{console.log(o),t.five=o.data.addressStr},selected:(o,d,i)=>{console.log(o),console.log(d)},existAddress:y,showAddressOther:()=>{s.other=!0},showCustomImg:()=>{s.customImg=!0},close3:o=>{if(console.log(o),o.type=="exist"){const{provinceName:d,cityName:i,countyName:c,townName:m,addressDetail:C}=o.data;t.three=d+i+c+m+C}else t.three=o.data.addressStr},close4:o=>{if(console.log(o),o.type=="exist"){const{provinceName:d,cityName:i,countyName:c,townName:m,addressDetail:C}=o.data;t.four=d+i+c+m+C}else t.four=o.data.addressStr},switchModule:o=>{o.type=="custom"?console.log("\u70B9\u51FB\u4E86\u201C\u9009\u62E9\u5176\u4ED6\u5730\u5740\u201D\u6309\u94AE"):console.log("\u70B9\u51FB\u4E86\u81EA\u5B9A\u4E49\u5730\u5740\u5DE6\u4E0A\u89D2\u7684\u8FD4\u56DE\u6309\u94AE")},closeMask:o=>{console.log("\u5173\u95ED\u5F39\u5C42",o)}},w(n)),w(t)),w(s)),w(e))}}),A=e=>(M("data-v-7c997070"),e=e(),U(),e),V={class:"demo"},P=A(()=>E("h2",null,"\u9009\u62E9\u81EA\u5B9A\u4E49\u5730\u5740",-1)),R=A(()=>E("h2",null,"\u9009\u62E9\u81EA\u5B9A\u4E49\u5730\u57402",-1)),q=A(()=>E("h2",null,"\u9009\u62E9\u5DF2\u6709\u5730\u5740",-1)),z=A(()=>E("h2",null,"\u81EA\u5B9A\u4E49\u56FE\u6807",-1)),G=A(()=>E("h2",null,"\u81EA\u5B9A\u4E49\u5730\u5740\u4E0E\u5DF2\u6709\u5730\u5740\u5207\u6362",-1));function H(e,s,n,y,t,B){const a=v("nut-cell"),r=v("nut-address");return j(),S("div",V,[P,l(a,{title:"\u9009\u62E9\u5730\u5740",desc:e.one,"is-link":"",onClick:e.showAddress},null,8,["desc","onClick"]),l(r,{visible:e.normal,"onUpdate:visible":s[0]||(s[0]=u=>e.normal=u),province:e.province,city:e.city,country:e.country,town:e.town,onChange:s[1]||(s[1]=u=>e.onChange(u,"normal")),onClose:e.close1,"custom-address-title":"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A"},null,8,["visible","province","city","country","town","onClose"]),R,l(a,{title:"\u9009\u62E9\u5730\u5740",desc:e.five,"is-link":"",onClick:e.showAddress2},null,8,["desc","onClick"]),l(r,{visible:e.normal2,"onUpdate:visible":s[2]||(s[2]=u=>e.normal2=u),type:"custom2",province:e.province,city:e.city,country:e.country,town:e.town,height:"270px",onChange:s[3]||(s[3]=u=>e.onChange(u,"normal2")),onClose:e.close5,"custom-address-title":"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A"},null,8,["visible","province","city","country","town","onClose"]),q,l(a,{title:"\u9009\u62E9\u5730\u5740",desc:e.two,"is-link":"",onClick:e.showAddressExist},null,8,["desc","onClick"]),l(r,{visible:e.exist,"onUpdate:visible":s[4]||(s[4]=u=>e.exist=u),type:"exist","exist-address":e.existAddress,onChange:s[5]||(s[5]=u=>e.onChange(u,"exist")),onClose:e.close2,"is-show-custom-address":!1,onSelected:e.selected,"exist-address-title":"\u914D\u9001\u81F3"},null,8,["visible","exist-address","onClose","onSelected"]),z,l(a,{title:"\u9009\u62E9\u5730\u5740",desc:e.three,"is-link":"",onClick:e.showCustomImg},null,8,["desc","onClick"]),l(r,{visible:e.customImg,"onUpdate:visible":s[6]||(s[6]=u=>e.customImg=u),type:"exist","exist-address":e.existAddress,onChange:s[7]||(s[7]=u=>e.onChange(u,"customImg")),onClose:e.close3,"is-show-custom-address":!1,onSelected:e.selected,"default-icon":e.defaultIcon,"selected-icon":e.selectedIcon,"close-btn-icon":e.closeBtnIcon},null,8,["visible","exist-address","onClose","onSelected","default-icon","selected-icon","close-btn-icon"]),G,l(a,{title:"\u9009\u62E9\u5730\u5740",desc:e.four,"is-link":"",onClick:e.showAddressOther},null,8,["desc","onClick"]),l(r,{visible:e.other,"onUpdate:visible":s[8]||(s[8]=u=>e.other=u),type:"exist","exist-address":e.existAddress,province:e.province,city:e.city,country:e.country,town:e.town,"back-btn-icon":e.backBtnIcon,onChange:s[9]||(s[9]=u=>e.onChange(u,"other")),onClose:e.close4,onSelected:e.selected,"custom-and-exist-title":"\u9009\u62E9\u5176\u4ED6\u5730\u5740",onSwitchModule:e.switchModule,onCloseMask:e.closeMask},null,8,["visible","exist-address","province","city","country","town","back-btn-icon","onClose","onSelected","onSwitchModule","onCloseMask"])])}var ue=F(O,[["render",H],["__scopeId","data-v-7c997070"]]);export{ue as default};
