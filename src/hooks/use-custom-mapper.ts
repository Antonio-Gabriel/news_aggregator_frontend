import { isOnList } from '../utils/is-on-list'
import { Article } from '../core/domain/entities/article'

export function useCustomMapper(articles: Article[]) {
  let categories: App.Module.CategoryProps[] = []
  let sources: string[] = []
  let authors: string[] = []

  articles?.map((article) => {
    if (
      !isOnList(sources, article.source, (source, article) => source == article)
    ) {
      sources.push(article.source)
    }

    if (
      !isOnList(authors, article.author, (author, article) => author == article)
    ) {
      authors.push(article.author)
    }

    if (
      !isOnList(
        categories,
        article.category,
        (category, articleCategory) => category.name == articleCategory.name,
      )
    ) {
      categories.push(article.category)
    }
  })

  return {
    categories,
    sources,
    authors,
  }
}
