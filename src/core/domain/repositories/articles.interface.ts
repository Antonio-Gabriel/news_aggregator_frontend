import { Article } from '../entities/article'

export type ArticlesResponse = {
  data: Article[]
}

export type ArticleResponse = {
  data: Article
}

export interface ArticlesRepositoryInterface {
  get(): Promise<ArticlesResponse>
  getById(articleId: number): Promise<ArticleResponse>
  getCustoms(): Promise<ArticlesResponse>
}
