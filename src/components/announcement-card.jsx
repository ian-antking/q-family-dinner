import React from 'react';
import { Message } from 'react-bulma-components/full';
import RichText from './rich-text';
import { parseISO, format } from 'date-fns';

const AnnoucementCard = props => {
  const { announcement } = props;
  const date = parseISO(announcement.fields.date);

  return (
    <Message>
      <Message.Header>
        {`${format(date, 'do MMM yyyy')}: ${announcement.fields.title}`}
      </Message.Header>
      <Message.Body>
        <RichText content={announcement.fields.content} />
      </Message.Body>
    </Message>
  );
};

export default AnnoucementCard;
