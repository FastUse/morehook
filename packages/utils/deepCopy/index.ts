function isValidKey(
  key: string | number | symbol,
  object: object
): key is keyof typeof object {
  return key in object
}

/**
 * 深拷贝
 * 兼容函数，对象，相互引用场景
 * @param target 需要深拷贝的原对象
 * @return 深拷贝后的对象
 */
export function deepCopy<T>(target: T, map?: Map<any, any>): T

export function deepCopy<T>(target: T, map = new Map()) {
  if (target !== null && typeof target === 'object') {
    let res = map.get(target)
    if (res) return res
    if (target instanceof Array) {
      res = []
      map.set(target, res)
      target.forEach((item, index) => {
        res[index] = deepCopy(item, map)
      })
    } else {
      res = {}
      map.set(target, res)
      Object.keys(target).forEach(key => {
        if (isValidKey(key, target)) {
          res[key] = deepCopy(target[key], map)
        }
      })
    }
    return res
  }
  return target
}
