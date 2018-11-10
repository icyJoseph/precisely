import React from "react";
import { Button } from "reactstrap";

export function LinkButton({ color = "primary", callback, text }) {
  return (
    <Button color={color} onClick={callback}>
      {text}
    </Button>
  );
}
export default LinkButton;
