import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Content, FormContainer, TransactionsContainer } from "./styles";
import { TransactionForm } from "../../components/TransactionForm";
import { useUserContext } from "../../contexts/userContext";

export function Home() {
  const navigate = useNavigate();
  const { userData, isLoading } = useUserContext();

  React.useEffect(() => {
    const token = localStorage.getItem("token@ezwallet");
    if (!token) navigate("/");
  }, [navigate]);

  return (
    <Container>
      <Content>
        <FormContainer>
          <TransactionForm />
        </FormContainer>

        <TransactionsContainer>
          {isLoading ? "Carregando..." : "Lista de transações"}
        </TransactionsContainer>
      </Content>
    </Container>
  );
}
