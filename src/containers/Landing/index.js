import React from "react";
import { Button } from "reactstrap";

import { routes } from "../../constants";
import { partial } from "../../utils";

const goTo = (history, route) => history.push(route);

function LinkButton({ callback, text }) {
  return (
    <Button color="primary" onClick={callback}>
      {text}
    </Button>
  );
}

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
