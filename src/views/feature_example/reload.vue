<route lang="yaml">
meta:
  enabled: false
</route>

<script setup lang="ts">
defineOptions({
  name: 'FeatureExampleReload',
})

const mainPage = useMainPage()

const text = ref('')

function reload() {
  mainPage.reload()
}
</script>

<template>
  <div>
    <FaPageHeader title="主页面刷新" description="重新渲染当前页面" />
    <FaPageMain>
      <div class="space-y-2">
        <p>该特性无视页面缓存，意味着即便当前页面开启了页面缓存，手动刷新也会强制清除当前页面内的组件和数据的状态。</p>
        <FaInput v-model="text" />
        <FaButton @click="reload">
          刷新
        </FaButton>
      </div>
    </FaPageMain>
  </div>
</template>
