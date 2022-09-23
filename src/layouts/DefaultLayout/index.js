import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

const Container = styled.main`
  width: 100%;
  padding-top: 280px;
`;
