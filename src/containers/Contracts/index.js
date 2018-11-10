import React from "react";

import withData from "../WithData";

export function Contracts({ contracts, customers }) {
  return (
    <div>
      <h1 className="display-3">Contracts</h1>
      <ul style={{ listStyle: "none" }}>
        {contracts.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default withData(Contracts);
