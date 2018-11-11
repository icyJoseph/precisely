import React from "react";
import { shallow } from "enzyme";
import { Landing } from "./";
import ActionButton from "../../components/ActionButton";

import { customers, contracts } from "../../data";
import { arrayAsObjectById } from "../../utils";

const objCustomers = arrayAsObjectById(customers);
const objContracts = arrayAsObjectById(contracts);

describe("renders the landing container", () => {
  const landing = shallow(
    <Landing customers={objCustomers} contracts={objContracts} />
  );
  const buttons = landing.find(ActionButton);

  it("renders", () => {
    expect(landing).toBeDefined();
  });

  it("renders two ActionButtons", () => {
    expect(buttons).toHaveLength(2);
  });

  it("first button is for contracts", () => {
    expect(buttons.at(0).prop("text")).toEqual(
      `contracts (${contracts.length})`
    );
  });

  it("second button is for customers", () => {
    expect(buttons.at(1).prop("text")).toEqual(
      `customers (${customers.length})`
    );
  });
});
