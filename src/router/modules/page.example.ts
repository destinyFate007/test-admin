import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw[] = [
  {
    path: '/pages_example/general',
    component: Layout,
    name: 'pagesExampleGeneral',
    meta: {
      title: 'route.general.root',
      icon: 'i-ri:function-line',
      auth: 'pages.general:browse',
      auths: [
        {
          name: '浏览',
          value: 'pages.general:browse',
        },
        {
          name: '新增',
          value: 'pages.general:create',
        },
        {
          name: '编辑',
          value: 'pages.general:edit',
        },
        {
          name: '删除',
          value: 'pages.general:delete',
        },
        {
          name: '导出',
          value: 'pages.general:export',
        },
        {
          name: '导入',
          value: 'pages.general:import',
        },
      ],
    },
    children: [
      {
        path: 'menu',
        name: 'pagesExampleGeneralMenu',
        meta: {
          title: 'route.general.menu.root',
          badge: '风格1',
        },
        children: [
          {
            path: '',
            name: 'pagesExampleGeneralMenuList',
            component: () => import('@/views/pages_example/menu/list.vue'),
            meta: {
              title: 'route.general.menu.list',
              menu: false,
              cache: [
                'pagesExampleGeneralMenuCreate',
                'pagesExampleGeneralMenuEdit',
              ],
            },
          },
          {
            path: 'detail',
            name: 'pagesExampleGeneralMenuCreate',
            component: () => import('@/views/pages_example/menu/detail.vue'),
            meta: {
              title: 'route.general.menu.create',
              menu: false,
              activeMenu: '/pages_example/general/menu',
              cache: true,
              noCache: 'pagesExampleGeneralMenuList',
              copyright: false,
            },
          },
          {
            path: 'detail/:id',
            name: 'pagesExampleGeneralMenuEdit',
            component: () => import('@/views/pages_example/menu/detail.vue'),
            meta: {
              title: 'route.general.menu.edit',
              menu: false,
              activeMenu: '/pages_example/general/menu',
              cache: true,
              noCache: 'pagesExampleGeneralMenuList',
              copyright: false,
            },
          },
        ],
      },
      {
        path: 'menu2',
        name: 'pagesExampleGeneralMenu2',
        component: () => import('@/views/pages_example/menu2/index.vue'),
        meta: {
          title: 'route.general.menu.root',
          badge: '风格2',
        },
      },
      {
        path: 'manager',
        name: 'pagesExampleGeneralManager',
        meta: {
          title: 'route.general.manager.root',
        },
        children: [
          {
            path: '',
            name: 'pagesExampleGeneralManagerList',
            component: () => import('@/views/pages_example/manager/list.vue'),
            meta: {
              title: 'route.general.manager.list',
              menu: false,
              breadcrumb: false,
              cache: [
                'pagesExampleGeneralManagerCreate',
                'pagesExampleGeneralManagerEdit',
              ],
            },
          },
          {
            path: 'detail',
            name: 'pagesExampleGeneralManagerCreate',
            component: () => import('@/views/pages_example/manager/detail.vue'),
            meta: {
              title: 'route.general.manager.create',
              menu: false,
              activeMenu: '/pages_example/general/manager',
              cache: true,
              noCache: 'pagesExampleGeneralManagerList',
            },
          },
          {
            path: 'detail/:id',
            name: 'pagesExampleGeneralManagerEdit',
            component: () => import('@/views/pages_example/manager/detail.vue'),
            meta: {
              title: 'route.general.manager.edit',
              menu: false,
              activeMenu: '/pages_example/general/manager',
              cache: true,
              noCache: 'pagesExampleGeneralManagerList',
            },
          },
        ],
      },
      {
        path: 'department',
        name: 'pagesExampleGeneralDepartment',
        meta: {
          title: 'route.general.department.root',
        },
        children: [
          {
            path: '',
            name: 'pagesExampleGeneralDepartmentList',
            component: () => import('@/views/pages_example/department/list.vue'),
            meta: {
              title: 'route.general.department.list',
              menu: false,
              breadcrumb: false,
              cache: [
                'pagesExampleGeneralDepartmentCreate',
                'pagesExampleGeneralDepartmentEdit',
              ],
            },
          },
          {
            path: 'detail',
            name: 'pagesExampleGeneralDepartmentCreate',
            component: () => import('@/views/pages_example/department/detail.vue'),
            meta: {
              title: 'route.general.department.create',
              menu: false,
              activeMenu: '/pages_example/general/department',
            },
          },
          {
            path: 'detail/:id',
            name: 'pagesExampleGeneralDepartmentEdit',
            component: () => import('@/views/pages_example/department/detail.vue'),
            meta: {
              title: 'route.general.department.edit',
              menu: false,
              activeMenu: '/pages_example/general/department',
            },
          },
          {
            path: ':department_id/job',
            name: 'pagesExampleGeneralJob',
            meta: {
              title: 'route.general.department.job.root',
              menu: false,
            },
            children: [
              {
                path: '',
                name: 'pagesExampleGeneralJobList',
                component: () => import('@/views/pages_example/department/job/list.vue'),
                meta: {
                  title: 'route.general.department.job.list',
                  menu: false,
                  breadcrumb: false,
                  activeMenu: '/pages_example/general/department',
                  cache: [
                    'pagesExampleGeneralJobCreate',
                    'pagesExampleGeneralJobEdit',
                  ],
                },
              },
              {
                path: 'detail',
                name: 'pagesExampleGeneralJobCreate',
                component: () => import('@/views/pages_example/department/job/detail.vue'),
                meta: {
                  title: 'route.general.department.job.create',
                  menu: false,
                  activeMenu: '/pages_example/general/department',
                },
              },
              {
                path: 'detail/:id',
                name: 'pagesExampleGeneralJobEdit',
                component: () => import('@/views/pages_example/department/job/detail.vue'),
                meta: {
                  title: 'route.general.department.job.edit',
                  menu: false,
                  activeMenu: '/pages_example/general/department',
                },
              },
            ],
          },
        ],
      },
      {
        path: 'role',
        name: 'pagesExampleGeneralRole',
        meta: {
          title: 'route.general.role.root',
        },
        children: [
          {
            path: '',
            name: 'pagesExampleGeneralRoleList',
            component: () => import('@/views/pages_example/role/list.vue'),
            meta: {
              title: 'route.general.role.list',
              menu: false,
              breadcrumb: false,
              cache: [
                'pagesExampleGeneralRoleCreate',
                'pagesExampleGeneralRoleEdit',
              ],
            },
          },
          {
            path: 'detail',
            name: 'pagesExampleGeneralRoleCreate',
            component: () => import('@/views/pages_example/role/detail.vue'),
            meta: {
              title: 'route.general.role.create',
              menu: false,
              activeMenu: '/pages_example/general/role',
              cache: true,
              noCache: 'pagesExampleGeneralRoleList',
            },
          },
          {
            path: 'detail/:id',
            name: 'pagesExampleGeneralRoleEdit',
            component: () => import('@/views/pages_example/role/detail.vue'),
            meta: {
              title: 'route.general.role.edit',
              menu: false,
              activeMenu: '/pages_example/general/role',
              cache: true,
              noCache: 'pagesExampleGeneralRoleList',
            },
          },
        ],
      },
      {
        path: 'dictionary',
        name: 'pagesExampleGeneralDictionary',
        component: () => import('@/views/pages_example/dictionary/index.vue'),
        meta: {
          title: 'route.general.dictionary',
        },
      },
      {
        path: 'table',
        name: 'pagesExampleGeneralTable',
        component: () => import('@/views/pages_example/table/index.vue'),
        meta: {
          title: 'route.general.table',
        },
      },
    ],
  },
  {
    path: '/pages_example/form',
    component: Layout,
    name: 'pagesExampleForm',
    meta: {
      title: 'route.form.root',
      icon: 'i-ri:file-list-2-line',
      auth: 'pages.form:browse',
      auths: [
        {
          name: '浏览',
          value: 'pages.form:browse',
        },
        {
          name: '新增',
          value: 'pages.form:create',
        },
        {
          name: '编辑',
          value: 'pages.form:edit',
        },
        {
          name: '删除',
          value: 'pages.form:delete',
        },
        {
          name: '导出',
          value: 'pages.form:export',
        },
        {
          name: '导入',
          value: 'pages.form:import',
        },
      ],
    },
    children: [
      {
        path: 'basic',
        name: 'pagesExampleFormBasic',
        component: () => import('@/views/pages_example/form/basic.vue'),
        meta: {
          title: 'route.form.basic',
        },
      },
      {
        path: 'advanced',
        name: 'pagesExampleFormAdvanced',
        component: () => import('@/views/pages_example/form/advanced.vue'),
        meta: {
          title: 'route.form.advanced',
        },
      },
      {
        path: 'step',
        name: 'pagesExampleFormStep',
        component: () => import('@/views/pages_example/form/step.vue'),
        meta: {
          title: 'route.form.step',
        },
      },
    ],
  },
  {
    path: '/pages_example/list',
    component: Layout,
    name: 'pagesExampleList',
    meta: {
      title: 'route.list.root',
      icon: 'i-ri:grid-line',
      auth: 'pages.list:browse',
      auths: [
        {
          name: '浏览',
          value: 'pages.list:browse',
        },
        {
          name: '新增',
          value: 'pages.list:create',
        },
        {
          name: '编辑',
          value: 'pages.list:edit',
        },
        {
          name: '删除',
          value: 'pages.list:delete',
        },
        {
          name: '导出',
          value: 'pages.list:export',
        },
        {
          name: '导入',
          value: 'pages.list:import',
        },
      ],
    },
    children: [
      {
        path: 'basic',
        name: 'pagesExampleListBasic',
        component: () => import('@/views/pages_example/list/basic.vue'),
        meta: {
          title: 'route.list.basic',
        },
      },
      {
        path: 'card',
        name: 'pagesExampleListCard',
        component: () => import('@/views/pages_example/list/card.vue'),
        meta: {
          title: 'route.list.card',
        },
      },
      {
        path: 'goods',
        name: 'pagesExampleListGoods',
        component: () => import('@/views/pages_example/list/goods.vue'),
        meta: {
          title: 'route.list.goods',
        },
      },
      {
        path: 'sidelayout',
        name: 'pagesExampleSidelayout',
        component: () => import('@/views/pages_example/list/side.layout.vue'),
        meta: {
          title: 'route.list.sidelayout',
        },
      },
    ],
  },
  {
    path: '/pages_example/shop',
    component: Layout,
    name: 'pagesExampleShop',
    meta: {
      title: 'route.shop.root',
      icon: 'i-ri:shopping-cart-2-line',
      auth: 'pages.shop:browse',
      auths: [
        {
          name: '浏览',
          value: 'pages.shop:browse',
        },
        {
          name: '新增',
          value: 'pages.shop:create',
        },
        {
          name: '编辑',
          value: 'pages.shop:edit',
        },
        {
          name: '删除',
          value: 'pages.shop:delete',
        },
        {
          name: '导出',
          value: 'pages.shop:export',
        },
        {
          name: '导入',
          value: 'pages.shop:import',
        },
      ],
    },
    children: [
      {
        path: 'delivery',
        name: 'pagesExampleShopDelivery',
        meta: {
          title: 'route.shop.delivery.root',
        },
        children: [
          {
            path: '',
            name: 'pagesExampleShopDeliveryList',
            component: () => import('@/views/pages_example/delivery/list.vue'),
            meta: {
              title: 'route.shop.delivery.list',
              menu: false,
              breadcrumb: false,
            },
          },
          {
            path: 'detail',
            name: 'pagesExampleShopDeliveryCreate',
            component: () => import('@/views/pages_example/delivery/detail.vue'),
            meta: {
              title: 'route.shop.delivery.create',
              menu: false,
              activeMenu: '/pages_example/shop/delivery',
            },
          },
          {
            path: 'detail/:id',
            name: 'pagesExampleShopDeliveryEdit',
            component: () => import('@/views/pages_example/delivery/detail.vue'),
            meta: {
              title: 'route.shop.delivery.edit',
              menu: false,
              activeMenu: '/pages_example/shop/delivery',
            },
          },
        ],
      },
    ],
  },
]
export default routes
