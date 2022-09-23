import { TrashSimple } from "phosphor-react";
import { Container, LeftSide, RightSide } from "./styles";

export function ListItem({ transaction }) {
  const borderLeftColor = transaction.type === "deposit" ? "#00b37e" : "#f75a68";

  return (
    <Container borderLeftColor={borderLeftColor}>
      <LeftSide>
        <h2>{transaction.description}</h2>
        <p>{transaction.type}</p>
        <p>{transaction.date}</p>
      </LeftSide>

      <RightSide>
        <p>R$ {transaction.value}</p>
        <TrashSimple size={22} weight="fill" color="#f75a68" />
      </RightSide>
    </Container>
  );
}
