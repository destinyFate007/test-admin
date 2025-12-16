<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
})

interface Props {
  modelValue?: boolean
}
const modelValue = useVModel(props, 'modelValue')
const dictTypeList = ref<any[]>([
  { name: '证件', code: 'user_card' },
  { name: '学历', code: 'user_education' },
])

const selectedCode = ref('')

const dictionaryStore = useDictionaryStore()

const dictList = ref<any[]>([])

async function handleSelectChange(code: string) {
  dictList.value = await dictionaryStore.get(code)
}

function handleDialogClosed() {
  modelValue.value = false
}

onMounted(() => {
  dictionaryStore.init()
})
</script>

<template>
  <ElDialog
    v-model="modelValue"
    title="使用示例"
    width="400px"
    :close-on-click-modal="false"
    append-to-body
    destroy-on-close
    @closed="handleDialogClosed"
  >
    <ElAlert :closable="false">
      如果全局状态中没有该字典，则会请求接口获取并存储在全局状态中。
    </ElAlert>

    <ElSelect
      v-model="selectedCode"
      style="width: 100%;"
      @change="handleSelectChange"
    >
      <ElOption
        v-for="item in dictTypeList"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </ElSelect>

    <p>{{ dictList }}</p>
    <hr class="my-2">
    <p>根据value获取name:</p>
    <p>{{ dictionaryStore.getName("user_card", "1") }}</p>
    <hr class="my-2">
    <p>根据name获取value:</p>
    <p>{{ dictionaryStore .getValue("user_card", "居民身份证") }}</p>
  </ElDialog>
</template>
