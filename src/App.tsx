import { Suspense } from 'react'
import AppRouter from './Routes/AppRouter'

function App() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <AppRouter />
    </Suspense>
  )
}

export default App
