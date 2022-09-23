import { createContext, useContext, useEffect, useState } from "react";
import { api, getConfig } from "../services/api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    setIsLoading(true);

    const { data: user } = await api.get("/users", getConfig());
    const { data: transactions } = await api.get("/transactions", getConfig());
    setUserData({ ...user, transactions });

    setIsLoading(false);
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
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const { userData, setUserData, isLoading } = useContext(UserContext);
  return { userData, setUserData, isLoading };
}
