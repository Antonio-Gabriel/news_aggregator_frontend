import { Footer } from './components/layout/footer'
import { Header } from './components/layout/header'
import { ScrollToTop } from './components/scroll-to-top'
import { Router } from './Router'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Router />
      <Footer />
    </>
  )
}

export default App
