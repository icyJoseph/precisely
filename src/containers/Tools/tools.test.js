import React from "react";
import { shallow } from "enzyme";
import { Button } from "reactstrap";
import { Tools } from "./";

describe("Tools", () => {
  const scrollMock = jest.fn();
  const add = jest.fn();
  const remove = jest.fn();

  const scrollToMock = function(a, b) {
    return scrollMock(a, b);
  };

  Object.defineProperty(window, "scrollTo", {
    value: scrollToMock
  });

  const addEventListenerMock = function(evt, callback) {
    return add(evt, callback);
  };

  Object.defineProperty(window, "addEventListener", {
    value: addEventListenerMock
  });

  const removeEventListenerMock = function(evt, callback) {
    return remove(evt, callback);
  };

  Object.defineProperty(window, "removeEventListener", {
    value: removeEventListenerMock
  });

  const tools = shallow(<Tools />, { disableLifecycleMethods: false });
  it("renders", () => {
    expect(tools).toBeDefined();
  });

  it("if show is false, does not show", () => {
    const show = tools.state("show");
    expect(tools.getElement()).toEqual(null);
    expect(show).toEqual(false);
  });

  it("adds listeners", () => {
    const instance = tools.instance().showButton;
    expect(add).toHaveBeenCalledWith("scroll", instance);
  });

  it("does shows a button if show true", () => {
    tools.setState({ show: true });
    expect(tools.find(Button)).toHaveLength(1);
  });

  it("does scrolls to top on click", () => {
    tools.find(Button).simulate("click");
    expect(scrollMock).toHaveBeenCalledWith(0, 0);
  });

  it("removes listeners", () => {
    const instance = tools.instance().showButton;
    tools.instance().componentWillUnmount();
    expect(add).toHaveBeenCalledWith("scroll", instance);
  });
});
