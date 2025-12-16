import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
  path: '/component_example',
  component: Layout,
  name: 'componentExample',
  meta: {
    title: 'route.component.root',
    icon: 'i-bx:bxs-component',
    badge: true,
  },
  children: [
    {
      path: 'basic',
      name: 'componentExampleBasic',
      component: () => import('@/views/component_basic_example/index.vue'),
      meta: {
        title: 'route.component.basic',
        icon: 'i-ep:element-plus',
      },
    },
    {
      path: 'builtIn',
      name: 'componentExampleBuiltIn',
      meta: {
        title: 'route.component.builtIn.root',
        badge: true,
      },
      children: [
        {
          path: 'animated_beam',
          name: 'componentExampleBuiltInAnimatedBeam',
          component: () => import('@/views/component_built_in_example/animated_beam/index.vue'),
          meta: {
            title: 'route.component.builtIn.animatedbeam',
            badge: 'PRO',
          },
        },
        {
          path: 'animated_count_to',
          name: 'componentExampleBuiltInAnimatedCountTo',
          component: () => import('@/views/component_built_in_example/animated_count_to/index.vue'),
          meta: {
            title: 'route.component.builtIn.animatedcountto',
            badge: 'PRO',
          },
        },
        {
          path: 'avatar',
          name: 'componentExampleBuiltInAvatar',
          component: () => import('@/views/component_built_in_example/avatar/index.vue'),
          meta: {
            title: 'route.component.builtIn.avatar',
          },
        },
        {
          path: 'badge',
          name: 'componentExampleBuiltInBadge',
          component: () => import('@/views/component_built_in_example/badge/index.vue'),
          meta: {
            title: 'route.component.builtIn.badge',
            badge: 'PRO',
          },
        },
        {
          path: 'blur_reveal',
          name: 'componentExampleBuiltInBlurReveal',
          component: () => import('@/views/component_built_in_example/blur_reveal/index.vue'),
          meta: {
            title: 'route.component.builtIn.blurreveal',
            badge: 'PRO',
          },
        },
        {
          path: 'border_beam',
          name: 'componentExampleBuiltInBorderBeam',
          component: () => import('@/views/component_built_in_example/border_beam/index.vue'),
          meta: {
            title: 'route.component.builtIn.borderbeam',
            badge: 'PRO',
          },
        },
        {
          path: 'button',
          name: 'componentExampleBuiltInButton',
          component: () => import('@/views/component_built_in_example/button/index.vue'),
          meta: {
            title: 'route.component.builtIn.button',
          },
        },
        {
          path: 'card',
          name: 'componentExampleBuiltInCard',
          component: () => import('@/views/component_built_in_example/card/index.vue'),
          meta: {
            title: 'route.component.builtIn.card',
          },
        },
        {
          path: 'carousel',
          name: 'componentExampleBuiltInCarousel',
          component: () => import('@/views/component_built_in_example/carousel/index.vue'),
          meta: {
            title: 'route.component.builtIn.carousel',
            badge: 'PRO',
          },
        },
        {
          path: 'checkbox',
          name: 'componentExampleBuiltInCheckbox',
          component: () => import('@/views/component_built_in_example/checkbox/index.vue'),
          meta: {
            title: 'route.component.builtIn.checkbox',
          },
        },
        {
          path: 'code',
          name: 'componentExampleBuiltInCode',
          component: () => import('@/views/component_built_in_example/code/index.vue'),
          meta: {
            title: 'route.component.builtIn.code',
            badge: 'PRO',
          },
        },
        {
          path: 'collapsible',
          name: 'componentExampleBuiltInCollapsible',
          component: () => import('@/views/component_built_in_example/collapsible/index.vue'),
          meta: {
            title: 'route.component.builtIn.collapsible',
          },
        },
        {
          path: 'context_menu',
          name: 'componentExampleBuiltInContextMenu',
          component: () => import('@/views/component_built_in_example/context_menu/index.vue'),
          meta: {
            title: 'route.component.builtIn.contextmenu',
          },
        },
        {
          path: 'count_to',
          name: 'componentExampleBuiltInCountTo',
          component: () => import('@/views/component_built_in_example/count_to/index.vue'),
          meta: {
            title: 'route.component.builtIn.countto',
            badge: 'PRO',
          },
        },
        {
          path: 'digital_card',
          name: 'componentExampleBuiltInDigitalCard',
          component: () => import('@/views/component_built_in_example/digital_card/index.vue'),
          meta: {
            title: 'route.component.builtIn.digitalcard',
            badge: 'PRO',
          },
        },
        {
          path: 'divider',
          name: 'componentExampleBuiltInDivider',
          component: () => import('@/views/component_built_in_example/divider/index.vue'),
          meta: {
            title: 'route.component.builtIn.divider',
          },
        },
        {
          path: 'drawer',
          name: 'componentExampleBuiltInDrawer',
          component: () => import('@/views/component_built_in_example/drawer/index.vue'),
          meta: {
            title: 'route.component.builtIn.drawer',
          },
        },
        {
          path: 'dropdown',
          name: 'componentExampleBuiltInDropdown',
          component: () => import('@/views/component_built_in_example/dropdown/index.vue'),
          meta: {
            title: 'route.component.builtIn.dropdown',
          },
        },
        {
          path: 'file_upload',
          name: 'componentExampleBuiltInFileUpload',
          component: () => import('@/views/component_built_in_example/file_upload/index.vue'),
          meta: {
            title: 'route.component.builtIn.fileupload',
          },
        },
        {
          path: 'fixed_action_bar',
          name: 'componentExampleBuiltInFixedactionbar',
          component: () => import('@/views/component_built_in_example/fixed_action_bar/index.vue'),
          meta: {
            title: 'route.component.builtIn.fixedactionbar',
            copyright: false,
          },
        },
        {
          path: 'flip_card',
          name: 'componentExampleBuiltInFlipCard',
          component: () => import('@/views/component_built_in_example/flip_card/index.vue'),
          meta: {
            title: 'route.component.builtIn.flipcard',
            badge: 'PRO',
          },
        },
        {
          path: 'flip_words',
          name: 'componentExampleBuiltInFlipWords',
          component: () => import('@/views/component_built_in_example/flip_words/index.vue'),
          meta: {
            title: 'route.component.builtIn.flipwords',
            badge: 'PRO',
          },
        },
        {
          path: 'glowy_card',
          name: 'componentExampleBuiltInGlowyCard',
          component: () => import('@/views/component_built_in_example/glowy_card/index.vue'),
          meta: {
            title: 'route.component.builtIn.glowycard',
            badge: 'PRO',
          },
        },
        {
          path: 'gradient_button',
          name: 'componentExampleBuiltInGradientButton',
          component: () => import('@/views/component_built_in_example/gradient_button/index.vue'),
          meta: {
            title: 'route.component.builtIn.gradientbutton',
            badge: 'PRO',
          },
        },
        {
          path: 'hover_card',
          name: 'componentExampleBuiltInHoverCard',
          component: () => import('@/views/component_built_in_example/hover_card/index.vue'),
          meta: {
            title: 'route.component.builtIn.hovercard',
          },
        },
        {
          path: 'icon_picker',
          name: 'componentExampleBuiltInIconPicker',
          component: () => import('@/views/component_built_in_example/icon_picker/index.vue'),
          meta: {
            title: 'route.component.builtIn.iconpicker',
            badge: 'PRO',
          },
        },
        {
          path: 'image_preview',
          name: 'componentExampleBuiltInImagePreview',
          component: () => import('@/views/component_built_in_example/image_preview/index.vue'),
          meta: {
            title: 'route.component.builtIn.imagepreview',
          },
        },
        {
          path: 'image_upload',
          name: 'componentExampleBuiltInImageUpload',
          component: () => import('@/views/component_built_in_example/image_upload/index.vue'),
          meta: {
            title: 'route.component.builtIn.imageupload',
          },
        },
        {
          path: 'input',
          name: 'componentExampleBuiltInInput',
          component: () => import('@/views/component_built_in_example/input/index.vue'),
          meta: {
            title: 'route.component.builtIn.input',
          },
        },
        {
          path: 'interactive_button',
          name: 'componentExampleBuiltInInteractiveButton',
          component: () => import('@/views/component_built_in_example/interactive_button/index.vue'),
          meta: {
            title: 'route.component.builtIn.interactivebutton',
            badge: 'PRO',
          },
        },
        {
          path: 'kbd',
          name: 'componentExampleBuiltInKbd',
          component: () => import('@/views/component_built_in_example/kbd/index.vue'),
          meta: {
            title: 'route.component.builtIn.kbd',
          },
        },
        {
          path: 'link_preview',
          name: 'componentExampleBuiltInLinkPreview',
          component: () => import('@/views/component_built_in_example/link_preview/index.vue'),
          meta: {
            title: 'route.component.builtIn.linkpreview',
            badge: 'PRO',
          },
        },
        {
          path: 'loading',
          name: 'componentExampleBuiltInLoading',
          component: () => import('@/views/component_built_in_example/loading/index.vue'),
          meta: {
            title: 'route.component.builtIn.loading',
            badge: 'PRO',
          },
        },
        {
          path: 'marquee',
          name: 'componentExampleBuiltInMarquee',
          component: () => import('@/views/component_built_in_example/marquee/index.vue'),
          meta: {
            title: 'route.component.builtIn.marquee',
            badge: 'PRO',
          },
        },
        {
          path: 'modal',
          name: 'componentExampleBuiltInModal',
          component: () => import('@/views/component_built_in_example/modal/index.vue'),
          meta: {
            title: 'route.component.builtIn.modal',
          },
        },
        {
          path: 'multi_step_loader',
          name: 'componentExampleBuiltInMultiStepLoader',
          component: () => import('@/views/component_built_in_example/multi_step_loader/index.vue'),
          meta: {
            title: 'route.component.builtIn.multisteploader',
          },
        },
        {
          path: 'notification',
          name: 'componentExampleBuiltInNotification',
          component: () => import('@/views/component_built_in_example/notification/index.vue'),
          meta: {
            title: 'route.component.builtIn.notification',
          },
        },
        {
          path: 'page_header',
          name: 'componentExampleBuiltInPageheader',
          component: () => import('@/views/component_built_in_example/page_header/index.vue'),
          meta: {
            title: 'route.component.builtIn.pageheader',
          },
        },
        {
          path: 'page_main',
          name: 'componentExampleBuiltInPagemain',
          component: () => import('@/views/component_built_in_example/page_main/index.vue'),
          meta: {
            title: 'route.component.builtIn.pagemain',
          },
        },
        {
          path: 'pagination',
          name: 'componentExampleBuiltInPagination',
          component: () => import('@/views/component_built_in_example/pagination/index.vue'),
          meta: {
            title: 'route.component.builtIn.pagination',
            badge: 'PRO',
          },
        },
        {
          path: 'particles_bg',
          name: 'componentExampleBuiltInParticlesBg',
          component: () => import('@/views/component_built_in_example/particles_bg/index.vue'),
          meta: {
            title: 'route.component.builtIn.particlesbg',
            badge: 'PRO',
          },
        },
        {
          path: 'password_strength',
          name: 'componentExampleBuiltInPasswordStrength',
          component: () => import('@/views/component_built_in_example/password_strength/index.vue'),
          meta: {
            title: 'route.component.builtIn.passwordstrength',
          },
        },
        {
          path: 'pattern_bg',
          name: 'componentExampleBuiltInPatternBg',
          component: () => import('@/views/component_built_in_example/pattern_bg/index.vue'),
          meta: {
            title: 'route.component.builtIn.patternbg',
            badge: 'PRO',
          },
        },
        {
          path: 'pin_input',
          name: 'componentExampleBuiltInPinInput',
          component: () => import('@/views/component_built_in_example/pin_input/index.vue'),
          meta: {
            title: 'route.component.builtIn.pininput',
          },
        },
        {
          path: 'popover',
          name: 'componentExampleBuiltInPopover',
          component: () => import('@/views/component_built_in_example/popover/index.vue'),
          meta: {
            title: 'route.component.builtIn.popover',
          },
        },
        {
          path: 'progress',
          name: 'componentExampleBuiltInProgress',
          component: () => import('@/views/component_built_in_example/progress/index.vue'),
          meta: {
            title: 'route.component.builtIn.progress',
          },
        },
        {
          path: 'scratch_off',
          name: 'componentExampleBuiltInScratchOff',
          component: () => import('@/views/component_built_in_example/scratch_off/index.vue'),
          meta: {
            title: 'route.component.builtIn.scratchoff',
            badge: 'PRO',
          },
        },
        {
          path: 'scroll_area',
          name: 'componentExampleBuiltInScrollArea',
          component: () => import('@/views/component_built_in_example/scroll_area/index.vue'),
          meta: {
            title: 'route.component.builtIn.scrollarea',
          },
        },
        {
          path: 'search_bar',
          name: 'componentExampleBuiltInSearchBar',
          component: () => import('@/views/component_built_in_example/search_bar/index.vue'),
          meta: {
            title: 'route.component.builtIn.searchbar',
          },
        },
        {
          path: 'select',
          name: 'componentExampleBuiltInSelect',
          component: () => import('@/views/component_built_in_example/select/index.vue'),
          meta: {
            title: 'route.component.builtIn.select',
          },
        },
        {
          path: 'slider',
          name: 'componentExampleBuiltInSlider',
          component: () => import('@/views/component_built_in_example/slider/index.vue'),
          meta: {
            title: 'route.component.builtIn.slider',
          },
        },
        {
          path: 'smooth_swipe',
          name: 'componentExampleBuiltInSmoothSwipe',
          component: () => import('@/views/component_built_in_example/smooth_swipe/index.vue'),
          meta: {
            title: 'route.component.builtIn.smoothswipe',
            badge: 'PRO',
          },
        },
        {
          path: 'sparkles_text',
          name: 'componentExampleBuiltInSparkleText',
          component: () => import('@/views/component_built_in_example/sparkles_text/index.vue'),
          meta: {
            title: 'route.component.builtIn.sparklestext',
            badge: 'PRO',
          },
        },
        {
          path: 'sparkline',
          name: 'componentExampleBuiltInSparkline',
          component: () => import('@/views/component_built_in_example/sparkline/index.vue'),
          meta: {
            title: 'route.component.builtIn.sparkline',
            badge: 'PRO',
          },
        },
        {
          path: 'spotlight_card',
          name: 'componentExampleBuiltInSpotlightCard',
          component: () => import('@/views/component_built_in_example/spotlight_card/index.vue'),
          meta: {
            title: 'route.component.builtIn.spotlightcard',
            badge: 'PRO',
          },
        },
        {
          path: 'storage_box',
          name: 'componentExampleBuiltInStoragebox',
          component: () => import('@/views/component_built_in_example/storage_box/index.vue'),
          meta: {
            title: 'route.component.builtIn.storagebox',
            badge: 'PRO',
          },
        },
        {
          path: 'switch',
          name: 'componentExampleBuiltInSwitch',
          component: () => import('@/views/component_built_in_example/switch/index.vue'),
          meta: {
            title: 'route.component.builtIn.switch',
          },
        },
        {
          path: 'tabs',
          name: 'componentExampleBuiltInTabs',
          component: () => import('@/views/component_built_in_example/tabs/index.vue'),
          meta: {
            title: 'route.component.builtIn.tabs',
          },
        },
        {
          path: 'text_highlight',
          name: 'componentExampleBuiltInTextHighlight',
          component: () => import('@/views/component_built_in_example/text_highlight/index.vue'),
          meta: {
            title: 'route.component.builtIn.texthighlight',
            badge: 'PRO',
          },
        },
        {
          path: 'textarea',
          name: 'componentExampleBuiltInTextarea',
          component: () => import('@/views/component_built_in_example/textarea/index.vue'),
          meta: {
            title: 'route.component.builtIn.textarea',
          },
        },
        {
          path: 'time_ago',
          name: 'componentExampleBuiltInTimeAgo',
          component: () => import('@/views/component_built_in_example/time_ago/index.vue'),
          meta: {
            title: 'route.component.builtIn.timeago',
            badge: 'PRO',
          },
        },
        {
          path: 'timeline',
          name: 'componentExampleBuiltInTimeline',
          component: () => import('@/views/component_built_in_example/timeline/index.vue'),
          meta: {
            title: 'route.component.builtIn.timeline',
            badge: 'PRO',
          },
        },
        {
          path: 'toast',
          name: 'componentExampleBuiltInToast',
          component: () => import('@/views/component_built_in_example/toast/index.vue'),
          meta: {
            title: 'route.component.builtIn.toast',
          },
        },
        {
          path: 'tooltip',
          name: 'componentExampleBuiltInTooltip',
          component: () => import('@/views/component_built_in_example/tooltip/index.vue'),
          meta: {
            title: 'route.component.builtIn.tooltip',
          },
        },
        {
          path: 'tree',
          name: 'componentExampleBuiltInTree',
          component: () => import('@/views/component_built_in_example/tree/index.vue'),
          meta: {
            title: 'route.component.builtIn.tree',
            badge: 'PRO',
          },
        },
        {
          path: 'trend',
          name: 'componentExampleBuiltInTrend',
          component: () => import('@/views/component_built_in_example/trend/index.vue'),
          meta: {
            title: 'route.component.builtIn.trend',
          },
        },
      ],
    },
    {
      path: 'extend',
      name: 'componentExampleExtend',
      meta: {
        title: 'route.component.extend.root',
      },
      children: [
        {
          path: 'pcas',
          name: 'componentExampleExtendPcas',
          component: () => import('@/views/component_extend_example/pcas.vue'),
          meta: {
            title: 'route.component.extend.pcas',
          },
        },
      ],
    },
  ],
}
export default routes
