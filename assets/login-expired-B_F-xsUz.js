
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as _,L as m,f as g,c as k,o as x,k as t,m as n,l as o,ac as $,H as C,G as r,a9 as S,W as p}from"./index-CbUjpH5D.js";const v=_({__name:"login-expired",setup(B){const u=m(),d=g();function s(a){u.$patch(e=>{e.settings.app.loginExpiredMode=a}),d.requestLogout()}return(a,e)=>{const f=$,i=C,l=S;return x(),k("div",null,[t(f,{title:"登录过期"},{description:n(()=>[...e[2]||(e[2]=[o("div",{class:"space-y-2"},[o("p",null,"接口请求遇到拦截器判定为登录过期时，框架提供了 2 种重新登录的方式:"),o("p",null,"1、重定向到登录页（默认）"),o("p",null,"2、弹出登录窗口")],-1)])]),_:1}),t(l,{title:"重定向到登录页"},{default:n(()=>[t(i,{onClick:e[0]||(e[0]=c=>s("redirect"))},{default:n(()=>[...e[3]||(e[3]=[r(" 点击模拟 ",-1)])]),_:1})]),_:1}),t(l,{title:"弹出登录窗口"},{default:n(()=>[t(i,{onClick:e[1]||(e[1]=c=>s("popup"))},{default:n(()=>[...e[4]||(e[4]=[r(" 点击模拟 ",-1)])]),_:1})]),_:1})])}}});typeof p=="function"&&p(v);export{v as default};
