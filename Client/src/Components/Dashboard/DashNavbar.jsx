import React from 'react'
import { User, LogOut, Shield, KeyRound, Mail, ChevronDown } from 'lucide-react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const DashNavbar = ({ showMenu, setShowMenu, handleLogout, handleReset, handleVerify, UserInfo }) => {
  const navigate = useNavigate();
  let firstName = UserInfo?.name.split(" ")[0];
  let firstLetters = UserInfo?.name.trim().split(/\s+/).map(word => word[0].toUpperCase()).join("");

  return (
    <nav className="sticky top-0 z-50 w-full h-[64px] border-b border-[var(--hairline)] bg-[var(--canvas)] flex items-center px-4 md:px-6">
      <div className="w-full flex items-center justify-between">
        
        {/* Left Side - Breadcrumb & Logo */}
        <div className="flex items-center gap-4">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate('/dashboard')}
          >
             <svg width="24" height="21" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--ink)]">
                <path d="M37.5274 0L75.0548 65L0 65L37.5274 0Z" fill="currentColor"/>
             </svg>
          </div>
          
          <div className="hidden sm:flex items-center gap-2 text-body-sm">
             <span className="text-[var(--hairline-strong)]">/</span>
             <div className="flex items-center gap-2 text-[var(--ink)] font-medium">
                <div className="w-5 h-5 rounded-[4px] bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-[10px] text-white font-bold">
                   {firstLetters}
                </div>
                {firstName}'s Auth
             </div>
             <span className="text-[var(--hairline-strong)]">/</span>
             <span className="text-[var(--body)]">Settings</span>
          </div>
        </div>

        {/* Right Side - User Profile (Nav CTA Style) */}
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-[var(--hairline)] bg-[var(--canvas)] hover:border-[var(--mute)] transition-all overflow-hidden"
          >
             {UserInfo?.avatar ? (
                <img src={UserInfo.avatar} alt="avatar" className="w-full h-full object-cover" />
             ) : (
                <span className="text-body-sm font-medium text-[var(--ink)]">{firstLetters}</span>
             )}
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-64 bg-[var(--canvas)] border border-[var(--hairline)] rounded-[8px] shadow-lg overflow-hidden z-[100]">
              <div className="px-4 py-3 border-b border-[var(--hairline)] bg-[var(--canvas-soft-2)]">
                <p className="text-body-sm font-medium text-[var(--ink)] truncate">{UserInfo?.name}</p>
                <p className="text-caption text-[var(--mute)] truncate">{UserInfo?.email}</p>
              </div>
              
              <div className="p-1.5 flex flex-col gap-0.5">
                <button
                  onClick={() => setShowMenu(false)}
                  className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-[6px] hover:bg-[var(--canvas-soft-2)] transition-colors text-left text-[var(--ink)] text-body-sm"
                >
                  <span>Profile</span>
                  <span className="text-caption-mono text-[var(--mute)]">⇧⌘P</span>
                </button>
                <button
                  onClick={() => { handleVerify(); setShowMenu(false); }}
                  className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-[6px] hover:bg-[var(--canvas-soft-2)] transition-colors text-left text-[var(--ink)] text-body-sm"
                >
                  <span>Verify Email</span>
                </button>
                <button
                  onClick={() => { handleReset(); setShowMenu(false); }}
                  className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-[6px] hover:bg-[var(--canvas-soft-2)] transition-colors text-left text-[var(--ink)] text-body-sm"
                >
                  <span>Reset Password</span>
                </button>
              </div>

              <div className="p-1.5 border-t border-[var(--hairline)]">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-[6px] hover:bg-[var(--canvas-soft-2)] transition-colors text-left text-[var(--ink)] text-body-sm"
                >
                  <span>Log Out</span>
                  <span className="text-caption-mono text-[var(--mute)]">⌥⇧Q</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default DashNavbar;
