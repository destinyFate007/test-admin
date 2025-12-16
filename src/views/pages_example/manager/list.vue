<script setup lang="ts">
import { ElSwitch } from 'element-plus'
import { toast } from 'vue-sonner'
import api from '@/api/modules/managerExample.ts'
import { useFaDrawer } from '@/ui/components/FaDrawer'
import { useFaModal } from '@/ui/components/FaModal'
import eventBus from '@/utils/eventBus'
import DetailForm from './components/DetailForm/index.vue'

defineOptions({
  name: 'PagesExampleManagerList',
})

const router = useRouter()
const { pagination, getParams, onSizeChange, onCurrentChange, onSortChange } = usePagination()

// 表格是否自适应高度
const tableAutoHeight = ref(false)

/**
 * 详情展示模式
 * router 路由跳转
 * modal 模态框
 * drawer 抽屉
 */
const formMode = ref<'router' | 'modal' | 'drawer'>('router')

// 详情
const formModeProps = ref({
  id: '',
})

// 搜索
const searchDefault = {
  account: '',
  name: '',
  mobile: '',
  sex: '',
}
const search = ref({ ...searchDefault })
function searchReset() {
  Object.assign(search.value, searchDefault)
}

// 批量操作
const batch = ref({
  enable: true,
  selectionDataList: [],
})

// 列表
const loading = ref(false)
const dataList = ref([])

onMounted(() => {
  getDataList()
  if (formMode.value === 'router') {
    eventBus.on('get-data-list', () => {
      getDataList()
    })
  }
})

onBeforeUnmount(() => {
  if (formMode.value === 'router') {
    eventBus.off('get-data-list')
  }
})

