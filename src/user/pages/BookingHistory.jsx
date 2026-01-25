import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingStatusBadge from "../components/BookingStatusBadge";
import { mockBookingHistory } from "../mockData";
import "../styles/user.css";

const BookingHistory = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  useEffect(() => {
    // Combine mock data with any bookings from localStorage
    const localBookings = JSON.parse(
      localStorage.getItem("userBookings") || "[]"
    );

    const allBookings = [
      ...mockBookingHistory,
      ...localBookings.map((booking) => ({
        id: booking.id,
        salonName: booking.salon.name,
        serviceName: booking.service.name,
        date: booking.slot.date,
        time: booking.slot.time,
        price: booking.service.price,
        status: booking.status,
        rating: null,
      })),
    ];

    setBookings(allBookings);
    filterBookings(allBookings, "ALL");
  }, []);

  const filterBookings = (bookingsToFilter, filter) => {
    if (filter === "ALL") {
      setFilteredBookings(bookingsToFilter);
    } else {
      setFilteredBookings(
        bookingsToFilter.filter((b) => b.status === filter)
      );
    }
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    filterBookings(bookings, filter);
  };

  const handleCancelBooking = (bookingId) => {
    if (
      window.confirm("Are you sure you want to cancel this booking?")
    ) {
      const updatedBookings = bookings.map((b) =>
        b.id === bookingId ? { ...b, status: "CANCELLED" } : b
      );
      setBookings(updatedBookings);
      filterBookings(updatedBookings, selectedFilter);
    }
  };

  return (
    <div className="bookings-container">
      {/* Header */}
      <div className="bookings-header">
        <h1>📋 My Bookings</h1>
        <button
          onClick={() => navigate("/user")}
          style={{
            background: "#6c5ce7",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Filters */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          marginBottom: "25px",
        }}
      >
        <div className="filter-buttons">
          {["ALL", "PENDING", "CONFIRMED", "UPCOMING", "COMPLETED", "CANCELLED"].map(
            (filter) => (
              <button
                key={filter}
                className={`filter-button ${
                  selectedFilter === filter ? "active" : ""
                }`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter === "ALL" && "📊 All"}
                {filter === "PENDING" && "⏳ Pending"}
                {filter === "CONFIRMED" && "✅ Confirmed"}
                {filter === "UPCOMING" && "📅 Upcoming"}
                {filter === "COMPLETED" && "🏁 Completed"}
                {filter === "CANCELLED" && "❌ Cancelled"}
              </button>
            )
          )}
        </div>
      </div>

      {/* Bookings List */}
      {filteredBookings.length > 0 ? (
        <div className="bookings-list">
          {filteredBookings.map((booking) => (
            <div key={booking.id} className="booking-item">
              <div className="booking-item-content">
                <h3>{booking.salonName}</h3>
                <div className="booking-details">
                  <div className="booking-detail-label">Service:</div>
                  <div>{booking.serviceName}</div>

                  <div className="booking-detail-label">Date:</div>
                  <div>{booking.date}</div>

                  <div className="booking-detail-label">Time:</div>
                  <div>{booking.time}</div>
                </div>
              </div>

              <div className="booking-item-meta">
                <BookingStatusBadge status={booking.status} />
                <div className="booking-price">${booking.price}</div>

                {booking.status === "UPCOMING" && (
                  <button
                    onClick={() => handleCancelBooking(booking.id)}
                    style={{
                      background: "#ff6b6b",
                      color: "white",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: "600",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.background = "#ff5252")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.background = "#ff6b6b")
                    }
                  >
                    Cancel
                  </button>
                )}

                {booking.status === "COMPLETED" && !booking.rating && (
                  <button
                    style={{
                      background: "#ffa502",
                      color: "white",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    ⭐ Rate
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">📋</div>
          <h2>No Bookings Found</h2>
          <p>
            {selectedFilter === "ALL"
              ? "You haven't made any bookings yet. Start exploring salons!"
              : `No ${selectedFilter.toLowerCase()} bookings`}
          </p>
          <button
            className="empty-state-button"
            onClick={() => navigate("/user/salons")}
          >
            🏪 Browse Salons
          </button>
        </div>
      )}

      {/* Stats Summary */}
      {bookings.length > 0 && (
        <div
          style={{
            marginTop: "30px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "15px",
          }}
        >
          <div className="stat-card">
            <div className="stat-label">📊 Total Bookings</div>
            <div className="stat-value">{bookings.length}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">📅 Upcoming</div>
            <div className="stat-value">
              {bookings.filter((b) => b.status === "UPCOMING").length}
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-label">✅ Completed</div>
            <div className="stat-value">
              {bookings.filter((b) => b.status === "COMPLETED").length}
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-label">💰 Total Spent</div>
            <div className="stat-value">
              $
              {bookings
                .filter((b) => b.status === "COMPLETED")
                .reduce((sum, b) => sum + b.price, 0)
                .toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingHistory;
