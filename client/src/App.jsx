import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './Components/Header'

export default function App() {
  return (
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About />} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/projects' element={<Projects/>} />
    </Routes>
   </BrowserRouter>
  )
}
