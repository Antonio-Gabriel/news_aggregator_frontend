import { toast } from 'react-toastify'
import { RootState } from '../../app/store'
import { useDispatch, useSelector } from 'react-redux'

import { Registry, container } from '../../core/container.config'
import { authenticationObserver } from '../../app/feactures/auth-slice'
import { GetArticlesQuery } from '../../core/domain/system/queries/get-articles.query'
import { GetCustomArticlesQuery } from '../../core/domain/system/queries/get-custom-articles.query'

type RenderType = {
  renderType: 'DEFAULT' | null
}

export function useArticles({ renderType }: RenderType) {
  const dispatch = useDispatch()
  const { isAuth, settings } = useSelector((state: RootState) => state.auth)

  const queryResult = container.get<GetArticlesQuery>(Registry.GetArticlesQuery)
  const customQueryResult = container.get<GetCustomArticlesQuery>(
    Registry.GetCustomArticlesQuery,
  )

  if (renderType == 'DEFAULT') return queryResult.execute()

  if (isAuth && settings != null) {
    const settingsParsed = JSON?.parse(
      settings?.metadata ?? '',
    ) as App.Module.SettingMetadataProps

    const articles = customQueryResult.execute(settingsParsed)

    if (articles.isError) {
      toast.warning('Ops, your session expired, try to signIn again')
      dispatch(authenticationObserver())
    }

    return articles
  }

  return queryResult.execute()
}
