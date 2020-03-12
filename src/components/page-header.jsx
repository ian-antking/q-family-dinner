import React from 'react';
import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';

import '../styles/index.scss';

const PageHeader = props => {
  return (
    <Hero
      style={{
        backgroundColor: props.color,
      }}
    >
      <Hero.Body>
        <div className="heading-container">
          <Heading
            style={{
              color: props.textColor || 'white',
            }}
          >
            {props.title}
          </Heading>
        </div>
      </Hero.Body>
    </Hero>
  );
};

export default PageHeader;
