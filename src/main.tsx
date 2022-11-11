import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom'
import { ShoppingCartContextProvider } from './context/ShoppingCartContext'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Store from './pages/Store'

import './index.css'
import './variables.css'

// browser side - react lazy loading
// const Home = React.lazy(() => import(/* webpackChunkName: 'Home' */ './pages/Home'))
// const Store = React.lazy(() => import(/* webpackChunkName: 'Store' */ './pages/Store'))
// const About = React.lazy(() => import(/* webpackChunkName: 'About' */ './pages/About'))
// const ErrorPage = React.lazy(
//   () => import(/* webpackChunkName: 'ErrorPage' */ './pages/ErrorPage')
// )

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: (
          // <Suspense>
          <Home />
          // </Suspense>
        )
      },
      {
        path: 'store',
        element: (
          // <Suspense fallback={<h1>Loading...</h1>}>
          <Store />
          // </Suspense>
        )
      },
      {
        path: 'about',
        element: (
          // <Suspense>
          <About />
          // </Suspense>
        )
      },
      {
        path: '*',
        element: (
          // <Suspense>
          <ErrorPage />
          // </Suspense>
        )
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ShoppingCartContextProvider>
      <RouterProvider router={router} />
    </ShoppingCartContextProvider>
  </React.StrictMode>
)
