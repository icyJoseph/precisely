import React from "react";
import { shallow } from "enzyme";
import { NoMatch } from "./";

describe("renders the landing container", () => {
  const landing = shallow(<NoMatch />);
  it("renders", () => {
    expect(landing).toBeDefined();
  });

  it("displays the correct message", () => {
    const message = landing.text();
    expect(message).toEqual("404 Not Found!");
  });
});
