import React from "react";
import { shallow } from "enzyme";
import { NavLink } from "react-router-dom";
import { NavBar } from "./";

describe("renders the NavBar container", () => {
  const nav = shallow(<NavBar />);
  const links = nav.find(NavLink);
  it("renders", () => {
    expect(nav).toBeDefined();
  });

  it("renders three links", () => {
    expect(links).toHaveLength(3);
    expect(links.at(0).prop("children")).toEqual("Precisely");
    expect(links.at(1).prop("children")).toEqual("Contracts");
    expect(links.at(2).prop("children")).toEqual("Customers");
  });

  it("toggles", () => {
    const state = nav.state("isOpen");
    nav
      .children()
      .at(1)
      .simulate("click");
    expect(nav.state("isOpen")).toEqual(!state);
  });
});
