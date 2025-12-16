<script setup lang="ts">
const array = ref([])
</script>

<template>
  <div class="bg-background transition-300">
    <div class="rounded-2 bg-muted px-4 py-2 text-sm text-muted-foreground">
      该组件需要搭配业务场景使用。
    </div>
  </div>
  <FaStorageBox :data="array" name="box1" />
</template>
