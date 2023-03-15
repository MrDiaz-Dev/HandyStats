import { Dashboard } from './pages/Dashboard'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FrontPage } from './pages/FrontPage'
import { LogIn } from './pages/Login'
import { SingIn } from './pages/SingIn'
// import './App.css'

function App() {

  return (

    // <LogIn />

    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <FrontPage /> } />
        <Route path='login' element={ <LogIn /> }/>
        <Route path='singin' element={ <SingIn /> }/>
        <Route path='dashboard/:email' element={ <Dashboard /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
