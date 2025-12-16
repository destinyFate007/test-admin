<script lang="ts" setup>
defineOptions({
  name: 'KeepAliveExamplePage',
})

const route = useRoute()
</script>

<template>
  <FaPageMain>
    你现在可以切换到上个页面，然后打开点另一个按钮，然后注意看标签页
    <div>当前页面ID：{{ route.params.id }}</div>
  </FaPageMain>
</template>

<style scoped>
.block {
  margin-bottom: 10px;
}
</style>
