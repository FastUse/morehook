import { computed } from 'vue-demi'
import { useRoute, useRouter } from 'vue-router'

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
