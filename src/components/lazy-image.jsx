import React from 'react';
import LazyLoad from 'react-lazy-load';
import Image from 'react-bulma-components/lib/components/image';

const LazyImage = (props) => {
  return (
    <LazyLoad
      debounce={false}
      offsetVertical={500}
    >
      <Image
        src={props.src}
        alt={props.altText}
        size={'square'}
      />
    </LazyLoad>
  );
};

export default LazyImage;
