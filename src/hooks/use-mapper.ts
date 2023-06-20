import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { isOnList } from '../utils/is-on-list'
import { Article } from '../core/domain/entities/article'
import { extractDataFromArticles } from '../app/feactures/data-extractor-slice'

export function useMapper(articles: Article[]) {
  let categories: App.Module.CategoryProps[] = []
  let sources: string[] = []
  let authors: string[] = []

  const dispatch = useDispatch()

  useEffect(() => {
    articles?.map((article) => {
      if (
        !isOnList(
          sources,
          article.source,
          (source, article) => source == article,
        )
      ) {
        sources.push(article.source)
      }

      if (
        !isOnList(
          authors,
          article.author,
          (author, article) => author == article,
        )
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

    dispatch(
      extractDataFromArticles({
        categories,
        sources,
        authors,
      }),
    )
  }, [articles])
}
