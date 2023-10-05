import { ButtonHTMLAttributes, FC } from 'react'
import clsx from 'clsx'

type ButtonVariant = 'contained' | 'outlined'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'contained',
  type = 'button',
  className,
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'contained':
        return clsx(
          'text-white bg-blue-500',
          'hover:bg-blue-600',
          'focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-0',
          'disabled:bg-gray-500 disabled:border-gray-500 disabled:hover:bg-gray-500',
        )
      case 'outlined':
        return clsx(
          'text-blue-500 bg-transparent border-blue-500 border-2',
          'hover:bg-blue-100',
          'focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-0',
          'disabled:text-gray-500 disabled:border-gray-500 disabled:hover:bg-gray-500',
        )

      default:
        return ''
    }
  }

  return (
    <button
      className={clsx(
        getVariantClasses(),
        'font-bold rounded-md px-4 py-1.5 box-border h-10 inline-flex items-center justify-center capitalize',
        'disabled:pointer-events-none',
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
