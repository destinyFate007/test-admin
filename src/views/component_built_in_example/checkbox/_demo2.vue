<script setup lang="ts">
const checked = ref<'indeterminate' | boolean>('indeterminate')
</script>

<template>
  <FaCheckbox v-model="checked">
    复选框
  </FaCheckbox>
</template>
