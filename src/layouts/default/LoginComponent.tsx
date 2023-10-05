import { useState } from 'react'
import * as Yup from 'yup'
import Button from '@/components/Button/Button'
import Modal from '@/components/Modal/Modal'
import Form from '@/components/Form/Form'
import TextFormField from '@/components/TextFormField/TextFormField'

interface LoginInputs {
  email: string
  password: string
}

const LoginComponent = () => {
  const [open, setOpen] = useState(false)

  const handleOpenLoginModal = () => setOpen(true)

  const handleSubmit = (values: LoginInputs) => {
    console.log(values)
  }

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
      <Button onClick={handleOpenLoginModal}>login</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
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

export default LoginComponent
