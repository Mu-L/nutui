var __vite_style__=document.createElement("style");__vite_style__.innerHTML="@keyframes nutFadeIn-54433304{from{opacity:0}to{opacity:1}}@keyframes nutFadeOut-54433304{from{opacity:1}to{opacity:0}}.nutFade-enter-active[data-v-54433304],.nutFade-leave-active[data-v-54433304],.nutFadeIn[data-v-54433304],.nutFadeOut[data-v-54433304]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutFade-enter-active[data-v-54433304],.nutFadeIn[data-v-54433304]{animation-name:nutFadeIn-54433304}.nutFade-leave-active[data-v-54433304],.nutFadeOut[data-v-54433304]{animation-name:nutFadeOut-54433304}@keyframes nutZoomIn-54433304{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes nutZoomOut-54433304{from{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.nutZoom-enter-active[data-v-54433304],.nutZoom-leave-active[data-v-54433304],.nutZoomIn[data-v-54433304],.nutZoomOut[data-v-54433304]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutZoom-enter-active[data-v-54433304],.nutZoomIn[data-v-54433304]{animation-name:nutZoomIn-54433304}.nutZoom-leave-active[data-v-54433304],.nutZoomOut[data-v-54433304]{animation-name:nutZoomOut-54433304}@keyframes nutEaseIn-54433304{0%{opacity:0;transform:scale(.9)}100%{opacity:1;transform:scale(1)}}@keyframes nutEaseOut-54433304{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.9)}}.nutEase-enter-active[data-v-54433304],.nutEase-leave-active[data-v-54433304],.nutEaseIn[data-v-54433304],.nutEaseOut[data-v-54433304]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutEase-enter-active[data-v-54433304],.nutEaseIn[data-v-54433304]{animation-name:nutEaseIn-54433304}.nutEase-leave-active[data-v-54433304],.nutEaseOut[data-v-54433304]{animation-name:nutEaseOut-54433304}@keyframes nutDropIn-54433304{0%{opacity:0;transform:scaleY(.8)}100%{opacity:1;transform:scaleY(1)}}@keyframes nutDropOut-54433304{0%{opacity:1;transform:scaleY(1)}100%{opacity:0;transform:scaleY(.8)}}.nutDrop-enter-active[data-v-54433304],.nutDrop-leave-active[data-v-54433304],.nutDropIn[data-v-54433304],.nutDropOut[data-v-54433304]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutDrop-enter-active[data-v-54433304],.nutDropIn[data-v-54433304]{animation-name:nutDropIn-54433304}.nutDrop-leave-active[data-v-54433304],.nutDropOut[data-v-54433304]{animation-name:nutDropOut-54433304}@keyframes rotation-54433304{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}.nutRotate-enter-active[data-v-54433304],.nutRotate-leave-active[data-v-54433304],.nutRotateIn[data-v-54433304],.nutRotateOut[data-v-54433304]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutRotate-enter-active[data-v-54433304],.nutRotateIn[data-v-54433304]{animation-name:nutRotateIn}.nutRotate-leave-active[data-v-54433304],.nutRotateOut[data-v-54433304]{animation-name:nutRotateOut}.drag-boundary[data-v-54433304]{position:absolute;top:360px;left:8px;width:300px;height:200px;border:1px solid red}",document.head.appendChild(__vite_style__),System.register(["./mobile-legacy.d8b6af40.js","./vendor-legacy.2cbae777.js","./index-legacy.82527409.js"],(function(t){"use strict";var a,e,n,o,i,u,r,d,m;return{setters:[function(t){a=t.c},function(t){e=t.x,n=t.y,o=t.r,i=t.o,u=t.c,r=t.f,d=t.s,m=t.j},function(){}],execute:function(){const{createDemo:c}=a("drag");var s=t("default",c({setup:()=>({right:function(){return document.documentElement.clientWidth-300-9},bottom:function(){return document.documentElement.clientHeight-559}})}));const v=d();e("data-v-54433304");const l={class:"demo full"},p=r("h2",null,"基础用法",-1),f=m("触摸移动"),y=r("h2",{style:{top:"30px",position:"relative"}},"限制拖拽方向",-1),b=m("只能X轴拖拽"),_=m("只能Y轴拖拽"),x=r("h2",{style:{top:"60px",position:"relative"}},"自动吸边",-1),g=m("拖动我"),h=r("h2",{style:{top:"90px",position:"relative"}},"限制拖动边界",-1),I=r("div",{class:"drag-boundary"},null,-1),O=m("限制拖拽边界");n();const E=v(((t,a,e,n,d,m)=>{const c=o("nut-button"),s=o("nut-drag");return i(),u("div",l,[p,r(s,{style:{top:"120px",left:"8px"}},{default:v((()=>[r(c,{type:"primary"},{default:v((()=>[f])),_:1})])),_:1}),y,r(s,{direction:"x",style:{top:"200px",left:"8px"}},{default:v((()=>[r(c,{type:"primary"},{default:v((()=>[b])),_:1})])),_:1}),r(s,{direction:"y",style:{top:"200px",right:"50px"}},{default:v((()=>[r(c,{type:"primary"},{default:v((()=>[_])),_:1})])),_:1}),x,r(s,{direction:"x",attract:!0,style:{top:"275px",left:"8px"}},{default:v((()=>[r(c,{type:"primary"},{default:v((()=>[g])),_:1})])),_:1}),h,I,r(s,{boundary:{top:361,left:9,bottom:t.bottom(),right:t.right()},style:{top:"400px",left:"50px"}},{default:v((()=>[r(c,{type:"primary"},{default:v((()=>[O])),_:1})])),_:1},8,["boundary"])])}));s.render=E,s.__scopeId="data-v-54433304"}}}));
