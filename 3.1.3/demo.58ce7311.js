import{c as e}from"./mobile.418609e7.js";import{a as s,B as t,C as a,r as l,o,e as i,j as n,k as d,g as r,l as u}from"./vendor.f7062dc0.js";import"./index.b4cbfe18.js";const{createDemo:c}=e("overlay");var p=c({props:{},setup:()=>({state:s({show:!1,show2:!1})})});t("data-v-3325d30e");const v={class:"demo"},f=r("h2",null,"基础用法",-1),b=u("显示遮罩层"),h=r("h2",null,"嵌套内容",-1),m=u("嵌套内容"),w=r("div",{class:"wrapper"},[r("div",{class:"content"},"这里是正文")],-1);a(),p.render=function(e,s,t,a,r,u){const c=l("nut-button"),p=l("nut-overlay"),_=l("nut-cell");return o(),i("div",v,[f,n(_,null,{default:d((()=>[n(c,{type:"primary",onClick:s[0]||(s[0]=s=>e.state.show=!0)},{default:d((()=>[b])),_:1}),n(p,{visible:e.state.show,"onUpdate:visible":s[1]||(s[1]=s=>e.state.show=s),"z-index":2e3},null,8,["visible"])])),_:1}),h,n(_,null,{default:d((()=>[n(c,{type:"success",onClick:s[2]||(s[2]=s=>e.state.show2=!0)},{default:d((()=>[m])),_:1}),n(p,{visible:e.state.show2,"onUpdate:visible":s[3]||(s[3]=s=>e.state.show2=s),"z-index":2e3},{default:d((()=>[w])),_:1},8,["visible"])])),_:1})])},p.__scopeId="data-v-3325d30e";export{p as default};
