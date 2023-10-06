import { useState } from 'react'
import * as Yup from 'yup'
import { useUser } from '@/hooks/useUser'
import { useAppDispatch } from '@/providers/StateManagerProvider/store'
import { login, logout } from '@/redux/authReducer'
import Button from '@/components/Button/Button'
import Modal from '@/components/Modal/Modal'
import Form from '@/components/Form/Form'
import TextFormField from '@/components/TextFormField/TextFormField'

const AuthComponent = () => {
  const [open, setOpen] = useState(false)
  const [isLoggedIn] = useUser()
  const dispatch = useAppDispatch()

  const handleOpenLoginModal = () => setOpen(true)
  const handleCloseLoginModal = () => setOpen(false)

  const handleSubmit = () => {
    dispatch(login(1))
    handleCloseLoginModal()
  }

  const handleLogout = () => dispatch(logout())

  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required').email('Email format is wrong'),
    password: Yup.string()
      .min(8, 'Must be at least 8 characters')
      .required('Password is required'),
  })

  return (
    <>
      {!isLoggedIn && <Button onClick={handleOpenLoginModal}>login</Button>}
      {isLoggedIn && (
        <Button
          variant='outlined'
          onClick={handleLogout}
          className='!text-white hover:bg-blue-800'
        >
          logout
        </Button>
      )}
      <Modal
        open={open}
        onClose={handleCloseLoginModal}
        title='login'
        outSideCloseEnabled={false}
        body={() => (
          <section className='pb-4 max-sm:pt-10'>
            <Form
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={handleSubmit}
              className='flex flex-col gap-4'
            >
              <TextFormField name='email' placeholder='email' label='email' />
              <TextFormField
                name='password'
                placeholder='password'
                label='password'
                type='password'
              />
              <Button type='submit' className='mt-6'>
                submit
              </Button>
            </Form>
          </section>
        )}
      />
    </>
  )
}

export default AuthComponent
