import {
  goTo,
  partial,
  toggleState,
  arrayAsObjectById,
  useToggleOnScroll,
  sequence
} from "./";

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

describe("useToggleOnScroll", () => {
  const key = "val";

  it("does not call the toggle under the limit with key false", () => {
    Object.defineProperty(window, "scrollY", {
      value: 98,
      configurable: true,
      writable: true
    });

    const toggle = jest.fn();

    const ctx = {
      state: { [key]: false },
      toggle
    };

    const fn = useToggleOnScroll.bind(ctx, key);
    fn();

    expect(toggle).toHaveBeenCalledTimes(0);
  });

  it("calls the toggle under the limit with key false", () => {
    Object.defineProperty(window, "scrollY", {
      value: 98,
      configurable: true,
      writable: true
    });
    const toggle = jest.fn();

    const ctx = {
      state: { [key]: true },
      toggle
    };
    const fn = useToggleOnScroll.bind(ctx, key);
    fn();

    expect(toggle).toHaveBeenCalledTimes(1);
  });

  it("does not call the toggle above the limit with key true", () => {
    Object.defineProperty(window, "scrollY", {
      value: 102,
      configurable: true,
      writable: true
    });
    const toggle = jest.fn();

    const ctx = {
      state: { [key]: true },
      toggle
    };
    const fn = useToggleOnScroll.bind(ctx, key);
    fn();

    expect(toggle).toHaveBeenCalledTimes(0);
  });

  it("calls the toggle above the limit with key false", () => {
    Object.defineProperty(window, "scrollY", {
      value: 102,
      configurable: true,
      writable: true
    });
    const toggle = jest.fn();

    const ctx = {
      state: { [key]: false },
      toggle
    };
    const fn = useToggleOnScroll.bind(ctx, key);
    fn();

    expect(toggle).toHaveBeenCalledTimes(1);
  });
});

describe("sequence", () => {
  const fn = jest.fn();
  const fns = Array.from({ length: 10 }, () => fn);
  sequence(...fns);
  it("called all functions once", () => {
    expect(fn).toHaveBeenCalledTimes(10);
  });
});
