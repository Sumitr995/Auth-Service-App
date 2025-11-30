import React, { useState } from 'react'
import { assets } from "../assets/assets";
// import { Navigate, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"

const Register = () => {
    const [Sign, setSign] = useState('Sign Up')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

    // const navigate = useNavigate()
    return (
        <div className=' h-screen flex items-center justify-center bg-gray-400 relative '>
            <img className=' absolute top-5 left-5 sm:left-5  w-28 sm:w-32 cursor-pointer' src={assets.logo} alt="" />
            <div className=' bg-gray-900 w-[30vw] h-[60vh] rounded-2xl flex flex-col items-center justify-center'>
                <h3 className='px-2 text-2xl font-bold text-white' >
                    {(Sign === 'Sign Up' ? 'Create Account' : 'Login Account')}
                </h3>
                <p className='text-purple-500 text-md font-medium p-2 '>
                    {(Sign === 'Sign Up' ? 'Create your account' : 'Login your account' )}
                </p>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        {(Sign === 'Sign Up') ? (<div
                            className='flex items-center justify-center h-10  border rounded-2xl border-white my-2.5 w-[280px]'>
                            <img className='px-2 ' src={assets.person_icon} alt="" />
                            <input className='text-white px-2 outline-none border-none bg-transparent' type="text"
                            placeholder='Your Name'
                            defaultValue={''}
                            {...register("name")} />
                        </div>) : (<div className='hidden' ></div>)}
                        <div className='flex items-center justify-center h-10  border rounded-2xl border-white my-2.5 w-[280px]'>
                            <img className='px-2 ' src={assets.mail_icon} alt="" />
                            <input className='text-white px-2 outline-none border-none bg-transparent' type="email" 
                            placeholder='Your Email' {...register("email")} />
                        </div>
                        <div className='flex items-center justify-center h-10  border rounded-2xl border-white my-2.5 w-[280px] '>
                            <img className='px-2 ' src={assets.lock_icon} alt="" />
                            <input className='text-white px-2 outline-none border-none bg-transparent' type="password"
                             placeholder='Your Password' {...register("password")} />
                        </div>
                        <div className='text-purple-500 hover:text-purple-800 cursor-pointer w-32 text-center hover:underline'>
                            forgot password?
                        </div>
                        <button className='h-10 m-2.5 w-[280px] bg-linear-to-tr to-blue-700 from-purple-700 rounded-2xl text-white text-extrabold cursor-pointer'
                        >{(Sign === 'Sign Up' ? 'Sign Up' : 'Login' )}
                        </button>
                        <div className=' w-[280px] text-center text-white text-sm'>
                            {(Sign==='Sign Up' ? 'Already have an account?' : `Don't have an account?`)}
                            {' '}
                            <span 
                            onClick={()=>{
                                (Sign === 'Sign Up') ? setSign('Login') : setSign('Sign Up')
                                 }}
                            className='text-purple-500 hover:text-purple-800 cursor-pointer hover:underline'>
                                {(Sign==='Sign Up' ? 'Login Here' : 'Sign Up')}
                            </span>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register


