<script setup lang="ts">
const router = useRouter()

const vertical = ref(false)
const hideLeftSide = ref(false)
const hideRightSide = ref(false)
const hideBottomSide = ref(false)
const hideTopSide = ref(false)

const leftSideWidth = ref([300])
const rightSidewidth = ref([300])
const topSideHeight = ref([200])
const bottomSideHeight = ref([200])
</script>

<template>
  <div class="absolute size-full flex flex-col">
    <FaPageHeader title="布局容器" class="mb-0" />
    <div class="relative flex-1">
      <FaLayoutContainer
        :hide-left-side="hideLeftSide"
        :hide-right-side="hideRightSide"
        :hide-bottom-side="hideBottomSide"
        :hide-top-side="hideTopSide"
        :left-side-width="leftSideWidth[0]"
        :right-side-width="rightSidewidth[0]"
        :top-side-height="topSideHeight[0]"
        :bottom-side-height="bottomSideHeight[0]"
        :vertical
      >
        <template #leftSide>
          <div class="space-y-2">
            <h2>左侧栏</h2>
            <hr>
            <p>调整高度</p>

            <FaSlider
              v-model="leftSideWidth"
              :step="10"
              :min="250"
              :max="350"
            />
          </div>
        </template>
        <template #rightSide>
          <div class="space-y-2">
            <h2>右侧栏</h2>
            <hr>
            <p>调整宽度</p>
            <FaSlider
              v-model="rightSidewidth"
              :step="10"
              :min="250"
              :max="350"
            />
          </div>
        </template>
        <template #default>
          <div class="space-y-4">
            <FaPageMain title="布局方向" class="m-0" main-class="flex-center-start gap-2">
              <span class="text-sm">水平</span>
              <FaSwitch v-model="vertical" />
              <span class="text-sm">垂直</span>
            </FaPageMain>
            <div class="grid grid-cols-4 gap-4">
              <FaPageMain title="隐藏左侧栏" class="m-0" main-class="flex-center-start gap-2">
                <FaSwitch v-model="hideLeftSide" />
              </FaPageMain>
              <FaPageMain title="隐藏右侧栏" class="m-0" main-class="flex-center-start gap-2">
                <FaSwitch v-model="hideRightSide" />
              </FaPageMain>
              <FaPageMain title="隐藏顶侧栏" class="m-0" main-class="flex-center-start gap-2">
                <FaSwitch v-model="hideTopSide" />
              </FaPageMain>
              <FaPageMain title="隐藏底侧栏" class="m-0" main-class="flex-center-start gap-2">
                <FaSwitch v-model="hideBottomSide" />
              </FaPageMain>
            </div>
            <FaButton @click="() => router.push({ name: 'pagesExampleSidelayout' })">
              查看示例页面
            </FaButton>
          </div>
        </template>

        <template #topSide>
          <div class="space-y-2">
            <h2>顶部栏</h2>
            <hr>
            <p>调整宽度</p>
            <FaSlider
              v-model="topSideHeight"
              :step="10"
              :min="150"
              :max="250"
            />
          </div>
        </template>
        <template #bottomSide>
          <div class="space-y-2">
            <h2>底部栏</h2>
            <hr>
            <p>调整宽度</p>
            <FaSlider
              v-model="bottomSideHeight"
              :step="10"
              :min="150"
              :max="250"
            />
          </div>
        </template>
      </FaLayoutContainer>
    </div>
  </div>
</template>
