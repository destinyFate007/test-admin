<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { toast } from 'vue-sonner'
import api from '@/api/modules/jobExample.ts'

export interface Props {
  id?: number | string
  departmentId?: number | string
}
const props = withDefaults(
  defineProps<Props>(),
  {
    id: '',
    departmentId: '',
  },
)

const loading = ref(false)
const formRef = useTemplateRef<FormInstance>('formRef')
const form = ref({
  id: props.id,
  department_id: props.departmentId,
  title: '',
})
const formRules = ref<FormRules>({
  title: [
    { required: true, message: '请输入职位名称', trigger: 'blur' },
  ],
})

onMounted(() => {
  if (form.value.id !== '') {
    getInfo()
  }
})

function getInfo() {
  loading.value = true
  api.detail({
    department_id: form.value.department_id,
    id: form.value.id,
  }).then((res: any) => {
    loading.value = false
    form.value.title = res.data.title
  })
}

defineExpose({
  submit() {
    return new Promise<void>((resolve) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (form.value.id === '') {
            api.create(form.value).then(() => {
              toast.success('模拟新增成功')
              resolve()
            })
          }
          else {
            api.edit(form.value).then(() => {
              toast.success('模拟编辑成功')
              resolve()
            })
          }
        }
      })
    })
  },
})
</script>

<template>
  <div v-loading="loading">
    <ElForm ref="formRef" :model="form" :rules="formRules" label-width="120px" label-suffix="：">
      <ElFormItem label="职位" prop="title">
        <ElInput v-model="form.title" placeholder="请输入职位名称" />
      </ElFormItem>
    </ElForm>
  </div>
</template>

<style scoped>
/* 样式 */
</style>
