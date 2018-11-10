// contracts

// types
const STATE_NAME = "CONTRACTS";
const INIT_CONTRACTS = `${STATE_NAME} INIT`;

// actions
// set contracts on redux store
export const initContracts = payload => ({
  type: INIT_CONTRACTS,
  payload
});

// reducer
function contracts(state = [], action) {
  switch (action.type) {
    case INIT_CONTRACTS:
      return action.payload;
    default:
      return state;
  }
}

export default contracts;
