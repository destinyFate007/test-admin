<script setup lang="ts">
import { ElCard, ElCol, ElImage, ElRow, ElTag } from 'element-plus'

defineOptions({
  name: 'GoodsList',
})
const list = ref([
  {
    id: 1,
    title: 'Dell 显示器',
    subTitle: '高刷新率显示器',
    price: 879.00,
    originalPrice: 999.00,
    imageUrl: 'https://z3.ax1x.com/2021/02/01/yeIK58.jpg',
    tags: ['推荐'],
  },
  {
    id: 1,
    title: 'HHKB 静电容键盘',
    subTitle: '程序员最爱',
    price: 2499.00,
    originalPrice: 2699.00,
    imageUrl: 'https://z3.ax1x.com/2021/02/01/yeInVP.jpg',
    tags: ['缺货'],
  },
  {
    id: 1,
    title: '雷蛇鼠标',
    subTitle: '电竞游戏专用',
    price: 109.00,
    originalPrice: 129.00,
    imageUrl: 'https://z3.ax1x.com/2021/02/01/yeIebt.jpg',
    tags: [],
  },
  {
    id: 1,
    title: '苹果 iPhone 12',
    subTitle: '苹果最新款手机',
    price: 5999.00,
    originalPrice: 6299.00,
    imageUrl: 'https://z3.ax1x.com/2021/02/01/yeIuUf.png',
    tags: [],
  },
  {
    id: 1,
    title: '标题要长长长长长长长长长长长长',
    subTitle: '副标题也要长长长长长长长长长长',
    price: 9999.00,
    originalPrice: 10999.00,
    imageUrl: 'https://z3.ax1x.com/2021/02/01/yeIK58.jpg',
    tags: [],
  },
])
</script>

<template>
  <div>
    <FaPageHeader title="商品列表" description="以卡片的形式展现商品或图片信息。" />
    <ElRow :gutter="20" style="margin: 0 10px;">
      <ElCol v-for="(item, index) in list" :key="index" :lg="6" :md="8" :sm="12">
        <ElCard shadow="hover" class="goods-card">
          <ElImage class="image" :src="item.imageUrl" fit="cover" />
          <div class="title">
            {{ item.title }}
          </div>
          <div class="sub-title">
            {{ item.subTitle }}
          </div>
          <div class="price">
            <span class="sales">
              {{ item.price }}
            </span>
            <span class="original">
              {{ item.originalPrice }}
            </span>
          </div>
          <div class="tags">
            <ElTag
              v-for="(tag, index2) in item.tags" :key="index2"
              :type="tag ? (tag === '推荐' ? 'warning' : 'danger') : undefined" size="small" effect="dark"
            >
              {{ tag }}
            </ElTag>
          </div>
        </ElCard>
      </ElCol>
    </ElRow>
  </div>
</template>

<style scoped>
.goods-card {
  position: relative;
  margin-bottom: 20px;
  text-align: center;
  cursor: pointer;

  .image {
    width: 80%;
  }

  .title {
    margin: 8px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 700;
    white-space: nowrap;
  }

  .sub-title {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #808695;
    white-space: nowrap;
  }

  .price {
    margin-top: 8px;

    .sales,
    .original {
      margin: 0 5px;
      font-size: 14px;
      color: #ff6700;
    }

    .sales::before,
    .original::before {
      font-size: 14px;
      content: "￥";
    }

    .sales {
      font-size: 18px;
    }

    .original {
      color: #c5c8ce;
      text-decoration: line-through;
    }
  }

  .tags {
    position: absolute;
    top: 15px;
    right: 15px;
  }
}
</style>
