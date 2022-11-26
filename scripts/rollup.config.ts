import fs from 'fs'
import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'
import fg from 'fast-glob'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import jsx from 'acorn-jsx'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import type { Options as ESBuildOptions } from 'rollup-plugin-esbuild'
import type { OutputOptions, Plugin, RollupOptions } from 'rollup'
import { functions } from '../packages/metadata/metadata'
import { packages } from '../meta/packages'

const VUE_DEMI_IIFE = fs.readFileSync(
  require.resolve('vue-demi/lib/index.iife.js'),
  'utf-8'
)
const configs: RollupOptions[] = []

const injectVueDemi: Plugin = {
  name: 'inject-vue-demi',
  renderChunk(code) {
    return `${VUE_DEMI_IIFE};\n;${code}`
  }
}

const esbuildPlugin = esbuild({ target: 'esnext' })
const dtsPlugin = [dts()]

const externals = ['vue', 'vue-demi', '@morehook/core']
// const packagesRoot = resolve(__dirname, '..', 'packages')

const esbuildMinifer = (options: ESBuildOptions) => {
  const { renderChunk } = esbuild(options)
  return { name: 'esbuild-minifer', renderChunk }
}

for (const {
  globals,
  name,
  external,
  iife,
  build,
  cjs,
  mjs,
  dts,
  target,
  singleChunk
} of packages) {
  if (build === false) continue

  const iifeGlobals = {
    'vue-demi': 'VueDemi',
    '@morehook/core': 'MoreHook',
    ...(globals || {})
  }
  const iifeName = 'MoreHook'

  if (singleChunk) {
    // 打包组件专属
    const componentFun = functions.filter(item => item.package === 'component')
    configs.push({
      input: componentFun.reduce((pre, item) => {
        pre[item.name] = `packages/${name}/${item.name}/index.ts`
        return pre
      }, {}),
      output: [
        {
          dir: `packages/${name}/dist`,
          format: 'es',
          entryFileNames: '[name]/index.js'
        }
      ],
      plugins: [
        commonjs(),
        nodeResolve(),
        // rollup-plugin-scss 插件
        // scss({
        //   output: function (styles) {
        //     fs.mkdirSync(join(packagesRoot, `${name}/dist`))
        //     fs.writeFileSync(
        //       join(packagesRoot, `${name}/dist/index.css`),
        //       styles,
        //       'utf-8'
        //     )
        //   }
        // }),
        postcss({
          // modules: true, // 是否启用样式隔离，但是这里只更改了打包后的css名，没有更改引用的地方
          extensions: ['.css', '.scss'],
          extract: 'index.css',
          plugins: [
            autoprefixer({
              overrideBrowserslist: ['>=0%']
            })
          ]
        }),
        json(),
        vueJsx(),
        esbuildPlugin
      ] as any,
      acornInjectPlugins: [jsx() as () => unknown],
      external: [...externals, ...(external || [])]
    })
    configs.push({
      input: `packages/${name}/index.ts`,
      output: {
        dir: `packages/${name}/dist`,
        format: 'es',
        entryFileNames: 'index.d.ts'
      },
      plugins: dtsPlugin,
      external: [...externals, ...(external || []), /index.scss/]
    })
  } else {
    // 打包 hooks & utils
    const fn = 'index'
    const input = `packages/${name}/index.ts`
    const output: OutputOptions[] = []

    if (mjs !== false) {
      output.push({
        file: `packages/${name}/dist/${fn}.mjs`,
        format: 'es'
      })
    }

    if (cjs !== false) {
      output.push({
        file: `packages/${name}/dist/${fn}.cjs`,
        format: 'cjs'
      })
    }

    if (iife !== false) {
      output.push(
        {
          file: `packages/${name}/dist/${fn}.iife.js`,
          format: 'iife',
          name: iifeName,
          extend: true,
          globals: iifeGlobals,
          plugins: [injectVueDemi]
        },
        {
          file: `packages/${name}/dist/${fn}.iife.min.js`,
          format: 'iife',
          name: iifeName,
          extend: true,
          globals: iifeGlobals,
          plugins: [injectVueDemi, esbuildMinifer({ minify: true })]
        }
      )
    }

    configs.push({
      input,
      output,
      plugins: [
        commonjs(),
        nodeResolve(),
        json(),
        target ? esbuild({ target }) : esbuildPlugin
      ],
      acornInjectPlugins: [jsx() as () => unknown],
      external: [...externals, ...(external || [])]
    })

    if (dts !== false) {
      configs.push({
        input,
        output: {
          file: `packages/${name}/dist/${fn}.d.ts`,
          format: 'es'
        },
        plugins: dtsPlugin,
        external: [...externals, ...(external || [])]
      })
    }
  }
}

export default configs
