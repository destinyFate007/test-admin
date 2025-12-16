<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
import { ElCard, ElCol, ElForm, ElFormItem, ElInput, ElRadioButton, ElRadioGroup, ElRow } from 'element-plus'
import { toast } from 'vue-sonner'
import api from '@/api/modules/deliveryExample'
import Freight from '../Freight/index.vue'

export interface Props {
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
})

const loading = ref(false)
const formRef = useTemplateRef<FormInstance>('formRef')
const form = ref({
  id: props.id,
  title: '',
  address: [],
  type: 1,
  status: !0,
  first_step: '',
  first_price: '',
  continued_step: '',
  continued_price: '',
  infos: [],
})
const formRules = ref<FormRules>({
  title: [
    { required: true, message: '请输入标题', trigger: 'blur' },
  ],
})

onMounted(() => {
  if (form.value.id !== '') {
    getInfo()
  }
})

function getInfo() {
  loading.value = true
  api.detail(form.value.id).then((res) => {
    loading.value = false
    form.value = res.data as any
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
      <ElFormItem label="标题" prop="title">
        <ElInput v-model="form.title" placeholder="请输入" />
      </ElFormItem>
      <ElFormItem label="发货地址" prop="address">
        <PcasCascader v-model="form.address" format="name" placeholder="请输入" />
      </ElFormItem>
      <ElFormItem label="计价方式" prop="address">
        <ElRadioGroup v-model="form.type">
          <!--  -->
          <ElRadioButton :value="1">
            按件数
          </ElRadioButton>
          <ElRadioButton :value="2">
            按重量
          </ElRadioButton>
        </ElRadioGroup>
      </ElFormItem>
      <!-- 运费模版 -->
      <ElFormItem label="运费模版" prop="address">
        <div class="freight">
          <ElCard shadow="never">
            <template #header>
              默认运费
            </template>
            <ElRow :gutter="20">
              <ElCol :md="6">
                <ElFormItem prop="first_step">
                  <ElInput v-model="form.first_step" size="small" placeholder="请输入">
                    <template #prepend>
                      {{ form.type === 1 ? "首件" : "首重" }}
                    </template>
                    <template #append>
                      {{ form.type === 1 ? "件" : "kg" }}
                    </template>
                  </ElInput>
                </ElFormItem>
              </ElCol>
              <ElCol :md="6">
                <ElFormItem prop="first_price">
                  <ElInput v-model="form.first_price" size="small" placeholder="请输入">
                    <template #prepend>
                      首费
                    </template>
                    <template #append>
                      元
                    </template>
                  </ElInput>
                </ElFormItem>
              </ElCol>
              <ElCol :md="6">
                <ElFormItem prop="continued_step">
                  <ElInput v-model="form.continued_step" size="small" placeholder="请输入">
                    <template #prepend>
                      {{ form.type === 1 ? "续件" : "续重" }}
                    </template>
                    <template #append>
                      {{ form.type === 1 ? "件" : "kg" }}
                    </template>
                  </ElInput>
                </ElFormItem>
              </ElCol>
              <ElCol :md="6">
                <ElFormItem prop="continued_price">
                  <ElInput v-model="form.continued_price" size="small" placeholder="请输入">
                    <template #prepend>
                      续费
                    </template>
                    <template #append>
                      元
                    </template>
                  </ElInput>
                </ElFormItem>
              </ElCol>
            </ElRow>
          </ElCard>
          <ElRow>
            <ElCol :span="24">
              <Freight v-model="form.infos" :type="form.type" />
            </ElCol>
          </ElRow>
        </div>
      </ElFormItem>
      <ElFormItem label="是否启用">
        <ElRadioGroup v-model="form.status">
          <!--  -->
          <ElRadioButton :value="true">
            启用
          </ElRadioButton>
          <ElRadioButton :value="false">
            停用
          </ElRadioButton>
        </ElRadioGroup>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<style scoped>
.freight {
  width: 100%;
  line-height: initial;

  :deep(.el-card) {
    margin-bottom: 10px;
    line-height: initial;

    .el-input__inner {
      text-align: center;
    }
  }
}
</style>
