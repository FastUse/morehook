type Fn = (...params: any[]) => any

type Serializer<T> = {
  read(raw: string): T
  write(value: T): string
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
  return defaultValue === null
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

export { TypeSerializers, getValueType }

export type { Fn }
