<script setup lang="ts">
import { ElMessageBox } from 'element-plus'
import { toast } from 'vue-sonner'
import api from '@/api/modules/dictionaryExample'
import DictionaryDialog from './components/dictionaryDialog/index.vue'
import DictionaryItemDialog from './components/dictionaryItemDialog/index.vue'
import UserDialog from './components/usageDialog/index.vue'

defineOptions({
  name: 'PagesExampleDictionary',
})

const dictionaryRef = useTemplateRef('dictionaryRef')
const showExampleDialog = ref(false)
// 列表
const dataTree = ref<Record<string, any>>({
  search: '',
  tree: [],
  currentNode: undefined,
  currentData: undefined,
  dialog: {
    visible: false,
    parentId: '',
    id: '',
  },
})
const { pagination, getParams, onSizeChange, onCurrentChange, onSortChange } = usePagination()

// 初始化分页参数
pagination.value.size = 20
pagination.value.sizes = [20, 50, 100]

// 字典项表格状态
const tableData = ref<Record<string, any>>({
  loading: false,
  search: {
    dictionaryId: '',
    title: '',
  },
  dataList: [],
  selectionDataList: [],
  dialog: {
    visible: false,
    id: '',
  },
})

function getTreeList() {
  tableData.value.search.dictionaryId = ''
  api.list().then((res) => {
    dataTree.value.tree = res.data
  },
  )
}
onMounted(() => {
  getTreeList()
})

watch(
  () => dataTree.value.search,
  (keyword) => {
    dictionaryRef.value?.filter(keyword)
  },
)

function filterDictionaryNode(keyword: string, node: any): boolean {
  return keyword ? node.label.includes(keyword) : true
}

function onCreate(data?: any) {
  dataTree.value.currentData = data
  dataTree.value.dialog.parentId = data?.id || ''
  dataTree.value.dialog.id = ''
  dataTree.value.dialog.visible = true
}

function onEdit(node?: any, data?: any) {
  dataTree.value.currentNode = node
  dataTree.value.currentData = data
  dataTree.value.dialog.parentId = node.parent?.data.id || ''
  dataTree.value.dialog.id = data.id
  dataTree.value.dialog.visible = true
}

function onDel(row: any, data?: any) {
  ElMessageBox.confirm(`确认删除「${data.label}」吗？`, '确认信息').then(() => {
    api.delete(data.id).then(() => {
      toast.success('模拟删除成功')
      const parent = row.parent
      const children = parent.data?.children || parent?.data
      const index = children.findIndex((item: any) => item.id === data.id)
      children.splice(index, 1)
      dataTree.value.tree = [...dataTree.value.tree]
    })
  },
  )
}
function handleAddNodeSuccess(node: any) {
  if (dataTree.value.currentData) {
    if (!dataTree.value.currentData.children) {
      dataTree.value.currentData.children = []
    }
    dataTree.value.currentData.children.push({
      id: node.id,
      label: node.label,
      code: node.code,
    })
  }
  else {
    dataTree.value.tree.push({
      id: node.id,
      label: node.label,
      code: node.code,
    })
  }
}

/** 编辑字典节点成功回调 */
function handleEditNodeSuccess(node: any, parentId: string) {
  if (!dataTree.value.currentNode || !dataTree.value.currentData) {
    return
  }

  // 父ID未变化：直接更新
  if ((dataTree.value.currentNode.parent?.data.id || '') === parentId) {
    dataTree.value.currentData.label = node.label
    dataTree.value.currentData.code = node.code
    return
  }

  // 父ID变化：移动节点
  const parent = dataTree.value.currentNode.parent
  const parentChildren = parent?.data.children || parent?.data
  if (parentChildren) {
    const index = parentChildren.findIndex((item: any) => item.id === node.id)
    if (index > -1) {
      // 更新节点信息
      parentChildren[index].label = node.label
      parentChildren[index].code = node.code

      // 移动到新父节点
      if (parentId) {
        const findNode = (tree: any[], id: string): any | undefined => {
          for (const item of tree) {
            if (item.id === id) {
              return item
            }
            if (item.children) {
              const res = findNode(item.children, id)
              if (res) {
                return res
              }
            }
          }
          return undefined
        }
        const newParent = findNode(dataTree.value.tree, parentId)
        if (newParent) {
          if (!newParent.children) {
            newParent.children = []
          }
          newParent.children.push(parentChildren[index])
        }
      }
      else {
        dataTree.value.tree.push(parentChildren[index])
      }

      // 从原父节点删除
      parentChildren.splice(index, 1)
    }
  }
}
function handleTreeNodeClick(data: any) {
  pagination.value.page = 1
  tableData.value.search.dictionaryId = data.id
}

