import React, { useState } from "react";

const SlotSelector = ({ slots, selectedSlot, onSelectSlot }) => {
  const [expandedDate, setExpandedDate] = useState(null);
  const [unavailableWarning, setUnavailableWarning] = useState(null);

  // Group slots by date
  const slotsByDate = slots.reduce((acc, slot) => {
    if (!acc[slot.date]) {
      acc[slot.date] = [];
    }
    acc[slot.date].push(slot);
    return acc;
  }, {});

  const dates = Object.keys(slotsByDate).sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA - dateB;
  });

  const handleSlotClick = (slot) => {
    if (!slot.available) {
      setUnavailableWarning(slot.time);
      setTimeout(() => setUnavailableWarning(null), 2000);
      return;
    }
    onSelectSlot(slot);
  };

  return (
    <div className="slots-container">
      <div className="section-title">📅 Select Date & Time</div>
      
      {unavailableWarning && (
        <div
          style={{
            background: "rgba(255, 107, 107, 0.1)",
            color: "#ff6b6b",
            padding: "10px 15px",
            borderRadius: "8px",
            marginBottom: "15px",
            fontSize: "13px",
            fontWeight: "600",
            border: "1px solid #ff6b6b",
          }}
        >
          ⚠️ Sorry, {unavailableWarning} is not available. Please choose another time.
        </div>
      )}

      {dates.map((date) => (
        <div key={date} style={{ marginBottom: "20px" }}>
          <button
            style={{
              width: "100%",
              padding: "12px",
              background: expandedDate === date ? "#6c5ce7" : "#f5f6fa",
              color: expandedDate === date ? "white" : "#2d3436",
              border: "1px solid #dfe6e9",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "12px",
              transition: "all 0.3s ease",
              fontSize: "14px",
            }}
            onClick={() => setExpandedDate(expandedDate === date ? null : date)}
          >
            📆 {date}
          </button>

          {expandedDate === date && (
            <div className="slots-grid">
              {slotsByDate[date].map((slot) => (
                <button
                  key={slot.id}
                  className={`time-slot ${
                    selectedSlot?.id === slot.id ? "selected" : ""
                  } ${!slot.available ? "unavailable" : ""}`}
                  onClick={() => handleSlotClick(slot)}
                  disabled={!slot.available}
                  title={!slot.available ? "This slot is not available" : ""}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SlotSelector;
