import { ref, Ref, isRef, onMounted, onBeforeUnmount } from 'vue-demi'
import { isClient, defaultWindow } from '../_configurable'

// 分两种 1.点击触发 2.移动触发
// 也分为全局触发和某个元素触发

/**
 * type: click(点击触发) move(移动触发) (默认 click)
 * target: 触发的元素 (默认 document.body)
 */
interface Options {
  type?: 'click' | 'move'
  target?: HTMLElement | Ref<HTMLElement>
  onSuccess?: () => void
}

const defaultOptions = {
  type: 'click',
  target: defaultWindow ? defaultWindow.document.body : undefined,
  onSuccess: () => {
    // 成功回调
  }
}

/**
 * 捕捉鼠标方位
 * 分两种 1.点击触发 2.移动触发
 * 也分为全局触发和某个元素触发
 * @param options Options
 */
export function useMousePosition(options?: Options): {
  pageX: Ref<number>
  pageY: Ref<number>
  offsetX: Ref<number>
  offsetY: Ref<number>
}

export function useMousePosition(options?: Options) {
  const { type, target, onSuccess } = { ...defaultOptions, ...options }
  const pageX = ref<number>(-1)
  const pageY = ref<number>(-1)
  const offsetX = ref<number>(-1)
  const offsetY = ref<number>(-1)

  if (!isClient || !target) {
    return {
      pageX,
      pageY,
      offsetX,
      offsetY
    }
  }

  let elm = target

  const handler = (event: MouseEvent) => {
    pageX.value = event.pageX
    pageY.value = event.pageY
    offsetX.value = event.offsetX
    offsetY.value = event.offsetY
    onSuccess()
  }

  onMounted(() => {
    elm = isRef(target) ? target.value : target
    if (type === 'click') {
      elm.addEventListener('click', handler)
    } else {
      elm.addEventListener('mousemove', handler)
    }
  })

  onBeforeUnmount(() => {
    elm = isRef(target) ? target.value : target
    elm.removeEventListener('click', handler)
    elm.removeEventListener('mousemove', handler)
  })

  return { pageX, pageY, offsetX, offsetY }
}
