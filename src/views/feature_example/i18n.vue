<i18n lang="json">
{
  "zh-cn": {
    "intro": "除了支持全局多语言切换，还支持 Vue 单文件模式语言切换，你可以尝试在这个页面点击右上角的语言切换试试",
    "form": {
      "name": "姓名",
      "age": "年龄"
    },
    "formRules": {
      "name": "请输入姓名",
      "age": "请输入年龄"
    }
  },
  "zh-tw": {
    "intro": "除了支持全局多語言切換，還支持 Vue 單文件模式語言切換，你可以嘗試在這個頁面點擊右上角的語言切換試試",
    "form": {
      "name": "姓名",
      "age": "年齡"
    },
    "formRules": {
      "name": "請輸入姓名",
      "age": "請輸入年齡"
    }
  },
  "en": {
    "intro": "In addition to global multi-language switch, also support Vue single file mode language switch, you can try to click on the top right corner of the page to switch language",
    "form": {
      "name": "Name",
      "age": "Age"
    },
    "formRules": {
      "name": "Please enter name",
      "age": "Please enter age"
    }
  }
}
</i18n>

<script setup lang="ts">
import { ElButton, ElForm, ElFormItem, ElInput, ElPagination } from 'element-plus'
import { toast } from 'vue-sonner'
import { getLocales, i18n } from '@/locales'
import dayjs from '@/utils/dayjs'

const { t } = useI18n()
const settingsStore = useSettingsStore()
const currentPage = ref(1)
const pageSize = ref(100)
const data = ref({
  name: '',
  age: '',
})
const rulesData = ref({
  name: [{
    required: true,
    message: () => t('formRules.name'),
    trigger: 'blur',
  }],
  age: [{
    required: true,
    message: () => t('formRules.age'),
    trigger: 'blur',
  }],
})
const date = ref('')
watch(() => settingsStore.settings.app.defaultLang, () => {
  setTimeout(() => {
    date.value = dayjs().format('MMMM-dddd')
  }, 500)
}, {
  immediate: !0,
})

function setI18n(lang: string) {
  const locales = getLocales()
  if (locales) {
    if (lang === 'zh-cn') {
      i18n.global.setLocaleMessage(lang, {
        ...locales!['zh-cn'],
        hello: {
          world: '你好，世界！',
        },
      })
    }
    else {
      i18n.global.setLocaleMessage(lang, {
        ...locales.en,
        hello: {
          world: 'Hello World !',
        },
      })
      toast.success('载入成功，你可以切换语言查看效果', {
        position: 'top-center',
      })
    }
  }
}
</script>

<template>
  <div>
    <FaPageHeader title="国际化" :description="t('intro')" />
    <FaPageMain title="Element 组件">
      <ElPagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[100, 200, 300, 400]" layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="() => {}" @current-change="() => {}" />
    </FaPageMain>
    <FaPageMain title="表单验证(待优化)">
      <ElForm v-model="data" :rules="rulesData" label-width="100px">
        <ElFormItem :label="t('form.name')" prop="name">
          <ElInput v-model="data.name" />
        </ElFormItem>
        <ElFormItem :label="t('form.age')" prop="age">
          <ElInput v-model="data.age" />
        </ElFormItem>
      </ElForm>
    </FaPageMain>
    <FaPageMain title="Dayjs">
      {{ date }}
    </FaPageMain>
    <FaPageMain title="延迟加载">
      <ElButton @click="() => setI18n('zh-cn')">
        载入中文
      </ElButton>
      <ElButton @click="() => setI18n('en')">
        载入英文
      </ElButton>
      <!--  eslint-disable-next-line @intlify/vue-i18n/no-missing-keys -->
      <p>{{ t('hello.world') }}</p>
    </FaPageMain>
  </div>
</template>
