export function hasSubsetArray(mainArray: any[], subsetArray: any[]) {
  return mainArray.some((arr: any[]) => {
    return (
      arr.length === subsetArray.length &&
      arr.every((value, index) => value === subsetArray[index])
    )
  })
}
