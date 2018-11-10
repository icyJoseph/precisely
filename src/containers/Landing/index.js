import React from "react";
import { LinkButton } from "../../components/LinkButton";
import { routes } from "../../constants";
import { goTo, partial } from "../../utils";

// Container to be used as landing page
// Renders a welcome message
// Renders two buttons to navigate to Customers or Contracts
export function Landing({ history }) {
  return (
    <div>
      <h1 className="display-3">Landing</h1>
      {routes.slice(1).map(route => (
        <LinkButton
          key={route}
          callback={partial(goTo)(history, `/${route}`)}
          text={route}
        />
      ))}
    </div>
  );
}

export default Landing;
