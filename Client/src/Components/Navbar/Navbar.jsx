import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ setSign }) => {
  const navigate = useNavigate();

  const navItems = [
    { label: 'Features', path: '/features' },
    { label: 'Docs', path: '/docs' },
    { label: 'Integration', path: '/integration' },
    { label: 'GitHub', href: 'https://github.com/Sumitr995/Auth-Service-App' },
    { label: 'Pricing', path: '/pricing' },
  ]

  const handleNavClick = (item) => {
    if (item.href) {
      window.open(item.href, '_blank', 'noopener,noreferrer')
      return
    }

    if (item.path) navigate(item.path)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-[var(--hairline)] bg-[var(--canvas)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-10">
        
        {/* Logo Section */}
        <div 
          className="flex items-center gap-2.5 cursor-pointer group"
          onClick={() => navigate('/')}
        >
          <img src={assets.favicon} alt="Logo" className="w-6 h-6 group-hover:animate-spin-slow transition-transform" />
          <span className="text-display-sm text-(--ink) hidden sm:block">
            AuthVault
          </span>
        </div>

        {/* Navigation Links - Hidden on Mobile */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button 
              key={item.path || item.href}
              type="button"
              onClick={() => handleNavClick(item)}
              className="px-3 py-1.5 cursor-pointer text-body-sm text-[var(--body)] hover:text-[var(--ink)] hover:bg-[var(--canvas-soft-2)] rounded-full transition-all duration-200"
            >
              {item.label}
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
