import React from "react";

const ServiceCard = ({ service, isSelected, onSelect, disabled = false }) => {
  const handleClick = () => {
    if (!disabled && service.available) {
      onSelect(service);
    }
  };

  return (
    <div
      className={`service-item ${isSelected ? "selected" : ""} ${
        disabled || !service.available ? "unavailable" : ""
      }`}
      onClick={handleClick}
      style={{
        opacity: disabled || !service.available ? 0.6 : 1,
        cursor: disabled || !service.available ? "not-allowed" : "pointer",
      }}
    >
      <div className="service-name">{service.name}</div>
      <div className="service-details">
        ⏱️ {service.duration} mins
      </div>
      {!service.available && (
        <div style={{ fontSize: "11px", color: "#ff6b6b", marginTop: "8px", fontWeight: "600" }}>
          ⚠️ Unavailable
        </div>
      )}
      <div className="service-price">${service.price}</div>
    </div>
  );
};

export default ServiceCard;
