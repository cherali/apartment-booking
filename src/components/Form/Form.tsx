import type { FC, ReactNode } from 'react'
import { Form as FormikForm, FormikProvider, FormikValues, useFormik } from 'formik'
import * as Yup from 'yup'

export interface FormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: any
  initialValues?: FormikValues
  validationSchema?: unknown
  children: JSX.Element | JSX.Element[] | ReactNode
  className?: string
}

const Form: FC<FormProps> = ({
  children,
  onSubmit,
  initialValues = {},
  validationSchema = Yup.object({}),
  className,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  return (
    <FormikProvider value={formik}>
      <FormikForm className={className}>{children}</FormikForm>
    </FormikProvider>
  )
}

export default Form
