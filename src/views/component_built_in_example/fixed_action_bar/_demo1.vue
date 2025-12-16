<script setup lang="ts">
const height = ref([50])
</script>

<template>
  <div class="h-vh" />
  <FaFixedActionBar>
    <div :style="`height: ${height[0]}px;`" />
    <FaSlider v-model="height" />
  </FaFixedActionBar>
</template>
