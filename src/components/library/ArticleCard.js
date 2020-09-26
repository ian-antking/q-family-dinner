import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledArticleCard = styled(Link)`
  border-radius: 5px;
  background: whitesmoke;
  border: 1px solid darkslategrey;
  width: 300px;
  display: flex;
  flex-flow: column nowrap;

  img {
    width: 100%;
    height: 200px;
    border-radius: 5px 5px 0 0;
    object-fit: cover;
  }

  h1 {
    margin: 15px;
  }

  p {
    margin: 0 15px 10px 15px
  }
`

const ArticleCard = ({ targetArticle }) => {

  return (
    <StyledArticleCard to={targetArticle.data.target.fields.slug}>
      <img src={targetArticle.data.target.fields.heroImage.fields.file.url} alt={targetArticle.data.target.fields.heroImage.fields.file.title}/>
      <h1>{targetArticle.data.target.fields.title}</h1>
      <p>{targetArticle.data.target.fields.blurb}</p>
    </StyledArticleCard>
  )
};

export default ArticleCard;