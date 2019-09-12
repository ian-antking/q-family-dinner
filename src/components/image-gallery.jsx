import React from 'react';
import {
  Section,
} from 'react-bulma-components/full';
import ImageCard from './image-card';

const ImageGallery = (props) => (
  <Section className="image-gallery">
    {
      props.images.map(image => {
        return (
          <ImageCard
            key={image.node.id}
            altText={image.node.accessibility_caption}
            image={image.node.display_url}
            text={image.node.edge_media_to_caption.edges[0]}
          />
        );
      })
    }
  </Section>
);

export default ImageGallery;
