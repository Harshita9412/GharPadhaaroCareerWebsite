import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Minimum 6 characters';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) return setErrors(formErrors);
    setErrors({});
    console.log('Login Submitted:', formData);
    setFormData({ email: '', password: '' });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <Link to="/" className="auth-logo">
            <img src="/Logo.ghar.jpg" alt="GharPadharo Logo" />
          </Link>
          <h2>Log in to GharPadharo</h2>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder=" " required />
            <label>Email</label>
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder=" " required />
            <label>Password</label>
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <a href="#" className="forgot-password">Forgot Password?</a>

          <button type="submit" className="auth-button">Log In</button>
        </form>

        <div className="auth-footer">
          <p className="auth-redirect">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
