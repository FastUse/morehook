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
    external: ['@morehook/utils']
    // external: ['vue', 'vue-router', 'js-cookie', 'dayjs', 'easyqrcodejs'],
    // globals: {
    //   dayjs: 'Dayjs',
    //   'vue-router': 'VueRouter',
    //   'js-cookie': 'JsCookie',
    //   easyqrcodejs: 'Easyqrcodejs'
    // }
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
  },
  {
    name: 'component',
    display: 'Component',
    description: '关于 vue 的小型业务组件库',
    keywords: ['fastuse', 'morehook', 'component', 'vue组件'],
    iife: false,
    moduleJs: true, // 是否 main 入口指向 index.mjs
    singleChunk: true // 是否子包单独打包 (目前是组件包独有的,暂时没用上)
  },
  {
    name: 'utils',
    display: 'Utils',
    description: '业务中的工具库，不同于hook，工具库功能更单一，不依赖vue',
    keywords: ['fastuse', 'morehook', 'utils', '工具'],
    utils: true // 含义：1.不会在文档中看到此分类 2.此分类只会参与打包到npm以及让库内其他包使用
  }
]
