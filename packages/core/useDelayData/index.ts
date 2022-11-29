import { ref, watch, type Ref } from 'vue-demi'

/**
 * 对传入的布尔值镜像一个带有延迟的布尔值
 *
 * 主要场景：自定义弹框的打开和进入会有一个过渡，所以会产生两个状态，点击按钮设置弹框打开，
 * 但是应该还有一个打开动画后弹框完全显示的状态，此hook解决的就是此类场景
 * @param data 真实控制值
 * @param delayTime 延迟的时间
 */
export function useDelayData(
  data: Ref<boolean>,
  delayTime?: number
): { realData: Ref<boolean>; delayData: Ref<boolean> }

export function useDelayData(data: Ref<boolean>, delayTime = 500) {
  const realData = ref(data.value)
  const delayData = ref(data.value)

  watch(data, newVal => {
    if (newVal) {
      // 打开
      realData.value = true
      setTimeout(() => {
        delayData.value = true
      }, 20)
    } else {
      // 关闭
      delayData.value = false
      setTimeout(() => {
        realData.value = false
      }, delayTime)
    }
  })

  return { realData, delayData }
}
