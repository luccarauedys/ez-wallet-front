import { createContext, useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { api, getConfig } from "../services/api";
import { notifyError } from "../utils/toasts";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({ user: null, transactions: [] });

  const getUserData = async () => {
    setIsLoading(true);
    try {
      const { data: user } = await api.get("/users", getConfig());
      const { data: transactions } = await api.get("/transactions", getConfig());
      setUserData({ ...user, transactions });
    } catch (error) {
      if (error.response.data) notifyError(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token@ezwallet");
    if (token) {
      getUserData();
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData, isLoading }}>
      {children}
      <ToastContainer />
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const { userData, setUserData, isLoading } = useContext(UserContext);
  return { userData, setUserData, isLoading };
}
