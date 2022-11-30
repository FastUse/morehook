import { withInstall } from '../_utils'
import _DynamicLoading from './dynamicLoading'

export const DynamicLoading = withInstall(_DynamicLoading)
export default DynamicLoading
export { dynamicLoadingProps } from './dynamicLoading'
export type { DynamicLoadingProps } from './dynamicLoading'
export type { TagType, TagSize } from './types'

declare module 'vue' {
  export interface GlobalComponents {
    FastUseDynamicLoading: typeof DynamicLoading
  }
}
