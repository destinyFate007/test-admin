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
import Demo4 from './_demo4.vue'
import Demo4Code from './_demo4.vue?raw'
</script>

<template>
  <div>
    <FaPageHeader title="内容块" description="FaPageMain" />
    <FaCodePreview :code="Demo1Code">
      <Demo1 />
    </FaCodePreview>
    <FaCodePreview :code="Demo2Code">
      <Demo2 />
    </FaCodePreview>
    <FaCodePreview :code="Demo3Code">
      <Demo3 />
    </FaCodePreview>
    <FaCodePreview :code="Demo4Code">
      <Demo4 />
    </FaCodePreview>
  </div>
</template>
