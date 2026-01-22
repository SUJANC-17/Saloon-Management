import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserRegister from "./pages/UserRegister";
import OwnerRegister from "./pages/OwnerRegister";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import RoleBasedRoute from "./components/routes/RoleBasedRoute";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import OwnerDashboard from "./pages/OwnerDashboard";
import UserRoutes from "./user/routes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/register/user" element={<UserRegister />} />
      <Route path="/register/owner" element={<OwnerRegister />} />

      <Route
        path="/user/*"
        element={
          <ProtectedRoute>
            <RoleBasedRoute allowedRoles={["USER"]}>
              <UserRoutes />
            </RoleBasedRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/owner-dashboard"
        element={
          <ProtectedRoute>
            <RoleBasedRoute allowedRoles={["OWNER"]}>
              <OwnerDashboard />
            </RoleBasedRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/unauthorized"
        element={
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>❌ Unauthorized</h1>
            <p>You don't have access to this page.</p>
            <a href="/login">Go back to login</a>
          </div>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
