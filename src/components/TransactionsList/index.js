import React from "react";
import { useTransactionsContext } from "../../contexts/transactionsContext";
import { Container, Header, List, SearchField } from "./styles";
import { ListItem } from "./ListItem";

export function TransactionsList() {
  const { transactions: allTransactions } = useTransactionsContext();

  const [transactions, setTransactions] = React.useState(allTransactions);
  const [activeButton, setActiveButton] = React.useState("Tudo");
  const [searchFilter, setSearchFilter] = React.useState("");

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

  const handleSearch = () => {
    if (searchFilter === "") {
      return handleClearSearchFilter();
    }

    const regex = new RegExp(searchFilter, "i");
    const filtered = transactions.filter((transaction) =>
      regex.test(transaction.description)
    );

    setTransactions(filtered);
  };

  const handleClearSearchFilter = () => {
    setSearchFilter("");
    getAll();
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

      <SearchField>
        <input
          type="text"
          placeholder="Descrição da transação"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
        <button onClick={handleClearSearchFilter}>Limpar filtros</button>
      </SearchField>

      <List>
        {transactions.map((transaction) => (
          <ListItem key={transaction._id} transaction={transaction} />
        ))}
      </List>
    </Container>
  );
}
