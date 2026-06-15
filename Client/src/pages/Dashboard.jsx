import React, { useContext, useEffect, useState } from 'react';
import DashNavbar from '../components/Dashboard/DashNavbar';
import DashMain from '../components/Dashboard/DashMain';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { toastManager } from '@/components/ui/toast'
import { AuthContext } from '../Context/AuthContext';

export default function AuthLandingPage({ setSign }) {
  const { user, setUser, setIsLoggedin } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(null);
  const [sentOtp, setSentOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [ResetPassword, setResetPassword] = useState("")
  const [ResetState, setResetState] = useState("resetOTP")
  const [NewPassword, setNewPassword] = useState("")

  const navigate = useNavigate();

  const showSuccess = (message, timeout = 2000) => {
    toastManager.add({ type: 'success', title: message, timeout });
  };

  const showError = (message, timeout = 2000) => {
    toastManager.add({ type: 'error', title: message, timeout, priority: 'high' });
  };

  // Sending OTP 
  const sendOTP = async () => {
    let res = await api.post('/auth/send-otp');

    if (res.data.success) {
      showSuccess(res.data.message, 2000);
    } else {
      showError(res.data.message, 2000);
    }
    setSentOtp(true);
  }

  const verifyEmail = async () => {
    try {
      let res = await api.post('/auth/verifyEmail', { otp: otp });

      if (res.data.success) {
        showSuccess(res.data.message, 2000);
        // Update local state to reflect verification
        setUser(prev => ({ ...prev, isAccountVerified: true }));
        setTimeout(() => {
          setShowModal(null)
        }, 1500);
      } else {
        showError(res.data.message, 2000);
      }
    } catch (error) {
      console.log("FETCH ERROR:", error.response?.data || error.message);
    }
  }


  const handleVerify = () => {
    setShowModal('verify');
  };

  const handleReset = () => {
    setShowModal('reset');
  };

  const handleLogout = async () => {
    let res = await api.post('/auth/logout');

    if (res.data.success) {
      setIsLoggedin(false);
      setUser(null);
      showSuccess(res.data.message, 2000);
    } else {
      showError(res.data.message, 2000);
    }

    setTimeout(() => {
      navigate('/login')
      setSign('Log In')
    }, 1500);
  };

  const resetPwd = async () => {
    let res = await api.post('/auth/sent-reset-otp', { email: ResetPassword })
    if (res.data.success) {
      showSuccess(res.data.message, 2000);
      setResetState("Verifying")
    } else {
      showError(res.data.message, 2000);
    }
  }

  const ResetPwdOtp = async () => {
    let res = await api.post('/auth/reset-password',
      { email:ResetPassword, otp: otp, newPassword:NewPassword }
    )
    if (res.data.success) {
      showSuccess(res.data.message, 2000);
      setShowModal(null)
    } else {
      showError(res.data.message, 2000);
    }
  }

  const closeModal = () => {
    setShowModal(null);
    setSentOtp(false);
    setOtp("");
  };

  return (
    <div className="min-h-screen bg-(--canvas-soft) text-(--ink) relative overflow-hidden">
      {/* Navigation */}
      <DashNavbar 
        showMenu={showMenu} 
        UserInfo={user} 
        setShowMenu={setShowMenu} 
        handleVerify={handleVerify} 
        handleReset={handleReset} 
        handleLogout={handleLogout} 
      />
      
      {/* Main content */}
      <DashMain 
        UserInfo={user} 
        showModal={showModal} 
        setShowModal={setShowModal} 
        handleVerify={handleVerify} 
        handleReset={handleReset} 
        handleLogout={handleLogout} 
        closeModal={closeModal}
        sentOtp={sentOtp}
        sendOTP={sendOTP}
        verifyEmail={verifyEmail}
        otp={otp}
        setOtp={setOtp}
        ResetState={ResetState}
        setResetState={setResetState}
        ResetPassword={ResetPassword}
        setResetPassword={setResetPassword}
        NewPassword={NewPassword}
        setNewPassword={setNewPassword}
        resetPwd={resetPwd}
        ResetPwdOtp={ResetPwdOtp}
        showError={showError}
      />
    </div>
  );
}
