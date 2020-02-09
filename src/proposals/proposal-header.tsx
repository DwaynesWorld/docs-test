import React from "react";
import styled from "styled-components";

const LOGO_URL =
  "https://prium.github.io/falcon/v2.3.1/default/assets/img/logos/logo-invoice.png";

export const ProposalHeader = () => {
  return (
    <Wrapper>
      <div className="company-logo-container">
        <img src={LOGO_URL} alt="Invoice" width="150" />
      </div>
      <div className="company-info-container">
        <h2>Invoice</h2>
        <h5>Falcon Design Studio</h5>
        <p>
          156 University Ave, Toronto
          <br />
          On, Canada, M5H 2H7
        </p>
      </div>
      <div className="break">
        <hr />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center !important;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem !important;
  text-align: center !important;

  .company-logo-container {
    flex: 0 0 50%;
    max-width: 50%;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    text-align: left !important;
    width: 100%;
  }

  .company-info-container {
    flex-basis: 0;
    flex-grow: 1;
    margin-top: 1rem !important;
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    text-align: right !important;
    width: 100%;

    h2 {
      margin-bottom: 10px;
      font-size: 32px;
    }

    h5 {
      margin-bottom: 5px;
      font-size: 19px;
    }

    p {
      font-size: 0.83333rem;
      margin: 0 !important;
      display: block;
      text-align: right !important;
    }
  }

  div.break {
    width: 100%;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;

    hr {
      margin-top: 1rem;
      margin-bottom: 1rem;
      border: 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }
  }
`;
