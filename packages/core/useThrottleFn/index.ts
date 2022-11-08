type Fn = (...params: any[]) => any

/**
 * 节流
 * @param fn 待执行函数
 * @param delay 节流设定时间
 * @returns 包装后的函数
 */
// const throttle = function (this: any, fn: Fn, delay: number) {
//   let oldNow = Date.now()
//   return (...args: []) => {
//     const currNow = Date.now()
//     if (currNow - oldNow < delay) return
//     oldNow = currNow
//     fn.call(this, ...args)
//   }
// }

/**
 * 节流
 * @param fn 待执行函数
 * @param delay 节流设定时间
 * @param runLastFn 是否在节流过期时执行最后一次被拦住的方法
 * @returns 包装后的函数
 */
const throttle = function (
  this: any,
  fn: Fn,
  delay: number,
  runLastFn = false
) {
  let oldNow = Date.now()
  let lastFn = () => {
    // 最后拦住的方法
  }
  let timmer: NodeJS.Timeout | null = null

  return (...args: []) => {
    const currNow = Date.now()

    if (currNow - oldNow < delay) {
      if (runLastFn) {
        lastFn = fn
        timmer && clearInterval(timmer)
        timmer = setInterval(() => {
          lastFn.call(this, ...args)
          timmer && clearInterval(timmer)
        }, delay)
      }
    } else {
      if (runLastFn && timmer) clearInterval(timmer)
      oldNow = currNow
      fn.call(this, ...args)
    }
  }
}

const defaultDelay = 1000

/**
 * 处理节流函数
 * @param fn 待执行函数
 * @param delay 节流设定时间 (默认 1000)
 * @param runLastFn 是否在节流过期时执行最后一次被拦住的方法
 * @returns 包装后的函数
 */
export function useThrottleFn(fn: Fn, delay?: number, runLastFn = false) {
  const run = throttle(
    fn,
    typeof delay === 'number' ? delay : defaultDelay,
    runLastFn
  )
  return { run }
}
