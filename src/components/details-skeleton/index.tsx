import Skeleton from 'react-loading-skeleton'

export function DetailsSkeleton() {
  return (
    <main className="news-details">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-10 col-sm-10">
            <div className="news-details-item">
              <div className="news-details-header">
                <h1 className="title">
                  <Skeleton count={2} style={{ marginBottom: '1rem' }} />
                </h1>

                <Skeleton width="100%" height="48.7rem" />

                <h2 className="subtitle">
                  <Skeleton count={2} style={{ marginBottom: '1rem' }} />
                </h2>
              </div>

              <div className="news-details-body">
                <div className="descripiton">
                  <Skeleton count={4} style={{ marginBottom: '2rem' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
