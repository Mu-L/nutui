var e=Object.defineProperty,n=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(n,t,l)=>t in n?e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[t]=l;"undefined"!=typeof require&&require;import{c as d}from"./mobile.130588d4.js";import{a as r,A as u,B as i,C as m,r as p,o as c,e as T,j as f,k as y,g as b,l as v,t as h}from"./vendor.6bc94963.js";import"./index.d8e175d8.js";const{createDemo:w}=d("countdown");var O=w({props:{},setup(){const e=r({serverTime:Date.now()-3e4,end:Date.now()+5e4,asyncEnd:0,paused:!1,resetTime:{d:"1",h:"00",m:"00",s:"00"}});return setTimeout((()=>{e.asyncEnd=Date.now()+3e4}),3e3),d=((e,n)=>{for(var t in n||(n={}))s.call(n,t)&&o(e,t,n[t]);if(l)for(var t of l(n))a.call(n,t)&&o(e,t,n[t]);return e})({},u(e)),n(d,t({toggle:()=>{e.paused=!e.paused},onend:()=>{console.log("countdown: ended.")},onpaused:e=>{console.log("paused: ",e)},onrestart:e=>{console.log("restart: ",e)}}));var d}});i("data-v-4fc80275");const g={class:"demo"},_=b("h2",null,"基础用法",-1),j=b("h2",null,"显示天",-1),P=b("h2",null,"以服务端的时间为准",-1),x=b("h2",null,"显示为 天时分秒",-1),D=b("h2",null,"异步更新结束时间",-1),E=b("h2",null,"控制开始和暂停的倒计时",-1),k={style:{position:"absolute",right:"10px",top:"9px"}},C=b("h2",null,"自定义展示",-1),V={class:"countdown-part-box"},q={class:"part-item-symbol"},I={class:"part-item h"},R=b("span",{class:"part-item-symbol"},":",-1),z={class:"part-item m"},A=b("span",{class:"part-item-symbol"},":",-1),B={class:"part-item s"},S=b("h2",null,"自定义显示",-1),U=b("span",null,"可调用该组件提供的 restTime 方法获取 '天时分秒' 自定义显示",-1);m(),O.render=function(e,n,t,l,s,a){const o=p("nut-countdown"),d=p("nut-cell"),r=p("nut-button");return c(),T("div",g,[_,f(d,null,{default:y((()=>[f(o,{endTime:e.end,onOnEnd:e.onend},null,8,["endTime","onOnEnd"])])),_:1}),j,f(d,null,{default:y((()=>[f(o,{endTime:e.end,showDays:""},null,8,["endTime"])])),_:1}),P,f(d,null,{default:y((()=>[f(o,{startTime:e.serverTime,endTime:e.end},null,8,["startTime","endTime"])])),_:1}),x,f(d,null,{default:y((()=>[f(o,{showDays:"",showPlainText:"",endTime:e.end},null,8,["endTime"])])),_:1}),D,f(d,null,{default:y((()=>[f(o,{showPlainText:"",endTime:e.asyncEnd},null,8,["endTime"])])),_:1}),E,f(d,null,{default:y((()=>[f(o,{endTime:e.end,paused:e.paused,onOnPaused:e.onpaused,onOnRestart:e.onrestart},null,8,["endTime","paused","onOnPaused","onOnRestart"]),b("div",k,[f(r,{type:"primary",size:"small",onClick:e.toggle},{default:y((()=>[v(h(e.paused?"start":"stop"),1)])),_:1},8,["onClick"])])])),_:1}),C,f(d,null,{default:y((()=>[b("span",null,[f(o,{modelValue:e.resetTime,"onUpdate:modelValue":n[0]||(n[0]=n=>e.resetTime=n),endTime:e.end},{default:y((()=>[b("div",V,[b("div",q,h(e.resetTime.d)+"天",1),b("div",I,h(e.resetTime.h),1),R,b("div",z,h(e.resetTime.m),1),A,b("div",B,h(e.resetTime.s),1)])])),_:1},8,["modelValue","endTime"])])])),_:1}),S,f(d,null,{default:y((()=>[U])),_:1})])},O.__scopeId="data-v-4fc80275";export{O as default};
