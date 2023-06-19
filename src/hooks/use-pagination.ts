import { useState } from 'react'
import { Article } from '../core/domain/entities/article'

type PaginationProps = {
  itemsPerPage: number
  articles: Article[]
}

export function usePagination({ itemsPerPage, articles }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalItems = articles.length

  const totalPages = Math.ceil(totalItems / itemsPerPage)

  function handlePageChange(page: number) {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const currentArticles = articles.slice(startIndex, endIndex)

  return { totalPages, currentArticles, handlePageChange, currentPage }
}
