<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import Sortable from 'sortablejs'
import { toast } from 'vue-sonner'
import api from '@/api/modules/menuExample'

defineOptions({
  name: 'PagesExampleMenuDetail',
})
const route = useRoute()
const router = useRouter()
const mainPage = useMainPage()

onMounted(() => {
  mainPage.setCustomTitle(route.params.id ? '编辑' : '新增')
})
onBeforeUnmount(() => {
  mainPage.resetCustomTitle()
})

const loading = ref(false)
const formRef = useTemplateRef<FormInstance>('formRef')

const form = ref<Record<string, any>>({
  id: route.params?.id || '',
  parentId: route.query?.parentId || '',
  path: '',
  redirect: '',
  name: '',
  component: '',
  meta: {
    title: '',
    icon: '',
    activeIcon: '',
    defaultOpened: !1,
    alwaysOpened: !1,
    permanent: !1,
    auth: [],
    auths: [],
    menu: !0,
    breadcrumb: !0,
    activeMenu: '',
    cache: [],
    noCache: [],
    badge: '',
    badgeVariant: 'default',
    newWindow: !1,
    link: '',
    iframe: '',
    copyright: !1,
  },
})
const formRules = ref<FormRules>({
  'path': [{
    required: !0,
    message: '请输入路由地址',
    trigger: 'blur',
  }],
  'meta.title': [{
    required: !0,
    message: '请输入显示名称',
    trigger: 'blur',
  }],
})

onMounted(() => {
  if (form.value.id !== '') {
    getInfo()
  }
})

function getInfo() {
  loading.value = true
  api.detail(form.value.id).then((res: any) => {
    loading.value = false
    form.value.id = res.data.id
    form.value.parentId = res.data.parentId
    form.value.path = res.data.path
    form.value.redirect = res.data.redirect
    form.value.name = res.data.name
    form.value.component = res.data.component
    Object.assign(form.value.meta, res.data.meta)
  })
}
const auth = ref('')
const authShow = ref(false)
const inputAuthRef = useTemplateRef('inputAuthRef')

function handleRemoveAuth(value: string) {
  form.value.meta.auth.splice(form.value.meta.auth.indexOf(value), 1)
}
function handleAddAuth() {
  authShow.value = true
  nextTick(() => {
    inputAuthRef.value?.input?.focus()
  },
  )
}

function handleEnterAuth() {
  if (auth.value) {
    if (form.value.meta.auth.includes(auth.value)) {
      toast.warning('标识已存在')
    }
    else {
      form.value.meta.auth.push(auth.value)
    }
  }
  authShow.value = false
  auth.value = ''
}

const cache = ref('')
const cacheShow = ref(false)
const inputCacheRef = useTemplateRef('inputCacheRef')

function handleRemoveCache(value: string) {
  typeof form.value.meta.cache === 'object' && form.value.meta.cache.splice(form.value.meta.cache.indexOf(value), 1)
}

function handleAddCache() {
  cacheShow.value = true

  nextTick(() => {
    inputCacheRef.value?.input?.focus()
  },
  )
}

function handleEnterCache() {
  if (cache.value) {
    if (typeof form.value.meta.cache === 'object' && form.value.meta.cache.includes(cache.value)) {
      toast.warning('标识已存在')
    }
    else {
      typeof form.value.meta.cache === 'object' && form.value.meta.cache.push(cache.value)
    }
  }
  cacheShow.value = false
  cache.value = ''
}

const noCache = ref('')
const noCacheShow = ref(false)
const inputNoCacheRef = useTemplateRef('inputNoCacheRef')

function handleRemoveNoCache(value: string) {
  typeof form.value.meta.noCache === 'object' && form.value.meta.noCache.splice(form.value.meta.noCache.indexOf(value), 1)
}

function handleAddNoCache() {
  noCacheShow.value = true

  nextTick(() => {
    inputNoCacheRef.value?.input?.focus()
  },
  )
}

