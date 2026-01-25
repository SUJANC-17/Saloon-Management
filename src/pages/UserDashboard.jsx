import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../components/styles/auth.css";

const UserDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">👤 User Dashboard</h1>
          <p style={{ color: "#636e72", marginTop: "5px" }}>Welcome, {user?.email}</p>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      <div style={{ background: "white", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ marginBottom: "20px", color: "#2d3436" }}>📅 Your Bookings</h2>
        <p style={{ color: "#636e72" }}>No bookings yet. Browse our salons to book an appointment!</p>
        
        <div style={{ marginTop: "20px", padding: "15px", background: "#f5f6fa", borderRadius: "8px" }}>
          <h3 style={{ color: "#2d3436", marginBottom: "10px" }}>📍 Featured Salons</h3>
          <p style={{ color: "#636e72", fontSize: "14px" }}>Coming soon...</p>
        </div>
      </div>

      <div style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        <div style={{ background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}>
          <h3 style={{ color: "#2d3436", marginBottom: "10px" }}>💰 Total Spent</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "#6c5ce7" }}>$0.00</p>
        </div>
        <div style={{ background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}>
          <h3 style={{ color: "#2d3436", marginBottom: "10px" }}>⭐ Total Reviews</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "#00b894" }}>0</p>
        </div>
        <div style={{ background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}>
          <h3 style={{ color: "#2d3436", marginBottom: "10px" }}>📅 Total Bookings</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "#ffa502" }}>0</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
