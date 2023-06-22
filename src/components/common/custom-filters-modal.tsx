import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import { Modal } from 'reactstrap'
import { Button } from './button'

import { Article } from '../../core/domain/entities/article'
import { useCustomMapper } from '../../hooks/use-custom-mapper'
import { useArticlesExtractor } from '../../hooks/articles/useArticlesExtractor'

import { hasSubsetArray } from '../../utils/has-subset-array'
import { useMapCustomDefinitions } from '../../hooks/use-map-custom-definitions'

import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

import { getClientUserCookie } from '../../utils/cookies'

import './styles/modal.scss'

type CustomFiltersModalProps = {
  isOpenCustomFiltersModal: boolean
  toggleCustomFiltersModal: () => void
}

type AuthenticationProps = Authentication.Module.AuthenticationProps

type FilterSettings = {
  authors: string[]
  categories: string[]
  sources: string[]
}

export function CustomFiltersModal(props: CustomFiltersModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [focusAfterClose, setFocusAfterClose] = useState(true)
  const [hasSettingChange, setHasSettingChange] = useState(false)
  const [filterSettings, setFilterSettings] = useState<FilterSettings>({
    authors: [],
    categories: [],
    sources: [],
  })

  const { data } = useArticlesExtractor()
  const { isAuth } = useSelector((state: RootState) => state.auth)
  const { categories, authors, sources } = useCustomMapper(data as Article[])

  const { savedSettings } = useMapCustomDefinitions()

  useEffect(() => {
    if (savedSettings != null) {
      const setting = savedSettings
      setFilterSettings({
        authors: [...setting.authors],
        categories: [...setting.categories],
        sources: [...setting.sources],
      })
    }
  }, [savedSettings])

  useEffect(() => {
    if (!isAuth) {
      resetComponentStates()
    }
  }, [isAuth])

  function removeSetting(index: number, key: string) {
    setHasSettingChange(true)

    setFilterSettings((prevSettings) => {
      // @ts-ignore
      const newList = [...prevSettings[key]]
      newList.splice(index, 1)

      return {
        ...prevSettings,
        [key]: newList,
      }
    })
  }

  function joinElements(element: any[]) {
    return element.join(',')
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    setIsLoading(true)
    setFocusAfterClose(false)

    const authorFilters = joinElements(filterSettings.authors)
    const sourceFilters = joinElements(filterSettings.sources)
    const categoriesFilters = joinElements(
      filterSettings.categories.map((arr) => arr[0]),
    )

    let userClientData = getClientUserCookie<AuthenticationProps>(
      '@news-aggregator',
    )

    const metadata = {
      authors: authorFilters,
      categories: categoriesFilters,
      sources: sourceFilters,
    }

    const refreshUserClientCookie = {
      ...userClientData,
      settings: {
        id: userClientData?.settings?.id,
        metadata: JSON.stringify(metadata),
      },
    }

    console.log(refreshUserClientCookie)
  }

  function handleSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    e.preventDefault()
    const selectedValues = Array.from(
      e.target.selectedOptions,
      (option) => option.value,
    )

    if (
      // @ts-ignore
      !filterSettings[e.target.name].includes(e.target.value) &&
      e.target.value !== '0'
    ) {
      setFilterSettings((prevFilterSettings) => ({
        ...prevFilterSettings,
        [e.target.name]: [
          // @ts-ignore
          ...prevFilterSettings[e.target.name],
          ...selectedValues,
        ],
      }))
    }

    setHasSettingChange(true)
  }

  function handleSelectMultipleChange(e: ChangeEvent<HTMLSelectElement>) {
    const selectedValue = e.target.value
    const selectedArray = selectedValue.split(',')

    if (
      // @ts-ignore
      !hasSubsetArray(filterSettings[e.target.name], selectedArray) &&
      e.target.value !== '0'
    ) {
      setFilterSettings((prevFilterSettings) => ({
        ...prevFilterSettings,
        [e.target.name]: [
          // @ts-ignore
          ...prevFilterSettings[e.target.name],
          selectedArray,
        ],
      }))
    }

    setHasSettingChange(true)
  }

  function resetComponentStates() {
    setFilterSettings({
      authors: [],
      categories: [],
      sources: [],
    })
  }

  return (
    <Modal
      returnFocusAfterClose={focusAfterClose}
      isOpen={props.isOpenCustomFiltersModal}
      className="custom-filers-modal-dialog"
    >
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title" id="exampleModalLabel">
            <h4>Custom Filters</h4>
            <p>Malesuada egestas nunc vestibulum</p>
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => {
              setHasSettingChange(false)
              props.toggleCustomFiltersModal()
            }}
          ></button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-group">
              <select
                name="categories"
                onChange={handleSelectMultipleChange}
                className="form-select form-select-custom"
              >
                <option value="0">Choose your prefered categories</option>
                {categories.map((category) => (
                  <option
                    value={`${category.id},${category.name}`}
                    key={category.id}
                  >
                    {category.name}
                  </option>
                ))}
              </select>

              <ul className="nav-list">
                {filterSettings.categories.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a href="#" className="nav-link">
                      {item[1]}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        onClick={() => {
                          removeSetting(index, 'categories')
                        }}
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
            <div className="form-group">
              <select
                name="authors"
                onChange={handleSelectChange}
                className="form-select form-select-custom"
              >
                <option value="0">Choose your prefered authors</option>
                {authors.map((author, index) => (
                  <option value={author} key={index}>
                    {author}
                  </option>
                ))}
              </select>

              <ul className="nav-list">
                {filterSettings.authors.map((author, index) => (
                  <li className="nav-item" key={index}>
                    <a href="#" className="nav-link">
                      {author}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        onClick={() => {
                          removeSetting(index, 'authors')
                        }}
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
            <div className="form-group">
              <select
                name="sources"
                onChange={handleSelectChange}
                className="form-select form-select-custom"
              >
                <option value="0">Choose your prefered sources</option>
                {sources.map((source, index) => (
                  <option value={source} key={index}>
                    {source}
                  </option>
                ))}
              </select>

              <ul className="nav-list">
                {filterSettings.sources.map((source, index) => (
                  <li className="nav-item" key={index}>
                    <a href="#" className="nav-link">
                      {source}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        onClick={() => {
                          removeSetting(index, 'sources')
                        }}
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

          <div className="model-footer">
            {isLoading ? (
              <Button variant="primary" isAction={false} disabled={true}>
                Loading...
              </Button>
            ) : (
              <Button
                variant="primary"
                isAction={false}
                disabled={hasSettingChange ? false : true}
              >
                {hasSettingChange ? 'Save Filters' : 'No Changes identified'}
              </Button>
            )}
          </div>
        </form>
      </div>
    </Modal>
  )
}
