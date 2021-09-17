var t=Object.defineProperty,e=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,l,a)=>l in e?t(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a;"undefined"!=typeof require&&require;import{c as i}from"./mobile.f2f524e1.js";import{a as o,m as u,A as d,r as f,o as p,e as b,j as r,k as _,c as h,F as m,i as y,g,t as T,s as j,l as w}from"./vendor.60feaabb.js";import"./index.f7d754e2.js";const{createDemo:v}=i("tab");var O=v({props:{},setup(){const t=o({editList:[{title:"标签一"},{title:"标签二"}]}),i=u(1);return f=((t,e)=>{for(var l in e||(e={}))n.call(e,l)&&c(t,l,e[l]);if(a)for(var l of a(e))s.call(e,l)&&c(t,l,e[l]);return t})({},d(t)),e(f,l({defaultIndexs:i,changeList:function(){t.editList.push({title:"标签"+t.editList.length})},switchTab:function(t){console.log(t)}}));var f}});const x={class:"demo full"},L=g("h2",null,"基础用法，默认tab-title宽度均分相等",-1),k=g("p",{class:"content"},"这里是页签全部内容",-1),P=g("p",{class:"content"},"这里是页签待付款内容",-1),I=g("p",{class:"content"},"这里是页签待收获内容",-1),S=g("p",{class:"content"},"这里是页签已完成内容",-1),q=g("h2",null,"defaultIndex设置默认显示tab,iconType为half时切换选中icon样式",-1),C=g("h2",null,"switchTab监听切换tab返回事件",-1),D=g("p",{class:"content"},"这里是页签全部内容",-1),A=g("p",{class:"content"},"这里是页签待付款内容",-1),E=g("p",{class:"content"},"这里是页签待收获内容",-1),F=g("p",{class:"content"},"这里是页签已完成内容",-1),z=g("h2",null," animatedTime 开启切换标签内容时的转场动画时间",-1),B=g("p",{class:"content"},"这里是页签全部内容",-1),G=g("p",{class:"content"},"这里是页签待付款内容",-1),H=g("p",{class:"content"},"这里是页签待收获内容",-1),J=g("p",{class:"content"},"这里是页签已完成内容",-1),K=g("h2",null," 禁止tab内容滑动",-1),M=g("p",{class:"content"},"这里是页签全部内容",-1),N=g("p",{class:"content"},"这里是页签待付款内容",-1),Q=g("p",{class:"content"},"这里是页签待收获内容",-1),R=g("p",{class:"content"},"这里是页签已完成内容",-1),U=g("h2",null,' 设置scrollType="scroll"，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。',-1),V=g("p",{class:"content"},"这里是页签全部内容",-1),W=g("p",{class:"content"},"这里是页签待付款内容",-1),X=g("p",{class:"content"},"这里是页签待收获内容",-1),Y=g("p",{class:"content"},"这里是页签已完成内容",-1),Z=g("p",{class:"content"},"这里是页签已取消内容",-1),$=g("p",{class:"content"},"这里是页签待评价内容",-1),tt=g("h2",null,"设置slot:header可以自定义标签",-1),et=g("p",{class:"content"},"这里是页签全部内容",-1),lt=g("p",{class:"content"},"这里是页签待付款内容",-1),at=g("p",{class:"content"},"这里是页签待收获内容",-1),nt=g("p",{class:"content"},"这里是页签已完成内容",-1),st=g("p",{class:"content"},"这里是页签已取消内容",-1),ct=g("p",{class:"content"},"这里是页签待评价内容",-1),it=g("h2",null,"左右tab布局",-1),ot=g("p",{class:"content"},"这里是页签一内容",-1),ut=g("p",{class:"content"},"这里是页签二内容",-1),dt=g("p",{class:"content"},"这里是页签三内容",-1),ft=g("p",{class:"content"},"这里是页签四内容",-1),pt=g("p",{class:"content"},"这里是页签五内容",-1),bt=g("p",{class:"content"},"这里是页签六内容",-1),rt=g("p",{class:"content"},"这里是页签七内容",-1),_t=g("h2",null,"异步操作",-1),ht={class:"content"},mt=w("改变数据");O.render=function(t,e,l,a,n,s){const c=f("nut-tab-panel"),i=f("nut-tab"),o=f("nut-icon"),u=f("nut-button");return p(),b("div",x,[L,r(i,null,{default:_((()=>[r(c,{"tab-title":"全部"},{default:_((()=>[k])),_:1}),r(c,{"tab-title":"待付款"},{default:_((()=>[P])),_:1}),r(c,{"tab-title":"待收获"},{default:_((()=>[I])),_:1}),r(c,{"tab-title":"已完成"},{default:_((()=>[S])),_:1})])),_:1}),q,C,r(i,{"default-index":t.defaultIndexs,onSwitchTab:t.switchTab},{default:_((()=>[r(c,{"tab-title":"全部"},{default:_((()=>[D])),_:1}),r(c,{"tab-title":"待付款"},{default:_((()=>[A])),_:1}),r(c,{"tab-title":"待收获"},{default:_((()=>[E])),_:1}),r(c,{"tab-title":"已完成"},{default:_((()=>[F])),_:1})])),_:1},8,["default-index","onSwitchTab"]),z,r(i,{"animated-time":500},{default:_((()=>[r(c,{"tab-title":"全部"},{default:_((()=>[B])),_:1}),r(c,{"tab-title":"待付款"},{default:_((()=>[G])),_:1}),r(c,{"tab-title":"待收获"},{default:_((()=>[H])),_:1}),r(c,{"tab-title":"已完成"},{default:_((()=>[J])),_:1})])),_:1}),K,r(i,{"no-swiping":!0},{default:_((()=>[r(c,{"tab-title":"全部"},{default:_((()=>[M])),_:1}),r(c,{"tab-title":"待付款"},{default:_((()=>[N])),_:1}),r(c,{"tab-title":"待收获"},{default:_((()=>[Q])),_:1}),r(c,{"tab-title":"已完成"},{default:_((()=>[R])),_:1})])),_:1}),U,r(i,{"animated-time":500,scrollType:"scroll"},{default:_((()=>[r(c,{"tab-title":"全部"},{default:_((()=>[V])),_:1}),r(c,{"tab-title":"待付款"},{default:_((()=>[W])),_:1}),r(c,{"tab-title":"待收获"},{default:_((()=>[X])),_:1}),r(c,{"tab-title":"已完成"},{default:_((()=>[Y])),_:1}),r(c,{"tab-title":"已取消"},{default:_((()=>[Z])),_:1}),r(c,{"tab-title":"待评价"},{default:_((()=>[$])),_:1})])),_:1}),tt,r(i,{scrollType:"scroll"},{default:_((()=>[r(c,{"tab-title":"全部"},{header:_((()=>[r(o,{name:"dongdong"})])),default:_((()=>[et])),_:1}),r(c,{"tab-title":"待付款"},{default:_((()=>[lt])),_:1}),r(c,{"tab-title":"待收获"},{default:_((()=>[at])),_:1}),r(c,{"tab-title":"已完成"},{default:_((()=>[nt])),_:1}),r(c,{"tab-title":"已取消"},{default:_((()=>[st])),_:1}),r(c,{"tab-title":"待评价"},{default:_((()=>[ct])),_:1})])),_:1}),it,r(i,{direction:"vertical","animated-time":500,"default-index":2,scrollType:"scroll","icon-type":"half"},{default:_((()=>[r(c,{"tab-title":"页签一"},{default:_((()=>[ot])),_:1}),r(c,{"tab-title":"页签二"},{default:_((()=>[ut])),_:1}),r(c,{"tab-title":"页签三"},{default:_((()=>[dt])),_:1}),r(c,{"tab-title":"页签四"},{default:_((()=>[ft])),_:1}),r(c,{"tab-title":"页签五"},{default:_((()=>[pt])),_:1}),r(c,{"tab-title":"页签六"},{default:_((()=>[bt])),_:1}),r(c,{"tab-title":"页签七"},{default:_((()=>[rt])),_:1})])),_:1}),_t,t.editList.length>0?(p(),h(i,{key:0,"animated-time":500},{default:_((()=>[(p(!0),b(m,null,y(t.editList,((t,e)=>(p(),h(c,{"tab-title":t.title,key:e},{default:_((()=>[g("p",ht,"这里是页签"+T(e)+"内容",1)])),_:2},1032,["tab-title"])))),128))])),_:1})):j("",!0),r(u,{type:"primary",onClick:t.changeList},{default:_((()=>[mt])),_:1},8,["onClick"])])};export{O as default};
