import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';
import ArticleCard from './ArticleCard';

const ArticleStyles = styled.div`
	padding: 0 20px;

	blockquote {
		color: ${(props) => props.theme.quoteText};
		font-style: italic;
		font-size: 1.1em;
	}

	img {
		margin: 10%;
		max-width: 80%;
	}
	
	li>p {
		margin: 8px;
	}

	hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
	}
`;

const Article = ({ text }) => {
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

  return (
    <ArticleStyles>
      {documentToReactComponents(text.fields.content, options)}
    </ArticleStyles>
  );
};

Article.defaultProps = {
  text: {},
};

Article.propTypes = {
  text: PropTypes.shape({
    fields: PropTypes.shape({
      content: PropTypes.shape.isRequired,
    }),
  }),
};

export default Article;
