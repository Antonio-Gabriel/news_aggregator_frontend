import { useSelector } from 'react-redux'

import { RootState } from '../app/store'
import { settingsParser } from '../utils/settings-parser'

function toArray(data?: string) {
  return data?.split(',') || []
}

export function useMapCustomDefinitions() {
  const { isAuth, settings } = useSelector((state: RootState) => state.auth)

  if (isAuth && settings != null) {
    const { authors, categories, sources } = settingsParser(settings?.metadata)

    return {
      savedSettings: {
        authors: toArray(authors),
        categories: toArray(categories),
        sources: toArray(sources),
      },
    }
  }

  return {
    savedSettings: null,
  }
}
