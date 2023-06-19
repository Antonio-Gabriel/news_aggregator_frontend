export function isOnList<T>(
  list: T[],
  item: T,
  compareFn: (a: T, b: T) => boolean,
): boolean {
  return list.some((element) => compareFn(element, item))
}
