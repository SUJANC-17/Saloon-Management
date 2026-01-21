import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserRegister from "./pages/UserRegister";
import OwnerRegister from "./pages/OwnerRegister";
import RoleBasedRoute from "./components/routes/RoleBasedRoute";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import UserDashboard from "./pages/UserDashboard";
import OwnerDashboard from "./pages/OwnerDashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register/user" element={<UserRegister />} />
      <Route path="/register/owner" element={<OwnerRegister />} />

      <Route
        path="/user-dashboard"
        element={
          <ProtectedRoute>
            <RoleBasedRoute allowedRoles={["USER"]}>
              <UserDashboard />
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
