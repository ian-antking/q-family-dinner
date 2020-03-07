import React from 'react';
import {
  Card,
  Heading,
  Media,
  Content,
} from 'react-bulma-components/full';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES } from '@contentful/rich-text-types';
import { Link } from 'react-router-dom';


const ContributorCard = props => {
  const contributor = { ...props.contributor.fields };
  const options = {
    renderNode: {
      [INLINES.ENTRY_HYPERLINK]: (node) => {
        return <Link to={`/${node.data.target.fields.slug}`}>{node.data.target.fields.title}</Link>;
      },
      [INLINES.HYPERLINK]: (node) => {
        return <a href={node.data.uri}>{node.content[0].value}</a>;
      },
    },
  };
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
          {documentToReactComponents(contributor.bio, options)}
        </Content>
      </Card.Content>
    </Card>
  );
};

export default ContributorCard;
