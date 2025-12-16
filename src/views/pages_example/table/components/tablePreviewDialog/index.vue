<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import api from '@/api/modules/table.ts'

export interface Props {
  id?: number | string
  info?: any
  modelValue?: boolean
}

const props = withDefaults(
  defineProps<Props>(),
  {
    id: '',
    info: () => ({}),

  },
)
const { pagination, getParams, onSizeChange, onCurrentChange, onSortChange } = usePagination()
const modelValue = useVModel(props, 'modelValue')
const data = ref<Record<string, any>>({
  loading: false,
  dataList: [],
  border: false,
  stripe: false,
  header: true,
  columns: [],
})
onMounted(() => {
  getDataList()
})
function getDataList() {
  data.value.loading = true
  const params = {
    ...getParams(),
    ...(props.id && { id: props.id }),
    ...(props.info.code && { code: props.info.code }),
  }
  api.preview(params).then((res: any) => {
    data.value.loading = false

    // 更新状态
    data.value.dataList = res.data.list
    pagination.value.total = res.data.total

    // 编辑模式（有表格ID）：从接口返回表格配置
    if (props.id && res.data.tableInfo) {
      data.value.border = res.data.tableInfo.border
      data.value.stripe = res.data.tableInfo.stripe
      data.value.header = res.data.tableInfo.header
      data.value.columns = res.data.tableInfo.columns.filter((item: any) => item.enable)
    }
    // 新增模式（无表格ID）：从props.info取配置
    else if (props.info) {
      data.value.border = props.info.border ?? false
      data.value.stripe = props.info.stripe ?? false
      data.value.header = props.info.header ?? true
      data.value.columns = props.info.columns?.filter((item: any) => item.enable) ?? []
    }
  })
}

// 每页数量切换
function sizeChange(size: number) {
  onSizeChange(size).then(() => getDataList())
}

// 当前页码切换（翻页）
function currentChange(page = 1) {
  onCurrentChange(page).then(() => getDataList())
}

// 字段排序
function sortChange({ prop, order }: { prop: string, order: string }) {
  onSortChange(prop, order).then(() => getDataList())
}
</script>

<template>
  <ElDialog
    v-model="modelValue"
    title="预览"
    width="80%"
    :close-on-click-modal="false"
    append-to-body
    destroy-on-close
    @closed="() => modelValue = false"
  >
    <!-- 预览表格 -->
    <ElTable
      :data="data.dataList"
      :border="data.border"
      :stripe="data.stripe"
      :show-header="data.header"
      @sort-change="sortChange"
    >
      <ElTableColumn
        v-for="(column, index) in data.columns"
        :key="index"
        :label="column.name"
        :prop="column.field"
        :width="column.width"
        :align="column.align"
        :sortable="column.sortable"
        :fixed="column.fixed || false"
      />
    </ElTable>

    <!-- 分页组件 -->
    <ElPagination
      :current-page="pagination.page"
      :total="pagination.total"
      :page-size="pagination.size"
      :page-sizes="pagination.sizes"
      :layout="pagination.layout"
      :hide-on-single-page="false"
      class="pagination"
      background
      @current-change="currentChange"
      @size-change="sizeChange"
    />
  </ElDialog>
</template>

<style scoped>
.el-table {
  margin-bottom: 20px;
}
</style>
