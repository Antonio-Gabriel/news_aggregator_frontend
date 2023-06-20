import { AxiosInstance } from 'axios'
import {
  ArticlesRepositoryInterface,
  ArticlesResponse,
  ArticleResponse,
} from '../../domain/repositories/articles.interface'
import { urlQueryParametersBuilder } from '../../../utils/url-query-parameters-builder'

export class ArticleService implements ArticlesRepositoryInterface {
  public constructor(private http: AxiosInstance) {}

  async get(): Promise<ArticlesResponse> {
    return await this.http.get('/articles').then((resp) => resp.data)
  }

  async getById(articleId: number): Promise<ArticleResponse> {
    return await this.http
      .get(`/articles/${articleId}`)
      .then((rest) => rest.data)
  }

  async getCustoms(
    props: App.Module.SettingMetadataProps,
  ): Promise<ArticlesResponse> {
    const urlBuilder = urlQueryParametersBuilder('/articles/customs', props)
    return await this.http.get(urlBuilder).then((resp) => resp.data)
  }
}
