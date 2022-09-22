import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.gray4};
  color: ${colors.gray0};

  > div {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;

    display: grid;
    place-content: center;
    justify-items: center;
    gap: 1rem;

    img {
      width: 100%;
      max-width: 100px;
    }

    h1 {
      max-width: 300px;
      text-align: center;
      font-size: 1.25rem;
      font-weight: 700;
    }

    @media (min-width: 800px) {
      img {
        max-width: 150px;
      }

      h1 {
        font-size: 1.4rem;
      }
    }
  }
`;

export const FormContainer = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-weight: 400;
  }

  input {
    width: 100%;
    display: block;
    padding: 0.5rem;
    border-radius: 0.4rem;
    margin-top: 0.5rem;
    color: ${colors.black};
    background-color: ${colors.gray0};
    font-weight: 500;
  }

  p.error {
    color: ${colors.red};
    margin-top: 0.25rem;
  }

  button {
    padding: 0.6rem;
    margin: 1rem 0;
    border-radius: 0.4rem;
    font-weight: 500;
    color: ${colors.white};
    background-color: ${colors.green};
    transition: all ease 0.3s;

    :hover {
      background-color: ${colors.greenLight};
    }
  }

  a {
    align-self: center;
    font-weight: 500;
    color: ${colors.gray1};
    transition: all ease 0.3s;

    :hover {
      color: ${colors.gray0};
    }
  }

  @media (min-width: 800px) {
    width: 500px;

    input,
    button {
      padding: 0.8rem;
    }
  }
`;
