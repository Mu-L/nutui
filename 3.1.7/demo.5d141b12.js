import{c as _}from"./mobile.4f9c1c24.js";import{_ as p}from"./index.25a44c2e.js";import{m as f,r as a,e as g,g as u,j as e,k as t,B as E,C as h,o as B,l as d}from"./vendor.36d75c4a.js";const{createDemo:v}=_("progress"),F=v({props:{},setup(){const l=f(0);return{val:l,setAddVal:()=>{if(l.value>=100)return!1;l.value+=10},setReduceVal:()=>{if(l.value<=0)return!1;l.value-=10}}}}),s=l=>(E("data-v-1957d0eb"),l=l(),h(),l),m={class:"demo full"},A=s(()=>u("h2",null,"\u57FA\u672C\u7528\u6CD5",-1)),C=s(()=>u("h2",null,"\u7EBF\u5F62\u8FDB\u5EA6\u6761-\u8BBE\u7F6E\u989C\u8272\u9AD8\u5EA6",-1)),k=s(()=>u("h2",null,"\u7EBF\u5F62\u8FDB\u5EA6\u6761-\u767E\u5206\u6BD4\u4E0D\u663E\u793A",-1)),D=s(()=>u("h2",null,"\u7EBF\u5F62\u8FDB\u5EA6\u6761-\u767E\u5206\u6BD4\u5916\u663E",-1)),b=s(()=>u("h2",null,"\u7EBF\u5F62\u8FDB\u5EA6\u6761-\u767E\u5206\u6BD4\u5185\u663E",-1)),x=s(()=>u("h2",null,'\u7EBF\u5F62\u8FDB\u5EA6\u6761-\u81EA\u5B9A\u4E49\u5C3A\u5BF8(\u5185\u7F6E"small","base","large"\u4E09\u79CD\u89C4\u683C)',-1)),V=s(()=>u("h2",null,"\u7EBF\u5F62\u8FDB\u5EA6\u6761-\u72B6\u6001\u663E\u793A",-1)),w=s(()=>u("h2",null,"\u8BBE\u7F6E\u767E\u5206\u6BD4",-1)),j=d("\u51CF\u5C11"),y=d("\u589E\u52A0");function I(l,c,i,$,z,N){const o=a("nut-progress"),n=a("nut-cell"),r=a("nut-button");return B(),g("div",m,[A,u("div",null,[e(n,null,{default:t(()=>[e(o,{percentage:"30"})]),_:1})]),C,u("div",null,[e(n,null,{default:t(()=>[e(o,{percentage:"30","stroke-color":" rgba(250,44,25,0.47)","stroke-width":"20","text-color":"red"})]),_:1})]),k,u("div",null,[e(n,null,{default:t(()=>[e(o,{percentage:"50","show-text":!1,"stroke-height":"24"})]),_:1})]),D,u("div",null,[e(n,null,{default:t(()=>[e(o,{percentage:"30"})]),_:1})]),b,u("div",null,[e(n,null,{default:t(()=>[e(o,{percentage:"60","text-inside":!0})]),_:1})]),x,u("div",null,[e(n,null,{default:t(()=>[e(o,{percentage:"30","text-inside":!0,size:"small"})]),_:1}),e(n,null,{default:t(()=>[e(o,{percentage:"50","text-inside":!0,size:"base"})]),_:1}),e(n,null,{default:t(()=>[e(o,{percentage:"70","text-inside":!0,size:"large"})]),_:1})]),V,u("div",null,[e(n,null,{default:t(()=>[e(o,{percentage:"30","stroke-color":"linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)",status:"active"})]),_:1}),e(n,null,{default:t(()=>[e(o,{percentage:"50","stroke-width":l.strokeWidth,status:"icon"},null,8,["stroke-width"])]),_:1}),e(n,null,{default:t(()=>[e(o,{percentage:"100","stroke-color":"linear-gradient(90deg, rgba(180,236,81,1) 0%,rgba(66,147,33,1) 100%)","stroke-width":"15",status:"icon","icon-name":"issue","icon-color":"red"})]),_:1})]),w,u("div",null,[e(n,null,{default:t(()=>[e(o,{percentage:l.val},null,8,["percentage"])]),_:1}),e(n,null,{default:t(()=>[e(r,{type:"default",onClick:l.setReduceVal},{default:t(()=>[j]),_:1},8,["onClick"]),e(r,{type:"danger",onClick:l.setAddVal},{default:t(()=>[y]),_:1},8,["onClick"])]),_:1})])])}var W=p(F,[["render",I],["__scopeId","data-v-1957d0eb"]]);export{W as default};
