import Skeleton from 'react-loading-skeleton'

export function CardSkeleton({ cards }: { cards: number }) {
  return (
    <>
      {Array(cards)
        .fill(0)
        .map((_, index) => (
          <div className="col-lg-4 col-md-6 col-sm-6 card-items" key={index}>
            <div className="card card-custom">
              <figure className="card-img-top" style={{ border: 'none' }}>
                <Skeleton width="100%" height={315} />
              </figure>
              <div className="card-body">
                <div
                  className="card-description"
                  style={{ borderBottom: 'none' }}
                >
                  <Skeleton count={4} style={{ marginBottom: '1rem' }} />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}
