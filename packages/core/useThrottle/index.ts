import { useThrottleFn } from '@morehook/core'
import { ref, Ref, watch } from 'vue-demi'

// 默认值
const defaultDelay = 1000

/**
 * 处理节流值
 * @param value
 * @param delay
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
