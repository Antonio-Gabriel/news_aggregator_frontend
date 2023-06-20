import { Container } from 'inversify'

import { http } from './infra/http'
import { UserService } from './infra/services/user.service'
import { ArticleService } from './infra/services/articles.service'

import { GetArticlesQuery } from './domain/system/queries/get-articles.query'
import { GetArticleByIdQuery } from './domain/system/queries/get-article.query'

import { CreateUserUsecase } from './domain/system/usecases/create-user-usecase'
import { AuthenticateUserUsecase } from './domain/system/usecases/authenticate-user-usecase'
import { GetCustomArticlesQuery } from './domain/system/queries/get-custom-articles.query'

export const Registry = {
  AxiosAdapter: Symbol.for('AxiosAdapter'),
  ArticleService: Symbol.for('ArticleService'),
  UserService: Symbol.for('UserService'),

  // queries
  GetArticlesQuery: Symbol.for('GetArticlesQuery'),
  GetArticleByIdQuery: Symbol.for('GetArticleByIdQuery'),
  GetCustomArticlesQuery: Symbol.for('GetCustomArticlesQuery'),

  // usecases
  AuthenticateUserUsecase: Symbol.for('AuthenticateUserUsecase'),
  CreateUserUsecase: Symbol.for('CreateUserUsecase'),
}

export const container = new Container()

// Http
container.bind(Registry.AxiosAdapter).toConstantValue(http)

// Services
container.bind(Registry.ArticleService).toDynamicValue((context: any) => {
  return new ArticleService(context.container.get(Registry.AxiosAdapter))
})

container.bind(Registry.UserService).toDynamicValue((context: any) => {
  return new UserService(context.container.get(Registry.AxiosAdapter))
})

// Queries
container.bind(Registry.GetArticlesQuery).toDynamicValue((context: any) => {
  return new GetArticlesQuery(context.container.get(Registry.ArticleService))
})

container.bind(Registry.GetArticleByIdQuery).toDynamicValue((context: any) => {
  return new GetArticleByIdQuery(context.container.get(Registry.ArticleService))
})

container
  .bind(Registry.GetCustomArticlesQuery)
  .toDynamicValue((context: any) => {
    return new GetCustomArticlesQuery(
      context.container.get(Registry.ArticleService),
    )
  })

// Usecases
container
  .bind(Registry.AuthenticateUserUsecase)
  .toDynamicValue((context: any) => {
    return new AuthenticateUserUsecase(
      context.container.get(Registry.UserService),
    )
  })

container.bind(Registry.CreateUserUsecase).toDynamicValue((context: any) => {
  return new CreateUserUsecase(context.container.get(Registry.UserService))
})
