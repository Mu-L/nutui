System.register(["./mobile-legacy.d8b6af40.js","./vendor-legacy.2cbae777.js","./index-legacy.82527409.js"],(function(t){"use strict";var s,o,i,e,l,n,a,h;return{setters:[function(t){s=t.c},function(t){o=t.a,i=t.r,e=t.o,l=t.c,n=t.f,a=t.i,h=t.j},function(){}],execute:function(){const{createDemo:c}=s("popup");var p=t("default",c({props:{},setup:()=>({state:o({showBasic:!1,showTop:!1,showBottom:!1,showLeft:!1,showRight:!1,showIcon:!1,showIconPosition:!1,showCloseIcon:!1,showRound:!1,showCombination:!1})})}));const b={class:"demo"},w=n("h2",null,"基础用法",-1),u=h("正文"),v=n("h2",null,"弹出位置",-1),d=n("h2",null,"关闭图标",-1),r=n("h2",null,"圆角弹框",-1),k=n("h2",null,"指定挂载节点",-1),g=h("app");p.render=function(t,s,o,h,c,p){const f=i("nut-cell"),C=i("nut-popup");return e(),l("div",b,[w,n(f,{title:"展示弹出层","is-link":"",onClick:s[1]||(s[1]=s=>t.state.showBasic=!0)}),n(C,{"pop-class":"popclass",style:{padding:"30px 50px"},visible:t.state.showBasic,"onUpdate:visible":s[2]||(s[2]=s=>t.state.showBasic=s),"z-index":100},{default:a((()=>[u])),_:1},8,["visible"]),v,n(f,{title:"顶部弹出","is-link":"",onClick:s[3]||(s[3]=s=>t.state.showTop=!0)}),n(C,{position:"top",style:{height:"20%"},visible:t.state.showTop,"onUpdate:visible":s[4]||(s[4]=s=>t.state.showTop=s)},null,8,["visible"]),n(f,{title:"底部弹出","is-link":"",onClick:s[5]||(s[5]=s=>t.state.showBottom=!0)}),n(C,{position:"bottom",style:{height:"20%"},visible:t.state.showBottom,"onUpdate:visible":s[6]||(s[6]=s=>t.state.showBottom=s)},null,8,["visible"]),n(f,{title:"左侧弹出","is-link":"",onClick:s[7]||(s[7]=s=>t.state.showLeft=!0)}),n(C,{position:"left",style:{width:"20%",height:"100%"},visible:t.state.showLeft,"onUpdate:visible":s[8]||(s[8]=s=>t.state.showLeft=s)},null,8,["visible"]),n(f,{title:"右侧弹出","is-link":"",onClick:s[9]||(s[9]=s=>t.state.showRight=!0)}),n(C,{position:"right",style:{width:"20%",height:"100%"},visible:t.state.showRight,"onUpdate:visible":s[10]||(s[10]=s=>t.state.showRight=s)},null,8,["visible"]),d,n(f,{title:"关闭图标","is-link":"",onClick:s[11]||(s[11]=s=>t.state.showIcon=!0)}),n(C,{position:"bottom",closeable:"",style:{height:"20%"},visible:t.state.showIcon,"onUpdate:visible":s[12]||(s[12]=s=>t.state.showIcon=s)},null,8,["visible"]),n(f,{title:"图标位置","is-link":"",onClick:s[13]||(s[13]=s=>t.state.showIconPosition=!0)}),n(C,{position:"bottom",closeable:"","close-icon-position":"top-left",style:{height:"20%"},visible:t.state.showIconPosition,"onUpdate:visible":s[14]||(s[14]=s=>t.state.showIconPosition=s)},null,8,["visible"]),n(f,{title:"自定义图标","is-link":"",onClick:s[15]||(s[15]=s=>t.state.showCloseIcon=!0)}),n(C,{position:"bottom",closeable:"","close-icon-position":"top-left","close-icon":"heart",style:{height:"20%"},visible:t.state.showCloseIcon,"onUpdate:visible":s[16]||(s[16]=s=>t.state.showCloseIcon=s)},null,8,["visible"]),r,n(f,{title:"圆角弹框","is-link":"",onClick:s[17]||(s[17]=s=>t.state.showRound=!0)}),n(C,{position:"bottom",closeable:"",round:"",style:{height:"30%"},visible:t.state.showRound,"onUpdate:visible":s[18]||(s[18]=s=>t.state.showRound=s)},null,8,["visible"]),k,n(f,{title:"指定挂载节点","is-link":"",onClick:s[19]||(s[19]=s=>t.state.showTeleport=!0)}),n(C,{style:{padding:"30px 50px"},teleport:"#app",visible:t.state.showTeleport,"onUpdate:visible":s[20]||(s[20]=s=>t.state.showTeleport=s)},{default:a((()=>[g])),_:1},8,["visible"])])}}}}));
