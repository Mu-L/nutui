import{c as i,N as t}from"./mobile.761eff2d.js";import{r as o,o as e,c as s,f as l,i as n,j as a}from"./vendor.b05df578.js";import"./index.65da50cd.js";const{createDemo:f}=i("notify");var c=f({setup:()=>({baseNotify:i=>{t.text(i,{onClose:()=>{console.log("close")},onClick:()=>{console.log("click")}})},primaryNotify:i=>{t.primary(i)},successNotify:i=>{t.success(i)},errorNotify:i=>{t.danger(i)},warningNotify:i=>{t.warn(i)},cusBgNotify:i=>{t.text(i,{color:"#ad0000",background:"#ffe1e1"})},timeNotify:i=>{t.text(i,{duration:1e4})}})});const r={class:"demo"},d=a("基础用法"),u=a("主要通知"),y=a("成功通知"),k=a("危险通知"),N=a("警告通知"),m=a(" 自定义背景色和字体颜色 "),_=a(" 自定义时长 ");c.render=function(i,t,a,f,c,g){const p=o("nut-cell"),C=o("nut-cell-group");return e(),s("div",r,[l(C,{title:"基础用法"},{default:n((()=>[l(p,{"is-Link":"",onClick:t[1]||(t[1]=t=>i.baseNotify("基础用法"))},{default:n((()=>[d])),_:1})])),_:1}),l(C,{title:"通知类型"},{default:n((()=>[l(p,{"is-Link":"",onClick:t[2]||(t[2]=t=>i.primaryNotify("主要通知"))},{default:n((()=>[u])),_:1}),l(p,{"is-Link":"",onClick:t[3]||(t[3]=t=>i.successNotify("成功通知"))},{default:n((()=>[y])),_:1}),l(p,{"is-Link":"",onClick:t[4]||(t[4]=t=>i.errorNotify("危险通知"))},{default:n((()=>[k])),_:1}),l(p,{"is-Link":"",onClick:t[5]||(t[5]=t=>i.warningNotify("警告通知"))},{default:n((()=>[N])),_:1})])),_:1}),l(C,{title:"自定义样式"},{default:n((()=>[l(p,{"is-Link":"",onClick:t[6]||(t[6]=t=>i.cusBgNotify("自定义背景色和字体颜色"))},{default:n((()=>[m])),_:1})])),_:1}),l(C,{title:"自定义时长"},{default:n((()=>[l(p,{"is-Link":"",onClick:t[7]||(t[7]=t=>i.timeNotify("自定义时长"))},{default:n((()=>[_])),_:1})])),_:1})])};export default c;
