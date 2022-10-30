import { Fn, debounce } from '../utils'

const defaultDelay = 1000
/**
 * 处理防抖函数
 * @param fn
 * @param delay
 * @returns
 */
export function useDebounceFn(fn: Fn, delay?: number) {
  const run = debounce(fn, typeof delay === 'number' ? delay : defaultDelay)
  return { run }
}
