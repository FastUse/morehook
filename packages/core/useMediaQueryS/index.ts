import { ref, onUnmounted } from 'vue-demi'

type queryType = {
  [key: string]: string
}

type mqlListType = {
  mql: MediaQueryList
  handleChange: (event: MediaQueryListEvent) => void
}[]

/**
 * 监听多个 mediaQuery 状态
 * @param query 需要监听的阈值对象
 * @returns 返回当前满足value设定的 key
 */
export function useMediaQueryS(query: queryType) {
  const activeKey = ref<string>()
  const mqlList: mqlListType = []
  const queryEntries = Object.entries(query)

  queryEntries.forEach((item, index) => {
    const key = item[0]
    const mediaQueryString = item[1]
    const mql = window.matchMedia(mediaQueryString)

    if (mql.matches) activeKey.value = key
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        activeKey.value = key
      } else {
        if (index !== 0) {
          activeKey.value = queryEntries[index - 1][0]
        }
      }
    }
    mqlList.push({ mql, handleChange })
    mql.addEventListener('change', handleChange)
  })

  onUnmounted(() => {
    mqlList.forEach(item => {
      item.mql.removeEventListener('change', item.handleChange)
    })
  })

  return activeKey
}
