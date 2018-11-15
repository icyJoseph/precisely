import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { initContracts } from "../../ducks/contracts";
import { initCustomers, deleteCustomer } from "../../ducks/customers";
import { customers, contracts } from "../../data";
import { arrayAsObjectById } from "../../utils";

// HOC which ensures that its children, have access to
// customer and contract data
function withData(toRender) {
  class WithDataHoC extends Component {
    // first we define props types
    static propTypes = {
      initContracts: PropTypes.func,
      initCustomers: PropTypes.func,
      contracts: PropTypes.object,
      customers: PropTypes.object
    };

    componentDidMount() {
      // On mount we fire actions to populate the redux-store
      // these could be network requests
      // Normally one would check for expiry dates on these data pieces

      // Assumption 1: for this challenge, we fetch once and that's it!
      // The withData HOC wraps the Routes and not each container
      // as it was done in commit: f19a3f4e93bc3b15a73b63ec9173270665b9dd0e

      // The Routes are in charge of spreading the relevant props down the line.

      // Assumption 2: In this case I've setup the data as arrays,
      // however, for sake of showing understanding of object vs array handling
      // I convert the arrays to objects.

      // Additionally, in a case where the platform has thousands of contracts,
      // finding them by Id on array will take more time and be more complicated
      // than if we were to use plain JavaScript objects.

      // The transformation for thousands of objects will also take time, but only once.
      // Ideally it should be done elsewhere (backend), but if the API has taken us to the point
      // where there is no other option, we can do it here.

      const A = performance.now();
      const contractsAsObject = arrayAsObjectById(contracts);
      const customersAsObject = arrayAsObjectById(customers);
      console.log(
        `Migrated arrays to objects in ${(performance.now() - A) /
          1000} seconds`
      );

      this.props.initContracts(contractsAsObject);
      this.props.initCustomers(customersAsObject);
    }

    render() {
      // we then render the child, passing down props
      // if we had an state to pass, we could pass it here too
      return toRender({ ...this.props });
    }
  }

  // from the redux-state, take contracts and customers
  const mapStateToProps = ({ contracts, customers }) => ({
    contracts,
    customers
  });

  // allow dispatch of these two actions
  const mapDispatchToProps = dispatch => ({
    initContracts: args => dispatch(initContracts(args)),
    initCustomers: args => dispatch(initCustomers(args)),
    deleteCustomer: deleteCustomer(dispatch)
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithDataHoC);
}

export default withData;
