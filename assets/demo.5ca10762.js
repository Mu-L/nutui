import{c as t}from"./mobile.e97bcb36.js";import{k as e,r as l,o as i,c as s,f as c,i as n}from"./vendor.6c8f51ae.js";import"./index.040215eb.js";const{createDemo:o}=t("cell");var d=o({setup:()=>({testClick:t=>{console.log("点击事件")},switchChecked:e(!0)})});const u={class:"demo"},a=c("h2",null,"基本用法",-1),r=c("h2",null,"直接使用插槽(slot)",-1),h=c("div",null,"自定义内容",-1),m=c("h2",null,"展示图标",-1),k=c("h2",null,"只展示 desc ，可通过 desc-text-align 调整内容位置",-1);d.render=function(t,e,o,d,f,p){const C=l("nut-cell"),b=l("nut-cell-group"),j=l("nut-switch");return i(),s("div",u,[a,c(C,{title:"我是标题",desc:"描述文字"}),c(C,{title:"我是标题","sub-title":"副标题描述",desc:"描述文字"}),c(C,{title:"点击测试",onClick:t.testClick},null,8,["onClick"]),r,c(C,{title:"我是标题",desc:"描述文字"},{default:n((()=>[h])),_:1}),c(b,{title:"链接 | 分组用法"},{default:n((()=>[c(C,{title:"链接","is-link":""}),c(C,{title:"URL 跳转",desc:"https://jd.com","is-link":"",url:"https://jd.com"}),c(C,{title:"路由跳转 ’/‘ ",to:"/"})])),_:1}),c(b,{title:"自定义右侧箭头区域"},{default:n((()=>[c(C,{title:"Switch"},{link:n((()=>[c(j,{modelValue:t.switchChecked,"onUpdate:modelValue":e[1]||(e[1]=e=>t.switchChecked=e)},null,8,["modelValue"])])),_:1})])),_:1}),m,c(C,{title:"姓名",icon:"my",desc:"张三",isLink:""}),k,c(C,{"desc-text-align":"left",desc:"张三"})])};export default d;
