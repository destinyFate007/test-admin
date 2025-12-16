<script setup lang="ts">
import { ElButton, ElInput } from 'element-plus'
import { toast } from 'vue-sonner'

defineOptions({
  name: 'LinkExampleIframe',
})

const router = useRouter()
const data = ref({
  title: '自定义标题',
  iframe: 'https://fantastic-admin.hurui.me/',
})
function i() {
  if (/^https?:\/\//.test(data.value.iframe)) {
    router.push({
      name: 'linkExampleIframeDynamicTest',
      query: {
        title: data.value.title,
        iframe: data.value.iframe,
      },
    })
  }
  else {
    toast.error('请输入正确的链接')
  }
}
</script>

<template>
  <FaPageMain>
    <ElInput v-model="data.title" placeholder="请输入 Iframe 页面的自定义标题，如果不设置，则会显示路由默认的标题" />
    <ElInput v-model="data.iframe" placeholder="输入 Iframe 页面的链接">
      <template #append>
        <ElButton type="primary" @click="i">
          打开
        </ElButton>
      </template>
    </ElInput>
  </FaPageMain>
</template>
