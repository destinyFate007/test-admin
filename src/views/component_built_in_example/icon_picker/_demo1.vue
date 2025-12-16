<script setup lang="ts">
const icon = ref('')
const icon1 = ref('ep:success-filled')
</script>

<template>
  <div mb4>
    <FaIconPicker v-model="icon" />
  </div>
  <div>
    <FaIconPicker v-model="icon1" />
  </div>
</template>
