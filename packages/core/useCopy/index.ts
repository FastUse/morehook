import { ref, Ref, watch } from 'vue-demi'

// 警告: 此api必须在网页聚焦时才能正常使用

interface Options {
  onSuccess?: (str: Str) => void
  onError?: (str: Str) => void
}
type Str = undefined | string | number | boolean | object | (() => void)

const defaultOptions = {
  onSuccess: () => {
    // 成功回调
  },
  onError: () => {
    // 失败回调
  }
}

export function useCopy(str: Str, options?: Options): Ref<Str>

export function useCopy(str: Str, options?: Options) {
  const state = ref<Str>()
  const { onSuccess, onError } = { ...defaultOptions, ...options }
  state.value = str

  const writeText = (str: Str) => {
    str = typeof str === 'object' ? JSON.stringify(str) : String(str)
    navigator.clipboard.writeText(str).then(
      () => {
        onSuccess(str)
      },
      err => {
        const errStr = `发生错误: ${err},必须要保持网页焦点才能复制`
        console.log(errStr)
        onError(errStr)
      }
    )
  }

  writeText(str)

  watch(state, val => {
    writeText(val)
  })

  return state
}
