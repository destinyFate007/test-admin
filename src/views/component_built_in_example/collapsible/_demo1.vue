<template>
  <FaCollapsible>
    <template #trigger="{ open }">
      <FaButton>
        {{ open ? '收起' : '展开' }}
      </FaButton>
    </template>
    <div class="mt-4 space-y-2">
      <div v-for="item in 10" :key="item" class="border rounded-md px-4 py-2">
        {{ item }}
      </div>
    </div>
  </FaCollapsible>
</template>
