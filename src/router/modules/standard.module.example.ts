import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}
const routes: RouteRecordRaw = {
  path: '/standard_module_example',
  component: Layout,
  name: 'standardModuleExample',
  meta: {
    title: 'route.standardModule.root',
    icon: 'i-ic:round-view-module',
    badge: 'PRO',
  },
  children: [
    {
      path: '',
      name: 'standardModuleExampleList',
      component: () => import('@/views/standard_module_example/list.vue'),
      meta: {
        title: 'route.standardModule.list',
        menu: false,
        breadcrumb: false,
        cache: 'standardModuleExampleDetail',
      },
    },
    {
      path: 'detail/:id?',
      name: 'standardModuleExampleDetail',
      component: () => import('@/views/standard_module_example/detail.vue'),
      meta: {
        title: '...',
        menu: false,
        activeMenu: '/standard_module_example',
        cache: true,
        noCache: 'standardModuleExampleList',
      },
    },
  ],
}
export default routes
