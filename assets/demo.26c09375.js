var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s;import{c as o}from"./mobile.84d0be1b.js";import{a as r,A as n,x as p,y as g,r as m,o as u,c as d,f as b,F as f,h,t as y,s as v}from"./vendor.6c8f51ae.js";import"./index.422729c7.js";const{createDemo:j}=o("swiper");var _=j({props:{},setup(){const e=r({page:2,page2:0,page3:0,page4:0,current:1,list:["https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/128047/5/6706/178631/5f068cefE53bff564/4dd870d8932daecf.jpg","https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/159602/22/7999/126515/6035f371E6f95bfee/559cb1ee48c962c9.jpg","https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/166846/13/7534/136440/60338b5cEd491d8b3/9e5527429136ab86.jpg","https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/145433/27/14059/141680/5facf066Ec402354c/530d5a316aed55fc.jpg"]});return o=((e,t)=>{for(var a in t||(t={}))i.call(t,a)&&c(e,a,t[a]);if(s)for(var a of s(t))l.call(t,a)&&c(e,a,t[a]);return e})({},n(e)),t(o,a({change:t=>{e.current=t+1}}));var o}});const w=v();p("data-v-7ebdcca2");const x={class:"demo"},O=b("h2",null,"基本用法",-1),E={class:"demo-box"},P=b("h2",null,"自定义大小",-1),k={class:"demo-box"},C=b("h2",null,"自定义指示器",-1),D={class:"demo-box"},I={class:"page"},A=b("h2",null,"垂直方向",-1),F={class:"demo-box"};g();const S=w(((e,t,a,s,i,l)=>{const c=m("nut-swiper-item"),o=m("nut-swiper");return u(),d("div",x,[O,b("view",E,[b(o,{"init-page":e.page,"pagination-visible":!0,"pagination-color":"#426543"},{default:w((()=>[(u(!0),d(f,null,h(e.list,(e=>(u(),d(c,{key:e},{default:w((()=>[b("img",{src:e,alt:""},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["init-page"])]),P,b("view",k,[b(o,{"init-page":e.page2,loop:!1,width:"300"},{default:w((()=>[(u(!0),d(f,null,h(e.list,(e=>(u(),d(c,{key:e},{default:w((()=>[b("img",{src:e,alt:""},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["init-page"])]),C,b("view",D,[b(o,{"init-page":e.page3,loop:!0,onChange:e.change},{page:w((()=>[b("div",I,y(e.current)+"/4 ",1)])),default:w((()=>[(u(!0),d(f,null,h(e.list,(e=>(u(),d(c,{key:e},{default:w((()=>[b("img",{src:e,alt:""},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["init-page","onChange"])]),A,b("view",F,[b(o,{"init-page":e.page4,loop:!0,"auto-play":"3000",direction:"vertical",height:"150","pagination-visible":!0,style:{height:"150px"}},{default:w((()=>[(u(!0),d(f,null,h(e.list,(e=>(u(),d(c,{key:e},{default:w((()=>[b("img",{src:e,alt:""},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["init-page"])])])}));_.render=S,_.__scopeId="data-v-7ebdcca2";export default _;
