import { computed } from 'vue-demi'
import { useRoute, useRouter } from 'vue-router'

/**
 * 获取vueRouter query
 * 修改返回的state可直接修改url中的query
 * @param key query中的参数key
 * @returns query中的参数key代表的value
 */
export function useRouteQuery(key?: string) {
  const route = useRoute()
  const router = useRouter()

  if (key) {
    return computed({
      get: () => {
        return route.query[key]
      },
      set: val => {
        router.replace({ query: { ...route.query, [key]: val } })
      }
    })
  } else {
    return computed<any>({
      get: () => {
        return route.query
      },
      set: val => {
        router.replace({ query: { ...route.query, ...val } })
      }
    })
  }
}
