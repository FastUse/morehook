type Fn = (...params: any[]) => any

/**
 * 节流
 * @param fn 待执行函数
 * @param delay 节流设定时间
 * @returns 包装后的函数
 */
const throttle = function (this: any, fn: Fn, delay: number) {
  let oldNow = Date.now()
  return (...args: []) => {
    const currNow = Date.now()
    if (currNow - oldNow < delay) return
    oldNow = currNow
    fn.call(this, ...args)
  }
}

const defaultDelay = 1000

/**
 * 处理节流函数
 * @param fn 待执行函数
 * @param delay 节流设定时间 (默认 1000)
 * @returns 包装后的函数
 */
export function useThrottleFn(fn: Fn, delay?: number) {
  const run = throttle(fn, typeof delay === 'number' ? delay : defaultDelay)
  return { run }
}
