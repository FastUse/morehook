/**
 * 获取唯一的随机字符串
 * @param randomLength 生成的随机字符串长度（最高为12）
 * @return 11位或者12位的字符串，当randomLength小于11时不保证唯一性
 */
export function getRandomStr(randomLength?: number): string

export function getRandomStr(randomLength = 5) {
  return Number(Math.random().toString().slice(3, 8) + Date.now())
    .toString(36)
    .slice(0, randomLength)
}
