import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Heading, Box } from 'react-bulma-components/full';
import Flags from '../utils/q-flags';
import Colors from '../utils/colors';

const textStyle = {
  color: Colors.trans.white,
};

const _randomFlag = () => {
  const keys = Object.keys(Flags);
  return Flags[keys[Math.floor(Math.random() * keys.length)]];
};

const Splash = () => (
  <LazyHero
    minHeight="100vh"
    opacity={0.5}
    style={
      {
        background: _randomFlag(),
        overflow: 'hidden',
      }
    }
  >
    <Box
      style={
        {
          backgroundColor: Colors.general.darkGrey,
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
        size={4}
        subtitle
        style={textStyle}
      >
        For the queer community by the queer community.
      </Heading>
    </Box>
  </LazyHero>
);

export default Splash;
