import React, { useEffect, useState } from 'react';
import { User, LogOut, Shield, KeyRound, Mail, Activity, Lock, Bell } from 'lucide-react';
import DashNavbar from '../Components/dashNavbar';
import DashMain from '../Components/DashMain';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function AuthLandingPage({ setSign }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(null);
  const [UserInfo, setUserInfo] = useState(null)
  const [sentOtp, setSentOtp] = useState(false);
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();


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
      { withCredentials: true }
    );

    if (res.data.success) {
      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      toast.error(res.data.message, {
        position: "top-right",
        autoClose: 2000,
      });
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
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 2000,
        });
        setTimeout(() => {
          setShowModal(null)
        }, 1500);

      } else {
        toast.error(res.data.message, {
          position: "top-right",
          autoClose: 2000,
        });
      }


    } catch (error) {
      console.log("FETCH ERROR:", error.response?.data || err.message);
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
      { withCredentials: true }
    );


    if (res.data.success) {
      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      toast.error(res.data.message, {
        position: "top-right",
        autoClose: 2000,
      });
    }

    setTimeout(() => {
      navigate('/login')
      setSign('Log In')
    }, 1500);


  };

  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Navigation */}
      <DashNavbar showMenu={showMenu} UserInfo={UserInfo} setShowMenu={setShowMenu} handleVerify={handleVerify} handleReset={handleReset} handleLogout={handleLogout} />
      {/* Main content */}
      <DashMain UserInfo={UserInfo} showModal={showModal} setShowModal={setShowModal} handleVerify={handleVerify} handleReset={handleReset} handleLogout={handleLogout} closeModal={closeModal} />


      {/* Modals */}
      {showModal === 'verify' && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 border border-gray-800 rounded-xl p-8 max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Mail className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-bold">Verify Account</h2>
            </div>

            {/* IF USER IS ALREADY VERIFIED */}
            {UserInfo?.isAccountVerfied && (
              <div className="flex flex-col items-center text-center mb-6">
                <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-md font-semibold">
                  Email Verified
                </div>

                <p className="text-gray-400 mt-3 text-xl">
                  Your email <span className="text-white">{UserInfo?.email}</span> is verified.
                </p>

                <button
                  onClick={closeModal}
                  className="mt-4 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Close
                </button>
              </div>
            )}
            {!UserInfo?.isAccountVerfied && (
              <>
                {/* BEFORE OTP SENT */}
                {!sentOtp && (
                  <>
                    <p className="text-gray-400 mb-6 font-semibold">
                      We will send a 6-digit OTP to <span className="text-white">{UserInfo?.email}</span>
                    </p>

                    <button
                      onClick={sendOTP}
                      className="w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Send OTP
                    </button>
                  </>
                )}


                {/* AFTER OTP SENT */}
                {sentOtp && (
                  <>
                    <p className="text-gray-400 mb-3">
                      Enter the 6-digit OTP sent to <span className="text-white">{UserInfo?.email}</span>
                    </p>

                    {/* OTP BOXES */}
                    <div className="flex gap-3 justify-center mb-6">
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
                          className="
                  w-10 h-12 text-center text-xl
                  bg-gray-800 border border-gray-700 rounded-lg
                  focus:outline-none focus:border-blue-500
                  text-white
                "
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        if (otp.length === 6) {
                          console.log("Verify OTP:", otp);
                          verifyEmail()
                        } else {
                          toast.error("Please enter all 6 digits");
                        }
                      }}
                      className="w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Verify Email
                    </button>
                  </>
                )}
              </>
            )}



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
      <ToastContainer />
    </div>
  );
}