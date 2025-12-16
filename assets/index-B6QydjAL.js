
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as p}from"./index.vue_vue_type_script_setup_true_lang-D1lWcrwk.js";import{d as m,c as s,o as r,k as e,ac as i,m as t,a as o,W as a}from"./index-CbUjpH5D.js";import l from"./_demo1-BUPuwKU8.js";import{_ as f}from"./_demo2.vue_vue_type_script_setup_true_lang-Ck4IyNM2.js";import"./index-CSPfta8_.js";import"./index.vue_vue_type_script_setup_true_lang-DVu16lb0.js";const d='<template>\n  <FaPopover>\n    <FaButton>\n      浮动面板\n      <FaIcon name="i-ep:caret-bottom" />\n    </FaButton>\n    <template #panel>\n      <div class="h-30 w-60 flex items-center justify-center">\n        面板内容\n      </div>\n    </template>\n  </FaPopover>\n</template>\n',_='<script setup lang="ts">\nconst open = ref(false)\n<\/script>\n\n<template>\n  <FaPopover v-model:open="open">\n    <FaButton>\n      浮动面板\n      <FaIcon name="i-ep:caret-bottom" />\n    </FaButton>\n    <template #panel>\n      <div class="h-30 w-60 flex items-center justify-center">\n        <FaButton @click="open = false">\n          关闭\n        </FaButton>\n      </div>\n    </template>\n  </FaPopover>\n</template>\n',u=m({__name:"index",setup(F){return(v,B)=>{const c=i,n=p;return r(),s("div",null,[e(c,{title:"浮动面板",description:"FaPopover"}),e(n,{code:o(d)},{default:t(()=>[e(l)]),_:1},8,["code"]),e(n,{title:"手动关闭",code:o(_)},{default:t(()=>[e(f)]),_:1},8,["code"])])}}});typeof a=="function"&&a(u);export{u as default};
