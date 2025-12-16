<script setup lang="ts">
const menuBadgeStore = useMenuBadgeStore()
function switchVariant(variant: 'default' | 'secondary' | 'destructive') {
  menuBadgeStore.setVariant(variant)
}
</script>

<template>
  <div>
    <FaPageHeader title="标记变体" description="搭配 Pinia 可实现动态设置" />
    <FaPageMain>
      <div class="space-x-2">
        <FaButton :disabled="menuBadgeStore.variant === 'default'" @click="switchVariant('default')">
          default
        </FaButton>
        <FaButton :disabled="menuBadgeStore.variant === 'secondary'" @click="switchVariant('secondary')">
          secondary
        </FaButton>
        <FaButton :disabled="menuBadgeStore.variant === 'destructive'" @click="switchVariant('destructive')">
          destructive
        </FaButton>
      </div>
    </FaPageMain>
  </div>
</template>
