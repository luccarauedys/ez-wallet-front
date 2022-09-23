import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Container = styled.form`
  display: grid;
  grid-template-areas:
    "f1 f1 f1 f1"
    "f2 f2 f3 f3"
    "f4 f4 bt bt";
  gap: 0.5rem;

  div {
    * {
      width: 100%;
    }
  }

  input,
  select,
  button {
    height: 2.5rem;
    padding: 0.6rem;
    border-radius: 6px;
  }

  input,
  select {
    background-color: ${colors.gray0};
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 500px) {
    grid-template-areas:
      "f1"
      "f2"
      "f3"
      "f4"
      "bt";

    button {
      margin-top: 0.8rem;
    }
  }
`;

export const Field1 = styled.div`
  grid-area: f1;
`;

export const Field2 = styled.div`
  grid-area: f2;
`;

export const Field3 = styled.div`
  grid-area: f3;
`;

export const Field4 = styled.div`
  grid-area: f4;
`;

export const Button = styled.button`
  grid-area: bt;
  min-width: 100px;
  align-self: flex-end;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  color: ${colors.white};
  background-color: ${colors.greenLight};
  transition: all ease 0.3s;

  :hover {
    background-color: ${colors.green};
  }

  :disabled {
    background-color: ${colors.gray2};
    cursor: not-allowed;
  }

  svg {
    cursor: not-allowed;
  }
`;
