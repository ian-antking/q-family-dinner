import React from 'react';
import Heading from 'react-bulma-components/lib/components/heading';
import Image from 'react-bulma-components/lib/components/image';

const planning = () => (
  <React.Fragment>
    <Heading>We're still planning!</Heading>
    <Heading subtitle size={6}>Why not come to our weekly get-together?</Heading>
    <Image
      style={{
        width: '75%',
      }}
      src="public/assets/undraw_coffee_break_j3of.svg"
    />
  </React.Fragment>
);

export default planning;
