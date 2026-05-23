import React from 'react'
import { CheckCircle2, AlertCircle, Key, Smartphone, Monitor, Globe } from 'lucide-react';

const DashMain = ({ handleReset, handleVerify, UserInfo }) => {
  let firstName = UserInfo?.name.split(" ")[0];
  let initials = UserInfo?.name.trim().split(/\s+/).map(word => word[0].toUpperCase()).join("");
  
  return (
    <main className="mx-auto max-w-[1024px] px-4 md:px-8 py-10 md:py-16">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-display-lg text-[var(--ink)] mb-2">
            Authentication settings.
          </h1>
          <p className="text-body-md text-[var(--body)] max-w-[500px]">
            Manage your identity, security preferences, and active sessions.
          </p>
        </div>
      </div>

      {/* Main Settings Grid */}
      <div className="flex flex-col gap-8">
        
        {/* Profile Card */}
        <section className="card-marketing overflow-hidden">
          <div className="px-6 py-5 border-b border-[var(--hairline)] flex justify-between items-center bg-[var(--canvas-soft-2)]">
             <h3 className="text-body-sm-strong text-[var(--ink)]">Profile</h3>
          </div>
          <div className="p-6">
             <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[var(--violet)] to-[var(--highlight-pink)] flex items-center justify-center text-display-sm text-white">
                   {initials}
                </div>
                <div>
                   <p className="text-body-md-strong text-[var(--ink)] mb-1">{UserInfo?.name}</p>
                   <p className="text-body-sm text-[var(--body)] mb-3">{UserInfo?.email}</p>
                   <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-caption border ${
                     UserInfo?.isAccountVerfied 
                     ? 'bg-green-50 text-green-700 border-green-200' 
                     : 'bg-amber-50 text-amber-700 border-amber-200'
                   }`}>
                      {UserInfo?.isAccountVerfied ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                      {UserInfo?.isAccountVerfied ? 'Email Verified' : 'Unverified Email'}
                   </div>
                </div>
             </div>
             
             {!UserInfo?.isAccountVerfied && (
                <div className="mt-6 p-4 rounded-md bg-[var(--canvas-soft-2)] border border-[var(--hairline)] flex items-center justify-between">
                   <div>
                      <p className="text-body-sm-strong text-[var(--ink)]">Verify your email address</p>
                      <p className="text-body-sm text-[var(--body)] mt-0.5">Required to unlock full account features.</p>
                   </div>
                   <button 
                      onClick={handleVerify}
                      className="nav-cta-signup h-9 px-4 cursor-pointer"
                   >
                      Send OTP
                   </button>
                </div>
             )}
          </div>
        </section>

        {/* Security Card */}
        <section className="card-marketing overflow-hidden">
          <div className="px-6 py-5 border-b border-[var(--hairline)] bg-[var(--canvas-soft-2)]">
             <h3 className="text-body-sm-strong text-[var(--ink)]">Security</h3>
          </div>
          <div className="divide-y divide-[var(--hairline)]">
             <div className="px-6 py-5 flex items-center justify-between hover:bg-[var(--canvas-soft-2)] transition-colors">
                <div className="flex gap-4">
                   <Key className="w-5 h-5 text-[var(--mute)] mt-0.5" />
                   <div>
                      <p className="text-body-sm-strong text-[var(--ink)]">Password</p>
                      <p className="text-body-sm text-[var(--body)] mt-0.5">Last changed 3 months ago</p>
                   </div>
                </div>
                <button 
                   onClick={handleReset}
                   className="form-input h-8 px-4 text-body-sm font-medium cursor-pointer hover:border-[var(--ink)]"
                >
                   Update
                </button>
             </div>
             
             <div className="px-6 py-5 flex items-center justify-between hover:bg-[var(--canvas-soft-2)] transition-colors">
                <div className="flex gap-4">
                   <ShieldAlert className="w-5 h-5 text-[var(--mute)] mt-0.5" />
                   <div>
                      <p className="text-body-sm-strong text-[var(--ink)]">Two-Factor Authentication</p>
                      <p className="text-body-sm text-[var(--body)] mt-0.5">Add an extra layer of security to your account.</p>
                   </div>
                </div>
                <button className="form-input h-8 px-4 text-body-sm font-medium cursor-pointer hover:border-[var(--ink)]">
                   Enable
                </button>
             </div>
          </div>
        </section>

        {/* Active Sessions Card */}
        <section className="card-marketing overflow-hidden">
          <div className="px-6 py-5 border-b border-[var(--hairline)] bg-[var(--canvas-soft-2)] flex justify-between items-center">
             <h3 className="text-body-sm-strong text-[var(--ink)]">Active Sessions</h3>
             <button className="text-body-sm text-[var(--body)] hover:text-[var(--ink)] transition-colors cursor-pointer">
                Log out all
             </button>
          </div>
          <div className="divide-y divide-[var(--hairline)]">
             <div className="px-6 py-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-[var(--canvas-soft-2)] flex items-center justify-center border border-[var(--hairline)]">
                      <Monitor className="w-5 h-5 text-[var(--ink)]" />
                   </div>
                   <div>
                      <p className="text-body-sm-strong text-[var(--ink)] flex items-center gap-2">
                         Windows · Chrome
                         <span className="px-1.5 py-0.5 rounded-xs bg-[var(--ink)] text-[var(--canvas)] text-[10px] font-bold uppercase tracking-wider">Current</span>
                      </p>
                      <p className="text-body-sm text-[var(--body)] mt-0.5 flex items-center gap-1">
                         <Globe className="w-3.5 h-3.5" /> Mumbai, India · Active now
                      </p>
                   </div>
                </div>
             </div>
             
             <div className="px-6 py-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-[var(--canvas-soft-2)] flex items-center justify-center border border-[var(--hairline)]">
                      <Smartphone className="w-5 h-5 text-[var(--mute)]" />
                   </div>
                   <div>
                      <p className="text-body-sm-strong text-[var(--ink)]">
                         iPhone · Safari
                      </p>
                      <p className="text-body-sm text-[var(--body)] mt-0.5 flex items-center gap-1">
                         <Globe className="w-3.5 h-3.5" /> Delhi, India · Last active 3 days ago
                      </p>
                   </div>
                </div>
                <button className="text-body-sm font-medium text-red-500 hover:text-red-600 transition-colors cursor-pointer">
                   Revoke
                </button>
             </div>
          </div>
        </section>

      </div>
    </main>
  )
}

// Fixed missing ShieldAlert import manually since I used it
import { ShieldAlert } from 'lucide-react';

export default DashMain;
