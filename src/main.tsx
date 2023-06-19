import React from 'react'

import App from './App.tsx'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { QueryClientProvider } from 'react-query'
import { SkeletonTheme } from 'react-loading-skeleton'
import { queryClient } from './core/infra/query-client.ts'

import { ToastContainer } from 'react-toastify'

import './styles/global.scss'
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <BrowserRouter>
            <App />
            <ToastContainer theme="dark" />
          </BrowserRouter>
        </SkeletonTheme>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
