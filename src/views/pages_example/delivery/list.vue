<script setup lang="ts">
import { ElButton, ElDivider, ElForm, ElFormItem, ElInput, ElTable, ElTableColumn } from 'element-plus'
import { toast } from 'vue-sonner'
import api from '@/api/modules/deliveryExample'
import { useFaDrawer } from '@/ui/components/FaDrawer'
import { useFaModal } from '@/ui/components/FaModal'
import eventBus from '@/utils/eventBus'
import DetailForm from './components/DetailForm/index.vue'

defineOptions({
  name: 'BasicList',
})
const router = useRouter()
const { pagination, getParams, onSizeChange, onCurrentChange, onSortChange } = usePagination()

const tableAutoHeight = ref(true)

const formMode = ref('router')
// 详情
const formModeProps = ref({
  id: '',
})
const defaultQuery = {
  title: '',
}

const search = ref({ ...defaultQuery })

function searchReset() {
  Object.assign(search.value, defaultQuery)
}
const batch = ref({
  enable: true,
  selectionDataList: [],
})
const loading = ref(false)
const dataList = ref<Record<string, any>[]>([])
onMounted(() => {
  getDataList()
  formMode.value === 'router' && eventBus.on('get-data-list', () => {
    getDataList()
  })
})
onBeforeUnmount(() => {
  formMode.value === 'router' && eventBus.off('get-data-list')
})
function getDataList() {
  loading.value = true
  const params = {
    ...getParams(),
    ...(search.value.title && { title: search.value.title }),
  }
  api.list(params).then((res: any) => {
    loading.value = false
    dataList.value = res.data.list
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

const formRef = ref<InstanceType<typeof DetailForm>>()
const { open: openModal, update: updateModal } = useFaModal().create({
  destroyOnClose: true,
  closeOnClickOverlay: false,
  closeOnPressEscape: false,
  beforeClose: (action, done) => {
    if (action === 'confirm') {
      // 调用 DetailForm 组件内部 submit 方法
      formRef.value?.submit().then(() => {
        getDataList()
        done()
      })
    }
    else {
      done()
    }
  },
  content: () => h(DetailForm, {
    ref: formRef,
    id: formModeProps.value.id,
  }),
})

const { open: openDrawer, update: updateDrawer } = useFaDrawer().create({
  destroyOnClose: true,
  closeOnClickOverlay: false,
  closeOnPressEscape: false,
  beforeClose: (action, done) => {
    if (action === 'confirm') {
      formRef.value?.submit().then(() => {
        getDataList()
        done()
      })
    }
    else {
      done()
    }
  },
  content: () => h(DetailForm, {
    ref: formRef,
    id: formModeProps.value.id,
  }),
})

function onCreate() {
  if (formMode.value === 'router') {
    router.push({
      name: 'pagesExampleShopDeliveryCreate',
    })
  }
  else {
    formModeProps.value.id = ''
    if (formMode.value === 'modal') {
      updateModal({
        title: '新增',
      })
      openModal()
    }
    else {
      updateDrawer({
        title: '新增',
      })
      openDrawer()
    }
  }
}
function onEdit(row: any) {
  if (formMode.value === 'router') {
    router.push({
      name: 'pagesExampleShopDeliveryEdit',
      params: {
        id: row.id,
      },
    })
  }
  else {
    formModeProps.value.id = row.id
    if (formMode.value === 'modal') {
      updateModal({
        title: '编辑',
      })
      openModal()
    }
    else {
      updateDrawer({
        title: '编辑',
      })
      openDrawer()
    }
  }
}
function onDel(row: any) {
  useFaModal().confirm({
    title: '确认信息',
    content: `确认删除「${row.title}」吗？`,
    onConfirm: () => {
      api.delete(row.id).then(() => {
        getDataList()
        toast.success('模拟删除成功')
      })
    },
  })
}
function changeStatus(row: any) {
  return new Promise<boolean>((resolve) => {
    useFaModal().confirm({
      title: '确认信息',
      content: `确认${row.status ? '停用' : '启用'}「${row.title}」运费模版吗？`,
      onConfirm: () => {
        row.statusLoading = true
        api.changeStatus({
          id: row.id,
          status: !row.status,
        }).then(() => {
          row.statusLoading = false
          toast.success(`模拟${row.status ? '停用' : '启用'}成功`)
          resolve(true)
        }).catch(() => {
          row.statusLoading = false
          resolve(false)
        })
      },
    })
  })
}
</script>

<template>
  <div :class="{ 'absolute-container': tableAutoHeight }">
    <FaPageHeader class="mb-0" title="运费模版管理" />
    <FaPageMain :class="{ 'flex-1 overflow-auto': tableAutoHeight }" :main-class="{ 'flex-1 flex flex-col overflow-auto': tableAutoHeight }">
      <FaSearchBar :show-toggle="false">
        <template #default="{ fold, toggle }">
          <ElForm :model="search" size="default" label-width="100px" inline-message inline class="search-form">
            <ElFormItem label="模版名称">
              <ElInput v-model="search.title" placeholder="请输入模版名称，支持模糊查询" clearable @keydown.enter="currentChange()" @clear="currentChange()" />
            </ElFormItem>
            <ElFormItem>
              <ElButton
                @click="() => {
                  searchReset()
                  getDataList()
                }"
              >
                重置
              </ElButton>
              <ElButton type="primary" @click="getDataList()">
                <template #icon>
                  <FaIcon name="i-ep:search" />
                </template>
                筛选
              </ElButton>
              <ElButton disabled @click="toggle">
                <template #icon>
                  <FaIcon :name="fold ? 'i-ep:caret-bottom' : 'i-ep:caret-top'" />
                </template>
                {{ fold ? '展开' : '收起' }}
              </ElButton>
            </ElFormItem>
          </ElForm>
        </template>
      </FaSearchBar>
      <ElDivider border-style="dashed" />
      <ElSpace>
        <ElButton type="primary" @click="onCreate()">
          <template #icon>
            <FaIcon name="ep:plus" />
          </template>
          新增运费模版
        </ElButton>
        <ElButton v-if="batch.enable" size="default" :disabled="!batch.selectionDataList.length">
          单个批量操作按钮
        </ElButton>
        <ElButtonGroup v-if="batch.enable">
          <ElButton size="default" :disabled="!batch.selectionDataList.length">
            批量操作按钮组1
          </ElButton>
          <ElButton size="default" :disabled="!batch.selectionDataList.length">
            批量操作按钮组2
          </ElButton>
        </ElButtonGroup>
      </ElSpace>
      <ElTable class="my-4" :data="dataList" stripe highlight-current-row border height="100%" @sort-change="sortChange" @selection-change="batch.selectionDataList = $event">
        <ElTableColumn v-if="batch.enable" type="selection" align="center" fixed />
        <ElTableColumn prop="title" label="模版名称" />
        <ElTableColumn label="开启状态" width="100" align="center">
          <template #default="scope">
            <ElSwitch v-model="scope.row.status" :loading="scope.row.statusLoading" inline-prompt active-text="启用" inactive-text="禁用" :before-change="() => changeStatus(scope.row)" />
          </template>
        </ElTableColumn>
        <ElTableColumn align="center" fixed="right" label="操作" width="200">
          <template #default="scope">
            <ElButton size="small" plain type="primary" @click="onEdit(scope.row)">
              编辑
            </ElButton>
            <ElButton size="small" plain type="danger" @click="onDel(scope.row)">
              刪除
            </ElButton>
          </template>
        </ElTableColumn>
      </ElTable>
      <ElPagination :current-page="pagination.page" :total="pagination.total" :page-size="pagination.size" :page-sizes="pagination.sizes" :layout="pagination.layout" :hide-on-single-page="false" class="pagination" background @size-change="sizeChange" @current-change="currentChange" />
    </FaPageMain>
  </div>
</template>

<style scoped>
.absolute-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.search-form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  margin-bottom: -18px;

  :deep(.el-form-item) {
    grid-column: auto / span 1;

    &:last-child {
      grid-column-end: -1;

      .el-form-item__content {
        justify-content: flex-end;
      }
    }
  }
}

.el-divider {
  width: calc(100% + 40px);
  margin-inline: -20px;
}
</style>
