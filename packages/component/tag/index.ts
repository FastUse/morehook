import { withInstall } from '../_utils'
import _Tag from './Tag'

export const Tag = withInstall(_Tag)
export default Tag
export { tagProps } from './Tag'
export type { TagProps } from './Tag'
export type { TagType, TagSize } from './types'

declare module 'vue' {
  export interface GlobalComponents {
    FastUseTag: typeof Tag
  }
}
