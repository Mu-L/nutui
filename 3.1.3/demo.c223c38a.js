import{c as e}from"./mobile.e4c7a2c6.js";import{m as l,r as n,o as s,e as r,j as t,k as a,g as d}from"./vendor.df414d47.js";import"./index.84d39d93.js";const{createDemo:u}=e("price");var o=u({setup(){const e=l(0);return setInterval((()=>{e.value=1e7*Math.random()}),1e3),{price:e}}});const c={class:"demo"},i=d("h2",null,"基本用法",-1),m=d("h2",null,"有人民币符号，无千位分隔",-1),p=d("h2",null,"带人民币符号，有千位分隔，保留小数点后三位",-1),f=d("h2",null,"异步随机变更",-1);o.render=function(e,l,d,u,o,h){const b=n("nut-price"),v=n("nut-cell");return s(),r("div",c,[i,t(v,null,{default:a((()=>[t(b,{price:0,"need-symbol":!1,thousands:!0})])),_:1}),m,t(v,null,{default:a((()=>[t(b,{price:10010.01,"need-symbol":!0,thousands:!1},null,8,["price"])])),_:1}),p,t(v,null,{default:a((()=>[t(b,{price:15213.1221,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1}),f,t(v,null,{default:a((()=>[t(b,{price:e.price,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1})])};export{o as default};
