import { Registry, container } from '../../core/container.config'
import { GetArticlesQuery } from '../../core/domain/system/queries/get-articles.query'

export function useArticles() {
  const queryResult = container.get<GetArticlesQuery>(Registry.GetArticlesQuery)
  return queryResult.execute()
}
