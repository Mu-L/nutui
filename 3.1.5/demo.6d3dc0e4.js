import{c as i,N as t}from"./mobile.f2f524e1.js";import{r as e,o,e as s,j as l,k as a,l as n}from"./vendor.60feaabb.js";import"./index.f7d754e2.js";const{createDemo:f}=i("notify");var r=f({setup:()=>({baseNotify:i=>{t.text(i,{onClose:()=>{console.log("close")},onClick:()=>{console.log("click")}})},primaryNotify:i=>{t.primary(i)},successNotify:i=>{t.success(i)},errorNotify:i=>{t.danger(i)},warningNotify:i=>{t.warn(i)},cusBgNotify:i=>{t.text(i,{color:"#ad0000",background:"#ffe1e1"})},timeNotify:i=>{t.text(i,{duration:1e4})}})});const c={class:"demo"},u=n("基础用法"),d=n("主要通知"),k=n("成功通知"),y=n("危险通知"),N=n("警告通知"),m=n(" 自定义背景色和字体颜色 "),_=n(" 自定义时长 ");r.render=function(i,t,n,f,r,g){const p=e("nut-cell"),C=e("nut-cell-group");return o(),s("div",c,[l(C,{title:"基础用法"},{default:a((()=>[l(p,{"is-Link":"",onClick:t[0]||(t[0]=t=>i.baseNotify("基础用法"))},{default:a((()=>[u])),_:1})])),_:1}),l(C,{title:"通知类型"},{default:a((()=>[l(p,{"is-Link":"",onClick:t[1]||(t[1]=t=>i.primaryNotify("主要通知"))},{default:a((()=>[d])),_:1}),l(p,{"is-Link":"",onClick:t[2]||(t[2]=t=>i.successNotify("成功通知"))},{default:a((()=>[k])),_:1}),l(p,{"is-Link":"",onClick:t[3]||(t[3]=t=>i.errorNotify("危险通知"))},{default:a((()=>[y])),_:1}),l(p,{"is-Link":"",onClick:t[4]||(t[4]=t=>i.warningNotify("警告通知"))},{default:a((()=>[N])),_:1})])),_:1}),l(C,{title:"自定义样式"},{default:a((()=>[l(p,{"is-Link":"",onClick:t[5]||(t[5]=t=>i.cusBgNotify("自定义背景色和字体颜色"))},{default:a((()=>[m])),_:1})])),_:1}),l(C,{title:"自定义时长"},{default:a((()=>[l(p,{"is-Link":"",onClick:t[6]||(t[6]=t=>i.timeNotify("自定义时长"))},{default:a((()=>[_])),_:1})])),_:1})])};export{r as default};
