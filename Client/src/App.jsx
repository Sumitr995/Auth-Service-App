import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import EmailVerify from './pages/EmailVerify'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/reset-password' element={<ResetPassword/>}/>
          <Route path='/email-verify' element={<EmailVerify/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    </div>
  )
}

export default App
