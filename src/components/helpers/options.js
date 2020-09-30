import React from 'react';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';
import ArticleCard from '../library/ArticleCard';

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node) => <h1>{node.content[0].value}</h1>,
    [BLOCKS.HEADING_2]: (node) => <h2>{node.content[0].value}</h2>,
    [BLOCKS.HEADING_3]: (node) => <h3>{node.content[0].value}</h3>,
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <img
        src={node.data.target.fields.file.url}
        alt={node.data.target.fields.description}
      />
    ),
    [BLOCKS.EMBEDDED_ENTRY]: (node) => (
      <ArticleCard
        targetArticle={node}
      />
    ),
    [INLINES.ASSET_HYPERLINK]: (node) => (
      <a
        href={node.data.target.fields.file.url}
      >
        {node.content[0].value}
      </a>
    ),
  },
};

export default options;
