import { Routes, Route } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import SalonList from "./pages/SalonList";
import SalonDetails from "./pages/SalonDetails";
import MyAppointments from "./pages/MyAppointments";
import BookingHistory from "./pages/BookingHistory";

/**
 * User Module Routes
 * All routes are nested under /user/* path
 * Protected by ProtectedRoute and RoleBasedRoute in parent App.jsx
 */
const UserRoutes = () => {
  return (
    <Routes>
      {/* Dashboard - Main landing page */}
      <Route path="/" element={<UserDashboard />} />

      {/* Salons List - Browse all salons */}
      <Route path="/salons" element={<SalonList />} />

      {/* Salon Details - View salon and make booking */}
      <Route path="/salons/:id" element={<SalonDetails />} />

      {/* My Appointments - View upcoming appointments */}
      <Route path="/appointments" element={<MyAppointments />} />

      {/* Booking History - View past + cancelled appointments */}
      <Route path="/bookings" element={<BookingHistory />} />
    </Routes>
  );
};

export default UserRoutes;
