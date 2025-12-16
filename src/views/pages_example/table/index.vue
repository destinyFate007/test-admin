<script setup lang="ts">
import { ElMessageBox } from 'element-plus'
import { toast } from 'vue-sonner'
import api from '@/api/modules/table'
import TableForm from './components/tableForm/index.vue'
import TablePreviewDialog from './components/tablePreviewDialog/index.vue'

defineOptions({
  name: 'PagesExampleTable',
})
const { pagination, getParams, onSizeChange, onCurrentChange, onSortChange } = usePagination()
pagination.value.size = 20
pagination.value.sizes = [20, 50, 100]
const data = ref({
  loading: !1,
  search: {
    name: '',
  },
  dataList: [],
  selectionDataList: [],
  form: {
    visible: !1,
    id: '',
  },
  dialog: {
    visible: !1,
    id: '',
    info: {},
  },
})

onMounted(() => {
  getDataList()
})

function getDataList() {
  data.value.loading = true
  const params = {
    ...getParams(),
    ...(data.value.search.name && { name: data.value.search.name }),
  }
  api.list(params).then((res: any) => {
    data.value.loading = false
    data.value.dataList = res.data.list
    pagination.value.total = res.data.total
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
function onCreate() {
  data.value.form.visible = !1
  nextTick(() => {
    data.value.form.visible = !0
    data.value.form.id = ''
  })
}

function onEdit(row: any) {
  data.value.form.visible = !1
  nextTick(() => {
    data.value.form.visible = !0
    data.value.form.id = row.id
  })
}

function onDel(row: any) {
  ElMessageBox.confirm(`确认删除「${row.name}」表格吗？`, '确认信息').then(() => {
    api.delete(row.id).then(() => {
      getDataList()
      toast.success('模拟删除成功')
    })
  },
  )
}

function onPreview(info: any) {
  data.value.dialog.visible = !0
  data.value.dialog.id = ''
  data.value.dialog.info = info
}
function onSuccess() {
  data.value.form.visible = !1
  getDataList()
}
function onCancel() {
  data.value.form.visible = !1
}
</script>

<template>
  <div class="absolute size-full flex flex-col">
    <FaPageHeader title="表格管理" description="页面数据为 Mock 示例数据，非真实数据。" class="mb-0" />
    <div class="relative flex flex-1 flex-col overflow-auto">
      <FaLayoutContainer
        hide-left-side-toggle class="static" left-side-width="520px" left-side-class="h-full flex flex-col gap-4"
        default-class="flex flex-col flex-1 gap-4"
      >
        <template #leftSide>
          <ElSpace wrap>
            <ElButton type="primary" size="default" @click="onCreate">
              <template #icon>
                <FaIcon name="i-ep:plus" />
              </template>
            </ElButton>
            <ElButton type="danger" size="default" :disabled="!data.selectionDataList.length">
              <template #icon>
                <FaIcon name="i-ep:delete" />
              </template>
            </ElButton>
          </ElSpace>
          <ElTable v-loading="data.loading" :data="data.dataList" stripe highlight-current-row border height="100%" @sort-change="sortChange" @selection-change="data.selectionDataList = $event">
            <ElTableColumn type="selection" align="center" fixed />
            <ElTableColumn prop="name" min-width="150" label="名称" />
            <ElTableColumn prop="code" width="150" align="center" label="标识" />
            <ElTableColumn label="操作" width="140" fixed="right" align="center">
              <template #default="scope">
                <ElButtonGroup>
                  <ElButton type="primary" plain size="small" @click="onEdit(scope.row)">
                    <template #icon>
                      <FaIcon name="i-ep:edit" />
                    </template>
                  </ElButton>
                  <ElButton type="info" plain size="small" @click="onPreview(scope.row)">
                    <template #icon>
                      <FaIcon name="i-ep:view" />
                    </template>
                  </ElButton>
                  <ElButton type="danger" plain size="small" @click="onDel(scope.row)">
                    <template #icon>
                      <FaIcon name="i-ep:delete" />
                    </template>
                  </ElButton>
                </ElButtonGroup>
              </template>
            </ElTableColumn>
          </ElTable>
          <ElPagination :current-page="pagination.page" :total="pagination.total" :page-size="pagination.size" :page-sizes="pagination.sizes" :layout="pagination.layout" :hide-on-single-page="false" class="pagination" background @size-change="sizeChange" @current-change="currentChange" />
        </template>
        <TableForm
          v-if="data.form.visible"
          :id="data.form.id"
          @success="onSuccess"
          @cancel="onCancel"
          @preview="onPreview"
        />
        <div v-else class="flex-center flex-1 text-3xl text-primary/50">
          请在左侧新增或编辑一个表格
        </div>
        <TablePreviewDialog
          v-if="data.dialog.visible"
          :id="data.dialog.id"
          v-model="data.dialog.visible"
          :info="data.dialog.info"
        />
      </FaLayoutContainer>
    </div>
  </div>
</template>

<style scoped>
.tree {
  flex: 1 1 0%;
  overflow-y: auto;

  :deep(.el-tree) {
    .el-tree-node__content {
      height: 40px;
    }

    .is-current > .el-tree-node__content {
      background-color: var(--el-color-primary-light-9);
    }

    .custom-tree-node {
      position: relative;
      display: flex;
      flex: 1 1 0%;
      flex-direction: column;
      justify-content: center;
      width: 0;
      height: 100%;

      .label {
        display: inline-flex;
        align-items: center;
        width: calc(100% - 10px);
        color: var(--el-text-color-primary);

        .text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      &:hover .actions {
        display: block;
      }

      .actions {
        position: absolute;
        top: 50%;
        right: 10px;
        display: none;
        transform: translateY(-50%);

        .el-button {
          padding: 5px 8px;
        }
      }
    }
  }
}
</style>
