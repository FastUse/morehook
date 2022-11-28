/**
 * 根据给定的总数和位数得到固定位数的随机值的数组
 *
 * ps: splitNumRandom(10, 3) => [1, 5, 4]
 * @param total 总数
 * @param n 切割成多少位
 * @return 固定位数，但是值是随机的数组
 */
export function splitNumRandom(total: number, n: number): number[]

export function splitNumRandom(total: number, n: number) {
  // 1. 先按照平均的方式来创建数值平均的数组
  // 2. 再对每个值来随机减，这个减去的值会随机的附在其他位数的数值上
  // 不同于从第一位随机的方式，这种更加随机

  const res = Array.from({ length: n }, () => Math.floor(total / n))
  const resSum = res.reduce((pre, item) => (pre += item), 0)

  // 如果数组总数和总数不一致，那么将剩下的数随机放到任意一位上
  if (resSum !== total) {
    const index = Math.floor(Math.random() * n)
    const randowNum = res[index]
    res[index] = randowNum + (total - resSum)
  }

  for (let i = 0; i < res.length; i++) {
    const randomIndex = Math.floor(Math.random() * n)
    const minus = Math.floor(Math.random() * res[i])
    res[i] -= minus
    res[randomIndex] += minus
  }

  return res
}
