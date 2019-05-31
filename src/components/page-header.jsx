import React from 'react';
import { Hero, Heading, Container } from 'react-bulma-components/full';

const PageHeader = (props) => (
  <Hero
    style={
    {
      backgroundColor: props.color,
    }
  }
  >
    <Hero.Body>
      <Container
        style={
          {
            display: 'flex',
            justifyContent: 'center',
          }
        }
      >
        <Heading
          style={
            {
              color: props.textColor || 'white',
            }
          }
        >
          {props.title}
        </Heading>
      </Container>
    </Hero.Body>
  </Hero>
);

export default PageHeader;
