<script setup lang="ts">
import { toast } from 'vue-sonner'

const files = ref<string[]>([])

function handleSuccess() {
  toast.success('模拟上传成功')
}
</script>

<template>
  <FaImageUpload
    v-model="files"
    action="/mock/upload"
    :after-upload="(response) => response.data.url"
    :width="200"
    :height="130"
    :dimension="{ width: 400, height: 260 }"
    :ext="['png']"
    :size="200 * 1024"
    :max="0"
    @on-success="handleSuccess"
  >
    <FaIcon name="i-noto:identification-card" class="size-50 opacity-50" />
  </FaImageUpload>
</template>
