import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  ListGroup,
  ListGroupItem
} from "reactstrap";

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

function CommonCard({ title, subtitle, content, action, actionName = "Open" }) {
  const body = Array.isArray(content) ? List(content) : Text(content);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
          {body}
          <Button onClick={action}>{actionName}</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default CommonCard;
