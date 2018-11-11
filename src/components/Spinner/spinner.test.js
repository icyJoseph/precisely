import React from "react";
import { shallow } from "enzyme";
import { Spinner } from "./";

describe("Spinner component", () => {
  it("is valid react", () => {
    expect(React.isValidElement(<Spinner />)).toBe(true);
  });
  const component = shallow(<Spinner />);
  it("renders", () => {
    expect(component).toBeDefined();
  });
});
