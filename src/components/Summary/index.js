import React from "react";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard } from "../SummaryCard";
import { Container } from "./styles";
import { useTransactionsContext } from "../../contexts/transactionsContext";
import { formatPrice } from "../../utils/formatters";

export function Summary() {
  const { transactions } = useTransactionsContext();

  const deposits = transactions
    .filter((transaction) => transaction.type === "deposit")
    .reduce((total, { value }) => total + Number(value), 0);

  const withdraws = transactions
    .filter((transaction) => transaction.type === "withdraw")
    .reduce((total, { value }) => total + Number(value), 0);

  const balance = deposits - withdraws;

  return (
    <Container>
      <SummaryCard title="Entradas" value={formatPrice(deposits)}>
        <ArrowCircleUp size={30} color="#00b37e" />
      </SummaryCard>

      <SummaryCard title="Saídas" value={formatPrice(withdraws)}>
        <ArrowCircleDown size={30} color="#f75a68" />
      </SummaryCard>

      <SummaryCard title="TOTAL" value={formatPrice(balance)}>
        <CurrencyDollar size={30} color="#ffffff" />
      </SummaryCard>
    </Container>
  );
}
