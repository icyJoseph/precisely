import React from "react";
import { shallow } from "enzyme";
import { Contracts } from "./";

import { customers, contracts } from "../../data";
import { arrayAsObjectById } from "../../utils";

const objCustomers = arrayAsObjectById(customers);
const objContracts = arrayAsObjectById(contracts);

describe("renders the contracts container", () => {
  it("renders", () => {
    const container = shallow(
      <Contracts customers={objCustomers} contracts={objContracts} />
    );
    expect(container).toBeDefined();
  });
});
