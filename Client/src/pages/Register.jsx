import React, { useState, useContext, useEffect } from 'react'
import { assets } from "../assets/assets";
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from 'react-router-dom';


const Register = ({ Sign, setSign }) => {
    const { setUser, setToken } = useContext(AuthContext);

    const Backend_URL = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        let res;
        try {

            if (Sign === 'Sign Up') {
                res = await axios.post(
                    `${Backend_URL}/auth/register`,
                    data,
                    { withCredentials: true }
                );
            } else {
                res = await axios.post(
                    `${Backend_URL}/auth/login`,
                    data,
                    { withCredentials: true }
                );
            }

            setUser(true);

            if (res.data.success) {
                toast.success(res.data.message, {
                    position: "top-right",
                    autoClose: 2000,
                });
            } else {
                toast.error(res.data.message, {
                    position: "top-right",
                    autoClose: 2000,
                });
            }

            reset();  
            navigate('/dashboard')

        } catch (err) {
            toast.error(err.response?.data?.message || "Something went wrong");
        }
    };




    return (
        <div className=' h-screen flex items-center justify-center bg-[url("https://img.freepik.com/free-vector/grey-hexagons-black-background_78370-2098.jpg?t=st=1764520835~exp=1764524435~hmac=1eb5cf83b58afa46ea5198423a50ab1e191c9af1b3f9dea51c7a12ad6240332e&w=2000")] relative bg-center bg-no-repeat pointer-events-none '>

            <img className=' absolute top-5 left-5 sm:left-5  w-28 sm:w-32 cursor-pointer' src={assets.logo} alt="" />

            {/* FIXED z-index HERE */}
            <div className=' bg-gray-900 w-[30vw] h-[60vh] rounded-2xl flex flex-col items-center justify-center z-999 pointer-events-auto '>
                <h3 className='px-2 text-2xl font-bold text-white'>
                    {Sign === 'Sign Up' ? 'Create Account' : 'Login Account'}
                </h3>

                <p className='text-purple-500 text-md font-medium p-2'>
                    {Sign === 'Sign Up' ? 'Create your account' : 'Login your account'}
                </p>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {Sign === 'Sign Up' && (
                            <div className='flex items-center justify-center h-10 border rounded-2xl border-white my-2.5 w-[280px]'>
                                <img className='px-2' src={assets.person_icon} alt="" />
                                <input
                                    className='text-white px-2 outline-none border-none bg-transparent'
                                    type="text"
                                    placeholder='Your Name'
                                    {...register("name")}
                                />
                            </div>
                        )}

                        <div className='flex items-center justify-center h-10 border rounded-2xl border-white my-2.5 w-[280px]'>
                            <img className='px-2' src={assets.mail_icon} alt="" />
                            <input
                                className='text-white px-2 outline-none border-none bg-transparent'
                                type="email"
                                placeholder='Your Email'
                                {...register("email")}
                            />
                        </div>

                        <div className='flex items-center justify-center h-10 border rounded-2xl border-white my-2.5 w-[280px]'>
                            <img className='px-2' src={assets.lock_icon} alt="" />
                            <input
                                className='text-white px-2 outline-none border-none bg-transparent'
                                type="password"
                                placeholder='Your Password'
                                {...register("password")}
                            />
                        </div>

                        <div className='text-purple-500 hover:text-purple-800 cursor-pointer w-32 text-center hover:underline'>
                            forgot password?
                        </div>

                        <button className='h-10 m-2.5 w-[280px] bg-linear-to-tr to-blue-700 from-purple-700 rounded-2xl text-white text-extrabold cursor-pointer'>
                            {Sign === 'Sign Up' ? 'Sign Up' : 'Login'}
                        </button>

                        <div className=' w-[280px] text-center text-white text-sm'>
                            {Sign === 'Sign Up' ? 'Already have an account?' : `Don't have an account?`}
                            {' '}
                            <span
                                onClick={() => setSign(Sign === 'Sign Up' ? 'Login' : 'Sign Up')}
                                className='text-purple-500 hover:text-purple-800 cursor-pointer hover:underline pointer-events-auto'
                            >
                                {Sign === 'Sign Up' ? 'Login Here' : 'Sign Up'}
                            </span>
                        </div>

                    </form>
                </div>
            </div>

            <ToastContainer />

        </div>
    );
};

export default Register;
