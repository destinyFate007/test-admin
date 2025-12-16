<script setup lang="ts">
import { ElAvatar, ElButton, ElCard, ElCol, ElRow } from 'element-plus'

defineOptions({
  name: 'CardList',
})
</script>

<template>
  <div>
    <FaPageHeader title="卡片列表" description="卡片类型的列表，配合栅格实现响应式布局。" />
    <ElRow :gutter="20" style="margin: 0 10px;">
      <ElCol
        v-for="index in 12"
        :key="index"
        :lg="6"
        :md="8"
        :sm="12"
      >
        <ElCard shadow="hover" class="action-card">
          <div class="content">
            <div class="item">
              <ElAvatar
                size="default"
              >
                <FaIcon name="i-ep:user-filled" />
              </ElAvatar>
            </div>
            <div class="item">
              <div class="name">
                Hooray
              </div><div class="intro">
                前端开发工程师，5年+开发经验，可开发 Web / H5 / 小程序 等应用。前端开发工程师，5年+开发经验，可开发 Web / H5 / 小程序 等应用
              </div>
            </div>
          </div>
          <div class="action-bar">
            <ElButton text>
              操作一
            </ElButton>
            <ElButton text>
              操作二
            </ElButton>
          </div>
        </ElCard>
      </ElCol>
    </ElRow>
  </div>
</template>

<style scoped>
.action-card {
  margin-bottom: 20px;

  .content {
    display: flex;

    .item {
      margin-inline-end: 15px;

      .name {
        margin-bottom: 12px;
        font-size: 16px;
        line-height: 24px;
        color: var(--el-text-color-primary);
        transition: var(--el-transition-color);
      }

      .intro {
        display: -webkit-box;
        height: 66px;
        overflow: hidden;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        font-size: 14px;
        line-height: 22px;
        color: var(--el-text-color-secondary);
        transition: var(--el-transition-color);
        -webkit-box-orient: vertical;
      }
    }
  }

  .action-bar {
    display: flex;
    justify-content: space-around;
    margin: 20px -20px -20px;
    background-color: var(--el-fill-color-lighter);
    border-top: 1px solid var(--el-border-color-light);
    transition: background-color 0.3s, var(--el-transition-border);

    .el-button {
      position: relative;
      width: 100%;
      color: var(--el-text-color-placeholder);
      transition: var(--el-transition-color);

      &:hover {
        color: var(--el-color-primary);
      }

      + .el-button {
        margin-left: 0;

        &::before {
          position: absolute;
          top: 50%;
          left: 0;
          width: 1px;
          height: 14px;
          margin-top: -7px;
          content: "";
          background-color: var(--el-border-color-darker);
          transition: background-color 0.3s;
        }
      }
    }
  }
}
</style>
