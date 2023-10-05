import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

import { routes } from './routes'

const HomePage = lazy(() => import('@/pages/public/HomePage/HomePage'))
const NotFound = lazy(() => import('@/pages/public/NotFound/NotFound'))

export const AppRoutes = () =>
  useRoutes([
    {
      path: routes.public.home,
      element: <HomePage />,
    },

    {
      path: '*',
      element: <NotFound />,
    },
  ])
