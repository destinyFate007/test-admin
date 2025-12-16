
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as r,g as u,Y as f,c as m,o as _,k as n,ac as p,m as d,a as o,aw as v,v as x,a9 as B,cI as g,W as s}from"./index-CbUjpH5D.js";const w=r({__name:"leavetips",setup(h){const e=u(!0);return f((c,a,t)=>{e.value?g.confirm("当前页面还没有保存，是否确定要离开？","温馨提醒",{confirmButtonText:"确定离开",cancelButtonText:"取消",type:"warning"}).then(()=>{t()}).catch(()=>{}):t()}),(c,a)=>{const t=p,l=B;return _(),m("div",null,[n(t,{title:"页面离开提醒",description:"在页面离开时，增加弹窗二次确认，避免因误操作导致当前页面数据清空"}),n(l,null,{default:d(()=>[n(o(v),{modelValue:o(e),"onUpdate:modelValue":a[0]||(a[0]=i=>x(e)?e.value=i:null),"active-text":"开启提醒","inactive-text":"关闭提醒"},null,8,["modelValue"])]),_:1})])}}});typeof s=="function"&&s(w);export{w as default};
