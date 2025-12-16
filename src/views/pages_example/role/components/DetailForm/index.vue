<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ElTable, ElTableColumn } from 'element-plus'
import { toast } from 'vue-sonner'
import menuApi from '@/api/modules/menuExample'
import api from '@/api/modules/roleExample.ts'

export interface Props {
  id?: number | string
}
const props = withDefaults(
  defineProps<Props>(),
  {
    id: '',
  },
)

const { generateI18nTitle } = useMenu()
const loading = ref(false)
const formRef = useTemplateRef<FormInstance>('formRef')
const form = ref<Record<string, any>>({
  id: props.id,
  name: '',
  remark: '',
  auths: [],
})
const formRules = ref<FormRules>({
  name: [
    {
      required: !0,
      message: '请输入角色名称',
      trigger: 'blur',
    },
  ],
})
const dataSourceType = ref<'frontend' | 'backend'>('frontend')
const rawRouteList = ref<any[]>([]) // 格式化后的路由列表
// 过滤后的路由列表（仅保留有权限/子路由的路由）
const filteredRouteList = computed(() => {
  // 递归过滤路由：核心逻辑 - 只保留有意义的路由项
  function filterValidRoutes(routes: any[]) {
    // 遍历每个路由，处理后返回
    // eslint-disable-next-line array-callback-return
    return routes.map((route) => {
      // 复制原路由对象（避免修改原数据）
      const currentRoute = { ...route }

      // 1. 递归处理子路由：如果有子路由，先过滤子路由
      if (Array.isArray(route.children) && route.children.length > 0) {
        // 递归过滤子路由
        const filteredChildren = filterValidRoutes(route.children)
        // 子路由过滤后有效则保留，无效则删除children属性
        if (filteredChildren.length > 0 && filteredChildren.every(item => !!item)) {
          currentRoute.children = filteredChildren
        }
        else {
          delete currentRoute.children
        }
      }

      // 2. 判断当前路由是否需要保留：满足任一条件则保留
      // 条件1：路由配置了自定义权限列表  条件2：路由有有效子路由
      const hasAuths = route.meta?.auths?.length // 简化原嵌套取值
      const hasValidChildren = currentRoute.children?.length

      // 满足条件则返回当前路由，否则返回undefined（后续会被filter过滤）
      if (hasAuths || hasValidChildren) {
        return currentRoute
      }
    }).filter(Boolean) // 过滤掉undefined的路由项
  }

  // 执行过滤逻辑，传入原始路由列表
  return filterValidRoutes(rawRouteList.value)
})
const routeAuthMap = ref<any[]>([]) // 路由ID-权限映射表

onMounted(() => {
  initRouteData()
  if (form.value.id !== '') {
    getInfo()
  }
})
// 监听数据源类型变化
watch(dataSourceType, () => {
  initRouteData()
})

// 初始化路由数据
function initRouteData() {
  if (dataSourceType.value === 'frontend') {
    // 加载前端路由数据
    rawRouteList.value = useRouteStore().routesRaw
    let routeId = 1 // 路由自增ID

    // 递归为路由赋值ID + 构建权限映射
    function setRouteIdAndAuthMap(routes: any[]) { // 原a
      routes.forEach((route, index) => { // 原e=route，r=index
        // 赋值唯一ID
        routes[index].id = routeId++
        // 记录路由ID和权限列表
        routeAuthMap.value.push({
          id: route.id,
          auths: route.meta.auths || [],
        })
        // 递归处理子路由
        if (route.children?.length) {
          setRouteIdAndAuthMap(route.children)
        }
      })
    }
    setRouteIdAndAuthMap(rawRouteList.value)
  }
  else {
    // 加载后端路由数据
    menuApi.list().then((res) => {
      rawRouteList.value = res.data
      // 构建路由权限映射
      function buildRouteAuthMap(routes: any[]) { // 原a
        routes.forEach((route: any) => { // 原e
          routeAuthMap.value.push({
            id: route.id,
            auths: route.meta.auths || [],
          })
          // 递归处理子路由
          if (route.children?.length) {
            buildRouteAuthMap(route.children)
          }
        })
      }
      buildRouteAuthMap(rawRouteList.value)
    })
  }
}

