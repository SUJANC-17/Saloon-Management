import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SalonCard from "../components/SalonCard";
import { mockSalons } from "../mockData";
import "../styles/user.css";

const SalonList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("name"); // "name" or "city"
  const [filterOpen, setFilterOpen] = useState(null); // null = all, true = open, false = closed

  // Filter salons based on search and open status
  const filteredSalons = mockSalons.filter((salon) => {
    let matchesSearch = true;

    if (searchTerm.trim()) {
      if (searchType === "name") {
        matchesSearch =
          salon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          salon.description.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (searchType === "city") {
        matchesSearch = salon.city.toLowerCase().includes(searchTerm.toLowerCase());
      }
    }

    const matchesStatus =
      filterOpen === null ||
      (filterOpen === true && salon.isOpen) ||
      (filterOpen === false && !salon.isOpen);

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="user-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <button
          onClick={() => navigate("/user")}
          className="back-button"
          style={{
            position: "absolute",
            left: "25px",
            top: "25px",
          }}
        >
          ← Back
        </button>
        <h1 className="dashboard-title" style={{ marginLeft: "50px" }}>
          🏪 Browse Salons
        </h1>
      </div>

      {/* Search and Filters */}
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          marginBottom: "30px",
        }}
      >
        {/* Search Input */}
        <div style={{ marginBottom: "20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "10px", marginBottom: "10px" }}>
            <input
              type="text"
              placeholder={`Search salons by ${searchType === "name" ? "name or service" : "city"}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input"
              style={{ fontSize: "14px" }}
            />
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="form-select"
              style={{ fontSize: "13px", minWidth: "120px" }}
            >
              <option value="name">Search by Name</option>
              <option value="city">Search by City</option>
            </select>
          </div>
        </div>

        {/* Status Filters */}
        <div style={{ marginBottom: "15px" }}>
          <div style={{ fontSize: "12px", fontWeight: "600", color: "#636e72", marginBottom: "10px", textTransform: "uppercase" }}>
            Filter by Status:
          </div>
          <div className="filter-buttons">
            <button
              className={`filter-button ${filterOpen === null ? "active" : ""}`}
              onClick={() => setFilterOpen(null)}
            >
              📍 All Salons
            </button>
            <button
              className={`filter-button ${filterOpen === true ? "active" : ""}`}
              onClick={() => setFilterOpen(true)}
            >
              🟢 Open Now
            </button>
            <button
              className={`filter-button ${filterOpen === false ? "active" : ""}`}
              onClick={() => setFilterOpen(false)}
            >
              🔴 Closed
            </button>
          </div>
        </div>
      </div>

      {/* Results Info */}
      {filteredSalons.length > 0 && (
        <div
          style={{
            background: "#f5f6fa",
            padding: "12px 15px",
            borderRadius: "8px",
            marginBottom: "20px",
            fontSize: "13px",
            color: "#636e72",
            fontWeight: "600",
          }}
        >
          Found {filteredSalons.length} salon{filteredSalons.length !== 1 ? "s" : ""} matching your search
        </div>
      )}

      {/* Salons Grid */}
      {filteredSalons.length > 0 ? (
        <div className="salons-grid">
          {filteredSalons.map((salon) => (
            <SalonCard key={salon.id} salon={salon} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">🔍</div>
          <h2>No Salons Found</h2>
          <p>Try adjusting your search or filters</p>
          <button
            className="empty-state-button"
            onClick={() => {
              setSearchTerm("");
              setFilterOpen(null);
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default SalonList;
