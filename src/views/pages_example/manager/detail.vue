<script setup lang="ts">
import eventBus from '@/utils/eventBus'
import DetailForm from './components/DetailForm/index.vue'

defineOptions({
  name: 'PagesExampleManagerDetail',
})

const route = useRoute()
const router = useRouter()

const formRef = useTemplateRef('formRef')

function onSubmit() {
  formRef.value?.submit().then(() => {
    eventBus.emit('get-data-list')
    onCancel()
  })
}

function onCancel() {
  router.close({ name: 'pagesExampleGeneralManagerList' })
}
</script>

<template>
  <div>
    <FaPageHeader :title="route.name === 'routerName' ? '新增管理员' : '编辑管理员'">
      <FaButton variant="outline" size="sm" class="rounded-full" @click="onCancel">
        <FaIcon name="i-ep:arrow-left" />
        返回
      </FaButton>
    </FaPageHeader>
    <FaPageMain>
      <ElRow>
        <ElCol :md="24" :lg="16">
          <DetailForm :id="route.params.id as string" ref="formRef" />
        </ElCol>
      </ElRow>
    </FaPageMain>
    <FaFixedActionBar>
      <div class="flex-center gap-4">
        <FaButton @click="onSubmit">
          提交
        </FaButton>
        <FaButton variant="outline" @click="onCancel">
          取消
        </FaButton>
      </div>
    </FaFixedActionBar>
  </div>
</template>
