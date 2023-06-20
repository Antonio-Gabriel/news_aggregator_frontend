import { FormEvent, useState } from 'react'
import { Modal } from 'reactstrap'
import { Button } from './button'

import { RootState } from '../../app/store'
import { useSelector } from 'react-redux'

import './styles/modal.scss'

type CustomFiltersModalProps = {
  isOpenCustomFiltersModal: boolean
  toggleCustomFiltersModal: () => void
}

export function CustomFiltersModal(props: CustomFiltersModalProps) {
  const [focusAfterClose, setFocusAfterClose] = useState(true)

  const { categories, sources, authors } = useSelector(
    (state: RootState) => state.dataExtracteds,
  )

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setFocusAfterClose(false)
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
            onClick={props.toggleCustomFiltersModal}
          ></button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-group">
              <select className="form-select form-select-custom">
                <option value="1">Choose your prefered categories</option>
                {categories.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <ul className="nav-list">
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Lifehacker.com
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Engadget
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="form-group">
              <select className="form-select form-select-custom">
                <option value="1">Choose your prefered authors</option>
                {authors.map((author, index) => (
                  <option value={author} key={index}>
                    {author}
                  </option>
                ))}
              </select>

              <ul className="nav-list">
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Steve Dants
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Clerlynn Low{' '}
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Andrew Tarantola
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="form-group">
              <select className="form-select form-select-custom">
                <option>Choose your prefered sources</option>
                {sources.map((source, index) => (
                  <option value={source} key={index}>
                    {source}
                  </option>
                ))}
              </select>

              <ul className="nav-list">
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Innocation & Development
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    ABC News
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="model-footer">
            <Button variant="primary" isAction={false}>
              Save Filters
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
