import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
// import Login from './pages/Login'
// import ResetPassword from './pages/ResetPassword'
// import EmailVerify from './pages/EmailVerify'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Features from './pages/Features'
import Docs from './pages/Docs'
import Integration from './pages/Integration'
import Price from './pages/Price'
const App = () => {
  const [Sign, setSign] = useState('Sign Up');
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home Sign={Sign} setSign={setSign} />}/>
          <Route path='/features' element={<Features Sign={Sign} setSign={setSign} />}/>
          <Route path='/docs' element={<Docs Sign={Sign} setSign={setSign} />}/>
          <Route path='/integration' element={<Integration Sign={Sign} setSign={setSign} />}/>
          <Route path='/pricing' element={<Price Sign={Sign} setSign={setSign} />}/>
          <Route path='/register' element={<Register Sign={Sign} setSign={setSign} />}/>
          <Route path='/login' element={<Register Sign={Sign} setSign={setSign} />}/>
          {/* <Route path='/reset-password' element={<ResetPassword Sign={Sign} setSign={setSign} />}/> */}
          {/* <Route path='/email-verify' element={<EmailVerify Sign={Sign} setSign={setSign} />}/> */}
          <Route path='/dashboard' element={<Dashboard Sign={Sign} setSign={setSign} />}/>
        </Routes>
    </div>
  )
}

export default App
