import { Registry, container } from '../../core/container.config'
import { GetArticlesQuery } from '../../core/domain/system/queries/get-articles.query'

export function useArticlesExtractor() {
  const queryResult = container.get<GetArticlesQuery>(Registry.GetArticlesQuery)

  return {
    data: queryResult.execute('customArticles').data,
  }
}
