import { useState } from "react";
import RegisterForm from "../components/auth/RegisterForm";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";

const OwnerRegister = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    
    try {
      const data = Object.fromEntries(new FormData(e.target));
      data.role = "OWNER";
      await authService.signup(data);
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return <RegisterForm onSubmit={handleSubmit} role="OWNER" error={error} success={success} />;
};

export default OwnerRegister;
