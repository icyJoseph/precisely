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

import LinkButton from "../LinkButton";

export function List(elems) {
  return (
    <ListGroup>
      {elems.map(({ id, text }) => (
        <ListGroupItem key={id}>{text}</ListGroupItem>
      ))}
    </ListGroup>
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
          <LinkButton color={buttonColor} callback={action} text={actionName} />
        </CardBody>
      </Card>
    </div>
  );
}

export default CommonCard;
