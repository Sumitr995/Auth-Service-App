import React from 'react'
import { User, LogOut, Shield, KeyRound, Mail} from 'lucide-react';
import { assets } from '../assets/assets';


const DashNavbar = ({showMenu, setShowMenu, showModal, setShowModal, handleLogout, handleReset, handleVerify}) => {
  return (
     <nav className="relative z-10 flex items-center justify-between px-8 py-6 bg-transparent backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <img src={assets.logo} alt="logo" />
        </div>

        <div className="relative">
          <button 
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center space-x-3 px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-800 transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-sm font-semibold">
              SR
            </div>
            <span className="text-sm">Sumit</span>
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-56 bg-gray-900 border border-gray-800 rounded-lg shadow-2xl overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-800">
                <p className="text-sm font-medium">Sumit Rathod</p>
                <p className="text-xs text-gray-400 mt-1">itzsumitr995@gmail.com</p>
              </div>
              <button 
                onClick={() => setShowMenu(false)}
                className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 transition-colors text-left"
              >
                <User className="w-4 h-4 text-blue-400" />
                <span className="text-sm">View Profile</span>
              </button>
              <button 
                onClick={handleVerify}
                className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 transition-colors text-left"
              >
                <Mail className="w-4 h-4 text-green-400" />
                <span className="text-sm">Verify Account</span>
              </button>
              <button 
                onClick={handleReset}
                className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 transition-colors text-left"
              >
                <KeyRound className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Reset Password</span>
              </button>
              <button 
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-red-900/20 transition-colors text-left border-t border-gray-800"
              >
                <LogOut className="w-4 h-4 text-red-400" />
                <span className="text-sm text-red-400">Logout</span>
              </button>
            </div>
          )}
        </div>
      </nav>
  )
}

export default DashNavbar;