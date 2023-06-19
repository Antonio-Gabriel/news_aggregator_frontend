export function limitText(text: string, limit: number): string {
  if (text.length <= limit) {
    return text
  } else {
    return text.slice(0, limit) + '...'
  }
}