watch(
  () => tableData.value.search.dictionaryId,
  () => {
    loadDictionaryItemList()
  },
)

// ====================== 4. 字典项相关方法 ======================
/** 加载字典项列表 */
async function loadDictionaryItemList() {
  tableData.value.loading = true
  const params = {
    ...getParams(),
    dictionary_id: tableData.value.search.dictionaryId,
    ...(tableData.value.search.title ? { title: tableData.value.search.title } : {}),
  }
  api.itemList(params).then((res) => {
    tableData.value.loading = false
    tableData.value.dataList = res.data.list
    // 初始化启用状态加载标识
    tableData.value.dataList.forEach((item: any) => {
      item.enableLoading = false
    })
    pagination.value.total = res.data.total
  })
}

/** 切换字典项启用/禁用状态 */
async function handleSwitchEnable(row: any): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
    ElMessageBox.confirm(`确认${row.enable ? '禁用' : '启用'}「${row.name}」吗？`, '确认信息').then(() => {
      row.statusLoading = true
      api.itemChangeEnable({
        id: row.id,
        enable: !row.enable,
      }).then(() => {
        row.statusLoading = false
        toast.success(`模拟${row.enable ? '禁用' : '启用'}成功`)
        resolve(true)
      }).catch(() => {
        row.statusLoading = false
        resolve(false)
      })
    })
  })
}

// 每页数量切换
function sizeChange(size: number) {
  onSizeChange(size).then(() => loadDictionaryItemList())
}

// 当前页码切换（翻页）
function currentChange(page = 1) {
  onCurrentChange(page).then(() => loadDictionaryItemList())
}

// 字段排序
function sortChange({ prop, order }: { prop: string, order: string }) {
  onSortChange(prop, order).then(() => loadDictionaryItemList())
}

/** 表格选中项变化 */
function handleTableSelectionChange(val: any[]) {
  tableData.value.selectionDataList = val
}

/** 新增字典项 */
function handleAddDictionaryItem() {
  tableData.value.dialog.id = ''
  tableData.value.dialog.visible = true
}

/** 编辑字典项 */
function handleEditDictionaryItem(row: any) {
  tableData.value.dialog.id = row.id
  tableData.value.dialog.visible = true
}

/** 删除字典项 */
async function handleDeleteDictionaryItem(row: any) {
  ElMessageBox.confirm(`确认删除「${row.name}」吗？`, '确认信息').then(() => {
    api.itemDelete(row.id).then(() => {
      loadDictionaryItemList()
      toast.success('模拟删除成功')
    })
  },
  )
}

/** 批量删除字典项 */
async function handleBatchDeleteDictionaryItem() {
  ElMessageBox.confirm(`确认删除选中的${tableData.value.selectionDataList.length}条数据吗？`, '确认信息').then(() => {
    const ids = tableData.value.selectionDataList.map((item: any) => item.id)
    api.itemDelete(ids).then(() => {
      loadDictionaryItemList()
      toast.success('模拟删除成功')
    })
  },
  )
}
</script>

