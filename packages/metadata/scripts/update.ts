import fs from 'fs-extra'
import fg from 'fast-glob'
import Git from 'simple-git'
import matter from 'gray-matter'
import { join, relative, resolve } from 'path'
import type { PackageIndexes, VueUseFunction } from '../types'
import { getCategories } from './utils'
import { packages } from '../../../meta/packages'

export const DOCS_URL = 'https://m-cheng-web.github.io/morehook/'
const DIR_PACKAGE = resolve(__dirname, '..')
const DIR_ROOT = resolve(__dirname, '../../../')
const DIR_SRC = resolve(DIR_ROOT, 'packages')
const git = Git(DIR_ROOT)

/**
 * 将 demo以及分类这种加入到 md文档中
 */

async function listFunctions(dir: string, ignore: string[] = []) {
  const files = await fg('*', {
    onlyDirectories: true,
    cwd: dir,
    ignore: ['_*', 'dist', 'node_modules', ...ignore]
  })
  files.sort()
  return files
}

async function readFunctions() {
  const indexes: PackageIndexes = {
    packages: {},
    categories: [],
    functions: []
  }

  for (const info of packages) {
    const dir = join(DIR_SRC, info.name)
    const functions = await listFunctions(dir)

    const pkg = {
      ...info,
      dir: relative(DIR_ROOT, dir).replace(/\\/g, '/')
    }

    indexes.packages[info.name] = pkg

    await Promise.all(
      functions.map(async fnName => {
        const mdPath = join(dir, fnName, 'index.md')
        const tsPath = join(dir, fnName, 'index.ts')

        const fn: VueUseFunction = {
          name: fnName,
          package: pkg.name,
          docs: '', // 文档地址
          category: '', // 种类
          description: '', // 描述
          lastUpdated:
            +(await git.raw(['log', '-1', '--format=%at', tsPath])) * 1000, // 最后更新时间
          deprecated: false, // 是否不赞成使用
          alias: [], // 化名
          related: [] // 联系
        }

        fn.docs = `${DOCS_URL}/${pkg.name}/${fnName}/`

        const mdRaw = await fs.readFile(mdPath, 'utf-8')

        const { content: md, data: frontmatter } = matter(mdRaw)
        const category = frontmatter.category

        let alias = frontmatter.alias
        if (typeof alias === 'string')
          alias = alias
            .split(',')
            .map(s => s.trim())
            .filter(Boolean)

        let related = frontmatter.related
        if (typeof related === 'string') {
          related = related
            .split(',')
            .map(s => s.trim())
            .filter(Boolean)
        } else if (Array.isArray(related)) {
          related = related.map(s => s.trim()).filter(Boolean)
        }

        let description =
          (md
            .replace(/\r\n/g, '\n')
            .match(/# \w+[\s\n]+(.+?)(?:, |\. |\n|\.\n)/m) || [])[1] || ''

        description = description.trim()
        description = description.charAt(0).toLowerCase() + description.slice(1)

        fn.category = ['core'].includes(pkg.name) ? category : `@${pkg.display}`
        fn.description = description

        if (description.includes('DEPRECATED') || frontmatter.deprecated)
          fn.deprecated = true

        if (alias?.length) fn.alias = alias

        if (related?.length) fn.related = related

        indexes.functions.push(fn)
      })
    )

    indexes.functions.sort((a, b) => a.name.localeCompare(b.name))
    indexes.categories = getCategories(indexes.functions)

    // 针对关联性处理
    indexes.functions.forEach(fn => {
      if (!fn.related) return

      fn.related.forEach(name => {
        const target = indexes.functions.find(f => f.name === name)

        if (!target) throw new Error(`Unknown related function: ${name}`)

        if (!target.related) target.related = []

        if (!target.related.includes(fn.name)) target.related.push(fn.name)
      })
    })
    indexes.functions.forEach(fn => fn.related?.sort())

    return indexes
  }
}

async function run() {
  const indexes = await readFunctions()
  await fs.writeJSON(join(DIR_PACKAGE, 'index.json'), indexes, { spaces: 2 })
}

run()
