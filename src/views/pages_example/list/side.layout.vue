<script setup lang="ts">
import { ElButton, ElDivider, ElForm, ElFormItem, ElInput, ElPagination, ElSpace, ElTable, ElTableColumn, ElTree } from 'element-plus'
import { toast } from 'vue-sonner'

defineOptions({
  name: 'BasicList',
})
const tree = [{
  label: 'Level one 1',
  children: [{
    label: 'Level two 1-1',
    children: [{
      label: 'Level three 1-1-1',
    }],
  }],
}, {
  label: 'Level one 2',
  children: [{
    label: 'Level two 2-1',
    children: [{
      label: 'Level three 2-1-1',
    }],
  }, {
    label: 'Level two 2-2',
    children: [{
      label: 'Level three 2-2-1',
    }],
  }],
}, {
  label: 'Level one 3',
  children: [{
    label: 'Level two 3-1',
    children: [{
      label: 'Level three 3-1-1',
    }],
  }, {
    label: 'Level two 3-2',
    children: [{
      label: 'Level three 3-2-1',
    }],
  }],
}]
function onNodeClick(row: any) {
  toast(row.label)
}
const form = ref({
  search: {
    title: '',
  },
})
const data = ref([
  {
    id: 1,
    title: '标题1',
  },
  {
    id: 2,
    title: '标题2',
  },
  {
    id: 3,
    title: '标题3',
  },
  {
    id: 4,
    title: '标题4',
  },
  {
    id: 5,
    title: '标题5',
  },
  {
    id: 6,
    title: '标题6',
  },
  {
    id: 7,
    title: '标题7',
  },
  {
    id: 8,
    title: '标题8',
  },
  {
    id: 9,
    title: '标题9',
  },
  {
    id: 10,
    title: '标题10',
  },
  {
    id: 11,
    title: '标题11',
  },
  {
    id: 12,
    title: '标题12',
  },
  {
    id: 13,
    title: '标题13',
  },
  {
    id: 14,
    title: '标题14',
  },
  {
    id: 15,
    title: '标题15',
  },
  {
    id: 16,
    title: '标题16',
  },
  {
    id: 17,
    title: '标题17',
  },
  {
    id: 18,
    title: '标题18',
  },
  {
    id: 19,
    title: '标题19',
  },
  {
    id: 20,
    title: '标题20',
  },
])
</script>

<template>
  <div>
    <FaLayoutContainer>
      <template #leftSide>
        <ElTree
          :data="tree"
          :highlight-current="true"
          :default-expand-all="true"
          @node-click="onNodeClick"
        />
      </template>
      <div class="h-full flex flex-col">
        <FaSearchBar class="relative" :show-toggle="false">
          <template #default="{ fold, toggle }">
            <ElForm :model="form.search" size="default" label-width="100px" inline-message inline class="search-form">
              <ElFormItem label="标题">
                <ElInput v-model="form.search.title" placeholder="请输入标题，支持模糊查询" clearable />
              </ElFormItem>
              <ElFormItem>
                <ElButton type="primary">
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
        <ElDivider />
        <ElSpace />
        <ElTable class="my-4" :data="data" height="100%" stripe highlight-current-row border>
          <ElTableColumn prop="title" label="名称" fixed="left" />
          <ElTableColumn align="center" fixed="right" label="操作" width="200">
            <template #default>
              <ElButton size="small" plain type="primary">
                编辑
              </ElButton>
              <ElButton size="small" plain type="danger">
                刪除
              </ElButton>
            </template>
          </ElTableColumn>
        </ElTable>
        <ElPagination :total="100" layout="total, sizes, ->, prev, pager, next, jumper" background />
      </div>
    </FaLayoutContainer>
  </div>
</template>

<style scoped>
.search-form {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -18px;

  :deep(.el-form-item) {
    flex: 1 1 300px;

    &:last-child {
      margin-left: auto;

      .el-form-item__content {
        justify-content: flex-end;
      }
    }
  }
}

.el-divider {
  width: calc(100% + 30px);
  margin-inline: -15px;
}
</style>
