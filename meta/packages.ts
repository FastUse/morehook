export const packages: any[] = [
  {
    name: 'core',
    display: 'MoreHook',
    description: '关于vue的一些hooks，兼容vue2+vue3',
    keywords: ['vuehook', 'hook', 'vue3', 'vue3hook', 'morehook', 'vueHook'],
    // external: ['vue', 'vue-router', 'js-cookie', 'dayjs', 'easyqrcodejs'],
    globals: {
      // dayjs: 'Dayjs',
      // 'vue-router': 'VueRouter',
      // 'js-cookie': 'JsCookie',
      // easyqrcodejs: 'Easyqrcodejs'
    }
  },
  {
    name: 'router',
    display: 'Router',
    description: '关于 vuerouter 的 hooks',
    keywords: ['morehook', 'vuerouter', 'router'],
    addon: true,
    external: ['vue-router'],
    globals: {
      'vue-router': 'VueRouter'
    }
  }
]
