import { FC, MouseEventHandler, useEffect } from 'react'
import ReactDOM from 'react-dom'
import clsx from 'clsx'

export interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  body: FC
  outSideCloseEnabled?: boolean
  bodyClasses?: string
  containerClasses?: string
  contentClasses?: string
  preventHideScroll?: boolean
}

const Modal: FC<ModalProps> = ({
  open,
  onClose,
  title,
  body: Body,
  outSideCloseEnabled = true,
  bodyClasses = '',
  containerClasses = '',
  contentClasses = '',
  preventHideScroll = false,
}) => {
  useEffect(() => {
    if (!preventHideScroll) {
      const bodyEl = document.querySelector('body')
      open
        ? bodyEl?.classList.add('overflow-hidden')
        : bodyEl?.classList.remove('overflow-hidden')
    }
  }, [open])

  const handleClickOutSide = () => {
    outSideCloseEnabled && onClose()
  }

  const handleClose = () => {
    onClose()
  }

  const handleClickModal: MouseEventHandler<HTMLDivElement> = evt => {
    evt.stopPropagation()
  }

  const getParentElement = () => {
    return document.querySelector('body') as Element
  }

  if (!open) {
    return <></>
  }

  return (
    open &&
    ReactDOM.createPortal(
      <section
        className={clsx(
          containerClasses,
          'bg-gray-50/10 fixed mx-auto z-50 inset-0 h-screen flex items-center justify-center max-sm:items-start',
        )}
        onClick={handleClickOutSide}
      >
        <section
          className={clsx(
            'max-w-screen-md max-sm:h-screen container mx-auto flex flex-col',
            contentClasses,
          )}
        >
          <section
            className={clsx(
              'pt-14 pb-4 overflow-y-auto max-sm:h-full max-sm:pt-2 px-6 sm:max-h-[70vh] border-gray-200 border rounded-xl',
              'bg-white relative max-sm:rounded-none max-sm:h-full',
              bodyClasses,
            )}
            onClick={handleClickModal}
          >
            <section className='w-full capitalize absolute inset-x-0 top-5 text-center'>
              <p className='text-blue-800 inline font-bold text-lg'>{title}</p>
            </section>

            <button
              onClick={handleClose}
              className={clsx(
                'inline-flex items-center justify-center pb-1 px-2 absolute top-4 end-5 text-black rounded-md z-50 text-xl',
                'hover:bg-gray-100 focus:ring-2 focus:ring-gray-300',
              )}
            >
              ×
            </button>

            <Body />
          </section>
        </section>
      </section>,
      getParentElement(),
    )
  )
}

export default Modal
