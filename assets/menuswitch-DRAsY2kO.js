
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as p,L as _,a0 as g,by as w,a4 as b,c as h,o as k,k as n,ac as v,m as s,l as B,a as d,G as l,a9 as C,W as c}from"./index-CbUjpH5D.js";const M=p({__name:"menuswitch",setup(S){const o=_(),e=g(),a=w();function u(){a.switchTo(e.actived-1>=0?e.actived-1:e.allMenus.length-1)}function m(){a.switchTo(e.actived+1<e.allMenus.length?e.actived+1:0)}return(T,t)=>{const r=v,i=b("ElButton"),f=C;return k(),h("div",null,[n(r,{title:"主导航切换",description:"可切换并激活指定的主导航"}),n(f,null,{default:s(()=>[t[2]||(t[2]=B("p",null,"该特性只有在导航模式为 side 和 head 时生效。",-1)),n(i,{disabled:!["side","head"].includes(d(o).settings.menu.mode),onClick:u},{default:s(()=>[...t[0]||(t[0]=[l(" 切换上一个 ",-1)])]),_:1},8,["disabled"]),n(i,{disabled:!["side","head"].includes(d(o).settings.menu.mode),onClick:m},{default:s(()=>[...t[1]||(t[1]=[l(" 切换下一个 ",-1)])]),_:1},8,["disabled"])]),_:1})])}}});typeof c=="function"&&c(M);export{M as default};
