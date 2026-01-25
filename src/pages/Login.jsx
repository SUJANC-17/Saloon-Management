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

  // Demo Login Handler
  const handleDemoLogin = (role) => {
    try {
      // Create a mock JWT token
      const mockPayload = {
        sub: role === "OWNER" ? "owner@demo.com" : "customer@demo.com",
        role: role,
      };

      // Create a simple base64 encoded JWT (for demo purposes)
      const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
      const payload = btoa(JSON.stringify(mockPayload));
      const signature = "demo_signature";
      const mockToken = `${header}.${payload}.${signature}`;

      // Store the token
      localStorage.setItem("token", mockToken);

      // Set user context
      setUser({ email: mockPayload.sub, role: mockPayload.role });

      // Redirect based on role
      role === "OWNER" ? navigate("/owner-dashboard") : navigate("/user");
    } catch (err) {
      setError("Demo login failed");
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} error={error} />
      
      {/* Demo Login Section */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          marginTop: "20px",
          textAlign: "center",
          maxWidth: "450px",
          margin: "-30px auto 0",
          position: "relative",
          zIndex: 10,
        }}
      >
        <p style={{ color: "#636e72", fontSize: "13px", marginBottom: "15px", fontWeight: "600" }}>
          🧪 OR TRY DEMO LOGIN
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <button
            type="button"
            onClick={() => handleDemoLogin("USER")}
            style={{
              padding: "12px",
              background: "#6c5ce7",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "13px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#5d4fb5")}
            onMouseLeave={(e) => (e.target.style.background = "#6c5ce7")}
          >
            👤 Demo Customer
          </button>
          <button
            type="button"
            onClick={() => handleDemoLogin("OWNER")}
            style={{
              padding: "12px",
              background: "#00b894",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "13px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#00a383")}
            onMouseLeave={(e) => (e.target.style.background = "#00b894")}
          >
            🏪 Demo Owner
          </button>
        </div>

        <p style={{ color: "#b2a9d1", fontSize: "11px", marginTop: "12px", fontStyle: "italic" }}>
          Demo accounts for testing (no backend required)
        </p>
      </div>
    </div>
  );
};

export default Login;
