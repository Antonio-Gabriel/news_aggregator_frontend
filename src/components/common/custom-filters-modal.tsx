import { FormEvent, useState } from 'react'
import { Modal } from 'reactstrap'
import { Button } from './button'

import './styles/modal.scss'

type CustomFiltersModalProps = {
  isOpenCustomFiltersModal: boolean
  toggleCustomFiltersModal: () => void
}

export function CustomFiltersModal(props: CustomFiltersModalProps) {
  const [focusAfterClose, setFocusAfterClose] = useState(true)

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
                <option>Sources</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
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
                <option>Authors</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
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
                <option>Categories</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
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
