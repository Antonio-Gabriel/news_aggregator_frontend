type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({
  currentPage,
  onPageChange,
  totalPages,
}: PaginationProps) {
  const renderPageNumbers = () => {
    const pageNumbers = []

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li className="page-item" key={i} onClick={() => onPageChange(i)}>
          <a
            className={`page-link ${currentPage === i ? 'active' : ''}`}
            href="#"
          >
            {i}
          </a>
        </li>,
      )
    }

    return pageNumbers
  }

  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-4">
        <ul className="pagination">
          {currentPage > 1 && (
            <li
              className="page-item"
              onClick={() => onPageChange(currentPage - 1)}
            >
              <a className="page-link" href="#">
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
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
              </a>
            </li>
          )}
          {renderPageNumbers()}
          {currentPage < totalPages && (
            <li
              className="page-item"
              onClick={() => onPageChange(currentPage + 1)}
            >
              <a className="page-link" href="#">
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
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
