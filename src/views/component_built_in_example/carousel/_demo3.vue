<script setup lang="ts">
const carouselList = [
  'https://fantastic-admin.hurui.me/logo.svg',
  'https://fantastic-admin.hurui.me/logo.svg',
  'https://fantastic-admin.hurui.me/logo.svg',
  'https://fantastic-admin.hurui.me/logo.svg',
]
</script>

<template>
  <div class="mx-auto max-w-80">
    <FaCarousel
      :auto-scroll="{
        speed: 2,
      }"
    >
      <img v-for="(item, index) in carouselList" :key="index" :src="item" class="size-full border rounded-xl object-cover" :style="{ transform: `rotate(${index * 90}deg)` }">
    </FaCarousel>
  </div>
</template>