function getDataList() {
  loading.value = true
  const params = {
    ...getParams(),
    ...(search.value.account && { account: search.value.account }),
    ...(search.value.name && { name: search.value.name }),
    ...(search.value.mobile && { mobile: search.value.mobile }),
    ...(search.value.sex !== '' && { sex: search.value.sex }),
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

function onCreate() {
  if (formMode.value === 'router') {
    router.push({
      name: 'pagesExampleGeneralManagerCreate',
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
      name: 'pagesExampleGeneralManagerEdit',
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

function onResetPassword(row: any) {
  useFaModal().confirm({
    title: '确认信息',
    content: `确认将「${row.account}」的密码重置为 “123456” 吗？`,
    onConfirm: () => {
      api.passwordReset(row.id).then(() => {
        toast.success('模拟重置成功')
      })
    },
  })
}

function onDel(row: any) {
  useFaModal().confirm({
    title: '确认信息',
    content: `确认删除「${row.account}」管理员吗？`,
    onConfirm: () => {
      api.delete(row.id).then(() => {
        getDataList()
        toast.success('模拟删除成功')
      })
    },
  })
}

function onCommand(command: string, row: any) {
  switch (command) {
    case 'resetPassword':
      onResetPassword(row)
      break
    case 'delete':
      onDel(row)
      break
  }
}
function changeStatus(row: any) {
  return new Promise<boolean>((resolve) => {
    useFaModal().confirm({
      title: '确认信息',
      content: `确认${row.status ? '禁用' : '启用'}「${row.account}」吗？`,
      onConfirm: () => {
        row.statusLoading = true
        api.changeStatus({
          id: row.id,
          status: !row.status,
        }).then(() => {
          row.statusLoading = false
          toast.success(`模拟${row.status ? '禁用' : '启用'}成功`)
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
    <FaPageHeader title="管理员管理" description="页面数据为 Mock 示例数据，非真实数据。" class="mb-0" />
    <FaPageMain :class="{ 'flex-1 overflow-auto': tableAutoHeight }" :main-class="{ 'flex-1 flex flex-col overflow-auto': tableAutoHeight }">
      <FaSearchBar :show-toggle="false">
        <template #default="{ fold, toggle }">
          <ElForm :model="search" size="default" label-width="100px" inline-message inline class="search-form">
            <ElFormItem label="账号">
              <ElInput v-model="search.account" placeholder="请输入标题，支持模糊查询" clearable @keydown.enter="currentChange()" @clear="currentChange()" />
            </ElFormItem>
            <ElFormItem
              label="姓名
"
            >
              <ElInput v-model="search.name" placeholder="请输入标题，支持模糊查询" clearable @keydown.enter="currentChange()" @clear="currentChange()" />
            </ElFormItem>
            <ElFormItem v-show="!fold" label="手机号">
              <ElInput v-model="search.mobile" placeholder="请输入标题，支持模糊查询" clearable @keydown.enter="currentChange()" @clear="currentChange()" />
            </ElFormItem>
            <ElFormItem v-show="!fold" label="性别">
              <ElRadioGroup v-model="search.sex" placeholder="请输入标题，支持模糊查询" clearable @keydown.enter="currentChange()" @clear="currentChange()">
                <ElRadioButton label="全部" value="" />
                <ElRadioButton label="男" value="1" />
                <ElRadioButton label="女" value="0" />
                <ElRadioButton label="保密" value="2" />
              </ElRadioGroup>
            </ElFormItem>
            <ElFormItem>
              <ElButton @click="searchReset(); currentChange()">
                重置
              </ElButton>
              <ElButton type="primary" @click="currentChange()">
                <template #icon>
                  <FaIcon name="i-ep:search" />
                </template>
                筛选
              </ElButton>
              <ElButton link @click="toggle">
                <template #icon>
                  <FaIcon :name="fold ? 'i-ep:caret-bottom' : 'i-ep:caret-top' " />
                </template>
                {{ fold ? '展开' : '收起' }}
              </ElButton>
            </ElFormItem>
          </ElForm>
        </template>
      </FaSearchBar>
      <ElDivider border-style="dashed" />
      <ElSpace wrap>
        <ElButton type="primary" size="default" @click="onCreate">
          <template #icon>
            <FaIcon name="i-ep:plus" />
          </template>
          新增管理员
        </ElButton>
        <ElButton v-if="batch.enable" size="default" :disabled="!batch.selectionDataList.length">
          批量操作
        </ElButton>
      </ElSpace>
      <ElTable v-loading="loading" class="my-4" :data="dataList" stripe highlight-current-row border height="100%" @sort-change="sortChange" @selection-change="batch.selectionDataList = $event">
        <ElTableColumn v-if="batch.enable" type="selection" align="center" fixed />
        <ElTableColumn prop="account" sortable label="帐号" />
        <ElTableColumn prop="name" width="100" align="center" label="姓名" />
        <ElTableColumn prop="sex" width="100" align="center" label="性别">
          <template #default="{ row }">
            <ElTag v-if="row.sex === 1" type="success" size="small">
              男
            </ElTag>
            <ElTag v-else-if="row.sex === 0" type="warning" size="small">
              女
            </ElTag>
            <ElTag v-else-if="row.sex === 2" type="info" size="small">
              保密
            </ElTag>
          </template>
        </ElTableColumn>
        <ElTableColumn prop="mobile" width="150" label="手机号" align="center" />
        <ElTableColumn prop="status" width="100" label="状态" align="center">
          <template #default="scope">
            <ElSwitch
              v-model="scope.row.status" :loading="scope.row.statusLoading"
              inline-prompt active-text="启用" inactive-text="禁用"
              :before-change="() => changeStatus(scope.row)"
            />
          </template>
        </ElTableColumn>
        <ElTableColumn label="操作" width="200" fixed="right" align="center">
          <template #default="scope">
            <ElSpace>
              <ElButton type="primary" size="small" plain @click="onEdit(scope.row)">
                编辑
              </ElButton>
              <ElDropdown @command="(_) => onCommand(_, scope.row)">
                <template #dropdown>
                  <ElDropdownItem command="resetPassword">
                    重置密码
                  </ElDropdownItem>
                  <ElDropdownItem command="delete" divided>
                    删除
                  </ElDropdownItem>
                </template>

                <ElButton size="small">
                  更多操作
                  <FaIcon name="i-ep:arrow-down" class="el-icon--right" />
                </ElButton>
              </ElDropdown>
            </ElSpace>
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
