import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/otp");
  };

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.title}>Enter Your Mobile Number</h1>
      <p className={styles.subtitle}>
        We will send you the 6 digit verification code
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter your mobile number"
            required
            className={styles.inputField}
          />
          <button type="submit" className={styles.loginButton}>
            Send Code
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
