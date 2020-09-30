import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LinkCard from './LinkCard';

const StyledArticleCard = styled(LinkCard)`
  .articleCardImage {
    padding: 0;
    margin: 0;
    width: 100%;
    max-width: 100%;
    height: 200px;
    border-radius: 5px 5px 0 0;
    object-fit: cover;
    text-decoration: none;
  }

  .articleCardHeading {
    margin: 15px;
    color: ${(props) => props.theme.cardHeadingText};
  }

  .articleCardText {
    margin: 0 15px 10px 15px;
    text-decoration: none;
  }
`;

const ArticleCard = ({ targetArticle }) => (
  <StyledArticleCard to={targetArticle.data.target.fields.slug}>
    <img className="articleCardImage" src={targetArticle.data.target.fields.heroImage.fields.file.url} alt={targetArticle.data.target.fields.heroImage.fields.file.title} />
    <h1 className="articleCardHeading">{targetArticle.data.target.fields.title}</h1>
    <p className="articleCardText">{targetArticle.data.target.fields.blurb}</p>
  </StyledArticleCard>
);
ArticleCard.defaultProps = {
  targetArticle: {},
};

ArticleCard.propTypes = {
  targetArticle: PropTypes.shape({
    data: PropTypes.shape({
      target: PropTypes.shape({
        fields: PropTypes.shape({
          title: PropTypes.string.isRequired,
          blurb: PropTypes.string.isRequired,
          slug: PropTypes.string.isRequired,
          heroImage: PropTypes.shape({
            fields: PropTypes.shape({
              file: PropTypes.shape({
                url: PropTypes.string.isRequired,
              }),
              title: PropTypes.string.isRequired,
            }),
          }),
        }),
      }),
    }),
  }),
};

export default ArticleCard;
