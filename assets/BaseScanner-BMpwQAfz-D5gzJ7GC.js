
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{s as E}from"./vue-data-ui-Bh3CzhTL.js";import{g as d,M as I,a as l,az as y,c as C,o as D}from"./index-CbUjpH5D.js";function F({config:s,dataset:a,skeletonDataset:t,skeletonConfig:o,FINAL_CONFIG:g,prepareConfig:p,callback:r=null,dsIsNumber:v=!1,allowEmptyDataset:m=!1}){const c=d(!1),n=I(()=>{var f,i;const k=(i=(f=l(s))==null?void 0:f.loading)!=null?i:!1,e=l(a),A=m?!1:v?[null,void 0].includes(e):e==null||Array.isArray(e)&&e.length===0||Object.keys(e).length===0;return c.value||k||A}),u=d(l(a));return y(()=>{u.value=n.value?t:l(a),g.value=n.value?o:p(),r&&r()}),{loading:n,FINAL_DATASET:u,manualLoading:c,skeletonDataset:t,skeletonConfig:o}}const L={},N={class:"vue-data-ui-scanner"};function _(s,a){return D(),C("div",N)}const T=E(L,[["render",_],["__scopeId","data-v-d6376e44"]]);export{F as T,T as j};
