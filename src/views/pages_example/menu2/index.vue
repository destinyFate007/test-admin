<script setup lang="ts">
import { ElMessageBox } from 'element-plus'
import { toast } from 'vue-sonner'
import api from '@/api/modules/menuExample'

defineOptions({
  name: 'PagesExampleMenu2',
})

const treeRef = useTemplateRef('treeRef')
// 列表
const loading = ref(false)
const dataList = ref([])
const formModeProps = ref({
  visible: !1,
  id: '',
  parentId: '',
})

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

function onCreate(node: any, data: any) {
  treeRef.value?.setCurrentKey(node?.data?.id)
  formModeProps.value = {
    visible: !1,
    id: '',
    parentId: '',
  }
  nextTick(() => {
    formModeProps.value = {
      visible: !0,
      id: '',
      parentId: data.id,
    }
  })
}

function onEdit(node?: any, data?: any) {
  treeRef.value?.setCurrentKey(node?.data?.id)
  formModeProps.value = {
    visible: !1,
    id: '',
    parentId: '',
  }
  nextTick(() => {
    formModeProps.value = {
      visible: !0,
      id: data?.id || '',
      parentId: data?.parentId || '',
    }
  })
}

function onDel(row: any, data?: any) {
  treeRef.value?.setCurrentKey(row?.data?.id)
  ElMessageBox.confirm(`确认删除「${data.meta.title}」吗？`, '确认信息').then(() => {
    api.delete(data.id).then(() => {
      toast.success('模拟删除成功')
      const parent = row.parent
      const children = parent.data?.children || parent?.data
      const index = children.findIndex((item: any) => item.id === data.id)
      children.splice(index, 1)
      dataList.value = [...dataList.value]
    })
  },
  )
}
function onSubmit() {
  formModeProps.value = {
    visible: !1,
    id: '',
    parentId: '',
  }
  getDataList()
}
</script>

<template>
  <div class="absolute size-full flex flex-col">
    <FaPageHeader title="导航管理" description="页面数据为 Mock 示例数据，非真实数据。" class="mb-0" />
    <div class="relative flex flex-1 flex-col overflow-auto">
      <FaLayoutContainer
        hide-left-side-toggle class="static" left-side-class="h-full flex flex-col gap-4"
        default-class="flex-col-center p-0 size-full"
      >
        <template #leftSide>
          <!--          -->
          <ElButtonGroup class="inline-flex">
            <ElButton type="primary" class="w-full" @click="onEdit">
              新增主导航
            </ElButton>
            <ElButton @click="getDataList">
              <template #icon>
                <FaIcon name="i-ep:refresh" />
              </template>
            </ElButton>
          </ElButtonGroup>
          <ElScrollbar class="tree">
            <ElTree
              ref="treeRef"
              :data="dataList"
              node-key="id"
              default-expand-all
            >
              <template #default="{ node, data }">
                <!--                -->
                <div class="custom-tree-node">
                  <div class="label" :title="data.meta.title">
                    <FaIcon
                      v-if="data.meta.icon" :name="data.meta.icon" class="size-4"
                      style="margin-inline-end: 8px;"
                    />
                    <div class="text">
                      {{ data.meta.title }}
                    </div>
                  </div>
                  <div class="actions">
                    <ElButtonGroup>
                      <ElButton type="primary" plain size="small" @click.stop="() => onCreate(node, data)">
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
        <DetailForm
          v-if="formModeProps.visible"
          :id="formModeProps.id"
          :parent-id="formModeProps.parentId"
          @on-submit="onSubmit"
        />
        <div v-else class="flex-center flex-1 text-3xl text-primary/50">
          请在左侧新增或编辑一个导航
        </div>
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
