import React from 'react';
import {
  Image,
  Card,
} from 'react-bulma-components/full';
import CollapseText from './collapse-text';

const ImageCard = (props) => {
  return (
    <Card className="image-card">
      <Image
        src={props.image}
        alt={props.altText}
        size={'square'}
      />
      <CollapseText
        text={props.text ? props.text.node.text : null}
      />
    </Card>
  );
};

export default ImageCard;
