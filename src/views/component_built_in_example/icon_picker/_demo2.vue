<script setup lang="ts">
const icon = ref('')
const icon2 = ref('')
</script>

<template>
  <FaIconPicker v-model="icon2">
    <template #default="{ icon: icon3 }">
      <div class="flex-center-start inline-flex cursor-pointer gap-2 border rounded-full px-3 py-1">
        <FaIcon v-if="icon" :name="icon3" />
        <div v-else class="text-sm">
          {{ icon || '请选择图标' }}
        </div>
      </div>
    </template>
  </FaIconPicker>
</template>
