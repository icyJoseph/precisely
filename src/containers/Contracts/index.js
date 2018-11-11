import React from "react";
import Card from "../../components/Card";
import { content, CONTRACTS } from "../../constants";
import { partial } from "../../utils";

const tempAction = id => console.log("clicked ", id);

export function Contracts({ contracts, customers }) {
  const contractIds = Object.keys(contracts);
  return (
    <div>
      <h1 className="display-3">
        {CONTRACTS} {`(${contractIds.length})`}
      </h1>
      <div className="card-grid">
        {contractIds.map(contractId => {
          // get the meta data of the contract
          const { name, customerId } = contracts[contractId];
          const customer = customers[customerId].name;
          const subtitle = `Made for ${customer}`;
          return (
            <Card
              key={contractId}
              title={name}
              subtitle={subtitle}
              content={content}
              action={partial(tempAction)(contractId)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Contracts;
