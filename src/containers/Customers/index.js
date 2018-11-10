import React from "react";

export function Customers({ contracts, customers }) {
  return (
    <div>
      <h1 className="display-3">Customers</h1>
      <ul style={{ listStyle: "none" }}>
        {customers.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Customers;
