import React from 'react'
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
import './index.css'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import Home from './pages/Home'
import Store from './pages/Store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: '/store', element: <Store /> },
      { path: '/about', element: <About /> }
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
