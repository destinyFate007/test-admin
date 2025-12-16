<script setup lang="ts">
const carouselList = [
  'https://fantastic-admin.hurui.me/logo.svg',
  'https://fantastic-admin.hurui.me/logo.svg',
  'https://fantastic-admin.hurui.me/logo.svg',
  'https://fantastic-admin.hurui.me/logo.svg',
]
</script>

<template>
  <div class="flex-center gap-30 p-12">
    <FaCarousel class="size-80">
      <img v-for="(item, index) in carouselList" :key="index" :src="item" class="size-full border rounded-xl object-cover" :style="{ transform: `rotate(${index * 90}deg)` }">
    </FaCarousel>
    <!-- 垂直时需注意，高度要增加1rem -->
    <FaCarousel orientation="vertical" class="size-80" content-class="w-80 h-84">
      <img v-for="(item, index) in carouselList" :key="index" :src="item" class="size-full border rounded-xl object-cover" :style="{ transform: `rotate(${index * 90}deg)` }">
    </FaCarousel>
  </div>
</template>
