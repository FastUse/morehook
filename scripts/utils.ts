import { join, resolve } from 'path'
import fs from 'fs-extra'
import matter from 'gray-matter'
import YAML from 'js-yaml'
import Git from 'simple-git'
import type { PackageIndexes } from '../packages/metadata/types'
import { $fetch } from 'ohmyfetch'
import { getCategories } from '../packages/metadata/utils'
import type { VueUseFunction } from '../packages/metadata/types'
import { packages } from '../meta/packages'

export const git = Git()

export const DOCS_URL = 'https://fastuse.github.io/morehook'

export const DIR_ROOT = resolve(__dirname, '..')
export const DIR_SRC = resolve(__dirname, '../packages')
export const GUID_CATE_SRC = resolve(__dirname, '../packages/guide')
const DIR_TYPES = resolve(__dirname, '../types/packages')

/**
 * 获取 ts 声明
 * @param pkg 包类别
 * @param name 包名
 * @returns
 */
export async function getTypeDefinition(
  pkg: string,
  name: string
): Promise<string | undefined> {
  const typingFilepath = join(DIR_TYPES, `${pkg}/${name}/index.d.ts`)

  if (!fs.existsSync(typingFilepath)) return

  let types = await fs.readFile(typingFilepath, 'utf-8')

  if (!types) return

  // clean up types
  types = types
    .replace(/import\(.*?\)\./g, '')
    .replace(/import[\s\S]+?from ?["'][\s\S]+?["']/g, '')
    .replace(/export {}/g, '')

  const prettier = await import('prettier')
  return prettier
    .format(types, {
      semi: false,
      parser: 'typescript'
    })
    .trim()
}

/**
 * 填充 每个子包下的 index.ts 文件的导入导出
 */
export async function updateImport({ packages, functions }: PackageIndexes) {
  for (const { name, dir, manualImport } of Object.values(packages)) {
    if (manualImport) continue

    const imports: string[] = functions
      .filter(i => i.package === name)
      .map(f => f.name)
      .sort()
      .map(name => `export * from './${name}'`)

    // if (name === 'core') {
    //   imports.push(
    //     'export * from \'./types\'',
    //     'export * from \'@vueuse/shared\'',
    //     'export * from \'./ssr-handlers\'',
    //   )
    // }

    // if (name === 'nuxt') {
    //   imports.push(
    //     'export * from \'@vueuse/core\'',
    //   )
    // }

    await fs.writeFile(join(dir, 'index.ts'), `${imports.join('\n')}\n`)

    // temporary file for export-size
    await fs.remove(join(dir, 'index.mjs'))
  }
}

export function uniq<T extends any[]>(a: T) {
  return Array.from(new Set(a))
}

export function stringifyFunctions(functions: VueUseFunction[], title = true) {
  let list = ''

  const categories = getCategories(functions)

  for (const category of categories) {
    if (category.startsWith('_')) continue

    if (title) list += `### ${category}\n`

    const categoryFunctions = functions
      .filter(i => i.category === category)
      .sort((a, b) => a.name.localeCompare(b.name))

    for (const { name, docs, description, deprecated } of categoryFunctions) {
      if (deprecated) continue

      const desc = description ? ` — ${description}` : ''
      list += `  - [\`${name}\`](${docs})${desc}\n`
    }
    list += '\n'
  }
  return list
}

export function replacer(
  code: string,
  value: string,
  key: string,
  insert: 'head' | 'tail' | 'none' = 'none'
) {
  const START = `<!--${key}_STARTS-->`
  const END = `<!--${key}_ENDS-->`
  const regex = new RegExp(`${START}[\\s\\S]*?${END}`, 'im')

  const target = value ? `${START}\n${value}\n${END}` : `${START}${END}`

  if (!code.match(regex)) {
    if (insert === 'none') return code
    else if (insert === 'head') return `${target}\n\n${code}`
    else return `${code}\n\n${target}`
  }

  return code.replace(regex, target)
}

export async function updatePackageREADME({
  packages,
  functions
}: PackageIndexes) {
  for (const { name, dir } of Object.values(packages)) {
    const readmePath = join(dir, 'README.md')

    if (!fs.existsSync(readmePath)) continue

    const functionMD = stringifyFunctions(
      functions.filter(i => i.package === name),
      false
    )
    let readme = await fs.readFile(readmePath, 'utf-8')
    readme = replacer(readme, functionMD, 'FUNCTIONS_LIST')

    await fs.writeFile(readmePath, `${readme.trim()}\n`, 'utf-8')
  }
}

export async function updateIndexREADME({ functions }: PackageIndexes) {
  let readme = await fs.readFile('README.md', 'utf-8')

  const functionsCount = functions.filter(i => !i.internal).length

  readme = readme.replace(
    /img\.shields\.io\/badge\/-(.+?)%20functions/,
    `img.shields.io/badge/-${functionsCount}%20functions`
  )

  await fs.writeFile('README.md', `${readme.trim()}\n`, 'utf-8')
}

export async function updateFunctionsMD({
  packages,
  functions
}: PackageIndexes) {
  let mdAddons = await fs.readFile('packages/add-ons.md', 'utf-8')

  const addons = Object.values(packages)
    .filter(i => i.addon && !i.deprecated)
    .map(({ docs, name, display, description }) => {
      return `## ${display} - [\`@vueuse/${name}\`](${docs})\n${description}\n${stringifyFunctions(
        functions.filter(i => i.package === name),
        false
      )}`
    })
    .join('\n')

  mdAddons = replacer(mdAddons, addons, 'ADDONS_LIST')

  await fs.writeFile('packages/add-ons.md', mdAddons, 'utf-8')
}

export async function updateFunctionREADME(indexes: PackageIndexes) {
  const hasTypes = fs.existsSync(DIR_TYPES)

  if (!hasTypes)
    console.warn('No types dist found, run `npm run build:types` first.')

  for (const fn of indexes.functions) {
    const mdPath = `packages/${fn.package}/${fn.name}/index.md`
    if (!fs.existsSync(mdPath)) continue

    let readme = await fs.readFile(mdPath, 'utf-8')

    const { content, data = {} } = matter(readme)

    data.category = fn.category || 'Unknown'

    readme = `---\n${YAML.dump(data)}---\n\n${content.trim()}`

    await fs.writeFile(mdPath, `${readme.trim()}\n`, 'utf-8')
  }
}

export async function updateCountBadge(indexes: PackageIndexes) {
  const functionsCount = indexes.functions.filter(i => !i.internal).length
  const url = `https://img.shields.io/badge/-${functionsCount}%20functions-13708a`
  const data = await $fetch(url, { responseType: 'text' })
  await fs.writeFile(
    join(DIR_ROOT, 'packages/public/badge-function-count.svg'),
    data,
    'utf-8'
  )
}

/**
 * 更改每个子包的 packages
 */
export async function updatePackageJSON(indexes: PackageIndexes) {
  const { version } = await fs.readJSON('package.json')

  for (const {
    name,
    description,
    author,
    iife,
    keywords,
    moduleJs
  } of packages) {
    const packageDir = join(DIR_SRC, name)
    const packageJSONPath = join(packageDir, 'package.json')
    const packageJSON = await fs.readJSON(packageJSONPath)

    packageJSON.version = version
    packageJSON.description = description || packageJSON.description
    packageJSON.author =
      author || 'M-cheng-web <https://github.com/M-cheng-web>'
    packageJSON.bugs = {
      url: 'https://github.com/FastUse/morehook/issues'
    }
    packageJSON.homepage = 'https://github.com/FastUse/morehook#readme'
    packageJSON.repository = {
      type: 'git',
      url: 'git+https://github.com/FastUse/morehook.git',
      directory: `packages/${name}`
    }
    packageJSON.types = './index.d.ts'
    packageJSON.main = moduleJs ? './index.mjs' : './index.cjs'
    packageJSON.module = './index.mjs'
    if (iife !== false) {
      packageJSON.unpkg = './index.iife.min.js'
      packageJSON.jsdelivr = './index.iife.min.js'
    }
    packageJSON.exports = {
      '.': {
        import: './index.mjs',
        require: './index.cjs',
        types: './index.d.ts'
      },
      './*': './*',
      ...packageJSON.exports
    }
    if (keywords) {
      packageJSON.keywords = [...keywords]
    }

    await fs.writeJSON(packageJSONPath, packageJSON, { spaces: 2 })
  }
}

async function fetchContributors(page = 1) {
  const additional = ['egoist']

  const collaborators: string[] = []
  const data =
    (await $fetch<{ login: string }[]>(
      `https://api.github.com/repos/vueuse/vueuse/contributors?per_page=100&page=${page}`,
      {
        method: 'get',
        headers: {
          'content-type': 'application/json'
        }
      }
    )) || []
  collaborators.push(...data.map(i => i.login))
  if (data.length === 100)
    collaborators.push(...(await fetchContributors(page + 1)))

  return Array.from(
    new Set([
      ...collaborators.filter(
        collaborator =>
          !['renovate[bot]', 'dependabot[bot]', 'renovate-bot'].includes(
            collaborator
          )
      ),
      ...additional
    ])
  )
}

export async function updateContributors() {
  const collaborators = await fetchContributors()
  await fs.writeFile(
    join(DIR_SRC, './contributors.json'),
    `${JSON.stringify(collaborators, null, 2)}\n`,
    'utf8'
  )
}

export function isValidKey(
  key: string | number | symbol,
  object: object
): key is keyof typeof object {
  return key in object
}

/**
 * 更改 packages/guide/categories 文件（也就是分类说明）
 */
export async function updateGuideCategories(allCategories: object) {
  let content = `# 分类说明\nHooks 分类说明，便于记忆和查找\n\n`
  Object.keys(allCategories).forEach(key => {
    if (isValidKey(key, allCategories)) {
      content += `+ 🛠 ${key} - ${allCategories[key]}\n`
    }
  })
  await fs.writeFile(join(GUID_CATE_SRC, './categories.md'), content, 'utf8')
}
