<template>
  <FaFlipCard class="h-72 w-128">
    <div class="size-full">
      <img src="https://picsum.photos/560/720" class="size-full object-cover">
      <div class="absolute inset-x-4 bottom-4 text-xl text-white font-bold text-shadow-xl">
        自定义尺寸
      </div>
    </div>
    <template #back>
      <div class="h-full flex flex-col p-4">
        <h1 class="text-xl text-card-foreground font-bold">
          什么是 Fantastic-admin ?
        </h1>
        <FaDivider class="my-2" />
        <p class="text-base text-card-foreground font-medium leading-normal">
          Fantastic-admin 是一个基于 Vue 3 的后台管理系统框架，它集成了丰富的组件和工具函数，可以帮助开发者快速构建现代化的管理系统。
        </p>
        <FaButton class="mt-auto">
          按钮
        </FaButton>
      </div>
    </template>
  </FaFlipCard>
</template>
