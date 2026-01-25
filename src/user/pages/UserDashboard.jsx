import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import SalonCard from "../components/SalonCard";
import { mockSalons, mockBookingHistory } from "../mockData";
import "../styles/user.css";

const UserDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Simulate loading user's bookings from local state
    const localBookings = JSON.parse(localStorage.getItem("userBookings") || "[]");
    const allBookings = [...mockBookingHistory, ...localBookings];
    setBookings(allBookings);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Get top 3 rated salons
  const topRatedSalons = mockSalons
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const upcomingBookings = bookings.filter((b) => b.status === "UPCOMING" || b.status === "PENDING");
  const totalSpent = bookings
    .filter((b) => b.status === "COMPLETED")
    .reduce((sum, b) => sum + b.price, 0);

  return (
    <div className="user-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">👤 Welcome back!</h1>
          <p className="dashboard-subtitle">{user?.email}</p>
        </div>
        <button onClick={handleLogout} className="logout-button">
          🚪 Logout
        </button>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">📅 Upcoming Appointments</div>
          <div className="stat-value">{upcomingBookings.length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">💰 Total Spent</div>
          <div className="stat-value">${totalSpent.toFixed(2)}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">⭐ Total Bookings</div>
          <div className="stat-value">{bookings.length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">✨ Top-Rated</div>
          <div className="stat-value">{topRatedSalons[0]?.rating || "N/A"}</div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          marginBottom: "30px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
          <h2 className="section-title" style={{ margin: 0 }}>📅 Your Upcoming Appointments</h2>
          <button
            onClick={() => navigate("/user/appointments")}
            style={{
              background: "#6c5ce7",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            View All →
          </button>
        </div>
        
        {upcomingBookings.length > 0 ? (
          <div
            style={{
              display: "grid",
              gap: "12px",
            }}
          >
            {upcomingBookings.slice(0, 3).map((booking) => (
              <div
                key={booking.id}
                style={{
                  padding: "12px",
                  background: "#f5f6fa",
                  borderRadius: "8px",
                  borderLeft: "4px solid #6c5ce7",
                }}
              >
                <div style={{ fontWeight: "600", color: "#2d3436", marginBottom: "4px" }}>
                  {booking.salonName} - {booking.serviceName}
                </div>
                <div style={{ fontSize: "13px", color: "#636e72" }}>
                  📅 {booking.date} at {booking.time}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: "#636e72", margin: 0 }}>
            No upcoming appointments. Book now to schedule your next visit!
          </p>
        )}
      </div>

      {/* Featured/Top-Rated Salons */}
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          marginBottom: "30px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h2 className="section-title" style={{ margin: 0 }}>
            ⭐ Top-Rated Salons
          </h2>
          <button
            onClick={() => navigate("/user/salons")}
            style={{
              background: "#6c5ce7",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            View All →
          </button>
        </div>

        <div className="salons-grid">
          {topRatedSalons.map((salon) => (
            <SalonCard key={salon.id} salon={salon} />
          ))}
        </div>
      </div>


    </div>
  );
};

export default UserDashboard;
