<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo1Code from './_demo1.vue?raw'

defineOptions({
  name: 'ComponentExampleSparkline',
})
</script>

<template>
  <div>
    <FaPageHeader title="迷你图" description="FaSparkline" />
    <FaCodePreview :code="Demo1Code">
      <Demo1 />
    </FaCodePreview>
  </div>
</template>
