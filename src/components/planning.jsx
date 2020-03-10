import React from 'react';
import {
  Heading,
  Image,
} from 'react-bulma-components/full';

const planning = () => (
  <React.Fragment>
    <Heading>We're still planning!</Heading>
    <Heading subtitle size={6}>Why not come to our weekly get-together?</Heading>
    <Image
      style={{
        width: '75%',
      }}
      src="src/assets/undraw_coffee_break_j3of.svg"
    />
  </React.Fragment>
);

export default planning;
