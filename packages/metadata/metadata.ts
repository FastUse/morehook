import type { PackageIndexes } from './types'
import _metadata, {
  packages as _packages,
  categories as _categories,
  functions as _functions
} from './index.json'

// 类型标签列表排序
const categoriesOrder = [
  'UnDistribution', // 待分配~

  // 状态 - 对数据的状态更改捕捉
  // 例如记录promise的等待以及成功状态，storage自动存取，一些双向的数据更改可以放这个分类
  'State',

  'Elements', // 元素 - 涉及到原生 DOM 的hook
  'Browser', // 浏览器 - 关于浏览器的API
  'Sensors', // 传感器 - ps: 网络状态捕捉，鼠标动向捕捉，scroll捕捉
  'Network', // 网络连接 - ps: http封装，websocket封装，fetch封装
  'Animation', // 动画 - ps: settimeout封装，当前时间，过渡
  'Component', // 组件 - 可以控制页面 ref元素
  'Watch', // 监听 - 监听数组，状态这些
  'Reactivity', // 反应 - (暂时不大清楚界限)
  'Array', // 数组 - 关于数组的处理
  'Time', // 时间 - 关于时间的处理
  'Utilities' // 公共工具 - 转base64，转数字，eventBus这些
]

export const metadata = _metadata as unknown as PackageIndexes
export const functions = _functions as unknown as PackageIndexes['functions']
export const packages = _packages as PackageIndexes['packages']
export const categories = _categories as PackageIndexes['categories']

export const functionNames = functions.map(f => f.name)

export const categoryNames = Array.from(categories)
  .sort((a, b) => categoriesOrder.indexOf(a) - categoriesOrder.indexOf(b))
  .sort((a, b) => (a.startsWith('@') ? 1 : b.startsWith('@') ? -1 : 0))

export const coreCategoryNames = categoryNames.filter(f => !f.startsWith('@'))

// 区别于 core 文件夹下的 hooks  应该是另外一种分类，先不用管   (好像是除了 core 的其他 导航)
export const addonCategoryNames = categoryNames.filter(f => f.startsWith('@'))

export const getFunction = (name: string) =>
  metadata.functions.find(f => f.name === name)
