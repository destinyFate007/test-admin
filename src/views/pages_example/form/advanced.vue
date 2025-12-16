<script setup lang="ts">
import { ElButton, ElCascader, ElCol, ElDatePicker, ElForm, ElFormItem, ElInput, ElRadio, ElRadioGroup, ElRow, ElTable, ElTableColumn } from 'element-plus'

defineOptions({
  name: 'AdvancedForm',
})
const form = ref({
  name: '',
  sex: 1,
  birthday: '',
  idcard: '',
  area: [],
  address: '',
  familyMember: [{
    isEdit: false,
    name: '张三',
    mobile: '13111111111',
    relationship: '父亲',
  }, {
    isEdit: false,
    name: '李四',
    mobile: '13122222222',
    relationship: '母亲',
  }],
})
const isEdit = computed(() => form.value.familyMember.every(item => !item.isEdit))
function onAdd() {
  form.value.familyMember.push({
    isEdit: true,
    name: '',
    mobile: '',
    relationship: '',
  })
}
function onDel(index: number) {
  form.value.familyMember.splice(index, 1)
}
</script>

<template>
  <div>
    <FaPageHeader title="高级表单" description="当一次性提交大量数据时，可使用高级表单。" />

    <ElForm :model="form" label-position="top" label-width="80px">
      <FaPageMain title="员工信息">
        <ElRow :gutter="20">
          <ElCol :span="8">
            <ElFormItem label="姓名" prop="name">
              <ElInput v-model="form.name" placeholder="请输入姓名" />
            </ElFormItem>
          </ElCol>
          <ElCol :span="8">
            <ElFormItem label="生日" prop="birthday">
              <ElDatePicker v-model="form.birthday" type="date" placeholder="选择日期" />
            </ElFormItem>
          </ElCol>
          <ElCol :span="8">
            <ElFormItem label="性别" prop="sex">
              <ElRadioGroup v-model="form.sex">
                <ElRadio label="1">
                  男
                </ElRadio>
                <ElRadio label="2">
                  女
                </ElRadio>
              </ElRadioGroup>
            </ElFormItem>
          </ElCol>
          <ElCol :span="8">
            <ElFormItem label="身份证" prop="name">
              <ElInput v-model="form.idcard" placeholder="请输入" />
            </ElFormItem>
          </ElCol>
          <ElCol :span="8">
            <ElFormItem label="籍贯" prop="area">
              <ElCascader v-model="form.area" :options="[]" placeholder="请选择" />
            </ElFormItem>
          </ElCol>
          <ElCol :span="8">
            <ElFormItem label="家庭住址" prop="address">
              <ElInput v-model="form.address" placeholder="请输入家庭住址" />
            </ElFormItem>
          </ElCol>
        </ElRow>
      </FaPageMain>
      <FaPageMain title="家庭成员">
        <ElTable :data="form.familyMember" style="width: 100%;" stripe border>
          <ElTableColumn prop="name" label="姓名">
            <template #default="{ row }">
              <template v-if="row.isEdit">
                <ElInput v-model="row.name" size="small" placeholder="请输入姓名" />
              </template>
              <template v-else>
                <span>{{ row.name }}</span>
              </template>
            </template>
          </ElTableColumn>
          <ElTableColumn prop="mobile" label="手机号">
            <template #default="{ row }">
              <template v-if="row.isEdit">
                <ElInput v-model="row.mobile" size="small" placeholder="请输入手机号" />
              </template>
              <template v-else>
                <span>{{ row.mobile }}</span>
              </template>
            </template>
          </ElTableColumn>
          <ElTableColumn prop="relationship" label="关系">
            <template #default="{ row }">
              <template v-if="row.isEdit">
                <ElInput v-model="row.relationship" size="small" placeholder="请输入关系" />
              </template>
              <template v-else>
                <span>{{ row.relationship }}</span>
              </template>
            </template>
          </ElTableColumn>
          <ElTableColumn label="操作" width="200">
            <template #default="{ row, $index }">
              <ElButton type="primary" plain size="small" @click="row.isEdit = !row.isEdit">
                {{ row.isEdit ? '保存' : '编辑' }}
              </ElButton>
              <ElPopconfirm
                title="是否要删除此行"
                style="margin-inline-start: 10px;"
                @confirm="onDel($index)"
              >
                <template #reference>
                  <ElButton v-if="!row.isEdit" type="danger" plain size="small">
                    删除
                  </ElButton>
                </template>
              </ElPopconfirm>
            </template>
          </ElTableColumn>
        </ElTable>
        <ElButton :disabled="!isEdit" style="width: 100%;margin-top: 20px;" @click="onAdd">
          <template #icon>
            <FaIcon name="i-ep:plus" />
          </template>
          添加家庭成员
        </ElButton>
      </FaPageMain>
    </ElForm>
    <FaFixedActionBar>
      <ElButton type="primary" size="large">
        提交
      </ElButton>
    </FaFixedActionBar>
  </div>
</template>

<style scoped>
/* BasicForm.vue */
</style>
