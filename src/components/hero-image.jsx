import React from 'react';
import Box from 'react-bulma-components/lib/components/box';
import Heading from 'react-bulma-components/lib/components/heading';
import LazyHero from 'react-lazy-hero';
import Colors from '../utils/colors';

import '../styles/index.scss';

const HeroImage = props => {
  const angle = Math.floor(Math.random() * 20);
  const rotation = Math.random() > 0.5 ? '-' : '';
  const parallax = props.parallax ? 100 : 0;
  return (
    <LazyHero
      imageSrc={props.image}
      color={props.color}
      parallaxOffset={parallax}
      className={props.pageCardHero ? 'page-card-hero' : ''}
      opacity={0.5}
    >
      <Box
        onClick={props.onClick}
        style={{
          backgroundColor: Colors.general.darkGrey,
          padding: '50px',
          transform: `rotate(${rotation}${angle}deg)`,
          cursor: props.link ? 'pointer' : 'default',
        }}
      >
        <Heading
          style={{
            color: props.textColor || 'white',
            textDecoration: props.link ? 'underline' : 'none',
          }}
        >
          {props.title}
        </Heading>
      </Box>
    </LazyHero>
  );
};

export default HeroImage;
