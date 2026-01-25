import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ResetPasswordForm from "../components/auth/ResetPasswordForm";
import authService from "../services/authService";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (formData) => {
    try {
      setError("");
      setSuccess("");
      
      if (!token) {
        setError("Invalid reset link. Please request a new one.");
        return;
      }

      const password = formData.get("password");
      const confirmPassword = formData.get("confirmPassword");

      if (password !== confirmPassword) {
        setError("Passwords do not match!");
        return;
      }

      // Call the reset password service
      await authService.resetPassword({
        token,
        password,
        confirmPassword
      });

      setSuccess("Password reset successfully! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(
        err.response?.data?.message || 
        "Failed to reset password. Please try again."
      );
    }
  };

  if (!token) {
    return (
      <div className="auth-container">
        <div className="auth-box">
          <h1 className="auth-title">🏢 Salon Manager</h1>
          <p className="error-message" style={{ marginTop: "20px" }}>
            Invalid reset link. Please request a new password reset.
          </p>
          <a href="/forgot-password" className="auth-button" style={{ display: "block", textAlign: "center", textDecoration: "none" }}>
            Request New Link
          </a>
        </div>
      </div>
    );
  }

  return (
    <ResetPasswordForm 
      onSubmit={handleSubmit} 
      error={error}
      success={success}
      token={token}
    />
  );
};

export default ResetPassword;
