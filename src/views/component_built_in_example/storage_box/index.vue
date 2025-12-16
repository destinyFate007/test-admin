<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo1Code from './_demo1.vue?raw'
import Demo2 from './_demo2.vue'
import Demo2Code from './_demo2.vue?raw'

defineOptions({
  name: 'StorageBox',
})
</script>

<template>
  <div>
    <FaPageHeader title="储存箱" description="KStorageBox" />
    <FaCodePreview title="你可以将页面中的数据（object/array）储存到该组件内，并在需要的时候取出来" :code="Demo1Code">
      <Demo1 />
    </FaCodePreview>
    <FaCodePreview title="推荐场景：具有复杂筛选项的页面，并记录常用的筛选条件" :code="Demo2Code">
      <Demo2 />
    </FaCodePreview>
  </div>
</template>
