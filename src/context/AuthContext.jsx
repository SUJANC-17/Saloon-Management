import { createContext, useEffect, useState } from "react";
import tokenService from "../services/tokenService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = tokenService.getToken();
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUser({ email: payload.sub, role: payload.role });
      } catch (error) {
        console.error("Token parsing error:", error);
        tokenService.clearToken();
      }
    }
    setLoading(false);
  }, []);

  const logout = () => {
    tokenService.clearToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
