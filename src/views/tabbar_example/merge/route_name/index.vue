<script lang="ts" setup>
defineOptions({
  name: 'KeepAliveExamplePage',
})

const router = useRouter()

function a(id: number) {
  router.push({
    name: 'tabbarExampleMergeRouteNameDetail',
    params: {
      id,
    },
  })
}
</script>

<template>
  <div>
    <FaPageHeader title="标签页合并" description="基于「路由名称」合并标签页" />
    <FaPageMain main-class="flex gap-2">
      <FaButton @click="a(1)">
        打开详情页1
      </FaButton>
      <FaButton @click="a(2)">
        打开详情页2
      </FaButton>
    </FaPageMain>
  </div>
</template>

<style scoped>
.block {
  margin-bottom: 10px;
}
</style>
