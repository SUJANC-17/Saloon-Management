import React from "react";
import { BOOKING_STATUS_COLORS } from "../constants";

const BookingStatusBadge = ({ status }) => {
  const statusClass = status.toLowerCase();
  const backgroundColor = BOOKING_STATUS_COLORS[status] || "#636e72";

  return (
    <span
      className={`booking-status-badge ${statusClass}`}
      style={{
        backgroundColor: `${backgroundColor}20`,
        color: backgroundColor,
      }}
    >
      {status}
    </span>
  );
};

export default BookingStatusBadge;
