import { toggleState } from "./";

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
