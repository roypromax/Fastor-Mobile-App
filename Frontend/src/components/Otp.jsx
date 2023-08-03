import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Otp.module.css";

const otpArray = ["", "", "", "", "", ""];

const Otp = () => {
  const [otp, setOtp] = useState(otpArray);
  const navigate = useNavigate();
  const otpRefs = otpArray.map((element, index) => {
    return useRef(null);
  });

  useEffect(() => {
    otpRefs[0].current.focus();
  }, []);

  const handleChange = (index, value) => {
    value = value.slice(0, 1);

    setOtp((prev) => {
      let newOtp = [...prev];
      newOtp[index] = value;
      return newOtp;
    });

    if (value !== "") {
      otpRefs[index + 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.join("") === "123456") {
      navigate("/dashboard");
    } else {
      alert("Invalid OTP");
      setOtp(otpArray);
      otpRefs[0].current.focus();
    }
  };

  return (
    <div className={styles.otpContainer}>
      <h1 className={styles.title}>OTP Verification</h1>
      <p className={styles.subtitle}>
        Enter the verification code we just sent on your Mobile Number.
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          {otp.map((value, index) => (
            <input
              type="number"
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              key={index}
              ref={otpRefs[index]}
              required
              className={styles.inputField}
            />
          ))}
        </div>
        <button type="submit" className={styles.verifyButton}>
          Verify
        </button>
      </form>
    </div>
  );
};

export default Otp;
