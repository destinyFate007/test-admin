<script setup lang="ts">
const menuBadgeStore = useMenuBadgeStore()
function add() {
  menuBadgeStore.setNumber(menuBadgeStore.number + 1)
}
function sub() {
  menuBadgeStore.setNumber(menuBadgeStore.number - 1)
}
</script>

<template>
  <div>
    <FaPageHeader title="数字标记" description="搭配 Pinia 可实现动态设置。请控制数字展示长度，避免导航标记覆盖导航标题，为 0 时则隐藏" />
    <FaPageMain>
      <div class="space-y-2">
        <div>
          当前 number 值：{{ menuBadgeStore.number }}
        </div>
        <div class="space-x-2">
          <FaButton @click="add">
            <template #icon>
              <FaIcon name="i-ep:plus" />
            </template>
            1
          </FaButton>
          <FaButton @click="sub">
            <FaIcon name="i-ep:minus" />
            1
          </FaButton>
        </div>
      </div>
    </FaPageMain>
  </div>
</template>
