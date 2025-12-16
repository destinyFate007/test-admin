<script setup lang="ts">
const mainPage = useMainPage()
// 标题设置为「 测试标题 」
function setCustomTitle() {
  mainPage.setCustomTitle('测试标题')
}
function resetCustomTitle() {
  mainPage.resetCustomTitle()
}
</script>

<template>
  <div>
    <FaPageMain>
      <div class="space-x-2">
        <FaButton variant="outline" @click="setCustomTitle">
          标题设置为「 测试标题 」
        </FaButton>
        <FaButton variant="outline" @click="resetCustomTitle">
          标题重置
        </FaButton>
      </div>
    </FaPageMain>
  </div>
</template>
