import React, { useState } from 'react';

function Assignment6() {
  const [otp, setOTP] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');

  const handleOTPVerification = () => {
    // Implement OTP verification logic here (e.g., sending OTP to server for verification)
    // For demo purposes, let's assume the correct OTP is '123456'
    if (otp === '123456') {
      setVerificationStatus('OTP Verified. Logging in...');
      // Add code to navigate to the next page or perform login actions
    } else {
      setVerificationStatus('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-4">OTP Login</h1>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOTP(e.target.value)}
        className="border border-gray-400 px-4 py-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleOTPVerification}
        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Verify OTP
      </button>
      {verificationStatus && <p className="text-red-500 mt-4">{verificationStatus}</p>}
    </div>
  );
}

export default Assignment6;
