import type { Route } from '#/global'
import type { RouteRecordRaw } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:meta-layouts'
import { $t } from '@/locales'
import pinia from '@/store'

import AlwaysOpenedExample from './modules/always.opened.example'
import BreadcrumbExample from './modules/breadcrumb.example'
import ComponentExample from './modules/component.example'
import EcologyExample from './modules/ecology.example'
import ExternalLinkExample from './modules/external.link.example'
import FeatureExample from './modules/feature.example'
import IconExample from './modules/icon.example'
import JsxExample from './modules/jsx.example'
import KeepAliveExample from './modules/keep.alive.example'
import LayoutContainerExample from './modules/layout.container.example'
import MenuBadgeExample from './modules/menu.badge.example'
import MenuIconExample from './modules/menu.icon.example'
import MenuQueryExample from './modules/menu.query.example'
import MockExample from './modules/mock.example'
import MultilevelMenuExample from './modules/multilevel.menu.example'
import PageExample from './modules/page.example'
import PermissionExample from './modules/permission.example'
import PluginExample from './modules/plugin.example'
import StandardModuleExample from './modules/standard.module.example'
import TabExample from './modules/tab.example'
// 固定路由（默认路由）
const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      whiteList: true,
      title: $t('app.route.login'),
    },
  },
  {
    path: '/:all(.*)*',
    name: 'notFound',
    component: () => import('@/views/[...all].vue'),
    meta: {
      title: '找不到页面',
    },
  },
]

// 系统路由
const systemRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/index.vue'),
    meta: {
      breadcrumb: false,
    },
    children: [
      {
        path: '',
        component: () => import('@/views/index.vue'),
        meta: {
          title: $t(useSettingsStore(pinia).settings.home.title),
          icon: 'i-ant-design:home-twotone',
          breadcrumb: false,
        },
      },
      {
        path: 'reload',
        name: 'reload',
        component: () => import('@/views/reload.vue'),
        meta: {
          title: $t('app.route.reload'),
          breadcrumb: false,
        },
      },
    ],
  },
]

// 动态路由（异步路由、导航栏路由）
const asyncRoutes: Route.recordMainRaw[] = [
  {
    meta: {
      title: 'route.demo',
      icon: 'i-uim:box',
    },
    children: [
      MultilevelMenuExample,
      BreadcrumbExample,
      KeepAliveExample,
      AlwaysOpenedExample,
      MenuBadgeExample,
      MenuIconExample,
      MenuQueryExample,
      TabExample,
      ComponentExample,
      IconExample,
      LayoutContainerExample,
      FeatureExample,
      PluginExample,
      PermissionExample,
      MockExample,
      JsxExample,
      ExternalLinkExample,
      StandardModuleExample,
    ],
  },
  {
    meta: {
      title: 'route.page',
      icon: 'i-ri:pages-line',
    },
    children: [...PageExample],
  },
  {
    meta: {
      title: 'route.ecology',
      icon: 'i-icon-park-outline:circular-connection',
      badge: true,
    },
    children: [...EcologyExample],
  },
]

const constantRoutesByFilesystem = generatedRoutes.filter((item) => {
  return item.meta?.enabled !== false && item.meta?.constant === true
})

const asyncRoutesByFilesystem = [...setupLayouts(generatedRoutes.filter((item) => {
  return item.meta?.enabled !== false && item.meta?.constant !== true && item.meta?.layout !== false
}))]

export {
  asyncRoutes,
  asyncRoutesByFilesystem,
  constantRoutes,
  constantRoutesByFilesystem,
  systemRoutes,
}
