export const packages: any[] = [
  {
    name: 'core',
    display: 'MoreHook',
    description: '关于vue的一些hooks，兼容vue2+vue3',
    keywords: [
      'fastuse',
      'vuehook',
      'hook',
      'vue3',
      'vue3hook',
      'morehook',
      'vueHook'
    ],
    // external: ['vue', 'vue-router', 'js-cookie', 'dayjs', 'easyqrcodejs'],
    globals: {
      // dayjs: 'Dayjs',
      // 'vue-router': 'VueRouter',
      // 'js-cookie': 'JsCookie',
      // easyqrcodejs: 'Easyqrcodejs'
    }
  },
  {
    name: 'component',
    display: 'Component',
    description: '关于 vue 的小型业务组件库',
    keywords: ['fastuse', 'morehook', 'component', 'vue组件'],
    singleChunk: true // 是否子包单独打包 (目前是组件包独有的,暂时没用上)
  },
  {
    name: 'router',
    display: 'Router',
    description: '关于 vuerouter 的 hooks',
    keywords: ['fastuse', 'morehook', 'vuerouter', 'router'],
    addon: true,
    external: ['vue-router'],
    globals: {
      'vue-router': 'VueRouter'
    }
  }
]
