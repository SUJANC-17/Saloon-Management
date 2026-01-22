import React from "react";

const ServiceList = ({ services, selectedService, onSelectService }) => {
  return (
    <div className="service-list">
      {services && services.length > 0 ? (
        services.map((service) => (
          <div
            key={service.id}
            className={`service-item ${selectedService?.id === service.id ? "selected" : ""}`}
            onClick={() => onSelectService(service)}
          >
            <div className="service-name">{service.name}</div>
            <div className="service-details">
              ⏱️ {service.duration} mins
            </div>
            <div className="service-price">${service.price}</div>
          </div>
        ))
      ) : (
        <div style={{ gridColumn: "1/-1", textAlign: "center", color: "#636e72" }}>
          No services available
        </div>
      )}
    </div>
  );
};

export default ServiceList;
