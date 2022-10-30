import { ref, isRef, Ref, onUnmounted } from 'vue-demi'
import { Fn } from '../utils'

export function useTimeout(
  fn: Fn,
  delay: number | Ref<number | undefined | null>
) {
  const state = isRef(delay) ? delay : ref(delay)

  const timer: null | NodeJS.Timeout = null

  const clear = () => timer && clearTimeout(timer)

  const handler = () => {
    if (state.value === undefined || state.value === null) return
    fn()
  }

  const run = () => {
    if (state.value === undefined || state.value === null) {
      clear()
      return
    }
    setTimeout(handler, state.value)
  }

  run()
  onUnmounted(() => clear())
}
