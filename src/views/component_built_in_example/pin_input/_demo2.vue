<script setup lang="ts">
const pin = ref('')
</script>

<template>
  <FaPinInput v-model="pin" :length="4" />
</template>
