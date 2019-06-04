import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Heading, Box } from 'react-bulma-components/full';
import Colors from '../utils/colors';

const textStyle = {
  color: Colors.trans.white,
};

const Splash = (props) => {
  return (
    <LazyHero
      minHeight="100vh"
      opacity={0.25}
      imgSrc=""
      style={
      {
        background: props.flag,
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
    </LazyHero>);
};

export default Splash;
