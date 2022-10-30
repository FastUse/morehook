import { ref, onUnmounted } from 'vue-demi'

type queryType = {
  [key: string]: string
}

type mqlListType = {
  mql: MediaQueryList
  handleChange: (event: MediaQueryListEvent) => void
}[]

// 使用示例
// const query = {
//   xs: '(max-width:500px)',
//   sm: '(min-width:500px)',
//   md: '(min-width:700px)',
//   lg: '(min-width:900px)',
//   xl: '(min-width:1100px)',
//   xxl: '(min-width:1300px)'
// }
// const queryKey = useMediaQueryS(query)

// watch(
//   queryKey,
//   value => {
//     console.log('value', value)
//   },
//   { immediate: true }
// )

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
