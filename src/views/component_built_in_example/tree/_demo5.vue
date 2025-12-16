<script setup lang="ts">
import type { TreeNode } from '@/ui/components/FaTree/index.vue'

const data = ref<TreeNode[]>([
  {
    id: '1',
    name: '根目录',
    icon: 'i-lucide:folder',
    expandedIcon: 'i-lucide:folder-open',
    children: [
      {
        id: '1-1',
        name: '文件夹1',
        icon: 'i-lucide:folder',
        expandedIcon: 'i-lucide:folder-open',
        children: [
          { id: '1-1-1', name: '文件1.txt', icon: 'i-lucide:file' },
          { id: '1-1-2', name: '文件2.txt', icon: 'i-lucide:file' },
          { id: '1-1-3', name: '文件3.txt', icon: 'i-lucide:file' },
        ],
      },
      {
        id: '1-2',
        name: '文件夹2',
        icon: 'i-lucide:folder',
        expandedIcon: 'i-lucide:folder-open',
        children: [
          { id: '1-2-1', name: '文件3.txt', icon: 'i-lucide:file' },
        ],
      },
    ],
  },
])
</script>

<template>
  <FaTree :data>
    <template #default="{ node, expanded }">
      <div class="group flex-center-between">
        <div class="flex items-center gap-2">
          <FaIcon :name="expanded ? node.expandedIcon : node.icon" />
          <div class="text-sm">
            {{ node.name }}
          </div>
        </div>
        <FaButton variant="outline" size="icon" class="size-6 opacity-0 transition-opacity group-hover:opacity-100" @click.stop>
          <FaIcon name="i-ep:edit" />
        </FaButton>
      </div>
    </template>
  </FaTree>
</template>
