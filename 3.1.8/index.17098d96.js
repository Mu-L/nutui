const i=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};i();var l=(s,a)=>{for(const[n,o]of a)s[n]=o;return s};const p="modulepreload",u={},h="/nutui/",y=function(a,n){return!n||n.length===0?a():Promise.all(n.map(o=>{if(o=`${h}${o}`,o in u)return;u[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":p,e||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),e)return new Promise((c,m)=>{r.addEventListener("load",c),r.addEventListener("error",m)})})).then(()=>a())},N=[{name:"1.x",link:"/1x/"},{name:"2.x",link:"/2x/"},{name:"3.x",link:"/"},{name:"nutui-jdl",link:"/jdl/"},{name:"nutui-react",link:"https://github.com/jdf2e/nutui/tree/nutui-react"}],w=[{name:"intro,theme,start",cName:"\u6307\u5357",path:"#/intro"},{name:"component",cName:"\u7EC4\u4EF6",path:"#/button"},{name:"example",cName:"\u793A\u4F8B",path:"demo.html"},{name:"resource",cName:"\u8D44\u6E90",path:"#/resource"},{name:"joinus",cName:"\u52A0\u5165\u6211\u4EEC",path:"#/joinus"}],v={name:"\u6307\u5357",packages:[{name:"intro",cName:"\u4ECB\u7ECD",show:!0},{name:"start",cName:"\u5FEB\u901F\u4E0A\u624B",show:!0},{name:"starttaro",cName:"\u5C0F\u7A0B\u5E8F\u5F00\u53D1",show:!0},{name:"theme",cName:"\u4E3B\u9898\u5B9A\u5236",show:!0},{name:"international",cName:"\u56FD\u9645\u5316",show:!1},{name:"resource",cName:"\u8D44\u6E90",show:!0},{name:"contributing",cName:"\u8D21\u732E\u6307\u5357",path:"#/contributing",show:!0},{name:"https://github.com/jdf2e/nutui/releases",cName:"\u66F4\u65B0\u65E5\u5FD7",show:!0,isLink:!0}]},g=[{name:"\u57FA\u7840\u7EC4\u4EF6",enName:"base",packages:[{version:"3.0.0",name:"Avatar",taro:!0,sort:7,cName:"\u5934\u50CF",type:"component",show:!0,desc:"\u5934\u50CF",author:"ailululu"},{version:"3.0.0",name:"Button",taro:!0,sort:1,cName:"\u6309\u94AE",type:"component",show:!0,desc:"\u6309\u94AE\u7528\u4E8E\u89E6\u53D1\u4E00\u4E2A\u64CD\u4F5C\uFF0C\u5982\u63D0\u4EA4\u8868\u5355\u3002",author:"richard1015"},{version:"3.0.0",name:"Cell",taro:!0,sort:1,cName:"\u5355\u5143\u683C",type:"component",show:!0,desc:"\u5C55\u793A\u5217\u8868",author:"richard1015"},{version:"3.0.0",name:"CellGroup",sort:1,cName:"\u5355\u5143\u683C\u7EC4\u4EF6",type:"component",show:!1,taro:!0,exportEmpty:!0,desc:"\u5C55\u793A\u5206\u7EC4\u5217\u8868",author:"richard1015"},{version:"3.0.0",name:"Icon",taro:!0,sort:3,cName:"\u56FE\u6807",type:"component",show:!0,desc:"\u56FE\u6807",author:"richard1015"},{version:"3.0.0",name:"Price",taro:!0,sort:4,cName:"\u4EF7\u683C",type:"component",show:!0,desc:"\u4EF7\u683C\u7EC4\u4EF6",author:"ailululu"},{version:"3.0.0",name:"OverLay",taro:!0,type:"component",cName:"\u906E\u7F69\u5C42",desc:"\u521B\u5EFA\u4E00\u4E2A\u906E\u7F69\u5C42\uFF0C\u901A\u5E38\u7528\u4E8E\u963B\u6B62\u7528\u6237\u8FDB\u884C\u5176\u4ED6\u64CD\u4F5C",sort:14,show:!0,author:"szg2008"},{version:"3.0.0",name:"Divider",taro:!0,type:"component",cName:"\u5206\u5272\u7EBF",desc:"\u7528\u4E8E\u5C06\u5185\u5BB9\u5206\u9694\u4E3A\u591A\u4E2A\u533A\u57DF\u3002",sort:23,show:!0,author:"yangjinjun3"}]},{name:"\u5E03\u5C40\u7EC4\u4EF6",enName:"layout",packages:[{version:"3.0.0",name:"Layout",taro:!0,sort:4,cName:"\u5E03\u5C40",type:"component",show:!0,desc:"\u7B80\u4FBF\u5730\u521B\u5EFA\u5E03\u5C40",author:"undo"},{version:"3.0.0",name:"Col",sort:5,cName:"\u5E03\u5C40-Col",type:"component",show:!1,taro:!0,exportEmpty:!0,desc:"\u5E03\u5C40\u7EC4\u4EF6Col",author:"undo"},{version:"3.0.0",name:"Row",sort:6,cName:"\u5E03\u5C40-Row",type:"component",show:!1,taro:!0,exportEmpty:!0,desc:"\u5E03\u5C40\u7EC4\u4EF6Row",author:"undo"},{version:"3.0.0",name:"ImagePreview",type:"component",cName:"\u56FE\u7247\u9884\u89C8",desc:"\u56FE\u7247\u9884\u89C8",sort:4,show:!0,taro:!0,author:"zongyue3"}]},{name:"\u64CD\u4F5C\u53CD\u9988",enName:"feedback",packages:[{version:"3.0.0",name:"Swipe",taro:!0,type:"component",cName:"\u6ED1\u52A8\u624B\u52BF",desc:"\u5217\u8868\u9879\u5DE6\u6ED1\u5220\u9664\u573A\u666F\u4F7F\u7528",sort:4,show:!0,author:"richard1015"},{version:"3.0.0",name:"ActionSheet",taro:!0,sort:"1",cName:"\u52A8\u4F5C\u9762\u677F",type:"component",show:!0,desc:"\u5E95\u90E8\u5F39\u51FA\u52A8\u4F5C\u83DC\u5355\u9762\u677F",author:"zhangyufei"},{version:"3.0.0",name:"BackTop",taro:!0,tarodoc:!0,sort:"1",cName:"\u8FD4\u56DE\u9876\u90E8",type:"component",show:!0,desc:"\u8F83\u957F\u9875\u9762\u5FEB\u6377\u8FD4\u56DE\u9876\u90E8",author:"liqiong43"},{version:"3.0.0",name:"Collapse",taro:!0,sort:2,cName:"\u6298\u53E0\u9762\u677F",type:"component",show:!0,desc:"\u6298\u53E0\u9762\u677F",author:"Ymm0008"},{version:"3.0.0",name:"CollapseItem",taro:!0,sort:3,cName:"\u6298\u53E0\u9762\u677F-item",type:"component",show:!1,exportEmpty:!0,desc:"\u6298\u53E0\u9762\u677F-item",author:"Ymm0008"},{version:"3.0.0",name:"Drag",taro:!0,tarodoc:!0,type:"component",cName:"\u62D6\u62FD",desc:"\u62D6\u62FD\u7EC4\u4EF6",sort:16,show:!0,author:"Drjingfubo"},{version:"3.0.0",name:"Dialog",taro:!0,tarodoc:!0,type:"methods",cName:"\u5BF9\u8BDD\u6846",desc:"\u6A21\u6001\u5BF9\u8BDD\u6846\uFF0C\u5728\u6D6E\u5C42\u4E2D\u663E\u793A\uFF0C\u5F15\u5BFC\u7528\u6237\u8FDB\u884C\u76F8\u5173\u64CD\u4F5C\uFF0C\u652F\u6301\u56FE\u7247\u5BF9\u8BDD\u6846\u3002",sort:8,show:!0,author:"dsj"},{version:"3.0.0",name:"InfiniteLoading",taro:!0,tarodoc:!0,type:"component",cName:"\u6EDA\u52A8\u52A0\u8F7D",desc:"\u5217\u8868\u6EDA\u52A8\u5230\u5E95\u90E8\u81EA\u52A8\u52A0\u8F7D\u66F4\u591A\u6570\u636E",sort:15,show:!0,author:"yangxiaolu"},{version:"3.0.0",name:"Notify",tarodoc:!0,taro:!0,type:"methods",cName:"\u6D88\u606F\u901A\u77E5",desc:"\u5728\u9875\u9762\u9876\u90E8\u5C55\u793A\u6D88\u606F\u63D0\u793A\uFF0C\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F",sort:4,show:!0,author:"wangyue217"},{version:"3.0.0",name:"Range",taro:!0,type:"component",cName:"\u533A\u95F4\u9009\u62E9\u5668",desc:"\u6ED1\u52A8\u8F93\u5165\u6761\uFF0C\u7528\u4E8E\u5728\u7ED9\u5B9A\u7684\u8303\u56F4\u5185\u9009\u62E9\u4E00\u4E2A\u503C\u3002",sort:16,show:!0,author:"zy19940510"},{version:"3.0.0",name:"PullRefresh",type:"component",cName:"\u4E0B\u62C9\u5237\u65B0",desc:"\u4E0B\u62C9\u5237\u65B0",sort:16,show:!1,author:"yangxiaolu3"},{version:"3.0.0",name:"Video",type:"component",cName:"\u89C6\u9891\u64AD\u653E\u5668",desc:"\u89C6\u9891\u64AD\u653E\u7EC4\u4EF6",sort:20,taro:!1,show:!0,tarodoc:!0,author:"zy19940510"},{version:"3.0.0",name:"Popup",taro:!0,sort:8,cName:"\u5F39\u51FA\u5C42",type:"component",show:!0,desc:"\u5F39\u51FA\u5C42\u5BB9\u5668\uFF0C\u7528\u4E8E\u5C55\u793A\u5F39\u7A97\u3001\u4FE1\u606F\u63D0\u793A\u7B49\u5185\u5BB9\uFF0C\u652F\u6301\u591A\u4E2A\u5F39\u51FA\u5C42\u53E0\u52A0\u5C55\u793A",author:"szg2008"},{version:"3.0.0",name:"Steps",taro:!0,sort:17,cName:"\u6B65\u9AA4\u6761",type:"component",show:!0,desc:"\u6B65\u9AA4\u6761",author:"ailululu"},{version:"3.0.0",name:"Step",sort:17,cName:"\u6B65\u9AA4\u6761\u5B50\u7EC4\u4EF6",type:"component",show:!1,taro:!0,exportEmpty:!0,desc:"\u6B65\u9AA4\u6761\u5B50\u7EC4\u4EF6",author:"ailululu"},{version:"3.0.0",name:"Swiper",taro:!0,tarodoc:!0,sort:6,cName:"\u8F6E\u64AD",type:"component",show:!0,desc:"\u8F6E\u64AD",author:"suzigang"},{version:"3.0.0",name:"SwiperItem",sort:6,cName:"\u8F6E\u64AD\u56FE\u5B50\u7EC4\u4EF6",type:"component",show:!1,taro:!0,exportEmpty:!0,desc:"\u8F6E\u64AD\u56FE\u5B50\u7EC4\u4EF6",author:"suzigang"},{version:"3.0.0",name:"Switch",taro:!0,type:"component",cName:"\u5F00\u5173",desc:"\u7528\u6765\u6253\u5F00\u6216\u5173\u95ED\u9009\u9879",sort:3,show:!0,author:"zongyue3"},{version:"3.0.0",name:"Toast",taro:!0,tarodoc:!0,sort:"1",cName:"\u5410\u53F8",type:"methods",show:!0,desc:"\u8F7B\u63D0\u793A",author:"undo"},{version:"3.0.0",name:"Progress",taro:!0,sort:8,cName:"\u8FDB\u5EA6\u6761",type:"component",show:!0,desc:"\u7528\u6765\u5C55\u793A\u8FDB\u5EA6",author:"Drjingubo"},{version:"3.0.0",name:"CircleProgress",taro:!0,sort:8,cName:"\u73AF\u5F62\u8FDB\u5EA6\u6761",type:"component",show:!0,desc:"\u7528\u6765\u5C55\u793A\u8FDB\u5EA6",author:"Drjingubo"},{version:"3.0.0",name:"NoticeBar",type:"component",cName:"\u516C\u544A\u680F",desc:"\u7528\u4E8E\u5FAA\u73AF\u64AD\u653E\u5C55\u793A\u4E00\u7EC4\u6D88\u606F\u901A\u77E5",sort:8,show:!0,taro:!0,author:"yangxiaolu"}]},{name:"\u5BFC\u822A\u7EC4\u4EF6",enName:"nav",packages:[{version:"3.0.0",name:"Navbar",taro:!0,sort:3,cName:"\u5934\u90E8\u5BFC\u822A",type:"componment",show:!0,desc:"\u5934\u90E8\u5BFC\u822A",author:"liqiong43"},{version:"3.0.0",name:"FixedNav",type:"component",cName:"\u60AC\u6D6E\u5BFC\u822A",desc:"\u53EF\u62D6\u62FD\u7684\u60AC\u6D6E\u5BFC\u822A",taro:!0,sort:9,show:!0,author:"richard1015"},{version:"3.0.0",name:"Tab",sort:1,cName:"\u6807\u7B7E\u7EC4\u4EF6",type:"component",show:!1,exportEmpty:!0,taro:!1,desc:"\u6807\u7B7E\u7EC4\u4EF6",author:"zhenyulei"},{name:"TabPanel",sort:2,cName:"\u6807\u7B7E\u7EC4\u4EF6",type:"component",show:!1,taro:!0,exportEmpty:!0,desc:"\u6807\u7B7E\u7EC4\u4EF6",author:"zhenyulei"},{version:"3.0.0",name:"Menu",sort:2,cName:"\u83DC\u5355\u7EC4\u4EF6",type:"component",show:!1,desc:"\u4E0B\u62C9\u83DC\u5355\u7EC4\u4EF6",author:"vickyYE"},{version:"3.0.0",name:"MenuItem",sort:2,cName:"\u83DC\u5355\u7EC4\u4EF6",type:"component",taro:!0,exportEmpty:!0,show:!1,desc:"\u4E0B\u62C9\u83DC\u5355\u7EC4\u4EF6",author:"vickyYE"},{version:"3.0.0",name:"Tabbar",taro:!0,sort:2,cName:"\u6807\u7B7E\u680F",type:"component",show:!0,desc:"\u6807\u7B7E\u680F",author:"Drjingfubo"},{version:"3.0.0",name:"TabbarItem",sort:2,cName:"\u6807\u7B7E\u680F\u5B50\u7EC4\u4EF6",type:"component",show:!1,taro:!0,exportEmpty:!0,desc:"\u6807\u7B7E\u680F\u5B50\u7EC4\u4EF6",author:"Drjingfubo"},{version:"3.0.0",name:"Elevator",type:"component",cName:"\u7535\u68AF\u697C\u5C42",desc:"\u7528\u4E8E\u5217\u8868\u5FEB\u901F\u5B9A\u4F4D\u4EE5\u53CA\u7D22\u5F15\u7684\u663E\u793A",sort:5,show:!0,taro:!0,author:"szg2008"},{version:"3.0.0",name:"Pagination",type:"component",cName:"\u5206\u9875",desc:"\u5F53\u6570\u636E\u91CF\u8F83\u591A\u65F6\uFF0C\u91C7\u7528\u5206\u9875\u7684\u5F62\u5F0F\u5206\u9694\u957F\u5217\u8868\u3002",sort:10,show:!0,taro:!0,author:"yushuang24"},{version:"3.1.9",name:"Tabs",type:"component",cName:"\u9009\u9879\u5361\u5207\u6362",desc:"\u5E38\u7528\u4E8E\u5E73\u7EA7\u533A\u57DF\u5927\u5757\u5185\u5BB9\u7684\u7684\u6536\u7EB3\u548C\u5C55\u73B0\uFF0C\u652F\u6301\u5185\u5D4C\u6807\u7B7E\u5F62\u5F0F\u548C\u6E32\u67D3\u5FAA\u73AF\u6570\u636E\u5F62\u5F0F",sort:11,show:!0,taro:!0,author:"richard1015"},{version:"3.1.9",name:"TabPane",type:"component",cName:"\u9009\u9879\u5361\u5B50\u7EC4\u4EF6",desc:"",sort:12,exportEmpty:!0,taro:!0,show:!1,author:"richard1015"}]},{name:"\u6570\u636E\u5F55\u5165",enName:"dentry",packages:[{version:"3.0.0",taro:!0,name:"Calendar",type:"component",cName:"\u65E5\u5386",desc:"\u65E5\u5386\u7EC4\u4EF6",sort:5,show:!0,author:"songchenglin1"},{version:"3.0.0",name:"Checkbox",taro:!0,sort:5,cName:"\u590D\u9009\u6309\u94AE",type:"component",show:!0,desc:"\u590D\u9009\u6309\u94AE",author:"Ymm0008"},{version:"3.0.0",name:"CheckboxGroup",type:"component",cName:"\u591A\u9009\u6309\u94AE\u7EC4",desc:"\u591A\u9009\u6309\u94AE\u7EC4",sort:11,show:!1,taro:!0,exportEmpty:!0,author:"Ymm0008"},{version:"3.0.0",name:"DatePicker",taro:!0,tarodoc:!0,type:"component",cName:"\u65E5\u671F\u9009\u62E9\u5668",desc:"\u63D0\u4F9B\u591A\u4E2A\u9009\u578B\u96C6\u5408\u4F9B\u7528\u6237\u9009\u62E9,\u652F\u6301\u5355\u5217\u9009\u62E9\u548C\u591A\u5217\u7EA7\u8054,\u901A\u5E38\u4E0E\u5F39\u51FA\u5C42\u914D\u5408\u4F7F\u7528",sort:5,show:!0,author:"yangkaixuan"},{version:"3.0.0",name:"InputNumber",taro:!0,sort:1,cName:"\u6570\u5B57\u8F93\u5165\u6846",type:"component",show:!0,desc:"\u6570\u5B57\u8F93\u5165\u6846\u7EC4\u4EF6",author:"szg2008"},{version:"3.0.0",name:"Input",taro:!0,sort:2,cName:"\u8F93\u5165\u6846",type:"component",show:!0,desc:"\u8F93\u5165\u6846\u7EC4\u4EF6",author:"gxx158"},{version:"3.0.0",name:"Radio",taro:!0,type:"component",cName:"\u5355\u9009\u6309\u94AE",desc:"\u5355\u9009\u6309\u94AE",sort:9,show:!0,author:"Ymm0008"},{version:"3.0.0",name:"RadioGroup",type:"component",cName:"\u5355\u9009\u6309\u94AE\u7EC4",desc:"\u5355\u9009\u6309\u94AE\u7EC4",sort:10,taro:!0,exportEmpty:!0,show:!1,author:"Ymm0008"},{version:"3.0.0",name:"Rate",taro:!0,sort:4,cName:"\u8BC4\u5206",type:"component",show:!0,desc:"\u8BC4\u5206\u7EC4\u4EF6",author:"undo"},{version:"3.0.0",name:"CalendarItem",type:"component",cName:"\u65E5\u5386\u5B50\u7EC4\u4EF6",desc:"\u65E5\u5386\u5B50\u7EC4\u4EF6",sort:5,show:!1,author:"songchenglin1"},{version:"3.0.0",name:"Picker",taro:!0,tarodoc:!0,type:"component",cName:"\u9009\u62E9\u5668",desc:"\u63D0\u4F9B\u591A\u4E2A\u9009\u578B\u96C6\u5408\u4F9B\u7528\u6237\u9009\u62E9,\u652F\u6301\u5355\u5217\u9009\u62E9\u548C\u591A\u5217\u7EA7\u8054,\u901A\u5E38\u4E0E\u5F39\u51FA\u5C42\u914D\u5408\u4F7F\u7528",sort:5,show:!0,author:"yangkaixuan"},{version:"3.0.0",name:"ShortPassword",taro:!0,type:"component",cName:"\u77ED\u5BC6\u7801",desc:"\u77ED\u5BC6\u7801\u7EC4\u4EF6",sort:6,show:!0,author:"Drjingfubo"},{version:"3.0.0",taro:!0,name:"TextArea",type:"component",cName:"\u6587\u672C\u57DF",desc:"\u6587\u672C\u8F93\u5165",sort:7,show:!0,author:"gx"},{version:"3.0.0",name:"Uploader",taro:!0,tarodoc:!0,sort:2,cName:"\u4E0A\u4F20",type:"component",show:!0,desc:"\u4E0A\u4F20\u6587\u4EF6\u3001\u56FE\u7247",author:"richard1015"},{version:"3.0.0",name:"CountUp",taro:!0,tarodoc:!0,sort:12,cName:"\u6570\u5B57\u6EDA\u52A8",type:"component",show:!0,desc:"\u6570\u5B57\u6EDA\u52A8\u7EC4\u4EF6\uFF0C\u52A8\u6001\u53D8\u5316\u5C55\u793A",author:"Ymm0008"},{version:"3.0.0",name:"NumberKeyboard",tarodoc:!0,taro:!0,sort:13,cName:"\u6570\u5B57\u952E\u76D8",type:"component",show:!0,desc:"\u865A\u62DF\u6570\u5B57\u952E\u76D8",author:"Drjingfubo"},{name:"CountDown",type:"component",cName:"\u5012\u8BA1\u65F6",desc:"\u5012\u8BA1\u65F6",sort:16,show:!0,taro:!0,author:"yangxiaolu"},{version:"3.0.0",name:"Badge",type:"component",cName:"\u5FBD\u6807",desc:"\u5FBD\u6807",sort:17,show:!0,taro:!0,author:"liqiong"},{version:"3.0.0",name:"Tag",type:"component",cName:"\u6807\u7B7E",desc:"\u6807\u7B7E",sort:18,show:!0,taro:!0,author:"liqiong"},{version:"3.0.0",name:"Popover",type:"component",cName:"\u6C14\u6CE1\u5F39\u51FA\u6846",desc:"\u6C14\u6CE1\u5F39\u51FA\u6846",sort:19,show:!0,taro:!0,author:"liqiong"}]},{name:"\u7279\u8272\u7EC4\u4EF6",enName:"business",packages:[{version:"3.0.0",taro:!0,name:"Address",type:"component",cName:"\u5730\u5740",desc:"\u5730\u5740\u7EC4\u4EF6",sort:1,show:!0,author:"yangxiaolu3"},{version:"3.0.0",taro:!0,name:"Barrage",type:"component",cName:"\u5F39\u5E55",desc:"\u7528\u4E8E\u89C6\u9891\u5F39\u5E55\u7B49\u5C55\u793A",sort:2,show:!0,author:"Ymm0008"},{version:"3.0.0",taro:!0,tarodoc:!0,name:"Signature",type:"component",cName:"\u7B7E\u540D",desc:"\u7B7E\u540D\u7EC4\u4EF6",sort:3,show:!0,author:"guoxiaoxiao"},{version:"3.0.0",taro:!0,name:"TimeSelect",type:"component",cName:"\u914D\u9001\u65F6\u95F4",desc:"\u914D\u9001\u65F6\u95F4",sort:4,show:!0,author:"szg2008"},{version:"3.0.0",taro:!0,name:"TimePannel",type:"component",cName:"\u914D\u9001\u65F6\u95F4",desc:"\u914D\u9001\u65F6\u95F4",sort:5,show:!1,exportEmpty:!0,author:"szg2008"},{version:"3.0.0",taro:!0,name:"TimeDetail",type:"component",cName:"\u914D\u9001\u65F6\u95F4",desc:"\u914D\u9001\u65F6\u95F4",sort:6,show:!1,exportEmpty:!0,author:"szg2008"}]}],d=navigator.userAgent.toLowerCase(),f=/ios|iphone|ipod|ipad|android/.test(d);export{l as _,y as a,v as d,w as h,f as i,g as n,N as v};
