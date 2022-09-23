import { TailSpin } from "react-loader-spinner";
import { useTransactionsContext } from "../../contexts/transactionsContext";
import { Container, Title } from "./styles";

export function SummaryCard({ title, value, children }) {
  const { isLoading } = useTransactionsContext();

  const spinnerWrapperStyle = {
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItens: "center",
  };

  return (
    <Container>
      <Title>
        <h3>{title}</h3>
        {children}
      </Title>
      <p>
        {isLoading ? (
          <TailSpin
            height="25"
            width="25"
            radius="1"
            color="#FFFFFF"
            wrapperStyle={spinnerWrapperStyle}
            visible={true}
            ariaLabel="tail-spin-loading"
          />
        ) : (
          value
        )}
      </p>
    </Container>
  );
}
