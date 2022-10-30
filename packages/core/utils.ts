type Fn = (...params: any[]) => any

type Serializer<T> = {
  read(raw: string): T
  write(value: T): string
}

/**
 * 节流
 * @param fn
 * @param delay
 * @returns
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

/**
 * 防抖+节流
 * @param fn
 * @param DBdelay
 * @param TRdelay
 * @returns
 */
const throttleAndDeBounce = function (
  this: any,
  fn: Fn,
  DBdelay: number,
  TRdelay: number
) {
  let oldNow = Date.now()
  let timer: NodeJS.Timeout | null = null
  return (...args: []) => {
    const currNow = Date.now()
    if (currNow - oldNow < TRdelay) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        oldNow = currNow
        fn.call(this, ...args)
      }, DBdelay)
      return
    }
    oldNow = currNow
    fn.call(this, ...args)
  }
}

/**
 * 按照类型格式数据的常量Map
 */
const TypeSerializers: Record<
  'boolean' | 'object' | 'number' | 'any' | 'string',
  Serializer<any>
> = {
  boolean: {
    read: (v: any) => (v != null ? v === 'true' : null),
    write: (v: any) => String(v)
  },
  object: {
    read: (v: any) => (v ? JSON.parse(v) : null),
    write: (v: any) => JSON.stringify(v)
  },
  number: {
    read: (v: any) => (v != null ? Number.parseFloat(v) : null),
    write: (v: any) => String(v)
  },
  any: {
    read: (v: any) => (v != null && v !== 'null' ? v : null),
    write: (v: any) => String(v)
  },
  string: {
    read: (v: any) => (v != null ? v : null),
    write: (v: any) => String(v)
  }
}

/**
 * 获取数据类型
 * @param defaultValue
 * @returns
 */
const getValueType = (defaultValue: unknown) => {
  return defaultValue == null
    ? 'any'
    : typeof defaultValue === 'boolean'
    ? 'boolean'
    : typeof defaultValue === 'string'
    ? 'string'
    : typeof defaultValue === 'object'
    ? 'object'
    : Array.isArray(defaultValue)
    ? 'object'
    : !Number.isNaN(defaultValue)
    ? 'number'
    : 'any'
}

/**
 * 一定范围内的随机数生成
 */
const getRandomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export {
  throttle,
  throttleAndDeBounce,
  TypeSerializers,
  getValueType,
  getRandomNum
}

export type { Fn }
