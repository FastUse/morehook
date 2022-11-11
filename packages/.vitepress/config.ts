import { defineConfig, DefaultTheme } from 'vitepress'
import { version } from '../../package.json'
import { categoryNames, metadata } from '../metadata/metadata'

const GuideSidebar = sidebarGuide()
const CoreSidebar = sidebarCore()

export default defineConfig({
  lang: 'zh-CN',
  title: 'MoreHook',
  description: '针对于vue3的hooks',

  lastUpdated: true,
  base: '/morehook',
  cleanUrls: 'without-subfolders',

  themeConfig: {
    logo: '/logo.svg',
    nav: nav(),

    sidebar: {
      '/guide/': GuideSidebar,
      '/core/': CoreSidebar,
      '/router/': CoreSidebar,
      '/functions': CoreSidebar,
    } as DefaultTheme.Sidebar,

    editLink: {
      pattern: 'https://github.com/M-cheng-web/morehook/tree/main/packages/:path',
      text: 'Suggest changes to this page'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/M-cheng-web/morehook' }
    ],

    // 这里后续一定要去申请
    // algolia: {
    //   appId: '8J64VVRP8K',
    //   apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //   indexName: 'vitepress'
    // },

    // lastUpdatedText: '最后更新',

    // docFooter: {
    //   prev: '上一页',
    //   next: '下一页'
    // },
    // outlineTitle: 'This',

    // footer: {
    //   message: 'Released under the MIT License.',
    // },
  },
  head: [
    ['link', { rel: 'icon', href: 'logo.svg' }],
  ]
})

// 顶部栏
function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '开始', link: '/guide/introduce', activeMatch: '/guide/' },
    { text: '搜索-Hooks', link: '/functions', activeMatch: '/functions/' },
    {
      text: version,
      link: ''
      // items: [
      //   {
      //     text: 'Changelog',
      //     link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
      //   },
      //   {
      //     text: 'Contributing',
      //     link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
      //   }
      // ]
    }
  ]
}

// 其他tab侧边栏，例如 介绍
function sidebarGuide() {
  return [
    {
      text: '开始',
      items: [
        { text: '介绍', link: '/guide/introduce' },
        { text: '分类说明', link: '/guide/categories' },
        { text: '搜索-Hooks', link: '/functions' },
        { text: '备忘录', link: '/guide/memo' },
      ]
    },
    ...sidebarCore()
  ]
}

// 核心tab侧边栏，都是 hooks
function sidebarCore() {
  return getCoreSideBar()
}

function getCoreSideBar() {
  const links: any[] = []

  for (const name of categoryNames) {
    if (name.startsWith('_')) continue

    const functions = metadata.functions.filter(i => i.category === name && !i.internal)

    links.push({
      text: name,
      items: functions.map(i => ({
        text: i.name,
        link: i.external || `/${i.package}/${i.name}/`,
      })),
      link: name.startsWith('@')
        ? functions[0].external || `/${functions[0].package}/README`
        : undefined,
    })
  }

  return links
}