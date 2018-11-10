import React from "react";
import { shallow } from "enzyme";
import withData from "./";
import { customers, contracts } from "../../data";
import { initCustomers } from "../../ducks/customers";
import { initContracts } from "../../ducks/contracts";
import { arrayAsObjectById } from "../../utils";

const objCustomers = arrayAsObjectById(customers);
const objContracts = arrayAsObjectById(contracts);

const ToyComponent = ({ customers, contracts }) => (
  <div>
    {Object.keys(customers).length} {Object.keys(contracts).length}
  </div>
);

describe("withData", () => {
  const Wrapper = withData(ToyComponent);

  const spyDispatch = jest.fn();
  const smoke = shallow(
    <Wrapper
      store={{
        dispatch: spyDispatch,
        subscribe: jest.fn(),
        getState: jest.fn(() => ({
          customers: objCustomers,
          contracts: objContracts
        }))
      }}
    />,
    { disableLifecycleMethods: false }
  );

  smoke.dive();

  it("returns a valid react element", () => {
    expect(React.isValidElement(<Wrapper />)).toBe(true);
  });

  it("calls the dispatch function twice!, with the data and types necessary", () => {
    expect(spyDispatch).toHaveBeenCalledTimes(2);
    expect(spyDispatch).toHaveBeenCalledWith(initCustomers(objCustomers));
    expect(spyDispatch).toHaveBeenCalledWith(initContracts(objContracts));
  });

  it("passes correct props to children", () => {
    const props = smoke.props();
    expect(props.customers).toEqual(objCustomers);
    expect(props.contracts).toEqual(objContracts);
    expect(smoke.render().text()).toEqual(
      `${customers.length} ${contracts.length}`
    );
  });
});
