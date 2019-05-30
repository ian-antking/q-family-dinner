import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Heading, Box } from 'react-bulma-components/full';

const prideGradient = 'linear-gradient(180deg, #f00000, #f00000 16.67%, #ff8000 16.67%, #ff8000 33.33%, #ffff00 33.33%, #ffff00 50%, #007940 50%, #007940 66.67%, #4040ff 66.67%, #4040ff 83.33%, #a000c0 83.33%, #a000c0)';

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
        style={
          {
            color: 'white',
          }
        }
      >
        Queer Family Tea
      </Heading>
    </Box>
  </LazyHero>
);

export default HomePage;
