<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo1Code from './_demo1.vue?raw'
import Demo2 from './_demo2.vue'
import Demo2Code from './_demo2.vue?raw'

defineOptions({
  name: 'Iconpicker',
})
</script>

<template>
  <div>
    <FaPageHeader title="图标选择器" description="FaIconPicker" />
    <FaCodePreview :code="Demo1Code">
      <Demo1 />
    </FaCodePreview>
    <FaCodePreview title="尺寸" :code="Demo2Code">
      <Demo2 />
    </FaCodePreview>
  </div>
</template>
