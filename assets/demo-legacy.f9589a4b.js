!function(){var t=document.createElement("style");t.innerHTML="@keyframes nutFadeIn-19dc20d8{from{opacity:0}to{opacity:1}}@keyframes nutFadeOut-19dc20d8{from{opacity:1}to{opacity:0}}.nutFade-enter-active[data-v-19dc20d8],.nutFade-leave-active[data-v-19dc20d8],.nutFadeIn[data-v-19dc20d8],.nutFadeOut[data-v-19dc20d8]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutFade-enter-active[data-v-19dc20d8],.nutFadeIn[data-v-19dc20d8]{animation-name:nutFadeIn-19dc20d8}.nutFade-leave-active[data-v-19dc20d8],.nutFadeOut[data-v-19dc20d8]{animation-name:nutFadeOut-19dc20d8}@keyframes nutZoomIn-19dc20d8{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes nutZoomOut-19dc20d8{from{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.nutZoom-enter-active[data-v-19dc20d8],.nutZoom-leave-active[data-v-19dc20d8],.nutZoomIn[data-v-19dc20d8],.nutZoomOut[data-v-19dc20d8]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutZoom-enter-active[data-v-19dc20d8],.nutZoomIn[data-v-19dc20d8]{animation-name:nutZoomIn-19dc20d8}.nutZoom-leave-active[data-v-19dc20d8],.nutZoomOut[data-v-19dc20d8]{animation-name:nutZoomOut-19dc20d8}@keyframes nutEaseIn-19dc20d8{0%{opacity:0;transform:scale(.9)}100%{opacity:1;transform:scale(1)}}@keyframes nutEaseOut-19dc20d8{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.9)}}.nutEase-enter-active[data-v-19dc20d8],.nutEase-leave-active[data-v-19dc20d8],.nutEaseIn[data-v-19dc20d8],.nutEaseOut[data-v-19dc20d8]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutEase-enter-active[data-v-19dc20d8],.nutEaseIn[data-v-19dc20d8]{animation-name:nutEaseIn-19dc20d8}.nutEase-leave-active[data-v-19dc20d8],.nutEaseOut[data-v-19dc20d8]{animation-name:nutEaseOut-19dc20d8}@keyframes nutDropIn-19dc20d8{0%{opacity:0;transform:scaleY(.8)}100%{opacity:1;transform:scaleY(1)}}@keyframes nutDropOut-19dc20d8{0%{opacity:1;transform:scaleY(1)}100%{opacity:0;transform:scaleY(.8)}}.nutDrop-enter-active[data-v-19dc20d8],.nutDrop-leave-active[data-v-19dc20d8],.nutDropIn[data-v-19dc20d8],.nutDropOut[data-v-19dc20d8]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutDrop-enter-active[data-v-19dc20d8],.nutDropIn[data-v-19dc20d8]{animation-name:nutDropIn-19dc20d8}.nutDrop-leave-active[data-v-19dc20d8],.nutDropOut[data-v-19dc20d8]{animation-name:nutDropOut-19dc20d8}@keyframes rotation-19dc20d8{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}.nutRotate-enter-active[data-v-19dc20d8],.nutRotate-leave-active[data-v-19dc20d8],.nutRotateIn[data-v-19dc20d8],.nutRotateOut[data-v-19dc20d8]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutRotate-enter-active[data-v-19dc20d8],.nutRotateIn[data-v-19dc20d8]{animation-name:nutRotateIn}.nutRotate-leave-active[data-v-19dc20d8],.nutRotateOut[data-v-19dc20d8]{animation-name:nutRotateOut}.demo-button-row[data-v-19dc20d8]{margin-bottom:20px}.demo-button-row2[data-v-19dc20d8]{margin-bottom:10px;display:flex;align-items:center;flex-wrap:wrap}.nut-button[data-v-19dc20d8]{margin-right:15px}.nut-button[data-v-19dc20d8]:last-child{margin-bottom:0;margin-right:0}",document.head.appendChild(t),System.register(["./mobile-legacy.729b958c.js","./vendor-legacy.110a3ea1.js","./index-legacy.f7980f3d.js"],(function(t){"use strict";var a,e,d,n,o,i,c,u,r,l;return{setters:[function(t){a=t.c},function(t){e=t.k,d=t.z,n=t.A,o=t.r,i=t.o,c=t.c,u=t.f,r=t.y,l=t.j},function(){}],execute:function(){const{createDemo:m}=a("button");var s=t("default",m({props:{},setup(t){let a=e(!1);return{isLoading:a,changeLoading:()=>{a.value=!0,setTimeout((()=>{a.value=!1}),3e3)}}}}));const v=r();d("data-v-19dc20d8");const p={class:"demo"},f=u("h2",null,"按钮类型",-1),y={class:"demo-button-row"},b=l("主要按钮"),g=l("信息按钮"),h=l("默认按钮"),_={class:"demo-button-row2"},I=l("危险按钮"),O=l("警告按钮"),w=l("成功按钮"),k=u("h2",null,"朴素按钮",-1),D={class:"demo-button-row2"},E=l("朴素按钮"),F=l("朴素按钮"),Z=u("h2",null,"禁用状态",-1),R={class:"demo-button-row2"},x=l("禁用状态"),z=l("禁用状态"),L=l("禁用状态"),j=u("h2",null,"按钮形状",-1),C={class:"demo-button-row2"},Y=l("方形按钮"),q=l("圆形按钮"),T=u("h2",null,"加载状态",-1),A={class:"demo-button-row2"},H=l("加载中..."),M=l("Click me!"),S=u("h2",null,"图标按钮",-1),B={class:"demo-button-row2"},G=l("收藏"),J=u("h2",null,"按钮尺寸",-1),K={class:"demo-button-row2"},N=l("大号按钮"),P=l("普通按钮"),Q=l("小型按钮"),U=u("h2",null,"块级元素",-1),V={class:"demo-button-row2"},W=l("块级元素"),X=u("h2",null,"自定义颜色",-1),$={class:"demo-button-row2"},tt=l("单色按钮"),at=l("单色按钮"),et=l(" 渐变按钮 ");n();const dt=v(((t,a,e,d,n,r)=>{const l=o("nut-button");return i(),c("div",p,[f,u("div",y,[u(l,{type:"primary"},{default:v((()=>[b])),_:1}),u(l,{type:"info"},{default:v((()=>[g])),_:1}),u(l,{type:"default"},{default:v((()=>[h])),_:1})]),u("div",_,[u(l,{type:"danger"},{default:v((()=>[I])),_:1}),u(l,{type:"warning"},{default:v((()=>[O])),_:1}),u(l,{type:"success"},{default:v((()=>[w])),_:1})]),k,u("div",D,[u(l,{plain:"",type:"primary"},{default:v((()=>[E])),_:1}),u(l,{plain:"",type:"info"},{default:v((()=>[F])),_:1})]),Z,u("div",R,[u(l,{disabled:"",type:"primary"},{default:v((()=>[x])),_:1}),u(l,{plain:"",disabled:"",type:"info"},{default:v((()=>[z])),_:1}),u(l,{plain:"",disabled:"",type:"primary"},{default:v((()=>[L])),_:1})]),j,u("div",C,[u(l,{shape:"square",type:"primary"},{default:v((()=>[Y])),_:1}),u(l,{type:"info"},{default:v((()=>[q])),_:1})]),T,u("div",A,[u(l,{loading:"",type:"info"}),u(l,{loading:"",type:"warning"},{default:v((()=>[H])),_:1}),u(l,{loading:t.isLoading,type:"success",onClick:t.changeLoading},{default:v((()=>[M])),_:1},8,["loading","onClick"])]),S,u("div",B,[u(l,{shape:"square",plain:"",type:"primary",icon:"star-fill"}),u(l,{shape:"square",type:"primary",icon:"star"},{default:v((()=>[G])),_:1})]),J,u("div",K,[u(l,{size:"large",type:"primary",style:{"margin-bottom":"10px"}},{default:v((()=>[N])),_:1}),u(l,{type:"primary"},{default:v((()=>[P])),_:1}),u(l,{size:"small",type:"primary"},{default:v((()=>[Q])),_:1})]),U,u("div",V,[u(l,{block:"",type:"primary"},{default:v((()=>[W])),_:1})]),X,u("div",$,[u(l,{color:"#7232dd"},{default:v((()=>[tt])),_:1}),u(l,{color:"#7232dd",plain:""},{default:v((()=>[at])),_:1}),u(l,{color:"linear-gradient(to right, #ff6034, #ee0a24)"},{default:v((()=>[et])),_:1})])])}));s.render=dt,s.__scopeId="data-v-19dc20d8"}}}))}();
