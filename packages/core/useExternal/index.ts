import { ref, Ref, isRef } from 'vue-demi'

type Elements = HTMLScriptElement | HTMLLinkElement | HTMLImageElement

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

export function useExternal(
  src: string,
  onLoaded?: (el: Elements) => void,
  options: Options = {}
) {
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
      const isExist = document.querySelector(`script[src="${src}"]`)
      if (isExist) return

      el = document.createElement('script')
      el.src = src
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
      const isExist = document.querySelector(`link[href="${src}"]`)
      if (isExist) return

      el = document.createElement('link')
      el.href = src
      el.rel = 'stylesheet'
      el.type = 'text/css'
      el.media = media

      el = parentEl.appendChild(el)
      resolve(el)
    })

  // 图片需要手动控制下载，否则可能会出现没有及时拿到外部 target 元素
  const loadImage = () =>
    new Promise(resolve => {
      const isExist = document.querySelector(`img[src="${src}"]`)
      if (isExist) return

      el = document.createElement('img')
      el.src = src
      parentEl = isRef(target) ? target.value : target
      parentEl.appendChild(el)
      resolve(el)
    })

  const load = () =>
    // eslint-disable-next-line no-async-promise-executor
    new Promise(async (resolve, reject) => {
      if (/\.js$/.test(src)) {
        await loadScript()
      }
      if (/\.css$/.test(src)) {
        await loadCss()
      }
      if (/\.(gif|jpg|jpeg|png|svg|GIF|JPG|PNG|)$/.test(src)) {
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
    }
  }

  if (!manual) load()

  return { resources, load, unload }
}
