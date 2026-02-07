import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const RoleBasedRoute = ({ allowedRoles, children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null; // Or a loading spinner
  if (!user) return <Navigate to="/login" />;
  if (!allowedRoles.includes(user.role))
    return <Navigate to="/unauthorized" />;

  return children;
};

export default RoleBasedRoute;
