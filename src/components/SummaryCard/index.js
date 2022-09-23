import { ThreeDots } from "react-loader-spinner";
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

      {isLoading ? (
        <ThreeDots
          height="25"
          width="25"
          color="#FFFFFF"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={spinnerWrapperStyle}
          visible={true}
        />
      ) : (
        <p>
          {title === "Saídas" && "-"}
          {value}
        </p>
      )}
    </Container>
  );
}
