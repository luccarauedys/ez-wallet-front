import React from "react";
import { useUserContext } from "../../contexts/userContext";
import { Container, Header, List } from "./styles";
import { ListItem } from "./ListItem";

export function TransactionsList() {
  const { userData } = useUserContext();
  const { transactions } = userData;

  return (
    <Container>
      <Header>
        <h2>Resumo financeiro</h2>
        <div>
          <button>Tudo</button>
          <button>Entradas</button>
          <button>Saídas</button>
        </div>
      </Header>

      <List>
        {transactions.map((transaction) => (
          <ListItem transaction={transaction} />
        ))}
      </List>
    </Container>
  );
}
