var e=Object.defineProperty,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,r=(s,o,t)=>o in s?e(s,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[o]=t;import{c as l}from"./mobile.e87bbe6b.js";import{k as a,a as i,b as n,A as u,J as f,x as c,y as d,r as h,o as m,c as L,f as p,F as M,h as b,t as v,s as y}from"./vendor.96954379.js";import"./index.89b78ef3.js";const{createDemo:g}=l("infiniteloading");var w=g({props:{},setup(){let{proxy:e}=f();const l=a(!0),c=a(!0),d=a(!0),h=i({defultList:[""],customList:[""],refreshList:[""]});return n((()=>{(()=>{for(let e=0;e<10;e++)h.defultList.push(`${e}`),h.customList.push(`${e}`),h.refreshList.push(`${e}`)})()})),((e,l)=>{for(var a in l||(l={}))o.call(l,a)&&r(e,a,l[a]);if(s)for(var a of s(l))t.call(l,a)&&r(e,a,l[a]);return e})({loadMore:e=>{setTimeout((()=>{const s=h.defultList.length;for(let e=s;e<s+10;e++)h.defultList.push(`${e}`);h.defultList.length>30&&(l.value=!1),e()}),500)},hasMore:l,customHasMore:c,customLoadMore:e=>{setTimeout((()=>{const s=h.customList.length;for(let e=s;e<s+10;e++)h.customList.push(`${e}`);h.customList.length>30&&(c.value=!1),e()}),500)},refreshHasMore:d,refreshLoadMore:e=>{setTimeout((()=>{const s=h.refreshList.length;for(let e=s;e<s+10;e++)h.refreshList.push(`${e}`);h.refreshList.length>30&&(d.value=!1),e()}),500)},refresh:s=>{setTimeout((()=>{e.$toast.text("刷新成功"),s()}),1e3)}},u(h))}});const _=y();c("data-v-189e3baa");const j={class:"demo"},x=p("h2",null,"基础用法",-1),$={class:"infiniteUl",id:"scroll"},O=p("h2",null,"下拉刷新",-1),S={class:"infiniteUl",id:"refreshScroll"},k=p("h2",null,"自定义加载文案",-1),H={class:"infiniteUl",id:"customScroll"};d();const T=_(((e,s,o,t,r,l)=>{const a=h("nut-infiniteloading"),i=h("nut-cell");return m(),L("div",j,[x,p(i,null,{default:_((()=>[p("ul",$,[p(a,{"container-id":"scroll","use-window":!1,"has-more":e.hasMore,onLoadMore:e.loadMore},{default:_((()=>[(m(!0),L(M,null,b(e.defultList,((e,s)=>(m(),L("li",{class:"infiniteLi",key:s},v(e),1)))),128))])),_:1},8,["has-more","onLoadMore"])])])),_:1}),O,p(i,null,{default:_((()=>[p("ul",S,[p(a,{"pull-icon":"JD","container-id":"refreshScroll","use-window":!1,"is-open-refresh":!0,"has-more":e.refreshHasMore,onLoadMore:e.refreshLoadMore,onRefresh:e.refresh},{default:_((()=>[(m(!0),L(M,null,b(e.refreshList,((e,s)=>(m(),L("li",{class:"infiniteLi",key:s},v(e),1)))),128))])),_:1},8,["has-more","onLoadMore","onRefresh"])])])),_:1}),k,p(i,null,{default:_((()=>[p("ul",H,[p(a,{"load-txt":"loading","load-more-txt":"没有啦～","container-id":"customScroll","use-window":!1,"has-more":e.customHasMore,onLoadMore:e.customLoadMore},{default:_((()=>[(m(!0),L(M,null,b(e.customList,((e,s)=>(m(),L("li",{class:"infiniteLi",key:s},v(e),1)))),128))])),_:1},8,["has-more","onLoadMore"])])])),_:1})])}));w.render=T,w.__scopeId="data-v-189e3baa";export default w;
