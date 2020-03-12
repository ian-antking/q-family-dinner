import React from 'react';
import Card from 'react-bulma-components/lib/components/card';
import Content from 'react-bulma-components/lib/components/content';
import HeroImage from './hero-image';
import randomColor from '../utils/random-color';
import { withRouter, Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';


const PageCard = withRouter((props) => {
  const { page } = props;
  const date = page.fields.date && parseISO(page.fields.date);

  const image = page.fields.heroImage ? page.fields.heroImage.fields.file.url : null;
  return (
    <Card
      className="page-card"
    >
      <HeroImage
        onClick={() => props.history.push(`/${page.fields.slug}`)}
        color={randomColor()}
        title={page.fields.title}
        image={image}
        pageCardHero
        link
      />
      <Card.Content>
        <Content>
          {page.fields.blurb}
          <div style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'flex-end',
          }}
          >
            <time>{date && format(date, 'do MMM yyyy')}</time>
          </div>
        </Content>
      </Card.Content>
      <Card.Footer className="tag-box">
        {page.fields.tags && page.fields.tags.map(tag => {
          return (
            <Link
              to={`/articles?query={"tag":"${tag}"}`}
              className="tag-link"
              key={`${page.fields.title}-${tag}`}
            >
              {`#${tag}`}
            </Link>
          );
        })}
      </Card.Footer>
    </Card>
  );
});

export default PageCard;
