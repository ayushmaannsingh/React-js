import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-orange-500'>A blog app with appwrite</h1>
     <h1 className="bg-gray-500 text-3xl font-bold underline">
    Hello world!
  </h1>
    </>
  )
}

export default App
