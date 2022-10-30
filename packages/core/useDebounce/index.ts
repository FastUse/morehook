import { useDebounceFn } from '@morehook/core'
import { ref, Ref, watch } from 'vue-demi'

// 默认值
const defaultDelay = 1000

/**
 * 处理防抖值 - 连续触发只会更新一次值
 * @param fn 待执行函数
 * @param delay 防抖时间
 * @param firstTrigger 是否需要首次点击时立即触发(这里的首次指的并不是第一次，每当防抖时间过了都会刷新首次) (默认 false)
 * @returns
 */
export function useDebounce<T>(
  value: Ref<T>,
  delay?: number,
  firstTrigger = false
) {
  delay = delay || defaultDelay

  const res = ref<T>(value.value) as Ref<T>

  const { run } = useDebounceFn(
    () => (res.value = value.value),
    delay,
    firstTrigger
  )

  watch(value, () => run(), { deep: true })

  return res
}
