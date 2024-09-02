import { useState } from 'react'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './views/HomePage'
import StgoPage from './views/StgoPage'
//import './App.css'
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/Santiago' element={<StgoPage/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
