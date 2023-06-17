import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Result from './components/Result'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Result />
    </>
  )
}

export default App
