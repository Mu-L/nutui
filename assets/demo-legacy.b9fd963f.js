var __vite_style__=document.createElement("style");__vite_style__.innerHTML="@keyframes nutFadeIn-57fc1486{from{opacity:0}to{opacity:1}}@keyframes nutFadeOut-57fc1486{from{opacity:1}to{opacity:0}}.nutFade-enter-active[data-v-57fc1486],.nutFade-leave-active[data-v-57fc1486],.nutFadeIn[data-v-57fc1486],.nutFadeOut[data-v-57fc1486]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutFade-enter-active[data-v-57fc1486],.nutFadeIn[data-v-57fc1486]{animation-name:nutFadeIn-57fc1486}.nutFade-leave-active[data-v-57fc1486],.nutFadeOut[data-v-57fc1486]{animation-name:nutFadeOut-57fc1486}@keyframes nutZoomIn-57fc1486{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes nutZoomOut-57fc1486{from{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.nutZoom-enter-active[data-v-57fc1486],.nutZoom-leave-active[data-v-57fc1486],.nutZoomIn[data-v-57fc1486],.nutZoomOut[data-v-57fc1486]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutZoom-enter-active[data-v-57fc1486],.nutZoomIn[data-v-57fc1486]{animation-name:nutZoomIn-57fc1486}.nutZoom-leave-active[data-v-57fc1486],.nutZoomOut[data-v-57fc1486]{animation-name:nutZoomOut-57fc1486}@keyframes nutEaseIn-57fc1486{0%{opacity:0;transform:scale(.9)}100%{opacity:1;transform:scale(1)}}@keyframes nutEaseOut-57fc1486{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.9)}}.nutEase-enter-active[data-v-57fc1486],.nutEase-leave-active[data-v-57fc1486],.nutEaseIn[data-v-57fc1486],.nutEaseOut[data-v-57fc1486]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutEase-enter-active[data-v-57fc1486],.nutEaseIn[data-v-57fc1486]{animation-name:nutEaseIn-57fc1486}.nutEase-leave-active[data-v-57fc1486],.nutEaseOut[data-v-57fc1486]{animation-name:nutEaseOut-57fc1486}@keyframes nutDropIn-57fc1486{0%{opacity:0;transform:scaleY(.8)}100%{opacity:1;transform:scaleY(1)}}@keyframes nutDropOut-57fc1486{0%{opacity:1;transform:scaleY(1)}100%{opacity:0;transform:scaleY(.8)}}.nutDrop-enter-active[data-v-57fc1486],.nutDrop-leave-active[data-v-57fc1486],.nutDropIn[data-v-57fc1486],.nutDropOut[data-v-57fc1486]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutDrop-enter-active[data-v-57fc1486],.nutDropIn[data-v-57fc1486]{animation-name:nutDropIn-57fc1486}.nutDrop-leave-active[data-v-57fc1486],.nutDropOut[data-v-57fc1486]{animation-name:nutDropOut-57fc1486}@keyframes rotation-57fc1486{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}.nutRotate-enter-active[data-v-57fc1486],.nutRotate-leave-active[data-v-57fc1486],.nutRotateIn[data-v-57fc1486],.nutRotateOut[data-v-57fc1486]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutRotate-enter-active[data-v-57fc1486],.nutRotateIn[data-v-57fc1486]{animation-name:nutRotateIn}.nutRotate-leave-active[data-v-57fc1486],.nutRotateOut[data-v-57fc1486]{animation-name:nutRotateOut}.cell[data-v-57fc1486]{padding:40px 18px}.custom-button[data-v-57fc1486]{width:26px;color:#fff;font-size:10px;line-height:18px;text-align:center;background-color:#ee0a24;border-radius:100px}",document.head.appendChild(__vite_style__),System.register(["./mobile-legacy.d8b6af40.js","./vendor-legacy.2cbae777.js","./index-legacy.82527409.js"],(function(a){"use strict";var e,t,n,o,l,u,c,i,d,m,f,v;return{setters:[function(a){e=a.c,t=a.e},function(a){n=a.a,o=a.A,l=a.x,u=a.y,c=a.r,i=a.o,d=a.c,m=a.f,f=a.t,v=a.s},function(){}],execute:function(){const{createDemo:r}=e("range");var s=a("default",r({props:{},setup(){const a=n({value1:40,value2:[20,80],value3:0,value4:20,value5:30,value6:40,value7:50,value8:40,value9:60,value10:50});return{...o(a),onChange:a=>t.text("当前值："+a)}}}));const p=v();l("data-v-57fc1486");const g={class:"demo"},h=m("h2",null,"基础用法",-1),y=m("h2",null,"双滑块",-1),b=m("h2",null,"指定范围",-1),V=m("h2",null,"设置步长",-1),_=m("h2",null,"隐藏范围",-1),C=m("h2",null,"隐藏标签",-1),I=m("h2",null,"禁用",-1),O=m("h2",null,"自定义样式",-1),D=m("h2",null,"自定义按钮",-1),E={class:"custom-button"};u();const k=p(((a,e,t,n,o,l)=>{const u=c("nut-range"),v=c("nut-cell");return i(),d("div",g,[h,m(v,{class:"cell"},{default:p((()=>[m(u,{modelValue:a.value1,"onUpdate:modelValue":e[1]||(e[1]=e=>a.value1=e),onChange:a.onChange},null,8,["modelValue","onChange"])])),_:1}),y,m(v,{class:"cell"},{default:p((()=>[m(u,{range:"",modelValue:a.value2,"onUpdate:modelValue":e[2]||(e[2]=e=>a.value2=e),onChange:a.onChange},null,8,["modelValue","onChange"])])),_:1}),b,m(v,{class:"cell"},{default:p((()=>[m(u,{modelValue:a.value3,"onUpdate:modelValue":e[3]||(e[3]=e=>a.value3=e),max:10,min:-10,onChange:a.onChange},null,8,["modelValue","onChange"])])),_:1}),V,m(v,{class:"cell"},{default:p((()=>[m(u,{modelValue:a.value4,"onUpdate:modelValue":e[4]||(e[4]=e=>a.value4=e),step:5,onChange:a.onChange},null,8,["modelValue","onChange"])])),_:1}),_,m(v,{class:"cell"},{default:p((()=>[m(u,{"hidden-range":"",modelValue:a.value5,"onUpdate:modelValue":e[5]||(e[5]=e=>a.value5=e),onChange:a.onChange},null,8,["modelValue","onChange"])])),_:1}),C,m(v,{class:"cell"},{default:p((()=>[m(u,{"hidden-tag":"",modelValue:a.value6,"onUpdate:modelValue":e[6]||(e[6]=e=>a.value6=e),onChange:a.onChange},null,8,["modelValue","onChange"])])),_:1}),I,m(v,{class:"cell"},{default:p((()=>[m(u,{disabled:"",modelValue:a.value7,"onUpdate:modelValue":e[7]||(e[7]=e=>a.value7=e)},null,8,["modelValue"])])),_:1}),O,m(v,{class:"cell"},{default:p((()=>[m(u,{modelValue:a.value8,"onUpdate:modelValue":e[8]||(e[8]=e=>a.value8=e),onChange:a.onChange,"inactive-color":"rgba(163,184,255,1)","button-color":"rgba(52,96,250,1)","active-color":"linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"},null,8,["modelValue","onChange"])])),_:1}),D,m(v,{class:"cell"},{default:p((()=>[m(u,{modelValue:a.value9,"onUpdate:modelValue":e[9]||(e[9]=e=>a.value9=e),onChange:a.onChange},{button:p((()=>[m("div",E,f(a.value10),1)])),_:1},8,["modelValue","onChange"])])),_:1})])}));s.render=k,s.__scopeId="data-v-57fc1486"}}}));
