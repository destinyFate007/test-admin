<route lang="yaml">
meta:
  enabled: false
</route>

<template>
  <FaPageMain>
    <RouterLink :to="{ name: 'breadcrumbExampleDetail2' }">
      <template #default="{ navigate }">
        <FaButton @click="navigate">
          查看详情页
        </FaButton>
      </template>
    </RouterLink>
  </FaPageMain>
</template>
