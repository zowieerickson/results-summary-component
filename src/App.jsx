import { useState } from 'react'
import './App.css'
import Result from './components/Result'
import Summary from './components/Summary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="results-summary">
      <Result />
      <Summary />
    </div>
  )
}

export default App
