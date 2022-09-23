import { useNavigate } from "react-router-dom";
import { Container, HeaderContainer, Logo, SummaryContainer } from "./styles";
import { Summary } from "../Summary";

export function Header() {
  const navigate = useNavigate();

  const signUserOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Container>
      <HeaderContainer>
        <Logo>
          <span>EZ</span> Wallet
        </Logo>
        <button onClick={signUserOut}>Sair da conta</button>
      </HeaderContainer>

      <SummaryContainer>
        <Summary />
      </SummaryContainer>
    </Container>
  );
}
