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
    <FaPageHeader title="可阅读时间" description="FaTimeAgo" />
    <FaCodePreview :code="Demo1Code">
      <Demo1 />
    </FaCodePreview>
    <FaCodePreview
      title="距离 2020/10/17"
      :code="Demo2Code"
    >
      <template #default>
        <Demo2 />
      </template>
    </FaCodePreview>
    <FaCodePreview
      title="显示秒，且更新间隔为1秒"
      :code="Demo3Code"
    >
      <template #default>
        <Demo3 />
      </template>
    </FaCodePreview>
  </div>
</template>
