import { useQuery } from 'react-query'
import { ArticleService } from '../../../infra/services/articles.service'

export class GetArticleByIdQuery implements SystemContract {
  constructor(private service: ArticleService) {}

  execute(articleId: number) {
    const queryResult = useQuery('article', () =>
      this.service.getById(articleId),
    )

    return queryResult
  }
}
