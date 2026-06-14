import React, { useContext, useState } from 'react'
import { assets } from "../assets/assets";
import { useForm } from "react-hook-form"
import api from '../api';
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { toastManager } from '@/components/ui/toast'

const Register = ({ Sign, setSign }) => {
    const { setUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const showSuccess = (message, timeout = 1000) => {
        toastManager.add({ type: 'success', title: message, timeout });
    };

    const showError = (message, timeout = 1000) => {
        toastManager.add({ type: 'error', title: message, timeout });
    };

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
                res = await api.post(`/auth/register`, data);
            } else {
                res = await api.post(`/auth/login`, data);
            }

            if (res.data.success) {
                setUser(true);
                showSuccess(res.data.message, 2000);
                reset();
                setTimeout(() => navigate('/dashboard'), 1500);
            } else {
                showError(res.data.message, 2000);
            }
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message || "An unexpected error occurred. Please try again.";
            showError(errorMessage, 3000);
            console.error("Auth Error:", err);
        }
    };

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-(--canvas-soft) selection:bg-(--link-blue) selection:text-white">

            {/* Logo */}
            <div className="absolute top-10 left-10 md:left-12">
                <img
                    src={assets.logo}
                    alt="Logo"
                    className="h-15 w-auto cursor-pointer dark:invert"
                    onClick={() => navigate('/')}
                />
            </div>

            {/* Auth Card */}
            <div className="card-marketing w-full max-w-[400px] z-10 mx-4">
                {/* Subtle Gradient Accent */}
                <div className="gradient-accent absolute top-0 left-0" />

                <div className="p-8 md:p-10">
                    <div className="mb-8">
                        <h1 className="text-display-lg text-(--ink) mb-2">
                            {Sign === 'Sign Up' ? 'Create your account.' : 'Welcome back.'}
                        </h1>
                        <p className="text-body-md text-(--body)">
                            {Sign === 'Sign Up'
                                ? 'Start building your next SaaS today.'
                                : 'Sign in to manage your deployment.'}
                        </p>
                    </div>


                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {Sign === 'Sign Up' && (
                            <div className="space-y-1.5">
                                <label className="text-caption-mono text-(--mute) uppercase tracking-wider">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Sumit Rathod"
                                    className="form-input w-full"
                                    {...register("name", { required: Sign === 'Sign Up' })}
                                />
                                {errors.name && <span className="text-red-500 text-xs">Name is required</span>}
                            </div>
                        )}

                        <div className="space-y-1.5">
                            <label className="text-caption-mono text-(--mute) uppercase tracking-wider">
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
                                <label className="text-caption-mono text-(--mute) uppercase tracking-wider">
                                    Password
                                </label>
                                {Sign === 'Login' && (
                                    <button type="button" className="text-caption text-(--mute) hover:text-(--ink) transition-colors">
                                        Forgot password?
                                    </button>
                                )}
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    className="form-input w-full pr-12"
                                    {...register("password", { required: true, minLength: 6 })}
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-(--mute) hover:text-(--ink) transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4" strokeWidth={1.8} />
                                    ) : (
                                        <Eye className="h-4 w-4" strokeWidth={1.8} />
                                    )}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="button-primary w-full mt-2"
                        >
                            {Sign === 'Sign Up' ? 'Sign Up' : 'Continue'}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-(--hairline) text-center">
                        <p className="text-body-sm text-(--body)">
                            {Sign === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"}
                            {' '}
                            <button
                                onClick={() => {
                                    setSign(Sign === 'Sign Up' ? 'Login' : 'Sign Up');
                                    reset();
                                }}
                                className="text-(--ink) font-medium hover:underline underline-offset-4"
                            >
                                {Sign === 'Sign Up' ? 'Log in' : 'Sign up'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer semantic */}
            <div className="mt-12 text-caption-mono text-(--mute) uppercase tracking-tighter">
                &copy; {new Date().getFullYear()} — Auth Service App
            </div>
        </div>
    );
};

export default Register;
