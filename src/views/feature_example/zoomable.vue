<script setup lang="ts">
import { ElDialog } from 'element-plus'
import imgLogo from '@/assets/images/logo.svg'

const dialog = ref(false)
</script>

<template>
  <div>
    <FaPageHeader title="图片预览" />
    <FaPageMain>
      <img v-zoomable :src="imgLogo" block h-20 w-20 alt="">
    </FaPageMain>
    <FaPageMain>
      <FaButton variant="outline" @click="() => dialog = true">
        打开对话框
      </FaButton>
      <ElDialog v-model="dialog" title="Tips" width="30%">
        <img v-zoomable :src="imgLogo" block h-20 w-20 alt="">
      </ElDialog>
    </FaPageMain>
  </div>
</template>
