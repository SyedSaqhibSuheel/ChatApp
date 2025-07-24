// src/components/Register.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const loading = false;

  return (
    <div className="form-container">
      <form className="form">
        <h2>Register</h2>
        <input type="text" placeholder="Display Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button disabled={loading}>Sign Up</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
