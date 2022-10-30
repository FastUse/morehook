import { ref, readonly } from 'vue-demi'
import dayjs from 'dayjs'

const defaultOptions = {
  format: 'YYYY-MM-DD HH:mm:ss',
  method: 'format'
}

type Value = string | number | Date

interface Options {
  format?: string
  method?:
    | 'format' // 返回默认格式化
    | 'timestamp' // 返回时间戳
    | 'millisecond'
    | 'second'
    | 'minute'
    | 'hour'
    | 'date'
    | 'day'
    | 'month'
    | 'year'
  methodParam?: number
}

export function useDate(
  options?: Options,
  value?: Value | undefined
): {
  readonly data: any
  refresh: (refreshValue?: Value) => void
}

export function useDate(options?: Options, initialValue?: Value) {
  const state = ref<string | number>()

  const { format, method, methodParam } = { ...defaultOptions, ...options }

  const refresh = (value: Value = +new Date()) => {
    switch (method) {
      case 'format':
        state.value = dayjs(value).format(format)
        break
      case 'timestamp':
        state.value = +dayjs(value)
        break
      case undefined:
        break
      default: {
        let data: any = dayjs(value)
        data = data[method](methodParam)
        if (options && options.format) {
          data = data.format(format)
        }
        state.value = data
      }
    }
  }

  refresh(initialValue || +new Date())

  const data = readonly(state)

  return { data, refresh }
}
