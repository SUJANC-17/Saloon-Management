import { useState } from "react";
import "../styles/auth.css";

const RegisterForm = ({ onSubmit, role, error, success }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(e);
    } catch (err) {
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">🏢 Salon Manager</h1>
        <p className="auth-subtitle">Register as {role === "USER" ? "a Customer" : "a Salon Owner"}</p>
        
        <form onSubmit={handleFormSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input 
              id="name"
              name="name" 
              type="text"
              placeholder="Enter your full name"
              required 
              className="form-input"
            />
          </div>

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
                placeholder="Enter a strong password"
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

          {role === "OWNER" && (
            <>
              <div className="form-group">
                <label htmlFor="salonName" className="form-label">Salon Name</label>
                <input 
                  id="salonName"
                  name="salonName" 
                  type="text"
                  placeholder="Enter your salon name"
                  required 
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input 
                  id="phone"
                  name="phone" 
                  type="tel"
                  placeholder="Enter your phone number"
                  className="form-input"
                />
              </div>
            </>
          )}

          {error && <p className="error-message">❌ {error}</p>}
          {success && <p className="success-message">✓ {success}</p>}

          <button 
            type="submit" 
            className="auth-button"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? 
          <a href="/login" className="auth-link"> Login here</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
