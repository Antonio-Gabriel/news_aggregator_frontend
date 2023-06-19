import { useParams } from 'react-router-dom'

import { completeUrl } from '../../utils/complete-url'
import { removePrefix } from '../../utils/remove-prefix'
import { DetailsSkeleton } from '../../components/details-skeleton'
import { RenderContent } from '../../components/render-description'
import { useArticleDetails } from '../../hooks/articles/useArticleDetails'

import './news-details.scss'

export function NewsDetails() {
  const { id } = useParams()
  const { data: article, isLoading } = useArticleDetails(Number(id))

  if (isLoading) {
    return <DetailsSkeleton />
  }

  return (
    <main className="news-details">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-10 col-sm-10">
            <div className="news-details-item">
              <div className="news-details-header">
                <h1 className="title">{article?.data.title}</h1>

                <div className="d-flex section justify-content-between">
                  <div className="content">
                    <span className="author">
                      By {removePrefix(article?.data.author ?? '', 'By')},
                    </span>
                    <span className="category">
                      Category{' '}
                      <small>{article?.data.category.name ?? ''}</small>
                    </span>
                    <span className="category">
                      Source <small>{article?.data.source ?? ''}</small>
                    </span>
                  </div>
                  <span className="date">
                    {article?.data.published_at.substring(0, 10)}
                  </span>
                </div>

                <img
                  src={completeUrl(article?.data.url_image ?? '')}
                  alt={article?.data.title}
                  className="img-fluid image"
                />

                <h2 className="subtitle">{article?.data.description ?? ''}</h2>
              </div>

              <div className="news-details-body">
                <div className="descripiton">
                  <RenderContent content={article?.data.content ?? ''} />
                </div>

                <h5>Thanks for read !!!</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
