import styled from "styled-components";
import { colors } from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 2rem;
  border-radius: 8px;
  border-left: 5px solid ${(props) => props.borderLeftColor};

  background-color: ${colors.gray3};
  color: ${colors.white};

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
  }

  p {
    color: ${colors.gray1};
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 1.1rem;
    font-weight: 500;
  }

  svg {
    transition: all ease 0.4s;
    cursor: pointer;

    &:hover {
      filter: brightness(80%);
    }
  }

  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;
