import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";
import authService from "../services/authService";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (formData) => {
    try {
      setError("");
      setSuccess("");
      const email = formData.get("email");
      
      await authService.forgotPassword({ email });
      
      setSuccess("Password reset link sent to your email. Check your inbox!");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      setError(
        err.response?.data?.message || 
        "Failed to send reset link. Please try again."
      );
    }
  };

  return (
    <ForgotPasswordForm 
      onSubmit={handleSubmit} 
      error={error}
      success={success}
    />
  );
};

export default ForgotPassword;
