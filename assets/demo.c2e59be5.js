var o=Object.defineProperty,e=Object.defineProperties,n=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,t=(e,n,s)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s;import{c as p}from"./mobile.eb986424.js";import{a as c,A as u,x as r,y as i,r as d,o as y,c as P,f,s as b,j as m}from"./vendor.6c8f51ae.js";import"./index.8d8f94cc.js";const{createDemo:j}=p("video");var g=j({props:{},setup(){const o=c({source:{src:"https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D",type:"video/mp4"},source1:{src:"https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D",type:"video/mp4"},options:{controls:!0},options1:{autoplay:!0,muted:!0,controls:!0},options2:{muted:!0,controls:!0},options3:{controls:!0,poster:"https://img12.360buyimg.com/ling/s345x208_jfs/t1/168105/33/8417/54825/603df06dEfcddc4cb/21f9f5d0a1b3dad4.jpg.webp"},options4:{controls:!0,playsinline:!0},options5:{controls:!1,autoplay:!0,disabled:!0,muted:!0,playsinline:!0,loop:!0}});return p=((o,e)=>{for(var n in e||(e={}))l.call(e,n)&&t(o,n,e[n]);if(s)for(var n of s(e))a.call(e,n)&&t(o,n,e[n]);return o})({play:o=>console.log("play",o),pause:o=>console.log("pause",o),playend:o=>console.log("playend",o)},u(o)),e(p,n({changeVideo:()=>{o.source1.src="https://vjs.zencdn.net/v/oceans.mp4"}}));var p}});const v=b();r("data-v-598881fa");const h={class:"demo"},O=f("h4",null,"基础用法",-1),_=f("h4",null,"自动播放",-1),x=f("h4",null,"初始化静音",-1),V=f("h4",null,"视频封面海报设置",-1),w=f("h4",null,"行内播放",-1),z=f("h4",null,"设置视频为背景图",-1),S=f("h4",null,"视频切换",-1),k=m("切换视频");i();const B=v(((o,e,n,s,l,a)=>{const t=d("nut-video"),p=d("nut-cell"),c=d("nut-button");return y(),P("div",h,[O,f(p,{class:"cell"},{default:v((()=>[f(t,{source:o.source,options:o.options,onPlay:o.play,onPause:o.pause,onPlayend:o.playend},null,8,["source","options","onPlay","onPause","onPlayend"])])),_:1}),_,f(p,{class:"cell"},{default:v((()=>[f(t,{source:o.source,options:o.options1,onPlay:o.play,onPause:o.pause,onPlayend:o.playend},null,8,["source","options","onPlay","onPause","onPlayend"])])),_:1}),x,f(p,{class:"cell"},{default:v((()=>[f(t,{source:o.source,options:o.options2,onPlay:o.play,onPause:o.pause,onPlayend:o.playend},null,8,["source","options","onPlay","onPause","onPlayend"])])),_:1}),V,f(p,{class:"cell"},{default:v((()=>[f(t,{source:o.source,options:o.options3,onPlay:o.play,onPause:o.pause,onPlayend:o.playend},null,8,["source","options","onPlay","onPause","onPlayend"])])),_:1}),w,f(p,{class:"cell"},{default:v((()=>[f(t,{source:o.source,options:o.options4,onPlay:o.play,onPause:o.pause,onPlayend:o.playend},null,8,["source","options","onPlay","onPause","onPlayend"])])),_:1}),z,f(p,{class:"cell"},{default:v((()=>[f(t,{source:o.source,options:o.options5,onPlay:o.play,onPause:o.pause,onPlayend:o.playend},null,8,["source","options","onPlay","onPause","onPlayend"])])),_:1}),S,f(p,{class:"cell"},{default:v((()=>[f(t,{source:o.source1,options:o.options,onPlay:o.play,onPause:o.pause,onPlayend:o.playend},null,8,["source","options","onPlay","onPause","onPlayend"])])),_:1}),f(c,{type:"primary",onClick:o.changeVideo,class:"m-b"},{default:v((()=>[k])),_:1},8,["onClick"])])}));g.render=B,g.__scopeId="data-v-598881fa";export default g;
