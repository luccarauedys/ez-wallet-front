import { TransactionsProvider } from "./contexts/transactionsContext";
import { GlobalStyle } from "./styles/global";
import { AppRouter } from "./routes";

export function App() {
  return (
    <TransactionsProvider>
      <GlobalStyle />
      <AppRouter />
    </TransactionsProvider>
  );
}
