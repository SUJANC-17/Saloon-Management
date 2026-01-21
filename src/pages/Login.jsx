import { useState, useContext } from "react";
import LoginForm from "../components/auth/LoginForm";
import authService from "../services/authService";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      const data = Object.fromEntries(new FormData(e.target));
      const res = await authService.login(data);

      const payload = JSON.parse(atob(res.token.split(".")[1]));
      setUser({ email: payload.sub, role: payload.role });

      // Redirect based on role
      payload.role === "OWNER"
        ? navigate("/owner-dashboard")
        : navigate("/user-dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
    }
  };

  return <LoginForm onSubmit={handleSubmit} error={error} />;
};

export default Login;
