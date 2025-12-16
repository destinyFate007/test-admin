<script setup lang="ts">
const settingsStore = useSettingsStore()
const mainKPage = useMainPage()

function mainKPageMaximizeStatus() {
  mainKPage.maximize(!settingsStore.mainPageMaximizeStatus)
}
</script>

<template>
  <div>
    <FaPageHeader
      title="主页面最大化" description="扩大可视范围和操作区域，能更专注于主页面上的操作"
    />
    <FaPageMain>
      <p>同时框架还提供全局函数，可自由控制主页面是否最大化。</p>
      <p>可通过双击标签页，或在标签页上右键并选择“最大化”进入。</p>
      <FaButton @click="mainKPageMaximizeStatus">
        {{ settingsStore.mainPageMaximizeStatus ? '退出' : '开启' }}最大化
      </FaButton>
    </FaPageMain>
  </div>
</template>
