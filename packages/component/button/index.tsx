import { defineComponent, type ExtractPropTypes } from 'vue'
import {
  createNamespace,
  makeStringProp,
  extend,
  preventDefault
} from '../_utils'
import { ButtonType } from './types'
import './index.scss'

/**
 * 目的是在制作大型业务组件时能暴露hook给外部便捷操作
 */
export const useBtn = () => {
  console.log(111)
}

const [name] = createNamespace('button')

type buttonProps = ExtractPropTypes<typeof buttonProps>
const buttonProps = extend(
  {},
  {
    text: String,
    type: makeStringProp<ButtonType>('default'),
    loadingText: String,
    color: String,
    loading: Boolean,
    disabled: Boolean
  }
)

export const Button = defineComponent({
  name,

  props: buttonProps,

  emits: ['click'],

  setup(props, { emit, slots }) {
    const renderText = () => {
      let text
      if (props.loading) {
        text = props.loadingText
      } else {
        text = slots.default ? slots.default() : props.text
      }

      if (text) {
        return <span class="text">{text}</span>
      }
    }

    const onClick = (event: MouseEvent) => {
      if (props.loading) {
        preventDefault(event)
      } else if (!props.disabled) {
        emit('click', event)
      }
    }

    return () => (
      <div class="button-body" onClick={onClick}>
        <div class="content">{renderText()}</div>
      </div>
    )
  }
})
