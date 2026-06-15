import React from 'react';
import { KeyRound, X } from 'lucide-react';

const ResetPasswordModal = ({ 
    ResetState, 
    setResetState, 
    ResetPassword, 
    setResetPassword, 
    otp, 
    setOtp, 
    NewPassword, 
    setNewPassword, 
    resetPwd, 
    ResetPwdOtp, 
    closeModal, 
    showError 
}) => {
  return (
    <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]" 
        onClick={closeModal}
    >
      <div 
        className="bg-(--canvas) border border-(--hairline) rounded-xl w-full max-w-[440px] shadow-2xl relative overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200" 
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
            onClick={closeModal}
            className="absolute top-4 right-4 p-1 rounded-md text-(--mute) hover:text-(--ink) hover:bg-(--canvas-soft-2) transition-colors z-10"
        >
            <X className="w-4 h-4" />
        </button>

        {/* Decorative background element */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>

        <div className="p-8">
            <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <KeyRound className="w-5 h-5 text-amber-600" />
                </div>
                <h2 className="text-display-sm text-(--ink) font-semibold">Reset password</h2>
            </div>

            {ResetState === "resetOTP" ? (
            <>
                <p className="text-body-md text-(--body) mb-8 leading-relaxed">
                    Enter the email address associated with your account and we'll send you a code to reset your password.
                </p>
                <div className="space-y-1.5 mb-8">
                    <label className="text-caption-mono text-(--mute) uppercase tracking-wider font-semibold">
                        Email Address
                    </label>
                    <input
                        onChange={(e) => setResetPassword(e.target.value)}
                        value={ResetPassword}
                        type="email"
                        placeholder="name@example.com"
                        className="form-input w-full py-3 px-4 rounded-lg bg-(--canvas-soft-2)"
                    />
                </div>
                <button 
                    onClick={resetPwd}
                    className="button-primary w-full py-3 font-medium tracking-tight"
                >
                Send Reset Code
                </button>
                <button 
                    onClick={closeModal}
                    className="w-full mt-4 text-body-sm text-(--mute) hover:text-(--ink) transition-colors font-medium"
                >
                    Cancel
                </button>
            </>
            ) : (
            <>
                <p className="text-body-md text-(--body) mb-8 leading-relaxed">
                Enter the 6-digit code we sent to <span className="text-(--ink) font-medium">{ResetPassword}</span>.
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
                    className="w-full aspect-[4/5] text-center text-display-sm bg-(--canvas-soft-2) border border-(--hairline) rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-(--ink) transition-all font-semibold"
                    />
                ))}
                </div>

                {/* NEW PASSWORD INPUT */}
                <div className="mb-8 space-y-1.5">
                <label className="text-caption-mono text-(--mute) uppercase tracking-wider font-semibold block">New password</label>
                <input
                    type="password"
                    placeholder="••••••••"
                    className="form-input w-full py-3 px-4 rounded-lg bg-(--canvas-soft-2)"
                    value={NewPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <p className="text-caption text-(--mute) mt-2">Must be at least 8 characters.</p>
                </div>

                <div className="space-y-4">
                    <button
                        onClick={() => {
                            if (otp.length === 6) {
                                ResetPwdOtp()
                            } else {
                                showError("Please enter all 6 digits", 2000);
                            }
                        }}
                        className="button-primary w-full py-3 bg-amber-600 hover:bg-amber-700 border-amber-600 font-medium tracking-tight"
                    >
                        Update Password
                    </button>
                    <div className="text-center pt-2">
                        <button 
                            onClick={resetPwd}
                            className="text-body-sm text-amber-600 hover:text-amber-700 font-semibold transition-colors"
                        >
                            Resend code
                        </button>
                    </div>
                </div>
            </>
            )}
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
