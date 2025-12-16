<script setup lang="ts">
import type { TreeNode } from '@/ui/components/FaTree/index.vue'

const checkable = ref(false)

const data = ref<TreeNode[]>([
  {
    id: '1',
    name: '根目录',
    children: [
      {
        id: '1-1',
        name: '文件夹1',
        children: [
          { id: '1-1-1', name: '文件1.txt' },
          { id: '1-1-2', name: '文件2.txt' },
          { id: '1-1-3', name: '文件3.txt' },
        ],
      },
      {
        id: '1-2',
        name: '文件夹2',
        children: [
          { id: '1-2-1', name: '文件3.txt' },
        ],
      },
    ],
  },
])

const treeRef = useTemplateRef('treeRef')

function handleExpand(ids?: string[]) {
  treeRef.value?.expand(ids)
}

function handleCollapse(ids?: string[]) {
  treeRef.value?.collapse(ids)
}

function handleSetSelection(id: string) {
  treeRef.value?.setSelection(id)
}

function handleClearSelection() {
  treeRef.value?.clearSelection()
}

function handleCheckAll(bool: boolean) {
  treeRef.value?.checkAll(bool)
}
</script>

<template>
  <div class="mb-4 flex items-center gap-2">
    开启复选框
    <FaSwitch v-model="checkable" />
  </div>
  <div class="mb-4 flex gap-2">
    <FaButton variant="outline" @click="handleExpand()">
      展开所有
    </FaButton>
    <FaButton variant="outline" @click="handleExpand(['1'])">
      展开根目录
    </FaButton>
    <FaButton variant="outline" @click="handleCollapse()">
      收起所有
    </FaButton>
    <FaButton variant="outline" @click="handleCollapse(['1'])">
      收起根目录
    </FaButton>
    <FaButtonGroup>
      <FaButton variant="outline" :disabled="checkable" @click="handleSetSelection('1-1-1')">
        选中 1-1-1
      </FaButton>
      <FaButton variant="outline" :disabled="checkable" @click="handleClearSelection">
        取消选中
      </FaButton>
    </FaButtonGroup>
    <FaButtonGroup>
      <FaButton variant="outline" :disabled="!checkable" @click="handleCheckAll(true)">
        全选
      </FaButton>
      <FaButton variant="outline" :disabled="!checkable" @click="handleCheckAll(false)">
        取消全选
      </FaButton>
    </FaButtonGroup>
  </div>
  <FaTree ref="treeRef" :data :checkable />
</template>
