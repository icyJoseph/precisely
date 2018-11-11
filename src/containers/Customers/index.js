import React from "react";
import Card from "../../components/Card";

import { partial } from "../../utils";

export function Customers({ contracts, customers, deleteCustomer }) {
  return (
    <div>
      <h1 className="display-3">Customers</h1>
      <div>
        {Object.keys(customers).map(customerId => {
          // get customer meta data
          const { name } = customers[customerId];
          // get all contracts as content of the card
          const content = Object.keys(contracts)
            .filter(
              contractId => contracts[contractId].customerId === customerId
            )
            .map(contractId => ({
              id: contractId,
              text: contracts[contractId].name
            }));

          // get all contract ids for the current customer
          return (
            <Card
              key={customerId}
              title={name}
              content={content}
              action={partial(deleteCustomer)(customerId, content)}
              actionName="Delete"
              buttonColor="danger"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Customers;
