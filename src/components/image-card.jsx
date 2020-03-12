import React from 'react';
import Card from 'react-bulma-components/lib/components/card';
import CollapseText from './collapse-text';
import LazyImage from './lazy-image';

const ImageCard = (props) => {
  return (
    <Card className="image-card">
      <LazyImage
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
