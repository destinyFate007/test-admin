
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,K as f,g as p,N as d,o as c,m as r,k as n,a,an as o,aa as _,G as V,a9 as k,bu as x}from"./index-CbUjpH5D.js";const v=u({name:"LinkExampleIframe",__name:"iframe",setup(I){const m=f(),e=p({title:"自定义标题",iframe:"https://fantastic-admin.hurui.me/"});function s(){/^https?:\/\//.test(e.value.iframe)?m.push({name:"linkExampleIframeDynamicTest",query:{title:e.value.title,iframe:e.value.iframe}}):x.error("请输入正确的链接")}return(y,t)=>{const i=k;return c(),d(i,null,{default:r(()=>[n(a(o),{modelValue:a(e).title,"onUpdate:modelValue":t[0]||(t[0]=l=>a(e).title=l),placeholder:"请输入 Iframe 页面的自定义标题，如果不设置，则会显示路由默认的标题"},null,8,["modelValue"]),n(a(o),{modelValue:a(e).iframe,"onUpdate:modelValue":t[1]||(t[1]=l=>a(e).iframe=l),placeholder:"输入 Iframe 页面的链接"},{append:r(()=>[n(a(_),{type:"primary",onClick:s},{default:r(()=>[...t[2]||(t[2]=[V(" 打开 ",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{v as default};
