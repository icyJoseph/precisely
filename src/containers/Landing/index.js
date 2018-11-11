import React from "react";

import ActionButton from "../../components/ActionButton";
import { MAIN_TITLE, routes } from "../../constants";
import { goTo, partial } from "../../utils";

// Container to be used as landing page
// Renders a welcome message
// Renders two buttons to navigate to Customers or Contracts
export function Landing({ history, ...props }) {
  return (
    <div className="landing">
      <div className="landing-title">
        <h1 className="display-3">{MAIN_TITLE}</h1>
      </div>
      <div className="landing-action-buttons">
        {routes.map(route => (
          <ActionButton
            key={route}
            callback={partial(goTo)(history, `/${route}`)}
            text={`${route} (${Object.keys(props[route]).length})`}
            className="spaced-button"
          />
        ))}
      </div>
    </div>
  );
}

export default Landing;
