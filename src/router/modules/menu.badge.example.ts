import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
  path: '/menu_badge_example',
  component: Layout,
  name: 'menuBadgeExample',
  meta: {
    title: 'route.menuBadge.root',
    icon: 'i-ri:notification-badge-line',
    badge: 'PRO',
  },
  children: [
    {
      path: 'dot',
      name: 'menuBadgeExampleDot',
      component: () => import('@/views/menu_badge_example/dot.vue'),
      meta: {
        title: 'route.menuBadge.dot',
        badge: () => useMenuBadgeStore().dot,
      },
    },
    {
      path: 'number',
      name: 'menuBadgeExampleNumber',
      component: () => import('@/views/menu_badge_example/number.vue'),
      meta: {
        title: 'route.menuBadge.number',
        badge: () => useMenuBadgeStore().number,
      },
    },
    {
      path: 'text',
      name: 'menuBadgeExampleText',
      component: () => import('@/views/menu_badge_example/text.vue'),
      meta: {
        title: 'route.menuBadge.text',
        badge: () => useMenuBadgeStore().text,
      },
    },
    {
      path: 'variant',
      name: 'menuBadgeExampleVariant',
      component: () => import('@/views/menu_badge_example/variant.vue'),
      meta: {
        title: 'route.menuBadge.variant',
        badge: '看我',
        badgeVariant: () => useMenuBadgeStore().variant,
      },
    },
  ],
}
export default routes
