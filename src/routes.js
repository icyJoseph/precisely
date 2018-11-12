import React, { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import withData from "./containers/WithData";
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
const LazyTools = lazy(() =>
  import(/* webpackChunkName: "lazy-tools" */ "./containers/Tools")
);

// Define suspenseful functions
export function SuspenseNavBar(props) {
  return (
    <Suspense fallback={<Spinner />}>
      <LazyNavBar {...props} />
    </Suspense>
  );
}

export function SuspenseLanding(props) {
  return (
    <Suspense fallback={<Spinner />}>
      <LazyLanding {...props} />
    </Suspense>
  );
}

export function SuspenseContracts(props) {
  return (
    <Suspense fallback={<Spinner />}>
      <LazyContracts {...props} />
    </Suspense>
  );
}

export function SuspenseCustomers(props) {
  return (
    <Suspense fallback={<Spinner />}>
      <LazyCustomers {...props} />
    </Suspense>
  );
}

export function SuspenseNoMatch(props) {
  return (
    <Suspense fallback={<Spinner />}>
      <LazyNoMatch {...props} />
    </Suspense>
  );
}

export function SuspenseTools(props) {
  return (
    <Suspense fallback={<Spinner />}>
      <LazyTools {...props} />
    </Suspense>
  );
}

// NavBar renders when :page exists as a parameter
// Then only one of Landing, Contracts or Customers renders
// dataProps represents data passed from the withData HoC
export const Routes = dataProps => (
  <BrowserRouter>
    <Fragment>
      <Route
        path="/:page"
        render={props => <SuspenseNavBar {...props} {...dataProps} />}
      />
      <Route path="/:page?" component={SuspenseTools} />
      <Switch>
        <Route
          exact
          path="/"
          render={props => <SuspenseLanding {...props} {...dataProps} />}
        />
        <Route
          exact
          path="/contracts"
          render={props => <SuspenseContracts {...props} {...dataProps} />}
        />
        <Route
          exact
          path="/customers"
          render={props => <SuspenseCustomers {...props} {...dataProps} />}
        />
        <Route component={SuspenseNoMatch} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default withData(Routes);
