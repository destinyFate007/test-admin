
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as x,K as V,$ as A,g as v,Y as E,c as N,o as g,k as t,ac as $,m as d,l as r,a as m,aw as b,v as _,ao as B,H as w,G as f,a9 as C,V as D}from"./index-CbUjpH5D.js";const K={class:"block"},F={class:"block"},P={class:"space-x-2"},R=x({name:"KeepAliveExamplePage",__name:"page",setup(S){const k=V(),u=A(),s=v(!1),p=v(1);function c(n){let e;switch(n){case 1:e="keepAliveExampleDetail";break;case 2:e="keepAliveExampleNestedDetail";break}k.push({name:e})}return E((n,e)=>{var o,i;const a=(i=(o=e.matched.at(-1))==null?void 0:o.components)==null?void 0:i.default.name;s.value&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(n.name)?a&&u.add(a):a&&u.remove(a)}),(n,e)=>{const a=$,o=w,i=C;return g(),N("div",null,[t(a,{title:"页面缓存",description:"除了可以在路由里配置页面是否需要缓存外，你也可以不使用框架提供的方法，而是在页面里自行实现。"}),t(i,null,{default:d(()=>[r("div",K,[t(m(b),{modelValue:m(s),"onUpdate:modelValue":e[0]||(e[0]=l=>_(s)?s.value=l:null),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),r("div",F,[t(m(B),{modelValue:m(p),"onUpdate:modelValue":e[1]||(e[1]=l=>_(p)?p.value=l:null)},null,8,["modelValue"])]),r("div",P,[t(o,{onClick:e[2]||(e[2]=l=>c(1))},{default:d(()=>[...e[4]||(e[4]=[f(" 进入同级路由页面 ",-1)])]),_:1}),t(o,{onClick:e[3]||(e[3]=l=>c(2))},{default:d(()=>[...e[5]||(e[5]=[f(" 进入下级路由页面 ",-1)])]),_:1})])]),_:1})])}}}),I=D(R,[["__scopeId","data-v-8868e139"]]);export{I as default};
