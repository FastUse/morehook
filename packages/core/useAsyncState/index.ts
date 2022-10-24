// export interface useAsyncState {
//   /** Address of the resource */
//   src: string
//   /** Images to use in different situations, e.g., high-resolution displays, small monitors, etc. */
//   srcset?: string
//   /** Image sizes for different page layouts */
//   sizes?: string
// }
export function useAsyncState<T extends Record<any, any>, K extends (keyof T)>
  (arr: T[], func: (o: K) => T[K], count: number = 10): T[] {
  return [...arr, ...arr]
}