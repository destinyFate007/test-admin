<script setup lang="ts">
import eventBus from '@/utils/eventBus'
import DetailForm from './components/DetailForm/index.vue'

defineOptions({
  name: 'StandardModuleDetail',
})

const route = useRoute()
const router = useRouter()
const mainPage = useMainPage()

onMounted(() => {
  mainPage.setCustomTitle(route.params.id ? '编辑' : '新增')
})
onBeforeUnmount(() => {
  mainPage.resetCustomTitle()
})

const formRef = useTemplateRef('formRef')

function onSubmit() {
  formRef.value?.submit().then(() => {
    eventBus.emit('get-data-list')
    onCancel()
  })
}

function onCancel() {
  router.close({ name: 'pagesExampleShopDeliveryList' })
}
</script>

<template>
  <div>
    <FaPageHeader :title="route.params.id ? '编辑' : '新增'">
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
