import{c as e}from"./mobile.24154aa2.js";import{a as s,B as a,C as t,r as l,o,e as i,j as n,k as d,g as r,l as u}from"./vendor.eeaf2406.js";import"./index.c586af8f.js";const{createDemo:c}=e("overlay");var p=c({props:{},setup:()=>({state:s({show:!1,show2:!1})})});a("data-v-3325d30e");const v={class:"demo"},f=r("h2",null,"基础用法",-1),h=u("显示遮罩层"),m=r("h2",null,"嵌套内容",-1),w=u("嵌套内容"),b=r("div",{class:"wrapper"},[r("div",{class:"content"},"这里是正文")],-1);t(),p.render=function(e,s,a,t,r,u){const c=l("nut-button"),p=l("nut-overlay"),_=l("nut-cell");return o(),i("div",v,[f,n(_,null,{default:d((()=>[n(c,{type:"primary",onClick:s[0]||(s[0]=s=>e.state.show=!0)},{default:d((()=>[h])),_:1}),n(p,{visible:e.state.show,"onUpdate:visible":s[1]||(s[1]=s=>e.state.show=s),"z-index":2e3},null,8,["visible"])])),_:1}),m,n(_,null,{default:d((()=>[n(c,{type:"success",onClick:s[2]||(s[2]=s=>e.state.show2=!0)},{default:d((()=>[w])),_:1}),n(p,{visible:e.state.show2,"onUpdate:visible":s[3]||(s[3]=s=>e.state.show2=s),"z-index":2e3},{default:d((()=>[b])),_:1},8,["visible"])])),_:1})])},p.__scopeId="data-v-3325d30e";export{p as default};
