import { createContext, useEffect, useState } from "react";
import api from "../api";
import { toastManager } from "@/components/ui/toast";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getUserData = async () => {
    try {
      const { data } = await api.get("/user/data");
      if (data.success) {
        setUser(data.userData);
        setIsLoggedin(true);
      }
    } catch (error) {
      console.error("AuthContext: Error fetching user data", error);
      setUser(null);
      setIsLoggedin(false);
    } finally {
      setIsLoading(false);
    }
  };

  const checkAuthState = async () => {
    try {
      const { data } = await api.post("/auth/is-auth");
      if (data.success) {
        setIsLoggedin(true);
        await getUserData();
      } else {
        setIsLoggedin(false);
        setUser(null);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoggedin(false);
      setUser(null);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuthState();
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user, 
      setUser, 
      isLoggedin, 
      setIsLoggedin, 
      getUserData,
      isLoading 
    }}>
      {children}
    </AuthContext.Provider>
  );
};
