import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

import { useAuth } from '../user/use-auth'
import { settingsParser } from '../../utils/settings-parser'
import { Registry, container } from '../../core/container.config'
import { GetArticlesQuery } from '../../core/domain/system/queries/get-articles.query'
import { GetCustomArticlesQuery } from '../../core/domain/system/queries/get-custom-articles.query'

export function useArticles() {
  const { signOut } = useAuth()
  const { isAuth, settings } = useSelector((state: RootState) => state.auth)

  const queryResult = container.get<GetArticlesQuery>(Registry.GetArticlesQuery)
  const customQueryResult = container.get<GetCustomArticlesQuery>(
    Registry.GetCustomArticlesQuery,
  )

  if (isAuth && settings != null) {
    const settingsParsed = settingsParser(settings?.metadata)

    const articles = customQueryResult.execute(settingsParsed)

    if (articles.isError) {
      signOut()
      toast.warning('Ops, your session expired, try to signIn again')
    }

    return articles
  }

  return queryResult.execute('articles')
}
