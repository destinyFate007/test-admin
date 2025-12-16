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
    <FaPageHeader title="图片上传" description="FaImageUpload" />
    <FaCodePreview :code="Demo1Code">
      <Demo1 />
    </FaCodePreview>
    <FaCodePreview title="多图上传" :code="Demo2Code">
      <Demo2 />
    </FaCodePreview>
    <FaCodePreview title="限制上传数量、大小、类型、点击事件" :code="Demo3Code">
      <Demo3 />
    </FaCodePreview>
  </div>
</template>
