import React from "react";
import { useTransactionsContext } from "../../contexts/transactionsContext";
import { Container, Header, List } from "./styles";
import { ListItem } from "./ListItem";

export function TransactionsList() {
  const { transactions: allTransactions } = useTransactionsContext();

  const [transactions, setTransactions] = React.useState(allTransactions);

  const getAll = async () => {
    setTransactions(allTransactions);
  };

  const getDeposits = () => {
    const deposits = allTransactions.filter(
      (transaction) => transaction.type === "deposit"
    );

    setTransactions(deposits);
  };

  const getWithdraws = () => {
    const withdraws = allTransactions.filter(
      (transaction) => transaction.type === "withdraw"
    );

    setTransactions(withdraws);
  };

  return (
    <Container>
      <Header>
        <h2>Resumo financeiro</h2>
        <div>
          <button onClick={getAll}>Tudo</button>
          <button onClick={getDeposits}>Entradas</button>
          <button onClick={getWithdraws}>Saídas</button>
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
