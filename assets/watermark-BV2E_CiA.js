
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as V,L as v,M as B,c as C,o as n,k as s,ac as E,m as a,a as t,cN as N,N as d,O as p,aq as W,v as w,ar as i,G as r,aa as f,a9 as x,bp as y}from"./index-CbUjpH5D.js";import{u as M}from"./watermark-01InFq7-.js";const R=V({__name:"watermark",setup(Y){const l=v(),u=M(),o=B({get(){return l.settings.app.enableWatermark},set(m){l.$patch(e=>{e.settings.app.enableWatermark=m})}});function k(){u.update({content:y().format("YYYY-MM-DD HH:mm:ss")})}function c(){u.update()}return(m,e)=>{const _=E,g=x;return n(),C("div",null,[s(_,{title:"页面水印",description:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),s(g,{title:"可在 /src/store/modules/watermark.ts 文件里定制水印文案内容"},{default:a(()=>[s(t(N),null,{default:a(()=>[s(t(W),{modelValue:t(o),"onUpdate:modelValue":e[0]||(e[0]=S=>w(o)?o.value=S:null)},{default:a(()=>[s(t(i),{value:!0},{default:a(()=>[...e[1]||(e[1]=[r(" 开启 ",-1)])]),_:1}),s(t(i),{value:!1},{default:a(()=>[...e[2]||(e[2]=[r(" 关闭 ",-1)])]),_:1})]),_:1},8,["modelValue"]),t(o)?(n(),d(t(f),{key:0,onClick:k},{default:a(()=>[...e[3]||(e[3]=[r(" 更新水印 ",-1)])]),_:1})):p("",!0),t(o)?(n(),d(t(f),{key:1,onClick:c},{default:a(()=>[...e[4]||(e[4]=[r(" 重置水印 ",-1)])]),_:1})):p("",!0)]),_:1})]),_:1})])}}});export{R as default};
