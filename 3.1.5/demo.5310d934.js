import{c as e}from"./mobile.5b00f4b7.js";import{m as l,B as t,C as a,r as n,o as u,e as r,g as s,j as d,k as o,l as i}from"./vendor.92dabd7f.js";import"./index.f7d754e2.js";const{createDemo:c}=e("progress");var g=c({props:{},setup(){const e=l(0);return{val:e,setAddVal:()=>{if(e.value>=100)return!1;e.value+=10},setReduceVal:()=>{if(e.value<=0)return!1;e.value-=10}}}});t("data-v-1957d0eb");const f={class:"demo full"},p=s("h2",null,"基本用法",-1),v=s("h2",null,"线形进度条-设置颜色高度",-1),_=s("h2",null,"线形进度条-百分比不显示",-1),h=s("h2",null,"线形进度条-百分比外显",-1),b=s("h2",null,"线形进度条-百分比内显",-1),k=s("h2",null,'线形进度条-自定义尺寸(内置"small","base","large"三种规格)',-1),m=s("h2",null,"线形进度条-状态显示",-1),x=s("h2",null,"设置百分比",-1),w=i("减少"),C=i("增加");a(),g.render=function(e,l,t,a,i,c){const g=n("nut-progress"),j=n("nut-cell"),V=n("nut-button");return u(),r("div",f,[p,s("div",null,[d(j,null,{default:o((()=>[d(g,{percentage:"30"})])),_:1})]),v,s("div",null,[d(j,null,{default:o((()=>[d(g,{percentage:"30","stroke-color":" rgba(250,44,25,0.47)","stroke-width":"20","text-color":"red"})])),_:1})]),_,s("div",null,[d(j,null,{default:o((()=>[d(g,{percentage:"50","show-text":!1,"stroke-height":"24"})])),_:1})]),h,s("div",null,[d(j,null,{default:o((()=>[d(g,{percentage:"30"})])),_:1})]),b,s("div",null,[d(j,null,{default:o((()=>[d(g,{percentage:"60","text-inside":!0})])),_:1})]),k,s("div",null,[d(j,null,{default:o((()=>[d(g,{percentage:"30","text-inside":!0,size:"small"})])),_:1}),d(j,null,{default:o((()=>[d(g,{percentage:"50","text-inside":!0,size:"base"})])),_:1}),d(j,null,{default:o((()=>[d(g,{percentage:"70","text-inside":!0,size:"large"})])),_:1})]),m,s("div",null,[d(j,null,{default:o((()=>[d(g,{percentage:"30","stroke-color":"linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)",status:"active"})])),_:1}),d(j,null,{default:o((()=>[d(g,{percentage:"50","stroke-width":e.strokeWidth,status:"icon"},null,8,["stroke-width"])])),_:1}),d(j,null,{default:o((()=>[d(g,{percentage:"100","stroke-color":"linear-gradient(90deg, rgba(180,236,81,1) 0%,rgba(66,147,33,1) 100%)","stroke-width":"15",status:"icon","icon-name":"issue","icon-color":"red"})])),_:1})]),x,s("div",null,[d(j,null,{default:o((()=>[d(g,{percentage:e.val},null,8,["percentage"])])),_:1}),d(j,null,{default:o((()=>[d(V,{type:"default",onClick:e.setReduceVal},{default:o((()=>[w])),_:1},8,["onClick"]),d(V,{type:"danger",onClick:e.setAddVal},{default:o((()=>[C])),_:1},8,["onClick"])])),_:1})])])},g.__scopeId="data-v-1957d0eb";export{g as default};
