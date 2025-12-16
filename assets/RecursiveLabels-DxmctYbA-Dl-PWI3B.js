
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{g as m,a1 as v,a4 as h,c as o,o as t,S as i,R as r,O as c,N as f,p as g}from"./index-CbUjpH5D.js";const k=["x","y","fill","font-size"],L={__name:"RecursiveLabels",props:{color:{type:String,default:"#000000"},dataset:{type:Array,default:()=>[]},hoveredUid:{type:String,default:null}},emits:["zoom","hover"],setup(a,{emit:x}){const u=a,l=m([]);return v(()=>u.dataset,n=>{l.value=n||[]},{immediate:!0}),(n,R)=>{const p=h("RecursiveLabels",!0);return t(!0),o(r,null,i(l.value,(e,s)=>(t(),o(r,{key:"level_".concat(s)},[e.polygonPath&&e.polygonPath.coordinates?(t(),o(r,{key:0},[(t(!0),o(r,null,i(e.polygonPath.coordinates,(d,y)=>(t(),o("text",{key:"node_".concat(s,"_").concat(y),x:d.x,y:d.y+e.circleRadius*2,fill:a.color,"font-size":e.circleRadius,"text-anchor":"middle",style:{opacity:"0.8","pointer-events":"none"}},g(e.name),9,k))),128)),e.nodes&&e.nodes.length>0?(t(),f(p,{key:0,dataset:e.nodes,color:a.color,hoveredUid:a.hoveredUid},null,8,["dataset","color","hoveredUid"])):c("",!0)],64)):c("",!0)],64))),128)}}};export{L as default};
