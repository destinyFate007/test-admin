<script setup lang="ts">
const show = ref(true)

function handleReset() {
  show.value = false
  nextTick(() => {
    show.value = true
  })
}
</script>

<template>
  <FaBlurReveal
    v-if="show"
    :delay="0.2"
    :duration="0.75"
    blur="10px"
    :y-offset="100"
    class="p-8"
  >
    <h2 class="text-6xl font-bold tracking-tighter">
      你好呀 👋
    </h2>
    <div class="mt-4 text-pretty text-2xl tracking-tighter">
      最近怎么样？
    </div>
  </FaBlurReveal>
  <FaButton @click="handleReset">
    重新执行
  </FaButton>
</template>
