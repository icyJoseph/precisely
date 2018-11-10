import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./containers/Landing";
import Contracts from "./containers/Contracts";
import Customers from "./containers/Customers";
import NoMatch from "./containers/NoMatch";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/contracts/:id" component={Contracts} />
      <Route exact path="/customers/:id" component={Customers} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
