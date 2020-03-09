import React from 'react';
import { Card, Content } from 'react-bulma-components/full';
import HeroImage from './hero-image';
import randomColor from '../utils/random-color';
import { withRouter } from 'react-router-dom';


const PageCard = withRouter((props) => {
  const { page } = props;

  const image = page.fields.heroImage ? page.fields.heroImage.fields.file.url : null;
  return (
    <Card
      className="page-card"
      onClick={() => props.history.push(`/${page.fields.slug}`)}
    >
      <HeroImage
        color={randomColor()}
        title={page.fields.title}
        image={image}
        pageCardHero
      />
      <Card.Content>
        <Content>
          {page.fields.blurb}
        </Content>
      </Card.Content>
      <Card.Footer className="tag-box">
        {page.fields.tags && page.fields.tags.map(tag => {
          return (
            <span
              to={`/articles?tag=${tag}`}
              className="tag-link"
              key={`${page.fields.title}-${tag}`}
            >
              {`#${tag}`}
            </span>
          );
        })}
      </Card.Footer>
    </Card>
  );
});

export default PageCard;
