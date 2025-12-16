<script setup lang="ts">
import type { FileItem } from '@/ui/components/FaFileUpload/index.vue'
import { toast } from 'vue-sonner'

const files = ref<FileItem[]>([])

function handleSuccess() {
  toast.success('模拟上传成功')
}
</script>

<template>
  <FaFileUpload
    v-model="files"
    action="/mock/upload"
    :after-upload="(response) => response.data.url"
    multiple
    @on-success="handleSuccess"
  />
</template>
