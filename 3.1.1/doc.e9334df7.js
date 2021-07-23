var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,n=(e,t)=>{for(var s in t||(t={}))c.call(t,s)&&r(e,s,t[s]);if(a)for(var s of a(t))o.call(t,s)&&r(e,s,t[s]);return e},i=(e,a)=>t(e,s(a));import{n as d,h as l,v as m,d as u,_,i as p}from"./index.24e285d8.js";import{d as h,r as v,c as g,o as f,a as E,b as k,w as b,e as A,v as I,f as V,g as j,F as D,h as L,i as w,j as U,t as O,k as P,l as y,m as T,T as R,n as C,p as x,u as S,q as N,s as B,x as H,y as F,z as Y,A as W,B as X,C as G,D as K,E as J,G as M,H as z}from"./vendor.0d0a34e4.js";var Q=h({name:"app"});Q.render=function(e,t,s,a,c,o){const r=v("router-view");return f(),g(r)};const q=h({name:"search",setup(){const e=E({nav:d,navList:[],searchIndex:0,searchList:[],searchVal:"",searchCName:""});k((()=>{d.forEach((t=>{t.packages.forEach((t=>{e.navList.push(t)}))}))})),b((()=>e.searchVal),(t=>{t?e.searchList=e.navList.filter((e=>{if(!1===e.show)return!1;return new RegExp(t,"gi").test(e.name+" "+e.cName+e.desc)})):(e.searchCName="",e.searchIndex=0,e.searchList=[])}));return{data:e,onfocus:e=>{},choseList:t=>{let s=e.searchIndex;40==t.keyCode&&s++,38==t.keyCode&&s--,s<0&&(s=0);const a=e.searchList;if(a.length>0){const c=a[s]&&a[s].name;c&&(e.searchCurName=c,e.searchIndex=s,13==t.keyCode&&(e.$router.push({path:"/"+a[s].name}),e.searchCurName="",e.searchIndex=0,e.searchVal=""))}},onblur:t=>{setTimeout((()=>{e.searchList=[],e.searchVal=""}),200)},checklist:()=>{e.searchVal="",e.searchCurName="",e.searchIndex=0}}}}),Z={class:"search-box"},$={class:"search-list"};q.render=function(e,t,s,a,c,o){const r=v("router-link");return f(),g("div",Z,[A(V("input",{type:"text",class:"search-input",placeholder:"在 NutUI 中搜索","onUpdate:modelValue":t[1]||(t[1]=t=>e.data.searchVal=t),onFocus:t[2]||(t[2]=(...t)=>e.onfocus&&e.onfocus(...t)),onBlur:t[3]||(t[3]=(...t)=>e.onblur&&e.onblur(...t)),onKeyup:t[4]||(t[4]=(...t)=>e.choseList&&e.choseList(...t))},null,544),[[I,e.data.searchVal]]),A(V("ul",$,[(f(!0),g(D,null,L(e.data.searchList,((t,s)=>(f(),g("li",{class:e.data.searchCurName==t.name?"cur":"",onClick:s=>e.checklist(t),key:s},[V(r,{to:t.name.toLowerCase()},{default:w((()=>[U(O(t.name)+" ",1),V("span",null,O(t.cName),1)])),_:2},1032,["to"])],10,["onClick"])))),128))],512),[[j,e.data.searchList.length>0]])])};class ee{constructor(){this.currentRoute=P("/"),this._themeColor=P("black")}static getInstance(){if(null==this.instance){this.instance=new ee;let e=localStorage.getItem("nutui-theme-color");e&&(this.instance.themeColor.value=e)}return this.instance}get themeColor(){return this._themeColor}set themeColor(e){this._themeColor=e}}var te=h({name:"doc-header",components:{Search:q},setup(){let e=[];d.forEach((t=>{e.push(...t.packages)}));const t=E({theme:"black",verson:"3.x",navIndex:0,activeIndex:0,isShowSelect:!1}),s=y((()=>{let t=ee.getInstance().currentRoute.value;return function(s){const a=s.toLowerCase();return"component"===a?(t.indexOf("-taro")>-1&&(t=t.split("-taro")[0]),e.findIndex((e=>e.name.toLowerCase()===t))>-1):t===a||a.includes(t)}})),a=y((()=>function(){return`doc-header-${ee.getInstance().themeColor.value}`}));return{header:l,versions:m,version:"3.1.1",data:t,toHome:()=>{ee.getInstance().currentRoute.value="/"},isActive:s,checkTheme:(e,s)=>{t.isShowSelect=!1,t.activeIndex=s,t.verson=e.name,window.location.href=e.link},themeName:a,handleFocus:()=>{console.log(1)},handleFocusOut:()=>{t.isShowSelect=!1}}}});const se={class:"header-logo"},ae=V("span",{class:"logo-border"},null,-1),ce={class:"version"},oe={class:"header-nav"},re={class:"nav-box"},ne={class:"nav-list"},ie={href:"demo.html#/"},de={class:"nav-item"},le={class:"header-select-hd"},me=V("i",{class:""},null,-1),ue={class:"header-select-bd"},_e=V("li",{class:"nav-item"},[V("a",{class:"user-link",target:"_blank",href:"https://github.com/jdf2e/nutui"}),V("a",{class:"gitee",target:"_blank",href:"https://gitee.com/jd-platform-opensource/nutui"},[V("img",{src:"https://storage.360buyimg.com/imgtools/158748bd85-17a80c60-e547-11eb-995a-377f565026ba.png",alt:"Fork me on Gitee"})])],-1);te.render=function(e,t,s,a,c,o){const r=v("Search"),n=v("router-link");return f(),g("div",{class:["doc-header",e.themeName()]},[V("div",se,[V("a",{class:"logo-link",href:"#",onClick:t[1]||(t[1]=(...t)=>e.toHome&&e.toHome(...t))}),ae,V("span",ce,"v"+O(e.version),1)]),V("div",oe,[V(r),V("div",re,[V("ul",ne,[V("li",{class:["nav-item",{active:e.isActive(e.header[0].name)}]},[V(n,{to:e.header[0].path},{default:w((()=>[U(O(e.header[0].cName),1)])),_:1},8,["to"])],2),V("li",{class:["nav-item",{active:e.isActive(e.header[1].name)}]},[V(n,{to:e.header[1].path},{default:w((()=>[U(O(e.header[1].cName),1)])),_:1},8,["to"])],2),V("li",{class:["nav-item",{active:e.isActive(e.header[2].name)}]},[V("a",ie,O(e.header[2].cName),1)],2),V("li",{class:["nav-item",{active:e.isActive(e.header[3].name)}]},[V(n,{to:e.header[3].name},{default:w((()=>[U(O(e.header[3].cName),1)])),_:1},8,["to"])],2),V("li",de,[V("div",{onFocus:t[2]||(t[2]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onFocusout:t[3]||(t[3]=(...t)=>e.handleFocusOut&&e.handleFocusOut(...t)),tabindex:"0",class:["header-select-box",[1==e.data.isShowSelect?"select-up":"select-down"]],onClick:t[4]||(t[4]=T((t=>e.data.isShowSelect=!e.data.isShowSelect),["stop"]))},[V("div",le,[U(O(e.data.verson),1),me]),V(R,{name:"fade"},{default:w((()=>[A(V("div",ue,[(f(!0),g(D,null,L(e.versions,((t,s)=>(f(),g("div",{class:["header-select-item",{active:e.data.activeIndex===s}],key:s,onClick:T((s=>e.checkTheme(t)),["stop"])},O(t.name),11,["onClick"])))),128))],512),[[j,e.data.isShowSelect]])])),_:1})],34)]),_e])])])],2)};var pe=h({name:"doc-nav",setup:()=>({isActive:y((()=>function(e){const t=ee.getInstance().currentRoute.value;return(t.indexOf("-taro")>-1?t.split("-taro")[0]:t)==e.toLowerCase()})),nav:E(d),docs:E(u),currentRoute:ee.getInstance().currentRoute})});const he={class:"doc-nav"},ve={key:0};pe.render=function(e,t,s,a,c,o){const r=v("router-link");return f(),g("div",he,[V("ol",null,[V("li",null,O(e.docs.name),1),V("ul",null,[(f(!0),g(D,null,L(e.docs.packages,(t=>A((f(),g("li",{class:{active:e.isActive(t.name)},key:t},[t.isLink?(f(),g("a",{key:1,href:t.name,target:"_blank"},O(t.cName),9,["href"])):(f(),g(r,{key:0,to:t.name.toLowerCase()},{default:w((()=>[U(O(t.cName),1)])),_:2},1032,["to"]))],2)),[[j,t.show]]))),128))])]),(f(!0),g(D,null,L(e.nav,(t=>(f(),g("ol",{key:t},[V("li",null,O(t.name),1),V("ul",null,[(f(!0),g(D,null,L(t.packages,(t=>(f(),g(D,{key:t},[t.show?(f(),g("li",ve,[V(r,{to:t.name.toLowerCase(),class:{active:e.isActive(t.name)}},{default:w((()=>[U(O(t.name)+"  ",1),V("b",null,O(t.cName),1)])),_:2},1032,["to","class"])])):C("",!0)],64)))),128))])])))),128))])};var ge=h({name:"doc-footer",setup(){const e=E({themeList:[{name:"热情红",color:"red"},{name:"暗黑风",color:"black"},{name:"纯净白",color:"white"}],activeIndex:0,isShowSelect:!1});e.activeIndex=e.themeList.findIndex((e=>e.color==ee.getInstance().themeColor.value));return{themeColor:ee.getInstance().themeColor,data:e,clickOut:()=>{document.addEventListener("click",(e=>{console.log("e.target",e.target)}),!1)},checkTheme:(t,s)=>{e.isShowSelect=!1,e.activeIndex=s,ee.getInstance().themeColor.value=t,localStorage.setItem("nutui-theme-color",t)}}}});const fe={class:"doc-footer-content"},Ee=V("div",{class:"doc-footer-list"},[V("img",{class:"doc-footer-logo",src:"data:image/png;base64,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"})],-1),ke={class:"doc-footer-list"},be=V("h4",{class:"doc-footer-title"},"相关资源",-1),Ae={class:"doc-footer-item"},Ie={class:"sub-link",target:"_blank",href:"https://vuejs.org"},Ve=U("Vue"),je={class:"doc-footer-item"},De={class:"sub-link",target:"_blank",href:"https://vitejs.dev"},Le=U("Vite"),we={class:"doc-footer-item"},Ue={class:"sub-link",target:"_blank",href:"https://relay.jd.com"},Oe=U("Relay"),Pe={class:"doc-footer-item"},ye={class:"sub-link",target:"_blank",href:"https://taro.jd.com"},Te=U("Taro"),Re={class:"doc-footer-item"},Ce={class:"sub-link",target:"_blank",href:"https://ling.jd.com/jdw"},xe=U("羚珑"),Se={class:"doc-footer-list"},Ne=V("h4",{class:"doc-footer-title"},"社区",-1),Be={class:"doc-footer-item"},He={class:"sub-link",target:"_blank",href:"https://github.com/jdf2e/nutui"},Fe=U("GitHub"),Ye={class:"doc-footer-item"},We={class:"sub-link",target:"_blank",href:"https://www.zhihu.com/column/c_1263837684834889728"},Xe=U("知乎专栏"),Ge={class:"doc-footer-item vx-item"},Ke=U("微信"),Je=V("i",{class:"icon-vx"},null,-1),Me=V("div",{class:"vx-box"},[V("p",{class:"vx-desc"},"微信交流群"),V("p",{class:"vx-desc"},"扫码添加好友"),V("img",{class:"img-code",src:"/nutui/3.1.1/vx-code.7e4891d1.png"}),V("p",{class:"vx-desc"},[U("回复"),V("span",{class:"vx-red"},"NutUI"),U("即刻进群")])],-1),ze={class:"doc-footer-list"},Qe=V("h4",{class:"doc-footer-title"},"关于我们",-1),qe={class:"doc-footer-item"},Ze={class:"sub-link",href:"#/joinus"},$e=U("加入我们"),et={class:"doc-footer-item"},tt={class:"sub-link",href:"mailto:nutui@jd.com"},st=U("联系我们"),at={class:"doc-footer-item"},ct={class:"sub-link",target:"_blank",href:"https://github.com/jdf2e/nutui/issues"},ot=U("意见反馈"),rt={class:"doc-footer-item"},nt={class:"sub-link",target:"_blank",href:"https://fe.jd.com"},it=U("京东前端"),dt=V("div",{class:"doc-footer-select-hd"},[V("i",{class:"icon-color"}),U("主题换肤")],-1),lt={class:"doc-footer-select-bd"},mt=V("p",{class:"doc-footer-desc"},"2021 京东零售 - 基础业务体验部. All Rights Reserved.",-1);ge.render=function(e,t,s,a,c,o){const r=x("hover");return f(),g("div",{class:["doc-footer",`doc-footer-${e.themeColor}`]},[V("div",fe,[Ee,V("div",ke,[be,V("div",Ae,[A(V("a",Ie,[Ve],512),[[r]])]),V("div",je,[A(V("a",De,[Le],512),[[r]])]),V("div",we,[A(V("a",Ue,[Oe],512),[[r]])]),V("div",Pe,[A(V("a",ye,[Te],512),[[r]])]),V("div",Re,[A(V("a",Ce,[xe],512),[[r]])])]),V("div",Se,[Ne,V("div",Be,[A(V("a",He,[Fe],512),[[r]])]),V("div",Ye,[A(V("a",We,[Xe],512),[[r]])]),V("div",Ge,[A(V("span",null,[Ke],512),[[r]]),Je,Me])]),V("div",ze,[Qe,V("div",qe,[A(V("a",Ze,[$e],512),[[r]])]),V("div",et,[A(V("a",tt,[st],512),[[r]])]),V("div",at,[A(V("a",ct,[ot],512),[[r]])]),V("div",rt,[A(V("a",nt,[it],512),[[r]])])]),V("div",{class:"doc-footer-list",onClick:t[1]||(t[1]=T((t=>e.data.isShowSelect=!e.data.isShowSelect),["stop"]))},[dt,A(V("div",lt,[(f(!0),g(D,null,L(e.data.themeList,((t,s)=>(f(),g("div",{class:["doc-footer-select-item",{active:e.data.activeIndex===s}],key:s,onClick:T((a=>e.checkTheme(t.color,s)),["stop"])},[V("i",{class:`circle-${t.color}`},null,2),U(O(t.name),1)],10,["onClick"])))),128))],512),[[j,e.data.isShowSelect]])])]),mt],2)};var ut=h({name:"doc-demo-preview",props:{url:String}});const _t={class:"doc-demo-preview"};ut.render=function(e,t,s,a,c,o){return f(),g("div",_t,[V("iframe",{src:e.url,frameborder:"0"},null,8,["src"])])};var pt=h({name:"doc",components:{[te.name]:te,[pe.name]:pe,[ge.name]:ge,[ut.name]:ut},setup(){const e=S(),t=N(),s=["/intro","/start","/theme","/joinus","/starttaro"],a=E({demoUrl:"demo.html",curKey:"vue",tabs:[{key:"vue",text:"vue"},{key:"taro",text:"taro"}]}),c=y((()=>{let e=[];return d.map((t=>{t.packages.forEach((t=>{let{tarodoc:s,name:a}=t;s&&(e.push(a.toLowerCase()),e.push(`${a.toLowerCase()}-taro`))}))})),e})),o=e=>e.path.indexOf("taro")>-1,r=y((()=>c.value.findIndex((t=>t===e.path.substr(1)))>-1)),l=e=>{const{origin:t,pathname:s}=window.location;ee.getInstance().currentRoute.value=e.name,a.demoUrl=`${t}${s.replace("index.html","")}demo.html#${e.path}`};return k((()=>{l(e),a.curKey=o(e)?"taro":"vue"})),B((e=>{l(e),a.curKey=o(e)?"taro":"vue"})),i(n({},H(a)),{handleTabs:s=>{a.curKey=s,(()=>{const s=e.path;t.replace(o(e)?s.substr(0,s.length-5):`${s}-taro`)})()},isShow:()=>!s.includes(e.path),isShowTaroDoc:r})}});const ht=W("data-v-5416d0a4");F("data-v-5416d0a4");const vt={class:"doc-content"},gt={class:"doc-content-document"},ft={key:0,class:"doc-content-tabs"},Et={key:1,class:"doc-content-tabs"},kt=V("div",{class:"tab-item cur"},"vue/taro",-1);Y();const bt=ht(((e,t,s,a,c,o)=>{const r=v("doc-header"),n=v("doc-nav"),i=v("router-view"),d=v("doc-demo-preview");return f(),g("div",null,[V(r),V(n),V("div",vt,[V("div",gt,[e.isShow()&&e.isShowTaroDoc?(f(),g("div",ft,[(f(!0),g(D,null,L(e.tabs,(t=>(f(),g("div",{class:["tab-item",{cur:e.curKey===t.key}],key:t.key,onClick:s=>e.handleTabs(t.key)},O(t.text),11,["onClick"])))),128))])):C("",!0),e.isShow()&&!e.isShowTaroDoc?(f(),g("div",Et,[kt])):C("",!0),V(i)]),V(d,{url:e.demoUrl},null,8,["url"])])])}));pt.render=bt,pt.__scopeId="data-v-5416d0a4";const At={baseUrl:"",isPrd:!0};At.isPrd=!0,At.baseUrl="https://nutui.jd.com";class It{checkStatus(e){const t={state:0,value:{},message:""};return!e||200!==e.status&&304!==e.status&&400!==e.status||(t.value=e.data),t}request(e,t,s){return a=this,c=null,o=function*(){const a=Object.assign({"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},s.header);try{const c={method:t,url:At.baseUrl+e,data:s,params:s,timeout:3e4,crossDomain:!0,headers:a},o=yield X(c);return this.checkStatus(o)}catch(c){return console.error(c),null}},new Promise(((e,t)=>{var s=e=>{try{n(o.next(e))}catch(s){t(s)}},r=e=>{try{n(o.throw(e))}catch(s){t(s)}},n=t=>t.done?e(t.value):Promise.resolve(t.value).then(s,r);n((o=o.apply(a,c)).next())}));var a,c,o}}class Vt{constructor(){this.httpClient=new It}getArticle(){return this.httpClient.request("/openapi/article?pageIndex=1&pageSize=100","get",{})}getCases(){return this.httpClient.request("/openapi/cases?pageIndex=1&pageSize=100","get",{})}}var jt=h({name:"doc",components:{[te.name]:te,[ge.name]:ge},setup(){const e=E({articleList:[],communityArticleList:[],tabData:[{title:"全部文章"}],activeIndex:0,showNutuiCat:!1}),t=e=>{ee.getInstance().currentRoute.value=e.name};k((()=>{const s=S();t(s);const a=new Vt;X("https://relayapi.jd.com/").then((t=>{t&&(e.showNutuiCat=!0)})),a.getArticle().then((t=>{0==(null==t?void 0:t.state)&&t.value.data.arrays.forEach((t=>{1==t.type?e.articleList.push(t):e.communityArticleList.push(t)}))}))})),B((e=>{t(e)}));return i(n({},H(e)),{clickTab:t=>{e.activeIndex=t},toLink:e=>{window.open("//jelly.jd.com/article/"+e)}})}});const Dt=W("data-v-0623f22a");F("data-v-0623f22a");const Lt=V("div",{class:"resource-main"},[V("div",{class:"resource-main-content"},[V("h3",{class:"sub-title"},"资源"),V("p",{class:"sub-desc"},"这里汇总了 NutUI 相关的所有的资源")])],-1),wt={class:"resource-content"},Ut={key:0,class:"resource-block"},Ot=V("h4",{class:"sub-title"},"模板资源",-1),Pt=V("p",{class:"sub-desc"},[U(" 目前已提供京东大促模板工程 "),V("a",{target:"_blank",href:"https://coding.jd.com/jdc-activity/Nutui-Cat"},"NutUI-Cat"),U("，含有开发京东大促项目过程中使用到的通用模块、组件、模板，可以在未来的大促项目中复用，达到提效降本的效果。 ")],-1),yt={key:1,class:"resource-block"},Tt=V("h4",{class:"sub-title"},"设计资源",-1),Rt=V("p",{class:"sub-desc"},[U("这里提供 NUTUI 相关设计资源和设计工具的下载，更多设计资源正在整理和完善中。你可以在这个"),V("span",{class:"sub-red"},"地址"),U("中反馈对新版本 Sketch Symbols 组件的意见。")],-1),Ct=V("div",{class:"no-data"},[V("img",{class:"nodata-img-joy",src:"/nutui/3.1.1/img-joy.6d8227fe.png"}),V("p",{class:"nodata-desc"},"敬请期待")],-1),xt={key:2,class:"resource-block"},St=V("h4",{class:"sub-title"},"设计资源",-1),Nt=V("p",{class:"sub-desc"},"想要了解 NutUI 设计体系背后的故事？如何才能更好的应用？你可以查阅下述我们为你精挑细选的文章。也欢迎关注 NutUI 官方专栏，这里常有关于 NutUI 设计体系下相关话题内容的最新分享和讨论。",-1),Bt={class:"tab-box"},Ht={class:"tab-hd"},Ft={class:"tab-bd"},Yt={class:"design-title"},Wt={class:"resource-block"},Xt=V("h4",{class:"sub-title"},"社区文章",-1),Gt=V("p",{class:"sub-desc"},null,-1),Kt={class:"article-box"};Y();const Jt=Dt(((e,t,s,a,c,o)=>{const r=v("doc-header"),n=v("doc-footer"),i=x("hover");return f(),g(D,null,[V(r),Lt,V("div",wt,[e.showNutuiCat?(f(),g("div",Ut,[Ot,Pt])):C("",!0),0===e.articleList.length?(f(),g("div",yt,[Tt,Rt,Ct])):(f(),g("div",xt,[St,Nt,V("div",Bt,[V("div",Ht,[(f(!0),g(D,null,L(e.tabData,((t,s)=>(f(),g("div",{class:["tab-hd-item",{active:e.activeIndex===s}],key:s,onClick:t=>e.clickTab(s)},O(t.title),11,["onClick"])))),128))]),A(V("div",Ft,[(f(!0),g(D,null,L(e.articleList,(t=>(f(),g("div",{class:"design-item",key:t.id,onClick:s=>e.toLink(t.id)},[V("img",{class:"img-design",src:t.cover_image},null,8,["src"]),A(V("p",Yt,[U(O(t.title),1)],512),[[i]])],8,["onClick"])))),128))],512),[[j,0===e.activeIndex]])])])),V("div",Wt,[Xt,Gt,V("ul",Kt,[(f(!0),g(D,null,L(e.communityArticleList,(e=>(f(),g("li",{class:"article-item",key:e.id},[V("a",{class:"article-link",target:"_blank",href:e.link},O(e.title)+" - "+O(e.user_name),9,["href"])])))),128))])])]),V(n)],64)}));jt.render=Jt,jt.__scopeId="data-v-0623f22a";var Mt=h({name:"main",components:{[te.name]:te,[ge.name]:ge},setup(){let e=[];const t=E({articleList:[],casesImages:[],currentCaseItem:{},localTheme:localStorage.getItem("nutui-theme-color")});k((()=>{const s=new Vt;s.getArticle().then((e=>{0==(null==e?void 0:e.state)&&(t.articleList=e.value.data.arrays.map((e=>{if(1==e.type)return e})).filter((e=>e)))})),s.getCases().then((s=>{0==(null==s?void 0:s.state)&&(t.casesImages=s.value.data.arrays.map((e=>e.cover_image.split(","))).toString().split(","),e=s.value.data.arrays,t.currentCaseItem=e[0])}))}));const s=s=>{t.currentCaseItem=e.find((e=>e.cover_image.includes(s)))},a=y((()=>function(){return`doc-content-${ee.getInstance().themeColor.value}`})),c=y((()=>function(){return ee.getInstance().themeColor.value}));return i(n({toIntro:function(){Is.push({path:"/intro"})}},H(t)),{themeName:a,themeNameValue:c,toLink:e=>{window.open("//jelly.jd.com/article/"+e)},onLeft:()=>{let e=t.casesImages.shift();s(e),t.casesImages.push(e)},onRight:()=>{let e=t.casesImages.pop();s(e),t.casesImages.unshift(e)}})}});const zt=W("data-v-22e090fc");F("data-v-22e090fc");const Qt={class:"doc-content-index"},qt={class:"content-left"},Zt=V("div",{class:"content-title"}," NutUI ",-1),$t=V("div",{class:"content-smile"},null,-1),es=V("div",{class:"content-subTitle"},"京东风格的轻量级移动端 Vue 组件库",-1),ts={class:"content-button"},ss=V("div",{class:"leftButtonText"},"开始使用",-1),as=G('<div class="rightButton" data-v-22e090fc><div class="rightButtonText" data-v-22e090fc>扫码体验</div><div class="qrcodepart" data-v-22e090fc><div class="qrcode-text" data-v-22e090fc> 请使用手机扫码体验 </div><div class="qrcode" data-v-22e090fc></div></div></div>',1),cs=V("iframe",{style:{"margin-left":"20px"},src:"https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"170",height:"30",title:"GitHub"},null,-1),os=V("div",{class:"doc-content-features"},[V("div",{class:"doc-content-hd"},[V("h4",{class:"doc-content-title"},"平台特色")]),V("ul",{class:"features-list"},[V("li",{class:"features-item"},[V("img",{src:"/nutui/3.1.1/img-home-features1.2ef25c62.png"}),V("p",{class:"features-title"},"京东风格"),V("p",{class:"features-desc"},"遵循京东 App 10.0 设计规范")]),V("li",{class:"features-item"},[V("img",{src:"/nutui/3.1.1/img-home-features5.54142c5e.png"}),V("p",{class:"features-title"},"适配多端"),V("p",{class:"features-desc a-l"},"基于 Taro 轻松开发多端小程序")]),V("li",{class:"features-item"},[V("img",{src:"/nutui/3.1.1/img-home-features2.37cc104b.png"}),V("p",{class:"features-title"},"组件丰富"),V("p",{class:"features-desc a-l"},"提供 70+ 组件，覆盖绝大多数业务场景")]),V("li",{class:"features-item"},[V("img",{src:"/nutui/3.1.1/img-home-features3.7207ff14.png"}),V("p",{class:"features-title"},"前沿技术"),V("p",{class:"features-desc"},"vue3 vite2.x typescript")]),V("li",{class:"features-item"},[V("img",{src:"/nutui/3.1.1/img-home-features4.e29dd764.png"}),V("p",{class:"features-title"},"贴心通道"),V("p",{class:"features-desc"},[U("社区维护 高效服务"),V("br"),U("技术支持 经验沉淀")])])])],-1),rs=V("div",{class:"doc-content-taro"},[V("div",{class:"doc-content-hd"},[V("h4",{class:"doc-content-title"},"一处代码 多端运行")]),V("div",{class:"taro-content"},[V("div",{class:"taro-left"}),V("div",{class:"taro-right"},[V("div",{class:"right-img"}),V("p",{class:"taro-desc"},[U(" 基于 Taro 对 NutUI 每一个组件进行深度适配"),V("br"),U(" 支持开发多端小程序 ")])])])],-1),ns={key:0,class:"doc-content-cases"},is=V("div",{class:"doc-content-hd"},[V("h4",{class:"doc-content-title"},"赋能案例")],-1),ds={class:"doc-content-cases-content"},ls={class:"doc-content-cases-content__main"},ms={class:"doc-content-cases-content__main-iconinfo"},us=V("div",{class:"doc-content-cases-content__main-iphone"},null,-1),_s={key:1,class:"doc-content-more"},ps=V("div",{class:"doc-content-hd"},[V("h4",{class:"doc-content-title"}),V("a",{class:"sub-more",href:"#/resource"},"More")],-1),hs={class:"more-list"},vs={class:"more-title"};Y();const gs=zt(((e,t,s,a,c,o)=>{const r=v("doc-header"),n=v("doc-footer"),i=x("hover");return f(),g(D,null,[V(r),V("div",{class:["doc-content",e.themeName()]},[V("div",Qt,[V("div",qt,[Zt,$t,es,V("div",ts,[V("div",{class:"leftButton",onClick:t[1]||(t[1]=(...t)=>e.toIntro&&e.toIntro(...t))},[ss]),as,cs])])]),os,rs,e.casesImages.length?(f(),g("div",ns,[is,V("div",ds,[V("div",ls,[V("div",{class:"doc-content-cases-content__main-lefticon",onClick:t[2]||(t[2]=(...t)=>e.onLeft&&e.onLeft(...t))}),V("div",ms,[V("h4",null,O(e.currentCaseItem.product_name),1),V("p",null,O(e.currentCaseItem.product_info),1),V("img",{src:e.currentCaseItem.logo},null,8,["src"])]),us,V("div",{class:"doc-content-cases-content__main-righticon",onClick:t[3]||(t[3]=(...t)=>e.onRight&&e.onRight(...t))})]),V("ul",{class:["doc-content-cases-content__list","black"==e.themeNameValue()?"noShadow":""]},[(f(!0),g(D,null,L(e.casesImages,((e,t)=>(f(),g("li",{key:t},[V("img",{src:e},null,8,["src"])])))),128))],2)])])):C("",!0),e.articleList.length?(f(),g("div",_s,[ps,V("ul",hs,[(f(!0),g(D,null,L(e.articleList.slice(0,4),(t=>(f(),g("li",{class:"more-item",key:t.id,onClick:s=>e.toLink(t.id)},[V("img",{src:t.cover_image},null,8,["src"]),A(V("p",vs,[U(O(t.title),1)],512),[[i]])],8,["onClick"])))),128))])])):C("",!0)],2),V(n)],64)}));Mt.render=gs,Mt.__scopeId="data-v-22e090fc";const fs=[],Es={"/src/packages/__VUE/actionsheet/doc.md":()=>_((()=>__import__("./doc.52c8a0c1.js")),["3.1.1/doc.52c8a0c1.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/address/doc.md":()=>_((()=>__import__("./doc.59232cab.js")),["3.1.1/doc.59232cab.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/avatar/doc.md":()=>_((()=>__import__("./doc.ceff36f5.js")),["3.1.1/doc.ceff36f5.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/backtop/doc.md":()=>_((()=>__import__("./doc.b6bb9f5b.js")),["3.1.1/doc.b6bb9f5b.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/button/doc.md":()=>_((()=>__import__("./doc.3f6a9b72.js")),["3.1.1/doc.3f6a9b72.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/calendar/doc.md":()=>_((()=>__import__("./doc.a526985e.js")),["3.1.1/doc.a526985e.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/cell/doc.md":()=>_((()=>__import__("./doc.c5b54def.js")),["3.1.1/doc.c5b54def.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/checkbox/doc.md":()=>_((()=>__import__("./doc.9344591f.js")),["3.1.1/doc.9344591f.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/collapse/doc.md":()=>_((()=>__import__("./doc.0418f2bc.js")),["3.1.1/doc.0418f2bc.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/countup/doc.md":()=>_((()=>__import__("./doc.0e7385a9.js")),["3.1.1/doc.0e7385a9.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/datepicker/doc.md":()=>_((()=>__import__("./doc.ac42271f.js")),["3.1.1/doc.ac42271f.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/dialog/doc.md":()=>_((()=>__import__("./doc.4c734301.js")),["3.1.1/doc.4c734301.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/drag/doc.md":()=>_((()=>__import__("./doc.ad0e0eff.js")),["3.1.1/doc.ad0e0eff.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/icon/doc.md":()=>_((()=>__import__("./doc.32b7ce76.js")),["3.1.1/doc.32b7ce76.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/infiniteloading/doc.md":()=>_((()=>__import__("./doc.575db48b.js")),["3.1.1/doc.575db48b.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/input/doc.md":()=>_((()=>__import__("./doc.3196cfa1.js")),["3.1.1/doc.3196cfa1.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/inputnumber/doc.md":()=>_((()=>__import__("./doc.c44465e2.js")),["3.1.1/doc.c44465e2.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/layout/doc.md":()=>_((()=>__import__("./doc.417c25f3.js")),["3.1.1/doc.417c25f3.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/menu/doc.md":()=>_((()=>__import__("./doc.4697eef5.js")),["3.1.1/doc.4697eef5.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/navbar/doc.md":()=>_((()=>__import__("./doc.fdba83b0.js")),["3.1.1/doc.fdba83b0.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/notify/doc.md":()=>_((()=>__import__("./doc.93372116.js")),["3.1.1/doc.93372116.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/overlay/doc.md":()=>_((()=>__import__("./doc.6cb2431b.js")),["3.1.1/doc.6cb2431b.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/picker/doc.md":()=>_((()=>__import__("./doc.00ec5222.js")),["3.1.1/doc.00ec5222.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/popup/doc.md":()=>_((()=>__import__("./doc.ec1b4851.js")),["3.1.1/doc.ec1b4851.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/price/doc.md":()=>_((()=>__import__("./doc.2d0105ee.js")),["3.1.1/doc.2d0105ee.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/pullrefresh/doc.md":()=>_((()=>__import__("./doc.8ee503be.js")),["3.1.1/doc.8ee503be.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/radio/doc.md":()=>_((()=>__import__("./doc.642c5a98.js")),["3.1.1/doc.642c5a98.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/radiogroup/doc.md":()=>_((()=>__import__("./doc.ca41fed6.js")),["3.1.1/doc.ca41fed6.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/range/doc.md":()=>_((()=>__import__("./doc.6325ca63.js")),["3.1.1/doc.6325ca63.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/rate/doc.md":()=>_((()=>__import__("./doc.8f501997.js")),["3.1.1/doc.8f501997.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/shortpassword/doc.md":()=>_((()=>__import__("./doc.47e87177.js")),["3.1.1/doc.47e87177.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/steps/doc.md":()=>_((()=>__import__("./doc.44bf402f.js")),["3.1.1/doc.44bf402f.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/swiper/doc.md":()=>_((()=>__import__("./doc.55301465.js")),["3.1.1/doc.55301465.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/swiperitem/doc.md":()=>_((()=>__import__("./doc.5b0adf45.js")),["3.1.1/doc.5b0adf45.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/switch/doc.md":()=>_((()=>__import__("./doc.ad29c9dc.js")),["3.1.1/doc.ad29c9dc.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/tab/doc.md":()=>_((()=>__import__("./doc.2da95e0d.js")),["3.1.1/doc.2da95e0d.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/tabbar/doc.md":()=>_((()=>__import__("./doc.4de885c2.js")),["3.1.1/doc.4de885c2.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/temp/doc.md":()=>_((()=>__import__("./doc.cec1182e.js")),["3.1.1/doc.cec1182e.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/textarea/doc.md":()=>_((()=>__import__("./doc.71039ce2.js")),["3.1.1/doc.71039ce2.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/toast/doc.md":()=>_((()=>__import__("./doc.f434f1b3.js")),["3.1.1/doc.f434f1b3.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/uploader/doc.md":()=>_((()=>__import__("./doc.2ae9181b.js")),["3.1.1/doc.2ae9181b.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/video/doc.md":()=>_((()=>__import__("./doc.5a1b1b5b.js")),["3.1.1/doc.5a1b1b5b.js","3.1.1/vendor.0d0a34e4.js"])};for(const Us in Es){let e=/packages\/__VUE\/(.*)\/doc.md/.exec(Us)[1];fs.push({path:"/"+e,component:Es[Us],name:e})}const ks={"/src/packages/__VUE/backtop/doc.taro.md":()=>_((()=>__import__("./doc.taro.db497e40.js")),["3.1.1/doc.taro.db497e40.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/cell/doc.taro.md":()=>_((()=>__import__("./doc.taro.5bc89af1.js")),["3.1.1/doc.taro.5bc89af1.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/datepicker/doc.taro.md":()=>_((()=>__import__("./doc.taro.840d4275.js")),["3.1.1/doc.taro.840d4275.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/dialog/doc.taro.md":()=>_((()=>__import__("./doc.taro.f5f64043.js")),["3.1.1/doc.taro.f5f64043.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/drag/doc.taro.md":()=>_((()=>__import__("./doc.taro.7cea8e9f.js")),["3.1.1/doc.taro.7cea8e9f.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/infiniteloading/doc.taro.md":()=>_((()=>__import__("./doc.taro.67682aeb.js")),["3.1.1/doc.taro.67682aeb.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/notify/doc.taro.md":()=>_((()=>__import__("./doc.taro.aa1bdbe0.js")),["3.1.1/doc.taro.aa1bdbe0.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/picker/doc.taro.md":()=>_((()=>__import__("./doc.taro.1a9a1130.js")),["3.1.1/doc.taro.1a9a1130.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/swiper/doc.taro.md":()=>_((()=>__import__("./doc.taro.7aa08eb4.js")),["3.1.1/doc.taro.7aa08eb4.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/toast/doc.taro.md":()=>_((()=>__import__("./doc.taro.defabb3d.js")),["3.1.1/doc.taro.defabb3d.js","3.1.1/vendor.0d0a34e4.js"]),"/src/packages/__VUE/uploader/doc.taro.md":()=>_((()=>__import__("./doc.taro.9c4b39d9.js")),["3.1.1/doc.taro.9c4b39d9.js","3.1.1/vendor.0d0a34e4.js"])};for(const Us in ks){let e=/packages\/__VUE\/(.*)\/doc.taro.md/.exec(Us)[1];fs.push({path:`/${e}-taro`,component:ks[Us],name:`${e}-taro`})}const bs={"/src/docs/international.md":()=>_((()=>__import__("./international.e6d7352c.js")),["3.1.1/international.e6d7352c.js","3.1.1/vendor.0d0a34e4.js"]),"/src/docs/intro.md":()=>_((()=>__import__("./intro.4fedeb23.js")),["3.1.1/intro.4fedeb23.js","3.1.1/vendor.0d0a34e4.js"]),"/src/docs/joinus.md":()=>_((()=>__import__("./joinus.1ab044af.js")),["3.1.1/joinus.1ab044af.js","3.1.1/vendor.0d0a34e4.js"]),"/src/docs/start.md":()=>_((()=>__import__("./start.37195012.js")),["3.1.1/start.37195012.js","3.1.1/vendor.0d0a34e4.js"]),"/src/docs/starttaro.md":()=>_((()=>__import__("./starttaro.2b96d736.js")),["3.1.1/starttaro.2b96d736.js","3.1.1/vendor.0d0a34e4.js"]),"/src/docs/theme.md":()=>_((()=>__import__("./theme.6f77f47a.js")),["3.1.1/theme.6f77f47a.js","3.1.1/vendor.0d0a34e4.js"])};for(const Us in bs){let e=/docs\/(.*).md/.exec(Us)[1];fs.push({path:"/"+e,component:bs[Us],name:e})}const As=[{path:"/",name:"/",component:Mt},{path:"/index",name:"index",component:pt,children:fs},{path:"/resource",name:"resource",component:jt}];As.push({name:"notFound",path:"/:path(.*)+",redirect:{name:"/"}});const Is=K({history:J(),routes:As,scrollBehavior(e){if(e.hash){const t=e.hash.split("#")[1],s=document.getElementById(t);setTimeout((()=>{s&&s.scrollIntoView(!0)}))}}});Is.afterEach(((e,t)=>{window.scrollTo(0,0);try{setTimeout((()=>{(new Image).src=`${At.baseUrl}/openapi/point?p=${encodeURIComponent(JSON.stringify(location))}`}),500)}catch(s){}}));const Vs={setup:()=>({onlineFun:function(){alert("hello")}})},js=W("data-v-c6543ac2");F("data-v-c6543ac2");const Ds=V("p",{class:"online-part"},[V("a",{href:"//gitpod.io/#https://github.com/jdf2e/nutui.git",target:"_blank",class:"online-btn"},"在线运行")],-1);Y();const Ls=js(((e,t,s,a,c,o)=>(f(),g("div",null,[M(e.$slots,"highlight",{},void 0,!0),M(e.$slots,"default",{},void 0,!0),Ds]))));Vs.render=Ls,Vs.__scopeId="data-v-c6543ac2";const ws={mounted(e){e.addEventListener("mouseover",(()=>{e.style.color="#fa2c19"})),e.addEventListener("mouseleave",(()=>{e.style.color=""}))}};p&&location.replace("demo.html"+location.hash),z(Q).directive("hover",ws).component("demo-block",Vs).use(Is).mount("#doc");
