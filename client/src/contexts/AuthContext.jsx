import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("tokens")) || null
  );
  const navigate = useNavigate();

  const login = (user, tokens) => {
    setUser(user);
    setToken(tokens);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("tokens", JSON.stringify(tokens));
  };
  const logout = async () => {
    await axios.get(`${process.env.REACT_APP_API_URL}/auth/logout`, {
      headers: { Authorization: `Bearer ${token?.refresh?.token}` },
    });

    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("tokens");

    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
