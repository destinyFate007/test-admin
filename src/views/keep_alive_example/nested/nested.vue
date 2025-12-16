<script lang="ts" setup>
defineOptions({
  name: 'TabExampleNested1',
})

const keepAliveStore = useKeepAliveStore()
</script>

<template>
  <div>
    <FaPageMain title="层级 1">
      <RouterView v-slot="{ Component }">
        <KeepAlive :include="keepAliveStore.list">
          <component :is="Component" />
        </KeepAlive>
      </RouterView>
    </FaPageMain>
  </div>
</template>
