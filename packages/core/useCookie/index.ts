import Cookies from 'js-cookie'
import { ref, watch as vueWatch } from 'vue-demi'

/**
 * watch: 是否监听返回值来更改 cookie 的值(默认 false)
 * defaultValue: 给返回值定义默认值
 * expires: 过期时间 (默认cookie有效期截止至用户退出浏览器)
 * path: 此cookie对哪个地址可见(默认为 /)
 * domain: 此cookie对哪个域名可见(默认为对创建此cookie的域名和子域名可见)
 * secure: cookie传输是否仅支持https (默认不支持)
 * sameSite: 限制第三方 cookie,减少安全风险(https://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html)
 */
interface Options {
  watch?: boolean
  defaultValue?: string | undefined
  expires?: number | Date
  path?: string
  domain?: string
  secure?: boolean
  sameSite?: 'strict' | 'lax' | 'none'
}

const defaultOptions = {
  watch: false,
  defaultValue: undefined
}

/**
 * 操作 cookie
 * @param key 获取 cookie 的 key
 * @param options 基础配置（见上面的 Options 接口）
 * @returns 返回 cookie 的值
 */
export function useCookie(key: string, options?: Options) {
  const { watch, defaultValue } = { ...defaultOptions, ...options }

  const state = ref(Cookies.get(key) || defaultValue)

  const setCookie = (value: any) => {
    Cookies.set(key, value, { ...options })
    state.value = value
  }

  if (watch) {
    vueWatch(
      state,
      value => {
        if (value === null || value === undefined) {
          Cookies.remove(key)
          return
        }
        setCookie(value)
      },
      { deep: true }
    )
  }
  return state
}
