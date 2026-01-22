import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import SlotSelector from "../components/SlotSelector";
import BookingForm from "../components/BookingForm";
import { mockSalons, mockServices, generateTimeSlots } from "../mockData";
import "../styles/user.css";

const SalonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [salon, setSalon] = useState(null);
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [slots, setSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    // Simulate loading salon details
    const foundSalon = mockSalons.find((s) => s.id === parseInt(id));
    setSalon(foundSalon);

    if (foundSalon) {
      const salonServices = mockServices[foundSalon.id] || [];
      setServices(salonServices);

      // Generate time slots
      const timeSlots = generateTimeSlots();
      setSlots(timeSlots);
    }
  }, [id]);

  const handleBookingSubmit = (bookingData) => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Store booking in local storage (mock)
      const existingBookings = JSON.parse(
        localStorage.getItem("userBookings") || "[]"
      );
      const newBooking = {
        id: existingBookings.length + 1,
        ...bookingData,
      };
      existingBookings.push(newBooking);
      localStorage.setItem("userBookings", JSON.stringify(existingBookings));

      setIsLoading(false);
      setBookingSuccess(true);

      // Show success message and redirect
      setTimeout(() => {
        navigate("/user/appointments");
      }, 1500);
    }, 1500);
  };

  if (!salon) {
    return (
      <div className="salon-details">
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            color: "#636e72",
          }}
        >
          <p>Salon not found</p>
          <button
            className="empty-state-button"
            onClick={() => navigate("/user/salons")}
          >
            Back to Salons
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="salon-details">
      {bookingSuccess && (
        <div className="success-message">
          ✅ Appointment booked successfully! Redirecting...
        </div>
      )}

      {/* Back Button */}
      <button
        onClick={() => navigate("/user/salons")}
        className="back-button"
      >
        ← Back to Salons
      </button>

      {/* Hero Section */}
      <div className="salon-hero">
        <div
          style={{
            width: "100%",
            height: "100%",
            background: `linear-gradient(135deg, hsl(${salon.id * 40}, 70%, 60%) 0%, hsl(${salon.id * 40 + 30}, 70%, 50%) 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "100px",
          }}
        >
          ✨
        </div>
      </div>

      {/* Salon Info */}
      <div className="salon-info-header">
        <div className="salon-info-top">
          <div className="salon-info-title">
            <h1>{salon.name}</h1>
            <div className="salon-info-rating">
              ⭐ {salon.rating} • {salon.reviews} reviews • {salon.priceRange}
            </div>
          </div>
          <div
            style={{
              fontSize: "32px",
              padding: "10px",
            }}
          >
            {salon.isOpen ? "🟢" : "🔴"}
          </div>
        </div>

        <p style={{ color: "#636e72", marginTop: "10px", lineHeight: "1.6" }}>
          {salon.description}
        </p>

        <div className="salon-contact">
          <div className="contact-item">
            <strong>📍 City:</strong>
            <span>{salon.city}</span>
          </div>
          <div className="contact-item">
            <strong>📮 Address:</strong>
            <span>{salon.address}</span>
          </div>
          <div className="contact-item">
            <strong>📞 Phone:</strong>
            <span>{salon.phone}</span>
          </div>
          <div className="contact-item">
            <strong>⏰ Hours:</strong>
            <span>{salon.hours}</span>
          </div>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="booking-form-section" style={{ marginTop: "30px" }}>
        {/* Step 1: Select Service */}
        <div style={{ marginBottom: "30px" }}>
          <div className="section-title">💅 Step 1: Select Service</div>
          <div className="service-list">
            {services && services.length > 0 ? (
              services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isSelected={selectedService?.id === service.id}
                  onSelect={setSelectedService}
                  disabled={!salon.isOpen}
                />
              ))
            ) : (
              <div style={{ gridColumn: "1/-1", textAlign: "center", color: "#636e72" }}>
                No services available
              </div>
            )}
          </div>
        </div>

        {/* Step 2: Select Time Slot */}
        {selectedService && (
          <div style={{ marginBottom: "30px" }}>
            <div className="section-title">⏰ Step 2: Select Date & Time</div>
            <SlotSelector
              slots={slots}
              selectedSlot={selectedSlot}
              onSelectSlot={setSelectedSlot}
            />
          </div>
        )}

        {/* Step 3: Enter Details & Book */}
        {selectedService && selectedSlot && (
          <div>
            <div className="section-title">👤 Step 3: Your Details</div>
            <BookingForm
              salon={salon}
              service={selectedService}
              slot={selectedSlot}
              onSubmit={handleBookingSubmit}
              isLoading={isLoading}
            />
          </div>
        )}

        {/* Placeholder for incomplete steps */}
        {!selectedService && (
          <div
            style={{
              background: "#f5f6fa",
              padding: "30px",
              borderRadius: "8px",
              textAlign: "center",
              color: "#636e72",
            }}
          >
            💡 Select a service above to continue booking
          </div>
        )}
      </div>
    </div>
  );
};

export default SalonDetails;
