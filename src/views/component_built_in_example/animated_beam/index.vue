<route lang="yaml">
meta:
  enabled: false
</route>

<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo1Code from './_demo1.vue?raw'
import Demo2 from './_demo2.vue'
import Demo2Code from './_demo2.vue?raw'
import Demo3 from './_demo3.vue'
import Demo3Code from './_demo3.vue?raw'
</script>

<template>
  <div>
    <FaPageHeader title="动画光束" description="FaAnimatedBeam" />
    <FaCodePreview
      :code="Demo1Code"
    >
      <template #default>
        <Demo1 />
      </template>
    </FaCodePreview>
    <FaCodePreview
      title="虚线"
      :code="Demo2Code"
    >
      <template #default>
        <Demo2 />
      </template>
    </FaCodePreview>
    <FaCodePreview
      title="反向"
      :code="Demo3Code"
    >
      <template #default>
        <Demo3 />
      </template>
    </FaCodePreview>
  </div>
</template>
