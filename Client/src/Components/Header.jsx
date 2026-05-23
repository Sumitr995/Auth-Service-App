import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Header = ({ setSign }) => {
    const navigate = useNavigate()

    return (
        <header className="relative flex flex-col items-center justify-center pt-24 pb-32 px-6 overflow-hidden">
            {/* Mesh Gradient Background */}
            <div className="mesh-gradient-hero absolute top-[-20%] left-0 w-full h-[120%] -z-10 pointer-events-none" />

            <div className="mx-auto max-w-[1200px] text-center z-10">
                {/* Technical Eyebrow Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--canvas)] border border-[var(--hairline)] shadow-sm mb-10 group cursor-pointer hover:border-[var(--mute)] transition-colors">
                    <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                    <span className="text-caption-mono text-[var(--body)] uppercase tracking-[0.1em]">
                        Now in Public Beta: Enterprise Auth v2.0
                    </span>
                    <svg className="w-3 h-3 text-[var(--mute)] group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>

                {/* Main Headline */}
                <h1 className="text-display-xl text-[var(--ink)] mb-8 max-w-[1000px] mx-auto">
                    Authentication for the modern SaaS.
                </h1>

                {/* Subtitle */}
                <p className="text-body-lg text-[var(--body)] max-w-[650px] mx-auto mb-12">
                    Embed beautiful, secure, and extensible user authentication into your application in minutes. The complete identity layer for your next big thing.
                </p>

                {/* Primary CTA Row */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        className="button-primary px-10 shadow-lg shadow-black/5"
                        onClick={() => {
                            navigate('/register');
                            setSign('Sign Up');
                        }}
                    >
                        Start for Free
                    </button>
                    <button
                        className="button-secondary px-10"
                        onClick={() => {
                           // Navigate to docs
                        }}
                    >
                        Read Documentation
                    </button>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[var(--canvas-soft)] to-transparent" />
        </header>
    )
}

export default Header
