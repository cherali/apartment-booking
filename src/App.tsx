import { Suspense, useEffect } from 'react'
import AppRouter from './Routes/AppRouter'
import { initialize } from './mock/initialization'

function App() {
  useEffect(() => {
    initialize()
  }, [])

  return (
    <Suspense fallback={<p>loading...</p>}>
      <AppRouter />
    </Suspense>
  )
}

export default App
