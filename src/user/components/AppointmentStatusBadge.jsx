import React from "react";

const AppointmentStatusBadge = ({ status }) => {
  const statusConfig = {
    PENDING: { color: "#ffa502", bgColor: "rgba(255, 165, 2, 0.1)", label: "⏳ Pending" },
    CONFIRMED: { color: "#00b894", bgColor: "rgba(0, 184, 148, 0.1)", label: "✅ Confirmed" },
    COMPLETED: { color: "#0984e3", bgColor: "rgba(9, 132, 227, 0.1)", label: "🏁 Completed" },
    CANCELLED: { color: "#ff6b6b", bgColor: "rgba(255, 107, 107, 0.1)", label: "❌ Cancelled" },
  };

  const config = statusConfig[status] || statusConfig.PENDING;

  return (
    <span
      className="appointment-status-badge"
      style={{
        display: "inline-block",
        padding: "6px 12px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "600",
        backgroundColor: config.bgColor,
        color: config.color,
        textTransform: "uppercase",
        letterSpacing: "0.5px",
      }}
    >
      {config.label}
    </span>
  );
};

export default AppointmentStatusBadge;
