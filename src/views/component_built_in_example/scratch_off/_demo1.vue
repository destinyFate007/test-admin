<script lang="ts" setup>
import { toast } from 'vue-sonner'

function handleComplete() {
  toast.success('恭喜你刮中了')
}
</script>

<template>
  <FaScratchOff
    :width="250"
    :height="250"
    :min-scratch-percentage="30"
    class="flex items-center justify-center overflow-hidden border-2 rounded-2xl bg-gray-100"
    @complete="handleComplete"
  >
    <div class="text-8xl">
      🥳
    </div>
  </FaScratchOff>
</template>
