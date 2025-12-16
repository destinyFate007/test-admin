<template>
  <FaFlipCard rotate="x">
    <div class="size-full flex-center text-xl font-bold">
      垂直翻转
    </div>
    <template #back>
      <div class="flex flex-col p-4">
        <h1 class="text-xl text-card-foreground font-bold">
          什么是 Fantastic-admin ?
        </h1>
        <FaDivider class="my-2" />
        <p class="text-base text-card-foreground font-medium leading-normal">
          Fantastic-admin 是一个基于 Vue 3 的后台管理系统框架，它集成了丰富的组件和工具函数，可以帮助开发者快速构建现代化的管理系统。
        </p>
      </div>
    </template>
  </FaFlipCard>
</template>
