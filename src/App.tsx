import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Layout/Header'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Header />

      <main>
        <h2>Time to get started!</h2>
      </main>
      </div>
    </>
  )
}

export default App
