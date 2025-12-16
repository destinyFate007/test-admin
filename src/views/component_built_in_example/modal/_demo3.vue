<script setup lang="tsx">
import { useFaModal } from '@/ui/components/FaModal'

const TestComponent = defineComponent({
  props: {
    close: {
      type: Function,
    },
  },
  setup(props) {
    const val = ref('123')
    return () => (
      <div class="flex flex-col gap-4">
        <input v-model={val.value} class="w-full border rounded-md p-2" />
        <fa-button onClick={() => props.close?.()}>
          组件内部关闭弹窗
        </fa-button>
      </div>
    )
  },
})

const { open, close } = useFaModal().create({
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
  content: () => h(TestComponent, { close }),
})
</script>

<template>
  <FaButton @click="open">
    打开
  </FaButton>
</template>
