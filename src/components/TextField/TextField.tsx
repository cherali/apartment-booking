import { FC, InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import clsx from 'clsx'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  helperText?: string
  onClear?: () => void
  label?: string | ReactNode
  labelClasses?: string
  containerClasses?: string
  labelMargin?: string
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      type = 'text',
      label,
      labelClasses = '',
      name,
      id,
      value,
      onChange,
      containerClasses,
      error,
      helperText,
      className,
      required = false,
      labelMargin = 'mb-2',
      ...props
    },
    ref,
  ) => {
    const getLabelClass = () => {
      return 'block font-medium capitalize'
    }

    const RequiredComponent: FC = () => {
      return <>{required ? <span className='text-red-500 '>{' *'}</span> : ''}</>
    }

    return (
      <section className={containerClasses}>
        <section>
          {label && (
            <label
              htmlFor={id ?? name}
              className={clsx(
                labelClasses,
                getLabelClass(),
                labelMargin,
                !error ? 'text-black' : 'text-red-500',
              )}
            >
              {label}
              <RequiredComponent />
            </label>
          )}

          <section className='relative'>
            <input
              id={id ?? name}
              name={name}
              value={value}
              onChange={onChange}
              className={clsx(
                className,
                'w-full text-black focus:ring-0 px-4 py-2',
                'bg-white border-2 rounded-md outline-none block',
                error
                  ? 'focus:border-red-600 border-red-500 text-red-600'
                  : 'focus:border-blue-600 border-blue-100',
                'disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed',
              )}
              type={type}
              {...props}
              ref={ref}
            />
          </section>
        </section>

        {error && (
          <p className='block mt-2 text-sm font-medium text-red-500 px-3'>{helperText}</p>
        )}
      </section>
    )
  },
)

export default TextField
