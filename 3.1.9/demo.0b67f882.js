var _=Object.defineProperty,b=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var P=(o,e,n)=>e in o?_(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,m=(o,e)=>{for(var n in e||(e={}))v.call(e,n)&&P(o,n,e[n]);if(y)for(var n of y(e))C.call(e,n)&&P(o,n,e[n]);return o},f=(o,e)=>b(o,g(e));import{c as j}from"./mobile.de4f4bd6.js";import{_ as B}from"./index.8db4fe0c.js";import{a as E,A,r,e as F,j as s,k as a,B as V,C as D,g as t,o as k,l as S}from"./vendor.bd251973.js";const{createDemo:I}=j("video"),z=I({props:{},setup(){const o=E({source:{src:"https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D",type:"video/mp4"},source1:{src:"https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D",type:"video/mp4"},options:{controls:!0},options1:{autoplay:!0,muted:!0,controls:!0},options2:{muted:!0,controls:!0},options3:{controls:!0,poster:"https://img12.360buyimg.com/ling/s345x208_jfs/t1/168105/33/8417/54825/603df06dEfcddc4cb/21f9f5d0a1b3dad4.jpg.webp"},options4:{controls:!0,playsinline:!0},options5:{controls:!1,autoplay:!0,disabled:!0,muted:!0,playsinline:!0,loop:!0}}),e=d=>console.log("play",d),n=d=>console.log("pause",d),c=d=>console.log("playend",d),i=()=>{o.source1.src="https://vjs.zencdn.net/v/oceans.mp4"};return f(m({play:e,pause:n,playend:c},A(o)),{changeVideo:i})}}),p=o=>(V("data-v-1a1fa3ea"),o=o(),D(),o),Q={class:"demo"},X=p(()=>t("h4",null,"\u57FA\u7840\u7528\u6CD5",-1)),Y=p(()=>t("h4",null,"\u81EA\u52A8\u64AD\u653E",-1)),$=p(()=>t("h4",null,"\u521D\u59CB\u5316\u9759\u97F3",-1)),w=p(()=>t("h4",null,"\u89C6\u9891\u5C01\u9762\u6D77\u62A5\u8BBE\u7F6E",-1)),N=p(()=>t("h4",null,"\u884C\u5185\u64AD\u653E",-1)),q=p(()=>t("h4",null,"\u8BBE\u7F6E\u89C6\u9891\u4E3A\u80CC\u666F\u56FE",-1)),J=p(()=>t("h4",null,"\u89C6\u9891\u5207\u6362",-1)),K=S("\u5207\u6362\u89C6\u9891");function L(o,e,n,c,i,d){const u=r("nut-video"),l=r("nut-cell"),h=r("nut-button");return k(),F("div",Q,[X,s(l,{class:"cell"},{default:a(()=>[s(u,{source:o.source,options:o.options,onPlay:o.play,onPause:o.pause,onPlayend:o.playend},null,8,["source","options","onPlay","onPause","onPlayend"])]),_:1}),Y,s(l,{class:"cell"},{default:a(()=>[s(u,{source:o.source,options:o.options1,onPlay:o.play,onPause:o.pause,onPlayend:o.playend},null,8,["source","options","onPlay","onPause","onPlayend"])]),_:1}),$,s(l,{class:"cell"},{default:a(()=>[s(u,{source:o.source,options:o.options2,onPlay:o.play,onPause:o.pause,onPlayend:o.playend},null,8,["source","options","onPlay","onPause","onPlayend"])]),_:1}),w,s(l,{class:"cell"},{default:a(()=>[s(u,{source:o.source,options:o.options3,onPlay:o.play,onPause:o.pause,onPlayend:o.playend},null,8,["source","options","onPlay","onPause","onPlayend"])]),_:1}),N,s(l,{class:"cell"},{default:a(()=>[s(u,{source:o.source,options:o.options4,onPlay:o.play,onPause:o.pause,onPlayend:o.playend},null,8,["source","options","onPlay","onPause","onPlayend"])]),_:1}),q,s(l,{class:"cell"},{default:a(()=>[s(u,{source:o.source,options:o.options5,onPlay:o.play,onPause:o.pause,onPlayend:o.playend},null,8,["source","options","onPlay","onPause","onPlayend"])]),_:1}),J,s(l,{class:"cell"},{default:a(()=>[s(u,{source:o.source1,options:o.options,onPlay:o.play,onPause:o.pause,onPlayend:o.playend},null,8,["source","options","onPlay","onPause","onPlayend"])]),_:1}),s(h,{type:"primary",onClick:o.changeVideo,class:"m-b"},{default:a(()=>[K]),_:1},8,["onClick"])])}var Z=B(z,[["render",L],["__scopeId","data-v-1a1fa3ea"]]);export{Z as default};
