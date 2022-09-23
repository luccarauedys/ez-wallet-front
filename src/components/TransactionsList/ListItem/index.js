import { TrashSimple } from "phosphor-react";
import { useTransactionsContext } from "../../../contexts/transactionsContext";
import { Container, LeftSide, RightSide } from "./styles";
import { formatPrice } from "../../../utils/formatters";

export function ListItem({ transaction }) {
  const { deleteTransaction } = useTransactionsContext();

  const borderLeftColor = transaction.type === "deposit" ? "#00b37e" : "#f75a68";

  const handleDelete = async () => {
    await deleteTransaction(transaction._id);
  };

  return (
    <Container borderLeftColor={borderLeftColor}>
      <LeftSide>
        <h2>{transaction.description}</h2>
        <p>{transaction.type === "deposit" ? "Entrada" : "Saída"}</p>
        <p>{transaction.date}</p>
      </LeftSide>

      <RightSide>
        <p>{formatPrice(transaction.value)}</p>
        <TrashSimple size={22} weight="fill" color="#f75a68" onClick={handleDelete} />
      </RightSide>
    </Container>
  );
}
