import { useMemo } from 'react'
import { Article } from '../../core/domain/entities/article'

import { parse, isWithinInterval, addDays } from 'date-fns'

export function useFilters(
  articles: Article[],
  filters: App.Module.FiltersProps,
) {
  return useMemo(() => {
    const filterByTitle = (article: Article) => {
      return (
        !filters.title ||
        article.title.toLowerCase().includes(filters.title.toLowerCase())
      )
    }

    const filterBySource = (article: Article) => {
      return !filters.source || filters.source == '1'
        ? article
        : article.source.toLowerCase().includes(filters.source.toLowerCase())
    }

    const filterByCategorie = (article: Article) => {
      return !filters.categorie || filters.categorie == '1'
        ? article
        : article.category.name
            .toLowerCase()
            .includes(filters.categorie.toLowerCase())
    }

    const filterByDateInterval = (article: Article) => {
      const itemDate = parse(
        article.published_at.substring(0, 10),
        'yyyy-MM-dd',
        new Date(),
      )
      const start = parse(filters.dateRange, 'yyyy-MM-dd', new Date())
      const end = addDays(start, 7)
      return !filters.dateRange || isWithinInterval(itemDate, { start, end })
    }

    return articles?.filter(
      (article) =>
        filterByTitle(article) &&
        filterBySource(article) &&
        filterByCategorie(article) &&
        filterByDateInterval(article),
    )
  }, [articles, filters])
}
