/**
 * promise 任务调度
 * 特殊场景下针对于批量请求时会造成堵塞，所以提供一个promise“节流”
 */
export function promiseScheduler(
  max: number
): (fun: () => void) => Promise<void>

export function promiseScheduler(max: number) {
  let count = 0
  const taskList: ((value?: unknown) => void)[] = []

  return async function addTask(fun: () => void) {
    if (count >= max) {
      await new Promise(reslove => taskList.push(reslove))
    }
    count++
    const res = await fun()
    count--
    if (taskList.length) {
      const resloveFun = taskList.shift()
      if (resloveFun) resloveFun()
    }
    return res
  }
}
