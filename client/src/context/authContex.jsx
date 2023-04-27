import { createContext, useEffect, useState, useCallback } from "react";
import { makeRequest } from "../axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );

  const login = useCallback(async (inputs) => {
    try {
      setLoading(true);
      setError(null);

      const response = await makeRequest.post("/user", inputs);
      const { token, user } = response.data;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("currentUser", JSON.stringify(user));
      setToken(token);
      setCurrentUser(user);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
    }

    setLoading(false);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    setToken(null);
    setCurrentUser(null);
  }, []);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ currentUser, login, token, logout, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};
