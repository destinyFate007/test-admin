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

const selectedNode = ref<TreeNode | null>(null)
function handleSelectionChange(node: TreeNode | null) {
  selectedNode.value = node
}
</script>

<template>
  <FaTree :data @selection-change="handleSelectionChange" />
  <div class="mt-4 text-sm text-gray-500">
    <div>
      当前选中节点：
    </div>
    <div>
      {{ selectedNode?.name }}
    </div>
  </div>
</template>
