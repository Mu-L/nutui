System.register(["./mobile-legacy.8ee5ad31.js","./vendor-legacy.de681981.js","./index-legacy.3376106d.js"],(function(e){"use strict";var l,n,c,a,u,t,d,o;return{setters:[function(e){l=e.c},function(e){n=e.k,c=e.J,a=e.r,u=e.o,t=e.c,d=e.f,o=e.i},function(){}],execute:function(){const{createDemo:h}=l("switch");var s=e("default",h({setup(){let{proxy:e}=c();const l=n(!0),a=n(!0);return{checked:l,checkedAsync:a,change:(l,n)=>{e.$toast.text(`触发了change事件，开关状态：${l}`)},changeAsync:(l,n)=>{e.$toast.text(`2秒后异步触发 ${l}`),setTimeout((()=>{a.value=l}),2e3)}}}}));const i={class:"demo"},m=d("h2",null,"基础用法",-1),g=d("h2",null,"禁用状态",-1),r=d("h2",null,"change事件",-1),V=d("h2",null,"异步控制",-1),f=d("h2",null,"自定义颜色",-1),k=d("h2",null,"支持文字",-1);s.render=function(e,l,n,c,h,s){const v=a("nut-switch"),C=a("nut-cell");return u(),t("div",i,[m,d(C,null,{default:o((()=>[d(v,{modelValue:e.checked,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checked=l)},null,8,["modelValue"])])),_:1}),g,d(C,null,{default:o((()=>[d(v,{modelValue:e.checked,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checked=l),disable:""},null,8,["modelValue"])])),_:1}),r,d(C,null,{default:o((()=>[d(v,{modelValue:e.checked,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checked=l),onChange:e.change},null,8,["modelValue","onChange"])])),_:1}),V,d(C,null,{default:o((()=>[d(v,{"model-value":e.checkedAsync,onChange:e.changeAsync},null,8,["model-value","onChange"])])),_:1}),f,d(C,null,{default:o((()=>[d(v,{modelValue:e.checked,"onUpdate:modelValue":l[4]||(l[4]=l=>e.checked=l),onChange:e.switchChange,"active-color":"blue"},null,8,["modelValue","onChange"])])),_:1}),k,d(C,null,{default:o((()=>[d(v,{modelValue:e.checked,"onUpdate:modelValue":l[5]||(l[5]=l=>e.checked=l),onChange:e.switchChange,"active-text":"开","inactive-text":"关"},null,8,["modelValue","onChange"])])),_:1})])}}}}));
