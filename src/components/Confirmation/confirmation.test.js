import React from "react";
import { shallow } from "enzyme";
import { Confirmation } from "./";
import ActionButton from "../ActionButton";

describe("Confirmation", () => {
  const contracts = [
    { id: "c1", customerId: "customer", name: "h" },
    { id: "c1", customerId: "customer", name: "h" }
  ];
  const props = {
    customer: { name: "hi", id: "customer" },
    contracts,
    showModal: true,
    actionPayload: ["a", contracts],
    actionName: "name",
    action: jest.fn(),
    toggle: jest.fn(),
    close: jest.fn(),
    afterAction: jest.fn()
  };

  const modal = shallow(<Confirmation {...props} />);
  it("renders", () => {
    expect(modal).toBeDefined();
  });

  it("calls the action", () => {
    modal
      .find(ActionButton)
      .at(0)
      .prop("callback")();
    expect(props.action).toHaveBeenCalled();
    expect(props.afterAction).toHaveBeenCalled();
  });

  it("calls to close", () => {
    modal
      .find(ActionButton)
      .at(1)
      .prop("callback")();
    expect(props.close).toHaveBeenCalled();
  });
});
