import { defineComponent, ref, type PropType } from 'vue'
import { createNamespace, extend } from '../../_utils'
import './index.scss'

const [name] = createNamespace('small-button')

const smallBtnDefaultText = ref<any>(
  '我是smallBtn默认填充值，可以通过hook更改：'
)
export const useSmallBtn = () => {
  console.log('调用了：useSmallBtn')
  return { smallBtnDefaultText }
}

const smallBtnProps = extend(
  {},
  {
    text: {
      type: Function as PropType<() => JSX.Element>,
      default: () => <div>我是smallBtn</div>
    }
  }
)

export const SmallButton = defineComponent({
  name,

  props: smallBtnProps,

  emits: ['click'],

  setup(props, { emit, slots }) {
    const renderText = () => {
      return (
        <span class="text">
          {slots.default ? slots.default() : props.text()}
        </span>
      )
    }

    const onClick = (event: MouseEvent) => {
      emit('click', event)
    }

    return () => (
      <div class="small-button-body" onClick={onClick}>
        <div class="content">
          {smallBtnDefaultText.value}
          {renderText()}
        </div>
      </div>
    )
  }
})
