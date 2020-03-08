import React from 'react';
import { Card, Content } from 'react-bulma-components/full';

const PageCard = (props) => {
  const { page } = props;
  return (
    <Card className="page-card">
      {page.fields.heroImage && (
        <Card.Image src={page.fields.heroImage.fields.file.url} />
      )}
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
