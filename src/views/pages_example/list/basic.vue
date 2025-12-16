<script setup lang="ts">
import { ElButton, ElDivider, ElForm, ElFormItem, ElInput, ElMessage, ElMessageBox, ElPagination, ElSpace, ElTable, ElTableColumn } from 'element-plus'
import { toast } from 'vue-sonner'

defineOptions({
  name: 'BasicList',
})
const form = ref({
  search: {
    title: '',
  },
})
const data = ref([{
  id: 1,
  title: '标题1',
}, {
  id: 2,
  title: '标题2',
}, {
  id: 3,
  title: '标题3',
}, {
  id: 4,
  title: '标题4',
}, {
  id: 5,
  title: '标题5',
}, {
  id: 6,
  title: '标题6',
}, {
  id: 7,
  title: '标题7',
}, {
  id: 8,
  title: '标题8',
}, {
  id: 9,
  title: '标题9',
}, {
  id: 10,
  title: '标题10',
}])
function getDataList() {
  ElMessage.success({
    message: '你点击了筛选',
  })
}
function onAdd() {
  toast('你点击了新增')
}
function onEdit(row: any) {
  toast(`你点击了编辑 ${row.title}`)
}
function onDel(row: any) {
  ElMessageBox.confirm(`确认删除「${row.title}」吗？`, '确认信息').then(() => {
    ElMessage.success({
      message: '你点击了删除',
    })
  },
  ).catch(() => { },
  )
}
</script>

<template>
  <div>
    <FaPageHeader title="基础列表" description="最常见的列表展示形式，包含增删改查等基础操作。" />
    <FaPageMain>
      <FaSearchBar class="relative" :show-toggle="false">
        <template #default="{ fold, toggle }">
          <ElForm :model="form.search" size="default" label-width="100px" inline-message inline class="search-form">
            <ElFormItem label="标题">
              <ElInput v-model="form.search.title" placeholder="请输入标题，支持模糊查询" clearable />
            </ElFormItem>
            <ElFormItem>
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
      <ElDivider />
      <ElSpace>
        <ElButton type="primary" @click="onAdd()">
          <template #icon>
            <FaIcon name="ep:plus" />
          </template>
          新增
        </ElButton>
      </ElSpace>
      <ElTable class="my-4" :data="data" stripe highlight-current-row border>
        <ElTableColumn prop="title" label="名称" min-width="200" fixed="left" />
        <ElTableColumn align="center" fixed="right" label="操作" width="350">
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
      <ElPagination :total="100" layout="total, sizes, ->, prev, pager, next, jumper" background />
    </FaPageMain>
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
  width: calc(100% + 40px);
  margin-inline: -20px;
}

.el-pagination {
  margin-top: 20px;
}
</style>
