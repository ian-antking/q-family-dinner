import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Heading, Box } from 'react-bulma-components/full';

const HomePage = () => (
  <LazyHero
    imageSrc="https://unsplash.it/2000/1000"
    minHeight="100vh"
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
