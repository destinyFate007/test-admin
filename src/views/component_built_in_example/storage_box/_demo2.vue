<script setup lang="ts">
import { ElButton, ElCheckbox, ElCol, ElForm, ElFormItem, ElInput, ElOption, ElRow, ElSelect } from 'element-plus'

import { toast } from 'vue-sonner'

const search = ref({
  name: '',
  department_id: '',
  department_job_id: '',
  role_id: '',
  check1: false,
  check2: false,
})

function onSearch() {
  toast.info('模拟触发搜索')
}

function recovery(content: any) {
  search.value = content
  onSearch()
}
</script>

<template>
  <FaSearchBar :show-toggle="false">
    <ElForm :model="search" label-width="120px">
      <ElRow>
        <ElCol :span="12">
          <ElFormItem label="姓名 / 手机号">
            <ElInput v-model="search.name" placeholder="请输入姓名或者手机号，支持模糊查询" clearable />
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="6">
          <ElFormItem label="部门">
            <ElSelect v-model="search.department_id" clearable placeholder="请选择部门">
              <ElOption label="技术部" :value="1" />
              <ElOption label="设计部" :value="2" />
              <ElOption label="行政部" :value="3" />
            </ElSelect>
          </ElFormItem>
        </ElCol>
        <ElCol :span="6">
          <ElFormItem label="职位">
            <ElSelect v-model="search.department_job_id" clearable placeholder="请选择职位">
              <ElOption label="程序员" :value="1" />
              <ElOption label="设计师" :value="2" />
              <ElOption label="人事" :value="3" />
            </ElSelect>
          </ElFormItem>
        </ElCol>
        <ElCol :span="6">
          <ElFormItem label="角色">
            <ElSelect v-model="search.role_id" clearable placeholder="请选择角色">
              <ElOption label="主管" :value="1" />
              <ElOption label="普通职员" :value="2" />
            </ElSelect>
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="24">
          <ElFormItem label="角色">
            <ElCheckbox v-model="search.check1">
              备选项
            </ElCheckbox>
            <ElCheckbox v-model="search.check2">
              备选项
            </ElCheckbox>
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="24">
          <ElFormItem>
            <ElSpace>
              <ElButton type="primary" @click="onSearch">
                <template #icon>
                  <FaIcon name="i-ep:search" />
                </template>
                筛选
              </ElButton>
              <FaStorageBox :data="search" name="box2" title="我的快捷筛选" @take-out="recovery">
                <ElButton>
                  保存当前筛选
                </ElButton>
              </FaStorageBox>
            </ElSpace>
          </ElFormItem>
        </ElCol>
      </ElRow>
    </ElForm>
  </FaSearchBar>
</template>
