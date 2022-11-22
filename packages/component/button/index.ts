import { withInstall } from '../_utils'
import _Button from './Button'

export const Button = withInstall(_Button)
export default Button
export { buttonProps, useBtn, useSmallBtn } from './Button'
export type { ButtonProps } from './Button'
export type { ButtonType, ButtonSize } from './types'

declare module 'vue' {
  export interface GlobalComponents {
    FastUseButton: typeof Button
  }
}
