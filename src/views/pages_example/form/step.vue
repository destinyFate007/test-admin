<script setup lang="ts">
import { ElButton, ElCol, ElForm, ElFormItem, ElInput, ElOption, ElResult, ElRow, ElSelect } from 'element-plus'

defineOptions({
  name: 'StepForm',
})
const active = ref(0)
const payAccountList = ref([
  {
    value: 'admin@fantastic.admin',
    label: 'admin@fantastic.admin',
  },
  {
    value: 'test@fantastic.admin',
    label: 'test@fantastic.admin',
  },
])
const loading = ref(false)
const form = ref({
  payAccount: 'admin@fantastic.admin',
  receiptAccount: 'test@alipay.com',
  receiptType: 1,
  name: 'Hooray',
  price: '596.00',
  password: '123456',
})
function w() {
  loading.value = true
  setTimeout(() => {
    active.value = 2
    loading.value = false
  }, 2000)
}
</script>

<template>
  <div>
    <FaPageHeader title="分步表单" description="将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。" />
    <FaPageMain>
      <ElRow type="flex" justify="center">
        <ElCol :md="12" :sm="18">
          <ElSteps :active="active" finish-status="success" align-center style="margin: 20px 0 40px;">
            <ElStep title="填写转账信息" />
            <ElStep title="确认转账信息" />
            <ElStep title="完成" />
          </ElSteps>

          <ElForm :model="form" label-width="100px">
            <div v-if="active === 0">
              <ElFormItem label="付款账户" prop="payAccount">
                <ElSelect v-model="form.payAccount" placeholder="请选择付款账户">
                  <ElOption v-for="item in payAccountList" :key="item.value" :label="item.label" :value="item.value" />
                </ElSelect>
              </ElFormItem>
              <ElFormItem label="收款账户" prop="receiptAccount">
                <ElInput v-model="form.receiptAccount" placeholder="请输入收款账户">
                  <template #prepend>
                    <ElSelect v-model="form.receiptType" style="width: 100px;" placeholder="请选择收款账户类型">
                      <ElOption label="支付宝" :value="1" />
                      <ElOption label="微信" :value="2" />
                    </ElSelect>
                  </template>
                </ElInput>
              </ElFormItem>
              <ElFormItem label="收款人姓名" prop="price">
                <ElInput v-model="form.name" placeholder="请输入收款人姓名" />
              </ElFormItem>
              <ElFormItem label="转账金额" prop="price">
                <ElInput v-model="form.price" placeholder="请输入转账金额">
                  <template #prefix>
                    <div style="width: 25px;">
                      ￥
                    </div>
                  </template>
                </ElInput>
              </ElFormItem>
              <ElFormItem label="" class="text-center">
                <ElButton type="primary" @click.prevent.stop="() => active = 1">
                  下一步
                </ElButton>
              </ElFormItem>
            </div>
            <div v-else-if="active === 1">
              <ElFormItem label="付款账户" prop="payAccount">
                {{ form.payAccount }}
              </ElFormItem>
              <ElFormItem label="收款账户" prop="receiptAccount">
                {{ form.receiptAccount }}
              </ElFormItem>
              <ElFormItem label="收款人姓名" prop="price">
                {{ form.name }}
              </ElFormItem>
              <ElFormItem label="转账金额" prop="price">
                {{ form.price }}
              </ElFormItem>
              <ElDivider />
              <ElFormItem label="支付密码" prop="password">
                <ElInput v-model="form.password" type="password" placeholder="请输入支付密码" />
              </ElFormItem>
              <ElFormItem label="" class="text-center">
                <ElButton :loading="loading" type="primary" @click.prevent.stop="w">
                  提交
                </ElButton>
                <ElButton @click.prevent.stop="() => active = 0">
                  上一步
                </ElButton>
              </ElFormItem>
            </div>
            <div v-else-if="active === 2">
              <ElResult
                title="交易成功"
                sub-title="预计两小时内到账"
                icon="success"
              >
                <template #extra>
                  <ElFormItem label="付款账户" prop="payAccount">
                    {{ form.payAccount }}
                  </ElFormItem>
                  <ElFormItem label="收款账户" prop="receiptAccount">
                    {{ form.receiptAccount }}
                  </ElFormItem>
                  <ElFormItem label="收款人姓名" prop="price">
                    {{ form.name }}
                  </ElFormItem>
                  <ElFormItem label="转账金额" prop="price">
                    {{ form.price }}
                  </ElFormItem>
                  <ElButton type="primary" @click.prevent.stop="() => active = 0">
                    再转一笔
                  </ElButton>
                  <ElButton @click.prevent.stop="() => active = 0">
                    查看账单
                  </ElButton>
                </template>
              </ElResult>
            </div>
          </ElForm>
        </ElCol>
      </ElRow>
    </FaPageMain>
  </div>
</template>

<style scoped>
/* setp  */
</style>
