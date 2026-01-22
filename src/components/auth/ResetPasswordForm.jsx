import { useState } from "react";
import "../styles/auth.css";

const ResetPasswordForm = ({ onSubmit, error, success, token }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData(e.target);
      formData.append("token", token);
      await onSubmit(formData);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">🏢 Salon Manager</h1>
        <p className="auth-subtitle">Create a new password</p>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="password" className="form-label">New Password</label>
            <div className="password-wrapper">
              <input 
                id="password"
                name="password" 
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                required 
                className="form-input"
                disabled={isLoading}
                minLength="6"
              />
              <button 
                type="button" 
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <div className="password-wrapper">
              <input 
                id="confirmPassword"
                name="confirmPassword" 
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm new password"
                required 
                className="form-input"
                disabled={isLoading}
                minLength="6"
              />
              <button 
                type="button" 
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                disabled={isLoading}
              >
                {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <button 
            type="submit" 
            className="auth-button"
            disabled={isLoading}
          >
            {isLoading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        <p className="auth-footer">
          <a href="/login" className="auth-link">Back to Login</a>
        </p>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