function handleEnterNoCache() {
  if (noCache.value) {
    if (typeof form.value.meta.noCache === 'object' && form.value.meta.noCache.includes(noCache.value)) {
      toast.warning('标识已存在')
    }
    else {
      typeof form.value.meta.noCache === 'object' && form.value.meta.noCache.push(noCache.value)
    }
  }
  noCacheShow.value = false
  noCache.value = ''
}

const authsTableRef = useTemplateRef('authsTableRef')
const authsTableKey = ref(0)
onMounted(() => {
  TableSortable()
})

function handleAddAuths() {
  form.value.meta.auths.push({
    name: '',
    value: '',
  })
  nextTick(() => {
    authsTableRef.value?.setScrollTop(form.value.meta.auths.length * 50)
  })
}

function handleDelAuths(index: number) {
  form.value.auths.splice(index, 1)
}
function TableSortable() {
  const tbody = authsTableRef.value?.$el.querySelector('.el-table__body-wrapper tbody')
  Sortable.create(tbody, {
    handle: '.sortable',
    animation: 300,
    ghostClass: 'ghost',
    onEnd: ({
      newIndex,
      oldIndex,
    }) => {
      if (newIndex === undefined || oldIndex === undefined) {
        return
      }
      const row = form.value.meta.auths.splice(oldIndex, 1)[0]
      form.value.meta.auths.splice(newIndex, 0, row)
      authsTableKey.value += 1
      nextTick(() => {
        TableSortable()
      })
    },
  })
}
function onSubmit() {
  formRef.value?.validate((valid) => {
    if (valid) {
      if (form.value.id === '') {
        api.create(form.value).then(() => {
          toast.success('模拟新增成功')
          onCancel()
        })
      }
      else {
        api.edit(form.value).then(() => {
          toast.success('模拟编辑成功')
          onCancel()
        })
      }
    }
  })
}

function onCancel() {
  router.close({ name: 'pagesExampleGeneralMenuList' })
}
</script>

