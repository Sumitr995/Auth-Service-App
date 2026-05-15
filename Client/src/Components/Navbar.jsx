import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ setSign }) => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[var(--hairline)] bg-[var(--canvas)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-10">
        
        {/* Logo Section */}
        <div 
          className="flex items-center gap-2.5 cursor-pointer group"
          onClick={() => navigate('/')}
        >
          <svg 
            width="28" 
            height="25" 
            viewBox="0 0 76 65" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-[var(--ink)]"
          >
            <path d="M37.5274 0L75.0548 65L0 65L37.5274 0Z" fill="currentColor"/>
          </svg>
          <span className="text-display-sm text-[var(--ink)] hidden sm:block">
            SUMIT
          </span>
        </div>

        {/* Navigation Links - Hidden on Mobile */}
        <div className="hidden items-center gap-1 md:flex">
          {['Features', 'Templates', 'Integrations', 'Customers', 'Pricing'].map((item) => (
            <button 
              key={item}
              className="px-3 py-1.5 text-body-sm text-[var(--body)] hover:text-[var(--ink)] hover:bg-[var(--canvas-soft-2)] rounded-full transition-all duration-200"
            >
              {item}
            </button>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => {
              navigate('/login');
              setSign('Login');
            }}
            className="px-4 py-1.5 text-body-sm-strong text-[var(--body)] hover:text-[var(--ink)] cursor-pointer transition-colors"
          >
            Log In
          </button>
          <button 
            onClick={() => {
              navigate('/register');
              setSign('Sign Up');
            }}
            className="nav-cta-signup cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
