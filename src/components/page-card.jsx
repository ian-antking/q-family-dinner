import React from 'react';
import { Card, Content } from 'react-bulma-components/full';
import HeroImage from './hero-image';
import randomColor from '../utils/random-color';


const PageCard = (props) => {
  const { page } = props;

  const image = page.fields.heroImage ? page.fields.heroImage.fields.file.url : null;

  return (
    <Card className="page-card">
      <HeroImage
        color={randomColor()}
        title={page.fields.title}
        image={image}
      />
      <Card.Header>
        <Card.Header.Title>{page.fields.title}</Card.Header.Title>
      </Card.Header>
      <Card.Content>
        <Content>
          {page.fields.blurb}
        </Content>
      </Card.Content>
    </Card>
  );
};

export default PageCard;
