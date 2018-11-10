import customers from "./customers";
import contracts from "./contracts";

// Both data objects are Arrays,
// which is common in data coming from API's
// however it is not the most optimal when manipulating data
// for a redux store
// Ideally, this data should come formatted as an Object, which allows us to
// modify and delete more easily
export { customers, contracts };
