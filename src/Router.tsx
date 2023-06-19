import { Routes, Route } from 'react-router-dom'

import { Home } from './page/home'
import { NewsDetails } from './page/news-details'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news-details/:id/:slug" element={<NewsDetails />} />
    </Routes>
  )
}
