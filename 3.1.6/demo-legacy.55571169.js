System.register(["./mobile-legacy.f0854efe.js","./index-legacy.5dec0910.js","./vendor-legacy.7f17019b.js"],(function(e){"use strict";var l,a,u,t,n,o,d,m;return{setters:[function(e){l=e.c},function(e){a=e._},function(e){u=e.m,t=e.r,n=e.e,o=e.j,d=e.g,m=e.o}],execute:function(){const{createDemo:r}=l("textarea"),s=r({setup:()=>({value:u(""),value2:u(""),value3:u("")})}),c={class:"demo full"},i=d("h2",null,"基础用法",-1),v=d("h2",null,"显示字数统计",-1),f=d("h2",null,"高度自定义，拉伸",-1),h=d("h2",null,"只读",-1),V=d("h2",null,"禁用",-1);e("default",a(s,[["render",function(e,l,a,u,d,r){const s=t("nut-textarea");return m(),n("div",c,[i,o(s,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=l=>e.value=l)},null,8,["modelValue"]),v,o(s,{modelValue:e.value2,"onUpdate:modelValue":l[1]||(l[1]=l=>e.value2=l),"limit-show":"","max-length":"20"},null,8,["modelValue"]),f,o(s,{modelValue:e.value3,"onUpdate:modelValue":l[2]||(l[2]=l=>e.value3=l),rows:"10",autosize:""},null,8,["modelValue"]),h,o(s,{readonly:"","model-value":"textarea直读状态"}),V,o(s,{disabled:"","model-value":"textarea禁用状态","limit-show":"","max-length":"20"})])}]]))}}}));
