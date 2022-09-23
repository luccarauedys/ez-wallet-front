import React from "react";
import { ToastContainer } from "react-toastify";
import { api, getConfig } from "../services/api";
import { notifyError } from "../utils/toasts";

export const TransactionsContext = React.createContext({});

export function TransactionsProvider({ children }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [transactions, setTransactions] = React.useState([]);

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
    React.useContext(TransactionsContext);
  return { transactions, setTransactions, getTransactions, deleteTransaction, isLoading };
}
