import type { FC, ReactNode } from 'react'
import DefaultHeader from './DefaultHeader'

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <section>
      <DefaultHeader />
      <main>{children}</main>
    </section>
  )
}

export default DefaultLayout
