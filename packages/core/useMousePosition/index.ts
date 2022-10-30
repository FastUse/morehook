import { ref, Ref, isRef, onMounted, onBeforeUnmount } from 'vue-demi'

// 分两种 1.点击触发 2.移动触发
// 也分为全局触发和某个元素触发

interface Options {
  type?: 'click' | 'move'
  target?: HTMLElement | Ref<HTMLElement>
  onSuccess?: () => void
}

const defaultOptions = {
  type: 'click',
  target: document.body,
  onSuccess: () => {
    // 成功回调
  }
}

export function useMousePosition(options?: Options): {
  clickX: Ref<number>
  clickY: Ref<number>
}

export function useMousePosition(options?: Options) {
  const { type, target, onSuccess } = { ...defaultOptions, ...options }
  const clickX = ref<number>(-1)
  const clickY = ref<number>(-1)
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
