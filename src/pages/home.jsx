import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Heading, Box } from 'react-bulma-components/full';
import prideGradient from '../utils/pride-gradient';

const textStyle = {
  color: 'white',
};

const HomePage = () => (
  <LazyHero
    minHeight="100vh"
    opacity={0.5}
    style={
      {
        background: prideGradient,
        overflow: 'hidden',
      }
    }
  >
    <Box
      style={
        {
          backgroundColor: '#383838',
          padding: '50px',
          transform: 'rotate(-20deg)',
        }
      }
    >
      <Heading
        size={1}
        weight="bold"
        style={textStyle}
      >
        Queer Family Tea
      </Heading>
      <Heading
        size={3}
        subtitle
        style={textStyle}
      >
        [inspirational subheading here]
      </Heading>
    </Box>
  </LazyHero>
);

export default HomePage;
