import {
  defineComponent,
  computed,
  ref,
  watch,
  type CSSProperties,
  type ExtractPropTypes
} from 'vue'
import {
  fakeProp,
  truthProp,
  makeStringProp,
  makeNumberProp,
  createNamespace,
  extend
} from '../_utils'
import './index.scss'
import { splitNumRandom } from '@morehook/utils'
import { useDelayData } from '@morehook/core'

const [name, bem] = createNamespace('dynamicLoading')

export type DynamicLoadingProps = ExtractPropTypes<typeof dynamicLoadingProps>
export const dynamicLoadingProps = extend(
  {},
  {
    modelValue: fakeProp,

    text: makeStringProp<string>('报告马上到达，请稍等...'),

    closeable: truthProp, // 是否展示关闭按钮

    // ----- 真实进度 -----
    realRrogress: makeNumberProp<number>(0), // 实时进度
    realSumRrogress: makeNumberProp<number>(100), // 总进度值
    realEndDisable: truthProp, // 是否在实时进度达到总进度时自动关闭

    // ----- 假进度 -----
    isFakeProgress: truthProp, // 是否开启假进度
    fakeRigthNull: truthProp, // 是否在右侧始终留着的一段空白(只针对假进度)
    fakeProgressEndTime: makeNumberProp<number>(10), // 假进度的情况最长需要 loading多久,默认10s (超出10s会更换文案)(最好是0.5的倍数)
    fakeProgressBackText: makeStringProp<string>('遇到点问题啦，请稍等...') // 假进度的情况的备用文案
  }
)

export default defineComponent({
  name,

  props: dynamicLoadingProps,

  emits: ['close', 'update:modelValue'],

  setup(props, { emit }) {
    // ---------------- 假进度相关 ----------------
    const fakeProgressRate = 0.5 // 假进度的速率,这里表示 0.5 秒运动一次
    const randowFakeRound = ref<number[]>([]) // 假进度的范围数组
    const randowFakeIndex = ref(0) // 假进度 - 当前所在下标

    let fakeTimmer: NodeJS.Timeout | null = null
    watch(
      () => props.modelValue,
      val => {
        if (val) {
          randowFakeIndex.value = 0
          randowFakeRound.value = splitNumRandom(
            props.fakeRigthNull ? 90 : 100,
            props.fakeProgressEndTime / fakeProgressRate
          )
          startFakeProgress()
        } else {
          setTimeout(() => {
            randowFakeIndex.value = 0
          }, fakeProgressRate * 1000)
          clearFakeTimmer()
        }
      },
      { immediate: true }
    )
    /**
     * 开始假进度条的动画
     */
    function startFakeProgress() {
      clearFakeTimmer()
      fakeTimmer = setInterval(() => {
        if (randowFakeIndex.value === randowFakeRound.value.length) {
          clearFakeTimmer()
          return
        }
        randowFakeIndex.value += 1
      }, fakeProgressRate * 1000)
    }
    /**
     * 清空假进度条的 time 对象
     */
    function clearFakeTimmer() {
      if (fakeTimmer) {
        clearInterval(fakeTimmer)
        fakeTimmer = null
      }
    }

    // ---------------- 公共处理 ----------------
    const _visible = computed(() => props.modelValue)
    const { realData, delayData } = useDelayData(_visible, 500)

    // 进度条当前长度
    const progressCurrentNum = computed(() => {
      const sum = props.isFakeProgress
        ? randowFakeRound.value
            .slice(0, randowFakeIndex.value)
            .reduce((pre, item) => (pre += item), 0)
        : props.realSumRrogress

      let num = '0%'
      if (props.isFakeProgress) {
        num =
          randowFakeIndex.value === randowFakeRound.value.length
            ? `${props.fakeRigthNull ? 90 : 100}%`
            : `${sum}%`
      } else {
        if (props.realRrogress >= props.realSumRrogress) {
          props.realEndDisable && onClose()
          num = `100%`
        } else {
          num = `${props.realRrogress * (100 / props.realSumRrogress)}%`
        }
      }
      return num
    })

    // 图片的 style
    const getImgHaveStyles = (): CSSProperties => ({
      left: progressCurrentNum.value
    })
    // 滑块的 style
    const getProgressHaveStyles = (): CSSProperties => ({
      width: progressCurrentNum.value
    })

    // 底部提示文字
    const displayText = computed(() => {
      if (props.isFakeProgress) {
        return randowFakeRound.value.length === randowFakeIndex.value
          ? props.fakeProgressBackText
          : props.text
      } else {
        return props.text
      }
    })
    /**
     * 关闭loading
     */
    function onClose(event?: MouseEvent) {
      event?.stopPropagation()
      emit('update:modelValue', false)
      emit('close', event)
    }

    const renderLoading = () => {
      const { closeable } = props
      const CloseIcon = closeable && (
        <div class={bem('close')} onClick={onClose}>
          X
        </div>
      )

      return (
        <div class={[bem('body')]}>
          <div
            class={[
              bem('gray-bg'),
              bem('gray-bg', [delayData.value ? 'display' : 'no-display'])
            ]}
          />
          <div
            class={bem('content')}
            style={{ opacity: delayData.value ? 1 : 0 }}
          >
            <div class={bem('progress')}>
              {CloseIcon}
              <img
                class={bem('img')}
                style={getImgHaveStyles()}
                src="/loading.gif"
              />
              <div
                class={bem('progress', ['have'])}
                style={getProgressHaveStyles()}
              />
            </div>
            <div class={bem('text')}>{displayText.value}</div>
          </div>
        </div>
      )
    }

    return () => <div>{realData.value ? renderLoading() : null}</div>
  }
})
