import{c as l}from"./mobile.f549be78.js";import{B as a,C as e,r as o,o as t,e as n,j as s,k as i,g as u,l as c}from"./vendor.f7062dc0.js";import"./index.e71f5246.js";const{createDemo:m}=l("avatar");var f=m({props:{},setup:()=>({handleClick:()=>{console.log("触发点击头像")}})});a("data-v-646e018d");const d={class:"demo full"},r=u("h2",null,'默认用法 (内置"small","normal","large"三种尺寸规格)',-1),g=u("h2",null,"修改形状",-1),p=u("h2",null,"修改背景色",-1),h=u("h2",null,"修改背景图片",-1),b=u("h2",null,"可以修改头像的内容",-1),v=c("N"),_=u("h2",null,"点击头像触发事件",-1);e(),f.render=function(l,a,e,u,c,m){const f=o("nut-avatar"),j=o("nut-cell");return t(),n("div",d,[r,s(j,null,{default:i((()=>[s(f,{size:"large",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"}),s(f,{size:"normal",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"}),s(f,{size:"small",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"})])),_:1}),g,s(j,null,{default:i((()=>[s(f,{icon:"my",shape:"square"}),s(f,{icon:"my",shape:"round"})])),_:1}),p,s(j,null,{default:i((()=>[s(f,{class:"demo-avatar",icon:"my","bg-color":"#FA2C19"})])),_:1}),h,s(j,null,{default:i((()=>[s(f,{icon:"https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"})])),_:1}),b,s(j,null,{default:i((()=>[s(f,null,{default:i((()=>[v])),_:1})])),_:1}),_,s(j,null,{default:i((()=>[s(f,{icon:"my",onActiveAvatar:l.handleClick},null,8,["onActiveAvatar"])])),_:1})])},f.__scopeId="data-v-646e018d";export{f as default};
