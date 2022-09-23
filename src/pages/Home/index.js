import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "react-loader-spinner";
import { Container, Content, FormContainer, TransactionsContainer } from "./styles";
import { TransactionForm } from "../../components/TransactionForm";
import { useTransactionsContext } from "../../contexts/transactionsContext";
import { TransactionsList } from "../../components/TransactionsList";

export function Home() {
  const navigate = useNavigate();

  const { isLoading } = useTransactionsContext();

  const centerDivStyle = {
    marginTop: "80px",
    display: "flex",
    justifyContent: "center",
    alignItens: "center",
  };

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
          {isLoading ? (
            <Grid
              height="80"
              width="80"
              color="#00875f"
              ariaLabel="grid-loading"
              radius="12.5"
              wrapperStyle={centerDivStyle}
              visible={true}
            />
          ) : (
            <TransactionsList />
          )}
        </TransactionsContainer>
      </Content>
    </Container>
  );
}
