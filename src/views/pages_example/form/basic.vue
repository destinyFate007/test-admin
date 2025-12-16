<script setup lang="ts">
import { ElButton, ElCheckbox, ElCheckboxGroup, ElCol, ElDatePicker, ElForm, ElFormItem, ElInput, ElOption, ElRadio, ElRadioGroup, ElRow, ElSelect, ElSwitch } from 'element-plus'

defineOptions({
  name: 'BasicForm',
})
const form = ref({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
</script>

<template>
  <div>
    <FaPageHeader title="基础表单" description="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。表单域标签也可支持响应式。" />
    <FaPageMain>
      <!--  -->
      <ElRow type="flex" justify="center">
        <ElCol :md="12" :sm="18">
          <ElForm :model="form" label-width="80px" class="demo-ruleForm">
            <ElFormItem label="活动名称" prop="name">
              <ElInput v-model="form.name" placeholder="请输入活动名称" />
            </ElFormItem>
            <ElFormItem label="活动区域" prop="region">
              <ElSelect v-model="form.region" placeholder="请选择活动区域">
                <ElOption label="区域一" value="shanghai" />
                <ElOption label="区域二" value="beijing" />
              </ElSelect>
            </ElFormItem>
            <ElFormItem label="日期时间" prop="date1">
              <ElDatePicker v-model="form.date1" type="datetime" placeholder="选择日期时间" />
            </ElFormItem>
            <ElFormItem label="活动时间" prop="date2">
              <ElDatePicker v-model="form.date2" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期" />
            </ElFormItem>
            <ElFormItem label="是否配送">
              <ElSwitch v-model="form.delivery" active-color="#13ce66" inactive-color="#ff4949" />
            </ElFormItem>
            <ElFormItem label="活动类型">
              <ElCheckboxGroup v-model="form.type">
                <ElCheckbox name="type" label="美食/餐厅线上活动" />
                <ElCheckbox name="type" label="活动场地" />
                <ElCheckbox name="type" label="线下主题活动" />
                <ElCheckbox name="type" label="单纯品牌曝光" />
              </ElCheckboxGroup>
            </ElFormItem>
            <ElFormItem label="特殊资源">
              <ElRadioGroup v-model="form.resource">
                <ElRadio label="线上品牌商赞助" />
                <ElRadio label="线下场地免费" />
              </ElRadioGroup>
            </ElFormItem>
            <ElFormItem label="活动形式" prop="desc">
              <ElInput v-model="form.desc" type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" />
            </ElFormItem>
            <ElFormItem label="" class="text-center">
              <ElButton type="primary">
                提交
              </ElButton>
              <ElButton>取消</ElButton>
            </ElFormItem>
          </ElForm>
        <!--  -->
        </ElCol>
      </ElRow>
    </FaPageMain>
  </div>
</template>

<style scoped>
/* BasicForm.vue */
</style>
