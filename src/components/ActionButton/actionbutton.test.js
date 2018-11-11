import React from "react";
import { shallow } from "enzyme";
import ActionButton from "../ActionButton";

describe("Action button", () => {
  const action = jest.fn();
  const component = shallow(<ActionButton text="text" callback={action} />);
  it("renders", () => {
    expect(component).toBeDefined();
  });

  it("calls the action", () => {
    component.simulate("click");
    expect(action).toHaveBeenCalled();
  });
});
