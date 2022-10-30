type Fn = (...params: any[]) => any

/**
 * 防抖 - 连续点击只会执行一次
 * @param fn 待执行函数
 * @param delay 防抖时间
 * @param firstTrigger 是否需要首次点击时立即触发(这里的首次指的并不是第一次，每当防抖时间过了都会刷新首次)
 * @returns
 */
const debounce = function (
  this: any,
  fn: Fn,
  delay: number,
  firstTrigger = false
) {
  let timeer: NodeJS.Timeout | null = null
  return (...arg: []) => {
    if (firstTrigger) {
      fn.call(this, ...arg)
      firstTrigger = false
    }
    if (timeer) clearTimeout(timeer)
    timeer = setTimeout(() => {
      fn.call(this, ...arg)
      firstTrigger = true
    }, delay)
  }
}

const defaultDelay = 1000

/**
 * 处理防抖函数
 * @param fn
 * @param delay 防抖间隔 (默认 1000)
 * @param firstTrigger 是否需要首次点击时立即触发(这里的首次指的并不是第一次，每当防抖时间过了都会刷新首次)
 * @returns
 */
export function useDebounceFn(fn: Fn, delay?: number, firstTrigger = false) {
  const run = debounce(
    fn,
    typeof delay === 'number' ? delay : defaultDelay,
    firstTrigger
  )
  return { run }
}
