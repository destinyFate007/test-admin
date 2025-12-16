<script setup lang="ts">
import logo from '@/assets/images/logo.svg'

const containerRef = useTemplateRef('containerRef')
const logoRef = useTemplateRef('logoRef')
const epRef = useTemplateRef('epRef')
const antdvRef = useTemplateRef('antdvRef')
const arcoRef = useTemplateRef('arcoRef')
const naiveRef = useTemplateRef('naiveRef')
const tdesignRef = useTemplateRef('tdesignRef')
const vexipRef = useTemplateRef('vexipRef')
const iduxRef = useTemplateRef('iduxRef')
</script>

<template>
  <div ref="containerRef" class="relative h-100 w-full flex items-center justify-center overflow-hidden p-10">
    <div class="size-full max-w-2xl flex flex-col items-stretch justify-between gap-10">
      <div class="flex flex-row items-center justify-center">
        <div ref="logoRef" class="z-10 flex items-center justify-center border-2 rounded-12 bg-card p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
          <FaIcon :name="logo" class="size-20" />
        </div>
      </div>
      <div class="flex flex-row items-end justify-between">
        <div ref="epRef" class="z-10 mb-12 flex items-center justify-center border-2 rounded-3xl bg-card p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
          <FaIcon name="i-logos:element" class="size-8" />
        </div>
        <div ref="antdvRef" class="z-10 mb-6 flex items-center justify-center border-2 rounded-3xl bg-card p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
          <FaIcon name="i-logos:ant-design" class="size-8" />
        </div>
        <div ref="arcoRef" class="z-10 mb-2 flex items-center justify-center border-2 rounded-3xl bg-card p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
          <FaIcon name="https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico" class="size-8" />
        </div>
        <div ref="naiveRef" class="z-10 flex items-center justify-center border-2 rounded-3xl bg-card p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
          <FaIcon name="i-logos:naiveui" class="size-8" />
        </div>
        <div ref="tdesignRef" class="z-10 mb-2 flex items-center justify-center border-2 rounded-3xl bg-card p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
          <FaIcon name="https://static.tdesign.tencent.com/favicon.ico" class="size-8" />
        </div>
        <div ref="vexipRef" class="z-10 mb-6 flex items-center justify-center border-2 rounded-3xl bg-card p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
          <FaIcon name="https://www.vexipui.com/vexip-ui.svg" class="size-8" />
        </div>
        <div ref="iduxRef" class="z-10 mb-12 flex items-center justify-center border-2 rounded-3xl bg-card p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
          <FaIcon name="https://idux.site/favicon.ico" class="size-8" />
        </div>
      </div>
    </div>
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="logoRef"
      :to-ref="epRef"
      :curvature="-150"
      dotted
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="logoRef"
      :to-ref="antdvRef"
      :curvature="-150"
      dotted
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="logoRef"
      :to-ref="arcoRef"
      :curvature="-150"
      dotted
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="logoRef"
      :to-ref="naiveRef"
      dotted
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="logoRef"
      :to-ref="tdesignRef"
      :curvature="-150"
      dotted
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="logoRef"
      :to-ref="vexipRef"
      :curvature="-150"
      dotted
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="logoRef"
      :to-ref="iduxRef"
      :curvature="-150"
      dotted
    />
  </div>
</template>
