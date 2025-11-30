import React from 'react'
import { assets } from "../assets/assets";
import { Navigate, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    return (
        <div className=' h-screen flex items-center justify-center bg-gray-400 relative '>
            <img className=' absolute top-5 left-5 sm:left-5  w-28 sm:w-32 cursor-pointer' src={assets.logo} alt="" />
            <div className=' bg-gray-900 w-[30vw] h-[60vh] rounded-2xl flex flex-col items-center justify-center'>
                <h3 className='px-2 text-2xl font-bold text-white'>
                    Create Account
                </h3>
                <p className='text-purple-500 text-md font-medium p-2 '>
                    Create your account
                </p>
                <div>
                    <form>
                        <div
                            className='flex items-center justify-center h-10  border rounded-2xl border-white my-2.5 w-[280px]'>
                            <img className='px-2 ' src={assets.person_icon} alt="" />
                            <input className='text-white px-2 outline-none border-none bg-transparent' type="text" placeholder='Your Name' />
                        </div>
                        <div className='flex items-center justify-center h-10  border rounded-2xl border-white my-2.5 w-[280px]'>
                            <img className='px-2 ' src={assets.mail_icon} alt="" />
                            <input className='text-white px-2 outline-none border-none bg-transparent' type="email" placeholder='Your Email' />
                        </div>
                        <div className='flex items-center justify-center h-10  border rounded-2xl border-white my-2.5 w-[280px] '>
                            <img className='px-2 ' src={assets.lock_icon} alt="" />
                            <input className='text-white px-2 outline-none border-none bg-transparent' type="password" placeholder='Your Password' />
                        </div>
                        <div className='text-purple-500 hover:text-purple-800 cursor-pointer w-32 text-center hover:underline'>
                            forgot password?
                        </div>
                        <button className='h-10 m-2.5 w-[280px] bg-linear-to-tr to-blue-700 from-purple-700 rounded-2xl text-white text-extrabold cursor-pointer'
                        >Sign up
                        </button>
                        <div className=' w-[280px] text-center text-white text-sm'>
                            Already have an account?
                            {' '}
                            <span 
                            onClick={()=>{
                                navigate('/login')
                            }}
                            className='text-purple-500 hover:text-purple-800 cursor-pointer hover:underline'>
                                Login here
                            </span>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register


