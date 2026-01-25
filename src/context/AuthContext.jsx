import { createContext, useEffect, useState } from "react";
import tokenService from "../services/tokenService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = tokenService.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUser({ email: payload.sub, role: payload.role });
    }
  }, []);

  const logout = () => {
    tokenService.clearToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
