var a=Object.defineProperty,e=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,t=(e,l,o)=>l in e?a(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o;import{c as r,T as i}from"./mobile.e87bbe6b.js";import{a as s,A as u,x as c,y as m,r as V,o as h,c as f,f as p,t as b,s as _,j as g}from"./vendor.96954379.js";import"./index.89b78ef3.js";const{createDemo:v}=r("radio");var C=v({props:{},setup(){const a=s({radioVal:1,radioVal2:2,radioVal3:1,radioVal4:1,radioVal5:1,radioVal6:1});return r=((a,e)=>{for(var l in e||(e={}))d.call(e,l)&&t(a,l,e[l]);if(o)for(var l of o(e))n.call(e,l)&&t(a,l,e[l]);return a})({},u(a)),e(r,l({handleChange1:a=>{console.log(a)},handleChange2:a=>{console.log(a)},handleChange3:a=>{i.text(`您选中了${a}`)}}));var r}});const j=_();c("data-v-a0750f6c");const w={class:"demo-list"},y=p("h4",null,"Radio基本用法",-1),O={class:"show-demo"},U=g("单选框1"),x=g("单选框2"),P={class:"show-demo"},R=g("单选框文本在左侧"),k=g("单选框文本在左侧"),z=p("h4",null,"Radio单选框禁用",-1),D={class:"show-demo"},I=g("禁用单选框"),A=g("禁用单选框"),E=p("h4",null,"Radio自定义尺寸",-1),S={class:"show-demo"},T=g("自定义尺寸12"),$=g("自定义尺寸12"),q=p("h4",null,"Radio自定义图标",-1),B={class:"show-demo"},F=g("自定义图标"),G=g("自定义图标"),H=p("h4",null,"Radio触发change事件",-1),J={class:"show-demo"},K=g("触发事件"),L=g("触发事件");m();const M=j(((a,e,l,o,d,n)=>{const t=V("nut-radio"),r=V("nut-radiogroup");return h(),f("div",w,[y,p("div",O,[p(r,{modelValue:a.radioVal,"onUpdate:modelValue":e[1]||(e[1]=e=>a.radioVal=e),onChange:a.handleChange1},{default:j((()=>[p(t,{label:1},{default:j((()=>[U])),_:1}),p(t,{label:2},{default:j((()=>[x])),_:1})])),_:1},8,["modelValue","onChange"]),p("span",null,b(a.radioVal),1)]),p("div",P,[p(r,{modelValue:a.radioVal2,"onUpdate:modelValue":e[2]||(e[2]=e=>a.radioVal2=e),onChange:a.handleChange2,"text-position":"left"},{default:j((()=>[p(t,{label:1},{default:j((()=>[R])),_:1}),p(t,{label:2},{default:j((()=>[k])),_:1})])),_:1},8,["modelValue","onChange"]),p("span",null,b(a.radioVal2),1)]),z,p("div",D,[p(r,{modelValue:a.radioVal3,"onUpdate:modelValue":e[3]||(e[3]=e=>a.radioVal3=e)},{default:j((()=>[p(t,{label:1,disabled:""},{default:j((()=>[I])),_:1}),p(t,{label:2,disabled:""},{default:j((()=>[A])),_:1})])),_:1},8,["modelValue"])]),E,p("div",S,[p(r,{modelValue:a.radioVal4,"onUpdate:modelValue":e[4]||(e[4]=e=>a.radioVal4=e)},{default:j((()=>[p(t,{label:1,"icon-size":"12"},{default:j((()=>[T])),_:1}),p(t,{label:2,"icon-size":"12"},{default:j((()=>[$])),_:1})])),_:1},8,["modelValue"])]),q,p("div",B,[p(r,{modelValue:a.radioVal5,"onUpdate:modelValue":e[5]||(e[5]=e=>a.radioVal5=e)},{default:j((()=>[p(t,{label:1,"icon-name":"checklist","icon-active-name":"checklist"},{default:j((()=>[F])),_:1}),p(t,{label:2,"icon-name":"checklist","icon-active-name":"checklist"},{default:j((()=>[G])),_:1})])),_:1},8,["modelValue"])]),H,p("div",J,[p(r,{modelValue:a.radioVal6,"onUpdate:modelValue":e[6]||(e[6]=e=>a.radioVal6=e),onChange:a.handleChange3},{default:j((()=>[p(t,{label:1},{default:j((()=>[K])),_:1}),p(t,{label:2},{default:j((()=>[L])),_:1})])),_:1},8,["modelValue","onChange"]),p("span",null,b(a.radioVal6),1)])])}));C.render=M,C.__scopeId="data-v-a0750f6c";export default C;
