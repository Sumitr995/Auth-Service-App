import React, { useState } from 'react';
import { User, LogOut, Shield, KeyRound, Mail, Activity, Lock, Bell } from 'lucide-react';
import DashNavbar from '../Components/dashNavbar';
import DashMain from '../Components/DashMain';

export default function AuthLandingPage() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(null);

  const handleVerify = () => {
    setShowModal('verify');
  };

  const handleReset = () => {
    setShowModal('reset');
  };

  const handleLogout = () => {
    alert('Logged out successfully');
  };

  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Navigation */}
      <DashNavbar showMenu={showMenu} setShowMenu={setShowMenu} showModal={showModal} setShowModal={setShowModal} handleVerify={handleVerify} handleReset={handleReset} handleLogout={handleLogout} closeModal={closeModal} />
      {/* Main content */}
      <DashMain showMenu={showMenu} setShowMenu={setShowMenu} showModal={showModal} setShowModal={setShowModal} handleVerify={handleVerify} handleReset={handleReset} handleLogout={handleLogout} closeModal={closeModal} />
 

      {/* Modals */}
      {showModal === 'verify' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={closeModal}>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 max-w-md w-full mx-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center space-x-3 mb-4">
              <Mail className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-bold">Verify Account</h2>
            </div>
            <p className="text-gray-400 mb-6">A verification link has been sent to john@example.com. Please check your inbox and click the link to verify your account.</p>
            <button onClick={closeModal} className="w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Got it
            </button>
          </div>
        </div>
      )}
      {showModal === 'reset' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={closeModal}>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 max-w-md w-full mx-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center space-x-3 mb-4">
              <KeyRound className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-bold">Reset Password</h2>
            </div>
            <p className="text-gray-400 mb-4 text-sm">Enter your email to receive a password reset link</p>
            <input 
              type="email" 
              placeholder="john@example.com"
              defaultValue="john@example.com"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg mb-4 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button onClick={closeModal} className="w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Send Reset Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
}