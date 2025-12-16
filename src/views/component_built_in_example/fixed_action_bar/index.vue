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
    <FaPageHeader title="固定底部操作栏">
      <template #description>
        <div class="space-y-2">
          <p>FaFixedActionBar</p>
          <p>避免因页面过长，导致操作按钮需要滚动到页面底部才能操作</p>
        </div>
      </template>
    </FaPageHeader>
    <FaCodePreview :code="Demo1Code">
      <Demo1 />
    </FaCodePreview>
  </div>
</template>
