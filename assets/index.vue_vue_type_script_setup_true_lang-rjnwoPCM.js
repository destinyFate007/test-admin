
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,bW as c,w as f,bX as p,a as o,c as b,o as n,n as i,b as V,v,b5 as x,b6 as g,N as k}from"./index-CbUjpH5D.js";const M=u({__name:"Textarea",props:{class:{},defaultValue:{},modelValue:{}},emits:["update:modelValue"],setup(a,{emit:s}){const e=a,l=c(e,"modelValue",s,{passive:!0,defaultValue:e.defaultValue});return(t,d)=>f((n(),b("textarea",{"onUpdate:modelValue":d[0]||(d[0]=m=>v(l)?l.value=m:null),class:i(o(V)("flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e.class))},null,2)),[[p,o(l)]])}}),w=u({name:"FaTextarea",__name:"index",props:x({disabled:{type:Boolean},class:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const s=a,e=g(a,"modelValue");return(r,l)=>(n(),k(o(M),{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),disabled:a.disabled,class:i(s.class)},null,8,["modelValue","disabled","class"]))}});export{w as _};
