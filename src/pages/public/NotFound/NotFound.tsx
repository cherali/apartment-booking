import { routes } from '@/Routes/routes'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='w-full h-screen flex items-center justify-center flex-col'>
      <p className='text-5xl tracking-[2rem] text-blue-700'>404</p>
      <p className='text-3xl mt-5 me-6 text-blue-900 capitalize'>page not found!</p>

      <Link
        to={routes.public.home}
        className='text-xl me-6 mt-10 underline capitalize text-purple-700'
      >
        return to home page
      </Link>
    </section>
  )
}

export default NotFound
