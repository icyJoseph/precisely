import React from "react";

export function Contracts({ contracts, customers }) {
  return (
    <div>
      <h1 className="display-3">Contracts</h1>
      <ul style={{ listStyle: "none" }}>
        {Object.keys(contracts).map(id => (
          <li key={id}>{contracts[id].name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Contracts;
