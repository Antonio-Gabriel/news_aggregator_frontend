export function removeHourFromDate(date: string) {
  const dateWithoutTime = new Date(date)
  dateWithoutTime.setHours(0, 0, 0, 0)

  const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
  return dateWithoutTime.toLocaleDateString(undefined, options as any)
}
