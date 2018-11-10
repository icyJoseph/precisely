import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./containers/NavBar";
import Landing from "./containers/Landing";
import Contracts from "./containers/Contracts";
import Customers from "./containers/Customers";
import NoMatch from "./containers/NoMatch";

// NavBar renders when :page exists as a parameter
// Then only one of Landing, Contracts or Customers renders
export const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Route path="/:page" component={NavBar} />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/contracts" component={Contracts} />
        <Route exact path="/customers" component={Customers} />
        <Route component={NoMatch} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
