import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import DefaultLayout from '@/layouts/default/DefaultLayout'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <AppRoutes />
      </DefaultLayout>
    </BrowserRouter>
  )
}

export default AppRouter
