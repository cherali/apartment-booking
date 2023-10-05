import type { FC } from 'react'
import { useField } from 'formik'
import TextField, { TextFieldProps } from '../TextField/TextField'

type EType = 'error' | 'value' | 'onChange' | 'onClear' | 'name'

export interface TextFormFieldProps extends Omit<TextFieldProps, EType> {
  name: string
  onClear?: () => void
  label?: string
  containerClasses?: string
  enableEditing?: boolean
  inputValue?: string
  helpText?: string
}

const TextFormField: FC<TextFormFieldProps> = ({ ...props }) => {
  const [field, meta] = useField(props)

  return (
    <TextField
      error={Boolean(meta.touched && meta.error)}
      helperText={meta.error}
      {...Object.assign({}, field, props)}
    />
  )
}

export default TextFormField
