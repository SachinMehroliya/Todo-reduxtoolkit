import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    
    <div className='min-h-screen bg-[#172842] text-center p-10'>
      <h1 className='text-6xl ml-92 text-white'>Learn about Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
