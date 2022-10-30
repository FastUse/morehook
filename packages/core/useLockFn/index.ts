import { ref } from 'vue-demi'

type ArgsAny = any[]

type Fn = (...args: ArgsAny) => Promise<any>

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
