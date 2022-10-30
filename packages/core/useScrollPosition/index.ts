import { ref, Ref, isRef, onMounted, onBeforeUnmount, watch } from 'vue-demi'

// 分为全局触发和某个元素触发

interface Options {
  target?: HTMLElement | Ref<HTMLElement>
}

const defaultOptions = {
  target: window
}

export function useScrollPosition(options?: Options): {
  scrollY: Ref<number>
}

export function useScrollPosition(options?: Options) {
  const { target } = { ...defaultOptions, ...options }
  const isSpot = !!options?.target // 是否指定了元素
  const scrollY = ref<number>(-1)
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
    elm.addEventListener('scroll', handler)
  })

  onBeforeUnmount(() => {
    elm = isRef(target) ? target.value : target
    elm.removeEventListener('scroll', handler)
  })

  watch(scrollY, val => {
    ;(elm as any).scrollTo(0, val)
  })

  return { scrollY }
}
