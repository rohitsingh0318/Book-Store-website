import React from 'react'
import Home from './home/home.jsx'
import { Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses.jsx'
import Signpu from './components/Signpu.jsx'

function App() {

  return (
    <>
     {/* <Home/>
     <Course/> */}
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Courses/>}/>
        <Route path='/signup' element={<Signpu/>} />
     </Routes>
    </>
  )
}

export default App
