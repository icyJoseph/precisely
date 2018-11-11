// customers reducer

import { deleteContracts } from "../contracts";

// types
const STATE_NAME = "CUSTOMERS";
const INIT_CUSTOMERS = `${STATE_NAME} INIT`;
const DELETE_CUSTOMER = `${STATE_NAME} DELETE CUSTOMER`;

// actions
// init with customer data
export const initCustomers = payload => ({
  type: INIT_CUSTOMERS,
  payload
});

export const deleteCustomer = dispatch => (id, content) => {
  // When a customer is deleted,
  // All of the associated contracts, MUST also go!
  // That's why this action is bound there and not
  // in the container
  const payload = content.map(contract => contract.id);
  dispatch(deleteContracts(payload));
  return dispatch({
    type: DELETE_CUSTOMER,
    payload: id
  });
};

// reducer
function customers(state = {}, action) {
  switch (action.type) {
    case INIT_CUSTOMERS:
      return action.payload;
    case DELETE_CUSTOMER:
      // Select the id, to be omitted, and return the rest
      const { [action.payload]: omit, ...rest } = state;
      return { ...rest };
    default:
      return state;
  }
}

export default customers;
