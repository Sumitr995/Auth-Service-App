import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import ShapeGrid from '../ui/ShapeGrid'

const Header = ({ setSign }) => {
    const navigate = useNavigate()

    return (
        <header className="relative isolate flex flex-col items-center justify-center pt-24 pb-45 px-6 overflow-hidden">
            {/* Mesh Gradient Background */}
            {/* <div className="mesh-gradient-hero absolute top-[-20%] left-0 w-full h-[120%] z-0 pointer-events-none" /> */}

            {/* Shape Grid Background */}
            <div className="absolute inset-0 z-10 opacity-60 pointer-events-none">
                <ShapeGrid direction="diagonal" speed={0.4} shape='hexagon' squareSize={44} hoverTrailAmount={1} />
            </div>

            <div className="relative mx-auto max-w-[1200px] text-center z-20">
                {/* Technical Eyebrow Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--canvas) border border-(--hairline) shadow-sm mb-10 group cursor-pointer hover:border-(--mute) transition-colors">
                    <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                    <span className="text-caption-mono text-(--body) uppercase tracking-widest">
                        Now in Public Beta: Enterprise Auth v2.0
                    </span>
                    <svg className="w-3 h-3 text-(--mute) group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>

                {/* Main Headline */}
                <h1 className="text-display-xl text-(--ink) mb-8 max-w-[1000px] mx-auto">
                    Authentication for the modern SaaS.
                </h1>

                {/* Subtitle */}
                <p className="text-body-lg text-(--body) max-w-[650px] mx-auto mb-12">
                    Embed beautiful, secure, and extensible user authentication into your application in minutes. The complete identity layer for your next big thing.
                </p>

                {/* Primary CTA Row */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        className="button-primary cursor-pointer px-10 shadow-lg shadow-black/5"
                        onClick={() => {
                            navigate('/register');
                            setSign('Sign Up');
                        }}
                    >
                        Start for Free
                    </button>
                    <button
                        className="button-secondary cursor-pointer px-10"
                        onClick={() => {
                            navigate('/docs');
                        }}
                    >
                        Read Documentation
                    </button>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 z-20 bg-linear-to-t from-(--canvas-soft) to-transparent" />
        </header>
    )
}

export default Header
