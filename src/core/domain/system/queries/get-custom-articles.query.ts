import { UseQueryResult, useQuery } from 'react-query'

import { Article } from '../../entities/article'
import { ArticleService } from '../../../infra/services/articles.service'

export class GetCustomArticlesQuery implements SystemContract {
  constructor(private service: ArticleService) {}

  execute(props: App.Module.SettingMetadataProps): UseQueryResult {
    const queryResult = useQuery('customArticles', () =>
      this.service.getCustoms(props),
    )

    const transformedData = queryResult.data?.data.map(
      (article) => new Article(article),
    )

    return {
      ...queryResult,
      data: transformedData,
    } as UseQueryResult
  }
}
