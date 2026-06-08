import React, { useEffect, useState } from 'react';
import { User, LogOut, Shield, KeyRound, Mail, Activity, Lock, Bell } from 'lucide-react';
import DashNavbar from '../components/Dashboard/DashNavbar';
import DashMain from '../components/Dashboard/DashMain';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toastManager } from '@/components/ui/toast'

export default function AuthLandingPage({ setSign }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(null);
  const [UserInfo, setUserInfo] = useState(null)
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


  const Backend_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `${Backend_URL}/user/data`,
          { withCredentials: true }
        );
        setUserInfo(res.data.userData);
        console.log(res.data.userData);

      } catch (err) {
        console.log("FETCH ERROR:", err.response?.data || err.message);
      }
    };

    fetchUser();
  }, []);

  // Sending OTP 
  const sendOTP = async () => {
    let res = await axios.post(`${Backend_URL}/auth/send-otp`,
      {},
      { withCredentials: true }
    );

    if (res.data.success) {
      showSuccess(res.data.message, 2000);
    } else {
      showError(res.data.message, 2000);
    }
    setSentOtp(true);


  }

  const verifyEmail = async () => {
    try {
      let res = await axios.post(`${Backend_URL}/auth/verifyEmail`,
        { otp: otp },
        { withCredentials: true });
      // console.log(otp);


      if (res.data.success) {
        showSuccess(res.data.message, 2000);
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
    let res;

    res = await axios.post(
      `${Backend_URL}/auth/logout`,
      {},
      { withCredentials: true }
    );


    if (res.data.success) {
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
    let res;
    res = await axios.post(`${Backend_URL}/auth/sent-reset-otp`,
      { email: ResetPassword },
      { withCredentials: true }
    )
    if (res.data.success) {
      showSuccess(res.data.message, 2000);
      setResetState("Verifying")
    } else {
      showError(res.data.message, 2000);
    }
  }

  const ResetPwdOtp = async () => {
    let res;
    res = await axios.post(`${Backend_URL}/auth/reset-password`,
      { email:ResetPassword, otp: otp, newPassword:NewPassword },
      { withCredentials: true }
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
  };

  return (
    <div className="min-h-screen bg-(--canvas-soft) text-(--ink) relative overflow-hidden">
      {/* Navigation */}
      <DashNavbar showMenu={showMenu} UserInfo={UserInfo} setShowMenu={setShowMenu} handleVerify={handleVerify} handleReset={handleReset} handleLogout={handleLogout} />
      
      {/* Main content */}
      <DashMain UserInfo={UserInfo} showModal={showModal} setShowModal={setShowModal} handleVerify={handleVerify} handleReset={handleReset} handleLogout={handleLogout} closeModal={closeModal} />

      {/* Modals */}
      {showModal === 'verify' && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-(--canvas) border border-(--hairline) rounded-xl p-8 max-w-md w-full mx-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Mail className="w-6 h-6 text-(--link-blue)" />
              <h2 className="text-display-sm text-(--ink)">Verify account</h2>
            </div>

            {/* IF USER IS ALREADY VERIFIED */}
            {UserInfo?.isAccountVerified && (
              <div className="flex flex-col items-center text-center mb-6">
                <div className="px-3 py-1 rounded-full bg-green-50 text-green-600 border border-green-200 text-caption font-medium">
                  Email Verified
                </div>

                <p className="text-body-md text-(--body) mt-4">
                  Your email <span className="text-(--ink) font-medium">{UserInfo?.email}</span> is verified.
                </p>

                <button
                  onClick={closeModal}
                  className="button-primary mt-6 w-full"
                >
                  Close
                </button>
              </div>
            )}
            {!UserInfo?.isAccountVerified && (
              <>
                {/* BEFORE OTP SENT */}
                {!sentOtp && (
                  <>
                    <p className="text-body-md text-(--body) mb-8">
                      We will send a 6-digit OTP to <span className="text-(--ink) font-medium">{UserInfo?.email}</span>.
                    </p>

                    <button
                      onClick={sendOTP}
                      className="button-primary w-full"
                    >
                      Send OTP
                    </button>
                  </>
                )}


                {/* AFTER OTP SENT */}
                {sentOtp && (
                  <>
                    <p className="text-body-sm text-(--body) mb-4">
                      Enter the 6-digit OTP sent to <span className="text-(--ink) font-medium">{UserInfo?.email}</span>.
                    </p>

                    {/* OTP BOXES */}
                    <div className="flex gap-2 justify-center mb-8">
                      {Array.from({ length: 6 }).map((_, idx) => (
                        <input
                          key={idx}
                          maxLength={1}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, "");
                            let otpArray = otp.split("");
                            otpArray[idx] = val;
                            const newOtp = otpArray.join("");
                            setOtp(newOtp);

                            // move to next box
                            if (val && idx < 5) {
                              document.getElementById(`otp-${idx + 1}`).focus();
                            }
                          }}
                          id={`otp-${idx}`}
                          className="w-12 h-14 text-center text-display-sm bg-(--canvas-soft-2) border border-(--hairline) rounded-md focus:outline-none focus:border-(--ink) text-(--ink)  "
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        if (otp.length === 6) {
                          verifyEmail()
                        } else {
                          showError("Please enter all 6 digits", 2000);
                        }
                      }}
                      className="button-primary w-full"
                    >
                      Verify email
                    </button>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {showModal === 'reset' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm" onClick={closeModal}>
          <div className="bg-(--canvas) border border-(--hairline) rounded-xl p-8 max-w-md w-full mx-4 shadow-xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center space-x-3 mb-6">
              <KeyRound className="w-6 h-6 text-amber-500" />
              <h2 className="text-display-sm text-(--ink)">Reset password</h2>
            </div>
            {(ResetState === "resetOTP") ?
              (<>
                <p className="text-body-sm text-(--body) mb-6">Enter your email to receive a password reset OTP.</p>
                <input
                  onChange={(e) => setResetPassword(e.target.value)}
                  type="email"
                  placeholder="name@example.com"
                  className="form-input w-full mb-6"
                />
                <button onClick={resetPwd}
                  className="button-primary w-full">
                  Send reset OTP
                </button>
              </>) :
              (<>
                <p className="text-body-sm text-(--body) mb-4">
                  Enter the 6-digit OTP sent to <span className="text-(--ink) font-medium">{ResetPassword}</span>.
                </p>

                {/* OTP BOXES */}
                <div className="flex gap-2 justify-center mb-8">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <input
                      key={idx}
                      maxLength={1}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, "");
                        let otpArray = otp.split("");
                        otpArray[idx] = val;
                        const newOtp = otpArray.join("");
                        setOtp(newOtp);

                        // move to next box
                        if (val && idx < 5) {
                          document.getElementById(`otp-${idx + 1}`).focus();
                        }
                      }}
                      id={`otp-${idx}`}
                      className="w-12 h-14 text-center text-display-sm bg-(--canvas-soft-2) border border-(--hairline) rounded-md focus:outline-none focus:border-(--ink) text-(--ink)  "
                    />
                  ))}
                </div>
                {/* NEW PASSWORD INPUT */}
                <div className="mb-8">
                  <label className="text-caption-mono text-(--mute) uppercase mb-2 block">New password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="form-input w-full"
                    value={NewPassword}
                    onChange={(e) =>{setNewPassword(e.target.value);}}
                  />
                </div>
                <button
                  onClick={() => {
                    if (otp.length === 6) {
                      ResetPwdOtp()
                    } else {
                      showError("Please enter all 6 digits", 2000);
                    }
                  }}
                  className="button-primary w-full"
                >
                  Update password
                </button>
              </>
              )}
          </div>
        </div>
      )}
    </div>
  );
}


