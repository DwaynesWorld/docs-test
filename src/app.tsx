import React from "react";
import styled from "styled-components";
import ProposalReview from "./proposals";
import "./app.css";

const App = () => {
  return (
    <Container>
      <SideMenu className="nav-menu">something</SideMenu>
      <ProposalReview />
      <SideMenu className="action-menu">something</SideMenu>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;

  &.nav-menu {
    width: 272px;
    border-right: 1px solid #edf2f9;
  }

  &.action-menu {
    width: 72px;
    border-left: 1px solid #edf2f9;
  }
`;

export default App;
