import React from 'react';
import { Box, Heading } from 'react-bulma-components/full';
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
      opacity={0.5}
    >
      <Box
        style={{
          backgroundColor: Colors.general.darkGrey,
          padding: '50px',
          transform: `rotate(${rotation}${angle}deg)`,
        }}
      >
        <Heading
          style={{
            color: props.textColor || 'white',
          }}
        >
          {props.title}
        </Heading>
      </Box>
    </LazyHero>
  );
};

export default HeroImage;
