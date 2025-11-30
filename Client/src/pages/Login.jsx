import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Login = () => {
  const [State, setState] = useState('Sign Up')
  return (
    <div className=' h-screen flex items-center justify-center bg-linear-to-br from-blue-600 to-purple-900 '>
      <img className=' absolute left-5 top-5 sm:left-5  w-28 sm:w-32 cursor-pointer' src={assets.logo} alt="" />
      <div>
        <h3>
          {State === 'Sign Up' ? 'Create Account' : 'Login'}
        </h3>
        <p>
          {State === 'Sign Up' ? 'Create your account' : 'Login to Your Account!'}
        </p>
      </div>
    </div>
  )
}

export default Login
