<script setup lang="ts">
import logo from '@/assets/images/logo.svg'

const containerRef = useTemplateRef('containerRef')
const logoRef = useTemplateRef('logoRef')
const viteRef = useTemplateRef('viteRef')
const vueRef = useTemplateRef('vueRef')
const vueuseRef = useTemplateRef('vueuseRef')
const piniaRef = useTemplateRef('piniaRef')
const unocssRef = useTemplateRef('unocssRef')
const tsRef = useTemplateRef('tsRef')
</script>

<template>
  <div ref="containerRef" class="relative h-100 w-full flex items-center justify-center overflow-hidden p-10">
    <div class="size-full max-w-2xl flex flex-col items-stretch justify-between gap-10">
      <div class="flex flex-row items-center justify-between">
        <div ref="viteRef" class="z-10 flex items-center justify-center border-2 rounded-full bg-card p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
          <FaIcon name="i-logos:vitejs" class="size-8" />
        </div>
        <div ref="piniaRef" class="z-10 flex items-center justify-center border-2 rounded-full bg-card p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
          <FaIcon name="i-logos:pinia" class="size-8" />
        </div>
      </div>
      <div class="flex flex-row items-center justify-between">
        <div ref="vueRef" class="z-10 flex items-center justify-center border-2 rounded-full bg-card p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
          <FaIcon name="i-logos:vue" class="size-8" />
        </div>
        <div ref="logoRef" class="z-10 flex items-center justify-center border-2 rounded-full bg-card p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
          <FaIcon :name="logo" class="size-20" />
        </div>
        <div ref="unocssRef" class="z-10 flex items-center justify-center border-2 rounded-full bg-card p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
          <FaIcon name="i-logos:unocss" class="size-8" />
        </div>
      </div>
      <div class="flex flex-row items-center justify-between">
        <div ref="vueuseRef" class="z-10 flex items-center justify-center border-2 rounded-full bg-card p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
          <FaIcon name="i-logos:vueuse" class="size-8" />
        </div>
        <div ref="tsRef" class="z-10 flex items-center justify-center border-2 rounded-full bg-card p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
          <FaIcon name="i-logos:typescript-icon" class="size-8" />
        </div>
      </div>
    </div>
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="viteRef"
      :to-ref="logoRef"
      :curvature="-75"
      :end-y-offset="-10"
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="vueRef"
      :to-ref="logoRef"
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="vueuseRef"
      :to-ref="logoRef"
      :curvature="75"
      :end-y-offset="10"
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="piniaRef"
      :to-ref="logoRef"
      :curvature="-75"
      :end-y-offset="-10"
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="unocssRef"
      :to-ref="logoRef"
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="tsRef"
      :to-ref="logoRef"
      :curvature="75"
      :end-y-offset="10"
    />
  </div>
</template>
