
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as i,b5 as a,b6 as u,c as n,o as l,r as m,O as f,l as g,k as p,P as b,n as v}from"./index-CbUjpH5D.js";const x={key:0,class:"absolute bottom-0 left-0 w-full translate-y-1/2 text-center"},k=i({name:"FaSearchBar",__name:"index",props:a({showToggle:{type:Boolean,default:!0},background:{type:Boolean,default:!1}},{fold:{type:Boolean,default:!0},foldModifiers:{}}),emits:a(["toggle"],["update:fold"]),setup(o,{emit:s}){const r=s,e=u(o,"fold");function t(){e.value=!e.value,r("toggle",e.value)}return(c,y)=>{const d=b;return l(),n("div",{class:v(["relative",{"py-4":o.showToggle,"px-4 bg-secondary transition":o.background}])},[m(c.$slots,"default",{fold:e.value,toggle:t}),o.showToggle?(l(),n("div",x,[g("button",{class:"h-5 inline-flex cursor-pointer select-none items-center border-size-0 rounded bg-secondary px-2 text-xs font-medium outline-none",onClick:t},[p(d,{name:e.value?"i-ep:caret-bottom":"i-ep:caret-top"},null,8,["name"])])])):f("",!0)],2)}}});export{k as _};
