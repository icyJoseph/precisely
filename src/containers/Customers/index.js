import React from "react";

export function Customers({ contracts, customers }) {
  return (
    <div>
      <h1 className="display-3">Customers</h1>
      <ul style={{ listStyle: "none" }}>
        {Object.keys(customers).map(id => (
          <li key={id}>{customers[id].name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Customers;
