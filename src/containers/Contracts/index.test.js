import React from "react";
import { shallow } from "enzyme";
import { Contracts } from "./";

describe("renders the contracts container", () => {
  it("renders", () => {
    const landing = shallow(<Contracts />);
    expect(landing).toBeDefined();
  });
});
