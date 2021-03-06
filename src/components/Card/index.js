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
    <div className="spaced">
      <ListGroup flush>
        {elems.map(({ id, text }) => (
          <ListGroupItem key={id} className="text-primary">
            {text}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export function Text(content, max = 35) {
  const tooLong = content.length > max;
  // if the text's too long, cut it at the max, and then find the next space,
  // take that string stub and add it to the max,
  // otherwise just get the content
  const text = tooLong
    ? `${content.slice(0, max)}${content.slice(max).split(" ")[0]}...`
    : content;
  return <CardText>{text}</CardText>;
}

function CommonCard({
  title,
  subtitle,
  content,
  action,
  actionName = "Open",
  buttonColor = "primary"
}) {
  const contentIsArray = Array.isArray(content);
  const body = contentIsArray ? List(content) : Text(content);

  return (
    <div className="spaced fixed-width">
      <Card>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          {contentIsArray && (
            <div className="centered-button">
              <ActionButton
                color={buttonColor}
                callback={action}
                text={actionName}
              />
            </div>
          )}
          {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
          {body}
          {!contentIsArray && (
            <div className="centered-button">
              <ActionButton
                color={buttonColor}
                callback={action}
                text={actionName}
              />
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}

export default CommonCard;
