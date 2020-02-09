import React from "react";
import styled from "styled-components";
import { ProposalHeader } from "./proposal-header";
import { ProposalMainInfo } from "./proposal-maininfo";
import { ProposalItems } from "./proposal-items";
import { ProposalNotes } from "./proposal-notes";

const d = () => {
  return (
    <ProposalContentWrapper>
      <WellContent className="left"></WellContent>

      <Proposal className="main-content">
        <ProposalHeader />
        <ProposalMainInfo />
        <ProposalItems />
        <ProposalNotes />
      </Proposal>

      <WellContent className="right"></WellContent>
    </ProposalContentWrapper>
  );
};

const ProposalContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px;
  width: 100%;
  overflow: auto;
`;

const WellContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  min-width: 100px;
`;

const Proposal = styled.div`
  background-color: #fff;
  border-radius: 12px;
  border: 0 solid #edf2f9;
  box-shadow: 0 7px 14px 0 rgba(65, 69, 88, 0.1),
    0 3px 6px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  min-width: 900px;
  position: relative;
  padding: 1.25rem;
  flex: 1 1 auto;
`;

export default d;
