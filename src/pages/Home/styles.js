import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Content = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.section`
  flex: 1;
`;

export const TransactionsContainer = styled.section`
  flex: 2;
`;
