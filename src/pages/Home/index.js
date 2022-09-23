import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Content, FormContainer, TransactionsContainer } from "./styles";
import { TransactionForm } from "../../components/TransactionForm";

export function Home() {
  const navigate = useNavigate();

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

        <TransactionsContainer>{/* <TransactionsList /> */}</TransactionsContainer>
      </Content>
    </Container>
  );
}
