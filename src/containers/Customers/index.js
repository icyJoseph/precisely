import React, { Component } from "react";
import Card from "../../components/Card";
import Confirmation from "../../components/Confirmation";
import { CUSTOMERS, DELETE } from "../../constants";
import { partial, toggleState } from "../../utils";

const initialState = {
  showModal: false,
  selectedCustomerId: "",
  selectedCustomerContracts: []
};

function toInitialState(initialState) {
  return this.setState({ ...initialState });
}

export class Customers extends Component {
  state = {
    ...initialState
  };

  toggle = toggleState.bind(this, "showModal");

  open = (selectedCustomerId, selectedCustomerContracts) =>
    this.setState({
      showModal: true,
      selectedCustomerId,
      selectedCustomerContracts
    });

  close = toInitialState.bind(this, initialState);

  render() {
    const { contracts, customers, deleteCustomer } = this.props;
    const {
      showModal,
      selectedCustomerId,
      selectedCustomerContracts
    } = this.state;

    const currentCustomer = selectedCustomerId && customers[selectedCustomerId];

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
            const customerContracts = Object.keys(contracts)
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
                content={customerContracts}
                action={partial(this.open)(customerId, customerContracts)}
                actionName="Delete"
                buttonColor="danger"
              />
            );
          })}
        </div>
        {showModal && (
          <Confirmation
            customer={currentCustomer}
            contracts={selectedCustomerContracts}
            showModal={showModal}
            action={deleteCustomer}
            actionPayload={[selectedCustomerId, selectedCustomerContracts]}
            toggle={this.toggle}
            close={this.close}
            afterAction={this.close}
            actionName={DELETE}
          />
        )}
      </div>
    );
  }
}

export default Customers;
