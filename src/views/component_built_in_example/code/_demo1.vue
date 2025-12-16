<script setup lang="ts">
const code = `<FaCard title="卡片标题" description="卡片描述" class="w-80">
  卡片内容
  <template #footer>
    卡片底部
  </template>
</FaCard>`
</script>

<template>
  <FaCode :code class="flex-1" />
</template>
