// User module constants
export const BOOKING_STATUS = {
  PENDING: "PENDING",
  CONFIRMED: "CONFIRMED",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
  UPCOMING: "UPCOMING",
};

export const BOOKING_STATUS_COLORS = {
  PENDING: "#ffa502",
  CONFIRMED: "#00b894",
  COMPLETED: "#0984e3",
  CANCELLED: "#ff6b6b",
  UPCOMING: "#6c5ce7",
};

export const SERVICE_DURATION_UNIT = "minutes";
export const TIME_SLOT_INTERVAL = 30; // minutes

export const USER_ROUTES = {
  DASHBOARD: "/user",
  SALONS_LIST: "/user/salons",
  SALON_DETAIL: "/user/salons/:id",
  BOOKING_HISTORY: "/user/bookings",
};
