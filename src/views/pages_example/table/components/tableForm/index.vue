<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ElRadioButton, ElRadioGroup } from 'element-plus'
import Sortable from 'sortablejs'
import { toast } from 'vue-sonner'
import api from '@/api/modules/table'

export interface Props {
  id?: number | string
}

const props = withDefaults(
  defineProps<Props>(),
  {
    id: '',
  },
)
const emits = defineEmits<{
  success: []
  cancel: []
  preview: [any]
}>()

const loading = ref(false)
const formRef = useTemplateRef<FormInstance>('formRef')

const form = ref<Record<string, any>>({
  id: props.id,
  name: '',
  code: '',
  border: !1,
  stripe: !1,
  header: !0,
  columns: [],
})
const formRules = ref<FormRules>({
  name: [{
    required: !0,
    message: '请输入表格名称',
    trigger: 'blur',
  }],
  code: [{
    required: !0,
    message: '请输入表格唯一标识',
    trigger: 'blur',
  }],
  columns: [
    {
      validator: (_rule, value, callback) => {
        // 列信息不能为空
        if (value.length === 0) {
          return callback(new Error('请添加列信息'))
        }
        const hasEmptyName = value.some((item: any) => item.name === '')
        if (hasEmptyName) {
          return callback(new Error('列名称不能为空'))
        }
        const hasEmptyField = value.some((item: any) => item.field === '')
        if (hasEmptyField) {
          return callback(new Error('列字段不能为空'))
        }
        callback()
      },
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
    form.value.id = res.data.id
    form.value.name = res.data.name
    form.value.code = res.data.code
    form.value.border = res.data.border
    form.value.stripe = res.data.stripe
    form.value.header = res.data.header
    form.value.columns = res.data.columns
  })
}

const columnsTableRef = useTemplateRef('columnsTableRef')
const columnsTableKey = ref(0)
onMounted(() => {
  TableSortable()
})

function handleAddColumns() {
  form.value.columns.push({
    name: '',
    field: '',
    width: '100',
    align: 'left',
    sortable: !1,
    fixed: '',
    enable: !0,
  })
  nextTick(() => {
    columnsTableRef.value?.setScrollTop(form.value.columns.length * 50)
  })
}

function handleDelColumns(index: number) {
  form.value.columns.splice(index, 1)
}

function TableSortable() {
  const tbody = columnsTableRef.value?.$el.querySelector('.el-table__body-wrapper tbody')
  Sortable.create(tbody, {
    handle: '.sortable',
    animation: 300,
    ghostClass: 'ghost',
    onEnd: ({
      newIndex,
      oldIndex,
    }) => {
      if (newIndex === undefined || oldIndex === undefined) {
        return
      }
      const row = form.value.columns.splice(oldIndex, 1)[0]
      form.value.columns.splice(newIndex, 0, row)
      columnsTableKey.value += 1
      nextTick(() => {
        TableSortable()
      })
    },
  })
}

function onSubmit() {
  formRef.value?.validate((valid) => {
    if (valid) {
      if (form.value.id === '') {
        api.create(form.value).then(() => {
          toast.success('模拟新增成功')
          emits('success')
        })
      }
      else {
        api.edit(form.value).then(() => {
          toast.success('模拟编辑成功')
          emits('success')
        })
      }
    }
  })
}
async function onPreview() {
  const formInstance = formRef.value
  if (!formInstance) {
    return
  }

  const codeValidateResult = await formInstance.validateField('code', (errorMsg) => {
    // 无错误提示但字段未完善时，主动提示
    if (!errorMsg) {
      toast.error('请先完善表格唯一标识')
    }
  })

  const columnsValidateResult = await formInstance.validateField('columns', (errorMsg) => {
    // 无错误提示但字段未完善时，主动提示
    if (!errorMsg) {
      toast.error('请先完善列信息')
    }
  })

  if (codeValidateResult && columnsValidateResult) {
    emits('preview', {
      code: form.value.code,
      border: form.value.border,
      stripe: form.value.stripe,
      header: form.value.header,
      columns: form.value.columns,
    })
  }
}
</script>

<template>
  <div v-loading="loading" class="form">
    <ElForm ref="formRef" :model="form" :rules="formRules" label-position="top">
      <ElRow :gutter="20">
        <ElCol :span="8">
          <ElFormItem prop="name" label="表格名称">
            <ElInput v-model="form.name" clearable placeholder="请输入中文描述标题" />
          </ElFormItem>
        </ElCol>
        <ElCol :span="8">
          <ElFormItem prop="code" label="标识">
            <ElInput v-model="form.code" clearable placeholder="请输入唯一标识" />
          </ElFormItem>
        </ElCol>
        <ElCol :span="8">
          <ElFormItem label="表格样式">
            <ElSwitch v-model="form.border" active-text="开启边框" inactive-text="关闭边框" inline-prompt />
            <ElSwitch v-model="form.stripe" active-text="开启斑马纹" inactive-text="关闭斑马纹" inline-prompt />
            <ElSwitch v-model="form.header" active-text="显示表头" inactive-text="隐藏表头" inline-prompt />
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElFormItem label="列信息" prop="columns" class="columns-table">
        <ElTable ref="columnsTableRef" :key="columnsTableKey" :data="form.columns" stripe highlight-current-row border>
          <ElTableColumn align="center" fixed prop="sortValue" width="60">
            <template #header>
              <ElButton type="primary" size="small" plain circle @click="handleAddColumns">
                <FaIcon name="i-ep:plus" />
              </ElButton>
            </template>
            <template #default="{ $index }">
              <span class="index">{{ $index + 1 }}</span>
              <ElButton class="delete" type="danger" size="small" plain circle @click="handleDelColumns($index)">
                <FaIcon name="i-ep:delete" />
              </ElButton>
            </template>
          </ElTableColumn>
          <ElTableColumn align="center" fixed label="排序" width="80">
            <ElTag type="info" class="sortable">
              <FaIcon name="i-ep:d-caret" />
            </ElTag>
          </ElTableColumn>
          <ElTableColumn prop="name" label="名称" width="150">
            <template #default="{ row }">
              <ElInput v-model="row.name" clearable />
            </template>
          </ElTableColumn>
          <ElTableColumn prop="field" label="字段" width="150">
            <template #default="{ row }">
              <ElInput v-model="row.field" clearable />
            </template>
          </ElTableColumn>
          <ElTableColumn label="宽度" width="120">
            <template #default="{ row }">
              <ElInput v-model="row.width" clearable placeholder="请输入标识" />
            </template>
          </ElTableColumn>
          <ElTableColumn align="center" label="对齐" width="240">
            <template #default="{ row }">
              <ElRadioGroup v-model="row.align">
                <ElRadioButton value="left">
                  左对齐
                </ElRadioButton>
                <ElRadioButton value="center">
                  居中
                </ElRadioButton>
                <ElRadioButton value="right">
                  右对齐
                </ElRadioButton>
              </ElRadioGroup>
            </template>
          </ElTableColumn>
          <ElTableColumn align="center" label="固定" width="260">
            <template #default="{ row }">
              <ElRadioGroup v-model="row.fixed">
                <ElRadioButton value="left">
                  固定左侧
                </ElRadioButton>
                <ElRadioButton value="">
                  默认
                </ElRadioButton>
                <ElRadioButton value="right">
                  固定右侧
                </ElRadioButton>
              </ElRadioGroup>
            </template>
          </ElTableColumn>
          <ElTableColumn align="center" label="排序" width="80">
            <template #default="{ row }">
              <ElSwitch v-model="row.sortable" inline-prompt active-text="启用" inactive-text="禁用" />
            </template>
          </ElTableColumn>
          <ElTableColumn align="center" label="状态" width="80">
            <template #default="{ row }">
              <ElSwitch v-model="row.enable" inline-prompt active-text="显示" inactive-text="隐藏" />
            </template>
          </ElTableColumn>
        </ElTable>
      </ElFormItem>
    </ElForm>
    <div class="action-bottom">
      <ElButton type="primary" @click="onSubmit">
        保存
      </ElButton>
      <ElButton type="info" @click="onPreview">
        预览
      </ElButton>
      <ElButton @click="() => emits('cancel')">
        取消
      </ElButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  &,
  .el-form {
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 0;
  }

  .el-form .columns-table {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 0;

    :deep(.el-form-item__content) {
      min-height: 0;

      .el-table {
        height: 100%;
      }
    }
  }

  .action-bottom {
    padding-top: 2px;
  }

  :deep(.el-table) {
    .el-table__row {
      &.ghost {
        opacity: 0;
      }

      .index {
        display: inline-block;
      }

      .delete,
      &:hover .index {
        display: none;
      }

      &:hover .delete {
        display: inline-block;
      }

      .el-tag {
        &.sortable,
        &.sortable .icon {
          cursor: ns-resize;
        }
      }
    }
  }
}
</style>
