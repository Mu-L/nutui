System.register(["./mobile-legacy.e5400f33.js","./vendor-legacy.931694a1.js","./index-legacy.9367f9ef.js"],(function(n){"use strict";var e,l,i,c,t,o,a,r;return{setters:[function(n){e=n.c},function(n){l=n.a,i=n.r,c=n.o,t=n.e,o=n.j,a=n.k,r=n.g},function(){}],execute:function(){const{createDemo:k}=e("navbar");var s=n("default",k({setup:(n,{emit:e})=>({back:()=>{alert("header头部， 点击返回")},title:()=>{alert("header头部， 点击title")},right:()=>{alert("header头部， 点击右侧按钮")},send:()=>{alert("发送")},edit:()=>{alert("编辑")},clear:()=>{alert("清空")},more:()=>{alert("更多")},list:()=>{alert("列表")},icon:()=>{alert("icon")},morelist:()=>{alert("多个更多")},switchTab:function(n,e){console.log(n,e)},...l({tabList:[{id:"11",name:"商品"},{id:"22",name:"评价"},{id:"33",name:"详情"},{id:"44",name:"推荐"},{id:"55",name:"商品"},{id:"66",name:"评价"},{id:"77",name:"详情"},{id:"88",name:"推荐"}]})})}));const C={class:"demo full"},d=r("h2",null,"基础用法",-1),O=r("h2",null,"增加tab及右侧按钮",-1),u=r("h2",null,"多tab切换导航",-1);s.render=function(n,e,l,r,k,s){const b=i("nut-navbar"),m=i("nut-icon");return c(),t("div",C,[d,o(b,{onOnClickBack:n.back,onOnClickTitle:n.title,onOnClickSend:n.send,title:"订单详情",icon:"share-n"},null,8,["onOnClickBack","onOnClickTitle","onOnClickSend"]),o(b,{onOnClickBack:n.back,onOnClickTitle:n.title,onOnClickClear:n.clear,title:"浏览记录",desc:"清空"},null,8,["onOnClickBack","onOnClickTitle","onOnClickClear"]),o(b,{"left-show":!1,onOnClickTitle:n.title,onOnClickIcon:n.icon,onOnClickClear:n.edit,onOnClickSend:n.more,title:"购物车",titIcon:"cart2",desc:"编辑",icon:"more-x"},null,8,["onOnClickTitle","onOnClickIcon","onOnClickClear","onOnClickSend"]),O,o(b,{tab:"",tabs:[{id:"11",name:"商品"},{id:"22",name:"店铺"}],onSwitchTab:n.switchTab,onOnClickBack:n.back,onOnClickTitle:n.title,onOnClickClear:n.edit,onOnClickSend:n.list,desc:"编辑",icon:"horizontal-n"},null,8,["onSwitchTab","onOnClickBack","onOnClickTitle","onOnClickClear","onOnClickSend"]),u,o(b,{tabs:n.tabList,onSwitchTab:n.switchTab,onOnClickBack:n.back,icon:"more-x",onOnClickSend:n.send},{icons:a((()=>[o(m,{class:"icon",name:"share",onOnClickSlotSend:n.morelist},null,8,["onOnClickSlotSend"])])),_:1},8,["tabs","onSwitchTab","onOnClickBack","onOnClickSend"])])}}}}));
