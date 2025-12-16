<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo1Code from './_demo1.vue?raw'

defineOptions({
  name: 'ComponentExampleLoading',
})
</script>

<template>
  <div>
    <FaPageHeader title="加载遮罩" description="FaLoading" />
    <FaCodePreview :code="Demo1Code">
      <Demo1 />
    </FaCodePreview>
  </div>
</template>
