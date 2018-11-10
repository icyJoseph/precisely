import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { initContracts } from "../../ducks/contracts";
import { initCustomers } from "../../ducks/customers";
import { customers, contracts } from "../../data";

// HOC which ensures that its children, have access to
// customer and contract data
function withData(toRender) {
  class WithDataHoC extends Component {
    // first we define props types
    static propTypes = {
      initContracts: PropTypes.func,
      initCustomers: PropTypes.func,
      contracts: PropTypes.array,
      customers: PropTypes.array
    };

    componentDidMount() {
      // on mount we fire actions to populate the redux-store
      // these could be network requests
      this.props.initContracts(contracts);
      this.props.initCustomers(customers);
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
  const mapDispatchToProps = {
    initContracts,
    initCustomers
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithDataHoC);
}

export default withData;
