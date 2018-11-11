import React from "react";
import Card from "../../components/Card";
import { CUSTOMERS } from "../../constants";
import { partial } from "../../utils";

export function Customers({ contracts, customers, deleteCustomer }) {
  const customersIds = Object.keys(customers);
  return (
    <div>
      <h1 className="display-3">
        {CUSTOMERS} {`(${customersIds.length})`}
      </h1>
      <div className="card-grid">
        {customersIds.map(customerId => {
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
