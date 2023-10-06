import type { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

interface StateManagerProviderProps {
  children: ReactNode
}

const StateManagerProvider: FC<StateManagerProviderProps> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

export default StateManagerProvider
