import React from "react";
import { shallow } from "enzyme";
import { ActionButton } from "../ActionButton";
import Card from "./";
import { content } from "../../constants";

describe("Card component for text content", () => {
  const action = jest.fn();
  const component = shallow(
    <Card title="hi" subtitle="there" content="some text" action={action} />
  );
  it("renders", () => {
    expect(component).toBeDefined();
  });

  it("calls the action", () => {
    component.find(ActionButton).prop("callback")();
    expect(action).toHaveBeenCalled();
  });
});

describe("Card component for long text content", () => {
  const action = jest.fn();
  const component = shallow(
    <Card title="hi" subtitle="there" content={content} action={action} />
  );
  it("renders", () => {
    expect(component).toBeDefined();
  });

  it("calls the action", () => {
    component.find(ActionButton).prop("callback")();
    expect(action).toHaveBeenCalled();
  });
});

describe("Card component for list content", () => {
  const action = jest.fn();
  const content = [{ id: 0, text: "a" }, { id: 1, text: "b" }];
  const component = shallow(
    <Card title="hi" content={content} action={action} />
  );
  it("renders", () => {
    expect(component).toBeDefined();
  });

  it("calls the action", () => {
    component.find(ActionButton).prop("callback")();
    expect(action).toHaveBeenCalled();
  });
});
