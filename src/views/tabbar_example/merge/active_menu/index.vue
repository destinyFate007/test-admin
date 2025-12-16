<script lang="ts" setup>
defineOptions({
  name: 'KeepAliveExamplePage',
})

const router = useRouter()

function to(id: number) {
  router.push({
    name: 'tabbarExampleMergeActiveMenuDetail',
    params: {
      id,
    },
  })
}
</script>

<template>
  <div>
    <FaPageHeader title="标签页合并" description="基于「激活菜单」合并标签页" />
    <FaPageMain main-class="flex gap-2">
      <FaButton @click="to(1)">
        打开详情页1
      </FaButton>
      <FaButton @click="to(2)">
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
