import React from 'react'
import { User, LogOut, Shield, KeyRound, Mail, Activity, Lock, Bell } from 'lucide-react';

const DashMain = ({ handleReset, handleVerify, UserInfo }) => {
  let firstName = UserInfo?.name.split(" ")[0];
  return (
    <main className="relative z-1 max-w-6xl mx-auto px-8 py-16">
      {/* Welcome section */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-3">
          <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">Welcome back, {firstName}</span>
        </h1>
        <p className="text-gray-400 text-lg">Your account is secure and ready to use</p>
      </div>

      {/* Account status card */}
      <div className="mb-8 p-6 rounded-xl bg-linear-to-br from-blue-900/30 to-purple-900/30 border border-blue-800/50 backdrop-blur-sm">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>Account Status: Active</span>
            </h3>
            <p className="text-gray-400 text-sm">Last login: Today at 2:34 PM</p>
          </div>
          <div
            className={
              UserInfo?.isAccountVerfied
                ? "px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold"
                : "px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-semibold"
            }
          >
            {UserInfo?.isAccountVerfied ? "Verified" : "Not Verified"}
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <button
          onClick={handleVerify}
          className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-green-500/50 transition-all backdrop-blur-sm text-left group"
        >
          <Mail className="w-10 h-10 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold mb-2">Verify Account</h3>
          <p className="text-gray-400 text-sm">Confirm your email address for enhanced security</p>
        </button>

        <button
          onClick={handleReset}
          className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-yellow-500/50 transition-all backdrop-blur-sm text-left group"
        >
          <KeyRound className="w-10 h-10 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold mb-2">Reset Password</h3>
          <p className="text-gray-400 text-sm">Update your password to keep your account secure</p>
        </button>

        <button className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all backdrop-blur-sm text-left group">
          <Bell className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold mb-2">Notifications</h3>
          <p className="text-gray-400 text-sm">Manage your security alerts and preferences</p>
        </button>
      </div>

      {/* Security overview */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Activity className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-semibold">Recent Activity</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-800">
              <span className="text-sm text-gray-400">Login from Chrome</span>
              <span className="text-xs text-gray-500">2 hours ago</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-800">
              <span className="text-sm text-gray-400">Password changed</span>
              <span className="text-xs text-gray-500">3 days ago</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-gray-400">Email verified</span>
              <span className="text-xs text-gray-500">1 week ago</span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Lock className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-semibold">Security Score</h3>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-3xl font-bold text-green-400">85/100</span>
              <span className="text-sm text-gray-400">Strong</span>
            </div>
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-linear-to-r from-green-500 to-emerald-400 rounded-full"></div>
            </div>
          </div>
          <p className="text-sm text-gray-400">Your account security is strong. Enable 2FA for a perfect score.</p>
        </div>
      </div>
    </main>
  )
}

export default DashMain;