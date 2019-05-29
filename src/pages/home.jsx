import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Heading } from 'react-bulma-components/full';

const HomePage = () => (
  <LazyHero
    imageSrc="https://unsplash.it/2000/1000"
    minHeight="100vh"
  >
    <Heading
      size={1}
    >
      Queer Family Tea
    </Heading>
  </LazyHero>
);

export default HomePage;
