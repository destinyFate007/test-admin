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
    <FaPageHeader title="数字卡片" description="FaDigitalCard" />
    <FaCodePreview
      :code="Demo1Code"
    >
      <template #default>
        <Demo1 />
      </template>
    </FaCodePreview>
  </div>
</template>
