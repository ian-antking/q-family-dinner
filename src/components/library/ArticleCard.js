import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledArticleCard = styled(Link)`
  width: calc(100vw - 20px);
  margin: 0 10px;
  max-width: 300px;
  background: ${(props) => props.theme.cardBackground};
  border: 2px solid ${(props) => props.theme.cardBorder};
  border-radius: 5px;
  color: ${(props) => props.theme.cardText};
  display: flex;
  flex-flow: column nowrap;

  
  &:link {
    color: ${(props) => props.theme.cardHeadingText};
    text-decoration: none;
  }

  &:visited{
    color: ${(props) => props.theme.cardHeadingText};
    text-decoration: none;
  }

  &:active {
    color: ${(props) => props.theme.cardHeadingText};
    text-decoration: none;
  }
    
  &:hover{
    color: ${(props) => props.theme.cardHeadingText};
    text-decoration: none;
  }

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

export default ArticleCard;
