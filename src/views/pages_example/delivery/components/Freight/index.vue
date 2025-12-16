<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { ElButton, ElCheckbox, ElCheckboxGroup, ElCol, ElDialog, ElInput, ElMessage, ElRow, ElTable, ElTableColumn, ElTag } from 'element-plus'
import pcasCode from '@/components/PcasCascader/pcas-code.json'

const props = withDefaults(defineProps<{
  /** 货运区域 */
  type?: number
  readonly?: boolean
  modelValue?: Record<string, any>[]
  modelModifiers?: Record<string, any>
}>(), {
  type: 1,
  readonly: false,
  modelValue: () => ([]),
})
const modelValue = useVModel(props, 'modelValue')
const data = ref<any>({
  index: '',
  visible: false,
  checkList: [],
  disableList: [],
})
function onAdd() {
  data.value.index = ''
  data.value.checkList = []
  data.value.disableList = getCode()
  data.value.visible = true
}
function onSubmit() {
  if (data.value.checkList.length === 0) {
    ElMessage({
      message: '请勾选区域',
      type: 'warning',
    })
  }
  else {
    if (data.value.index !== '') {
      modelValue.value[data.value.index].list = data.value.checkList
    }
    else {
      modelValue.value.push({
        list: data.value.checkList,
        first_step: '',
        first_price: '',
        continued_step: '',
        continued_price: '',
      })
    }

    data.value.visible = false
  }
}
function onEdit(index: number) {
  data.value.index = index
  data.value.checkList = modelValue.value[index].list
  data.value.disableList = getCode(index)
  data.value.visible = true
}
function onDel(index: number) {
  modelValue.value.splice(index, 1)
}
function onClose(index: number, tag: string) {
  modelValue.value[index].list.splice(modelValue.value[index].list.indexOf(tag), 1)
  modelValue.value[index].list.length === 0 && modelValue.value.splice(index, 1)
}

function formatCode(code: string) {
  let a = ''
  for (const r in pcasCode) {
    if (pcasCode[r].code === code) {
      a = pcasCode[r].name
    }
  }
  return a
}
function getCode(index?: number) {
  const list = []
  for (let r = 0; r < modelValue.value.length; r++) {
    if (index !== r) {
      list.push(...modelValue.value[r].list)
    }
  }
  return list
}
</script>

<template>
  <div>
    <template v-if="!(readonly && modelValue.length === 0)">
      <ElTable
        v-show="modelValue.length !== 0"
        :data="modelValue"
        border
        class="freight"
      >
        <template #empty>
          <span />
        </template>
        <template #append>
          <div style="padding: 10px;">
            <ElButton
              type="primary"
              size="small"
              plain
              style="width: 100%;"
              @click="onAdd"
            >
              新增一条运费模版
            </ElButton>
          </div>
        </template>
        <ElTableColumn label="运送到">
          <template #default="scope">
            <template v-if="readonly">
              <div>
                <ElTag
                  v-for="(item, index) in scope.row.list"
                  :key="index"
                  size="small"
                  type="info"
                >
                  {{ formatCode(item) }}
                </ElTag>
              </div>
            </template>

            <ElRow
              v-else type="flex"
              align="middle"
              justify="space-between"
            >
              <ElCol>
                <ElTag
                  v-for="(item, index) in scope.row.list"
                  :key="index"
                  size="small"
                  type="info"
                  :disable-transitions="true"
                  @close="onClose(scope.$index, item)"
                >
                  {{ formatCode(item) }}
                </ElTag>
              </ElCol>
              <ElCol style="width: 100px; text-align: right;">
                <ElButton
                  v-if="!props.readonly"
                  type="text"
                  size="small"
                  @click="onEdit(scope.$index)"
                >
                  编 辑
                </ElButton>
              </ElCol>
            </ElRow>
          </template>
        </ElTableColumn>
        <ElTableColumn :label="type === 1 ? '首件数（件）' : '首重量（kg）'" width="150" align="center">
          <template #default="scope">
            <template v-if="readonly">
              <span>{{ scope.row.first_step }}</span>
            </template>
            <template v-else>
              <ElInput
                v-model="scope.row.first_step"
                size="small"
                placeholder="请输入"
              />
            </template>
          </template>
        </ElTableColumn>
        <ElTableColumn label="首费（元）" width="150" align="center">
          <template #default="scope">
            <template v-if="readonly">
              <span>{{ scope.row.first_price }}</span>
            </template>
            <template v-else>
              <ElInput
                v-model="scope.row.first_price"
                size="small"
                placeholder="请输入"
              />
            </template>
          </template>
        </ElTableColumn>
        <ElTableColumn :label="type === 1 ? '续件数（件）' : '续重量（kg）'" width="150" align="center">
          <template #default="scope">
            <template v-if="readonly">
              <span>{{ scope.row.continued_step }}</span>
            </template>
            <template v-else>
              <ElInput
                v-model="scope.row.continued_step"
                size="small"
                placeholder="请输入"
              />
            </template>
          </template>
        </ElTableColumn>
        <ElTableColumn label="续费（元）" width="150" align="center">
          <template #default="scope">
            <template v-if="readonly">
              <span>{{ scope.row.continued_price }}</span>
            </template>
            <template v-else>
              <ElInput
                v-model="scope.row.continued_price"
                size="small"
                placeholder="请输入"
              />
            </template>
          </template>
        </ElTableColumn>
        <ElTableColumn label="操作" width="100" align="center">
          <template #default="scope">
            <ElButton
              type="danger"
              size="small"
              plain
              @click="onDel(scope.$index)"
            >
              删 除
            </ElButton>
          </template>
        </ElTableColumn>
      </ElTable>
    </template>
    <template v-if="!readonly">
      <ElButton
        v-show="modelValue.length === 0"
        type="primary"
        size="default"
        plain
        @click="onAdd"
      >
        <!--  -->
        为指定地区设置运费模版
      </ElButton>
      <ElDialog
        v-model="data.visible"

        title="选择地区"
        width="800px"
        append-to-body
      >
        <!--  -->
        <template #footer>
          <ElButton
            type="primary"
            @click="onSubmit"
          >
            确定
          </ElButton>
        </template>
        <ElCheckboxGroup v-model="data.checkList" style="margin-inline-start: 50px;">
          <!--  -->
          <ElRow>
            <ElCol
              v-for="(item, index) in pcasCode"
              :key="index"
              :span="6"
            >
              <ElCheckbox
                :value="item.code"
                :disabled="data.disableList.includes(item.code)"
              >
                {{ item.name }}
              </ElCheckbox>
            </ElCol>
          </ElRow>
        </ElCheckboxGroup>
      </ElDialog>
    </template>
  </div>
</template>

<style scoped>
.freight {
  :deep(.el-tag) {
    margin: 2px;
  }

  :deep(.el-input__inner) {
    text-align: center;
  }

  :deep(.el-table__empty-block) {
    min-height: inherit;
  }
}
</style>
