import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Project from './Pages/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/projects' element={<Project/>} />
      </Routes>
    
    </>
  )
}

export default App
