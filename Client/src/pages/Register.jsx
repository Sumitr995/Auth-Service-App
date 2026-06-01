import React, { useState, useContext } from 'react'
import { assets } from "../assets/assets";
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from 'react-router-dom';

const Register = ({ Sign, setSign }) => {
    const { setUser } = useContext(AuthContext);
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
                res = await axios.post(`${Backend_URL}/auth/register`, data, { withCredentials: true });
            } else {
                res = await axios.post(`${Backend_URL}/auth/login`, data, { withCredentials: true });
            }

            if (res.data.success) {
                setUser(true);
                toast.success(res.data.message, { position: "top-right", autoClose: 2000 });
                reset();
                setTimeout(() => navigate('/dashboard'), 1500);
            } else {
                toast.error(res.data.message, { position: "top-right", autoClose: 2000 });
            }
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message || "An unexpected error occurred. Please try again.";
            toast.error(errorMessage, { position: "top-right", autoClose: 3000 });
            console.error("Auth Error:", err);
        }
    };

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[var(--canvas-soft)] selection:bg-[var(--link-blue)] selection:text-white">

            {/* Logo */}
            <div className="absolute top-10 left-10 md:left-12">
                <img
                    src={assets.logo}
                    alt="Logo"
                    className="h-8 w-auto cursor-pointer dark:invert"
                    onClick={() => navigate('/')}
                />
            </div>

            {/* Auth Card */}
            <div className="card-marketing w-full max-w-[400px] z-10 mx-4">
                {/* Subtle Gradient Accent */}
                <div className="gradient-accent absolute top-0 left-0" />

                <div className="p-8 md:p-10">
                    <div className="mb-8">
                        <h1 className="text-display-lg text-[var(--ink)] mb-2">
                            {Sign === 'Sign Up' ? 'Create your account.' : 'Welcome back.'}
                        </h1>
                        <p className="text-body-md text-[var(--body)]">
                            {Sign === 'Sign Up'
                                ? 'Start building your next SaaS today.'
                                : 'Sign in to manage your deployment.'}
                        </p>
                    </div>


                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {Sign === 'Sign Up' && (
                            <div className="space-y-1.5">
                                <label className="text-caption-mono text-[var(--mute)] uppercase tracking-wider">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Guillermo Rauch"
                                    className="form-input w-full"
                                    {...register("name", { required: Sign === 'Sign Up' })}
                                />
                                {errors.name && <span className="text-red-500 text-xs">Name is required</span>}
                            </div>
                        )}

                        <div className="space-y-1.5">
                            <label className="text-caption-mono text-[var(--mute)] uppercase tracking-wider">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="form-input w-full"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500 text-xs">Valid email is required</span>}
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center">
                                <label className="text-caption-mono text-[var(--mute)] uppercase tracking-wider">
                                    Password
                                </label>
                                {Sign === 'Login' && (
                                    <button type="button" className="text-caption text-[var(--mute)] hover:text-[var(--ink)] transition-colors">
                                        Forgot password?
                                    </button>
                                )}
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="form-input w-full"
                                {...register("password", { required: true, minLength: 6 })}
                            />
                        </div>

                        <button
                            type="submit"
                            className="button-primary w-full mt-2"
                        >
                            {Sign === 'Sign Up' ? 'Sign Up' : 'Continue'}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-[var(--hairline)] text-center">
                        <p className="text-body-sm text-[var(--body)]">
                            {Sign === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"}
                            {' '}
                            <button
                                onClick={() => {
                                    setSign(Sign === 'Sign Up' ? 'Login' : 'Sign Up');
                                    reset();
                                }}
                                className="text-[var(--ink)] font-medium hover:underline underline-offset-4"
                            >
                                {Sign === 'Sign Up' ? 'Log in' : 'Sign up'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer semantic */}
            <div className="mt-12 text-caption-mono text-[var(--mute)] uppercase tracking-tighter">
                &copy; {new Date().getFullYear()} — Auth Service App
            </div>

            <ToastContainer />
        </div>
    );
};

export default Register;
