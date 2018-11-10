import { goTo, partial, toggleState } from "./";

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
