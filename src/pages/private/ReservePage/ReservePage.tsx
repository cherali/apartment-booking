import { useAppSelector } from '@/providers/StateManagerProvider/store'
import { useUser } from '@/hooks/useUser'
import ReserveCard from './ReserveCard'

const ReservePage = () => {
  const visits = useAppSelector(s => s.visit.visits)
  const [isUserLoggedIn] = useUser()

  return (
    <section className='mt-4 mx-auto container'>
      <p className='text-2xl font-bold capitalize'>Reserves</p>

      <section className='flex flex-col mt-4'>
        {isUserLoggedIn && visits?.length === 0 && (
          <p className='text-2xl font-semibold text-gray-500 capitalize'>
            no reservation yet.
          </p>
        )}

        {!isUserLoggedIn && (
          <p className='text-2xl font-semibold text-red-500 capitalize'>
            you must login first.
          </p>
        )}

        {isUserLoggedIn &&
          visits?.map(visit => <ReserveCard visit={visit} key={visit.id} />)}
      </section>
    </section>
  )
}

export default ReservePage
