import { ref } from 'vue-demi'

type ArgsAny = any[]

type Fn = (...args: ArgsAny) => Promise<any> | void

/**
 * 给函数设置单行道，只有此函数执行完毕才能执行下一个
 * @param fn 需要执行的函数
 * @returns 返回待执行函数
 */
export function useLockFn(fn: Fn) {
  const lock = ref(false)

  return async (...args: ArgsAny) => {
    if (lock.value) return
    lock.value = true
    try {
      const ret = await fn(...args)
      lock.value = false
      return ret
    } catch (error) {
      lock.value = false
      throw error
    }
  }
}
