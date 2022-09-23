import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard } from "../SummaryCard";
import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <SummaryCard title="Entradas" value="17.400,00">
        <ArrowCircleUp size={30} color="#00b37e" />
      </SummaryCard>

      <SummaryCard title="Saídas" value="400,00">
        <ArrowCircleDown size={30} color="#f75a68" />
      </SummaryCard>

      <SummaryCard title="TOTAL" value="17.000,00">
        <CurrencyDollar size={30} color="#ffffff" />
      </SummaryCard>
    </Container>
  );
}
