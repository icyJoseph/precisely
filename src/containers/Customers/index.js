import React from "react";
import Card from "../../components/Card";

import { partial } from "../../utils";

const tempAction = id => console.log("clicked ", id);

export function Customers({ contracts, customers }) {
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

          return (
            <Card
              key={customerId}
              title={name}
              content={content}
              action={partial(tempAction)(customerId)}
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
