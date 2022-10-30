import dayjs from 'dayjs'
import { ref, readonly } from 'vue-demi'

const defaultOptions = {
  format: 'YYYY-MM-DD HH:mm:ss',
  method: 'format'
}

type Value = string | number | Date

/**
 * format: 针对日期格式化（默认 YYYY-MM-DD HH:mm:ss）
 * method: 获取时间的操作方法（默认 format）
 * methodParam: 针对获取到的时间 (例如 dayjs().hour(methodParam = 10) 就是将获取到的时间中小时时间设置为10)
 * 注意：比如说 method 设为 hour，methodParam 不设置时，dayjs返回的是当前小时数(比如当前是10点则返回10)
 */
interface Options {
  format?: string
  method?:
    | 'format' // 返回默认全部时间
    | 'timestamp' // 返回时间戳
    | 'millisecond' // 只返回毫秒
    | 'second' // 只返回秒
    | 'minute' // 只返回分钟 后面以此类推..
    | 'hour'
    | 'date'
    | 'day'
    | 'month'
    | 'year'
  methodParam?: number
}

/**
 * 操作时间（内部使用了 dayjs）
 * @param options
 * @param initialValue 初始时间
 */
export function useDate(
  options?: Options,
  initialValue?: Value | undefined
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

        // 如果是时间格式则格式化
        // (因为当 method = hour 且 methodParam 不传时 data 会为 10 (假设当前时间为 10点), 10进行类型转换则会报错)
        if (dayjs.isDayjs(data)) {
          data = data.format(format)
        }
        // if (options && options.format) {
        //   data = data.format(format)
        // }
        state.value = data
      }
    }
  }

  refresh(initialValue || +new Date())

  const data = readonly(state)

  return { data, refresh }
}
