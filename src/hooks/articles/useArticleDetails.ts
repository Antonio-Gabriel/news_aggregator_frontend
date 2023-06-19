import { Registry, container } from '../../core/container.config'
import { GetArticleByIdQuery } from '../../core/domain/system/queries/get-article.query'

export function useArticleDetails(articleId: number) {
  const queryResult = container.get<GetArticleByIdQuery>(
    Registry.GetArticleByIdQuery,
  )
  return queryResult.execute(articleId)
}
