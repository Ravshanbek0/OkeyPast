import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/home/Home'
import Pokup from './pages/pokupka/Pokup'
import Sell from './pages/sells/Sell'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Narx from './pages/narxlar/Narx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokup' element={<Pokup />} />
          <Route path='/sell' element={<Sell />} />
          <Route path='/narx' element={<Narx/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
