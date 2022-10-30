import { Ref, isRef, reactive, onMounted, onUnmounted, toRefs } from 'vue-demi'

type Target = HTMLElement | Ref<HTMLElement> | (() => HTMLElement) | Document

// 兼容性问题: https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getSelection

const defaultReact = {
  left: NaN,
  right: NaN,
  top: NaN,
  bottom: NaN,
  height: NaN,
  width: NaN
}

export function useTextSelection(target: Target = document) {
  const state = reactive({
    text: '',
    rect: defaultReact
  })

  let el: HTMLElement | Document = document

  const getEl = () => {
    if (typeof target === 'function') {
      return target()
    }
    return isRef(target) ? target.value : target
  }

  const getRect = (selection: Selection | null) => {
    if (!selection) return defaultReact
    const range = selection.getRangeAt(0)
    // 获取到的 数据是相对于视图的左上角计算的(除 height，width外)
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
    const { height, width, top, left, right, bottom } =
      range.getBoundingClientRect()
    return {
      height,
      width,
      top,
      left,
      right,
      bottom
    }
  }

  const handleMouseup = () => {
    const currSelection: Selection | null = window.getSelection()
    const text = currSelection ? currSelection.toString() : ''
    const rect = getRect(currSelection)

    state.text = text
    state.rect = rect
  }

  const handleMousedown = () => {
    if (state.text) {
      state.text = ''
      state.rect = defaultReact
    }
    const currSelection: Selection | null = window.getSelection()
    if (!currSelection) return
    currSelection.removeAllRanges() // 移除缓存
  }

  onMounted(() => {
    el = getEl()
    el.addEventListener('mouseup', handleMouseup)
    document.addEventListener('mousedown', handleMousedown)
  })

  onUnmounted(() => {
    el.removeEventListener('mouseup', handleMouseup)
    document.removeEventListener('mousedown', handleMousedown)
  })

  return toRefs(state)
}
