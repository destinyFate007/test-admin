<script setup lang="ts">
import type { TreeNode } from '@/ui/components/FaTree/index.vue'

const data = ref<TreeNode[]>([
  {
    id: '1',
    name: '根目录',
    children: [
      {
        id: '1-1',
        name: '文件夹1',
        type: 'folder',
        children: [
          { id: '1-1-1', name: '文件1.txt', type: 'file' },
          { id: '1-1-2', name: '文件2.txt', type: 'file' },
          { id: '1-1-3', name: '文件3.txt', type: 'file' },
        ],
      },
      {
        id: '1-2',
        name: '文件夹2',
        type: 'folder',
        children: [
          { id: '1-2-1', name: '文件3.txt', type: 'file' },
        ],
      },
    ],
  },
])

function customFilter(query: string, node: TreeNode) {
  // 按类型过滤
  if (query === 'file' && node.type === 'file') {
    return true
  }
  if (query === 'folder' && node.type === 'folder') {
    return true
  }
  // 按名称过滤
  return node.name.toLowerCase().includes(query.toLowerCase())
}
</script>

<template>
  <FaTree :data filterable filter-placeholder="搜索...(输入 folder 或 file 可过滤节点类型)" :filter-method="customFilter" />
</template>
