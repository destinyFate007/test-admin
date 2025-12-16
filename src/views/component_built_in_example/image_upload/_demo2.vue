<script setup lang="ts">
import { toast } from 'vue-sonner'

const files = ref<string[]>(['https://fantastic-admin.hurui.me/logo.svg'])

function handleSuccess() {
  toast.success('模拟上传成功')
}
</script>

<template>
  <FaImageUpload
    v-model="files"
    action="/mock/upload"
    :after-upload="(response) => response.data.url"
    :max="2"
    @on-success="handleSuccess"
  />
</template>
