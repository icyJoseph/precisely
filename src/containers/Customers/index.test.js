import React from "react";
import { shallow } from "enzyme";
import { Customers } from "./";

describe("renders the contracts container", () => {
  it("renders", () => {
    const landing = shallow(<Customers />);
    expect(landing).toBeDefined();
  });
});
