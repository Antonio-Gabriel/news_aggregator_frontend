export function checkValue(
  value?: string,
  defaultValue: string = 'Unknown',
): string {
  return value && value.trim().length > 0 ? value.trim() : defaultValue
}
