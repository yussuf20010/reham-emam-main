import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ id: null, token: null, isLogin: false });

  // Load from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("auth");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Save to localStorage on user state change
  useEffect(() => {
    if (user.isLogin) {
      localStorage.setItem("auth", JSON.stringify(user));
    } else {
      localStorage.removeItem("auth"); // Clear storage on logout
    }
  }, [user]);

  // Login function
  const login = (id, token) => {
    setUser({ id, token, isLogin: true });
  };

  // Logout function
  const logout = () => {
    setUser({ id: null, token: null, isLogin: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
