import { ref, onUnmounted } from 'vue-demi'
import { isClient } from '../_configurable'

/**
 * 监听 mediaQuery 状态
 * 此 hook 只针对单个监听，useMediaQueryS支持多个
 * @param query 需要监听的阈值
 * @returns 返回是否满足设定值
 */
export function useMediaQuery(query: string) {
  if (!isClient) return ref(false)

  const mediaQuery = window.matchMedia(query)
  const stata = ref<boolean>(mediaQuery.matches)

  const handleChange = (event: MediaQueryListEvent) =>
    (stata.value = event.matches)

  mediaQuery.addEventListener('change', handleChange)

  onUnmounted(() => {
    mediaQuery.removeEventListener('change', handleChange)
  })

  return stata
}
