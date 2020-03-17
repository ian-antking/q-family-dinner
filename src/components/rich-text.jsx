import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';
import Image from 'react-bulma-components/lib/components/image';
import { Link } from 'react-router-dom';

const IMAGES = [
  'image/png',
  'image/jpeg',
];

const RichText = props => {
  const { content } = props;
  const options = {
    renderNode: {
      [INLINES.ENTRY_HYPERLINK]: (node) => {
        return <Link to={`/${node.data.target.fields.slug}`}>{node.data.target.fields.title}</Link>;
      },
      [INLINES.HYPERLINK]: (node) => {
        return <a href={node.data.uri}>{node.content[0].value}</a>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return IMAGES.includes(node.data.target.fields.file.contentType) ? (
          <Image
            style={{
              maxWidth: '50%',
            }}
            src={node.data.target.fields.file.url}
          />
        ) : (
          <a href={node.data.target.fields.file.url} download>{node.data.target.fields.title}</a>
        );
      },
    },
  };

  return documentToReactComponents(content, options);
};

export default RichText;
