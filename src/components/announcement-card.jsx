import React from 'react';
import {
  Card,
  Content,
} from 'react-bulma-components/full';
import {
  parseISO,
  format,
} from 'date-fns';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const AnnoucementCard = props => {
  const { announcement } = props;
  const date = parseISO(announcement.fields.date);
  return (
    <Card>
      <Card.Header>{announcement.fields.title}:</Card.Header>
      <Card.Content>
        <Content>
          {documentToReactComponents(announcement.fields.content)}
        </Content>
      </Card.Content>
      <Card.Footer>{format(date, 'do MMM yyyy')}</Card.Footer>
    </Card>
  );
};

export default AnnoucementCard;
