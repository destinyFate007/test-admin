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

defineOptions({
  name: 'ComponentExampleBuiltInModal',
})
</script>

<template>
  <div>
    <FaPageHeader title="弹窗" description="FaModal" />
    <FaCodePreview :code="Demo1Code">
      <template #default>
        <Demo1 />
      </template>
    </FaCodePreview>
    <FaCodePreview title="对话框" :code="Demo2Code">
      <template #default>
        <Demo2 />
      </template>
    </FaCodePreview>
    <FaCodePreview title="函数式调用" :code="Demo3Code">
      <template #default>
        <Demo3 />
      </template>
    </FaCodePreview>
  </div>
</template>
