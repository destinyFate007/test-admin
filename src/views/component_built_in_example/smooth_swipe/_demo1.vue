<script setup lang="ts">
const activeIndex = ref<number>(0)
</script>

<template>
  <FaButtonGroup>
    <FaButton v-for="index in 4" :key="index" :variant="activeIndex === index - 1 ? 'default' : 'outline'" @click="activeIndex = index - 1">
      切换到 {{ index }}
    </FaButton>
  </FaButtonGroup>
  <FaSmoothSwipe :active-index>
    <div class="h-50 flex-center text-20">
      1
    </div>
    <div class="h-150 flex-center text-20">
      2
    </div>
    <div class="h-100 flex-center text-20">
      3
    </div>
    <div class="h-50 flex-center text-20">
      4
    </div>
  </FaSmoothSwipe>
</template>
