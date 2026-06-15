import React from 'react';
import { Mail, X } from 'lucide-react';

const VerifyEmailModal = ({ UserInfo, sentOtp, sendOTP, verifyEmail, otp, setOtp, closeModal, showError }) => {
  if (!UserInfo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]"
      onClick={closeModal}
    >
      <div
        className="bg-(--canvas) border border-(--hairline) rounded-xl w-full max-w-[440px] shadow-2xl relative overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
            onClick={closeModal}
            className="absolute top-4 right-4 p-1 rounded-md text-(--mute) hover:text-(--ink) hover:bg-(--canvas-soft-2) transition-colors z-10"
        >
            <X className="w-4 h-4" />
        </button>

        {/* Decorative background element */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        <div className="p-8">
            <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-display-sm text-(--ink) font-semibold">Verify account</h2>
            </div>

            {/* IF USER IS ALREADY VERIFIED */}
            {UserInfo?.isAccountVerified && (
            <div className="flex flex-col items-center text-center py-4">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h3 className="text-body-lg-strong text-(--ink) mb-2">Email Verified</h3>
                <p className="text-body-md text-(--body)">
                Your email <span className="text-(--ink) font-medium">{UserInfo?.email}</span> has been successfully verified.
                </p>

                <button
                onClick={closeModal}
                className="button-primary mt-8 w-full py-2.5"
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
                    <p className="text-body-md text-(--body) mb-8 leading-relaxed">
                    To protect your account, we need to verify your identity. We will send a 6-digit code to:
                    <span className="block mt-2 text-(--ink) font-medium text-body-lg">{UserInfo?.email}</span>
                    </p>

                    <button
                    onClick={sendOTP}
                    className="button-primary w-full py-3 font-medium tracking-tight"
                    >
                    Send Verification Code
                    </button>
                    
                    <button 
                    onClick={closeModal}
                    className="w-full mt-4 text-body-sm text-(--mute) hover:text-(--ink) transition-colors font-medium"
                    >
                        Cancel
                    </button>
                </>
                )}

                {/* AFTER OTP SENT */}
                {sentOtp && (
                <>
                    <p className="text-body-md text-(--body) mb-8 leading-relaxed">
                    Enter the 6-digit code we sent to your email to complete verification.
                    </p>

                    {/* OTP BOXES */}
                    <div className="flex gap-2.5 justify-between mb-8">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <input
                        key={idx}
                        maxLength={1}
                        autoFocus={idx === 0}
                        onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, "");
                            let otpArray = otp.split("");
                            if(otpArray.length < 6) {
                                otpArray = Array(6).fill("");
                                otp.split("").forEach((char, i) => otpArray[i] = char);
                            }
                            otpArray[idx] = val;
                            const newOtp = otpArray.join("");
                            setOtp(newOtp);

                            if (val && idx < 5) {
                            document.getElementById(`otp-${idx + 1}`).focus();
                            }
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
                            document.getElementById(`otp-${idx - 1}`).focus();
                            }
                        }}
                        id={`otp-${idx}`}
                        className="w-full aspect-[4/5] text-center text-display-sm bg-(--canvas-soft-2) border border-(--hairline) rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-(--ink) transition-all font-semibold"
                        />
                    ))}
                    </div>

                    <div className="space-y-4">
                        <button
                            onClick={() => {
                                if (otp.length === 6) {
                                    verifyEmail()
                                } else {
                                    showError("Please enter all 6 digits", 2000);
                                }
                            }}
                            className="button-primary w-full py-3 font-medium tracking-tight"
                        >
                            Verify Email
                        </button>
                        
                        <div className="text-center pt-2">
                            <button 
                                onClick={sendOTP}
                                className="text-body-sm text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
                            >
                                Resend code
                            </button>
                        </div>
                    </div>
                </>
                )}
            </>
            )}
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailModal;
