import { join, resolve } from 'path'
import type { Plugin } from 'vite'
import fs from 'fs-extra'
import { packages } from '../../../meta/packages'
import { functionNames, getFunction } from '../../../packages/metadata/metadata'
import { getTypeDefinition, replacer } from '../../../scripts/utils'

export function MarkdownTransform(): Plugin {
  const DIR_TYPES = resolve(__dirname, '../../../types/packages')
  const hasTypes = fs.existsSync(DIR_TYPES)

  if (!hasTypes) console.warn('No types dist found, run `npm run build:types` first.')

  return {
    name: 'vueuse-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.match(/\.md\b/)) return null

      // 获取 hook 的链接
      code = code.replace(
        new RegExp(`\`({${functionNames.join('|')}})\`(.)`, 'g'),
        (_, name, ending) => {
          // already a link
          if (ending === ']') return _
          const fn = getFunction(name)!
          return `[\`${fn.name}\`](${fn.docs})`
        },
      )

      // 直链转化为相对链接
      code = code.replace(/https?:\/\/vueuse\.org\//g, '/')

      const [pkg, _name, i] = id.split('/').slice(-3)

      const name = functionNames.find(n => n.toLowerCase() === _name.toLowerCase()) || _name

      if (functionNames.includes(name) && i === 'index.md') {
        const frontmatterEnds = code.indexOf('---\n\n') + 4
        const firstSubheader = code.search(/\n## \w/) // 第一个副标题
        const sliceIndex = firstSubheader < 0 ? frontmatterEnds : firstSubheader

        const { footer, header } = await getFunctionMarkdown(pkg, name)

        if (hasTypes) code = replacer(code, footer, 'FOOTER', 'tail')

        if (header) code = code.slice(0, sliceIndex) + header + code.slice(sliceIndex)

        code = code
          .replace(/(# \w+?)\n/, `$1\n`) // 这里后面可以选择在标题后添加一些全局信息，例如hook的一些信息
          .replace(/## (Components?(?:\sUsage)?)/i, '## $1\n<LearnMoreComponents />\n\n')
          .replace(/## (Directives?(?:\sUsage)?)/i, '## $1\n<LearnMoreDirectives />\n\n')
      }

      return code
    },
  }
}

// ps: /Users/xxx/Desktop/vitepress/packages
const DIR_SRC = resolve(__dirname, '../..')

const GITHUB_BLOB_URL = 'https://github.com/M-cheng-web/morehook/blob/main/packages'

/**
 * 解析特定信息为 md文档格式
 * @param pkg 包名
 * @param name hook名
 * @returns (demo示例 + ts类型声明 + changelog + 远程来源 + 贡献名单) 的 md文档语法
 */
export async function getFunctionMarkdown(pkg: string, name: string) {
  const URL = `${GITHUB_BLOB_URL}/${pkg}/${name}`

  const dirname = join(DIR_SRC, pkg, name)
  const demoPath = ['demo.vue', 'demo.client.vue'].find(i => fs.existsSync(join(dirname, i)))
  const types = await getTypeDefinition(pkg, name)

  // --------------- ts类型 .md ---------------
  let typingSection = ''

  if (types) {
    const code = `\`\`\`typescript\n${types.trim()}\n\`\`\``
    typingSection = types.length > 1000 ?
`
## Type Declarations

<details>
<summary op50 italic>Show Type Declarations</summary>

${code}

</details>
`
:
`\n## Type Declarations\n\n${code}`
  }

  // --------------- 来源 .md ---------------
  const links = ([
    ['Source', `${URL}/index.ts`],
    demoPath ? ['Demo', `${URL}/${demoPath}`] : undefined,
    ['Docs', `${URL}/index.md`],
  ])
    .filter(i => i)
    .map(i => `[${i![0]}](${i![1]})`).join(' • ')

  const sourceSection = `## Source\n\n${links}\n`

  // --------------- 贡献 .md ---------------
//   const ContributorsSection =
// `
// ## Contributors

// <Contributors fn="${name}" />
// `

  // --------------- 更改日志 .md ---------------
//   const changelogSection =
// `
// ## Changelog

// <Changelog fn="${name}" />
// `

  // --------------- demo示例 .md ---------------
  const demoSection = demoPath
    ? demoPath.endsWith('.client.vue')
      ?
`
  <script setup>
  import { defineAsyncComponent } from 'vue'
  const Demo = defineAsyncComponent(() => import('./${demoPath}'))
  </script>

  ## Demo

  <DemoContainer>
  <p class="demo-source-link"><a href="${URL}/${demoPath}" target="_blank">source</a></p>
  <ClientOnly>
    <Suspense>
      <Demo/>
      <template #fallback>
        Loading demo...
      </template>
    </Suspense>
  </ClientOnly>
  </DemoContainer>
`
      :
`
  <script setup>
  import Demo from \'./${demoPath}\'
  </script>

  ## Demo

  <DemoContainer>
  <p class="demo-source-link"><a href="${URL}/${demoPath}" target="_blank">source</a></p>
  <Demo/>
  </DemoContainer>
`
    : ''

  // const packageNote = packages.find(p => p.name === pkg)!.addon
  //   ? `Available in the <a href="/${pkg}/README">@vueuse/${pkg}</a> add-on.\n`
  //   : ''

  // 先不要 贡献 和 changelog
  const footer = `${typingSection}\n\n${sourceSection}\n`
  // const footer = `${typingSection}\n\n${sourceSection}\n${ContributorsSection}\n${changelogSection}\n`

  // const header = demoSection + packageNote
  const header = demoSection

  return {
    footer,
    header,
  }
}
