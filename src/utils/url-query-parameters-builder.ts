type FiltersProps = App.Module.SettingMetadataProps

function checkQueryStrings(url: string): string {
  if (!url.includes('?')) return url.concat('?')
  return url.concat('&')
}

function addQueryParam(url: string, param: string, value?: string): string {
  if (value && value.trim() !== '' && value != null) {
    url = checkQueryStrings(url)
    const encodedValue = encodeURIComponent(value)
    return url.concat(`${param}=${encodedValue}`)
  }
  return url
}

export function urlQueryParametersBuilder(
  url: string,
  data: FiltersProps | null,
): string {
  if (data != null) {
    url = addQueryParam(url, 'categories', data.categories)
    url = addQueryParam(url, 'authors', data.authors)
    url = addQueryParam(url, 'sources', data.sources)
  }

  return url
}
