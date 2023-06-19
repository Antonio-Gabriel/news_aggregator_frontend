export function completeUrl(
  url: string,
  baseUrl: string = 'https://www.nytimes.com/',
): string {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }

  if (url.startsWith('/')) {
    return baseUrl + url.slice(1)
  }

  return baseUrl + url
}
