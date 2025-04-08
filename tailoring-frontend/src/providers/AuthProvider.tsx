import { useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import isTokenExpired from "../pages/Auths/isTokenExpired";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem("isAdmin") === "true";
  });

  const login = (user: any, token: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", user.id);
    localStorage.setItem("isAdmin", user.isAdmin.toString());

    setUser(user);
    setIsAdmin(user.isAdmin);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");

    setUser(null);
    setIsAdmin(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || isTokenExpired(token)) {
      logout();
    }
  }, []);
  return (
    <>
      <AuthContext.Provider value={{ user, isAdmin, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
