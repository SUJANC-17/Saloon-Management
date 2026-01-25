import React, { useState } from "react";

const BookingForm = ({
  salon,
  service,
  slot,
  onSubmit,
  isLoading = false,
}) => {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!customerName || !customerEmail || !customerPhone) {
      alert("Please fill in all required fields");
      return;
    }

    const bookingData = {
      salon,
      service,
      slot,
      customer: {
        name: customerName,
        email: customerEmail,
        phone: customerPhone,
      },
      notes,
      status: "PENDING",
      bookingDate: new Date().toISOString(),
    };

    onSubmit(bookingData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      {/* Summary */}
      <div className="booking-summary">
        <div className="summary-item">
          <span>Salon:</span>
          <strong>{salon?.name}</strong>
        </div>
        <div className="summary-item">
          <span>Service:</span>
          <strong>{service?.name}</strong>
        </div>
        <div className="summary-item">
          <span>Date & Time:</span>
          <strong>{slot?.date} at {slot?.time}</strong>
        </div>
        <div className="summary-item">
          <span>Duration:</span>
          <strong>{service?.duration} minutes</strong>
        </div>
        <div className="summary-total">
          <span>Total Price:</span>
          <span>${service?.price}</span>
        </div>
      </div>

      {/* Customer Information */}
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Full Name *</label>
          <input
            type="text"
            className="form-input"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email Address *</label>
          <input
            type="email"
            className="form-input"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            placeholder="john@example.com"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Phone Number *</label>
        <input
          type="tel"
          className="form-input"
          value={customerPhone}
          onChange={(e) => setCustomerPhone(e.target.value)}
          placeholder="+1 (555) 123-4567"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Additional Notes</label>
        <textarea
          className="form-input"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Any special requests or notes..."
          rows="4"
          style={{ resize: "vertical" }}
        />
      </div>

      <button
        type="submit"
        className="submit-button"
        disabled={isLoading || !service || !slot}
      >
        {isLoading ? "Booking..." : "✅ Confirm Booking"}
      </button>
    </form>
  );
};

export default BookingForm;
