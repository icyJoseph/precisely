import reducer, { initContracts, deleteContracts } from "./";

describe("reducer", () => {
  const initialState = reducer(undefined, { type: "invalid" });
  it("returns empty object initially", () => {
    expect(initialState).toEqual({});
  });

  it("inits contracts", () => {
    expect(
      reducer(
        undefined,
        initContracts({ a: { id: "a", name: "name", customerId: "cId" } })
      )
    ).toEqual({ a: { id: "a", name: "name", customerId: "cId" } });
  });

  it("deletes contracts", () => {
    const contracts = {
      a: { id: "a", name: "name", customerId: "cId" },
      b: { id: "b", name: "name b", customerId: "cId-b" },
      c: { id: "c", name: "name c", customerId: "cId-c" }
    };
    expect(reducer(contracts, deleteContracts(["a", "b"]))).toEqual({
      c: { id: "c", name: "name c", customerId: "cId-c" }
    });
  });
});
