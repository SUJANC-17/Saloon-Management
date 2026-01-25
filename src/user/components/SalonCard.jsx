import React from "react";
import { useNavigate } from "react-router-dom";

const SalonCard = ({ salon }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/user/salons/${salon.id}`);
  };

  return (
    <div className="salon-card">
      <div className="salon-image">
        <div
          style={{
            width: "100%",
            height: "100%",
            background: `linear-gradient(135deg, hsl(${salon.id * 40}, 70%, 60%) 0%, hsl(${salon.id * 40 + 30}, 70%, 50%) 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "40px",
          }}
        >
          ✨
        </div>
        <div className={`salon-status-badge ${!salon.isOpen ? "closed" : ""}`}>
          {salon.isOpen ? "Open" : "Closed"}
        </div>
      </div>
      <div className="salon-content">
        <h3 className="salon-name">{salon.name}</h3>
        <p className="salon-description">{salon.description}</p>
        
        <div className="salon-rating">
          <span className="rating-stars">⭐</span>
          <span>{salon.rating}</span>
          <span>({salon.reviews} reviews)</span>
        </div>

        <div className="salon-meta">
          <div className="salon-meta-item">📍 {salon.city}</div>
          <div className="salon-meta-item">💰 From ${salon.startingPrice}</div>
          <div className="salon-meta-item">⏰ {salon.hours}</div>
        </div>

        <button 
          className="salon-button" 
          onClick={handleViewDetails}
          disabled={!salon.isOpen}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default SalonCard;
