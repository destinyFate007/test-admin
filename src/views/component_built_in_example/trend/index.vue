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
    <FaPageHeader title="趋势符号">
      <template #description>
        <p>FaTrend</p>
        <p style="margin-bottom: 0;">
          标记上升和下降趋势。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外
        </p>
      </template>
    </FaPageHeader>
    <FaCodePreview :code="Demo1Code">
      <Demo1 />
    </FaCodePreview>
    <FaCodePreview title="颜色反转" :code="Demo2Code">
      <Demo2 />
    </FaCodePreview>
    <FaCodePreview title="前缀后缀" :code="Demo3Code">
      <Demo3 />
    </FaCodePreview>
  </div>
</template>
