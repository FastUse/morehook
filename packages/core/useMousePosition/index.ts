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
 * @return clickX: x坐标 clickY: y坐标
 */
export function useMousePosition(options?: Options): {
  clickX: Ref<number>
  clickY: Ref<number>
}

export function useMousePosition(options?: Options) {
  const { type, target, onSuccess } = { ...defaultOptions, ...options }
  const clickX = ref<number>(-1)
  const clickY = ref<number>(-1)

  if (!isClient || !target) {
    return {
      clickX,
      clickY
    }
  }

  let elm = target

  const handler = (event: MouseEvent) => {
    clickX.value = event.pageX
    clickY.value = event.pageY
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

  return { clickX, clickY }
}
