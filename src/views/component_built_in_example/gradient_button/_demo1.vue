<template>
  <div class="flex gap-4">
    <FaGradientButton>Fantastic-admin 起飞! 🚀🚀🚀</FaGradientButton>
    <FaGradientButton :duration="500">
      速度更快
    </FaGradientButton>
    <FaGradientButton :colors="['#000', '#fff']">
      自定义颜色
    </FaGradientButton>
    <FaGradientButton class="p-2">
      加粗边框
    </FaGradientButton>
  </div>
</template>
