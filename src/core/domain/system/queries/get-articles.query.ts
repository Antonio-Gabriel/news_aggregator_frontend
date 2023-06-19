import { UseQueryResult, useQuery } from 'react-query'

import { Article } from '../../entities/article'
import { ArticleService } from '../../../infra/services/articles.service'

export class GetArticlesQuery implements SystemContract {
  constructor(private service: ArticleService) {}

  execute(): UseQueryResult {
    const queryResult = useQuery('articles', () => this.service.get())

    const transformedData = queryResult.data?.data.map(
      (article) => new Article(article),
    )

    return {
      ...queryResult,
      data: transformedData,
    } as UseQueryResult
  }
}
