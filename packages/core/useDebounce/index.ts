import { useDebounceFn } from '@morehook/core'
import { ref, Ref, watch } from 'vue-demi'

// 默认值
const defaultDelay = 1000

/**
 * 处理防抖值
 * @param value
 * @param delay
 * @returns
 */
export function useDebounce<T>(value: Ref<T>, delay?: number) {
  delay = delay || defaultDelay

  const res = ref<T>(value.value) as Ref<T>

  const { run } = useDebounceFn(() => (res.value = value.value), delay)

  watch(value, () => run(), { deep: true })

  return res
}
