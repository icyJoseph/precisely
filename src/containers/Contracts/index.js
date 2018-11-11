import React from "react";
import Card from "../../components/Card";
import { content } from "../../constants";
import { partial } from "../../utils";

const tempAction = id => console.log("clicked ", id);

export function Contracts({ contracts, customers }) {
  return (
    <div>
      <h1 className="display-3">Contracts</h1>
      <div>
        {Object.keys(contracts).map(contractId => {
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
