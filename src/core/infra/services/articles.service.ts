import { AxiosInstance } from 'axios'
import {
  ArticlesRepositoryInterface,
  ArticlesResponse,
  ArticleResponse,
} from '../../domain/repositories/articles.interface'

export class ArticleService implements ArticlesRepositoryInterface {
  public constructor(private http: AxiosInstance) {}

  async get(): Promise<ArticlesResponse> {
    return this.http.get('/articles').then((resp) => resp.data)
  }

  async getById(articleId: number): Promise<ArticleResponse> {
    return this.http.get(`/articles/${articleId}`).then((rest) => rest.data)
  }

  getCustoms(): Promise<ArticlesResponse> {
    throw new Error('Method not implemented.')
  }
}
