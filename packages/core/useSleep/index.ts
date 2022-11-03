// type = while
// 优点: 直接调用，无需await这些语法
// 缺点: 采用死循环的方式阻止cpu执行其他任务，包括dom渲染这些都会暂停

// type = await
// 优点: 影响范围缩小
// 缺点: 需要加 async await 这些语法

/**
 * 暂停程序 - 在设定时间后继续执行
 * @param time 暂停的时间
 * @param type 暂停方式 while:整个程序暂停  await:暂停某一块逻辑 (默认 await)
 * @returns 如果是 await 方式则返回promise对象，外层直接await
 * @tips 谨慎选择 while暂停方式，其原理是跑满cpu以至于不能执行其他程序，这意味着你点击其他菜单都不会做出反应
 */
export function useSleep(time: number, type: 'while' | 'await' = 'await') {
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
