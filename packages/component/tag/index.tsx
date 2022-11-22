import {
  defineComponent,
  type PropType,
  type CSSProperties,
  type ExtractPropTypes
} from 'vue'
import { truthProp, makeStringProp, createNamespace, extend } from '../_utils'
import type { TagType, TagSize } from './types'
import './index.scss'

const [name, bem] = createNamespace('tag')

type tagProps = ExtractPropTypes<typeof tagProps>
const tagProps = extend(
  {},
  {
    size: String as PropType<TagSize>,
    mark: Boolean,
    show: truthProp,
    type: makeStringProp<TagType>('default'),
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String,
    closeable: Boolean
  }
)

export const Tag = defineComponent({
  name,

  props: tagProps,

  emits: ['close'],

  setup(props, { slots, emit }) {
    const renderText = () => {
      const text = slots.default ? slots.default() : ''
      return <span>{text}</span>
    }

    const onClose = (event: MouseEvent) => {
      event.stopPropagation()
      emit('close', event)
    }

    const getStyle = (): CSSProperties => {
      if (props.plain) {
        return {
          color: props.textColor || props.color,
          borderColor: props.color
        }
      }
      return {
        color: props.textColor,
        background: props.color
      }
    }

    const renderTag = () => {
      const { closeable } = props

      const CloseIcon = closeable && <div onClick={onClose}>X</div>

      return (
        <span style={getStyle()} class={bem('body')}>
          {renderText()}
          {CloseIcon}
        </span>
      )
    }

    return () => <div>{props.show ? renderTag() : null}</div>
  }
})
