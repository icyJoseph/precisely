import React from "react";
import { Button } from "reactstrap";

export function ActionButton({ color = "primary", callback, text, ...props }) {
  return (
    <Button color={color} onClick={callback} {...props}>
      {text}
    </Button>
  );
}
export default ActionButton;
