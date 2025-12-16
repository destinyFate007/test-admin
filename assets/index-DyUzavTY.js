
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as t}from"./index.vue_vue_type_script_setup_true_lang-D1lWcrwk.js";import{d as n,c as l,o as r,k as e,ac as p,m as i,a as c}from"./index-CbUjpH5D.js";import{_ as s}from"./_demo1.vue_vue_type_script_setup_true_lang-XPjkDCwz.js";import"./index-CSPfta8_.js";const u='<script setup lang="ts">\nconst value1 = ref([1, 5, 2, 4, 8, 3, 7])\nconst value2 = ref([\n  { tooltip: \'值：1\', value: 1 },\n  { tooltip: \'值：3\', value: 3 },\n  { tooltip: \'值：5\', value: 5 },\n  { tooltip: \'值：8\', value: 8 },\n  { tooltip: \'值：4\', value: 4 },\n  { tooltip: \'值：6\', value: 6 },\n  { tooltip: \'值：9\', value: 9 },\n])\n<\/script>\n\n<template>\n  <FaSparkline :value="value1" />\n  <FaSparkline :value="value1" stroke-color="#409eff" fill-color="#b3d8ff" />\n  <FaSparkline :value="value2" tooltip />\n  <FaSparkline :value="value2" tooltip stroke-color="#409eff" fill-color="#b3d8ff" cursor-color="#e6a23c" spot-color="#909399" />\n</template>\n',S=n({name:"ComponentExampleSparkline",__name:"index",setup(f){return(m,_)=>{const o=p,a=t;return r(),l("div",null,[e(o,{title:"迷你图",description:"FaSparkline"}),e(a,{code:c(u)},{default:i(()=>[e(s)]),_:1},8,["code"])])}}});export{S as default};
