import React from "react";
import { shallow } from "enzyme";
import { Landing } from "./";
import { LinkButton } from "../../components/LinkButton";

describe("renders the landing container", () => {
  const landing = shallow(<Landing />);
  const buttons = landing.find(LinkButton);

  it("renders", () => {
    expect(landing).toBeDefined();
  });

  it("renders two LinkButtons", () => {
    expect(buttons).toHaveLength(2);
  });

  it("first button is for contracts", () => {
    expect(buttons.at(0).prop("text")).toEqual("contracts");
  });

  it("second button is for customers", () => {
    expect(buttons.at(1).prop("text")).toEqual("customers");
  });
});
