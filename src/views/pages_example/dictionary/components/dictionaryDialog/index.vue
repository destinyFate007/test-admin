<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { useVModel } from '@vueuse/core'
import { toast } from 'vue-sonner'
import api from '@/api/modules/dictionaryExample'

interface Props {
  parentId?: string
  id?: string
  tree: any[]
  modelValue?: boolean
}

interface Emits {
  addNode: [node: { id: string, label: string, code: string }]
  editNode: [node: { id: string, label: string, code: string }, parentId: string]
}

const props = withDefaults(defineProps<Props>(), {
  parentId: '',
  id: '',
  modelValue: false,
})

const emit = defineEmits<Emits>()

const modelValue = useVModel(props, 'modelValue')
const formRef = ref<FormInstance>()
const form = ref<Record<string, any>>({
  parentId: props.parentId,
  id: props.id,
  name: '',
  code: '',
})
const formRules = ref<FormRules>({
  name: [{
    required: true,
    message: '请输入字典名称',
    trigger: 'blur',
  }],
  code: [{
    required: true,
    message: '请输入字典编码',
    trigger: 'blur',
  }],
})

const dialogTitle = computed(() => props.id === '' ? '新增字典' : '编辑字典')

const filterTreeOptions = computed(() => {
  const filterTree = (tree: any[], targetId: string, isDisabled = false): any[] => {
    const result: any[] = []
    tree.forEach((node) => {
      const newNode = { ...node }
      if (newNode.id === targetId || isDisabled) {
        newNode.disabled = true
        if (newNode.children) {
          newNode.children = filterTree(newNode.children, targetId, true)
        }
      }
      else {
        newNode.disabled = false
        if (newNode.children) {
          newNode.children = filterTree(newNode.children, targetId, isDisabled)
        }
      }
      result.push(newNode)
    })
    return result
  }
  return filterTree(props.tree, props.id)
})

onMounted(() => {
  if (props.id) {
    api.detail(props.id).then((res) => {
      form.value.id = res.data.id
      form.value.name = res.data.name
      form.value.code = res.data.code
    })
  }
})

async function handleSubmit() {
  formRef.value?.validate((valid) => {
    if (valid) {
      if (form.value.id === '') {
        api.create(form.value).then((res) => {
          toast.success('模拟新增成功')
          emit('addNode', {
            id: res.data.data,
            label: form.value.name,
            code: form.value.code,
          })
          handleDialogClosed()
        })
      }
      else {
        api.edit(form.value).then(() => {
          toast.success('模拟编辑成功')
          emit('editNode', {
            id: form.value.id,
            label: form.value.name,
            code: form.value.code,
          }, form.value.parentId)
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
    <!-- 表单内容 -->
    <ElForm
      ref="formRef"
      :model="form"
      :rules="formRules"
      label-width="80px"
    >
      <ElFormItem label="父级字典" prop="parentId">
        <ElCascader
          v-model="form.parentId"
          :options="filterTreeOptions"
          :props="{ value: 'id', emitPath: false, checkStrictly: true }"
          :show-all-levels="false"
          placeholder="请选择父级字典，默认为根字典"
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

      <ElFormItem label="字典编码" prop="code">
        <ElInput
          v-model="form.code"
          placeholder="请输入字典编码"
          clearable
        />
      </ElFormItem>
    </ElForm>

    <!-- 弹窗底部按钮 -->
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
