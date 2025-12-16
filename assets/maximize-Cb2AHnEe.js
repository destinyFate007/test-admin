
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,L as l,c as _,o as p,k as e,ac as f,m as n,l as s,H as d,G as g,p as x,a as P,a9 as S}from"./index-CbUjpH5D.js";import{u as z}from"./useMainPage-BzUYadCc.js";import"./useTabbar-5cybBxZG.js";const N=u({__name:"maximize",setup(M){const t=l(),i=z();function o(){i.maximize(!t.mainPageMaximizeStatus)}return(k,a)=>{const m=f,r=d,c=S;return p(),_("div",null,[e(m,{title:"主页面最大化",description:"扩大可视范围和操作区域，能更专注于主页面上的操作"}),e(c,null,{default:n(()=>[a[0]||(a[0]=s("p",null,"同时框架还提供全局函数，可自由控制主页面是否最大化。",-1)),a[1]||(a[1]=s("p",null,"可通过双击标签页，或在标签页上右键并选择“最大化”进入。",-1)),e(r,{onClick:o},{default:n(()=>[g(x(P(t).mainPageMaximizeStatus?"退出":"开启")+"最大化 ",1)]),_:1})]),_:1})])}}});export{N as default};
