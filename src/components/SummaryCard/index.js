import { Container, Title } from "./styles";

export function SummaryCard({ title, value, children }) {
  return (
    <Container>
      <Title>
        <h3>{title}</h3>
        {children}
      </Title>
      <p>R$ {value}</p>
    </Container>
  );
}
