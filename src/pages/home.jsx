import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Heading, Box } from 'react-bulma-components/full';
import prideGradient from '../assets/pride-gradient';

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
