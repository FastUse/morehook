import { reactive, ref, Ref } from 'vue-demi'

export interface OptionType {
  itemHeight: number | ((index: number) => number)
  overscan?: number
}

export function useVirtualList<T = any>(state: T[], options: OptionType) {
  let start = 0
  let end = 10
  const list = ref(state.slice(start, end)) as Ref<T[]>
  const { itemHeight, overscan = 5 } = options
  const containerRef = ref<HTMLElement | null>()

  // 获取当前索引向上高度
  const getDistanceTop = (index: number) => {
    if (typeof itemHeight === 'number') {
      const height = index * itemHeight
      return height
    }
    const height = state
      .slice(0, index)
      .reduce((sum, _, i) => sum + itemHeight(i), 0)
    return height
  }

  let offsetTop = getDistanceTop(start)
  const totalHeight = getDistanceTop(state.length)

  // 计算当前视图展示数量
  const getViewCapacity = (containerHeight: number) => {
    if (typeof itemHeight === 'number') {
      return Math.ceil(containerHeight / itemHeight)
    }
    let capacity = 0
    let sum = 0
    for (let i = start; i < state.length; i++) {
      const height = (itemHeight as (index: number) => number)(i)
      sum += height
      if (sum >= containerHeight) {
        capacity = i
        break
      }
    }
    return capacity - start
  }

  // 获取当前索引
  const getOffset = (scrollTop: number) => {
    let offset = 0
    if (typeof itemHeight === 'number') {
      offset = Math.floor(scrollTop / itemHeight) + 1
    } else {
      let sum = 0
      for (let i = 0; i < state.length; i++) {
        const height = itemHeight(i)
        sum += height
        if (sum >= scrollTop) {
          offset = i
          break
        }
      }
      offset += 1
    }
    return offset
  }

  // 计算展示指定位置
  const calculateRange = () => {
    const element = containerRef.value
    if (element) {
      const offset = getOffset(element.scrollTop)
      const viewCapacity = getViewCapacity(element.clientHeight)

      // 一般来说 from 和 to 的差值在20个，可以保证视图正常
      const from = offset - overscan
      const to = offset + viewCapacity + overscan
      start = from < 0 ? 0 : from
      end = to > state.length ? state.length : to

      list.value = state.slice(start, end)

      // 实时计算
      offsetTop = getDistanceTop(start)
      wrapperStyle.marginTop = offsetTop + 'px'
      wrapperStyle.height = totalHeight - offsetTop + 'px'
    }
  }

  // 滚动容器的外层监听
  const containerProps = reactive({
    ref: (ele: any) => {
      containerRef.value = ele
    },
    onScroll: (e: any) => {
      e.preventDefault()
      calculateRange()
    },
    style: { overflowY: 'auto' as const }
  })

  // children 外层包裹器 style
  const wrapperStyle = reactive({
    width: '100%',
    height: totalHeight - offsetTop + 'px',
    marginTop: offsetTop + 'px'
  })

  // 快速滚动到指定 index
  const scrollTo = (index: number) => {
    if (containerRef.value) {
      containerRef.value.scrollTop = getDistanceTop(index)
      calculateRange()
    }
  }

  return {
    list,
    wrapperStyle,
    containerProps,
    scrollTo
  }
}
