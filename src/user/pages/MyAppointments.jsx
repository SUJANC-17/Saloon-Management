import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppointmentStatusBadge from "../components/AppointmentStatusBadge";
import { mockBookingHistory } from "../mockData";
import "../styles/user.css";

const MyAppointments = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [cancelingId, setCancelingId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Combine mock data with any bookings from localStorage
    const localBookings = JSON.parse(
      localStorage.getItem("userBookings") || "[]"
    );

    const allAppointments = [
      ...mockBookingHistory.filter((b) => b.status === "UPCOMING"),
      ...localBookings
        .filter((booking) => booking.status === "PENDING")
        .map((booking) => ({
          id: booking.id,
          salonName: booking.salon.name,
          serviceName: booking.service.name,
          date: booking.slot.date,
          time: booking.slot.time,
          price: booking.service.price,
          status: booking.status,
          city: booking.salon.city,
        })),
    ];

    setAppointments(allAppointments);
  }, []);

  const handleCancelAppointment = (appointmentId) => {
    if (
      window.confirm(
        "Are you sure you want to cancel this appointment? This action cannot be undone."
      )
    ) {
      setCancelingId(appointmentId);
      
      // Simulate API call
      setTimeout(() => {
        setAppointments((prev) =>
          prev.map((apt) =>
            apt.id === appointmentId
              ? { ...apt, status: "CANCELLED" }
              : apt
          )
        );
        setCancelingId(null);
        
        // Show success message
        alert("Appointment cancelled successfully");
      }, 500);
    }
  };

  const upcomingAppointments = appointments.filter(
    (apt) => apt.status !== "CANCELLED"
  );
  const cancelledAppointments = appointments.filter(
    (apt) => apt.status === "CANCELLED"
  );

  return (
    <div className={`bookings-container ${isVisible ? "fade-in" : ""}`}>
      {/* Animated Background Elements */}
      <div className="animated-bg">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>
      </div>

      {/* Header */}
      <div className="bookings-header premium-header">
        <div className="header-content">
          <div className="header-icon">📅</div>
          <div>
            <h1 className="header-title">My Appointments</h1>
            <p className="header-subtitle">Manage and track all your salon appointments with ease</p>
          </div>
        </div>
        <button
          onClick={() => navigate("/user")}
          className="premium-button back-btn"
        >
          <span className="btn-icon">←</span>
          <span>Back to Dashboard</span>
        </button>
      </div>

      {/* Upcoming Appointments Section */}
      {upcomingAppointments.length > 0 && (
        <div className="section-container slide-in-left">
          <div className="section-header upcoming-header">
            <div className="section-title-wrapper">
              <span className="section-icon">⏳</span>
              <h2 className="section-title">
                Upcoming Appointments
                <span className="appointment-count">{upcomingAppointments.length}</span>
              </h2>
            </div>
          </div>

            <div className="bookings-list">
              {upcomingAppointments.map((appointment, index) => (
                <div 
                  key={appointment.id} 
                  className={`booking-item premium-booking-item upcoming-item slide-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredId(appointment.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="booking-item-content">
                    <div className="salon-info-header">
                      <h3 className="salon-name-premium">{appointment.salonName}</h3>
                      <span className="service-tag">{appointment.serviceName}</span>
                    </div>
                    <div className="booking-details premium-details">
                      <div className="detail-item">
                        <span className="detail-icon">📍</span>
                        <div>
                          <div className="booking-detail-label">Location</div>
                          <div className="detail-value">{appointment.city}</div>
                        </div>
                      </div>

                      <div className="detail-item">
                        <span className="detail-icon">📅</span>
                        <div>
                          <div className="booking-detail-label">Date</div>
                          <div className="detail-value">{appointment.date}</div>
                        </div>
                      </div>

                      <div className="detail-item">
                        <span className="detail-icon">🕐</span>
                        <div>
                          <div className="booking-detail-label">Time</div>
                          <div className="detail-value">{appointment.time}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="booking-item-meta premium-meta">
                    <AppointmentStatusBadge status={appointment.status} />
                    <div className="premium-price-box">
                      <div className="price-label">Price</div>
                      <div className="booking-price-premium">${appointment.price}</div>
                    </div>

                    <button
                      onClick={() => handleCancelAppointment(appointment.id)}
                      disabled={cancelingId === appointment.id}
                      className={`cancel-button premium-cancel-btn ${hoveredId === appointment.id ? 'hover-state' : ''}`}
                    >
                      <span className="cancel-icon">✕</span>
                      {cancelingId === appointment.id ? "Cancelling..." : "Cancel"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
      )}

      {/* Cancelled Appointments Section */}
      {cancelledAppointments.length > 0 && (
        <div className="section-container slide-in-right">
          <div className="section-header cancelled-header">
            <div className="section-title-wrapper">
              <span className="section-icon">❌</span>
              <h2 className="section-title">
                Cancelled Appointments
                <span className="appointment-count">{cancelledAppointments.length}</span>
              </h2>
            </div>
          </div>

            <div className="bookings-list">
              {cancelledAppointments.map((appointment, index) => (
                <div 
                  key={appointment.id} 
                  className="booking-item premium-booking-item cancelled-item slide-in"
                  style={{ animationDelay: `${index * 0.1}s`, opacity: 0.75 }}
                >
                  <div className="booking-item-content">
                    <div className="salon-info-header">
                      <h3 className="salon-name-premium">{appointment.salonName}</h3>
                      <span className="service-tag cancelled-tag">{appointment.serviceName}</span>
                    </div>
                    <div className="booking-details premium-details">
                      <div className="detail-item">
                        <span className="detail-icon">📍</span>
                        <div>
                          <div className="booking-detail-label">Location</div>
                          <div className="detail-value">{appointment.city}</div>
                        </div>
                      </div>

                      <div className="detail-item">
                        <span className="detail-icon">📅</span>
                        <div>
                          <div className="booking-detail-label">Date</div>
                          <div className="detail-value">{appointment.date}</div>
                        </div>
                      </div>

                      <div className="detail-item">
                        <span className="detail-icon">🕐</span>
                        <div>
                          <div className="booking-detail-label">Time</div>
                          <div className="detail-value">{appointment.time}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="booking-item-meta premium-meta">
                    <AppointmentStatusBadge status={appointment.status} />
                    <div className="premium-price-box">
                      <div className="price-label">Price</div>
                      <div className="booking-price-premium">${appointment.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      )}

      {/* Empty State */}
      {appointments.length === 0 && (
        <div className="empty-state premium-empty-state fade-in">
          <div className="empty-state-animation">
            <div className="empty-state-icon">📅</div>
          </div>
          <h2 className="empty-title">No Appointments Yet</h2>
          <p className="empty-description">You haven't scheduled any appointments yet. Start exploring salons and book your first appointment!</p>
          <button
            className="empty-state-button premium-button cta-button"
            onClick={() => navigate("/user/salons")}
          >
            <span className="btn-icon">🏪</span>
            <span>Browse Salons</span>
          </button>
        </div>
      )}

      {/* Quick Stats */}
      {appointments.length > 0 && (
        <div className="stats-section fade-in">
          <div className="stat-card-premium upcoming-stat-card slide-in-left">
            <div className="stat-icon upcoming-icon">📅</div>
            <div className="stat-content">
              <div className="stat-label">Total Upcoming</div>
              <div className="stat-number">{upcomingAppointments.length}</div>
            </div>
          </div>
          <div className="stat-card-premium cancelled-stat-card slide-in-left" style={{ animationDelay: "0.1s" }}>
            <div className="stat-icon cancelled-icon">❌</div>
            <div className="stat-content">
              <div className="stat-label">Cancelled</div>
              <div className="stat-number">{cancelledAppointments.length}</div>
            </div>
          </div>
          <div className="stat-card-premium total-stat-card slide-in-left" style={{ animationDelay: "0.2s" }}>
            <div className="stat-icon total-icon">💰</div>
            <div className="stat-content">
              <div className="stat-label">Total Value</div>
              <div className="stat-number">${upcomingAppointments.reduce((sum, apt) => sum + apt.price, 0)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAppointments;
