import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<div>Login Page</div>} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/" element={<div>Dashboard</div>} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
