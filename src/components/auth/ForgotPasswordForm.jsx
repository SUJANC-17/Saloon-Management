import { useState } from "react";
import "../styles/auth.css";

const ForgotPasswordForm = ({ onSubmit, error, success }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onSubmit(new FormData(e.target));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">🏢 Salon Manager</h1>
        <p className="auth-subtitle">Reset your password</p>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input 
              id="email"
              name="email" 
              type="email"
              placeholder="Enter your registered email"
              required 
              className="form-input"
              disabled={isLoading}
            />
          </div>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <button 
            type="submit" 
            className="auth-button"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p className="auth-footer">
          Remember your password? 
          <a href="/login" className="auth-link"> Login here</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