function getInfo() {
  loading.value = true
  api.detail(form.value.id).then((res: any) => {
    loading.value = false
    form.value.name = res.data.name
    form.value.remark = res.data.remark
    form.value.auths = res.data.auths
  })
}
// 计算属性：每行的勾选状态（全选/半选）
const checkStatus = computed(() => {
  const statusMap: Record<string, any> = {}
  // 遍历路由权限映射，计算每行的全选/半选状态
  routeAuthMap.value.forEach((routeAuthItem) => {
    // 统计已勾选的权限数量
    let checkedCount = 0
    routeAuthItem.auths.forEach((auth: any) => {
      if (form.value.auths.includes(auth.value)) {
        checkedCount++
      }
    })
    // 计算状态：全选/半选
    statusMap[routeAuthItem.id] = {
      checkAll: checkedCount === routeAuthItem.auths.length, // 全选
      indeterminate: checkedCount > 0 && checkedCount < routeAuthItem.auths.length, // 半选
    }
  })
  return statusMap
})

/**
 * 处理全选/取消全选（原H）
 * @param {boolean} checked - 是否勾选全选
 * @param {number} routeId - 路由ID
 */
function handleCheckAll(checked: any, routeId: string | number) {
  if (checked) {
    // 全选：添加当前路由下所有权限
    routeAuthMap.value.forEach((item) => {
      if (item.id === routeId) {
        item.auths.forEach((auth: any) => {
          if (!form.value.auths.includes(auth.value)) {
            form.value.auths.push(auth.value)
          }
        })
      }
    })
  }
  else {
    // 取消全选：移除当前路由下所有权限
    routeAuthMap.value.forEach((item) => {
      if (item.id === routeId) {
        form.value.auths = form.value.auths.filter((val: any) => {
          return !item.auths.some((auth: any) => auth.value === val)
        })
      }
    })
  }
}

defineExpose({
  submit() {
    return new Promise<void>((resolve) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (form.value.id === '') {
            api.create(form.value).then(() => {
              toast.success('模拟新增成功')
              resolve()
            })
          }
          else {
            api.edit(form.value).then(() => {
              toast.success('模拟编辑成功')
              resolve()
            })
          }
        }
      })
    })
  },
})
</script>

<template>
  <div v-loading="loading">
    <ElForm ref="formRef" :model="form" :rules="formRules" label-width="120px" label-suffix="：">
      <ElFormItem label="名称" prop="name">
        <ElInput v-model="form.name" placeholder="请输入角色名称" />
      </ElFormItem>
      <ElFormItem label="备注" prop="mobile">
        <ElInput v-model="form.mobile" type="textarea" placeholder="请输入备注" />
      </ElFormItem>
      <ElFormItem label="权限" prop="sex">
        <ElSwitch v-model="dataSourceType" inactive-text="前端路由数据" inactive-value="frontend" active-text="后端路由数据" active-value="backend" />
        <ElTooltip content="为方便演示，提供了路由数据分别从前端获取和后端获取的切换" placement="top">
          <FaIcon name="i-ri:question-line" />
        </ElTooltip>
        <ElTable
          :data="filteredRouteList" row-key="id" stripe highlight-current-row default-expand-all border :style="{ lineHeight: 'normal' }"
        >
          <ElTableColumn label="模块">
            <template #default="{ row }">
              {{ generateI18nTitle(row.meta.title) }}
            </template>
          </ElTableColumn>
          <ElTableColumn label="权限">
            <template #default="{ row }">
              <!-- 全选复选框 -->
              <ElCheckbox
                v-if="row.meta.auths?.length"
                v-model="checkStatus[row.id].checkAll"
                :indeterminate="checkStatus[row.id].indeterminate"
                @change="handleCheckAll($event, row.id)"
              >
                全选
              </ElCheckbox>
              <!-- 权限多选组 -->
              <ElCheckboxGroup v-model="form.auths">
                <ElCheckbox
                  v-for="auth in row.meta.auths"
                  :key="auth.value"
                  :label="auth.value"
                >
                  {{ generateI18nTitle(auth.name) }}
                </ElCheckbox>
              </ElCheckboxGroup>
            </template>
          </ElTableColumn>
        </ElTable>
      </ElFormItem>
    </ElForm>
  </div>
</template>
