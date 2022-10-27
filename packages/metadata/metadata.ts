import type { PackageIndexes } from './types'
import _metadata, {
  packages as _packages,
  categories as _categories,
  functions as _functions
} from './index.json'

// 类型标签列表
const categoriesOrder = [
  'State',
  'Elements',
  'Browser',
  'Sensors',
  'Network',
  'Animation',
  'Component',
  'Watch',
  'Reactivity',
  'Array',
  'Time',
  'Utilities'
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
