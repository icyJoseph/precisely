import React from "react";
import { shallow } from "enzyme";
import {
  Routes,
  SuspenseNavBar,
  SuspenseLanding,
  SuspenseContracts,
  SuspenseCustomers,
  SuspenseNoMatch,
  SuspenseTools
} from "../routes";

describe("Routes", () => {
  it("is defined", () => {
    expect(shallow(<Routes />)).toBeDefined();
  });
  it("is a valid react element", () => {
    expect(React.isValidElement(<Routes />)).toBe(true);
  });
});

describe("Suspense", () => {
  it("renders NavBar", () => {
    const wrapper = shallow(<SuspenseNavBar />);
    expect(wrapper).toBeDefined();
  });
  it("renders Landing", () => {
    const wrapper = shallow(<SuspenseLanding />);
    expect(wrapper).toBeDefined();
  });
  it("renders Contracts", () => {
    const wrapper = shallow(<SuspenseContracts />);
    expect(wrapper).toBeDefined();
  });
  it("renders Customers", () => {
    const wrapper = shallow(<SuspenseCustomers />);
    expect(wrapper).toBeDefined();
  });
  it("renders NoMatch", () => {
    const wrapper = shallow(<SuspenseNoMatch />);
    expect(wrapper).toBeDefined();
  });
  it("renders NoMatch", () => {
    const wrapper = shallow(<SuspenseTools />);
    expect(wrapper).toBeDefined();
  });
});
