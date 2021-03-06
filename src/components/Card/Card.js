import React from 'react';

import { StyledCard } from './styled/Card.styled';

import CardImg from './CardImg';
import CardBody from './CardBody';
import CardTitle from './CardTitle';
import CardText from './CardText';

const Card = (props) => {
  return <StyledCard>{props.children}</StyledCard>;
};

export default Card;

Card.Img = CardImg;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Text = CardText;
