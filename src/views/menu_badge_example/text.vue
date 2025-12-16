<script setup lang="ts">
const menuBadgeStore = useMenuBadgeStore()
function switchText() {
  menuBadgeStore.setText(menuBadgeStore.text === '热门' ? '促销' : '热门')
}
function cleared() {
  menuBadgeStore.setText('')
}
</script>

<template>
  <div>
    <FaPageHeader title="文字标记" description="搭配 Pinia 可实现动态设置。请控制文字展示长度，避免导航标记覆盖导航标题" />
    <FaPageMain>
      <div class="space-y-2">
        <div>
          当前 badge 值：'{{ menuBadgeStore.text }}'
        </div>
        <div class="space-x-2">
          <FaButton @click="switchText">
            切换
          </FaButton>
          <FaButton @click="cleared">
            清空
          </FaButton>
        </div>
      </div>
    </FaPageMain>
  </div>
</template>
