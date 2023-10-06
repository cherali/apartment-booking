import { Suspense } from 'react'
import AppRouter from './Routes/AppRouter'
import StateManagerProvider from './providers/StateManagerProvider/StateManagerProvider'

function App() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <StateManagerProvider>
        <AppRouter />
      </StateManagerProvider>
    </Suspense>
  )
}

export default App
