<script setup lang="ts">
const containerRef = useTemplateRef('containerRef')
const githubRef = useTemplateRef('githubRef')
const googleRef = useTemplateRef('googleRef')
</script>

<template>
  <div ref="containerRef" class="relative w-full flex items-center justify-center overflow-hidden p-10">
    <div class="size-full flex justify-between">
      <div ref="githubRef" class="z-10 flex items-center justify-center border-2 rounded-full bg-card p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
        <FaIcon name="i-logos:github" class="size-20" />
      </div>
      <div ref="googleRef" class="z-10 flex items-center justify-center border-2 rounded-full bg-card p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
        <FaIcon name="i-logos:google" class="size-20" />
      </div>
    </div>
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="githubRef"
      :to-ref="googleRef"
      :curvature="-50"
      :start-y-offset="20"
      :end-y-offset="20"
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="githubRef"
      :to-ref="googleRef"
      :curvature="50"
      :start-y-offset="-20"
      :end-y-offset="-20"
      reverse
    />
  </div>
</template>
