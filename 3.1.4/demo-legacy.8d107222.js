System.register(["./mobile-legacy.b240d9fe.js","./vendor-legacy.7e726cf7.js","./index-legacy.3f78e8af.js"],(function(t){"use strict";var e,l,c,i,n,s,d,u;return{setters:[function(t){e=t.c},function(t){l=t.m,c=t.r,i=t.o,n=t.e,s=t.j,d=t.k,u=t.g},function(){}],execute:function(){const{createDemo:o}=e("cell");var a=t("default",o({setup:()=>({testClick:t=>{console.log("点击事件")},switchChecked:l(!0)})}));const r={class:"demo"},f=u("h2",null,"基本用法",-1),m=u("h2",null,"直接使用插槽(slot)",-1),h=u("div",null,"自定义内容",-1),g=u("img",{class:"nut-icon",src:"https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"},null,-1),k=u("h2",null,"展示图标",-1),j=u("h2",null,"只展示 desc ，可通过 desc-text-align 调整内容位置",-1);a.render=function(t,e,l,u,o,a){const p=c("nut-cell"),C=c("nut-cell-group"),b=c("nut-switch");return i(),n("div",r,[f,s(p,{title:"我是标题",desc:"描述文字"}),s(p,{title:"我是标题","sub-title":"副标题描述",desc:"描述文字"}),s(p,{title:"点击测试",onClick:t.testClick},null,8,["onClick"]),s(p,{title:"圆角设置 0","round-radius":"0"}),m,s(p,{title:"我是标题",desc:"描述文字"},{default:d((()=>[h])),_:1}),s(C,{title:"链接 | 分组用法"},{default:d((()=>[s(p,{title:"链接","is-link":""}),s(p,{title:"URL 跳转",desc:"https://jd.com","is-link":"",url:"https://jd.com"}),s(p,{title:"路由跳转 ’/‘ ",to:"/"})])),_:1}),s(C,{title:"自定义右侧箭头区域"},{default:d((()=>[s(p,{title:"Switch"},{link:d((()=>[s(b,{modelValue:t.switchChecked,"onUpdate:modelValue":e[0]||(e[0]=e=>t.switchChecked=e)},null,8,["modelValue"])])),_:1})])),_:1}),s(C,{title:"自定义左侧 Icon 区域"},{default:d((()=>[s(p,{title:"图片"},{icon:d((()=>[g])),_:1})])),_:1}),k,s(p,{title:"姓名",icon:"my",desc:"张三",isLink:""}),j,s(p,{"desc-text-align":"left",desc:"张三"})])}}}}));
