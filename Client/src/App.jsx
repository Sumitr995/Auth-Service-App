import React, { useEffect, useState } from 'react'
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
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
import api from './api'

const App = () => {
  const [Sign, setSign] = useState('Sign Up');
  const [user, setUser] = useState(null);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getUserData = async () => {
    try {
      const { data } = await api.get("/user/data");
      if (data.success) {
        setUser(data.userData);
        // Only set logged in if it's not already true
        setIsLoggedin(true);
      } else {
        setUser(null);
        setIsLoggedin(false);
      }
    } catch (error) {
      console.error("App: Error fetching user data", error);
      setUser(null);
      setIsLoggedin(false);
    } finally {
      setIsLoading(false);
    }
  };

  const checkAuthState = async () => {
    try {
      const { data } = await api.post("/auth/is-auth");
      if (data.success) {
        await getUserData();
      } else {
        setIsLoggedin(false);
        setUser(null);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoggedin(false);
      setUser(null);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuthState();
  }, []);

  return (
    <div>
        <Routes>
          <Route path='/' element={<Home Sign={Sign} setSign={setSign} />}/>
          <Route path='/features' element={<Features Sign={Sign} setSign={setSign} />}/>
          <Route path='/docs' element={<Docs Sign={Sign} setSign={setSign} />}/>
          <Route path='/integration' element={<Integration Sign={Sign} setSign={setSign} />}/>
          <Route path='/pricing' element={<Price Sign={Sign} setSign={setSign} />}/>
          
          <Route element={<PublicRoute isLoggedin={isLoggedin} isLoading={isLoading} />}>
            <Route path='/register' element={<Register Sign={Sign} setSign={setSign} setIsLoggedin={setIsLoggedin} getUserData={getUserData} />}/>
            <Route path='/login' element={<Register Sign={Sign} setSign={setSign} setIsLoggedin={setIsLoggedin} getUserData={getUserData} />}/>
          </Route>
          
          {/* <Route path='/reset-password' element={<ResetPassword Sign={Sign} setSign={setSign} />}/> */}
          {/* <Route path='/email-verify' element={<EmailVerify Sign={Sign} setSign={setSign} />}/> */}
          
          <Route element={<ProtectedRoute isLoggedin={isLoggedin} isLoading={isLoading} />}>
            <Route path='/dashboard' element={
              <Dashboard 
                Sign={Sign} 
                setSign={setSign} 
                user={user} 
                setUser={setUser} 
                setIsLoggedin={setIsLoggedin} 
              />
            }/>
          </Route>
        </Routes>
    </div>
  )
}

export default App
