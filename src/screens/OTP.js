import React, { useState } from "react";
import OtpInput from "react18-input-otp";

function OTP() {
  const [otp, setOtp] = useState("");
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };

  const otpInputStyle = {
    width: "40px",
    height: "40px",
    fontSize: "24px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    margin: "4px",
    textAlign: "center",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const otpContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={containerStyle}>
      <div style={otpContainerStyle}>
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={4}
          separator={<span>-</span>}
          inputStyle={otpInputStyle}
        />
      </div>
    </div>
  );
}

export default OTP;
