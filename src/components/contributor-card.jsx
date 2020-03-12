import React from 'react';
import Card from 'react-bulma-components/lib/components/card';
import Heading from 'react-bulma-components/lib/components/heading';
import Media from 'react-bulma-components/lib/components/media';
import Content from 'react-bulma-components/lib/components/content';
import RichText from './rich-text';


const ContributorCard = props => {
  const contributor = { ...props.contributor.fields };

  return (
    <Card>
      <Card.Image src={contributor.photo.fields.file.url} />
      <Card.Content>
        <Media renderAs="div">
          <Media.Item>
            <Heading>
              {contributor.name}
            </Heading>
            {
            contributor.email && (
            <Heading subtitle size={6}>
              <a href={`mailto:${contributor.email}`}>{contributor.email}</a>
            </Heading>
            )}
          </Media.Item>
        </Media>
        <Content renderAs="div">
          <RichText content={contributor.bio} />
        </Content>
      </Card.Content>
    </Card>
  );
};

export default ContributorCard;
