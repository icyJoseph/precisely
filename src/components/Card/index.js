import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  ListGroup,
  ListGroupItem
} from "reactstrap";

import ActionButton from "../ActionButton";

export function List(elems) {
  return (
    <div className="spaced-list">
      <ListGroup flush>
        {elems.map(({ id, text }) => (
          <ListGroupItem key={id}>{text}</ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export function Text(content) {
  return <CardText>{content}</CardText>;
}

function CommonCard({
  title,
  subtitle,
  content,
  action,
  actionName = "Open",
  buttonColor = "primary"
}) {
  const body = Array.isArray(content) ? List(content) : Text(content);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
          {body}
          <ActionButton
            color={buttonColor}
            callback={action}
            text={actionName}
          />
        </CardBody>
      </Card>
    </div>
  );
}

export default CommonCard;