<template>
  <div class="absolute size-full flex flex-col">
    <FaPageHeader :title="route.params.id ? '编辑' : '新增'">
      <FaButton variant="outline" size="sm" class="rounded-full" @click="onCancel">
        <FaIcon name="i-ep:arrow-left" />
        返回
      </FaButton>
    </FaPageHeader>
    <ElForm ref="formRef" :model="form" :rules="formRules" label-position="top">
      <FaLayoutContainer right-side-width="500px" hide-right-side-toggle class="static" right-side-class="flex flex-col">
        <template #rightSide>
          <FaPageHeader title="权限池" class="mb-0 border-b-none bg-border/50 -mx-15px -mt-15px">
            <template #description>
              <p>设置导航所具备的所有权限，权限池内的权限会用于角色管理</p>
              <p>
                通常只在最子级导航上进行设置
              </p>
            </template>
          </FaPageHeader>
          <ElTable ref="authsTableRef" :key="authsTableKey" :data="form.meta.auths" stripe highlight-current-row border>
            <ElTableColumn align="center" fixed prop="sortValue" width="60">
              <template #header>
                <ElButton type="primary" size="small" plain circle @click="handleAddAuths">
                  <FaIcon name="i-ep:plus" />
                </ElButton>
              </template>
              <template #default="{ $index }">
                <span class="index">{{ $index + 1 }}</span>
                <ElButton class="delete" type="danger" size="small" plain circle @click="handleDelAuths($index)">
                  <FaIcon name="i-ep:delete" />
                </ElButton>
              </template>
            </ElTableColumn>
            <ElTableColumn align="center" fixed label="排序" width="80">
              <ElTag type="info" class="sortable">
                <FaIcon name="i-ep:d-caret" />
              </ElTag>
            </ElTableColumn>
            <ElTableColumn prop="name" label="名称">
              <template #default="{ row }">
                <ElInput v-model="row.name" clearable placeholder="请输入名称" />
              </template>
            </ElTableColumn>
            <ElTableColumn prop="value" label="标识">
              <template #default="{ row }">
                <ElInput v-model="row.code" clearable placeholder="请输入标识" />
              </template>
            </ElTableColumn>
          </ElTable>
        </template>
        <FaPageHeader v-if="form.parentId" title="基础配置" description="标准路由配置，包含 path/redirect/name/component" class="mb-0 border-b-none bg-border/50 -mx-15px -mt-15px" />
        <ElRow v-if="form.parentId" :gutter="30" style="padding: 20px;">
          <ElCol :xl="12" :lg="24">
            <ElFormItem prop="path" label="路由地址">
              <ElInput v-model="form.path" clearable placeholder="请输入路由地址" />
            </ElFormItem>
          </ElCol>
          <ElCol :xl="12" :lg="24">
            <ElFormItem prop="redirect" label="重定向">
              <ElInput v-model="form.redirect" clearable placeholder="请输入重定向地址" />
            </ElFormItem>
          </ElCol>
          <ElCol :lg="24" :xl="12">
            <ElFormItem prop="name" label="路由命名">
              <template #label>
                路由命名
                <span class="label-tip"> 即 name ，系统唯一</span>
              </template>
              <ElInput v-model="form.name" clearable placeholder="请输入路由命名" />
            </ElFormItem>
          </ElCol>
          <ElCol :lg="24" :xl="12">
            <ElFormItem label="组件路径" prop="component">
              <template #label>
                组件路径
                <span class="label-tip"> 顶级路由请设置 <ElLink
                  type="primary" :underline="true"
                  @click.prevent="() => form.component = 'LAYOUT'"
                >Layout</ElLink>”，中间层级路由无需设置</span>
              </template>
              <ElInput v-model="form.component" clearable>
                <template v-if="form.component !== 'LAYOUT'" #prepend>
                  /src/views/
                </template>
              </ElInput>
            </ElFormItem>
          </ElCol>
        </ElRow>
        <FaPageHeader title="扩展配置" content="标准路由配置，包含 path/redirect/name/component">
          <template #content>
            框架扩展配置，详细配置介绍请查看
          </template>
        </FaPageHeader>
        <ElRow :gutter="30" style="padding: 20px;">
          <ElCol :xl="12" :lg="24">
            <ElFormItem prop="meta.title" label="显示名称">
              <ElInput v-model="form.meta.title" clearable placeholder="请输入显示名称" />
            </ElFormItem>
          </ElCol>
          <ElCol :xl="12" :lg="24">
            <ElFormItem prop="meta.auth" label="鉴权标识">
              <template #label>
                鉴权标识
                <ElTooltip content="当设置多个标识时，只要命中其中一个则鉴权通过" placement="top">
                  <FaIcon name="i-ri:question-line" />
                </ElTooltip>
              </template>
              <ElSpace>
                <ElTag
                  v-for="tag in form.meta.auth" :key="tag" :disable-transitions="false" class="mx-1" size="large"
                  closable @close="handleRemoveAuth(tag)"
                >
                  {{ tag }}
                </ElTag>
                <ElInput
                  v-if="authShow" ref="inputAuthRef" v-model="auth" style=" width: 200px;" placeholder=""
                  @keydown.enter="handleEnterAuth" @blur="handleEnterAuth"
                />
                <ElButton v-else @click="handleAddAuth">
                  新增
                </ElButton>
              </ElSpace>
            </ElFormItem>
          </ElCol>
          <ElCol :xl="12" :lg="24">
            <ElFormItem prop="meta.icon" label="默认图标">
              <FaIconPicker v-model="form.icon" />
            </ElFormItem>
          </ElCol>
          <ElCol :xl="12" :lg="24">
            <ElFormItem prop="meta.activeIcon" label="激活图标">
              <FaIconPicker v-model="form.activeIcon" />
            </ElFormItem>
          </ElCol>
          <ElCol v-if="form.parentId" :xl="12" :lg="24">
            <ElFormItem prop="meta.defaultOpened" label="默认展开">
              <ElSwitch v-model="form.meta.defaultOpened" active-text="是" inactive-text="否" inline-prompt />
            </ElFormItem>
          </ElCol>
          <ElCol v-if="form.parentId" :xl="12" :lg="24">
            <ElFormItem prop="meta.alwaysOpened" label="始终展开">
              <ElSwitch v-model="form.meta.alwaysOpened" active-text="是" inactive-text="否" inline-prompt />
            </ElFormItem>
          </ElCol>
          <ElCol v-if="form.parentId" :xl="12" :lg="24">
            <ElFormItem prop="meta.permanent" label="常驻标签页">
              <template #label>
                常驻标签页
                <span class="label-tip"> 请勿在带有参数的路由地址上开启该设置</span>
              </template>
              <ElSwitch v-model="form.meta.permanent" active-text="是" inactive-text="否" inline-prompt />
            </ElFormItem>
          </ElCol>
          <ElCol v-if="form.parentId" :xl="12" :lg="24">
            <ElFormItem prop="meta.sidebar" label="在导航显示">
              <ElSwitch v-model="form.meta.sidebar" active-text="显示" inactive-text="隐藏" inline-prompt />
            </ElFormItem>
          </ElCol>
          <ElCol v-if="form.parentId" :xl="12" :lg="24">
            <ElFormItem prop="meta.breadcrumb" label="在面包屑显示">
              <ElSwitch v-model="form.meta.breadcrumb" active-text="显示" inactive-text="隐藏" inline-prompt />
            </ElFormItem>
          </ElCol>
          <ElCol v-if="form.parentId" :lg="24" :xl="12">
            <ElFormItem prop="meta.cache" label="缓存规则">
              <template #label>
                缓存规则
                <ElTooltip content="当跳转到设置的路由时，则会对当前路由进行缓存" placement="top">
                  <FaIcon name="i-ri:question-line" />
                </ElTooltip>
                <span class="label-tip">切换为
                  <ElLink v-show="typeof form.meta.cache === 'object'" type="primary" @click="form.meta.cache = true">
                    始终缓存
                  </ElLink>
                  <ElLink v-show="typeof form.meta.cache === 'boolean'" type="primary" @click="form.meta.cache = []">
                    规则模式
                  </ElLink>
                </span>
              </template>

              <ElSpace v-show="typeof form.meta.cache === 'object'">
                <ElTag
                  v-for="item in form.meta.cache" :key="item" class="mx-1" size="large"
                  :disable-transitions="false" closable @close="handleRemoveCache(item as string)"
                >
                  {{ item }}
                </ElTag>
                <ElInput
                  v-if="cacheShow" ref="inputCacheRef" v-model="cache" style=" width: 200px;"
                  @keydown.enter="handleEnterCache" @blur="handleEnterCache"
                />
                <ElButton v-else @click="handleAddCache">
                  新增
                </ElButton>
              </ElSpace>
              <div v-show="typeof form.meta.cache === 'boolean'">
                始终缓存
              </div>
            </ElFormItem>
          </ElCol>
          <ElCol v-if="form.parentId" :lg="24" :xl="12">
            <ElFormItem prop="meta.noCache" label="不缓存规则">
              <template #label>
                不缓存规则
                <ElTooltip content="当跳转到设置的路由时，则会对当前路由取消缓存" placement="top">
                  <FaIcon name="i-ri:question-line" />
                </ElTooltip>
                <span class="label-tip">当缓存规则为“始终缓存”时生效</span>
              </template>
              <ElSpace>
                <ElTag
                  v-for="item in form.meta.noCache" :key="item" class="mx-1" size="large"
                  :disable-transitions="false" closable @close="handleRemoveNoCache(item)"
                >
                  {{ item }}
                </ElTag>
                <ElInput
                  v-if="noCacheShow" ref="inputNoCacheRef" v-model="noCache" style=" width: 200px;"
                  placeholder="" @keydown.enter="handleEnterNoCache" @blur="handleEnterNoCache"
                />
                <ElButton v-else @click="handleAddNoCache">
                  新增
                </ElButton>
              </ElSpace>
            </ElFormItem>
          </ElCol>
          <ElCol v-if="form.parentId" :lg="24" :xl="12">
            <ElFormItem prop="meta.activeMenu" label="高亮导航">
              <template #label>
                高亮导航
                <span class="label-tip">如果子路由不在导航显示，则需要设置高亮的上级路由地址</span>
              </template>
              <ElInput v-model="form.meta.activeMenu" clearable placeholder="请输入高亮导航的完整路由地址" />
            </ElFormItem>
          </ElCol>
          <ElCol v-if="form.parentId" :xl="12" :lg="24">
            <ElFormItem prop="meta.badge" label="徽标">
              <template #label>
                徽标
                <span class="label-tip">不宜设置太长，建议控制在4个字符内</span>
              </template>
              <ElInput v-model="form.meta.badge" clearable placeholder="请输入徽标显示内容" />
            </ElFormItem>
          </ElCol>
          <ElCol v-if="form.parentId" :xl="12" :lg="24">
            <ElFormItem prop="meta.badge" label="徽标变体">
              <template #label>
                徽标变体
                <span class="label-tip">不宜设置太长，建议控制在4个字符内</span>
              </template>
              <ElRadioGroup v-model="form.meta.badgeVariant">
                <ElRadioButton label="默认" value="default" />
                <ElRadioButton label="次要" value="secondary" />
                <ElRadioButton label="破坏" value="destructive" />
              </ElRadioGroup>
            </ElFormItem>
          </ElCol>
          <ElCol v-if="form.parentId" :lg="24" :xl="12">
            <ElFormItem prop="meta.newWindow" label="新窗口打开">
              <ElSwitch v-model="form.meta.newWindow" active-text="是" inactive-text="否" inline-prompt />
            </ElFormItem>
          </ElCol>
          <ElCol v-if="form.parentId" :lg="24" :xl="12">
            <ElFormItem prop="meta.link" label="访问外链">
              <template #label>
                访问外链
                <span class="label-tip">请设置 http/https 开头的完整外链地址</span>
              </template>
              <ElInput v-model="form.meta.link" clearable placeholder="请输入网址" />
            </ElFormItem>
          </ElCol>
          <ElCol v-if="form.parentId" :lg="24" :xl="12">
            <ElFormItem prop="meta.iframe" label="内嵌网页">
              <template #label>
                内嵌网页
                <span class="label-tip">请勿与外链同时设置，同时设置时，本设置会失效</span>
              </template>
              <ElInput v-model="form.meta.iframe" clearable placeholder="请输入网址" />
            </ElFormItem>
          </ElCol>
          <ElCol v-if="form.parentId" :lg="24" :xl="12">
            <ElFormItem prop="meta.copyright" label="底部版权">
              <ElSwitch v-model="form.meta.copyright" active-text="显示" inactive-text="隐藏" inline-prompt />
            </ElFormItem>
          </ElCol>
        </ElRow>
      </FaLayoutContainer>
    </ElForm>
    <FaFixedActionBar>
      <div class="flex-center gap-4">
        <FaButton @click="onSubmit">
          提交
        </FaButton>
        <FaButton variant="outline" @click="onCancel">
          取消
        </FaButton>
      </div>
    </FaFixedActionBar>
  </div>
</template>

<style lang="scss" scoped>
.el-form {
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  overflow: auto;
}

.label-tip {
  display: inline-flex;
  margin-left: 10px;
  color: var(--el-text-color-disabled);
}

:deep(.el-table) {
  height: 100%;
  margin-top: 15px;

  .el-table__row {
    &.ghost {
      opacity: 0;
    }

    .index {
      display: inline-block;
    }

    .delete,
    &:hover .index {
      display: none;
    }

    &:hover .delete {
      display: inline-block;
    }

    .el-tag {
      &.sortable,
      &.sortable .icon {
        cursor: ns-resize;
      }
    }
  }
}
</style>
