// contracts

// types
const STATE_NAME = "CONTRACTS";
const INIT_CONTRACTS = `${STATE_NAME} INIT`;
const DELETE_CONTRACTS = `${STATE_NAME} DELETE CONTRACTS`;

// actions
// set contracts on redux store
export const initContracts = payload => ({
  type: INIT_CONTRACTS,
  payload
});

export const deleteContracts = payload => ({
  type: DELETE_CONTRACTS,
  payload
});

// reducer
function contracts(state = {}, action) {
  switch (action.type) {
    case INIT_CONTRACTS:
      return action.payload;
    case DELETE_CONTRACTS:
      // get the Ids
      const contractIds = action.payload;
      // reducer over the Ids, by omitting the id every round, and returning what's left
      // in the end, we get only the valid contracts
      return contractIds.reduce((prev, curr) => {
        const { [curr]: omit, ...rest } = prev;
        return { ...rest };
      }, state);
    default:
      return state;
  }
}

export default contracts;
