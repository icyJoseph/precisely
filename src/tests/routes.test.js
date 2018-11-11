import React from "react";
import { shallow } from "enzyme";
import { Routes } from "../routes";

describe("Routes", () => {
  it("is defined", () => {
    expect(shallow(<Routes />)).toBeDefined();
  });
  it("is a valid react element", () => {
    expect(React.isValidElement(<Routes />)).toBe(true);
  });
});
