import { resolve } from 'path'
import { defineConfig } from 'vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import { MarkdownTransform } from './.vitepress/plugins/markdownTransform'

export default defineConfig(async () => {
  return {
    server: {
      hmr: {
        overlay: false
      },
      fs: {
        allow: [resolve(__dirname, '..')]
      },
      host: '0.0.0.0',
      port: 8868
    },
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      jsxInject: "import { h } from 'vue-demi';"
    },
    plugins: [
      // custom
      MarkdownTransform(),

      // 注册组件到全局
      Components({
        dirs: resolve(__dirname, '.vitepress/theme/components'),
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          IconsResolver({
            componentPrefix: ''
          })
        ],
        dts: './.vitepress/components.d.ts',
        transformer: 'vue3'
      })
    ],
    resolve: {
      alias: {
        '@morehook/core': resolve(__dirname, 'core/index.ts'),
        '@morehook/component': resolve(__dirname, 'component/index.ts'),
        '@morehook/utils': resolve(__dirname, 'utils/index.ts')
        // '@vueuse/shared': resolve(__dirname, 'shared/index.ts'),
        // '@vueuse/math': resolve(__dirname, 'math/index.ts'),
        // '@vueuse/integrations': resolve(__dirname, 'integrations/index.ts'),
        // '@vueuse/metadata': resolve(__dirname, 'metadata/index.ts'),
        // '@vueuse/docs-utils': resolve(__dirname, '.vitepress/plugins/utils.ts'),
      }
      // dedupe: [
      //   'vue',
      //   'vue-demi',
      //   '@vue/runtime-core',
      // ],
    }
    // optimizeDeps: {
    //   exclude: [
    //     'vue-demi',
    //     '@vueuse/shared',
    //     '@vueuse/core',
    //     'body-scroll-lock',
    //   ],
    //   include: [
    //     'axios',
    //     'js-yaml',
    //     'nprogress',
    //     'qrcode',
    //     'tslib',
    //     'fuse.js',
    //     'universal-cookie',
    //   ],
    // },
  }
})
