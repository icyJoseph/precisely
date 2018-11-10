// rootReducer
import { combineReducers } from "redux";
import customers from "./customers";
import contracts from "./contracts";

const rootReducer = combineReducers({
  customers,
  contracts
});

export default rootReducer;
