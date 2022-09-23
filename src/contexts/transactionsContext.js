import { createContext, useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { api, getConfig } from "../services/api";
import { notifyError } from "../utils/toasts";

export const TransactionsContext = createContext({});

export function TransactionsProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get("/transactions", getConfig());
      setTransactions([...data]);
    } catch (error) {
      if (error.response.data) notifyError(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTransaction = async (transactionId) => {
    setIsLoading(true);
    try {
      await api.delete(`/transactions/${transactionId}`, getConfig());
      await getTransactions();
    } catch (error) {
      if (error.response.data) notifyError(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token@ezwallet");
    if (token) {
      getTransactions();
    }
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        setTransactions,
        getTransactions,
        deleteTransaction,
        isLoading,
      }}
    >
      {children}
      <ToastContainer />
    </TransactionsContext.Provider>
  );
}

export function useTransactionsContext() {
  const { transactions, setTransactions, getTransactions, deleteTransaction, isLoading } =
    useContext(TransactionsContext);
  return { transactions, setTransactions, getTransactions, deleteTransaction, isLoading };
}
