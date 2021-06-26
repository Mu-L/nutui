let e;!function(e=".",o="__import__"){try{self[o]=new Function("u","return import(u)")}catch(t){const a=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[o]=e=>new Promise(((t,r)=>{const s=new URL(e,a);if(self[o].moduleMap[s])return t(self[o].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${o}.moduleMap['${s}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){r(new Error(`Failed to import: ${e}`)),n(m)},onload(){t(self[o].moduleMap[s]),n(m)}});document.head.appendChild(m)})),self[o].moduleMap={}}}("/nutui/assets/");const o={},t=function(t,a){if(!a)return t();if(void 0===e){const o=document.createElement("link").relList;e=o&&o.supports&&o.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(a.map((t=>{if(t in o)return;o[t]=!0;const a=t.endsWith(".css"),n=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${n}`))return;const r=document.createElement("link");return r.rel=a?"stylesheet":e,a||(r.as="script",r.crossOrigin=""),r.href=t,document.head.appendChild(r),a?new Promise(((e,o)=>{r.addEventListener("load",e),r.addEventListener("error",o)})):void 0}))).then((()=>t()))},a=[{name:"1.x",link:"/1x/"},{name:"2.x",link:"/"},{name:"3.x",link:"/3x/"},{name:"nutui-jdl",link:"/jdl/"},{name:"nutui-react",link:"https://github.com/jdf2e/nutui/tree/nutui-react"}],n=[{name:"guide",cName:"指南",path:"/intro"},{name:"intro",cName:"组件",path:"/intro"},{name:"example",cName:"示例",path:"/"},{name:"resource",cName:"资源",path:"/resource"}],r={name:"指南",packages:[{name:"intro",cName:"介绍",show:!0},{name:"start",cName:"快速上手",show:!0},{name:"theme",cName:"主题定制",show:!0},{name:"international",cName:"国际化",show:!1},{name:"resource",cName:"资源",show:!0},{name:"https://github.com/jdf2e/nutui/releases",cName:"更新日志",show:!0,isLink:!0}]},s=[{name:"布局组件",enName:"layout",packages:[{name:"Button",taro:!0,sort:1,cName:"按钮",type:"component",show:!0,desc:"按钮用于触发一个操作，如提交表单。",author:"richard1015"},{name:"Collapse",taro:!0,sort:2,cName:"折叠面板",type:"component",show:!0,desc:"折叠面板",author:"Ymm0008"},{name:"CollapseItem",taro:!0,sort:3,cName:"折叠面板-item",type:"component",show:!1,desc:"折叠面板-item",author:"Ymm0008"},{name:"Layout",taro:!0,sort:4,cName:"布局",type:"component",show:!0,desc:"简便地创建布局",author:"undo"},{name:"Col",sort:5,cName:"布局-Col",type:"component",show:!1,desc:"布局组件Col",author:"undo"},{name:"Row",sort:6,cName:"布局-Row",type:"component",show:!1,desc:"布局组件Row",author:"undo"}]},{name:"操作反馈",enName:"feedback",packages:[{name:"BackTop",taro:!0,tarodoc:!0,sort:"1",cName:"返回顶部",type:"component",show:!0,desc:"较长页面快捷返回顶部",author:"liqiong43"},{name:"ActionSheet",taro:!0,sort:"1",cName:"动作面板",type:"component",show:!0,desc:"底部弹出动作菜单面板",author:"zhangyufei"},{name:"Toast",taro:!0,tarodoc:!0,sort:"1",cName:"吐司",type:"methods",show:!0,desc:"轻提示",author:"undo"},{version:"3.0.0",name:"Notify",tarodoc:!0,taro:!0,type:"methods",cName:"消息通知",desc:"在页面顶部展示消息提示，支持函数调用和组件调用两种方式",sort:4,show:!0,author:"wangyue217"},{version:"3.0.0",name:"Picker",taro:!0,tarodoc:!0,type:"component",cName:"选择器",desc:"提供多个选型集合供用户选择,支持单列选择和多列级联,通常与弹出层配合使用",sort:5,show:!0,author:"yangkaixuan"},{version:"3.0.0",name:"DatePicker",type:"component",cName:"日期选择器",desc:"提供多个选型集合供用户选择,支持单列选择和多列级联,通常与弹出层配合使用",sort:5,show:!0,author:"yangkaixuan"}]},{name:"基础组件",enName:"base",packages:[{name:"Temp",sort:1,cName:"模板组件",type:"component",show:!1,desc:"组件模板示例",author:"richard1015"},{name:"Cell",taro:!0,tarodoc:!0,sort:1,cName:"单元格",type:"component",show:!0,desc:"展示列表",author:"richard1015"},{name:"CellGroup",sort:1,cName:"单元格组件",type:"component",show:!1,desc:"展示分组列表",author:"richard1015"},{name:"Uploader",taro:!0,tarodoc:!0,sort:2,cName:"上传",type:"component",show:!0,desc:"上传文件、图片",author:"richard1015"},{name:"Icon",taro:!0,tarodoc:!0,sort:3,cName:"图标",type:"component",show:!0,desc:"图标",author:"richard1015"},{name:"Price",taro:!0,sort:4,cName:"价格",type:"component",show:!0,desc:"价格组件",author:"ailululu"},{name:"Checkbox",taro:!0,sort:5,cName:"复选按钮",type:"component",show:!0,desc:"复选按钮",author:"Ymm0008"},{name:"Swiper",taro:!0,tarodoc:!0,sort:6,cName:"轮播",type:"component",show:!0,desc:"轮播",author:"suzigang"},{name:"SwiperItem",sort:6,cName:"轮播图子组件",type:"component",show:!1,desc:"轮播图子组件",author:"suzigang"},{name:"Avatar",taro:!0,sort:7,cName:"头像",type:"component",show:!0,desc:"头像",author:"ailululu"},{name:"Popup",taro:!0,sort:8,cName:"弹出层",type:"component",show:!0,desc:"弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示",author:"szg2008",version:"3.0.0"},{name:"Dialog",taro:!0,tarodoc:!0,type:"methods",cName:"对话框",desc:"模态对话框，在浮层中显示，引导用户进行相关操作，支持图片对话框。",sort:8,show:!0,author:"dsj"},{version:"3.0.0",name:"Radio",taro:!0,type:"component",cName:"单选按钮",desc:"单选按钮",sort:9,show:!0,author:"Ymm0008"},{version:"3.0.0",name:"RadioGroup",type:"component",cName:"单选按钮组",desc:"单选按钮组",sort:10,show:!1,author:"Ymm0008"},{version:"3.0.0",name:"CheckboxGroup",type:"component",cName:"多选按钮组",desc:"多选按钮组",sort:11,show:!1,author:"Ymm0008"},{version:"3.0.0",name:"OverLay",taro:!0,type:"component",cName:"遮罩层",desc:"创建一个遮罩层，通常用于阻止用户进行其他操作",sort:14,show:!0,author:"szg2008"},{version:"3.0.0",name:"InfiniteLoading",taro:!0,tarodoc:!0,type:"component",cName:"滚动加载",desc:"列表滚动到底部自动加载更多数据",sort:15,show:!0,author:"yangxiaolu"},{version:"3.0.0",name:"Range",taro:!0,tarodoc:!0,type:"component",cName:"区间选择器",desc:"滑动输入条，用于在给定的范围内选择一个值。",sort:16,show:!0,author:"zy19940510"},{name:"PullRefresh",type:"component",cName:"下拉刷新",desc:"下拉刷新",sort:16,show:!1,author:"yangxiaolu3"},{name:"Drag",taro:!0,tarodoc:!0,type:"component",cName:"拖拽",desc:"拖拽组件",sort:16,show:!0,author:"Drjingfubo"},{version:"3.0.0",name:"Video",type:"component",cName:"视频播放器",desc:"视频播放组件",sort:20,show:!1,author:"zy19940510"},{name:"Steps",taro:!0,sort:17,cName:"步骤条",type:"component",show:!0,desc:"步骤条",author:"ailululu"},{name:"Step",sort:17,cName:"步骤条子组件",type:"component",show:!1,desc:"步骤条子组件",author:"ailululu"}]},{name:"导航组件",enName:"nav",packages:[{name:"Navbar",taro:!0,sort:3,cName:"头部导航",type:"componment",show:!0,desc:"头部导航",author:"liqiong43"},{name:"Tab",sort:1,cName:"标签组件",type:"component",show:!1,desc:"标签组件",author:"zhenyulei"},{name:"Menu",sort:2,cName:"菜单组件",type:"component",show:!1,desc:"下拉菜单组件",author:"vickyYE"},{name:"MenuItem",sort:2,cName:"菜单组件",type:"component",show:!1,desc:"下拉菜单组件",author:"vickyYE"},{name:"Tabbar",taro:!0,sort:2,cName:"标签栏",type:"component",show:!0,desc:"标签栏",author:"Drjingfubo"},{name:"Tabbaritem",sort:2,cName:"标签栏子组件",type:"component",show:!1,desc:"标签栏子组件",author:"Drjingfubo"},{version:"3.0.0",name:"NoticeBar",type:"component",cName:"公告栏",desc:"用于循环播放展示一组消息通知",sort:5,show:!1,author:"wangyue92"}]},{name:"数据录入",enName:"dentry",packages:[{name:"InputNumber",taro:!0,sort:1,cName:"数字输入框",type:"component",show:!0,desc:"数字输入框组件",author:"szg2008"},{name:"Input",taro:!0,tarodoc:!0,sort:2,cName:"输入框",type:"component",show:!0,desc:"输入框组件",author:"gxx158"},{version:"3.0.0",name:"Switch",taro:!0,type:"component",cName:"开关",desc:"用来打开或关闭选项",sort:3,show:!0,author:"zongyue3"},{version:"3.0.0",name:"Rate",taro:!0,tarodoc:!0,sort:4,cName:"评分",type:"component",show:!0,desc:"评分组件",author:"undo"},{version:"3.0.0",taro:!0,tarodoc:!0,name:"Calendar",type:"component",cName:"日历",desc:"日历组件",sort:5,show:!0,author:"songchenglin1"},{version:"3.0.0",name:"CalendarItem",type:"component",cName:"日历子组件",desc:"日历子组件",sort:5,show:!1,author:"songchenglin1"},{version:"3.0.0",name:"ShortPassword",taro:!0,type:"component",cName:"短密码",desc:"短密码组件",sort:6,show:!0,author:"Drjingfubo"},{version:"3.0.0",taro:!0,tarodoc:!0,name:"TextArea",type:"component",cName:"文本域",desc:"文本输入",sort:7,show:!0,author:"gx"}]},{name:"业务组件",enName:"business",packages:[{version:"3.0.0",taro:!0,name:"Address",type:"component",cName:"地址",desc:"地址组件",sort:1,show:!0,author:"yangxiaolu3"}]}];const c=navigator.userAgent.toLowerCase(),m=/ios|iphone|ipod|ipad|android/.test(c);export{t as _,r as d,n as h,m as i,s as n,a as v};
