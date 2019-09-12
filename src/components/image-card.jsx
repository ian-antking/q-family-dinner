import React from 'react';
import {
  Image,
  Card,
} from 'react-bulma-components/full';

const ImageCard = (props) => {
  return (
    <Card>
      <Image
        src={props.image}
        alt={props.altText}
        size={'square'}
      />
    </Card>
  );
};

export default ImageCard;
