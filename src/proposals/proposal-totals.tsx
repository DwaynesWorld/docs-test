import React from "react";
import styled from "styled-components";

export const ProposalTotals = () => {
  return (
    <div className="row no-gutters justify-content-end">
      <div className="col-auto">
        <table className="table table-sm table-borderless fs--1 text-right">
          <tbody>
            <tr>
              <th className="text-900">Subtotal:</th>
              <td className="font-weight-semi-bold">$18,230.00 </td>
            </tr>
            <tr>
              <th className="text-900">Tax 8%:</th>
              <td className="font-weight-semi-bold">$1458.40</td>
            </tr>
            <tr className="border-top">
              <th className="text-900">Total:</th>
              <td className="font-weight-semi-bold">$19688.40</td>
            </tr>
            <tr className="border-top border-2x font-weight-bold text-900">
              <th>Amount Due:</th>
              <td>$19688.40</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
