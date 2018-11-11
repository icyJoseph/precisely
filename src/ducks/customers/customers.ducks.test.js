import reducer, { initCustomers, deleteCustomer } from "./";

const content = [
  { id: "contract-a", name: "name", customerId: "a" },
  { id: "contract-b", name: "name b", customerId: "a" },
  { id: "contract-c", name: "name c", customerId: "a" }
];

describe("reducer", () => {
  const initialState = reducer(undefined, { type: "invalid" });
  it("returns empty object initially", () => {
    expect(initialState).toEqual({});
  });

  it("inits customers", () => {
    expect(
      reducer(undefined, initCustomers({ a: { id: "a", name: "name" } }))
    ).toEqual({ a: { id: "a", name: "name" } });
  });

  it("deletes customers", () => {
    const customers = {
      a: { id: "a", name: "name" },
      b: { id: "b", name: "name b" },
      c: { id: "c", name: "name c" }
    };

    expect(
      reducer(customers, { type: "CUSTOMERS DELETE CUSTOMER", payload: "a" })
    ).toEqual({
      b: { id: "b", name: "name b" },
      c: { id: "c", name: "name c" }
    });
  });

  it("dispatches contract deletion", () => {
    const dispatch = jest.fn();
    const actionCreator = deleteCustomer(dispatch);
    actionCreator("a", content);
    expect(dispatch).toBeCalledWith({
      type: "CONTRACTS DELETE CONTRACTS",
      payload: ["contract-a", "contract-b", "contract-c"]
    });
    expect(dispatch).toBeCalledWith({
      type: "CUSTOMERS DELETE CUSTOMER",
      payload: "a"
    });
    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
