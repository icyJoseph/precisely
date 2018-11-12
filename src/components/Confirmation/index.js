import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ActionButton from "../ActionButton";
import { CANCEL } from "../../constants";
import { partial, sequence } from "../../utils";

// Component used to confirm applying an action on a customer and its contracts
// action is triggered with actionPayload as arguments
// upon clicking the first action button -> confirmation button
export function Confirmation({
  customer,
  contracts,
  showModal,
  action,
  actionPayload,
  toggle,
  close,
  actionName,
  afterAction
}) {
  // preload the confirmation action with customerId and customerContracts
  const actionLoadedWithPayload = partial(action)(...actionPayload);
  // create a sequence of functions, which will execute one after the other
  const callSequence = partial(sequence)(actionLoadedWithPayload, afterAction);
  // get the count of items to execute the action on
  const items = contracts.length;
  // get the name of the affected customer
  const { name } = customer;

  return (
    <Modal centered isOpen={showModal} toggle={toggle}>
      <ModalHeader>
        Confirm: {actionName} {items} {items === 1 ? "contract" : "contracts"}
      </ModalHeader>
      <ModalBody>
        This action affects customer: <p className="lead text-danger">{name}</p>
      </ModalBody>
      <ModalFooter>
        {/* Confirmation Button */}
        <ActionButton
          color="danger"
          callback={callSequence}
          text={actionName}
        />
        {/* Cancel Button */}
        <ActionButton color="secondary" callback={close} text={CANCEL} />
      </ModalFooter>
    </Modal>
  );
}

export default Confirmation;
