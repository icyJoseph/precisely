import React from "react";

import withData from "../WithData";

export function Customers() {
  return <h1 className="display-3">Customers</h1>;
}

export default withData(Customers);
