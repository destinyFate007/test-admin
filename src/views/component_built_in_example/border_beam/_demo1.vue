<template>
  <div class="relative h-100 flex-center overflow-hidden border rounded-lg">
    <span class="pointer-events-none whitespace-pre-wrap from-black to-gray-300/80 bg-gradient-to-b bg-clip-text text-center text-8xl text-transparent font-semibold leading-none dark:from-white dark:to-slate-900/10">
      边框光束
    </span>
    <FaBorderBeam
      :size="250"
      :duration="12000"
      :delay="1000"
      :border-width="2"
    />
  </div>
</template>
