<script setup lang="tsx">
import { useFaDrawer } from '@/ui/components/FaDrawer'
import { useFaModal } from '@/ui/components/FaModal'

const TestComponent = defineComponent({
  setup() {
    const val = ref('123')
    return () => (
      <div>
        <input v-model={val.value} class="w-full border rounded-md p-2" />
      </div>
    )
  },
})

const { open } = useFaDrawer().create({
  title: '标题',
  description: '这里是一段描述介绍',
  beforeClose: (action, done) => {
    if (action === 'close') {
      useFaModal().confirm({
        title: '提示',
        content: '确定要关闭吗？',
        onConfirm: () => {
          done()
        },
      })
    }
    else {
      done()
    }
  },
  content: h(TestComponent),
})
</script>

<template>
  <FaButton @click="open">
    打开
  </FaButton>
</template>
