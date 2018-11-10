import React from "react";
import { shallow } from "enzyme";
import { Landing } from "./";

describe("renders the landing container", () => {
  it("renders", () => {
    const landing = shallow(<Landing />);
    expect(landing).toBeDefined();
  });
});
