import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserRegister from "./pages/UserRegister";
import OwnerRegister from "./pages/OwnerRegister";
<<<<<<< HEAD
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import RoleBasedRoute from "./components/routes/RoleBasedRoute";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import OwnerDashboard from "./pages/OwnerDashboard";
import UserRoutes from "./user/routes";
=======
import RoleBasedRoute from "./components/routes/RoleBasedRoute";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import UserDashboard from "./pages/UserDashboard";
import OwnerDashboard from "./pages/OwnerDashboard";
>>>>>>> 832cd83f75b200c2e5b4d8c733666d3a6dab5f13

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
<<<<<<< HEAD
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
=======
>>>>>>> 832cd83f75b200c2e5b4d8c733666d3a6dab5f13
      <Route path="/register/user" element={<UserRegister />} />
      <Route path="/register/owner" element={<OwnerRegister />} />

      <Route
<<<<<<< HEAD
        path="/user/*"
        element={
          <ProtectedRoute>
            <RoleBasedRoute allowedRoles={["USER"]}>
              <UserRoutes />
=======
        path="/user-dashboard"
        element={
          <ProtectedRoute>
            <RoleBasedRoute allowedRoles={["USER"]}>
              <UserDashboard />
>>>>>>> 832cd83f75b200c2e5b4d8c733666d3a6dab5f13
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
