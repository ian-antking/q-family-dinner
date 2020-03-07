import React from 'react';
import {
  Card,
  Heading,
  Media,
  Content,
} from 'react-bulma-components/full';
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
