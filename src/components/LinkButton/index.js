import React from "react";
import { Button } from "reactstrap";

export function LinkButton({ callback, text }) {
  return (
    <Button color="primary" onClick={callback}>
      {text}
    </Button>
  );
}
export default LinkButton;
