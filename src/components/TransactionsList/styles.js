import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SearchField = styled.div`
  display: flex;
  gap: 0.5rem;

  input,
  button {
    flex: 1;
    padding: 0.8rem;
    border-radius: 6px;
  }

  input {
    background-color: ${colors.gray0};
  }

  button {
    font-weight: 600;
    color: ${colors.white};
    background-color: ${colors.greenLight};
    transition: all ease 0.3s;

    :last-child {
      background-color: transparent;
      border: 1px solid ${colors.green};
    }

    :hover {
      background-color: ${colors.green};
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${colors.gray0};
  }

  > div {
    display: flex;
    gap: 1rem;

    button {
      min-width: 100px;
      background-color: ${colors.greenLight};
      color: ${colors.white};
      font-weight: 600;
      padding: 0.8rem;
      border-radius: 6px;
      transition: all ease 0.4s;
      cursor: pointer;

      &:hover {
        background-color: ${colors.green};
      }
    }
  }

  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
`;
