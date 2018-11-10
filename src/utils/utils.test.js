import { goTo, partial, toggleState, arrayAsObjectById } from "./";

describe("toggleState", () => {
  const ctx = {
    state: { test: false },
    setState(fn) {
      const prev = this.state;
      const newState = fn(prev);
      this.state = { ...prev, ...newState };
    }
  };

  it("toggles", () => {
    const prev = ctx.state.test;
    toggleState.bind(ctx, "test")();
    expect(ctx.state.test).toEqual(!prev);
  });
});

describe("partial", () => {
  const add = (a, b) => a + b;
  it("redefine a new function, which makes use of add", () => {
    const add3 = partial(add)(3);
    expect(add3(4)).toEqual(7);
  });
});

describe("goTo", () => {
  const history = { push: jest.fn() };
  const route = "/home";
  it("calls push with the route", () => {
    goTo(history, route);
    expect(history.push).toHaveBeenCalledWith(route);
  });
});

describe("arrayAsObjectById", () => {
  const arr = [{ id: 0, name: "a" }, { id: 1, name: "b" }];
  it("regroups by using id", () => {
    expect(arrayAsObjectById(arr)).toEqual({
      0: { id: 0, name: "a" },
      1: { id: 1, name: "b" }
    });
  });
});
