import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Container = styled.header`
  width: 100%;
  height: 200px;
  color: ${colors.white};
  background-color: ${colors.gray6};
  position: fixed;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: flex;
  justify-content: space-between;

  button {
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
    font-weight: 600;
    color: ${colors.white};
    background-color: ${colors.red};
    transition: all ease 0.3s;
    cursor: pointer;

    :hover {
      background-color: ${colors.redDark};
    }
  }
`;

export const Logo = styled.h1`
  font-size: 2.2rem;
  font-weight: 900;
  color: $white;
  cursor: pointer;

  span {
    font-size: 2.2rem;
    font-weight: 900;
    color: ${colors.greenLight};
    cursor: pointer;
  }
`;

export const SummaryContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 60px;
`;
