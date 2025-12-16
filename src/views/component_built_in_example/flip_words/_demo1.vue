<template>
  <div class="h-100 flex items-center justify-center">
    <div class="mx-auto text-4xl text-neutral-600 font-semibold dark:text-neutral-400">
      Vue.js 是一款
      <FaFlipWords
        :words="['渐进式', '易上手的', '高性能', '多功能']"
        :duration="3000"
        class="text-4xl !text-primary"
      />
      JavaScript 框架
      <div class="mt-4">
        用于构建现代 Web 应用
      </div>
    </div>
  </div>
</template>
