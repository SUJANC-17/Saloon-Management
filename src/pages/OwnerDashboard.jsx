import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../components/styles/auth.css";

const OwnerDashboard = () => {
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
          <h1 className="dashboard-title">🏢 Owner Dashboard</h1>
          <p style={{ color: "#636e72", marginTop: "5px" }}>Welcome, {user?.email}</p>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      <div style={{ background: "white", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ marginBottom: "20px", color: "#2d3436" }}>📋 Salon Overview</h2>
        <p style={{ color: "#636e72" }}>Manage your salon bookings, staff, and services.</p>
        
        <div style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" }}>
          <div style={{ padding: "15px", background: "#f5f6fa", borderRadius: "8px", border: "2px solid #dfe6e9" }}>
            <p style={{ color: "#636e72", fontSize: "14px", marginBottom: "5px" }}>Pending</p>
            <button onClick={() => alert('Coming soon!')} style={{ background: "none", border: "none", color: "#6c5ce7", fontWeight: "600", cursor: "pointer" }}>Add Services →</button>
          </div>
          <div style={{ padding: "15px", background: "#f5f6fa", borderRadius: "8px", border: "2px solid #dfe6e9" }}>
            <p style={{ color: "#636e72", fontSize: "14px", marginBottom: "5px" }}>Pending</p>
            <button onClick={() => alert('Coming soon!')} style={{ background: "none", border: "none", color: "#6c5ce7", fontWeight: "600", cursor: "pointer" }}>Manage Staff →</button>
          </div>
          <div style={{ padding: "15px", background: "#f5f6fa", borderRadius: "8px", border: "2px solid #dfe6e9" }}>
            <p style={{ color: "#636e72", fontSize: "14px", marginBottom: "5px" }}>Pending</p>
            <button onClick={() => alert('Coming soon!')} style={{ background: "none", border: "none", color: "#6c5ce7", fontWeight: "600", cursor: "pointer" }}>View Analytics →</button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        <div style={{ background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}>
          <h3 style={{ color: "#2d3436", marginBottom: "10px" }}>📅 Total Bookings</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "#6c5ce7" }}>0</p>
          <p style={{ color: "#636e72", fontSize: "12px", marginTop: "5px" }}>This month</p>
        </div>
        <div style={{ background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}>
          <h3 style={{ color: "#2d3436", marginBottom: "10px" }}>💰 Revenue</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "#00b894" }}>$0.00</p>
          <p style={{ color: "#636e72", fontSize: "12px", marginTop: "5px" }}>This month</p>
        </div>
        <div style={{ background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}>
          <h3 style={{ color: "#2d3436", marginBottom: "10px" }}>⭐ Rating</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "#ffa502" }}>0.0</p>
          <p style={{ color: "#636e72", fontSize: "12px", marginTop: "5px" }}>Out of 5</p>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
