<script setup lang="ts">
import { toast } from 'vue-sonner'

const countToRef = useTemplateRef('countToRef')

const startVal = ref(0)
const endVal = ref(100000)

function onStarted() {
  toast('开始')
}

function onFinished() {
  toast('结束')
}
</script>

<template>
  <FaCountTo ref="countToRef" :start-val="startVal" :end-val="endVal" :autoplay="false" @on-started="onStarted" @on-finished="onFinished" />
  <div class="flex flex-row gap-2">
    <FaButton @click="countToRef?.start">
      开始
    </FaButton>
    <FaButton @click="countToRef?.reset">
      重置
    </FaButton>
    <FaButton @click="endVal += 10000">
      增加10000
    </FaButton>
  </div>
</template>
