import { ref, Ref, isRef, watch } from 'vue-demi'

type Elements = HTMLScriptElement | HTMLLinkElement | HTMLImageElement

/**
 * manual: 是否手动下载 (默认 false)
 * async: script 标签属性
 * crossOrigin: script 标签属性
 * referrerPolicy: script 标签属性
 * noModule: script 标签属性
 * defer: script 标签属性
 * media: link 标签属性 (默认 all)
 * target: 资源挂载在哪 (默认 document.body)
 */
interface Options {
  manual?: boolean
  async?: boolean
  crossOrigin?: 'anonymous' | 'use-credentials'
  referrerPolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url'
  noModule?: boolean
  defer?: boolean
  media?: string
  target?: HTMLElement | Ref<HTMLElement>
}

/**
 * 用于动态地向页面加载或卸载外部资源（js，图片，css）
 * @param src 下载地址
 * @param onLoaded 下载成功回调
 * @param options
 * @remark 图片需要手动控制下载，否则可能会出现没有及时拿到外部 target 元素
 */
export function useExternal(
  src: string | Ref<string>,
  onLoaded?: (el: Elements) => void,
  options: Options = {}
) {
  let originSrc = isRef(src) ? src.value : src
  const resources = ref<Elements | null>(null)

  const {
    manual = false,
    async,
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    media = 'all',
    target = document.body
  } = options

  let el: Elements = document.createElement('script')

  let parentEl: Element | HTMLElement = document.head

  const loadScript = () =>
    new Promise(resolve => {
      const isExist = document.querySelector(`script[src="${originSrc}"]`)
      if (isExist) return

      el = document.createElement('script')
      el.src = originSrc
      el.type = 'text/javascript'
      if (async) el.async = async
      if (defer) el.defer = defer
      if (noModule) el.noModule = noModule
      if (crossOrigin) el.crossOrigin = crossOrigin
      if (referrerPolicy) el.referrerPolicy = referrerPolicy

      el = parentEl.appendChild(el)
      resolve(el)
    })

  const loadCss = () =>
    new Promise(resolve => {
      const isExist = document.querySelector(`link[href="${originSrc}"]`)
      if (isExist) return

      el = document.createElement('link')
      el.href = originSrc
      el.rel = 'stylesheet'
      el.type = 'text/css'
      el.media = media

      el = parentEl.appendChild(el)
      resolve(el)
    })

  // 图片需要手动控制下载，否则可能会出现没有及时拿到外部 target 元素
  const loadImage = () =>
    new Promise(resolve => {
      const isExist = document.querySelector(`img[src="${originSrc}"]`)
      if (isExist) return

      el = document.createElement('img')
      el.src = originSrc
      parentEl = isRef(target) ? target.value : target
      parentEl.appendChild(el)
      resolve(el)
    })

  const load = () =>
    // eslint-disable-next-line no-async-promise-executor
    new Promise(async (resolve, reject) => {
      if (/\.js$/.test(originSrc)) {
        await loadScript()
      }
      if (/\.css$/.test(originSrc)) {
        await loadCss()
      }
      if (/\.(gif|jpg|jpeg|png|svg|GIF|JPG|PNG|)$/.test(originSrc)) {
        await loadImage()
      }
      resources.value = el
      el.addEventListener('error', (event: any) => reject(event))
      el.addEventListener('abort', (event: any) => reject(event))
      el.addEventListener('load', () => {
        onLoaded && onLoaded(el)
      })
      resolve(el)
    })

  const unload = () => {
    if (resources.value) {
      parentEl.removeChild(resources.value)
      resources.value = null
    }
  }

  if (isRef(src)) {
    watch(src, val => {
      originSrc = val
      if (!manual) load()
    })
  }

  if (!manual) load()

  return { resources, load, unload }
}
