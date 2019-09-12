import React from 'react';
import {
  Section,
} from 'react-bulma-components/full';
import ImageCard from './image-card';

const ImageGallery = (props) => (
  <Section>
    {
      props.images.map(image => {
        return (
          <ImageCard
            key={image.node.id}
            altText={image.node.accessibility_caption}
            image={image.node.display_url}
          />
        );
      })
    }
  </Section>
);

export default ImageGallery;
