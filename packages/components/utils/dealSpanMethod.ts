function mergeKeys<T extends Record<string, any>>(item: T, keys: Set<keyof T>): string {
  return Array.from(keys).reduce((acc: string, curr) => acc + String(item[curr]), '')
}

export default function dealSpanMethod<T extends Record<string, any>>(rowData: T, data: readonly T[], filterKeys: (keyof T)[]): number {
  if (!filterKeys || filterKeys.length === 0) {
    return 1
  }
  const filterKeysSet = new Set(filterKeys)
  const firstIndex = data.findIndex(item => mergeKeys(rowData, filterKeysSet) === mergeKeys(item, filterKeysSet))
  const lastIndex = data.findLastIndex(item => mergeKeys(rowData, filterKeysSet) === mergeKeys(item, filterKeysSet))

  return lastIndex - firstIndex + 1
}
