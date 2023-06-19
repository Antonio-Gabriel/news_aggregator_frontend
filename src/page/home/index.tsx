import { useEffect, useState } from 'react'

import { Filters } from '../../components/filters'
import { Card } from '../../components/common/card'
import { Button } from '../../components/common/button'
import { CustomFiltersModal } from '../../components/common/custom-filters-modal'

import { useArticles } from '../../hooks/articles/useArticles'

import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { useMapper } from '../../hooks/use-mapper'
import { Article } from '../../core/domain/entities/article'

import { useFilters } from '../../hooks/filters/use-filter'
import { useFilterTags } from '../../hooks/filters/use-filters-tag'

import { limitText } from '../../utils/limit-text'
import { completeUrl } from '../../utils/complete-url'

import { checkValue } from '../../utils/check-value'
import { removePrefix } from '../../utils/remove-prefix'
import { removeHourFromDate } from '../../utils/remove-hour-from-date'

import { Pagination } from '../../components/pagination'
import { usePagination } from '../../hooks/use-pagination'

import './home.scss'
import { CardSkeleton } from '../../components/card-skeleton'

export function Home() {
  const [isOpenCustomFiltersModal, setIsOpenCustomFiltersModal] = useState(
    false,
  )
  const toggleCustomFiltersModal = () =>
    setIsOpenCustomFiltersModal(!isOpenCustomFiltersModal)

  const { data, isLoading } = useArticles()
  useMapper(data as Article[])
  const filtersData = useSelector((state: RootState) => state.filters)
  const [filters, setFilters] = useState({} as App.Module.FiltersProps)
  useFilterTags(filters)

  const filteredArticles = useFilters(data as Article[], filters)

  useEffect(() => {
    setFilters(filtersData)
  }, [data])

  // Pagination session
  const {
    totalPages,
    currentArticles,
    handlePageChange,
    currentPage,
  } = usePagination({
    itemsPerPage: 12,
    articles: filteredArticles ?? [],
  })

  const [showFilters, setShowFilters] = useState(false)

  return (
    <>
      <main className="main">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="hero-title">
                <h1>
                  Articles{' '}
                  <span className="result">
                    ({filteredArticles?.length ?? 0} result)
                  </span>
                </h1>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="hero-filter">
                <Button
                  variant="secondary-with-border"
                  isAction={showFilters}
                  onClick={() => setShowFilters((prev) => !prev)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                    />
                  </svg>
                  <span> Show filters</span>
                </Button>
                <Button
                  variant="primary"
                  onClick={toggleCustomFiltersModal}
                  isAction={false}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </Button>
              </div>
            </div>

            {showFilters && (
              <div className="col-lg-12">
                <Filters />
              </div>
            )}
          </div>

          <div className="row">
            {isLoading && <CardSkeleton cards={6} />}
            {currentArticles.map((article) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6 card-items"
                key={article.id}
              >
                <Card
                  id={article.id}
                  urlImg={completeUrl(article.url_image)}
                  url={article.url}
                  title={article.title}
                  author={removePrefix(checkValue(article.author), 'By')}
                  description={checkValue(limitText(article.description, 110))}
                  date={removeHourFromDate(article.published_at)}
                  isContent={!article.content}
                />
              </div>
            ))}
          </div>

          {!!currentArticles.length && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </main>

      <CustomFiltersModal
        isOpenCustomFiltersModal={isOpenCustomFiltersModal}
        toggleCustomFiltersModal={toggleCustomFiltersModal}
      />
    </>
  )
}
