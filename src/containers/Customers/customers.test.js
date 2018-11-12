import React from "react";
import { shallow } from "enzyme";
import { Customers, SuspensefulConfirmation } from "./";
import Card from "../../components/Card";

import { customers, contracts } from "../../data";
import { arrayAsObjectById } from "../../utils";

const objCustomers = arrayAsObjectById(customers);
const objContracts = arrayAsObjectById(contracts);

describe("renders the contracts container", () => {
  const container = shallow(
    <Customers customers={objCustomers} contracts={objContracts} />
  );

  it("renders", () => {
    expect(container).toBeDefined();
  });

  it("does not show confirmation Modal initially", () => {
    expect(container.find(SuspensefulConfirmation)).toHaveLength(0);
  });

  it("changes Modal state when clicking a card", () => {
    const [{ id }] = customers;
    // get initial State
    const initialState = container.state();
    // call the action prop on Card
    container
      .find(Card)
      .at(0)
      .prop("action")();
    // get next state
    const nextState = container.state();
    // compare
    expect(initialState.showModal).toEqual(!nextState.showModal);
    // verify that the selectedCustomerId is now the expected id
    expect(nextState.selectedCustomerId).toEqual(id);
  });

  it("shows the confirmation modal", () => {
    expect(container.find(SuspensefulConfirmation)).toHaveLength(1);
  });

  it("closes the modal and clears the state", () => {
    container.find(SuspensefulConfirmation).prop("close")();
    const finalState = container.state();
    const {
      showModal,
      selectedCustomerId,
      selectedCustomerContracts
    } = finalState;
    expect(showModal).toEqual(false);
    expect(selectedCustomerId).toEqual("");
    expect(selectedCustomerContracts).toEqual([]);
  });
});
