import{c as a}from"./mobile.418609e7.js";import{m as e,B as l,C as n,r as t,o as u,e as d,j as s,k as o,g as r,l as m}from"./vendor.f7062dc0.js";import"./index.b4cbfe18.js";const{createDemo:c}=a("barrage");var i=c({props:{},setup(){const a=e(""),l=e(null);let n=e(["画美不看","不明觉厉","喜大普奔","男默女泪","累觉不爱","爷青结"]);return{inputVal:a,danmu:l,list:n,addDanmu:function(){l.value.add(a.value)}}}});l("data-v-4d7973fc");const p={class:"demo"},f=r("h2",null,"基础用法",-1),v={class:"test"},b=m("添加");n(),i.render=function(a,e,l,n,m,c){const i=t("nut-barrage"),V=t("nut-cell"),j=t("nut-input"),_=t("nut-button");return u(),d("div",p,[f,s(V,null,{default:o((()=>[s(i,{ref:"danmu",danmu:a.list},null,8,["danmu"])])),_:1}),r("div",v,[s(j,{label:"文本",modelValue:a.inputVal,"onUpdate:modelValue":e[0]||(e[0]=e=>a.inputVal=e)},null,8,["modelValue"]),s(_,{type:"primary",onClick:a.addDanmu},{default:o((()=>[b])),_:1},8,["onClick"])])])},i.__scopeId="data-v-4d7973fc";export{i as default};
