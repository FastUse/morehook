import { useThrottleFn } from '@morehook/core'
import { ref, Ref, watch } from 'vue-demi'

// 默认值
const defaultDelay = 1000

/**
 * 处理节流值
 * 不同于 useThrottleFn,此函数专门用来对某个值的节流变化
 * @param value 监听的源数据
 * @param delay 节流设定时间 (默认 1000)
 * @returns
 */
export function useThrottle<T>(value: Ref<T>, delay?: number) {
  delay = delay || defaultDelay

  const res = ref<T>(value.value) as Ref<T>

  // 利用useDebounceFn来简化处理值
  const { run } = useThrottleFn(() => (res.value = value.value), delay)

  watch(value, () => run(), { deep: true })

  return res
}
