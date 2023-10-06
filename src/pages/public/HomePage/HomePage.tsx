import clsx from 'clsx'
import { useAppSelector } from '@/providers/StateManagerProvider/store'
import Button from '@/components/Button/Button'

const HomePage = () => {
  const apartments = useAppSelector(s => s.apartment.apartments)

  return (
    <section className='mt-4 mx-auto container'>
      <p className='text-2xl font-bold capitalize'>apartments</p>

      <section className='flex flex-col mt-4'>
        {apartments?.map(apartment => (
          <section
            key={apartment.id}
            className={clsx(
              'py-4 px-2 flex gap-4 border-b',
              'hover:shadow-md hover:cursor-pointer hover:shadow-blue-50 hover:bg-gray-50',
            )}
          >
            <section>
              <section className='h-20 w-20 bg-gray-200 rounded-sm'></section>
            </section>

            <section className='flex-1'>
              <p className='text-xl font-bold capitalize text-blue-700'>
                {apartment.title}
              </p>

              <section className='mt-4 text-lg flex gap-2'>
                <p className='capitalize font-bold text-cyan-600'>price:</p>
                <p className='text-gray-500 font-semibold'>{apartment.price}$</p>
              </section>
            </section>

            <section>
              <Button>reserve</Button>
            </section>
          </section>
        ))}
      </section>
    </section>
  )
}

export default HomePage
