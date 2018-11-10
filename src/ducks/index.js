// Only here for initial setup

const STATE_NAME = "CONTRACTS";
const INIT_CONTRACTS = `${STATE_NAME} INIT`;

export const initContracts = payload => ({
  type: INIT_CONTRACTS,
  payload
});

function contracts(state = [], action) {
  switch (action.type) {
    case INIT_CONTRACTS:
      return action.payload;
    default:
      return state;
  }
}

export default contracts;
