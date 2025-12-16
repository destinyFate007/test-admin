import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/mock_example',
  component: () => import('@/views/mock_example/index.vue'),
  name: 'mockExample',
  meta: {
    title: 'Mock',
    icon: 'i-ri:database-2-line',
    singleMenu: true,
  },
}

export default routes
