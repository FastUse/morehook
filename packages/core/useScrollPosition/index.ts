import { ref, Ref, isRef, onMounted, onBeforeUnmount, watch } from 'vue-demi'
import { isClient, defaultWindow } from '../_configurable'

/**
 * target: 需要获取滚动量的元素 (默认 )
 */
interface Options {
  target?: HTMLElement | Ref<HTMLElement>
}

const defaultOptions = {
  target: defaultWindow
}

/**
 * 获取scroll 的Y轴滚动量
 * 分为全局触发和某个元素触发
 * @param options Options
 * @return scrollY: 当更改此值时会直接滚动到目标区域
 */
export function useScrollPosition(options?: Options) {
  const scrollY = ref<number>(-1)

  if (!isClient) {
    return { scrollY }
  }

  const { target } = { ...defaultOptions, ...options }
  const isSpot = !!options?.target // 是否指定了元素
  let elm = target

  const handler = (event: Event) => {
    if (isSpot) {
      scrollY.value = (event.target as HTMLElement).scrollTop
    } else {
      scrollY.value =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop
    }
  }

  onMounted(() => {
    elm = isRef(target) ? target.value : target
    elm && elm.addEventListener('scroll', handler)
  })

  onBeforeUnmount(() => {
    elm = isRef(target) ? target.value : target
    elm && elm.removeEventListener('scroll', handler)
  })

  watch(scrollY, val => {
    ;(elm as any).scrollTo(0, val)
  })

  return { scrollY }
}