<template>
  <div class="absolute size-full flex flex-col">
    <FaPageHeader title="字典管理" description="页面数据为 Mock 示例数据，非真实数据。" class="mb-0">
      <ElButton @click="() => showExampleDialog = true ">
        使用示例
      </ElButton>
    </FaPageHeader>
    <div class="relative flex flex-1 flex-col overflow-auto">
      <FaLayoutContainer
        hide-left-side-toggle class="static" left-side-class="h-full flex flex-col gap-4"
        default-class="flex flex-col flex-1 gap-4"
      >
        <template #leftSide>
          <!--          -->
          <ElButtonGroup class="inline-flex">
            <ElButton type="primary" class="w-full" @click="onCreate">
              新增主导航
            </ElButton>
            <ElButton @click="getTreeList">
              <template #icon>
                <FaIcon name="i-ep:refresh" />
              </template>
            </ElButton>
          </ElButtonGroup>
          <ElInput
            v-model="dataTree.search"
            placeholder="请输入关键词筛选字典"
            clearable
          />
          <ElScrollbar class="tree">
            <ElTree
              ref="dictionaryRef"
              :data="dataTree.tree"
              :filter-node-method="filterDictionaryNode"
              default-expand-all
              @node-click="handleTreeNodeClick"
            >
              <template #default="{ node, data }">
                <!--                -->
                <div class="custom-tree-node">
                  <div class="label" :title="data.label">
                    {{ data.label }}
                  </div>
                  <div class="code">
                    {{ data.code }}
                  </div>
                  <div class="actions">
                    <ElButtonGroup>
                      <ElButton type="primary" plain size="small" @click.stop="() => onCreate(data)">
                        <FaIcon name="i-ep:plus" />
                      </ElButton>
                      <ElButton type="info" plain size="small" @click.stop="() => onEdit(node, data)">
                        <FaIcon name="i-ep:edit" />
                      </ElButton>
                      <ElButton type="danger" plain size="small" @click.stop="() => onDel(node, data)">
                        <FaIcon name="i-ep:delete" />
                      </ElButton>
                    </ElButtonGroup>
                  </div>
                </div>
              </template>
            </ElTree>
          </ElScrollbar>
        </template>
        <template v-if="tableData.search.dictionaryId">
          <!-- 字典项操作按钮 -->
          <ElSpace wrap>
            <ElButton type="primary" @click="handleAddDictionaryItem">
              <template #icon>
                <FaIcon name="i-ep:plus" />
              </template>
            </ElButton>
            <ElButton
              type="danger"
              :disabled="!tableData.selectionDataList.length"
              @click="handleBatchDeleteDictionaryItem"
            >
              <template #icon>
                <FaIcon name="i-ep:delete" />
              </template>
            </ElButton>
            <ElInput
              v-model="tableData.search.title"
              placeholder="请输入关键词筛选字典项"
              clearable
              style="width: 200px;"
            />
            <ElButton @click="loadDictionaryItemList">
              <template #icon>
                <FaIcon name="i-ep:search" />
              </template>
            </ElButton>
          </ElSpace>

          <!-- 字典项表格 -->
          <ElTable
            v-loading="tableData.loading"
            :data="tableData.dataList"
            stripe
            highlight-current-row
            border
            height="100%"
            @sort-change="sortChange"
            @selection-change="handleTableSelectionChange"
          >
            <ElTableColumn type="selection" align="center" fixed />
            <ElTableColumn prop="name" label="名称" />
            <ElTableColumn label="键值" align="center" width="150">
              <template #default="scope">
                <ElTag type="info">
                  {{ scope.row.value }}
                </ElTag>
              </template>
            </ElTableColumn>
            <ElTableColumn label="状态" width="100" align="center">
              <template #default="scope">
                <ElSwitch
                  v-model="scope.row.enable"
                  :loading="scope.row.enableLoading"
                  inline-prompt
                  active-text="启用"
                  inactive-text="禁用"
                  :before-change="() => handleSwitchEnable(scope.row)"
                />
              </template>
            </ElTableColumn>
            <ElTableColumn label="操作" width="200" align="center">
              <template #default="scope">
                <ElButton
                  type="primary"
                  size="small"
                  plain
                  @click="handleEditDictionaryItem(scope.row)"
                >
                  编辑
                </ElButton>
                <ElButton
                  type="danger"
                  size="small"
                  plain
                  @click="handleDeleteDictionaryItem(scope.row)"
                >
                  删除
                </ElButton>
              </template>
            </ElTableColumn>
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
            @size-change="sizeChange"
            @current-change="currentChange"
          />
        </template>
        <div v-else class="flex-center flex-1 text-3xl text-primary/50">
          请在左侧新增或编辑一个导航
        </div>
      </FaLayoutContainer>
      <!-- 字典编辑弹窗 -->
      <DictionaryDialog
        v-if="dataTree.dialog.visible"
        :id="dataTree.dialog.id"
        v-model="dataTree.dialog.visible"
        :parent-id="dataTree.dialog.parentId"
        :tree="dataTree.tree"
        @add-node="handleAddNodeSuccess"
        @edit-node="handleEditNodeSuccess"
      />

      <!-- 字典项编辑弹窗 -->
      <DictionaryItemDialog
        v-if="tableData.dialog.visible"
        :id="tableData.dialog.id"
        v-model="tableData.dialog.visible"
        :dictionary-id="tableData.search.dictionaryId"
        :tree="dataTree.tree"
        @success="loadDictionaryItemList"
      />

      <!-- 示例弹窗 -->
      <UserDialog v-if="showExampleDialog" v-model="showExampleDialog" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.tree) {
  flex: 1;
  overflow-y: auto;

  .el-tree {
    .el-tree-node__content {
      height: 60px;
    }

    .custom-tree-node {
      position: relative;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      width: 0;
      height: 100%;

      .label {
        width: calc(100% - 10px);
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--el-text-color-primary);
        white-space: nowrap;
      }

      .code {
        width: calc(100% - 10px);
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--el-text-color-placeholder);
        white-space: nowrap;
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
