import { ref, Ref, isRef, onMounted, onUnmounted } from 'vue-demi'
import { isClient } from '../_configurable'

/**
 * onFull: 全屏钩子
 * onExitFull: 退出全屏钩子
 */
interface Options {
  onFull?: () => void
  onExitFull?: () => void
}

/**
 * setFull: 设置全屏
 * exitFull: 退出全屏
 * toggle: 切换是否全屏
 */
interface Actions {
  setFull: () => void
  exitFull: () => void
  toggle: () => void
}

type Target = HTMLElement | (() => HTMLElement) | Ref<HTMLElement>

const defaultOptions = {
  onFull: function () {
    // 全屏钩子
  },
  onExitFull: function () {
    // 退出全屏钩子
  }
}

/**
 * 控制元素全屏
 * @param target 需要全屏的元素(默认 document.body)
 * @param options
 * @returns isFullscreen: 是否全屏状态， actions: 操控是否全屏
 */
export function useFullscreen(
  target?: Target,
  options?: Options
): [isFullscreen: Ref<boolean>, actions: Actions] {
  const actions: Actions = {
    setFull: () => {
      if (!isClient) return
      if (isFullscreen.value) return
      el.requestFullscreen()
      isFullscreen.value = true
    },
    exitFull: () => {
      if (!isClient) return
      if (!isFullscreen.value) return
      document.exitFullscreen()
      isFullscreen.value = false
    },
    toggle: () => {
      if (!isClient) return
      isFullscreen.value ? actions.exitFull() : actions.setFull()
    }
  }

  if (!isClient) return [ref(false), actions]

  const fullScreenElement = !!document.fullscreenElement
  const isFullscreen = ref(fullScreenElement)

  const { onFull, onExitFull } = { ...defaultOptions, ...options }

  let el: HTMLElement = document.body

  const getEl = () => {
    if (typeof target === 'function') {
      return target()
    }
    return isRef(target) ? target.value : target
  }

  const handler = () => {
    isFullscreen.value = !!document.fullscreenElement
    if (isFullscreen.value) {
      onFull()
    } else {
      onExitFull()
    }
  }

  onMounted(() => {
    el = getEl() || el
    el.addEventListener('fullscreenchange', handler)
  })

  onUnmounted(() => {
    el.removeEventListener('fullscreenchange', handler)
  })

  return [isFullscreen, actions]
}
