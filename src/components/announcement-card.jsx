import React from 'react';
import { Message, Image } from 'react-bulma-components/full';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';
import { Link } from 'react-router-dom';

import {
  parseISO,
  format,
} from 'date-fns';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const AnnoucementCard = props => {
  const { announcement } = props;
  const date = parseISO(announcement.fields.date);
  const options = {
    renderNode: {
      [INLINES.ENTRY_HYPERLINK]: (node) => {
        return <Link to={`/${node.data.target.fields.slug}`}>{node.data.target.fields.title}</Link>;
      },
      [INLINES.HYPERLINK]: (node) => {
        return <a href={node.data.uri}>{node.content[0].value}</a>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return node.data.target.fields.file.contentType === 'image/png' ? (
          <Image src={node.data.target.fields.file.url} />
        ) : (
          <a href={node.data.target.fields.file.url} download>{node.data.target.fields.title}</a>
        );
      },
    },
  };
  return (
    <Message>
      <Message.Header>
        {`${format(date, 'do MMM yyyy')}: ${announcement.fields.title}`}
      </Message.Header>
      <Message.Body>
        {documentToReactComponents(announcement.fields.content, options)}
      </Message.Body>
    </Message>
  );
};

export default AnnoucementCard;
