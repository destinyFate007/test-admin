<route lang="yaml">
meta:
  enabled: false
</route>

<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo1Code from './_demo1.vue?raw'
</script>

<template>
  <div>
    <FaPageHeader title="滚动区域" description="FaScrollArea" />
    <FaCodePreview :code="Demo1Code">
      <Demo1 />
    </FaCodePreview>
  </div>
</template>
