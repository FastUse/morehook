export const packages: any[] = [
  {
    name: 'core',
    display: 'MoreHook',
    description: '关于vue的一些hooks，兼容vue2+vue3',
    keywords: ['vuehook', 'hook', 'vue3', 'vue3hook', 'morehook', 'vueHook'],
    external: ['vue', 'vue-router', 'js-cookie', 'dayjs', 'easyqrcodejs'],
    globals: {
      vue: 'Vue',
      dayjs: 'Dayjs',
      'vue-router': 'VueRouter',
      'js-cookie': 'JsCookie',
      easyqrcodejs: 'Easyqrcodejs'
    }
  }
]
