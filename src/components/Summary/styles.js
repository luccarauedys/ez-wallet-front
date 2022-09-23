import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: -100px;
  padding: 2rem;

  display: flex;
  justify-content: space-between;
  gap: 2rem;

  overflow-x: auto;
  position: fixed;
  z-index: 2;

  div:last-child {
    background-color: ${colors.greenLight};
    color: ${colors.white};

    h3 {
      font-weight: 600;
      color: ${colors.white};
    }
  }

  svg {
    cursor: initial;
  }
`;
