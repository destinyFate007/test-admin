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
    <FaPageHeader title="复选框" description="FaCheckbox" />
    <FaCodePreview :code="Demo1Code">
      <Demo1 />
    </FaCodePreview>
    <FaCodePreview title="半选状态" :code="Demo2Code">
      <Demo2 />
    </FaCodePreview>
  </div>
</template>
