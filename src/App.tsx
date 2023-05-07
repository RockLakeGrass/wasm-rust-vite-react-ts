import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import init, { add } from 'wasm-lib'

const App: React.FC = () => {
  const [isInitWasm, setIsInitWasm] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    void (async () => {
      await init()
      setIsInitWasm(true)
    })()
  }, [])

  if (!isInitWasm) {
    return <p>Initializing WebAssembly ...</p>
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => { setCount((count) => add(count, 1)) }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
