// customers reducer

// types
const STATE_NAME = "CUSTOMERS";
const INIT_CUSTOMERS = `${STATE_NAME} INIT`;

// actions
// init with customer data
export const initCustomers = payload => ({
  type: INIT_CUSTOMERS,
  payload
});

// reducer
function customers(state = [], action) {
  switch (action.type) {
    case INIT_CUSTOMERS:
      return action.payload;
    default:
      return state;
  }
}

export default customers;
