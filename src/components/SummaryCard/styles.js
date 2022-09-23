import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Container = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: ${colors.gray3};
  color: ${colors.white};

  p {
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;

  h3 {
    font-weight: 500;
    color: ${colors.gray2};
  }
`;
