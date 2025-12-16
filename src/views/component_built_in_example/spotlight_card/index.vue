<route lang="yaml">
meta:
  enabled: false
</route>

<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo1Code from './_demo1.vue?raw'
import Demo2 from './_demo2.vue'
import Demo2Code from './_demo2.vue?raw'
</script>

<template>
  <div>
    <FaPageHeader title="聚光卡片" description="FaSpotlightCard" />
    <FaCodePreview
      :code="Demo1Code"
    >
      <template #default>
        <Demo1 />
      </template>
    </FaCodePreview>
    <FaCodePreview
      title="尺寸 / 颜色 / 透明底"
      :code="Demo2Code"
    >
      <template #default>
        <Demo2 />
      </template>
    </FaCodePreview>
  </div>
</template>
