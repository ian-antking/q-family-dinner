import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import options from '../helpers/options';

const ArticleStyles = styled.div`
  padding: 0 20px;

  blockquote {
    margin: 0 10px;
    color: ${(props) => props.theme.quoteText};
    font-style: italic;
  }

  img {
    margin: 10%;
    max-width: 80%;
  }

  ul, ol {
    margin-left: 0;
    padding-left: 20px;
  }

  hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  }
`;

const Article = ({ text }) => (
  <ArticleStyles>
    {documentToReactComponents(text.fields.content, options)}
  </ArticleStyles>
);

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
