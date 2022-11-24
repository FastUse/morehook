import { ref, onMounted, watch, onUnmounted, isRef, type Ref } from 'vue-demi'
import { useBoolean } from '@morehook/core'

type ArgsAny = any[]
type Fn = (...args: ArgsAny) => Promise<any> | void

interface FnHook {
  timeReset?: Fn
  timeEnd?: Fn
  timeStart?: Fn
  timeStop?: Fn
}
interface Actions {
  setTimeReset: (time: number) => void
  setTimeToggle: () => void
  setTimeOn: () => void
  setTimeOff: () => void
}

export function useTimeDown(
  timeCount?: number | Ref<number>,
  hook?: FnHook,
  autoStart?: boolean
): [Ref<number>, Actions]

export function useTimeDown(
  timeCount: number | Ref<number> = ref(60),
  hook?: FnHook,
  autoStart = false
) {
  onUnmounted(clearTimmer)
  onMounted(() => {
    if (timeState.value === true) {
      startTimmer()
    }
  })

  const [
    timeState,
    {
      toggle: setTimeStateToggle,
      setTrue: setTimeStateTrue,
      setFalse: setTimeStateFalse
    }
  ] = useBoolean(autoStart)

  watch(timeState, val => {
    if (val) {
      startTimmer()
      hook?.timeStart?.()
    } else {
      clearTimmer()
      hook?.timeStop?.()
    }
  })

  const _timeCount = ref(isRef(timeCount) ? timeCount.value : timeCount)

  let _timmer: NodeJS.Timeout | null = null
  /**
   * 开始倒计时
   */
  function startTimmer() {
    if (_timmer) clearTimmer()
    _timmer = setInterval(() => {
      if (_timeCount.value === 0) {
        hook?.timeEnd?.()
        clearTimmer()
        return
      }
      _timeCount.value -= 1
    }, 1000)
  }
  /**
   * 清除 timmer 对象
   */
  function clearTimmer() {
    _timmer && clearInterval(_timmer)
    _timmer = null
  }

  /**
   * 重置 time
   * @param time 重置值
   */
  function setTimeReset(time: number) {
    if (time) {
      _timeCount.value = time
      startTimmer()
    }
  }

  const actions: Actions = {
    setTimeReset,
    setTimeToggle: setTimeStateToggle,
    setTimeOn: setTimeStateTrue,
    setTimeOff: setTimeStateFalse
  }
  return [_timeCount, actions]
}
