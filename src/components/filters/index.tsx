import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Input } from '../common/input'
import { RootState } from '../../app/store'
import {
  setCategorieChanges,
  setDateRangeChanges,
  setSourceChanges,
  setTitleChanges,
} from '../../app/feactures/filters-slice'

import { removeFilterTag } from '../../app/feactures/filters-tag-slice'

import './filters.scss'

export function Filters() {
  const dispatch = useDispatch()

  const { categories, sources } = useSelector(
    (state: RootState) => state.dataExtracteds,
  )

  const { filtersTags } = useSelector((state: RootState) => state.filtersTag)

  const { title, categorie, source, dateRange } = useSelector(
    (state: RootState) => state.filters,
  )

  function handleSearchInputChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setTitleChanges(e.target.value))
  }

  function handleSourceSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    dispatch(setSourceChanges(e.target.value))
  }

  function handleCategorySelectChange(e: ChangeEvent<HTMLSelectElement>) {
    dispatch(setCategorieChanges(e.target.value))
  }

  function handleDateRangeInputChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setDateRangeChanges(e.target.value))
  }

  function handleRemoveFilterTag(key: string) {
    dispatch(removeFilterTag(key))
    handleClearFilterChange(key)
  }

  function handleClearFilterChange(key: string) {
    switch (key) {
      case 'title':
        dispatch(setTitleChanges(''))
        break

      case 'categorie':
        dispatch(setCategorieChanges(''))
        break

      case 'source':
        dispatch(setSourceChanges(''))
        break

      case 'dateRange':
        dispatch(setDateRangeChanges(''))
        break
    }
  }

  return (
    <section className="filter">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 filter-items">
            <Input
              placeholder="Search for articles here ..."
              type="text"
              value={title}
              onChange={handleSearchInputChange}
              icon={
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
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              }
            />
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 filter-items">
            <select
              className="form-select form-select-custom"
              aria-label=".form-select-sm example"
              value={source}
              onChange={handleSourceSelectChange}
            >
              <option>Choose source</option>
              {sources.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 filter-items">
            <select
              className="form-select form-select-custom"
              aria-label=".form-select-sm example"
              value={categorie}
              onChange={handleCategorySelectChange}
            >
              <option>Choose categorie</option>
              {categories.map((category) => (
                <option value={category.name} key={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-lg-3 filter-items">
            <Input
              placeholder="Search for articles here ..."
              type="date"
              value={dateRange}
              onChange={handleDateRangeInputChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="filter-result">
              <ul className="nav-list">
                {filtersTags.map((tag) => (
                  <li className="nav-item" key={tag.key}>
                    <a href="#" className="nav-link">
                      {tag.value}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        onClick={() => handleRemoveFilterTag(tag.key)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
