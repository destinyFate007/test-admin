<script setup lang="ts">
const menuBadgeStore = useMenuBadgeStore()
</script>

<template>
  <div>
    <FaPageHeader title="注意看子级导航的图标切换" description="通过设置子级导航路由 meta 对象里的 icon 和 activeIcon 实现图标切换效果" />
    <FaPageMain>
      <div class="space-y-2">
        <div>
          当前 badge 值：{{ menuBadgeStore.dot }}
        </div>
        <FaButton @click="menuBadgeStore.switchDot()">
          切换
        </FaButton>
      </div>
    </FaPageMain>
  </div>
</template>
