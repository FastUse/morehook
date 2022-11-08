import { ref, watch } from 'vue-demi'
import { isClient } from '../_configurable'

/**
 * onSuccess: 成功回调
 * onError: 失败回调
 */
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

/**
 * 控制 剪切板内容
 * 警告: 必须在网页聚焦时才能正常使用
 * @param str 剪切板初始化时的内容
 * @param options 如上 Options
 */
export function useCopy(str?: Str, options?: Options) {
  const state = ref<Str>()
  const { onSuccess, onError } = { ...defaultOptions, ...options }
  state.value = str || ''

  const writeText = (str: Str) => {
    if (!isClient) {
      onError('请在window环境下使用')
      return
    }

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
