import React from "react";
import styled from "styled-components";

export const ProposalMainInfo = () => {
  return (
    <div className="row justify-content-between align-items-center">
      <div className="col">
        <h6 className="text-500">Invoice to</h6>
        <h5>Antonio Banderas</h5>
        <p className="fs--1">
          1954 Bloor Street West
          <br />
          Torronto ON, M6P 3K9
          <br />
          Canada
        </p>
        <p className="fs--1">
          <a href="mailto:example@gmail.com">example@gmail.com</a>
          <br />
          <a href="tel:444466667777">+4444-6666-7777</a>
        </p>
      </div>
      <div className="col-sm-auto ml-auto">
        <div className="table-responsive">
          <table className="table table-sm table-borderless fs--1">
            <tbody>
              <tr>
                <th className="text-sm-right">Invoice No:</th>
                <td>14</td>
              </tr>
              <tr>
                <th className="text-sm-right">Order Number:</th>
                <td>AD20294</td>
              </tr>
              <tr>
                <th className="text-sm-right">Invoice Date:</th>
                <td>2018-09-25</td>
              </tr>
              <tr>
                <th className="text-sm-right">Payment Due:</th>
                <td>Upon receipt</td>
              </tr>
              <tr className="alert-success font-weight-bold">
                <th className="text-sm-right">Amount Due:</th>
                <td>$19688.40</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
