export function useBoolean<T extends Record<any, any>, K extends (keyof T)>
  (arr: T[], func: (o: K) => T[K], count: number = 10): T[] {
  return [...arr, ...arr]
}