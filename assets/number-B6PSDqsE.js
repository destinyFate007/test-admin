
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d,cR as l,c as p,o as f,k as e,ac as b,m as s,l as t,p as B,a as g,H as k,G as i,P as x,a9 as N}from"./index-CbUjpH5D.js";const v={class:"space-y-2"},C={class:"space-x-2"},S=d({__name:"number",setup(F){const n=l();function u(){n.setNumber(n.number+1)}function _(){n.setNumber(n.number-1)}return(P,a)=>{const m=b,o=x,c=k,r=N;return f(),p("div",null,[e(m,{title:"数字标记",description:"搭配 Pinia 可实现动态设置。请控制数字展示长度，避免导航标记覆盖导航标题，为 0 时则隐藏"}),e(r,null,{default:s(()=>[t("div",v,[t("div",null," 当前 number 值："+B(g(n).number),1),t("div",C,[e(c,{onClick:u},{icon:s(()=>[e(o,{name:"i-ep:plus"})]),default:s(()=>[a[0]||(a[0]=i(" 1 ",-1))]),_:1}),e(c,{onClick:_},{default:s(()=>[e(o,{name:"i-ep:minus"}),a[1]||(a[1]=i(" 1 ",-1))]),_:1})])])]),_:1})])}}});export{S as default};
