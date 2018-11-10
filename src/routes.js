import React, { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Spinner from "./components/Spinner";

// Define lazy imports
const LazyNavBar = lazy(() =>
  import(/* webpackChunkName: "lazy-navbar" */ "./containers/NavBar")
);
const LazyLanding = lazy(() =>
  import(/* webpackChunkName: "lazy-landing" */ "./containers/Landing")
);
const LazyContracts = lazy(() =>
  import(/* webpackChunkName: "lazy-contracts" */ "./containers/Contracts")
);
const LazyCustomers = lazy(() =>
  import(/* webpackChunkName: "lazy-customers" */ "./containers/Customers")
);
const LazyNoMatch = lazy(() =>
  import(/* webpackChunkName: "lazy-nomatch" */ "./containers/NoMatch")
);

// Define suspenseful functions
function SuspenseNavBar(props) {
  return (
    <Suspense fallback={<Spinner />}>
      <LazyNavBar {...props} />
    </Suspense>
  );
}

function SuspenseLanding(props) {
  return (
    <Suspense fallback={<Spinner />}>
      <LazyLanding {...props} />
    </Suspense>
  );
}

function SuspenseContracts(props) {
  return (
    <Suspense fallback={<Spinner />}>
      <LazyContracts {...props} />
    </Suspense>
  );
}

function SuspenseCustomers(props) {
  return (
    <Suspense fallback={<Spinner />}>
      <LazyCustomers {...props} />
    </Suspense>
  );
}

function SuspenseNoMatch(props) {
  return (
    <Suspense fallback={<Spinner />}>
      <LazyNoMatch {...props} />
    </Suspense>
  );
}

// NavBar renders when :page exists as a parameter
// Then only one of Landing, Contracts or Customers renders
export const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Route path="/:page" component={SuspenseNavBar} />
      <Switch>
        <Route exact path="/" component={SuspenseLanding} />
        <Route exact path="/contracts" component={SuspenseContracts} />
        <Route exact path="/customers" component={SuspenseCustomers} />
        <Route component={SuspenseNoMatch} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
