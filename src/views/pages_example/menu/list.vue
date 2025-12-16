<script setup lang="ts">
import { toast } from 'vue-sonner'
import api from '@/api/modules/menuExample'
import { useFaModal } from '@/ui/components/FaModal'

defineOptions({
  name: 'PagesExampleMenuList',
})

const router = useRouter()

// 表格是否自适应高度
const tableAutoHeight = ref(false)

// 列表
const loading = ref(false)
const dataList = ref([])

onMounted(() => {
  getDataList()
})

function getDataList() {
  loading.value = true
  api.list().then((res: any) => {
    loading.value = false
    dataList.value = res.data
  })
}

function onCreate(row: any) {
  router.push({
    name: 'pagesExampleGeneralMenuCreate',
    query: {
      parentId: row.id,
    },
  })
}

function onEdit(row: any) {
  router.push({
    name: 'pagesExampleGeneralMenuEdit',
    params: {
      id: row.id,
    },
  })
}

function onDel(row: any) {
  useFaModal().confirm({
    title: '确认信息',
    content: `确认删除「${row.meta.title}」吗？`,
    onConfirm: () => {
      api.delete(row.id).then(() => {
        getDataList()
        toast.success('模拟删除成功')
      })
    },
  })
}
</script>

<template>
  <div :class="{ 'absolute-container': tableAutoHeight }">
    <FaPageHeader title="导航管理" description="页面数据为 Mock 示例数据，非真实数据。" />
    <FaPageMain :class="{ 'flex-1 overflow-auto': tableAutoHeight }" :main-class="{ 'flex-1 flex flex-col overflow-auto': tableAutoHeight }">
      <ElSpace wrap>
        <ElButton type="primary" size="default" @click="onCreate">
          <template #icon>
            <FaIcon name="i-ep:plus" />
          </template>
          新增主导航
        </ElButton>
      </ElSpace>
      <ElTable
        v-loading="loading" class="my-4" :data="dataList" row-key="id" stripe highlight-current-row default-expand-all border height="100%"
      >
        <ElTableColumn prop="meta.title" label="标题" min-width="200" fixed="left" />
        <ElTableColumn label="路由" width="200" show-overflow-tooltip>
          <template #default="{ row }">
            <span :title="row.path">
              {{ row.path }}
            </span>
          </template>
        </ElTableColumn>
        <ElTableColumn label="页面组件" width="200" show-overflow-tooltip>
          <template #default="{ row }">
            <ElTag v-if="row.component === 'Layout'">
              Layout
            </ElTag>
            <span v-else :title="row.component">
              {{ row.component }}
            </span>
          </template>
        </ElTableColumn>
        <ElTableColumn label="图标" width="90" align="center">
          <template #default="{ row }">
            <FaIcon v-if="row.meta.icon" :name="row.meta.icon" class="size-6" />
          </template>
        </ElTableColumn>
        <ElTableColumn label="激活图标" width="90" align="center">
          <template #default="{ row }">
            <FaIcon v-if="row.meta.activeIcon" :name="row.meta.activeIcon" class="size-6" />
          </template>
        </ElTableColumn>
        <ElTableColumn label="菜单" width="80" align="center">
          <template #default="{ row }">
            <ElTag v-if="typeof row.meta.menu === 'boolean' " :type="row.meta.menu ? 'success' : 'danger'">
              {{ row.meta.menu ? "显示" : "隐藏" }}
            </ElTag>
          </template>
        </ElTableColumn>
        <ElTableColumn label="面包屑" width="80" align="center">
          <template #default="{ row }">
            <ElTag v-if="typeof row.meta.breadcrumb === 'boolean' " :type="row.meta.breadcrumb ? 'success' : 'danger'">
              {{ row.meta.breadcrumb ? "显示" : "隐藏" }}
            </ElTag>
          </template>
        </ElTableColumn>
        <ElTableColumn label="操作" width="250" align="center" fixed="right">
          <template #default="scope">
            <ElButton type="info" size="small" plain @click="onCreate(scope.row)">
              新增导航
            </ElButton>
            <ElButton type="primary" size="small" plain @click="onEdit(scope.row)">
              编辑
            </ElButton>
            <ElButton type="danger" size="small" plain @click="onDel(scope.row)">
              删除
            </ElButton>
          </template>
        </ElTableColumn>
      </ElTable>
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
