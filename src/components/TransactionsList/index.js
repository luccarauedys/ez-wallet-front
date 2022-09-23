import React from "react";
import { useTransactionsContext } from "../../contexts/transactionsContext";
import { Container, Header, List } from "./styles";
import { ListItem } from "./ListItem";

export function TransactionsList() {
  const { transactions: allTransactions } = useTransactionsContext();

  const [transactions, setTransactions] = React.useState(allTransactions);
  const [activeButton, setActiveButton] = React.useState("Tudo");

  const activeButtonStyle = { backgroundColor: "#015f43" };

  const getAll = async () => {
    setTransactions(allTransactions);
    setActiveButton("Tudo");
  };

  const getDeposits = () => {
    const deposits = allTransactions.filter(
      (transaction) => transaction.type === "deposit"
    );
    setTransactions(deposits);
    setActiveButton("Entradas");
  };

  const getWithdraws = () => {
    const withdraws = allTransactions.filter(
      (transaction) => transaction.type === "withdraw"
    );
    setTransactions(withdraws);
    setActiveButton("Saídas");
  };

  return (
    <Container>
      <Header>
        <h2>Resumo financeiro</h2>
        <div>
          <button
            onClick={getAll}
            style={activeButton === "Tudo" ? activeButtonStyle : {}}
          >
            Tudo
          </button>
          <button
            onClick={getDeposits}
            style={activeButton === "Entradas" ? activeButtonStyle : {}}
          >
            Entradas
          </button>
          <button
            onClick={getWithdraws}
            style={activeButton === "Saídas" ? activeButtonStyle : {}}
          >
            Saídas
          </button>
        </div>
      </Header>

      <List>
        {transactions.map((transaction) => (
          <ListItem key={transaction._id} transaction={transaction} />
        ))}
      </List>
    </Container>
  );
}
