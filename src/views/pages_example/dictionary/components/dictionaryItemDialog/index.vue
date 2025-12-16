<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { useVModel } from '@vueuse/core'
import { toast } from 'vue-sonner'
import api from '@/api/modules/dictionaryExample'

interface Props {
  dictionaryId?: string
  id?: string
  tree: any[]
  modelValue?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  dictionaryId: '',
  id: '',
  modelValue: false,
})

const modelValue = useVModel(props, 'modelValue')
const formRef = ref<FormInstance>()

const form = ref<Record<string, any>>({
  dictionaryId: props.dictionaryId,
  id: props.id,
  name: '',
  code: '',
})

const formRules = ref<FormRules>({
  dictionaryId: [{
    required: !0,
    message: '请选择所属字典',
  }],
  name: [{
    required: !0,
    message: '请输入字典项名称',
  }],
  value: [{
    required: !0,
    message: '请输入字典项键值',
  }],
})

const dialogTitle = computed(() => props.id === '' ? '新增字典' : '编辑字典')

onMounted(() => {
  if (props.id) {
    api.itemDetail(props.id).then((res) => {
      form.value.id = res.data.id
      form.value.name = res.data.name
      form.value.enable = res.data.enable
    })
  }
})

async function handleSubmit() {
  formRef.value?.validate((valid) => {
    if (valid) {
      if (form.value.id === '') {
        api.itemCreate(form.value).then(() => {
          toast.success('模拟新增成功')
          handleDialogClosed()
        })
      }
      else {
        api.itemEdit(form.value).then(() => {
          toast.success('模拟编辑成功')
          handleDialogClosed()
        })
      }
    }
  })
}
function handleDialogClosed() {
  modelValue.value = false
}
</script>

<template>
  <ElDialog
    v-model="modelValue"
    :title="dialogTitle"
    width="400px"
    :close-on-click-modal="false"
    append-to-body
    destroy-on-close
    @closed="handleDialogClosed"
  >
    <ElForm
      ref="formRef"
      :model="form"
      :rules="formRules"
      label-width="100px"
    >
      <ElFormItem label="父级字典" prop="dictionaryId">
        <ElCascader
          v-model="form.dictionaryId"
          :options="tree"
          :props="{ value: 'id', emitPath: false, checkStrictly: true }"
          :show-all-levels="false"
          placeholder="请选择所属字典"
          clearable
        />
      </ElFormItem>
      <ElFormItem label="字典名称" prop="name">
        <ElInput
          v-model="form.name"
          placeholder="请输入字典名称"
          clearable
        />
      </ElFormItem>
      <ElFormItem label="字典项键值" prop="value">
        <ElInput
          v-model="form.value"
          placeholder="字典项键值"
          clearable
        />
      </ElFormItem>
      <ElFormItem label="字典项键值" prop="enable">
        <ElSwitch v-model="form.enable" inline-prompt active-text="启用" inactive-text="禁用" />
      </ElFormItem>
    </ElForm>
    <template #footer>
      <ElButton size="large" @click="handleDialogClosed">
        取消
      </ElButton>
      <ElButton type="primary" size="large" @click="handleSubmit">
        确定
      </ElButton>
    </template>
  </ElDialog>
</template>

<style lang="scss" scoped>
:deep(.el-cascader) {
  width: 100%;
}
</style>
