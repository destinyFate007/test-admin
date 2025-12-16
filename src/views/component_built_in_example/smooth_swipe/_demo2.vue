<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ElButton, ElCheckbox, ElForm, ElFormItem, ElInput, ElLink, ElMessage, ElOption, ElSelect } from 'element-plus'

const activeIndex = ref<number>(0)

// 表单数据
const formData = reactive({
  // 第一步：基本信息
  name: '',
  email: '',
  phone: '',
  // 第二步：详细信息
  company: '',
  position: '',
  department: '',
  // 第三步：确认信息
  agree: false,
  newsletter: false,
})

// 表单引用
const formRef1 = ref<FormInstance>()
const formRef2 = ref<FormInstance>()
const formRef3 = ref<FormInstance>()

// 表单验证规则
const formRules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 2, max: 20, message: '姓名长度在 2 到 20 个字符', trigger: 'blur' },
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' },
  ],
  company: [
    { required: true, message: '请输入公司名称', trigger: 'blur' },
  ],
  position: [
    { required: true, message: '请输入职位', trigger: 'blur' },
  ],
  department: [
    { required: true, message: '请输入部门', trigger: 'blur' },
  ],
  agree: [
    {
      validator: (_rule, value, callback) => {
        if (!value) {
          callback(new Error('请同意用户协议'))
        }
        else {
          callback()
        }
      },
      trigger: 'change',
    },
  ],
})

// 获取当前步骤需要验证的字段
function getCurrentStepFields() {
  const stepFields = [
    ['name', 'email', 'phone'],
    ['company', 'position', 'department'],
    ['agree'],
  ]
  return stepFields[activeIndex.value] || []
}

// 获取当前步骤的表单引用
function getCurrentFormRef() {
  const formRefs = [formRef1, formRef2, formRef3]
  return formRefs[activeIndex.value]?.value
}

// 下一步
async function nextStep() {
  if (activeIndex.value < 2) {
    // 验证当前步骤
    const currentFields = getCurrentStepFields()
    if (currentFields.length > 0) {
      try {
        const currentFormRef = getCurrentFormRef()
        await currentFormRef?.validateField(currentFields)
        activeIndex.value++
      }
      catch {
        // 验证失败，不进入下一步
      }
    }
    else {
      activeIndex.value++
    }
  }
}

// 上一步
function prevStep() {
  if (activeIndex.value > 0) {
    activeIndex.value--
  }
}

// 提交表单
async function submitForm() {
  try {
    // 验证所有表单
    await Promise.all([
      formRef1.value?.validate(),
      formRef2.value?.validate(),
      formRef3.value?.validate(),
    ])
    ElMessage.success('表单提交成功！')
    // console.log('表单数据：', formData)
  }
  catch {
    ElMessage.error('请检查表单信息')
  }
}

// 重置表单
function resetForm() {
  formRef1.value?.resetFields()
  formRef2.value?.resetFields()
  formRef3.value?.resetFields()
  activeIndex.value = 0
}
</script>

<template>
  <div class="mx-auto max-w-2xl">
    <FaSmoothSwipe :active-index>
      <div class="pb-1">
        <h3 class="mb-4 text-center text-lg font-semibold">
          基本信息
        </h3>
        <ElForm
          ref="formRef1"
          :model="formData"
          :rules="formRules"
          label-width="100px"
        >
          <ElFormItem label="姓名" prop="name">
            <ElInput
              v-model="formData.name"
              placeholder="请输入您的姓名"
              clearable
            />
          </ElFormItem>
          <ElFormItem label="邮箱" prop="email">
            <ElInput
              v-model="formData.email"
              placeholder="请输入您的邮箱地址"
              clearable
            />
          </ElFormItem>
        </ElForm>
      </div>
      <div class="pb-1">
        <h3 class="mb-4 text-center text-lg font-semibold">
          详细信息
        </h3>
        <ElForm
          ref="formRef2"
          :model="formData"
          :rules="formRules"
          label-width="100px"
        >
          <ElFormItem label="公司名称" prop="company">
            <ElInput
              v-model="formData.company"
              placeholder="请输入您的公司名称"
              clearable
            />
          </ElFormItem>
          <ElFormItem label="职位" prop="position">
            <ElInput
              v-model="formData.position"
              placeholder="请输入您的职位"
              clearable
            />
          </ElFormItem>
          <ElFormItem label="部门" prop="department">
            <ElSelect
              v-model="formData.department"
              placeholder="请选择您的部门"
              clearable
              class="w-full"
            >
              <ElOption label="技术部" value="技术部" />
              <ElOption label="产品部" value="产品部" />
              <ElOption label="设计部" value="设计部" />
              <ElOption label="运营部" value="运营部" />
              <ElOption label="市场部" value="市场部" />
              <ElOption label="人事部" value="人事部" />
              <ElOption label="财务部" value="财务部" />
              <ElOption label="其他" value="其他" />
            </ElSelect>
          </ElFormItem>
        </ElForm>
      </div>
      <div class="pb-1">
        <h3 class="mb-4 text-center text-lg font-semibold">
          确认信息
        </h3>
        <div class="mb-4 rounded-lg bg-muted/50 p-4 space-y-2">
          <div class="flex justify-between">
            <span class="text-muted-foreground">姓名：</span>
            <span class="font-medium">{{ formData.name || '未填写' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted-foreground">邮箱：</span>
            <span class="font-medium">{{ formData.email || '未填写' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted-foreground">公司名称：</span>
            <span class="font-medium">{{ formData.company || '未填写' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted-foreground">职位：</span>
            <span class="font-medium">{{ formData.position || '未填写' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted-foreground">部门：</span>
            <span class="font-medium">{{ formData.department || '未填写' }}</span>
          </div>
        </div>
        <ElForm
          ref="formRef3"
          :model="formData"
          :rules="formRules"
          label-width="10px"
        >
          <ElFormItem prop="agree">
            <ElCheckbox v-model="formData.agree">
              我已阅读并同意
              <ElLink type="primary" href="#" target="_blank">
                《用户协议》
              </ElLink>
              和
              <ElLink type="primary" href="#" target="_blank">
                《隐私政策》
              </ElLink>
            </ElCheckbox>
          </ElFormItem>
          <ElFormItem>
            <ElCheckbox v-model="formData.newsletter">
              订阅我们的新闻通讯，获取最新产品信息
            </ElCheckbox>
          </ElFormItem>
        </ElForm>
      </div>
    </FaSmoothSwipe>
    <!-- 操作按钮 -->
    <div class="mt-6 flex justify-between">
      <div class="flex space-x-2">
        <ElButton
          v-if="activeIndex > 0"
          :disabled="activeIndex === 0"
          @click="prevStep"
        >
          上一步
        </ElButton>
        <ElButton variant="outline" @click="resetForm">
          重置
        </ElButton>
      </div>

      <div class="flex space-x-2">
        <ElButton
          v-if="activeIndex < 2"
          type="primary"
          @click="nextStep"
        >
          下一步
        </ElButton>
        <ElButton
          v-if="activeIndex === 2"
          type="primary"
          @click="submitForm"
        >
          提交
        </ElButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.step-actions {
  padding-top: 20px;
  border-top: 1px solid hsl(var(--border));
}
</style>
