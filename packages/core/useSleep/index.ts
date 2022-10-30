// type = while
// 优点: 直接调用，无需await这些语法
// 缺点: 采用死循环的方式阻止cpu执行其他任务，包括dom渲染这些都会暂停

// type = await
// 优点: 影响范围缩小
// 缺点: 需要加 async await 这些语法

export function useSleep(time: number, type: 'while' | 'await' = 'while') {
  if (type === 'while') {
    const start = Date.now()
    const end = start + time
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (Date.now() > end) {
        return
      }
    }
  } else {
    return new Promise(resolve => setTimeout(resolve, time))
  }
}
