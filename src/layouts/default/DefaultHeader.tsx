import { Link } from 'react-router-dom'
import { routes } from '@/Routes/routes'
import LoginComponent from './LoginComponent'

const DefaultHeader = () => {
  const navs = [{ title: 'Home', link: routes.public.home }]

  return (
    <header className='h-16 shadow-blue-100 shadow-md bg-blue-900 flex items-center'>
      <section className='container mx-auto text-white flex w-full justify-between items-center'>
        <section>
          <nav>
            {navs.map((nav, index) => (
              <span key={index} className='py-2 px-4 font-bold'>
                <Link to={nav.link}>{nav.title}</Link>
              </span>
            ))}
          </nav>
        </section>

        <section>
          <LoginComponent />
        </section>
      </section>
    </header>
  )
}

export default DefaultHeader
