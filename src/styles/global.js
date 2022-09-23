import { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: transparent;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: ${colors.gray5};
    color: ${colors.white};
  }

  button, svg {
    cursor: pointer;
  }
`;
