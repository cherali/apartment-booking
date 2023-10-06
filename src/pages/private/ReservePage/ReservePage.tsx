import { useAppSelector } from '@/providers/StateManagerProvider/store'
import ReserveCard from './ReserveCard'

const ReservePage = () => {
  const visits = useAppSelector(s => s.visit.visits)

  return (
    <section className='mt-4 mx-auto container'>
      <p className='text-2xl font-bold capitalize'>Reserves</p>

      <section className='flex flex-col mt-4'>
        {visits?.map(visit => <ReserveCard visit={visit} key={visit.id} />)}
      </section>
    </section>
  )
}

export default ReservePage
