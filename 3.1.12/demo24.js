var h=Object.defineProperty,F=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var c=(e,o,s)=>o in e?h(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,w=(e,o)=>{for(var s in o||(o={}))f.call(o,s)&&c(e,s,o[s]);if(p)for(var s of p(o))b.call(o,s)&&c(e,s,o[s]);return e},v=(e,o)=>F(e,C(o));import{c as E,a as D}from"./mobile.js";import{_ as B}from"./index.js";import{a as j,B as k,r as g,e as I,j as u,C as $,D as P,g as t,o as y}from"./vendor.js";const{createDemo:A}=E("imagepreview"),_=A({props:{},setup(){const e=j({showPreview1:!1,showPreview2:!1,showPreview3:!1,showPreview4:!1,imgData:[{src:"//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg"},{src:"//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png"},{src:"//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg"},{src:"//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg"}],videoData:[{source:{src:"https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D",type:"video/mp4"},options:{muted:!0,controls:!0}},{source:{src:"https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D",type:"video/mp4"},options:{muted:!0,controls:!0}}]}),o=()=>{console.log("imagepreview closed")},s=r=>{e["showPreview"+r]=!0},m=()=>{D({show:!0,images:e.imgData,onClose:o})},d=r=>{e["showPreview"+r]=!1};return v(w({},k(e)),{showFn:s,hideFn:d,fnShow:m})}}),a=e=>($("data-v-16cc7403"),e=e(),P(),e),S={class:"demo"},L=a(()=>t("h2",null,"\u57FA\u7840\u7528\u6CD5",-1)),V=a(()=>t("h2",null,"\u8BBE\u7F6E\u521D\u59CB\u9875\u7801",-1)),z=a(()=>t("h2",null,"\u8BBE\u7F6E\u8F6E\u64AD\u6307\u793A\u5668\u53CA\u989C\u8272",-1)),Q=a(()=>t("h2",null,"\u89C6\u9891\u3001\u56FE\u7247\u9884\u89C8",-1)),X=a(()=>t("h2",null,"\u51FD\u6570\u5F0F\u8C03\u7528",-1));function Y(e,o,s,m,d,r){const l=g("nut-imagepreview"),n=g("nut-cell");return y(),I("div",S,[L,u(l,{show:e.showPreview1,images:e.imgData,onClose:o[0]||(o[0]=i=>e.hideFn(1))},null,8,["show","images"]),u(n,{isLink:"",title:"\u5C55\u793A\u56FE\u7247\u9884\u89C8",showIcon:!0,onClick:o[1]||(o[1]=i=>e.showFn(1))}),V,u(l,{show:e.showPreview2,images:e.imgData,"content-close":!0,"init-no":3,onClose:o[2]||(o[2]=i=>e.hideFn(2))},null,8,["show","images"]),u(n,{isLink:"",title:"\u8BBE\u7F6E\u521D\u59CB\u9875\u7801\u7684\u56FE\u7247\u9884\u89C8",showIcon:!0,onClick:o[3]||(o[3]=i=>e.showFn(2))}),z,u(l,{show:e.showPreview3,images:e.imgData,"pagination-visible":!0,"pagination-color":"red",onClose:o[4]||(o[4]=i=>e.hideFn(3))},null,8,["show","images"]),u(n,{isLink:"",title:"\u8BBE\u7F6E\u8F6E\u64AD\u6307\u793A\u5668\u53CA\u989C\u8272\u7684\u56FE\u7247\u9884\u89C8",showIcon:!0,onClick:o[5]||(o[5]=i=>e.showFn(3))}),Q,u(l,{show:e.showPreview4,videos:e.videoData,images:e.imgData,onClose:o[6]||(o[6]=i=>e.hideFn(4))},null,8,["show","videos","images"]),u(n,{isLink:"",title:"\u89C6\u9891\u3001\u56FE\u7247\u9884\u89C8",showIcon:!0,onClick:o[7]||(o[7]=i=>e.showFn(4))}),X,u(n,{isLink:"",title:"\u51FD\u6570\u5F0F\u8C03\u7528\u7684\u56FE\u7247\u9884\u89C8",showIcon:!0,onClick:e.fnShow},null,8,["onClick"])])}var N=B(_,[["render",Y],["__scopeId","data-v-16cc7403"]]);export{N as default};
