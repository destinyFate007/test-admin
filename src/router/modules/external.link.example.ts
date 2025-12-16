import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
  path: '/link',
  component: Layout,
  name: 'externalLinkExample',
  meta: {
    title: '外链',
    icon: 'i-ri:external-link-fill',
  },
  children: [
    {
      path: 'iframe',
      name: 'linkExampleIframe',
      meta: {
        title: '内嵌 Iframe',
      },
      children: [
        {
          path: 'iframeVueRouter',
          redirect: '',
          name: 'linkExampleIframeVueRouter',
          meta: {
            title: 'Vue-Router 官方文档',
            iframe: 'https://router.vuejs.org/zh/',
            cache: true,
            copyright: false,
          },
        },
        {
          path: 'iframeVuePinia',
          redirect: '',
          name: 'linkExampleIframeVuePinia',
          meta: {
            title: 'Pinia 官方文档',
            iframe: 'https://pinia.vuejs.org/zh/',
            cache: true,
            copyright: false,
          },
        },
        {
          path: 'iframeElement',
          redirect: '',
          name: 'linkExampleIframeElement',
          meta: {
            title: 'Element Plus 官方文档',
            iframe: 'https://element-plus.org/zh-CN/',
            cache: true,
            copyright: false,
          },
        },
        {
          path: 'dynamic',
          component: () => import('@/views/link_example/iframe.vue'),
          name: 'linkExampleIframeDynamic',
          meta: {
            title: '动态 Iframe 链接',
            cache: true,
          },
        },
        {
          path: 'dynamicTest',
          redirect: '',
          name: 'linkExampleIframeDynamicTest',
          meta: {
            title: '外部链接',
            menu: false,
            activeMenu: '/link/iframe/dynamic',
            iframe: true,
            cache: true,
          },
        },
      ],
    },
    {
      path: 'window',
      name: 'linkExampleWindow',
      meta: {
        title: '新窗口打开',
      },
      children: [
        {
          path: 'gitee',
          redirect: '',
          name: 'linkExampleWindowGitee',
          meta: {
            title: 'Gitee 仓库',
            link: 'https://gitee.com/fantastic-admin/basic',
          },
        },
        {
          path: 'github',
          redirect: '',
          name: 'linkExampleWindowGithub',
          meta: {
            title: 'Github 仓库',
            link: 'https://github.com/fantastic-admin/basic',
          },
        },
      ],
    },
  ],
}

export default routes
