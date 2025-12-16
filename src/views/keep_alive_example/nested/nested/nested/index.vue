<script lang="ts" setup>
defineOptions({
  name: 'TabExampleNestedTest',
})

const val = ref('')
</script>

<template>
  <div>
    <FaPageMain title="层级 1-1-1">
      <FaInput v-model="val" />
    </FaPageMain>
  </div>
</template>
