
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as r,cR as u,c as p,o as m,k as a,ac as f,m as n,l as s,p as x,a as g,H as B,G as c,a9 as k}from"./index-CbUjpH5D.js";const v={class:"space-y-2"},C={class:"space-x-2"},P=r({__name:"text",setup(T){const e=u();function i(){e.setText(e.text==="热门"?"促销":"热门")}function _(){e.setText("")}return(F,t)=>{const d=f,o=B,l=k;return m(),p("div",null,[a(d,{title:"文字标记",description:"搭配 Pinia 可实现动态设置。请控制文字展示长度，避免导航标记覆盖导航标题"}),a(l,null,{default:n(()=>[s("div",v,[s("div",null," 当前 badge 值：'"+x(g(e).text)+"' ",1),s("div",C,[a(o,{onClick:i},{default:n(()=>[...t[0]||(t[0]=[c(" 切换 ",-1)])]),_:1}),a(o,{onClick:_},{default:n(()=>[...t[1]||(t[1]=[c(" 清空 ",-1)])]),_:1})])])]),_:1})])}}});export{P as default};
