import{c as t}from"./mobile.a721bc25.js";import{k as e,r as l,o as c,c as i,f as s,i as n}from"./vendor.8cdc485e.js";import"./index.00c891e2.js";const{createDemo:o}=t("cell");var d=o({setup:()=>({testClick:t=>{console.log("点击事件")},switchChecked:e(!0)})});const u={class:"demo"},a=s("h2",null,"基本用法",-1),r=s("h2",null,"直接使用插槽(slot)",-1),h=s("div",null,"自定义内容",-1),m=s("h2",null,"展示图标",-1),k=s("h2",null,"只展示 desc ，可通过 desc-text-align 调整内容位置",-1);d.render=function(t,e,o,d,f,p){const C=l("nut-cell"),j=l("nut-cell-group"),w=l("nut-switch");return c(),i("div",u,[a,s(C,{title:"我是标题",desc:"描述文字"}),s(C,{title:"我是标题","sub-title":"副标题描述",desc:"描述文字"}),s(C,{title:"点击测试",onClick:t.testClick},null,8,["onClick"]),r,s(C,{title:"我是标题",desc:"描述文字"},{default:n((()=>[h])),_:1}),s(j,{title:"链接 | 分组用法"},{default:n((()=>[s(C,{title:"链接","is-link":""}),s(C,{title:"URL 跳转",desc:"https://jd.com","is-link":"",url:"https://jd.com"}),s(C,{title:"路由跳转 ’/‘ ",to:"/"})])),_:1}),s(j,{title:"自定义右侧箭头区域"},{default:n((()=>[s(C,{title:"Switch"},{link:n((()=>[s(w,{modelValue:t.switchChecked,"onUpdate:modelValue":e[1]||(e[1]=e=>t.switchChecked=e)},null,8,["modelValue"])])),_:1})])),_:1}),m,s(C,{title:"姓名",icon:"my",desc:"张三",isLink:""}),k,s(C,{"desc-text-align":"left",desc:"张三"})])};export default d;
