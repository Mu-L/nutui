System.register(["./mobile-legacy.f0854efe.js","./index-legacy.5dec0910.js","./vendor-legacy.7f17019b.js"],(function(e){"use strict";var t,n,l,a,i,o,s,d;return{setters:[function(e){t=e.c},function(e){n=e._},function(e){l=e.m,a=e.r,i=e.e,o=e.j,s=e.g,d=e.o}],execute:function(){const{createDemo:c}=t("datepicker"),m=c({props:{},setup(){const e=l(!1),t=l(!1),n=l(!1),a=l(!1),i=l(!1),o=[e,t,n,a,i],s=new Date(2020,0,1),d=l("2020-1-1"),c=l("2020-1-1"),m=l("2020年-1月-1日-0时-0分"),u=l("0时-0分-0秒"),r=l("0时-0分-0秒"),p=[d,c,m,u,r];return{show:e,show2:t,show3:n,show4:a,show5:i,desc1:d,desc2:c,desc3:m,desc4:u,desc5:r,currentDate:s,minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),open:e=>{o[e].value=!0},confirm:(e,t)=>{p[e].value=t.join("-")}}}}),u={class:"demo"},r=s("h2",null,"每列不显示中文",-1),p=s("h2",null,"限制开始结束时间",-1),D=s("h2",null,"限制开始结束时间（有默认值）",-1),h=s("h2",null,"限制开始结束小时",-1),f=s("h2",null,"分钟数递增步长设置",-1);e("default",n(m,[["render",function(e,t,n,l,s,c){const m=a("nut-cell"),v=a("nut-datepicker");return d(),i("div",u,[r,o(m,{title:"日期选择",desc:e.desc1,onClick:t[0]||(t[0]=t=>e.open(0))},null,8,["desc"]),p,o(m,{title:"日期选择",desc:e.desc2,onClick:t[1]||(t[1]=t=>e.open(1))},null,8,["desc"]),D,o(m,{title:"日期时间选择",desc:e.desc3,onClick:t[2]||(t[2]=t=>e.open(2))},null,8,["desc"]),h,o(m,{title:"时间选择",desc:e.desc4,onClick:t[3]||(t[3]=t=>e.open(3))},null,8,["desc"]),f,o(m,{title:"时间选择",desc:e.desc5,onClick:t[4]||(t[4]=t=>e.open(4))},null,8,["desc"]),o(v,{modelValue:e.currentDate,"onUpdate:modelValue":t[5]||(t[5]=t=>e.currentDate=t),onConfirm:t[6]||(t[6]=t=>{e.confirm(0,t)}),visible:e.show,"onUpdate:visible":t[7]||(t[7]=t=>e.show=t),"is-show-chinese":!1},null,8,["modelValue","visible"]),o(v,{modelValue:e.currentDate,"onUpdate:modelValue":t[8]||(t[8]=t=>e.currentDate=t),title:"日期选择","min-date":e.minDate,"max-date":e.maxDate,onConfirm:t[9]||(t[9]=t=>{e.confirm(1,t)}),visible:e.show2,"onUpdate:visible":t[10]||(t[10]=t=>e.show2=t),"is-show-chinese":!1},null,8,["modelValue","min-date","max-date","visible"]),o(v,{modelValue:e.currentDate,"onUpdate:modelValue":t[11]||(t[11]=t=>e.currentDate=t),title:"日期时间选择",type:"datetime","min-date":e.minDate,"max-date":e.maxDate,onConfirm:t[12]||(t[12]=t=>{e.confirm(2,t)}),visible:e.show3,"onUpdate:visible":t[13]||(t[13]=t=>e.show3=t)},null,8,["modelValue","min-date","max-date","visible"]),o(v,{modelValue:e.currentDate,"onUpdate:modelValue":t[14]||(t[14]=t=>e.currentDate=t),title:"时间选择",type:"time","min-date":e.minDate,"max-date":e.maxDate,onConfirm:t[15]||(t[15]=t=>{e.confirm(3,t)}),visible:e.show4,"onUpdate:visible":t[16]||(t[16]=t=>e.show4=t)},null,8,["modelValue","min-date","max-date","visible"]),o(v,{modelValue:e.currentDate,"onUpdate:modelValue":t[17]||(t[17]=t=>e.currentDate=t),title:"时间选择",type:"time","min-date":e.minDate,"minute-step":5,"max-date":e.maxDate,onConfirm:t[18]||(t[18]=t=>{e.confirm(4,t)}),visible:e.show5,"onUpdate:visible":t[19]||(t[19]=t=>e.show5=t)},null,8,["modelValue","min-date","max-date","visible"])])}]]))}}}));
