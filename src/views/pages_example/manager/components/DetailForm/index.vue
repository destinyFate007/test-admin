<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { toast } from 'vue-sonner'
import api from '@/api/modules/managerExample.ts'
import roleApi from '@/api/modules/roleExample.ts'

export interface Props {
  id?: number | string
}
const props = withDefaults(
  defineProps<Props>(),
  {
    id: '',
  },
)
const roleList = ref<Record<string, any>[]>([])
roleApi.allList().then((res) => {
  roleList.value = res.data.list
})
const loading = ref(false)
const formRef = useTemplateRef<FormInstance>('formRef')
const form = ref({
  id: props.id,
  account: '',
  name: '',
  mobile: '',
  sex: '2',
  role_id: '',
})
const formRules = ref<FormRules>({
  account: [
    { required: true, message: '请输入账号', trigger: 'blur' },
  ],
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
  ],
  mobile: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    {
      validator: (_rule, value, callback) => {
        const data: any = {
          key: 'mobile',
          value,
        }
        if (form.value.id !== '') {
          data.id = form.value.id
        }
        api.check(data).then((res) => {
          res.data.exist ? callback(new Error('手机号已存在')) : callback()
        })
      },
      trigger: 'blur',
    },
  ],
})

onMounted(() => {
  if (form.value.id !== '') {
    getInfo()
  }
})

function getInfo() {
  loading.value = true
  api.detail(form.value.id).then((res: any) => {
    loading.value = false
    form.value.account = res.data.account
    form.value.name = res.data.name
    form.value.mobile = res.data.mobile
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
      <ElFormItem label="账号" prop="account">
        <ElInput v-model="form.account" placeholder="请输入账号" />
      </ElFormItem>
      <ElFormItem label="姓名" prop="name">
        <ElInput v-model="form.name" placeholder="请输入姓名" />
      </ElFormItem>
      <ElFormItem label="手机号" prop="mobile">
        <ElInput v-model="form.mobile" placeholder="请输入手机号" />
      </ElFormItem>
      <ElFormItem label="性别" prop="sex">
        <ElRadioGroup v-model="form.sex">
          <ElRadioButton label="保密" value="2" />
          <ElRadioButton label="男" value="1" />
          <ElRadioButton label="女" value="0" />
        </ElRadioGroup>
      </ElFormItem>
      <ElFormItem label="角色" prop="role_id">
        <ElSelect v-model="form.role_id" placeholder="请选择角色">
          <ElOption v-for="(item) in roleList" :key="item.id" :label="item.name" :value="item.id" />
        </ElSelect>
      </ElFormItem>
    </ElForm>
  </div>
</template>
