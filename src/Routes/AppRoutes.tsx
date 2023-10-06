import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

import { routes } from './routes'

const HomePage = lazy(() => import('@/pages/public/HomePage/HomePage'))
const ReservePage = lazy(() => import('@/pages/private/ReservePage/ReservePage'))
const NotFound = lazy(() => import('@/pages/public/NotFound/NotFound'))

export const AppRoutes = () =>
  useRoutes([
    {
      path: routes.public.home,
      element: <HomePage />,
    },
    {
      path: routes.private.reserve,
      element: <ReservePage />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ])
