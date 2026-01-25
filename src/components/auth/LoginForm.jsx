import { useState } from "react";
import "../styles/auth.css";

const LoginForm = ({ onSubmit, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">🏢 Salon Manager</h1>
        <p className="auth-subtitle">Login to your account</p>
        
        <form onSubmit={onSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input 
              id="email"
              name="email" 
              type="email"
              placeholder="Enter your email"
              required 
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="password-wrapper">
              <input 
                id="password"
                name="password" 
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required 
                className="form-input"
              />
              <button 
                type="button" 
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="auth-button">Login</button>

          <p className="forgot-password-link">
            <a href="/forgot-password" className="auth-link">Forgot Password?</a>
          </p>
        </form>

        <p className="auth-footer">
          Don't have an account? 
          <a href="/register/user" className="auth-link"> Register as User</a> or 
          <a href="/register/owner" className="auth-link"> Register as Owner</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
