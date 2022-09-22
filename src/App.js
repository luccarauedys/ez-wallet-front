import { UserProvider } from "./contexts/userContext";
import { GlobalStyle } from "./styles/global";
import { AppRouter } from "./routes";

export function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <AppRouter />
    </UserProvider>
  );
}
