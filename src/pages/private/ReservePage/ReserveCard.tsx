import { useState, FC } from 'react'
import type { Visit } from '@/models/visit'
import clsx from 'clsx'
import * as Yup from 'yup'
import { editNoteVisit, removeVisit } from '@/redux/visitReducer'
import { useAppDispatch } from '@/providers/StateManagerProvider/store'
import Button from '@/components/Button/Button'
import Form from '@/components/Form/Form'
import TextFormField from '@/components/TextFormField/TextFormField'

interface ReserveCardProps {
  visit: Visit
}

const ReserveCard: FC<ReserveCardProps> = ({ visit }) => {
  const [enableChangeNote, setEnableChangeNote] = useState(false)

  const dispatch = useAppDispatch()

  const handleRemoveVisit = () => {
    if (window.confirm('Do you want to delete this visit?')) {
      dispatch(removeVisit(visit.id))
    }
  }

  const handleChangeNoteClick = () => setEnableChangeNote(true)
  const handleCancel = () => setEnableChangeNote(false)

  const handleSubmit = ({ note }: { note: string }) => {
    if (note) {
      dispatch(editNoteVisit({ id: visit.id, note }))
      setTimeout(() => {
        setEnableChangeNote(false)
      }, 200)
    }
  }

  const initialValues = {
    note: visit.note || '',
  }

  const validationSchema = Yup.object({
    note: Yup.string().required('Note is required'),
  })

  return (
    <section
      className={clsx(
        'py-4 px-2 border-b',
        'hover:shadow-md hover:cursor-pointer hover:shadow-blue-50 hover:bg-gray-50',
      )}
    >
      <section className='flex gap-4 '>
        <section>
          <section className='h-24 w-24 bg-gray-200 rounded-sm'></section>
        </section>

        <section className='flex-1'>
          <p className='text-xl font-bold capitalize text-blue-700'>
            {visit.apartment.title}
          </p>

          <section className='mt-2 text-lg flex gap-2'>
            <p className='capitalize font-bold text-gray-400'>visit date:</p>
            <p className='text-gray-500 font-semibold'>
              {new Date(visit.visitDate).toDateString()}
            </p>
          </section>
          <section className='mt-2 text-lg flex gap-2'>
            <p className='capitalize font-bold text-gray-400'>note:</p>
            <p className='text-gray-500 font-semibold'>{visit.note}</p>
          </section>
        </section>

        <section className='flex flex-col gap-3'>
          <Button onClick={handleChangeNoteClick}>Edit Note</Button>
          <Button
            onClick={handleRemoveVisit}
            className='!text-red-600 border-2 border-red-600 focus:!ring-red-700 hover:!bg-red-50 !bg-transparent hover:!text-red-700'
          >
            Delete Reserve
          </Button>
        </section>
      </section>

      {enableChangeNote && (
        <section className='flex justify-end mt-2'>
          <Form
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
            className='w-2/5 flex items-start gap-2'
          >
            <TextFormField
              containerClasses='flex-1'
              name='note'
              placeholder='note'
              label='note'
            />

            <section className='flex mt-8 p-0.5 gap-1'>
              <Button type='submit'>save note</Button>

              <Button type='reset' onClick={handleCancel} variant='outlined'>
                cancel
              </Button>
            </section>
          </Form>
        </section>
      )}
    </section>
  )
}

export default ReserveCard
