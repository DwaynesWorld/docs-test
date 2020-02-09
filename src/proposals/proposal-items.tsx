import React from "react";
import styled from "styled-components";

export const ProposalItems = () => {
  return (
    <Wrapper>
      <div className="table-responsive mt-4 fs--1">
        <table className="table">
          <thead>
            <tr className="bg-primary text-white">
              <th className="border-0">Products</th>
              <th className="border-0 text-center">Quantity</th>
              <th className="border-0 text-right">Rate</th>
              <th className="border-0 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => alert("something")}>
              <td className="align-middle">
                <h6 className="mb-0 text-nowrap">
                  Platinum web hosting package
                </h6>
                <p className="mb-0">Down 35mb, Up 100mb</p>
              </td>
              <td className="align-middle text-center">2</td>
              <td className="align-middle text-right">$65.00</td>
              <td className="align-middle text-right">$130.00</td>
            </tr>
            <tr>
              <td className="align-middle">
                <h6 className="mb-0 text-nowrap">2 Page website design</h6>
                <p className="mb-0">
                  Includes basic wireframes and responsive templates
                </p>
              </td>
              <td className="align-middle text-center">1</td>
              <td className="align-middle text-right">$2,100.00</td>
              <td className="align-middle text-right">$2,100.00</td>
            </tr>
            <tr>
              <td className="align-middle">
                <h6 className="mb-0 text-nowrap">Mobile App Development</h6>
                <p className="mb-0">Includes responsive navigation</p>
              </td>
              <td className="align-middle text-center">8</td>
              <td className="align-middle text-right">$5,00.00</td>
              <td className="align-middle text-right">$4,000.00</td>
            </tr>
            <tr>
              <td className="align-middle">
                <h6 className="mb-0 text-nowrap">Web App Development</h6>
                <p className="mb-0">Includes react spa</p>
              </td>
              <td className="align-middle text-center">6</td>
              <td className="align-middle text-right">$2,000.00</td>
              <td className="align-middle text-right">$12,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  tbody {
    tr {
      /* border-top: 1px solid #edf2f9; */

      :hover {
        border-top: 1px dashed blue !important;
        border-bottom: 1px dashed blue !important;
        border-left: 1px dashed blue !important;
        border-right: 1px dashed blue !important;
        background-color: #d5eef5 !important;
      }
    }
  }

  .table td,
  .table th {
    border-top: 0px solid transparent;
  }
`;
