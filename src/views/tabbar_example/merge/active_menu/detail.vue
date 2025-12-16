<script lang="ts" setup>
const router = useRouter()
</script>

<template>
  <FaPageMain>
    注意看标签页
    <FaButton @click="router.back()">
      返回
    </FaButton>
  </FaPageMain>
</template>

<style scoped>
.block {
  margin-bottom: 10px;
}
</style>
